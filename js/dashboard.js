// 💜 DHARAVERSE DASHBOARD & TIME TRACKER
(function() {
    const TARGET_MINUTES = 30;

    function initDashboard() {
        // 1. Load User Info from LocalStorage (set by your auth.js)
        const name = localStorage.getItem('dv_user_name') || 'Explorer';
        const phone = localStorage.getItem('dv_user_phone') || 'No phone linked';
        const plan = localStorage.getItem('dv_plan') || 'basic';
        const expiry = localStorage.getItem('dv_plan_expiry');

        document.getElementById('userName').textContent = name;
        document.getElementById('userPhone').textContent = phone;
        document.getElementById('planBadge').textContent = plan.toUpperCase() + ' PLAN';

        // 2. Calculate Days Left
        if (expiry) {
            const days = Math.ceil((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24));
            document.getElementById('daysLeft').textContent = days > 0 ? days : 'Expired';
        } else {
            document.getElementById('daysLeft').textContent = '∞';
        }

        updateTimeUI();
    }

    function updateTimeUI() {
        // Get time spent today (in seconds)
        const today = new Date().toDateString();
        let totalSeconds = parseInt(localStorage.getItem('dv_time_' + today) || '0');
        
        let minutes = Math.floor(totalSeconds / 60);
        let percent = Math.min(100, Math.floor((minutes / TARGET_MINUTES) * 100));

        // Update UI
        document.getElementById('timeSpent').textContent = minutes + 'm';
        document.getElementById('progressPercent').textContent = percent + '%';
        document.getElementById('progressFill').style.width = percent + '%';

        if (percent >= 100) {
            document.getElementById('rewardBadge').classList.add('active');
            document.getElementById('progressStatus').textContent = "Amazing! You've earned your 30min reward! 🏆";
        }
    }

    // 🕒 GLOBAL TIME TRACKER (Runs on every page where this script is included)
    function startTracking() {
        const today = new Date().toDateString();
        
        setInterval(() => {
            let totalSeconds = parseInt(localStorage.getItem('dv_time_' + today) || '0');
            totalSeconds += 5; // Add 5 seconds
            localStorage.setItem('dv_time_' + today, totalSeconds);
            
            // If we are on the dashboard page, update UI live
            if (document.getElementById('timeSpent')) {
                updateTimeUI();
            }
        }, 5000); 
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.getElementById('userName')) initDashboard();
            startTracking();
        });
    } else {
        if (document.getElementById('userName')) initDashboard();
        startTracking();
    }
})();
