// ============================================
// UNITY ATLAS - MAIN ENGINE
// Interactive Geopolitical Relations Visualization
// Version: 2026.04
// ============================================

(function() {
    'use strict';

    // ============================================
    // APPLICATION STATE
    // ============================================
    const STATE = {
        centerCountry: null,
        selectedCountry: null,
        relations: [],
        filteredRelations: [],
        filters: {
            region: 'all',
            type: 'all',
            search: ''
        },
        view: 'orbital', // 'orbital', 'list', 'map'
        theme: 'dark',
        isLoading: false,
        animationsEnabled: true,
        showLabels: true,
        autoRotate: false,
        rotationAngle: 0,
        hoveredCountry: null,
        comparisonMode: false,
        comparisonCountries: []
    };

    // ============================================
    // DOM ELEMENTS CACHE
    // ============================================
    let DOM = {};

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        orbitalRings: 5,
        ringRadii: [120, 200, 280, 360, 440],
        centerRadius: 80,
        countryNodeSize: 40,
        animationDuration: 500,
        rotationSpeed: 0.001,
        maxVisibleCountries: 50,
        searchDebounce: 300,
        tooltipDelay: 200
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🌍 Unity Atlas Engine Initializing...');
        
        cacheDOMElements();
        setupEventListeners();
        setupKeyboardShortcuts();
        loadInitialState();
        
        // Set default center country
        if (!STATE.centerCountry) {
            setCenter('US');
        }
        
        console.log('✅ Unity Atlas Engine Ready');
    }

    function cacheDOMElements() {
        DOM = {
            // Main containers
            app: document.getElementById('app'),
            orbitalView: document.getElementById('orbital-view'),
            centerNode: document.getElementById('center-node'),
            orbitRings: document.getElementById('orbit-rings'),
            countryNodes: document.getElementById('country-nodes'),
            connectionLines: document.getElementById('connection-lines'),
            
            // Panels
            infoPanel: document.getElementById('info-panel'),
            detailPanel: document.getElementById('detail-panel'),
            statsPanel: document.getElementById('stats-panel'),
            
            // Controls
            searchInput: document.getElementById('search-input'),
            regionFilter: document.getElementById('region-filter'),
            typeFilter: document.getElementById('type-filter'),
            viewToggle: document.getElementById('view-toggle'),
            
            // Country selection
            countrySelect: document.getElementById('country-select'),
            countrySearch: document.getElementById('country-search'),
            countryList: document.getElementById('country-list'),
            
            // Stats display
            allyCount: document.getElementById('ally-count'),
            strategicCount: document.getElementById('strategic-count'),
            neutralCount: document.getElementById('neutral-count'),
            complexCount: document.getElementById('complex-count'),
            conflictCount: document.getElementById('conflict-count'),
            totalCount: document.getElementById('total-count'),
            
            // Detail sections
            parameterGrid: document.getElementById('parameter-grid'),
            parameterRadar: document.getElementById('parameter-radar'),
            relationshipCard: document.getElementById('relationship-card'),
            
            // Modals
            countryModal: document.getElementById('country-modal'),
            settingsModal: document.getElementById('settings-modal'),
            
            // Loading
            loadingOverlay: document.getElementById('loading-overlay'),
            
            // Toast notifications
            toastContainer: document.getElementById('toast-container')
        };
    }

    function setupEventListeners() {
        // Search input
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', debounce(handleSearch, CONFIG.searchDebounce));
        }
        
        // Region filter
        if (DOM.regionFilter) {
            DOM.regionFilter.addEventListener('change', handleRegionFilter);
        }
        
        // Type filter
        if (DOM.typeFilter) {
            DOM.typeFilter.addEventListener('change', handleTypeFilter);
        }
        
        // Country select dropdown
        if (DOM.countrySelect) {
            DOM.countrySelect.addEventListener('change', (e) => setCenter(e.target.value));
        }
        
        // Country search
        if (DOM.countrySearch) {
            DOM.countrySearch.addEventListener('input', handleCountrySearch);
            DOM.countrySearch.addEventListener('focus', showCountryDropdown);
        }
        
        // View toggle
        if (DOM.viewToggle) {
            DOM.viewToggle.addEventListener('click', toggleView);
        }
        
        // Window resize
        window.addEventListener('resize', debounce(handleResize, 250));
        
        // Click outside to close dropdowns
        document.addEventListener('click', handleDocumentClick);
        
        // Escape key to close modals
        document.addEventListener('keydown', handleKeydown);
    }

    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger if typing in input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch(e.key) {
                case '/':
                    e.preventDefault();
                    DOM.searchInput?.focus();
                    break;
                case 'Escape':
                    closeAllPanels();
                    break;
                case 'r':
                    if (e.ctrlKey || e.metaKey) return;
                    toggleRotation();
                    break;
                case 'l':
                    toggleLabels();
                    break;
                case '1':
                    filterByType('allies');
                    break;
                case '2':
                    filterByType('strategic');
                    break;
                case '3':
                    filterByType('neutral');
                    break;
                case '4':
                    filterByType('complex');
                    break;
                case '5':
                    filterByType('conflict');
                    break;
                case '0':
                    filterByType('all');
                    break;
            }
        });
    }

    function loadInitialState() {
        // Load from localStorage if available
        const savedState = localStorage.getItem('unityAtlasState');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                STATE.centerCountry = parsed.centerCountry || null;
                STATE.theme = parsed.theme || 'dark';
                STATE.animationsEnabled = parsed.animationsEnabled !== false;
            } catch (e) {
                console.warn('Failed to parse saved state');
            }
        }
        
        // Apply theme
        applyTheme(STATE.theme);
        
        // Populate country selector
        populateCountrySelector();
    }

    function saveState() {
        const stateToSave = {
            centerCountry: STATE.centerCountry,
            theme: STATE.theme,
            animationsEnabled: STATE.animationsEnabled
        };
        localStorage.setItem('unityAtlasState', JSON.stringify(stateToSave));
    }

    // ============================================
    // CENTER COUNTRY MANAGEMENT
    // ============================================
    function setCenter(countryCode) {
        if (!COUNTRY_MAP[countryCode]) {
            console.error(`Country not found: ${countryCode}`);
            return;
        }
        
        showLoading();
        
        STATE.centerCountry = countryCode;
        STATE.selectedCountry = null;
        STATE.relations = generateRelationsForCountry(countryCode);
        
        applyFilters();
        renderCenterCountry();
        renderOrbitalView();
        renderStats();
        clearDetailPanel();
        saveState();
        
        hideLoading();
        
        // Show toast notification
        const country = COUNTRY_MAP[countryCode];
        showToast(`Center set to ${country.flag} ${country.name}`, 'success');
    }

    function renderCenterCountry() {
        const country = COUNTRY_MAP[STATE.centerCountry];
        if (!country || !DOM.centerNode) return;
        
        DOM.centerNode.innerHTML = `
            <div class="center-country" data-code="${country.code}">
                <div class="center-flag">${country.flag}</div>
                <div class="center-name">${country.name}</div>
                <div class="center-info">
                    <span class="center-capital">${country.capital}</span>
                    <span class="center-region">${capitalizeFirst(country.region)}</span>
                </div>
                <div class="center-stats">
                    <div class="center-stat">
                        <span class="stat-value">${formatNumber(country.population)}</span>
                        <span class="stat-label">Population</span>
                    </div>
                    <div class="center-stat">
                        <span class="stat-value">$${formatGDP(country.gdp)}</span>
                        <span class="stat-label">GDP</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add pulse animation
        const centerEl = DOM.centerNode.querySelector('.center-country');
        if (centerEl && STATE.animationsEnabled) {
            centerEl.classList.add('animate-pulse-once');
            setTimeout(() => centerEl.classList.remove('animate-pulse-once'), 1000);
        }
    }

    // ============================================
    // ORBITAL VIEW RENDERING
    // ============================================
    function renderOrbitalView() {
        renderOrbitRings();
        renderCountryNodes();
        renderConnectionLines();
    }

    function renderOrbitRings() {
        if (!DOM.orbitRings) return;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'orbit-rings-svg');
        svg.setAttribute('viewBox', '-500 -500 1000 1000');
        
        const ringLabels = ['Allies', 'Strategic', 'Neutral', 'Complex', 'Conflict'];
        const ringColors = [
            RELATION_COLORS.allies,
            RELATION_COLORS.strategic,
            RELATION_COLORS.neutral,
            RELATION_COLORS.complex,
            RELATION_COLORS.conflict
        ];
        
        CONFIG.ringRadii.forEach((radius, index) => {
            // Ring circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '0');
            circle.setAttribute('cy', '0');
            circle.setAttribute('r', radius);
            circle.setAttribute('class', `orbit-ring ring-${index + 1}`);
            circle.setAttribute('stroke', ringColors[index]);
            circle.setAttribute('stroke-opacity', '0.3');
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke-width', '1');
            circle.setAttribute('stroke-dasharray', '5,5');
            svg.appendChild(circle);
            
            // Ring label
            if (STATE.showLabels) {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', '0');
                text.setAttribute('y', -radius - 10);
                text.setAttribute('class', 'ring-label');
                text.setAttribute('fill', ringColors[index]);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('font-size', '12');
                text.setAttribute('opacity', '0.6');
                text.textContent = ringLabels[index];
                svg.appendChild(text);
            }
        });
        
        DOM.orbitRings.innerHTML = '';
        DOM.orbitRings.appendChild(svg);
    }

    function renderCountryNodes() {
        if (!DOM.countryNodes) return;
        
        DOM.countryNodes.innerHTML = '';
        
        const relations = STATE.filteredRelations.slice(0, CONFIG.maxVisibleCountries);
        
        // Group by ring
        const ringGroups = [[], [], [], [], []];
        relations.forEach(rel => {
            const ringIndex = Math.min(rel.ring - 1, 4);
            ringGroups[ringIndex].push(rel);
        });
        
        // Position countries on each ring
        ringGroups.forEach((group, ringIndex) => {
            const radius = CONFIG.ringRadii[ringIndex];
            const count = group.length;
            
            group.forEach((rel, i) => {
                const angle = (2 * Math.PI * i / count) - Math.PI / 2 + STATE.rotationAngle;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                const node = createCountryNode(rel, x, y);
                DOM.countryNodes.appendChild(node);
            });
        });
    }

    function createCountryNode(relation, x, y) {
        const node = document.createElement('div');
        node.className = `country-node node-${relation.type}`;
        node.dataset.code = relation.code;
        node.dataset.type = relation.type;
        
        node.style.transform = `translate(${x}px, ${y}px)`;
        
        node.innerHTML = `
            <div class="node-flag">${relation.flag}</div>
            <div class="node-tooltip">
                <div class="tooltip-header">
                    <span class="tooltip-flag">${relation.flag}</span>
                    <span class="tooltip-name">${relation.name}</span>
                </div>
                <div class="tooltip-type type-${relation.type}">${capitalizeFirst(relation.type)}</div>
                <div class="tooltip-strength">Strength: ${relation.strength}/10</div>
            </div>
        `;
        
        // Event listeners
        node.addEventListener('click', () => selectCountry(relation.code));
        node.addEventListener('mouseenter', () => handleNodeHover(relation, node));
        node.addEventListener('mouseleave', () => handleNodeLeave(relation, node));
        
        // Animation
        if (STATE.animationsEnabled) {
            node.style.opacity = '0';
            node.style.transform = `translate(${x}px, ${y}px) scale(0)`;
            
            requestAnimationFrame(() => {
                node.style.transition = `all ${CONFIG.animationDuration}ms ease-out`;
                node.style.opacity = '1';
                node.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            });
        }
        
        return node;
    }

    function renderConnectionLines() {
        if (!DOM.connectionLines) return;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'connection-lines-svg');
        svg.setAttribute('viewBox', '-500 -500 1000 1000');
        
        // Only render connections for selected country or on hover
        if (STATE.selectedCountry) {
            const relation = STATE.filteredRelations.find(r => r.code === STATE.selectedCountry);
            if (relation) {
                const ringIndex = Math.min(relation.ring - 1, 4);
                const radius = CONFIG.ringRadii[ringIndex];
                const groupCount = STATE.filteredRelations.filter(r => r.ring === relation.ring).length;
                const index = STATE.filteredRelations.filter(r => r.ring === relation.ring).indexOf(relation);
                
                const angle = (2 * Math.PI * index / groupCount) - Math.PI / 2 + STATE.rotationAngle;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', '0');
                line.setAttribute('y1', '0');
                line.setAttribute('x2', x);
                line.setAttribute('y2', y);
                line.setAttribute('class', `connection-line line-${relation.type}`);
                line.setAttribute('stroke', RELATION_COLORS[relation.type]);
                line.setAttribute('stroke-width', '2');
                line.setAttribute('stroke-opacity', '0.6');
                
                if (STATE.animationsEnabled) {
                    line.setAttribute('stroke-dasharray', '1000');
                    line.setAttribute('stroke-dashoffset', '1000');
                    line.innerHTML = `
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="0.5s" fill="freeze"/>
                    `;
                }
                
                svg.appendChild(line);
            }
        }
        
        DOM.connectionLines.innerHTML = '';
        DOM.connectionLines.appendChild(svg);
    }

    function handleNodeHover(relation, node) {
        STATE.hoveredCountry = relation.code;
        node.classList.add('hovered');
        
        // Show temporary connection line
        if (!STATE.selectedCountry) {
            renderTemporaryConnection(relation);
        }
    }

    function handleNodeLeave(relation, node) {
        STATE.hoveredCountry = null;
        node.classList.remove('hovered');
        
        // Remove temporary connection
        if (!STATE.selectedCountry) {
            DOM.connectionLines.innerHTML = '';
        }
    }

    function renderTemporaryConnection(relation) {
        // Similar to renderConnectionLines but for hover
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'connection-lines-svg');
        svg.setAttribute('viewBox', '-500 -500 1000 1000');
        
        const ringIndex = Math.min(relation.ring - 1, 4);
        const radius = CONFIG.ringRadii[ringIndex];
        const group = STATE.filteredRelations.filter(r => r.ring === relation.ring);
        const index = group.indexOf(relation);
        
        const angle = (2 * Math.PI * index / group.length) - Math.PI / 2 + STATE.rotationAngle;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '0');
        line.setAttribute('y1', '0');
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', RELATION_COLORS[relation.type]);
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-opacity', '0.4');
        line.setAttribute('stroke-dasharray', '4,4');
        
        svg.appendChild(line);
        DOM.connectionLines.innerHTML = '';
        DOM.connectionLines.appendChild(svg);
    }

    // ============================================
    // COUNTRY SELECTION
    // ============================================
    function selectCountry(countryCode) {
        if (STATE.selectedCountry === countryCode) {
            // Deselect
            STATE.selectedCountry = null;
            clearDetailPanel();
            updateNodeSelection();
            renderConnectionLines();
            return;
        }
        
        STATE.selectedCountry = countryCode;
        const relation = STATE.relations.find(r => r.code === countryCode);
        
        if (relation) {
            renderDetailPanel(relation);
            updateNodeSelection();
            renderConnectionLines();
        }
    }

    function updateNodeSelection() {
        const nodes = DOM.countryNodes?.querySelectorAll('.country-node');
        if (!nodes) return;
        
        nodes.forEach(node => {
            if (node.dataset.code === STATE.selectedCountry) {
                node.classList.add('selected');
            } else {
                node.classList.remove('selected');
            }
        });
    }

    // ============================================
    // DETAIL PANEL
    // ============================================
    function renderDetailPanel(relation) {
        if (!DOM.detailPanel) return;
        
        const centerCountry = COUNTRY_MAP[STATE.centerCountry];
        const targetCountry = COUNTRY_MAP[relation.code];
        
        DOM.detailPanel.innerHTML = `
            <div class="detail-content">
                <div class="detail-header">
                    <button class="detail-close" onclick="UnityAtlas.closeDetail()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="detail-countries">
                        <div class="detail-country">
                            <span class="detail-flag">${centerCountry.flag}</span>
                            <span class="detail-name">${centerCountry.name}</span>
                        </div>
                        <div class="detail-relation-icon">
                            <i class="fas fa-arrows-alt-h"></i>
                        </div>
                        <div class="detail-country">
                            <span class="detail-flag">${relation.flag}</span>
                            <span class="detail-name">${relation.name}</span>
                        </div>
                    </div>
                    <div class="detail-type-badge type-${relation.type}">
                        ${capitalizeFirst(relation.type)}
                    </div>
                </div>
                
                <div class="detail-overview">
                    <div class="overview-item">
                        <div class="overview-label">Relationship Strength</div>
                        <div class="overview-value">
                            <div class="strength-bar">
                                <div class="strength-fill" style="width: ${relation.strength * 10}%; background: ${RELATION_COLORS[relation.type]}"></div>
                            </div>
                            <span class="strength-text">${relation.strength}/10</span>
                        </div>
                    </div>
                    <div class="overview-item">
                        <div class="overview-label">Key Factors</div>
                        <div class="overview-tags">
                            ${relation.reasons.map(r => `<span class="reason-tag">${r}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="detail-tabs">
                    <button class="detail-tab active" data-tab="parameters">
                        <i class="fas fa-chart-bar"></i> Parameters
                    </button>
                    <button class="detail-tab" data-tab="radar">
                        <i class="fas fa-chart-pie"></i> Radar
                    </button>
                    <button class="detail-tab" data-tab="timeline">
                        <i class="fas fa-history"></i> Timeline
                    </button>
                </div>
                
                <div class="detail-tab-content">
                    <div class="tab-panel active" id="tab-parameters">
                        ${renderParameterGrid(relation.params)}
                    </div>
                    <div class="tab-panel" id="tab-radar">
                        <canvas id="radar-chart" width="300" height="300"></canvas>
                    </div>
                    <div class="tab-panel" id="tab-timeline">
                        ${renderTimeline(relation)}
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="action-btn" onclick="UnityAtlas.setCenter('${relation.code}')">
                        <i class="fas fa-crosshairs"></i> Set as Center
                    </button>
                    <button class="action-btn" onclick="UnityAtlas.compareCountries()">
                        <i class="fas fa-balance-scale"></i> Compare
                    </button>
                    <button class="action-btn" onclick="UnityAtlas.exportData('${relation.code}')">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
        `;
        
        // Setup tab switching
        setupDetailTabs();
        
        // Render radar chart
        setTimeout(() => renderRadarChart(relation.params), 100);
        
        // Show panel with animation
        DOM.detailPanel.classList.add('visible');
    }

    function renderParameterGrid(params) {
        return `
            <div class="parameter-grid">
                ${PARAMETERS.map(param => {
                    const data = params[param.id];
                    const score = data?.score || 5;
                    const color = getScoreColor(score);
                    
                    return `
                        <div class="parameter-card" data-param="${param.id}">
                            <div class="param-header">
                                <div class="param-icon" style="color: ${color}">
                                    <i class="fas ${param.icon}"></i>
                                </div>
                                <div class="param-info">
                                    <div class="param-name">${param.name}</div>
                                    <div class="param-category">${capitalizeFirst(param.category)}</div>
                                </div>
                                <div class="param-score" style="background: ${color}">${score}</div>
                            </div>
                            <div class="param-bar">
                                <div class="param-fill" style="width: ${score * 10}%; background: ${color}"></div>
                            </div>
                            <div class="param-summary">${data?.summary || ''}</div>
                            <div class="param-expand">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="param-details">${data?.details || ''}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    function renderRadarChart(params) {
        const canvas = document.getElementById('radar-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 40;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Use subset of parameters for radar
        const radarParams = PARAMETERS.slice(0, 8);
        const numPoints = radarParams.length;
        const angleStep = (2 * Math.PI) / numPoints;
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            for (let j = 0; j <= numPoints; j++) {
                const angle = j * angleStep - Math.PI / 2;
                const r = (radius * i) / 5;
                const x = centerX + Math.cos(angle) * r;
                const y = centerY + Math.sin(angle) * r;
                
                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }
        
        // Draw axes
        for (let i = 0; i < numPoints; i++) {
            const angle = i * angleStep - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + Math.cos(angle) * radius,
                centerY + Math.sin(angle) * radius
            );
            ctx.stroke();
        }
        
        // Draw labels
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '11px system-ui';
        ctx.textAlign = 'center';
        
        radarParams.forEach((param, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * (radius + 25);
            const y = centerY + Math.sin(angle) * (radius + 25);
            
            // Truncate long names
            const name = param.name.length > 12 ? param.name.substring(0, 12) + '...' : param.name;
            ctx.fillText(name, x, y + 4);
        });
        
        // Draw data
        const scores = radarParams.map(p => params[p.id]?.score || 5);
        
        ctx.beginPath();
        scores.forEach((score, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = (radius * score) / 10;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.closePath();
        
        // Fill
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();
        
        // Stroke
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw points
        scores.forEach((score, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = (radius * score) / 10;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = getScoreColor(score);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.stroke();
        });
    }

    function renderTimeline(relation) {
        // Generate mock timeline events based on relationship
        const events = generateTimelineEvents(relation);
        
        return `
            <div class="timeline">
                ${events.map(event => `
                    <div class="timeline-event">
                        <div class="timeline-date">${event.year}</div>
                        <div class="timeline-marker" style="background: ${event.color}"></div>
                        <div class="timeline-content">
                            <div class="timeline-title">${event.title}</div>
                            <div class="timeline-desc">${event.description}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function generateTimelineEvents(relation) {
        const events = [];
        const currentYear = 2026;
        
        // Add events based on relationship type and shared alliances
        relation.reasons.forEach((reason, index) => {
            const alliance = Object.values(ALLIANCES).find(a => a.name === reason);
            if (alliance) {
                events.push({
                    year: alliance.founded,
                    title: `Joined ${alliance.name}`,
                    description: `Both nations became members of ${reason}`,
                    color: RELATION_COLORS.strategic
                });
            }
        });
        
        // Add generic events based on relationship type
        if (relation.type === 'conflict') {
            events.push({
                year: currentYear - Math.floor(Math.random() * 10),
                title: 'Diplomatic Tensions',
                description: 'Relations deteriorated due to policy disagreements',
                color: RELATION_COLORS.conflict
            });
        } else if (relation.type === 'allies') {
            events.push({
                year: currentYear - Math.floor(Math.random() * 20),
                title: 'Strategic Partnership',
                description: 'Formal alliance or partnership agreement signed',
                color: RELATION_COLORS.allies
            });
        }
        
        // Sort by year
        events.sort((a, b) => b.year - a.year);
        
        return events.slice(0, 5);
    }

    function setupDetailTabs() {
        const tabs = DOM.detailPanel?.querySelectorAll('.detail-tab');
        const panels = DOM.detailPanel?.querySelectorAll('.tab-panel');
        
        tabs?.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                panels?.forEach(p => p.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`tab-${tabName}`)?.classList.add('active');
            });
        });
        
        // Parameter card expand/collapse
        const paramCards = DOM.detailPanel?.querySelectorAll('.parameter-card');
        paramCards?.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });
        });
    }

    function clearDetailPanel() {
        if (DOM.detailPanel) {
            DOM.detailPanel.classList.remove('visible');
            setTimeout(() => {
                DOM.detailPanel.innerHTML = '';
            }, 300);
        }
        renderConnectionLines();
    }

    // ============================================
    // STATISTICS
    // ============================================
    function renderStats() {
        const stats = getRelationStats(STATE.relations);
        
        if (DOM.allyCount) DOM.allyCount.textContent = stats.allies;
        if (DOM.strategicCount) DOM.strategicCount.textContent = stats.strategic;
        if (DOM.neutralCount) DOM.neutralCount.textContent = stats.neutral;
        if (DOM.complexCount) DOM.complexCount.textContent = stats.complex;
        if (DOM.conflictCount) DOM.conflictCount.textContent = stats.conflict;
        if (DOM.totalCount) DOM.totalCount.textContent = stats.total;
        
        // Animate stat counters
        animateStats();
    }

    function animateStats() {
        const statValues = document.querySelectorAll('.stat-value-animate');
        statValues.forEach(el => {
            const target = parseInt(el.textContent);
            animateCounter(el, 0, target, 500);
        });
    }

    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            
            element.textContent = Math.round(start + (end - start) * eased);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    // ============================================
    // FILTERING
    // ============================================
    function applyFilters() {
        let filtered = [...STATE.relations];
        
        // Region filter
        if (STATE.filters.region !== 'all') {
            filtered = filtered.filter(r => r.region === STATE.filters.region);
        }
        
        // Type filter
        if (STATE.filters.type !== 'all') {
            filtered = filtered.filter(r => r.type === STATE.filters.type);
        }
        
        // Search filter
        if (STATE.filters.search) {
            const search = STATE.filters.search.toLowerCase();
            filtered = filtered.filter(r => 
                r.name.toLowerCase().includes(search) ||
                r.code.toLowerCase().includes(search) ||
                r.capital.toLowerCase().includes(search)
            );
        }
        
        STATE.filteredRelations = filtered;
    }

    function handleSearch(e) {
        STATE.filters.search = e.target.value;
        applyFilters();
        renderOrbitalView();
    }

    function handleRegionFilter(e) {
        STATE.filters.region = e.target.value;
        applyFilters();
        renderOrbitalView();
    }

    function handleTypeFilter(e) {
        STATE.filters.type = e.target.value;
        applyFilters();
        renderOrbitalView();
    }

    function filterByType(type) {
        STATE.filters.type = type;
        if (DOM.typeFilter) DOM.typeFilter.value = type;
        applyFilters();
        renderOrbitalView();
        showToast(`Filtering by: ${type === 'all' ? 'All types' : capitalizeFirst(type)}`, 'info');
    }

    // ============================================
    // COUNTRY SELECTOR
    // ============================================
    function populateCountrySelector() {
        if (!DOM.countrySelect) return;
        
        // Group by region
        const regions = {
            asia: { label: 'Asia', countries: [] },
            africa: { label: 'Africa', countries: [] },
            europe: { label: 'Europe', countries: [] },
            americas: { label: 'Americas', countries: [] },
            oceania: { label: 'Oceania', countries: [] }
        };
        
        COUNTRIES.forEach(c => {
            if (regions[c.region]) {
                regions[c.region].countries.push(c);
            }
        });
        
        let html = '<option value="">Select a country...</option>';
        
        Object.values(regions).forEach(region => {
            html += `<optgroup label="${region.label}">`;
            region.countries.forEach(c => {
                html += `<option value="${c.code}" ${c.code === STATE.centerCountry ? 'selected' : ''}>
                    ${c.flag} ${c.name}
                </option>`;
            });
            html += '</optgroup>';
        });
        
        DOM.countrySelect.innerHTML = html;
    }

    function handleCountrySearch(e) {
        const query = e.target.value.toLowerCase();
        
        if (!DOM.countryList) return;
        
        if (query.length < 2) {
            DOM.countryList.innerHTML = '';
            DOM.countryList.classList.remove('visible');
            return;
        }
        
        const matches = COUNTRIES.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.code.toLowerCase().includes(query) ||
            c.capital.toLowerCase().includes(query)
        ).slice(0, 10);
        
        DOM.countryList.innerHTML = matches.map(c => `
            <div class="country-list-item" data-code="${c.code}">
                <span class="list-flag">${c.flag}</span>
                <span class="list-name">${c.name}</span>
                <span class="list-region">${capitalizeFirst(c.region)}</span>
            </div>
        `).join('');
        
        DOM.countryList.classList.add('visible');
        
        // Add click handlers
        DOM.countryList.querySelectorAll('.country-list-item').forEach(item => {
            item.addEventListener('click', () => {
                setCenter(item.dataset.code);
                DOM.countrySearch.value = '';
                DOM.countryList.classList.remove('visible');
            });
        });
    }

    function showCountryDropdown() {
        if (DOM.countryList && DOM.countrySearch?.value.length >= 2) {
            DOM.countryList.classList.add('visible');
        }
    }

    // ============================================
    // VIEW MANAGEMENT
    // ============================================
    function toggleView() {
        const views = ['orbital', 'list', 'map'];
        const currentIndex = views.indexOf(STATE.view);
        STATE.view = views[(currentIndex + 1) % views.length];
        
        renderCurrentView();
        
        showToast(`Switched to ${capitalizeFirst(STATE.view)} view`, 'info');
    }

    function renderCurrentView() {
        switch (STATE.view) {
            case 'orbital':
                renderOrbitalView();
                break;
            case 'list':
                renderListView();
                break;
            case 'map':
                renderMapView();
                break;
        }
    }

    function renderListView() {
        if (!DOM.orbitalView) return;
        
        const relations = STATE.filteredRelations;
        
        DOM.orbitalView.innerHTML = `
            <div class="list-view">
                <div class="list-header">
                    <div class="list-col-country">Country</div>
                    <div class="list-col-type">Type</div>
                    <div class="list-col-strength">Strength</div>
                    <div class="list-col-region">Region</div>
                    <div class="list-col-actions">Actions</div>
                </div>
                <div class="list-body">
                    ${relations.map(rel => `
                        <div class="list-row" data-code="${rel.code}">
                            <div class="list-col-country">
                                <span class="list-flag">${rel.flag}</span>
                                <span class="list-name">${rel.name}</span>
                            </div>
                            <div class="list-col-type">
                                <span class="type-badge type-${rel.type}">${capitalizeFirst(rel.type)}</span>
                            </div>
                            <div class="list-col-strength">
                                <div class="mini-bar">
                                    <div class="mini-fill" style="width: ${rel.strength * 10}%; background: ${RELATION_COLORS[rel.type]}"></div>
                                </div>
                                <span>${rel.strength}/10</span>
                            </div>
                            <div class="list-col-region">${capitalizeFirst(rel.region)}</div>
                            <div class="list-col-actions">
                                <button class="action-btn-small" onclick="UnityAtlas.selectCountry('${rel.code}')">
                                    <i class="fas fa-info-circle"></i>
                                </button>
                                <button class="action-btn-small" onclick="UnityAtlas.setCenter('${rel.code}')">
                                    <i class="fas fa-crosshairs"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderMapView() {
        if (!DOM.orbitalView) return;
        
        DOM.orbitalView.innerHTML = `
            <div class="map-view">
                <div class="map-container" id="world-map">
                    <svg viewBox="0 0 1000 500" class="world-map-svg">
                        ${generateSimpleWorldMap()}
                    </svg>
                </div>
                <div class="map-legend">
                    ${Object.entries(RELATION_COLORS).map(([type, color]) => `
                        <div class="legend-item">
                            <span class="legend-color" style="background: ${color}"></span>
                            <span class="legend-label">${capitalizeFirst(type)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add country markers
        addMapMarkers();
    }

    function generateSimpleWorldMap() {
        // Simplified world map outline
        return `
            <rect fill="var(--bg-secondary)" width="1000" height="500"/>
            <!-- Simplified continents would go here -->
            <text x="500" y="250" text-anchor="middle" fill="var(--text-secondary)" font-size="16">
                World Map View - Interactive markers below
            </text>
        `;
    }

    function addMapMarkers() {
        const mapContainer = document.getElementById('world-map');
        if (!mapContainer) return;
        
        STATE.filteredRelations.forEach(rel => {
            const country = COUNTRY_MAP[rel.code];
            if (!country) return;
            
            // Convert coordinates to map position
            const x = ((country.coords[1] + 180) / 360) * 100;
            const y = ((90 - country.coords[0]) / 180) * 100;
            
            const marker = document.createElement('div');
            marker.className = `map-marker marker-${rel.type}`;
            marker.style.left = `${x}%`;
            marker.style.top = `${y}%`;
            marker.innerHTML = rel.flag;
            marker.title = rel.name;
            
            marker.addEventListener('click', () => selectCountry(rel.code));
            
            mapContainer.appendChild(marker);
        });
        
        // Add center country marker
        const centerCountry = COUNTRY_MAP[STATE.centerCountry];
        if (centerCountry) {
            const x = ((centerCountry.coords[1] + 180) / 360) * 100;
            const y = ((90 - centerCountry.coords[0]) / 180) * 100;
            
            const marker = document.createElement('div');
            marker.className = 'map-marker marker-center';
            marker.style.left = `${x}%`;
            marker.style.top = `${y}%`;
            marker.innerHTML = centerCountry.flag;
            marker.title = `${centerCountry.name} (Center)`;
            
            mapContainer.appendChild(marker);
        }
    }

    // ============================================
    // ROTATION / ANIMATION
    // ============================================
    function toggleRotation() {
        STATE.autoRotate = !STATE.autoRotate;
        
        if (STATE.autoRotate) {
            startRotation();
            showToast('Auto-rotation enabled', 'info');
        } else {
            showToast('Auto-rotation disabled', 'info');
        }
    }

    function startRotation() {
        if (!STATE.autoRotate) return;
        
        STATE.rotationAngle += CONFIG.rotationSpeed;
        
        if (STATE.view === 'orbital') {
            renderCountryNodes();
        }
        
        requestAnimationFrame(startRotation);
    }

    function toggleLabels() {
        STATE.showLabels = !STATE.showLabels;
        renderOrbitalView();
        showToast(`Labels ${STATE.showLabels ? 'shown' : 'hidden'}`, 'info');
    }

    // ============================================
    // COMPARISON MODE
    // ============================================
    function compareCountries() {
        STATE.comparisonMode = true;
        
        if (STATE.selectedCountry && !STATE.comparisonCountries.includes(STATE.selectedCountry)) {
            STATE.comparisonCountries.push(STATE.selectedCountry);
        }
        
        if (STATE.comparisonCountries.length >= 2) {
            renderComparisonView();
        } else {
            showToast('Select another country to compare', 'info');
        }
    }

    function renderComparisonView() {
        // Implementation for comparison view
        const countries = STATE.comparisonCountries.map(code => {
            const relation = STATE.relations.find(r => r.code === code);
            return { code, relation };
        });
        
        // Create comparison modal/panel
        showToast('Comparison view coming soon!', 'info');
    }

    // ============================================
    // DATA EXPORT
    // ============================================
    function exportData(countryCode) {
        const relation = STATE.relations.find(r => r.code === countryCode);
        if (!relation) return;
        
        const centerCountry = COUNTRY_MAP[STATE.centerCountry];
        
        const exportObj = {
            exportDate: new Date().toISOString(),
            centerCountry: {
                code: STATE.centerCountry,
                name: centerCountry.name
            },
            targetCountry: {
                code: relation.code,
                name: relation.name,
                region: relation.region,
                capital: relation.capital
            },
            relationship: {
                type: relation.type,
                strength: relation.strength,
                reasons: relation.reasons
            },
            parameters: relation.params
        };
        
        const dataStr = JSON.stringify(exportObj, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${STATE.centerCountry}-${countryCode}-relations.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Data exported successfully', 'success');
    }

    // ============================================
    // UI UTILITIES
    // ============================================
    function showLoading() {
        STATE.isLoading = true;
        if (DOM.loadingOverlay) {
            DOM.loadingOverlay.classList.add('visible');
        }
    }

    function hideLoading() {
        STATE.isLoading = false;
        if (DOM.loadingOverlay) {
            DOM.loadingOverlay.classList.remove('visible');
        }
    }

    function showToast(message, type = 'info') {
        if (!DOM.toastContainer) {
            DOM.toastContainer = document.createElement('div');
            DOM.toastContainer.id = 'toast-container';
            document.body.appendChild(DOM.toastContainer);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        
        toast.innerHTML = `
            <i class="fas ${icons[type] || icons.info}"></i>
            <span>${message}</span>
        `;
        
        DOM.toastContainer.appendChild(toast);
        
        // Trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });
        
        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        STATE.theme = theme;
        saveState();
    }

    function handleResize() {
        if (STATE.view === 'orbital') {
            renderOrbitalView();
        }
    }

    function handleDocumentClick(e) {
        // Close country dropdown if clicking outside
        if (DOM.countryList && !e.target.closest('.country-search-container')) {
            DOM.countryList.classList.remove('visible');
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeAllPanels();
        }
    }

    function closeAllPanels() {
        clearDetailPanel();
        DOM.countryList?.classList.remove('visible');
        STATE.comparisonMode = false;
        STATE.comparisonCountries = [];
    }

    function closeDetail() {
        STATE.selectedCountry = null;
        clearDetailPanel();
        updateNodeSelection();
    }

    // ============================================
    // HELPER FUNCTIONS
    // ============================================
    function capitalizeFirst(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    function formatGDP(gdp) {
        if (gdp >= 1000) {
            return (gdp / 1000).toFixed(2) + 'T';
        }
        return gdp.toFixed(1) + 'B';
    }

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

    // ============================================
    // PUBLIC API
    // ============================================
    window.UnityAtlas = {
        // Initialization
        init,
        
        // Core functions
        setCenter,
        selectCountry,
        closeDetail,
        
        // Filtering
        filterByType,
        applyFilters,
        
        // Views
        toggleView,
        toggleRotation,
        toggleLabels,
        
        // Features
        compareCountries,
        exportData,
        
        // UI
        showToast,
        applyTheme,
        
        // State access
        getState: () => ({ ...STATE }),
        getRelations: () => [...STATE.relations],
        getFilteredRelations: () => [...STATE.filteredRelations],
        
        // Data access
        COUNTRIES,
        COUNTRY_MAP,
        PARAMETERS,
        ALLIANCES,
        RELATION_COLORS
    };

    // ============================================
    // AUTO-INITIALIZE
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
