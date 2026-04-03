// ============================================
// UNITY ATLAS - World Map Module
// SVG World Map with Country Highlighting
// ============================================

class WorldMapRenderer {
    constructor(svgElement) {
        this.svg = svgElement;
        this.width = 1000;
        this.height = 500;
        this.selectedCountry = null;
        this.countryPaths = new Map();
        this.tooltip = document.getElementById('map-tooltip');
        this.zoomLevel = 1;
        this.panX = 0;
        this.panY = 0;
        
        this.init();
    }
    
    init() {
        this.createSimplifiedWorldMap();
        this.setupControls();
    }
    
    createSimplifiedWorldMap() {
        // Create a simplified world map using rectangles for countries
        // In production, replace with actual GeoJSON paths
        
        const countryPositions = this.getCountryPositions();
        
        COUNTRIES_DATABASE.countries.forEach(country => {
            const pos = countryPositions[country.code];
            if (!pos) return;
            
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.setAttribute('class', 'country-group');
            group.dataset.code = country.code;
            
            // Create country shape (simplified as circle/ellipse)
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos.x);
            circle.setAttribute('cy', pos.y);
            circle.setAttribute('r', pos.size || 8);
            circle.setAttribute('class', 'country-marker');
            circle.setAttribute('fill', '#b8d4e8');
            circle.setAttribute('stroke', '#fff');
            circle.setAttribute('stroke-width', '1');
            
            // Add event listeners
            group.addEventListener('mouseenter', (e) => this.handleMouseEnter(e, country));
            group.addEventListener('mouseleave', () => this.handleMouseLeave());
            group.addEventListener('click', () => this.handleClick(country));
            
            group.appendChild(circle);
            this.svg.appendChild(group);
            this.countryPaths.set(country.code, group);
        });
    }
    
    getCountryPositions() {
        // Map coordinates to SVG positions
        // Using Mercator-like projection
        const positions = {};
        
        COUNTRIES_DATABASE.countries.forEach(country => {
            const [lat, lon] = country.coords;
            const x = ((lon + 180) / 360) * this.width;
            const y = ((90 - lat) / 180) * this.height;
            
            // Size based on approximate country importance/size
            let size = 5;
            const majorCountries = ['US', 'CN', 'RU', 'IN', 'BR', 'AU', 'CA'];
            const mediumCountries = ['DE', 'FR', 'GB', 'JP', 'IT', 'ES', 'MX', 'ID', 'SA', 'EG', 'ZA', 'AR'];
            
            if (majorCountries.includes(country.code)) {
                size = 12;
            } else if (mediumCountries.includes(country.code)) {
                size = 8;
            }
            
            positions[country.code] = { x, y, size };
        });
        
        return positions;
    }
    
    handleMouseEnter(e, country) {
        const group = this.countryPaths.get(country.code);
        if (group) {
            const circle = group.querySelector('circle');
            circle.setAttribute('fill', '#3498DB');
            circle.setAttribute('r', parseFloat(circle.getAttribute('r')) * 1.3);
        }
        
        // Show tooltip
        this.tooltip.innerHTML = `${country.flag} ${country.name}<br><small>${COUNTRIES_DATABASE.regions[country.region]}</small>`;
        this.tooltip.style.left = (e.clientX + 15) + 'px';
        this.tooltip.style.top = (e.clientY + 15) + 'px';
        this.tooltip.classList.add('show');
    }
    
    handleMouseLeave() {
        this.countryPaths.forEach((group, code) => {
            if (code !== this.selectedCountry) {
                const circle = group.querySelector('circle');
                const originalSize = this.getCountryPositions()[code]?.size || 5;
                circle.setAttribute('fill', '#b8d4e8');
                circle.setAttribute('r', originalSize);
            }
        });
        
        this.tooltip.classList.remove('show');
    }
    
    handleClick(country) {
        if (window.unityAtlas) {
            window.unityAtlas.selectCountry(country.code);
        }
        this.highlightCountry(country.code);
    }
    
    highlightCountry(centerCode) {
        this.selectedCountry = centerCode;
        
        // Reset all countries
        this.countryPaths.forEach((group, code) => {
            const circle = group.querySelector('circle');
            const originalSize = this.getCountryPositions()[code]?.size || 5;
            circle.setAttribute('r', originalSize);
            circle.classList.remove('selected', 'ally', 'strategic', 'neutral', 'conflict', 'complex');
            circle.setAttribute('fill', '#b8d4e8');
        });
        
        // Highlight center country in pink
        const centerGroup = this.countryPaths.get(centerCode);
        if (centerGroup) {
            const circle = centerGroup.querySelector('circle');
            circle.classList.add('selected');
            circle.setAttribute('fill', '#FF69B4');
            circle.setAttribute('r', parseFloat(circle.getAttribute('r')) * 1.5);
        }
        
        // Highlight related countries
        const relations = RELATIONSHIPS_DATABASE[centerCode];
        if (relations) {
            relations.relations.forEach(rel => {
                const relGroup = this.countryPaths.get(rel.code);
                if (relGroup) {
                    const circle = relGroup.querySelector('circle');
                    circle.classList.add(rel.type);
                    circle.setAttribute('fill', RELATIONSHIP_COLORS[rel.type]);
                }
            });
        }
    }
    
    setupControls() {
        document.getElementById('zoom-in').addEventListener('click', () => {
            this.zoomLevel = Math.min(this.zoomLevel + 0.2, 3);
            this.applyTransform();
        });
        
        document.getElementById('zoom-out').addEventListener('click', () => {
            this.zoomLevel = Math.max(this.zoomLevel - 0.2, 0.5);
            this.applyTransform();
        });
        
        document.getElementById('reset-map').addEventListener('click', () => {
            this.zoomLevel = 1;
            this.panX = 0;
            this.panY = 0;
            this.applyTransform();
        });
        
        // Pan functionality
        let isDragging = false;
        let startX, startY;
        
        this.svg.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - this.panX;
            startY = e.clientY - this.panY;
        });
        
        this.svg.addEventListener('mousemove', (e) => {
            if (isDragging) {
                this.panX = e.clientX - startX;
                this.panY = e.clientY - startY;
                this.applyTransform();
            }
        });
        
        this.svg.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        this.svg.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    }
    
    applyTransform() {
        const container = this.svg.parentElement;
        const centerX = container.clientWidth / 2;
        const centerY = container.clientHeight / 2;
        
        this.svg.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`;
        this.svg.style.transformOrigin = `${centerX}px ${centerY}px`;
    }
}

// Mini Map for Overview
class MiniMapRenderer {
    constructor(svgElement) {
        this.svg = svgElement;
        this.width = 360;
        this.height = 180;
        this.init();
    }
    
    init() {
        // Create simplified world outline
        this.drawSimplifiedWorld();
    }
    
    drawSimplifiedWorld() {
        // Continental outlines (simplified)
        const continents = [
            // North America
            'M50,50 L120,40 L140,70 L130,100 L80,120 L50,100 Z',
            // South America
            'M80,130 L100,140 L95,180 L70,175 L65,140 Z',
            // Europe
            'M170,40 L200,35 L210,60 L190,70 L165,55 Z',
            // Africa
            'M165,75 L200,70 L210,130 L180,150 L155,120 Z',
            // Asia
            'M210,30 L300,25 L320,80 L280,100 L230,90 L205,55 Z',
            // Australia
            'M280,130 L320,125 L330,155 L290,160 Z'
        ];
        
        continents.forEach(path => {
            const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('d', path);
            pathEl.setAttribute('fill', '#b8d4e8');
            pathEl.setAttribute('stroke', '#3498DB');
            pathEl.setAttribute('stroke-width', '1');
            this.svg.appendChild(pathEl);
        });
    }
    
    highlightCountry(code) {
        const country = COUNTRY_BY_CODE[code];
        if (!country) return;
        
        // Remove previous highlight
        const prevHighlight = this.svg.querySelector('.country-highlight');
        if (prevHighlight) prevHighlight.remove();
        
        // Add new highlight
        const [lat, lon] = country.coords;
        const x = ((lon + 180) / 360) * this.width;
        const y = ((90 - lat) / 180) * this.height;
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '5');
        circle.setAttribute('fill', '#FF69B4');
        circle.setAttribute('class', 'country-highlight');
        
        // Pulse animation
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'r');
        animate.setAttribute('values', '5;8;5');
        animate.setAttribute('dur', '1.5s');
        animate.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animate);
        
        this.svg.appendChild(circle);
        
        // Update label
        document.getElementById('mini-map-country').textContent = country.name;
    }
}

// Initialize maps when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize world map
    setTimeout(() => {
        window.worldMap = new WorldMapRenderer(document.getElementById('world-map'));
        window.miniMap = new MiniMapRenderer(document.getElementById('mini-map-svg'));
    }, 100);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WorldMapRenderer, MiniMapRenderer };
}
