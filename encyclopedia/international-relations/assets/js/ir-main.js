/* ===================================
   UNITY ATLAS - MAIN JAVASCRIPT
   Path: geotopia/encyclopedia/international-relations/assets/js/ir-main.js
   =================================== */

// ===================================
// GLOBAL STATE
// ===================================

const UnityAtlas = {
    selectedCountry: null,
    compareMode: false,
    compareCountries: [],
    currentFilter: 'all',
    currentOrg: null,
    dataLoaded: false,
    relationshipsData: null,
    
    // DOM Elements (cached)
    elements: {
        countryDropdown: null,
        countrySearch: null,
        searchResults: null,
        globeCanvas: null,
        tooltip: null
    },
    
    // Initialize
    async init() {
        console.log('🌍 Unity Atlas Initializing...');
        this.cacheElements();
        this.setupEventListeners();
        this.initScrollAnimations();
        this.loadRecentCountries();
        
        // Load data files
        await this.loadDataFiles();
        
        console.log('✅ Unity Atlas Ready!');
    },
    
    // Cache DOM elements
    cacheElements() {
        this.elements.countryDropdown = document.getElementById('country-dropdown');
        this.elements.countrySearch = document.getElementById('country-search');
        this.elements.searchResults = document.getElementById('search-results');
        this.elements.globeCanvas = document.getElementById('globe-canvas');
        this.elements.tooltip = document.getElementById('country-tooltip');
    },
    
    // Load all data files
    async loadDataFiles() {
        try {
            console.log('📥 Loading relationship data...');
            
            // In future, load from JSON files
            // For now, we'll use the data structure from country-data.js
            
            if (window.CountryData) {
                this.dataLoaded = true;
                console.log('✅ Data loaded successfully');
            } else {
                console.warn('⚠️ CountryData not available yet');
            }
        } catch (error) {
            console.error('❌ Error loading data:', error);
            this.showNotification('Error loading data. Please refresh.', 'error');
        }
    },
    
    // Setup Event Listeners
    setupEventListeners() {
        // Country Dropdown
        if (this.elements.countryDropdown) {
            this.elements.countryDropdown.addEventListener('change', (e) => {
                this.selectCountry(e.target.value);
            });
        }
        
        // Search Input
        if (this.elements.countrySearch) {
            this.elements.countrySearch.addEventListener('input', debounce((e) => {
                this.handleSearch(e.target.value);
            }, 300));
            
            // Close search results on outside click
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    this.hideSearchResults();
                }
            });
        }
        
        // Random Country Button
        const randomBtn = document.getElementById('random-country');
        if (randomBtn) {
            randomBtn.addEventListener('click', () => {
                this.selectRandomCountry();
            });
        }
        
        // Compare Mode Button
        const compareBtn = document.getElementById('compare-mode');
        if (compareBtn) {
            compareBtn.addEventListener('click', () => {
                this.toggleCompareMode();
            });
        }
        
        // Filter Buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
                this.updateFilterButtons(e.target);
            });
        });
        
        // Organization Buttons
        const orgBtns = document.querySelectorAll('.org-btn');
        orgBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.toggleOrganization(e.target.dataset.org);
                this.updateOrgButtons(e.target);
            });
        });
        
        // Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // Country Selection
    selectCountry(countryCode) {
        if (!countryCode) return;
        
        console.log(`🌐 Selected: ${countryCode}`);
        this.selectedCountry = countryCode;
        
        // Save to recent countries
        this.saveRecentCountry(countryCode);
        
        // Redirect to country page
        window.location.href = `country.html?code=${countryCode}`;
    },
    
    // Search Handler
    handleSearch(query) {
        if (!query || query.length < 2) {
            this.hideSearchResults();
            return;
        }
        
        const results = this.searchCountries(query);
        this.displaySearchResults(results);
    },
    
    // Search Countries
    searchCountries(query) {
        const lowerQuery = query.toLowerCase();
        const allOptions = Array.from(this.elements.countryDropdown.querySelectorAll('option'));
        
        return allOptions
            .filter(option => {
                if (!option.value) return false;
                const name = option.textContent.toLowerCase();
                const code = option.value.toLowerCase();
                return name.includes(lowerQuery) || code.includes(lowerQuery);
            })
            .slice(0, 10); // Limit to 10 results
    },
    
    // Display Search Results
    displaySearchResults(results) {
        if (results.length === 0) {
            this.hideSearchResults();
            return;
        }
        
        const html = results.map(option => {
            const flag = option.dataset.flag || '🏳️';
            const name = option.textContent.trim();
            const code = option.value;
            
            return `
                <div class="search-result-item" data-code="${code}">
                    <span style="font-size: 1.5rem;">${flag}</span>
                    <span style="font-weight: 600; flex: 1;">${name}</span>
                    <span style="color: #7f8c8d; font-size: 0.875rem;">${code}</span>
                </div>
            `;
        }).join('');
        
        this.elements.searchResults.innerHTML = html;
        this.elements.searchResults.classList.remove('hidden');
        
        // Add click handlers to results
        this.elements.searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const code = item.dataset.code;
                this.elements.countryDropdown.value = code;
                this.selectCountry(code);
            });
        });
    },
    
    // Hide Search Results
    hideSearchResults() {
        if (this.elements.searchResults) {
            this.elements.searchResults.classList.add('hidden');
        }
    },
    
    // Random Country Selection
    selectRandomCountry() {
        const allOptions = Array.from(this.elements.countryDropdown.querySelectorAll('option'))
            .filter(option => option.value !== '');
        
        if (allOptions.length === 0) return;
        
        const randomOption = allOptions[Math.floor(Math.random() * allOptions.length)];
        
        if (randomOption) {
            this.elements.countryDropdown.value = randomOption.value;
            
            // Animate selection
            this.elements.countryDropdown.classList.add('animate-rubber-band');
            setTimeout(() => {
                this.elements.countryDropdown.classList.remove('animate-rubber-band');
                this.selectCountry(randomOption.value);
            }, 1000);
        }
    },
    
    // Toggle Compare Mode
    toggleCompareMode() {
        this.compareMode = !this.compareMode;
        
        const btn = document.getElementById('compare-mode');
        if (this.compareMode) {
            btn.classList.add('active');
            btn.textContent = '✓ Compare Mode Active';
            this.showNotification('Select two countries to compare', 'info');
        } else {
            btn.classList.remove('active');
            btn.textContent = '🔄 Compare Two Nations';
            this.compareCountries = [];
        }
    },
    
    // Set Filter
    setFilter(filter) {
        this.currentFilter = filter;
        console.log(`🔍 Filter: ${filter}`);
        
        // Globe will use this filter
        if (window.UnityGlobe) {
            window.UnityGlobe.applyFilter(filter);
        }
    },
    
    // Update Filter Buttons
    updateFilterButtons(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    },
    
    // Toggle Organization
    toggleOrganization(org) {
        if (this.currentOrg === org) {
            this.currentOrg = null;
        } else {
            this.currentOrg = org;
        }
        
        console.log(`🏛️ Organization: ${this.currentOrg || 'None'}`);
        
        if (window.UnityGlobe) {
            window.UnityGlobe.filterByOrganization(this.currentOrg);
        }
    },
    
    // Update Organization Buttons
    updateOrgButtons(activeBtn) {
        document.querySelectorAll('.org-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (this.currentOrg) {
            activeBtn.classList.add('active');
        }
    },
    
    // Save Recent Country
    saveRecentCountry(countryCode) {
        try {
            let recent = JSON.parse(localStorage.getItem('recentCountries') || '[]');
            
            // Remove if already exists
            recent = recent.filter(code => code !== countryCode);
            
            // Add to beginning
            recent.unshift(countryCode);
            
            // Keep only last 10
            recent = recent.slice(0, 10);
            
            localStorage.setItem('recentCountries', JSON.stringify(recent));
        } catch (e) {
            console.error('Error saving recent country:', e);
        }
    },
    
    // Load Recent Countries
    loadRecentCountries() {
        try {
            const recent = JSON.parse(localStorage.getItem('recentCountries') || '[]');
            if (recent.length > 0) {
                console.log('📚 Recent countries:', recent);
            }
        } catch (e) {
            console.error('Error loading recent countries:', e);
        }
    },
    
    // Scroll Animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Add stagger effect for children
                    const children = entry.target.querySelectorAll('.about-card, .feature-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-fade-in-up');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);
        
        // Observe sections
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
        
        // Add scroll-reveal class to sections
        document.querySelectorAll('.about-ir, .features-section').forEach(section => {
            section.classList.add('scroll-reveal');
        });
    },
    
    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type} animate-slide-down`;
        
        const bgColors = {
            info: '#3498db',
            success: '#2ecc71',
            error: '#e74c3c',
            warning: '#f39c12'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColors[type] || bgColors.info};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            max-width: 300px;
            font-family: var(--font-body);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for search
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

// Format numbers
function formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
}

// Get relationship color
function getRelationshipColor(strength) {
    if (strength >= 80) return '#2ecc71'; // Green
    if (strength >= 60) return '#f1c40f'; // Yellow
    if (strength >= 40) return '#e67e22'; // Orange
    return '#e74c3c'; // Red
}

// Get relationship status
function getRelationshipStatus(strength) {
    if (strength >= 80) return 'Strong Allies';
    if (strength >= 60) return 'Trade Partners';
    if (strength >= 40) return 'Complex Relations';
    return 'Conflict Zone';
}

// ===================================
// INITIALIZE ON DOM READY
// ===================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UnityAtlas.init());
} else {
    UnityAtlas.init();
}

// Expose to global scope
window.UnityAtlas = UnityAtlas;
window.formatNumber = formatNumber;
window.getRelationshipColor = getRelationshipColor;
window.getRelationshipStatus = getRelationshipStatus;
