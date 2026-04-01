/**
 * Unity Atlas - Main Application JavaScript
 * Handles all interactions on the index page
 */

(function() {
    'use strict';
    
    // ==================== CONFIGURATION ====================
    const CONFIG = {
        countriesPerPage: 50,
        animationDuration: 300,
        searchDebounce: 300,
        loaderMinTime: 2000
    };

    // ==================== STATE ====================
    const state = {
        currentPage: 1,
        currentFilter: {
            region: 'all',
            grouping: 'all',
            sort: 'name-asc',
            search: ''
        },
        currentView: 'grid',
        theme: localStorage.getItem('theme') || 'light',
        isLoading: true,
        displayedCountries: []
    };

    // ==================== DOM ELEMENTS ====================
    const elements = {};

    function cacheElements() {
        elements.loader = document.getElementById('loader');
        elements.app = document.getElementById('app');
        elements.searchToggle = document.getElementById('searchToggle');
        elements.searchOverlay = document.getElementById('searchOverlay');
        elements.searchClose = document.getElementById('searchClose');
        elements.globalSearch = document.getElementById('globalSearch');
        elements.searchResults = document.getElementById('searchResults');
        elements.themeToggle = document.getElementById('themeToggle');
        elements.header = document.querySelector('.main-header');
        elements.countryGrid = document.getElementById('countryGrid');
        elements.countryList = document.getElementById('countryList');
        elements.regionFilter = document.getElementById('regionFilter');
        elements.groupingFilter = document.getElementById('groupingFilter');
        elements.sortFilter = document.getElementById('sortFilter');
        elements.countrySearchInline = document.getElementById('countrySearchInline');
        elements.viewButtons = document.querySelectorAll('.view-btn');
        elements.loadMore = document.getElementById('loadMore');
        elements.loadStatus = document.getElementById('loadStatus');
        elements.backToTop = document.getElementById('backToTop');
        elements.startExploring = document.getElementById('startExploring');
        elements.statNumbers = document.querySelectorAll('.stat-number');
        elements.quickCards = document.querySelectorAll('.quick-card');
        elements.filterChips = document.querySelectorAll('.filter-chip');
        elements.suggestionChips = document.querySelectorAll('.suggestion-chip');
        elements.navLinks = document.querySelectorAll('.nav-link');
    }

    // ==================== INITIALIZATION ====================
    function init() {
        cacheElements();
        initTheme();
        initLoader();
        initEventListeners();
        initCountryGrid();
        initAnimations();
        initIntersectionObserver();
    }

    function initLoader() {
        const startTime = Date.now();
        
        window.addEventListener('load', () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, CONFIG.loaderMinTime - elapsed);
            
            setTimeout(() => {
                elements.loader.classList.add('hidden');
                elements.app.classList.add('loaded');
                state.isLoading = false;
                animateStats();
            }, remaining);
        });
    }

    function initTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        updateThemeIcon();
    }

    function initEventListeners() {
        // Search
        elements.searchToggle?.addEventListener('click', openSearch);
        elements.searchClose?.addEventListener('click', closeSearch);
        elements.searchOverlay?.addEventListener('click', (e) => {
            if (e.target === elements.searchOverlay) closeSearch();
        });
        elements.globalSearch?.addEventListener('input', debounce(handleGlobalSearch, CONFIG.searchDebounce));
        
        // Theme
        elements.themeToggle?.addEventListener('click', toggleTheme);
        
        // Scroll
        window.addEventListener('scroll', handleScroll);
        elements.backToTop?.addEventListener('click', scrollToTop);
        
        // Filters
        elements.regionFilter?.addEventListener('change', handleFilterChange);
        elements.groupingFilter?.addEventListener('change', handleFilterChange);
        elements.sortFilter?.addEventListener('change', handleFilterChange);
        elements.countrySearchInline?.addEventListener('input', debounce(handleFilterChange, CONFIG.searchDebounce));
        
        // View Toggle
        elements.viewButtons?.forEach(btn => {
            btn.addEventListener('click', () => handleViewChange(btn.dataset.view));
        });
        
        // Load More
        elements.loadMore?.addEventListener('click', loadMoreCountries);
        
        // Start Exploring
        elements.startExploring?.addEventListener('click', () => {
            document.getElementById('countrySelector')?.scrollIntoView({ behavior: 'smooth' });
        });
        
        // Quick Cards
        elements.quickCards?.forEach(card => {
            card.addEventListener('click', () => handleQuickCardClick(card.dataset.region));
        });
        
        // Filter Chips
        elements.filterChips?.forEach(chip => {
            chip.addEventListener('click', () => handleFilterChipClick(chip));
        });
        
        // Suggestion Chips
        elements.suggestionChips?.forEach(chip => {
            chip.addEventListener('click', () => {
                elements.globalSearch.value = chip.textContent;
                handleGlobalSearch();
            });
        });
        
        // Nav Links
        elements.navLinks?.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavClick(link);
            });
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboard);
    }

    // ==================== SEARCH FUNCTIONALITY ====================
    function openSearch() {
        elements.searchOverlay.classList.add('active');
        elements.globalSearch.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
        elements.searchOverlay.classList.remove('active');
        elements.globalSearch.value = '';
        document.body.style.overflow = '';
        resetSearchResults();
    }

    function handleGlobalSearch() {
        const query = elements.globalSearch.value.trim();
        
        if (query.length < 2) {
            resetSearchResults();
            return;
        }
        
        const results = searchCountries(query);
        displaySearchResults(results, query);
    }

    function displaySearchResults(results, query) {
        if (results.length === 0) {
            elements.searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>No results found for "${query}"</p>
                    <span>Try different keywords or check spelling</span>
                </div>
            `;
            return;
        }
        
        const html = results.slice(0, 10).map(country => `
            <a href="country.html?code=${country.code}" class="search-result-item">
                <span class="result-flag">${country.flag}</span>
                <div class="result-info">
                    <span class="result-name">${highlightMatch(country.name, query)}</span>
                    <span class="result-meta">${country.capital} • ${getRegionDisplayName(country.region)}</span>
                </div>
                <i class="fas fa-chevron-right"></i>
            </a>
        `).join('');
        
        elements.searchResults.innerHTML = html;
    }

    function highlightMatch(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function resetSearchResults() {
        elements.searchResults.innerHTML = `
            <div class="search-placeholder">
                <i class="fas fa-globe"></i>
                <p>Start typing to search across 197 countries</p>
            </div>
        `;
    }

    // ==================== COUNTRY GRID ====================
    function initCountryGrid() {
        renderCountries();
    }

    function renderCountries() {
        let countries = [...COUNTRIES_DATA];
        
        // Apply filters
        if (state.currentFilter.region !== 'all') {
            countries = countries.filter(c => c.region === state.currentFilter.region);
        }
        
        if (state.currentFilter.grouping !== 'all') {
            countries = countries.filter(c => c.groupings && c.groupings.includes(state.currentFilter.grouping));
        }
        
        if (state.currentFilter.search) {
            const query = state.currentFilter.search.toLowerCase();
            countries = countries.filter(c => 
                c.name.toLowerCase().includes(query) ||
                c.capital.toLowerCase().includes(query)
            );
        }
        
        // Sort
        countries = sortCountries(countries, state.currentFilter.sort);
        
        // Pagination
        const endIndex = state.currentPage * CONFIG.countriesPerPage;
        state.displayedCountries = countries.slice(0, endIndex);
        
        // Render based on view
        if (state.currentView === 'grid') {
            renderGridView(state.displayedCountries);
        } else if (state.currentView === 'list') {
            renderListView(state.displayedCountries);
        }
        
        // Update status
        updateLoadStatus(state.displayedCountries.length, countries.length);
        
        // Show/hide load more
        if (endIndex >= countries.length) {
            elements.loadMore.style.display = 'none';
        } else {
            elements.loadMore.style.display = 'flex';
        }
    }

    function renderGridView(countries) {
        elements.countryGrid.classList.remove('hidden');
        elements.countryList.classList.add('hidden');
        
        const html = countries.map((country, index) => `
            <a href="country.html?code=${country.code}" class="country-card stagger-enter" style="animation-delay: ${Math.min(index * 30, 500)}ms">
                <div class="country-flag">${country.flag}</div>
                <h4 class="country-name">${country.name}</h4>
                <span class="country-region">${getRegionDisplayName(country.region)}</span>
                <div class="country-meta">
                    <span><i class="fas fa-city"></i> ${country.capital}</span>
                    ${country.data_available ? '<span class="data-badge"><i class="fas fa-check-circle"></i></span>' : ''}
                </div>
            </a>
        `).join('');
        
        elements.countryGrid.innerHTML = html;
    }

    function renderListView(countries) {
        elements.countryList.classList.remove('hidden');
        elements.countryGrid.classList.add('hidden');
        
        const html = countries.map((country, index) => `
            <a href="country.html?code=${country.code}" class="country-list-item stagger-enter" style="animation-delay: ${Math.min(index * 20, 400)}ms">
                <span class="country-flag">${country.flag}</span>
                <div class="country-info">
                    <h4 class="country-name">${country.name}</h4>
                    <span class="country-region">${country.capital} • ${getRegionDisplayName(country.region)}</span>
                </div>
                <div class="country-stats">
                    <span class="stat"><i class="fas fa-users"></i> ${formatNumber(country.population)}</span>
                    <span class="stat"><i class="fas fa-dollar-sign"></i> ${formatNumber(country.gdp_usd)}</span>
                </div>
                <i class="fas fa-chevron-right"></i>
            </a>
        `).join('');
        
        elements.countryList.innerHTML = html;
    }

    function updateLoadStatus(shown, total) {
        elements.loadStatus.textContent = `Showing ${shown} of ${total} countries`;
    }

    function loadMoreCountries() {
        state.currentPage++;
        renderCountries();
    }

    // ==================== FILTER HANDLERS ====================
    function handleFilterChange() {
        state.currentFilter.region = elements.regionFilter.value;
        state.currentFilter.grouping = elements.groupingFilter.value;
        state.currentFilter.sort = elements.sortFilter.value;
        state.currentFilter.search = elements.countrySearchInline.value;
        state.currentPage = 1;
        renderCountries();
    }

    function handleViewChange(view) {
        state.currentView = view;
        
        elements.viewButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        
        renderCountries();
    }

    function handleQuickCardClick(region) {
        if (region === 'g20' || region === 'brics' || region === 'unsc' || region === 'quad' || region === 'nato') {
            elements.groupingFilter.value = region;
            elements.regionFilter.value = 'all';
        } else {
            elements.regionFilter.value = region;
            elements.groupingFilter.value = 'all';
        }
        
        handleFilterChange();
        document.getElementById('countrySelector')?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleFilterChipClick(chip) {
        elements.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    }

    // ==================== THEME ====================
    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = elements.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    // ==================== SCROLL ====================
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // Header
        elements.header?.classList.toggle('scrolled', scrollY > 50);
        
        // Back to top
        elements.backToTop?.classList.toggle('visible', scrollY > 500);
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==================== ANIMATIONS ====================
    function initAnimations() {
        // Add animation classes as elements come into view
    }

    function animateStats() {
        elements.statNumbers?.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            animateNumber(stat, 0, target, 2000);
        });
    }

    function animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            
            const current = Math.floor(start + range * easeProgress);
            element.textContent = formatNumber(current);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = formatNumber(end);
            }
        }
        
        requestAnimationFrame(update);
    }

    function initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section-header, .featured-card, .exam-card').forEach(el => {
            observer.observe(el);
        });
    }

    // ==================== NAVIGATION ====================
    function handleNavClick(link) {
        elements.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const section = link.dataset.section;
        // Handle navigation based on section
        console.log('Navigating to:', section);
    }

    // ==================== KEYBOARD ====================
    function handleKeyboard(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        
        // Escape to close search
        if (e.key === 'Escape' && elements.searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    }

    // ==================== UTILITIES ====================
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

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // ==================== START ====================
    document.addEventListener('DOMContentLoaded', init);

})();
