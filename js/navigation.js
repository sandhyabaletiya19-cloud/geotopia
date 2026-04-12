// FILE: /js/navigation.js
// UNIVERSAL NAVIGATION SYSTEM FOR DHARAVERSE
// Include this in EVERY HTML file: <script src="/js/navigation.js"></script>

(function() {
    'use strict';

    // ============================================
    // SITE MAP - All pages and their relationships
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
    // RELATIONSHIPS - How pages connect
    // ============================================
    const RELATIONSHIPS = {
        asia: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['europe', 'australia', 'encyclopedia'],
            description: 'Largest continent with diverse geography'
        },
        africa: {
            landscapes: ['deserts', 'rivers', 'forests', 'mountains', 'lakes'],
            relatedPages: ['europe', 'asia', 'encyclopedia'],
            description: 'Continent of diverse landscapes and wildlife'
        },
        europe: {
            landscapes: ['mountains', 'rivers', 'forests', 'islands'],
            relatedPages: ['asia', 'africa', 'encyclopedia'],
            description: 'Continent of rich history and culture'
        },
        northAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['southAmerica', 'encyclopedia'],
            description: 'From Arctic to tropical landscapes'
        },
        southAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts'],
            relatedPages: ['northAmerica', 'encyclopedia'],
            description: 'Home to Amazon and Andes'
        },
        australia: {
            landscapes: ['deserts', 'coralReefs', 'forests', 'islands'],
            relatedPages: ['asia', 'antarctica', 'encyclopedia'],
            description: 'Island continent with unique ecology'
        },
        antarctica: {
            landscapes: ['mountains', 'oceans', 'volcanoes'],
            relatedPages: ['australia', 'southAmerica', 'encyclopedia'],
            description: 'Frozen continent at the South Pole'
        },
        mountains: {
            continents: ['asia', 'europe', 'northAmerica', 'southAmerica', 'africa', 'antarctica'],
            relatedLandscapes: ['rivers', 'forests', 'volcanoes', 'lakes'],
            description: 'Explore the world\'s greatest peaks'
        },
        rivers: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'forests', 'lakes', 'oceans'],
            description: 'Lifelines of civilization'
        },
        forests: {
            continents: ['southAmerica', 'africa', 'asia', 'northAmerica', 'europe', 'australia'],
            relatedLandscapes: ['mountains', 'rivers', 'lakes'],
            description: 'Lungs of the Earth'
        },
        deserts: {
            continents: ['africa', 'asia', 'australia', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'oceans'],
            description: 'World\'s most extreme arid landscapes'
        },
        oceans: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica', 'australia', 'antarctica'],
            relatedLandscapes: ['islands', 'coralReefs', 'rivers'],
            description: 'Covering 71% of Earth\'s surface'
        },
        volcanoes: {
            continents: ['asia', 'northAmerica', 'southAmerica', 'europe', 'antarctica'],
            relatedLandscapes: ['mountains', 'islands', 'oceans'],
            description: 'Earth\'s fiery geological wonders'
        },
        lakes: {
            continents: ['africa', 'northAmerica', 'asia', 'europe', 'southAmerica'],
            relatedLandscapes: ['mountains', 'rivers', 'forests'],
            description: 'Freshwater treasures of the world'
        },
        islands: {
            continents: ['asia', 'europe', 'northAmerica', 'australia'],
            relatedLandscapes: ['oceans', 'coralReefs', 'volcanoes'],
            description: 'Paradise lands surrounded by water'
        },
        coralReefs: {
            continents: ['australia', 'asia', 'northAmerica', 'africa'],
            relatedLandscapes: ['oceans', 'islands'],
            description: 'Underwater rainforests of the sea'
        }
    };

    // ============================================
    // DETECT CURRENT PAGE
    // ============================================
    function getCurrentPageKey() {
        const path = window.location.pathname;
        for (const [key, page] of Object.entries(SITE_MAP)) {
            if (path === page.path || path === page.path.replace('.html', '') || path.endsWith(page.path)) {
                return key;
            }
        }
        // Try partial match
        for (const [key, page] of Object.entries(SITE_MAP)) {
            if (path.includes(key.toLowerCase()) || path.includes(page.path.split('/').pop())) {
                return key;
            }
        }
        return 'home';
    }

    // ============================================
    // INJECT UNIVERSAL HEADER
    // ============================================
    function injectHeader() {
        const currentKey = getCurrentPageKey();
        const existingHeader = document.querySelector('header');

        const headerHTML = `
        <header class="dv-header" id="dv-header">
            <div class="dv-header-container">
                <a href="/" class="dv-logo">
                    <img src="/logo.png" alt="DharaVerse" class="dv-logo-img" onerror="this.style.display='none'">
                    <span class="dv-logo-text">DHARAVERSE</span>
                </a>

                <nav class="dv-nav-desktop">
                    <a href="/atlas/atlas.html" class="${currentKey === 'atlas' ? 'active' : ''}">
                        <span class="nav-icon">🗺️</span> Atlas
                    </a>
                    <div class="dv-dropdown">
                        <a href="/encyclopedia/encyclopedia.html" class="${['encyclopedia','mountains','rivers','forests','deserts','oceans','volcanoes','lakes','islands','coralReefs'].includes(currentKey) ? 'active' : ''}">
                            <span class="nav-icon">📖</span> Encyclopedia ▾
                        </a>
                        <div class="dv-dropdown-content">
                            <a href="/mountains/mountains.html">⛰️ Mountains</a>
                            <a href="/rivers/rivers.html">🏞️ Rivers</a>
                            <a href="/forests/forests.html">🌲 Forests</a>
                            <a href="/deserts/deserts.html">🏜️ Deserts</a>
                            <a href="/oceans/oceans.html">🌊 Oceans</a>
                            <a href="/volcanoes/volcanoes.html">🌋 Volcanoes</a>
                            <a href="/lakes/lakes.html">💧 Lakes</a>
                            <a href="/islands/islands.html">🏝️ Islands</a>
                            <a href="/coral-reefs/coral-reefs.html">🪸 Coral Reefs</a>
                            <div class="dv-dropdown-divider"></div>
                            <a href="/timeline.html">⏳ Earth Timeline</a>
                            <a href="/mystery.html">🔮 Mysteries</a>
                        </div>
                    </div>
                    <a href="/games/games.html" class="${currentKey === 'games' ? 'active' : ''}">
                        <span class="nav-icon">🎮</span> Games
                    </a>
                    <a href="/upsc/upsc.html" class="${currentKey === 'upsc' ? 'active' : ''}">
                        <span class="nav-icon">📚</span> UPSC
                    </a>
                    <a href="/contact.html" class="${currentKey === 'contact' ? 'active' : ''}">
                        <span class="nav-icon">📧</span> Contact
                    </a>
                </nav>

                <div class="dv-header-actions">
                    <button class="dv-search-btn" onclick="DharaVerseNav.toggleSearch()" aria-label="Search">
                        🔍
                    </button>
                    <button class="dv-theme-btn" onclick="DharaVerseNav.toggleTheme()" aria-label="Toggle theme">
                        🌙
                    </button>
                    <button class="dv-hamburger" onclick="DharaVerseNav.toggleMobileMenu()" aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <!-- Search Overlay -->
            <div class="dv-search-overlay" id="dv-search-overlay">
                <div class="dv-search-container">
                    <input type="text" id="dv-search-input" placeholder="Search DharaVerse... (countries, mountains, rivers...)" autocomplete="off">
                    <button onclick="DharaVerseNav.toggleSearch()">✕</button>
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
                    <a href="/contact.html">📧 Contact</a>
                </div>
            </div>
        </header>`;

        if (existingHeader) {
            existingHeader.outerHTML = headerHTML;
        } else {
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }
    }

    // ============================================
    // INJECT BREADCRUMBS
    // ============================================
    function injectBreadcrumbs() {
        const currentKey = getCurrentPageKey();
        if (currentKey === 'home') return;

        const currentPage = SITE_MAP[currentKey];
        if (!currentPage) return;

        const breadcrumbs = [{ title: 'Home', icon: '🏠', path: '/' }];

        // Add parent if exists
        if (currentPage.parent && SITE_MAP[currentPage.parent]) {
            const parent = SITE_MAP[currentPage.parent];
            breadcrumbs.push({ title: parent.title, icon: parent.icon, path: parent.path });
        }

        // Add section label
        if (currentPage.section === 'continent') {
            if (!breadcrumbs.find(b => b.title === 'World Atlas')) {
                breadcrumbs.push({ title: 'Continents', icon: '🌍', path: '/atlas/atlas.html' });
            }
        } else if (currentPage.section === 'landscape') {
            if (!breadcrumbs.find(b => b.title === 'Encyclopedia')) {
                breadcrumbs.push({ title: 'Encyclopedia', icon: '📖', path: '/encyclopedia/encyclopedia.html' });
            }
        }

        // Add current page
        breadcrumbs.push({ title: currentPage.title, icon: currentPage.icon, path: null });

        const breadcrumbHTML = `
        <nav class="dv-breadcrumbs" aria-label="Breadcrumb">
            <div class="dv-breadcrumbs-container">
                ${breadcrumbs.map((crumb, i) => {
                    if (i === breadcrumbs.length - 1) {
                        return `<span class="dv-breadcrumb-current">${crumb.icon} ${crumb.title}</span>`;
                    }
                    return `<a href="${crumb.path}" class="dv-breadcrumb-link">${crumb.icon} ${crumb.title}</a>
                            <span class="dv-breadcrumb-sep">›</span>`;
                }).join('')}
            </div>
        </nav>`;

        const header = document.getElementById('dv-header');
        if (header) {
            header.insertAdjacentHTML('afterend', breadcrumbHTML);
        }
    }

    // ============================================
    // INJECT RELATED PAGES SECTION
    // ============================================
    function injectRelatedPages() {
        const currentKey = getCurrentPageKey();
        const relations = RELATIONSHIPS[currentKey];
        if (!relations) return;

        let relatedHTML = `<section class="dv-related-section">
            <div class="dv-related-container">
                <h2 class="dv-related-title">🔗 Explore Related</h2>
                <div class="dv-related-grid">`;

        // Add continent links
        if (relations.continents) {
            relations.continents.forEach(key => {
                const page = SITE_MAP[key];
                if (page) {
                    relatedHTML += `
                    <a href="${page.path}" class="dv-related-card dv-related-continent">
                        <span class="dv-related-icon">${page.icon}</span>
                        <span class="dv-related-name">${page.title}</span>
                        <span class="dv-related-type">Continent</span>
                    </a>`;
                }
            });
        }

        // Add landscape links
        if (relations.landscapes) {
            relations.landscapes.forEach(key => {
                const page = SITE_MAP[key];
                if (page) {
                    relatedHTML += `
                    <a href="${page.path}" class="dv-related-card dv-related-landscape">
                        <span class="dv-related-icon">${page.icon}</span>
                        <span class="dv-related-name">${page.title}</span>
                        <span class="dv-related-type">Landscape</span>
                    </a>`;
                }
            });
        }

        // Add related landscapes
        if (relations.relatedLandscapes) {
            relations.relatedLandscapes.forEach(key => {
                const page = SITE_MAP[key];
                if (page) {
                    relatedHTML += `
                    <a href="${page.path}" class="dv-related-card dv-related-landscape">
                        <span class="dv-related-icon">${page.icon}</span>
                        <span class="dv-related-name">${page.title}</span>
                        <span class="dv-related-type">Related</span>
                    </a>`;
                }
            });
        }

        // Add related pages
        if (relations.relatedPages) {
            relations.relatedPages.forEach(key => {
                const page = SITE_MAP[key];
                if (page) {
                    relatedHTML += `
                    <a href="${page.path}" class="dv-related-card dv-related-page">
                        <span class="dv-related-icon">${page.icon}</span>
                        <span class="dv-related-name">${page.title}</span>
                        <span class="dv-related-type">Explore</span>
                    </a>`;
                }
            });
        }

        // Always add Games and Atlas links
        relatedHTML += `
                    <a href="/games/games.html" class="dv-related-card dv-related-action">
                        <span class="dv-related-icon">🎮</span>
                        <span class="dv-related-name">Test Knowledge</span>
                        <span class="dv-related-type">Games</span>
                    </a>
                    <a href="/atlas/atlas.html" class="dv-related-card dv-related-action">
                        <span class="dv-related-icon">🗺️</span>
                        <span class="dv-related-name">View on Map</span>
                        <span class="dv-related-type">Atlas</span>
                    </a>
                </div>
            </div>
        </section>`;

        // Insert before footer
        const footer = document.querySelector('footer') || document.querySelector('.dv-footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', relatedHTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', relatedHTML);
        }
    }

    // ============================================
    // INJECT UNIVERSAL FOOTER
    // ============================================
    function injectFooter() {
        const existingFooter = document.querySelector('footer');

        const footerHTML = `
        <footer class="dv-footer">
            <div class="dv-footer-main">
                <div class="dv-footer-brand">
                    <a href="/">
                        <img src="/logo.png" alt="DharaVerse" onerror="this.style.display='none'">
                        <span class="dv-footer-logo-text">DHARAVERSE</span>
                    </a>
                    <p>Your Gateway to Global Geography</p>
                    <div class="dv-footer-social">
                        <a href="https://www.youtube.com/@Kdiscovering" target="_blank" rel="noopener" aria-label="YouTube">📺</a>
                        <a href="https://www.instagram.com/keepdiscover11" target="_blank" rel="noopener" aria-label="Instagram">📸</a>
                        <a href="mailto:kdiscovering@gmail.com" aria-label="Email">📧</a>
                    </div>
                </div>

                <div class="dv-footer-links">
                    <h4>🧭 Explore</h4>
                    <a href="/atlas/atlas.html">World Atlas</a>
                    <a href="/games/games.html">Games</a>
                    <a href="/encyclopedia/encyclopedia.html">Encyclopedia</a>
                    <a href="/timeline.html">Earth Timeline</a>
                    <a href="/mystery.html">Mysteries</a>
                </div>

                <div class="dv-footer-links">
                    <h4>🌍 Continents</h4>
                    <a href="/asia.html">Asia</a>
                    <a href="/africa.html">Africa</a>
                    <a href="/europe.html">Europe</a>
                    <a href="/north-america.html">N. America</a>
                    <a href="/south-america.html">S. America</a>
                    <a href="/australia.html">Australia</a>
                    <a href="/antarctica.html">Antarctica</a>
                </div>

                <div class="dv-footer-links">
                    <h4>🏔️ Landscapes</h4>
                    <a href="/mountains/mountains.html">Mountains</a>
                    <a href="/rivers/rivers.html">Rivers</a>
                    <a href="/forests/forests.html">Forests</a>
                    <a href="/deserts/deserts.html">Deserts</a>
                    <a href="/oceans/oceans.html">Oceans</a>
                    <a href="/volcanoes/volcanoes.html">Volcanoes</a>
                    <a href="/lakes/lakes.html">Lakes</a>
                    <a href="/islands/islands.html">Islands</a>
                    <a href="/coral-reefs/coral-reefs.html">Coral Reefs</a>
                </div>

                <div class="dv-footer-links">
                    <h4>📚 Learn</h4>
                    <a href="/upsc/upsc.html">UPSC Prep</a>
                    <a href="/games/games.html">Geography Quiz</a>
                    <a href="/contact.html">Contact</a>
                    <a href="/legal/privacy-policy.html">Privacy Policy</a>
                    <a href="/legal/terms-and-conditions.html">Terms</a>
                </div>
            </div>

            <div class="dv-footer-bottom">
                <p>© 2025 DharaVerse. Made with 💜 by Rudhvee Baletiya</p>
                <p class="dv-footer-tagline">Discover Earth. Learn Geography. Explore the World.</p>
            </div>
        </footer>`;

        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // ============================================
    // INJECT MOBILE BOTTOM NAV
    // ============================================
    function injectMobileNav() {
        const currentKey = getCurrentPageKey();

        const mobileNavHTML = `
        <nav class="dv-mobile-bottom-nav" id="dv-mobile-bottom-nav">
            <a href="/atlas/atlas.html" class="dv-mob-nav-item ${currentKey === 'atlas' ? 'active' : ''}">
                <span class="dv-mob-nav-icon">🗺️</span>
                <span class="dv-mob-nav-label">Atlas</span>
            </a>
            <a href="/games/games.html" class="dv-mob-nav-item ${currentKey === 'games' ? 'active' : ''}">
                <span class="dv-mob-nav-icon">🎮</span>
                <span class="dv-mob-nav-label">Games</span>
            </a>
            <a href="/" class="dv-mob-nav-item dv-mob-nav-center ${currentKey === 'home' ? 'active' : ''}">
                <span class="dv-mob-nav-icon-center">🌍</span>
            </a>
            <a href="/upsc/upsc.html" class="dv-mob-nav-item ${currentKey === 'upsc' ? 'active' : ''}">
                <span class="dv-mob-nav-icon">📚</span>
                <span class="dv-mob-nav-label">UPSC</span>
            </a>
            <a href="/encyclopedia/encyclopedia.html" class="dv-mob-nav-item ${['encyclopedia','mountains','rivers','forests','deserts','oceans','volcanoes','lakes','islands','coralReefs'].includes(currentKey) ? 'active' : ''}">
                <span class="dv-mob-nav-icon">📖</span>
                <span class="dv-mob-nav-label">More</span>
            </a>
        </nav>`;

        // Remove existing mobile nav if any
        const existingMobileNav = document.querySelector('.mobile-bottom-nav, .dv-mobile-bottom-nav');
        if (existingMobileNav) existingMobileNav.remove();

        document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
    }

    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    const SEARCH_DATA = [];

    // Build search index from SITE_MAP
    for (const [key, page] of Object.entries(SITE_MAP)) {
        SEARCH_DATA.push({
            title: page.title,
            icon: page.icon,
            path: page.path,
            section: page.section,
            keywords: `${page.title} ${page.section} ${key}`.toLowerCase()
        });
    }

    // Add extra search entries for common queries
    const EXTRA_SEARCH = [
        { title: 'Mount Everest', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'everest highest mountain nepal tibet asia' },
        { title: 'Amazon River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'amazon river south america brazil longest' },
        { title: 'Sahara Desert', icon: '🏜️', path: '/deserts/deserts.html', keywords: 'sahara desert africa largest hot' },
        { title: 'Pacific Ocean', icon: '🌊', path: '/oceans/oceans.html', keywords: 'pacific ocean largest deepest' },
        { title: 'Great Barrier Reef', icon: '🪸', path: '/coral-reefs/coral-reefs.html', keywords: 'great barrier reef australia coral' },
        { title: 'Amazon Rainforest', icon: '🌲', path: '/forests/forests.html', keywords: 'amazon rainforest south america brazil' },
        { title: 'Ring of Fire', icon: '🌋', path: '/volcanoes/volcanoes.html', keywords: 'ring fire pacific volcanoes' },
        { title: 'Lake Baikal', icon: '💧', path: '/lakes/lakes.html', keywords: 'baikal lake russia deepest oldest' },
        { title: 'Maldives', icon: '🏝️', path: '/islands/islands.html', keywords: 'maldives islands indian ocean' },
        { title: 'Himalayas', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'himalayas mountain range asia nepal india' },
        { title: 'Nile River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'nile river africa egypt longest' },
        { title: 'Antarctica Ice', icon: '🧊', path: '/antarctica.html', keywords: 'antarctica ice south pole frozen' },
        { title: 'India', icon: '🇮🇳', path: '/asia.html', keywords: 'india asia south himalaya ganges' },
        { title: 'United States', icon: '🇺🇸', path: '/north-america.html', keywords: 'united states america usa north' },
        { title: 'Map Quiz', icon: '🎮', path: '/games/games.html', keywords: 'map quiz game play test' },
        { title: 'Flag Quiz', icon: '🏳️', path: '/games/games.html', keywords: 'flag quiz game countries' },
        { title: 'Capital Quiz', icon: '🏛️', path: '/games/games.html', keywords: 'capital city quiz countries game' },
    ];
    SEARCH_DATA.push(...EXTRA_SEARCH);

    function performSearch(query) {
        if (!query || query.length < 2) return [];
        const q = query.toLowerCase();
        return SEARCH_DATA.filter(item => item.keywords.includes(q)).slice(0, 10);
    }

    // ============================================
    // QUICK DISCOVERY PANEL (Floating Button)
    // ============================================
    function injectDiscoveryButton() {
        const discoveryHTML = `
        <div class="dv-discovery-fab" id="dv-discovery-fab" onclick="DharaVerseNav.toggleDiscovery()">
            🧭
        </div>
        <div class="dv-discovery-panel" id="dv-discovery-panel">
            <div class="dv-discovery-header">
                <h3>🧭 Quick Navigate</h3>
                <button onclick="DharaVerseNav.toggleDiscovery()">✕</button>
            </div>
            <div class="dv-discovery-content">
                <div class="dv-discovery-section">
                    <h4>🌍 Continents</h4>
                    <div class="dv-discovery-chips">
                        <a href="/asia.html" class="dv-chip">🌏 Asia</a>
                        <a href="/africa.html" class="dv-chip">🌍 Africa</a>
                        <a href="/europe.html" class="dv-chip">🌍 Europe</a>
                        <a href="/north-america.html" class="dv-chip">🌎 N.America</a>
                        <a href="/south-america.html" class="dv-chip">🌎 S.America</a>
                        <a href="/australia.html" class="dv-chip">🌏 Australia</a>
                        <a href="/antarctica.html" class="dv-chip">🧊 Antarctica</a>
                    </div>
                </div>
                <div class="dv-discovery-section">
                    <h4>🏔️ Landscapes</h4>
                    <div class="dv-discovery-chips">
                        <a href="/mountains/mountains.html" class="dv-chip">⛰️ Mountains</a>
                        <a href="/rivers/rivers.html" class="dv-chip">🏞️ Rivers</a>
                        <a href="/forests/forests.html" class="dv-chip">🌲 Forests</a>
                        <a href="/deserts/deserts.html" class="dv-chip">🏜️ Deserts</a>
                        <a href="/oceans/oceans.html" class="dv-chip">🌊 Oceans</a>
                        <a href="/volcanoes/volcanoes.html" class="dv-chip">🌋 Volcanoes</a>
                        <a href="/lakes/lakes.html" class="dv-chip">💧 Lakes</a>
                        <a href="/islands/islands.html" class="dv-chip">🏝️ Islands</a>
                        <a href="/coral-reefs/coral-reefs.html" class="dv-chip">🪸 Coral Reefs</a>
                    </div>
                </div>
                <div class="dv-discovery-section">
                    <h4>⚡ Quick Links</h4>
                    <div class="dv-discovery-chips">
                        <a href="/atlas/atlas.html" class="dv-chip">🗺️ Atlas</a>
                        <a href="/games/games.html" class="dv-chip">🎮 Games</a>
                        <a href="/upsc/upsc.html" class="dv-chip">📚 UPSC</a>
                        <a href="/timeline.html" class="dv-chip">⏳ Timeline</a>
                        <a href="/mystery.html" class="dv-chip">🔮 Mystery</a>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', discoveryHTML);
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.DharaVerseNav = {
        toggleSearch: function() {
            const overlay = document.getElementById('dv-search-overlay');
            const input = document.getElementById('dv-search-input');
            if (overlay) {
                overlay.classList.toggle('active');
                if (overlay.classList.contains('active')) {
                    setTimeout(() => input.focus(), 100);
                }
            }
        },

        toggleTheme: function() {
            const body = document.body;
            const isDark = body.classList.contains('dark-theme') || !body.classList.contains('light-theme');
            body.classList.toggle('dark-theme', !isDark);
            body.classList.toggle('light-theme', isDark);
            localStorage.setItem('dv-theme', isDark ? 'light' : 'dark');
            const btn = document.querySelector('.dv-theme-btn');
            if (btn) btn.textContent = isDark ? '☀️' : '🌙';
        },

        toggleMobileMenu: function() {
            const menu = document.getElementById('dv-mobile-menu');
            const hamburger = document.querySelector('.dv-hamburger');
            if (menu) {
                menu.classList.toggle('active');
                hamburger.classList.toggle('active');
            }
        },

        toggleDiscovery: function() {
            const panel = document.getElementById('dv-discovery-panel');
            const fab = document.getElementById('dv-discovery-fab');
            if (panel) {
                panel.classList.toggle('active');
                fab.classList.toggle('active');
            }
        },

        getSiteMap: function() { return SITE_MAP; },
        getRelationships: function() { return RELATIONSHIPS; },
        getCurrentPage: function() { return getCurrentPageKey(); }
    };

    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    function init() {
        // Apply saved theme
        const savedTheme = localStorage.getItem('dv-theme') || 'dark';
        document.body.classList.add(savedTheme + '-theme');

        // Inject all components
        injectHeader();
        injectBreadcrumbs();
        injectRelatedPages();
        injectFooter();
        injectMobileNav();
        injectDiscoveryButton();

        // Setup search
        const searchInput = document.getElementById('dv-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const results = performSearch(this.value);
                const container = document.getElementById('dv-search-results');
                if (container) {
                    if (results.length === 0 && this.value.length >= 2) {
                        container.innerHTML = '<div class="dv-search-empty">No results found</div>';
                    } else {
                        container.innerHTML = results.map(r => `
                            <a href="${r.path}" class="dv-search-result">
                                <span class="dv-search-result-icon">${r.icon}</span>
                                <span class="dv-search-result-title">${r.title}</span>
                                <span class="dv-search-result-section">${r.section}</span>
                            </a>
                        `).join('');
                    }
                }
            });
        }

        // Keyboard shortcut: Ctrl+K for search
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                DharaVerseNav.toggleSearch();
            }
            if (e.key === 'Escape') {
                const searchOverlay = document.getElementById('dv-search-overlay');
                const mobileMenu = document.getElementById('dv-mobile-menu');
                const discoveryPanel = document.getElementById('dv-discovery-panel');
                if (searchOverlay) searchOverlay.classList.remove('active');
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (discoveryPanel) discoveryPanel.classList.remove('active');
            }
        });

        // Add body padding for mobile nav
        document.body.style.paddingBottom = '70px';

        console.log('🌍 DharaVerse Navigation System Loaded');
        console.log(`📍 Current Page: ${getCurrentPageKey()}`);
    }

    // Run init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
