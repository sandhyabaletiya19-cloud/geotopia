// ============================================
// LAKES DATA - MAIN COMBINING FILE
// ============================================

// Check if all data files are loaded
console.log('Loading lakes-data.js combiner...');
console.log('lakesData1 loaded:', typeof lakesData1 !== 'undefined' ? lakesData1.length + ' lakes' : 'NOT FOUND');
console.log('lakesData2 loaded:', typeof lakesData2 !== 'undefined' ? lakesData2.length + ' lakes' : 'NOT FOUND');
console.log('lakesData3 loaded:', typeof lakesData3 !== 'undefined' ? lakesData3.length + ' lakes' : 'NOT FOUND');
console.log('lakesData4 loaded:', typeof lakesData4 !== 'undefined' ? lakesData4.length + ' lakes' : 'NOT FOUND');
console.log('lakesData5 loaded:', typeof lakesData5 !== 'undefined' ? lakesData5.length + ' lakes' : 'NOT FOUND');
console.log('lakesData6 loaded:', typeof lakesData6 !== 'undefined' ? lakesData6.length + ' lakes' : 'NOT FOUND');
console.log('lakesData7 loaded:', typeof lakesData7 !== 'undefined' ? lakesData7.length + ' lakes' : 'NOT FOUND');
console.log('lakesData8 loaded:', typeof lakesData8 !== 'undefined' ? lakesData8.length + ' lakes' : 'NOT FOUND');
console.log('lakesData9 loaded:', typeof lakesData9 !== 'undefined' ? lakesData9.length + ' lakes' : 'NOT FOUND');
console.log('lakesData10 loaded:', typeof lakesData10 !== 'undefined' ? lakesData10.length + ' lakes' : 'NOT FOUND');

function getAllLakesData() {
    let allLakes = [];
    
    // Safely add each data array if it exists
    if (typeof lakesData1 !== 'undefined' && Array.isArray(lakesData1)) {
        allLakes = allLakes.concat(lakesData1);
    }
    if (typeof lakesData2 !== 'undefined' && Array.isArray(lakesData2)) {
        allLakes = allLakes.concat(lakesData2);
    }
    if (typeof lakesData3 !== 'undefined' && Array.isArray(lakesData3)) {
        allLakes = allLakes.concat(lakesData3);
    }
    if (typeof lakesData4 !== 'undefined' && Array.isArray(lakesData4)) {
        allLakes = allLakes.concat(lakesData4);
    }
    if (typeof lakesData5 !== 'undefined' && Array.isArray(lakesData5)) {
        allLakes = allLakes.concat(lakesData5);
    }
    if (typeof lakesData6 !== 'undefined' && Array.isArray(lakesData6)) {
        allLakes = allLakes.concat(lakesData6);
    }
    if (typeof lakesData7 !== 'undefined' && Array.isArray(lakesData7)) {
        allLakes = allLakes.concat(lakesData7);
    }
    if (typeof lakesData8 !== 'undefined' && Array.isArray(lakesData8)) {
        allLakes = allLakes.concat(lakesData8);
    }
    if (typeof lakesData9 !== 'undefined' && Array.isArray(lakesData9)) {
        allLakes = allLakes.concat(lakesData9);
    }
    if (typeof lakesData10 !== 'undefined' && Array.isArray(lakesData10)) {
        allLakes = allLakes.concat(lakesData10);
    }
    
    console.log('Total lakes combined:', allLakes.length);
    return allLakes;
}
