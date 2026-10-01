const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');

// Count anchor tags already present in the HTML grid
const videoCount = visualGrid ? visualGrid.querySelectorAll('a.card').length : 0;
const label = videoCount === 1 ? 'Video' : 'Videos';

document.getElementById('count').textContent = `${videoCount} ${label}`;
document.getElementById('visualCount').textContent = `${videoCount} ${label}`;

if (videoCount === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
} else {
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';
}
