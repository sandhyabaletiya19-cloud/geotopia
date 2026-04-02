/* =====================================================
   UNITY ATLAS - Main Application JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    initNavigation();
    initSearch();
    initTabs();
    initFilters();
    initCountryGrid();
    initOrganizationsGrid();
    initFeaturedRelations();
    initAnimations();
    initCounters();
    initConnectivityVisual();
    initThemeToggle();
}

// =====================================================
// NAVIGATION
// =====================================================
function initNavigation() {
    const nav = document.querySelector('.ir-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =====================================================
// SEARCH
// =====================================================
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchToggle || !searchOverlay) return;

    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });

    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            const results = dataManager.search(query);
            renderSearchResults(results);
        }, 200);
    });

    function renderSearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-empty">
                    <p>No results found</p>
                </div>
            `;
            return;
        }

        searchResults.innerHTML = results.map(result => {
            if (result.type === 'country') {
                return `
                    <a href="country.html?code=${result.code}" class="search-result-item">
                        <span class="flag">${result.data.flag}</span>
                        <span class="name">${result.data.name}</span>
                        <span class="meta">${result.data.region}</span>
                    </a>
                `;
            } else {
                return `
                    <a href="organizations.html?code=${result.code}" class="search-result-item">
                        <span class="flag">${result.data.logo}</span>
                        <span class="name">${result.data.name}</span>
                        <span class="meta">${result.data.type}</span>
                    </a>
                `;
            }
        }).join('');
    }
}

// =====================================================
// TABS
// =====================================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.quick-nav-btn');
    const sections = {
        countries: document.getElementById('countriesSection'),
        organizations: document.getElementById('organizationsSection'),
        regions: document.getElementById('regionsSection'),
        statistics: document.getElementById('statisticsSection')
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;

            // Update active button
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show/hide sections
            Object.entries(sections).forEach(([key, section]) => {
                if (section) {
                    if (key === tab) {
                        section.classList.remove('hidden');
                        section.style.display = 'block';
                    } else {
                        section.classList.add('hidden');
                        section.style.display = 'none';
                    }
                }
            });

            // Initialize section if needed
            if (tab === 'organizations') {
                initOrganizationsGrid();
            } else if (tab === 'regions') {
                initRegionsSection();
            } else if (tab === 'statistics') {
                initStatisticsSection();
            }
        });
    });
}

// =====================================================
// FILTERS
// =====================================================
let currentFilters = {
    search: '',
    region: 'all',
    sort: 'name'
};

let displayedCountries = 30;
const COUNTRIES_PER_PAGE = 30;

function initFilters() {
    const searchInput = document.getElementById('countrySearch');
    const regionFilter = document.getElementById('regionFilter');
    const sortFilter = document.getElementById('sortFilter');
    const regionPills = document.querySelectorAll('.region-pill');
    const viewButtons = document.querySelectorAll('.view-btn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // Search filter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            displayedCountries = COUNTRIES_PER_PAGE;
            renderCountries();
        });
    }

    // Region filter dropdown
    if (regionFilter) {
        regionFilter.addEventListener('change', (e) => {
            currentFilters.region = e.target.value;
            displayedCountries = COUNTRIES_PER_PAGE;
            updateRegionPills(e.target.value);
            renderCountries();
        });
    }

    // Sort filter
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            currentFilters.sort = e.target.value;
            renderCountries();
        });
    }

    // Region pills
    regionPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const region = pill.dataset.region;
            currentFilters.region = region;
            displayedCountries = COUNTRIES_PER_PAGE;
            
            regionPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            if (regionFilter) regionFilter.value = region;
            
            renderCountries();
        });
    });

    // View toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const grid = document.getElementById('countriesGrid');
            if (grid) {
                grid.className = view === 'list' ? 'countries-list' : 'countries-grid';
            }
        });
    });

    // Load more
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            displayedCountries += COUNTRIES_PER_PAGE;
            renderCountries();
        });
    }
}

function updateRegionPills(region) {
    document.querySelectorAll('.region-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.region === region);
    });
}

// =====================================================
// COUNTRY GRID
// =====================================================
function initCountryGrid() {
    renderCountries();
}

function renderCountries() {
    const grid = document.getElementById('countriesGrid');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const showingCount = document.getElementById('showingCount');

    if (!grid) return;

    // Get filtered countries
    let countries = dataManager.getAllCountries();

    // Apply region filter
    if (currentFilters.region !== 'all') {
        countries = countries.filter(c => c.region === currentFilters.region);
    }

    // Apply search filter
    if (currentFilters.search) {
        countries = countries.filter(c => 
            c.name.toLowerCase().includes(currentFilters.search) ||
            c.officialName.toLowerCase().includes(currentFilters.search) ||
            c.capital.toLowerCase().includes(currentFilters.search)
        );
    }

    // Apply sort
    countries = dataManager.sortCountries(countries, currentFilters.sort);

    // Slice for pagination
    const displayCountries = countries.slice(0, displayedCountries);

    // Render grid
    grid.innerHTML = displayCountries.map(country => createCountryCard(country)).join('');

    // Add click handlers
    grid.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', () => {
            const code = card.dataset.code;
            window.location.href = `country.html?code=${code}`;
        });
    });

    // Update load more
    if (loadMoreContainer) {
        if (displayedCountries >= countries.length) {
            loadMoreContainer.style.display = 'none';
        } else {
            loadMoreContainer.style.display = 'block';
        }
    }

    if (showingCount) {
        showingCount.textContent = `Showing ${Math.min(displayedCountries, countries.length)} of ${countries.length} countries`;
    }

    // Animate cards
    animateCards();
}

function createCountryCard(country) {
    const relationsPreview = country.relations?.slice(0, 4) || [];
    const moreCount = Math.max(0, (country.relations?.length || 0) - 4);

    return `
        <article class="country-card" data-code="${country.code}">
            <div class="country-card-header">
                <div class="country-card-bg" style="background: linear-gradient(135deg, ${country.colors?.[0] || '#667'}, ${country.colors?.[1] || '#999'})"></div>
                <span class="country-flag">${country.flag}</span>
            </div>
            <div class="country-card-body">
                <h3 class="country-name">${country.name}</h3>
                <p class="country-official-name">${country.officialName}</p>
                <div class="country-meta">
                    <span class="country-meta-item">
                        <span>📍</span> ${country.capital}
                    </span>
                    <span class="country-meta-item">
                        <span>👥</span> ${dataManager.formatNumber(country.population)}
                    </span>
                    <span class="country-meta-item">
                        <span>💰</span> $${country.gdp}B
                    </span>
                </div>
                <div class="country-relations-preview">
                    <span class="relations-label">Key Relations</span>
                    <div class="relations-flags">
                        ${relationsPreview.map(code => {
                            const rel = dataManager.getCountry(code);
                            return rel ? `<span class="relations-flag">${rel.flag}</span>` : '';
                        }).join('')}
                        ${moreCount > 0 ? `<span class="relations-more">+${moreCount}</span>` : ''}
                    </div>
                </div>
            </div>
        </article>
    `;
}

// =====================================================
// ORGANIZATIONS GRID
// =====================================================
let orgsInitialized = false;

function initOrganizationsGrid() {
    if (orgsInitialized) return;
    orgsInitialized = true;

    const grid = document.getElementById('organizationsGrid');
    const categoryBtns = document.querySelectorAll('.org-cat-btn');

    if (!grid) return;

    // Render all organizations
    renderOrganizations('all');

    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderOrganizations(cat);
        });
    });
}

function renderOrganizations(category) {
    const grid = document.getElementById('organizationsGrid');
    if (!grid) return;

    const orgs = dataManager.getOrganizationsByType(category);

    grid.innerHTML = orgs.map(org => {
        const members = dataManager.getOrganizationMembers(org.code).slice(0, 8);
        
        return `
            <article class="org-card" data-code="${org.code}">
                <div class="org-card-header">
                    <div class="org-logo" style="background: ${org.color}20">
                        ${org.logo}
                    </div>
                    <div class="org-info">
                        <h3>${org.name}</h3>
                        <span class="org-abbr">${org.abbr}</span>
                    </div>
                </div>
                <p class="org-description">${org.description}</p>
                <div class="org-stats">
                    <div class="org-stat">
                        <span class="org-stat-value">${org.members}</span>
                        <span class="org-stat-label">Members</span>
                    </div>
                    <div class="org-stat">
                        <span class="org-stat-value">${org.founded}</span>
                        <span class="org-stat-label">Founded</span>
                    </div>
                </div>
                <div class="org-members-preview">
                    ${members.map(m => `<span class="org-member-flag">${m.flag}</span>`).join('')}
                    ${org.members > 8 ? `<span class="org-member-flag">+${org.members - 8}</span>` : ''}
                </div>
            </article>
        `;
    }).join('');

    // Add click handlers
    grid.querySelectorAll('.org-card').forEach(card => {
        card.addEventListener('click', () => {
            const code = card.dataset.code;
            window.location.href = `organizations.html?code=${code}`;
        });
    });
}

// =====================================================
// REGIONS SECTION
// =====================================================
function initRegionsSection() {
    const grid = document.getElementById('regionsGrid');
    if (!grid) return;

    const regions = dataManager.getAllRegions();

    grid.innerHTML = regions.map(region => `
        <div class="region-card" style="--region-color: ${region.color}">
            <div class="region-icon">${region.icon}</div>
            <h3>${region.name}</h3>
            <p>${region.description}</p>
            <div class="region-stats">
                <div class="region-stat">
                    <span class="value">${region.countries}</span>
                    <span class="label">Countries</span>
                </div>
                <div class="region-stat">
                    <span class="value">${dataManager.formatNumber(region.population)}</span>
                    <span class="label">Population</span>
                </div>
            </div>
            <button class="region-explore-btn" data-region="${region.code}">
                Explore Region →
            </button>
        </div>
    `).join('');

    // Add click handlers
    grid.querySelectorAll('.region-explore-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const region = btn.dataset.region;
            // Switch to countries tab and filter by region
            document.querySelector('.quick-nav-btn[data-tab="countries"]').click();
            currentFilters.region = region;
            updateRegionPills(region);
            displayedCountries = COUNTRIES_PER_PAGE;
            renderCountries();
        });
    });
}

// =====================================================
// STATISTICS SECTION
// =====================================================
function initStatisticsSection() {
    const stats = dataManager.getGlobalStats();
    
    // Render basic stats (you can expand with charts later)
    const container = document.getElementById('statisticsSection');
    if (!container) return;

    container.innerHTML = `
        <div class="stats-dashboard">
            <div class="stat-card large">
                <h3>🌍 Global Overview</h3>
                <div class="global-stats-grid">
                    <div class="global-stat">
                        <span class="value">${stats.totalCountries}</span>
                        <span class="label">Countries</span>
                    </div>
                    <div class="global-stat">
                        <span class="value">${dataManager.formatNumber(stats.totalPopulation)}</span>
                        <span class="label">World Population</span>
                    </div>
                    <div class="global-stat">
                        <span class="value">$${dataManager.formatNumber(stats.totalGDP * 1e9)}</span>
                        <span class="label">Global GDP</span>
                    </div>
                    <div class="global-stat">
                        <span class="value">${stats.totalOrganizations}</span>
                        <span class="label">Organizations</span>
                    </div>
                </div>
            </div>
            <div class="stat-card">
                <h3>📊 Top 10 Economies</h3>
                <div class="chart-placeholder" id="economiesChart">
                    ${renderTopEconomies()}
                </div>
            </div>
            <div class="stat-card">
                <h3>👥 Population Leaders</h3>
                <div class="chart-placeholder" id="populationChart">
                    ${renderPopulationChart()}
                </div>
            </div>
            <div class="stat-card">
                <h3>🌐 Most Connected</h3>
                <div class="chart-placeholder" id="connectionsChart">
                    ${renderConnectionsChart()}
                </div>
            </div>
        </div>
    `;
}

function renderTopEconomies() {
    const countries = dataManager.sortCountries(dataManager.getAllCountries(), 'gdp').slice(0, 10);
    const maxGdp = countries[0].gdp;

    return `
        <div class="bar-chart">
            ${countries.map((c, i) => `
                <div class="bar-item">
                    <span class="bar-label">${c.flag} ${c.name}</span>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${(c.gdp / maxGdp * 100)}%; animation-delay: ${i * 0.1}s"></div>
                    </div>
                    <span class="bar-value">$${c.gdp}B</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPopulationChart() {
    const countries = dataManager.sortCountries(dataManager.getAllCountries(), 'population').slice(0, 10);
    const maxPop = countries[0].population;

    return `
        <div class="bar-chart">
            ${countries.map((c, i) => `
                <div class="bar-item">
                    <span class="bar-label">${c.flag} ${c.name}</span>
                    <div class="bar-track">
                        <div class="bar-fill secondary" style="width: ${(c.population / maxPop * 100)}%; animation-delay: ${i * 0.1}s"></div>
                    </div>
                    <span class="bar-value">${dataManager.formatNumber(c.population)}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderConnectionsChart() {
    const countries = dataManager.sortCountries(dataManager.getAllCountries(), 'relations').slice(0, 10);
    const maxRel = countries[0].relations?.length || 1;

    return `
        <div class="bar-chart">
            ${countries.map((c, i) => `
                <div class="bar-item">
                    <span class="bar-label">${c.flag} ${c.name}</span>
                    <div class="bar-track">
                        <div class="bar-fill accent" style="width: ${((c.relations?.length || 0) / maxRel * 100)}%; animation-delay: ${i * 0.1}s"></div>
                    </div>
                    <span class="bar-value">${c.relations?.length || 0} relations</span>
                </div>
            `).join('')}
        </div>
    `;
}

// =====================================================
// FEATURED RELATIONS
// =====================================================
function initFeaturedRelations() {
    const grid = document.getElementById('featuredRelations');
    if (!grid) return;

    const featured = dataManager.getFeaturedRelations();

    grid.innerHTML = featured.map(rel => `
        <article class="featured-card" data-from="${rel.from.code}" data-to="${rel.to.code}">
            <div class="featured-flags">
                <span class="featured-flag">${rel.from.flag}</span>
                <div class="featured-connector">
                    <div class="connector-line"></div>
                    <span class="connector-label">${rel.relation.type}</span>
                </div>
                <span class="featured-flag">${rel.to.flag}</span>
            </div>
            <div class="featured-content">
                <div class="featured-countries">
                    <span class="featured-country-name">${rel.from.name}</span>
                    <span class="featured-amp">&</span>
                    <span class="featured-country-name">${rel.to.name}</span>
                </div>
                <p class="featured-relation-type">${rel.highlight}</p>
                <div class="featured-stats">
                    <div class="featured-stat">
                        <span class="featured-stat-value">${rel.relation.strength}/10</span>
                        <span class="featured-stat-label">Strength</span>
                    </div>
                    <div class="featured-stat">
                        <span class="featured-stat-value">$${rel.relation.tradeVolume}B</span>
                        <span class="featured-stat-label">Trade</span>
                    </div>
                    <div class="featured-stat">
                        <span class="featured-stat-value">${rel.relation.sharedOrganizations.length}</span>
                        <span class="featured-stat-label">Shared Orgs</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // Add click handlers
    grid.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => {
            const from = card.dataset.from;
            const to = card.dataset.to;
            window.location.href = `country.html?code=${from}&relation=${to}`;
        });
    });
}

// =====================================================
// CONNECTIVITY VISUAL
// =====================================================
function initConnectivityVisual() {
    const container = document.getElementById('connectivityVisual');
    if (!container) return;

    // Create nodes for major countries
    const majorCountries = ['USA', 'CHN', 'IND', 'DEU', 'GBR', 'FRA', 'JPN', 'BRA', 'RUS', 'AUS'];
    const positions = [
        { x: 50, y: 50 }, { x: 85, y: 30 }, { x: 75, y: 65 },
        { x: 30, y: 35 }, { x: 20, y: 55 }, { x: 35, y: 70 },
        { x: 90, y: 55 }, { x: 25, y: 85 }, { x: 60, y: 25 },
        { x: 80, y: 80 }
    ];

    container.innerHTML = majorCountries.map((code, i) => {
        const country = dataManager.getCountry(code);
        return `
            <div class="connectivity-node" 
                 style="left: ${positions[i].x}%; top: ${positions[i].y}%"
                 data-code="${code}"
                 title="${country.name}">
                ${country.flag}
            </div>
        `;
    }).join('');

    // Add click handlers
    container.querySelectorAll('.connectivity-node').forEach(node => {
        node.addEventListener('click', () => {
            const code = node.dataset.code;
            window.location.href = `country.html?code=${code}`;
        });
    });
}

// =====================================================
// ANIMATIONS
// =====================================================
function initAnimations() {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal, .country-card, .org-card, .featured-card').forEach(el => {
        observer.observe(el);
    });
}

function animateCards() {
    const cards = document.querySelectorAll('.country-card:not(.animated)');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
        card.classList.add('animated');
    });
}

// =====================================================
// COUNTERS
// =====================================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCounter(target, count);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// =====================================================
// THEME TOGGLE
// =====================================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
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

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
