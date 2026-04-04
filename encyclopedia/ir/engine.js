/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * UNITY ATLAS - Application Engine
 * Geotopia Encyclopedia - International Relations Visualization
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
        dropdownRegion: 'all'  // ← ADD THIS NEW STATE
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
        
        // ═══════════════════════════════════════════════════════════════════════
        // ▼▼▼ ADD THESE NEW DOM REFERENCES FOR DROPDOWN ▼▼▼
        // ═══════════════════════════════════════════════════════════════════════
        
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
        
        // ═══════════════════════════════════════════════════════════════════════
        // ▲▲▲ END OF NEW DOM REFERENCES ▲▲▲
        // ═══════════════════════════════════════════════════════════════════════
        
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
        state.isLoading = false;
        if (DOM.loadingOverlay) {
            DOM.loadingOverlay.classList.add('hidden');
        }
        
        // Initialize the visualization
        updateCenterCountry(state.centerCountry);
        initCountryDropdown();  // ← ADD THIS LINE
        renderRadialGraph();
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
        if (!country) return;
        
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
            DOM.countrySelectorBtn.querySelector('span').textContent = 'Select a Country';
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
    // ▼▼▼ ADD THIS ENTIRE NEW SECTION - COUNTRY SELECTOR DROPDOWN ▼▼▼
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
            // Focus search input when dropdown opens
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

    function renderDropdownCountries(region = 'all', searchQuery = '') {
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
            DOM.countrySelectorBtn.querySelector('span').textContent = 
                `${country.flag} ${country.name}`;
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
    // ▲▲▲ END OF COUNTRY SELECTOR DROPDOWN SECTION ▲▲▲
    // ═══════════════════════════════════════════════════════════════════════════

    // ═══════════════════════════════════════════════════════════════════════════
    // RADIAL GRAPH RENDERING
    // ═══════════════════════════════════════════════════════════════════════════

    function renderRadialGraph() {
        const container = DOM.radialCanvas;
        if (!container) return;
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Clear existing
        container.innerHTML = '';
        
        // Create SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        
        // Create groups for layering
        const ringGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        ringGroup.setAttribute('class', 'rings');
        
        const connectionGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        connectionGroup.setAttribute('class', 'connections');
        
        const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        nodeGroup.setAttribute('class', 'nodes');
        
        const centerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        centerGroup.setAttribute('class', 'center');
        
        // Calculate ring radii
        const minRadius = 100;
        const maxRadius = Math.min(width, height) / 2 - 60;
        const ringCount = 5;
        const ringRadii = [];
        for (let i = 1; i <= ringCount; i++) {
            ringRadii.push(minRadius + (maxRadius - minRadius) * (i / ringCount));
        }
        
        // Draw rings
        const ringColors = [
            'var(--color-allies)',
            'var(--color-strategic)',
            'var(--color-neutral)',
            'var(--color-complex)',
            'var(--color-conflict)'
        ];
        
        ringRadii.forEach((radius, index) => {
            const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            ring.setAttribute('cx', centerX);
            ring.setAttribute('cy', centerY);
            ring.setAttribute('r', radius);
            ring.setAttribute('class', 'ring-circle');
            ring.setAttribute('stroke', ringColors[index]);
            ring.setAttribute('stroke-opacity', '0.3');
            ring.setAttribute('fill', 'none');
            ring.setAttribute('stroke-width', '1');
            ring.setAttribute('stroke-dasharray', '4 4');
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
            
            byType[rel.type].push({
                code,
                country,
                relationship: rel
            });
        });
        
        // Render nodes by ring
        const typeOrder = ['allies', 'strategic', 'neutral', 'complex', 'conflict'];
        
        typeOrder.forEach((type, ringIndex) => {
            const countries = byType[type];
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
        transformGroup.setAttribute('transform', `translate(${state.pan.x}, ${state.pan.y}) scale(${state.zoom})`);
        transformGroup.setAttribute('transform-origin', `${centerX} ${centerY}`);
        
        transformGroup.appendChild(ringGroup);
        transformGroup.appendChild(connectionGroup);
        transformGroup.appendChild(nodeGroup);
        transformGroup.appendChild(centerGroup);
        
        svg.appendChild(transformGroup);
        container.appendChild(svg);
        
        // Update zoom level display
        if (DOM.zoomLevel) {
            DOM.zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
        }
    }

    function createCenterNode(country, x, y) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'center-node');
        g.setAttribute('transform', `translate(${x}, ${y})`);
        
        // Glow effect
        const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glow.setAttribute('r', '55');
        glow.setAttribute('fill', 'none');
        glow.setAttribute('stroke', 'var(--primary-400)');
        glow.setAttribute('stroke-width', '2');
        glow.setAttribute('opacity', '0.4');
        glow.setAttribute('class', 'pulse-glow');
        
        // Background circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', '48');
        circle.setAttribute('class', 'center-node-bg');
        
        // Flag
        const flag = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        flag.setAttribute('class', 'center-node-flag');
        flag.setAttribute('y', '-5');
        flag.setAttribute('text-anchor', 'middle');
        flag.setAttribute('dominant-baseline', 'central');
        flag.textContent = country.flag;
        
        // Label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('class', 'center-node-label');
        label.setAttribute('y', '38');
        label.setAttribute('text-anchor', 'middle');
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
        
        // Apply focus mode fading
        if (state.focusMode && state.selectedCountry && item.code !== state.selectedCountry) {
            g.classList.add('faded');
        }
        
        if (state.selectedCountry === item.code) {
            g.classList.add('highlighted');
        }
        
        // Background circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', '24');
        circle.setAttribute('class', `node-circle ${type}`);
        
        // Flag
        const flag = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        flag.setAttribute('class', 'node-flag');
        flag.setAttribute('text-anchor', 'middle');
        flag.setAttribute('dominant-baseline', 'central');
        flag.textContent = item.country.flag;
        
        // Label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('class', 'node-label');
        label.setAttribute('y', '38');
        label.setAttribute('text-anchor', 'middle');
        label.textContent = item.country.name;
        
        g.appendChild(circle);
        g.appendChild(flag);
        
        if (state.settings.showLabels) {
            g.appendChild(label);
        }
        
        // Event listeners
        g.addEventListener('mouseenter', (e) => handleNodeHover(e, item));
        g.addEventListener('mouseleave', hideTooltip);
        g.addEventListener('click', () => selectCountry(item.code));
        g.addEventListener('dblclick', () => updateCenterCountry(item.code));
        
        return g;
    }

    function createConnectionLine(x1, y1, x2, y2, code) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x1} ${y1} L ${x2} ${y2}`;
        line.setAttribute('d', d);
        line.setAttribute('class', 'connection-line');
        line.setAttribute('data-target', code);
        return line;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // COUNTRY SELECTION & FOCUS MODE
    // ═══════════════════════════════════════════════════════════════════════════

    function selectCountry(code) {
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
            DOM.focusIndicator.querySelector('.focus-country1').textContent = `${centerCountry.flag} ${centerCountry.name}`;
            DOM.focusIndicator.querySelector('.focus-country2').textContent = `${selectedCountry.flag} ${selectedCountry.name}`;
            DOM.focusIndicator.classList.add('visible');
        }
        
        // Update dropdown selection
        document.querySelectorAll('.dropdown-country-item').forEach(item => {
            item.classList.toggle('active', item.dataset.code === code);
        });
        
        // Update dropdown button text
        if (DOM.countrySelectorBtn) {
            DOM.countrySelectorBtn.querySelector('span').textContent = 
                `${selectedCountry.flag} ${selectedCountry.name}`;
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
        state.selectedCountry = null;
        state.focusMode = false;
        
        // Hide focus indicator
        if (DOM.focusIndicator) {
            DOM.focusIndicator.classList.remove('visible');
        }
        
        // Hide connection lines
        document.querySelectorAll('.connection-line').forEach(line => {
            line.classList.remove('visible');
        });
        
        // Unfade all nodes
        document.querySelectorAll('.country-node').forEach(node => {
            node.classList.remove('faded', 'highlighted');
        });
        
        // Update dropdown
        document.querySelectorAll('.dropdown-country-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Reset dropdown button text
        if (DOM.countrySelectorBtn) {
            DOM.countrySelectorBtn.querySelector('span').textContent = 'Select a Country';
        }
        
        // Close parameter panel
        if (DOM.parameterPanel) {
            DOM.parameterPanel.classList.remove('open');
        }
    }

    function showConnectionLine(code) {
        document.querySelectorAll('.connection-line').forEach(line => {
            if (line.dataset.target === code) {
                line.classList.add('visible');
            } else {
                line.classList.remove('visible');
            }
        });
    }

    function fadeOtherNodes(selectedCode) {
        document.querySelectorAll('.country-node').forEach(node => {
            if (node.dataset.code === selectedCode) {
                node.classList.remove('faded');
                node.classList.add('highlighted');
            } else {
                node.classList.add('faded');
                node.classList.remove('highlighted');
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
        
        tooltip.querySelector('.tooltip-flag').textContent = item.country.flag;
        tooltip.querySelector('.tooltip-name').textContent = item.country.name;
        tooltip.querySelector('.tooltip-capital').textContent = item.country.capital;
        
        const tooltipType = tooltip.querySelector('.tooltip-type');
        tooltipType.textContent = typeInfo.name;
        tooltipType.className = `tooltip-type ${relationship.type}`;
        
        tooltip.querySelector('.tooltip-score').textContent = `${relationship.score}/10`;
        
        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = `${rect.right + 10}px`;
        tooltip.style.top = `${rect.top + rect.height / 2}px`;
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
            document.querySelectorAll('.connection-line').forEach(line => {
                line.classList.remove('visible');
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
        
        card.querySelector('.param-header').addEventListener('click', () => {
            // Close others
            container.querySelectorAll('.param-card.expanded').forEach(c => {
                if (c !== card) c.classList.remove('expanded');
            });
            card.classList.toggle('expanded');
        });
        
        return card;
    }

    function getScoreColor(score) {
        if (score >= 8) return 'var(--color-allies)';
        if (score >= 6) return 'var(--color-strategic)';
        if (score >= 4) return 'var(--color-neutral)';
        if (score >= 3) return 'var(--color-complex)';
        return 'var(--color-conflict)';
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
            
            card.querySelector('.modal-param-header').addEventListener('click', () => {
                container.querySelectorAll('.modal-param.expanded').forEach(c => {
                    if (c !== card) c.classList.remove('expanded');
                });
                card.classList.toggle('expanded');
            });
            
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
        
        const transformGroup = DOM.radialCanvas?.querySelector('.transform-group');
        if (transformGroup) {
            const width = DOM.radialCanvas.clientWidth;
            const height = DOM.radialCanvas.clientHeight;
            transformGroup.setAttribute('transform', 
                `translate(${width/2}, ${height/2}) scale(${state.zoom}) translate(${-width/2 + state.pan.x}, ${-height/2 + state.pan.y})`
            );
        }
        
        if (DOM.zoomLevel) {
            DOM.zoomLevel.textContent = `${Math.round(state.zoom * 100)}%`;
        }
    }

    function handlePanStart(e) {
        if (e.button !== 0) return; // Only left click
        state.isPanning = true;
        state.lastPan = { x: e.clientX, y: e.clientY };
        if (DOM.radialCanvas) DOM.radialCanvas.style.cursor = 'grabbing';
    }

    function handlePanMove(e) {
        if (!state.isPanning) return;
        
        const dx = e.clientX - state.lastPan.x;
        const dy = e.clientY - state.lastPan.y;
        
        state.pan.x += dx / state.zoom;
        state.pan.y += dy / state.zoom;
        state.lastPan = { x: e.clientX, y: e.clientY };
        
        const transformGroup = DOM.radialCanvas?.querySelector('.transform-group');
        if (transformGroup) {
            const width = DOM.radialCanvas.clientWidth;
            const height = DOM.radialCanvas.clientHeight;
            transformGroup.setAttribute('transform', 
                `translate(${width/2}, ${height/2}) scale(${state.zoom}) translate(${-width/2 + state.pan.x}, ${-height/2 + state.pan.y})`
            );
        }
    }

    function handlePanEnd() {
        state.isPanning = false;
        if (DOM.radialCanvas) DOM.radialCanvas.style.cursor = 'grab';
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
        DOM.ctaExplore?.addEventListener('click', scrollToApp);
        DOM.scrollIndicator?.addEventListener('click', scrollToApp);
        
        // Global Search
        DOM.globalSearch?.addEventListener('input', debounce((e) => {
            handleGlobalSearch(e.target.value);
        }, 200));
        
        DOM.globalSearch?.addEventListener('blur', () => {
            setTimeout(() => {
                if (DOM.searchDropdown) DOM.searchDropdown.classList.remove('active');
            }, 200);
        });
        
        // ═══════════════════════════════════════════════════════════════════════
        // ▼▼▼ ADD THESE NEW EVENT BINDINGS FOR DROPDOWN ▼▼▼
        // ═══════════════════════════════════════════════════════════════════════
        
        // Country Dropdown - Toggle
        DOM.countrySelectorBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCountryDropdown();
        });
        
        DOM.changeCenterBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCountryDropdown();
        });
        
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
        DOM.countrySearchInput?.addEventListener('input', debounce((e) => {
            handleDropdownSearch(e.target.value);
        }, 200));
        
        // Prevent dropdown from closing when clicking inside search
        DOM.countrySearchInput?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Clear dropdown search
        DOM.clearCountrySearch?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (DOM.countrySearchInput) {
                DOM.countrySearchInput.value = '';
                handleDropdownSearch('');
            }
        });
        
        // ═══════════════════════════════════════════════════════════════════════
        // ▲▲▲ END OF NEW EVENT BINDINGS ▲▲▲
        // ═══════════════════════════════════════════════════════════════════════
        
        // Filters
        DOM.regionFilter?.addEventListener('change', (e) => {
            state.filters.region = e.target.value;
            renderDropdownCountries(state.dropdownRegion);
            renderRadialGraph();
        });
        
        DOM.typeFilter?.addEventListener('change', (e) => {
            state.filters.type = e.target.value;
            renderDropdownCountries(state.dropdownRegion);
            renderRadialGraph();
        });
        
        // View toggles
        document.querySelectorAll('.view-btn')?.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // View mode logic here
            });
        });
        
        // Sidebar buttons
        DOM.randomCountry?.addEventListener('click', () => {
            const random = UnityAtlasData.getRandomCountry();
            updateCenterCountry(random.code);
        });
        
        DOM.resetView?.addEventListener('click', resetView);
        
        // Focus mode
        DOM.closeFocus?.addEventListener('click', exitFocusMode);
        
        // Panel toggle
        DOM.togglePanel?.addEventListener('click', () => {
            if (DOM.parameterPanel) {
                DOM.parameterPanel.classList.toggle('open');
            }
        });
        
        // Zoom controls
        DOM.zoomIn?.addEventListener('click', () => handleZoom(0.2));
        DOM.zoomOut?.addEventListener('click', () => handleZoom(-0.2));
        DOM.zoomReset?.addEventListener('click', resetView);
        
        // Canvas interactions
        DOM.radialCanvas?.addEventListener('mousedown', handlePanStart);
        DOM.radialCanvas?.addEventListener('mousemove', handlePanMove);
        DOM.radialCanvas?.addEventListener('mouseup', handlePanEnd);
        DOM.radialCanvas?.addEventListener('mouseleave', handlePanEnd);
        
        DOM.radialCanvas?.addEventListener('wheel', (e) => {
            e.preventDefault();
            handleZoom(e.deltaY > 0 ? -0.1 : 0.1);
        });
        
        // Modal
        DOM.modalClose?.addEventListener('click', closeModal);
        DOM.modalCloseBtn?.addEventListener('click', closeModal);
        DOM.modalOverlay?.addEventListener('click', (e) => {
            if (e.target === DOM.modalOverlay) closeModal();
        });
        
        DOM.modalSetCenter?.addEventListener('click', () => {
            const code = DOM.modalSetCenter.dataset.code;
            closeModal();
            exitFocusMode();
            updateCenterCountry(code);
        });
        
        // Compare Modal
        DOM.compareClose?.addEventListener('click', () => {
            if (DOM.compareOverlay) DOM.compareOverlay.classList.remove('visible');
        });
        
        // Settings
        DOM.settingsBtn?.addEventListener('click', openSettings);
        DOM.settingsClose?.addEventListener('click', closeSettings);
        DOM.settingsOverlay?.addEventListener('click', (e) => {
            if (e.target === DOM.settingsOverlay) closeSettings();
        });
        
        DOM.showLabels?.addEventListener('change', updateSettings);
        DOM.showConnections?.addEventListener('change', updateSettings);
        DOM.animationsEnabled?.addEventListener('change', updateSettings);
        DOM.maxNodes?.addEventListener('change', updateSettings);
        
        // Stat boxes click to filter
        DOM.relationStats?.querySelectorAll('.stat-box').forEach(box => {
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
        }, 250));
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
    UnityAtlas.init();
});

// Make available globally
window.UnityAtlas = UnityAtlas;
