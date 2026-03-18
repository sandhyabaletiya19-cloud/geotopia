/* ========================================
   FORESTS EXPLORER - MAIN APPLICATION JS
   ======================================== */

// ===== GLOBAL VARIABLES =====
let allForests = [];
let filteredForests = [];
let currentForest = null;
let forestMap = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Combine all forest data from separate files
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

    // Sort by area (largest to smallest)
    allForests.sort((a, b) => b.area - a.area);
    filteredForests = [...allForests];

    // Determine page type and initialize accordingly
    if (document.getElementById('forestGrid')) {
        initializeGalleryPage();
    } else if (document.getElementById('forestMap')) {
        initializeProfilePage();
    }

    // Hide loading overlay
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 1000);

    // Create floating leaves
    createFloatingLeaves();
}

// ===== FLOATING LEAVES ANIMATION =====
function createFloatingLeaves() {
    const container = document.getElementById('floatingLeaves');
    if (!container) return;

    const leaves = ['🍃', '🌿', '🍂', '🌱', '☘️'];
    
    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDelay = Math.random() * 15 + 's';
        leaf.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(leaf);
    }
}

// ========================================
// GALLERY PAGE FUNCTIONS
// ========================================

function initializeGalleryPage() {
    renderForestCards();
    setupFilters();
    setupSearch();
    setupSort();
    updateStats();
}

function renderForestCards(forests = filteredForests) {
    const grid = document.getElementById('forestGrid');
    if (!grid) return;

    grid.innerHTML = '';

    forests.forEach((forest, index) => {
        const card = createForestCard(forest, index);
        grid.appendChild(card);
    });

    updateResultsCount(forests.length);
}

function createForestCard(forest, index) {
    const card = document.createElement('div');
    card.className = 'forest-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.onclick = () => openForestProfile(forest.id);

    const rank = allForests.findIndex(f => f.id === forest.id) + 1;
    const typeShort = getShortType(forest.type);

    card.innerHTML = `
        <div class="forest-card-rank">#${rank}</div>
        <div class="forest-card-image-wrapper">
            <div class="forest-card-glow"></div>
            <img src="${forest.image}" alt="${forest.name}" class="forest-card-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1448375240586-882707db888b?w=400'">
        </div>
        <div class="forest-card-content">
            <h3 class="forest-card-title">${forest.name}</h3>
            <p class="forest-card-region">${forest.region}</p>
            <div class="forest-card-meta">
                <span class="forest-card-area">📏 ${formatArea(forest.area)}</span>
                <span class="forest-card-type">${typeShort}</span>
            </div>
        </div>
    `;

    return card;
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.dataset.type;
            applyFilters(type);
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            filterBySearch(searchTerm);
        }, 300);
    });
}

function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', (e) => {
        sortForests(e.target.value);
    });
}

function applyFilters(type) {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    if (type === 'all') {
        filteredForests = [...allForests];
    } else {
        filteredForests = allForests.filter(f => 
            f.type.toLowerCase().includes(type.toLowerCase())
        );
    }

    if (searchTerm) {
        filterBySearch(searchTerm);
    } else {
        renderForestCards();
    }
}

function filterBySearch(searchTerm) {
    if (!searchTerm) {
        renderForestCards(filteredForests);
        return;
    }

    const filtered = filteredForests.filter(f => 
        f.name.toLowerCase().includes(searchTerm) ||
        f.region.toLowerCase().includes(searchTerm) ||
        f.type.toLowerCase().includes(searchTerm) ||
        (f.location && f.location.countries && 
         f.location.countries.some(c => c.toLowerCase().includes(searchTerm)))
    );

    renderForestCards(filtered);
}

function sortForests(sortBy) {
    switch (sortBy) {
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
    renderForestCards();
}

function updateStats() {
    const totalForestsEl = document.getElementById('totalForests');
    const totalAreaEl = document.getElementById('totalArea');

    if (totalForestsEl) {
        animateNumber(totalForestsEl, allForests.length);
    }

    if (totalAreaEl) {
        const totalArea = allForests.reduce((sum, f) => sum + f.area, 0);
        const millionKm = (totalArea / 1000000).toFixed(1);
        animateNumber(totalAreaEl, parseFloat(millionKm), 1);
    }
}

function animateNumber(element, target, decimals = 0) {
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
    }, stepTime);
}

function updateResultsCount(count) {
    const resultsEl = document.getElementById('resultsCount');
    if (resultsEl) {
        resultsEl.textContent = `Showing ${count} forest${count !== 1 ? 's' : ''}`;
    }
}

// ========================================
// PROFILE PAGE FUNCTIONS
// ========================================

function initializeProfilePage() {
    loadForestProfile();
    createForestParticles();
}

function loadForestProfile() {
    const params = new URLSearchParams(window.location.search);
    const forestId = parseInt(params.get('id'));
    
    currentForest = allForests.find(f => f.id === forestId);
    
    if (!currentForest) {
        alert('Forest not found!');
        window.location.href = 'forest.html';
        return;
    }

    // Set page title
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = `${currentForest.name} | Forests Explorer`;
    }
    
    // Set background image
    const profileBg = document.getElementById('profileBg');
    if (profileBg && currentForest.profileImage) {
        profileBg.style.backgroundImage = `url('${currentForest.profileImage}')`;
    }
    
    // Render hero section
    renderHeroSection();
    
    // Initialize map
    setTimeout(() => {
        initializeMap();
    }, 500);
    
    // Render mind map
    renderMindMap();
    
    // Setup exploration
    setupExploration();

    // Setup climate toggle
    setupClimateToggle();

    // Render gallery
    renderGallery();

    // Render related forests
    renderRelatedForests();

    // Setup mind map controls
    setupMindMapControls();

    // Setup favorite button
    setupFavoriteButton();
}

function renderHeroSection() {
    const rank = allForests.findIndex(f => f.id === currentForest.id) + 1;
    
    const forestRank = document.getElementById('forestRank');
    if (forestRank) {
        forestRank.textContent = `#${rank} ${rank === 1 ? 'Largest' : rank <= 10 ? 'Top 10' : 'Largest'}`;
    }

    const forestName = document.getElementById('forestName');
    if (forestName) {
        forestName.textContent = currentForest.name;
    }

    const forestRegion = document.getElementById('forestRegion');
    if (forestRegion) {
        forestRegion.textContent = currentForest.region;
    }
    
    const heroTags = document.getElementById('heroTags');
    if (heroTags) {
        heroTags.innerHTML = `
            <span class="hero-tag">🌍 ${currentForest.location?.continent || 'Earth'}</span>
            <span class="hero-tag">🌲 ${getShortType(currentForest.type)}</span>
            <span class="hero-tag">📏 ${formatArea(currentForest.area)}</span>
        `;
    }

    const heroStats = document.getElementById('heroStats');
    if (heroStats) {
        heroStats.innerHTML = `
            <div class="quick-stat">
                <span class="quick-stat-value">${currentForest.location?.countries?.length || 1}</span>
                <span class="quick-stat-label">Countries</span>
            </div>
            <div class="quick-stat">
                <span class="quick-stat-value">${currentForest.majorRivers?.length || 0}</span>
                <span class="quick-stat-label">Major Rivers</span>
            </div>
            <div class="quick-stat">
                <span class="quick-stat-value">${currentForest.biodiversity?.animals?.length || 0}+</span>
                <span class="quick-stat-label">Key Species</span>
            </div>
        `;
    }
}

function initializeMap() {
    const mapContainer = document.getElementById('forestMap');
    if (!mapContainer || !currentForest.coordinates) return;

    // Initialize Leaflet map
    forestMap = L.map('forestMap').setView(
        [currentForest.coordinates.lat, currentForest.coordinates.lng],
        currentForest.coordinates.zoom || 6
    );

    // Add base tile layer
    const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(forestMap);

    // Add forest boundary polygon
    if (currentForest.boundary && currentForest.boundary.length > 0) {
        L.polygon(currentForest.boundary, {
            color: '#2D6A4F',
            fillColor: '#52B788',
            fillOpacity: 0.35,
            weight: 3
        }).addTo(forestMap).bindPopup(`<strong>${currentForest.name}</strong><br>Area: ${formatArea(currentForest.area)}`);
    }

    // Add rivers
    if (currentForest.rivers) {
        currentForest.rivers.forEach(river => {
            if (river.path && river.path.length > 0) {
                L.polyline(river.path, {
                    color: '#4A90A4',
                    weight: 4,
                    opacity: 0.8
                }).addTo(forestMap).bindPopup(`<strong>🌊 ${river.name}</strong>`);
            }
        });
    }

    // Add protected areas
    if (currentForest.protectedAreas) {
        currentForest.protectedAreas.forEach(area => {
            L.circle([area.lat, area.lng], {
                color: '#8B9556',
                fillColor: '#A4AC86',
                fillOpacity: 0.4,
                radius: area.radius || 10000,
                weight: 2
            }).addTo(forestMap).bindPopup(`<strong>🛡️ ${area.name}</strong><br>Protected Area`);
        });
    }

    // Add forest center marker
    const forestIcon = L.divIcon({
        html: '🌲',
        className: 'forest-marker',
        iconSize: [30, 30]
    });

    L.marker([currentForest.coordinates.lat, currentForest.coordinates.lng], { icon: forestIcon })
        .addTo(forestMap)
        .bindPopup(`<strong>${currentForest.name}</strong>`);

    // Update coordinates display
    const coordsDisplay = document.getElementById('coordsDisplay');
    if (coordsDisplay) {
        coordsDisplay.textContent = `${currentForest.coordinates.lat.toFixed(4)}°, ${currentForest.coordinates.lng.toFixed(4)}°`;
    }

    // Setup map view controls
    setupMapControls(standardLayer);
}

function setupMapControls(standardLayer) {
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri'
    });

    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap'
    });

    document.getElementById('standardView')?.addEventListener('click', function() {
        setActiveMapBtn(this);
        forestMap.removeLayer(satelliteLayer);
        forestMap.removeLayer(terrainLayer);
        standardLayer.addTo(forestMap);
    });

    document.getElementById('satelliteView')?.addEventListener('click', function() {
        setActiveMapBtn(this);
        forestMap.removeLayer(terrainLayer);
        standardLayer.remove();
        satelliteLayer.addTo(forestMap);
    });

    document.getElementById('terrainView')?.addEventListener('click', function() {
        setActiveMapBtn(this);
        forestMap.removeLayer(satelliteLayer);
        standardLayer.remove();
        terrainLayer.addTo(forestMap);
    });

    document.getElementById('densityView')?.addEventListener('click', function() {
        setActiveMapBtn(this);
        // Toggle density visualization
        showNotification('Density view highlights forest coverage intensity');
    });
}

function setActiveMapBtn(activeBtn) {
    document.querySelectorAll('.map-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function renderMindMap() {
    const container = document.getElementById('mindmapContainer');
    if (!container) return;

    const branches = [
        {
            icon: '📍',
            title: 'Location',
            id: 'location',
            content: `
                <ul class="branch-list">
                    <li><strong>Continent:</strong> ${currentForest.location?.continent || 'N/A'}</li>
                    <li><strong>Countries:</strong> ${currentForest.location?.countries?.join(', ') || 'N/A'}</li>
                </ul>
            `
        },
        {
            icon: '🌲',
            title: 'Forest Type',
            id: 'type',
            content: `<p class="branch-text">${currentForest.type}</p>`
        },
        {
            icon: '📏',
            title: 'Area',
            id: 'area',
            content: `<p class="branch-text">${formatArea(currentForest.area)} (${(currentForest.area / 1000000).toFixed(2)} million km²)</p>`
        },
        {
            icon: '🌡️',
            title: 'Climate',
            id: 'climate',
            content: `
                <ul class="branch-list">
                    <li><strong>Rainfall:</strong> ${currentForest.climate?.rainfall || 'N/A'}</li>
                    <li><strong>Temperature:</strong> ${currentForest.climate?.temperature || 'N/A'}</li>
                </ul>
            `
        },
        {
            icon: '🌿',
            title: 'Vegetation',
            id: 'vegetation',
            content: `
                <ul class="branch-list">
                    ${(currentForest.vegetation || []).map(v => `<li>${v}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '🦜',
            title: 'Biodiversity',
            id: 'biodiversity',
            content: `
                <ul class="branch-list">
                    <li><strong>Animals:</strong> ${currentForest.biodiversity?.animals?.join(', ') || 'N/A'}</li>
                    <li><strong>Birds:</strong> ${currentForest.biodiversity?.birds?.join(', ') || 'N/A'}</li>
                    ${currentForest.biodiversity?.insects ? `<li><strong>Insects:</strong> ${currentForest.biodiversity.insects.join(', ')}</li>` : ''}
                </ul>
            `
        },
        {
            icon: '🌊',
            title: 'Rivers',
            id: 'rivers',
            content: `
                <ul class="branch-list">
                    ${(currentForest.majorRivers || []).map(r => `<li>${r}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '👥',
            title: 'Indigenous Communities',
            id: 'indigenous',
            content: `
                <ul class="branch-list">
                    ${(currentForest.indigenousCommunities || []).map(c => `<li>${c}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '💰',
            title: 'Economic Importance',
            id: 'economic',
            content: `
                <ul class="branch-list">
                    ${(currentForest.economicImportance || []).map(e => `<li>${e}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '🌍',
            title: 'Environmental Importance',
            id: 'environmental',
            content: `
                <ul class="branch-list">
                    ${(currentForest.environmentalImportance || []).map(e => `<li>${e}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '⚠️',
            title: 'Environmental Issues',
            id: 'issues',
            content: `
                <ul class="branch-list">
                    ${(currentForest.environmentalIssues || []).map(i => `<li>${i}</li>`).join('')}
                </ul>
            `
        },
        {
            icon: '🛡️',
            title: 'Conservation Efforts',
            id: 'conservation',
            content: `
                <ul class="branch-list">
                    ${(currentForest.conservationEfforts || []).map(c => `<li>${c}</li>`).join('')}
                </ul>
            `
        }
    ];

    container.innerHTML = `
        <div class="mindmap-root">
            🌳 ${currentForest.name}
        </div>
        <div class="mindmap-branches">
            ${branches.map(branch => `
                <div class="mindmap-branch" data-branch="${branch.id}">
                    <div class="branch-header" onclick="toggleBranch('${branch.id}')">
                        <span class="branch-icon">${branch.icon}</span>
                        <span class="branch-title">${branch.title}</span>
                        <span class="branch-toggle">▼</span>
                    </div>
                    <div class="branch-content" id="branch-${branch.id}">
                        ${branch.content}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleBranch(branchId) {
    const content = document.getElementById(`branch-${branchId}`);
    const header = content.previousElementSibling;
    
    content.classList.toggle('visible');
    header.classList.toggle('active');
}

function setupMindMapControls() {
    const expandAll = document.getElementById('expandAll');
    const collapseAll = document.getElementById('collapseAll');

    expandAll?.addEventListener('click', () => {
        document.querySelectorAll('.branch-content').forEach(el => el.classList.add('visible'));
        document.querySelectorAll('.branch-header').forEach(el => el.classList.add('active'));
    });

    collapseAll?.addEventListener('click', () => {
        document.querySelectorAll('.branch-content').forEach(el => el.classList.remove('visible'));
        document.querySelectorAll('.branch-header').forEach(el => el.classList.remove('active'));
    });
}

function setupClimateToggle() {
    const toggle = document.getElementById('climateToggle');
    const climateData = document.getElementById('climateData');
    const climateGrid = document.getElementById('climateGrid');

    if (!toggle || !climateData || !climateGrid) return;

    climateGrid.innerHTML = `
        <div class="climate-item">
            <h4>🌧️ Annual Rainfall</h4>
            <p>${currentForest.climate?.rainfall || 'N/A'}</p>
        </div>
        <div class="climate-item">
            <h4>🌡️ Average Temperature</h4>
            <p>${currentForest.climate?.temperature || 'N/A'}</p>
        </div>
        <div class="climate-item">
            <h4>☀️ Climate Zone</h4>
            <p>${getClimateZone(currentForest.type)}</p>
        </div>
        <div class="climate-item">
            <h4>💨 Humidity</h4>
            <p>${getHumidityLevel(currentForest.type)}</p>
        </div>
    `;

    toggle.addEventListener('change', () => {
        climateData.classList.toggle('hidden', !toggle.checked);
    });
}

function setupExploration() {
    const exploreBtn = document.getElementById('exploreForest');
    const overlay = document.getElementById('explorationOverlay');
    const closeBtn = document.getElementById('closeExploration');
    const explorationBg = document.getElementById('explorationBg');

    if (!exploreBtn || !overlay) return;

    const journey = [
        { 
            icon: '🦅', 
            title: 'Aerial Canopy View', 
            text: 'Soaring high above the endless green canopy...', 
            fact: `The ${currentForest.name} spans an incredible ${formatArea(currentForest.area)}.`,
            duration: 4000 
        },
        { 
            icon: '🌳', 
            title: 'Into the Dense Forest', 
            text: 'Descending through layers of verdant foliage...', 
            fact: `Home to species like ${currentForest.biodiversity?.animals?.slice(0, 3).join(', ') || 'diverse wildlife'}.`,
            duration: 4000 
        },
        { 
            icon: '🌊', 
            title: 'River Systems', 
            text: `Following the mighty ${currentForest.majorRivers?.[0] || 'rivers'} through the forest...`, 
            fact: `Major rivers include: ${currentForest.majorRivers?.join(', ') || 'various waterways'}.`,
            duration: 4000 
        },
        { 
            icon: '🦜', 
            title: 'Biodiversity Hotspot', 
            text: 'Discovering incredible wildlife diversity...', 
            fact: `Birds include: ${currentForest.biodiversity?.birds?.slice(0, 3).join(', ') || 'many species'}.`,
            duration: 4000 
        },
        { 
            icon: '🏕️', 
            title: 'Indigenous Lands', 
            text: 'Respecting ancient tribal territories...', 
            fact: `Indigenous communities: ${currentForest.indigenousCommunities?.slice(0, 3).join(', ') || 'local peoples'}.`,
            duration: 3000 
        }
    ];

    // Create progress stages
    const progressStages = document.getElementById('progressStages');
    if (progressStages) {
        progressStages.innerHTML = journey.map((stage, i) => 
            `<span class="progress-stage" data-stage="${i}">${stage.icon}</span>`
        ).join('');
    }

    exploreBtn.onclick = () => {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        runExploration(journey, 0);
    };

    closeBtn.onclick = () => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        document.getElementById('progressBar').style.width = '0%';
    };
}

function runExploration(journey, index) {
    const overlay = document.getElementById('explorationOverlay');
    const title = document.getElementById('explorationTitle');
    const text = document.getElementById('explorationText');
    const stageIcon = document.getElementById('stageIcon');
    const progressBar = document.getElementById('progressBar');
    const facts = document.getElementById('explorationFacts');
    const explorationBg = document.getElementById('explorationBg');

    if (overlay.classList.contains('hidden')) return;

    if (index >= journey.length) {
        setTimeout(() => {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
            progressBar.style.width = '0%';
            showNotification('Exploration complete! You\'ve discovered the wonders of ' + currentForest.name);
        }, 1000);
        return;
    }

    const step = journey[index];
    
    // Update UI
    stageIcon.textContent = step.icon;
    title.textContent = step.title;
    text.textContent = step.text;
    facts.innerHTML = `<p>💡 ${step.fact}</p>`;
    progressBar.style.width = `${((index + 1) / journey.length) * 100}%`;

    // Update active stage
    document.querySelectorAll('.progress-stage').forEach((el, i) => {
        el.classList.toggle('active', i <= index);
    });

    // Change background
    if (currentForest.galleryImages && currentForest.galleryImages[index]) {
        explorationBg.style.backgroundImage = `url('${currentForest.galleryImages[index]}')`;
    }

    setTimeout(() => {
        runExploration(journey, index + 1);
    }, step.duration);
}

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const images = currentForest.galleryImages || [
        currentForest.image,
        currentForest.profileImage
    ].filter(Boolean);

    if (images.length === 0) {
        galleryGrid.innerHTML = '<p>No gallery images available.</p>';
        return;
    }

    galleryGrid.innerHTML = images.map((img, i) => `
        <div class="gallery-item" onclick="openLightbox('${img}', '${currentForest.name} - Image ${i + 1}')">
            <img src="${img}" alt="${currentForest.name} - Image ${i + 1}" 
                 onerror="this.parentElement.style.display='none'">
        </div>
    `).join('');
}

function renderRelatedForests() {
    const relatedGrid = document.getElementById('relatedGrid');
    if (!relatedGrid) return;

    // Find related forests (same type or nearby)
    const related = allForests
        .filter(f => f.id !== currentForest.id && 
                     (f.type === currentForest.type || 
                      f.location?.continent === currentForest.location?.continent))
        .slice(0, 4);

    if (related.length === 0) {
        relatedGrid.innerHTML = '<p>No related forests found.</p>';
        return;
    }

    relatedGrid.innerHTML = related.map(forest => `
        <a href="forest-profile.html?id=${forest.id}" class="related-card">
            <img src="${forest.image}" alt="${forest.name}" class="related-card-image"
                 onerror="this.src='https://images.unsplash.com/photo-1448375240586-882707db888b?w=200'">
            <h4 class="related-card-title">${forest.name}</h4>
            <span class="related-card-type">${getShortType(forest.type)}</span>
        </a>
    `).join('');
}

function setupFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    if (!favoriteBtn) return;

    const favorites = JSON.parse(localStorage.getItem('forestFavorites') || '[]');
    const isFavorite = favorites.includes(currentForest.id);
    
    favoriteBtn.querySelector('span').textContent = isFavorite ? '❤️' : '🤍';

    favoriteBtn.addEventListener('click', () => {
        const favorites = JSON.parse(localStorage.getItem('forestFavorites') || '[]');
        const index = favorites.indexOf(currentForest.id);
        
        if (index > -1) {
            favorites.splice(index, 1);
            favoriteBtn.querySelector('span').textContent = '🤍';
            showNotification('Removed from favorites');
        } else {
            favorites.push(currentForest.id);
            favoriteBtn.querySelector('span').textContent = '❤️';
            showNotification('Added to favorites!');
        }
        
        localStorage.setItem('forestFavorites', JSON.stringify(favorites));
    });
}

function createForestParticles() {
    const container = document.getElementById('forestParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatArea(area) {
    if (area >= 1000000) {
        return (area / 1000000).toFixed(2) + 'M km²';
    } else if (area >= 1000) {
        return (area / 1000).toFixed(0) + 'K km²';
    }
    return area.toLocaleString() + ' km²';
}

function getShortType(type) {
    if (type.toLowerCase().includes('tropical')) return '🌴 Tropical';
    if (type.toLowerCase().includes('boreal') || type.toLowerCase().includes('taiga')) return '❄️ Boreal';
    if (type.toLowerCase().includes('temperate')) return '🍂 Temperate';
    if (type.toLowerCase().includes('mangrove')) return '🌊 Mangrove';
    if (type.toLowerCase().includes('cloud')) return '☁️ Cloud';
    return '🌲 ' + type.split(' ')[0];
}

function getClimateZone(type) {
    if (type.toLowerCase().includes('tropical')) return 'Tropical (Af/Am)';
    if (type.toLowerCase().includes('boreal')) return 'Subarctic (Dfc/Dfd)';
    if (type.toLowerCase().includes('temperate')) return 'Temperate (Cfb/Cfc)';
    if (type.toLowerCase().includes('mangrove')) return 'Tropical Coastal';
    return 'Various';
}

function getHumidityLevel(type) {
    if (type.toLowerCase().includes('rainforest')) return 'Very High (80-90%)';
    if (type.toLowerCase().includes('tropical')) return 'High (70-85%)';
    if (type.toLowerCase().includes('temperate')) return 'Moderate (60-80%)';
    if (type.toLowerCase().includes('boreal')) return 'Low to Moderate (40-60%)';
    return 'Variable';
}

function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightboxCaption.textContent = caption;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #2D6A4F;
        color: #F1FAEE;
        padding: 15px 30px;
        border-radius: 50px;
        font-size: 1rem;
        z-index: 5000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;

    // Add animation keyframes
    if (!document.getElementById('notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideUp {
                from { transform: translateX(-50%) translateY(100px); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== NAVIGATION FUNCTIONS =====
function goHome() {
    window.location.href = 'index.html';
}

function goBack() {
    window.location.href = 'forest.html';
}

function openForestProfile(forestId) {
    window.location.href = `forest-profile.html?id=${forestId}`;
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        const overlay = document.getElementById('explorationOverlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
});

// Close lightbox on background click
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});
