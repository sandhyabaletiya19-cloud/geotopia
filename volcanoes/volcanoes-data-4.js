/* ═══════════════════════════════════════════════════════════
   🌋 VOLCANOES EXPLORER - Data File 4
   Volcanoes 31-40 (Highest Elevation First)
   ═══════════════════════════════════════════════════════════ */

window.volcanoesData4 = [
    // ═══════════════════════════════════════════════════════════
    // #31 - PITON DE LA FOURNAISE
    // ═══════════════════════════════════════════════════════════
    {
        id: 'piton-de-la-fournaise',
        name: 'Piton de la Fournaise',
        nativeName: 'Piton de la Fournaise (Peak of the Furnace)',
        countries: [
            { name: 'France', code: 'FR' }
        ],
        continent: 'Africa',
        region: 'Réunion Island',
        
        elevation: 2632,
        prominence: 1232,
        coordinates: [-21.2442, 55.7083],
        defaultZoom: 11,
        
        volcanoType: 'Shield Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Hotspot',
            plates: ['African Plate'],
            volcanicBelt: 'Réunion Hotspot',
            subduction: false
        },
        
        lastEruption: {
            year: 2024,
            name: 'Multiple eruptions',
            vei: 1,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Ongoing activity', vei: 1 },
            { year: 2023, name: 'Multiple eruptions', vei: 1 },
            { year: 2021, name: 'Eruptions', vei: 1 },
            { year: 2007, name: 'Major eruption and caldera collapse', vei: 2 },
            { year: 1998, name: 'Flank eruption', vei: 1 }
        ],
        
        lavaType: 'Basaltic (low viscosity)',
        
        crater: {
            diameter: '8km (Enclos Fouqué caldera)',
            depth: '350m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Saint-Denis', coordinates: [-20.8823, 55.4504], distance: '50km', population: 150000 },
            { name: 'Saint-Pierre', coordinates: [-21.3393, 55.4781], distance: '30km', population: 85000 },
            { name: 'Saint-Philippe', coordinates: [-21.3594, 55.7631], distance: '10km', population: 5000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Very High', affectedArea: 'Eastern flanks and coastal road' },
            { type: 'Volcanic gases', risk: 'High', affectedArea: 'Laze when lava enters ocean' },
            { type: 'Ground collapse', risk: 'Moderate' },
            { type: 'Forest fires', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'UNESCO World Heritage Site - major attraction' },
            { label: 'Research', value: 'Piton de la Fournaise Volcanological Observatory' },
            { label: 'Cultural', value: 'Iconic symbol of Réunion Island' }
        ],
        
        environmentalImpact: [
            { label: 'Land creation', value: 'Regular lava flows add new land to island' },
            { label: 'Road destruction', value: 'Coastal road (RN2) buried by lava multiple times' },
            { label: 'Ecosystem', value: 'Unique pioneer vegetation colonizes new lava' }
        ],
        
        famousEvents: [
            { event: 'Caldera collapse', year: 2007, description: 'Dolomieu crater floor collapsed 350m during major eruption' },
            { event: 'Road buried', year: 2007, description: 'Lava flow crossed and buried coastal road' },
            { event: 'UNESCO designation', year: 2010, description: 'Pitons, cirques and remparts became World Heritage' }
        ],
        
        funFacts: [
            'One of the most active volcanoes in the world - erupts almost every year',
            'Very safe to observe due to effusive eruption style',
            'Lava flows have added land to Réunion multiple times',
            'Located on a French overseas territory in the Indian Ocean',
            'Has erupted over 150 times since records began in 1640',
            'Tourists can often watch eruptions from safe viewing points',
            'The 2007 collapse created a crater 1km wide and 350m deep'
        ],
        
        image: 'https://images.unsplash.com/photo-1608158432223-2c212954789a?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1608158432223-2c212954789a?w=1920',
        
        flyOverWaypoints: [
            { name: 'Réunion Island', coordinates: [-21.1, 55.5], zoom: 9, description: 'French island in Indian Ocean' },
            { name: 'Enclos Fouqué', coordinates: [-21.22, 55.71], zoom: 11, description: 'Main caldera' },
            { name: 'Dolomieu Crater', coordinates: [-21.24, 55.71], zoom: 13, description: 'Active summit crater' },
            { name: 'Lava Fields', coordinates: [-21.2442, 55.7083], zoom: 14, description: 'Recent lava flows' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #32 - MOUNT ST. HELENS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-st-helens',
        name: 'Mount St. Helens',
        nativeName: 'Loowit (Lawetlat\'la)',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        region: 'Washington State',
        
        elevation: 2549,
        prominence: 1424,
        coordinates: [46.1912, -122.1944],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Juan de Fuca Plate', 'North American Plate'],
            volcanicBelt: 'Cascade Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2008,
            name: 'Dome building ended',
            vei: 2,
            type: 'Dome building'
        },
        
        eruptionHistory: [
            { year: 2008, name: 'Dome growth ceased', vei: 2 },
            { year: 2004, name: 'Dome building resumed', vei: 2 },
            { year: 1980, name: 'Catastrophic eruption', vei: 5, deaths: 57 },
            { year: 1857, name: 'Historical eruption', vei: 2 },
            { year: 1800, name: 'Eruption', vei: 3 }
        ],
        
        lavaType: 'Dacitic',
        
        crater: {
            diameter: '2km x 3.5km (1980 horseshoe crater)',
            depth: '700m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Portland', coordinates: [45.5051, -122.6750], distance: '80km', population: 650000 },
            { name: 'Seattle', coordinates: [47.6062, -122.3321], distance: '154km', population: 750000 },
            { name: 'Vancouver (WA)', coordinates: [45.6387, -122.6615], distance: '72km', population: 190000 },
            { name: 'Longview', coordinates: [46.1382, -122.9382], distance: '50km', population: 38000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'Toutle River valley' },
            { type: 'Ash fall', risk: 'High', affectedArea: 'Pacific Northwest and beyond' },
            { type: 'Lateral blast', risk: 'Moderate' },
            { type: 'Debris avalanche', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Mount St. Helens National Volcanic Monument' },
            { label: 'Research', value: 'Most studied volcano in the world' },
            { label: 'Education', value: 'Johnston Ridge Observatory' },
            { label: 'Forestry', value: 'Weyerhaeuser reforestation' }
        ],
        
        environmentalImpact: [
            { label: '1980 devastation', value: '600 sq km of forest destroyed, 57 killed' },
            { label: 'Spirit Lake', value: 'Lake raised 60m and filled with debris' },
            { label: 'Recovery', value: 'Remarkable ecosystem recovery being studied' }
        ],
        
        famousEvents: [
            { event: 'May 18, 1980 eruption', year: 1980, description: 'Largest landslide in recorded history, 57 deaths' },
            { event: 'David Johnston death', year: 1980, description: 'USGS volcanologist killed while monitoring - his words: "Vancouver! Vancouver! This is it!"' },
            { event: 'Harry Truman', year: 1980, description: 'Innkeeper refused to evacuate, killed in eruption' },
            { event: 'Dome growth', year: 2004, description: 'New lava dome grew inside crater' }
        ],
        
        funFacts: [
            'Lost 400m (1,300 ft) of height in the 1980 eruption',
            'The 1980 landslide was the largest in recorded history',
            'Ash fell in 11 US states and 2 Canadian provinces',
            'Named after British diplomat Baron St. Helens in 1792',
            'Native American name "Loowit" means "smoking mountain"',
            'The 1980 blast was heard 300 miles away',
            'Ecosystem recovery has been faster than expected',
            'A new lava dome has been growing inside the crater since 2004'
        ],
        
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920',
        
        flyOverWaypoints: [
            { name: 'Portland View', coordinates: [45.8, -122.5], zoom: 9, description: 'View from Oregon' },
            { name: 'Spirit Lake', coordinates: [46.27, -122.15], zoom: 11, description: 'Debris-filled lake' },
            { name: 'Blast Zone', coordinates: [46.22, -122.18], zoom: 12, description: '1980 devastation area' },
            { name: 'Crater', coordinates: [46.1912, -122.1944], zoom: 13, description: 'Horseshoe crater and dome' },
            { name: 'Johnston Ridge', coordinates: [46.2756, -122.2158], zoom: 11, description: 'Observatory viewpoint' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #33 - PACAYA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'pacaya',
        name: 'Pacaya',
        nativeName: 'Volcán de Pacaya',
        countries: [
            { name: 'Guatemala', code: 'GT' }
        ],
        continent: 'North America',
        region: 'Escuintla Department',
        
        elevation: 2552,
        prominence: 952,
        coordinates: [14.3810, -90.6010],
        defaultZoom: 12,
        
        volcanoType: 'Complex Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Cocos Plate', 'Caribbean Plate'],
            volcanicBelt: 'Central American Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2024,
            name: 'Continuous activity',
            vei: 2,
            type: 'Strombolian'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Strombolian activity', vei: 2 },
            { year: 2021, name: 'Major explosions', vei: 2 },
            { year: 2010, name: 'Large eruption', vei: 3 },
            { year: 2000, name: 'Increased activity', vei: 2 },
            { year: 1965, name: 'Reactivation after 75 years', vei: 2 }
        ],
        
        lavaType: 'Basaltic',
        
        crater: {
            diameter: '300m (MacKenney Cone)',
            depth: '100m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Guatemala City', coordinates: [14.6349, -90.5069], distance: '30km', population: 3000000 },
            { name: 'Antigua Guatemala', coordinates: [14.5586, -90.7295], distance: '25km', population: 45000 },
            { name: 'Escuintla', coordinates: [14.3050, -90.7850], distance: '20km', population: 160000 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'High' },
            { type: 'Volcanic bombs', risk: 'Very High', affectedArea: 'Tourist areas near crater' },
            { type: 'Ash fall', risk: 'High', affectedArea: 'Guatemala City' },
            { type: 'Pyroclastic flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Most visited volcano in Guatemala - hikers roast marshmallows on lava' },
            { label: 'National Park', value: 'Pacaya National Park' },
            { label: 'Agriculture', value: 'Coffee farms on lower slopes' }
        ],
        
        environmentalImpact: [
            { label: '2010 eruption', value: 'Ash forced closure of Guatemala City airport' },
            { label: 'Ecosystem', value: 'Pine and oak forests on older flows' },
            { label: 'Villages', value: 'Several communities live on active slopes' }
        ],
        
        famousEvents: [
            { event: '2010 major eruption', year: 2010, description: 'Eruption during Tropical Storm Agatha caused widespread damage' },
            { event: 'Reporter death', year: 2010, description: 'News reporter killed by volcanic bomb during eruption' },
            { event: 'Reactivation', year: 1965, description: 'Volcano reawakened after 75 years of quiet' }
        ],
        
        funFacts: [
            'One of the most accessible active volcanoes in the world',
            'Tourists can roast marshmallows over hot lava vents',
            'Has been in near-continuous eruption since 1965',
            'Just 30 minutes drive from Guatemala City',
            'Ash from 2010 eruption closed the international airport',
            'You can hike to within meters of flowing lava',
            'The MacKenney Cone is the active vent that formed after 1965',
            'Part of Pacaya National Park'
        ],
        
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920',
        
        flyOverWaypoints: [
            { name: 'Guatemala City', coordinates: [14.6, -90.55], zoom: 10, description: 'Capital city nearby' },
            { name: 'Antigua', coordinates: [14.56, -90.73], zoom: 11, description: 'Colonial heritage city' },
            { name: 'MacKenney Cone', coordinates: [14.38, -90.60], zoom: 13, description: 'Active vent' },
            { name: 'Lava Fields', coordinates: [14.3810, -90.6010], zoom: 14, description: 'Recent flows' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #34 - MOUNT TARANAKI
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-taranaki',
        name: 'Mount Taranaki',
        nativeName: 'Taranaki (Egmont)',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        region: 'North Island',
        
        elevation: 2518,
        prominence: 2308,
        coordinates: [-39.2967, 174.0639],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'dormant',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Pacific Plate', 'Indo-Australian Plate'],
            volcanicBelt: 'Taranaki Volcanic Lineament',
            subduction: true
        },
        
        lastEruption: {
            year: 1854,
            name: 'Minor eruption',
            vei: 2,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 1854, name: 'Last known eruption', vei: 2 },
            { year: 1755, name: 'Historical eruption', vei: 3 },
            { year: 1655, name: 'Major eruption', vei: 4 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '400m',
            depth: '100m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'New Plymouth', coordinates: [-39.0556, 174.0752], distance: '30km', population: 60000 },
            { name: 'Stratford', coordinates: [-39.3456, 174.2844], distance: '25km', population: 6000 },
            { name: 'Hawera', coordinates: [-39.5903, 174.2886], distance: '45km', population: 12000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Lahars', risk: 'Very High', affectedArea: 'River valleys' },
            { type: 'Ash fall', risk: 'High' },
            { type: 'Debris avalanche', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Egmont National Park - hiking and skiing' },
            { label: 'Film', value: 'Doubled as Mount Fuji in "The Last Samurai"' },
            { label: 'Agriculture', value: 'Dairy farming on volcanic soils' },
            { label: 'Cultural', value: 'Sacred to Māori iwi' }
        ],
        
        environmentalImpact: [
            { label: 'Ecosystem', value: 'Nearly circular forest boundary visible from space' },
            { label: 'Water', value: 'Important water catchment area' },
            { label: 'Climate', value: 'Creates its own weather patterns' }
        ],
        
        famousEvents: [
            { event: 'First European ascent', year: 1839, description: 'Ernst Dieffenbach and James Heberley reached summit' },
            { event: 'National Park', year: 1900, description: 'Second national park established in NZ' },
            { event: 'The Last Samurai', year: 2003, description: 'Used as Mount Fuji stand-in in Tom Cruise film' },
            { event: 'Legal personhood', year: 2017, description: 'Given legal status as an ancestor (like Te Awa Tupua)' }
        ],
        
        funFacts: [
            'One of the most symmetrical volcanic cones in the world',
            'Used as Mount Fuji in the film "The Last Samurai"',
            'Circular national park boundary visible from space',
            'Māori legend says it was banished from central North Island after a fight with other mountains',
            'Has a near-50% chance of erupting in next 50 years',
            'The forest circle is due to surrounding farmland',
            'Given legal personhood in 2017 settlement',
            'Also called Mount Egmont (dual names)'
        ],
        
        image: 'https://images.unsplash.com/photo-1508978033785-f813119cc449?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1508978033785-f813119cc449?w=1920',
        
        flyOverWaypoints: [
            { name: 'New Plymouth', coordinates: [-39.06, 174.08], zoom: 10, description: 'Coastal city' },
            { name: 'Forest Circle', coordinates: [-39.25, 174.06], zoom: 11, description: 'Perfect forest boundary' },
            { name: 'Summit Cone', coordinates: [-39.29, 174.06], zoom: 12, description: 'Symmetrical peak' },
            { name: 'Crater', coordinates: [-39.2967, 174.0639], zoom: 14, description: 'Summit crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #35 - MOUNT BROMO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-bromo',
        name: 'Mount Bromo',
        nativeName: 'Gunung Bromo',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        region: 'East Java',
        
        elevation: 2329,
        prominence: 329,
        coordinates: [-7.9425, 112.9530],
        defaultZoom: 12,
        
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
            name: 'Phreatic eruptions',
            vei: 2,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 2019, name: 'Ash eruptions', vei: 2 },
            { year: 2016, name: 'Phreatic activity', vei: 2 },
            { year: 2010, name: 'Explosive eruption', vei: 2 },
            { year: 2004, name: 'Eruption', vei: 2 },
            { year: 2000, name: 'Eruption', vei: 2 }
        ],
        
        lavaType: 'Andesitic',
        
        crater: {
            diameter: '800m',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Surabaya', coordinates: [-7.2575, 112.7521], distance: '100km', population: 3000000 },
            { name: 'Malang', coordinates: [-7.9786, 112.6317], distance: '50km', population: 900000 },
            { name: 'Probolinggo', coordinates: [-7.7543, 113.2159], distance: '40km', population: 220000 }
        ],
        
        hazards: [
            { type: 'Ash fall', risk: 'Very High' },
            { type: 'Volcanic bombs', risk: 'High', affectedArea: 'Crater rim' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Lahars', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Most visited volcano in Indonesia - sunrise tourism' },
            { label: 'Cultural', value: 'Yadnya Kasada festival - offerings to volcano' },
            { label: 'Photography', value: 'World-famous sunrise photography location' }
        ],
        
        environmentalImpact: [
            { label: 'Sand sea', value: 'Unique "Sea of Sand" (Segara Wedi) caldera floor' },
            { label: 'Ecosystem', value: 'Sparse vegetation due to volcanic activity' },
            { label: 'Tourism impact', value: 'Heavy foot traffic on crater' }
        ],
        
        famousEvents: [
            { event: 'Yadnya Kasada', year: 'Annual', description: 'Tenggerese Hindus throw offerings into crater' },
            { event: '2010 eruption', year: 2010, description: 'Eruption during tourist season caused evacuations' },
            { event: 'Tengger legend', year: 1500, description: 'Legend of Prince Joko Seger and Princess Roro Anteng' }
        ],
        
        funFacts: [
            'Named after Brahma, the Hindu god of creation',
            'Sits in the massive Tengger Caldera (10km wide)',
            'Famous for spectacular sunrises over the caldera',
            'Tenggerese people throw offerings into crater annually',
            'Part of Bromo Tengger Semeru National Park',
            'The "Sea of Sand" is actually volcanic ash',
            'You can walk right up to the smoking crater rim',
            'One of the most photographed places in Indonesia'
        ],
        
        image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1920',
        
        flyOverWaypoints: [
            { name: 'Mount Penanjakan', coordinates: [-7.92, 112.94], zoom: 11, description: 'Sunrise viewpoint' },
            { name: 'Tengger Caldera', coordinates: [-7.94, 112.95], zoom: 12, description: 'Sea of Sand' },
            { name: 'Bromo Crater', coordinates: [-7.9425, 112.9530], zoom: 14, description: 'Smoking crater' },
            { name: 'Mount Semeru', coordinates: [-8.11, 112.92], zoom: 10, description: 'Java\'s highest peak backdrop' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #36 - EYJAFJALLAJÖKULL
    // ═══════════════════════════════════════════════════════════
    {
        id: 'eyjafjallajokull',
        name: 'Eyjafjallajökull',
        nativeName: 'Eyjafjallajökull',
        countries: [
            { name: 'Iceland', code: 'IS' }
        ],
        continent: 'Europe',
        region: 'South Iceland',
        
        elevation: 1651,
        prominence: 1051,
        coordinates: [63.6333, -19.6167],
        defaultZoom: 10,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Divergent boundary',
            plates: ['North American Plate', 'Eurasian Plate'],
            volcanicBelt: 'Mid-Atlantic Ridge / Iceland Hotspot',
            subduction: false
        },
        
        lastEruption: {
            year: 2010,
            name: 'Summit eruption',
            vei: 4,
            type: 'Explosive'
        },
        
        eruptionHistory: [
            { year: 2010, name: 'Major explosive eruption', vei: 4 },
            { year: 1821, name: 'Eruption lasting 2 years', vei: 2 },
            { year: 1612, name: 'Historical eruption', vei: 2 }
        ],
        
        lavaType: 'Trachyandesitic',
        
        crater: {
            diameter: '2.5km (caldera under ice cap)',
            depth: '200m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Reykjavik', coordinates: [64.1466, -21.9426], distance: '125km', population: 130000 },
            { name: 'Vik', coordinates: [63.4194, -19.0064], distance: '30km', population: 300 },
            { name: 'Hvolsvöllur', coordinates: [63.7522, -20.2258], distance: '40km', population: 900 }
        ],
        
        hazards: [
            { type: 'Glacial floods (jökulhlaups)', risk: 'Very High' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Europe-wide' },
            { type: 'Pyroclastic flows', risk: 'Moderate' },
            { type: 'Lava flows', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Famous after 2010 - major tourist draw' },
            { label: 'Research', value: 'Studied for aviation hazards' },
            { label: 'Aviation', value: '2010 eruption cost airlines €1.3 billion' }
        ],
        
        environmentalImpact: [
            { label: '2010 ash cloud', value: 'Largest air travel shutdown since WWII' },
            { label: 'Glacier', value: 'Ice cap melting accelerated by eruption' },
            { label: 'Local farms', value: 'Ash damaged farms and killed livestock' }
        ],
        
        famousEvents: [
            { event: '2010 aviation crisis', year: 2010, description: '100,000+ flights cancelled, 10 million travelers stranded' },
            { event: 'Pronunciation fame', year: 2010, description: 'Name became famous for being unpronounceable' },
            { event: 'Economic impact', year: 2010, description: 'Estimated €5 billion total economic damage' }
        ],
        
        funFacts: [
            'The 2010 eruption caused the largest air travel disruption since WWII',
            'Name means "Island Mountain Glacier" in Icelandic',
            'Pronunciation: AY-yah-fyat-lah-YOH-kuul',
            'Has an ice cap covering the summit caldera',
            '100,000 flights were cancelled during 2010 eruption',
            'Ash reached as far as Russia',
            'The eruption lasted 6 weeks',
            'News anchors struggled with the name worldwide, making it famous'
        ],
        
        image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920',
        
        flyOverWaypoints: [
            { name: 'South Coast', coordinates: [63.5, -19.5], zoom: 9, description: 'Iceland\'s south coast' },
            { name: 'Glacier', coordinates: [63.6, -19.62], zoom: 11, description: 'Ice-capped peak' },
            { name: 'Summit Caldera', coordinates: [63.6333, -19.6167], zoom: 13, description: 'Under the ice' },
            { name: 'Ash Deposits', coordinates: [63.63, -19.6], zoom: 11, description: '2010 ash fields' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #37 - MOUNT ASO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-aso',
        name: 'Mount Aso',
        nativeName: '阿蘇山 (Asosan)',
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        region: 'Kyushu',
        
        elevation: 1592,
        prominence: 992,
        coordinates: [32.8842, 131.1039],
        defaultZoom: 11,
        
        volcanoType: 'Caldera',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Philippine Sea Plate', 'Eurasian Plate'],
            volcanicBelt: 'Kyushu Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 2021,
            name: 'Explosive eruption',
            vei: 2,
            type: 'Vulcanian'
        },
        
        eruptionHistory: [
            { year: 2021, name: 'Large explosive eruption', vei: 2 },
            { year: 2016, name: 'Explosive eruption', vei: 2 },
            { year: 2015, name: 'Eruption', vei: 2 },
            { year: 2014, name: 'Strombolian activity', vei: 2 },
            { year: 1979, name: 'Eruption killed tourists', vei: 2, deaths: 3 }
        ],
        
        lavaType: 'Basaltic to Andesitic',
        
        crater: {
            diameter: '25km x 18km (caldera)',
            depth: '600m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Kumamoto', coordinates: [32.8032, 130.7079], distance: '45km', population: 740000 },
            { name: 'Aso', coordinates: [32.9475, 131.1239], distance: '10km', population: 26000 },
            { name: 'Oita', coordinates: [33.2382, 131.6126], distance: '70km', population: 480000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'High' },
            { type: 'Ash fall', risk: 'Very High' },
            { type: 'Volcanic bombs', risk: 'High', affectedArea: 'Nakadake crater' },
            { type: 'Volcanic gases', risk: 'Very High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'One of Kyushu\'s top attractions' },
            { label: 'Agriculture', value: 'Grasslands support cattle farming' },
            { label: 'Hot springs', value: 'Onsen resorts in caldera' },
            { label: 'Geothermal', value: 'Power generation potential' }
        ],
        
        environmentalImpact: [
            { label: 'Ancient eruption', value: '90,000 years ago - largest eruption in Japanese history' },
            { label: 'Grasslands', value: 'Caldera floor is famous kusasenri grassland' },
            { label: 'Ecosystem', value: '50,000 people live inside the caldera' }
        ],
        
        famousEvents: [
            { event: 'Super-eruption', year: -87000, description: 'VEI 7 eruption covered Japan in ash' },
            { event: 'Tourist deaths', year: 1979, description: '3 tourists killed by volcanic bombs' },
            { event: '2016 eruption', year: 2016, description: 'Explosive eruption with ash column 11km high' }
        ],
        
        funFacts: [
            'Has one of the world\'s largest calderas',
            'About 50,000 people live inside the caldera',
            'Nakadake is one of the most active volcanoes in Japan',
            'The ancient super-eruption 90,000 years ago was massive',
            'The caldera has its own towns, farms, and train line',
            'Famous for scenic grasslands inside the caldera',
            'Ropeway and road take visitors near active crater',
            'Access is often closed due to volcanic gases'
        ],
        
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920',
        
        flyOverWaypoints: [
            { name: 'Kumamoto', coordinates: [32.8, 130.75], zoom: 9, description: 'Kyushu city' },
            { name: 'Caldera Rim', coordinates: [32.9, 131.05], zoom: 10, description: 'Massive caldera' },
            { name: 'Kusasenri', coordinates: [32.88, 131.08], zoom: 12, description: 'Grassland' },
            { name: 'Nakadake Crater', coordinates: [32.8842, 131.1039], zoom: 14, description: 'Active crater' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #38 - MOUNT PINATUBO
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-pinatubo',
        name: 'Mount Pinatubo',
        nativeName: 'Bundok ng Pinatubo',
        countries: [
            { name: 'Philippines', code: 'PH' }
        ],
        continent: 'Asia',
        region: 'Central Luzon',
        
        elevation: 1486,
        prominence: 1186,
        coordinates: [15.1428, 120.3500],
        defaultZoom: 11,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['Eurasian Plate', 'Philippine Sea Plate'],
            volcanicBelt: 'Luzon Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1992,
            name: 'Minor eruptions',
            vei: 1,
            type: 'Phreatic'
        },
        
        eruptionHistory: [
            { year: 1992, name: 'Minor activity', vei: 1 },
            { year: 1991, name: 'Cataclysmic eruption', vei: 6, deaths: 847 },
            { year: -3550, name: 'Prehistoric eruption', vei: 6 }
        ],
        
        lavaType: 'Dacitic',
        
        crater: {
            diameter: '2.5km',
            depth: '800m (filled with lake)',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Angeles City', coordinates: [15.1450, 120.5887], distance: '25km', population: 450000 },
            { name: 'Manila', coordinates: [14.5995, 120.9842], distance: '90km', population: 14000000 },
            { name: 'Olongapo', coordinates: [14.8292, 120.2831], distance: '35km', population: 260000 },
            { name: 'San Fernando', coordinates: [15.0287, 120.6939], distance: '35km', population: 340000 }
        ],
        
        hazards: [
            { type: 'Lahars', risk: 'Extreme', affectedArea: 'Still ongoing threat every rainy season' },
            { type: 'Pyroclastic flows', risk: 'Very High' },
            { type: 'Ash fall', risk: 'Very High' },
            { type: 'Lake breakout', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Crater lake trekking is popular' },
            { label: 'Research', value: 'Most studied eruption - improved prediction methods' },
            { label: 'Mining', value: 'Lahar sand mining' }
        ],
        
        environmentalImpact: [
            { label: 'Global cooling', value: '1991 eruption cooled Earth by 0.5°C for 2 years' },
            { label: 'Ozone', value: 'Accelerated ozone depletion' },
            { label: 'Landscape', value: 'Buried 800 sq km under pyroclastic deposits' }
        ],
        
        famousEvents: [
            { event: '1991 cataclysm', year: 1991, description: 'Second largest eruption of 20th century (VEI 6)' },
            { event: 'Evacuation success', year: 1991, description: '58,000 people evacuated - saved tens of thousands of lives' },
            { event: 'Clark Air Base', year: 1991, description: 'Major US military base destroyed by ash' },
            { event: 'Crater lake', year: 1992, description: 'Beautiful blue lake formed in crater' }
        ],
        
        funFacts: [
            'Second largest volcanic eruption of the 20th century',
            'Cooled global temperatures by 0.5°C for 2 years',
            'Was unknown and dormant for 500 years before 1991',
            'Successful prediction saved tens of thousands of lives',
            'Destroyed Clark Air Base and Subic Bay Naval Station',
            'Now has a beautiful crater lake popular with tourists',
            'Lahars continue to threaten communities 30+ years later',
            'Typhoon Yunya hit during the eruption, making it worse'
        ],
        
        image: 'https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=1920',
        
        flyOverWaypoints: [
            { name: 'Manila Bay', coordinates: [14.8, 120.7], zoom: 9, description: 'Approaching from Manila' },
            { name: 'Angeles City', coordinates: [15.14, 120.59], zoom: 10, description: 'Nearby city' },
            { name: 'Lahar Fields', coordinates: [15.15, 120.4], zoom: 11, description: 'Volcanic debris' },
            { name: 'Crater Lake', coordinates: [15.1428, 120.3500], zoom: 13, description: 'Beautiful turquoise lake' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #39 - MOUNT VESUVIUS
    // ═══════════════════════════════════════════════════════════
    {
        id: 'mount-vesuvius',
        name: 'Mount Vesuvius',
        nativeName: 'Vesuvio',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        region: 'Campania',
        
        elevation: 1281,
        prominence: 1232,
        coordinates: [40.8219, 14.4264],
        defaultZoom: 12,
        
        volcanoType: 'Stratovolcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Convergent boundary',
            plates: ['African Plate', 'Eurasian Plate'],
            volcanicBelt: 'Campanian Volcanic Arc',
            subduction: true
        },
        
        lastEruption: {
            year: 1944,
            name: 'WWII eruption',
            vei: 3,
            type: 'Effusive/Explosive'
        },
        
        eruptionHistory: [
            { year: 1944, name: 'WWII eruption', vei: 3 },
            { year: 1906, name: 'Major eruption', vei: 4 },
            { year: 1631, name: 'Devastating eruption', vei: 4, deaths: 4000 },
            { year: 79, name: 'Pompeii eruption', vei: 5, deaths: 16000 }
        ],
        
        lavaType: 'Phonolitic Tephrite',
        
        crater: {
            diameter: '600m',
            depth: '300m',
            lavaLake: false
        },
        
        nearbyCities: [
            { name: 'Naples', coordinates: [40.8518, 14.2681], distance: '12km', population: 970000 },
            { name: 'Pompeii', coordinates: [40.7462, 14.4989], distance: '8km', population: 25000 },
            { name: 'Torre del Greco', coordinates: [40.7886, 14.3739], distance: '6km', population: 85000 },
            { name: 'Ercolano', coordinates: [40.8061, 14.3453], distance: '5km', population: 53000 }
        ],
        
        hazards: [
            { type: 'Pyroclastic flows', risk: 'Extreme', affectedArea: '3 million people in hazard zone' },
            { type: 'Ash fall', risk: 'Very High', affectedArea: 'Naples metropolitan area' },
            { type: 'Lava flows', risk: 'High' },
            { type: 'Lahars', risk: 'Moderate' },
            { type: 'Volcanic earthquakes', risk: 'High' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Millions visit Vesuvius and Pompeii annually' },
            { label: 'Wine', value: 'Lacryma Christi wine from volcanic slopes' },
            { label: 'UNESCO', value: 'Pompeii is World Heritage Site' },
            { label: 'Research', value: 'Vesuvius Observatory - oldest in world (1841)' }
        ],
        
        environmentalImpact: [
            { label: 'AD 79 eruption', value: 'Buried Pompeii and Herculaneum, 16,000+ died' },
            { label: 'Risk zone', value: '3 million people live in danger zone' },
            { label: 'Ecosystem', value: 'National park protects unique Mediterranean habitat' }
        ],
        
        famousEvents: [
            { event: 'Pompeii destruction', year: 79, description: 'Plinian eruption buried cities, preserved them for 2000 years' },
            { event: 'Pliny the Elder death', year: 79, description: 'Roman naturalist died during rescue attempt' },
            { event: '1631 eruption', year: 1631, description: 'Worst since AD 79, killed 4,000' },
            { event: 'WWII eruption', year: 1944, description: 'Eruption destroyed US Army Air Force planes' }
        ],
        
        funFacts: [
            'Most dangerous volcano in Europe due to dense population',
            'Only active volcano on European mainland',
            'The AD 79 eruption preserved Pompeii perfectly',
            'Pliny the Younger\'s letters are first detailed eruption description',
            'The word "volcano" comes from nearby island Vulcano',
            'About 3 million people live in the danger zone',
            'Has a detailed evacuation plan for 600,000 people',
            'The Vesuvius Observatory was the world\'s first volcanological observatory'
        ],
        
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920',
        
        flyOverWaypoints: [
            { name: 'Bay of Naples', coordinates: [40.82, 14.15], zoom: 10, description: 'Beautiful bay' },
            { name: 'Naples', coordinates: [40.85, 14.27], zoom: 11, description: 'City of 1 million' },
            { name: 'Pompeii', coordinates: [40.75, 14.49], zoom: 12, description: 'Ancient buried city' },
            { name: 'Summit Crater', coordinates: [40.8219, 14.4264], zoom: 14, description: 'Dormant but dangerous' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // #40 - KILAUEA
    // ═══════════════════════════════════════════════════════════
    {
        id: 'kilauea',
        name: 'Kilauea',
        nativeName: 'Kīlauea',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'Oceania',
        region: 'Hawaii (Big Island)',
        
        elevation: 1247,
        prominence: 47,
        coordinates: [19.4069, -155.2834],
        defaultZoom: 11,
        
        volcanoType: 'Shield Volcano',
        status: 'active',
        
        tectonicSetting: {
            plateType: 'Hotspot',
            plates: ['Pacific Plate'],
            volcanicBelt: 'Hawaiian-Emperor Seamount Chain',
            subduction: false
        },
        
        lastEruption: {
            year: 2024,
            name: 'Summit eruption',
            vei: 0,
            type: 'Effusive'
        },
        
        eruptionHistory: [
            { year: 2024, name: 'Halema\'uma\'u activity', vei: 0 },
            { year: 2023, name: 'Summit eruption', vei: 0 },
            { year: 2018, name: 'Lower East Rift Zone eruption', vei: 4 },
            { year: 1983, name: 'Start of 35-year eruption', vei: 0 },
            { year: 1959, name: 'Kilauea Iki eruption', vei: 2 }
        ],
        
        lavaType: 'Basaltic (very fluid)',
        
        crater: {
            diameter: '4.4km x 3.2km (Halema\'uma\'u)',
            depth: '160m',
            lavaLake: true
        },
        
        nearbyCities: [
            { name: 'Hilo', coordinates: [19.7297, -155.0900], distance: '45km', population: 45000 },
            { name: 'Pāhoa', coordinates: [19.4958, -154.9453], distance: '25km', population: 950 },
            { name: 'Volcano', coordinates: [19.4300, -155.2333], distance: '5km', population: 2500 }
        ],
        
        hazards: [
            { type: 'Lava flows', risk: 'Extreme', affectedArea: 'East Rift Zone communities' },
            { type: 'Volcanic gases', risk: 'Extreme', affectedArea: 'Vog affects entire island' },
            { type: 'Ground cracks', risk: 'Very High' },
            { type: 'Laze (lava haze)', risk: 'Very High', affectedArea: 'When lava enters ocean' },
            { type: 'Explosive eruptions', risk: 'Moderate' }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Hawaii Volcanoes National Park - 2 million visitors/year' },
            { label: 'Research', value: 'Hawaiian Volcano Observatory on summit' },
            { label: 'Cultural', value: 'Sacred to Native Hawaiians - home of Pele' }
        ],
        
        environmentalImpact: [
            { label: '2018 eruption', value: 'Destroyed 716 homes in Leilani Estates' },
            { label: 'New land', value: 'Added 875 acres to island since 1983' },
            { label: 'Air quality', value: 'Vog affects health across Hawaii' }
        ],
        
        famousEvents: [
            { event: '2018 Leilani eruption', year: 2018, description: 'Fissures destroyed 716 homes, created massive lava flows' },
            { event: 'Caldera collapse', year: 2018, description: 'Summit collapsed creating 500m deep crater' },
            { event: '35-year eruption', year: 1983, description: 'Pu\'u \'Ō\'ō vent erupted continuously from 1983-2018' },
            { event: 'Kilauea Iki', year: 1959, description: 'Spectacular lava fountain 580m high' }
        ],
        
        funFacts: [
            'One of the most active volcanoes on Earth',
            'Has been erupting almost continuously since 1983',
            'Home of Pele, Hawaiian goddess of fire',
            'The 2018 eruption destroyed over 700 homes',
            'Has a lava lake that comes and goes in the summit crater',
            'Added nearly 900 acres of new land to Hawaii since 1983',
            'The Hawaiian Volcano Observatory has monitored it since 1912',
            'Visitors can often see active lava in the national park'
        ],
        
        image: 'https://images.unsplash.com/photo-1528837516156-0a7a3a8e1b2c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1528837516156-0a7a3a8e1b2c?w=1920',
        
        flyOverWaypoints: [
            { name: 'Hawaii Island', coordinates: [19.5, -155.4], zoom: 9, description: 'Big Island view' },
            { name: 'National Park', coordinates: [19.42, -155.26], zoom: 10, description: 'Hawaii Volcanoes NP' },
            { name: 'Halema\'uma\'u', coordinates: [19.41, -155.28], zoom: 12, description: 'Summit caldera' },
            { name: 'Lava Lake', coordinates: [19.4069, -155.2834], zoom: 14, description: 'Active lava lake' }
        ]
    }
];

// Log successful load
console.log('🌋 Volcanoes Data 4 loaded: 10 volcanoes (Piton de la Fournaise to Kilauea)');
