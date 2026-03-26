/* ============================================
   MOUNTAINS EXPLORER - MAIN APPLICATION
   Complete JavaScript Application Logic
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        storageKeys: {
            theme: 'mountains-theme',
            snow: 'mountains-snow',
            quickFacts: 'mountains-quickfacts'
        },
        animationDuration: 400,
        searchDebounce: 300,
        mapDefaults: {
            zoom: 8,
            maxZoom: 18,
            minZoom: 3
        },
        flagBaseUrl: 'https://flagcdn.com/w40/',
        imageBaseUrl: 'https://images.unsplash.com/',
        tileLayers: {
            terrain: {
                url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                attribution: '© OpenTopoMap contributors'
            },
            satellite: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                attribution: '© Esri'
            },
            topo: {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '© OpenStreetMap contributors'
            }
        }
    };

    // ============================================
    // STATE MANAGEMENT
    // ============================================
    const State = {
        mountains: [],
        filteredMountains: [],
        currentMountain: null,
        map: null,
        summitMap: null,
        currentLayer: 'terrain',
        markers: {
            peak: null,
            baseCamps: [],
            routes: [],
            glaciers: [],
            nearbyPeaks: [],
            cities: []
        },
        filters: {
            search: '',
            category: 'all',
            continent: 'all',
            range: 'all',
            sort: 'elevation-desc'
        },
        ui: {
            isNightMode: false,
            isSnowEnabled: true,
            isQuickFactsExpanded: false,
            activeTab: 'overview'
        }
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    const Utils = {
        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Format number with commas
        formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Convert meters to feet
        metersToFeet(meters) {
            return Math.round(meters * 3.28084);
        },

        // Get URL parameter
        getUrlParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },

        // Set URL parameter
        setUrlParam(param, value) {
            const url = new URL(window.location);
            url.searchParams.set(param, value);
            window.history.pushState({}, '', url);
        },

        // Get country flag URL
        getFlagUrl(countryCode) {
            return `${CONFIG.flagBaseUrl}${countryCode.toLowerCase()}.png`;
        },

        // Safely get nested property
        getNestedValue(obj, path, defaultValue = '') {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj) || defaultValue;
        },

        // Generate unique ID
        generateId() {
            return Math.random().toString(36).substr(2, 9);
        },

        // Local storage helpers
        storage: {
            get(key, defaultValue = null) {
                try {
                    const item = localStorage.getItem(key);
                    return item ? JSON.parse(item) : defaultValue;
                } catch (e) {
                    return defaultValue;
                }
            },
            set(key, value) {
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                } catch (e) {
                    console.warn('LocalStorage not available');
                }
            }
        },

        // Animate element
        animate(element, keyframes, options = {}) {
            const defaultOptions = {
                duration: CONFIG.animationDuration,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                fill: 'forwards'
            };
            return element.animate(keyframes, { ...defaultOptions, ...options });
        }
    };

    // ============================================
    // DOM ELEMENTS CACHE
    // ============================================
    const Elements = {
        // Main page elements
        mountainsGrid: null,
        searchInput: null,
        clearSearch: null,
        filterButtons: null,
        continentFilter: null,
        rangeFilter: null,
        sortFilter: null,
        activeFilters: null,
        visibleCount: null,
        totalCount: null,
        resetFilters: null,
        emptyReset: null,
        loadingState: null,
        emptyState: null,
        scrollTopBtn: null,
        snowToggle: null,
        themeToggle: null,
        snowfallContainer: null,

        // Profile page elements
        profileBackground: null,
        backgroundImage: null,
        mountainTitle: null,
        localNames: null,
        rankBadge: null,
        countryFlags: null,
        elevationValue: null,
        elevationFeet: null,
        rangeBadge: null,
        specialBadges: null,
        summitViewBtn: null,
        mountainMap: null,
        mapControls: null,
        mapToggles: null,
        resetMapView: null,
        infoTabs: null,
        tabPanels: null,
        infoCards: null,
        quickFactsPanel: null,
        quickFactsToggle: null,
        summitModal: null,
        summitClose: null,
        summitMap: null,
        returnOverviewBtn: null,
        galleryModal: null,
        galleryClose: null,
        loadingOverlay: null,
        fullscreenToggle: null,

        // Initialize elements based on page
        init() {
            const isMainPage = document.body.classList.contains('mountains-main-page');
            const isProfilePage = document.body.classList.contains('mountains-profile-page');

            // Common elements
            this.snowToggle = document.getElementById('snowToggle');
            this.themeToggle = document.getElementById('themeToggle');
            this.snowfallContainer = document.getElementById('snowfallContainer');

            if (isMainPage) {
                this.initMainPageElements();
            }

            if (isProfilePage) {
                this.initProfilePageElements();
            }
        },

        initMainPageElements() {
            this.mountainsGrid = document.getElementById('mountainsGrid');
            this.searchInput = document.getElementById('searchInput');
            this.clearSearch = document.getElementById('clearSearch');
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.continentFilter = document.getElementById('continentFilter');
            this.rangeFilter = document.getElementById('rangeFilter');
            this.sortFilter = document.getElementById('sortFilter');
            this.activeFilters = document.getElementById('activeFilters');
            this.visibleCount = document.getElementById('visibleCount');
            this.totalCount = document.getElementById('totalCount');
            this.resetFilters = document.getElementById('resetFilters');
            this.emptyReset = document.getElementById('emptyReset');
            this.loadingState = document.getElementById('loadingState');
            this.emptyState = document.getElementById('emptyState');
            this.scrollTopBtn = document.getElementById('scrollTopBtn');
        },

        initProfilePageElements() {
            this.profileBackground = document.getElementById('profileBackground');
            this.backgroundImage = document.getElementById('backgroundImage');
            this.mountainTitle = document.getElementById('mountainTitle');
            this.localNames = document.getElementById('localNames');
            this.rankBadge = document.getElementById('rankBadge');
            this.countryFlags = document.getElementById('countryFlags');
            this.elevationValue = document.getElementById('elevationValue');
            this.elevationFeet = document.getElementById('elevationFeet');
            this.rangeBadge = document.getElementById('rangeBadge');
            this.specialBadges = document.getElementById('specialBadges');
            this.summitViewBtn = document.getElementById('summitViewBtn');
            this.mountainMap = document.getElementById('mountainMap');
            this.mapControls = document.querySelectorAll('.map-control-btn');
            this.resetMapView = document.getElementById('resetMapView');
            this.infoTabs = document.querySelectorAll('.info-tab');
            this.tabPanels = document.querySelectorAll('.tab-panel');
            this.infoCards = document.querySelectorAll('.info-card.expandable');
            this.quickFactsPanel = document.getElementById('quickFactsPanel');
            this.quickFactsToggle = document.getElementById('quickFactsToggle');
            this.summitModal = document.getElementById('summitModal');
            this.summitClose = document.getElementById('summitClose');
            this.summitMapEl = document.getElementById('summitMap');
            this.returnOverviewBtn = document.getElementById('returnOverviewBtn');
            this.galleryModal = document.getElementById('galleryModal');
            this.galleryClose = document.getElementById('galleryClose');
            this.loadingOverlay = document.getElementById('loadingOverlay');
            this.fullscreenToggle = document.getElementById('fullscreenToggle');
        }
    };

    // ============================================
    // MAIN PAGE CONTROLLER
    // ============================================
    const MainPageController = {
        init() {
            this.loadMountains();
            this.bindEvents();
            this.loadSavedPreferences();
            this.hideLoading();
        },

        loadMountains() {
            // Mountains data is loaded from external files and combined in mountains-data.js
            if (typeof window.MOUNTAINS_DATA !== 'undefined') {
                State.mountains = window.MOUNTAINS_DATA;
                State.filteredMountains = [...State.mountains];
                this.renderMountains();
                this.updateCounts();
            } else {
                console.error('Mountains data not loaded');
                this.showEmpty();
            }
        },

        bindEvents() {
            // Search
            if (Elements.searchInput) {
                Elements.searchInput.addEventListener('input', 
                    Utils.debounce(() => this.handleSearch(), CONFIG.searchDebounce)
                );
            }

            // Clear search
            if (Elements.clearSearch) {
                Elements.clearSearch.addEventListener('click', () => {
                    Elements.searchInput.value = '';
                    State.filters.search = '';
                    this.applyFilters();
                });
            }

            // Category filter buttons
            if (Elements.filterButtons) {
                Elements.filterButtons.forEach(btn => {
                    btn.addEventListener('click', () => this.handleCategoryFilter(btn));
                });
            }

            // Dropdown filters
            if (Elements.continentFilter) {
                Elements.continentFilter.addEventListener('change', (e) => {
                    State.filters.continent = e.target.value;
                    this.applyFilters();
                });
            }

            if (Elements.rangeFilter) {
                Elements.rangeFilter.addEventListener('change', (e) => {
                    State.filters.range = e.target.value;
                    this.applyFilters();
                });
            }

            if (Elements.sortFilter) {
                Elements.sortFilter.addEventListener('change', (e) => {
                    State.filters.sort = e.target.value;
                    this.applyFilters();
                });
            }

            // Reset filters
            if (Elements.resetFilters) {
                Elements.resetFilters.addEventListener('click', () => this.resetAllFilters());
            }

            if (Elements.emptyReset) {
                Elements.emptyReset.addEventListener('click', () => this.resetAllFilters());
            }

            // Footer links
            document.querySelectorAll('.footer-link[data-filter]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const filter = e.target.dataset.filter;
                    this.setCategory(filter);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // Scroll to top
            if (Elements.scrollTopBtn) {
                window.addEventListener('scroll', Utils.debounce(() => {
                    if (window.scrollY > 500) {
                        Elements.scrollTopBtn.classList.add('visible');
                    } else {
                        Elements.scrollTopBtn.classList.remove('visible');
                    }
                }, 100));

                Elements.scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }

            // Snow toggle
            if (Elements.snowToggle) {
                Elements.snowToggle.addEventListener('click', () => ThemeController.toggleSnow());
            }

            // Theme toggle
            if (Elements.themeToggle) {
                Elements.themeToggle.addEventListener('click', () => ThemeController.toggleTheme());
            }
        },

        handleSearch() {
            State.filters.search = Elements.searchInput.value.toLowerCase().trim();
            this.applyFilters();
        },

        handleCategoryFilter(btn) {
            const filter = btn.dataset.filter;
            this.setCategory(filter);
        },

        setCategory(filter) {
            State.filters.category = filter;
            
            // Update active button
            Elements.filterButtons.forEach(b => b.classList.remove('active'));
            const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (activeBtn) activeBtn.classList.add('active');
            
            this.applyFilters();
        },

        applyFilters() {
            let filtered = [...State.mountains];

            // Search filter
            if (State.filters.search) {
                const search = State.filters.search;
                filtered = filtered.filter(m => 
                    m.name.toLowerCase().includes(search) ||
                    m.countries.some(c => c.name.toLowerCase().includes(search)) ||
                    m.mountainRange.toLowerCase().includes(search) ||
                    m.continent.toLowerCase().includes(search) ||
                    (m.localNames && m.localNames.some(ln => ln.name.toLowerCase().includes(search)))
                );
            }

            // Category filter
            switch (State.filters.category) {
                case 'eight-thousanders':
                    filtered = filtered.filter(m => m.eightThousander);
                    break;
                case 'seven-summits':
                    filtered = filtered.filter(m => m.sevenSummit);
                    break;
                case 'volcanic':
                    filtered = filtered.filter(m => m.formation && m.formation.type === 'Volcanic');
                    break;
                case 'highest':
                    filtered = filtered.filter(m => m.elevation >= 7000);
                    break;
            }

            // Continent filter
            if (State.filters.continent !== 'all') {
                filtered = filtered.filter(m => m.continent === State.filters.continent);
            }

            // Range filter
            if (State.filters.range !== 'all') {
                filtered = filtered.filter(m => m.mountainRange === State.filters.range);
            }

            // Sort
            filtered = this.sortMountains(filtered);

            State.filteredMountains = filtered;
            this.renderMountains();
            this.updateCounts();
            this.updateActiveFilters();
        },

        sortMountains(mountains) {
            const sortedMountains = [...mountains];
            
            switch (State.filters.sort) {
                case 'elevation-desc':
                    sortedMountains.sort((a, b) => b.elevation - a.elevation);
                    break;
                case 'elevation-asc':
                    sortedMountains.sort((a, b) => a.elevation - b.elevation);
                    break;
                case 'name-asc':
                    sortedMountains.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sortedMountains.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'prominence':
                    sortedMountains.sort((a, b) => (b.prominence || 0) - (a.prominence || 0));
                    break;
            }
            
            return sortedMountains;
        },

        renderMountains() {
            if (!Elements.mountainsGrid) return;

            if (State.filteredMountains.length === 0) {
                this.showEmpty();
                return;
            }

            this.hideEmpty();
            Elements.mountainsGrid.innerHTML = '';

            // Add rank based on current sort (by elevation)
            const sortedByElevation = [...State.mountains].sort((a, b) => b.elevation - a.elevation);
            
            State.filteredMountains.forEach((mountain, index) => {
                const rank = sortedByElevation.findIndex(m => m.id === mountain.id) + 1;
                const card = this.createMountainCard(mountain, rank);
                Elements.mountainsGrid.appendChild(card);
            });

            // Animate cards in
            this.animateCardsIn();
        },

        createMountainCard(mountain, rank) {
            const card = document.createElement('article');
            card.className = 'mountain-card';
            card.dataset.mountainId = mountain.id;

            // Generate flags HTML
            const flagsHtml = mountain.countries.map(country => 
                `<img src="${Utils.getFlagUrl(country.code)}" alt="${country.name}" title="${country.name}">`
            ).join('');

            // Generate badges HTML
            let badgesHtml = '';
            if (mountain.eightThousander) {
                badgesHtml += '<span class="badge badge-8000er">8000er</span>';
            }
            if (mountain.sevenSummit) {
                badgesHtml += '<span class="badge badge-seven-summit">7 Summit</span>';
            }
            if (mountain.formation && mountain.formation.type === 'Volcanic') {
                badgesHtml += '<span class="badge badge-volcanic">Volcanic</span>';
            }

            card.innerHTML = `
                <div class="card-rank">#<span class="rank-number">${rank}</span></div>
                <div class="card-image-container">
                    <div class="image-wrapper">
                        <img src="${mountain.image}" alt="${mountain.name}" class="mountain-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400'">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="snow-cap-effect"></div>
                </div>
                <div class="card-content">
                    <h3 class="mountain-name">${mountain.name}</h3>
                    <div class="mountain-flags">${flagsHtml}</div>
                    <div class="mountain-elevation">
                        <span class="elevation-icon">📏</span>
                        <span class="elevation-value">${Utils.formatNumber(mountain.elevation)}m</span>
                    </div>
                    <div class="mountain-range-badge">${mountain.mountainRange}</div>
                    <div class="mountain-badges">${badgesHtml}</div>
                </div>
                <div class="card-hover-overlay">
                    <span class="explore-text">Explore Peak</span>
                    <svg class="explore-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            `;

            // Click handler
            card.addEventListener('click', () => {
                this.navigateToProfile(mountain.id);
            });

            return card;
        },

        animateCardsIn() {
            const cards = Elements.mountainsGrid.querySelectorAll('.mountain-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            });
        },

        navigateToProfile(mountainId) {
            window.location.href = `mountains-profile.html?id=${mountainId}`;
        },

        updateCounts() {
            if (Elements.visibleCount) {
                Elements.visibleCount.textContent = State.filteredMountains.length;
            }
            if (Elements.totalCount) {
                Elements.totalCount.textContent = State.mountains.length;
            }
        },

        updateActiveFilters() {
            if (!Elements.activeFilters) return;

            Elements.activeFilters.innerHTML = '';

            // Category tag
            if (State.filters.category !== 'all') {
                this.addFilterTag('Category', this.getCategoryLabel(State.filters.category), () => {
                    this.setCategory('all');
                });
            }

            // Continent tag
            if (State.filters.continent !== 'all') {
                this.addFilterTag('Continent', State.filters.continent, () => {
                    Elements.continentFilter.value = 'all';
                    State.filters.continent = 'all';
                    this.applyFilters();
                });
            }

            // Range tag
            if (State.filters.range !== 'all') {
                this.addFilterTag('Range', State.filters.range, () => {
                    Elements.rangeFilter.value = 'all';
                    State.filters.range = 'all';
                    this.applyFilters();
                });
            }

            // Search tag
            if (State.filters.search) {
                this.addFilterTag('Search', `"${State.filters.search}"`, () => {
                    Elements.searchInput.value = '';
                    State.filters.search = '';
                    this.applyFilters();
                });
            }
        },

        addFilterTag(label, value, onRemove) {
            const tag = document.createElement('div');
            tag.className = 'active-filter-tag';
            tag.innerHTML = `
                <span>${label}: ${value}</span>
                <button title="Remove filter">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            `;
            tag.querySelector('button').addEventListener('click', onRemove);
            Elements.activeFilters.appendChild(tag);
        },

        getCategoryLabel(category) {
            const labels = {
                'all': 'All Mountains',
                'eight-thousanders': 'Eight-Thousanders',
                'seven-summits': 'Seven Summits',
                'volcanic': 'Volcanic',
                'highest': 'Highest Peaks'
            };
            return labels[category] || category;
        },

        resetAllFilters() {
            State.filters = {
                search: '',
                category: 'all',
                continent: 'all',
                range: 'all',
                sort: 'elevation-desc'
            };

            if (Elements.searchInput) Elements.searchInput.value = '';
            if (Elements.continentFilter) Elements.continentFilter.value = 'all';
            if (Elements.rangeFilter) Elements.rangeFilter.value = 'all';
            if (Elements.sortFilter) Elements.sortFilter.value = 'elevation-desc';

            Elements.filterButtons.forEach(btn => btn.classList.remove('active'));
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) allBtn.classList.add('active');

            this.applyFilters();
        },

        showEmpty() {
            if (Elements.emptyState) Elements.emptyState.style.display = 'flex';
            if (Elements.mountainsGrid) Elements.mountainsGrid.style.display = 'none';
        },

        hideEmpty() {
            if (Elements.emptyState) Elements.emptyState.style.display = 'none';
            if (Elements.mountainsGrid) Elements.mountainsGrid.style.display = 'grid';
        },

        hideLoading() {
            if (Elements.loadingState) {
                Elements.loadingState.style.display = 'none';
            }
        },

        loadSavedPreferences() {
            // Load theme preference
            const savedTheme = Utils.storage.get(CONFIG.storageKeys.theme);
            if (savedTheme === 'night') {
                ThemeController.setNightMode(true);
            }

            // Load snow preference
            const savedSnow = Utils.storage.get(CONFIG.storageKeys.snow);
            if (savedSnow === false) {
                ThemeController.setSnow(false);
            }
        }
    };

    // ============================================
    // PROFILE PAGE CONTROLLER
    // ============================================
    const ProfilePageController = {
        init() {
            const mountainId = Utils.getUrlParam('id');
            if (!mountainId) {
                this.handleError('No mountain ID specified');
                return;
            }

            this.loadMountain(mountainId);
            this.bindEvents();
            this.loadSavedPreferences();
        },

        loadMountain(mountainId) {
            if (typeof window.MOUNTAINS_DATA === 'undefined') {
                this.handleError('Mountains data not loaded');
                return;
            }

            const mountain = window.MOUNTAINS_DATA.find(m => m.id === mountainId);
            if (!mountain) {
                this.handleError('Mountain not found');
                return;
            }

            State.currentMountain = mountain;
            this.renderProfile();
            this.initMap();
            this.hideLoading();
        },

        bindEvents() {
            // Snow toggle
            if (Elements.snowToggle) {
                Elements.snowToggle.addEventListener('click', () => ThemeController.toggleSnow());
            }

            // Theme toggle
            if (Elements.themeToggle) {
                Elements.themeToggle.addEventListener('click', () => ThemeController.toggleTheme());
            }

            // Fullscreen toggle
            if (Elements.fullscreenToggle) {
                Elements.fullscreenToggle.addEventListener('click', () => this.toggleFullscreen());
            }

            // Map layer controls
            if (Elements.mapControls) {
                Elements.mapControls.forEach(btn => {
                    btn.addEventListener('click', () => this.handleMapLayerChange(btn));
                });
            }

            // Map toggles
            this.bindMapToggles();

            // Reset map view
            if (Elements.resetMapView) {
                Elements.resetMapView.addEventListener('click', () => this.resetMapView());
            }

            // Info tabs
            if (Elements.infoTabs) {
                Elements.infoTabs.forEach(tab => {
                    tab.addEventListener('click', () => this.handleTabChange(tab));
                });
            }

            // Expandable info cards
            if (Elements.infoCards) {
                Elements.infoCards.forEach(card => {
                    const header = card.querySelector('.info-card-header');
                    if (header) {
                        header.addEventListener('click', () => this.toggleInfoCard(card));
                    }
                });
            }

            // Quick facts panel
            if (Elements.quickFactsToggle) {
                Elements.quickFactsToggle.addEventListener('click', () => this.toggleQuickFacts());
            }

            // Summit view
            if (Elements.summitViewBtn) {
                Elements.summitViewBtn.addEventListener('click', () => this.openSummitView());
            }

            if (Elements.summitClose) {
                Elements.summitClose.addEventListener('click', () => this.closeSummitView());
            }

            if (Elements.returnOverviewBtn) {
                Elements.returnOverviewBtn.addEventListener('click', () => this.closeSummitView());
            }

            // Gallery modal
            if (Elements.galleryClose) {
                Elements.galleryClose.addEventListener('click', () => this.closeGallery());
            }

            // Close modals on escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeSummitView();
                    this.closeGallery();
                }
            });

            // Close modals on backdrop click
            if (Elements.summitModal) {
                Elements.summitModal.addEventListener('click', (e) => {
                    if (e.target === Elements.summitModal) {
                        this.closeSummitView();
                    }
                });
            }

            if (Elements.galleryModal) {
                Elements.galleryModal.addEventListener('click', (e) => {
                    if (e.target === Elements.galleryModal) {
                        this.closeGallery();
                    }
                });
            }
        },

        bindMapToggles() {
            const toggles = {
                toggleRoutes: 'routes',
                toggleBaseCamps: 'baseCamps',
                toggleGlaciers: 'glaciers',
                toggleNearbyPeaks: 'nearbyPeaks',
                toggleCities: 'cities'
            };

            Object.entries(toggles).forEach(([id, markerType]) => {
                const toggle = document.getElementById(id);
                if (toggle) {
                    toggle.addEventListener('change', (e) => {
                        this.toggleMapMarkers(markerType, e.target.checked);
                    });
                }
            });
        },

        renderProfile() {
            const m = State.currentMountain;
            if (!m) return;

            // Background image
            if (Elements.backgroundImage) {
                Elements.backgroundImage.src = m.backgroundImage || m.image;
                Elements.backgroundImage.alt = m.name;
            }

            // Title and rank
            if (Elements.mountainTitle) {
                Elements.mountainTitle.textContent = m.name;
                document.title = `${m.name} | Mountains Explorer`;
            }

            // Calculate rank
            const sortedMountains = [...window.MOUNTAINS_DATA].sort((a, b) => b.elevation - a.elevation);
            const rank = sortedMountains.findIndex(mt => mt.id === m.id) + 1;
            
            if (Elements.rankBadge) {
                Elements.rankBadge.textContent = `#${rank}`;
            }

            // Local names
            if (Elements.localNames && m.localNames) {
                Elements.localNames.innerHTML = m.localNames.map(ln => 
                    `<span class="local-name"><span class="language">${ln.language}:</span> ${ln.name}</span>`
                ).join('');
            }

            // Country flags
            if (Elements.countryFlags) {
                Elements.countryFlags.innerHTML = m.countries.map(country => `
                    <div class="country-flag">
                        <img src="${Utils.getFlagUrl(country.code)}" alt="${country.name}">
                        <span>${country.name}</span>
                    </div>
                `).join('');
            }

            // Elevation
            if (Elements.elevationValue) {
                Elements.elevationValue.textContent = Utils.formatNumber(m.elevation);
            }
            if (Elements.elevationFeet) {
                Elements.elevationFeet.textContent = `${Utils.formatNumber(Utils.metersToFeet(m.elevation))} ft`;
            }

            // Range badge
            if (Elements.rangeBadge) {
                Elements.rangeBadge.querySelector('.range-name').textContent = m.mountainRange;
            }

            // Special badges
            if (Elements.specialBadges) {
                let badges = '';
                if (m.eightThousander) {
                    badges += '<span class="special-badge eight-thousander">🏔️ Eight-Thousander</span>';
                }
                if (m.sevenSummit) {
                    badges += '<span class="special-badge seven-summit">⭐ Seven Summit</span>';
                }
                if (m.formation && m.formation.type === 'Volcanic') {
                    badges += '<span class="special-badge volcanic">🌋 Volcanic Peak</span>';
                }
                Elements.specialBadges.innerHTML = badges;
            }

            // Render all info sections
            this.renderOverviewTab(m);
            this.renderClimbingTab(m);
            this.renderGeographyTab(m);
            this.renderEnvironmentTab(m);
            this.renderRecordsTab(m);
            this.renderQuickFacts(m);
        },

        renderOverviewTab(m) {
            // Location info
            this.setInfoValue('infoContinent', m.continent);
            this.setInfoValue('infoCountries', m.countries.map(c => c.name).join(', '));
            this.setInfoValue('infoRange', m.mountainRange);
            this.setInfoValue('infoSubRange', m.subRange || 'N/A');
            this.setInfoValue('infoCoordinates', `${m.coordinates[0].toFixed(4)}°N, ${m.coordinates[1].toFixed(4)}°E`);

            // Elevation info
            this.setInfoValue('infoHeight', `${Utils.formatNumber(m.elevation)} m (${Utils.formatNumber(Utils.metersToFeet(m.elevation))} ft)`);
            this.setInfoValue('infoProminence', m.prominence ? `${Utils.formatNumber(m.prominence)} m` : 'N/A');
            this.setInfoValue('infoIsolation', m.isolation ? `${Utils.formatNumber(m.isolation)} km` : 'N/A');
            
            const sortedMountains = [...window.MOUNTAINS_DATA].sort((a, b) => b.elevation - a.elevation);
            const rank = sortedMountains.findIndex(mt => mt.id === m.id) + 1;
            this.setInfoValue('infoRank', `#${rank}`);

            // Geology info
            if (m.formation) {
                this.setInfoValue('infoFormationType', m.formation.type);
                this.setInfoValue('infoAge', m.formation.age);
                this.setInfoValue('infoPlates', m.formation.tectonicPlates ? m.formation.tectonicPlates.join(', ') : 'N/A');
                this.setInfoValue('infoProcess', m.formation.process);
            }

            // Climate info
            if (m.climate) {
                this.setInfoValue('infoSummitTemp', m.climate.summitTemperature);
                this.setInfoValue('infoWinterLow', m.climate.winterLow);
                this.setInfoValue('infoSnowfall', m.climate.snowfall);
                this.setInfoValue('infoWinds', m.climate.winds);
                if (m.climate.deathZone) {
                    this.setInfoValue('infoDeathZone', m.climate.deathZone);
                    document.getElementById('deathZoneRow')?.classList.remove('hidden');
                } else {
                    document.getElementById('deathZoneRow')?.classList.add('hidden');
                }
            }

            // Glaciers
            const glaciersList = document.getElementById('glaciersList');
            if (glaciersList && m.glaciers) {
                glaciersList.innerHTML = m.glaciers.map(g => `
                    <div class="list-item">
                        <span class="item-name">${g.name}</span>
                        <span class="item-value">${g.length}</span>
                    </div>
                `).join('');
            }

            // Base camps
            const baseCampsList = document.getElementById('baseCampsList');
            if (baseCampsList && m.baseCamps) {
                baseCampsList.innerHTML = m.baseCamps.map(bc => `
                    <div class="list-item">
                        <span class="item-name">${bc.name}</span>
                        <span class="item-value elevation">${Utils.formatNumber(bc.elevation)}m</span>
                    </div>
                `).join('');
            }
        },

        renderClimbingTab(m) {
            if (!m.climbing) return;

            // First ascent
            if (m.climbing.firstAscent) {
                const fa = m.climbing.firstAscent;
                this.setInfoValue('ascentDate', fa.date);
                
                const climbersEl = document.getElementById('ascentClimbers');
                if (climbersEl && fa.climbers) {
                    climbersEl.innerHTML = fa.climbers.map(c => 
                        `<span class="climber-name">${c}</span>`
                    ).join('');
                }
                
                const routeEl = document.getElementById('ascentRoute');
                if (routeEl) {
                    routeEl.querySelector('.route-name').textContent = fa.route || 'Unknown route';
                }
            }

            // Statistics
            this.setInfoValue('totalAscents', m.climbing.totalAscents ? Utils.formatNumber(m.climbing.totalAscents) + '+' : 'N/A');
            this.setInfoValue('totalFatalities', m.climbing.fatalities ? m.climbing.fatalities + '+' : 'N/A');
            this.setInfoValue('successRate', m.climbing.successRate || 'N/A');
            this.setInfoValue('bestSeason', m.climbing.bestSeason || 'N/A');

            // Difficulty
            const difficultyBadge = document.getElementById('difficultyBadge');
            if (difficultyBadge) {
                difficultyBadge.textContent = m.climbing.difficulty || 'Unknown';
            }

            const difficultyFill = document.getElementById('difficultyFill');
            if (difficultyFill) {
                const difficultyMap = {
                    'Easy': 20,
                    'Moderate': 40,
                    'Difficult': 60,
                    'Very Difficult': 75,
                    'Extremely Difficult': 90,
                    'Exceptionally Difficult': 100
                };
                difficultyFill.style.width = (difficultyMap[m.climbing.difficulty] || 50) + '%';
            }

            // Difficulty factors
            const factorTechnical = document.getElementById('factorTechnical');
            const factorPermit = document.getElementById('factorPermit');
            const factorDeathZone = document.getElementById('factorDeathZone');
            
            if (factorTechnical) factorTechnical.style.display = m.technicalClimbing ? 'inline-block' : 'none';
            if (factorPermit) factorPermit.style.display = m.permitRequired ? 'inline-block' : 'none';
            if (factorDeathZone) factorDeathZone.style.display = m.deathZone ? 'inline-block' : 'none';

            // Routes
            const routesList = document.getElementById('routesList');
            if (routesList && m.climbing.routes) {
                routesList.innerHTML = m.climbing.routes.map(r => `
                    <div class="route-item">
                        <div class="route-info">
                            <span class="route-name">${r.name}</span>
                            <span class="route-country">${r.country}</span>
                        </div>
                        <span class="route-difficulty">${r.difficulty}</span>
                    </div>
                `).join('');
            }
        },

        renderGeographyTab(m) {
            // Nearby peaks
            const nearbyPeaksList = document.getElementById('nearbyPeaksList');
            if (nearbyPeaksList && m.nearbyPeaks) {
                nearbyPeaksList.innerHTML = m.nearbyPeaks.map(p => `
                    <div class="list-item">
                        <span class="item-name">${p.name}</span>
                        <span class="item-value elevation">${Utils.formatNumber(p.elevation)}m</span>
                    </div>
                `).join('');
            }

            // Nearby cities
            const nearbyCitiesList = document.getElementById('nearbyCitiesList');
            if (nearbyCitiesList && m.nearbyCities) {
                nearbyCitiesList.innerHTML = m.nearbyCities.map(c => `
                    <div class="list-item">
                        <span class="item-name">${c.name}, ${c.country}</span>
                        <span class="item-value">Pop: ${Utils.formatNumber(c.population)}</span>
                    </div>
                `).join('');
            }

            // Historical importance
            const historicalList = document.getElementById('historicalList');
            if (historicalList && m.historicalImportance) {
                historicalList.innerHTML = m.historicalImportance.map(h => `
                    <div class="info-row">
                        <span class="info-label">${h.label}</span>
                        <span class="info-value">${h.value}</span>
                    </div>
                `).join('');
            }

            // Economic importance
            const economicList = document.getElementById('economicList');
            if (economicList && m.economicImportance) {
                economicList.innerHTML = m.economicImportance.map(e => `
                    <div class="info-row">
                        <span class="info-label">${e.label}</span>
                        <span class="info-value">${e.value}</span>
                    </div>
                `).join('');
            }
        },

        renderEnvironmentTab(m) {
            // Flora
            const floraList = document.getElementById('floraList');
            if (floraList && m.flora) {
                floraList.innerHTML = `
                    <div class="tags-container">
                        ${m.flora.map(f => `<span class="tag">🌿 ${f}</span>`).join('')}
                    </div>
                `;
            }

            // Fauna
            const faunaList = document.getElementById('faunaList');
            if (faunaList && m.fauna) {
                faunaList.innerHTML = `
                    <div class="tags-container">
                        ${m.fauna.map(f => `<span class="tag">🦁 ${f}</span>`).join('')}
                    </div>
                `;
            }

            // Environmental issues
            const issuesList = document.getElementById('issuesList');
            if (issuesList && m.environmentalIssues) {
                issuesList.innerHTML = m.environmentalIssues.map(i => `
                    <div class="info-row">
                        <span class="info-label">${i.label}</span>
                        <span class="info-value danger">${i.value}</span>
                    </div>
                `).join('');
            }

            // Conservation
            const conservationList = document.getElementById('conservationList');
            if (conservationList && m.conservation) {
                conservationList.innerHTML = m.conservation.map(c => `
                    <div class="info-row">
                        <span class="info-label">${c.label}</span>
                        <span class="info-value">${c.value}</span>
                    </div>
                `).join('');
            }
        },

        renderRecordsTab(m) {
            const recordsList = document.getElementById('recordsList');
            if (recordsList && m.records) {
                recordsList.innerHTML = m.records.map((r, i) => {
                    const icons = ['🏆', '🥇', '🥈', '🥉', '⭐', '🎯', '📊'];
                    return `
                        <div class="record-item">
                            <span class="record-icon">${icons[i % icons.length]}</span>
                            <div class="record-content">
                                <span class="record-title">${r.record}</span>
                                <span class="record-value">${r.value}</span>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        },

        renderQuickFacts(m) {
            this.setInfoValue('qfElevation', `${Utils.formatNumber(m.elevation)}m`);
            this.setInfoValue('qfRange', m.mountainRange);
            this.setInfoValue('qfFirstAscent', m.climbing?.firstAscent?.date?.split(',')[1]?.trim() || m.climbing?.firstAscent?.date?.split(' ').pop() || 'N/A');
            this.setInfoValue('qfDifficulty', m.climbing?.difficulty?.split(' ')[0] || 'N/A');
            this.setInfoValue('qfSeason', m.climbing?.bestSeason || 'N/A');
            this.setInfoValue('qfCountries', m.countries.map(c => c.name).join(', '));
        },

        setInfoValue(elementId, value) {
            const el = document.getElementById(elementId);
            if (el) {
                el.textContent = value || 'N/A';
            }
        },

        initMap() {
            if (!Elements.mountainMap || !State.currentMountain) return;

            const m = State.currentMountain;
            const coords = m.coordinates;

            // Initialize map
            State.map = L.map('mountainMap', {
                center: coords,
                zoom: m.defaultZoom || CONFIG.mapDefaults.zoom,
                maxZoom: CONFIG.mapDefaults.maxZoom,
                minZoom: CONFIG.mapDefaults.minZoom,
                zoomControl: true
            });

            // Add default tile layer
            this.setMapLayer('terrain');

            // Add peak marker
            this.addPeakMarker(m);

            // Add base camps
            if (m.baseCamps) {
                this.addBaseCampMarkers(m.baseCamps);
            }

            // Add nearby peaks
            if (m.nearbyPeaks) {
                this.addNearbyPeakMarkers(m.nearbyPeaks);
            }

            // Add cities (initially hidden)
            if (m.nearbyCities) {
                this.addCityMarkers(m.nearbyCities);
                // Hide cities by default
                const citiesToggle = document.getElementById('toggleCities');
                if (citiesToggle && !citiesToggle.checked) {
                    this.toggleMapMarkers('cities', false);
                }
            }

            // Add glaciers (simplified representation)
            if (m.glaciers) {
                this.addGlacierMarkers(m.glaciers, coords);
            }

            // Add climbing routes (simplified)
            if (m.climbing?.routes) {
                this.addRouteLines(m.climbing.routes, coords);
            }
        },

        addPeakMarker(m) {
            const peakIcon = L.divIcon({
                className: 'custom-peak-marker',
                html: `<div style="width: 20px; height: 20px; background: linear-gradient(135deg, #e74c3c, #c0392b); border: 2px solid white; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 24],
                popupAnchor: [0, -24]
            });

            State.markers.peak = L.marker(m.coordinates, { icon: peakIcon })
                .addTo(State.map)
                .bindPopup(`
                    <div style="text-align: center;">
                        <strong style="font-size: 14px;">${m.name}</strong><br>
                        <span style="color: #e74c3c; font-weight: bold;">${Utils.formatNumber(m.elevation)}m</span><br>
                        <small>${m.mountainRange}</small>
                    </div>
                `);
        },

        addBaseCampMarkers(baseCamps) {
            baseCamps.forEach(bc => {
                if (!bc.coordinates) return;

                const bcIcon = L.divIcon({
                    className: 'custom-basecamp-marker',
                    html: `<div style="width: 14px; height: 14px; background: linear-gradient(135deg, #f4d03f, #c9a227); border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
                    iconSize: [14, 14],
                    iconAnchor: [7, 7],
                    popupAnchor: [0, -10]
                });

                const marker = L.marker(bc.coordinates, { icon: bcIcon })
                    .addTo(State.map)
                    .bindPopup(`
                        <div style="text-align: center;">
                            <strong>⛺ ${bc.name}</strong><br>
                            <span>${Utils.formatNumber(bc.elevation)}m</span><br>
                            <small>${bc.country}</small>
                        </div>
                    `);

                State.markers.baseCamps.push(marker);
            });
        },

        addNearbyPeakMarkers(peaks) {
            peaks.forEach(peak => {
                if (!peak.coordinates) return;

                const peakIcon = L.divIcon({
                    className: 'custom-nearby-peak-marker',
                    html: `<div style="width: 12px; height: 12px; background: #95a5a6; border: 2px solid white; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>`,
                    iconSize: [12, 12],
                    iconAnchor: [6, 12],
                    popupAnchor: [0, -12]
                });

                const marker = L.marker(peak.coordinates, { icon: peakIcon })
                    .addTo(State.map)
                    .bindPopup(`
                        <div style="text-align: center;">
                            <strong>🏔️ ${peak.name}</strong><br>
                            <span>${Utils.formatNumber(peak.elevation)}m</span>
                        </div>
                    `);

                State.markers.nearbyPeaks.push(marker);
            });
        },

        addCityMarkers(cities) {
            cities.forEach(city => {
                if (!city.coordinates) return;

                const cityIcon = L.divIcon({
                    className: 'custom-city-marker',
                    html: `<div style="width: 10px; height: 10px; background: #f4d03f; border: 2px solid white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>`,
                    iconSize: [10, 10],
                    iconAnchor: [5, 5],
                    popupAnchor: [0, -8]
                });

                const marker = L.marker(city.coordinates, { icon: cityIcon })
                    .addTo(State.map)
                    .bindPopup(`
                        <div style="text-align: center;">
                            <strong>🏘️ ${city.name}</strong><br>
                            <small>${city.country}</small><br>
                            <span>Pop: ${Utils.formatNumber(city.population)}</span>
                        </div>
                    `);

                State.markers.cities.push(marker);
            });
        },

        addGlacierMarkers(glaciers, peakCoords) {
            glaciers.forEach((glacier, i) => {
                // Create approximate glacier positions around the peak
                const offset = 0.03 + (i * 0.02);
                const angle = (i * 120) * (Math.PI / 180);
                const glacierCoords = [
                    peakCoords[0] + (offset * Math.cos(angle)),
                    peakCoords[1] + (offset * Math.sin(angle))
                ];

                const glacierIcon = L.divIcon({
                    className: 'custom-glacier-marker',
                    html: `<div style="width: 16px; height: 16px; background: rgba(200, 230, 255, 0.8); border: 2px solid #87CEEB; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></div>`,
                    iconSize: [16, 16],
                    iconAnchor: [8, 8],
                    popupAnchor: [0, -10]
                });

                const marker = L.marker(glacierCoords, { icon: glacierIcon })
                    .addTo(State.map)
                    .bindPopup(`
                        <div style="text-align: center;">
                            <strong>🧊 ${glacier.name}</strong><br>
                            <span>Length: ${glacier.length}</span>
                        </div>
                    `);

                State.markers.glaciers.push(marker);
            });
        },

        addRouteLines(routes, peakCoords) {
            routes.forEach((route, i) => {
                // Create simplified route lines from different directions
                const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12'];
                const offset = 0.08;
                const angle = ((i * 72) - 90) * (Math.PI / 180);
                const startCoords = [
                    peakCoords[0] + (offset * Math.cos(angle)),
                    peakCoords[1] + (offset * Math.sin(angle))
                ];

                const routeLine = L.polyline([startCoords, peakCoords], {
                    color: colors[i % colors.length],
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 5'
                }).addTo(State.map);

                routeLine.bindPopup(`
                    <div style="text-align: center;">
                        <strong>🧗 ${route.name}</strong><br>
                        <small>Difficulty: ${route.difficulty}</small><br>
                        <small>Country: ${route.country}</small>
                    </div>
                `);

                State.markers.routes.push(routeLine);
            });
        },

        setMapLayer(layerType) {
            if (!State.map) return;

            // Remove existing tile layer
            State.map.eachLayer(layer => {
                if (layer instanceof L.TileLayer) {
                    State.map.removeLayer(layer);
                }
            });

            // Add new tile layer
            const layerConfig = CONFIG.tileLayers[layerType];
            if (layerConfig) {
                L.tileLayer(layerConfig.url, {
                    attribution: layerConfig.attribution,
                    maxZoom: CONFIG.mapDefaults.maxZoom
                }).addTo(State.map);
            }

            State.currentLayer = layerType;
        },

        handleMapLayerChange(btn) {
            const layer = btn.dataset.layer;
            
            // Update active button
            Elements.mapControls.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Change map layer
            this.setMapLayer(layer);
        },

        toggleMapMarkers(markerType, visible) {
            const markers = State.markers[markerType];
            if (!markers || !State.map) return;

            if (Array.isArray(markers)) {
                markers.forEach(marker => {
                    if (visible) {
                        marker.addTo(State.map);
                    } else {
                        State.map.removeLayer(marker);
                    }
                });
            }
        },

        resetMapView() {
            if (!State.map || !State.currentMountain) return;
            
            State.map.setView(
                State.currentMountain.coordinates,
                State.currentMountain.defaultZoom || CONFIG.mapDefaults.zoom
            );
        },

        handleTabChange(tab) {
            const tabName = tab.dataset.tab;
            
            // Update active tab
            Elements.infoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding panel
            Elements.tabPanels.forEach(panel => panel.classList.remove('active'));
            const targetPanel = document.getElementById(`${tabName}Panel`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            State.ui.activeTab = tabName;
        },

        toggleInfoCard(card) {
            card.classList.toggle('expanded');
        },

        toggleQuickFacts() {
            if (Elements.quickFactsPanel) {
                Elements.quickFactsPanel.classList.toggle('expanded');
                State.ui.isQuickFactsExpanded = Elements.quickFactsPanel.classList.contains('expanded');
            }
        },

        openSummitView() {
            if (!Elements.summitModal || !State.currentMountain) return;

            Elements.summitModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Update summit modal content
            const m = State.currentMountain;
            document.getElementById('summitMountainName').textContent = m.name;
            document.getElementById('summitElevation').innerHTML = `
                <span class="summit-elev-value">${Utils.formatNumber(m.elevation)}</span>
                <span class="summit-elev-unit">m</span>
            `;

            // Nearby peaks chips
            const nearbyPeaksContainer = document.getElementById('summitNearbyPeaks');
            if (nearbyPeaksContainer && m.nearbyPeaks) {
                nearbyPeaksContainer.innerHTML = m.nearbyPeaks.map(p => `
                    <div class="nearby-peak-chip">
                        <span class="peak-name">${p.name}</span>
                        <span class="peak-elev">${Utils.formatNumber(p.elevation)}m</span>
                    </div>
                `).join('');
            }

            // Initialize summit map
            setTimeout(() => {
                this.initSummitMap();
            }, 100);
        },

        initSummitMap() {
            if (!Elements.summitMapEl || !State.currentMountain) return;

            const m = State.currentMountain;

            // Remove existing map if any
            if (State.summitMap) {
                State.summitMap.remove();
            }

            // Create summit map
            State.summitMap = L.map('summitMap', {
                center: m.coordinates,
                zoom: 14,
                maxZoom: 18,
                minZoom: 10
            });

            // Add satellite layer for summit view
            L.tileLayer(CONFIG.tileLayers.satellite.url, {
                attribution: CONFIG.tileLayers.satellite.attribution,
                maxZoom: 18
            }).addTo(State.summitMap);

            // Add peak marker
            const peakIcon = L.divIcon({
                className: 'summit-peak-marker',
                html: `<div style="width: 30px; height: 30px; background: linear-gradient(135deg, #e74c3c, #c0392b); border: 3px solid white; border-radius: 50%; box-shadow: 0 0 20px rgba(231, 76, 60, 0.5); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px;">▲</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            L.marker(m.coordinates, { icon: peakIcon })
                .addTo(State.summitMap)
                .bindPopup(`<strong>${m.name}</strong><br>${Utils.formatNumber(m.elevation)}m`);

            // Add nearby peaks
            if (m.nearbyPeaks) {
                m.nearbyPeaks.forEach(peak => {
                    if (!peak.coordinates) return;
                    
                    L.marker(peak.coordinates, {
                        icon: L.divIcon({
                            className: 'summit-nearby-marker',
                            html: `<div style="width: 16px; height: 16px; background: #95a5a6; border: 2px solid white; border-radius: 50%; box-shadow: 0 1px 5px rgba(0,0,0,0.3);"></div>`,
                            iconSize: [16, 16],
                            iconAnchor: [8, 8]
                        })
                    }).addTo(State.summitMap)
                    .bindPopup(`${peak.name}<br>${Utils.formatNumber(peak.elevation)}m`);
                });
            }
        },

        closeSummitView() {
            if (Elements.summitModal) {
                Elements.summitModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        },

        openGallery(imageSrc, caption) {
            if (!Elements.galleryModal) return;

            document.getElementById('galleryImage').src = imageSrc;
            document.getElementById('galleryCaption').textContent = caption;
            Elements.galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        closeGallery() {
            if (Elements.galleryModal) {
                Elements.galleryModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        },

        toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.warn('Fullscreen not supported');
                });
            } else {
                document.exitFullscreen();
            }
        },

        hideLoading() {
            if (Elements.loadingOverlay) {
                setTimeout(() => {
                    Elements.loadingOverlay.classList.add('hidden');
                }, 500);
            }
        },

        handleError(message) {
            console.error(message);
            if (Elements.loadingOverlay) {
                Elements.loadingOverlay.innerHTML = `
                    <div class="loading-content">
                        <div class="empty-icon">❌</div>
                        <h3 class="empty-title">Error Loading Mountain</h3>
                        <p class="empty-text">${message}</p>
                        <a href="mountains.html" class="empty-reset">Back to Explorer</a>
                    </div>
                `;
            }
        },

        loadSavedPreferences() {
            // Load theme preference
            const savedTheme = Utils.storage.get(CONFIG.storageKeys.theme);
            if (savedTheme === 'night') {
                ThemeController.setNightMode(true);
            }

            // Load snow preference
            const savedSnow = Utils.storage.get(CONFIG.storageKeys.snow);
            if (savedSnow === false) {
                ThemeController.setSnow(false);
            }
        }
    };

    // ============================================
    // THEME CONTROLLER
    // ============================================
    const ThemeController = {
        toggleSnow() {
            const isEnabled = !State.ui.isSnowEnabled;
            this.setSnow(isEnabled);
        },

        setSnow(enabled) {
            State.ui.isSnowEnabled = enabled;
            
            if (enabled) {
                document.body.classList.remove('snow-disabled');
                if (Elements.snowToggle) {
                    Elements.snowToggle.classList.add('active');
                }
            } else {
                document.body.classList.add('snow-disabled');
                if (Elements.snowToggle) {
                    Elements.snowToggle.classList.remove('active');
                }
            }
            
            Utils.storage.set(CONFIG.storageKeys.snow, enabled);
        },

        toggleTheme() {
            const isNight = !State.ui.isNightMode;
            this.setNightMode(isNight);
        },

        setNightMode(enabled) {
            State.ui.isNightMode = enabled;
            
            if (enabled) {
                document.body.classList.add('night-mode');
                if (Elements.themeToggle) {
                    const label = Elements.themeToggle.querySelector('.btn-label');
                    if (label) label.textContent = 'Night';
                }
            } else {
                document.body.classList.remove('night-mode');
                if (Elements.themeToggle) {
                    const label = Elements.themeToggle.querySelector('.btn-label');
                    if (label) label.textContent = 'Day';
                }
            }
            
            Utils.storage.set(CONFIG.storageKeys.theme, enabled ? 'night' : 'day');
        }
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        // Initialize DOM elements
        Elements.init();

        // Determine which page we're on and initialize accordingly
        const isMainPage = document.body.classList.contains('mountains-main-page');
        const isProfilePage = document.body.classList.contains('mountains-profile-page');

        if (isMainPage) {
            MainPageController.init();
        }

        if (isProfilePage) {
            ProfilePageController.init();
        }

        console.log('Mountains Explorer initialized');
    }

    // Wait for DOM and data to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for debugging
    window.MountainsApp = {
        State,
        Utils,
        MainPageController,
        ProfilePageController,
        ThemeController
    };
   // Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }
});

})();
