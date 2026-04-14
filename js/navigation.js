// FILE: /js/navigation.js
// UNIVERSAL NAVIGATION SYSTEM FOR DHARAVERSE
// v3.0 - COMPLETE SITE MAP + MULTI-LEVEL BREADCRUMBS

(function () {
    'use strict';

    // ============================================
    // COMPLETE SITE MAP (ALL PAGES)
    // ============================================
    const SITE_MAP = {

        // =====================
        // MAIN PAGES
        // =====================
        home: { path: '/', title: 'Home', icon: '🏠', section: 'main' },
        atlas: { path: '/atlas/atlas.html', title: 'World Atlas', icon: '🗺️', section: 'main' },
        games: { path: '/games/games.html', title: 'Games', icon: '🎮', section: 'main' },
        upsc: { path: '/upsc/upsc.html', title: 'UPSC Prep', icon: '📚', section: 'main' },
        encyclopedia: { path: '/encyclopedia/encyclopedia.html', title: 'Encyclopedia', icon: '📖', section: 'main' },
        contact: { path: '/contact.html', title: 'Contact', icon: '📧', section: 'main' },
        pricing: { path: '/pricing.html', title: 'Pricing', icon: '💎', section: 'main' },
        dashboard: { path: '/dashboard.html', title: 'Dashboard', icon: '📊', section: 'main' },

        // =====================
        // EXPLORE
        // =====================
        timeline: { path: '/timeline.html', title: 'Earth Timeline', icon: '⏳', section: 'explore' },
        mystery: { path: '/mystery.html', title: 'Mysteries', icon: '🔮', section: 'explore' },
        spinGlobe: { path: '/spin-globe.html', title: 'Spin Globe', icon: '🌐', section: 'explore' },

        // =====================
        // AGE ZONES
        // =====================
        kidsZone: { path: '/kids-zone.html', title: 'Kids Zone', icon: '🧒', section: 'zone' },
        juniorZone: { path: '/junior-zone.html', title: 'Junior Zone', icon: '👦', section: 'zone' },
        teenZone: { path: '/teen-zone.html', title: 'Teen Zone', icon: '🧑', section: 'zone' },

        // =====================
        // CONTINENTS
        // =====================
        asia: { path: '/asia.html', title: 'Asia', icon: '🌏', section: 'continent', parent: 'atlas' },
        africa: { path: '/africa.html', title: 'Africa', icon: '🌍', section: 'continent', parent: 'atlas' },
        europe: { path: '/europe.html', title: 'Europe', icon: '🌍', section: 'continent', parent: 'atlas' },
        northAmerica: { path: '/north-america.html', title: 'North America', icon: '🌎', section: 'continent', parent: 'atlas' },
        southAmerica: { path: '/south-america.html', title: 'South America', icon: '🌎', section: 'continent', parent: 'atlas' },
        australia: { path: '/australia.html', title: 'Australia', icon: '🌏', section: 'continent', parent: 'atlas' },
        antarctica: { path: '/antarctica.html', title: 'Antarctica', icon: '🧊', section: 'continent', parent: 'atlas' },

        // =====================
        // LANDSCAPES (Main Pages)
        // =====================
        mountains: { path: '/mountains/mountains.html', title: 'Mountains', icon: '⛰️', section: 'landscape', parent: 'encyclopedia' },
        rivers: { path: '/rivers/rivers.html', title: 'Rivers', icon: '🏞️', section: 'landscape', parent: 'encyclopedia' },
        forests: { path: '/forests/forests.html', title: 'Forests', icon: '🌲', section: 'landscape', parent: 'encyclopedia' },
        deserts: { path: '/deserts/deserts.html', title: 'Deserts', icon: '🏜️', section: 'landscape', parent: 'encyclopedia' },
        oceans: { path: '/oceans/oceans.html', title: 'Oceans', icon: '🌊', section: 'landscape', parent: 'encyclopedia' },
        volcanoes: { path: '/volcanoes/volcanoes.html', title: 'Volcanoes', icon: '🌋', section: 'landscape', parent: 'encyclopedia' },
        lakes: { path: '/lakes/lakes.html', title: 'Lakes', icon: '💧', section: 'landscape', parent: 'encyclopedia' },
        islands: { path: '/islands/islands.html', title: 'Islands', icon: '🏝️', section: 'landscape', parent: 'encyclopedia' },
        coralReefs: { path: '/coral-reefs/coral-reefs.html', title: 'Coral Reefs', icon: '🪸', section: 'landscape', parent: 'encyclopedia' },

        // Landscape Profile Pages
        mountainsProfile: { path: '/mountains/mountains-profile.html', title: 'Mountain Profile', icon: '⛰️', section: 'profile', parent: 'mountains' },
        riversProfile: { path: '/rivers/rivers-profile.html', title: 'River Profile', icon: '🏞️', section: 'profile', parent: 'rivers' },
        forestsProfile: { path: '/forests/forests-profile.html', title: 'Forest Profile', icon: '🌲', section: 'profile', parent: 'forests' },
        desertsProfile: { path: '/deserts/deserts-profile.html', title: 'Desert Profile', icon: '🏜️', section: 'profile', parent: 'deserts' },
        oceansProfile: { path: '/oceans/oceans-profile.html', title: 'Ocean Profile', icon: '🌊', section: 'profile', parent: 'oceans' },
        volcanoesProfile: { path: '/volcanoes/volcanoes-profile.html', title: 'Volcano Profile', icon: '🌋', section: 'profile', parent: 'volcanoes' },
        lakesProfile: { path: '/lakes/lakes-profile.html', title: 'Lake Profile', icon: '💧', section: 'profile', parent: 'lakes' },
        islandsProfile: { path: '/islands/islands-profile.html', title: 'Island Profile', icon: '🏝️', section: 'profile', parent: 'islands' },
        coralReefsProfile: { path: '/coral-reefs/coral-reefs-profile.html', title: 'Coral Reef Profile', icon: '🪸', section: 'profile', parent: 'coralReefs' },

        // Seas
        seas: { path: '/oceans/seas.html', title: 'Seas', icon: '🌊', section: 'landscape', parent: 'oceans' },
        seasProfile: { path: '/oceans/seas-profile.html', title: 'Sea Profile', icon: '🌊', section: 'profile', parent: 'seas' },

        // Forest Education
        forestsEducation: { path: '/forests/forests-education.html', title: 'Forest Education', icon: '📚', section: 'education', parent: 'forests' },

        // =====================
        // ENCYCLOPEDIA SECTIONS
        // =====================

        // --- BHARAT (India) ---
        bharat: { path: '/encyclopedia/bharat/index.html', title: 'Bharat (India)', icon: '🇮🇳', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        bharatPhysical: { path: '/encyclopedia/bharat/physical-geography.html', title: 'Physical Geography', icon: '🗺️', section: 'bharat', parent: 'bharat' },
        bharatPhysiographic: { path: '/encyclopedia/bharat/physiographic-divisions.html', title: 'Physiographic Divisions', icon: '🏔️', section: 'bharat', parent: 'bharat' },
        bharatHimalayas: { path: '/encyclopedia/bharat/himalayas.html', title: 'Himalayas', icon: '⛰️', section: 'bharat', parent: 'bharat' },
        bharatMountains: { path: '/encyclopedia/bharat/mountains.html', title: 'Mountains of India', icon: '🏔️', section: 'bharat', parent: 'bharat' },
        bharatNorthernPlains: { path: '/encyclopedia/bharat/northern-plains.html', title: 'Northern Plains', icon: '🌾', section: 'bharat', parent: 'bharat' },
        bharatPeninsularPlateau: { path: '/encyclopedia/bharat/peninsular-plateau.html', title: 'Peninsular Plateau', icon: '🏜️', section: 'bharat', parent: 'bharat' },
        bharatWesternGhats: { path: '/encyclopedia/bharat/western-ghats.html', title: 'Western Ghats', icon: '🌿', section: 'bharat', parent: 'bharat' },
        bharatEasternGhats: { path: '/encyclopedia/bharat/eastern-ghats.html', title: 'Eastern Ghats', icon: '🌿', section: 'bharat', parent: 'bharat' },
        bharatRivers: { path: '/encyclopedia/bharat/rivers.html', title: 'Rivers of India', icon: '🏞️', section: 'bharat', parent: 'bharat' },
        bharatClimate: { path: '/encyclopedia/bharat/climate.html', title: 'Climate of India', icon: '🌡️', section: 'bharat', parent: 'bharat' },
        bharatSoils: { path: '/encyclopedia/bharat/soils.html', title: 'Soils of India', icon: '🪴', section: 'bharat', parent: 'bharat' },
        bharatVegetation: { path: '/encyclopedia/bharat/vegetation-wildlife.html', title: 'Vegetation & Wildlife', icon: '🐅', section: 'bharat', parent: 'bharat' },
        bharatCoastal: { path: '/encyclopedia/bharat/coastal-geography.html', title: 'Coastal Geography', icon: '🏖️', section: 'bharat', parent: 'bharat' },
        bharatBorders: { path: '/encyclopedia/bharat/borders.html', title: 'Borders', icon: '🗺️', section: 'bharat', parent: 'bharat' },
        bharatDisputed: { path: '/encyclopedia/bharat/disputed-territories.html', title: 'Disputed Territories', icon: '⚔️', section: 'bharat', parent: 'bharat' },
        bharatNorthStates: { path: '/encyclopedia/bharat/north-states.html', title: 'North States', icon: '📍', section: 'bharat', parent: 'bharat' },
        bharatNortheastStates: { path: '/encyclopedia/bharat/northeast-states.html', title: 'Northeast States', icon: '📍', section: 'bharat', parent: 'bharat' },
        bharatWesternStates: { path: '/encyclopedia/bharat/western-states.html', title: 'Western States', icon: '📍', section: 'bharat', parent: 'bharat' },
        bharatStatesWest: { path: '/encyclopedia/bharat/states-west.html', title: 'States (West)', icon: '📍', section: 'bharat', parent: 'bharat' },
        bharatNaturalResources: { path: '/encyclopedia/bharat/natural-resources.html', title: 'Natural Resources', icon: '💎', section: 'bharat', parent: 'bharat' },
        bharatGeological: { path: '/encyclopedia/bharat/geological-features.html', title: 'Geological Features', icon: '🪨', section: 'bharat', parent: 'bharat' },
        bharatEnvironment: { path: '/encyclopedia/bharat/environment-geography.html', title: 'Environment', icon: '🌱', section: 'bharat', parent: 'bharat' },
        bharatCaves: { path: '/encyclopedia/bharat/caves-gorges.html', title: 'Caves & Gorges', icon: '🕳️', section: 'bharat', parent: 'bharat' },
        bharatSundarbans: { path: '/encyclopedia/bharat/sundarbans.html', title: 'Sundarbans', icon: '🌿', section: 'bharat', parent: 'bharat' },
        bharatThar: { path: '/encyclopedia/bharat/thar-desert.html', title: 'Thar Desert', icon: '🏜️', section: 'bharat', parent: 'bharat' },
        bharatWaterfalls: { path: '/encyclopedia/bharat/waterfalls-lakes.html', title: 'Waterfalls & Lakes', icon: '💦', section: 'bharat', parent: 'bharat' },

        // --- BIOGEOGRAPHY ---
        biogeography: { path: '/encyclopedia/biogeography/index.html', title: 'Biogeography', icon: '🧬', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        biodiversity: { path: '/encyclopedia/biogeography/biodiversity.html', title: 'Biodiversity', icon: '🦋', section: 'biogeography', parent: 'biogeography' },
        protectedAreas: { path: '/encyclopedia/biogeography/protected-areas.html', title: 'Protected Areas', icon: '🏞️', section: 'biogeography', parent: 'biogeography' },
        unesco: { path: '/encyclopedia/biogeography/unesco.html', title: 'UNESCO Sites', icon: '🏛️', section: 'biogeography', parent: 'biogeography' },

        // --- CLIMATE ---
        climate: { path: '/encyclopedia/climate/index.html', title: 'Climate', icon: '🌡️', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        climateControls: { path: '/encyclopedia/climate/climate-controls.html', title: 'Climate Controls', icon: '🎛️', section: 'climate', parent: 'climate' },
        koppenComplete: { path: '/encyclopedia/climate/koppen-complete.html', title: 'Köppen Classification', icon: '📊', section: 'climate', parent: 'climate' },
        atmosphereOcean: { path: '/encyclopedia/climate/atmosphere-ocean.html', title: 'Atmosphere & Ocean', icon: '🌊', section: 'climate', parent: 'climate' },
        biomesAquatic: { path: '/encyclopedia/climate/biomes-aquatic.html', title: 'Aquatic Biomes', icon: '🐟', section: 'climate', parent: 'climate' },
        biomesTerrestrial: { path: '/encyclopedia/climate/biomes-terrestrial.html', title: 'Terrestrial Biomes', icon: '🌿', section: 'climate', parent: 'climate' },
        climateChangeDashboard: { path: '/encyclopedia/climate/climate-change-dashboard.html', title: 'Climate Dashboard', icon: '📈', section: 'climate', parent: 'climate' },
        climateChangeImpacts: { path: '/encyclopedia/climate/climate-change-impacts.html', title: 'Climate Impacts', icon: '🔥', section: 'climate', parent: 'climate' },
        climateChangeSolutions: { path: '/encyclopedia/climate/climate-change-solutions.html', title: 'Climate Solutions', icon: '💚', section: 'climate', parent: 'climate' },
        paleoclimate: { path: '/encyclopedia/climate/paleoclimate-history.html', title: 'Paleoclimate', icon: '🦕', section: 'climate', parent: 'climate' },
        phenomenaPrecipitation: { path: '/encyclopedia/climate/phenomena-precipitation.html', title: 'Precipitation', icon: '🌧️', section: 'climate', parent: 'climate' },
        phenomenaStorms: { path: '/encyclopedia/climate/phenomena-storms.html', title: 'Storms', icon: '🌪️', section: 'climate', parent: 'climate' },
        phenomenaTempWind: { path: '/encyclopedia/climate/phenomena-temperature-wind.html', title: 'Temperature & Wind', icon: '💨', section: 'climate', parent: 'climate' },
        climateGlossary: { path: '/encyclopedia/climate/educational-glossary.html', title: 'Climate Glossary', icon: '📖', section: 'climate', parent: 'climate' },
        climateTools: { path: '/encyclopedia/climate/interactive-tools.html', title: 'Interactive Tools', icon: '🛠️', section: 'climate', parent: 'climate' },

        // --- DICTIONARY ---
        dictionary: { path: '/encyclopedia/dictionary/index.html', title: 'Geo Dictionary', icon: '📚', section: 'encyclopedia-sub', parent: 'encyclopedia' },

        // --- ENVIRONMENT GEOGRAPHY ---
        environmentGeography: { path: '/encyclopedia/environment-geography/index.html', title: 'Environment Geography', icon: '🌱', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        earthIssues: { path: '/encyclopedia/environment-geography/earthissues.html', title: 'Earth Issues', icon: '⚠️', section: 'environment', parent: 'environmentGeography' },
        conservationTreaties: { path: '/encyclopedia/environment-geography/conservation-treaties.html', title: 'Conservation Treaties', icon: '📜', section: 'environment', parent: 'environmentGeography' },
        soilIssues: { path: '/encyclopedia/environment-geography/soil-issues.html', title: 'Soil Issues', icon: '🪴', section: 'environment', parent: 'environmentGeography' },
        soils: { path: '/encyclopedia/environment-geography/soils.html', title: 'Soils', icon: '🌍', section: 'environment', parent: 'environmentGeography' },
        envGeoMain: { path: '/encyclopedia/environment-geography/environment-geography.html', title: 'Environment Overview', icon: '🌱', section: 'environment', parent: 'environmentGeography' },

        // --- GEOLOGY ---
        geology: { path: '/encyclopedia/geology/index.html', title: 'Geology', icon: '🪨', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        tectonics: { path: '/encyclopedia/geology/tectonics.html', title: 'Plate Tectonics', icon: '🌋', section: 'geology', parent: 'geology' },
        continentalDrift: { path: '/encyclopedia/geology/continental-drift.html', title: 'Continental Drift', icon: '🗺️', section: 'geology', parent: 'geology' },
        rocksMinerals: { path: '/encyclopedia/geology/rocks-minerals.html', title: 'Rocks & Minerals', icon: '💎', section: 'geology', parent: 'geology' },
        weatheringErosion: { path: '/encyclopedia/geology/weathering-erosion.html', title: 'Weathering & Erosion', icon: '🌊', section: 'geology', parent: 'geology' },

        // --- HISTORICAL GEOGRAPHY ---
        historicalGeography: { path: '/encyclopedia/historical-geography/historical-geo.html', title: 'Historical Geography', icon: '📜', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        ancientGeography: { path: '/encyclopedia/historical-geography/ancient-geography.html', title: 'Ancient Geography', icon: '🏛️', section: 'historical', parent: 'historicalGeography' },
        medievalGeography: { path: '/encyclopedia/historical-geography/medieval.html', title: 'Medieval Geography', icon: '🏰', section: 'historical', parent: 'historicalGeography' },
        colonialHistory: { path: '/encyclopedia/historical-geography/colonial-history.html', title: 'Colonial History', icon: '⚓', section: 'historical', parent: 'historicalGeography' },
        borderEvolution: { path: '/encyclopedia/historical-geography/border-evolution.html', title: 'Border Evolution', icon: '🗺️', section: 'historical', parent: 'historicalGeography' },
        historicalEvents: { path: '/encyclopedia/historical-geography/historical-events.html', title: 'Historical Events', icon: '📅', section: 'historical', parent: 'historicalGeography' },
        geoEra: { path: '/encyclopedia/historical-geography/geoera.html', title: 'Geological Eras', icon: '🦕', section: 'historical', parent: 'historicalGeography' },
        prehistoricEra: { path: '/encyclopedia/historical-geography/prehistoricera.html', title: 'Prehistoric Era', icon: '🗿', section: 'historical', parent: 'historicalGeography' },
        historicalMap: { path: '/encyclopedia/historical-geography/map.html', title: 'Historical Maps', icon: '🗺️', section: 'historical', parent: 'historicalGeography' },

        // --- HUMAN GEOGRAPHY ---
        humanGeography: { path: '/encyclopedia/human-geography/index.html', title: 'Human Geography', icon: '👥', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        population: { path: '/encyclopedia/human-geography/population.html', title: 'Population', icon: '👨‍👩‍👧‍👦', section: 'human', parent: 'humanGeography' },
        cultural: { path: '/encyclopedia/human-geography/cultural.html', title: 'Cultural Geography', icon: '🎭', section: 'human', parent: 'humanGeography' },
        economic: { path: '/encyclopedia/human-geography/economic.html', title: 'Economic Geography', icon: '💰', section: 'human', parent: 'humanGeography' },
        political: { path: '/encyclopedia/human-geography/political.html', title: 'Political Geography', icon: '🏛️', section: 'human', parent: 'humanGeography' },
        settlements: { path: '/encyclopedia/human-geography/settlements.html', title: 'Settlements', icon: '🏘️', section: 'human', parent: 'humanGeography' },
        transportation: { path: '/encyclopedia/human-geography/transportation.html', title: 'Transportation', icon: '🚂', section: 'human', parent: 'humanGeography' },
        development: { path: '/encyclopedia/human-geography/development.html', title: 'Development', icon: '📈', section: 'human', parent: 'humanGeography' },
        health: { path: '/encyclopedia/human-geography/health.html', title: 'Health Geography', icon: '🏥', section: 'human', parent: 'humanGeography' },
        resources: { path: '/encyclopedia/human-geography/resources.html', title: 'Resources', icon: '⛏️', section: 'human', parent: 'humanGeography' },

        // --- HYDROLOGY ---
        hydrology: { path: '/encyclopedia/hydrology/hydrology.html', title: 'Hydrology', icon: '💧', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        waterCycle: { path: '/encyclopedia/hydrology/water-cycle.html', title: 'Water Cycle', icon: '🔄', section: 'hydrology', parent: 'hydrology' },
        groundwater: { path: '/encyclopedia/hydrology/groundwater.html', title: 'Groundwater', icon: '🕳️', section: 'hydrology', parent: 'hydrology' },
        glaciersIce: { path: '/encyclopedia/hydrology/glaciers-ice.html', title: 'Glaciers & Ice', icon: '🧊', section: 'hydrology', parent: 'hydrology' },
        wetlands: { path: '/encyclopedia/hydrology/wetlands.html', title: 'Wetlands', icon: '🌿', section: 'hydrology', parent: 'hydrology' },
        ramsar: { path: '/encyclopedia/hydrology/ramsar.html', title: 'Ramsar Sites', icon: '🏞️', section: 'hydrology', parent: 'hydrology' },

        // --- INTERNATIONAL RELATIONS ---
        ir: { path: '/encyclopedia/ir/index.html', title: 'International Relations', icon: '🌐', section: 'encyclopedia-sub', parent: 'encyclopedia' },

        // --- MAP SCIENCE ---
        mapScience: { path: '/encyclopedia/map-science/index.html', title: 'Map Science', icon: '🗺️', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        cartography: { path: '/encyclopedia/map-science/cartography.html', title: 'Cartography', icon: '📐', section: 'mapScience', parent: 'mapScience' },
        coordinates: { path: '/encyclopedia/map-science/coordinates.html', title: 'Coordinates', icon: '📍', section: 'mapScience', parent: 'mapScience' },
        mapProjections: { path: '/encyclopedia/map-science/map-projections.html', title: 'Map Projections', icon: '🌐', section: 'mapScience', parent: 'mapScience' },
        gisRemoteSensing: { path: '/encyclopedia/map-science/gis-remote-sensing.html', title: 'GIS & Remote Sensing', icon: '🛰️', section: 'mapScience', parent: 'mapScience' },
        timeZones: { path: '/encyclopedia/map-science/time-zones.html', title: 'Time Zones', icon: '🕐', section: 'mapScience', parent: 'mapScience' },

        // --- ORGANIZATIONS ---
        organizations: { path: '/encyclopedia/organizations/index.html', title: 'Organizations', icon: '🏢', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        organizations1: { path: '/encyclopedia/organizations/organizations-1.html', title: 'Organizations (Part 1)', icon: '🏢', section: 'organizations', parent: 'organizations' },
        organizations2: { path: '/encyclopedia/organizations/organizations-2.html', title: 'Organizations (Part 2)', icon: '🏢', section: 'organizations', parent: 'organizations' },

        // --- PHYSICAL GEOGRAPHY ---
        physicalGeography: { path: '/encyclopedia/physical-geography/landforms/index.html', title: 'Physical Geography', icon: '🌍', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        landformsConcept: { path: '/encyclopedia/physical-geography/landforms/concept.html', title: 'Landforms Concepts', icon: '📖', section: 'physical', parent: 'physicalGeography' },
        plains: { path: '/encyclopedia/physical-geography/landforms/plains.html', title: 'Plains', icon: '🌾', section: 'physical', parent: 'physicalGeography' },
        plateaus: { path: '/encyclopedia/physical-geography/landforms/plateaus.html', title: 'Plateaus', icon: '🏜️', section: 'physical', parent: 'physicalGeography' },

        // --- SPACE GEOGRAPHY ---
        spaceGeography: { path: '/encyclopedia/space-geography/index.html', title: 'Space Geography', icon: '🚀', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        earthStructure: { path: '/encyclopedia/space-geography/earth-structure.html', title: 'Earth Structure', icon: '🌍', section: 'space', parent: 'spaceGeography' },
        earthAstronomy: { path: '/encyclopedia/space-geography/earth-astronomy.html', title: 'Earth & Astronomy', icon: '🔭', section: 'space', parent: 'spaceGeography' },
        solarSystem: { path: '/encyclopedia/space-geography/solar-system.html', title: 'Solar System', icon: '☀️', section: 'space', parent: 'spaceGeography' },
        celestialEffects: { path: '/encyclopedia/space-geography/celestial-effects.html', title: 'Celestial Effects', icon: '🌙', section: 'space', parent: 'spaceGeography' },
        spaceObjects: { path: '/encyclopedia/space-geography/space-objects.html', title: 'Space Objects', icon: '☄️', section: 'space', parent: 'spaceGeography' },

        // --- STRATEGIC LOCATIONS ---
        strategicLocations: { path: '/encyclopedia/strategic-locations/index.html', title: 'Strategic Locations', icon: '🎯', section: 'encyclopedia-sub', parent: 'encyclopedia' },

        // Straits
        straits: { path: '/encyclopedia/strategic-locations/straits/index.html', title: 'Straits', icon: '🌊', section: 'strategic', parent: 'strategicLocations' },
        gibraltar: { path: '/encyclopedia/strategic-locations/straits/gibraltar.html', title: 'Strait of Gibraltar', icon: '📍', section: 'strait', parent: 'straits' },
        malacca: { path: '/encyclopedia/strategic-locations/straits/malacca.html', title: 'Strait of Malacca', icon: '📍', section: 'strait', parent: 'straits' },
        hormuz: { path: '/encyclopedia/strategic-locations/straits/hormuz.html', title: 'Strait of Hormuz', icon: '📍', section: 'strait', parent: 'straits' },
        bosphorus: { path: '/encyclopedia/strategic-locations/straits/bosphorus.html', title: 'Bosphorus', icon: '📍', section: 'strait', parent: 'straits' },
        dardanelles: { path: '/encyclopedia/strategic-locations/straits/dardanelles.html', title: 'Dardanelles', icon: '📍', section: 'strait', parent: 'straits' },
        dover: { path: '/encyclopedia/strategic-locations/straits/dover.html', title: 'Strait of Dover', icon: '📍', section: 'strait', parent: 'straits' },
        babElMandeb: { path: '/encyclopedia/strategic-locations/straits/Bab-el-mandeb.html', title: 'Bab-el-Mandeb', icon: '📍', section: 'strait', parent: 'straits' },
        palk: { path: '/encyclopedia/strategic-locations/straits/palk.html', title: 'Palk Strait', icon: '📍', section: 'strait', parent: 'straits' },
        magellan: { path: '/encyclopedia/strategic-locations/straits/magellan.html', title: 'Strait of Magellan', icon: '📍', section: 'strait', parent: 'straits' },
        sunda: { path: '/encyclopedia/strategic-locations/straits/sunda.html', title: 'Sunda Strait', icon: '📍', section: 'strait', parent: 'straits' },
        taiwan: { path: '/encyclopedia/strategic-locations/straits/taiwan.html', title: 'Taiwan Strait', icon: '📍', section: 'strait', parent: 'straits' },
        korea: { path: '/encyclopedia/strategic-locations/straits/korea.html', title: 'Korea Strait', icon: '📍', section: 'strait', parent: 'straits' },
        danish: { path: '/encyclopedia/strategic-locations/straits/danish.html', title: 'Danish Straits', icon: '📍', section: 'strait', parent: 'straits' },
        juanDeFuca: { path: '/encyclopedia/strategic-locations/straits/juan-de-fuca.html', title: 'Juan de Fuca', icon: '📍', section: 'strait', parent: 'straits' },

        // Canals
        canals: { path: '/encyclopedia/strategic-locations/canals/', title: 'Canals', icon: '🚢', section: 'strategic', parent: 'strategicLocations' },
        suezCanal: { path: '/encyclopedia/strategic-locations/canals/suez.html', title: 'Suez Canal', icon: '📍', section: 'canal', parent: 'canals' },
        panamaCanal: { path: '/encyclopedia/strategic-locations/canals/panama.html', title: 'Panama Canal', icon: '📍', section: 'canal', parent: 'canals' },
        kielCanal: { path: '/encyclopedia/strategic-locations/canals/kiel.html', title: 'Kiel Canal', icon: '📍', section: 'canal', parent: 'canals' },

        // Capes & Points
        capes: { path: '/encyclopedia/strategic-locations/capes-points/capes.html', title: 'Capes & Points', icon: '🏔️', section: 'strategic', parent: 'strategicLocations' },

        // Isthmuses
        isthmuses: { path: '/encyclopedia/strategic-locations/isthmuses/index.html', title: 'Isthmuses', icon: '🌉', section: 'strategic', parent: 'strategicLocations' },
        panamaIsthmus: { path: '/encyclopedia/strategic-locations/isthmuses/panama.html', title: 'Isthmus of Panama', icon: '📍', section: 'isthmus', parent: 'isthmuses' },
        suezIsthmus: { path: '/encyclopedia/strategic-locations/isthmuses/suez.html', title: 'Isthmus of Suez', icon: '📍', section: 'isthmus', parent: 'isthmuses' },
        perekop: { path: '/encyclopedia/strategic-locations/isthmuses/perekop.html', title: 'Perekop Isthmus', icon: '📍', section: 'isthmus', parent: 'isthmuses' },
        tehuantepec: { path: '/encyclopedia/strategic-locations/isthmuses/tehuantepec.html', title: 'Isthmus of Tehuantepec', icon: '📍', section: 'isthmus', parent: 'isthmuses' },

        // Mountain Passes
        mountainPasses: { path: '/encyclopedia/strategic-locations/mountain-passes/passes.html', title: 'Mountain Passes', icon: '🏔️', section: 'strategic', parent: 'strategicLocations' },
        khyberPass: { path: '/encyclopedia/strategic-locations/mountain-passes/khyber-pass.html', title: 'Khyber Pass', icon: '📍', section: 'pass', parent: 'mountainPasses' },
        brennerPass: { path: '/encyclopedia/strategic-locations/mountain-passes/brenner-pass.html', title: 'Brenner Pass', icon: '📍', section: 'pass', parent: 'mountainPasses' },
        salangPass: { path: '/encyclopedia/strategic-locations/mountain-passes/salang-pass.html', title: 'Salang Pass', icon: '📍', section: 'pass', parent: 'mountainPasses' },
        wakhanCorridor: { path: '/encyclopedia/strategic-locations/mountain-passes/wakhan-corridor.html', title: 'Wakhan Corridor', icon: '📍', section: 'pass', parent: 'mountainPasses' },

        // Peninsulas
        peninsulas: { path: '/encyclopedia/strategic-locations/peninsulas/index.html', title: 'Peninsulas', icon: '🏝️', section: 'strategic', parent: 'strategicLocations' },
        arabianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/arabian-peninsula.html', title: 'Arabian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        indianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/indian-peninsula.html', title: 'Indian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        balkanPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/balkan-peninsula.html', title: 'Balkan Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        iberianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/iberian-peninsula.html', title: 'Iberian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        italianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/italian-peninsula.html', title: 'Italian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        scandinavianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/scandinavian-peninsula.html', title: 'Scandinavian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        indochinaPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/indochina-peninsula.html', title: 'Indochina Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        malayPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/malay-peninsula.html', title: 'Malay Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        koreanPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/korean-peninsula.html', title: 'Korean Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        anatolianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/anatolian-peninsula.html', title: 'Anatolian Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        sinaiPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/sinai-peninsula.html', title: 'Sinai Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        floridaPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/florida-peninsula.html', title: 'Florida Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        bajaPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/baja-peninsula.html', title: 'Baja Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        yucatanPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/yucatan-peninsula.html', title: 'Yucatán Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        kamchatkaPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/kamchatka-peninsula.html', title: 'Kamchatka Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        kolaPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/kola-peninsula.html', title: 'Kola Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        cremianPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/cremian-peninsula.html', title: 'Crimean Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        peloponnesePeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/peloponnese-peninsula.html', title: 'Peloponnese', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        olympicPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/olympic-peninsula.html', title: 'Olympic Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },
        capeYorkPeninsula: { path: '/encyclopedia/strategic-locations/peninsulas/capeyork-peninsula.html', title: 'Cape York Peninsula', icon: '📍', section: 'peninsula', parent: 'peninsulas' },

        // Ports
        ports: { path: '/encyclopedia/strategic-locations/ports/ports.html', title: 'Ports', icon: '⚓', section: 'strategic', parent: 'strategicLocations' },

        // =====================
        // ENCYCLOPEDIA SPECIAL PAGES
        // =====================
        earthSimulator: { path: '/encyclopedia/ency/earth-simulator.html', title: 'Earth Simulator', icon: '🌍', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        bts: { path: '/encyclopedia/ency/bts.html', title: 'Behind The Scenes', icon: '🎬', section: 'encyclopedia-sub', parent: 'encyclopedia' },
        encyclopediaEnvGeo: { path: '/encyclopedia/environmental-geography.html', title: 'Environmental Geography', icon: '🌱', section: 'encyclopedia-sub', parent: 'encyclopedia' },

        // =====================
        // GAMES (Individual)
        // =====================
        flagforge: { path: '/games/flagforge.html', title: 'Flag Forge', icon: '🏳️', section: 'game', parent: 'games' },
        geoblitz: { path: '/games/geoblitz.html', title: 'GeoBlitz', icon: '⚡', section: 'game', parent: 'games' },
        geochain: { path: '/games/geochain.html', title: 'GeoChain', icon: '🔗', section: 'game', parent: 'games' },
        geodetective: { path: '/games/geodetective.html', title: 'GeoDetective', icon: '🔍', section: 'game', parent: 'games' },
        geomemory: { path: '/games/geomemory.html', title: 'GeoMemory', icon: '🧠', section: 'game', parent: 'games' },
        georunner: { path: '/games/georunner.html', title: 'GeoRunner', icon: '🏃', section: 'game', parent: 'games' },
        geoslot: { path: '/games/geoslot.html', title: 'GeoSlot', icon: '🎰', section: 'game', parent: 'games' },
        geosnipe: { path: '/games/geosnipe.html', title: 'GeoSnipe', icon: '🎯', section: 'game', parent: 'games' },
        geosounds: { path: '/games/geosounds.html', title: 'GeoSounds', icon: '🔊', section: 'game', parent: 'games' },
        geospellAdventure: { path: '/games/geospell-adventure.html', title: 'GeoSpell', icon: '✏️', section: 'game', parent: 'games' },
        geoword: { path: '/games/geoword.html', title: 'GeoWord', icon: '📝', section: 'game', parent: 'games' },
        geowords: { path: '/games/geowords.html', title: 'GeoWords', icon: '🔤', section: 'game', parent: 'games' },
        energyPuzzle: { path: '/games/energy-puzzle.html', title: 'Energy Puzzle', icon: '⚡', section: 'game', parent: 'games' },
        geoGladiator: { path: '/games/geo-gladiator.html', title: 'Geo Gladiator', icon: '⚔️', section: 'game', parent: 'games' },
        letterRunner: { path: '/games/letter-runner.html', title: 'Letter Runner', icon: '🔠', section: 'game', parent: 'games' },
        mapAssembler: { path: '/games/mapassembler.html', title: 'Map Assembler', icon: '🧩', section: 'game', parent: 'games' },
        memoryBuddies: { path: '/games/memorybuddies.html', title: 'Memory Buddies', icon: '👯', section: 'game', parent: 'games' },
        numeroquest: { path: '/games/numeroquest.html', title: 'NumeroQuest', icon: '🔢', section: 'game', parent: 'games' },
        puzzles: { path: '/games/puzzels.html', title: 'Puzzles', icon: '🧩', section: 'game', parent: 'games' },
        shrinkingMap: { path: '/games/shrinking-map.html', title: 'Shrinking Map', icon: '🗺️', section: 'game', parent: 'games' },
        swipeGame: { path: '/games/swipe-game.html', title: 'Swipe Game', icon: '👆', section: 'game', parent: 'games' },

        // =====================
        // UPSC PROFILE
        // =====================
        upscProfile: { path: '/upsc/upsc-profile.html', title: 'UPSC Profile', icon: '📋', section: 'profile', parent: 'upsc' },

        // =====================
        // TIMELINE PARTS
        // =====================
        timelinePart1: { path: '/timeline-part1.html', title: 'Timeline Part 1', icon: '⏳', section: 'timeline', parent: 'timeline' },
        timelinePart2: { path: '/timeline-part2.html', title: 'Timeline Part 2', icon: '⏳', section: 'timeline', parent: 'timeline' },
        timelinePart3: { path: '/timeline-part3.html', title: 'Timeline Part 3', icon: '⏳', section: 'timeline', parent: 'timeline' },

        // =====================
        // LEGAL
        // =====================
        privacy: { path: '/legal/privacy-policy.html', title: 'Privacy Policy', icon: '🔒', section: 'legal' },
        terms: { path: '/legal/terms-and-conditions.html', title: 'Terms & Conditions', icon: '📋', section: 'legal' }
    };

    // ============================================
    // RELATIONSHIPS
    // ============================================
    const RELATIONSHIPS = {
        asia: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['europe', 'australia', 'encyclopedia']
        },
        africa: {
            landscapes: ['deserts', 'rivers', 'forests', 'mountains', 'lakes'],
            relatedPages: ['europe', 'asia', 'encyclopedia']
        },
        europe: {
            landscapes: ['mountains', 'rivers', 'forests', 'islands'],
            relatedPages: ['asia', 'africa', 'encyclopedia']
        },
        northAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts', 'lakes'],
            relatedPages: ['southAmerica', 'encyclopedia']
        },
        southAmerica: {
            landscapes: ['mountains', 'rivers', 'forests', 'deserts'],
            relatedPages: ['northAmerica', 'encyclopedia']
        },
        australia: {
            landscapes: ['deserts', 'coralReefs', 'forests', 'islands'],
            relatedPages: ['asia', 'antarctica', 'encyclopedia']
        },
        antarctica: {
            landscapes: ['mountains', 'oceans', 'volcanoes'],
            relatedPages: ['australia', 'southAmerica', 'encyclopedia']
        },
        mountains: {
            continents: ['asia', 'europe', 'northAmerica', 'southAmerica', 'africa', 'antarctica'],
            relatedLandscapes: ['rivers', 'forests', 'volcanoes', 'lakes']
        },
        rivers: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'forests', 'lakes', 'oceans']
        },
        forests: {
            continents: ['southAmerica', 'africa', 'asia', 'northAmerica', 'europe', 'australia'],
            relatedLandscapes: ['mountains', 'rivers', 'lakes']
        },
        deserts: {
            continents: ['africa', 'asia', 'australia', 'northAmerica', 'southAmerica'],
            relatedLandscapes: ['mountains', 'oceans']
        },
        oceans: {
            continents: ['asia', 'africa', 'europe', 'northAmerica', 'southAmerica', 'australia', 'antarctica'],
            relatedLandscapes: ['islands', 'coralReefs', 'rivers']
        },
        volcanoes: {
            continents: ['asia', 'northAmerica', 'southAmerica', 'europe', 'antarctica'],
            relatedLandscapes: ['mountains', 'islands', 'oceans']
        },
        lakes: {
            continents: ['africa', 'northAmerica', 'asia', 'europe', 'southAmerica'],
            relatedLandscapes: ['mountains', 'rivers', 'forests']
        },
        islands: {
            continents: ['asia', 'europe', 'northAmerica', 'australia'],
            relatedLandscapes: ['oceans', 'coralReefs', 'volcanoes']
        },
        coralReefs: {
            continents: ['australia', 'asia', 'northAmerica', 'africa'],
            relatedLandscapes: ['oceans', 'islands']
        },
        bharat: {
            relatedPages: ['asia', 'encyclopedia'],
            relatedLandscapes: ['mountains', 'rivers', 'deserts', 'forests']
        },
        strategicLocations: {
            relatedPages: ['encyclopedia', 'atlas'],
            relatedLandscapes: ['oceans', 'mountains', 'islands']
        },
        straits: {
            relatedPages: ['strategicLocations', 'oceans'],
            relatedLandscapes: ['islands', 'peninsulas']
        },
        climate: {
            relatedPages: ['encyclopedia', 'environmentGeography'],
            relatedLandscapes: ['oceans', 'forests', 'deserts']
        },
        geology: {
            relatedPages: ['encyclopedia', 'spaceGeography'],
            relatedLandscapes: ['mountains', 'volcanoes']
        },
        humanGeography: {
            relatedPages: ['encyclopedia', 'atlas'],
            relatedLandscapes: ['rivers', 'forests']
        },
        hydrology: {
            relatedPages: ['encyclopedia', 'climate'],
            relatedLandscapes: ['rivers', 'lakes', 'oceans']
        },
        spaceGeography: {
            relatedPages: ['encyclopedia', 'geology', 'climate']
        },
        mapScience: {
            relatedPages: ['encyclopedia', 'atlas']
        },
        biogeography: {
            relatedPages: ['encyclopedia', 'environmentGeography'],
            relatedLandscapes: ['forests', 'coralReefs', 'islands']
        },
        historicalGeography: {
            relatedPages: ['encyclopedia', 'atlas', 'bharat']
        },
        environmentGeography: {
            relatedPages: ['encyclopedia', 'climate', 'biogeography'],
            relatedLandscapes: ['forests', 'oceans', 'rivers']
        }
    };

    // ============================================
    // DETECT CURRENT PAGE (IMPROVED - 4 LEVEL)
    // ============================================
    function getCurrentPageKey() {
        var path = window.location.pathname;

        // Remove trailing slash
        path = path.replace(/\/$/, '');

        // If empty path, it's home
        if (path === '' || path === '/index.html') return 'home';

        // 1. EXACT MATCH
        for (var key in SITE_MAP) {
            if (SITE_MAP.hasOwnProperty(key)) {
                var pagePath = SITE_MAP[key].path.replace(/\/$/, '');
                if (path === pagePath || path === pagePath.replace('.html', '')) {
                    return key;
                }
            }
        }

        // 2. MATCH BY FILENAME
        var currentFile = path.split('/').pop();
        if (currentFile) {
            for (var key in SITE_MAP) {
                if (SITE_MAP.hasOwnProperty(key)) {
                    var siteFile = SITE_MAP[key].path.split('/').pop();
                    if (currentFile === siteFile) {
                        return key;
                    }
                }
            }
        }

        // 3. MATCH BY KEY IN URL
        for (var key in SITE_MAP) {
            if (SITE_MAP.hasOwnProperty(key)) {
                var keyLower = key.toLowerCase();
                var pathLower = path.toLowerCase();
                if (pathLower.indexOf('/' + keyLower + '/') !== -1 ||
                    pathLower.indexOf('/' + keyLower + '.html') !== -1) {
                    return key;
                }
            }
        }

        // 4. SMART SEGMENT MATCHING
        var pathParts = path.split('/').filter(Boolean);
        for (var p = pathParts.length - 1; p >= 0; p--) {
            var segment = pathParts[p].replace('.html', '').toLowerCase();
            // Convert kebab-case to camelCase for matching
            var camelSegment = segment.replace(/-([a-z])/g, function(m, c) { return c.toUpperCase(); });
            for (var key in SITE_MAP) {
                if (key.toLowerCase() === segment || key.toLowerCase() === camelSegment) {
                    return key;
                }
            }
        }

        return 'home';
    }

    // ============================================
    // THEME SYSTEM
    // ============================================
    function initTheme() {
        var saved = localStorage.getItem('dv-theme');
        if (saved === 'light') {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    }

    function applyTheme(theme) {
        var body = document.body;

        body.classList.remove(
            'dark-theme', 'light-theme',
            'dark-mode', 'light-mode',
            'dark', 'light',
            'theme-dark', 'theme-light'
        );
        body.removeAttribute('data-theme');

        if (theme === 'light') {
            body.classList.add('light-theme');
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('dv-theme', 'light');
        } else {
            body.classList.add('dark-theme');
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('dv-theme', 'dark');
        }

        var btn = document.querySelector('.dv-theme-btn');
        if (btn) {
            btn.textContent = theme === 'light' ? '🌙' : '☀️';
            btn.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        }
    }

    function toggleTheme() {
        var isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    }

    // ============================================
    // INJECT HEADER
    // ============================================
    function injectHeader() {
        var currentKey = getCurrentPageKey();

        var oldHeader = document.querySelector('header:not(.dv-header)');
        if (oldHeader) oldHeader.remove();
        var existingDvHeader = document.querySelector('.dv-header');
        if (existingDvHeader) existingDvHeader.remove();

        // Determine which nav items are active
        var encyclopediaPages = ['encyclopedia', 'mountains', 'rivers', 'forests', 'deserts',
            'oceans', 'volcanoes', 'lakes', 'islands', 'coralReefs', 'seas',
            'bharat', 'biogeography', 'climate', 'dictionary', 'environmentGeography',
            'geology', 'historicalGeography', 'humanGeography', 'hydrology', 'ir',
            'mapScience', 'organizations', 'physicalGeography', 'spaceGeography',
            'strategicLocations', 'straits', 'canals', 'capes', 'isthmuses',
            'mountainPasses', 'peninsulas', 'ports'];

        // Check if current page is under encyclopedia
        var isEncyclopedia = false;
        var checkKey = currentKey;
        while (checkKey) {
            if (checkKey === 'encyclopedia') {
                isEncyclopedia = true;
                break;
            }
            if (encyclopediaPages.indexOf(checkKey) !== -1) {
                isEncyclopedia = true;
                break;
            }
            checkKey = SITE_MAP[checkKey] ? SITE_MAP[checkKey].parent : null;
        }

        var headerHTML = '<header class="dv-header" id="dv-header">' +
            '<div class="dv-header-container">' +
            '<a href="/" class="dv-logo">' +
            '<img src="/logo.png" alt="DharaVerse" class="dv-logo-img" onerror="this.style.display=\'none\'">' +
            '<span class="dv-logo-text">DHARAVERSE</span>' +
            '</a>' +
            '<nav class="dv-nav-desktop" id="dv-nav-desktop">' +
            '<a href="/atlas/atlas.html" class="' + (currentKey === 'atlas' ? 'active' : '') + '">🗺️ Atlas</a>' +
            '<a href="/games/games.html" class="' + (currentKey === 'games' || (SITE_MAP[currentKey] && SITE_MAP[currentKey].parent === 'games') ? 'active' : '') + '">🎮 Games</a>' +
            '<a href="/upsc/upsc.html" class="' + (currentKey === 'upsc' || currentKey === 'upscProfile' ? 'active' : '') + '">📚 UPSC</a>' +
            '<a href="/encyclopedia/encyclopedia.html" class="' + (isEncyclopedia ? 'active' : '') + '">📖 Encyclopedia</a>' +
            '<a href="/contact.html" class="' + (currentKey === 'contact' ? 'active' : '') + '">📧 Contact</a>' +
            '</nav>' +
            '<div class="dv-header-actions">' +
            '<button type="button" class="dv-search-btn" id="dv-search-toggle" title="Search (Ctrl+K)">🔍</button>' +
            '<button type="button" class="dv-theme-btn" id="dv-theme-toggle" title="Toggle Theme">☀️</button>' +
            '<button type="button" class="dv-hamburger" id="dv-hamburger-btn"><span></span><span></span><span></span></button>' +
            '</div>' +
            '</div>' +

            // Search Overlay
            '<div class="dv-search-overlay" id="dv-search-overlay">' +
            '<div class="dv-search-container">' +
            '<input type="text" id="dv-search-input" placeholder="Search countries, mountains, rivers..." autocomplete="off">' +
            '<button type="button" id="dv-search-close">✕</button>' +
            '</div>' +
            '<div class="dv-search-results" id="dv-search-results"></div>' +
            '</div>' +

            // Mobile Menu
            '<div class="dv-mobile-menu" id="dv-mobile-menu">' +
            '<div class="dv-mobile-menu-section">' +
            '<h3>🧭 Navigate</h3>' +
            '<a href="/">🏠 Home</a>' +
            '<a href="/atlas/atlas.html">🗺️ World Atlas</a>' +
            '<a href="/games/games.html">🎮 Games</a>' +
            '<a href="/upsc/upsc.html">📚 UPSC Prep</a>' +
            '<a href="/encyclopedia/encyclopedia.html">📖 Encyclopedia</a>' +
            '<a href="/contact.html">📧 Contact</a>' +
            '</div>' +
            '<div class="dv-mobile-menu-section">' +
            '<h3>🌍 Continents</h3>' +
            '<a href="/asia.html">🌏 Asia</a>' +
            '<a href="/africa.html">🌍 Africa</a>' +
            '<a href="/europe.html">🌍 Europe</a>' +
            '<a href="/north-america.html">🌎 North America</a>' +
            '<a href="/south-america.html">🌎 South America</a>' +
            '<a href="/australia.html">🌏 Australia</a>' +
            '<a href="/antarctica.html">🧊 Antarctica</a>' +
            '</div>' +
            '<div class="dv-mobile-menu-section">' +
            '<h3>🏔️ Landscapes</h3>' +
            '<a href="/mountains/mountains.html">⛰️ Mountains</a>' +
            '<a href="/rivers/rivers.html">🏞️ Rivers</a>' +
            '<a href="/forests/forests.html">🌲 Forests</a>' +
            '<a href="/deserts/deserts.html">🏜️ Deserts</a>' +
            '<a href="/oceans/oceans.html">🌊 Oceans</a>' +
            '<a href="/volcanoes/volcanoes.html">🌋 Volcanoes</a>' +
            '<a href="/lakes/lakes.html">💧 Lakes</a>' +
            '<a href="/islands/islands.html">🏝️ Islands</a>' +
            '<a href="/coral-reefs/coral-reefs.html">🪸 Coral Reefs</a>' +
            '</div>' +
            '<div class="dv-mobile-menu-section">' +
            '<h3>🔍 Discover</h3>' +
            '<a href="/timeline.html">⏳ Earth Timeline</a>' +
            '<a href="/mystery.html">🔮 Mysteries</a>' +
            '<a href="/pricing.html">💎 Premium</a>' +
            '</div>' +
            '</div>' +
            '</header>';

        document.body.insertAdjacentHTML('afterbegin', headerHTML);

        // ============================================
        // ATTACH EVENT LISTENERS
        // ============================================

        var themeBtn = document.getElementById('dv-theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
            });
        }

        var searchBtn = document.getElementById('dv-search-toggle');
        if (searchBtn) {
            searchBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleSearch();
            });
        }

        var searchClose = document.getElementById('dv-search-close');
        if (searchClose) {
            searchClose.addEventListener('click', function (e) {
                e.preventDefault();
                toggleSearch();
            });
        }

        var hamburgerBtn = document.getElementById('dv-hamburger-btn');
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });
        }

        var searchInput = document.getElementById('dv-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                var results = performSearch(this.value);
                var container = document.getElementById('dv-search-results');
                if (!container) return;

                if (results.length === 0 && this.value.length >= 2) {
                    container.innerHTML = '<div class="dv-search-empty">No results found. Try different keywords.</div>';
                } else if (results.length > 0) {
                    container.innerHTML = results.map(function (r) {
                        return '<a href="' + r.path + '" class="dv-search-result">' +
                            '<span class="dv-search-result-icon">' + r.icon + '</span>' +
                            '<span class="dv-search-result-title">' + r.title + '</span>' +
                            '<span class="dv-search-result-section">' + r.section + '</span>' +
                            '</a>';
                    }).join('');
                } else {
                    container.innerHTML = '';
                }
            });
        }
    }

    // ============================================
    // TOGGLE FUNCTIONS
    // ============================================
    function toggleSearch() {
        var overlay = document.getElementById('dv-search-overlay');
        if (!overlay) return;
        var isActive = overlay.classList.contains('active');
        overlay.classList.toggle('active');

        if (!isActive) {
            var input = document.getElementById('dv-search-input');
            if (input) {
                setTimeout(function () { input.focus(); }, 150);
            }
        }

        var mobileMenu = document.getElementById('dv-mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
    }

    function toggleMobileMenu() {
        var menu = document.getElementById('dv-mobile-menu');
        var hamburger = document.getElementById('dv-hamburger-btn');
        if (menu) menu.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');

        var searchOverlay = document.getElementById('dv-search-overlay');
        if (searchOverlay) searchOverlay.classList.remove('active');
    }

    // ============================================
    // SEARCH
    // ============================================
    var SEARCH_DATA = [];

    for (var key in SITE_MAP) {
        if (SITE_MAP.hasOwnProperty(key)) {
            var page = SITE_MAP[key];
            SEARCH_DATA.push({
                title: page.title,
                icon: page.icon,
                path: page.path,
                section: page.section,
                keywords: (page.title + ' ' + page.section + ' ' + key).toLowerCase()
            });
        }
    }

    var extras = [
        { title: 'Mount Everest', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'everest highest mountain nepal' },
        { title: 'Amazon River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'amazon river south america brazil' },
        { title: 'Sahara Desert', icon: '🏜️', path: '/deserts/deserts.html', keywords: 'sahara desert africa largest' },
        { title: 'Pacific Ocean', icon: '🌊', path: '/oceans/oceans.html', keywords: 'pacific ocean largest deepest' },
        { title: 'Great Barrier Reef', icon: '🪸', path: '/coral-reefs/coral-reefs.html', keywords: 'great barrier reef australia coral' },
        { title: 'Himalayas', icon: '⛰️', path: '/mountains/mountains.html', keywords: 'himalayas mountain asia nepal india' },
        { title: 'Nile River', icon: '🏞️', path: '/rivers/rivers.html', keywords: 'nile river africa egypt longest' },
        { title: 'Map Quiz', icon: '🎮', path: '/games/games.html', keywords: 'map quiz game play' },
        { title: 'Flag Quiz', icon: '🏳️', path: '/games/games.html', keywords: 'flag quiz game countries' },
        { title: 'India', icon: '🇮🇳', path: '/encyclopedia/bharat/index.html', keywords: 'india bharat asia country' },
        { title: 'United States', icon: '🇺🇸', path: '/north-america.html', keywords: 'usa united states america' },
        { title: 'Plate Tectonics', icon: '🌋', path: '/encyclopedia/geology/tectonics.html', keywords: 'plate tectonics earthquake' },
        { title: 'Water Cycle', icon: '🔄', path: '/encyclopedia/hydrology/water-cycle.html', keywords: 'water cycle evaporation condensation' },
        { title: 'Solar System', icon: '☀️', path: '/encyclopedia/space-geography/solar-system.html', keywords: 'solar system planets sun' },
        { title: 'Suez Canal', icon: '🚢', path: '/encyclopedia/strategic-locations/canals/suez.html', keywords: 'suez canal egypt shipping' },
        { title: 'Khyber Pass', icon: '🏔️', path: '/encyclopedia/strategic-locations/mountain-passes/khyber-pass.html', keywords: 'khyber pass afghanistan pakistan' },
        { title: 'Climate Change', icon: '🔥', path: '/encyclopedia/climate/climate-change-impacts.html', keywords: 'climate change global warming' },
        { title: 'Biodiversity', icon: '🦋', path: '/encyclopedia/biogeography/biodiversity.html', keywords: 'biodiversity species ecosystem' },
        { title: 'Population', icon: '👨‍👩‍👧‍👦', path: '/encyclopedia/human-geography/population.html', keywords: 'population density demographics' }
    ];

    for (var i = 0; i < extras.length; i++) {
        extras[i].section = 'search';
        SEARCH_DATA.push(extras[i]);
    }

    function performSearch(query) {
        if (!query || query.length < 2) return [];
        var q = query.toLowerCase();
        var results = [];
        for (var i = 0; i < SEARCH_DATA.length; i++) {
            if (SEARCH_DATA[i].keywords.indexOf(q) !== -1) {
                results.push(SEARCH_DATA[i]);
            }
            if (results.length >= 10) break;
        }
        return results;
    }

    // ============================================
    // INJECT BREADCRUMBS (MULTI-LEVEL)
    // ============================================
    function injectBreadcrumbs() {
        var currentKey = getCurrentPageKey();
        if (currentKey === 'home') return;

        var currentPage = SITE_MAP[currentKey];
        if (!currentPage) return;

        var oldBread = document.querySelector('.dv-breadcrumbs');
        if (oldBread) oldBread.remove();

        // BUILD FULL PATH (walk up through ALL parents)
        var crumbs = [];
        var pageKey = currentKey;
        var maxDepth = 10; // Safety limit

        while (pageKey && SITE_MAP[pageKey] && maxDepth > 0) {
            var page = SITE_MAP[pageKey];
            crumbs.unshift({
                title: page.title,
                icon: page.icon,
                path: page.path,
                key: pageKey
            });
            pageKey = page.parent || null;
            maxDepth--;
        }

        // Always add Home at the beginning
        crumbs.unshift({ title: 'Home', icon: '🏠', path: '/' });

        // Build HTML
        var html = '<nav class="dv-breadcrumbs"><div class="dv-breadcrumbs-container">';
        for (var i = 0; i < crumbs.length; i++) {
            if (i === crumbs.length - 1) {
                html += '<span class="dv-breadcrumb-current">' + crumbs[i].icon + ' ' + crumbs[i].title + '</span>';
            } else {
                html += '<a href="' + crumbs[i].path + '" class="dv-breadcrumb-link">' + crumbs[i].icon + ' ' + crumbs[i].title + '</a>';
                html += '<span class="dv-breadcrumb-sep">›</span>';
            }
        }
        html += '</div></nav>';

        var header = document.getElementById('dv-header');
        if (header) {
            header.insertAdjacentHTML('afterend', html);
        }
    }

    // ============================================
    // INJECT RELATED PAGES
    // ============================================
    function injectRelatedPages() {
        var currentKey = getCurrentPageKey();
        var relations = RELATIONSHIPS[currentKey];

        // If no direct relations, try parent's relations
        if (!relations && SITE_MAP[currentKey] && SITE_MAP[currentKey].parent) {
            relations = RELATIONSHIPS[SITE_MAP[currentKey].parent];
        }

        if (!relations) return;

        var oldRelated = document.querySelector('.dv-related-section');
        if (oldRelated) oldRelated.remove();

        var html = '<section class="dv-related-section"><div class="dv-related-container">';
        html += '<h2 class="dv-related-title">🔗 Explore Related</h2>';
        html += '<div class="dv-related-grid">';

        function addCards(keys, type) {
            if (!keys) return;
            for (var i = 0; i < keys.length; i++) {
                var page = SITE_MAP[keys[i]];
                if (page) {
                    html += '<a href="' + page.path + '" class="dv-related-card dv-related-' + type + '">';
                    html += '<span class="dv-related-icon">' + page.icon + '</span>';
                    html += '<span class="dv-related-name">' + page.title + '</span>';
                    html += '<span class="dv-related-type">' + type + '</span>';
                    html += '</a>';
                }
            }
        }

        addCards(relations.continents, 'continent');
        addCards(relations.landscapes, 'landscape');
        addCards(relations.relatedLandscapes, 'landscape');
        addCards(relations.relatedPages, 'explore');

        html += '<a href="/games/games.html" class="dv-related-card dv-related-action">';
        html += '<span class="dv-related-icon">🎮</span>';
        html += '<span class="dv-related-name">Test Knowledge</span>';
        html += '<span class="dv-related-type">Games</span></a>';

        html += '<a href="/atlas/atlas.html" class="dv-related-card dv-related-action">';
        html += '<span class="dv-related-icon">🗺️</span>';
        html += '<span class="dv-related-name">View on Map</span>';
        html += '<span class="dv-related-type">Atlas</span></a>';

        html += '</div></div></section>';

        var footer = document.querySelector('footer') || document.querySelector('.dv-footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', html);
        } else {
            document.body.insertAdjacentHTML('beforeend', html);
        }
    }

    // ============================================
    // INJECT FOOTER
    // ============================================
    function injectFooter() {
        var oldFooter = document.querySelector('footer:not(.dv-footer)');
        if (oldFooter) oldFooter.remove();
        var existingDvFooter = document.querySelector('.dv-footer');
        if (existingDvFooter) existingDvFooter.remove();

        var html = '<footer class="dv-footer">';
        html += '<div class="dv-footer-main">';

        html += '<div class="dv-footer-brand">';
        html += '<a href="/"><img src="/logo.png" alt="DharaVerse" onerror="this.style.display=\'none\'">';
        html += '<span class="dv-footer-logo-text">DHARAVERSE</span></a>';
        html += '<p>Your Gateway to Global Geography</p>';
        html += '<div class="dv-footer-social">';
        html += '<a href="https://www.youtube.com/@Kdiscovering" target="_blank" rel="noopener">📺</a>';
        html += '<a href="https://www.instagram.com/keepdiscover11" target="_blank" rel="noopener">📸</a>';
        html += '<a href="mailto:kdiscovering@gmail.com">📧</a>';
        html += '</div></div>';

        html += '<div class="dv-footer-links"><h4>🧭 Explore</h4>';
        html += '<a href="/atlas/atlas.html">World Atlas</a>';
        html += '<a href="/games/games.html">Games</a>';
        html += '<a href="/encyclopedia/encyclopedia.html">Encyclopedia</a>';
        html += '<a href="/timeline.html">Earth Timeline</a>';
        html += '<a href="/mystery.html">Mysteries</a>';
        html += '<a href="/pricing.html">Premium</a></div>';

        html += '<div class="dv-footer-links"><h4>🌍 Continents</h4>';
        html += '<a href="/asia.html">Asia</a>';
        html += '<a href="/africa.html">Africa</a>';
        html += '<a href="/europe.html">Europe</a>';
        html += '<a href="/north-america.html">N. America</a>';
        html += '<a href="/south-america.html">S. America</a>';
        html += '<a href="/australia.html">Australia</a>';
        html += '<a href="/antarctica.html">Antarctica</a></div>';

        html += '<div class="dv-footer-links"><h4>🏔️ Landscapes</h4>';
        html += '<a href="/mountains/mountains.html">Mountains</a>';
        html += '<a href="/rivers/rivers.html">Rivers</a>';
        html += '<a href="/forests/forests.html">Forests</a>';
        html += '<a href="/deserts/deserts.html">Deserts</a>';
        html += '<a href="/oceans/oceans.html">Oceans</a>';
        html += '<a href="/volcanoes/volcanoes.html">Volcanoes</a>';
        html += '<a href="/lakes/lakes.html">Lakes</a>';
        html += '<a href="/islands/islands.html">Islands</a>';
        html += '<a href="/coral-reefs/coral-reefs.html">Coral Reefs</a></div>';

        html += '<div class="dv-footer-links"><h4>📚 Learn</h4>';
        html += '<a href="/upsc/upsc.html">UPSC Prep</a>';
        html += '<a href="/encyclopedia/bharat/index.html">Bharat</a>';
        html += '<a href="/encyclopedia/climate/index.html">Climate</a>';
        html += '<a href="/encyclopedia/geology/index.html">Geology</a>';
        html += '<a href="/contact.html">Contact</a>';
        html += '<a href="/legal/privacy-policy.html">Privacy Policy</a>';
        html += '<a href="/legal/terms-and-conditions.html">Terms</a></div>';

        html += '</div>';

        html += '<div class="dv-footer-bottom">';
        html += '<p>© 2025 DharaVerse. Made with 💜 by Rudhvee Baletiya</p>';
        html += '<p class="dv-footer-tagline">Discover Earth. Learn Geography. Explore the World.</p>';
        html += '</div></footer>';

        document.body.insertAdjacentHTML('beforeend', html);
    }

    // ============================================
    // INJECT MOBILE BOTTOM NAV
    // ============================================
    function injectMobileNav() {
        var currentKey = getCurrentPageKey();

        var oldNav = document.querySelector('.mobile-bottom-nav');
        if (oldNav) oldNav.remove();
        var oldDvNav = document.querySelector('.dv-mobile-bottom-nav');
        if (oldDvNav) oldDvNav.remove();

        var html = '<nav class="dv-mobile-bottom-nav" id="dv-mobile-bottom-nav">';

        var items = [
            { href: '/atlas/atlas.html', icon: '🗺️', label: 'Atlas', key: 'atlas' },
            { href: '/games/games.html', icon: '🎮', label: 'Games', key: 'games' },
            { href: '/', icon: '🌍', label: '', key: 'home', center: true },
            { href: '/upsc/upsc.html', icon: '📚', label: 'UPSC', key: 'upsc' },
            { href: '/encyclopedia/encyclopedia.html', icon: '📖', label: 'More', key: 'encyclopedia' }
        ];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var activeClass = currentKey === item.key ? ' active' : '';

            if (item.center) {
                html += '<a href="' + item.href + '" class="dv-mob-nav-item dv-mob-nav-center' + activeClass + '">';
                html += '<span class="dv-mob-nav-icon-center">' + item.icon + '</span>';
                html += '</a>';
            } else {
                html += '<a href="' + item.href + '" class="dv-mob-nav-item' + activeClass + '">';
                html += '<span class="dv-mob-nav-icon">' + item.icon + '</span>';
                html += '<span class="dv-mob-nav-label">' + item.label + '</span>';
                html += '</a>';
            }
        }

        html += '</nav>';
        document.body.insertAdjacentHTML('beforeend', html);
    }

    // ============================================
    // INJECT DISCOVERY FAB
    // ============================================
    function injectDiscoveryButton() {
        var oldFab = document.getElementById('dv-discovery-fab');
        if (oldFab) oldFab.remove();
        var oldPanel = document.getElementById('dv-discovery-panel');
        if (oldPanel) oldPanel.remove();

        var html = '<div class="dv-discovery-fab" id="dv-discovery-fab">🧭</div>';

        html += '<div class="dv-discovery-panel" id="dv-discovery-panel">';
        html += '<div class="dv-discovery-header"><h3>🧭 Quick Navigate</h3>';
        html += '<button type="button" id="dv-discovery-close">✕</button></div>';
        html += '<div class="dv-discovery-content">';

        html += '<div class="dv-discovery-section"><h4>🌍 Continents</h4><div class="dv-discovery-chips">';
        html += '<a href="/asia.html" class="dv-chip">🌏 Asia</a>';
        html += '<a href="/africa.html" class="dv-chip">🌍 Africa</a>';
        html += '<a href="/europe.html" class="dv-chip">🌍 Europe</a>';
        html += '<a href="/north-america.html" class="dv-chip">🌎 N.America</a>';
        html += '<a href="/south-america.html" class="dv-chip">🌎 S.America</a>';
        html += '<a href="/australia.html" class="dv-chip">🌏 Australia</a>';
        html += '<a href="/antarctica.html" class="dv-chip">🧊 Antarctica</a>';
        html += '</div></div>';

        html += '<div class="dv-discovery-section"><h4>🏔️ Landscapes</h4><div class="dv-discovery-chips">';
        html += '<a href="/mountains/mountains.html" class="dv-chip">⛰️ Mountains</a>';
        html += '<a href="/rivers/rivers.html" class="dv-chip">🏞️ Rivers</a>';
        html += '<a href="/forests/forests.html" class="dv-chip">🌲 Forests</a>';
        html += '<a href="/deserts/deserts.html" class="dv-chip">🏜️ Deserts</a>';
        html += '<a href="/oceans/oceans.html" class="dv-chip">🌊 Oceans</a>';
        html += '<a href="/volcanoes/volcanoes.html" class="dv-chip">🌋 Volcanoes</a>';
        html += '<a href="/lakes/lakes.html" class="dv-chip">💧 Lakes</a>';
        html += '<a href="/islands/islands.html" class="dv-chip">🏝️ Islands</a>';
        html += '<a href="/coral-reefs/coral-reefs.html" class="dv-chip">🪸 Reefs</a>';
        html += '</div></div>';

        html += '<div class="dv-discovery-section"><h4>📖 Encyclopedia</h4><div class="dv-discovery-chips">';
        html += '<a href="/encyclopedia/bharat/index.html" class="dv-chip">🇮🇳 Bharat</a>';
        html += '<a href="/encyclopedia/climate/index.html" class="dv-chip">🌡️ Climate</a>';
        html += '<a href="/encyclopedia/geology/index.html" class="dv-chip">🪨 Geology</a>';
        html += '<a href="/encyclopedia/space-geography/index.html" class="dv-chip">🚀 Space</a>';
        html += '<a href="/encyclopedia/strategic-locations/index.html" class="dv-chip">🎯 Strategic</a>';
        html += '<a href="/encyclopedia/human-geography/index.html" class="dv-chip">👥 Human</a>';
        html += '<a href="/encyclopedia/hydrology/hydrology.html" class="dv-chip">💧 Hydrology</a>';
        html += '<a href="/encyclopedia/biogeography/index.html" class="dv-chip">🧬 Bio</a>';
        html += '<a href="/encyclopedia/dictionary/index.html" class="dv-chip">📚 Dictionary</a>';
        html += '</div></div>';

        html += '<div class="dv-discovery-section"><h4>⚡ Quick</h4><div class="dv-discovery-chips">';
        html += '<a href="/atlas/atlas.html" class="dv-chip">🗺️ Atlas</a>';
        html += '<a href="/games/games.html" class="dv-chip">🎮 Games</a>';
        html += '<a href="/upsc/upsc.html" class="dv-chip">📚 UPSC</a>';
        html += '<a href="/timeline.html" class="dv-chip">⏳ Timeline</a>';
        html += '<a href="/mystery.html" class="dv-chip">🔮 Mystery</a>';
        html += '<a href="/pricing.html" class="dv-chip">💎 Premium</a>';
        html += '</div></div>';

        html += '</div></div>';

        document.body.insertAdjacentHTML('beforeend', html);

        var fab = document.getElementById('dv-discovery-fab');
        if (fab) {
            fab.addEventListener('click', function (e) {
                e.preventDefault();
                toggleDiscovery();
            });
        }

        var closeBtn = document.getElementById('dv-discovery-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                toggleDiscovery();
            });
        }
    }

    function toggleDiscovery() {
        var panel = document.getElementById('dv-discovery-panel');
        var fab = document.getElementById('dv-discovery-fab');
        if (panel) panel.classList.toggle('active');
        if (fab) fab.classList.toggle('active');
    }

    // ============================================
    // KEYBOARD SHORTCUTS
    // ============================================
    function setupKeyboard() {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }

            if (e.key === 'Escape') {
                var search = document.getElementById('dv-search-overlay');
                var menu = document.getElementById('dv-mobile-menu');
                var discovery = document.getElementById('dv-discovery-panel');
                var fab = document.getElementById('dv-discovery-fab');
                var hamburger = document.getElementById('dv-hamburger-btn');

                if (search) search.classList.remove('active');
                if (menu) menu.classList.remove('active');
                if (discovery) discovery.classList.remove('active');
                if (fab) fab.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    }

    // ============================================
    // INITIALIZE
    // ============================================
    function init() {
        initTheme();
        injectHeader();
        injectBreadcrumbs();
        injectRelatedPages();
        injectFooter();
        injectMobileNav();
        injectDiscoveryButton();
        setupKeyboard();

        var saved = localStorage.getItem('dv-theme') || 'dark';
        applyTheme(saved);

        console.log('🌍 DharaVerse Nav v3.0 Loaded');
        console.log('📍 Current: ' + getCurrentPageKey());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
