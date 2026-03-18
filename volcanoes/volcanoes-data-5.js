/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data File 5
   Volcanoes 41-50 (Highest Elevation First)
   ═══════════════════════════════════════════════════════════ */

window.volcanoesData5 = [
    // ═══════════════════════════════════════════════════════════
    // #41 - SAKURAJIMA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'sakurajima',
        name: 'Sakurajima',
        nativeName: '桜島 (Sakurajima)',
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        region: 'Kyushu (Kagoshima)',
        
        elevation: 1117,
        prominence: 1117,
        coordinates: [31.5833, 130.6500],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Philippine Sea Plate', 'Eurasian Plate'],
            volcanicBelt: 'Kyushu Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous eruptions',
            vei: 2,
            type: 'Vulcanian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Hundreds of eruptions annually', vei: 2 },
            { year: 2022, name: 'Alert level raised', vei: 3 },
            { year: 2013, name: 'Record eruptions', vei: 2 },
            { year: 1914, name: 'Major Taisho eruption', vei: 4, deaths: 58 },
            { year: 1779, name: 'An\'ei eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '500m (Minami-dake)',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Kagoshima', coordinates: [31.5966, 130.5571], distance: '8km', population: 600000 },
            { name: 'Tarumizu', coordinates: [31.4833, 130.6833], distance: '15km', population: 15000 },
            { name: 'Miyazaki', coordinates: [31.9111, 131.4239], distance: '100km', population: 400000 }
        ],
        
        hazards: [
            { type: 'Ash fall', risk: 'Extreme', affectedArea: 'Kagoshima city - daily ashfall' },
            { type: 'Volcanic bombs', risk: 'Very High', affectedArea: 'Near crater' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Major tourist attraction in Kagoshima' },
            { label: 'Agriculture', value: 'Volcanic ash benefits local farming' },
            { label: 'Research', value: 'Extensively monitored volcano' }
        ],
        
        environmentalImpact: [
            { label: 'Daily ashfall', value: 'Kagoshima residents use umbrellas for ash' },
            { label: '1914 eruption', value: 'Lava connected island to mainland' },
            { label: 'Air quality', value: 'Constant ash affects daily life' }
        ],
        
        famousEvents: [
            { event: 'Taisho eruption', year: 1914, description: 'Massive eruption joined island to mainland via lava' },
            { event: 'Record activity', year: 2013, description: 'Over 1,000 eruptions in single year' },
            { event: 'Alert raised', year: 2022, description: 'Evacuation preparations after large explosion' }
        ],
        
        funFacts: [
            'One of the most active volcanoes in the world',
            'Erupts hundreds of times per year',
            'Was an island until 1914 lava flow connected it to mainland',
            'Kagoshima residents carry umbrellas for ash, not rain',
            'Has special trash bags for volcanic ash disposal',
            'City has volcanic shelters throughout',
            'Children in Kagoshima wear helmets to school during heavy activity',
            'Produces enough ash to fill hundreds of garbage trucks yearly'
        ],
        
        image: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=1920',
        
        flyOverWaypoints: [
            { name: 'Kagoshima Bay', coordinates: [31.55, 130.55], zoom: 10, description: 'Bay and city' },
            { name: 'Former Island', coordinates: [31.58, 130.62], zoom: 11, description: 'Now connected to mainland' },
            { name: 'Minami-dake', coordinates: [31.58, 130.65], zoom: 13, description: 'Most active crater' },
            { name: 'Summit', coordinates: [31.5833, 130.6500], zoom: 14, description: 'Constant activity' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #42 - STROMBOLI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'stromboli',
        name: 'Stromboli',
        nativeName: 'Stromboli (Struògnili)',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        region: 'Aeolian Islands (Sicily)',
        
        elevation: 924,
        prominence: 924,
        coordinates: [38.7890, 15.2132],
        defaultZoom: 13,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['African Plate', 'Eurasian Plate'],
            volcanicBelt: 'Aeolian Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous activity',
            vei: 1,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Continuous Strombolian activity', vei: 1 },
            { year: 2019, name: 'Paroxysmal explosions', vei: 3, deaths: 1 },
            { year: 2007, name: 'Major explosions', vei: 2 },
            { year: 2002, name: 'Flank collapse and tsunami', vei: 2 },
            { year: 1930, name: 'Major eruption', vei: 3, deaths: 4 }
        ],
        
        lavaType: 'Basaltic (high potassium)',
        
        crater: {
            diameter: '300m terrace with 3 vents',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Stromboli Village', coordinates: [38.8000, 15.2333], distance: '2km', population: 500 },
            { name: 'Lipari', coordinates: [38.4672, 14.9539], distance: '50km', population: 12000 },
            { name: 'Messina', coordinates: [38.1938, 15.5540], distance: '70km', population: 230000 }
        ],
        
        hazards: [
            { type: 'Volcanic bombs', risk: 'Very High', affectedArea: 'Sciara del Fuoco and summit' },
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Tsunami', risk: 'Moderate', affectedArea: 'Flank collapse risk' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Famous volcano island - guided night hikes' },
            { label: 'Film', value: 'Inspiring location for "Stromboli" (1950) film' },
            { label: 'Wine', value: 'Malvasia wine production' }
        ],
        
        environmentalImpact: [
            { label: 'Sciara del Fuoco', value: 'Huge scar where lava flows to sea' },
            { label: 'Marine', value: 'Hot vents create unique marine ecosystem' },
            { label: 'Island village', value: 'Small population lives in shadow of volcano' }
        ],
        
        famousEvents: [
            { event: 'Lighthouse of Mediterranean', year: -300, description: 'Greeks used glow for navigation for millennia' },
            { event: 'Stromboli film', year: 1950, description: 'Roberto Rossellini film starring Ingrid Bergman' },
            { event: '2019 paroxysm', year: 2019, description: 'Powerful explosion killed 1 hiker' },
            { event: 'Tsunami scare', year: 2002, description: 'Flank collapse created small tsunami' }
        ],
        
        funFacts: [
            'Has been continuously erupting for over 2,000 years',
            'Known as "Lighthouse of the Mediterranean"',
            'Gave its name to "Strombolian" eruption style',
            'Erupts every 15-20 minutes on average',
            'Night hikes to watch eruptions are popular',
            'Only about 500 people live on the island',
            'Inspired Jules Verne\'s "Journey to the Center of the Earth"',
            'The Sciara del Fuoco is a massive collapse scar'
        ],
        
        image: 'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=1920',
        
        flyOverWaypoints: [
            { name: 'Aeolian Islands', coordinates: [38.6, 15.0], zoom: 10, description: 'Volcanic archipelago' },
            { name: 'Stromboli Island', coordinates: [38.79, 15.21], zoom: 12, description: 'Cone-shaped island' },
            { name: 'Sciara del Fuoco', coordinates: [38.79, 15.20], zoom: 13, description: 'Fire slide to sea' },
            { name: 'Active Vents', coordinates: [38.7890, 15.2132], zoom: 15, description: 'Continuous explosions' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #43 - KRAKATOA (ANAK KRAKATAU)
    // ═══════════════════════════════════════════════════════════
    {
        id: 'krakatoa',
        name: 'Krakatoa',
        nativeName: 'Krakatau / Anak Krakatau',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        region: 'Sunda Strait',
        
        elevation: 813,
        prominence: 813,
        coordinates: [-6.1021, 105.4230],
        defaultZoom: 12,
        
        volcanoType: 'Caldera',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Indo-Australian Plate', 'Eurasian Plate'],
            volcanicBelt: 'Sunda Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2023,
            name: 'Strombolian activity',
            vei: 2,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2023, name: 'Eruptions continue', vei: 2 },
            { year: 2018, name: 'Flank collapse and tsunami', vei: 3, deaths: 437 },
            { year: 1927, name: 'Anak Krakatau emerges', vei: 2 },
            { year: 1883, name: 'Cataclysmic eruption', vei: 6, deaths: 36000 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '3km (1883 caldera)',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Bandar Lampung', coordinates: [-5.4294, 105.2620], distance: '80km', population: 1000000 },
            { name: 'Serang', coordinates: [-6.1178, 106.1542], distance: '70km', population: 670000 },
            { name: 'Jakarta', coordinates: [-6.2088, 106.8456], distance: '150km', population: 11000000 }
        ],
        
        hazards: [
            { type: 'Tsunami', risk: 'Extreme', affectedArea: 'Java and Sumatra coasts' },
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Flank collapse', risk: 'Very High' },
            { type: 'Ash fall', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Research', value: 'Most studied volcanic island growth' },
            { label: 'Tourism', value: 'Day trips from Java coast' },
            { label: 'Historical', value: 'Site of famous 1883 eruption' }
        ],
        
        environmentalImpact: [
            { label: '1883 eruption', value: 'Heard 4,800km away, ash circled globe, cooled planet' },
            { label: '2018 tsunami', value: 'Flank collapse triggered deadly tsunami' },
            { label: 'Island growth', value: 'Anak Krakatau grows ~5m per year' }
        ],
        
        famousEvents: [
            { event: '1883 cataclysm', year: 1883, description: 'One of deadliest and loudest eruptions ever - VEI 6' },
            { event: 'Birth of Anak Krakatau', year: 1927, description: 'New volcano "Child of Krakatau" emerged from caldera' },
            { event: '2018 tsunami', year: 2018, description: 'Flank collapse caused tsunami killing 437 people' },
            { event: 'Loudest sound', year: 1883, description: 'Explosion heard 4,800 km away in Australia' }
        ],
        
        funFacts: [
            '1883 eruption was heard 4,800 km away - loudest sound in recorded history',
            'Caused global temperatures to drop 1.2°C',
            'Created vivid red sunsets worldwide for months',
            'Anak Krakatau ("Child of Krakatoa") emerged in 1927',
            'Original Krakatoa was destroyed in 1883 eruption',
            '2018 collapse reduced height by 2/3 overnight',
            'The 1883 tsunamis were up to 30 meters high',
            'Inspired the movie "Krakatoa, East of Java" (which is wrong - it\'s west of Java)'
        ],
        
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1920',
        
        flyOverWaypoints: [
            { name: 'Sunda Strait', coordinates: [-6.0, 105.5], zoom: 10, description: 'Between Java and Sumatra' },
            { name: 'Krakatau Islands', coordinates: [-6.1, 105.42], zoom: 12, description: 'Volcanic archipelago' },
            { name: 'Anak Krakatau', coordinates: [-6.1021, 105.4230], zoom: 13, description: 'Growing volcano' },
            { name: '1883 Caldera', coordinates: [-6.10, 105.42], zoom: 12, description: 'Remnants of destruction' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #44 - TAAL VOLCANO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'taal-volcano',
        name: 'Taal Volcano',
        nativeName: 'Bulkang Taal',
        countries: [
            { name: 'Philippines', code: 'PH' }
        ],
        continent: 'Asia',
        region: 'Batangas Province (Luzon)',
        
        elevation: 311,
        prominence: 311,
        coordinates: [14.0113, 120.9980],
        defaultZoom: 12,
        
        volcanoType: 'Caldera',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Philippine Sea Plate', 'Eurasian Plate'],
            volcanicBelt: 'Luzon Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2022,
            name: 'Phreatomagmatic',
            vei: 2,
            type: 'Phreatomagmatic'
        },
        
        eruptionHistory: [
            { year: 2022, name: 'Short eruption', vei: 2 },
            { year: 2020, name: 'Major eruption', vei: 4 },
            { year: 1977, name: 'Phreatic eruption', vei: 2 },
            { year: 1965, name: 'Explosive eruption', vei: 4, deaths: 200 },
            { year: 1911, name: 'Violent eruption', vei: 4, deaths: 1335 }
        ],
        
        lavaType: 'Basaltic to Andesitic',
        
        crater: {
            diameter: '2km (Main Crater Lake)',
            depth: '75m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Tagaytay', coordinates: [14.1153, 120.9621], distance: '15km', population: 70000 },
            { name: 'Batangas City', coordinates: [13.7565, 121.0583], distance: '40km', population: 350000 },
            { name: 'Manila', coordinates: [14.5995, 120.9842], distance: '65km', population: 14000000 }
        ],
        
        hazards: [
            { type: 'Base surge', risk: 'Extreme', affectedArea: 'Lake shore communities' },
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Volcanic tsunami', risk: 'Very High', affectedArea: 'Taal Lake' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Manila metropolitan area' },
            { type: 'Volcanic earthquakes', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Major attraction - volcano within a lake within a volcano' },
            { label: 'Fishing', value: 'Taal Lake fishing industry' },
            { label: 'Agriculture', value: 'Pineapple and coffee farming' }
        ],
        
        environmentalImpact: [
            { label: '2020 eruption', value: 'Massive ash fall reached Manila, 376,000 evacuated' },
            { label: 'Lake ecosystem', value: 'Unique fish species including freshwater sardine' },
            { label: 'Danger zone', value: 'Entire Volcano Island is permanent danger zone' }
        ],
        
        famousEvents: [
            { event: '1911 eruption', year: 1911, description: 'Killed 1,335 people in minutes with base surges' },
            { event: '2020 eruption', year: 2020, description: 'Lightning-filled eruption, 376,000 evacuated' },
            { event: 'Permanent danger zone', year: 2020, description: 'Volcano Island declared off-limits after eruption' }
        ],
        
        funFacts: [
            'It\'s a volcano island in a lake on an island in a lake on an island',
            'One of the smallest but deadliest volcanoes',
            'Only 65 km from Manila - 10 million people nearby',
            'Has a tiny lake (Vulcan Point) inside its crater',
            'Taal Lake was once connected to the sea - has unique fish',
            '2020 eruption produced spectacular volcanic lightning',
            'People used to live on Volcano Island (now evacuated)',
            'Has had 33 recorded historical eruptions'
        ],
        
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920',
        
        flyOverWaypoints: [
            { name: 'Tagaytay Ridge', coordinates: [14.12, 120.96], zoom: 11, description: 'Viewpoint' },
            { name: 'Taal Lake', coordinates: [14.0, 121.0], zoom: 12, description: 'Lake caldera' },
            { name: 'Volcano Island', coordinates: [14.01, 121.0], zoom: 13, description: 'Island volcano' },
            { name: 'Main Crater', coordinates: [14.0113, 120.9980], zoom: 14, description: 'Active crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #45 - MOUNT UNZEN
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-unzen',
        name: 'Mount Unzen',
        nativeName: '雲仙岳 (Unzendake)',
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        region: 'Kyushu (Nagasaki)',
        
        elevation: 1500,
        prominence: 1483,
        coordinates: [32.7567, 130.2986],
        defaultZoom: 12,
        
        volcanoType: 'Complex Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Philippine Sea Plate', 'Eurasian Plate'],
            volcanicBelt: 'Kyushu Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1995,
            name: 'End of 1990-95 eruption',
            vei: 3,
            type: 'Dome building'
        },
        
        eruptionHistory: [
            { year: 1995, name: 'Dome building ended', vei: 3 },
            { year: 1991, name: 'Deadly pyroclastic flows', vei: 3, deaths: 43 },
            { year: 1792, name: 'Flank collapse and tsunami', vei: 4, deaths: 15000 }
        ],
        
        lavaType: 'Dacitic',
        
        crater: {
            diameter: 'Heisei-shinzan dome (400m)',
            depth: 'N/A (dome volcano)',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Shimabara', coordinates: [32.7869, 130.3715], distance: '8km', population: 45000 },
            { name: 'Nagasaki', coordinates: [32.7503, 129.8777], distance: '40km', population: 410000 },
            { name: 'Kumamoto', coordinates: [32.8032, 130.7079], distance: '60km', population: 740000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Dome collapse', risk: 'High' },
            { type: 'Lahars', risk: 'High' },
            { type: 'Flank collapse', risk: 'Moderate' },
            { type: 'Tsunami', risk: 'Moderate', affectedArea: 'If flank collapses into Ariake Sea' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Unzen Amakusa National Park - hot springs' },
            { label: 'Onsen', value: 'Famous hot spring resort town' },
            { label: 'Research', value: 'Important for pyroclastic flow studies' }
        ],
        
        environmentalImpact: [
            { label: '1792 disaster', value: 'Worst volcanic disaster in Japanese history - 15,000 died' },
            { label: '1991 flows', value: 'Pyroclastic flows killed scientists and journalists' },
            { label: 'Dome growth', value: 'Heisei-shinzan dome grew 1990-1995' }
        ],
        
        famousEvents: [
            { event: '1792 Shimabara disaster', year: 1792, description: 'Flank collapse caused tsunami - Japan\'s worst volcanic disaster' },
            { event: 'Krafft deaths', year: 1991, description: 'Famous volcanologists Maurice and Katia Krafft killed by pyroclastic flow' },
            { event: 'Harry Glicken death', year: 1991, description: 'US volcanologist killed - had survived Mt. St. Helens' }
        ],
        
        funFacts: [
            'Site of Japan\'s worst volcanic disaster (1792)',
            'The 1792 tsunami killed about 15,000 people',
            'Famous volcanologists Maurice and Katia Krafft died here in 1991',
            'Has Japan\'s newest mountain - Heisei-shinzan dome',
            'Popular onsen (hot spring) resort area',
            'The 1991 pyroclastic flows were televised live',
            'Name means "cloud of boiling water"',
            'Video footage of the deadly 1991 flows is used in volcanology education worldwide'
        ],
        
        image: 'https://images.unsplash.com/photo-1529788295308-1eace6f67388?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529788295308-1eace6f67388?w=1920',
        
        flyOverWaypoints: [
            { name: 'Shimabara Peninsula', coordinates: [32.8, 130.3], zoom: 10, description: 'Volcanic peninsula' },
            { name: 'Shimabara City', coordinates: [32.79, 130.37], zoom: 11, description: 'City below volcano' },
            { name: 'Fugendake', coordinates: [32.76, 130.29], zoom: 12, description: 'Main peak' },
            { name: 'Heisei-shinzan', coordinates: [32.7567, 130.2986], zoom: 14, description: 'New dome' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #46 - WHITE ISLAND (WHAKAARI)
    // ═══════════════════════════════════════════════════════════
    {
        id: 'white-island',
        name: 'White Island',
        nativeName: 'Whakaari',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        region: 'Bay of Plenty',
        
        elevation: 321,
        prominence: 321,
        coordinates: [-37.5200, 177.1800],
        defaultZoom: 13,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Pacific Plate', 'Indo-Australian Plate'],
            volcanicBelt: 'Taupo Volcanic Zone',
            subduction: true
        },
        
        lastEruption: {
            year: 2019,
            name: 'Fatal phreatic eruption',
            vei: 2,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 2019, name: 'Deadly phreatic eruption', vei: 2, deaths: 22 },
            { year: 2016, name: 'Night eruption', vei: 2 },
            { year: 2012, name: 'Ash eruption', vei: 1 },
            { year: 2000, name: 'Eruption', vei: 2 },
            { year: 1914, name: 'Lahar killed miners', vei: 2, deaths: 12 }
        ],
        
        lavaType: 'Andesitic to Dacitic',
        
        crater: {
            diameter: '800m',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Whakatane', coordinates: [-37.9579, 176.9871], distance: '48km', population: 20000 },
            { name: 'Tauranga', coordinates: [-37.6878, 176.1651], distance: '100km', population: 155000 },
            { name: 'Rotorua', coordinates: [-38.1368, 176.2497], distance: '115km', population: 75000 }
        ],
        
        hazards: [
            { type: 'Phreatic explosions', risk: 'Extreme', affectedArea: 'Entire island' },
            { type: 'Volcanic gases', risk: 'Extreme', affectedArea: 'Lethal H2S and SO2' },
            { type: 'Lahars', risk: 'High' },
            { type: 'Pyroclastic surges', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Was popular tourist destination until 2019' },
            { label: 'Mining', value: 'Historical sulfur mining (abandoned)' },
            { label: 'Research', value: 'Accessible active volcano for study' }
        ],
        
        environmentalImpact: [
            { label: '2019 tragedy', value: '22 tourists and guides killed during eruption' },
            { label: 'Acid lake', value: 'Crater contains highly acidic lake' },
            { label: 'Ecosystem', value: 'Only extremophile bacteria can survive' }
        ],
        
        famousEvents: [
            { event: '2019 tragedy', year: 2019, description: '22 people killed when volcano erupted during tourist visit' },
            { event: 'Mining disaster', year: 1914, description: 'Lahar destroyed sulfur mine, killed 12 workers' },
            { event: 'Tourism controversy', year: 2020, description: 'Debate over allowing tourists on active volcanoes' }
        ],
        
        funFacts: [
            'New Zealand\'s most active volcano',
            'Only marine volcano in New Zealand',
            '70% of the volcano is under the sea',
            'Was a popular tourist destination until the 2019 tragedy',
            'Has extremely acidic crater lake',
            'Sulfur was mined here until 1914 disaster',
            'Continuously vents volcanic gases',
            'Named by Captain Cook in 1769 due to steam clouds'
        ],
        
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        
        flyOverWaypoints: [
            { name: 'Bay of Plenty', coordinates: [-37.7, 177.0], zoom: 10, description: 'Approaching from mainland' },
            { name: 'Island Approach', coordinates: [-37.55, 177.17], zoom: 12, description: 'Volcanic island' },
            { name: 'Crater', coordinates: [-37.5200, 177.1800], zoom: 14, description: 'Active crater' },
            { name: 'Fumaroles', coordinates: [-37.52, 177.18], zoom: 15, description: 'Steam vents' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #47 - VULCANO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'vulcano',
        name: 'Vulcano',
        nativeName: 'Vulcano',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        region: 'Aeolian Islands (Sicily)',
        
        elevation: 500,
        prominence: 500,
        coordinates: [38.4040, 14.9620],
        defaultZoom: 13,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['African Plate', 'Eurasian Plate'],
            volcanicBelt: 'Aeolian Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1890,
            name: 'Vulcanian eruption',
            vei: 3,
            type: 'Vulcanian'
        },
        
        eruptionHistory: [
            { year: 1890, name: 'Major Vulcanian eruption', vei: 3 },
            { year: 1888, name: 'Start of eruption sequence', vei: 2 },
            { year: 1786, name: 'Eruption', vei: 2 },
            { year: 1775, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Trachytic to Rhyolitic',
        
        crater: {
            diameter: '500m (Gran Cratere)',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Vulcano Porto', coordinates: [38.4167, 14.9667], distance: '2km', population: 700 },
            { name: 'Lipari', coordinates: [38.4672, 14.9539], distance: '10km', population: 12000 },
            { name: 'Milazzo', coordinates: [38.2244, 15.2414], distance: '35km', population: 30000 }
        ],
        
        hazards: [
            { type: 'Phreatic explosions', risk: 'High' },
            { type: 'Volcanic gases', risk: 'Very High', affectedArea: 'Crater and port area' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Lahars', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Popular day trip - mud baths and crater hike' },
            { label: 'Sulfur', value: 'Historical sulfur mining' },
            { label: 'Etymology', value: 'Word "volcano" derives from this island' }
        ],
        
        environmentalImpact: [
            { label: 'Fumaroles', value: 'Active fumaroles in crater and near beach' },
            { label: '2021 crisis', value: 'Increased gas emissions caused evacuations' },
            { label: 'Mud baths', value: 'Volcanic mud baths are tourist attraction' }
        ],
        
        famousEvents: [
            { event: 'Named after god', year: -500, description: 'Ancient Romans believed Vulcan\'s forge was beneath island' },
            { event: 'Word "volcano"', year: 1600, description: 'English word "volcano" derived from island name' },
            { event: '2021 gas crisis', year: 2021, description: 'Elevated volcanic gases led to night-time evacuations' }
        ],
        
        funFacts: [
            'The English word "volcano" comes from this island',
            'Named after Vulcan, Roman god of fire',
            'Gave name to "Vulcanian" eruption type',
            'Has therapeutic volcanic mud baths',
            'Romans believed it was Vulcan\'s forge',
            'You can hike to the crater rim',
            'The smelly sulfur fumaroles are a tourist attraction',
            'Had a volcanic gas crisis in 2021 requiring evacuations'
        ],
        
        image: 'https://images.unsplash.com/photo-1568054502232-51e039a47d85?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1568054502232-51e039a47d85?w=1920',
        
        flyOverWaypoints: [
            { name: 'Aeolian Islands', coordinates: [38.45, 14.95], zoom: 11, description: 'Volcanic archipelago' },
            { name: 'Vulcano Porto', coordinates: [38.42, 14.97], zoom: 12, description: 'Ferry port' },
            { name: 'Fossa Cone', coordinates: [38.40, 14.96], zoom: 13, description: 'Main cone' },
            { name: 'Gran Cratere', coordinates: [38.4040, 14.9620], zoom: 14, description: 'Summit crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #48 - SOUFRIÈRE HILLS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'soufriere-hills',
        name: 'Soufrière Hills',
        nativeName: 'Soufrière Hills',
        countries: [
            { name: 'United Kingdom (Montserrat)', code: 'GB' }
        ],
        continent: 'North America',
        region: 'Caribbean (Montserrat)',
        
        elevation: 1050,
        prominence: 1050,
        coordinates: [16.7167, -62.1833],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Caribbean Plate', 'North American Plate'],
            volcanicBelt: 'Lesser Antilles Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2013,
            name: 'Dome collapse',
            vei: 2,
            type: 'Dome collapse'
        },
        
        eruptionHistory: [
            { year: 2013, name: 'Partial dome collapse', vei: 2 },
            { year: 2010, name: 'Dome collapse', vei: 3 },
            { year: 2003, name: 'Major dome collapse', vei: 3 },
            { year: 1997, name: 'Deadly pyroclastic flows', vei: 3, deaths: 19 },
            { year: 1995, name: 'Eruption began', vei: 3 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '1km (dome complex)',
            depth: 'N/A (dome growth)',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Plymouth (abandoned)', coordinates: [16.7053, -62.2131], distance: '4km', population: 0 },
            { name: 'Brades', coordinates: [16.7917, -62.2111], distance: '10km', population: 1000 },
            { name: 'Little Bay', coordinates: [16.8167, -62.2167], distance: '12km', population: 500 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Extreme', affectedArea: 'Southern Montserrat (exclusion zone)' },
            { type: 'Ash fall', risk: 'Very High' },
            { type: 'Dome collapse', risk: 'Very High' },
            { type: 'Lahars', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Disaster tourism', value: 'Tours to see buried Plymouth' },
            { label: 'Research', value: 'MVO monitoring station' },
            { label: 'Lessons', value: 'Important case study for volcanic risk' }
        ],
        
        environmentalImpact: [
            { label: 'Plymouth buried', value: 'Capital city buried under pyroclastic deposits' },
            { label: 'Population', value: 'Island population dropped from 11,000 to 5,000' },
            { label: 'Exclusion zone', value: 'Southern 2/3 of island uninhabitable' }
        ],
        
        famousEvents: [
            { event: '1997 tragedy', year: 1997, description: '19 killed entering exclusion zone' },
            { event: 'Plymouth buried', year: 1997, description: 'Capital city buried - now "Pompeii of the Caribbean"' },
            { event: 'Evacuation', year: 1995, description: 'Entire southern Montserrat evacuated' }
        ],
        
        funFacts: [
            'Destroyed the capital city Plymouth - now buried like Pompeii',
            '2/3 of the island is an exclusion zone',
            'Population dropped from 11,000 to 5,000 due to eruption',
            'Has been erupting since 1995',
            'Plymouth is called "Modern-day Pompeii"',
            'The old airport and port are buried',
            'You can visit the exclusion zone edge',
            'The volcano is still growing a lava dome'
        ],
        
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920',
        
        flyOverWaypoints: [
            { name: 'Montserrat', coordinates: [16.75, -62.2], zoom: 11, description: 'Caribbean island' },
            { name: 'Plymouth Ruins', coordinates: [16.71, -62.21], zoom: 12, description: 'Buried capital' },
            { name: 'Lava Dome', coordinates: [16.72, -62.18], zoom: 13, description: 'Growing dome' },
            { name: 'Summit', coordinates: [16.7167, -62.1833], zoom: 14, description: 'Active summit' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #49 - MOUNT YASUR
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-yasur',
        name: 'Mount Yasur',
        nativeName: 'Yasur',
        countries: [
            { name: 'Vanuatu', code: 'VU' }
        ],
        continent: 'Oceania',
        region: 'Tanna Island',
        
        elevation: 361,
        prominence: 361,
        coordinates: [-19.5320, 169.4470],
        defaultZoom: 13,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Australian Plate', 'Pacific Plate'],
            volcanicBelt: 'Vanuatu Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous activity',
            vei: 2,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Continuous Strombolian eruptions', vei: 2 },
            { year: 2016, name: 'Increased activity', vei: 2 },
            { year: 1994, name: 'Deaths from bombs', vei: 2, deaths: 2 }
        ],
        
        lavaType: 'Basaltic',
        
        crater: {
            diameter: '400m',
            depth: '150m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Lenakel', coordinates: [-19.5333, 169.2667], distance: '20km', population: 2000 },
            { name: 'Port Vila', coordinates: [-17.7333, 168.3167], distance: '250km', population: 50000 },
            { name: 'Isangel', coordinates: [-19.5500, 169.2833], distance: '18km', population: 1500 }
        ],
        
        hazards: [
            { type: 'Volcanic bombs', risk: 'Very High', affectedArea: 'Crater rim' },
            { type: 'Ash fall', risk: 'High' },
            { type: 'Volcanic gases', risk: 'High' },
            { type: 'Ground collapse', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'One of most accessible active volcanoes - night tours' },
            { label: 'Cultural', value: 'Sacred to local Tannese people' },
            { label: 'Cargo cult', value: 'Associated with John Frum cargo cult' }
        ],
        
        environmentalImpact: [
            { label: 'Ash plain', value: 'Eastern side is barren ash plain' },
            { label: 'Vegetation', value: 'Constant ash limits forest growth' },
            { label: 'Spiritual', value: 'Volcano is central to local beliefs' }
        ],
        
        famousEvents: [
            { event: 'Continuous eruption', year: 1774, description: 'Captain Cook saw eruption - has been active since' },
            { event: 'John Frum cult', year: 1940, description: 'Cargo cult believes volcano is sacred' },
            { event: 'Tourist deaths', year: 1994, description: '2 tourists killed by volcanic bombs' }
        ],
        
        funFacts: [
            'Has been continuously erupting for at least 800 years',
            'Called "Lighthouse of the Pacific" by sailors',
            'One of the most accessible active volcanoes in the world',
            'Erupts explosively every few minutes',
            'Captain Cook saw it erupting in 1774',
            'Sacred site for John Frum cargo cult',
            'Tourists can walk to the crater rim',
            'Night viewing of eruptions is spectacular'
        ],
        
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920',
        
        flyOverWaypoints: [
            { name: 'Tanna Island', coordinates: [-19.5, 169.35], zoom: 10, description: 'Remote Vanuatu island' },
            { name: 'Ash Plain', coordinates: [-19.53, 169.43], zoom: 12, description: 'Volcanic desert' },
            { name: 'Crater', coordinates: [-19.5320, 169.4470], zoom: 14, description: 'Constant eruptions' },
            { name: 'Vents', coordinates: [-19.532, 169.447], zoom: 15, description: 'Explosive vents' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #50 - ERTA ALE
    // ═══════════════════════════════════════════════════════════
    {
        id: 'erta-ale',
        name: 'Erta Ale',
        nativeName: 'Erta Ale (Smoking Mountain)',
        countries: [
            { name: 'Ethiopia', code: 'ET' }
        ],
        continent: 'Africa',
        region: 'Afar Depression',
        
        elevation: 613,
        prominence: 613,
        coordinates: [13.6000, 40.6700],
        defaultZoom: 12,
        
        volcanoType: 'Shield Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Divergent boundary (Triple junction)',
            plates: ['African Plate', 'Arabian Plate', 'Somali Plate'],
            volcanicBelt: 'East African Rift',
            subduction: false
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous lava lake',
            vei: 0,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Continuous lava lake activity', vei: 0 },
            { year: 2017, name: 'Overflow event', vei: 0 },
            { year: 2005, name: 'Tourist deaths', vei: 0, deaths: 5 },
            { year: 1967, name: 'Lava lake confirmed', vei: 0 }
        ],
        
        lavaType: 'Basaltic (very fluid)',
        
        crater: {
            diameter: '1km summit caldera',
            depth: '80m',
            lavaLake: true
        },
        
        nearbyCities: [
            { name: 'Mekele', coordinates: [13.4967, 39.4753], distance: '140km', population: 350000 },
            { name: 'Semera', coordinates: [11.7833, 41.0167], distance: '200km', population: 10000 },
            { name: 'Djibouti City', coordinates: [11.5883, 43.1450], distance: '350km', population: 600000 }
        ],
        
        hazards: [
            { type: 'Lava lake overflow', risk: 'High', affectedArea: 'Caldera floor' },
            { type: 'Volcanic gases', risk: 'Extreme', affectedArea: 'Summit area' },
            { type: 'Ground collapse', risk: 'High' },
            { type: 'Fissure eruptions', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Adventure tourism destination' },
            { label: 'Research', value: 'Study of rift volcanism' },
            { label: 'Mining', value: 'Salt mining in Afar Depression' }
        ],
        
        environmentalImpact: [
            { label: 'Lava lake', value: 'One of only a few persistent lava lakes on Earth' },
            { label: 'Extreme conditions', value: 'One of hottest, harshest places on Earth' },
            { label: 'Rift valley', value: 'Part of area where continent is splitting' }
        ],
        
        famousEvents: [
            { event: 'Lava lake discovered', year: 1906, description: 'First documented by Nesbitt expedition' },
            { event: 'Tourist attack', year: 2012, description: '5 tourists killed by gunmen near volcano' },
            { event: 'Lava overflow', year: 2017, description: 'Lava lake overflowed crater rim' }
        ],
        
        funFacts: [
            'Has one of the world\'s few persistent lava lakes',
            'The lava lake has been active since at least 1906',
            'Located in the hottest place on Earth (Afar Depression)',
            'Name means "Smoking Mountain" in the Afar language',
            'Is part of the triple junction where Africa is splitting apart',
            'One of the most remote volcanoes to visit',
            'Requires armed guards and camel trek to reach',
            'The Afar Depression is 100m below sea level'
        ],
        
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920',
        
        flyOverWaypoints: [
            { name: 'Afar Depression', coordinates: [13.5, 40.5], zoom: 9, description: 'Hottest place on Earth' },
            { name: 'Shield Volcano', coordinates: [13.58, 40.66], zoom: 11, description: 'Low profile shield' },
            { name: 'Summit Caldera', coordinates: [13.6, 40.67], zoom: 13, description: 'Elliptical caldera' },
            { name: 'Lava Lake', coordinates: [13.6000, 40.6700], zoom: 15, description: 'Persistent lava lake' }
        ]
    }
];

// Log successful load
console.log('🌋 Volcanoes Data 5 loaded: 10 volcanoes (Sakurajima to Erta Ale)');
