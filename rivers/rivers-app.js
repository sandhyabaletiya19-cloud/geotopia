// ============================================
// RIVERS APP - Geography Learning App
// ============================================

// Global variables
let mainMap = null;
let flyoverMap = null;
let currentRiver = null;
let flyoverAnimation = null;
let flyoverSpeed = 1;
let flyoverPaused = false;
let flyoverIndex = 0;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const isProfilePage = document.body.classList.contains('profile-page');
    const isListingPage = document.body.classList.contains('listing-page');
    
    if (isListingPage) {
        initListingPage();
    } else if (isProfilePage) {
        initProfilePage();
    }
    
    // Hide loader
    setTimeout(() => {
        document.getElementById('loader')?.classList.add('hidden');
    }, 1000);
});

// ============================================
// LISTING PAGE
// ============================================

function initListingPage() {
    renderRiversGrid(riversData);
    initWorldMap();
    initFilters();
    initSearch();
    initSort();
    updateStats();
}

function renderRiversGrid(rivers) {
    const grid = document.getElementById('riversGrid');
    if (!grid) return;
    
    grid.innerHTML = rivers.map((river, index) => `
        <article class="river-card" onclick="window.location.href='rivers-profile.html?id=${river.id}'">
            <div class="river-card-image" style="background-image: url('${river.image}')">
                <div class="river-card-overlay"></div>
                <span class="river-card-rank">#${index + 1}</span>
            </div>
            <div class="river-card-content">
                <h3 class="river-card-name">
                    <i class="fas fa-water"></i>
                    ${river.name}
                </h3>
                <p class="river-card-location">
                    <i class="fas fa-globe"></i>
                    ${river.countries.slice(0, 3).join(', ')}${river.countries.length > 3 ? '...' : ''}
                </p>
                <div class="river-card-stats">
                    <div class="river-stat">
                        <i class="fas fa-ruler-horizontal"></i>
                        <span class="river-stat-value">${river.length.toLocaleString()}</span>
                        <span class="river-stat-label">km</span>
                    </div>
                    <div class="river-stat">
                        <i class="fas fa-tint"></i>
                        <span class="river-stat-value">${river.discharge.toLocaleString()}</span>
                        <span class="river-stat-label">m³/s</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

function initWorldMap() {
    const mapContainer = document.getElementById('worldMap');
    if (!mapContainer) return;
    
    const worldMap = L.map('worldMap').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO'
    }).addTo(worldMap);
    
    riversData.forEach(river => {
        const midPoint = river.course[Math.floor(river.course.length / 2)];
        
        const marker = L.marker([midPoint[0], midPoint[1]], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: '🌊',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            })
        }).addTo(worldMap);
        
        marker.bindPopup(`
            <div class="popup-title">${river.name}</div>
            <div class="popup-subtitle">${river.countries[0]} • ${river.length.toLocaleString()} km</div>
        `);
        
        marker.on('click', () => {
            window.location.href = `rivers-profile.html?id=${river.id}`;
        });
        
        // Draw river course
        const courseCoords = river.course.map(coord => [coord[0], coord[1]]);
        L.polyline(courseCoords, {
            color: '#3498db',
            weight: 2,
            opacity: 0.7
        }).addTo(worldMap);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const filtered = getRiversByContinent(filter);
            renderRiversGrid(filtered);
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const results = searchRivers(e.target.value);
        renderRiversGrid(results);
    });
}

function initSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', (e) => {
        const sorted = sortRivers(riversData, e.target.value);
        renderRiversGrid(sorted);
    });
}

function updateStats() {
    const totalRiversEl = document.getElementById('totalRivers');
    const totalContinentsEl = document.getElementById('totalContinents');
    const totalLengthEl = document.getElementById('totalLength');
    
    if (totalRiversEl) animateNumber(totalRiversEl, 0, riversData.length, 1000);
    if (totalContinentsEl) {
        const continents = new Set(riversData.map(r => r.continent));
        animateNumber(totalContinentsEl, 0, continents.size, 1000);
    }
    if (totalLengthEl) {
        const totalLength = riversData.reduce((sum, r) => sum + r.length, 0);
        animateNumber(totalLengthEl, 0, totalLength, 1500);
    }
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ============================================
// PROFILE PAGE
// ============================================

function initProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const riverId = urlParams.get('id');
    
    if (!riverId) {
        window.location.href = 'rivers.html';
        return;
    }
    
    currentRiver = getRiverById(riverId);
    
    if (!currentRiver) {
        window.location.href = 'rivers.html';
        return;
    }
    
    document.title = `${currentRiver.name} River | Geography Learning App`;
    
    const profileBg = document.getElementById('profileBg');
    if (profileBg) profileBg.style.backgroundImage = `url('${currentRiver.image}')`;
    
    renderHeader();
    renderStats();
    renderMap();
    renderMindMap();
    renderInfoTree();
    renderTributaries();
    renderCities();
    initFlyoverModal();
    initMindMapModal();
}

function renderHeader() {
    const nameEl = document.getElementById('riverName');
    const metaEl = document.getElementById('riverMeta');
    
    if (nameEl) {
        nameEl.innerHTML = `
            <i class="fas fa-water"></i>
            <span>${currentRiver.name} River</span>
        `;
    }
    
    if (metaEl) {
        const continentIcon = {
            'africa': 'africa',
            'asia': 'asia',
            'europe': 'europe',
            'north-america': 'americas',
            'south-america': 'americas',
            'australia': 'asia'
        };
        
        metaEl.innerHTML = `
            <div class="meta-item">
                <i class="fas fa-globe-${continentIcon[currentRiver.continent] || 'americas'}"></i>
                <span>${currentRiver.continent.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-flag"></i>
                <span>${currentRiver.countries.slice(0, 3).join(', ')}${currentRiver.countries.length > 3 ? '...' : ''}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-mountain"></i>
                <span>Source: ${currentRiver.source.name}</span>
            </div>
        `;
    }
}

function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    const stats = [
        { icon: '📏', value: `${currentRiver.length.toLocaleString()} km`, label: 'Length' },
        { icon: '💧', value: `${currentRiver.discharge.toLocaleString()} m³/s`, label: 'Discharge' },
        { icon: '🗺️', value: `${(currentRiver.basinArea / 1000000).toFixed(1)}M km²`, label: 'Basin Area' },
        { icon: '🏔️', value: `${currentRiver.source.elevation}m`, label: 'Source Elevation' },
        { icon: '🌍', value: currentRiver.countries.length, label: 'Countries' },
        { icon: '🏙️', value: currentRiver.majorCities.length, label: 'Major Cities' }
    ];
    
    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-card-icon">${stat.icon}</div>
            <div class="stat-card-value">${stat.value}</div>
            <div class="stat-card-label">${stat.label}</div>
        </div>
    `).join('');
}

function renderMap() {
    const mapContainer = document.getElementById('riverMap');
    if (!mapContainer) return;
    
    const midPoint = currentRiver.course[Math.floor(currentRiver.course.length / 2)];
    mainMap = L.map('riverMap').setView([midPoint[0], midPoint[1]], 5);
    
    // Tile layers
    const layers = {
        terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap'
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri'
        }),
        topo: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '© CARTO'
        })
    };
    
    layers.terrain.addTo(mainMap);
    
    // Layer switching
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            Object.values(layers).forEach(layer => mainMap.removeLayer(layer));
            layers[btn.dataset.layer].addTo(mainMap);
        });
    });
    
    // Draw main river
    const riverCoords = currentRiver.course.map(coord => [coord[0], coord[1]]);
    const mainRiver = L.polyline(riverCoords, {
        color: '#3498db',
        weight: 5,
        opacity: 0.9
    }).addTo(mainMap);
    
    // Draw tributaries
    currentRiver.tributaries.forEach(trib => {
        const tribCoords = trib.coordinates.map(coord => [coord[0], coord[1]]);
        L.polyline(tribCoords, {
            color: '#2ecc71',
            weight: 3,
            opacity: 0.8,
            dashArray: '10, 5'
        }).addTo(mainMap).bindPopup(`
            <div class="popup-title">${trib.name}</div>
            <div class="popup-subtitle">Tributary • ${trib.length} km</div>
        `);
    });
    
    // Draw distributaries
    currentRiver.distributaries.forEach(dist => {
        const distCoords = dist.coordinates.map(coord => [coord[0], coord[1]]);
        L.polyline(distCoords, {
            color: '#e74c3c',
            weight: 3,
            opacity: 0.8,
            dashArray: '10, 5'
        }).addTo(mainMap).bindPopup(`
            <div class="popup-title">${dist.name}</div>
            <div class="popup-subtitle">Distributary • ${dist.length} km</div>
        `);
    });
    
    // Source marker
    L.marker([currentRiver.source.coordinates[0], currentRiver.source.coordinates[1]], {
        icon: L.divIcon({
            className: 'custom-marker source-marker',
            html: '🏔️',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(mainMap).bindPopup(`
        <div class="popup-title">Source: ${currentRiver.source.name}</div>
        <div class="popup-subtitle">${currentRiver.source.location} • ${currentRiver.source.elevation}m</div>
    `);
    
    // Mouth marker
    L.marker([currentRiver.mouth.coordinates[0], currentRiver.mouth.coordinates[1]], {
        icon: L.divIcon({
            className: 'custom-marker mouth-marker',
            html: '🌊',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(mainMap).bindPopup(`
        <div class="popup-title">Mouth: ${currentRiver.mouth.name}</div>
        <div class="popup-subtitle">${currentRiver.mouth.location}</div>
    `);
    
    // City markers
    currentRiver.majorCities.forEach(city => {
        L.marker([city.coordinates[0], city.coordinates[1]], {
            icon: L.divIcon({
                className: 'custom-marker city-marker',
                html: '🏙️',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        }).addTo(mainMap).bindPopup(`
            <div class="popup-title">${city.name}</div>
            <div class="popup-subtitle">${city.country} • ${(city.population / 1000000).toFixed(1)}M</div>
        `);
    });
    
    mainMap.fitBounds(mainRiver.getBounds(), { padding: [50, 50] });
}

function renderMindMap() {
    const svg = document.getElementById('mindMapSvg');
    if (!svg) return;
    
    const width = 600;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    
    const branches = [
        { label: '📏 Length', value: `${currentRiver.length} km` },
        { label: '💧 Discharge', value: `${currentRiver.discharge} m³/s` },
        { label: '🏔️ Source', value: currentRiver.source.name.substring(0, 15) },
        { label: '🌊 Mouth', value: currentRiver.mouth.name.substring(0, 15) },
        { label: '🌍 Countries', value: `${currentRiver.countries.length} nations` },
        { label: '🏙️ Cities', value: `${currentRiver.majorCities.length} major` }
    ];
    
    let svgContent = '';
    
    // Central node
    svgContent += `
        <circle cx="${centerX}" cy="${centerY}" r="50" fill="url(#riverGradient)" stroke="white" stroke-width="3"/>
        <text x="${centerX}" y="${centerY - 10}" fill="white" text-anchor="middle" font-size="12" font-weight="bold">${currentRiver.name}</text>
        <text x="${centerX}" y="${centerY + 10}" fill="white" text-anchor="middle" font-size="10">River</text>
    `;
    
    // Gradient definition
    svgContent = `
        <defs>
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0077b6"/>
                <stop offset="100%" style="stop-color:#48cae4"/>
            </linearGradient>
        </defs>
    ` + svgContent;
    
    // Branch nodes
    const radius = 150;
    branches.forEach((branch, i) => {
        const angle = (i * 2 * Math.PI / branches.length) - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Line
        svgContent += `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>`;
        
        // Node
        svgContent += `
            <circle cx="${x}" cy="${y}" r="35" fill="#00b4d8" stroke="white" stroke-width="2"/>
            <text x="${x}" y="${y - 8}" fill="white" text-anchor="middle" font-size="10">${branch.label}</text>
            <text x="${x}" y="${y + 8}" fill="white" text-anchor="middle" font-size="9" font-weight="bold">${branch.value}</text>
        `;
    });
    
    svg.innerHTML = svgContent;
}

function renderInfoTree() {
    const infoTree = document.getElementById('infoTree');
    if (!infoTree) return;
    
    const branches = [
        {
            icon: '🌍',
            title: 'Geography',
            subtitle: 'Physical characteristics',
            items: [
                { label: 'Length', value: `${currentRiver.length.toLocaleString()} km` },
                { label: 'Basin Area', value: `${currentRiver.basinArea.toLocaleString()} km²` },
                { label: 'Countries', value: currentRiver.countries.join(', ') },
                { label: 'Continent', value: currentRiver.continent.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) }
            ]
        },
        {
            icon: '💧',
            title: 'Hydrology',
            subtitle: 'Water flow data',
            items: [
                { label: 'Discharge', value: `${currentRiver.discharge.toLocaleString()} m³/s` },
                { label: 'Tributaries', value: `${currentRiver.tributaries.length} rivers` },
                { label: 'Distributaries', value: `${currentRiver.distributaries.length} channels` }
            ]
        },
        {
            icon: '🏔️',
            title: 'Source',
            subtitle: currentRiver.source.name,
            items: [
                { label: 'Location', value: currentRiver.source.location },
                { label: 'Elevation', value: `${currentRiver.source.elevation} m` }
            ]
        },
        {
            icon: '🌊',
            title: 'Mouth',
            subtitle: currentRiver.mouth.name,
            items: [
                { label: 'Location', value: currentRiver.mouth.location }
            ]
        },
        {
            icon: '⭐',
            title: 'Fun Facts',
            subtitle: 'Did you know?',
            items: [
                { label: 'Historical', value: currentRiver.facts.historical },
                { label: 'Ecological', value: currentRiver.facts.ecological },
                { label: 'Economic', value: currentRiver.facts.economic },
                { label: 'Fun Fact', value: currentRiver.facts.funFact }
            ]
        }
    ];
    
    infoTree.innerHTML = branches.map(branch => `
        <div class="info-branch">
            <div class="branch-header" onclick="toggleBranch(this)">
                <div class="branch-icon">${branch.icon}</div>
                <div class="branch-title">
                    <h4>${branch.title}</h4>
                    <span>${branch.subtitle}</span>
                </div>
                <i class="fas fa-chevron-down branch-toggle"></i>
            </div>
            <div class="branch-content">
                ${branch.items.map(item => `
                    <div class="branch-item">
                        <span class="item-label">${item.label}</span>
                        <span class="item-value">${item.value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleBranch(header) {
    header.classList.toggle('active');
    header.nextElementSibling.classList.toggle('active');
}

function renderTributaries() {
    const tributariesList = document.getElementById('tributariesList');
    const distributariesList = document.getElementById('distributariesList');
    
    if (tributariesList) {
        if (currentRiver.tributaries.length === 0) {
            tributariesList.innerHTML = '<p style="color: var(--text-muted); padding: 1rem;">No major tributaries recorded</p>';
        } else {
            tributariesList.innerHTML = currentRiver.tributaries.map(trib => `
                <div class="trib-item" onclick="zoomToCoords(${JSON.stringify(trib.coordinates[1])})">
                    <div class="trib-arrow">→</div>
                    <div class="trib-info">
                        <div class="trib-name">${trib.name}</div>
                        <div class="trib-detail">From: ${trib.source}</div>
                    </div>
                    <div class="trib-length">${trib.length} km</div>
                </div>
            `).join('');
        }
    }
    
    if (distributariesList) {
        if (currentRiver.distributaries.length === 0) {
            distributariesList.innerHTML = '<p style="color: var(--text-muted); padding: 1rem;">No major distributaries</p>';
        } else {
            distributariesList.innerHTML = currentRiver.distributaries.map(dist => `
                <div class="trib-item" onclick="zoomToCoords(${JSON.stringify(dist.coordinates[1])})">
                    <div class="trib-arrow">←</div>
                    <div class="trib-info">
                        <div class="trib-name">${dist.name}</div>
                        <div class="trib-detail">To: ${dist.mouth}</div>
                    </div>
                    <div class="trib-length">${dist.length} km</div>
                </div>
            `).join('');
        }
    }
}

function zoomToCoords(coords) {
    if (mainMap && coords) {
        mainMap.setView([coords[0], coords[1]], 8);
    }
}

function renderCities() {
    const citiesGrid = document.getElementById('citiesGrid');
    if (!citiesGrid) return;
    
    citiesGrid.innerHTML = currentRiver.majorCities.map(city => `
        <div class="city-card" onclick="zoomToCoords([${city.coordinates[0]}, ${city.coordinates[1]}])">
            <div class="city-icon">🏙️</div>
            <div class="city-name">${city.name}</div>
            <div class="city-country">${city.country}</div>
            <div class="city-population">
                <i class="fas fa-users"></i>
                <span>${(city.population / 1000000).toFixed(1)} million</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// FLYOVER MODAL
// ============================================

function initFlyoverModal() {
    const flyAlongBtn = document.getElementById('flyAlongBtn');
    const flyoverModal = document.getElementById('flyoverModal');
    const closeFlyover = document.getElementById('closeFlyover');
    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');
    const speedUpBtn = document.getElementById('speedUpBtn');
    const slowDownBtn = document.getElementById('slowDownBtn');
    
    if (flyAlongBtn) flyAlongBtn.addEventListener('click', openFlyoverModal);
    if (closeFlyover) closeFlyover.addEventListener('click', closeFlyoverModal);
    if (pauseBtn) pauseBtn.addEventListener('click', toggleFlyoverPause);
    if (restartBtn) restartBtn.addEventListener('click', restartFlyover);
    if (speedUpBtn) speedUpBtn.addEventListener('click', () => adjustSpeed(0.5));
    if (slowDownBtn) slowDownBtn.addEventListener('click', () => adjustSpeed(-0.25));
}

function openFlyoverModal() {
    const modal = document.getElementById('flyoverModal');
    modal.classList.add('active');
    document.getElementById('flyoverTitle').textContent = `✈️ Flying Along ${currentRiver.name} River`;
    
    setTimeout(() => {
        if (flyoverMap) flyoverMap.remove();
        
        flyoverMap = L.map('flyoverMap').setView(
            [currentRiver.source.coordinates[0], currentRiver.source.coordinates[1]], 8
        );
        
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri'
        }).addTo(flyoverMap);
        
        const riverCoords = currentRiver.course.map(coord => [coord[0], coord[1]]);
        L.polyline(riverCoords, { color: '#3498db', weight: 4, opacity: 0.8 }).addTo(flyoverMap);
        
        startFlyover();
    }, 300);
}

function closeFlyoverModal() {
    document.getElementById('flyoverModal').classList.remove('active');
    if (flyoverAnimation) clearInterval(flyoverAnimation);
    flyoverIndex = 0;
    flyoverPaused = false;
    flyoverSpeed = 1;
}

function startFlyover() {
    flyoverIndex = 0;
    flyoverPaused = false;
    
    const course = currentRiver.course;
    const totalPoints = course.length;
    
    const planeMarker = L.marker([course[0][0], course[0][1]], {
        icon: L.divIcon({
            className: 'custom-marker',
            html: '✈️',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }).addTo(flyoverMap);
    
    updateFlyoverInfo(0, totalPoints);
    
    flyoverAnimation = setInterval(() => {
        if (flyoverPaused) return;
        
        if (flyoverIndex >= totalPoints) {
            clearInterval(flyoverAnimation);
            document.getElementById('currentLocation').textContent = '🎉 Journey Complete!';
            document.getElementById('currentDetail').textContent = `Reached ${currentRiver.mouth.name}`;
            return;
        }
        
        const currentCoord = course[flyoverIndex];
        planeMarker.setLatLng([currentCoord[0], currentCoord[1]]);
        flyoverMap.panTo([currentCoord[0], currentCoord[1]], { animate: true, duration: 0.5 });
        
        updateFlyoverInfo(flyoverIndex, totalPoints);
        flyoverIndex++;
    }, 2000 / flyoverSpeed);
}

function updateFlyoverInfo(index, total) {
    const progress = ((index / (total - 1)) * 100).toFixed(0);
    const distance = ((index / (total - 1)) * currentRiver.length).toFixed(0);
    
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('journeyProgress').textContent = `${progress}%`;
    document.getElementById('distanceTraveled').textContent = `${distance} km`;
    
    // Find location name
    if (index === 0) {
        document.getElementById('currentLocation').textContent = `🏔️ ${currentRiver.source.name}`;
        document.getElementById('currentDetail').textContent = 'Starting at source...';
    } else if (index >= total - 1) {
        document.getElementById('currentLocation').textContent = `🌊 ${currentRiver.mouth.name}`;
        document.getElementById('currentDetail').textContent = 'Reached the mouth!';
    } else {
        const nearCity = findNearestCity(currentRiver.course[index]);
        if (nearCity) {
            document.getElementById('currentLocation').textContent = `📍 Near ${nearCity.name}`;
            document.getElementById('currentDetail').textContent = nearCity.country;
        } else {
            document.getElementById('currentLocation').textContent = `📍 Flowing through...`;
            document.getElementById('currentDetail').textContent = currentRiver.countries[0];
        }
    }
}

function findNearestCity(coord) {
    let nearest = null;
    let minDist = 2; // Degrees threshold
    
    currentRiver.majorCities.forEach(city => {
        const dist = Math.sqrt(
            Math.pow(city.coordinates[0] - coord[0], 2) +
            Math.pow(city.coordinates[1] - coord[1], 2)
        );
        if (dist < minDist) {
            minDist = dist;
            nearest = city;
        }
    });
    
    return nearest;
}

function toggleFlyoverPause() {
    flyoverPaused = !flyoverPaused;
    document.getElementById('pauseBtn').innerHTML = flyoverPaused ? 
        '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
}

function restartFlyover() {
    if (flyoverAnimation) clearInterval(flyoverAnimation);
    startFlyover();
}

function adjustSpeed(delta) {
    flyoverSpeed = Math.max(0.25, Math.min(4, flyoverSpeed + delta));
    document.getElementById('speedDisplay').textContent = `${flyoverSpeed}x`;
}

// ============================================
// MIND MAP MODAL
// ============================================

function initMindMapModal() {
    const expandBtn = document.getElementById('expandMindMap');
    const modal = document.getElementById('mindmapModal');
    const closeBtn = document.getElementById('closeMindmap');
    
    if (expandBtn) expandBtn.addEventListener('click', () => modal.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
}

// ============================================
// GLOBAL FUNCTIONS
// ============================================

window.toggleBranch = toggleBranch;
window.zoomToCoords = zoomToCoords;
