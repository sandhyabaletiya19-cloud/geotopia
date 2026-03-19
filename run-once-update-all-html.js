const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// GEOTOPIA - UPDATE ALL HTML FILES
// ═══════════════════════════════════════════════════════════════

// Your categories (HTML is INSIDE subfolders)
const categoriesInSubfolders = [
    'coral-reefs',
    'deserts',
    'forests',
    'islands',
    'lakes',
    'mountains',
    'oceans',
    'rivers',
    'volcanoes',
    'upsc',
    'encyclopedia',
    'games'
];

// Root level HTML files
const rootHtmlFiles = [
    'index.html',
    'pricing.html',
    'atlas.html',
    'mysteries.html',
    'africa.html',
    'antarctica.html',
    'asia.html',
    'australia.html',
    'europe.html',
    'north-america.html',
    'junior-zone.html',
    'kids-zone.html',
    'mystery.html',
    'admin.html',
    'payment-success.html'
];

// ═══════════════════════════════════════════════════════════════
// SCRIPTS TO ADD
// ═══════════════════════════════════════════════════════════════

// For ROOT level files (index.html, pricing.html, etc.)
const scriptsForRoot = `
    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- PREMIUM ACCESS CONTROL SYSTEM -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <script src="js/config/plans-config.js"></script>
    <script src="js/core/access-control.js"></script>
    <script src="js/core/payment-handler.js"></script>
    <script src="js/core/geo-helpers.js"></script>
`;

const cssForRoot = `    <link rel="stylesheet" href="css/premium-styles.css">`;

// For SUBFOLDER files (coral-reefs/coral-reefs.html, etc.)
const scriptsForSubfolder = `
    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- PREMIUM ACCESS CONTROL SYSTEM -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <script src="../js/config/plans-config.js"></script>
    <script src="../js/core/access-control.js"></script>
    <script src="../js/core/payment-handler.js"></script>
    <script src="../js/core/geo-helpers.js"></script>
`;

const cssForSubfolder = `    <link rel="stylesheet" href="../css/premium-styles.css">`;

// ═══════════════════════════════════════════════════════════════
// TRACKING
// ═══════════════════════════════════════════════════════════════

let updated = [];
let alreadyUpdated = [];
let notFound = [];
let errors = [];

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTION
// ═══════════════════════════════════════════════════════════════

function updateHtmlFile(filePath, scriptsToAdd, cssToAdd) {
    if (!fs.existsSync(filePath)) {
        notFound.push(filePath);
        return;
    }
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Already updated?
        if (content.includes('PREMIUM ACCESS CONTROL SYSTEM')) {
            alreadyUpdated.push(filePath);
            console.log(`⏭️  SKIP: ${filePath}`);
            return;
        }
        
        let modified = false;
        
        // Add CSS before </head>
        if (!content.includes('premium-styles.css') && content.includes('</head>')) {
            content = content.replace('</head>', `${cssToAdd}\n</head>`);
            modified = true;
        }
        
        // Add scripts before </body>
        if (content.includes('</body>')) {
            content = content.replace('</body>', `${scriptsToAdd}\n</body>`);
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            updated.push(filePath);
            console.log(`✅ UPDATED: ${filePath}`);
        }
        
    } catch (err) {
        errors.push({ file: filePath, error: err.message });
        console.log(`❌ ERROR: ${filePath}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// PROCESS FILES
// ═══════════════════════════════════════════════════════════════

console.log('\n🚀 GEOTOPIA HTML UPDATER\n');
console.log('═'.repeat(50));

// 1. Update ROOT level HTML files
console.log('\n📁 ROOT LEVEL FILES:');
rootHtmlFiles.forEach(file => {
    updateHtmlFile(file, scriptsForRoot, cssForRoot);
});

// 2. Update SUBFOLDER HTML files
console.log('\n📁 SUBFOLDER FILES:');
categoriesInSubfolders.forEach(folder => {
    // Try different naming patterns
    const patterns = [
        `${folder}/${folder}.html`,
        `${folder}/index.html`,
        `${folder}/main.html`
    ];
    
    for (const filePath of patterns) {
        if (fs.existsSync(filePath)) {
            updateHtmlFile(filePath, scriptsForSubfolder, cssForSubfolder);
            break;
        }
    }
});

// 3. Also search for any other HTML files in subfolders
console.log('\n📁 SCANNING FOR OTHER HTML FILES:');
categoriesInSubfolders.forEach(folder => {
    if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
        const files = fs.readdirSync(folder);
        files.forEach(file => {
            if (file.endsWith('.html')) {
                const filePath = `${folder}/${file}`;
                if (!updated.includes(filePath) && !alreadyUpdated.includes(filePath)) {
                    updateHtmlFile(filePath, scriptsForSubfolder, cssForSubfolder);
                }
            }
        });
    }
});

// ═══════════════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════════════

console.log('\n' + '═'.repeat(50));
console.log('📊 SUMMARY');
console.log('═'.repeat(50));

console.log(`\n✅ UPDATED (${updated.length}):`);
updated.forEach(f => console.log(`   ${f}`));

if (alreadyUpdated.length > 0) {
    console.log(`\n⏭️  ALREADY DONE (${alreadyUpdated.length}):`);
    alreadyUpdated.forEach(f => console.log(`   ${f}`));
}

if (notFound.length > 0) {
    console.log(`\n❌ NOT FOUND (${notFound.length}):`);
    notFound.forEach(f => console.log(`   ${f}`));
}

if (errors.length > 0) {
    console.log(`\n🔴 ERRORS (${errors.length}):`);
    errors.forEach(e => console.log(`   ${e.file}: ${e.error}`));
}

console.log('\n' + '═'.repeat(50));
console.log('🎉 DONE! Now run:');
console.log('   git add .');
console.log('   git commit -m "Add premium system"');
console.log('   git push');
console.log('═'.repeat(50) + '\n');
