// Immediately lock the page to prevent flashing
document.documentElement.classList.add('locked');

document.addEventListener('DOMContentLoaded', () => {
    // Determine today's password: YYYY-MM-DD-enjoy
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const PASSWORD = `${y}-${m}-${d}-hema`;

    // Inject overlay HTML if not already there
    if (!document.getElementById('loginOverlay')) {
        const overlayHtml = `
            <div id="loginOverlay">
                <div class="login-card">
                    <h2>Protected Access</h2>
                    <p>Enter password</p>
                    <input type="password" id="loginPassword" placeholder="Enter the password" autocomplete="off" />
                    <div id="loginError"></div>
                    <button id="loginBtn">Unlock</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', overlayHtml);
    }

    const overlay = document.getElementById('loginOverlay');
    const pwInput = document.getElementById('loginPassword');
    const errDiv = document.getElementById('loginError');
    const btn = document.getElementById('loginBtn');

    // Focus input on load
    setTimeout(() => {
        if (pwInput) pwInput.focus();
    }, 50);

    function tryUnlock() {
        if (pwInput.value === PASSWORD) {
            overlay.classList.add('hidden');
            document.documentElement.classList.remove('locked');
            errDiv.textContent = '';
        } else {
            errDiv.textContent = 'Incorrect password. Try again.';
            pwInput.value = '';
            pwInput.focus();
        }
    }

    if (btn && pwInput) {
        btn.addEventListener('click', tryUnlock);
        pwInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') tryUnlock();
        });
    }
});
