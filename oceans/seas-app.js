/* ═══════════════════════════════════════════════════════════
   🌊 SEAS EXPLORER - APPLICATION LOGIC
   Complete JavaScript for Sea Profiles & Trade Routes
   ═══════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════════════════

const SeasApp = {
    currentSea: null,
    map: null,
    markers: [],
    polylines: [],
    layers: {
        tradeRoutes: true,
        chokepoints: true,
        ports: true,
        navalBases: false,
        disputes: false
    }
};

// ═══════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
});

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progress = document.querySelector('.loading-progress');
    
    let progressValue = 0;
    const loadInterval = setInterval(() => {
        progressValue += Math.random() * 20;
        if (progressValue >= 100) {
            progressValue = 100;
            clearInterval(loadInterval);
            
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initSeaProfile();
                }, 500);
            }, 300);
        }
        progress.style.width = `${progressValue}%`;
    }, 50);
    
    generateBubbles();
}

function generateBubbles() {
    const container = document.getElementById('bubblesContainer');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.setProperty('--left', `${Math.random() * 100}%`);
        bubble.style.setProperty('--size', `${Math.random() * 15 + 5}px`);
        bubble.style.setProperty('--duration', `${Math.random() * 10 + 8}s`);
        bubble.style.setProperty('--delay', `${Math.random() * 5}s`);
        bubble.style.setProperty('--wobble', `${(Math.random() - 0.5) * 50}px`);
        container.appendChild(bubble);
    }
}

function initSeaProfile() {
    const seaId = getSeaIdFromURL();
    const sea = getSeaById(seaId) || seasData[0];
    
    SeasApp.currentSea = sea;
    
    updateSeaHeader(sea);
    updateSeaBackground(sea);
    initializeMap(sea);
    populateMindMap(sea);
    populateTradeRoutes(sea);
    populateChokepoints(sea);
    populateCountryImportance(sea);
    populateGeopoliticalIssues(sea);
    populateNavalPresence(sea);
    populateFunFacts(sea);
    setupQuickFacts(sea);
    setupSeaNavigation(sea);
    setupTreeNodes();
    setupMapLayers();
}

function getSeaIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'south-china-sea';
}

// ═══════════════════════════════════════════════════════════
// HEADER & BACKGROUND
// ═══════════════════════════════════════════════════════════

function updateSeaHeader(sea) {
    document.title = `${sea.name} | Seas Explorer`;
    
    const title = document.getElementById('seaTitle');
    if (title) title.textContent = sea.name;
    
    const parentOcean = document.getElementById('seaParentOcean');
    if (parentOcean) {
        parentOcean.querySelector('span').textContent = sea.parentOcean;
        parentOcean.href = `oceans-profile.html?id=${sea.parentOceanId}`;
    }
    
    const area = document.getElementById('seaArea');
    if (area) area.textContent = formatNumber(sea.area) + ' km²';
    
    const depth = document.getElementById('seaDepth');
    if (depth) depth.textContent = `Max: ${formatNumber(sea.maxDepth)}m`;
    
    const badge = document.getElementById('strategicBadge');
    if (badge && sea.geopolitics?.strategicImportance) {
        const importance = sea.geopolitics.strategicImportance.toLowerCase();
        badge.className = `strategic-badge ${importance.replace(' ', '-')}`;
        badge.textContent = `${sea.geopolitics.strategicImportance} Strategic Importance`;
    }
    
    // Quick stats
    updateQuickStats(sea);
}

function updateQuickStats(sea) {
    const tradeValue = document.getElementById('tradeValue');
    const oilPercent = document.getElementById('oilPercent');
    const fishCatch = document.getElementById('fishCatch');
    const countryCount = document.getElementById('countryCount');
    
    if (tradeValue && sea.economicImportance?.tradeValue) {
        tradeValue.textContent = sea.economicImportance.tradeValue;
    }
    
    if (oilPercent && sea.economicImportance?.percentGlobalOil) {
        oilPercent.textContent = sea.economicImportance.percentGlobalOil + '%';
    } else if (oilPercent) {
        oilPercent.textContent = 'N/A';
    }
    
    if (fishCatch && sea.marineLife?.annualFishCatch) {
        fishCatch.textContent = sea.marineLife.annualFishCatch;
    } else if (fishCatch && sea.economicImportance?.fishing?.annualCatch) {
        fishCatch.textContent = sea.economicImportance.fishing.annualCatch;
    }
    
    if (countryCount && sea.borderingCountries) {
        countryCount.textContent = sea.borderingCountries.length;
    }
}

function updateSeaBackground(sea) {
    const hero = document.getElementById('seaHero');
    const bgImage = document.querySelector('.profile-background .background-image');
    
    if (hero && sea.image) {
        hero.style.backgroundImage = `url(${sea.backgroundImage || sea.image})`;
    }
    
    if (bgImage && sea.backgroundImage) {
        bgImage.style.backgroundImage = `url(${sea.backgroundImage})`;
    }
}

// ═══════════════════════════════════════════════════════════
// MAP FUNCTIONS
// ═══════════════════════════════════════════════════════════

function initializeMap(sea) {
    const mapContainer = document.getElementById('seaMap');
    if (!mapContainer || typeof L === 'undefined') return;
    
    if (SeasApp.map) {
        SeasApp.map.remove();
    }
    
    SeasApp.map = L.map('seaMap', {
        center: sea.coordinates,
        zoom: sea.defaultZoom || 5,
        minZoom: 2,
        maxZoom: 12,
        worldCopyJump: true
    });
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(SeasApp.map);
    
    addSeaLayers(sea);
}

function addSeaLayers(sea) {
    clearMapLayers();
    
    if (SeasApp.layers.tradeRoutes) addTradeRoutesLayer(sea);
    if (SeasApp.layers.chokepoints) addChokepointsLayer(sea);
    if (SeasApp.layers.ports) addPortsLayer(sea);
    if (SeasApp.layers.navalBases) addNavalBasesLayer(sea);
    if (SeasApp.layers.disputes) addDisputesLayer(sea);
    
    // Add currents if available
    if (sea.currents) addCurrentsLayer(sea);
}

function clearMapLayers() {
    SeasApp.markers.forEach(marker => marker.remove());
    SeasApp.markers = [];
    
    SeasApp.polylines.forEach(polyline => polyline.remove());
    SeasApp.polylines = [];
}

function addTradeRoutesLayer(sea) {
    if (!SeasApp.map) return;
    
    // Find relevant trade routes
    const relevantRoutes = globalTradeRoutes.filter(route => {
        const path = route.route?.path || [];
        return path.some(point => isPointInSeaArea(point, sea));
    });
    
    // Also check sea's own trade routes
    if (sea.tradeRoutes) {
        sea.tradeRoutes.forEach(route => {
            addRouteToMap(route, sea);
        });
    }
    
    relevantRoutes.forEach(route => {
        addRouteToMap(route, sea);
    });
}

function addRouteToMap(route, sea) {
    const path = route.route?.path || route.path;
    if (!path || path.length < 2) return;
    
    const routeType = route.type || 'container';
    const colors = {
        'oil': '#FF6B6B',
        'container': '#00B4D8',
        'lng': '#2ECC71',
        'bulk': '#9B59B6',
        'bulk-commodity': '#E67E22'
    };
    
    const color = colors[routeType] || colors['container'];
    
    const latLngs = path.map(p => [p.lat || p[0], p.lng || p[1]]);
    
    const polyline = L.polyline(latLngs, {
        color: color,
        weight: 3,
        opacity: 0.8,
        dashArray: routeType === 'oil' ? null : '10, 5'
    });
    
    polyline.bindPopup(`
        <div style="min-width: 200px;">
            <h4 style="color: ${color}; margin: 0 0 8px 0;">${route.name}</h4>
            <p style="margin: 0 0 8px 0; color: #CAF0F8; font-size: 12px;">
                ${route.statistics?.annualValue || route.statistics?.dailyBarrels || ''}
            </p>
            <span style="color: ${color}; font-size: 11px;">🚢 ${routeType.toUpperCase()}</span>
        </div>
    `);
    
    polyline.addTo(SeasApp.map);
    SeasApp.polylines.push(polyline);
    
    // Add direction arrows
    addRouteArrows(latLngs, color);
}

function addRouteArrows(path, color) {
    for (let i = 1; i < path.length; i += 2) {
        const start = path[i - 1];
        const end = path[i];
        
        const midLat = (start[0] + end[0]) / 2;
        const midLng = (start[1] + end[1]) / 2;
        
        const angle = Math.atan2(end[0] - start[0], end[1] - start[1]) * 180 / Math.PI;
        
        const arrowIcon = L.divIcon({
            className: 'route-arrow',
            html: `<div style="
                transform: rotate(${angle}deg);
                color: ${color};
                font-size: 14px;
                text-shadow: 0 0 5px ${color};
            ">▶</div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        
        const marker = L.marker([midLat, midLng], { 
            icon: arrowIcon,
            interactive: false
        });
        marker.addTo(SeasApp.map);
        SeasApp.markers.push(marker);
    }
}

function addChokepointsLayer(sea) {
    if (!SeasApp.map || !sea.straits) return;
    
    sea.straits.forEach(strait => {
        const cpIcon = L.divIcon({
            className: 'chokepoint-marker',
            html: `<div style="
                background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
                border: 2px solid white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 14px;
                box-shadow: 0 0 15px rgba(255, 107, 107, 0.8);
            ">⚠️</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Try to get coordinates from global chokepoints
        const globalCP = globalChokepoints.find(cp => 
            cp.name.toLowerCase().includes(strait.name.toLowerCase().split(' ')[0])
        );
        
        const coords = globalCP?.location || [sea.coordinates[0], sea.coordinates[1] + 5];
        
        const marker = L.marker(coords, { icon: cpIcon });
        marker.bindPopup(`
            <div style="min-width: 220px;">
                <h4 style="color: #FF6B6B; margin: 0 0 8px 0;">⚠️ ${strait.name}</h4>
                <p style="margin: 0 0 5px 0; color: #CAF0F8; font-size: 12px;">
                    Connects to: ${strait.connectsTo}
                </p>
                <p style="margin: 0 0 5px 0; color: #CAF0F8; font-size: 12px;">
                    Width: ${strait.width} km
                </p>
                ${strait.annualShips ? `<p style="margin: 0; color: #FFD700; font-size: 11px;">🚢 ${formatNumber(strait.annualShips)} ships/year</p>` : ''}
            </div>
        `);
        marker.addTo(SeasApp.map);
        SeasApp.markers.push(marker);
    });
}

function addPortsLayer(sea) {
    if (!SeasApp.map || !sea.economicImportance?.majorPorts) return;
    
    sea.economicImportance.majorPorts.forEach(port => {
        const portIcon = L.divIcon({
            className: 'port-marker',
            html: `<div style="
                background: rgba(0, 180, 216, 0.9);
                border: 2px solid white;
                border-radius: 8px;
                padding: 4px 8px;
                color: white;
                font-size: 11px;
                font-weight: 600;
                white-space: nowrap;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            ">🏗️ ${port.name}</div>`,
            iconSize: [100, 24],
            iconAnchor: [50, 12]
        });
        
        // Approximate port location based on country
        const countryInfo = sea.borderingCountries?.find(c => c.name === port.country);
        const coords = getApproximatePortLocation(port, sea);
        
        const marker = L.marker(coords, { icon: portIcon });
        marker.bindPopup(`
            <div style="min-width: 180px;">
                <h4 style="color: #00B4D8; margin: 0 0 8px 0;">🏗️ ${port.name}</h4>
                <p style="margin: 0 0 5px 0; color: #CAF0F8; font-size: 12px;">${port.country}</p>
                ${port.containers ? `<p style="margin: 0; color: #2ECC71; font-size: 11px;">📦 ${port.containers}</p>` : ''}
                ${port.ranking ? `<p style="margin: 5px 0 0 0; color: #aaa; font-size: 10px;">${port.ranking}</p>` : ''}
            </div>
        `);
        marker.addTo(SeasApp.map);
        SeasApp.markers.push(marker);
    });
}

function addNavalBasesLayer(sea) {
    if (!SeasApp.map) return;
    
    const navalPresences = sea.geopolitics?.navalPresences || sea.geopolitics?.militaryPresence?.regional || [];
    
    navalPresences.forEach(naval => {
        const navalIcon = L.divIcon({
            className: 'naval-marker',
            html: `<div style="
                background: rgba(155, 89, 182, 0.9);
                border: 2px solid white;
                border-radius: 50%;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                box-shadow: 0 0 10px rgba(155, 89, 182, 0.8);
            ">⚓</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });
        
        const coords = getApproximateNavalLocation(naval, sea);
        
        const marker = L.marker(coords, { icon: navalIcon });
        marker.bindPopup(`
            <div style="min-width: 160px;">
                <h4 style="color: #9B59B6; margin: 0 0 8px 0;">⚓ ${naval.country}</h4>
                <p style="margin: 0 0 5px 0; color: #CAF0F8; font-size: 12px;">${naval.base || naval.location}</p>
                <p style="margin: 0; color: #aaa; font-size: 11px;">${naval.purpose || naval.assets}</p>
            </div>
        `);
        marker.addTo(SeasApp.map);
        SeasApp.markers.push(marker);
    });
}

function addDisputesLayer(sea) {
    if (!SeasApp.map || !sea.geopolitics?.territorialDisputes) return;
    
    sea.geopolitics.territorialDisputes.forEach(dispute => {
        const disputeIcon = L.divIcon({
            className: 'dispute-marker',
            html: `<div style="
                background: rgba(231, 76, 60, 0.8);
                border: 2px dashed #fff;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                animation: pulse 2s infinite;
            ">🔴</div>`,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });
        
        // Try to find island coordinates
        const island = sea.islands?.find(i => i.name.toLowerCase().includes(dispute.name.toLowerCase().split(' ')[0]));
        const coords = island?.coordinates || sea.coordinates;
        
        const marker = L.marker(coords, { icon: disputeIcon });
        marker.bindPopup(`
            <div style="min-width: 200px;">
                <h4 style="color: #E74C3C; margin: 0 0 8px 0;">🔴 ${dispute.name}</h4>
                <p style="margin: 0 0 5px 0; color: #CAF0F8; font-size: 12px;">
                    Claimants: ${dispute.claimants?.join(', ') || dispute.claimant}
                </p>
                <p style="margin: 0; color: #aaa; font-size: 11px;">${dispute.status || dispute.basis}</p>
            </div>
        `);
        marker.addTo(SeasApp.map);
        SeasApp.markers.push(marker);
    });
}

function addCurrentsLayer(sea) {
    if (!SeasApp.map || !sea.currents) return;
    
    const addCurrents = (currents, type) => {
        currents.forEach(current => {
            if (!current.path || current.path.length < 2) return;
            
            const color = type === 'warm' ? '#FF6B6B' : '#48CAE4';
            
            const polyline = L.polyline(current.path, {
                color: color,
                weight: 2,
                opacity: 0.6,
                dashArray: '5, 10'
            });
            
            polyline.bindPopup(`
                <div>
                    <h4 style="color: ${color}; margin: 0 0 5px 0;">${current.name}</h4>
                    <p style="margin: 0; color: #CAF0F8; font-size: 12px;">${current.description || current.direction}</p>
                </div>
            `);
            
            polyline.addTo(SeasApp.map);
            SeasApp.polylines.push(polyline);
        });
    };
    
    if (sea.currents.warm) addCurrents(sea.currents.warm, 'warm');
    if (sea.currents.cold) addCurrents(sea.currents.cold, 'cold');
}

// Helper functions for map
function isPointInSeaArea(point, sea) {
    if (!sea.bounds) return false;
    
    const lat = point.lat || point[0];
    const lng = point.lng || point[1];
    
    return lat >= sea.bounds.south && lat <= sea.bounds.north &&
           lng >= sea.bounds.west && lng <= sea.bounds.east;
}

function getApproximatePortLocation(port, sea) {
    // Use sea center with offset based on port index
    const baseCoords = sea.coordinates;
    const index = sea.economicImportance.majorPorts.indexOf(port);
    const offset = (index - 2) * 3;
    return [baseCoords[0] + offset, baseCoords[1] + (index % 2 === 0 ? 5 : -5)];
}

function getApproximateNavalLocation(naval, sea) {
    const baseCoords = sea.coordinates;
    const navalList = sea.geopolitics?.navalPresences || [];
    const index = navalList.indexOf(naval);
    return [baseCoords[0] + index * 2, baseCoords[1] - 5];
}

function setupMapLayers() {
    const checkboxes = document.querySelectorAll('[id^="layer"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const layerName = this.id.replace('layer', '').charAt(0).toLowerCase() + 
                             this.id.replace('layer', '').slice(1);
            
            const layerMap = {
                'tradeRoutes': 'tradeRoutes',
                'chokepoints': 'chokepoints',
                'ports': 'ports',
                'navalBases': 'navalBases',
                'disputes': 'disputes'
            };
            
            const key = layerMap[layerName];
            if (key) {
                SeasApp.layers[key] = this.checked;
                addSeaLayers(SeasApp.currentSea);
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════
// DATA POPULATION FUNCTIONS
// ═══════════════════════════════════════════════════════════

function populateMindMap(sea) {
    populateDimensions(sea);
    populateDepth(sea);
    populateLocation(sea);
    populateStraits(sea);
    populateCurrents(sea);
    populateTectonic(sea);
    populateMarine(sea);
    populateClimate(sea);
    populateEconomic(sea);
    populateEnvironmental(sea);
    populateExploration(sea);
    populateGeopolitics(sea);
}

function populateDimensions(sea) {
    const container = document.getElementById('dimensionsData');
    if (!container) return;
    
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Total Area</span>
            <span class="data-value">${formatNumber(sea.area)} km²</span>
        </div>
        ${sea.percentEarthSurface ? `
        <div class="data-item">
            <span class="data-label">% of Earth's Surface</span>
            <span class="data-value">${sea.percentEarthSurface}%</span>
        </div>` : ''}
        ${sea.length ? `
        <div class="data-item">
            <span class="data-label">Length</span>
            <span class="data-value">${formatNumber(sea.length)} km</span>
        </div>` : ''}
        ${sea.width ? `
        <div class="data-item">
            <span class="data-label">Width</span>
            <span class="data-value">${formatNumber(sea.width)} km</span>
        </div>` : ''}
        ${sea.coastlineLength ? `
        <div class="data-item">
            <span class="data-label">Total Coastline</span>
            <span class="data-value">${formatNumber(sea.coastlineLength)} km</span>
        </div>` : ''}
        ${sea.volume ? `
        <div class="data-item">
            <span class="data-label">Volume</span>
            <span class="data-value">${sea.volume}</span>
        </div>` : ''}
    `;
}

function populateDepth(sea) {
    const container = document.getElementById('depthData');
    if (!container) return;
    
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Average Depth</span>
            <span class="data-value">${formatNumber(sea.avgDepth)} m</span>
        </div>
        <div class="data-item">
            <span class="data-label">Maximum Depth</span>
            <span class="data-value">${formatNumber(sea.maxDepth)} m</span>
        </div>
        ${sea.deepestPoint ? `
        <div class="data-item" style="grid-column: 1 / -1;">
            <span class="data-label">Deepest Point</span>
            <span class="data-value">${sea.deepestPoint.name}</span>
        </div>` : ''}
    `;
}

function populateLocation(sea) {
    const container = document.getElementById('locationData');
    if (!container) return;
    
    const countries = sea.borderingCountries?.map(c => c.name).join(', ') || 'N/A';
    
    container.innerHTML = `
        <div class="data-item" style="grid-column: 1 / -1;">
            <span class="data-label">Bordering Countries</span>
            <span class="data-value">${countries}</span>
        </div>
        <div class="data-item">
            <span class="data-label">Center Coordinates</span>
            <span class="data-value">${sea.coordinates[0]}°, ${sea.coordinates[1]}°</span>
        </div>
        <div class="data-item">
            <span class="data-label">Parent Ocean</span>
            <span class="data-value">${sea.parentOcean}</span>
        </div>
    `;
}

function populateStraits(sea) {
    const container = document.getElementById('straitsData');
    if (!container || !sea.straits) return;
    
    container.innerHTML = sea.straits.map(strait => `
        <div class="info-item">
            <span class="info-item-label">🌊 ${strait.name}</span>
            <span class="info-item-value">
                Connects to: ${strait.connectsTo}<br>
                Width: ${strait.width} km<br>
                ${strait.importance ? `Importance: ${strait.importance}` : ''}
                ${strait.annualShips ? `<br>Ships/Year: ${formatNumber(strait.annualShips)}` : ''}
            </span>
        </div>
    `).join('');
}

function populateCurrents(sea) {
    const container = document.getElementById('currentsData');
    if (!container) return;
    
    if (!sea.currents) {
        container.innerHTML = '<p style="color: var(--text-muted);">No current data available</p>';
        return;
    }
    
    let html = '';
    
    if (sea.currents.warm?.length) {
        html += `
            <div class="currents-group">
                <h4 class="currents-group-title warm">🌡️ Warm Currents</h4>
                ${sea.currents.warm.map(c => `
                    <div class="current-item">
                        <span class="current-dot warm"></span>
                        <span>${c.name} - ${c.direction || c.description}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (sea.currents.cold?.length) {
        html += `
            <div class="currents-group">
                <h4 class="currents-group-title cold">❄️ Cold Currents</h4>
                ${sea.currents.cold.map(c => `
                    <div class="current-item">
                        <span class="current-dot cold"></span>
                        <span>${c.name} - ${c.direction || c.description}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    if (sea.currents.monsoonInfluence) {
        html += `<p style="margin-top: 10px; color: var(--text-muted); font-size: 0.9rem;">${sea.currents.monsoonInfluence}</p>`;
    }
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No current data available</p>';
}

function populateTectonic(sea) {
    const container = document.getElementById('tectonicData');
    if (!container) return;
    
    if (!sea.tectonicFeatures) {
        container.innerHTML = '<p style="color: var(--text-muted);">No tectonic data available</p>';
        return;
    }
    
    let html = '';
    const tf = sea.tectonicFeatures;
    
    if (tf.plates?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🗺️ Tectonic Plates</span>
                <span class="info-item-value">${tf.plates.join(', ')}</span>
            </div>
        `;
    }
    
    if (tf.seismicActivity) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌋 Seismic Activity</span>
                <span class="info-item-value">${tf.seismicActivity}</span>
            </div>
        `;
    }
    
    if (tf.basins?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label">📍 Major Basins</span>
                <span class="info-item-value">${tf.basins.map(b => `${b.name} (${formatNumber(b.depth)}m)`).join(', ')}</span>
            </div>
        `;
    }
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No tectonic data available</p>';
}

function populateMarine(sea) {
    const container = document.getElementById('marineData');
    if (!container) return;
    
    if (!sea.marineLife) {
        container.innerHTML = '<p style="color: var(--text-muted);">No marine life data available</p>';
        return;
    }
    
    const ml = sea.marineLife;
    let html = '';
    
    if (ml.biodiversityLevel) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌿 Biodiversity Level</span>
                <span class="info-item-value">${ml.biodiversityLevel}</span>
            </div>
        `;
    }
    
    if (ml.totalSpecies || ml.fishSpecies) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🐠 Species Count</span>
                <span class="info-item-value">
                    ${ml.totalSpecies ? `Total: ${formatNumber(ml.totalSpecies)}` : ''}
                    ${ml.fishSpecies ? ` | Fish: ${formatNumber(ml.fishSpecies)}` : ''}
                </span>
            </div>
        `;
    }
    
    if (ml.keySpecies?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🦈 Key Species</span>
                <span class="info-item-value">${ml.keySpecies.slice(0, 8).join(', ')}</span>
            </div>
        `;
    }
    
    if (ml.endangeredSpecies?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label" style="color: #FF6B6B;">⚠️ Endangered Species</span>
                <span class="info-item-value">${ml.endangeredSpecies.join(', ')}</span>
            </div>
        `;
    }
    
    if (ml.coralReefs?.length || ml.coralSpecies) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🪸 Coral Reefs</span>
                <span class="info-item-value">
                    ${ml.coralSpecies ? `${ml.coralSpecies} species` : ''}
                    ${ml.coralReefs?.map(r => r.name).join(', ') || ''}
                </span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateClimate(sea) {
    const container = document.getElementById('climateData');
    if (!container) return;
    
    if (!sea.climateRole) {
        container.innerHTML = '<p style="color: var(--text-muted);">No climate data available</p>';
        return;
    }
    
    const cr = sea.climateRole;
    let html = '';
    
    if (cr.seaSurfaceTemp) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌡️ Sea Surface Temperature</span>
                <span class="info-item-value">${cr.seaSurfaceTemp.min}°C to ${cr.seaSurfaceTemp.max}°C</span>
            </div>
        `;
    }
    
    if (cr.typhoons) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌀 Typhoons</span>
                <span class="info-item-value">
                    Average: ${cr.typhoons.annualAverage}/year<br>
                    Season: ${cr.typhoons.season}
                </span>
            </div>
        `;
    }
    
    if (cr.monsoonInfluence?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌧️ Monsoon Influence</span>
                <span class="info-item-value">
                    ${cr.monsoonInfluence.map(m => `${m.season}: ${m.wind}`).join('<br>')}
                </span>
            </div>
        `;
    }
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No climate data available</p>';
}

function populateEconomic(sea) {
    const container = document.getElementById('economicData');
    if (!container) return;
    
    if (!sea.economicImportance) {
        container.innerHTML = '<p style="color: var(--text-muted);">No economic data available</p>';
        return;
    }
    
    const ei = sea.economicImportance;
    let html = '';
    
    if (ei.overview) {
        html += `
            <div class="info-item" style="grid-column: 1 / -1;">
                <span class="info-item-label">📊 Overview</span>
                <span class="info-item-value">${ei.overview}</span>
            </div>
        `;
    }
    
    if (ei.tradeValue) {
        html += `
            <div class="info-item">
                <span class="info-item-label">💰 Trade Value</span>
                <span class="info-item-value">${ei.tradeValue}</span>
            </div>
        `;
    }
    
    if (ei.percentGlobalTrade) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🌍 % Global Trade</span>
                <span class="info-item-value">${ei.percentGlobalTrade}%</span>
            </div>
        `;
    }
    
    if (ei.fishing) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🐟 Fishing Industry</span>
                <span class="info-item-value">
                    ${ei.fishing.annualCatch || ''} 
                    ${ei.fishing.value ? `($${ei.fishing.value})` : ''}
                </span>
            </div>
        `;
    }
    
    if (ei.oilAndGas) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🛢️ Oil & Gas</span>
                <span class="info-item-value">${ei.oilAndGas.provenOilReserves || ei.oilAndGas.reserves || 'Significant reserves'}</span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateEnvironmental(sea) {
    const container = document.getElementById('environmentalData');
    if (!container) return;
    
    if (!sea.environmentalIssues) {
        container.innerHTML = '<p style="color: var(--text-muted);">No environmental data available</p>';
        return;
    }
    
    const ei = sea.environmentalIssues;
    let html = '';
    
    if (ei.overallHealth) {
        html += `
            <div class="info-item" style="border-left-color: #FF6B6B;">
                <span class="info-item-label" style="color: #FF6B6B;">⚠️ Overall Health</span>
                <span class="info-item-value">${ei.overallHealth}</span>
            </div>
        `;
    }
    
    const issues = ['overfishing', 'coralDestruction', 'pollution', 'climateChange', 'plasticPollution', 'deadZone'];
    
    issues.forEach(issue => {
        if (ei[issue]) {
            const data = typeof ei[issue] === 'object' ? ei[issue] : { description: ei[issue] };
            html += `
                <div class="info-item" style="border-left-color: #FF6B6B;">
                    <span class="info-item-label">${issue.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span class="info-item-value">
                        ${data.severity ? `Severity: ${data.severity}<br>` : ''}
                        ${data.description || (typeof ei[issue] === 'string' ? ei[issue] : JSON.stringify(data))}
                    </span>
                </div>
            `;
        }
    });
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No environmental data available</p>';
}

function populateExploration(sea) {
    const container = document.getElementById('explorationData');
    if (!container) return;
    
    if (!sea.exploration) {
        container.innerHTML = '<p style="color: var(--text-muted);">No exploration data available</p>';
        return;
    }
    
    let html = '';
    
    if (sea.exploration.historicExpeditions?.length) {
        html += sea.exploration.historicExpeditions.map(exp => `
            <div class="info-item">
                <span class="info-item-label">📜 ${exp.name} (${exp.year})</span>
                <span class="info-item-value">${exp.achievement}</span>
            </div>
        `).join('');
    }
    
    if (sea.exploration.discoveries?.length) {
        html += `
            <div class="info-item">
                <span class="info-item-label">🔬 Recent Discoveries</span>
                <span class="info-item-value">${sea.exploration.discoveries.join(', ')}</span>
            </div>
        `;
    }
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No exploration data available</p>';
}

function populateGeopolitics(sea) {
    const container = document.getElementById('geopoliticsData');
    if (!container) return;
    
    if (!sea.geopolitics) {
        container.innerHTML = '<p style="color: var(--text-muted);">No geopolitical data available</p>';
        return;
    }
    
    let html = '';
    const gp = sea.geopolitics;
    
    if (gp.overview) {
        html += `
            <div class="info-item" style="grid-column: 1 / -1;">
                <span class="info-item-label">📋 Overview</span>
                <span class="info-item-value" style="font-size: 0.9rem; line-height: 1.6;">${gp.overview}</span>
            </div>
        `;
    }
    
    if (gp.conflictLevel) {
        html += `
            <div class="info-item">
                <span class="info-item-label" style="color: #FF6B6B;">⚔️ Conflict Level</span>
                <span class="info-item-value">${gp.conflictLevel}</span>
            </div>
        `;
    }
    
    container.innerHTML = html || '<p style="color: var(--text-muted);">No geopolitical data available</p>';
}

// ═══════════════════════════════════════════════════════════
// TRADE ROUTES, CHOKEPOINTS, COUNTRIES SECTIONS
// ═══════════════════════════════════════════════════════════

function populateTradeRoutes(sea) {
    const container = document.getElementById('tradeRoutesContainer');
    if (!container) return;
    
    // Get relevant routes
    let routes = sea.tradeRoutes || [];
    
    // Also find global routes that pass through this sea
    const globalRoutes = globalTradeRoutes.filter(route => {
        if (route.chokepoints) {
            return route.chokepoints.some(cp => 
                sea.straits?.some(s => s.name.toLowerCase().includes(cp.name?.toLowerCase().split(' ')[0]))
            );
        }
        return false;
    });
    
    routes = [...routes, ...globalRoutes.slice(0, 3)];
    
    if (routes.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">No trade route data available</p>';
        return;
    }
    
    container.innerHTML = routes.map(route => {
        const stats = route.statistics || {};
        const routeType = route.type || 'container';
        
        return `
            <div class="trade-route-card">
                <div class="route-header">
                    <span class="route-name">${route.name}</span>
                    <span class="route-type ${routeType.split('-')[0]}">${routeType}</span>
                </div>
                <div class="route-stats">
                    ${stats.annualValue ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${stats.annualValue}</span>
                            <span class="route-stat-label">Annual Value</span>
                        </div>
                    ` : ''}
                    ${stats.dailyBarrels ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${formatNumber(stats.dailyBarrels)}</span>
                            <span class="route-stat-label">Barrels/Day</span>
                        </div>
                    ` : ''}
                    ${stats.annualVolume ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${stats.annualVolume}</span>
                            <span class="route-stat-label">Volume</span>
                        </div>
                    ` : ''}
                    ${stats.ships ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${stats.ships}</span>
                            <span class="route-stat-label">Ships</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function populateChokepoints(sea) {
    const container = document.getElementById('chokepointsContainer');
    if (!container || !sea.straits) return;
    
    container.innerHTML = sea.straits.map(strait => {
        const globalCP = globalChokepoints.find(cp => 
            cp.name.toLowerCase().includes(strait.name.toLowerCase().split(' ')[0])
        );
        
        const risks = globalCP?.risks || [];
        
        return `
            <div class="chokepoint-card">
                <div class="chokepoint-name">
                    <span>⚠️</span>
                    <span>${strait.name}</span>
                </div>
                <div class="chokepoint-stats">
                    <div class="cp-stat">
                        <span class="cp-stat-value">${strait.width} km</span>
                        <span class="cp-stat-label">Width</span>
                    </div>
                    ${strait.annualShips ? `
                        <div class="cp-stat">
                            <span class="cp-stat-value">${formatNumber(strait.annualShips)}</span>
                            <span class="cp-stat-label">Ships/Year</span>
                        </div>
                    ` : ''}
                    ${globalCP?.traffic?.dailyOilBarrels ? `
                        <div class="cp-stat">
                            <span class="cp-stat-value">${(globalCP.traffic.dailyOilBarrels / 1000000).toFixed(1)}M</span>
                            <span class="cp-stat-label">Barrels/Day</span>
                        </div>
                    ` : ''}
                </div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin: 10px 0 0 0;">${strait.importance}</p>
                ${risks.length ? `
                    <div class="risk-list">
                        ${risks.slice(0, 4).map(risk => `<span class="risk-tag">${risk}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function populateCountryImportance(sea) {
    const container = document.getElementById('countryImportanceContainer');
    if (!container || !sea.geopolitics?.countryImportance) return;
    
    const countries = sea.geopolitics.countryImportance;
    const countryFlags = {
        'china': '🇨🇳',
        'usa': '🇺🇸',
        'unitedStates': '🇺🇸',
        'japan': '🇯🇵',
        'vietnam': '🇻🇳',
        'philippines': '🇵🇭',
        'taiwan': '🇹🇼',
        'india': '🇮🇳',
        'russia': '🇷🇺',
        'uk': '🇬🇧',
        'france': '🇫🇷',
        'germany': '🇩🇪'
    };
    
    container.innerHTML = Object.entries(countries).map(([key, data]) => {
        const flag = countryFlags[key] || '🏳️';
        const name = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        
        return `
            <div class="country-card">
                <div class="country-header">
                    <span class="country-flag">${flag}</span>
                    <span class="country-name">${name}</span>
                    <span class="importance-level ${data.importance?.toLowerCase().replace(' ', '-')}">${data.importance}</span>
                </div>
                <ul class="country-reasons">
                    ${data.reasons?.map(r => `<li>${r}</li>`).join('') || ''}
                </ul>
                ${data.strategy ? `<p style="color: var(--accent-cyan); font-size: 0.85rem; margin-top: 10px;"><strong>Strategy:</strong> ${data.strategy}</p>` : ''}
            </div>
        `;
    }).join('');
}

function populateGeopoliticalIssues(sea) {
    const container = document.getElementById('issuesContainer');
    if (!container) return;
    
    const issues = sea.geopolitics?.issues || sea.geopolitics?.territorialDisputes || [];
    
    if (issues.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">No current issues data available</p>';
        return;
    }
    
    container.innerHTML = issues.slice(0, 6).map(issue => {
        const parties = issue.parties || issue.claimants || [];
        
        return `
            <div class="issue-card">
                <div class="issue-name">${issue.name}</div>
                ${parties.length ? `
                    <div class="issue-parties">
                        ${parties.map(p => `<span class="party-tag">${typeof p === 'string' ? p : p.name || p}</span>`).join('')}
                    </div>
                ` : ''}
                <p class="issue-description">${issue.description || issue.status || issue.basis || ''}</p>
            </div>
        `;
    }).join('');
}

function populateNavalPresence(sea) {
    const container = document.getElementById('navalContainer');
    if (!container) return;
    
    const naval = sea.geopolitics?.navalPresences || 
                  sea.geopolitics?.militaryPresence?.regional || 
                  sea.geopolitics?.navalBases ||
                  [];
    
    if (naval.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">No naval presence data available</p>';
        return;
    }
    
    container.innerHTML = naval.map(n => `
        <div class="naval-card">
            <div class="naval-country">${n.country}</div>
            <div class="naval-base">${n.base || n.location || 'Various'}</div>
            <div class="naval-purpose">${n.purpose || n.assets || ''}</div>
        </div>
    `).join('');
}

function populateFunFacts(sea) {
    const container = document.getElementById('funFactsContainer');
    if (!container || !sea.funFacts) return;
    
    container.innerHTML = sea.funFacts.map(fact => `
        <div class="fun-fact-card">
            <p class="fun-fact-text">${fact}</p>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════
// QUICK FACTS & NAVIGATION
// ═══════════════════════════════════════════════════════════

function setupQuickFacts(sea) {
    const panel = document.getElementById('quickFactsPanel');
    const toggle = document.getElementById('qfToggle');
    
    if (!panel) return;
    
    const qfArea = document.getElementById('qfArea');
    const qfDepth = document.getElementById('qfDepth');
    const qfTrade = document.getElementById('qfTrade');
    const qfShips = document.getElementById('qfShips');
    const qfRisk = document.getElementById('qfRisk');
    
    if (qfArea) qfArea.textContent = (sea.area / 1000000).toFixed(1) + 'M km²';
    if (qfDepth) qfDepth.textContent = formatNumber(sea.maxDepth) + 'm';
    if (qfTrade) qfTrade.textContent = sea.economicImportance?.tradeValue || 'N/A';
    if (qfShips) qfShips.textContent = sea.straits?.[0]?.annualShips ? formatNumber(sea.straits[0].annualShips) : 'N/A';
    if (qfRisk) qfRisk.textContent = sea.geopolitics?.conflictLevel?.split(' ')[0] || 'Medium';
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
        });
    }
}

function setupSeaNavigation(currentSea) {
    const prevBtn = document.getElementById('prevSea');
    const nextBtn = document.getElementById('nextSea');
    const prevName = document.getElementById('prevSeaName');
    const nextName = document.getElementById('nextSeaName');
    
    const currentIndex = seasData.findIndex(s => s.id === currentSea.id);
    const prevIndex = (currentIndex - 1 + seasData.length) % seasData.length;
    const nextIndex = (currentIndex + 1) % seasData.length;
    
    const prevSea = seasData[prevIndex];
    const nextSea = seasData[nextIndex];
    
    if (prevName) prevName.textContent = prevSea.name;
    if (nextName) nextName.textContent = nextSea.name;
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            window.location.href = `seas-profile.html?id=${prevSea.id}`;
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.location.href = `seas-profile.html?id=${nextSea.id}`;
        });
    }
    
    // Create nav dots
    const navDots = document.getElementById('navDots');
    if (navDots) {
        navDots.innerHTML = seasData.slice(0, 10).map((sea, i) => `
            <span class="nav-dot ${sea.id === currentSea.id ? 'active' : ''}" 
                  data-sea="${sea.id}" 
                  title="${sea.name}"></span>
        `).join('');
        
        navDots.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                window.location.href = `seas-profile.html?id=${dot.dataset.sea}`;
            });
        });
    }
}

function setupTreeNodes() {
    const nodes = document.querySelectorAll('.tree-node');
    
    nodes.forEach(node => {
        const header = node.querySelector('.node-header');
        if (header) {
            header.addEventListener('click', () => {
                node.classList.toggle('expanded');
            });
        }
    });
}

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Export for global access
window.SeasApp = SeasApp;
window.initSeaProfile = initSeaProfile;
