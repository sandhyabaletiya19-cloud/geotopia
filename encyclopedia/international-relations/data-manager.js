/* =====================================================
   UNITY ATLAS - Data Manager
   Central system for handling all data operations
   ===================================================== */

class DataManager {
    constructor() {
        this.countries = COUNTRIES_DATA;
        this.organizations = ORGANIZATIONS_DATA;
        this.regions = REGIONS_DATA;
        this.cache = new Map();
        this.searchIndex = this.buildSearchIndex();
    }

    // Build search index for fast lookups
    buildSearchIndex() {
        const index = [];
        
        // Index countries
        Object.values(this.countries).forEach(country => {
            index.push({
                type: 'country',
                code: country.code,
                name: country.name,
                officialName: country.officialName,
                searchTerms: [
                    country.name.toLowerCase(),
                    country.officialName.toLowerCase(),
                    country.code.toLowerCase(),
                    country.capital.toLowerCase(),
                    country.region.toLowerCase()
                ].join(' ')
            });
        });

        // Index organizations
        Object.values(this.organizations).forEach(org => {
            index.push({
                type: 'organization',
                code: org.code,
                name: org.name,
                abbr: org.abbr,
                searchTerms: [
                    org.name.toLowerCase(),
                    org.abbr.toLowerCase()
                ].join(' ')
            });
        });

        return index;
    }

    // Get all countries
    getAllCountries() {
        return Object.values(this.countries);
    }

    // Get country by code
    getCountry(code) {
        return this.countries[code.toUpperCase()] || null;
    }

    // Get countries by region
    getCountriesByRegion(region) {
        if (region === 'all') return this.getAllCountries();
        return Object.values(this.countries).filter(c => c.region === region);
    }

    // Get country relations
    getCountryRelations(countryCode) {
        const country = this.getCountry(countryCode);
        if (!country) return [];

        return country.relations.map(relCode => {
            const relCountry = this.getCountry(relCode);
            if (!relCountry) return null;

            return {
                country: relCountry,
                relationData: this.getRelationData(countryCode, relCode)
            };
        }).filter(Boolean);
    }

    // Get bilateral relation data
    getRelationData(countryA, countryB) {
        // Generate mock relation data based on country characteristics
        const cA = this.getCountry(countryA);
        const cB = this.getCountry(countryB);
        
        if (!cA || !cB) return null;

        // Calculate relation strength based on various factors
        const sameRegion = cA.region === cB.region;
        const gdpRatio = Math.min(cA.gdp, cB.gdp) / Math.max(cA.gdp, cB.gdp);
        const sharedOrgs = cA.organizations?.filter(o => cB.organizations?.includes(o)).length || 0;

        const baseStrength = Math.random() * 3 + 5; // 5-8 base
        const regionBonus = sameRegion ? 1 : 0;
        const orgBonus = Math.min(sharedOrgs * 0.3, 1.5);

        const strength = Math.min(10, baseStrength + regionBonus + orgBonus);

        return {
            strength: Math.round(strength * 10) / 10,
            type: this.getRelationType(strength),
            established: Math.floor(Math.random() * 100) + 1920,
            tradeVolume: Math.round((cA.gdp + cB.gdp) * Math.random() * 0.1 * 10) / 10,
            sharedOrganizations: cA.organizations?.filter(o => cB.organizations?.includes(o)) || []
        };
    }

    // Get relation type based on strength
    getRelationType(strength) {
        if (strength >= 9) return "Strategic Alliance";
        if (strength >= 8) return "Strategic Partnership";
        if (strength >= 7) return "Close Partners";
        if (strength >= 6) return "Friendly Relations";
        if (strength >= 5) return "Normal Relations";
        if (strength >= 4) return "Developing Ties";
        if (strength >= 3) return "Limited Relations";
        return "Minimal Contact";
    }

    // Get all organizations
    getAllOrganizations() {
        return Object.values(this.organizations);
    }

    // Get organization by code
    getOrganization(code) {
        return this.organizations[code.toUpperCase()] || null;
    }

    // Get organizations by type
    getOrganizationsByType(type) {
        if (type === 'all') return this.getAllOrganizations();
        return Object.values(this.organizations).filter(o => o.type === type);
    }

    // Get organization members
    getOrganizationMembers(orgCode) {
        const org = this.getOrganization(orgCode);
        if (!org) return [];

        return Object.values(this.countries).filter(country => 
            country.organizations?.includes(orgCode)
        );
    }

    // Search functionality
    search(query) {
        if (!query || query.length < 2) return [];
        
        const searchTerm = query.toLowerCase();
        const results = this.searchIndex.filter(item => 
            item.searchTerms.includes(searchTerm) ||
            item.name.toLowerCase().startsWith(searchTerm) ||
            item.searchTerms.split(' ').some(term => term.startsWith(searchTerm))
        );

        return results.slice(0, 20).map(result => {
            if (result.type === 'country') {
                return {
                    ...result,
                    data: this.getCountry(result.code)
                };
            } else {
                return {
                    ...result,
                    data: this.getOrganization(result.code)
                };
            }
        });
    }

    // Get region data
    getRegion(regionCode) {
        return this.regions[regionCode] || null;
    }

    // Get all regions
    getAllRegions() {
        return Object.entries(this.regions).map(([code, data]) => ({
            code,
            ...data
        }));
    }

    // Sort countries
    sortCountries(countries, sortBy = 'name') {
        const sorted = [...countries];
        
        switch (sortBy) {
            case 'name':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'population':
                return sorted.sort((a, b) => b.population - a.population);
            case 'gdp':
                return sorted.sort((a, b) => b.gdp - a.gdp);
            case 'relations':
                return sorted.sort((a, b) => (b.relations?.length || 0) - (a.relations?.length || 0));
            default:
                return sorted;
        }
    }

    // Format numbers for display
    formatNumber(num) {
        if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toString();
    }

    // Format currency
    formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(amount * 1e9);
    }

    // Get featured relations
    getFeaturedRelations() {
        const featured = [
            { from: 'USA', to: 'CHN', highlight: 'World\'s largest trade relationship' },
            { from: 'IND', to: 'USA', highlight: 'Strategic Partnership' },
            { from: 'DEU', to: 'FRA', highlight: 'European Union cornerstone' },
            { from: 'USA', to: 'GBR', highlight: 'Special Relationship' },
            { from: 'CHN', to: 'RUS', highlight: 'Comprehensive Partnership' },
            { from: 'JPN', to: 'USA', highlight: 'Security Alliance' }
        ];

        return featured.map(rel => {
            const fromCountry = this.getCountry(rel.from);
            const toCountry = this.getCountry(rel.to);
            const relationData = this.getRelationData(rel.from, rel.to);

            return {
                from: fromCountry,
                to: toCountry,
                relation: relationData,
                highlight: rel.highlight
            };
        });
    }

    // Get global statistics
    getGlobalStats() {
        const countries = this.getAllCountries();
        
        return {
            totalCountries: countries.length,
            totalPopulation: countries.reduce((sum, c) => sum + c.population, 0),
            totalGDP: countries.reduce((sum, c) => sum + c.gdp, 0),
            totalOrganizations: Object.keys(this.organizations).length,
            totalRelations: countries.reduce((sum, c) => sum + (c.relations?.length || 0), 0) / 2
        };
    }
}

// Create global instance
const dataManager = new DataManager();
