/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data File 2
   Volcanoes 11-20 (Highest Elevation First)
   ═══════════════════════════════════════════════════════════ */

window.volcanoesData2 = [
    // ═══════════════════════════════════════════════════════════
    // #11 - POPOCATÉPETL
    // ═══════════════════════════════════════════════════════════
    {
        id: 'popocatepetl',
        name: 'Popocatépetl',
        nativeName: 'Popocatépetl (Smoking Mountain)',
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        region: 'Trans-Mexican Volcanic Belt',
        
        elevation: 5426,
        prominence: 3020,
        coordinates: [19.0225, -98.6278],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Cocos Plate', 'North American Plate'],
            volcanicBelt: 'Trans-Mexican Volcanic Belt',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Ongoing activity',
            vei: 2,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Ongoing explosive activity', vei: 2 },
            { year: 2019, name: 'Major explosion', vei: 3 },
            { year: 2000, name: 'Large eruption', vei: 3 },
            { year: 1994, name: 'Reactivation', vei: 2 },
            { year: 1947, name: 'Explosive eruption', vei: 3 },
            { year: 1720, name: 'Major eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '600m',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Mexico City', coordinates: [19.4326, -99.1332], distance: '70km', population: 21900000 },
            { name: 'Puebla', coordinates: [19.0414, -98.2063], distance: '45km', population: 3250000 },
            { name: 'Cholula', coordinates: [19.0633, -98.3042], distance: '40km', population: 130000 },
            { name: 'Atlixco', coordinates: [18.9167, -98.4333], distance: '25km', population: 130000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High', affectedArea: 'Eastern slopes toward Puebla' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'River valleys' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Mexico City, Puebla - 25 million at risk' },
            { type: 'Volcanic bombs', risk: 'High', affectedArea: 'Within 10km radius' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Major attraction despite danger - Izta-Popo National Park' },
            { label: 'Cultural', value: 'Sacred mountain in Aztec mythology' },
            { label: 'Agriculture', value: 'Fertile volcanic soils support farming' },
            { label: 'Water source', value: 'Glaciers provide water for millions' }
        ],
        
        environmentalImpact: [
            { label: 'Air quality', value: 'Ash affects air quality in Mexico City' },
            { label: 'Glaciers', value: 'Glaciers rapidly retreating due to volcanic heat and climate change' },
            { label: 'Ecosystem', value: 'Alpine forests and unique high-altitude species' }
        ],
        
        famousEvents: [
            { event: 'Aztec legend', year: 1500, description: 'Legend says Popocatépetl was a warrior mourning his lover Iztaccíhuatl' },
            { event: 'Colonial eruption', year: 1720, description: 'Major eruption witnessed by Spanish colonizers' },
            { event: 'Reawakening', year: 1994, description: 'Volcano reactivated after 67 years of dormancy' },
            { event: 'Evacuation', year: 2000, description: 'Largest volcanic evacuation in history - 40,000 people' }
        ],
        
        funFacts: [
            'Second highest peak in Mexico',
            'Name means "Smoking Mountain" in Nahuatl',
            'One of the most dangerous volcanoes due to nearby population',
            'Twin volcano with Iztaccíhuatl (Sleeping Woman)',
            'Over 25 million people live within potential hazard zone',
            'Has erupted more than 20 times since the Spanish arrived in 1519',
            'Featured in the Aztec legend of two tragic lovers'
        ],
        
        image: 'https://images.unsplash.com/photo-1604951517884-4c0e48b6fc5c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1604951517884-4c0e48b6fc5c?w=1920',
        
        flyOverWaypoints: [
            { name: 'Mexico City View', coordinates: [19.4, -99.0], zoom: 9, description: 'The metropolis and its volcano' },
            { name: 'Twin Volcanoes', coordinates: [19.1, -98.7], zoom: 10, description: 'Popocatépetl and Iztaccíhuatl' },
            { name: 'Approach', coordinates: [19.05, -98.65], zoom: 11, description: 'The smoking giant' },
            { name: 'Active Crater', coordinates: [19.0225, -98.6278], zoom: 13, description: 'Steam and ash emissions visible' },
            { name: 'Summit View', coordinates: [19.0225, -98.6278], zoom: 14, description: 'The dangerous peak' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #12 - NEVADO DEL RUIZ
    // ═══════════════════════════════════════════════════════════
    {
        id: 'nevado-del-ruiz',
        name: 'Nevado del Ruiz',
        nativeName: 'Nevado del Ruiz',
        countries: [
            { name: 'Colombia', code: 'CO' }
        ],
        continent: 'South America',
        region: 'Caldas Department',
        
        elevation: 5321,
        prominence: 2590,
        coordinates: [4.8950, -75.3217],
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
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 2023, name: 'Phreatic activity', vei: 2 },
            { year: 2012, name: 'Ash emissions', vei: 2 },
            { year: 1985, name: 'Catastrophic eruption', vei: 3, deaths: 23000 },
            { year: 1845, name: 'Major eruption', vei: 3, deaths: 1000 },
            { year: 1595, name: 'Large eruption', vei: 4, deaths: 636 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '1km',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Manizales', coordinates: [5.0689, -75.5174], distance: '30km', population: 400000 },
            { name: 'Pereira', coordinates: [4.8133, -75.6961], distance: '45km', population: 470000 },
            { name: 'Armero (destroyed)', coordinates: [5.0333, -74.9000], distance: '48km', population: 0 },
            { name: 'Bogotá', coordinates: [4.7110, -74.0721], distance: '130km', population: 8000000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Extreme', affectedArea: 'River valleys - destroyed Armero in 1985' },
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Coffee growing region' },
            { type: 'Glacial melting', risk: 'Very High', affectedArea: 'Triggers devastating lahars' }
        ],
        
        economicImportance: [
            { label: 'Coffee', value: 'Heart of Colombian coffee region' },
            { label: 'Geothermal', value: 'Potential geothermal energy source' },
            { label: 'Tourism', value: 'Los Nevados National Park' },
            { label: 'Water', value: 'Glacial meltwater feeds rivers' }
        ],
        
        environmentalImpact: [
            { label: '1985 Disaster', value: 'Lahars destroyed Armero, killed 23,000 people' },
            { label: 'Glaciers', value: 'Rapidly shrinking - 90% loss since 1850' },
            { label: 'Ecosystem', value: 'Unique páramo and cloud forest ecosystems' }
        ],
        
        famousEvents: [
            { event: 'Armero Tragedy', year: 1985, description: 'Lahars buried Armero - 4th deadliest volcanic disaster in history' },
            { event: 'Omayra Sánchez', year: 1985, description: 'Tragic death of 13-year-old girl trapped in lahar became global symbol' },
            { event: 'Early warning failure', year: 1985, description: 'Scientists warned of danger but evacuation orders never given' },
            { event: 'Volcanic alert system', year: 1986, description: 'Modern monitoring system established after tragedy' }
        ],
        
        funFacts: [
            'Site of the deadliest volcanic disaster in Colombian history',
            'The 1985 lahar traveled 100 km/h and was 30 meters deep',
            'Armero tragedy led to worldwide improvements in volcanic monitoring',
            'Still has glaciers despite being only 4° north of equator',
            'Name means "Snowy One of Ruiz" (named after local indigenous leader)',
            'Part of a UNESCO Biosphere Reserve'
        ],
        
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920',
        
        flyOverWaypoints: [
            { name: 'Coffee Region', coordinates: [5.0, -75.6], zoom: 9, description: 'Colombian coffee country' },
            { name: 'Armero Memorial', coordinates: [5.03, -74.9], zoom: 11, description: 'Site of the destroyed town' },
            { name: 'Glaciers', coordinates: [4.9, -75.35], zoom: 12, description: 'Remaining ice cap' },
            { name: 'Summit Crater', coordinates: [4.8950, -75.3217], zoom: 13, description: 'Arenas Crater' },
            { name: 'Overview', coordinates: [4.8950, -75.3217], zoom: 11, description: 'The deadly giant' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #13 - SANGAY
    // ═══════════════════════════════════════════════════════════
    {
        id: 'sangay',
        name: 'Sangay',
        nativeName: 'Sangay',
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        region: 'Morona Santiago Province',
        
        elevation: 5230,
        prominence: 2120,
        coordinates: [-2.0050, -78.3411],
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
            year: 2024,
            name: 'Continuous activity',
            vei: 2,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Continuous Strombolian activity', vei: 2 },
            { year: 2020, name: 'Increased explosions', vei: 3 },
            { year: 1934, name: 'Start of continuous eruption', vei: 2 },
            { year: 1728, name: 'First documented eruption', vei: 3 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '200m',
            depth: '100m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Riobamba', coordinates: [-1.6635, -78.6544], distance: '45km', population: 150000 },
            { name: 'Macas', coordinates: [-2.3090, -78.1193], distance: '40km', population: 20000 },
            { name: 'Guayaquil', coordinates: [-2.1710, -79.9223], distance: '200km', population: 3000000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Lava flows', risk: 'High' },
            { type: 'Ash fall', risk: 'High', affectedArea: 'Eastern Ecuador' },
            { type: 'Lahars', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'National Park', value: 'Sangay National Park - UNESCO World Heritage' },
            { label: 'Biodiversity', value: 'One of most biodiverse places on Earth' },
            { label: 'Tourism', value: 'Adventure tourism and trekking' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Eruptions affect surrounding cloud forests' },
            { label: 'Rivers', value: 'Volcán River carries volcanic sediment' },
            { label: 'Agriculture', value: 'Ash falls damage crops periodically' }
        ],
        
        famousEvents: [
            { event: 'Continuous eruption', year: 1934, description: 'Has been erupting almost continuously since 1934' },
            { event: 'UNESCO designation', year: 1983, description: 'Sangay National Park became World Heritage Site' },
            { event: 'Major explosions', year: 2020, description: 'Powerful explosions sent ash 10km high' }
        ],
        
        funFacts: [
            'One of the most active volcanoes in the world',
            'Has been continuously erupting since 1934',
            'Located in one of the most biodiverse regions on Earth',
            'Very difficult to climb due to constant eruptions',
            'Named after "sangay" - a type of local plant',
            'Explosions can sometimes be heard from Riobamba, 45km away'
        ],
        
        image: 'https://images.unsplash.com/photo-1473060299422-2bbc6f996ac7?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1473060299422-2bbc6f996ac7?w=1920',
        
        flyOverWaypoints: [
            { name: 'Amazon Approach', coordinates: [-2.2, -78.2], zoom: 9, description: 'Where Andes meet Amazon' },
            { name: 'Cloud Forest', coordinates: [-2.1, -78.3], zoom: 10, description: 'Dense cloud forest below' },
            { name: 'Active Summit', coordinates: [-2.005, -78.341], zoom: 12, description: 'Constant eruptions' },
            { name: 'Crater View', coordinates: [-2.0050, -78.3411], zoom: 14, description: 'Strombolian explosions' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #14 - TUNGURAHUA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'tungurahua',
        name: 'Tungurahua',
        nativeName: 'Tungurahua (Throat of Fire)',
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        region: 'Tungurahua Province',
        
        elevation: 5023,
        prominence: 1573,
        coordinates: [-1.4680, -78.4450],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Northern Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 2016,
            name: 'Major explosions',
            vei: 3,
            type: 'Vulcanian'
        },
        
        eruptionHistory: [
            { year: 2016, name: 'Major explosive activity', vei: 3 },
            { year: 2014, name: 'Large eruption', vei: 3 },
            { year: 2006, name: 'Paroxysmal eruption', vei: 3, deaths: 6 },
            { year: 1999, name: 'Reactivation', vei: 2 },
            { year: 1918, name: 'Major eruption', vei: 3 },
            { year: 1773, name: 'Large eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '300m',
            depth: '100m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Baños', coordinates: [-1.3928, -78.4269], distance: '8km', population: 20000 },
            { name: 'Ambato', coordinates: [-1.2417, -78.6197], distance: '33km', population: 380000 },
            { name: 'Riobamba', coordinates: [-1.6635, -78.6544], distance: '55km', population: 150000 },
            { name: 'Quito', coordinates: [-0.1807, -78.4678], distance: '140km', population: 2800000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High', affectedArea: 'Town of Baños' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Central Ecuador' },
            { type: 'Lahars', risk: 'High', affectedArea: 'Pastaza River valley' },
            { type: 'Lava flows', risk: 'Moderate' },
            { type: 'Volcanic bombs', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Baños is major tourist destination despite volcano' },
            { label: 'Hot springs', value: 'Volcanic hot springs attract visitors' },
            { label: 'Agriculture', value: 'Fertile valleys support farming' },
            { label: 'Adventure sports', value: 'Bridge jumping, rafting, canyoning' }
        ],
        
        environmentalImpact: [
            { label: 'Evacuations', value: 'Multiple evacuations of Baños since 1999' },
            { label: 'Ecosystem', value: 'Impacts cloud forest and páramo' },
            { label: 'Air quality', value: 'Ash affects breathing in nearby areas' }
        ],
        
        famousEvents: [
            { event: 'Forced evacuation', year: 1999, description: 'Entire town of Baños evacuated - residents broke back in' },
            { event: 'Deadly eruption', year: 2006, description: '6 people killed by pyroclastic flows' },
            { event: 'Major explosion', year: 2014, description: 'Ash column rose 10km, villages evacuated' },
            { event: 'Current quiet', year: 2016, description: 'Volcano has been relatively quiet since 2016' }
        ],
        
        funFacts: [
            'Name means "Throat of Fire" in Quechua',
            'One of Ecuador\'s most active and dangerous volcanoes',
            'Town of Baños refused to stay evacuated and broke back in',
            'Night eruptions provide spectacular lava fountain displays',
            'Has its own volcano-watching observatory',
            'Hot springs in Baños are heated by volcanic activity'
        ],
        
        image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920',
        
        flyOverWaypoints: [
            { name: 'Baños Town', coordinates: [-1.39, -78.43], zoom: 12, description: 'Adventure tourism capital' },
            { name: 'Hot Springs', coordinates: [-1.4, -78.44], zoom: 13, description: 'Volcanic thermal waters' },
            { name: 'Throat of Fire', coordinates: [-1.468, -78.445], zoom: 14, description: 'Active crater' },
            { name: 'Overview', coordinates: [-1.4680, -78.4450], zoom: 11, description: 'The dangerous beauty' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #15 - MOUNT RAINIER
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-rainier',
        name: 'Mount Rainier',
        nativeName: 'Tahoma (Takhoma)',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        region: 'Washington State',
        
        elevation: 4392,
        prominence: 4030,
        coordinates: [46.8528, -121.7603],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Juan de Fuca Plate', 'North American Plate'],
            volcanicBelt: 'Cascade Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1894,
            name: 'Minor phreatic activity',
            vei: 1,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 1894, name: 'Steam explosions', vei: 1 },
            { year: 1854, name: 'Minor eruption', vei: 1 },
            { year: 1843, name: 'Reported eruption', vei: 2 },
            { year: -1400, name: 'Osceola Mudflow', vei: 4 },
            { year: -3500, name: 'Sector collapse', vei: 5 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '400m',
            depth: '100m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Seattle', coordinates: [47.6062, -122.3321], distance: '87km', population: 750000 },
            { name: 'Tacoma', coordinates: [47.2529, -122.4443], distance: '60km', population: 220000 },
            { name: 'Olympia', coordinates: [47.0379, -122.9007], distance: '75km', population: 55000 },
            { name: 'Yakima', coordinates: [46.6021, -120.5059], distance: '110km', population: 95000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Extreme', affectedArea: 'River valleys toward Seattle/Tacoma - 100,000+ at risk' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'High', affectedArea: 'Pacific Northwest' },
            { type: 'Glacial outburst floods', risk: 'High' },
            { type: 'Debris avalanche', risk: 'Very High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Mount Rainier National Park - 2+ million visitors annually' },
            { label: 'Water supply', value: 'Glaciers provide water for Seattle region' },
            { label: 'Recreation', value: 'Climbing, skiing, hiking destination' },
            { label: 'Cultural', value: 'Sacred to local Native American tribes' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: '26 named glaciers - largest glacial system in contiguous US' },
            { label: 'Climate change', value: 'Glaciers losing 14% of volume per decade' },
            { label: 'Ecosystem', value: 'Old-growth forests, alpine meadows, diverse wildlife' }
        ],
        
        famousEvents: [
            { event: 'Osceola Mudflow', year: -1400, description: 'Massive lahar reached Puget Sound - buried land where cities now stand' },
            { event: 'First recorded ascent', year: 1870, description: 'Hazard Stevens and Philemon Van Trump reached summit' },
            { event: 'National Park', year: 1899, description: '5th US National Park established' },
            { event: 'Climbing deaths', year: 1981, description: '11 climbers killed in ice fall - deadliest US mountaineering accident' }
        ],
        
        funFacts: [
            'Most glaciated peak in contiguous United States',
            'Most dangerous volcano in the US due to lahar risk',
            'Ancient lahars buried land where Seattle suburbs now exist',
            'Has 26 named glaciers covering 92 square km',
            'Creates its own weather - often capped by lenticular clouds',
            'Called "Tahoma" by indigenous peoples - meaning "Mother of Waters"',
            'About 10,000 people attempt to summit each year'
        ],
        
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920',
        
        flyOverWaypoints: [
            { name: 'Seattle Skyline', coordinates: [47.5, -122.2], zoom: 9, description: 'The mountain towers over Seattle' },
            { name: 'Paradise', coordinates: [46.78, -121.74], zoom: 11, description: 'Famous visitor area' },
            { name: 'Glaciers', coordinates: [46.84, -121.76], zoom: 12, description: 'Massive ice fields' },
            { name: 'Summit Crater', coordinates: [46.8528, -121.7603], zoom: 14, description: 'Columbia Crest peak' },
            { name: 'Full View', coordinates: [46.8528, -121.7603], zoom: 10, description: 'The mountain that was God' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #16 - MOUNT SHASTA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-shasta',
        name: 'Mount Shasta',
        nativeName: 'Úytaahkoo',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        region: 'California',
        
        elevation: 4322,
        prominence: 2922,
        coordinates: [41.4092, -122.1949],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Juan de Fuca Plate', 'Gorda Plate', 'North American Plate'],
            volcanicBelt: 'Cascade Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1250,
            name: 'Eruption from Shastina',
            vei: 3,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 1250, name: 'Shastina eruption', vei: 3 },
            { year: 850, name: 'Hotlum cone eruption', vei: 3 },
            { year: -7600, name: 'Large eruption', vei: 5 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '200m',
            depth: '60m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Mount Shasta City', coordinates: [41.3099, -122.3106], distance: '15km', population: 3400 },
            { name: 'Redding', coordinates: [40.5865, -122.3917], distance: '100km', population: 92000 },
            { name: 'Medford', coordinates: [42.3265, -122.8756], distance: '130km', population: 85000 },
            { name: 'Sacramento', coordinates: [38.5816, -121.4944], distance: '350km', population: 525000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Lahars', risk: 'High', affectedArea: 'River valleys' },
            { type: 'Lava flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Debris avalanche', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Spiritual tourism and mountaineering' },
            { label: 'Water', value: 'Crystal-clear springs (bottled water industry)' },
            { label: 'Recreation', value: 'Ski park and hiking trails' },
            { label: 'Spiritual', value: 'New Age spiritual center' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: 'Seven named glaciers on the mountain' },
            { label: 'Springs', value: 'Volcanic rock filters pristine spring water' },
            { label: 'Ecosystem', value: 'Diverse flora from base to alpine zone' }
        ],
        
        famousEvents: [
            { event: 'First ascent', year: 1854, description: 'E.D. Pearce claimed first summit' },
            { event: 'Lemurian legends', year: 1931, description: 'Book claimed lost continent survivors live inside mountain' },
            { event: 'Earthquake swarm', year: 2009, description: 'Hundreds of small quakes raised concerns' }
        ],
        
        funFacts: [
            'Considered one of the most sacred mountains in the world',
            'Center of numerous spiritual and New Age beliefs',
            'Has 7 glaciers despite being in California',
            'Some believe it contains a city of ancient Lemurians',
            'The Sacramento River begins on its slopes',
            'Second highest peak in the Cascades after Mount Rainier',
            'Has its own smaller secondary cone called Shastina'
        ],
        
        image: 'https://images.unsplash.com/photo-1501908734255-16579c18c25f?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501908734255-16579c18c25f?w=1920',
        
        flyOverWaypoints: [
            { name: 'Town View', coordinates: [41.31, -122.31], zoom: 11, description: 'Mount Shasta City below' },
            { name: 'Shastina', coordinates: [41.38, -122.22], zoom: 12, description: 'Secondary cone' },
            { name: 'Glaciers', coordinates: [41.4, -122.2], zoom: 13, description: 'Whitney and Bolam glaciers' },
            { name: 'Summit', coordinates: [41.4092, -122.1949], zoom: 14, description: 'The sacred peak' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #17 - MAUNA KEA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mauna-kea',
        name: 'Mauna Kea',
        nativeName: 'Mauna a Wākea (Mountain of Wākea)',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'Oceania',
        region: 'Hawaii (Big Island)',
        
        elevation: 4207,
        prominence: 4207,
        coordinates: [19.8207, -155.4680],
        defaultZoom: 10,
        
        volcanoType: 'Shield Volcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Hotspot',
            plates: ['Pacific Plate'],
            volcanicBelt: 'Hawaiian-Emperor Seamount Chain',
            subduction: false
        },
        
        lastEruption: {
            year: -2460,
            name: 'Holocene eruption',
            vei: 2,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: -2460, name: 'Last eruption', vei: 2 },
            { year: -4500, name: 'Late eruptions', vei: 3 }
        ],
        
        lavaType: 'Basaltic (Hawaiite to Mugearite)',
        
        crater: {
            diameter: 'Multiple cinder cones',
            depth: 'Variable',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Hilo', coordinates: [19.7297, -155.0900], distance: '40km', population: 45000 },
            { name: 'Kailua-Kona', coordinates: [19.6400, -155.9969], distance: '75km', population: 15000 },
            { name: 'Waimea', coordinates: [20.0231, -155.6728], distance: '45km', population: 10000 }
        ],
        
        hazards: [
            { type: 'Volcanic eruption', risk: 'Low' },
            { type: 'Lava flows', risk: 'Low' },
            { type: 'Altitude sickness', risk: 'High', affectedArea: 'Visitors to summit' }
        ],
        
        economicImportance: [
            { label: 'Astronomy', value: '13 world-class observatories at summit' },
            { label: 'Tourism', value: 'Stargazing and cultural tours' },
            { label: 'Cultural', value: 'Sacred mountain to Native Hawaiians' },
            { label: 'Water', value: 'Provides 20% of Hawaii Island\'s water' }
        ],
        
        environmentalImpact: [
            { label: 'Unique species', value: 'Home to Wēkiu bug found nowhere else on Earth' },
            { label: 'Lake Waiau', value: 'One of highest lakes in Pacific, sacred site' },
            { label: 'Climate', value: 'Periglacial environment rare in tropics' }
        ],
        
        famousEvents: [
            { event: 'First observatory', year: 1968, description: 'University of Hawaii built first telescope' },
            { event: 'Keck telescopes', year: 1993, description: 'World\'s largest optical telescopes installed' },
            { event: 'TMT protests', year: 2019, description: 'Native Hawaiian protests against new telescope construction' }
        ],
        
        funFacts: [
            'Tallest mountain on Earth from base to peak (10,210m from ocean floor)',
            'Best astronomical observing site on Earth',
            'Only tropical location with permafrost',
            'Sacred in Hawaiian religion - home of gods',
            'Has glacial deposits from Ice Ages',
            'Name means "White Mountain" (snow-capped in winter)',
            'Over 13 telescopes from 11 countries at summit'
        ],
        
        image: 'https://images.unsplash.com/photo-1566192091742-90bf9ee3a0e0?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1566192091742-90bf9ee3a0e0?w=1920',
        
        flyOverWaypoints: [
            { name: 'Hilo Bay', coordinates: [19.73, -155.09], zoom: 10, description: 'View from Hilo' },
            { name: 'Saddle Road', coordinates: [19.75, -155.3], zoom: 11, description: 'Between the giants' },
            { name: 'Cinder Cones', coordinates: [19.81, -155.47], zoom: 12, description: 'Volcanic landscape' },
            { name: 'Observatories', coordinates: [19.8207, -155.4680], zoom: 14, description: 'World-class telescopes' },
            { name: 'Summit View', coordinates: [19.8207, -155.4680], zoom: 11, description: 'Sacred peak' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #18 - MAUNA LOA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mauna-loa',
        name: 'Mauna Loa',
        nativeName: 'Mauna Loa (Long Mountain)',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'Oceania',
        region: 'Hawaii (Big Island)',
        
        elevation: 4169,
        prominence: 2158,
        coordinates: [19.4756, -155.6054],
        defaultZoom: 10,
        
        volcanoType: 'Shield Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Hotspot',
            plates: ['Pacific Plate'],
            volcanicBelt: 'Hawaiian-Emperor Seamount Chain',
            subduction: false
        },
        
        lastEruption: {
            year: 2022,
            name: 'Northeast Rift Zone eruption',
            vei: 0,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2022, name: 'Rift zone eruption', vei: 0 },
            { year: 1984, name: 'Major eruption', vei: 0 },
            { year: 1975, name: 'Short eruption', vei: 0 },
            { year: 1950, name: 'Large eruption', vei: 0 },
            { year: 1926, name: 'Destroyed village', vei: 0 },
            { year: 1881, name: 'Threatened Hilo', vei: 0 }
        ],
        
        lavaType: 'Basaltic (Tholeiitic)',
        
        crater: {
            diameter: '5km x 2.5km (Moku\'āweoweo)',
            depth: '183m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Hilo', coordinates: [19.7297, -155.0900], distance: '50km', population: 45000 },
            { name: 'Kailua-Kona', coordinates: [19.6400, -155.9969], distance: '55km', population: 15000 },
            { name: 'Pahala', coordinates: [19.2028, -155.4792], distance: '45km', population: 1400 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Very High', affectedArea: 'Hilo and Kona potentially threatened' },
            { type: 'Volcanic gases', risk: 'High', affectedArea: 'Vog affects air quality' },
            { type: 'Earthquakes', risk: 'High' },
            { type: 'Ground cracks', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Hawaii Volcanoes National Park' },
            { label: 'Research', value: 'Mauna Loa Observatory - CO2 monitoring since 1958' },
            { label: 'Agriculture', value: 'Volcanic soil supports coffee and macadamia' },
            { label: 'Cultural', value: 'Sacred to Native Hawaiians - home of Pele' }
        ],
        
        environmentalImpact: [
            { label: 'Climate science', value: 'Keeling Curve measured here - proof of rising CO2' },
            { label: 'Vog', value: 'Volcanic smog affects Hawaii air quality' },
            { label: 'New land', value: 'Creates new land with each eruption' }
        ],
        
        famousEvents: [
            { event: 'Threatened Hilo', year: 1881, description: 'Lava flow stopped just outside city' },
            { event: 'Keeling Curve', year: 1958, description: 'CO2 monitoring began at Mauna Loa Observatory' },
            { event: 'Flow toward Hilo', year: 1984, description: 'Lava stopped 6.5 km from city after 3 weeks' },
            { event: '2022 eruption', year: 2022, description: 'First eruption in 38 years attracted global attention' }
        ],
        
        funFacts: [
            'Largest volcano on Earth by volume (75,000 km³)',
            'Makes up 51% of Hawaii Island',
            'Rises 17km from ocean floor (taller than Everest from sea level to summit)',
            'Has erupted 33 times since 1843',
            'The Keeling Curve proving climate change is measured here',
            'Home to Pele, Hawaiian goddess of volcanoes',
            'So heavy it has depressed the ocean floor 8km beneath it'
        ],
        
        image: 'https://images.unsplash.com/photo-1608047075574-b91ea0e97c2c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1608047075574-b91ea0e97c2c?w=1920',
        
        flyOverWaypoints: [
            { name: 'Hawaii Overview', coordinates: [19.5, -155.5], zoom: 9, description: 'The Big Island' },
            { name: 'Kilauea Neighbor', coordinates: [19.4, -155.3], zoom: 10, description: 'Sister volcanoes' },
            { name: 'Rift Zone', coordinates: [19.45, -155.5], zoom: 11, description: 'Active rift zones' },
            { name: 'Moku\'āweoweo', coordinates: [19.4756, -155.6054], zoom: 13, description: 'Summit caldera' },
            { name: 'Massive Scale', coordinates: [19.4756, -155.6054], zoom: 9, description: 'Earth\'s largest volcano' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #19 - MOUNT CAMEROON
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-cameroon',
        name: 'Mount Cameroon',
        nativeName: 'Fako / Mongo ma Ndemi',
        countries: [
            { name: 'Cameroon', code: 'CM' }
        ],
        continent: 'Africa',
        region: 'Southwest Region',
        
        elevation: 4095,
        prominence: 3901,
        coordinates: [4.2167, 9.1667],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Hotspot/Rift',
            plates: ['African Plate'],
            volcanicBelt: 'Cameroon Volcanic Line',
            subduction: false
        },
        
        lastEruption: {
            year: 2012,
            name: 'Flank eruption',
            vei: 2,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2012, name: 'Effusive eruption', vei: 2 },
            { year: 2000, name: 'Flank eruption', vei: 2 },
            { year: 1999, name: 'Effusive eruption', vei: 2 },
            { year: 1982, name: 'Eruption', vei: 2 },
            { year: 1959, name: 'Large eruption', vei: 3 },
            { year: 1922, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Basaltic',
        
        crater: {
            diameter: 'Multiple craters',
            depth: 'Variable',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Buea', coordinates: [4.1560, 9.2360], distance: '10km', population: 90000 },
            { name: 'Limbe', coordinates: [4.0167, 9.2167], distance: '20km', population: 100000 },
            { name: 'Douala', coordinates: [4.0511, 9.7679], distance: '70km', population: 3000000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Very High', affectedArea: 'Villages on slopes' },
            { type: 'Volcanic gases', risk: 'High' },
            { type: 'Lahars', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Agriculture', value: 'Rich volcanic soil - tea, coffee, banana plantations' },
            { label: 'Tourism', value: 'Mount Cameroon Race of Hope annually' },
            { label: 'Biodiversity', value: 'Endemic species in montane forests' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Four distinct vegetation zones' },
            { label: 'Endemic species', value: 'Home to Mount Cameroon francolin and others' },
            { label: 'Eruptions', value: 'Lava flows have destroyed villages and plantations' }
        ],
        
        famousEvents: [
            { event: 'First European ascent', year: 1861, description: 'Richard Burton and Gustav Mann reached summit' },
            { event: 'Race of Hope', year: 1973, description: 'Annual race to summit and back began' },
            { event: 'Village destroyed', year: 1999, description: 'Lava flow destroyed parts of Bakingili village' }
        ],
        
        funFacts: [
            'Highest peak in West and Central Africa',
            'Most frequently erupting volcano in West Africa',
            'The "Race of Hope" marathon goes up and down annually',
            'Has over 60 endemic plant species',
            'Rises directly from the Atlantic Ocean coast',
            'Name "Mongo ma Ndemi" means "Mountain of Greatness"',
            'Carthaginian explorer Hanno may have seen it erupting in 500 BC'
        ],
        
        image: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1920',
        
        flyOverWaypoints: [
            { name: 'Atlantic Coast', coordinates: [4.0, 9.2], zoom: 10, description: 'Rising from the sea' },
            { name: 'Buea Town', coordinates: [4.15, 9.23], zoom: 11, description: 'Regional capital on slopes' },
            { name: 'Forest Zones', coordinates: [4.2, 9.18], zoom: 12, description: 'Montane forests' },
            { name: 'Summit', coordinates: [4.2167, 9.1667], zoom: 13, description: 'Fako Peak' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #20 - MOUNT EREBUS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-erebus',
        name: 'Mount Erebus',
        nativeName: 'Mount Erebus',
        countries: [
            { name: 'Antarctica', code: 'AQ' }
        ],
        continent: 'Antarctica',
        region: 'Ross Island',
        
        elevation: 3794,
        prominence: 3794,
        coordinates: [-77.5283, 167.1530],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Continental rift',
            plates: ['Antarctic Plate'],
            volcanicBelt: 'West Antarctic Rift System',
            subduction: false
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous lava lake activity',
            vei: 1,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Continuous activity', vei: 1 },
            { year: 1972, name: 'Lava lake confirmed', vei: 1 },
            { year: 1908, name: 'First observed eruptions', vei: 2 }
        ],
        
        lavaType: 'Phonolitic (rare type)',
        
        crater: {
            diameter: '500m',
            depth: '100m',
            lavaLake: true
        },
        
        nearbyCities: [
            { name: 'McMurdo Station', coordinates: [-77.8500, 166.6667], distance: '40km', population: 1000 },
            { name: 'Scott Base', coordinates: [-77.8500, 166.7667], distance: '40km', population: 85 }
        ],
        
        hazards: [
            { type: 'Volcanic bombs', risk: 'Moderate', affectedArea: 'Crater area' },
            { type: 'Volcanic gases', risk: 'High' },
            { type: 'Ash fall', risk: 'Low' },
            { type: 'Lava lake explosions', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Research', value: 'Continuous volcanological monitoring' },
            { label: 'Science', value: 'Unique laboratory for studying lava lakes' },
            { label: 'Tourism', value: 'Antarctic expedition cruises view from distance' }
        ],
        
        environmentalImpact: [
            { label: 'Ice caves', value: 'Volcanic heat creates unique ice caves' },
            { label: 'Ecosystem', value: 'Fumaroles support unique microbial life' },
            { label: 'Climate', value: 'Emissions monitored for climate research' }
        ],
        
        famousEvents: [
            { event: 'Discovery', year: 1841, description: 'James Clark Ross discovered the erupting volcano' },
            { event: 'First ascent', year: 1908, description: 'Shackleton expedition team reached summit' },
            { event: 'Air New Zealand crash', year: 1979, description: 'Flight TE901 crashed into mountain, killing 257' },
            { event: 'Lava lake discovered', year: 1972, description: 'Persistent lava lake confirmed in crater' }
        ],
        
        funFacts: [
            'Southernmost active volcano on Earth',
            'Contains one of only 5 long-lived lava lakes in the world',
            'Named after HMS Erebus, ship of explorer James Ross',
            'Has phonolitic lava - one of the rarest lava types',
            'Ice towers (fumaroles) create alien-like ice sculptures',
            'Site of the worst disaster in New Zealand aviation history',
            'Can be seen erupting from McMurdo Station at night'
        ],
        
        image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920',
        
        flyOverWaypoints: [
            { name: 'Ross Island', coordinates: [-77.7, 167.0], zoom: 9, description: 'Antarctic volcanic island' },
            { name: 'McMurdo View', coordinates: [-77.75, 166.8], zoom: 10, description: 'Research station below' },
            { name: 'Ice Towers', coordinates: [-77.55, 167.15], zoom: 12, description: 'Fumarole ice formations' },
            { name: 'Lava Lake', coordinates: [-77.5283, 167.1530], zoom: 14, description: 'Persistent lava lake' },
            { name: 'Antarctic Giant', coordinates: [-77.5283, 167.1530], zoom: 10, description: 'World\'s southernmost active volcano' }
        ]
    }
];

// Log successful load
console.log('🌋 Volcanoes Data 2 loaded: 10 volcanoes (Popocatépetl to Mount Erebus)');
