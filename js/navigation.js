// FILE: /js/navigation.js
// UNIVERSAL NAVIGATION SYSTEM FOR DHARAVERSE
// v2.0 - FIXED: Theme toggle + Clickable buttons

(function () {
    'use strict';

    // ============================================
    // SITE MAP
    // ============================================
    const SITE_MAP = {
        home: { path: '/', title: 'Home', icon: '🏠', section: 'main' },
        atlas: { path: '/atlas/atlas.html', title: 'World Atlas', icon: '🗺️', section: 'main' },
        games: { path: '/games/games.html', title: 'Games', icon: '🎮', section: 'main' },
        upsc: { path: '/upsc/upsc.html', title: 'UPSC Prep', icon: '📚', section: 'main' },
        encyclopedia: { path: '/encyclopedia/encyclopedia.html', title: 'Encyclopedia', icon: '📖', section: 'main' },
        contact: { path: '/contact.html', title: 'Contact', icon: '📧', section: 'main' },
        timeline: { path: '/timeline.html', title: 'Earth Timeline', icon: '⏳', section: 'explore' },
        mystery: { path: '/mystery.html', title: 'Mysteries', icon: '🔮', section: 'explore' },

        // Continents
        asia: { path: '/asia.html', title: 'Asia', icon: '🌏', section: 'continent', parent: 'atlas' },
        africa: { path: '/africa.html', title: 'Africa', icon: '🌍', section: 'continent', parent: 'atlas' },
        europe: { path: '/europe.html', title: 'Europe', icon: '🌍', section: 'continent', parent: 'atlas' },
        northAmerica: { path: '/north-america.html', title: 'North America', icon: '🌎', section: 'continent', parent: 'atlas' },
        southAmerica: { path: '/south-america.html', title: 'South America', icon: '🌎', section: 'continent', parent: 'atlas' },
        australia: { path: '/australia.html', title: 'Australia', icon: '🌏', section: 'continent', parent: 'atlas' },
        antarctica: { path: '/antarctica.html', title: 'Antarctica', icon: '🧊', section: 'continent', parent: 'atlas' },

        // Landscapes
        mountains: { path: '/mountains/mountains.html', title: 'Mountains', icon: '⛰️', section: 'landscape', parent: 'encyclopedia' },
        rivers: { path: '/rivers/rivers.html', title: 'Rivers', icon: '🏞️', section: 'landscape', parent: 'encyclopedia' },
        forests: { path: '/forests/forests.html', title: 'Forests', icon: '🌲', section: 'landscape', parent: 'encyclopedia' },
        deserts: { path: '/deserts/deserts.html', title: 'Deserts', icon: '🏜️', section: 'landscape', parent: 'encyclopedia' },
        oceans: { path: '/oceans/oceans.html', title: 'Oceans', icon: '🌊', section: 'landscape', parent: 'encyclopedia' },
        volcanoes: { path: '/volcanoes/volcanoes.html', title: 'Volcanoes', icon: '🌋', section: 'landscape', parent: 'encyclopedia' },
        lakes: { path: '/lakes/lakes.html', title: 'Lakes', icon: '💧', section: 'landscape', parent: 'encyclopedia' },
        islands: { path: '/islands/islands.html', title: 'Islands', icon: '🏝️', section: 'landscape', parent: 'encyclopedia' },
        coralReefs: { path: '/coral-reefs/coral-reefs.html', title: 'Coral Reefs', icon: '🪸', section: 'landscape', parent: 'encyclopedia' },

        // Legal
        privacy: { path: '/legal/privacy-policy.html', title: 'Privacy Policy', icon: '🔒', section: 'legal' },
        terms: { path: '/legal/terms-and-conditions.html', title: 'Terms & Conditions', icon: '📋', section: 'legal' }
    };

    // ============================================
    // RELATIONSHIPS
    // ============================================
    const RELATIONSHIPS = {
        asia: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['europe', 'australia', 'encyclopedia']
        },
        africa: {
            landscapes: ['deserts', 'rivers', 'forests', 'mountains', 'lakes'],
            relatedPages: ['europe', 'asia', 'encyclopedia']
        },
        europe: {
            landscapes: ['mountains', 'rivers', 'forests', 'islands'],
            relatedPages: ['asia', 'africa', 'encyclopedia']
        },
        northAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['southAmerica', 'encyclopedia']
        },
        southAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts'],
            relatedPages: ['northAmerica', 'encyclopedia']
        },
        australia: {
            landscapes: ['deserts', 'coralReefs', 'forests', 'islands'],
            relatedPages: ['asia', 'antarctica', 'encyclopedia']
        },
        antarctica: {
            landscapes: ['mountains', 'oceans', 'volcanoes'],
            relatedPages: ['australia', 'southAmerica', 'encyclopedia']
        },
        mountains: {
            continents: ['asia', 'europe', 'northAmerica', 'southAmerica', 'africa', 'antarctica'],
            relatedLandscapes: ['rivers', 'forests', 'volcanoes', 'lakes']
        },
        rivers: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'forests', 'lakes', 'oceans']
        },
        forests: {
            continents: ['southAmerica', 'africa', 'asia', 'northAmerica', 'europe', 'australia'],
            relatedLandscapes: ['mountains', 'rivers', 'lakes']
        },
        deserts: {
            continents: ['africa', 'asia', 'australia', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'oceans']
        },
        oceans: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica', 'australia', 'antarctica'],
            relatedLandscapes: ['islands', 'coralReefs', 'rivers']
        },
        volcanoes: {
            continents: ['asia', 'northAmerica', 'southAmerica', 'europe', 'antarctica'],
            relatedLandscapes: ['mountains', 'islands', 'oceans']
        },
        lakes: {
            continents: ['africa', 'northAmerica', 'asia', 'europe', 'southAmerica'],
            relatedLandscapes: ['mountains', 'rivers', 'forests']
        },
        islands: {
            continents: ['asia', 'europe', 'northAmerica', 'australia'],
            relatedLandscapes: ['oceans', 'coralReefs', 'volcanoes']
        },
        coralReefs: {
            continents: ['australia', 'asia', 'northAmerica', 'africa'],
            relatedLandscapes: ['oceans', 'islands']
        }
    };

    // ============================================
    // DETECT CURRENT PAGE
    // ============================================
    function getCurrentPageKey() {
        const path = window.location.pathname;

        // Exact match first
        for (const [key, page] of Object.entries(SITE_MAP)) {
            if (path === page.path || path === page.path.replace('.html', '')) {
                return key;
            }
        }

        // Partial match
        for (const [key, page] of Object.entries(SITE_MAP)) {
            const fileName = page.path.split('/').pop();
            if (path.includes(fileName)) {
                return key;
            }
        }

        // Check folder name
        for (const [key, page] of Object.entries(SITE_MAP)) {
            if (path.includes('/' + key.toLowerCase() + '/') || path.includes('/' + key.toLowerCase() + '.html')) {
                return key;
            }
        }

        return 'home';
    }

    // ============================================
    // THEME SYSTEM (FIXED)
    // ============================================
    function initTheme() {
        const saved = localStorage.getItem('dv-theme');

        if (saved === 'light') {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    }

    function applyTheme(theme) {
        const body = document.body;

        // Remove ALL possible theme classes (old + new)
        body.classList.remove(
            'dark-theme', 'light-theme',
            'dark-mode', 'light-mode',
            'dark', 'light',
            'theme-dark', 'theme-light'
        );

        // Remove old data attributes too
        body.removeAttribute('data-theme');

        // Apply new theme
        if (theme === 'light') {
            body.classList.add('light-theme');
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('dv-theme', 'light');
        } else {
            body.classList.add('dark-theme');
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('dv-theme', 'dark');
        }

        // Update button icon
        const btn = document.querySelector('.dv-theme-btn');
        if (btn) {
            btn.textContent = theme === 'light' ? '🌙' : '☀️';
            btn.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        }
    }

    function toggleTheme() {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    }

    // ============================================
    // INJECT HEADER (FIXED - all buttons clickable)
    // ============================================
    function injectHeader() {
        const currentKey = getCurrentPageKey();

        // Remove old header
        const oldHeader = document.querySelector('header:not(.dv-header)');
        if (oldHeader) oldHeader.remove();

        // Remove existing dv-header if re-injecting
        const existingDvHeader = document.querySelector('.dv-header');
        if (existingDvHeader) existingDvHeader.remove();

        const headerHTML = `
        <header class="dv-header" id="dv-header">
            <div class="dv-header-container">
                <a href="/" class="dv-logo">
                    <img src="/logo.png" alt="DharaVerse" class="dv-logo-img" onerror="this.style.display='none'">
                    <span class="dv-logo-text">DHARAVERSE</span>
                </a>

                <nav class="dv-nav-desktop" id="dv-nav-desktop">
                    <a href="/atlas/atlas.html" class="${currentKey === 'atlas' ? 'active' : ''}">
                        🗺️ Atlas
                    </a>
                    <a href="/games/games.html" class="${currentKey === 'games' ? 'active' : ''}">
                        🎮 Games
                    </a>
                    <a href="/upsc/upsc.html" class="${currentKey === 'upsc' ? 'active' : ''}">
                        📚 UPSC
                    </a>
                    <a href="/encyclopedia/encyclopedia.html" class="${['encyclopedia', 'mountains', 'rivers', 'forests', 'deserts', 'oceans', 'volcanoes', 'lakes', 'islands', 'coralReefs'].includes(currentKey) ? 'active' : ''}">
                        📖 Encyclopedia
                    </a>
                    <a href="/contact.html" class="${currentKey === 'contact' ? 'active' : ''}">
                        📧 Contact
                    </a>
                </nav>

                <div class="dv-header-actions">
                    <button type="button" class="dv-search-btn" id="dv-search-toggle" title="Search (Ctrl+K)">
                        🔍
                    </button>
                    <button type="button" class="dv-theme-btn" id="dv-theme-toggle" title="Toggle Theme">
                        ☀️
                    </button>
                    <button type="button" class="dv-hamburger" id="dv-hamburger-btn">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <!-- Search Overlay -->
            <div class="dv-search-overlay" id="dv-search-overlay">
                <div class="dv-search-container">
                    <input type="text" id="dv-search-input" placeholder="Search countries, mountains, rivers..." autocomplete="off">
                    <button type="button" id="dv-search-close">✕</button>
                </div>
                <div class="dv-search-results" id="dv-search-results"></div>
            </div>

            <!-- Mobile Menu -->
            <div class="dv-mobile-menu" id="dv-mobile-menu">
                <div class="dv-mobile-menu-section">
                    <h3>🧭 Navigate</h3>
                    <a href="/">🏠 Home</a>
                    <a href="/atlas/atlas.html">🗺️ World Atlas</a>
                    <a href="/games/games.html">🎮 Games</a>
                    <a href="/upsc/upsc.html">📚 UPSC Prep</a>
                    <a href="/encyclopedia/encyclopedia.html">📖 Encyclopedia</a>
                    <a href="/contact.html">📧 Contact</a>
                </div>
                <div class="dv-mobile-menu-section">
                    <h3>🌍 Continents</h3>
                    <a href="/asia.html">🌏 Asia</a>
                    <a href="/africa.html">🌍 Africa</a>
                    <a href="/europe.html">🌍 Europe</a>
                    <a href="/north-america.html">🌎 North America</a>
                    <a href="/south-america.html">🌎 South America</a>
                    <a href="/australia.html">🌏 Australia</a>
                    <a href="/antarctica.html">🧊 Antarctica</a>
                </div>
                <div class="dv-mobile-menu-section">
                    <h3>🏔️ Landscapes</h3>
                    <a href="/mountains/mountains.html">⛰️ Mountains</a>
                    <a href="/rivers/rivers.html">🏞️ Rivers</a>
                    <a href="/forests/forests.html">🌲 Forests</a>
                    <a href="/deserts/deserts.html">🏜️ Deserts</a>
                    <a href="/oceans/oceans.html">🌊 Oceans</a>
                    <a href="/volcanoes/volcanoes.html">🌋 Volcanoes</a>
                    <a href="/lakes/lakes.html">💧 Lakes</a>
                    <a href="/islands/islands.html">🏝️ Islands</a>
                    <a href="/coral-reefs/coral-reefs.html">🪸 Coral Reefs</a>
                </div>
                <div class="dv-mobile-menu-section">
                    <h3>🔍 Discover</h3>
                    <a href="/timeline.html">⏳ Earth Timeline</a>
                    <a href="/mystery.html">🔮 Mysteries</a>
                </div>
            </div>
        </header>`;

        document.body.insertAdjacentHTML('afterbegin', headerHTML);

        // ============================================
        // ATTACH EVENT LISTENERS (FIXED - no onclick)
        // ============================================

        // Theme Toggle
        const themeBtn = document.getElementById('dv-theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
            });
        }

        // Search Toggle
        const searchBtn = document.getElementById('dv-search-toggle');
        if (searchBtn) {
            searchBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleSearch();
            });
        }

        // Search Close
        const searchClose = document.getElementById('dv-search-close');
        if (searchClose) {
            searchClose.addEventListener('click', function (e) {
                e.preventDefault();
                toggleSearch();
            });
        }

        // Hamburger
        const hamburgerBtn = document.getElementById('dv-hamburger-btn');
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });
        }

        // Search Input
        const searchInput = document.getElementById('dv-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                const results = performSearch(this.value);
                const container = document.getElementById('dv-search-results');
                if (!container) return;

                if (results.length === 0 && this.value.length >= 2) {
                    container.innerHTML = '<div class="dv-search-empty">No results found. Try different keywords.</div>';
                } else if (results.length > 0) {
                    container.innerHTML = results.map(function (r) {
                        return '<a href="' + r.path + '" class="dv-search-result">' +
                            '<span class="dv-search-result-icon">' + r.icon + '</span>' +
                            '<span class="dv-search-result-title">' + r.title + '</span>' +
                            '<span class="dv-search-result-section">' + r.section + '</span>' +
                            '</a>';
                    }).join('');
                } else {
                    container.innerHTML = '';
                }
            });
        }
    }

    // ============================================
    // TOGGLE FUNCTIONS
    // ============================================
    function toggleSearch() {
        var overlay = document.getElementById('dv-search-overlay');
        if (!overlay) return;
        var isActive = overlay.classList.contains('active');
        overlay.classList.toggle('active');

        if (!isActive) {
            var input = document.getElementById('dv-search-input');
            if (input) {
                setTimeout(function () { input.focus(); }, 150);
            }
        }

        // Close mobile menu if open
        var mobileMenu = document.getElementById('dv-mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
    }

    function toggleMobileMenu() {
        var menu = document.getElementById('dv-mobile-menu');
        var hamburger = document.getElementById('dv-hamburger-btn');
        if (menu) menu.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');

        // Close search if open
        var searchOverlay = document.getElementById('dv-search-overlay');
        if (searchOverlay) searchOverlay.classList.remove('active');
    }

    // ============================================
    // SEARCH
    // ============================================
    var SEARCH_DATA = [];

    // Build from site map
    for (var key in SITE_MAP) {
        if (SITE_MAP.hasOwnProperty(key)) {
            var page = SITE_MAP[key];
            SEARCH_DATA.push({
                title: page.title,
                icon: page.icon,
                path: page.path,
                section: page.section,
                keywords: (page.title + ' ' + page.section + ' ' + key).toLowerCase()
            });
        }
    }

    // Extra search entries
    var extras = [
        { title: 'Mount Everest', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'everest highest mountain nepal' },
        { title: 'Amazon River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'amazon river south america brazil' },
        { title: 'Sahara Desert', icon: '🏜️', path: '/deserts/deserts.html', keywords: 'sahara desert africa largest' },
        { title: 'Pacific Ocean', icon: '🌊', path: '/oceans/oceans.html', keywords: 'pacific ocean largest deepest' },
        { title: 'Great Barrier Reef', icon: '🪸', path: '/coral-reefs/coral-reefs.html', keywords: 'great barrier reef australia coral' },
        { title: 'Himalayas', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'himalayas mountain asia nepal india' },
        { title: 'Nile River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'nile river africa egypt longest' },
        { title: 'Map Quiz', icon: '🎮', path: '/games/games.html', keywords: 'map quiz game play' },
        { title: 'Flag Quiz', icon: '🏳️', path: '/games/games.html', keywords: 'flag quiz game countries' },
        { title: 'India', icon: '🇮🇳', path: '/asia.html', keywords: 'india asia country' },
        { title: 'United States', icon: '🇺🇸', path: '/north-america.html', keywords: 'usa united states america' }
    ];

    for (var i = 0; i < extras.length; i++) {
        extras[i].section = 'search';
        SEARCH_DATA.push(extras[i]);
    }

    function performSearch(query) {
        if (!query || query.length < 2) return [];
        var q = query.toLowerCase();
        var results = [];
        for (var i = 0; i < SEARCH_DATA.length; i++) {
            if (SEARCH_DATA[i].keywords.indexOf(q) !== -1) {
                results.push(SEARCH_DATA[i]);
            }
            if (results.length >= 8) break;
        }
        return results;
    }

    // ============================================
    // INJECT BREADCRUMBS
    // ============================================
    function injectBreadcrumbs() {
        var currentKey = getCurrentPageKey();
        if (currentKey === 'home') return;

        var currentPage = SITE_MAP[currentKey];
        if (!currentPage) return;

        // Remove old breadcrumbs
        var oldBread = document.querySelector('.dv-breadcrumbs');
        if (oldBread) oldBread.remove();

        var crumbs = [{ title: 'Home', icon: '🏠', path: '/' }];

        if (currentPage.parent && SITE_MAP[currentPage.parent]) {
            var parent = SITE_MAP[currentPage.parent];
            crumbs.push({ title: parent.title, icon: parent.icon, path: parent.path });
        }

        crumbs.push({ title: currentPage.title, icon: currentPage.icon, path: null });

        var html = '<nav class="dv-breadcrumbs"><div class="dv-breadcrumbs-container">';
        for (var i = 0; i < crumbs.length; i++) {
            if (i === crumbs.length - 1) {
                html += '<span class="dv-breadcrumb-current">' + crumbs[i].icon + ' ' + crumbs[i].title + '</span>';
            } else {
                html += '<a href="' + crumbs[i].path + '" class="dv-breadcrumb-link">' + crumbs[i].icon + ' ' + crumbs[i].title + '</a>';
                html += '<span class="dv-breadcrumb-sep">›</span>';
            }
        }
        html += '</div></nav>';

        var header = document.getElementById('dv-header');
        if (header) {
            header.insertAdjacentHTML('afterend', html);
        }
    }

    // ============================================
    // INJECT RELATED PAGES
    // ============================================
    function injectRelatedPages() {
        var currentKey = getCurrentPageKey();
        var relations = RELATIONSHIPS[currentKey];
        if (!relations) return;

        // Remove old related section
        var oldRelated = document.querySelector('.dv-related-section');
        if (oldRelated) oldRelated.remove();

        var html = '<section class="dv-related-section"><div class="dv-related-container">';
        html += '<h2 class="dv-related-title">🔗 Explore Related</h2>';
        html += '<div class="dv-related-grid">';

        function addCards(keys, type) {
            if (!keys) return;
            for (var i = 0; i < keys.length; i++) {
                var page = SITE_MAP[keys[i]];
                if (page) {
                    html += '<a href="' + page.path + '" class="dv-related-card dv-related-' + type + '">';
                    html += '<span class="dv-related-icon">' + page.icon + '</span>';
                    html += '<span class="dv-related-name">' + page.title + '</span>';
                    html += '<span class="dv-related-type">' + type + '</span>';
                    html += '</a>';
                }
            }
        }

        addCards(relations.continents, 'continent');
        addCards(relations.landscapes, 'landscape');
        addCards(relations.relatedLandscapes, 'landscape');
        addCards(relations.relatedPages, 'explore');

        // Always add Games + Atlas
        html += '<a href="/games/games.html" class="dv-related-card dv-related-action">';
        html += '<span class="dv-related-icon">🎮</span>';
        html += '<span class="dv-related-name">Test Knowledge</span>';
        html += '<span class="dv-related-type">Games</span></a>';

        html += '<a href="/atlas/atlas.html" class="dv-related-card dv-related-action">';
        html += '<span class="dv-related-icon">🗺️</span>';
        html += '<span class="dv-related-name">View on Map</span>';
        html += '<span class="dv-related-type">Atlas</span></a>';

        html += '</div></div></section>';

        var footer = document.querySelector('footer') || document.querySelector('.dv-footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', html);
        } else {
            document.body.insertAdjacentHTML('beforeend', html);
        }
    }

    // ============================================
    // INJECT FOOTER
    // ============================================
    function injectFooter() {
        // Remove old footer
        var oldFooter = document.querySelector('footer:not(.dv-footer)');
        if (oldFooter) oldFooter.remove();

        var existingDvFooter = document.querySelector('.dv-footer');
        if (existingDvFooter) existingDvFooter.remove();

        var html = '<footer class="dv-footer">';
        html += '<div class="dv-footer-main">';

        // Brand
        html += '<div class="dv-footer-brand">';
        html += '<a href="/"><img src="/logo.png" alt="DharaVerse" onerror="this.style.display=\'none\'">';
        html += '<span class="dv-footer-logo-text">DHARAVERSE</span></a>';
        html += '<p>Your Gateway to Global Geography</p>';
        html += '<div class="dv-footer-social">';
        html += '<a href="https://www.youtube.com/@Kdiscovering" target="_blank" rel="noopener">📺</a>';
        html += '<a href="https://www.instagram.com/keepdiscover11" target="_blank" rel="noopener">📸</a>';
        html += '<a href="mailto:kdiscovering@gmail.com">📧</a>';
        html += '</div></div>';

        // Explore
        html += '<div class="dv-footer-links"><h4>🧭 Explore</h4>';
        html += '<a href="/atlas/atlas.html">World Atlas</a>';
        html += '<a href="/games/games.html">Games</a>';
        html += '<a href="/encyclopedia/encyclopedia.html">Encyclopedia</a>';
        html += '<a href="/timeline.html">Earth Timeline</a>';
        html += '<a href="/mystery.html">Mysteries</a></div>';

        // Continents
        html += '<div class="dv-footer-links"><h4>🌍 Continents</h4>';
        html += '<a href="/asia.html">Asia</a>';
        html += '<a href="/africa.html">Africa</a>';
        html += '<a href="/europe.html">Europe</a>';
        html += '<a href="/north-america.html">N. America</a>';
        html += '<a href="/south-america.html">S. America</a>';
        html += '<a href="/australia.html">Australia</a>';
        html += '<a href="/antarctica.html">Antarctica</a></div>';

        // Landscapes
        html += '<div class="dv-footer-links"><h4>🏔️ Landscapes</h4>';
        html += '<a href="/mountains/mountains.html">Mountains</a>';
        html += '<a href="/rivers/rivers.html">Rivers</a>';
        html += '<a href="/forests/forests.html">Forests</a>';
        html += '<a href="/deserts/deserts.html">Deserts</a>';
        html += '<a href="/oceans/oceans.html">Oceans</a>';
        html += '<a href="/volcanoes/volcanoes.html">Volcanoes</a>';
        html += '<a href="/lakes/lakes.html">Lakes</a>';
        html += '<a href="/islands/islands.html">Islands</a>';
        html += '<a href="/coral-reefs/coral-reefs.html">Coral Reefs</a></div>';

        // Learn
        html += '<div class="dv-footer-links"><h4>📚 Learn</h4>';
        html += '<a href="/upsc/upsc.html">UPSC Prep</a>';
        html += '<a href="/contact.html">Contact</a>';
        html += '<a href="/legal/privacy-policy.html">Privacy Policy</a>';
        html += '<a href="/legal/terms-and-conditions.html">Terms</a></div>';

        html += '</div>'; // footer-main

        html += '<div class="dv-footer-bottom">';
        html += '<p>© 2025 DharaVerse. Made with 💜 by Rudhvee Baletiya</p>';
        html += '<p class="dv-footer-tagline">Discover Earth. Learn Geography. Explore the World.</p>';
        html += '</div></footer>';

        document.body.insertAdjacentHTML('beforeend', html);
    }

    // ============================================
    // INJECT MOBILE BOTTOM NAV
    // ============================================
    function injectMobileNav() {
        var currentKey = getCurrentPageKey();

        // Remove old mobile nav
        var oldNav = document.querySelector('.mobile-bottom-nav');
        if (oldNav) oldNav.remove();
        var oldDvNav = document.querySelector('.dv-mobile-bottom-nav');
        if (oldDvNav) oldDvNav.remove();

        var html = '<nav class="dv-mobile-bottom-nav" id="dv-mobile-bottom-nav">';

        var items = [
            { href: '/atlas/atlas.html', icon: '🗺️', label: 'Atlas', key: 'atlas' },
            { href: '/games/games.html', icon: '🎮', label: 'Games', key: 'games' },
            { href: '/', icon: '🌍', label: '', key: 'home', center: true },
            { href: '/upsc/upsc.html', icon: '📚', label: 'UPSC', key: 'upsc' },
            { href: '/encyclopedia/encyclopedia.html', icon: '📖', label: 'More', key: 'encyclopedia' }
        ];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var activeClass = currentKey === item.key ? ' active' : '';

            if (item.center) {
                html += '<a href="' + item.href + '" class="dv-mob-nav-item dv-mob-nav-center' + activeClass + '">';
                html += '<span class="dv-mob-nav-icon-center">' + item.icon + '</span>';
                html += '</a>';
            } else {
                html += '<a href="' + item.href + '" class="dv-mob-nav-item' + activeClass + '">';
                html += '<span class="dv-mob-nav-icon">' + item.icon + '</span>';
                html += '<span class="dv-mob-nav-label">' + item.label + '</span>';
                html += '</a>';
            }
        }

        html += '</nav>';
        document.body.insertAdjacentHTML('beforeend', html);
    }

    // ============================================
    // INJECT DISCOVERY FAB
    // ============================================
    function injectDiscoveryButton() {
        // Remove old
        var oldFab = document.getElementById('dv-discovery-fab');
        if (oldFab) oldFab.remove();
        var oldPanel = document.getElementById('dv-discovery-panel');
        if (oldPanel) oldPanel.remove();

        var html = '<div class="dv-discovery-fab" id="dv-discovery-fab">🧭</div>';

        html += '<div class="dv-discovery-panel" id="dv-discovery-panel">';
        html += '<div class="dv-discovery-header"><h3>🧭 Quick Navigate</h3>';
        html += '<button type="button" id="dv-discovery-close">✕</button></div>';
        html += '<div class="dv-discovery-content">';

        html += '<div class="dv-discovery-section"><h4>🌍 Continents</h4><div class="dv-discovery-chips">';
        html += '<a href="/asia.html" class="dv-chip">🌏 Asia</a>';
        html += '<a href="/africa.html" class="dv-chip">🌍 Africa</a>';
        html += '<a href="/europe.html" class="dv-chip">🌍 Europe</a>';
        html += '<a href="/north-america.html" class="dv-chip">🌎 N.America</a>';
        html += '<a href="/south-america.html" class="dv-chip">🌎 S.America</a>';
        html += '<a href="/australia.html" class="dv-chip">🌏 Australia</a>';
        html += '<a href="/antarctica.html" class="dv-chip">🧊 Antarctica</a>';
        html += '</div></div>';

        html += '<div class="dv-discovery-section"><h4>🏔️ Landscapes</h4><div class="dv-discovery-chips">';
        html += '<a href="/mountains/mountains.html" class="dv-chip">⛰️ Mountains</a>';
        html += '<a href="/rivers/rivers.html" class="dv-chip">🏞️ Rivers</a>';
        html += '<a href="/forests/forests.html" class="dv-chip">🌲 Forests</a>';
        html += '<a href="/deserts/deserts.html" class="dv-chip">🏜️ Deserts</a>';
        html += '<a href="/oceans/oceans.html" class="dv-chip">🌊 Oceans</a>';
        html += '<a href="/volcanoes/volcanoes.html" class="dv-chip">🌋 Volcanoes</a>';
        html += '<a href="/lakes/lakes.html" class="dv-chip">💧 Lakes</a>';
        html += '<a href="/islands/islands.html" class="dv-chip">🏝️ Islands</a>';
        html += '<a href="/coral-reefs/coral-reefs.html" class="dv-chip">🪸 Reefs</a>';
        html += '</div></div>';

        html += '<div class="dv-discovery-section"><h4>⚡ Quick</h4><div class="dv-discovery-chips">';
        html += '<a href="/atlas/atlas.html" class="dv-chip">🗺️ Atlas</a>';
        html += '<a href="/games/games.html" class="dv-chip">🎮 Games</a>';
        html += '<a href="/upsc/upsc.html" class="dv-chip">📚 UPSC</a>';
        html += '<a href="/timeline.html" class="dv-chip">⏳ Timeline</a>';
        html += '<a href="/mystery.html" class="dv-chip">🔮 Mystery</a>';
        html += '</div></div>';

        html += '</div></div>';

        document.body.insertAdjacentHTML('beforeend', html);

        // Attach events
        var fab = document.getElementById('dv-discovery-fab');
        if (fab) {
            fab.addEventListener('click', function (e) {
                e.preventDefault();
                toggleDiscovery();
            });
        }

        var closeBtn = document.getElementById('dv-discovery-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                toggleDiscovery();
            });
        }
    }

    function toggleDiscovery() {
        var panel = document.getElementById('dv-discovery-panel');
        var fab = document.getElementById('dv-discovery-fab');
        if (panel) panel.classList.toggle('active');
        if (fab) fab.classList.toggle('active');
    }

    // ============================================
    // KEYBOARD SHORTCUTS
    // ============================================
    function setupKeyboard() {
        document.addEventListener('keydown', function (e) {
            // Ctrl+K = Search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }

            // Escape = Close everything
            if (e.key === 'Escape') {
                var search = document.getElementById('dv-search-overlay');
                var menu = document.getElementById('dv-mobile-menu');
                var discovery = document.getElementById('dv-discovery-panel');
                var fab = document.getElementById('dv-discovery-fab');
                var hamburger = document.getElementById('dv-hamburger-btn');

                if (search) search.classList.remove('active');
                if (menu) menu.classList.remove('active');
                if (discovery) discovery.classList.remove('active');
                if (fab) fab.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    }

    // ============================================
    // INITIALIZE
    // ============================================
    function init() {
        // Apply theme FIRST (before anything renders)
        initTheme();

        // Inject components
        injectHeader();
        injectBreadcrumbs();
        injectRelatedPages();
        injectFooter();
        injectMobileNav();
        injectDiscoveryButton();
        setupKeyboard();

        // Re-apply theme after header is injected (updates button)
        var saved = localStorage.getItem('dv-theme') || 'dark';
        applyTheme(saved);

        console.log('🌍 DharaVerse Nav v2.0 Loaded');
        console.log('📍 Current: ' + getCurrentPageKey());
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
