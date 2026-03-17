/* ============================================
   CORAL REEFS EXPLORER - MAIN APPLICATION
   Part 1: Core Setup, Utilities, Loading, Particles,
           Search, Filters, Card Rendering
   ============================================ */

'use strict';

// ============================================
// CORAL REEFS APP - MAIN NAMESPACE
// ============================================
const CoralReefsApp = (function() {
    
    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        ITEMS_PER_PAGE: 20,
        ANIMATION_DURATION: 400,
        DEBOUNCE_DELAY: 300,
        MAP_DEFAULT_ZOOM: 5,
        PARTICLE_COUNT: 30,
        DIVE_PHASE_DURATION: 4000,
        TOAST_DURATION: 4000
    };

    // ============================================
    // STATE MANAGEMENT
    // ============================================
    const state = {
        allReefs: [],
        filteredReefs: [],
        displayedReefs: [],
        currentPage: 1,
        activeFilters: {
            search: '',
            type: 'all',
            ocean: 'all'
        },
        viewMode: 'grid',
        isNightMode: false,
        isLoading: true,
        currentReef: null,
        mapInstance: null,
        mapLayers: {
            reefZones: null,
            diveSites: null,
            islands: null,
            currents: null,
            protectedAreas: null
        },
        divePhase: 0,
        diveAutoPlay: false,
        galleryIndex: 0
    };

    // ============================================
    // DOM CACHE
    // ============================================
    const DOM = {};

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    const utils = {
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
            if (num === undefined || num === null) return '-';
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // Get country flag URL
        getFlagUrl(countryCode) {
            return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
        },

        // Get reef type label
        getReefTypeLabel(type) {
            const types = {
                'barrier': 'Barrier Reef',
                'fringing': 'Fringing Reef',
                'atoll': 'Atoll',
                'patch': 'Patch Reef',
                'platform': 'Platform Reef',
                'bank': 'Bank Reef',
                'ribbon': 'Ribbon Reef'
            };
            return types[type] || type;
        },

        // Get health status class
        getHealthClass(status) {
            const classes = {
                'healthy': 'healthy',
                'threatened': 'threatened',
                'endangered': 'endangered',
                'critical': 'critical'
            };
            return classes[status] || 'threatened';
        },

        // Get health status label
        getHealthLabel(status) {
            const labels = {
                'healthy': 'Healthy',
                'threatened': 'Threatened',
                'endangered': 'Endangered',
                'critical': 'Critical'
            };
            return labels[status] || 'Unknown';
        },

        // Calculate coral health progress
        getHealthProgress(coverage) {
            // Stroke-dashoffset calculation for SVG circle
            // Circle circumference = 2 * PI * r = 2 * 3.14159 * 45 ≈ 283
            const circumference = 283;
            const offset = circumference - (coverage / 100) * circumference;
            return offset;
        },

        // Smooth scroll to element
        scrollToElement(element, offset = 0) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        },

        // Parse URL parameters
        getUrlParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                id: params.get('id'),
                tab: params.get('tab')
            };
        },

        // Generate unique ID
        generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },

        // Clamp number between min and max
        clamp(num, min, max) {
            return Math.min(Math.max(num, min), max);
        },

        // Capitalize first letter
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        // Truncate text
        truncate(str, length) {
            if (str.length <= length) return str;
            return str.substring(0, length) + '...';
        },

        // Check if element is in viewport
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Animate counter
        animateCounter(element, target, duration = 1000) {
            const start = parseInt(element.textContent.replace(/,/g, '')) || 0;
            const increment = (target - start) / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
                    element.textContent = utils.formatNumber(Math.round(target));
                    clearInterval(timer);
                } else {
                    element.textContent = utils.formatNumber(Math.round(current));
                }
            }, 16);
        }
    };

    // ============================================
    // LOADING SCREEN
    // ============================================
    const loadingScreen = {
        show() {
            const screen = document.getElementById('loadingScreen');
            if (screen) {
                screen.classList.remove('hidden');
            }
        },

        hide() {
            const screen = document.getElementById('loadingScreen');
            if (screen) {
                setTimeout(() => {
                    screen.classList.add('hidden');
                    state.isLoading = false;
                }, 500);
            }
        }
    };

    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    const particleSystem = {
        init() {
            const container = document.getElementById('particles');
            if (!container) return;

            this.createParticles(container, CONFIG.PARTICLE_COUNT);

            // Also create particles for profile page
            const profileParticles = document.getElementById('profileParticles');
            if (profileParticles) {
                this.createParticles(profileParticles, CONFIG.PARTICLE_COUNT);
            }
        },

        createParticles(container, count) {
            container.innerHTML = '';
            
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('span');
                particle.className = 'particle';
                
                // Random properties
                const size = Math.random() * 4 + 2;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 10;
                
                particle.style.cssText = `
                    width: ${size}px;
                    height: ${size}px;
                    left: ${left}%;
                    top: ${top}%;
                    animation-delay: ${delay}s;
                    animation-duration: ${duration}s;
                    opacity: ${Math.random() * 0.5 + 0.2};
                `;
                
                container.appendChild(particle);
            }
        }
    };

    // ============================================
    // TOAST NOTIFICATIONS
    // ============================================
    const toast = {
        show(message, type = 'info', title = '') {
            const container = document.getElementById('toastContainer');
            if (!container) return;

            const id = utils.generateId();
            const icons = {
                success: 'fa-check',
                error: 'fa-times',
                info: 'fa-info'
            };

            const toastEl = document.createElement('div');
            toastEl.className = `toast ${type}`;
            toastEl.id = id;
            toastEl.innerHTML = `
                <div class="toast-icon">
                    <i class="fas ${icons[type] || icons.info}"></i>
                </div>
                <div class="toast-content">
                    ${title ? `<div class="toast-title">${title}</div>` : ''}
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close" onclick="CoralReefsApp.closeToast('${id}')">
                    <i class="fas fa-times"></i>
                </button>
            `;

            container.appendChild(toastEl);

            // Auto remove
            setTimeout(() => {
                this.remove(id);
            }, CONFIG.TOAST_DURATION);

            return id;
        },

        remove(id) {
            const toastEl = document.getElementById(id);
            if (toastEl) {
                toastEl.classList.add('removing');
                setTimeout(() => {
                    toastEl.remove();
                }, 300);
            }
        }
    };

    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    const search = {
        init() {
            const searchInput = document.getElementById('searchInput');
            const searchClear = document.getElementById('searchClear');

            if (!searchInput) return;

            // Search input handler
            searchInput.addEventListener('input', utils.debounce((e) => {
                const query = e.target.value.trim().toLowerCase();
                state.activeFilters.search = query;
                
                // Toggle clear button
                if (searchClear) {
                    searchClear.classList.toggle('visible', query.length > 0);
                }
                
                filters.apply();
            }, CONFIG.DEBOUNCE_DELAY));

            // Clear button handler
            if (searchClear) {
                searchClear.addEventListener('click', () => {
                    searchInput.value = '';
                    state.activeFilters.search = '';
                    searchClear.classList.remove('visible');
                    filters.apply();
                    searchInput.focus();
                });
            }

            // Enter key handler
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    filters.apply();
                }
            });
        },

        highlight(text, query) {
            if (!query) return text;
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<mark>$1</mark>');
        }
    };

    // ============================================
    // FILTER SYSTEM
    // ============================================
    const filters = {
        init() {
            this.initTypeFilters();
            this.initOceanDropdown();
            this.initResetButton();
            this.initViewToggles();
        },

        initTypeFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active from all
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const filterType = btn.dataset.filter;
                    state.activeFilters.type = filterType;
                    
                    this.apply();
                    this.updateActiveTags();
                });
            });
        },

        initOceanDropdown() {
            const dropdownBtn = document.getElementById('oceanDropdownBtn');
            const dropdownMenu = document.getElementById('oceanDropdownMenu');
            const container = dropdownBtn?.closest('.dropdown-container');

            if (!dropdownBtn || !dropdownMenu) return;

            // Toggle dropdown
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                container.classList.toggle('open');
            });

            // Close on outside click
            document.addEventListener('click', () => {
                container.classList.remove('open');
            });

            // Option selection
            const options = dropdownMenu.querySelectorAll('.dropdown-item');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    options.forEach(o => o.classList.remove('active'));
                    option.classList.add('active');
                    
                    const ocean = option.dataset.ocean;
                    state.activeFilters.ocean = ocean;
                    
                    // Update button text
                    const label = option.textContent.trim();
                    dropdownBtn.querySelector('span').textContent = label;
                    
                    container.classList.remove('open');
                    this.apply();
                    this.updateActiveTags();
                });
            });
        },

        initResetButton() {
            const resetBtn = document.getElementById('resetFilters');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    this.reset();
                });
            }
        },

        initViewToggles() {
            const viewBtns = document.querySelectorAll('.view-btn');
            const reefsGrid = document.getElementById('reefsGrid');

            viewBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    viewBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const view = btn.dataset.view;
                    state.viewMode = view;
                    
                    if (reefsGrid) {
                        reefsGrid.classList.toggle('list-view', view === 'list');
                    }
                });
            });
        },

        apply() {
            const { search: query, type, ocean } = state.activeFilters;
            
            state.filteredReefs = state.allReefs.filter(reef => {
                // Search filter
                if (query) {
                    const searchFields = [
                        reef.name,
                        reef.ocean,
                        reef.region,
                        reef.countries.map(c => c.name).join(' ')
                    ].join(' ').toLowerCase();
                    
                    if (!searchFields.includes(query)) {
                        return false;
                    }
                }
                
                // Type filter
                if (type !== 'all') {
                    if (type === 'largest') {
                        // Will be sorted later
                    } else if (type === 'biodiverse') {
                        // Will be sorted later
                    } else if (reef.reefType !== type) {
                        return false;
                    }
                }
                
                // Ocean filter
                if (ocean !== 'all') {
                    const oceanMap = {
                        'pacific': ['Pacific Ocean', 'Coral Sea', 'South Pacific'],
                        'atlantic': ['Atlantic Ocean', 'North Atlantic'],
                        'indian': ['Indian Ocean'],
                        'caribbean': ['Caribbean Sea', 'Caribbean'],
                        'red-sea': ['Red Sea'],
                        'coral-sea': ['Coral Sea']
                    };
                    
                    const oceanMatches = oceanMap[ocean] || [];
                    if (!oceanMatches.some(o => reef.ocean.toLowerCase().includes(o.toLowerCase()))) {
                        return false;
                    }
                }
                
                return true;
            });
            
            // Apply sorting for special filters
            if (type === 'largest') {
                state.filteredReefs.sort((a, b) => (b.area || b.length || 0) - (a.area || a.length || 0));
            } else if (type === 'biodiverse') {
                state.filteredReefs.sort((a, b) => {
                    const bioA = (a.biodiversity?.coralSpecies || 0) + (a.biodiversity?.fishSpecies || 0);
                    const bioB = (b.biodiversity?.coralSpecies || 0) + (b.biodiversity?.fishSpecies || 0);
                    return bioB - bioA;
                });
            }
            
            // Reset pagination
            state.currentPage = 1;
            
            // Update display
            this.updateResults();
            cardRenderer.render();
        },

        updateResults() {
            const resultsEl = document.getElementById('resultsCount');
            const noResults = document.getElementById('noResults');
            const reefsGrid = document.getElementById('reefsGrid');
            
            const count = state.filteredReefs.length;
            
            if (resultsEl) {
                if (count === state.allReefs.length) {
                    resultsEl.textContent = `Showing all ${count} coral reefs`;
                } else {
                    resultsEl.textContent = `Showing ${count} of ${state.allReefs.length} coral reefs`;
                }
            }
            
            if (noResults && reefsGrid) {
                noResults.classList.toggle('visible', count === 0);
                reefsGrid.style.display = count === 0 ? 'none' : '';
            }
        },

        updateActiveTags() {
            const container = document.getElementById('activeFilters');
            if (!container) return;
            
            container.innerHTML = '';
            const { type, ocean } = state.activeFilters;
            
            if (type !== 'all') {
                const tag = this.createFilterTag(utils.getReefTypeLabel(type) || utils.capitalize(type), 'type');
                container.appendChild(tag);
            }
            
            if (ocean !== 'all') {
                const oceanLabels = {
                    'pacific': 'Pacific Ocean',
                    'atlantic': 'Atlantic Ocean',
                    'indian': 'Indian Ocean',
                    'caribbean': 'Caribbean Sea',
                    'red-sea': 'Red Sea',
                    'coral-sea': 'Coral Sea'
                };
                const tag = this.createFilterTag(oceanLabels[ocean] || ocean, 'ocean');
                container.appendChild(tag);
            }
        },

        createFilterTag(label, filterKey) {
            const tag = document.createElement('span');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                ${label}
                <button onclick="CoralReefsApp.removeFilter('${filterKey}')">
                    <i class="fas fa-times"></i>
                </button>
            `;
            return tag;
        },

        removeFilter(filterKey) {
            if (filterKey === 'type') {
                state.activeFilters.type = 'all';
                document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === 'all');
                });
            } else if (filterKey === 'ocean') {
                state.activeFilters.ocean = 'all';
                const dropdownBtn = document.getElementById('oceanDropdownBtn');
                if (dropdownBtn) {
                    dropdownBtn.querySelector('span').textContent = 'All Oceans';
                }
                document.querySelectorAll('.dropdown-item').forEach(item => {
                    item.classList.toggle('active', item.dataset.ocean === 'all');
                });
            }
            
            this.apply();
            this.updateActiveTags();
        },

        reset() {
            state.activeFilters = {
                search: '',
                type: 'all',
                ocean: 'all'
            };
            
            // Reset search input
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = '';
            }
            
            // Reset search clear button
            const searchClear = document.getElementById('searchClear');
            if (searchClear) {
                searchClear.classList.remove('visible');
            }
            
            // Reset filter buttons
            document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === 'all');
            });
            
            // Reset dropdown
            const dropdownBtn = document.getElementById('oceanDropdownBtn');
            if (dropdownBtn) {
                dropdownBtn.querySelector('span').textContent = 'All Oceans';
            }
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.classList.toggle('active', item.dataset.ocean === 'all');
            });
            
            this.apply();
            this.updateActiveTags();
            
            toast.show('Filters have been reset', 'success', 'Filters Reset');
        }
    };

    // ============================================
    // CARD RENDERER
    // ============================================
    const cardRenderer = {
        render() {
            const grid = document.getElementById('reefsGrid');
            const loadMoreContainer = document.getElementById('loadMoreContainer');
            
            if (!grid) return;
            
            // Calculate items to display
            const itemsToShow = state.currentPage * CONFIG.ITEMS_PER_PAGE;
            state.displayedReefs = state.filteredReefs.slice(0, itemsToShow);
            
            // Clear and render
            grid.innerHTML = '';
            
            state.displayedReefs.forEach((reef, index) => {
                const card = this.createCard(reef, index + 1);
                grid.appendChild(card);
            });
            
            // Animate cards
            this.animateCards();
            
            // Update load more button
            if (loadMoreContainer) {
                loadMoreContainer.classList.toggle('hidden', itemsToShow >= state.filteredReefs.length);
            }
        },

        createCard(reef, rank) {
            const card = document.createElement('div');
            card.className = 'reef-card';
            card.dataset.id = reef.id;
            
            // Generate country flags HTML
            const flagsHtml = reef.countries.slice(0, 3).map(country => `
                <img 
                    src="${utils.getFlagUrl(country.code)}" 
                    alt="${country.name}" 
                    class="country-flag"
                    title="${country.name}"
                    loading="lazy"
                >
            `).join('');
            
            // Size display
            let sizeDisplay = '';
            if (reef.length) {
                sizeDisplay = `${utils.formatNumber(reef.length)} km`;
            } else if (reef.area) {
                sizeDisplay = `${utils.formatNumber(reef.area)} km²`;
            }
            
            card.innerHTML = `
                <div class="card-image-container">
                    <img 
                        src="${reef.image}" 
                        alt="${reef.name}"
                        class="card-image"
                        loading="lazy"
                        onerror="this.src='https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400'"
                    >
                    <span class="card-rank">#${rank}</span>
                    <span class="card-type-badge ${reef.reefType}">${utils.getReefTypeLabel(reef.reefType)}</span>
                </div>
                <div class="card-info">
                    <h3 class="card-name">${reef.name}</h3>
                    <div class="card-flags">
                        ${flagsHtml}
                        ${reef.countries.length > 3 ? `<span class="more-flags">+${reef.countries.length - 3}</span>` : ''}
                    </div>
                    <div class="card-size">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${sizeDisplay || 'Size varies'}</span>
                    </div>
                </div>
            `;
            
            // Click handler
            card.addEventListener('click', () => {
                this.handleCardClick(reef);
            });
            
            // Hover handler for map preview (optional)
            card.addEventListener('mouseenter', () => {
                card.querySelector('.card-image').style.transform = 'scale(1.08)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.querySelector('.card-image').style.transform = 'scale(1)';
            });
            
            return card;
        },

        handleCardClick(reef) {
            // Navigate to profile page
            window.location.href = `coral-reefs-profile.html?id=${reef.id}`;
        },

        animateCards() {
            const cards = document.querySelectorAll('.reef-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            });
        },

        loadMore() {
            state.currentPage++;
            this.render();
            
            // Scroll to new cards
            const cards = document.querySelectorAll('.reef-card');
            const newCardIndex = (state.currentPage - 1) * CONFIG.ITEMS_PER_PAGE;
            if (cards[newCardIndex]) {
                utils.scrollToElement(cards[newCardIndex], 100);
            }
        }
    };

    // ============================================
    // QUICK FACTS PANEL
    // ============================================
    const quickFactsPanel = {
        init() {
            const toggle = document.getElementById('quickFactsToggle');
            const panel = document.querySelector('.quick-facts-panel');
            
            if (!toggle || !panel) return;
            
            toggle.addEventListener('click', () => {
                panel.classList.toggle('expanded');
                const isExpanded = panel.classList.contains('expanded');
                toggle.innerHTML = isExpanded 
                    ? '<i class="fas fa-times"></i><span>Close</span>'
                    : '<i class="fas fa-info-circle"></i><span>Quick Facts</span>';
            });
        }
    };

    // ============================================
    // SCROLL TO TOP
    // ============================================
    const scrollToTop = {
        init() {
            const btn = document.getElementById('scrollTopBtn');
            if (!btn) return;
            
            // Show/hide based on scroll position
            window.addEventListener('scroll', utils.debounce(() => {
                btn.classList.toggle('visible', window.pageYOffset > 300);
            }, 100));
            
            // Scroll to top on click
            btn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };

    // ============================================
    // THEME TOGGLE (DAY/NIGHT MODE)
    // ============================================
    const themeToggle = {
        init() {
            const toggles = document.querySelectorAll('#themeToggle, #themeToggleProfile');
            
            // Check for saved preference
            const savedTheme = localStorage.getItem('coralReefsTheme');
            if (savedTheme === 'night') {
                document.body.classList.add('night-mode');
                state.isNightMode = true;
            }
            
            toggles.forEach(toggle => {
                if (!toggle) return;
                
                toggle.addEventListener('click', () => {
                    document.body.classList.toggle('night-mode');
                    state.isNightMode = document.body.classList.contains('night-mode');
                    
                    // Save preference
                    localStorage.setItem('coralReefsTheme', state.isNightMode ? 'night' : 'day');
                    
                    // Show toast
                    toast.show(
                        state.isNightMode ? 'Night mode enabled' : 'Day mode enabled',
                        'info',
                        'Theme Changed'
                    );
                });
            });
        }
    };

    // ============================================
    // MAP PREVIEW MODAL (Main Page)
    // ============================================
    const mapPreviewModal = {
        map: null,

        init() {
            const closeBtn = document.getElementById('mapPreviewClose');
            const modal = document.getElementById('mapPreviewModal');
            
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }
            
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.close();
                    }
                });
            }
            
            // ESC key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal?.classList.contains('active')) {
                    this.close();
                }
            });
        },

        open(reef) {
            const modal = document.getElementById('mapPreviewModal');
            const title = document.getElementById('mapPreviewTitle');
            const container = document.getElementById('mapPreviewContainer');
            const viewBtn = document.getElementById('viewFullProfile');
            
            if (!modal || !container) return;
            
            if (title) {
                title.textContent = reef.name;
            }
            
            if (viewBtn) {
                viewBtn.href = `coral-reefs-profile.html?id=${reef.id}`;
            }
            
            modal.classList.add('active');
            
            // Initialize map
            setTimeout(() => {
                this.initMap(reef, container);
            }, 100);
        },

        initMap(reef, container) {
            // Clear previous map
            container.innerHTML = '';
            
            if (this.map) {
                this.map.remove();
            }
            
            // Create map
            this.map = L.map(container).setView(reef.coordinates, reef.defaultZoom || 6);
            
            // Add tile layer
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap contributors © CARTO',
                maxZoom: 19
            }).addTo(this.map);
            
            // Add marker
            const icon = L.divIcon({
                className: 'custom-marker',
                html: '<div class="marker-dive"><i class="fas fa-water"></i></div>',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });
            
            L.marker(reef.coordinates, { icon }).addTo(this.map)
                .bindPopup(`<strong>${reef.name}</strong><br>${reef.ocean}`);
        },

        close() {
            const modal = document.getElementById('mapPreviewModal');
            if (modal) {
                modal.classList.remove('active');
            }
            
            if (this.map) {
                this.map.remove();
                this.map = null;
            }
        }
    };

    // ============================================
    // STATS UPDATE
    // ============================================
    const statsUpdater = {
        update() {
            const totalReefs = document.getElementById('totalReefs');
            const totalCountries = document.getElementById('totalCountries');
            const totalSpecies = document.getElementById('totalSpecies');
            const totalArea = document.getElementById('totalArea');
            
            if (!state.allReefs.length) return;
            
            // Calculate stats
            const countriesSet = new Set();
            let totalFishSpecies = 0;
            let totalAreaKm = 0;
            
            state.allReefs.forEach(reef => {
                reef.countries.forEach(c => countriesSet.add(c.name));
                totalFishSpecies += reef.biodiversity?.fishSpecies || 0;
                totalAreaKm += reef.area || 0;
            });
            
            // Animate counters
            if (totalReefs) {
                utils.animateCounter(totalReefs, state.allReefs.length);
            }
            if (totalCountries) {
                totalCountries.textContent = `${countriesSet.size}+`;
            }
            if (totalSpecies) {
                totalSpecies.textContent = `${Math.round(totalFishSpecies / 1000)}K+`;
            }
            if (totalArea) {
                totalArea.textContent = `${Math.round(totalAreaKm / 1000)}K+`;
            }
        }
    };

    // ============================================
    // LOAD MORE BUTTON
    // ============================================
    const loadMoreButton = {
        init() {
            const btn = document.getElementById('loadMoreBtn');
            if (btn) {
                btn.addEventListener('click', () => {
                    cardRenderer.loadMore();
                });
            }
        }
    };

    // Part 1 continues in Part 2...
    // Export what we have so far for the public API
    
    return {
        // Will be extended in Part 2 and Part 3
    };

})();
/* ============================================
   CORAL REEFS EXPLORER - MAIN APPLICATION
   Part 2: Profile Page, Tabs, Interactive Map,
           Biodiversity, Dive Sites, Conservation, Mind Map
   ============================================ */

    // ============================================
    // PROFILE PAGE CONTROLLER
    // ============================================
    const profilePage = {
        init(reefId) {
            const reef = state.allReefs.find(r => r.id === reefId);
            
            if (!reef) {
                toast.show('Reef not found', 'error', 'Error');
                setTimeout(() => {
                    window.location.href = 'coral-reefs.html';
                }, 2000);
                return;
            }
            
            state.currentReef = reef;
            
            // Update page title
            document.title = `${reef.name} | Coral Reefs Explorer`;
            
            // Initialize all profile components
            this.setBackground(reef);
            this.setHeader(reef);
            this.setQuickStats(reef);
            this.setOverviewTab(reef);
            this.setBottomPanel(reef);
            
            // Initialize interactive components
            tabs.init();
            profileMap.init(reef);
            biodiversityTab.init(reef);
            divingTab.init(reef);
            conservationTab.init(reef);
            mindMap.init(reef);
            diveExperience.init(reef);
            gallery.init(reef);
            shareModal.init(reef);
            profileControls.init();
            
            // Hide loading screen
            loadingScreen.hide();
        },

        setBackground(reef) {
            const bgImage = document.getElementById('backgroundImage');
            if (bgImage && reef.backgroundImage) {
                bgImage.style.backgroundImage = `url('${reef.backgroundImage}')`;
            }
        },

        setHeader(reef) {
            // Rank
            const rank = document.getElementById('reefRank');
            if (rank) {
                const reefIndex = state.allReefs.findIndex(r => r.id === reef.id);
                rank.textContent = `#${reefIndex + 1}`;
            }
            
            // Name
            const name = document.getElementById('reefName');
            if (name) {
                name.textContent = reef.name;
            }
            
            // Country flags
            const flagsContainer = document.getElementById('countryFlags');
            if (flagsContainer) {
                flagsContainer.innerHTML = reef.countries.map(country => `
                    <img 
                        src="${utils.getFlagUrl(country.code)}" 
                        alt="${country.name}"
                        class="country-flag"
                        title="${country.name}"
                    >
                `).join('');
            }
            
            // Reef type badge
            const typeBadge = document.getElementById('reefTypeBadge');
            if (typeBadge) {
                const typeIcon = {
                    'barrier': 'fa-layer-group',
                    'fringing': 'fa-circle-notch',
                    'atoll': 'fa-ring',
                    'patch': 'fa-puzzle-piece',
                    'platform': 'fa-square'
                };
                typeBadge.innerHTML = `
                    <i class="fas ${typeIcon[reef.reefType] || 'fa-water'}"></i>
                    <span>${utils.getReefTypeLabel(reef.reefType)}</span>
                `;
            }
            
            // Health status
            const healthStatus = document.getElementById('healthStatus');
            if (healthStatus) {
                const healthClass = utils.getHealthClass(reef.healthStatus);
                healthStatus.className = `health-status ${healthClass}`;
                healthStatus.innerHTML = `
                    <span class="health-dot"></span>
                    <span class="health-text">${utils.getHealthLabel(reef.healthStatus)}</span>
                `;
            }
            
            // Location
            const location = document.getElementById('reefLocation');
            if (location) {
                const locationParts = [reef.ocean];
                if (reef.region) locationParts.push(reef.region);
                if (reef.countries.length > 0) {
                    locationParts.push(reef.countries.map(c => c.name).join(', '));
                }
                location.innerHTML = `
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${locationParts.join(' • ')}</span>
                `;
            }
        },

        setQuickStats(reef) {
            // Length
            const length = document.getElementById('statLength');
            if (length) {
                length.textContent = reef.length ? `${utils.formatNumber(reef.length)} km` : '-';
            }
            
            // Area
            const area = document.getElementById('statArea');
            if (area) {
                area.textContent = reef.area ? `${utils.formatNumber(reef.area)} km²` : '-';
            }
            
            // Fish species
            const fish = document.getElementById('statFish');
            if (fish) {
                fish.textContent = reef.biodiversity?.fishSpecies 
                    ? `${utils.formatNumber(reef.biodiversity.fishSpecies)}+` 
                    : '-';
            }
            
            // Coral species
            const coral = document.getElementById('statCoral');
            if (coral) {
                coral.textContent = reef.biodiversity?.coralSpecies 
                    ? `${utils.formatNumber(reef.biodiversity.coralSpecies)}+` 
                    : '-';
            }
            
            // Temperature
            const temp = document.getElementById('statTemp');
            if (temp) {
                temp.textContent = reef.oceanConditions?.temperature || '-';
            }
        },

        setOverviewTab(reef) {
            // Description
            const description = document.getElementById('reefDescription');
            if (description) {
                description.textContent = reef.description || 
                    `${reef.name} is a magnificent ${utils.getReefTypeLabel(reef.reefType).toLowerCase()} located in the ${reef.ocean}. This remarkable marine ecosystem spans ${reef.length ? utils.formatNumber(reef.length) + ' kilometers' : utils.formatNumber(reef.area) + ' square kilometers'} and is home to an incredible diversity of marine life.`;
            }
            
            // Formation
            if (reef.formation) {
                const formationType = document.getElementById('formationType');
                const formationAge = document.getElementById('formationAge');
                const formationProcess = document.getElementById('formationProcess');
                
                if (formationType) formationType.textContent = reef.formation.type || '-';
                if (formationAge) formationAge.textContent = reef.formation.age || '-';
                if (formationProcess) formationProcess.textContent = reef.formation.process || '-';
            }
            
            // Reef Structure
            this.setReefStructure(reef);
            
            // Ocean Conditions
            this.setOceanConditions(reef);
            
            // Nearby Islands
            this.setNearbyIslands(reef);
            
            // Economic Importance
            this.setEconomicStats(reef);
            
            // Historical Importance
            this.setHistoricalTimeline(reef);
            
            // Nearby Cities
            this.setNearbyCities(reef);
        },

        setReefStructure(reef) {
            const legend = document.getElementById('structureLegend');
            if (!legend || !reef.reefStructure) return;
            
            const structures = ['lagoon', 'reefCrest', 'foreReef', 'backReef', 'reefFlat'];
            
            structures.forEach(structure => {
                const item = legend.querySelector(`[data-structure="${structure}"]`);
                if (item) {
                    const hasStructure = reef.reefStructure[structure];
                    item.classList.toggle('inactive', !hasStructure);
                }
            });
        },

        setOceanConditions(reef) {
            if (!reef.oceanConditions) return;
            
            const condTemp = document.getElementById('condTemp');
            const condSalinity = document.getElementById('condSalinity');
            const condVisibility = document.getElementById('condVisibility');
            const condCurrents = document.getElementById('condCurrents');
            
            if (condTemp) condTemp.textContent = reef.oceanConditions.temperature || '-';
            if (condSalinity) condSalinity.textContent = reef.oceanConditions.salinity || '-';
            if (condVisibility) condVisibility.textContent = reef.oceanConditions.visibility || '-';
            if (condCurrents) {
                condCurrents.textContent = reef.oceanConditions.currents?.join(', ') || 'Variable';
            }
        },

        setNearbyIslands(reef) {
            const container = document.getElementById('islandsList');
            if (!container || !reef.nearbyIslands) return;
            
            container.innerHTML = reef.nearbyIslands.map(island => `
                <span class="island-tag" data-lat="${island.coordinates[0]}" data-lng="${island.coordinates[1]}">
                    <i class="fas fa-umbrella-beach"></i>
                    ${island.name}
                </span>
            `).join('');
            
            // Add click handlers to show on map
            container.querySelectorAll('.island-tag').forEach(tag => {
                tag.addEventListener('click', () => {
                    const lat = parseFloat(tag.dataset.lat);
                    const lng = parseFloat(tag.dataset.lng);
                    
                    // Switch to map tab and fly to location
                    tabs.switchTo('map');
                    setTimeout(() => {
                        if (state.mapInstance) {
                            state.mapInstance.flyTo([lat, lng], 10, {
                                duration: 1.5
                            });
                        }
                    }, 300);
                });
            });
        },

        setEconomicStats(reef) {
            const container = document.getElementById('economicStats');
            if (!container || !reef.economicImportance) return;
            
            const icons = {
                'Tourism': 'fa-plane',
                'Fishing': 'fa-fish',
                'Jobs': 'fa-briefcase',
                'Revenue': 'fa-dollar-sign',
                'Research': 'fa-flask'
            };
            
            container.innerHTML = reef.economicImportance.map(item => `
                <div class="economic-item">
                    <span class="label">
                        <i class="fas ${icons[item.label] || 'fa-chart-line'}"></i>
                        ${item.label}
                    </span>
                    <span class="value">${item.value}</span>
                </div>
            `).join('');
        },

        setHistoricalTimeline(reef) {
            const container = document.getElementById('historyTimeline');
            if (!container || !reef.historicalImportance) return;
            
            container.innerHTML = reef.historicalImportance.map(item => `
                <div class="history-item">
                    <span class="history-label">${item.label}</span>
                    <span class="history-value">${item.value}</span>
                </div>
            `).join('');
        },

        setNearbyCities(reef) {
            const container = document.getElementById('citiesList');
            if (!container || !reef.cities) return;
            
            container.innerHTML = reef.cities.map(city => `
                <div class="city-item" data-lat="${city.coordinates[0]}" data-lng="${city.coordinates[1]}">
                    <div class="city-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div class="city-info">
                        <span class="city-name">${city.name}</span>
                        <span class="city-details">${city.country} • Pop: ${utils.formatNumber(city.population)}</span>
                    </div>
                    <i class="fas fa-chevron-right city-arrow"></i>
                </div>
            `).join('');
            
            // Add click handlers
            container.querySelectorAll('.city-item').forEach(item => {
                item.addEventListener('click', () => {
                    const lat = parseFloat(item.dataset.lat);
                    const lng = parseFloat(item.dataset.lng);
                    
                    tabs.switchTo('map');
                    setTimeout(() => {
                        if (state.mapInstance) {
                            state.mapInstance.flyTo([lat, lng], 12, {
                                duration: 1.5
                            });
                        }
                    }, 300);
                });
            });
        },

        setBottomPanel(reef) {
            const bottomLength = document.getElementById('bottomLength');
            const bottomFish = document.getElementById('bottomFish');
            const bottomCoral = document.getElementById('bottomCoral');
            const bottomTemp = document.getElementById('bottomTemp');
            const bottomHealth = document.getElementById('bottomHealth');
            
            if (bottomLength) {
                bottomLength.textContent = reef.length 
                    ? `${utils.formatNumber(reef.length)} km` 
                    : `${utils.formatNumber(reef.area)} km²`;
            }
            
            if (bottomFish) {
                bottomFish.textContent = reef.biodiversity?.fishSpecies 
                    ? `${utils.formatNumber(reef.biodiversity.fishSpecies)}+` 
                    : '-';
            }
            
            if (bottomCoral) {
                bottomCoral.textContent = reef.biodiversity?.coralSpecies 
                    ? `${utils.formatNumber(reef.biodiversity.coralSpecies)}+` 
                    : '-';
            }
            
            if (bottomTemp) {
                bottomTemp.textContent = reef.oceanConditions?.temperature || '-';
            }
            
            if (bottomHealth) {
                const healthClass = utils.getHealthClass(reef.healthStatus);
                bottomHealth.className = `fact-value status-badge ${healthClass}`;
                bottomHealth.textContent = utils.getHealthLabel(reef.healthStatus);
            }
        }
    };

    // ============================================
    // TAB SYSTEM
    // ============================================
    const tabs = {
        init() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.dataset.tab;
                    this.switchTo(tabId);
                });
            });
            
            // Check URL for initial tab
            const params = utils.getUrlParams();
            if (params.tab) {
                this.switchTo(params.tab);
            }
        },

        switchTo(tabId) {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            // Update buttons
            tabBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.tab === tabId);
            });
            
            // Update content
            tabContents.forEach(content => {
                const isActive = content.id === `${tabId}Tab`;
                content.classList.toggle('active', isActive);
            });
            
            // Special handling for map tab
            if (tabId === 'map' && state.mapInstance) {
                setTimeout(() => {
                    state.mapInstance.invalidateSize();
                }, 100);
            }
            
            // Update URL
            const url = new URL(window.location);
            url.searchParams.set('tab', tabId);
            window.history.replaceState({}, '', url);
        }
    };

    // ============================================
    // PROFILE MAP (Interactive Leaflet Map)
    // ============================================
    const profileMap = {
        init(reef) {
            const container = document.getElementById('reefMap');
            if (!container) return;
            
            // Create map
            state.mapInstance = L.map(container, {
                center: reef.coordinates,
                zoom: reef.defaultZoom || 6,
                zoomControl: true,
                scrollWheelZoom: true
            });
            
            // Add base tile layer
            this.baseLayers = {
                dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                    attribution: '© OpenStreetMap © CARTO',
                    maxZoom: 19
                }),
                satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: '© Esri',
                    maxZoom: 19
                })
            };
            
            this.baseLayers.dark.addTo(state.mapInstance);
            
            // Initialize layers
            this.initLayers(reef);
            
            // Initialize controls
            this.initControls(reef);
        },

        initLayers(reef) {
            // Reef Zones Layer (simulated with circle markers)
            state.mapLayers.reefZones = L.layerGroup();
            
            // Create reef zone visualization
            const zoneColors = {
                lagoon: 'rgba(77, 184, 212, 0.4)',
                crest: 'rgba(255, 107, 138, 0.5)',
                foreReef: 'rgba(26, 74, 110, 0.4)'
            };
            
            // Add main reef area
            const reefCircle = L.circle(reef.coordinates, {
                radius: (reef.length || Math.sqrt(reef.area || 1000)) * 500,
                color: '#00d4ff',
                fillColor: zoneColors.lagoon,
                fillOpacity: 0.3,
                weight: 2
            }).bindPopup(`<strong>${reef.name}</strong><br>Main Reef Area`);
            
            state.mapLayers.reefZones.addLayer(reefCircle);
            state.mapLayers.reefZones.addTo(state.mapInstance);
            
            // Dive Sites Layer
            state.mapLayers.diveSites = L.layerGroup();
            
            if (reef.diveSites) {
                reef.diveSites.forEach(site => {
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: '<div class="marker-dive"><i class="fas fa-mask"></i></div>',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    
                    const marker = L.marker(site.coordinates, { icon })
                        .bindPopup(`
                            <strong>${site.name}</strong><br>
                            Depth: ${site.depth}<br>
                            ${site.description || ''}
                        `);
                    
                    state.mapLayers.diveSites.addLayer(marker);
                });
            }
            state.mapLayers.diveSites.addTo(state.mapInstance);
            
            // Islands Layer
            state.mapLayers.islands = L.layerGroup();
            
            if (reef.nearbyIslands) {
                reef.nearbyIslands.forEach(island => {
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: '<div class="marker-island"><i class="fas fa-umbrella-beach"></i></div>',
                        iconSize: [28, 28],
                        iconAnchor: [14, 14]
                    });
                    
                    const marker = L.marker(island.coordinates, { icon })
                        .bindPopup(`<strong>${island.name}</strong>`);
                    
                    state.mapLayers.islands.addLayer(marker);
                });
            }
            state.mapLayers.islands.addTo(state.mapInstance);
            
            // Cities Layer
            if (reef.cities) {
                reef.cities.forEach(city => {
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: '<div class="marker-city"><i class="fas fa-city"></i></div>',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    });
                    
                    const marker = L.marker(city.coordinates, { icon })
                        .bindPopup(`
                            <strong>${city.name}</strong><br>
                            ${city.country}<br>
                            Population: ${utils.formatNumber(city.population)}
                        `);
                    
                    state.mapLayers.islands.addLayer(marker);
                });
            }
            
            // Currents Layer (animated polylines)
            state.mapLayers.currents = L.layerGroup();
            
            if (reef.oceanConditions?.currents) {
                // Create simulated current lines
                const currentOffset = 0.5;
                const currentLine = L.polyline([
                    [reef.coordinates[0] - currentOffset, reef.coordinates[1] - currentOffset],
                    [reef.coordinates[0], reef.coordinates[1]],
                    [reef.coordinates[0] + currentOffset, reef.coordinates[1] + currentOffset]
                ], {
                    color: '#00e5c7',
                    weight: 3,
                    opacity: 0.6,
                    dashArray: '10, 10',
                    className: 'animated-current'
                }).bindPopup(`Current: ${reef.oceanConditions.currents[0] || 'Ocean Current'}`);
                
                state.mapLayers.currents.addLayer(currentLine);
            }
            
            // Protected Areas Layer
            state.mapLayers.protectedAreas = L.layerGroup();
            
            const protectedArea = L.circle(reef.coordinates, {
                radius: (reef.length || Math.sqrt(reef.area || 1000)) * 600,
                color: '#00e676',
                fillColor: 'rgba(0, 230, 118, 0.1)',
                fillOpacity: 0.2,
                weight: 2,
                dashArray: '5, 10'
            }).bindPopup(`<strong>Marine Protected Area</strong><br>${reef.name}`);
            
            state.mapLayers.protectedAreas.addLayer(protectedArea);
            state.mapLayers.protectedAreas.addTo(state.mapInstance);
        },

        initControls(reef) {
            // Toggle controls
            const toggleReefZones = document.getElementById('toggleReefZones');
            const toggleDiveSites = document.getElementById('toggleDiveSites');
            const toggleIslands = document.getElementById('toggleIslands');
            const toggleCurrents = document.getElementById('toggleCurrents');
            const toggleProtectedAreas = document.getElementById('toggleProtectedAreas');
            const resetMapView = document.getElementById('resetMapView');
            const toggleSatellite = document.getElementById('toggleSatellite');
            
            if (toggleReefZones) {
                toggleReefZones.addEventListener('change', (e) => {
                    this.toggleLayer('reefZones', e.target.checked);
                });
            }
            
            if (toggleDiveSites) {
                toggleDiveSites.addEventListener('change', (e) => {
                    this.toggleLayer('diveSites', e.target.checked);
                });
            }
            
            if (toggleIslands) {
                toggleIslands.addEventListener('change', (e) => {
                    this.toggleLayer('islands', e.target.checked);
                });
            }
            
            if (toggleCurrents) {
                toggleCurrents.addEventListener('change', (e) => {
                    this.toggleLayer('currents', e.target.checked);
                });
            }
            
            if (toggleProtectedAreas) {
                toggleProtectedAreas.addEventListener('change', (e) => {
                    this.toggleLayer('protectedAreas', e.target.checked);
                });
            }
            
            if (resetMapView) {
                resetMapView.addEventListener('click', () => {
                    state.mapInstance.flyTo(reef.coordinates, reef.defaultZoom || 6, {
                        duration: 1
                    });
                });
            }
            
            if (toggleSatellite) {
                let isSatellite = false;
                toggleSatellite.addEventListener('click', () => {
                    isSatellite = !isSatellite;
                    
                    if (isSatellite) {
                        state.mapInstance.removeLayer(this.baseLayers.dark);
                        this.baseLayers.satellite.addTo(state.mapInstance);
                        toggleSatellite.classList.add('active');
                    } else {
                        state.mapInstance.removeLayer(this.baseLayers.satellite);
                        this.baseLayers.dark.addTo(state.mapInstance);
                        toggleSatellite.classList.remove('active');
                    }
                });
            }
        },

        toggleLayer(layerName, show) {
            const layer = state.mapLayers[layerName];
            if (!layer || !state.mapInstance) return;
            
            if (show) {
                layer.addTo(state.mapInstance);
            } else {
                state.mapInstance.removeLayer(layer);
            }
        }
    };

    // ============================================
    // BIODIVERSITY TAB
    // ============================================
    const biodiversityTab = {
        init(reef) {
            this.setSpeciesCounts(reef);
            this.setMarineAnimals(reef);
            this.setEndangeredSpecies(reef);
            this.setCoralHealth(reef);
        },

        setSpeciesCounts(reef) {
            const coralCount = document.getElementById('coralCount');
            const fishCount = document.getElementById('fishCount');
            const molluskCount = document.getElementById('molluskCount');
            
            if (coralCount && reef.biodiversity?.coralSpecies) {
                coralCount.textContent = `${utils.formatNumber(reef.biodiversity.coralSpecies)}+`;
            }
            
            if (fishCount && reef.biodiversity?.fishSpecies) {
                fishCount.textContent = `${utils.formatNumber(reef.biodiversity.fishSpecies)}+`;
            }
            
            if (molluskCount && reef.biodiversity?.molluskSpecies) {
                molluskCount.textContent = `${utils.formatNumber(reef.biodiversity.molluskSpecies)}+`;
            }
            
            // Animate progress bars
            setTimeout(() => {
                const fills = document.querySelectorAll('.species-fill');
                fills.forEach((fill, index) => {
                    const widths = [80, 90, 95];
                    fill.style.width = `${widths[index] || 70}%`;
                });
            }, 500);
        },

        setMarineAnimals(reef) {
            const container = document.getElementById('marineAnimalsGrid');
            if (!container || !reef.biodiversity?.marineAnimals) return;
            
            const animalIcons = {
                'Sea turtles': 'fa-turtle',
                'Dolphins': 'fa-fish',
                'Sharks': 'fa-fish',
                'Manta rays': 'fa-fish',
                'Whales': 'fa-fish',
                'Octopus': 'fa-octopus',
                'Jellyfish': 'fa-fish',
                'Seahorses': 'fa-horse',
                'Clownfish': 'fa-fish',
                'Eels': 'fa-fish'
            };
            
            container.innerHTML = reef.biodiversity.marineAnimals.map(animal => `
                <div class="animal-item">
                    <i class="fas ${animalIcons[animal] || 'fa-fish'}"></i>
                    <span>${animal}</span>
                </div>
            `).join('');
        },

        setEndangeredSpecies(reef) {
            const container = document.getElementById('endangeredList');
            if (!container || !reef.biodiversity?.endangeredSpecies) return;
            
            container.innerHTML = reef.biodiversity.endangeredSpecies.map(species => `
                <div class="endangered-item">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>${species}</span>
                </div>
            `).join('');
        },

        setCoralHealth(reef) {
            const progress = document.getElementById('healthProgress');
            const coverageValue = document.getElementById('coralCoverageValue');
            const statusInfo = document.getElementById('healthStatusInfo');
            
            const coverage = reef.coralCoverage || 30;
            const healthClass = utils.getHealthClass(reef.healthStatus);
            
            if (progress) {
                const offset = utils.getHealthProgress(coverage);
                progress.style.strokeDashoffset = offset;
                progress.classList.add(healthClass);
            }
            
            if (coverageValue) {
                coverageValue.textContent = `${coverage}%`;
            }
            
            if (statusInfo) {
                const messages = {
                    healthy: 'This reef is in good condition with thriving coral populations.',
                    threatened: 'This reef faces some environmental pressures but remains resilient.',
                    endangered: 'This reef requires immediate conservation attention.',
                    critical: 'This reef is in critical condition and needs urgent intervention.'
                };
                
                statusInfo.innerHTML = `
                    <span class="status-badge ${healthClass}">${utils.getHealthLabel(reef.healthStatus)}</span>
                    <p>${messages[reef.healthStatus] || messages.threatened}</p>
                `;
            }
        }
    };

    // ============================================
    // DIVING TAB
    // ============================================
    const divingTab = {
        init(reef) {
            const container = document.getElementById('diveSitesGrid');
            if (!container || !reef.diveSites) return;
            
            container.innerHTML = reef.diveSites.map((site, index) => this.createDiveSiteCard(site, index)).join('');
            
            // Add click handlers
            container.querySelectorAll('.dive-site-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const action = btn.dataset.action;
                    const lat = parseFloat(btn.dataset.lat);
                    const lng = parseFloat(btn.dataset.lng);
                    
                    if (action === 'map') {
                        tabs.switchTo('map');
                        setTimeout(() => {
                            if (state.mapInstance) {
                                state.mapInstance.flyTo([lat, lng], 12, {
                                    duration: 1.5
                                });
                            }
                        }, 300);
                    }
                });
            });
        },

        createDiveSiteCard(site, index) {
            const images = [
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
                'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600',
                'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600',
                'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600'
            ];
            
            const features = ['Coral Gardens', 'Marine Life', 'Clear Water', 'Beginner Friendly', 'Advanced'];
            const randomFeatures = features.sort(() => 0.5 - Math.random()).slice(0, 3);
            
            return `
                <div class="dive-site-card">
                    <img 
                        src="${images[index % images.length]}" 
                        alt="${site.name}"
                        class="dive-site-image"
                        loading="lazy"
                    >
                    <div class="dive-site-content">
                        <div class="dive-site-header">
                            <h4 class="dive-site-name">${site.name}</h4>
                            <span class="dive-site-depth">
                                <i class="fas fa-arrow-down"></i>
                                ${site.depth}
                            </span>
                        </div>
                        <p class="dive-site-description">
                            ${site.description || 'A spectacular dive site offering unforgettable underwater experiences.'}
                        </p>
                        <div class="dive-site-features">
                            ${randomFeatures.map(f => `
                                <span class="feature-tag">
                                    <i class="fas fa-check"></i>
                                    ${f}
                                </span>
                            `).join('')}
                        </div>
                        <div class="dive-site-action">
                            <button class="dive-site-btn" data-action="map" data-lat="${site.coordinates[0]}" data-lng="${site.coordinates[1]}">
                                <i class="fas fa-map-marker-alt"></i>
                                View on Map
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    // ============================================
    // CONSERVATION TAB
    // ============================================
    const conservationTab = {
        init(reef) {
            this.setThreats(reef);
            this.setConservationEfforts(reef);
        },

        setThreats(reef) {
            const container = document.getElementById('threatsList');
            if (!container || !reef.environmentalThreats) return;
            
            const threatIcons = {
                'Coral Bleaching': 'fa-sun',
                'Ocean Warming': 'fa-temperature-high',
                'Ocean Acidification': 'fa-flask',
                'Pollution': 'fa-smog',
                'Overfishing': 'fa-fish',
                'Crown-of-Thorns': 'fa-star',
                'Coastal Development': 'fa-building',
                'Storm Damage': 'fa-cloud-showers-heavy'
            };
            
            container.innerHTML = reef.environmentalThreats.map(threat => {
                const iconKey = Object.keys(threatIcons).find(key => 
                    threat.label.toLowerCase().includes(key.toLowerCase())
                );
                const icon = threatIcons[iconKey] || 'fa-exclamation-circle';
                
                return `
                    <div class="threat-item">
                        <div class="threat-icon">
                            <i class="fas ${icon}"></i>
                        </div>
                        <div class="threat-content">
                            <div class="threat-label">${threat.label}</div>
                            <div class="threat-value">${threat.value}</div>
                        </div>
                    </div>
                `;
            }).join('');
        },

        setConservationEfforts(reef) {
            const container = document.getElementById('conservationList');
            if (!container || !reef.conservation) return;
            
            const conservationIcons = {
                'Marine Park': 'fa-shield-alt',
                'UNESCO': 'fa-landmark',
                'World Heritage': 'fa-globe',
                'Protection': 'fa-lock',
                'Research': 'fa-microscope',
                'Restoration': 'fa-seedling',
                'Monitoring': 'fa-eye'
            };
            
            container.innerHTML = reef.conservation.map(item => {
                const iconKey = Object.keys(conservationIcons).find(key => 
                    item.label.toLowerCase().includes(key.toLowerCase())
                );
                const icon = conservationIcons[iconKey] || 'fa-shield-alt';
                
                return `
                    <div class="conservation-item">
                        <div class="conservation-icon">
                            <i class="fas ${icon}"></i>
                        </div>
                        <div class="conservation-content">
                            <div class="conservation-label">${item.label}</div>
                            <div class="conservation-value">${item.value}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    };

    // ============================================
    // MIND MAP
    // ============================================
    const mindMap = {
        init(reef) {
            // Set central node name
            const centralNode = document.getElementById('centralNode');
            if (centralNode) {
                centralNode.innerHTML = `
                    <i class="fas fa-water"></i>
                    <span>${reef.name}</span>
                `;
            }
            
            // Populate branches
            this.populateBranch('location', [
                { label: 'Ocean', value: reef.ocean },
                { label: 'Region', value: reef.region || '-' },
                { label: 'Countries', value: reef.countries.map(c => c.name).join(', ') },
                { label: 'Coordinates', value: `${reef.coordinates[0].toFixed(2)}°, ${reef.coordinates[1].toFixed(2)}°` }
            ]);
            
            this.populateBranch('type', [
                { label: 'Type', value: utils.getReefTypeLabel(reef.reefType) },
                { label: 'Formation', value: reef.formation?.type || '-' },
                { label: 'Age', value: reef.formation?.age || '-' }
            ]);
            
            this.populateBranch('size', [
                { label: 'Length', value: reef.length ? `${utils.formatNumber(reef.length)} km` : '-' },
                { label: 'Area', value: reef.area ? `${utils.formatNumber(reef.area)} km²` : '-' },
                { label: 'Individual Reefs', value: reef.numberOfReefs ? utils.formatNumber(reef.numberOfReefs) : '-' },
                { label: 'Islands', value: reef.numberOfIslands ? utils.formatNumber(reef.numberOfIslands) : '-' }
            ]);
            
            this.populateBranch('structure', [
                { label: 'Lagoon', value: reef.reefStructure?.lagoon ? 'Yes' : 'No' },
                { label: 'Reef Crest', value: reef.reefStructure?.reefCrest ? 'Yes' : 'No' },
                { label: 'Fore Reef', value: reef.reefStructure?.foreReef ? 'Yes' : 'No' },
                { label: 'Back Reef', value: reef.reefStructure?.backReef ? 'Yes' : 'No' },
                { label: 'Reef Flat', value: reef.reefStructure?.reefFlat ? 'Yes' : 'No' }
            ]);
            
            this.populateBranch('biodiversity', [
                { label: 'Coral Species', value: reef.biodiversity?.coralSpecies ? `${utils.formatNumber(reef.biodiversity.coralSpecies)}+` : '-' },
                { label: 'Fish Species', value: reef.biodiversity?.fishSpecies ? `${utils.formatNumber(reef.biodiversity.fishSpecies)}+` : '-' },
                { label: 'Mollusk Species', value: reef.biodiversity?.molluskSpecies ? `${utils.formatNumber(reef.biodiversity.molluskSpecies)}+` : '-' },
                { label: 'Marine Animals', value: reef.biodiversity?.marineAnimals?.slice(0, 3).join(', ') || '-' }
            ]);
            
            this.populateBranch('diving', (reef.diveSites || []).slice(0, 4).map(site => ({
                label: site.name,
                value: site.depth
            })));
            
            this.populateBranch('conditions', [
                { label: 'Temperature', value: reef.oceanConditions?.temperature || '-' },
                { label: 'Salinity', value: reef.oceanConditions?.salinity || '-' },
                { label: 'Visibility', value: reef.oceanConditions?.visibility || '-' },
                { label: 'Currents', value: reef.oceanConditions?.currents?.join(', ') || '-' }
            ]);
            
            this.populateBranch('conservation', (reef.conservation || []).slice(0, 3).map(item => ({
                label: item.label,
                value: item.value
            })));
            
            this.populateBranch('threats', (reef.environmentalThreats || []).slice(0, 3).map(item => ({
                label: item.label,
                value: ''
            })));
            
            this.populateBranch('history', (reef.historicalImportance || []).slice(0, 3).map(item => ({
                label: item.label,
                value: item.value
            })));
            
            // Initialize branch click handlers
            this.initBranchHandlers();
            
            // Initialize control buttons
            this.initControlButtons();
        },

        populateBranch(branchId, items) {
            const container = document.getElementById(`${branchId}Children`);
            if (!container || !items.length) return;
            
            container.innerHTML = items.filter(item => item.value && item.value !== '-').map(item => `
                <div class="mindmap-child">
                    <span class="child-label">${item.label}:</span>
                    <span class="child-value">${item.value}</span>
                </div>
            `).join('');
        },

        initBranchHandlers() {
            const branches = document.querySelectorAll('.mindmap-branch');
            
            branches.forEach(branch => {
                const parentNode = branch.querySelector('.mindmap-node.parent');
                
                if (parentNode) {
                    parentNode.addEventListener('click', () => {
                        branch.classList.toggle('expanded');
                        parentNode.classList.toggle('expanded');
                    });
                }
            });
        },

        initControlButtons() {
            const expandAllBtn = document.getElementById('expandAllBtn');
            const collapseAllBtn = document.getElementById('collapseAllBtn');
            
            if (expandAllBtn) {
                expandAllBtn.addEventListener('click', () => {
                    document.querySelectorAll('.mindmap-branch').forEach(branch => {
                        branch.classList.add('expanded');
                        branch.querySelector('.mindmap-node.parent')?.classList.add('expanded');
                    });
                });
            }
            
            if (collapseAllBtn) {
                collapseAllBtn.addEventListener('click', () => {
                    document.querySelectorAll('.mindmap-branch').forEach(branch => {
                        branch.classList.remove('expanded');
                        branch.querySelector('.mindmap-node.parent')?.classList.remove('expanded');
                    });
                });
            }
        }
    };

    // ============================================
    // PROFILE CONTROLS
    // ============================================
    const profileControls = {
        init() {
            this.initShareButton();
            this.initFavoriteButton();
            this.initFullscreenButton();
            this.initActionButtons();
        },

        initShareButton() {
            const btn = document.getElementById('shareBtn');
            if (btn) {
                btn.addEventListener('click', () => {
                    shareModal.open();
                });
            }
        },

        initFavoriteButton() {
            const btn = document.getElementById('favoriteBtn');
            if (!btn) return;
            
            // Check if already favorited
            const favorites = JSON.parse(localStorage.getItem('favoriteReefs') || '[]');
            const isFavorited = favorites.includes(state.currentReef?.id);
            
            if (isFavorited) {
                btn.classList.add('favorited');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
            }
            
            btn.addEventListener('click', () => {
                const favorites = JSON.parse(localStorage.getItem('favoriteReefs') || '[]');
                const reefId = state.currentReef?.id;
                
                if (!reefId) return;
                
                const index = favorites.indexOf(reefId);
                
                if (index > -1) {
                    favorites.splice(index, 1);
                    btn.classList.remove('favorited');
                    btn.innerHTML = '<i class="far fa-heart"></i>';
                    toast.show('Removed from favorites', 'info');
                } else {
                    favorites.push(reefId);
                    btn.classList.add('favorited');
                    btn.innerHTML = '<i class="fas fa-heart"></i>';
                    toast.show('Added to favorites', 'success', 'Favorite Added');
                }
                
                localStorage.setItem('favoriteReefs', JSON.stringify(favorites));
            });
        },

        initFullscreenButton() {
            const btn = document.getElementById('fullscreenBtn');
            if (!btn) return;
            
            btn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(err => {
                        toast.show('Fullscreen not supported', 'error');
                    });
                    btn.innerHTML = '<i class="fas fa-compress"></i>';
                } else {
                    document.exitFullscreen();
                    btn.innerHTML = '<i class="fas fa-expand"></i>';
                }
            });
            
            document.addEventListener('fullscreenchange', () => {
                if (!document.fullscreenElement) {
                    btn.innerHTML = '<i class="fas fa-expand"></i>';
                }
            });
        },

        initActionButtons() {
            const diveBtn = document.getElementById('diveBtn');
            const exploreMapBtn = document.getElementById('exploreMapBtn');
            const viewGalleryBtn = document.getElementById('viewGalleryBtn');
            
            if (diveBtn) {
                diveBtn.addEventListener('click', () => {
                    diveExperience.start();
                });
            }
            
            if (exploreMapBtn) {
                exploreMapBtn.addEventListener('click', () => {
                    tabs.switchTo('map');
                    utils.scrollToElement(document.querySelector('.profile-main'), 80);
                });
            }
            
            if (viewGalleryBtn) {
                viewGalleryBtn.addEventListener('click', () => {
                    gallery.open(0);
                });
            }
        }
    };

    // Part 2 continues in Part 3...
/* ============================================
   CORAL REEFS EXPLORER - MAIN APPLICATION
   Part 3: Dive Experience, Gallery, Share Modal,
           Initialization, Public API
   ============================================ */

    // ============================================
    // DIVE EXPERIENCE (Animated Dive Through Reef)
    // ============================================
    const diveExperience = {
        phases: [
            { id: 'aerial', name: 'Aerial View', depth: 'Above Surface' },
            { id: 'descend', name: 'Breaking Surface', depth: '0m → 5m' },
            { id: 'crest', name: 'Reef Crest', depth: '5m' },
            { id: 'coral', name: 'Coral Gardens', depth: '10m' },
            { id: 'divesite', name: 'Dive Site', depth: '20m' },
            { id: 'deep', name: 'Deep Edge', depth: '40m' },
            { id: 'surface', name: 'Returning', depth: 'Surface' }
        ],
        autoPlayInterval: null,

        init(reef) {
            this.reef = reef;
            this.initControls();
            this.initCloseHandlers();
            this.setDiveImages();
        },

        setDiveImages() {
            const reef = this.reef;
            if (!reef) return;

            // Set background images for dive phases
            const aerialView = document.getElementById('aerialView');
            const crestView = document.getElementById('crestView');
            const coralView = document.getElementById('coralView');
            const divesiteView = document.getElementById('divesiteView');
            const deepView = document.getElementById('deepView');

            const diveImages = [
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
                'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200',
                'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
                'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200',
                'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200'
            ];

            if (aerialView) {
                aerialView.style.backgroundImage = `url('${reef.backgroundImage || diveImages[0]}')`;
            }
            if (crestView) {
                crestView.style.backgroundImage = `url('${diveImages[1]}')`;
            }
            if (coralView) {
                coralView.style.backgroundImage = `url('${diveImages[2]}')`;
            }
            if (divesiteView) {
                divesiteView.style.backgroundImage = `url('${diveImages[3]}')`;
            }
            if (deepView) {
                deepView.style.backgroundImage = `url('${diveImages[4]}')`;
            }

            // Set dive site description
            const divesiteDesc = document.getElementById('divesiteDescription');
            if (divesiteDesc && reef.diveSites && reef.diveSites[0]) {
                divesiteDesc.textContent = reef.diveSites[0].description || 
                    'Exploring one of the reef\'s famous dive locations...';
            }
        },

        initControls() {
            const prevBtn = document.getElementById('divePrevBtn');
            const nextBtn = document.getElementById('diveNextBtn');
            const autoBtn = document.getElementById('diveAutoBtn');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => this.prevPhase());
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => this.nextPhase());
            }

            if (autoBtn) {
                autoBtn.addEventListener('click', () => this.toggleAutoPlay());
            }
        },

        initCloseHandlers() {
            const closeBtn = document.getElementById('diveCloseBtn');
            const overlay = document.getElementById('diveOverlay');
            const modal = document.getElementById('diveModal');

            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            if (overlay) {
                overlay.addEventListener('click', () => this.close());
            }

            // ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal?.classList.contains('active')) {
                    this.close();
                }
            });

            // Arrow keys for navigation
            document.addEventListener('keydown', (e) => {
                if (!modal?.classList.contains('active')) return;

                if (e.key === 'ArrowRight') {
                    this.nextPhase();
                } else if (e.key === 'ArrowLeft') {
                    this.prevPhase();
                }
            });
        },

        start() {
            const modal = document.getElementById('diveModal');
            if (!modal) return;

            state.divePhase = 0;
            state.diveAutoPlay = false;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            this.updatePhase();
            this.updateProgress();

            toast.show('Use arrow keys or buttons to navigate', 'info', 'Dive Started');
        },

        close() {
            const modal = document.getElementById('diveModal');
            if (!modal) return;

            modal.classList.remove('active');
            document.body.style.overflow = '';

            this.stopAutoPlay();
            state.divePhase = 0;
        },

        nextPhase() {
            if (state.divePhase < this.phases.length - 1) {
                state.divePhase++;
                this.updatePhase();
                this.updateProgress();
            } else {
                // Dive complete
                this.close();
                toast.show('Dive experience complete!', 'success', 'Amazing Journey');
            }
        },

        prevPhase() {
            if (state.divePhase > 0) {
                state.divePhase--;
                this.updatePhase();
                this.updateProgress();
            }
        },

        updatePhase() {
            const phaseElements = document.querySelectorAll('.dive-phase');
            const currentPhase = this.phases[state.divePhase];

            phaseElements.forEach((el, index) => {
                el.classList.toggle('active', index === state.divePhase);
            });

            // Update button states
            const prevBtn = document.getElementById('divePrevBtn');
            const nextBtn = document.getElementById('diveNextBtn');

            if (prevBtn) {
                prevBtn.disabled = state.divePhase === 0;
            }

            if (nextBtn) {
                const isLastPhase = state.divePhase === this.phases.length - 1;
                nextBtn.innerHTML = isLastPhase 
                    ? 'Finish <i class="fas fa-check"></i>'
                    : 'Next <i class="fas fa-chevron-right"></i>';
            }
        },

        updateProgress() {
            const progressFill = document.getElementById('diveProgressFill');
            const steps = document.querySelectorAll('.progress-steps .step');

            const progress = ((state.divePhase + 1) / this.phases.length) * 100;

            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }

            steps.forEach((step, index) => {
                step.classList.remove('active', 'completed');
                
                if (index === state.divePhase) {
                    step.classList.add('active');
                } else if (index < state.divePhase) {
                    step.classList.add('completed');
                }
            });
        },

        toggleAutoPlay() {
            const autoBtn = document.getElementById('diveAutoBtn');

            if (state.diveAutoPlay) {
                this.stopAutoPlay();
                if (autoBtn) {
                    autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Play';
                }
            } else {
                this.startAutoPlay();
                if (autoBtn) {
                    autoBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
                }
            }
        },

        startAutoPlay() {
            state.diveAutoPlay = true;

            this.autoPlayInterval = setInterval(() => {
                if (state.divePhase < this.phases.length - 1) {
                    this.nextPhase();
                } else {
                    this.stopAutoPlay();
                    this.close();
                    toast.show('Dive experience complete!', 'success', 'Amazing Journey');
                }
            }, CONFIG.DIVE_PHASE_DURATION);
        },

        stopAutoPlay() {
            state.diveAutoPlay = false;
            
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }

            const autoBtn = document.getElementById('diveAutoBtn');
            if (autoBtn) {
                autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Play';
            }
        }
    };

    // ============================================
    // GALLERY MODAL
    // ============================================
    const gallery = {
        images: [],
        currentIndex: 0,

        init(reef) {
            this.reef = reef;
            this.generateImages();
            this.initControls();
            this.initCloseHandlers();
            this.initThumbnails();
        },

        generateImages() {
            const reef = this.reef;
            if (!reef) return;

            // Generate gallery images from various sources
            this.images = [
                {
                    src: reef.image || 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200',
                    caption: `${reef.name} - Overview`
                },
                {
                    src: reef.backgroundImage || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
                    caption: `${reef.name} - Aerial View`
                },
                {
                    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
                    caption: 'Underwater Coral Formation'
                },
                {
                    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200',
                    caption: 'Marine Life'
                },
                {
                    src: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200',
                    caption: 'Diving Experience'
                },
                {
                    src: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1200',
                    caption: 'Coral Close-up'
                },
                {
                    src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200',
                    caption: 'Sea Turtle'
                },
                {
                    src: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1200',
                    caption: 'Tropical Fish'
                }
            ];
        },

        initControls() {
            const prevBtn = document.getElementById('galleryPrev');
            const nextBtn = document.getElementById('galleryNext');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => this.prev());
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => this.next());
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                const modal = document.getElementById('galleryModal');
                if (!modal?.classList.contains('active')) return;

                if (e.key === 'ArrowRight') {
                    this.next();
                } else if (e.key === 'ArrowLeft') {
                    this.prev();
                }
            });
        },

        initCloseHandlers() {
            const closeBtn = document.getElementById('galleryClose');
            const overlay = document.getElementById('galleryOverlay');
            const modal = document.getElementById('galleryModal');

            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            if (overlay) {
                overlay.addEventListener('click', () => this.close());
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal?.classList.contains('active')) {
                    this.close();
                }
            });
        },

        initThumbnails() {
            const container = document.getElementById('galleryThumbnails');
            if (!container) return;

            container.innerHTML = this.images.map((img, index) => `
                <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${img.src}" alt="${img.caption}" loading="lazy">
                </div>
            `).join('');

            container.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const index = parseInt(thumb.dataset.index);
                    this.goTo(index);
                });
            });
        },

        open(index = 0) {
            const modal = document.getElementById('galleryModal');
            if (!modal) return;

            this.currentIndex = index;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            this.updateImage();
        },

        close() {
            const modal = document.getElementById('galleryModal');
            if (!modal) return;

            modal.classList.remove('active');
            document.body.style.overflow = '';
        },

        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.updateImage();
        },

        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.updateImage();
        },

        goTo(index) {
            this.currentIndex = index;
            this.updateImage();
        },

        updateImage() {
            const mainImage = document.getElementById('galleryMainImage');
            const counter = document.getElementById('galleryCounter');
            const caption = document.getElementById('galleryCaption');
            const thumbnails = document.querySelectorAll('.gallery-thumbnail');

            const currentImage = this.images[this.currentIndex];

            if (mainImage) {
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = currentImage.src;
                    mainImage.alt = currentImage.caption;
                    mainImage.style.opacity = '1';
                }, 150);
            }

            if (counter) {
                counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
            }

            if (caption) {
                caption.textContent = currentImage.caption;
            }

            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === this.currentIndex);
            });
        }
    };

    // ============================================
    // SHARE MODAL
    // ============================================
    const shareModal = {
        init(reef) {
            this.reef = reef;
            this.initCloseHandlers();
            this.initShareButtons();
            this.initCopyLink();
        },

        initCloseHandlers() {
            const closeBtn = document.getElementById('shareClose');
            const overlay = document.getElementById('shareOverlay');
            const modal = document.getElementById('shareModal');

            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            if (overlay) {
                overlay.addEventListener('click', () => this.close());
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal?.classList.contains('active')) {
                    this.close();
                }
            });
        },

        initShareButtons() {
            const buttons = document.querySelectorAll('.share-btn[data-platform]');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const platform = btn.dataset.platform;
                    this.share(platform);
                });
            });
        },

        initCopyLink() {
            const copyBtn = document.getElementById('copyLinkBtn');
            const linkInput = document.getElementById('shareLink');

            if (copyBtn && linkInput) {
                copyBtn.addEventListener('click', () => {
                    linkInput.select();
                    document.execCommand('copy');
                    
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    }, 2000);

                    toast.show('Link copied to clipboard', 'success');
                });
            }
        },

        open() {
            const modal = document.getElementById('shareModal');
            const linkInput = document.getElementById('shareLink');

            if (!modal) return;

            // Set current URL
            if (linkInput) {
                linkInput.value = window.location.href;
            }

            modal.classList.add('active');
        },

        close() {
            const modal = document.getElementById('shareModal');
            if (modal) {
                modal.classList.remove('active');
            }
        },

        share(platform) {
            const reef = this.reef || state.currentReef;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(`${reef?.name || 'Coral Reef'} - Coral Reefs Explorer`);
            const text = encodeURIComponent(`Discover ${reef?.name || 'this amazing coral reef'}! ${reef?.ocean || ''}`);

            let shareUrl = '';

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${text}%20${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }

            this.close();
        }
    };

    // ============================================
    // DATA LOADER
    // ============================================
    const dataLoader = {
        load() {
            // Check if data is available from the data files
            if (typeof CORAL_REEFS_DATA !== 'undefined') {
                state.allReefs = CORAL_REEFS_DATA;
                state.filteredReefs = [...state.allReefs];
                return true;
            }

            // Fallback: Check for individual data arrays
            if (typeof CORAL_REEFS_DATA_1 !== 'undefined') {
                state.allReefs = [
                    ...(CORAL_REEFS_DATA_1 || []),
                    ...(CORAL_REEFS_DATA_2 || []),
                    ...(CORAL_REEFS_DATA_3 || []),
                    ...(CORAL_REEFS_DATA_4 || []),
                    ...(CORAL_REEFS_DATA_5 || [])
                ];
                state.filteredReefs = [...state.allReefs];
                return true;
            }

            console.error('Coral reefs data not found');
            return false;
        }
    };

    // ============================================
    // MAIN PAGE INITIALIZATION
    // ============================================
    const initMainPage = () => {
        // Load data
        if (!dataLoader.load()) {
            toast.show('Failed to load reef data', 'error', 'Error');
            loadingScreen.hide();
            return;
        }

        // Cache DOM elements
        DOM.reefsGrid = document.getElementById('reefsGrid');
        DOM.searchInput = document.getElementById('searchInput');
        DOM.loadMoreBtn = document.getElementById('loadMoreBtn');

        // Initialize components
        particleSystem.init();
        search.init();
        filters.init();
        quickFactsPanel.init();
        scrollToTop.init();
        themeToggle.init();
        mapPreviewModal.init();
        loadMoreButton.init();

        // Update stats
        statsUpdater.update();

        // Render cards
        cardRenderer.render();

        // Hide loading screen
        setTimeout(() => {
            loadingScreen.hide();
        }, 800);

        console.log('🪸 Coral Reefs Explorer initialized successfully');
        console.log(`📊 Loaded ${state.allReefs.length} reefs`);
    };

    // ============================================
    // PROFILE PAGE INITIALIZATION
    // ============================================
    const initProfilePage = (reefId) => {
        // Load data first
        if (!dataLoader.load()) {
            toast.show('Failed to load reef data', 'error', 'Error');
            loadingScreen.hide();
            return;
        }

        // Initialize common components
        particleSystem.init();
        scrollToTop.init();
        themeToggle.init();

        // Initialize profile page with reef data
        profilePage.init(reefId);

        console.log('🪸 Coral Reef Profile loaded:', reefId);
    };

    // ============================================
    // AUTO INITIALIZATION
    // ============================================
    const autoInit = () => {
        // Determine which page we're on
        const isProfilePage = document.body.classList.contains('profile-page');

        if (isProfilePage) {
            // Profile page will be initialized by inline script with reef ID
            // Just load common components here
            particleSystem.init();
            scrollToTop.init();
            themeToggle.init();
        } else {
            // Main page initialization
            initMainPage();
        }
    };

    // ============================================
    // DOM READY HANDLER
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInit);
    } else {
        autoInit();
    }

    // ============================================
    // PUBLIC API
    // ============================================
    return {
        // Initialization
        init: autoInit,
        initMainPage: initMainPage,
        initProfilePage: initProfilePage,

        // State access
        getState: () => state,
        getAllReefs: () => state.allReefs,
        getCurrentReef: () => state.currentReef,

        // Filter functions
        removeFilter: (key) => filters.removeFilter(key),
        resetFilters: () => filters.reset(),
        applyFilters: () => filters.apply(),

        // Card functions
        loadMore: () => cardRenderer.loadMore(),

        // Toast functions
        showToast: (message, type, title) => toast.show(message, type, title),
        closeToast: (id) => toast.remove(id),

        // Modal functions
        openMapPreview: (reef) => mapPreviewModal.open(reef),
        closeMapPreview: () => mapPreviewModal.close(),

        // Profile page functions
        switchTab: (tabId) => tabs.switchTo(tabId),
        startDive: () => diveExperience.start(),
        openGallery: (index) => gallery.open(index),
        openShare: () => shareModal.open(),

        // Theme functions
        toggleNightMode: () => {
            document.body.classList.toggle('night-mode');
            state.isNightMode = document.body.classList.contains('night-mode');
            localStorage.setItem('coralReefsTheme', state.isNightMode ? 'night' : 'day');
        },

        // Utility functions
        utils: utils,

        // Version
        version: '1.0.0'
    };

})();

// ============================================
// GLOBAL KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Ctrl/Cmd + D for night mode toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        CoralReefsApp.toggleNightMode();
    }
});

// ============================================
// WINDOW EVENTS
// ============================================
window.addEventListener('resize', () => {
    // Invalidate map size on resize
    const state = CoralReefsApp.getState();
    if (state.mapInstance) {
        state.mapInstance.invalidateSize();
    }
});

// ============================================
// VISIBILITY CHANGE (Pause animations when hidden)
// ============================================
document.addEventListener('visibilitychange', () => {
    const state = CoralReefsApp.getState();
    
    if (document.hidden) {
        // Page is hidden - could pause animations
        if (state.diveAutoPlay) {
            // Store that autoplay was active
            state.diveAutoPlayPaused = true;
        }
    } else {
        // Page is visible again
        if (state.diveAutoPlayPaused) {
            state.diveAutoPlayPaused = false;
        }
    }
});

// ============================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker for PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('SW registered'))
        //     .catch(err => console.log('SW registration failed'));
    });
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c🪸 Coral Reefs Explorer', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
console.log('%cExplore the world\'s underwater treasures', 'font-size: 14px; color: #4db8d4;');
console.log('%cVersion 1.0.0', 'font-size: 12px; color: #888;');
