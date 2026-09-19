const indiaTodayGroupBooks = [
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_March_20.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_April_03.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_April_17.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_May_01.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_May_15.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_May_29.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_June_12.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_June_26.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_July_10.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_August_07.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_August_21.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_September_04.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_October_16.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_October_30.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_November_27.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_December_11.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2022_December_25.pdf',

    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_January_08.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_January_22.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_February_05.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_February_19.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_March_05.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_April_02.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_April_16.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_April_30.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_May_28.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_June_11.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_June_25.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_July_09.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_July_23.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_August_06.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_August_20.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_September_03.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_September_17.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_October_01.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_October_15.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_October_29.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_November_12.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_November_26.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_December_10.pdf',
    'https://hemachandranss.github.io/books12/books/visual-books/business_today_2023_December_24.pdf'
];

const normalizeBookPath = (value) => {
    if (!value) return '';

    try {
        const url = new URL(value, window.location.href);
        const pathname = url.pathname
            .replace(/^\/+/, '')
            .replace(/\/+$/, '');

        const booksIndex = pathname.indexOf('books/');

        return booksIndex >= 0 ? pathname.slice(booksIndex) : pathname;
    } catch {
        const cleaned = String(value)
            .replace(/^\/+/, '')
            .replace(/\/+$/, '');

        const booksIndex = cleaned.indexOf('books/');

        return booksIndex >= 0 ? cleaned.slice(booksIndex) : cleaned;
    }
};

const relativeIndiaTodayGroupBooks = indiaTodayGroupBooks.map((book) =>
    normalizeBookPath(book)
);

const bookCount = relativeIndiaTodayGroupBooks.length;

const label = bookCount === 1 ? 'Book' : 'Books';

const countEl = document.getElementById('count');
if (countEl) countEl.textContent = `${bookCount} ${label}`;

const visualCountEl = document.getElementById('visualCount');
if (visualCountEl) visualCountEl.textContent = `${bookCount} ${label}`;

// Show the "no books" empty state when the list is empty,
// and hide the grid.
const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');

if (bookCount === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
} else {
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';
}
