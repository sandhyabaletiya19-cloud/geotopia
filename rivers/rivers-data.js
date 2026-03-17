/* ═══════════════════════════════════════════════════════════════
   RIVERS DATA - Main Combiner File
   Combines all river data files (1-10) into single array
   100 Rivers - Sorted by Length (Longest to Shortest)
   ═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────
// The individual data files will define:
// - riversData1 (Rivers 1-10)
// - riversData2 (Rivers 11-20)
// - riversData3 (Rivers 21-30)
// - riversData4 (Rivers 31-40)
// - riversData5 (Rivers 41-50)
// - riversData6 (Rivers 51-60)
// - riversData7 (Rivers 61-70)
// - riversData8 (Rivers 71-80)
// - riversData9 (Rivers 81-90)
// - riversData10 (Rivers 91-100)
// ─────────────────────────────────────────────────────────────────

// Combine all river data arrays
const riversData = [
    ...(typeof riversData1 !== 'undefined' ? riversData1 : []),
    ...(typeof riversData2 !== 'undefined' ? riversData2 : []),
    ...(typeof riversData3 !== 'undefined' ? riversData3 : []),
    ...(typeof riversData4 !== 'undefined' ? riversData4 : []),
    ...(typeof riversData5 !== 'undefined' ? riversData5 : []),
    ...(typeof riversData6 !== 'undefined' ? riversData6 : []),
    ...(typeof riversData7 !== 'undefined' ? riversData7 : []),
    ...(typeof riversData8 !== 'undefined' ? riversData8 : []),
    ...(typeof riversData9 !== 'undefined' ? riversData9 : []),
    ...(typeof riversData10 !== 'undefined' ? riversData10 : [])
];

// ─────────────────────────────────────────────────────────────────
// DATA VALIDATION & SORTING
// ─────────────────────────────────────────────────────────────────

// Sort by length (longest to shortest)
riversData.sort((a, b) => b.length - a.length);

// Assign ranks based on length
riversData.forEach((river, index) => {
    river.rank = index + 1;
});

// ─────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────

// Get river by ID
function getRiverById(id) {
    return riversData.find(river => river.id === id);
}

// Get rivers by continent
function getRiversByContinent(continent) {
    return riversData.filter(river => river.continent === continent);
}

// Get rivers by country
function getRiversByCountry(country) {
    return riversData.filter(river => 
        river.countries?.includes(country) || river.country === country
    );
}

// Get top N longest rivers
function getTopRivers(n = 10) {
    return riversData.slice(0, n);
}

// Search rivers
function searchRivers(query) {
    const q = query.toLowerCase();
    return riversData.filter(river =>
        river.name.toLowerCase().includes(q) ||
        river.countries?.some(c => c.toLowerCase().includes(q)) ||
        river.continent?.toLowerCase().includes(q)
    );
}

// ─────────────────────────────────────────────────────────────────
// STATISTICS
// ─────────────────────────────────────────────────────────────────

const riverStats = {
    get totalRivers() {
        return riversData.length;
    },
    get totalLength() {
        return riversData.reduce((sum, r) => sum + (r.length || 0), 0);
    },
    get totalCountries() {
        const countries = new Set();
        riversData.forEach(r => {
            if (r.countries) r.countries.forEach(c => countries.add(c));
            if (r.country) countries.add(r.country);
        });
        return countries.size;
    },
    get continents() {
        return [...new Set(riversData.map(r => r.continent).filter(Boolean))];
    },
    get longestRiver() {
        return riversData[0];
    },
    get shortestRiver() {
        return riversData[riversData.length - 1];
    }
};

// ─────────────────────────────────────────────────────────────────
// CONSOLE LOG FOR DEBUGGING
// ─────────────────────────────────────────────────────────────────

console.log(`🌊 Rivers Data Loaded: ${riversData.length} rivers`);
console.log(`📏 Total Length: ${riverStats.totalLength.toLocaleString()} km`);
console.log(`🌍 Countries: ${riverStats.totalCountries}`);

// ─────────────────────────────────────────────────────────────────
// EXPORT (for module systems if needed)
// ─────────────────────────────────────────────────────────────────

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        riversData,
        getRiverById,
        getRiversByContinent,
        getRiversByCountry,
        getTopRivers,
        searchRivers,
        riverStats
    };
}
