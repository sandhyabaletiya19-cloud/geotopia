// ============================================
// UNITY ATLAS - Application Controller
// ============================================

class UnityAtlasApp {
    constructor() {
        this.engine = null;
        this.selectedCountry = null;
        this.currentYear = 2024;
        
        this.init();
    }
    
    async init() {
        await this.loadData();
        this.showLoadingProgress(50);
        
        await this.initializeEngine();
        this.showLoadingProgress(80);
        
        this.setupEventListeners();
        this.showLoadingProgress(100);
        
        // Hide loading screen
        setTimeout(() => {
            this.hideLoading();
            // Select default country
            this.selectCountry('US');
        }, 500);
    }
    
    async loadData() {
        // Data is already loaded via script tags
        // Simulate loading time for UX
        return new Promise(resolve => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                this.showLoadingProgress(progress);
                if (progress >= 50) {
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
        });
    }
    
    showLoadingProgress(percent) {
        const progressBar = document.querySelector('.loading-progress');
        const percentText = document.querySelector('.loading-percent');
        
        if (progressBar) progressBar.style.width = percent + '%';
        if (percentText) percentText.textContent = percent + '%';
    }
    
    hideLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
        }, 500);
    }
    
    async initializeEngine() {
        const canvas = document.getElementById('radial-canvas');
        this.engine = new RadialEngine(canvas);
        
        // Make globally accessible
        window.unityAtlas = this;
    }
    
    setupEventListeners() {
        // Search
        this.setupSearch();
        
        // Region tabs
        this.setupRegionTabs();
        
        // View options
        this.setupViewOptions();
        
        // Zoom controls
        this.setupZoomControls();
        
        // Timeline
        this.setupTimeline();
        
        // Detail panel
        this.setupDetailPanel();
        
        // Legend
        this.setupLegend();
        
        // Custom events
        window.addEventListener('showRelationship', (e) => this.showRelationshipPanel(e.detail));
        window.addEventListener('clearRelationship', () => this.hideRelationshipPanel());
    }
    
    setupSearch() {
        const searchInput = document.getElementById('country-search');
        const searchResults = document.getElementById('search-results');
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 1) {
                searchResults.classList.add('hidden');
                return;
            }
            
            const matches = COUNTRIES_DATABASE.countries.filter(c => 
                c.name.toLowerCase().includes(query) ||
                c.code.toLowerCase().includes(query)
            ).slice(0, 8);
            
            if (matches.length > 0) {
                searchResults.innerHTML = matches.map(c => `
                    <div class="search-result-item" data-code="${c.code}">
                        <span class="flag">${c.flag}</span>
                        <span class="name">${c.name}</span>
                        <span class="region">${COUNTRIES_DATABASE.regions[c.region]}</span>
                    </div>
                `).join('');
                
                searchResults.classList.remove('hidden');
                
                // Add click handlers
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        this.selectCountry(item.dataset.code);
                        searchInput.value = '';
                        searchResults.classList.add('hidden');
                    });
                });
            } else {
                searchResults.classList.add('hidden');
            }
        });
        
        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
    }
    
    setupRegionTabs() {
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter and select first country of region
                const region = tab.dataset.region;
                if (region === 'all') {
                    // Keep current selection
                } else {
                    const firstCountry = COUNTRIES_DATABASE.countries.find(c => c.region === region);
                    if (firstCountry) {
                        this.selectCountry(firstCountry.code);
                    }
                }
            });
        });
    }
    
    setupViewOptions() {
        const showAllBtn = document.getElementById('show-all-btn');
        const topRelationsBtn = document.getElementById('top-relations-btn');
        const showMoreBtn = document.getElementById('show-more-btn');
        
        showAllBtn.addEventListener('click', () => {
            showAllBtn.classList.add('active');
            topRelationsBtn.classList.remove('active');
            this.engine.setShowAll(true);
        });
        
        topRelationsBtn.addEventListener('click', () => {
            topRelationsBtn.classList.add('active');
            showAllBtn.classList.remove('active');
            this.engine.setShowAll(false);
        });
        
        showMoreBtn.addEventListener('click', () => {
            showAllBtn.click();
        });
    }
    
    setupZoomControls() {
        document.getElementById('zoom-in').addEventListener('click', () => this.engine.zoomIn());
        document.getElementById('zoom-out').addEventListener('click', () => this.engine.zoomOut());
        document.getElementById('zoom-reset').addEventListener('click', () => this.engine.resetView());
        document.getElementById('zoom-fit').addEventListener('click', () => this.engine.fitView());
    }
    
    setupTimeline() {
        const slider = document.getElementById('year-slider');
        const display = document.getElementById('current-year-display');
        
        slider.addEventListener('input', () => {
            const year = parseInt(slider.value);
            this.currentYear = year;
            
            if (year < 0) {
                display.textContent = Math.abs(year) + ' BCE';
            } else {
                display.textContent = year + ' CE';
            }
            
            // Update era buttons
            this.updateEraButtons(year);
        });
        
        // Era buttons
        document.querySelectorAll('.era-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const year = parseInt(btn.dataset.year);
                slider.value = year;
                slider.dispatchEvent(new Event('input'));
                
                document.querySelectorAll('.era-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
    
    updateEraButtons(year) {
        document.querySelectorAll('.era-btn').forEach(btn => {
            const btnYear = parseInt(btn.dataset.year);
            btn.classList.remove('active');
            
            if (year >= btnYear && year < btnYear + 500) {
                btn.classList.add('active');
            }
            if (btnYear === 2024 && year >= 2000) {
                btn.classList.add('active');
            }
        });
    }
    
    setupDetailPanel() {
        const panel = document.getElementById('detail-panel');
        const closeBtn = document.getElementById('panel-close');
        
        closeBtn.addEventListener('click', () => {
            this.hideRelationshipPanel();
            this.engine.clearSelection();
        });
    }
    
    setupLegend() {
        const legendBtn = document.getElementById('legend-btn');
        const legendPanel = document.getElementById('legend-panel');
        const legendClose = document.getElementById('legend-close');
        
        legendBtn.addEventListener('click', () => {
            legendPanel.classList.toggle('hidden');
        });
        
        legendClose.addEventListener('click', () => {
            legendPanel.classList.add('hidden');
        });
    }
    
    // ==========================================
    // CORE ACTIONS
    // ==========================================
    selectCountry(code) {
        const stats = this.engine.setCenterCountry(code);
        this.selectedCountry = COUNTRY_BY_CODE[code];
        
        // Update stats
        document.getElementById('allies-count').textContent = stats.allies;
        document.getElementById('strategic-count').textContent = stats.strategic;
        document.getElementById('neutral-count').textContent = stats.neutral;
        document.getElementById('complex-count').textContent = stats.complex;
        document.getElementById('conflict-count').textContent = stats.conflict;
        
        // Update footer stats
        document.getElementById('stat-visible').textContent = 
            this.engine.visibleNodes.length;
        
        // Update mini map
        this.updateMiniMap(code);
    }
    
    showRelationshipPanel(detail) {
        const { from, to } = detail;
        const panel = document.getElementById('detail-panel');
        
        // Update header
        document.getElementById('panel-flag-1').textContent = from.flag;
        document.getElementById('panel-name-1').textContent = from.name;
        document.getElementById('panel-flag-2').textContent = to.flag;
        document.getElementById('panel-name-2').textContent = to.country;
        
        // Update relation type
        const typeEl = document.getElementById('panel-relation-type');
        typeEl.textContent = to.type.toUpperCase();
        typeEl.style.background = this.engine.colors[to.type];
        
        // Update score
        const scoreCircle = document.getElementById('score-circle');
        const circumference = 339.292;
        const offset = circumference - (to.strength / 10) * circumference;
        scoreCircle.style.strokeDashoffset = offset;
        scoreCircle.style.stroke = this.engine.colors[to.type];
        
        document.getElementById('score-number').textContent = to.strength;
        
        // Populate parameters
        this.populateParameters(to);
        
        // Update links
        document.getElementById('link-wiki').href = 
            `https://en.wikipedia.org/wiki/${to.country.replace(/ /g, '_')}`;
        document.getElementById('link-cia').href = 
            `https://www.cia.gov/the-world-factbook/countries/${to.country.toLowerCase().replace(/ /g, '-')}/`;
        document.getElementById('link-un').href = 
            `https://www.un.org/en/about-us/member-states`;
        
        // Show panel
        panel.classList.remove('hidden');
        panel.classList.add('show');
        
        // Update footer
        document.getElementById('stat-focused').textContent = to.code;
    }
    
    hideRelationshipPanel() {
        const panel = document.getElementById('detail-panel');
        panel.classList.remove('show');
        setTimeout(() => {
            panel.classList.add('hidden');
        }, 300);
        
        document.getElementById('stat-focused').textContent = '-';
    }
    
    populateParameters(relation) {
        const container = document.getElementById('parameters-list');
        container.innerHTML = '';
        
        const paramIcons = {
            trade: 'fa-handshake',
            military: 'fa-shield-alt',
            diplomatic: 'fa-landmark',
            border: 'fa-border-all',
            historical: 'fa-history',
            economic: 'fa-chart-line',
            cultural: 'fa-theater-masks',
            visa: 'fa-passport',
            strategic: 'fa-chess',
            intelligence: 'fa-user-secret',
            energy: 'fa-bolt',
            technology: 'fa-microchip',
            defense: 'fa-fighter-jet',
            political: 'fa-balance-scale',
            organization: 'fa-globe',
            conflictRisk: 'fa-exclamation-triangle'
        };
        
        const paramNames = {
            trade: 'Trade Relations',
            military: 'Military Cooperation',
            diplomatic: 'Diplomatic Ties',
            border: 'Border Status',
            historical: 'Historical Conflicts',
            economic: 'Economic Agreements',
            cultural: 'Cultural Exchange',
            visa: 'Visa Policies',
            strategic: 'Strategic Importance',
            intelligence: 'Intelligence Sharing',
            energy: 'Energy Dependency',
            technology: 'Technology Partnerships',
            defense: 'Defense Agreements',
            political: 'Political Alignment',
            organization: 'Global Org Cooperation',
            conflictRisk: 'Conflict Risk Level'
        };
        
        Object.keys(relation.parameters || {}).forEach(key => {
            const param = relation.parameters[key];
            
            const card = document.createElement('div');
            card.className = 'parameter-card';
            card.innerHTML = `
                <div class="parameter-header">
                    <div class="param-icon">
                        <i class="fas ${paramIcons[key] || 'fa-info'}"></i>
                    </div>
                    <div class="param-info">
                        <div class="param-name">${paramNames[key] || key}</div>
                        <div class="param-summary">${param.summary}</div>
                    </div>
                    <div class="param-score">
                        <div class="param-score-value">${param.score}/10</div>
                        <div class="param-score-bar">
                            <div class="param-bar-fill" style="width: ${param.score * 10}%"></div>
                        </div>
                    </div>
                    <i class="fas fa-chevron-down param-toggle"></i>
                </div>
                <div class="parameter-details">
                    <p>${param.details}</p>
                </div>
            `;
            
            // Toggle details
            const header = card.querySelector('.parameter-header');
            const details = card.querySelector('.parameter-details');
            const toggle = card.querySelector('.param-toggle');
            
            header.addEventListener('click', () => {
                details.classList.toggle('open');
                toggle.classList.toggle('open');
            });
            
            container.appendChild(card);
        });
    }
    
    updateMiniMap(code) {
        const canvas = document.getElementById('mini-canvas');
        const ctx = canvas.getContext('2d');
        const country = COUNTRY_BY_CODE[code];
        
        // Set size
        canvas.width = 180;
        canvas.height = 90;
        
        // Clear
        ctx.clearRect(0, 0, 180, 90);
        
        // Draw simple continents (very simplified)
        ctx.fillStyle = '#CBD5E1';
        
        // North America
        ctx.beginPath();
        ctx.ellipse(40, 30, 20, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // South America
        ctx.beginPath();
        ctx.ellipse(50, 60, 10, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Europe
        ctx.beginPath();
        ctx.ellipse(95, 25, 12, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Africa
        ctx.beginPath();
        ctx.ellipse(95, 50, 12, 18, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Asia
        ctx.beginPath();
        ctx.ellipse(135, 35, 25, 18, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Australia
        ctx.beginPath();
        ctx.ellipse(155, 65, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw selected country marker
        if (country && country.coords) {
            const [lat, lon] = country.coords;
            const x = ((lon + 180) / 360) * 180;
            const y = ((90 - lat) / 180) * 90;
            
            // Pulse animation
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(236, 72, 153, 0.3)';
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#EC4899';
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new UnityAtlasApp();
});
