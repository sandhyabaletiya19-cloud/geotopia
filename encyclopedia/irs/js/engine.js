// ============================================
// UNITY ATLAS - APPLICATION ENGINE
// Clean, Professional Implementation
// Version: 2026.04
// ============================================

(function() {
    'use strict';

    // ============================================
    // STATE
    // ============================================
    const STATE = {
        centerCountry: null,
        selectedCountry: null,
        hoveredCountry: null,
        relations: [],
        filteredRelations: [],
        currentRegion: 'all',
        filterType: 'all',
        zoom: 1,
        panX: 0,
        panY: 0,
        isDragging: false,
        dragStart: null,
        view: 'orbital',
        countries: []
    };

    // ============================================
    // COLORS
    // ============================================
    const COLORS = {
        allies: '#00c853',
        strategic: '#2196f3',
        neutral: '#ffc107',
        complex: '#ff9800',
        conflict: '#f44336',
        selected: '#e040fb',
        center: '#00d4ff'
    };

    // ============================================
    // DOM REFERENCES
    // ============================================
    let DOM = {};

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🚀 Unity Atlas Engine Starting...');
        
        // Start loading animation
        animateLoader();
        
        // Initialize after delay
        setTimeout(() => {
            cacheDOMElements();
            setupEventListeners();
            populateCountryList();
            setCenter('US'); // Default
            hideLoader();
            console.log('✅ Unity Atlas Ready');
        }, 2500);
    }

    function animateLoader() {
        const progress = document.querySelector('.loader-progress');
        if (!progress) return;
        
        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 20;
            if (p > 100) p = 100;
            progress.style.width = p + '%';
            if (p >= 100) clearInterval(interval);
        }, 200);
    }

    function hideLoader() {
        const loader = document.getElementById('loader');
        const app = document.getElementById('app');
        
        if (loader) loader.classList.add('hidden');
        if (app) app.classList.add('visible');
    }

    function cacheDOMElements() {
        DOM = {
            // Main canvas
            canvas: document.getElementById('mainCanvas'),
            vizContainer: document.getElementById('vizContainer'),
            tooltip: document.getElementById('tooltip'),
            
            // Country info
            vizTitle: document.getElementById('vizTitle'),
            
            // Filters
            filterType: document.getElementById('filterType'),
            globalSearch: document.getElementById('globalSearch'),
            searchResults: document.getElementById('searchResults'),
            countryFilter: document.getElementById('countryFilter'),
            countryList: document.getElementById('countryList'),
            regionTabs: document.querySelectorAll('.region-tab'),
            
            // Stats
            statsGrid: document.getElementById('statsGrid'),
            centerDisplay: document.getElementById('centerDisplay'),
            
            // Legend
            legendItems: document.querySelectorAll('.legend-item'),
            
            // Zoom
            zoomIn: document.getElementById('zoomIn'),
            zoomOut: document.getElementById('zoomOut'),
            zoomReset: document.getElementById('zoomReset'),
            zoomLevel: document.getElementById('zoomLevel'),
            
            // Detail panel
            panelPlaceholder: document.getElementById('panelPlaceholder'),
            panelContent: document.getElementById('panelContent'),
            panelClose: document.getElementById('panelClose'),
            panelHeader: document.getElementById('panelHeader'),
            panelTabs: document.querySelectorAll('.panel-tab'),
            tabParameters: document.getElementById('tabParameters'),
            tabHistory: document.getElementById('tabHistory'),
            tabAgreements: document.getElementById('tabAgreements'),
            
            // Bilateral display
            bilateralFlag1: document.getElementById('bilateralFlag1'),
            bilateralName1: document.getElementById('bilateralName1'),
            bilateralFlag2: document.getElementById('bilateralFlag2'),
            bilateralName2: document.getElementById('bilateralName2'),
            bilateralType: document.getElementById('bilateralType'),
            scoreNum: document.getElementById('scoreNum'),
            scoreFill: document.getElementById('scoreFill'),
            scoreSummary: document.getElementById('scoreSummary'),
            
            // Actions
            btnSetCenter: document.getElementById('btnSetCenter'),
            btnCompare: document.getElementById('btnCompare'),
            
            // View buttons
            viewOrbital: document.getElementById('viewOrbital'),
            viewForce: document.getElementById('viewForce')
        };
    }

    function setupEventListeners() {
        // Canvas events
        if (DOM.canvas) {
            DOM.canvas.addEventListener('mousedown', onCanvasMouseDown);
            DOM.canvas.addEventListener('mousemove', onCanvasMouseMove);
            DOM.canvas.addEventListener('mouseup', onCanvasMouseUp);
            DOM.canvas.addEventListener('mouseleave', onCanvasMouseLeave);
            DOM.canvas.addEventListener('click', onCanvasClick);
            DOM.canvas.addEventListener('wheel', onCanvasWheel);
            DOM.canvas.addEventListener('dblclick', onCanvasDoubleClick);
        }
        
        // Global search
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener('input', onGlobalSearch);
            DOM.globalSearch.addEventListener('focus', () => {
                if (DOM.searchResults.children.length > 0) {
                    DOM.searchResults.classList.add('active');
                }
            });
        }
        
        // Country filter
        if (DOM.countryFilter) {
            DOM.countryFilter.addEventListener('input', onCountryFilter);
        }
        
        // Region tabs
        DOM.regionTabs?.forEach(tab => {
            tab.addEventListener('click', () => onRegionChange(tab.dataset.region));
        });
        
        // Filter type
        if (DOM.filterType) {
            DOM.filterType.addEventListener('change', onFilterTypeChange);
        }
        
        // Legend items
        DOM.legendItems?.forEach(item => {
            item.addEventListener('click', () => onLegendClick(item.dataset.type));
        });
        
        // Zoom controls
        DOM.zoomIn?.addEventListener('click', () => adjustZoom(0.2));
        DOM.zoomOut?.addEventListener('click', () => adjustZoom(-0.2));
        DOM.zoomReset?.addEventListener('click', resetView);
        
        // Panel
        DOM.panelClose?.addEventListener('click', hideDetailPanel);
        DOM.panelTabs?.forEach(tab => {
            tab.addEventListener('click', () => switchPanelTab(tab.dataset.tab));
        });
        
        // Actions
        DOM.btnSetCenter?.addEventListener('click', () => {
            if (STATE.selectedCountry) {
                setCenter(STATE.selectedCountry);
            }
        });
        
        // View buttons
        DOM.viewOrbital?.addEventListener('click', () => switchView('orbital'));
        DOM.viewForce?.addEventListener('click', () => switchView('force'));
        
        // Close dropdowns on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-search')) {
                DOM.searchResults?.classList.remove('active');
            }
        });
        
        // Window resize
        window.addEventListener('resize', () => render());
    }

    // ============================================
    // COUNTRY LIST
    // ============================================
    function populateCountryList() {
        if (!DOM.countryList) return;
        
        STATE.countries = [...COUNTRIES];
        renderCountryList(STATE.countries);
    }

    function renderCountryList(countries) {
        if (!DOM.countryList) return;
        
        DOM.countryList.innerHTML = countries.map(c => `
            <div class="country-item ${STATE.centerCountry === c.code ? 'active' : ''}" data-code="${c.code}">
                <span class="country-item-flag">${c.flag}</span>
                <div class="country-item-info">
                    <div class="country-item-name">${c.name}</div>
                    <div class="country-item-region">${c.region}</div>
                </div>
            </div>
        `).join('');
        
        // Add click events
        DOM.countryList.querySelectorAll('.country-item').forEach(item => {
            item.addEventListener('click', () => setCenter(item.dataset.code));
        });
    }

    function onCountryFilter(e) {
        const query = e.target.value.toLowerCase();
        let filtered = COUNTRIES;
        
        if (STATE.currentRegion !== 'all') {
            filtered = filtered.filter(c => c.region === STATE.currentRegion);
        }
        
        if (query) {
            filtered = filtered.filter(c => 
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query)
            );
        }
        
        renderCountryList(filtered);
    }

    function onRegionChange(region) {
        STATE.currentRegion = region;
        
        DOM.regionTabs?.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.region === region);
        });
        
        // Filter country list
        let filtered = COUNTRIES;
        if (region !== 'all') {
            filtered = filtered.filter(c => c.region === region);
        }
        renderCountryList(filtered);
        
        // Also filter relations
        applyFilters();
    }

    // ============================================
    // SEARCH
    // ============================================
    function onGlobalSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            DOM.searchResults.classList.remove('active');
            DOM.searchResults.innerHTML = '';
            return;
        }
        
        const matches = COUNTRIES.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.code.toLowerCase().includes(query) ||
            c.capital.toLowerCase().includes(query)
        ).slice(0, 8);
        
        if (matches.length === 0) {
            DOM.searchResults.innerHTML = '<div class="search-item"><span>No results found</span></div>';
        } else {
            DOM.searchResults.innerHTML = matches.map(c => {
                const rel = STATE.relations.find(r => r.code === c.code);
                return `
                    <div class="search-item" data-code="${c.code}">
                        <span class="search-item-flag">${c.flag}</span>
                        <div class="search-item-info">
                            <div class="search-item-name">${c.name}</div>
                            <div class="search-item-meta">${c.capital} • ${capitalize(c.region)}</div>
                        </div>
                        ${rel ? `<span class="search-item-badge ${rel.type}">${capitalize(rel.type)}</span>` : ''}
                    </div>
                `;
            }).join('');
            
            DOM.searchResults.querySelectorAll('.search-item').forEach(item => {
                item.addEventListener('click', () => {
                    const code = item.dataset.code;
                    if (code) {
                        setCenter(code);
                        DOM.globalSearch.value = '';
                        DOM.searchResults.classList.remove('active');
                    }
                });
            });
        }
        
        DOM.searchResults.classList.add('active');
    }

    // ============================================
    // CENTER COUNTRY
    // ============================================
    function setCenter(code) {
        const country = COUNTRY_MAP[code];
        if (!country) return;
        
        STATE.centerCountry = code;
        STATE.selectedCountry = null;
        
        // Generate relations
        STATE.relations = generateRelationsForCountry(code);
        STATE.filteredRelations = [...STATE.relations];
        
        // Update UI
        updateCenterDisplay(country);
        updateStats();
        render();
        hideDetailPanel();
        
        // Update country list
        renderCountryList(STATE.currentRegion === 'all' ? COUNTRIES : COUNTRIES.filter(c => c.region === STATE.currentRegion));
        
        // Update title
        if (DOM.vizTitle) {
            DOM.vizTitle.textContent = `${country.flag} ${country.name} - Global Relations`;
        }
        
        console.log(`🎯 Center: ${country.flag} ${country.name}`);
    }

    function updateCenterDisplay(country) {
        if (DOM.centerDisplay) {
            DOM.centerDisplay.innerHTML = `
                <span class="center-flag">${country.flag}</span>
                <span class="center-name">${country.name}</span>
            `;
        }
    }

    function updateStats() {
        const stats = { allies: 0, strategic: 0, neutral: 0, complex: 0, conflict: 0 };
        
        STATE.filteredRelations.forEach(r => {
            if (stats[r.type] !== undefined) stats[r.type]++;
        });
        
        if (DOM.statsGrid) {
            DOM.statsGrid.innerHTML = `
                <div class="stat-item allies"><span class="stat-num">${stats.allies}</span><span class="stat-label">Allies</span></div>
                <div class="stat-item strategic"><span class="stat-num">${stats.strategic}</span><span class="stat-label">Strategic</span></div>
                <div class="stat-item neutral"><span class="stat-num">${stats.neutral}</span><span class="stat-label">Neutral</span></div>
                <div class="stat-item complex"><span class="stat-num">${stats.complex}</span><span class="stat-label">Complex</span></div>
                <div class="stat-item conflict"><span class="stat-num">${stats.conflict}</span><span class="stat-label">Conflict</span></div>
            `;
        }
    }

    // ============================================
    // FILTERING
    // ============================================
    function applyFilters() {
        let filtered = [...STATE.relations];
        
        if (STATE.currentRegion !== 'all') {
            filtered = filtered.filter(r => r.region === STATE.currentRegion);
        }
        
        if (STATE.filterType !== 'all') {
            filtered = filtered.filter(r => r.type === STATE.filterType);
        }
        
        STATE.filteredRelations = filtered;
        updateStats();
        render();
    }

    function onFilterTypeChange(e) {
        STATE.filterType = e.target.value;
        applyFilters();
    }

    function onLegendClick(type) {
        if (STATE.filterType === type) {
            STATE.filterType = 'all';
        } else {
            STATE.filterType = type;
        }
        
        if (DOM.filterType) {
            DOM.filterType.value = STATE.filterType;
        }
        
        applyFilters();
    }

    // ============================================
    // CANVAS RENDERING
    // ============================================
    function render() {
        if (!DOM.canvas) return;
        
        const canvas = DOM.canvas;
        const ctx = canvas.getContext('2d');
        
        // Set size
        const rect = DOM.vizContainer.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        
        const width = rect.width;
        const height = rect.height;
        const centerX = width / 2 + STATE.panX;
        const centerY = height / 2 + STATE.panY;
        
        // Clear
        ctx.clearRect(0, 0, width, height);
        
        // Draw based on view
        if (STATE.view === 'orbital') {
            drawOrbitalView(ctx, centerX, centerY, width, height);
        } else {
            drawForceView(ctx, centerX, centerY, width, height);
        }
    }

    function drawOrbitalView(ctx, cx, cy, width, height) {
        const baseRadius = Math.min(width, height) * 0.35 * STATE.zoom;
        
        // Ring definitions
        const rings = [
            { radius: baseRadius * 0.3, type: 'allies', label: 'Allies' },
            { radius: baseRadius * 0.5, type: 'strategic', label: 'Strategic' },
            { radius: baseRadius * 0.7, type: 'neutral', label: 'Neutral' },
            { radius: baseRadius * 0.85, type: 'complex', label: 'Complex' },
            { radius: baseRadius * 1.0, type: 'conflict', label: 'Conflict' }
        ];
        
        // Draw rings
        rings.forEach((ring, i) => {
            ctx.beginPath();
            ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
            ctx.strokeStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.2;
            ctx.lineWidth = 2;
            ctx.setLineDash([8, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
            
            // Ring label
            ctx.font = '11px Inter';
            ctx.fillStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.5;
            ctx.textAlign = 'center';
            ctx.fillText(ring.label, cx, cy - ring.radius - 8);
            ctx.globalAlpha = 1;
        });
        
        // Group countries by ring
        const ringGroups = { allies: [], strategic: [], neutral: [], complex: [], conflict: [] };
        STATE.filteredRelations.forEach(rel => {
            if (ringGroups[rel.type]) {
                ringGroups[rel.type].push(rel);
            }
        });
        
        // Draw connections first (behind nodes)
        if (STATE.selectedCountry || STATE.hoveredCountry) {
            const targetCode = STATE.selectedCountry || STATE.hoveredCountry;
            const rel = STATE.filteredRelations.find(r => r.code === targetCode);
            if (rel && rel._x !== undefined) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(rel._x, rel._y);
                ctx.strokeStyle = COLORS[rel.type];
                ctx.globalAlpha = 0.4;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
        
        // Draw center country
        const center = COUNTRY_MAP[STATE.centerCountry];
        if (center) {
            // Glow
            ctx.beginPath();
            ctx.arc(cx, cy, 45 * STATE.zoom, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50 * STATE.zoom);
            gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Circle
            ctx.beginPath();
            ctx.arc(cx, cy, 40 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1a25';
            ctx.fill();
            ctx.strokeStyle = COLORS.center;
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Flag
            ctx.font = `${32 * STATE.zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(center.flag, cx, cy);
        }
        
        // Draw countries on rings
        rings.forEach(ring => {
            const countries = ringGroups[ring.type] || [];
            const count = countries.length;
            
            countries.forEach((rel, i) => {
                const angle = (2 * Math.PI * i / count) - Math.PI / 2;
                const x = cx + Math.cos(angle) * ring.radius;
                const y = cy + Math.sin(angle) * ring.radius;
                
                // Store position
                rel._x = x;
                rel._y = y;
                rel._radius = 20 * STATE.zoom;
                
                // Draw node
                const isSelected = STATE.selectedCountry === rel.code;
                const isHovered = STATE.hoveredCountry === rel.code;
                
                if (isSelected || isHovered) {
                    // Glow effect
                    ctx.beginPath();
                    ctx.arc(x, y, 28 * STATE.zoom, 0, Math.PI * 2);
                    ctx.fillStyle = `${COLORS[rel.type]}33`;
                    ctx.fill();
                }
                
                // Background circle
                ctx.beginPath();
                ctx.arc(x, y, 22 * STATE.zoom, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a25';
                ctx.fill();
                ctx.strokeStyle = isSelected ? COLORS.selected : COLORS[rel.type];
                ctx.lineWidth = isSelected ? 3 : 2;
                ctx.stroke();
                
                // Flag
                ctx.font = `${18 * STATE.zoom}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(rel.flag, x, y);
            });
        });
    }

    function drawForceView(ctx, cx, cy, width, height) {
        // Simple force-directed layout (placeholder - can be enhanced)
        const relations = STATE.filteredRelations;
        const radius = Math.min(width, height) * 0.4 * STATE.zoom;
        
        // Draw center
        const center = COUNTRY_MAP[STATE.centerCountry];
        if (center) {
            ctx.beginPath();
            ctx.arc(cx, cy, 40 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1a25';
            ctx.fill();
            ctx.strokeStyle = COLORS.center;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.font = `${28 * STATE.zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(center.flag, cx, cy);
        }
        
        // Distribute all countries in a spiral
        relations.forEach((rel, i) => {
            const angle = (i / relations.length) * Math.PI * 6; // Multiple spirals
            const r = 80 * STATE.zoom + (i / relations.length) * radius;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            
            rel._x = x;
            rel._y = y;
            rel._radius = 18 * STATE.zoom;
            
            // Connection line
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(x, y);
            ctx.strokeStyle = COLORS[rel.type];
            ctx.globalAlpha = 0.15;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
            
            // Node
            ctx.beginPath();
            ctx.arc(x, y, 18 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1a25';
            ctx.fill();
            ctx.strokeStyle = STATE.selectedCountry === rel.code ? COLORS.selected : COLORS[rel.type];
            ctx.lineWidth = 2;
            ctx.stroke();
            
            ctx.font = `${14 * STATE.zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(rel.flag, x, y);
        });
    }

    function switchView(view) {
        STATE.view = view;
        DOM.viewOrbital?.classList.toggle('active', view === 'orbital');
        DOM.viewForce?.classList.toggle('active', view === 'force');
        render();
    }

    // ============================================
    // CANVAS INTERACTIONS
    // ============================================
    function onCanvasMouseDown(e) {
        STATE.isDragging = true;
        STATE.dragStart = { x: e.clientX - STATE.panX, y: e.clientY - STATE.panY };
        DOM.canvas.style.cursor = 'grabbing';
    }

    function onCanvasMouseMove(e) {
        const rect = DOM.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (STATE.isDragging && STATE.dragStart) {
            STATE.panX = e.clientX - STATE.dragStart.x;
            STATE.panY = e.clientY - STATE.dragStart.y;
            render();
            return;
        }
        
        // Check hover
        let found = null;
        for (const rel of STATE.filteredRelations) {
            if (rel._x === undefined) continue;
            const dist = Math.sqrt((x - rel._x) ** 2 + (y - rel._y) ** 2);
            if (dist < rel._radius + 5) {
                found = rel;
                break;
            }
        }
        
        if (found) {
            STATE.hoveredCountry = found.code;
            DOM.canvas.style.cursor = 'pointer';
            showTooltip(e, found);
        } else {
            STATE.hoveredCountry = null;
            DOM.canvas.style.cursor = STATE.isDragging ? 'grabbing' : 'grab';
            hideTooltip();
        }
        
        render();
    }

    function onCanvasMouseUp() {
        STATE.isDragging = false;
        STATE.dragStart = null;
        DOM.canvas.style.cursor = 'grab';
    }

    function onCanvasMouseLeave() {
        STATE.isDragging = false;
        STATE.hoveredCountry = null;
        hideTooltip();
        render();
    }

    function onCanvasClick(e) {
        if (STATE.hoveredCountry) {
            selectCountry(STATE.hoveredCountry);
        }
    }

    function onCanvasDoubleClick(e) {
        if (STATE.hoveredCountry) {
            setCenter(STATE.hoveredCountry);
        }
    }

    function onCanvasWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        adjustZoom(delta);
    }

    function adjustZoom(delta) {
        STATE.zoom = Math.max(0.3, Math.min(3, STATE.zoom + delta));
        if (DOM.zoomLevel) {
            DOM.zoomLevel.textContent = Math.round(STATE.zoom * 100) + '%';
        }
        render();
    }

    function resetView() {
        STATE.zoom = 1;
        STATE.panX = 0;
        STATE.panY = 0;
        if (DOM.zoomLevel) DOM.zoomLevel.textContent = '100%';
        render();
    }

    // ============================================
    // TOOLTIP
    // ============================================
    function showTooltip(e, rel) {
        if (!DOM.tooltip) return;
        
        DOM.tooltip.querySelector('.tooltip-flag').textContent = rel.flag;
        DOM.tooltip.querySelector('.tooltip-name').textContent = rel.name;
        DOM.tooltip.querySelector('.tooltip-region').textContent = capitalize(rel.region);
        
        const typeEl = DOM.tooltip.querySelector('.tooltip-type');
        typeEl.textContent = capitalize(rel.type);
        typeEl.className = `tooltip-type ${rel.type}`;
        
        DOM.tooltip.querySelector('.tooltip-strength').textContent = `${rel.strength}/10`;
        
        // Position
        const x = e.pageX + 15;
        const y = e.pageY + 15;
        DOM.tooltip.style.left = x + 'px';
        DOM.tooltip.style.top = y + 'px';
        DOM.tooltip.classList.add('visible');
    }

    function hideTooltip() {
        DOM.tooltip?.classList.remove('visible');
    }

    // ============================================
    // COUNTRY SELECTION & DETAIL PANEL
    // ============================================
    function selectCountry(code) {
        STATE.selectedCountry = code;
        const rel = STATE.relations.find(r => r.code === code);
        
        if (rel) {
            showDetailPanel(rel);
        }
        
        render();
    }

    function showDetailPanel(rel) {
        if (!DOM.panelContent) return;
        
        DOM.panelPlaceholder.style.display = 'none';
        DOM.panelContent.classList.add('active');
        
        const center = COUNTRY_MAP[STATE.centerCountry];
        
        // Update header
        if (DOM.bilateralFlag1) DOM.bilateralFlag1.textContent = center.flag;
        if (DOM.bilateralName1) DOM.bilateralName1.textContent = center.name;
        if (DOM.bilateralFlag2) DOM.bilateralFlag2.textContent = rel.flag;
        if (DOM.bilateralName2) DOM.bilateralName2.textContent = rel.name;
        if (DOM.bilateralType) {
            DOM.bilateralType.textContent = capitalize(rel.type);
            DOM.bilateralType.style.background = COLORS[rel.type];
        }
        
        // Update score
        if (DOM.scoreNum) DOM.scoreNum.textContent = rel.strength;
        if (DOM.scoreFill) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (rel.strength / 10) * circumference;
            DOM.scoreFill.style.strokeDashoffset = offset;
            DOM.scoreFill.style.stroke = COLORS[rel.type];
        }
        if (DOM.scoreSummary) {
            const summaries = {
                allies: 'Strong alliance with deep cooperation across all dimensions',
                strategic: 'Strategic partnership with significant cooperation',
                neutral: 'Standard bilateral relations with room for growth',
                complex: 'Complex relationship with both cooperation and friction',
                conflict: 'Adversarial relationship with significant tensions'
            };
            DOM.scoreSummary.textContent = summaries[rel.type] || '';
        }
        
        // Render parameters
        renderParameters(rel);
        renderHistory(rel);
        renderAgreements(rel);
    }

    function renderParameters(rel) {
        if (!DOM.tabParameters) return;
        
        DOM.tabParameters.innerHTML = PARAMETERS.map(param => {
            const data = rel.params?.[param.id] || { score: 5, summary: '', details: '' };
            const score = data.score;
            const color = getScoreColor(score);
            
            return `
                <div class="param-card" data-param="${param.id}">
                    <div class="param-header">
                        <div class="param-icon" style="color: ${color}">
                            <i class="fas ${param.icon}"></i>
                        </div>
                        <div class="param-info">
                            <div class="param-name">${param.name}</div>
                            <div class="param-brief">${data.summary || param.description}</div>
                        </div>
                        <div class="param-score-wrap">
                            <div class="param-score-num" style="color: ${color}">${score}/10</div>
                            <div class="param-score-bar">
                                <div class="param-score-fill" style="width: ${score * 10}%; background: ${color}"></div>
                            </div>
                        </div>
                        <i class="fas fa-chevron-down param-toggle"></i>
                    </div>
                    <div class="param-details">
                        <div class="param-details-content">
                            <h5>Analysis</h5>
                            <p>${data.details || 'Detailed analysis based on diplomatic records, trade data, and geopolitical assessments.'}</p>
                            ${data.summary ? `<h5>Summary</h5><p>${data.summary}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Toggle details
        DOM.tabParameters.querySelectorAll('.param-card').forEach(card => {
            const header = card.querySelector('.param-header');
            const details = card.querySelector('.param-details');
            const toggle = card.querySelector('.param-toggle');
            
            header.addEventListener('click', () => {
                const isOpen = details.classList.contains('open');
                
                // Close all
                DOM.tabParameters.querySelectorAll('.param-details').forEach(d => d.classList.remove('open'));
                DOM.tabParameters.querySelectorAll('.param-toggle').forEach(t => t.classList.remove('open'));
                
                if (!isOpen) {
                    details.classList.add('open');
                    toggle.classList.add('open');
                }
            });
        });
    }

    function renderHistory(rel) {
        if (!DOM.tabHistory) return;
        
        // Generate some historical context based on relationship
        const events = [];
        
        if (rel.reasons && rel.reasons.length > 0) {
            rel.reasons.forEach(reason => {
                events.push(`<li><strong>${reason}</strong> - Shared organizational membership</li>`);
            });
        }
        
        const typeHistory = {
            allies: ['Long history of close cooperation', 'Multiple defense and economic agreements', 'Regular high-level exchanges'],
            strategic: ['Growing partnership in recent decades', 'Expanding areas of cooperation', 'Regular diplomatic engagement'],
            neutral: ['Standard bilateral relations', 'Limited historical engagement', 'Potential for growth'],
            complex: ['History of both cooperation and competition', 'Unresolved issues affecting ties', 'Efforts at engagement despite differences'],
            conflict: ['History of tensions and disputes', 'Limited dialogue', 'Significant disagreements on key issues']
        };
        
        DOM.tabHistory.innerHTML = `
            <div class="history-section">
                <h4>Relationship Overview</h4>
                <ul>
                    ${(typeHistory[rel.type] || []).map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
            ${events.length > 0 ? `
                <div class="history-section">
                    <h4>Key Connections</h4>
                    <ul>${events.join('')}</ul>
                </div>
            ` : ''}
        `;
    }

    function renderAgreements(rel) {
        if (!DOM.tabAgreements) return;
        
        const agreements = [];
        
        // Check shared alliances
        for (const [key, alliance] of Object.entries(ALLIANCES)) {
            if (alliance.members.includes(STATE.centerCountry) && alliance.members.includes(rel.code)) {
                agreements.push({
                    name: alliance.name,
                    type: alliance.type,
                    founded: alliance.founded
                });
            }
        }
        
        if (agreements.length === 0) {
            DOM.tabAgreements.innerHTML = `
                <div class="agreements-empty">
                    <i class="fas fa-file-contract"></i>
                    <p>No major shared organizational memberships identified.</p>
                </div>
            `;
        } else {
            DOM.tabAgreements.innerHTML = `
                <div class="agreements-list">
                    ${agreements.map(a => `
                        <div class="agreement-item">
                            <div class="agreement-name">${a.name}</div>
                            <div class="agreement-meta">
                                <span class="agreement-type">${capitalize(a.type)}</span>
                                <span class="agreement-year">Since ${a.founded}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    function hideDetailPanel() {
        STATE.selectedCountry = null;
        
        if (DOM.panelContent) DOM.panelContent.classList.remove('active');
        if (DOM.panelPlaceholder) DOM.panelPlaceholder.style.display = 'flex';
        
        render();
    }

    function switchPanelTab(tab) {
        DOM.panelTabs?.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`tab${capitalize(tab)}`)?.classList.add('active');
    }

    // ============================================
    // UTILITIES
    // ============================================
    function capitalize(str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    }

    function getScoreColor(score) {
        if (score >= 8) return COLORS.allies;
        if (score >= 6) return COLORS.strategic;
        if (score >= 4) return COLORS.neutral;
        if (score >= 2) return COLORS.complex;
        return COLORS.conflict;
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.UnityAtlas = {
        setCenter,
        selectCountry,
        render,
        getState: () => ({ ...STATE })
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
