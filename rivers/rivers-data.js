// ==========================================
// RIVERS DATA - MAIN COMBINER
// ==========================================

// This combines all river data from separate files
// Each file contains 10 rivers for easy management

let riversData = [];

// Combine all data (will be populated by individual files)
function combineRiversData() {
    riversData = [
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
    
    console.log('✅ Total Rivers Loaded:', riversData.length);
}

// Auto-combine when DOM ready
document.addEventListener('DOMContentLoaded', combineRiversData);
