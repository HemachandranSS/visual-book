const hubMagazineCounts = {
  businessToday: 112,
  indiaToday: 419,
  autoToday: 42,
  total: 573,
};

const label = hubMagazineCounts.total === 1 ? 'Issue' : 'Issues';
const countEl = document.getElementById('count');
if (countEl) {
  countEl.textContent = `${hubMagazineCounts.total} ${label}`;
}
