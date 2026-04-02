// GEOTOPIA HUMAN GEOGRAPHY - MASTER JAVASCRIPT
// Real-time data fetching and interactive features

// ============================================
// GLOBAL CONFIGURATION
// ============================================

const CONFIG = {
    worldBankAPI: 'https://api.worldbank.org/v2',
    restCountriesAPI: 'https://restcountries.com/v3.1',
    updateInterval: 900000, // 15 minutes
    populationBase: 8100000000, // 2026 estimate
    growthPerSecond: 2.5
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + 'K';
    }
    return num.toLocaleString();
}

function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<span class="loading"></span>';
    }
}

function hideLoading() {
    document.querySelectorAll('.loading').forEach(el => el.remove());
}

async function fetchWithCache(url, cacheKey, cacheDuration = 900000) {
    const cached = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(cacheKey + '_time');
    
    if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < cacheDuration) {
        return JSON.parse(cached);
    }
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        localStorage.setItem(cacheKey + '_time', Date.now().toString());
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return cached ? JSON.parse(cached) : null;
    }
}

// ============================================
// LIVE POPULATION COUNTER
// ============================================

function updateWorldPopulation() {
    const elements = document.querySelectorAll('#world-pop, #world-pop-hero');
    if (elements.length === 0) return;
    
    const basePopulation = CONFIG.populationBase;
    const growthPerSecond = CONFIG.growthPerSecond;
    const startDate = new Date('2026-01-01T00:00:00Z');
    const now = new Date();
    const secondsElapsed = (now - startDate) / 1000;
    const currentPopulation = Math.floor(basePopulation + (secondsElapsed * growthPerSecond));
    
    elements.forEach(el => {
        el.textContent = currentPopulation.toLocaleString();
    });
}

// Update every second
setInterval(updateWorldPopulation, 1000);
updateWorldPopulation(); // Initial call

// ============================================
// WORLD BANK API INTEGRATION
// ============================================

async function fetchWorldBankIndicator(indicator, countries = 'all', year = '2026') {
    const url = `${CONFIG.worldBankAPI}/country/${countries}/indicator/${indicator}?format=json&date=${year}&per_page=300`;
    const cacheKey = `wb_${indicator}_${countries}_${year}`;
    return await fetchWithCache(url, cacheKey);
}

// Common indicators
const INDICATORS = {
    population: 'SP.POP.TOTL',
    urbanPopulation: 'SP.URB.TOTL.IN.ZS',
    fertilityRate: 'SP.DYN.TFRT.IN',
    lifeExpectancy: 'SP.DYN.LE00.IN',
    gdpPerCapita: 'NY.GDP.PCAP.CD',
    giniIndex: 'SI.POV.GINI',
    internetUsers: 'IT.NET.USER.ZS',
    co2Emissions: 'EN.ATM.CO2E.PC'
};

// ============================================
// LEAFLET MAP INITIALIZATION
// ============================================

function initializeMap(elementId, centerLat = 20, centerLon = 0, zoom = 2) {
    if (!document.getElementById(elementId)) return null;
    
    const map = L.map(elementId).setView([centerLat, centerLon], zoom);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO',
        maxZoom: 19
    }).addTo(map);
    
    return map;
}

// Population density choropleth
async function createPopulationDensityMap(mapId) {
    const map = initializeMap(mapId);
    if (!map) return;
    
    try {
        // Fetch country GeoJSON
        const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
        const geojsonData = await response.json();
        
        // Population density data (sample - replace with API)
        const densityData = {
            'Monaco': 26337, 'Singapore': 8592, 'Bahrain': 2115,
            'Bangladesh': 1265, 'Palestine': 847, 'Taiwan': 673,
            'South Korea': 527, 'Rwanda': 525, 'Netherlands': 508,
            'India': 464, 'Belgium': 383, 'Philippines': 368,
            'Japan': 347, 'Vietnam': 314, 'United Kingdom': 281,
            'Germany': 240, 'Italy': 206, 'China': 153,
            'Nigeria': 226, 'Indonesia': 151, 'Pakistan': 287
        };
        
        function getColor(density) {
            return density > 500 ? '#a50f15' :
                   density > 300 ? '#de2d26' :
                   density > 150 ? '#fb6a4a' :
                   density > 50  ? '#fcae91' :
                                   '#fee5d9';
        }
        
        function style(feature) {
            const countryName = feature.properties.ADMIN;
            const density = densityData[countryName] || 0;
            return {
                fillColor: getColor(density),
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7
            };
        }
        
        L.geoJSON(geojsonData, {
            style: style,
            onEachFeature: function(feature, layer) {
                const countryName = feature.properties.ADMIN;
                const density = densityData[countryName] || 'N/A';
                layer.bindPopup(`<strong>${countryName}</strong><br>Density: ${density} per km²`);
            }
        }).addTo(map);
        
    } catch (error) {
        console.error('Map error:', error);
    }
}

// ============================================
// CHART.JS SETUP
// ============================================

Chart.defaults.font.family = 'Inter, sans-serif';
Chart.defaults.color = '#1f2937';
Chart.defaults.plugins.legend.display = true;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.8)';

// Age Distribution Chart
function createAgeDistributionChart(canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['India', 'China', 'USA', 'Indonesia', 'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Mexico', 'Japan'],
            datasets: [
                {
                    label: '0-14 years',
                    data: [26.3, 17.3, 18.1, 23.5, 19.7, 42.3, 26.1, 17.8, 25.3, 12.1],
                    backgroundColor: '#3b82f6'
                },
                {
                    label: '15-64 years',
                    data: [67.8, 70.4, 64.6, 68.7, 69.5, 54.6, 68.5, 66.1, 66.4, 59.1],
                    backgroundColor: '#22c55e'
                },
                {
                    label: '65+ years',
                    data: [6.9, 12.3, 17.3, 7.8, 10.8, 3.1, 5.4, 16.1, 8.3, 28.8],
                    backgroundColor: '#f59e0b'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true },
                y: { stacked: true, title: { display: true, text: 'Percentage' } }
            }
        }
    });
}

// Birth vs Death Rate Chart
function createBirthDeathChart(canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Developed Countries',
                    data: [
                        {x: 8.2, y: 10.1}, // Japan
                        {x: 8.3, y: 9.7},  // Germany
                        {x: 10.9, y: 9.5}, // USA
                        {x: 10.8, y: 9.1}, // UK
                        {x: 10.7, y: 9.3}  // France
                    ],
                    backgroundColor: '#3b82f6'
                },
                {
                    label: 'Developing Countries',
                    data: [
                        {x: 17.6, y: 7.1}, // India
                        {x: 10.9, y: 7.4}, // China
                        {x: 14.8, y: 6.3}, // Brazil
                        {x: 36.9, y: 8.4}, // Nigeria
                        {x: 18.2, y: 5.7}  // Indonesia
                    ],
                    backgroundColor: '#22c55e'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Birth Rate (per 1000)' } },
                y: { title: { display: true, text: 'Death Rate (per 1000)' } }
            }
        }
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function initializeSearch() {
    const searchBar = document.getElementById('search-bar');
    if (!searchBar) return;
    
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.topic-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

// ============================================
// COUNTRY COMPARISON TOOL
// ============================================

async function compareCountries() {
    const country1 = document.getElementById('country1').value;
    const country2 = document.getElementById('country2').value;
    const resultsDiv = document.getElementById('comparison-results');
    
    if (!country1 || !country2) {
        resultsDiv.innerHTML = '<p style="text-align: center; color: #f59e0b;">Please select both countries</p>';
        return;
    }
    
    resultsDiv.innerHTML = '<div class="loading-overlay"><span class="loading"></span></div>';
    
    try {
        const [data1, data2] = await Promise.all([
            fetch(`${CONFIG.restCountriesAPI}/alpha/${country1}`).then(r => r.json()),
            fetch(`${CONFIG.restCountriesAPI}/alpha/${country2}`).then(r => r.json())
        ]);
        
        const c1 = data1[0];
        const c2 = data2[0];
        
        resultsDiv.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Indicator</th>
                        <th>${c1.name.common}</th>
                        <th>${c2.name.common}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Population</td>
                        <td>${c1.population.toLocaleString()}</td>
                        <td>${c2.population.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Area (km²)</td>
                        <td>${c1.area.toLocaleString()}</td>
                        <td>${c2.area.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>${c1.capital?.[0] || 'N/A'}</td>
                        <td>${c2.capital?.[0] || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>${c1.region}</td>
                        <td>${c2.region}</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>${Object.values(c1.languages || {}).join(', ')}</td>
                        <td>${Object.values(c2.languages || {}).join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        `;
    } catch (error) {
        resultsDiv.innerHTML = '<p style="text-align: center; color: #ef4444;">Error loading comparison data</p>';
    }
}

// ============================================
// UPDATE TIMESTAMP
// ============================================

function updateTimestamp() {
    const elements = document.querySelectorAll('#update-time');
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    
    elements.forEach(el => {
        el.textContent = formatted;
    });
}

// ============================================
// LIVE DATA SIMULATION (for demonstration)
// ============================================

function simulateLiveFlights() {
    const element = document.getElementById('live-flights');
    if (!element) return;
    
    setInterval(() => {
        const baseFlights = 12000;
        const variance = Math.floor(Math.random() * 2000);
        element.textContent = (baseFlights + variance).toLocaleString();
    }, 5000);
}

function simulateAIPapers() {
    const element = document.getElementById('ai-papers');
    if (!element) return;
    
    let count = 800;
    setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        element.textContent = count.toLocaleString();
    }, 10000);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core features
    updateWorldPopulation();
    updateTimestamp();
    initializeSearch();
    
    // Live simulations
    simulateLiveFlights();
    simulateAIPapers();
    
    // Map initialization
    if (document.getElementById('population-map')) {
        createPopulationDensityMap('population-map');
    }
    
    // Charts
    if (document.getElementById('age-distribution-chart')) {
        createAgeDistributionChart('age-distribution-chart');
    }
    
    if (document.getElementById('birth-death-chart')) {
        createBirthDeathChart('birth-death-chart');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Lazy load images (if any)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    }
    
    console.log('Geotopia Human Geography initialized successfully ✅');
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
