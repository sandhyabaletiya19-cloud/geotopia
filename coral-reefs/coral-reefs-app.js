// ============================================
// PREMIUM ACCESS CONTROL WRAPPER
// ============================================
(function() {
    var originalInit = window.initCoralReefs || function() {};
    
    window.addEventListener('DOMContentLoaded', function() {
        if (typeof window.GeoAccess === 'undefined') {
            console.log('GeoAccess not loaded, running normal mode');
            originalInit();
            return;
        }
        
        // Intercept data before rendering
        var originalData = window.coralReefsData || [];
        var filteredData = window.GeoAccess.getFilteredData(originalData, 'coralReefs');
        
        // Replace original data with filtered visible items
        window.coralReefsData = filteredData.visible;
        
        // Run your original code
        originalInit();
        
        // Add locked preview items after original renders
        setTimeout(function() {
            var container = document.querySelector('.grid') || 
                           document.querySelector('.cards') || 
                           document.querySelector('.reef-cards') ||
                           document.querySelector('main');
            
            if (container && filteredData.preview) {
                filteredData.preview.forEach(function(item, index) {
                    var cards = container.querySelectorAll('.card, .reef-card');
                    if (cards.length > 0) {
                        var firstCard = cards[0];
                        var lockedCard = firstCard.cloneNode(true);
                        lockedCard.classList.add('geo-locked-item');
                        
                        var overlay = window.GeoAccess.createLockedOverlay(item, index);
                        lockedCard.appendChild(overlay);
                        container.appendChild(lockedCard);
                    }
                });
                
                // Add upgrade CTA
                if (filteredData.lockedCount > 0) {
                    var cta = window.GeoAccess.createUpgradeCTA({
                        lockedCount: filteredData.lockedCount,
                        category: 'Coral Reefs'
                    });
                    container.appendChild(cta);
                }
            }
        }, 500);
    });
})();

/* ========================================
   CORAL REEFS EXPLORER - MAIN APPLICATION
   ======================================== */

const CoralReefsApp = (function() {
    'use strict';

    // ===== STATE MANAGEMENT =====
    const state = {
        allReefs: [],
        filteredReefs: [],
        displayedReefs: [],
        currentFilter: 'all',
        currentSort: 'size-desc',
        searchQuery: '',
        itemsPerPage: 20,
        currentPage: 1,
        isLoading: true,
        isDayMode: true,
        isSoundOn: false,
        worldMap: null,
        reefMap: null,
        currentReef: null,
        galleryPosition: 0
    };

    // ===== DOM ELEMENTS =====
    const elements = {};

    // ===== INITIALIZATION =====
    function init() {
        cacheElements();
        loadAllReefData();
        bindEvents();
        initLoadingScreen();
    }

    function cacheElements() {
        // Main page elements
        elements.loadingScreen = document.getElementById('loading-screen');
        elements.reefCardsGrid = document.getElementById('reef-cards-grid');
        elements.searchInput = document.getElementById('reef-search');
        elements.clearSearchBtn = document.getElementById('clear-search');
        elements.filterBtns = document.querySelectorAll('.filter-btn');
        elements.sortSelect = document.getElementById('sort-select');
        elements.visibleCount = document.getElementById('visible-count');
        elements.loadMoreBtn = document.getElementById('load-more-btn');
        elements.noResults = document.getElementById('no-results');
        elements.resetFiltersBtn = document.getElementById('reset-filters');
        elements.dayNightToggle = document.getElementById('day-night-toggle');
        elements.mapViewToggle = document.getElementById('map-view-toggle');
        elements.soundToggle = document.getElementById('sound-toggle');
        elements.worldMapSection = document.getElementById('world-map-section');
        elements.worldMap = document.getElementById('world-map');
        elements.closeMapBtn = document.getElementById('close-map');
        elements.scrollToTop = document.getElementById('scroll-to-top');
        elements.oceanSound = document.getElementById('ocean-sound');

        // Profile page elements (if on profile page)
        if (document.body.classList.contains('profile-page')) {
            elements.reefBackground = document.getElementById('reef-background');
            elements.reefNameHeader = document.getElementById('reef-name-header');
            elements.reefLocationHeader = document.getElementById('reef-location-header');
            elements.reefMainImage = document.getElementById('reef-main-image');
            elements.reefTypeBadge = document.getElementById('reef-type-badge');
            elements.reefMap = document.getElementById('reef-map');
            elements.diveBtn = document.getElementById('dive-btn');
            elements.diveOverlay = document.getElementById('dive-overlay');
            elements.exitDiveBtn = document.getElementById('exit-dive');
            elements.diveDepth = document.getElementById('dive-depth');
            elements.diveHighlight = document.getElementById('dive-highlight');
            elements.expandAllBtn = document.getElementById('expand-all-btn');
            elements.branchNodes = document.querySelectorAll('.branch-node');
            elements.galleryTrack = document.getElementById('gallery-track');
            elements.galleryPrev = document.getElementById('gallery-prev');
            elements.galleryNext = document.getElementById('gallery-next');
            elements.relatedReefs = document.getElementById('related-reefs');
            elements.shareBtn = document.getElementById('share-btn');
            elements.shareModal = document.getElementById('share-modal');
            elements.closeShareModal = document.getElementById('close-share-modal');
            elements.shareUrl = document.getElementById('share-url');
            elements.copyLinkBtn = document.getElementById('copy-link');
            elements.fullscreenToggle = document.getElementById('fullscreen-toggle');
            elements.diveSound = document.getElementById('dive-sound');
        }
    }

    function loadAllReefData() {
        // Combine all reef data from separate files
        state.allReefs = [];
        
        // Check if data files are loaded
        if (typeof CORAL_REEFS_1 !== 'undefined') state.allReefs.push(...CORAL_REEFS_1);
        if (typeof CORAL_REEFS_2 !== 'undefined') state.allReefs.push(...CORAL_REEFS_2);
        if (typeof CORAL_REEFS_3 !== 'undefined') state.allReefs.push(...CORAL_REEFS_3);
        if (typeof CORAL_REEFS_4 !== 'undefined') state.allReefs.push(...CORAL_REEFS_4);
        if (typeof CORAL_REEFS_5 !== 'undefined') state.allReefs.push(...CORAL_REEFS_5);
        if (typeof CORAL_REEFS_6 !== 'undefined') state.allReefs.push(...CORAL_REEFS_6);
        if (typeof CORAL_REEFS_7 !== 'undefined') state.allReefs.push(...CORAL_REEFS_7);
        if (typeof CORAL_REEFS_8 !== 'undefined') state.allReefs.push(...CORAL_REEFS_8);
        if (typeof CORAL_REEFS_9 !== 'undefined') state.allReefs.push(...CORAL_REEFS_9);
        if (typeof CORAL_REEFS_10 !== 'undefined') state.allReefs.push(...CORAL_REEFS_10);

        // Sort by size (largest first) by default
        sortReefs('size-desc');
        state.filteredReefs = [...state.allReefs];
    }

    function bindEvents() {
        // Search functionality
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
            elements.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Escape') {
                    clearSearch();
                }
            });
        }

        if (elements.clearSearchBtn) {
            elements.clearSearchBtn.addEventListener('click', clearSearch);
        }

        // Filter buttons
        if (elements.filterBtns) {
            elements.filterBtns.forEach(btn => {
                btn.addEventListener('click', () => handleFilter(btn));
            });
        }

        // Sort select
        if (elements.sortSelect) {
            elements.sortSelect.addEventListener('change', handleSort);
        }

        // Load more button
        if (elements.loadMoreBtn) {
            elements.loadMoreBtn.addEventListener('click', loadMoreReefs);
        }

        // Reset filters button
        if (elements.resetFiltersBtn) {
            elements.resetFiltersBtn.addEventListener('click', resetFilters);
        }

        // Day/Night toggle
        if (elements.dayNightToggle) {
            elements.dayNightToggle.addEventListener('click', toggleDayNight);
        }

        // Map view toggle
        if (elements.mapViewToggle) {
            elements.mapViewToggle.addEventListener('click', toggleWorldMap);
        }

        // Close map button
        if (elements.closeMapBtn) {
            elements.closeMapBtn.addEventListener('click', closeWorldMap);
        }

        // Sound toggle
        if (elements.soundToggle) {
            elements.soundToggle.addEventListener('click', toggleSound);
        }

        // Scroll to top
        if (elements.scrollToTop) {
            elements.scrollToTop.addEventListener('click', scrollToTop);
            window.addEventListener('scroll', handleScroll);
        }

        // Profile page events
        if (document.body.classList.contains('profile-page')) {
            bindProfileEvents();
        }
    }

    function bindProfileEvents() {
        // Dive button
        if (elements.diveBtn) {
            elements.diveBtn.addEventListener('click', startDive);
        }

        // Exit dive
        if (elements.exitDiveBtn) {
            elements.exitDiveBtn.addEventListener('click', exitDive);
        }

        // Expand all branches
        if (elements.expandAllBtn) {
            elements.expandAllBtn.addEventListener('click', toggleAllBranches);
        }

        // Branch node toggles
        if (elements.branchNodes) {
            elements.branchNodes.forEach(node => {
                const header = node.querySelector('.node-header');
                if (header) {
                    header.addEventListener('click', () => toggleBranch(node));
                }
            });
        }

        // Gallery navigation
        if (elements.galleryPrev) {
            elements.galleryPrev.addEventListener('click', () => navigateGallery(-1));
        }
        if (elements.galleryNext) {
            elements.galleryNext.addEventListener('click', () => navigateGallery(1));
        }

        // Share functionality
        if (elements.shareBtn) {
            elements.shareBtn.addEventListener('click', openShareModal);
        }
        if (elements.closeShareModal) {
            elements.closeShareModal.addEventListener('click', closeShareModal);
        }
        if (elements.copyLinkBtn) {
            elements.copyLinkBtn.addEventListener('click', copyShareLink);
        }

        // Share options
        const shareOptions = document.querySelectorAll('.share-option');
        shareOptions.forEach(option => {
            option.addEventListener('click', () => handleShare(option.dataset.platform));
        });

        // Fullscreen toggle
        if (elements.fullscreenToggle) {
            elements.fullscreenToggle.addEventListener('click', toggleFullscreen);
        }

        // Map layer controls
        const mapControlBtns = document.querySelectorAll('.map-control-btn');
        mapControlBtns.forEach(btn => {
            btn.addEventListener('click', () => changeMapLayer(btn));
        });
    }

    // ===== LOADING SCREEN =====
    function initLoadingScreen() {
        setTimeout(() => {
            hideLoadingScreen();
        }, 2000);
    }

    function hideLoadingScreen() {
        if (elements.loadingScreen) {
            elements.loadingScreen.classList.add('hidden');
            state.isLoading = false;
            
            // Initialize content after loading
            if (!document.body.classList.contains('profile-page')) {
                renderReefCards();
                updateStats();
            }
        }
    }

    // ===== SEARCH FUNCTIONALITY =====
    function handleSearch(e) {
        state.searchQuery = e.target.value.toLowerCase().trim();
        
        if (elements.clearSearchBtn) {
            elements.clearSearchBtn.style.display = state.searchQuery ? 'flex' : 'none';
        }
        
        filterAndRenderReefs();
    }

    function clearSearch() {
        if (elements.searchInput) {
            elements.searchInput.value = '';
        }
        if (elements.clearSearchBtn) {
            elements.clearSearchBtn.style.display = 'none';
        }
        state.searchQuery = '';
        filterAndRenderReefs();
    }

    // ===== FILTER FUNCTIONALITY =====
    function handleFilter(btn) {
        const filter = btn.dataset.filter;
        state.currentFilter = filter;
        
        // Update active button
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        filterAndRenderReefs();
    }

    function filterAndRenderReefs() {
        state.currentPage = 1;
        
        // Apply filters
        state.filteredReefs = state.allReefs.filter(reef => {
            // Type filter
            const typeMatch = state.currentFilter === 'all' || 
                reef.type.toLowerCase().includes(state.currentFilter);
            
            // Search filter
            const searchMatch = !state.searchQuery || 
                reef.name.toLowerCase().includes(state.searchQuery) ||
                reef.country.toLowerCase().includes(state.searchQuery) ||
                reef.ocean.toLowerCase().includes(state.searchQuery);
            
            return typeMatch && searchMatch;
        });
        
        // Apply sorting
        sortReefs(state.currentSort);
        
        // Render
        renderReefCards();
        updateVisibleCount();
        
        // Show/hide no results
        if (elements.noResults) {
            elements.noResults.style.display = state.filteredReefs.length === 0 ? 'block' : 'none';
        }
    }

    // ===== SORT FUNCTIONALITY =====
    function handleSort() {
        state.currentSort = elements.sortSelect.value;
        sortReefs(state.currentSort);
        state.currentPage = 1;
        renderReefCards();
    }

    function sortReefs(sortType) {
        switch (sortType) {
            case 'size-desc':
                state.filteredReefs.sort((a, b) => parseSize(b.size) - parseSize(a.size));
                break;
            case 'size-asc':
                state.filteredReefs.sort((a, b) => parseSize(a.size) - parseSize(b.size));
                break;
            case 'name-asc':
                state.filteredReefs.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                state.filteredReefs.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'biodiversity':
                state.filteredReefs.sort((a, b) => (b.biodiversity?.fishSpecies || 0) - (a.biodiversity?.fishSpecies || 0));
                break;
        }
    }

    function parseSize(sizeStr) {
        if (!sizeStr) return 0;
        const num = parseFloat(sizeStr.replace(/[^0-9.]/g, ''));
        if (sizeStr.includes('km²')) return num;
        if (sizeStr.includes('km')) return num * 10; // Rough conversion for length
        return num;
    }

    // ===== RENDER REEF CARDS =====
    function renderReefCards() {
        if (!elements.reefCardsGrid) return;
        
        const startIndex = 0;
        const endIndex = state.currentPage * state.itemsPerPage;
        state.displayedReefs = state.filteredReefs.slice(startIndex, endIndex);
        
        elements.reefCardsGrid.innerHTML = '';
        
        state.displayedReefs.forEach((reef, index) => {
            const card = createReefCard(reef, index);
            elements.reefCardsGrid.appendChild(card);
        });
        
        // Show/hide load more button
        if (elements.loadMoreBtn) {
            elements.loadMoreBtn.style.display = 
                endIndex < state.filteredReefs.length ? 'inline-flex' : 'none';
        }
    }

    function createReefCard(reef, index) {
        const card = document.createElement('div');
        card.className = 'reef-card';
        card.style.animationDelay = `${(index % 10) * 0.05}s`;
        card.dataset.reefId = reef.id;
        
        const typeIcon = getTypeIcon(reef.type);
        const typeClass = getTypeClass(reef.type);
        
        card.innerHTML = `
            <div class="reef-card-image">
                <img src="${reef.image}" alt="${reef.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400'">
                <div class="reef-card-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="reef-type-indicator ${typeClass}" title="${reef.type}">
                    <i class="fas ${typeIcon}"></i>
                </div>
            </div>
            <div class="reef-card-info">
                <h3>${reef.name}</h3>
                <p class="reef-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${reef.country}
                </p>
                <p class="reef-size">${reef.size}</p>
            </div>
        `;
        
        card.addEventListener('click', () => navigateToReef(reef));
        
        return card;
    }

    function getTypeIcon(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('barrier')) return 'fa-water';
        if (typeLower.includes('fringing')) return 'fa-mountain';
        if (typeLower.includes('atoll')) return 'fa-circle';
        if (typeLower.includes('patch')) return 'fa-dot-circle';
        return 'fa-water';
    }

    function getTypeClass(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('barrier')) return 'barrier';
        if (typeLower.includes('fringing')) return 'fringing';
        if (typeLower.includes('atoll')) return 'atoll';
        if (typeLower.includes('patch')) return 'patch';
        return 'barrier';
    }

    function navigateToReef(reef) {
        // Store selected reef in sessionStorage
        sessionStorage.setItem('selectedReef', JSON.stringify(reef));
        window.location.href = `coral-reefs-profile.html?id=${reef.id}`;
    }

    function loadMoreReefs() {
        state.currentPage++;
        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = state.currentPage * state.itemsPerPage;
        const newReefs = state.filteredReefs.slice(startIndex, endIndex);
        
        newReefs.forEach((reef, index) => {
            const card = createReefCard(reef, index);
            elements.reefCardsGrid.appendChild(card);
        });
        
        state.displayedReefs.push(...newReefs);
        updateVisibleCount();
        
        // Hide load more if no more reefs
        if (endIndex >= state.filteredReefs.length && elements.loadMoreBtn) {
            elements.loadMoreBtn.style.display = 'none';
        }
    }

    function updateVisibleCount() {
        if (elements.visibleCount) {
            elements.visibleCount.textContent = Math.min(
                state.currentPage * state.itemsPerPage,
                state.filteredReefs.length
            );
        }
    }

    function updateStats() {
        const totalReefs = document.getElementById('total-reefs');
        const totalCountries = document.getElementById('total-countries');
        
        if (totalReefs) {
            animateNumber(totalReefs, state.allReefs.length);
        }
        
        if (totalCountries) {
            const countries = new Set(state.allReefs.map(r => r.country));
            animateNumber(totalCountries, countries.size);
        }
    }

    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }

    function resetFilters() {
        state.currentFilter = 'all';
        state.searchQuery = '';
        state.currentSort = 'size-desc';
        
        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.sortSelect) elements.sortSelect.value = 'size-desc';
        if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
        
        elements.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === 'all');
        });
        
        state.filteredReefs = [...state.allReefs];
        sortReefs('size-desc');
        state.currentPage = 1;
        renderReefCards();
        updateVisibleCount();
        
        if (elements.noResults) {
            elements.noResults.style.display = 'none';
        }
    }

    // ===== DAY/NIGHT MODE =====
    function toggleDayNight() {
        state.isDayMode = !state.isDayMode;
        document.body.classList.toggle('night-mode', !state.isDayMode);
        document.body.classList.toggle('day-mode', state.isDayMode);
        
        const icon = elements.dayNightToggle.querySelector('i');
        if (icon) {
            icon.className = state.isDayMode ? 'fas fa-moon' : 'fas fa-sun';
        }
        
        // Save preference
        localStorage.setItem('coralReefsTheme', state.isDayMode ? 'day' : 'night');
        
        // Update map tiles if map exists
        if (state.worldMap) {
            updateMapTiles(state.worldMap);
        }
        if (state.reefMap) {
            updateMapTiles(state.reefMap);
        }
    }

    function loadThemePreference() {
        const savedTheme = localStorage.getItem('coralReefsTheme');
        if (savedTheme === 'night') {
            state.isDayMode = false;
            document.body.classList.remove('day-mode');
            document.body.classList.add('night-mode');
            const icon = elements.dayNightToggle?.querySelector('i');
            if (icon) icon.className = 'fas fa-sun';
        }
    }

    // ===== WORLD MAP =====
    function toggleWorldMap() {
        if (elements.worldMapSection) {
            const isVisible = elements.worldMapSection.style.display !== 'none';
            elements.worldMapSection.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible && !state.worldMap) {
                initWorldMap();
            }
        }
    }

    function closeWorldMap() {
        if (elements.worldMapSection) {
            elements.worldMapSection.style.display = 'none';
        }
    }

    function initWorldMap() {
        if (!elements.worldMap || state.worldMap) return;
        
        state.worldMap = L.map('world-map').setView([0, 0], 2);
        
        addMapTiles(state.worldMap);
        addReefMarkers(state.worldMap, state.allReefs);
    }

    function addMapTiles(map) {
        const tileUrl = state.isDayMode
            ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
        
        L.tileLayer(tileUrl, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);
    }

    function updateMapTiles(map) {
        map.eachLayer(layer => {
            if (layer instanceof L.TileLayer) {
                map.removeLayer(layer);
            }
        });
        addMapTiles(map);
    }

    function addReefMarkers(map, reefs) {
        reefs.forEach(reef => {
            if (reef.coordinates) {
                const marker = L.circleMarker([reef.coordinates.lat, reef.coordinates.lng], {
                    radius: 8,
                    fillColor: getMarkerColor(reef.type),
                    color: '#fff',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);
                
                marker.bindPopup(`
                    <div class="map-popup">
                        <h4>${reef.name}</h4>
                        <p>${reef.country}</p>
                        <p><strong>Type:</strong> ${reef.type}</p>
                        <p><strong>Size:</strong> ${reef.size}</p>
                        <button onclick="CoralReefsApp.navigateToReefById(${reef.id})">View Details</button>
                    </div>
                `);
            }
        });
    }

    function getMarkerColor(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('barrier')) return '#00CED1';
        if (typeLower.includes('fringing')) return '#20B2AA';
        if (typeLower.includes('atoll')) return '#FF6B6B';
        if (typeLower.includes('patch')) return '#FFD93D';
        return '#00CED1';
    }

    function navigateToReefById(id) {
        const reef = state.allReefs.find(r => r.id === id);
        if (reef) {
            navigateToReef(reef);
        }
    }

    // ===== SOUND CONTROL =====
    function toggleSound() {
        state.isSoundOn = !state.isSoundOn;
        
        const icon = elements.soundToggle.querySelector('i');
        if (icon) {
            icon.className = state.isSoundOn ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
        
        if (elements.oceanSound) {
            if (state.isSoundOn) {
                elements.oceanSound.volume = 0.3;
                elements.oceanSound.play().catch(() => {});
            } else {
                elements.oceanSound.pause();
            }
        }
    }

    // ===== SCROLL HANDLING =====
    function handleScroll() {
        const scrolled = window.scrollY > 300;
        if (elements.scrollToTop) {
            elements.scrollToTop.classList.toggle('visible', scrolled);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ===== PROFILE PAGE FUNCTIONS =====
    function initProfilePage() {
        loadThemePreference();
        cacheElements();
        bindEvents();
        
        // Get reef data
        const urlParams = new URLSearchParams(window.location.search);
        const reefId = parseInt(urlParams.get('id'));
        
        // Try to get from sessionStorage first
        let reef = JSON.parse(sessionStorage.getItem('selectedReef'));
        
        // If not in sessionStorage or ID doesn't match, find in data
        if (!reef || reef.id !== reefId) {
            loadAllReefData();
            reef = state.allReefs.find(r => r.id === reefId);
        }
        
        if (reef) {
            state.currentReef = reef;
            populateReefProfile(reef);
            initReefMap(reef);
            populateGallery(reef);
            populateRelatedReefs(reef);
        }
        
        setTimeout(hideLoadingScreen, 1500);
    }

    function populateReefProfile(reef) {
        // Header info
        if (elements.reefNameHeader) {
            elements.reefNameHeader.textContent = reef.name;
        }
        if (elements.reefLocationHeader) {
            elements.reefLocationHeader.querySelector('span').textContent = `${reef.country}, ${reef.ocean}`;
        }
        
        // Background image
        if (elements.reefBackground) {
            elements.reefBackground.style.backgroundImage = `url(${reef.backgroundImage || reef.image})`;
        }
        
        // Main image
        if (elements.reefMainImage) {
            elements.reefMainImage.src = reef.image;
            elements.reefMainImage.alt = reef.name;
        }
        
        // Type badge
        if (elements.reefTypeBadge) {
            elements.reefTypeBadge.textContent = reef.type;
        }
        
        // Quick stats
        updateQuickStat('reef-size', reef.length || reef.size);
        updateQuickStat('reef-area', reef.area || 'N/A');
        updateQuickStat('reef-species', reef.biodiversity?.fishSpecies || 'N/A');
        updateQuickStat('reef-temp', reef.conditions?.temperature || 'N/A');
        
        // Mind map center node
        const centerNodeName = document.getElementById('center-node-name');
        if (centerNodeName) {
            centerNodeName.textContent = reef.name;
        }
        
        // Populate all branch data
        populateBranchData(reef);
    }

    function updateQuickStat(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    function populateBranchData(reef) {
        // Location
        updateElement('info-ocean', reef.ocean);
        updateElement('info-countries', reef.country);
        updateElement('info-coordinates', reef.coordinates ? 
            `${reef.coordinates.lat.toFixed(4)}, ${reef.coordinates.lng.toFixed(4)}` : 'N/A');
        
        // Type
        updateElement('info-type', reef.type);
        updateElement('info-type-desc', reef.typeDescription || getTypeDescription(reef.type));
        
        // Size
        updateElement('info-length', reef.length || reef.size);
        updateElement('info-area', reef.area || 'N/A');
        updateElement('info-reef-count', reef.reefCount || 'N/A');
        
        // Formation
        updateElement('info-age', reef.formation?.age || 'N/A');
        updateElement('info-formation', reef.formation?.process || 'Coral polyps secreting calcium carbonate');
        updateElement('info-growth', reef.formation?.growthRate || '1-3 cm per year');
        
        // Biodiversity
        if (reef.biodiversity) {
            updateElement('coral-species', reef.biodiversity.coralSpecies || 'N/A');
            updateElement('fish-species', reef.biodiversity.fishSpecies || 'N/A');
            updateElement('turtle-species', reef.biodiversity.turtleSpecies || 'N/A');
            updateElement('shark-species', reef.biodiversity.sharkSpecies || 'N/A');
            updateElement('whale-species', reef.biodiversity.whaleSpecies || 'N/A');
            updateElement('mollusk-species', reef.biodiversity.molluskSpecies || 'N/A');
            
            // Notable species
            const speciesList = document.getElementById('notable-species-list');
            if (speciesList && reef.biodiversity.notableSpecies) {
                speciesList.innerHTML = reef.biodiversity.notableSpecies.map(species => 
                    `<span class="species-tag">${species}</span>`
                ).join('');
            }
        }
        
        // Islands
        const islandsList = document.getElementById('islands-list');
        if (islandsList && reef.nearbyIslands) {
            islandsList.innerHTML = reef.nearbyIslands.map(island => 
                `<div class="island-item"><i class="fas fa-umbrella-beach"></i>${island}</div>`
            ).join('');
        }
        
        // Ocean conditions
        if (reef.conditions) {
            updateElement('condition-temp', reef.conditions.temperature || 'N/A');
            updateElement('condition-salinity', reef.conditions.salinity || 'N/A');
            updateElement('condition-currents', reef.conditions.currents || 'N/A');
            updateElement('condition-visibility', reef.conditions.visibility || 'N/A');
        }
        
        // Economic
        if (reef.economic) {
            updateElement('tourism-value', reef.economic.tourismValue || 'N/A');
            updateElement('fisheries-value', reef.economic.fisheriesValue || 'N/A');
            updateElement('jobs-value', reef.economic.jobsSupported || 'N/A');
            updateElement('protection-value', reef.economic.coastalProtection || 'N/A');
        }
        
        // Threats
        if (reef.threats) {
            updateThreatLevel('threat-bleaching', reef.threats.bleaching);
            updateThreatLevel('threat-warming', reef.threats.warming);
            updateThreatLevel('threat-acidification', reef.threats.acidification);
            updateThreatLevel('threat-pollution', reef.threats.pollution);
            updateThreatLevel('threat-overfishing', reef.threats.overfishing);
        }
        
        // Conservation
        updateElement('protection-status', reef.conservation?.status || 'Protected');
        updateElement('mpa-info', `Marine Protected Areas: ${reef.conservation?.mpaPercent || 'N/A'}`);
        updateElement('programs-info', reef.conservation?.programs || 'Active conservation efforts');
        updateElement('research-info', reef.conservation?.research || 'Ongoing research programs');
        
        // History
        if (reef.history) {
            const historyItems = reef.history.slice(0, 3);
            historyItems.forEach((item, index) => {
                const historyElement = document.getElementById(`history-item-${index + 1}`);
                if (historyElement) {
                    historyElement.querySelector('.timeline-year').textContent = item.year;
                    historyElement.querySelector('.timeline-event').textContent = item.event;
                }
            });
        }
        
        updateElement('research-significance', reef.scientificImportance || 
            'Important site for marine research and coral ecosystem studies.');
    }

    function updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    }

    function updateThreatLevel(id, level) {
        const element = document.getElementById(id);
        if (element && level) {
            const levelDiv = element.querySelector('.threat-level');
            if (levelDiv) {
                levelDiv.className = `threat-level ${level.toLowerCase()}`;
                const levelText = levelDiv.querySelector('.level-text');
                if (levelText) {
                    levelText.textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} Risk`;
                }
            }
        }
    }

    function getTypeDescription(type) {
        const descriptions = {
            'barrier': 'Separated from mainland by deep channel or lagoon',
            'fringing': 'Directly attached to the shore or separated by shallow water',
            'atoll': 'Ring-shaped reef encircling a lagoon',
            'patch': 'Isolated reef formations within lagoons'
        };
        
        for (const [key, desc] of Object.entries(descriptions)) {
            if (type.toLowerCase().includes(key)) return desc;
        }
        return 'Coral reef ecosystem';
    }

    // ===== REEF MAP =====
    function initReefMap(reef) {
        if (!elements.reefMap || !reef.coordinates) return;
        
        state.reefMap = L.map('reef-map').setView(
            [reef.coordinates.lat, reef.coordinates.lng],
            reef.mapZoom || 8
        );
        
        addMapTiles(state.reefMap);
        
        // Add reef polygon if available
        if (reef.polygon) {
            L.polygon(reef.polygon, {
                color: '#00CED1',
                fillColor: '#00CED1',
                fillOpacity: 0.3,
                weight: 2
            }).addTo(state.reefMap);
        }
        
        // Add reef marker
        L.marker([reef.coordinates.lat, reef.coordinates.lng], {
            icon: L.divIcon({
                className: 'reef-marker',
                html: '<div class="marker-inner">🪸</div>',
                iconSize: [40, 40],
                iconAnchor: [20, 40]
            })
        }).addTo(state.reefMap);
        
        // Add nearby islands markers
        if (reef.islandCoordinates) {
            reef.islandCoordinates.forEach(island => {
                L.marker([island.lat, island.lng], {
                    icon: L.divIcon({
                        className: 'island-marker',
                        html: '🏝️',
                        iconSize: [30, 30],
                        iconAnchor: [15, 30]
                    })
                }).addTo(state.reefMap)
                .bindPopup(island.name);
            });
        }
        
        // Add ocean current lines if available
        if (reef.currentPath) {
            L.polyline(reef.currentPath, {
                color: '#4169E1',
                weight: 3,
                opacity: 0.7,
                dashArray: '10, 10'
            }).addTo(state.reefMap);
        }
    }

    function changeMapLayer(btn) {
        document.querySelectorAll('.map-control-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const layer = btn.dataset.layer;
        
        if (state.reefMap) {
            state.reefMap.eachLayer(l => {
                if (l instanceof L.TileLayer) {
                    state.reefMap.removeLayer(l);
                }
            });
            
            let tileUrl;
            switch (layer) {
                case 'satellite':
                    tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
                    break;
                case 'terrain':
                    tileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
                    break;
                case 'ocean':
                default:
                    tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
                    break;
            }
            
            L.tileLayer(tileUrl, {
                attribution: '&copy; Various sources',
                maxZoom: 19
            }).addTo(state.reefMap);
        }
    }

    // ===== MIND MAP BRANCHES =====
    function toggleBranch(node) {
        node.classList.toggle('expanded');
    }

    function toggleAllBranches() {
        const allExpanded = document.querySelectorAll('.branch-node.expanded').length === 
            document.querySelectorAll('.branch-node').length;
        
        document.querySelectorAll('.branch-node').forEach(node => {
            node.classList.toggle('expanded', !allExpanded);
        });
        
        if (elements.expandAllBtn) {
            const icon = elements.expandAllBtn.querySelector('i');
            const text = elements.expandAllBtn.querySelector('span') || elements.expandAllBtn;
            if (icon) {
                icon.className = allExpanded ? 'fas fa-expand-alt' : 'fas fa-compress-alt';
            }
            elements.expandAllBtn.innerHTML = `<i class="${allExpanded ? 'fas fa-expand-alt' : 'fas fa-compress-alt'}"></i> ${allExpanded ? 'Expand All' : 'Collapse All'}`;
        }
    }

    // ===== GALLERY =====
    function populateGallery(reef) {
        if (!elements.galleryTrack || !reef.gallery) return;
        
        elements.galleryTrack.innerHTML = reef.gallery.map((img, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${img}" alt="${reef.name} - Image ${index + 1}" loading="lazy" 
                    onerror="this.src='https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400'">
            </div>
        `).join('');
        
        // Add click handlers for lightbox (optional enhancement)
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => openLightbox(reef.gallery, parseInt(item.dataset.index)));
        });
    }

    function navigateGallery(direction) {
        const itemWidth = 316; // 300px + 16px gap
        const trackWidth = elements.galleryTrack.scrollWidth;
        const containerWidth = elements.galleryTrack.parentElement.offsetWidth;
        const maxPosition = trackWidth - containerWidth;
        
        state.galleryPosition += direction * itemWidth;
        state.galleryPosition = Math.max(0, Math.min(state.galleryPosition, maxPosition));
        
        elements.galleryTrack.style.transform = `translateX(-${state.galleryPosition}px)`;
    }

    function openLightbox(images, index) {
        // Simple lightbox - could be enhanced
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${images[index]}" alt="Gallery Image">
            </div>
        `;
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        lightbox.querySelector('.lightbox-content').style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        lightbox.querySelector('img').style.cssText = `
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
        `;
        lightbox.querySelector('.lightbox-close').style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 30px;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
        `;
        
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.remove();
            }
        });
    }

    // ===== RELATED REEFS =====
    function populateRelatedReefs(currentReef) {
        if (!elements.relatedReefs) return;
        
        loadAllReefData();
        
        // Find related reefs (same ocean or type)
        const related = state.allReefs
            .filter(reef => reef.id !== currentReef.id && 
                (reef.ocean === currentReef.ocean || reef.type === currentReef.type))
            .slice(0, 4);
        
        elements.relatedReefs.innerHTML = related.map(reef => `
            <div class="related-reef-card" onclick="CoralReefsApp.navigateToReefById(${reef.id})">
                <img src="${reef.image}" alt="${reef.name}" loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400'">
                <h4>${reef.name}</h4>
                <p>${reef.country}</p>
            </div>
        `).join('');
    }

    // ===== DIVE ANIMATION =====
    function startDive() {
        if (!elements.diveOverlay) return;
        
        elements.diveOverlay.style.display = 'block';
        setTimeout(() => {
            elements.diveOverlay.classList.add('active');
        }, 10);
        
        if (state.isSoundOn && elements.diveSound) {
            elements.diveSound.play().catch(() => {});
        }
        
        // Start dive animation
        setTimeout(() => {
            elements.diveOverlay.classList.add('diving');
            animateDive();
        }, 500);
    }

    function animateDive() {
        const depths = [
            { depth: 0, text: 'Surface', icon: '🌊' },
            { depth: 5, text: 'Light Zone', icon: '☀️' },
            { depth: 15, text: 'Reef Flat', icon: '🐠' },
            { depth: 25, text: 'Reef Crest', icon: '🪸' },
            { depth: 35, text: 'Coral Zone', icon: '🐢' },
            { depth: 50, text: 'Fore Reef', icon: '🦈' },
            { depth: 75, text: 'Deep Zone', icon: '🐙' },
            { depth: 100, text: 'Ocean Floor', icon: '🌊' }
        ];
        
        let currentIndex = 0;
        
        const interval = setInterval(() => {
            if (currentIndex < depths.length) {
                const step = depths[currentIndex];
                
                if (elements.diveDepth) {
                    elements.diveDepth.textContent = `${step.depth}m`;
                }
                
                if (elements.diveHighlight) {
                    elements.diveHighlight.querySelector('.highlight-icon').textContent = step.icon;
                    elements.diveHighlight.querySelector('.highlight-text').textContent = step.text;
                }
                
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 1200);
    }

    function exitDive() {
        if (!elements.diveOverlay) return;
        
        elements.diveOverlay.classList.remove('diving');
        elements.diveOverlay.classList.remove('active');
        
        setTimeout(() => {
            elements.diveOverlay.style.display = 'none';
        }, 500);
        
        if (elements.diveSound) {
            elements.diveSound.pause();
            elements.diveSound.currentTime = 0;
        }
    }

    // ===== SHARE FUNCTIONALITY =====
    function openShareModal() {
        if (elements.shareModal) {
            elements.shareModal.classList.add('active');
            if (elements.shareUrl) {
                elements.shareUrl.value = window.location.href;
            }
        }
    }

    function closeShareModal() {
        if (elements.shareModal) {
            elements.shareModal.classList.remove('active');
        }
    }

    function handleShare(platform) {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(state.currentReef?.name || 'Coral Reef');
        
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=Explore ${title}`,
            whatsapp: `https://wa.me/?text=${title} ${url}`,
            email: `mailto:?subject=${title}&body=Check out this coral reef: ${url}`
        };
        
        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    function copyShareLink() {
        if (elements.shareUrl) {
            elements.shareUrl.select();
            document.execCommand('copy');
            
            const btn = elements.copyLinkBtn;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }
    }

    // ===== FULLSCREEN =====
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            if (elements.fullscreenToggle) {
                elements.fullscreenToggle.querySelector('i').className = 'fas fa-compress';
            }
        } else {
            document.exitFullscreen();
            if (elements.fullscreenToggle) {
                elements.fullscreenToggle.querySelector('i').className = 'fas fa-expand';
            }
        }
    }

    // ===== UTILITY FUNCTIONS =====
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

    // ===== PUBLIC API =====
    return {
        init,
        initProfilePage,
        navigateToReefById,
        toggleDayNight,
        toggleSound
    };
})();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the main page or profile page
    if (document.body.classList.contains('profile-page')) {
        // Profile page initialization is handled separately
    } else {
        CoralReefsApp.init();
    }
});

// Also expose for direct function calls from HTML
window.CoralReefsApp = CoralReefsApp;
