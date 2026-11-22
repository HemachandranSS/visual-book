const autoTodayBooks = [
    "https://hemachandranss.github.io/books31/books/visual-books/01012024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01012025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01012026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01022024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01022025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01022026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01032024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01032025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01032026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01042023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01042024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01042025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01042026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01052023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01052024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01052025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01052026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01062024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01062025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01062026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01072023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01072024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01072025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01072026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01082023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01082024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01082025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01082026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01092023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01092024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01092025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01092026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01102023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01102024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01102025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01102026-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01112023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01112024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01112025-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01122023-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01122024-md-aut",
    "https://hemachandranss.github.io/books31/books/visual-books/01122025-md-aut",

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

const relativeAutoTodayBooks = autoTodayBooks.map((book) =>
    normalizeBookPath(book)
);

const bookCount = relativeAutoTodayBooks.length;

const label = bookCount === 1 ? 'Issue' : 'Issues';

const countEl = document.getElementById('count');
if (countEl) countEl.textContent = `${bookCount} ${label}`;

const visualCountEl = document.getElementById('visualCount');
if (visualCountEl) visualCountEl.textContent = `${bookCount} ${label}`;

const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');

if (bookCount === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
} else {
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';
}
