// ============================================
// MOUNTAIN SYSTEMS EXPLORER - MAIN APPLICATION
// ============================================

(function() {
    'use strict';

    // ========================================
    // CONFIGURATION
    // ========================================
    const CONFIG = {
        animationDelay: 100,
        mapDefaultZoom: 6,
        peakAnimationDelay: 500,
        loadingDuration: 2500
    };

    // ========================================
    // DOM ELEMENTS
    // ========================================
    const DOM = {
        loadingScreen: document.getElementById('loading-screen'),
        mountainsGrid: document.getElementById('mountains-grid'),
        searchInput: document.getElementById('mountain-search'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        sortSelect: document.getElementById('sort-select'),
        worldMap: document.getElementById('world-map'),
        totalMountains: document.getElementById('total-mountains')
    };

    // ========================================
    // STATE
    // ========================================
    let state = {
        currentFilter: 'all',
        currentSort: 'elevation-desc',
        searchQuery: '',
        worldMapInstance: null,
        profileMapInstance: null,
        currentMountain: null
    };

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        // Check which page we're on
        if (document.body.classList.contains('profile-page')) {
            initProfilePage();
        } else {
            initHomePage();
        }
    }

    // ========================================
    // HOME PAGE INITIALIZATION
    // ========================================
    function initHomePage() {
        // Hide loading screen after delay
        setTimeout(() => {
            if (DOM.loadingScreen) {
                DOM.loadingScreen.classList.add('hidden');
            }
        }, CONFIG.loadingDuration);

        // Update stats
        if (DOM.totalMountains) {
            DOM.totalMountains.textContent = mountainsDataSorted.length;
        }

        // Render mountain cards
        renderMountainCards(mountainsDataSorted);

        // Initialize world map
        initWorldMap();

        // Setup event listeners
        setupEventListeners();
    }

    // ========================================
    // RENDER MOUNTAIN CARDS
    // ========================================
    function renderMountainCards(mountains) {
        if (!DOM.mountainsGrid) return;

        DOM.mountainsGrid.innerHTML = '';

        mountains.forEach((mountain, index) => {
            const card = createMountainCard(mountain, index + 1);
            DOM.mountainsGrid.appendChild(card);
        });
    }

    function createMountainCard(mountain, rank) {
        const card = document.createElement('div');
        card.className = 'mountain-card';
        card.style.animationDelay = `${rank * CONFIG.animationDelay}ms`;
        card.dataset.mountainId = mountain.id;
        card.dataset.continent = mountain.continent.toLowerCase();

        const elevationClass = getElevationClass(mountain.highestPeak.elevation);
        
        // Create flag images HTML
        const flagsHtml = mountain.countries.slice(0, 4).map(country => 
            `<img src="${getFlagImageUrl(country.code)}" alt="${country.name}" title="${country.name}">`
        ).join('');

        card.innerHTML = `
            <div class="card-image-container">
                <span class="card-rank">#${rank}</span>
                <img src="${mountain.images.card}" alt="${mountain.name}" loading="lazy" 
                     onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400'">
                <span class="card-elevation-badge ${elevationClass}">
                    ${formatElevation(mountain.highestPeak.elevation)}
                </span>
            </div>
            <h3 class="card-name">${mountain.name}</h3>
            <div class="card-flags">
                ${flagsHtml}
            </div>
            <div class="card-info">
                <span>${mountain.highestPeak.name}</span>
                <span>${mountain.continent}</span>
            </div>
        `;

        // Click handler
        card.addEventListener('click', () => {
            navigateToProfile(mountain.slug);
        });

        return card;
    }

    function navigateToProfile(slug) {
        window.location.href = `MOUNTAINS-profile.html?mountain=${slug}`;
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    function setupEventListeners() {
        // Search
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', debounce(handleSearch, 300));
        }

        // Filter buttons
        DOM.filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilter);
        });

        // Sort select
        if (DOM.sortSelect) {
            DOM.sortSelect.addEventListener('change', handleSort);
        }

        // Elevation scale segments
        document.querySelectorAll('.scale-segment').forEach(segment => {
            segment.addEventListener('click', () => {
                const elevation = segment.dataset.elevation;
                filterByElevation(elevation);
            });
        });
    }

    function handleSearch(e) {
        state.searchQuery = e.target.value;
        applyFilters();
    }

    function handleFilter(e) {
        const filter = e.currentTarget.dataset.filter;
        
        // Update active state
        DOM.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        state.currentFilter = filter;
        applyFilters();
    }

    function handleSort(e) {
        state.currentSort = e.target.value;
        applyFilters();
    }

    function filterByElevation(elevationRange) {
        let filtered = mountainsDataSorted;
        
        switch(elevationRange) {
            case '8000+':
                filtered = filtered.filter(m => m.highestPeak.elevation >= 8000);
                break;
            case '6000-8000':
                filtered = filtered.filter(m => m.highestPeak.elevation >= 6000 && m.highestPeak.elevation < 8000);
                break;
            case '4000-6000':
                filtered = filtered.filter(m => m.highestPeak.elevation >= 4000 && m.highestPeak.elevation < 6000);
                break;
            case '2000-4000':
                filtered = filtered.filter(m => m.highestPeak.elevation >= 2000 && m.highestPeak.elevation < 4000);
                break;
            case '0-2000':
                filtered = filtered.filter(m => m.highestPeak.elevation < 2000);
                break;
        }
        
        renderMountainCards(filtered);
    }

    function applyFilters() {
        let filtered = mountainsDataSorted;

        // Apply continent filter
        if (state.currentFilter !== 'all') {
            filtered = filterByContinent(state.currentFilter);
        }

        // Apply search
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filtered = filtered.filter(m => 
                m.name.toLowerCase().includes(query) ||
                m.countries.some(c => c.name.toLowerCase().includes(query)) ||
                m.highestPeak.name.toLowerCase().includes(query)
            );
        }

        // Apply sort
        filtered = sortMountains(filtered, state.currentSort);

        renderMountainCards(filtered);
    }

    // ========================================
    // WORLD MAP
    // ========================================
    function initWorldMap() {
        if (!DOM.worldMap || typeof L === 'undefined') return;

        // Create map
        state.worldMapInstance = L.map('world-map', {
            center: [20, 0],
            zoom: 2,
            minZoom: 2,
            maxZoom: 10,
            scrollWheelZoom: true
        });

        // Add tile layer (terrain style)
        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap contributors',
            maxZoom: 17
        }).addTo(state.worldMapInstance);

        // Add mountain markers
        addMountainMarkers(state.worldMapInstance);
    }

    function addMountainMarkers(map) {
        mountainsDataSorted.forEach(mountain => {
            const coords = mountain.highestPeak.coordinates;
            const elevationClass = getElevationClass(mountain.highestPeak.elevation);
            
            // Custom icon based on elevation
            const markerColor = getMarkerColor(elevationClass);
            
            const customIcon = L.divIcon({
                className: 'custom-mountain-marker',
                html: `<div style="
                    background: ${markerColor};
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 3px solid white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    cursor: pointer;
                "></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker([coords.lat, coords.lng], { icon: customIcon })
                .addTo(map);

            // Popup content
            const popupContent = `
                <div class="custom-popup">
                    <h4>${mountain.name}</h4>
                    <p><strong>${mountain.highestPeak.name}</strong></p>
                    <p>Elevation: ${formatElevation(mountain.highestPeak.elevation)}</p>
                    <p>Countries: ${mountain.countries.map(c => c.name).join(', ')}</p>
                    <button onclick="window.location.href='MOUNTAINS-profile.html?mountain=${mountain.slug}'" 
                            style="margin-top: 10px; padding: 5px 15px; background: #1a5f7a; color: white; border: none; border-radius: 15px; cursor: pointer;">
                        Explore →
                    </button>
                </div>
            `;

            marker.bindPopup(popupContent);
        });
    }

    function getMarkerColor(elevationClass) {
        const colors = {
            'extreme': '#dc2626',
            'very-high': '#ea580c',
            'high': '#ca8a04',
            'medium': '#16a34a',
            'low': '#2563eb'
        };
        return colors[elevationClass] || colors.medium;
    }

    // ========================================
    // PROFILE PAGE
    // ========================================
    function initProfilePage() {
        // Get mountain slug from URL
        const urlParams = new URLSearchParams(window.location.search);
        const mountainSlug = urlParams.get('mountain');

        if (!mountainSlug) {
            window.location.href = 'MOUNTAINS.html';
            return;
        }

        // Find mountain data
        const mountain = getMountainBySlug(mountainSlug);
        
        if (!mountain) {
            console.error('Mountain not found:', mountainSlug);
            window.location.href = 'MOUNTAINS.html';
            return;
        }

        state.currentMountain = mountain;

        // Render all sections
        renderProfileBackground(mountain);
        renderProfileHero(mountain);
        renderProfileMap(mountain);
        renderPeaksAnimation(mountain);
        renderMindMap(mountain);
        renderFlyoverGallery(mountain);
        renderRiversSection(mountain);
        renderBiodiversitySection(mountain);
        renderTimelineSection(mountain);
        renderEnvironmentalSection(mountain);
        renderOtherMountains(mountain);
        
        // Setup profile event listeners
        setupProfileEventListeners();
    }

    function renderProfileBackground(mountain) {
        const bg = document.getElementById('mountain-background');
        if (bg) {
            bg.style.backgroundImage = `url('${mountain.images.background}')`;
        }
    }

    function renderProfileHero(mountain) {
        // Update page title
        document.title = `${mountain.name} | Mountain Systems Explorer`;
        document.getElementById('page-title').textContent = `${mountain.name} | Mountain Systems Explorer`;

        // Navigation title
        const navName = document.getElementById('nav-mountain-name');
        if (navName) navName.textContent = mountain.name;

        // Mountain name
        const nameEl = document.getElementById('mountain-name');
        if (nameEl) nameEl.textContent = mountain.name;

        // Subtitle
        const subtitle = document.getElementById('mountain-subtitle');
        if (subtitle) {
            subtitle.textContent = `${mountain.continent} • ${mountain.countries.map(c => c.name).join(', ')}`;
        }

        // Elevation badge
        const badge = document.getElementById('elevation-badge');
        if (badge) {
            badge.querySelector('.badge-elevation').textContent = formatElevation(mountain.highestPeak.elevation);
        }

        // Hero stats
        const statsContainer = document.getElementById('hero-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="hero-stat">
                    <span class="hero-stat-value">${formatElevation(mountain.highestPeak.elevation)}</span>
                    <span class="hero-stat-label">Highest Peak</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-value">${mountain.length.toLocaleString()} km</span>
                    <span class="hero-stat-label">Total Length</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-value">${mountain.majorPeaks.length}</span>
                    <span class="hero-stat-label">Major Peaks</span>
                </div>
                <div class="hero-stat">
                    <span class="hero-stat-value">${mountain.countries.length}</span>
                    <span class="hero-stat-label">Countries</span>
                </div>
            `;
        }

        // Country flags
        const flagsContainer = document.getElementById('country-flags');
        if (flagsContainer) {
            flagsContainer.innerHTML = mountain.countries.map(country => 
                `<img src="${getFlagImageUrl(country.code)}" alt="${country.name}" title="${country.name}">`
            ).join('');
        }
    }

    function renderProfileMap(mountain) {
        const mapContainer = document.getElementById('mountain-map');
        if (!mapContainer || typeof L === 'undefined') return;

        // Create map
        state.profileMapInstance = L.map('mountain-map', {
            center: [mountain.mapCenter.lat, mountain.mapCenter.lng],
            zoom: mountain.mapZoom || 7
        });

        // Terrain layer (default)
        const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap'
        });

        // Satellite layer
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri'
        });

        // Topo layer
        const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap'
        });

        terrainLayer.addTo(state.profileMapInstance);

        // Layer control buttons
        document.querySelectorAll('.map-control-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.map-control-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const layer = btn.dataset.layer;
                state.profileMapInstance.eachLayer(l => {
                    if (l instanceof L.TileLayer) {
                        state.profileMapInstance.removeLayer(l);
                    }
                });
                
                switch(layer) {
                    case 'satellite':
                        satelliteLayer.addTo(state.profileMapInstance);
                        break;
                    case 'topo':
                        topoLayer.addTo(state.profileMapInstance);
                        break;
                    default:
                        terrainLayer.addTo(state.profileMapInstance);
                }
            });
        });

        // Add peak markers
        addPeakMarkers(state.profileMapInstance, mountain);

        // Add river lines
        addRiverLines(state.profileMapInstance, mountain);
    }

    function addPeakMarkers(map, mountain) {
        // Add marker for highest peak
        const highestPeak = mountain.highestPeak;
        
        const peakIcon = L.divIcon({
            className: 'peak-marker',
            html: `<div class="peak-marker-content">
                🏔️ ${highestPeak.name}<br>
                <strong>${formatElevation(highestPeak.elevation)}</strong>
            </div>`,
            iconSize: [150, 50],
            iconAnchor: [75, 25]
        });

        L.marker([highestPeak.coordinates.lat, highestPeak.coordinates.lng], { icon: peakIcon })
            .addTo(map);

        // Add markers for other major peaks (simulated positions around center)
        mountain.majorPeaks.forEach((peak, index) => {
            if (index === 0) return; // Skip highest peak (already added)
            
            // Generate positions around the center
            const angle = (index * 45) * (Math.PI / 180);
            const distance = 0.2 + (index * 0.1);
            const lat = mountain.mapCenter.lat + (Math.cos(angle) * distance);
            const lng = mountain.mapCenter.lng + (Math.sin(angle) * distance);

            const icon = L.divIcon({
                className: 'peak-marker',
                html: `<div style="
                    background: rgba(220, 38, 38, 0.9);
                    color: white;
                    padding: 3px 8px;
                    border-radius: 10px;
                    font-size: 11px;
                    white-space: nowrap;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                ">⛰️ ${peak.name}: ${formatElevation(peak.elevation)}</div>`,
                iconSize: [120, 30],
                iconAnchor: [60, 15]
            });

            L.marker([lat, lng], { icon: icon }).addTo(map);
        });
    }

    function addRiverLines(map, mountain) {
        if (!mountain.rivers || mountain.rivers.length === 0) return;

        mountain.rivers.forEach((river, index) => {
            // Generate a river path from mountain center
            const startLat = mountain.mapCenter.lat;
            const startLng = mountain.mapCenter.lng;
            const angle = (index * 60) * (Math.PI / 180);
            const endLat = startLat + (Math.cos(angle) * 2);
            const endLng = startLng + (Math.sin(angle) * 3);

            const riverPath = [
                [startLat, startLng],
                [startLat + (endLat - startLat) * 0.3, startLng + (endLng - startLng) * 0.4],
                [startLat + (endLat - startLat) * 0.6, startLng + (endLng - startLng) * 0.7],
                [endLat, endLng]
            ];

            const polyline = L.polyline(riverPath, {
                color: '#3b82f6',
                weight: 3,
                opacity: 0.8,
                dashArray: '10, 10',
                className: 'animated-river'
            }).addTo(map);

            polyline.bindPopup(`<strong>${river.name}</strong><br>Length: ${river.length.toLocaleString()} km`);
        });
    }

    function renderPeaksAnimation(mountain) {
        const container = document.getElementById('peaks-list');
        if (!container) return;

        container.innerHTML = '';

        mountain.majorPeaks.forEach((peak, index) => {
            const peakEl = document.createElement('div');
            peakEl.className = 'peak-item';
            peakEl.style.animationDelay = `${(index + 1) * CONFIG.peakAnimationDelay}ms`;
            
            peakEl.innerHTML = `
                <span class="peak-name">🏔️ ${peak.name}</span>
                <span class="peak-elevation">${formatElevation(peak.elevation)}</span>
            `;
            
            container.appendChild(peakEl);
        });
    }

    function renderMindMap(mountain) {
        const container = document.getElementById('mindmap-branches');
        const centerTitle = document.getElementById('mindmap-title');
        
        if (!container) return;
        
        if (centerTitle) centerTitle.textContent = mountain.name;

        // Define branches with positions
        const branches = [
            {
                id: 'location',
                icon: 'fa-map-marker-alt',
                title: 'Location',
                position: { top: '5%', left: '5%' },
                content: `
                    <li>Continent: ${mountain.continent}</li>
                    <li>Countries: ${mountain.countries.map(c => c.name).join(', ')}</li>
                    <li>Coordinates: ${mountain.mapCenter.lat.toFixed(2)}°, ${mountain.mapCenter.lng.toFixed(2)}°</li>
                `
            },
            {
                id: 'highest-peak',
                icon: 'fa-mountain',
                title: 'Highest Peak',
                position: { top: '5%', right: '5%' },
                content: `
                    <li>Name: ${mountain.highestPeak.name}</li>
                    <li>Elevation: ${formatElevation(mountain.highestPeak.elevation)}</li>
                    <li>Coordinates: ${mountain.highestPeak.coordinates.lat.toFixed(4)}°N, ${mountain.highestPeak.coordinates.lng.toFixed(4)}°E</li>
                `
            },
            {
                id: 'formation',
                icon: 'fa-layer-group',
                title: 'Formation',
                position: { top: '30%', left: '0%' },
                content: `
                    <li>Origin: ${mountain.formation.origin}</li>
                    <li>Age: ${mountain.formation.age}</li>
                    <li>Tectonics: ${mountain.formation.plates}</li>
                `
            },
            {
                id: 'dimensions',
                icon: 'fa-ruler',
                title: 'Dimensions',
                position: { top: '30%', right: '0%' },
                content: `
                    <li>Length: ${mountain.length.toLocaleString()} km</li>
                    <li>Average Elevation: ${formatElevation(mountain.averageElevation)}</li>
                    <li>Major Peaks: ${mountain.majorPeaks.length}</li>
                `
            },
            {
                id: 'glaciers',
                icon: 'fa-snowflake',
                title: 'Glaciers',
                position: { top: '55%', left: '0%' },
                content: mountain.glaciers.map(g => `<li>${g}</li>`).join('')
            },
            {
                id: 'rivers',
                icon: 'fa-water',
                title: 'Rivers',
                position: { top: '55%', right: '0%' },
                content: mountain.rivers.map(r => `<li>${r.name} (${r.length.toLocaleString()} km)</li>`).join('')
            },
            {
                id: 'biodiversity',
                icon: 'fa-leaf',
                title: 'Biodiversity',
                position: { bottom: '25%', left: '5%' },
                content: `
                    <li><strong>Wildlife:</strong> ${mountain.biodiversity.wildlife.join(', ')}</li>
                    <li><strong>Vegetation:</strong> ${mountain.biodiversity.vegetation.join(', ')}</li>
                `
            },
            {
                id: 'climate',
                icon: 'fa-cloud-sun',
                title: 'Climate',
                position: { bottom: '25%', right: '5%' },
                content: `<li>${mountain.climate}</li>`
            },
            {
                id: 'settlements',
                icon: 'fa-city',
                title: 'Settlements',
                position: { bottom: '5%', left: '20%' },
                content: mountain.settlements.map(s => `<li>${s}</li>`).join('')
            },
            {
                id: 'economy',
                icon: 'fa-coins',
                title: 'Economy',
                position: { bottom: '5%', right: '20%' },
                content: Object.entries(mountain.economy).map(([key, value]) => 
                    `<li><strong>${key}:</strong> ${value}</li>`
                ).join('')
            }
        ];

        container.innerHTML = '';

        branches.forEach(branch => {
            const branchEl = document.createElement('div');
            branchEl.className = 'mindmap-branch';
            branchEl.id = `branch-${branch.id}`;
            
            // Apply position
            Object.entries(branch.position).forEach(([key, value]) => {
                branchEl.style[key] = value;
            });

            branchEl.innerHTML = `
                <div class="branch-header">
                    <i class="fas ${branch.icon}"></i>
                    <h4>${branch.title}</h4>
                </div>
                <div class="branch-content">
                    <ul>${branch.content}</ul>
                </div>
            `;

            // Toggle expand on click
            branchEl.addEventListener('click', () => {
                branchEl.classList.toggle('expanded');
            });

            container.appendChild(branchEl);
        });
    }

    function renderFlyoverGallery(mountain) {
        const gallery = document.getElementById('flyover-gallery');
        const info = document.getElementById('flyover-info');
        
        if (!gallery) return;

        // Use available images or defaults
        const images = mountain.images.gallery.length > 0 
            ? mountain.images.gallery 
            : [
                mountain.images.background,
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
                'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200'
            ];

        let currentIndex = 0;

        // Create images
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.className = `flyover-image ${index === 0 ? 'active' : ''}`;
            img.src = src;
            img.alt = `${mountain.name} aerial view ${index + 1}`;
            gallery.appendChild(img);
        });

        // Navigation
        const prevBtn = document.getElementById('prev-view');
        const nextBtn = document.getElementById('next-view');

        function updateView() {
            gallery.querySelectorAll('.flyover-image').forEach((img, i) => {
                img.classList.toggle('active', i === currentIndex);
            });
            
            if (info) {
                info.innerHTML = `
                    <span class="view-name">Aerial View ${currentIndex + 1}</span>
                    <span class="view-description">${mountain.name} from above</span>
                `;
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateView();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateView();
            });
        }

        // Auto-rotate
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateView();
        }, 5000);
    }

    function renderRiversSection(mountain) {
        const container = document.getElementById('rivers-container');
        if (!container || !mountain.rivers) return;

        container.innerHTML = mountain.rivers.map(river => `
            <div class="river-card">
                <div class="river-icon">
                    <i class="fas fa-water"></i>
                </div>
                <h3 class="river-name">${river.name}</h3>
                <p class="river-info">
                    <strong>Length:</strong> ${river.length.toLocaleString()} km<br>
                    <strong>Origin:</strong> ${mountain.name}<br>
                    This river begins its journey in the ${mountain.name} mountains.
                </p>
            </div>
        `).join('');
    }

    function renderBiodiversitySection(mountain) {
        const container = document.getElementById('biodiversity-grid');
        if (!container) return;

        const bioData = [
            {
                icon: '🦁',
                title: 'Wildlife',
                content: mountain.biodiversity.wildlife.join(', ')
            },
            {
                icon: '🌲',
                title: 'Vegetation Zones',
                content: mountain.biodiversity.vegetation.join(', ')
            },
            {
                icon: '🌡️',
                title: 'Climate',
                content: mountain.climate
            },
            {
                icon: '❄️',
                title: 'Glaciers',
                content: mountain.glaciers.length > 0 
                    ? `${mountain.glaciers.length} major glaciers including ${mountain.glaciers[0]}`
                    : 'No permanent glaciers'
            }
        ];

        container.innerHTML = bioData.map(item => `
            <div class="bio-card">
                <div class="bio-card-icon">${item.icon}</div>
                <h4 class="bio-card-title">${item.title}</h4>
                <p class="bio-card-content">${item.content}</p>
            </div>
        `).join('');
    }

    function renderTimelineSection(mountain) {
        const container = document.getElementById('timeline');
        if (!container) return;

        const timelineData = [
            {
                date: mountain.formation.age,
                title: 'Mountain Formation',
                text: `${mountain.formation.origin}. ${mountain.formation.plates}`
            },
            {
                date: 'Ancient Times',
                title: 'Historical Significance',
                text: mountain.history.cultural || 'Important in local traditions and mythology.'
            },
            {
                date: 'Trade Era',
                title: 'Trade Routes',
                text: mountain.history.tradeRoutes || 'Part of ancient trade networks.'
            },
            {
                date: 'Modern Era',
                title: 'Exploration & Expeditions',
                text: mountain.history.expeditions || 'Subject of numerous scientific expeditions.'
            },
            {
                date: 'Present Day',
                title: 'Current Status',
                text: `Home to ${mountain.settlements.join(', ')}. Major destination for ${mountain.economy.tourism || 'tourism'}.`
            }
        ];

        container.innerHTML = timelineData.map((item, index) => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h4 class="timeline-title">${item.title}</h4>
                    <p class="timeline-text">${item.text}</p>
                </div>
            </div>
        `).join('');
    }

    function renderEnvironmentalSection(mountain) {
        const container = document.getElementById('environmental-grid');
        if (!container || !mountain.environmentalIssues) return;

        const icons = ['🌡️', '🏔️', '🌲', '💧', '🔥', '🌊'];

        container.innerHTML = mountain.environmentalIssues.map((issue, index) => `
            <div class="env-card">
                <div class="env-icon">${icons[index % icons.length]}</div>
                <h4 class="env-title">Environmental Challenge</h4>
                <p class="env-description">${issue}</p>
            </div>
        `).join('');
    }

    function renderOtherMountains(mountain) {
        const container = document.getElementById('other-mountains');
        if (!container) return;

        const others = getRandomMountains(mountain.id, 5);

        container.innerHTML = others.map(m => `
            <div class="other-mountain-card" onclick="window.location.href='MOUNTAINS-profile.html?mountain=${m.slug}'">
                <div class="other-mountain-image">
                    <img src="${m.images.card}" alt="${m.name}" 
                         onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400'">
                </div>
                <span class="other-mountain-name">${m.name}</span>
            </div>
        `).join('');
    }

    function setupProfileEventListeners() {
        // Fullscreen button
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            });
        }

        // Share button
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                if (navigator.share) {
                    navigator.share({
                        title: state.currentMountain.name,
                        text: `Explore ${state.currentMountain.name} - ${state.currentMountain.highestPeak.name} at ${formatElevation(state.currentMountain.highestPeak.elevation)}`,
                        url: window.location.href
                    });
                } else {
                    // Copy to clipboard
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                }
            });
        }

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ========================================
    // START APPLICATION
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
