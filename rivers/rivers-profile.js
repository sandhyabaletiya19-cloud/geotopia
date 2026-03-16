// ========================================
// RIVERS PROFILE - COMPLETE FUNCTIONALITY
// ========================================

let currentRiver = null;
let map = null;
let flyoverMap = null;
let flyoverInterval = null;
let isPaused = false;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Profile page loading...');
    
    // Get river ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const riverId = parseInt(urlParams.get('id'));
    
    console.log('River ID:', riverId);
    
    if (!riverId) {
        showError('No river ID provided');
        return;
    }
    
    // Find river in data
    currentRiver = riversData.find(r => r.id === riverId);
    
    if (!currentRiver) {
        showError('River not found');
        return;
    }
    
    console.log('Found river:', currentRiver.name);
    
    // Initialize page
    initProfile();
});

// ========================================
// INIT PROFILE
// ========================================
function initProfile() {
    // Set background
    const bg = document.getElementById('profileBg');
    if (bg && currentRiver.image) {
        bg.style.backgroundImage = `url('${currentRiver.image}')`;
    }
    
    // Set title
    document.title = `${currentRiver.name} | Rivers of the World`;
    
    // Render all sections
    renderHeader();
    renderStats();
    renderMap();
    renderInfoTree();
    renderFacts();
    renderTributaries();
    renderDistributaries();
    renderCities();
    
    // Setup event listeners
    setupEventListeners();
    
    // Hide loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 800);
}

// ========================================
// RENDER HEADER
// ========================================
function renderHeader() {
    // River name
    const nameEl = document.getElementById('riverName');
    nameEl.innerHTML = `
        <i class="fas fa-water"></i>
        <span>${currentRiver.name}</span>
    `;
    
    // Meta info
    const metaEl = document.getElementById('riverMeta');
    metaEl.innerHTML = `
        <span><i class="fas fa-globe"></i> ${currentRiver.continent}</span>
        <span><i class="fas fa-flag"></i> ${currentRiver.countries.length} Countries</span>
        <span><i class="fas fa-ruler"></i> ${currentRiver.length.toLocaleString()} km</span>
    `;
}

// ========================================
// RENDER STATS
// ========================================
function renderStats() {
    const grid = document.getElementById('statsGrid');
    
    const stats = [
        {
            icon: 'fa-ruler-horizontal',
            value: currentRiver.length.toLocaleString(),
            label: 'Length (km)',
            color: '#00b4d8'
        },
        {
            icon: 'fa-tint',
            value: currentRiver.discharge.toLocaleString(),
            label: 'Discharge (m³/s)',
            color: '#0077b6'
        },
        {
            icon: 'fa-mountain',
            value: currentRiver.source.elevation.toLocaleString(),
            label: 'Source Elevation (m)',
            color: '#48cae4'
        },
        {
            icon: 'fa-flag',
            value: currentRiver.countries.length,
            label: 'Countries',
            color: '#90e0ef'
        },
        {
            icon: 'fa-code-branch',
            value: currentRiver.tributaries ? currentRiver.tributaries.length : 0,
            label: 'Tributaries',
            color: '#00b4d8'
        },
        {
            icon: 'fa-project-diagram',
            value: currentRiver.distributaries ? currentRiver.distributaries.length : 0,
            label: 'Distributaries',
            color: '#f72585'
        }
    ];
    
    grid.innerHTML = stats.map(stat => `
        <div class="stat-box">
            <div class="stat-icon" style="background: ${stat.color}20; color: ${stat.color}">
                <i class="fas ${stat.icon}"></i>
            </div>
            <div class="stat-content">
                <span class="stat-value">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        </div>
    `).join('');
}

// ========================================
// RENDER MAP
// ========================================
function renderMap() {
    // Initialize map
    const mapContainer = document.getElementById('riverMap');
    if (!mapContainer) return;
    
    // Calculate center from course
    const course = currentRiver.course;
    const centerLat = course.reduce((sum, p) => sum + p[0], 0) / course.length;
    const centerLng = course.reduce((sum, p) => sum + p[1], 0) / course.length;
    
    map = L.map('riverMap').setView([centerLat, centerLng], 4);
    
    // Add tile layer
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '© OpenTopoMap'
    });
    
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri'
    });
    
    terrainLayer.addTo(map);
    
    // Store layers for switching
    window.mapLayers = { terrain: terrainLayer, satellite: satelliteLayer };
    window.currentLayer = 'terrain';
    
    // Draw river course
    const riverLine = L.polyline(course, {
        color: '#0077b6',
        weight: 4,
        opacity: 0.9
    }).addTo(map);
    
    // Add animated flow effect
    const flowLine = L.polyline(course, {
        color: '#00b4d8',
        weight: 2,
        opacity: 0.7,
        dashArray: '10, 20',
        className: 'flow-animation'
    }).addTo(map);
    
    // Add source marker
    const sourceIcon = L.divIcon({
        className: 'custom-marker source-marker',
        html: '<div class="marker-pin source"><i class="fas fa-play-circle"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker(course[0], { icon: sourceIcon })
        .bindPopup(`<b>Source:</b> ${currentRiver.source.name}<br><b>Elevation:</b> ${currentRiver.source.elevation}m`)
        .addTo(map);
    
    // Add mouth marker
    const mouthIcon = L.divIcon({
        className: 'custom-marker mouth-marker',
        html: '<div class="marker-pin mouth"><i class="fas fa-water"></i></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker(course[course.length - 1], { icon: mouthIcon })
        .bindPopup(`<b>Mouth:</b> ${currentRiver.mouth.name}`)
        .addTo(map);
    
    // Add tributaries
    if (currentRiver.tributaries) {
        currentRiver.tributaries.forEach(trib => {
            const tribIcon = L.divIcon({
                className: 'custom-marker trib-marker',
                html: '<div class="marker-pin tributary"><i class="fas fa-arrow-right"></i></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            L.marker(trib.coordinates, { icon: tribIcon })
                .bindPopup(`<b>${trib.name}</b><br>Length: ${trib.length} km<br><span style="color:#00b4d8">→ Flows INTO river</span>`)
                .addTo(map);
        });
    }
    
    // Add distributaries
    if (currentRiver.distributaries) {
        currentRiver.distributaries.forEach(dist => {
            const distIcon = L.divIcon({
                className: 'custom-marker dist-marker',
                html: '<div class="marker-pin distributary"><i class="fas fa-arrow-left"></i></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            L.marker(dist.coordinates, { icon: distIcon })
                .bindPopup(`<b>${dist.name}</b><br>Length: ${dist.length} km<br><span style="color:#f72585">← Flows OUT of river</span>`)
                .addTo(map);
        });
    }
    
    // Add cities
    if (currentRiver.cities) {
        currentRiver.cities.forEach(city => {
            const cityIcon = L.divIcon({
                className: 'custom-marker city-marker',
                html: '<div class="marker-pin city"><i class="fas fa-city"></i></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            
            L.marker(city.coordinates, { icon: cityIcon })
                .bindPopup(`<b>${city.name}</b><br>Population: ${city.population.toLocaleString()}`)
                .addTo(map);
        });
    }
    
    // Fit bounds
    map.fitBounds(riverLine.getBounds(), { padding: [50, 50] });
}

// ========================================
// RENDER INFO TREE (Mind Map Style)
// ========================================
function renderInfoTree() {
    const tree = document.getElementById('infoTree');
    
    tree.innerHTML = `
        <div class="info-branch">
            <div class="branch-title">
                <i class="fas fa-play-circle"></i> Source
            </div>
            <div class="branch-content">
                <p><strong>${currentRiver.source.name}</strong></p>
                <p>Elevation: ${currentRiver.source.elevation}m</p>
            </div>
        </div>
        
        <div class="info-branch">
            <div class="branch-title">
                <i class="fas fa-water"></i> Mouth
            </div>
            <div class="branch-content">
                <p><strong>${currentRiver.mouth.name}</strong></p>
            </div>
        </div>
        
        <div class="info-branch">
            <div class="branch-title">
                <i class="fas fa-globe"></i> Countries
            </div>
            <div class="branch-content">
                <div class="country-tags">
                    ${currentRiver.countries.map(c => `<span class="country-tag">${c}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="info-branch">
            <div class="branch-title">
                <i class="fas fa-info-circle"></i> Description
            </div>
            <div class="branch-content">
                <p>${currentRiver.description || 'One of the major rivers of the world.'}</p>
            </div>
        </div>
    `;
}

// ========================================
// RENDER FACTS
// ========================================
function renderFacts() {
    const grid = document.getElementById('factsGrid');
    
    if (!currentRiver.facts || currentRiver.facts.length === 0) {
        grid.innerHTML = '<p class="no-data">No facts available</p>';
        return;
    }
    
    grid.innerHTML = currentRiver.facts.map((fact, index) => `
        <div class="fact-card">
            <div class="fact-number">${index + 1}</div>
            <p class="fact-text">${fact}</p>
        </div>
    `).join('');
}

// ========================================
// RENDER TRIBUTARIES
// ========================================
function renderTributaries() {
    const list = document.getElementById('tributariesList');
    
    if (!currentRiver.tributaries || currentRiver.tributaries.length === 0) {
        list.innerHTML = '<p class="no-data">No major tributaries</p>';
        return;
    }
    
    list.innerHTML = currentRiver.tributaries.map(trib => `
        <div class="trib-item tributary">
            <div class="trib-icon">
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="trib-info">
                <h4>${trib.name}</h4>
                <p>${trib.length.toLocaleString()} km</p>
            </div>
            <div class="trib-arrow in">
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
        </div>
    `).join('');
}

// ========================================
// RENDER DISTRIBUTARIES
// ========================================
function renderDistributaries() {
    const list = document.getElementById('distributariesList');
    
    if (!currentRiver.distributaries || currentRiver.distributaries.length === 0) {
        list.innerHTML = '<p class="no-data">No major distributaries</p>';
        return;
    }
    
    list.innerHTML = currentRiver.distributaries.map(dist => `
        <div class="trib-item distributary">
            <div class="trib-arrow out">
                <i class="fas fa-long-arrow-alt-left"></i>
            </div>
            <div class="trib-info">
                <h4>${dist.name}</h4>
                <p>${dist.length.toLocaleString()} km</p>
            </div>
            <div class="trib-icon">
                <i class="fas fa-arrow-left"></i>
            </div>
        </div>
    `).join('');
}

// ========================================
// RENDER CITIES
// ========================================
function renderCities() {
    const grid = document.getElementById('citiesGrid');
    
    if (!currentRiver.cities || currentRiver.cities.length === 0) {
        grid.innerHTML = '<p class="no-data">No major cities data</p>';
        return;
    }
    
    grid.innerHTML = currentRiver.cities.map(city => `
        <div class="city-card">
            <div class="city-icon">
                <i class="fas fa-city"></i>
            </div>
            <div class="city-info">
                <h4>${city.name}</h4>
                <p><i class="fas fa-users"></i> ${city.population.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Map layer buttons
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const layer = this.dataset.layer;
            switchMapLayer(layer);
            
            document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Fly along button
    document.getElementById('flyAlongBtn').addEventListener('click', startFlyover);
    
    // Close flyover
    document.getElementById('closeFlyover').addEventListener('click', closeFlyover);
    
    // Pause button
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    
    // Restart button
    document.getElementById('restartBtn').addEventListener('click', restartFlyover);
}

// ========================================
// MAP LAYER SWITCHING
// ========================================
function switchMapLayer(layerName) {
    if (!map || !window.mapLayers) return;
    
    // Remove current layer
    map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });
    
    // Add new layer
    window.mapLayers[layerName].addTo(map);
    window.currentLayer = layerName;
}

// ========================================
// FLYOVER FUNCTIONALITY
// ========================================
function startFlyover() {
    const modal = document.getElementById('flyoverModal');
    modal.classList.add('active');
    
    // Set title
    document.getElementById('flyoverTitle').textContent = `Flying Along ${currentRiver.name}`;
    
    // Initialize flyover map
    setTimeout(() => {
        initFlyoverMap();
    }, 300);
}

function initFlyoverMap() {
    const container = document.getElementById('flyoverMap');
    if (!container) return;
    
    // Clear existing map
    if (flyoverMap) {
        flyoverMap.remove();
    }
    
    const course = currentRiver.course;
    
    // Create map centered on first point
    flyoverMap = L.map('flyoverMap').setView(course[0], 8);
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri'
    }).addTo(flyoverMap);
    
    // Draw river
    L.polyline(course, {
        color: '#00b4d8',
        weight: 3,
        opacity: 0.8
    }).addTo(flyoverMap);
    
    // Start animation
    animateFlyover();
}

function animateFlyover() {
    const course = currentRiver.course;
    let currentIndex = 0;
    
    isPaused = false;
    document.getElementById('pauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
    
    const locations = [
        currentRiver.source.name,
        ...currentRiver.cities.map(c => c.name),
        currentRiver.mouth.name
    ];
    
    flyoverInterval = setInterval(() => {
        if (isPaused) return;
        
        if (currentIndex >= course.length) {
            clearInterval(flyoverInterval);
            document.getElementById('currentLocation').textContent = 'Journey Complete!';
            document.getElementById('progressText').textContent = '100%';
            document.getElementById('progressFill').style.width = '100%';
            return;
        }
        
        const point = course[currentIndex];
        flyoverMap.flyTo(point, 9, { duration: 1.5 });
        
        // Update progress
        const progress = Math.round((currentIndex / (course.length - 1)) * 100);
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${progress}%`;
        
        // Update location name
        const locationIndex = Math.floor((currentIndex / course.length) * locations.length);
        document.getElementById('currentLocation').textContent = locations[Math.min(locationIndex, locations.length - 1)] || 'En route...';
        
        currentIndex++;
    }, 2000);
}

function togglePause() {
    isPaused = !isPaused;
    const btn = document.getElementById('pauseBtn');
    btn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
}

function restartFlyover() {
    if (flyoverInterval) {
        clearInterval(flyoverInterval);
    }
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('progressText').textContent = '0%';
    animateFlyover();
}

function closeFlyover() {
    const modal = document.getElementById('flyoverModal');
    modal.classList.remove('active');
    
    if (flyoverInterval) {
        clearInterval(flyoverInterval);
    }
    
    if (flyoverMap) {
        flyoverMap.remove();
        flyoverMap = null;
    }
}

// ========================================
// ERROR HANDLING
// ========================================
function showError(message) {
    document.getElementById('loader').innerHTML = `
        <div class="loader-content">
            <div class="loader-icon">❌</div>
            <p>${message}</p>
            <a href="rivers.html" class="back-link">← Back to Rivers</a>
        </div>
    `;
}

console.log('Rivers Profile JS Loaded!');
