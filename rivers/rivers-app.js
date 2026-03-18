/**
 * GEOTOPIA - River Systems Explorer
 * Main Application JavaScript
 * 
 * Features:
 * - River cards display with filtering
 * - Interactive maps with Leaflet
 * - Fly Along River animation
 * - Mind map visualization
 * - Tributaries/Distributaries with arrows
 */

// ============================================
// GLOBAL VARIABLES
// ============================================
let allRivers = [];
let filteredRivers = [];
let currentView = 'grid';
let worldMap = null;
let riverMap = null;
let currentRiver = null;
let flyAnimation = null;
let isFlying = false;
let isPaused = false;
let flySpeed = 3;
let currentFlyIndex = 0;
let flightMarker = null;
let flightPath = null;
let tributaryLayers = [];
let distributaryLayers = [];
let cityMarkers = [];
let damMarkers = [];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Combine all river data
    if (typeof RIVERS_DATA !== 'undefined') {
        allRivers = RIVERS_DATA;
    }
    
    // Determine which page we're on
    const isProfilePage = document.body.classList.contains('profile-page');
    
    if (isProfilePage) {
        initProfilePage();
    } else {
        initMainPage();
    }
    
    // Initialize common elements
    initCommon();
});

// ============================================
// COMMON INITIALIZATION
// ============================================
function initCommon() {
    // Hide preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 1500);
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Fullscreen button
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareRiver);
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function shareRiver() {
    if (navigator.share && currentRiver) {
        navigator.share({
            title: `${currentRiver.name} - GEOTOPIA`,
            text: `Explore ${currentRiver.name} on GEOTOPIA River Systems Explorer!`,
            url: window.location.href
        });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

// ============================================
// MAIN PAGE FUNCTIONS
// ============================================
function initMainPage() {
    // Sort rivers by length (longest first)
    allRivers.sort((a, b) => b.length - a.length);
    filteredRivers = [...allRivers];
    
    // Render river cards
    renderRiverCards();
    
    // Initialize world map
    initWorldMap();
    
    // Setup event listeners
    setupFilters();
    setupSearch();
    setupViewToggle();
}

function renderRiverCards() {
    const grid = document.getElementById('riversGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    filteredRivers.forEach((river, index) => {
        const card = createRiverCard(river, index + 1);
        grid.appendChild(card);
    });
    
    // Update count
    const countEl = document.getElementById('riverCount');
    if (countEl) {
        countEl.textContent = filteredRivers.length;
    }
    
    // Add Coming Soon card at the end
    addComingSoonCard();
}

function createRiverCard(river, rank) {
    const card = document.createElement('div');
    card.className = 'river-card';
    card.style.animationDelay = `${(rank % 10) * 0.05}s`;
    
    // Create country flags HTML
    const flagsHtml = river.countries.slice(0, 4).map(c => 
        `<span class="country-flag" title="${c.name}">${c.flag}</span>`
    ).join('');
    
    const moreCountries = river.countries.length > 4 ? 
        `<span class="country-flag">+${river.countries.length - 4}</span>` : '';
    
    card.innerHTML = `
        <div class="river-card-image">
            <img src="${river.image}" alt="${river.name}" loading="lazy" 
                 onerror="this.src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400'">
            <span class="river-rank">#${rank}</span>
        </div>
        <div class="river-card-content">
            <h3 class="river-card-name">${river.name}</h3>
            <div class="river-card-countries">
                ${flagsHtml}${moreCountries}
            </div>
            <div class="river-card-length">
                <i class="fas fa-ruler-horizontal"></i>
                <span>${river.length.toLocaleString()} km</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        window.location.href = `rivers-profile.html?id=${river.id}`;
    });
    
    return card;
}

function setupFilters() {
    // Continent filter
    const continentBtns = document.querySelectorAll('[data-continent]');
    continentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            continentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const continent = btn.dataset.continent;
            if (continent === 'all') {
                filteredRivers = [...allRivers];
            } else {
                filteredRivers = allRivers.filter(r => r.continent === continent);
            }
            
            applySort();
            renderRiverCards();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            applySort();
            renderRiverCards();
        });
    }
}

function applySort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
    switch (sortValue) {
        case 'length-desc':
            filteredRivers.sort((a, b) => b.length - a.length);
            break;
        case 'length-asc':
            filteredRivers.sort((a, b) => a.length - b.length);
            break;
        case 'name-asc':
            filteredRivers.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredRivers.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query === '') {
                filteredRivers = [...allRivers];
            } else {
                filteredRivers = allRivers.filter(r => 
                    r.name.toLowerCase().includes(query) ||
                    r.countries.some(c => c.name.toLowerCase().includes(query))
                );
            }
            
            applySort();
            renderRiverCards();
        }, 300);
    });
}

function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const grid = document.getElementById('riversGrid');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            currentView = view;
            
            if (grid) {
                if (view === 'list') {
                    grid.classList.add('list-view');
                } else {
                    grid.classList.remove('list-view');
                }
            }
        });
    });
}

// ============================================
// WORLD MAP
// ============================================
function initWorldMap() {
    const mapContainer = document.getElementById('worldMap');
    if (!mapContainer) return;
    
    worldMap = L.map('worldMap', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        scrollWheelZoom: true,
        zoomControl: true
    });
    
    // Add dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO'
    }).addTo(worldMap);
    
    // Add rivers to map
    allRivers.forEach(river => {
        if (river.riverPath && river.riverPath.length > 1) {
            // Draw river line
            const polyline = L.polyline(river.riverPath, {
                color: '#3498db',
                weight: 2,
                opacity: 0.8
            }).addTo(worldMap);
            
            // Add popup
            polyline.bindPopup(`
                <div class="custom-popup">
                    <h3>${river.name}</h3>
                    <p><strong>Length:</strong> ${river.length.toLocaleString()} km</p>
                    <p><strong>Countries:</strong> ${river.countries.map(c => c.flag).join(' ')}</p>
                </div>
            `);
            
            polyline.on('click', () => {
                window.location.href = `rivers-profile.html?id=${river.id}`;
            });
            
            polyline.on('mouseover', function() {
                this.setStyle({ weight: 4, opacity: 1 });
            });
            
            polyline.on('mouseout', function() {
                this.setStyle({ weight: 2, opacity: 0.8 });
            });
        }
    });
}

// ============================================
// PROFILE PAGE FUNCTIONS
// ============================================
function initProfilePage() {
    // Get river ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const riverId = urlParams.get('id');
    
    if (!riverId) {
        window.location.href = 'rivers.html';
        return;
    }
    
    // Find river
    currentRiver = allRivers.find(r => r.id === riverId);
    
    if (!currentRiver) {
        window.location.href = 'rivers.html';
        return;
    }
    
    // Update loading text
    const loadingRiverName = document.getElementById('loadingRiverName');
    if (loadingRiverName) {
        loadingRiverName.textContent = `Loading ${currentRiver.name}...`;
    }
    
    // Populate page
    populateProfilePage();
    
    // Initialize map
    initRiverMap();
    
    // Initialize mind map
    initMindMap();
    
    // Setup fly along
    setupFlyAlong();
    
    // Setup map controls
    setupMapControls();
    
    // Load related rivers
    loadRelatedRivers();
    
    // Setup modal
    setupModal();
}

function populateProfilePage() {
    const river = currentRiver;
    const rank = allRivers.sort((a, b) => b.length - a.length).findIndex(r => r.id === river.id) + 1;
    
    // Background
    const bg = document.getElementById('profileBackground');
    if (bg) {
        bg.style.backgroundImage = `url(${river.image})`;
    }
    
    // Nav river name
    const navName = document.getElementById('navRiverName');
    if (navName) navName.textContent = river.name;
    
    // Hero section
    const rankEl = document.getElementById('riverRank');
    if (rankEl) {
        rankEl.innerHTML = `
            <span class="rank-number">#${rank}</span>
            <span class="rank-label">${rank === 1 ? "World's Longest" : `#${rank} Longest`}</span>
        `;
    }
    
    const nameEl = document.getElementById('riverName');
    if (nameEl) nameEl.textContent = river.name;
    
    const lengthEl = document.getElementById('riverLength');
    if (lengthEl) lengthEl.textContent = `${river.length.toLocaleString()} km`;
    
    const sourceEl = document.getElementById('riverSource');
    if (sourceEl) sourceEl.textContent = river.source.location;
    
    const mouthEl = document.getElementById('riverMouth');
    if (mouthEl) mouthEl.textContent = river.mouth.location;
    
    // Countries flags
    const countriesEl = document.getElementById('riverCountries');
    if (countriesEl) {
        countriesEl.innerHTML = river.countries.map(c => 
            `<span class="country-flag" title="${c.name}">${c.flag}</span>`
        ).join('');
    }
    
    // Source & Mouth card
    const sourceLocEl = document.getElementById('sourceLocation');
    if (sourceLocEl) sourceLocEl.textContent = river.source.location;
    
    const sourceTypeEl = document.getElementById('sourceType');
    if (sourceTypeEl) sourceTypeEl.textContent = river.source.type;
    
    const mouthLocEl = document.getElementById('mouthLocation');
    if (mouthLocEl) mouthLocEl.textContent = river.mouth.location;
    
    const mouthTypeEl = document.getElementById('mouthType');
    if (mouthTypeEl) mouthTypeEl.textContent = river.mouth.type;
    
    // Countries & States card
    const countriesList = document.getElementById('countriesList');
    if (countriesList) {
        countriesList.innerHTML = river.countries.map(c => `
            <div class="country-tag">
                <span class="flag">${c.flag}</span>
                <span>${c.name}</span>
            </div>
        `).join('');
    }
    
    const statesList = document.getElementById('statesList');
    if (statesList && river.states) {
        statesList.innerHTML = river.states.map(s => 
            `<span class="state-tag">${s}</span>`
        ).join('');
    }
    
    // Tributaries
    const leftTribs = document.getElementById('leftTributaries');
    const rightTribs = document.getElementById('rightTributaries');
    
    if (leftTribs && river.tributaries && river.tributaries.leftBank) {
        leftTribs.innerHTML = river.tributaries.leftBank.map(t => 
            `<li>${t}</li>`
        ).join('');
    }
    
    if (rightTribs && river.tributaries && river.tributaries.rightBank) {
        rightTribs.innerHTML = river.tributaries.rightBank.map(t => 
            `<li>${t}</li>`
        ).join('');
    }
    
    // Distributaries
    const distList = document.getElementById('distributariesList');
    if (distList && river.distributaries) {
        if (river.distributaries.length > 0) {
            distList.innerHTML = river.distributaries.map(d => `
                <div class="distributary-item">
                    <i class="fas fa-arrow-right"></i>
                    <span>${d}</span>
                </div>
            `).join('');
        } else {
            distList.innerHTML = '<p style="color: var(--text-muted);">No major distributaries</p>';
        }
    }
    
    // Cities
    const citiesList = document.getElementById('citiesList');
    if (citiesList && river.majorCities) {
        citiesList.innerHTML = river.majorCities.map(city => `
            <div class="city-item">
                <i class="fas fa-city"></i>
                <span>${city}</span>
            </div>
        `).join('');
    }
    
    // Dams
    const damsList = document.getElementById('damsList');
    if (damsList && river.dams) {
        if (river.dams.length > 0) {
            damsList.innerHTML = river.dams.map(dam => `
                <div class="dam-item">
                    <div class="dam-icon">
                        <i class="fas fa-archway"></i>
                    </div>
                    <div class="dam-info">
                        <h4>${dam.name}</h4>
                        <p>${dam.details || 'Hydroelectric dam'}</p>
                    </div>
                </div>
            `).join('');
        } else {
            damsList.innerHTML = '<p style="color: var(--text-muted);">No major dams</p>';
        }
    }
    
    // Basin stats
    const lengthStatEl = document.getElementById('lengthStat');
    if (lengthStatEl) lengthStatEl.textContent = `${river.length.toLocaleString()} km`;
    
    const basinAreaEl = document.getElementById('basinAreaStat');
    if (basinAreaEl) basinAreaEl.textContent = river.basinArea || 'N/A';
    
    const dischargeEl = document.getElementById('dischargeStat');
    if (dischargeEl) dischargeEl.textContent = river.discharge || 'N/A';
    
    // Economic importance
    const economicList = document.getElementById('economicList');
    if (economicList && river.economicImportance) {
        economicList.innerHTML = river.economicImportance.map(item => `
            <div class="importance-item">
                <i class="fas fa-check-circle"></i>
                <span>${item}</span>
            </div>
        `).join('');
    }
    
    // Environmental issues
    const issuesList = document.getElementById('issuesList');
    if (issuesList && river.environmentalIssues) {
        issuesList.innerHTML = river.environmentalIssues.map(issue => `
            <div class="issue-item">
                <i class="fas fa-exclamation-circle"></i>
                <span>${issue}</span>
            </div>
        `).join('');
    }
    
    // Water disputes
    const disputesContent = document.getElementById('disputesContent');
    if (disputesContent && river.waterDisputes) {
        if (river.waterDisputes.length > 0) {
            disputesContent.innerHTML = river.waterDisputes.map(dispute => `
                <div class="dispute-item">
                    <h4>${dispute.title}</h4>
                    <p>${dispute.description}</p>
                </div>
            `).join('');
        } else {
            disputesContent.innerHTML = '<p style="color: var(--text-muted);">No major disputes recorded</p>';
        }
    }
    
    // Historical importance
    const historyContent = document.getElementById('historyContent');
    if (historyContent && river.historicalImportance) {
        historyContent.innerHTML = river.historicalImportance.map(item => `
            <div class="history-item">
                <div class="history-icon">
                    <i class="fas fa-landmark"></i>
                </div>
                <div class="history-text">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// RIVER MAP
// ============================================
function initRiverMap() {
    const mapContainer = document.getElementById('riverMap');
    if (!mapContainer || !currentRiver) return;
    
    // Calculate center from river path
    const path = currentRiver.riverPath;
    const centerLat = (path[0][0] + path[path.length - 1][0]) / 2;
    const centerLng = (path[0][1] + path[path.length - 1][1]) / 2;
    
    riverMap = L.map('riverMap', {
        center: [centerLat, centerLng],
        zoom: 5,
        minZoom: 3,
        maxZoom: 12
    });
    
    // Add dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO'
    }).addTo(riverMap);
    
    // Draw main river course with glow
    L.polyline(currentRiver.riverPath, {
        color: '#1a5276',
        weight: 12,
        opacity: 0.3
    }).addTo(riverMap);
    
    const mainRiver = L.polyline(currentRiver.riverPath, {
        color: '#3498db',
        weight: 5,
        opacity: 1
    }).addTo(riverMap);
    
    // Add source marker
    const sourceIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="source-marker"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker(currentRiver.riverPath[0], { icon: sourceIcon })
        .addTo(riverMap)
        .bindPopup(`
            <div class="custom-popup">
                <h3>🟢 Source</h3>
                <p><strong>${currentRiver.source.location}</strong></p>
                <p>${currentRiver.source.type}</p>
            </div>
        `);
    
    // Add mouth marker
    const mouthIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="mouth-marker"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker(currentRiver.riverPath[currentRiver.riverPath.length - 1], { icon: mouthIcon })
        .addTo(riverMap)
        .bindPopup(`
            <div class="custom-popup">
                <h3>🔴 Mouth</h3>
                <p><strong>${currentRiver.mouth.location}</strong></p>
                <p>${currentRiver.mouth.type}</p>
            </div>
        `);
    
    // Add tributaries with arrows pointing IN
    if (currentRiver.tributaryPaths) {
        currentRiver.tributaryPaths.forEach(trib => {
            const tribLine = L.polyline(trib.path, {
                color: '#2ecc71',
                weight: 3,
                opacity: 0.8,
                dashArray: '5, 5'
            }).addTo(riverMap);
            
            tributaryLayers.push(tribLine);
            
            // Add arrow at confluence (pointing toward main river)
            if (trib.path.length > 1) {
                const arrowIcon = L.divIcon({
                    className: 'arrow-marker',
                    html: '<i class="fas fa-arrow-right"></i>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });
                
                const arrowMarker = L.marker(trib.path[trib.path.length - 1], { icon: arrowIcon })
                    .addTo(riverMap)
                    .bindPopup(`
                        <div class="custom-popup">
                            <h3>↘️ Tributary</h3>
                            <p><strong>${trib.name}</strong></p>
                            <p>Flows INTO ${currentRiver.name}</p>
                        </div>
                    `);
                
                tributaryLayers.push(arrowMarker);
            }
        });
    }
    
    // Add distributaries with arrows pointing OUT
    if (currentRiver.distributaryPaths) {
        currentRiver.distributaryPaths.forEach(dist => {
            const distLine = L.polyline(dist.path, {
                color: '#e74c3c',
                weight: 3,
                opacity: 0.8,
                dashArray: '5, 5'
            }).addTo(riverMap);
            
            distributaryLayers.push(distLine);
            
            // Add arrow at end (pointing away from main river)
            if (dist.path.length > 1) {
                const arrowIcon = L.divIcon({
                    className: 'arrow-marker outflow',
                    html: '<i class="fas fa-arrow-right"></i>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });
                
                const arrowMarker = L.marker(dist.path[dist.path.length - 1], { icon: arrowIcon })
                    .addTo(riverMap)
                    .bindPopup(`
                        <div class="custom-popup">
                            <h3>↗️ Distributary</h3>
                            <p><strong>${dist.name}</strong></p>
                            <p>Flows OUT from ${currentRiver.name}</p>
                        </div>
                    `);
                
                distributaryLayers.push(arrowMarker);
            }
        });
    }
    
    // Add city markers
    if (currentRiver.cityCoordinates) {
        currentRiver.cityCoordinates.forEach(city => {
            const cityIcon = L.divIcon({
                className: 'custom-marker',
                html: '<div class="city-marker"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            
            const marker = L.marker(city.coords, { icon: cityIcon })
                .addTo(riverMap)
                .bindPopup(`
                    <div class="custom-popup">
                        <h3>🏙️ ${city.name}</h3>
                        <p>Major city on ${currentRiver.name}</p>
                    </div>
                `);
            
            cityMarkers.push(marker);
        });
    }
    
    // Add dam markers
    if (currentRiver.damCoordinates) {
        currentRiver.damCoordinates.forEach(dam => {
            const damIcon = L.divIcon({
                className: 'custom-marker',
                html: '<div class="dam-marker"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            const marker = L.marker(dam.coords, { icon: damIcon })
                .addTo(riverMap)
                .bindPopup(`
                    <div class="custom-popup">
                        <h3>🏗️ ${dam.name}</h3>
                        <p>${dam.details || 'Hydroelectric Dam'}</p>
                    </div>
                `);
            
            damMarkers.push(marker);
        });
    }
    
    // Fit bounds to river
    riverMap.fitBounds(mainRiver.getBounds(), { padding: [50, 50] });
}

function setupMapControls() {
    const controlBtns = document.querySelectorAll('.map-control-btn');
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const layer = btn.dataset.layer;
            
            switch (layer) {
                case 'tributaries':
                    tributaryLayers.forEach(l => {
                        if (btn.classList.contains('active')) {
                            riverMap.addLayer(l);
                        } else {
                            riverMap.removeLayer(l);
                        }
                    });
                    break;
                case 'distributaries':
                    distributaryLayers.forEach(l => {
                        if (btn.classList.contains('active')) {
                            riverMap.addLayer(l);
                        } else {
                            riverMap.removeLayer(l);
                        }
                    });
                    break;
                case 'cities':
                    cityMarkers.forEach(m => {
                        if (btn.classList.contains('active')) {
                            riverMap.addLayer(m);
                        } else {
                            riverMap.removeLayer(m);
                        }
                    });
                    break;
                case 'dams':
                    damMarkers.forEach(m => {
                        if (btn.classList.contains('active')) {
                            riverMap.addLayer(m);
                        } else {
                            riverMap.removeLayer(m);
                        }
                    });
                    break;
            }
        });
    });
}

// ============================================
// FLY ALONG RIVER
// ============================================
function setupFlyAlong() {
    const flyBtn = document.getElementById('flyAlongBtn');
    const flyControls = document.getElementById('flyControls');
    const pauseBtn = document.getElementById('pauseFly');
    const stopBtn = document.getElementById('stopFly');
    const speedInput = document.getElementById('flySpeed');
    
    if (flyBtn) {
        flyBtn.addEventListener('click', startFlight);
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', togglePauseFlight);
    }
    
    if (stopBtn) {
        stopBtn.addEventListener('click', stopFlight);
    }
    
    if (speedInput) {
        speedInput.addEventListener('input', (e) => {
            flySpeed = parseInt(e.target.value);
        });
    }
}

function startFlight() {
    if (!currentRiver || !riverMap) return;
    
    isFlying = true;
    isPaused = false;
    currentFlyIndex = 0;
    
    // Show controls
    document.getElementById('flyControls').style.display = 'flex';
    document.getElementById('flightInfoPanel').style.display = 'block';
    document.getElementById('flyAlongBtn').style.display = 'none';
    
    // Create flight marker
    const planeIcon = L.divIcon({
        className: 'flight-marker',
        html: '<div style="background: #3498db; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 20px #3498db;"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    flightMarker = L.marker(currentRiver.riverPath[0], { 
        icon: planeIcon,
        zIndexOffset: 1000
    }).addTo(riverMap);
    
    // Create glowing path
    flightPath = L.polyline([], {
        color: '#00ff88',
        weight: 6,
        opacity: 0.8
    }).addTo(riverMap);
    
    // Zoom to source
    riverMap.setView(currentRiver.riverPath[0], 8);
    
    // Update info
    updateFlightInfo(0);
    
    // Start animation
    animateFlight();
}

function animateFlight() {
    if (!isFlying || currentFlyIndex >= currentRiver.riverPath.length) {
        endFlight();
        return;
    }
    
    if (isPaused) {
        flyAnimation = setTimeout(animateFlight, 100);
        return;
    }
    
    const path = currentRiver.riverPath;
    const currentPos = path[currentFlyIndex];
    
    // Move marker
    flightMarker.setLatLng(currentPos);
    
    // Extend glowing path
    flightPath.addLatLng(currentPos);
    
    // Pan map smoothly
    riverMap.panTo(currentPos, { animate: true, duration: 0.5 });
    
    // Update progress
    const progress = (currentFlyIndex / (path.length - 1)) * 100;
    document.getElementById('flyProgress').style.width = `${progress}%`;
    
    // Update flight info
    updateFlightInfo(currentFlyIndex);
    
    // Check for landmarks
    checkLandmarks(currentFlyIndex);
    
    currentFlyIndex++;
    
    // Calculate delay based on speed (1 = slow, 5 = fast)
    const delay = 600 - (flySpeed * 100);
    flyAnimation = setTimeout(animateFlight, delay);
}

function updateFlightInfo(index) {
    const path = currentRiver.riverPath;
    const totalLength = currentRiver.length;
    const progress = index / (path.length - 1);
    
    const distanceTraveled = Math.round(totalLength * progress);
    const distanceRemaining = totalLength - distanceTraveled;
    
    document.getElementById('distanceTraveled').textContent = `${distanceTraveled.toLocaleString()} km`;
    document.getElementById('distanceRemaining').textContent = `${distanceRemaining.toLocaleString()} km`;
    
    // Update location name based on progress
    let locationName = 'En Route';
    if (progress < 0.1) {
        locationName = currentRiver.source.location;
    } else if (progress > 0.9) {
        locationName = currentRiver.mouth.location;
    } else if (currentRiver.flightLandmarks) {
        // Find nearest landmark
        const landmarks = currentRiver.flightLandmarks;
        for (let i = landmarks.length - 1; i >= 0; i--) {
            if (progress >= landmarks[i].progress) {
                locationName = landmarks[i].name;
                break;
            }
        }
    }
    
    document.getElementById('currentLocationName').textContent = locationName;
}

function checkLandmarks(index) {
    if (!currentRiver.flightLandmarks) return;
    
    const progress = index / (currentRiver.riverPath.length - 1);
    
    currentRiver.flightLandmarks.forEach(landmark => {
        if (Math.abs(progress - landmark.progress) < 0.02 && !landmark.shown) {
            landmark.shown = true;
            showLandmarkPopup(landmark);
        }
    });
}

function showLandmarkPopup(landmark) {
    const popup = L.popup()
        .setLatLng(flightMarker.getLatLng())
        .setContent(`
            <div class="custom-popup">
                <h3>${landmark.icon} ${landmark.name}</h3>
                <p>${landmark.description}</p>
            </div>
        `)
        .openOn(riverMap);
    
    setTimeout(() => {
        riverMap.closePopup(popup);
    }, 2000);
}

function togglePauseFlight() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('pauseFly');
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? 
            '<i class="fas fa-play"></i>' : 
            '<i class="fas fa-pause"></i>';
    }
}

function stopFlight() {
    isFlying = false;
    isPaused = false;
    
    if (flyAnimation) {
        clearTimeout(flyAnimation);
    }
    
    // Remove flight elements
    if (flightMarker) {
        riverMap.removeLayer(flightMarker);
    }
    if (flightPath) {
        riverMap.removeLayer(flightPath);
    }
    
    // Reset landmarks
    if (currentRiver.flightLandmarks) {
        currentRiver.flightLandmarks.forEach(l => l.shown = false);
    }
    
    // Hide controls
    document.getElementById('flyControls').style.display = 'none';
    document.getElementById('flightInfoPanel').style.display = 'none';
    document.getElementById('flyAlongBtn').style.display = 'flex';
    document.getElementById('flyProgress').style.width = '0%';
    
    // Reset map view
    riverMap.fitBounds(L.polyline(currentRiver.riverPath).getBounds(), { padding: [50, 50] });
}

function endFlight() {
    isFlying = false;
    
    if (flyAnimation) {
        clearTimeout(flyAnimation);
    }
    
    // Show summary modal
    showFlightSummary();
}

function showFlightSummary() {
    const modal = document.getElementById('flightSummaryModal');
    if (!modal) return;
    
    // Populate summary
    document.getElementById('summaryImage').style.backgroundImage = `url(${currentRiver.image})`;
    document.getElementById('summaryRiverName').textContent = currentRiver.name;
    document.getElementById('summaryLength').textContent = `${currentRiver.length.toLocaleString()} km`;
    document.getElementById('summaryCountries').textContent = currentRiver.countries.length;
    
    const tributaryCount = (currentRiver.tributaries?.leftBank?.length || 0) + 
                          (currentRiver.tributaries?.rightBank?.length || 0);
    document.getElementById('summaryTributaries').textContent = tributaryCount;
    document.getElementById('summaryBasin').textContent = currentRiver.basinArea || 'N/A';
    
    modal.classList.add('active');
}

function setupModal() {
    const modal = document.getElementById('flightSummaryModal');
    const closeBtn = document.getElementById('closeSummary');
    const flyAgainBtn = document.getElementById('flyAgainBtn');
    const exploreBtn = document.getElementById('exploreMapBtn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            stopFlight();
        });
    }
    
    if (flyAgainBtn) {
        flyAgainBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            stopFlight();
            setTimeout(startFlight, 500);
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            stopFlight();
        });
    }
    
    // Close on outside click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            stopFlight();
        }
    });
}

// ============================================
// MIND MAP
// ============================================
function initMindMap() {
    const container = document.getElementById('mindmapBranches');
    const centerImage = document.getElementById('centerImage');
    const centerName = document.getElementById('centerName');
    
    if (!container || !currentRiver) return;
    
    // Set center
    if (centerImage) {
        centerImage.style.backgroundImage = `url(${currentRiver.image})`;
    }
    if (centerName) {
        centerName.textContent = currentRiver.name;
    }
    
    // Define branches
    const branches = [
        { 
            id: 'source', 
            icon: 'fas fa-mountain', 
            title: 'Source', 
            summary: currentRiver.source.location,
            content: [
                `Location: ${currentRiver.source.location}`,
                `Type: ${currentRiver.source.type}`,
                `Elevation: ${currentRiver.source.elevation || 'N/A'}`
            ]
        },
        { 
            id: 'mouth', 
            icon: 'fas fa-water', 
            title: 'Mouth', 
            summary: currentRiver.mouth.location,
            content: [
                `Location: ${currentRiver.mouth.location}`,
                `Type: ${currentRiver.mouth.type}`,
                `Delta: ${currentRiver.mouth.delta || 'N/A'}`
            ]
        },
        { 
            id: 'countries', 
            icon: 'fas fa-globe', 
            title: 'Countries', 
            summary: `${currentRiver.countries.length} countries`,
            content: currentRiver.countries.map(c => `${c.flag} ${c.name}`)
        },
        { 
            id: 'tributaries', 
            icon: 'fas fa-code-branch', 
            title: 'Tributaries', 
            summary: `${(currentRiver.tributaries?.leftBank?.length || 0) + (currentRiver.tributaries?.rightBank?.length || 0)} rivers`,
            content: [
                ...(currentRiver.tributaries?.leftBank || []).map(t => `← ${t}`),
                ...(currentRiver.tributaries?.rightBank || []).map(t => `→ ${t}`)
            ]
        },
        { 
            id: 'cities', 
            icon: 'fas fa-city', 
            title: 'Major Cities', 
            summary: `${currentRiver.majorCities?.length || 0} cities`,
            content: currentRiver.majorCities || []
        },
        { 
            id: 'dams', 
            icon: 'fas fa-archway', 
            title: 'Dams', 
            summary: `${currentRiver.dams?.length || 0} dams`,
            content: (currentRiver.dams || []).map(d => d.name)
        },
        { 
            id: 'length', 
            icon: 'fas fa-ruler', 
            title: 'Length', 
            summary: `${currentRiver.length.toLocaleString()} km`,
            content: [
                `Total Length: ${currentRiver.length.toLocaleString()} km`,
                `Basin Area: ${currentRiver.basinArea || 'N/A'}`,
                `Discharge: ${currentRiver.discharge || 'N/A'}`
            ]
        },
        { 
            id: 'economic', 
            icon: 'fas fa-chart-line', 
            title: 'Economy', 
            summary: 'Economic importance',
            content: currentRiver.economicImportance || []
        },
        { 
            id: 'environment', 
            icon: 'fas fa-leaf', 
            title: 'Environment', 
            summary: 'Environmental issues',
            content: currentRiver.environmentalIssues || []
        },
        { 
            id: 'history', 
            icon: 'fas fa-landmark', 
            title: 'History', 
            summary: 'Historical importance',
            content: (currentRiver.historicalImportance || []).map(h => h.title)
        }
    ];
    
    // Position branches in a circle
    const centerX = 600;
    const centerY = 400;
    const radius = 320;
    
    branches.forEach((branch, index) => {
        const angle = (index / branches.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        const branchEl = document.createElement('div');
        branchEl.className = 'mindmap-branch';
        branchEl.style.left = `${x - 100}px`;
        branchEl.style.top = `${y - 35}px`;
        
        branchEl.innerHTML = `
            <div class="branch-node" data-branch="${branch.id}">
                <div class="branch-icon">
                    <i class="${branch.icon}"></i>
                </div>
                <div class="branch-content">
                    <h4>${branch.title}</h4>
                    <p>${branch.summary}</p>
                </div>
            </div>
            <div class="branch-expanded">
                <ul>
                    ${branch.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Add click event
        branchEl.querySelector('.branch-node').addEventListener('click', () => {
            const expanded = branchEl.querySelector('.branch-expanded');
            document.querySelectorAll('.branch-expanded.active').forEach(el => {
                if (el !== expanded) el.classList.remove('active');
            });
            expanded.classList.toggle('active');
        });
        
        container.appendChild(branchEl);
        
        // Draw connecting line (using CSS or SVG would be better, but for simplicity)
        const lineEl = document.createElement('div');
        lineEl.className = 'branch-line';
        const lineLength = radius - 90;
        lineEl.style.width = `${lineLength}px`;
        lineEl.style.left = `${centerX}px`;
        lineEl.style.top = `${centerY}px`;
        lineEl.style.transform = `rotate(${angle}rad)`;
        container.appendChild(lineEl);
    });
}

// ============================================
// RELATED RIVERS
// ============================================
function loadRelatedRivers() {
    const container = document.getElementById('relatedRivers');
    if (!container || !currentRiver) return;
    
    // Get rivers from same continent or similar length
    const related = allRivers
        .filter(r => r.id !== currentRiver.id)
        .filter(r => r.continent === currentRiver.continent || 
                    Math.abs(r.length - currentRiver.length) < 1000)
        .slice(0, 6);
    
    container.innerHTML = related.map(river => `
        <a href="rivers-profile.html?id=${river.id}" class="related-card">
            <img src="${river.image}" alt="${river.name}" loading="lazy"
                 onerror="this.src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400'">
            <div class="related-card-overlay">
                <h4>${river.name}</h4>
                <p>${river.length.toLocaleString()} km</p>
            </div>
        </a>
    `).join('');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

// ============================================
// COMING SOON FEATURE
// ============================================

function getTotalRiversCount() {
    return allRivers.length;
}

function createComingSoonCard() {
    const totalRivers = getTotalRiversCount();
    
    const comingSoonCard = document.createElement('div');
    comingSoonCard.className = 'river-card coming-soon-card';
    comingSoonCard.innerHTML = `
        <div class="coming-soon-content">
            <div class="coming-soon-icon">🌊</div>
            <h3>More Rivers Coming Soon!</h3>
            <p>We're constantly adding new rivers from around the world.</p>
            <div class="coming-soon-stats">
                <span class="current-count">${totalRivers} rivers available</span>
                <span class="separator">→</span>
                <span class="future-count">1000+ planned</span>
            </div>
            <p class="coming-soon-note">Stay tuned for updates!</p>
        </div>
    `;
    return comingSoonCard;
}

function addComingSoonCard() {
    const riverGrid = document.getElementById('riversGrid');
    
    if (riverGrid) {
        // Remove existing coming soon card if any
        const existingCard = riverGrid.querySelector('.coming-soon-card');
        if (existingCard) {
            existingCard.remove();
        }
        
        // Add new coming soon card at the end
        riverGrid.appendChild(createComingSoonCard());
    }
}
```

---

## Don't forget to add the CSS!

Add this to the **end** of your `rivers-styles.css`:

```css
/* ============================================
   COMING SOON CARD STYLES
   ============================================ */

.coming-soon-card {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    border: 2px dashed #4a9eff;
    border-radius: 16px;
    padding: 40px 30px;
    text-align: center;
    cursor: default;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.coming-soon-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
    animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
}

.coming-soon-card:hover {
    border-color: #64b5f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(74, 158, 255, 0.3);
}

.coming-soon-content {
    position: relative;
    z-index: 1;
}

.coming-soon-icon {
    font-size: 60px;
    margin-bottom: 20px;
    animation: wave-animation 2s ease-in-out infinite;
}

@keyframes wave-animation {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-5deg); }
    75% { transform: translateY(-5px) rotate(5deg); }
}

.coming-soon-card h3 {
    color: #4a9eff;
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.coming-soon-card .coming-soon-content p {
    color: #a0a0a0;
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
}

.coming-soon-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
    padding: 15px 25px;
    background: rgba(74, 158, 255, 0.1);
    border-radius: 30px;
    border: 1px solid rgba(74, 158, 255, 0.3);
}

.current-count {
    color: #4ade80;
    font-weight: 700;
    font-size: 1.1rem;
}

.separator {
    color: #4a9eff;
    font-size: 1.2rem;
    animation: arrow-pulse 1.5s ease-in-out infinite;
}

@keyframes arrow-pulse {
    0%, 100% { opacity: 0.5; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(5px); }
}

.future-count {
    color: #fbbf24;
    font-weight: 700;
    font-size: 1.1rem;
}

.coming-soon-note {
    color: #888 !important;
    font-size: 0.85rem !important;
    font-style: italic;
    margin-top: 15px;
}

@media (max-width: 768px) {
    .coming-soon-card {
        padding: 30px 20px;
        min-height: 250px;
    }
    
    .coming-soon-icon {
        font-size: 45px;
    }
    
    .coming-soon-card h3 {
        font-size: 1.3rem;
    }
    
    .coming-soon-stats {
        flex-direction: column;
        gap: 10px;
    }
    
    .separator {
        transform: rotate(90deg);
    }
}
