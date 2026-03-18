/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data File 3
   Volcanoes 21-30 (Highest Elevation First)
   ═══════════════════════════════════════════════════════════ */

window.volcanoesData3 = [
    // ═══════════════════════════════════════════════════════════
    // #21 - MOUNT FUJI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-fuji',
        name: 'Mount Fuji',
        nativeName: '富士山 (Fujisan)',
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        region: 'Honshu Island',
        
        elevation: 3776,
        prominence: 3776,
        coordinates: [35.3606, 138.7274],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Philippine Sea Plate', 'Eurasian Plate', 'North American Plate'],
            volcanicBelt: 'Fuji Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 1707,
            name: 'Hōei Eruption',
            vei: 5,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 1707, name: 'Hōei Eruption', vei: 5 },
            { year: 1083, name: 'Eruption', vei: 4 },
            { year: 864, name: 'Jōgan Eruption', vei: 4 },
            { year: 800, name: 'Enryaku Eruption', vei: 4 },
            { year: 781, name: 'Ten\'ō Eruption', vei: 4 }
        ],
        
        lavaType: 'Basaltic to Andesitic',
        
        crater: {
            diameter: '500m',
            depth: '250m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Tokyo', coordinates: [35.6762, 139.6503], distance: '100km', population: 14000000 },
            { name: 'Yokohama', coordinates: [35.4437, 139.6380], distance: '80km', population: 3750000 },
            { name: 'Shizuoka', coordinates: [34.9756, 138.3827], distance: '50km', population: 700000 },
            { name: 'Fujinomiya', coordinates: [35.2167, 138.6167], distance: '15km', population: 130000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Tokyo metropolitan area' },
            { type: 'Lava flows', risk: 'Moderate' },
            { type: 'Lahars', risk: 'Moderate' },
            { type: 'Volcanic earthquakes', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '300,000+ climbers annually' },
            { label: 'Cultural', value: 'UNESCO World Heritage Site - cultural icon' },
            { label: 'Agriculture', value: 'Fertile volcanic soil for farming' },
            { label: 'Art', value: 'Most depicted mountain in Japanese art' }
        ],
        
        environmentalImpact: [
            { label: '1707 Eruption', value: 'Ash reached Tokyo, caused crop failures and famine' },
            { label: 'Ecosystem', value: 'Five distinct ecological zones on mountain' },
            { label: 'Water', value: 'Snowmelt provides water for Fuji Five Lakes' }
        ],
        
        famousEvents: [
            { event: 'UNESCO Heritage', year: 2013, description: 'Designated Cultural World Heritage Site' },
            { event: 'Hōei Eruption', year: 1707, description: 'Last eruption - 16 days, VEI 5' },
            { event: 'First recorded ascent', year: 663, description: 'Buddhist monk En no Gyōja reportedly climbed' },
            { event: 'First foreign ascent', year: 1860, description: 'Rutherford Alcock first non-Japanese to summit' }
        ],
        
        funFacts: [
            'Most climbed mountain in the world',
            'Nearly perfectly symmetrical volcanic cone',
            'Snow cap visible 10 months of the year',
            'Sacred mountain in Shinto religion',
            'Featured in countless ukiyo-e woodblock prints',
            'Can be seen from Tokyo on clear days',
            'Climbing season is only July-August',
            'Over 200,000 people climb during the 2-month season'
        ],
        
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920',
        
        flyOverWaypoints: [
            { name: 'Tokyo View', coordinates: [35.6, 139.4], zoom: 8, description: 'View from the capital' },
            { name: 'Five Lakes', coordinates: [35.5, 138.8], zoom: 10, description: 'Fuji Five Lakes region' },
            { name: 'North Face', coordinates: [35.4, 138.73], zoom: 11, description: 'Classic northern view' },
            { name: 'Summit Crater', coordinates: [35.3606, 138.7274], zoom: 14, description: 'View of the crater' },
            { name: 'Perfect Cone', coordinates: [35.3606, 138.7274], zoom: 10, description: 'The iconic silhouette' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #22 - SANTA MARÍA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'santa-maria',
        name: 'Santa María',
        nativeName: 'Volcán Santa María',
        countries: [
            { name: 'Guatemala', code: 'GT' }
        ],
        continent: 'North America',
        region: 'Quetzaltenango',
        
        elevation: 3772,
        prominence: 1472,
        coordinates: [14.7567, -91.5522],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Cocos Plate', 'Caribbean Plate'],
            volcanicBelt: 'Central American Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Santiaguito dome ongoing',
            vei: 2,
            type: 'Dome building'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Santiaguito continuous activity', vei: 2 },
            { year: 1929, name: 'Santiaguito dome formed', vei: 3 },
            { year: 1902, name: 'Catastrophic eruption', vei: 6, deaths: 6000 }
        ],
        
        lavaType: 'Dacitic',
        
        crater: {
            diameter: '1.5km (1902 crater)',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Quetzaltenango', coordinates: [14.8347, -91.5181], distance: '10km', population: 180000 },
            { name: 'Guatemala City', coordinates: [14.6349, -90.5069], distance: '120km', population: 3000000 },
            { name: 'San Marcos', coordinates: [14.9650, -91.7986], distance: '35km', population: 40000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High', affectedArea: 'Southern flanks from Santiaguito' },
            { type: 'Lahars', risk: 'Very High' },
            { type: 'Ash fall', risk: 'Very High' },
            { type: 'Volcanic bombs', risk: 'High' },
            { type: 'Lava dome collapse', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Popular hiking and volcano watching' },
            { label: 'Agriculture', value: 'Coffee plantations on fertile slopes' },
            { label: 'Research', value: 'Santiaguito is extensively studied' }
        ],
        
        environmentalImpact: [
            { label: '1902 disaster', value: 'One of largest 20th century eruptions - VEI 6' },
            { label: 'Santiaguito', value: 'Continuous dome growth and collapse since 1922' },
            { label: 'Rivers', value: 'Lahars regularly affect downstream areas' }
        ],
        
        famousEvents: [
            { event: '1902 Eruption', year: 1902, description: 'VEI 6 explosion - 3rd largest of 20th century' },
            { event: 'Santiaguito birth', year: 1922, description: 'New dome began growing in 1902 crater' },
            { event: 'Deadly lahar', year: 1929, description: 'Pyroclastic flows and lahars killed thousands' }
        ],
        
        funFacts: [
            '1902 eruption was heard 800km away in Costa Rica',
            'Santiaguito is one of the most studied volcanic domes',
            'The 1902 crater is 1.5km wide and 300m deep',
            'Santiaguito has been erupting continuously since 1922',
            'Erupts ash and pyroclastic flows almost daily',
            'Popular destination for volcanologists worldwide',
            'Can watch Santiaguito erupt from Santa María summit'
        ],
        
        image: 'https://images.unsplash.com/photo-1564979268369-72e82ee61d7b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1564979268369-72e82ee61d7b?w=1920',
        
        flyOverWaypoints: [
            { name: 'Quetzaltenango', coordinates: [14.83, -91.52], zoom: 11, description: 'Guatemala\'s second city' },
            { name: 'Santa María Peak', coordinates: [14.76, -91.55], zoom: 12, description: 'Main summit' },
            { name: 'Santiaguito Dome', coordinates: [14.74, -91.57], zoom: 13, description: 'Continuously active dome' },
            { name: '1902 Crater', coordinates: [14.7567, -91.5522], zoom: 14, description: 'Massive explosion crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #23 - MOUNT TEIDE
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-teide',
        name: 'Mount Teide',
        nativeName: 'Teide / Echeyde',
        countries: [
            { name: 'Spain', code: 'ES' }
        ],
        continent: 'Europe',
        region: 'Canary Islands (Tenerife)',
        
        elevation: 3718,
        prominence: 3718,
        coordinates: [28.2733, -16.6422],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Hotspot',
            plates: ['African Plate'],
            volcanicBelt: 'Canary Islands Hotspot',
            subduction: false
        },
        
        lastEruption: {
            year: 1909,
            name: 'Chinyero eruption',
            vei: 2,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 1909, name: 'Chinyero flank eruption', vei: 2 },
            { year: 1798, name: 'Chahorra eruption', vei: 2 },
            { year: 1706, name: 'Garachico eruption', vei: 3 },
            { year: 1704, name: 'Siete Fuentes eruption', vei: 2 }
        ],
        
        lavaType: 'Phonolitic',
        
        crater: {
            diameter: '82m',
            depth: '40m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Santa Cruz de Tenerife', coordinates: [28.4636, -16.2518], distance: '40km', population: 210000 },
            { name: 'Puerto de la Cruz', coordinates: [28.4145, -16.5475], distance: '25km', population: 30000 },
            { name: 'La Orotava', coordinates: [28.3897, -16.5230], distance: '22km', population: 42000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Moderate' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Flank eruptions', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Most visited national park in Europe - 4 million/year' },
            { label: 'UNESCO', value: 'World Heritage Site since 2007' },
            { label: 'Cable car', value: 'Teleférico del Teide brings visitors near summit' },
            { label: 'Astronomy', value: 'Teide Observatory on slopes' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Unique Canarian pine forests and endemic species' },
            { label: 'Climate', value: 'Creates unique microclimates on Tenerife' },
            { label: 'Geology', value: 'Las Cañadas caldera is stunning geological feature' }
        ],
        
        famousEvents: [
            { event: 'UNESCO designation', year: 2007, description: 'Teide National Park became World Heritage Site' },
            { event: 'Columbus sighting', year: 1492, description: 'Columbus saw eruption during voyage to Americas' },
            { event: 'First scientific study', year: 1799, description: 'Alexander von Humboldt climbed and studied Teide' }
        ],
        
        funFacts: [
            'Highest peak in Spain and Atlantic islands',
            'Third tallest volcanic structure in the world (from ocean floor)',
            'Most visited national park in Europe',
            'Used as Mars analog by NASA and ESA',
            'The Guanches (natives) believed god of light lived inside',
            'Can see shadow of Teide cast on sea at sunrise',
            'One of the best places in the world for stargazing'
        ],
        
        image: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=1920',
        
        flyOverWaypoints: [
            { name: 'Tenerife Approach', coordinates: [28.4, -16.4], zoom: 10, description: 'Island overview' },
            { name: 'Las Cañadas', coordinates: [28.3, -16.55], zoom: 11, description: 'Ancient caldera' },
            { name: 'Pico Viejo', coordinates: [28.27, -16.67], zoom: 12, description: 'Secondary peak' },
            { name: 'Summit', coordinates: [28.2733, -16.6422], zoom: 14, description: 'Spain\'s highest point' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #24 - MOUNT NYIRAGONGO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-nyiragongo',
        name: 'Mount Nyiragongo',
        nativeName: 'Nyiragongo',
        countries: [
            { name: 'Democratic Republic of the Congo', code: 'CD' }
        ],
        continent: 'Africa',
        region: 'North Kivu Province',
        
        elevation: 3470,
        prominence: 1520,
        coordinates: [-1.5200, 29.2500],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Continental rift',
            plates: ['African Plate', 'Somali Plate'],
            volcanicBelt: 'East African Rift - Virunga Volcanoes',
            subduction: false
        },
        
        lastEruption: {
            year: 2021,
            name: 'Major flank eruption',
            vei: 2,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2021, name: 'Major eruption', vei: 2, deaths: 32 },
            { year: 2002, name: 'Devastating eruption', vei: 1, deaths: 147 },
            { year: 1977, name: 'Catastrophic lava lake drain', vei: 1, deaths: 2000 },
            { year: 1948, name: 'Flank eruption', vei: 2 },
            { year: 1927, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Nephelinite (extremely fluid)',
        
        crater: {
            diameter: '1.2km',
            depth: '250m',
            lavaLake: true
        },
        
        nearbyCities: [
            { name: 'Goma', coordinates: [-1.6771, 29.2285], distance: '18km', population: 1000000 },
            { name: 'Gisenyi (Rwanda)', coordinates: [-1.7028, 29.2564], distance: '20km', population: 85000 },
            { name: 'Bukavu', coordinates: [-2.5083, 28.8608], distance: '150km', population: 870000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Extreme', affectedArea: 'Goma city - fastest lava on Earth' },
            { type: 'Limnic eruption', risk: 'Very High', affectedArea: 'Lake Kivu could release lethal CO2' },
            { type: 'Volcanic gases', risk: 'Very High' },
            { type: 'Earthquakes', risk: 'High' },
            { type: 'Lava lake drain', risk: 'Extreme' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Lava lake hiking tours (conflict permitting)' },
            { label: 'Research', value: 'Important site for studying lava lakes' },
            { label: 'Geothermal', value: 'Potential for geothermal energy' }
        ],
        
        environmentalImpact: [
            { label: '2002 eruption', value: 'Lava destroyed 40% of Goma, displaced 400,000' },
            { label: 'Lake Kivu', value: 'Volcanic gases could trigger catastrophic lake overturn' },
            { label: 'Ecosystem', value: 'Affects mountain gorilla habitat' }
        ],
        
        famousEvents: [
            { event: 'Lava lake drain', year: 1977, description: 'Crater drained in 1 hour - lava at 100 km/h killed 2000' },
            { event: 'Goma destroyed', year: 2002, description: 'Lava flows destroyed city center, 147 died' },
            { event: '2021 eruption', year: 2021, description: 'Surprise eruption sent lava toward Goma, 32 died' },
            { event: 'Discovery', year: 1894, description: 'European discovery of the active lava lake' }
        ],
        
        funFacts: [
            'Contains one of the world\'s largest lava lakes',
            'Has the most fluid lava on Earth - can flow at 100 km/h',
            'Lava lake glows visible from space',
            'Crater walls are nearly vertical',
            'One of Africa\'s most active volcanoes',
            'The 1977 eruption killed more people than any other in decades',
            'Threatens 1 million people in Goma',
            'Part of the Virunga mountain gorilla habitat'
        ],
        
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920',
        
        flyOverWaypoints: [
            { name: 'Lake Kivu', coordinates: [-1.7, 29.2], zoom: 10, description: 'Dangerous volcanic lake' },
            { name: 'Goma City', coordinates: [-1.68, 29.23], zoom: 11, description: 'Million people at risk' },
            { name: 'Crater Rim', coordinates: [-1.53, 29.25], zoom: 12, description: 'Approaching the abyss' },
            { name: 'Lava Lake', coordinates: [-1.5200, 29.2500], zoom: 14, description: 'World\'s largest lava lake' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #25 - MOUNT ETNA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-etna',
        name: 'Mount Etna',
        nativeName: 'Mongibello / Mungibeddu',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        region: 'Sicily',
        
        elevation: 3357,
        prominence: 3357,
        coordinates: [37.7510, 14.9934],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['African Plate', 'Eurasian Plate'],
            volcanicBelt: 'Mediterranean Volcanic Belt',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous activity',
            vei: 2,
            type: 'Strombolian/Effusive'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Ongoing eruptions', vei: 2 },
            { year: 2021, name: 'Paroxysmal activity', vei: 2 },
            { year: 2001, name: 'Major flank eruption', vei: 2 },
            { year: 1992, name: '473-day eruption', vei: 2 },
            { year: 1669, name: 'Devastating eruption', vei: 3, deaths: 20000 },
            { year: -396, name: 'Historical eruption', vei: 3 }
        ],
        
        lavaType: 'Basaltic (Hawaiite)',
        
        crater: {
            diameter: 'Multiple summit craters',
            depth: 'Variable',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Catania', coordinates: [37.5079, 15.0830], distance: '30km', population: 300000 },
            { name: 'Taormina', coordinates: [37.8516, 15.2853], distance: '35km', population: 11000 },
            { name: 'Messina', coordinates: [38.1938, 15.5540], distance: '70km', population: 230000 },
            { name: 'Palermo', coordinates: [38.1157, 13.3615], distance: '200km', population: 670000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Very High', affectedArea: 'Surrounding villages' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Catania Airport frequently closed' },
            { type: 'Volcanic bombs', risk: 'High' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Flank collapse', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'UNESCO World Heritage - major attraction' },
            { label: 'Wine', value: 'Famous Etna DOC wines from volcanic soil' },
            { label: 'Agriculture', value: 'Pistachios, citrus, olives on fertile slopes' },
            { label: 'Cable car/Skiing', value: 'Winter skiing on active volcano' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Unique Mediterranean-volcanic ecosystem' },
            { label: 'Climate', value: 'Creates microclimate affecting eastern Sicily' },
            { label: 'Air quality', value: 'Frequent ash falls disrupt daily life' }
        ],
        
        famousEvents: [
            { event: 'UNESCO designation', year: 2013, description: 'Designated World Heritage Site' },
            { event: 'Catania destruction', year: 1669, description: 'Lava buried western Catania, killed 20,000' },
            { event: 'US Army bombed', year: 1983, description: 'US Navy tried to divert lava with explosives' },
            { event: 'Greek mythology', year: -800, description: 'Ancient Greeks believed Typhon imprisoned beneath' }
        ],
        
        funFacts: [
            'Tallest active volcano in Europe',
            'One of the most active volcanoes in the world',
            'Has been erupting for over 500,000 years',
            'Has over 400 craters on its flanks',
            'You can ski on its snow-covered slopes',
            'Ancient Greeks believed it was the forge of Hephaestus',
            'Produces some of Italy\'s best wines',
            'Catania airport closes multiple times per year due to ash'
        ],
        
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920',
        
        flyOverWaypoints: [
            { name: 'Catania', coordinates: [37.51, 15.08], zoom: 10, description: 'City in the shadow' },
            { name: 'Vineyards', coordinates: [37.65, 15.0], zoom: 11, description: 'Famous wine region' },
            { name: 'Valle del Bove', coordinates: [37.73, 15.02], zoom: 12, description: 'Massive collapse scar' },
            { name: 'Summit Craters', coordinates: [37.7510, 14.9934], zoom: 14, description: 'Active crater complex' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #26 - MOUNT AGUNG
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-agung',
        name: 'Mount Agung',
        nativeName: 'Gunung Agung',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        region: 'Bali',
        
        elevation: 3142,
        prominence: 3142,
        coordinates: [-8.3433, 115.5078],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Indo-Australian Plate', 'Eurasian Plate'],
            volcanicBelt: 'Sunda Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2019,
            name: 'Phreatic/Magmatic',
            vei: 2,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 2019, name: 'Ongoing activity', vei: 2 },
            { year: 2017, name: 'Major eruption crisis', vei: 3 },
            { year: 1963, name: 'Catastrophic eruption', vei: 5, deaths: 1600 },
            { year: 1843, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Andesitic to Basaltic-Andesitic',
        
        crater: {
            diameter: '520m',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Denpasar', coordinates: [-8.6705, 115.2126], distance: '70km', population: 900000 },
            { name: 'Ubud', coordinates: [-8.5069, 115.2625], distance: '50km', population: 75000 },
            { name: 'Amlapura', coordinates: [-8.4478, 115.6086], distance: '25km', population: 45000 },
            { name: 'Singaraja', coordinates: [-8.1161, 115.0881], distance: '60km', population: 150000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'River valleys' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Bali airport frequently closed' },
            { type: 'Volcanic bombs', risk: 'High' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Sacred mountain - major tourist draw' },
            { label: 'Religious', value: 'Most important temple Pura Besakih on slopes' },
            { label: 'Agriculture', value: 'Fertile slopes for rice and vegetables' },
            { label: 'Water', value: 'Source of irrigation water for East Bali' }
        ],
        
        environmentalImpact: [
            { label: '1963 eruption', value: 'Killed 1,600, destroyed villages, lowered global temperature' },
            { label: 'Climate', value: 'Influences rainfall patterns across Bali' },
            { label: 'Ecosystem', value: 'Montane forests with unique species' }
        ],
        
        famousEvents: [
            { event: '1963 disaster', year: 1963, description: 'VEI 5 eruption killed 1,600 people' },
            { event: '2017 crisis', year: 2017, description: '140,000 evacuated as volcano threatened major eruption' },
            { event: 'Eka Dasa Rudra', year: 1963, description: 'Eruption during major Hindu ceremony seen as omen' },
            { event: 'Airport closures', year: 2017, description: 'Bali airport closed multiple times stranding tourists' }
        ],
        
        funFacts: [
            'Highest point in Bali and most sacred mountain',
            'Balinese Hindu temples aligned toward Agung',
            'The holiest temple in Bali (Pura Besakih) is on its slopes',
            'Traditional Balinese houses are oriented toward Agung',
            '1963 eruption affected global climate',
            'Name means "Great Mountain" in Balinese',
            'Many Balinese climb to pray at the crater rim'
        ],
        
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920',
        
        flyOverWaypoints: [
            { name: 'Bali Overview', coordinates: [-8.5, 115.3], zoom: 9, description: 'Island of the Gods' },
            { name: 'Besakih Temple', coordinates: [-8.37, 115.45], zoom: 11, description: 'Mother Temple of Bali' },
            { name: 'Eastern Slopes', coordinates: [-8.35, 115.5], zoom: 12, description: 'Sacred mountain forests' },
            { name: 'Summit Crater', coordinates: [-8.3433, 115.5078], zoom: 14, description: 'Active crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #27 - MOUNT MERAPI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-merapi',
        name: 'Mount Merapi',
        nativeName: 'Gunung Merapi (Fire Mountain)',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        region: 'Central Java',
        
        elevation: 2930,
        prominence: 1350,
        coordinates: [-7.5407, 110.4457],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Indo-Australian Plate', 'Eurasian Plate'],
            volcanicBelt: 'Sunda Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Ongoing dome collapse',
            vei: 2,
            type: 'Dome collapse pyroclastic flows'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Pyroclastic flows', vei: 2 },
            { year: 2010, name: 'Major eruption', vei: 4, deaths: 353 },
            { year: 2006, name: 'Deadly eruption', vei: 2, deaths: 2 },
            { year: 1994, name: 'Pyroclastic flows', vei: 2, deaths: 66 },
            { year: 1930, name: 'Devastating eruption', vei: 3, deaths: 1400 },
            { year: 1006, name: 'Catastrophic eruption', vei: 7 }
        ],
        
        lavaType: 'Basaltic-Andesitic',
        
        crater: {
            diameter: '400m',
            depth: '100m (variable)',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Yogyakarta', coordinates: [-7.7956, 110.3695], distance: '28km', population: 430000 },
            { name: 'Solo (Surakarta)', coordinates: [-7.5755, 110.8243], distance: '35km', population: 520000 },
            { name: 'Magelang', coordinates: [-7.4797, 110.2177], distance: '30km', population: 130000 },
            { name: 'Sleman', coordinates: [-7.7167, 110.3556], distance: '20km', population: 1200000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Extreme', affectedArea: 'Villages on all flanks' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'River valleys' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Yogyakarta region' },
            { type: 'Volcanic bombs', risk: 'High' },
            { type: 'Dome collapse', risk: 'Extreme' }
        ],
        
        economicImportance: [
            { label: 'Agriculture', value: 'Extremely fertile slopes - rice, vegetables' },
            { label: 'Mining', value: 'Sand mining from volcanic deposits' },
            { label: 'Tourism', value: 'Jeep tours and hiking (with risks)' },
            { label: 'Spiritual', value: 'Important in Javanese spirituality' }
        ],
        
        environmentalImpact: [
            { label: '2010 eruption', value: 'Destroyed forests, killed 353 people including volcano keeper' },
            { label: 'Ecosystem', value: 'Tropical montane forest destroyed repeatedly' },
            { label: 'Rivers', value: 'Lahars change river courses' }
        ],
        
        famousEvents: [
            { event: '2010 eruption', year: 2010, description: 'Mbah Maridjan, spiritual guardian, died refusing to evacuate' },
            { event: '1006 eruption', year: 1006, description: 'May have contributed to collapse of Hindu Mataram kingdom' },
            { event: 'Borobudur burial', year: 1006, description: 'Possibly buried Borobudur temple' },
            { event: 'Dome growth', year: 2021, description: 'New lava dome rapidly growing' }
        ],
        
        funFacts: [
            'One of the most active and dangerous volcanoes in Indonesia',
            'Erupts on average every 5-10 years',
            'Name means "Fire Mountain" in Javanese',
            'Has a spiritual guardian (Juru Kunci) who lives on slopes',
            '2010 eruption killed the famous guardian Mbah Maridjan',
            'Sits between two UNESCO World Heritage temples (Borobudur, Prambanan)',
            'Dome collapse pyroclastic flows reach 150 km/h',
            'Densely populated slopes despite extreme danger'
        ],
        
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1920',
        
        flyOverWaypoints: [
            { name: 'Yogyakarta', coordinates: [-7.79, 110.37], zoom: 10, description: 'Cultural capital' },
            { name: 'Borobudur', coordinates: [-7.61, 110.20], zoom: 11, description: 'Ancient Buddhist temple' },
            { name: 'Danger Zone', coordinates: [-7.58, 110.43], zoom: 12, description: 'Villages in hazard zone' },
            { name: 'Active Dome', coordinates: [-7.5407, 110.4457], zoom: 14, description: 'Growing lava dome' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #28 - VILLARRICA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'villarrica',
        name: 'Villarrica',
        nativeName: 'Rucapillán (House of the Spirit)',
        countries: [
            { name: 'Chile', code: 'CL' }
        ],
        continent: 'South America',
        region: 'Araucanía Region',
        
        elevation: 2860,
        prominence: 1510,
        coordinates: [-39.4200, -71.9397],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Nazca Plate', 'South American Plate'],
            volcanicBelt: 'Southern Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 2015,
            name: 'Lava fountains',
            vei: 2,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2015, name: 'Strombolian eruption', vei: 2 },
            { year: 1984, name: 'Eruption', vei: 2 },
            { year: 1971, name: 'Major eruption', vei: 2 },
            { year: 1963, name: 'Eruption', vei: 2, deaths: 22 },
            { year: 1948, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Basaltic-Andesitic',
        
        crater: {
            diameter: '200m',
            depth: '150m',
            lavaLake: true
        },
        
        nearbyCities: [
            { name: 'Pucón', coordinates: [-39.2820, -71.9580], distance: '15km', population: 30000 },
            { name: 'Villarrica', coordinates: [-39.2856, -72.2272], distance: '30km', population: 56000 },
            { name: 'Temuco', coordinates: [-38.7359, -72.5904], distance: '100km', population: 280000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'High' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'River valleys toward Pucón' },
            { type: 'Lava fountains', risk: 'High' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Major adventure tourism destination' },
            { label: 'Climbing', value: 'Popular summit climbs to see lava lake' },
            { label: 'Skiing', value: 'Villarrica ski resort on slopes' },
            { label: 'National Park', value: 'Villarrica National Park' }
        ],
        
        environmentalImpact: [
            { label: 'Glaciers', value: 'Glacial cap feeds rivers and lakes' },
            { label: 'Ecosystem', value: 'Araucaria (monkey puzzle) forests on slopes' },
            { label: 'Lakes', value: 'Lake Villarrica at base' }
        ],
        
        famousEvents: [
            { event: '2015 eruption', year: 2015, description: 'Spectacular night eruption visible from Pucón' },
            { event: '1971 eruption', year: 1971, description: 'Lahars reached Lake Villarrica' },
            { event: 'Lava lake discovery', year: 1984, description: 'Permanent lava lake confirmed in crater' }
        ],
        
        funFacts: [
            'One of only a few volcanoes with a permanent lava lake',
            'One of the most active volcanoes in South America',
            'Popular night climbs to see lava glow',
            'Has a ski resort on its slopes',
            'Perfect cone shape visible from Pucón',
            'Name Rucapillán means "House of the Spirit" in Mapuche',
            'Climbers can look into the bubbling lava lake'
        ],
        
        image: 'https://images.unsplash.com/photo-1563284223-333497472e88?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1563284223-333497472e88?w=1920',
        
        flyOverWaypoints: [
            { name: 'Lake Villarrica', coordinates: [-39.25, -72.1], zoom: 10, description: 'Resort lake below' },
            { name: 'Pucón', coordinates: [-39.28, -71.96], zoom: 11, description: 'Adventure capital' },
            { name: 'Glaciers', coordinates: [-39.4, -71.95], zoom: 12, description: 'Ice cap' },
            { name: 'Lava Lake', coordinates: [-39.4200, -71.9397], zoom: 14, description: 'Permanent lava lake' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #29 - MOUNT TAMBORA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-tambora',
        name: 'Mount Tambora',
        nativeName: 'Gunung Tambora',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        region: 'Sumbawa Island',
        
        elevation: 2850,
        prominence: 2850,
        coordinates: [-8.2500, 118.0000],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Indo-Australian Plate', 'Eurasian Plate'],
            volcanicBelt: 'Sunda Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1967,
            name: 'Minor eruption',
            vei: 0,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 1967, name: 'Minor activity', vei: 0 },
            { year: 1880, name: 'Small eruption', vei: 2 },
            { year: 1815, name: 'Cataclysmic eruption', vei: 7, deaths: 100000 }
        ],
        
        lavaType: 'Trachyandesitic',
        
        crater: {
            diameter: '6km',
            depth: '1.1km',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Bima', coordinates: [-8.4583, 118.7167], distance: '80km', population: 150000 },
            { name: 'Dompu', coordinates: [-8.5333, 118.4667], distance: '50km', population: 45000 },
            { name: 'Mataram', coordinates: [-8.5833, 116.1167], distance: '200km', population: 420000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Ash fall', risk: 'Moderate' },
            { type: 'Lahars', risk: 'Moderate' },
            { type: 'Caldera collapse', risk: 'Low' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Growing volcano tourism destination' },
            { label: 'Research', value: 'Important site for studying super-eruptions' },
            { label: 'Coffee', value: 'Famous Tambora coffee from fertile slopes' }
        ],
        
        environmentalImpact: [
            { label: '1815 eruption', value: 'Most powerful eruption in recorded history' },
            { label: 'Year Without Summer', value: '1816 global climate disaster caused by eruption' },
            { label: 'Lost kingdom', value: 'Buried Tambora kingdom discovered by archaeologists' }
        ],
        
        famousEvents: [
            { event: '1815 super-eruption', year: 1815, description: 'VEI 7 - largest eruption in 1000 years' },
            { event: 'Year Without Summer', year: 1816, description: 'Global crop failures, famine across Europe and Americas' },
            { event: 'Frankenstein summer', year: 1816, description: 'Mary Shelley wrote Frankenstein during dark summer' },
            { event: 'Lost kingdom found', year: 2004, description: 'Archaeologists discovered Tambora civilization buried in ash' }
        ],
        
        funFacts: [
            'Most powerful volcanic eruption in recorded history (VEI 7)',
            'Eruption killed an estimated 100,000 people',
            'Caused "Year Without Summer" in 1816 - global crop failures',
            'Was 4,300m tall before 1815 - lost 1,400m of height',
            'The dark summer of 1816 inspired Mary Shelley to write Frankenstein',
            'Buried an entire kingdom, now being excavated like Pompeii',
            'Crater is so large you can hike to the floor',
            'Coffee grown on its slopes is considered premium'
        ],
        
        image: 'https://images.unsplash.com/photo-1580767872381-904d8c4b2b54?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1580767872381-904d8c4b2b54?w=1920',
        
        flyOverWaypoints: [
            { name: 'Sumbawa Island', coordinates: [-8.4, 117.8], zoom: 9, description: 'Lesser Sunda Islands' },
            { name: 'Approaching', coordinates: [-8.3, 118.0], zoom: 10, description: 'Former giant' },
            { name: 'Caldera Rim', coordinates: [-8.26, 118.0], zoom: 12, description: '6km wide caldera' },
            { name: 'Caldera Floor', coordinates: [-8.2500, 118.0000], zoom: 13, description: '1.1km deep' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #30 - MOUNT RUAPEHU
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-ruapehu',
        name: 'Mount Ruapehu',
        nativeName: 'Ruapehu',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        region: 'North Island',
        
        elevation: 2797,
        prominence: 2302,
        coordinates: [-39.2817, 175.5686],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Pacific Plate', 'Indo-Australian Plate'],
            volcanicBelt: 'Taupo Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 2007,
            name: 'Crater lake eruption',
            vei: 2,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 2007, name: 'Crater lake eruption', vei: 2 },
            { year: 1995, name: 'Explosive eruptions', vei: 3 },
            { year: 1975, name: 'Eruption', vei: 2 },
            { year: 1969, name: 'Eruption', vei: 2 },
            { year: 1953, name: 'Tangiwai disaster', vei: 2, deaths: 151 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '500m',
            depth: 'Variable (crater lake)',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Taupo', coordinates: [-38.6857, 176.0702], distance: '90km', population: 26000 },
            { name: 'Ohakune', coordinates: [-39.4178, 175.3128], distance: '25km', population: 1100 },
            { name: 'Waiouru', coordinates: [-39.4747, 175.6706], distance: '20km', population: 1000 },
            { name: 'Palmerston North', coordinates: [-40.3523, 175.6082], distance: '120km', population: 90000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Very High', affectedArea: 'Whangaehu River valley' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'High' },
            { type: 'Volcanic earthquakes', risk: 'Moderate' },
            { type: 'Crater lake burst', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Skiing', value: 'Two major ski fields - Whakapapa and Turoa' },
            { label: 'Tourism', value: 'Tongariro National Park - dual UNESCO site' },
            { label: 'Film', value: 'Filming location for Mount Doom in Lord of the Rings' }
        ],
        
        environmentalImpact: [
            { label: 'Crater lake', value: 'Acidic crater lake creates lahar risk' },
            { label: 'Ecosystem', value: 'Unique alpine ecosystem' },
            { label: 'Glaciers', value: 'Rapidly shrinking glaciers' }
        ],
        
        famousEvents: [
            { event: 'Tangiwai disaster', year: 1953, description: 'Lahar destroyed railway bridge, killing 151 people' },
            { event: '1995 eruptions', year: 1995, description: 'Series of explosions disrupted ski season' },
            { event: 'Lord of the Rings', year: 2001, description: 'Used as Mount Doom in films' },
            { event: 'First UNESCO', year: 1990, description: 'Tongariro became first World Heritage cultural landscape' }
        ],
        
        funFacts: [
            'Highest point in the North Island',
            'Used as Mount Doom in Lord of the Rings films',
            'Has a hot acidic crater lake',
            'New Zealand\'s most active volcano',
            'Part of Tongariro National Park - dual UNESCO World Heritage site',
            'Has two commercial ski fields on its slopes',
            'Māori name means "pit of noise" or "exploding pit"',
            'Tangiwai disaster led to major railway safety improvements'
        ],
        
        image: 'https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=1920',
        
        flyOverWaypoints: [
            { name: 'Tongariro National Park', coordinates: [-39.2, 175.6], zoom: 10, description: 'UNESCO World Heritage' },
            { name: 'Three Peaks', coordinates: [-39.25, 175.57], zoom: 11, description: 'Ruapehu, Ngauruhoe, Tongariro' },
            { name: 'Ski Fields', coordinates: [-39.28, 175.55], zoom: 12, description: 'Whakapapa ski area' },
            { name: 'Crater Lake', coordinates: [-39.2817, 175.5686], zoom: 14, description: 'Hot acidic lake' }
        ]
    }
];

// Log successful load
console.log('🌋 Volcanoes Data 3 loaded: 10 volcanoes (Mount Fuji to Mount Ruapehu)');
