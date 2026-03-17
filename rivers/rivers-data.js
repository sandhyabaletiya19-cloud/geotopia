/**
 * GEOTOPIA - Rivers Data Combiner
 * Combines all river data from separate files
 */

// This file combines all rivers from rivers-data-1.js through rivers-data-10.js
// Each file contains 10 rivers with complete data

const RIVERS_DATA = [
    // Rivers 1-10 (rivers-data-1.js)
    ...(typeof RIVERS_DATA_1 !== 'undefined' ? RIVERS_DATA_1 : []),
    // Rivers 11-20 (rivers-data-2.js)
    ...(typeof RIVERS_DATA_2 !== 'undefined' ? RIVERS_DATA_2 : []),
    // Rivers 21-30 (rivers-data-3.js)
    ...(typeof RIVERS_DATA_3 !== 'undefined' ? RIVERS_DATA_3 : []),
    // Rivers 31-40 (rivers-data-4.js)
    ...(typeof RIVERS_DATA_4 !== 'undefined' ? RIVERS_DATA_4 : []),
    // Rivers 41-50 (rivers-data-5.js)
    ...(typeof RIVERS_DATA_5 !== 'undefined' ? RIVERS_DATA_5 : []),
    // Rivers 51-60 (rivers-data-6.js)
    ...(typeof RIVERS_DATA_6 !== 'undefined' ? RIVERS_DATA_6 : []),
    // Rivers 61-70 (rivers-data-7.js)
    ...(typeof RIVERS_DATA_7 !== 'undefined' ? RIVERS_DATA_7 : []),
    // Rivers 71-80 (rivers-data-8.js)
    ...(typeof RIVERS_DATA_8 !== 'undefined' ? RIVERS_DATA_8 : []),
    // Rivers 81-90 (rivers-data-9.js)
    ...(typeof RIVERS_DATA_9 !== 'undefined' ? RIVERS_DATA_9 : []),
    // Rivers 91-100 (rivers-data-10.js)
    ...(typeof RIVERS_DATA_10 !== 'undefined' ? RIVERS_DATA_10 : [])
];

// Sort by length (longest first) after combining
RIVERS_DATA.sort((a, b) => b.length - a.length);

console.log(`GEOTOPIA Rivers: Loaded ${RIVERS_DATA.length} rivers`);
