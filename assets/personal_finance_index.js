const personalFinanceBooks = [
'https://hemachandranss.github.io/books6/books/visual-books/Money_smart_in_your_20s_and_30s_-_Zebra_learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Stock_Investing_Mastermind_-_ZebraLearn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Trading_mastermind_-_Zebra_learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/51_Trading_Strategies_-_Optimise_Your_Trades_with_51_-_Aseem_Singhal.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Futures_and_options_blueprint_-_Zebra_learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/The_Industry_Handbook_-_ZebraLearn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Financial_Statement_Analysis_-_Zebra_Learn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Fundraising_Decoded_-_ZebraLearn.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Basics_of_Equity_Research.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Screener.pdf',
'https://hemachandranss.github.io/books6/books/visual-books/Options_Trading_Essentials.pdf',
'https://hemachandranss.github.io/books7/books/visual-books/The_Money_Guide.pdf',
'https://hemachandranss.github.io/books7/books/visual-books/Generative%20AI%20360%20degree.pdf',
'https://hemachandranss.github.io/books7/books/visual-books/The_Consulting_Way.pdf',
'https://hemachandranss.github.io/books7/books/visual-books/Startupology.pdf',
'https://hemachandranss.github.io/books7/books/visual-books/Employee%20Management.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Bulls_Bears_and_Other_Beasts_-_Santosh_Nair.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Coffee_Can_Investing_The_Low_Risk_Road_to_Stupendous_Wealth_-_Saurabh_Mukherjea.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Fooled_by_Randomness_The_Hidden_Role_of_Chance_in_Life_and_in_the_Markets_-_Nassim_Nicholas_Taleb.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Fundamental_Analysis_for_Investors_-_Raghu_Palat.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Indian_Stock_Market_Basic_-_Deepak_Shinde.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/I_Will_Teach_You_to_Be_Rich_The_Journal_No_Complicated_Math_No_More_Procrastinating_Design_Your_Rich_Life_Today_-_Ramit_Sethi.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Lets_Talk_Money_-_Monika_Halan.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Mastering_Fundamental_Analysis_-_Lalit_Mohanty.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/One_Up_on_Wall_Street__How_to_Use_What_You_-_Peter_Lynch.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/practical_python_for_effective_algorithmic_trading_-_Kuldeep_Singh_Rathore.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Rich_Dad_Poor_Dad_-_Robert_T_Kiyosaki.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Secrets_of_the_Millionaire_Mind_-_Harv_Eker.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Security_Analysis_7th_Edition_-_Benjamin_Graham.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/Stocks_To_Riches_-_Parag_Parikh.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Black_Swan__The_Impact_of_the_Highly_I_-_Nassim_Nicholas_Taleb.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Dhandho_Investor__The_Low-Risk_Value_M_-_Mohnish_Pabrai.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_intelligent_investor_-_Benjamin_Graham.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Millionaire_Next_Door__The_Surprising_-_Thomas_Stanley.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_millionare_fastlane_-_MJ_Demarco.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_psychology_of_money_-_Morgan_housel.pdf.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_richest_man_of_Babylon_-_George_clason.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Science_of_Algorithmic_Trading_and_Portfolio_Management_-_Robert_Kissell.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Subtle_Art_of_Intraday_Trading_-_Indrazith_Shantharaj.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/The_Warren_Buffett_Way_-_Robert_G_Hagstrom.pdf',
  'https://hemachandranss.github.io/books7/books/visual-books/THINK_AND_GROW_RICH_-_NEPOLEON_HILL.pdf'
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
