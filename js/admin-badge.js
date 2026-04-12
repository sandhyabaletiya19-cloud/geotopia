// ============================================
// DHARAVERSE - ADMIN BADGE
// Add to every page: <script src="/js/admin-badge.js"></script>
// Shows a floating badge when admin is logged in
// ============================================

(function() {
    'use strict';

    const isAdmin   = localStorage.getItem('dv_admin');
    const loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    const SESSION   = 24 * 60 * 60 * 1000;
    const elapsed   = Date.now() - loginTime;

    // Not admin or session expired
    if (isAdmin !== 'true' || elapsed >= SESSION) return;

    // Don't add on admin pages themselves
    if (window.location.pathname.includes('admin')) return;

    document.addEventListener('DOMContentLoaded', function() {

        const badge = document.createElement('div');
        badge.id    = 'dv-admin-badge';

        const plan     = localStorage.getItem('dv_plan') || 'basic';
        const planInfo = {
            basic:   { icon:'🆓', name:'Basic' },
            games:   { icon:'🎮', name:'Games' },
            upsc:    { icon:'📚', name:'UPSC' },
            pro:     { icon:'⭐', name:'Pro' },
            ultimate:{ icon:'👑', name:'Ultimate' }
        };
        const info = planInfo[plan] || planInfo.basic;

        badge.innerHTML = `
            <span style="font-size:11px;opacity:0.7;display:block;margin-bottom:2px;">ADMIN MODE</span>
            <span>Testing: ${info.icon} ${info.name}</span>
            <div style="display:flex;gap:6px;margin-top:8px;">
                <a href="/admin-dashboard.html"
                   style="
                       padding:4px 10px;
                       background:rgba(255,255,255,0.15);
                       border-radius:6px;
                       color:#fff;
                       text-decoration:none;
                       font-size:11px;
                       font-weight:600;
                   ">Panel</a>
                <button onclick="
                       localStorage.removeItem('dv_admin');
                       localStorage.removeItem('dv_admin_time');
                       location.reload();
                   " style="
                       padding:4px 10px;
                       background:rgba(239,68,68,0.3);
                       border:none;
                       border-radius:6px;
                       color:#fff;
                       font-size:11px;
                       font-weight:600;
                       cursor:pointer;
                       font-family:'Inter',sans-serif;
                   ">Logout</button>
            </div>
        `;

        Object.assign(badge.style, {
            position:    'fixed',
            bottom:      '20px',
            left:        '20px',
            zIndex:      '99999',
            background:  'linear-gradient(135deg,#1a1a3e,#12122a)',
            border:      '1px solid rgba(139,92,246,0.4)',
            borderRadius:'14px',
            padding:     '12px 16px',
            color:       '#fff',
            fontFamily:  "'Inter',sans-serif",
            fontSize:    '13px',
            fontWeight:  '700',
            boxShadow:   '0 8px 30px rgba(0,0,0,0.4)',
            lineHeight:  '1.4',
            minWidth:    '160px'
        });

        document.body.appendChild(badge);
    });

})();
