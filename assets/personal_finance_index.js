const personalFinanceBooks = [
'https://hemachandranss.github.io/books6/books/visual-books/Money_smart_in_your_20s_and_30s_-_Zebra_learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Stock_Investing_Mastermind_-_ZebraLearn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Trading_mastermind_-_Zebra_learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/51_Trading_Strategies_-_Optimise_Your_Trades_with_51_-_Aseem_Singhal.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Futures_and_options_blueprint_-_Zebra_learn.pdf'
];

const normalizeBookPath = (value) => {
    if (!value) return '';
    try {
        const url = new URL(value, window.location.href);
        const pathname = url.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
        const booksIndex = pathname.indexOf('books/');
        return booksIndex >= 0 ? pathname.slice(booksIndex) : pathname;
    } catch {
        const cleaned = String(value).replace(/^\/+/, '').replace(/\/+$/, '');
        const booksIndex = cleaned.indexOf('books/');
        return booksIndex >= 0 ? cleaned.slice(booksIndex) : cleaned;
    }
};

const relativePersonalFinanceBooks = personalFinanceBooks.map((book) => normalizeBookPath(book));

const bookCount = relativePersonalFinanceBooks.length;
const label = bookCount === 1 ? 'Book' : 'Books';

document.getElementById('count').textContent = `${bookCount} ${label}`;
document.getElementById('visualCount').textContent = `${bookCount} ${label}`;

// Show the "no books" empty state when the list is empty, and hide the grid.
const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');
if (bookCount === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
} else {
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';
}
