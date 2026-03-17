// ============================================
// LAKES EXPLORER - MAIN APPLICATION
// ============================================

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

// Unsplash/Pixabay Image URLs (using placeholder for demo)
const getImageUrl = (lakeName, imageId) => {
    const unsplashImages = {
        'caspian-sea': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
        'lake-superior': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        'lake-victoria': 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        'lake-huron': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        'lake-michigan': 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
        'lake-tanganyika': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
        'lake-baikal': 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800',
        'great-bear-lake': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'lake-malawi': 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800',
        'great-slave-lake': 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
        'default': 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800'
    };
    
    const key = lakeName.toLowerCase().replace(/\s+/g, '-');
    return unsplashImages[key] || unsplashImages['default'];
};

// Initialize Main Page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('lakesGrid')) {
        initLakesPage();
    }
});

function initLakesPage() {
    // Combine all lake data
    allLakes = getAllLakesData();
    
    // Sort by surface area (largest first)
    allLakes.sort((a, b) => b.surfaceArea - a.surfaceArea);
    
    // Update stats
    updateStats();
    
    // Render lake cards
    renderLakeCards(allLakes);
    
    // Setup event listeners
    setupEventListeners();
    
    // Hide loading
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 1500);
}

function updateStats() {
    document.getElementById('totalLakes').textContent = allLakes.length;
    
    const countries = new Set();
    allLakes.forEach(lake => {
        lake.countries.forEach(c => countries.add(c.name));
    });
    document.getElementById('totalCountries').textContent = countries.size;
}

function renderLakeCards(lakes) {
    const grid = document.getElementById('lakesGrid');
    grid.innerHTML = '';
    
    lakes.forEach((lake, index) => {
        const card = createLakeCard(lake, index + 1);
        grid.appendChild(card);
    });
}

function createLakeCard(lake, rank) {
    const card = document.createElement('div');
    card.className = 'lake-card';
    card.onclick = () => openLakeProfile(lake.id);
    
    const flagsHtml = lake.countries.map(c => 
        `<img src="${getFlagUrl(c.code)}" alt="${c.name}" class="country-flag" title="${c.name}">`
    ).join('');
    
    card.innerHTML = `
        <div class="lake-image-container">
            <img src="${lake.image}" alt="${lake.name}" class="lake-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400'">
            <div class="lake-overlay"></div>
            <span class="lake-rank">#${rank}</span>
            <span class="water-type-badge ${lake.waterType}">${lake.waterType}</span>
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

function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
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
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const continent = document.getElementById('continentFilter').value;
    
    let filtered = [...allLakes];
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(lake => 
            lake.name.toLowerCase().includes(searchTerm) ||
            lake.countries.some(c => c.name.toLowerCase().includes(searchTerm))
        );
    }
    
    // Type filter
    if (activeFilter === 'freshwater') {
        filtered = filtered.filter(lake => lake.waterType === 'freshwater');
    } else if (activeFilter === 'saltwater') {
        filtered = filtered.filter(lake => lake.waterType === 'saltwater');
    } else if (activeFilter === 'deepest') {
        filtered.sort((a, b) => b.maxDepth - a.maxDepth);
    } else if (activeFilter === 'largest') {
        filtered.sort((a, b) => b.surfaceArea - a.surfaceArea);
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
    const lakeId = localStorage.getItem('currentLakeId');
    
    if (!lakeId) {
        window.location.href = 'lakes.html';
        return;
    }
    
    // Get all lakes data
    allLakes = getAllLakesData();
    currentLake = allLakes.find(l => l.id === lakeId);
    
    if (!currentLake) {
        window.location.href = 'lakes.html';
        return;
    }
    
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
    bg.style.backgroundImage = `url(${currentLake.backgroundImage || currentLake.image})`;
}

function updateProfileHeader() {
    document.getElementById('lakeName').textContent = currentLake.name;
    
    const flagsContainer = document.getElementById('countryFlags');
    flagsContainer.innerHTML = currentLake.countries.map(c => 
        `<img src="${getFlagUrl(c.code)}" alt="${c.name}" class="country-flag" title="${c.name}">`
    ).join('');
    
    document.getElementById('lakeType').textContent = 
        `${currentLake.waterType.charAt(0).toUpperCase() + currentLake.waterType.slice(1)} • ${currentLake.lakeType}`;
}

function initMap() {
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
    layerGroups.depthZones = L.layerGroup();
    layerGroups.countries = L.layerGroup().addTo(map);
    
    // Draw lake
    drawLakePolygon();
    
    // Draw rivers
    drawRivers();
    
    // Draw cities
    drawCities();
    
    // Draw islands
    drawIslands();
    
    // Draw countries
    drawCountries();
}

function drawLakePolygon() {
    if (!currentLake.geoJSON) return;
    
    // Create water gradient effect using SVG
    const lakeStyle = {
        fillColor: '#0088cc',
        fillOpacity: 0.4,
        color: '#00d4ff',
        weight: 3,
        className: 'lake-polygon'
    };
    
    const lakeLayer = L.geoJSON(currentLake.geoJSON, {
        style: lakeStyle,
        onEachFeature: (feature, layer) => {
            layer.bindPopup(`
                <h3>${currentLake.name}</h3>
                <p>Surface Area: ${formatNumber(currentLake.surfaceArea)} km²</p>
                <p>Max Depth: ${formatNumber(currentLake.maxDepth)} m</p>
            `);
        }
    });
    
    // Add shimmer effect
    lakeLayer.on('add', () => {
        const svg = document.querySelector('.lake-polygon');
        if (svg) {
            svg.style.filter = 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))';
        }
    });
    
    layerGroups.lakePolygon.addLayer(lakeLayer);
}

function drawRivers() {
    // Draw inflow rivers
    if (currentLake.inflowRivers) {
        currentLake.inflowRivers.forEach(river => {
            if (river.coordinates) {
                const line = L.polyline(river.coordinates, {
                    color: '#00ff88',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 5',
                    className: 'inflow-river'
                });
                
                // Add arrow marker
                const arrowIcon = L.divIcon({
                    html: '<i class="fas fa-arrow-right" style="color: #00ff88; transform: rotate(45deg);"></i>',
                    className: 'river-arrow',
                    iconSize: [20, 20]
                });
                
                const lastPoint = river.coordinates[river.coordinates.length - 1];
                L.marker(lastPoint, { icon: arrowIcon }).addTo(layerGroups.rivers);
                
                line.bindPopup(`<strong>${river.name}</strong><br>Inflow River`);
                layerGroups.rivers.addLayer(line);
            }
        });
    }
    
    // Draw outflow rivers
    if (currentLake.outflowRivers) {
        currentLake.outflowRivers.forEach(river => {
            if (river.coordinates) {
                const line = L.polyline(river.coordinates, {
                    color: '#ff6b6b',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 5',
                    className: 'outflow-river'
                });
                
                const arrowIcon = L.divIcon({
                    html: '<i class="fas fa-arrow-right" style="color: #ff6b6b;"></i>',
                    className: 'river-arrow',
                    iconSize: [20, 20]
                });
                
                const lastPoint = river.coordinates[river.coordinates.length - 1];
                L.marker(lastPoint, { icon: arrowIcon }).addTo(layerGroups.rivers);
                
                line.bindPopup(`<strong>${river.name}</strong><br>Outflow River`);
                layerGroups.rivers.addLayer(line);
            }
        });
    }
    
    // Animate rivers
    animateRivers();
}

function animateRivers() {
    const style = document.createElement('style');
    style.textContent = `
        .inflow-river {
            animation: flowToLake 2s linear infinite;
        }
        .outflow-river {
            animation: flowFromLake 2s linear infinite;
        }
    `;
    document.head.appendChild(style);
}

function drawCities() {
    if (!currentLake.cities) return;
    
    currentLake.cities.forEach(city => {
        const cityIcon = L.divIcon({
            html: `<div class="city-marker"></div>`,
            className: 'city-icon',
            iconSize: [12, 12]
        });
        
        const marker = L.marker(city.coordinates, { icon: cityIcon });
        marker.bindPopup(`
            <h4>${city.name}</h4>
            <p>Population: ${formatNumber(city.population || 'Unknown')}</p>
            <p>Country: ${city.country}</p>
        `);
        
        layerGroups.cities.addLayer(marker);
    });
}

function drawIslands() {
    if (!currentLake.islands) return;
    
    currentLake.islands.forEach(island => {
        const islandIcon = L.divIcon({
            html: `<div class="island-marker"><i class="fas fa-mountain"></i> ${island.name}</div>`,
            className: 'island-icon',
            iconSize: [100, 30]
        });
        
        const marker = L.marker(island.coordinates, { icon: islandIcon });
        marker.bindPopup(`
            <h4>${island.name}</h4>
            <p>Area: ${island.area || 'Unknown'} km²</p>
            ${island.description ? `<p>${island.description}</p>` : ''}
        `);
        
        layerGroups.islands.addLayer(marker);
    });
}

function drawCountries() {
    if (!currentLake.countryBoundaries) return;
    
    currentLake.countryBoundaries.forEach(country => {
        if (country.geoJSON) {
            const countryLayer = L.geoJSON(country.geoJSON, {
                style: {
                    fillColor: 'rgba(255, 255, 255, 0.05)',
                    fillOpacity: 0.3,
                    color: 'rgba(255, 255, 255, 0.3)',
                    weight: 1
                },
                onEachFeature: (feature, layer) => {
                    layer.on('mouseover', () => {
                        layer.setStyle({
                            fillColor: 'rgba(0, 212, 255, 0.2)',
                            color: '#00d4ff'
                        });
                    });
                    layer.on('mouseout', () => {
                        layer.setStyle({
                            fillColor: 'rgba(255, 255, 255, 0.05)',
                            color: 'rgba(255, 255, 255, 0.3)'
                        });
                    });
                    layer.bindPopup(`<strong>${country.name}</strong>`);
                }
            });
            layerGroups.countries.addLayer(countryLayer);
        }
    });
}

function buildMindMap() {
    const mindMap = document.getElementById('mindMap');
    
    const nodes = [
        {
            id: 'location',
            icon: 'fa-map-marker-alt',
            iconClass: 'location',
            title: 'Location',
            content: [
                { label: 'Continent', value: currentLake.continent },
                { label: 'Countries', value: currentLake.countries.map(c => c.name).join(', ') }
            ]
        },
        {
            id: 'type',
            icon: 'fa-water',
            iconClass: 'type',
            title: 'Type of Lake',
            content: [
                { label: 'Water Type', value: currentLake.waterType },
                { label: 'Formation', value: currentLake.lakeType }
            ]
        },
        {
            id: 'area',
            icon: 'fa-expand-arrows-alt',
            iconClass: 'area',
            title: 'Surface Area',
            content: [
                { label: 'Area', value: `${formatNumber(currentLake.surfaceArea)} km²` },
                { label: 'Rank', value: `#${allLakes.findIndex(l => l.id === currentLake.id) + 1} in the world` }
            ]
        },
        {
            id: 'depth',
            icon: 'fa-arrows-alt-v',
            iconClass: 'depth',
            title: 'Depth',
            content: [
                { label: 'Maximum Depth', value: `${formatNumber(currentLake.maxDepth)} m` },
                { label: 'Average Depth', value: `${formatNumber(currentLake.avgDepth || 'Unknown')} m` }
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
        },
        {
            id: 'inflow',
            icon: 'fa-sign-in-alt',
            iconClass: 'inflow',
            title: 'Inflow Rivers',
            content: currentLake.inflowRivers?.map(r => ({ label: r.name, value: r.length ? `${r.length} km` : '' })) || [{ label: 'No major inflows', value: '' }]
        },
        {
            id: 'outflow',
            icon: 'fa-sign-out-alt',
            iconClass: 'outflow',
            title: 'Outflow Rivers',
            content: currentLake.outflowRivers?.map(r => ({ label: r.name, value: r.length ? `${r.length} km` : '' })) || [{ label: 'Endorheic basin (no outflow)', value: '' }]
        },
        {
            id: 'basin',
            icon: 'fa-globe',
            iconClass: 'basin',
            title: 'Basin Area',
            content: [
                { label: 'Catchment Area', value: currentLake.basinArea ? `${formatNumber(currentLake.basinArea)} km²` : 'Unknown' }
            ]
        },
        {
            id: 'islands',
            icon: 'fa-tree',
            iconClass: 'islands',
            title: 'Islands',
            content: currentLake.islands?.map(i => ({ label: i.name, value: i.area ? `${i.area} km²` : '' })) || [{ label: 'No major islands', value: '' }]
        },
        {
            id: 'cities',
            icon: 'fa-city',
            iconClass: 'cities',
            title: 'Surrounding Cities',
            content: currentLake.cities?.map(c => ({ label: c.name, value: c.country })) || [{ label: 'No major cities', value: '' }]
        },
        {
            id: 'biodiversity',
            icon: 'fa-fish',
            iconClass: 'biodiversity',
            title: 'Biodiversity',
            content: currentLake.biodiversity || [{ label: 'Data unavailable', value: '' }]
        },
        {
            id: 'economy',
            icon: 'fa-industry',
            iconClass: 'economy',
            title: 'Economic Importance',
            content: currentLake.economicImportance || [{ label: 'Fishing', value: '' }, { label: 'Tourism', value: '' }]
        },
        {
            id: 'environment',
            icon: 'fa-leaf',
            iconClass: 'environment',
            title: 'Environmental Issues',
            content: currentLake.environmentalIssues || [{ label: 'No major issues reported', value: '' }]
        },
        {
            id: 'disputes',
            icon: 'fa-gavel',
            iconClass: 'disputes',
            title: 'Water Disputes',
            content: currentLake.waterDisputes || [{ label: 'No major disputes', value: '' }]
        },
        {
            id: 'history',
            icon: 'fa-landmark',
            iconClass: 'history',
            title: 'Historical Importance',
            content: currentLake.historicalImportance || [{ label: 'Historical data unavailable', value: '' }]
        }
    ];
    
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
    const header = content.previousElementSibling;
    
    content.classList.toggle('expanded');
    header.classList.toggle('expanded');
}

function updateQuickFacts() {
    document.getElementById('factArea').textContent = `${formatNumber(currentLake.surfaceArea)} km²`;
    document.getElementById('factDepth').textContent = `${formatNumber(currentLake.maxDepth)} m`;
    document.getElementById('factElevation').textContent = `${currentLake.elevation} m`;
    document.getElementById('factVolume').textContent = `${formatNumber(currentLake.volume)} km³`;
}

function setupProfileEventListeners() {
    // Fly over button
    document.getElementById('flyOverBtn').addEventListener('click', startFlyOver);
    document.getElementById('closeFlyOver').addEventListener('click', closeFlyOver);
    document.getElementById('pauseFlight').addEventListener('click', togglePauseFlight);
    document.getElementById('skipFlight').addEventListener('click', skipFlight);
    
    // Map controls
    document.getElementById('toggleRivers').addEventListener('click', () => toggleLayer('rivers'));
    document.getElementById('toggleCities').addEventListener('click', () => toggleLayer('cities'));
    document.getElementById('toggleIslands').addEventListener('click', () => toggleLayer('islands'));
    document.getElementById('toggleDepth').addEventListener('click', () => toggleLayer('depthZones'));
    document.getElementById('resetView').addEventListener('click', resetMapView);
    
    // Mind map toggle
    document.getElementById('mindMapToggle').addEventListener('click', () => {
        document.getElementById('mindMapContainer').classList.toggle('collapsed');
    });
    
    // Fullscreen
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
}

function toggleLayer(layerName) {
    const btn = document.getElementById(`toggle${layerName.charAt(0).toUpperCase() + layerName.slice(1)}`);
    
    if (map.hasLayer(layerGroups[layerName])) {
        map.removeLayer(layerGroups[layerName]);
        btn.classList.remove('active');
    } else {
        map.addLayer(layerGroups[layerName]);
        btn.classList.add('active');
    }
}

function resetMapView() {
    map.setView(currentLake.coordinates, currentLake.defaultZoom || 8);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// ============================================
// FLY OVER FEATURE
// ============================================

function startFlyOver() {
    document.getElementById('flyOverModal').classList.add('active');
    document.getElementById('flyOverLakeName').textContent = currentLake.name;
    
    const waypoints = generateWaypoints();
    let currentWaypointIndex = 0;
    isPaused = false;
    
    function flyToNextWaypoint() {
        if (isPaused || currentWaypointIndex >= waypoints.length) {
            if (currentWaypointIndex >= waypoints.length) {
                closeFlyOver();
            }
            return;
        }
        
        const waypoint = waypoints[currentWaypointIndex];
        const progress = ((currentWaypointIndex + 1) / waypoints.length) * 100;
        
        document.getElementById('flyOverProgress').style.width = `${progress}%`;
        document.getElementById('currentLocationText').textContent = waypoint.description;
        
        map.flyTo(waypoint.coordinates, waypoint.zoom, {
            duration: 2,
            easeLinearity: 0.5
        });
        
        currentWaypointIndex++;
        
        flyOverAnimation = setTimeout(flyToNextWaypoint, 2500);
    }
    
    flyToNextWaypoint();
}

function generateWaypoints() {
    const waypoints = [];
    
    // Start point
    if (currentLake.geoJSON) {
        const bounds = L.geoJSON(currentLake.geoJSON).getBounds();
        waypoints.push({
            coordinates: bounds.getNorthWest(),
            zoom: 9,
            description: `Starting from northern edge of ${currentLake.name}`
        });
    }
    
    // Inflow rivers
    if (currentLake.inflowRivers) {
        currentLake.inflowRivers.slice(0, 2).forEach(river => {
            if (river.coordinates && river.coordinates.length > 0) {
                waypoints.push({
                    coordinates: river.coordinates[0],
                    zoom: 10,
                    description: `Flying over ${river.name} - Inflow River`
                });
            }
        });
    }
    
    // Center/deepest point
    waypoints.push({
        coordinates: currentLake.coordinates,
        zoom: 9,
        description: currentLake.deepestPoint ? 
            `Over deepest point - ${formatNumber(currentLake.maxDepth)}m deep` : 
            `Flying over central ${currentLake.name}`
    });
    
    // Islands
    if (currentLake.islands) {
        currentLake.islands.slice(0, 2).forEach(island => {
            waypoints.push({
                coordinates: island.coordinates,
                zoom: 11,
                description: `${island.name} - Island in ${currentLake.name}`
            });
        });
    }
    
    // Major cities
    if (currentLake.cities) {
        currentLake.cities.slice(0, 2).forEach(city => {
            waypoints.push({
                coordinates: city.coordinates,
                zoom: 11,
                description: `${city.name}, ${city.country}`
            });
        });
    }
    
    // Outflow rivers (end point)
    if (currentLake.outflowRivers && currentLake.outflowRivers.length > 0) {
        const outflow = currentLake.outflowRivers[0];
        if (outflow.coordinates && outflow.coordinates.length > 0) {
            waypoints.push({
                coordinates: outflow.coordinates[0],
                zoom: 10,
                description: `${outflow.name} - Outflow River - Flight Complete`
            });
        }
    } else {
        waypoints.push({
            coordinates: currentLake.coordinates,
            zoom: 8,
            description: 'Flight Complete - Endorheic Lake (no outflow)'
        });
    }
    
    return waypoints;
}

function closeFlyOver() {
    document.getElementById('flyOverModal').classList.remove('active');
    clearTimeout(flyOverAnimation);
    resetMapView();
}

function togglePauseFlight() {
    isPaused = !isPaused;
    const btn = document.getElementById('pauseFlight');
    btn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    
    if (!isPaused) {
        startFlyOver();
    }
}

function skipFlight() {
    closeFlyOver();
}

function goToLakes() {
    window.location.href = 'lakes.html';
}
