// ============================================
// UNITY ATLAS - Main Application Engine (Continued)
// ============================================

class UnityAtlas {
    constructor() {
        this.selectedCountry = null;
        this.focusedRelation = null;
        this.currentYear = 2024;
        this.zoomLevel = 1;
        this.panOffset = { x: 0, y: 0 };
        this.showLabels = true;
        this.hoveredNode = null;
        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
        this.nodes = [];
        
        this.canvas = null;
        this.ctx = null;
        this.animationFrame = null;
        
        this.init();
    }
    
    async init() {
        await this.simulateLoading();
        this.setupCanvas();
        this.populateCountryList();
        this.setupEventListeners();
        this.setupTimeSlider();
        this.updateStats();
        this.hideLoading();
        
        // Select a default country
        setTimeout(() => {
            this.selectCountry('IN');
        }, 500);
    }
    
    async simulateLoading() {
        return new Promise(resolve => {
            setTimeout(resolve, 2500);
        });
    }
    
    hideLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }
    
    setupCanvas() {
        this.canvas = document.getElementById('radial-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        const container = document.getElementById('radial-map-container');
        const rect = container.getBoundingClientRect();
        
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        
        this.centerX = rect.width / 2;
        this.centerY = rect.height / 2;
        this.maxRadius = Math.min(rect.width, rect.height) / 2 - 80;
        
        if (this.selectedCountry) {
            this.render();
        }
    }
    
    populateCountryList() {
        const countryList = document.getElementById('country-list');
        const sortedCountries = [...COUNTRIES_DATABASE.countries].sort((a, b) => 
            a.name.localeCompare(b.name)
        );
        
        sortedCountries.forEach(country => {
            const item = document.createElement('div');
            item.className = 'country-list-item';
            item.dataset.code = country.code;
            item.innerHTML = `
                <span class="flag">${country.flag}</span>
                <span class="name">${country.name}</span>
                <span class="region">${COUNTRIES_DATABASE.regions[country.region]}</span>
            `;
            item.addEventListener('click', () => {
                this.selectCountry(country.code);
                document.getElementById('country-dropdown').classList.remove('show');
            });
            countryList.appendChild(item);
        });
    }
    
    setupEventListeners() {
        // Explore button
        document.getElementById('explore-btn').addEventListener('click', () => {
            document.getElementById('main-navigation').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Country dropdown
        document.getElementById('country-dropdown-btn').addEventListener('click', () => {
            document.getElementById('country-dropdown').classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('country-dropdown');
            const btn = document.getElementById('country-dropdown-btn');
            if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
        
        // Country search
        document.getElementById('country-search').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.country-list-item');
            items.forEach(item => {
                const name = item.querySelector('.name').textContent.toLowerCase();
                item.style.display = name.includes(searchTerm) ? 'flex' : 'none';
            });
        });
        
        // Region tabs
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.filterByRegion(tab.dataset.region);
            });
        });
        
        // Canvas interactions
        this.canvas.addEventListener('mousemove', (e) => this.handleCanvasMouseMove(e));
        this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleCanvasMouseDown(e));
        this.canvas.addEventListener('mouseup', () => this.handleCanvasMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.handleCanvasMouseLeave());
        this.canvas.addEventListener('wheel', (e) => this.handleCanvasWheel(e));
        
        // Radial controls
        document.getElementById('radial-zoom-in').addEventListener('click', () => {
            this.zoomLevel = Math.min(this.zoomLevel + 0.2, 3);
            this.render();
        });
        
        document.getElementById('radial-zoom-out').addEventListener('click', () => {
            this.zoomLevel = Math.max(this.zoomLevel - 0.2, 0.5);
            this.render();
        });
        
        document.getElementById('radial-reset').addEventListener('click', () => {
            this.zoomLevel = 1;
            this.panOffset = { x: 0, y: 0 };
            this.render();
        });
        
        document.getElementById('toggle-labels').addEventListener('click', (e) => {
            this.showLabels = !this.showLabels;
            e.currentTarget.classList.toggle('active', this.showLabels);
            this.render();
        });
        
        // Close relationship panel
        document.getElementById('close-panel').addEventListener('click', () => {
            this.closeRelationshipPanel();
        });
        
        // Era buttons
        document.querySelectorAll('.era-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.era-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const year = parseInt(btn.dataset.year);
                document.getElementById('time-slider').value = year;
                this.updateYear(year);
            });
        });
    }
    
    setupTimeSlider() {
        const slider = document.getElementById('time-slider');
        slider.addEventListener('input', (e) => {
            this.updateYear(parseInt(e.target.value));
        });
    }
    
    updateYear(year) {
        this.currentYear = year;
        const yearDisplay = document.getElementById('current-year');
        if (year < 0) {
            yearDisplay.textContent = `${Math.abs(year)} BCE`;
        } else {
            yearDisplay.textContent = `${year} CE`;
        }
        
        // Update era buttons
        document.querySelectorAll('.era-btn').forEach(btn => {
            btn.classList.remove('active');
            const btnYear = parseInt(btn.dataset.year);
            if ((year >= btnYear && year < btnYear + 500) || 
                (btnYear === 2024 && year >= 2000)) {
                btn.classList.add('active');
            }
        });
    }
    
    filterByRegion(region) {
        const items = document.querySelectorAll('.country-list-item');
        items.forEach(item => {
            const country = COUNTRY_BY_CODE[item.dataset.code];
            if (region === 'all' || country.region === region) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    selectCountry(code) {
        const country = COUNTRY_BY_CODE[code];
        if (!country) return;
        
        this.selectedCountry = country;
        this.focusedRelation = null;
        
        // Update display
        document.getElementById('center-flag').textContent = country.flag;
        document.getElementById('center-country-name').textContent = country.name;
        document.getElementById('mini-map-country').textContent = country.name;
        
        // Update dropdown button
        document.querySelector('#country-dropdown-btn span').textContent = country.name;
        
        // Build nodes for radial map
        this.buildNodes();
        
        // Animate transition
        this.animateTransition();
        
        // Update world map highlighting
        this.updateWorldMapHighlight();
        
        // Update stats
        this.updateCountryStats(code);
        
        // Close panel if open
        this.closeRelationshipPanel();
    }
    
    buildNodes() {
        if (!this.selectedCountry) return;
        
        this.nodes = [];
        const relations = RELATIONSHIPS_DATABASE[this.selectedCountry.code];
        if (!relations) return;
        
        // Group relations by ring
        const rings = {
            1: [], // Closest allies
            2: [], // Strong relations
            3: [], // Neutral
            4: [], // Tense
            5: []  // Conflict
        };
        
        relations.relations.forEach(rel => {
            const ring = rel.ring || 3;
            rings[ring].push(rel);
        });
        
        // Calculate positions for each ring
        const ringRadii = [
            this.maxRadius * 0.2,  // Ring 1
            this.maxRadius * 0.4,  // Ring 2
            this.maxRadius * 0.6,  // Ring 3
            this.maxRadius * 0.8,  // Ring 4
            this.maxRadius * 0.95  // Ring 5
        ];
        
        Object.keys(rings).forEach(ringNum => {
            const ringCountries = rings[ringNum];
            const radius = ringRadii[ringNum - 1];
            const count = ringCountries.length;
            
            ringCountries.forEach((rel, index) => {
                const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                this.nodes.push({
                    ...rel,
                    x: x,
                    y: y,
                    radius: radius,
                    angle: angle,
                    ring: parseInt(ringNum),
                    nodeRadius: this.getNodeRadius(parseInt(ringNum))
                });
            });
        });
    }
    
    getNodeRadius(ring) {
        const sizes = {
            1: 18,
            2: 16,
            3: 14,
            4: 12,
            5: 10
        };
        return sizes[ring] || 12;
    }
    
    animateTransition() {
        let progress = 0;
        const duration = 500;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            progress = (currentTime - startTime) / duration;
            
            if (progress < 1) {
                this.render(progress);
                requestAnimationFrame(animate);
            } else {
                this.render(1);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    render(animProgress = 1) {
        if (!this.ctx) return;
        
        const width = this.canvas.width / window.devicePixelRatio;
        const height = this.canvas.height / window.devicePixelRatio;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, width, height);
        
        // Apply zoom and pan
        this.ctx.save();
        this.ctx.translate(this.centerX + this.panOffset.x, this.centerY + this.panOffset.y);
        this.ctx.scale(this.zoomLevel, this.zoomLevel);
        
        // Draw rings
        this.drawRings();
        
        // Draw connections
        this.drawConnections(animProgress);
        
        // Draw center node
        this.drawCenterNode();
        
        // Draw country nodes
        this.drawNodes(animProgress);
        
        this.ctx.restore();
    }
    
    drawRings() {
        const ringRadii = [
            this.maxRadius * 0.2,
            this.maxRadius * 0.4,
            this.maxRadius * 0.6,
            this.maxRadius * 0.8,
            this.maxRadius * 0.95
        ];
        
        const ringColors = [
            'rgba(46, 204, 113, 0.2)',   // Allies
            'rgba(52, 152, 219, 0.15)',  // Strategic
            'rgba(241, 196, 15, 0.1)',   // Neutral
            'rgba(230, 126, 34, 0.1)',   // Complex
            'rgba(231, 76, 60, 0.1)'     // Conflict
        ];
        
        ringRadii.forEach((radius, index) => {
            this.ctx.beginPath();
            this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = ringColors[index].replace('0.1', '0.3').replace('0.15', '0.35').replace('0.2', '0.4');
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            // Fill ring area
            this.ctx.fillStyle = ringColors[index];
            this.ctx.fill();
        });
    }
    
    drawConnections(animProgress) {
        this.nodes.forEach(node => {
            const isFocused = this.focusedRelation && this.focusedRelation.code === node.code;
            const isHovered = this.hoveredNode && this.hoveredNode.code === node.code;
            
            // Skip if in focus mode and not focused
            if (this.focusedRelation && !isFocused) {
                this.ctx.globalAlpha = 0.1;
            } else {
                this.ctx.globalAlpha = 1;
            }
            
            const endX = node.x * animProgress;
            const endY = node.y * animProgress;
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(endX, endY);
            
            // Line style based on relationship type
            const color = RELATIONSHIP_COLORS[node.type] || '#999';
            this.ctx.strokeStyle = color;
            
            // Line width and style based on type
            switch (node.type) {
                case 'allies':
                    this.ctx.lineWidth = isHovered ? 4 : 3;
                    this.ctx.setLineDash([]);
                    break;
                case 'strategic':
                    this.ctx.lineWidth = isHovered ? 3 : 2;
                    this.ctx.setLineDash([]);
                    break;
                case 'neutral':
                    this.ctx.lineWidth = isHovered ? 2 : 1.5;
                    this.ctx.setLineDash([8, 4]);
                    break;
                case 'complex':
                    this.ctx.lineWidth = isHovered ? 3 : 2;
                    this.ctx.setLineDash([4, 4]);
                    break;
                case 'conflict':
                    this.ctx.lineWidth = isHovered ? 3 : 2;
                    this.ctx.setLineDash([2, 2]);
                    break;
                default:
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([5, 5]);
            }
            
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            // Glow effect for hovered/focused
            if (isHovered || isFocused) {
                this.ctx.shadowColor = color;
                this.ctx.shadowBlur = 10;
                this.ctx.stroke();
                this.ctx.shadowBlur = 0;
            }
            
            this.ctx.globalAlpha = 1;
        });
    }
    
    drawCenterNode() {
        if (!this.selectedCountry) return;
        
        // Glow effect
        this.ctx.shadowColor = '#FF69B4';
        this.ctx.shadowBlur = 20;
        
        // Main circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 35, 0, Math.PI * 2);
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.fill();
        
        this.ctx.shadowBlur = 0;
        
        // Border
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Flag emoji
        this.ctx.font = '24px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.selectedCountry.flag, 0, 0);
        
        // Country name below
        if (this.showLabels) {
            this.ctx.font = 'bold 12px Inter, sans-serif';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText(this.selectedCountry.name, 0, 50);
        }
    }
    
    drawNodes(animProgress) {
        this.nodes.forEach(node => {
            const isFocused = this.focusedRelation && this.focusedRelation.code === node.code;
            const isHovered = this.hoveredNode && this.hoveredNode.code === node.code;
            
            // Apply animation
            const x = node.x * animProgress;
            const y = node.y * animProgress;
            
            // Skip if in focus mode and not focused
            if (this.focusedRelation && !isFocused) {
                this.ctx.globalAlpha = 0.15;
            } else {
                this.ctx.globalAlpha = 1;
            }
            
            const color = RELATIONSHIP_COLORS[node.type] || '#999';
            const radius = node.nodeRadius * (isHovered ? 1.3 : 1);
            
            // Glow for hovered/focused
            if (isHovered || isFocused) {
                this.ctx.shadowColor = color;
                this.ctx.shadowBlur = 15;
            }
            
            // Main circle
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.fill();
            
            this.ctx.shadowBlur = 0;
            
            // Border
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Flag emoji
            this.ctx.font = `${radius}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText(node.flag, x, y);
            
            // Country name label
            if (this.showLabels && (this.zoomLevel > 0.7 || isHovered || node.ring <= 2)) {
                this.ctx.font = `${isHovered ? 'bold' : 'normal'} 10px Inter, sans-serif`;
                this.ctx.fillStyle = '#2C3E50';
                
                // Background for label
                const labelWidth = this.ctx.measureText(node.country).width + 8;
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(x - labelWidth / 2, y + radius + 5, labelWidth, 16);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(node.country, x, y + radius + 13);
            }
            
            this.ctx.globalAlpha = 1;
        });
    }
    
    handleCanvasMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left - this.centerX - this.panOffset.x) / this.zoomLevel;
        const mouseY = (e.clientY - rect.top - this.centerY - this.panOffset.y) / this.zoomLevel;
        
        if (this.isDragging) {
            this.panOffset.x += e.clientX - this.dragStart.x;
            this.panOffset.y += e.clientY - this.dragStart.y;
            this.dragStart.x = e.clientX;
            this.dragStart.y = e.clientY;
            this.render();
            return;
        }
        
        // Check if hovering over a node
        let foundNode = null;
        for (const node of this.nodes) {
            const dx = mouseX - node.x;
            const dy = mouseY - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < node.nodeRadius + 5) {
                foundNode = node;
                break;
            }
        }
        
        if (foundNode !== this.hoveredNode) {
            this.hoveredNode = foundNode;
            this.canvas.style.cursor = foundNode ? 'pointer' : 'grab';
            this.render();
            
            // Show/hide tooltip
            this.updateTooltip(foundNode, e.clientX, e.clientY);
        }
    }
    
    updateTooltip(node, x, y) {
        const tooltip = document.getElementById('radial-tooltip');
        
        if (node) {
            tooltip.innerHTML = `
                <div class="tooltip-header">
                    <span class="tooltip-flag">${node.flag}</span>
                    <span class="tooltip-name">${node.country}</span>
                </div>
                <div>Strength: ${node.strength}/10</div>
                <span class="tooltip-type ${node.type}">${node.type.charAt(0).toUpperCase() + node.type.slice(1)}</span>
            `;
            tooltip.style.left = (x + 15) + 'px';
            tooltip.style.top = (y + 15) + 'px';
            tooltip.classList.add('show');
        } else {
            tooltip.classList.remove('show');
        }
    }
    
    handleCanvasClick(e) {
        if (this.hoveredNode) {
            // If clicking on a node, either show relationship or select as center
            if (e.shiftKey) {
                // Shift+click to show relationship details
                this.showRelationshipDetails(this.hoveredNode);
            } else {
                // Regular click to select as new center
                this.selectCountry(this.hoveredNode.code);
            }
        } else if (this.focusedRelation) {
            // Click on empty space to exit focus mode
            this.focusedRelation = null;
            this.render();
        }
    }
    
    handleCanvasMouseDown(e) {
        if (!this.hoveredNode) {
            this.isDragging = true;
            this.dragStart.x = e.clientX;
            this.dragStart.y = e.clientY;
            this.canvas.style.cursor = 'grabbing';
        }
    }
    
    handleCanvasMouseUp() {
        this.isDragging = false;
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
    }
    
    handleCanvasMouseLeave() {
        this.isDragging = false;
        this.hoveredNode = null;
        this.canvas.style.cursor = 'grab';
        document.getElementById('radial-tooltip').classList.remove('show');
    }
    
    handleCanvasWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        this.zoomLevel = Math.max(0.3, Math.min(3, this.zoomLevel + delta));
        this.render();
    }
    
    showRelationshipDetails(relation) {
        this.focusedRelation = relation;
        this.render();
        
        const panel = document.getElementById('relationship-panel');
        
        // Update panel header
        document.querySelector('#panel-country1 .flag').textContent = this.selectedCountry.flag;
        document.querySelector('#panel-country1 .name').textContent = this.selectedCountry.name;
        document.querySelector('#panel-country2 .flag').textContent = relation.flag;
        document.querySelector('#panel-country2 .name').textContent = relation.country;
        
        // Update relationship indicator color
        const indicator = document.getElementById('panel-rel-type');
        indicator.style.background = RELATIONSHIP_COLORS[relation.type];
        
        // Update score
        const scoreValue = document.querySelector('.score-value');
        const scoreFill = document.querySelector('.score-fill');
        scoreValue.textContent = relation.strength;
        
        const circumference = 283;
        const offset = circumference - (relation.strength / 10) * circumference;
        scoreFill.style.strokeDashoffset = offset;
        scoreFill.style.stroke = RELATIONSHIP_COLORS[relation.type];
        
        // Populate parameters
        this.populateParameters(relation);
        
        // Update external links
        document.getElementById('wiki-link').href = `https://en.wikipedia.org/wiki/${relation.country.replace(/ /g, '_')}`;
        document.getElementById('cia-link').href = `https://www.cia.gov/the-world-factbook/countries/${relation.country.toLowerCase().replace(/ /g, '-')}/`;
        document.getElementById('un-link').href = `https://www.un.org/en/about-us/member-states`;
        
        // Show panel
        panel.classList.remove('panel-hidden');
    }
    
    populateParameters(relation) {
        const grid = document.getElementById('parameters-grid');
        grid.innerHTML = '';
        
        PARAMETERS.forEach(param => {
            const paramData = relation.parameters[param.id];
            if (!paramData) return;
            
            const item = document.createElement('div');
            item.className = 'parameter-item';
            item.innerHTML = `
                <div class="parameter-header">
                    <div class="parameter-icon">
                        <i class="fas ${param.icon}"></i>
                    </div>
                    <div class="parameter-info">
                        <div class="parameter-name">${param.name}</div>
                        <div class="parameter-value">${paramData.summary}</div>
                    </div>
                    <div class="parameter-score">
                        <span class="param-score-value">${paramData.score}/10</span>
                        <div class="param-score-bar">
                            <div class="param-score-fill" style="width: ${paramData.score * 10}%; background: ${this.getScoreColor(paramData.score)}"></div>
                        </div>
                    </div>
                    <button class="parameter-toggle">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="parameter-details">
                    <p>${paramData.details}</p>
                </div>
            `;
            
            // Toggle details on click
            const header = item.querySelector('.parameter-header');
            const details = item.querySelector('.parameter-details');
            const toggle = item.querySelector('.parameter-toggle');
            
            header.addEventListener('click', () => {
                details.classList.toggle('expanded');
                toggle.classList.toggle('expanded');
            });
            
            grid.appendChild(item);
        });
    }
    
    getScoreColor(score) {
        if (score >= 8) return RELATIONSHIP_COLORS.allies;
        if (score >= 6) return RELATIONSHIP_COLORS.strategic;
        if (score >= 4) return RELATIONSHIP_COLORS.neutral;
        if (score >= 2) return RELATIONSHIP_COLORS.complex;
        return RELATIONSHIP_COLORS.conflict;
    }
    
    closeRelationshipPanel() {
        document.getElementById('relationship-panel').classList.add('panel-hidden');
        this.focusedRelation = null;
        this.render();
    }
    
    updateWorldMapHighlight() {
        // This would update the world map SVG to highlight countries
        // For now, we'll update the mini-map
        this.updateMiniMap();
    }
    
    updateMiniMap() {
        const svg = document.getElementById('mini-map-svg');
        // Mini map visualization would go here
        // Using a simplified world representation
    }
    
    updateStats() {
        // Count relationship types across all countries
        let allianceCount = 0;
        let conflictCount = 0;
        
        Object.values(RELATIONSHIPS_DATABASE).forEach(country => {
            country.relations.forEach(rel => {
                if (rel.type === 'allies') allianceCount++;
                if (rel.type === 'conflict') conflictCount++;
            });
        });
        
        // Each relationship is counted twice (once for each direction)
        document.getElementById('alliance-count').textContent = Math.floor(allianceCount / 2);
        document.getElementById('conflict-count').textContent = Math.floor(conflictCount / 2);
    }
    
    updateCountryStats(code) {
        const relations = RELATIONSHIPS_DATABASE[code];
        if (!relations) return;
        
        let allies = 0;
        let conflicts = 0;
        
        relations.relations.forEach(rel => {
            if (rel.type === 'allies') allies++;
            if (rel.type === 'conflict') conflicts++;
        });
        
        // Update UI if needed
    }
}

// World Map Initialization
function initWorldMap() {
    const mapContainer = document.getElementById('world-map-container');
    const tooltip = document.getElementById('map-tooltip');
    
    // Simplified world map - in production, use a proper GeoJSON
    // This is a placeholder for the concept
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(response => response.json())
        .then(data => {
            renderWorldMap(data);
        })
        .catch(() => {
            // Fallback: create placeholder map
            createPlaceholderMap();
        });
}

function createPlaceholderMap() {
    const svg = document.getElementById('world-map');
    
    // Add a simple placeholder
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '500');
    text.setAttribute('y', '250');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#3498DB');
    text.setAttribute('font-size', '20');
    text.textContent = 'Interactive World Map - Click countries on radial map';
    svg.appendChild(text);
    
    // Add instruction
    const subtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    subtext.setAttribute('x', '500');
    subtext.setAttribute('y', '280');
    subtext.setAttribute('text-anchor', 'middle');
    subtext.setAttribute('fill', '#7F8C8D');
    subtext.setAttribute('font-size', '14');
    subtext.textContent = 'Use the dropdown or radial map to explore relationships';
    svg.appendChild(subtext);
}

function renderWorldMap(geoData) {
    const svg = document.getElementById('world-map');
    const width = 1000;
    const height = 500;
    
    // Simple projection
    const projection = (lon, lat) => {
        const x = (lon + 180) * (width / 360);
        const y = (90 - lat) * (height / 180);
        return [x, y];
    };
    
    // Render each country
    geoData.features.forEach(feature => {
        const countryName = feature.properties.name;
        const countryData = COUNTRY_BY_NAME[countryName.toLowerCase()];
        
        if (feature.geometry.type === 'Polygon') {
            renderPolygon(svg, feature.geometry.coordinates[0], projection, countryData);
        } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polygon => {
                renderPolygon(svg, polygon[0], projection, countryData);
            });
        }
    });
}

function renderPolygon(svg, coordinates, projection, countryData) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    let d = '';
    coordinates.forEach((coord, i) => {
        const [x, y] = projection(coord[0], coord[1]);
        d += (i === 0 ? 'M' : 'L') + x + ',' + y;
    });
    d += 'Z';
    
    path.setAttribute('d', d);
    path.setAttribute('class', 'country-path');
    
    if (countryData) {
        path.dataset.code = countryData.code;
        path.dataset.name = countryData.name;
        
        path.addEventListener('click', () => {
            if (window.unityAtlas) {
                window.unityAtlas.selectCountry(countryData.code);
            }
        });
        
        path.addEventListener('mouseenter', (e) => {
            const tooltip = document.getElementById('map-tooltip');
            tooltip.innerHTML = `${countryData.flag} ${countryData.name}`;
            tooltip.style.left = (e.clientX + 10) + 'px';
            tooltip.style.top = (e.clientY + 10) + 'px';
            tooltip.classList.add('show');
        });
        
        path.addEventListener('mouseleave', () => {
            document.getElementById('map-tooltip').classList.remove('show');
        });
    }
    
    svg.appendChild(path);
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    window.unityAtlas = new UnityAtlas();
    initWorldMap();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UnityAtlas };
}
