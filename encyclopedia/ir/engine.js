/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * UNITY ATLAS - Application Engine
 * Geotopia Encyclopedia - International Relations Visualization
 * 
 * Version: 2.0 (Fixed)
 * ═══════════════════════════════════════════════════════════════════════════════
 */

'use strict';

const UnityAtlas = (function() {

    // ═══════════════════════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════════════════════

    const state = {
        centerCountry: 'IN',
        selectedCountry: null,
        focusMode: false,
        zoom: 1,
        pan: { x: 0, y: 0 },
        isPanning: false,
        lastPan: { x: 0, y: 0 },
        filters: {
            region: 'all',
            type: 'all'
        },
        settings: {
            showLabels: true,
            showConnections: true,
            animationsEnabled: true,
            maxNodes: 50
        },
        isLoading: true,
        dropdownRegion: 'all'
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // DOM REFERENCES
    // ═══════════════════════════════════════════════════════════════════════════

    const DOM = {};

    function cacheDOMElements() {
        // Hero
        DOM.hero = document.getElementById('hero');
        DOM.ctaExplore = document.getElementById('ctaExplore');
        DOM.scrollIndicator = document.getElementById('scrollIndicator');
        DOM.heroParticles = document.getElementById('heroParticles');
        
        // App
        DOM.app = document.getElementById('app');
        DOM.loadingOverlay = document.getElementById('loadingOverlay');
        DOM.loaderProgress = document.getElementById('loaderProgress');
        
        // Header
        DOM.appHeader = document.getElementById('appHeader');
        DOM.globalSearch = document.getElementById('globalSearch');
        DOM.searchDropdown = document.getElementById('searchDropdown');
        DOM.regionFilter = document.getElementById('regionFilter');
        DOM.typeFilter = document.getElementById('typeFilter');
        DOM.settingsBtn = document.getElementById('settingsBtn');
        
        // Sidebar - Center Country
        DOM.currentCenter = document.getElementById('currentCenter');
        DOM.centerFlag = document.getElementById('centerFlag');
        DOM.centerName = document.getElementById('centerName');
        DOM.centerCapital = document.getElementById('centerCapital');
        DOM.centerRegion = document.getElementById('centerRegion');
        DOM.changeCenterBtn = document.getElementById('changeCenterBtn');
        
        // Sidebar - Country Dropdown
        DOM.countrySelector = document.getElementById('countrySelector');
        DOM.countrySelectorBtn = document.getElementById('countrySelectorBtn');
        DOM.countryDropdown = document.getElementById('countryDropdown');
        DOM.countrySearchInput = document.getElementById('countrySearchInput');
        DOM.clearCountrySearch = document.getElementById('clearCountrySearch');
        DOM.dropdownCountryList = document.getElementById('dropdownCountryList');
        DOM.resultsCount = document.getElementById('resultsCount');
        
        // Sidebar - Stats
        DOM.relationStats = document.getElementById('relationStats');
        DOM.alliesCount = document.getElementById('alliesCount');
        DOM.strategicCount = document.getElementById('strategicCount');
        DOM.neutralCount = document.getElementById('neutralCount');
        DOM.complexCount = document.getElementById('complexCount');
        DOM.conflictCount = document.getElementById('conflictCount');
        
        // Sidebar - Actions
        DOM.randomCountry = document.getElementById('randomCountry');
        DOM.resetView = document.getElementById('resetView');
        DOM.compareMode = document.getElementById('compareMode');
        
        // Canvas
        DOM.canvasContainer = document.getElementById('canvasContainer');
        DOM.radialCanvas = document.getElementById('radialCanvas');
        DOM.canvasLegend = document.getElementById('canvasLegend');
        DOM.zoomControls = document.getElementById('zoomControls');
        DOM.zoomIn = document.getElementById('zoomIn');
        DOM.zoomOut = document.getElementById('zoomOut');
        DOM.zoomReset = document.getElementById('zoomReset');
        DOM.zoomLevel = document.getElementById('zoomLevel');
        DOM.nodeTooltip = document.getElementById('nodeTooltip');
        DOM.focusIndicator = document.getElementById('focusIndicator');
        DOM.closeFocus = document.getElementById('closeFocus');
        
        // Parameter Panel
        DOM.parameterPanel = document.getElementById('parameterPanel');
        DOM.togglePanel = document.getElementById('togglePanel');
        DOM.parameterContent = document.getElementById('parameterContent');
        
        // Modal
        DOM.modalOverlay = document.getElementById('modalOverlay');
        DOM.relationModal = document.getElementById('relationModal');
        DOM.modalFlag1 = document.getElementById('modalFlag1');
        DOM.modalName1 = document.getElementById('modalName1');
        DOM.modalFlag2 = document.getElementById('modalFlag2');
        DOM.modalName2 = document.getElementById('modalName2');
        DOM.modalBadge = document.getElementById('modalBadge');
        DOM.modalClose = document.getElementById('modalClose');
        DOM.scoreCircle = document.getElementById('scoreCircle');
        DOM.scoreProgress = document.getElementById('scoreProgress');
        DOM.scoreValue = document.getElementById('scoreValue');
        DOM.scoreDescription = document.getElementById('scoreDescription');
        DOM.modalParameters = document.getElementById('modalParameters');
        DOM.modalSetCenter = document.getElementById('modalSetCenter');
        DOM.modalCompare = document.getElementById('modalCompare');
        DOM.modalCloseBtn = document.getElementById('modalCloseBtn');
        
        // Compare Modal
        DOM.compareOverlay = document.getElementById('compareOverlay');
        DOM.compareModal = document.getElementById('compareModal');
        DOM.compareContent = document.getElementById('compareContent');
        DOM.compareClose = document.getElementById('compareClose');
        
        // Settings Modal
        DOM.settingsOverlay = document.getElementById('settingsOverlay');
        DOM.settingsModal = document.getElementById('settingsModal');
        DOM.settingsClose = document.getElementById('settingsClose');
        DOM.showLabels = document.getElementById('showLabels');
        DOM.showConnections = document.getElementById('showConnections');
        DOM.animationsEnabled = document.getElementById('animationsEnabled');
        DOM.maxNodes = document.getElementById('maxNodes');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════════

    function init() {
        console.log('Unity Atlas initializing...');
        cacheDOMElements();
        createHeroParticles();
        bindEvents();
        simulateLoading();
    }

    function simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    completeLoading();
                }, 300);
            }
            if (DOM.loaderProgress) {
                DOM.loaderProgress.style.width = `${progress}%`;
            }
        }, 100);
    }

    function completeLoading() {
        console.log('Loading complete, initializing visualization...');
        state.isLoading = false;
        
        if (DOM.loadingOverlay) {
            DOM.loadingOverlay.classList.add('hidden');
        }
        
        // Initialize the visualization
        updateCenterCountry(state.centerCountry);
        initCountryDropdown();
        
        // Delay graph rendering to ensure container is sized
        setTimeout(() => {
            renderRadialGraph();
        }, 200);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // HERO SECTION
    // ═══════════════════════════════════════════════════════════════════════════

    function createHeroParticles() {
        const container = DOM.heroParticles;
        if (!container) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            container.appendChild(particle);
        }
    }

    function scrollToApp() {
        if (DOM.app) {
            DOM.app.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CENTER COUNTRY MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════════

    function updateCenterCountry(code) {
        const country = UnityAtlasData.getCountry(code);
        if (!country) {
            console.warn('Country not found:', code);
            return;
        }
        
        console.log('Setting center country:', country.name);
        
        state.centerCountry = code;
        state.selectedCountry = null;
        state.focusMode = false;
        
        // Update sidebar display
        if (DOM.centerFlag) DOM.centerFlag.textContent = country.flag;
        if (DOM.centerName) DOM.centerName.textContent = country.name;
        if (DOM.centerCapital) {
            DOM.centerCapital.innerHTML = `<i class="fas fa-landmark"></i> ${country.capital}`;
        }
        if (DOM.centerRegion) {
            const regionInfo = UnityAtlasData.REGIONS[country.region];
            DOM.centerRegion.innerHTML = `<i class="fas fa-globe"></i> ${regionInfo ? regionInfo.name : country.region}`;
        }
        
        // Reset dropdown button text
        if (DOM.countrySelectorBtn) {
            const spanEl = DOM.countrySelectorBtn.querySelector('span');
            if (spanEl) spanEl.textContent = 'Select a Country';
        }
        
        // Update stats
        const stats = UnityAtlasData.getRelationshipStats(code);
        if (DOM.alliesCount) DOM.alliesCount.textContent = stats.allies;
        if (DOM.strategicCount) DOM.strategicCount.textContent = stats.strategic;
        if (DOM.neutralCount) DOM.neutralCount.textContent = stats.neutral;
        if (DOM.complexCount) DOM.complexCount.textContent = stats.complex;
        if (DOM.conflictCount) DOM.conflictCount.textContent = stats.conflict;
        
        // Update focus indicator
        if (DOM.focusIndicator) DOM.focusIndicator.classList.remove('visible');
        if (DOM.parameterPanel) DOM.parameterPanel.classList.remove('open');
        
        // Re-render dropdown and graph
        renderDropdownCountries(state.dropdownRegion);
        renderRadialGraph();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // COUNTRY SELECTOR DROPDOWN
    // ═══════════════════════════════════════════════════════════════════════════

    function initCountryDropdown() {
        renderDropdownCountries('all');
    }

    function toggleCountryDropdown() {
        const btn = DOM.countrySelectorBtn;
        const dropdown = DOM.countryDropdown;
        
        if (!btn || !dropdown) return;
        
        btn.classList.toggle('active');
        dropdown.classList.toggle('open');
        
        if (dropdown.classList.contains('open')) {
            if (DOM.countrySearchInput) {
                setTimeout(() => DOM.countrySearchInput.focus(), 100);
            }
        }
    }

    function closeCountryDropdown() {
        if (DOM.countrySelectorBtn) {
            DOM.countrySelectorBtn.classList.remove('active');
        }
        if (DOM.countryDropdown) {
            DOM.countryDropdown.classList.remove('open');
        }
    }

    function renderDropdownCountries(region, searchQuery) {
        region = region || 'all';
        searchQuery = searchQuery || '';
        
        const container = DOM.dropdownCountryList;
        if (!container) return;
        
        container.innerHTML = '';
        state.dropdownRegion = region;
        
        let countries = [];
        
        // Get countries based on region filter
        if (region === 'all') {
            countries = Object.values(UnityAtlasData.COUNTRIES);
        } else {
            countries = UnityAtlasData.getCountriesByRegion(region);
        }
        
        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            countries = countries.filter(c => 
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query) ||
                c.capital.toLowerCase().includes(query)
            );
        }
        
        // Remove center country from list
        countries = countries.filter(c => c.code !== state.centerCountry);
        
        // Sort alphabetically
        countries.sort((a, b) => a.name.localeCompare(b.name));
        
        // Update results count
        if (DOM.resultsCount) {
            DOM.resultsCount.textContent = `${countries.length} ${countries.length === 1 ? 'country' : 'countries'}`;
        }
        
        // Show no results message
        if (countries.length === 0) {
            container.innerHTML = `
                <div class="dropdown-no-results">
                    <i class="fas fa-search"></i>
                    <p>No countries found</p>
                </div>
            `;
            return;
        }
        
        // Get relationships for coloring
        const relationships = UnityAtlasData.getAllRelationships(state.centerCountry);
        
        // Render countries
        countries.forEach(country => {
            const rel = relationships[country.code];
            const relType = rel?.type || 'neutral';
            
            const item = document.createElement('div');
            item.className = 'dropdown-country-item';
            item.dataset.code = country.code;
            
            if (state.selectedCountry === country.code) {
                item.classList.add('active');
            }
            
            item.innerHTML = `
                <span class="dropdown-country-flag">${country.flag}</span>
                <span class="dropdown-country-name">${country.name}</span>
                <span class="dropdown-country-region">${country.region}</span>
                <span class="dropdown-country-type ${relType}"></span>
            `;
            
            // Single click - select country
            item.addEventListener('click', () => {
                selectCountryFromDropdown(country.code);
            });
            
            // Double click - make it center
            item.addEventListener('dblclick', () => {
                updateCenterCountry(country.code);
                closeCountryDropdown();
            });
            
            container.appendChild(item);
        });
    }

    function selectCountryFromDropdown(code) {
        selectCountry(code);
        closeCountryDropdown();
        
        // Update button text to show selected country
        const country = UnityAtlasData.getCountry(code);
        if (country && DOM.countrySelectorBtn) {
            const spanEl = DOM.countrySelectorBtn.querySelector('span');
            if (spanEl) spanEl.textContent = `${country.flag} ${country.name}`;
        }
    }

    function handleDropdownRegionTab(region) {
        // Update active tab
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.region === region);
        });
        
        // Re-render countries
        const searchQuery = DOM.countrySearchInput?.value || '';
        renderDropdownCountries(region, searchQuery);
    }

    function handleDropdownSearch(query) {
        renderDropdownCountries(state.dropdownRegion, query);
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // RADIAL GRAPH RENDERING (FIXED)
    // ═══════════════════════════════════════════════════════════════════════════

    function renderRadialGraph() {
        const container = DOM.radialCanvas;
        if (!container) {
            console.warn('Radial canvas container not found');
            return;
        }
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        // Safety check - if container is too small, retry
        if (width < 100 || height < 100) {
            console.log('Canvas container too small, retrying in 200ms...', { width, height });
            setTimeout(() => renderRadialGraph(), 200);
            return;
        }
        
        console.log('Rendering radial graph:', { width, height });
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Clear existing
        container.innerHTML = '';
        
        // Create SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.overflow = 'visible';
        
        // Create groups for layering
        const ringGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        ringGroup.setAttribute('class', 'rings');
        
        const connectionGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        connectionGroup.setAttribute('class', 'connections');
        
        const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        nodeGroup.setAttribute('class', 'nodes');
        
        const centerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        centerGroup.setAttribute('class', 'center');
        
        // Calculate ring radii with SAFE values
        const minDimension = Math.min(width, height);
        const centerNodeRadius = 50;
        const nodeRadius = 24;
        const padding = 80;
        
        // Ensure safe minimum values
        const minRadius = Math.max(100, centerNodeRadius + nodeRadius + 30);
        const maxRadius = Math.max(minRadius + 100, (minDimension / 2) - padding);
        
        const ringCount = 5;
        const ringRadii = [];
        const radiusStep = (maxRadius - minRadius) / (ringCount - 1);
        
        for (let i = 0; i < ringCount; i++) {
            const radius = minRadius + (radiusStep * i);
            ringRadii.push(Math.max(radius, 50)); // Minimum 50px
        }
        
        console.log('Ring radii:', ringRadii);
        
        // Draw rings
        const ringColors = [
            '#10b981', // allies - green
            '#3b82f6', // strategic - blue
            '#f59e0b', // neutral - amber
            '#f97316', // complex - orange
            '#ef4444'  // conflict - red
        ];
        
        ringRadii.forEach((radius, index) => {
            const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            ring.setAttribute('cx', centerX);
            ring.setAttribute('cy', centerY);
            ring.setAttribute('r', radius);
            ring.setAttribute('fill', 'none');
            ring.setAttribute('stroke', ringColors[index]);
            ring.setAttribute('stroke-opacity', '0.2');
            ring.setAttribute('stroke-width', '1.5');
            ring.setAttribute('stroke-dasharray', '6 4');
            ringGroup.appendChild(ring);
        });
        
        // Get relationships and group by type
        const relationships = UnityAtlasData.getAllRelationships(state.centerCountry);
        const byType = {
            allies: [],
            strategic: [],
            neutral: [],
            complex: [],
            conflict: []
        };
        
        Object.entries(relationships).forEach(([code, rel]) => {
            const country = UnityAtlasData.getCountry(code);
            if (!country) return;
            
            // Apply filters
            if (state.filters.region !== 'all' && country.region !== state.filters.region) return;
            if (state.filters.type !== 'all' && rel.type !== state.filters.type) return;
            
            if (byType[rel.type]) {
                byType[rel.type].push({
                    code,
                    country,
                    relationship: rel
                });
            }
        });
        
        // Render nodes by ring
        const typeOrder = ['allies', 'strategic', 'neutral', 'complex', 'conflict'];
        
        typeOrder.forEach((type, ringIndex) => {
            const countries = byType[type] || [];
            const radius = ringRadii[ringIndex];
            const count = countries.length;
            
            if (count === 0) return;
            
            // Limit nodes per ring for performance
            const maxPerRing = Math.min(count, Math.ceil(state.settings.maxNodes / 5));
            const displayCountries = countries.slice(0, maxPerRing);
            
            displayCountries.forEach((item, i) => {
                const angle = (2 * Math.PI * i / displayCountries.length) - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                const node = createCountryNode(item, x, y, type);
                nodeGroup.appendChild(node);
                
                // Create connection line (hidden by default)
                const line = createConnectionLine(centerX, centerY, x, y, item.code);
                connectionGroup.appendChild(line);
            });
        });
        
        // Draw center node
        const centerCountry = UnityAtlasData.getCountry(state.centerCountry);
        if (centerCountry) {
            const centerNode = createCenterNode(centerCountry, centerX, centerY);
            centerGroup.appendChild(centerNode);
        }
        
        // Apply transform for zoom/pan
        const transformGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        transformGroup.setAttribute('class', 'transform-group');
        
        svg.appendChild(transformGroup);
        transformGroup.appendChild(ringGroup);
        transformGroup.appendChild(connectionGroup);
        transformGroup.appendChild(nodeGroup);
        transformGroup.appendChild(centerGroup);
        
        container.appendChild(svg);
        
        // Update zoom level display
        if (DOM.zoomLevel) {
            DOM.zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
        }
        
        console.log('Radial graph rendered successfully');
    }

    function createCenterNode(country, x, y) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'center-node');
        g.setAttribute('transform', `translate(${x}, ${y})`);
        
        // Outer glow ring
        const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glow.setAttribute('r', '58');
        glow.setAttribute('fill', 'none');
        glow.setAttribute('stroke', '#00a0dc');
        glow.setAttribute('stroke-width', '3');
        glow.setAttribute('stroke-opacity', '0.3');
        glow.style.animation = 'pulse 2s ease-in-out infinite';
        
        // Background circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', '50');
        circle.setAttribute('fill', '#ffffff');
        circle.setAttribute('stroke', '#00a0dc');
        circle.setAttribute('stroke-width', '4');
        circle.style.filter = 'drop-shadow(0 4px 12px rgba(0, 160, 220, 0.3))';
        
        // Flag emoji
        const flag = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        flag.setAttribute('x', '0');
        flag.setAttribute('y', '5');
        flag.setAttribute('text-anchor', 'middle');
        flag.setAttribute('dominant-baseline', 'middle');
        flag.setAttribute('font-size', '40');
        flag.textContent = country.flag;
        
        // Country name label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', '0');
        label.setAttribute('y', '75');
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-family', 'Space Grotesk, sans-serif');
        label.setAttribute('font-size', '14');
        label.setAttribute('font-weight', '600');
        label.setAttribute('fill', '#2d3748');
        label.textContent = country.name;
        
        g.appendChild(glow);
        g.appendChild(circle);
        g.appendChild(flag);
        g.appendChild(label);
        
        return g;
    }

    function createCountryNode(item, x, y, type) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'country-node');
        g.setAttribute('transform', `translate(${x}, ${y})`);
        g.setAttribute('data-code', item.code);
        g.setAttribute('data-type', type);
        g.style.cursor = 'pointer';
        g.style.transition = 'transform 0.2s ease';
        
        // Apply focus mode fading
        if (state.focusMode && state.selectedCountry && item.code !== state.selectedCountry) {
            g.style.opacity = '0.2';
        }
        
        if (state.selectedCountry === item.code) {
            g.style.filter = 'drop-shadow(0 0 10px rgba(0, 160, 220, 0.6))';
        }
        
        // Colors based on relationship type
        const colors = {
            allies: { bg: '#d1fae5', border: '#10b981' },
            strategic: { bg: '#dbeafe', border: '#3b82f6' },
            neutral: { bg: '#fef3c7', border: '#f59e0b' },
            complex: { bg: '#ffedd5', border: '#f97316' },
            conflict: { bg: '#fee2e2', border: '#ef4444' }
        };
        
        const color = colors[type] || colors.neutral;
        
        // Background circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', '26');
        circle.setAttribute('fill', color.bg);
        circle.setAttribute('stroke', color.border);
        circle.setAttribute('stroke-width', '2.5');
        
        // Flag emoji
        const flag = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        flag.setAttribute('x', '0');
        flag.setAttribute('y', '3');
        flag.setAttribute('text-anchor', 'middle');
        flag.setAttribute('dominant-baseline', 'middle');
        flag.setAttribute('font-size', '22');
        flag.textContent = item.country.flag;
        
        g.appendChild(circle);
        g.appendChild(flag);
        
        // Label (if enabled)
        if (state.settings.showLabels) {
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', '0');
            label.setAttribute('y', '45');
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-family', 'Inter, sans-serif');
            label.setAttribute('font-size', '10');
            label.setAttribute('font-weight', '500');
            label.setAttribute('fill', '#4a5568');
            label.textContent = item.country.name.length > 12 
                ? item.country.name.substring(0, 10) + '...' 
                : item.country.name;
            g.appendChild(label);
        }
        
        // Event listeners
        g.addEventListener('mouseenter', (e) => {
            g.style.transform = `translate(${x}, ${y}) scale(1.15)`;
            handleNodeHover(e, item);
        });
        
        g.addEventListener('mouseleave', () => {
            g.style.transform = `translate(${x}, ${y}) scale(1)`;
            hideTooltip();
        });
        
        g.addEventListener('click', (e) => {
            e.stopPropagation();
            selectCountry(item.code);
        });
        
        g.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            updateCenterCountry(item.code);
        });
        
        return g;
    }

    function createConnectionLine(x1, y1, x2, y2, code) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x1} ${y1} L ${x2} ${y2}`;
        line.setAttribute('d', d);
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke', '#00a0dc');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '6 4');
        line.setAttribute('stroke-opacity', '0');
        line.setAttribute('data-target', code);
        line.style.transition = 'stroke-opacity 0.3s ease';
        return line;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // COUNTRY SELECTION & FOCUS MODE
    // ═══════════════════════════════════════════════════════════════════════════

    function selectCountry(code) {
        console.log('Selecting country:', code);
        
        if (state.selectedCountry === code) {
            // If already selected, open modal
            openRelationshipModal(code);
            return;
        }
        
        state.selectedCountry = code;
        state.focusMode = true;
        
        // Update UI
        const centerCountry = UnityAtlasData.getCountry(state.centerCountry);
        const selectedCountry = UnityAtlasData.getCountry(code);
        
        if (!centerCountry || !selectedCountry) return;
        
        // Update focus indicator
        if (DOM.focusIndicator) {
            const focus1 = DOM.focusIndicator.querySelector('.focus-country1');
            const focus2 = DOM.focusIndicator.querySelector('.focus-country2');
            if (focus1) focus1.textContent = `${centerCountry.flag} ${centerCountry.name}`;
            if (focus2) focus2.textContent = `${selectedCountry.flag} ${selectedCountry.name}`;
            DOM.focusIndicator.classList.add('visible');
        }
        
        // Update dropdown selection
        document.querySelectorAll('.dropdown-country-item').forEach(item => {
            item.classList.toggle('active', item.dataset.code === code);
        });
        
        // Update dropdown button text
        if (DOM.countrySelectorBtn) {
            const spanEl = DOM.countrySelectorBtn.querySelector('span');
            if (spanEl) spanEl.textContent = `${selectedCountry.flag} ${selectedCountry.name}`;
        }
        
        // Show connection line
        showConnectionLine(code);
        
        // Fade other nodes
        fadeOtherNodes(code);
        
        // Update parameter panel
        updateParameterPanel(code);
        if (DOM.parameterPanel) {
            DOM.parameterPanel.classList.add('open');
        }
    }

    function exitFocusMode() {
        console.log('Exiting focus mode');
        
        state.selectedCountry = null;
        state.focusMode = false;
        
        // Hide focus indicator
        if (DOM.focusIndicator) {
            DOM.focusIndicator.classList.remove('visible');
        }
        
        // Hide connection lines
        document.querySelectorAll('[data-target]').forEach(line => {
            line.setAttribute('stroke-opacity', '0');
        });
        
        // Unfade all nodes
        document.querySelectorAll('.country-node').forEach(node => {
            node.style.opacity = '1';
            node.style.filter = '';
        });
        
        // Update dropdown
        document.querySelectorAll('.dropdown-country-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Reset dropdown button text
        if (DOM.countrySelectorBtn) {
            const spanEl = DOM.countrySelectorBtn.querySelector('span');
            if (spanEl) spanEl.textContent = 'Select a Country';
        }
        
        // Close parameter panel
        if (DOM.parameterPanel) {
            DOM.parameterPanel.classList.remove('open');
        }
    }

    function showConnectionLine(code) {
        document.querySelectorAll('[data-target]').forEach(line => {
            if (line.dataset.target === code) {
                line.setAttribute('stroke-opacity', '0.8');
            } else {
                line.setAttribute('stroke-opacity', '0');
            }
        });
    }

    function fadeOtherNodes(selectedCode) {
        document.querySelectorAll('.country-node').forEach(node => {
            if (node.dataset.code === selectedCode) {
                node.style.opacity = '1';
                node.style.filter = 'drop-shadow(0 0 12px rgba(0, 160, 220, 0.6))';
            } else {
                node.style.opacity = '0.2';
                node.style.filter = '';
            }
        });
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // TOOLTIP
    // ═══════════════════════════════════════════════════════════════════════════

    function handleNodeHover(event, item) {
        const tooltip = DOM.nodeTooltip;
        if (!tooltip) return;
        
        const relationship = item.relationship;
        const typeInfo = UnityAtlasData.getRelationshipTypeInfo(relationship.type);
        
        const flagEl = tooltip.querySelector('.tooltip-flag');
        const nameEl = tooltip.querySelector('.tooltip-name');
        const capitalEl = tooltip.querySelector('.tooltip-capital');
        const typeEl = tooltip.querySelector('.tooltip-type');
        const scoreEl = tooltip.querySelector('.tooltip-score');
        
        if (flagEl) flagEl.textContent = item.country.flag;
        if (nameEl) nameEl.textContent = item.country.name;
        if (capitalEl) capitalEl.textContent = item.country.capital;
        if (typeEl) {
            typeEl.textContent = typeInfo.name;
            typeEl.className = `tooltip-type ${relationship.type}`;
        }
        if (scoreEl) scoreEl.textContent = `${relationship.score}/10`;
        
        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let left = rect.right + 15;
        let top = rect.top + (rect.height / 2);
        
        // Keep tooltip in viewport
        if (left + 200 > window.innerWidth) {
            left = rect.left - 200 - 15;
        }
        
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.style.transform = 'translateY(-50%)';
        
        tooltip.classList.add('visible');
        
        // Show connection on hover if not in focus mode
        if (!state.focusMode && state.settings.showConnections) {
            showConnectionLine(item.code);
        }
    }

    function hideTooltip() {
        if (DOM.nodeTooltip) {
            DOM.nodeTooltip.classList.remove('visible');
        }
        
        // Hide connection if not in focus mode
        if (!state.focusMode) {
            document.querySelectorAll('[data-target]').forEach(line => {
                line.setAttribute('stroke-opacity', '0');
            });
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PARAMETER PANEL
    // ═══════════════════════════════════════════════════════════════════════════

    function updateParameterPanel(selectedCode) {
        const container = DOM.parameterContent;
        if (!container) return;
        
        container.innerHTML = '';
        
        const relationship = UnityAtlasData.getRelationship(state.centerCountry, selectedCode);
        if (!relationship) return;
        
        UnityAtlasData.PARAMETERS.forEach(param => {
            const paramData = relationship.parameters?.[param.id] || {
                score: 5,
                summary: 'Data not available',
                bullets: []
            };
            
            const card = createParameterCard(param, paramData);
            container.appendChild(card);
        });
    }

    function createParameterCard(param, data) {
        const card = document.createElement('div');
        card.className = 'param-card';
        
        const scorePercent = (data.score / 10) * 100;
        const scoreColor = getScoreColor(data.score);
        
        card.innerHTML = `
            <div class="param-header">
                <div class="param-icon">
                    <i class="fas ${param.icon}"></i>
                </div>
                <div class="param-info">
                    <div class="param-name">${param.name}</div>
                    <div class="param-category">${param.category}</div>
                </div>
                <div class="param-score">
                    <div class="param-score-value" style="color: ${scoreColor}">${data.score}</div>
                    <div class="param-score-bar">
                        <div class="param-score-fill" style="width: ${scorePercent}%; background: ${scoreColor}"></div>
                    </div>
                </div>
                <i class="fas fa-chevron-down param-arrow"></i>
            </div>
            <div class="param-body">
                <div class="param-content">
                    <p class="param-summary">${data.summary}</p>
                    ${data.bullets?.length ? `
                        <ul class="param-bullets">
                            ${data.bullets.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `;
        
        const header = card.querySelector('.param-header');
        if (header) {
            header.addEventListener('click', () => {
                // Close others
                const parent = card.parentElement;
                if (parent) {
                    parent.querySelectorAll('.param-card.expanded').forEach(c => {
                        if (c !== card) c.classList.remove('expanded');
                    });
                }
                card.classList.toggle('expanded');
            });
        }
        
        return card;
    }

    function getScoreColor(score) {
        if (score >= 8) return '#10b981'; // green
        if (score >= 6) return '#3b82f6'; // blue
        if (score >= 4) return '#f59e0b'; // amber
        if (score >= 3) return '#f97316'; // orange
        return '#ef4444'; // red
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // MODAL
    // ═══════════════════════════════════════════════════════════════════════════

    function openRelationshipModal(targetCode) {
        const centerCountry = UnityAtlasData.getCountry(state.centerCountry);
        const targetCountry = UnityAtlasData.getCountry(targetCode);
        const relationship = UnityAtlasData.getRelationship(state.centerCountry, targetCode);
        
        if (!centerCountry || !targetCountry || !relationship) return;
        
        const typeInfo = UnityAtlasData.getRelationshipTypeInfo(relationship.type);
        
        // Update header
        if (DOM.modalFlag1) DOM.modalFlag1.textContent = centerCountry.flag;
        if (DOM.modalName1) DOM.modalName1.textContent = centerCountry.name;
        if (DOM.modalFlag2) DOM.modalFlag2.textContent = targetCountry.flag;
        if (DOM.modalName2) DOM.modalName2.textContent = targetCountry.name;
        
        // Update badge
        if (DOM.modalBadge) {
            const badgeType = DOM.modalBadge.querySelector('.badge-type');
            if (badgeType) {
                badgeType.textContent = typeInfo.name;
                badgeType.className = `badge-type ${relationship.type}`;
            }
        }
        
        // Update score circle
        if (DOM.scoreProgress) {
            const scorePercent = (relationship.score / 10) * 283;
            DOM.scoreProgress.style.strokeDashoffset = 283 - scorePercent;
            DOM.scoreProgress.style.stroke = typeInfo.color;
        }
        if (DOM.scoreValue) DOM.scoreValue.textContent = relationship.score.toFixed(1);
        if (DOM.scoreDescription) DOM.scoreDescription.textContent = typeInfo.description;
        
        // Update parameters
        renderModalParameters(relationship);
        
        // Store target for actions
        if (DOM.modalSetCenter) DOM.modalSetCenter.dataset.code = targetCode;
        
        // Show modal
        if (DOM.modalOverlay) {
            DOM.modalOverlay.classList.add('visible');
            document.body.classList.add('no-scroll');
        }
    }

    function renderModalParameters(relationship) {
        const container = DOM.modalParameters;
        if (!container) return;
        
        container.innerHTML = '';
        
        UnityAtlasData.PARAMETERS.forEach(param => {
            const paramData = relationship.parameters?.[param.id] || {
                score: 5,
                summary: 'Data not available',
                bullets: [],
                details: ''
            };
            
            const card = document.createElement('div');
            card.className = 'modal-param';
            
            const scorePercent = (paramData.score / 10) * 100;
            const scoreColor = getScoreColor(paramData.score);
            
            card.innerHTML = `
                <div class="modal-param-header">
                    <div class="modal-param-icon">
                        <i class="fas ${param.icon}"></i>
                    </div>
                    <div class="modal-param-info">
                        <div class="modal-param-name">${param.name}</div>
                        <div class="modal-param-cat">${param.category}</div>
                    </div>
                    <div class="modal-param-score">
                        <div class="modal-score-num" style="color: ${scoreColor}">${paramData.score}</div>
                        <div class="modal-score-bar">
                            <div class="modal-score-fill" style="width: ${scorePercent}%; background: ${scoreColor}"></div>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down modal-param-arrow"></i>
                </div>
                <div class="modal-param-body">
                    <div class="modal-param-content">
                        <div class="modal-param-section">
                            <h5>Overview</h5>
                            <p>${paramData.summary}</p>
                        </div>
                        ${paramData.bullets?.length ? `
                            <div class="modal-param-section">
                                <h5>Key Points</h5>
                                <ul>
                                    ${paramData.bullets.map(b => `<li>${b}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${paramData.details ? `
                            <div class="modal-param-section">
                                <h5>Analysis</h5>
                                <p>${paramData.details}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
            const header = card.querySelector('.modal-param-header');
            if (header) {
                header.addEventListener('click', () => {
                    container.querySelectorAll('.modal-param.expanded').forEach(c => {
                        if (c !== card) c.classList.remove('expanded');
                    });
                    card.classList.toggle('expanded');
                });
            }
            
            container.appendChild(card);
        });
    }

    function closeModal() {
        if (DOM.modalOverlay) {
            DOM.modalOverlay.classList.remove('visible');
            document.body.classList.remove('no-scroll');
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // SEARCH
    // ═══════════════════════════════════════════════════════════════════════════

    function handleGlobalSearch(query) {
        const dropdown = DOM.searchDropdown;
        if (!dropdown) return;
        
        if (query.length < 2) {
            dropdown.classList.remove('active');
            return;
        }
        
        const results = UnityAtlasData.searchCountries(query).slice(0, 8);
        
        if (results.length === 0) {
            dropdown.classList.remove('active');
            return;
        }
        
        dropdown.innerHTML = results.map(country => `
            <div class="search-result" data-code="${country.code}">
                <span class="search-result-flag">${country.flag}</span>
                <span class="search-result-name">${country.name}</span>
                <span class="search-result-region">${country.region}</span>
            </div>
        `).join('');
        
        dropdown.classList.add('active');
        
        // Event listeners for results
        dropdown.querySelectorAll('.search-result').forEach(result => {
            result.addEventListener('click', () => {
                updateCenterCountry(result.dataset.code);
                if (DOM.globalSearch) DOM.globalSearch.value = '';
                dropdown.classList.remove('active');
            });
        });
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // ZOOM & PAN
    // ═══════════════════════════════════════════════════════════════════════════

    function handleZoom(delta) {
        const newZoom = Math.max(0.5, Math.min(3, state.zoom + delta));
        state.zoom = newZoom;
        
        // Re-render with new zoom (simplified approach)
        if (DOM.zoomLevel) {
            DOM.zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
        }
    }

    function resetView() {
        state.zoom = 1;
        state.pan = { x: 0, y: 0 };
        exitFocusMode();
        renderRadialGraph();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // SETTINGS
    // ═══════════════════════════════════════════════════════════════════════════

    function openSettings() {
        if (DOM.settingsOverlay) {
            DOM.settingsOverlay.classList.add('visible');
        }
    }

    function closeSettings() {
        if (DOM.settingsOverlay) {
            DOM.settingsOverlay.classList.remove('visible');
        }
    }

    function updateSettings() {
        if (DOM.showLabels) state.settings.showLabels = DOM.showLabels.checked;
        if (DOM.showConnections) state.settings.showConnections = DOM.showConnections.checked;
        if (DOM.animationsEnabled) state.settings.animationsEnabled = DOM.animationsEnabled.checked;
        if (DOM.maxNodes) state.settings.maxNodes = parseInt(DOM.maxNodes.value);
        
        renderRadialGraph();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // EVENT BINDINGS
    // ═══════════════════════════════════════════════════════════════════════════

    function bindEvents() {
        // Hero
        if (DOM.ctaExplore) {
            DOM.ctaExplore.addEventListener('click', scrollToApp);
        }
        if (DOM.scrollIndicator) {
            DOM.scrollIndicator.addEventListener('click', scrollToApp);
        }
        
        // Global Search
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener('input', debounce((e) => {
                handleGlobalSearch(e.target.value);
            }, 200));
            
            DOM.globalSearch.addEventListener('blur', () => {
                setTimeout(() => {
                    if (DOM.searchDropdown) DOM.searchDropdown.classList.remove('active');
                }, 200);
            });
        }
        
        // Country Dropdown - Toggle
        if (DOM.countrySelectorBtn) {
            DOM.countrySelectorBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCountryDropdown();
            });
        }
        
        if (DOM.changeCenterBtn) {
            DOM.changeCenterBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCountryDropdown();
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.country-selector')) {
                closeCountryDropdown();
            }
        });
        
        // Region tabs in dropdown
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                handleDropdownRegionTab(tab.dataset.region);
            });
        });
        
        // Dropdown search
        if (DOM.countrySearchInput) {
            DOM.countrySearchInput.addEventListener('input', debounce((e) => {
                handleDropdownSearch(e.target.value);
            }, 200));
            
            DOM.countrySearchInput.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        
        // Clear dropdown search
        if (DOM.clearCountrySearch) {
            DOM.clearCountrySearch.addEventListener('click', (e) => {
                e.stopPropagation();
                if (DOM.countrySearchInput) {
                    DOM.countrySearchInput.value = '';
                    handleDropdownSearch('');
                }
            });
        }
        
        // Filters
        if (DOM.regionFilter) {
            DOM.regionFilter.addEventListener('change', (e) => {
                state.filters.region = e.target.value;
                renderDropdownCountries(state.dropdownRegion);
                renderRadialGraph();
            });
        }
        
        if (DOM.typeFilter) {
            DOM.typeFilter.addEventListener('change', (e) => {
                state.filters.type = e.target.value;
                renderDropdownCountries(state.dropdownRegion);
                renderRadialGraph();
            });
        }
        
        // View toggles
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Sidebar buttons
        if (DOM.randomCountry) {
            DOM.randomCountry.addEventListener('click', () => {
                const random = UnityAtlasData.getRandomCountry();
                if (random) updateCenterCountry(random.code);
            });
        }
        
        if (DOM.resetView) {
            DOM.resetView.addEventListener('click', resetView);
        }
        
        // Focus mode
        if (DOM.closeFocus) {
            DOM.closeFocus.addEventListener('click', exitFocusMode);
        }
        
        // Panel toggle
        if (DOM.togglePanel) {
            DOM.togglePanel.addEventListener('click', () => {
                if (DOM.parameterPanel) {
                    DOM.parameterPanel.classList.toggle('open');
                }
            });
        }
        
        // Zoom controls
        if (DOM.zoomIn) {
            DOM.zoomIn.addEventListener('click', () => handleZoom(0.2));
        }
        if (DOM.zoomOut) {
            DOM.zoomOut.addEventListener('click', () => handleZoom(-0.2));
        }
        if (DOM.zoomReset) {
            DOM.zoomReset.addEventListener('click', resetView);
        }
        
        // Modal
        if (DOM.modalClose) {
            DOM.modalClose.addEventListener('click', closeModal);
        }
        if (DOM.modalCloseBtn) {
            DOM.modalCloseBtn.addEventListener('click', closeModal);
        }
        if (DOM.modalOverlay) {
            DOM.modalOverlay.addEventListener('click', (e) => {
                if (e.target === DOM.modalOverlay) closeModal();
            });
        }
        
        if (DOM.modalSetCenter) {
            DOM.modalSetCenter.addEventListener('click', () => {
                const code = DOM.modalSetCenter.dataset.code;
                closeModal();
                exitFocusMode();
                updateCenterCountry(code);
            });
        }
        
        // Compare Modal
        if (DOM.compareClose) {
            DOM.compareClose.addEventListener('click', () => {
                if (DOM.compareOverlay) DOM.compareOverlay.classList.remove('visible');
            });
        }
        
        // Settings
        if (DOM.settingsBtn) {
            DOM.settingsBtn.addEventListener('click', openSettings);
        }
        if (DOM.settingsClose) {
            DOM.settingsClose.addEventListener('click', closeSettings);
        }
        if (DOM.settingsOverlay) {
            DOM.settingsOverlay.addEventListener('click', (e) => {
                if (e.target === DOM.settingsOverlay) closeSettings();
            });
        }
        
        if (DOM.showLabels) {
            DOM.showLabels.addEventListener('change', updateSettings);
        }
        if (DOM.showConnections) {
            DOM.showConnections.addEventListener('change', updateSettings);
        }
        if (DOM.animationsEnabled) {
            DOM.animationsEnabled.addEventListener('change', updateSettings);
        }
        if (DOM.maxNodes) {
            DOM.maxNodes.addEventListener('change', updateSettings);
        }
        
        // Stat boxes click to filter
        if (DOM.relationStats) {
            DOM.relationStats.querySelectorAll('.stat-box').forEach(box => {
                box.addEventListener('click', () => {
                    const type = box.dataset.type;
                    if (DOM.typeFilter) {
                        DOM.typeFilter.value = type;
                    }
                    state.filters.type = type;
                    renderDropdownCountries(state.dropdownRegion);
                    renderRadialGraph();
                });
            });
        }
        
        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
                closeSettings();
                closeCountryDropdown();
                if (DOM.compareOverlay) DOM.compareOverlay.classList.remove('visible');
                if (state.focusMode) exitFocusMode();
            }
        });
        
        // Resize
        window.addEventListener('resize', debounce(() => {
            renderRadialGraph();
        }, 300));
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════════════════════════════════════════

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

    // ═══════════════════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════

    return {
        init,
        updateCenterCountry,
        selectCountry,
        exitFocusMode,
        getState: () => ({ ...state })
    };

})();

// ═══════════════════════════════════════════════════════════════════════════════
// INITIALIZE ON DOM READY
// ═══════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Unity Atlas...');
    UnityAtlas.init();
});

// Make available globally
window.UnityAtlas = UnityAtlas;
