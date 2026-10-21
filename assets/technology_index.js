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
    'https://hemachandranss.github.io/books21/books/visual-books/docker-for-rails-developers-build-ship-and-run-your-applications-everywhere',
    'https://hemachandranss.github.io/books22/books/visual-books/84_Amazing_Maths_Games_-_Anna_Claybourne',
    'https://hemachandranss.github.io/books22/books/visual-books/Acing_the_Frontend_Interview_MEAP_V1_-_Jennifer_Fu',
    'https://hemachandranss.github.io/books22/books/visual-books/Agile_Metrics_in_Action_-_Christopher_Davis',
    'https://hemachandranss.github.io/books22/books/visual-books/AI_Agents_in_Action_-_Micheal_Lanham',
    'https://hemachandranss.github.io/books22/books/visual-books/AI_and_Machine_Learning_in_Action_-_Aniket_Jain',
    'https://hemachandranss.github.io/books22/books/visual-books/Akka_in_Action_2nd_Ed_-_Francisco_Lopez-Sancho_Abraham',
    'https://hemachandranss.github.io/books22/books/visual-books/Algorithms_and_Data_Structures_in_Action_M_-_Marcello_La_Rocca',
    'https://hemachandranss.github.io/books22/books/visual-books/Amazon_Web_Services_in_Action_Third_Edition_-_Andreas_Wittig',
    'https://hemachandranss.github.io/books22/books/visual-books/API_Security_in_Action_MEAP_V10_-_Neil_Madden',
    'https://hemachandranss.github.io/books22/books/visual-books/ASPNET_Core_in_Action_Third_Edition_-_Andrew_Lock',
    'https://hemachandranss.github.io/books22/books/visual-books/ASPNET_Core_Razor_Pages_In_Action_-_Mike_Brind',
    'https://hemachandranss.github.io/books22/books/visual-books/Authorization_in_Action_MEAP_6_-_Phillip_J_Windley',
    'https://hemachandranss.github.io/books22/books/visual-books/Bayesian_Optimization_in_Action_MEAP_V05_-_Quan_Nguyen',
    'https://hemachandranss.github.io/books22/books/visual-books/BDD_in_Action_-_John_Ferguson_Smart',
    'https://hemachandranss.github.io/books22/books/visual-books/Beginning_Arduino_Programming_-_Brian_Evans',
    'https://hemachandranss.github.io/books22/books/visual-books/Blockchain_in_Action_-_Bina_Ramamurthy',
    'https://hemachandranss.github.io/books22/books/visual-books/Build_AI-Enhanced_Web_Apps_-_Theo_Despoudis',
    'https://hemachandranss.github.io/books22/books/visual-books/C_Concurrency_in_Action_-_Anthony_Williams',
    'https://hemachandranss.github.io/books23/books/visual-books/C_in_Action_Learn_with_Projects_-_Govind_Kumawat',
    'https://hemachandranss.github.io/books22/books/visual-books/Cloud_Native_Spring_in_Action_-_Thomas_Vitale',
    'https://hemachandranss.github.io/books22/books/visual-books/Cloud_Observability_in_Action_-_Michael_Hausenblas',
    'https://hemachandranss.github.io/books23/books/visual-books/CoffeeScript_in_Action_-_Patrick_Lee',
    'https://hemachandranss.github.io/books23/books/visual-books/Contract_Testing_in_Action_With_Pact_PactFlow_-_Marie_Cruz',
    'https://hemachandranss.github.io/books23/books/visual-books/CORS_in_Action_-_Monsur_Hossain',
    'https://hemachandranss.github.io/books23/books/visual-books/D3js_in_Action_-_Elijah_Meeks',
    'https://hemachandranss.github.io/books23/books/visual-books/Databricks_ML_in_Action_-_Packt_Publishing',
    'https://hemachandranss.github.io/books23/books/visual-books/Data_Mesh_in_Action_-_Jacek_Majchrzak',
    'https://hemachandranss.github.io/books24/books/visual-books/Deep_Reinforcement_Learning_in_Action_-_Alexander_Zai',
    'https://hemachandranss.github.io/books24/books/visual-books/Digital_Twins_in_Action_MEAP_3_-_Greg_Biegel',
    'https://hemachandranss.github.io/books24/books/visual-books/Django_in_Action_-_Christopher_Trudeau',
    'https://hemachandranss.github.io/books24/books/visual-books/DuckDB_in_Action_-_Mark_Needham',
    'https://hemachandranss.github.io/books25/books/visual-books/Elasticsearch_in_Action_-_Madhusudhan_Konda',
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

const cloudCountEl = document.getElementById('cloudCount');
if (cloudCountEl) cloudCountEl.textContent = '4 Books';

const jsCountEl = document.getElementById('jsCount');
if (jsCountEl) jsCountEl.textContent = '4 Books';

const javaCountEl = document.getElementById('javaCount');
if (javaCountEl) javaCountEl.textContent = '3 Books';

const languagesCountEl = document.getElementById('languagesCount');
if (languagesCountEl) languagesCountEl.textContent = '2 Books';

const databasesCountEl = document.getElementById('databasesCount');
if (databasesCountEl) databasesCountEl.textContent = '3 Books';

const aiCountEl = document.getElementById('aiCount');
if (aiCountEl) aiCountEl.textContent = '6 Books';

const testingCountEl = document.getElementById('testingCount');
if (testingCountEl) testingCountEl.textContent = '3 Books';

const securityCountEl = document.getElementById('securityCount');
if (securityCountEl) securityCountEl.textContent = '2 Books';

const mathCountEl = document.getElementById('mathCount');
if (mathCountEl) mathCountEl.textContent = '2 Books';

const computingCountEl = document.getElementById('computingCount');
if (computingCountEl) computingCountEl.textContent = '3 Books';

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
