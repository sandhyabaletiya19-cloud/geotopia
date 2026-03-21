/* ═══════════════════════════════════════════════════════════
   🌊 SEAS PROFILE APP - FIXED VERSION
   Properly maps data from seas-data.js to the profile page
   ═══════════════════════════════════════════════════════════ */

// Get sea ID from URL
const urlParams = new URLSearchParams(window.location.search);
const seaId = urlParams.get('id');

let currentSea = null;
let seaMap = null;
let currentSeaIndex = 0;

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
        progressValue += Math.random() * 15;
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
        container.appendChild(bubble);
    }
}

function initSeaProfile() {
    if (!seaId) {
        window.location.href = 'seas.html';
        return;
    }
    
    // Find sea in data
    currentSea = seasData.find(sea => sea.id === seaId);
    currentSeaIndex = seasData.findIndex(sea => sea.id === seaId);
    
    if (!currentSea) {
        alert('Sea not found!');
        window.location.href = 'seas.html';
        return;
    }
    
    console.log('Loading sea:', currentSea.name);
    console.log('Sea data:', currentSea);
    
    // Render all sections
    renderHero();
    renderQuickStats();
    renderDimensions();
    renderDepth();
    renderLocation();
    renderStraits();
    renderCurrents();
    renderTectonics();
    renderMarineLife();
    renderClimate();
    renderEconomic();
    renderEnvironmental();
    renderExploration();
    renderGeopolitics();
    renderTradeRoutes();
    renderChokepoints();
    renderCountryImportance();
    renderIssues();
    renderNavalPresence();
    renderFunFacts();
    renderNavigation();
    initMap();
    setupTreeToggles();
    setupQuickFactsPanel();
}

// ═══════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════

function renderHero() {
    // Title
    document.getElementById('seaTitle').textContent = currentSea.name;
    document.title = `${currentSea.name} | Seas Explorer`;
    
    // Parent Ocean
    const parentOceanEl = document.getElementById('seaParentOcean');
    parentOceanEl.querySelector('span').textContent = currentSea.parentOcean;
    parentOceanEl.href = `oceans-profile.html?id=${currentSea.parentOceanId}`;
    
    // Area & Depth
    document.getElementById('seaArea').textContent = formatNumber(currentSea.area) + ' km²';
    document.getElementById('seaDepth').textContent = `Max: ${formatNumber(currentSea.maxDepth)}m`;
    
    // Strategic Badge
    const badge = document.getElementById('strategicBadge');
    const importance = currentSea.geopolitics?.strategicImportance || 'Moderate';
    badge.textContent = importance + ' Strategic Importance';
    badge.className = 'strategic-badge ' + importance.toLowerCase().replace(' ', '-');
    
    // Background Image
    const hero = document.getElementById('seaHero');
    if (currentSea.backgroundImage || currentSea.image) {
        hero.style.backgroundImage = `url('${currentSea.backgroundImage || currentSea.image}')`;
    }
    
    // Profile Background
    const profileBg = document.getElementById('profileBackground');
    if (profileBg) {
        const bgImage = profileBg.querySelector('.background-image');
        if (bgImage) {
            bgImage.style.backgroundImage = `url('${currentSea.backgroundImage || currentSea.image}')`;
        }
    }
}

// ═══════════════════════════════════════════════════════════
// QUICK STATS BAR
// ═══════════════════════════════════════════════════════════

function renderQuickStats() {
    // Trade Value
    const tradeValue = currentSea.economicImportance?.tradeValue || 'N/A';
    document.getElementById('tradeValue').textContent = tradeValue;
    
    // Oil Percent
    const oilPercent = currentSea.economicImportance?.shipping?.oilTransit || 
                       currentSea.economicImportance?.percentGlobalTrade || 'N/A';
    document.getElementById('oilPercent').textContent = typeof oilPercent === 'number' ? oilPercent + '%' : oilPercent;
    
    // Fish Catch
    const fishCatch = currentSea.economicImportance?.fishing?.annualCatch || 
                      currentSea.resources?.fishing?.annualCatch || 'N/A';
    document.getElementById('fishCatch').textContent = fishCatch;
    
    // Country Count
    const countryCount = currentSea.borderingCountries?.length || 0;
    document.getElementById('countryCount').textContent = countryCount;
    
    // Quick Facts Panel
    document.getElementById('qfArea').textContent = formatNumber(currentSea.area) + ' km²';
    document.getElementById('qfDepth').textContent = formatNumber(currentSea.maxDepth) + 'm';
    document.getElementById('qfTrade').textContent = tradeValue;
    document.getElementById('qfShips').textContent = getAnnualShips();
    document.getElementById('qfRisk').textContent = currentSea.geopolitics?.conflictLevel || 'Low';
}

function getAnnualShips() {
    let total = 0;
    if (currentSea.straits) {
        currentSea.straits.forEach(strait => {
            if (strait.annualShips) total += strait.annualShips;
        });
    }
    return total > 0 ? formatNumber(total) : 'N/A';
}

// ═══════════════════════════════════════════════════════════
// TREE NODE SECTIONS
// ═══════════════════════════════════════════════════════════

function renderDimensions() {
    const container = document.getElementById('dimensionsData');
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Total Area</span>
            <span class="data-value">${formatNumber(currentSea.area)} km²</span>
        </div>
        <div class="data-item">
            <span class="data-label">Volume</span>
            <span class="data-value">${currentSea.volume || 'N/A'}</span>
        </div>
    `;
}

function renderDepth() {
    const container = document.getElementById('depthData');
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Average Depth</span>
            <span class="data-value">${formatNumber(currentSea.avgDepth)} m</span>
        </div>
        <div class="data-item">
            <span class="data-label">Maximum Depth</span>
            <span class="data-value">${formatNumber(currentSea.maxDepth)} m</span>
        </div>
    `;
}

function renderLocation() {
    const container = document.getElementById('locationData');
    const countries = currentSea.borderingCountries?.map(c => c.name).join(', ') || 'N/A';
    const coords = currentSea.coordinates || [0, 0];
    
    container.innerHTML = `
        <div class="data-item">
            <span class="data-label">Bordering Countries</span>
            <span class="data-value">${countries}</span>
        </div>
        <div class="data-item">
            <span class="data-label">Center Coordinates</span>
            <span class="data-value">${coords[0]}°, ${coords[1]}°</span>
        </div>
        <div class="data-item">
            <span class="data-label">Parent Ocean</span>
            <span class="data-value">${currentSea.parentOcean}</span>
        </div>
    `;
}

function renderStraits() {
    const container = document.getElementById('straitsData');
    
    if (!currentSea.straits || currentSea.straits.length === 0) {
        container.innerHTML = '<p class="no-data">No strait data available</p>';
        return;
    }
    
    container.innerHTML = currentSea.straits.map(strait => `
        <div class="strait-card" style="background: rgba(0,0,0,0.3); padding: var(--spacing-md); border-radius: var(--radius-md); margin-bottom: var(--spacing-sm); border-left: 3px solid var(--accent-cyan);">
            <div style="font-weight: 600; color: var(--accent-cyan); margin-bottom: var(--spacing-xs);">
                🌊 ${strait.name}
            </div>
            <div style="color: var(--text-muted); font-size: 0.9rem;">
                ${strait.connectsTo ? `<div>Connects to: ${strait.connectsTo}</div>` : ''}
                ${strait.width ? `<div>Width: ${strait.width} km</div>` : ''}
                ${strait.annualShips ? `<div>Ships/Year: ${formatNumber(strait.annualShips)}</div>` : ''}
                ${strait.significance ? `<div style="margin-top: var(--spacing-xs); color: var(--text-light);">${strait.significance}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function renderCurrents() {
    const container = document.getElementById('currentsData');
    const currents = currentSea.environment?.currents;
    
    if (!currents) {
        container.innerHTML = '<p class="no-data">No current data available</p>';
        return;
    }
    
    if (typeof currents === 'object') {
        container.innerHTML = Object.entries(currents).map(([key, value]) => `
            <div class="data-item">
                <span class="data-label">${formatKey(key)}</span>
                <span class="data-value">${value}</span>
            </div>
        `).join('');
    } else {
        container.innerHTML = `<p>${currents}</p>`;
    }
}

function renderTectonics() {
    const container = document.getElementById('tectonicData');
    const tectonic = currentSea.tectonicFeatures || currentSea.geology;
    
    if (!tectonic) {
        container.innerHTML = '<p class="no-data">No tectonic data available</p>';
        return;
    }
    
    if (typeof tectonic === 'object') {
        container.innerHTML = Object.entries(tectonic).map(([key, value]) => `
            <div class="data-item">
                <span class="data-label">${formatKey(key)}</span>
                <span class="data-value">${Array.isArray(value) ? value.join(', ') : value}</span>
            </div>
        `).join('');
    } else {
        container.innerHTML = `<p>${tectonic}</p>`;
    }
}

function renderMarineLife() {
    const container = document.getElementById('marineData');
    const biodiversity = currentSea.environment?.biodiversity;
    
    if (!biodiversity) {
        container.innerHTML = '<p class="no-data">No marine life data available</p>';
        return;
    }
    
    let html = '';
    
    if (biodiversity.marineSpecies) {
        html += `<div class="data-item"><span class="data-label">Marine Species</span><span class="data-value">${formatNumber(biodiversity.marineSpecies)}</span></div>`;
    }
    if (biodiversity.fishSpecies) {
        html += `<div class="data-item"><span class="data-label">Fish Species</span><span class="data-value">${formatNumber(biodiversity.fishSpecies)}</span></div>`;
    }
    if (biodiversity.coralReefs) {
        html += `<div class="data-item"><span class="data-label">Coral Reefs</span><span class="data-value">${biodiversity.coralReefs}</span></div>`;
    }
    if (biodiversity.coralSpecies) {
        html += `<div class="data-item"><span class="data-label">Coral Species</span><span class="data-value">${biodiversity.coralSpecies}</span></div>`;
    }
    if (biodiversity.marineAnimals && Array.isArray(biodiversity.marineAnimals)) {
        html += `<div class="data-item"><span class="data-label">Notable Wildlife</span><span class="data-value">${biodiversity.marineAnimals.join(', ')}</span></div>`;
    }
    if (biodiversity.threats) {
        html += `<div class="data-item"><span class="data-label">Threats</span><span class="data-value" style="color: #FF6B6B;">${biodiversity.threats}</span></div>`;
    }
    
    container.innerHTML = html || '<p class="no-data">No marine life data available</p>';
}

function renderClimate() {
    const container = document.getElementById('climateData');
    const env = currentSea.environment;
    
    if (!env) {
        container.innerHTML = '<p class="no-data">No climate data available</p>';
        return;
    }
    
    let html = '';
    
    if (env.climate) {
        html += `<div class="data-item"><span class="data-label">Climate Type</span><span class="data-value">${env.climate}</span></div>`;
    }
    if (env.waterTemp) {
        html += `<div class="data-item"><span class="data-label">Water Temperature</span><span class="data-value">${env.waterTemp}</span></div>`;
    }
    if (env.salinity) {
        html += `<div class="data-item"><span class="data-label">Salinity</span><span class="data-value">${env.salinity}</span></div>`;
    }
    if (env.typhoons) {
        if (env.typhoons.season) {
            html += `<div class="data-item"><span class="data-label">Typhoon Season</span><span class="data-value">${env.typhoons.season}</span></div>`;
        }
        if (env.typhoons.annualAverage) {
            html += `<div class="data-item"><span class="data-label">Annual Typhoons</span><span class="data-value">${env.typhoons.annualAverage}</span></div>`;
        }
    }
    if (env.seaLevelRise) {
        if (env.seaLevelRise.rate) {
            html += `<div class="data-item"><span class="data-label">Sea Level Rise</span><span class="data-value">${env.seaLevelRise.rate}</span></div>`;
        }
    }
    
    container.innerHTML = html || '<p class="no-data">No climate data available</p>';
}

function renderEconomic() {
    const container = document.getElementById('economicData');
    const econ = currentSea.economicImportance;
    
    if (!econ) {
        container.innerHTML = '<p class="no-data">No economic data available</p>';
        return;
    }
    
    let html = '<div class="data-grid">';
    
    if (econ.overview) {
        html += `<div class="data-item" style="grid-column: 1 / -1;"><span class="data-label">📊 Overview</span><span class="data-value">${econ.overview}</span></div>`;
    }
    if (econ.tradeValue) {
        html += `<div class="data-item"><span class="data-label">💰 Annual Trade</span><span class="data-value" style="color: var(--shipping-gold);">${econ.tradeValue}</span></div>`;
    }
    if (econ.percentGlobalTrade) {
        html += `<div class="data-item"><span class="data-label">🌍 Global Trade %</span><span class="data-value">${econ.percentGlobalTrade}%</span></div>`;
    }
    if (econ.percentAsianTrade) {
        html += `<div class="data-item"><span class="data-label">🌏 Asian Trade %</span><span class="data-value">${econ.percentAsianTrade}%</span></div>`;
    }
    
    // Fishing
    if (econ.fishing) {
        html += `<div class="data-item"><span class="data-label">🐟 Fish Catch</span><span class="data-value">${econ.fishing.annualCatch || econ.fishing.value || 'N/A'}</span></div>`;
        if (econ.fishing.livelihoods) {
            html += `<div class="data-item"><span class="data-label">👥 Fishing Jobs</span><span class="data-value">${econ.fishing.livelihoods}</span></div>`;
        }
    }
    
    // Tourism
    if (econ.tourism) {
        if (econ.tourism.value) {
            html += `<div class="data-item"><span class="data-label">🏖️ Tourism Value</span><span class="data-value">${econ.tourism.value}</span></div>`;
        }
    }
    
    html += '</div>';
    
    // Major Ports
    if (econ.majorPorts && econ.majorPorts.length > 0) {
        html += `<h4 style="margin-top: var(--spacing-md); color: var(--accent-cyan);">🏗️ Major Ports</h4>`;
        html += `<div style="display: flex; flex-wrap: wrap; gap: var(--spacing-xs); margin-top: var(--spacing-sm);">`;
        econ.majorPorts.forEach(port => {
            html += `<span style="background: rgba(0,180,216,0.2); padding: 4px 12px; border-radius: var(--radius-sm); font-size: 0.85rem;">
                ${port.name} ${port.ranking ? `(${port.ranking})` : ''}
            </span>`;
        });
        html += `</div>`;
    }
    
    container.innerHTML = html;
}

function renderEnvironmental() {
    const container = document.getElementById('environmentalData');
    const env = currentSea.environment;
    
    if (!env) {
        container.innerHTML = '<p class="no-data">No environmental data available</p>';
        return;
    }
    
    let html = '';
    
    // Pollution
    if (env.pollution) {
        html += `<h4 style="color: #FF6B6B; margin-bottom: var(--spacing-sm);">⚠️ Pollution Issues</h4>`;
        if (env.pollution.plastic) {
            html += `<div class="data-item"><span class="data-label">Plastic Pollution</span><span class="data-value">${env.pollution.plastic}</span></div>`;
        }
        if (env.pollution.overfishing) {
            html += `<div class="data-item"><span class="data-label">Overfishing</span><span class="data-value">${env.pollution.overfishing}</span></div>`;
        }
        if (env.pollution.chemicalPollution) {
            html += `<div class="data-item"><span class="data-label">Chemical Pollution</span><span class="data-value">${env.pollution.chemicalPollution}</span></div>`;
        }
        if (env.pollution.dredging) {
            html += `<div class="data-item"><span class="data-label">Dredging Impact</span><span class="data-value">${env.pollution.dredging}</span></div>`;
        }
    }
    
    // Coral Reefs
    if (env.coralReefs) {
        html += `<h4 style="color: var(--accent-cyan); margin: var(--spacing-md) 0 var(--spacing-sm);">🪸 Coral Reef Status</h4>`;
        if (env.coralReefs.area) {
            html += `<div class="data-item"><span class="data-label">Reef Area</span><span class="data-value">${env.coralReefs.area}</span></div>`;
        }
        if (env.coralReefs.health) {
            html += `<div class="data-item"><span class="data-label">Health Status</span><span class="data-value">${env.coralReefs.health}</span></div>`;
        }
        if (env.coralReefs.threats && Array.isArray(env.coralReefs.threats)) {
            html += `<div class="data-item"><span class="data-label">Threats</span><span class="data-value" style="color: #FF6B6B;">${env.coralReefs.threats.join(', ')}</span></div>`;
        }
    }
    
    container.innerHTML = html || '<p class="no-data">No environmental data available</p>';
}

function renderExploration() {
    const container = document.getElementById('explorationData');
    const history = currentSea.history;
    
    if (!history) {
        container.innerHTML = '<p class="no-data">No exploration data available</p>';
        return;
    }
    
    let html = '';
    
    if (typeof history === 'object') {
        html = Object.entries(history).map(([key, value]) => `
            <div class="data-item" style="margin-bottom: var(--spacing-sm);">
                <span class="data-label">${formatKey(key)}</span>
                <span class="data-value">${value}</span>
            </div>
        `).join('');
    } else {
        html = `<p>${history}</p>`;
    }
    
    container.innerHTML = html;
}

function renderGeopolitics() {
    const container = document.getElementById('geopoliticsData');
    const geo = currentSea.geopolitics;
    
    if (!geo) {
        container.innerHTML = '<p class="no-data">No geopolitical data available</p>';
        return;
    }
    
    let html = '';
    
    // Strategic Info
    html += `<div class="data-grid">`;
    if (geo.strategicImportance) {
        html += `<div class="data-item"><span class="data-label">Strategic Importance</span><span class="data-value" style="color: #FF6B6B;">${geo.strategicImportance}</span></div>`;
    }
    if (geo.conflictLevel) {
        html += `<div class="data-item"><span class="data-label">Conflict Level</span><span class="data-value">${geo.conflictLevel}</span></div>`;
    }
    if (geo.warRisk) {
        html += `<div class="data-item"><span class="data-label">War Risk</span><span class="data-value">${geo.warRisk}</span></div>`;
    }
    html += `</div>`;
    
    // Nine Dash Line (for South China Sea)
    if (geo.nineDashLine) {
        html += `
            <div style="background: rgba(255, 107, 107, 0.1); border: 1px solid rgba(255, 107, 107, 0.3); border-radius: var(--radius-md); padding: var(--spacing-md); margin-top: var(--spacing-md);">
                <h4 style="color: #FF6B6B; margin-bottom: var(--spacing-sm);">📍 Nine-Dash Line Claim</h4>
                <p style="color: var(--text-muted); margin-bottom: var(--spacing-xs);">${geo.nineDashLine.description}</p>
                <p style="color: var(--text-muted);"><strong>Area:</strong> ${geo.nineDashLine.area}</p>
            </div>
        `;
    }
    
    // Tribunal Ruling
    if (geo.tribunalRuling2016) {
        html += `
            <div style="background: rgba(0, 180, 216, 0.1); border: 1px solid rgba(0, 180, 216, 0.3); border-radius: var(--radius-md); padding: var(--spacing-md); margin-top: var(--spacing-md);">
                <h4 style="color: var(--accent-cyan); margin-bottom: var(--spacing-sm);">⚖️ 2016 Tribunal Ruling</h4>
                <p style="color: var(--text-muted); margin-bottom: var(--spacing-xs);"><strong>Case:</strong> ${geo.tribunalRuling2016.case}</p>
                <p style="color: var(--text-muted); margin-bottom: var(--spacing-xs);"><strong>Date:</strong> ${geo.tribunalRuling2016.date}</p>
                ${geo.tribunalRuling2016.keyRulings ? `
                    <ul style="color: var(--text-muted); padding-left: var(--spacing-md); margin-top: var(--spacing-sm);">
                        ${geo.tribunalRuling2016.keyRulings.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }
    
    // Artificial Islands
    if (geo.artificialIslands) {
        html += `
            <div style="background: rgba(255, 165, 0, 0.1); border: 1px solid rgba(255, 165, 0, 0.3); border-radius: var(--radius-md); padding: var(--spacing-md); margin-top: var(--spacing-md);">
                <h4 style="color: #FFA500; margin-bottom: var(--spacing-sm);">🏝️ Artificial Islands</h4>
                ${geo.artificialIslands.chinaBuilt ? `<p style="color: var(--text-muted);"><strong>Area Created:</strong> ${geo.artificialIslands.chinaBuilt}</p>` : ''}
                ${geo.artificialIslands.cost ? `<p style="color: var(--text-muted);"><strong>Estimated Cost:</strong> ${geo.artificialIslands.cost}</p>` : ''}
            </div>
        `;
    }
    
    // Incidents Timeline
    if (geo.incidents && geo.incidents.length > 0) {
        html += `
            <h4 style="color: var(--accent-cyan); margin: var(--spacing-lg) 0 var(--spacing-md);">📅 Major Incidents</h4>
            <div style="border-left: 2px solid var(--accent-cyan); padding-left: var(--spacing-md);">
        `;
        geo.incidents.slice(0, 5).forEach(incident => {
            html += `
                <div style="margin-bottom: var(--spacing-md);">
                    <span style="color: var(--accent-cyan); font-weight: 600;">${incident.year}</span>
                    <p style="color: var(--text-light); margin: var(--spacing-xs) 0;">${incident.event}</p>
                    ${incident.casualties ? `<span style="color: #FF6B6B; font-size: 0.85rem;">Casualties: ${incident.casualties}</span>` : ''}
                </div>
            `;
        });
        html += `</div>`;
    }
    
    container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════
// RIGHT COLUMN - TRADE & GEOPOLITICS
// ═══════════════════════════════════════════════════════════

function renderTradeRoutes() {
    const container = document.getElementById('tradeRoutesContainer');
    
    // Get trade routes that pass through this sea
    const routes = globalTradeRoutes?.filter(route => 
        route.seas?.includes(currentSea.id) || 
        route.passesThrough?.includes(currentSea.name)
    ) || [];
    
    if (routes.length === 0) {
        // Use shipping data from the sea itself
        const shipping = currentSea.economicImportance?.shipping;
        if (shipping) {
            container.innerHTML = `
                <div class="trade-route-card">
                    <div class="route-header">
                        <span class="route-name">Major Shipping Lanes</span>
                    </div>
                    <div style="color: var(--text-muted);">
                        ${shipping.routes ? `<p><strong>Routes:</strong> ${shipping.routes}</p>` : ''}
                        ${shipping.oilTransit ? `<p><strong>Oil Transit:</strong> ${shipping.oilTransit}</p>` : ''}
                        ${shipping.chinaOil ? `<p>• China: ${shipping.chinaOil}</p>` : ''}
                        ${shipping.japanOil ? `<p>• Japan: ${shipping.japanOil}</p>` : ''}
                        ${shipping.koreaOil ? `<p>• South Korea: ${shipping.koreaOil}</p>` : ''}
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = '<p class="no-data">No trade route data available</p>';
        }
        return;
    }
    
    container.innerHTML = routes.map(route => `
        <div class="trade-route-card">
            <div class="route-header">
                <span class="route-name">${route.name}</span>
                <span class="route-type ${route.type || 'container'}">${route.type || 'General'}</span>
            </div>
            ${route.statistics ? `
                <div class="route-stats">
                    ${route.statistics.annualValue ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${route.statistics.annualValue}</span>
                            <span class="route-stat-label">Annual Value</span>
                        </div>
                    ` : ''}
                    ${route.statistics.percentGlobalTrade ? `
                        <div class="route-stat">
                            <span class="route-stat-value">${route.statistics.percentGlobalTrade}%</span>
                            <span class="route-stat-label">Global Trade</span>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function renderChokepoints() {
    const container = document.getElementById('chokepointsContainer');
    
    // Use straits from the sea as chokepoints
    const straits = currentSea.straits?.filter(s => s.chokepoint || s.annualShips > 50000) || [];
    
    // Also check global chokepoints
    const globalCPs = globalChokepoints?.filter(cp => 
        cp.seaId === currentSea.id || 
        cp.location?.includes(currentSea.name)
    ) || [];
    
    const chokepoints = [...straits, ...globalCPs];
    
    if (chokepoints.length === 0) {
        container.innerHTML = '<p class="no-data">No chokepoint data available</p>';
        return;
    }
    
    container.innerHTML = chokepoints.map(cp => `
        <div class="chokepoint-card">
            <div class="chokepoint-name">
                <i class="fas fa-exclamation-triangle"></i>
                ${cp.name}
            </div>
            <div class="chokepoint-stats">
                ${cp.width ? `
                    <div class="cp-stat">
                        <span class="cp-stat-value">${cp.width} km</span>
                        <span class="cp-stat-label">Width</span>
                    </div>
                ` : ''}
                ${cp.annualShips ? `
                    <div class="cp-stat">
                        <span class="cp-stat-value">${formatNumber(cp.annualShips)}</span>
                        <span class="cp-stat-label">Ships/Year</span>
                    </div>
                ` : ''}
                ${cp.oilBarrels || cp.dailyOilBarrels ? `
                    <div class="cp-stat">
                        <span class="cp-stat-value">${formatNumber((cp.oilBarrels || cp.dailyOilBarrels) / 1000000)}M</span>
                        <span class="cp-stat-label">Barrels/Day</span>
                    </div>
                ` : ''}
            </div>
            ${cp.significance ? `<p style="color: var(--text-muted); font-size: 0.9rem; margin-top: var(--spacing-sm);">${cp.significance}</p>` : ''}
        </div>
    `).join('');
}

function renderCountryImportance() {
    const container = document.getElementById('countryImportanceContainer');
    const countryImportance = currentSea.geopolitics?.countryImportance;
    
    if (!countryImportance) {
        container.innerHTML = '<p class="no-data">No country importance data available</p>';
        return;
    }
    
    const flagEmojis = {
        china: '🇨🇳', usa: '🇺🇸', japan: '🇯🇵', vietnam: '🇻🇳',
        philippines: '🇵🇭', malaysia: '🇲🇾', indonesia: '🇮🇩',
        taiwan: '🇹🇼', india: '🇮🇳', australia: '🇦🇺', asean: '🌏'
    };
    
    container.innerHTML = Object.entries(countryImportance).map(([country, data]) => `
        <div class="country-card">
            <div class="country-header">
                <span class="country-flag">${flagEmojis[country.toLowerCase()] || '🏳️'}</span>
                <span class="country-name">${formatKey(country)}</span>
                <span class="importance-level ${data.importance?.toLowerCase().replace(' ', '-') || 'high'}">${data.importance || 'Important'}</span>
            </div>
            ${data.reasons && Array.isArray(data.reasons) ? `
                <ul class="country-reasons">
                    ${data.reasons.slice(0, 4).map(reason => `<li>${reason}</li>`).join('')}
                </ul>
            ` : ''}
            ${data.strategy ? `<p style="color: var(--accent-cyan); font-size: 0.85rem; margin-top: var(--spacing-sm);"><strong>Strategy:</strong> ${data.strategy}</p>` : ''}
        </div>
    `).join('');
}

function renderIssues() {
    const container = document.getElementById('issuesContainer');
    const disputes = currentSea.geopolitics?.territorialDisputes;
    
    if (!disputes || disputes.length === 0) {
        container.innerHTML = '<p class="no-data">No current issues data available</p>';
        return;
    }
    
    container.innerHTML = disputes.map(dispute => `
        <div class="issue-card">
            <div class="issue-name">${dispute.name}</div>
            ${dispute.claimants ? `
                <div class="issue-parties">
                    ${dispute.claimants.map(c => `<span class="party-tag">${c}</span>`).join('')}
                </div>
            ` : ''}
            <p class="issue-description">${dispute.description || dispute.status || ''}</p>
        </div>
    `).join('');
}

function renderNavalPresence() {
    const container = document.getElementById('navalContainer');
    const navalPresences = currentSea.geopolitics?.navalPresences;
    
    if (!navalPresences || navalPresences.length === 0) {
        container.innerHTML = '<p class="no-data">No naval presence data available</p>';
        return;
    }
    
    container.innerHTML = navalPresences.map(presence => `
        <div class="naval-card">
            <div class="naval-country">${presence.country}</div>
            <div class="naval-base">${presence.base}</div>
            <div class="naval-purpose">${presence.purpose}</div>
            ${presence.assets ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-top: var(--spacing-xs);">Assets: ${presence.assets}</div>` : ''}
        </div>
    `).join('');
}

function renderFunFacts() {
    const container = document.getElementById('funFactsContainer');
    
    if (!currentSea.funFacts || currentSea.funFacts.length === 0) {
        container.innerHTML = '<p class="no-data">No fun facts available</p>';
        return;
    }
    
    container.innerHTML = currentSea.funFacts.map(fact => `
        <div class="fun-fact-card">
            <p class="fun-fact-text">${fact}</p>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════════════════

function initMap() {
    const coords = currentSea.coordinates || [0, 0];
    const zoom = currentSea.defaultZoom || 5;
    
    seaMap = L.map('seaMap').setView(coords, zoom);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(seaMap);
    
    // Add sea marker
    L.marker(coords)
        .addTo(seaMap)
        .bindPopup(`<strong>${currentSea.name}</strong><br>${currentSea.parentOcean}`);
    
    // Add port markers
    if (currentSea.economicImportance?.majorPorts) {
        currentSea.economicImportance.majorPorts.forEach(port => {
            if (port.coordinates) {
                L.circleMarker(port.coordinates, {
                    radius: 6,
                    fillColor: '#00B4D8',
                    color: '#fff',
                    weight: 1,
                    fillOpacity: 0.8
                }).addTo(seaMap).bindPopup(`<strong>🏗️ ${port.name}</strong><br>${port.country}<br>${port.containers || ''}`);
            }
        });
    }
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════

function renderNavigation() {
    const prevIndex = currentSeaIndex > 0 ? currentSeaIndex - 1 : seasData.length - 1;
    const nextIndex = currentSeaIndex < seasData.length - 1 ? currentSeaIndex + 1 : 0;
    
    document.getElementById('prevSeaName').textContent = seasData[prevIndex].name;
    document.getElementById('nextSeaName').textContent = seasData[nextIndex].name;
    
    document.getElementById('prevSea').onclick = () => {
        window.location.href = `seas-profile.html?id=${seasData[prevIndex].id}`;
    };
    
    document.getElementById('nextSea').onclick = () => {
        window.location.href = `seas-profile.html?id=${seasData[nextIndex].id}`;
    };
    
    // Nav dots
    const dotsContainer = document.getElementById('navDots');
    dotsContainer.innerHTML = seasData.map((sea, index) => `
        <button class="nav-dot ${index === currentSeaIndex ? 'active' : ''}" 
                onclick="window.location.href='seas-profile.html?id=${sea.id}'"
                title="${sea.name}"></button>
    `).join('');
}

// ═══════════════════════════════════════════════════════════
// TREE TOGGLES
// ═══════════════════════════════════════════════════════════

function setupTreeToggles() {
    const nodes = document.querySelectorAll('.tree-node');
    
    nodes.forEach(node => {
        const header = node.querySelector('.node-header');
        
        header.addEventListener('click', () => {
            node.classList.toggle('expanded');
        });
    });
}

// ═══════════════════════════════════════════════════════════
// QUICK FACTS PANEL
// ═══════════════════════════════════════════════════════════

function setupQuickFactsPanel() {
    const panel = document.getElementById('quickFactsPanel');
    const toggle = document.getElementById('qfToggle');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
            toggle.querySelector('i').classList.toggle('fa-chevron-up');
            toggle.querySelector('i').classList.toggle('fa-chevron-down');
        });
    }
}

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

function formatNumber(num) {
    if (!num) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

console.log('🌊 Seas Profile App Loaded!');
