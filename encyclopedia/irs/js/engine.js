// ============================================
// UNITY ATLAS - MAIN ENGINE (FIXED)
// Interactive Geopolitical Relations Visualization
// Version: 2026.04 - PRODUCTION
// ============================================

(function() {
    'use strict';

    console.log('🌍 Unity Atlas Engine Loading...');

    // ============================================
    // APPLICATION STATE
    // ============================================
    const STATE = {
        centerCountry: 'US', // Default center
        selectedCountry: null,
        hoveredCountry: null,
        relations: [],
        filteredRelations: [],
        currentRegion: 'all',
        currentYear: 2026,
        zoom: 1,
        panX: 0,
        panY: 0,
        isDragging: false,
        view: 'radial', // 'radial' or 'map'
        filterType: 'all'
    };

    // ============================================
    // DOM CACHE
    // ============================================
    const DOM = {};

    // ============================================
    // COLORS
    // ============================================
    const COLORS = {
        allies: '#10B981',
        strategic: '#3B82F6',
        neutral: '#FBBF24',
        complex: '#F97316',
        conflict: '#EF4444',
        selected: '#EC4899'
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🚀 Initializing Unity Atlas...');
        
        // Simulate loading
        simulateLoading();
        
        // Cache DOM elements after page load
        setTimeout(() => {
            cacheDOMElements();
            setupEventListeners();
            initializeData();
            hideLoadingScreen();
            console.log('✅ Unity Atlas Ready!');
        }, 2000);
    }

    function simulateLoading() {
        const progressBar = document.getElementById('load-progress');
        const progressText = document.getElementById('load-percent');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            if (progressBar) progressBar.style.width = progress + '%';
            if (progressText) progressText.textContent = Math.floor(progress) + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 150);
    }

    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }

    function cacheDOMElements() {
        // Main containers
        DOM.radialContainer = document.getElementById('radial-container');
        DOM.radialCanvas = document.getElementById('radial-canvas');
        DOM.worldMapContainer = document.getElementById('world-map-container');
        DOM.tooltip = document.getElementById('tooltip');
        
        // Country info
        DOM.selFlag = document.getElementById('sel-flag');
        DOM.selName = document.getElementById('sel-name');
        DOM.selCapital = document.getElementById('sel-capital');
        DOM.selRegionText = document.getElementById('sel-region-text');
        
        // Stats
        DOM.statAllies = document.getElementById('stat-allies');
        DOM.statStrategic = document.getElementById('stat-strategic');
        DOM.statNeutral = document.getElementById('stat-neutral');
        DOM.statComplex = document.getElementById('stat-complex');
        DOM.statConflict = document.getElementById('stat-conflict');
        
        // Legend
        DOM.legendAllies = document.getElementById('legend-allies');
        DOM.legendStrategic = document.getElementById('legend-strategic');
        DOM.legendNeutral = document.getElementById('legend-neutral');
        DOM.legendComplex = document.getElementById('legend-complex');
        DOM.legendConflict = document.getElementById('legend-conflict');
        
        // Detail panel
        DOM.detailPanel = document.getElementById('detail-panel');
        DOM.panelPlaceholder = document.getElementById('panel-placeholder');
        DOM.panelContent = document.getElementById('panel-content');
        DOM.panelFlag1 = document.getElementById('panel-flag1');
        DOM.panelName1 = document.getElementById('panel-name1');
        DOM.panelFlag2 = document.getElementById('panel-flag2');
        DOM.panelName2 = document.getElementById('panel-name2');
        DOM.panelType = document.getElementById('panel-type');
        DOM.scoreNumber = document.getElementById('score-number');
        DOM.scoreCircle = document.getElementById('score-circle');
        DOM.panelParameters = document.getElementById('panel-parameters');
        
        // Search
        DOM.searchInput = document.getElementById('search-input');
        DOM.searchDropdown = document.getElementById('search-dropdown');
        DOM.countryDropdownBtn = document.getElementById('country-dropdown-btn');
        DOM.countryDropdown = document.getElementById('country-dropdown');
        DOM.countryDropdownSearch = document.getElementById('country-dropdown-search');
        DOM.countryDropdownList = document.getElementById('country-dropdown-list');
        
        // View toggles
        DOM.mapViewBtn = document.getElementById('map-view-btn');
        DOM.radialViewBtn = document.getElementById('radial-view-btn');
        
        // Region tabs
        DOM.regionTabs = document.querySelectorAll('.region-tab');
        
        // Timeline
        DOM.yearSlider = document.getElementById('year-slider');
        DOM.currentYear = document.getElementById('current-year');
        DOM.eraButtons = document.querySelectorAll('.era-btn');
        
        // Zoom
        DOM.zoomIn = document.getElementById('zoom-in');
        DOM.zoomOut = document.getElementById('zoom-out');
        DOM.zoomReset = document.getElementById('zoom-reset');
        DOM.zoomLevel = document.getElementById('zoom-level');
        
        console.log('📦 DOM elements cached');
    }

    function setupEventListeners() {
        // Region tabs
        DOM.regionTabs?.forEach(tab => {
            tab.addEventListener('click', () => handleRegionChange(tab.dataset.region));
        });
        
        // View toggles
        DOM.mapViewBtn?.addEventListener('click', () => switchView('map'));
        DOM.radialViewBtn?.addEventListener('click', () => switchView('radial'));
        
        // Search
        DOM.searchInput?.addEventListener('input', handleSearch);
        DOM.searchInput?.addEventListener('focus', () => DOM.searchDropdown?.classList.add('show'));
        
        // Country dropdown
        DOM.countryDropdownBtn?.addEventListener('click', toggleCountryDropdown);
        DOM.countryDropdownSearch?.addEventListener('input', filterCountryDropdown);
        
        // Click outside to close dropdowns
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-search')) {
                DOM.searchDropdown?.classList.remove('show');
            }
            if (!e.target.closest('.country-dropdown-wrapper')) {
                DOM.countryDropdown?.classList.remove('show');
            }
        });
        
        // Timeline
        DOM.yearSlider?.addEventListener('input', handleYearChange);
        DOM.eraButtons?.forEach(btn => {
            btn.addEventListener('click', () => {
                const year = parseInt(btn.dataset.year);
                if (DOM.yearSlider) DOM.yearSlider.value = year;
                handleYearChange({ target: { value: year } });
                
                DOM.eraButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Zoom controls
        DOM.zoomIn?.addEventListener('click', () => adjustZoom(0.2));
        DOM.zoomOut?.addEventListener('click', () => adjustZoom(-0.2));
        DOM.zoomReset?.addEventListener('click', resetView);
        
        // Canvas interaction
        if (DOM.radialCanvas) {
            DOM.radialCanvas.addEventListener('mousedown', handleCanvasMouseDown);
            DOM.radialCanvas.addEventListener('mousemove', handleCanvasMouseMove);
            DOM.radialCanvas.addEventListener('mouseup', handleCanvasMouseUp);
            DOM.radialCanvas.addEventListener('mouseleave', handleCanvasMouseLeave);
            DOM.radialCanvas.addEventListener('click', handleCanvasClick);
            DOM.radialCanvas.addEventListener('wheel', handleCanvasWheel);
        }
        
        // Legend filtering
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.dataset.type;
                STATE.filterType = STATE.filterType === type ? 'all' : type;
                renderRadialView();
            });
        });
        
        console.log('🎯 Event listeners attached');
    }

    // ============================================
    // DATA INITIALIZATION
    // ============================================
    function initializeData() {
        // Populate country dropdown
        populateCountryDropdown();
        
        // Set initial center country
        setCenter(STATE.centerCountry);
    }

    function setCenter(countryCode) {
        const country = COUNTRY_MAP[countryCode];
        if (!country) {
            console.error('Country not found:', countryCode);
            return;
        }
        
        STATE.centerCountry = countryCode;
        STATE.selectedCountry = null;
        
        // Generate relationships
        STATE.relations = generateRelationsForCountry(countryCode);
        STATE.filteredRelations = [...STATE.relations];
        
        // Update UI
        updateCountryInfo(country);
        updateStats();
        renderRadialView();
        hidePanelDetail();
        
        console.log(`🎯 Center set to ${country.flag} ${country.name}`);
    }

    function updateCountryInfo(country) {
        if (DOM.selFlag) DOM.selFlag.textContent = country.flag;
        if (DOM.selName) DOM.selName.textContent = country.name;
        if (DOM.selCapital) DOM.selCapital.textContent = country.capital;
        if (DOM.selRegionText) DOM.selRegionText.textContent = capitalizeFirst(country.region);
    }

    function updateStats() {
        const stats = {
            allies: 0,
            strategic: 0,
            neutral: 0,
            complex: 0,
            conflict: 0
        };
        
        STATE.filteredRelations.forEach(rel => {
            if (stats.hasOwnProperty(rel.type)) {
                stats[rel.type]++;
            }
        });
        
        if (DOM.statAllies) DOM.statAllies.textContent = stats.allies;
        if (DOM.statStrategic) DOM.statStrategic.textContent = stats.strategic;
        if (DOM.statNeutral) DOM.statNeutral.textContent = stats.neutral;
        if (DOM.statComplex) DOM.statComplex.textContent = stats.complex;
        if (DOM.statConflict) DOM.statConflict.textContent = stats.conflict;
        
        if (DOM.legendAllies) DOM.legendAllies.textContent = stats.allies;
        if (DOM.legendStrategic) DOM.legendStrategic.textContent = stats.strategic;
        if (DOM.legendNeutral) DOM.legendNeutral.textContent = stats.neutral;
        if (DOM.legendComplex) DOM.legendComplex.textContent = stats.complex;
        if (DOM.legendConflict) DOM.legendConflict.textContent = stats.conflict;
    }

    // ============================================
    // RADIAL VIEW RENDERING
    // ============================================
    function renderRadialView() {
        if (!DOM.radialCanvas) return;
        
        const canvas = DOM.radialCanvas;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Apply transformations
        ctx.save();
        ctx.translate(STATE.panX, STATE.panY);
        ctx.scale(STATE.zoom, STATE.zoom);
        
        // Draw rings
        const rings = [
            { radius: 100, color: COLORS.allies, label: 'Allies' },
            { radius: 170, color: COLORS.strategic, label: 'Strategic' },
            { radius: 240, color: COLORS.neutral, label: 'Neutral' },
            { radius: 310, color: COLORS.complex, label: 'Complex' },
            { radius: 380, color: COLORS.conflict, label: 'Conflict' }
        ];
        
        rings.forEach(ring => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
            ctx.strokeStyle = ring.color;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = 0.3;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
        });
        
        // Draw center country
        const centerCountry = COUNTRY_MAP[STATE.centerCountry];
        if (centerCountry) {
            ctx.font = 'bold 48px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(centerCountry.flag, centerX, centerY);
            
            // Center circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
            ctx.strokeStyle = COLORS.selected;
            ctx.lineWidth = 3;
            ctx.stroke();
        }
        
        // Group countries by ring
        const ringGroups = [[], [], [], [], []];
        STATE.filteredRelations.forEach(rel => {
            if (STATE.filterType === 'all' || STATE.filterType === rel.type) {
                const ringIndex = Math.min(rel.ring - 1, 4);
                ringGroups[ringIndex].push(rel);
            }
        });
        
        // Draw countries
        ringGroups.forEach((group, ringIndex) => {
            const radius = rings[ringIndex].radius;
            const count = group.length;
            
            group.forEach((rel, i) => {
                const angle = (2 * Math.PI * i / count) - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                // Draw connection line
                if (STATE.selectedCountry === rel.code || STATE.hoveredCountry === rel.code) {
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = COLORS[rel.type];
                    ctx.lineWidth = 2;
                    ctx.globalAlpha = 0.5;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
                
                // Draw country flag
                ctx.font = STATE.selectedCountry === rel.code ? 'bold 32px Arial' : 'bold 24px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(rel.flag, x, y);
                
                // Highlight selected
                if (STATE.selectedCountry === rel.code) {
                    ctx.beginPath();
                    ctx.arc(x, y, 25, 0, Math.PI * 2);
                    ctx.strokeStyle = COLORS.selected;
                    ctx.lineWidth = 3;
                    ctx.stroke();
                }
                
                // Store position for interaction
                rel._x = x;
                rel._y = y;
                rel._radius = 25;
            });
        });
        
        ctx.restore();
    }

    // ============================================
    // CANVAS INTERACTION
    // ============================================
    let dragStart = null;

    function handleCanvasMouseDown(e) {
        STATE.isDragging = true;
        dragStart = { x: e.clientX - STATE.panX, y: e.clientY - STATE.panY };
    }

    function handleCanvasMouseMove(e) {
        if (STATE.isDragging && dragStart) {
            STATE.panX = e.clientX - dragStart.x;
            STATE.panY = e.clientY - dragStart.y;
            renderRadialView();
            return;
        }
        
        // Tooltip
        const rect = DOM.radialCanvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - STATE.panX) / STATE.zoom;
        const y = (e.clientY - rect.top - STATE.panY) / STATE.zoom;
        
        let hoveredRel = null;
        
        STATE.filteredRelations.forEach(rel => {
            if (rel._x && rel._y) {
                const dist = Math.sqrt((x - rel._x) ** 2 + (y - rel._y) ** 2);
                if (dist < rel._radius) {
                    hoveredRel = rel;
                }
            }
        });
        
        if (hoveredRel) {
            STATE.hoveredCountry = hoveredRel.code;
            showTooltip(e, hoveredRel);
            DOM.radialCanvas.style.cursor = 'pointer';
        } else {
            STATE.hoveredCountry = null;
            hideTooltip();
            DOM.radialCanvas.style.cursor = STATE.isDragging ? 'grabbing' : 'grab';
        }
        
        renderRadialView();
    }

    function handleCanvasMouseUp() {
        STATE.isDragging = false;
        dragStart = null;
        if (DOM.radialCanvas) DOM.radialCanvas.style.cursor = 'grab';
    }

    function handleCanvasMouseLeave() {
        STATE.isDragging = false;
        STATE.hoveredCountry = null;
        hideTooltip();
        renderRadialView();
    }

    function handleCanvasClick(e) {
        if (STATE.hoveredCountry) {
            selectCountry(STATE.hoveredCountry);
        }
    }

    function handleCanvasWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        adjustZoom(delta);
    }

    // ============================================
    // TOOLTIP
    // ============================================
    function showTooltip(e, relation) {
        if (!DOM.tooltip) return;
        
        const tooltip = DOM.tooltip;
        tooltip.querySelector('.tooltip-flag').textContent = relation.flag;
        tooltip.querySelector('.name').textContent = relation.name;
        tooltip.querySelector('.region').textContent = capitalizeFirst(relation.region);
        tooltip.querySelector('.tooltip-type').textContent = capitalizeFirst(relation.type);
        tooltip.querySelector('.tooltip-type').className = `tooltip-type ${relation.type}`;
        tooltip.querySelector('.value').textContent = `${relation.strength}/10`;
        tooltip.querySelector('.tooltip-bar-fill').style.width = `${relation.strength * 10}%`;
        tooltip.querySelector('.tooltip-bar-fill').style.background = COLORS[relation.type];
        
        tooltip.style.left = e.pageX + 20 + 'px';
        tooltip.style.top = e.pageY + 20 + 'px';
        tooltip.classList.add('show');
    }

    function hideTooltip() {
        DOM.tooltip?.classList.remove('show');
    }

    // ============================================
    // COUNTRY SELECTION
    // ============================================
    function selectCountry(countryCode) {
        STATE.selectedCountry = countryCode;
        const relation = STATE.relations.find(r => r.code === countryCode);
        
        if (relation) {
            showPanelDetail(relation);
        }
        
        renderRadialView();
    }

    function showPanelDetail(relation) {
        if (!DOM.panelContent || !DOM.panelPlaceholder) return;
        
        DOM.panelPlaceholder.style.display = 'none';
        DOM.panelContent.classList.add('active');
        
        const centerCountry = COUNTRY_MAP[STATE.centerCountry];
        
        // Update header
        if (DOM.panelFlag1) DOM.panelFlag1.textContent = centerCountry.flag;
        if (DOM.panelName1) DOM.panelName1.textContent = centerCountry.name;
        if (DOM.panelFlag2) DOM.panelFlag2.textContent = relation.flag;
        if (DOM.panelName2) DOM.panelName2.textContent = relation.name;
        if (DOM.panelType) {
            DOM.panelType.textContent = capitalizeFirst(relation.type);
            DOM.panelType.style.background = COLORS[relation.type];
        }
        
        // Update score
        if (DOM.scoreNumber) DOM.scoreNumber.textContent = relation.strength;
        if (DOM.scoreCircle) {
            const circumference = 2 * Math.PI * 54;
            const offset = circumference - (relation.strength / 10) * circumference;
            DOM.scoreCircle.style.strokeDashoffset = offset;
            DOM.scoreCircle.style.stroke = COLORS[relation.type];
        }
        
        // Render parameters
        renderParameters(relation.params);
    }

    function hidePanelDetail() {
        if (!DOM.panelContent || !DOM.panelPlaceholder) return;
        
        DOM.panelContent.classList.remove('active');
        DOM.panelPlaceholder.style.display = 'flex';
        STATE.selectedCountry = null;
    }

    function renderParameters(params) {
        if (!DOM.panelParameters) return;
        
        let html = '<div class="params-title">16 Parameters</div>';
        
        PARAMETERS.forEach(param => {
            const data = params[param.id];
            const score = data?.score || 5;
            const color = getScoreColor(score);
            
            html += `
                <div class="param-card" data-param="${param.id}">
                    <div class="param-header">
                        <div class="param-icon" style="color: ${color}">
                            <i class="fas ${param.icon}"></i>
                        </div>
                        <div class="param-info">
                            <div class="param-name">${param.name}</div>
                            <div class="param-summary">${data?.summary || ''}</div>
                        </div>
                        <div class="param-score">
                            <div class="param-score-value" style="color: ${color}">${score}/10</div>
                            <div class="param-score-bar">
                                <div class="param-bar-fill" style="width: ${score * 10}%; background: ${color}"></div>
                            </div>
                        </div>
                        <i class="fas fa-chevron-down param-toggle"></i>
                    </div>
                    <div class="param-details">
                        <div class="param-details-content">
                            <p>${data?.details || ''}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        DOM.panelParameters.innerHTML = html;
        
        // Add toggle listeners
        DOM.panelParameters.querySelectorAll('.param-card').forEach(card => {
            card.addEventListener('click', () => {
                const details = card.querySelector('.param-details');
                const toggle = card.querySelector('.param-toggle');
                
                if (details.classList.contains('open')) {
                    details.classList.remove('open');
                    toggle.classList.remove('open');
                    details.style.maxHeight = '0';
                } else {
                    details.classList.add('open');
                    toggle.classList.add('open');
                    details.style.maxHeight = '200px';
                }
            });
        });
    }

    // ============================================
    // SEARCH & DROPDOWN
    // ============================================
    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            DOM.searchDropdown?.classList.remove('show');
            return;
        }
        
        const matches = COUNTRIES.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.code.toLowerCase().includes(query) ||
            c.capital.toLowerCase().includes(query)
        ).slice(0, 8);
        
        let html = '';
        matches.forEach(country => {
            const relation = STATE.relations.find(r => r.code === country.code);
            const relType = relation ? relation.type : 'neutral';
            
            html += `
                <div class="search-item" data-code="${country.code}">
                    <span class="flag">${country.flag}</span>
                    <div class="info">
                        <div class="name">${country.name}</div>
                        <div class="meta">${country.capital} • ${capitalizeFirst(country.region)}</div>
                    </div>
                    ${relation ? `<span class="relation-badge ${relType}">${capitalizeFirst(relType)}</span>` : ''}
                </div>
            `;
        });
        
        if (DOM.searchDropdown) {
            DOM.searchDropdown.innerHTML = html;
            DOM.searchDropdown.classList.add('show');
            
            DOM.searchDropdown.querySelectorAll('.search-item').forEach(item => {
                item.addEventListener('click', () => {
                    setCenter(item.dataset.code);
                    DOM.searchInput.value = '';
                    DOM.searchDropdown.classList.remove('show');
                });
            });
        }
    }

    function populateCountryDropdown() {
        if (!DOM.countryDropdownList) return;
        
        let html = '';
        COUNTRIES.forEach(country => {
            html += `
                <div class="country-dropdown-item" data-code="${country.code}">
                    <span class="flag">${country.flag}</span>
                    <span class="name">${country.name}</span>
                    <span class="region-tag">${country.region}</span>
                </div>
            `;
        });
        
        DOM.countryDropdownList.innerHTML = html;
        
        DOM.countryDropdownList.querySelectorAll('.country-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                setCenter(item.dataset.code);
                DOM.countryDropdown?.classList.remove('show');
            });
        });
    }

    function toggleCountryDropdown() {
        DOM.countryDropdown?.classList.toggle('show');
    }

    function filterCountryDropdown(e) {
        const query = e.target.value.toLowerCase();
        const items = DOM.countryDropdownList?.querySelectorAll('.country-dropdown-item');
        
        items?.forEach(item => {
            const name = item.querySelector('.name').textContent.toLowerCase();
            item.style.display = name.includes(query) ? 'flex' : 'none';
        });
    }

    // ============================================
    // VIEW SWITCHING
    // ============================================
    function switchView(view) {
        STATE.view = view;
        
        if (view === 'radial') {
            DOM.radialContainer?.classList.add('active');
            DOM.worldMapContainer?.classList.remove('active');
            DOM.radialViewBtn?.classList.add('active');
            DOM.mapViewBtn?.classList.remove('active');
            renderRadialView();
        } else {
            DOM.worldMapContainer?.classList.add('active');
            DOM.radialContainer?.classList.remove('active');
            DOM.mapViewBtn?.classList.add('active');
            DOM.radialViewBtn?.classList.remove('active');
        }
    }

    // ============================================
    // REGION FILTERING
    // ============================================
    function handleRegionChange(region) {
        STATE.currentRegion = region;
        
        DOM.regionTabs?.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.region === region);
        });
        
        if (region === 'all') {
            STATE.filteredRelations = [...STATE.relations];
        } else {
            STATE.filteredRelations = STATE.relations.filter(r => r.region === region);
        }
        
        updateStats();
        renderRadialView();
    }

    // ============================================
    // TIMELINE
    // ============================================
    function handleYearChange(e) {
        const year = parseInt(e.target.value);
        STATE.currentYear = year;
        
        if (DOM.currentYear) {
            DOM.currentYear.textContent = year > 0 ? `${year} CE` : `${Math.abs(year)} BCE`;
        }
    }

    // ============================================
    // ZOOM
    // ============================================
    function adjustZoom(delta) {
        STATE.zoom = Math.max(0.5, Math.min(3, STATE.zoom + delta));
        if (DOM.zoomLevel) DOM.zoomLevel.textContent = Math.round(STATE.zoom * 100) + '%';
        renderRadialView();
    }

    function resetView() {
        STATE.zoom = 1;
        STATE.panX = 0;
        STATE.panY = 0;
        if (DOM.zoomLevel) DOM.zoomLevel.textContent = '100%';
        renderRadialView();
    }

    // ============================================
    // UTILITIES
    // ============================================
    function capitalizeFirst(str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.UnityAtlas = {
        setCenter,
        selectCountry,
        switchView,
        STATE,
        DOM
    };

    // ============================================
    // SCROLL TO APP
    // ============================================
    window.scrollToApp = function() {
        document.getElementById('main-nav')?.scrollIntoView({ behavior: 'smooth' });
    };

    // ============================================
    // AUTO-INITIALIZE
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Window resize handler
    window.addEventListener('resize', () => {
        if (STATE.view === 'radial') {
            renderRadialView();
        }
    });

})();
