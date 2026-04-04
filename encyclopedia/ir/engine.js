/**
 * Unity Atlas - Main Engine
 * Handles all UI interactions, rendering, and application logic
 */

'use strict';

// ==================== APPLICATION STATE ====================
const AppState = {
    centerCountry: 'IN', // Default center is India
    selectedCountry: null,
    focusMode: false,
    zoom: 1,
    pan: { x: 0, y: 0 },
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    currentView: 'radial', // 'radial' or 'simple'
    filters: {
        region: 'all',
        type: 'all'
    },
    showInstructions: true,
    isLoading: true
};

// ==================== DOM ELEMENTS ====================
const DOM = {};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌍 Unity Atlas Initializing...');
    
    // Cache DOM elements
    cacheDOMElements();
    
    // Initialize components
    initHero();
    initLoading();
    initSidebar();
    initCanvas();
    initHeader();
    initModal();
    initCompare();
    initTooltip();
    initKeyboard();
    initBackToTop();
    
    // Load initial data
    setTimeout(() => {
        loadInitialData();
    }, 500);
});

/**
 * Cache frequently used DOM elements
 */
function cacheDOMElements() {
    // Hero
    DOM.hero = document.getElementById('hero');
    DOM.exploreBtn = document.getElementById('exploreBtn');
    DOM.heroParticles = document.getElementById('heroParticles');
    
    // App
    DOM.app = document.getElementById('app');
    DOM.appHeader = document.getElementById('appHeader');
    
    // Loading
    DOM.loadingScreen = document.getElementById('loadingScreen');
    DOM.loadingProgress = document.getElementById('loadingProgress');
    DOM.loadingPercent = document.getElementById('loadingPercent');
    
    // Header controls
    DOM.globalSearch = document.getElementById('globalSearch');
    DOM.searchDropdown = document.getElementById('searchDropdown');
    DOM.regionFilter = document.getElementById('regionFilter');
    DOM.typeFilter = document.getElementById('typeFilter');
    DOM.compareBtn = document.getElementById('compareBtn');
    
    // Sidebar
    DOM.sidebar = document.getElementById('sidebar');
    DOM.sidebarSearch = document.getElementById('sidebarSearch');
    DOM.countryList = document.getElementById('countryList');
    DOM.centerDisplay = document.getElementById('centerDisplay');
    DOM.centerFlag = document.getElementById('centerFlag');
    DOM.centerName = document.getElementById('centerName');
    DOM.centerCapital = document.getElementById('centerCapital');
    
    // Stats
    DOM.alliesCount = document.getElementById('alliesCount');
    DOM.strategicCount = document.getElementById('strategicCount');
    DOM.neutralCount = document.getElementById('neutralCount');
    DOM.complexCount = document.getElementById('complexCount');
    DOM.conflictCount = document.getElementById('conflictCount');
    
    // Canvas
    DOM.canvasContainer = document.getElementById('canvasContainer');
    DOM.radialCanvas = document.getElementById('radialCanvas');
    DOM.centerNode = document.getElementById('centerNode');
    DOM.nodesContainer = document.getElementById('nodesContainer');
    DOM.connectionsSvg = document.getElementById('connectionsSvg');
    DOM.parameterBurst = document.getElementById('parameterBurst');
    DOM.ringLabels = document.getElementById('ringLabels');
    
    // Zoom
    DOM.zoomIn = document.getElementById('zoomIn');
    DOM.zoomOut = document.getElementById('zoomOut');
    DOM.zoomReset = document.getElementById('zoomReset');
    DOM.zoomLevel = document.getElementById('zoomLevel');
    
    // Instructions
    DOM.instructionsOverlay = document.getElementById('instructionsOverlay');
    DOM.closeInstructions = document.getElementById('closeInstructions');
    
    // Simple view
    DOM.simpleViewPanel = document.getElementById('simpleViewPanel');
    DOM.parameterAccordions = document.getElementById('parameterAccordions');
    
    // Modal
    DOM.modalOverlay = document.getElementById('modalOverlay');
    DOM.relationshipModal = document.getElementById('relationshipModal');
    DOM.modalClose = document.getElementById('modalClose');
    DOM.modalFlagA = document.getElementById('modalFlagA');
    DOM.modalNameA = document.getElementById('modalNameA');
    DOM.modalFlagB = document.getElementById('modalFlagB');
    DOM.modalNameB = document.getElementById('modalNameB');
    DOM.modalBadge = document.getElementById('modalBadge');
    DOM.scoreProgress = document.getElementById('scoreProgress');
    DOM.scoreNumber = document.getElementById('scoreNumber');
    DOM.scoreDescription = document.getElementById('scoreDescription');
    DOM.modalParameters = document.getElementById('modalParameters');
    DOM.setAsCenterBtn = document.getElementById('setAsCenterBtn');
    DOM.closeModalBtn = document.getElementById('closeModalBtn');
    
    // Compare
    DOM.compareOverlay = document.getElementById('compareOverlay');
    DOM.compareModal = document.getElementById('compareModal');
    DOM.compareClose = document.getElementById('compareClose');
    DOM.compareA1 = document.getElementById('compareA1');
    DOM.compareA2 = document.getElementById('compareA2');
    DOM.compareB1 = document.getElementById('compareB1');
    DOM.compareB2 = document.getElementById('compareB2');
    DOM.compareResults = document.getElementById('compareResults');
    
    // Tooltip
    DOM.tooltip = document.getElementById('tooltip');
    
    // Back to top
    DOM.backToTop = document.getElementById('backToTop');
}

// ==================== HERO SECTION ====================
function initHero() {
    // Create particles
    createParticles();
    
    // Explore button
    DOM.exploreBtn?.addEventListener('click', () => {
        DOM.app.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Animate stats on load
    animateStats();
}

function createParticles() {
    const container = DOM.heroParticles;
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }
    
    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0); opacity: 0.5; }
            25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
            50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); opacity: 1; }
            75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); }
        }
    `;
    document.head.appendChild(style);
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = el.dataset.count;
                animateNumber(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(el => observer.observe(el));
}

function animateNumber(element, target) {
    const hasPlus = target.includes('+');
    const numTarget = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const start = Date.now();
    
    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(numTarget * eased);
        
        element.textContent = current.toLocaleString() + (hasPlus ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// ==================== LOADING SCREEN ====================
function initLoading() {
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        updateLoadingProgress(progress);
    }, 150);
}

function updateLoadingProgress(percent) {
    DOM.loadingProgress.style.width = percent + '%';
    DOM.loadingPercent.textContent = Math.round(percent) + '%';
}

function hideLoading() {
    DOM.loadingScreen.classList.add('hidden');
    setTimeout(() => {
        DOM.loadingScreen.style.display = 'none';
    }, 500);
}

function loadInitialData() {
    console.log('📥 Loading initial data...');
    
    // Populate country list
    populateCountryList();
    
    // Set initial center
    setCenterCountry(AppState.centerCountry);
    
    // Render radial view
    renderRadialView();
    
    // Check for instructions
    if (localStorage.getItem('unityAtlasInstructionsSeen')) {
        AppState.showInstructions = false;
    } else {
        showInstructions();
    }
    
    // Hide loading
    AppState.isLoading = false;
    hideLoading();
    
    console.log('✅ Unity Atlas Ready!');
}

// ==================== SIDEBAR ====================
function initSidebar() {
    // Sidebar search
    DOM.sidebarSearch?.addEventListener('input', debounce((e) => {
        filterCountryList(e.target.value);
    }, 200));
}

function populateCountryList() {
    const grouped = DataUtils.getCountriesGrouped();
    let html = '';
    
    const regionOrder = ['asia', 'europe', 'africa', 'americas', 'oceania'];
    
    regionOrder.forEach(region => {
        const countries = grouped[region] || [];
        if (countries.length === 0) return;
        
        html += `
            <div class="region-group" data-region="${region}">
                <div class="region-header">${DataUtils.getRegionName(region)} (${countries.length})</div>
                ${countries.map(c => `
                    <div class="country-item ${c.code === AppState.centerCountry ? 'active' : ''}" 
                         data-code="${c.code}">
                        <span class="country-item-flag">${c.flag}</span>
                        <span class="country-item-name">${c.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    DOM.countryList.innerHTML = html;
    
    // Add click handlers
    DOM.countryList.querySelectorAll('.country-item').forEach(item => {
        item.addEventListener('click', () => {
            const code = item.dataset.code;
            setCenterCountry(code);
        });
    });
}

function filterCountryList(query) {
    const items = DOM.countryList.querySelectorAll('.country-item');
    const q = query.toLowerCase().trim();
    
    items.forEach(item => {
        const name = item.querySelector('.country-item-name').textContent.toLowerCase();
        const match = !q || name.includes(q);
        item.style.display = match ? '' : 'none';
    });
    
    // Show/hide region headers based on visible items
    DOM.countryList.querySelectorAll('.region-group').forEach(group => {
        const visibleItems = group.querySelectorAll('.country-item[style=""], .country-item:not([style])');
        const hasVisible = Array.from(visibleItems).some(item => item.style.display !== 'none');
        group.style.display = hasVisible ? '' : 'none';
    });
}

function updateCenterDisplay() {
    const country = DataUtils.getCountry(AppState.centerCountry);
    if (!country) return;
    
    DOM.centerFlag.textContent = country.flag;
    DOM.centerName.textContent = country.name;
    DOM.centerCapital.textContent = country.capital;
    
    // Update active state in list
    DOM.countryList.querySelectorAll('.country-item').forEach(item => {
        item.classList.toggle('active', item.dataset.code === AppState.centerCountry);
    });
}

function updateStats(stats) {
    DOM.alliesCount.textContent = stats.allies || 0;
    DOM.strategicCount.textContent = stats.strategic || 0;
    DOM.neutralCount.textContent = stats.neutral || 0;
    DOM.complexCount.textContent = stats.complex || 0;
    DOM.conflictCount.textContent = stats.conflict || 0;
}

// ==================== HEADER ====================
function initHeader() {
    // Global search
    DOM.globalSearch?.addEventListener('input', debounce((e) => {
        handleGlobalSearch(e.target.value);
    }, 200));
    
    DOM.globalSearch?.addEventListener('focus', () => {
        if (DOM.globalSearch.value.trim()) {
            DOM.searchDropdown.classList.add('active');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            DOM.searchDropdown.classList.remove('active');
        }
    });
    
    // Region filter
    DOM.regionFilter?.addEventListener('change', (e) => {
        AppState.filters.region = e.target.value;
        applyFilters();
    });
    
    // Type filter
    DOM.typeFilter?.addEventListener('change', (e) => {
        AppState.filters.type = e.target.value;
        applyFilters();
    });
    
    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.currentView = btn.dataset.view;
            toggleView();
        });
    });
    
    // Compare button
    DOM.compareBtn?.addEventListener('click', openCompare);
}

function handleGlobalSearch(query) {
    const results = DataUtils.searchCountries(query);
    
    if (results.length === 0 || !query.trim()) {
        DOM.searchDropdown.classList.remove('active');
        return;
    }
    
    let html = results.map(c => `
        <div class="search-result" data-code="${c.code}">
            <span class="search-result-flag">${c.flag}</span>
            <span class="search-result-name">${c.name}</span>
            <span class="search-result-region">${DataUtils.getRegionName(c.region)}</span>
        </div>
    `).join('');
    
    DOM.searchDropdown.innerHTML = html;
    DOM.searchDropdown.classList.add('active');
    
    // Add click handlers
    DOM.searchDropdown.querySelectorAll('.search-result').forEach(item => {
        item.addEventListener('click', () => {
            setCenterCountry(item.dataset.code);
            DOM.globalSearch.value = '';
            DOM.searchDropdown.classList.remove('active');
        });
    });
}

function applyFilters() {
    renderRadialView();
}

function toggleView() {
    if (AppState.currentView === 'simple') {
        DOM.simpleViewPanel.classList.add('active');
        renderSimpleView();
    } else {
        DOM.simpleViewPanel.classList.remove('active');
    }
}

// ==================== CANVAS ====================
function initCanvas() {
    // Zoom controls
    DOM.zoomIn?.addEventListener('click', () => setZoom(AppState.zoom + 0.2));
    DOM.zoomOut?.addEventListener('click', () => setZoom(AppState.zoom - 0.2));
    DOM.zoomReset?.addEventListener('click', () => setZoom(1));
    
    // Mouse wheel zoom
    DOM.canvasContainer?.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom(AppState.zoom + delta);
    }, { passive: false });
    
    // Pan with drag
    DOM.radialCanvas?.addEventListener('mousedown', (e) => {
        if (e.target.closest('.country-node') || e.target.closest('.center-node')) return;
        AppState.isDragging = true;
        AppState.dragStart = { x: e.clientX - AppState.pan.x, y: e.clientY - AppState.pan.y };
        DOM.radialCanvas.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!AppState.isDragging) return;
        AppState.pan.x = e.clientX - AppState.dragStart.x;
        AppState.pan.y = e.clientY - AppState.dragStart.y;
        updateCanvasTransform();
    });
    
    document.addEventListener('mouseup', () => {
        AppState.isDragging = false;
        DOM.radialCanvas.style.cursor = '';
    });
    
    // Instructions
    DOM.closeInstructions?.addEventListener('click', hideInstructions);
}

function setZoom(level) {
    AppState.zoom = Math.min(2, Math.max(0.5, level));
    DOM.zoomLevel.textContent = Math.round(AppState.zoom * 100) + '%';
    updateCanvasTransform();
}

function updateCanvasTransform() {
    DOM.radialCanvas.style.transform = `translate(-50%, -50%) translate(${AppState.pan.x}px, ${AppState.pan.y}px) scale(${AppState.zoom})`;
}

function showInstructions() {
    DOM.instructionsOverlay?.classList.add('active');
}

function hideInstructions() {
    DOM.instructionsOverlay?.classList.remove('active');
    localStorage.setItem('unityAtlasInstructionsSeen', 'true');
}

// ==================== RADIAL VIEW RENDERING ====================
function setCenterCountry(code) {
    AppState.centerCountry = code.toUpperCase();
    AppState.selectedCountry = null;
    AppState.focusMode = false;
    
    updateCenterDisplay();
    renderRadialView();
}

function renderRadialView() {
    const data = RelationshipEngine.getRadialData(AppState.centerCountry);
    
    // Update center node
    const centerCountry = data.center;
    DOM.centerNode.querySelector('.center-node-flag').textContent = centerCountry.flag;
    DOM.centerNode.querySelector('.center-node-name').textContent = centerCountry.name;
    
    // Update stats
    updateStats(data.stats);
    
    // Clear nodes
    DOM.nodesContainer.innerHTML = '';
    DOM.connectionsSvg.innerHTML = '';
    DOM.ringLabels.innerHTML = '';
    
    // Get container dimensions
    const containerRect = DOM.canvasContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    // Ring configuration
    const baseRadius = 120;
    const ringSpacing = 80;
    
    // Render rings and nodes
    data.rings.forEach((ring, ringIndex) => {
        if (ring.countries.length === 0) return;
        
        // Apply filters
        let countries = ring.countries;
        
        if (AppState.filters.region !== 'all') {
            countries = countries.filter(c => c.region === AppState.filters.region);
        }
        
        if (AppState.filters.type !== 'all' && ring.type !== AppState.filters.type) {
            return;
        }
        
        if (countries.length === 0) return;
        
        // Calculate ring radius
        // Split large rings into sub-rings
        const maxPerRing = 25;
        const subRings = Math.ceil(countries.length / maxPerRing);
        
        for (let subRing = 0; subRing < subRings; subRing++) {
            const startIdx = subRing * maxPerRing;
            const endIdx = Math.min(startIdx + maxPerRing, countries.length);
            const subCountries = countries.slice(startIdx, endIdx);
            
            const radius = baseRadius + (ringIndex * ringSpacing * subRings) + (subRing * ringSpacing * 0.6);
            const angleStep = (2 * Math.PI) / subCountries.length;
            
            // Add ring label (only for first sub-ring)
            if (subRing === 0) {
                const labelEl = document.createElement('div');
                labelEl.className = 'ring-label';
                labelEl.textContent = ring.label;
                labelEl.style.cssText = `
                    left: 50%;
                    top: ${50 - (radius / (containerRect.height / 2)) * 45}%;
                    transform: translateX(-50%);
                `;
                DOM.ringLabels.appendChild(labelEl);
            }
            
            // Render country nodes
            subCountries.forEach((country, index) => {
                const angle = angleStep * index - Math.PI / 2;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                const node = createCountryNode(country, ring.type, x, y);
                DOM.nodesContainer.appendChild(node);
            });
        }
    });
}

function createCountryNode(country, type, x, y) {
    const node = document.createElement('div');
    node.className = `country-node ${type}`;
    node.dataset.code = country.code;
    node.style.left = x + 'px';
    node.style.top = y + 'px';
    
    node.innerHTML = `<span class="country-node-flag">${country.flag}</span>`;
    
    // Event handlers
    node.addEventListener('mouseenter', (e) => {
        showTooltip(e, country, type);
        showConnection(country.code);
    });
    
    node.addEventListener('mouseleave', () => {
        hideTooltip();
        hideConnection();
    });
    
    node.addEventListener('click', (e) => {
        e.stopPropagation();
        openRelationshipModal(AppState.centerCountry, country.code);
    });
    
    node.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        setCenterCountry(country.code);
    });
    
    return node;
}

function showConnection(targetCode) {
    const centerRect = DOM.centerNode.getBoundingClientRect();
    const targetNode = DOM.nodesContainer.querySelector(`[data-code="${targetCode}"]`);
    if (!targetNode) return;
    
    const targetRect = targetNode.getBoundingClientRect();
    const canvasRect = DOM.radialCanvas.getBoundingClientRect();
    
    const x1 = centerRect.left + centerRect.width / 2 - canvasRect.left;
    const y1 = centerRect.top + centerRect.height / 2 - canvasRect.top;
    const x2 = targetRect.left + targetRect.width / 2 - canvasRect.left;
    const y2 = targetRect.top + targetRect.height / 2 - canvasRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.classList.add('connection-line', 'active');
    
    DOM.connectionsSvg.innerHTML = '';
    DOM.connectionsSvg.appendChild(line);
}

function hideConnection() {
    DOM.connectionsSvg.innerHTML = '';
}

// ==================== SIMPLE VIEW ====================
function renderSimpleView() {
    if (!AppState.selectedCountry) {
        DOM.parameterAccordions.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-info-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>Click on a country to view parameter details</p>
            </div>
        `;
        return;
    }
    
    const relationship = RelationshipEngine.getRelationship(
        AppState.centerCountry, 
        AppState.selectedCountry
    );
    
    let html = '';
    
    PARAMETERS.forEach(param => {
        const paramData = relationship.parameters[param.id];
        
        html += `
            <div class="parameter-accordion" data-param="${param.id}">
                <div class="parameter-accordion-header">
                    <div class="parameter-accordion-title">
                        <i class="fas ${param.icon}"></i>
                        <span>${param.name}</span>
                    </div>
                    <i class="fas fa-chevron-down parameter-accordion-arrow"></i>
                </div>
                <div class="parameter-accordion-body">
                    <p>${paramData.summary}</p>
                    <ul>
                        ${paramData.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    DOM.parameterAccordions.innerHTML = html;
    
    // Add toggle handlers
    DOM.parameterAccordions.querySelectorAll('.parameter-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('open');
        });
    });
}

// ==================== MODAL ====================
function initModal() {
    DOM.modalClose?.addEventListener('click', closeModal);
    DOM.closeModalBtn?.addEventListener('click', closeModal);
    
    DOM.modalOverlay?.addEventListener('click', (e) => {
        if (e.target === DOM.modalOverlay) closeModal();
    });
    
    DOM.setAsCenterBtn?.addEventListener('click', () => {
        if (AppState.selectedCountry) {
            setCenterCountry(AppState.selectedCountry);
            closeModal();
        }
    });
    
    // Parameter card expansion
    DOM.modalParameters?.addEventListener('click', (e) => {
        const card = e.target.closest('.parameter-card');
        if (card && e.target.closest('.parameter-header')) {
            card.classList.toggle('open');
        }
    });
}

function openRelationshipModal(codeA, codeB) {
    AppState.selectedCountry = codeB;
    
    const relationship = RelationshipEngine.getRelationship(codeA, codeB);
    const countryA = DataUtils.getCountry(codeA);
    const countryB = DataUtils.getCountry(codeB);
    
    // Update header
    DOM.modalFlagA.textContent = countryA.flag;
    DOM.modalNameA.textContent = countryA.name;
    DOM.modalFlagB.textContent = countryB.flag;
    DOM.modalNameB.textContent = countryB.name;
    
    // Update badge
    DOM.modalBadge.querySelector('.badge-type').textContent = DataUtils.getTypeName(relationship.type);
    DOM.modalBadge.className = 'modal-badge ' + relationship.type;
    
    // Update score
    const scorePercent = (relationship.score / 10) * 100;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (scorePercent / 100) * circumference;
    
    DOM.scoreProgress.style.strokeDashoffset = offset;
    DOM.scoreProgress.style.stroke = DataUtils.getTypeColor(relationship.type);
    DOM.scoreNumber.textContent = relationship.score.toFixed(1);
    DOM.scoreDescription.textContent = relationship.description;
    
    // Render parameters
    renderModalParameters(relationship.parameters);
    
    // Show modal
    DOM.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderModalParameters(parameters) {
    let html = '';
    
    PARAMETERS.forEach(param => {
        const data = parameters[param.id];
        const scoreColor = getScoreColor(data.score);
        const scoreWidth = (data.score / 10) * 100;
        
        html += `
            <div class="parameter-card" data-param="${param.id}">
                <div class="parameter-header">
                    <div class="parameter-icon">
                        <i class="fas ${param.icon}"></i>
                    </div>
                    <div class="parameter-info">
                        <span class="parameter-name">${param.name}</span>
                        <span class="parameter-category">${param.category}</span>
                    </div>
                    <div class="parameter-score-bar">
                        <div class="parameter-score-fill" style="width: ${scoreWidth}%; background: ${scoreColor};"></div>
                    </div>
                    <span class="parameter-score-value">${data.score.toFixed(1)}</span>
                    <i class="fas fa-chevron-down parameter-arrow"></i>
                </div>
                <div class="parameter-body">
                    <p class="parameter-overview">${data.summary}</p>
                    <div class="parameter-points">
                        <h5>Key Points</h5>
                        <ul>
                            ${data.bullets.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="parameter-analysis">
                        ${data.analysis}
                    </div>
                </div>
            </div>
        `;
    });
    
    DOM.modalParameters.innerHTML = html;
}

function getScoreColor(score) {
    if (score >= 8) return '#00c853';
    if (score >= 6) return '#2196f3';
    if (score >= 4) return '#ffc107';
    if (score >= 2) return '#ff9800';
    return '#f44336';
}

function closeModal() {
    DOM.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    AppState.selectedCountry = null;
}

// ==================== COMPARE ====================
function initCompare() {
    DOM.compareClose?.addEventListener('click', closeCompare);
    
    DOM.compareOverlay?.addEventListener('click', (e) => {
        if (e.target === DOM.compareOverlay) closeCompare();
    });
    
    // Populate selects
    const countries = DataUtils.getAllCountries();
    const options = countries.map(c => `<option value="${c.code}">${c.flag} ${c.name}</option>`).join('');
    
    [DOM.compareA1, DOM.compareA2, DOM.compareB1, DOM.compareB2].forEach(select => {
        if (select) select.innerHTML = options;
    });
    
    // Change handlers
    [DOM.compareA1, DOM.compareA2, DOM.compareB1, DOM.compareB2].forEach(select => {
        select?.addEventListener('change', updateCompareResults);
    });
}

function openCompare() {
    DOM.compareOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set defaults
    DOM.compareA1.value = AppState.centerCountry;
    DOM.compareA2.value = 'US';
    DOM.compareB1.value = AppState.centerCountry;
    DOM.compareB2.value = 'CN';
    
    updateCompareResults();
}

function closeCompare() {
    DOM.compareOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function updateCompareResults() {
    const rel1 = RelationshipEngine.getRelationship(DOM.compareA1.value, DOM.compareA2.value);
    const rel2 = RelationshipEngine.getRelationship(DOM.compareB1.value, DOM.compareB2.value);
    
    let html = `
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">Parameter</th>
                    <th style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        ${COUNTRIES[DOM.compareA1.value]?.flag || ''} ↔ ${COUNTRIES[DOM.compareA2.value]?.flag || ''}
                    </th>
                    <th style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                        ${COUNTRIES[DOM.compareB1.value]?.flag || ''} ↔ ${COUNTRIES[DOM.compareB2.value]?.flag || ''}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">Overall Score</td>
                    <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${getScoreColor(rel1.score)}; font-weight: 600;">${rel1.score.toFixed(1)}</td>
                    <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${getScoreColor(rel2.score)}; font-weight: 600;">${rel2.score.toFixed(1)}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">Relationship Type</td>
                    <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${DataUtils.getTypeColor(rel1.type)};">${DataUtils.getTypeName(rel1.type)}</td>
                    <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${DataUtils.getTypeColor(rel2.type)};">${DataUtils.getTypeName(rel2.type)}</td>
                </tr>
    `;
    
    PARAMETERS.forEach(param => {
        const score1 = rel1.parameters[param.id]?.score || 5;
        const score2 = rel2.parameters[param.id]?.score || 5;
        
        html += `
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <i class="fas ${param.icon}" style="margin-right: 8px; color: var(--accent-primary);"></i>
                    ${param.name}
                </td>
                <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${getScoreColor(score1)};">${score1.toFixed(1)}</td>
                <td style="text-align: center; padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); color: ${getScoreColor(score2)};">${score2.toFixed(1)}</td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    
    DOM.compareResults.innerHTML = html;
}

// ==================== TOOLTIP ====================
function initTooltip() {
    // Tooltip follows mouse
    document.addEventListener('mousemove', (e) => {
        if (DOM.tooltip.classList.contains('active')) {
            positionTooltip(e);
        }
    });
}

function showTooltip(event, country, type) {
    const relationship = RelationshipEngine.getRelationship(AppState.centerCountry, country.code);
    
    DOM.tooltip.querySelector('.tooltip-flag').textContent = country.flag;
    DOM.tooltip.querySelector('.tooltip-name').textContent = country.name;
    DOM.tooltip.querySelector('.tooltip-capital').innerHTML = `<strong>Capital:</strong> ${country.capital}`;
    DOM.tooltip.querySelector('.tooltip-relation').textContent = DataUtils.getTypeName(type);
    DOM.tooltip.querySelector('.tooltip-relation').style.background = DataUtils.getTypeColor(type);
    DOM.tooltip.querySelector('.tooltip-score').innerHTML = `<strong>Score:</strong> ${relationship.score.toFixed(1)}/10`;
    
    positionTooltip(event);
    DOM.tooltip.classList.add('active');
}

function positionTooltip(event) {
    const padding = 15;
    let x = event.clientX + padding;
    let y = event.clientY + padding;
    
    // Keep tooltip in viewport
    const rect = DOM.tooltip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth) {
        x = event.clientX - rect.width - padding;
    }
    if (y + rect.height > window.innerHeight) {
        y = event.clientY - rect.height - padding;
    }
    
    DOM.tooltip.style.left = x + 'px';
    DOM.tooltip.style.top = y + 'px';
}

function hideTooltip() {
    DOM.tooltip.classList.remove('active');
}

// ==================== KEYBOARD NAVIGATION ====================
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        // ESC to close modals
        if (e.key === 'Escape') {
            if (DOM.modalOverlay.classList.contains('active')) {
                closeModal();
            }
            if (DOM.compareOverlay.classList.contains('active')) {
                closeCompare();
            }
            if (DOM.instructionsOverlay?.classList.contains('active')) {
                hideInstructions();
            }
        }
        
        // Zoom with +/-
        if (e.key === '+' || e.key === '=') {
            setZoom(AppState.zoom + 0.2);
        }
        if (e.key === '-') {
            setZoom(AppState.zoom - 0.2);
        }
        
        // Reset zoom with 0
        if (e.key === '0') {
            setZoom(1);
        }
    });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        const heroHeight = DOM.hero?.offsetHeight || 0;
        DOM.backToTop.classList.toggle('visible', window.scrollY > heroHeight);
    });
    
    DOM.backToTop?.addEventListener('click', () => {
        DOM.hero?.scrollIntoView({ behavior: 'smooth' });
    });
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

// Log ready state
console.log('⚙️ Unity Atlas Engine Loaded');
