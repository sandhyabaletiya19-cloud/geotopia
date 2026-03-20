// ===================================
// GEOTOPIA ADMIN PANEL LOGIC
// ===================================

// Admin Credentials
const ADMIN_CREDENTIALS = {
    username: 'admin@geotopia',
    password: 'Geo2024@Admin!'
};

// Session Duration (24 hours in milliseconds)
const SESSION_DURATION = 24 * 60 * 60 * 1000;

// ===================================
// LOGIN PAGE LOGIC
// ===================================

if (document.getElementById('adminLoginForm')) {
    const loginForm = document.getElementById('adminLoginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const togglePassword = document.getElementById('togglePassword');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Validate credentials
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            // Store admin session
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('adminLoginTime', Date.now().toString());
            
            // Success animation
            loginForm.style.opacity = '0';
            setTimeout(() => {
                window.location.href = 'admin-dashboard.html';
            }, 300);
        } else {
            // Show error message
            errorMessage.textContent = '❌ Invalid credentials. Please try again.';
            errorMessage.classList.add('show');
            
            // Shake animation
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 400);

            // Hide error after 3 seconds
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    });

    // Auto-fill for demo (REMOVE IN PRODUCTION)
    usernameInput.value = ADMIN_CREDENTIALS.username;
    // passwordInput.value = ADMIN_CREDENTIALS.password; // Uncomment for auto-login
}

// ===================================
// DASHBOARD PAGE LOGIC
// ===================================

if (document.querySelector('.dashboard-body')) {
    
    // Check admin authentication
    function checkAuth() {
        const isAdmin = localStorage.getItem('isAdmin');
        const loginTime = localStorage.getItem('adminLoginTime');

        if (isAdmin !== 'true' || !loginTime) {
            window.location.href = 'admin-login.html';
            return false;
        }

        // Check session expiration
        const currentTime = Date.now();
        const elapsedTime = currentTime - parseInt(loginTime);

        if (elapsedTime > SESSION_DURATION) {
            logout('Session expired. Please login again.');
            return false;
        }

        return true;
    }

    // Logout function
    function logout(message = null) {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminLoginTime');
        
        if (message) {
            alert(message);
        }
        
        window.location.href = 'admin-login.html';
    }

    // Initialize authentication check
    if (!checkAuth()) {
        return;
    }

    // Logout button handlers
    const logoutBtns = document.querySelectorAll('#logoutBtn, #badgeLogout');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    });

    // ===================================
    // ANIMATED COUNTER FOR STATISTICS
    // ===================================

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    // Animate all stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    setTimeout(() => {
        statNumbers.forEach(animateCounter);
    }, 300);

    // ===================================
    // SESSION TIMER
    // ===================================

    function updateSessionTimer() {
        const loginTime = parseInt(localStorage.getItem('adminLoginTime'));
        const currentTime = Date.now();
        const elapsedTime = currentTime - loginTime;
        const remainingTime = SESSION_DURATION - elapsedTime;

        if (remainingTime <= 0) {
            logout('Session expired. Please login again.');
            return;
        }

        const hours = Math.floor(remainingTime / (60 * 60 * 1000));
        const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

        const timerElement = document.getElementById('sessionTimer');
        if (timerElement) {
            timerElement.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    // Update timer every second
    setInterval(updateSessionTimer, 1000);
    updateSessionTimer();

    // ===================================
    // FEATURE TOGGLES
    // ===================================

    const toggles = document.querySelectorAll('.toggle-switch input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const featureName = this.closest('.toggle-item').querySelector('span').textContent;
            const status = this.checked ? 'enabled' : 'disabled';
            
            // Show notification
            showNotification(`${featureName} has been ${status}`);
            
            // Save toggle state
            localStorage.setItem(`toggle_${this.id}`, this.checked);
        });

        // Load saved state
        const savedState = localStorage.getItem(`toggle_${toggle.id}`);
        if (savedState !== null) {
            toggle.checked = savedState === 'true';
        }
    });

    // ===================================
    // DATA EXPORT FUNCTIONS
    // ===================================

    window.exportData = function(type) {
        const data = generateMockData(type);
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `geotopia_${type}_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        showNotification(`✅ ${type.charAt(0).toUpperCase() + type.slice(1)} data exported successfully!`);
    };

    window.clearCache = function() {
        if (confirm('Are you sure you want to clear the cache?')) {
            // Don't clear admin session
            const isAdmin = localStorage.getItem('isAdmin');
            const adminLoginTime = localStorage.getItem('adminLoginTime');
            
            localStorage.clear();
            
            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem('adminLoginTime', adminLoginTime);
            
            showNotification('✅ Cache cleared successfully!');
        }
    };

    window.backupData = function() {
        showNotification('💿 Creating database backup...');
        setTimeout(() => {
            const backup = {
                timestamp: new Date().toISOString(),
                countries: 195,
                users: 12847,
                analytics: generateMockData('analytics')
            };
            
            const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `geotopia_backup_${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
            
            showNotification('✅ Database backup completed!');
        }, 1500);
    };

    // ===================================
    // NOTIFICATION SYSTEM
    // ===================================

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #9b59b6, #bb6bd9);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(155, 89, 182, 0.4);
            z-index: 10000;
            animation: slideInUp 0.4s ease;
            font-weight: 600;
            max-width: 300px;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.4s ease';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 3000);
    }

    // ===================================
    // MOCK DATA GENERATOR
    // ===================================

    function generateMockData(type) {
        const mockData = {
            users: [
                { id: 1, name: 'User 1', email: 'user1@geotopia.com', plan: 'Premium', joined: '2024-01-15' },
                { id: 2, name: 'User 2', email: 'user2@geotopia.com', plan: 'Free', joined: '2024-02-10' },
                { id: 3, name: 'User 3', email: 'user3@geotopia.com', plan: 'Premium', joined: '2024-03-05' }
            ],
            analytics: {
                totalVisits: 45632,
                uniqueUsers: 12847,
                averageSessionDuration: 720,
                mostViewedCountry: 'South Korea',
                peakUsageHour: '18:00-21:00',
                premiumConversionRate: 26.6,
                topFeatures: ['Encyclopedia', 'BTS World', 'Atlas']
            }
        };

        return mockData[type] || mockData;
    }
}

// ===================================
// ADMIN BADGE FOR ALL PAGES
// ===================================

// Add admin badge to any page if admin is logged in
document.addEventListener('DOMContentLoaded', () => {
    const isAdmin = localStorage.getItem('isAdmin');
    
    if (isAdmin === 'true' && !document.querySelector('.admin-badge')) {
        const badge = document.createElement('div');
        badge.className = 'admin-badge';
        badge.id = 'adminBadge';
        badge.innerHTML = `
            <span class="badge-crown">👑</span>
            <span class="badge-text">ADMIN MODE</span>
            <button class="badge-logout" id="badgeLogout">Logout</button>
        `;
        document.body.appendChild(badge);

        // Add logout functionality
        document.getElementById('badgeLogout').addEventListener('click', () => {
            if (confirm('Logout from admin mode?')) {
                localStorage.removeItem('isAdmin');
                localStorage.removeItem('adminLoginTime');
                window.location.reload();
            }
        });
    }
});
