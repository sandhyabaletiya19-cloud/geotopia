// Skip expiry check for admin
(function() {
    const isAdmin   = localStorage.getItem('dv_admin');
    const loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    const elapsed   = Date.now() - loginTime;
    const SESSION   = 24 * 60 * 60 * 1000;

    if (isAdmin === 'true' && elapsed < SESSION) {
        console.log('👑 Admin → Expiry check skipped');
        // Stop this entire script
        throw new Error('ADMIN_SKIP');
    }
})();


// ============================================
// DHARAVERSE - SUBSCRIPTION EXPIRY CHECKER
// Add to every page: <script src="/js/expiry-check.js"></script>
// Checks if subscription expired or expiring soon
// ============================================

(function() {
    'use strict';

    const plan = localStorage.getItem('dv_plan');
    if (!plan || plan === 'basic') return; // Free users, skip

    const expiryStr = localStorage.getItem('dv_plan_expiry');
    if (!expiryStr) return;

    const expiry    = new Date(expiryStr);
    const now       = new Date();
    const daysLeft  = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

    // ── EXPIRED ──
    if (daysLeft <= 0) {
        handleExpired();
        return;
    }

    // ── 7 DAY WARNING ──
    if (daysLeft <= 7) {
        showExpiryWarning(daysLeft);
    }

    // ── EXPIRED: Reset to Basic ──
    function handleExpired() {
        // Save expiry info before reset
        const expiredPlan = localStorage.getItem('dv_plan');
        const planData    = localStorage.getItem('dv_plan_data');

        // Reset to basic
        localStorage.setItem('dv_plan', 'basic');
        localStorage.removeItem('dv_premium');
        localStorage.removeItem('dv_plan_expiry');
        localStorage.removeItem('dv_plan_period');
        localStorage.removeItem('dv_plan_data');
        localStorage.removeItem('dv_plan_features');

        // Show expired popup
        showExpiredPopup(expiredPlan);
    }

    // ── EXPIRY WARNING BANNER ──
    function showExpiryWarning(days) {
        // Don't show on admin pages
        if (window.location.pathname.includes('admin')) return;

        // Already shown today?
        const lastShown = localStorage.getItem('dv_expiry_warn_date');
        const today = new Date().toDateString();
        if (lastShown === today) return;

        localStorage.setItem('dv_expiry_warn_date', today);

        const planInfo = {
            games:   { icon:'🎮', name:'Games' },
            upsc:    { icon:'📚', name:'UPSC' },
            pro:     { icon:'⭐', name:'Pro' },
            ultimate:{ icon:'👑', name:'Ultimate' }
        };

        const info = planInfo[plan] || { icon:'📋', name:'Plan' };
        const urgency = days <= 3 ? '#EF4444' : days <= 5 ? '#F59E0B' : '#6441A5';

        const banner = document.createElement('div');
        banner.id = 'dv-expiry-banner';
        banner.innerHTML = `
            <div style="
                position:fixed;
                top:0; left:0; right:0;
                background:${urgency};
                color:#fff;
                padding:12px 20px;
                z-index:99999;
                font-family:'Inter',sans-serif;
                font-size:14px;
                font-weight:600;
                display:flex;
                align-items:center;
                justify-content:center;
                gap:12px;
                box-shadow:0 4px 20px rgba(0,0,0,0.3);
            ">
                <span>⏰ Your ${info.icon} ${info.name} plan expires in ${days} day${days > 1 ? 's' : ''}!</span>
                <a href="/pricing.html" style="
                    padding:6px 16px;
                    background:rgba(255,255,255,0.2);
                    border-radius:8px;
                    color:#fff;
                    text-decoration:none;
                    font-size:13px;
                    font-weight:700;
                ">Renew Now</a>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background:none;
                    border:none;
                    color:rgba(255,255,255,0.7);
                    cursor:pointer;
                    font-size:18px;
                    padding:0 4px;
                ">✕</button>
            </div>
        `;

        document.body.prepend(banner);

        // Push body content down
        document.body.style.paddingTop = '48px';
    }

    // ── EXPIRED POPUP ──
    function showExpiredPopup(expiredPlan) {
        // Don't show on admin/auth pages
        if (window.location.pathname.includes('admin')) return;
        if (window.location.pathname.includes('auth')) return;

        // Already shown today?
        const lastShown = localStorage.getItem('dv_expired_shown_date');
        const today = new Date().toDateString();
        if (lastShown === today) return;

        localStorage.setItem('dv_expired_shown_date', today);

        const planInfo = {
            games:   { icon:'🎮', name:'Games' },
            upsc:    { icon:'📚', name:'UPSC' },
            pro:     { icon:'⭐', name:'Pro' },
            ultimate:{ icon:'👑', name:'Ultimate' }
        };

        const info = planInfo[expiredPlan] || { icon:'📋', name:'Your' };

        const popup = document.createElement('div');
        popup.innerHTML = `
            <div style="
                position:fixed;
                inset:0;
                background:rgba(10,10,20,0.92);
                backdrop-filter:blur(10px);
                z-index:99999;
                display:flex;
                align-items:center;
                justify-content:center;
                font-family:'Inter',sans-serif;
                padding:20px;
            ">
                <div style="
                    max-width:440px;
                    width:100%;
                    background:rgba(255,255,255,0.05);
                    border:1px solid rgba(255,255,255,0.1);
                    border-radius:24px;
                    padding:44px 36px;
                    text-align:center;
                ">
                    <div style="font-size:56px;margin-bottom:16px;">😔</div>
                    <h2 style="font-size:24px;font-weight:800;color:#fff;margin-bottom:10px;">
                        Plan Expired
                    </h2>
                    <p style="font-size:15px;color:rgba(255,255,255,0.6);line-height:1.7;margin-bottom:8px;">
                        Your ${info.icon} <strong>${info.name} Plan</strong> has expired.
                    </p>
                    <p style="font-size:14px;color:rgba(255,255,255,0.4);line-height:1.7;margin-bottom:28px;">
                        You're now on the Basic (free) plan. Renew to get back your premium access!
                    </p>
                    <a href="/pricing.html" style="
                        display:inline-flex;
                        align-items:center;
                        gap:8px;
                        padding:14px 32px;
                        background:linear-gradient(135deg,#6441A5,#4A2D7A);
                        color:#fff;
                        text-decoration:none;
                        border-radius:12px;
                        font-size:15px;
                        font-weight:700;
                        box-shadow:0 8px 30px rgba(100,65,165,0.4);
                    ">
                        <i class="fas fa-crown"></i> Renew Plan
                    </a>
                    <br>
                    <button onclick="this.closest('[style]').parentElement.remove()" style="
                        margin-top:16px;
                        background:none;
                        border:none;
                        color:rgba(255,255,255,0.4);
                        cursor:pointer;
                        font-size:13px;
                        font-family:'Inter',sans-serif;
                    ">Continue with Basic →</button>
                </div>
            </div>
        `;

        document.body.appendChild(popup);
    }

})();
