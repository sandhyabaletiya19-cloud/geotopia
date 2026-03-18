/* ========================================
   FORESTS EXPLORER - MAIN DATA UTILITY FILE
   Combines all forest data and provides
   helper functions for data management
   ======================================== */

// ===== FOREST DATA AGGREGATOR =====
// This file combines all forest data from individual files
// and provides utility functions for data access

const ForestData = {
    // Store for all forests
    _forests: [],
    _initialized: false,

    // Initialize and combine all forest data
    init: function() {
        if (this._initialized) return this._forests;

        // Combine all forest data arrays
        this._forests = [
            ...(typeof forestData1 !== 'undefined' ? forestData1 : []),
            ...(typeof forestData2 !== 'undefined' ? forestData2 : []),
            ...(typeof forestData3 !== 'undefined' ? forestData3 : []),
            ...(typeof forestData4 !== 'undefined' ? forestData4 : []),
            ...(typeof forestData5 !== 'undefined' ? forestData5 : []),
            ...(typeof forestData6 !== 'undefined' ? forestData6 : []),
            ...(typeof forestData7 !== 'undefined' ? forestData7 : []),
            ...(typeof forestData8 !== 'undefined' ? forestData8 : []),
            ...(typeof forestData9 !== 'undefined' ? forestData9 : []),
            ...(typeof forestData10 !== 'undefined' ? forestData10 : [])
        ];

        // Sort by area (largest first) by default
        this._forests.sort((a, b) => b.area - a.area);

        this._initialized = true;
        console.log(`ForestData initialized with ${this._forests.length} forests`);

        return this._forests;
    },

    // Get all forests
    getAll: function() {
        if (!this._initialized) this.init();
        return [...this._forests];
    },

    // Get forest by ID
    getById: function(id) {
        if (!this._initialized) this.init();
        return this._forests.find(f => f.id === parseInt(id));
    },

    // Get forest by name (partial match)
    getByName: function(name) {
        if (!this._initialized) this.init();
        const searchTerm = name.toLowerCase();
        return this._forests.filter(f => 
            f.name.toLowerCase().includes(searchTerm)
        );
    },

    // Get forests by type
    getByType: function(type) {
        if (!this._initialized) this.init();
        const searchTerm = type.toLowerCase();
        return this._forests.filter(f => 
            f.type.toLowerCase().includes(searchTerm)
        );
    },

    // Get forests by continent
    getByContinent: function(continent) {
        if (!this._initialized) this.init();
        const searchTerm = continent.toLowerCase();
        return this._forests.filter(f => 
            f.location?.continent?.toLowerCase().includes(searchTerm)
        );
    },

    // Get forests by country
    getByCountry: function(country) {
        if (!this._initialized) this.init();
        const searchTerm = country.toLowerCase();
        return this._forests.filter(f => 
            f.location?.countries?.some(c => c.toLowerCase().includes(searchTerm)) ||
            f.region.toLowerCase().includes(searchTerm)
        );
    },

    // Get forests by area range
    getByAreaRange: function(minArea, maxArea) {
        if (!this._initialized) this.init();
        return this._forests.filter(f => 
            f.area >= minArea && f.area <= maxArea
        );
    },

    // Get largest forests
    getLargest: function(count = 10) {
        if (!this._initialized) this.init();
        return [...this._forests]
            .sort((a, b) => b.area - a.area)
            .slice(0, count);
    },

    // Get smallest forests
    getSmallest: function(count = 10) {
        if (!this._initialized) this.init();
        return [...this._forests]
            .sort((a, b) => a.area - b.area)
            .slice(0, count);
    },

    // Search forests (multi-field)
    search: function(query) {
        if (!this._initialized) this.init();
        const searchTerm = query.toLowerCase();
        
        return this._forests.filter(f => 
            f.name.toLowerCase().includes(searchTerm) ||
            f.region.toLowerCase().includes(searchTerm) ||
            f.type.toLowerCase().includes(searchTerm) ||
            f.location?.continent?.toLowerCase().includes(searchTerm) ||
            f.location?.countries?.some(c => c.toLowerCase().includes(searchTerm)) ||
            f.vegetation?.some(v => v.toLowerCase().includes(searchTerm)) ||
            f.biodiversity?.animals?.some(a => a.toLowerCase().includes(searchTerm)) ||
            f.biodiversity?.birds?.some(b => b.toLowerCase().includes(searchTerm))
        );
    },

    // Get forest rank by area
    getRank: function(forestId) {
        if (!this._initialized) this.init();
        const sorted = [...this._forests].sort((a, b) => b.area - a.area);
        const index = sorted.findIndex(f => f.id === parseInt(forestId));
        return index !== -1 ? index + 1 : null;
    },

    // Get related forests (same type or continent)
    getRelated: function(forestId, count = 5) {
        if (!this._initialized) this.init();
        const forest = this.getById(forestId);
        if (!forest) return [];

        return this._forests
            .filter(f => 
                f.id !== forest.id && 
                (f.type === forest.type || 
                 f.location?.continent === forest.location?.continent)
            )
            .slice(0, count);
    },

    // Get forests with specific animal
    getByAnimal: function(animal) {
        if (!this._initialized) this.init();
        const searchTerm = animal.toLowerCase();
        return this._forests.filter(f => 
            f.biodiversity?.animals?.some(a => a.toLowerCase().includes(searchTerm))
        );
    },

    // Get forests with specific bird
    getByBird: function(bird) {
        if (!this._initialized) this.init();
        const searchTerm = bird.toLowerCase();
        return this._forests.filter(f => 
            f.biodiversity?.birds?.some(b => b.toLowerCase().includes(searchTerm))
        );
    },

    // Get forests with specific vegetation
    getByVegetation: function(plant) {
        if (!this._initialized) this.init();
        const searchTerm = plant.toLowerCase();
        return this._forests.filter(f => 
            f.vegetation?.some(v => v.toLowerCase().includes(searchTerm))
        );
    },

    // Get total count
    getCount: function() {
        if (!this._initialized) this.init();
        return this._forests.length;
    },

    // Get total area
    getTotalArea: function() {
        if (!this._initialized) this.init();
        return this._forests.reduce((sum, f) => sum + f.area, 0);
    },

    // Get statistics
    getStats: function() {
        if (!this._initialized) this.init();
        
        const totalArea = this.getTotalArea();
        const avgArea = totalArea / this._forests.length;
        
        // Count by type
        const typeCount = {};
        this._forests.forEach(f => {
            const type = this.categorizeType(f.type);
            typeCount[type] = (typeCount[type] || 0) + 1;
        });

        // Count by continent
        const continentCount = {};
        this._forests.forEach(f => {
            const continent = f.location?.continent || 'Unknown';
            continentCount[continent] = (continentCount[continent] || 0) + 1;
        });

        return {
            totalForests: this._forests.length,
            totalArea: totalArea,
            averageArea: avgArea,
            largestForest: this._forests[0],
            smallestForest: this._forests[this._forests.length - 1],
            byType: typeCount,
            byContinent: continentCount
        };
    },

    // Categorize forest type into main categories
    categorizeType: function(type) {
        const typeLower = type.toLowerCase();
        if (typeLower.includes('tropical') && typeLower.includes('rain')) return 'Tropical Rainforest';
        if (typeLower.includes('tropical')) return 'Tropical';
        if (typeLower.includes('boreal') || typeLower.includes('taiga')) return 'Boreal';
        if (typeLower.includes('temperate') && typeLower.includes('rain')) return 'Temperate Rainforest';
        if (typeLower.includes('temperate')) return 'Temperate';
        if (typeLower.includes('mangrove')) return 'Mangrove';
        if (typeLower.includes('cloud')) return 'Cloud Forest';
        if (typeLower.includes('montane')) return 'Montane';
        if (typeLower.includes('dry')) return 'Dry Forest';
        return 'Other';
    },

    // Get all unique countries
    getAllCountries: function() {
        if (!this._initialized) this.init();
        const countries = new Set();
        this._forests.forEach(f => {
            if (f.location?.countries) {
                f.location.countries.forEach(c => countries.add(c));
            }
        });
        return Array.from(countries).sort();
    },

    // Get all unique continents
    getAllContinents: function() {
        if (!this._initialized) this.init();
        const continents = new Set();
        this._forests.forEach(f => {
            if (f.location?.continent) {
                continents.add(f.location.continent);
            }
        });
        return Array.from(continents).sort();
    },

    // Get all forest types
    getAllTypes: function() {
        if (!this._initialized) this.init();
        const types = new Set();
        this._forests.forEach(f => {
            types.add(f.type);
        });
        return Array.from(types).sort();
    },

    // Sort forests
    sort: function(forests, sortBy = 'area-desc') {
        const sorted = [...forests];
        
        switch(sortBy) {
            case 'area-desc':
                sorted.sort((a, b) => b.area - a.area);
                break;
            case 'area-asc':
                sorted.sort((a, b) => a.area - b.area);
                break;
            case 'name-asc':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'type':
                sorted.sort((a, b) => a.type.localeCompare(b.type));
                break;
            case 'continent':
                sorted.sort((a, b) => 
                    (a.location?.continent || '').localeCompare(b.location?.continent || '')
                );
                break;
            default:
                sorted.sort((a, b) => b.area - a.area);
        }
        
        return sorted;
    },

    // Filter forests by multiple criteria
    filter: function(criteria = {}) {
        if (!this._initialized) this.init();
        
        let results = [...this._forests];

        if (criteria.type) {
            const typeLower = criteria.type.toLowerCase();
            results = results.filter(f => f.type.toLowerCase().includes(typeLower));
        }

        if (criteria.continent) {
            const contLower = criteria.continent.toLowerCase();
            results = results.filter(f => 
                f.location?.continent?.toLowerCase().includes(contLower)
            );
        }

        if (criteria.country) {
            const countryLower = criteria.country.toLowerCase();
            results = results.filter(f => 
                f.location?.countries?.some(c => c.toLowerCase().includes(countryLower))
            );
        }

        if (criteria.minArea) {
            results = results.filter(f => f.area >= criteria.minArea);
        }

        if (criteria.maxArea) {
            results = results.filter(f => f.area <= criteria.maxArea);
        }

        if (criteria.search) {
            const searchLower = criteria.search.toLowerCase();
            results = results.filter(f => 
                f.name.toLowerCase().includes(searchLower) ||
                f.region.toLowerCase().includes(searchLower)
            );
        }

        return results;
    },

    // Get random forests
    getRandom: function(count = 5) {
        if (!this._initialized) this.init();
        const shuffled = [...this._forests].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    },

    // Check if forest has specific feature
    hasFeature: function(forestId, feature) {
        const forest = this.getById(forestId);
        if (!forest) return false;

        const featureLower = feature.toLowerCase();
        
        // Check various fields
        return (
            forest.type.toLowerCase().includes(featureLower) ||
            forest.vegetation?.some(v => v.toLowerCase().includes(featureLower)) ||
            forest.biodiversity?.animals?.some(a => a.toLowerCase().includes(featureLower)) ||
            forest.biodiversity?.birds?.some(b => b.toLowerCase().includes(featureLower)) ||
            forest.environmentalImportance?.some(e => e.toLowerCase().includes(featureLower))
        );
    },

    // Export data as JSON
    exportJSON: function() {
        if (!this._initialized) this.init();
        return JSON.stringify(this._forests, null, 2);
    },

    // Get forests with UNESCO status
    getUNESCOSites: function() {
        if (!this._initialized) this.init();
        return this._forests.filter(f => 
            f.environmentalImportance?.some(e => 
                e.toLowerCase().includes('unesco') || 
                e.toLowerCase().includes('world heritage')
            ) ||
            f.conservationEfforts?.some(c => 
                c.toLowerCase().includes('unesco') || 
                c.toLowerCase().includes('world heritage')
            )
        );
    },

    // Get endangered forests (based on issues)
    getEndangered: function() {
        if (!this._initialized) this.init();
        const criticalKeywords = ['critical', 'rapid', 'severe', 'major threat', '90%', '95%', '97%'];
        
        return this._forests.filter(f => 
            f.environmentalIssues?.some(issue => 
                criticalKeywords.some(keyword => 
                    issue.toLowerCase().includes(keyword)
                )
            )
        );
    }
};

// ===== FOREST TYPE DEFINITIONS =====
const ForestTypes = {
    TROPICAL_RAINFOREST: 'Tropical Rainforest',
    TEMPERATE_RAINFOREST: 'Temperate Rainforest',
    BOREAL: 'Boreal Forest',
    TEMPERATE_DECIDUOUS: 'Temperate Deciduous',
    TROPICAL_DRY: 'Tropical Dry Forest',
    MANGROVE: 'Mangrove Forest',
    CLOUD_FOREST: 'Cloud Forest',
    MONTANE: 'Montane Forest',
    SUBTROPICAL: 'Subtropical Forest',
    MEDITERRANEAN: 'Mediterranean Forest'
};

// ===== CONTINENT DEFINITIONS =====
const Continents = {
    AFRICA: 'Africa',
    ASIA: 'Asia',
    EUROPE: 'Europe',
    NORTH_AMERICA: 'North America',
    SOUTH_AMERICA: 'South America',
    OCEANIA: 'Oceania',
    ANTARCTICA: 'Antarctica'
};

// ===== AREA CATEGORIES =====
const AreaCategories = {
    MEGA: { min: 1000000, label: 'Mega Forest (1M+ km²)' },
    LARGE: { min: 100000, max: 999999, label: 'Large Forest (100K-1M km²)' },
    MEDIUM: { min: 10000, max: 99999, label: 'Medium Forest (10K-100K km²)' },
    SMALL: { min: 1000, max: 9999, label: 'Small Forest (1K-10K km²)' },
    TINY: { min: 0, max: 999, label: 'Tiny Forest (<1K km²)' }
};

// ===== BIODIVERSITY ICONS =====
const BiodiversityIcons = {
    animals: '🦁',
    birds: '🦜',
    insects: '🦋',
    reptiles: '🦎',
    amphibians: '🐸',
    fish: '🐟',
    mammals: '🐻',
    primates: '🐵'
};

// ===== FOREST ICONS BY TYPE =====
const ForestTypeIcons = {
    'tropical': '🌴',
    'temperate': '🍂',
    'boreal': '❄️',
    'mangrove': '🌊',
    'cloud': '☁️',
    'montane': '⛰️',
    'rainforest': '🌧️',
    'deciduous': '🍁',
    'coniferous': '🌲',
    'default': '🌳'
};

// ===== HELPER FUNCTIONS =====

// Format area for display
function formatForestArea(area) {
    if (area >= 1000000) {
        return (area / 1000000).toFixed(2) + ' million km²';
    } else if (area >= 1000) {
        return (area / 1000).toFixed(1) + 'K km²';
    }
    return area.toLocaleString() + ' km²';
}

// Get icon for forest type
function getForestTypeIcon(type) {
    const typeLower = type.toLowerCase();
    for (const [key, icon] of Object.entries(ForestTypeIcons)) {
        if (typeLower.includes(key)) {
            return icon;
        }
    }
    return ForestTypeIcons.default;
}

// Get short type name
function getShortTypeName(type) {
    const typeLower = type.toLowerCase();
    if (typeLower.includes('tropical') && typeLower.includes('rain')) return 'Tropical Rainforest';
    if (typeLower.includes('temperate') && typeLower.includes('rain')) return 'Temperate Rainforest';
    if (typeLower.includes('boreal') || typeLower.includes('taiga')) return 'Boreal/Taiga';
    if (typeLower.includes('mangrove')) return 'Mangrove';
    if (typeLower.includes('cloud')) return 'Cloud Forest';
    if (typeLower.includes('montane')) return 'Montane';
    if (typeLower.includes('deciduous')) return 'Deciduous';
    if (typeLower.includes('tropical')) return 'Tropical';
    if (typeLower.includes('temperate')) return 'Temperate';
    return type.split(' ').slice(0, 2).join(' ');
}

// Calculate biodiversity score (simple metric)
function calculateBiodiversityScore(forest) {
    let score = 0;
    
    if (forest.biodiversity) {
        score += (forest.biodiversity.animals?.length || 0) * 2;
        score += (forest.biodiversity.birds?.length || 0) * 1.5;
        score += (forest.biodiversity.insects?.length || 0) * 1;
    }
    
    if (forest.vegetation) {
        score += forest.vegetation.length * 0.5;
    }
    
    // Bonus for UNESCO sites
    if (forest.environmentalImportance?.some(e => 
        e.toLowerCase().includes('unesco') || 
        e.toLowerCase().includes('world heritage')
    )) {
        score *= 1.2;
    }
    
    return Math.round(score);
}

// Get conservation status
function getConservationStatus(forest) {
    const issues = forest.environmentalIssues || [];
    const efforts = forest.conservationEfforts || [];
    
    const severeIssues = issues.filter(i => 
        i.toLowerCase().includes('critical') ||
        i.toLowerCase().includes('rapid') ||
        i.toLowerCase().includes('severe')
    ).length;
    
    const strongEfforts = efforts.filter(e => 
        e.toLowerCase().includes('unesco') ||
        e.toLowerCase().includes('national park') ||
        e.toLowerCase().includes('protected')
    ).length;
    
    if (severeIssues > 2 && strongEfforts < 2) return { status: 'Critical', color: '#e74c3c' };
    if (severeIssues > 0 && strongEfforts < 3) return { status: 'Vulnerable', color: '#f39c12' };
    if (strongEfforts >= 2) return { status: 'Protected', color: '#27ae60' };
    return { status: 'Moderate', color: '#3498db' };
}

// Generate forest summary
function generateForestSummary(forest) {
    const rank = ForestData.getRank(forest.id);
    const status = getConservationStatus(forest);
    
    return {
        name: forest.name,
        rank: rank,
        area: formatForestArea(forest.area),
        type: getShortTypeName(forest.type),
        icon: getForestTypeIcon(forest.type),
        continent: forest.location?.continent || 'Unknown',
        countries: forest.location?.countries?.length || 1,
        biodiversityScore: calculateBiodiversityScore(forest),
        conservationStatus: status,
        keySpecies: [
            ...(forest.biodiversity?.animals?.slice(0, 3) || []),
            ...(forest.biodiversity?.birds?.slice(0, 2) || [])
        ],
        mainThreats: forest.environmentalIssues?.slice(0, 3) || []
    };
}

// ===== EXPORT FOR MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ForestData,
        ForestTypes,
        Continents,
        AreaCategories,
        BiodiversityIcons,
        ForestTypeIcons,
        formatForestArea,
        getForestTypeIcon,
        getShortTypeName,
        calculateBiodiversityScore,
        getConservationStatus,
        generateForestSummary
    };
}

// ===== AUTO-INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ForestData when DOM is ready
    setTimeout(() => {
        ForestData.init();
    }, 100);
});

// Log initialization
console.log('ForestData utility loaded. Call ForestData.init() to initialize.');
