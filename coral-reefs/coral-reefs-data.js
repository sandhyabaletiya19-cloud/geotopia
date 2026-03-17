/* ============================================
   CORAL REEFS EXPLORER - DATA COMBINER
   Combines all reef data from data files 1-5
   ============================================ */

'use strict';

// ============================================
// COMBINE ALL REEF DATA
// ============================================
const CORAL_REEFS_DATA = (function() {
    
    // Collect data from all data files
    const allData = [];
    
    // Data file 1: Reefs 1-10
    if (typeof CORAL_REEFS_DATA_1 !== 'undefined' && Array.isArray(CORAL_REEFS_DATA_1)) {
        allData.push(...CORAL_REEFS_DATA_1);
        console.log(`✓ Loaded ${CORAL_REEFS_DATA_1.length} reefs from data file 1`);
    } else {
        console.warn('⚠ Data file 1 not loaded');
    }
    
    // Data file 2: Reefs 11-20
    if (typeof CORAL_REEFS_DATA_2 !== 'undefined' && Array.isArray(CORAL_REEFS_DATA_2)) {
        allData.push(...CORAL_REEFS_DATA_2);
        console.log(`✓ Loaded ${CORAL_REEFS_DATA_2.length} reefs from data file 2`);
    } else {
        console.warn('⚠ Data file 2 not loaded');
    }
    
    // Data file 3: Reefs 21-30
    if (typeof CORAL_REEFS_DATA_3 !== 'undefined' && Array.isArray(CORAL_REEFS_DATA_3)) {
        allData.push(...CORAL_REEFS_DATA_3);
        console.log(`✓ Loaded ${CORAL_REEFS_DATA_3.length} reefs from data file 3`);
    } else {
        console.warn('⚠ Data file 3 not loaded');
    }
    
    // Data file 4: Reefs 31-40
    if (typeof CORAL_REEFS_DATA_4 !== 'undefined' && Array.isArray(CORAL_REEFS_DATA_4)) {
        allData.push(...CORAL_REEFS_DATA_4);
        console.log(`✓ Loaded ${CORAL_REEFS_DATA_4.length} reefs from data file 4`);
    } else {
        console.warn('⚠ Data file 4 not loaded');
    }
    
    // Data file 5: Reefs 41-50
    if (typeof CORAL_REEFS_DATA_5 !== 'undefined' && Array.isArray(CORAL_REEFS_DATA_5)) {
        allData.push(...CORAL_REEFS_DATA_5);
        console.log(`✓ Loaded ${CORAL_REEFS_DATA_5.length} reefs from data file 5`);
    } else {
        console.warn('⚠ Data file 5 not loaded');
    }
    
    console.log(`🪸 Total reefs loaded: ${allData.length}`);
    
    return allData;
    
})();

// ============================================
// DATA VALIDATION & HELPERS
// ============================================
const CoralReefsDataUtils = {
    
    /**
     * Get reef by ID
     * @param {string} id - Reef ID
     * @returns {Object|null} Reef object or null
     */
    getReefById(id) {
        return CORAL_REEFS_DATA.find(reef => reef.id === id) || null;
    },
    
    /**
     * Get reefs by country
     * @param {string} countryCode - Country code (e.g., 'AU')
     * @returns {Array} Array of reefs
     */
    getReefsByCountry(countryCode) {
        return CORAL_REEFS_DATA.filter(reef => 
            reef.countries.some(c => c.code.toUpperCase() === countryCode.toUpperCase())
        );
    },
    
    /**
     * Get reefs by ocean
     * @param {string} ocean - Ocean name
     * @returns {Array} Array of reefs
     */
    getReefsByOcean(ocean) {
        return CORAL_REEFS_DATA.filter(reef => 
            reef.ocean.toLowerCase().includes(ocean.toLowerCase())
        );
    },
    
    /**
     * Get reefs by type
     * @param {string} type - Reef type (barrier, fringing, atoll, etc.)
     * @returns {Array} Array of reefs
     */
    getReefsByType(type) {
        return CORAL_REEFS_DATA.filter(reef => reef.reefType === type);
    },
    
    /**
     * Get reefs by health status
     * @param {string} status - Health status (healthy, threatened, endangered, critical)
     * @returns {Array} Array of reefs
     */
    getReefsByHealthStatus(status) {
        return CORAL_REEFS_DATA.filter(reef => reef.healthStatus === status);
    },
    
    /**
     * Get largest reefs by area
     * @param {number} count - Number of reefs to return
     * @returns {Array} Array of reefs sorted by area
     */
    getLargestReefs(count = 10) {
        return [...CORAL_REEFS_DATA]
            .sort((a, b) => (b.area || b.length || 0) - (a.area || a.length || 0))
            .slice(0, count);
    },
    
    /**
     * Get most biodiverse reefs
     * @param {number} count - Number of reefs to return
     * @returns {Array} Array of reefs sorted by biodiversity
     */
    getMostBiodiverseReefs(count = 10) {
        return [...CORAL_REEFS_DATA]
            .sort((a, b) => {
                const bioA = (a.biodiversity?.coralSpecies || 0) + (a.biodiversity?.fishSpecies || 0);
                const bioB = (b.biodiversity?.coralSpecies || 0) + (b.biodiversity?.fishSpecies || 0);
                return bioB - bioA;
            })
            .slice(0, count);
    },
    
    /**
     * Search reefs by name
     * @param {string} query - Search query
     * @returns {Array} Array of matching reefs
     */
    searchReefs(query) {
        const searchTerm = query.toLowerCase().trim();
        return CORAL_REEFS_DATA.filter(reef => 
            reef.name.toLowerCase().includes(searchTerm) ||
            reef.ocean.toLowerCase().includes(searchTerm) ||
            reef.countries.some(c => c.name.toLowerCase().includes(searchTerm))
        );
    },
    
    /**
     * Get all unique countries
     * @returns {Array} Array of unique country objects
     */
    getAllCountries() {
        const countriesMap = new Map();
        
        CORAL_REEFS_DATA.forEach(reef => {
            reef.countries.forEach(country => {
                if (!countriesMap.has(country.code)) {
                    countriesMap.set(country.code, country);
                }
            });
        });
        
        return Array.from(countriesMap.values()).sort((a, b) => 
            a.name.localeCompare(b.name)
        );
    },
    
    /**
     * Get all unique oceans
     * @returns {Array} Array of unique ocean names
     */
    getAllOceans() {
        const oceans = new Set();
        CORAL_REEFS_DATA.forEach(reef => oceans.add(reef.ocean));
        return Array.from(oceans).sort();
    },
    
    /**
     * Get statistics
     * @returns {Object} Statistics object
     */
    getStatistics() {
        const stats = {
            totalReefs: CORAL_REEFS_DATA.length,
            totalCountries: this.getAllCountries().length,
            totalArea: 0,
            totalLength: 0,
            totalCoralSpecies: 0,
            totalFishSpecies: 0,
            healthStatus: {
                healthy: 0,
                threatened: 0,
                endangered: 0,
                critical: 0
            },
            reefTypes: {
                barrier: 0,
                fringing: 0,
                atoll: 0,
                patch: 0,
                platform: 0,
                bank: 0
            }
        };
        
        CORAL_REEFS_DATA.forEach(reef => {
            stats.totalArea += reef.area || 0;
            stats.totalLength += reef.length || 0;
            stats.totalCoralSpecies += reef.biodiversity?.coralSpecies || 0;
            stats.totalFishSpecies += reef.biodiversity?.fishSpecies || 0;
            
            if (stats.healthStatus.hasOwnProperty(reef.healthStatus)) {
                stats.healthStatus[reef.healthStatus]++;
            }
            
            if (stats.reefTypes.hasOwnProperty(reef.reefType)) {
                stats.reefTypes[reef.reefType]++;
            }
        });
        
        return stats;
    },
    
    /**
     * Validate reef data structure
     * @param {Object} reef - Reef object to validate
     * @returns {Object} Validation result
     */
    validateReef(reef) {
        const errors = [];
        const warnings = [];
        
        // Required fields
        const requiredFields = ['id', 'name', 'countries', 'ocean', 'reefType', 'coordinates', 'image'];
        requiredFields.forEach(field => {
            if (!reef[field]) {
                errors.push(`Missing required field: ${field}`);
            }
        });
        
        // Validate countries array
        if (reef.countries && !Array.isArray(reef.countries)) {
            errors.push('Countries must be an array');
        } else if (reef.countries?.length === 0) {
            warnings.push('Countries array is empty');
        }
        
        // Validate coordinates
        if (reef.coordinates) {
            if (!Array.isArray(reef.coordinates) || reef.coordinates.length !== 2) {
                errors.push('Coordinates must be [lat, lng] array');
            } else {
                const [lat, lng] = reef.coordinates;
                if (lat < -90 || lat > 90) errors.push('Invalid latitude');
                if (lng < -180 || lng > 180) errors.push('Invalid longitude');
            }
        }
        
        // Validate reef type
        const validTypes = ['barrier', 'fringing', 'atoll', 'patch', 'platform', 'bank', 'ribbon'];
        if (reef.reefType && !validTypes.includes(reef.reefType)) {
            warnings.push(`Unknown reef type: ${reef.reefType}`);
        }
        
        // Validate health status
        const validStatuses = ['healthy', 'threatened', 'endangered', 'critical'];
        if (reef.healthStatus && !validStatuses.includes(reef.healthStatus)) {
            warnings.push(`Unknown health status: ${reef.healthStatus}`);
        }
        
        // Optional field warnings
        if (!reef.biodiversity) warnings.push('Missing biodiversity data');
        if (!reef.oceanConditions) warnings.push('Missing ocean conditions');
        if (!reef.diveSites) warnings.push('Missing dive sites');
        
        return {
            isValid: errors.length === 0,
            errors,
            warnings
        };
    },
    
    /**
     * Validate all reef data
     * @returns {Object} Validation report
     */
    validateAllReefs() {
        const report = {
            total: CORAL_REEFS_DATA.length,
            valid: 0,
            invalid: 0,
            issues: []
        };
        
        CORAL_REEFS_DATA.forEach((reef, index) => {
            const result = this.validateReef(reef);
            
            if (result.isValid) {
                report.valid++;
            } else {
                report.invalid++;
                report.issues.push({
                    index,
                    id: reef.id,
                    name: reef.name,
                    errors: result.errors,
                    warnings: result.warnings
                });
            }
        });
        
        return report;
    },
    
    /**
     * Get reef rank by size
     * @param {string} reefId - Reef ID
     * @returns {number} Rank (1-based)
     */
    getReefRank(reefId) {
        const sorted = [...CORAL_REEFS_DATA].sort((a, b) => 
            (b.area || b.length || 0) - (a.area || a.length || 0)
        );
        
        const index = sorted.findIndex(r => r.id === reefId);
        return index !== -1 ? index + 1 : null;
    },
    
    /**
     * Get nearby reefs
     * @param {Array} coordinates - [lat, lng] coordinates
     * @param {number} radiusKm - Search radius in km
     * @returns {Array} Array of nearby reefs
     */
    getNearbyReefs(coordinates, radiusKm = 500) {
        const [lat1, lng1] = coordinates;
        
        const getDistanceKm = (lat2, lng2) => {
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLng = (lng2 - lng1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        };
        
        return CORAL_REEFS_DATA
            .map(reef => ({
                ...reef,
                distance: getDistanceKm(reef.coordinates[0], reef.coordinates[1])
            }))
            .filter(reef => reef.distance <= radiusKm && reef.distance > 0)
            .sort((a, b) => a.distance - b.distance);
    }
};

// ============================================
// EXPORT FOR DIFFERENT ENVIRONMENTS
// ============================================

// CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CORAL_REEFS_DATA, CoralReefsDataUtils };
}

// AMD
if (typeof define === 'function' && define.amd) {
    define([], function() {
        return { CORAL_REEFS_DATA, CoralReefsDataUtils };
    });
}

// Log data summary
console.log('📊 Coral Reefs Data Summary:');
console.log(`   • Total Reefs: ${CORAL_REEFS_DATA.length}`);
console.log(`   • Countries: ${CoralReefsDataUtils.getAllCountries().length}`);
console.log(`   • Oceans: ${CoralReefsDataUtils.getAllOceans().join(', ')}`);
