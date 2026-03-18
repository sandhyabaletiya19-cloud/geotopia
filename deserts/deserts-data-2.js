/* ==========================================
   DESERTS DATA - FILE 2 OF 5
   Deserts 11-20 (By Area)
   ========================================== */

const DESERTS_DATA_2 = [
    // ========================================
    // #11 - CHIHUAHUAN DESERT
    // ========================================
    {
        id: 'chihuahuan-desert',
        name: 'Chihuahuan Desert',
        countries: [
            { name: 'Mexico', code: 'MX' },
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 453000,
        rank: 11,
        coordinates: [29.5, -105.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1518173946687-a4c54445a7e5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518173946687-a4c54445a7e5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Chihuahuan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-108.0, 24.0], [-108.0, 35.0], [-100.0, 35.0], [-100.0, 24.0], [-108.0, 24.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '32°C',
            winterTempMin: '-10°C',
            winterTempAvg: '10°C',
            maxRecorded: '46°C',
            annualRainfall: '150-300mm',
            rainyMonths: 'July-September (monsoon season)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Sierra Madre rain shadow', 'High altitude basin', 'Continental position'],
            age: '8,000-10,000 years (current form)'
        },
        
        landforms: [
            { name: 'Bolsons', description: 'Enclosed drainage basins' },
            { name: 'Playas', description: 'Dry lake beds and salt flats' },
            { name: 'Bajadas', description: 'Sloping gravel deposits at mountain bases' },
            { name: 'Gypsum Dunes', description: 'White Sands unique dune field' },
            { name: 'Limestone Caves', description: 'Carlsbad Caverns system' }
        ],
        
        features: [
            { name: 'White Sands', type: 'Dune field', coordinates: [32.78, -106.17], description: 'Worlds largest gypsum dune field' },
            { name: 'Carlsbad Caverns', type: 'Cave system', coordinates: [32.17, -104.44], description: 'Massive limestone caves' },
            { name: 'Big Bend', type: 'Canyon', coordinates: [29.25, -103.25], description: 'Rio Grande canyon' },
            { name: 'Copper Canyon', type: 'Canyon system', coordinates: [27.5, -107.75], description: 'Larger than Grand Canyon' },
            { name: 'Bolsón de Mapimí', type: 'Basin', coordinates: [26.7, -103.8], description: 'Zone of Silence' }
        ],
        
        oases: [
            { name: 'Cuatro Ciénegas', coordinates: [26.98, -102.07], country: 'Mexico', population: 14000 },
            { name: 'Balmorhea Springs', coordinates: [30.98, -103.79], country: 'USA', population: 500 }
        ],
        
        cities: [
            { name: 'Ciudad Juárez', coordinates: [31.69, -106.42], country: 'Mexico', population: 1500000 },
            { name: 'El Paso', coordinates: [31.76, -106.49], country: 'USA', population: 680000 },
            { name: 'Chihuahua City', coordinates: [28.63, -106.09], country: 'Mexico', population: 925000 },
            { name: 'Las Cruces', coordinates: [32.35, -106.76], country: 'USA', population: 110000 },
            { name: 'Torreón', coordinates: [25.54, -103.41], country: 'Mexico', population: 680000 }
        ],
        
        biodiversity: {
            plants: ['Lechuguilla', 'Creosote Bush', 'Ocotillo', 'Century Plant', 'Sotol', 'Candelilla', 'Prickly Pear'],
            animals: ['Mexican Gray Wolf', 'Pronghorn', 'Roadrunner', 'Javelina', 'Kit Fox', 'Horned Lizard', 'Tarantula', 'Kangaroo Rat'],
            endangeredSpecies: ['Mexican Gray Wolf (endangered)', 'Bolson Tortoise', 'Mexican Prairie Dog']
        },
        
        humanLife: {
            peoples: ['Tarahumara (Rarámuri)', 'Apache', 'Comanche'],
            lifestyle: 'Ranching, agriculture, border communities',
            population: '~15 million in desert region'
        },
        
        economy: [
            { label: 'Manufacturing', value: 'Maquiladoras along border' },
            { label: 'Mining', value: 'Silver, copper, zinc' },
            { label: 'Agriculture', value: 'Cotton, pecans, chili peppers' },
            { label: 'Tourism', value: 'Big Bend, Carlsbad Caverns, White Sands' },
            { label: 'Ranching', value: 'Cattle industry' }
        ],
        
        environmentalIssues: [
            { label: 'Water Depletion', value: 'Rio Grande and aquifer overuse' },
            { label: 'Desertification', value: 'Grassland conversion to shrubland' },
            { label: 'Border Issues', value: 'Wall construction impacts wildlife corridors' },
            { label: 'Overgrazing', value: 'Cattle damaging native vegetation' }
        ],
        
        historicalImportance: [
            { label: 'Casas Grandes', value: 'Puebloan civilization 1130-1450 CE' },
            { label: 'Camino Real', value: 'Spanish colonial trade route' },
            { label: 'Apache Wars', value: 'Geronimo and Native American resistance' },
            { label: 'Mexican Revolution', value: 'Pancho Villa campaigns' }
        ],
        
        funFacts: [
            'Largest desert in North America',
            'White Sands gypsum is so pure it is used for drywall',
            'Carlsbad Caverns has 400,000 bats emerging nightly in summer',
            'The Zone of Silence allegedly disrupts radio signals',
            'Home to the fastest land animal in North America (pronghorn)',
            'Tarahumara people are legendary ultra-marathon runners',
            'Contains more cactus species than any other desert'
        ],
        
        journeyWaypoints: [
            { name: 'El Paso/Juárez', coordinates: [31.76, -106.49], description: 'Twin border cities' },
            { name: 'White Sands', coordinates: [32.78, -106.17], description: 'Brilliant white gypsum dunes' },
            { name: 'Carlsbad Caverns', coordinates: [32.17, -104.44], description: 'Underground wonder' },
            { name: 'Big Bend', coordinates: [29.25, -103.25], description: 'Rio Grande canyon wilderness' },
            { name: 'Copper Canyon', coordinates: [27.5, -107.75], description: 'Dramatic canyon system' }
        ]
    },

    // ========================================
    // #12 - KARAKUM DESERT
    // ========================================
    {
        id: 'karakum-desert',
        name: 'Karakum Desert',
        countries: [
            { name: 'Turkmenistan', code: 'TM' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 350000,
        rank: 12,
        coordinates: [39.5, 59.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Karakum Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [53.0, 35.0], [53.0, 43.0], [66.0, 43.0], [66.0, 35.0], [53.0, 35.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '35°C',
            winterTempMin: '-20°C',
            winterTempAvg: '3°C',
            maxRecorded: '50.1°C',
            annualRainfall: '70-150mm',
            rainyMonths: 'March-May (spring rains)'
        },
        
        formation: {
            type: 'Continental desert',
            causes: ['Far from ocean moisture', 'Surrounded by mountains', 'Rain shadow of Kopet Dag'],
            age: '4,000-5,000 years (current extreme conditions)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Crescent and linear dunes up to 90m' },
            { name: 'Takyrs', description: 'Clay flat pans, cracked surfaces' },
            { name: 'Salt Marshes', description: 'Remnants of ancient seas' },
            { name: 'Sinkholes', description: 'Including the Door to Hell' }
        ],
        
        features: [
            { name: 'Darvaza Gas Crater', type: 'Crater', coordinates: [40.25, 58.44], description: 'Door to Hell, burning since 1971' },
            { name: 'Repetek Reserve', type: 'Biosphere', coordinates: [38.57, 63.18], description: 'UNESCO desert biosphere' },
            { name: 'Karakum Canal', type: 'Canal', coordinates: [38.5, 58.5], description: 'Worlds longest irrigation canal' },
            { name: 'Merv Ruins', type: 'Archaeological', coordinates: [37.67, 62.17], description: 'Ancient Silk Road city' }
        ],
        
        oases: [
            { name: 'Mary Oasis', coordinates: [37.6, 61.83], country: 'Turkmenistan', population: 125000 },
            { name: 'Tejen Oasis', coordinates: [37.38, 60.5], country: 'Turkmenistan', population: 70000 }
        ],
        
        cities: [
            { name: 'Ashgabat', coordinates: [37.95, 58.38], country: 'Turkmenistan', population: 1030000 },
            { name: 'Mary', coordinates: [37.6, 61.83], country: 'Turkmenistan', population: 125000 },
            { name: 'Türkmenabat', coordinates: [39.1, 63.58], country: 'Turkmenistan', population: 235000 },
            { name: 'Daşoguz', coordinates: [41.84, 59.97], country: 'Turkmenistan', population: 230000 }
        ],
        
        biodiversity: {
            plants: ['Saxaul', 'Sand Acacia', 'White Wormwood', 'Calligonum', 'Astragalus'],
            animals: ['Goitered Gazelle', 'Corsac Fox', 'Tolai Hare', 'Monitor Lizard', 'Saw-scaled Viper', 'Long-eared Hedgehog'],
            endangeredSpecies: ['Asiatic Cheetah (critically endangered, possibly extinct here)', 'Persian Leopard']
        },
        
        humanLife: {
            peoples: ['Turkmen', 'Uzbek'],
            lifestyle: 'Nomadic herding, carpet weaving, oil industry',
            population: '~500,000 in desert regions'
        },
        
        economy: [
            { label: 'Natural Gas', value: 'One of worlds largest reserves' },
            { label: 'Oil', value: 'Significant petroleum production' },
            { label: 'Cotton', value: 'Irrigated agriculture (Karakum Canal)' },
            { label: 'Carpets', value: 'Traditional Turkmen carpet weaving' }
        ],
        
        environmentalIssues: [
            { label: 'Water Crisis', value: 'Aral Sea disaster affects region' },
            { label: 'Desertification', value: 'Irrigation causing soil salinization' },
            { label: 'Gas Flaring', value: 'Darvaza burning since 1971' },
            { label: 'Overuse of Resources', value: 'Karakum Canal depleting water' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Merv was largest city in world 12th century' },
            { label: 'Ancient Margiana', value: 'Bronze Age civilization 2300-1700 BCE' },
            { label: 'Mongol Conquest', value: 'Genghis Khan destroyed Merv 1221' },
            { label: 'Soviet Era', value: 'Karakum Canal built 1954-1988' }
        ],
        
        funFacts: [
            'The Door to Hell has been burning for over 50 years',
            'Karakum means "Black Sand" in Turkic',
            'Contains one of the worlds largest gas fields',
            'Merv was once the largest city in the world',
            'Turkmen carpets are considered among the finest in the world',
            'The Karakum Canal is 1,375 km long',
            'Temperatures can swing 35°C between day and night'
        ],
        
        journeyWaypoints: [
            { name: 'Ashgabat', coordinates: [37.95, 58.38], description: 'White marble capital city' },
            { name: 'Darvaza Crater', coordinates: [40.25, 58.44], description: 'Door to Hell burning gas crater' },
            { name: 'Merv Ruins', coordinates: [37.67, 62.17], description: 'Ancient Silk Road metropolis' },
            { name: 'Repetek Reserve', coordinates: [38.57, 63.18], description: 'Desert biosphere reserve' },
            { name: 'Eastern Karakum', coordinates: [39.5, 62.5], description: 'Vast sand seas' }
        ]
    },

    // ========================================
    // #13 - COLORADO PLATEAU DESERT
    // ========================================
    {
        id: 'colorado-plateau-desert',
        name: 'Colorado Plateau Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'cold',
        area: 337000,
        rank: 13,
        coordinates: [37.0, -110.5],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Colorado Plateau Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-114.0, 34.0], [-114.0, 40.0], [-106.0, 40.0], [-106.0, 34.0], [-114.0, 34.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '28°C',
            winterTempMin: '-18°C',
            winterTempAvg: '0°C',
            maxRecorded: '47°C',
            annualRainfall: '150-400mm',
            rainyMonths: 'July-September (monsoon), winter (snow)'
        },
        
        formation: {
            type: 'High desert plateau',
            causes: ['High elevation (1,500-3,000m)', 'Rain shadow', 'Colorado River erosion'],
            age: '5-6 million years (canyon carving began)'
        },
        
        landforms: [
            { name: 'Canyons', description: 'Grand Canyon and hundreds of side canyons' },
            { name: 'Mesas', description: 'Flat-topped elevations' },
            { name: 'Buttes', description: 'Isolated flat-topped hills' },
            { name: 'Arches', description: 'Natural stone arches (2,000+ in Utah)' },
            { name: 'Hoodoos', description: 'Tall thin rock spires' }
        ],
        
        features: [
            { name: 'Grand Canyon', type: 'Canyon', coordinates: [36.1, -112.1], description: '446 km long, 1.8 km deep' },
            { name: 'Monument Valley', type: 'Valley', coordinates: [36.98, -110.1], description: 'Iconic sandstone buttes' },
            { name: 'Arches National Park', type: 'Rock formations', coordinates: [38.73, -109.59], description: 'Over 2,000 natural arches' },
            { name: 'Bryce Canyon', type: 'Hoodoos', coordinates: [37.57, -112.18], description: 'Largest hoodoo collection' },
            { name: 'Canyonlands', type: 'Canyon', coordinates: [38.33, -109.88], description: 'Carved by Colorado and Green Rivers' }
        ],
        
        oases: [
            { name: 'Havasu Falls', coordinates: [36.26, -112.7], country: 'USA', population: 200 },
            { name: 'Moab Springs', coordinates: [38.57, -109.55], country: 'USA', population: 5000 }
        ],
        
        cities: [
            { name: 'Flagstaff', coordinates: [35.2, -111.65], country: 'USA', population: 73000 },
            { name: 'Moab', coordinates: [38.57, -109.55], country: 'USA', population: 5300 },
            { name: 'Page', coordinates: [36.91, -111.46], country: 'USA', population: 7500 },
            { name: 'Farmington', coordinates: [36.73, -108.22], country: 'USA', population: 45000 },
            { name: 'Gallup', coordinates: [35.53, -108.74], country: 'USA', population: 22000 }
        ],
        
        biodiversity: {
            plants: ['Pinyon Pine', 'Utah Juniper', 'Blackbrush', 'Mormon Tea', 'Cliffrose', 'Indian Ricegrass'],
            animals: ['Desert Bighorn Sheep', 'Mountain Lion', 'California Condor', 'Gila Monster', 'Collared Lizard', 'Canyon Wren'],
            endangeredSpecies: ['California Condor (critically endangered)', 'Mexican Spotted Owl', 'Razorback Sucker']
        },
        
        humanLife: {
            peoples: ['Navajo', 'Hopi', 'Ute', 'Pueblo peoples', 'Havasupai'],
            lifestyle: 'Tribal nations, tourism, ranching',
            population: '~500,000 in plateau region'
        },
        
        economy: [
            { label: 'Tourism', value: 'Grand Canyon receives 6 million visitors/year' },
            { label: 'Mining', value: 'Uranium, coal, natural gas' },
            { label: 'Ranching', value: 'Cattle on public lands' },
            { label: 'Film Industry', value: 'Monument Valley iconic filming location' },
            { label: 'Native American Arts', value: 'Navajo jewelry and crafts' }
        ],
        
        environmentalIssues: [
            { label: 'Water Rights', value: 'Colorado River over-allocated' },
            { label: 'Uranium Mining', value: 'Legacy contamination near Navajo lands' },
            { label: 'Overvisitation', value: 'Parks being "loved to death"' },
            { label: 'Climate Change', value: 'Increasing drought and fire risk' }
        ],
        
        historicalImportance: [
            { label: 'Ancestral Puebloans', value: 'Cliff dwellings 600-1300 CE' },
            { label: 'Spanish Exploration', value: 'Coronado expedition 1540' },
            { label: 'Powell Expedition', value: 'First Colorado River trip 1869' },
            { label: 'National Parks', value: 'Grand Canyon protected 1908' }
        ],
        
        funFacts: [
            'Grand Canyon is one of the Seven Natural Wonders of the World',
            'Monument Valley has been in hundreds of Western films',
            'The Colorado River carved the Grand Canyon over 6 million years',
            'Arches National Park has over 2,000 documented arches',
            'Native Americans have lived here for over 12,000 years',
            'Contains rocks 2 billion years old',
            'The Havasupai have lived in the Grand Canyon for 800+ years'
        ],
        
        journeyWaypoints: [
            { name: 'Grand Canyon South Rim', coordinates: [36.05, -112.14], description: 'Most visited viewpoint' },
            { name: 'Monument Valley', coordinates: [36.98, -110.1], description: 'Iconic Western landscape' },
            { name: 'Arches', coordinates: [38.73, -109.59], description: 'Delicate Arch and more' },
            { name: 'Bryce Canyon', coordinates: [37.57, -112.18], description: 'Forest of hoodoos' },
            { name: 'Canyonlands', coordinates: [38.33, -109.88], description: 'Island in the Sky' }
        ]
    },

    // ========================================
    // #14 - SONORAN DESERT
    // ========================================
    {
        id: 'sonoran-desert',
        name: 'Sonoran Desert',
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 310000,
        rank: 14,
        coordinates: [31.5, -112.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sonoran Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-117.0, 27.0], [-117.0, 35.0], [-109.0, 35.0], [-109.0, 27.0], [-117.0, 27.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '48°C',
            summerTempAvg: '40°C',
            winterTempMin: '-5°C',
            winterTempAvg: '15°C',
            maxRecorded: '53°C (Death Valley adjacent)',
            annualRainfall: '75-400mm',
            rainyMonths: 'July-September (monsoon), December-March (winter)'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Subtropical high pressure', 'Rain shadow of mountains', 'Gulf of California influence'],
            age: '8,000 years (current form)'
        },
        
        landforms: [
            { name: 'Bajadas', description: 'Sloping gravel deposits' },
            { name: 'Desert Pavement', description: 'Stone-covered surfaces' },
            { name: 'Sand Dunes', description: 'Gran Desierto de Altar' },
            { name: 'Playas', description: 'Dry lake beds' },
            { name: 'Volcanic Fields', description: 'Pinacate lava flows' }
        ],
        
        features: [
            { name: 'Saguaro National Park', type: 'Protected area', coordinates: [32.18, -110.74], description: 'Iconic saguaro cactus forest' },
            { name: 'Organ Pipe', type: 'Monument', coordinates: [32.03, -112.86], description: 'UNESCO biosphere reserve' },
            { name: 'Pinacate Peaks', type: 'Volcanic', coordinates: [31.77, -113.5], description: 'Volcanic craters, NASA tested here' },
            { name: 'Gran Desierto de Altar', type: 'Sand dunes', coordinates: [31.5, -114.0], description: 'Largest dune field in North America' },
            { name: 'Sea of Cortez', type: 'Marine', coordinates: [28.0, -112.0], description: 'Aquarium of the World' }
        ],
        
        oases: [
            { name: 'Quitobaquito Springs', coordinates: [31.94, -113.02], country: 'USA', population: 0 },
            { name: 'Palm Canyon', coordinates: [33.47, -116.3], country: 'USA', population: 0 }
        ],
        
        cities: [
            { name: 'Phoenix', coordinates: [33.45, -112.07], country: 'USA', population: 1700000 },
            { name: 'Tucson', coordinates: [32.22, -110.97], country: 'USA', population: 545000 },
            { name: 'Hermosillo', coordinates: [29.07, -110.97], country: 'Mexico', population: 900000 },
            { name: 'Mexicali', coordinates: [32.66, -115.47], country: 'Mexico', population: 1000000 },
            { name: 'Yuma', coordinates: [32.69, -114.63], country: 'USA', population: 95000 }
        ],
        
        biodiversity: {
            plants: ['Saguaro Cactus', 'Organ Pipe Cactus', 'Palo Verde', 'Ironwood', 'Ocotillo', 'Barrel Cactus', 'Joshua Tree (edges)'],
            animals: ['Gila Monster', 'Roadrunner', 'Desert Tortoise', 'Javelina', 'Coatimundi', 'Elf Owl', 'Sonoran Pronghorn', 'Harris Hawk'],
            endangeredSpecies: ['Sonoran Pronghorn (endangered)', 'Desert Pupfish', 'Cactus Ferruginous Pygmy-Owl']
        },
        
        humanLife: {
            peoples: ['Tohono O\'odham', 'Pima (Akimel O\'odham)', 'Yaqui', 'Seri'],
            lifestyle: 'Urban centers, agriculture, border communities',
            population: '~6 million in desert region'
        },
        
        economy: [
            { label: 'Agriculture', value: 'Irrigated farming (cotton, citrus, vegetables)' },
            { label: 'Tourism', value: 'Winter visitors, national parks' },
            { label: 'Retirement', value: 'Major retirement destination' },
            { label: 'Technology', value: 'Phoenix tech industry growth' },
            { label: 'Solar Energy', value: 'Major solar installations' }
        ],
        
        environmentalIssues: [
            { label: 'Water Crisis', value: 'Colorado River and groundwater depletion' },
            { label: 'Urban Sprawl', value: 'Phoenix is one of fastest-growing cities' },
            { label: 'Border Wall', value: 'Wildlife corridors severed' },
            { label: 'Heat Island', value: 'Phoenix urban heat intensification' }
        ],
        
        historicalImportance: [
            { label: 'Hohokam Culture', value: 'Irrigation canals 300-1450 CE' },
            { label: 'Spanish Missions', value: 'San Xavier del Bac 1692' },
            { label: 'Gadsden Purchase', value: 'US acquired region 1854' },
            { label: 'Route 66', value: 'Mother Road through desert' }
        ],
        
        funFacts: [
            'Only place in the world where Saguaro cactus grows naturally',
            'Saguaro can live 200 years and weigh 8 tons',
            'The greenest desert in North America due to bi-seasonal rain',
            'Phoenix is the hottest large city in the US',
            'NASA trained Apollo astronauts at Pinacate craters',
            'The Gila Monster is one of only two venomous lizards',
            'Tohono O\'odham means "Desert People" in their language'
        ],
        
        journeyWaypoints: [
            { name: 'Saguaro National Park', coordinates: [32.18, -110.74], description: 'Forest of giant cacti' },
            { name: 'Organ Pipe Monument', coordinates: [32.03, -112.86], description: 'Border wilderness' },
            { name: 'Pinacate', coordinates: [31.77, -113.5], description: 'Volcanic moonscape' },
            { name: 'Gran Desierto', coordinates: [31.5, -114.0], description: 'Star dunes field' },
            { name: 'Sea of Cortez Coast', coordinates: [31.3, -113.5], description: 'Where desert meets sea' }
        ]
    },

    // ========================================
    // #15 - KYZYLKUM DESERT
    // ========================================
    {
        id: 'kyzylkum-desert',
        name: 'Kyzylkum Desert',
        countries: [
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Turkmenistan', code: 'TM' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 298000,
        rank: 15,
        coordinates: [42.0, 64.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Kyzylkum Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [56.0, 39.0], [56.0, 46.0], [68.0, 46.0], [68.0, 39.0], [56.0, 39.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '30°C',
            winterTempMin: '-30°C',
            winterTempAvg: '-5°C',
            maxRecorded: '51°C',
            annualRainfall: '100-200mm',
            rainyMonths: 'March-April (spring)'
        },
        
        formation: {
            type: 'Continental desert',
            causes: ['Far from ocean moisture', 'Between two dying rivers', 'Rain shadow'],
            age: '5,000 years (current extreme conditions)'
        },
        
        landforms: [
            { name: 'Barchans', description: 'Crescent-shaped sand dunes' },
            { name: 'Salt Flats', description: 'Remnants of ancient seas' },
            { name: 'Rocky Outcrops', description: 'Isolated hills and ridges' },
            { name: 'Former Seabed', description: 'Aral Sea dried regions' }
        ],
        
        features: [
            { name: 'Aral Sea (remnant)', type: 'Lake', coordinates: [45.0, 59.0], description: 'Once 4th largest lake, now mostly desert' },
            { name: 'Aydar Lake', type: 'Lake', coordinates: [40.8, 66.0], description: 'Artificial lake from irrigation runoff' },
            { name: 'Nurata Mountains', type: 'Mountain', coordinates: [40.5, 65.5], description: 'Ancient mountains in desert' },
            { name: 'Muruntau Mine', type: 'Mine', coordinates: [41.55, 64.57], description: 'Largest open-pit gold mine' }
        ],
        
        oases: [
            { name: 'Bukhara', coordinates: [39.77, 64.42], country: 'Uzbekistan', population: 280000 },
            { name: 'Navoi', coordinates: [40.08, 65.37], country: 'Uzbekistan', population: 140000 }
        ],
        
        cities: [
            { name: 'Bukhara', coordinates: [39.77, 64.42], country: 'Uzbekistan', population: 280000 },
            { name: 'Navoi', coordinates: [40.08, 65.37], country: 'Uzbekistan', population: 140000 },
            { name: 'Nukus', coordinates: [42.46, 59.6], country: 'Uzbekistan', population: 310000 },
            { name: 'Urgench', coordinates: [41.55, 60.63], country: 'Uzbekistan', population: 140000 }
        ],
        
        biodiversity: {
            plants: ['Saxaul', 'Calligonum', 'Astragalus', 'Sand Sedge', 'Desert Tulips'],
            animals: ['Saiga Antelope', 'Goitered Gazelle', 'Long-eared Hedgehog', 'Steppe Eagle', 'Monitor Lizard', 'Horsfield\'s Tortoise'],
            endangeredSpecies: ['Saiga Antelope (critically endangered)', 'Persian Leopard', 'Bukhara Deer']
        },
        
        humanLife: {
            peoples: ['Uzbek', 'Kazakh', 'Turkmen', 'Karakalpak'],
            lifestyle: 'Oasis agriculture, herding, mining',
            population: '~3 million in desert region'
        },
        
        economy: [
            { label: 'Mining', value: 'Worlds largest gold mine (Muruntau)' },
            { label: 'Natural Gas', value: 'Major gas fields' },
            { label: 'Cotton', value: 'Irrigated cotton production' },
            { label: 'Uranium', value: 'Significant uranium deposits' }
        ],
        
        environmentalIssues: [
            { label: 'Aral Sea Disaster', value: 'One of worst environmental catastrophes' },
            { label: 'Salt Storms', value: 'Toxic dust from dried seabed' },
            { label: 'Water Crisis', value: 'Amu Darya and Syr Darya depleted' },
            { label: 'Desertification', value: 'Expanding due to irrigation misuse' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Bukhara was major trading hub' },
            { label: 'Khorezm Empire', value: 'Ancient civilization along rivers' },
            { label: 'Mongol Conquest', value: 'Genghis Khan devastated region 1220' },
            { label: 'Soviet Era', value: 'Cotton expansion caused Aral Sea crisis' }
        ],
        
        funFacts: [
            'Kyzylkum means "Red Sand" in Turkic',
            'Contains worlds largest open-pit gold mine',
            'The Aral Sea shrank 90% in 50 years',
            'Ships now sit stranded in desert sand',
            'Spring brings brief but spectacular desert blooms',
            'Bukhara was a center of Islamic learning',
            'Contains some of the largest natural gas reserves in world'
        ],
        
        journeyWaypoints: [
            { name: 'Bukhara', coordinates: [39.77, 64.42], description: 'Ancient Silk Road city' },
            { name: 'Muruntau Mine', coordinates: [41.55, 64.57], description: 'Giant gold mine' },
            { name: 'Aral Sea Ruins', coordinates: [45.0, 59.0], description: 'Ships stranded in desert' },
            { name: 'Aydar Lake', coordinates: [40.8, 66.0], description: 'Turquoise lake in desert' },
            { name: 'Nurata Mountains', coordinates: [40.5, 65.5], description: 'Desert mountain oasis' }
        ]
    },

    // ========================================
    // #16 - TAKLAMAKAN DESERT
    // ========================================
    {
        id: 'taklamakan-desert',
        name: 'Taklamakan Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 270000,
        rank: 16,
        coordinates: [38.5, 82.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Taklamakan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [76.0, 36.0], [76.0, 42.0], [90.0, 42.0], [90.0, 36.0], [76.0, 36.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '30°C',
            winterTempMin: '-25°C',
            winterTempAvg: '-10°C',
            maxRecorded: '47°C',
            annualRainfall: '<40mm',
            rainyMonths: 'Almost none (extremely arid)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Himalayan rain shadow', 'Tian Shan rain shadow', 'Far from any ocean'],
            age: '~2 million years'
        },
        
        landforms: [
            { name: 'Shifting Dunes', description: 'Up to 300m high, constantly moving' },
            { name: 'Star Dunes', description: 'Complex multi-armed dunes' },
            { name: 'Tarim Basin', description: 'Endorheic basin surrounded by mountains' },
            { name: 'Dry Riverbeds', description: 'Former tributaries of Tarim River' }
        ],
        
        features: [
            { name: 'Tarim River', type: 'River', coordinates: [40.5, 84.0], description: 'Longest inland river, disappears in desert' },
            { name: 'Lop Nur', type: 'Dry lake', coordinates: [40.17, 90.25], description: 'Former lake, nuclear test site' },
            { name: 'Niya Ruins', type: 'Archaeological', coordinates: [37.0, 82.7], description: 'Ancient Silk Road city' },
            { name: 'Mummies of Tarim', type: 'Archaeological', coordinates: [39.5, 88.0], description: 'Caucasian mummies 4,000 years old' }
        ],
        
        oases: [
            { name: 'Kashgar', coordinates: [39.47, 76.0], country: 'China', population: 710000 },
            { name: 'Hotan', coordinates: [37.1, 79.93], country: 'China', population: 400000 },
            { name: 'Turpan', coordinates: [42.95, 89.17], country: 'China', population: 650000 }
        ],
        
        cities: [
            { name: 'Kashgar', coordinates: [39.47, 76.0], country: 'China', population: 710000 },
            { name: 'Hotan', coordinates: [37.1, 79.93], country: 'China', population: 400000 },
            { name: 'Aksu', coordinates: [41.17, 80.27], country: 'China', population: 600000 },
            { name: 'Korla', coordinates: [41.76, 86.15], country: 'China', population: 550000 }
        ],
        
        biodiversity: {
            plants: ['Tamarisk', 'Populus Euphratica (desert poplar)', 'Saxaul', 'Nitraria', 'Calligonum'],
            animals: ['Bactrian Camel', 'Goitered Gazelle', 'Wild Boar (in oases)', 'Long-eared Jerboa', 'Sand Grouse'],
            endangeredSpecies: ['Wild Bactrian Camel (critically endangered, <1000 left)', 'Tarim Red Deer']
        },
        
        humanLife: {
            peoples: ['Uyghur', 'Han Chinese', 'Tajik'],
            lifestyle: 'Oasis agriculture, trade, energy industry',
            population: '~10 million in Tarim Basin'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Major oil fields under the desert' },
            { label: 'Cotton', value: 'Irrigated cotton farming' },
            { label: 'Jade', value: 'Hotan famous for white jade' },
            { label: 'Fruit', value: 'Grapes, melons from oases' },
            { label: 'Trade', value: 'New Silk Road (Belt and Road Initiative)' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Oases shrinking, Tarim River drying' },
            { label: 'Water Scarcity', value: 'Glacial melt and overuse' },
            { label: 'Nuclear Legacy', value: 'Lop Nur test site contamination' },
            { label: 'Sand Storms', value: 'Massive dust storms reaching Beijing' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Northern and Southern routes skirted desert' },
            { label: 'Lost Cities', value: 'Niya, Loulan buried by shifting sands' },
            { label: 'Tarim Mummies', value: '4,000-year-old Caucasian remains' },
            { label: 'Buddhism Spread', value: 'Caves and monasteries along edges' }
        ],
        
        funFacts: [
            'Name may mean "you can go in but you cannot come out"',
            'Second-largest shifting sand desert in the world',
            'Contains mummies with European features 4,000 years old',
            'The Tarim River disappears completely into the sand',
            'Has dunes over 300 meters high',
            'Wild Bactrian camels here are a separate species from domesticated ones',
            'Oil pipelines now cross the desert'
        ],
        
        journeyWaypoints: [
            { name: 'Kashgar Bazaar', coordinates: [39.47, 76.0], description: 'Silk Road trading city' },
            { name: 'Hotan Jade Market', coordinates: [37.1, 79.93], description: 'Famous jade oasis' },
            { name: 'Central Desert', coordinates: [38.5, 82.0], description: 'Sea of shifting dunes' },
            { name: 'Niya Ruins', coordinates: [37.0, 82.7], description: 'Sand-buried Silk Road city' },
            { name: 'Lop Nur', coordinates: [40.17, 90.25], description: 'Dried lake, former nuclear site' }
        ]
    },

    // ========================================
    // #17 - THAR DESERT
    // ========================================
    {
        id: 'thar-desert',
        name: 'Thar Desert',
        countries: [
            { name: 'India', code: 'IN' },
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 238700,
        rank: 17,
        coordinates: [27.0, 71.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Thar Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [68.0, 23.0], [68.0, 30.0], [76.0, 30.0], [76.0, 23.0], [68.0, 23.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '52°C',
            summerTempAvg: '42°C',
            winterTempMin: '0°C',
            winterTempAvg: '15°C',
            maxRecorded: '53°C',
            annualRainfall: '100-500mm',
            rainyMonths: 'July-September (monsoon fringes)'
        },
        
        formation: {
            type: 'Subtropical monsoon desert',
            causes: ['Monsoon shadow', 'Aravalli Range blocks moisture', 'High evaporation'],
            age: '4,000-10,000 years'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Linear and crescent dunes up to 150m' },
            { name: 'Rocky Terrain', description: 'Ancient rock outcrops' },
            { name: 'Playas', description: 'Salt flats called ranns' },
            { name: 'Fossil Dunes', description: 'Stabilized ancient dunes' }
        ],
        
        features: [
            { name: 'Rann of Kutch', type: 'Salt marsh', coordinates: [23.83, 69.83], description: 'Seasonal salt flat, flamingo habitat' },
            { name: 'Jaisalmer Fort', type: 'Fort', coordinates: [26.91, 70.91], description: 'Golden sandstone desert fortress' },
            { name: 'Sam Sand Dunes', type: 'Dunes', coordinates: [26.9, 70.53], description: 'Popular tourist dunes near Jaisalmer' },
            { name: 'Desert National Park', type: 'Park', coordinates: [26.7, 70.5], description: 'Great Indian Bustard habitat' }
        ],
        
        oases: [
            { name: 'Jaisalmer', coordinates: [26.91, 70.91], country: 'India', population: 80000 },
            { name: 'Bikaner', coordinates: [28.02, 73.31], country: 'India', population: 650000 }
        ],
        
        cities: [
            { name: 'Jodhpur', coordinates: [26.29, 73.02], country: 'India', population: 1130000 },
            { name: 'Jaisalmer', coordinates: [26.91, 70.91], country: 'India', population: 80000 },
            { name: 'Bikaner', coordinates: [28.02, 73.31], country: 'India', population: 650000 },
            { name: 'Jaipur', coordinates: [26.91, 75.79], country: 'India', population: 3100000 },
            { name: 'Hyderabad (Sindh)', coordinates: [25.4, 68.37], country: 'Pakistan', population: 1700000 }
        ],
        
        biodiversity: {
            plants: ['Khejri Tree', 'Rohida', 'Ber', 'Kair', 'Phog', 'Indian Mesquite'],
            animals: ['Great Indian Bustard', 'Indian Gazelle (Chinkara)', 'Desert Fox', 'Blackbuck', 'Spiny-tailed Lizard', 'Indian Wild Ass'],
            endangeredSpecies: ['Great Indian Bustard (critically endangered, <150 left)', 'Indian Wild Ass', 'Caracal']
        },
        
        humanLife: {
            peoples: ['Rajasthani', 'Sindhi', 'Bishnoi', 'Bhil'],
            lifestyle: 'Camel herding, agriculture, handicrafts',
            population: '~30 million in Thar region'
        },
        
        economy: [
            { label: 'Agriculture', value: 'Indira Gandhi Canal irrigation' },
            { label: 'Mining', value: 'Limestone, gypsum, phosphate, oil' },
            { label: 'Tourism', value: 'Jaisalmer, camel safaris' },
            { label: 'Handicrafts', value: 'Textiles, pottery, woodwork' },
            { label: 'Renewable Energy', value: 'Solar and wind farms' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Expanding eastward toward Delhi' },
            { label: 'Water Scarcity', value: 'Groundwater depletion' },
            { label: 'Overgrazing', value: 'Too many livestock' },
            { label: 'Encroachment', value: 'Agriculture expanding into wildlife areas' }
        ],
        
        historicalImportance: [
            { label: 'Indus Valley Connection', value: 'Ancient civilization extended here' },
            { label: 'Rajput Kingdoms', value: 'Desert fortresses and palaces' },
            { label: 'Trade Routes', value: 'Spice and silk trade caravans' },
            { label: 'Partition', value: 'India-Pakistan border crosses desert' }
        ],
        
        funFacts: [
            'Most densely populated desert in the world',
            'The Rann of Kutch becomes a white salt desert in summer',
            'Jaisalmer is called the "Golden City" for its yellow sandstone',
            'The Bishnoi people have protected wildlife for 500 years',
            'Temperatures can drop to freezing on winter nights',
            'Camels here have been bred for 5,000 years',
            'The Great Indian Bustard is one of the heaviest flying birds'
        ],
        
        journeyWaypoints: [
            { name: 'Jaipur', coordinates: [26.91, 75.79], description: 'Pink City gateway' },
            { name: 'Jodhpur', coordinates: [26.29, 73.02], description: 'Blue City at desert edge' },
            { name: 'Jaisalmer', coordinates: [26.91, 70.91], description: 'Golden fort in the sand' },
            { name: 'Sam Sand Dunes', coordinates: [26.9, 70.53], description: 'Golden dune sea' },
            { name: 'Rann of Kutch', coordinates: [23.83, 69.83], description: 'White salt desert' }
        ]
    },

    // ========================================
    // #18 - GIBSON DESERT
    // ========================================
    {
        id: 'gibson-desert',
        name: 'Gibson Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        area: 155000,
        rank: 18,
        coordinates: [-24.5, 124.5],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Gibson Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [121.0, -27.0], [121.0, -22.0], [128.0, -22.0], [128.0, -27.0], [121.0, -27.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '5°C',
            winterTempAvg: '18°C',
            maxRecorded: '48°C',
            annualRainfall: '200-250mm',
            rainyMonths: 'Summer thunderstorms (variable)'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Subtropical high pressure', 'Continental interior', 'Great Western Plateau'],
            age: '1-2 million years'
        },
        
        landforms: [
            { name: 'Sand Plains', description: 'Laterite-covered ancient plains' },
            { name: 'Dune Fields', description: 'Linear and longitudinal dunes' },
            { name: 'Spinifex Grasslands', description: 'Vast areas of hummock grass' },
            { name: 'Rocky Outcrops', description: 'Isolated hills and ranges' }
        ],
        
        features: [
            { name: 'Gibson Desert Nature Reserve', type: 'Reserve', coordinates: [-24.5, 124.5], description: 'Largest reserve in Western Australia' },
            { name: 'Lake Disappointment', type: 'Salt lake', coordinates: [-23.5, 122.8], description: 'Large ephemeral salt lake' },
            { name: 'Alfred and Marie Range', type: 'Hills', coordinates: [-24.0, 125.0], description: 'Isolated rocky hills' },
            { name: 'Durba Hills', type: 'Hills', coordinates: [-24.4, 123.8], description: 'Spring-fed refuge' }
        ],
        
        oases: [
            { name: 'Durba Springs', coordinates: [-24.4, 123.8], country: 'Australia', population: 0 }
        ],
        
        cities: [
            { name: 'Newman', coordinates: [-23.36, 119.73], country: 'Australia', population: 5500 },
            { name: 'Wiluna', coordinates: [-26.59, 120.23], country: 'Australia', population: 700 }
        ],
        
        biodiversity: {
            plants: ['Spinifex', 'Mulga', 'Desert Bloodwood', 'Acacia', 'Desert Oak'],
            animals: ['Bilby', 'Marsupial Mole', 'Thorny Devil', 'Perentie', 'Red Kangaroo', 'Dingo', 'Princess Parrot'],
            endangeredSpecies: ['Greater Bilby (vulnerable)', 'Marsupial Mole (endangered)', 'Woma Python']
        },
        
        humanLife: {
            peoples: ['Pintupi', 'Ngaanyatjarra', 'Martu'],
            lifestyle: 'Traditional Aboriginal lands, very sparse population',
            population: '~500 in entire desert'
        },
        
        economy: [
            { label: 'Mining', value: 'Gold, iron ore on edges' },
            { label: 'Pastoral', value: 'Very limited cattle stations' },
            { label: 'Conservation', value: 'Indigenous ranger programs' }
        ],
        
        environmentalIssues: [
            { label: 'Feral Animals', value: 'Cats, foxes, camels threatening wildlife' },
            { label: 'Fire Regime', value: 'Changed burning patterns' },
            { label: 'Climate Change', value: 'Increasing drought' },
            { label: 'Mining Exploration', value: 'Potential habitat disruption' }
        ],
        
        historicalImportance: [
            { label: 'Aboriginal Dreaming', value: '40,000+ years of habitation' },
            { label: 'Alfred Gibson', value: 'Explorer who perished here 1874' },
            { label: 'Last Nomads', value: 'Pintupi Nine contacted 1984' },
            { label: 'Canning Stock Route', value: 'Historic cattle drove through region' }
        ],
        
        funFacts: [
            'Named after Alfred Gibson who died exploring it in 1874',
            'The Pintupi Nine were the last Aboriginal people to leave the desert (1984)',
            'One of the most remote places on Earth',
            'Contains creatures found nowhere else',
            'Aboriginal people have continuous culture here for 40,000 years',
            'The marsupial mole "swims" through sand',
            'Receives almost no visitors except researchers'
        ],
        
        journeyWaypoints: [
            { name: 'Wiluna Edge', coordinates: [-26.59, 120.23], description: 'Last outpost before desert' },
            { name: 'Lake Disappointment', coordinates: [-23.5, 122.8], description: 'Named by frustrated explorer' },
            { name: 'Central Gibson', coordinates: [-24.5, 124.5], description: 'Heart of the reserve' },
            { name: 'Durba Springs', coordinates: [-24.4, 123.8], description: 'Rare permanent water' },
            { name: 'Eastern Edge', coordinates: [-24.0, 128.0], description: 'Transition to Great Sandy' }
        ]
    },

    // ========================================
    // #19 - SIMPSON DESERT
    // ========================================
    {
        id: 'simpson-desert',
        name: 'Simpson Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        area: 143000,
        rank: 19,
        coordinates: [-25.0, 137.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Simpson Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [134.0, -28.0], [134.0, -23.0], [141.0, -23.0], [141.0, -28.0], [134.0, -28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '47°C',
            summerTempAvg: '38°C',
            winterTempMin: '-2°C',
            winterTempAvg: '15°C',
            maxRecorded: '49°C',
            annualRainfall: '150mm',
            rainyMonths: 'Sporadic, summer storms'
        },
        
        formation: {
            type: 'Sand ridge desert',
            causes: ['Ancient dried seabed', 'Wind erosion', 'Subtropical climate'],
            age: '~1 million years (current dune form)'
        },
        
        landforms: [
            { name: 'Parallel Sand Dunes', description: '1,100+ dunes running north-south, up to 200km long' },
            { name: 'Salt Lakes', description: 'Ephemeral salt pans including Lake Eyre' },
            { name: 'Gibber Plains', description: 'Stone-covered flats' },
            { name: 'Claypans', description: 'Cracked clay surfaces' }
        ],
        
        features: [
            { name: 'Big Red (Nappanerica)', type: 'Dune', coordinates: [-26.02, 138.95], description: 'Tallest dune at 40m, famous landmark' },
            { name: 'Lake Eyre', type: 'Salt lake', coordinates: [-28.37, 137.37], description: 'Australias lowest point, rarely fills' },
            { name: 'Poeppel Corner', type: 'Survey marker', coordinates: [-26.0, 138.0], description: 'Three-state corner post' },
            { name: 'French Line', type: 'Track', coordinates: [-25.5, 136.5], description: 'Historic survey track' }
        ],
        
        oases: [
            { name: 'Dalhousie Springs', coordinates: [-26.43, 135.52], country: 'Australia', population: 0 },
            { name: 'Purni Bore', coordinates: [-26.1, 136.8], country: 'Australia', population: 0 }
        ],
        
        cities: [
            { name: 'Birdsville', coordinates: [-25.9, 139.35], country: 'Australia', population: 140 },
            { name: 'Oodnadatta', coordinates: [-27.55, 135.45], country: 'Australia', population: 270 },
            { name: 'Mount Isa', coordinates: [-20.73, 139.49], country: 'Australia', population: 18000 }
        ],
        
        biodiversity: {
            plants: ['Spinifex', 'Sandhill Canegrass', 'Acacia', 'Grevillea', 'Desert Pea'],
            animals: ['Kowari', 'Mulga Ant', 'Bearded Dragon', 'Sand Goanna', 'Dingo', 'Wedge-tailed Eagle', 'Budgerigar'],
            endangeredSpecies: ['Kowari (vulnerable)', 'Dusky Hopping Mouse', 'Night Parrot (critically endangered)']
        },
        
        humanLife: {
            peoples: ['Wangkangurru', 'Arrernte', 'Lower Southern Arrernte'],
            lifestyle: 'Traditional lands, cattle stations on edges, tourism',
            population: '~500 permanent residents'
        },
        
        economy: [
            { label: 'Tourism', value: '4WD desert crossings, Birdsville Races' },
            { label: 'Cattle', value: 'Stations on edges' },
            { label: 'Gas', value: 'Moomba gas fields on edge' },
            { label: 'Adventure', value: 'Desert racing events' }
        ],
        
        environmentalIssues: [
            { label: 'Feral Animals', value: 'Rabbits, cats, foxes' },
            { label: 'Vehicle Damage', value: '4WD tracks damaging dunes' },
            { label: 'Climate Change', value: 'Even more extreme weather' },
            { label: 'Rare Species', value: 'Isolated populations vulnerable' }
        ],
        
        historicalImportance: [
            { label: 'Aboriginal Trade', value: 'Pituri (native tobacco) trade route' },
            { label: 'Exploration', value: 'Charles Sturt expedition 1845' },
            { label: 'Survey Work', value: 'French Line surveyed 1880s' },
            { label: 'First Crossing', value: 'Ted Colson first vehicle crossing 1936' }
        ],
        
        funFacts: [
            'Has the worlds longest parallel sand dunes',
            'Big Red is climbed by thousands of 4WD enthusiasts',
            'Birdsville Races attract 6,000 people to a town of 140',
            'Lake Eyre has only filled completely 4 times in 150 years',
            'When rain comes, millions of wildflowers bloom',
            'Named after Alfred Allen Simpson, geographer',
            'The dunes are so uniform they were used to test Mars rover designs'
        ],
        
        journeyWaypoints: [
            { name: 'Dalhousie Springs', coordinates: [-26.43, 135.52], description: 'Hot artesian springs' },
            { name: 'French Line Start', coordinates: [-26.5, 135.5], description: 'Beginning of famous track' },
            { name: 'Poeppel Corner', coordinates: [-26.0, 138.0], description: 'Three state junction' },
            { name: 'Big Red', coordinates: [-26.02, 138.95], description: 'Iconic 40m dune' },
            { name: 'Birdsville', coordinates: [-25.9, 139.35], description: 'Famous outback town' }
        ]
    },

    // ========================================
    // #20 - ATACAMA DESERT
    // ========================================
    {
        id: 'atacama-desert',
        name: 'Atacama Desert',
        countries: [
            { name: 'Chile', code: 'CL' },
            { name: 'Peru', code: 'PE' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        desertType: 'coastal',
        area: 105000,
        rank: 20,
        coordinates: [-24.5, -69.25],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Atacama Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-71.0, -30.0], [-71.0, -18.0], [-67.0, -18.0], [-67.0, -30.0], [-71.0, -30.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '30°C',
            summerTempAvg: '22°C',
            winterTempMin: '-5°C (altitude)',
            winterTempAvg: '14°C',
            maxRecorded: '40°C',
            annualRainfall: '<1mm (some areas have never recorded rain)',
            rainyMonths: 'None (extremely rare events)'
        },
        
        formation: {
            type: 'Coastal cold current desert',
            causes: ['Humboldt Current cold water', 'Andes rain shadow', 'Pacific high pressure', 'Double rain shadow'],
            age: '150 million years (may be oldest desert on Earth)'
        },
        
        landforms: [
            { name: 'Salt Flats', description: 'Salar de Atacama, third largest in world' },
            { name: 'Volcanoes', description: 'High Andes volcanoes along border' },
            { name: 'Geysers', description: 'El Tatio geyser field' },
            { name: 'Valleys', description: 'Valle de la Luna (Valley of the Moon)' }
        ],
        
        features: [
            { name: 'Salar de Atacama', type: 'Salt flat', coordinates: [-23.5, -68.2], description: 'Third largest salt flat, lithium reserves' },
            { name: 'Valle de la Luna', type: 'Valley', coordinates: [-22.92, -68.28], description: 'Moon-like landscape' },
            { name: 'El Tatio Geysers', type: 'Geothermal', coordinates: [-22.33, -68.01], description: 'Highest geyser field in world' },
            { name: 'ALMA Observatory', type: 'Observatory', coordinates: [-23.02, -67.75], description: 'Worlds largest radio telescope array' },
            { name: 'Hand of the Desert', type: 'Sculpture', coordinates: [-24.16, -70.16], description: 'Giant hand sculpture' }
        ],
        
        oases: [
            { name: 'San Pedro de Atacama', coordinates: [-22.91, -68.2], country: 'Chile', population: 5000 },
            { name: 'Pica', coordinates: [-20.49, -69.33], country: 'Chile', population: 3500 }
        ],
        
        cities: [
            { name: 'Antofagasta', coordinates: [-23.65, -70.4], country: 'Chile', population: 360000 },
            { name: 'Calama', coordinates: [-22.45, -68.93], country: 'Chile', population: 150000 },
            { name: 'San Pedro de Atacama', coordinates: [-22.91, -68.2], country: 'Chile', population: 5000 },
            { name: 'Iquique', coordinates: [-20.21, -70.15], country: 'Chile', population: 190000 },
            { name: 'Copiapó', coordinates: [-27.37, -70.33], country: 'Chile', population: 160000 }
        ],
        
        biodiversity: {
            plants: ['Llareta (cushion plant)', 'Tamarugo', 'Cactus species', 'Salt-tolerant algae', 'Flowering Desert plants'],
            animals: ['Vicuña', 'Viscacha', 'Andean Flamingo', 'Chinchilla', 'Atacama Toad', 'Darwin\'s Leaf-eared Mouse'],
            endangeredSpecies: ['Andean Flamingo (vulnerable)', 'Chinchilla (critically endangered)', 'Tamarugo']
        },
        
        humanLife: {
            peoples: ['Atacameño (Lickan Antay)', 'Aymara', 'Quechua'],
            lifestyle: 'Mining communities, tourism, traditional villages',
            population: '~1 million in Atacama region'
        },
        
        economy: [
            { label: 'Copper Mining', value: 'Chuquicamata, largest open-pit copper mine' },
            { label: 'Lithium', value: '40% of world lithium reserves' },
            { label: 'Astronomy', value: 'Multiple world-class observatories' },
            { label: 'Tourism', value: 'San Pedro, stargazing, geysers' },
            { label: 'Nitrates', value: 'Historic "white gold" mining' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Mining using scarce water' },
            { label: 'Mining Impact', value: 'Landscape and pollution effects' },
            { label: 'Lithium Extraction', value: 'Evaporation depleting water' },
            { label: 'Climate Change', value: 'Even less rainfall predicted' }
        ],
        
        historicalImportance: [
            { label: 'Chinchorro Mummies', value: 'Oldest mummies in world, 7,000 years' },
            { label: 'Inca Road', value: 'Qhapaq Ñan crossed Atacama' },
            { label: 'War of the Pacific', value: 'Chile fought for nitrate-rich region' },
            { label: 'Nitrate Era', value: 'Ghost towns from nitrate boom 1880s-1930s' }
        ],
        
        funFacts: [
            'Driest non-polar place on Earth - some weather stations have NEVER recorded rain',
            'Used by NASA to test Mars rovers due to similarity',
            'Some soil has no detectable life at all',
            'Clearest skies on Earth - 330+ clear nights per year',
            'Contains worlds largest copper mine (Chuquicamata)',
            'Chinchorro mummies predate Egyptian mummies by 2,000 years',
            'Desierto Florido - desert blooms with flowers once a decade when rain falls',
            'May be 150 million years old, oldest desert on Earth'
        ],
        
        journeyWaypoints: [
            { name: 'San Pedro de Atacama', coordinates: [-22.91, -68.2], description: 'Tourism hub and oasis town' },
            { name: 'Valle de la Luna', coordinates: [-22.92, -68.28], description: 'Moon Valley at sunset' },
            { name: 'El Tatio Geysers', coordinates: [-22.33, -68.01], description: 'Dawn geyser eruptions' },
            { name: 'Salar de Atacama', coordinates: [-23.5, -68.2], description: 'Flamingos on salt flat' },
            { name: 'ALMA Observatory', coordinates: [-23.02, -67.75], description: 'Worlds greatest radio telescope' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_2;
}
