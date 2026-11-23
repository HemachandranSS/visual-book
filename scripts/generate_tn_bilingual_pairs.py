#!/usr/bin/env python3
"""Build EM/TM pairs from TN school book cards in miscellaneous_index.html."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "pages/miscellaneous_index.html"
OUT_JS = ROOT / "assets/tn_bilingual_pairs.js"

CARD_RE = re.compile(
    r'href="dual_pdf_viewer\.html\?book=([^"]+)"[\s\S]*?'
    r'<h2 class="card-title">(.*?)</h2>',
    re.IGNORECASE,
)


def decode_title(raw: str) -> str:
    import html

    return html.unescape(re.sub(r"\s+", " ", raw)).strip()


def medium_from(stem: str, title: str) -> str | None:
    blob = f"{stem} {title}".lower()
    if re.search(r"\btm\b|tamil medium|tamil_medium|_tm_|_tm\b", blob):
        return "tm"
    if re.search(r"\bem\b|english medium|english_medium|_em_|_em\b", blob):
        return "em"
    return None


def pair_key(stem: str, title: str) -> str:
    s = stem.lower()
    s = re.sub(r"(?i)english[_ ]medium", "", s)
    s = re.sub(r"(?i)tamil[_ ]medium", "", s)
    s = re.sub(r"(?i)_em(_|_optimised|_optimised|_optimized|optimised|optimized|$)", "_", s)
    s = re.sub(r"(?i)_tm(_|_optimised|_optimised|_optimized|optimised|optimized|$)", "_", s)
    s = re.sub(r"(?i)[\s_]*(em|tm)[\s_]*", "_", s)
    s = re.sub(r"_+", "_", s).strip("_")
    # Normalize term dashes
    s = s.replace("term-", "term_")
    # Title-based fallback when stems differ slightly
    t = decode_title(title).lower()
    t = re.sub(r"\s+(em|tm)\s*$", "", t)
    t = re.sub(r"[^a-z0-9]+", "_", t).strip("_")
    return s or t


def extract_tn_cards(html: str) -> list[dict]:
    start = html.find("TN School Books 2020 Edition")
    end = html.find('<div class="empty"', start)
    if start < 0 or end < 0:
        raise SystemExit("TN school section not found")
    chunk = html[start:end]
    cards = []
    for book, title in CARD_RE.findall(chunk):
        stem = book.split("/")[-1]
        med = medium_from(stem, title)
        if not med:
            continue
        cards.append(
            {
                "book": book,
                "stem": stem,
                "title": decode_title(title),
                "medium": med,
                "key": pair_key(stem, title),
            }
        )
    return cards


def build_pairs(cards: list[dict]) -> list[dict]:
    em_by_key: dict[str, dict] = {}
    tm_by_key: dict[str, dict] = {}
    for c in cards:
        if c["medium"] == "em":
            em_by_key.setdefault(c["key"], c)
        else:
            tm_by_key.setdefault(c["key"], c)

    pairs = []
    for key, em in sorted(em_by_key.items()):
        tm = tm_by_key.get(key)
        if not tm:
            continue
        label = re.sub(r"\s+(EM|TM)\s*$", "", em["title"], flags=re.I).strip()
        pairs.append(
            {
                "title": label,
                "bookEm": em["book"],
                "bookTm": tm["book"],
            }
        )
    return pairs


def main():
    html = HTML.read_text(encoding="utf-8")
    cards = extract_tn_cards(html)
    pairs = build_pairs(cards)
    OUT_JS.write_text(
        "const tnBilingualPairs = "
        + json.dumps(pairs, indent=4, ensure_ascii=False)
        + ";\n\n"
        + """(function renderTnBilingualSection() {
    const grid = document.getElementById('tnBilingualGrid');
    const countEl = document.getElementById('tnBilingualCount');
    if (!grid || !tnBilingualPairs) return;

    const label = tnBilingualPairs.length === 1 ? 'Pair' : 'Pairs';
    if (countEl) countEl.textContent = `${tnBilingualPairs.length} ${label}`;

    grid.innerHTML = tnBilingualPairs.map((pair) => {
        const q = new URLSearchParams({ bookEm: pair.bookEm, bookTm: pair.bookTm });
        return `<a class="card" href="dual_pdf_viewer.html?${q.toString()}" target="_blank">
                    <h2 class="card-title">${pair.title}</h2>
                    <p class="card-sub" style="margin-top:6px;color:var(--muted);font-size:0.88rem;">English left · Tamil right · same page</p>
                </a>`;
    }).join('\\n');
})();
""",
        encoding="utf-8",
    )
    print(f"Wrote {len(pairs)} bilingual pairs to {OUT_JS}")


if __name__ == "__main__":
    main()