const fileNames = [
  "OSFY_jan_2009.pdf",
  "OSFY_feb_2009.pdf",
  "OSFY_march_2009.pdf",
  "OSFY_april_2009.pdf",
  "OSFY_may_2009.pdf",
  "OSFY_june_2009.pdf",
  "OSFY_july_2009.pdf",
  "OSFY_aug_2009.pdf",
  "OSFY_sept_2009.pdf",
  "OSFY_oct_2009.pdf",
  "OSFY_nov_2009.pdf",
  "OSFY_dec_2009.pdf",

  "OSFY_jan_2010.pdf",
  "OSFY_feb_2010.pdf",
  "OSFY_march_2010.pdf",
  "OSFY_april_2011.pdf",
  "OSFY_may_2010.pdf",
  "OSFY_june_2010.pdf",
  "OSFY_july_2010.pdf",
  "OSFY_august_2010.pdf",
  "OSFY_sep_2010.pdf",
  "OSFY_oct_2010.pdf",
  "OSFY_nov_2010.pdf",
  "OSFY_dec_2010.pdf",

  "OSFY_july_2011.pdf",
  "OSFY_jan_2011.pdf",
  "OSFY_march_2011.pdf",
  "OSFY_april_2011.pdf",
  "OSFY_may_2011.pdf",
  "OSFY_june_2011.pdf",
  "OSFY_july_2011.pdf",
  "OSFY_august_2011.pdf",
  "OSFY_oct_2011.pdf",

  "LFY_dec_2011.pdf",
  "LFY_jan_2012.pdf",
  "LFY_feb_2012.pdf",
  "LFY_march_2012.pdf",
  "LFY_april_2012.pdf",
  "LFY_may_2012.pdf",
  "LFY_june_2012.pdf",
  "LFY_july_2012.pdf",
  "LFY_august_2012.pdf",
  "LFY_sept_2012.pdf",
  "LFY_oct_2012.pdf",

  "OSFY_nov_2012.pdf",
  "OSFY_dec_2012.pdf",

  "OSFY_jan_2013.pdf",
  "OSFY_feb_2013.pdf",
  "OSFY_march_2013.pdf",
  "OSFY_april_2013.pdf",
  "OSFY_may_2013.pdf",
  "OSFY_june_2013.pdf",
  "OSFY_july_2013.pdf",
  "OSFY_aug_2013.pdf",
  "OSFY_sep_2013.pdf",
  "OSFY_oct_2013.pdf",
  "OSFY_nov_2013.pdf",
  "OSFY_dec_2013.pdf",

  "OSFY_jan_2014.pdf",
  "OSFY_feb_2014.pdf",
  "OSFY_mar_2014.pdf",
  "OSFY_april_2014.pdf",
  "OSFY_may_2014.pdf",
  "OSFY_june_2014.pdf",
  "OSFY_july_2014.pdf",
  "OSFY_aug_2014.pdf",
  "OSFY_sept_2014.pdf",
  "OSFY_oct_2014.pdf",
  "OSFY_nov_2014.pdf",
  "OSFY_dec_2014.pdf",

  "OSFY_jan_2015.pdf",
  "OSFY_feb_2015.pdf",
  "OSFY_mar_2015.pdf",
  "OSFY_april_2015.pdf",
  "OSFY_may_2015.pdf",
  "OSFY_june_2015.pdf",
  "OSFY_july_2015.pdf",
  "OSFY_aug_2015.pdf",
  "OSFY_sep_2015.pdf",
  "OSFY_oct_2015.pdf",
  "OSFY_nov_2015.pdf",
  "OSFY_dec_2015.pdf",

  "OSFY_jan_2016.pdf",
  "OSFY_feb_2016.pdf",
  "OSFY_march_2016.pdf",
  "OSFY_april_2016.pdf",
  "OSFY_may_2016.pdf",
  "OSFY_june_2016.pdf",
  "OSFY_july_2016.pdf",
  "OSFY_aug_2016.pdf",
  "OSFY_sep_2016.pdf",
  "OSFY_oct_2016.pdf",
  "OSFY_nov_2016.pdf",
  "OSFY_dec_2016.pdf",

  "OSFY_jan_2017.pdf",
  "OSFY_feb_2017.pdf",
  "OSFY_mar_2017.pdf",
  "OSFY_apr_2017.pdf",
  "OSFY_may_2017.pdf",
  "OSFY_june_2017.pdf",
  "OSFY_july_2017.pdf",
  "OSFY_aug_2017.pdf",
  "OSFY_sep_2017.pdf",
  "OSFY_oct_2017.pdf",
  "OSFY_nov_2017.pdf",

  "OSFY_jan_2018.pdf",
  "OSFY_feb_2018.pdf",
  "OSFY_mar_2018.pdf",
  "OSFY_april_2018.pdf",
  "OSFY_may_2018.pdf",
  "OSFY_june_2018.pdf",
  "OSFY_july_2018.pdf",
  "OSFY_aug_2018.pdf",
  "OSFY_sep_2018.pdf",
  "OSFY_oct_2017.pdf",
  "OSFY_nov_2018.pdf",
  "OSFY_dec_2018.pdf",

  "OSFY_jan_2019.pdf",
  "OSFY_feb_2019.pdf",
  "OSFY_mar_2019.pdf",
  "OSFY_apr_2019.pdf",
  "OSFY_may_2019.pdf",
  "OSFY_june_2019.pdf",
  "OSFY_july_2019.pdf",
  "OSFY_aug_2019.pdf",
  "OSFY_sep_2019.pdf",
  "OSFY_oct_2019.pdf",
  "OSFY_nov_2019.pdf",
  "OSFY_dec_2019.pdf",

  "OSFY_jan_2020.pdf",
  "OSFY_feb_2020.pdf",
  "OSFY_mar_2020.pdf",
  "OSFY_apr_2020.pdf",
  "OSFY_may_2020.pdf",
  "OSFY_june_2020.pdf",
  "OSFY_july_2020.pdf",
  "OSFY_aug_2020.pdf",
  "OSFY_sep_2020.pdf",
  "OSFY_oct_2020.pdf",
  "OSFY_nov_2020.pdf",
  "OSFY_dec_2020.pdf",

  "OSFY_jan_2021.pdf",
  "feb2021.pdf",
  "march2021.pdf",
  "april2021.pdf",
  "june2021.pdf",
  "July2021.pdf",
  "OSFYAug2021.pdf",
  "OSFYSep2021.pdf",
  "OSFYOct2021.pdf",
  "OSFYNov2021.pdf",
  "OSFYDec2021.pdf",

  "OSFYJan2022.pdf",
  "OSFYFeb2022.pdf",
  "OSFYMarch2022.pdf",
  "OSFYApril2022.pdf",
  "OSFYMay2022.pdf",
  "OSFYJune2022.pdf",
  "OSFYJuly2022.pdf",
  "OSFYAug2022.pdf",
  "OSFYSep2022.pdf",
  "OSFYOct2022.pdf",
  "OSFYNov2022.pdf",
  "OSFYDec2022.pdf",

  "OSFYJan2023.pdf",
  "OSFYFeb2023.pdf",
  "OSFYMarch2023.pdf",
  "OSFYApril2023.pdf",
  "OSFYMay2023.pdf",
  "OSFYJune2023.pdf",
  "OSFYJuly2023.pdf",
  "OSFYAug2023.pdf",
  "OSFYSep2023.pdf",
  "OSFYOct2023.pdf",
  "OSFYNov2023.pdf",
  "OSFYDec2023.pdf",

  "OSFYJan2024.pdf",
  "OSFYFeb2024.pdf",
  "OSFYMarch2024.pdf",
  "OSFYApril2024.pdf",
  "OSFYMay2024.pdf",
  "OSFYJune2024.pdf",
  "OSFYJuly2024.pdf",
  "OSFYAug2024.pdf",
  "OSFYSep2024.pdf",
  "OSFYOct2024.pdf",
  "OSFYNov2024.pdf",
  "OSFYDec2024.pdf",

  "OSFYJan2025.pdf",
  "OSFYFeb2025.pdf",
  "OSFYMarch2025.pdf",
  "OSFYApril2025.pdf",
  "OSFYMay2025.pdf",
  "OSFYJune2025.pdf",
  "OSFYJuly2025.pdf",
  "OSFYAug2025.pdf",
  "OSFYSep2025.pdf",
  "OSFYOct2025.pdf",
  "OSFYNov2025.pdf",
  "OSFYDec2025.pdf",

  "OSFYJan2026.pdf",
  "OSFYFeb2026.pdf",
  "OSFYMar2026.pdf",
  "OSFYApr2026.pdf",
  "OSFYMay2026.pdf"
];

const osfyBooks = fileNames.map(
  (fileName) =>
    `https://hemachandranss.github.io/books5/books/osfy/${fileName}`
);

const normalizeBookPath = (value) => {
  if (!value) return '';

  try {
    const url = new URL(value, window.location.href);
    const pathname = url.pathname
      .replace(/^\/+/, '')
      .replace(/\/+$/, '');

    const booksIndex = pathname.indexOf('books/');

    return booksIndex >= 0
      ? pathname.slice(booksIndex)
      : pathname;
  } catch {
    const cleaned = String(value)
      .replace(/^\/+/, '')
      .replace(/\/+$/, '');

    const booksIndex = cleaned.indexOf('books/');

    return booksIndex >= 0
      ? cleaned.slice(booksIndex)
      : cleaned;
  }
};

const relativeOsfyBooks = osfyBooks.map((book) =>
  normalizeBookPath(book)
);

const bookCount = relativeOsfyBooks.length;
const label = bookCount === 1 ? 'Book' : 'Books';

document.getElementById('count').textContent =
  `${bookCount} ${label}`;

document.getElementById('visualCount').textContent =
  `${bookCount} ${label}`;