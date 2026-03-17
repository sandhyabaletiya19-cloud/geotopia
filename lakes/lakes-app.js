// ============================================
// LAKES EXPLORER - MAIN APPLICATION
// ============================================

console.log('Loading lakes-app.js...');

// Global Variables
let allLakes = [];
let map = null;
let currentLake = null;
let layerGroups = {
    lakePolygon: null,
    rivers: null,
    cities: null,
    islands: null,
    depthZones: null,
    countries: null
};
let flyOverAnimation = null;
let isPaused = false;

// Country Flag API
const getFlagUrl = (countryCode) => `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

// Format numbers with commas
function formatNumber(num) {
    if (num === undefined || num === null || num === 'Unknown') return 'Unknown';
    return new Intl.NumberFormat().format(num);
}

// Initialize Main Page
function initLakesPage() {
    console.log('initLakesPage called');
    
    // Check if we're on the main lakes page
    const lakesGrid = document.getElementById('lakesGrid');
    if (!lakesGrid) {
        console.log('lakesGrid not found - might be on profile page');
        return;
    }
    
    // Get all lakes data
    if (typeof getAllLakesData === 'function') {
        allLakes = getAllLakesData();
        console.log('Lakes loaded:', allLakes.length);
    } else {
        console.error('getAllLakesData function not found!');
        allLakes = [];
    }
    
    if (allLakes.length === 0) {
        console.error('No lakes data found!');
        lakesGrid.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">No lakes data found. Please check console for errors.</p>';
        hideLoading();
        return;
    }
    
    // Sort by surface area (largest first)
    allLakes.sort((a, b) => b.surfaceArea - a.surfaceArea);
    
    // Update stats
    updateStats();
    
    // Render lake cards
    renderLakeCards(allLakes);
    
    // Setup event listeners
    setupEventListeners();
    
    // Hide loading
    hideLoading();
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 500);
    }
}

function updateStats() {
    const totalLakesEl = document.getElementById('totalLakes');
    const totalCountriesEl = document.getElementById('totalCountries');
    
    if (totalLakesEl) {
        totalLakesEl.textContent = allLakes.length;
    }
    
    if (totalCountriesEl) {
        const countries = new Set();
        allLakes.forEach(lake => {
            if (lake.countries && Array.isArray(lake.countries)) {
                lake.countries.forEach(c => countries.add(c.name));
            }
        });
        totalCountriesEl.textContent = countries.size;
    }
}

function renderLakeCards(lakes) {
    const grid = document.getElementById('lakesGrid');
    if (!grid) {
        console.error('lakesGrid element not found!');
        return;
    }
    
    grid.innerHTML = '';
    
    if (lakes.length === 0) {
        grid.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">No lakes found matching your criteria.</p>';
        return;
    }
    
    lakes.forEach((lake, index) => {
        const card = createLakeCard(lake, index + 1);
        grid.appendChild(card);
    });
    
    console.log('Rendered', lakes.length, 'lake cards');
}

function createLakeCard(lake, rank) {
    const card = document.createElement('div');
    card.className = 'lake-card';
    card.onclick = () => openLakeProfile(lake.id);
    
    // Generate country flags HTML
    let flagsHtml = '';
    if (lake.countries && Array.isArray(lake.countries)) {
        flagsHtml = lake.countries.map(c => 
            `<img src="${getFlagUrl(c.code)}" alt="${c.name}" class="country-flag" title="${c.name}" onerror="this.style.display='none'">`
        ).join('');
    }
    
    // Get image URL with fallback
    const imageUrl = lake.image || 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400';
    
    card.innerHTML = `
        <div class="lake-image-container">
            <img src="${imageUrl}" alt="${lake.name}" class="lake-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400'">
            <div class="lake-overlay"></div>
            <span class="lake-rank">#${rank}</span>
            <span class="water-type-badge ${lake.waterType || 'freshwater'}">${lake.waterType || 'freshwater'}</span>
        </div>
        <div class="lake-info">
            <h3 class="lake-name">${lake.name}</h3>
            <div class="country-flags">${flagsHtml}</div>
            <p class="lake-area">
                <i class="fas fa-expand-arrows-alt"></i>
                ${formatNumber(lake.surfaceArea)} km²
            </p>
        </div>
    `;
    
    return card;
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterLakes();
        });
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterLakes();
        });
    });
    
    // Continent filter
    const continentFilter = document.getElementById('continentFilter');
    if (continentFilter) {
        continentFilter.addEventListener('change', () => {
            filterLakes();
        });
    }
}

function filterLakes() {
    const searchInput = document.getElementById('searchInput');
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const continentFilter = document.getElementById('continentFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
    const continent = continentFilter ? continentFilter.value : 'all';
    
    let filtered = [...allLakes];
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(lake => 
            lake.name.toLowerCase().includes(searchTerm) ||
            (lake.countries && lake.countries.some(c => c.name.toLowerCase().includes(searchTerm)))
        );
    }
    
    // Type filter
    if (activeFilter === 'freshwater') {
        filtered = filtered.filter(lake => lake.waterType === 'freshwater');
    } else if (activeFilter === 'saltwater') {
        filtered = filtered.filter(lake => lake.waterType === 'saltwater');
    } else if (activeFilter === 'deepest') {
        filtered.sort((a, b) => (b.maxDepth || 0) - (a.maxDepth || 0));
    } else if (activeFilter === 'largest') {
        filtered.sort((a, b) => (b.surfaceArea || 0) - (a.surfaceArea || 0));
    }
    
    // Continent filter
    if (continent !== 'all') {
        filtered = filtered.filter(lake => lake.continent === continent);
    }
    
    renderLakeCards(filtered);
}

function openLakeProfile(lakeId) {
    // Store lake ID and navigate to profile page
    localStorage.setItem('currentLakeId', lakeId);
    window.location.href = 'lakes-profile.html';
}

function goBack() {
    window.history.back();
}

// ============================================
// PROFILE PAGE FUNCTIONS
// ============================================

function initProfilePage() {
    console.log('initProfilePage called');
    
    const lakeId = localStorage.getItem('currentLakeId');
    
    if (!lakeId) {
        console.log('No lake ID found, redirecting to lakes page');
        window.location.href = 'lakes.html';
        return;
    }
    
    // Get all lakes data
    if (typeof getAllLakesData === 'function') {
        allLakes = getAllLakesData();
    } else {
        console.error('getAllLakesData function not found!');
        return;
    }
    
    currentLake = allLakes.find(l => l.id === lakeId);
    
    if (!currentLake) {
        console.error('Lake not found:', lakeId);
        window.location.href = 'lakes.html';
        return;
    }
    
    console.log('Loaded lake:', currentLake.name);
    
    // Setup background
    setupBackground();
    
    // Update header
    updateProfileHeader();
    
    // Initialize map
    initMap();
    
    // Build mind map
    buildMindMap();
    
    // Update quick facts
    updateQuickFacts();
    
    // Setup event listeners
    setupProfileEventListeners();
}

function setupBackground() {
    const bg = document.getElementById('profileBackground');
    if (bg && currentLake) {
        bg.style.backgroundImage = `url(${currentLake.backgroundImage || currentLake.image})`;
    }
}

function updateProfileHeader() {
    const lakeNameEl = document.getElementById('lakeName');
    const flagsContainer = document.getElementById('countryFlags');
    const lakeTypeEl = document.getElementById('lakeType');
    
    if (lakeNameEl && currentLake) {
        lakeNameEl.textContent = currentLake.name;
    }
    
    if (flagsContainer && currentLake && currentLake.countries) {
        flagsContainer.innerHTML = currentLake.countries.map(c => 
            `<img src="${getFlagUrl(c.code)}" alt="${c.name}" class="country-flag" title="${c.name}">`
        ).join('');
    }
    
    if (lakeTypeEl && currentLake) {
        const waterType = currentLake.waterType ? currentLake.waterType.charAt(0).toUpperCase() + currentLake.waterType.slice(1) : 'Unknown';
        lakeTypeEl.textContent = `${waterType} • ${currentLake.lakeType || 'Unknown'}`;
    }
}

function initMap() {
    if (!currentLake || !currentLake.coordinates) {
        console.error('No coordinates for lake');
        return;
    }
    
    // Initialize Leaflet map
    map = L.map('lakeMap', {
        center: currentLake.coordinates,
        zoom: currentLake.defaultZoom || 8,
        zoomControl: false,
        attributionControl: false
    });
    
    // Add zoom control
    L.control.zoom({ position: 'topleft' }).addTo(map);
    
    // Add tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 19
    }).addTo(map);
    
    // Initialize layer groups
    layerGroups.lakePolygon = L.layerGroup().addTo(map);
    layerGroups.rivers = L.layerGroup().addTo(map);
    layerGroups.cities = L.layerGroup().addTo(map);
    layerGroups.islands = L.layerGroup().addTo(map);
    
    // Draw lake features
    drawLakePolygon();
    drawRivers();
    drawCities();
    drawIslands();
    
    // Add a marker for the lake center
    L.marker(currentLake.coordinates)
        .addTo(map)
        .bindPopup(`<strong>${currentLake.name}</strong><br>Surface Area: ${formatNumber(currentLake.surfaceArea)} km²`);
}

function drawLakePolygon() {
    if (!currentLake.geoJSON) return;
    
    const lakeStyle = {
        fillColor: '#0088cc',
        fillOpacity: 0.4,
        color: '#00d4ff',
        weight: 3
    };
    
    const lakeLayer = L.geoJSON(currentLake.geoJSON, {
        style: lakeStyle
    });
    
    layerGroups.lakePolygon.addLayer(lakeLayer);
}

function drawRivers() {
    // Draw inflow rivers
    if (currentLake.inflowRivers) {
        currentLake.inflowRivers.forEach(river => {
            if (river.coordinates && river.coordinates.length > 0) {
                const line = L.polyline(river.coordinates, {
                    color: '#00ff88',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 5'
                });
                
                line.bindPopup(`<strong>${river.name}</strong><br>Inflow River`);
                layerGroups.rivers.addLayer(line);
            }
        });
    }
    
    // Draw outflow rivers
    if (currentLake.outflowRivers) {
        currentLake.outflowRivers.forEach(river => {
            if (river.coordinates && river.coordinates.length > 0) {
                const line = L.polyline(river.coordinates, {
                    color: '#ff6b6b',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 5'
                });
                
                line.bindPopup(`<strong>${river.name}</strong><br>Outflow River`);
                layerGroups.rivers.addLayer(line);
            }
        });
    }
}

function drawCities() {
    if (!currentLake.cities) return;
    
    currentLake.cities.forEach(city => {
        if (city.coordinates) {
            const marker = L.circleMarker(city.coordinates, {
                radius: 8,
                fillColor: '#ffd700',
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
            
            marker.bindPopup(`
                <h4>${city.name}</h4>
                <p>Population: ${formatNumber(city.population || 'Unknown')}</p>
                <p>Country: ${city.country}</p>
            `);
            
            layerGroups.cities.addLayer(marker);
        }
    });
}

function drawIslands() {
    if (!currentLake.islands) return;
    
    currentLake.islands.forEach(island => {
        if (island.coordinates) {
            const marker = L.circleMarker(island.coordinates, {
                radius: 6,
                fillColor: '#a8e6cf',
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            });
            
            marker.bindPopup(`
                <h4>${island.name}</h4>
                <p>Area: ${island.area || 'Unknown'} km²</p>
                ${island.description ? `<p>${island.description}</p>` : ''}
            `);
            
            layerGroups.islands.addLayer(marker);
        }
    });
}

function buildMindMap() {
    const mindMap = document.getElementById('mindMap');
    if (!mindMap || !currentLake) return;
    
    const nodes = [
        {
            id: 'location',
            icon: 'fa-map-marker-alt',
            iconClass: 'location',
            title: 'Location',
            content: [
                { label: 'Continent', value: currentLake.continent },
                { label: 'Countries', value: currentLake.countries ? currentLake.countries.map(c => c.name).join(', ') : 'Unknown' }
            ]
        },
        {
            id: 'type',
            icon: 'fa-water',
            iconClass: 'type',
            title: 'Type of Lake',
            content: [
                { label: 'Water Type', value: currentLake.waterType || 'Unknown' },
                { label: 'Formation', value: currentLake.lakeType || 'Unknown' }
            ]
        },
        {
            id: 'area',
            icon: 'fa-expand-arrows-alt',
            iconClass: 'area',
            title: 'Surface Area',
            content: [
                { label: 'Area', value: `${formatNumber(currentLake.surfaceArea)} km²` }
            ]
        },
        {
            id: 'depth',
            icon: 'fa-arrows-alt-v',
            iconClass: 'depth',
            title: 'Depth',
            content: [
                { label: 'Maximum Depth', value: `${formatNumber(currentLake.maxDepth)} m` },
                { label: 'Average Depth', value: `${formatNumber(currentLake.avgDepth)} m` }
            ]
        },
        {
            id: 'volume',
            icon: 'fa-tint',
            iconClass: 'volume',
            title: 'Volume',
            content: [
                { label: 'Volume', value: `${formatNumber(currentLake.volume)} km³` }
            ]
        },
        {
            id: 'elevation',
            icon: 'fa-mountain',
            iconClass: 'elevation',
            title: 'Elevation',
            content: [
                { label: 'Elevation', value: `${currentLake.elevation} m ${currentLake.elevation >= 0 ? 'above' : 'below'} sea level` }
            ]
        }
    ];
    
    // Add inflow rivers if available
    if (currentLake.inflowRivers && currentLake.inflowRivers.length > 0) {
        nodes.push({
            id: 'inflow',
            icon: 'fa-sign-in-alt',
            iconClass: 'inflow',
            title: 'Inflow Rivers',
            content: currentLake.inflowRivers.map(r => ({ label: r.name, value: r.length ? `${r.length} km` : '' }))
        });
    }
    
    // Add outflow rivers if available
    if (currentLake.outflowRivers && currentLake.outflowRivers.length > 0) {
        nodes.push({
            id: 'outflow',
            icon: 'fa-sign-out-alt',
            iconClass: 'outflow',
            title: 'Outflow Rivers',
            content: currentLake.outflowRivers.map(r => ({ label: r.name, value: r.length ? `${r.length} km` : '' }))
        });
    }
    
    mindMap.innerHTML = nodes.map(node => `
        <div class="mind-map-node">
            <div class="node-header" onclick="toggleNode('${node.id}')">
                <div class="node-icon ${node.iconClass}">
                    <i class="fas ${node.icon}"></i>
                </div>
                <span class="node-title">${node.title}</span>
                <i class="fas fa-chevron-down node-arrow"></i>
            </div>
            <div class="node-content" id="node-${node.id}">
                ${node.content.map(item => `
                    <div class="node-item">
                        <i class="fas fa-circle"></i>
                        <span><strong>${item.label}</strong>${item.value ? ': ' + item.value : ''}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleNode(nodeId) {
    const content = document.getElementById(`node-${nodeId}`);
    const header = content ? content.previousElementSibling : null;
    
    if (content && header) {
        content.classList.toggle('expanded');
        header.classList.toggle('expanded');
    }
}

function updateQuickFacts() {
    if (!currentLake) return;
    
    const factArea = document.getElementById('factArea');
    const factDepth = document.getElementById('factDepth');
    const factElevation = document.getElementById('factElevation');
    const factVolume = document.getElementById('factVolume');
    
    if (factArea) factArea.textContent = `${formatNumber(currentLake.surfaceArea)} km²`;
    if (factDepth) factDepth.textContent = `${formatNumber(currentLake.maxDepth)} m`;
    if (factElevation) factElevation.textContent = `${currentLake.elevation} m`;
    if (factVolume) factVolume.textContent = `${formatNumber(currentLake.volume)} km³`;
}

function setupProfileEventListeners() {
    // Fly over button
    const flyOverBtn = document.getElementById('flyOverBtn');
    if (flyOverBtn) {
        flyOverBtn.addEventListener('click', startFlyOver);
    }
    
    const closeFlyOverBtn = document.getElementById('closeFlyOver');
    if (closeFlyOverBtn) {
        closeFlyOverBtn.addEventListener('click', closeFlyOver);
    }
    
    // Reset view button
    const resetViewBtn = document.getElementById('resetView');
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', resetMapView);
    }
    
    // Fullscreen button
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Mind map toggle
    const mindMapToggle = document.getElementById('mindMapToggle');
    if (mindMapToggle) {
        mindMapToggle.addEventListener('click', () => {
            const container = document.getElementById('mindMapContainer');
            if (container) {
                container.classList.toggle('collapsed');
            }
        });
    }
    
    // Toggle layer buttons
    const toggleRiversBtn = document.getElementById('toggleRivers');
    if (toggleRiversBtn) {
        toggleRiversBtn.addEventListener('click', () => toggleLayer('rivers'));
    }
    
    const toggleCitiesBtn = document.getElementById('toggleCities');
    if (toggleCitiesBtn) {
        toggleCitiesBtn.addEventListener('click', () => toggleLayer('cities'));
    }
    
    const toggleIslandsBtn = document.getElementById('toggleIslands');
    if (toggleIslandsBtn) {
        toggleIslandsBtn.addEventListener('click', () => toggleLayer('islands'));
    }
}

function toggleLayer(layerName) {
    if (!map || !layerGroups[layerName]) return;
    
    if (map.hasLayer(layerGroups[layerName])) {
        map.removeLayer(layerGroups[layerName]);
    } else {
        map.addLayer(layerGroups[layerName]);
    }
}

function resetMapView() {
    if (map && currentLake && currentLake.coordinates) {
        map.setView(currentLake.coordinates, currentLake.defaultZoom || 8);
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function startFlyOver() {
    const modal = document.getElementById('flyOverModal');
    if (modal) {
        modal.classList.add('active');
    }
    // Simplified fly over - just zoom to lake
    if (map && currentLake) {
        map.flyTo(currentLake.coordinates, 10, { duration: 3 });
    }
}

function closeFlyOver() {
    const modal = document.getElementById('flyOverModal');
    if (modal) {
        modal.classList.remove('active');
    }
    resetMapView();
}

function goToLakes() {
    window.location.href = 'lakes.html';
}

console.log('lakes-app.js loaded successfully');
