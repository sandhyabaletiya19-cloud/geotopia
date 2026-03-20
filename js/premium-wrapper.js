// ========================================
// PREMIUM CONTENT WRAPPER - UNIVERSAL
// Works for ALL category pages
// ========================================

(function() {
    
    window.addEventListener('DOMContentLoaded', function() {
        
        var checkInterval = setInterval(function() {
            
            if (typeof window.GeoAccess !== 'undefined') {
                clearInterval(checkInterval);
                initPremiumWrapper();
            }
            
        }, 100);
        
        setTimeout(function() {
            clearInterval(checkInterval);
        }, 3000);
    });

    function initPremiumWrapper() {
        
        var category = detectCategory();
        
        if (!category) {
            console.log('⚠️ No category detected');
            return;
        }

        console.log('🔐 Premium wrapper active for:', category);

        setTimeout(function() {
            applyPremiumFilter(category);
        }, 600);
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
        
        return null;
    }

    function applyPremiumFilter(category) {
        
        var allData = getAllData(category);
        
        if (!allData || allData.length === 0) {
            console.log('⚠️ No data found for:', category);
            return;
        }

        console.log('📊 Total data found:', allData.length);

        var filtered = window.GeoAccess.getFilteredData(allData, category);
        
        console.log('✅ Filtered:', filtered.visible.length, 'visible,', filtered.lockedCount, 'locked');

        overrideAppState(category, filtered);

        setTimeout(function() {
            addLockedContent(category, filtered);
        }, 300);
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
        }

        // FORESTS - forestsData1, forestsData2
        if (category === 'forests') {
            if (window.forestsData1) data = data.concat(window.forestsData1);
            if (window.forestsData2) data = data.concat(window.forestsData2);
            if (window.forestsData) data = data.concat(window.forestsData);
        }

        // LAKES - getAllLakesData function
        if (category === 'lakes') {
            if (typeof window.getAllLakesData === 'function') {
                data = data.concat(window.getAllLakesData());
            }
            if (window.LAKES_DATA) data = data.concat(window.LAKES_DATA);
            if (window.lakesData) data = data.concat(window.lakesData);
        }

        // ISLANDS - getAllIslands function
        if (category === 'islands') {
            if (typeof window.getAllIslands === 'function') {
                data = data.concat(window.getAllIslands());
            }
            if (window.ISLANDS_DATA) data = data.concat(window.ISLANDS_DATA);
            if (window.islandsData) data = data.concat(window.islandsData);
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
            for (var i = 1; i <= 5; i++) {
                if (window['volcanoesData' + i]) data = data.concat(window['volcanoesData' + i]);
            }
            if (window.volcanoesData) data = data.concat(window.volcanoesData);
            if (window.VOLCANOES_DATA) data = data.concat(window.VOLCANOES_DATA);
        }

        // CORAL REEFS
        if (category === 'coralReefs') {
            for (var i = 1; i <= 10; i++) {
                if (window['coralReefsData' + i]) data = data.concat(window['coralReefsData' + i]);
            }
            if (window.coralReefsData) data = data.concat(window.coralReefsData);
            if (window.CORAL_REEFS_DATA) data = data.concat(window.CORAL_REEFS_DATA);
        }

        // OCEANS
        if (category === 'oceans') {
            if (window.OCEANS_DATA) data = data.concat(window.OCEANS_DATA);
            if (window.oceansData) data = data.concat(window.oceansData);
            if (window.oceansData1) data = data.concat(window.oceansData1);
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
        }

        // GAMES
        if (category === 'games') {
            if (window.gamesData) data = data.concat(window.gamesData);
            if (window.GAMES_DATA) data = data.concat(window.GAMES_DATA);
        }

        // ATLAS
        if (category === 'atlas') {
            if (window.atlasData) data = data.concat(window.atlasData);
            if (window.ATLAS_DATA) data = data.concat(window.ATLAS_DATA);
        }

        return data;
    }

    // Override app state with filtered data
    function overrideAppState(category, filtered) {

        // Encyclopedia App
        if (window.EncyclopediaApp) {
            if (window.EncyclopediaApp.state) {
                window.EncyclopediaApp.state.allCountries = filtered.visible;
                window.EncyclopediaApp.state.filteredCountries = filtered.visible;
            }
            if (window.EncyclopediaApp.countries) {
                window.EncyclopediaApp.countries = filtered.visible;
            }
            if (window.EncyclopediaApp.renderCountries) window.EncyclopediaApp.renderCountries();
            if (window.EncyclopediaApp.render) window.EncyclopediaApp.render();
        }

        // Forest App
        if (window.ForestApp) {
            if (window.ForestApp.state) {
                window.ForestApp.state.allForests = filtered.visible;
                window.ForestApp.state.filteredForests = filtered.visible;
            }
            if (window.ForestApp.renderForests) window.ForestApp.renderForests();
        }

        // Desert App
        if (window.DesertApp || window.APP_STATE) {
            if (window.APP_STATE) {
                window.APP_STATE.desertsData = filtered.visible;
                window.APP_STATE.filteredDeserts = filtered.visible;
            }
            if (window.DesertApp && window.DesertApp.state) {
                window.DesertApp.state.allDeserts = filtered.visible;
                window.DesertApp.state.filteredDeserts = filtered.visible;
            }
            if (window.renderDeserts) window.renderDeserts();
            if (window.DesertApp && window.DesertApp.render) window.DesertApp.render();
        }

        // Mountain App
        if (window.MountainApp) {
            if (window.MountainApp.state) {
                window.MountainApp.state.allMountains = filtered.visible;
                window.MountainApp.state.filteredMountains = filtered.visible;
            }
            if (window.MountainApp.renderMountains) window.MountainApp.renderMountains();
            if (window.MountainApp.render) window.MountainApp.render();
        }

        // Island App
        if (window.IslandApp) {
            if (window.IslandApp.islands) {
                window.IslandApp.islands = filtered.visible;
            }
            if (window.IslandApp.filteredIslands) {
                window.IslandApp.filteredIslands = filtered.visible;
            }
            if (window.IslandApp.render) window.IslandApp.render();
        }

        // Lake App
        if (window.LakeApp) {
            if (window.LakeApp.state) {
                window.LakeApp.state.allLakes = filtered.visible;
                window.LakeApp.state.filteredLakes = filtered.visible;
            }
            if (window.LakeApp.renderLakes) window.LakeApp.renderLakes();
            if (window.LakeApp.render) window.LakeApp.render();
        }

        // River App
        if (window.RiverApp) {
            if (window.RiverApp.state) {
                window.RiverApp.state.allRivers = filtered.visible;
                window.RiverApp.state.filteredRivers = filtered.visible;
            }
            if (window.RiverApp.renderRivers) window.RiverApp.renderRivers();
            if (window.RiverApp.render) window.RiverApp.render();
        }

        // Volcano App
        if (window.VolcanoApp) {
            if (window.VolcanoApp.state) {
                window.VolcanoApp.state.allVolcanoes = filtered.visible;
                window.VolcanoApp.state.filteredVolcanoes = filtered.visible;
            }
            if (window.VolcanoApp.renderVolcanoes) window.VolcanoApp.renderVolcanoes();
            if (window.VolcanoApp.render) window.VolcanoApp.render();
        }

        // Ocean App
        if (window.OceanApp) {
            if (window.OceanApp.state) {
                window.OceanApp.state.allOceans = filtered.visible;
                window.OceanApp.state.filteredOceans = filtered.visible;
            }
            if (window.OceanApp.render) window.OceanApp.render();
        }

        // Coral Reef App
        if (window.CoralReefApp) {
            if (window.CoralReefApp.state) {
                window.CoralReefApp.state.allReefs = filtered.visible;
                window.CoralReefApp.state.filteredReefs = filtered.visible;
            }
            if (window.CoralReefApp.render) window.CoralReefApp.render();
        }

        // UPSC App
        if (window.UpscApp) {
            if (window.UpscApp.state) {
                window.UpscApp.state.allItems = filtered.visible;
                window.UpscApp.state.filteredItems = filtered.visible;
            }
            if (window.UpscApp.render) window.UpscApp.render();
        }

        // Games App
        if (window.GamesApp) {
            if (window.GamesApp.state) {
                window.GamesApp.state.allGames = filtered.visible;
            }
            if (window.GamesApp.render) window.GamesApp.render();
        }
    }

    // Add locked preview cards and upgrade CTA
    function addLockedContent(category, filtered) {
        
        var container = findContainer();
        
        if (!container) {
            console.log('⚠️ Container not found');
            return;
        }

        if (filtered.preview && filtered.preview.length > 0) {
            filtered.preview.forEach(function(item) {
                var lockedCard = createLockedCard(item);
                container.appendChild(lockedCard);
            });
        }

        if (filtered.lockedCount > 0) {
            var cta = createUpgradeCTA(filtered.lockedCount, category);
            container.appendChild(cta);
        }
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
            '.items-grid',
            '#forestsGrid',
            '#desertsGrid',
            '#lakesGrid',
            '#islandsGrid',
            '#mountainsGrid',
            '#riversGrid',
            '#volcanoesGrid',
            '#countriesGrid',
            '[id*="Grid"]',
            '[id*="grid"]',
            '[class*="grid"]',
            '.cards',
            'main .container'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el) return el;
        }

        return null;
    }

    function createLockedCard(item) {
        var card = document.createElement('div');
        card.className = 'card locked-card geo-locked-item';
        
        var imageSrc = item.image || item.flag || item.img || item.thumbnail || item.photo || '';
        var name = item.name || item.title || 'Premium Content';
        var subtitle = item.region || item.country || item.location || item.continent || '';

        card.innerHTML = 
            '<div class="card-image-wrapper" style="position: relative; overflow: hidden;">' +
                '<img class="card-image" src="' + imageSrc + '" alt="' + name + '" style="filter: blur(8px); width: 100%; height: 200px; object-fit: cover;">' +
                '<div class="lock-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center;">' +
                    '<span class="lock-icon" style="font-size: 48px;">🔒</span>' +
                    '<span class="lock-text" style="color: white; font-weight: bold; margin-top: 10px;">Premium</span>' +
                '</div>' +
            '</div>' +
            '<div class="card-content" style="padding: 15px;">' +
                '<h3 class="card-title" style="filter: blur(4px); user-select: none;">' + name + '</h3>' +
                '<p class="card-subtitle" style="color: #888;">' + subtitle + '</p>' +
            '</div>';

        card.style.cssText = 'cursor: pointer; opacity: 0.9; transition: all 0.3s;';
        
        card.addEventListener('click', function() {
            if (window.GeoAccess && window.GeoAccess.showUpgradePrompt) {
                window.GeoAccess.showUpgradePrompt();
            } else if (window.GeoPayment && window.GeoPayment.showModal) {
                window.GeoPayment.showModal();
            } else {
                alert('Upgrade to Premium to unlock this content!');
            }
        });

        return card;
    }

    function createUpgradeCTA(lockedCount, category) {
        var categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        
        var cta = document.createElement('div');
        cta.className = 'upgrade-cta-card geo-upgrade-cta';
        
        cta.style.cssText = 
            'grid-column: 1 / -1;' +
            'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
            'border-radius: 20px;' +
            'padding: 40px 20px;' +
            'text-align: center;' +
            'color: white;' +
            'margin: 20px 0;' +
            'box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);';

        cta.innerHTML = 
            '<div style="font-size: 64px; margin-bottom: 15px;">👑</div>' +
            '<h3 style="font-size: 28px; margin-bottom: 15px; font-weight: bold;">Unlock ' + lockedCount + ' More ' + categoryName + '</h3>' +
            '<p style="font-size: 16px; opacity: 0.9; margin-bottom: 25px;">Get premium access to explore all content</p>' +
            '<button class="btn-upgrade" style="background: white; color: #667eea; border: none; padding: 15px 40px; border-radius: 50px; font-size: 18px; font-weight: bold; cursor: pointer;">Upgrade to Premium</button>';

        cta.querySelector('.btn-upgrade').addEventListener('click', function() {
            if (window.GeoAccess && window.GeoAccess.showUpgradePrompt) {
                window.GeoAccess.showUpgradePrompt();
            } else if (window.GeoPayment && window.GeoPayment.showModal) {
                window.GeoPayment.showModal();
            }
        });

        return cta;
    }

})();
