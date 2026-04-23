/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — MASTER DATA REGISTRY
 * All 134 Maps | 14 Categories | Complete UPSC Coverage
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */ 

window.DHARAVERSE_MAPS = {

  // ── CATEGORY REGISTRY ──
  categories: [
    {
      id: 'india-physical',
      label: 'India Physical',
      shortLabel: 'India Physical',
      icon: 'fas fa-mountain',
      color: '#8B4513',
      colorLight: 'rgba(139, 69, 19, 0.2)',
      mapCount: 10,
      mapRange: [1, 10],
      file: 'india-physical-maps.js',
      description: 'Mountains, plains, plateaus, coasts & islands'
    },
    {
      id: 'india-drainage',
      label: 'India Drainage & Rivers',
      shortLabel: 'Drainage',
      icon: 'fas fa-water',
      color: '#1E90FF',
      colorLight: 'rgba(30, 144, 255, 0.2)',
      mapCount: 12,
      mapRange: [11, 22],
      file: 'india-drainage-maps.js',
      description: 'Rivers, lakes, wetlands, glaciers & dams'
    },
    {
      id: 'india-climate',
      label: 'India Climate',
      shortLabel: 'India Climate',
      icon: 'fas fa-cloud-sun-rain',
      color: '#FF7A00',
      colorLight: 'rgba(255, 122, 0, 0.2)',
      mapCount: 11,
      mapRange: [23, 33],
      file: 'india-climate-maps.js',
      description: 'Monsoon, rainfall, temperature & weather patterns'
    },
    {
      id: 'india-resources',
      label: 'India Resources',
      shortLabel: 'Resources',
      icon: 'fas fa-gem',
      color: '#00CC88',
      colorLight: 'rgba(0, 204, 136, 0.2)',
      mapCount: 12,
      mapRange: [34, 45],
      file: 'india-resources-maps.js',
      description: 'Minerals, energy, agriculture & industries'
    },
    {
      id: 'biogeography',
      label: 'Biogeography',
      shortLabel: 'Biogeography',
      icon: 'fas fa-leaf',
      color: '#22C55E',
      colorLight: 'rgba(34, 197, 94, 0.2)',
      mapCount: 10,
      mapRange: [46, 55],
      file: 'biogeography-maps.js',
      description: 'Forests, wildlife, national parks & biodiversity'
    },
    {
      id: 'environment',
      label: 'Environment',
      shortLabel: 'Environment',
      icon: 'fas fa-recycle',
      color: '#10B981',
      colorLight: 'rgba(16, 185, 129, 0.2)',
      mapCount: 9,
      mapRange: [56, 64],
      file: 'environment-maps.js',
      description: 'Pollution, disasters, erosion & vulnerability'
    },
    {
      id: 'geomorphology',
      label: 'Geomorphology',
      shortLabel: 'Geomorphology',
      icon: 'fas fa-layer-group',
      color: '#A16207',
      colorLight: 'rgba(161, 98, 7, 0.2)',
      mapCount: 8,
      mapRange: [65, 72],
      file: 'geomorphology-maps.js',
      description: 'Tectonic plates, rocks, faults & landforms'
    },
    {
      id: 'world-climate',
      label: 'World Climate',
      shortLabel: 'World Climate',
      icon: 'fas fa-globe',
      color: '#0EA5E9',
      colorLight: 'rgba(14, 165, 233, 0.2)',
      mapCount: 12,
      mapRange: [73, 84],
      file: 'world-climate-maps.js',
      description: 'Global climate zones, biomes & weather systems'
    },
    {
      id: 'oceanography',
      label: 'Oceanography',
      shortLabel: 'Oceanography',
      icon: 'fas fa-fish',
      color: '#0284C7',
      colorLight: 'rgba(2, 132, 199, 0.2)',
      mapCount: 10,
      mapRange: [85, 94],
      file: 'oceanography-maps.js',
      description: 'Ocean depths, currents, trenches & marine life'
    },
    {
      id: 'economic',
      label: 'Economic Geography',
      shortLabel: 'Economic',
      icon: 'fas fa-chart-line',
      color: '#F59E0B',
      colorLight: 'rgba(245, 158, 11, 0.2)',
      mapCount: 9,
      mapRange: [95, 103],
      file: 'economic-maps.js',
      description: 'Trade, transport, industries & development'
    },
    {
      id: 'human-geography',
      label: 'Human Geography',
      shortLabel: 'Human',
      icon: 'fas fa-users',
      color: '#EC4899',
      colorLight: 'rgba(236, 72, 153, 0.2)',
      mapCount: 10,
      mapRange: [104, 113],
      file: 'human-geography-maps.js',
      description: 'Population, urbanization, languages & religion'
    },
    {
      id: 'base-political',
      label: 'Base & Political',
      shortLabel: 'Political',
      icon: 'fas fa-flag',
      color: '#6366F1',
      colorLight: 'rgba(99, 102, 241, 0.2)',
      mapCount: 8,
      mapRange: [114, 121],
      file: 'base-political-maps.js',
      description: 'Political boundaries, borders & disputed regions'
    },
    {
      id: 'world-landforms',
      label: 'World Landforms',
      shortLabel: 'Landforms',
      icon: 'fas fa-globe-americas',
      color: '#D97706',
      colorLight: 'rgba(217, 119, 6, 0.2)',
      mapCount: 7,
      mapRange: [122, 128],
      file: 'world-landforms-maps.js',
      description: 'Mountains, deserts, plateaus, volcanoes globally'
    },
    {
      id: 'models',
      label: 'Geographical Models',
      shortLabel: 'Models',
      icon: 'fas fa-project-diagram',
      color: '#8B5CF6',
      colorLight: 'rgba(139, 92, 246, 0.2)',
      mapCount: 6,
      mapRange: [129, 134],
      file: 'models-maps.js',
      description: 'Von Thunen, Central Place, DTM & development models'
    }
  ],

  // ── UTILITY: GET CATEGORY BY ID ──
  getCategoryById(id) {
    return this.categories.find(c => c.id === id);
  },

  // ── UTILITY: GET TOTAL MAPS ──
  getTotalMaps() {
    return this.categories.reduce((sum, c) => sum + c.mapCount, 0);
  }
};

/**
 * ── GLOBAL MAP REGISTRY ──
 * Maps from each module register themselves here
 */
window.MAPS_REGISTRY = {};

/**
 * Register maps from a category module
 * @param {string} categoryId
 * @param {Array} mapsArray
 */
window.registerMaps = function(categoryId, mapsArray) {
  window.MAPS_REGISTRY[categoryId] = mapsArray;
  console.log(`✅ Registered ${mapsArray.length} maps for: ${categoryId}`);
};

/**
 * Get all maps flat list
 */
window.getAllMaps = function() {
  const all = [];
  window.DHARAVERSE_MAPS.categories.forEach(cat => {
    const maps = window.MAPS_REGISTRY[cat.id] || [];
    maps.forEach(m => {
      all.push({ ...m, categoryId: cat.id, categoryLabel: cat.label });
    });
  });
  return all;
};

/**
 * Get maps by category
 */
window.getMapsByCategory = function(categoryId) {
  return window.MAPS_REGISTRY[categoryId] || [];
};

/**
 * Get map by global number
 */
window.getMapByNumber = function(mapNum) {
  return window.getAllMaps().find(m => m.mapNum === mapNum);
};
