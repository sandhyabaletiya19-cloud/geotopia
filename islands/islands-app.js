/* ========================================
   ISLANDS EXPLORER - MAIN APPLICATION
======================================== */

(function() {
    'use strict';

    // ========================================
    // CONFIGURATION
    // ========================================
    
    const CONFIG = {
        animationDelay: 50,
        debounceDelay: 300,
        mapDefaultZoom: 8,
        mapMaxZoom: 18,
        cardsPerLoad: 20
    };

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    const Utils = {
        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Format number with commas
        formatNumber(num) {
            if (num === null || num === undefined) return 'N/A';
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Format area
        formatArea(area) {
            if (!area) return 'N/A';
            if (area >= 1000) {
                return `${Utils.formatNumber(area)} km²`;
            }
            return `${area} km²`;
        },

        // Get country flag URL
        getFlagUrl(countryCode) {
            return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
        },

        // Get URL parameter
        getUrlParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },

        // Set URL parameter
        setUrlParam(param, value) {
            const url = new URL(window.location);
            if (value) {
                url.searchParams.set(param, value);
            } else {
                url.searchParams.delete(param);
            }
            window.history.pushState({}, '', url);
        },

        // Capitalize first letter
        capitalize(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        // Get badge class based on island type
        getBadgeClass(type) {
            const types = {
                'tropical': 'tropical',
                'volcanic': 'volcanic',
                'continental': 'continental',
                'coral': 'coral'
            };
            return types[type?.toLowerCase()] || 'tropical';
        },

        // Get icon for island type
        getTypeIcon(type) {
            const icons = {
                'tropical': 'fa-sun',
                'volcanic': 'fa-mountain',
                'continental': 'fa-map',
                'coral': 'fa-fish'
            };
            return icons[type?.toLowerCase()] || 'fa-island-tropical';
        },

        // Smooth scroll to element
        scrollToElement(element, offset = 0) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // ========================================
    // MAIN PAGE - ISLANDS GRID
    // ========================================

    const IslandsGrid = {
        islands: [],
        filteredIslands: [],
        currentFilters: {
            search: '',
            type: 'all',
            ocean: 'all',
            region: 'all',
            sort: 'name-asc'
        },

        init() {
            if (!document.getElementById('islands-grid')) return;
            
            this.islands = typeof getAllIslands === 'function' ? getAllIslands() : [];
            this.filteredIslands = [...this.islands];
            
            this.cacheElements();
            this.bindEvents();
            this.updateStats();
            this.renderIslands();
            this.hideLoadingSpinner();
        },

        cacheElements() {
            this.grid = document.getElementById('islands-grid');
            this.searchInput = document.getElementById('search-input');
            this.searchClear = document.getElementById('search-clear');
            this.typeFilters = document.querySelectorAll('.type-filters .filter-btn');
            this.oceanFilter = document.getElementById('ocean-filter');
            this.regionFilter = document.getElementById('region-filter');
            this.sortFilter = document.getElementById('sort-filter');
            this.resultsCount = document.getElementById('results-count');
            this.activeFilters = document.getElementById('active-filters');
            this.loadingSpinner = document.getElementById('loading-spinner');
            this.noResults = document.getElementById('no-results');
            this.resetFiltersBtn = document.getElementById('reset-filters');
            this.cardTemplate = document.getElementById('island-card-template');
        },

        bindEvents() {
            // Search input
            if (this.searchInput) {
                this.searchInput.addEventListener('input', Utils.debounce(() => {
                    this.currentFilters.search = this.searchInput.value.trim();
                    this.applyFilters();
                }, CONFIG.debounceDelay));
            }

            // Search clear button
            if (this.searchClear) {
                this.searchClear.addEventListener('click', () => {
                    this.searchInput.value = '';
                    this.currentFilters.search = '';
                    this.applyFilters();
                });
            }

            // Type filter buttons
            this.typeFilters.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.typeFilters.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.currentFilters.type = btn.dataset.filter;
                    this.applyFilters();
                });
            });

            // Ocean filter dropdown
            if (this.oceanFilter) {
                this.oceanFilter.addEventListener('change', () => {
                    this.currentFilters.ocean = this.oceanFilter.value;
                    this.applyFilters();
                });
            }

            // Region filter dropdown
            if (this.regionFilter) {
                this.regionFilter.addEventListener('change', () => {
                    this.currentFilters.region = this.regionFilter.value;
                    this.applyFilters();
                });
            }

            // Sort filter dropdown
            if (this.sortFilter) {
                this.sortFilter.addEventListener('change', () => {
                    this.currentFilters.sort = this.sortFilter.value;
                    this.applyFilters();
                });
            }

            // Reset filters button
            if (this.resetFiltersBtn) {
                this.resetFiltersBtn.addEventListener('click', () => {
                    this.resetFilters();
                });
            }
        },

        applyFilters() {
            let filtered = [...this.islands];

            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                filtered = filtered.filter(island => {
                    return island.name.toLowerCase().includes(searchTerm) ||
                           island.countries.some(c => c.name.toLowerCase().includes(searchTerm)) ||
                           island.continent?.toLowerCase().includes(searchTerm) ||
                           island.ocean?.toLowerCase().includes(searchTerm) ||
                           island.attractions?.some(a => a.toLowerCase().includes(searchTerm));
                });
            }

            // Type filter
            if (this.currentFilters.type !== 'all') {
                filtered = filtered.filter(island => 
                    island.islandType?.toLowerCase() === this.currentFilters.type.toLowerCase()
                );
            }

            // Ocean filter
            if (this.currentFilters.ocean !== 'all') {
                filtered = filtered.filter(island => 
                    island.ocean === this.currentFilters.ocean
                );
            }

            // Region filter
            if (this.currentFilters.region !== 'all') {
                filtered = filtered.filter(island => 
                    island.continent === this.currentFilters.region
                );
            }

            // Sort
            filtered = this.sortIslands(filtered, this.currentFilters.sort);

            this.filteredIslands = filtered;
            this.renderIslands();
            this.updateResultsCount();
            this.updateActiveFilters();
        },

        sortIslands(islands, sortType) {
            const sorted = [...islands];
            
            switch(sortType) {
                case 'name-asc':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'area-desc':
                    sorted.sort((a, b) => (b.area || 0) - (a.area || 0));
                    break;
                case 'area-asc':
                    sorted.sort((a, b) => (a.area || 0) - (b.area || 0));
                    break;
                case 'population-desc':
                    sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
                    break;
                case 'population-asc':
                    sorted.sort((a, b) => (a.population || 0) - (b.population || 0));
                    break;
            }
            
            return sorted;
        },

        renderIslands() {
            if (!this.grid) return;

            this.grid.innerHTML = '';

            if (this.filteredIslands.length === 0) {
                this.showNoResults();
                return;
            }

            this.hideNoResults();

            this.filteredIslands.forEach((island, index) => {
                const card = this.createIslandCard(island, index);
                this.grid.appendChild(card);
            });
        },

        createIslandCard(island, index) {
            const card = document.createElement('article');
            card.className = 'island-card';
            card.dataset.islandId = island.id;
            card.style.animationDelay = `${index * CONFIG.animationDelay}ms`;

            const flagsHtml = island.countries.map(country => 
                `<img src="${Utils.getFlagUrl(country.code)}" alt="${country.name} flag" title="${country.name}">`
            ).join('');

            const badgeClass = Utils.getBadgeClass(island.islandType);
            const typeIcon = Utils.getTypeIcon(island.islandType);

            card.innerHTML = `
                <div class="card-image-container">
                    <div class="card-image-wrapper">
                        <img src="${island.image}" alt="${island.name}" class="card-image" loading="lazy">
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-glow"></div>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="island-name">${island.name}</h3>
                        <div class="island-flags">${flagsHtml}</div>
                    </div>
                    <div class="card-details">
                        <div class="detail-item area">
                            <i class="fas fa-ruler-combined"></i>
                            <span class="area-value">${Utils.formatArea(island.area)}</span>
                        </div>
                        <div class="detail-item location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span class="location-value">${island.continent || 'N/A'}</span>
                        </div>
                    </div>
                    <div class="card-badge">
                        <span class="type-badge ${badgeClass}">
                            <i class="fas ${typeIcon}"></i>
                            ${Utils.capitalize(island.islandType)}
                        </span>
                    </div>
                </div>
                <div class="card-hover-info">
                    <p class="hover-climate"><i class="fas fa-temperature-high"></i> ${island.climate || 'Various climates'}</p>
                    <p class="hover-attractions"><i class="fas fa-star"></i> ${island.attractions?.slice(0, 3).join(', ') || 'Explore to discover'}</p>
                    <span class="explore-text">Click to Explore <i class="fas fa-arrow-right"></i></span>
                </div>
            `;

            card.addEventListener('click', () => {
                window.location.href = `islands-profile.html?id=${island.id}`;
            });

            return card;
        },

        updateStats() {
            const totalIslands = document.getElementById('total-islands');
            const totalCountries = document.getElementById('total-countries');
            const totalOceans = document.getElementById('total-oceans');

            if (totalIslands) {
                totalIslands.textContent = this.islands.length;
            }

            if (totalCountries) {
                const countries = new Set();
                this.islands.forEach(island => {
                    island.countries.forEach(c => countries.add(c.name));
                });
                totalCountries.textContent = countries.size;
            }

            if (totalOceans) {
                const oceans = new Set(this.islands.map(i => i.ocean).filter(Boolean));
                totalOceans.textContent = oceans.size;
            }
        },

        updateResultsCount() {
            if (this.resultsCount) {
                const count = this.filteredIslands.length;
                this.resultsCount.textContent = `Showing ${count} island${count !== 1 ? 's' : ''}`;
            }
        },

        updateActiveFilters() {
            if (!this.activeFilters) return;

            this.activeFilters.innerHTML = '';
            const filters = [];

            if (this.currentFilters.search) {
                filters.push({ label: `Search: "${this.currentFilters.search}"`, key: 'search' });
            }
            if (this.currentFilters.type !== 'all') {
                filters.push({ label: `Type: ${Utils.capitalize(this.currentFilters.type)}`, key: 'type' });
            }
            if (this.currentFilters.ocean !== 'all') {
                filters.push({ label: `Ocean: ${this.currentFilters.ocean}`, key: 'ocean' });
            }
            if (this.currentFilters.region !== 'all') {
                filters.push({ label: `Region: ${this.currentFilters.region}`, key: 'region' });
            }

            filters.forEach(filter => {
                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.innerHTML = `
                    ${filter.label}
                    <button data-filter-key="${filter.key}"><i class="fas fa-times"></i></button>
                `;
                
                tag.querySelector('button').addEventListener('click', () => {
                    this.removeFilter(filter.key);
                });

                this.activeFilters.appendChild(tag);
            });
        },

        removeFilter(key) {
            switch(key) {
                case 'search':
                    this.currentFilters.search = '';
                    if (this.searchInput) this.searchInput.value = '';
                    break;
                case 'type':
                    this.currentFilters.type = 'all';
                    this.typeFilters.forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.filter === 'all');
                    });
                    break;
                case 'ocean':
                    this.currentFilters.ocean = 'all';
                    if (this.oceanFilter) this.oceanFilter.value = 'all';
                    break;
                case 'region':
                    this.currentFilters.region = 'all';
                    if (this.regionFilter) this.regionFilter.value = 'all';
                    break;
            }
            this.applyFilters();
        },

        resetFilters() {
            this.currentFilters = {
                search: '',
                type: 'all',
                ocean: 'all',
                region: 'all',
                sort: 'name-asc'
            };

            if (this.searchInput) this.searchInput.value = '';
            if (this.oceanFilter) this.oceanFilter.value = 'all';
            if (this.regionFilter) this.regionFilter.value = 'all';
            if (this.sortFilter) this.sortFilter.value = 'name-asc';
            
            this.typeFilters.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === 'all');
            });

            this.applyFilters();
        },

        showNoResults() {
            if (this.noResults) this.noResults.style.display = 'block';
        },

        hideNoResults() {
            if (this.noResults) this.noResults.style.display = 'none';
        },

        showLoadingSpinner() {
            if (this.loadingSpinner) this.loadingSpinner.style.display = 'flex';
        },

        hideLoadingSpinner() {
            if (this.loadingSpinner) this.loadingSpinner.style.display = 'none';
        }
    };

    // ========================================
    // PROFILE PAGE
    // ========================================

    const IslandProfile = {
        island: null,
        map: null,
        markers: [],
        currentLayer: 'standard',
        galleryImages: [],
        currentImageIndex: 0,

        init() {
            if (!document.querySelector('.profile-page')) return;

            const islandId = Utils.getUrlParam('id');
            if (!islandId) {
                window.location.href = 'islands.html';
                return;
            }

            const islands = typeof getAllIslands === 'function' ? getAllIslands() : [];
            this.island = islands.find(i => i.id === islandId);

            if (!this.island) {
                window.location.href = 'islands.html';
                return;
            }

            this.cacheElements();
            this.bindEvents();
            this.renderProfile();
            this.initMap();
            this.initMindMap();
            this.initGallery();
            this.renderRelatedIslands(islands);
        },

        cacheElements() {
            this.background = document.getElementById('profile-background');
            this.titleEl = document.getElementById('island-title');
            this.typeBadge = document.getElementById('island-type-badge');
            this.climateBadge = document.getElementById('island-climate-badge');
            this.countryInfo = document.getElementById('country-info');
            this.oceanInfo = document.getElementById('ocean-info');
            this.continentInfo = document.getElementById('continent-info');
            this.exploreBtn = document.getElementById('explore-btn');
            this.scrollToMapBtn = document.getElementById('scroll-to-map');
            this.mapSection = document.getElementById('map-section');
            this.mapContainer = document.getElementById('island-map');
            this.mapControls = document.querySelectorAll('.map-control-btn');
            this.shareBtn = document.getElementById('share-btn');
            this.favoriteBtn = document.getElementById('favorite-btn');
            this.fullscreenBtn = document.getElementById('fullscreen-btn');
            this.shareModal = document.getElementById('share-modal');
            this.shareModalClose = document.getElementById('share-modal-close');
            this.shareUrl = document.getElementById('share-url');
            this.copyLinkBtn = document.getElementById('copy-link');
            this.shareOptions = document.querySelectorAll('.share-option');
            this.exploreOverlay = document.getElementById('explore-overlay');
            this.exploreIslandName = document.getElementById('explore-island-name');
            this.lightbox = document.getElementById('lightbox');
            this.lightboxImage = document.getElementById('lightbox-image');
            this.lightboxCaption = document.getElementById('lightbox-caption');
            this.lightboxClose = document.getElementById('lightbox-close');
            this.lightboxPrev = document.getElementById('lightbox-prev');
            this.lightboxNext = document.getElementById('lightbox-next');
            this.relatedGrid = document.getElementById('related-islands');
            this.relatedScrollLeft = document.getElementById('related-scroll-left');
            this.relatedScrollRight = document.getElementById('related-scroll-right');
            this.galleryGrid = document.getElementById('gallery-grid');
        },

        bindEvents() {
            // Explore button
            if (this.exploreBtn) {
                this.exploreBtn.addEventListener('click', () => this.triggerExploreAnimation());
            }

            // Scroll to map button
            if (this.scrollToMapBtn && this.mapSection) {
                this.scrollToMapBtn.addEventListener('click', () => {
                    Utils.scrollToElement(this.mapSection, 20);
                });
            }

            // Map layer controls
            this.mapControls.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.mapControls.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.changeMapLayer(btn.dataset.layer);
                });
            });

            // Share button
            if (this.shareBtn) {
                this.shareBtn.addEventListener('click', () => this.openShareModal());
            }

            // Share modal close
            if (this.shareModalClose) {
                this.shareModalClose.addEventListener('click', () => this.closeShareModal());
            }

            // Share modal backdrop click
            if (this.shareModal) {
                this.shareModal.addEventListener('click', (e) => {
                    if (e.target === this.shareModal) this.closeShareModal();
                });
            }

            // Copy link button
            if (this.copyLinkBtn) {
                this.copyLinkBtn.addEventListener('click', () => this.copyShareLink());
            }

            // Share options
            this.shareOptions.forEach(option => {
                option.addEventListener('click', () => {
                    this.shareToplatform(option.dataset.platform);
                });
            });

            // Favorite button
            if (this.favoriteBtn) {
                this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
            }

            // Fullscreen button
            if (this.fullscreenBtn) {
                this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
            }

            // Lightbox controls
            if (this.lightboxClose) {
                this.lightboxClose.addEventListener('click', () => this.closeLightbox());
            }

            if (this.lightboxPrev) {
                this.lightboxPrev.addEventListener('click', () => this.showPrevImage());
            }

            if (this.lightboxNext) {
                this.lightboxNext.addEventListener('click', () => this.showNextImage());
            }

            if (this.lightbox) {
                this.lightbox.addEventListener('click', (e) => {
                    if (e.target === this.lightbox) this.closeLightbox();
                });
            }

            // Keyboard navigation for lightbox
            document.addEventListener('keydown', (e) => {
                if (!this.lightbox?.classList.contains('active')) return;
                
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.showPrevImage();
                if (e.key === 'ArrowRight') this.showNextImage();
            });

            // Related islands scroll
            if (this.relatedScrollLeft && this.relatedGrid) {
                this.relatedScrollLeft.addEventListener('click', () => {
                    this.relatedGrid.scrollBy({ left: -270, behavior: 'smooth' });
                });
            }

            if (this.relatedScrollRight && this.relatedGrid) {
                this.relatedScrollRight.addEventListener('click', () => {
                    this.relatedGrid.scrollBy({ left: 270, behavior: 'smooth' });
                });
            }
        },

        renderProfile() {
            const island = this.island;

            // Set page title
            document.title = `${island.name} - Islands Explorer`;

            // Set background
            if (this.background) {
                this.background.style.backgroundImage = `url('${island.image}')`;
            }

            // Set title
            if (this.titleEl) {
                this.titleEl.textContent = island.name;
            }

            // Set type badge
            if (this.typeBadge) {
                const typeIcon = Utils.getTypeIcon(island.islandType);
                this.typeBadge.innerHTML = `
                    <i class="fas ${typeIcon}"></i>
                    <span>${Utils.capitalize(island.islandType)}</span>
                `;
            }

            // Set climate badge
            if (this.climateBadge) {
                this.climateBadge.querySelector('span').textContent = island.climate || 'Various';
            }

            // Set country info
            if (this.countryInfo) {
                this.countryInfo.innerHTML = island.countries.map(country => `
                    <img src="${Utils.getFlagUrl(country.code)}" alt="${country.name}">
                    <span>${country.name}</span>
                `).join('');
            }

            // Set ocean and continent
            if (this.oceanInfo) this.oceanInfo.textContent = island.ocean || 'N/A';
            if (this.continentInfo) this.continentInfo.textContent = island.continent || 'N/A';

            // Set quick facts
            this.setFactValue('fact-area', Utils.formatArea(island.area));
            this.setFactValue('fact-population', Utils.formatNumber(island.population));
            this.setFactValue('fact-highest-point', island.highestPoint?.name || 'N/A');
            this.setFactValue('fact-elevation', island.highestPoint?.elevation ? 
                `${Utils.formatNumber(island.highestPoint.elevation)} m` : '');
            this.setFactValue('fact-climate', island.climate || 'N/A');
            this.setFactValue('fact-best-time', island.bestTimeToVisit || 'Year-round');
            this.setFactValue('fact-coordinates', island.coordinates ? 
                `${island.coordinates[0].toFixed(4)}, ${island.coordinates[1].toFixed(4)}` : 'N/A');

            // Set explore animation name
            if (this.exploreIslandName) {
                this.exploreIslandName.textContent = island.name;
            }

            // Set share URL
            if (this.shareUrl) {
                this.shareUrl.value = window.location.href;
            }

            // Check if favorited
            this.updateFavoriteButton();
        },

        setFactValue(elementId, value) {
            const element = document.getElementById(elementId);
            if (element) element.textContent = value;
        },

        initMap() {
            if (!this.mapContainer || !this.island.coordinates) return;

            // Initialize Leaflet map
            this.map = L.map(this.mapContainer).setView(
                this.island.coordinates,
                CONFIG.mapDefaultZoom
            );

            // Add default tile layer
            this.tileLayers = {
                standard: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: CONFIG.mapMaxZoom
                }),
                satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: '© Esri',
                    maxZoom: CONFIG.mapMaxZoom
                }),
                terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenTopoMap',
                    maxZoom: CONFIG.mapMaxZoom
                })
            };

            this.tileLayers.standard.addTo(this.map);
            this.currentTileLayer = this.tileLayers.standard;

            // Add main island marker
            this.addMarker(
                this.island.coordinates,
                this.island.name,
                'island',
                `<strong>${this.island.name}</strong><br>${this.island.countries.map(c => c.name).join(', ')}`
            );

            // Add city markers
            if (this.island.cities) {
                this.island.cities.forEach(city => {
                    if (city.coordinates) {
                        this.addMarker(
                            city.coordinates,
                            city.name,
                            'city',
                            `<strong>${city.name}</strong><br>Population: ${Utils.formatNumber(city.population)}`
                        );
                    }
                });
            }

            // Add beach markers
            if (this.island.beaches) {
                this.island.beaches.forEach(beach => {
                    if (beach.coordinates) {
                        this.addMarker(
                            beach.coordinates,
                            beach.name,
                            'beach',
                            `<strong>${beach.name}</strong><br>Beach`
                        );
                    }
                });
            }
        },

        addMarker(coordinates, name, type, popupContent) {
            const iconColors = {
                island: '#FFD700',
                city: '#FF6B6B',
                beach: '#00B4D8',
                attraction: '#2ECC71'
            };

            const icon = L.divIcon({
                className: 'custom-marker-container',
                html: `<div class="custom-marker" style="background: ${iconColors[type] || '#FF6B6B'}">
                    <i class="fas ${type === 'beach' ? 'fa-umbrella-beach' : type === 'city' ? 'fa-city' : 'fa-map-marker-alt'}"></i>
                </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker(coordinates, { icon })
                .addTo(this.map)
                .bindPopup(popupContent);

            this.markers.push(marker);
        },

        changeMapLayer(layer) {
            if (!this.map || !this.tileLayers[layer]) return;

            this.map.removeLayer(this.currentTileLayer);
            this.tileLayers[layer].addTo(this.map);
            this.currentTileLayer = this.tileLayers[layer];
        },

        initMindMap() {
            const nodes = document.querySelectorAll('.mind-map-node.expandable');
            
            nodes.forEach(node => {
                const header = node.querySelector('.node-header');
                const content = node.querySelector('.node-content');
                const category = node.dataset.category;

                // Populate content
                this.populateMindMapNode(category, content);

                // Update count
                this.updateNodeCount(category);

                // Toggle expand/collapse
                header.addEventListener('click', () => {
                    node.classList.toggle('expanded');
                });
            });
        },

        populateMindMapNode(category, contentEl) {
            if (!contentEl) return;

            const island = this.island;
            let items = [];
            let itemIcon = 'fa-circle';

            switch(category) {
                case 'beaches':
                    items = island.beaches || [];
                    itemIcon = 'fa-umbrella-beach';
                    break;
                case 'cities':
                    items = island.cities || [];
                    itemIcon = 'fa-city';
                    break;
                case 'attractions':
                    items = island.attractions?.map(a => ({ name: a })) || [];
                    itemIcon = 'fa-landmark';
                    break;
                case 'wildlife':
                    items = island.wildlife?.map(w => ({ name: w })) || [];
                    itemIcon = 'fa-paw';
                    break;
                case 'economy':
                    items = island.economy?.map(e => ({ name: e })) || [];
                    itemIcon = 'fa-chart-line';
                    break;
            }

            if (items.length === 0) {
                contentEl.innerHTML = `
                    <div class="node-content-inner">
                        <p style="color: rgba(255,255,255,0.5); padding: 1rem;">No data available</p>
                    </div>
                `;
                return;
            }

            const itemsHtml = items.map(item => {
                let detail = '';
                if (item.population) detail = `Population: ${Utils.formatNumber(item.population)}`;
                if (item.coordinates) detail += detail ? ' • Has location' : 'Has location';

                return `
                    <div class="node-item">
                        <div class="node-item-icon">
                            <i class="fas ${itemIcon}"></i>
                        </div>
                        <div class="node-item-content">
                            <span class="node-item-name">${item.name || item}</span>
                            ${detail ? `<span class="node-item-detail">${detail}</span>` : ''}
                        </div>
                        ${item.coordinates ? `<button class="node-item-action" data-lat="${item.coordinates[0]}" data-lng="${item.coordinates[1]}">View</button>` : ''}
                    </div>
                `;
            }).join('');

            contentEl.innerHTML = `<div class="node-content-inner">${itemsHtml}</div>`;

            // Add click handlers for view buttons
            contentEl.querySelectorAll('.node-item-action').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lat = parseFloat(btn.dataset.lat);
                    const lng = parseFloat(btn.dataset.lng);
                    if (this.map && lat && lng) {
                        this.map.setView([lat, lng], 12);
                        Utils.scrollToElement(this.mapSection, 20);
                    }
                });
            });
        },

        updateNodeCount(category) {
            const countEl = document.getElementById(`${category}-count`);
            if (!countEl) return;

            const island = this.island;
            let count = 0;

            switch(category) {
                case 'beaches':
                    count = island.beaches?.length || 0;
                    break;
                case 'cities':
                    count = island.cities?.length || 0;
                    break;
                case 'attractions':
                    count = island.attractions?.length || 0;
                    break;
                case 'wildlife':
                    count = island.wildlife?.length || 0;
                    break;
                case 'economy':
                    count = island.economy?.length || 0;
                    break;
            }

            countEl.textContent = count;
        },

        initGallery() {
            if (!this.galleryGrid) return;

            // Generate gallery images (using the main image and variations)
            this.galleryImages = [
                { url: this.island.image, caption: this.island.name },
                { url: this.island.image.replace('800x600', '800x601'), caption: `${this.island.name} - Scenic View` },
                { url: this.island.image.replace('800x600', '801x600'), caption: `${this.island.name} - Landscape` },
                { url: this.island.image.replace('800x600', '802x600'), caption: `${this.island.name} - Nature` },
                { url: this.island.image.replace('800x600', '800x602'), caption: `${this.island.name} - Coastline` },
                { url: this.island.image.replace('800x600', '803x600'), caption: `${this.island.name} - Paradise` }
            ];

            this.galleryGrid.innerHTML = this.galleryImages.map((img, index) => `
                <div class="gallery-item" data-index="${index}">
                    <img src="${img.url}" alt="${img.caption}" loading="lazy">
                    <div class="gallery-item-overlay">
                        <span><i class="fas fa-expand"></i> ${img.caption}</span>
                    </div>
                </div>
            `).join('');

            // Add click handlers
            this.galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.openLightbox(parseInt(item.dataset.index));
                });
            });
        },

        openLightbox(index) {
            this.currentImageIndex = index;
            const image = this.galleryImages[index];
            
            if (this.lightboxImage) this.lightboxImage.src = image.url;
            if (this.lightboxCaption) this.lightboxCaption.textContent = image.caption;
            if (this.lightbox) this.lightbox.classList.add('active');
            
            document.body.style.overflow = 'hidden';
        },

        closeLightbox() {
            if (this.lightbox) this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
        },

        showPrevImage() {
            const newIndex = (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
            this.openLightbox(newIndex);
        },

        showNextImage() {
            const newIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
            this.openLightbox(newIndex);
        },

        renderRelatedIslands(allIslands) {
            if (!this.relatedGrid) return;

            // Find related islands (same ocean or continent)
            const related = allIslands
                .filter(i => i.id !== this.island.id)
                .filter(i => i.ocean === this.island.ocean || i.continent === this.island.continent)
                .slice(0, 10);

            this.relatedGrid.innerHTML = related.map(island => `
                <div class="related-island-card" data-id="${island.id}">
                    <img src="${island.image}" alt="${island.name}" class="related-card-image" loading="lazy">
                    <div class="related-card-content">
                        <h4>${island.name}</h4>
                        <p>${island.countries.map(c => c.name).join(', ')}</p>
                    </div>
                </div>
            `).join('');

            // Add click handlers
            this.relatedGrid.querySelectorAll('.related-island-card').forEach(card => {
                card.addEventListener('click', () => {
                    window.location.href = `islands-profile.html?id=${card.dataset.id}`;
                });
            });
        },

        triggerExploreAnimation() {
            if (this.exploreOverlay) {
                this.exploreOverlay.classList.add('active');
                
                setTimeout(() => {
                    this.exploreOverlay.classList.remove('active');
                    Utils.scrollToElement(this.mapSection, 20);
                }, 2000);
            }
        },

        openShareModal() {
            if (this.shareModal) {
                this.shareModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        },

        closeShareModal() {
            if (this.shareModal) {
                this.shareModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        },

        copyShareLink() {
            if (this.shareUrl) {
                navigator.clipboard.writeText(this.shareUrl.value).then(() => {
                    this.copyLinkBtn.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        this.copyLinkBtn.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                });
            }
        },

        shareToplatform(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(`Check out ${this.island.name} on Islands Explorer!`);
            
            const shareUrls = {
                twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                whatsapp: `https://wa.me/?text=${text}%20${url}`,
                email: `mailto:?subject=${encodeURIComponent(this.island.name + ' - Islands Explorer')}&body=${text}%20${url}`
            };

            if (shareUrls[platform]) {
                window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            }
        },

        toggleFavorite() {
            const favorites = JSON.parse(localStorage.getItem('islandFavorites') || '[]');
            const index = favorites.indexOf(this.island.id);

            if (index > -1) {
                favorites.splice(index, 1);
            } else {
                favorites.push(this.island.id);
            }

            localStorage.setItem('islandFavorites', JSON.stringify(favorites));
            this.updateFavoriteButton();
        },

        updateFavoriteButton() {
            if (!this.favoriteBtn) return;

            const favorites = JSON.parse(localStorage.getItem('islandFavorites') || '[]');
            const isFavorite = favorites.includes(this.island.id);

            this.favoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
            this.favoriteBtn.classList.toggle('active', isFavorite);
        },

        toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                this.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            } else {
                document.exitFullscreen();
                this.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    };

    // ========================================
    // INITIALIZATION
    // ========================================

    function init() {
        // Determine which page we're on and initialize accordingly
        if (document.getElementById('islands-grid')) {
            IslandsGrid.init();
        }

        if (document.querySelector('.profile-page')) {
            IslandProfile.init();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
