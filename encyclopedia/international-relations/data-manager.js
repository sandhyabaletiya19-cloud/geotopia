/**
 * 🌍 GeoTopia - Data Manager
 * Central data loading and caching system
 * Handles 197 country JSONs + live data integration
 * 
 * @version 1.0.0
 * @license Premium
 */

class DataManager {
  constructor() {
    // Configuration
    this.config = {
      dataPath: './countries/',
      cacheExpiry: 24 * 60 * 60 * 1000, // 24 hours
      retryAttempts: 3,
      retryDelay: 1000, // 1 second
      enableCache: true,
      enableValidation: true
    };

    // Cache storage
    this.cache = {
      countries: new Map(),
      relationships: new Map(),
      metadata: new Map()
    };

    // Load state
    this.loadingState = new Map();
    
    // Error tracking
    this.errors = [];
    
    // Data sources registry
    this.dataSources = {
      official: [
        'Ministry of External Affairs',
        'U.S. Department of State',
        'UK Foreign Office',
        'China Foreign Ministry'
      ],
      international: [
        'UN Comtrade',
        'World Bank Open Data',
        'SIPRI Database',
        'IMF Data'
      ]
    };

    // Initialize
    this.init();
  }

  /**
   * Initialize data manager
   */
  async init() {
    console.log('🚀 DataManager initializing...');
    
    // Load cached data from localStorage
    if (this.config.enableCache) {
      this.loadFromLocalStorage();
    }

    // Load country index
    await this.loadCountryIndex();
    
    console.log('✅ DataManager ready');
  }

  /**
   * Load country index (list of all 197 countries)
   */
  async loadCountryIndex() {
    try {
      const index = await this.fetchJSON('./data/country-index.json');
      this.cache.metadata.set('countryIndex', {
        data: index,
        timestamp: Date.now()
      });
      return index;
    } catch (error) {
      console.warn('⚠️ Country index not found, using fallback');
      return this.getFallbackCountryList();
    }
  }

  /**
   * Get country data by code
   * @param {string} countryCode - ISO 3-letter code (e.g., 'IND', 'USA')
   * @returns {Promise<Object>} Country data
   */
  async getCountryData(countryCode) {
    const code = countryCode.toUpperCase();
    
    // Check cache first
    if (this.isCacheValid(code)) {
      console.log(`📦 Using cached data for ${code}`);
      return this.cache.countries.get(code).data;
    }

    // Check if already loading
    if (this.loadingState.get(code)) {
      console.log(`⏳ Waiting for ${code} to load...`);
      return this.loadingState.get(code);
    }

    // Load fresh data
    const loadPromise = this.loadCountryDataWithRetry(code);
    this.loadingState.set(code, loadPromise);

    try {
      const data = await loadPromise;
      this.loadingState.delete(code);
      return data;
    } catch (error) {
      this.loadingState.delete(code);
      throw error;
    }
  }

  /**
   * Load country data with retry logic
   */
  async loadCountryDataWithRetry(countryCode, attempt = 1) {
    try {
      const data = await this.fetchCountryJSON(countryCode);
      
      // Validate data
      if (this.config.enableValidation) {
        this.validateCountryData(data, countryCode);
      }

      // Cache the data
      this.cacheCountryData(countryCode, data);

      return data;
    } catch (error) {
      if (attempt < this.config.retryAttempts) {
        console.warn(`⚠️ Retry ${attempt}/${this.config.retryAttempts} for ${countryCode}`);
        await this.delay(this.config.retryDelay * attempt);
        return this.loadCountryDataWithRetry(countryCode, attempt + 1);
      } else {
        this.logError(`Failed to load ${countryCode} after ${attempt} attempts`, error);
        throw new Error(`Unable to load data for ${countryCode}`);
      }
    }
  }

  /**
   * Fetch country JSON file
   */
  async fetchCountryJSON(countryCode) {
    const url = `${this.config.dataPath}${countryCode.toLowerCase()}.json`;
    return this.fetchJSON(url);
  }

  /**
   * Generic JSON fetch with error handling
   */
  async fetchJSON(url) {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }

  /**
   * Get relationship data between two countries
   * @param {string} country1 - First country code
   * @param {string} country2 - Second country code
   * @returns {Promise<Object>} Bilateral relationship data
   */
  async getRelationshipData(country1, country2) {
    const code1 = country1.toUpperCase();
    const code2 = country2.toUpperCase();
    const cacheKey = `${code1}-${code2}`;

    // Check cache
    if (this.cache.relationships.has(cacheKey)) {
      const cached = this.cache.relationships.get(cacheKey);
      if (Date.now() - cached.timestamp < this.config.cacheExpiry) {
        return cached.data;
      }
    }

    // Load both country data
    const [data1, data2] = await Promise.all([
      this.getCountryData(code1),
      this.getCountryData(code2)
    ]);

    // Extract bilateral relationship
    const relationship = this.extractBilateralData(data1, data2, code1, code2);

    // Cache it
    this.cache.relationships.set(cacheKey, {
      data: relationship,
      timestamp: Date.now()
    });

    return relationship;
  }

  /**
   * Extract bilateral relationship from country data
   */
  extractBilateralData(data1, data2, code1, code2) {
    const rel1 = data1.relationships?.[code2];
    const rel2 = data2.relationships?.[code1];

    if (!rel1 && !rel2) {
      return {
        exists: false,
        message: `No significant bilateral relationship data available between ${code1} and ${code2}`
      };
    }

    // Merge data from both perspectives
    return {
      exists: true,
      from: {
        country: code1,
        name: data1.country_name,
        perspective: rel1 || {}
      },
      to: {
        country: code2,
        name: data2.country_name,
        perspective: rel2 || {}
      },
      // Combine and deduplicate data
      combined: this.mergeBilateralData(rel1, rel2),
      lastUpdated: new Date(Math.max(
        new Date(data1.last_updated).getTime(),
        new Date(data2.last_updated).getTime()
      )).toISOString()
    };
  }

  /**
   * Merge bilateral data from both countries' perspectives
   */
  mergeBilateralData(rel1, rel2) {
    if (!rel1) return rel2;
    if (!rel2) return rel1;

    return {
      relation_strength: (rel1.relation_strength + rel2.relation_strength) / 2,
      relation_type: rel1.relation_type || rel2.relation_type,
      
      // Merge economic data (prefer higher fidelity)
      economic: {
        trade_2025: {
          total: rel1.economic?.trade_2025?.total || rel2.economic?.trade_2025?.total,
          exports_to: rel1.economic?.trade_2025?.exports_to,
          imports_from: rel1.economic?.trade_2025?.imports_from,
          bilateral_verify: this.verifyBilateralTrade(
            rel1.economic?.trade_2025,
            rel2.economic?.trade_2025
          )
        }
      },

      // Combine other sections
      political: { ...(rel1.political || {}), ...(rel2.political || {}) },
      defense: { ...(rel1.defense || {}), ...(rel2.defense || {}) },
      cultural: { ...(rel1.cultural || {}), ...(rel2.cultural || {}) },
      
      // Merge challenges and opportunities
      challenges: [...(rel1.challenges || []), ...(rel2.challenges || [])],
      future_potential: { ...(rel1.future_potential || {}), ...(rel2.future_potential || {}) }
    };
  }

  /**
   * Verify trade data consistency
   */
  verifyBilateralTrade(trade1, trade2) {
    if (!trade1 || !trade2) return { verified: false };

    // Country A's exports should match Country B's imports
    const tolerance = 0.1; // 10% tolerance for statistical discrepancies
    
    const exportsMatch = Math.abs(
      trade1.exports_to - trade2.imports_from
    ) / trade1.exports_to < tolerance;

    return {
      verified: exportsMatch,
      discrepancy: Math.abs(trade1.exports_to - trade2.imports_from),
      note: exportsMatch 
        ? 'Data verified across sources' 
        : 'Minor statistical discrepancy (normal for different reporting periods)'
    };
  }

  /**
   * Get all countries with relationships to a specific country
   * @param {string} countryCode - Country code
   * @returns {Promise<Array>} List of related countries
   */
  async getRelatedCountries(countryCode) {
    const data = await this.getCountryData(countryCode);
    
    if (!data.relationships) {
      return [];
    }

    return Object.keys(data.relationships).map(code => ({
      code: code,
      strength: data.relationships[code].relation_strength,
      type: data.relationships[code].relation_type,
      preview: {
        trade: data.relationships[code].economic?.trade_2025?.total,
        lastEvent: data.relationships[code].last_major_event
      }
    })).sort((a, b) => b.strength - a.strength);
  }

  /**
   * Search countries by name or code
   */
  async searchCountries(query) {
    const index = this.cache.metadata.get('countryIndex')?.data || 
                  await this.loadCountryIndex();

    const searchTerm = query.toLowerCase();
    
    return index.filter(country => 
      country.name.toLowerCase().includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm) ||
      country.continent?.toLowerCase().includes(searchTerm) ||
      country.region?.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Validate country data structure
   */
  validateCountryData(data, countryCode) {
    const required = ['country_code', 'country_name', 'last_updated'];
    const missing = required.filter(field => !data[field]);

    if (missing.length > 0) {
      throw new Error(
        `Invalid data for ${countryCode}: Missing fields: ${missing.join(', ')}`
      );
    }

    // Validate date format
    if (!this.isValidDate(data.last_updated)) {
      console.warn(`⚠️ Invalid date format for ${countryCode}: ${data.last_updated}`);
    }

    // Validate relationships structure
    if (data.relationships) {
      Object.entries(data.relationships).forEach(([code, rel]) => {
        if (!rel.relation_strength || rel.relation_strength < 0 || rel.relation_strength > 10) {
          console.warn(`⚠️ Invalid relation_strength for ${countryCode}-${code}`);
        }
      });
    }

    return true;
  }

  /**
   * Cache country data
   */
  cacheCountryData(countryCode, data) {
    this.cache.countries.set(countryCode, {
      data: data,
      timestamp: Date.now()
    });

    // Persist to localStorage if enabled
    if (this.config.enableCache) {
      this.saveToLocalStorage(countryCode, data);
    }
  }

  /**
   * Check if cached data is still valid
   */
  isCacheValid(countryCode) {
    if (!this.cache.countries.has(countryCode)) return false;

    const cached = this.cache.countries.get(countryCode);
    const age = Date.now() - cached.timestamp;

    return age < this.config.cacheExpiry;
  }

  /**
   * Save to localStorage
   */
  saveToLocalStorage(countryCode, data) {
    try {
      const key = `geotopia_country_${countryCode}`;
      localStorage.setItem(key, JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.warn('⚠️ localStorage save failed:', error.message);
    }
  }

  /**
   * Load from localStorage
   */
  loadFromLocalStorage() {
    try {
      const keys = Object.keys(localStorage).filter(k => k.startsWith('geotopia_country_'));
      
      keys.forEach(key => {
        const countryCode = key.replace('geotopia_country_', '');
        const stored = JSON.parse(localStorage.getItem(key));
        
        // Check if still valid
        if (Date.now() - stored.timestamp < this.config.cacheExpiry) {
          this.cache.countries.set(countryCode, stored);
        } else {
          // Clean up expired cache
          localStorage.removeItem(key);
        }
      });

      console.log(`📦 Loaded ${keys.length} countries from cache`);
    } catch (error) {
      console.warn('⚠️ localStorage load failed:', error.message);
    }
  }

  /**
   * Clear all caches
   */
  clearCache() {
    this.cache.countries.clear();
    this.cache.relationships.clear();
    
    // Clear localStorage
    Object.keys(localStorage)
      .filter(k => k.startsWith('geotopia_'))
      .forEach(k => localStorage.removeItem(k));

    console.log('🗑️ Cache cleared');
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      countries: this.cache.countries.size,
      relationships: this.cache.relationships.size,
      metadata: this.cache.metadata.size,
      errors: this.errors.length,
      localStorageUsage: this.getLocalStorageSize()
    };
  }

  /**
   * Calculate localStorage usage
   */
  getLocalStorageSize() {
    let total = 0;
    Object.keys(localStorage)
      .filter(k => k.startsWith('geotopia_'))
      .forEach(k => {
        total += localStorage.getItem(k).length;
      });
    return `${(total / 1024).toFixed(2)} KB`;
  }

  /**
   * Preload critical countries (for faster initial experience)
   */
  async preloadCriticalCountries() {
    const critical = ['IND', 'USA', 'CHN', 'RUS', 'GBR', 'FRA', 'DEU', 'JPN'];
    
    console.log('🔄 Preloading critical countries...');
    
    const promises = critical.map(code => 
      this.getCountryData(code).catch(err => {
        console.warn(`⚠️ Failed to preload ${code}:`, err.message);
      })
    );

    await Promise.allSettled(promises);
    console.log('✅ Critical countries preloaded');
  }

  /**
   * Export data for offline use
   */
  async exportForOffline(countryCodes) {
    const data = {};
    
    for (const code of countryCodes) {
      try {
        data[code] = await this.getCountryData(code);
      } catch (error) {
        console.error(`Failed to export ${code}:`, error);
      }
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `geotopia-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Utility: Delay promise
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Utility: Validate ISO date
   */
  isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }

  /**
   * Error logging
   */
  logError(message, error) {
    const errorLog = {
      message,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    };

    this.errors.push(errorLog);
    console.error('❌', message, error);

    // Keep only last 50 errors
    if (this.errors.length > 50) {
      this.errors.shift();
    }
  }

 /**
 * Get fallback country list (ALL 197 UN-recognized countries)
 * Used when country-index.json fails to load
 */
getFallbackCountryList() {
  return [
    // AFRICA (54 countries)
    { code: 'DZA', name: 'Algeria', continent: 'Africa', region: 'Northern Africa', capital: 'Algiers' },
    { code: 'AGO', name: 'Angola', continent: 'Africa', region: 'Middle Africa', capital: 'Luanda' },
    { code: 'BEN', name: 'Benin', continent: 'Africa', region: 'Western Africa', capital: 'Porto-Novo' },
    { code: 'BWA', name: 'Botswana', continent: 'Africa', region: 'Southern Africa', capital: 'Gaborone' },
    { code: 'BFA', name: 'Burkina Faso', continent: 'Africa', region: 'Western Africa', capital: 'Ouagadougou' },
    { code: 'BDI', name: 'Burundi', continent: 'Africa', region: 'Eastern Africa', capital: 'Gitega' },
    { code: 'CPV', name: 'Cabo Verde', continent: 'Africa', region: 'Western Africa', capital: 'Praia' },
    { code: 'CMR', name: 'Cameroon', continent: 'Africa', region: 'Middle Africa', capital: 'Yaoundé' },
    { code: 'CAF', name: 'Central African Republic', continent: 'Africa', region: 'Middle Africa', capital: 'Bangui' },
    { code: 'TCD', name: 'Chad', continent: 'Africa', region: 'Middle Africa', capital: "N'Djamena" },
    { code: 'COM', name: 'Comoros', continent: 'Africa', region: 'Eastern Africa', capital: 'Moroni' },
    { code: 'COG', name: 'Congo', continent: 'Africa', region: 'Middle Africa', capital: 'Brazzaville' },
    { code: 'COD', name: 'Democratic Republic of the Congo', continent: 'Africa', region: 'Middle Africa', capital: 'Kinshasa' },
    { code: 'CIV', name: "Côte d'Ivoire", continent: 'Africa', region: 'Western Africa', capital: 'Yamoussoukro' },
    { code: 'DJI', name: 'Djibouti', continent: 'Africa', region: 'Eastern Africa', capital: 'Djibouti' },
    { code: 'EGY', name: 'Egypt', continent: 'Africa', region: 'Northern Africa', capital: 'Cairo' },
    { code: 'GNQ', name: 'Equatorial Guinea', continent: 'Africa', region: 'Middle Africa', capital: 'Malabo' },
    { code: 'ERI', name: 'Eritrea', continent: 'Africa', region: 'Eastern Africa', capital: 'Asmara' },
    { code: 'SWZ', name: 'Eswatini', continent: 'Africa', region: 'Southern Africa', capital: 'Mbabane' },
    { code: 'ETH', name: 'Ethiopia', continent: 'Africa', region: 'Eastern Africa', capital: 'Addis Ababa' },
    { code: 'GAB', name: 'Gabon', continent: 'Africa', region: 'Middle Africa', capital: 'Libreville' },
    { code: 'GMB', name: 'Gambia', continent: 'Africa', region: 'Western Africa', capital: 'Banjul' },
    { code: 'GHA', name: 'Ghana', continent: 'Africa', region: 'Western Africa', capital: 'Accra' },
    { code: 'GIN', name: 'Guinea', continent: 'Africa', region: 'Western Africa', capital: 'Conakry' },
    { code: 'GNB', name: 'Guinea-Bissau', continent: 'Africa', region: 'Western Africa', capital: 'Bissau' },
    { code: 'KEN', name: 'Kenya', continent: 'Africa', region: 'Eastern Africa', capital: 'Nairobi' },
    { code: 'LSO', name: 'Lesotho', continent: 'Africa', region: 'Southern Africa', capital: 'Maseru' },
    { code: 'LBR', name: 'Liberia', continent: 'Africa', region: 'Western Africa', capital: 'Monrovia' },
    { code: 'LBY', name: 'Libya', continent: 'Africa', region: 'Northern Africa', capital: 'Tripoli' },
    { code: 'MDG', name: 'Madagascar', continent: 'Africa', region: 'Eastern Africa', capital: 'Antananarivo' },
    { code: 'MWI', name: 'Malawi', continent: 'Africa', region: 'Eastern Africa', capital: 'Lilongwe' },
    { code: 'MLI', name: 'Mali', continent: 'Africa', region: 'Western Africa', capital: 'Bamako' },
    { code: 'MRT', name: 'Mauritania', continent: 'Africa', region: 'Western Africa', capital: 'Nouakchott' },
    { code: 'MUS', name: 'Mauritius', continent: 'Africa', region: 'Eastern Africa', capital: 'Port Louis' },
    { code: 'MAR', name: 'Morocco', continent: 'Africa', region: 'Northern Africa', capital: 'Rabat' },
    { code: 'MOZ', name: 'Mozambique', continent: 'Africa', region: 'Eastern Africa', capital: 'Maputo' },
    { code: 'NAM', name: 'Namibia', continent: 'Africa', region: 'Southern Africa', capital: 'Windhoek' },
    { code: 'NER', name: 'Niger', continent: 'Africa', region: 'Western Africa', capital: 'Niamey' },
    { code: 'NGA', name: 'Nigeria', continent: 'Africa', region: 'Western Africa', capital: 'Abuja' },
    { code: 'RWA', name: 'Rwanda', continent: 'Africa', region: 'Eastern Africa', capital: 'Kigali' },
    { code: 'STP', name: 'Sao Tome and Principe', continent: 'Africa', region: 'Middle Africa', capital: 'São Tomé' },
    { code: 'SEN', name: 'Senegal', continent: 'Africa', region: 'Western Africa', capital: 'Dakar' },
    { code: 'SYC', name: 'Seychelles', continent: 'Africa', region: 'Eastern Africa', capital: 'Victoria' },
    { code: 'SLE', name: 'Sierra Leone', continent: 'Africa', region: 'Western Africa', capital: 'Freetown' },
    { code: 'SOM', name: 'Somalia', continent: 'Africa', region: 'Eastern Africa', capital: 'Mogadishu' },
    { code: 'ZAF', name: 'South Africa', continent: 'Africa', region: 'Southern Africa', capital: 'Pretoria' },
    { code: 'SSD', name: 'South Sudan', continent: 'Africa', region: 'Eastern Africa', capital: 'Juba' },
    { code: 'SDN', name: 'Sudan', continent: 'Africa', region: 'Northern Africa', capital: 'Khartoum' },
    { code: 'TZA', name: 'Tanzania', continent: 'Africa', region: 'Eastern Africa', capital: 'Dodoma' },
    { code: 'TGO', name: 'Togo', continent: 'Africa', region: 'Western Africa', capital: 'Lomé' },
    { code: 'TUN', name: 'Tunisia', continent: 'Africa', region: 'Northern Africa', capital: 'Tunis' },
    { code: 'UGA', name: 'Uganda', continent: 'Africa', region: 'Eastern Africa', capital: 'Kampala' },
    { code: 'ZMB', name: 'Zambia', continent: 'Africa', region: 'Eastern Africa', capital: 'Lusaka' },
    { code: 'ZWE', name: 'Zimbabwe', continent: 'Africa', region: 'Eastern Africa', capital: 'Harare' },

    // ASIA (48 countries)
    { code: 'AFG', name: 'Afghanistan', continent: 'Asia', region: 'South Asia', capital: 'Kabul' },
    { code: 'ARM', name: 'Armenia', continent: 'Asia', region: 'West Asia', capital: 'Yerevan' },
    { code: 'AZE', name: 'Azerbaijan', continent: 'Asia', region: 'West Asia', capital: 'Baku' },
    { code: 'BHR', name: 'Bahrain', continent: 'Asia', region: 'West Asia', capital: 'Manama' },
    { code: 'BGD', name: 'Bangladesh', continent: 'Asia', region: 'South Asia', capital: 'Dhaka' },
    { code: 'BTN', name: 'Bhutan', continent: 'Asia', region: 'South Asia', capital: 'Thimphu' },
    { code: 'BRN', name: 'Brunei', continent: 'Asia', region: 'Southeast Asia', capital: 'Bandar Seri Begawan' },
    { code: 'KHM', name: 'Cambodia', continent: 'Asia', region: 'Southeast Asia', capital: 'Phnom Penh' },
    { code: 'CHN', name: 'China', continent: 'Asia', region: 'East Asia', capital: 'Beijing' },
    { code: 'GEO', name: 'Georgia', continent: 'Asia', region: 'West Asia', capital: 'Tbilisi' },
    { code: 'IND', name: 'India', continent: 'Asia', region: 'South Asia', capital: 'New Delhi' },
    { code: 'IDN', name: 'Indonesia', continent: 'Asia', region: 'Southeast Asia', capital: 'Jakarta' },
    { code: 'IRN', name: 'Iran', continent: 'Asia', region: 'West Asia', capital: 'Tehran' },
    { code: 'IRQ', name: 'Iraq', continent: 'Asia', region: 'West Asia', capital: 'Baghdad' },
    { code: 'ISR', name: 'Israel', continent: 'Asia', region: 'West Asia', capital: 'Jerusalem' },
    { code: 'JPN', name: 'Japan', continent: 'Asia', region: 'East Asia', capital: 'Tokyo' },
    { code: 'JOR', name: 'Jordan', continent: 'Asia', region: 'West Asia', capital: 'Amman' },
    { code: 'KAZ', name: 'Kazakhstan', continent: 'Asia', region: 'Central Asia', capital: 'Astana' },
    { code: 'KWT', name: 'Kuwait', continent: 'Asia', region: 'West Asia', capital: 'Kuwait City' },
    { code: 'KGZ', name: 'Kyrgyzstan', continent: 'Asia', region: 'Central Asia', capital: 'Bishkek' },
    { code: 'LAO', name: 'Laos', continent: 'Asia', region: 'Southeast Asia', capital: 'Vientiane' },
    { code: 'LBN', name: 'Lebanon', continent: 'Asia', region: 'West Asia', capital: 'Beirut' },
    { code: 'MYS', name: 'Malaysia', continent: 'Asia', region: 'Southeast Asia', capital: 'Kuala Lumpur' },
    { code: 'MDV', name: 'Maldives', continent: 'Asia', region: 'South Asia', capital: 'Malé' },
    { code: 'MNG', name: 'Mongolia', continent: 'Asia', region: 'East Asia', capital: 'Ulaanbaatar' },
    { code: 'MMR', name: 'Myanmar', continent: 'Asia', region: 'Southeast Asia', capital: 'Naypyidaw' },
    { code: 'NPL', name: 'Nepal', continent: 'Asia', region: 'South Asia', capital: 'Kathmandu' },
    { code: 'PRK', name: 'North Korea', continent: 'Asia', region: 'East Asia', capital: 'Pyongyang' },
    { code: 'OMN', name: 'Oman', continent: 'Asia', region: 'West Asia', capital: 'Muscat' },
    { code: 'PAK', name: 'Pakistan', continent: 'Asia', region: 'South Asia', capital: 'Islamabad' },
    { code: 'PSE', name: 'Palestine', continent: 'Asia', region: 'West Asia', capital: 'Ramallah' },
    { code: 'PHL', name: 'Philippines', continent: 'Asia', region: 'Southeast Asia', capital: 'Manila' },
    { code: 'QAT', name: 'Qatar', continent: 'Asia', region: 'West Asia', capital: 'Doha' },
    { code: 'SAU', name: 'Saudi Arabia', continent: 'Asia', region: 'West Asia', capital: 'Riyadh' },
    { code: 'SGP', name: 'Singapore', continent: 'Asia', region: 'Southeast Asia', capital: 'Singapore' },
    { code: 'KOR', name: 'South Korea', continent: 'Asia', region: 'East Asia', capital: 'Seoul' },
    { code: 'LKA', name: 'Sri Lanka', continent: 'Asia', region: 'South Asia', capital: 'Colombo' },
    { code: 'SYR', name: 'Syria', continent: 'Asia', region: 'West Asia', capital: 'Damascus' },
    { code: 'TWN', name: 'Taiwan', continent: 'Asia', region: 'East Asia', capital: 'Taipei' },
    { code: 'TJK', name: 'Tajikistan', continent: 'Asia', region: 'Central Asia', capital: 'Dushanbe' },
    { code: 'THA', name: 'Thailand', continent: 'Asia', region: 'Southeast Asia', capital: 'Bangkok' },
    { code: 'TLS', name: 'Timor-Leste', continent: 'Asia', region: 'Southeast Asia', capital: 'Dili' },
    { code: 'TUR', name: 'Turkey', continent: 'Asia', region: 'West Asia', capital: 'Ankara' },
    { code: 'TKM', name: 'Turkmenistan', continent: 'Asia', region: 'Central Asia', capital: 'Ashgabat' },
    { code: 'ARE', name: 'United Arab Emirates', continent: 'Asia', region: 'West Asia', capital: 'Abu Dhabi' },
    { code: 'UZB', name: 'Uzbekistan', continent: 'Asia', region: 'Central Asia', capital: 'Tashkent' },
    { code: 'VNM', name: 'Vietnam', continent: 'Asia', region: 'Southeast Asia', capital: 'Hanoi' },
    { code: 'YEM', name: 'Yemen', continent: 'Asia', region: 'West Asia', capital: "Sana'a" },

    // EUROPE (46 countries)
    { code: 'ALB', name: 'Albania', continent: 'Europe', region: 'Southern Europe', capital: 'Tirana' },
    { code: 'AND', name: 'Andorra', continent: 'Europe', region: 'Southern Europe', capital: 'Andorra la Vella' },
    { code: 'AUT', name: 'Austria', continent: 'Europe', region: 'Western Europe', capital: 'Vienna' },
    { code: 'BLR', name: 'Belarus', continent: 'Europe', region: 'Eastern Europe', capital: 'Minsk' },
    { code: 'BEL', name: 'Belgium', continent: 'Europe', region: 'Western Europe', capital: 'Brussels' },
    { code: 'BIH', name: 'Bosnia and Herzegovina', continent: 'Europe', region: 'Southern Europe', capital: 'Sarajevo' },
    { code: 'BGR', name: 'Bulgaria', continent: 'Europe', region: 'Eastern Europe', capital: 'Sofia' },
    { code: 'HRV', name: 'Croatia', continent: 'Europe', region: 'Southern Europe', capital: 'Zagreb' },
    { code: 'CYP', name: 'Cyprus', continent: 'Europe', region: 'Southern Europe', capital: 'Nicosia' },
    { code: 'CZE', name: 'Czech Republic', continent: 'Europe', region: 'Eastern Europe', capital: 'Prague' },
    { code: 'DNK', name: 'Denmark', continent: 'Europe', region: 'Northern Europe', capital: 'Copenhagen' },
    { code: 'EST', name: 'Estonia', continent: 'Europe', region: 'Northern Europe', capital: 'Tallinn' },
    { code: 'FIN', name: 'Finland', continent: 'Europe', region: 'Northern Europe', capital: 'Helsinki' },
    { code: 'FRA', name: 'France', continent: 'Europe', region: 'Western Europe', capital: 'Paris' },
    { code: 'DEU', name: 'Germany', continent: 'Europe', region: 'Western Europe', capital: 'Berlin' },
    { code: 'GRC', name: 'Greece', continent: 'Europe', region: 'Southern Europe', capital: 'Athens' },
    { code: 'HUN', name: 'Hungary', continent: 'Europe', region: 'Eastern Europe', capital: 'Budapest' },
    { code: 'ISL', name: 'Iceland', continent: 'Europe', region: 'Northern Europe', capital: 'Reykjavik' },
    { code: 'IRL', name: 'Ireland', continent: 'Europe', region: 'Northern Europe', capital: 'Dublin' },
    { code: 'ITA', name: 'Italy', continent: 'Europe', region: 'Southern Europe', capital: 'Rome' },
    { code: 'XKX', name: 'Kosovo', continent: 'Europe', region: 'Southern Europe', capital: 'Pristina' },
    { code: 'LVA', name: 'Latvia', continent: 'Europe', region: 'Northern Europe', capital: 'Riga' },
    { code: 'LIE', name: 'Liechtenstein', continent: 'Europe', region: 'Western Europe', capital: 'Vaduz' },
    { code: 'LTU', name: 'Lithuania', continent: 'Europe', region: 'Northern Europe', capital: 'Vilnius' },
    { code: 'LUX', name: 'Luxembourg', continent: 'Europe', region: 'Western Europe', capital: 'Luxembourg' },
    { code: 'MLT', name: 'Malta', continent: 'Europe', region: 'Southern Europe', capital: 'Valletta' },
    { code: 'MDA', name: 'Moldova', continent: 'Europe', region: 'Eastern Europe', capital: 'Chișinău' },
    { code: 'MCO', name: 'Monaco', continent: 'Europe', region: 'Western Europe', capital: 'Monaco' },
    { code: 'MNE', name: 'Montenegro', continent: 'Europe', region: 'Southern Europe', capital: 'Podgorica' },
    { code: 'NLD', name: 'Netherlands', continent: 'Europe', region: 'Western Europe', capital: 'Amsterdam' },
    { code: 'MKD', name: 'North Macedonia', continent: 'Europe', region: 'Southern Europe', capital: 'Skopje' },
    { code: 'NOR', name: 'Norway', continent: 'Europe', region: 'Northern Europe', capital: 'Oslo' },
    { code: 'POL', name: 'Poland', continent: 'Europe', region: 'Eastern Europe', capital: 'Warsaw' },
    { code: 'PRT', name: 'Portugal', continent: 'Europe', region: 'Southern Europe', capital: 'Lisbon' },
    { code: 'ROU', name: 'Romania', continent: 'Europe', region: 'Eastern Europe', capital: 'Bucharest' },
    { code: 'RUS', name: 'Russia', continent: 'Europe', region: 'Eastern Europe', capital: 'Moscow' },
    { code: 'SMR', name: 'San Marino', continent: 'Europe', region: 'Southern Europe', capital: 'San Marino' },
    { code: 'SRB', name: 'Serbia', continent: 'Europe', region: 'Southern Europe', capital: 'Belgrade' },
    { code: 'SVK', name: 'Slovakia', continent: 'Europe', region: 'Eastern Europe', capital: 'Bratislava' },
    { code: 'SVN', name: 'Slovenia', continent: 'Europe', region: 'Southern Europe', capital: 'Ljubljana' },
    { code: 'ESP', name: 'Spain', continent: 'Europe', region: 'Southern Europe', capital: 'Madrid' },
    { code: 'SWE', name: 'Sweden', continent: 'Europe', region: 'Northern Europe', capital: 'Stockholm' },
    { code: 'CHE', name: 'Switzerland', continent: 'Europe', region: 'Western Europe', capital: 'Bern' },
    { code: 'UKR', name: 'Ukraine', continent: 'Europe', region: 'Eastern Europe', capital: 'Kyiv' },
    { code: 'GBR', name: 'United Kingdom', continent: 'Europe', region: 'Northern Europe', capital: 'London' },
    { code: 'VAT', name: 'Vatican City', continent: 'Europe', region: 'Southern Europe', capital: 'Vatican City' },

    // NORTH AMERICA (23 countries)
    { code: 'ATG', name: 'Antigua and Barbuda', continent: 'North America', region: 'Caribbean', capital: "St. John's" },
    { code: 'BHS', name: 'Bahamas', continent: 'North America', region: 'Caribbean', capital: 'Nassau' },
    { code: 'BRB', name: 'Barbados', continent: 'North America', region: 'Caribbean', capital: 'Bridgetown' },
    { code: 'BLZ', name: 'Belize', continent: 'North America', region: 'Central America', capital: 'Belmopan' },
    { code: 'CAN', name: 'Canada', continent: 'North America', region: 'Northern America', capital: 'Ottawa' },
    { code: 'CRI', name: 'Costa Rica', continent: 'North America', region: 'Central America', capital: 'San José' },
    { code: 'CUB', name: 'Cuba', continent: 'North America', region: 'Caribbean', capital: 'Havana' },
    { code: 'DMA', name: 'Dominica', continent: 'North America', region: 'Caribbean', capital: 'Roseau' },
    { code: 'DOM', name: 'Dominican Republic', continent: 'North America', region: 'Caribbean', capital: 'Santo Domingo' },
    { code: 'SLV', name: 'El Salvador', continent: 'North America', region: 'Central America', capital: 'San Salvador' },
    { code: 'GRD', name: 'Grenada', continent: 'North America', region: 'Caribbean', capital: "St. George's" },
    { code: 'GTM', name: 'Guatemala', continent: 'North America', region: 'Central America', capital: 'Guatemala City' },
    { code: 'HTI', name: 'Haiti', continent: 'North America', region: 'Caribbean', capital: 'Port-au-Prince' },
    { code: 'HND', name: 'Honduras', continent: 'North America', region: 'Central America', capital: 'Tegucigalpa' },
    { code: 'JAM', name: 'Jamaica', continent: 'North America', region: 'Caribbean', capital: 'Kingston' },
    { code: 'MEX', name: 'Mexico', continent: 'North America', region: 'Central America', capital: 'Mexico City' },
    { code: 'NIC', name: 'Nicaragua', continent: 'North America', region: 'Central America', capital: 'Managua' },
    { code: 'PAN', name: 'Panama', continent: 'North America', region: 'Central America', capital: 'Panama City' },
    { code: 'KNA', name: 'Saint Kitts and Nevis', continent: 'North America', region: 'Caribbean', capital: 'Basseterre' },
    { code: 'LCA', name: 'Saint Lucia', continent: 'North America', region: 'Caribbean', capital: 'Castries' },
    { code: 'VCT', name: 'Saint Vincent and the Grenadines', continent: 'North America', region: 'Caribbean', capital: 'Kingstown' },
    { code: 'TTO', name: 'Trinidad and Tobago', continent: 'North America', region: 'Caribbean', capital: 'Port of Spain' },
    { code: 'USA', name: 'United States', continent: 'North America', region: 'Northern America', capital: 'Washington, D.C.' },

    // SOUTH AMERICA (12 countries)
    { code: 'ARG', name: 'Argentina', continent: 'South America', region: 'South America', capital: 'Buenos Aires' },
    { code: 'BOL', name: 'Bolivia', continent: 'South America', region: 'South America', capital: 'Sucre' },
    { code: 'BRA', name: 'Brazil', continent: 'South America', region: 'South America', capital: 'Brasília' },
    { code: 'CHL', name: 'Chile', continent: 'South America', region: 'South America', capital: 'Santiago' },
    { code: 'COL', name: 'Colombia', continent: 'South America', region: 'South America', capital: 'Bogotá' },
    { code: 'ECU', name: 'Ecuador', continent: 'South America', region: 'South America', capital: 'Quito' },
    { code: 'GUY', name: 'Guyana', continent: 'South America', region: 'South America', capital: 'Georgetown' },
    { code: 'PRY', name: 'Paraguay', continent: 'South America', region: 'South America', capital: 'Asunción' },
    { code: 'PER', name: 'Peru', continent: 'South America', region: 'South America', capital: 'Lima' },
    { code: 'SUR', name: 'Suriname', continent: 'South America', region: 'South America', capital: 'Paramaribo' },
    { code: 'URY', name: 'Uruguay', continent: 'South America', region: 'South America', capital: 'Montevideo' },
    { code: 'VEN', name: 'Venezuela', continent: 'South America', region: 'South America', capital: 'Caracas' },

    // OCEANIA (14 countries)
    { code: 'AUS', name: 'Australia', continent: 'Oceania', region: 'Australia and New Zealand', capital: 'Canberra' },
    { code: 'FJI', name: 'Fiji', continent: 'Oceania', region: 'Melanesia', capital: 'Suva' },
    { code: 'KIR', name: 'Kiribati', continent: 'Oceania', region: 'Micronesia', capital: 'Tarawa' },
    { code: 'MHL', name: 'Marshall Islands', continent: 'Oceania', region: 'Micronesia', capital: 'Majuro' },
    { code: 'FSM', name: 'Micronesia', continent: 'Oceania', region: 'Micronesia', capital: 'Palikir' },
    { code: 'NRU', name: 'Nauru', continent: 'Oceania', region: 'Micronesia', capital: 'Yaren' },
    { code: 'NZL', name: 'New Zealand', continent: 'Oceania', region: 'Australia and New Zealand', capital: 'Wellington' },
    { code: 'PLW', name: 'Palau', continent: 'Oceania', region: 'Micronesia', capital: 'Ngerulmud' },
    { code: 'PNG', name: 'Papua New Guinea', continent: 'Oceania', region: 'Melanesia', capital: 'Port Moresby' },
    { code: 'WSM', name: 'Samoa', continent: 'Oceania', region: 'Polynesia', capital: 'Apia' },
    { code: 'SLB', name: 'Solomon Islands', continent: 'Oceania', region: 'Melanesia', capital: 'Honiara' },
    { code: 'TON', name: 'Tonga', continent: 'Oceania', region: 'Polynesia', capital: "Nuku'alofa" },
    { code: 'TUV', name: 'Tuvalu', continent: 'Oceania', region: 'Polynesia', capital: 'Funafuti' },
    { code: 'VUT', name: 'Vanuatu', continent: 'Oceania', region: 'Melanesia', capital: 'Port Vila' }
  ];
}

  /**
   * Get data freshness indicator
   */
  getDataFreshness(countryCode) {
    const cached = this.cache.countries.get(countryCode);
    if (!cached) return 'not-loaded';

    const ageHours = (Date.now() - cached.timestamp) / (1000 * 60 * 60);
    
    if (ageHours < 1) return 'fresh';
    if (ageHours < 24) return 'recent';
    if (ageHours < 168) return 'this-week';
    return 'outdated';
  }
}

// Create singleton instance
const dataManager = new DataManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataManager;
}
