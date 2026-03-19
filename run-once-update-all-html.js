const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// ALL YOUR CATEGORIES
// ═══════════════════════════════════════════════════════════════

const categories = [
    // Main Geography Categories
    'coral-reefs',
    'deserts',
    'forests',
    'islands',
    'lakes',
    'mountains',
    'oceans',
    'rivers',
    'volcanoes',
    
    // Special Sections
    'mysteries',
    'world-atlas',
    'games',
    'encyclopedia',
    'upsc'
];

// ═══════════════════════════════════════════════════════════════
// SCRIPTS TO ADD
// ═══════════════════════════════════════════════════════════════

const scriptsToAdd = `
    <!-- ═══════════════════════════════════════════════════════ -->
    <!-- PREMIUM ACCESS CONTROL SYSTEM - DO NOT REMOVE -->
    <!-- ═══════════════════════════════════════════════════════ -->
    <script src="js/config/plans-config.js"></script>
    <script src="js/core/access-control.js"></script>
    <script src="js/core/payment-handler.js"></script>
    <script src="js/core/geo-helpers.js"></script>
`;

const cssToAdd = `    <link rel="stylesheet" href="css/premium-styles.css">`;

// ═══════════════════════════════════════════════════════════════
// TRACKING
// ═══════════════════════════════════════════════════════════════

let updated = [];
let notFound = [];
let alreadyUpdated = [];
let errors = [];

// ═══════════════════════════════════════════════════════════════
// PROCESS EACH CATEGORY
// ═══════════════════════════════════════════════════════════════

console.log('\n🚀 Starting HTML Update Script...\n');
console.log('═'.repeat(60));

categories.forEach(cat => {
    const htmlFile = `${cat}.html`;
    
    // Check if file exists
    if (!fs.existsSync(htmlFile)) {
        notFound.push(htmlFile);
        console.log(`❌ NOT FOUND: ${htmlFile}`);
        return;
    }
    
    try {
        let content = fs.readFileSync(htmlFile, 'utf8');
        
        // Check if already updated
        if (content.includes('PREMIUM ACCESS CONTROL SYSTEM')) {
            alreadyUpdated.push(htmlFile);
            console.log(`⏭️  SKIPPED (already updated): ${htmlFile}`);
            return;
        }
        
        let modified = false;
        
        // ─────────────────────────────────────────────────────
        // ADD CSS LINK (before </head>)
        // ─────────────────────────────────────────────────────
        if (!content.includes('premium-styles.css')) {
            if (content.includes('</head>')) {
                content = content.replace(
                    '</head>',
                    `${cssToAdd}\n</head>`
                );
                modified = true;
            }
        }
        
        // ─────────────────────────────────────────────────────
        // ADD SCRIPTS (before app.js)
        // ─────────────────────────────────────────────────────
        
        // Try different app.js naming patterns
        const appScriptPatterns = [
            `<script src="${cat}-app.js"></script>`,
            `<script src="${cat}/app.js"></script>`,
            `<script src="js/${cat}-app.js"></script>`,
            `<script src="${cat}.js"></script>`
        ];
        
        let scriptAdded = false;
        
        for (const pattern of appScriptPatterns) {
            if (content.includes(pattern)) {
                content = content.replace(
                    pattern,
                    `${scriptsToAdd}\n    ${pattern}`
                );
                scriptAdded = true;
                modified = true;
                break;
            }
        }
        
        // If no app.js found, add before </body>
        if (!scriptAdded) {
            if (content.includes('</body>')) {
                content = content.replace(
                    '</body>',
                    `${scriptsToAdd}\n</body>`
                );
                modified = true;
            }
        }
        
        // ─────────────────────────────────────────────────────
        // SAVE FILE
        // ─────────────────────────────────────────────────────
        if (modified) {
            fs.writeFileSync(htmlFile, content, 'utf8');
            updated.push(htmlFile);
            console.log(`✅ UPDATED: ${htmlFile}`);
        }
        
    } catch (err) {
        errors.push({ file: htmlFile, error: err.message });
        console.log(`❌ ERROR: ${htmlFile} - ${err.message}`);
    }
});

// ═══════════════════════════════════════════════════════════════
// SUMMARY REPORT
// ═══════════════════════════════════════════════════════════════

console.log('\n' + '═'.repeat(60));
console.log('📊 SUMMARY REPORT');
console.log('═'.repeat(60));

console.log(`\n✅ SUCCESSFULLY UPDATED (${updated.length}):`);
updated.forEach(f => console.log(`   • ${f}`));

if (alreadyUpdated.length > 0) {
    console.log(`\n⏭️  ALREADY UPDATED (${alreadyUpdated.length}):`);
    alreadyUpdated.forEach(f => console.log(`   • ${f}`));
}

if (notFound.length > 0) {
    console.log(`\n❌ NOT FOUND (${notFound.length}):`);
    notFound.forEach(f => console.log(`   • ${f}`));
}

if (errors.length > 0) {
    console.log(`\n🔴 ERRORS (${errors.length}):`);
    errors.forEach(e => console.log(`   • ${e.file}: ${e.error}`));
}

console.log('\n' + '═'.repeat(60));
console.log(`📁 Total categories: ${categories.length}`);
console.log(`✅ Updated: ${updated.length}`);
console.log(`⏭️  Skipped: ${alreadyUpdated.length}`);
console.log(`❌ Not found: ${notFound.length}`);
console.log(`🔴 Errors: ${errors.length}`);
console.log('═'.repeat(60));
console.log('\n🎉 Script completed!\n');
