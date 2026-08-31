const digitBooks = [
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201505_dmsytify_E=mc2',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201507_dmsytify_String_Theory',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201508_dmsytify_Exotic_Materials',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201509_dmsytify_Dark_Matter_Dark_Energy',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201510_dmsytify_Math',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201511_dmsytify_Evolution',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201512_dmsytify_Solar_System',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201601_dmsytify_Human_Brain',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201602_dmsytify_Nuclear_Weapons',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201603_dmsytify_Earth',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201604_dmsytify_Climate_Change',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201605_dmsytify_Milky_Way',
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201606_dmystify_Big_Bang'
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
