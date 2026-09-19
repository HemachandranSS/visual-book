const technologyBooks = [
    "https://hemachandranss.github.io/books11/books/visual-books/Django_in_Action_-_Christopher_Trudeau.pdf",
    "https://hemachandranss.github.io/books11/books/visual-books/Django_Visual_Guide_-_Ben_Bloomfield.pdf",
    'https://hemachandranss.github.io/books11/books/visual-books/Eric Matthes - Python Crash Course-No Starch Press (2023)',
    'https://hemachandranss.github.io/books11/books/visual-books/Beyond_the_Basic_Stuff_with_Python_-_Al_Sweigart',
    'https://hemachandranss.github.io/books11/books/visual-books/Dive_into_algorithms_-_Bradford_Tuckfield',
    'https://hemachandranss.github.io/books11/books/visual-books/Object-Oriented_Python_Master_OOP_by_Building_Games_and_GUIs_-_Irv_Kalb',
    'https://hemachandranss.github.io/books11/books/visual-books/Python_Flash_Cards_-_Eric_Matthes',
    'https://hemachandranss.github.io/books11/books/visual-books/The_Recursive_Book_of_Recursion_-_Al_Sweigart',
    'https://hemachandranss.github.io/books11/books/visual-books/The_Big_Book_of_Small_Python_Projects_-_Al_Sweigart'
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

const relativeTechnologyBooks = technologyBooks.map((book) =>
    normalizeBookPath(book)
);

const bookCount = relativeTechnologyBooks.length;

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
