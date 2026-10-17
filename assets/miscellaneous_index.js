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
    "upsc_solved_till_2025.pdf",

    // TN School Books 2020 Edition - 1st Standard
    "1st_Std_Maths_Environmental_Science_Term_1_English_Medium.pdf",
    "1st_Std_Maths_Environmental_Science_Term-1_Tamil_Medium.pdf",
    "1st_Std_Maths_Environmental_Science_Term_2_English_Medium.pdf",
    "1st_Std_Maths_Environmental_Science_Term-2_Tamil_Medium.pdf",
    "1st Std_Maths_Environmental_Science_Term_3_English_Medium.pdf",
    "1st_Std_Maths_Environmental_Science_Term_3_Tamil_Medium.pdf",
    "1st_Std_Tamil_CBSE.pdf",
    "1st_Std_Tamil_English_Term_1.pdf",
    "1st_Std_Tamil_English_Term-3.pdf",
    "repeat-1st_Std_Tamil_English_Term_1.pdf",

    // TN School Books 2020 Edition - 2nd Standard
    "2nd_Std_Maths_Environmental_Science_Term_1_English_Medium.pdf",
    "2nd_Std_Maths_Environmental_Science_Term_1_Tamil_Medium.pdf",
    "2nd_Std_Maths_Environmental_Science_Term_2_English_Medium.pdf",
    "2nd_Std_Maths_Environmental_Science_Term_2_Tamil_Medium.pdf",
    "2nd_Std_Maths_Environmental_Science_Term_3_English_Medium.pdf",
    "2nd_Std_Maths_Environmental_Science_Term_3_Tamil_Medium.pdf",
    "2nd_Std_Tamil_CBSE.pdf",
    "2nd_Std_Tamil_English_Term_1.pdf",
    "2nd_Std_Tamil_English_Term_2.pdf",
    "2nd_Std_Tamil_English_Term_3.pdf",

    // TN School Books 2020 Edition - 3rd Standard
    "3rd_Std_Maths_Science_Social_Science_Term_1_English_Medium.pdf",
    "3rd_Std_Maths_Science_Social_Science_Term_1_Tamil_Medium.pdf",
    "3rd_Std_Maths_Science_Social_Science_Term_2_English_Medium.pdf",
    "3rd_Std_Maths_Science_Social_Science_Term_2_Tamil_Medium.pdf",
    "3rd_Std_Maths_Science_Social_Science_Term_3_English_Medium.pdf",
    "3rd_Std_Maths_Science_Social_Science_Term_Tamil_Medium.pdf",
    "3rd_Std_Tamil_CBSE.pdf",
    "3rd_Std_Tamil_English_Term_1.pdf",
    "3rd_Std_Tamil_English_Term_2.pdf",
    "3rd_Std_Tamil_English_Term_3.pdf",

    // TN School Books 2020 Edition - 4th Standard
    "4th_Std_Maths_Science_Social_Science_Term_1_English_Medium.pdf",
    "4th_Std_Maths_Science_Social_Science_Term_1_Tamil_Medium.pdf",
    "4th_Std_Maths_Science_Social_Science_Term_2_English_Medium.pdf",
    "4th_Std_Maths_Science_Social_Science_Term_2_Tamil_Medium.pdf",
    "4th_Std_Maths_Science_Social_Science_Term_3_English_Medium.pdf",
    "4th_Std_Maths_Science_Social_Science_Term_3_Tamil_Medium.pdf",
    "4th_Std_Tamil_CBSE.pdf",
    "4th_Std_Tamil_English_Term_1.pdf",
    "4th_Std_Tamil_English_Term_2.pdf",
    "4th_Std_Tamil_English_Term_3.pdf",

    // TN School Books 2020 Edition - 5th Standard
    "5th_Std_Maths_Science_Social_Science_Term_1_English_Medium.pdf",
    "5th_Std_Maths_Science_Social_Science_Term_1_Tamil_Medium.pdf",
    "5th_Std_Maths_Science_Social_Science_Term_2_English_Medium.pdf",
    "5th_Std_Maths_Science_Social_Science_Term_2_Tamil_Medium.pdf",
    "5th_Std_Maths_Science_Social_Science_Term_3_English_Medium.pdf",
    "5th_Std_Maths_Science_Social_Science_Term_3_Tamil_Medium.pdf",
    "5th_Std_Tamil_CBSE.pdf",
    "5th_Std_Tamil_English_Term_1.pdf",
    "5th_Std_Tamil_English_Term 2.pdf",
    "5th_Std_Tamil_English_Term_3.pdf",

    // TN School Books 2020 Edition - 6th Standard
    "6th_Maths_T1_EM.pdf",
    "6th_Maths_T1_TM.pdf",
    "6th_Maths_T2_EM.pdf",
    "6th_Maths_T2_TM.pdf",
    "6th_Maths_T3_EM.pdf",
    "6th_Maths_T3_TM.pdf",
    "6th_Science_&_Social_T1_EM.pdf",
    "6th_Science_&_Social_T1_TM.pdf",
    "6th_Science_&_Social_T2_EM.pdf",
    "6th_Science_&_Social_T2_TM.pdf",
    "6th_Science_&_Social_T3_EM.pdf",
    "6th_Science_&_Social_T3_TM.pdf",
    "6th_Std_Tamil_CBSE.pdf",
    "6th_Std_Tamil_English_Term 3.pdf",
    "6th_Tamil_English_T1.pdf",
    "6th_Tamil_English_T2.pdf",

    // TN School Books 2020 Edition - 7th Standard
    "7th_Maths_T1_EM.pdf",
    "7th_Maths_T1_TM.pdf",
    "7th_Maths_T2_EM_Book_optimised.pdf",
    "7th_Maths_T2_TM_Book_optimised.pdf",
    "7th_Maths_T3_EM.pdf",
    "7th_Maths_T3_TM.pdf",
    "7th_Science_&_Social_T1_EM.pdf",
    "7th_Science_&_Social_T1_TM.pdf",
    "7th_Science_&_Social_T2_EM_Book_optimised.pdf",
    "7th_Science_&_Social_T2_TM_Book_Optimised.pdf",
    "7th_Science_&_Social_T3_EM.pdf",
    "7th_Science_&_Social_T3_TM.pdf",
    "7th Std Tamil CBSE.pdf",
    "7th_Tamil_English_T1.pdf",
    "7th_Tamil_English_Term_2_Book_optimised.pdf",
    "7th_Tamil_English_T3.pdf",

    // TN School Books 2020 Edition - 8th Standard
    "8th_Std_English_optimised.pdf",
    "8th_Std_Mathematics_EM_optimised.pdf",
    "8th_Std_Mathematics_TM_optimised.pdf",
    "8th_Std_Science_EM_optimised.pdf",
    "8th_Std_Social_Science_EM_optimised.pdf",
    "8th_Std_Social_Science_TM_optimised.pdf",
    "8th Std Tamil.pdf",

    // TN School Books 2020 Edition - 9th Standard
    "9th_Std_English_optimised.pdf",
    "9th_Std_Mathematics_EM_optimised.pdf",
    "9th_Std_Mathematics_TM_optimised.pdf",
    "9th_Std_Science_EM_optimised.pdf",
    "9th_Std_Science_TM_optimised.pdf",
    "9th_Std_Social_Science_EM_optimised.pdf",
    "9th_Std_Social_Science_TM_optimised.pdf",
    "9th_Std_Tamil_optimised.pdf",

    // TN School Books 2020 Edition - 10th Standard
    "10th_Std_English_optimised.pdf",
    "10th_Std_Mathematics_EM_optimised.pdf",
    "10th_Std_Mathematics_TM_optimised.pdf",
    "10th_Std_Science_EM_optimised.pdf",
    "10th_Std_Science_TM_optimised.pdf",
    "10th_Std_Social_Science_EM_optimised.pdf",
    "10th_Std_Social_Science_TM_optimised.pdf",
    "10th_Tamil_optimised.pdf",

    // TN School Books 2020 Edition - 11th Standard
    "11th Std - Auditing Practical English Medium.pdf",
    "11th Std Communicative English.pdf",
    "11th Std General English.pdf",
    "11th Std Mathematics Vol-1 English Medium.pdf",
    "11th Std Mathematics Vol-2 English Medium.pdf",
    "11th Std Business Mathematics & Statistics English Medium.pdf",
    "11th Std Statistics English Medium.pdf",
    "11th Std Physics Vol-1 English Medium.pdf",
    "11th Std Physics Vol-2 English Medium.pdf",
    "11th Std Chemistry EM Vol-1 Errata_2021.pdf",
    "11th Std Chemistry EM Vol-2 Erratta_2021.pdf",
    "11th Std Biology-Botany English Medium.pdf",
    "11th Std Biology-Zoology English Medium.pdf",
    "11th Std Botany English Medium.pdf",
    "11th Std Zoology English Medium.pdf",
    "11th Std Bio-Chemistry English Medium.pdf",
    "11th Std Microbiology English Medium.pdf",
    "11th Std Computer Science English Medium.pdf",
    "11th Std Computer Applications English Medium.pdf",
    "11th Std Computer Technology English Medium.pdf",
    "11th Std Commerce English Medium.pdf",
    "11th Std Economics English Medium.pdf",
    "11th Std History English Medium.pdf",
    "11th Std Geography English Medium.pdf",
    "11th Std Political Science English Medium.pdf",
    "11th Std Home Science English Medium.pdf",
    "11th Std Nutrition and Dietetics English Medium.pdf",
    "11th Std Food Service Management English Medium.pdf",
    "11th Std - Basic Civil Engineering English Medium 06.11.2020.pdf",
    "11th Std - Basic Electrical Engineering EM 09.11.2020.pdf",
    "11th Std - Basic Electronics Engineering EM 10.11.2020.pdf",
    "11th Std - Basic Mechanical Engineering EM 09.11.2020.pdf",
    "XI Std - Basic Automobile Engg EM Errata 06.11.2020.pdf",
    "11th Std - OMS & Typography Computer Applications EM 12.11.2020.pdf",
    "11th Std Nursing General English Medium.pdf",
    "11th Std Nursing Vocational English Medium.pdf",
    "11th Std Textiles and Dress Designing English Medium.pdf"

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

const tnCountEl = document.getElementById('tnCount');
if (tnCountEl) tnCountEl.textContent = `142 Books`;

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
