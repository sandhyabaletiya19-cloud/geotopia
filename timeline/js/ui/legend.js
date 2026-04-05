/**
 * GEOTOPIA - Legend Component
 * Dynamic map legend with color coding for eras and civilizations
 */

const Legend = (function() {
    'use strict';

    // DOM Elements
    let legendContainer, legendContent;
    
    // Current legend type
    let currentType = 'geological';

    // Legend configurations
    const legendConfigs = {
        geological: {
            title: 'Geological Eras',
            items: [
                { name: 'Hadean', color: '#FF4500', years: '4.5 - 4.0 BYA' },
                { name: 'Archean', color: '#8B0000', years: '4.0 - 2.5 BYA' },
                { name: 'Proterozoic', color: '#4B0082', years: '2.5 BYA - 541 MYA' },
                { name: 'Paleozoic', color: '#228B22', years: '541 - 252 MYA' },
                { name: 'Mesozoic', color: '#32CD32', years: '252 - 66 MYA' },
                { name: 'Cenozoic', color: '#1E90FF', years: '66 MYA - Present' }
            ]
        },
        civilizations: {
            title: 'Civilizations',
            items: [
                { name: 'Africa', color: '#FFD700', icon: '🌍' },
                { name: 'Mediterranean', color: '#4682B4', icon: '🏛️' },
                { name: 'Middle East', color: '#DAA520', icon: '🕌' },
                { name: 'South Asia', color: '#FF6347', icon: '🕉️' },
                { name: 'East Asia', color: '#DC143C', icon: '🏯' },
                { name: 'Southeast Asia', color: '#20B2AA', icon: '🛕' },
                { name: 'Europe', color: '#4169E1', icon: '👑' },
                { name: 'Americas', color: '#8B4513', icon: '🗿' },
                { name: 'Oceania', color: '#00CED1', icon: '🌴' },
                { name: 'Central Asia', color: '#9932CC', icon: '🐎' }
            ]
        },
        events: {
            title: 'Event Types',
            items: [
                { name: 'Major Event', color: '#FFD700', shape: 'circle' },
                { name: 'Catastrophe', color: '#FF0000', shape: 'circle' },
                { name: 'Biological', color: '#00FF00', shape: 'circle' },
                { name: 'Geological', color: '#FF6600', shape: 'circle' },
                { name: 'Political', color: '#4169E1', shape: 'circle' },
                { name: 'Military', color: '#8B0000', shape: 'circle' }
            ]
        },
        mapFeatures: {
            title: 'Map Features',
            items: [
                { name: 'Land', color: '#228B22', type: 'fill' },
                { name: 'Ocean', color: '#1E90FF', type: 'fill' },
                { name: 'Ice', color: '#E0FFFF', type: 'fill' },
                { name: 'Volcanic', color: '#FF4500', type: 'fill' },
                { name: 'Desert', color: '#DEB887', type: 'fill' },
                { name: 'Trade Route', color: '#FFD700', type: 'line' },
                { name: 'Migration', color: '#00CED1', type: 'line-dashed' },
                { name: 'Border', color: '#333333', type: 'line' }
            ]
        }
    };

    /**
     * Initialize legend
     */
    function init() {
        console.log('🗺️ Initializing Legend...');
        
        legendContainer = document.getElementById('legend');
        legendContent = document.getElementById('legend-content');
        
        // Initial render
        render('geological');
        
        // Subscribe to state changes
        if (typeof GeoState !== 'undefined') {
            GeoState.subscribe('currentYear', (year) => {
                updateForYear(year);
            });
        }
        
        console.log('✅ Legend initialized');
    }

    /**
     * Render legend with specific type
     */
    function render(type) {
        if (!legendContent) return;
        
        currentType = type;
        const config = legendConfigs[type];
        
        if (!config) {
            console.warn('Unknown legend type:', type);
            return;
        }
        
        let html = `<h4 class="legend-section-title">${config.title}</h4>`;
        html += '<ul class="legend-items">';
        
        config.items.forEach(item => {
            html += renderLegendItem(item, type);
        });
        
        html += '</ul>';
        
        // Add legend type selector
        html += renderTypeSelector(type);
        
        legendContent.innerHTML = html;
        
        // Bind type selector events
        bindTypeSelector();
    }

    /**
     * Render a single legend item
     */
    function renderLegendItem(item, type) {
        let symbolHtml = '';
        
        if (item.icon) {
            symbolHtml = `<span class="legend-icon">${item.icon}</span>`;
        } else if (item.type === 'line') {
            symbolHtml = `<span class="legend-line" style="background: ${item.color}"></span>`;
        } else if (item.type === 'line-dashed') {
            symbolHtml = `<span class="legend-line dashed" style="background: ${item.color}"></span>`;
        } else {
            symbolHtml = `<span class="legend-color" style="background: ${item.color}"></span>`;
        }
        
        let labelHtml = `<span class="legend-label">${item.name}</span>`;
        
        if (item.years) {
            labelHtml += `<span class="legend-years">${item.years}</span>`;
        }
        
        return `
            <li class="legend-item" data-name="${item.name.toLowerCase()}">
                ${symbolHtml}
                <div class="legend-text">
                    ${labelHtml}
                </div>
            </li>
        `;
    }

    /**
     * Render type selector tabs
     */
    function renderTypeSelector(activeType) {
        const types = [
            { id: 'geological', label: '🌋 Eras', shortLabel: '🌋' },
            { id: 'civilizations', label: '🏛️ Civs', shortLabel: '🏛️' },
            { id: 'events', label: '📍 Events', shortLabel: '📍' },
            { id: 'mapFeatures', label: '🗺️ Map', shortLabel: '🗺️' }
        ];
        
        let html = '<div class="legend-type-selector">';
        
        types.forEach(type => {
            const isActive = type.id === activeType ? 'active' : '';
            html += `
                <button class="legend-type-btn ${isActive}" data-type="${type.id}" title="${type.label}">
                    ${type.shortLabel}
                </button>
            `;
        });
        
        html += '</div>';
        
        return html;
    }

    /**
     * Bind type selector click events
     */
    function bindTypeSelector() {
        const buttons = document.querySelectorAll('.legend-type-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                render(type);
            });
        });
    }

    /**
     * Update legend based on current year
     */
    function updateForYear(year) {
        // Determine appropriate legend type based on year
        let newType;
        
        if (year < -10000) {
            newType = 'geological';
        } else {
            newType = 'civilizations';
        }
        
        // Only re-render if type changed
        if (newType !== currentType) {
            render(newType);
        }
        
        // Highlight current era/civilization
        highlightCurrent(year);
    }

    /**
     * Highlight current era or civilization
     */
    function highlightCurrent(year) {
        // Remove all highlights
        document.querySelectorAll('.legend-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Determine what to highlight
        if (currentType === 'geological') {
            let currentEra;
            if (year <= -4000000000) currentEra = 'hadean';
            else if (year <= -2500000000) currentEra = 'archean';
            else if (year <= -541000000) currentEra = 'proterozoic';
            else if (year <= -252000000) currentEra = 'paleozoic';
            else if (year <= -66000000) currentEra = 'mesozoic';
            else currentEra = 'cenozoic';
            
            const item = document.querySelector(`.legend-item[data-name="${currentEra}"]`);
            if (item) {
                item.classList.add('active');
            }
        }
    }

    /**
     * Add custom legend item dynamically
     */
    function addItem(item) {
        if (!legendContent) return;
        
        const list = legendContent.querySelector('.legend-items');
        if (list) {
            const li = document.createElement('li');
            li.className = 'legend-item';
            li.innerHTML = `
                <span class="legend-color" style="background: ${item.color}"></span>
                <div class="legend-text">
                    <span class="legend-label">${item.name}</span>
                </div>
            `;
            list.appendChild(li);
        }
    }

    /**
     * Remove legend item by name
     */
    function removeItem(name) {
        const item = document.querySelector(`.legend-item[data-name="${name.toLowerCase()}"]`);
        if (item) {
            item.remove();
        }
    }

    /**
     * Show/hide legend
     */
    function show() {
        if (legendContainer) {
            legendContainer.classList.add('visible');
        }
    }

    function hide() {
        if (legendContainer) {
            legendContainer.classList.remove('visible');
        }
    }

    function toggle() {
        if (legendContainer) {
            legendContainer.classList.toggle('visible');
        }
    }

    /**
     * Get current legend configuration
     */
    function getConfig(type) {
        return legendConfigs[type || currentType];
    }

    /**
     * Set custom legend configuration
     */
    function setConfig(type, config) {
        legendConfigs[type] = config;
    }

    /**
     * Get color for an item by name
     */
    function getColor(name, type) {
        const config = legendConfigs[type || currentType];
        if (!config) return null;
        
        const item = config.items.find(i => 
            i.name.toLowerCase() === name.toLowerCase()
        );
        
        return item ? item.color : null;
    }

    /**
     * Get all colors as a map
     */
    function getAllColors(type) {
        const config = legendConfigs[type || currentType];
        if (!config) return {};
        
        const colors = {};
        config.items.forEach(item => {
            colors[item.name.toLowerCase()] = item.color;
        });
        
        return colors;
    }

    // Public API
    return {
        init,
        render,
        updateForYear,
        addItem,
        removeItem,
        show,
        hide,
        toggle,
        getConfig,
        setConfig,
        getColor,
        getAllColors
    };
})();

// CSS for legend (add to existing css/map.css or include inline)
const legendStyles = `
    .legend-items {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .legend-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        transition: background 0.2s ease;
    }
    
    .legend-item:last-child {
        border-bottom: none;
    }
    
    .legend-item:hover {
        background: rgba(255,255,255,0.05);
    }
    
    .legend-item.active {
        background: rgba(255,255,255,0.1);
    }
    
    .legend-item.active .legend-color {
        transform: scale(1.2);
        box-shadow: 0 0 10px currentColor;
    }
    
    .legend-color {
        width: 16px;
        height: 16px;
        border-radius: 3px;
        flex-shrink: 0;
        transition: transform 0.2s ease;
    }
    
    .legend-icon {
        font-size: 16px;
        width: 20px;
        text-align: center;
    }
    
    .legend-line {
        width: 24px;
        height: 3px;
        border-radius: 2px;
    }
    
    .legend-line.dashed {
        background: repeating-linear-gradient(
            90deg,
            currentColor,
            currentColor 4px,
            transparent 4px,
            transparent 8px
        ) !important;
    }
    
    .legend-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    
    .legend-label {
        font-size: 12px;
        color: var(--text-primary, #fff);
    }
    
    .legend-years {
        font-size: 10px;
        color: var(--text-secondary, #aaa);
    }
    
    .legend-section-title {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-secondary, #aaa);
        margin-bottom: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    
    .legend-type-selector {
        display: flex;
        gap: 4px;
        margin-top: 12px;
        padding-top: 8px;
        border-top: 1px solid rgba(255,255,255,0.2);
    }
    
    .legend-type-btn {
        flex: 1;
        padding: 6px 4px;
        font-size: 14px;
        background: rgba(255,255,255,0.1);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .legend-type-btn:hover {
        background: rgba(255,255,255,0.2);
    }
    
    .legend-type-btn.active {
        background: var(--accent-primary, #4ECDC4);
        color: #000;
    }
`;

// Inject styles if not already present
if (!document.getElementById('legend-dynamic-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'legend-dynamic-styles';
    styleSheet.textContent = legendStyles;
    document.head.appendChild(styleSheet);
}

console.log('🗺️ Legend module loaded');
