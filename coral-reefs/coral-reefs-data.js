/* ========================================
   CORAL REEFS EXPLORER - DATA CONFIGURATION
   Main data file with utilities and configuration
   ======================================== */

// ===== DATA CONFIGURATION =====
const REEF_CONFIG = {
    // Image sources from Unsplash and Pixabay
    imageSources: {
        unsplash: 'https://images.unsplash.com/',
        pixabay: 'https://pixabay.com/get/'
    },
    
    // Default values
    defaults: {
        temperature: '24-30°C',
        salinity: '34-36 ppt',
        visibility: '15-30m',
        growthRate: '1-3 cm per year'
    },
    
    // Reef type descriptions
    typeDescriptions: {
        'Barrier Reef': 'A reef separated from the mainland or island shore by a deep channel or lagoon',
        'Fringing Reef': 'A reef that is directly attached to a shore or borders it with shallow water',
        'Atoll': 'A ring-shaped coral reef encircling a lagoon partially or completely',
        'Patch Reef': 'An isolated, small reef formation that grows up from the open bottom of an island platform or continental shelf',
        'Platform Reef': 'A reef that forms on a submerged platform and grows in all directions',
        'Bank Reef': 'A linear or semicircular reef that develops on high points of the sea floor',
        'Ribbon Reef': 'A long, narrow reef that follows the edge of a continental shelf',
        'Apron Reef': 'A reef that slopes away from the shore like a fringing reef but is more sloped',
        'Table Reef': 'A flat-topped reef isolated from the shore'
    }
};

// ===== REEF DATA UTILITIES =====
const ReefDataUtils = {
    // Generate consistent image URLs
    getReefImage: function(query, width = 400, height = 400) {
        const searchTerms = encodeURIComponent(query + ' coral reef underwater');
        return `https://source.unsplash.com/${width}x${height}/?${searchTerms}`;
    },
    
    // Format size display
    formatSize: function(value, unit) {
        if (typeof value === 'number') {
            return `${value.toLocaleString()} ${unit}`;
        }
        return value;
    },
    
    // Calculate biodiversity score
    calculateBiodiversityScore: function(reef) {
        let score = 0;
        if (reef.biodiversity) {
            const b = reef.biodiversity;
            score += (parseInt(b.coralSpecies) || 0) * 0.3;
            score += (parseInt(b.fishSpecies) || 0) * 0.4;
            score += (parseInt(b.turtleSpecies) || 0) * 5;
            score += (parseInt(b.sharkSpecies) || 0) * 3;
        }
        return Math.round(score);
    },
    
    // Get threat level color
    getThreatColor: function(level) {
        const colors = {
            'high': '#FF4444',
            'medium': '#FFB344',
            'low': '#44BB44',
            'critical': '#CC0000'
        };
        return colors[level.toLowerCase()] || colors.medium;
    },
    
    // Generate polygon coordinates for reef shape
    generateReefPolygon: function(centerLat, centerLng, size, shape = 'irregular') {
        const points = [];
        const numPoints = shape === 'atoll' ? 36 : 12;
        const baseRadius = Math.sqrt(size) / 100;
        
        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * 2 * Math.PI;
            const variance = shape === 'irregular' ? (Math.random() * 0.3 + 0.85) : 1;
            const r = baseRadius * variance;
            
            points.push([
                centerLat + r * Math.cos(angle),
                centerLng + r * Math.sin(angle) * 1.2
            ]);
        }
        
        return points;
    }
};

// ===== OCEAN CURRENT DATA =====
const OCEAN_CURRENTS = {
    'East Australian Current': {
        path: [[-10, 150], [-15, 152], [-20, 154], [-25, 153], [-30, 152]],
        color: '#4169E1'
    },
    'Gulf Stream': {
        path: [[25, -80], [30, -78], [35, -75], [40, -70], [45, -60]],
        color: '#4169E1'
    },
    'Kuroshio Current': {
        path: [[20, 125], [25, 130], [30, 135], [35, 140], [40, 145]],
        color: '#4169E1'
    },
    'South Equatorial Current': {
        path: [[-5, -170], [-5, -150], [-5, -130], [-5, -110]],
        color: '#4169E1'
    },
    'North Equatorial Current': {
        path: [[10, 130], [10, 150], [10, 170], [10, -170]],
        color: '#4169E1'
    },
    'Caribbean Current': {
        path: [[12, -65], [15, -70], [18, -75], [20, -80]],
        color: '#4169E1'
    },
    'Agulhas Current': {
        path: [[-25, 35], [-30, 32], [-35, 28], [-40, 25]],
        color: '#4169E1'
    },
    'Indonesia Throughflow': {
        path: [[0, 120], [-5, 125], [-10, 130], [-15, 125]],
        color: '#4169E1'
    }
};

// ===== MARINE PROTECTED AREA DATA =====
const MPA_DATA = {
    'Great Barrier Reef Marine Park': {
        established: 1975,
        area: 344400,
        coverage: '100%'
    },
    'Papahānaumokuākea Marine National Monument': {
        established: 2006,
        area: 1510000,
        coverage: '100%'
    },
    'Coral Sea Marine Park': {
        established: 2012,
        area: 989842,
        coverage: '100%'
    },
    'Florida Keys National Marine Sanctuary': {
        established: 1990,
        area: 9900,
        coverage: '100%'
    }
};

// ===== DEFAULT GALLERY IMAGES =====
const DEFAULT_GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
    'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600',
    'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600',
    'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600'
];

// ===== REEF IMAGES DATABASE =====
const REEF_IMAGES = {
    // Great Barrier Reef
    greatBarrier: {
        main: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        background: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        gallery: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
            'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600',
            'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
            'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600',
            'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600',
            'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600'
        ]
    },
    // Generic coral reef images for different types
    barrier: {
        main: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800',
        background: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920',
        gallery: DEFAULT_GALLERY_IMAGES
    },
    fringing: {
        main: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800',
        background: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920',
        gallery: DEFAULT_GALLERY_IMAGES
    },
    atoll: {
        main: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        background: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        gallery: DEFAULT_GALLERY_IMAGES
    },
    patch: {
        main: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800',
        background: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1920',
        gallery: DEFAULT_GALLERY_IMAGES
    }
};

// ===== SPECIFIC REEF IMAGES =====
const SPECIFIC_REEF_IMAGES = {
    1: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',  // Great Barrier Reef
    2: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',  // Mesoamerican
    3: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400',  // New Caledonia
    4: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400', // Red Sea
    5: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400', // Andros
    6: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=400', // Florida
    7: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400', // Belize
    8: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400', // Maldives
    9: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400',  // Philippines
    10: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', // Fiji
    11: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400', // Raja Ampat
    12: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400', // Tubbataha
    13: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400', // Apo Reef
    14: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400', // Ningaloo
    15: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=400', // Aldabra
    16: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400', // Chagos
    17: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400', // Palau
    18: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400',  // Wakatobi
    19: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', // Komodo
    20: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400'  // Bunaken
};

// ===== NOTABLE MARINE SPECIES =====
const NOTABLE_SPECIES = {
    commonFish: [
        'Clownfish', 'Parrotfish', 'Butterflyfish', 'Angelfish', 'Surgeonfish',
        'Damselfish', 'Wrasse', 'Grouper', 'Snapper', 'Triggerfish'
    ],
    sharks: [
        'Blacktip Reef Shark', 'Whitetip Reef Shark', 'Grey Reef Shark',
        'Hammerhead Shark', 'Whale Shark', 'Nurse Shark', 'Tiger Shark'
    ],
    turtles: [
        'Green Sea Turtle', 'Hawksbill Turtle', 'Loggerhead Turtle',
        'Leatherback Turtle', 'Olive Ridley Turtle', 'Flatback Turtle'
    ],
    rays: [
        'Manta Ray', 'Eagle Ray', 'Stingray', 'Blue-spotted Ray'
    ],
    corals: [
        'Staghorn Coral', 'Brain Coral', 'Table Coral', 'Elkhorn Coral',
        'Mushroom Coral', 'Plate Coral', 'Fire Coral', 'Fan Coral'
    ],
    invertebrates: [
        'Giant Clam', 'Sea Cucumber', 'Crown-of-Thorns Starfish',
        'Octopus', 'Nautilus', 'Sea Urchin', 'Moray Eel'
    ]
};

// ===== DATA VALIDATION =====
function validateReefData(reef) {
    const required = ['id', 'name', 'country', 'ocean', 'type', 'size'];
    const missing = required.filter(field => !reef[field]);
    
    if (missing.length > 0) {
        console.warn(`Reef ${reef.id || 'unknown'} missing fields: ${missing.join(', ')}`);
        return false;
    }
    return true;
}

// ===== DATA EXPORT CHECK =====
function getAllReefData() {
    const allData = [];
    
    for (let i = 1; i <= 10; i++) {
        const varName = `CORAL_REEFS_${i}`;
        if (typeof window[varName] !== 'undefined') {
            allData.push(...window[varName]);
        }
    }
    
    return allData.sort((a, b) => {
        const sizeA = parseFloat(a.size.replace(/[^0-9.]/g, '')) || 0;
        const sizeB = parseFloat(b.size.replace(/[^0-9.]/g, '')) || 0;
        return sizeB - sizeA;
    });
}

// ===== STATISTICS CALCULATOR =====
function calculateReefStatistics(reefs) {
    const stats = {
        totalReefs: reefs.length,
        totalCountries: new Set(reefs.map(r => r.country)).size,
        byType: {},
        byOcean: {},
        totalArea: 0,
        averageSpecies: 0
    };
    
    reefs.forEach(reef => {
        // Count by type
        stats.byType[reef.type] = (stats.byType[reef.type] || 0) + 1;
        
        // Count by ocean
        stats.byOcean[reef.ocean] = (stats.byOcean[reef.ocean] || 0) + 1;
        
        // Calculate total area
        const areaMatch = reef.area?.match(/[\d,]+/);
        if (areaMatch) {
            stats.totalArea += parseInt(areaMatch[0].replace(/,/g, ''));
        }
        
        // Average species
        if (reef.biodiversity?.fishSpecies) {
            stats.averageSpecies += parseInt(reef.biodiversity.fishSpecies) || 0;
        }
    });
    
    stats.averageSpecies = Math.round(stats.averageSpecies / reefs.length);
    
    return stats;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        REEF_CONFIG,
        ReefDataUtils,
        OCEAN_CURRENTS,
        MPA_DATA,
        REEF_IMAGES,
        SPECIFIC_REEF_IMAGES,
        NOTABLE_SPECIES,
        DEFAULT_GALLERY_IMAGES,
        validateReefData,
        getAllReefData,
        calculateReefStatistics
    };
}
