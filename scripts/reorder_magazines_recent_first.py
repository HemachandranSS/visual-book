#!/usr/bin/env python3
"""Reorder magazine index HTML (and JS lists) so newest issues appear first."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]
MONTH_RANK = {m: i for i, m in enumerate(MONTHS)}

CARD_RE = re.compile(r'<a class="card"[\s\S]*?</a>\s*', re.IGNORECASE)


def extract_cards(block: str) -> list[str]:
    return CARD_RE.findall(block)


def reverse_grid_cards(block: str) -> str:
    pattern = re.compile(
        r'(<section[^>]*class="grid"[^>]*>)([\s\S]*?)(</section>)',
        re.IGNORECASE,
    )

    out = []
    last = 0
    for m in pattern.finditer(block):
        out.append(block[last : m.start()])
        inner = m.group(2)
        cards = extract_cards(inner)
        if cards:
            body = "".join(reversed(cards))
            out.append(f"{m.group(1)}\n{body}\n            {m.group(3)}")
        else:
            out.append(m.group(0))
        last = m.end()
    out.append(block[last:])
    return "".join(out)


def reverse_year_month_structure(block: str) -> str:
    year_pat = re.compile(r'(<h3 class="year-title">\d{4}</h3>)')
    parts = year_pat.split(block)
    if len(parts) < 3:
        return reverse_grid_cards(block)

    prefix = parts[0]
    year_chunks = []
    i = 1
    while i < len(parts):
        year_chunks.append(parts[i] + parts[i + 1])
        i += 2

    def split_months(year_chunk: str):
        month_pat = re.compile(r'(<h4 class="month-title">([^<]+)</h4>)')
        segs = month_pat.split(year_chunk)
        year_header = segs[0]
        months = []
        j = 1
        while j < len(segs):
            title_tag = segs[j]
            month_name = segs[j + 1].strip()
            body = segs[j + 2] if j + 2 < len(segs) else ""
            months.append((month_name, title_tag, body))
            j += 3
        return year_header, months

    rebuilt_years = []
    for yc in reversed(year_chunks):
        year_header, months = split_months(yc)
        months.sort(key=lambda m: MONTH_RANK.get(m[0], -1), reverse=True)
        month_blobs = []
        for _name, title_tag, body in months:
            month_blobs.append(title_tag + reverse_grid_cards(body))
        rebuilt_years.append(year_header + "".join(month_blobs))

    return prefix + "".join(rebuilt_years)


def reverse_single_grid_html(path: Path, grid_id: str = "visualGrid"):
    content = path.read_text(encoding="utf-8")
    start = f'<section id="{grid_id}" class="grid">'
    i = content.find(start)
    if i < 0:
        raise SystemExit(f"{path}: grid not found")
    j = content.find("</section>", i + len(start))
    if j < 0:
        raise SystemExit(f"{path}: grid end not found")
    inner = content[i + len(start) : j]
    cards = extract_cards(inner)
    if not cards:
        return
    new_inner = "\n\n" + "".join(reversed(cards)) + "\n"
    content = content[: i + len(start)] + new_inner + content[j:]
    path.write_text(content, encoding="utf-8")


def reverse_js_array(path: Path, array_name: str):
    content = path.read_text(encoding="utf-8")
    pat = re.compile(
        rf"const {re.escape(array_name)} = \[([\s\S]*?)\];",
        re.MULTILINE,
    )
    m = pat.search(content)
    if not m:
        return
    body = m.group(1)
    entries = re.findall(r'"[^"]*"|\'[^\']*\'', body)
    if len(entries) < 2:
        return
    new_body = "\n".join(f"    {e}," for e in reversed(entries)) + "\n"
    new_content = content[: m.start(1)] + new_body + content[m.end(1) :]
    path.write_text(new_content, encoding="utf-8")


def reverse_js_concat_arrays(path: Path, names: list[str]):
    content = path.read_text(encoding="utf-8")
    for name in names:
        pat = re.compile(
            rf"(const {re.escape(name)} = \[)([\s\S]*?)(\];)",
            re.MULTILINE,
        )
        m = pat.search(content)
        if not m:
            continue
        body = m.group(2)
        entries = re.findall(r'"[^"]*"|\'[^\']*\'', body)
        if len(entries) < 2:
            continue
        new_body = "\n".join(f"  {e}," for e in reversed(entries)) + "\n"
        content = content[: m.start(2)] + new_body + content[m.end(2) :]
    path.write_text(content, encoding="utf-8")


def reorder_india_today_group_html():
    path = ROOT / "pages/india_today_group_index.html"
    it = path.read_text(encoding="utf-8")

    m_bt = re.search(
        r'(<div class="section-head">\s*<h2 class="section-title">Business Today</h2>[\s\S]*?</div>\s*)',
        it,
    )
    m_it = re.search(
        r'(<div class="section-head">\s*<h2 class="section-title">India Today</h2>\s*</div>)',
        it,
    )
    if not m_bt or not m_it:
        raise SystemExit("Business Today / India Today markers missing")

    bt_prefix_end = m_bt.end()
    it_start = m_it.start()
    bt_body = it[bt_prefix_end:it_start]
    it_tail_start = m_it.end()
    m_close = re.search(
        r'\n\s*</section>\s*\n\s*<div class="empty"',
        it[it_tail_start:],
    )
    if not m_close:
        raise SystemExit("India Today section end not found")
    it_body = it[it_tail_start : it_tail_start + m_close.start()]
    it_suffix = it[it_tail_start + m_close.start() :]

    it = (
        it[:bt_prefix_end]
        + reverse_year_month_structure(bt_body)
        + it[it_start:it_tail_start]
        + reverse_year_month_structure(it_body)
        + it_suffix
    )
    path.write_text(it, encoding="utf-8")


def main():
    reorder_india_today_group_html()

    for page in ("digit_index.html", "osfy_index.html", "efy_index.html"):
        reverse_single_grid_html(ROOT / "pages" / page)

    reverse_js_array(ROOT / "assets/digit_index.js", "digitBooks")
    reverse_js_array(ROOT / "assets/efy_index.js", "electronicsForYou")

    reverse_js_concat_arrays(
        ROOT / "assets/osfy_index.js",
        ["books5Files", "books6Files", "books30Files"],
    )

    print("Reordered: india_today_group, digit, osfy, efy (HTML + JS where applicable).")


if __name__ == "__main__":
    main()