// /js/premium-wrapper.js
// ============================================
// DHARAVERSE.COM - SMART LOCK SYSTEM v4.0
// Card-level + Page-level locking
// www.dharaverse.com
// ============================================

(function () {
'use strict';

text

// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    // How many cards are FREE on each listing page
    freeCards: {
        mountains: 7,
        rivers: 7,
        lakes: 7,
        oceans: 7,      // probably fewer total, adjust
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
// PAGE-LEVEL: Which pages are FULLY FREE
// ==========================================

const FREE_PAGES = [
    // Root
    '/', '/index.html', '/geotopia.html',
    '/auth.html', '/pricing.html', '/contact.html',
    '/payment-success.html', '/payment-failed.html',
    '/dashboard.html', '/admin-login.html', '/admin-dashboard.html',
    '/disable-sw.html', '/test.html',

    // Legal
    '/legal/privacy-policy.html',
    '/legal/terms-and-conditions.html',

    // Continents (all 7 FREE)
    '/africa.html', '/asia.html', '/europe.html',
    '/australia.html', '/north-america.html',
    '/south-america.html', '/antarctica.html',

    // Atlas
    '/atlas/atlas.html', '/atlas.html',

    // Zones
    '/kids-zone.html', '/junior-zone.html', '/teen-zone.html',

    // Spin / Mystery
    '/spin-globe.html', '/mystery.html',

    // Timeline
    '/timeline/index.html', '/timeline.html',
    '/timeline-part1.html', '/timeline-part2.html', '/timeline-part3.html',

    // ── LISTING PAGES (FREE, but cards inside are locked) ──
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

    // ── ENCYCLOPEDIA INDEX PAGES ──
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

// Pages that have CARD-LEVEL locking (listing pages)
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
    // Extract section from path like /mountains/mountains.html → mountains
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
        // Check 1: dharaverse_premium
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

        // Check 2: Admin
        const ad = localStorage.getItem('dharaverse_admin');
        if (ad) {
            const a = JSON.parse(ad);
            if (a && a.isAdmin === true) return true;
        }

        // Check 3: Session
        const sp = sessionStorage.getItem('dharaverse_premium');
        if (sp) {
            const s = JSON.parse(sp);
            if (s && s.isPremium === true) return true;
        }

        // Check 4: User object
        const au = localStorage.getItem('dharaverse_user');
        if (au) {
            const u = JSON.parse(au);
            if (u && (u.premium === true || u.isPremium === true ||
                u.role === 'premium' || u.role === 'admin' ||
                u.plan === 'premium' || u.plan === 'annual' || u.plan === 'lifetime'))
                return true;
        }

        // Check 5: Supabase
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
// CARD-LEVEL LOCKING
// ==========================================

function lockCards() {
    const path = getPath();
    const section = getSectionName(path);
    const freeCount = getFreeCardCount(section);

    // Common card selectors used across dharaverse pages
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
        // Cards might not be rendered yet (JS-generated)
        // We'll retry with MutationObserver
        waitForCards(selectorString, freeCount, section);
        return;
    }

    applyCardLocks(allCards, freeCount, section);
}

function applyCardLocks(cards, freeCount, section) {
    // Deduplicate: a card might match multiple selectors
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
        // Skip cards that are already processed
        if (card.classList.contains('dv-card-locked') ||
            card.classList.contains('dv-card-free')) return;

        if (index < freeCount) {
            // FREE card
            card.classList.add('dv-card-free');
        } else {
            // LOCKED card
            card.classList.add('dv-card-locked');
            lockedCount++;

            // Add lock overlay
            const overlay = document.createElement('div');
            overlay.className = 'dv-card-lock-overlay';
            overlay.innerHTML = `
                <span class="dv-card-lock-icon">🔒</span>
                <p class="dv-card-lock-text">Premium</p>
                <p class="dv-card-lock-sub">Tap to unlock</p>
            `;

            // Add premium badge
            const badge = document.createElement('span');
            badge.className = 'dv-card-premium-badge';
            badge.textContent = '★ PRO';

            card.style.position = 'relative';
            card.appendChild(overlay);
            card.appendChild(badge);

            // Click handler → show popup
            overlay.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                showPremiumPopup(card, section, totalCards, freeCount);
            });

            // Prevent the card's original click/link
            card.addEventListener('click', function (e) {
                if (card.classList.contains('dv-card-locked')) {
                    e.preventDefault();
                    e.stopPropagation();
                    showPremiumPopup(card, section, totalCards, freeCount);
                }
            });

            // If card is an <a> tag, prevent navigation
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
                link.addEventListener('click', function (e) {
                    if (card.classList.contains('dv-card-locked')) {
                        e.preventDefault();
                        e.stopPropagation();
                        showPremiumPopup(card, section, totalCards, freeCount);
                    }
                });
            });
        }
    });

    // Add counter bar
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
    const maxAttempts = 50; // 5 seconds max

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

    // Also use MutationObserver for dynamically added cards
    const observer = new MutationObserver(function (mutations) {
        const cards = document.querySelectorAll(selectorString);
        if (cards.length > 0) {
            observer.disconnect();
            clearInterval(interval);
            // Small delay to let all cards render
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
        <a href="/pricing.html" class="dv-counter-btn">🔓 Unlock All</a>
        <div class="dv-counter-progress">
            <div class="dv-counter-progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;

    // Insert at the top of main content area
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
        // Insert after first nav/header
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
    // Remove existing popup
    const existing = document.getElementById('dv-premium-popup');
    if (existing) existing.remove();

    // Try to get card name
    let cardName = 'this content';
    const nameEl = card.querySelector('h2, h3, h4, .card-title, .name, .title, [data-name]');
    if (nameEl) {
        cardName = nameEl.textContent.trim();
    } else if (card.getAttribute('data-name')) {
        cardName = card.getAttribute('data-name');
    }

    const sectionName = section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const locked = total - free;

    const popup = document.createElement('div');
    popup.id = 'dv-premium-popup';
    popup.innerHTML = `
        <div class="dv-popup-box">
            <button class="dv-popup-close" onclick="this.closest('#dv-premium-popup').remove()">×</button>
            <span class="dv-popup-icon">🔒</span>
            <h3>Premium Content</h3>
            <p class="dv-popup-item-name">"${cardName}"</p>
            <p>Unlock all <strong>${total}</strong> ${sectionName} and <strong>200+</strong> pages across Dharaverse with a Premium subscription.</p>
            <a href="/pricing.html" class="dv-popup-btn dv-popup-btn-buy">
                🌟 Get Premium — ${CONFIG.price}${CONFIG.period}
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

    // Animate in
    requestAnimationFrame(() => {
        popup.classList.add('dv-popup-show');
    });

    // Close on background click
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.remove();
        }
    });

    // Close on Escape
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
                <span class="dv-page-lock-icon">🔒</span>
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
                <a href="/pricing.html" class="dv-page-btn dv-page-btn-primary">🌟 Get Premium Access</a>
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

    // Also remove all card locks
    document.querySelectorAll('.dv-card-locked').forEach(card => {
        card.classList.remove('dv-card-locked');
        const lockOverlay = card.querySelector('.dv-card-lock-overlay');
        if (lockOverlay) lockOverlay.remove();
        const badge = card.querySelector('.dv-card-premium-badge');
        if (badge) badge.remove();
    });

    // Remove counter bar
    const counter = document.querySelector('.dv-free-counter-bar');
    if (counter) counter.remove();

    // Remove popup
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

    console.log(
        `%c🌍 Dharaverse Lock v4.0 | ${path}`,
        'color: #4fc3f7; font-size: 11px;'
    );

    const premium = isPremiumUser();

    // ── Premium user: unlock everything ──
    if (premium) {
        unlockPage();
        return;
    }

    // ── Free page check ──
    if (isFreePage(path)) {
        // It's a free page

        if (isCardLockPage(path)) {
            // FREE page BUT with card-level locking
            document.body.classList.add('premium-verified'); // page itself is free
            lockCards();
            console.log('%c🆓 FREE page with card locks', 'color: #ffa726;');
        } else {
            // Fully free page
            document.body.classList.add('premium-verified');
            console.log('%c🆓 FREE page', 'color: #70e0a0;');
        }
        return;
    }

    // ── Locked page (encyclopedia sub-pages, profiles, etc) ──
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

// Lock body ASAP
if (document.body) {
    earlyBodyLock();
} else {
    const obs = new MutationObserver((m, o) => {
        if (document.body) { earlyBodyLock(); o.disconnect(); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
}

// Full init on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Re-check on full load
window.addEventListener('load', () => {
    const path = getPath();
    if (isPremiumUser()) {
        unlockPage();
        return;
    }
    if (isCardLockPage(path)) {
        // Re-apply card locks in case JS rendered cards late
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

    // For testing
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

    // Manually set free card count for a section
    setFreeCards: function (section, count) {
        CONFIG.freeCards[section] = count;
        return `✅ ${section}: ${count} free cards`;
    }
};
})();
