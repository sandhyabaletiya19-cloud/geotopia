// /js/premium-wrapper.js
// ============================================
// DHARAVERSE.COM - SMART LOCK SYSTEM v4.0
// Card-level + Page-level locking
// www.dharaverse.com
// ============================================

(function () {
    'use strict';

    // ==========================================
    // CONFIGURATION
    // ==========================================

    const CONFIG = {
        // How many cards are FREE on each listing page
        freeCards: {
            mountains: 7,
            rivers: 7,
            lakes: 7,
            oceans: 7,
            seas: 7,
            islands: 7,
            volcanoes: 7,
            deserts: 7,
            forests: 7,
            'coral-reefs': 7,
            games: 3,
            upsc: 3,
        },

        // Default free cards if section not listed above
        defaultFreeCards: 7,

        // Price display
        price: '₹299',
        originalPrice: '₹999',
        period: '/year',
    };

    // ==========================================
    // BTS MESSAGES
    // ==========================================

    const BTS_MESSAGES = [
        { title: "Keep Swimming! 🌊", subtitle: "The ocean of knowledge awaits 💜" },
        { title: "Dream, Believe, Achieve! ✨", subtitle: "Unlock your potential 💜" },
        { title: "Purple You! 보라해 💜", subtitle: "We believe in your dreams" },
        { title: "Magic Shop Awaits! ✨", subtitle: "Unlock all wonders 💜" },
        { title: "Beyond The Scene! 🌟", subtitle: "Go beyond with premium 💜" },
        { title: "You Are The Best! 🌸", subtitle: "Best comes with premium 💜" },
        { title: "Life Goes On! 🌿", subtitle: "Keep exploring, go premium 💜" },
        { title: "Dynamite! 💥", subtitle: "Explode into full knowledge 💜" },
        { title: "Butter! 🧈", subtitle: "Smooth access to everything 💜" },
        { title: "Run BTS! 🏃", subtitle: "Run towards all knowledge 💜" }
    ];

    function getRandomBTS() {
        return BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];
    }

    // ==========================================
    // PAGE-LEVEL: Which pages are FULLY FREE
    // ==========================================

    const FREE_PAGES = [
        '/', '/index.html', '/geotopia.html',
        '/auth.html', '/pricing.html', '/contact.html',
        '/payment-success.html', '/payment-failed.html',
        '/dashboard.html', '/admin-login.html', '/admin-dashboard.html',
        '/disable-sw.html', '/test.html',
        '/legal/privacy-policy.html',
        '/legal/terms-and-conditions.html',
        '/africa.html', '/asia.html', '/europe.html',
        '/australia.html', '/north-america.html',
        '/south-america.html', '/antarctica.html',
        '/atlas/atlas.html', '/atlas.html',
        '/kids-zone.html', '/junior-zone.html', '/teen-zone.html',
        '/spin-globe.html', '/mystery.html',
        '/timeline/index.html', '/timeline.html',
        '/timeline-part1.html', '/timeline-part2.html', '/timeline-part3.html',
        '/mountains/mountains.html',
        '/rivers/rivers.html',
        '/lakes/lakes.html',
        '/oceans/oceans.html',
        '/oceans/seas.html',
        '/islands/islands.html',
        '/volcanoes/volcanoes.html',
        '/deserts/deserts.html',
        '/forests/forests.html',
        '/coral-reefs/coral-reefs.html',
        '/games/games.html', '/games.html',
        '/upsc/upsc.html',
        '/encyclopedia/encyclopedia.html',
        '/encyclopedia/bharat/index.html',
        '/encyclopedia/biogeography/index.html',
        '/encyclopedia/climate/index.html',
        '/encyclopedia/dictionary/index.html',
        '/encyclopedia/environment-geography/environment-geography.html',
        '/encyclopedia/geology/index.html',
        '/encyclopedia/historical-geography/historical-geo.html',
        '/encyclopedia/human-geography/index.html',
        '/encyclopedia/hydrology/hydrology.html',
        '/encyclopedia/map-science/index.html',
        '/encyclopedia/organizations/index.html',
        '/encyclopedia/physical-geography/index.html',
        '/encyclopedia/space-geography/index.html',
        '/encyclopedia/space-geography/celestial-effects.html',
        '/encyclopedia/strategic-locations/index.html',
        '/encyclopedia/strategic-locations/straits/gibraltar.html',
        '/encyclopedia/bts.html',
        '/encyclopedia/earth-simulator.html',
    ];

    const CARD_LOCK_PAGES = [
        '/mountains/mountains.html',
        '/rivers/rivers.html',
        '/lakes/lakes.html',
        '/oceans/oceans.html',
        '/oceans/seas.html',
        '/islands/islands.html',
        '/volcanoes/volcanoes.html',
        '/deserts/deserts.html',
        '/forests/forests.html',
        '/coral-reefs/coral-reefs.html',
        '/games/games.html',
        '/games.html',
        '/upsc/upsc.html',
    ];

    // ==========================================
    // HELPERS
    // ==========================================

    function getPath() {
        let p = window.location.pathname.toLowerCase();
        if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
        return p;
    }

    function isFreePage(path) {
        for (let i = 0; i < FREE_PAGES.length; i++) {
            const fp = FREE_PAGES[i].toLowerCase();
            if (path === fp || path.endsWith(fp)) return true;
        }
        if (path === '' || path === '/') return true;
        return false;
    }

    function isCardLockPage(path) {
        for (let i = 0; i < CARD_LOCK_PAGES.length; i++) {
            const cp = CARD_LOCK_PAGES[i].toLowerCase();
            if (path === cp || path.endsWith(cp)) return true;
        }
        return false;
    }

    function getSectionName(path) {
        const parts = path.split('/').filter(Boolean);
        for (let key of Object.keys(CONFIG.freeCards)) {
            if (path.includes('/' + key)) return key;
        }
        if (parts.length > 0) return parts[0];
        return 'default';
    }

    function getFreeCardCount(section) {
        return CONFIG.freeCards[section] || CONFIG.defaultFreeCards;
    }

    function isPremiumUser() {
        try {
            const pd = localStorage.getItem('dharaverse_premium');
            if (pd) {
                const d = JSON.parse(pd);
                if (d && d.isPremium === true) {
                    if (d.expiryDate) {
                        if (new Date(d.expiryDate) > new Date()) return true;
                        localStorage.removeItem('dharaverse_premium');
                        return false;
                    }
                    return true;
                }
            }

            const ad = localStorage.getItem('dharaverse_admin');
            if (ad) {
                const a = JSON.parse(ad);
                if (a && a.isAdmin === true) return true;
            }

            const sp = sessionStorage.getItem('dharaverse_premium');
            if (sp) {
                const s = JSON.parse(sp);
                if (s && s.isPremium === true) return true;
            }

            const au = localStorage.getItem('dharaverse_user');
            if (au) {
                const u = JSON.parse(au);
                if (u && (u.premium === true || u.isPremium === true ||
                    u.role === 'premium' || u.role === 'admin' ||
                    u.plan === 'premium' || u.plan === 'annual' || u.plan === 'lifetime'))
                    return true;
            }

            const sbKey = Object.keys(localStorage).find(k =>
                k.startsWith('sb-') && k.endsWith('-auth-token'));
            if (sbKey) {
                const sb = JSON.parse(localStorage.getItem(sbKey));
                if (sb?.user?.user_metadata?.premium === true ||
                    sb?.user?.user_metadata?.isPremium === true) return true;
            }

            return false;
        } catch (e) {
            return false;
        }
    }

    // ==========================================
    // INJECT STYLES (BTS Purple Gift-Wrap Theme)
    // ==========================================

    function injectStyles() {
        if (document.getElementById('dv-lock-styles')) return;
        const s = document.createElement('style');
        s.id = 'dv-lock-styles';
        s.textContent = `

/* ── BTS PURPLE PALETTE ── */
:root {
    --bts-deep: #2e0249;
    --bts-purple: #570a57;
    --bts-violet: #7b2d8e;
    --bts-lavender: #a855f7;
    --bts-glow: #d8b4fe;
    --bts-ribbon: #6b21a8;
    --bts-ribbon-hi: #9333ea;
    --bts-ribbon-sh: #3b0764;
    --bts-gold: #facc15;
}

/* ── LOCKED CARD: GIFT WRAP ── */
.dv-card-locked {
    position: relative !important;
    overflow: hidden !important;
    cursor: pointer !important;
}

/* Gift paper pattern */
.dv-card-locked::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 5;
    pointer-events: none;
    border-radius: inherit;
    background:
        repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(107,33,168,0.07) 18px, rgba(107,33,168,0.07) 20px),
        repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(107,33,168,0.07) 18px, rgba(107,33,168,0.07) 20px);
}

/* Horizontal ribbon */
.dv-card-locked::after {
    content: '';
    position: absolute;
    top: 50%; left: 0; right: 0;
    height: 12px;
    transform: translateY(-50%);
    z-index: 6;
    pointer-events: none;
    background: linear-gradient(180deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    box-shadow: 0 2px 8px rgba(107,33,168,0.5), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.25);
}

/* ── CARD LOCK OVERLAY ── */
.dv-card-lock-overlay {
    position: absolute !important;
    inset: 0 !important;
    z-index: 10 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    background: radial-gradient(ellipse at center, rgba(46,2,73,0.93) 0%, rgba(87,10,87,0.88) 50%, rgba(46,2,73,0.95) 100%) !important;
    backdrop-filter: blur(3px) !important;
    -webkit-backdrop-filter: blur(3px) !important;
    border-radius: inherit !important;
    cursor: pointer !important;
    transition: background 0.3s ease !important;
}

.dv-card-lock-overlay:hover {
    background: radial-gradient(ellipse at center, rgba(46,2,73,0.85) 0%, rgba(123,45,142,0.82) 50%, rgba(46,2,73,0.88) 100%) !important;
}

/* Vertical ribbon on overlay */
.dv-card-lock-overlay::before {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 50%; width: 12px;
    transform: translateX(-50%);
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(90deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    box-shadow: 2px 0 8px rgba(107,33,168,0.5), inset 1px 0 0 rgba(255,255,255,0.18), inset -1px 0 0 rgba(0,0,0,0.25);
}

/* Earth icon */
.dv-card-lock-icon {
    font-size: 2.2rem !important;
    display: block !important;
    margin-bottom: 4px !important;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 0 10px rgba(168,85,247,0.7));
    animation: dv-earth-spin 8s linear infinite;
}

@keyframes dv-earth-spin {
    0%   { transform: rotate(0deg) scale(1); }
    50%  { transform: rotate(180deg) scale(1.08); }
    100% { transform: rotate(360deg) scale(1); }
}

.dv-card-lock-text {
    color: var(--bts-glow) !important;
    font-weight: 700 !important;
    font-size: 0.85rem !important;
    letter-spacing: 1.5px !important;
    text-transform: uppercase !important;
    margin: 2px 0 0 !important;
    text-shadow: 0 0 12px rgba(168,85,247,0.6);
    position: relative; z-index: 2;
}

.dv-card-lock-sub {
    color: rgba(216,180,254,0.7) !important;
    font-size: 0.65rem !important;
    margin: 2px 0 0 !important;
    letter-spacing: 0.5px !important;
    position: relative; z-index: 2;
}

/* ── PREMIUM BADGE (ribbon corner) ── */
.dv-card-premium-badge {
    position: absolute !important;
    top: 8px !important;
    right: -28px !important;
    z-index: 12 !important;
    background: linear-gradient(135deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh)) !important;
    color: var(--bts-glow) !important;
    font-size: 0.58rem !important;
    font-weight: 800 !important;
    padding: 3px 32px !important;
    transform: rotate(45deg) !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
    box-shadow: 0 2px 8px rgba(107,33,168,0.6), inset 0 1px 0 rgba(255,255,255,0.15) !important;
    pointer-events: none !important;
}

/* ── COUNTER BAR ── */
.dv-free-counter-bar {
    background: linear-gradient(135deg, var(--bts-deep), #1a0030) !important;
    border: 1px solid var(--bts-ribbon) !important;
    border-radius: 12px !important;
    padding: 14px 20px !important;
    margin: 16px auto !important;
    max-width: 700px !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 10px !important;
    box-shadow: 0 4px 24px rgba(107,33,168,0.35) !important;
}

.dv-counter-text {
    color: var(--bts-glow) !important;
    font-size: 0.85rem !important;
}
.dv-counter-text strong { color: #fff !important; }
.dv-counter-locked { color: var(--bts-lavender) !important; font-weight: 600 !important; }

.dv-counter-btn {
    background: linear-gradient(135deg, var(--bts-ribbon-hi), var(--bts-ribbon)) !important;
    color: #fff !important;
    padding: 6px 18px !important;
    border-radius: 20px !important;
    font-size: 0.8rem !important;
    font-weight: 700 !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 2px 12px rgba(147,51,234,0.4) !important;
}
.dv-counter-btn:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 20px rgba(147,51,234,0.6) !important;
}

.dv-counter-progress {
    width: 100% !important; height: 4px !important;
    background: rgba(107,33,168,0.3) !important;
    border-radius: 4px !important; margin-top: 6px !important; overflow: hidden !important;
}
.dv-counter-progress-fill {
    height: 100% !important;
    background: linear-gradient(90deg, var(--bts-lavender), var(--bts-gold)) !important;
    border-radius: 4px !important;
    transition: width 1s ease !important;
}

/* ── POPUP ── */
#dv-premium-popup {
    position: fixed !important; inset: 0 !important; z-index: 99999 !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    background: rgba(10,0,20,0.85) !important;
    backdrop-filter: blur(8px) !important; -webkit-backdrop-filter: blur(8px) !important;
    opacity: 0; transition: opacity 0.35s ease !important; padding: 16px !important;
}
#dv-premium-popup.dv-popup-show { opacity: 1; }

.dv-popup-box {
    background: linear-gradient(160deg, #1a0030, var(--bts-deep), #0d0015) !important;
    border: 2px solid var(--bts-ribbon) !important;
    border-radius: 20px !important;
    padding: 36px 28px 28px !important;
    max-width: 420px !important; width: 100% !important;
    text-align: center !important; position: relative !important; overflow: hidden !important;
    box-shadow: 0 0 60px rgba(107,33,168,0.4), 0 0 120px rgba(107,33,168,0.15), inset 0 1px 0 rgba(255,255,255,0.06) !important;
    transform: scale(0.9);
    animation: dv-popup-in 0.4s ease forwards !important;
}
@keyframes dv-popup-in { to { transform: scale(1); } }

/* Ribbon cross on popup */
.dv-popup-box::before {
    content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 10px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.3; pointer-events: none;
}
.dv-popup-box::after {
    content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 10px;
    transform: translateY(-50%);
    background: linear-gradient(180deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.3; pointer-events: none;
}

.dv-popup-close {
    position: absolute !important; top: 10px !important; right: 14px !important;
    background: none !important; border: none !important;
    color: var(--bts-glow) !important; font-size: 1.6rem !important;
    cursor: pointer !important; z-index: 5 !important; line-height: 1 !important;
}
.dv-popup-close:hover { color: #fff !important; }

.dv-popup-icon {
    font-size: 2.8rem !important; display: block !important; margin-bottom: 6px !important;
    filter: drop-shadow(0 0 16px rgba(168,85,247,0.7)) !important;
    position: relative; z-index: 2;
}

.dv-popup-box h3 {
    color: var(--bts-glow) !important; font-size: 1.3rem !important;
    margin: 6px 0 4px !important; position: relative; z-index: 2;
}

.dv-popup-bts-title {
    color: #fff !important; font-size: 1.1rem !important; font-weight: 700 !important;
    margin: 0 0 2px !important; position: relative; z-index: 2;
}
.dv-popup-bts-sub {
    color: var(--bts-lavender) !important; font-size: 0.82rem !important;
    margin: 0 0 10px !important; font-style: italic !important;
    position: relative; z-index: 2;
}

.dv-popup-item-name {
    color: var(--bts-lavender) !important; font-style: italic !important;
    font-size: 0.9rem !important; margin: 4px 0 8px !important;
    position: relative; z-index: 2;
}

.dv-popup-box p {
    color: rgba(216,180,254,0.85) !important; font-size: 0.82rem !important;
    line-height: 1.5 !important; position: relative; z-index: 2;
}

.dv-popup-btn {
    display: block !important; width: 100% !important; padding: 12px 0 !important;
    border-radius: 12px !important; font-size: 0.9rem !important; font-weight: 700 !important;
    text-decoration: none !important; margin-top: 10px !important;
    transition: all 0.3s ease !important; position: relative; z-index: 2;
}
.dv-popup-btn-buy {
    background: linear-gradient(135deg, var(--bts-ribbon-hi), var(--bts-lavender)) !important;
    color: #fff !important; box-shadow: 0 4px 20px rgba(147,51,234,0.5) !important;
}
.dv-popup-btn-buy:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 28px rgba(147,51,234,0.7) !important;
}
.dv-popup-btn-close {
    background: rgba(107,33,168,0.2) !important;
    color: var(--bts-glow) !important;
    border: 1px solid rgba(107,33,168,0.4) !important;
}
.dv-popup-btn-close:hover { background: rgba(107,33,168,0.35) !important; }

.dv-popup-counter {
    color: rgba(168,85,247,0.6) !important; font-size: 0.7rem !important;
    margin-top: 14px !important; position: relative; z-index: 2;
}

/* ── PAGE-LEVEL LOCK ── */
body.premium-page-locked { overflow: hidden !important; }

#premium-page-overlay {
    position: fixed !important; inset: 0 !important; z-index: 999999 !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    padding: 20px !important; overflow-y: auto !important;
    background:
        repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(107,33,168,0.06) 30px, rgba(107,33,168,0.06) 32px),
        repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(107,33,168,0.06) 30px, rgba(107,33,168,0.06) 32px),
        linear-gradient(160deg, #0a0012, var(--bts-deep), #0d0015, #1a0030) !important;
}

/* Full-page ribbons */
#premium-page-overlay::before {
    content: ''; position: fixed; top: 0; bottom: 0; left: 50%; width: 16px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.4; z-index: 0; pointer-events: none;
    box-shadow: 0 0 20px rgba(107,33,168,0.4);
}
#premium-page-overlay::after {
    content: ''; position: fixed; left: 0; right: 0; top: 50%; height: 16px;
    transform: translateY(-50%);
    background: linear-gradient(180deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.4; z-index: 0; pointer-events: none;
    box-shadow: 0 0 20px rgba(107,33,168,0.4);
}

.dv-page-lock-box {
    position: relative !important; z-index: 2 !important;
    max-width: 480px !important; width: 100% !important;
}

.dv-page-lock-inner {
    background: linear-gradient(160deg, rgba(26,0,48,0.97), rgba(46,2,73,0.95), rgba(13,0,21,0.97)) !important;
    border: 2px solid var(--bts-ribbon) !important;
    border-radius: 24px !important; padding: 40px 32px 32px !important;
    text-align: center !important; position: relative; overflow: hidden;
    box-shadow: 0 0 80px rgba(107,33,168,0.3), 0 0 160px rgba(107,33,168,0.1), inset 0 1px 0 rgba(255,255,255,0.05) !important;
}

/* Subtle ribbons on lock box */
.dv-page-lock-inner::before {
    content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 8px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.15; pointer-events: none;
}
.dv-page-lock-inner::after {
    content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 8px;
    transform: translateY(-50%);
    background: linear-gradient(180deg, var(--bts-ribbon-hi), var(--bts-ribbon), var(--bts-ribbon-sh));
    opacity: 0.15; pointer-events: none;
}

.dv-page-lock-icon {
    font-size: 3rem !important; display: block !important; margin-bottom: 8px !important;
    position: relative; z-index: 2;
    filter: drop-shadow(0 0 20px rgba(168,85,247,0.6)) !important;
    animation: dv-earth-spin 8s linear infinite;
}

.dv-page-premium-badge {
    display: inline-block !important;
    background: linear-gradient(135deg, var(--bts-ribbon-hi), var(--bts-ribbon)) !important;
    color: var(--bts-glow) !important; font-size: 0.7rem !important; font-weight: 800 !important;
    padding: 4px 16px !important; border-radius: 20px !important;
    letter-spacing: 2px !important; margin-bottom: 12px !important;
    position: relative; z-index: 2;
    box-shadow: 0 2px 12px rgba(107,33,168,0.5) !important;
}

.dv-page-name {
    color: var(--bts-lavender) !important; font-size: 0.85rem !important;
    margin: 8px 0 !important; position: relative; z-index: 2;
}

.dv-page-lock-inner h2 {
    color: #fff !important; font-size: 1.5rem !important; margin: 8px 0 !important;
    position: relative; z-index: 2; text-shadow: 0 0 20px rgba(168,85,247,0.3);
}

.dv-page-lock-inner > p {
    color: rgba(216,180,254,0.8) !important; font-size: 0.85rem !important;
    line-height: 1.6 !important; margin: 8px 0 16px !important;
    position: relative; z-index: 2;
}

.dv-page-features {
    display: flex !important; flex-wrap: wrap !important;
    justify-content: center !important; gap: 8px !important;
    margin-bottom: 16px !important; position: relative; z-index: 2;
}
.dv-page-feat {
    background: rgba(107,33,168,0.25) !important;
    color: var(--bts-glow) !important; padding: 4px 12px !important;
    border-radius: 16px !important; font-size: 0.72rem !important; font-weight: 600 !important;
    border: 1px solid rgba(107,33,168,0.3) !important;
}

.dv-page-price {
    color: #fff !important; font-size: 1.1rem !important; margin: 12px 0 !important;
    position: relative; z-index: 2;
}
.dv-page-price del { color: rgba(216,180,254,0.5) !important; font-size: 0.85rem !important; margin-right: 6px !important; }
.dv-page-price strong { color: var(--bts-gold) !important; font-size: 1.4rem !important; }

.dv-page-btn {
    display: block !important; width: 100% !important; padding: 12px 0 !important;
    border-radius: 12px !important; font-size: 0.9rem !important; font-weight: 700 !important;
    text-decoration: none !important; margin-top: 10px !important; text-align: center !important;
    transition: all 0.3s ease !important; position: relative; z-index: 2;
}
.dv-page-btn-primary {
    background: linear-gradient(135deg, var(--bts-ribbon-hi), var(--bts-lavender)) !important;
    color: #fff !important; box-shadow: 0 4px 24px rgba(147,51,234,0.5) !important;
}
.dv-page-btn-primary:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 32px rgba(147,51,234,0.7) !important;
}
.dv-page-btn-secondary {
    background: rgba(107,33,168,0.2) !important;
    color: var(--bts-glow) !important;
    border: 1px solid rgba(107,33,168,0.4) !important;
}
.dv-page-btn-secondary:hover { background: rgba(107,33,168,0.35) !important; }
.dv-page-btn-login {
    background: none !important; color: var(--bts-lavender) !important;
    font-size: 0.8rem !important; font-weight: 500 !important;
}
.dv-page-btn-login:hover { color: #fff !important; }

@media (max-width: 480px) {
    .dv-popup-box, .dv-page-lock-inner { padding: 28px 18px 22px !important; }
    .dv-card-lock-icon, .dv-page-lock-icon { font-size: 2rem !important; }
}

        `;
        document.head.appendChild(s);
    }

    // ==========================================
    // CARD-LEVEL LOCKING
    // ==========================================

    function lockCards() {
        const path = getPath();
        const section = getSectionName(path);
        const freeCount = getFreeCardCount(section);

        const cardSelectors = [
            '.card',
            '.item-card',
            '.grid-card',
            '.feature-card',
            '.mountain-card',
            '.river-card',
            '.lake-card',
            '.ocean-card',
            '.island-card',
            '.volcano-card',
            '.desert-card',
            '.forest-card',
            '.coral-card',
            '.game-card',
            '.upsc-card',
            '.topic-card',
            '.category-card',
            '.quiz-card',
            '[data-card]',
            '.cards-container > div',
            '.cards-container > a',
            '.card-grid > div',
            '.card-grid > a',
            '.grid > div',
            '.grid > a',
            '.items-grid > div',
            '.items-grid > a',
        ];

        const selectorString = cardSelectors.join(', ');
        const allCards = document.querySelectorAll(selectorString);

        if (allCards.length === 0) {
            waitForCards(selectorString, freeCount, section);
            return;
        }

        applyCardLocks(allCards, freeCount, section);
    }

    function applyCardLocks(cards, freeCount, section) {
        const uniqueCards = [];
        const seen = new Set();

        cards.forEach(card => {
            if (!seen.has(card)) {
                seen.add(card);
                uniqueCards.push(card);
            }
        });

        const totalCards = uniqueCards.length;
        let lockedCount = 0;

        uniqueCards.forEach((card, index) => {
            if (card.classList.contains('dv-card-locked') ||
                card.classList.contains('dv-card-free')) return;

            if (index < freeCount) {
                card.classList.add('dv-card-free');
            } else {
                card.classList.add('dv-card-locked');
                lockedCount++;

                const overlay = document.createElement('div');
                overlay.className = 'dv-card-lock-overlay';
                overlay.innerHTML = `
                    <span class="dv-card-lock-icon">🌍</span>
                    <p class="dv-card-lock-text">Premium</p>
                    <p class="dv-card-lock-sub">Tap to unwrap 💜</p>
                `;

                const badge = document.createElement('span');
                badge.className = 'dv-card-premium-badge';
                badge.textContent = '★ PRO';

                card.style.position = 'relative';
                card.appendChild(overlay);
                card.appendChild(badge);

                overlay.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showPremiumPopup(card, section, totalCards, freeCount);
                });

                card.addEventListener('click', function (e) {
                    if (card.classList.contains('dv-card-locked')) {
                        e.preventDefault();
                        e.stopPropagation();
                        showPremiumPopup(card, section, totalCards, freeCount);
                    }
                });

                if (card.tagName === 'A') {
                    card.addEventListener('click', function (e) {
                        if (card.classList.contains('dv-card-locked')) {
                            e.preventDefault();
                        }
                    });
                }

           // Also handle links inside the card
                const links = card.querySelectorAll('a');
                links.forEach(link => {
                    link.style.pointerEvents = 'none';
                    link.setAttribute('tabindex', '-1');
                    link.addEventListener('click', function (e) {
                        if (card.classList.contains('dv-card-locked')) {
                            e.preventDefault();
                            e.stopPropagation();
                            showPremiumPopup(card, section, totalCards, freeCount);
                            return false;
                        }
                    });
                });
            }
        });

        if (lockedCount > 0) {
            addCounterBar(totalCards, freeCount, lockedCount, section);
        }

        console.log(
            `%c🔒 Card Lock | ${section} | ${freeCount} free / ${lockedCount} locked / ${totalCards} total`,
            'color: #e94560; font-size: 12px; background: #1a1a2e; padding: 4px 12px; border-radius: 4px;'
        );
    }

    function waitForCards(selectorString, freeCount, section) {
        let attempts = 0;
        const maxAttempts = 50;

        const interval = setInterval(() => {
            attempts++;
            const cards = document.querySelectorAll(selectorString);

            if (cards.length > 0) {
                clearInterval(interval);
                applyCardLocks(cards, freeCount, section);
            }

            if (attempts >= maxAttempts) {
                clearInterval(interval);
                console.log('%c⚠️ No cards found after 5s', 'color: #ff9800;');
            }
        }, 100);

        const observer = new MutationObserver(function (mutations) {
            const cards = document.querySelectorAll(selectorString);
            if (cards.length > 0) {
                observer.disconnect();
                clearInterval(interval);
                setTimeout(() => {
                    const finalCards = document.querySelectorAll(selectorString);
                    applyCardLocks(finalCards, freeCount, section);
                }, 200);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // ==========================================
    // COUNTER BAR
    // ==========================================

    function addCounterBar(total, free, locked, section) {
        if (document.querySelector('.dv-free-counter-bar')) return;

        const percentage = Math.round((free / total) * 100);
        const sectionName = section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        const bar = document.createElement('div');
        bar.className = 'dv-free-counter-bar';
        bar.innerHTML = `
            <div class="dv-counter-text">
                🌍 <strong>${free}</strong> of ${total} ${sectionName} are free •
                <span class="dv-counter-locked">${locked} locked</span>
            </div>
            <a href="/pricing.html" class="dv-counter-btn">💜 Unlock All</a>
            <div class="dv-counter-progress">
                <div class="dv-counter-progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;

        const insertTargets = [
            'main',
            '.content',
            '.content-wrapper',
            '.cards-container',
            '.card-grid',
            '.container',
            '.page-content',
            '#app',
            '#root',
        ];

        let inserted = false;
        for (const sel of insertTargets) {
            const target = document.querySelector(sel);
            if (target) {
                target.insertBefore(bar, target.firstChild);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            const header = document.querySelector('nav, header, .navbar');
            if (header && header.nextSibling) {
                header.parentNode.insertBefore(bar, header.nextSibling);
            } else {
                document.body.insertBefore(bar, document.body.firstChild);
            }
        }
    }

    // ==========================================
    // PREMIUM POPUP (when clicking locked card)
    // ==========================================

    function showPremiumPopup(card, section, total, free) {
        const existing = document.getElementById('dv-premium-popup');
        if (existing) existing.remove();

        let cardName = 'this content';
        const nameEl = card.querySelector('h2, h3, h4, .card-title, .name, .title, [data-name]');
        if (nameEl) {
            cardName = nameEl.textContent.trim();
        } else if (card.getAttribute('data-name')) {
            cardName = card.getAttribute('data-name');
        }

        const sectionName = section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const locked = total - free;
        const bts = getRandomBTS();

        const popup = document.createElement('div');
        popup.id = 'dv-premium-popup';
        popup.innerHTML = `
            <div class="dv-popup-box">
                <button class="dv-popup-close" onclick="this.closest('#dv-premium-popup').remove()">×</button>
                <span class="dv-popup-icon">🌍</span>
                <h3>Premium Content</h3>
                <p class="dv-popup-bts-title">${bts.title}</p>
                <p class="dv-popup-bts-sub">${bts.subtitle}</p>
                <p class="dv-popup-item-name">"${cardName}"</p>
                <p>Unlock all <strong>${total}</strong> ${sectionName} and <strong>200+</strong> pages across Dharaverse with a Premium subscription.</p>
                <a href="/pricing.html" class="dv-popup-btn dv-popup-btn-buy">
                    💜 Get Premium — ${CONFIG.price}${CONFIG.period}
                </a>
                <a href="/auth.html" class="dv-popup-btn dv-popup-btn-close">
                    Already subscribed? Log in
                </a>
                <p class="dv-popup-counter">
                    ${free} free • ${locked} locked in ${sectionName}
                </p>
            </div>
        `;

        document.body.appendChild(popup);

        requestAnimationFrame(() => {
            popup.classList.add('dv-popup-show');
        });

        popup.addEventListener('click', function (e) {
            if (e.target === popup) {
                popup.remove();
            }
        });

        const escHandler = function (e) {
            if (e.key === 'Escape') {
                popup.remove();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    // ==========================================
    // PAGE-LEVEL LOCKING (encyclopedia sub-pages, profiles)
    // ==========================================

    function lockEntirePage() {
        document.body.classList.add('premium-page-locked');
        document.body.classList.remove('premium-verified');

        if (document.getElementById('premium-page-overlay')) return;

        const pageTitle = getPageTitle();
        const backLink = getBackLink();

        const overlay = document.createElement('div');
        overlay.id = 'premium-page-overlay';
        overlay.innerHTML = `
            <div class="dv-page-lock-box">
                <div class="dv-page-lock-inner">
                    <span class="dv-page-lock-icon">🌍</span>
                    <span class="dv-page-premium-badge">★ PREMIUM CONTENT</span>
                    <p class="dv-page-name">📄 ${pageTitle}</p>
                    <h2>Unlock Full Access</h2>
                    <p>This page is part of Dharaverse Premium. Get unlimited access to 200+ interactive geography pages.</p>
                    <div class="dv-page-features">
                        <span class="dv-page-feat">200+ Pages</span>
                        <span class="dv-page-feat">All Topics</span>
                        <span class="dv-page-feat">UPSC Prep</span>
                        <span class="dv-page-feat">No Ads</span>
                    </div>
                    <div class="dv-page-price">
                        <del>${CONFIG.originalPrice}</del> <strong>${CONFIG.price}</strong> ${CONFIG.period}
                    </div>
                    <a href="/pricing.html" class="dv-page-btn dv-page-btn-primary">💜 Get Premium Access</a>
                    <a href="${backLink}" class="dv-page-btn dv-page-btn-secondary">← Back to Free Content</a>
                    <a href="/auth.html" class="dv-page-btn dv-page-btn-login">Already Premium? Log In</a>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
    }

    function getPageTitle() {
        if (document.title && document.title.length > 2) {
            return document.title.split('|')[0].split('-')[0].trim();
        }
        const path = getPath();
        const parts = path.split('/').filter(Boolean);
        const name = parts[parts.length - 1] || 'Content';
        return name.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    function getBackLink() {
        const path = getPath();
        const map = {
            '/encyclopedia/bharat/': '/encyclopedia/bharat/index.html',
            '/encyclopedia/biogeography/': '/encyclopedia/biogeography/index.html',
            '/encyclopedia/climate/': '/encyclopedia/climate/index.html',
            '/encyclopedia/dictionary/': '/encyclopedia/dictionary/index.html',
            '/encyclopedia/environment-geography/': '/encyclopedia/environment-geography/environment-geography.html',
            '/encyclopedia/geology/': '/encyclopedia/geology/index.html',
            '/encyclopedia/historical-geography/': '/encyclopedia/historical-geography/historical-geo.html',
            '/encyclopedia/human-geography/': '/encyclopedia/human-geography/index.html',
            '/encyclopedia/hydrology/': '/encyclopedia/hydrology/hydrology.html',
            '/encyclopedia/map-science/': '/encyclopedia/map-science/index.html',
            '/encyclopedia/organizations/': '/encyclopedia/organizations/index.html',
            '/encyclopedia/physical-geography/': '/encyclopedia/physical-geography/index.html',
            '/encyclopedia/space-geography/': '/encyclopedia/space-geography/index.html',
            '/encyclopedia/strategic-locations/': '/encyclopedia/strategic-locations/index.html',
            '/mountains/': '/mountains/mountains.html',
            '/rivers/': '/rivers/rivers.html',
            '/lakes/': '/lakes/lakes.html',
            '/oceans/': '/oceans/oceans.html',
            '/islands/': '/islands/islands.html',
            '/volcanoes/': '/volcanoes/volcanoes.html',
            '/deserts/': '/deserts/deserts.html',
            '/forests/': '/forests/forests.html',
            '/coral-reefs/': '/coral-reefs/coral-reefs.html',
            '/upsc/': '/upsc/upsc.html',
            '/games/': '/games/games.html',
            '/encyclopedia/': '/encyclopedia/encyclopedia.html',
        };

        for (const [prefix, link] of Object.entries(map)) {
            if (path.includes(prefix)) return link;
        }
        return '/';
    }

    function unlockPage() {
        document.body.classList.remove('premium-page-locked');
        document.body.classList.remove('premium-locked');
        document.body.classList.add('premium-verified');

        const overlay = document.getElementById('premium-page-overlay');
        if (overlay) overlay.remove();

        document.querySelectorAll('.dv-card-locked').forEach(card => {
            card.classList.remove('dv-card-locked');
            const lockOverlay = card.querySelector('.dv-card-lock-overlay');
            if (lockOverlay) lockOverlay.remove();
            const badge = card.querySelector('.dv-card-premium-badge');
            if (badge) badge.remove();
        });

        const counter = document.querySelector('.dv-free-counter-bar');
        if (counter) counter.remove();

        const popup = document.getElementById('dv-premium-popup');
        if (popup) popup.remove();

        console.log(
            '%c✅ DHARAVERSE: Premium Verified — Full Access',
            'color: #70e0a0; font-size: 14px; font-weight: bold; background: #1a2e1a; padding: 8px 16px; border-radius: 6px;'
        );
    }

    // ==========================================
    // MAIN INIT
    // ==========================================

    function init() {
        const path = getPath();

        // Inject BTS purple styles
        injectStyles();

        console.log(
            `%c🌍 Dharaverse Lock v4.0 | ${path}`,
            'color: #4fc3f7; font-size: 11px;'
        );

        const premium = isPremiumUser();

        if (premium) {
            unlockPage();
            return;
        }

        if (isFreePage(path)) {
            if (isCardLockPage(path)) {
                document.body.classList.add('premium-verified');
                lockCards();
                console.log('%c🆓 FREE page with card locks', 'color: #ffa726;');
            } else {
                document.body.classList.add('premium-verified');
                console.log('%c🆓 FREE page', 'color: #70e0a0;');
            }
            return;
        }

        lockEntirePage();
        console.log(
            '%c🔒 PAGE LOCKED — Premium Required',
            'color: #e94560; font-size: 14px; font-weight: bold;'
        );
    }

    // ==========================================
    // EARLY EXECUTION
    // ==========================================

    function earlyBodyLock() {
        if (!document.body) return;
        const path = getPath();
        if (!isFreePage(path) && !isPremiumUser()) {
            document.body.classList.add('premium-page-locked');
        }
    }

    if (document.body) {
        earlyBodyLock();
    } else {
        const obs = new MutationObserver((m, o) => {
            if (document.body) { earlyBodyLock(); o.disconnect(); }
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('load', () => {
        const path = getPath();
        if (isPremiumUser()) {
            unlockPage();
            return;
        }
        if (isCardLockPage(path)) {
            setTimeout(lockCards, 500);
            setTimeout(lockCards, 1500);
            setTimeout(lockCards, 3000);
        }
    });

    // ==========================================
    // PUBLIC API
    // ==========================================

    window.DharaversePremium = {
        version: '4.0',
        isLocked: () => document.body.classList.contains('premium-page-locked'),
        isPremium: isPremiumUser,
        check: init,
        getConfig: () => CONFIG,

        setPremium: function (days) {
            const exp = new Date();
            exp.setDate(exp.getDate() + (days || 365));
            localStorage.setItem('dharaverse_premium', JSON.stringify({
                isPremium: true,
                expiryDate: exp.toISOString(),
                plan: 'test'
            }));
            unlockPage();
            return `✅ Premium set for ${days || 365} days`;
        },

        removePremium: function () {
            localStorage.removeItem('dharaverse_premium');
            localStorage.removeItem('dharaverse_admin');
            localStorage.removeItem('dharaverse_user');
            sessionStorage.removeItem('dharaverse_premium');
            location.reload();
        },

        adminUnlock: function (key) {
            if (key === 'dharaverse-master-2025') {
                localStorage.setItem('dharaverse_premium', JSON.stringify({
                    isPremium: true,
                    expiryDate: '2026-12-31T23:59:59Z',
                    plan: 'admin'
                }));
                unlockPage();
                return '✅ Admin unlocked';
            }
            return '❌ Invalid key';
        },

        setFreeCards: function (section, count) {
            CONFIG.freeCards[section] = count;
            return `✅ ${section}: ${count} free cards`;
        }
    };

})();
