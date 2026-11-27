#!/usr/bin/env python3
"""Scrape public Mains Essay practice listings into local JSON."""

from __future__ import annotations

import html as html_lib
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / "assets" / "upsc_essay_practice_topics.json"

SOURCE_URL = "https://www.drishtiias.com/mains-practice-question/gs-mains-essay"
BASE = SOURCE_URL
USER_AGENT = (
    "Mozilla/5.0 (compatible; visual-book-scraper/1.0; +https://github.com/local/visual-book)"
)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="replace")


def parse_total_questions(soup: BeautifulSoup) -> int | None:
    for tag in soup.find_all("h6"):
        text = tag.get_text(" ", strip=True)
        m = re.search(r"Total Questions\s*:\s*(\d+)", text, re.I)
        if m:
            return int(m.group(1))
    return None


def last_page(soup: BeautifulSoup) -> int:
    pages: list[int] = []
    for a in soup.select("div.pagination a[href]"):
        qs = urllib.parse.parse_qs(urllib.parse.urlparse(a["href"]).query)
        if "page" in qs:
            pages.append(int(qs["page"][0]))
    return max(pages) if pages else 1


def clean_topic_line(text: str) -> str:
    text = html_lib.unescape(text).strip()
    text = re.sub(r"^\s*essay\s*topics\s*:?\s*", "", text, flags=re.I)
    text = re.sub(r"^\s*(?:Q\.?|Question:?)\s*", "", text, flags=re.I)
    text = re.sub(r"^\s*\d+\.\s*", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def split_numbered_blob(text: str) -> list[str]:
    parts = re.split(r"\s*(?<!\d)\d+\.\s+", text)
    out: list[str] = []
    for part in parts:
        line = clean_topic_line(part)
        if line:
            out.append(line)
    return out


def topics_from_body(body: BeautifulSoup) -> list[str]:
    for h in body.find_all(["h3", "h4"]):
        if re.search(r"essay\s*topics", h.get_text(" ", strip=True), re.I):
            h.decompose()
    topics: list[str] = []
    for p in body.find_all("p"):
        raw = p.get_text(" ", strip=True)
        if re.search(r"essay\s*topics", raw, re.I) and len(re.findall(r"\d+\.", raw)) >= 2:
            topics.extend(split_numbered_blob(raw))
            continue
        line = clean_topic_line(raw)
        if line:
            topics.append(line)
    if not topics:
        raw = clean_topic_line(body.get_text(" ", strip=True))
        if raw:
            topics.append(raw)
    return topics


def parse_listing_page(html: str) -> list[dict]:
    soup = BeautifulSoup(html, "html.parser")
    accordion = soup.select_one("#accordion > ul")
    if not accordion:
        return []

    entries: list[dict] = []
    for li in accordion.find_all("li", recursive=False):
        link = li.find("a", href=re.compile(r"/mains-practice-question/question-\d+"))
        if not link:
            continue
        href = link.get("href", "")
        qid_m = re.search(r"question-(\d+)", href)
        question_id = qid_m.group(1) if qid_m else None

        date_a = li.select_one("span.qdate a")
        date_label = date_a.get_text(strip=True) if date_a else ""
        date_slug = ""
        if date_a and date_a.get("href"):
            dm = re.search(r"date-(\d{4}-\d{2}-\d{2})", date_a["href"])
            if dm:
                date_slug = dm.group(1)

        inner = BeautifulSoup(link.decode_contents(), "html.parser")
        topics = topics_from_body(inner)

        entries.append(
            {
                "id": question_id,
                "url": urllib.parse.urljoin(SOURCE_URL, href),
                "date": date_slug,
                "dateLabel": date_label,
                "topics": topics,
            }
        )
    return entries


def main() -> None:
    print(f"Fetching {SOURCE_URL} …")
    first_html = fetch(SOURCE_URL)
    first_soup = BeautifulSoup(first_html, "html.parser")
    total_expected = parse_total_questions(first_soup)
    max_page = last_page(first_soup)

    all_entries: list[dict] = []
    seen_ids: set[str] = set()

    for page in range(1, max_page + 1):
        url = SOURCE_URL if page == 1 else f"{BASE}?page={page}"
        html = first_html if page == 1 else fetch(url)
        batch = parse_listing_page(html)
        for entry in batch:
            eid = entry.get("id") or entry["url"]
            if eid in seen_ids:
                continue
            seen_ids.add(eid)
            all_entries.append(entry)
        print(f"  page {page}/{max_page}: +{len(batch)} (running total {len(all_entries)})")
        if page < max_page:
            time.sleep(0.35)

    payload = {
        "source": SOURCE_URL,
        "scrapedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "totalListedOnSite": total_expected,
        "count": len(all_entries),
        "entries": all_entries,
    }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(all_entries)} entries to {OUT_JSON}")
    if total_expected and len(all_entries) != total_expected:
        print(f"Warning: site lists {total_expected} but scraped {len(all_entries)}")


if __name__ == "__main__":
    main()