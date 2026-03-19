/* =====================================================
   FORESTS EXPLORER - MAIN APPLICATION
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== STATE =====
    let allForests = [];
    let filteredForests = [];
    let currentFilters = {
        type: 'all',
        continent: 'all',
        search: ''
    };
    let currentSort = 'area-desc';
    
    // ===== DOM ELEMENTS =====
    const elements = {
        preloader: document.getElementById('preloader'),
        forestsGrid: document.getElementById('forestsGrid'),
        searchInput: document.getElementById('searchInput'),
        mobileSearchInput: document.getElementById('mobileSearchInput'),
        typeFilters: document.getElementById('typeFilters'),
        continentFilters: document.getElementById('continentFilters'),
        sortSelect: document.getElementById('sortSelect'),
        visibleCount: document.getElementById('visibleCount'),
        totalCount: document.getElementById('totalCount'),
        noResults: document.getElementById('noResults'),
        comingSoonCard: document.getElementById('comingSoonCard'),
        mainNav: document.getElementById('mainNav'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileMenu: document.getElementById('mobileMenu'),
        backToTop: document.getElementById('backToTop'),
        clearFiltersBtn: document.getElementById('clearFiltersBtn')
    };
    
    // ===== INITIALIZE =====
    function init() {
        loadForestData();
        bindEvents();
        hidePreloader();
    }
    
    // ===== LOAD DATA =====
    function loadForestData() {
        // Check if forestsData exists
        if (typeof forestsData !== 'undefined' && Array.isArray(forestsData)) {
            allForests = forestsData;
        } else {
            console.error('Forest data not found!');
            allForests = [];
        }
        
        filteredForests = [...allForests];
        sortForests();
        
        // Update counts
        if (elements.totalCount) {
            elements.totalCount.textContent = allForests.length;
        }
        
        renderForests();
    }
    
    // ===== BIND EVENTS =====
    function bindEvents() {
        // Search
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', debounce(function(e) {
                currentFilters.search = e.target.value.toLowerCase().trim();
                applyFilters();
            }, 300));
        }
        
        if (elements.mobileSearchInput) {
            elements.mobileSearchInput.addEventListener('input', debounce(function(e) {
                currentFilters.search = e.target.value.toLowerCase().trim();
                applyFilters();
            }, 300));
        }
        
        // Type filters
        if (elements.typeFilters) {
            elements.typeFilters.addEventListener('click', function(e) {
                if (e.target.classList.contains('filter-btn')) {
                    setActiveFilter(elements.typeFilters, e.target);
                    currentFilters.type = e.target.dataset.filter;
                    applyFilters();
                }
            });
        }
        
        // Continent filters
        if (elements.continentFilters) {
            elements.continentFilters.addEventListener('click', function(e) {
                if (e.target.classList.contains('filter-btn')) {
                    setActiveFilter(elements.continentFilters, e.target);
                    currentFilters.continent = e.target.dataset.filter;
                    applyFilters();
                }
            });
        }
        
        // Sort
        if (elements.sortSelect) {
            elements.sortSelect.addEventListener('change', function() {
                currentSort = this.value;
                sortForests();
                renderForests();
            });
        }
        
        // Clear filters
        if (elements.clearFiltersBtn) {
            elements.clearFiltersBtn.addEventListener('click', clearAllFilters);
        }
        
        // Scroll events
        window.addEventListener('scroll', throttle(handleScroll, 100));
        
        // Mobile menu
        if (elements.mobileMenuBtn) {
            elements.mobileMenuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                elements.mobileMenu.classList.toggle('active');
            });
        }
        
        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(function(link) {
            link.addEventListener('click', function() {
                elements.mobileMenuBtn.classList.remove('active');
                elements.mobileMenu.classList.remove('active');
            });
        });
        
        // Back to top
        if (elements.backToTop) {
            elements.backToTop.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
    
    // ===== SET ACTIVE FILTER =====
    function setActiveFilter(container, activeBtn) {
        container.querySelectorAll('.filter-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
    
    // ===== APPLY FILTERS =====
    function applyFilters() {
        filteredForests = allForests.filter(function(forest) {
            // Search filter
            if (currentFilters.search) {
                var searchText = (
                    forest.name + ' ' + 
                    forest.region + ' ' + 
                    (forest.countries ? forest.countries.join(' ') : '') + ' ' +
                    (forest.type || '')
                ).toLowerCase();
                
                if (searchText.indexOf(currentFilters.search) === -1) {
                    return false;
                }
            }
            
            // Type filter
            if (currentFilters.type !== 'all') {
                var forestType = (forest.type || '').toLowerCase();
                if (forestType.indexOf(currentFilters.type) === -1) {
                    return false;
                }
            }
            
            // Continent filter
            if (currentFilters.continent !== 'all') {
                var forestContinent = (forest.continent || forest.region || '').toLowerCase();
                if (forestContinent.indexOf(currentFilters.continent) === -1) {
                    return false;
                }
            }
            
            return true;
        });
        
        sortForests();
        renderForests();
    }
    
    // ===== SORT FORESTS =====
    function sortForests() {
        filteredForests.sort(function(a, b) {
            switch (currentSort) {
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
    }
    
    // ===== RENDER FORESTS =====
    function renderForests() {
        var grid = elements.forestsGrid;
        var noResults = elements.noResults;
        var comingSoon = elements.comingSoonCard;
        
        if (!grid) return;
        
        // Clear grid
        grid.innerHTML = '';
        
        // Update count
        if (elements.visibleCount) {
            elements.visibleCount.textContent = filteredForests.length;
        }
        
        // Show/hide no results
        if (filteredForests.length === 0) {
            if (noResults) noResults.classList.add('show');
            if (comingSoon) comingSoon.style.display = 'none';
            return;
        } else {
            if (noResults) noResults.classList.remove('show');
            if (comingSoon) comingSoon.style.display = 'flex';
        }
        
        // Create cards
        filteredForests.forEach(function(forest, index) {
            var card = createForestCard(forest, index + 1);
            grid.appendChild(card);
        });
    }
    
    // ===== CREATE FOREST CARD =====
    function createForestCard(forest, rank) {
        var card = document.createElement('article');
        card.className = 'forest-card';
        card.setAttribute('tabindex', '0');
        
        var areaText = formatArea(forest.area);
        var typeBadge = getTypeBadge(forest.type);
        
        card.innerHTML = 
            '<div class="card-image-wrapper">' +
                '<img class="card-image" src="' + forest.image + '" alt="' + forest.name + '" loading="lazy">' +
                '<span class="card-rank">#' + rank + '</span>' +
                (typeBadge ? '<span class="card-badge">' + typeBadge + '</span>' : '') +
            '</div>' +
            '<div class="card-content">' +
                '<h3 class="card-name">' + forest.name + '</h3>' +
                '<p class="card-region">' + truncateText(forest.region, 30) + '</p>' +
                '<p class="card-area">' + areaText + '</p>' +
            '</div>';
        
        // Click handler
        card.addEventListener('click', function() {
            window.location.href = 'forests-profile.html?forest=' + forest.id;
        });
        
        // Keyboard handler
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                window.location.href = 'forests-profile.html?forest=' + forest.id;
            }
        });
        
        return card;
    }
    
    // ===== FORMAT AREA =====
    function formatArea(area) {
        if (!area) return 'Area TBD';
        if (area >= 1000000) {
            return (area / 1000000).toFixed(2) + 'M km²';
        } else if (area >= 1000) {
            return (area / 1000).toFixed(1) + 'K km²';
        }
        return area.toLocaleString() + ' km²';
    }
    
    // ===== GET TYPE BADGE =====
    function getTypeBadge(type) {
        if (!type) return '';
        var typeLower = type.toLowerCase();
        
        if (typeLower.indexOf('tropical') !== -1 && typeLower.indexOf('rain') !== -1) return 'Tropical';
        if (typeLower.indexOf('temperate') !== -1 && typeLower.indexOf('rain') !== -1) return 'Temp. Rain';
        if (typeLower.indexOf('boreal') !== -1 || typeLower.indexOf('taiga') !== -1) return 'Boreal';
        if (typeLower.indexOf('mangrove') !== -1) return 'Mangrove';
        if (typeLower.indexOf('cloud') !== -1) return 'Cloud';
        if (typeLower.indexOf('temperate') !== -1) return 'Temperate';
        if (typeLower.indexOf('tropical') !== -1) return 'Tropical';
        if (typeLower.indexOf('montane') !== -1) return 'Montane';
        
        return '';
    }
    
    // ===== TRUNCATE TEXT =====
    function truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
    
    // ===== CLEAR ALL FILTERS =====
    function clearAllFilters() {
        currentFilters = {
            type: 'all',
            continent: 'all',
            search: ''
        };
        
        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.mobileSearchInput) elements.mobileSearchInput.value = '';
        
        if (elements.typeFilters) {
            setActiveFilter(elements.typeFilters, elements.typeFilters.querySelector('[data-filter="all"]'));
        }
        if (elements.continentFilters) {
            setActiveFilter(elements.continentFilters, elements.continentFilters.querySelector('[data-filter="all"]'));
        }
        
        applyFilters();
    }
    
    // ===== HANDLE SCROLL =====
    function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;
        
        // Nav effect
        if (elements.mainNav) {
            if (scrollY > 100) {
                elements.mainNav.classList.add('scrolled');
            } else {
                elements.mainNav.classList.remove('scrolled');
            }
        }
        
        // Back to top
        if (elements.backToTop) {
            if (scrollY > 500) {
                elements.backToTop.classList.add('visible');
            } else {
                elements.backToTop.classList.remove('visible');
            }
        }
    }
    
    // ===== HIDE PRELOADER =====
    function hidePreloader() {
        setTimeout(function() {
            if (elements.preloader) {
                elements.preloader.classList.add('hidden');
            }
        }, 1000);
    }
    
    // ===== DEBOUNCE =====
    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this;
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }
    
    // ===== THROTTLE =====
    function throttle(func, limit) {
        var inThrottle;
        return function() {
            var context = this;
            var args = arguments;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }
    
    // ===== START =====
    init();
});
