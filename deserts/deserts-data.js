/* ==========================================
   DESERTS EXPLORER - DATA COMBINER
   Combines all desert data from separate files
   ========================================== */

// ==========================================
// COMBINE ALL DESERT DATA
// ==========================================
const DESERTS_DATA = [
    // Data from deserts-data-1.js (Deserts 1-10)
    ...(typeof DESERTS_DATA_1 !== 'undefined' ? DESERTS_DATA_1 : []),
    
    // Data from deserts-data-2.js (Deserts 11-20)
    ...(typeof DESERTS_DATA_2 !== 'undefined' ? DESERTS_DATA_2 : []),
    
    // Data from deserts-data-3.js (Deserts 21-30)
    ...(typeof DESERTS_DATA_3 !== 'undefined' ? DESERTS_DATA_3 : []),
    
    // Data from deserts-data-4.js (Deserts 31-40)
    ...(typeof DESERTS_DATA_4 !== 'undefined' ? DESERTS_DATA_4 : []),
    
    // Data from deserts-data-5.js (Deserts 41-50)
    ...(typeof DESERTS_DATA_5 !== 'undefined' ? DESERTS_DATA_5 : []),
    
    // Data from deserts-data-6.js (Deserts 51-60)
    ...(typeof DESERTS_DATA_6 !== 'undefined' ? DESERTS_DATA_6 : []),
    
    // Data from deserts-data-7.js (Deserts 61-70)
    ...(typeof DESERTS_DATA_7 !== 'undefined' ? DESERTS_DATA_7 : []),
    
    // Data from deserts-data-8.js (Deserts 71-80)
    ...(typeof DESERTS_DATA_8 !== 'undefined' ? DESERTS_DATA_8 : []),
    
    // Data from deserts-data-9.js (Deserts 81-90)
    ...(typeof DESERTS_DATA_9 !== 'undefined' ? DESERTS_DATA_9 : []),
    
    // Data from deserts-data-10.js (Deserts 91-100)
    ...(typeof DESERTS_DATA_10 !== 'undefined' ? DESERTS_DATA_10 : [])
];

// ==========================================
// DATA VALIDATION & STATISTICS
// ==========================================
const DATA_STATS = {
    totalDeserts: DESERTS_DATA.length,
    byType: {},
    byContinent: {},
    totalArea: 0,
    largestDesert: null,
    smallestDesert: null,
    uniqueCountries: new Set()
};

// Calculate statistics
DESERTS_DATA.forEach(desert => {
    // Count by type
    DATA_STATS.byType[desert.desertType] = (DATA_STATS.byType[desert.desertType] || 0) + 1;
    
    // Count by continent
    DATA_STATS.byContinent[desert.continent] = (DATA_STATS.byContinent[desert.continent] || 0) + 1;
    
    // Total area
    DATA_STATS.totalArea += desert.area || 0;
    
    // Largest desert
    if (!DATA_STATS.largestDesert || desert.area > DATA_STATS.largestDesert.area) {
        DATA_STATS.largestDesert = desert;
    }
    
    // Smallest desert
    if (!DATA_STATS.smallestDesert || desert.area < DATA_STATS.smallestDesert.area) {
        DATA_STATS.smallestDesert = desert;
    }
    
    // Unique countries
    desert.countries.forEach(country => {
        DATA_STATS.uniqueCountries.add(country.code);
    });
});

// Convert Set to count
DATA_STATS.uniqueCountriesCount = DATA_STATS.uniqueCountries.size;

// ==========================================
// HELPER FUNCTIONS FOR DATA ACCESS
// ==========================================

/**
 * Get desert by ID
 * @param {string} id - Desert ID
 * @returns {Object|null} Desert object or null
 */
function getDesertById(id) {
    return DESERTS_DATA.find(desert => desert.id === id) || null;
}

/**
 * Get deserts by type
 * @param {string} type - Desert type (hot, cold, coastal, rain-shadow)
 * @returns {Array} Array of deserts
 */
function getDesertsByType(type) {
    return DESERTS_DATA.filter(desert => desert.desertType === type);
}

/**
 * Get deserts by continent
 * @param {string} continent - Continent name
 * @returns {Array} Array of deserts
 */
function getDesertsByContinent(continent) {
    return DESERTS_DATA.filter(desert => desert.continent === continent);
}

/**
 * Get deserts by country code
 * @param {string} countryCode - ISO country code
 * @returns {Array} Array of deserts
 */
function getDesertsByCountry(countryCode) {
    return DESERTS_DATA.filter(desert => 
        desert.countries.some(c => c.code === countryCode)
    );
}

/**
 * Search deserts by query
 * @param {string} query - Search query
 * @returns {Array} Array of matching deserts
 */
function searchDeserts(query) {
    const lowerQuery = query.toLowerCase();
    return DESERTS_DATA.filter(desert => {
        const searchFields = [
            desert.name,
            desert.continent,
            ...desert.countries.map(c => c.name),
            ...(desert.features || []),
            ...(desert.wildlife || []),
            ...(desert.plants || []),
            ...(desert.peoples || [])
        ].join(' ').toLowerCase();
        
        return searchFields.includes(lowerQuery);
    });
}

/**
 * Get top N deserts by area
 * @param {number} n - Number of deserts to return
 * @returns {Array} Array of deserts sorted by area
 */
function getTopDesertsByArea(n = 10) {
    return [...DESERTS_DATA]
        .sort((a, b) => b.area - a.area)
        .slice(0, n);
}

/**
 * Get hottest deserts
 * @param {number} n - Number of deserts to return
 * @returns {Array} Array of deserts sorted by max temperature
 */
function getHottestDeserts(n = 10) {
    return [...DESERTS_DATA]
        .filter(d => d.climate && d.climate.maxRecorded)
        .sort((a, b) => {
            const tempA = parseFloat(a.climate.maxRecorded);
            const tempB = parseFloat(b.climate.maxRecorded);
            return tempB - tempA;
        })
        .slice(0, n);
}

/**
 * Get coldest deserts
 * @param {number} n - Number of deserts to return
 * @returns {Array} Array of deserts sorted by winter temperature
 */
function getColdestDeserts(n = 10) {
    return [...DESERTS_DATA]
        .filter(d => d.climate && d.climate.avgTempWinter)
        .sort((a, b) => {
            const tempA = parseFloat(a.climate.avgTempWinter);
            const tempB = parseFloat(b.climate.avgTempWinter);
            return tempA - tempB;
        })
        .slice(0, n);
}

/**
 * Get driest deserts
 * @param {number} n - Number of deserts to return
 * @returns {Array} Array of deserts sorted by rainfall
 */
function getDriestDeserts(n = 10) {
    return [...DESERTS_DATA]
        .filter(d => d.climate && d.climate.rainfall)
        .sort((a, b) => {
            const rainA = parseFloat(a.climate.rainfall.replace(/[^0-9.]/g, '')) || 0;
            const rainB = parseFloat(b.climate.rainfall.replace(/[^0-9.]/g, '')) || 0;
            return rainA - rainB;
        })
        .slice(0, n);
}

/**
 * Get random desert
 * @returns {Object} Random desert object
 */
function getRandomDesert() {
    const randomIndex = Math.floor(Math.random() * DESERTS_DATA.length);
    return DESERTS_DATA[randomIndex];
}

/**
 * Get deserts with specific feature
 * @param {string} feature - Feature to search for
 * @returns {Array} Array of deserts with that feature
 */
function getDesertsWithFeature(feature) {
    const lowerFeature = feature.toLowerCase();
    return DESERTS_DATA.filter(desert => 
        desert.features && desert.features.some(f => 
            f.toLowerCase().includes(lowerFeature)
        )
    );
}

/**
 * Get deserts with specific wildlife
 * @param {string} animal - Animal to search for
 * @returns {Array} Array of deserts with that wildlife
 */
function getDesertsWithWildlife(animal) {
    const lowerAnimal = animal.toLowerCase();
    return DESERTS_DATA.filter(desert => 
        desert.wildlife && desert.wildlife.some(w => 
            w.toLowerCase().includes(lowerAnimal)
        )
    );
}

/**
 * Get all unique features across all deserts
 * @returns {Array} Array of unique features
 */
function getAllFeatures() {
    const features = new Set();
    DESERTS_DATA.forEach(desert => {
        if (desert.features) {
            desert.features.forEach(f => features.add(f));
        }
    });
    return Array.from(features).sort();
}

/**
 * Get all unique wildlife across all deserts
 * @returns {Array} Array of unique wildlife
 */
function getAllWildlife() {
    const wildlife = new Set();
    DESERTS_DATA.forEach(desert => {
        if (desert.wildlife) {
            desert.wildlife.forEach(w => wildlife.add(w));
        }
    });
    return Array.from(wildlife).sort();
}

/**
 * Get all unique plants across all deserts
 * @returns {Array} Array of unique plants
 */
function getAllPlants() {
    const plants = new Set();
    DESERTS_DATA.forEach(desert => {
        if (desert.plants) {
            desert.plants.forEach(p => plants.add(p));
        }
    });
    return Array.from(plants).sort();
}

/**
 * Get neighboring deserts (within a certain distance)
 * @param {string} desertId - Desert ID to find neighbors for
 * @param {number} maxDistance - Maximum distance in degrees (approximate)
 * @returns {Array} Array of neighboring deserts
 */
function getNeighboringDeserts(desertId, maxDistance = 10) {
    const desert = getDesertById(desertId);
    if (!desert || !desert.coordinates) return [];
    
    return DESERTS_DATA.filter(d => {
        if (d.id === desertId || !d.coordinates) return false;
        
        const latDiff = Math.abs(d.coordinates[0] - desert.coordinates[0]);
        const lonDiff = Math.abs(d.coordinates[1] - desert.coordinates[1]);
        const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
        
        return distance <= maxDistance;
    });
}

// ==========================================
// DATA INTEGRITY CHECK
// ==========================================
function validateData() {
    const errors = [];
    const ids = new Set();
    
    DESERTS_DATA.forEach((desert, index) => {
        // Check required fields
        if (!desert.id) {
            errors.push(`Desert at index ${index} missing 'id'`);
        } else if (ids.has(desert.id)) {
            errors.push(`Duplicate desert ID: ${desert.id}`);
        } else {
            ids.add(desert.id);
        }
        
        if (!desert.name) {
            errors.push(`Desert ${desert.id || index} missing 'name'`);
        }
        
        if (!desert.countries || desert.countries.length === 0) {
            errors.push(`Desert ${desert.id || index} missing 'countries'`);
        }
        
        if (!desert.continent) {
            errors.push(`Desert ${desert.id || index} missing 'continent'`);
        }
        
        if (!desert.desertType) {
            errors.push(`Desert ${desert.id || index} missing 'desertType'`);
        }
        
        if (!desert.area || desert.area <= 0) {
            errors.push(`Desert ${desert.id || index} has invalid 'area'`);
        }
        
        if (!desert.coordinates || desert.coordinates.length !== 2) {
            errors.push(`Desert ${desert.id || index} has invalid 'coordinates'`);
        }
        
        if (!desert.image) {
            errors.push(`Desert ${desert.id || index} missing 'image'`);
        }
    });
    
    if (errors.length > 0) {
        console.warn('🏜️ Desert Data Validation Errors:');
        errors.forEach(err => console.warn(`  - ${err}`));
    } else {
        console.log('🏜️ All desert data validated successfully!');
    }
    
    return errors;
}

// Run validation in development
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    validateData();
}

// ==========================================
// EXPORT STATISTICS TO CONSOLE
// ==========================================
console.log('🏜️ Desert Data Loaded:');
console.log(`   Total Deserts: ${DATA_STATS.totalDeserts}`);
console.log(`   Total Area: ${(DATA_STATS.totalArea / 1000000).toFixed(2)} million km²`);
console.log(`   Unique Countries: ${DATA_STATS.uniqueCountriesCount}`);
console.log(`   By Type:`, DATA_STATS.byType);
console.log(`   By Continent:`, DATA_STATS.byContinent);
if (DATA_STATS.largestDesert) {
    console.log(`   Largest: ${DATA_STATS.largestDesert.name} (${DATA_STATS.largestDesert.area.toLocaleString()} km²)`);
}
if (DATA_STATS.smallestDesert) {
    console.log(`   Smallest: ${DATA_STATS.smallestDesert.name} (${DATA_STATS.smallestDesert.area.toLocaleString()} km²)`);
}
