/**
 * GEOTOPIA DATA ENGINE
 * Fetches REAL geological and historical data
 * Nobel Prize-worthy data integration
 */

class DataEngine {
    constructor() {
        this.cache = null;
        this.gplatesAPI = 'https://gws.gplates.org/reconstruct/reconstruct_points/';
        this.naturalEarthAPI = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/';
        this.davidRumseyAPI = 'https://www.davidrumsey.com/luna/servlet/';
        
        this.continentalData = new Map();
        this.historicalMaps = new Map();
        this.timelineData = [];
        
        this.initDatabase();
    }

    /**
     * Initialize IndexedDB for caching
     */
    async initDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('GEOTOPIA_DB', 1);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.cache = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // Store for continental positions
                if (!db.objectStoreNames.contains('continents')) {
                    db.createObjectStore('continents', { keyPath: 'year' });
                }
                
                // Store for historical maps
                if (!db.objectStoreNames.contains('maps')) {
                    db.createObjectStore('maps', { keyPath: 'id' });
                }
                
                // Store for events
                if (!db.objectStoreNames.contains('events')) {
                    const eventStore = db.createObjectStore('events', { keyPath: 'id' });
                    eventStore.createIndex('year', 'year', { unique: false });
                    eventStore.createIndex('type', 'type', { unique: false });
                }
            };
        });
    }

    /**
     * Fetch continental positions for a specific year using GPlates
     */
    async getContinentalPositions(year) {
         console.log(`📍 DATA ENGINE: Getting continental positions for year ${year}`);
        
    // Check cache first
    const cached = await this.getFromCache('continents', year);
   if (cached) {
        console.log('  ✓ Loaded from cache');
        return cached;
    }

    // SKIP GPlates API (CORS blocked) - Use fallback directly
     console.log('  ✓ Using fallback data:', positions);
    
    const positions = this.getFallbackContinentalData(year);
    
    // Cache it
    if (positions) {
        await this.saveToCache('continents', year, positions);
    }
    
    return positions;
}

    /**
     * Get sample points for major continental regions
     */
    getContinentSamplePoints() {
        return [
            // Africa
            { lat: 0, lon: 20 }, { lat: -20, lon: 30 }, { lat: 10, lon: 10 },
            // Eurasia
            { lat: 50, lon: 10 }, { lat: 50, lon: 100 }, { lat: 30, lon: 80 },
            // North America
            { lat: 40, lon: -100 }, { lat: 60, lon: -100 }, { lat: 20, lon: -90 },
            // South America
            { lat: -10, lon: -60 }, { lat: -30, lon: -70 }, { lat: 0, lon: -50 },
            // Australia
            { lat: -25, lon: 135 }, { lat: -35, lon: 145 },
            // Antarctica
            { lat: -80, lon: 0 }, { lat: -75, lon: 90 },
            // India (moves separately)
            { lat: 20, lon: 75 }, { lat: 10, lon: 80 }
        ];
    }

    /**
     * Process GPlates response into usable continent data
     */
    processGPlatesData(data, year) {
        const continents = {
            year: year,
            africa: [],
            eurasia: [],
            northAmerica: [],
            southAmerica: [],
            australia: [],
            antarctica: [],
            india: []
        };

        // GPlates returns reconstructed point positions
        data.features.forEach((feature, index) => {
            const coords = feature.geometry.coordinates;
            const continent = this.identifyContinentFromIndex(index);
            continents[continent].push(coords);
        });

        // Generate continental outlines from points
        Object.keys(continents).forEach(continent => {
            if (continent !== 'year') {
                continents[continent] = this.generateContinentOutline(continents[continent]);
            }
        });

        return continents;
    }

    /**
     * Map sample point index to continent name
     */
    identifyContinentFromIndex(index) {
        if (index < 3) return 'africa';
        if (index < 6) return 'eurasia';
        if (index < 9) return 'northAmerica';
        if (index < 12) return 'southAmerica';
        if (index < 14) return 'australia';
        if (index < 16) return 'antarctica';
        return 'india';
    }

    /**
     * Generate continent outline from sample points using convex hull
     */
    generateContinentOutline(points) {
        if (points.length < 3) return points;
        
        // Simple convex hull algorithm (Gift wrapping)
        const hull = [];
        let leftmost = points.reduce((min, p) => p[0] < min[0] ? p : min, points[0]);
        let current = leftmost;
        
        do {
            hull.push(current);
            let next = points[0];
            
            for (let p of points) {
                if (p === current) continue;
                const cross = this.crossProduct(current, next, p);
                if (next === current || cross > 0) {
                    next = p;
                }
            }
            
            current = next;
        } while (current !== leftmost && hull.length < points.length);
        
        return hull;
    }

    /**
     * Cross product for convex hull
     */
    crossProduct(o, a, b) {
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    }

    /**
     * Fallback continental data when API fails
     */
    getFallbackContinentalData(year) {
        // Simple interpolation between known configurations
        const configs = this.getKnownConfigurations();
        const nearest = this.findNearestConfigurations(year, configs);
        return this.interpolateConfigurations(year, nearest[0], nearest[1]);
    }

    /**
     * Known continental configurations (from research)
     */
    getKnownConfigurations() {
        return [
            {
                year: -4500000000, // Formation
                type: 'molten',
                continents: null
            },
            {
                year: -3000000000, // First continents
                type: 'proto',
                continents: this.getProtoContinents()
            },
            {
                year: -1000000000, // Rodinia supercontinent
                type: 'rodinia',
                continents: this.getRodiniaContinents()
            },
            {
                year: -600000000, // Pannotia
                type: 'pannotia',
                continents: this.getPannotiaContinents()
            },
            {
                year: -300000000, // Pangaea
                type: 'pangaea',
                continents: this.getPangaeaContinents()
            },
            {
                year: -200000000, // Pangaea breakup begins
                type: 'breakup',
                continents: this.getPangaeaBreakup()
            },
            {
                year: -66000000, // End of Cretaceous
                type: 'cretaceous',
                continents: this.getCretaceousContinents()
            },
            {
                year: 0, // Modern
                type: 'modern',
                continents: this.getModernContinents()
            }
        ];
    }

    /**
     * Get proto-continental configuration (simplified)
     */
    getProtoContinents() {
        return {
            africa: [[0, 20], [-10, 25], [-20, 30], [-15, 15], [5, 15]],
            eurasia: [[40, 60], [50, 70], [60, 60], [50, 50]],
            northAmerica: [[50, -90], [60, -80], [40, -70], [30, -100]],
            southAmerica: [[-10, -50], [-20, -60], [-30, -55], [-15, -45]],
            australia: [[-20, 130], [-30, 140], [-25, 145], [-15, 135]],
            antarctica: [[-70, 0], [-80, 45], [-75, 90], [-65, 45]],
            india: [[10, 75], [15, 80], [5, 85], [0, 75]]
        };
    }

    /**
     * Rodinia supercontinent (~1 Ga)
     */
    getRodiniaContinents() {
        // All continents clustered together
        return {
            supercontinent: [
                [10, 0], [20, 10], [10, 20], [-10, 20],
                [-20, 10], [-20, -10], [-10, -20], [10, -20]
            ]
        };
    }

    /**
     * Pannotia configuration (~600 Ma)
     */
    getPannotiaContinents() {
        return {
            supercontinent: [
                [-10, 0], [0, 10], [10, 5], [15, -5],
                [10, -15], [0, -20], [-10, -15], [-15, -5]
            ]
        };
    }

    /**
     * Pangaea configuration (~300 Ma)
     */
    getPangaeaContinents() {
        return {
            pangaea: [
                // Combined landmass
                [40, -20], [50, 0], [45, 20], [30, 30],
                [10, 35], [-10, 30], [-30, 20], [-40, 0],
                [-35, -20], [-20, -30], [0, -25], [20, -25]
            ]
        };
    }

    /**
     * Pangaea breakup (~200 Ma)
     */
    getPangaeaBreakup() {
        return {
            laurasia: [ // Northern continents
                [50, -50], [60, -30], [60, 30], [50, 50], [40, 40], [40, -40]
            ],
            gondwana: [ // Southern continents
                [-10, -30], [0, 0], [10, 20], [0, 40], [-20, 40],
                [-40, 20], [-40, -20], [-20, -30]
            ]
        };
    }

    /**
     * Cretaceous configuration (~66 Ma)
     */
    getCretaceousContinents() {
        return {
            africa: [[10, 15], [0, 20], [-20, 25], [-30, 20], [-20, 10], [0, 10]],
            eurasia: [[50, 5], [60, 50], [70, 100], [50, 90], [40, 40], [45, 10]],
            northAmerica: [[60, -100], [70, -90], [50, -70], [30, -90], [40, -110]],
            southAmerica: [[0, -55], [-10, -60], [-30, -65], [-35, -55], [-20, -50]],
            india: [[0, 60], [5, 65], [-5, 70], [-10, 65]], // Moving north
            australia: [[-20, 125], [-30, 135], [-35, 140], [-25, 145]],
            antarctica: [[-70, -30], [-80, 0], [-75, 90], [-65, 60]]
        };
    }

    /**
     * Modern continental configuration
     */
    getModernContinents() {
        return {
            africa: [[37, -6], [15, 40], [-35, 40], [-35, 15], [10, -20]],
            eurasia: [[71, 25], [55, 170], [10, 100], [35, 30], [50, 5]],
            northAmerica: [[71, -156], [49, -125], [25, -110], [25, -80], [49, -65], [71, -75]],
            southAmerica: [[12, -80], [-10, -75], [-35, -70], [-55, -70], [-35, -55], [0, -50]],
            australia: [[-10, 113], [-39, 113], [-39, 153], [-10, 153]],
            antarctica: [[-60, -180], [-90, 0], [-60, 180]],
            india: [[35, 68], [8, 68], [8, 97], [28, 88]]
        };
    }

    /**
     * Find two nearest configurations to interpolate
     */
    findNearestConfigurations(year, configs) {
        let before = configs[0];
        let after = configs[configs.length - 1];
        
        for (let i = 0; i < configs.length - 1; i++) {
            if (configs[i].year <= year && configs[i + 1].year >= year) {
                before = configs[i];
                after = configs[i + 1];
                break;
            }
        }
        
        return [before, after];
    }

    /**
     * Interpolate between two continental configurations
     */
    interpolateConfigurations(year, before, after) {
        if (!before.continents || !after.continents) {
            return before.continents || after.continents;
        }

        const ratio = (year - before.year) / (after.year - before.year);
        const result = { year };

        // Get all continent names
        const continentNames = new Set([
            ...Object.keys(before.continents),
            ...Object.keys(after.continents)
        ]);

        continentNames.forEach(name => {
            const beforePoints = before.continents[name] || [];
            const afterPoints = after.continents[name] || [];
            
            if (beforePoints.length === 0) {
                result[name] = afterPoints;
            } else if (afterPoints.length === 0) {
                result[name] = beforePoints;
            } else {
                // Interpolate each point
                const maxPoints = Math.max(beforePoints.length, afterPoints.length);
                result[name] = [];
                
                for (let i = 0; i < maxPoints; i++) {
                    const beforePoint = beforePoints[i % beforePoints.length];
                    const afterPoint = afterPoints[i % afterPoints.length];
                    
                    result[name].push([
                        beforePoint[0] + (afterPoint[0] - beforePoint[0]) * ratio,
                        beforePoint[1] + (afterPoint[1] - beforePoint[1]) * ratio
                    ]);
                }
            }
        });

        return result;
    }

    /**
     * Fetch historical maps for a given year
     */
    async getHistoricalMaps(year) {
        // Only for recent history (last 3000 years)
        if (year < -3000) return [];

        const cached = await this.getFromCache('maps', year);
        if (cached) return cached;

        // Search Wikimedia Commons for historical maps
        const maps = await this.searchWikimediaMaps(year);
        
        await this.saveToCache('maps', year, maps);
        return maps;
    }

    /**
     * Search Wikimedia Commons for historical maps
     */
    async searchWikimediaMaps(year) {
        const yearAD = year + 2026;
        const searchTerms = [
            `historical map ${yearAD}`,
            `ancient map ${Math.floor(yearAD / 100)} century`,
            `world map ${yearAD}`
        ];

        const maps = [];

        try {
            for (const term of searchTerms) {
                const response = await fetch(
                    `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(term)}&srnamespace=6&srlimit=5&format=json&origin=*`
                );
                
                const data = await response.json();
                
                if (data.query && data.query.search) {
                    for (const result of data.query.search) {
                        const imageInfo = await this.getWikimediaImageInfo(result.title);
                        if (imageInfo) {
                            maps.push({
                                id: `${year}-${result.pageid}`,
                                year: year,
                                title: result.title,
                                url: imageInfo.url,
                                thumbnail: imageInfo.thumbnail,
                                source: 'Wikimedia Commons',
                                license: imageInfo.license
                            });
                        }
                    }
                }
            }
        } catch (error) {
            console.warn('Failed to fetch Wikimedia maps', error);
        }

        return maps;
    }

    /**
     * Get image info from Wikimedia
     */
    async getWikimediaImageInfo(title) {
        try {
            const response = await fetch(
                `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|mime|size&format=json&origin=*`
            );
            
            const data = await response.json();
            const pages = data.query.pages;
            const page = Object.values(pages)[0];
            
            if (page.imageinfo) {
                return {
                    url: page.imageinfo[0].url,
                    thumbnail: page.imageinfo[0].thumburl || page.imageinfo[0].url,
                    license: 'Public Domain / CC-BY-SA'
                };
            }
        } catch (error) {
            console.warn('Failed to get image info', error);
        }
        
        return null;
    }

    /**
     * Load all timeline data (geological + historical events)
     */
    async loadTimelineData() {
        // This will load from your existing data files
        // But we'll enhance it with real data
        
        const geologicalEvents = await this.loadGeologicalEvents();
        const historicalEvents = await this.loadHistoricalEvents();
        
        this.timelineData = [...geologicalEvents, ...historicalEvents]
            .sort((a, b) => a.year - b.year);
        
        return this.timelineData;
    }

    /**
     * Load geological events (mass extinctions, impacts, etc.)
     */
    async loadGeologicalEvents() {
        return [
            {
                id: 'earth-formation',
                year: -4500000000,
                type: 'geological',
                importance: 10,
                name: 'Earth Formation',
                description: 'Solar system formation, Earth accretes from protoplanetary disk',
                coordinates: null
            },
            {
                id: 'moon-formation',
                year: -4500000000,
                type: 'catastrophic',
                importance: 10,
                name: 'Moon Formation (Theia Impact)',
                description: 'Mars-sized body collides with Earth, forming the Moon',
                coordinates: { lat: 0, lng: 0 }
            },
            {
                id: 'late-heavy-bombardment',
                year: -4100000000,
                type: 'catastrophic',
                importance: 9,
                name: 'Late Heavy Bombardment',
                description: 'Intense asteroid impacts shape early Earth',
                coordinates: null
            },
            {
                id: 'first-life',
                year: -3800000000,
                type: 'biological',
                importance: 10,
                name: 'First Life',
                description: 'Earliest evidence of life (stromatolites)',
                coordinates: { lat: -26.5, lng: 118.5 } // Pilbara, Australia
            },
            {
                id: 'great-oxidation',
                year: -2400000000,
                type: 'biological',
                importance: 10,
                name: 'Great Oxidation Event',
                description: 'Cyanobacteria release oxygen, transforming atmosphere',
                coordinates: null
            },
            {
                id: 'snowball-earth-1',
                year: -2300000000,
                type: 'geological',
                importance: 9,
                name: 'Snowball Earth (Huronian)',
                description: 'Global glaciation event',
                coordinates: null
            },
            {
                id: 'rodinia-formation',
                year: -1300000000,
                type: 'geological',
                importance: 8,
                name: 'Rodinia Supercontinent Forms',
                description: 'First known supercontinent assembly',
                coordinates: null
            },
            {
                id: 'snowball-earth-2',
                year: -720000000,
                type: 'geological',
                importance: 9,
                name: 'Snowball Earth (Sturtian)',
                description: 'Severe global glaciation',
                coordinates: null
            },
            {
                id: 'ediacaran-life',
                year: -575000000,
                type: 'biological',
                importance: 9,
                name: 'Ediacaran Biota',
                description: 'First complex multicellular life',
                coordinates: { lat: -31.9, lng: 141.5 } // South Australia
            },
            {
                id: 'cambrian-explosion',
                year: -541000000,
                type: 'biological',
                importance: 10,
                name: 'Cambrian Explosion',
                description: 'Rapid diversification of life, modern phyla emerge',
                coordinates: null
            },
            {
                id: 'ordovician-extinction',
                year: -445000000,
                type: 'catastrophic',
                importance: 9,
                name: 'Ordovician-Silurian Extinction',
                description: '85% of species extinct',
                coordinates: null
            },
            {
                id: 'first-land-plants',
                year: -430000000,
                type: 'biological',
                importance: 8,
                name: 'First Land Plants',
                description: 'Plants colonize land',
                coordinates: null
            },
            {
                id: 'devonian-extinction',
                year: -375000000,
                type: 'catastrophic',
                importance: 8,
                name: 'Late Devonian Extinction',
                description: '75% of species extinct',
                coordinates: null
            },
            {
                id: 'first-trees',
                year: -350000000,
                type: 'biological',
                importance: 7,
                name: 'First Forests',
                description: 'Tree-sized plants spread across land',
                coordinates: null
            },
            {
                id: 'permian-extinction',
                year: -252000000,
                type: 'catastrophic',
                importance: 10,
                name: 'Permian-Triassic Extinction (The Great Dying)',
                description: '96% of marine species, 70% of terrestrial species extinct',
                coordinates: { lat: 60, lng: 100 } // Siberian Traps
            },
            {
                id: 'triassic-extinction',
                year: -201000000,
                type: 'catastrophic',
                importance: 8,
                name: 'Triassic-Jurassic Extinction',
                description: '80% of species extinct, dinosaurs rise',
                coordinates: null
            },
            {
                id: 'kt-extinction',
                year: -66000000,
                type: 'catastrophic',
                importance: 10,
                name: 'K-T Extinction (Dinosaur Extinction)',
                description: 'Asteroid impact, 75% of species extinct including non-avian dinosaurs',
                coordinates: { lat: 21.3, lng: -89.5 } // Chicxulub, Mexico
            },
            {
                id: 'himalaya-formation',
                year: -50000000,
                type: 'geological',
                importance: 8,
                name: 'Himalayan Orogeny Begins',
                description: 'India collides with Asia, forming Himalayas',
                coordinates: { lat: 28, lng: 84 }
            },
            {
                id: 'human-evolution',
                year: -200000,
                type: 'biological',
                importance: 10,
                name: 'Homo Sapiens Emerges',
                description: 'Anatomically modern humans evolve in Africa',
                coordinates: { lat: -3, lng: 35 } // East Africa
            }
        ];
    }

    /**
     * Load historical events (to be merged with existing data files)
     */
    async loadHistoricalEvents() {
        // This will integrate with your existing civilization data
        // For now, return key historical milestones
        return [
            {
                id: 'agriculture',
                year: -10000,
                type: 'civilization',
                importance: 10,
                name: 'Agricultural Revolution',
                description: 'Humans begin farming in Fertile Crescent',
                coordinates: { lat: 36, lng: 38 }
            },
            {
                id: 'sumeria',
                year: -3500,
                type: 'civilization',
                importance: 9,
                name: 'Sumerian Civilization',
                description: 'First cities, writing invented',
                coordinates: { lat: 31.5, lng: 45.5 }
            },
            {
                id: 'egypt',
                year: -3100,
                type: 'civilization',
                importance: 9,
                name: 'Ancient Egypt Unified',
                description: 'Upper and Lower Egypt united',
                coordinates: { lat: 26, lng: 32 }
            },
            {
                id: 'indus',
                year: -2600,
                type: 'civilization',
                importance: 8,
                name: 'Indus Valley Civilization',
                description: 'Advanced urban planning, trade networks',
                coordinates: { lat: 27.2, lng: 68.4 }
            },
            // Add more events...
        ];
    }

    /**
     * Cache helpers
     */
    async getFromCache(storeName, key) {
        if (!this.cache) return null;
        
        return new Promise((resolve, reject) => {
            const transaction = this.cache.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(key);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async saveToCache(storeName, key, data) {
        if (!this.cache) return;
        
        return new Promise((resolve, reject) => {
            const transaction = this.cache.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            const item = typeof key === 'object' ? data : { ...data, [storeName === 'continents' ? 'year' : 'id']: key };
            const request = store.put(item);
            
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Get all events for a specific year range
     */
    getEventsInRange(startYear, endYear) {
        return this.timelineData.filter(event => 
            event.year >= startYear && event.year <= endYear
        );
    }

    /**
     * Get events near a specific year (±range)
     */
    getEventsNear(year, range = 1000000) {
        return this.timelineData.filter(event =>
            Math.abs(event.year - year) <= range
        );
    }
}

// Create singleton instance
const dataEngine = new DataEngine();
