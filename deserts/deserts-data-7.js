/* ==========================================
   DESERTS DATA - FILE 7 OF 10
   Deserts 61-70
   ========================================== */

const DESERTS_DATA_7 = [
    // ========================================
    // #61 - TURKANA DESERT
    // ========================================
    {
        id: 'turkana-desert',
        name: 'Turkana Desert',
        countries: [
            { name: 'Kenya', code: 'KE' },
            { name: 'Ethiopia', code: 'ET' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 77000,
        rank: 61,
        coordinates: [3.5, 36.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Turkana Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [34.5, 2.0], [34.5, 5.0], [37.5, 5.0], [37.5, 2.0], [34.5, 2.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '22°C',
            winterTempAvg: '30°C',
            maxRecorded: '48°C',
            annualRainfall: '150-300mm',
            rainyMonths: 'March-May, October-November (unpredictable)'
        },
        
        formation: {
            type: 'Rift valley desert',
            causes: ['East African Rift', 'Rain shadow of Ethiopian Highlands', 'Lake Turkana evaporation'],
            age: '4 million years (rift formation)'
        },
        
        landforms: [
            { name: 'Lake Turkana', description: 'Worlds largest permanent desert lake' },
            { name: 'Volcanic Terrain', description: 'Lava flows and volcanic cones' },
            { name: 'Sand Plains', description: 'Open sandy expanses' },
            { name: 'Rocky Outcrops', description: 'Ancient rock formations with fossils' }
        ],
        
        features: [
            { name: 'Lake Turkana', type: 'Lake', coordinates: [3.5, 36.1], description: 'Jade Sea, largest desert lake on Earth' },
            { name: 'Sibiloi National Park', type: 'Park', coordinates: [3.95, 36.33], description: 'Cradle of Mankind, UNESCO site' },
            { name: 'Central Island', type: 'Volcanic', coordinates: [3.5, 36.04], description: 'Active volcano in lake' },
            { name: 'Koobi Fora', type: 'Fossil site', coordinates: [3.95, 36.18], description: 'Famous hominin fossil site' },
            { name: 'South Island', type: 'Volcanic', coordinates: [2.63, 36.6], description: 'Crocodile breeding ground' }
        ],
        
        oases: [
            { name: 'Loiyangalani', coordinates: [2.75, 36.72], country: 'Kenya', population: 5000 },
            { name: 'Kalokol', coordinates: [3.52, 35.85], country: 'Kenya', population: 6000 }
        ],
        
        cities: [
            { name: 'Lodwar', coordinates: [3.12, 35.6], country: 'Kenya', population: 83000 },
            { name: 'Lokichoggio', coordinates: [4.2, 34.35], country: 'Kenya', population: 25000 },
            { name: 'Loiyangalani', coordinates: [2.75, 36.72], country: 'Kenya', population: 5000 }
        ],
        
        biodiversity: {
            plants: ['Doum Palm', 'Acacia', 'Desert Date', 'Salvadora', 'Desert grasses'],
            animals: ['Nile Crocodile', 'Nile Perch', 'Flamingos', 'Grevy\'s Zebra', 'Reticulated Giraffe', 'Lions', 'Cheetah'],
            endangeredSpecies: ['Grevy\'s Zebra (endangered)', 'African Wild Dog', 'Reticulated Giraffe (endangered)']
        },
        
        humanLife: {
            peoples: ['Turkana', 'El Molo', 'Rendille', 'Samburu', 'Gabra'],
            lifestyle: 'Nomadic herding, fishing, traditional pastoralism',
            population: '~1 million Turkana people'
        },
        
        economy: [
            { label: 'Pastoralism', value: 'Goats, camels, cattle herding' },
            { label: 'Fishing', value: 'Lake Turkana fisheries' },
            { label: 'Oil', value: 'Oil discovered 2012, controversial development' },
            { label: 'Tourism', value: 'Adventure tourism, fossil sites' },
            { label: 'Wind Power', value: 'Lake Turkana Wind Power project' }
        ],
        
        environmentalIssues: [
            { label: 'Lake Level Drop', value: 'Ethiopian dam reducing inflow' },
            { label: 'Climate Change', value: 'Increasing drought frequency' },
            { label: 'Conflict', value: 'Tribal conflicts over resources' },
            { label: 'Oil Development', value: 'Environmental concerns over extraction' }
        ],
        
        historicalImportance: [
            { label: 'Cradle of Mankind', value: 'Oldest human fossils found here (Turkana Boy)' },
            { label: 'Human Evolution', value: 'Multiple hominin species discovered' },
            { label: 'Lake History', value: 'Lake was much larger in past' },
            { label: 'Richard Leakey', value: 'Famous paleoanthropologist worked here' }
        ],
        
        funFacts: [
            'Lake Turkana is called the Jade Sea for its green color',
            'Contains crocodiles 300km from any other water',
            'Turkana Boy is the most complete early human skeleton found',
            'The El Molo are one of the smallest tribes in Africa (~500 people)',
            'Winds can reach 100 km/h, powering Africas largest wind farm',
            'Lake has no outlet - all water evaporates',
            'Three active volcanoes exist in and around the lake',
            'Fossils here changed our understanding of human evolution'
        ],
        
        journeyWaypoints: [
            { name: 'Lodwar', coordinates: [3.12, 35.6], description: 'Regional capital' },
            { name: 'Lake Shore', coordinates: [3.5, 36.0], description: 'Jade Sea beaches' },
            { name: 'Sibiloi', coordinates: [3.95, 36.33], description: 'Fossil hunting grounds' },
            { name: 'Central Island', coordinates: [3.5, 36.04], description: 'Volcanic island' },
            { name: 'Loiyangalani', coordinates: [2.75, 36.72], description: 'El Molo village' }
        ]
    },

    // ========================================
    // #62 - NYIRI DESERT (TARU DESERT)
    // ========================================
    {
        id: 'nyiri-desert',
        name: 'Nyiri Desert',
        countries: [
            { name: 'Kenya', code: 'KE' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 14000,
        rank: 62,
        coordinates: [-2.5, 38.5],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Nyiri Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [37.8, -3.2], [37.8, -1.8], [39.2, -1.8], [39.2, -3.2], [37.8, -3.2]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '32°C',
            winterTempMin: '18°C',
            winterTempAvg: '25°C',
            maxRecorded: '42°C',
            annualRainfall: '250-400mm',
            rainyMonths: 'March-May, October-December'
        },
        
        formation: {
            type: 'Rain shadow semi-desert',
            causes: ['Rain shadow of coastal hills', 'Seasonal drought', 'Poor soil water retention'],
            age: 'Recent formation due to deforestation'
        },
        
        landforms: [
            { name: 'Thornbush Plains', description: 'Vast Commiphora and Acacia scrubland' },
            { name: 'Red Sandy Soils', description: 'Iron-rich sandy terrain' },
            { name: 'Seasonal Rivers', description: 'Dry most of year' },
            { name: 'Rocky Hills', description: 'Scattered inselbergs' }
        ],
        
        features: [
            { name: 'Tsavo East', type: 'National Park', coordinates: [-2.8, 38.7], description: 'Famous for red elephants' },
            { name: 'Tsavo West', type: 'National Park', coordinates: [-2.9, 38.2], description: 'Mzima Springs oasis' },
            { name: 'Mzima Springs', type: 'Springs', coordinates: [-2.95, 38.03], description: 'Crystal clear underwater viewing' },
            { name: 'Yatta Plateau', type: 'Geological', coordinates: [-2.3, 38.1], description: 'Worlds longest lava flow' },
            { name: 'Lugards Falls', type: 'Rapids', coordinates: [-3.0, 38.65], description: 'Galana River rapids' }
        ],
        
        oases: [
            { name: 'Voi', coordinates: [-3.39, 38.56], country: 'Kenya', population: 20000 },
            { name: 'Mtito Andei', coordinates: [-2.69, 38.17], country: 'Kenya', population: 5000 }
        ],
        
        cities: [
            { name: 'Voi', coordinates: [-3.39, 38.56], country: 'Kenya', population: 20000 },
            { name: 'Taveta', coordinates: [-3.4, 37.68], country: 'Kenya', population: 15000 },
            { name: 'Mombasa', coordinates: [-4.05, 39.67], country: 'Kenya', population: 1200000 }
        ],
        
        biodiversity: {
            plants: ['Commiphora', 'Acacia', 'Baobab', 'Desert Rose', 'Aloe'],
            animals: ['African Elephant', 'Lion', 'Leopard', 'Buffalo', 'Fringe-eared Oryx', 'Lesser Kudu', 'Gerenuk'],
            endangeredSpecies: ['African Elephant (vulnerable)', 'Black Rhino (critically endangered)', 'Wild Dog']
        },
        
        humanLife: {
            peoples: ['Taita', 'Kamba', 'Maasai', 'Orma'],
            lifestyle: 'Farming on edges, safari tourism, ranching',
            population: '~500,000 in Tsavo region'
        },
        
        economy: [
            { label: 'Tourism', value: 'Major safari destination' },
            { label: 'Sisal', value: 'Commercial sisal farming' },
            { label: 'Ranching', value: 'Cattle ranches on edges' },
            { label: 'Railway', value: 'Historic Lunatic Express route' }
        ],
        
        environmentalIssues: [
            { label: 'Poaching', value: 'Elephant and rhino poaching crisis' },
            { label: 'Human-Wildlife Conflict', value: 'Elephants raiding farms' },
            { label: 'Drought', value: 'Regular severe droughts' },
            { label: 'Deforestation', value: 'Charcoal burning' }
        ],
        
        historicalImportance: [
            { label: 'Man-Eaters of Tsavo', value: 'Famous lions that killed 135 workers in 1898' },
            { label: 'Railway Construction', value: 'Lunatic Express history' },
            { label: 'Colonial Safari', value: 'Original big game hunting area' },
            { label: 'Conservation', value: 'Pioneering anti-poaching efforts' }
        ],
        
        funFacts: [
            'The Man-Eaters of Tsavo killed 135 railway workers in 1898',
            'Elephants here appear red from dust-bathing in red soil',
            'Tsavo is larger than Jamaica - one of worlds largest parks',
            'The Yatta Plateau is the longest lava flow on Earth (290km)',
            'Mzima Springs produces 250 million liters of water daily',
            'You can watch hippos underwater at Mzima Springs',
            'The name Nyiri means "dry place" in the local language',
            'Black rhinos were nearly extinct here but are recovering'
        ],
        
        journeyWaypoints: [
            { name: 'Voi Gate', coordinates: [-3.39, 38.56], description: 'Main park entrance' },
            { name: 'Mudanda Rock', coordinates: [-3.1, 38.6], description: 'Natural dam, elephant gathering' },
            { name: 'Mzima Springs', coordinates: [-2.95, 38.03], description: 'Crystal springs oasis' },
            { name: 'Yatta Plateau', coordinates: [-2.3, 38.1], description: 'Worlds longest lava flow' },
            { name: 'Galana River', coordinates: [-3.0, 38.65], description: 'Lugards Falls' }
        ]
    },

    // ========================================
    // #63 - RANGIPO DESERT
    // ========================================
    {
        id: 'rangipo-desert',
        name: 'Rangipo Desert',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Australia',
        desertType: 'cold',
        area: 80,
        rank: 63,
        coordinates: [-39.35, 175.65],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Rangipo Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [175.5, -39.45], [175.5, -39.25], [175.8, -39.25], [175.8, -39.45], [175.5, -39.45]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '22°C',
            summerTempAvg: '15°C',
            winterTempMin: '-15°C',
            winterTempAvg: '-2°C',
            maxRecorded: '28°C',
            annualRainfall: '1000-1500mm (but poor retention)',
            rainyMonths: 'Year-round precipitation but drains quickly'
        },
        
        formation: {
            type: 'Volcanic desert',
            causes: ['Volcanic pumice soil cannot hold water', 'High altitude exposure', 'Extreme weather'],
            age: '~2,000 years (since last major eruption)'
        },
        
        landforms: [
            { name: 'Pumice Plains', description: 'Flat volcanic gravel fields' },
            { name: 'Volcanic Cones', description: 'Mount Ruapehu, Ngauruhoe, Tongariro' },
            { name: 'Lava Fields', description: 'Recent and ancient lava flows' },
            { name: 'Alpine Tussock', description: 'Sparse grass vegetation' }
        ],
        
        features: [
            { name: 'Mount Ruapehu', type: 'Volcano', coordinates: [-39.28, 175.57], description: 'Active volcano, 2,797m, ski fields' },
            { name: 'Mount Ngauruhoe', type: 'Volcano', coordinates: [-39.16, 175.63], description: 'Mount Doom in Lord of the Rings' },
            { name: 'Tongariro Crossing', type: 'Trail', coordinates: [-39.13, 175.65], description: 'Best day hike in New Zealand' },
            { name: 'Desert Road', type: 'Highway', coordinates: [-39.35, 175.75], description: 'Iconic highway through desert' },
            { name: 'Waihohonu Hut', type: 'Hut', coordinates: [-39.27, 175.7], description: 'Historic tramping hut' }
        ],
        
        oases: [],
        
        cities: [
            { name: 'Turangi', coordinates: [-39.0, 175.81], country: 'New Zealand', population: 3000 },
            { name: 'Ohakune', coordinates: [-39.42, 175.41], country: 'New Zealand', population: 1200 },
            { name: 'Waiouru', coordinates: [-39.48, 175.67], country: 'New Zealand', population: 750 }
        ],
        
        biodiversity: {
            plants: ['Red Tussock', 'Moraine Coprosma', 'Alpine Daisies', 'Snow Totara', 'Vegetable Sheep'],
            animals: ['Blue Duck (Whio)', 'Kea', 'North Island Brown Kiwi', 'Long-tailed Cuckoo', 'Falcon'],
            endangeredSpecies: ['Blue Duck (endangered)', 'North Island Brown Kiwi (vulnerable)', 'Kea (endangered)']
        },
        
        humanLife: {
            peoples: ['Māori (Ngāti Tūwharetoa)', 'European New Zealanders'],
            lifestyle: 'Tourism, military training, farming on edges',
            population: '~5,000 in surrounding area'
        },
        
        economy: [
            { label: 'Tourism', value: 'Tongariro National Park, skiing' },
            { label: 'Military', value: 'Waiouru Army Base and training' },
            { label: 'Farming', value: 'Sheep and cattle on margins' },
            { label: 'Film', value: 'Lord of the Rings filming location' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Hazard', value: 'Active volcanoes pose risk' },
            { label: 'Erosion', value: 'Wind erosion of pumice soils' },
            { label: 'Invasive Species', value: 'Possums, stoats affecting native species' },
            { label: 'Climate Change', value: 'Changing snowpack patterns' }
        ],
        
        historicalImportance: [
            { label: 'Māori Sacred', value: 'Mountains sacred to Ngāti Tūwharetoa' },
            { label: 'First National Park', value: 'New Zealands first national park, 4th in world (1887)' },
            { label: 'World Heritage', value: 'UNESCO dual World Heritage site' },
            { label: 'Lord of the Rings', value: 'Mount Doom and Mordor filming' }
        ],
        
        funFacts: [
            'Only desert in New Zealand',
            'Mount Ngauruhoe was Mount Doom in Lord of the Rings',
            'Tongariro was the 4th national park established in the world',
            'The Desert Road closes several times per year from snow',
            'Receives 1,500mm rain but pumice drains it instantly',
            'Army has trained here since WWII',
            'Māori chief Horonuku gifted the mountains to New Zealand in 1887',
            'The Tongariro Crossing is consistently rated worlds best day hike'
        ],
        
        journeyWaypoints: [
            { name: 'Desert Road', coordinates: [-39.35, 175.75], description: 'Highway through the desert' },
            { name: 'Tongariro Crossing Start', coordinates: [-39.13, 175.55], description: 'Famous hike beginning' },
            { name: 'Mount Ngauruhoe', coordinates: [-39.16, 175.63], description: 'Mount Doom' },
            { name: 'Mount Ruapehu', coordinates: [-39.28, 175.57], description: 'Active volcano' },
            { name: 'Waiouru', coordinates: [-39.48, 175.67], description: 'Army base town' }
        ]
    },

    // ========================================
    // #64 - AD-DAHNA DESERT
    // ========================================
    {
        id: 'ad-dahna-desert',
        name: 'Ad-Dahna Desert',
        countries: [
            { name: 'Saudi Arabia', code: 'SA' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 45000,
        rank: 64,
        coordinates: [24.5, 46.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Ad-Dahna Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [44.0, 22.0], [44.0, 28.0], [48.0, 28.0], [48.0, 22.0], [44.0, 22.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '42°C',
            winterTempMin: '2°C',
            winterTempAvg: '15°C',
            maxRecorded: '52°C',
            annualRainfall: '<100mm',
            rainyMonths: 'November-March (sparse)'
        },
        
        formation: {
            type: 'Sand corridor desert',
            causes: ['Connects An Nafud to Rub al Khali', 'Wind transport of sand', 'Part of Arabian Desert system'],
            age: 'Part of greater Arabian Desert system'
        },
        
        landforms: [
            { name: 'Linear Dunes', description: 'Red sand dunes running north-south' },
            { name: 'Sand Corridor', description: 'Arc connecting two major deserts' },
            { name: 'Rocky Outcrops', description: 'Exposed bedrock between dunes' },
            { name: 'Salt Flats', description: 'Sabkhas between dune ridges' }
        ],
        
        features: [
            { name: 'Red Sand Dunes', type: 'Dune field', coordinates: [24.5, 46.0], description: 'Distinctive red-orange color' },
            { name: 'Riyadh Edge', type: 'Boundary', coordinates: [24.7, 46.7], description: 'Desert reaches capital suburbs' },
            { name: 'Edge of the World', type: 'Escarpment', coordinates: [24.85, 46.22], description: 'Dramatic cliff viewpoint' },
            { name: 'Thumamah', type: 'Park', coordinates: [25.05, 46.3], description: 'National park and campground' }
        ],
        
        oases: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], country: 'Saudi Arabia', population: 7500000 }
        ],
        
        cities: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], country: 'Saudi Arabia', population: 7500000 },
            { name: 'Buraydah', coordinates: [26.33, 43.98], country: 'Saudi Arabia', population: 600000 },
            { name: 'Unayzah', coordinates: [26.08, 43.99], country: 'Saudi Arabia', population: 180000 }
        ],
        
        biodiversity: {
            plants: ['Ghaf', 'Acacia', 'Calotropis', 'Haloxylon', 'Sparse grasses'],
            animals: ['Arabian Oryx', 'Sand Gazelle', 'Rüppell\'s Fox', 'Spiny-tailed Lizard', 'Sand Cat', 'Arabian Wolf'],
            endangeredSpecies: ['Arabian Oryx (vulnerable)', 'Arabian Wolf (critically endangered)', 'Sand Cat']
        },
        
        humanLife: {
            peoples: ['Saudi Arab', 'Bedouin (historically)'],
            lifestyle: 'Urban (Riyadh), some traditional Bedouin',
            population: '~10 million (Riyadh metro)'
        },
        
        economy: [
            { label: 'Oil', value: 'Major oil fields in region' },
            { label: 'Urban Development', value: 'Riyadh expansion' },
            { label: 'Tourism', value: 'Desert camping and safaris' },
            { label: 'Agriculture', value: 'Pivot irrigation on edges' }
        ],
        
        environmentalIssues: [
            { label: 'Urban Sprawl', value: 'Riyadh expanding into desert' },
            { label: 'Water Depletion', value: 'Aquifers being depleted' },
            { label: 'Sandstorms', value: 'Frequent dust storms affect city' },
            { label: 'Climate Change', value: 'Increasing extreme heat' }
        ],
        
        historicalImportance: [
            { label: 'Trade Route', value: 'Connected Arabia via sand corridor' },
            { label: 'Bedouin Homeland', value: 'Traditional nomadic territory' },
            { label: 'Saudi Formation', value: 'Key region in Saudi unification' },
            { label: 'Modern Capital', value: 'Riyadh grew from desert oasis' }
        ],
        
        funFacts: [
            'Forms a 1,200km arc connecting An Nafud to Rub al Khali',
            'The red color comes from iron oxide coating the sand grains',
            'Riyadh, one of worlds largest cities, sits on its edge',
            'Edge of the World viewpoint drops 300m to ancient seabed',
            'Desert safari and camping is popular weekend activity',
            'Can reach capital Riyadh in under an hour from deep desert',
            'Night camping allows stargazing away from city lights',
            'Traditional Bedouin still camp here seasonally'
        ],
        
        journeyWaypoints: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], description: 'Saudi capital' },
            { name: 'Edge of the World', coordinates: [24.85, 46.22], description: 'Dramatic escarpment' },
            { name: 'Red Dunes', coordinates: [24.5, 46.0], description: 'Iconic red sand' },
            { name: 'Thumamah Park', coordinates: [25.05, 46.3], description: 'Desert camping' },
            { name: 'Southern Corridor', coordinates: [23.0, 47.0], description: 'Route to Empty Quarter' }
        ]
    },

    // ========================================
    // #65 - GURBANTÜNGGÜT DESERT
    // ========================================
    {
        id: 'gurbantunggut-desert',
        name: 'Gurbantünggüt Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 48800,
        rank: 65,
        coordinates: [45.0, 88.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Gurbantünggüt Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [84.0, 44.0], [84.0, 47.0], [92.0, 47.0], [92.0, 44.0], [84.0, 44.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '26°C',
            winterTempMin: '-40°C',
            winterTempAvg: '-20°C',
            maxRecorded: '44°C',
            annualRainfall: '70-150mm',
            rainyMonths: 'Spring and summer'
        },
        
        formation: {
            type: 'Semi-fixed dune desert',
            causes: ['Junggar Basin location', 'Tian Shan rain shadow', 'Continental climate'],
            age: 'Quaternary period formation'
        },
        
        landforms: [
            { name: 'Fixed Dunes', description: 'Vegetation-stabilized sand dunes' },
            { name: 'Semi-fixed Dunes', description: 'Partially vegetated dunes' },
            { name: 'Salt Lakes', description: 'Seasonal saline lakes' },
            { name: 'Gravel Gobi', description: 'Stone desert sections' }
        ],
        
        features: [
            { name: 'Colorful Beach', type: 'Geological', coordinates: [47.82, 86.4], description: 'Rainbow-colored Yardang formations' },
            { name: 'Kanas Lake', type: 'Lake', coordinates: [48.72, 87.0], description: 'Alpine lake on desert edge' },
            { name: 'Ghost City', type: 'Geological', coordinates: [46.73, 84.77], description: 'Wind-eroded rock formations' },
            { name: 'Karamay Oil Field', type: 'Industrial', coordinates: [45.59, 84.85], description: 'Major oil production' }
        ],
        
        oases: [
            { name: 'Karamay', coordinates: [45.59, 84.85], country: 'China', population: 450000 },
            { name: 'Altay', coordinates: [47.85, 88.14], country: 'China', population: 200000 }
        ],
        
        cities: [
            { name: 'Karamay', coordinates: [45.59, 84.85], country: 'China', population: 450000 },
            { name: 'Ürümqi', coordinates: [43.83, 87.58], country: 'China', population: 3500000 },
            { name: 'Altay', coordinates: [47.85, 88.14], country: 'China', population: 200000 }
        ],
        
        biodiversity: {
            plants: ['Haloxylon (Saxaul)', 'Tamarisk', 'Ephedra', 'Calligonum', 'Wild tulips in spring'],
            animals: ['Goitered Gazelle', 'Wild Boar', 'Golden Eagle', 'Corsac Fox', 'Great Bustard', 'Mongolian Wild Ass'],
            endangeredSpecies: ['Przewalski\'s Horse (reintroduced nearby)', 'Goitered Gazelle', 'Great Bustard']
        },
        
        humanLife: {
            peoples: ['Kazakh', 'Uyghur', 'Han Chinese', 'Mongolian'],
            lifestyle: 'Oil industry, herding, some farming',
            population: '~2 million in Junggar Basin'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Karamay is major oil city' },
            { label: 'Mining', value: 'Coal, gold, and other minerals' },
            { label: 'Tourism', value: 'Kanas Lake, Ghost City' },
            { label: 'Wind Energy', value: 'Large wind farm projects' }
        ],
        
        environmentalIssues: [
            { label: 'Oil Industry', value: 'Pollution from extraction' },
            { label: 'Desertification', value: 'Edges expanding in places' },
            { label: 'Water Scarcity', value: 'Limited water resources' },
            { label: 'Climate Change', value: 'Winter warming affecting ecosystem' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Northern Silk Road route' },
            { label: 'Genghis Khan', value: 'Mongol campaigns through region' },
            { label: 'Dzungar Khanate', value: 'Historic Mongol state' },
            { label: 'Oil Discovery', value: 'Oil found 1955, transformed region' }
        ],
        
        funFacts: [
            'Second largest desert in China after Taklamakan',
            'Most vegetated desert in China - 40% plant cover',
            'Spring brings spectacular wildflower blooms',
            'Ghost City wind erosion creates eerie formations',
            'Colorful Beach has rainbow yardang landforms',
            'Temperature range of 80°C between seasons',
            'Winter snow actually helps desert vegetation',
            'Przewalski\'s wild horses roam the edges'
        ],
        
        journeyWaypoints: [
            { name: 'Ürümqi', coordinates: [43.83, 87.58], description: 'Regional capital' },
            { name: 'Ghost City', coordinates: [46.73, 84.77], description: 'Wind-eroded formations' },
            { name: 'Karamay', coordinates: [45.59, 84.85], description: 'Oil city' },
            { name: 'Colorful Beach', coordinates: [47.82, 86.4], description: 'Rainbow landforms' },
            { name: 'Kanas Lake', coordinates: [48.72, 87.0], description: 'Alpine lake paradise' }
        ]
    },

    // ========================================
    // #66 - LOP DESERT
    // ========================================
    {
        id: 'lop-desert',
        name: 'Lop Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 47000,
        rank: 66,
        coordinates: [40.0, 90.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lop Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [88.0, 38.5], [88.0, 42.0], [93.0, 42.0], [93.0, 38.5], [88.0, 38.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '47°C',
            summerTempAvg: '32°C',
            winterTempMin: '-30°C',
            winterTempAvg: '-10°C',
            maxRecorded: '50°C',
            annualRainfall: '<20mm',
            rainyMonths: 'Almost never'
        },
        
        formation: {
            type: 'Extreme arid desert',
            causes: ['Lop Nur basin', 'Former lake bed', 'Extreme rain shadow'],
            age: '~3 million years (lake formation)'
        },
        
        landforms: [
            { name: 'Lop Nur', description: 'Dried lake bed, "Ear" shape visible from space' },
            { name: 'Yardangs', description: 'Wind-carved ridges' },
            { name: 'Salt Crusts', description: 'Thick salt deposits' },
            { name: 'Sand Dunes', description: 'Active dune fields' }
        ],
        
        features: [
            { name: 'Lop Nur', type: 'Dry lake', coordinates: [40.17, 90.25], description: 'Great Ear visible from space' },
            { name: 'Loulan Ruins', type: 'Archaeological', coordinates: [40.5, 89.78], description: 'Ancient Silk Road city' },
            { name: 'Nuclear Test Site', type: 'Historic', coordinates: [41.5, 88.5], description: 'Chinese nuclear testing ground' },
            { name: 'Potash Mines', type: 'Mining', coordinates: [40.5, 90.5], description: 'Major potash extraction' }
        ],
        
        oases: [
            { name: 'Ruoqiang', coordinates: [39.02, 88.17], country: 'China', population: 30000 }
        ],
        
        cities: [
            { name: 'Ruoqiang', coordinates: [39.02, 88.17], country: 'China', population: 30000 },
            { name: 'Hami', coordinates: [42.83, 93.52], country: 'China', population: 450000 },
            { name: 'Korla', coordinates: [41.76, 86.15], country: 'China', population: 550000 }
        ],
        
        biodiversity: {
            plants: ['Almost none - one of most barren places on Earth', 'Sparse tamarisk on edges'],
            animals: ['Wild Bactrian Camel (edges)', 'Goitered Gazelle (edges)', 'Migratory birds'],
            endangeredSpecies: ['Wild Bactrian Camel (critically endangered, <1,000 left worldwide)']
        },
        
        humanLife: {
            peoples: ['Uyghur', 'Han Chinese'],
            lifestyle: 'Mining, research, military',
            population: 'Virtually uninhabited'
        },
        
        economy: [
            { label: 'Potash Mining', value: 'Major potash and salt extraction' },
            { label: 'Nuclear', value: 'Former (and possibly current) testing' },
            { label: 'Research', value: 'Scientific expeditions' },
            { label: 'Oil', value: 'Oil exploration' }
        ],
        
        environmentalIssues: [
            { label: 'Nuclear Contamination', value: '45+ nuclear tests conducted' },
            { label: 'Lake Disappearance', value: 'Lop Nur dried up completely by 1972' },
            { label: 'Water Diversion', value: 'Rivers diverted for agriculture' },
            { label: 'Extreme Conditions', value: 'One of harshest places on Earth' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Loulan was major oasis city' },
            { label: 'Lost Kingdom', value: 'Loulan mysteriously abandoned ~330 CE' },
            { label: 'Exploration', value: 'Sven Hedin explored 1900' },
            { label: 'Nuclear Era', value: 'China tested 45 nuclear weapons here' }
        ],
        
        funFacts: [
            'Lop Nur looks like a giant ear from space',
            'The lake completely dried up in 1972',
            'Loulan was a thriving Silk Road city before disappearing',
            'Explorer Peng Jiamu vanished here in 1980, never found',
            'China conducted 45 nuclear tests at Lop Nur',
            'Wild Bactrian camels survived nuclear testing',
            'Some areas receive zero rainfall for years',
            'The "Wandering Lake" moved locations throughout history'
        ],
        
        journeyWaypoints: [
            { name: 'Ruoqiang', coordinates: [39.02, 88.17], description: 'Gateway town' },
            { name: 'Loulan Ruins', coordinates: [40.5, 89.78], description: 'Lost Silk Road city' },
            { name: 'Lop Nur Center', coordinates: [40.17, 90.25], description: 'Dried lake "Ear"' },
            { name: 'Northern Edge', coordinates: [41.5, 90.0], description: 'Former nuclear site area' },
            { name: 'Potash Mines', coordinates: [40.5, 90.5], description: 'Industrial mining' }
        ]
    },

    // ========================================
    // #67 - SISTAN BASIN
    // ========================================
    {
        id: 'sistan-basin',
        name: 'Sistan Basin',
        countries: [
            { name: 'Iran', code: 'IR' },
            { name: 'Afghanistan', code: 'AF' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 50000,
        rank: 67,
        coordinates: [31.0, 61.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sistan Basin' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [60.0, 29.5], [60.0, 32.5], [63.5, 32.5], [63.5, 29.5], [60.0, 29.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '-5°C',
            winterTempAvg: '10°C',
            maxRecorded: '52°C',
            annualRainfall: '<100mm',
            rainyMonths: 'Winter (December-March, sparse)'
        },
        
        formation: {
            type: 'Endorheic basin desert',
            causes: ['Helmand River terminus', 'High evaporation', 'Wind erosion'],
            age: 'Ancient basin formation'
        },
        
        landforms: [
            { name: 'Hamoun Lakes', description: 'Seasonal wetlands (often dry)' },
            { name: 'Yardangs', description: 'Wind-carved ridges' },
            { name: 'Sand Dunes', description: 'Active dune fields' },
            { name: 'Salt Flats', description: 'Dried lake deposits' }
        ],
        
        features: [
            { name: 'Hamoun-e-Helmand', type: 'Wetland', coordinates: [31.0, 61.5], description: 'Seasonal lake, now mostly dry' },
            { name: 'Shahr-e-Sukhteh', type: 'Archaeological', coordinates: [30.6, 61.32], description: 'Burnt City, 5,000 year old ruins' },
            { name: 'Wind of 120 Days', type: 'Phenomenon', coordinates: [31.5, 61.5], description: 'Fierce summer winds' },
            { name: 'Nimroz Yardangs', type: 'Geological', coordinates: [30.5, 62.0], description: 'Dramatic wind erosion' }
        ],
        
        oases: [
            { name: 'Zabol', coordinates: [31.03, 61.5], country: 'Iran', population: 150000 },
            { name: 'Zaranj', coordinates: [30.96, 61.87], country: 'Afghanistan', population: 50000 }
        ],
        
        cities: [
            { name: 'Zabol', coordinates: [31.03, 61.5], country: 'Iran', population: 150000 },
            { name: 'Zaranj', coordinates: [30.96, 61.87], country: 'Afghanistan', population: 50000 },
            { name: 'Zahedan', coordinates: [29.5, 60.87], country: 'Iran', population: 600000 }
        ],
        
        biodiversity: {
            plants: ['Tamarisk', 'Reeds (when water present)', 'Halophytes', 'Sparse desert scrub'],
            animals: ['Persian Fallow Deer (reintroduced)', 'Flamingos (when wet)', 'Migratory birds', 'Asiatic Wild Ass'],
            endangeredSpecies: ['Asiatic Cheetah (possibly extinct here)', 'Persian Fallow Deer', 'Siberian Crane']
        },
        
        humanLife: {
            peoples: ['Sistani', 'Baloch', 'Pashtun'],
            lifestyle: 'Traditional wetland culture collapsed, now herding',
            population: '~1 million in basin'
        },
        
        economy: [
            { label: 'Agriculture', value: 'Collapsed due to drought' },
            { label: 'Fishing', value: 'Once thriving, now minimal' },
            { label: 'Trade', value: 'Border trade with Afghanistan' },
            { label: 'Herding', value: 'Goat and sheep' }
        ],
        
        environmentalIssues: [
            { label: 'Water Crisis', value: 'Afghanistan dams cut water to Iran' },
            { label: 'Dust Storms', value: 'Severe storms from dried lakebeds' },
            { label: 'Desertification', value: 'Wetlands became desert' },
            { label: 'Mass Migration', value: 'Environmental refugees leaving' }
        ],
        
        historicalImportance: [
            { label: 'Shahr-e-Sukhteh', value: 'Bronze Age city, UNESCO site' },
            { label: 'Earliest Animation', value: '5,000 year old animated goblet found here' },
            { label: 'Zoroastrian', value: 'Sacred region in Zoroastrianism' },
            { label: 'Water Civilization', value: 'Once lush wetland civilization' }
        ],
        
        funFacts: [
            'Contains oldest known example of animation (5,000 year old spinning goblet)',
            'The Wind of 120 Days blows constantly June-September',
            'Was a UNESCO wetland biosphere until it dried up',
            'Shahr-e-Sukhteh means "Burnt City" - destroyed 4,000 years ago',
            'Once supported huge bird populations, now mostly barren',
            'Dust storms here are visible from space',
            'The lake was once the largest in the Middle East',
            'Conflict between Iran and Afghanistan over Helmand water'
        ],
        
        journeyWaypoints: [
            { name: 'Zabol', coordinates: [31.03, 61.5], description: 'Iranian border city' },
            { name: 'Shahr-e-Sukhteh', coordinates: [30.6, 61.32], description: '5,000 year old ruins' },
            { name: 'Hamoun Lakes', coordinates: [31.0, 61.5], description: 'Dried wetlands' },
            { name: 'Zaranj', coordinates: [30.96, 61.87], description: 'Afghan border town' },
            { name: 'Nimroz Yardangs', coordinates: [30.5, 62.0], description: 'Wind-carved ridges' }
        ]
    },

    // ========================================
    // #68 - KHARAN DESERT
    // ========================================
    {
        id: 'kharan-desert',
        name: 'Kharan Desert',
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 48000,
        rank: 68,
        coordinates: [28.5, 65.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Kharan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [63.0, 27.0], [63.0, 30.0], [67.0, 30.0], [67.0, 27.0], [63.0, 27.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '-5°C',
            winterTempAvg: '12°C',
            maxRecorded: '53°C',
            annualRainfall: '<100mm',
            rainyMonths: 'Winter (rare)'
        },
        
        formation: {
            type: 'Interior basin desert',
            causes: ['Balochistan highlands rain shadow', 'Extreme evaporation', 'Limited drainage'],
            age: 'Ancient desert formation'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Active barchan and linear dunes' },
            { name: 'Hamun-i-Mashkel', description: 'Large salt playa' },
            { name: 'Gravel Plains', description: 'Reg surfaces' },
            { name: 'Mud Volcanoes', description: 'Unusual geological features' }
        ],
        
        features: [
            { name: 'Hamun-i-Mashkel', type: 'Salt flat', coordinates: [28.5, 63.5], description: 'Large seasonal salt lake' },
            { name: 'Chagai Hills', type: 'Hills', coordinates: [29.0, 64.5], description: 'Nuclear test site area' },
            { name: 'Mud Volcanoes', type: 'Geological', coordinates: [27.5, 66.0], description: 'Cold mud eruptions' },
            { name: 'Nokkundi', type: 'Town', coordinates: [28.82, 62.74], description: 'Remote desert outpost' }
        ],
        
        oases: [
            { name: 'Kharan Town', coordinates: [28.58, 65.42], country: 'Pakistan', population: 20000 },
            { name: 'Dalbandin', coordinates: [28.88, 64.4], country: 'Pakistan', population: 15000 }
        ],
        
        cities: [
            { name: 'Kharan', coordinates: [28.58, 65.42], country: 'Pakistan', population: 20000 },
            { name: 'Dalbandin', coordinates: [28.88, 64.4], country: 'Pakistan', population: 15000 },
            { name: 'Quetta', coordinates: [30.18, 66.99], country: 'Pakistan', population: 1000000 }
        ],
        
        biodiversity: {
            plants: ['Tamarisk', 'Prosopis', 'Acacia', 'Calotropis', 'Desert grasses'],
            animals: ['Balochistan Black Bear (edges)', 'Urial Sheep', 'Sand Cat', 'Houbara Bustard', 'Desert Monitor'],
            endangeredSpecies: ['Balochistan Black Bear (critically endangered)', 'Houbara Bustard (vulnerable)']
        },
        
        humanLife: {
            peoples: ['Baloch', 'Brahui'],
            lifestyle: 'Nomadic herding, mining',
            population: '~200,000 in Kharan district'
        },
        
        economy: [
            { label: 'Mining', value: 'Copper, gold deposits being explored' },
            { label: 'Herding', value: 'Sheep, goat, camel' },
            { label: 'Trade', value: 'Cross-border trade with Iran and Afghanistan' },
            { label: 'Military', value: 'Nuclear test site area' }
        ],
        
        environmentalIssues: [
            { label: 'Nuclear Testing', value: 'Pakistan tested nuclear weapons here 1998' },
            { label: 'Drought', value: 'Severe and chronic water shortage' },
            { label: 'Overgrazing', value: 'Livestock degrading vegetation' },
            { label: 'Poverty', value: 'One of poorest regions in Pakistan' }
        ],
        
        historicalImportance: [
            { label: 'Khanate of Kharan', value: 'Historic princely state' },
            { label: 'Trade Routes', value: 'Historic caravan connections' },
            { label: 'Nuclear Tests', value: 'Pakistan\'s nuclear tests 1998' },
            { label: 'Baloch Culture', value: 'Traditional Baloch homeland' }
        ],
        
        funFacts: [
            'Pakistan conducted its nuclear tests in the Chagai Hills',
            'Contains rare mud volcanoes that erupt cold mud',
            'Hamun-i-Mashkel is shared with Iran',
            'One of the least developed regions in Pakistan',
            'Summer temperatures can exceed 50°C',
            'The Baloch people have lived here for centuries',
            'Railway line through the desert is one of loneliest routes',
            'Caravans once crossed here on the way to Persia'
        ],
        
        journeyWaypoints: [
            { name: 'Quetta', coordinates: [30.18, 66.99], description: 'Provincial capital' },
            { name: 'Dalbandin', coordinates: [28.88, 64.4], description: 'Desert railway town' },
            { name: 'Kharan', coordinates: [28.58, 65.42], description: 'District headquarters' },
            { name: 'Hamun-i-Mashkel', coordinates: [28.5, 63.5], description: 'Salt flat' },
            { name: 'Chagai', coordinates: [29.0, 64.5], description: 'Nuclear test area' }
        ]
    },

    // ========================================
    // #69 - THAL DESERT
    // ========================================
    {
        id: 'thal-desert',
        name: 'Thal Desert',
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 20000,
        rank: 69,
        coordinates: [31.5, 71.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Thal Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [70.5, 30.5], [70.5, 32.5], [72.5, 32.5], [72.5, 30.5], [70.5, 30.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '47°C',
            summerTempAvg: '38°C',
            winterTempMin: '0°C',
            winterTempAvg: '12°C',
            maxRecorded: '50°C',
            annualRainfall: '150-250mm',
            rainyMonths: 'July-September (monsoon fringes)'
        },
        
        formation: {
            type: 'Interfluvial desert',
            causes: ['Between Indus and Jhelum rivers', 'Ancient river course changed', 'Sandy deposits'],
            age: '~10,000 years (post-glacial)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Low rolling sand hills' },
            { name: 'Interfluvial Plain', description: 'Between two rivers' },
            { name: 'Flood Plains', description: 'Seasonal flooding areas' },
            { name: 'Canal Systems', description: 'Irrigation networks' }
        ],
        
        features: [
            { name: 'Thal Canal', type: 'Canal', coordinates: [31.5, 71.5], description: 'Major irrigation system' },
            { name: 'Chashma Barrage', type: 'Dam', coordinates: [32.44, 71.37], description: 'Key water control' },
            { name: 'Mianwali', type: 'City', coordinates: [32.58, 71.53], country: 'Pakistan', population: 200000 },
            { name: 'Indus River', type: 'River', coordinates: [31.5, 70.5], description: 'Western boundary' }
        ],
        
        oases: [
            { name: 'Mianwali', coordinates: [32.58, 71.53], country: 'Pakistan', population: 200000 },
            { name: 'Bhakkar', coordinates: [31.63, 71.07], country: 'Pakistan', population: 100000 }
        ],
        
        cities: [
            { name: 'Mianwali', coordinates: [32.58, 71.53], country: 'Pakistan', population: 200000 },
            { name: 'Bhakkar', coordinates: [31.63, 71.07], country: 'Pakistan', population: 100000 },
            { name: 'Layyah', coordinates: [30.97, 70.94], country: 'Pakistan', population: 150000 },
            { name: 'Khushab', coordinates: [32.3, 72.35], country: 'Pakistan', population: 130000 }
        ],
        
        biodiversity: {
            plants: ['Acacia nilotica', 'Prosopis', 'Tamarix', 'Salvadora', 'Capparis'],
            animals: ['Chinkara Gazelle', 'Wild Boar', 'Jackal', 'Desert Fox', 'Partridges', 'Blue Bull'],
            endangeredSpecies: ['Chinkara (vulnerable)', 'Houbara Bustard (hunting pressure)']
        },
        
        humanLife: {
            peoples: ['Punjabi', 'Saraiki'],
            lifestyle: 'Agriculture, herding, increasingly irrigated farming',
            population: '~3 million in Thal region'
        },
        
        economy: [
            { label: 'Agriculture', value: 'Canal irrigation transformed region' },
            { label: 'Livestock', value: 'Cattle, sheep, goat farming' },
            { label: 'Mining', value: 'Salt range mining nearby' },
            { label: 'Forestry', value: 'Afforestation projects' }
        ],
        
        environmentalIssues: [
            { label: 'Water Logging', value: 'Irrigation causing waterlogging' },
            { label: 'Salinity', value: 'Soil salinization' },
            { label: 'Deforestation', value: 'Fuelwood cutting' },
            { label: 'Overgrazing', value: 'Livestock pressure' }
        ],
        
        historicalImportance: [
            { label: 'Indus Civilization', value: 'Near ancient Harappa region' },
            { label: 'Alexander Route', value: 'Near Macedonian campaign path' },
            { label: 'Sikh Empire', value: 'Part of Punjab history' },
            { label: 'Canal Colonies', value: 'British canal irrigation projects' }
        ],
        
        funFacts: [
            'Located between the Indus and Jhelum rivers',
            'Thal Canal transformed the desert into farmland',
            'Once considered wasteland, now partially green',
            'Chashma Nuclear Power Plant is nearby',
            'The desert was formed when the Indus shifted course',
            'Traditional Saraiki culture is strong here',
            'Famous for "Thal ke mele" - desert festivals',
            'Part of the larger Indus Plain ecosystem'
        ],
        
        journeyWaypoints: [
            { name: 'Mianwali', coordinates: [32.58, 71.53], description: 'Northern gateway' },
            { name: 'Chashma Barrage', coordinates: [32.44, 71.37], description: 'Water control point' },
            { name: 'Central Thal', coordinates: [31.5, 71.5], description: 'Desert heartland' },
            { name: 'Bhakkar', coordinates: [31.63, 71.07], description: 'Historic town' },
            { name: 'Layyah', coordinates: [30.97, 70.94], description: 'Southern edge' }
        ]
    },

    // ========================================
    // #70 - GREAT INDIAN DESERT (SOUTH)
    // ========================================
    {
        id: 'great-indian-desert-south',
        name: 'Great Indian Desert (South)',
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 92200,
        rank: 70,
        coordinates: [26.0, 73.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Indian Desert (South)' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [70.5, 23.5], [70.5, 28.0], [75.5, 28.0], [75.5, 23.5], [70.5, 23.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '42°C',
            winterTempMin: '2°C',
            winterTempAvg: '15°C',
            maxRecorded: '52°C',
            annualRainfall: '100-400mm',
            rainyMonths: 'July-September (monsoon edge)'
        },
        
        formation: {
            type: 'Subtropical monsoon desert',
            causes: ['Aravalli Range rain shadow', 'Thar Desert extension', 'High evaporation'],
            age: '~10,000 years (current extreme conditions)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Barchan and parabolic dunes' },
            { name: 'Rocky Plains', description: 'Exposed bedrock areas' },
            { name: 'Salt Flats', description: 'Rann of Kutch salt desert' },
            { name: 'Fossil Dunes', description: 'Ancient stabilized dunes' }
        ],
        
        features: [
            { name: 'Rann of Kutch', type: 'Salt flat', coordinates: [23.83, 69.83], description: 'Worlds largest salt desert' },
            { name: 'Wild Ass Sanctuary', type: 'Protected area', coordinates: [23.5, 71.0], description: 'Home to Indian Wild Ass' },
            { name: 'Dholavira', type: 'Archaeological', coordinates: [23.89, 70.21], description: 'Harappan civilization ruins' },
            { name: 'Kalo Dungar', type: 'Hill', coordinates: [23.87, 69.79], description: 'Black Hill viewpoint' },
            { name: 'White Rann', type: 'Salt flat', coordinates: [24.0, 70.0], description: 'Brilliant white salt expanse' }
        ],
        
        oases: [
            { name: 'Bhuj', coordinates: [23.25, 69.67], country: 'India', population: 200000 },
            { name: 'Jamnagar', coordinates: [22.47, 70.07], country: 'India', population: 600000 }
        ],
        
        cities: [
            { name: 'Bhuj', coordinates: [23.25, 69.67], country: 'India', population: 200000 },
            { name: 'Jamnagar', coordinates: [22.47, 70.07], country: 'India', population: 600000 },
            { name: 'Rajkot', coordinates: [22.3, 70.8], country: 'India', population: 1400000 },
            { name: 'Ahmedabad', coordinates: [23.02, 72.57], country: 'India', population: 6300000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Prosopis', 'Salvadora', 'Suaeda (salt marsh)', 'Desert grasses'],
            animals: ['Indian Wild Ass (Khur)', 'Chinkara', 'Desert Fox', 'Flamingos', 'Caracal', 'Indian Wolf'],
            endangeredSpecies: ['Indian Wild Ass (endangered)', 'Indian Wolf', 'Caracal', 'Great Indian Bustard']
        },
        
        humanLife: {
            peoples: ['Kutchi', 'Gujarati', 'Rabari'],
            lifestyle: 'Herding, salt farming, handicrafts',
            population: '~2 million in Kutch region'
        },
        
        economy: [
            { label: 'Salt Production', value: 'Major salt production area' },
            { label: 'Handicrafts', value: 'Famous Kutchi embroidery' },
            { label: 'Tourism', value: 'Rann Utsav festival, wildlife' },
            { label: 'Ports', value: 'Kandla and Mundra ports' },
            { label: 'Renewable Energy', value: 'Solar and wind farms' }
        ],
        
        environmentalIssues: [
            { label: 'Earthquake Risk', value: '2001 earthquake killed 20,000' },
            { label: 'Water Scarcity', value: 'Chronic water shortage' },
            { label: 'Industrial Development', value: 'Ports affecting ecology' },
            { label: 'Climate Change', value: 'Monsoon changes' }
        ],
        
        historicalImportance: [
            { label: 'Harappan Civilization', value: 'Dholavira was major Indus city' },
            { label: 'Kutch State', value: 'Historic princely state' },
            { label: 'Trade Routes', value: 'Ancient maritime and land trade' },
            { label: '2001 Earthquake', value: 'Devastating disaster' }
        ],
        
        funFacts: [
            'The Rann of Kutch is the largest salt desert in the world',
            'During monsoon the Rann floods and becomes a shallow sea',
            'The White Rann turns brilliant white under full moon',
            'Rann Utsav festival attracts hundreds of thousands of visitors',
            'The Indian Wild Ass is found only here',
            'Dholavira had sophisticated water management 4,500 years ago',
            'The border with Pakistan runs through the salt desert',
            'Flamingos breed in the Rann by the thousands'
        ],
        
        journeyWaypoints: [
            { name: 'Bhuj', coordinates: [23.25, 69.67], description: 'Gateway to Kutch' },
            { name: 'Dholavira', coordinates: [23.89, 70.21], description: 'Ancient Harappan city' },
            { name: 'White Rann', coordinates: [24.0, 70.0], description: 'Salt desert expanse' },
            { name: 'Wild Ass Sanctuary', coordinates: [23.5, 71.0], description: 'Khur habitat' },
            { name: 'Kalo Dungar', coordinates: [23.87, 69.79], description: 'Sunset viewpoint' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_7;
}
