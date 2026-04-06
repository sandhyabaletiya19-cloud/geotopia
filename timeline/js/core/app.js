/**
 * GEOTOPIA - MAIN APPLICATION
 * The Brain that connects everything
 * Bharat Ratna + Nobel Prize worthy orchestration
 */

class GEOTOPIAApp {
    constructor() {
        this.version = '1.0.0';
        this.isInitialized = false;
        this.isLoading = true;

        // Engine references
        this.dataEngine = null;
        this.mapEngine = null;
        this.timelineEngine = null;

        // UI state
        this.currentView = 'global'; // global, regional, detail
        this.searchResults = [];
        this.selectedEvent = null;
        this.infoPanelOpen = false;

        // Settings
        this.settings = {
            theme: 'dark',
            quality: 'high',
            animations: true,
            sound: false,
            language: 'en',
            autoPlay: false,
            showLabels: true,
            showGrid: true
        };

        // Loading phases
        this.loadingPhases = [
            { name: 'bigbang', duration: 1000, progress: 0 },
            { name: 'accretion', duration: 1000, progress: 16.67 },
            { name: 'cooling', duration: 1000, progress: 33.33 },
            { name: 'life', duration: 1000, progress: 50 },
            { name: 'modern', duration: 1000, progress: 66.67 },
            { name: 'ready', duration: 1000, progress: 83.33 }
        ];

        this.currentPhase = 0;

        // Performance monitoring
        this.performanceMetrics = {
            fps: 60,
            renderTime: 0,
            dataLoadTime: 0,
            initTime: 0
        };

        // Event listeners storage
        this.eventListeners = [];

        // Start initialization
        this.init();
    }

    // ============================================================
    // INITIALIZATION SEQUENCE
    // ============================================================

    /**
     * Main initialization
     */
    async init() {
        console.log('🌍 GEOTOPIA v' + this.version + ' - Initializing...');
        const startTime = performance.now();

        try {
            // Show loading screen
            await this.showLoadingSequence();

            // Load user settings
            this.loadSettings();

            // Initialize engines in sequence
            await this.initializeEngines();

            // Setup UI
            await this.setupUI();

            // Load initial data
            await this.loadInitialData();

            // Setup event bindings
            this.bindEvents();

            // Hide loading screen
            await this.hideLoadingScreen();

            // Mark as initialized
            this.isInitialized = true;
            this.isLoading = false;

            // Performance metrics
            this.performanceMetrics.initTime = performance.now() - startTime;

            console.log(`✅ GEOTOPIA initialized in ${this.performanceMetrics.initTime.toFixed(0)}ms`);

            // Auto-start if enabled
            if (this.settings.autoPlay) {
                setTimeout(() => {
                    if (this.timelineEngine) {
                        this.timelineEngine.play();
                    }
                }, 2000);
            }

            // Show welcome message
            this.showWelcomeMessage();

        } catch (error) {
            console.error('❌ GEOTOPIA initialization failed:', error);
            this.showErrorScreen(error);
        }
    }

    /**
     * Initialize all engines
     */
    async initializeEngines() {
    console.log('⚙️ APP: Initializing engines...');

    try {
        // Data Engine
        console.log('📊 APP: Initializing Data Engine...');
        if (typeof DataEngine !== 'undefined') {
            this.dataEngine = dataEngine || new DataEngine();
            await this.dataEngine.initDatabase();
            console.log('  ✅ Data Engine initialized');
            this.updateLoadingProgress('Indexing geological data...', 25);
        } else {
            console.error('  ❌ DataEngine class not found!');
        }

        // Map Engine
        console.log('🗺️ APP: Initializing Map Engine...');
        if (typeof MapEngine !== 'undefined') {
            this.mapEngine = mapEngine || new MapEngine();
            
            // DON'T call init yet - we'll do it manually
            console.log('  ⏳ Map Engine created, calling init()...');
            await this.mapEngine.init();
            console.log('  ✅ Map Engine initialized');
            
            this.updateLoadingProgress('Rendering 3D globe...', 50);
        } else {
            console.error('  ❌ MapEngine class not found!');
        }

        // Timeline Engine
        console.log('📅 APP: Initializing Timeline Engine...');
        if (typeof TimelineEngine !== 'undefined') {
            this.timelineEngine = timelineEngine || new TimelineEngine();
            
            // Timeline init is synchronous but returns nothing, so just call it
            this.timelineEngine.init();
            console.log('  ✅ Timeline Engine initialized');
            
            this.updateLoadingProgress('Building timeline...', 75);
        } else {
            console.error('  ❌ TimelineEngine class not found!');
        }

        // Connect engines
        console.log('🔗 APP: Connecting engines...');
        this.connectEngines();

        this.updateLoadingProgress('Finalizing...', 90);
        
        console.log('✅ APP: All engines initialized successfully');
        
    } catch (error) {
        console.error('❌ APP: Engine initialization failed:', error);
        console.error('Error stack:', error.stack);
        throw error;
    }
}

    /**
     * Connect engines together
     */
    connectEngines() {
        if (!this.timelineEngine || !this.mapEngine || !this.dataEngine) {
            console.warn('⚠️ Not all engines available for connection');
            return;
        }

        // Timeline controls map
        this.timelineEngine.onYearChange = (year) => {
            this.onYearChanged(year);
        };

        this.timelineEngine.onEraChange = (era) => {
            this.onEraChanged(era);
        };

        // Map click events
        if (this.mapEngine.renderer) {
            this.mapEngine.renderer.domElement.addEventListener('click', (e) => {
                this.onMapClick(e);
            });
        }

        console.log('🔗 Engines connected');
    }

    // ============================================================
    // LOADING SCREEN MAGIC
    // ============================================================

    /**
     * Epic 6-phase loading sequence
     */
    async showLoadingSequence() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) {
            console.warn('Loading screen element not found');
            return;
        }

        loadingScreen.style.display = 'flex';

        // Phase 1: Big Bang
        await this.runLoadingPhase('bigbang', () => {
            this.createBigBangEffect();
        });

        // Phase 2: Accretion
        await this.runLoadingPhase('accretion', () => {
            this.createAccretionEffect();
        });

        // Phase 3: Cooling
        await this.runLoadingPhase('cooling', () => {
            this.createCoolingEffect();
        });

        // Phase 4: Life Emerges
        await this.runLoadingPhase('life', () => {
            this.createLifeEffect();
        });

        // Phase 5: Modern Earth
        await this.runLoadingPhase('modern', () => {
            this.createModernEffect();
        });

        // Phase 6: Ready
        await this.runLoadingPhase('ready', () => {
            this.createReadyEffect();
        });
    }

    /**
     * Run a single loading phase
     */
    async runLoadingPhase(phaseName, effectFunction) {
        return new Promise((resolve) => {
            const phase = this.loadingPhases.find(p => p.name === phaseName);
            if (!phase) {
                resolve();
                return;
            }

            // Update UI
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.setAttribute('data-phase', phaseName);
            }

            // Update title
            const title = document.querySelector('.loading-title');
            if (title) {
                const titles = {
                    bigbang: 'THE BIG BANG',
                    accretion: 'EARTH FORMS',
                    cooling: 'COOLING & SOLIDIFYING',
                    life: 'LIFE EMERGES',
                    modern: 'CIVILIZATION RISES',
                    ready: 'READY TO EXPLORE'
                };
                title.textContent = titles[phaseName] || phaseName.toUpperCase();
            }

            // Update progress
            this.updateLoadingProgress(phase.name, phase.progress);

            // Run visual effect
            if (effectFunction) {
                effectFunction();
            }

            // Wait for duration
            setTimeout(resolve, phase.duration);
        });
    }

    /**
     * Big Bang visual effect
     */
    createBigBangEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 200;

        // Create particles at center
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                size: Math.random() * 3,
                color: `hsl(${Math.random() * 60 + 10}, 100%, ${Math.random() * 50 + 50}%)`
            });
        }

        // Animate explosion
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.99;
                p.vy *= 0.99;

                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            if (particles[0].vx > 0.1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    /**
     * Accretion effect (particles forming sphere)
     */
    createAccretionEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const particles = [];
        for (let i = 0; i < 300; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 100;
            particles.push({
                x: centerX + Math.cos(angle) * distance,
                y: centerY + Math.sin(angle) * distance,
                targetX: centerX,
                targetY: centerY,
                size: Math.random() * 2 + 1,
                color: `hsl(${Math.random() * 30 + 15}, 80%, 50%)`
            });
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            let allSettled = true;

            particles.forEach(p => {
                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > 1) {
                    allSettled = false;
                    p.x += dx * 0.05;
                    p.y += dy * 0.05;
                }

                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            if (!allSettled) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    /**
     * Cooling effect (red to brown)
     */
    createCoolingEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        let hue = 10; // Red

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw cooling sphere
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
            gradient.addColorStop(0, `hsl(${hue}, 80%, 50%)`);
            gradient.addColorStop(1, `hsl(${hue}, 60%, 20%)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();

            hue += 0.5;
            if (hue < 30) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    /**
     * Life emerges effect (green tint)
     */
    createLifeEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        let greenIntensity = 0;

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Earth with life
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
            gradient.addColorStop(0, `rgba(0, ${100 + greenIntensity}, ${50 + greenIntensity / 2}, 1)`);
            gradient.addColorStop(0.7, `rgba(0, ${50 + greenIntensity / 2}, ${100 + greenIntensity}, 1)`);
            gradient.addColorStop(1, `rgba(0, 0, ${50 + greenIntensity / 4}, 1)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
            ctx.fill();

            greenIntensity += 2;
            if (greenIntensity < 100) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    /**
     * Modern Earth effect (blue marble)
     */
    createModernEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
        gradient.addColorStop(0, '#4a9eff');
        gradient.addColorStop(0.5, '#2a7edf');
        gradient.addColorStop(1, '#1a4d7a');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
        ctx.fill();

        // Add white clouds
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 80;
            const x = centerX + Math.cos(angle) * dist;
            const y = centerY + Math.sin(angle) * dist;

            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 10 + 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    /**
     * Ready effect (pulse)
     */
    createReadyEffect() {
        const canvas = document.getElementById('loading-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        let pulseRadius = 100;
        let growing = true;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Earth
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
            gradient.addColorStop(0, '#4a9eff');
            gradient.addColorStop(1, '#1a4d7a');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
            ctx.fill();

            // Pulse ring
            ctx.strokeStyle = `rgba(74, 158, 255, ${1 - (pulseRadius - 100) / 50})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
            ctx.stroke();

            pulseRadius += growing ? 2 : -2;
            if (pulseRadius > 150) growing = false;
            if (pulseRadius < 100) growing = true;

            requestAnimationFrame(animate);
        };

        animate();
    }

    /**
     * Update loading progress bar
     */
    updateLoadingProgress(text, percent) {
        const progressBar = document.querySelector('.loading-progress-fill');
        const progressText = document.querySelector('.loading-subtitle');

        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }

        if (progressText) {
            progressText.textContent = text;
        }
    }

    /**
     * Hide loading screen with fade out
     */
    async hideLoadingScreen() {
        return new Promise((resolve) => {
            const loadingScreen = document.getElementById('loading-screen');
            if (!loadingScreen) {
                resolve();
                return;
            }

            loadingScreen.classList.add('fade-out');

            setTimeout(() => {
                loadingScreen.style.display = 'none';
                resolve();
            }, 1000);
        });
    }

    // ============================================================
    // UI SETUP
    // ============================================================

    /**
     * Setup all UI components
     */
    async setupUI() {
        this.setupHeader();
        this.setupInfoPanel();
        this.setupSearch();
        this.setupModals();
        this.setupTooltips();
        this.setupKeyboardShortcuts();
        this.setupResponsive();
    }

    /**
     * Setup header controls
     */
    setupHeader() {
        // View mode toggle
        const btn2D3D = document.getElementById('btn-2d-3d');
        if (btn2D3D) {
            btn2D3D.addEventListener('click', () => this.toggle2D3D());
        }

        // Search button
        const btnSearch = document.getElementById('btn-search');
        if (btnSearch) {
            btnSearch.addEventListener('click', () => this.openSearchModal());
        }

        // Settings button
        const btnSettings = document.getElementById('btn-settings');
        if (btnSettings) {
            btnSettings.addEventListener('click', () => this.openSettingsModal());
        }

        // About button
        const btnAbout = document.getElementById('btn-about');
        if (btnAbout) {
            btnAbout.addEventListener('click', () => this.openAboutModal());
        }

        // Fullscreen button
        const btnFullscreen = document.getElementById('btn-fullscreen');
        if (btnFullscreen) {
            btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
        }
    }

    /**
     * Setup info panel
     */
    setupInfoPanel() {
        const infoPanelToggle = document.getElementById('info-panel-toggle');
        const infoPanel = document.querySelector('.info-panel');

        if (infoPanelToggle && infoPanel) {
            infoPanelToggle.addEventListener('click', () => {
                this.infoPanelOpen = !this.infoPanelOpen;
                infoPanel.classList.toggle('open', this.infoPanelOpen);
                infoPanelToggle.textContent = this.infoPanelOpen ? '→' : '←';
            });
        }

        // Close button in panel
        const closeBtn = document.querySelector('.info-panel .close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.infoPanelOpen = false;
                infoPanel.classList.remove('open');
                if (infoPanelToggle) infoPanelToggle.textContent = '←';
            });
        }
    }

    /**
     * Setup search functionality
     */
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }

        // Close search on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSearchModal();
            }
        });
    }

    /**
     * Perform search across all events
     */
    performSearch(query) {
        if (!query || query.length < 2) {
            this.searchResults = [];
            this.renderSearchResults();
            return;
        }

        const lowerQuery = query.toLowerCase();

        this.searchResults = this.dataEngine.timelineData.filter(event => {
            return event.name.toLowerCase().includes(lowerQuery) ||
                   (event.description && event.description.toLowerCase().includes(lowerQuery)) ||
                   (event.type && event.type.toLowerCase().includes(lowerQuery));
        }).slice(0, 20); // Limit to 20 results

        this.renderSearchResults();
    }

    /**
     * Render search results
     */
    renderSearchResults() {
        const resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;

        if (this.searchResults.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
            return;
        }

        resultsContainer.innerHTML = this.searchResults.map(event => `
            <div class="search-result-item" data-year="${event.year}">
                <span class="result-type ${event.type}">${event.type}</span>
                <div class="result-content">
                    <strong>${event.name}</strong>
                    <small>${this.timelineEngine.formatYear(event.year)}</small>
                </div>
            </div>
        `).join('');

        // Add click handlers
        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const year = parseInt(item.getAttribute('data-year'));
                this.timelineEngine.goToYear(year);
                this.closeSearchModal();
            });
        });
    }

    /**
     * Setup modals
     */
    setupModals() {
        // Close modal on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeAllModals();
                }
            });
        });

        // Close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeAllModals();
            });
        });

        // Settings form
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm) {
            // Load current settings
            Object.keys(this.settings).forEach(key => {
                const input = settingsForm.querySelector(`[name="${key}"]`);
                if (input) {
                    if (input.type === 'checkbox') {
                        input.checked = this.settings[key];
                    } else {
                        input.value = this.settings[key];
                    }
                }
            });

            // Save on change
            settingsForm.addEventListener('change', () => {
                this.saveSettings(new FormData(settingsForm));
            });
        }
    }

    /**
     * Setup tooltips
     */
    setupTooltips() {
        document.querySelectorAll('[data-tooltip]').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target.getAttribute('data-tooltip'), e);
            });

            el.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger if typing in input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            switch (e.key.toLowerCase()) {
                case 's':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.openSearchModal();
                    }
                    break;
                case 'f':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;
                case 'i':
                    e.preventDefault();
                    this.toggleInfoPanel();
                    break;
                case '?':
                    e.preventDefault();
                    this.showKeyboardShortcuts();
                    break;
            }
        });
    }

    /**
     * Setup responsive behavior
     */
    setupResponsive() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.onWindowResize();
            }, 250);
        });
    }

    // ============================================================
    // DATA LOADING
    // ============================================================

    /**
     * Load initial data
     */
    async loadInitialData() {
        console.log('📊 Loading timeline data...');
        const startTime = performance.now();

        try {
            // Load timeline events
            await this.dataEngine.loadTimelineData();

            // Load initial year data
            const initialYear = -4500000000;
            await this.dataEngine.getContinentalPositions(initialYear);

            this.performanceMetrics.dataLoadTime = performance.now() - startTime;
            console.log(`✅ Data loaded in ${this.performanceMetrics.dataLoadTime.toFixed(0)}ms`);

        } catch (error) {
            console.error('Failed to load data:', error);
            throw error;
        }
    }

    // ============================================================
    // EVENT HANDLERS
    // ============================================================

    /**
     * Bind all events
     */
    bindEvents() {
        // Already bound in setupUI, but add any global ones here
        window.addEventListener('beforeunload', () => {
            this.saveState();
        });

        // Performance monitoring
        this.startPerformanceMonitoring();
    }

    /**
     * Handle year change
     */
    onYearChanged(year) {
        // Update info panel
        this.updateInfoPanelForYear(year);

        // Update URL (without reload)
        this.updateURL(year);

        // Check for events at this year
        const events = this.dataEngine.getEventsNear(year, 100);
        if (events.length > 0) {
            this.highlightEvents(events);
        }
    }

    /**
     * Handle era change
     */
    onEraChanged(era) {
        // Update UI theme
        document.body.setAttribute('data-era', era.id);

        // Update info panel
        const eraInfo = document.getElementById('current-era-info');
        if (eraInfo) {
            eraInfo.innerHTML = `
                <h3>${era.icon || ''} ${era.name}</h3>
                <p>${era.description}</p>
            `;
        }

        // Emit custom event for other components
        document.dispatchEvent(new CustomEvent('erachange', { detail: era }));
    }

    /**
     * Handle map click
     */
    onMapClick(event) {
        // Raycasting to detect click on globe/events
        if (!this.mapEngine || !this.mapEngine.scene) return;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const rect = this.mapEngine.renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, this.mapEngine.camera);

        const intersects = raycaster.intersectObjects(this.mapEngine.civilizationMarkers, true);

        if (intersects.length > 0) {
            const marker = intersects[0].object;
            // Show event detail
            this.showEventDetail(marker.userData);
        }
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        if (this.mapEngine) {
            this.mapEngine.onWindowResize();
        }

        if (this.timelineEngine) {
            this.timelineEngine.trackWidth = this.timelineEngine.trackElement.offsetWidth;
            this.timelineEngine.updateHandlePosition();
        }
    }

    // ============================================================
    // UI ACTIONS
    // ============================================================

    /**
     * Toggle 2D/3D view
     */
    toggle2D3D() {
        if (!this.mapEngine) return;

        const btn = document.getElementById('btn-2d-3d');

        if (this.mapEngine.mode === '3d') {
            this.mapEngine.mode = '2d';
            if (btn) btn.textContent = '3D';
            // Reinitialize in 2D mode
            this.mapEngine.init2D(document.getElementById('map-container'));
        } else {
            this.mapEngine.mode = '3d';
            if (btn) btn.textContent = '2D';
            // Reinitialize in 3D mode
            this.mapEngine.init3D(document.getElementById('map-container'));
        }

        // Re-render current year
        this.mapEngine.renderYear(this.timelineEngine.currentYear);
    }

    /**
     * Toggle info panel
     */
    toggleInfoPanel() {
        const panel = document.querySelector('.info-panel');
        const toggle = document.getElementById('info-panel-toggle');

        if (panel) {
            this.infoPanelOpen = !this.infoPanelOpen;
            panel.classList.toggle('open', this.infoPanelOpen);
            if (toggle) {
                toggle.textContent = this.infoPanelOpen ? '→' : '←';
            }
        }
    }

    /**
     * Open search modal
     */
    openSearchModal() {
        const modal = document.getElementById('search-modal');
        if (modal) {
            modal.classList.add('active');
            const input = document.getElementById('search-input');
            if (input) {
                setTimeout(() => input.focus(), 100);
            }
        }
    }

    /**
     * Close search modal
     */
    closeSearchModal() {
        const modal = document.getElementById('search-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    /**
     * Open settings modal
     */
    openSettingsModal() {
        const modal = document.getElementById('settings-modal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    /**
     * Open about modal
     */
    openAboutModal() {
        const modal = document.getElementById('about-modal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    /**
     * Close all modals
     */
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }

    /**
     * Toggle fullscreen
     */
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Show tooltip
     */
    showTooltip(text, event) {
        let tooltip = document.getElementById('app-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'app-tooltip';
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }

        tooltip.textContent = text;
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.style.top = `${event.clientY + 10}px`;
    }

    /**
     * Hide tooltip
     */
    hideTooltip() {
        const tooltip = document.getElementById('app-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }

    /**
     * Show keyboard shortcuts
     */
    showKeyboardShortcuts() {
        const shortcuts = `
            <h3>Keyboard Shortcuts</h3>
            <ul style="text-align: left;">
                <li><kbd>Space</kbd> - Play/Pause</li>
                <li><kbd>←</kbd> / <kbd>→</kbd> - Step backward/forward</li>
                <li><kbd>Shift</kbd> + <kbd>←</kbd> / <kbd>→</kbd> - Big step</li>
                <li><kbd>Home</kbd> / <kbd>End</kbd> - Go to beginning/present</li>
                <li><kbd>+</kbd> / <kbd>-</kbd> - Increase/decrease speed</li>
                <li><kbd>Ctrl/Cmd</kbd> + <kbd>S</kbd> - Search</li>
                <li><kbd>F</kbd> - Fullscreen</li>
                <li><kbd>I</kbd> - Toggle info panel</li>
                <li><kbd>?</kbd> - Show this help</li>
            </ul>
        `;

        this.showNotification('Keyboard Shortcuts', shortcuts, 10000);
    }

    /**
     * Update info panel for year
     */
    updateInfoPanelForYear(year) {
        const panel = document.querySelector('.info-panel-content');
        if (!panel) return;

        const events = this.dataEngine.getEventsNear(year, 1000000);
        const era = this.timelineEngine.getEraForYear(year);

        let html = `
            <div class="info-section">
                <h3>Current Time</h3>
                <p class="year-display-large">${this.timelineEngine.formatYear(year)}</p>
                <p class="era-display">${era ? era.icon + ' ' + era.name : ''}</p>
            </div>
        `;

        if (events.length > 0) {
            html += `
                <div class="info-section">
                    <h3>Nearby Events</h3>
                    <ul class="event-list">
                        ${events.slice(0, 5).map(event => `
                            <li class="event-item ${event.type}">
                                <strong>${event.name}</strong>
                                <small>${this.timelineEngine.formatYear(event.year)}</small>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        panel.innerHTML = html;
    }

    /**
     * Show event detail
     */
    showEventDetail(eventData) {
        const modal = document.createElement('div');
        modal.className = 'modal active event-detail-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2>${eventData.name || 'Event'}</h2>
                <p class="event-year">${this.timelineEngine.formatYear(eventData.year || 0)}</p>
                <p>${eventData.description || 'No description available.'}</p>
                ${eventData.coordinates ? `
                    <p><strong>Location:</strong> ${eventData.coordinates.lat}°, ${eventData.coordinates.lng}°</p>
                ` : ''}
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    /**
     * Highlight events on timeline
     */
    highlightEvents(events) {
        // Could pulse the event dots or show notifications
        console.log('Highlighting events:', events);
    }

    /**
     * Show notification
     */
    showNotification(title, message, duration = 5000) {
        const notification = document.createElement('div');
        notification.className = 'app-notification';
        notification.innerHTML = `
            <h4>${title}</h4>
            <div>${message}</div>
        `;

        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.classList.add('visible');
        });

        setTimeout(() => {
            notification.classList.remove('visible');
            setTimeout(() => notification.remove(), 500);
        }, duration);
    }

    /**
     * Show welcome message
     */
    showWelcomeMessage() {
        if (localStorage.getItem('geotopia_welcome_shown')) {
            return;
        }

        this.showNotification(
            'Welcome to GEOTOPIA! 🌍',
            `
                <p>Explore 4.5 billion years of Earth's history.</p>
                <p>Press <kbd>?</kbd> for keyboard shortcuts.</p>
                <p>Click anywhere on the timeline to jump in time!</p>
            `,
            8000
        );

        localStorage.setItem('geotopia_welcome_shown', 'true');
    }

    // ============================================================
    // SETTINGS & STATE
    // ============================================================

    /**
     * Load settings from localStorage
     */
    loadSettings() {
        const saved = localStorage.getItem('geotopia_settings');
        if (saved) {
            try {
                this.settings = { ...this.settings, ...JSON.parse(saved) };
            } catch (e) {
                console.warn('Failed to load settings');
            }
        }
    }

    /**
     * Save settings
     */
    saveSettings(formData) {
        if (formData instanceof FormData) {
            for (let [key, value] of formData.entries()) {
                if (value === 'on') {
                    this.settings[key] = true;
                } else if (value === 'off') {
                    this.settings[key] = false;
                } else {
                    this.settings[key] = value;
                }
            }
        }

        localStorage.setItem('geotopia_settings', JSON.stringify(this.settings));

        // Apply settings
        this.applySettings();
    }

    /**
     * Apply settings
     */
    applySettings() {
        // Theme
        document.body.setAttribute('data-theme', this.settings.theme);

        // Quality
        if (this.mapEngine) {
            this.mapEngine.renderQuality = this.settings.quality;
        }

        // Animations
        if (!this.settings.animations) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }
    }

    /**
     * Save current state
     */
    saveState() {
        const state = {
            currentYear: this.timelineEngine?.currentYear,
            infoPanelOpen: this.infoPanelOpen,
            mapMode: this.mapEngine?.mode
        };

        sessionStorage.setItem('geotopia_state', JSON.stringify(state));
    }

    /**
     * Restore state
     */
    restoreState() {
        const saved = sessionStorage.getItem('geotopia_state');
        if (saved) {
            try {
                const state = JSON.parse(saved);
                if (state.currentYear && this.timelineEngine) {
                    this.timelineEngine.goToYear(state.currentYear, false);
                }
            } catch (e) {
                console.warn('Failed to restore state');
            }
        }
    }

    /**
     * Update URL with current year (for sharing)
     */
    updateURL(year) {
        const url = new URL(window.location);
        url.searchParams.set('year', year);
        window.history.replaceState({}, '', url);
    }

    // ============================================================
    // PERFORMANCE MONITORING
    // ============================================================

    /**
     * Start performance monitoring
     */
    startPerformanceMonitoring() {
        let lastTime = performance.now();
        let frames = 0;

        const monitor = () => {
            frames++;
            const now = performance.now();

            if (now >= lastTime + 1000) {
                this.performanceMetrics.fps = Math.round((frames * 1000) / (now - lastTime));
                frames = 0;
                lastTime = now;

                // Log if FPS drops below 30
                if (this.performanceMetrics.fps < 30) {
                    console.warn(`⚠️ Low FPS: ${this.performanceMetrics.fps}`);
                }
            }

            requestAnimationFrame(monitor);
        };

        monitor();
    }

    /**
     * Show error screen
     */
    showErrorScreen(error) {
        const errorScreen = document.createElement('div');
        errorScreen.className = 'error-screen';
        errorScreen.innerHTML = `
            <div class="error-content">
                <h1>🌋 Oops! Something went wrong</h1>
                <p>${error.message || 'Unknown error occurred'}</p>
                <button onclick="location.reload()">Reload Page</button>
            </div>
        `;

        document.body.appendChild(errorScreen);
    }

    // ============================================================
    // PUBLIC API
    // ============================================================

    /**
     * Go to specific year
     */
    goToYear(year) {
        if (this.timelineEngine) {
            this.timelineEngine.goToYear(year);
        }
    }

    /**
     * Play timeline
     */
    play() {
        if (this.timelineEngine) {
            this.timelineEngine.play();
        }
    }

    /**
     * Pause timeline
     */
    pause() {
        if (this.timelineEngine) {
            this.timelineEngine.pause();
        }
    }

    /**
     * Get current year
     */
    getCurrentYear() {
        return this.timelineEngine?.currentYear || -4500000000;
    }

    /**
     * Export data (for sharing/research)
     */
    exportData() {
        const data = {
            version: this.version,
            currentYear: this.getCurrentYear(),
            events: this.dataEngine?.timelineData || [],
            settings: this.settings
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `geotopia_export_${Date.now()}.json`;
        a.click();
    }
}

// ============================================================
// INITIALIZE APP ON DOM READY
// ============================================================

let app;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new GEOTOPIAApp();
    });
} else {
    app = new GEOTOPIAApp();
}

// Export for console access
window.GEOTOPIA = app;
