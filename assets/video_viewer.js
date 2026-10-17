let currentVideoIndex = 1;
let totalVideos = 0;
let catalogResolved = false;
let videoFolderPath = '';
let scale = 1.0;
let hasZoomed = false;
let zoomAnchor = null;
let videoMetadata = null;
let activePlayer = 1;
let isMuted = false;
let volume = 1;
let playbackRate = 1;
let isScrubbing = false;
let headerHideTimer = null;
let headerPinned = false;
let controlsHideTimer = null;
let catalogToken = 0;
let loadToken = 0;
const streamControllers = new Map();

const SPEEDS = [1, 1.25, 1.5, 1.75, 2];
const PREFS_KEY = 'visual-book-video-prefs';
const mobileZoomFactor = window.matchMedia('(max-width: 768px)').matches ? 1.3 : 1.2;

const mainContent = document.querySelector('.main-content');
const zoomContainer = document.getElementById('zoomContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const welcomeMessage = document.getElementById('welcomeMessage');
const loadingMessage = document.getElementById('loadingMessage');
const videoContainer = document.getElementById('videoContainer');
const videoPlayer1 = document.getElementById('videoPlayer1');
const videoPlayer2 = document.getElementById('videoPlayer2');
const subtitle = document.getElementById('subtitle');
const folderBadge = document.getElementById('folderBadge');
const header = document.querySelector('.header');
const topRevealZone = document.getElementById('topRevealZone');
const mobilePrevBtn = document.getElementById('mobilePrevBtn');
const mobileNextBtn = document.getElementById('mobileNextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressContainer = document.getElementById('progressContainer');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const bufferFill = document.getElementById('bufferFill');
const timeDisplay = document.getElementById('timeDisplay');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const skipBackBtn = document.getElementById('skipBackBtn');
const skipFwdBtn = document.getElementById('skipFwdBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const speedBtn = document.getElementById('speedBtn');
const bufferingOverlay = document.getElementById('bufferingOverlay');
const playerStatus = document.getElementById('playerStatus');

const params = new URLSearchParams(window.location.search);
const folderParam = normalizeFolder(params.get('folder'));

loadPrefs();

prevBtn.addEventListener('click', showPrevVideo);
nextBtn.addEventListener('click', showNextVideo);
zoomInBtn.addEventListener('click', () => zoomIn(false));
zoomOutBtn.addEventListener('click', () => zoomOut(false));
mobilePrevBtn.addEventListener('click', showPrevVideo);
mobileNextBtn.addEventListener('click', showNextVideo);

const getTouchDistance = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
const getTouchCenter = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

let mobileArrowHideTimer = null;
const showMobileArrows = () => {
    mobilePrevBtn.classList.add('is-visible');
    mobileNextBtn.classList.add('is-visible');
    clearTimeout(mobileArrowHideTimer);
    mobileArrowHideTimer = setTimeout(() => {
        mobilePrevBtn.classList.remove('is-visible');
        mobileNextBtn.classList.remove('is-visible');
    }, 2200);
};

mobilePrevBtn.addEventListener('touchstart', showMobileArrows, { passive: true });
mobileNextBtn.addEventListener('touchstart', showMobileArrows, { passive: true });

let pinchStartDist = null;
let pinchStartScale = null;
let pinchLiveRatio = 1;

mainContent.addEventListener('touchstart', (e) => {
    showMobileArrows();
    if (e.touches.length === 2) {
        pinchStartDist = getTouchDistance(e.touches[0], e.touches[1]);
        pinchStartScale = scale;
        pinchLiveRatio = 1;
        const center = getTouchCenter(e.touches[0], e.touches[1]);
        zoomAnchor = {
            x: mainContent.scrollLeft + center.x,
            y: mainContent.scrollTop + center.y
        };
    }
}, { passive: true });

mainContent.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && pinchStartDist !== null) {
        e.preventDefault();
        const ratio = Math.min(Math.max(getTouchDistance(e.touches[0], e.touches[1]) / pinchStartDist, 0.5 / pinchStartScale), 3 / pinchStartScale);
        pinchLiveRatio = ratio;
        zoomContainer.style.transform = `scale(${pinchStartScale * ratio})`;
    }
}, { passive: false });

mainContent.addEventListener('touchend', (e) => {
    if (pinchStartDist !== null && e.touches.length < 2) {
        const newScale = Math.min(Math.max(pinchStartScale * pinchLiveRatio, 0.5), 3.0);
        pinchStartDist = null;
        pinchStartScale = null;
        pinchLiveRatio = 1;
        if (Math.abs(newScale - scale) > 0.01) {
            scale = newScale;
            hasZoomed = scale !== 1;
            applyZoom();
        } else {
            applyZoom();
        }
    }
}, { passive: true });

mainContent.addEventListener('touchcancel', () => {
    pinchStartDist = null;
    pinchStartScale = null;
    pinchLiveRatio = 1;
    applyZoom();
}, { passive: true });

const activateHeader = () => {
    header.classList.remove('is-hidden');
    clearTimeout(headerHideTimer);
    if (!headerPinned) {
        headerHideTimer = setTimeout(() => {
            header.classList.add('is-hidden');
        }, 2200);
    }
};

const pinHeader = () => {
    headerPinned = true;
    activateHeader();
};

const unpinHeader = () => {
    headerPinned = false;
    activateHeader();
};

document.addEventListener('pointermove', (event) => {
    if (event.clientY <= 72) {
        unpinHeader();
        return;
    }
    if (!header.matches(':hover') && !topRevealZone.matches(':hover')) {
        header.classList.add('is-hidden');
    }
}, { passive: true });

header.addEventListener('mouseenter', pinHeader);
header.addEventListener('mouseleave', unpinHeader);
topRevealZone.addEventListener('mouseenter', unpinHeader);
topRevealZone.addEventListener('mouseleave', () => {
    if (!header.matches(':hover')) header.classList.add('is-hidden');
});
header.classList.add('is-hidden');

document.addEventListener('keydown', (e) => {
    if (!folderParam) return;
    if (e.target.closest('input, textarea, select')) return;

    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            skipGlobal(-10);
            break;
        case 'ArrowRight':
            e.preventDefault();
            skipGlobal(10);
            break;
        case 'ArrowUp':
            e.preventDefault();
            setVolume(Math.min(1, volume + 0.05));
            break;
        case 'ArrowDown':
            e.preventDefault();
            setVolume(Math.max(0, volume - 0.05));
            break;
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'm':
        case 'M':
            e.preventDefault();
            toggleMute();
            break;
        case 'f':
        case 'F':
            e.preventDefault();
            toggleFullscreen();
            break;
        case '+':
        case '=':
            e.preventDefault();
            zoomIn(false);
            break;
        case '-':
            e.preventDefault();
            zoomOut(false);
            break;
        default:
            break;
    }
});

[videoPlayer1, videoPlayer2].forEach((player) => {
    player.addEventListener('ended', () => {
        if (player === getActive()) playSeamlessNext();
    });
    player.addEventListener('error', () => handlePlayerError(player));
    player.addEventListener('play', syncControls);
    player.addEventListener('pause', syncControls);
    player.addEventListener('waiting', () => {
        if (player === getActive()) showBuffering(true);
    });
    player.addEventListener('playing', () => {
        if (player === getActive()) showBuffering(false);
    });
    player.addEventListener('canplay', () => {
        if (player === getActive()) showBuffering(false);
    });
});

if (folderParam) {
    videoFolderPath = folderParam;
    folderBadge.hidden = false;
    folderBadge.style.display = 'inline-flex';
    folderBadge.textContent = titleize(folderParam.split('/').filter(Boolean).pop() || folderParam);
    welcomeMessage.hidden = true;
    welcomeMessage.style.display = 'none';
    videoContainer.hidden = false;
    showBuffering(true);
    setCatalogStatus(false);
    loadVideo(1);
    fetchStreamingDataInBackground(folderParam);
} else {
    updatePageInfo();
    updateNavigationButtons();
}

function getActive() {
    return activePlayer === 1 ? videoPlayer1 : videoPlayer2;
}

function getInactive() {
    return activePlayer === 1 ? videoPlayer2 : videoPlayer1;
}

function chunkUrl(index) {
    return new URL(`${videoFolderPath}/${index}.mp4`, `${window.location.origin}/`).toString();
}

function metadataUrl(folder) {
    return new URL(`${folder}/metadata.json`, `${window.location.origin}/`).toString();
}

function togglePlayPause() {
    const active = getActive();
    if (active.paused) {
        active.play().catch(() => {});
    } else {
        active.pause();
    }
}

function showBuffering(on) {
    if (!bufferingOverlay) return;
    bufferingOverlay.hidden = !on;
    bufferingOverlay.classList.toggle('is-visible', on);
    if (loadingMessage) loadingMessage.hidden = true;
}

function setPlayerStatus(message) {
    if (!playerStatus) return;
    playerStatus.textContent = message || '';
    playerStatus.hidden = !message;
}

function setCatalogStatus(resolved) {
    catalogResolved = resolved;
    subtitle.classList.toggle('is-busy', !resolved);
    subtitle.textContent = describeCatalog();
}

function describeCatalog() {
    if (!videoFolderPath) return 'Open a folder containing mp4 files';
    if (!catalogResolved && totalVideos === 0) return 'Fetching stream catalog in the background…';
    if (!catalogResolved) return `Indexing parts in the background… ${totalVideos} found`;
    const parts = `${totalVideos} ${totalVideos === 1 ? 'part' : 'parts'}`;
    if (videoMetadata && videoMetadata.total_duration > 0) {
        return `${parts} · ${formatTime(videoMetadata.total_duration)}`;
    }
    return parts;
}

function fetchStreamingDataInBackground(folder) {
    const token = ++catalogToken;
    const url = metadataUrl(folder);

    fetch(url, { cache: 'no-store' })
        .then((response) => {
            if (!response.ok) throw new Error('metadata missing');
            return response.json();
        })
        .then((data) => {
            if (token !== catalogToken) return;
            const normalized = normalizeMetadata(data);
            if (!normalized.chunks.length) throw new Error('empty metadata');
            videoMetadata = normalized;
            totalVideos = normalized.chunks.length;
            setCatalogStatus(true);
            updatePageInfo();
            updateNavigationButtons();
            preloadNextInBackground();
        })
        .catch(() => {
            if (token !== catalogToken) return;
            probeChunksInBackground(folder, token);
        });
}

function probeChunksInBackground(folder, token) {
    let index = 1;

    const probeNext = () => {
        if (token !== catalogToken) return;
        const url = new URL(`${folder}/${index}.mp4`, `${window.location.origin}/`).toString();
        fetch(url, { method: 'HEAD', cache: 'no-store' })
            .then((response) => {
                if (token !== catalogToken) return;
                if (!response.ok) {
                    totalVideos = Math.max(0, index - 1);
                    setCatalogStatus(true);
                    updatePageInfo();
                    updateNavigationButtons();
                    return;
                }
                totalVideos = index;
                subtitle.textContent = describeCatalog();
                updatePageInfo();
                updateNavigationButtons();
                index += 1;
                const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 40));
                schedule(() => probeNext());
            })
            .catch(() => {
                if (token !== catalogToken) return;
                totalVideos = Math.max(totalVideos, index - 1);
                setCatalogStatus(true);
                updatePageInfo();
                updateNavigationButtons();
            });
    };

    setTimeout(probeNext, 0);
}

function normalizeMetadata(data) {
    const chunks = (Array.isArray(data.chunks) ? data.chunks : [])
        .map((chunk, i) => ({
            index: Number(chunk.index) || i + 1,
            duration: Number(chunk.duration) || 0,
            start_time: Number(chunk.start_time) || 0,
            file: chunk.file || `${Number(chunk.index) || i + 1}.mp4`
        }))
        .filter((chunk) => chunk.index > 0)
        .sort((a, b) => a.index - b.index);

    const total = Number(data.total_duration) || chunks.reduce((sum, chunk) => sum + chunk.duration, 0);
    return { total_duration: total, chunks };
}

function loadVideo(index, seekTime) {
    if (!videoFolderPath || index < 1) return;
    if (catalogResolved && totalVideos > 0 && index > totalVideos) return;

    const incoming = getInactive();
    if (Number(incoming.dataset.chunkIndex) === index && incoming.getAttribute('src')) {
        adoptBackgroundPlayer(index, seekTime);
        return;
    }

    cancelStreamFetch(index);
    const token = ++loadToken;
    currentVideoIndex = index;
    updatePageInfo();
    updateNavigationButtons();
    setPlayerStatus('');
    showBuffering(true);

    const active = getActive();
    parkPlayer(incoming);

    active.dataset.chunkIndex = String(index);
    active.dataset.loadToken = String(token);
    active.classList.remove('is-idle');
    active.preload = 'auto';
    active.muted = isMuted;
    active.volume = volume;
    active.playbackRate = playbackRate;
    active.src = chunkUrl(index);
    active.load();

    active.addEventListener('loadeddata', () => {
        if (token !== loadToken) return;
        showBuffering(false);
        updateNavigationButtons();
        if (typeof seekTime === 'number' && seekTime > 0) {
            const maxTime = Number.isFinite(active.duration) ? Math.max(0, active.duration - 0.05) : seekTime;
            active.currentTime = Math.min(seekTime, maxTime);
        }
        active.play().catch(() => {});
        preloadNextInBackground();
    }, { once: true });
}

function parkPlayer(player) {
    player.classList.add('is-idle');
    player.pause();
}

function handlePlayerError(player) {
    const index = Number(player.dataset.chunkIndex || 0);
    if (!index || !player.src || player.src === window.location.href) return;
    if (player.error && player.error.code === MediaError.MEDIA_ERR_ABORTED) return;

    if (player !== getActive()) {
        if (index === currentVideoIndex + 1 && !videoMetadata) {
            totalVideos = currentVideoIndex;
            setCatalogStatus(true);
            updatePageInfo();
            updateNavigationButtons();
            player.removeAttribute('src');
            player.load();
        }
        return;
    }

    if (player.dataset.loadToken !== String(loadToken)) return;

    showBuffering(false);
    if (currentVideoIndex > 1 && !videoMetadata) {
        totalVideos = currentVideoIndex - 1;
        currentVideoIndex = totalVideos;
        setCatalogStatus(true);
        updatePageInfo();
        updateNavigationButtons();
        setPlayerStatus('That was the last part.');
        return;
    }

    setPlayerStatus('This part could not be loaded. Check the folder path and try again.');
    updateNavigationButtons();
}

function preloadNextInBackground() {
    const nextIndex = currentVideoIndex + 1;
    const inactive = getInactive();

    if (nextIndex < 1 || (catalogResolved && totalVideos > 0 && nextIndex > totalVideos)) {
        revokeObjectUrl(inactive);
        inactive.removeAttribute('src');
        inactive.load();
        return;
    }

    fetchStreamInBackground(inactive, nextIndex);
}

function fetchStreamInBackground(player, index) {
    const url = chunkUrl(index);
    if (player.dataset.fetching === String(index)) return;
    if (Number(player.dataset.chunkIndex) === index && (player.dataset.objectUrl || player.getAttribute('src'))) return;

    player.dataset.chunkIndex = String(index);
    player.dataset.fetching = String(index);
    player.preload = 'auto';
    player.playbackRate = playbackRate;

    cancelStreamFetch(index);
    const controller = new AbortController();
    streamControllers.set(index, controller);

    const request = { signal: controller.signal };
    if ('priority' in Request.prototype) request.priority = 'low';

    const stillCurrent = () => streamControllers.get(index) === controller;

    fetch(url, request)
        .then((response) => {
            if (!stillCurrent() || currentVideoIndex + 1 !== index) return null;
            if (!response.ok) {
                if ((response.status === 404 || response.status === 410) && !videoMetadata) {
                    totalVideos = currentVideoIndex;
                    setCatalogStatus(true);
                    updatePageInfo();
                    updateNavigationButtons();
                }
                return null;
            }
            return response.blob();
        })
        .then((blob) => {
            if (!stillCurrent()) return;
            streamControllers.delete(index);
            if (player.dataset.fetching === String(index)) delete player.dataset.fetching;
            if (!blob || currentVideoIndex + 1 !== index) return;
            revokeObjectUrl(player);
            const objectUrl = URL.createObjectURL(blob);
            player.dataset.objectUrl = objectUrl;
            player.src = objectUrl;
            player.load();
        })
        .catch((error) => {
            if (!stillCurrent()) return;
            streamControllers.delete(index);
            if (player.dataset.fetching === String(index)) delete player.dataset.fetching;
            if (error.name === 'AbortError' || currentVideoIndex + 1 !== index) return;
            if (!player.getAttribute('src')) {
                player.src = url;
                player.load();
            }
        });
}

function adoptBackgroundPlayer(index, seekTime) {
    const token = ++loadToken;
    const incoming = getInactive();
    const outgoing = getActive();
    parkPlayer(outgoing);
    revokeObjectUrl(outgoing);
    outgoing.removeAttribute('src');
    outgoing.load();

    activePlayer = activePlayer === 1 ? 2 : 1;
    currentVideoIndex = index;
    incoming.dataset.loadToken = String(token);
    incoming.classList.remove('is-idle');
    incoming.muted = isMuted;
    incoming.volume = volume;
    incoming.playbackRate = playbackRate;
    updatePageInfo();
    updateNavigationButtons();
    setPlayerStatus('');

    const start = () => {
        if (token !== loadToken) return;
        showBuffering(false);
        if (typeof seekTime === 'number' && seekTime > 0 && Number.isFinite(incoming.duration)) {
            incoming.currentTime = Math.min(seekTime, Math.max(0, incoming.duration - 0.05));
        }
        incoming.play().catch(() => {});
        preloadNextInBackground();
    };

    if (incoming.readyState >= 2) {
        start();
    } else {
        showBuffering(true);
        incoming.addEventListener('loadeddata', start, { once: true });
    }
}

function cancelStreamFetch(index) {
    const controller = streamControllers.get(index);
    if (!controller) return;
    controller.abort();
    streamControllers.delete(index);
}

function revokeObjectUrl(player) {
    const url = player.dataset.objectUrl;
    if (!url) return;
    URL.revokeObjectURL(url);
    delete player.dataset.objectUrl;
}

function playSeamlessNext() {
    if (catalogResolved && totalVideos > 0 && currentVideoIndex >= totalVideos) return;

    const inactive = getInactive();
    const nextIndex = currentVideoIndex + 1;
    if (inactive.dataset.chunkIndex !== String(nextIndex) || inactive.readyState < 2) {
        loadVideo(nextIndex);
        return;
    }

    const active = getActive();
    parkPlayer(active);

    inactive.classList.remove('is-idle');
    inactive.muted = isMuted;
    inactive.volume = volume;
    inactive.playbackRate = playbackRate;
    if (inactive.currentTime > 0.35) inactive.currentTime = 0;
    inactive.play().catch(() => {});

    activePlayer = activePlayer === 1 ? 2 : 1;
    currentVideoIndex = nextIndex;
    updatePageInfo();
    updateNavigationButtons();
    preloadNextInBackground();
}

function getGlobalTime() {
    const active = getActive();
    const local = Number.isFinite(active.currentTime) ? active.currentTime : 0;
    if (videoMetadata) {
        const chunkInfo = videoMetadata.chunks.find((chunk) => chunk.index === currentVideoIndex);
        if (chunkInfo) return chunkInfo.start_time + local;
    }
    return local;
}

function getTotalDuration() {
    if (videoMetadata && videoMetadata.total_duration > 0) return videoMetadata.total_duration;
    const active = getActive();
    return Number.isFinite(active.duration) ? active.duration : 0;
}

function getBufferedEnd() {
    const active = getActive();
    if (!active.buffered || active.buffered.length === 0) return getGlobalTime();
    const localEnd = active.buffered.end(active.buffered.length - 1);
    if (videoMetadata) {
        const chunkInfo = videoMetadata.chunks.find((chunk) => chunk.index === currentVideoIndex);
        if (chunkInfo) return chunkInfo.start_time + localEnd;
    }
    return localEnd;
}

function seekGlobal(targetTime) {
    const total = getTotalDuration();
    if (total > 0) targetTime = Math.max(0, Math.min(targetTime, total));
    else targetTime = Math.max(0, targetTime);

    if (videoMetadata && videoMetadata.chunks.length) {
        let targetChunk = videoMetadata.chunks[videoMetadata.chunks.length - 1];
        for (const chunk of videoMetadata.chunks) {
            const chunkEnd = chunk.start_time + chunk.duration;
            if (targetTime >= chunk.start_time && targetTime < chunkEnd) {
                targetChunk = chunk;
                break;
            }
        }
        const localTime = Math.max(0, targetTime - targetChunk.start_time);
        if (targetChunk.index === currentVideoIndex) {
            const active = getActive();
            active.currentTime = localTime;
            if (active.paused) active.play().catch(() => {});
        } else {
            loadVideo(targetChunk.index, localTime);
        }
        return;
    }

    const active = getActive();
    if (Number.isFinite(active.duration)) {
        active.currentTime = Math.min(targetTime, active.duration);
        if (active.paused) active.play().catch(() => {});
    }
}

function skipGlobal(delta) {
    seekGlobal(getGlobalTime() + delta);
}

function showPrevVideo() {
    if (currentVideoIndex > 1) loadVideo(currentVideoIndex - 1);
}

function showNextVideo() {
    if (!catalogResolved || totalVideos === 0 || currentVideoIndex < totalVideos) {
        loadVideo(currentVideoIndex + 1);
    }
}

function zoomIn(preserveAnchor = false) {
    if (!preserveAnchor) captureZoomAnchor();
    scale = Math.min(scale * mobileZoomFactor, 3);
    hasZoomed = true;
    applyZoom();
}

function zoomOut(preserveAnchor = false) {
    if (!preserveAnchor) captureZoomAnchor();
    scale = Math.max(scale / mobileZoomFactor, 0.5);
    hasZoomed = scale !== 1;
    applyZoom();
}

function applyZoom() {
    zoomContainer.style.transform = scale === 1 ? '' : `scale(${scale})`;
    mainContent.classList.toggle('zoomed-state', hasZoomed && scale !== 1);
    settleViewportAfterRender();
}

function updatePageInfo() {
    if (!videoFolderPath) {
        pageInfo.textContent = '-';
        return;
    }
    pageInfo.textContent = totalVideos > 0
        ? `Part ${currentVideoIndex} of ${totalVideos}`
        : `Part ${currentVideoIndex}`;
}

function updateNavigationButtons() {
    const hasFolder = !!videoFolderPath;
    const atFirst = !hasFolder || currentVideoIndex <= 1;
    const atLast = !hasFolder || (catalogResolved && totalVideos > 0 && currentVideoIndex >= totalVideos);

    prevBtn.disabled = atFirst;
    nextBtn.disabled = atLast;
    mobilePrevBtn.disabled = atFirst;
    mobileNextBtn.disabled = atLast;
}

function updateViewportFitMode() {
    requestAnimationFrame(() => {
        const fitsHorizontally = mainContent.scrollWidth <= mainContent.clientWidth + 1;
        const fitsVertically = mainContent.scrollHeight <= mainContent.clientHeight + 1;
        mainContent.classList.toggle('centered-state', fitsHorizontally && fitsVertically);
        if (!hasZoomed || scale === 1) {
            mainContent.classList.toggle('zoomed-state', !(fitsHorizontally && fitsVertically));
        }
        if (fitsHorizontally) mainContent.scrollLeft = 0;
        if (fitsVertically) mainContent.scrollTop = 0;
    });
}

function captureZoomAnchor() {
    zoomAnchor = {
        x: mainContent.scrollLeft + mainContent.clientWidth / 2,
        y: mainContent.scrollTop + mainContent.clientHeight / 2
    };
}

function restoreZoomAnchor() {
    requestAnimationFrame(() => {
        if (!zoomAnchor) {
            mainContent.scrollLeft = 0;
            mainContent.scrollTop = 0;
            return;
        }
        const targetLeft = zoomAnchor.x - mainContent.clientWidth / 2;
        const targetTop = zoomAnchor.y - mainContent.clientHeight / 2;
        const maxLeft = Math.max(0, mainContent.scrollWidth - mainContent.clientWidth);
        const maxTop = Math.max(0, mainContent.scrollHeight - mainContent.clientHeight);
        mainContent.scrollLeft = Math.min(Math.max(0, targetLeft), maxLeft);
        mainContent.scrollTop = Math.min(Math.max(0, targetTop), maxTop);
        zoomAnchor = null;
    });
}

function settleViewportAfterRender() {
    if (hasZoomed && zoomAnchor) {
        restoreZoomAnchor();
        return;
    }
    requestAnimationFrame(() => {
        mainContent.scrollLeft = 0;
        mainContent.scrollTop = 0;
        updateViewportFitMode();
    });
}

function titleize(value) {
    return value
        .replace(/[_-]+/g, ' ')
        .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

function normalizeFolder(folder) {
    const raw = (folder || '').trim();
    if (!raw) return '';
    if (/^https?:\/\//i.test(raw)) {
        try {
            return new URL(raw).pathname.replace(/\/+$/, '');
        } catch {
            return raw.replace(/\/+$/, '');
        }
    }
    return raw.replace(/^\/+/, '').replace(/\/+$/, '');
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateProgress() {
    if (!isScrubbing && progressFill && progressHandle && timeDisplay) {
        const total = getTotalDuration();
        const current = getGlobalTime();
        const percent = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;
        const buffered = total > 0 ? Math.min(100, Math.max(percent, (getBufferedEnd() / total) * 100)) : 0;
        progressFill.style.width = `${percent}%`;
        progressHandle.style.left = `${percent}%`;
        if (bufferFill) bufferFill.style.width = `${buffered}%`;
        timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
    }
    requestAnimationFrame(updateProgress);
}
requestAnimationFrame(updateProgress);

function syncControls() {
    const active = getActive();
    if (playPauseBtn) {
        const paused = active.paused;
        playPauseBtn.textContent = paused ? '▶' : '⏸';
        playPauseBtn.title = paused ? 'Play (Space)' : 'Pause (Space)';
        playPauseBtn.setAttribute('aria-label', paused ? 'Play' : 'Pause');
    }
}

function showControls() {
    videoContainer.classList.add('controls-active');
    clearTimeout(controlsHideTimer);
    controlsHideTimer = setTimeout(() => {
        if (!videoContainer.matches(':hover')) videoContainer.classList.remove('controls-active');
    }, 2800);
}

function toggleMute() {
    isMuted = !isMuted;
    if (!isMuted && volume === 0) volume = 0.6;
    applyAudio();
    savePrefs();
}

function setVolume(nextVolume) {
    volume = Math.min(1, Math.max(0, nextVolume));
    isMuted = volume === 0;
    applyAudio();
    savePrefs();
}

function applyAudio() {
    [videoPlayer1, videoPlayer2].forEach((player) => {
        player.muted = isMuted;
        player.volume = volume;
    });
    if (volumeSlider) volumeSlider.value = String(isMuted ? 0 : volume);
    if (muteBtn) {
        muteBtn.textContent = isMuted || volume === 0 ? '🔇' : '🔊';
        muteBtn.title = isMuted ? 'Unmute (M)' : 'Mute (M)';
    }
}

function cycleSpeed() {
    const index = SPEEDS.indexOf(playbackRate);
    playbackRate = SPEEDS[(index + 1) % SPEEDS.length];
    videoPlayer1.playbackRate = playbackRate;
    videoPlayer2.playbackRate = playbackRate;
    if (speedBtn) speedBtn.textContent = `${playbackRate}×`;
    savePrefs();
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}

function loadPrefs() {
    try {
        const saved = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
        if (typeof saved.volume === 'number') volume = Math.min(1, Math.max(0, saved.volume));
        if (typeof saved.muted === 'boolean') isMuted = saved.muted;
        if (SPEEDS.includes(saved.rate)) playbackRate = saved.rate;
    } catch {
        volume = 1;
        isMuted = false;
        playbackRate = 1;
    }
    applyAudio();
    videoPlayer1.playbackRate = playbackRate;
    videoPlayer2.playbackRate = playbackRate;
    if (speedBtn) speedBtn.textContent = `${playbackRate}×`;
}

function savePrefs() {
    try {
        localStorage.setItem(PREFS_KEY, JSON.stringify({
            volume,
            muted: isMuted,
            rate: playbackRate
        }));
    } catch {
        // Private mode can block storage; playback still works.
    }
}

if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
if (skipBackBtn) skipBackBtn.addEventListener('click', () => skipGlobal(-10));
if (skipFwdBtn) skipFwdBtn.addEventListener('click', () => skipGlobal(10));
if (muteBtn) muteBtn.addEventListener('click', toggleMute);
if (volumeSlider) {
    volumeSlider.addEventListener('input', () => setVolume(Number(volumeSlider.value)));
}
if (speedBtn) speedBtn.addEventListener('click', cycleSpeed);
if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

videoContainer.addEventListener('pointermove', showControls);
videoContainer.addEventListener('click', (e) => {
    if (e.target.closest('.custom-controls')) return;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const controlsHidden = !videoContainer.classList.contains('controls-active') && !videoContainer.matches(':hover');
    showControls();
    if (coarse && controlsHidden) return;
    togglePlayPause();
});
videoContainer.addEventListener('dblclick', (e) => {
    if (e.target.closest('.custom-controls')) return;
    toggleFullscreen();
});

if (progressContainer) {
    progressContainer.addEventListener('pointerdown', (e) => {
        isScrubbing = true;
        progressContainer.setPointerCapture(e.pointerId);
        handleScrub(e);
    });
    progressContainer.addEventListener('pointermove', (e) => {
        if (!isScrubbing) return;
        handleScrub(e);
    });
    progressContainer.addEventListener('pointerup', endScrub);
    progressContainer.addEventListener('pointercancel', endScrub);
}

function scrubRatio(event) {
    const rect = progressContainer.getBoundingClientRect();
    if (!rect.width) return 0;
    return Math.max(0, Math.min((event.clientX - rect.left) / rect.width, 1));
}

function handleScrub(event) {
    const pos = scrubRatio(event);
    progressFill.style.width = `${pos * 100}%`;
    progressHandle.style.left = `${pos * 100}%`;
    const total = getTotalDuration();
    if (total > 0 && timeDisplay) {
        timeDisplay.textContent = `${formatTime(pos * total)} / ${formatTime(total)}`;
    }
}

function endScrub(event) {
    if (!isScrubbing) return;
    isScrubbing = false;
    seekGlobal(scrubRatio(event) * getTotalDuration());
}

document.addEventListener('fullscreenchange', () => {
    videoContainer.classList.toggle('is-fullscreen', Boolean(document.fullscreenElement));
    if (fullscreenBtn) {
        fullscreenBtn.textContent = document.fullscreenElement ? '🗗' : '⛶';
    }
});
