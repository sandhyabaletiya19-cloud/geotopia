/* =====================================================
   UNITY ATLAS - Data Manager
   Handles loading, caching, and managing country data
   ===================================================== */

class DataManager {
    constructor() {
        this.cache = new Map();
        this.basePath = './countries/';
        this.loading = new Map();
        this.version = '2.0.0';
    }

    // ==================== CORE LOADING ====================

    /**
     * Load a single country's data
     * @param {string} code - ISO3 country code (e.g., 'IND', 'USA')
     * @returns {Promise<Object>} Country data object
     */
    async loadCountry(code) {
        code = code.toUpperCase();

        // Return from cache if available
        if (this.cache.has(code)) {
            return this.cache.get(code);
        }

        // If already loading, wait for it
        if (this.loading.has(code)) {
            return this.loading.get(code);
        }

        // Check if country exists in index
        if (!COUNTRIES_INDEX[code]) {
            console.error(`Country not found: ${code}`);
            return null;
        }

        // Start loading
        const loadPromise = this._fetchCountry(code);
        this.loading.set(code, loadPromise);

        try {
            const data = await loadPromise;
            this.cache.set(code, data);
            COUNTRIES_INDEX[code].loaded = true;
            return data;
        } catch (error) {
            console.error(`Failed to load country ${code}:`, error);
            return null;
        } finally {
            this.loading.delete(code);
        }
    }

    /**
     * Internal fetch method
     */
    async _fetchCountry(code) {
        const filename = COUNTRIES_INDEX[code].file;
        const response = await fetch(`${this.basePath}${filename}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }

    /**
     * Load multiple countries at once
     * @param {string[]} codes - Array of ISO3 codes
     * @returns {Promise<Object[]>} Array of country data
     */
    async loadCountries(codes) {
        const promises = codes.map(code => this.loadCountry(code));
        const results = await Promise.allSettled(promises);
        
        return results
            .filter(r => r.status === 'fulfilled' && r.value !== null)
            .map(r => r.value);
    }

    /**
     * Load all countries in a region
     * @param {string} region - Region name (e.g., 'asia', 'europe')
     * @returns {Promise<Object[]>} Array of country data
     */
    async loadRegion(region) {
        const codes = Object.entries(COUNTRIES_INDEX)
            .filter(([_, info]) => info.region === region)
            .map(([code]) => code);
        
        return this.loadCountries(codes);
    }

    /**
     * Preload essential countries (major economies, etc.)
     */
    async preloadEssential() {
        const essential = [
            'USA', 'CHN', 'IND', 'JPN', 'DEU', 'GBR', 'FRA', 'BRA', 'RUS', 'KOR',
            'AUS', 'CAN', 'ITA', 'ESP', 'MEX', 'IDN', 'SAU', 'TUR', 'ZAF', 'NGA'
        ];
        return this.loadCountries(essential);
    }

    // ==================== BILATERAL RELATIONS ====================

    /**
     * Get bilateral relationship data between two countries
     * @param {string} country1 - First country code
     * @param {string} country2 - Second country code
     * @returns {Promise<Object>} Bilateral relationship data
     */
    async getBilateralRelation(country1, country2) {
        const data1 = await this.loadCountry(country1);
        
        if (!data1 || !data1.bilateralRelations) {
            return null;
        }

        const relation = data1.bilateralRelations[country2.toUpperCase()];
        
        if (!relation) {
            // Try reverse lookup
            const data2 = await this.loadCountry(country2);
            if (data2 && data2.bilateralRelations) {
                return data2.bilateralRelations[country1.toUpperCase()];
            }
        }

        return relation;
    }

    /**
     * Get all bilateral relations for a country
     * @param {string} code - Country code
     * @returns {Promise<Object>} All bilateral relations
     */
    async getAllRelations(code) {
        const data = await this.loadCountry(code);
        return data?.bilateralRelations || {};
    }

    // ==================== SEARCH & FILTER ====================

    /**
     * Search countries by name
     * @param {string} query - Search query
     * @returns {Object[]} Matching countries from index
     */
    searchCountries(query) {
        query = query.toLowerCase();
        
        return Object.entries(COUNTRIES_INDEX)
            .filter(([code, info]) => 
                code.toLowerCase().includes(query) ||
                info.name.toLowerCase().includes(query)
            )
            .map(([code, info]) => ({ code, ...info }));
    }

    /**
     * Get countries by organization membership
     * @param {string} orgCode - Organization code (e.g., 'UN', 'NATO')
     * @returns {Promise<string[]>} Array of country codes
     */
    async getCountriesByOrganization(orgCode) {
        // This would need all countries loaded, so we use the basic info
        // In practice, you'd have an index of org memberships
        const allCodes = Object.keys(COUNTRIES_INDEX);
        const countries = await this.loadCountries(allCodes);
        
        return countries
            .filter(c => c.organizations?.includes(orgCode))
            .map(c => c.code);
    }

    /**
     * Get countries by specific criteria
     * @param {Object} criteria - Filter criteria
     * @returns {Object[]} Matching countries from index
     */
    filterCountries(criteria = {}) {
        let results = Object.entries(COUNTRIES_INDEX);

        if (criteria.region) {
            results = results.filter(([_, info]) => info.region === criteria.region);
        }

        return results.map(([code, info]) => ({ code, ...info }));
    }

    // ==================== STATISTICS ====================

    /**
     * Get loading statistics
     */
    getStats() {
        const loaded = Object.values(COUNTRIES_INDEX).filter(c => c.loaded).length;
        const total = Object.keys(COUNTRIES_INDEX).length;
        
        return {
            loaded,
            total,
            percentage: Math.round((loaded / total) * 100),
            cached: this.cache.size,
            regions: Object.keys(REGIONS_DATA).length,
            organizations: Object.keys(ORGANIZATIONS_DATA).length
        };
    }

    // ==================== CACHE MANAGEMENT ====================

    /**
     * Clear entire cache
     */
    clearCache() {
        this.cache.clear();
        Object.values(COUNTRIES_INDEX).forEach(c => c.loaded = false);
    }

    /**
     * Remove specific country from cache
     */
    removeFromCache(code) {
        this.cache.delete(code.toUpperCase());
        if (COUNTRIES_INDEX[code.toUpperCase()]) {
            COUNTRIES_INDEX[code.toUpperCase()].loaded = false;
        }
    }

    /**
     * Get cache size in bytes (approximate)
     */
    getCacheSize() {
        let size = 0;
        this.cache.forEach(data => {
            size += JSON.stringify(data).length;
        });
        return size;
    }

    // ==================== VALIDATION ====================

    /**
     * Validate country data structure
     * @param {Object} data - Country data to validate
     * @returns {Object} Validation result
     */
    validateCountryData(data) {
        const required = ['code', 'name', 'region', 'capital', 'population'];
        const missing = required.filter(field => !data[field]);
        
        const sections = [
            'geography', 'demographics', 'economy', 'government',
            'military', 'culture', 'infrastructure', 'bilateralRelations'
        ];
        const missingSections = sections.filter(s => !data[s]);

        return {
            valid: missing.length === 0,
            missingRequired: missing,
            missingSections,
            hasRelations: !!data.bilateralRelations,
            relationCount: data.bilateralRelations ? Object.keys(data.bilateralRelations).length : 0
        };
    }
}

// ==================== RELATIONSHIP DATA TEMPLATE ====================

/**
 * Template for bilateral relationship data structure
 * Use this when creating new relationship entries
 */
const BILATERAL_TEMPLATE = {
    // Section 00: Overview
    "00_overview": {
        relationshipEmoji: "🤝",
        strengthScore: 0, // 0-100
        status: "", // "Allied", "Friendly", "Neutral", "Tense", "Hostile"
        summary: "",
        keyFacts: [],
        lastUpdated: "",
        sources: []
    },

    // Section 01: Historical Background
    "01_historical_background": {
        timeline: [
            // { year: "1947", event: "", impact: "", sources: [] }
        ],
        historicalContext: "",
        turningPoints: [],
        sources: []
    },

    // Section 02: Bilateral Ties
    "02_bilateral_ties": {
        diplomaticRelations: {
            established: "",
            currentStatus: ""
        },
        embassies: {
            country1InCountry2: { address: "", ambassador: "", established: "" },
            country2InCountry1: { address: "", ambassador: "", established: "" }
        },
        consulates: [],
        stateVisits: [],
        sources: []
    },

    // Section 03: Agreements & Treaties
    "03_agreements_treaties": {
        treaties: [
            // { name: "", year: "", status: "Active/Expired/Suspended", significance: "", sources: [] }
        ],
        mous: [],
        tradeAgreements: [],
        defenseAgreements: [],
        sources: []
    },

    // Section 04: Political Relations
    "04_political_relations": {
        dialogueMechanisms: [],
        summits: [],
        convergencePoints: [],
        divergencePoints: [],
        currentIssues: [],
        sources: []
    },

    // Section 05: Economic & Trade
    "05_economic_trade": {
        tradeVolume: {
            total: 0,
            year: "",
            trend: ""
        },
        exports: {
            country1ToCountry2: { value: 0, topProducts: [], growth: 0 },
            country2ToCountry1: { value: 0, topProducts: [], growth: 0 }
        },
        tradeBalance: 0,
        fdi: {
            country1InCountry2: 0,
            country2InCountry1: 0
        },
        majorProjects: [],
        tradePotential: "",
        barriers: [],
        sources: []
    },

    // Section 06: Defense & Security
    "06_defense_security": {
        militaryComparison: {
            country1: { personnel: 0, budget: 0, ranking: 0 },
            country2: { personnel: 0, budget: 0, ranking: 0 }
        },
        defenseCooperation: [],
        jointExercises: [],
        armsDeals: [],
        borderStatus: "",
        conflicts: [],
        securityConcerns: [],
        sources: []
    },

    // Section 07: People-to-People
    "07_people_to_people": {
        visaRegime: {
            country1Citizens: "",
            country2Citizens: ""
        },
        diaspora: {
            country1InCountry2: 0,
            country2InCountry1: 0
        },
        students: {
            country1InCountry2: 0,
            country2InCountry1: 0
        },
        tourism: {
            country1ToCountry2: 0,
            country2ToCountry1: 0
        },
        culturalExchanges: [],
        sports: [],
        sources: []
    },

    // Section 08: Connectivity
    "08_connectivity": {
        airLinks: {
            directFlights: false,
            routes: [],
            airlines: []
        },
        seaLinks: [],
        landLinks: [],
        railways: [],
        digitalConnectivity: [],
        sources: []
    },

    // Section 09: Multilateral Forums
    "09_multilateral_forums": {
        commonMemberships: [],
        votingAlignment: {
            unGeneralAssembly: 0, // percentage
            securityCouncil: ""
        },
        jointPositions: [],
        divergentVotes: [],
        sources: []
    },

    // Section 10: Sectoral Cooperation
    "10_sectoral_cooperation": {
        energy: [],
        climate: [],
        science: [],
        space: [],
        health: [],
        agriculture: [],
        technology: [],
        education: [],
        sources: []
    },

    // Section 11: Third Party Influence
    "11_influence_third_parties": {
        majorInfluencers: [],
        triangleDynamics: [],
        proxyRelationships: [],
        sources: []
    },

    // Section 12: Areas of Concern
    "12_areas_of_concern": {
        disputes: [],
        frictionPoints: [],
        competitiveAreas: [],
        riskFactors: [],
        sources: []
    },

    // Section 13: Future Outlook
    "13_future_outlook": {
        shortTerm: { period: "1-2 years", scenarios: [], probability: "" },
        mediumTerm: { period: "3-5 years", scenarios: [], probability: "" },
        longTerm: { period: "5-10 years", scenarios: [], probability: "" },
        wildcards: [],
        prerequisites: [],
        sources: []
    },

    // Section 14: Peace Scenario (Imaginary)
    "14_imaginary_peace_scenario": {
        vision: "",
        quantifiedBenefits: {
            economic: [],
            social: [],
            environmental: []
        },
        roadmap: [],
        inspirationalQuote: "",
        sources: []
    },

    // Section 15: External Interventions (if applicable)
    "15_external_interventions": {
        applicable: false,
        interventions: [],
        actualOutcomes: [],
        alternativeOutcomes: [],
        regionalAutonomyScenario: "",
        sources: []
    },

    // Visualizations metadata
    "visualizations": {
        timeline: { type: "d3-timeline", dataKey: "01_historical_background.timeline" },
        tradeFlow: { type: "sankey", dataKey: "05_economic_trade" },
        comparison: { type: "radar", dataKey: "06_defense_security.militaryComparison" },
        network: { type: "force-graph", dataKey: "11_influence_third_parties" }
    }
};

// ==================== COUNTRY DATA TEMPLATE ====================

const COUNTRY_TEMPLATE = {
    // Basic Info (from your existing data)
    code: "",
    iso2: "",
    name: "",
    officialName: "",
    flag: "",
    region: "",
    subregion: "",
    capital: "",
    population: 0,
    area: 0,
    gdp: 0,
    currency: "",
    languages: [],
    colors: [],
    coordinates: { lat: 0, lng: 0 },
    relations: [],
    organizations: [],

    // Extended Sections
    geography: {
        borders: [],
        coastline: 0,
        highestPoint: { name: "", elevation: 0 },
        lowestPoint: { name: "", elevation: 0 },
        climate: "",
        terrain: "",
        naturalResources: [],
        environmentalIssues: []
    },

    demographics: {
        populationGrowth: 0,
        medianAge: 0,
        urbanization: 0,
        lifeExpectancy: 0,
        literacy: 0,
        ethnicGroups: {},
        religions: {},
        majorCities: []
    },

    economy: {
        gdpPerCapita: 0,
        gdpGrowth: 0,
        inflation: 0,
        unemployment: 0,
        sectors: {},
        majorIndustries: [],
        exports: { total: 0, partners: [], commodities: [] },
        imports: { total: 0, partners: [], commodities: [] }
    },

    government: {
        type: "",
        headOfState: "",
        headOfGovernment: "",
        legislature: "",
        independence: "",
        nationalDay: "",
        constitution: "",
        legalSystem: "",
        suffrage: ""
    },

    military: {
        branches: [],
        personnel: 0,
        reserves: 0,
        budget: 0,
        budgetPercent: 0
    },

    culture: {
        nationalSymbols: {},
        anthem: "",
        motto: "",
        unescoSites: 0,
        cuisines: []
    },

    infrastructure: {
        internetUsers: 0,
        internetPenetration: 0,
        mobileSubscriptions: 0,
        railways: 0,
        roadways: 0,
        airports: 0,
        ports: []
    },

    history: {
        timeline: [],
        notableFigures: []
    },

    education: {
        literacyRate: 0,
        topUniversities: [],
        educationBudget: 0,
        schoolingYears: 0
    },

    tourism: {
        visitors: 0,
        revenue: 0,
        topDestinations: [],
        visaPolicy: ""
    },

    // BILATERAL RELATIONS - The main feature
    bilateralRelations: {
        // Each key is another country's ISO3 code
        // "USA": { ...BILATERAL_TEMPLATE },
        // "CHN": { ...BILATERAL_TEMPLATE },
    }
};

// Create singleton instance
const dataManager = new DataManager();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataManager, dataManager, BILATERAL_TEMPLATE, COUNTRY_TEMPLATE };
}
