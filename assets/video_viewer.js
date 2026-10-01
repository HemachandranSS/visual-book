let currentVideoIndex = 1;
let totalVideos = 0; // We might not know total ahead of time, we dynamically probe
let videoFolderPath = '';
let scale = 1.0;
let hasZoomed = false;
let zoomAnchor = null;

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
let activePlayer = 1;
const subtitle = document.getElementById('subtitle');
const folderBadge = document.getElementById('folderBadge');
const header = document.querySelector('.header');
const topRevealZone = document.getElementById('topRevealZone');
const mobilePrevBtn = document.getElementById('mobilePrevBtn');
const mobileNextBtn = document.getElementById('mobileNextBtn');

const params = new URLSearchParams(window.location.search);
const folderParam = normalizeFolder(params.get('folder'));
let headerHideTimer = null;
let headerPinned = false;

prevBtn.addEventListener('click', showPrevVideo);
nextBtn.addEventListener('click', showNextVideo);
zoomInBtn.addEventListener('click', zoomIn);
zoomOutBtn.addEventListener('click', zoomOut);
mobilePrevBtn.addEventListener('click', showPrevVideo);
mobileNextBtn.addEventListener('click', showNextVideo);

// ── Touch helpers ──────────────────────────────────────────────────────
const getTouchDistance = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
const getTouchCenter = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

// ── Mobile arrow show-on-tap (mobile only — touch events only) ─────────
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


// ── Smooth pinch-to-zoom state ──────────────────────────────────────
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
        const dist = getTouchDistance(e.touches[0], e.touches[1]);
        const ratio = Math.min(Math.max(dist / pinchStartDist, 0.5 / pinchStartScale), 3.0 / pinchStartScale);
        pinchLiveRatio = ratio;
        zoomContainer.style.transform = `scale(${ratio})`;
    }
}, { passive: false });

mainContent.addEventListener('touchend', (e) => {
    if (pinchStartDist !== null && e.touches.length < 2) {
        zoomContainer.style.transform = '';
        const newScale = Math.min(Math.max(pinchStartScale * pinchLiveRatio, 0.5), 3.0);
        if (Math.abs(newScale - scale) > 0.01) {
            scale = newScale;
            hasZoomed = true;
            mainContent.classList.add('zoomed-state');
            applyZoom();
        }
        pinchStartDist = null;
        pinchStartScale = null;
        pinchLiveRatio = 1;
    }
}, { passive: true });

mainContent.addEventListener('touchcancel', () => {
    zoomContainer.style.transform = '';
    pinchStartDist = null;
    pinchStartScale = null;
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

['mousemove', 'pointermove'].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
        if (event.clientY <= 10) {
            unpinHeader();
        } else {
            if (!header.matches(':hover') && !topRevealZone.matches(':hover')) {
                header.classList.add('is-hidden');
            }
        }
    }, { passive: true });
});

header.addEventListener('mouseenter', pinHeader);
header.addEventListener('mouseleave', unpinHeader);
topRevealZone.addEventListener('mouseenter', unpinHeader);
topRevealZone.addEventListener('mouseleave', () => {
    if (!header.matches(':hover')) {
        header.classList.add('is-hidden');
    }
});
header.classList.add('is-hidden');
clearTimeout(headerHideTimer);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!folderParam) return;

    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            skipGlobal(-10);
            break;
        case 'ArrowRight':
            e.preventDefault();
            skipGlobal(10);
            break;
        case ' ':
            e.preventDefault();
            togglePlayPause();
            break;
        case '+':
        case '=':
            e.preventDefault();
            zoomIn();
            break;
        case '-':
            e.preventDefault();
            zoomOut();
            break;
    }
});

function togglePlayPause() {
    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    if (active.paused) active.play();
    else active.pause();
}

let videoMetadata = null;
let globalTime = 0;
let isScrubbing = false;

// Initialization
if (folderParam) {
    videoFolderPath = folderParam;
    subtitle.textContent = `Streaming videos from: ${titleize(folderParam)}`;
    folderBadge.style.display = 'inline-flex';
    folderBadge.textContent = titleize(folderParam.split('/').filter(Boolean).pop() || folderParam);

    // Try to load metadata
    fetch(new URL(`${folderParam}/metadata.json`, window.location.origin + '/'))
        .then(res => res.json())
        .then(data => {
            videoMetadata = data;
            totalVideos = data.chunks.length;
            updatePageInfo();
            loadVideo(1);
        })
        .catch(e => {
            // Fallback without global timeline
            countVideosInBackground();
            loadVideo(1);
        });
}

function showLoading() {
    welcomeMessage.style.display = 'none';
    loadingMessage.style.display = 'block';
    videoContainer.style.display = 'none';
    mainContent.classList.add('loading-state');
    updateNavigationButtons();
}

function hideLoading() {
    welcomeMessage.style.display = 'none';
    loadingMessage.style.display = 'none';
    videoContainer.style.display = 'flex';
    mainContent.classList.remove('loading-state');
}

function countVideosInBackground() {
    let checkIndex = 1;
    const checkNext = async () => {
        try {
            const url = new URL(`${videoFolderPath}/${checkIndex}.mp4`, window.location.origin + '/').toString();
            const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
            if (response.ok) {
                totalVideos = checkIndex;
                updatePageInfo();
                updateNavigationButtons();
                checkIndex++;
                checkNext();
            } else {
                updatePageInfo();
                updateNavigationButtons();
            }
        } catch (e) {
            updatePageInfo();
            updateNavigationButtons();
        }
    };
    checkNext();
}

// Setup global ended listeners mapped to seamless swap
videoPlayer1.onended = playSeamlessNext;
videoPlayer2.onended = playSeamlessNext;
videoPlayer1.onerror = handleVideoError;
videoPlayer2.onerror = handleVideoError;

// Pre-start the next chunk slightly before the current one ends for ultra-smooth transitions
let preStartTriggered = false;
function monitorForPreStart(e) {
    const player = e.target;
    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    if (player !== active) return;
    if (preStartTriggered) return;
    if (!player.duration || isNaN(player.duration)) return;

    const timeLeft = player.duration - player.currentTime;
    if (timeLeft <= 0.4 && timeLeft > 0) {
        preStartTriggered = true;
        const inactive = activePlayer === 1 ? videoPlayer2 : videoPlayer1;
        if (inactive.readyState >= 2) {
            inactive.currentTime = 0;
            inactive.play().catch(() => { });
            // Mute the inactive player initially to avoid audio overlap
            inactive.muted = true;
        }
    }
}
videoPlayer1.addEventListener('timeupdate', monitorForPreStart);
videoPlayer2.addEventListener('timeupdate', monitorForPreStart);

function handleVideoError(e) {
    if (e.target.src && e.target.src !== window.location.href) {
        console.warn('Silent preload error or playback error for', e.target.src);
    }
}

function loadVideo(index, seekTime) {
    if (!videoFolderPath) return;
    showLoading();
    currentVideoIndex = index;
    updatePageInfo();

    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    const inactive = activePlayer === 1 ? videoPlayer2 : videoPlayer1;

    inactive.style.opacity = '0';
    inactive.style.pointerEvents = 'none';
    inactive.pause();

    active.style.opacity = '1';
    active.style.pointerEvents = 'auto';

    active.src = new URL(`${videoFolderPath}/${currentVideoIndex}.mp4`, window.location.origin + '/').toString();
    preStartTriggered = false;

    const handleLoadedData = () => {
        hideLoading();
        updateNavigationButtons();
        if (typeof seekTime === 'number' && seekTime > 0) {
            active.currentTime = seekTime;
        }
        active.muted = isMuted;
        active.play().catch(e => console.log('Autoplay prevented:', e));
        active.removeEventListener('loadeddata', handleLoadedData);
        preloadNext();
    };
    active.addEventListener('loadeddata', handleLoadedData);

    const handleError = (e) => {
        console.error('Error loading video', e);
        active.removeEventListener('error', handleError);
        if (currentVideoIndex > 1) {
            totalVideos = currentVideoIndex - 1;
            currentVideoIndex = totalVideos;
            updatePageInfo();
            updateNavigationButtons();
            hideLoading();
        } else {
            alert('Could not load the first video from this folder.');
            hideLoading();
            welcomeMessage.style.display = 'block';
            videoContainer.style.display = 'none';
        }
    };
    active.addEventListener('error', handleError);
}

function preloadNext() {
    const nextIndex = currentVideoIndex + 1;
    if (totalVideos > 0 && nextIndex > totalVideos) return;

    const inactive = activePlayer === 1 ? videoPlayer2 : videoPlayer1;
    inactive.src = new URL(`${videoFolderPath}/${nextIndex}.mp4`, window.location.origin + '/').toString();
    inactive.load(); // triggers caching
}

function playSeamlessNext() {
    // If we're at the last chunk, stop
    if (totalVideos > 0 && currentVideoIndex >= totalVideos) return;

    const inactive = activePlayer === 1 ? videoPlayer2 : videoPlayer1;

    // Check if next chunk is ready
    if (!inactive.src || inactive.readyState < 2) {
        // Fallback to normal loading if it didn't preload in time
        loadVideo(currentVideoIndex + 1);
        return;
    }

    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;

    // Instant swap
    active.style.opacity = '0';
    active.style.pointerEvents = 'none';
    active.pause();

    inactive.style.opacity = '1';
    inactive.style.pointerEvents = 'auto';
    inactive.muted = isMuted; // restore proper mute state
    inactive.currentTime = 0;
    inactive.play().catch(e => console.log('Autoplay prevented:', e));

    activePlayer = activePlayer === 1 ? 2 : 1;
    currentVideoIndex++;
    preStartTriggered = false;
    updatePageInfo();
    updateNavigationButtons();

    preloadNext(); // queue the one after this
}

// ── Global seek / skip logic ─────────────────────────────────────────
function getGlobalTime() {
    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    if (videoMetadata) {
        const chunkInfo = videoMetadata.chunks.find(c => c.index === currentVideoIndex);
        if (chunkInfo) return chunkInfo.start_time + active.currentTime;
    }
    return active.currentTime;
}

function getTotalDuration() {
    if (videoMetadata) return videoMetadata.total_duration;
    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    return active.duration || 0;
}

function seekGlobal(targetTime) {
    targetTime = Math.max(0, Math.min(targetTime, getTotalDuration()));

    if (videoMetadata) {
        let targetChunk = videoMetadata.chunks[videoMetadata.chunks.length - 1];
        for (const chunk of videoMetadata.chunks) {
            if (targetTime >= chunk.start_time && targetTime < chunk.start_time + chunk.duration) {
                targetChunk = chunk;
                break;
            }
        }
        if (targetChunk) {
            const localTime = targetTime - targetChunk.start_time;
            if (targetChunk.index === currentVideoIndex) {
                const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
                active.currentTime = localTime;
                if (active.paused) active.play();
            } else {
                loadVideo(targetChunk.index, localTime);
            }
        }
    } else {
        const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
        if (active.duration) {
            active.currentTime = Math.min(targetTime, active.duration);
            if (active.paused) active.play();
        }
    }
}

function skipGlobal(delta) {
    const current = getGlobalTime();
    seekGlobal(current + delta);
}

function showPrevVideo() {
    if (currentVideoIndex > 1) {
        loadVideo(currentVideoIndex - 1);
    }
}

function showNextVideo() {
    // If we have totalVideos, check it. Otherwise just attempt to load next.
    if (totalVideos === 0 || currentVideoIndex < totalVideos) {
        loadVideo(currentVideoIndex + 1);
    }
}


function zoomIn(preserveAnchor = false) {
    if (!preserveAnchor) {
        captureZoomAnchor();
    }
    scale = Math.min(scale * mobileZoomFactor, 3);
    hasZoomed = true;
    mainContent.classList.add('zoomed-state');
    applyZoom();
}

function zoomOut(preserveAnchor = false) {
    if (!preserveAnchor) {
        captureZoomAnchor();
    }
    scale = Math.max(scale / mobileZoomFactor, 0.5);
    hasZoomed = true;
    mainContent.classList.add('zoomed-state');
    applyZoom();
}

function applyZoom() {
    zoomContainer.style.transform = `scale(${scale})`;
    settleViewportAfterRender();
}

function updatePageInfo() {
    if (videoFolderPath) {
        pageInfo.textContent = totalVideos > 0
            ? `Video ${currentVideoIndex} of ${totalVideos}`
            : `Video ${currentVideoIndex}`;
    } else {
        pageInfo.textContent = '-';
    }
}

function updateNavigationButtons() {
    const hasFolder = !!videoFolderPath;
    const isLoading = loadingMessage.style.display === 'block';

    if (isLoading) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        mobilePrevBtn.disabled = true;
        mobileNextBtn.disabled = true;
        return;
    }

    const atFirst = !hasFolder || currentVideoIndex <= 1;
    const atLast = !hasFolder || (totalVideos > 0 && currentVideoIndex >= totalVideos);

    prevBtn.disabled = atFirst;
    nextBtn.disabled = atLast;
    mobilePrevBtn.disabled = atFirst;
    mobileNextBtn.disabled = atLast;
}

function updateViewportFitMode() {
    requestAnimationFrame(() => {
        const fitsHorizontally = mainContent.scrollWidth <= mainContent.clientWidth;
        const fitsVertically = mainContent.scrollHeight <= mainContent.clientHeight;
        mainContent.classList.toggle('centered-state', fitsHorizontally && fitsVertically);
        mainContent.classList.toggle('zoomed-state', !(fitsHorizontally && fitsVertically));

        if (fitsHorizontally) {
            mainContent.scrollLeft = 0;
        }
        if (fitsVertically) {
            mainContent.scrollTop = 0;
        }
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
    return raw.replace(/\/+$/, '');
}

// ── Custom UI Logic ──────────────────────────────────────────────────
const playPauseBtn = document.getElementById('playPauseBtn');
const progressContainer = document.getElementById('progressContainer');
const progressFill = document.getElementById('progressFill');
const progressHandle = document.getElementById('progressHandle');
const timeDisplay = document.getElementById('timeDisplay');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const skipBackBtn = document.getElementById('skipBackBtn');
const skipFwdBtn = document.getElementById('skipFwdBtn');
const muteBtn = document.getElementById('muteBtn');
let isMuted = false;

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateProgress() {
    if (!isScrubbing) {
        const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
        const total = getTotalDuration();
        const current = getGlobalTime();
        const percent = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;
        if (progressFill && progressHandle && timeDisplay) {
            progressFill.style.width = `${percent}%`;
            progressHandle.style.left = `${percent}%`;
            timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
        }
    }
    requestAnimationFrame(updateProgress);
}
requestAnimationFrame(updateProgress);

function syncControls() {
    const active = activePlayer === 1 ? videoPlayer1 : videoPlayer2;
    if (playPauseBtn) playPauseBtn.textContent = active.paused ? '▶' : '⏸';
}
videoPlayer1.addEventListener('play', syncControls);
videoPlayer1.addEventListener('pause', syncControls);
videoPlayer2.addEventListener('play', syncControls);
videoPlayer2.addEventListener('pause', syncControls);

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
}

if (skipBackBtn) {
    skipBackBtn.addEventListener('click', () => skipGlobal(-10));
}

if (skipFwdBtn) {
    skipFwdBtn.addEventListener('click', () => skipGlobal(10));
}

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        videoPlayer1.muted = isMuted;
        videoPlayer2.muted = isMuted;
        muteBtn.textContent = isMuted ? '🔇' : '🔊';
    });
}

// Show controls on click/tap on the video container
videoContainer.addEventListener('click', (e) => {
    // Don't toggle if clicking on controls themselves
    if (e.target.closest('.custom-controls')) return;
    videoContainer.classList.toggle('controls-active');
    // Auto-hide after 3s
    clearTimeout(videoContainer._hideTimer);
    videoContainer._hideTimer = setTimeout(() => {
        videoContainer.classList.remove('controls-active');
    }, 3000);
});

if (progressContainer) {
    progressContainer.addEventListener('pointerdown', (e) => {
        isScrubbing = true;
        handleScrub(e);
        document.addEventListener('pointermove', handleScrub);
        document.addEventListener('pointerup', endScrub);
    });
}

function handleScrub(e) {
    const rect = progressContainer.getBoundingClientRect();
    let pos = (e.clientX - rect.left) / rect.width;
    pos = Math.max(0, Math.min(pos, 1));
    progressFill.style.width = `${pos * 100}%`;
    progressHandle.style.left = `${pos * 100}%`;

    const total = getTotalDuration();
    if (total > 0) {
        globalTime = pos * total;
        timeDisplay.textContent = `${formatTime(globalTime)} / ${formatTime(total)}`;
    }
}

function endScrub(e) {
    isScrubbing = false;
    document.removeEventListener('pointermove', handleScrub);
    document.removeEventListener('pointerup', endScrub);

    const rect = progressContainer.getBoundingClientRect();
    let pos = (e.clientX - rect.left) / rect.width;
    pos = Math.max(0, Math.min(pos, 1));

    const total = getTotalDuration();
    seekGlobal(pos * total);
}

if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen().catch(err => console.error(err));
        } else {
            document.exitFullscreen();
        }
    });
}
