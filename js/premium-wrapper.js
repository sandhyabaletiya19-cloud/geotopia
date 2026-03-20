// ========================================
// PREMIUM CONTENT WRAPPER - UNIVERSAL
// Auto-applies to ALL category pages
// ========================================

(function() {
    window.addEventListener('DOMContentLoaded', function() {
        
        // Wait for GeoAccess to load
        setTimeout(function() {
            if (typeof window.GeoAccess === 'undefined') {
                console.log('⚠️ GeoAccess not loaded');
                return;
            }

            // Detect category from page
            var category = detectCategory();
            if (!category) return;

            console.log('🔐 Premium wrapper active for:', category);

            // Intercept the app's data before rendering
            interceptAndFilter(category);
            
        }, 100);
    });

    // Detect which category we're on
    function detectCategory() {
        var path = window.location.pathname;
        
        if (path.includes('forests')) return 'forests';
        if (path.includes('deserts')) return 'deserts';
        if (path.includes('oceans')) return 'oceans';
        if (path.includes('mountains')) return 'mountains';
        if (path.includes('islands')) return 'islands';
        if (path.includes('lakes')) return 'lakes';
        if (path.includes('rivers')) return 'rivers';
        if (path.includes('volcanoes')) return 'volcanoes';
        if (path.includes('coral-reefs')) return 'coralReefs';
        
        return null;
    }

    // Intercept and filter data
    function interceptAndFilter(category) {
        
        // Hook into common data variables
        var dataVarNames = [
            category + 'Data1',
            category + 'Data2', 
            'forestsData1',
            'forestsData2',
            'desertsData',
            'oceansData',
            'mountainsData',
            'islandsData',
            'lakesData',
            'riversData',
            'volcanoesData',
            'coralReefsData'
        ];

        // Store original data
        var allData = [];
        dataVarNames.forEach(function(varName) {
            if (window[varName]) {
                allData = allData.concat(window[varName]);
            }
        });

        if (allData.length === 0) return;

        // Apply filter
        var filtered = window.GeoAccess.getFilteredData(allData, category);
        
        console.log(`✅ Filtered: ${filtered.visible.length} visible, ${filtered.lockedCount} locked`);

        // Override the app's state if it exists
        setTimeout(function() {
            overrideAppState(category, filtered);
            addLockedCards(category, filtered);
        }, 500);
    }

    // Override app state
    function overrideAppState(category, filtered) {
        
        // For ForestApp
        if (window.ForestApp && window.ForestApp.state) {
            window.ForestApp.state.allForests = filtered.visible;
            window.ForestApp.state.lockedForests = filtered.preview;
            window.ForestApp.state.lockedCount = filtered.lockedCount;
            window.ForestApp.renderForests();
        }

        // For other apps (generic pattern)
        var appNames = [
            'DesertApp', 'OceanApp', 'MountainApp', 
            'IslandApp', 'LakeApp', 'RiverApp', 
            'VolcanoApp', 'CoralReefApp'
        ];

        appNames.forEach(function(appName) {
            if (window[appName] && window[appName].state) {
                window[appName].state.allItems = filtered.visible;
                window[appName].state.lockedItems = filtered.preview;
                window[appName].state.lockedCount = filtered.lockedCount;
                
                if (window[appName].render) {
                    window[appName].render();
                }
            }
        });
    }

    // Add locked preview cards
    function addLockedCards(category, filtered) {
        var container = document.querySelector('.grid') || 
                       document.querySelector('.cards-grid') ||
                       document.querySelector('[id*="Grid"]');
        
        if (!container || !filtered.preview || filtered.preview.length === 0) return;

        // Add locked cards
        filtered.preview.forEach(function(item) {
            var lockedCard = createLockedCard(item, category);
            container.appendChild(lockedCard);
        });

        // Add upgrade CTA
        if (filtered.lockedCount > 0) {
            var cta = createUpgradeCTA(filtered.lockedCount, category);
            container.appendChild(cta);
        }
    }

    // Create locked card
    function createLockedCard(item, category) {
        var card = document.createElement('div');
        card.className = 'forest-card locked-card'; // Works for all
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img class="card-image blurred" 
                     src="${item.image || ''}" 
                     alt="${item.name}">
                <div class="lock-overlay">
                    <div class="lock-icon">🔒</div>
                    <p class="lock-text">Premium</p>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title blurred-text">${item.name}</h3>
            </div>
        `;
        
        card.addEventListener('click', function() {
            window.GeoAccess.showUpgradePrompt();
        });
        
        return card;
    }

    // Create upgrade CTA
    function createUpgradeCTA(count, category) {
        var cta = document.createElement('div');
        cta.className = 'upgrade-cta-card';
        cta.style.cssText = `
            grid-column: 1 / -1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            color: white;
            margin: 20px 0;
        `;
        
        cta.innerHTML = `
            <div class="upgrade-icon" style="font-size: 64px;">👑</div>
            <h3 style="font-size: 28px; margin: 20px 0;">Unlock ${count} More Items</h3>
            <p style="opacity: 0.9; margin-bottom: 25px;">Get premium access to explore all locked content</p>
            <button class="btn-upgrade" style="
                background: white;
                color: #667eea;
                border: none;
                padding: 15px 40px;
                border-radius: 50px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
            ">Upgrade to Premium</button>
        `;
        
        cta.querySelector('.btn-upgrade').addEventListener('click', function() {
            window.GeoAccess.showUpgradePrompt();
        });
        
        return cta;
    }

})();
