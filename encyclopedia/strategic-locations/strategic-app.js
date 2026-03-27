// geotopia/encyclopedia/strategic-locations/strategic-app.js

// Initialize Mapbox (you'll need a free API key from mapbox.com)
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE'; // Get free at mapbox.com

const map = new mapboxgl.Map({
    container: 'strategic-map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [30, 20],
    zoom: 2,
    projection: 'globe'
});

// Add navigation controls
map.addControl(new mapboxgl.NavigationControl());

// Wait for map to load
map.on('load', () => {
    addLocationMarkers();
});

function addLocationMarkers() {
    const allLocations = [
        ...strategicLocations.straits,
        ...strategicLocations.canals,
        ...strategicLocations.passes
    ];

    allLocations.forEach(location => {
        // Create custom marker
        const el = document.createElement('div');
        el.className = 'location-marker';
        el.innerHTML = getMarkerIcon(location.type);
        el.style.cssText = `
            width: 40px;
            height: 40px;
            background: ${getMarkerColor(location.importance)};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            transition: transform 0.3s;
        `;

        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.3)';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(createPopupContent(location));

        // Add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(popup)
            .addTo(map);
    });
}

function getMarkerIcon(type) {
    const icons = {
        'strait': '🌊',
        'canal': '🚢',
        'mountain-pass': '⛰️'
    };
    return icons[type] || '📍';
}

function getMarkerColor(importance) {
    if (importance >= 90) return '#c62828';
    if (importance >= 80) return '#f57c00';
    return '#fbc02d';
}

function createPopupContent(location) {
    const topCountry = Object.entries(location.criticalFor)[0];
    return `
        <div style="color: #000; padding: 10px;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px;">${location.name}</h3>
            <p style="margin: 5px 0;"><strong>Importance:</strong> ${location.importance}/100</p>
            <p style="margin: 5px 0;"><strong>Most Critical For:</strong> ${topCountry[0]}</p>
            <p style="margin: 5px 0; font-size: 12px; color: #666;">${topCountry[1].reason}</p>
            <a href="${location.detailPage}" style="color: #1a237e; font-weight: bold;">View Details →</a>
        </div>
    `;
}

// Render location cards
function renderLocationCards(filter = 'all') {
    const container = document.getElementById('locations-container');
    container.innerHTML = '';

    let locationsToShow = [];
    
    if (filter === 'all') {
        locationsToShow = [
            ...strategicLocations.straits,
            ...strategicLocations.canals,
            ...strategicLocations.passes
        ];
    } else {
        const typeMap = {
            'strait': strategicLocations.straits,
            'canal': strategicLocations.canals,
            'mountain-pass': strategicLocations.passes
        };
        locationsToShow = typeMap[filter] || [];
    }

    // Sort by importance
    locationsToShow.sort((a, b) => b.importance - a.importance);

    locationsToShow.forEach(location => {
        const card = createLocationCard(location);
        container.appendChild(card);
    });
}

function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = 'location-card';
    
    // Get top 3 most affected countries
    const topCountries = Object.entries(location.criticalFor)
        .sort((a, b) => b[1].importance - a[1].importance)
        .slice(0, 3);

    card.innerHTML = `
        <div class="location-header">
            <span class="importance-badge">${location.importance}/100</span>
            <h3>${location.name}</h3>
            <div class="location-type">${location.type.replace('-', ' ')}</div>
        </div>
        
        <div class="location-body">
            <div class="stats-grid">
                ${Object.entries(location.stats).slice(0, 4).map(([key, value]) => `
                    <div class="stat-item">
                        <div class="stat-label">${formatKey(key)}</div>
                        <div class="stat-value">${value}</div>
                    </div>
                `).join('')}
            </div>

            <div class="countries">
                <h4>Countries Involved</h4>
                <div class="country-tags">
                    ${location.countries.map(c => `<span class="country-tag">${c}</span>`).join('')}
                </div>
            </div>

            <div class="critical-countries">
                <h4>🎯 Most Critical For</h4>
                ${topCountries.map(([country, data]) => `
                    <div class="country-importance ${getImportanceClass(data.importance)}">
                        <div class="country-name-importance">
                            <strong>${country}</strong>
                            <span class="importance-score">${data.importance}/100</span>
                        </div>
                        <div class="reason">${data.reason}</div>
                        <div class="strategic-note">📌 ${data.strategic}</div>
                    </div>
                `).join('')}
            </div>

            <div class="actions">
                <a href="${location.detailPage}" class="btn btn-primary">Full Analysis →</a>
                <a href="../${location.mapLink}" class="btn btn-secondary">View on Map 🗺️</a>
            </div>
        </div>
    `;

    return card;
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

function getImportanceClass(score) {
    if (score >= 90) return 'critical';
    if (score >= 75) return 'high';
    return 'moderate';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.dataset.type;
        renderLocationCards(filter);
        
        // Update map markers (optional enhancement)
        // Could filter visible markers based on type
    });
});

// Initial render
renderLocationCards();
