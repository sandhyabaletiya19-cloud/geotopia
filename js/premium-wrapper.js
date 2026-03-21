// ========================================
// PREMIUM CONTENT WRAPPER - UNIVERSAL
// 5 FREE items, rest LOCKED with blur
// Works for ALL category pages
// ========================================

(function() {
    
    // CONFIGURATION - Change these numbers as needed
    var FREE_LIMITS = {
        mountains: 5,
        rivers: 5,
        lakes: 5,
        oceans: 5,
        forests: 5,
        deserts: 5,
        volcanoes: 5,
        islands: 5,
        coralReefs: 5,
        encyclopedia: 5,
        upsc: 5,
        games: 3,  // Games might have fewer
        atlas: 5
    };

    window.addEventListener('DOMContentLoaded', function() {
        
        var checkInterval = setInterval(function() {
            
            if (typeof window.GeoAccess !== 'undefined' || document.readyState === 'complete') {
                clearInterval(checkInterval);
                setTimeout(initPremiumWrapper, 500);
            }
            
        }, 100);
        
        setTimeout(function() {
            clearInterval(checkInterval);
            initPremiumWrapper();
        }, 3000);
    });

    function initPremiumWrapper() {
        
        var category = detectCategory();
        
        if (!category) {
            console.log('⚠️ No category detected');
            return;
        }

        console.log('🔐 Premium wrapper active for:', category);

        // Check if user is premium
        if (isUserPremium()) {
            console.log('👑 Premium user - showing all content');
            return; // Don't filter for premium users
        }

        setTimeout(function() {
            applyPremiumFilter(category);
        }, 800);
    }

    function isUserPremium() {
        // Check various ways user might be marked as premium
        if (window.GeoAccess && window.GeoAccess.isPremium && window.GeoAccess.isPremium()) {
            return true;
        }
        if (localStorage.getItem('geo_premium') === 'true') {
            return true;
        }
        if (localStorage.getItem('userPremium') === 'true') {
            return true;
        }
        if (window.userIsPremium === true) {
            return true;
        }
        return false;
    }

    function detectCategory() {
        var path = window.location.pathname.toLowerCase();
        
        if (path.includes('coral-reefs') || path.includes('coralreefs')) return 'coralReefs';
        if (path.includes('deserts')) return 'deserts';
        if (path.includes('encyclopedia')) return 'encyclopedia';
        if (path.includes('forests')) return 'forests';
        if (path.includes('games')) return 'games';
        if (path.includes('islands')) return 'islands';
        if (path.includes('lakes')) return 'lakes';
        if (path.includes('mountains')) return 'mountains';
        if (path.includes('oceans')) return 'oceans';
        if (path.includes('rivers')) return 'rivers';
        if (path.includes('upsc')) return 'upsc';
        if (path.includes('volcanoes')) return 'volcanoes';
        if (path.includes('atlas')) return 'atlas';
        if (path.includes('waterfalls')) return 'waterfalls';
        if (path.includes('glaciers')) return 'glaciers';
        if (path.includes('caves')) return 'caves';
        if (path.includes('national-parks') || path.includes('parks')) return 'parks';
        
        return null;
    }

    function applyPremiumFilter(category) {
        
        var allData = getAllData(category);
        
        if (!allData || allData.length === 0) {
            console.log('⚠️ No data found for:', category);
            return;
        }

        var freeLimit = FREE_LIMITS[category] || 5;
        var totalItems = allData.length;
        
        var freeItems = allData.slice(0, freeLimit);
        var lockedItems = allData.slice(freeLimit);

        console.log('📊 Category:', category);
        console.log('📊 Total:', totalItems);
        console.log('✅ Free:', freeItems.length);
        console.log('🔒 Locked:', lockedItems.length);

        // Update the app state with only free items
        overrideAppState(category, freeItems);

        // Wait for DOM to update, then add locked cards
        setTimeout(function() {
            addLockedCards(category, lockedItems, freeLimit, totalItems);
        }, 500);
    }

    // Get all data based on category
    function getAllData(category) {
        var data = [];

        // ENCYCLOPEDIA - CountriesData1 to CountriesData10
        if (category === 'encyclopedia') {
            for (var i = 1; i <= 10; i++) {
                if (window['CountriesData' + i]) data = data.concat(window['CountriesData' + i]);
            }
            if (window.CountriesData) data = data.concat(window.CountriesData);
            if (window.DisputesData) data = data.concat(window.DisputesData);
            if (window.ClimateData) data = data.concat(window.ClimateData);
            if (window.EarthSystemsData) data = data.concat(window.EarthSystemsData);
        }

        // DESERTS - DESERTS_DATA
        if (category === 'deserts') {
            if (window.DESERTS_DATA) data = data.concat(window.DESERTS_DATA);
            if (window.desertsData) data = data.concat(window.desertsData);
            for (var i = 1; i <= 10; i++) {
                if (window['DESERTS_DATA_' + i]) data = data.concat(window['DESERTS_DATA_' + i]);
                if (window['desertsData' + i]) data = data.concat(window['desertsData' + i]);
            }
        }

        // FORESTS - forestsData1, forestsData2
        if (category === 'forests') {
            if (window.forestsData1) data = data.concat(window.forestsData1);
            if (window.forestsData2) data = data.concat(window.forestsData2);
            if (window.forestsData) data = data.concat(window.forestsData);
            if (window.FORESTS_DATA) data = data.concat(window.FORESTS_DATA);
            for (var i = 1; i <= 10; i++) {
                if (window['FORESTS_DATA_' + i]) data = data.concat(window['FORESTS_DATA_' + i]);
                if (window['forestsData' + i]) data = data.concat(window['forestsData' + i]);
            }
        }

        // LAKES - getAllLakesData function
        if (category === 'lakes') {
            if (typeof window.getAllLakesData === 'function') {
                data = data.concat(window.getAllLakesData());
            }
            if (window.LAKES_DATA) data = data.concat(window.LAKES_DATA);
            if (window.lakesData) data = data.concat(window.lakesData);
            for (var i = 1; i <= 10; i++) {
                if (window['LAKES_DATA_' + i]) data = data.concat(window['LAKES_DATA_' + i]);
                if (window['lakesData' + i]) data = data.concat(window['lakesData' + i]);
            }
        }

        // ISLANDS - getAllIslands function
        if (category === 'islands') {
            if (typeof window.getAllIslands === 'function') {
                data = data.concat(window.getAllIslands());
            }
            if (window.ISLANDS_DATA) data = data.concat(window.ISLANDS_DATA);
            if (window.islandsData) data = data.concat(window.islandsData);
            for (var i = 1; i <= 10; i++) {
                if (window['ISLANDS_DATA_' + i]) data = data.concat(window['ISLANDS_DATA_' + i]);
                if (window['islandsData' + i]) data = data.concat(window['islandsData' + i]);
            }
        }

        // MOUNTAINS - MOUNTAINS_DATA_1 to MOUNTAINS_DATA_10
        if (category === 'mountains') {
            for (var i = 1; i <= 10; i++) {
                if (window['MOUNTAINS_DATA_' + i]) data = data.concat(window['MOUNTAINS_DATA_' + i]);
            }
            if (window.MOUNTAINS_DATA) data = data.concat(window.MOUNTAINS_DATA);
            if (window.mountainsData) data = data.concat(window.mountainsData);
        }

        // RIVERS - RIVERS_DATA
        if (category === 'rivers') {
            if (window.RIVERS_DATA) data = data.concat(window.RIVERS_DATA);
            for (var i = 1; i <= 10; i++) {
                if (window['RIVERS_DATA_' + i]) data = data.concat(window['RIVERS_DATA_' + i]);
                if (window['riversData' + i]) data = data.concat(window['riversData' + i]);
            }
            if (window.riversData) data = data.concat(window.riversData);
        }

        // VOLCANOES - volcanoesData1 to volcanoesData5
        if (category === 'volcanoes') {
            for (var i = 1; i <= 10; i++) {
                if (window['volcanoesData' + i]) data = data.concat(window['volcanoesData' + i]);
                if (window['VOLCANOES_DATA_' + i]) data = data.concat(window['VOLCANOES_DATA_' + i]);
            }
            if (window.volcanoesData) data = data.concat(window.volcanoesData);
            if (window.VOLCANOES_DATA) data = data.concat(window.VOLCANOES_DATA);
        }

        // CORAL REEFS
        if (category === 'coralReefs') {
            for (var i = 1; i <= 10; i++) {
                if (window['coralReefsData' + i]) data = data.concat(window['coralReefsData' + i]);
                if (window['CORAL_REEFS_DATA_' + i]) data = data.concat(window['CORAL_REEFS_DATA_' + i]);
            }
            if (window.coralReefsData) data = data.concat(window.coralReefsData);
            if (window.CORAL_REEFS_DATA) data = data.concat(window.CORAL_REEFS_DATA);
        }

        // OCEANS
        if (category === 'oceans') {
            if (window.OCEANS_DATA) data = data.concat(window.OCEANS_DATA);
            if (window.oceansData) data = data.concat(window.oceansData);
            if (window.oceansData1) data = data.concat(window.oceansData1);
            for (var i = 1; i <= 10; i++) {
                if (window['OCEANS_DATA_' + i]) data = data.concat(window['OCEANS_DATA_' + i]);
                if (window['oceansData' + i]) data = data.concat(window['oceansData' + i]);
            }
        }

        // UPSC - Multiple specific data sources
        if (category === 'upsc') {
            if (window.geomorphologyData) data = data.concat(window.geomorphologyData);
            if (window.climatology1Data) data = data.concat(window.climatology1Data);
            if (window.climatology2Data) data = data.concat(window.climatology2Data);
            if (window.oceanographyData) data = data.concat(window.oceanographyData);
            if (window.biogeographyData) data = data.concat(window.biogeographyData);
            if (window.landformsData) data = data.concat(window.landformsData);
            if (window.indiaPhysicalData) data = data.concat(window.indiaPhysicalData);
            if (window.indiaClimateData) data = data.concat(window.indiaClimateData);
            if (window.indiaDrainageData) data = data.concat(window.indiaDrainageData);
            if (window.indiaResourcesData) data = data.concat(window.indiaResourcesData);
            if (window.humanData) data = data.concat(window.humanData);
            if (window.economicData) data = data.concat(window.economicData);
            if (window.modelsData) data = data.concat(window.modelsData);
            if (window.environmentData) data = data.concat(window.environmentData);
            if (window.UPSC_DATA) data = data.concat(window.UPSC_DATA);
        }

        // GAMES
        if (category === 'games') {
            if (window.gamesData) data = data.concat(window.gamesData);
            if (window.GAMES_DATA) data = data.concat(window.GAMES_DATA);
            for (var i = 1; i <= 10; i++) {
                if (window['gamesData' + i]) data = data.concat(window['gamesData' + i]);
                if (window['GAMES_DATA_' + i]) data = data.concat(window['GAMES_DATA_' + i]);
            }
        }

        // ATLAS
        if (category === 'atlas') {
            if (window.atlasData) data = data.concat(window.atlasData);
            if (window.ATLAS_DATA) data = data.concat(window.ATLAS_DATA);
            for (var i = 1; i <= 10; i++) {
                if (window['atlasData' + i]) data = data.concat(window['atlasData' + i]);
                if (window['ATLAS_DATA_' + i]) data = data.concat(window['ATLAS_DATA_' + i]);
            }
        }

        // WATERFALLS
        if (category === 'waterfalls') {
            if (window.waterfallsData) data = data.concat(window.waterfallsData);
            if (window.WATERFALLS_DATA) data = data.concat(window.WATERFALLS_DATA);
        }

        // GLACIERS
        if (category === 'glaciers') {
            if (window.glaciersData) data = data.concat(window.glaciersData);
            if (window.GLACIERS_DATA) data = data.concat(window.GLACIERS_DATA);
        }

        // CAVES
        if (category === 'caves') {
            if (window.cavesData) data = data.concat(window.cavesData);
            if (window.CAVES_DATA) data = data.concat(window.CAVES_DATA);
        }

        // NATIONAL PARKS
        if (category === 'parks') {
            if (window.parksData) data = data.concat(window.parksData);
            if (window.PARKS_DATA) data = data.concat(window.PARKS_DATA);
            if (window.nationalParksData) data = data.concat(window.nationalParksData);
        }

        // Remove duplicates based on name
        var uniqueData = [];
        var seenNames = {};
        data.forEach(function(item) {
            var name = item.name || item.title || '';
            if (name && !seenNames[name]) {
                seenNames[name] = true;
                uniqueData.push(item);
            }
        });

        return uniqueData;
    }

    // Override app state with only free items
    function overrideAppState(category, freeItems) {

        // Encyclopedia App
        if (window.EncyclopediaApp) {
            if (window.EncyclopediaApp.state) {
                window.EncyclopediaApp.state.allCountries = freeItems;
                window.EncyclopediaApp.state.filteredCountries = freeItems;
            }
            if (window.EncyclopediaApp.countries) {
                window.EncyclopediaApp.countries = freeItems;
            }
            if (window.EncyclopediaApp.renderCountries) window.EncyclopediaApp.renderCountries();
            if (window.EncyclopediaApp.render) window.EncyclopediaApp.render();
        }

        // Forest App
        if (window.ForestApp) {
            if (window.ForestApp.state) {
                window.ForestApp.state.allForests = freeItems;
                window.ForestApp.state.filteredForests = freeItems;
            }
            if (window.ForestApp.forests) window.ForestApp.forests = freeItems;
            if (window.ForestApp.renderForests) window.ForestApp.renderForests();
            if (window.ForestApp.render) window.ForestApp.render();
        }

        // Desert App
        if (window.DesertApp || window.APP_STATE) {
            if (window.APP_STATE) {
                window.APP_STATE.desertsData = freeItems;
                window.APP_STATE.filteredDeserts = freeItems;
            }
            if (window.DesertApp && window.DesertApp.state) {
                window.DesertApp.state.allDeserts = freeItems;
                window.DesertApp.state.filteredDeserts = freeItems;
            }
            if (window.renderDeserts) window.renderDeserts();
            if (window.DesertApp && window.DesertApp.render) window.DesertApp.render();
        }

        // Mountain App
        if (window.MountainApp) {
            if (window.MountainApp.state) {
                window.MountainApp.state.allMountains = freeItems;
                window.MountainApp.state.filteredMountains = freeItems;
            }
            if (window.MountainApp.mountains) window.MountainApp.mountains = freeItems;
            if (window.MountainApp.renderMountains) window.MountainApp.renderMountains();
            if (window.MountainApp.render) window.MountainApp.render();
        }

        // Island App
        if (window.IslandApp) {
            if (window.IslandApp.state) {
                window.IslandApp.state.allIslands = freeItems;
                window.IslandApp.state.filteredIslands = freeItems;
            }
            if (window.IslandApp.islands) window.IslandApp.islands = freeItems;
            if (window.IslandApp.filteredIslands) window.IslandApp.filteredIslands = freeItems;
            if (window.IslandApp.render) window.IslandApp.render();
        }

        // Lake App
        if (window.LakeApp) {
            if (window.LakeApp.state) {
                window.LakeApp.state.allLakes = freeItems;
                window.LakeApp.state.filteredLakes = freeItems;
            }
            if (window.LakeApp.lakes) window.LakeApp.lakes = freeItems;
            if (window.LakeApp.renderLakes) window.LakeApp.renderLakes();
            if (window.LakeApp.render) window.LakeApp.render();
        }

        // River App
        if (window.RiverApp) {
            if (window.RiverApp.state) {
                window.RiverApp.state.allRivers = freeItems;
                window.RiverApp.state.filteredRivers = freeItems;
            }
            if (window.RiverApp.rivers) window.RiverApp.rivers = freeItems;
            if (window.RiverApp.renderRivers) window.RiverApp.renderRivers();
            if (window.RiverApp.render) window.RiverApp.render();
        }

        // Volcano App
        if (window.VolcanoApp) {
            if (window.VolcanoApp.state) {
                window.VolcanoApp.state.allVolcanoes = freeItems;
                window.VolcanoApp.state.filteredVolcanoes = freeItems;
            }
            if (window.VolcanoApp.volcanoes) window.VolcanoApp.volcanoes = freeItems;
            if (window.VolcanoApp.renderVolcanoes) window.VolcanoApp.renderVolcanoes();
            if (window.VolcanoApp.render) window.VolcanoApp.render();
        }

        // Ocean App
        if (window.OceanApp) {
            if (window.OceanApp.state) {
                window.OceanApp.state.allOceans = freeItems;
                window.OceanApp.state.filteredOceans = freeItems;
            }
            if (window.OceanApp.oceans) window.OceanApp.oceans = freeItems;
            if (window.OceanApp.render) window.OceanApp.render();
        }

        // Coral Reef App
        if (window.CoralReefApp) {
            if (window.CoralReefApp.state) {
                window.CoralReefApp.state.allReefs = freeItems;
                window.CoralReefApp.state.filteredReefs = freeItems;
            }
            if (window.CoralReefApp.reefs) window.CoralReefApp.reefs = freeItems;
            if (window.CoralReefApp.render) window.CoralReefApp.render();
        }

        // UPSC App
        if (window.UpscApp) {
            if (window.UpscApp.state) {
                window.UpscApp.state.allItems = freeItems;
                window.UpscApp.state.filteredItems = freeItems;
            }
            if (window.UpscApp.items) window.UpscApp.items = freeItems;
            if (window.UpscApp.render) window.UpscApp.render();
        }

        // Games App
        if (window.GamesApp) {
            if (window.GamesApp.state) {
                window.GamesApp.state.allGames = freeItems;
                window.GamesApp.state.filteredGames = freeItems;
            }
            if (window.GamesApp.games) window.GamesApp.games = freeItems;
            if (window.GamesApp.render) window.GamesApp.render();
        }

        // Atlas App
        if (window.AtlasApp) {
            if (window.AtlasApp.state) {
                window.AtlasApp.state.allItems = freeItems;
            }
            if (window.AtlasApp.render) window.AtlasApp.render();
        }
    }

    // Add locked cards with blur effect
    function addLockedCards(category, lockedItems, freeCount, totalCount) {
        
        var container = findContainer();
        
        if (!container) {
            console.log('⚠️ Container not found, trying fallback...');
            container = document.querySelector('main') || document.querySelector('.content');
        }

        if (!container) {
            console.log('❌ No container found at all');
            return;
        }

        // Remove any existing locked content
        var existingLocked = document.querySelectorAll('.geo-locked-item, .geo-upgrade-cta');
        existingLocked.forEach(function(el) { el.remove(); });

        // Add locked cards with blur
        lockedItems.forEach(function(item, index) {
            var lockedCard = createLockedCard(item, index);
            container.appendChild(lockedCard);
        });

        // Add upgrade CTA at the end
        var cta = createUpgradeCTA(lockedItems.length, category, freeCount, totalCount);
        container.appendChild(cta);

        console.log('✅ Added', lockedItems.length, 'locked cards + upgrade CTA');
    }

    function findContainer() {
        var selectors = [
            '.cards-grid',
            '.grid',
            '.countries-grid',
            '.forests-grid',
            '.islands-grid',
            '.lakes-grid',
            '.mountains-grid',
            '.rivers-grid',
            '.deserts-grid',
            '.volcanoes-grid',
            '.oceans-grid',
            '.reefs-grid',
            '.games-grid',
            '.items-grid',
            '#forestsGrid',
            '#desertsGrid',
            '#lakesGrid',
            '#islandsGrid',
            '#mountainsGrid',
            '#riversGrid',
            '#volcanoesGrid',
            '#oceansGrid',
            '#countriesGrid',
            '#gamesGrid',
            '[id*="Grid"]',
            '[id*="grid"]',
            '[class*="-grid"]',
            '.cards-container',
            '.cards',
            'main .container'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el) return el;
        }

        return null;
    }

    function createLockedCard(item, index) {
        var card = document.createElement('div');
        card.className = 'card locked-card geo-locked-item';
        card.setAttribute('data-locked-index', index);
        
        var imageSrc = item.image || item.flag || item.img || item.thumbnail || item.photo || item.imageUrl || 'https://via.placeholder.com/300x200?text=Premium';
        var name = item.name || item.title || 'Premium Content';
        var subtitle = item.region || item.country || item.location || item.continent || item.type || '';

        card.innerHTML = 
            '<div class="card-image-wrapper" style="position: relative; overflow: hidden; border-radius: 12px 12px 0 0;">' +
                '<img class="card-image" src="' + imageSrc + '" alt="' + name + '" ' +
                    'style="filter: blur(8px); width: 100%; height: 180px; object-fit: cover; transform: scale(1.1);" ' +
                    'onerror="this.src=\'https://via.placeholder.com/300x200?text=Premium\'">' +
                '<div class="lock-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%); display: flex; flex-direction: column; align-items: center; justify-content: center;">' +
                    '<div class="lock-icon-wrapper" style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">' +
                        '<span class="lock-icon" style="font-size: 28px;">🔒</span>' +
                    '</div>' +
                    '<span class="premium-badge" style="background: linear-gradient(135deg, #FFD700, #FFA500); color: #000; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; margin-top: 10px; text-transform: uppercase;">Premium</span>' +
                '</div>' +
            '</div>' +
            '<div class="card-content" style="padding: 15px; background: #f8f9fa;">' +
                '<h3 class="card-title" style="filter: blur(4px); user-select: none; margin: 0 0 8px 0; font-size: 16px; color: #333;">' + name + '</h3>' +
                '<p class="card-subtitle" style="color: #888; margin: 0; font-size: 13px;">' + subtitle + '</p>' +
                '<div class="unlock-hint" style="margin-top: 10px; padding: 8px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 6px; text-align: center;">' +
                    '<span style="color: white; font-size: 12px; font-weight: 500;">👆 Tap to Unlock</span>' +
                '</div>' +
            '</div>';

        card.style.cssText = 
            'cursor: pointer;' +
            'border-radius: 12px;' +
            'overflow: hidden;' +
            'box-shadow: 0 4px 15px rgba(0,0,0,0.1);' +
            'transition: all 0.3s ease;' +
            'background: white;' +
            'border: 2px solid #e0e0e0;';
        
        // Hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
            this.style.borderColor = '#667eea';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            this.style.borderColor = '#e0e0e0';
        });
        
        // Click to show upgrade modal
        card.addEventListener('click', function() {
            showUpgradeModal();
        });

        return card;
    }

    function createUpgradeCTA(lockedCount, category, freeCount, totalCount) {
        var categoryNames = {
            mountains: 'Mountains',
            rivers: 'Rivers',
            lakes: 'Lakes',
            oceans: 'Ocean Features',
            forests: 'Forests',
            deserts: 'Deserts',
            volcanoes: 'Volcanoes',
            islands: 'Islands',
            coralReefs: 'Coral Reefs',
            encyclopedia: 'Countries',
            upsc: 'UPSC Topics',
            games: 'Games',
            atlas: 'Atlas Maps',
            waterfalls: 'Waterfalls',
            glaciers: 'Glaciers',
            caves: 'Caves',
            parks: 'National Parks'
        };

        var categoryName = categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
        
        var cta = document.createElement('div');
        cta.className = 'upgrade-cta-card geo-upgrade-cta';
        
        cta.style.cssText = 
            'grid-column: 1 / -1;' +
            'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
            'border-radius: 20px;' +
            'padding: 50px 30px;' +
            'text-align: center;' +
            'color: white;' +
            'margin: 30px 0;' +
            'box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);' +
            'position: relative;' +
            'overflow: hidden;';

        cta.innerHTML = 
            '<div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>' +
            '<div style="position: absolute; bottom: -30px; left: -30px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>' +
            '<div style="position: relative; z-index: 1;">' +
                '<div style="font-size: 72px; margin-bottom: 20px;">👑</div>' +
                '<h3 style="font-size: 32px; margin-bottom: 10px; font-weight: bold;">Unlock All ' + categoryName + '</h3>' +
                '<p style="font-size: 20px; opacity: 0.95; margin-bottom: 8px;">' +
                    '<span style="font-size: 48px; font-weight: bold;">' + lockedCount + '</span> more ' + categoryName.toLowerCase() + ' waiting for you!' +
                '</p>' +
                '<p style="font-size: 14px; opacity: 0.8; margin-bottom: 30px;">You\'ve seen ' + freeCount + ' of ' + totalCount + ' total</p>' +
                '<div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">' +
                    '<button class="btn-upgrade-main" style="background: white; color: #667eea; border: none; padding: 18px 50px; border-radius: 50px; font-size: 18px; font-weight: bold; cursor: pointer; transition: all 0.3s; box-shadow: 0 5px 20px rgba(0,0,0,0.2);">' +
                        '🚀 Upgrade to Premium' +
                    '</button>' +
                '</div>' +
                '<div style="margin-top: 25px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">' +
                    '<span style="font-size: 14px; opacity: 0.9;">✓ All ' + totalCount + ' ' + categoryName + '</span>' +
                    '<span style="font-size: 14px; opacity: 0.9;">✓ New Content Weekly</span>' +
                    '<span style="font-size: 14px; opacity: 0.9;">✓ Offline Access</span>' +
                '</div>' +
            '</div>';

        // Hover effects for button
        var mainBtn = cta.querySelector('.btn-upgrade-main');
        
        mainBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
        });
        
        mainBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        });

        mainBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showUpgradeModal();
        });

        return cta;
    }

    // Show upgrade modal - with multiple fallbacks
    function showUpgradeModal() {
        console.log('🔓 Showing upgrade modal...');
        
        // Try various payment/upgrade methods
        if (window.GeoPayment && typeof window.GeoPayment.showModal === 'function') {
            window.GeoPayment.showModal();
            return;
        }
        
        if (window.GeoAccess && typeof window.GeoAccess.showUpgradePrompt === 'function') {
            window.GeoAccess.showUpgradePrompt();
            return;
        }

        if (window.showPaymentModal && typeof window.showPaymentModal === 'function') {
            window.showPaymentModal();
            return;
        }

        if (window.PaymentModal && typeof window.PaymentModal.show === 'function') {
            window.PaymentModal.show();
            return;
        }

        // Fallback: Try to find pricing page
        var pricingPaths = [
            '/pricing',
            '/pricing.html',
            '/upgrade',
            '/upgrade.html',
            '/premium',
            '/premium.html',
            '/subscribe',
            '/subscribe.html'
        ];

        // Check if pricing page exists and redirect
        var basePath = window.location.origin;
        
        // Create a nice modal as ultimate fallback
        createFallbackModal();
    }

    function createFallbackModal() {
        // Remove existing modal if any
        var existingModal = document.getElementById('geo-upgrade-modal');
        if (existingModal) existingModal.remove();

        var modal = document.createElement('div');
        modal.id = 'geo-upgrade-modal';
        modal.style.cssText = 
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: rgba(0,0,0,0.8);' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 999999;' +
            'backdrop-filter: blur(5px);';

        modal.innerHTML = 
            '<div class="modal-content" style="background: white; border-radius: 20px; padding: 40px; max-width: 450px; width: 90%; text-align: center; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">' +
                '<button class="close-modal" style="position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 28px; cursor: pointer; color: #999;">×</button>' +
                '<div style="font-size: 64px; margin-bottom: 20px;">👑</div>' +
                '<h2 style="font-size: 28px; margin-bottom: 15px; color: #333;">Upgrade to Premium</h2>' +
                '<p style="color: #666; margin-bottom: 25px; font-size: 16px;">Get unlimited access to all content across all categories!</p>' +
                '<div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin-bottom: 25px;">' +
                    '<div style="font-size: 36px; font-weight: bold; color: #667eea;">₹299<span style="font-size: 16px; color: #888;">/year</span></div>' +
                    '<p style="color: #888; font-size: 14px; margin-top: 5px;">Less than ₹1/day!</p>' +
                '</div>' +
                '<ul style="text-align: left; margin-bottom: 25px; padding-left: 0; list-style: none;">' +
                    '<li style="padding: 8px 0; color: #555;"><span style="color: #22c55e; margin-right: 10px;">✓</span> 100+ Mountains</li>' +
                    '<li style="padding: 8px 0; color: #555;"><span style="color: #22c55e; margin-right: 10px;">✓</span> 100+ Rivers, Lakes & more</li>' +
                    '<li style="padding: 8px 0; color: #555;"><span style="color: #22c55e; margin-right: 10px;">✓</span> All UPSC Geography Content</li>' +
                    '<li style="padding: 8px 0; color: #555;"><span style="color: #22c55e; margin-right: 10px;">✓</span> Interactive Games</li>' +
                    '<li style="padding: 8px 0; color: #555;"><span style="color: #22c55e; margin-right: 10px;">✓</span> New Content Every Week</li>' +
                '</ul>' +
                '<button class="btn-subscribe" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 16px 40px; border-radius: 50px; font-size: 18px; font-weight: bold; cursor: pointer; width: 100%; transition: all 0.3s;">Subscribe Now</button>' +
                '<p style="margin-top: 15px; font-size: 12px; color: #999;">Secure payment • Cancel anytime</p>' +
            '</div>';

        document.body.appendChild(modal);

        // Close button
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.remove();
        });

        // Click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Subscribe button - redirect to pricing page
        modal.querySelector('.btn-subscribe').addEventListener('click', function() {
            // Try to find and go to pricing page
            var possiblePaths = ['/pricing.html', '/pricing', '/upgrade.html', '/upgrade', '/premium.html', '/premium'];
            
            // Just go to pricing page
            window.location.href = window.location.origin + '/pricing.html';
        });

        // Hover effect
        var subscribeBtn = modal.querySelector('.btn-subscribe');
        subscribeBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
        });
        subscribeBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    }

    // Expose functions globally
    window.GeoPremiumWrapper = {
        showUpgradeModal: showUpgradeModal,
        isUserPremium: isUserPremium,
        FREE_LIMITS: FREE_LIMITS
    };

})();
