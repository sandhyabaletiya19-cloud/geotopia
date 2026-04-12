(function() {
    'use strict';

    // Skip for admin
    var isAdmin   = localStorage.getItem('dv_admin');
    var loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    var elapsed   = Date.now() - loginTime;

    if (isAdmin === 'true' && elapsed < 24 * 60 * 60 * 1000) {
        console.log('👑 Admin → Banner skipped');
        return;
    }

    var plan = localStorage.getItem('dv_plan') || 'basic';

    // No banner for Pro and Ultimate
    if (plan === 'pro' || plan === 'ultimate') return;

    // Skip certain pages
    var path = window.location.pathname;
    if (path.indexOf('admin') > -1 ||
        path.indexOf('auth') > -1 ||
        path.indexOf('pricing') > -1 ||
        path.indexOf('payment-success') > -1 ||
        path.indexOf('payment-failed') > -1) return;

    // Don't show if dismissed recently (6 hours)
    var lastDismissed = parseInt(localStorage.getItem('dv_banner_dismissed') || '0');
    if (Date.now() - lastDismissed < 6 * 60 * 60 * 1000) return;

    document.addEventListener('DOMContentLoaded', function() {

        var messages = [
            "Learn something amazing today! We can only help you grow when you support us 😝",
            "Geography is beautiful — and so is supporting indie creators! 💜",
            "Free is great. Premium is LEGENDARY. Just saying! 👑",
            "Your curiosity deserves premium content. Treat yourself! 🎁",
            "Did you know? Premium members discover 10x more geography! 🚀"
        ];

        var randomMsg = messages[Math.floor(Math.random() * messages.length)];

        var banner    = document.createElement('div');
        banner.id     = 'dv-free-banner';
        banner.innerHTML =
            '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center;">' +
                '<span>' + randomMsg + '</span>' +
                '<a href="/pricing.html" style="padding:6px 18px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2);border-radius:8px;color:#fff;text-decoration:none;font-size:12px;font-weight:700;white-space:nowrap;">View Plans 💜</a>' +
                '<button onclick="localStorage.setItem(\'dv_banner_dismissed\',Date.now().toString());document.getElementById(\'dv-free-banner\').remove();" style="background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:16px;">✕</button>' +
            '</div>';

        banner.style.cssText =
            'position:fixed;bottom:80px;left:16px;right:16px;' +
            'background:linear-gradient(135deg,#6441A5,#4A2D7A);' +
            'color:#fff;padding:14px 20px;border-radius:14px;' +
            'font-family:Inter,sans-serif;font-size:13px;font-weight:500;' +
            'z-index:9990;box-shadow:0 8px 30px rgba(100,65,165,0.4);' +
            'text-align:center;line-height:1.5;';

        setTimeout(function() {
            document.body.appendChild(banner);
        }, 5000);

        setTimeout(function() {
            var el = document.getElementById('dv-free-banner');
            if (el) el.remove();
        }, 35000);
    });

})();
