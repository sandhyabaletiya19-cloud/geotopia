/* ============================================
   ENCYCLOPEDIA APPLICATION
   Main JavaScript Controller
   ============================================ */

class EncyclopediaApp {
    constructor() {
        // State
        this.currentTab = 'overview';
        this.currentContinent = 'all';
        this.currentSort = 'name';
        this.currentView = 'grid';
        this.currentPhysicalFeature = 'mountains';
        this.countriesLoaded = 0;
        this.countriesPerPage = 20;
        this.allCountries = [];
        this.filteredCountries = [];
        this.searchTimeout = null;
        
        // Initialize
        this.init();
    }

    init() {
        this.loadAllData();
        this.setupEventListeners();
        this.renderFeaturedCountries();
        this.renderContinents();
        this.renderDisputes();
        this.renderEarthSystems();
        this.renderPhysicalFeatures();
        this.renderClimateZones();
        
        // Hide loading screen
        setTimeout(() => {
            document.getElementById('loadingScreen').classList.add('hidden');
        }, 1500);
        
        // Check URL parameters
        this.handleURLParams();
    }

    // ============================================
    // DATA LOADING
    // ============================================

    loadAllData() {
        // Combine all country data from separate files
        this.allCountries = [];
        
        // Load from encyclopedia-data-1.js, encyclopedia-data-2.js, etc.
        if (typeof CountriesData1 !== 'undefined') {
            this.allCountries = this.allCountries.concat(CountriesData1);
        }
        if (typeof CountriesData2 !== 'undefined') {
            this.allCountries = this.allCountries.concat(CountriesData2);
        }
        if (typeof CountriesData3 !== 'undefined') {
            this.allCountries = this.allCountries.concat(CountriesData3);
        }
        
        this.filteredCountries = [...this.allCountries];
        
        // Update country count
        this.updateCountryCount();
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    setupEventListeners() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabId = e.currentTarget.dataset.tab;
                this.switchTab(tabId);
            });
        });

        // Search
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
            searchInput.addEventListener('focus', () => this.showSearchResults());
        }

        const searchClear = document.getElementById('searchClear');
        if (searchClear) {
            searchClear.addEventListener('click', () => this.clearSearch());
        }

        // Close search on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideSearchResults();
            }
        });

        // Continent filter
        const continentFilter = document.getElementById('continentFilter');
        if (continentFilter) {
            continentFilter.addEventListener('change', (e) => {
                this.currentContinent = e.target.value;
                this.filterAndRenderCountries();
            });
        }

        // Sort filter
        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterAndRenderCountries();
            });
        }

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.currentView = e.currentTarget.dataset.view;
                this.updateGridView();
            });
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => this.loadMoreCountries());
        }

        // Physical feature tabs
        document.querySelectorAll('.physical-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.physical-tab').forEach(t => t.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.currentPhysicalFeature = e.currentTarget.dataset.feature;
                this.renderPhysicalFeatures();
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideSearchResults();
                this.closeComingSoonModal();
            }
            if (e.key === '/' && !e.target.matches('input, textarea')) {
                e.preventDefault();
                document.getElementById('globalSearch')?.focus();
            }
        });
    }

    // ============================================
    // TAB NAVIGATION
    // ============================================

    switchTab(tabId) {
        this.currentTab = tabId;

        // Update nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabId);
        });

        // Update sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(`section-${tabId}`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Load countries if switching to countries tab
        if (tabId === 'countries' && this.countriesLoaded === 0) {
            this.filterAndRenderCountries();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ============================================
    // SEARCH
    // ============================================

    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        clearTimeout(this.searchTimeout);
        
        if (!query) {
            this.hideSearchResults();
            return;
        }

        this.searchTimeout = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }

    performSearch(query) {
        const results = [];
        const maxResults = 10;

        // Search countries
        this.allCountries.forEach(country => {
            if (results.length >= maxResults) return;
            
            const searchFields = [
                country.name,
                country.basic.capital,
                country.basic.continent,
                country.basic.region,
                ...country.culture.languages,
                ...(country.geography_links.rivers || []),
                ...(country.geography_links.mountains || [])
            ].map(f => (f || '').toLowerCase());

            if (searchFields.some(field => field.includes(query))) {
                results.push({
                    type: 'country',
                    id: country.id,
                    name: country.name,
                    subtitle: `${country.basic.continent} • ${country.basic.capital}`,
                    flag: country.flag,
                    icon: '🏳️'
                });
            }
        });

        // Search physical features
        if (typeof PhysicalFeatures !== 'undefined') {
            ['mountains', 'rivers', 'deserts', 'oceans', 'lakes'].forEach(type => {
                if (PhysicalFeatures[type]) {
                    PhysicalFeatures[type].forEach(feature => {
                        if (results.length >= maxResults) return;
                        if (feature.name.toLowerCase().includes(query)) {
                            const icons = { mountains: '🏔️', rivers: '🌊', deserts: '🏜️', oceans: '🌊', lakes: '💧' };
                            results.push({
                                type: 'feature',
                                featureType: type,
                                id: feature.id,
                                name: feature.name,
                                subtitle: feature.location || type.charAt(0).toUpperCase() + type.slice(1),
                                icon: icons[type]
                            });
                        }
                    });
                }
            });
        }

        // Search disputes
        if (typeof DisputesData !== 'undefined') {
            DisputesData.forEach(dispute => {
                if (results.length >= maxResults) return;
                if (dispute.name.toLowerCase().includes(query)) {
                    results.push({
                        type: 'dispute',
                        id: dispute.id,
                        name: dispute.name,
                        subtitle: `${dispute.type} • ${dispute.countries.join(', ')}`,
                        icon: '⚠️'
                    });
                }
            });
        }

        this.renderSearchResults(results);
    }

    renderSearchResults(results) {
        const container = document.getElementById('searchResults');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-result-item">
                    <div class="result-icon">🔍</div>
                    <div class="result-info">
                        <h4>No results found</h4>
                        <span>Try different keywords</span>
                    </div>
                </div>
            `;
        } else {
            container.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="app.handleSearchResultClick('${result.type}', '${result.id}', '${result.featureType || ''}')">
                    ${result.flag 
                        ? `<img src="${result.flag}" alt="${result.name}">`
                        : `<div class="result-icon">${result.icon}</div>`
                    }
                    <div class="result-info">
                        <h4>${result.name}</h4>
                        <span>${result.subtitle}</span>
                    </div>
                </div>
            `).join('');
        }

        container.classList.add('show');
    }

    handleSearchResultClick(type, id, featureType) {
        this.hideSearchResults();
        this.clearSearch();

        switch (type) {
            case 'country':
                this.openCountryProfile(id);
                break;
            case 'feature':
                this.switchTab('physical');
                // Switch to appropriate physical tab
                document.querySelector(`[data-feature="${featureType}"]`)?.click();
                break;
            case 'dispute':
                this.switchTab('disputes');
                break;
        }
    }

    showSearchResults() {
        const query = document.getElementById('globalSearch')?.value;
        if (query) {
            document.getElementById('searchResults')?.classList.add('show');
        }
    }

    hideSearchResults() {
        document.getElementById('searchResults')?.classList.remove('show');
    }

    clearSearch() {
        const searchInput = document.getElementById('globalSearch');
        if (searchInput) {
            searchInput.value = '';
        }
        this.hideSearchResults();
    }

    // ============================================
    // COUNTRIES
    // ============================================

    filterAndRenderCountries() {
        // Filter by continent
        if (this.currentContinent === 'all') {
            this.filteredCountries = [...this.allCountries];
        } else {
            this.filteredCountries = this.allCountries.filter(c => 
                c.basic.continent === this.currentContinent ||
                c.basic.continent.includes(this.currentContinent)
            );
        }

        // Sort
        this.sortCountries();

        // Reset and render
        this.countriesLoaded = 0;
        document.getElementById('countriesGrid').innerHTML = '';
        this.loadMoreCountries();
        this.updateCountryCount();
    }

    sortCountries() {
        switch (this.currentSort) {
            case 'name':
                this.filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                this.filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'population':
                this.filteredCountries.sort((a, b) => {
                    const popA = this.parsePopulation(a.basic.population);
                    const popB = this.parsePopulation(b.basic.population);
                    return popB - popA;
                });
                break;
            case 'area':
                this.filteredCountries.sort((a, b) => {
                    const areaA = this.parseArea(a.basic.area);
                    const areaB = this.parseArea(b.basic.area);
                    return areaB - areaA;
                });
                break;
        }
    }

    parsePopulation(popStr) {
        if (!popStr) return 0;
        const str = popStr.toLowerCase().replace(/,/g, '');
        if (str.includes('billion')) {
            return parseFloat(str) * 1000000000;
        } else if (str.includes('million')) {
            return parseFloat(str) * 1000000;
        }
        return parseFloat(str) || 0;
    }

    parseArea(areaStr) {
        if (!areaStr) return 0;
        return parseFloat(areaStr.replace(/[^0-9.]/g, '')) || 0;
    }

    loadMoreCountries() {
        const grid = document.getElementById('countriesGrid');
        if (!grid) return;

        const startIndex = this.countriesLoaded;
        const endIndex = Math.min(startIndex + this.countriesPerPage, this.filteredCountries.length);

        for (let i = startIndex; i < endIndex; i++) {
            const country = this.filteredCountries[i];
            grid.innerHTML += this.createCountryCard(country);
        }

        this.countriesLoaded = endIndex;

        // Hide load more button if all loaded
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        if (loadMoreContainer) {
            loadMoreContainer.style.display = this.countriesLoaded >= this.filteredCountries.length ? 'none' : 'block';
        }
    }

    createCountryCard(country) {
        return `
            <div class="country-card" onclick="app.openCountryProfile('${country.id}')">
                <div class="country-card-header">
                    <img class="country-flag" src="${country.flag}" alt="${country.name} flag" loading="lazy">
                    <div class="country-info">
                        <h3>${country.name}</h3>
                        <span>${country.basic.continent}</span>
                    </div>
                </div>
                <div class="country-card-body">
                    <div class="country-stats">
                        <div class="country-stat">
                            <label>Capital</label>
                            <span>${country.basic.capital}</span>
                        </div>
                        <div class="country-stat">
                            <label>Population</label>
                            <span>${country.basic.population}</span>
                        </div>
                        <div class="country-stat">
                            <label>Area</label>
                            <span>${country.basic.area}</span>
                        </div>
                        <div class="country-stat">
                            <label>Currency</label>
                            <span>${country.economy.currency}</span>
                        </div>
                    </div>
                </div>
                <div class="country-card-footer">
                    <button class="country-action-btn" onclick="event.stopPropagation(); app.openCountryProfile('${country.id}')">
                        📖 Details
                    </button>
                    <button class="country-action-btn" onclick="event.stopPropagation(); app.openInAtlas('${country.id}')">
                        🗺️ Atlas
                    </button>
                </div>
            </div>
        `;
    }

    updateCountryCount() {
        const countEl = document.getElementById('countryCount');
        if (countEl) {
            countEl.textContent = `${this.filteredCountries.length} Countries`;
        }
    }

    updateGridView() {
        const grid = document.getElementById('countriesGrid');
        if (grid) {
            grid.classList.toggle('list-view', this.currentView === 'list');
        }
    }

    openCountryProfile(countryId) {
        window.location.href = `encyclopedia-profile.html?id=${countryId}`;
    }

    openInAtlas(countryId) {
        window.location.href = `atlas.html?country=${countryId}`;
    }

    // ============================================
    // FEATURED COUNTRIES
    // ============================================

    renderFeaturedCountries() {
        const container = document.getElementById('featuredCountries');
        if (!container) return;

        // Get featured countries (top 6 by importance/size)
        const featuredIds = ['IND', 'CHN', 'USA', 'RUS', 'BRA', 'AUS', 'DEU', 'JPN'];
        const featured = this.allCountries.filter(c => featuredIds.includes(c.id)).slice(0, 6);

        if (featured.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-muted);">Loading countries...</p>';
            return;
        }

        container.innerHTML = featured.map(country => this.createCountryCard(country)).join('');
    }

    // ============================================
    // CONTINENTS
    // ============================================

    renderContinents() {
        const container = document.getElementById('continentsGrid');
        if (!container) return;

        const continents = [
            {
                name: 'Asia',
                countries: 49,
                area: '44.58 million km²',
                population: '4.7 billion',
                image: 'https://images.unsplash.com/photo-1535139262971-c51845f5aa21?w=800&q=80',
                description: 'Largest and most populous continent'
            },
            {
                name: 'Africa',
                countries: 54,
                area: '30.37 million km²',
                population: '1.4 billion',
                image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
                description: 'Second largest continent, rich in diversity'
            },
            {
                name: 'Europe',
                countries: 44,
                area: '10.18 million km²',
                population: '746 million',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
                description: 'Cradle of Western civilization'
            },
            {
                name: 'North America',
                countries: 23,
                area: '24.71 million km²',
                population: '579 million',
                image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
                description: 'Third largest continent'
            },
            {
                name: 'South America',
                countries: 12,
                area: '17.84 million km²',
                population: '430 million',
                image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
                description: 'Home to the Amazon rainforest'
            },
            {
                name: 'Oceania',
                countries: 14,
                area: '8.53 million km²',
                population: '45 million',
                image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
                description: 'Pacific islands and Australia'
            },
            {
                name: 'Antarctica',
                countries: 0,
                area: '14.2 million km²',
                population: '~4,000 (researchers)',
                image: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=800&q=80',
                description: 'Coldest, driest, and windiest continent'
            }
        ];

        container.innerHTML = continents.map(continent => `
            <div class="continent-card" onclick="app.filterByContinent('${continent.name}')">
                <img src="${continent.image}" alt="${continent.name}" loading="lazy">
                <div class="continent-overlay">
                    <h3>${continent.name}</h3>
                    <p>${continent.countries} countries • ${continent.population}</p>
                </div>
            </div>
        `).join('');
    }

    filterByContinent(continent) {
        this.currentContinent = continent;
        document.getElementById('continentFilter').value = continent;
        this.switchTab('countries');
        this.filterAndRenderCountries();
    }

    // ============================================
    // PHYSICAL FEATURES
    // ============================================

    renderPhysicalFeatures() {
        const container = document.getElementById('physicalContent');
        if (!container) return;

        if (typeof PhysicalFeatures === 'undefined') {
            container.innerHTML = this.createComingSoonCard('Physical Features', 'Detailed information coming soon');
            return;
        }

        const features = PhysicalFeatures[this.currentPhysicalFeature];
        if (!features || features.length === 0) {
            container.innerHTML = this.createComingSoonCard(
                this.currentPhysicalFeature.charAt(0).toUpperCase() + this.currentPhysicalFeature.slice(1),
                'Data coming soon'
            );
            return;
        }

        const icons = {
            mountains: '🏔️',
            rivers: '🌊',
            deserts: '🏜️',
            oceans: '🌊',
            lakes: '💧',
            forests: '🌲'
        };

        container.innerHTML = `
            <div class="features-grid">
                ${features.map(feature => `
                    <div class="feature-card">
                        <div class="feature-icon">${icons[this.currentPhysicalFeature]}</div>
                        <div class="feature-content">
                            <h3>${feature.name}</h3>
                            <div class="feature-stats">
                                ${feature.height ? `<div class="feature-stat"><label>Height</label><span>${feature.height}</span></div>` : ''}
                                ${feature.length ? `<div class="feature-stat"><label>Length</label><span>${feature.length}</span></div>` : ''}
                                ${feature.area ? `<div class="feature-stat"><label>Area</label><span>${feature.area}</span></div>` : ''}
                                ${feature.depth ? `<div class="feature-stat"><label>Depth</label><span>${feature.depth}</span></div>` : ''}
                                <div class="feature-stat"><label>Location</label><span>${feature.location || feature.countries?.join(', ') || 'Earth'}</span></div>
                            </div>
                            ${feature.description ? `<p class="feature-description">${feature.description}</p>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add styles for features grid
        if (!document.getElementById('features-grid-styles')) {
            const style = document.createElement('style');
            style.id = 'features-grid-styles';
            style.textContent = `
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: var(--spacing-lg);
                }
                .feature-card {
                    display: flex;
                    gap: var(--spacing-lg);
                    padding: var(--spacing-xl);
                    background: var(--color-bg-card);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    transition: var(--transition-normal);
                }
                .feature-card:hover {
                    border-color: var(--color-accent-blue);
                    transform: translateY(-3px);
                }
                .feature-card .feature-icon {
                    font-size: 2.5rem;
                    width: 70px;
                    height: 70px;
                    background: var(--color-bg-tertiary);
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .feature-content h3 {
                    font-size: 1.2rem;
                    margin-bottom: var(--spacing-md);
                }
                .feature-stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--spacing-sm);
                    margin-bottom: var(--spacing-md);
                }
                .feature-stat {
                    padding: 6px 12px;
                    background: var(--color-bg-tertiary);
                    border-radius: var(--radius-sm);
                    font-size: 0.85rem;
                }
                .feature-stat label {
                    color: var(--color-text-muted);
                    margin-right: 6px;
                }
                .feature-stat span {
                    font-weight: 600;
                }
                .feature-description {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                    line-height: 1.6;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // CLIMATE ZONES
    // ============================================

    renderClimateZones() {
        const container = document.getElementById('climateContent');
        if (!container) return;

        if (typeof ClimateData === 'undefined') {
            container.innerHTML = this.createComingSoonCard('Climate Zones', 'Detailed climate information coming soon');
            return;
        }

        container.innerHTML = `
            <div class="climate-zones-grid">
                ${ClimateData.map(zone => `
                    <div class="climate-card" style="border-left: 4px solid ${zone.color};">
                        <h3>${zone.name}</h3>
                        <p>${zone.description}</p>
                        <div class="climate-stats">
                            <div class="climate-stat">
                                <label>Temperature</label>
                                <span>${zone.temperature}</span>
                            </div>
                            <div class="climate-stat">
                                <label>Precipitation</label>
                                <span>${zone.precipitation}</span>
                            </div>
                        </div>
                        <div class="climate-regions">
                            <label>Regions:</label>
                            <span>${zone.regions.join(', ')}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add styles
        if (!document.getElementById('climate-styles')) {
            const style = document.createElement('style');
            style.id = 'climate-styles';
            style.textContent = `
                .climate-zones-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: var(--spacing-lg);
                }
                .climate-card {
                    padding: var(--spacing-xl);
                    background: var(--color-bg-card);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                }
                .climate-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: var(--spacing-sm);
                }
                .climate-card p {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: var(--spacing-md);
                }
                .climate-stats {
                    display: flex;
                    gap: var(--spacing-md);
                    margin-bottom: var(--spacing-md);
                }
                .climate-stat {
                    flex: 1;
                    padding: var(--spacing-sm);
                    background: var(--color-bg-tertiary);
                    border-radius: var(--radius-sm);
                }
                .climate-stat label {
                    display: block;
                    font-size: 0.75rem;
                    color: var(--color-text-muted);
                }
                .climate-stat span {
                    font-weight: 600;
                }
                .climate-regions label {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                }
                .climate-regions span {
                    font-size: 0.85rem;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // DISPUTES
    // ============================================

    renderDisputes() {
        const container = document.getElementById('disputesGrid');
        if (!container) return;

        if (typeof DisputesData === 'undefined') {
            container.innerHTML = this.createComingSoonCard('Territorial Disputes', 'Dispute information coming soon');
            return;
        }

        container.innerHTML = DisputesData.map(dispute => `
            <div class="dispute-card">
                <div class="dispute-header">
                    <h3>${dispute.name}</h3>
                    <span class="dispute-type">${dispute.type}</span>
                </div>
                <p>${dispute.summary}</p>
                <div class="dispute-countries">
                    ${dispute.countries.map(country => {
                        const countryData = this.allCountries.find(c => c.name === country);
                        return `
                            <span class="dispute-country">
                                ${countryData ? `<img src="${countryData.flag}" alt="${country}">` : ''}
                                ${country}
                            </span>
                        `;
                    }).join('')}
                </div>
                ${dispute.timeline ? `
                    <div class="dispute-timeline">
                        <h4>Key Events:</h4>
                        <ul>
                            ${dispute.timeline.slice(0, 3).map(event => `
                                <li><strong>${event.year}:</strong> ${event.event}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `).join('');

        // Add timeline styles
        if (!document.getElementById('dispute-timeline-styles')) {
            const style = document.createElement('style');
            style.id = 'dispute-timeline-styles';
            style.textContent = `
                .dispute-timeline {
                    margin-top: var(--spacing-md);
                    padding-top: var(--spacing-md);
                    border-top: 1px solid var(--color-border-light);
                }
                .dispute-timeline h4 {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    margin-bottom: var(--spacing-sm);
                }
                .dispute-timeline ul {
                    list-style: none;
                    padding: 0;
                }
                .dispute-timeline li {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    padding: 4px 0;
                }
                .dispute-timeline li strong {
                    color: var(--color-accent-yellow);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // EARTH SYSTEMS
    // ============================================

    renderEarthSystems() {
        const container = document.getElementById('earthSystemsGrid');
        if (!container) return;

        if (typeof EarthSystemsData === 'undefined') {
            container.innerHTML = this.createComingSoonCard('Earth Systems', 'Interactive systems coming soon');
            return;
        }

        container.innerHTML = `
            <div class="earth-systems-grid">
                ${EarthSystemsData.map(system => `
                    <a href="earth-simulator.html?mode=${system.id.toLowerCase()}" class="system-card">
                        <div class="system-visual">${system.icon}</div>
                        <h3>${system.name}</h3>
                        <p>${system.description || system.key_points[0]}</p>
                        <ul class="system-points">
                            ${system.key_points.slice(0, 3).map(point => `<li>${point}</li>`).join('')}
                        </ul>
                        ${system.interactive ? '<span class="system-badge interactive">Interactive 3D</span>' : ''}
                    </a>
                `).join('')}
            </div>
        `;

        // Add styles
        if (!document.getElementById('earth-systems-full-styles')) {
            const style = document.createElement('style');
            style.id = 'earth-systems-full-styles';
            style.textContent = `
                .earth-systems-full .earth-systems-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: var(--spacing-lg);
                }
                .system-points {
                    list-style: none;
                    padding: 0;
                    margin: var(--spacing-md) 0;
                }
                .system-points li {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    padding: 4px 0;
                    padding-left: 20px;
                    position: relative;
                }
                .system-points li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: var(--color-accent-cyan);
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // UTILITIES
    // ============================================

    createComingSoonCard(title, description) {
        return `
            <div class="coming-soon-card">
                <span class="icon">🚧</span>
                <h3>${title}</h3>
                <p>${description}</p>
                <span class="badge">COMING SOON</span>
            </div>
        `;
    }

    toggleTheme() {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.querySelector('.btn-icon').textContent = newTheme === 'light' ? '☀️' : '🌙';
        }
    }

    handleURLParams() {
        const params = new URLSearchParams(window.location.search);
        const tab = params.get('tab');
        const country = params.get('country');

        if (tab) {
            this.switchTab(tab);
        }

        if (country) {
            this.openCountryProfile(country);
        }
    }
}

// Global functions
function switchTab(tabId) {
    app.switchTab(tabId);
}

function closeComingSoonModal() {
    document.getElementById('comingSoonModal')?.classList.remove('active');
}

function showComingSoon() {
    document.getElementById('comingSoonModal')?.classList.add('active');
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new EncyclopediaApp();
});
