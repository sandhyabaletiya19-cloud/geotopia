// js/data/master-index.js
/**
 * ═══════════════════════════════════════════════════════════════
 *  GEOTOPIA DATA ENGINE - MASTER INDEX
 * ═══════════════════════════════════════════════════════════════
 *  
 *  This file is the BRAIN of the entire application.
 *  It:
 *  - Ingests all data modules (geological + civilization + modern)
 *  - Builds a unified timeline from Big Bang to present
 *  - Creates relationship graphs between civilizations
 *  - Enables fast queries (getEventsAtYear, searchEvents, etc.)
 *  - Generates map states for any given year
 *  - Detects temporal/spatial event clusters
 *  
 *  Every data file registers itself here using:
 *  GEOTOPIA_DATA.register(moduleData)
 * ═══════════════════════════════════════════════════════════════
 */

class GEOTOPIADataEngine {
  constructor() {
    // ═══════════════════════════════════════════════════════════
    //  CORE DATA STRUCTURES
    // ═══════════════════════════════════════════════════════════
    
    // Master timeline: every event sorted by year
    this.timeline = [];
    
    // Events indexed by year ranges for fast lookup
    this.eventIndex = new Map(); // year → [events]
    
    // All geological eras
    this.geologicalEras = new Map(); // eraId → era data
    
    // All civilizations
    this.civilizations = new Map(); // civId → civ data
    
    // All regions
    this.regions = new Map(); // regionId → region data
    
    // Influence graph (who influenced whom)
    this.influenceGraph = {}; // civId → { influenced: [], influencedBy: [] }
    
    // Spatial index (events by location)
    this.spatialIndex = this.createSpatialGrid();
    
    // Search index (for text search)
    this.searchIndex = new Map(); // keyword → [eventIds]
    
    // Event clusters (events happening around same time/place)
    this.clusters = [];
    
    // Current year cache
    this.cache = {
      year: null,
      events: null,
      mapState: null,
      activeRegions: null
    };
    
    // Statistics
    this.stats = {
      totalEvents: 0,
      totalCivilizations: 0,
      totalRegions: 0,
      timespan: { start: -4500000000, end: 2026 },
      dataLoaded: false
    };
    
    console.log('🧠 GEOTOPIA Data Engine initialized');
  }

  // ═══════════════════════════════════════════════════════════
  //  REGISTRATION - Called by each data module
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Register a geological era data module
   */
  registerGeologicalEra(eraData) {
    console.log(`📊 Registering geological era: ${eraData.name}`);
    
    const era = {
      id: eraData.id,
      name: eraData.name,
      timeRange: eraData.timeRange,
      color: eraData.color,
      description: eraData.description,
      events: eraData.events || [],
      subEras: eraData.subEras || [],
      characteristics: eraData.characteristics || {}
    };
    
    this.geologicalEras.set(era.id, era);
    
    // Add all events to timeline
    era.events.forEach(event => {
      this.addEventToTimeline({
        ...event,
        category: 'geological',
        era: era.id,
        eraName: era.name
      });
    });
    
    return this;
  }

  /**
   * Register a civilization/region data module
   */
  registerCivilization(civData) {
    console.log(`🏛️ Registering civilization: ${civData.region}`);
    
    // Register region
    if (!this.regions.has(civData.region)) {
      this.regions.set(civData.region, {
        name: civData.region,
        color: civData.color,
        civilizations: []
      });
      this.stats.totalRegions++;
    }
    
    const region = this.regions.get(civData.region);
    
    // Process each civilization
    civData.civilizations.forEach(civ => {
      const civId = civ.id;
      
      // Store civilization data
      this.civilizations.set(civId, {
        ...civ,
        region: civData.region,
        regionColor: civData.color
      });
      
      region.civilizations.push(civId);
      this.stats.totalCivilizations++;
      
      // Add all timeline events
      if (civ.timeline) {
        civ.timeline.forEach(event => {
          this.addEventToTimeline({
            ...event,
            category: 'civilization',
            civilization: civId,
            civilizationName: civ.name,
            region: civData.region,
            coordinates: event.coordinates || civ.coordinates
          });
        });
      }
      
      // Build influence graph
      if (civ.influence) {
        this.influenceGraph[civId] = {
          influenced: civ.influence,
          influencedBy: []
        };
      }
    });
    
    return this;
  }

  /**
   * Register modern era data module
   */
  registerModernEra(modernData) {
    const eraName = modernData.period || modernData.era;
    console.log(`🌍 Registering modern era: ${eraName}`);
    
    // Handle different event array names
    const events = modernData.events || 
                   modernData.globalEvents || 
                   modernData.conflicts || 
                   modernData.phases || 
                   [];
    
    events.forEach(event => {
      this.addEventToTimeline({
        ...event,
        category: 'modern',
        period: eraName
      });
    });
    
    // Handle empires if present (Colonial Period)
    if (modernData.empires) {
      modernData.empires.forEach(empire => {
        if (empire.events) {
          empire.events.forEach(event => {
            this.addEventToTimeline({
              ...event,
              category: 'modern',
              period: eraName,
              empire: empire.name
            });
          });
        }
        if (empire.timeline) {
          empire.timeline.forEach(event => {
            this.addEventToTimeline({
              ...event,
              category: 'modern',
              period: eraName,
              empire: empire.name
            });
          });
        }
      });
    }
    
    // Handle superpowers if present (Cold War)
    if (modernData.superpowers) {
      modernData.superpowers.forEach(superpower => {
        if (superpower.events) {
          superpower.events.forEach(event => {
            this.addEventToTimeline({
              ...event,
              category: 'modern',
              period: eraName,
              superpower: superpower.name
            });
          });
        }
      });
    }
    
    // Handle proxyWars if present (Cold War)
    if (modernData.proxyWars) {
      modernData.proxyWars.forEach(war => {
        this.addEventToTimeline({
          year: war.year || war.timeRange?.start,
          event: war.name || war.conflict,
          type: 'military',
          category: 'modern',
          period: eraName,
          ...war
        });
      });
    }
    
    return this;
  }

  /**
   * Generic register function - auto-detects type
   */
  register(data) {
    if (data.type === 'geological') {
      return this.registerGeologicalEra(data);
    } else if (data.civilizations) {
      return this.registerCivilization(data);
    } else if (data.period) {
      return this.registerModernEra(data);
    } else if (data.era) {
      return this.registerModernEra(data);
    } else if (data.empires) {
      return this.registerModernEra(data);
    } else if (data.conflicts) {
      return this.registerModernEra(data);
    } else if (data.superpowers) {
      return this.registerModernEra(data);
    } else if (data.phases) {
      return this.registerModernEra(data);
    } else {
      console.warn('⚠️ Unknown data format:', data);
      return this;
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  TIMELINE BUILDING
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Add event to master timeline with indexing
   */
  addEventToTimeline(event) {
    // Skip if no year
    if (event.year === undefined || event.year === null) {
      return;
    }
    
    // Assign unique ID if not present
    if (!event.id) {
      event.id = this.generateEventId(event);
    }
    
    // Add to timeline
    this.timeline.push(event);
    this.stats.totalEvents++;
    
    // Index by year
    const year = event.year;
    if (!this.eventIndex.has(year)) {
      this.eventIndex.set(year, []);
    }
    this.eventIndex.get(year).push(event);
    
    // Index spatially if has coordinates
    if (event.coordinates) {
      this.addToSpatialIndex(event);
    }
    
    // Index for search
    this.indexForSearch(event);
  }

  /**
   * Generate unique event ID
   */
  generateEventId(event) {
    const prefix = event.category || 'event';
    const year = event.year || 0;
    const random = Math.random().toString(36).substr(2, 9);
    return `${prefix}-${year}-${random}`;
  }

  /**
   * Finalize timeline - sort and build indexes
   */
  finalizeTimeline() {
    console.log('🔨 Finalizing timeline...');
    
    // Sort timeline by year
    this.timeline.sort((a, b) => a.year - b.year);
    
    // Build reverse influence graph
    this.buildReverseInfluences();
    
    // Detect event clusters
    this.detectClusters();
    
    // Build era boundaries
    this.buildEraBoundaries();
    
    // Mark as loaded
    this.stats.dataLoaded = true;
    
    console.log(`✅ Timeline complete: ${this.stats.totalEvents} events`);
    console.log(`   ${this.stats.totalCivilizations} civilizations`);
    console.log(`   ${this.stats.totalRegions} regions`);
    
    return this;
  }

  /**
   * Build reverse influence relationships
   */
  buildReverseInfluences() {
    for (const [civId, influences] of Object.entries(this.influenceGraph)) {
      if (influences && influences.influenced) {
        influences.influenced.forEach(targetCivId => {
          if (!this.influenceGraph[targetCivId]) {
            this.influenceGraph[targetCivId] = { influenced: [], influencedBy: [] };
          }
          this.influenceGraph[targetCivId].influencedBy.push(civId);
        });
      }
    }
  }

  /**
   * Detect event clusters (events close in time/space)
   */
  detectClusters() {
    const CLUSTER_TIME_WINDOW = 100; // years
    const CLUSTER_DISTANCE = 500; // km
    
    this.clusters = [];
    const processed = new Set();
    
    this.timeline.forEach((event, idx) => {
      if (processed.has(event.id)) return;
      
      const cluster = {
        centerYear: event.year,
        events: [event],
        theme: null
      };
      
      // Find nearby events
      for (let i = idx + 1; i < this.timeline.length; i++) {
        const other = this.timeline[i];
        
        // Stop if too far in time
        if (Math.abs(other.year - event.year) > CLUSTER_TIME_WINDOW) break;
        
        // Check spatial proximity if both have coordinates
        if (event.coordinates && other.coordinates) {
          const distance = this.calculateDistance(
            event.coordinates,
            other.coordinates
          );
          
          if (distance < CLUSTER_DISTANCE) {
            cluster.events.push(other);
            processed.add(other.id);
          }
        }
      }
      
      // Only save if cluster has multiple events
      if (cluster.events.length > 1) {
        cluster.theme = this.inferClusterTheme(cluster.events);
        this.clusters.push(cluster);
      }
      
      processed.add(event.id);
    });
    
    console.log(`📍 Detected ${this.clusters.length} event clusters`);
  }

  /**
   * Infer theme from cluster events
   */
  inferClusterTheme(events) {
    const types = events.map(e => e.type).filter(Boolean);
    const mostCommon = this.mostCommon(types);
    
    const themeMap = {
      'political': 'Political Upheaval',
      'military': 'Military Conflicts',
      'cultural': 'Cultural Renaissance',
      'technological': 'Technological Advances',
      'economic': 'Economic Developments',
      'religious': 'Religious Movements',
      'catastrophic': 'Natural Disasters',
      'biological': 'Evolutionary Changes'
    };
    
    return themeMap[mostCommon] || 'Historical Developments';
  }

  /**
   * Build era boundary markers
   */
  buildEraBoundaries() {
    this.eraBoundaries = [];
    
    const sortedEras = Array.from(this.geologicalEras.values())
      .sort((a, b) => a.timeRange.start - b.timeRange.start);
    
    sortedEras.forEach(era => {
      this.eraBoundaries.push({
        year: era.timeRange.start,
        era: era.name,
        type: 'start'
      });
      this.eraBoundaries.push({
        year: era.timeRange.end,
        era: era.name,
        type: 'end'
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  //  SPATIAL INDEXING
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Create spatial grid for fast location queries
   */
  createSpatialGrid() {
    const GRID_SIZE = 10; // 10° grid
    const grid = new Map();
    
    for (let lat = -90; lat < 90; lat += GRID_SIZE) {
      for (let lng = -180; lng < 180; lng += GRID_SIZE) {
        const key = `${lat},${lng}`;
        grid.set(key, []);
      }
    }
    
    return grid;
  }

  /**
   * Add event to spatial index
   */
  addToSpatialIndex(event) {
    const GRID_SIZE = 10;
    const { lat, lng } = event.coordinates;
    
    if (lat === undefined || lng === undefined) return;
    
    const gridLat = Math.floor(lat / GRID_SIZE) * GRID_SIZE;
    const gridLng = Math.floor(lng / GRID_SIZE) * GRID_SIZE;
    const key = `${gridLat},${gridLng}`;
    
    if (this.spatialIndex.has(key)) {
      this.spatialIndex.get(key).push(event);
    }
  }

  /**
   * Get events near a location
   */
  getEventsNearLocation(lat, lng, radiusKm = 500) {
    const GRID_SIZE = 10;
    const gridLat = Math.floor(lat / GRID_SIZE) * GRID_SIZE;
    const gridLng = Math.floor(lng / GRID_SIZE) * GRID_SIZE;
    
    const events = [];
    
    // Check surrounding grid cells
    for (let dLat = -GRID_SIZE; dLat <= GRID_SIZE; dLat += GRID_SIZE) {
      for (let dLng = -GRID_SIZE; dLng <= GRID_SIZE; dLng += GRID_SIZE) {
        const key = `${gridLat + dLat},${gridLng + dLng}`;
        if (this.spatialIndex.has(key)) {
          this.spatialIndex.get(key).forEach(event => {
            const distance = this.calculateDistance(
              { lat, lng },
              event.coordinates
            );
            if (distance <= radiusKm) {
              events.push({ ...event, distance });
            }
          });
        }
      }
    }
    
    return events.sort((a, b) => a.distance - b.distance);
  }

  /**
   * Calculate distance between two coordinates (Haversine formula)
   */
  calculateDistance(coord1, coord2) {
    const R = 6371; // Earth radius in km
    const dLat = this.toRad(coord2.lat - coord1.lat);
    const dLng = this.toRad(coord2.lng - coord1.lng);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRad(coord1.lat)) * Math.cos(this.toRad(coord2.lat)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  toRad(degrees) {
    return degrees * (Math.PI / 180);
  }

  // ═══════════════════════════════════════════════════════════
  //  SEARCH INDEXING
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Index event for text search
   */
  indexForSearch(event) {
    const keywords = this.extractKeywords(event);
    
    keywords.forEach(keyword => {
      if (!this.searchIndex.has(keyword)) {
        this.searchIndex.set(keyword, []);
      }
      this.searchIndex.get(keyword).push(event.id);
    });
  }

  /**
   * Extract searchable keywords from event
   */
  extractKeywords(event) {
    const text = [
      event.name,
      event.event,
      event.description,
      event.civilizationName,
      event.region,
      event.eraName,
      event.type
    ].filter(Boolean).join(' ').toLowerCase();
    
    // Extract words
    const words = text.match(/\b\w{3,}\b/g) || [];
    
    // Remove common words
    const stopWords = new Set(['the', 'and', 'for', 'with', 'from', 'that', 'this', 'was', 'were']);
    return words.filter(w => !stopWords.has(w));
  }

  /**
   * Search events by keyword
   */
  searchEvents(query) {
    const keywords = query.toLowerCase().split(/\s+/);
    const eventIds = new Set();
    
    keywords.forEach(keyword => {
      // Partial matching
      for (const [indexedKeyword, ids] of this.searchIndex.entries()) {
        if (indexedKeyword.includes(keyword)) {
          ids.forEach(id => eventIds.add(id));
        }
      }
    });
    
    // Get full event objects
    const events = Array.from(eventIds).map(id => 
      this.timeline.find(e => e.id === id)
    ).filter(Boolean);
    
    // Sort by relevance (how many keywords matched)
    return events.sort((a, b) => {
      const scoreA = this.calculateRelevance(a, keywords);
      const scoreB = this.calculateRelevance(b, keywords);
      return scoreB - scoreA;
    });
  }

  /**
   * Calculate search relevance score
   */
  calculateRelevance(event, keywords) {
    const text = [
      event.name,
      event.event,
      event.description
    ].filter(Boolean).join(' ').toLowerCase();
    
    return keywords.reduce((score, keyword) => {
      const count = (text.match(new RegExp(keyword, 'g')) || []).length;
      return score + count;
    }, 0);
  }

  // ═══════════════════════════════════════════════════════════
  //  QUERY METHODS - The API used by the app
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Get all events at a specific year
   */
  getEventsAtYear(year) {
    // Check cache
    if (this.cache.year === year && this.cache.events) {
      return this.cache.events;
    }
    
    const events = this.eventIndex.get(year) || [];
    
    // Cache result
    this.cache.year = year;
    this.cache.events = events;
    
    return events;
  }

  /**
   * Get events in a year range
   */
  getEventsInRange(startYear, endYear) {
    return this.timeline.filter(event => 
      event.year >= startYear && event.year <= endYear
    );
  }

  /**
   * Get active civilizations at a year
   */
  getActiveCivilizationsAtYear(year) {
    const active = [];
    
    for (const [civId, civ] of this.civilizations.entries()) {
      if (civ.timespan && civ.timespan.start <= year && civ.timespan.end >= year) {
        active.push({
          id: civId,
          ...civ,
          // Get events from this civ at this year
          currentEvents: this.timeline.filter(e => 
            e.civilization === civId && e.year === year
          )
        });
      }
    }
    
    return active;
  }

  /**
   * Get geological era at year
   */
  getEraAtYear(year) {
    for (const era of this.geologicalEras.values()) {
      if (year >= era.timeRange.start && year <= era.timeRange.end) {
        return era;
      }
    }
    return null;
  }

  /**
   * Get map state at year (for rendering)
   */
  getMapStateAtYear(year) {
    // Check cache
    if (this.cache.year === year && this.cache.mapState) {
      return this.cache.mapState;
    }
    
    const era = this.getEraAtYear(year);
    const activeCivs = this.getActiveCivilizationsAtYear(year);
    const events = this.getEventsAtYear(year);
    
    const mapState = {
      year,
      era: era ? era.id : null,
      eraName: era ? era.name : null,
      eraColor: era ? era.color : '#333333',
      civilizations: activeCivs.map(civ => ({
        id: civ.id,
        name: civ.name,
        region: civ.region,
        color: civ.regionColor,
        coordinates: civ.coordinates,
        borders: civ.timeline?.find(e => e.year <= year && e.mapState)?.mapState?.borders || []
      })),
      events: events.map(e => ({
        id: e.id,
        type: e.type,
        coordinates: e.coordinates,
        importance: e.importance || 5
      }))
    };
    
    // Cache it
    this.cache.mapState = mapState;
    
    return mapState;
  }

  /**
   * Get civilization influence chain
   */
  getInfluenceChain(civId, depth = 3) {
    const chain = { id: civId, influenced: [], influencedBy: [] };
    
    if (this.influenceGraph[civId]) {
      const influences = this.influenceGraph[civId];
      
      if (depth > 0) {
        chain.influenced = (influences.influenced || []).map(targetId => 
          this.getInfluenceChain(targetId, depth - 1)
        );
        chain.influencedBy = (influences.influencedBy || []).map(sourceId => 
          this.getInfluenceChain(sourceId, depth - 1)
        );
      }
    }
    
    return chain;
  }

  /**
   * Get event clusters near a year
   */
  getClustersNearYear(year, windowYears = 500) {
    return this.clusters.filter(cluster => 
      Math.abs(cluster.centerYear - year) <= windowYears
    );
  }

  /**
   * Get statistics
   */
  getStats() {
    return { ...this.stats };
  }

  /**
   * Get all civilizations in a region
   */
  getCivilizationsByRegion(regionName) {
    const region = this.regions.get(regionName);
    if (!region) return [];
    
    return region.civilizations.map(civId => this.civilizations.get(civId));
  }

  /**
   * Get timeline events for a civilization
   */
  getCivilizationTimeline(civId) {
    return this.timeline.filter(event => event.civilization === civId);
  }

  // ═══════════════════════════════════════════════════════════
  //  UTILITY METHODS
  // ═══════════════════════════════════════════════════════════
  
  /**
   * Find most common element in array
   */
  mostCommon(arr) {
    if (!arr || arr.length === 0) return null;
    
    const counts = {};
    arr.forEach(item => {
      if (item) {
        counts[item] = (counts[item] || 0) + 1;
      }
    });
    
    let max = 0;
    let mostCommon = null;
    for (const [item, count] of Object.entries(counts)) {
      if (count > max) {
        max = count;
        mostCommon = item;
      }
    }
    
    return mostCommon;
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache = {
      year: null,
      events: null,
      mapState: null,
      activeRegions: null
    };
  }

  /**
   * Export data as JSON (for debugging/analysis)
   */
  exportData() {
    return {
      timeline: this.timeline,
      civilizations: Array.from(this.civilizations.entries()),
      regions: Array.from(this.regions.entries()),
      eras: Array.from(this.geologicalEras.entries()),
      influenceGraph: this.influenceGraph,
      clusters: this.clusters,
      stats: this.stats
    };
  }
}

// ═══════════════════════════════════════════════════════════
//  GLOBAL INSTANCE
// ═══════════════════════════════════════════════════════════

// Create global instance
window.GEOTOPIA_DATA = new GEOTOPIADataEngine();

console.log('✅ GEOTOPIA Data Master Index loaded');
