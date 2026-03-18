/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - MAIN APPLICATION
   Complete JavaScript functionality
   Part 1 of 3
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════

const OceansApp = {
    currentOcean: null,
    map: null,
    markers: [],
    polylines: [],
    currentLayers: {},
    diveState: {
        isActive: false,
        currentDepth: 0,
        autoMode: false,
        interval: null
    },
    currentJourney: {
        isActive: false,
        currentStep: 0,
        isPaused: false,
        interval: null
    },
    factIndex: 0,
    sortOrder: 'area'
};

// Depth zone configuration
const DEPTH_ZONES = [
    {
        name: 'Sunlight Zone (Epipelagic)',
        depth: 200,
        color: '#48CAE4',
        description: 'The uppermost layer where light penetrates, supporting most marine life including coral reefs.',
        creatures: ['🐬 Dolphins', '🐠 Coral Fish', '🐢 Sea Turtles', '🦈 Sharks'],
        temp: '20-25°C',
        light: '100%'
    },
    {
        name: 'Twilight Zone (Mesopelagic)',
        depth: 1000,
        color: '#064663',
        description: 'Light fading zone where bioluminescent creatures thrive. Pressure increases significantly.',
        creatures: ['🦑 Squid', '🪼 Jellyfish', '🐟 Lanternfish'],
        temp: '4-15°C',
        light: '1%'
    },
    {
        name: 'Midnight Zone (Bathypelagic)',
        depth: 4000,
        color: '#041C32',
        description: 'Complete darkness, enormous pressure. Only specialized creatures survive here.',
        creatures: ['🐙 Giant Squid', '🐡 Anglerfish', '🦐 Giant Isopod'],
        temp: '2-4°C',
        light: '0%'
    },
    {
        name: 'Abyssal Zone (Abyssopelagic)',
        depth: 6000,
        color: '#020B16',
        description: 'Near freezing temperatures and extreme pressure. Sparse but unique life forms.',
        creatures: ['🪱 Tube Worms', '🥒 Sea Cucumbers', '🦀 Deep Sea Crabs'],
        temp: '1-2°C',
        light: '0%'
    },
    {
        name: 'Hadal Zone (Hadalpelagic)',
        depth: 11000,
        color: '#010810',
        description: 'The deepest trenches on Earth. Only the most extreme organisms survive.',
        creatures: ['🐟 Snailfish', '🦐 Amphipods', '🦠 Bacteria'],
        temp: '1-4°C',
        light: '0%'
    }
];

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getOceanIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'pacific-ocean';
}

function getOceanColor(oceanId) {
    const colors = {
        'pacific-ocean': '#0077B6',
        'atlantic-ocean': '#00B4D8',
        'indian-ocean': '#48CAE4',
        'southern-ocean': '#90E0EF',
        'arctic-ocean': '#CAF0F8'
    };
    return colors[oceanId] || '#0077B6';
}

function getRankLabel(rank) {
    const labels = ['Largest', '2nd', '3rd', '4th', '5th'];
    return labels[rank - 1] || '';
}

function calculatePressure(depth) {
    // Approximately 1 atm per 10 meters
    return Math.round(1 + (depth / 10));
}

function calculateTemperature(depth) {
    // Temperature decreases with depth
    if (depth <= 200) return Math.round(25 - (depth / 20));
    if (depth <= 1000) return Math.round(15 - ((depth - 200) / 100));
    if (depth <= 4000) return Math.round(4 - ((depth - 1000) / 1500));
    return Math.max(1, Math.round(2 - ((depth - 4000) / 5000)));
}

function calculateLight(depth) {
    if (depth <= 200) return Math.max(0, Math.round(100 - (depth / 2)));
    return 0;
}

function getZoneForDepth(depth) {
    for (let i = 0; i < DEPTH_ZONES.length; i++) {
        if (depth <= DEPTH_ZONES[i].depth) {
            return DEPTH_ZONES[i];
        }
    }
    return DEPTH_ZONES[DEPTH_ZONES.length - 1];
}

// ═══════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const isMainPage = document.getElementById('oceansGrid');
    const isProfilePage = document.getElementById('oceanMap');
    
    if (isMainPage) {
        initMainPage();
    }
    
    // Profile page initialization is called from HTML after loading
});

function initMainPage() {
    renderOceanCards();
    renderSeaCards();
    setupFilterHandlers();
    setupCompareToggle();
    setupFactsTicker();
    animateOnScroll();
}

function initProfilePage() {
    const oceanId = getOceanIdFromURL();
    const ocean = oceansData.find(o => o.id === oceanId) || oceansData[0];
    
    OceansApp.currentOcean = ocean;
    
    updateProfileHeader(ocean);
    updateProfileBackground(ocean);
    initializeMap(ocean);
    populateMindMap(ocean);
    setupFactsCarousel(ocean);
    setupQuickFacts(ocean);
    setupOceanNavigation(ocean);
    setupActionButtons();
    setupModeToggles();
    setupMapLayers();
    setupTreeNodes();
    setupDiveFeature(ocean);
    setupCurrentsJourney(ocean);
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE - OCEAN CARDS
// ═══════════════════════════════════════════════════════════

function renderOceanCards() {
    const grid = document.getElementById('oceansGrid');
    const template = document.getElementById('oceanCardTemplate');
    
    if (!grid || !template) return;
    
    grid.innerHTML = '';
    
    const sortedOceans = sortOceans([...oceansData], OceansApp.sortOrder);
    
    sortedOceans.forEach((ocean, index) => {
        const card = template.content.cloneNode(true);
        const article = card.querySelector('.ocean-card');
        
        article.setAttribute('data-ocean-id', ocean.id);
        article.style.setProperty('--delay', `${index * 0.1}s`);
        
        // Rank calculation
        const oceansByArea = [...oceansData].sort((a, b) => b.area - a.area);
        const rankByArea = oceansByArea.findIndex(o => o.id === ocean.id) + 1;
        card.querySelector('.rank-number').textContent = rankByArea;
        card.querySelector('.rank-label').textContent = getRankLabel(rankByArea);
        
        // Image
        const img = card.querySelector('.ocean-image');
        img.src = ocean.image;
        img.alt = ocean.name;
        img.loading = 'lazy';
        img.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400';
        };
        
        // Info
        card.querySelector('.ocean-name').textContent = ocean.name;
        card.querySelector('.area-value').textContent = formatNumber(ocean.area) + ' km²';
        card.querySelector('.depth-value').textContent = formatNumber(ocean.avgDepth) + 'm avg';
        
        // Deepest point
        const deepestName = ocean.deepestPoint.name.split(',')[0];
        card.querySelector('.deepest-name').textContent = deepestName;
        card.querySelector('.deepest-depth').textContent = formatNumber(ocean.deepestPoint.depth) + 'm';
        
        // Continents
        card.querySelector('.continents-value').textContent = ocean.surroundingContinents.length;
        
        // Depth indicator
        const depthFill = card.querySelector('.depth-fill');
        const maxDepthReference = 11000;
        const depthPercent = (ocean.maxDepth / maxDepthReference) * 100;
        depthFill.style.height = `${depthPercent}%`;
        
        // Depth markers
        const markers = card.querySelectorAll('.depth-markers .marker');
        if (markers.length >= 3) {
            markers[1].textContent = formatNumber(Math.round(ocean.maxDepth / 2)) + 'm';
            markers[2].textContent = formatNumber(ocean.maxDepth) + 'm';
        }
        
        // Link
        const exploreBtn = card.querySelector('.explore-btn');
        exploreBtn.href = `oceans-profile.html?id=${ocean.id}`;
        
        // Click handler
        article.addEventListener('click', function(e) {
            if (!e.target.closest('.explore-btn')) {
                window.location.href = `oceans-profile.html?id=${ocean.id}`;
            }
        });
        
        grid.appendChild(card);
    });
}

function sortOceans(oceans, sortBy) {
    switch (sortBy) {
        case 'area':
            return oceans.sort((a, b) => b.area - a.area);
        case 'depth':
            return oceans.sort((a, b) => b.maxDepth - a.maxDepth);
        case 'alpha':
            return oceans.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return oceans;
    }
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE - SEA CARDS
// ═══════════════════════════════════════════════════════════

function renderSeaCards(filterOcean = 'all') {
    const grid = document.getElementById('seasGrid');
    const template = document.getElementById('seaCardTemplate');
    
    if (!grid || !template) return;
    
    grid.innerHTML = '';
    
    let allSeas = [];
    oceansData.forEach(ocean => {
        if (ocean.majorSeas) {
            ocean.majorSeas.forEach(sea => {
                allSeas.push({
                    ...sea,
                    oceanId: ocean.id,
                    oceanName: ocean.name,
                    oceanColor: getOceanColor(ocean.id)
                });
            });
        }
    });
    
    if (filterOcean !== 'all') {
        allSeas = allSeas.filter(sea => sea.oceanId === filterOcean);
    }
    
    allSeas.sort((a, b) => (b.area || 0) - (a.area || 0));
    
    updateSeasStats(allSeas);
    
    allSeas.forEach((sea, index) => {
        const card = template.content.cloneNode(true);
        const article = card.querySelector('.sea-card');
        
        article.setAttribute('data-sea-id', sea.name.toLowerCase().replace(/\s+/g, '-'));
        article.setAttribute('data-ocean', sea.oceanId);
        article.style.animationDelay = `${index * 0.03}s`;
        article.classList.add('fade-in');
        
        card.querySelector('.sea-name').textContent = sea.name;
        
        const oceanColorDot = card.querySelector('.ocean-color-dot');
        oceanColorDot.style.background = sea.oceanColor;
        
        card.querySelector('.ocean-name-text').textContent = sea.oceanName.replace(' Ocean', '');
        card.querySelector('.sea-area').textContent = sea.area ? formatNumber(sea.area) + ' km²' : '';
        
        if (sea.coordinates) {
            const lat = sea.coordinates[0] >= 0 ? `${sea.coordinates[0].toFixed(1)}°N` : `${Math.abs(sea.coordinates[0]).toFixed(1)}°S`;
            const lng = sea.coordinates[1] >= 0 ? `${sea.coordinates[1].toFixed(1)}°E` : `${Math.abs(sea.coordinates[1]).toFixed(1)}°W`;
            card.querySelector('.sea-coordinates').textContent = `${lat}, ${lng}`;
        }
        
        grid.appendChild(card);
    });
}

function updateSeasStats(seas) {
    const totalCount = document.getElementById('totalSeasCount');
    const totalArea = document.getElementById('totalSeasArea');
    
    if (totalCount) {
        animateNumber(totalCount, seas.length);
    }
    
    if (totalArea) {
        const total = seas.reduce((sum, sea) => sum + (sea.area || 0), 0);
        totalArea.textContent = formatNumber(total);
    }
}

function animateNumber(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 30);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current;
    }, 30);
}

// ═══════════════════════════════════════════════════════════
// FILTER HANDLERS
// ═══════════════════════════════════════════════════════════

function setupFilterHandlers() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            OceansApp.sortOrder = this.dataset.sort;
            renderOceanCards();
        });
    });
    
    const seaFilterBtns = document.querySelectorAll('.sea-filter-btn');
    seaFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            seaFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderSeaCards(this.dataset.ocean);
        });
    });
}

function setupCompareToggle() {
    const toggle = document.getElementById('compareToggle');
    const chart = document.getElementById('comparisonChart');
    
    if (!toggle || !chart) return;
    
    toggle.addEventListener('change', function() {
        if (this.checked) {
            chart.classList.add('active');
            renderComparisonChart();
        } else {
            chart.classList.remove('active');
        }
    });
}

function renderComparisonChart() {
    const areaBars = document.getElementById('areaBars');
    const depthBars = document.getElementById('depthBars');
    const maxDepthBars = document.getElementById('maxDepthBars');
    
    if (!areaBars || !depthBars || !maxDepthBars) return;
    
    const sortedOceans = [...oceansData].sort((a, b) => b.area - a.area);
    
    const maxArea = Math.max(...sortedOceans.map(o => o.area));
    const maxAvgDepth = Math.max(...sortedOceans.map(o => o.avgDepth));
    const maxMaxDepth = Math.max(...sortedOceans.map(o => o.maxDepth));
    
    [areaBars, depthBars, maxDepthBars].forEach(container => container.innerHTML = '');
    
    sortedOceans.forEach((ocean, index) => {
        const color = getOceanColor(ocean.id);
        
        const areaBar = createChartBar(ocean.area, maxArea, (ocean.area / 1000000).toFixed(1) + 'M', ocean.name.split(' ')[0], color);
        areaBars.appendChild(areaBar);
        
        const avgDepthBar = createChartBar(ocean.avgDepth, maxAvgDepth, formatNumber(ocean.avgDepth), ocean.name.split(' ')[0], color);
        depthBars.appendChild(avgDepthBar);
        
        const maxDepthBar = createChartBar(ocean.maxDepth, maxMaxDepth, formatNumber(ocean.maxDepth), ocean.name.split(' ')[0], color);
        maxDepthBars.appendChild(maxDepthBar);
    });
}

function createChartBar(value, max, label, name, color) {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = `${(value / max) * 100}%`;
    bar.style.background = `linear-gradient(180deg, ${color}, ${color}88)`;
    bar.setAttribute('data-value', label);
    
    const barLabel = document.createElement('span');
    barLabel.className = 'chart-bar-label';
    barLabel.textContent = name;
    bar.appendChild(barLabel);
    
    // Add hover animation
    setTimeout(() => {
        bar.style.transition = 'height 0.5s ease';
    }, 100);
    
    return bar;
}

// ═══════════════════════════════════════════════════════════
// FACTS TICKER
// ═══════════════════════════════════════════════════════════

function setupFactsTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    
    let allFacts = [];
    
    oceansData.forEach(ocean => {
        if (ocean.funFacts) {
            ocean.funFacts.forEach(fact => {
                allFacts.push(`${ocean.name}: ${fact}`);
            });
        }
    });
    
    const generalFacts = [
        "Oceans produce over 50% of the world's oxygen through phytoplankton",
        "The ocean absorbs about 30% of CO2 produced by humans",
        "Less than 5% of Earth's oceans have been explored",
        "The ocean contains 97% of all water on Earth",
        "The longest mountain range is underwater - the Mid-Ocean Ridge at 65,000 km",
        "Sound travels 4.5 times faster in water than in air",
        "The average ocean depth is 3,688 meters (12,100 feet)",
        "More people have walked on the moon than visited the Mariana Trench",
        "The ocean's deepest point could submerge Mount Everest with room to spare",
        "Ocean currents move more water than all rivers combined"
    ];
    
    allFacts = [...allFacts, ...generalFacts];
    allFacts = allFacts.sort(() => Math.random() - 0.5);
    
    const tickerContent = [...allFacts, ...allFacts].map(fact => 
        `<span class="ticker-item">${fact}</span>`
    ).join('');
    
    track.innerHTML = tickerContent;
}

// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.ocean-card, .sea-card, .section-header').forEach(el => {
        observer.observe(el);
    });
}

// ═══════════════════════════════════════════════════════════
// PROFILE PAGE - HEADER & BACKGROUND
// ═══════════════════════════════════════════════════════════

function updateProfileHeader(ocean) {
    document.title = `${ocean.name} | Oceans Explorer`;
    
    const titleText = document.querySelector('#oceanTitle .title-text');
    if (titleText) titleText.textContent = ocean.name;
    
    const oceanArea = document.getElementById('oceanArea');
    if (oceanArea) oceanArea.textContent = formatNumber(ocean.area) + ' km²';
    
    const oceanDepth = document.getElementById('oceanDepth');
    if (oceanDepth) oceanDepth.textContent = `Avg: ${formatNumber(ocean.avgDepth)}m`;
    
    const oceanPercent = document.getElementById('oceanPercent');
    if (oceanPercent) oceanPercent.textContent = `${ocean.percentEarthSurface}% of Earth`;
}

function updateProfileBackground(ocean) {
    const bgImage = document.querySelector('.profile-background .background-image');
    if (bgImage && ocean.backgroundImage) {
        bgImage.style.backgroundImage = `url(${ocean.backgroundImage})`;
    }
}

// ═══════════════════════════════════════════════════════════
// PROFILE PAGE - MAP INITIALIZATION
// ═══════════════════════════════════════════════════════════

function initializeMap(ocean) {
    const mapContainer = document.getElementById('oceanMap');
    if (!mapContainer || typeof L === 'undefined') return;
    
    // Clear existing map
    if (OceansApp.map) {
        OceansApp.map.remove();
    }
    
    // Initialize Leaflet map
    OceansApp.map = L.map('oceanMap', {
        center: ocean.coordinates,
        zoom: ocean.defaultZoom || 2,
        minZoom: 1,
        maxZoom: 10,
        worldCopyJump: true,
        zoomControl: false
    });
    
    // Dark ocean tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(OceansApp.map);
    
    // Add layers
    addOceanLayers(ocean);
    
    // Setup controls
    setupMapControls(ocean);
}

function setupMapControls(ocean) {
    const resetBtn = document.getElementById('resetViewBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            OceansApp.map.setView(ocean.coordinates, ocean.defaultZoom || 2);
        });
    }
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            OceansApp.map.zoomIn();
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            OceansApp.map.zoomOut();
        });
    }
}

function clearMapLayers() {
    OceansApp.markers.forEach(marker => {
        if (OceansApp.map) marker.remove();
    });
    OceansApp.markers = [];
    
    OceansApp.polylines.forEach(polyline => {
        if (OceansApp.map) polyline.remove();
    });
    OceansApp.polylines = [];
}

function addOceanLayers(ocean) {
    clearMapLayers();
    
    // Check which layers should be active
    const layerCurrents = document.getElementById('layerCurrents');
    const layerIslands = document.getElementById('layerIslands');
    const layerTectonic = document.getElementById('layerTectonic');
    const layerShipping = document.getElementById('layerShipping');
    const layerCities = document.getElementById('layerCities');
    const layerSeas = document.getElementById('layerSeas');
    
    if (layerCurrents?.checked) addCurrentsLayer(ocean);
    if (layerIslands?.checked) addIslandsLayer(ocean);
    if (layerTectonic?.checked) addTectonicLayer(ocean);
    if (layerShipping?.checked) addShippingLayer(ocean);
    if (layerCities?.checked) addCitiesLayer(ocean);
    if (layerSeas?.checked) addSeasLayer(ocean);
}
/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - MAIN APPLICATION
   Part 2 of 3 - Map Layers & Mind Map
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// MAP LAYERS
// ═══════════════════════════════════════════════════════════

function addCurrentsLayer(ocean) {
    if (!ocean.currents || !OceansApp.map) return;
    
    const warmStyle = {
        color: '#FF6B6B',
        weight: 3,
        opacity: 0.8,
        dashArray: '10, 5',
        className: 'current-line warm'
    };
    
    const coldStyle = {
        color: '#48CAE4',
        weight: 3,
        opacity: 0.8,
        dashArray: '10, 5',
        className: 'current-line cold'
    };
    
    // Warm currents
    if (ocean.currents.warm) {
        ocean.currents.warm.forEach(current => {
            if (current.path && current.path.length > 1) {
                const polyline = L.polyline(current.path, warmStyle);
                polyline.bindPopup(createCurrentPopup(current, 'warm'));
                polyline.addTo(OceansApp.map);
                OceansApp.polylines.push(polyline);
                addCurrentArrows(current.path, '#FF6B6B');
            }
        });
    }
    
    // Cold currents
    if (ocean.currents.cold) {
        ocean.currents.cold.forEach(current => {
            if (current.path && current.path.length > 1) {
                const polyline = L.polyline(current.path, coldStyle);
                polyline.bindPopup(createCurrentPopup(current, 'cold'));
                polyline.addTo(OceansApp.map);
                OceansApp.polylines.push(polyline);
                addCurrentArrows(current.path, '#48CAE4');
            }
        });
    }
    
    // Show current flow indicator
    const indicator = document.getElementById('currentFlowIndicator');
    if (indicator) indicator.classList.add('active');
}

function createCurrentPopup(current, type) {
    const color = type === 'warm' ? '#FF6B6B' : '#48CAE4';
    const icon = type === 'warm' ? '🌡️' : '❄️';
    const label = type === 'warm' ? 'Warm Current' : 'Cold Current';
    
    return `
        <div style="min-width: 200px;">
            <h4 style="color: ${color}; margin: 0 0 8px 0; font-size: 14px;">${current.name}</h4>
            <p style="margin: 0 0 8px 0; color: #CAF0F8; font-size: 12px;">${current.description || ''}</p>
            <span style="color: ${color}; font-size: 11px;">${icon} ${label}</span>
        </div>
    `;
}

function addCurrentArrows(path, color) {
    if (path.length < 2 || !OceansApp.map) return;
    
    // Add arrows at intervals along the path
    for (let i = 1; i < path.length; i++) {
        const start = path[i - 1];
        const end = path[i];
        
        const midLat = (start[0] + end[0]) / 2;
        const midLng = (start[1] + end[1]) / 2;
        
        const angle = Math.atan2(end[0] - start[0], end[1] - start[1]) * 180 / Math.PI;
        
        const arrowIcon = L.divIcon({
            className: 'current-arrow-marker',
            html: `<div style="
                transform: rotate(${angle}deg);
                color: ${color};
                font-size: 16px;
                text-shadow: 0 0 8px ${color};
                pointer-events: none;
            ">▶</div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });
        
        const marker = L.marker([midLat, midLng], { 
            icon: arrowIcon,
            interactive: false
        });
        marker.addTo(OceansApp.map);
        OceansApp.markers.push(marker);
    }
}

function addTectonicLayer(ocean) {
    if (!ocean.tectonicFeatures || !OceansApp.map) return;
    
    // Ridges
    if (ocean.tectonicFeatures.ridges) {
        ocean.tectonicFeatures.ridges.forEach(ridge => {
            if (ridge.coordinates && ridge.coordinates.length > 1) {
                const polyline = L.polyline(ridge.coordinates, {
                    color: '#E67E22',
                    weight: 4,
                    opacity: 0.9,
                    className: 'ridge-line'
                });
                polyline.bindPopup(`
                    <div style="min-width: 180px;">
                        <h4 style="color: #E67E22; margin: 0 0 8px 0;">🌋 ${ridge.name}</h4>
                        <p style="margin: 0; color: #CAF0F8; font-size: 12px;">${ridge.description || 'Mid-ocean ridge'}</p>
                    </div>
                `);
                polyline.addTo(OceansApp.map);
                OceansApp.polylines.push(polyline);
            }
        });
    }
    
    // Trenches
    if (ocean.tectonicFeatures.trenches) {
        ocean.tectonicFeatures.trenches.forEach(trench => {
            if (trench.coordinates) {
                const trenchIcon = L.divIcon({
                    className: 'trench-marker',
                    html: `<div style="
                        background: linear-gradient(135deg, #010810, #041C32);
                        border: 2px solid #064663;
                        border-radius: 50%;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #48CAE4;
                        font-size: 14px;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0,0,0,0.5);
                    ">🕳️</div>`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                });
                
                const marker = L.marker(trench.coordinates, { icon: trenchIcon });
                marker.bindPopup(`
                    <div style="min-width: 180px;">
                        <h4 style="color: #48CAE4; margin: 0 0 8px 0;">🕳️ ${trench.name}</h4>
                        <p style="margin: 0; color: #CAF0F8; font-size: 13px;">
                            <strong>Depth:</strong> ${formatNumber(trench.depth)}m
                        </p>
                    </div>
                `);
                marker.addTo(OceansApp.map);
                OceansApp.markers.push(marker);
            }
        });
    }
}

function addShippingLayer(ocean) {
    if (!ocean.shippingRoutes || !OceansApp.map) return;
    
    ocean.shippingRoutes.forEach(route => {
        if (route.path && route.path.length > 1) {
            const polyline = L.polyline(route.path, {
                color: '#FFD700',
                weight: 2,
                opacity: 0.7,
                dashArray: '8, 12',
                className: 'shipping-line'
            });
            polyline.bindPopup(`
                <div style="min-width: 180px;">
                    <h4 style="color: #FFD700; margin: 0 0 8px 0;">🚢 ${route.name}</h4>
                    <p style="margin: 0; color: #CAF0F8; font-size: 12px;">${route.description || 'Major shipping route'}</p>
                </div>
            `);
            polyline.addTo(OceansApp.map);
            OceansApp.polylines.push(polyline);
        }
    });
}

function addIslandsLayer(ocean) {
    if (!ocean.islands || !OceansApp.map) return;
    
    ocean.islands.forEach(island => {
        if (island.coordinates) {
            const islandIcon = L.divIcon({
                className: 'island-marker',
                html: `<div style="
                    font-size: 22px;
                    filter: drop-shadow(0 0 6px rgba(46, 204, 113, 0.8));
                    cursor: pointer;
                ">🏝️</div>`,
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            });
            
            const marker = L.marker(island.coordinates, { icon: islandIcon });
            marker.bindPopup(`
                <div style="min-width: 150px;">
                    <h4 style="color: #2ECC71; margin: 0 0 5px 0;">🏝️ ${island.name}</h4>
                    ${island.country ? `<p style="margin: 0; color: #CAF0F8; font-size: 12px;">${island.country}</p>` : ''}
                </div>
            `);
            marker.addTo(OceansApp.map);
            OceansApp.markers.push(marker);
        }
    });
}

function addCitiesLayer(ocean) {
    if (!ocean.cities || !OceansApp.map) return;
    
    ocean.cities.forEach(city => {
        if (city.coordinates) {
            const cityIcon = L.divIcon({
                className: 'city-marker',
                html: `<div style="
                    font-size: 18px;
                    filter: drop-shadow(0 0 5px rgba(241, 196, 15, 0.8));
                    cursor: pointer;
                ">🏙️</div>`,
                iconSize: [22, 22],
                iconAnchor: [11, 11]
            });
            
            const marker = L.marker(city.coordinates, { icon: cityIcon });
            marker.bindPopup(`
                <div style="min-width: 150px;">
                    <h4 style="color: #F1C40F; margin: 0 0 5px 0;">🏙️ ${city.name}</h4>
                    <p style="margin: 0; color: #CAF0F8; font-size: 12px;">${city.country}</p>
                    ${city.population ? `<p style="margin: 5px 0 0 0; color: #aaa; font-size: 11px;">Pop: ${formatNumber(city.population)}</p>` : ''}
                </div>
            `);
            marker.addTo(OceansApp.map);
            OceansApp.markers.push(marker);
        }
    });
}

function addSeasLayer(ocean) {
    if (!ocean.majorSeas || !OceansApp.map) return;
    
    ocean.majorSeas.forEach(sea => {
        if (sea.coordinates) {
            const seaIcon = L.divIcon({
                className: 'sea-marker',
                html: `<div style="
                    background: rgba(0, 180, 216, 0.3);
                    border: 1px solid rgba(0, 180, 216, 0.6);
                    border-radius: 12px;
                    padding: 4px 8px;
                    color: #CAF0F8;
                    font-size: 10px;
                    font-weight: 600;
                    white-space: nowrap;
                    text-shadow: 0 0 5px rgba(0,0,0,0.8);
                ">${sea.name}</div>`,
                iconSize: [100, 24],
                iconAnchor: [50, 12]
            });
            
            const marker = L.marker(sea.coordinates, { icon: seaIcon });
            marker.bindPopup(`
                <div style="min-width: 180px;">
                    <h4 style="color: #00B4D8; margin: 0 0 8px 0;">🌊 ${sea.name}</h4>
                    ${sea.area ? `<p style="margin: 0; color: #CAF0F8; font-size: 12px;">Area: ${formatNumber(sea.area)} km²</p>` : ''}
                </div>
            `);
            marker.addTo(OceansApp.map);
            OceansApp.markers.push(marker);
        }
    });
}

// ═══════════════════════════════════════════════════════════
// MAP LAYER CONTROLS
// ═══════════════════════════════════════════════════════════

function setupMapLayers() {
    const layerCheckboxes = document.querySelectorAll('.layer-toggle input');
    
    layerCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (OceansApp.currentOcean) {
                addOceanLayers(OceansApp.currentOcean);
            }
            
            // Toggle flow indicator
            const indicator = document.getElementById('currentFlowIndicator');
            const currentsChecked = document.getElementById('layerCurrents')?.checked;
            if (indicator) {
                indicator.classList.toggle('active', currentsChecked);
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════
// MODE TOGGLES
// ═══════════════════════════════════════════════════════════

function setupModeToggles() {
    const currentsToggle = document.getElementById('currentsToggle');
    const depthViewToggle = document.getElementById('depthViewToggle');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (currentsToggle) {
        currentsToggle.addEventListener('change', function() {
            const layerCurrents = document.getElementById('layerCurrents');
            if (layerCurrents) {
                layerCurrents.checked = this.checked;
                if (OceansApp.currentOcean) {
                    addOceanLayers(OceansApp.currentOcean);
                }
            }
        });
    }
    
    if (depthViewToggle) {
        depthViewToggle.addEventListener('change', function() {
            const overlay = document.getElementById('depthViewOverlay');
            if (overlay) {
                overlay.classList.toggle('active', this.checked);
                if (this.checked) {
                    updateDepthViewOverlay(OceansApp.currentOcean);
                }
            }
        });
    }
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

function updateDepthViewOverlay(ocean) {
    const trenchInfo = document.getElementById('dvTrench');
    if (trenchInfo && ocean.deepestPoint) {
        const trenchName = trenchInfo.querySelector('.trench-name');
        const trenchDepth = trenchInfo.querySelector('.trench-depth');
        
        if (trenchName) trenchName.textContent = ocean.deepestPoint.name.split(',')[0];
        if (trenchDepth) trenchDepth.textContent = formatNumber(ocean.deepestPoint.depth) + 'm';
    }
}

// ═══════════════════════════════════════════════════════════
// MIND MAP / DATA TREE
// ═══════════════════════════════════════════════════════════

function setupTreeNodes() {
    const nodes = document.querySelectorAll('.tree-node');
    
    nodes.forEach(node => {
        const header = node.querySelector('.node-header');
        if (header) {
            header.addEventListener('click', () => {
                // Close other nodes
                nodes.forEach(n => {
                    if (n !== node) n.classList.remove('expanded');
                });
                // Toggle current node
                node.classList.toggle('expanded');
            });
        }
    });
    
    // Expand first node by default
    if (nodes.length > 0) {
        nodes[0].classList.add('expanded');
    }
}

function populateMindMap(ocean) {
    populateDimensions(ocean);
    populateDepth(ocean);
    populateLocation(ocean);
    populateSeas(ocean);
    populateCurrents(ocean);
    populateTectonic(ocean);
    populateMarine(ocean);
    populateClimate(ocean);
    populateEconomic(ocean);
    populateEnvironmental(ocean);
    populateExploration(ocean);
    populateGeopolitics(ocean);
}

function populateDimensions(ocean) {
    const container = document.getElementById('dimensionsData');
    if (!container) return;
    
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Total Area</span>
            <span class="data-value">${formatNumber(ocean.area)} km²</span>
        </div>
        <div class="data-item">
            <span class="data-label">% of Earth's Surface</span>
            <span class="data-value">${ocean.percentEarthSurface}%</span>
        </div>
        <div class="data-item">
            <span class="data-label">% of Earth's Water</span>
            <span class="data-value">${ocean.percentEarthWater}%</span>
        </div>
        <div class="data-item">
            <span class="data-label">Volume</span>
            <span class="data-value">${ocean.volume || 'N/A'}</span>
        </div>
    `;
}

function populateDepth(ocean) {
    const container = document.getElementById('depthData');
    if (!container) return;
    
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Average Depth</span>
            <span class="data-value">${formatNumber(ocean.avgDepth)} m</span>
        </div>
        <div class="data-item">
            <span class="data-label">Maximum Depth</span>
            <span class="data-value">${formatNumber(ocean.maxDepth)} m</span>
        </div>
        <div class="data-item" style="grid-column: 1 / -1;">
            <span class="data-label">Deepest Point</span>
            <span class="data-value">${ocean.deepestPoint.name}</span>
        </div>
    `;
}

function populateLocation(ocean) {
    const container = document.getElementById('locationData');
    if (!container) return;
    
    const continents = ocean.surroundingContinents.join(', ');
    
    container.innerHTML = `
        <div class="data-item" style="grid-column: 1 / -1;">
            <span class="data-label">Surrounding Continents</span>
            <span class="data-value">${continents}</span>
        </div>
        <div class="data-item">
            <span class="data-label">Coordinates (Center)</span>
            <span class="data-value">${ocean.coordinates[0]}°, ${ocean.coordinates[1]}°</span>
        </div>
    `;
}

function populateSeas(ocean) {
    const container = document.getElementById('seasData');
    if (!container || !ocean.majorSeas) return;
    
    const seasHTML = ocean.majorSeas.map(sea => 
        `<div class="seas-list-item">${sea.name} ${sea.area ? `<small>(${formatNumber(sea.area)} km²)</small>` : ''}</div>`
    ).join('');
    
    container.innerHTML = seasHTML;
}

function populateCurrents(ocean) {
    const container = document.getElementById('currentsData');
    if (!container || !ocean.currents) return;
    
    let html = '';
    
    if (ocean.currents.warm && ocean.currents.warm.length > 0) {
        html += `
            <div class="currents-group">
                <h4 class="currents-group-title warm">🌡️ Warm Currents</h4>
                ${ocean.currents.warm.map(c => `
                    <div class="current-item">
                        <span class="current-dot warm"></span>
                        <span>${c.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (ocean.currents.cold && ocean.currents.cold.length > 0) {
        html += `
            <div class="currents-group">
                <h4 class="currents-group-title cold">❄️ Cold Currents</h4>
                ${ocean.currents.cold.map(c => `
                    <div class="current-item">
                        <span class="current-dot cold"></span>
                        <span>${c.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (ocean.currents.gyres && ocean.currents.gyres.length > 0) {
        html += `
            <div class="currents-group">
                <h4 class="currents-group-title" style="color: #00FFE5;">🌀 Major Gyres</h4>
                ${ocean.currents.gyres.map(g => `
                    <div class="current-item">
                        <span style="color: #00FFE5;">🌀</span>
                        <span>${g.name} (${g.direction})</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateTectonic(ocean) {
    const container = document.getElementById('tectonicData');
    if (!container || !ocean.tectonicFeatures) return;
    
    let html = '';
    
    if (ocean.tectonicFeatures.ridges) {
        html += ocean.tectonicFeatures.ridges.map(r => `
            <div class="info-item">
                <span class="info-item-label">🌋 Ridge</span>
                <span class="info-item-value">${r.name}</span>
            </div>
        `).join('');
    }
    
    if (ocean.tectonicFeatures.trenches) {
        html += ocean.tectonicFeatures.trenches.map(t => `
            <div class="info-item">
                <span class="info-item-label">🕳️ Trench</span>
                <span class="info-item-value">${t.name} (${formatNumber(t.depth)}m)</span>
            </div>
        `).join('');
    }
    
    if (ocean.tectonicFeatures.plates) {
        html += `
            <div class="info-item" style="margin-top: 10px;">
                <span class="info-item-label">🗺️ Tectonic Plates</span>
                <span class="info-item-value">${ocean.tectonicFeatures.plates.join(', ')}</span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateMarine(ocean) {
    const container = document.getElementById('marineData');
    if (!container || !ocean.marineLife) return;
    
    let html = '';
    
    if (ocean.marineLife.keySpecies) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🐠 Key Species</span>
                <span class="info-item-value">${ocean.marineLife.keySpecies.join(', ')}</span>
            </div>
        `;
    }
    
    if (ocean.marineLife.coralRegions) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🪸 Coral Regions</span>
                <span class="info-item-value">${ocean.marineLife.coralRegions.join(', ')}</span>
            </div>
        `;
    }
    
    if (ocean.marineLife.endangeredSpecies) {
        html += `
            <div class="info-item">
                <span class="info-item-label">⚠️ Endangered Species</span>
                <span class="info-item-value">${ocean.marineLife.endangeredSpecies.join(', ')}</span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateClimate(ocean) {
    const container = document.getElementById('climateData');
    if (!container || !ocean.climateRole) return;
    
    const html = ocean.climateRole.map(item => `
        <div class="info-item">
            <span class="info-item-label">${item.label}</span>
            <span class="info-item-value">${item.value}</span>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function populateEconomic(ocean) {
    const container = document.getElementById('economicData');
    if (!container || !ocean.economicImportance) return;
    
    const html = ocean.economicImportance.map(item => `
        <div class="info-item">
            <span class="info-item-label">${item.label}</span>
            <span class="info-item-value">${item.value}</span>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function populateEnvironmental(ocean) {
    const container = document.getElementById('environmentalData');
    if (!container || !ocean.environmentalIssues) return;
    
    const html = ocean.environmentalIssues.map(item => `
        <div class="info-item">
            <span class="info-item-label" style="color: #FF6B6B;">${item.label}</span>
            <span class="info-item-value">${item.value}</span>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function populateExploration(ocean) {
    const container = document.getElementById('explorationData');
    if (!container || !ocean.exploration) return;
    
    const html = ocean.exploration.map(item => `
        <div class="info-item">
            <span class="info-item-label">${item.label}</span>
            <span class="info-item-value">${item.value}</span>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function populateGeopolitics(ocean) {
    const container = document.getElementById('geopoliticsData');
    if (!container || !ocean.geopolitics) return;
    
    const html = ocean.geopolitics.map(item => `
        <div class="info-item">
            <span class="info-item-label">${item.label}</span>
            <span class="info-item-value">${item.value}</span>
        </div>
    `).join('');
    
    container.innerHTML = html;
}
/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - MAIN APPLICATION
   Part 3 of 3 - Dive Feature, Currents Journey, Navigation
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// FACTS CAROUSEL
// ═══════════════════════════════════════════════════════════

function setupFactsCarousel(ocean) {
    const carousel = document.getElementById('factsCarousel');
    const dotsContainer = document.getElementById('factsDots');
    const prevBtn = document.getElementById('prevFact');
    const nextBtn = document.getElementById('nextFact');
    
    if (!carousel || !ocean.funFacts) return;
    
    const facts = ocean.funFacts;
    OceansApp.factIndex = 0;
    
    // Create fact cards
    carousel.innerHTML = facts.map((fact, i) => `
        <div class="fact-card ${i === 0 ? 'active' : ''}" data-index="${i}">
            <p>"${fact}"</p>
        </div>
    `).join('');
    
    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = facts.map((_, i) => `
            <span class="fact-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
        `).join('');
        
        dotsContainer.querySelectorAll('.fact-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                showFact(parseInt(dot.dataset.index), facts);
            });
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showFact((OceansApp.factIndex - 1 + facts.length) % facts.length, facts);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showFact((OceansApp.factIndex + 1) % facts.length, facts);
        });
    }
    
    // Auto-advance
    setInterval(() => {
        showFact((OceansApp.factIndex + 1) % facts.length, facts);
    }, 8000);
}

function showFact(index, facts) {
    OceansApp.factIndex = index;
    
    const cards = document.querySelectorAll('.fact-card');
    const dots = document.querySelectorAll('.fact-dot');
    
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// ═══════════════════════════════════════════════════════════
// QUICK FACTS PANEL
// ═══════════════════════════════════════════════════════════

function setupQuickFacts(ocean) {
    const panel = document.getElementById('quickFactsPanel');
    const toggle = document.getElementById('qfToggle');
    
    if (!panel) return;
    
    // Populate values
    const qfArea = document.getElementById('qfArea');
    const qfAvgDepth = document.getElementById('qfAvgDepth');
    const qfDeepest = document.getElementById('qfDeepest');
    const qfTemp = document.getElementById('qfTemp');
    const qfSpecies = document.getElementById('qfSpecies');
    
    if (qfArea) qfArea.textContent = (ocean.area / 1000000).toFixed(1) + 'M km²';
    if (qfAvgDepth) qfAvgDepth.textContent = formatNumber(ocean.avgDepth) + 'm';
    if (qfDeepest) qfDeepest.textContent = formatNumber(ocean.maxDepth) + 'm';
    if (qfTemp) qfTemp.textContent = ocean.tempRange || '-2°C to 30°C';
    if (qfSpecies) qfSpecies.textContent = ocean.marineLife?.totalSpecies || 'Millions';
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
        });
    }
}

// ═══════════════════════════════════════════════════════════
// OCEAN NAVIGATION
// ═══════════════════════════════════════════════════════════

function setupOceanNavigation(currentOcean) {
    const prevBtn = document.getElementById('prevOcean');
    const nextBtn = document.getElementById('nextOcean');
    const prevName = document.getElementById('prevOceanName');
    const nextName = document.getElementById('nextOceanName');
    const navDots = document.querySelectorAll('.nav-dot');
    
    const currentIndex = oceansData.findIndex(o => o.id === currentOcean.id);
    const prevIndex = (currentIndex - 1 + oceansData.length) % oceansData.length;
    const nextIndex = (currentIndex + 1) % oceansData.length;
    
    const prevOcean = oceansData[prevIndex];
    const nextOcean = oceansData[nextIndex];
    
    if (prevName) prevName.textContent = prevOcean.name;
    if (nextName) nextName.textContent = nextOcean.name;
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            window.location.href = `oceans-profile.html?id=${prevOcean.id}`;
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.location.href = `oceans-profile.html?id=${nextOcean.id}`;
        });
    }
    
    navDots.forEach(dot => {
        dot.classList.toggle('active', dot.dataset.ocean === currentOcean.id);
        dot.addEventListener('click', () => {
            window.location.href = `oceans-profile.html?id=${dot.dataset.ocean}`;
        });
    });
}

// ═══════════════════════════════════════════════════════════
// ACTION BUTTONS
// ═══════════════════════════════════════════════════════════

function setupActionButtons() {
    const followCurrentsBtn = document.getElementById('followCurrentsBtn');
    const diveIntoBtn = document.getElementById('diveIntoBtn');
    
    if (followCurrentsBtn) {
        followCurrentsBtn.addEventListener('click', () => {
            startCurrentsJourney();
        });
    }
    
    if (diveIntoBtn) {
        diveIntoBtn.addEventListener('click', () => {
            startDive();
        });
    }
}

// ═══════════════════════════════════════════════════════════
// DIVE FEATURE
// ═══════════════════════════════════════════════════════════

function setupDiveFeature(ocean) {
    const overlay = document.getElementById('diveOverlay');
    const closeBtn = document.getElementById('diveClose');
    const diveDown = document.getElementById('diveDown');
    const diveSurface = document.getElementById('diveSurface');
    const diveAuto = document.getElementById('diveAuto');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', endDive);
    }
    
    if (diveDown) {
        diveDown.addEventListener('click', () => descendDive(500));
    }
    
    if (diveSurface) {
        diveSurface.addEventListener('click', surfaceDive);
    }
    
    if (diveAuto) {
        diveAuto.addEventListener('click', toggleAutoDive);
    }
    
    // Update trench info
    const trenchInfo = document.getElementById('trenchInfo');
    if (trenchInfo && ocean.deepestPoint) {
        const trenchName = trenchInfo.querySelector('.trench-name');
        const trenchDepth = trenchInfo.querySelector('.trench-depth');
        const trenchFact = trenchInfo.querySelector('.trench-fact');
        
        if (trenchName) trenchName.textContent = ocean.deepestPoint.name.split(',')[0] + ' Reached!';
        if (trenchDepth) trenchDepth.textContent = `Depth: ${formatNumber(ocean.deepestPoint.depth)}m`;
        if (trenchFact) trenchFact.textContent = `Deepest point in the ${ocean.name}`;
    }
}

function startDive() {
    const overlay = document.getElementById('diveOverlay');
    if (!overlay) return;
    
    overlay.classList.add('active');
    OceansApp.diveState.isActive = true;
    OceansApp.diveState.currentDepth = 0;
    
    updateDiveDisplay();
}

function endDive() {
    const overlay = document.getElementById('diveOverlay');
    if (!overlay) return;
    
    overlay.classList.remove('active');
    OceansApp.diveState.isActive = false;
    OceansApp.diveState.autoMode = false;
    
    if (OceansApp.diveState.interval) {
        clearInterval(OceansApp.diveState.interval);
        OceansApp.diveState.interval = null;
    }
    
    // Reset trench info
    const trenchInfo = document.getElementById('trenchInfo');
    if (trenchInfo) trenchInfo.classList.remove('active');
}

function descendDive(amount) {
    const maxDepth = OceansApp.currentOcean?.maxDepth || 10935;
    OceansApp.diveState.currentDepth = Math.min(
        OceansApp.diveState.currentDepth + amount,
        maxDepth
    );
    updateDiveDisplay();
}

function surfaceDive() {
    OceansApp.diveState.currentDepth = 0;
    OceansApp.diveState.autoMode = false;
    
    if (OceansApp.diveState.interval) {
        clearInterval(OceansApp.diveState.interval);
        OceansApp.diveState.interval = null;
    }
    
    const autoBtn = document.getElementById('diveAuto');
    if (autoBtn) {
        autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Dive';
    }
    
    const trenchInfo = document.getElementById('trenchInfo');
    if (trenchInfo) trenchInfo.classList.remove('active');
    
    updateDiveDisplay();
}

function toggleAutoDive() {
    const autoBtn = document.getElementById('diveAuto');
    
    if (OceansApp.diveState.autoMode) {
        // Stop auto dive
        OceansApp.diveState.autoMode = false;
        if (OceansApp.diveState.interval) {
            clearInterval(OceansApp.diveState.interval);
            OceansApp.diveState.interval = null;
        }
        if (autoBtn) autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Dive';
    } else {
        // Start auto dive
        OceansApp.diveState.autoMode = true;
        if (autoBtn) autoBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        
        const maxDepth = OceansApp.currentOcean?.maxDepth || 10935;
        
        OceansApp.diveState.interval = setInterval(() => {
            if (OceansApp.diveState.currentDepth >= maxDepth) {
                clearInterval(OceansApp.diveState.interval);
                OceansApp.diveState.interval = null;
                OceansApp.diveState.autoMode = false;
                if (autoBtn) autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Dive';
                
                // Show trench reached
                const trenchInfo = document.getElementById('trenchInfo');
                if (trenchInfo) trenchInfo.classList.add('active');
            } else {
                descendDive(100);
            }
        }, 150);
    }
}

function updateDiveDisplay() {
    const depth = OceansApp.diveState.currentDepth;
    const maxDepth = OceansApp.currentOcean?.maxDepth || 10935;
    const zone = getZoneForDepth(depth);
    
    // Update background color
    const diveBackground = document.getElementById('diveBackground');
    if (diveBackground) {
        diveBackground.style.background = zone.color;
    }
    
    // Update depth fill
    const depthFill = document.getElementById('diveDepthFill');
    if (depthFill) {
        depthFill.style.height = `${(depth / maxDepth) * 100}%`;
    }
    
    // Update diver icon position
    const diverIcon = document.getElementById('diverIcon');
    if (diverIcon) {
        diverIcon.style.top = `${(depth / maxDepth) * 100}%`;
    }
    
    // Update stats
    const currentDepthEl = document.getElementById('currentDepth');
    const currentPressure = document.getElementById('currentPressure');
    const currentTemp = document.getElementById('currentTemp');
    const currentLight = document.getElementById('currentLight');
    
    if (currentDepthEl) currentDepthEl.textContent = formatNumber(Math.round(depth)) + 'm';
    if (currentPressure) currentPressure.textContent = calculatePressure(depth) + ' atm';
    if (currentTemp) currentTemp.textContent = calculateTemperature(depth) + '°C';
    if (currentLight) currentLight.textContent = calculateLight(depth) + '%';
    
    // Update zone info
    const zoneInfo = document.getElementById('zoneInfo');
    if (zoneInfo) {
        const zoneName = zoneInfo.querySelector('.zone-name');
        const zoneDesc = zoneInfo.querySelector('.zone-description');
        const creaturesList = zoneInfo.querySelector('.creatures-list');
        
        if (zoneName) zoneName.textContent = zone.name;
        if (zoneDesc) zoneDesc.textContent = zone.description;
        if (creaturesList) {
            creaturesList.innerHTML = zone.creatures.map(c => 
                `<span class="creature">${c}</span>`
            ).join('');
        }
    }
    
    // Update zone indicators
    const zones = document.querySelectorAll('.depth-zones .zone');
    zones.forEach(zoneEl => {
        const zoneName = zoneEl.dataset.zone;
        const isActive = zone.name.toLowerCase().includes(zoneName);
        zoneEl.classList.toggle('active', isActive);
    });
    
    // Check if reached bottom
    if (depth >= maxDepth) {
        const trenchInfo = document.getElementById('trenchInfo');
        if (trenchInfo) trenchInfo.classList.add('active');
    }
}

// ═══════════════════════════════════════════════════════════
// CURRENTS JOURNEY FEATURE
// ═══════════════════════════════════════════════════════════

function setupCurrentsJourney(ocean) {
    const closeBtn = document.getElementById('currentsClose');
    const playPauseBtn = document.getElementById('journeyPlayPause');
    const prevBtn = document.getElementById('journeyPrev');
    const nextBtn = document.getElementById('journeyNext');
    const skipBtn = document.getElementById('journeySkip');
    const restartBtn = document.getElementById('journeyRestart');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', endCurrentsJourney);
    }
    
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', toggleJourneyPlayPause);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', journeyPrev);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', journeyNext);
    }
    
    if (skipBtn) {
        skipBtn.addEventListener('click', skipJourney);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartJourney);
    }
}

function startCurrentsJourney() {
    const overlay = document.getElementById('currentsOverlay');
    const ocean = OceansApp.currentOcean;
    
    if (!overlay || !ocean || !ocean.currentFlowWaypoints) return;
    
    overlay.classList.add('active');
    
    OceansApp.currentJourney = {
        isActive: true,
        currentStep: 0,
        isPaused: false,
        interval: null,
        waypoints: ocean.currentFlowWaypoints
    };
    
    // Build waypoints UI
    buildWaypointsUI(ocean.currentFlowWaypoints);
    
    // Start journey
    updateJourneyDisplay();
    startJourneyAutoPlay();
}

function buildWaypointsUI(waypoints) {
    const container = document.getElementById('progressWaypoints');
    if (!container) return;
    
    container.innerHTML = waypoints.map((wp, i) => `
        <div class="waypoint ${i === 0 ? 'active' : ''}" data-index="${i}">
            <span class="waypoint-dot"></span>
            <span class="waypoint-label">${wp.name}</span>
        </div>
    `).join('');
}

function updateJourneyDisplay() {
    const journey = OceansApp.currentJourney;
    if (!journey.waypoints) return;
    
    const currentWaypoint = journey.waypoints[journey.currentStep];
    const progress = (journey.currentStep / (journey.waypoints.length - 1)) * 100;
    
    // Update progress bar
    const progressFill = document.getElementById('currentProgressFill');
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    // Update waypoint indicators
    const waypointEls = document.querySelectorAll('.waypoint');
    waypointEls.forEach((wp, i) => {
        wp.classList.toggle('active', i === journey.currentStep);
        wp.classList.toggle('completed', i < journey.currentStep);
    });
    
    // Update current info
    const currentName = document.getElementById('currentName');
    const currentDescription = document.getElementById('currentDescription');
    const currentDirection = document.getElementById('currentDirection');
    const currentTemp2 = document.getElementById('currentTemp2');
    const currentSpeed = document.getElementById('currentSpeed');
    
    if (currentName) currentName.textContent = currentWaypoint.name;
    if (currentDescription) currentDescription.textContent = currentWaypoint.description;
    if (currentDirection) currentDirection.textContent = currentWaypoint.direction || 'Following current';
    if (currentTemp2) currentTemp2.textContent = currentWaypoint.temp || '22°C';
    if (currentSpeed) currentSpeed.textContent = currentWaypoint.speed || '0.5 m/s';
    
    // Update current type
    const currentType = document.querySelector('.current-type');
    if (currentType) {
        const isWarm = currentWaypoint.type === 'warm';
        currentType.className = `current-type ${isWarm ? 'warm' : 'cold'}`;
        currentType.querySelector('.type-label').textContent = isWarm ? 'Warm Current' : 'Cold Current';
    }
    
    // Update map view if available
    if (OceansApp.map && currentWaypoint.coordinates) {
        OceansApp.map.flyTo(currentWaypoint.coordinates, 4, {
            duration: 2
        });
    }
    
    // Update button states
    const prevBtn = document.getElementById('journeyPrev');
    const nextBtn = document.getElementById('journeyNext');
    
    if (prevBtn) prevBtn.disabled = journey.currentStep === 0;
    if (nextBtn) nextBtn.disabled = journey.currentStep >= journey.waypoints.length - 1;
    
    // Check if journey complete
    if (journey.currentStep >= journey.waypoints.length - 1) {
        showGyreComplete();
    }
}

function startJourneyAutoPlay() {
    const journey = OceansApp.currentJourney;
    
    if (journey.interval) {
        clearInterval(journey.interval);
    }
    
    journey.interval = setInterval(() => {
        if (!journey.isPaused && journey.currentStep < journey.waypoints.length - 1) {
            journey.currentStep++;
            updateJourneyDisplay();
        } else if (journey.currentStep >= journey.waypoints.length - 1) {
            clearInterval(journey.interval);
            journey.interval = null;
        }
    }, 4000);
}

function toggleJourneyPlayPause() {
    const journey = OceansApp.currentJourney;
    const btn = document.getElementById('journeyPlayPause');
    
    journey.isPaused = !journey.isPaused;
    
    if (btn) {
        btn.innerHTML = journey.isPaused ? 
            '<i class="fas fa-play"></i>' : 
            '<i class="fas fa-pause"></i>';
    }
    
    if (!journey.isPaused && !journey.interval) {
        startJourneyAutoPlay();
    }
}

function journeyPrev() {
    const journey = OceansApp.currentJourney;
    if (journey.currentStep > 0) {
        journey.currentStep--;
        updateJourneyDisplay();
    }
}

function journeyNext() {
    const journey = OceansApp.currentJourney;
    if (journey.currentStep < journey.waypoints.length - 1) {
        journey.currentStep++;
        updateJourneyDisplay();
    }
}

function skipJourney() {
    const journey = OceansApp.currentJourney;
    journey.currentStep = journey.waypoints.length - 1;
    updateJourneyDisplay();
    showGyreComplete();
}

function showGyreComplete() {
    const journeyContent = document.querySelector('.currents-journey');
    const gyreComplete = document.getElementById('gyreComplete');
    const gyreName = document.getElementById('gyreCompleteName');
    
    if (journeyContent) journeyContent.style.display = 'none';
    if (gyreComplete) gyreComplete.classList.add('active');
    
    if (gyreName && OceansApp.currentOcean?.currents?.gyres?.[0]) {
        gyreName.textContent = OceansApp.currentOcean.currents.gyres[0].name;
    }
    
    // Stop interval
    if (OceansApp.currentJourney.interval) {
        clearInterval(OceansApp.currentJourney.interval);
        OceansApp.currentJourney.interval = null;
    }
}

function restartJourney() {
    const journeyContent = document.querySelector('.currents-journey');
    const gyreComplete = document.getElementById('gyreComplete');
    
    if (journeyContent) journeyContent.style.display = 'block';
    if (gyreComplete) gyreComplete.classList.remove('active');
    
    OceansApp.currentJourney.currentStep = 0;
    OceansApp.currentJourney.isPaused = false;
    
    const btn = document.getElementById('journeyPlayPause');
    if (btn) btn.innerHTML = '<i class="fas fa-pause"></i>';
    
    updateJourneyDisplay();
    startJourneyAutoPlay();
}

function endCurrentsJourney() {
    const overlay = document.getElementById('currentsOverlay');
    const journeyContent = document.querySelector('.currents-journey');
    const gyreComplete = document.getElementById('gyreComplete');
    
    if (overlay) overlay.classList.remove('active');
    if (journeyContent) journeyContent.style.display = 'block';
    if (gyreComplete) gyreComplete.classList.remove('active');
    
    if (OceansApp.currentJourney.interval) {
        clearInterval(OceansApp.currentJourney.interval);
        OceansApp.currentJourney.interval = null;
    }
    
    OceansApp.currentJourney.isActive = false;
}

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

// Debounce function for performance
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

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    if (OceansApp.map) {
        OceansApp.map.invalidateSize();
    }
}, 250));

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to close overlays
    if (e.key === 'Escape') {
        endDive();
        endCurrentsJourney();
        
        const depthView = document.getElementById('depthViewOverlay');
        const depthToggle = document.getElementById('depthViewToggle');
        if (depthView?.classList.contains('active')) {
            depthView.classList.remove('active');
            if (depthToggle) depthToggle.checked = false;
        }
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        const prevBtn = document.getElementById('prevOcean');
        if (prevBtn && document.activeElement.tagName !== 'INPUT') {
            prevBtn.click();
        }
    }
    
    if (e.key === 'ArrowRight') {
        const nextBtn = document.getElementById('nextOcean');
        if (nextBtn && document.activeElement.tagName !== 'INPUT') {
            nextBtn.click();
        }
    }
});

// Export for global access
window.initProfilePage = initProfilePage;
window.OceansApp = OceansApp;
