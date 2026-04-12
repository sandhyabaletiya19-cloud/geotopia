// ============================================
// DHARAVERSE - AUTH SYSTEM
// js/auth.js
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
    var input = document.getElementById(inputId);
    var isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.innerHTML = isHidden
        ? '<i class="fas fa-eye-slash"></i>'
        : '<i class="fas fa-eye"></i>';
}

// ── REGION CHANGE ──
function onRegionChange() {
    var region   = document.getElementById('signupRegion').value;
    var infoEl   = document.getElementById('regionInfo');
    var infoText = document.getElementById('regionInfoText');

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
    var el = document.getElementById('authError');
    document.getElementById('authErrorText').textContent = msg;
    el.classList.add('show');

    var form = document.querySelector('.auth-form.active');
    if (form) {
        form.classList.add('shake');
        setTimeout(function() { form.classList.remove('shake'); }, 400);
    }
    setTimeout(function() { hideError(); }, 5000);
}

function hideError() {
    document.getElementById('authError').classList.remove('show');
}

// ── SIGNUP ──
function handleSignup(e) {
    e.preventDefault();

    var name     = document.getElementById('signupName').value.trim();
    var email    = document.getElementById('signupEmail').value.trim().toLowerCase();
    var phone    = document.getElementById('signupPhone').value.trim();
    var region   = document.getElementById('signupRegion').value;
    var password = document.getElementById('signupPassword').value;

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
    var users = {};
    try {
        users = JSON.parse(localStorage.getItem('dv_users') || '{}');
    } catch(e) {
        users = {};
    }

    if (users[email]) {
        showError('This email is already registered. Please sign in.');
        return;
    }

    // Create user
    var userData = {
        name:      name,
        email:     email,
        phone:     phone,
        region:    region,
        password:  btoa(password),
        plan:      'basic',
        createdAt: new Date().toISOString(),
        isIndia:   region === 'IN'
    };

    users[email] = userData;
    localStorage.setItem('dv_users', JSON.stringify(users));

    loginUser(userData);
}

// ── LOGIN ──
function handleLogin(e) {
    e.preventDefault();

    var email    = document.getElementById('loginEmail').value.trim().toLowerCase();
    var password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showError('Please enter email and password');
        return;
    }

    var users = {};
    try {
        users = JSON.parse(localStorage.getItem('dv_users') || '{}');
    } catch(e) {
        users = {};
    }

    var user = users[email];

    if (!user) {
        showError('No account found with this email. Please sign up.');
        return;
    }

    if (atob(user.password) !== password) {
        showError('Incorrect password. Please try again.');
        return;
    }

    loginUser(user);
}

// ── LOGIN USER ──
function loginUser(user) {
    localStorage.setItem('dv_user', JSON.stringify(user));
    localStorage.setItem('dv_user_name', user.name);
    localStorage.setItem('dv_user_email', user.email);
    localStorage.setItem('dv_user_phone', user.phone || '');
    localStorage.setItem('dv_user_region', user.region);
    localStorage.setItem('dv_user_loggedin', 'true');
    localStorage.setItem('dv_user_isIndia', user.isIndia ? 'true' : 'false');
    localStorage.setItem('dv_login_time', Date.now().toString());

    var btn = document.querySelector('.auth-form.active .auth-btn');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Welcome! Redirecting...';
        btn.style.background = 'linear-gradient(135deg,#4CAF50,#2E7D32)';
    }

    var redirectTo     = sessionStorage.getItem('dv_redirect_after_login') || '/pricing.html';
    var selectedPlan   = sessionStorage.getItem('dv_selected_plan');
    var selectedPeriod = sessionStorage.getItem('dv_selected_period') || 'yearly';

    sessionStorage.removeItem('dv_redirect_after_login');

    var finalRedirect = redirectTo;
    if (selectedPlan) {
        finalRedirect = '/pricing.html?autoplan=' + selectedPlan + '&autoperiod=' + selectedPeriod;
        sessionStorage.removeItem('dv_selected_plan');
        sessionStorage.removeItem('dv_selected_period');
    }

    setTimeout(function() {
        window.location.href = finalRedirect;
    }, 800);
}

// ── REQUIRE AUTH ──
function requireAuth() {
    // Admin bypass
    var isAdmin   = localStorage.getItem('dv_admin');
    var loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    var elapsed   = Date.now() - loginTime;
    var SESSION   = 24 * 60 * 60 * 1000;

    if (isAdmin === 'true' && elapsed < SESSION) {
        return true;
    }

    var loggedIn = localStorage.getItem('dv_user_loggedin');
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

// ── AUTO REDIRECT IF ALREADY LOGGED IN ──
(function() {
    if (localStorage.getItem('dv_user_loggedin') === 'true') {
        var redirect = sessionStorage.getItem('dv_redirect_after_login');
        if (redirect) {
            sessionStorage.removeItem('dv_redirect_after_login');
            window.location.href = redirect;
        }
    }
})();

// ── EXPORT ──
window.DVAuth = {
    requireAuth:  requireAuth,
    logoutUser:   logoutUser,
    isLoggedIn:   function() { return localStorage.getItem('dv_user_loggedin') === 'true'; },
    getUser:      function() { try { return JSON.parse(localStorage.getItem('dv_user') || 'null'); } catch(e) { return null; } },
    getUserName:  function() { return localStorage.getItem('dv_user_name') || 'Explorer'; },
    isIndia:      function() { return localStorage.getItem('dv_user_isIndia') === 'true'; }
};

console.log('🔐 DharaVerse Auth System Ready');
