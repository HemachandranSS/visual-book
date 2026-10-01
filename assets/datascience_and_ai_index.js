const dataScienceVideos = [
    // Add your video folder paths here. Example:
    // 'tmp/01-FULL STACK DATA SCIENCE with Artificial intelligence tutorials',
];

const videoCount = dataScienceVideos.length;
const label = videoCount === 1 ? 'Video' : 'Videos';

document.getElementById('count').textContent = `${videoCount} ${label}`;
document.getElementById('visualCount').textContent = `${videoCount} ${label}`;

const emptyState = document.querySelector('.empty');
const visualGrid = document.getElementById('visualGrid');

if (videoCount === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (visualGrid) visualGrid.style.display = 'none';
} else {
    if (emptyState) emptyState.style.display = 'none';
    if (visualGrid) visualGrid.style.display = '';

    // Dynamically generate cards for each video folder
    dataScienceVideos.forEach((folderPath) => {
        const name = folderPath
            .split('/')
            .filter(Boolean)
            .pop()
            .replace(/[_-]+/g, ' ')
            .replace(/\b\w/g, (ch) => ch.toUpperCase());

        const card = document.createElement('a');
        card.className = 'card';
        card.href = `video_viewer.html?folder=${encodeURIComponent(folderPath)}`;
        card.target = '_blank';

        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = name;

        card.appendChild(title);
        visualGrid.appendChild(card);
    });
}
