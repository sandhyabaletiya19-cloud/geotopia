// geotopia/encyclopedia/strategic-locations/demo-data-engine.js

class DemoDataEngine {
    constructor() {
        this.baseData = this.initializeBaseData();
        this.variance = 0.1; // 10% random variation
    }

    initializeBaseData() {
        return {
            // Realistic base ship counts (based on actual averages)
            ships: {
                'malacca': 300,
                'hormuz': 25,
                'suez': 50,
                'panama': 40,
                'bosporus': 135,
                'gibraltar': 80,
                'dover': 400
            },
            
            // Realistic oil prices (update these monthly to real averages)
            oilPrices: {
                brent: { base: 85, trend: 'stable' },
                wti: { base: 78, trend: 'stable' }
            },
            
            // Weather patterns by region
            weather: {
                'tropical': { temp: 28, wind: 5, conditions: ['Clear', 'Partly Cloudy', 'Rain'] },
                'temperate': { temp: 15, wind: 8, conditions: ['Clear', 'Cloudy', 'Rain'] },
                'arid': { temp: 32, wind: 10, conditions: ['Clear', 'Hot'] }
            }
        };
    }

    // === LIVE SHIP COUNTS (REALISTIC SIMULATION) ===
    getLiveShipCount(straitId) {
        const baseCount = this.baseData.ships[straitId] || 50;
        
        // Add time-of-day variation (more ships during business hours GMT)
        const hour = new Date().getUTCHours();
        const businessHourMultiplier = this.getBusinessHourMultiplier(hour);
        
        // Add random variance
        const variance = (Math.random() - 0.5) * 2 * this.variance;
        
        const count = Math.round(baseCount * businessHourMultiplier * (1 + variance));
        
        return {
            total: count,
            tankers: Math.round(count * 0.3),
            cargo: Math.round(count * 0.4),
            container: Math.round(count * 0.3),
            timestamp: new Date()
        };
    }

    getBusinessHourMultiplier(hour) {
        // Shipping is 24/7 but peaks during Asian/European business hours
        if (hour >= 8 && hour <= 18) return 1.2; // Peak hours
        if (hour >= 0 && hour <= 6) return 0.8;  // Night hours
        return 1.0;
    }

    // === LIVE OIL PRICES (REALISTIC SIMULATION) ===
    getLiveOilPrices() {
        const brentBase = this.baseData.oilPrices.brent.base;
        const wtiBase = this.baseData.oilPrices.wti.base;
        
        // Simulate intraday price movement
        const brentVariance = (Math.random() - 0.5) * 3; // ±$1.50
        const wtiVariance = (Math.random() - 0.5) * 3;
        
        const brent = brentBase + brentVariance;
        const wti = wtiBase + wtiVariance;
        
        // Calculate realistic change percentage
        const brentChange = ((brent - brentBase) / brentBase * 100).toFixed(2);
        const wtiChange = ((wti - wtiBase) / wtiBase * 100).toFixed(2);
        
        return {
            brent: {
                price: brent.toFixed(2),
                change: (brentChange > 0 ? '+' : '') + brentChange + '%',
                timestamp: new Date(),
                trend: brentChange > 0 ? 'up' : 'down'
            },
            wti: {
                price: wti.toFixed(2),
                change: (wtiChange > 0 ? '+' : '') + wtiChange + '%',
                timestamp: new Date(),
                trend: wtiChange > 0 ? 'up' : 'down'
            },
            message: '📊 Demo data - based on recent averages'
        };
    }

    // === SECURITY ALERTS (TEMPLATE-BASED) ===
    getSecurityAlerts(straitId) {
        const alertTemplates = {
            'malacca': [
                {
                    title: 'Routine naval patrol in Malacca Strait',
                    description: 'Singapore, Malaysia, Indonesia joint patrol ongoing',
                    severity: 'low',
                    source: 'Regional Maritime Authority'
                },
                {
                    title: 'Increased shipping traffic during monsoon season',
                    description: 'Ships advised to maintain safe distances',
                    severity: 'medium',
                    source: 'Port Authority Singapore'
                }
            ],
            'hormuz': [
                {
                    title: 'US Navy conducts freedom of navigation operation',
                    description: '5th Fleet presence in Strait of Hormuz',
                    severity: 'medium',
                    source: 'US Naval Forces Central Command'
                },
                {
                    title: 'Iran announces military exercises near strait',
                    description: 'Routine naval exercises scheduled for next week',
                    severity: 'high',
                    source: 'Iranian State Media'
                }
            ],
            'suez': [
                {
                    title: 'Increased transit times due to high traffic',
                    description: 'Average wait time: 8 hours',
                    severity: 'low',
                    source: 'Suez Canal Authority'
                }
            ]
        };

        const alerts = alertTemplates[straitId] || [{
            title: 'Normal operations',
            description: 'No significant alerts for this location',
            severity: 'low',
            source: 'Geotopia Intelligence'
        }];

        // Add realistic timestamps (within last 24 hours)
        return alerts.map(alert => ({
            ...alert,
            publishedAt: new Date(Date.now() - Math.random() * 86400000).toISOString(),
            id: Math.random().toString(36).substr(2, 9)
        }));
    }

    // === WEATHER DATA ===
    getWeather(straitId) {
        // Determine region type
        const regionTypes = {
            'malacca': 'tropical',
            'hormuz': 'arid',
            'suez': 'arid',
            'bosporus': 'temperate',
            'gibraltar': 'temperate'
        };

        const region = regionTypes[straitId] || 'temperate';
        const baseWeather = this.baseData.weather[region];

        const temp = baseWeather.temp + (Math.random() - 0.5) * 4;
        const wind = baseWeather.wind + (Math.random() - 0.5) * 3;
        const conditions = baseWeather.conditions[Math.floor(Math.random() * baseWeather.conditions.length)];

        const navigationRisk = this.assessNavigationRisk(wind, conditions);

        return {
            temperature: Math.round(temp),
            conditions: conditions,
            description: conditions.toLowerCase(),
            windSpeed: Math.round(wind * 10) / 10,
            visibility: wind < 12 ? 10000 : 5000,
            navigationRisk: navigationRisk,
            timestamp: new Date(),
            message: '🌤️ Demo weather - typical conditions for this region'
        };
    }

    assessNavigationRisk(windSpeed, conditions) {
        if (conditions === 'Rain' && windSpeed > 10) return 'medium';
        if (windSpeed > 15) return 'high';
        return 'low';
    }

    // === ECONOMIC CALCULATIONS (NO API NEEDED) ===
    calculateEconomicImpact(straitId, days) {
        const straitData = {
            'malacca': { dailyTrade: 9315068493, ships: 300, oilImpact: 10 },
            'hormuz': { dailyTrade: 3287671233, ships: 25, oilImpact: 20 },
            'suez': { dailyTrade: 2575342466, ships: 50, oilImpact: 8 },
            'panama': { dailyTrade: 904109589, ships: 40, oilImpact: 3 },
            'bosporus': { dailyTrade: 547945205, ships: 135, oilImpact: 5 }
        };

        const data = straitData[straitId] || straitData['malacca'];

        const totalLoss = data.dailyTrade * days;
        const shipsAffected = data.ships * days;
        const reroutingCost = this.calculateReroutingCost(straitId, shipsAffected);
        const oilPriceIncrease = data.oilImpact * Math.min(days, 30);

        return {
            economicLoss: this.formatCurrency(totalLoss),
            economicLossRaw: totalLoss,
            shipsAffected: shipsAffected.toLocaleString(),
            reroutingCost: this.formatCurrency(reroutingCost),
            oilPriceImpact: `+$${oilPriceIncrease}/barrel`,
            globalGDPImpact: this.formatCurrency(totalLoss * 0.001),
            timestamp: new Date()
        };
    }

    calculateReroutingCost(straitId, ships) {
        const costPerShip = {
            'malacca': 300000,
            'hormuz': 500000,
            'suez': 400000,
            'panama': 350000,
            'bosporus': 1000000
        };

        return (costPerShip[straitId] || 200000) * ships;
    }

    formatCurrency(amount) {
        if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
        if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
        if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`;
        return `$${amount.toLocaleString()}`;
    }

    // === GENERATE DEMO SHIPS FOR MAP ===
    generateDemoShips(straitId, count) {
        const ships = [];
        const coordinates = this.getStraitBounds(straitId);

        for (let i = 0; i < count; i++) {
            ships.push({
                id: `DEMO-${straitId}-${i}`,
                name: this.generateShipName(),
                type: this.getRandomShipType(),
                lat: this.randomInRange(coordinates.latMin, coordinates.latMax),
                lon: this.randomInRange(coordinates.lonMin, coordinates.lonMax),
                speed: Math.random() * 20 + 5,
                course: Math.random() * 360,
                flag: this.getRandomFlag(),
                cargoType: this.getRandomCargoType(),
                estimatedValue: Math.random() * 100000000 + 10000000
            });
        }

        return ships;
    }

    getStraitBounds(straitId) {
        const bounds = {
            'malacca': { latMin: 1.0, latMax: 4.0, lonMin: 100.0, lonMax: 104.0 },
            'hormuz': { latMin: 25.0, latMax: 27.5, lonMin: 55.0, lonMax: 57.5 },
            'suez': { latMin: 29.5, latMax: 31.5, lonMin: 32.0, lonMax: 33.0 },
            'panama': { latMin: 8.5, latMax: 9.5, lonMin: -80.0, lonMax: -79.0 },
            'bosporus': { latMin: 40.9, latMax: 41.3, lonMin: 28.9, lonMax: 29.2 }
        };
        return bounds[straitId] || bounds['malacca'];
    }

    generateShipName() {
        const prefixes = ['MV', 'MT', 'MSC', 'COSCO', 'MAERSK'];
        const names = ['Pacific', 'Atlantic', 'Fortune', 'Victory', 'Enterprise', 'Horizon', 'Pioneer'];
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${names[Math.floor(Math.random() * names.length)]} ${Math.floor(Math.random() * 1000)}`;
    }

    getRandomShipType() {
        const types = ['Tanker', 'Container Ship', 'Bulk Carrier', 'Cargo'];
        return types[Math.floor(Math.random() * types.length)];
    }

    getRandomFlag() {
        const flags = ['China', 'Singapore', 'Japan', 'South Korea', 'USA', 'UK', 'Greece', 'Panama', 'Liberia'];
        return flags[Math.floor(Math.random() * flags.length)];
    }

    getRandomCargoType() {
        const types = ['Oil/Gas', 'Containers', 'Bulk Cargo', 'General Cargo'];
        return types[Math.floor(Math.random() * types.length)];
    }

    randomInRange(min, max) {
        return min + Math.random() * (max - min);
    }
}

// Initialize
const demoDataEngine = new DemoDataEngine();
export default demoDataEngine;
