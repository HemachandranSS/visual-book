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
    "A_Peoples_Tragedy_-_Orlando_Figes.pdf",
    "A_Nation_to_Protect_Leading_India_through_the_Covid_crisis_-_Priyam_Gandhi-Mody.pdf",
    "AKBAR_OF_HINDUSTAN_-_PARVATI_SHARMA.pdf",
    "Ashoka_in_Ancient_India_-_Nayanjot_Lahiri.pdf",
    "Babur_the_chessboard_king_-_Aabhas_maldahiyar.pdf",
    "Barons_of_Banking_-_Bhaktiar_Dadabhoy.pdf",
    "Bhagat_Singh_A_Life_in_Revolution_-_Satvinder_S_Juss.pdf",
    "Drones_Journey_to_Fifth_Generation_-_Kaushik_Kumar.pdf",
    "Essays_on_Indian_Philosophy_-_Shri_Krishna_Saksena.pdf",
    "History_of_India__A_Captivating_Guide_to_A_-_Captivating_History.pdf",
    "History_of_modern_india_-_Bipan_chandra.pdf",
    "I_do_what_I_do_-_Raghuram_Rajan.pdf",
    "Incredible_Indians_75_People_Who_Shaped_Modern_India_-_Ashwitha_Jayakumar.pdf",
    "India_and_Pakistan_-_Stanley_Wolpert.pdf",
    "India_Pakistan_and_the_Bomb_Debating_Nuclear_Stability_in_South_Asia_-_S_Paul_Kapur.pdf",
    "India_that_is_bharat_-_Jsai_Deepak.pdf",
    "Indian_Philosophy_A-Z_-_Christopher_Bartley.pdf",
    "Indian_Polity_8th_edition_-_M_Laxmikanth.pdf",
    "In_the_service_of_the_republic_-_vijay_kelkar_and_ajay_shah.pdf",
    "Kashmirs_Untold_Story_Declassified_-_iqbal_chand_malhotra.pdf",
    "Nehru_The_Debates_That_Defined_India_-_Adeel_Hussain.pdf",
    "Ninety_Days_The_True_Story_of_the_Hunt_for_Rajiv_Gandhis_Assassins_-_Anirudhya_Mitra.pdf",
    "Ratan_Tata_A_Life_-_Thomas_Mathew.pdf",
    "RAW_-_Yatish_Yadav.pdf",
    "Ready_To_Fire_-_Nambi_Narayanan.pdf",
    "Swadeshi_Steam_-_A_R_Venkatachalapathy.pdf",
    "The_Big_Reverse_-_Meera_Sanyal.pdf",
    "The_History_of_the_Renaissance_World__From_-_Susan_Wise_Bauer.pdf",
    "The_Taj_Mahal_-_Charles_River_Editors.pdf",
    "The_Ten_Trillion_Dream_-_Subhash_Chandra_Garg.pdf",
    "Who_Moved_My_Interest_Rate_-_Duvvuri_subbarao.pdf",
    "why_i_killed_gandhi_-_Nathuram_godse.pdf",
    "World_History_-_Adam_Brown.pdf",
    "AB_the_autobiography_-_A_B_de_Villiers.pdf",
    "ALASTAIR_COOK_THE_AUTOBIOGRAPHY_-_Sir_Alastair_Cook.pdf",
    "An_American_Life_The_Autobiography_-_Ronald_Reagan.pdf",
    "An_Autobiography_-_Jawaharlal_Nehru.pdf",
    "An_Autobiography_-_MK_Gandhi.pdf",
    "A_Soldiers_General-An_Autobiography_-_General_Retd_J_J_Singh.pdf",
    "Beckham_-_David_Beckham.pdf",
    "Colleagues_in_Genius_-_Albert_Einstein.pdf",
    "Four_stars_of_destiny_-_General_Manoj_Mukund_Naravane.pdf",
    "Game_Changer_by_Shahid_Afridi_-_Shahid_Afridi.pdf",
    "I_dare_-_kiran_bedi.pdf",
    "In_memory_yet_green___the_autobiography_of_-_Isaac_Asimov.pdf",
    "Jimmy_Anderson_The_Autobiography_-_Jimmy_Anderson.pdf",
    "Julian_Assange_-_The_Unauthorised_Autobiography_-_Julian_Assange.pdf",
    "Long Walk to freedom - Nelson Mandela.pdf",
    "My_Inventions__The_Autobiography_of_Nikola_-_Nikola_Tesla.pdf",
    "Playing_It_My_Way__My_Autobiography_-_Sachin_Tendulkar.pdf",
    "Spare_-_Prince_Harry.pdf",
    "The_Autobiography_of_Benjamin_Franklin_-_Benjamin_Franklin.pdf",
    "The_Autobiography_of_Martin_Luther_King_JR_-_Clayborne_Carson.pdf",
    "The_Kargil_Girl_An_autobiography_-_Gunjan_Saxena.pdf",
    "The_Race_of_My_Life_An_Autobiography_-_Milkha_Singh.pdf",
    "To_the_Point_The_No-Holds-Barred_Autobiography_-_Herschelle_Gibbs.pdf",
    "Wings_of_Fire__An_Autobiography_-_APJ_Abdul_Kalam.pdf",
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
    "11th Std Textiles and Dress Designing English Medium.pdf",

    // 11th Standard – Tamil Medium (books20)
    "11th Std General Tamil _20.02.2020.pdf",
    "11th Std Advance Tamil.pdf",
    "11th Std Mathematics Vol-1 Tamil Medium.pdf",
    "11th Std Mathematics Vol-2 Tamil Medium.pdf",
    "11th Std Business Mathematics & Statistics Tamil Medium.pdf",
    "11th Std Statistics Tamil Medium.pdf",
    "11th Std Physics Vol-1 Tamil Medium.pdf",
    "11th Std Physics Vol-2 Tamil Medium.pdf",
    "11th Std Chemistry TM Vol-1.pdf",
    "11th Std Chemistry TM Vol-2.pdf",
    "11th Std Biology-Botany Tamil Medium.pdf",
    "11th Std Biology-Zoology Tamil Medium.pdf",
    "11th Std Botany Tamil Medium.pdf",
    "11th Std Zoology Tamil Medium.pdf",
    "11th Std Bio-Chemistry Tamil Medium.pdf",
    "11th Std Microbiology Tamil Medium.pdf",
    "11th Std Computer Science Tamil Medium.pdf",
    "11th Std Computer Applications Tamil Medium.pdf",
    "11th Std Computer Technology Tamil Medium.pdf",
    "11th Std Accountancy Tamil Medium.pdf",
    "11th Std Commerce_Tamil Medium.pdf",
    "11th Std - Auditing Practical Tamil Medium.pdf",
    "11th Std Economics Tamil Medium.pdf",
    "11th Std History Tamil Medium.pdf",
    "11th Std Geography Tamil Medium.pdf",
    "11th Std Political Science Tamil Medium.pdf",
    "11th Std Ethics & Indian Culture Tamil Medium.pdf",
    "11th Std Agricultural Science Tamil Medium.pdf",
    "11th Std Home Science Tamil Medium.pdf",
    "11th Std Nutrition and Dietetics Tamil Medium.pdf",
    "11th Std Food Service Management Tamil Medium.pdf",
    "11th Std - Basic Civil Engineering Tamil Medium 18.11.2020.pdf",
    "11th Std - Basic Electrical Engineering TM 09.11.2020.pdf",
    "11th Std - Basic Electronics Engineering TM 10.11.2020.pdf",
    "11th Std - Basic Mechanical Engineering TM 09.11.2020.pdf",
    "XI Std - Basic Automobile Engg TM Errata 06.11.2020.pdf",
    "11th Std - OMS & Typography-Computer Applications TM 11.11.2020.pdf",
    "11th Std Nursing General Tamil Medium.pdf",
    "11th Std Nursing Vocational Tamil Medium.pdf",
    "11th Std Textiles and Dress Designing Tamil Medium.pdf",
    "XI Std - Textile Technology TM Errata 24.12.2019.pdf",

    // 12th Standard – Languages (books20)
    "12th_Std_General_English_optimised.pdf",
    "12th_Std_General_Tamil_Optimised.pdf",
    "12th_Std_Advance_Tamil_optimised.pdf",
    "12th_Std_Communicative_English_optimised.pdf",

    // 12th Standard – Mathematics (books20)
    "12th_Std_Mathematics_Vol_1_EM_optimised.pdf",
    "12th_Std_Mathematics_Vol_1_TM_optimised.pdf",
    "12th_Std_Mathematics_Vol_2_EM_optimised.pdf",
    "12th_Std_Mathematics_Vol_2_TM_optimised.pdf",

    // 12th Standard – Physics (books20)
    "12th_Std_Physics_Vol_1_EM_optimised.pdf",
    "12th_Std_Physics_Vol_1_TM_optimised.pdf",
    "12th_Std_Physics_Vol_2_EM_optimised.pdf",
    "12th_Std_Physics_Vol_2_TM_optimised.pdf",

    // 12th Standard – Chemistry (books20)
    "12th_Std_Chemistry_EM_Vol_1_Optimised.pdf",
    "12th_Std_Chemistry_TM_Vol_1_optimised.pdf",
    "12th_Std_Chemistry_EM_Vol_2_Optimised.pdf",
    "12th_Std_Chemistry_TM_Vol_2_optimised.pdf",

    // 12th Standard – Biology (books20)
    "12th_Std_Biology_Botany_EM_Optimised.pdf",
    "12th_Std_Biology_Botany_TM_optimised.pdf",
    "12th_Std_Biology_Zoology_EM_optimised.pdf",
    "12th_Std_Biology_Zoology_TM_optimised.pdf",
    "12th_Std_Botany_EM_optimised.pdf",
    "12th_Std_Botany_TM_optimised.pdf",
    "12th_Std_Zoology_EM_optimised.pdf",
    "12th_Std_Zoology_TM_optimised.pdf",
    "12th_Std_Bio_Chemistry_EM_Optimised.pdf",
    "12th_Std_Bio_Chemistry_TM_optimised.pdf",
    "12th_Std_Microbiology_EM_optimised.pdf",
    "12th_Std_Microbiology_TM_optimised.pdf",

    // 12th Standard – Commerce and Accountancy (books20 + books21)
    "12th_Std_Accountancy_EM_optimised.pdf",
    "12th_Std_Accountancy_TM_optimised.pdf",
    "12th_Std_Commerce_EM_optimised.pdf",
    "12th_Std_Commerce_TM_optimised.pdf",
    "12th_Std_Auditing_EM_optimised.pdf",
    "12th_Std_Auditing_TM_optimised.pdf",
    "12th_Std_Business_Mathematics_&_Statistics_EM_optimised.pdf",
    "12th_Std_Business_Mathematics_&_Statistics_TM_optimised.pdf",
    "12th_Std_Economics_EM_optimised.pdf",
    "12th_Std_Economics_TM_optimised.pdf",
    "12th_Std_Statistics_EM_optimised.pdf",
    "12th_Std_Statistics_TM_optimised.pdf",

    // 12th Standard – Computer Science (books21)
    "12th_Std_Computer_Science_EM_optimised.pdf",
    "12th_Std_Computer_Science_TM_optimised.pdf",
    "12th_Std_Computer_Applications_EM_optimised.pdf",
    "12th_Std_Computer_Applications_TM_optimised.pdf",
    "12th Std Computer Applications English Medium.pdf",
    "12th Std Computer Applications Tamil Medium.pdf",
    "12th_Std_Computer_Technology_EM optimised.pdf",
    "12th_Std_Computer_Technology_TM_optimised.pdf",
    "12th Std Computer Technology English Medium.pdf",
    "12th Std Computer Technology Tamil Medium.pdf",

    // 12th Standard – Humanities (books21)
    "12th_Std_History_EM_optimised.pdf",
    "12th_Std_History_TM_optimised.pdf",
    "12th Std Geography English Medium.pdf",
    "12th Std Geography Tamil Medium.pdf",
    "12th_Std_Political_Science_EM_optimised.pdf",
    "12th_Std_Political_Science_TM_optimised.pdf",
    "12th_Std_Ethics_and_Indian_Culture_optimised.pdf",

    // 12th Standard – Agriculture (books21)
    "12th_Std_Agricultural_Science_optimised.pdf",

    // 12th Standard – Home Science and Nutrition (books21)
    "12th_Std_Home_Science_EM_optimised.pdf",
    "12th_Std_Home_Science_TM_optimised.pdf",
    "12th_Std_Nutrition_and_Dietetics_EM_optimised.pdf",
    "12th_Std_Food_Service_Management_EM_optimised.pdf",
    "12th_Std_Food_Service_Management_TM_optimised.pdf",

    // 12th Standard – Engineering (books21)
    "12th_Std_Basic_Automobile_Engineering_EM_optimised.pdf",
    "12th_Std_Basic_Automobile_Engineering_TM_Optimised.pdf",
    "12th_Std_Basic_Civil_Engineering_EM_optimised.pdf",
    "12th_Std_Basic_Civil_Engineering_TM_optimised.pdf",
    "12th_Std_Basic_Electrical_Enginering_EM_optimised.pdf",
    "12th_Std_Basic_Electrical_Enginering_TM_Optimised.pdf",
    "12th_Std_Basic_Electronics_Engineering_TM_optimised.pdf",
    "12th_Std_Basic_Mechanical_Engineering_EM_optimised.pdf",
    "12th_Std_Basic_Mechanical_Engineering_TM_optimised.pdf",
    "12th_Std_OMS_&_Typography_Computer_Apps_EM_optimised.pdf",
    "12th_Std_OSS_&_Typography_Computer_Apps_TM_optimised.pdf",

    // 12th Standard – Nursing (books21)
    "12th_Std_General_Nursing_EM_Optimised.pdf",
    "12th_Std_Nursing_General_TM_optimised.pdf",
    "12th_Std_Nursing_Vocational_EM_optimised.pdf",
    "12th_Std_Nursing_Vocational_TM_optimised.pdf",

    // 12th Standard – Textiles (books21)
    "12th_Std_Textiles_&_Dress_Designing_EM_optimised.pdf",
    "12th_Std_Textiles_&_Dress_Designing_TM_optimised.pdf",
    "12th Std Textiles & Dress Designing Tamil Medium.pdf"

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
if (tnCountEl) tnCountEl.textContent = `264 Books`;

const economicsCountEl = document.getElementById('economicsCount');
if (economicsCountEl) economicsCountEl.textContent = `8 Books`;

const historyCountEl = document.getElementById('historyCount');
if (historyCountEl) historyCountEl.textContent = `10 Books`;

const biographiesCountEl = document.getElementById('biographiesCount');
if (biographiesCountEl) biographiesCountEl.textContent = `30 Books`;

const generalCountEl = document.getElementById('generalCount');
if (generalCountEl) generalCountEl.textContent = `7 Books`;

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
