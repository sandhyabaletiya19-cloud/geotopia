// geotopia/encyclopedia/strategic-locations/live-data-engine.js

class LiveDataEngine {
    constructor() {
        this.cache = new Map();
        this.updateIntervals = new Map();
        this.listeners = new Map();
    }

    // === REAL-TIME SHIP TRACKING ===
    async getShipsInStrait(straitId) {
        const cacheKey = `ships_${straitId}`;
        
        if (this.isCacheValid(cacheKey)) {
            return this.cache.get(cacheKey).data;
        }

        const coordinates = this.getStraitCoordinates(straitId);
        
        try {
            // Using AISHub (free alternative to MarineTraffic)
            const response = await fetch(
                `${API_CONFIG.shipTracking.endpoint}?` + new URLSearchParams({
                    username: API_CONFIG.shipTracking.apiKey,
                    format: 'json',
                    latmin: coordinates.latMin,
                    latmax: coordinates.latMax,
                    lonmin: coordinates.lonMin,
                    lonmax: coordinates.lonMax
                })
            );

            const data = await response.json();
            
            const processedShips = data.map(ship => ({
                id: ship.MMSI,
                name: ship.NAME,
                type: this.getShipType(ship.TYPE),
                lat: ship.LATITUDE,
                lon: ship.LONGITUDE,
                speed: ship.SPEED,
                course: ship.COURSE,
                destination: ship.DESTINATION,
                eta: ship.ETA,
                flag: ship.FLAG,
                cargoType: this.estimateCargoType(ship),
                economicValue: this.estimateCargoValue(ship)
            }));

            this.updateCache(cacheKey, processedShips, CACHE_DURATION.ships);
            return processedShips;
            
        } catch (error) {
            console.error('Ship tracking error:', error);
            return this.getDemoShipData(straitId); // Fallback to demo data
        }
    }

    getStraitCoordinates(straitId) {
        const coords = {
            'malacca': { latMin: 1.0, latMax: 4.0, lonMin: 100.0, lonMax: 104.0 },
            'hormuz': { latMin: 25.0, latMax: 27.5, lonMin: 55.0, lonMax: 57.5 },
            'bosporus': { latMin: 40.9, latMax: 41.3, lonMin: 28.9, lonMax: 29.2 },
            'gibraltar': { latMin: 35.8, latMax: 36.2, lonMin: -5.8, lonMax: -5.2 },
            'suez': { latMin: 29.5, latMax: 31.5, lonMin: 32.0, lonMax: 33.0 }
        };
        return coords[straitId];
    }

    getShipType(typeCode) {
        const types = {
            70: 'Cargo Ship',
            71: 'Cargo Ship - Hazardous',
            72: 'Cargo Ship - Reserved',
            73: 'Cargo Ship - Reserved',
            74: 'Cargo Ship - Reserved',
            79: 'Cargo Ship - No Additional Info',
            80: 'Tanker',
            81: 'Tanker - Hazardous',
            82: 'Tanker - Reserved',
            83: 'Tanker - Reserved',
            84: 'Tanker - Reserved',
            89: 'Tanker - No Additional Info'
        };
        return types[typeCode] || 'Unknown';
    }

    estimateCargoType(ship) {
        if (ship.TYPE >= 80 && ship.TYPE <= 89) return 'Oil/Gas';
        if (ship.NAME?.includes('CONTAINER')) return 'Containers';
        if (ship.NAME?.includes('BULK')) return 'Bulk Cargo';
        return 'General Cargo';
    }

    estimateCargoValue(ship) {
        // Rough estimates based on ship type and size
        const values = {
            'Oil/Gas': Math.random() * 50000000 + 30000000,      // $30M-$80M
            'Containers': Math.random() * 100000000 + 50000000,  // $50M-$150M
            'Bulk Cargo': Math.random() * 20000000 + 10000000,   // $10M-$30M
            'General Cargo': Math.random() * 15000000 + 5000000  // $5M-$20M
        };
        return values[this.estimateCargoType(ship)] || 10000000;
    }

    // === LIVE OIL PRICES ===
    async getOilPrices() {
        const cacheKey = 'oil_prices';
        
        if (this.isCacheValid(cacheKey)) {
            return this.cache.get(cacheKey).data;
        }

        try {
            // Brent Crude
            const brentResponse = await fetch(
                `${API_CONFIG.oilPrices.endpoint}?` + new URLSearchParams({
                    function: 'TIME_SERIES_DAILY',
                    symbol: 'BRENT',
                    apikey: API_CONFIG.oilPrices.apiKey
                })
            );
            const brentData = await brentResponse.json();
            
            // WTI Crude
            const wtiResponse = await fetch(
                `${API_CONFIG.oilPrices.endpoint}?` + new URLSearchParams({
                    function: 'TIME_SERIES_DAILY',
                    symbol: 'WTI',
                    apikey: API_CONFIG.oilPrices.apiKey
                })
            );
            const wtiData = await wtiResponse.json();

            const latestBrent = Object.values(brentData['Time Series (Daily)'])[0];
            const latestWTI = Object.values(wtiData['Time Series (Daily)'])[0];

            const prices = {
                brent: {
                    price: parseFloat(latestBrent['4. close']),
                    change: this.calculateChange(brentData),
                    timestamp: new Date()
                },
                wti: {
                    price: parseFloat(latestWTI['4. close']),
                    change: this.calculateChange(wtiData),
                    timestamp: new Date()
                }
            };

            this.updateCache(cacheKey, prices, CACHE_DURATION.prices);
            return prices;
            
        } catch (error) {
            console.error('Oil price error:', error);
            return this.getDemoOilPrices();
        }
    }

    calculateChange(data) {
        const series = Object.values(data['Time Series (Daily)']);
        const today = parseFloat(series[0]['4. close']);
        const yesterday = parseFloat(series[1]['4. close']);
        return ((today - yesterday) / yesterday * 100).toFixed(2);
    }

    // === SECURITY ALERTS ===
    async getSecurityAlerts(straitId) {
        const cacheKey = `security_${straitId}`;
        
        if (this.isCacheValid(cacheKey)) {
            return this.cache.get(cacheKey).data;
        }

        try {
            const straitName = this.getStraitName(straitId);
            const response = await fetch(
                `${API_CONFIG.news.endpoint}?` + new URLSearchParams({
                    q: `"${straitName}" AND (piracy OR military OR attack OR threat OR closure)`,
                    sortBy: 'publishedAt',
                    language: 'en',
                    apiKey: API_CONFIG.news.apiKey
                })
            );

            const data = await response.json();
            
            const alerts = data.articles.slice(0, 10).map(article => ({
                title: article.title,
                description: article.description,
                source: article.source.name,
                publishedAt: article.publishedAt,
                url: article.url,
                severity: this.analyzeSeverity(article.title + ' ' + article.description)
            }));

            this.updateCache(cacheKey, alerts, CACHE_DURATION.news);
            return alerts;
            
        } catch (error) {
            console.error('Security alerts error:', error);
            return this.getDemoSecurityAlerts(straitId);
        }
    }

    analyzeSeverity(text) {
        const critical = ['attack', 'closure', 'blockade', 'war', 'conflict'];
        const high = ['threat', 'tension', 'military', 'exercise'];
        const medium = ['warning', 'concern', 'increase'];
        
        text = text.toLowerCase();
        
        if (critical.some(word => text.includes(word))) return 'critical';
        if (high.some(word => text.includes(word))) return 'high';
        if (medium.some(word => text.includes(word))) return 'medium';
        return 'low';
    }

    // === WEATHER CONDITIONS ===
    async getWeather(straitId) {
        const cacheKey = `weather_${straitId}`;
        
        if (this.isCacheValid(cacheKey)) {
            return this.cache.get(cacheKey).data;
        }

        const coords = this.getStraitCenter(straitId);
        
        try {
            const response = await fetch(
                `${API_CONFIG.weather.endpoint}?` + new URLSearchParams({
                    lat: coords.lat,
                    lon: coords.lon,
                    appid: API_CONFIG.weather.apiKey,
                    units: 'metric'
                })
            );

            const data = await response.json();
            
            const weather = {
                temperature: data.main.temp,
                conditions: data.weather[0].main,
                description: data.weather[0].description,
                windSpeed: data.wind.speed,
                visibility: data.visibility,
                navigationRisk: this.assessNavigationRisk(data),
                timestamp: new Date()
            };

            this.updateCache(cacheKey, weather, CACHE_DURATION.weather);
            return weather;
            
        } catch (error) {
            console.error('Weather error:', error);
            return this.getDemoWeather(straitId);
        }
    }

    getStraitCenter(straitId) {
        const centers = {
            'malacca': { lat: 2.5, lon: 101.5 },
            'hormuz': { lat: 26.5667, lon: 56.25 },
            'bosporus': { lat: 41.1167, lon: 29.0667 },
            'gibraltar': { lat: 35.9667, lon: -5.6 },
            'suez': { lat: 30.5, lon: 32.3 }
        };
        return centers[straitId];
    }

    assessNavigationRisk(weather) {
        let risk = 'low';
        
        if (weather.wind.speed > 15) risk = 'high';
        else if (weather.wind.speed > 10) risk = 'medium';
        
        if (weather.visibility < 1000) risk = 'critical';
        else if (weather.visibility < 5000) risk = 'high';
        
        if (weather.weather[0].main === 'Thunderstorm') risk = 'critical';
        if (weather.weather[0].main === 'Fog') risk = 'high';
        
        return risk;
    }

    // === ECONOMIC IMPACT CALCULATOR ===
    calculateEconomicImpact(straitId, closureDays) {
        const strait = strategicLocations.straits.find(s => s.id === straitId) ||
                      strategicLocations.canals.find(c => c.id === straitId);
        
        const dailyTrade = this.parseDailyTrade(strait.stats.annualTrade);
        const shipsPerDay = strait.stats.dailyShips;
        
        const impact = {
            totalLoss: dailyTrade * closureDays,
            shipsAffected: shipsPerDay * closureDays,
            reroutingCost: this.calculateReroutingCost(straitId, shipsPerDay * closureDays),
            oilPriceIncrease: this.estimateOilPriceImpact(straitId, closureDays),
            affectedCountries: this.getAffectedCountries(straitId),
            globalGDPImpact: dailyTrade * closureDays * 0.001 // 0.1% of trade affects global GDP
        };
        
        return impact;
    }

    parseDailyTrade(annualTrade) {
        const value = annualTrade.replace(/[^0-9.]/g, '');
        const multiplier = annualTrade.includes('trillion') ? 1000000000000 : 1000000000;
        return (parseFloat(value) * multiplier) / 365;
    }

    calculateReroutingCost(straitId, totalShips) {
        const rerouteCosts = {
            'malacca': 300000,    // Per ship to use Sunda/Lombok
            'hormuz': 500000,     // No real alternative
            'suez': 400000,       // Cape of Good Hope
            'panama': 350000,     // Cape Horn
            'bosporus': 1000000   // No alternative
        };
        return (rerouteCosts[straitId] || 200000) * totalShips;
    }

    estimateOilPriceImpact(straitId, days) {
        const impacts = {
            'hormuz': 20 * days,      // Hormuz: $20/barrel increase per day of closure
            'malacca': 10 * days,     // Malacca: $10/barrel
            'bosporus': 5 * days,     // Bosporus: $5/barrel
            'suez': 8 * days          // Suez: $8/barrel
        };
        return Math.min(impacts[straitId] || 0, 150); // Cap at $150/barrel
    }

    getAffectedCountries(straitId) {
        const strait = strategicLocations.straits.find(s => s.id === straitId) ||
                      strategicLocations.canals.find(c => c.id === straitId);
        
        return Object.entries(strait.criticalFor)
            .map(([country, data]) => ({
                country,
                importance: data.importance,
                impact: data.reason
            }))
            .sort((a, b) => b.importance - a.importance);
    }

    // === CACHE MANAGEMENT ===
    isCacheValid(key) {
        if (!this.cache.has(key)) return false;
        const cached = this.cache.get(key);
        return Date.now() - cached.timestamp < cached.duration;
    }

    updateCache(key, data, duration) {
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            duration
        });
    }

    // === DEMO DATA (Fallbacks) ===
    getDemoShipData(straitId) {
        const shipCounts = {
            'malacca': 300,
            'hormuz': 25,
            'suez': 50,
            'panama': 40,
            'bosporus': 135
        };
        
        const count = shipCounts[straitId] || 50;
        const ships = [];
        
        for (let i = 0; i < count; i++) {
            ships.push({
                id: `DEMO${i}`,
                name: `Ship ${i + 1}`,
                type: ['Tanker', 'Cargo', 'Container'][Math.floor(Math.random() * 3)],
                cargoType: ['Oil/Gas', 'Containers', 'Bulk Cargo'][Math.floor(Math.random() * 3)],
                economicValue: Math.random() * 100000000 + 10000000,
                speed: Math.random() * 20 + 5,
                flag: ['China', 'USA', 'Singapore', 'Japan', 'South Korea'][Math.floor(Math.random() * 5)]
            });
        }
        
        return ships;
    }

    getDemoOilPrices() {
        return {
            brent: { price: 85.30, change: '+1.2', timestamp: new Date() },
            wti: { price: 78.45, change: '+0.8', timestamp: new Date() }
        };
    }

    getDemoSecurityAlerts(straitId) {
        return [
            {
                title: `Increased naval activity near ${this.getStraitName(straitId)}`,
                description: 'Regional powers conducting naval exercises',
                source: 'Demo News',
                publishedAt: new Date().toISOString(),
                severity: 'medium'
            }
        ];
    }

    getDemoWeather(straitId) {
        return {
            temperature: 28,
            conditions: 'Clear',
            description: 'clear sky',
            windSpeed: 5.2,
            visibility: 10000,
            navigationRisk: 'low',
            timestamp: new Date()
        };
    }

    getStraitName(id) {
        const strait = strategicLocations.straits.find(s => s.id === id) ||
                      strategicLocations.canals.find(c => c.id === id);
        return strait?.name || 'Unknown';
    }
}

// Initialize
const liveDataEngine = new LiveDataEngine();
export default liveDataEngine;
