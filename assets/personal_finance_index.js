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
  'https://hemachandranss.github.io/books7/books/visual-books/THINK_AND_GROW_RICH_-_NEPOLEON_HILL.pdf',
  "https://hemachandranss.github.io/books7/books/visual-books/10001_ways_to_live_large_on_a_small_budget_-_By_the_writers_of_wise_bread.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/100_Baggers_-_Christopher_Meyers.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/31_Days_to_Radically_Reduce_Your_Expenses_-_Kalyn_Brooke.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/A_Financial_Survival_Guide_for_Young_Adults_on_Their_Own_-_Dara_Duguay.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/A_Fool_and_His_Money_-_John_Rothchild.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/All_About_Asset_Allocation_-_Richard_A_Ferri.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Are_You_a_Stock_or_a_Bond_-_Moshe_A_Milevsky.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/A_Short_History_of_Financial_Euphoria_-_John_Kenneth_Galbraith.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Asset_Management_A_Systematic_Approach_to_Factor_Investing_-_Andrew_Ang.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/At_the_Crest_of_the_Tidal_Wave_A_Forecast_for_the_Great_Bear_Market_-_Robert_Prechter.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/A_Zebra_in_lion_country_-_Ralph_wanger.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Bad_With_Money_-_Gaby_Dunn.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Barefoot_Investor_for_Families_-_Scott_Pape.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Behavioral_Finance_and_Wealth_Management_-_Michael_M_Pompian.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Book_of_investing_wisdom_-_Peter_Krass.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Budgets_Dont_Work_But_This_Does_-_Melissa_Browne.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Buy_Low_Rent_High_-_Samuel_Leeds.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Buy_What_You_Love_Without_Going_Broke_-_Jen_Smith.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Cashing_In_On_The_American_Dream_-_Paul_Terhorst.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Choose_FI_Your_Blueprint_to_Financial_Independence_-_Chris_Mamula.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Cold_Hard_Truth_on_Family_Kids_and_Money_-_Kevin_OLeary.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Cold_Hard_Truth_On_Men_Women_and_Money_50_Common_Money_Mistakes_and_How_to_Fix_Them_-_Kevin_OLeary.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Common_Stocks_and_Uncommon_Profits_and_Other_Writings_-_Philip_Arthur_Fisher.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Complete_financial_guide_for_young_couples_-_Larry_Burkett.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Coupon_Crazy_-_Mary_Potter_Kenyon.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Cryptoassets_-_Chris_Burniske.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Debt_Cures_They_dont_want_you_to_know_-_Kevin_Trudeau.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Debt_free_living_-_Larry_Burkett.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Deep_Value_Investing_Spanish_Edition_-_Tobia_E_Carlisle.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Deep_Value_Investing_-_Tobia_E_Carlisle.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/DeFi_and_the_Future_of_Finance_-_Campbell_R_Harvey.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/DIY_Financial_Advisor_-_Wesley_R_Gray.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Dual_Momentum_Investing_-_Gary_Antonacci.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Encyclopedia_of_Chart_Patterns_3rd_Edition_-_Thomas_Bulkowski.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Enough_-_John_C_Bogle.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/EVERYDAY_MILLIONAIRES_-_CHRIS_HOGAN.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Everything_Personal_Finance_In_Your_20S_And_30S_-_Debby_Fowles.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Family_Fortunes_-_Bill_Bonner.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/First-time_Home_Buyer_-_Scott_Trench.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Five_Steps_to_Financial_Wellbeing_-_Clare_Seal.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Following_the_Trend_Diversified_Managed_Futures_Trading_-_Andreas_Clenow.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Friends_That_Invest_Your_Guide_to_Financial_Independence_Through_Shares_and_Stocks_-_Simran_Kaur.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/From_the_Rat_Race_to_Financial_Freedom_-_Manoj_Arora.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Gamechanger_-_Pranav_Surya.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Get_a_Financial_Life_Personal_Finance_in_Your_Twenties_and_Thirties_-_Beth_Kobliner.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Global_Asset_Allocation_-_Meb_Faber.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Grow_Rich_With_Peace_of_Mind_-_Napoleon_Hill.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Grow_your_money_-_Bola_Sokunbi.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Heads_Up_Money_-_DK.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/Hedge_fun_markets_wizards_-_Jack_Dschwager.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_Money_Works_The_Facts_Visually_Explained_-_Beverly_Blair_Harzog.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_Much_Can_I_Spend_in_Retirement_A_Guide_to_Investment-Based_Retirement_Income_Strategies_-_Wade_D_Pfau.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_Not_to_Invest_-_Barry_Ritholtz.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_to_Adult_-_Jake_Cousineau.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_to_be_rich_-_J_Paul_Getty.pdf",
  "https://hemachandranss.github.io/books7/books/visual-books/How_to_Buy_a_Home_-_Power_Emily.pdf"
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
