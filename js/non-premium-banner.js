
// ============================================
// DHARAVERSE - NON-PREMIUM BANNER
// Shows a friendly banner for free users
// Add to every page: <script src="/js/non-premium-banner.js"></script>
// ============================================

// Skip banner for admin
(function() {
    const isAdmin   = localStorage.getItem('dv_admin');
    const loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    const elapsed   = Date.now() - loginTime;
    if (isAdmin === 'true' && elapsed < 24 * 60 * 60 * 1000) {
        console.log('👑 Admin → Banner skipped');
        throw new Error('ADMIN_SKIP');
    }
})();

(function() {
    'use strict';

    const plan = localStorage.getItem('dv_plan') || 'basic';

    // Don't show for Pro and Ultimate (ad-free)
    if (plan === 'pro' || plan === 'ultimate') return;

    // Don't show on admin/auth/pricing/payment pages
    const path = window.location.pathname;
    const skipPages = ['admin', 'auth', 'pricing', 'payment-success', 'payment-failed'];
    if (skipPages.some(p => path.includes(p))) return;

    // Don't show if dismissed recently (6 hours)
    const lastDismissed = parseInt(localStorage.getItem('dv_banner_dismissed') || '0');
    if (Date.now() - lastDismissed < 6 * 60 * 60 * 1000) return;

    // Create banner
    document.addEventListener('DOMContentLoaded', function() {

        // Random encouraging messages
        const messages = [
            "Learn something amazing today! We can only help you grow when you support us 😝",
            "Geography is beautiful — and so is supporting indie creators! 💜",
            "You're exploring for free and that's cool! But imagine having EVERYTHING unlocked 🌍",
            "Did you know? Premium members discover 10x more geography! 🚀",
            "Hey explorer! Ready to unlock the full DharaVerse experience? 💜",
            "Free is great. Premium is LEGENDARY. Just saying! 👑",
            "Your curiosity deserves premium content. Treat yourself! 🎁"
        ];

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        const banner = document.createElement('div');
        banner.id = 'dv-free-banner';
        banner.innerHTML = `
            <div style="
                display:flex;
                align-items:center;
                gap:12px;
                flex-wrap:wrap;
                justify-content:center;
            ">
                <span>${randomMsg}</span>
                <a href="/pricing.html" style="
                    padding:6px 18px;
                    background:rgba(255,255,255,0.15);
                    border:1px solid rgba(255,255,255,0.2);
                    border-radius:8px;
                    color:#fff;
                    text-decoration:none;
                    font-size:12px;
                    font-weight:700;
                    white-space:nowrap;
                ">View Plans 💜</a>
                <button onclick="
                    localStorage.setItem('dv_banner_dismissed', Date.now().toString());
                    document.getElementById('dv-free-banner').remove();
                " style="
                    background:none;
                    border:none;
                    color:rgba(255,255,255,0.5);
                    cursor:pointer;
                    font-size:16px;
                    padding:0 4px;
                ">✕</button>
            </div>
        `;

        Object.assign(banner.style, {
            position: 'fixed',
            bottom: '80px',   // above mobile nav
            left: '16px',
            right: '16px',
            background: 'linear-gradient(135deg, #6441A5, #4A2D7A)',
            color: '#fff',
            padding: '14px 20px',
            borderRadius: '14px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            zIndex: '9990',
            boxShadow: '0 8px 30px rgba(100,65,165,0.4)',
            textAlign: 'center',
            lineHeight: '1.5',
            animation: 'dvBannerSlide 0.4s ease'
        });

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes dvBannerSlide {
                from { transform:translateY(30px); opacity:0; }
                to   { transform:translateY(0); opacity:1; }
            }
        `;
        document.head.appendChild(style);

        // Show after 5 seconds
        setTimeout(() => {
            document.body.appendChild(banner);
        }, 5000);

        // Auto hide after 30 seconds
        setTimeout(() => {
            const el = document.getElementById('dv-free-banner');
            if (el) {
                el.style.animation = 'dvBannerSlide 0.3s ease reverse';
                setTimeout(() => el.remove(), 300);
            }
        }, 35000);
    });

})();
