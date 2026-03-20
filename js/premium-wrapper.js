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
        
        return null;
    }

    function applyPremiumFilter(category) {
        
        var allData = getAllData(category);
        
        if (!allData || allData.length === 0) {
            console.log('⚠️ No data found for:', category);
            return;
        }

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

        // RIVERS - 10 files
        if (category === 'rivers') {
            for (var i = 1; i <= 10; i++) {
                if (window['riversData' + i]) data = data.concat(window['riversData' + i]);
            }
            if (window.riversData) data = data.concat(window.riversData);
        }

        // DESERTS - 7 files
        if (category === 'deserts') {
            for (var i = 1; i <= 7; i++) {
                if (window['desertsData' + i]) data = data.concat(window['desertsData' + i]);
            }
            if (window.desertsData) data = data.concat(window.desertsData);
        }

        // ENCYCLOPEDIA - 11 files
        if (category === 'encyclopedia') {
            for (var i = 1; i <= 11; i++) {
                if (window['encyclopediaData' + i]) data = data.concat(window['encyclopediaData' + i]);
            }
            if (window.encyclopediaData) data = data.concat(window.encyclopediaData);
            if (window.countriesData) data = data.concat(window.countriesData);
            if (window.allCountries) data = data.concat(window.allCountries);
        }

        // FORESTS - 2 files
        if (category === 'forests') {
            for (var i = 1; i <= 2; i++) {
                if (window['forestsData' + i]) data = data.concat(window['forestsData' + i]);
            }
            if (window.forestsData) data = data.concat(window.forestsData);
        }

        // GAMES - 1 file
        if (category === 'games') {
            if (window.gamesData1) data = data.concat(window.gamesData1);
            if (window.gamesData) data = data.concat(window.gamesData);
        }

        // ISLANDS - 10 files
        if (category === 'islands') {
            for (var i = 1; i <= 10; i++) {
                if (window['islandsData' + i]) data = data.concat(window['islandsData' + i]);
            }
            if (window.islandsData) data = data.concat(window.islandsData);
        }

        // LAKES - 10 files
        if (category === 'lakes') {
            for (var i = 1; i <= 10; i++) {
                if (window['lakesData' + i]) data = data.concat(window['lakesData' + i]);
            }
            if (window.lakesData) data = data.concat(window.lakesData);
        }

        // MOUNTAINS - 10 files
        if (category === 'mountains') {
            for (var i = 1; i <= 10; i++) {
                if (window['mountainsData' + i]) data = data.concat(window['mountainsData' + i]);
            }
            if (window.mountainsData) data = data.concat(window.mountainsData);
        }

        // OCEANS - 1 file
        if (category === 'oceans') {
            if (window.oceansData1) data = data.concat(window.oceansData1);
            if (window.oceansData) data = data.concat(window.oceansData);
        }

        // VOLCANOES - 10 files
        if (category === 'volcanoes') {
            for (var i = 1; i <= 10; i++) {
                if (window['volcanoesData' + i]) data = data.concat(window['volcanoesData' + i]);
            }
            if (window.volcanoesData) data = data.concat(window.volcanoesData);
        }

        // CORAL REEFS - 10 files
        if (category === 'coralReefs') {
            for (var i = 1; i <= 10; i++) {
                if (window['coralReefsData' + i]) data = data.concat(window['coralReefsData' + i]);
            }
            if (window.coralReefsData) data = data.concat(window.coralReefsData);
        }

        // UPSC - Multiple specific files
        if (category === 'upsc') {
            if (window.upscDataBase) data = data.concat(window.upscDataBase);
            if (window.upscDataBiogeography) data = data.concat(window.upscDataBiogeography);
            if (window.upscDataClimatology1) data = data.concat(window.upscDataClimatology1);
            if (window.upscDataClimatology2) data = data.concat(window.upscDataClimatology2);
            if (window.upscDataEconomic) data = data.concat(window.upscDataEconomic);
            if (window.upscDataEnvironment) data = data.concat(window.upscDataEnvironment);
            if (window.upscDataGeomorphology) data = data.concat(window.upscDataGeomorphology);
            if (window.upscDataHuman) data = data.concat(window.upscDataHuman);
            if (window.upscDataIndiaClimate) data = data.concat(window.upscDataIndiaClimate);
            if (window.upscDataIndiaDrainage) data = data.concat(window.upscDataIndiaDrainage);
            if (window.upscDataIndiaPhysical) data = data.concat(window.upscDataIndiaPhysical);
            if (window.upscDataIndiaResources) data = data.concat(window.upscDataIndiaResources);
            if (window.upscDataLandforms) data = data.concat(window.upscDataLandforms);
            if (window.upscDataModels) data = data.concat(window.upscDataModels);
            if (window.upscDataOceanography) data = data.concat(window.upscDataOceanography);
            if (window.upscData) data = data.concat(window.upscData);
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
        if (window.DesertApp) {
            if (window.DesertApp.state) {
                window.DesertApp.state.allDeserts = filtered.visible;
                window.DesertApp.state.filteredDeserts = filtered.visible;
            }
            if (window.DesertApp.renderDeserts) window.DesertApp.renderDeserts();
            if (window.DesertApp.render) window.DesertApp.render();
        }

        // Ocean App
        if (window.OceanApp) {
            if (window.OceanApp.state) {
                window.OceanApp.state.allOceans = filtered.visible;
                window.OceanApp.state.filteredOceans = filtered.visible;
            }
            if (window.OceanApp.renderOceans) window.OceanApp.renderOceans();
            if (window.OceanApp.render) window.OceanApp.render();
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
            if (window.IslandApp.state) {
                window.IslandApp.state.allIslands = filtered.visible;
                window.IslandApp.state.filteredIslands = filtered.visible;
            }
            if (window.IslandApp.renderIslands) window.IslandApp.renderIslands();
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

        // Coral Reef App
        if (window.CoralReefApp) {
            if (window.CoralReefApp.state) {
                window.CoralReefApp.state.allReefs = filtered.visible;
                window.CoralReefApp.state.filteredReefs = filtered.visible;
            }
            if (window.CoralReefApp.renderReefs) window.CoralReefApp.renderReefs();
            if (window.CoralReefApp.render) window.CoralReefApp.render();
        }

        // Games App
        if (window.GamesApp) {
            if (window.GamesApp.state) {
                window.GamesApp.state.allGames = filtered.visible;
                window.GamesApp.state.filteredGames = filtered.visible;
            }
            if (window.GamesApp.renderGames) window.GamesApp.renderGames();
            if (window.GamesApp.render) window.GamesApp.render();
        }

        // UPSC App
        if (window.UpscApp) {
            if (window.UpscApp.state) {
                window.UpscApp.state.allItems = filtered.visible;
                window.UpscApp.state.filteredItems = filtered.visible;
            }
            if (window.UpscApp.renderItems) window.UpscApp.renderItems();
            if (window.UpscApp.render) window.UpscApp.render();
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
            '.items-grid',
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
        
        var imageSrc = item.image || item.flag || item.img || item.thumbnail || '';
        var name = item.name || item.title || 'Premium Content';
        var subtitle = item.region || item.country || item.location || '';

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
