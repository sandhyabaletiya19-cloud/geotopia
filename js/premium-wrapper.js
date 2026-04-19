// /js/premium-wrapper.js
// ============================================
// DHARAVERSE.COM - SMART LOCK SYSTEM v4.0
// Card-level + Page-level locking
// BTS Purple Theme 💜
// www.dharaverse.com
// ============================================

(function () {
'use strict';

// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
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
    defaultFreeCards: 7,
    price: '₹299',
    originalPrice: '₹999',
    period: '/year',
};

// ==========================================
// BTS MESSAGES 💜
// ==========================================

const BTS_MESSAGES = [
    { title: "Keep Swimming! 🌊",             subtitle: "The ocean of knowledge awaits 💜" },
    { title: "Dream, Believe, Achieve! ✨",    subtitle: "Unlock your potential 💜" },
    { title: "Purple You! 보라해 💜",           subtitle: "We believe in your dreams" },
    { title: "Magic Shop Awaits! ✨",           subtitle: "Unlock all wonders 💜" },
    { title: "Beyond The Scene! 🌟",            subtitle: "Go beyond with premium 💜" },
    { title: "You Are The Best! 🌸",            subtitle: "Best comes with premium 💜" },
    { title: "Life Goes On! 🌿",                subtitle: "Keep exploring, go premium 💜" },
    { title: "Dynamite! 💥",                    subtitle: "Explode into full knowledge 💜" },
    { title: "Butter! 🧈",                      subtitle: "Smooth access to everything 💜" },
    { title: "Run BTS! 🏃",                     subtitle: "Run towards all knowledge 💜" },
    { title: "Mikrokosmos! 🌌",                 subtitle: "You are a shining star 💜" },
    { title: "Spring Day 🌸",                   subtitle: "Warm knowledge awaits you 💜" },
    { title: "Permission to Dance! 💃",         subtitle: "Dance into full access 💜" },
    { title: "Yet To Come! 🎶",                 subtitle: "The best is yet to come 💜" },
    { title: "Idol! 👑",                        subtitle: "Be the idol of knowledge 💜" },
    { title: "DNA! 🧬",                         subtitle: "Geography is in your DNA 💜" },
    { title: "Fire! 🔥",                        subtitle: "Set your learning on fire 💜" },
    { title: "Boy With Luv! 💕",                subtitle: "Fall in love with Earth 💜" },
    { title: "Euphoria! 🦋",                    subtitle: "Feel the euphoria of learning 💜" },
    { title: "Black Swan! 🦢",                  subtitle: "Discover the unseen beauty 💜" },
    { title: "ON! 💜",                          subtitle: "Bring the pain, bring the knowledge!" },
    { title: "Fake Love? Real Knowledge! 💔➡️💜", subtitle: "Get the real thing here" },
    { title: "Blood Sweat & Tears! 💧",         subtitle: "Worth every drop 💜" },
    { title: "Airplane pt.2 ✈️",                subtitle: "Fly across all continents 💜" },
    { title: "Dis-ease → Ease! 💊",             subtitle: "Cure your curiosity 💜" },
];

function getRandomBTSMessage() {
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
// CARD-LEVEL LOCKING
// ==========================================

let _cardLockApplied = false;

function lockCards() {
    if (_cardLockApplied) {
        console.log('%c⚠️ Card locks already applied — skipping', 'color: #a78bfa;');
        return;
    }

    const path = getPath();
    const section = getSectionName(path);
    const freeCount = getFreeCardCount(section);

    const cardSelectors = [
        '.card', '.item-card', '.grid-card', '.feature-card',
        '.mountain-card', '.river-card', '.lake-card', '.ocean-card',
        '.island-card', '.volcano-card', '.desert-card', '.forest-card',
        '.coral-card', '.game-card', '.upsc-card', '.topic-card',
        '.category-card', '.quiz-card', '[data-card]',
        '.cards-container > div', '.cards-container > a',
        '.card-grid > div', '.card-grid > a',
        '.grid > div', '.grid > a',
        '.items-grid > div', '.items-grid > a',
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
    if (_cardLockApplied) {
        console.log('%c⚠️ Card locks already applied — skipping', 'color: #a78bfa;');
        return;
    }

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
                <span class="dv-card-lock-icon">🔒</span>
                <p class="dv-card-lock-text">Premium</p>
                <p class="dv-card-lock-sub">Tap to unlock 💜</p>
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

    if (lockedCount > 0) {
        addCounterBar(totalCards, freeCount, lockedCount, section);
    }

    _cardLockApplied = true;

    console.log(
        `%c🔒 Card Lock | ${section} | ${freeCount} free / ${lockedCount} locked / ${totalCards} total`,
        'color: #a78bfa; font-size: 12px; background: #1a0a2e; padding: 4px 12px; border-radius: 4px;'
    );
}

function waitForCards(selectorString, freeCount, section) {
    let attempts = 0;
    const maxAttempts = 50;

    const interval = setInterval(() => {
        if (_cardLockApplied) { clearInterval(interval); return; }
        attempts++;
        const cards = document.querySelectorAll(selectorString);

        if (cards.length > 0) {
            clearInterval(interval);
            applyCardLocks(cards, freeCount, section);
        }

        if (attempts >= maxAttempts) {
            clearInterval(interval);
            console.log('%c⚠️ No cards found after 5s', 'color: #fbbf24;');
        }
    }, 100);

    const observer = new MutationObserver(function (mutations) {
        if (_cardLockApplied) { observer.disconnect(); return; }
        const cards = document.querySelectorAll(selectorString);
        if (cards.length > 0) {
            observer.disconnect();
            clearInterval(interval);
            setTimeout(() => {
                if (!_cardLockApplied) {
                    const finalCards = document.querySelectorAll(selectorString);
                    applyCardLocks(finalCards, freeCount, section);
                }
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
            <span class="dv-counter-locked">${locked} locked 💜</span>
        </div>
        <a href="/pricing.html" class="dv-counter-btn">🔓 Unlock All</a>
        <div class="dv-counter-progress">
            <div class="dv-counter-progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;

    const insertTargets = [
        'main', '.content', '.content-wrapper',
        '.cards-container', '.card-grid',
        '.container', '.page-content', '#app', '#root',
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
// PREMIUM POPUP WITH BTS MESSAGES 💜
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
    const bts = getRandomBTSMessage();

    // Generate floating hearts
    const hearts = ['💜', '💜', '🤍', '💜', '✨', '💜', '🌍', '💜'];
    let heartsHTML = '<div class="dv-popup-hearts">';
    hearts.forEach((h, i) => {
        const left = 10 + Math.random() * 80;
        const delay = Math.random() * 3;
        const duration = 3 + Math.random() * 2;
        heartsHTML += `<span class="dv-popup-heart" style="left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s">${h}</span>`;
    });
    heartsHTML += '</div>';

    const popup = document.createElement('div');
    popup.id = 'dv-premium-popup';
    popup.innerHTML = `
        <div class="dv-popup-box">
            ${heartsHTML}
            <button class="dv-popup-close" onclick="this.closest('#dv-premium-popup').remove()">×</button>
            <span class="dv-popup-icon">💜</span>
            <p class="dv-popup-bts-title">${bts.title}</p>
            <p class="dv-popup-bts-subtitle">${bts.subtitle}</p>
            <h3>🔒 Premium Content</h3>
            <p class="dv-popup-item-name">"${cardName}"</p>
            <p>Unlock all <strong>${total}</strong> ${sectionName} and <strong>200+</strong> pages across Dharaverse with a Premium subscription.</p>
            <a href="/pricing.html" class="dv-popup-btn dv-popup-btn-buy">
                🌟 Get Premium — ${CONFIG.price}${CONFIG.period}
            </a>
            <a href="/auth.html" class="dv-popup-btn dv-popup-btn-close">
                Already subscribed? Log in 보라해 💜
            </a>
            <p class="dv-popup-counter">
                ${free} free • ${locked} locked in ${sectionName} 💜
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
// PAGE-LEVEL LOCKING
// ==========================================

function lockEntirePage() {
    document.body.classList.add('premium-page-locked');
    document.body.classList.remove('premium-verified');
    document.body.classList.remove('dv-card-lock-page');

    if (document.getElementById('premium-page-overlay')) return;

    const pageTitle = getPageTitle();
    const backLink = getBackLink();
    const bts = getRandomBTSMessage();

    const overlay = document.createElement('div');
    overlay.id = 'premium-page-overlay';
    overlay.innerHTML = `
        <div class="dv-page-lock-box">
            <div class="dv-page-lock-inner">
                <span class="dv-page-lock-icon">🔒</span>
                <span class="dv-page-premium-badge">★ PREMIUM CONTENT</span>
                <p class="dv-popup-bts-title">${bts.title}</p>
                <p class="dv-popup-bts-subtitle">${bts.subtitle}</p>
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
    _cardLockApplied = false;

    document.body.classList.remove('premium-page-locked');
    document.body.classList.remove('premium-locked');
    document.body.classList.remove('dv-card-lock-page');
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
        '%c✅ DHARAVERSE: Premium Verified — Full Access 보라해 💜',
        'color: #a78bfa; font-size: 14px; font-weight: bold; background: #1a0a2e; padding: 8px 16px; border-radius: 6px;'
    );
}

// ==========================================
// MAIN INIT
// ==========================================

function init() {
    // Inject lock CSS if not already loaded
    if (!document.querySelector('link[href*="premium-lock"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/css/premium-lock.css';
        document.head.appendChild(link);
    }

    const path = getPath();

    console.log(
        `%c🌍 Dharaverse Lock v4.0 💜 | ${path}`,
        'color: #a78bfa; font-size: 11px;'
    );

    const premium = isPremiumUser();

    if (premium) {
        unlockPage();
        return;
    }

    if (isFreePage(path)) {
        if (isCardLockPage(path)) {
            // FREE page with card-level locking
            document.body.classList.add('dv-card-lock-page');
            document.body.classList.remove('premium-verified');
            document.body.classList.remove('premium-page-locked');
            lockCards();
            console.log('%c🆓 FREE page with card locks 💜', 'color: #fbbf24;');
        } else {
            document.body.classList.add('premium-verified');
            console.log('%c🆓 FREE page 💜', 'color: #a78bfa;');
        }
        return;
    }

    lockEntirePage();
    console.log(
        '%c🔒 PAGE LOCKED — Premium Required 💜',
        'color: #a78bfa; font-size: 14px; font-weight: bold;'
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

// Re-check on full load — only if not already locked
window.addEventListener('load', () => {
    const path = getPath();
    if (isPremiumUser()) {
        unlockPage();
        return;
    }
    if (isCardLockPage(path) && !_cardLockApplied) {
        setTimeout(lockCards, 500);
        setTimeout(lockCards, 1500);
        setTimeout(lockCards, 3000);
    }
});

// ==========================================
// PUBLIC API
// ==========================================

window.DharaversePremium = {
    version: '4.0-bts',
    isLocked: () => document.body.classList.contains('premium-page-locked'),
    isPremium: isPremiumUser,
    check: init,
    getConfig: () => CONFIG,
    getBTSMessage: getRandomBTSMessage,

    setPremium: function (days) {
        const exp = new Date();
        exp.setDate(exp.getDate() + (days || 365));
        localStorage.setItem('dharaverse_premium', JSON.stringify({
            isPremium: true,
            expiryDate: exp.toISOString(),
            plan: 'test'
        }));
        unlockPage();
        return `✅ Premium set for ${days || 365} days 보라해 💜`;
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
            return '✅ Admin unlocked 보라해 💜';
        }
        return '❌ Invalid key';
    },

    setFreeCards: function (section, count) {
        CONFIG.freeCards[section] = count;
        return `✅ ${section}: ${count} free cards 💜`;
    }
};

})();
