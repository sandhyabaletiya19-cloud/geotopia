/**
 * ================================================
 * FORESTS EXPLORER - Main Application Script
 * Interactive Forest Discovery & Education Platform
 * ================================================
 */

// ================================
// GLOBAL STATE & CONFIGURATION
// ================================

const ForestApp = {
    // Configuration
    config: {
        animationDuration: 300,
        debounceDelay: 300,
        lazyLoadThreshold: 100,
        cardsPerPage: 20,
        mapInitialZoom: 2,
        mapMaxZoom: 18
    },

    // State
    state: {
        allForests: [],
        filteredForests: [],
        currentFilter: 'all',
        currentSort: 'area-desc',
        currentView: 'grid',
        searchQuery: '',
        isLoading: true,
        map: null,
        markers: []
    },

    // DOM Elements (cached for performance)
    elements: {},

    // Initialize Application
    init() {
        this.cacheElements();
        this.loadForestData();
        this.setupEventListeners();
        this.initAnimations();
        this.hidePreloader();
    },

    // Cache DOM Elements
    cacheElements() {
        this.elements = {
            preloader: document.getElementById('preloader'),
            mainNav: document.getElementById('mainNav'),
            forestsGrid: document.getElementById('forestsGrid'),
            loadingState: document.getElementById('loadingState'),
            noResults: document.getElementById('noResults'),
            visibleCount: document.getElementById('visibleCount'),
            activeFilterText: document.getElementById('activeFilterText'),
            searchToggle: document.getElementById('searchToggle'),
            searchBar: document.getElementById('searchBar'),
            searchInput: document.getElementById('forestSearch'),
            searchClose: document.getElementById('searchClose'),
            searchSuggestions: document.getElementById('searchSuggestions'),
            mobileMenuToggle: document.getElementById('mobileMenuToggle'),
            mobileMenu: document.getElementById('mobileMenu'),
            themeToggle: document.getElementById('themeToggle'),
            backToTop: document.getElementById('backToTop'),
            sortSelect: document.getElementById('sortSelect'),
            filterTabs: document.querySelectorAll('.filter-tab'),
            viewBtns: document.querySelectorAll('.view-btn'),
            heroParticles: document.getElementById('heroParticles'),
            worldMap: document.getElementById('forestWorldMap'),
            resetFilters: document.getElementById('resetFilters')
        };
    },

    // Load Forest Data from Data Files
    loadForestData() {
        this.showLoading();
        
        // Combine data from all data files
        setTimeout(() => {
            try {
                // Check if data files are loaded
                const data1 = typeof forestsData1 !== 'undefined' ? forestsData1 : [];
                const data2 = typeof forestsData2 !== 'undefined' ? forestsData2 : [];
                
                // Combine all forest data
                this.state.allForests = [...data1, ...data2];
                
                // Sort by area (largest first) by default
                this.sortForests('area-desc');
                
                // Render forests
                this.renderForests();
                
                // Update filter counts
                this.updateFilterCounts();
                
                // Initialize map
                this.initMap();
                
                // Hide loading
                this.hideLoading();
                
                console.log(`Loaded ${this.state.allForests.length} forests`);
            } catch (error) {
                console.error('Error loading forest data:', error);
                this.showError();
            }
        }, 500);
    },

    // Setup Event Listeners
    setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', this.debounce(() => {
            this.handleScroll();
        }, 10));

        // Search toggle
        if (this.elements.searchToggle) {
            this.elements.searchToggle.addEventListener('click', () => {
                this.toggleSearch();
            });
        }

        // Search close
        if (this.elements.searchClose) {
            this.elements.searchClose.addEventListener('click', () => {
                this.closeSearch();
            });
        }

        // Search input
        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener('input', this.debounce((e) => {
                this.handleSearch(e.target.value);
            }, this.config.debounceDelay));

            this.elements.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeSearch();
            });
        }

        // Mobile menu toggle
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Theme toggle
        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Back to top
        if (this.elements.backToTop) {
            this.elements.backToTop.addEventListener('click', () => {
                this.scrollToTop();
            });
        }

        // Sort select
        if (this.elements.sortSelect) {
            this.elements.sortSelect.addEventListener('change', (e) => {
                this.sortForests(e.target.value);
                this.renderForests();
            });
        }

        // Filter tabs
        this.elements.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.handleFilter(tab.dataset.filter);
            });
        });

        // View toggle buttons
        this.elements.viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleViewChange(btn.dataset.view);
            });
        });

        // Reset filters
        if (this.elements.resetFilters) {
            this.elements.resetFilters.addEventListener('click', () => {
                this.resetAllFilters();
            });
        }

        // Keyboard navigation for forest cards
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('forest-card')) {
                const forestId = e.target.dataset.forestId;
                this.navigateToForest(forestId);
            }
        });

        // Close mobile menu on resize
        window.addEventListener('resize', this.debounce(() => {
            if (window.innerWidth > 1024) {
                this.closeMobileMenu();
            }
        }, 100));
    },

    // Handle Scroll Events
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Navigation background
        if (this.elements.mainNav) {
            if (scrollY > 50) {
                this.elements.mainNav.classList.add('scrolled');
            } else {
                this.elements.mainNav.classList.remove('scrolled');
            }
        }

        // Back to top button
        if (this.elements.backToTop) {
            if (scrollY > 500) {
                this.elements.backToTop.classList.add('visible');
            } else {
                this.elements.backToTop.classList.remove('visible');
            }
        }

        // Animate stats on scroll
        this.animateStatsOnScroll();
    },

    // Toggle Search
    toggleSearch() {
        if (this.elements.searchBar) {
            this.elements.searchBar.classList.toggle('active');
            if (this.elements.searchBar.classList.contains('active')) {
                this.elements.searchInput.focus();
            }
        }
    },

    // Close Search
    closeSearch() {
        if (this.elements.searchBar) {
            this.elements.searchBar.classList.remove('active');
            this.elements.searchInput.value = '';
            this.state.searchQuery = '';
            this.applyFilters();
        }
    },

    // Handle Search
    handleSearch(query) {
        this.state.searchQuery = query.toLowerCase().trim();
        this.applyFilters();
        this.showSearchSuggestions(query);
    },

    // Show Search Suggestions
    showSearchSuggestions(query) {
        if (!query || query.length < 2) {
            this.elements.searchSuggestions.innerHTML = '';
            return;
        }

        const suggestions = this.state.allForests
            .filter(forest => 
                forest.name.toLowerCase().includes(query.toLowerCase()) ||
                forest.region.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 5);

        if (suggestions.length > 0) {
            this.elements.searchSuggestions.innerHTML = suggestions.map(forest => `
                <div class="suggestion-item" data-id="${forest.id}">
                    <span class="suggestion-icon">🌲</span>
                    <div class="suggestion-content">
                        <span class="suggestion-name">${this.highlightMatch(forest.name, query)}</span>
                        <span class="suggestion-region">${forest.region}</span>
                    </div>
                </div>
            `).join('');

            // Add click handlers to suggestions
            this.elements.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.navigateToForest(item.dataset.id);
                });
            });
        } else {
            this.elements.searchSuggestions.innerHTML = `
                <div class="suggestion-item no-results">
                    <span class="suggestion-icon">🔍</span>
                    <span>No forests found</span>
                </div>
            `;
        }
    },

    // Highlight Search Match
    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    },

    // Toggle Mobile Menu
    toggleMobileMenu() {
        this.elements.mobileMenuToggle.classList.toggle('active');
        this.elements.mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    },

    // Close Mobile Menu
    closeMobileMenu() {
        this.elements.mobileMenuToggle.classList.remove('active');
        this.elements.mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    },

    // Toggle Theme
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('forestTheme', newTheme);
        
        const themeIcon = this.elements.themeToggle.querySelector('.theme-icon');
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    },

    // Load Saved Theme
    loadSavedTheme() {
        const savedTheme = localStorage.getItem('forestTheme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            const themeIcon = this.elements.themeToggle.querySelector('.theme-icon');
            themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }
    },

    // Scroll to Top
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },

    // Handle Filter
    handleFilter(filterType) {
        // Update active state
        this.elements.filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filterType);
        });

        this.state.currentFilter = filterType;
        this.applyFilters();
    },

    // Apply All Filters (search + type)
    applyFilters() {
        let filtered = [...this.state.allForests];

        // Apply type filter
        if (this.state.currentFilter !== 'all') {
            filtered = filtered.filter(forest => {
                const forestType = forest.type.toLowerCase();
                return forestType.includes(this.state.currentFilter);
            });
        }

        // Apply search filter
        if (this.state.searchQuery) {
            filtered = filtered.filter(forest => 
                forest.name.toLowerCase().includes(this.state.searchQuery) ||
                forest.region.toLowerCase().includes(this.state.searchQuery) ||
                (forest.countries && forest.countries.some(c => 
                    c.toLowerCase().includes(this.state.searchQuery)
                ))
            );
        }

        this.state.filteredForests = filtered;
        this.renderForests();
        this.updateResultsInfo();
    },

    // Sort Forests
    sortForests(sortType) {
        this.state.currentSort = sortType;
        
        const sortFunctions = {
            'area-desc': (a, b) => b.area - a.area,
            'area-asc': (a, b) => a.area - b.area,
            'name-asc': (a, b) => a.name.localeCompare(b.name),
            'name-desc': (a, b) => b.name.localeCompare(a.name),
            'biodiversity': (a, b) => {
                const bioA = (a.biodiversity?.animals?.length || 0) + 
                             (a.biodiversity?.birds?.length || 0);
                const bioB = (b.biodiversity?.animals?.length || 0) + 
                             (b.biodiversity?.birds?.length || 0);
                return bioB - bioA;
            }
        };

        const forests = this.state.currentFilter === 'all' && !this.state.searchQuery 
            ? this.state.allForests 
            : this.state.filteredForests;

        forests.sort(sortFunctions[sortType] || sortFunctions['area-desc']);
    },

    // Handle View Change
    handleViewChange(viewType) {
        this.state.currentView = viewType;
        
        // Update active state
        this.elements.viewBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewType);
        });

        // Toggle grid class
        if (this.elements.forestsGrid) {
            this.elements.forestsGrid.classList.toggle('list-view', viewType === 'list');
        }
    },

    // Update Filter Counts
    updateFilterCounts() {
        const counts = {
            all: this.state.allForests.length,
            tropical: 0,
            temperate: 0,
            boreal: 0,
            mangrove: 0,
            montane: 0,
            deciduous: 0
        };

        this.state.allForests.forEach(forest => {
            const type = forest.type.toLowerCase();
            if (type.includes('tropical')) counts.tropical++;
            if (type.includes('temperate')) counts.temperate++;
            if (type.includes('boreal') || type.includes('taiga')) counts.boreal++;
            if (type.includes('mangrove')) counts.mangrove++;
            if (type.includes('montane') || type.includes('mountain')) counts.montane++;
            if (type.includes('deciduous')) counts.deciduous++;
        });

        // Update DOM
        Object.keys(counts).forEach(key => {
            const element = document.getElementById(`count${key.charAt(0).toUpperCase() + key.slice(1)}`);
            if (element) {
                element.textContent = counts[key];
            }
        });
    },

    // Update Results Info
    updateResultsInfo() {
        const forests = this.state.currentFilter === 'all' && !this.state.searchQuery
            ? this.state.allForests
            : this.state.filteredForests;

        if (this.elements.visibleCount) {
            this.elements.visibleCount.textContent = forests.length;
        }

        if (this.elements.activeFilterText) {
            let filterText = '';
            if (this.state.currentFilter !== 'all') {
                filterText = `Filtering: ${this.state.currentFilter.charAt(0).toUpperCase() + this.state.currentFilter.slice(1)}`;
            }
            if (this.state.searchQuery) {
                filterText += filterText ? ` • Searching: "${this.state.searchQuery}"` : `Searching: "${this.state.searchQuery}"`;
            }
            this.elements.activeFilterText.textContent = filterText;
        }
    },

    // Reset All Filters
    resetAllFilters() {
        this.state.currentFilter = 'all';
        this.state.searchQuery = '';
        
        // Reset UI
        this.elements.filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === 'all');
        });
        
        if (this.elements.searchInput) {
            this.elements.searchInput.value = '';
        }

        this.state.filteredForests = [...this.state.allForests];
        this.renderForests();
        this.updateResultsInfo();
        
        // Hide no results
        if (this.elements.noResults) {
            this.elements.noResults.style.display = 'none';
        }
    },

    // Render Forests Grid
    renderForests() {
        const forests = this.state.currentFilter === 'all' && !this.state.searchQuery
            ? this.state.allForests
            : this.state.filteredForests;

        if (forests.length === 0) {
            this.showNoResults();
            return;
        }

        this.hideNoResults();
        
        const template = document.getElementById('forestCardTemplate');
        const fragment = document.createDocumentFragment();

        forests.forEach((forest, index) => {
            const card = this.createForestCard(forest, index + 1, template);
            fragment.appendChild(card);
        });

        // Add Coming Soon Card
        const comingSoonCard = this.createComingSoonCard();
        fragment.appendChild(comingSoonCard);

        // Clear and append
        this.elements.forestsGrid.innerHTML = '';
        this.elements.forestsGrid.appendChild(fragment);

        // Setup lazy loading
        this.setupLazyLoading();

        // Update count
        this.updateResultsInfo();
    },

    // Create Forest Card
    createForestCard(forest, rank, template) {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.forest-card');

        card.dataset.forestId = forest.id;
        card.setAttribute('aria-label', `${forest.name} - Click to explore`);

        // Set image
        const img = card.querySelector('.card-image');
        img.dataset.src = forest.image;
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%231a4d2e" width="200" height="200"/%3E%3C/svg%3E';
        img.alt = `${forest.name} aerial view`;

        // Set rank
        card.querySelector('.card-rank').textContent = rank;

        // Set content
        card.querySelector('.card-title').textContent = forest.name;
        card.querySelector('.card-region').textContent = forest.region;
        card.querySelector('.card-type').textContent = forest.type;
        card.querySelector('.area-value').textContent = this.formatArea(forest.area);

        // Add click handler
        card.addEventListener('click', () => {
            this.navigateToForest(forest.id);
        });

        return clone;
    },

    // Create Coming Soon Card
    createComingSoonCard() {
        const template = document.getElementById('comingSoonTemplate');
        return template.content.cloneNode(true);
    },

    // Format Area
    formatArea(area) {
        if (area >= 1000000) {
            return `${(area / 1000000).toFixed(2)}M km²`;
        } else if (area >= 1000) {
            return `${(area / 1000).toFixed(1)}K km²`;
        }
        return `${area.toLocaleString()} km²`;
    },

    // Navigate to Forest Profile
    navigateToForest(forestId) {
        window.location.href = `forests-profile.html?forest=${forestId}`;
    },

    // Setup Lazy Loading
    setupLazyLoading() {
        const images = document.querySelectorAll('.card-image[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: `${this.config.lazyLoadThreshold}px`
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // Initialize Map
    initMap() {
        if (!this.elements.worldMap || typeof L === 'undefined') return;

        // Initialize Leaflet map
        this.state.map = L.map('forestWorldMap', {
            center: [20, 0],
            zoom: this.config.mapInitialZoom,
            minZoom: 2,
            maxZoom: this.config.mapMaxZoom,
            scrollWheelZoom: true
        });

        // Add tile layer (using OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.state.map);

        // Custom forest marker icon
        const forestIcon = L.divIcon({
            className: 'forest-marker',
            html: '🌲',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        // Add markers for each forest
        this.state.allForests.forEach(forest => {
            if (forest.coordinates) {
                const marker = L.marker(
                    [forest.coordinates.lat, forest.coordinates.lng],
                    { icon: forestIcon }
                ).addTo(this.state.map);

                // Add popup
                marker.bindPopup(`
                    <div class="forest-popup">
                        <h4>${forest.name}</h4>
                        <p>${forest.region}</p>
                        <p><strong>${this.formatArea(forest.area)}</strong></p>
                        <a href="forests-profile.html?forest=${forest.id}">Explore →</a>
                    </div>
                `);

                this.state.markers.push(marker);
            }
        });
    },

    // Show Loading
    showLoading() {
        this.state.isLoading = true;
        if (this.elements.loadingState) {
            this.elements.loadingState.classList.add('active');
        }
        if (this.elements.forestsGrid) {
            this.elements.forestsGrid.style.display = 'none';
        }
    },

    // Hide Loading
    hideLoading() {
        this.state.isLoading = false;
        if (this.elements.loadingState) {
            this.elements.loadingState.classList.remove('active');
        }
        if (this.elements.forestsGrid) {
            this.elements.forestsGrid.style.display = 'grid';
        }
    },

    // Show No Results
    showNoResults() {
        if (this.elements.noResults) {
            this.elements.noResults.style.display = 'block';
        }
        if (this.elements.forestsGrid) {
            this.elements.forestsGrid.innerHTML = '';
        }
    },

    // Hide No Results
    hideNoResults() {
        if (this.elements.noResults) {
            this.elements.noResults.style.display = 'none';
        }
    },

    // Show Error
    showError() {
        if (this.elements.forestsGrid) {
            this.elements.forestsGrid.innerHTML = `
                <div class="error-state">
                    <div class="error-icon">⚠️</div>
                    <h3>Error Loading Data</h3>
                    <p>Please refresh the page and try again.</p>
                    <button class="btn btn-primary" onclick="location.reload()">Refresh</button>
                </div>
            `;
        }
        this.hideLoading();
    },

    // Hide Preloader
    hidePreloader() {
        setTimeout(() => {
            if (this.elements.preloader) {
                this.elements.preloader.classList.add('hidden');
                setTimeout(() => {
                    this.elements.preloader.style.display = 'none';
                }, 500);
            }
        }, 1500);
    },

    // Initialize Animations
    initAnimations() {
        // Create hero particles
        this.createHeroParticles();
        
        // Animate stats on scroll
        this.setupStatsAnimation();
        
        // Intersection observer for sections
        this.setupSectionAnimations();
    },

    // Create Hero Particles (Floating Leaves)
    createHeroParticles() {
        if (!this.elements.heroParticles) return;

        const leaves = ['🍃', '🌿', '🍂', '🌱'];
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'hero-particle';
            particle.textContent = leaves[Math.floor(Math.random() * leaves.length)];
            particle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.2};
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: -${Math.random() * 10}s;
            `;
            this.elements.heroParticles.appendChild(particle);
        }

        // Add keyframes dynamically
        if (!document.getElementById('particleStyles')) {
            const style = document.createElement('style');
            style.id = 'particleStyles';
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                    }
                    100% {
                        transform: translateY(-100px) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    },

    // Setup Stats Animation
    setupStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        
        const animateStats = () => {
            statNumbers.forEach(stat => {
                if (stat.dataset.animated) return;
                
                const target = parseInt(stat.dataset.count);
                const duration = 2000;
                const start = performance.now();
                
                const animate = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    
                    stat.textContent = Math.floor(target * easeProgress);
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        stat.dataset.animated = 'true';
                    }
                };
                
                requestAnimationFrame(animate);
            });
        };

        // Store for scroll handler
        this.animateStats = animateStats;
    },

    // Animate Stats on Scroll
    animateStatsOnScroll() {
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            this.animateStats && this.animateStats();
        }
    },

    // Setup Section Animations
    setupSectionAnimations() {
        const sections = document.querySelectorAll('.section-header, .fact-card, .filter-tabs');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
    },

    // Utility: Debounce
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
    }
};

// ================================
// INITIALIZE APPLICATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
    ForestApp.init();
    ForestApp.loadSavedTheme();
});

// Export for use in other modules
window.ForestApp = ForestApp;
