const digitBooks = [
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201505_dmsytify_E=mc2',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201507_dmsytify_String_Theory',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201508_dmsytify_Exotic_Materials',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201509_dmsytify_Dark_Matter_Dark_Energy',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201510_dmsytify_Math'
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

const relativeDigitBooks = digitBooks.map((book) => normalizeBookPath(book));

const bookCount = relativeDigitBooks.length;
const label = bookCount === 1 ? 'Book' : 'Books';

document.getElementById('count').textContent = `${bookCount} ${label}`;
document.getElementById('visualCount').textContent = `${bookCount} ${label}`;
