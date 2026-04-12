(function() {
    'use strict';

    // Skip for admin
    var isAdmin   = localStorage.getItem('dv_admin');
    var loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    var elapsed   = Date.now() - loginTime;
    var SESSION   = 24 * 60 * 60 * 1000;

    if (isAdmin === 'true' && elapsed < SESSION) {
        console.log('👑 Admin → Expiry check skipped');
        return;
    }

    // Skip for basic
    var plan = localStorage.getItem('dv_plan');
    if (!plan || plan === 'basic') return;

    var expiryStr = localStorage.getItem('dv_plan_expiry');
    if (!expiryStr) return;

    var expiry   = new Date(expiryStr);
    var now      = new Date();
    var daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

    // Expired
    if (daysLeft <= 0) {
        var expiredPlan = localStorage.getItem('dv_plan');

        localStorage.setItem('dv_plan', 'basic');
        localStorage.removeItem('dv_premium');
        localStorage.removeItem('dv_plan_expiry');
        localStorage.removeItem('dv_plan_period');
        localStorage.removeItem('dv_plan_data');
        localStorage.removeItem('dv_plan_features');

        var path = window.location.pathname;
        if (path.indexOf('admin') > -1 || path.indexOf('auth') > -1) return;

        var lastShown = localStorage.getItem('dv_expired_shown_date');
        var today     = new Date().toDateString();
        if (lastShown === today) return;
        localStorage.setItem('dv_expired_shown_date', today);

        var planNames = {
            games:    '🎮 Games',
            upsc:     '📚 UPSC',
            pro:      '⭐ Pro',
            ultimate: '👑 Ultimate'
        };
        var info = planNames[expiredPlan] || '📋 Your';

        var popup = document.createElement('div');
        popup.innerHTML =
            '<div style="position:fixed;inset:0;background:rgba(10,10,20,0.92);backdrop-filter:blur(10px);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;padding:20px;">' +
                '<div style="max-width:440px;width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:44px 36px;text-align:center;">' +
                    '<div style="font-size:56px;margin-bottom:16px;">😔</div>' +
                    '<h2 style="font-size:24px;font-weight:800;color:#fff;margin-bottom:10px;">Plan Expired</h2>' +
                    '<p style="font-size:15px;color:rgba(255,255,255,0.6);line-height:1.7;margin-bottom:8px;">Your <strong>' + info + ' Plan</strong> has expired.</p>' +
                    '<p style="font-size:14px;color:rgba(255,255,255,0.4);line-height:1.7;margin-bottom:28px;">Renew to get back your premium access!</p>' +
                    '<a href="/pricing.html" style="display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:linear-gradient(135deg,#6441A5,#4A2D7A);color:#fff;text-decoration:none;border-radius:12px;font-size:15px;font-weight:700;">Renew Plan</a>' +
                    '<br><button onclick="this.closest(\'div\').parentElement.parentElement.remove()" style="margin-top:16px;background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;font-size:13px;font-family:Inter,sans-serif;">Continue with Basic →</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(popup);
        return;
    }

    // 7 day warning
    if (daysLeft <= 7) {
        var warnPath = window.location.pathname;
        if (warnPath.indexOf('admin') > -1) return;

        var warnLastShown = localStorage.getItem('dv_expiry_warn_date');
        var warnToday     = new Date().toDateString();
        if (warnLastShown === warnToday) return;
        localStorage.setItem('dv_expiry_warn_date', warnToday);

        var urgency = daysLeft <= 3 ? '#EF4444' : daysLeft <= 5 ? '#F59E0B' : '#6441A5';

        var banner = document.createElement('div');
        banner.id  = 'dv-expiry-banner';
        banner.innerHTML =
            '<div style="position:fixed;top:0;left:0;right:0;background:' + urgency + ';color:#fff;padding:12px 20px;z-index:99999;font-family:Inter,sans-serif;font-size:14px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);">' +
                '<span>⏰ Your plan expires in ' + daysLeft + ' day' + (daysLeft > 1 ? 's' : '') + '!</span>' +
                '<a href="/pricing.html" style="padding:6px 16px;background:rgba(255,255,255,0.2);border-radius:8px;color:#fff;text-decoration:none;font-size:13px;font-weight:700;">Renew Now</a>' +
                '<button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,0.7);cursor:pointer;font-size:18px;">✕</button>' +
            '</div>';
        document.body.prepend(banner);
    }

})();
