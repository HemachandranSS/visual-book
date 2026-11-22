#!/usr/bin/env python3
"""Split india_today_group_index into hub + Business Today + India Today + Auto Today pages."""

from __future__ import annotations

import re
from collections import defaultdict
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "pages"
ASSETS = ROOT / "assets"

HEAD_STYLE = """    <style>
        .year-title {
            margin: 28px 0 8px;
            font-size: 1.35rem;
            letter-spacing: -0.03em;
        }

        .month-title {
            margin: 16px 0 10px;
            color: var(--muted);
            font-size: 1.05rem;
            font-weight: 600;
        }

        .hub-back {
            margin-top: 8px;
            font-size: 0.95rem;
        }

        .hub-back a {
            color: var(--muted);
            text-decoration: none;
        }

        .hub-back a:hover {
            color: var(--text);
            text-decoration: underline;
        }
    </style>"""

AUTO_FILES = [
    "01012024-md-aut.pdf",
    "01012025-md-aut.pdf",
    "01012026-md-aut.pdf",
    "01022024-md-aut.pdf",
    "01022025-md-aut.pdf",
    "01022026-md-aut.pdf",
    "01032024-md-aut.pdf",
    "01032025-md-aut.pdf",
    "01032026-md-aut.pdf",
    "01042023-md-aut.pdf",
    "01042024-md-aut.pdf",
    "01042025-md-aut.pdf",
    "01042026-md-aut.pdf",
    "01052023-md-aut.pdf",
    "01052024-md-aut.pdf",
    "01052025-md-aut.pdf",
    "01052026-md-aut.pdf",
    "01062024-md-aut.pdf",
    "01062025-md-aut.pdf",
    "01062026-md-aut.pdf",
    "01072023-md-aut.pdf",
    "01072024-md-aut.pdf",
    "01072025-md-aut.pdf",
    "01072026-md-aut.pdf",
    "01082023-md-aut.pdf",
    "01082024-md-aut.pdf",
    "01082025-md-aut.pdf",
    "01082026-md-aut.pdf",
    "01092023-md-aut.pdf",
    "01092024-md-aut.pdf",
    "01092025-md-aut.pdf",
    "01092026-md-aut.pdf",
    "01102023-md-aut.pdf",
    "01102024-md-aut.pdf",
    "01102025-md-aut.pdf",
    "01102026-md-aut.pdf",
    "01112023-md-aut.pdf",
    "01112024-md-aut.pdf",
    "01112025-md-aut.pdf",
    "01122023-md-aut.pdf",
    "01122024-md-aut.pdf",
    "01122025-md-aut.pdf",
]

MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]


def page_shell(title: str, h1: str, body: str, script: str, back: bool = True) -> str:
    back_html = (
        '<p class="hub-back"><a href="india_today_group_index.html">← India Today Group</a></p>'
        if back
        else ""
    )
    return f"""<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{title}</title>

    <link rel="stylesheet" href="../assets/index.css">
    <link rel="stylesheet" href="../assets/login.css" />
    <script src="../assets/login.js"></script>
{HEAD_STYLE}
</head>

<body>

    <main class="shell">

        <section class="hero">
            <div>
                <h1>{h1}</h1>
                {back_html}
            </div>

            <div id="count" class="count"></div>
        </section>

        <section class="section">
{body}
        </section>

        <div class="empty" style="display:none;">
            No book folders were found.
        </div>

        <div class="footer">
            Click any issue to open it in the dual-page viewer.
        </div>

    </main>

    <script src="../assets/{script}"></script>

</body>

</html>
"""


def parse_aut_date(stem: str) -> datetime:
    m = re.match(r"(\d{2})(\d{2})(\d{4})-md-aut", stem)
    if not m:
        raise ValueError(stem)
    day, month, year = int(m.group(1)), int(m.group(2)), int(m.group(3))
    return datetime(year, month, day)


def build_auto_today_body() -> tuple[str, list[str]]:
    by_year: dict[int, dict[int, list[tuple[datetime, str]]]] = defaultdict(
        lambda: defaultdict(list)
    )
    urls: list[str] = []
    for pdf in AUTO_FILES:
        stem = pdf.replace(".pdf", "")
        dt = parse_aut_date(stem)
        by_year[dt.year][dt.month].append((dt, stem))
        urls.append(
            f"https://hemachandranss.github.io/books31/books/visual-books/{stem}"
        )

    parts = [
        """            <div class="section-head">
                <h2 class="section-title">Auto Today</h2>
                <div id="visualCount" class="section-note"></div>
            </div>
"""
    ]
    for year in sorted(by_year.keys(), reverse=True):
        parts.append(f'            <h3 class="year-title">{year}</h3>\n')
        months = by_year[year]
        for month in sorted(months.keys(), reverse=True):
            parts.append(
                f'            <h4 class="month-title">{MONTHS[month - 1]}</h4>\n'
            )
            parts.append('            <section class="grid">\n')
            issues = sorted(months[month], key=lambda x: x[0], reverse=True)
            for dt, stem in issues:
                label = dt.strftime("%d %B %Y")
                parts.append(
                    f"""                <a class="card"
                    href="dual_pdf_viewer.html?book=books31/books/visual-books/{stem}"
                    target="_blank">
                    <h2 class="card-title">Auto Today — {label}</h2>
                </a>
"""
                )
            parts.append("            </section>\n")
    return "".join(parts), urls


def extract_legacy_sections(html: str) -> tuple[str, str]:
    bt_marker = '<h2 class="section-title">Business Today</h2>'
    it_marker = '<h2 class="section-title">India Today</h2>'
    i_bt = html.find(bt_marker)
    i_it = html.find(it_marker)
    if i_bt < 0 or i_it < 0:
        raise SystemExit("Could not find Business Today / India Today sections")

    # Business: from first year-title after Business Today head through content before India Today head
    bt_chunk = html[i_bt:i_it]
    year_start = bt_chunk.find('<h3 class="year-title">')
    business_body = bt_chunk[year_start:]

    # India: after India Today head div through last grid before empty state
    it_chunk = html[i_it:]
    year_start = it_chunk.find('<h3 class="year-title">')
    end = it_chunk.find('<div class="empty"')
    if end < 0:
        end = it_chunk.rfind("</section>")
    india_body = it_chunk[year_start:end].strip()

    business_wrapped = f"""            <div class="section-head">
                <h2 class="section-title">Business Today</h2>
                <div id="visualCount" class="section-note"></div>
            </div>
{business_body}
"""
    india_wrapped = f"""            <div class="section-head">
                <h2 class="section-title">India Today</h2>
                <div id="visualCount" class="section-note"></div>
            </div>
{india_body}
"""
    return business_wrapped, india_wrapped


def build_hub_html(bt_count: int, it_count: int, auto_count: int) -> str:
    total = bt_count + it_count + auto_count
    return page_shell(
        "India Today Group",
        "India Today Group",
        f"""            <div class="section-head">
                <h2 class="section-title">Magazines</h2>
                <div class="section-note">{total} Issues</div>
            </div>

            <section class="grid" id="hubGrid">
                <a class="card" href="business_today_index.html">
                    <h2 class="card-title">Business Today</h2>
                    <p style="margin-top:8px;color:var(--muted);font-size:0.92rem;">Fortnightly business magazine — {bt_count} issues.</p>
                </a>
                <a class="card" href="india_today_index.html">
                    <h2 class="card-title">India Today</h2>
                    <p style="margin-top:8px;color:var(--muted);font-size:0.92rem;">Weekly news magazine — {it_count} issues.</p>
                </a>
                <a class="card" href="auto_today_index.html">
                    <h2 class="card-title">Auto Today</h2>
                    <p style="margin-top:8px;color:var(--muted);font-size:0.92rem;">Automotive magazine — {auto_count} issues.</p>
                </a>
            </section>
""",
        "india_today_group_hub.js",
        back=False,
    )


def split_js_array(js_path: Path) -> tuple[list[str], list[str], list[str]]:
    text = js_path.read_text(encoding="utf-8")
    m = re.search(
        r"const indiaTodayGroupBooks = \[([\s\S]*?)\];", text
    )
    if not m:
        raise SystemExit("indiaTodayGroupBooks not found")
    entries = re.findall(r'"([^"]+)"|\'([^\']+)\'', m.group(1))
    urls = [a or b for a, b in entries]

    business, india, auto = [], [], []
    for url in urls:
        low = url.lower()
        if "md-aut" in low:
            auto.append(url)
        elif "business_today" in low:
            business.append(url)
        else:
            india.append(url)
    return business, india, auto


def write_list_js(path: Path, const_name: str, urls: list[str]):
    relative_name = "relative" + const_name[0].upper() + const_name[1:]
    lines = "\n".join(f'    "{u}",' for u in urls)
    path.write_text(
        f"""const {const_name} = [
{lines}

];

const normalizeBookPath = (value) => {{
    if (!value) return '';

    try {{
        const url = new URL(value, window.location.href);
        const pathname = url.pathname
            .replace(/^\\/+/, '')
            .replace(/\\/+$/, '');

        const booksIndex = pathname.indexOf('books/');

        return booksIndex >= 0 ? pathname.slice(booksIndex) : pathname;
    }} catch {{
        const cleaned = String(value)
            .replace(/^\\/+/, '')
            .replace(/\\/+$/, '');

        const booksIndex = cleaned.indexOf('books/');

        return booksIndex >= 0 ? cleaned.slice(booksIndex) : cleaned;
    }}
}};

const {relative_name} = {const_name}.map((book) =>
    normalizeBookPath(book)
);

const bookCount = {relative_name}.length;

const label = bookCount === 1 ? 'Issue' : 'Issues';

const countEl = document.getElementById('count');
if (countEl) countEl.textContent = `${{bookCount}} ${{label}}`;

const visualCountEl = document.getElementById('visualCount');
if (visualCountEl) visualCountEl.textContent = `${{bookCount}} ${{label}}`;

const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');

if (bookCount === 0) {{
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
}} else {{
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';
}}
""",
        encoding="utf-8",
    )


def write_hub_js(path: Path, bt: int, it: int, auto: int):
    total = bt + it + auto
    path.write_text(
        f"""const hubMagazineCounts = {{
  businessToday: {bt},
  indiaToday: {it},
  autoToday: {auto},
  total: {total},
}};

const label = hubMagazineCounts.total === 1 ? 'Issue' : 'Issues';
const countEl = document.getElementById('count');
if (countEl) {{
  countEl.textContent = `${{hubMagazineCounts.total}} ${{label}}`;
}}
""",
        encoding="utf-8",
    )


def main():
    legacy = (PAGES / "india_today_group_index.html").read_text(encoding="utf-8")
    business_body, india_body = extract_legacy_sections(legacy)
    auto_body, auto_urls = build_auto_today_body()

    business_urls, india_urls, existing_auto = split_js_array(
        ASSETS / "india_today_group_index.js"
    )
    # Merge auto URLs from file list (authoritative)
    auto_urls_set = {u.rstrip("/").replace(".pdf", "") for u in auto_urls}
    for u in existing_auto:
        base = u.replace(".pdf", "")
        if base not in auto_urls_set and "md-aut" in u:
            auto_urls.append(u)

    (PAGES / "business_today_index.html").write_text(
        page_shell("Business Today", "Business Today", business_body, "business_today_index.js"),
        encoding="utf-8",
    )
    (PAGES / "india_today_index.html").write_text(
        page_shell("India Today", "India Today", india_body, "india_today_index.js"),
        encoding="utf-8",
    )
    (PAGES / "auto_today_index.html").write_text(
        page_shell("Auto Today", "Auto Today", auto_body, "auto_today_index.js"),
        encoding="utf-8",
    )

    template_js = ASSETS / "india_today_group_index.js"
    write_list_js(ASSETS / "business_today_index.js", "businessTodayBooks", business_urls)
    write_list_js(ASSETS / "india_today_index.js", "indiaTodayMagazineBooks", india_urls)
    write_list_js(ASSETS / "auto_today_index.js", "autoTodayBooks", auto_urls)

    combined = business_urls + india_urls + auto_urls
    write_list_js(ASSETS / "india_today_group_index.js", "indiaTodayGroupBooks", combined)

    hub_html = build_hub_html(len(business_urls), len(india_urls), len(auto_urls))
    (PAGES / "india_today_group_index.html").write_text(hub_html, encoding="utf-8")
    write_hub_js(ASSETS / "india_today_group_hub.js", len(business_urls), len(india_urls), len(auto_urls))

    print(
        f"Split complete: Business Today {len(business_urls)}, "
        f"India Today {len(india_urls)}, Auto Today {len(auto_urls)}"
    )


if __name__ == "__main__":
    main()