/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data File 1
   Volcanoes 1-10 (Highest Elevation First)
   ═══════════════════════════════════════════════════════════ */

window.volcanoesData1 = [
    // ═══════════════════════════════════════════════════════════
    // #1 - OJOS DEL SALADO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'ojos-del-salado',
        name: 'Ojos del Salado',
        nativeName: 'Ojos del Salado',
        countries: [
            { name: 'Chile', code: 'CL' },
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        region: 'Atacama Desert',
        
        elevation: 6893,
        prominence: 3688,
        coordinates: [-27.1094, -68.5414],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Andean Volcanic Belt',
            subduction: true
        },
        
        lastEruption: {
            year: 1300,
            name: 'Unknown',
            vei: 2,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 1300, name: 'Holocene eruption', vei: 2 },
            { year: -500, name: 'Prehistoric', vei: 3 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '100m',
            depth: '50m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Copiapó', coordinates: [-27.3668, -70.3314], distance: '180km', population: 160000 },
            { name: 'Fiambalá', coordinates: [-27.6833, -67.6167], distance: '95km', population: 5000 },
            { name: 'San Fernando del Valle', coordinates: [-28.4696, -65.7852], distance: '250km', population: 200000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Low' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Lahars', risk: 'Low' }
        ],
        
        economicImportance: [
            { label: 'Mountaineering', value: 'Highest volcano in the world - attracts climbers' },
            { label: 'Mining', value: 'Copper and gold deposits in region' },
            { label: 'Tourism', value: 'Adventure tourism destination' }
        ],
        
        environmentalImpact: [
            { label: 'Climate', value: 'Extremely arid - minimal vegetation' },
            { label: 'Water', value: 'Small crater lake at 6,390m - world\'s highest' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1937, description: 'Climbed by Polish expedition led by Jan Alfred Szczepański' },
            { event: 'Highest lake discovered', year: 1993, description: 'World\'s highest lake found at 6,390m elevation' }
        ],
        
        funFacts: [
            'Highest volcano on Earth at 6,893 meters',
            'Second highest peak in the Western Hemisphere after Aconcagua',
            'Contains the world\'s highest lake at 6,390m',
            'Despite being dormant, has active fumaroles near summit',
            'Name means "Eyes of Salt" in Spanish'
        ],
        
        image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=1920',
        
        flyOverWaypoints: [
            { name: 'Atacama Approach', coordinates: [-27.5, -69.0], zoom: 8, description: 'Flying over the Atacama Desert' },
            { name: 'Border View', coordinates: [-27.2, -68.7], zoom: 10, description: 'Chile-Argentina border region' },
            { name: 'Summit Approach', coordinates: [-27.11, -68.55], zoom: 12, description: 'Approaching the summit' },
            { name: 'Crater View', coordinates: [-27.1094, -68.5414], zoom: 14, description: 'View of the crater' },
            { name: 'Final Position', coordinates: [-27.1094, -68.5414], zoom: 11, description: 'The world\'s highest volcano' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #2 - LLULLAILLACO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'llullaillaco',
        name: 'Llullaillaco',
        nativeName: 'Llullaillaco',
        countries: [
            { name: 'Chile', code: 'CL' },
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        region: 'Puna de Atacama',
        
        elevation: 6739,
        prominence: 2156,
        coordinates: [-24.7197, -68.5347],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Central Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 1877,
            name: 'Historical eruption',
            vei: 2,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 1877, name: 'Historical eruption', vei: 2 },
            { year: 1854, name: 'Minor eruption', vei: 1 },
            { year: -3000, name: 'Major prehistoric', vei: 4 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '400m',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'San Pedro de Atacama', coordinates: [-22.9087, -68.1997], distance: '200km', population: 10000 },
            { name: 'Salta', coordinates: [-24.7821, -65.4232], distance: '280km', population: 620000 },
            { name: 'Antofagasta', coordinates: [-23.6509, -70.3975], distance: '350km', population: 400000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Lava flows', risk: 'Low' }
        ],
        
        economicImportance: [
            { label: 'Archaeology', value: 'Major Inca sacrificial site - mummies discovered' },
            { label: 'Tourism', value: 'UNESCO World Heritage considerations' },
            { label: 'Research', value: 'High-altitude research station nearby' }
        ],
        
        environmentalImpact: [
            { label: 'Climate', value: 'High-altitude desert ecosystem' },
            { label: 'Past eruptions', value: 'Pyroclastic deposits cover wide area' }
        ],
        
        famousEvents: [
            { event: 'Mummy discovery', year: 1999, description: 'Three perfectly preserved Inca child mummies found near summit' },
            { event: 'First ascent', year: 1952, description: 'First documented climb by Chilean expedition' }
        ],
        
        funFacts: [
            'World\'s highest archaeological site - Inca shrine at summit',
            'Three Inca child mummies discovered in 1999 (Children of Llullaillaco)',
            'Second highest active volcano in the world',
            'Name means "water that deceives" in Kunza language',
            'Has the highest evidence of Inca presence on any mountain'
        ],
        
        image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=1920',
        
        flyOverWaypoints: [
            { name: 'Puna Plateau', coordinates: [-25.0, -68.8], zoom: 8, description: 'Over the Puna de Atacama' },
            { name: 'Eastern Slopes', coordinates: [-24.8, -68.4], zoom: 10, description: 'Viewing the eastern face' },
            { name: 'Archaeological Site', coordinates: [-24.72, -68.53], zoom: 12, description: 'Near the Inca shrine' },
            { name: 'Summit', coordinates: [-24.7197, -68.5347], zoom: 14, description: 'The sacred summit' },
            { name: 'Overview', coordinates: [-24.7197, -68.5347], zoom: 10, description: 'Full volcano view' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #3 - TIPAS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'tipas',
        name: 'Tipas',
        nativeName: 'Nevado de Tipas',
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        region: 'Catamarca Province',
        
        elevation: 6658,
        prominence: 1658,
        coordinates: [-27.1958, -68.5556],
        defaultZoom: 10,
        
        volcanoType: 'Caldera',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Andean Volcanic Belt',
            subduction: true
        },
        
        lastEruption: {
            year: -8000,
            name: 'Holocene eruption',
            vei: 4,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: -8000, name: 'Holocene eruption', vei: 4 }
        ],
        
        lavaType: 'Dacitic',
        
        crater: {
            diameter: '3km',
            depth: '500m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Fiambalá', coordinates: [-27.6833, -67.6167], distance: '100km', population: 5000 },
            { name: 'Tinogasta', coordinates: [-28.0667, -67.5667], distance: '130km', population: 15000 },
            { name: 'Catamarca', coordinates: [-28.4696, -65.7852], distance: '250km', population: 200000 }
        ],
        
        hazards: [
            { type: 'Ash fall', risk: 'Low' },
            { type: 'Lava flows', risk: 'Low' },
            { type: 'Lahars', risk: 'Low' }
        ],
        
        economicImportance: [
            { label: 'Mining', value: 'Gold and copper deposits in area' },
            { label: 'Mountaineering', value: 'Remote climbing destination' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'High-altitude puna grassland' },
            { label: 'Glaciation', value: 'Small glaciers on upper slopes' }
        ],
        
        famousEvents: [
            { event: 'Geological survey', year: 1985, description: 'First comprehensive geological mapping' }
        ],
        
        funFacts: [
            'Third highest volcano in the world',
            'Part of a complex volcanic field',
            'Has a large caldera with multiple peaks',
            'Located in one of the most remote areas of the Andes',
            'Snow-capped year-round despite being in a desert region'
        ],
        
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920',
        
        flyOverWaypoints: [
            { name: 'Approach', coordinates: [-27.5, -68.8], zoom: 8, description: 'Approaching from the west' },
            { name: 'Caldera rim', coordinates: [-27.2, -68.6], zoom: 10, description: 'The massive caldera' },
            { name: 'Summit area', coordinates: [-27.1958, -68.5556], zoom: 12, description: 'Multiple peaks visible' },
            { name: 'Overview', coordinates: [-27.1958, -68.5556], zoom: 10, description: 'Full volcanic complex' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #4 - SAN PEDRO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'san-pedro',
        name: 'San Pedro',
        nativeName: 'Volcán San Pedro',
        countries: [
            { name: 'Chile', code: 'CL' }
        ],
        continent: 'South America',
        region: 'Antofagasta Region',
        
        elevation: 6145,
        prominence: 1845,
        coordinates: [-21.8833, -68.4000],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Central Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 1960,
            name: 'Minor eruption',
            vei: 1,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 1960, name: 'Minor phreatic eruption', vei: 1 },
            { year: 1903, name: 'Steam emission', vei: 1 },
            { year: 1870, name: 'Explosive eruption', vei: 2 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '500m',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'San Pedro de Atacama', coordinates: [-22.9087, -68.1997], distance: '120km', population: 10000 },
            { name: 'Calama', coordinates: [-22.4667, -68.9333], distance: '80km', population: 180000 },
            { name: 'Antofagasta', coordinates: [-23.6509, -70.3975], distance: '300km', population: 400000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Pyroclastic flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Part of Atacama tourism circuit' },
            { label: 'Research', value: 'Geological and volcanological studies' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Desert altiplano ecosystem' },
            { label: 'Water', value: 'Important watershed for local communities' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1903, description: 'Climbed during scientific expedition' }
        ],
        
        funFacts: [
            'Twin volcano with San Pablo',
            'Active fumaroles at summit',
            'Visible from San Pedro de Atacama',
            'One of the most prominent peaks in the region',
            'Ancient Inca worship site'
        ],
        
        image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920',
        
        flyOverWaypoints: [
            { name: 'Desert View', coordinates: [-22.2, -68.6], zoom: 8, description: 'Over the Atacama' },
            { name: 'Twin Peaks', coordinates: [-21.95, -68.45], zoom: 10, description: 'San Pedro and San Pablo' },
            { name: 'Summit', coordinates: [-21.8833, -68.4000], zoom: 12, description: 'The active summit' },
            { name: 'Overview', coordinates: [-21.8833, -68.4000], zoom: 10, description: 'Full volcano view' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #5 - COTOPAXI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'cotopaxi',
        name: 'Cotopaxi',
        nativeName: 'Cotopaxi',
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        region: 'Cotopaxi Province',
        
        elevation: 5897,
        prominence: 2560,
        coordinates: [-0.6833, -78.4375],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Northern Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 2023,
            name: 'Ongoing activity',
            vei: 2,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 2023, name: 'Minor explosions', vei: 2 },
            { year: 2015, name: 'Phreatic eruptions', vei: 2 },
            { year: 1904, name: 'Minor eruption', vei: 2 },
            { year: 1877, name: 'Major eruption', vei: 4, deaths: 1000 },
            { year: 1768, name: 'Explosive eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '800m',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Quito', coordinates: [-0.1807, -78.4678], distance: '50km', population: 2800000 },
            { name: 'Latacunga', coordinates: [-0.9333, -78.6167], distance: '35km', population: 100000 },
            { name: 'Ambato', coordinates: [-1.2417, -78.6197], distance: '70km', population: 380000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Very High', affectedArea: 'Valleys below the volcano' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Quito and surrounding areas' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'One of Ecuador\'s most visited natural attractions' },
            { label: 'National Park', value: 'Cotopaxi National Park - major revenue source' },
            { label: 'Agriculture', value: 'Fertile volcanic soils support farming' }
        ],
        
        environmentalImpact: [
            { label: '1877 Eruption', value: 'Lahars traveled 100km, devastated valleys' },
            { label: 'Glaciers', value: 'Glaciers provide water for Quito region' },
            { label: 'Climate change', value: 'Glaciers shrinking rapidly' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1872, description: 'Wilhelm Reiss and Angel Escobar reached summit' },
            { event: 'Devastating eruption', year: 1877, description: 'Lahars killed ~1000 people' },
            { event: 'Park established', year: 1975, description: 'Cotopaxi National Park created' },
            { event: 'Recent activity', year: 2015, description: 'Volcano reactivated after 138 years' }
        ],
        
        funFacts: [
            'One of the highest active volcanoes in the world',
            'Has one of the few equatorial glaciers',
            'Nearly perfect conical shape',
            'Name means "Neck of the Moon" in Quechua',
            'Can be seen from Quito on clear days',
            'Has erupted over 50 times since 1738'
        ],
        
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920',
        
        flyOverWaypoints: [
            { name: 'Quito View', coordinates: [-0.3, -78.5], zoom: 9, description: 'View from the capital' },
            { name: 'National Park', coordinates: [-0.5, -78.45], zoom: 10, description: 'Cotopaxi National Park' },
            { name: 'Glaciers', coordinates: [-0.65, -78.44], zoom: 12, description: 'Equatorial ice cap' },
            { name: 'Crater', coordinates: [-0.6833, -78.4375], zoom: 14, description: 'Active crater' },
            { name: 'Perfect Cone', coordinates: [-0.6833, -78.4375], zoom: 11, description: 'The iconic silhouette' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #6 - KILIMANJARO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-kilimanjaro',
        name: 'Mount Kilimanjaro',
        nativeName: 'Kilimanjaro',
        countries: [
            { name: 'Tanzania', code: 'TZ' }
        ],
        continent: 'Africa',
        region: 'Kilimanjaro Region',
        
        elevation: 5895,
        prominence: 5885,
        coordinates: [-3.0758, 37.3533],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Continental rift',
            plates: ['African Plate', 'Somali Plate'],
            volcanicBelt: 'East African Rift System',
            subduction: false
        },
        
        lastEruption: {
            year: -8050,
            name: 'Holocene eruption',
            vei: 3,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: -8050, name: 'Holocene eruption', vei: 3 },
            { year: -100000, name: 'Cone building', vei: 4 }
        ],
        
        lavaType: 'Basaltic to Trachytic',
        
        crater: {
            diameter: '2.4km',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Moshi', coordinates: [-3.3350, 37.3400], distance: '30km', population: 200000 },
            { name: 'Arusha', coordinates: [-3.3869, 36.6830], distance: '80km', population: 420000 },
            { name: 'Nairobi', coordinates: [-1.2921, 36.8219], distance: '270km', population: 4400000 }
        ],
        
        hazards: [
            { type: 'Volcanic gases', risk: 'Low' },
            { type: 'Landslides', risk: 'Moderate' },
            { type: 'Glacial outburst', risk: 'Low' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '50,000+ climbers annually - major revenue' },
            { label: 'Water source', value: 'Provides water for millions' },
            { label: 'Agriculture', value: 'Fertile slopes support coffee and banana farming' }
        ],
        
        environmentalImpact: [
            { label: 'Climate change', value: 'Glaciers have lost 85% of mass since 1912' },
            { label: 'Deforestation', value: 'Forest belt under pressure from population' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1889, description: 'Hans Meyer and Ludwig Purtscheller reached Uhuru Peak' },
            { event: 'UNESCO Heritage', year: 1987, description: 'Kilimanjaro National Park designated' },
            { event: 'Glacier warning', year: 2009, description: 'Scientists predict glaciers could disappear by 2030s' }
        ],
        
        funFacts: [
            'Highest free-standing mountain in the world',
            'Highest peak in Africa - Uhuru Peak at 5,895m',
            'Has five distinct climate zones from base to summit',
            'The name may mean "Mountain of Whiteness" in Swahili',
            'About 30,000 people attempt to climb it each year',
            'Has three volcanic cones: Kibo, Mawenzi, and Shira'
        ],
        
        image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=1920',
        
        flyOverWaypoints: [
            { name: 'Savanna View', coordinates: [-3.3, 37.5], zoom: 9, description: 'Rising above the plains' },
            { name: 'Forest Zone', coordinates: [-3.15, 37.4], zoom: 10, description: 'Lush rainforest belt' },
            { name: 'Alpine Desert', coordinates: [-3.1, 37.38], zoom: 11, description: 'Above the clouds' },
            { name: 'Glaciers', coordinates: [-3.08, 37.355], zoom: 12, description: 'Remaining ice fields' },
            { name: 'Uhuru Peak', coordinates: [-3.0758, 37.3533], zoom: 14, description: 'Roof of Africa' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #7 - MISTI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'el-misti',
        name: 'El Misti',
        nativeName: 'El Misti',
        countries: [
            { name: 'Peru', code: 'PE' }
        ],
        continent: 'South America',
        region: 'Arequipa',
        
        elevation: 5822,
        prominence: 1782,
        coordinates: [-16.2942, -71.4094],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Central Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 1985,
            name: 'Fumarolic activity',
            vei: 0,
            type: 'Fumarolic'
        },
        
        eruptionHistory: [
            { year: 1985, name: 'Increased fumarolic activity', vei: 0 },
            { year: 1870, name: 'Minor eruption', vei: 1 },
            { year: 1787, name: 'Explosive eruption', vei: 2 },
            { year: 1677, name: 'Explosive eruption', vei: 2 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '830m',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Arequipa', coordinates: [-16.4090, -71.5375], distance: '17km', population: 1000000 },
            { name: 'Yura', coordinates: [-16.2500, -71.6833], distance: '20km', population: 25000 },
            { name: 'Chiguata', coordinates: [-16.4000, -71.3833], distance: '12km', population: 3000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High', affectedArea: 'Arequipa city' },
            { type: 'Lahars', risk: 'Very High' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Population of 1 million at risk' },
            { type: 'Lava flows', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Symbol of Arequipa - major attraction' },
            { label: 'Water source', value: 'Snowmelt provides water for Arequipa' },
            { label: 'Cultural', value: 'Sacred mountain for local population' }
        ],
        
        environmentalImpact: [
            { label: 'Historical', value: 'Past eruptions covered Arequipa in ash' },
            { label: 'Hazard zone', value: 'Over 1 million people live in danger zone' }
        ],
        
        famousEvents: [
            { event: 'Inca sacrifices', year: 1440, description: 'Mummies discovered at summit - human sacrifices' },
            { event: 'First documented ascent', year: 1677, description: 'Climbed by priest during eruption warning' },
            { event: 'Mummy discovery', year: 1998, description: '6 Inca mummies found at summit' }
        ],
        
        funFacts: [
            'Known as the "Gentleman" of Arequipa',
            'Only 17km from city of 1 million people',
            'Has a nearly perfect conical shape',
            'Inca mummies found at the summit',
            'Can be climbed in 2 days without technical equipment',
            'Active fumaroles in the crater'
        ],
        
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920',
        
        flyOverWaypoints: [
            { name: 'Arequipa', coordinates: [-16.4, -71.53], zoom: 10, description: 'The White City below' },
            { name: 'Approach', coordinates: [-16.35, -71.45], zoom: 11, description: 'Rising above the city' },
            { name: 'Summit', coordinates: [-16.2942, -71.4094], zoom: 13, description: 'The perfect cone' },
            { name: 'Crater', coordinates: [-16.2942, -71.4094], zoom: 14, description: 'Active fumaroles visible' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #8 - CAYAMBE
    // ═══════════════════════════════════════════════════════════
    {
        id: 'cayambe',
        name: 'Cayambe',
        nativeName: 'Cayambe',
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        region: 'Pichincha Province',
        
        elevation: 5790,
        prominence: 2010,
        coordinates: [0.0289, -77.9867],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Northern Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 1786,
            name: 'Explosive eruption',
            vei: 3,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 1786, name: 'Major eruption', vei: 3 },
            { year: -1000, name: 'Prehistoric eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '1km',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Cayambe', coordinates: [0.0418, -78.1406], distance: '20km', population: 50000 },
            { name: 'Quito', coordinates: [-0.1807, -78.4678], distance: '60km', population: 2800000 },
            { name: 'Ibarra', coordinates: [0.3517, -78.1223], distance: '70km', population: 180000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'High' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'High' },
            { type: 'Glacial floods', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Agriculture', value: 'Famous for flower and dairy production' },
            { label: 'Tourism', value: 'Mountaineering and skiing destination' },
            { label: 'Water', value: 'Important water source for region' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: 'Glaciers shrinking due to climate change' },
            { label: 'Ecosystem', value: 'Supports unique páramo ecosystem' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1880, description: 'Edward Whymper reached the summit' },
            { event: 'Scientific study', year: 1802, description: 'Alexander von Humboldt attempted to climb' }
        ],
        
        funFacts: [
            'Only volcano in the world on the equator with glaciers',
            'Third highest peak in Ecuador',
            'The equator line crosses the south slopes',
            'Highest point on Earth directly on the equator',
            'Popular for high-altitude glacier skiing'
        ],
        
        image: 'https://images.unsplash.com/photo-1593096062068-39c9a8d21574?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1593096062068-39c9a8d21574?w=1920',
        
        flyOverWaypoints: [
            { name: 'Equator Line', coordinates: [0.0, -78.1], zoom: 9, description: 'On the equator' },
            { name: 'Town View', coordinates: [0.02, -78.05], zoom: 10, description: 'Cayambe town below' },
            { name: 'Glaciers', coordinates: [0.0289, -77.99], zoom: 12, description: 'Equatorial ice' },
            { name: 'Summit', coordinates: [0.0289, -77.9867], zoom: 14, description: 'Highest point on equator' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #9 - MOUNT ELBRUS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-elbrus',
        name: 'Mount Elbrus',
        nativeName: 'Эльбрус (Elbrus)',
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Europe',
        region: 'Caucasus Mountains',
        
        elevation: 5642,
        prominence: 4741,
        coordinates: [43.3550, 42.4392],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Continental collision',
            plates: ['Eurasian Plate', 'Arabian Plate'],
            volcanicBelt: 'Caucasus Volcanic Arc',
            subduction: false
        },
        
        lastEruption: {
            year: 50,
            name: 'Roman era eruption',
            vei: 3,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 50, name: 'Historical eruption', vei: 3 },
            { year: -6000, name: 'Holocene eruptions', vei: 4 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '300m',
            depth: '80m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Nalchik', coordinates: [43.4981, 43.6185], distance: '100km', population: 260000 },
            { name: 'Pyatigorsk', coordinates: [44.0500, 43.0600], distance: '100km', population: 145000 },
            { name: 'Mineralnye Vody', coordinates: [44.2111, 43.1350], distance: '130km', population: 75000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Low' },
            { type: 'Glacial floods', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Major ski resort and climbing destination' },
            { label: 'Cable cars', value: 'Highest cable car system in Europe' },
            { label: 'Sports', value: 'Hosts international skiing competitions' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: '23 glaciers covering 145 sq km' },
            { label: 'Climate change', value: 'Glacier retreat accelerating' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1874, description: 'British expedition reached the east summit' },
            { event: 'WWII battle', year: 1942, description: 'German mountain troops briefly held the summit' },
            { event: 'Soviet flag', year: 1943, description: 'Soviet soldiers removed Nazi flag and raised their own' }
        ],
        
        funFacts: [
            'Highest peak in Europe',
            'One of the Seven Summits',
            'Has twin summits 5,642m and 5,621m',
            'Cable car reaches 3,847m',
            'Around 30 people die climbing it each year',
            'Name possibly means "Two-headed mountain"'
        ],
        
        image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=1920',
        
        flyOverWaypoints: [
            { name: 'Caucasus Range', coordinates: [43.5, 42.8], zoom: 8, description: 'The Caucasus Mountains' },
            { name: 'Ski Resort', coordinates: [43.4, 42.5], zoom: 10, description: 'Elbrus ski area' },
            { name: 'Twin Summits', coordinates: [43.355, 42.44], zoom: 12, description: 'The two peaks' },
            { name: 'West Summit', coordinates: [43.3550, 42.4392], zoom: 14, description: 'Highest point in Europe' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #10 - PICO DE ORIZABA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'pico-de-orizaba',
        name: 'Pico de Orizaba',
        nativeName: 'Citlaltépetl',
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        region: 'Trans-Mexican Volcanic Belt',
        
        elevation: 5636,
        prominence: 4922,
        coordinates: [19.0303, -97.2683],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Cocos Plate', 'North American Plate'],
            volcanicBelt: 'Trans-Mexican Volcanic Belt',
            subduction: true
        },
        
        lastEruption: {
            year: 1846,
            name: 'Phreatic eruption',
            vei: 2,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 1846, name: 'Steam eruption', vei: 2 },
            { year: 1687, name: 'Minor eruption', vei: 2 },
            { year: 1566, name: 'Explosive eruption', vei: 3 },
            { year: 1545, name: 'Major eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '478m',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Orizaba', coordinates: [18.8500, -97.1000], distance: '25km', population: 200000 },
            { name: 'Puebla', coordinates: [19.0414, -98.2063], distance: '100km', population: 3250000 },
            { name: 'Veracruz', coordinates: [19.1738, -96.1342], distance: '130km', population: 800000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'High' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'High', affectedArea: 'Puebla region' },
            { type: 'Avalanches', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Mountaineering', value: 'Popular climbing destination' },
            { label: 'Water source', value: 'Glaciers provide water for region' },
            { label: 'Tourism', value: 'Part of Pico de Orizaba National Park' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: 'Mexico\'s only remaining glaciers' },
            { label: 'Climate change', value: 'Glaciers expected to disappear by 2030' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1848, description: 'F. Maynard and William Reynolds reached summit' },
            { event: 'Aztec name', year: 1500, description: 'Called Citlaltépetl - "Star Mountain" in Nahuatl' },
            { event: 'Climbing tragedy', year: 2007, description: 'Avalanche killed 13 climbers' }
        ],
        
        funFacts: [
            'Highest peak in Mexico',
            'Third highest in North America',
            'Name means "Star Mountain" in Nahuatl',
            'Has Mexico\'s only glaciers',
            'Often visible from Veracruz coast',
            'Technical climb due to glacier and steep slopes'
        ],
        
        image: 'https://images.unsplash.com/photo-1568736333610-eae6e0ab2a25?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1568736333610-eae6e0ab2a25?w=1920',
        
        flyOverWaypoints: [
            { name: 'Gulf Coast', coordinates: [19.2, -96.8], zoom: 8, description: 'View from Veracruz' },
            { name: 'Volcanic Belt', coordinates: [19.1, -97.1], zoom: 10, description: 'Trans-Mexican Belt' },
            { name: 'Glaciers', coordinates: [19.035, -97.27], zoom: 12, description: 'Mexico\'s last glaciers' },
            { name: 'Summit', coordinates: [19.0303, -97.2683], zoom: 14, description: 'Star Mountain peak' }
        ]
    }
];

// Log successful load
console.log('🌋 Volcanoes Data 1 loaded: 10 volcanoes (Ojos del Salado to Pico de Orizaba)');
