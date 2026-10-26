const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');
const cards = visualGrid ? Array.from(visualGrid.querySelectorAll('a.card')) : [];
const videoCount = cards.length;
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

function formatDuration(seconds) {
    const total = Math.round(Number(seconds) || 0);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}

cards.forEach((card) => {
    const meta = card.querySelector('.card-meta');
    if (!meta) return;
    const pageUrl = new URL(card.getAttribute('href'), window.location.href);
    const folder = pageUrl.searchParams.get('folder');
    if (!folder) return;
    const metaUrl = new URL(`${folder}/metadata.json`, `${window.location.origin}/`);
    const base = meta.textContent.trim();

    fetch(metaUrl, { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) throw new Error('metadata missing');
            return response.json();
        })
        .then((data) => {
            const parts = Array.isArray(data.chunks) ? data.chunks.length : 0;
            const duration = Number(data.total_duration) || 0;
            const partLabel = parts === 1 ? 'part' : 'parts';
            const detail = duration > 0
                ? `${parts} ${partLabel} · ${formatDuration(duration)}`
                : `${parts} ${partLabel}`;
            meta.textContent = base ? `${base} · ${detail}` : detail;
        })
        .catch(() => {});
});
