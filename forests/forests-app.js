/* =====================================================
   FORESTS EXPLORER - MAIN APPLICATION
   Interactive Features & Functionality
   ===================================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    const ForestsExplorer = {
        // State
        allForests: [],
        filteredForests: [],
        currentFilters: {
            type: 'all',
            continent: 'all',
            search: ''
        },
        currentSort: 'area-desc',
        
        // DOM Elements
        elements: {
            preloader: document.getElementById('preloader'),
            forestsGrid: document.getElementById('forestsGrid'),
            searchInput: document.getElementById('searchInput'),
            mobileSearchInput: document.getElementById('mobileSearchInput'),
            typeFilters: document.getElementById('typeFilters'),
            continentFilters: document.getElementById('continentFilters'),
            sortSelect: document.getElementById('sortSelect'),
            activeFilters: document.getElementById('activeFilters'),
            visibleCount: document.getElementById('visibleCount'),
            totalCount: document.getElementById('totalCount'),
            noResults: document.getElementById('noResults'),
            comingSoonCard: document.getElementById('comingSoonCard'),
            mainNav: document.getElementById('mainNav'),
            mobileMenuBtn: document.getElementById('mobileMenuBtn'),
            mobileMenu: document.getElementById('mobileMenu'),
            backToTop: document.getElementById('backToTop'),
            canopyParticles: document.getElementById('canopyParticles'),
            clearFiltersBtn: document.getElementById('clearFiltersBtn')
        },
        
        // Initialize
        init: function() {
            this.loadForestData();
            this.bindEvents();
            this.initParticles();
            this.hidePreloader();
        },
        
        // Load forest data from all data files
        loadForestData: function() {
            // Combine all forest data
            const dataSources = [
                typeof forestsData1 !== 'undefined' ? forestsData1 : [],
                typeof forestsData2 !== 'undefined' ? forestsData2 : [],
                typeof forestsData3 !== 'undefined' ? forestsData3 : [],
                typeof forestsData4 !== 'undefined' ? forestsData4 : [],
                typeof forestsData5 !== 'undefined' ? forestsData5 : []
            ];
            
            this.allForests = dataSources.flat();
            this.filteredForests = [...this.allForests];
            
            // Sort by area (largest first) by default
            this.sortForests();
            
            // Update counts
            this.elements.totalCount.textContent = this.allForests.length;
            
            // Render initial grid
            this.renderForests();
        },
        
        // Bind all event listeners
        bindEvents: function() {
            const self = this;
            
            // Search functionality
            if (this.elements.searchInput) {
                this.elements.searchInput.addEventListener('input', this.debounce(function(e) {
                    self.currentFilters.search = e.target.value.toLowerCase();
                    self.applyFilters();
                }, 300));
            }
            
            if (this.elements.mobileSearchInput) {
                this.elements.mobileSearchInput.addEventListener('input', this.debounce(function(e) {
                    self.currentFilters.search = e.target.value.toLowerCase();
                    self.applyFilters();
                }, 300));
            }
            
            // Type filter buttons
            if (this.elements.typeFilters) {
                this.elements.typeFilters.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        self.setActiveFilter(self.elements.typeFilters, this);
                        self.currentFilters.type = this.dataset.filter;
                        self.applyFilters();
                    });
                });
            }
            
            // Continent filter buttons
            if (this.elements.continentFilters) {
                this.elements.continentFilters.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        self.setActiveFilter(self.elements.continentFilters, this);
                        self.currentFilters.continent = this.dataset.filter;
                        self.applyFilters();
                    });
                });
            }
            
            // Sort select
            if (this.elements.sortSelect) {
                this.elements.sortSelect.addEventListener('change', function() {
                    self.currentSort = this.value;
                    self.sortForests();
                    self.renderForests();
                });
            }
            
            // Clear filters button
            if (this.elements.clearFiltersBtn) {
                this.elements.clearFiltersBtn.addEventListener('click', function() {
                    self.clearAllFilters();
                });
            }
            
            // Navigation scroll effect
            window.addEventListener('scroll', this.throttle(function() {
                self.handleScroll();
            }, 100));
            
            // Mobile menu toggle
            if (this.elements.mobileMenuBtn) {
                this.elements.mobileMenuBtn.addEventListener('click', function() {
                    this.classList.toggle('active');
                    self.elements.mobileMenu.classList.toggle('active');
                });
            }
            
            // Close mobile menu on link click
            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', function() {
                    self.elements.mobileMenuBtn.classList.remove('active');
                    self.elements.mobileMenu.classList.remove('active');
                });
            });
            
            // Back to top button
            if (this.elements.backToTop) {
                this.elements.backToTop.addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        },
        
        // Set active filter button
        setActiveFilter: function(container, activeBtn) {
            container.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            activeBtn.classList.add('active');
        },
        
        // Apply all filters
        applyFilters: function() {
            const self = this;
            
            this.filteredForests = this.allForests.filter(forest => {
                // Search filter
                if (self.currentFilters.search) {
                    const searchTerm = self.currentFilters.search;
                    const searchableText = `${forest.name} ${forest.region} ${forest.countries?.join(' ') || ''} ${forest.type || ''}`.toLowerCase();
                    if (!searchableText.includes(searchTerm)) {
                        return false;
                    }
                }
                
                // Type filter
                if (self.currentFilters.type !== 'all') {
                    const forestType = (forest.type || '').toLowerCase();
                    if (!forestType.includes(self.currentFilters.type)) {
                        return false;
                    }
                }
                
                // Continent filter
                if (self.currentFilters.continent !== 'all') {
                    const forestContinent = (forest.continent || forest.region || '').toLowerCase().replace(/\s+/g, '-');
                    if (!forestContinent.includes(self.currentFilters.continent.replace(/-/g, ' ')) &&
                        !forestContinent.includes(self.currentFilters.continent)) {
                        return false;
                    }
                }
                
                return true;
            });
            
            this.sortForests();
            this.renderForests();
            this.updateActiveFilterTags();
        },
        
        // Sort forests based on current sort option
        sortForests: function() {
            const sortOption = this.currentSort;
            
            this.filteredForests.sort((a, b) => {
                switch (sortOption) {
                    case 'area-desc':
                        return (b.area || 0) - (a.area || 0);
                    case 'area-asc':
                        return (a.area || 0) - (b.area || 0);
                    case 'name-asc':
                        return a.name.localeCompare(b.name);
                    case 'name-desc':
                        return b.name.localeCompare(a.name);
                    default:
                        return (b.area || 0) - (a.area || 0);
                }
            });
        },
        
        // Render forest cards
        renderForests: function() {
            const grid = this.elements.forestsGrid;
            const noResults = this.elements.noResults;
            const comingSoon = this.elements.comingSoonCard;
            
            // Clear existing cards
            grid.innerHTML = '';
            
            // Update visible count
            this.elements.visibleCount.textContent = this.filteredForests.length;
            
            // Show/hide no results message
            if (this.filteredForests.length === 0) {
                noResults.style.display = 'block';
                comingSoon.style.display = 'none';
                return;
            } else {
                noResults.style.display = 'none';
                comingSoon.style.display = 'flex';
            }
            
            // Create cards with staggered animation
            this.filteredForests.forEach((forest, index) => {
                const card = this.createForestCard(forest, index + 1);
                card.style.animationDelay = `${index * 0.05}s`;
                grid.appendChild(card);
            });
            
            // Lazy load images
            this.lazyLoadImages();
        },
        
        // Create a forest card element
        createForestCard: function(forest, rank) {
            const card = document.createElement('article');
            card.className = 'forest-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `View details for ${forest.name}`);
            card.dataset.forestId = forest.id;
            
            // Format area
            const areaFormatted = this.formatArea(forest.area);
            
            // Get forest type badge
            const typeBadge = this.getForestTypeBadge(forest.type);
            
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img 
                        class="card-image" 
                        data-src="${forest.image}" 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%232d5016' width='200' height='200'/%3E%3Ctext fill='%23ffffff' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='40'%3E🌲%3C/text%3E%3C/svg%3E"
                        alt="${forest.name} - ${forest.type || 'Forest'}"
                        loading="lazy"
                    >
                    <div class="card-overlay"></div>
                    <span class="card-rank">#${rank}</span>
                    ${typeBadge ? `<span class="card-badge">${typeBadge}</span>` : ''}
                </div>
                <div class="card-content">
                    <h3 class="card-name">${forest.name}</h3>
                    <p class="card-region">${this.truncateText(forest.region, 35)}</p>
                    <p class="card-area">${areaFormatted}</p>
                </div>
            `;
            
            // Add click handler
            card.addEventListener('click', () => {
                this.navigateToForest(forest.id);
            });
            
            // Add keyboard handler
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.navigateToForest(forest.id);
                }
            });
            
            return card;
        },
        
        // Navigate to forest profile page
        navigateToForest: function(forestId) {
            window.location.href = `forests-profile.html?forest=${forestId}`;
        },
        
        // Format area number
        formatArea: function(area) {
            if (!area) return 'Area TBD';
            
            if (area >= 1000000) {
                return `${(area / 1000000).toFixed(2)}M km²`;
            } else if (area >= 1000) {
                return `${(area / 1000).toFixed(1)}K km²`;
            }
            return `${area.toLocaleString()} km²`;
        },
        
        // Get forest type badge text
        getForestTypeBadge: function(type) {
            if (!type) return '';
            
            const typeMap = {
                'tropical rainforest': 'Tropical',
                'temperate': 'Temperate',
                'boreal': 'Boreal',
                'taiga': 'Boreal',
                'mangrove': 'Mangrove',
                'cloud forest': 'Cloud',
                'montane': 'Montane',
                'subtropical': 'Subtropical'
            };
            
            const typeLower = type.toLowerCase();
            for (const [key, value] of Object.entries(typeMap)) {
                if (typeLower.includes(key)) {
                    return value;
                }
            }
            
            return '';
        },
        
        // Truncate text with ellipsis
        truncateText: function(text, maxLength) {
            if (!text) return '';
            if (text.length <= maxLength) return text;
            return text.substring(0, maxLength) + '...';
        },
        
        // Update active filter tags
        updateActiveFilterTags: function() {
            const container = this.elements.activeFilters;
            container.innerHTML = '';
            
            if (this.currentFilters.type !== 'all') {
                container.appendChild(this.createFilterTag('Type', this.currentFilters.type, 'type'));
            }
            
            if (this.currentFilters.continent !== 'all') {
                container.appendChild(this.createFilterTag('Continent', this.currentFilters.continent, 'continent'));
            }
            
            if (this.currentFilters.search) {
                container.appendChild(this.createFilterTag('Search', this.currentFilters.search, 'search'));
            }
        },
        
        // Create filter tag element
        createFilterTag: function(label, value, filterType) {
            const self = this;
            const tag = document.createElement('span');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                ${label}: ${value}
                <button aria-label="Remove ${label} filter">&times;</button>
            `;
            
            tag.querySelector('button').addEventListener('click', function() {
                self.removeFilter(filterType);
            });
            
            return tag;
        },
        
        // Remove a specific filter
        removeFilter: function(filterType) {
            switch (filterType) {
                case 'type':
                    this.currentFilters.type = 'all';
                    this.setActiveFilter(this.elements.typeFilters, 
                        this.elements.typeFilters.querySelector('[data-filter="all"]'));
                    break;
                case 'continent':
                    this.currentFilters.continent = 'all';
                    this.setActiveFilter(this.elements.continentFilters,
                        this.elements.continentFilters.querySelector('[data-filter="all"]'));
                    break;
                case 'search':
                    this.currentFilters.search = '';
                    if (this.elements.searchInput) this.elements.searchInput.value = '';
                    if (this.elements.mobileSearchInput) this.elements.mobileSearchInput.value = '';
                    break;
            }
            
            this.applyFilters();
        },
        
        // Clear all filters
        clearAllFilters: function() {
            this.currentFilters = {
                type: 'all',
                continent: 'all',
                search: ''
            };
            
            // Reset UI
            if (this.elements.searchInput) this.elements.searchInput.value = '';
            if (this.elements.mobileSearchInput) this.elements.mobileSearchInput.value = '';
            
            this.setActiveFilter(this.elements.typeFilters,
                this.elements.typeFilters.querySelector('[data-filter="all"]'));
            this.setActiveFilter(this.elements.continentFilters,
                this.elements.continentFilters.querySelector('[data-filter="all"]'));
            
            this.applyFilters();
        },
        
        // Lazy load images
        lazyLoadImages: function() {
            const images = document.querySelectorAll('.card-image[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                        
                        // Add loaded class for fade-in effect
                        img.onload = function() {
                            img.classList.add('loaded');
                        };
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
            
            images.forEach(img => imageObserver.observe(img));
        },
        
        // Handle scroll events
        handleScroll: function() {
            const scrollY = window.scrollY;
            
            // Nav scroll effect
            if (scrollY > 100) {
                this.elements.mainNav.classList.add('scrolled');
            } else {
                this.elements.mainNav.classList.remove('scrolled');
            }
            
            // Back to top button
            if (scrollY > 500) {
                this.elements.backToTop.classList.add('visible');
            } else {
                this.elements.backToTop.classList.remove('visible');
            }
        },
        
        // Initialize canopy particles
        initParticles: function() {
            const container = this.elements.canopyParticles;
            if (!container) return;
            
            const particles = ['🍃', '🌿', '🍂', '🌱'];
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('span');
                particle.className = 'canopy-particle';
                particle.textContent = particles[Math.floor(Math.random() * particles.length)];
                particle.style.cssText = `
                    position: absolute;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    font-size: ${0.8 + Math.random() * 1.2}rem;
                    opacity: ${0.2 + Math.random() * 0.3};
                    animation: floatParticle ${10 + Math.random() * 20}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 10}s;
                `;
                container.appendChild(particle);
            }
            
            // Add keyframes for particle animation
            if (!document.getElementById('particle-styles')) {
                const style = document.createElement('style');
                style.id = 'particle-styles';
                style.textContent = `
                    @keyframes floatParticle {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        25% {
                            transform: translate(20px, -30px) rotate(90deg);
                        }
                        50% {
                            transform: translate(-10px, -50px) rotate(180deg);
                        }
                        75% {
                            transform: translate(15px, -20px) rotate(270deg);
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        },
        
        // Hide preloader
        hidePreloader: function() {
            setTimeout(() => {
                this.elements.preloader.classList.add('hidden');
                document.body.style.overflow = '';
            }, 1500);
        },
        
        // Utility: Debounce function
        debounce: function(func, wait) {
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
        
        // Utility: Throttle function
        throttle: function(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };
    
    // Initialize the app
    ForestsExplorer.init();
});
