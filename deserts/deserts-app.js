/* ==========================================
   DESERTS EXPLORER - MAIN APPLICATION
   ========================================== */

// ==========================================
// GLOBAL STATE & CONFIGURATION
// ==========================================
const APP_STATE = {
    currentFilter: 'all',
    currentContinent: 'all',
    currentSort: 'area-desc',
    searchQuery: '',
    isNightMode: false,
    isSandstormActive: false,
    currentFactIndex: 0,
    desertsData: [],
    filteredDeserts: [],
    map: null,
    mapMarkers: []
};

const CONFIG = {
    sandParticleCount: 50,
    sandstormParticleCount: 150,
    starCount: 100,
    campfireCount: 5,
    flagsToShow: 3,
    animationDuration: 300
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    const isProfilePage = document.body.classList.contains('profile-page');
    
    // Initialize common elements
    initSandParticles();
    initDayNightToggle();
    initStars();
    initCampfires();
    
    if (isProfilePage) {
        initProfilePage();
    } else {
        initMainPage();
    }
});

// ==========================================
// MAIN PAGE INITIALIZATION
// ==========================================
function initMainPage() {
    // Load deserts data
    loadDesertsData();
    
    // Initialize search
    initSearch();
    
    // Initialize filters
    initFilters();
    
    // Initialize sort
    initSort();
    
    // Initialize reset buttons
    initResetButtons();
}

function loadDesertsData() {
    // Combine all desert data from separate files
    if (typeof DESERTS_DATA !== 'undefined') {
        APP_STATE.desertsData = DESERTS_DATA;
        APP_STATE.filteredDeserts = [...DESERTS_DATA];
        
        // Update stats
        updateStats();
        
        // Render cards
        renderDesertCards();
        
        // Hide loading
        hideLoading();
    } else {
        console.error('Desert data not loaded');
        showError();
    }
}

function updateStats() {
    const totalDesertsEl = document.getElementById('totalDeserts');
    const totalCountriesEl = document.getElementById('totalCountries');
    const largestDesertEl = document.getElementById('largestDesert');
    
    if (totalDesertsEl) {
        totalDesertsEl.textContent = APP_STATE.desertsData.length;
    }
    
    if (totalCountriesEl) {
        const uniqueCountries = new Set();
        APP_STATE.desertsData.forEach(desert => {
            desert.countries.forEach(country => uniqueCountries.add(country.code));
        });
        totalCountriesEl.textContent = uniqueCountries.size + '+';
    }
    
    if (largestDesertEl) {
        const largest = APP_STATE.desertsData.reduce((max, desert) => 
            desert.area > max.area ? desert : max
        , APP_STATE.desertsData[0]);
        largestDesertEl.textContent = formatArea(largest.area, true);
    }
}

// ==========================================
// DESERT CARDS RENDERING
// ==========================================
function renderDesertCards() {
    const grid = document.getElementById('desertsGrid');
    const template = document.getElementById('desertCardTemplate');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!grid || !template) return;
    
    // Clear existing cards
    grid.innerHTML = '';
    
    // Check if we have results
    if (APP_STATE.filteredDeserts.length === 0) {
        noResults.style.display = 'block';
        resultsCount.textContent = 'No deserts found';
        return;
    }
    
    noResults.style.display = 'none';
    resultsCount.textContent = `Showing ${APP_STATE.filteredDeserts.length} desert${APP_STATE.filteredDeserts.length !== 1 ? 's' : ''}`;
    
    // Create document fragment for performance
    const fragment = document.createDocumentFragment();
    
    // Render each desert card
    APP_STATE.filteredDeserts.forEach((desert, index) => {
        const card = createDesertCard(desert, template, index);
        fragment.appendChild(card);
    });
    
    // Add "Coming Soon" card at the end
    const comingSoonCard = createComingSoonCard();
    fragment.appendChild(comingSoonCard);
    
    grid.appendChild(fragment);
    
    // Animate cards entrance
    animateCardsEntrance();
}

function createDesertCard(desert, template, index) {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.desert-card');
    
    // Set data attribute
    card.dataset.id = desert.id;
    card.style.animationDelay = `${index * 50}ms`;
    
    // Set image
    const img = card.querySelector('.desert-image');
    img.src = desert.image;
    img.alt = desert.name;
    img.onerror = () => {
        img.src = `https://source.unsplash.com/400x400/?${encodeURIComponent(desert.name + ' desert')}`;
    };
    
    // Set type badge
    const typeBadge = card.querySelector('.type-badge');
    typeBadge.className = `type-badge ${desert.desertType}`;
    typeBadge.querySelector('i').className = getTypeIcon(desert.desertType);
    typeBadge.querySelector('span').textContent = formatDesertType(desert.desertType);
    
    // Set temperature
    const tempIndicator = card.querySelector('.temp-indicator');
    const tempValue = tempIndicator.querySelector('.temp-value');
    if (desert.climate && desert.climate.avgTempSummer) {
        tempValue.textContent = desert.climate.avgTempSummer;
    } else {
        tempIndicator.style.display = 'none';
    }
    
    // Set name
    card.querySelector('.desert-name').textContent = desert.name;
    
    // Set country flags
    const flagsContainer = card.querySelector('.country-flags');
    renderCountryFlags(flagsContainer, desert.countries);
    
    // Set continent
    card.querySelector('.continent-name').textContent = desert.continent;
    
    // Set area
    card.querySelector('.area-value').textContent = formatArea(desert.area);
    
    // Set explore link
    const exploreBtn = card.querySelector('.explore-btn');
    exploreBtn.href = `deserts-profile.html?id=${desert.id}`;
    
    // Add click handler for entire card
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.explore-btn')) {
            window.location.href = `deserts-profile.html?id=${desert.id}`;
        }
    });
    
    return card;
}

// ==========================================
// COMING SOON CARD
// ==========================================
function createComingSoonCard() {
    const card = document.createElement('article');
    card.className = 'desert-card coming-soon-card';
    
    card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-image-container">
            <div class="image-wrapper coming-soon-image">
                <div class="coming-soon-icon">
                    <i class="fas fa-hourglass-half"></i>
                </div>
                <div class="coming-soon-sand"></div>
                <div class="coming-soon-sand sand-2"></div>
            </div>
        </div>
        <div class="card-content">
            <h3 class="desert-name">More Deserts Coming Soon</h3>
            <div class="desert-location">
                <p class="coming-soon-text">We're exploring more arid wonders across the globe</p>
            </div>
            <div class="coming-soon-features">
                <span><i class="fas fa-plus-circle"></i> New Discoveries</span>
                <span><i class="fas fa-camera"></i> Stunning Photos</span>
                <span><i class="fas fa-map-marked-alt"></i> Interactive Maps</span>
            </div>
        </div>
        <div class="card-footer">
            <div class="coming-soon-badge">
                <i class="fas fa-clock"></i>
                <span>Stay Tuned</span>
            </div>
        </div>
    `;
    
    // Add hover animation
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.coming-soon-icon i');
        icon.classList.add('fa-spin');
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.coming-soon-icon i');
        icon.classList.remove('fa-spin');
    });
    
    return card;
}

// Add Coming Soon card styles dynamically
function addComingSoonStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .coming-soon-card {
            background: linear-gradient(145deg, rgba(230, 126, 34, 0.1) 0%, rgba(193, 154, 107, 0.05) 100%);
            border: 2px dashed rgba(193, 154, 107, 0.4);
            cursor: default;
        }
        
        .coming-soon-card:hover {
            transform: translateY(-10px);
            box-shadow: 
                0 20px 40px rgba(210, 105, 30, 0.3),
                0 0 30px rgba(255, 140, 0, 0.2);
            border-color: var(--dune-orange-1);
        }
        
        .coming-soon-image {
            background: linear-gradient(135deg, var(--night-2) 0%, var(--night-3) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .coming-soon-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, var(--dune-orange-1), var(--sun-gold-1));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.5);
        }
        
        .coming-soon-icon i {
            font-size: 1.8rem;
            color: var(--text-dark);
            transition: transform 0.3s ease;
        }
        
        .coming-soon-sand {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            background: linear-gradient(to top, var(--sand-dark-2), transparent);
            animation: sandRise 3s ease-in-out infinite;
        }
        
        .coming-soon-sand.sand-2 {
            height: 20px;
            opacity: 0.5;
            animation-delay: 1.5s;
        }
        
        @keyframes sandRise {
            0%, 100% {
                transform: translateY(10px);
                opacity: 0.5;
            }
            50% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .coming-soon-text {
            font-size: 0.85rem;
            color: var(--sand-light-3);
            text-align: center;
            line-height: 1.5;
        }
        
        .coming-soon-features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-top: var(--spacing-sm);
        }
        
        .coming-soon-features span {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px 10px;
            background: rgba(193, 154, 107, 0.15);
            border-radius: 15px;
            font-size: 0.75rem;
            color: var(--sand-light-2);
        }
        
        .coming-soon-features span i {
            color: var(--dune-orange-1);
            font-size: 0.7rem;
        }
        
        .coming-soon-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, rgba(193, 154, 107, 0.2), rgba(139, 69, 19, 0.2));
            border: 1px solid rgba(193, 154, 107, 0.3);
            border-radius: var(--radius-md);
            color: var(--sun-gold-1);
            font-weight: 500;
        }
        
        .coming-soon-badge i {
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
}

// Call this on initialization
addComingSoonStyles();

function animateCardsEntrance() {
    const cards = document.querySelectorAll('.desert-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ==========================================
// COUNTRY FLAGS RENDERING
// ==========================================
function renderCountryFlags(container, countries) {
    container.innerHTML = '';
    
    const maxFlags = CONFIG.flagsToShow;
    const displayCountries = countries.slice(0, maxFlags);
    const remaining = countries.length - maxFlags;
    
    displayCountries.forEach(country => {
        const img = document.createElement('img');
        img.src = `https://flagcdn.com/w40/${country.code.toLowerCase()}.png`;
        img.alt = country.name;
        img.title = country.name;
        img.loading = 'lazy';
        container.appendChild(img);
    });
    
    if (remaining > 0) {
        const more = document.createElement('span');
        more.className = 'more-countries';
        more.textContent = `+${remaining}`;
        more.title = countries.slice(maxFlags).map(c => c.name).join(', ');
        container.appendChild(more);
    }
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            APP_STATE.searchQuery = e.target.value.trim().toLowerCase();
            applyFilters();
        }, 300);
    });
    
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        APP_STATE.searchQuery = '';
        applyFilters();
    });
}

// ==========================================
// FILTER FUNCTIONALITY
// ==========================================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn[data-type]');
    const continentFilter = document.getElementById('continentFilter');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            // Update state
            APP_STATE.currentFilter = btn.dataset.type;
            applyFilters();
        });
    });
    
    if (continentFilter) {
        continentFilter.addEventListener('change', (e) => {
            APP_STATE.currentContinent = e.target.value;
            applyFilters();
        });
    }
}

// ==========================================
// SORT FUNCTIONALITY
// ==========================================
function initSort() {
    const sortFilter = document.getElementById('sortFilter');
    
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            APP_STATE.currentSort = e.target.value;
            applyFilters();
        });
    }
}

// ==========================================
// APPLY FILTERS & SORT
// ==========================================
function applyFilters() {
    let filtered = [...APP_STATE.desertsData];
    
    // Apply search filter
    if (APP_STATE.searchQuery) {
        filtered = filtered.filter(desert => {
            const searchFields = [
                desert.name,
                desert.continent,
                ...desert.countries.map(c => c.name),
                ...(desert.features || []),
                ...(desert.wildlife || []),
                ...(desert.plants || [])
            ].join(' ').toLowerCase();
            
            return searchFields.includes(APP_STATE.searchQuery);
        });
    }
    
    // Apply type filter
    if (APP_STATE.currentFilter !== 'all') {
        filtered = filtered.filter(desert => 
            desert.desertType === APP_STATE.currentFilter
        );
    }
    
    // Apply continent filter
    if (APP_STATE.currentContinent !== 'all') {
        filtered = filtered.filter(desert => 
            desert.continent === APP_STATE.currentContinent
        );
    }
    
    // Apply sorting
    filtered = sortDeserts(filtered, APP_STATE.currentSort);
    
    APP_STATE.filteredDeserts = filtered;
    
    // Update active filters display
    updateActiveFilters();
    
    // Re-render cards
    renderDesertCards();
}

function sortDeserts(deserts, sortType) {
    const sorted = [...deserts];
    
    switch (sortType) {
        case 'area-desc':
            return sorted.sort((a, b) => b.area - a.area);
        case 'area-asc':
            return sorted.sort((a, b) => a.area - b.area);
        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'temp-desc':
            return sorted.sort((a, b) => {
                const tempA = parseTemp(a.climate?.avgTempSummer);
                const tempB = parseTemp(b.climate?.avgTempSummer);
                return tempB - tempA;
            });
        case 'temp-asc':
            return sorted.sort((a, b) => {
                const tempA = parseTemp(a.climate?.avgTempSummer);
                const tempB = parseTemp(b.climate?.avgTempSummer);
                return tempA - tempB;
            });
        default:
            return sorted;
    }
}

function parseTemp(tempStr) {
    if (!tempStr) return 0;
    const match = tempStr.match(/-?\d+/);
    return match ? parseInt(match[0]) : 0;
}

function updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filters = [];
    
    if (APP_STATE.currentFilter !== 'all') {
        filters.push({
            label: formatDesertType(APP_STATE.currentFilter),
            type: 'type'
        });
    }
    
    if (APP_STATE.currentContinent !== 'all') {
        filters.push({
            label: APP_STATE.currentContinent,
            type: 'continent'
        });
    }
    
    if (APP_STATE.searchQuery) {
        filters.push({
            label: `"${APP_STATE.searchQuery}"`,
            type: 'search'
        });
    }
    
    filters.forEach(filter => {
        const tag = document.createElement('div');
        tag.className = 'active-filter-tag';
        tag.innerHTML = `
            <span>${filter.label}</span>
            <button data-filter-type="${filter.type}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        tag.querySelector('button').addEventListener('click', () => {
            removeFilter(filter.type);
        });
        
        container.appendChild(tag);
    });
}

function removeFilter(type) {
    switch (type) {
        case 'type':
            APP_STATE.currentFilter = 'all';
            document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.type === 'all');
            });
            break;
        case 'continent':
            APP_STATE.currentContinent = 'all';
            document.getElementById('continentFilter').value = 'all';
            break;
        case 'search':
            APP_STATE.searchQuery = '';
            document.getElementById('searchInput').value = '';
            break;
    }
    applyFilters();
}

// ==========================================
// RESET BUTTONS
// ==========================================
function initResetButtons() {
    const resetFilters = document.getElementById('resetFilters');
    const resetFromEmpty = document.getElementById('resetFromEmpty');
    
    const resetAll = () => {
        APP_STATE.currentFilter = 'all';
        APP_STATE.currentContinent = 'all';
        APP_STATE.currentSort = 'area-desc';
        APP_STATE.searchQuery = '';
        
        // Reset UI
        document.getElementById('searchInput').value = '';
        document.getElementById('continentFilter').value = 'all';
        document.getElementById('sortFilter').value = 'area-desc';
        
        document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === 'all');
        });
        
        applyFilters();
    };
    
    if (resetFilters) resetFilters.addEventListener('click', resetAll);
    if (resetFromEmpty) resetFromEmpty.addEventListener('click', resetAll);
}

// ==========================================
// SAND PARTICLES
// ==========================================
function initSandParticles() {
    const container = document.getElementById('sandParticles');
    if (!container) return;
    
    for (let i = 0; i < CONFIG.sandParticleCount; i++) {
        createSandParticle(container);
    }
}

function createSandParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'sand-particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const startY = Math.random() * 100;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 15;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${startY}%;
        left: -10px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

// ==========================================
// DAY/NIGHT TOGGLE
// ==========================================
function initDayNightToggle() {
    const toggle = document.getElementById('dayNightToggle');
    if (!toggle) return;
    
    // Check for saved preference
    const savedMode = localStorage.getItem('desertExplorerMode');
    if (savedMode === 'night') {
        toggle.checked = true;
        document.body.classList.remove('day-mode');
        document.body.classList.add('night-mode');
        APP_STATE.isNightMode = true;
    }
    
    toggle.addEventListener('change', () => {
        APP_STATE.isNightMode = toggle.checked;
        
        if (toggle.checked) {
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
            localStorage.setItem('desertExplorerMode', 'night');
        } else {
            document.body.classList.remove('night-mode');
            document.body.classList.add('day-mode');
            localStorage.setItem('desertExplorerMode', 'day');
        }
    });
}

// ==========================================
// STARS (NIGHT MODE)
// ==========================================
function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    
    for (let i = 0; i < CONFIG.starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 3;
        const duration = Math.random() * 2 + 1;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        container.appendChild(star);
    }
}

// ==========================================
// CAMPFIRE GLOWS (NIGHT MODE)
// ==========================================
function initCampfires() {
    const container = document.getElementById('campfireGlows');
    if (!container) return;
    
    for (let i = 0; i < CONFIG.campfireCount; i++) {
        const glow = document.createElement('div');
        glow.className = 'campfire-glow';
        
        const x = Math.random() * 100;
        const delay = Math.random() * 2;
        
        glow.style.cssText = `
            left: ${x}%;
            animation-delay: ${delay}s;
        `;
        
        container.appendChild(glow);
    }
}

// ==========================================
// PROFILE PAGE INITIALIZATION
// ==========================================
function initProfilePage() {
    // Get desert ID from URL
    const params = new URLSearchParams(window.location.search);
    const desertId = params.get('id');
    
    if (!desertId) {
        showError();
        return;
    }
    
    // Find desert data
    const desert = DESERTS_DATA.find(d => d.id === desertId);
    
    if (!desert) {
        showError();
        return;
    }
    
    // Render profile
    renderProfile(desert);
    
    // Initialize profile features
    initSandstormToggle();
    initMindMap();
    initFunFactsCarousel(desert.funFacts);
    initDesertNavigation(desert);
    initMap(desert);
    initImageModal();
    
    // Hide loading
    hideLoading();
}

// ==========================================
// PROFILE RENDERING
// ==========================================
function renderProfile(desert) {
    // Update page title
    document.title = `${desert.name} - Deserts Explorer`;
    
    // Hero section
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.src = desert.image;
        heroImage.alt = desert.name;
    }
    
    // Desert type badge
    const typeBadge = document.getElementById('desertTypeBadge');
    if (typeBadge) {
        typeBadge.className = `desert-type-badge ${desert.desertType}`;
        typeBadge.querySelector('i').className = getTypeIcon(desert.desertType);
        typeBadge.querySelector('span').textContent = formatDesertType(desert.desertType) + ' Desert';
    }
    
    // Title
    const title = document.getElementById('desertTitle');
    if (title) title.textContent = desert.name;
    
    // Country flags
    const flagsContainer = document.getElementById('countryFlags');
    if (flagsContainer) {
        renderLargeCountryFlags(flagsContainer, desert.countries);
    }
    
    // Continent badge
    const continentBadge = document.getElementById('continentBadge');
    if (continentBadge) {
        continentBadge.querySelector('i').className = getContinentIcon(desert.continent);
        continentBadge.querySelector('span').textContent = desert.continent;
    }
    
    // Hero stats
    updateHeroStats(desert);
    
    // Quick facts
    updateQuickFacts(desert);
    
    // Mind map center
    const mindMapImage = document.getElementById('mindMapImage');
    const mindMapTitle = document.getElementById('mindMapTitle');
    if (mindMapImage) {
        mindMapImage.src = desert.image;
        mindMapImage.alt = desert.name;
    }
    if (mindMapTitle) mindMapTitle.textContent = desert.name;
    
    // Populate mind map branches
    populateMindMapBranch('featuresContent', desert.features, 'fas fa-mountain');
    populateMindMapBranch('wildlifeContent', desert.wildlife, 'fas fa-paw');
    populateMindMapBranch('plantsContent', desert.plants, 'fas fa-leaf');
    populateMindMapBranch('peoplesContent', desert.peoples, 'fas fa-user');
    populateMindMapBranch('economyContent', desert.economy, 'fas fa-briefcase');
    populateMindMapBranch('threatsContent', desert.threats, 'fas fa-exclamation-circle');
    
    // Landmarks
    populateLandmarks('landmarksContent', desert.landmarks);
    
    // Oases
    populateOases('oasesContent', desert.oases);
    
    // Countries grid
    renderCountriesGrid(desert.countries);
    
    // Cities grid
    renderCitiesGrid(desert.cities);
}

function renderLargeCountryFlags(container, countries) {
    container.innerHTML = '';
    
    countries.forEach(country => {
        const img = document.createElement('img');
        img.src = `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`;
        img.alt = country.name;
        img.title = country.name;
        container.appendChild(img);
    });
}

function updateHeroStats(desert) {
    const statArea = document.getElementById('statArea');
    const statMaxTemp = document.getElementById('statMaxTemp');
    const statRainfall = document.getElementById('statRainfall');
    const statCountries = document.getElementById('statCountries');
    
    if (statArea) statArea.textContent = formatArea(desert.area, true);
    if (statMaxTemp) statMaxTemp.textContent = desert.climate?.maxRecorded || '--';
    if (statRainfall) statRainfall.textContent = desert.climate?.rainfall || '--';
    if (statCountries) statCountries.textContent = desert.countries.length;
}

function updateQuickFacts(desert) {
    const factArea = document.getElementById('factArea');
    const factSummerTemp = document.getElementById('factSummerTemp');
    const factWinterTemp = document.getElementById('factWinterTemp');
    const factMaxRecorded = document.getElementById('factMaxRecorded');
    const factRainfall = document.getElementById('factRainfall');
    const factCoordinates = document.getElementById('factCoordinates');
    
    if (factArea) factArea.textContent = formatArea(desert.area) + ' km²';
    if (factSummerTemp) factSummerTemp.textContent = desert.climate?.avgTempSummer || '--';
    if (factWinterTemp) factWinterTemp.textContent = desert.climate?.avgTempWinter || '--';
    if (factMaxRecorded) factMaxRecorded.textContent = desert.climate?.maxRecorded || '--';
    if (factRainfall) factRainfall.textContent = desert.climate?.rainfall || '--';
    if (factCoordinates && desert.coordinates) {
        factCoordinates.textContent = `${desert.coordinates[0].toFixed(2)}°, ${desert.coordinates[1].toFixed(2)}°`;
    }
}

function populateMindMapBranch(containerId, items, icon) {
    const container = document.getElementById(containerId);
    if (!container || !items || items.length === 0) return;
    
    const inner = document.createElement('div');
    inner.className = 'node-content-inner';
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.innerHTML = `<i class="${icon}"></i><span>${item}</span>`;
        inner.appendChild(div);
    });
    
    container.appendChild(inner);
}

function populateLandmarks(containerId, landmarks) {
    const container = document.getElementById(containerId);
    if (!container || !landmarks || landmarks.length === 0) return;
    
    const inner = document.createElement('div');
    inner.className = 'node-content-inner';
    
    landmarks.forEach(landmark => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.innerHTML = `
            <i class="fas fa-map-pin"></i>
            <span>${landmark.name}</span>
        `;
        div.addEventListener('click', () => {
            if (APP_STATE.map && landmark.coordinates) {
                APP_STATE.map.setView(landmark.coordinates, 10);
            }
        });
        inner.appendChild(div);
    });
    
    container.appendChild(inner);
}

function populateOases(containerId, oases) {
    const container = document.getElementById(containerId);
    if (!container || !oases || oases.length === 0) return;
    
    const inner = document.createElement('div');
    inner.className = 'node-content-inner';
    
    oases.forEach(oasis => {
        const div = document.createElement('div');
        div.className = 'content-item';
        div.innerHTML = `
            <i class="fas fa-tint"></i>
            <span>${oasis.name}${oasis.country ? ` (${oasis.country})` : ''}</span>
        `;
        div.addEventListener('click', () => {
            if (APP_STATE.map && oasis.coordinates) {
                APP_STATE.map.setView(oasis.coordinates, 10);
            }
        });
        inner.appendChild(div);
    });
    
    container.appendChild(inner);
}

function renderCountriesGrid(countries) {
    const container = document.getElementById('countriesGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <img src="https://flagcdn.com/w80/${country.code.toLowerCase()}.png" 
                 alt="${country.name}" 
                 class="country-flag">
            <span class="country-name">${country.name}</span>
        `;
        container.appendChild(card);
    });
}

function renderCitiesGrid(cities) {
    const container = document.getElementById('citiesGrid');
    if (!container || !cities || cities.length === 0) {
        if (container) {
            container.innerHTML = '<p style="color: var(--sand-light-3);">No major cities listed</p>';
        }
        return;
    }
    
    container.innerHTML = '';
    
    cities.forEach(city => {
        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `
            <div class="city-icon">
                <i class="fas fa-city"></i>
            </div>
            <div class="city-info">
                <span class="city-name">${city.name}</span>
                <span class="city-country">${city.country}</span>
            </div>
            <button class="city-locate" title="Show on map">
                <i class="fas fa-map-marker-alt"></i>
            </button>
        `;
        
        card.querySelector('.city-locate').addEventListener('click', () => {
            if (APP_STATE.map && city.coordinates) {
                APP_STATE.map.setView(city.coordinates, 10);
                // Scroll to map
                document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        container.appendChild(card);
    });
}

// ==========================================
// SANDSTORM TOGGLE
// ==========================================
function initSandstormToggle() {
    const btn = document.getElementById('sandstormToggle');
    const overlay = document.getElementById('sandstormOverlay');
    
    if (!btn || !overlay) return;
    
    btn.addEventListener('click', () => {
        APP_STATE.isSandstormActive = !APP_STATE.isSandstormActive;
        btn.classList.toggle('active', APP_STATE.isSandstormActive);
        overlay.classList.toggle('active', APP_STATE.isSandstormActive);
        
        if (APP_STATE.isSandstormActive) {
            createSandstormParticles(overlay);
        } else {
            overlay.innerHTML = '';
        }
    });
}

function createSandstormParticles(container) {
    for (let i = 0; i < CONFIG.sandstormParticleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'sandstorm-particle';
        
        const size = Math.random() * 5 + 2;
        const startY = Math.random() * 100;
        const duration = Math.random() * 1.5 + 0.5;
        const delay = Math.random() * 2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            top: ${startY}%;
            left: -20px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        container.appendChild(particle);
    }
}

// ==========================================
// MIND MAP INTERACTIVITY
// ==========================================
function initMindMap() {
    const branches = document.querySelectorAll('.mind-branch');
    
    branches.forEach(branch => {
        const header = branch.querySelector('.node-header');
        
        header.addEventListener('click', () => {
            // Close other branches
            branches.forEach(b => {
                if (b !== branch) b.classList.remove('expanded');
            });
            // Toggle this branch
            branch.classList.toggle('expanded');
        });
    });
}

// ==========================================
// FUN FACTS CAROUSEL
// ==========================================
function initFunFactsCarousel(facts) {
    const carousel = document.getElementById('funFactsCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevFact');
    const nextBtn = document.getElementById('nextFact');
    
    if (!carousel || !facts || facts.length === 0) return;
    
    // Create track
    const track = document.createElement('div');
    track.className = 'fun-facts-track';
    
    facts.forEach((fact, index) => {
        const card = document.createElement('div');
        card.className = 'fun-fact-card';
        card.innerHTML = `
            <div class="fact-icon">
                <i class="fas fa-lightbulb"></i>
            </div>
            <p class="fact-text">${fact}</p>
        `;
        track.appendChild(card);
    });
    
    carousel.appendChild(track);
    
    // Create dots
    facts.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToFact(index));
        dotsContainer.appendChild(dot);
    });
    
    // Navigation
    function goToFact(index) {
        APP_STATE.currentFactIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        const newIndex = APP_STATE.currentFactIndex === 0 
            ? facts.length - 1 
            : APP_STATE.currentFactIndex - 1;
        goToFact(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = APP_STATE.currentFactIndex === facts.length - 1 
            ? 0 
            : APP_STATE.currentFactIndex + 1;
        goToFact(newIndex);
    });
    
    // Auto-advance
    setInterval(() => {
        const newIndex = (APP_STATE.currentFactIndex + 1) % facts.length;
        goToFact(newIndex);
    }, 8000);
}

// ==========================================
// DESERT NAVIGATION (PREV/NEXT)
// ==========================================
function initDesertNavigation(currentDesert) {
    const currentIndex = DESERTS_DATA.findIndex(d => d.id === currentDesert.id);
    const prevDesert = DESERTS_DATA[currentIndex - 1];
    const nextDesert = DESERTS_DATA[currentIndex + 1];
    
    const prevLink = document.getElementById('prevDesert');
    const nextLink = document.getElementById('nextDesert');
    const prevName = document.getElementById('prevDesertName');
    const nextName = document.getElementById('nextDesertName');
    
    if (prevDesert && prevLink && prevName) {
        prevLink.href = `deserts-profile.html?id=${prevDesert.id}`;
        prevName.textContent = prevDesert.name;
    } else if (prevLink) {
        prevLink.style.visibility = 'hidden';
    }
    
    if (nextDesert && nextLink && nextName) {
        nextLink.href = `deserts-profile.html?id=${nextDesert.id}`;
        nextName.textContent = nextDesert.name;
    } else if (nextLink) {
        nextLink.style.visibility = 'hidden';
    }
}

// ==========================================
// MAP INITIALIZATION
// ==========================================
function initMap(desert) {
    const mapContainer = document.getElementById('desertMap');
    if (!mapContainer || !desert.coordinates) return;
    
    // Initialize map
    APP_STATE.map = L.map('desertMap', {
        center: desert.coordinates,
        zoom: 5,
        scrollWheelZoom: true
    });
    
    // Custom desert-themed tile layer
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
        maxZoom: 17
    });
    
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri'
    });
    
    terrainLayer.addTo(APP_STATE.map);
    
    // Map control buttons
    const mapControls = document.querySelectorAll('.map-control-btn');
    mapControls.forEach(btn => {
        btn.addEventListener('click', () => {
            mapControls.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.layer === 'terrain') {
                APP_STATE.map.removeLayer(satelliteLayer);
                APP_STATE.map.addLayer(terrainLayer);
            } else {
                APP_STATE.map.removeLayer(terrainLayer);
                APP_STATE.map.addLayer(satelliteLayer);
            }
        });
    });
    
    // Add desert polygon if available
    if (desert.geoJSON) {
        L.geoJSON(desert.geoJSON, {
            style: {
                fillColor: '#D2691E',
                fillOpacity: 0.3,
                color: '#8B4513',
                weight: 2
            }
        }).addTo(APP_STATE.map);
    }
    
    // Add center marker
    const desertIcon = L.divIcon({
        className: 'desert-marker',
        html: '<i class="fas fa-sun" style="color: #FFD700; font-size: 24px; text-shadow: 0 0 10px rgba(255,215,0,0.5);"></i>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker(desert.coordinates, { icon: desertIcon })
        .addTo(APP_STATE.map)
        .bindPopup(`<strong>${desert.name}</strong>`);
    
    // Add landmarks
    if (desert.landmarks) {
        const landmarkIcon = L.divIcon({
            className: 'landmark-marker',
            html: '<i class="fas fa-mountain" style="color: #FFD700; font-size: 16px;"></i>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        desert.landmarks.forEach(landmark => {
            if (landmark.coordinates) {
                L.marker(landmark.coordinates, { icon: landmarkIcon })
                    .addTo(APP_STATE.map)
                    .bindPopup(`<strong>${landmark.name}</strong><br>Landmark`);
            }
        });
    }
    
    // Add oases
    if (desert.oases) {
        const oasisIcon = L.divIcon({
            className: 'oasis-marker',
            html: '<i class="fas fa-tint" style="color: #1ABC9C; font-size: 16px;"></i>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        desert.oases.forEach(oasis => {
            if (oasis.coordinates) {
                L.marker(oasis.coordinates, { icon: oasisIcon })
                    .addTo(APP_STATE.map)
                    .bindPopup(`<strong>${oasis.name}</strong><br>Oasis${oasis.country ? ` - ${oasis.country}` : ''}`);
            }
        });
    }
    
    // Add cities
    if (desert.cities) {
        const cityIcon = L.divIcon({
            className: 'city-marker',
            html: '<i class="fas fa-city" style="color: #A0522D; font-size: 16px;"></i>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        desert.cities.forEach(city => {
            if (city.coordinates) {
                L.marker(city.coordinates, { icon: cityIcon })
                    .addTo(APP_STATE.map)
                    .bindPopup(`<strong>${city.name}</strong><br>${city.country}`);
            }
        });
    }
}

// ==========================================
// IMAGE MODAL
// ==========================================
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');
    
    if (!modal) return;
    
    // Click on images to open modal
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && 
            !e.target.closest('.country-flags') && 
            !e.target.closest('.country-flags-large') &&
            !e.target.closest('.country-card')) {
            modalImage.src = e.target.src;
            modalCaption.textContent = e.target.alt;
            modal.classList.add('active');
        }
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatArea(area, short = false) {
    if (area >= 1000000) {
        return (area / 1000000).toFixed(1) + (short ? 'M' : ' million');
    } else if (area >= 1000) {
        return (area / 1000).toFixed(0) + (short ? 'K' : ',000');
    }
    return area.toLocaleString();
}

function formatDesertType(type) {
    const types = {
        'hot': 'Hot',
        'cold': 'Cold',
        'coastal': 'Coastal',
        'rain-shadow': 'Rain Shadow'
    };
    return types[type] || type;
}

function getTypeIcon(type) {
    const icons = {
        'hot': 'fas fa-fire',
        'cold': 'fas fa-snowflake',
        'coastal': 'fas fa-water',
        'rain-shadow': 'fas fa-mountain'
    };
    return icons[type] || 'fas fa-globe';
}

function getContinentIcon(continent) {
    const icons = {
        'Africa': 'fas fa-globe-africa',
        'Asia': 'fas fa-globe-asia',
        'Australia': 'fas fa-globe-asia',
        'Europe': 'fas fa-globe-europe',
        'North America': 'fas fa-globe-americas',
        'South America': 'fas fa-globe-americas',
        'Antarctica': 'fas fa-snowflake'
    };
    return icons[continent] || 'fas fa-globe';
}

function hideLoading() {
    const loadingState = document.getElementById('loadingState');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    if (loadingState) loadingState.style.display = 'none';
    if (loadingOverlay) loadingOverlay.classList.remove('active');
}

function showError() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.innerHTML = `
            <div class="loading-content">
                <div class="no-results-icon">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--desert-red-1);"></i>
                </div>
                <h3 style="color: var(--text-cream); margin-top: 1rem;">Desert Not Found</h3>
                <p style="color: var(--sand-light-3); margin: 1rem 0;">The desert you're looking for doesn't exist.</p>
                <a href="deserts.html" class="reset-btn">
                    <i class="fas fa-arrow-left"></i> Back to Explorer
                </a>
            </div>
        `;
        loadingOverlay.classList.add('active');
    }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections on profile page
document.querySelectorAll('.profile-main section').forEach(section => {
    scrollObserver.observe(section);
});

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .profile-main section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .profile-main section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyles);

console.log('🏜️ Deserts Explorer initialized successfully!');
