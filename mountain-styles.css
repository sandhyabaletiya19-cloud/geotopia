// =====================================================
// MOUNTAIN SYSTEMS EXPLORER - APPLICATION LOGIC
// =====================================================

// State
let currentMountain = null;
let map = null;
let flyMap = null;
let flyoverInterval = null;
let flyoverIndex = 0;
let isPaused = false;

// Utility
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const getById = (id) => document.getElementById(id);

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we're on
    const isProfilePage = document.body.classList.contains('profile-page');
    
    if (isProfilePage) {
        initProfilePage();
    } else {
        initMainPage();
    }
});

// ==================== MAIN PAGE (mountain.html) ====================

function initMainPage() {
    // Hide loader after delay
    setTimeout(() => {
        const loader = getById('loader');
        if (loader) loader.classList.add('hidden');
    }, 2000);

    // Render all cards
    renderCards(mountainData);

    // Setup filters
    setupFilters();

    // Setup search
    setupSearch();
}

function renderCards(data) {
    const grid = getById('cardsGrid');
    if (!grid) return;

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-mountain"></i>
                <h3>No mountains found</h3>
                <p>Try a different search or filter</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = data.map((mountain, index) => `
        <a href="mountain-profile.html?id=${mountain.id}" class="mountain-card" style="animation-delay: ${index * 0.05}s">
            <div class="card-image-wrapper">
                <span class="card-rank">${index + 1}</span>
                <div class="card-image">
                    <img src="${mountain.image}" alt="${mountain.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800'">
                    <span class="elevation-badge">${mountain.elevation.toLocaleString()}m</span>
                </div>
            </div>
            <div class="card-info">
                <div class="card-name">${mountain.name}</div>
                <div class="card-peak">${mountain.highestPeak}</div>
                <div class="card-flags">${mountain.flags.join('')}</div>
            </div>
        </a>
    `).join('');
}

function setupFilters() {
    const filterBtns = getById('filterButtons');
    if (!filterBtns) return;

    filterBtns.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        // Update active state
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter data
        const filter = btn.dataset.filter;
        const filtered = filter === 'all' 
            ? mountainData 
            : mountainData.filter(m => m.continent === filter);

        renderCards(filtered);
    });
}

function setupSearch() {
    const searchInput = getById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            renderCards(mountainData);
            return;
        }

        const filtered = mountainData.filter(m => 
            m.name.toLowerCase().includes(query) ||
            m.highestPeak.toLowerCase().includes(query) ||
            m.countries.some(c => c.toLowerCase().includes(query)) ||
            m.continent.toLowerCase().includes(query)
        );

        renderCards(filtered);
    });
}

// ==================== PROFILE PAGE (mountain-profile.html) ====================

function initProfilePage() {
    // Get mountain ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const mountainId = parseInt(urlParams.get('id'));

    if (!mountainId) {
        window.location.href = 'mountain.html';
        return;
    }

    // Find mountain
    currentMountain = mountainData.find(m => m.id === mountainId);

    if (!currentMountain) {
        window.location.href = 'mountain.html';
        return;
    }

    // Update page title
    document.title = `${currentMountain.name} - Mountain Explorer`;

    // Render profile
    renderProfile();

    // Hide loader
    setTimeout(() => {
        const loader = getById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1500);

    // Initialize map
    setTimeout(initMap, 500);

    // Setup event listeners
    setupProfileEvents();
}

function renderProfile() {
    const m = currentMountain;

    // Background
    const bg = getById('profileBg');
    if (bg) bg.style.backgroundImage = `url(${m.background})`;

    // Title
    const titleEl = getById('mountainName');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-mountain"></i><span>${m.name}</span>`;
    }

    // Meta
    const metaEl = getById('mountainMeta');
    if (metaEl) {
        metaEl.innerHTML = `
            <span><i class="fas fa-globe"></i> ${m.continent.toUpperCase()}</span>
            <span><i class="fas fa-flag"></i> ${m.countries.length} Countries</span>
            <span>${m.flags.join(' ')}</span>
        `;
    }

    // Stats
    renderStats();

    // Info Tree
    renderInfoTree();

    // Peaks Grid
    renderPeaks();
}

function renderStats() {
    const m = currentMountain;
    const statsGrid = getById('statsGrid');
    if (!statsGrid) return;

    const stats = [
        { icon: '⛰️', value: `${m.elevation.toLocaleString()}m`, label: 'Highest Peak' },
        { icon: '📏', value: m.length, label: 'Total Length' },
        { icon: '📊', value: m.avgElevation, label: 'Avg Elevation' },
        { icon: '🏔️', value: m.peaks.length, label: 'Major Peaks' },
        { icon: '🌍', value: m.countries.length, label: 'Countries' },
        { icon: '❄️', value: m.glaciers.length, label: 'Glaciers' }
    ];

    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-card-icon">${stat.icon}</div>
            <div class="stat-card-value">${stat.value}</div>
            <div class="stat-card-label">${stat.label}</div>
        </div>
    `).join('');
}

function renderInfoTree() {
    const m = currentMountain;
    const tree = getById('infoTree');
    if (!tree) return;

    const branches = [
        {
            icon: '📍', title: 'Location',
            items: [
                `Continent: <span class="highlight">${m.continent.toUpperCase()}</span>`,
                `Countries: ${m.countries.join(', ')}`,
                `Coordinates: ${m.coords.lat.toFixed(2)}°, ${m.coords.lng.toFixed(2)}°`
            ]
        },
        {
            icon: '⛰️', title: 'Highest Peak',
            items: [
                `Name: <span class="highlight">${m.highestPeak}</span>`,
                `Elevation: <span class="highlight">${m.elevation.toLocaleString()}m</span>`
            ]
        },
        {
            icon: '🏔️', title: 'Major Peaks',
            items: m.peaks.slice(0, 8).map(p => `${p.name}: <span class="highlight">${p.elevation.toLocaleString()}m</span>`)
        },
        {
            icon: '🌋', title: 'Formation',
            items: [
                `Origin: ${m.formation.origin}`,
                `Age: <span class="highlight">${m.formation.age}</span>`,
                `Plates: ${m.formation.plates}`
            ]
        },
        {
            icon: '❄️', title: 'Glaciers',
            items: m.glaciers.map(g => g.name)
        },
        {
            icon: '🛤️', title: 'Mountain Passes',
            items: m.passes.map(p => `${p.name}: <span class="highlight">${p.elevation.toLocaleString()}m</span>`)
        },
        {
            icon: '💧', title: 'Rivers',
            items: m.rivers
        },
        {
            icon: '🐾', title: 'Wildlife',
            items: m.wildlife
        },
        {
            icon: '🌿', title: 'Vegetation',
            items: m.vegetation
        },
        {
            icon: '🌡️', title: 'Climate Zones',
            items: m.climate
        },
        {
            icon: '💰', title: 'Economy',
            items: Object.entries(m.economy).map(([key, val]) => `<span class="highlight">${key.charAt(0).toUpperCase() + key.slice(1)}:</span> ${val}`)
        },
        {
            icon: '⚠️', title: 'Environmental Issues',
            items: m.environment
        },
        {
            icon: '📜', title: 'History & Culture',
            items: Object.entries(m.history).map(([key, val]) => `<span class="highlight">${key.charAt(0).toUpperCase() + key.slice(1)}:</span> ${val}`)
        }
    ];

    tree.innerHTML = branches.map((branch, i) => `
        <div class="tree-branch">
            <div class="branch-header" onclick="toggleBranch(${i})">
                <div class="branch-icon">${branch.icon}</div>
                <div class="branch-title">${branch.title}</div>
                <i class="fas fa-chevron-down branch-arrow"></i>
            </div>
            <div class="branch-content" id="branch-content-${i}">
                <ul>
                    ${branch.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function toggleBranch(index) {
    const header = $$('.branch-header')[index];
    const content = getById(`branch-content-${index}`);
    
    if (header && content) {
        header.classList.toggle('active');
        content.classList.toggle('active');
    }
}

function renderPeaks() {
    const m = currentMountain;
    const peaksGrid = getById('peaksGrid');
    if (!peaksGrid) return;

    peaksGrid.innerHTML = m.peaks.slice(0, 12).map((peak, i) => `
        <div class="peak-card" style="animation-delay: ${i * 0.1}s">
            <div class="peak-icon">⛰️</div>
            <div class="peak-name">${peak.name}</div>
            <div class="peak-elevation">${peak.elevation.toLocaleString()}m</div>
        </div>
    `).join('');
}

// ==================== MAP ====================

function initMap() {
    const m = currentMountain;
    const mapEl = getById('mountainMap');
    if (!mapEl || !m) return;

    // Clear existing map
    if (map) {
        map.remove();
        map = null;
    }

    // Create map
    map = L.map('mountainMap').setView([m.coords.lat, m.coords.lng], m.coords.zoom);

    // Add terrain layer
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '© OpenTopoMap'
    }).addTo(map);

    // Add markers
    addMapMarkers();

    // Setup layer controls
    setupMapControls();
}

function addMapMarkers() {
    const m = currentMountain;

    // Peaks
    m.peaks.forEach(peak => {
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin peak">⛰️</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker([peak.lat, peak.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div class="popup-title">${peak.name}</div>
                <div class="popup-subtitle">${peak.elevation.toLocaleString()}m</div>
                <div class="popup-type">Peak</div>
            `);
    });

    // Glaciers
    m.glaciers.forEach(glacier => {
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin glacier">❄️</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        L.marker([glacier.lat, glacier.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div class="popup-title">${glacier.name}</div>
                <div class="popup-type">Glacier</div>
            `);
    });

    // Passes
    m.passes.forEach(pass => {
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin pass">🛤️</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        L.marker([pass.lat, pass.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div class="popup-title">${pass.name}</div>
                <div class="popup-subtitle">${pass.elevation.toLocaleString()}m</div>
                <div class="popup-type">Mountain Pass</div>
            `);
    });

    // Cities
    m.cities.forEach(city => {
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin city">🏙️</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        L.marker([city.lat, city.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div class="popup-title">${city.name}</div>
                <div class="popup-type">City</div>
            `);
    });
}

function setupMapControls() {
    const mapBtns = $$('.map-btn');
    
    mapBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mapBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            updateMapLayer(btn.dataset.layer);
        });
    });
}

function updateMapLayer(layerType) {
    if (!map) return;

    // Remove existing tile layers
    map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    // Add new layer
    const layers = {
        terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        topo: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };

    L.tileLayer(layers[layerType] || layers.terrain, {
        maxZoom: 17,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// ==================== FLYOVER ====================

function setupProfileEvents() {
    // Flyover button
    const flyBtn = getById('flyoverBtn');
    if (flyBtn) {
        flyBtn.addEventListener('click', startFlyover);
    }

    // Close flyover
    const closeBtn = getById('closeFlyover');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeFlyover);
    }

    // Pause button
    const pauseBtn = getById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.addEventListener('click', togglePause);
    }

    // Restart button
    const restartBtn = getById('restartBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartFlyover);
    }
}

function startFlyover() {
    const m = currentMountain;
    if (!m || m.peaks.length < 2) {
        alert('Not enough peaks for flyover');
        return;
    }

    // Update title
    const titleEl = getById('flyoverTitle');
    if (titleEl) titleEl.textContent = `Flying Over ${m.name}`;

    // Render progress markers
    renderFlyoverProgress();

    // Show modal
    const modal = getById('flyoverModal');
    if (modal) modal.classList.add('active');

    // Initialize flyover map
    setTimeout(() => {
        initFlyoverMap();
        startFlyoverAnimation();
    }, 300);
}

function renderFlyoverProgress() {
    const m = currentMountain;
    const progressEl = getById('flyoverProgress');
    if (!progressEl) return;

    const peaksToShow = m.peaks.slice(0, 8);

    progressEl.innerHTML = peaksToShow.map((peak, i) => `
        <div class="progress-marker" id="progress-${i}">
            <div class="marker-icon">⛰️</div>
            <div class="marker-name">${peak.name}</div>
            <div class="marker-elev">${peak.elevation.toLocaleString()}m</div>
        </div>
    `).join('');
}

function initFlyoverMap() {
    const m = currentMountain;
    const mapEl = getById('flyoverMap');
    if (!mapEl || !m) return;

    // Clear existing
    if (flyMap) {
        flyMap.remove();
        flyMap = null;
    }

    // Create map
    flyMap = L.map('flyoverMap').setView([m.peaks[0].lat, m.peaks[0].lng], m.coords.zoom + 1);

    // Add satellite layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 17
    }).addTo(flyMap);

    // Add peak markers
    m.peaks.slice(0, 8).forEach(peak => {
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin peak">⛰️</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker([peak.lat, peak.lng], { icon }).addTo(flyMap);
    });
}

function startFlyoverAnimation() {
    flyoverIndex = 0;
    isPaused = false;
    updateFlyoverDisplay();

    // Clear existing interval
    if (flyoverInterval) clearInterval(flyoverInterval);

    // Start animation
    flyoverInterval = setInterval(() => {
        if (!isPaused) {
            flyoverIndex++;
            const peaks = currentMountain.peaks.slice(0, 8);

            if (flyoverIndex >= peaks.length) {
                flyoverIndex = 0;
            }

            updateFlyoverDisplay();
        }
    }, 3500);
}

function updateFlyoverDisplay() {
    const peaks = currentMountain.peaks.slice(0, 8);
    const currentPeak = peaks[flyoverIndex];

    // Update info
    const peakNameEl = getById('currentPeak');
    const peakElevEl = getById('currentElev');

    if (peakNameEl) peakNameEl.textContent = currentPeak.name;
    if (peakElevEl) peakElevEl.textContent = `${currentPeak.elevation.toLocaleString()}m`;

    // Update progress markers
    $$('.progress-marker').forEach((marker, i) => {
        marker.classList.remove('current', 'visited');
        if (i < flyoverIndex) marker.classList.add('visited');
        if (i === flyoverIndex) marker.classList.add('current');
    });

    // Pan map
    if (flyMap) {
        flyMap.flyTo([currentPeak.lat, currentPeak.lng], flyMap.getZoom(), {
            duration: 2.5,
            easeLinearity: 0.25
        });
    }
}

function togglePause() {
    isPaused = !isPaused;
    const pauseBtn = getById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    }
}

function restartFlyover() {
    flyoverIndex = 0;
    isPaused = false;
    const pauseBtn = getById('pauseBtn');
    if (pauseBtn) pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    updateFlyoverDisplay();
}

function closeFlyover() {
    // Hide modal
    const modal = getById('flyoverModal');
    if (modal) modal.classList.remove('active');

    // Stop animation
    if (flyoverInterval) {
        clearInterval(flyoverInterval);
        flyoverInterval = null;
    }

    // Remove map
    if (flyMap) {
        flyMap.remove();
        flyMap = null;
    }

    // Reset state
    flyoverIndex = 0;
    isPaused = false;
}

// Make toggleBranch globally available
window.toggleBranch = toggleBranch;
