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
'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201606_dmystify_Big_Bang',
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201607_dmystify_Life.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201608_dmystify_Quantum_world.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201609_dmsytify_Human_Body.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201610_dmsytify_Geology_Dating.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201611_dmsytify_Intelligent_Plants.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201612_dmystify_Natural_Selection.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201701_dmystify_Time.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201702_dmystify_Stars.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201703_dmystify_Microscopic_Life.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201704_dmystify_Fossils.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201705_dmystify_Oceans.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201706_dmystify_Pseudoscience.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201707_dmystify_The_Sun.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201708_dmystify_Gravity.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201709_dmystify_Fringe Science.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201710_dmystify_Game Theory.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201711_dmystify_Gravitational Waves.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201712_dmystify_Unsung Science Heroes.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201801_dmystify_Water.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201802_dmystify_Dinosaurs.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201803_dmystify_Sound.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201804_dmystify_Light.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201805_Dmystify_LHC.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201806_dmystify_Moons of the Solar System.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201807_dmystify_Exoplanets.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201808_dmystify_ISRO.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201809_dmystify_Mars.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201810_dmystify_Subatomic Particles.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201811_dmystify_Electricity.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201812_dmystify_Antimatter.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201901_dmystify_Space.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201902_dmystify_The Atmosphere.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201903_dmystify_DNA.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201904_dmystify_Physics.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201905_Dmystify_Chemistry.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201906_dmystify_18 Wacky science experiments.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201907_dmystify_Biology.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201908_Dmystify_Volcanoes.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201909_Dmystify_Music.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201910_Dmystify_Archaeology.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201911_Dmystify_Quantum Chromodynamics.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/201912_Dmystify_Spaceflight 2020s.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202001_Dmystify_Fungi.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202002_Dmystify_Astrobiology.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202003_Dmystify_Viruses.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202004_Dmystify_Extinction.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202005_Dmystify_Homo_Sapiens.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202006_dmystify_Vaccines.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202007_dmystify_The Ice Age.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202008_dmystify_Languages.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202009_dmystify_Plate tectonics.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202010_dmystify_Biochemistry.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202012_dmystify_Explorers.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202101_dmystify_Nothing.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202102_dmystify_Forensic Science.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202103_dmystify_Snakes.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202104_dmystify_Microtechnology.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202105_dmystify_Asteroids.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202107_dmystify_Gases.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202108_dmystify_Hydraulics.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202109_dmystify_Optics.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202110_dmystify_Colonising Mars.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202111_dmystify_Chaos Theory.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202112_dmystify_Pollution.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202201_dmystify_Plants.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202202_dmystify_Oil.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202203_dmystify_Units.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202204_dmystify_Telescopes.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202205_dmystify_Notbable Scientists - Part 1.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202206_dmystify_Notbable Scientists - Part 2.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202207_dmystify_Magnetism.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202208_dmystify_Motion.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202209_dmystify_Heat.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202210_dmystify_Birds.pdf",
    "https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202211_dmystify_Carbon.pdf",
    'https://hemachandranss.github.io/books3/books/visual-books/digit_dmystify/202011_dmystify_Insects'
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
