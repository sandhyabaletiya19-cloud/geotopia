// ============================================
// MOUNTAINS DATA - MAIN COMBINER FILE
// Combines all mountain data from separate files
// ============================================

// Combine all mountain data arrays
const allMountainsData = [
    ...(typeof mountainsData1 !== 'undefined' ? mountainsData1 : []),
    ...(typeof mountainsData2 !== 'undefined' ? mountainsData2 : []),
    ...(typeof mountainsData3 !== 'undefined' ? mountainsData3 : []),
    ...(typeof mountainsData4 !== 'undefined' ? mountainsData4 : []),
    ...(typeof mountainsData5 !== 'undefined' ? mountainsData5 : [])
];

// Sort mountains by highest peak elevation (descending)
const mountainsDataSorted = allMountainsData.sort((a, b) => {
    return b.highestPeak.elevation - a.highestPeak.elevation;
});

// Country flag emoji mapping
const countryFlags = {
    'AF': '🇦🇫', 'AL': '🇦🇱', 'DZ': '🇩🇿', 'AD': '🇦🇩', 'AO': '🇦🇴',
    'AR': '🇦🇷', 'AM': '🇦🇲', 'AU': '🇦🇺', 'AT': '🇦🇹', 'AZ': '🇦🇿',
    'BD': '🇧🇩', 'BY': '🇧🇾', 'BE': '🇧🇪', 'BT': '🇧🇹', 'BO': '🇧🇴',
    'BA': '🇧🇦', 'BR': '🇧🇷', 'BG': '🇧🇬', 'CA': '🇨🇦', 'CL': '🇨🇱',
    'CN': '🇨🇳', 'CO': '🇨🇴', 'CD': '🇨🇩', 'CR': '🇨🇷', 'HR': '🇭🇷',
    'CZ': '🇨🇿', 'DK': '🇩🇰', 'EC': '🇪🇨', 'EG': '🇪🇬', 'ER': '🇪🇷',
    'ET': '🇪🇹', 'FI': '🇫🇮', 'FR': '🇫🇷', 'GE': '🇬🇪', 'DE': '🇩🇪',
    'GR': '🇬🇷', 'GT': '🇬🇹', 'HN': '🇭🇳', 'HU': '🇭🇺', 'IS': '🇮🇸',
    'IN': '🇮🇳', 'ID': '🇮🇩', 'IR': '🇮🇷', 'IQ': '🇮🇶', 'IE': '🇮🇪',
    'IL': '🇮🇱', 'IT': '🇮🇹', 'JP': '🇯🇵', 'JO': '🇯🇴', 'KZ': '🇰🇿',
    'KE': '🇰🇪', 'KG': '🇰🇬', 'LA': '🇱🇦', 'LV': '🇱🇻', 'LB': '🇱🇧',
    'LS': '🇱🇸', 'LI': '🇱🇮', 'LT': '🇱🇹', 'MK': '🇲🇰', 'MG': '🇲🇬',
    'MW': '🇲🇼', 'MY': '🇲🇾', 'MX': '🇲🇽', 'MD': '🇲🇩', 'MC': '🇲🇨',
    'MN': '🇲🇳', 'ME': '🇲🇪', 'MA': '🇲🇦', 'MZ': '🇲🇿', 'MM': '🇲🇲',
    'NA': '🇳🇦', 'NP': '🇳🇵', 'NL': '🇳🇱', 'NZ': '🇳🇿', 'NI': '🇳🇮',
    'NO': '🇳🇴', 'OM': '🇴🇲', 'PK': '🇵🇰', 'PA': '🇵🇦', 'PG': '🇵🇬',
    'PE': '🇵🇪', 'PH': '🇵🇭', 'PL': '🇵🇱', 'PT': '🇵🇹', 'RO': '🇷🇴',
    'RU': '🇷🇺', 'SA': '🇸🇦', 'RS': '🇷🇸', 'SK': '🇸🇰', 'SI': '🇸🇮',
    'ZA': '🇿🇦', 'ES': '🇪🇸', 'LK': '🇱🇰', 'SD': '🇸🇩', 'SE': '🇸🇪',
    'CH': '🇨🇭', 'SY': '🇸🇾', 'TW': '🇹🇼', 'TJ': '🇹🇯', 'TZ': '🇹🇿',
    'TH': '🇹🇭', 'TR': '🇹🇷', 'TM': '🇹🇲', 'UA': '🇺🇦', 'AE': '🇦🇪',
    'GB': '🇬🇧', 'US': '🇺🇸', 'UY': '🇺🇾', 'UZ': '🇺🇿', 'VE': '🇻🇪',
    'VN': '🇻🇳', 'YE': '🇾🇪', 'ZM': '🇿🇲', 'ZW': '🇿🇼', 'UG': '🇺🇬'
};

// Helper function to get elevation class
function getElevationClass(elevation) {
    if (elevation >= 8000) return 'extreme';
    if (elevation >= 6000) return 'very-high';
    if (elevation >= 4000) return 'high';
    if (elevation >= 2000) return 'medium';
    return 'low';
}

// Helper function to format elevation
function formatElevation(elevation) {
    return elevation.toLocaleString() + 'm';
}

// Helper function to get flag image URL
function getFlagImageUrl(countryCode) {
    return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
}

// Get mountain by slug
function getMountainBySlug(slug) {
    return mountainsDataSorted.find(m => m.slug === slug);
}

// Get mountain by ID
function getMountainById(id) {
    return mountainsDataSorted.find(m => m.id === id);
}

// Filter mountains by continent
function filterByContinent(continent) {
    if (continent === 'all') return mountainsDataSorted;
    
    const continentMap = {
        'asia': 'Asia',
        'europe': 'Europe',
        'americas': 'Americas',
        'africa': 'Africa',
        'oceania': 'Oceania'
    };
    
    return mountainsDataSorted.filter(m => m.continent === continentMap[continent]);
}

// Search mountains
function searchMountains(query) {
    const lowerQuery = query.toLowerCase();
    return mountainsDataSorted.filter(m => {
        return m.name.toLowerCase().includes(lowerQuery) ||
               m.countries.some(c => c.name.toLowerCase().includes(lowerQuery)) ||
               m.highestPeak.name.toLowerCase().includes(lowerQuery);
    });
}

// Sort mountains
function sortMountains(mountains, sortBy) {
    const sorted = [...mountains];
    
    switch(sortBy) {
        case 'elevation-desc':
            return sorted.sort((a, b) => b.highestPeak.elevation - a.highestPeak.elevation);
        case 'elevation-asc':
            return sorted.sort((a, b) => a.highestPeak.elevation - b.highestPeak.elevation);
        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'length-desc':
            return sorted.sort((a, b) => b.length - a.length);
        default:
            return sorted;
    }
}

// Get random mountains (excluding current)
function getRandomMountains(excludeId, count = 5) {
    const filtered = mountainsDataSorted.filter(m => m.id !== excludeId);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Statistics
const mountainStats = {
    totalMountains: mountainsDataSorted.length,
    highestPeak: mountainsDataSorted[0]?.highestPeak?.elevation || 8849,
    continents: [...new Set(mountainsDataSorted.map(m => m.continent))],
    totalCountries: [...new Set(mountainsDataSorted.flatMap(m => m.countries.map(c => c.code)))].length
};

console.log(`🏔️ Mountains Data Loaded: ${mountainStats.totalMountains} mountain ranges`);
