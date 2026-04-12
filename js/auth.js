// ============================================
// DHARAVERSE - AUTH SYSTEM
// js/auth.js
// Simple localStorage auth (upgrade to Firebase later)
// ============================================

// ── TAB SWITCH ──
function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('signupForm').classList.add('active');
    }

    hideError();
}

// ── TOGGLE PASSWORD ──
function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.innerHTML = isHidden
        ? '<i class="fas fa-eye-slash"></i>'
        : '<i class="fas fa-eye"></i>';
}

// ── REGION CHANGE ──
function onRegionChange() {
    const region = document.getElementById('signupRegion').value;
    const infoEl = document.getElementById('regionInfo');
    const infoText = document.getElementById('regionInfoText');

    if (region === 'IN') {
        infoText.textContent = 'Payments via Razorpay (UPI, Cards, Net Banking)';
        infoEl.classList.add('show');
    } else if (region) {
        infoText.textContent = 'Payments via PayPal (International Cards)';
        infoEl.classList.add('show');
    } else {
        infoEl.classList.remove('show');
    }
}

// ── ERROR HANDLING ──
function showError(msg) {
    const el = document.getElementById('authError');
    document.getElementById('authErrorText').textContent = msg;
    el.classList.add('show');

    const form = document.querySelector('.auth-form.active');
    if (form) {
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 400);
    }

    setTimeout(() => hideError(), 5000);
}

function hideError() {
    document.getElementById('authError').classList.remove('show');
}

// ── SIGNUP ──
function handleSignup(e) {
    e.preventDefault();

    const name     = document.getElementById('signupName').value.trim();
    const email    = document.getElementById('signupEmail').value.trim().toLowerCase();
    const phone    = document.getElementById('signupPhone').value.trim();
    const region   = document.getElementById('signupRegion').value;
    const password = document.getElementById('signupPassword').value;

    // Validation
    if (!name || name.length < 2) {
        showError('Please enter your full name');
        return;
    }

    if (!email || !email.includes('@')) {
        showError('Please enter a valid email address');
        return;
    }

    if (!phone || phone.length < 8) {
        showError('Please enter a valid phone number');
        return;
    }

    if (!region) {
        showError('Please select your region/country');
        return;
    }

    if (password.length < 6) {
        showError('Password must be at least 6 characters');
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('dv_users') || '{}');
    if (users[email]) {
        showError('This email is already registered. Please sign in.');
        return;
    }

    // Create user
    const userData = {
        name,
        email,
        phone,
        region,
        password: btoa(password),  // base64 encode (NOT secure, just obfuscation)
        plan: 'basic',
        createdAt: new Date().toISOString(),
        isIndia: region === 'IN'
    };

    // Save user
    users[email] = userData;
    localStorage.setItem('dv_users', JSON.stringify(users));

    // Login the user
    loginUser(userData);
}

// ── LOGIN ──
function handleLogin(e) {
    e.preventDefault();

    const email    = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showError('Please enter email and password');
        return;
    }

    // Find user
    const users = JSON.parse(localStorage.getItem('dv_users') || '{}');
    const user  = users[email];

    if (!user) {
        showError('No account found with this email. Please sign up.');
        return;
    }

    if (atob(user.password) !== password) {
        showError('Incorrect password. Please try again.');
        return;
    }

    // Success
    loginUser(user);
}

// ── LOGIN USER ──
function loginUser(user) {
    localStorage.setItem('dv_user', JSON.stringify(user));
    localStorage.setItem('dv_user_name', user.name);
    localStorage.setItem('dv_user_email', user.email);
    localStorage.setItem('dv_user_phone', user.phone);
    localStorage.setItem('dv_user_region', user.region);
    localStorage.setItem('dv_user_loggedin', 'true');
    localStorage.setItem('dv_user_isIndia', user.isIndia ? 'true' : 'false');
    localStorage.setItem('dv_login_time', Date.now().toString());

    // Redirect
    const redirectTo = sessionStorage.getItem('dv_redirect_after_login') || '/pricing.html';
    sessionStorage.removeItem('dv_redirect_after_login');

    // Show success briefly
    const btn = document.querySelector('.auth-form.active .auth-btn');
    btn.innerHTML = '<i class="fas fa-check-circle"></i> Welcome!';
    btn.style.background = 'linear-gradient(135deg,#4CAF50,#2E7D32)';

    setTimeout(() => {
        window.location.href = redirectTo;
    }, 600);
}

// ── CHECK AUTH ──
function requireAuth() {
    const loggedIn = localStorage.getItem('dv_user_loggedin');
    if (loggedIn !== 'true') {
        sessionStorage.setItem('dv_redirect_after_login', window.location.href);
        window.location.href = '/auth.html';
        return false;
    }
    return true;
}

// ── LOGOUT ──
function logoutUser() {
    localStorage.removeItem('dv_user');
    localStorage.removeItem('dv_user_loggedin');
    localStorage.removeItem('dv_login_time');
    window.location.href = '/auth.html';
}

// ── AUTO REDIRECT IF LOGGED IN ──
(function() {
    if (localStorage.getItem('dv_user_loggedin') === 'true') {
        const redirect = sessionStorage.getItem('dv_redirect_after_login');
        if (redirect) {
            sessionStorage.removeItem('dv_redirect_after_login');
            window.location.href = redirect;
        }
    }
})();

// ── EXPORT ──
window.DVAuth = {
    requireAuth,
    logoutUser,
    isLoggedIn: () => localStorage.getItem('dv_user_loggedin') === 'true',
    getUser: () => JSON.parse(localStorage.getItem('dv_user') || 'null'),
    getUserName: () => localStorage.getItem('dv_user_name') || 'Explorer',
    isIndia: () => localStorage.getItem('dv_user_isIndia') === 'true'
};

console.log('🔐 DharaVerse Auth System Ready');
