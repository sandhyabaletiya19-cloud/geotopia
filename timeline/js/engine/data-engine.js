// ============================================
// GEOTOPIA DATA ENGINE
// Loads, indexes, and queries all historical data
// ============================================

class DataEngine {
  constructor() {
    // ============================================
    // DATA STORAGE
    // ============================================
    this.allEvents = [];           // Every event sorted by year
    this.civilizations = new Map(); // All civilizations by ID
    this.geologicalEras = new Map(); // Geological eras
    this.regions = new Map();       // Geographic regions
    
    // ============================================
    // INDEXES (for fast queries)
    // ============================================
    this.eventsByYear = new Map();     // Year → Events
    this.eventsByType = new Map();     // Type → Events
    this.eventsByRegion = new Map();   // Region → Events
    this.timelineMarkers = [];         // Major events for timeline
    
    // ============================================
    // CONNECTIONS
    // ============================================
    this.influenceGraph = new Map();   // Civilization influences
    this.tradeRoutes = [];             // Trade connections
    this.migrationPaths = [];          // Migration routes
    
    // ============================================
    // METADATA
    // ============================================
    this.stats = {
      totalEvents: 0,
      totalCivilizations: 0,
      timespan: { start: -4500000000, end: 2026 },
      loadProgress: 0
    };
    
    this.loaded = false;
  }
  
  // ============================================
  // LOADING
  // ============================================
  
  /**
   * Load all data modules
   */
  async loadAll() {
    console.log('📚 Loading all data...');
    
    try {
      // Load geological data
      await this.loadGeologicalData();
      
      // Load civilization data
      await this.loadCivilizationData();
      
      // Load modern history data
      await this.loadModernData();
      
      // Build indexes
      this.buildIndexes();
      
      // Build connections
      this.buildConnections();
      
      // Calculate statistics
      this.calculateStats();
      
      this.loaded = true;
      console.log('✅ Data loaded:', this.stats);
      
    } catch (error) {
      console.error('❌ Data loading failed:', error);
      throw error;
    }
  }
  
  /**
   * Load geological era data
   */
  async loadGeologicalData() {
    const eras = [
      'hadean', 'archean', 'proterozoic', 
      'paleozoic', 'mesozoic', 'cenozoic'
    ];
    
    for (const era of eras) {
      // Data files will register themselves
      // For now, create placeholder data
      this.geologicalEras.set(era, {
        name: era,
        events: this.generateGeologicalEvents(era)
      });
    }
    
    this.stats.loadProgress = 20;
  }
  
  /**
   * Load civilization data
   */
  async loadCivilizationData() {
    const regions = [
      'africa', 'mediterranean', 'middle-east', 'south-asia',
      'east-asia', 'southeast-asia', 'europe', 'americas',
      'oceania', 'central-asia'
    ];
    
    for (const region of regions) {
      // Data files will register themselves
      this.regions.set(region, {
        name: region,
        civilizations: []
      });
    }
    
    this.stats.loadProgress = 60;
  }
  
  /**
   * Load modern history data
   */
  async loadModernData() {
    const periods = [
      'colonial', 'world-wars', 'cold-war', 'contemporary'
    ];
    
    for (const period of periods) {
      // Data files will register themselves
    }
    
    this.stats.loadProgress = 80;
  }
  
  // ============================================
  // REGISTRATION (called by data files)
  // ============================================
  
  /**
   * Register a data module
   * @param {object} module - Data module from data files
   */
  register(module) {
    if (module.type === 'geological') {
      this.registerGeological(module);
    } else if (module.type === 'civilization') {
      this.registerCivilization(module);
    } else if (module.type === 'modern') {
      this.registerModern(module);
    }
  }
  
  /**
   * Register geological data
   */
  registerGeological(module) {
    module.events.forEach(event => {
      this.allEvents.push({
        ...event,
        category: 'geological',
        era: module.era
      });
    });
  }
  
  /**
   * Register civilization data
   */
  registerCivilization(module) {
    module.civilizations.forEach(civ => {
      this.civilizations.set(civ.id, civ);
      
      // Add civilization events
      if (civ.timeline) {
        civ.timeline.forEach(event => {
          this.allEvents.push({
            ...event,
            category: 'civilization',
            civilizationId: civ.id,
            region: module.region
          });
        });
      }
    });
  }
  
  /**
   * Register modern history data
   */
  registerModern(module) {
    module.events.forEach(event => {
      this.allEvents.push({
        ...event,
        category: 'modern',
        period: module.period
      });
    });
  }
  
  // ============================================
  // INDEXING
  // ============================================
  
  /**
   * Build search indexes
   */
  buildIndexes() {
    console.log('Building indexes...');
    
    // Sort all events by year
    this.allEvents.sort((a, b) => a.year - b.year);
    
    // Index by year
    this.allEvents.forEach(event => {
      const year = event.year;
      if (!this.eventsByYear.has(year)) {
        this.eventsByYear.set(year, []);
      }
      this.eventsByYear.get(year).push(event);
    });
    
    // Index by type
    this.allEvents.forEach(event => {
      const type = event.type || 'general';
      if (!this.eventsByType.has(type)) {
        this.eventsByType.set(type, []);
      }
      this.eventsByType.get(type).push(event);
    });
    
    // Index by region
    this.allEvents.forEach(event => {
      if (event.region) {
        if (!this.eventsByRegion.has(event.region)) {
          this.eventsByRegion.set(event.region, []);
        }
        this.eventsByRegion.get(event.region).push(event);
      }
    });
    
    // Create timeline markers (major events)
    this.timelineMarkers = this.allEvents.filter(e => e.importance >= 8);
    
    console.log('✓ Indexes built');
  }
  
  /**
   * Build relationship connections
   */
  buildConnections() {
    console.log('Building connections...');
    
    // Build influence graph
    this.civilizations.forEach(civ => {
      if (civ.influences) {
        this.influenceGraph.set(civ.id, {
          influenced: civ.influences.influenced || [],
          influencedBy: civ.influences.influencedBy || []
        });
      }
    });
    
    // Build trade routes
    this.civilizations.forEach(civ => {
      if (civ.tradeRoutes) {
        civ.tradeRoutes.forEach(route => {
          this.tradeRoutes.push({
            from: civ.id,
            to: route.to,
            type: route.type,
            active: route.timespan
          });
        });
      }
    });
    
    console.log('✓ Connections built');
  }
  
  /**
   * Calculate statistics
   */
  calculateStats() {
    this.stats.totalEvents = this.allEvents.length;
    this.stats.totalCivilizations = this.civilizations.size;
    
    if (this.allEvents.length > 0) {
      this.stats.timespan.start = this.allEvents[0].year;
      this.stats.timespan.end = this.allEvents[this.allEvents.length - 1].year;
    }
    
    this.stats.loadProgress = 100;
  }
  
  // ============================================
  // QUERIES
  // ============================================
  
  /**
   * Get all events at a specific year
   * @param {number} year 
   * @returns {array}
   */
  getEventsAtYear(year) {
    return this.eventsByYear.get(year) || [];
  }
  
  /**
   * Get events in a year range
   * @param {number} startYear 
   * @param {number} endYear 
   * @returns {array}
   */
  getEventsInRange(startYear, endYear) {
    return this.allEvents.filter(e => 
      e.year >= startYear && e.year <= endYear
    );
  }
  
  /**
   * Get events near a year (within tolerance)
   * @param {number} year 
   * @param {number} tolerance 
   * @returns {array}
   */
  getEventsNear(year, tolerance = 100) {
    return this.getEventsInRange(year - tolerance, year + tolerance);
  }
  
  /**
   * Get active civilizations at a year
   * @param {number} year 
   * @returns {array}
   */
  getActiveCivilizationsAt(year) {
    const active = [];
    
    this.civilizations.forEach(civ => {
      if (civ.timespan) {
        if (year >= civ.timespan.start && year <= civ.timespan.end) {
          active.push(civ);
        }
      }
    });
    
    return active;
  }
  
  /**
   * Get civilization by ID
   * @param {string} id 
   * @returns {object}
   */
  getCivilization(id) {
    return this.civilizations.get(id);
  }
  
  /**
   * Get events by type
   * @param {string} type 
   * @returns {array}
   */
  getEventsByType(type) {
    return this.eventsByType.get(type) || [];
  }
  
  /**
   * Get events by region
   * @param {string} region 
   * @returns {array}
   */
  getEventsByRegion(region) {
    return this.eventsByRegion.get(region) || [];
  }
  
  /**
   * Get timeline markers for display
   * @returns {array}
   */
  getTimelineMarkers() {
    return this.timelineMarkers;
  }
  
  /**
   * Get trade routes active at a year
   * @param {number} year 
   * @returns {array}
   */
  getActiveTradeRoutes(year) {
    return this.tradeRoutes.filter(route => {
      if (!route.active) return false;
      return year >= route.active.start && year <= route.active.end;
    });
  }
  
  // ============================================
  // SEARCH
  // ============================================
  
  /**
   * Search all data
   * @param {string} query 
   * @returns {array} - Results with relevance scores
   */
  search(query) {
    if (!query || query.length < 2) return [];
    
    const results = [];
    
    // Search events
    this.allEvents.forEach(event => {
      const nameScore = GeoUtils.scoreMatch(query, event.name || '');
      const detailsScore = GeoUtils.scoreMatch(query, event.details || '');
      const score = Math.max(nameScore, detailsScore * 0.8);
      
      if (score > 0) {
        results.push({
          type: 'event',
          data: event,
          score
        });
      }
    });
    
    // Search civilizations
    this.civilizations.forEach(civ => {
      const nameScore = GeoUtils.scoreMatch(query, civ.name);
      const descScore = GeoUtils.scoreMatch(query, civ.description || '');
      const score = Math.max(nameScore, descScore * 0.8);
      
      if (score > 0) {
        results.push({
          type: 'civilization',
          data: civ,
          score
        });
      }
    });
    
    // Sort by relevance
    results.sort((a, b) => b.score - a.score);
    
    // Return top 20 results
    return results.slice(0, 20);
  }
  
  /**
   * Search by coordinates (find nearby events)
   * @param {number} lat 
   * @param {number} lng 
   * @param {number} radius - km
   * @returns {array}
   */
  searchByLocation(lat, lng, radius = 500) {
    return this.allEvents.filter(event => {
      if (!event.coordinates) return false;
      
      const distance = GeoUtils.calculateDistance(
        lat, lng,
        event.coordinates.lat, event.coordinates.lng
      );
      
      return distance <= radius;
    });
  }
  
  // ============================================
  // MAP STATE GENERATION
  // ============================================
  
  /**
   * Get complete map state for a year
   * @param {number} year 
   * @returns {object}
   */
  getMapStateAt(year) {
    const era = GeoUtils.getEra(year);
    const civilizations = this.getActiveCivilizationsAt(year);
    const events = this.getEventsNear(year, 50);
    const tradeRoutes = this.getActiveTradeRoutes(year);
    
    return {
      year,
      era,
      civilizations,
      events,
      tradeRoutes,
      continents: this.getContinentPositions(year),
      climate: this.getClimateData(year)
    };
  }
  
  /**
   * Get continent positions (plate tectonics)
   * @param {number} year 
   * @returns {object}
   */
  getContinentPositions(year) {
    // Simplified - real implementation would use actual tectonic data
    const absYear = Math.abs(year);
    
    if (absYear > 200000000) {
      return { configuration: 'pangaea' };
    } else if (absYear > 100000000) {
      return { configuration: 'breaking-apart' };
    } else {
      return { configuration: 'modern' };
    }
  }
  
  /**
   * Get climate data for year
   * @param {number} year 
   * @returns {object}
   */
  getClimateData(year) {
    const absYear = Math.abs(year);
    
    if (absYear > 2000000000) {
      return { type: 'hot', co2: 'high', temperature: 'extreme' };
    } else if (absYear > 100000000) {
      return { type: 'warm', co2: 'high', temperature: 'hot' };
    } else if (absYear > 2000000) {
      return { type: 'ice-age', co2: 'low', temperature: 'cold' };
    } else {
      return { type: 'temperate', co2: 'moderate', temperature: 'moderate' };
    }
  }
  
  // ============================================
  // NARRATIVE GENERATION
  // ============================================
  
  /**
   * Generate narrative text for a year
   * @param {number} year 
   * @returns {string}
   */
  generateNarrative(year) {
    const era = GeoUtils.getEra(year);
    const events = this.getEventsNear(year, 100);
    const civilizations = this.getActiveCivilizationsAt(year);
    
    let narrative = `In ${GeoUtils.formatYear(year)}, during the ${era.name} era:\n\n`;
    
    if (civilizations.length > 0) {
      narrative += `Active civilizations: ${civilizations.map(c => c.name).join(', ')}.\n\n`;
    }
    
    if (events.length > 0) {
      const majorEvents = events.filter(e => e.importance >= 7);
      if (majorEvents.length > 0) {
        narrative += `Major events:\n`;
        majorEvents.forEach(e => {
          narrative += `- ${e.name}: ${e.details}\n`;
        });
      }
    }
    
    return narrative;
  }
  
  // ============================================
  // PLACEHOLDER DATA GENERATION
  // ============================================
  
  /**
   * Generate placeholder geological events
   * @param {string} era 
   * @returns {array}
   */
  generateGeologicalEvents(era) {
    const events = {
      hadean: [
        {
          year: -4500000000,
          name: 'Formation of Earth',
          type: 'geological',
          importance: 10,
          details: 'Earth forms from accretion of planetesimals',
          coordinates: { lat: 0, lng: 0 }
        },
        {
          year: -4400000000,
          name: 'Moon Formation',
          type: 'catastrophic',
          importance: 10,
          details: 'Giant impact creates the Moon',
          coordinates: { lat: 0, lng: 0 }
        }
      ],
      archean: [
        {
          year: -3800000000,
          name: 'Late Heavy Bombardment',
          type: 'catastrophic',
          importance: 9,
          details: 'Period of intense asteroid impacts',
          coordinates: { lat: 0, lng: 0 }
        },
        {
          year: -3500000000,
          name: 'First Life',
          type: 'biological',
          importance: 10,
          details: 'Earliest evidence of life (stromatolites)',
          coordinates: { lat: -26, lng: 117 }
        }
      ],
      proterozoic: [
        {
          year: -2400000000,
          name: 'Great Oxidation Event',
          type: 'biological',
          importance: 10,
          details: 'Oxygen accumulates in atmosphere',
          coordinates: { lat: 0, lng: 0 }
        },
        {
          year: -700000000,
          name: 'Snowball Earth',
          type: 'geological',
          importance: 9,
          details: 'Global glaciation event',
          coordinates: { lat: 0, lng: 0 }
        }
      ],
      paleozoic: [
        {
          year: -541000000,
          name: 'Cambrian Explosion',
          type: 'biological',
          importance: 10,
          details: 'Rapid diversification of life',
          coordinates: { lat: 0, lng: 0 }
        },
        {
          year: -252000000,
          name: 'Permian Extinction',
          type: 'catastrophic',
          importance: 10,
          details: 'Largest mass extinction event',
          coordinates: { lat: -30, lng: 30 }
        }
      ],
      mesozoic: [
        {
          year: -200000000,
          name: 'Dinosaurs Dominate',
          type: 'biological',
          importance: 9,
          details: 'Age of dinosaurs begins',
          coordinates: { lat: 0, lng: 0 }
        },
        {
          year: -66000000,
          name: 'Chicxulub Impact',
          type: 'catastrophic',
          importance: 10,
          details: 'Asteroid impact causes mass extinction',
          coordinates: { lat: 21.3, lng: -89.5 }
        }
      ],
      cenozoic: [
        {
          year: -55000000,
          name: 'Himalayan Orogeny',
          type: 'geological',
          importance: 8,
          details: 'India collides with Asia, forming Himalayas',
          coordinates: { lat: 28, lng: 84 }
        },
        {
          year: -200000,
          name: 'Homo Sapiens Emerges',
          type: 'biological',
          importance: 10,
          details: 'Modern humans evolve in Africa',
          coordinates: { lat: -3, lng: 35 }
        }
      ]
    };
    
    return events[era] || [];
  }
  
  // ============================================
  // EXPORT
  // ============================================
  
  /**
   * Export all data as JSON
   * @returns {object}
   */
  exportData() {
    return {
      events: this.allEvents,
      civilizations: Array.from(this.civilizations.values()),
      stats: this.stats,
      version: '1.0.0'
    };
  }
}

// Create global instance
window.dataEngine = new DataEngine();

// Auto-register function for data files
window.GEOTOPIA_DATA = {
  register: (module) => window.dataEngine.register(module)
};
