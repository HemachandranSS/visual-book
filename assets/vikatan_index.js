const vikatanBooks = [
    "https://hemachandranss.github.io/books10/books/visual-books/நாணயம்_விகடன்_Sep_04_2026.pdf",
    "https://hemachandranss.github.io/books10/books/visual-books/நாணயம்_விகடன்_Sep_11_2026.pdf",
    'https://hemachandranss.github.io/books10/books/visual-books/ஆனந்த_விகடன்_Sep_10_2025.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/பசுமை_விகடன்_Sep_11_2025.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/Vikatan_Plus_Sep_11_2025.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/சக்தி_விகடன்_Sep_15_2026.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/ஜூனியர்_விகடன்_Sep_16_2025.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/மோட்டார்_விகடன்_Sep_01_2026.pdf',
    'https://hemachandranss.github.io/books10/books/visual-books/அவள்_விகடன்_Sep_10_2026.pdf',
    'https://hemachandranss.github.io/books11/books/visual-books/ஆனந்த_விகடன்_Sep_17_2026.pdf',
    'https://hemachandranss.github.io/books11/books/visual-books/நாணயம்_விகடன்_Sep_18_2026.pdf',
    'https://hemachandranss.github.io/books11/books/visual-books/ஜூனியர்_விகடன்_Sep_19_2026.pdf',
    'https://hemachandranss.github.io/books16/books/visual-books/Vikatan_Plus_Sep_21_2026.pdf',
    'https://hemachandranss.github.io/books16/books/visual-books/அவள்_விகடன்_Sep_22_2026.pdf'

];

const normalizeBookPath = (value) => {
    if (!value) return '';

    try {
        const url = new URL(value, window.location.href);
        const pathname = url.pathnames
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

const relativeVikatanBooks = vikatanBooks.map((book) =>
    normalizeBookPath(book)
);

const bookCount = relativeVikatanBooks.length;

const label = bookCount === 1 ? 'Book' : 'Books';

document.getElementById('count').textContent = `${bookCount} ${label}`;

document.getElementById('visualCount').textContent = `${bookCount} ${label}`;

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
