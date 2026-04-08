// ============================================
// 🗺️ ENHANCED MAP WITH 150+ PLATEAU MARKERS
// ============================================

function initEnhancedMap() {
    const mapContainer = document.getElementById('plateau-map');
    if (!mapContainer) return;

    // If map already exists, remove it
    if (window.plateauMapInstance) {
        window.plateauMapInstance.remove();
    }

    // Initialize map with better settings
    const map = L.map('plateau-map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        scrollWheelZoom: true,
        worldCopyJump: true,
        zoomControl: true
    });

    window.plateauMapInstance = map;

    // Get theme
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    // Add tile layer
    const tileUrl = isDark 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    L.tileLayer(tileUrl, {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Create marker cluster group with custom styling
    const markers = L.markerClusterGroup({
        chunkedLoading: true,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        maxClusterRadius: 50,
        iconCreateFunction: function(cluster) {
            const count = cluster.getChildCount();
            let size = 'small';
            let pixels = 36;
            if (count > 10) { size = 'medium'; pixels = 44; }
            if (count > 50) { size = 'large'; pixels = 52; }
            
            return L.divIcon({
                html: `<div style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: ${pixels}px;
                    height: ${pixels}px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #cf6f4f, #9d4830);
                    color: white;
                    font-weight: 700;
                    font-size: ${count > 50 ? '14px' : '12px'};
                    border: 3px solid white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                ">${count}</div>`,
                className: 'custom-cluster',
                iconSize: L.point(pixels, pixels)
            });
        }
    });

    // Get plateau data
    const plateaus = typeof PLATEAUS_COMPLETE_DATA !== 'undefined' 
        ? PLATEAUS_COMPLETE_DATA.worldPlateaus 
        : (typeof PLATEAU_DATA !== 'undefined' ? PLATEAU_DATA.majorPlateaus : []);

    if (plateaus.length === 0) {
        console.warn('No plateau data found. Make sure plateaus-data.js is loaded.');
        return;
    }

    // Type colors
    const typeColors = {
        'Intermontane': '#ef4444',
        'Volcanic': '#f59e0b',
        'Dissected': '#8b5cf6',
        'Piedmont': '#10b981',
        'Continental': '#06b6d4',
        'Erosional': '#3b82f6',
        'Dome': '#ec4899',
        'Karst': '#84cc16',
        'Depositional': '#f97316',
        'Glacial': '#0ea5e9',
        'default': '#cf6f4f'
    };

    // Add markers for all plateaus
    plateaus.forEach(plateau => {
        const coords = plateau.coordinates;
        if (!coords || !coords.lat || !coords.lng) return;

        // Get color based on type
        let color = typeColors.default;
        for (const [type, clr] of Object.entries(typeColors)) {
            if (plateau.type && plateau.type.toLowerCase().includes(type.toLowerCase())) {
                color = clr;
                break;
            }
        }

        // Create custom icon
        const icon = L.divIcon({
            className: 'custom-plateau-marker',
            html: `<div style="
                width: 26px;
                height: 26px;
                background: ${color};
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M14,6l-3.8,5l3.8,5H6l3.8-5L6,6H14z M18,6l-3.8,5l3.8,5h-4l3.8-5L14,6H18z"/>
                </svg>
            </div>`,
            iconSize: [26, 26],
            iconAnchor: [13, 13],
            popupAnchor: [0, -13]
        });

        // Create marker
        const marker = L.marker([coords.lat, coords.lng], { 
            icon: icon,
            plateauType: plateau.type,
            plateauId: plateau.id
        });

        // Create popup content
        const countries = Array.isArray(plateau.countries) ? plateau.countries.join(', ') : plateau.countries;
        const area = plateau.area ? (plateau.area / 1000000).toFixed(2) : 'N/A';
        const elevation = plateau.avgElevation ? plateau.avgElevation.toLocaleString() : 'N/A';
        const age = plateau.ageMillionYears ? plateau.ageMillionYears.toLocaleString() : 'Unknown';

        const popupContent = `
            <div style="
                min-width: 280px;
                font-family: 'Inter', sans-serif;
            ">
                <h3 style="
                    margin: 0 0 8px 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: ${color};
                    font-family: 'Quicksand', sans-serif;
                ">${plateau.name}</h3>
                
                ${plateau.alternateName ? `<p style="margin: 0 0 8px 0; font-size: 12px; color: #666; font-style: italic;">${plateau.alternateName}</p>` : ''}
                
                ${plateau.nickname ? `<p style="margin: 0 0 8px 0; font-size: 11px; color: ${color}; font-weight: 600;">"${plateau.nickname}"</p>` : ''}
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 12px 0;">
                    <div style="text-align: center; padding: 8px; background: ${isDark ? '#1f2937' : '#f3f4f6'}; border-radius: 8px;">
                        <div style="font-size: 16px; font-weight: 700; color: ${color};">${area}M</div>
                        <div style="font-size: 10px; color: #666;">km² Area</div>
                    </div>
                    <div style="text-align: center; padding: 8px; background: ${isDark ? '#1f2937' : '#f3f4f6'}; border-radius: 8px;">
                        <div style="font-size: 16px; font-weight: 700; color: ${color};">${elevation}</div>
                        <div style="font-size: 10px; color: #666;">m Elevation</div>
                    </div>
                </div>
                
                <div style="font-size: 12px; color: ${isDark ? '#9ca3af' : '#4b5563'};">
                    <p style="margin: 4px 0;"><strong>Type:</strong> ${plateau.type || 'Unknown'}</p>
                    <p style="margin: 4px 0;"><strong>Countries:</strong> ${countries}</p>
                    <p style="margin: 4px 0;"><strong>Age:</strong> ${age} million years</p>
                </div>
                
                ${plateau.features && plateau.features.length > 0 ? `
                    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid ${isDark ? '#374151' : '#e5e7eb'};">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; color: ${isDark ? '#9ca3af' : '#4b5563'};">Key Features:</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                            ${plateau.features.slice(0, 4).map(f => `
                                <span style="
                                    display: inline-block;
                                    padding: 2px 8px;
                                    background: ${color}20;
                                    color: ${color};
                                    border-radius: 12px;
                                    font-size: 10px;
                                ">${f}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${plateau.rank ? `
                    <div style="
                        margin-top: 8px;
                        padding: 6px 12px;
                        background: linear-gradient(135deg, #fbbf24, #f59e0b);
                        border-radius: 8px;
                        text-align: center;
                    ">
                        <span style="color: #000; font-weight: 700; font-size: 11px;">
                            🏆 #${plateau.rank} - ${plateau.rankCriteria || 'Notable Plateau'}
                        </span>
                    </div>
                ` : ''}
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 320,
            className: 'custom-popup'
        });

        markers.addLayer(marker);
    });

    // Add markers to map
    map.addLayer(markers);

    // Add custom popup styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-popup .leaflet-popup-content-wrapper {
            background: ${isDark ? '#1f2937' : '#ffffff'};
            color: ${isDark ? '#f3f4f6' : '#1f2937'};
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            border: 1px solid ${isDark ? '#374151' : '#e5e7eb'};
        }
        .custom-popup .leaflet-popup-tip {
            background: ${isDark ? '#1f2937' : '#ffffff'};
            border: 1px solid ${isDark ? '#374151' : '#e5e7eb'};
        }
        .custom-popup .leaflet-popup-content {
            margin: 12px 14px;
        }
    `;
    document.head.appendChild(style);

    // Store reference for filtering
    window.plateauMarkers = markers;
    window.plateauData = plateaus;

    console.log(`🗺️ Enhanced map loaded with ${plateaus.length} plateau markers`);
}

// Filter function for map controls
function filterMapByType(type) {
    if (!window.plateauMarkers || !window.plateauMapInstance) return;

    window.plateauMarkers.clearLayers();

    const plateaus = window.plateauData || [];
    const isDark = document.body.getAttribute('data-theme') === 'dark';

    const typeColors = {
        'Intermontane': '#ef4444',
        'Volcanic': '#f59e0b',
        'Dissected': '#8b5cf6',
        'Piedmont': '#10b981',
        'Continental': '#06b6d4',
        'default': '#cf6f4f'
    };

    const filteredPlateaus = type === 'all' 
        ? plateaus 
        : plateaus.filter(p => p.type && p.type.toLowerCase().includes(type.toLowerCase()));

    filteredPlateaus.forEach(plateau => {
        const coords = plateau.coordinates;
        if (!coords || !coords.lat || !coords.lng) return;

        let color = typeColors.default;
        for (const [t, c] of Object.entries(typeColors)) {
            if (plateau.type && plateau.type.toLowerCase().includes(t.toLowerCase())) {
                color = c;
                break;
            }
        }

        const icon = L.divIcon({
            className: 'custom-plateau-marker',
            html: `<div style="
                width: 26px;
                height: 26px;
                background: ${color};
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M14,6l-3.8,5l3.8,5H6l3.8-5L6,6H14z"/>
                </svg>
            </div>`,
            iconSize: [26, 26],
            iconAnchor: [13, 13],
            popupAnchor: [0, -13]
        });

        const marker = L.marker([coords.lat, coords.lng], { icon });

        const countries = Array.isArray(plateau.countries) ? plateau.countries.join(', ') : plateau.countries;
        const area = plateau.area ? (plateau.area / 1000000).toFixed(2) : 'N/A';
        const elevation = plateau.avgElevation ? plateau.avgElevation.toLocaleString() : 'N/A';

        marker.bindPopup(`
            <div style="min-width: 250px;">
                <h3 style="margin: 0 0 8px 0; color: ${color}; font-family: 'Quicksand', sans-serif;">${plateau.name}</h3>
                <p style="margin: 4px 0;"><strong>Type:</strong> ${plateau.type}</p>
                <p style="margin: 4px 0;"><strong>Countries:</strong> ${countries}</p>
                <p style="margin: 4px 0;"><strong>Area:</strong> ${area}M km²</p>
                <p style="margin: 4px 0;"><strong>Elevation:</strong> ${elevation}m</p>
            </div>
        `, { maxWidth: 300 });

        window.plateauMarkers.addLayer(marker);
    });

    console.log(`Filtered to ${filteredPlateaus.length} plateaus of type: ${type}`);
}

// Export
if (typeof window !== 'undefined') {
    window.initEnhancedMap = initEnhancedMap;
    window.filterMapByType = filterMapByType;
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
    // Wait for data to load
    setTimeout(() => {
        if (document.getElementById('plateau-map')) {
            initEnhancedMap();
        }
    }, 500);
});

console.log('🗺️ Enhanced Map module loaded!');
