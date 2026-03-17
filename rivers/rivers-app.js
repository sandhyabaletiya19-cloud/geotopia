/* ═══════════════════════════════════════════════════════════════
   RIVERS APP - Complete JavaScript
   Matching Mountains Design Pattern
   ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// GLOBAL VARIABLES
// ─────────────────────────────────────────────────────────────────
let allRivers = [];
let filteredRivers = [];
let currentRiver = null;
let mainMap = null;
let flyoverMap = null;
let flyoverInterval = null;
let currentFlyoverIndex = 0;
let isPaused = false;

// ─────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    const isProfilePage = document.body.classList.contains('profile-page');
    
    if (isProfilePage) {
        initProfilePage();
    } else {
        initMainPage();
    }
});

// ─────────────────────────────────────────────────────────────────
// MAIN PAGE FUNCTIONS
// ─────────────────────────────────────────────────────────────────
function initMainPage() {
    // Load rivers data
    if (typeof riversData !== 'undefined') {
        allRivers = riversData;
        filteredRivers = [...allRivers];
        
        // Sort by length (longest to shortest)
        filteredRivers.sort((a, b) => b.length - a.length);
        
        renderRivers();
        updateStats();
        setupEventListeners();
        createWaterParticles();
    }
    
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1000);
}

function renderRivers() {
    const grid = document.getElementById('riversGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredRivers.length === 0) {
        grid.innerHTML = `
            <div class="no-data">
                <div class="no-data-icon">🌊</div>
                <h3>No Rivers Found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    filteredRivers.forEach((river, index) => {
        const card = createRiverCard(river, index + 1);
        grid.appendChild(card);
    });
    
    // Update count
    const countEl = document.querySelector('.rivers-count');
    if (countEl) {
        countEl.textContent = `Showing ${filteredRivers.length} of ${allRivers.length} rivers`;
    }
}

function createRiverCard(river, rank) {
    const card = document.createElement('div');
    card.className = 'river-card';
    card.setAttribute('data-id', river.id);
    
    // Get river type badge
    const typeBadge = river.type || 'River';
    
    // Default image if none provided
    const imageUrl = river.image || `https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop`;
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" alt="${river.name}" loading="lazy" 
                 onerror="this.src='https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop'">
            <div class="card-overlay"></div>
            <div class="card-badges">
                <span class="rank-badge">
                    <i class="fas fa-trophy"></i> #${rank}
                </span>
                <span class="type-badge">${typeBadge}</span>
            </div>
            <div class="length-display">
                <span class="length-value">${river.length.toLocaleString()}</span>
                <span class="length-unit">kilometers</span>
            </div>
        </div>
        <div class="card-content">
            <h3 class="river-name">
                <i class="fas fa-water"></i>
                ${river.name}
            </h3>
            <p class="river-location">
                <i class="fas fa-globe-americas"></i>
                ${river.countries ? river.countries.join(', ') : river.country || 'Unknown'}
            </p>
            <div class="quick-stats">
                <div class="quick-stat">
                    <span class="quick-stat-value">${formatNumber(river.drainageArea)}</span>
                    <span class="quick-stat-label">km² Basin</span>
                </div>
                <div class="quick-stat">
                    <span class="quick-stat-value">${river.tributaries ? river.tributaries.length : 0}</span>
                    <span class="quick-stat-label">Tributaries</span>
                </div>
                <div class="quick-stat">
                    <span class="quick-stat-value">${river.majorCities ? river.majorCities.length : 0}</span>
                    <span class="quick-stat-label">Cities</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="card-btn primary" onclick="viewRiver(${river.id})">
                    <i class="fas fa-info-circle"></i> Explore
                </button>
                <button class="card-btn secondary" onclick="quickView(${river.id})">
                    <i class="fas fa-map"></i> Map
                </button>
            </div>
        </div>
    `;
    
    // Click on card (not buttons) to view river
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-btn')) {
            viewRiver(river.id);
        }
    });
    
    return card;
}

function updateStats() {
    const totalRivers = document.getElementById('totalRivers');
    const totalLength = document.getElementById('totalLength');
    const totalCountries = document.getElementById('totalCountries');
    
    if (totalRivers) totalRivers.textContent = allRivers.length;
    
    if (totalLength) {
        const total = allRivers.reduce((sum, r) => sum + (r.length || 0), 0);
        totalLength.textContent = formatNumber(total);
    }
    
    if (totalCountries) {
        const countries = new Set();
        allRivers.forEach(r => {
            if (r.countries) r.countries.forEach(c => countries.add(c));
            if (r.country) countries.add(r.country);
        });
        totalCountries.textContent = countries.size;
    }
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Filters
    const continentFilter = document.getElementById('continentFilter');
    const lengthFilter = document.getElementById('lengthFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (continentFilter) continentFilter.addEventListener('change', applyFilters);
    if (lengthFilter) lengthFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
    
    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const grid = document.getElementById('riversGrid');
            if (grid) {
                if (btn.dataset.view === 'list') {
                    grid.classList.add('list-view');
                } else {
                    grid.classList.remove('list-view');
                }
            }
        });
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        filteredRivers = [...allRivers];
    } else {
        filteredRivers = allRivers.filter(river => {
            return (
                river.name.toLowerCase().includes(query) ||
                (river.countries && river.countries.some(c => c.toLowerCase().includes(query))) ||
                (river.country && river.country.toLowerCase().includes(query)) ||
                (river.continent && river.continent.toLowerCase().includes(query))
            );
        });
    }
    
    applyFilters(false);
}

function applyFilters(refilter = true) {
    if (refilter) {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        
        if (!query) {
            filteredRivers = [...allRivers];
        }
    }
    
    const continent = document.getElementById('continentFilter')?.value;
    const length = document.getElementById('lengthFilter')?.value;
    const sort = document.getElementById('sortFilter')?.value;
    
    // Apply continent filter
    if (continent) {
        filteredRivers = filteredRivers.filter(r => r.continent === continent);
    }
    
    // Apply length filter
    if (length) {
        const [min, max] = length.split('-').map(Number);
        filteredRivers = filteredRivers.filter(r => {
            if (max) {
                return r.length >= min && r.length < max;
            }
            return r.length >= min;
        });
    }
    
    // Apply sorting
    switch (sort) {
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
        case 'discharge-desc':
            filteredRivers.sort((a, b) => (b.discharge || 0) - (a.discharge || 0));
            break;
        default:
            filteredRivers.sort((a, b) => b.length - a.length);
    }
    
    renderRivers();
}

function viewRiver(id) {
    window.location.href = `rivers-profile.html?id=${id}`;
}

function quickView(id) {
    const river = allRivers.find(r => r.id === id);
    if (!river) return;
    
    // Create quick view modal
    const modal = document.createElement('div');
    modal.className = 'flyover-modal active';
    modal.innerHTML = `
        <button class="close-modal" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
        <div class="flyover-content">
            <h2 class="flyover-title">
                <i class="fas fa-water"></i>
                <span>${river.name}</span>
            </h2>
            <div class="flyover-map-container">
                <div id="quickViewMap"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Initialize map
    setTimeout(() => {
        const map = L.map('quickViewMap').setView(
            [river.source?.coordinates?.[0] || 0, river.source?.coordinates?.[1] || 0],
            5
        );
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);
        
        // Add river course if available
        if (river.course && river.course.length > 0) {
            const courseCoords = river.course.map(c => [c.coordinates[0], c.coordinates[1]]);
            L.polyline(courseCoords, {
                color: '#0ea5e9',
                weight: 4,
                opacity: 0.8
            }).addTo(map);
            
            map.fitBounds(L.polyline(courseCoords).getBounds(), { padding: [50, 50] });
        }
    }, 100);
}

// ─────────────────────────────────────────────────────────────────
// PROFILE PAGE FUNCTIONS
// ─────────────────────────────────────────────────────────────────
function initProfilePage() {
    // Get river ID from URL
    const params = new URLSearchParams(window.location.search);
    const riverId = parseInt(params.get('id'));
    
    if (!riverId || typeof riversData === 'undefined') {
        showError('River not found');
        return;
    }
    
    currentRiver = riversData.find(r => r.id === riverId);
    
    if (!currentRiver) {
        showError('River not found');
        return;
    }
    
    // Render all sections
    renderProfileHeader();
    renderStats();
    initMap();
    renderInfoTree();
    renderTributariesDistributaries();
    renderCourse();
    renderCities();
    setupFlyover();
    
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 800);
}

function renderProfileHeader() {
    // Set background
    const bg = document.getElementById('profileBg');
    if (bg && currentRiver.image) {
        bg.style.backgroundImage = `url(${currentRiver.image})`;
    }
    
    // Set title
    const nameEl = document.getElementById('riverName');
    if (nameEl) {
        nameEl.innerHTML = `
            <i class="fas fa-water"></i>
            <span>${currentRiver.name}</span>
        `;
    }
    
    // Set meta info
    const metaEl = document.getElementById('riverMeta');
    if (metaEl) {
        const countries = currentRiver.countries ? currentRiver.countries.join(', ') : currentRiver.country || 'Unknown';
        metaEl.innerHTML = `
            <span class="meta-item">
                <i class="fas fa-globe-americas"></i> ${countries}
            </span>
            <span class="meta-item">
                <i class="fas fa-ruler-horizontal"></i> ${currentRiver.length.toLocaleString()} km
            </span>
            <span class="meta-item">
                <i class="fas fa-map"></i> ${currentRiver.continent || 'Unknown'}
            </span>
        `;
    }
    
    // Update page title
    document.title = `${currentRiver.name} - River Profile`;
}

function renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;
    
    const stats = [
        {
            icon: 'fa-ruler-horizontal',
            value: `${currentRiver.length.toLocaleString()}`,
            label: 'Length (km)'
        },
        {
            icon: 'fa-water',
            value: formatNumber(currentRiver.discharge || 0),
            label: 'Discharge (m³/s)'
        },
        {
            icon: 'fa-map',
            value: formatNumber(currentRiver.drainageArea || 0),
            label: 'Basin Area (km²)'
        },
        {
            icon: 'fa-mountain',
            value: `${currentRiver.source?.elevation || 0}`,
            label: 'Source Elevation (m)'
        },
        {
            icon: 'fa-code-branch',
            value: currentRiver.tributaries ? currentRiver.tributaries.length : 0,
            label: 'Tributaries'
        },
        {
            icon: 'fa-city',
            value: currentRiver.majorCities ? currentRiver.majorCities.length : 0,
            label: 'Major Cities'
        }
    ];
    
    grid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <i class="fas ${stat.icon}"></i>
            <span class="value">${stat.value}</span>
            <span class="label">${stat.label}</span>
        </div>
    `).join('');
}

function initMap() {
    const mapContainer = document.getElementById('riverMap');
    if (!mapContainer) return;
    
    // Default coordinates
    const defaultLat = currentRiver.source?.coordinates?.[0] || 0;
    const defaultLng = currentRiver.source?.coordinates?.[1] || 0;
    
    mainMap = L.map('riverMap').setView([defaultLat, defaultLng], 5);
    
    // Tile layers
    const layers = {
        terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap'
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri'
        }),
        topo: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        })
    };
    
    layers.terrain.addTo(mainMap);
    
    // Map layer controls
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const layer = btn.dataset.layer;
            Object.values(layers).forEach(l => mainMap.removeLayer(l));
            layers[layer].addTo(mainMap);
        });
    });
    
    // Add river course
    addRiverCourse();
    
    // Add markers
    addMapMarkers();
}

function addRiverCourse() {
    if (!currentRiver.course || currentRiver.course.length === 0) return;
    
    const courseCoords = currentRiver.course.map(c => [c.coordinates[0], c.coordinates[1]]);
    
    // Glow effect
    L.polyline(courseCoords, {
        color: '#0ea5e9',
        weight: 10,
        opacity: 0.3
    }).addTo(mainMap);
    
    // Main river line
    const riverLine = L.polyline(courseCoords, {
        color: '#0ea5e9',
        weight: 4,
        opacity: 0.9
    }).addTo(mainMap);
    
    // Fit bounds
    mainMap.fitBounds(riverLine.getBounds(), { padding: [50, 50] });
    
    // Add tributaries to map
    if (currentRiver.tributaries) {
        currentRiver.tributaries.forEach(trib => {
            if (trib.confluence) {
                // Draw tributary line (dashed)
                if (trib.sourceCoords && trib.confluence) {
                    L.polyline([
                        [trib.sourceCoords[0], trib.sourceCoords[1]],
                        [trib.confluence[0], trib.confluence[1]]
                    ], {
                        color: '#3b82f6',
                        weight: 2,
                        opacity: 0.7,
                        dashArray: '5, 10'
                    }).addTo(mainMap);
                }
                
                // Add confluence marker
                const marker = L.circleMarker([trib.confluence[0], trib.confluence[1]], {
                    radius: 6,
                    fillColor: '#3b82f6',
                    color: '#fff',
                    weight: 2,
                    fillOpacity: 0.8
                }).addTo(mainMap);
                
                marker.bindPopup(`
                    <div class="custom-popup">
                        <h4><i class="fas fa-code-branch"></i> ${trib.name}</h4>
                        <p><strong>Bank:</strong> ${trib.bank || 'Unknown'}</p>
                        <p><strong>Length:</strong> ${trib.length || 'Unknown'} km</p>
                    </div>
                `);
            }
        });
    }
}

function addMapMarkers() {
    // Source marker
    if (currentRiver.source?.coordinates) {
        const sourceIcon = L.divIcon({
            className: 'custom-marker source-marker',
            html: '<i class="fas fa-play-circle" style="color:white;font-size:16px;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        L.marker(currentRiver.source.coordinates, { icon: sourceIcon })
            .addTo(mainMap)
            .bindPopup(`
                <div class="custom-popup">
                    <h4><i class="fas fa-play-circle"></i> Source</h4>
                    <p><strong>${currentRiver.source.name || 'River Source'}</strong></p>
                    <p>Elevation: ${currentRiver.source.elevation || 'Unknown'} m</p>
                </div>
            `);
    }
    
    // Mouth marker
    if (currentRiver.mouth?.coordinates) {
        const mouthIcon = L.divIcon({
            className: 'custom-marker mouth-marker',
            html: '<i class="fas fa-stop-circle" style="color:white;font-size:16px;"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        L.marker(currentRiver.mouth.coordinates, { icon: mouthIcon })
            .addTo(mainMap)
            .bindPopup(`
                <div class="custom-popup">
                    <h4><i class="fas fa-stop-circle"></i> Mouth</h4>
                    <p><strong>${currentRiver.mouth.name || 'River Mouth'}</strong></p>
                    <p>Flows into: ${currentRiver.mouth.flowsInto || 'Unknown'}</p>
                </div>
            `);
    }
    
    // City markers
    if (currentRiver.majorCities) {
        currentRiver.majorCities.forEach(city => {
            if (city.coordinates) {
                const cityIcon = L.divIcon({
                    className: 'custom-marker city-marker',
                    html: '<i class="fas fa-city" style="color:white;font-size:12px;"></i>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });
                
                L.marker(city.coordinates, { icon: cityIcon })
                    .addTo(mainMap)
                    .bindPopup(`
                        <div class="custom-popup">
                            <h4><i class="fas fa-city"></i> ${city.name}</h4>
                            <p>${city.country || ''}</p>
                        </div>
                    `);
            }
        });
    }
    
    // Dam markers
    if (currentRiver.dams) {
        currentRiver.dams.forEach(dam => {
            if (dam.coordinates) {
                const damIcon = L.divIcon({
                    className: 'custom-marker dam-marker',
                    html: '<i class="fas fa-database" style="color:white;font-size:12px;"></i>',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12]
                });
                
                L.marker(dam.coordinates, { icon: damIcon })
                    .addTo(mainMap)
                    .bindPopup(`
                        <div class="custom-popup">
                            <h4><i class="fas fa-database"></i> ${dam.name}</h4>
                            <p>${dam.purpose || 'Dam'}</p>
                        </div>
                    `);
            }
        });
    }
}

function renderInfoTree() {
    const treeContainer = document.getElementById('infoTree');
    if (!treeContainer) return;
    
    const branches = [
        {
            icon: 'fa-info-circle',
            title: 'Basic Information',
            items: [
                { label: 'Name', value: currentRiver.name },
                { label: 'Local Names', value: currentRiver.localNames?.join(', ') || 'N/A' },
                { label: 'Length', value: `${currentRiver.length.toLocaleString()} km` },
                { label: 'Continent', value: currentRiver.continent || 'N/A' },
                { label: 'Countries', value: currentRiver.countries?.join(', ') || currentRiver.country || 'N/A' }
            ]
        },
        {
            icon: 'fa-tint',
            title: 'Hydrology',
            items: [
                { label: 'Discharge', value: `${formatNumber(currentRiver.discharge || 0)} m³/s` },
                { label: 'Basin Area', value: `${formatNumber(currentRiver.drainageArea || 0)} km²` },
                { label: 'Average Depth', value: currentRiver.avgDepth ? `${currentRiver.avgDepth} m` : 'N/A' },
                { label: 'Average Width', value: currentRiver.avgWidth ? `${currentRiver.avgWidth} m` : 'N/A' }
            ]
        },
        {
            icon: 'fa-play-circle',
            title: 'Source',
            items: [
                { label: 'Location', value: currentRiver.source?.name || 'N/A' },
                { label: 'Elevation', value: currentRiver.source?.elevation ? `${currentRiver.source.elevation} m` : 'N/A' },
                { label: 'Country', value: currentRiver.source?.country || 'N/A' },
                { label: 'Coordinates', value: currentRiver.source?.coordinates ? `${currentRiver.source.coordinates[0].toFixed(4)}°, ${currentRiver.source.coordinates[1].toFixed(4)}°` : 'N/A' }
            ]
        },
        {
            icon: 'fa-stop-circle',
            title: 'Mouth',
            items: [
                { label: 'Location', value: currentRiver.mouth?.name || 'N/A' },
                { label: 'Flows Into', value: currentRiver.mouth?.flowsInto || 'N/A' },
                { label: 'Country', value: currentRiver.mouth?.country || 'N/A' },
                { label: 'Type', value: currentRiver.mouth?.type || 'N/A' }
            ]
        },
        {
            icon: 'fa-history',
            title: 'Historical Significance',
            items: [
                { label: 'Ancient Name', value: currentRiver.ancientName || 'N/A' },
                { label: 'Historical Importance', value: currentRiver.historicalImportance || 'N/A' },
                { label: 'UNESCO Status', value: currentRiver.unescoStatus || 'N/A' }
            ]
        },
        {
            icon: 'fa-leaf',
            title: 'Ecology',
            items: [
                { label: 'Fish Species', value: currentRiver.fishSpecies || 'N/A' },
                { label: 'Endangered Species', value: currentRiver.endangeredSpecies || 'N/A' },
                { label: 'Ecosystem Type', value: currentRiver.ecosystem || 'N/A' }
            ]
        }
    ];
    
    treeContainer.innerHTML = branches.map((branch, index) => `
        <div class="tree-branch">
            <div class="branch-header ${index === 0 ? 'open' : ''}" onclick="toggleBranch(this)">
                <div class="branch-icon">
                    <i class="fas ${branch.icon}"></i>
                </div>
                <span class="branch-title">${branch.title}</span>
                <i class="fas fa-chevron-down branch-toggle"></i>
            </div>
            <div class="branch-content ${index === 0 ? 'open' : ''}">
                ${branch.items.map(item => `
                    <div class="branch-item">
                        <span class="item-label">${item.label}:</span>
                        <span class="item-value">${item.value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function toggleBranch(header) {
    header.classList.toggle('open');
    const content = header.nextElementSibling;
    content.classList.toggle('open');
}

function renderTributariesDistributaries() {
    const container = document.getElementById('tributariesSection');
    if (!container) return;
    
    const tributaries = currentRiver.tributaries || [];
    const distributaries = currentRiver.distributaries || [];
    
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-code-branch"></i>
            Tributaries & Distributaries
        </h3>
        <div class="flow-container">
            <!-- Tributaries (Left - Arrows IN) -->
            <div class="tributaries-list">
                <h4 style="color: var(--text-secondary); margin-bottom: var(--space-md); text-align: center;">
                    <i class="fas fa-arrow-right" style="color: #3b82f6;"></i> Tributaries (Flow In)
                </h4>
                ${tributaries.length > 0 ? tributaries.map(trib => `
                    <div class="tributary-item">
                        <span class="arrow">→</span>
                        <div class="tributary-info">
                            <div class="tributary-name">${trib.name}</div>
                            <div class="tributary-details">
                                <span>${trib.length ? trib.length + ' km' : ''}</span>
                                ${trib.bank ? `<span class="tributary-bank ${trib.bank.toLowerCase()}">${trib.bank} Bank</span>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('') : '<p style="color: var(--text-muted); text-align: center;">No major tributaries</p>'}
            </div>
            
            <!-- Main River (Center) -->
            <div class="main-river-flow">
                <span class="main-river-name">${currentRiver.name}</span>
                <span class="flow-arrow">↓</span>
            </div>
            
            <!-- Distributaries (Right - Arrows OUT) -->
            <div class="distributaries-list">
                <h4 style="color: var(--text-secondary); margin-bottom: var(--space-md); text-align: center;">
                    Distributaries (Flow Out) <i class="fas fa-arrow-right" style="color: #ef4444;"></i>
                </h4>
                ${distributaries.length > 0 ? distributaries.map(dist => `
                    <div class="distributary-item">
                        <div class="distributary-info">
                            <div class="distributary-name">${dist.name}</div>
                            <div class="distributary-details">
                                ${dist.length ? dist.length + ' km' : ''} ${dist.flowsInto ? '→ ' + dist.flowsInto : ''}
                            </div>
                        </div>
                        <span class="arrow">→</span>
                    </div>
                `).join('') : '<p style="color: var(--text-muted); text-align: center;">No distributaries (single channel)</p>'}
            </div>
        </div>
    `;
}

function renderCourse() {
    const container = document.getElementById('courseSection');
    if (!container || !currentRiver.course) return;
    
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-route"></i>
            River Course
        </h3>
        <div class="course-timeline">
            ${currentRiver.course.map((point, index) => {
                const isSource = index === 0;
                const isMouth = index === currentRiver.course.length - 1;
                const itemClass = isSource ? 'source' : (isMouth ? 'mouth' : '');
                
                return `
                    <div class="course-item ${itemClass}">
                        <div class="course-header">
                            <span class="course-name">
                                <i class="fas ${isSource ? 'fa-play-circle' : (isMouth ? 'fa-stop-circle' : 'fa-circle')}"></i>
                                ${point.name}
                            </span>
                            <span class="course-distance">${point.distanceFromSource || 0} km</span>
                        </div>
                        <p class="course-description">${point.description || ''}</p>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderCities() {
    const container = document.getElementById('citiesSection');
    if (!container || !currentRiver.majorCities) return;
    
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-city"></i>
            Major Cities Along the River
        </h3>
        <div class="cities-grid">
            ${currentRiver.majorCities.map(city => `
                <div class="city-card">
                    <div class="city-icon">🏙️</div>
                    <div class="city-name">${city.name}</div>
                    <div class="city-country">${city.country || ''}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ─────────────────────────────────────────────────────────────────
// FLYOVER FUNCTIONALITY
// ─────────────────────────────────────────────────────────────────
function setupFlyover() {
    const flyoverBtn = document.getElementById('flyoverBtn');
    const flyoverModal = document.getElementById('flyoverModal');
    const closeFlyover = document.getElementById('closeFlyover');
    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');
    
    if (!flyoverBtn) return;
    
    flyoverBtn.addEventListener('click', startFlyover);
    
    if (closeFlyover) {
        closeFlyover.addEventListener('click', () => {
            flyoverModal.classList.remove('active');
            stopFlyover();
        });
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', togglePause);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartFlyover);
    }
}

function startFlyover() {
    const modal = document.getElementById('flyoverModal');
    if (!modal) return;
    
    modal.classList.add('active');
    
    // Set title
    const title = document.getElementById('flyoverTitle');
    if (title) title.textContent = `Flying Along ${currentRiver.name}`;
    
    // Initialize flyover map
    setTimeout(() => {
        initFlyoverMap();
    }, 100);
}

function initFlyoverMap() {
    const mapContainer = document.getElementById('flyoverMap');
    if (!mapContainer) return;
    
    // Clear existing map
    if (flyoverMap) {
        flyoverMap.remove();
    }
    
    const course = currentRiver.course || [];
    if (course.length === 0) {
        mapContainer.innerHTML = '<div class="no-data"><p>No course data available for flyover</p></div>';
        return;
    }
    
    // Initialize map
    flyoverMap = L.map('flyoverMap', {
        zoomControl: false
    }).setView(course[0].coordinates, 10);
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri'
    }).addTo(flyoverMap);
    
    // Draw river course
    const courseCoords = course.map(c => c.coordinates);
    L.polyline(courseCoords, {
        color: '#0ea5e9',
        weight: 4,
        opacity: 0.9
    }).addTo(flyoverMap);
    
    // Add markers for each point
    course.forEach((point, index) => {
        L.circleMarker(point.coordinates, {
            radius: 8,
            fillColor: index === 0 ? '#22c55e' : (index === course.length - 1 ? '#ef4444' : '#0ea5e9'),
            color: '#fff',
            weight: 2,
            fillOpacity: 0.9
        }).addTo(flyoverMap).bindPopup(point.name);
    });
    
    // Create progress dots
    renderFlyoverProgress(course);
    
    // Start animation
    currentFlyoverIndex = 0;
    isPaused = false;
    animateFlyover(course);
}

function renderFlyoverProgress(course) {
    const container = document.getElementById('flyoverProgress');
    if (!container) return;
    
    container.innerHTML = course.map((point, index) => `
        <div class="progress-dot ${index === 0 ? 'active' : ''}" 
             data-index="${index}" 
             title="${point.name}"
             onclick="jumpToPoint(${index})">
        </div>
    `).join('');
}

function animateFlyover(course) {
    if (currentFlyoverIndex >= course.length) {
        // Loop back to start
        currentFlyoverIndex = 0;
    }
    
    const point = course[currentFlyoverIndex];
    
    // Update map view
    flyoverMap.flyTo(point.coordinates, 11, {
        duration: 2
    });
    
    // Update current location display
    const currentName = document.getElementById('currentPeak');
    const currentDetails = document.getElementById('currentElev');
    
    if (currentName) currentName.textContent = point.name;
    if (currentDetails) currentDetails.textContent = point.description || '';
    
    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index < currentFlyoverIndex) dot.classList.add('visited');
        if (index === currentFlyoverIndex) dot.classList.add('active');
    });
    
    // Schedule next point
    if (!isPaused) {
        flyoverInterval = setTimeout(() => {
            currentFlyoverIndex++;
            animateFlyover(course);
        }, 3000);
    }
}

function togglePause() {
    const pauseBtn = document.getElementById('pauseBtn');
    isPaused = !isPaused;
    
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    }
    
    if (!isPaused && currentRiver.course) {
        animateFlyover(currentRiver.course);
    }
}

function restartFlyover() {
    stopFlyover();
    currentFlyoverIndex = 0;
    isPaused = false;
    
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    if (currentRiver.course) {
        animateFlyover(currentRiver.course);
    }
}

function jumpToPoint(index) {
    clearTimeout(flyoverInterval);
    currentFlyoverIndex = index;
    
    if (currentRiver.course) {
        animateFlyover(currentRiver.course);
    }
}

function stopFlyover() {
    clearTimeout(flyoverInterval);
    isPaused = false;
}

// ─────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────
function formatNumber(num) {
    if (!num) return '0';
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
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

function showError(message) {
    const container = document.querySelector('.profile-container') || document.body;
    container.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Error</h3>
            <p>${message}</p>
            <a href="rivers.html" class="card-btn primary" style="display: inline-flex; margin-top: 1rem;">
                <i class="fas fa-arrow-left"></i> Back to Rivers
            </a>
        </div>
    `;
    
    // Hide loader
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
}

function createWaterParticles() {
    const container = document.querySelector('.water-particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'water-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
}

// ─────────────────────────────────────────────────────────────────
// EXPORT FOR GLOBAL ACCESS
// ─────────────────────────────────────────────────────────────────
window.viewRiver = viewRiver;
window.quickView = quickView;
window.toggleBranch = toggleBranch;
window.jumpToPoint = jumpToPoint;
