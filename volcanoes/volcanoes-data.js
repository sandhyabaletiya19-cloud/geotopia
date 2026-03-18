/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data Combiner
   ═══════════════════════════════════════════════════════════
   
   This file combines all volcano data from the separate data files
   (volcanoes-data-1.js through volcanoes-data-5.js) into a single
   array for use by the application.
   
   ═══════════════════════════════════════════════════════════ */

(function() {
    'use strict';

    /**
     * Combine all volcano data arrays into one
     * Each data file exposes its data as:
     * - window.volcanoesData1 (Volcanoes 1-10)
     * - window.volcanoesData2 (Volcanoes 11-20)
     * - window.volcanoesData3 (Volcanoes 21-30)
     * - window.volcanoesData4 (Volcanoes 31-40)
     * - window.volcanoesData5 (Volcanoes 41-50)
     */

    // Wait for all data files to load
    function combineData() {
        const data1 = window.volcanoesData1 || [];
        const data2 = window.volcanoesData2 || [];
        const data3 = window.volcanoesData3 || [];
        const data4 = window.volcanoesData4 || [];
        const data5 = window.volcanoesData5 || [];

        // Combine all arrays
        const allVolcanoes = [
            ...data1,
            ...data2,
            ...data3,
            ...data4,
            ...data5
        ];

        // Sort by elevation (highest first) - this is the default order
        allVolcanoes.sort((a, b) => b.elevation - a.elevation);

        // Validate data
        const validVolcanoes = allVolcanoes.filter(volcano => {
            if (!volcano.id || !volcano.name || !volcano.elevation) {
                console.warn('Invalid volcano data:', volcano);
                return false;
            }
            return true;
        });

        // Log stats
        console.log(`🌋 Volcanoes Explorer: Loaded ${validVolcanoes.length} volcanoes`);
        console.log(`   - Active: ${validVolcanoes.filter(v => v.status === 'active').length}`);
        console.log(`   - Dormant: ${validVolcanoes.filter(v => v.status === 'dormant').length}`);
        console.log(`   - Extinct: ${validVolcanoes.filter(v => v.status === 'extinct').length}`);
        console.log(`   - Highest: ${validVolcanoes[0]?.name} (${validVolcanoes[0]?.elevation}m)`);

        return validVolcanoes;
    }

    // Check if all data files are loaded
    function checkDataLoaded() {
        return (
            typeof window.volcanoesData1 !== 'undefined' &&
            typeof window.volcanoesData2 !== 'undefined' &&
            typeof window.volcanoesData3 !== 'undefined' &&
            typeof window.volcanoesData4 !== 'undefined' &&
            typeof window.volcanoesData5 !== 'undefined'
        );
    }

    // Initialize data
    function initData() {
        if (checkDataLoaded()) {
            window.volcanoesData = combineData();
        } else {
            // Retry after a short delay
            setTimeout(initData, 50);
        }
    }

    // Start initialization
    initData();

    /**
     * Helper function to get a volcano by ID
     * @param {string} id - Volcano ID
     * @returns {Object|null} Volcano object or null if not found
     */
    window.getVolcanoById = function(id) {
        if (!window.volcanoesData) return null;
        return window.volcanoesData.find(v => v.id === id) || null;
    };

    /**
     * Helper function to get volcanoes by status
     * @param {string} status - 'active', 'dormant', or 'extinct'
     * @returns {Array} Array of volcanoes with that status
     */
    window.getVolcanoesByStatus = function(status) {
        if (!window.volcanoesData) return [];
        return window.volcanoesData.filter(v => v.status === status);
    };

    /**
     * Helper function to get volcanoes by type
     * @param {string} type - Volcano type (e.g., 'Stratovolcano', 'Shield Volcano')
     * @returns {Array} Array of volcanoes of that type
     */
    window.getVolcanoesByType = function(type) {
        if (!window.volcanoesData) return [];
        return window.volcanoesData.filter(v => 
            v.volcanoType.toLowerCase().includes(type.toLowerCase())
        );
    };

    /**
     * Helper function to get volcanoes by country
     * @param {string} countryCode - ISO country code (e.g., 'US', 'JP')
     * @returns {Array} Array of volcanoes in that country
     */
    window.getVolcanoesByCountry = function(countryCode) {
        if (!window.volcanoesData) return [];
        return window.volcanoesData.filter(v => 
            v.countries.some(c => c.code === countryCode.toUpperCase())
        );
    };

    /**
     * Helper function to get volcanoes by continent
     * @param {string} continent - Continent name
     * @returns {Array} Array of volcanoes on that continent
     */
    window.getVolcanoesByContinent = function(continent) {
        if (!window.volcanoesData) return [];
        return window.volcanoesData.filter(v => 
            v.continent.toLowerCase() === continent.toLowerCase()
        );
    };

    /**
     * Helper function to get nearby volcanoes
     * @param {string} volcanoId - ID of the reference volcano
     * @param {number} maxDistance - Maximum distance in degrees (approx. 111km per degree)
     * @returns {Array} Array of nearby volcanoes sorted by distance
     */
    window.getNearbyVolcanoes = function(volcanoId, maxDistance = 5) {
        if (!window.volcanoesData) return [];
        
        const volcano = window.getVolcanoById(volcanoId);
        if (!volcano) return [];

        return window.volcanoesData
            .filter(v => v.id !== volcanoId)
            .map(v => {
                const distance = Math.sqrt(
                    Math.pow(v.coordinates[0] - volcano.coordinates[0], 2) +
                    Math.pow(v.coordinates[1] - volcano.coordinates[1], 2)
                );
                return { ...v, distance };
            })
            .filter(v => v.distance <= maxDistance)
            .sort((a, b) => a.distance - b.distance);
    };

    /**
     * Helper function to get Ring of Fire volcanoes
     * @returns {Array} Array of volcanoes on the Ring of Fire
     */
    window.getRingOfFireVolcanoes = function() {
        if (!window.volcanoesData) return [];
        
        const ringOfFireCountries = ['JP', 'PH', 'ID', 'CL', 'PE', 'EC', 'CO', 'MX', 'US', 'RU', 'NZ', 'PG', 'GT', 'CR', 'NI', 'SV'];
        
        return window.volcanoesData.filter(v => {
            // Check if in Ring of Fire country
            const inRofCountry = v.countries.some(c => ringOfFireCountries.includes(c.code));
            
            // Also check volcanic belt
            const inPacificBelt = v.tectonicSetting?.volcanicBelt?.toLowerCase().includes('pacific') ||
                                  v.tectonicSetting?.volcanicBelt?.toLowerCase().includes('ring of fire');
            
            return inRofCountry || inPacificBelt;
        });
    };

    /**
     * Helper function to get statistics
     * @returns {Object} Statistics object
     */
    window.getVolcanoStats = function() {
        if (!window.volcanoesData) return null;

        const volcanoes = window.volcanoesData;
        
        return {
            total: volcanoes.length,
            active: volcanoes.filter(v => v.status === 'active').length,
            dormant: volcanoes.filter(v => v.status === 'dormant').length,
            extinct: volcanoes.filter(v => v.status === 'extinct').length,
            countries: [...new Set(volcanoes.flatMap(v => v.countries.map(c => c.code)))].length,
            highestElevation: Math.max(...volcanoes.map(v => v.elevation)),
            highestVolcano: volcanoes.reduce((max, v) => v.elevation > max.elevation ? v : max, volcanoes[0]),
            byType: {
                stratovolcano: volcanoes.filter(v => v.volcanoType.toLowerCase().includes('stratovolcano')).length,
                shield: volcanoes.filter(v => v.volcanoType.toLowerCase().includes('shield')).length,
                caldera: volcanoes.filter(v => v.volcanoType.toLowerCase().includes('caldera')).length,
                complex: volcanoes.filter(v => v.volcanoType.toLowerCase().includes('complex')).length
            },
            byContinent: {
                asia: volcanoes.filter(v => v.continent === 'Asia').length,
                northAmerica: volcanoes.filter(v => v.continent === 'North America').length,
                southAmerica: volcanoes.filter(v => v.continent === 'South America').length,
                europe: volcanoes.filter(v => v.continent === 'Europe').length,
                africa: volcanoes.filter(v => v.continent === 'Africa').length,
                oceania: volcanoes.filter(v => v.continent === 'Oceania').length,
                antarctica: volcanoes.filter(v => v.continent === 'Antarctica').length
            }
        };
    };

    /**
     * Helper function to search volcanoes
     * @param {string} query - Search query
     * @returns {Array} Array of matching volcanoes
     */
    window.searchVolcanoes = function(query) {
        if (!window.volcanoesData || !query) return [];
        
        const searchTerm = query.toLowerCase().trim();
        
        return window.volcanoesData.filter(v => {
            // Search in name
            if (v.name.toLowerCase().includes(searchTerm)) return true;
            
            // Search in native name
            if (v.nativeName?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in countries
            if (v.countries.some(c => c.name.toLowerCase().includes(searchTerm))) return true;
            
            // Search in region
            if (v.region?.toLowerCase().includes(searchTerm)) return true;
            
            // Search in type
            if (v.volcanoType.toLowerCase().includes(searchTerm)) return true;
            
            // Search in volcanic belt
            if (v.tectonicSetting?.volcanicBelt?.toLowerCase().includes(searchTerm)) return true;
            
            return false;
        });
    };

})();
