const technologyBooks = [
    "https://hemachandranss.github.io/books11/books/visual-books/Django_in_Action_-_Christopher_Trudeau.pdf",
    "https://hemachandranss.github.io/books11/books/visual-books/Django_Visual_Guide_-_Ben_Bloomfield.pdf",
    'https://hemachandranss.github.io/books11/books/visual-books/Eric Matthes - Python Crash Course-No Starch Press (2023)',
    'https://hemachandranss.github.io/books11/books/visual-books/Beyond_the_Basic_Stuff_with_Python_-_Al_Sweigart',
    'https://hemachandranss.github.io/books11/books/visual-books/Dive_into_algorithms_-_Bradford_Tuckfield',
    'https://hemachandranss.github.io/books11/books/visual-books/Object-Oriented_Python_Master_OOP_by_Building_Games_and_GUIs_-_Irv_Kalb',
    'https://hemachandranss.github.io/books11/books/visual-books/Python_Flash_Cards_-_Eric_Matthes',
    'https://hemachandranss.github.io/books11/books/visual-books/The_Recursive_Book_of_Recursion_-_Al_Sweigart',
    'https://hemachandranss.github.io/books11/books/visual-books/The_Big_Book_of_Small_Python_Projects_-_Al_Sweigart',
    'https://hemachandranss.github.io/books17/books/visual-books/Amazon_Web_Services_in_Action_Third_Edition_-_Andreas_Wittig',
    'https://hemachandranss.github.io/books21/books/visual-books/EXCEL_2023__An_Illustrated_Step-by-Step_Guide_for_Beginners_-_Kyle_McAnthony',
    'https://hemachandranss.github.io/books21/books/visual-books/Excel_Your_All-in-One_Illustrated_Guide_-_Michael_Venturino',
    'https://hemachandranss.github.io/books21/books/visual-books/programming-ruby-32-the-pragmatic-programmers-guide',
    'https://hemachandranss.github.io/books21/books/visual-books/Metaprogramming_Ruby_2_Program_Like_the_Ruby_Pros_-_Paolo_Perrotta',
    'https://hemachandranss.github.io/books21/books/visual-books/From_Ruby_to_Elixir_-_Stephen_Bussey',
    'https://hemachandranss.github.io/books21/books/visual-books/(The pragmatic programmers) Dees, Ian_ Marston, Myron - Effective testing with RSpec 3 _ build Ruby apps with confidence-The Pragmatic Bookshelf (2017)',
    'https://hemachandranss.github.io/books21/books/visual-books/agile-web-development-with-rails-7',
    'https://hemachandranss.github.io/books21/books/visual-books/Agile_Web_Development_with_Rails_8_-_Sam_Ruby',
    'https://hemachandranss.github.io/books21/books/visual-books/rails 5 guide',
    'https://hemachandranss.github.io/books21/books/visual-books/rails-5-test-prescriptions-build-a-healthy-codebase-9781680502503-1680502506_compress',
    'https://hemachandranss.github.io/books21/books/visual-books/Rails_Authentication_Authorisation',
    'https://hemachandranss.github.io/books21/books/visual-books/Rails_Debugging',
    'https://hemachandranss.github.io/books21/books/visual-books/Learning Devise for Rails',
    'https://hemachandranss.github.io/books21/books/visual-books/Ruby_on_Rails_Background_Jobs_-_David_Bryant_Copeland',
    'https://hemachandranss.github.io/books21/books/visual-books/Hotwire_Native_for_Rails_Developers_-_Joe_Masilotti',
    'https://hemachandranss.github.io/books21/books/visual-books/modern-front-end-development-for-rails-second-edition-hotwire-stimulus-turbo-and-react',
    'https://hemachandranss.github.io/books21/books/visual-books/High_Performance_PostgreSQL_for_Rails_Reliable_Scalable_Maintainable_Database_Applications_-_Andrew_Atkinson',
    'https://hemachandranss.github.io/books21/books/visual-books/docker-for-rails-developers-build-ship-and-run-your-applications-everywhere'
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

const rubyCountEl = document.getElementById('rubyCount');
if (rubyCountEl) rubyCountEl.textContent = '4 Books';

const railsCountEl = document.getElementById('railsCount');
if (railsCountEl) railsCountEl.textContent = '12 Books';

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
