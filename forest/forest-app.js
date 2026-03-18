// ===== FORESTS EXPLORER APPLICATION =====
// Main JavaScript file for gallery and profile pages

// ===== GLOBAL VARIABLES =====
let allForests = [];
let filteredForests = [];
let currentForest = null;
let currentView = 'grid';
let worldMap = null;
let forestMap = null;
let isAmbientPlaying = false;

// ===== DOM CONTENT LOADED =====
window.addEventListener('DOMContentLoaded', () => {
    // Combine all forest data from separate files
    loadAllForestData();
    
    // Initialize based on page type
    if (document.getElementById('forestGrid')) {
        initGalleryPage();
    } else if (document.getElementById('forestMap')) {
        initProfilePage();
    }
    
    // Initialize common features
    initFloatingParticles();
    initAmbientSound();
    initBackToTop();
});

// ===== LOAD ALL FOREST DATA =====
function loadAllForestData() {
    allForests = [
        ...(typeof forestData1 !== 'undefined' ? forestData1 : []),
        ...(typeof forestData2 !== 'undefined' ? forestData2 : []),
        ...(typeof forestData3 !== 'undefined' ? forestData3 : []),
        ...(typeof forestData4 !== 'undefined' ? forestData4 : []),
        ...(typeof forestData5 !== 'undefined' ? forestData5 : []),
        ...(typeof forestData6 !== 'undefined' ? forestData6 : []),
        ...(typeof forestData7 !== 'undefined' ? forestData7 : []),
        ...(typeof forestData8 !== 'undefined' ? forestData8 : []),
        ...(typeof forestData9 !== 'undefined' ? forestData9 : []),
        ...(typeof forestData10 !== 'undefined' ? forestData10 : [])
    ];

    // Sort by area (largest to smallest) by default
    allForests.sort((a, b) => b.area - a.area);
    
    // Assign ranks
    allForests.forEach((forest, index) => {
        forest.rank = index + 1;
    });
    
    filteredForests = [...allForests];
}

// ===== GALLERY PAGE INITIALIZATION =====
function initGalleryPage() {
    renderForestCards();
    setupFilters();
    setupSearch();
    setupViewToggle();
    setupSort();
    updateStats();
    
    // Show results count
    updateResultsCount();
}

// ===== RENDER FOREST CARDS =====
function renderForestCards(forests = filteredForests) {
    const grid = document.getElementById('forestGrid');
    const list = document.getElementById('forestList');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    if (list) list.innerHTML = '';

    if (forests.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No forests found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    forests.forEach((forest, index) => {
        // Grid Card
        const card = createForestCard(forest, index);
        grid.appendChild(card);
        
        // List Item
        if (list) {
            const listItem = createForestListItem(forest, index);
            list.appendChild(listItem);
        }
    });

    // Animate cards
    animateCards();
}

// ===== CREATE FOREST CARD =====
function createForestCard(forest, index) {
    const card = document.createElement('div');
    card.className = 'forest-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.onclick = () => openForestProfile(forest.id);
    
    const typeEmoji = getForestTypeEmoji(forest.type);

    card.innerHTML = `
        <div class="forest-card-rank">#${forest.rank}</div>
        <div class="forest-card-image-wrapper">
            <img src="${forest.image}" alt="${forest.name}" class="forest-card-image" loading="lazy">
            <span class="forest-card-type-badge">${typeEmoji}</span>
        </div>
        <div class="forest-card-content">
            <h3 class="forest-card-title">${forest.name}</h3>
            <p class="forest-card-region">
                <span>📍</span> ${truncateText(forest.region, 40)}
            </p>
            <div class="forest-card-stats">
                <span class="forest-card-area">📏 ${formatArea(forest.area)} km²</span>
            </div>
        </div>
    `;

    return card;
}

// ===== CREATE FOREST LIST ITEM =====
function createForestListItem(forest, index) {
    const item = document.createElement('div');
    item.className = 'forest-list-item';
    item.style.animationDelay = `${index * 0.03}s`;
    item.onclick = () => openForestProfile(forest.id);

    item.innerHTML = `
        <span class="list-item-rank">#${forest.rank}</span>
        <img src="${forest.image}" alt="${forest.name}" class="list-item-image" loading="lazy">
        <div class="list-item-info">
            <h3 class="list-item-name">${forest.name}</h3>
            <p class="list-item-region">${forest.region}</p>
        </div>
        <div class="list-item-stats">
            <span class="list-item-area">${formatArea(forest.area)} km²</span>
            <span class="list-item-type">${forest.type}</span>
        </div>
    `;

    return item;
}

// ===== ANIMATE CARDS =====
function animateCards() {
    const cards = document.querySelectorAll('.forest-card, .forest-list-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ===== SETUP FILTERS =====
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.dataset.type;
            filterForests(type);
        });
    });
}

// ===== FILTER FORESTS =====
function filterForests(type) {
    if (type === 'all') {
        filteredForests = [...allForests];
    } else {
        filteredForests = allForests.filter(f => {
            const forestType = f.type.toLowerCase();
            return forestType.includes(type.toLowerCase());
        });
    }
    
    // Apply current sort
    applyCurrentSort();
    
    renderForestCards();
    updateResultsCount();
}

// ===== SETUP SEARCH =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    if (!searchInput) return;

    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value.toLowerCase().trim();
            searchForests(query);
        }, 300);
    });

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchForests('');
        });
    }
}

// ===== SEARCH FORESTS =====
function searchForests(query) {
    if (!query) {
        // Reset to current filter
        const activeFilter = document.querySelector('.filter-btn.active');
        const type = activeFilter ? activeFilter.dataset.type : 'all';
        filterForests(type);
        return;
    }

    filteredForests = allForests.filter(f => {
        return f.name.toLowerCase().includes(query) ||
               f.region.toLowerCase().includes(query) ||
               f.type.toLowerCase().includes(query) ||
               (f.location && f.location.countries.some(c => c.toLowerCase().includes(query)));
    });

    renderForestCards();
    updateResultsCount();
}

// ===== SETUP VIEW TOGGLE =====
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const grid = document.getElementById('forestGrid');
    const list = document.getElementById('forestList');
    const worldMapContainer = document.getElementById('worldMapContainer');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            currentView = view;
            
            // Hide all views
            if (grid) grid.classList.add('hidden');
            if (list) list.classList.add('hidden');
            if (worldMapContainer) worldMapContainer.classList.add('hidden');
            
            // Show selected view
            switch (view) {
                case 'grid':
                    if (grid) grid.classList.remove('hidden');
                    break;
                case 'list':
                    if (list) list.classList.remove('hidden');
                    break;
                case 'map':
                    if (worldMapContainer) {
                        worldMapContainer.classList.remove('hidden');
                        initWorldMap();
                    }
                    break;
            }
        });
    });
}

// ===== SETUP SORT =====
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', () => {
        applyCurrentSort();
        renderForestCards();
    });
}

// ===== APPLY CURRENT SORT =====
function applyCurrentSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
    switch (sortValue) {
        case 'area-desc':
            filteredForests.sort((a, b) => b.area - a.area);
            break;
        case 'area-asc':
            filteredForests.sort((a, b) => a.area - b.area);
            break;
        case 'name-asc':
            filteredForests.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredForests.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
}

// ===== UPDATE STATS =====
function updateStats() {
    const totalForestsEl = document.getElementById('totalForests');
    const totalAreaEl = document.getElementById('totalArea');
    
    if (totalForestsEl) {
        totalForestsEl.textContent = allForests.length;
    }
    
    if (totalAreaEl) {
        const totalArea = allForests.reduce((sum, f) => sum + f.area, 0);
        totalAreaEl.textContent = formatArea(totalArea);
    }
}

// ===== UPDATE RESULTS COUNT =====
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = filteredForests.length;
    }
}

// ===== INIT WORLD MAP =====
function initWorldMap() {
    if (worldMap) return; // Already initialized
    
    const mapContainer = document.getElementById('worldMap');
    if (!mapContainer) return;
    
    worldMap = L.map('worldMap').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(worldMap);
    
    // Add markers for all forests
    allForests.forEach(forest => {
        if (forest.coordinates) {
            const marker = L.marker([forest.coordinates.lat, forest.coordinates.lng])
                .addTo(worldMap)
                .bindPopup(`
                    <div style="text-align: center; min-width: 150px;">
                        <strong>${forest.name}</strong><br>
                        <span style="color: #666;">${forest.type}</span><br>
                        <span>${formatArea(forest.area)} km²</span><br>
                        <button onclick="openForestProfile(${forest.id})" 
                            style="margin-top: 8px; padding: 5px 15px; background: #2D6A4F; 
                            color: white; border: none; border-radius: 15px; cursor: pointer;">
                            View Details
                        </button>
                    </div>
                `);
        }
    });
    
    setTimeout(() => {
        worldMap.invalidateSize();
    }, 100);
}

// ===== OPEN FOREST PROFILE =====
function openForestProfile(forestId) {
    window.location.href = `forest-profile.html?id=${forestId}`;
}

// ===== PROFILE PAGE INITIALIZATION =====
function initProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const forestId = parseInt(params.get('id'));
    
    currentForest = allForests.find(f => f.id === forestId);
    
    if (!currentForest) {
        alert('Forest not found!');
        window.location.href = 'forest.html';
        return;
    }

    renderProfileContent();
    initializeProfileMap();
    setupProfileTabs();
    setupExploration();
    setupNavigation();
    setupShareAndPrint();
}

// ===== RENDER PROFILE CONTENT =====
function renderProfileContent() {
    // Page title
    document.getElementById('forestTitle').textContent = `${currentForest.name} | Forests Explorer`;
    
    // Background
    document.getElementById('profileBg').style.backgroundImage = `url('${currentForest.profileImage || currentForest.image}')`;
    
    // Navigation
    document.getElementById('navForestName').textContent = currentForest.name;
    
    // Hero Section
    document.getElementById('heroRank').textContent = `#${currentForest.rank} Largest Forest`;
    document.getElementById('forestName').textContent = currentForest.name;
    
    // Hero Tags
    const heroTags = document.getElementById('heroTags');
    heroTags.innerHTML = `
        <span class="hero-tag">🌍 ${currentForest.location.continent}</span>
        <span class="hero-tag">🌲 ${currentForest.type}</span>
        <span class="hero-tag">📏 ${formatArea(currentForest.area)} km²</span>
        <span class="hero-tag">🏳️ ${currentForest.location.countries.length} Countries</span>
    `;
    
    // Quick Stats
    document.getElementById('statArea').textContent = formatArea(currentForest.area);
    document.getElementById('statTemp').textContent = currentForest.climate.temperature;
    document.getElementById('statRainfall').textContent = currentForest.climate.rainfall;
    document.getElementById('statSpecies').textContent = 
        (currentForest.biodiversity.animals.length + currentForest.biodiversity.birds.length);
    
    // Render all sections
    renderMindMap();
    renderBiodiversity();
    renderConservation();
    renderGallery();
    renderRelatedForests();
    renderNavigationFooter();
}

// ===== RENDER MIND MAP =====
function renderMindMap() {
    const container = document.getElementById('mindmapContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="mindmap-node root">
            🌳 ${currentForest.name}
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">📍 Location</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        <li><strong>Continent:</strong> ${currentForest.location.continent}</li>
                        <li><strong>Countries:</strong> ${currentForest.location.countries.join(', ')}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🌲 Forest Type</div>
                <div class="branch-content">${currentForest.type}</div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">📏 Total Area</div>
                <div class="branch-content">${formatArea(currentForest.area)} km² (${formatAcres(currentForest.area)} acres)</div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🌡️ Climate</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        <li><strong>Rainfall:</strong> ${currentForest.climate.rainfall}</li>
                        <li><strong>Temperature:</strong> ${currentForest.climate.temperature}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🌿 Vegetation</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.vegetation.map(v => `<li>${v}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🦜 Biodiversity</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        <li><strong>Animals:</strong> ${currentForest.biodiversity.animals.join(', ')}</li>
                        <li><strong>Birds:</strong> ${currentForest.biodiversity.birds.join(', ')}</li>
                        ${currentForest.biodiversity.insects ? 
                            `<li><strong>Insects:</strong> ${currentForest.biodiversity.insects.join(', ')}</li>` : ''}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🌊 Major Rivers</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.majorRivers.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">👥 Indigenous Communities</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.indigenousCommunities.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">💰 Economic Importance</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.economicImportance.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🌍 Environmental Importance</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.environmentalImportance.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">⚠️ Environmental Issues</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.environmentalIssues.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="mindmap-branch">
            <div class="mindmap-node">
                <div class="branch-title">🛡️ Conservation Efforts</div>
                <div class="branch-content">
                    <ul class="branch-list">
                        ${currentForest.conservationEfforts.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// ===== RENDER BIODIVERSITY =====
function renderBiodiversity() {
    const animalsList = document.getElementById('animalsList');
    const birdsList = document.getElementById('birdsList');
    const vegetationList = document.getElementById('vegetationList');
    const insectsList = document.getElementById('insectsList');
    const indigenousList = document.getElementById('indigenousList');
    
    if (animalsList) {
        animalsList.innerHTML = currentForest.biodiversity.animals
            .map(a => `<li>${a}</li>`).join('');
    }
    
    if (birdsList) {
        birdsList.innerHTML = currentForest.biodiversity.birds
            .map(b => `<li>${b}</li>`).join('');
    }
    
    if (vegetationList) {
        vegetationList.innerHTML = currentForest.vegetation
            .map(v => `<li>${v}</li>`).join('');
    }
    
    if (insectsList && currentForest.biodiversity.insects) {
        insectsList.innerHTML = currentForest.biodiversity.insects
            .map(i => `<li>${i}</li>`).join('');
    }
    
    if (indigenousList) {
        indigenousList.innerHTML = currentForest.indigenousCommunities
            .map(c => `<span class="indigenous-item">${c}</span>`).join('');
    }
}

// ===== RENDER CONSERVATION =====
function renderConservation() {
    const importanceList = document.getElementById('importanceList');
    const issuesList = document.getElementById('issuesList');
    const effortsList = document.getElementById('effortsList');
    const economicList = document.getElementById('economicList');
    
    if (importanceList) {
        importanceList.innerHTML = currentForest.environmentalImportance
            .map(i => `<li>${i}</li>`).join('');
    }
    
    if (issuesList) {
        issuesList.innerHTML = currentForest.environmentalIssues
            .map(i => `<li>${i}</li>`).join('');
    }
    
    if (effortsList) {
        effortsList.innerHTML = currentForest.conservationEfforts
            .map(e => `<li>${e}</li>`).join('');
    }
    
    if (economicList) {
        economicList.innerHTML = currentForest.economicImportance
            .map(e => `<li>${e}</li>`).join('');
    }
}

// ===== RENDER GALLERY =====
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    // Use gallery images if available, otherwise create placeholders
    const images = currentForest.gallery || [
        currentForest.image,
        currentForest.profileImage || currentForest.image
    ];
    
    galleryGrid.innerHTML = images.map((img, index) => `
        <div class="gallery-item" onclick="openImageModal(${index})">
            <img src="${img}" alt="${currentForest.name} - Image ${index + 1}" loading="lazy">
        </div>
    `).join('');
}

// ===== RENDER RELATED FORESTS =====
function renderRelatedForests() {
    const relatedGrid = document.getElementById('relatedGrid');
    if (!relatedGrid) return;
    
    // Find forests of same type
    const related = allForests
        .filter(f => f.id !== currentForest.id && f.type === currentForest.type)
        .slice(0, 4);
    
    relatedGrid.innerHTML = related.map(forest => `
        <div class="related-card" onclick="openForestProfile(${forest.id})">
            <img src="${forest.image}" alt="${forest.name}" loading="lazy">
            <h4>${forest.name}</h4>
            <p>${formatArea(forest.area)} km²</p>
        </div>
    `).join('');
}

// ===== RENDER NAVIGATION FOOTER =====
function renderNavigationFooter() {
    const currentIndex = allForests.findIndex(f => f.id === currentForest.id);
    const prevForest = allForests[currentIndex - 1];
    const nextForest = allForests[currentIndex + 1];
    
    const prevBtn = document.getElementById('prevForest');
    const nextBtn = document.getElementById('nextForest');
    const prevName = document.getElementById('prevName');
    const nextName = document.getElementById('nextName');
    
    if (prevBtn && prevForest) {
        prevName.textContent = prevForest.name;
        prevBtn.onclick = () => openForestProfile(prevForest.id);
    } else if (prevBtn) {
        prevBtn.style.visibility = 'hidden';
    }
    
    if (nextBtn && nextForest) {
        nextName.textContent = nextForest.name;
        nextBtn.onclick = () => openForestProfile(nextForest.id);
    } else if (nextBtn) {
        nextBtn.style.visibility = 'hidden';
    }
}

// ===== INITIALIZE PROFILE MAP =====
function initializeProfileMap() {
    const mapContainer = document.getElementById('forestMap');
    if (!mapContainer) return;
    
    forestMap = L.map('forestMap').setView(
        [currentForest.coordinates.lat, currentForest.coordinates.lng],
        currentForest.coordinates.zoom || 6
    );

    // Base layer (Standard)
    const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    });
    
    // Satellite layer
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    });
    
    // Terrain layer
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap'
    });

    standardLayer.addTo(forestMap);

    // Forest boundary polygon
    if (currentForest.boundary && currentForest.boundary.length > 0) {
        L.polygon(currentForest.boundary, {
            color: '#2D6A4F',
            fillColor: '#52B788',
            fillOpacity: 0.35,
            weight: 3
        }).addTo(forestMap).bindPopup(`<strong>${currentForest.name}</strong><br>Total Area: ${formatArea(currentForest.area)} km²`);
    }

    // Center marker
    L.marker([currentForest.coordinates.lat, currentForest.coordinates.lng])
        .addTo(forestMap)
        .bindPopup(`<strong>${currentForest.name}</strong>`)
        .openPopup();

    // Rivers
    if (currentForest.rivers) {
        currentForest.rivers.forEach(river => {
            L.polyline(river.path, {
                color: '#4A90A4',
                weight: 3,
                opacity: 0.8
            }).addTo(forestMap).bindPopup(`🌊 ${river.name}`);
        });
    }

    // Protected areas
    if (currentForest.protectedAreas) {
        currentForest.protectedAreas.forEach(area => {
            L.circle([area.lat, area.lng], {
                color: '#8B9556',
                fillColor: '#A4AC86',
                fillOpacity: 0.4,
                radius: area.radius
            }).addTo(forestMap).bindPopup(`🛡️ ${area.name}`);
        });
    }

    // Map view controls
    document.getElementById('standardView').onclick = () => {
        forestMap.eachLayer(layer => {
            if (layer instanceof L.TileLayer) forestMap.removeLayer(layer);
        });
        standardLayer.addTo(forestMap);
        updateMapButtons('standardView');
    };

    document.getElementById('satelliteView').onclick = () => {
        forestMap.eachLayer(layer => {
            if (layer instanceof L.TileLayer) forestMap.removeLayer(layer);
        });
        satelliteLayer.addTo(forestMap);
        updateMapButtons('satelliteView');
    };

    document.getElementById('terrainView').onclick = () => {
        forestMap.eachLayer(layer => {
            if (layer instanceof L.TileLayer) forestMap.removeLayer(layer);
        });
        terrainLayer.addTo(forestMap);
        updateMapButtons('terrainView');
    };
}

// ===== UPDATE MAP BUTTONS =====
function updateMapButtons(activeId) {
    document.querySelectorAll('.map-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(activeId).classList.add('active');
}

// ===== SETUP PROFILE TABS =====
function setupProfileTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `${tabId}-panel`) {
                    panel.classList.add('active');
                }
            });
            
            // Resize map if switching to map tab
            if (tabId === 'map' && forestMap) {
                setTimeout(() => forestMap.invalidateSize(), 100);
            }
        });
    });
}

// ===== SETUP EXPLORATION =====
function setupExploration() {
    const exploreBtn = document.getElementById('exploreForest');
    const overlay = document.getElementById('explorationOverlay');
    const closeBtn = document.getElementById('closeExploration');
    const skipBtn = document.getElementById('skipExploration');
    const title = document.getElementById('explorationTitle');
    const text = document.getElementById('explorationText');
    const progressBar = document.getElementById('progressBar');
    const scene = document.getElementById('explorationScene');

    if (!exploreBtn || !overlay) return;

    const journey = [
        { title: '🛩️ Aerial Approach', text: `Flying towards ${currentForest.name}, the largest forest in ${currentForest.location.continent}...`, emoji: '🛩️', duration: 3000 },
        { title: '🌲 Canopy View', text: 'Soaring above the dense green canopy, a sea of trees stretches to the horizon...', emoji: '🌲', duration: 3000 },
        { title: '☁️ Into the Mist', text: 'Descending through clouds into the heart of the forest...', emoji: '☁️', duration: 2500 },
        { title: '🌊 River Systems', text: `Following the ${currentForest.majorRivers[0] || 'main river'} through the forest...`, emoji: '🌊', duration: 3000 },
        { title: '🦜 Wildlife Encounter', text: `Discovering ${currentForest.biodiversity.animals[0] || 'wildlife'} in their natural habitat...`, emoji: '🦜', duration: 3000 },
        { title: '👥 Indigenous Lands', text: `Meeting the ${currentForest.indigenousCommunities[0] || 'local'} communities who call this forest home...`, emoji: '👥', duration: 3000 },
        { title: '🌅 Forest Edge', text: 'Reaching the boundaries of this magnificent ecosystem...', emoji: '🌅', duration: 2500 }
    ];

    let currentStep = 0;
    let explorationInterval = null;

    exploreBtn.onclick = () => {
        overlay.classList.remove('hidden');
        currentStep = 0;
        runExploration();
    };

    function runExploration() {
        if (currentStep >= journey.length) {
            setTimeout(() => {
                overlay.classList.add('hidden');
                progressBar.style.width = '0%';
            }, 1000);
            return;
        }

        const step = journey[currentStep];
        title.textContent = step.title;
        text.textContent = step.text;
        scene.innerHTML = `<span style="font-size: 5rem;">${step.emoji}</span>`;
        progressBar.style.width = `${((currentStep + 1) / journey.length) * 100}%`;

        explorationInterval = setTimeout(() => {
            currentStep++;
            runExploration();
        }, step.duration);
    }

    closeBtn.onclick = () => {
        clearTimeout(explorationInterval);
        overlay.classList.add('hidden');
        progressBar.style.width = '0%';
    };

    skipBtn.onclick = () => {
        clearTimeout(explorationInterval);
        currentStep = journey.length - 1;
        progressBar.style.width = '100%';
        title.textContent = '🌅 Journey Complete';
        text.textContent = `You've explored ${currentForest.name}!`;
    };
}

// ===== SETUP NAVIGATION =====
function setupNavigation() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals
            document.querySelectorAll('.exploration-overlay, .image-modal, .share-modal')
                .forEach(modal => modal.classList.add('hidden'));
        }
        
        if (e.key === 'ArrowLeft') {
            const prevBtn = document.getElementById('prevForest');
            if (prevBtn) prevBtn.click();
        }
        
        if (e.key === 'ArrowRight') {
            const nextBtn = document.getElementById('nextForest');
            if (nextBtn) nextBtn.click();
        }
    });
}

// ===== SETUP SHARE AND PRINT =====
function setupShareAndPrint() {
    const shareBtn = document.getElementById('shareBtn');
    const printBtn = document.getElementById('printBtn');
    const shareModal = document.getElementById('shareModal');
    const shareClose = document.getElementById('shareClose');
    
    if (shareBtn && shareModal) {
        shareBtn.onclick = () => shareModal.classList.remove('hidden');
        
        shareModal.querySelectorAll('.share-btn').forEach(btn => {
            btn.onclick = () => {
                const url = window.location.href;
                const text = `Check out ${currentForest.name} on Forests Explorer!`;
                
                if (btn.classList.contains('twitter')) {
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
                } else if (btn.classList.contains('facebook')) {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                } else if (btn.classList.contains('linkedin')) {
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
                } else if (btn.classList.contains('copy')) {
                    navigator.clipboard.writeText(url).then(() => {
                        btn.textContent = '✓ Copied!';
                        setTimeout(() => btn.textContent = '📋 Copy Link', 2000);
                    });
                }
            };
        });
    }
    
    if (shareClose) {
        shareClose.onclick = () => shareModal.classList.add('hidden');
    }
    
    if (printBtn) {
        printBtn.onclick = () => window.print();
    }
}

// ===== FLOATING PARTICLES =====
function initFloatingParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const leaves = ['🍃', '🍂', '🌿', '☘️', '🍀'];
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            createParticle(particlesContainer, leaves);
        }, i * 1000);
    }
    
    // Continue creating particles
    setInterval(() => {
        createParticle(particlesContainer, leaves);
    }, 3000);
}

function createParticle(container, leaves) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particle.style.anim
