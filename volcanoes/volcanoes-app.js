/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Main Application Logic
   ═══════════════════════════════════════════════════════════ */

(function() {
    'use strict';

    /* ═══════════════════════════════════════════════════════════
       CONFIGURATION
       ═══════════════════════════════════════════════════════════ */
    
    const CONFIG = {
        emberCount: 30,
        ashParticleCount: 20,
        animationDuration: {
            flyover: 4000,
            eruption: 15000,
            eruptionPhase: 3000
        },
        mapTiles: {
            dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            terrain: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png',
            satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        },
        defaultZoom: 8,
        flagApi: 'https://flagcdn.com/w40'
    };

    /* ═══════════════════════════════════════════════════════════
       STATE MANAGEMENT
       ═══════════════════════════════════════════════════════════ */
    
    const state = {
        volcanoes: [],
        filteredVolcanoes: [],
        currentFilters: {
            search: '',
            status: 'all',
            type: 'all',
            region: 'all'
        },
        tectonicViewActive: false,
        currentVolcano: null,
        map: null,
        markers: {
            volcano: null,
            cities: [],
            otherVolcanoes: [],
            hazardZones: [],
            lavaFlows: [],
            tectonicPlates: []
        },
        flyoverInterval: null,
        eruptionInterval: null,
        isProfilePage: false
    };

    /* ═══════════════════════════════════════════════════════════
       UTILITY FUNCTIONS
       ═══════════════════════════════════════════════════════════ */
    
    const utils = {
        // Format number with commas
        formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Format elevation
        formatElevation(meters) {
            return `${this.formatNumber(meters)}m`;
        },

        // Get flag URL
        getFlagUrl(countryCode) {
            return `${CONFIG.flagApi}/${countryCode.toLowerCase()}.png`;
        },

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

        // Get URL parameter
        getUrlParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },

        // Capitalize first letter
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        // Get random number in range
        random(min, max) {
            return Math.random() * (max - min) + min;
        },

        // Format coordinates
        formatCoordinates(lat, lng) {
            const latDir = lat >= 0 ? 'N' : 'S';
            const lngDir = lng >= 0 ? 'E' : 'W';
            return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lng).toFixed(4)}°${lngDir}`;
        },

        // Slugify string
        slugify(str) {
            return str
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    };

    /* ═══════════════════════════════════════════════════════════
       PARTICLE EFFECTS
       ═══════════════════════════════════════════════════════════ */
    
    const particles = {
        // Create ember particles
        createEmbers() {
            const container = document.getElementById('emberContainer');
            if (!container) return;

            for (let i = 0; i < CONFIG.emberCount; i++) {
                const ember = document.createElement('div');
                ember.className = 'ember';
                ember.style.left = `${utils.random(0, 100)}%`;
                ember.style.animationDuration = `${utils.random(8, 15)}s`;
                ember.style.animationDelay = `${utils.random(0, 10)}s`;
                ember.style.width = `${utils.random(2, 6)}px`;
                ember.style.height = ember.style.width;
                container.appendChild(ember);
            }
        },

        // Create ash particles for profile page
        createAshParticles() {
            const container = document.getElementById('ashParticles');
            if (!container) return;

            for (let i = 0; i < CONFIG.ashParticleCount; i++) {
                const ash = document.createElement('div');
                ash.className = 'ash-particle';
                ash.style.left = `${utils.random(0, 100)}%`;
                ash.style.animationDuration = `${utils.random(10, 20)}s`;
                ash.style.animationDelay = `${utils.random(0, 15)}s`;
                ash.style.opacity = utils.random(0.3, 0.7);
                container.appendChild(ash);
            }
        },

        // Create profile ember particles
        createProfileEmbers() {
            const container = document.getElementById('emberParticlesProfile');
            if (!container) return;

            for (let i = 0; i < 15; i++) {
                const ember = document.createElement('div');
                ember.className = 'ember';
                ember.style.left = `${utils.random(40, 60)}%`;
                ember.style.bottom = '30%';
                ember.style.animationDuration = `${utils.random(5, 10)}s`;
                ember.style.animationDelay = `${utils.random(0, 5)}s`;
                container.appendChild(ember);
            }
        }
    };

    /* ═══════════════════════════════════════════════════════════
       MAIN PAGE - VOLCANO CARDS
       ═══════════════════════════════════════════════════════════ */
    
    const mainPage = {
        // Initialize main page
        init() {
            if (!document.getElementById('volcanoesGrid')) return;

            this.loadVolcanoes();
            this.setupEventListeners();
            particles.createEmbers();
            this.setupScrollToTop();
        },

        // Load volcanoes data
        loadVolcanoes() {
            // Data comes from combined volcanoes-data.js
            if (typeof window.volcanoesData !== 'undefined') {
                state.volcanoes = window.volcanoesData;
                state.filteredVolcanoes = [...state.volcanoes];
                this.updateStats();
                this.renderVolcanoes();
                this.hideLoading();
            } else {
                console.error('Volcanoes data not loaded');
            }
        },

        // Update stats display
        updateStats() {
            const total = state.volcanoes.length;
            const active = state.volcanoes.filter(v => v.status === 'active').length;
            const countries = [...new Set(state.volcanoes.flatMap(v => v.countries.map(c => c.code)))].length;
            const highest = Math.max(...state.volcanoes.map(v => v.elevation));

            document.getElementById('totalVolcanoes').textContent = total;
            document.getElementById('activeCount').textContent = active;
            document.getElementById('countriesCount').textContent = countries;
            document.getElementById('highestPeak').textContent = utils.formatElevation(highest);
        },

        // Render volcano cards
        renderVolcanoes() {
            const grid = document.getElementById('volcanoesGrid');
            const noResults = document.getElementById('noResults');
            const template = document.getElementById('volcanoCardTemplate');

            if (!grid || !template) return;

            grid.innerHTML = '';

            if (state.filteredVolcanoes.length === 0) {
                noResults.classList.add('active');
                document.getElementById('visibleCount').textContent = '0';
                return;
            }

            noResults.classList.remove('active');
            document.getElementById('visibleCount').textContent = state.filteredVolcanoes.length;

            // Sort by elevation (highest first)
            const sorted = [...state.filteredVolcanoes].sort((a, b) => b.elevation - a.elevation);

            sorted.forEach((volcano, index) => {
                const card = this.createVolcanoCard(volcano, index + 1, template);
                grid.appendChild(card);
            });

            // Add coming soon card
            this.addComingSoonCard(grid);
        },

        // Create volcano card
        createVolcanoCard(volcano, rank, template) {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.volcano-card');

            // Set data attributes
            card.dataset.id = volcano.id;
            card.dataset.status = volcano.status;
            card.dataset.type = utils.slugify(volcano.volcanoType);
            card.dataset.region = volcano.continent.toLowerCase();
            card.dataset.elevation = volcano.elevation;

            // Rank
            clone.querySelector('.rank-number').textContent = `#${rank}`;

            // Image
            const img = clone.querySelector('.volcano-image');
            img.src = volcano.image;
            img.alt = volcano.name;
            img.onerror = () => {
                img.src = 'https://images.unsplash.com/photo-1562115900-f7d4e5c9b7e7?w=400';
            };

            // Status badge
            clone.querySelector('.status-text').textContent = utils.capitalize(volcano.status);

            // Elevation
            clone.querySelector('.elevation-value').textContent = utils.formatElevation(volcano.elevation);

            // Info
            clone.querySelector('.volcano-name').textContent = volcano.name;

            // Country flag
            const flag = clone.querySelector('.country-flag');
            flag.src = utils.getFlagUrl(volcano.countries[0].code);
            flag.alt = volcano.countries[0].name;

            clone.querySelector('.country-name').textContent = volcano.countries[0].name;

            // Type
            clone.querySelector('.volcano-type span').textContent = volcano.volcanoType;

            // Last eruption
            const lastEruptionEl = clone.querySelector('.last-eruption span');
            if (volcano.lastEruption && volcano.lastEruption.year) {
                lastEruptionEl.textContent = `Last: ${volcano.lastEruption.year}`;
            } else {
                lastEruptionEl.textContent = 'No recent eruption';
            }

            // Link
            clone.querySelector('.card-link').href = `volcanoes-profile.html?id=${volcano.id}`;

            return clone;
        },

        // Add coming soon card
        addComingSoonCard(grid) {
            const template = document.getElementById('comingSoonTemplate');
            if (!template) return;

            const clone = template.content.cloneNode(true);
            grid.appendChild(clone);
        },

        // Setup event listeners
        setupEventListeners() {
            // Search input
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', utils.debounce((e) => {
                    state.currentFilters.search = e.target.value.toLowerCase();
                    this.applyFilters();
                }, 300));
            }

            // Search clear
            const searchClear = document.getElementById('searchClear');
            if (searchClear) {
                searchClear.addEventListener('click', () => {
                    document.getElementById('searchInput').value = '';
                    state.currentFilters.search = '';
                    this.applyFilters();
                });
            }

            // Status filter buttons
            document.querySelectorAll('.status-filters .filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.status-filters .filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    state.currentFilters.status = btn.dataset.filter;
                    this.applyFilters();
                });
            });

            // Type filter buttons
            document.querySelectorAll('.type-filters .filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.type-filters .filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    state.currentFilters.type = btn.dataset.type;
                    this.applyFilters();
                });
            });

            // Region filter
            const regionFilter = document.getElementById('regionFilter');
            if (regionFilter) {
                regionFilter.addEventListener('change', (e) => {
                    state.currentFilters.region = e.target.value;
                    this.applyFilters();
                });
            }

            // Tectonic view toggle
            const tectonicToggle = document.getElementById('tectonicToggle');
            if (tectonicToggle) {
                tectonicToggle.addEventListener('click', () => {
                    tectonicToggle.classList.toggle('active');
                    state.tectonicViewActive = tectonicToggle.classList.contains('active');
                    this.toggleTectonicMap();
                });
            }

            // Close tectonic map
            const closeTectonicMap = document.getElementById('closeTectonicMap');
            if (closeTectonicMap) {
                closeTectonicMap.addEventListener('click', () => {
                    document.getElementById('tectonicToggle').classList.remove('active');
                    state.tectonicViewActive = false;
                    this.toggleTectonicMap();
                });
            }

            // Reset filters
            const resetFilters = document.getElementById('resetFilters');
            if (resetFilters) {
                resetFilters.addEventListener('click', () => {
                    this.resetAllFilters();
                });
            }
        },

        // Apply filters
        applyFilters() {
            state.filteredVolcanoes = state.volcanoes.filter(volcano => {
                // Search filter
                if (state.currentFilters.search) {
                    const searchTerm = state.currentFilters.search;
                    const matchName = volcano.name.toLowerCase().includes(searchTerm);
                    const matchCountry = volcano.countries.some(c => 
                        c.name.toLowerCase().includes(searchTerm)
                    );
                    const matchType = volcano.volcanoType.toLowerCase().includes(searchTerm);
                    if (!matchName && !matchCountry && !matchType) return false;
                }

                // Status filter
                if (state.currentFilters.status !== 'all') {
                    if (volcano.status !== state.currentFilters.status) return false;
                }

                // Type filter
                if (state.currentFilters.type !== 'all') {
                    const volcanoType = utils.slugify(volcano.volcanoType);
                    if (!volcanoType.includes(state.currentFilters.type)) return false;
                }

                // Region filter
                if (state.currentFilters.region !== 'all') {
                    const region = state.currentFilters.region;
                    
                    if (region === 'ring-of-fire') {
                        if (!volcano.tectonicSetting?.volcanicBelt?.toLowerCase().includes('ring of fire') &&
                            !volcano.tectonicSetting?.volcanicBelt?.toLowerCase().includes('pacific')) {
                            // Check if in Ring of Fire countries
                            const rofCountries = ['JP', 'PH', 'ID', 'CL', 'PE', 'EC', 'CO', 'MX', 'US', 'RU', 'NZ'];
                            if (!volcano.countries.some(c => rofCountries.includes(c.code))) return false;
                        }
                    } else if (region === 'mediterranean') {
                        const medCountries = ['IT', 'GR', 'ES', 'TR'];
                        if (!volcano.countries.some(c => medCountries.includes(c.code))) return false;
                    } else if (region === 'east-africa') {
                        const eaCountries = ['TZ', 'KE', 'ET', 'CD', 'RW', 'CM'];
                        if (!volcano.countries.some(c => eaCountries.includes(c.code))) return false;
                    } else if (region === 'iceland') {
                        if (!volcano.countries.some(c => c.code === 'IS')) return false;
                    } else {
                        // Continent filter
                        if (volcano.continent.toLowerCase().replace(' ', '-') !== region) return false;
                    }
                }

                return true;
            });

            this.renderVolcanoes();
            this.updateActiveFilters();
        },

        // Update active filters display
        updateActiveFilters() {
            const container = document.getElementById('activeFilters');
            if (!container) return;

            container.innerHTML = '';

            if (state.currentFilters.search) {
                this.addFilterTag(container, `Search: "${state.currentFilters.search}"`, () => {
                    document.getElementById('searchInput').value = '';
                    state.currentFilters.search = '';
                    this.applyFilters();
                });
            }

            if (state.currentFilters.status !== 'all') {
                this.addFilterTag(container, `Status: ${utils.capitalize(state.currentFilters.status)}`, () => {
                    document.querySelectorAll('.status-filters .filter-btn').forEach(b => b.classList.remove('active'));
                    document.querySelector('.status-filters .filter-btn[data-filter="all"]').classList.add('active');
                    state.currentFilters.status = 'all';
                    this.applyFilters();
                });
            }

            if (state.currentFilters.type !== 'all') {
                this.addFilterTag(container, `Type: ${utils.capitalize(state.currentFilters.type)}`, () => {
                    document.querySelectorAll('.type-filters .filter-btn').forEach(b => b.classList.remove('active'));
                    document.querySelector('.type-filters .filter-btn[data-type="all"]').classList.add('active');
                    state.currentFilters.type = 'all';
                    this.applyFilters();
                });
            }

            if (state.currentFilters.region !== 'all') {
                const regionSelect = document.getElementById('regionFilter');
                const regionText = regionSelect.options[regionSelect.selectedIndex].text;
                this.addFilterTag(container, `Region: ${regionText}`, () => {
                    document.getElementById('regionFilter').value = 'all';
                    state.currentFilters.region = 'all';
                    this.applyFilters();
                });
            }
        },

        // Add filter tag
        addFilterTag(container, text, onRemove) {
            const tag = document.createElement('span');
            tag.className = 'active-filter-tag';
            tag.innerHTML = `
                ${text}
                <button><i class="fas fa-times"></i></button>
            `;
            tag.querySelector('button').addEventListener('click', onRemove);
            container.appendChild(tag);
        },

        // Reset all filters
        resetAllFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('regionFilter').value = 'all';
            
            document.querySelectorAll('.status-filters .filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.status-filters .filter-btn[data-filter="all"]').classList.add('active');
            
            document.querySelectorAll('.type-filters .filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.type-filters .filter-btn[data-type="all"]').classList.add('active');

            state.currentFilters = {
                search: '',
                status: 'all',
                type: 'all',
                region: 'all'
            };

            this.applyFilters();
        },

        // Toggle tectonic map
        toggleTectonicMap() {
            const section = document.getElementById('tectonicMapSection');
            if (!section) return;

            if (state.tectonicViewActive) {
                section.classList.add('active');
                this.initTectonicMap();
            } else {
                section.classList.remove('active');
            }
        },

        // Initialize tectonic map
        initTectonicMap() {
            const mapContainer = document.getElementById('tectonicMap');
            if (!mapContainer || mapContainer._leaflet_id) return;

            const map = L.map('tectonicMap', {
                center: [20, 0],
                zoom: 2,
                minZoom: 2,
                maxZoom: 10
            });

            L.tileLayer(CONFIG.mapTiles.dark, {
                attribution: '© OpenStreetMap contributors © CARTO'
            }).addTo(map);

            // Add volcano markers
            state.volcanoes.forEach(volcano => {
                const marker = L.circleMarker(volcano.coordinates, {
                    radius: 6,
                    fillColor: volcano.status === 'active' ? '#FF4500' : 
                               volcano.status === 'dormant' ? '#FFD700' : '#696969',
                    color: '#fff',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                marker.bindPopup(`
                    <strong>${volcano.name}</strong><br>
                    ${volcano.countries[0].name}<br>
                    ${utils.formatElevation(volcano.elevation)}<br>
                    <em>${utils.capitalize(volcano.status)}</em>
                `);
            });

            // Add Ring of Fire line (simplified)
            this.addRingOfFire(map);

            // Add plate boundaries (simplified)
            this.addPlateBoundaries(map);
        },

        // Add Ring of Fire visualization
        addRingOfFire(map) {
            const ringOfFireCoords = [
                [-43.5, 172], [-41, 175], [-37, 178], [-30, -178], [-25, -175],
                [-20, -170], [-15, -168], [-10, 165], [-5, 150], [0, 140],
                [5, 130], [10, 125], [15, 120], [20, 122], [25, 125],
                [30, 130], [35, 135], [40, 140], [45, 145], [50, 155],
                [55, 160], [60, 165], [55, -165], [50, -175], [55, 175],
                [60, -170], [55, -160], [50, -155], [45, -150], [40, -145],
                [35, -140], [30, -125], [25, -115], [20, -110], [15, -105],
                [10, -100], [5, -95], [0, -90], [-5, -85], [-10, -80],
                [-15, -77], [-20, -74], [-25, -72], [-30, -72], [-35, -73],
                [-40, -74], [-45, -76], [-50, -76], [-55, -70]
            ];

            L.polyline(ringOfFireCoords, {
                color: '#FF4500',
                weight: 3,
                opacity: 0.7,
                dashArray: '10, 5',
                className: 'ring-of-fire-line'
            }).addTo(map);
        },

        // Add plate boundaries (simplified)
        addPlateBoundaries(map) {
            // This is a simplified representation
            const boundaries = [
                // Mid-Atlantic Ridge
                { coords: [[65, -18], [40, -30], [0, -15], [-35, -15], [-55, -5]], color: '#FF6B35', type: 'divergent' },
                // East Pacific Rise
                { coords: [[20, -105], [0, -105], [-20, -115], [-45, -115]], color: '#FF6B35', type: 'divergent' },
                // Mariana Trench area
                { coords: [[30, 145], [20, 147], [10, 143]], color: '#DC143C', type: 'convergent' }
            ];

            boundaries.forEach(boundary => {
                L.polyline(boundary.coords, {
                    color: boundary.color,
                    weight: 2,
                    opacity: 0.6,
                    dashArray: boundary.type === 'divergent' ? '5, 10' : null
                }).addTo(map);
            });
        },

        // Setup scroll to top
        setupScrollToTop() {
            const btn = document.getElementById('scrollTopBtn');
            if (!btn) return;

            window.addEventListener('scroll', utils.debounce(() => {
                if (window.scrollY > 500) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
            }, 100));

            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },

        // Hide loading state
        hideLoading() {
            const loading = document.getElementById('loadingState');
            if (loading) {
                setTimeout(() => {
                    loading.classList.add('hidden');
                }, 500);
            }
        }
    };

    /* ═══════════════════════════════════════════════════════════
       PROFILE PAGE
       ═══════════════════════════════════════════════════════════ */
    
    const profilePage = {
        // Initialize profile page
        init() {
            if (!document.querySelector('.profile-page')) return;

            state.isProfilePage = true;
            this.loadVolcanoData();
            particles.createAshParticles();
            particles.createProfileEmbers();
        },

        // Load volcano data
        loadVolcanoData() {
            const volcanoId = utils.getUrlParam('id');
            
            if (!volcanoId || typeof window.volcanoesData === 'undefined') {
                this.showError();
                return;
            }

            state.volcanoes = window.volcanoesData;
            state.currentVolcano = state.volcanoes.find(v => v.id === volcanoId);

            if (!state.currentVolcano) {
                this.showError();
                return;
            }

            this.populateProfile();
            this.initMap();
            this.setupEventListeners();
            this.hideLoading();
        },

        // Show error state
        showError() {
            const loading = document.getElementById('profileLoading');
            if (loading) {
                loading.innerHTML = `
                    <div class="loading-content">
                        <div class="loading-volcano-icon">
                            <i class="fas fa-exclamation-triangle" style="color: var(--lava-red);"></i>
                        </div>
                        <p>Volcano not found</p>
                        <a href="volcanoes.html" style="color: var(--lava-orange); margin-top: 20px; display: inline-block;">
                            ← Back to Volcanoes
                        </a>
                    </div>
                `;
            }
        },

        // Populate profile with volcano data
        populateProfile() {
            const v = state.currentVolcano;

            // Update page title
            document.title = `${v.name} | Volcanoes Explorer`;

            // Background image
            const bgImage = document.getElementById('backgroundImage');
            if (bgImage) {
                bgImage.style.backgroundImage = `url('${v.backgroundImage || v.image}')`;
            }

            // Header info
            document.getElementById('volcanoName').textContent = v.name;
            
            const nativeName = document.getElementById('volcanoNativeName');
            if (v.nativeName) {
                nativeName.textContent = v.nativeName;
                nativeName.style.display = 'block';
            } else {
                nativeName.style.display = 'none';
            }

            // Country badge
            const countryFlag = document.getElementById('countryFlag');
            countryFlag.src = utils.getFlagUrl(v.countries[0].code);
            countryFlag.alt = v.countries[0].name;
            document.getElementById('countryName').textContent = v.countries[0].name;

            // Status badge
            const statusBadge = document.getElementById('statusBadge');
            statusBadge.className = `status-badge-large ${v.status}`;
            document.getElementById('statusText').textContent = utils.capitalize(v.status);

            // Elevation
            document.getElementById('elevationDisplay').textContent = utils.formatElevation(v.elevation);

            // Type
            document.getElementById('volcanoType').textContent = v.volcanoType;

            // Coordinates
            document.getElementById('coordsDisplay').textContent = utils.formatCoordinates(v.coordinates[0], v.coordinates[1]);

            // Quick facts
            document.getElementById('quickElevation').textContent = utils.formatElevation(v.elevation);
            document.getElementById('quickStatus').textContent = utils.capitalize(v.status);
            document.getElementById('quickLastEruption').textContent = v.lastEruption?.year || 'Unknown';
            document.getElementById('quickType').textContent = v.volcanoType;
            document.getElementById('quickTectonic').textContent = v.tectonicSetting?.plateType?.split(' ')[0] || 'Unknown';

            // Mind map sections
            this.populateMindMap(v);

            // Setup navigation
            this.setupNavigation();
        },

        // Populate mind map sections
        populateMindMap(v) {
            // Location
            document.getElementById('infoCountry').textContent = v.countries.map(c => c.name).join(', ');
            document.getElementById('infoRegion').textContent = v.region || v.continent;
            document.getElementById('infoCoords').textContent = utils.formatCoordinates(v.coordinates[0], v.coordinates[1]);
            document.getElementById('infoVolcanicBelt').textContent = v.tectonicSetting?.volcanicBelt || 'N/A';

            // Elevation
            document.getElementById('infoHeight').textContent = `${utils.formatNumber(v.elevation)} meters`;
            document.getElementById('infoProminence').textContent = v.prominence ? `${utils.formatNumber(v.prominence)} meters` : 'N/A';
            
            const rank = state.volcanoes
                .sort((a, b) => b.elevation - a.elevation)
                .findIndex(vol => vol.id === v.id) + 1;
            document.getElementById('infoRank').textContent = `#${rank} among listed volcanoes`;

            // Type
            document.getElementById('infoClassification').textContent = v.volcanoType;
            document.getElementById('infoFormation').textContent = this.getFormationDescription(v.volcanoType);
            document.getElementById('infoShape').textContent = this.getShapeDescription(v.volcanoType);

            // Status
            const statusEl = document.getElementById('infoStatus');
            statusEl.textContent = utils.capitalize(v.status);
            statusEl.className = `item-value status-${v.status}`;
            document.getElementById('infoMonitoring').textContent = v.status === 'active' ? 'Continuously monitored' : 'Periodic monitoring';
            document.getElementById('infoAlertLevel').textContent = v.status === 'active' ? 'Elevated' : 'Normal';

            // Tectonic
            document.getElementById('infoBoundaryType').textContent = v.tectonicSetting?.plateType || 'Unknown';
            document.getElementById('infoPlates').textContent = v.tectonicSetting?.plates?.join(', ') || 'Unknown';
            document.getElementById('infoSubduction').textContent = v.tectonicSetting?.subduction ? 'Yes' : 'No';

            // Last Eruption
            document.getElementById('infoLastEruptionYear').textContent = v.lastEruption?.year || 'Unknown';
            document.getElementById('infoLastEruptionName').textContent = v.lastEruption?.name || 'N/A';
            document.getElementById('infoVEI').textContent = v.lastEruption?.vei || 'N/A';
            document.getElementById('infoEruptionType').textContent = v.lastEruption?.type || 'Unknown';

            // Eruption History
            this.populateEruptionHistory(v.eruptionHistory || []);

            // Lava Type
            document.getElementById('infoLavaComposition').textContent = v.lavaType || 'Unknown';
            document.getElementById('infoViscosity').textContent = this.getViscosity(v.lavaType);
            document.getElementById('infoLavaBehavior').textContent = this.getLavaBehavior(v.volcanoType);

            // Crater
            document.getElementById('infoCraterDiameter').textContent = v.crater?.diameter || 'Unknown';
            document.getElementById('infoCraterDepth').textContent = v.crater?.depth || 'Unknown';
            document.getElementById('infoLavaLake').textContent = v.crater?.lavaLake ? 'Yes' : 'No';

            // Cities
            this.populateCities(v.nearbyCities || []);

            // Hazards
            this.populateHazards(v.hazards || []);

            // Economic
            this.populateEconomic(v.economicImportance || []);

            // Environmental
            this.populateEnvironmental(v.environmentalImpact || []);

            // Famous Events
            this.populateFamousEvents(v.famousEvents || []);

            // Fun Facts
            this.populateFunFacts(v.funFacts || []);

            // Setup branch toggles
            this.setupBranchToggles();
        },

        // Get formation description based on type
        getFormationDescription(type) {
            const descriptions = {
                'Stratovolcano': 'Built by alternating layers of lava flows, volcanic ash, and tephra',
                'Shield Volcano': 'Formed by fluid lava flows spreading over large areas',
                'Caldera': 'Formed by collapse following massive eruptions',
                'Complex Volcano': 'Multiple vents with varying eruption styles',
                'Cinder Cone': 'Built from ejected lava fragments'
            };
            return descriptions[type] || 'Formed by volcanic activity';
        },

        // Get shape description based on type
        getShapeDescription(type) {
            const shapes = {
                'Stratovolcano': 'Steep-sided symmetrical cone',
                'Shield Volcano': 'Broad, gently sloping dome',
                'Caldera': 'Large depression with steep walls',
                'Complex Volcano': 'Irregular with multiple peaks',
                'Cinder Cone': 'Small conical hill'
            };
            return shapes[type] || 'Volcanic mountain';
        },

        // Get viscosity based on lava type
        getViscosity(lavaType) {
            if (!lavaType) return 'Unknown';
            if (lavaType.toLowerCase().includes('basalt')) return 'Low (fluid)';
            if (lavaType.toLowerCase().includes('andesit')) return 'Medium';
            if (lavaType.toLowerCase().includes('rhyolit')) return 'High (viscous)';
            return 'Variable';
        },

        // Get lava behavior based on volcano type
        getLavaBehavior(type) {
            const behaviors = {
                'Stratovolcano': 'Explosive eruptions with pyroclastic flows',
                'Shield Volcano': 'Effusive eruptions with fluid lava flows',
                'Caldera': 'Catastrophic explosive eruptions possible',
                'Complex Volcano': 'Variable eruption styles',
                'Cinder Cone': 'Strombolian eruptions with lava fountains'
            };
            return behaviors[type] || 'Various eruption styles';
        },

        // Populate eruption history
        populateEruptionHistory(history) {
            const container = document.getElementById('eruptionTimeline');
            if (!container) return;

            if (history.length === 0) {
                container.innerHTML = '<p style="color: var(--text-muted); padding: 10px 0;">No recorded eruptions</p>';
                return;
            }

            container.innerHTML = history.slice(0, 5).map(eruption => `
                <div class="timeline-item">
                    <div class="timeline-year">${eruption.year}</div>
                    <div class="timeline-name">${eruption.name || 'Unnamed Eruption'}</div>
                    <div class="timeline-details">
                        ${eruption.vei ? `<span>VEI: ${eruption.vei}</span>` : ''}
                        ${eruption.deaths ? `<span>Deaths: ${utils.formatNumber(eruption.deaths)}</span>` : ''}
                    </div>
                </div>
            `).join('');
        },

        // Populate nearby cities
        populateCities(cities) {
            const container = document.getElementById('citiesList');
            if (!container) return;

            if (cities.length === 0) {
                container.innerHTML = '<p style="color: var(--text-muted); padding: 10px 0;">No major cities nearby</p>';
                return;
            }

            container.innerHTML = cities.map(city => `
                <div class="city-item">
                    <span class="city-name">${city.name}</span>
                    <div class="city-info">
                        <span class="city-distance">${city.distance}</span>
                        ${city.population ? `<span>Pop: ${utils.formatNumber(city.population)}</span>` : ''}
                    </div>
                </div>
            `).join('');
        },

        // Populate hazards
        populateHazards(hazards) {
            const container = document.getElementById('hazardsGrid');
            if (!container) return;

            if (hazards.length === 0) {
                container.innerHTML = '<p style="color: var(--text-muted); padding: 10px 0;">No specific hazards listed</p>';
                return;
            }

            container.innerHTML = hazards.map(hazard => {
                const riskClass = hazard.risk?.toLowerCase().includes('high') ? 'high' :
                                  hazard.risk?.toLowerCase().includes('moderate') ? 'moderate' : 'low';
                return `
                    <div class="hazard-item">
                        <div class="hazard-type">${hazard.type}</div>
                        <div class="hazard-risk ${riskClass}">Risk: ${hazard.risk || 'Unknown'}</div>
                        ${hazard.affectedArea ? `<div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 4px;">${hazard.affectedArea}</div>` : ''}
                    </div>
                `;
            }).join('');
        },

        // Populate economic importance
        populateEconomic(items) {
            const container = document.getElementById('economicList');
            if (!container) return;

            if (items.length === 0) {
                container.innerHTML = '<li>No economic data available</li>';
                return;
            }

            container.innerHTML = items.map(item => `
                <li>
                    <span class="item-label">${item.label}</span>
                    <span class="item-value">${item.value}</span>
                </li>
            `).join('');
        },

        // Populate environmental impact
        populateEnvironmental(items) {
            const container = document.getElementById('environmentalList');
            if (!container) return;

            if (items.length === 0) {
                container.innerHTML = '<li>No environmental data available</li>';
                return;
            }

            container.innerHTML = items.map(item => `
                <li>
                    <span class="item-label">${item.label}</span>
                    <span class="item-value">${item.value}</span>
                </li>
            `).join('');
        },

        // Populate famous events
        populateFamousEvents(events) {
            const container = document.getElementById('eventsTimeline');
            if (!container) return;

            if (events.length === 0) {
                container.innerHTML = '<p style="color: var(--text-muted); padding: 10px 0;">No famous events recorded</p>';
                return;
            }

            container.innerHTML = events.map(event => `
                <div class="event-item">
                    <div class="event-header">
                        <span class="event-name">${event.event}</span>
                        <span class="event-year">${event.year}</span>
                    </div>
                    <p class="event-description">${event.description}</p>
                </div>
            `).join('');
        },

        // Populate fun facts
        populateFunFacts(facts) {
            const container = document.getElementById('funFactsList');
            if (!container) return;

            if (facts.length === 0) {
                container.innerHTML = '<li>No fun facts available</li>';
                return;
            }

            container.innerHTML = facts.map(fact => `<li>${fact}</li>`).join('');
        },

        // Setup branch toggles
        setupBranchToggles() {
            document.querySelectorAll('.branch-header').forEach(header => {
                header.addEventListener('click', () => {
                    const branch = header.closest('.mind-map-branch');
                    branch.classList.toggle('expanded');
                });
            });

            // Expand first few branches by default
            document.querySelectorAll('.mind-map-branch').forEach((branch, index) => {
                if (index < 3) branch.classList.add('expanded');
            });
        },

        // Initialize map
        initMap() {
            const v = state.currentVolcano;
            const mapContainer = document.getElementById('volcanoMap');
            
            if (!mapContainer) return;

            state.map = L.map('volcanoMap', {
                center: v.coordinates,
                zoom: v.defaultZoom || CONFIG.defaultZoom,
                zoomControl: true
            });

            L.tileLayer(CONFIG.mapTiles.dark, {
                attribution: '© OpenStreetMap contributors © CARTO'
            }).addTo(state.map);

            // Add volcano marker
            this.addVolcanoMarker();

            // Add hazard zones by default
            this.addHazardZones();

            // Add nearby cities
            this.addCityMarkers();

            // Setup map controls
            this.setupMapControls();
        },

        // Add volcano marker
        addVolcanoMarker() {
            const v = state.currentVolcano;

            // Custom volcano icon
            const volcanoIcon = L.divIcon({
                className: 'volcano-marker-icon',
                html: `
                    <div class="volcano-marker ${v.status}">
                        <i class="fas fa-mountain"></i>
                        <div class="marker-pulse"></div>
                    </div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });

            state.markers.volcano = L.marker(v.coordinates, { icon: volcanoIcon })
                .addTo(state.map)
                .bindPopup(`
                    <div style="text-align: center;">
                        <strong style="font-size: 1.1rem;">${v.name}</strong><br>
                        <span style="color: #FF4500;">${utils.formatElevation(v.elevation)}</span><br>
                        <em>${utils.capitalize(v.status)} ${v.volcanoType}</em>
                    </div>
                `);

            // Add marker styles
            this.addMarkerStyles();
        },

        // Add marker styles
        addMarkerStyles() {
            if (document.getElementById('volcanoMarkerStyles')) return;

            const style = document.createElement('style');
            style.id = 'volcanoMarkerStyles';
            style.textContent = `
                .volcano-marker-icon {
                    background: none;
                    border: none;
                }
                .volcano-marker {
                    width: 40px;
                    height: 40px;
                    background: radial-gradient(circle, rgba(255,69,0,0.8) 0%, rgba(255,69,0,0.4) 50%, transparent 70%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .volcano-marker i {
                    color: #FF4500;
                    font-size: 18px;
                    filter: drop-shadow(0 0 5px rgba(255,69,0,0.8));
                }
                .volcano-marker.active .marker-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #FF4500;
                    border-radius: 50%;
                    animation: markerPulse 2s ease-out infinite;
                }
                @keyframes markerPulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
                .city-marker {
                    width: 12px;
                    height: 12px;
                    background: #FFD700;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 8px rgba(255,215,0,0.6);
                }
                .hazard-zone {
                    fill: rgba(255,69,0,0.2);
                    stroke: #FF4500;
                    stroke-width: 2;
                }
            `;
            document.head.appendChild(style);
        },

        // Add hazard zones
        addHazardZones() {
            const v = state.currentVolcano;

            // Create concentric hazard zones
            const zones = [
                { radius: 10000, color: 'rgba(220,20,60,0.3)', label: 'High Risk' },
                { radius: 20000, color: 'rgba(255,69,0,0.2)', label: 'Medium Risk' },
                { radius: 30000, color: 'rgba(255,165,0,0.1)', label: 'Low Risk' }
            ];

            zones.forEach(zone => {
                const circle = L.circle(v.coordinates, {
                    radius: zone.radius,
                    fillColor: zone.color,
                    fillOpacity: 0.5,
                    color: '#FF4500',
                    weight: 1,
                    opacity: 0.5
                }).addTo(state.map);

                state.markers.hazardZones.push(circle);
            });
        },

        // Add city markers
        addCityMarkers() {
            const v = state.currentVolcano;
            if (!v.nearbyCities) return;

            v.nearbyCities.forEach(city => {
                const cityIcon = L.divIcon({
                    className: 'city-marker-icon',
                    html: '<div class="city-marker"></div>',
                    iconSize: [12, 12],
                    iconAnchor: [6, 6]
                });

                const marker = L.marker(city.coordinates, { icon: cityIcon })
                    .addTo(state.map)
                    .bindPopup(`
                        <strong>${city.name}</strong><br>
                        Distance: ${city.distance}<br>
                        ${city.population ? `Population: ${utils.formatNumber(city.population)}` : ''}
                    `);

                state.markers.cities.push(marker);
            });
        },

        // Setup map controls
        setupMapControls() {
            // Toggle hazard zones
            document.getElementById('toggleHazardZones')?.addEventListener('change', (e) => {
                state.markers.hazardZones.forEach(zone => {
                    if (e.target.checked) {
                        zone.addTo(state.map);
                    } else {
                        state.map.removeLayer(zone);
                    }
                });
            });

            // Toggle cities
            document.getElementById('toggleCities')?.addEventListener('change', (e) => {
                state.markers.cities.forEach(marker => {
                    if (e.target.checked) {
                        marker.addTo(state.map);
                    } else {
                        state.map.removeLayer(marker);
                    }
                });
            });

            // Toggle tectonic plates
            document.getElementById('toggleTectonicPlates')?.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.addTectonicPlates();
                } else {
                    state.markers.tectonicPlates.forEach(layer => state.map.removeLayer(layer));
                    state.markers.tectonicPlates = [];
                }
            });

            // Toggle lava flows
            document.getElementById('toggleLavaFlows')?.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.addLavaFlows();
                } else {
                    state.markers.lavaFlows.forEach(layer => state.map.removeLayer(layer));
                    state.markers.lavaFlows = [];
                }
            });

            // Toggle other volcanoes
            document.getElementById('toggleOtherVolcanoes')?.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.addOtherVolcanoes();
                } else {
                    state.markers.otherVolcanoes.forEach(marker => state.map.removeLayer(marker));
                    state.markers.otherVolcanoes = [];
                }
            });

            // Reset view
            document.getElementById('resetMapView')?.addEventListener('click', () => {
                const v = state.currentVolcano;
                state.map.setView(v.coordinates, v.defaultZoom || CONFIG.defaultZoom);
            });
        },

        // Add tectonic plates visualization
        addTectonicPlates() {
            const v = state.currentVolcano;

            // Simplified plate boundary near volcano
            if (v.tectonicSetting?.plates) {
                const offset = 2;
                const plateLine = L.polyline([
                    [v.coordinates[0] - offset, v.coordinates[1] - offset * 2],
                    [v.coordinates[0], v.coordinates[1] - offset],
                    [v.coordinates[0] + offset, v.coordinates[1]],
                    [v.coordinates[0] + offset * 2, v.coordinates[1] + offset]
                ], {
                    color: '#FF4500',
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 5'
                }).addTo(state.map);

                state.markers.tectonicPlates.push(plateLine);

                // Add plate labels
                v.tectonicSetting.plates.forEach((plate, index) => {
                    const labelPos = [
                        v.coordinates[0] + (index % 2 === 0 ? -1.5 : 1.5),
                        v.coordinates[1] + (index % 2 === 0 ? -1.5 : 1.5)
                    ];

                    const label = L.marker(labelPos, {
                        icon: L.divIcon({
                            className: 'plate-label',
                            html: `<div style="background: rgba(0,0,0,0.7); color: #FF6B35; padding: 4px 8px; border-radius: 4px; font-size: 11px; white-space: nowrap;">${plate}</div>`,
                            iconSize: [100, 20]
                        })
                    }).addTo(state.map);

                    state.markers.tectonicPlates.push(label);
                });
            }
        },

        // Add lava flows visualization
        addLavaFlows() {
            const v = state.currentVolcano;

            // Create simulated lava flow paths
            const flows = [
                [[v.coordinates[0], v.coordinates[1]], [v.coordinates[0] - 0.05, v.coordinates[1] - 0.08], [v.coordinates[0] - 0.15, v.coordinates[1] - 0.12]],
                [[v.coordinates[0], v.coordinates[1]], [v.coordinates[0] + 0.03, v.coordinates[1] - 0.06], [v.coordinates[0] + 0.1, v.coordinates[1] - 0.15]],
                [[v.coordinates[0], v.coordinates[1]], [v.coordinates[0] - 0.02, v.coordinates[1] + 0.05], [v.coordinates[0] - 0.08, v.coordinates[1] + 0.12]]
            ];

            flows.forEach(flow => {
                const lavaPath = L.polyline(flow, {
                    color: '#FF4500',
                    weight: 4,
                    opacity: 0.8
                }).addTo(state.map);

                state.markers.lavaFlows.push(lavaPath);
            });
        },

        // Add other volcanoes
        addOtherVolcanoes() {
            const v = state.currentVolcano;

            // Find nearby volcanoes
            const nearby = state.volcanoes.filter(vol => {
                if (vol.id === v.id) return false;
                const distance = Math.sqrt(
                    Math.pow(vol.coordinates[0] - v.coordinates[0], 2) +
                    Math.pow(vol.coordinates[1] - v.coordinates[1], 2)
                );
                return distance < 10; // Within ~10 degrees
            }).slice(0, 10);

            nearby.forEach(vol => {
                const marker = L.circleMarker(vol.coordinates, {
                    radius: 6,
                    fillColor: vol.status === 'active' ? '#FF4500' : '#FFD700',
                    color: '#fff',
                    weight: 1,
                    fillOpacity: 0.7
                }).addTo(state.map);

                marker.bindPopup(`<strong>${vol.name}</strong><br>${vol.countries[0].name}`);
                state.markers.otherVolcanoes.push(marker);
            });
        },

        // Setup event listeners
        setupEventListeners() {
            // Simulate eruption button
            document.getElementById('simulateEruption')?.addEventListener('click', () => {
                this.startEruptionSimulation();
            });

            // Stop eruption button
            document.getElementById('stopEruption')?.addEventListener('click', () => {
                this.stopEruptionSimulation();
            });

            // Fly over button
            document.getElementById('flyOverBtn')?.addEventListener('click', () => {
                this.startFlyover();
            });

            // Skip flyover
            document.getElementById('skipFlyover')?.addEventListener('click', () => {
                this.stopFlyover();
            });

            // Pause flyover
            document.getElementById('pauseFlyover')?.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (state.flyoverInterval) {
                    clearInterval(state.flyoverInterval);
                    state.flyoverInterval = null;
                    icon.className = 'fas fa-play';
                }
            });

            // Tectonic view toggle
            document.getElementById('tectonicToggleProfile')?.addEventListener('click', function() {
                this.classList.toggle('active');
                const checkbox = document.getElementById('toggleTectonicPlates');
                if (checkbox) {
                    checkbox.checked = this.classList.contains('active');
                    checkbox.dispatchEvent(new Event('change'));
                }
            });

            // Fullscreen button
            document.getElementById('fullscreenBtn')?.addEventListener('click', () => {
                this.toggleFullscreen();
            });

            // Quick facts toggle (mobile)
            document.getElementById('quickFactsToggle')?.addEventListener('click', () => {
                document.getElementById('quickFactsPanel')?.classList.toggle('collapsed');
            });

            // Previous/Next navigation
            document.getElementById('prevVolcano')?.addEventListener('click', () => {
                this.navigateVolcano(-1);
            });

            document.getElementById('nextVolcano')?.addEventListener('click', () => {
                this.navigateVolcano(1);
            });
        },

        // Setup navigation
        setupNavigation() {
            const sorted = [...state.volcanoes].sort((a, b) => b.elevation - a.elevation);
            const currentIndex = sorted.findIndex(v => v.id === state.currentVolcano.id);

            const prevBtn = document.getElementById('prevVolcano');
            const nextBtn = document.getElementById('nextVolcano');

            if (prevBtn) {
                prevBtn.disabled = currentIndex === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = currentIndex === sorted.length - 1;
            }
        },

        // Navigate to previous/next volcano
        navigateVolcano(direction) {
            const sorted = [...state.volcanoes].sort((a, b) => b.elevation - a.elevation);
            const currentIndex = sorted.findIndex(v => v.id === state.currentVolcano.id);
            const newIndex = currentIndex + direction;

            if (newIndex >= 0 && newIndex < sorted.length) {
                window.location.href = `volcanoes-profile.html?id=${sorted[newIndex].id}`;
            }
        },

        // Start eruption simulation
        startEruptionSimulation() {
            const overlay = document.getElementById('eruptionOverlay');
            if (!overlay) return;

            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            const phases = [
                { number: 1, text: 'Seismic Activity Increasing...', duration: 3000 },
                { number: 2, text: 'Eruption Beginning...', duration: 3000 },
                { number: 3, text: 'Lava Flow Detected...', duration: 3000 },
                { number: 4, text: 'Ash Cloud Spreading...', duration: 3000 },
                { number: 5, text: 'Eruption Subsiding...', duration: 3000 }
            ];

            let currentPhase = 0;
            const v = state.currentVolcano;

            // Update VEI display
            document.getElementById('veiLevel').textContent = v.lastEruption?.vei || '4';
            document.getElementById('affectedRadius').textContent = '30 km';
            document.getElementById('ashCloudHeight').textContent = '15 km';

            const updatePhase = () => {
                const phase = phases[currentPhase];
                document.querySelector('.phase-number').textContent = `Phase ${phase.number}`;
                document.querySelector('.phase-text').textContent = phase.text;

                // Visual effects based on phase
                if (phase.number === 2) {
                    document.getElementById('lavaFountain')?.classList.add('active');
                }
                if (phase.number === 3) {
                    document.querySelectorAll('.lava-flow').forEach(flow => flow.classList.add('active'));
                }
                if (phase.number === 4) {
                    document.getElementById('ashCloudAnimation')?.classList.add('active');
                }

                currentPhase++;
                if (currentPhase < phases.length) {
                    state.eruptionInterval = setTimeout(updatePhase, phase.duration);
                } else {
                    setTimeout(() => this.stopEruptionSimulation(), 3000);
                }
            };

            // Add screen shake
            document.body.classList.add('eruption-shake');

            updatePhase();
        },

        // Stop eruption simulation
        stopEruptionSimulation() {
            const overlay = document.getElementById('eruptionOverlay');
            if (!overlay) return;

            clearTimeout(state.eruptionInterval);
            state.eruptionInterval = null;

            overlay.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('eruption-shake');

            // Reset visual elements
            document.getElementById('lavaFountain')?.classList.remove('active');
            document.getElementById('ashCloudAnimation')?.classList.remove('active');
            document.querySelectorAll('.lava-flow').forEach(flow => flow.classList.remove('active'));
        },

        // Start flyover
        startFlyover() {
            const overlay = document.getElementById('flyoverOverlay');
            if (!overlay || !state.map) return;

            const v = state.currentVolcano;
            const waypoints = v.flyOverWaypoints || this.generateDefaultWaypoints(v);

            overlay.classList.add('active');

            // Create waypoint dots
            const waypointsContainer = document.getElementById('progressWaypoints');
            waypointsContainer.innerHTML = waypoints.map((_, i) => 
                `<div class="waypoint-dot ${i === 0 ? 'active' : ''}"></div>`
            ).join('');

            let currentWaypoint = 0;

            const flyToWaypoint = () => {
                if (currentWaypoint >= waypoints.length) {
                    this.stopFlyover();
                    return;
                }

                const wp = waypoints[currentWaypoint];

                // Update UI
                document.getElementById('waypointName').textContent = wp.name;
                document.getElementById('waypointDescription').textContent = wp.description || '';
                document.getElementById('currentAltitude').textContent = `${utils.formatNumber(wp.zoom * 500)}m`;

                // Update progress
                const progress = ((currentWaypoint + 1) / waypoints.length) * 100;
                document.getElementById('flyoverProgress').style.width = `${progress}%`;

                // Update waypoint dots
                document.querySelectorAll('.waypoint-dot').forEach((dot, i) => {
                    dot.classList.remove('active');
                    if (i < currentWaypoint) dot.classList.add('completed');
                    if (i === currentWaypoint) dot.classList.add('active');
                });

                // Fly to location
                state.map.flyTo(wp.coordinates, wp.zoom, {
                    duration: 2
                });

                currentWaypoint++;
                state.flyoverInterval = setTimeout(flyToWaypoint, CONFIG.animationDuration.flyover);
            };

            flyToWaypoint();
        },

        // Generate default waypoints
        generateDefaultWaypoints(v) {
            return [
                { name: 'Distant View', coordinates: [v.coordinates[0], v.coordinates[1] + 1], zoom: 7, description: 'Approaching the region' },
                { name: 'Regional View', coordinates: [v.coordinates[0] + 0.5, v.coordinates[1] + 0.5], zoom: 9, description: 'Viewing the surrounding area' },
                { name: 'Approaching Summit', coordinates: [v.coordinates[0] + 0.1, v.coordinates[1]], zoom: 11, description: 'Getting closer to the peak' },
                { name: 'Summit View', coordinates: v.coordinates, zoom: 13, description: 'Overhead view of the crater' },
                { name: 'Final View', coordinates: v.coordinates, zoom: v.defaultZoom || 10, description: 'Settling into position' }
            ];
        },

        // Stop flyover
        stopFlyover() {
            const overlay = document.getElementById('flyoverOverlay');
            if (!overlay) return;

            clearInterval(state.flyoverInterval);
            state.flyoverInterval = null;

            overlay.classList.remove('active');

            // Reset to default view
            const v = state.currentVolcano;
            state.map?.setView(v.coordinates, v.defaultZoom || CONFIG.defaultZoom);
        },

        // Toggle fullscreen
        toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log('Fullscreen error:', err);
                });
            } else {
                document.exitFullscreen();
            }
        },

        // Hide loading
        hideLoading() {
            const loading = document.getElementById('profileLoading');
            if (loading) {
                setTimeout(() => {
                    loading.classList.add('hidden');
                }, 800);
            }
        }
    };

    /* ═══════════════════════════════════════════════════════════
       INITIALIZATION
       ═══════════════════════════════════════════════════════════ */
    
    function init() {
        // Wait for data to be loaded
        const checkData = setInterval(() => {
            if (typeof window.volcanoesData !== 'undefined') {
                clearInterval(checkData);
                
                // Determine which page we're on and initialize
                if (document.querySelector('.profile-page')) {
                    profilePage.init();
                } else if (document.getElementById('volcanoesGrid')) {
                    mainPage.init();
                }
            }
        }, 100);

        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkData);
            if (typeof window.volcanoesData === 'undefined') {
                console.error('Failed to load volcano data');
                const loading = document.getElementById('loadingState') || document.getElementById('profileLoading');
                if (loading) {
                    loading.innerHTML = `
                        <div style="text-align: center; color: var(--text-muted);">
                            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--lava-red); margin-bottom: 20px;"></i>
                            <p>Failed to load volcano data. Please refresh the page.</p>
                        </div>
                    `;
                }
            }
        }, 5000);
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
