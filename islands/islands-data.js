/* ========================================
   ISLANDS EXPLORER - DATA COMBINER
   Combines all island data from separate files
======================================== */

(function() {
    'use strict';

    // ========================================
    // COMBINE ALL ISLAND DATA
    // ========================================

    /**
     * Get all islands from all data files
     * @returns {Array} Combined array of all islands
     */
    function getAllIslands() {
        const allIslands = [];

        // Collect islands from all data files (1-10)
        if (typeof islandsData1 !== 'undefined') allIslands.push(...islandsData1);
        if (typeof islandsData2 !== 'undefined') allIslands.push(...islandsData2);
        if (typeof islandsData3 !== 'undefined') allIslands.push(...islandsData3);
        if (typeof islandsData4 !== 'undefined') allIslands.push(...islandsData4);
        if (typeof islandsData5 !== 'undefined') allIslands.push(...islandsData5);
        if (typeof islandsData6 !== 'undefined') allIslands.push(...islandsData6);
        if (typeof islandsData7 !== 'undefined') allIslands.push(...islandsData7);
        if (typeof islandsData8 !== 'undefined') allIslands.push(...islandsData8);
        if (typeof islandsData9 !== 'undefined') allIslands.push(...islandsData9);
        if (typeof islandsData10 !== 'undefined') allIslands.push(...islandsData10);

        return allIslands;
    }

    /**
     * Get island by ID
     * @param {string} id - Island ID
     * @returns {Object|null} Island object or null if not found
     */
    function getIslandById(id) {
        const allIslands = getAllIslands();
        return allIslands.find(island => island.id === id) || null;
    }

    /**
     * Get islands by type
     * @param {string} type - Island type (tropical, volcanic, continental, coral)
     * @returns {Array} Array of islands matching the type
     */
    function getIslandsByType(type) {
        const allIslands = getAllIslands();
        return allIslands.filter(island => 
            island.islandType?.toLowerCase() === type.toLowerCase()
        );
    }

    /**
     * Get islands by ocean
     * @param {string} ocean - Ocean name
     * @returns {Array} Array of islands in the specified ocean
     */
    function getIslandsByOcean(ocean) {
        const allIslands = getAllIslands();
        return allIslands.filter(island => island.ocean === ocean);
    }

    /**
     * Get islands by continent/region
     * @param {string} continent - Continent name
     * @returns {Array} Array of islands in the specified continent
     */
    function getIslandsByContinent(continent) {
        const allIslands = getAllIslands();
        return allIslands.filter(island => island.continent === continent);
    }

    /**
     * Get islands by country
     * @param {string} countryName - Country name
     * @returns {Array} Array of islands belonging to the specified country
     */
    function getIslandsByCountry(countryName) {
        const allIslands = getAllIslands();
        return allIslands.filter(island => 
            island.countries.some(c => 
                c.name.toLowerCase() === countryName.toLowerCase()
            )
        );
    }

    /**
     * Search islands by query
     * @param {string} query - Search query
     * @returns {Array} Array of matching islands
     */
    function searchIslands(query) {
        if (!query || query.trim() === '') return getAllIslands();
        
        const searchTerm = query.toLowerCase().trim();
        const allIslands = getAllIslands();
        
        return allIslands.filter(island => {
            // Search in name
            if (island.name.toLowerCase().includes(searchTerm)) return true;
            
            // Search in countries
            if (island.countries.some(c => c.name.toLowerCase().includes(searchTerm))) return true;
            
            // Search in continent
            if (island.continent?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in ocean
            if (island.ocean?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in attractions
            if (island.attractions?.some(a => a.toLowerCase().includes(searchTerm))) return true;
            
            // Search in climate
            if (island.climate?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in island type
            if (island.islandType?.toLowerCase().includes(searchTerm)) return true;
            
            return false;
        });
    }

    /**
     * Get unique list of all oceans
     * @returns {Array} Array of unique ocean names
     */
    function getAllOceans() {
        const allIslands = getAllIslands();
        const oceans = new Set(allIslands.map(island => island.ocean).filter(Boolean));
        return Array.from(oceans).sort();
    }

    /**
     * Get unique list of all continents
     * @returns {Array} Array of unique continent names
     */
    function getAllContinents() {
        const allIslands = getAllIslands();
        const continents = new Set(allIslands.map(island => island.continent).filter(Boolean));
        return Array.from(continents).sort();
    }

    /**
     * Get unique list of all countries
     * @returns {Array} Array of unique country objects
     */
    function getAllCountries() {
        const allIslands = getAllIslands();
        const countriesMap = new Map();
        
        allIslands.forEach(island => {
            island.countries.forEach(country => {
                if (!countriesMap.has(country.code)) {
                    countriesMap.set(country.code, country);
                }
            });
        });
        
        return Array.from(countriesMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Get statistics about all islands
     * @returns {Object} Statistics object
     */
    function getIslandStats() {
        const allIslands = getAllIslands();
        
        const totalArea = allIslands.reduce((sum, island) => sum + (island.area || 0), 0);
        const totalPopulation = allIslands.reduce((sum, island) => sum + (island.population || 0), 0);
        
        const islandTypes = {};
        allIslands.forEach(island => {
            const type = island.islandType || 'unknown';
            islandTypes[type] = (islandTypes[type] || 0) + 1;
        });
        
        const oceanCounts = {};
        allIslands.forEach(island => {
            const ocean = island.ocean || 'unknown';
            oceanCounts[ocean] = (oceanCounts[ocean] || 0) + 1;
        });
        
        const continentCounts = {};
        allIslands.forEach(island => {
            const continent = island.continent || 'unknown';
            continentCounts[continent] = (continentCounts[continent] || 0) + 1;
        });
        
        return {
            totalIslands: allIslands.length,
            totalArea,
            totalPopulation,
            totalCountries: getAllCountries().length,
            totalOceans: getAllOceans().length,
            totalContinents: getAllContinents().length,
            islandTypes,
            oceanCounts,
            continentCounts,
            largestIsland: allIslands.reduce((max, island) => 
                (island.area || 0) > (max.area || 0) ? island : max, allIslands[0]),
            smallestIsland: allIslands.reduce((min, island) => 
                (island.area || Infinity) < (min.area || Infinity) ? island : min, allIslands[0]),
            mostPopulated: allIslands.reduce((max, island) => 
                (island.population || 0) > (max.population || 0) ? island : max, allIslands[0]),
            leastPopulated: allIslands.reduce((min, island) => 
                (island.population || Infinity) < (min.population || Infinity) ? island : min, allIslands[0])
        };
    }

    /**
     * Get related islands (same ocean or continent)
     * @param {string} islandId - Island ID to find related islands for
     * @param {number} limit - Maximum number of related islands to return
     * @returns {Array} Array of related islands
     */
    function getRelatedIslands(islandId, limit = 10) {
        const allIslands = getAllIslands();
        const island = getIslandById(islandId);
        
        if (!island) return [];
        
        return allIslands
            .filter(i => i.id !== islandId)
            .filter(i => i.ocean === island.ocean || i.continent === island.continent)
            .slice(0, limit);
    }

    /**
     * Get nearby islands based on coordinates
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude
     * @param {number} limit - Maximum number of islands to return
     * @returns {Array} Array of nearby islands sorted by distance
     */
    function getNearbyIslands(lat, lng, limit = 10) {
        const allIslands = getAllIslands();
        
        // Calculate distance using Haversine formula
        function getDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }
        
        return allIslands
            .filter(island => island.coordinates)
            .map(island => ({
                ...island,
                distance: getDistance(lat, lng, island.coordinates[0], island.coordinates[1])
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, limit);
    }

    /**
     * Sort islands by specified criteria
     * @param {Array} islands - Array of islands to sort
     * @param {string} sortBy - Sort criteria (name, area, population)
     * @param {string} order - Sort order (asc, desc)
     * @returns {Array} Sorted array of islands
     */
    function sortIslands(islands, sortBy = 'name', order = 'asc') {
        const sorted = [...islands];
        
        sorted.sort((a, b) => {
            let valueA, valueB;
            
            switch(sortBy) {
                case 'name':
                    valueA = a.name.toLowerCase();
                    valueB = b.name.toLowerCase();
                    return order === 'asc' ? 
                        valueA.localeCompare(valueB) : 
                        valueB.localeCompare(valueA);
                case 'area':
                    valueA = a.area || 0;
                    valueB = b.area || 0;
                    break;
                case 'population':
                    valueA = a.population || 0;
                    valueB = b.population || 0;
                    break;
                default:
                    return 0;
            }
            
            return order === 'asc' ? valueA - valueB : valueB - valueA;
        });
        
        return sorted;
    }

    /**
     * Filter islands by multiple criteria
     * @param {Object} filters - Filter criteria object
     * @returns {Array} Filtered array of islands
     */
    function filterIslands(filters = {}) {
        let islands = getAllIslands();
        
        // Filter by search query
        if (filters.search) {
            islands = searchIslands(filters.search);
        }
        
        // Filter by type
        if (filters.type && filters.type !== 'all') {
            islands = islands.filter(island => 
                island.islandType?.toLowerCase() === filters.type.toLowerCase()
            );
        }
        
        // Filter by ocean
        if (filters.ocean && filters.ocean !== 'all') {
            islands = islands.filter(island => island.ocean === filters.ocean);
        }
        
        // Filter by continent/region
        if (filters.continent && filters.continent !== 'all') {
            islands = islands.filter(island => island.continent === filters.continent);
        }
        
        // Filter by country
        if (filters.country && filters.country !== 'all') {
            islands = islands.filter(island => 
                island.countries.some(c => c.name === filters.country || c.code === filters.country)
            );
        }
        
        // Filter by minimum area
        if (filters.minArea) {
            islands = islands.filter(island => (island.area || 0) >= filters.minArea);
        }
        
        // Filter by maximum area
        if (filters.maxArea) {
            islands = islands.filter(island => (island.area || Infinity) <= filters.maxArea);
        }
        
        // Filter by minimum population
        if (filters.minPopulation) {
            islands = islands.filter(island => (island.population || 0) >= filters.minPopulation);
        }
        
        // Filter by maximum population
        if (filters.maxPopulation) {
            islands = islands.filter(island => (island.population || Infinity) <= filters.maxPopulation);
        }
        
        // Sort results
        if (filters.sortBy) {
            islands = sortIslands(islands, filters.sortBy, filters.sortOrder || 'asc');
        }
        
        return islands;
    }

    // ========================================
    // EXPOSE FUNCTIONS GLOBALLY
    // ========================================

    window.getAllIslands = getAllIslands;
    window.getIslandById = getIslandById;
    window.getIslandsByType = getIslandsByType;
    window.getIslandsByOcean = getIslandsByOcean;
    window.getIslandsByContinent = getIslandsByContinent;
    window.getIslandsByCountry = getIslandsByCountry;
    window.searchIslands = searchIslands;
    window.getAllOceans = getAllOceans;
    window.getAllContinents = getAllContinents;
    window.getAllCountries = getAllCountries;
    window.getIslandStats = getIslandStats;
    window.getRelatedIslands = getRelatedIslands;
    window.getNearbyIslands = getNearbyIslands;
    window.sortIslands = sortIslands;
    window.filterIslands = filterIslands;

})();
