const miscellaneousBooks = [
    "Why_Bharat_Matters_-_S_Jaishankar.pdf",
    "The_India_Way__Strategies_for_an_Uncertain_-_S_Jaishankar.pdf",
    "Vishwa_Shastra_India_and_the_World_-_Dhruva_Jaishankar.pdf",
    "21 Lessons for the 21st Century - Yuval Noah Harari.pdf",
    "Homo Deus  A Brief History of Tomorrow - Yuval Noah Harari.pdf",
    "Nexus - Yuval Noah Harari.pdf",
    "Sapiens Tenth Anniversary Edition - Yuval Noah Harari.pdf",
    "Conflict_in_Myanmar_-_Nick_Cheesman.pdf",
    "From_Chanakya_To_Modi_-_Aparna_Pande.pdf",
    "International_Relations_-_Peu_Ghosh.pdf",
    "The_History_of_Myanmar_-_Topich_William_J.pdf",
    "The_Rohingyas_-_Azeem_Ibrahim.pdf",
    "11th Std Economics English Medium.pdf",
    "12th_Std_Economics_EM_optimised.pdf",
    "Indian_Economy_key_concept_by_sankarganesh_k_-_Sankarganesh_k.pdf",
    "Indian_Economy_-_Ramesh_Singh.pdf",
    "upsc_solved_till_2025.pdf"

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

const relativeMiscellaneousBooks = miscellaneousBooks.map((book) =>
    normalizeBookPath(book)
);

const bookCount = relativeMiscellaneousBooks.length;

const label = bookCount === 1 ? 'Book' : 'Books';

const countEl = document.getElementById('count');
if (countEl) countEl.textContent = `${bookCount} ${label}`;

const visualCountEl = document.getElementById('visualCount');
if (visualCountEl) visualCountEl.textContent = `${bookCount} ${label}`;

const upscCountEl = document.getElementById('upscCount');
if (upscCountEl) upscCountEl.textContent = `1 Book`;

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
