/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Base Data File - Categories & Configuration
   ============================================ */

// ============================================
// CATEGORY DEFINITIONS
// ============================================

const UPSC_CATEGORIES = {
    'geomorphology': {
        id: 'geomorphology',
        name: 'Geomorphology',
        icon: '🌋',
        color: '#FF6B6B',
        colorRGB: '255, 107, 107',
        description: 'Study of Earth\'s landforms and the processes that shape them',
        themes: ['tectonic', 'volcanic', 'earthquake'],
        totalTopics: 8,
        keywords: ['plate tectonics', 'volcanoes', 'earthquakes', 'weathering', 'erosion', 'landforms']
    },
    
    'climatology': {
        id: 'climatology',
        name: 'Climatology',
        icon: '🌤️',
        color: '#4ECDC4',
        colorRGB: '78, 205, 196',
        description: 'Study of climate, weather patterns, and atmospheric phenomena',
        themes: ['atmosphere', 'wind', 'cyclone', 'monsoon'],
        totalTopics: 10,
        keywords: ['atmosphere', 'temperature', 'pressure', 'winds', 'cyclones', 'climate types']
    },
    
    'oceanography': {
        id: 'oceanography',
        name: 'Oceanography',
        icon: '🌊',
        color: '#00B4D8',
        colorRGB: '0, 180, 216',
        description: 'Study of oceans, their movements, and marine environments',
        themes: ['ocean', 'current', 'tide'],
        totalTopics: 6,
        keywords: ['ocean currents', 'tides', 'salinity', 'ocean floor', 'waves']
    },
    
    'biogeography': {
        id: 'biogeography',
        name: 'Biogeography',
        icon: '🌿',
        color: '#2ECC71',
        colorRGB: '46, 204, 113',
        description: 'Study of distribution of species and ecosystems',
        themes: ['forest', 'biome', 'soil'],
        totalTopics: 6,
        keywords: ['soil', 'biomes', 'vegetation', 'forests', 'grasslands']
    },
    
    'landforms': {
        id: 'landforms',
        name: 'Landforms',
        icon: '🏔️',
        color: '#8B4513',
        colorRGB: '139, 69, 19',
        description: 'Study of various landform features created by different agents',
        themes: ['river', 'desert', 'coastal', 'himalaya'],
        totalTopics: 6,
        keywords: ['fluvial', 'glacial', 'aeolian', 'karst', 'coastal']
    },
    
    'india-physical': {
        id: 'india-physical',
        name: 'India Physical',
        icon: '🗺️',
        color: '#9B59B6',
        colorRGB: '155, 89, 182',
        description: 'Physical geography of Indian subcontinent',
        themes: ['himalaya', 'plateau', 'coastal'],
        totalTopics: 8,
        keywords: ['himalayas', 'plains', 'peninsular plateau', 'coastal plains', 'islands']
    },
    
    'india-climate': {
        id: 'india-climate',
        name: 'India Climate',
        icon: '🌧️',
        color: '#3498DB',
        colorRGB: '52, 152, 219',
        description: 'Climate patterns and weather systems of India',
        themes: ['monsoon', 'cyclone'],
        totalTopics: 6,
        keywords: ['monsoon', 'rainfall', 'western disturbances', 'cyclones', 'seasons']
    },
    
    'india-drainage': {
        id: 'india-drainage',
        name: 'India Drainage',
        icon: '💧',
        color: '#00CED1',
        colorRGB: '0, 206, 209',
        description: 'River systems and drainage patterns of India',
        themes: ['river'],
        totalTopics: 6,
        keywords: ['ganga', 'indus', 'brahmaputra', 'peninsular rivers', 'river linking']
    },
    
    'india-resources': {
        id: 'india-resources',
        name: 'India Resources',
        icon: '🌾',
        color: '#F39C12',
        colorRGB: '243, 156, 18',
        description: 'Natural resources and agriculture of India',
        themes: ['agriculture', 'forest'],
        totalTopics: 8,
        keywords: ['forests', 'minerals', 'agriculture', 'irrigation', 'energy']
    },
    
    'economic': {
        id: 'economic',
        name: 'Economic Geography',
        icon: '📊',
        color: '#F1C40F',
        colorRGB: '241, 196, 15',
        description: 'Economic activities and their geographical distribution',
        themes: ['industry', 'agriculture'],
        totalTopics: 6,
        keywords: ['agriculture', 'industries', 'trade', 'transport', 'development']
    },
    
    'human': {
        id: 'human',
        name: 'Human Geography',
        icon: '👥',
        color: '#E91E63',
        colorRGB: '233, 30, 99',
        description: 'Study of human activities and their spatial distribution',
        themes: ['population'],
        totalTopics: 6,
        keywords: ['population', 'migration', 'urbanization', 'settlements']
    },
    
    'models': {
        id: 'models',
        name: 'Models & Theories',
        icon: '🔬',
        color: '#708090',
        colorRGB: '112, 128, 144',
        description: 'Geographical models and theoretical frameworks',
        themes: ['models'],
        totalTopics: 6,
        keywords: ['DTM', 'Von Thunen', 'Weber', 'Christaller', 'Rostow']
    },
    
    'environment': {
        id: 'environment',
        name: 'Environment',
        icon: '♻️',
        color: '#27AE60',
        colorRGB: '39, 174, 96',
        description: 'Environmental issues, conservation, and sustainable development',
        themes: ['environment', 'climate_change'],
        totalTopics: 8,
        keywords: ['climate change', 'SDGs', 'disasters', 'conservation', 'pollution']
    }
};

// ============================================
// THEME CONFIGURATIONS
// ============================================

const TOPIC_THEMES = {
    // Geomorphology Themes
    tectonic: {
        background: 'linear-gradient(135deg, #1a0a0a 0%, #2d1f1f 50%, #4a2020 100%)',
        particleType: 'floating-plates',
        particleColor: 'rgba(255, 68, 68, 0.5)',
        accentColor: '#FF4444'
    },
    
    volcanic: {
        background: 'linear-gradient(135deg, #1a0505 0%, #3d0f0f 50%, #5a1010 100%)',
        particleType: 'lava-bubbles',
        particleColor: 'rgba(255, 107, 53, 0.6)',
        accentColor: '#FF6B35'
    },
    
    earthquake: {
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #2d2d4a 100%)',
        particleType: 'seismic-waves',
        particleColor: 'rgba(255, 217, 61, 0.4)',
        accentColor: '#FFD93D'
    },
    
    // Climatology Themes
    atmosphere: {
        background: 'linear-gradient(180deg, #000428 0%, #004e92 50%, #87CEEB 100%)',
        particleType: 'clouds',
        particleColor: 'rgba(255, 255, 255, 0.2)',
        accentColor: '#00D4FF'
    },
    
    wind: {
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        particleType: 'wind-lines',
        particleColor: 'rgba(78, 205, 196, 0.5)',
        accentColor: '#4ECDC4'
    },
    
    cyclone: {
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
        particleType: 'rain-spiral',
        particleColor: 'rgba(119, 141, 169, 0.5)',
        accentColor: '#778da9'
    },
    
    monsoon: {
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #1f4068 100%)',
        particleType: 'rain-drops',
        particleColor: 'rgba(77, 168, 218, 0.6)',
        accentColor: '#4da8da'
    },
    
    // Oceanography Themes
    ocean: {
        background: 'linear-gradient(180deg, #0a1628 0%, #0d2137 50%, #1a4a6e 100%)',
        particleType: 'bubbles',
        particleColor: 'rgba(0, 206, 209, 0.4)',
        accentColor: '#00CED1'
    },
    
    current: {
        background: 'linear-gradient(135deg, #0a192f 0%, #172a45 50%, #1f4068 100%)',
        particleType: 'flow-lines',
        particleColor: 'rgba(100, 255, 218, 0.5)',
        accentColor: '#64ffda'
    },
    
    tide: {
        background: 'linear-gradient(180deg, #0d1b2a 0%, #1b3a4b 50%, #2d6a7a 100%)',
        particleType: 'wave-motion',
        particleColor: 'rgba(72, 202, 228, 0.4)',
        accentColor: '#48cae4'
    },
    
    // Biogeography Themes
    soil: {
        background: 'linear-gradient(180deg, #2d1f1f 0%, #4a3728 50%, #5d4e37 100%)',
        particleType: 'soil-layers',
        particleColor: 'rgba(139, 69, 19, 0.4)',
        accentColor: '#8B4513'
    },
    
    forest: {
        background: 'linear-gradient(180deg, #0a1f0a 0%, #1a3a1a 50%, #2d5a2d 100%)',
        particleType: 'falling-leaves',
        particleColor: 'rgba(34, 139, 34, 0.5)',
        accentColor: '#228B22'
    },
    
    biome: {
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5a4a 100%)',
        particleType: 'ecosystem-pulse',
        particleColor: 'rgba(46, 204, 113, 0.4)',
        accentColor: '#2ECC71'
    },
    
    // India Geography Themes
    himalaya: {
        background: 'linear-gradient(180deg, #0a1628 0%, #1a3a5c 50%, #87CEEB 100%)',
        particleType: 'snowflakes',
        particleColor: 'rgba(232, 244, 248, 0.6)',
        accentColor: '#E8F4F8'
    },
    
    river: {
        background: 'linear-gradient(135deg, #0d2137 0%, #1a4a6e 50%, #2d7d9a 100%)',
        particleType: 'water-flow',
        particleColor: 'rgba(0, 180, 216, 0.5)',
        accentColor: '#00B4D8'
    },
    
    plateau: {
        background: 'linear-gradient(135deg, #2d1f1f 0%, #5d4e37 50%, #8b7355 100%)',
        particleType: 'dust-motes',
        particleColor: 'rgba(205, 133, 63, 0.4)',
        accentColor: '#CD853F'
    },
    
    coastal: {
        background: 'linear-gradient(180deg, #87CEEB 0%, #48cae4 50%, #0077b6 100%)',
        particleType: 'beach-waves',
        particleColor: 'rgba(255, 228, 181, 0.4)',
        accentColor: '#FFE4B5'
    },
    
    desert: {
        background: 'linear-gradient(180deg, #1a0f05 0%, #3d2817 50%, #c2a679 100%)',
        particleType: 'sand-particles',
        particleColor: 'rgba(237, 201, 175, 0.5)',
        accentColor: '#EDC9AF'
    },
    
    // Economic & Human Themes
    agriculture: {
        background: 'linear-gradient(180deg, #0a1f0a 0%, #2d5a2d 50%, #90EE90 100%)',
        particleType: 'crop-sway',
        particleColor: 'rgba(50, 205, 50, 0.4)',
        accentColor: '#32CD32'
    },
    
    industry: {
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 50%, #4a4a6a 100%)',
        particleType: 'smoke-rise',
        particleColor: 'rgba(112, 128, 144, 0.4)',
        accentColor: '#708090'
    },
    
    population: {
        background: 'linear-gradient(135deg, #1a0a20 0%, #2d1a3a 50%, #4a2a5a 100%)',
        particleType: 'dot-pulse',
        particleColor: 'rgba(155, 89, 182, 0.5)',
        accentColor: '#9B59B6'
    },
    
    // Environment Themes
    environment: {
        background: 'linear-gradient(135deg, #0a2f1a 0%, #1a5a3a 50%, #2d8a5a 100%)',
        particleType: 'green-leaves',
        particleColor: 'rgba(39, 174, 96, 0.5)',
        accentColor: '#27AE60'
    },
    
    climate_change: {
        background: 'linear-gradient(135deg, #1a0a0a 0%, #3d2020 50%, #5a3030 100%)',
        particleType: 'warning-pulse',
        particleColor: 'rgba(231, 76, 60, 0.5)',
        accentColor: '#E74C3C'
    },
    
    // Models Theme
    models: {
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 50%, #3d3d5c 100%)',
        particleType: 'grid-data',
        particleColor: 'rgba(112, 128, 144, 0.3)',
        accentColor: '#708090'
    }
};

// ============================================
// DIFFICULTY & RELEVANCE CONFIGURATIONS
// ============================================

const DIFFICULTY_LEVELS = {
    easy: {
        label: 'Easy',
        color: '#2ECC71',
        colorLight: 'rgba(46, 204, 113, 0.15)',
        icon: '🟢',
        description: 'Basic concepts, easy to understand'
    },
    medium: {
        label: 'Medium',
        color: '#F39C12',
        colorLight: 'rgba(243, 156, 18, 0.15)',
        icon: '🟡',
        description: 'Moderate complexity, requires focus'
    },
    hard: {
        label: 'Hard',
        color: '#E74C3C',
        colorLight: 'rgba(231, 76, 60, 0.15)',
        icon: '🔴',
        description: 'Complex concepts, detailed understanding needed'
    }
};

const UPSC_RELEVANCE = {
    high: {
        label: 'High',
        stars: 3,
        color: '#FFD700',
        description: 'Frequently asked in UPSC, must study'
    },
    medium: {
        label: 'Medium',
        stars: 2,
        color: '#FFA500',
        description: 'Occasionally asked, important to know'
    },
    low: {
        label: 'Low',
        stars: 1,
        color: '#C0C0C0',
        description: 'Rarely asked, good for comprehensive prep'
    }
};

// ============================================
// MEMORY HOOK TYPES
// ============================================

const MEMORY_HOOK_TYPES = {
    mnemonic: {
        label: 'Mnemonic',
        icon: '🧠',
        color: '#9B59B6',
        description: 'Memory aid using patterns or associations'
    },
    story: {
        label: 'Story',
        icon: '📖',
        color: '#3498DB',
        description: 'Narrative to remember concepts'
    },
    comparison: {
        label: 'Comparison',
        icon: '⚖️',
        color: '#E67E22',
        description: 'Relating to familiar concepts'
    },
    visual: {
        label: 'Visual',
        icon: '👁️',
        color: '#2ECC71',
        description: 'Picture-based memory technique'
    },
    acronym: {
        label: 'Acronym',
        icon: '🔤',
        color: '#E91E63',
        description: 'Word formed from first letters'
    },
    rhyme: {
        label: 'Rhyme',
        icon: '🎵',
        color: '#00BCD4',
        description: 'Rhythmic pattern for memorization'
    },
    analogy: {
        label: 'Analogy',
        icon: '🔗',
        color: '#FF5722',
        description: 'Similarity between concepts'
    }
};

// ============================================
// DIAGRAM TYPES
// ============================================

const DIAGRAM_TYPES = {
    'comparison-chart': {
        label: 'Comparison Chart',
        icon: '📊',
        description: 'Side-by-side comparison of concepts'
    },
    'cross-section': {
        label: 'Cross Section',
        icon: '🔍',
        description: 'Internal structure visualization'
    },
    'map': {
        label: 'Map',
        icon: '🗺️',
        description: 'Geographical representation'
    },
    'flowchart': {
        label: 'Flowchart',
        icon: '🔀',
        description: 'Process or sequence diagram'
    },
    'cycle': {
        label: 'Cycle Diagram',
        icon: '🔄',
        description: 'Circular process representation'
    },
    'hierarchy': {
        label: 'Hierarchy',
        icon: '📈',
        description: 'Levels or classification diagram'
    },
    'timeline': {
        label: 'Timeline',
        icon: '📅',
        description: 'Chronological sequence'
    },
    'pie-chart': {
        label: 'Pie Chart',
        icon: '🥧',
        description: 'Proportional distribution'
    },
    'bar-graph': {
        label: 'Bar Graph',
        icon: '📶',
        description: 'Comparative data visualization'
    }
};

// ============================================
// UPSC EXAM TYPES
// ============================================

const EXAM_TYPES = {
    prelims: {
        label: 'Prelims',
        fullName: 'Preliminary Examination',
        color: '#3498DB',
        icon: '📝'
    },
    mains: {
        label: 'Mains',
        fullName: 'Main Examination',
        color: '#9B59B6',
        icon: '📄'
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get category information by ID
 * @param {string} categoryId - Category identifier
 * @returns {object} Category information
 */
function getCategoryInfo(categoryId) {
    return UPSC_CATEGORIES[categoryId] || {
        id: categoryId,
        name: categoryId,
        icon: '📚',
        color: '#00D4FF',
        colorRGB: '0, 212, 255'
    };
}

/**
 * Get theme configuration
 * @param {string} themeId - Theme identifier
 * @returns {object} Theme configuration
 */
function getThemeConfig(themeId) {
    return TOPIC_THEMES[themeId] || TOPIC_THEMES['atmosphere'];
}

/**
 * Get difficulty configuration
 * @param {string} level - Difficulty level
 * @returns {object} Difficulty configuration
 */
function getDifficultyConfig(level) {
    return DIFFICULTY_LEVELS[level] || DIFFICULTY_LEVELS['medium'];
}

/**
 * Get relevance configuration
 * @param {string} level - Relevance level
 * @returns {object} Relevance configuration
 */
function getRelevanceConfig(level) {
    return UPSC_RELEVANCE[level] || UPSC_RELEVANCE['medium'];
}

/**
 * Generate relevance stars HTML
 * @param {string} level - Relevance level
 * @returns {string} HTML string for stars
 */
function generateRelevanceStars(level) {
    const config = getRelevanceConfig(level);
    let stars = '';
    for (let i = 0; i < 3; i++) {
        if (i < config.stars) {
            stars += '⭐';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

/**
 * Create a topic template with all required fields
 * @param {object} data - Partial topic data
 * @returns {object} Complete topic object
 */
function createTopicTemplate(data) {
    return {
        id: data.id || generateTopicId(data.name),
        name: data.name || 'Untitled Topic',
        icon: data.icon || '📚',
        category: data.category || 'geomorphology',
        theme: data.theme || 'atmosphere',
        difficulty: data.difficulty || 'medium',
        upscRelevance: data.upscRelevance || 'medium',
        
        mindMap: data.mindMap || {
            central: data.name || 'Topic',
            branches: []
        },
        
        memoryHooks: data.memoryHooks || [],
        
        conceptBlocks: data.conceptBlocks || [],
        
        diagrams: data.diagrams || [],
        
        quickFacts: data.quickFacts || [],
        
        upscTraps: data.upscTraps || [],
        
        revisionBox: data.revisionBox || {
            title: '⚡ 30-Second Revision',
            points: []
        },
        
        pyqs: data.pyqs || []
    };
}

/**
 * Generate topic ID from name
 * @param {string} name - Topic name
 * @returns {string} Generated ID
 */
function generateTopicId(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

/**
 * Validate topic data structure
 * @param {object} topic - Topic object to validate
 * @returns {object} Validation result
 */
function validateTopic(topic) {
    const errors = [];
    const warnings = [];
    
    // Required fields
    if (!topic.id) errors.push('Missing ID');
    if (!topic.name) errors.push('Missing name');
    if (!topic.category) errors.push('Missing category');
    
    // Recommended fields
    if (!topic.mindMap || !topic.mindMap.branches || topic.mindMap.branches.length === 0) {
        warnings.push('No mind map branches');
    }
    if (!topic.memoryHooks || topic.memoryHooks.length === 0) {
        warnings.push('No memory hooks');
    }
    if (!topic.conceptBlocks || topic.conceptBlocks.length === 0) {
        warnings.push('No concept blocks');
    }
    if (!topic.quickFacts || topic.quickFacts.length === 0) {
        warnings.push('No quick facts');
    }
    if (!topic.revisionBox || !topic.revisionBox.points || topic.revisionBox.points.length === 0) {
        warnings.push('No revision points');
    }
    
    return {
        valid: errors.length === 0,
        errors: errors,
        warnings: warnings
    };
}

/**
 * Get all category IDs
 * @returns {array} Array of category IDs
 */
function getAllCategoryIds() {
    return Object.keys(UPSC_CATEGORIES);
}

/**
 * Get topics count per category
 * @param {array} allTopics - Array of all topics
 * @returns {object} Count per category
 */
function getTopicsCountByCategory(allTopics) {
    const counts = {};
    
    getAllCategoryIds().forEach(catId => {
        counts[catId] = 0;
    });
    
    allTopics.forEach(topic => {
        if (counts.hasOwnProperty(topic.category)) {
            counts[topic.category]++;
        }
    });
    
    return counts;
}

/**
 * Filter topics by multiple criteria
 * @param {array} topics - Array of topics
 * @param {object} filters - Filter criteria
 * @returns {array} Filtered topics
 */
function filterTopics(topics, filters) {
    return topics.filter(topic => {
        // Category filter
        if (filters.category && filters.category !== 'all') {
            if (topic.category !== filters.category) return false;
        }
        
        // Difficulty filter
        if (filters.difficulties && filters.difficulties.length > 0) {
            if (!filters.difficulties.includes(topic.difficulty)) return false;
        }
        
        // Relevance filter
        if (filters.relevances && filters.relevances.length > 0) {
            if (!filters.relevances.includes(topic.upscRelevance)) return false;
        }
        
        // Search filter
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            const nameMatch = topic.name.toLowerCase().includes(searchLower);
            const categoryMatch = topic.category.toLowerCase().includes(searchLower);
            if (!nameMatch && !categoryMatch) return false;
        }
        
        return true;
    });
}

/**
 * Sort topics by criteria
 * @param {array} topics - Array of topics
 * @param {string} sortBy - Sort criteria
 * @param {string} order - 'asc' or 'desc'
 * @returns {array} Sorted topics
 */
function sortTopics(topics, sortBy, order = 'asc') {
    const sortedTopics = [...topics];
    
    const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
    const relevanceOrder = { high: 1, medium: 2, low: 3 };
    
    sortedTopics.sort((a, b) => {
        let comparison = 0;
        
        switch (sortBy) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'difficulty':
                comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                break;
            case 'relevance':
                comparison = relevanceOrder[a.upscRelevance] - relevanceOrder[b.upscRelevance];
                break;
            case 'category':
                comparison = a.category.localeCompare(b.category);
                break;
            default:
                comparison = 0;
        }
        
        return order === 'desc' ? -comparison : comparison;
    });
    
    return sortedTopics;
}

// ============================================
// EXPORT FOR USE IN OTHER FILES
// ============================================

// Make available globally
window.UPSC_CATEGORIES = UPSC_CATEGORIES;
window.TOPIC_THEMES = TOPIC_THEMES;
window.DIFFICULTY_LEVELS = DIFFICULTY_LEVELS;
window.UPSC_RELEVANCE = UPSC_RELEVANCE;
window.MEMORY_HOOK_TYPES = MEMORY_HOOK_TYPES;
window.DIAGRAM_TYPES = DIAGRAM_TYPES;
window.EXAM_TYPES = EXAM_TYPES;

// Helper functions
window.getCategoryInfo = getCategoryInfo;
window.getThemeConfig = getThemeConfig;
window.getDifficultyConfig = getDifficultyConfig;
window.getRelevanceConfig = getRelevanceConfig;
window.generateRelevanceStars = generateRelevanceStars;
window.createTopicTemplate = createTopicTemplate;
window.generateTopicId = generateTopicId;
window.validateTopic = validateTopic;
window.getAllCategoryIds = getAllCategoryIds;
window.getTopicsCountByCategory = getTopicsCountByCategory;
window.filterTopics = filterTopics;
window.sortTopics = sortTopics;

console.log('📚 Base Data Loaded:', Object.keys(UPSC_CATEGORIES).length, 'categories');
console.log('🎨 Themes Loaded:', Object.keys(TOPIC_THEMES).length, 'themes');
