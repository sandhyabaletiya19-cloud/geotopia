/* ==========================================
   DESERTS DATA - FILE 4 OF 5
   Deserts 31-40 (By Area)
   ========================================== */

const DESERTS_DATA_4 = [
    // ========================================
    // #31 - TANAMI DESERT
    // ========================================
    {
        id: 'tanami-desert',
        name: 'Tanami Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        area: 292000,
        rank: 31,
        coordinates: [-20.0, 130.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Tanami Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [127.0, -22.5], [127.0, -18.0], [133.0, -18.0], [133.0, -22.5], [127.0, -22.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '42°C',
            summerTempAvg: '36°C',
            winterTempMin: '5°C',
            winterTempAvg: '20°C',
            maxRecorded: '47°C',
            annualRainfall: '300-500mm',
            rainyMonths: 'December-March (wet season)'
        },
        
        formation: {
            type: 'Tropical semi-arid desert',
            causes: ['Subtropical high pressure', 'Continental interior', 'Seasonal monsoon influence'],
            age: '~1 million years'
        },
        
        landforms: [
            { name: 'Sand Plains', description: 'Flat red sandy plains with spinifex' },
            { name: 'Dunefields', description: 'Linear sand dunes' },
            { name: 'Salt Lakes', description: 'Ephemeral salt pans' },
            { name: 'Rocky Outcrops', description: 'Granite and sandstone hills' }
        ],
        
        features: [
            { name: 'The Granites', type: 'Gold mine', coordinates: [-20.55, 130.35], description: 'Major gold mining operation' },
            { name: 'Lake Surprise', type: 'Salt lake', coordinates: [-19.7, 129.6], description: 'Large ephemeral salt lake' },
            { name: 'Tanami Track', type: 'Road', coordinates: [-20.0, 130.0], description: '1,000km unsealed outback road' },
            { name: 'Wolf Creek Crater', type: 'Meteorite crater', coordinates: [-19.17, 127.77], description: 'Second largest meteorite crater in world' }
        ],
        
        oases: [
            { name: 'Rabbit Flat', coordinates: [-20.18, 130.02], country: 'Australia', population: 10 },
            { name: 'Yuendumu', coordinates: [-22.25, 131.8], country: 'Australia', population: 750 }
        ],
        
        cities: [
            { name: 'Alice Springs', coordinates: [-23.7, 133.88], country: 'Australia', population: 25000 },
            { name: 'Halls Creek', coordinates: [-18.23, 127.67], country: 'Australia', population: 1500 },
            { name: 'Katherine', coordinates: [-14.47, 132.27], country: 'Australia', population: 6300 }
        ],
        
        biodiversity: {
            plants: ['Spinifex', 'Desert Bloodwood', 'Mulga', 'Ghost Gum', 'Wattle species'],
            animals: ['Bilby', 'Red Kangaroo', 'Thorny Devil', 'Dingo', 'Perentie', 'Budgerigar', 'Black-footed Rock Wallaby'],
            endangeredSpecies: ['Greater Bilby (vulnerable)', 'Night Parrot (critically endangered)', 'Great Desert Skink']
        },
        
        humanLife: {
            peoples: ['Warlpiri', 'Gurindji', 'Luritja', 'Pintupi'],
            lifestyle: 'Aboriginal communities, gold mining, cattle stations',
            population: '~3,000 in desert region'
        },
        
        economy: [
            { label: 'Gold Mining', value: 'The Granites and Callie mines - major gold producers' },
            { label: 'Cattle', value: 'Vast cattle stations' },
            { label: 'Indigenous Art', value: 'Yuendumu art movement' },
            { label: 'Tourism', value: 'Adventure 4WD tours' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Impact', value: 'Gold mining water and land use' },
            { label: 'Feral Animals', value: 'Camels, cats, cane toads approaching' },
            { label: 'Fire Management', value: 'Changed burning regimes' },
            { label: 'Climate Change', value: 'Rainfall variability increasing' }
        ],
        
        historicalImportance: [
            { label: 'Aboriginal Heritage', value: '40,000+ years continuous habitation' },
            { label: 'Dreaming Tracks', value: 'Major songlines cross the desert' },
            { label: 'Gold Rush', value: 'Gold discovered 1900, major finds 1980s' },
            { label: 'WWII', value: 'Stuart Highway built for defense' }
        ],
        
        funFacts: [
            'Wolf Creek Crater is the second largest meteorite crater with fragments found',
            'Tanami means "never die" referring to permanent water sources',
            'Home to one of Australias largest gold mines',
            'Yuendumu is famous for its Aboriginal art movement',
            'The Tanami Track is one of Australias most remote roads',
            'Warlpiri people have lived here for at least 40,000 years',
            'Night parrots were rediscovered here after being "extinct" for decades',
            'Summer temperatures regularly exceed 40°C for weeks'
        ],
        
        journeyWaypoints: [
            { name: 'Alice Springs', coordinates: [-23.7, 133.88], description: 'Red Centre gateway' },
            { name: 'Yuendumu', coordinates: [-22.25, 131.8], description: 'Aboriginal art community' },
            { name: 'Tanami Track', coordinates: [-20.0, 130.0], description: 'Remote outback road' },
            { name: 'Wolf Creek Crater', coordinates: [-19.17, 127.77], description: 'Meteorite impact site' },
            { name: 'Halls Creek', coordinates: [-18.23, 127.67], description: 'Kimberley gateway' }
        ]
    },

    // ========================================
    // #32 - STRZELECKI DESERT
    // ========================================
    {
        id: 'strzelecki-desert',
        name: 'Strzelecki Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        area: 80000,
        rank: 32,
        coordinates: [-29.0, 140.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Strzelecki Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [139.0, -30.5], [139.0, -27.5], [142.0, -27.5], [142.0, -30.5], [139.0, -30.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '35°C',
            winterTempMin: '2°C',
            winterTempAvg: '15°C',
            maxRecorded: '49°C',
            annualRainfall: '150-200mm',
            rainyMonths: 'Winter (sporadic)'
        },
        
        formation: {
            type: 'Dune desert',
            causes: ['Lake Eyre Basin drainage', 'Wind-blown sand accumulation', 'Semi-arid climate'],
            age: '~100,000 years (current dune form)'
        },
        
        landforms: [
            { name: 'Parallel Sand Dunes', description: 'Long parallel red dunes' },
            { name: 'Gibber Plains', description: 'Stone-covered flats between dunes' },
            { name: 'Clay Pans', description: 'Seasonal wetlands' },
            { name: 'Cooper Creek', description: 'Ephemeral river system' }
        ],
        
        features: [
            { name: 'Strzelecki Track', type: 'Road', coordinates: [-29.0, 140.0], description: 'Historic 460km outback track' },
            { name: 'Cooper Creek', type: 'River', coordinates: [-28.0, 141.5], description: 'Ephemeral inland river' },
            { name: 'Innamincka', type: 'Town', coordinates: [-27.74, 140.73], description: 'Remote outback settlement' },
            { name: 'Dig Tree', type: 'Historic site', coordinates: [-27.8, 141.0], description: 'Burke and Wills expedition site' },
            { name: 'Moomba Gas Fields', type: 'Industrial', coordinates: [-28.1, 140.2], description: 'Major natural gas production' }
        ],
        
        oases: [
            { name: 'Innamincka', coordinates: [-27.74, 140.73], country: 'Australia', population: 15 },
            { name: 'Moomba', coordinates: [-28.1, 140.2], country: 'Australia', population: 500 }
        ],
        
        cities: [
            { name: 'Lyndhurst', coordinates: [-30.29, 138.35], country: 'Australia', population: 30 },
            { name: 'Broken Hill', coordinates: [-31.96, 141.45], country: 'Australia', population: 18000 },
            { name: 'Birdsville', coordinates: [-25.9, 139.35], country: 'Australia', population: 140 }
        ],
        
        biodiversity: {
            plants: ['Spinifex', 'Saltbush', 'Coolibah', 'Mitchell Grass', 'Lignum'],
            animals: ['Red Kangaroo', 'Emu', 'Dingo', 'Wedge-tailed Eagle', 'Letter-winged Kite', 'Long-haired Rat'],
            endangeredSpecies: ['Dusky Hopping Mouse', 'Plains Mouse', 'Thick-billed Grasswren']
        },
        
        humanLife: {
            peoples: ['Yandruwandha', 'Yawarrawarrka', 'Dieri'],
            lifestyle: 'Cattle stations, gas industry, tourism',
            population: '~1,000 in region'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Moomba gas fields - major producer' },
            { label: 'Cattle', value: 'Large pastoral stations' },
            { label: 'Tourism', value: 'Outback adventure tourism' },
            { label: 'Mining', value: 'Mineral exploration' }
        ],
        
        environmentalIssues: [
            { label: 'Overgrazing', value: 'Cattle and rabbits damaging vegetation' },
            { label: 'Feral Animals', value: 'Rabbits, cats, foxes' },
            { label: 'Gas Industry', value: 'Land and water impacts' },
            { label: 'Climate Change', value: 'Increasing drought frequency' }
        ],
        
        historicalImportance: [
            { label: 'Burke and Wills', value: 'Ill-fated expedition ended here 1861' },
            { label: 'Dig Tree', value: 'Famous marker from the expedition' },
            { label: 'Strzelecki', value: 'Named after Polish explorer Paul Strzelecki' },
            { label: 'Gas Discovery', value: 'Moomba gas field discovered 1963' }
        ],
        
        funFacts: [
            'Named after Polish explorer Count Paul Strzelecki',
            'Burke and Wills died near Cooper Creek in 1861',
            'The Dig Tree is one of Australias most famous historic sites',
            'Moomba supplies about 20% of Australias natural gas',
            'When Cooper Creek floods, it can be 50km wide',
            'The Strzelecki Track was a major cattle drove route',
            'Summer temperatures can exceed 50°C',
            'The region experiences boom-bust ecology with floods and droughts'
        ],
        
        journeyWaypoints: [
            { name: 'Lyndhurst', coordinates: [-30.29, 138.35], description: 'Gateway to Strzelecki Track' },
            { name: 'Moomba', coordinates: [-28.1, 140.2], description: 'Gas production hub' },
            { name: 'Innamincka', coordinates: [-27.74, 140.73], description: 'Remote outback pub' },
            { name: 'Dig Tree', coordinates: [-27.8, 141.0], description: 'Burke and Wills memorial' },
            { name: 'Cameron Corner', coordinates: [-29.0, 141.0], description: 'Three state border' }
        ]
    },

    // ========================================
    // #33 - PAINTED DESERT (USA)
    // ========================================
    {
        id: 'painted-desert',
        name: 'Painted Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 19500,
        rank: 33,
        coordinates: [35.5, -110.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Painted Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-111.5, 34.5], [-111.5, 36.5], [-109.0, 36.5], [-109.0, 34.5], [-111.5, 34.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '30°C',
            winterTempMin: '-15°C',
            winterTempAvg: '5°C',
            maxRecorded: '42°C',
            annualRainfall: '150-250mm',
            rainyMonths: 'July-September (monsoon), winter snow'
        },
        
        formation: {
            type: 'Badlands desert',
            causes: ['Erosion of Chinle Formation', 'Mineral-rich sediments creating colors', 'High plateau climate'],
            age: '225 million years (rock formations)'
        },
        
        landforms: [
            { name: 'Badlands', description: 'Colorful eroded hills and mesas' },
            { name: 'Mesas', description: 'Flat-topped remnant hills' },
            { name: 'Petrified Wood', description: 'Fossilized ancient trees' },
            { name: 'Hoodoos', description: 'Eroded rock pillars' }
        ],
        
        features: [
            { name: 'Petrified Forest NP', type: 'National Park', coordinates: [35.07, -109.78], description: 'Worlds largest petrified wood collection' },
            { name: 'Blue Mesa', type: 'Geological', coordinates: [34.95, -109.82], description: 'Blue-banded badlands' },
            { name: 'Newspaper Rock', type: 'Petroglyphs', coordinates: [35.0, -109.75], description: 'Ancient rock art' },
            { name: 'Kachina Point', type: 'Viewpoint', coordinates: [35.08, -109.78], description: 'Painted Desert panorama' },
            { name: 'Crystal Forest', type: 'Petrified wood', coordinates: [34.85, -109.85], description: 'Quartz-filled petrified logs' }
        ],
        
        oases: [],
        
        cities: [
            { name: 'Holbrook', coordinates: [34.9, -110.16], country: 'USA', population: 5000 },
            { name: 'Winslow', coordinates: [35.02, -110.7], country: 'USA', population: 9500 },
            { name: 'Gallup', coordinates: [35.53, -108.74], country: 'USA', population: 22000 },
            { name: 'Flagstaff', coordinates: [35.2, -111.65], country: 'USA', population: 73000 }
        ],
        
        biodiversity: {
            plants: ['Juniper', 'Saltbush', 'Snakeweed', 'Indian Ricegrass', 'Yucca', 'Ephedra'],
            animals: ['Pronghorn', 'Coyote', 'Collared Lizard', 'Roadrunner', 'Golden Eagle', 'Prairie Dog'],
            endangeredSpecies: ['Black-footed Ferret (reintroduced nearby)', 'Mexican Spotted Owl']
        },
        
        humanLife: {
            peoples: ['Navajo', 'Hopi', 'Zuni', 'Apache'],
            lifestyle: 'Navajo Nation, ranching, tourism',
            population: '~50,000 in surrounding Navajo Nation areas'
        },
        
        economy: [
            { label: 'Tourism', value: 'Petrified Forest NP, scenic drives' },
            { label: 'Ranching', value: 'Cattle and sheep grazing' },
            { label: 'Native Arts', value: 'Navajo jewelry and crafts' },
            { label: 'Route 66', value: 'Historic highway tourism' }
        ],
        
        environmentalIssues: [
            { label: 'Petrified Wood Theft', value: 'Visitors taking fossils illegally' },
            { label: 'Overgrazing', value: 'Livestock damaging vegetation' },
            { label: 'Erosion', value: 'Climate accelerating erosion' },
            { label: 'Air Quality', value: 'Regional haze from power plants' }
        ],
        
        historicalImportance: [
            { label: 'Ancient Peoples', value: 'Puebloan ruins throughout' },
            { label: 'Petrified Forest', value: 'Protected since 1906' },
            { label: 'Route 66', value: 'Mother Road passed through' },
            { label: 'Triassic Fossils', value: 'Important dinosaur-era finds' }
        ],
        
        funFacts: [
            'The colors come from iron and manganese in the rocks',
            'Petrified logs are 225 million years old, from the Triassic',
            'About 12 tons of petrified wood are stolen annually',
            'Route 66 runs along the northern edge',
            'The Navajo call it "painted cliffs"',
            'Contains the most colorful badlands in the world',
            'Winslow was immortalized in the Eagles song "Take It Easy"',
            'The petrified trees were once tropical conifers'
        ],
        
        journeyWaypoints: [
            { name: 'Petrified Forest Entrance', coordinates: [35.08, -109.78], description: 'Park visitor center' },
            { name: 'Painted Desert Inn', coordinates: [35.08, -109.78], description: 'Historic landmark' },
            { name: 'Blue Mesa', coordinates: [34.95, -109.82], description: 'Blue-banded badlands trail' },
            { name: 'Crystal Forest', coordinates: [34.85, -109.85], description: 'Quartz-filled logs' },
            { name: 'Newspaper Rock', coordinates: [35.0, -109.75], description: 'Petroglyphs viewpoint' }
        ]
    },

    // ========================================
    // #34 - BLACK ROCK DESERT
    // ========================================
    {
        id: 'black-rock-desert',
        name: 'Black Rock Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'cold',
        area: 2600,
        rank: 34,
        coordinates: [40.87, -119.06],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Black Rock Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-119.8, 40.4], [-119.8, 41.3], [-118.3, 41.3], [-118.3, 40.4], [-119.8, 40.4]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '32°C',
            winterTempMin: '-25°C',
            winterTempAvg: '0°C',
            maxRecorded: '45°C',
            annualRainfall: '100-200mm',
            rainyMonths: 'Winter (snow), spring'
        },
        
        formation: {
            type: 'Playa desert',
            causes: ['Ancient Lake Lahontan dried up', 'Basin and Range topography', 'Rain shadow of Sierra Nevada'],
            age: '~10,000 years since lake dried'
        },
        
        landforms: [
            { name: 'Playa', description: 'Flat, dry lakebed - the Black Rock Playa' },
            { name: 'Hot Springs', description: 'Geothermal springs along edges' },
            { name: 'Black Rock', description: 'Volcanic rock formation giving desert its name' },
            { name: 'Sand Dunes', description: 'Small dune fields' }
        ],
        
        features: [
            { name: 'Black Rock Playa', type: 'Dry lake', coordinates: [40.87, -119.06], description: 'Flat playa hosting Burning Man' },
            { name: 'Fly Geyser', type: 'Geothermal', coordinates: [40.86, -119.33], description: 'Man-made colorful geyser' },
            { name: 'Black Rock Hot Springs', type: 'Hot springs', coordinates: [40.95, -119.05], description: 'Natural hot springs' },
            { name: 'High Rock Canyon', type: 'Canyon', coordinates: [41.0, -119.2], description: 'Emigrant trail canyon' },
            { name: 'Burning Man Site', type: 'Event location', coordinates: [40.79, -119.21], description: 'Annual festival site' }
        ],
        
        oases: [
            { name: 'Gerlach', coordinates: [40.65, -119.36], country: 'USA', population: 200 },
            { name: 'Empire', coordinates: [40.57, -119.35], country: 'USA', population: 200 }
        ],
        
        cities: [
            { name: 'Gerlach', coordinates: [40.65, -119.36], country: 'USA', population: 200 },
            { name: 'Reno', coordinates: [39.53, -119.81], country: 'USA', population: 265000 },
            { name: 'Winnemucca', coordinates: [40.97, -117.74], country: 'USA', population: 8000 },
            { name: 'Lovelock', coordinates: [40.18, -118.47], country: 'USA', population: 2000 }
        ],
        
        biodiversity: {
            plants: ['Sagebrush', 'Greasewood', 'Shadscale', 'Saltbush', 'Rabbitbrush'],
            animals: ['Pronghorn', 'Wild Mustang', 'Coyote', 'Kit Fox', 'Great Horned Owl', 'Golden Eagle'],
            endangeredSpecies: ['Lahontan Cutthroat Trout (nearby)', 'Greater Sage-Grouse (threatened)']
        },
        
        humanLife: {
            peoples: ['Paiute', 'Modern communities'],
            lifestyle: 'Ranching, gypsum mining, event hosting',
            population: '~500 permanent residents'
        },
        
        economy: [
            { label: 'Events', value: 'Burning Man brings 80,000 people annually' },
            { label: 'Mining', value: 'Gypsum mining at Empire' },
            { label: 'Land Speed Records', value: 'Flat playa used for speed attempts' },
            { label: 'Geothermal', value: 'Potential geothermal energy' }
        ],
        
        environmentalIssues: [
            { label: 'Event Impact', value: 'Burning Man environmental effects' },
            { label: 'Off-road Vehicles', value: 'Damage to playa surface' },
            { label: 'Water Scarcity', value: 'Limited water resources' },
            { label: 'Climate Change', value: 'Changing weather patterns' }
        ],
        
        historicalImportance: [
            { label: 'Emigrant Trail', value: 'Applegate-Lassen Trail passed through 1840s' },
            { label: 'Land Speed Records', value: 'Sound barrier broken here 1997' },
            { label: 'Burning Man', value: 'Festival began here 1990' },
            { label: 'Ancient Lake', value: 'Lake Lahontan was 900 feet deep' }
        ],
        
        funFacts: [
            'Home to Burning Man festival since 1990',
            'The playa is so flat you can see the curvature of the Earth',
            'Sound barrier was broken here by Thrust SSC in 1997 (763 mph)',
            'Lake Lahontan was once 900 feet deep, covering the region',
            'Fly Geyser was accidentally created by drilling in 1964',
            'The "Black Rock" is a volcanic rock formation',
            'Can reach 100°F in summer and -40°F in winter',
            'Wild mustangs roam the surrounding hills'
        ],
        
        journeyWaypoints: [
            { name: 'Gerlach', coordinates: [40.65, -119.36], description: 'Gateway to Black Rock' },
            { name: 'Fly Geyser', coordinates: [40.86, -119.33], description: 'Colorful geothermal wonder' },
            { name: 'Black Rock Playa', coordinates: [40.87, -119.06], description: 'Vast flat lakebed' },
            { name: 'Hot Springs', coordinates: [40.95, -119.05], description: 'Natural hot springs' },
            { name: 'High Rock Canyon', coordinates: [41.0, -119.2], description: 'Historic emigrant route' }
        ]
    },

    // ========================================
    // #35 - DEATH VALLEY
    // ========================================
    {
        id: 'death-valley',
        name: 'Death Valley',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 7800,
        rank: 35,
        coordinates: [36.5, -117.0],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Death Valley' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-117.8, 35.8], [-117.8, 37.2], [-116.2, 37.2], [-116.2, 35.8], [-117.8, 35.8]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '56.7°C (world record)',
            summerTempAvg: '47°C',
            winterTempMin: '-5°C',
            winterTempAvg: '15°C',
            maxRecorded: '56.7°C (134°F - highest reliable temperature on Earth)',
            annualRainfall: '50mm',
            rainyMonths: 'Winter (sporadic), rare summer storms'
        },
        
        formation: {
            type: 'Graben valley desert',
            causes: ['Basin and Range faulting', 'Multiple rain shadows', 'Below sea level basin'],
            age: '~3 million years (current form)'
        },
        
        landforms: [
            { name: 'Salt Flats', description: 'Badwater Basin, lowest point in North America' },
            { name: 'Sand Dunes', description: 'Mesquite Flat and Eureka Dunes' },
            { name: 'Badlands', description: 'Colorful eroded hills' },
            { name: 'Mountains', description: 'Panamint Range rises to 3,368m' },
            { name: 'Canyons', description: 'Narrow slot canyons' }
        ],
        
        features: [
            { name: 'Badwater Basin', type: 'Salt flat', coordinates: [36.23, -116.77], description: 'Lowest point in North America at -86m' },
            { name: 'Zabriskie Point', type: 'Viewpoint', coordinates: [36.42, -116.81], description: 'Iconic badlands vista' },
            { name: 'Racetrack Playa', type: 'Playa', coordinates: [36.68, -117.56], description: 'Mysterious sailing stones' },
            { name: 'Mesquite Flat Dunes', type: 'Dunes', coordinates: [36.61, -117.11], description: 'Photogenic sand dunes' },
            { name: 'Artists Palette', type: 'Geological', coordinates: [36.36, -116.82], description: 'Colorful volcanic hills' },
            { name: 'Scotty\'s Castle', type: 'Historic', coordinates: [37.03, -117.34], description: 'Spanish-style villa in desert' }
        ],
        
        oases: [
            { name: 'Furnace Creek', coordinates: [36.46, -116.87], country: 'USA', population: 100 },
            { name: 'Saratoga Springs', coordinates: [35.68, -116.43], country: 'USA', population: 0 }
        ],
        
        cities: [
            { name: 'Furnace Creek', coordinates: [36.46, -116.87], country: 'USA', population: 100 },
            { name: 'Stovepipe Wells', coordinates: [36.6, -117.14], country: 'USA', population: 20 },
            { name: 'Pahrump', coordinates: [36.21, -115.98], country: 'USA', population: 40000 },
            { name: 'Beatty', coordinates: [36.91, -116.76], country: 'USA', population: 1000 },
            { name: 'Las Vegas', coordinates: [36.17, -115.14], country: 'USA', population: 650000 }
        ],
        
        biodiversity: {
            plants: ['Creosote Bush', 'Desert Holly', 'Mesquite', 'Pickleweed', 'Desert Gold (flowers)'],
            animals: ['Bighorn Sheep', 'Kit Fox', 'Sidewinder Rattlesnake', 'Roadrunner', 'Death Valley Pupfish', 'Chuckwalla'],
            endangeredSpecies: ['Death Valley Pupfish (endangered)', 'Desert Tortoise (threatened)']
        },
        
        humanLife: {
            peoples: ['Timbisha Shoshone'],
            lifestyle: 'Tourism, Timbisha reservation, park service',
            population: '~300 permanent residents'
        },
        
        economy: [
            { label: 'Tourism', value: '1.7 million visitors annually' },
            { label: 'Borax Mining', value: 'Historic 20 Mule Team borax' },
            { label: 'Film Location', value: 'Star Wars and many films shot here' },
            { label: 'Research', value: 'Extreme environment studies' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Even more extreme heat events' },
            { label: 'Groundwater', value: 'Pumping threatens pupfish habitat' },
            { label: 'Flash Floods', value: 'Rare but destructive floods' },
            { label: 'Tourism Impact', value: 'Overcrowding at key sites' }
        ],
        
        historicalImportance: [
            { label: 'Forty-Niners', value: 'Gold Rush emigrants got trapped 1849' },
            { label: 'Borax Mining', value: '20 Mule Team era 1883-1889' },
            { label: 'National Monument', value: 'Protected since 1933' },
            { label: 'Temperature Record', value: 'World record set 1913' }
        ],
        
        funFacts: [
            'Holds the record for highest reliably recorded temperature: 56.7°C (134°F)',
            'Badwater is the lowest point in North America at 86m below sea level',
            'Sailing stones mysteriously move across Racetrack Playa',
            'The Timbisha Shoshone have lived here for over 1,000 years',
            'Death Valley got its name from a group of 49ers who nearly died here',
            'Its possible to see both the lowest and one of the highest US points',
            'A rare superbloom occurs when enough rain falls',
            'Star Wars Tatooine scenes were filmed here'
        ],
        
        journeyWaypoints: [
            { name: 'Furnace Creek', coordinates: [36.46, -116.87], description: 'Park headquarters and oasis' },
            { name: 'Badwater Basin', coordinates: [36.23, -116.77], description: 'Lowest point in North America' },
            { name: 'Zabriskie Point', coordinates: [36.42, -116.81], description: 'Iconic sunrise viewpoint' },
            { name: 'Mesquite Dunes', coordinates: [36.61, -117.11], description: 'Classic sand dunes' },
            { name: 'Racetrack Playa', coordinates: [36.68, -117.56], description: 'Sailing stones mystery' }
        ]
    },

    // ========================================
    // #36 - WHITE SANDS
    // ========================================
    {
        id: 'white-sands',
        name: 'White Sands',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 710,
        rank: 36,
        coordinates: [32.78, -106.17],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1545167496-c1e092d64e5c?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1545167496-c1e092d64e5c?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'White Sands' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-106.5, 32.5], [-106.5, 33.2], [-105.8, 33.2], [-105.8, 32.5], [-106.5, 32.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '33°C',
            winterTempMin: '-10°C',
            winterTempAvg: '8°C',
            maxRecorded: '44°C',
            annualRainfall: '200-250mm',
            rainyMonths: 'July-September (monsoon)'
        },
        
        formation: {
            type: 'Gypsum dune field',
            causes: ['Gypsum dissolved from surrounding mountains', 'Tularosa Basin with no outlet', 'Wind accumulation'],
            age: '~10,000 years'
        },
        
        landforms: [
            { name: 'Gypsum Dunes', description: 'Brilliant white dunes up to 18m tall' },
            { name: 'Barchan Dunes', description: 'Crescent-shaped moving dunes' },
            { name: 'Lake Lucero', description: 'Seasonal lake that is gypsum source' },
            { name: 'Alkali Flats', description: 'Flat areas between dunes' }
        ],
        
        features: [
            { name: 'Heart of the Dunes', type: 'Dune field', coordinates: [32.78, -106.17], description: 'Core white dune area' },
            { name: 'Lake Lucero', type: 'Seasonal lake', coordinates: [32.89, -106.42], description: 'Source of gypsum sand' },
            { name: 'Alkali Flat Trail', type: 'Trail', coordinates: [32.79, -106.18], description: '5-mile backcountry trail' },
            { name: 'Dunes Drive', type: 'Scenic drive', coordinates: [32.78, -106.2], description: '8-mile scenic loop' },
            { name: 'Interdunal Areas', type: 'Habitat', coordinates: [32.77, -106.15], description: 'Vegetated areas between dunes' }
        ],
        
        oases: [],
        
        cities: [
            { name: 'Alamogordo', coordinates: [32.9, -105.96], country: 'USA', population: 32000 },
            { name: 'Las Cruces', coordinates: [32.35, -106.76], country: 'USA', population: 110000 },
            { name: 'Tularosa', coordinates: [33.07, -106.02], country: 'USA', population: 3000 }
        ],
        
        biodiversity: {
            plants: ['Rio Grande Cottonwood', 'Fourwing Saltbush', 'Soaptree Yucca', 'Hoary Rosemary Mint'],
            animals: ['Apache Pocket Mouse (white)', 'Bleached Earless Lizard', 'Camel Cricket', 'Oryx (introduced)', 'Kit Fox'],
            endangeredSpecies: ['White Sands Pupfish', 'White Sands Wood Rat']
        },
        
        humanLife: {
            peoples: ['Apache', 'Pueblo'],
            lifestyle: 'Tourism, military (missile range), research',
            population: 'No permanent residents in dunes'
        },
        
        economy: [
            { label: 'Tourism', value: '600,000+ visitors annually' },
            { label: 'Military', value: 'White Sands Missile Range' },
            { label: 'Film Location', value: 'Alien landscapes for movies' },
            { label: 'Research', value: 'Unique ecosystem studies' }
        ],
        
        environmentalIssues: [
            { label: 'Military Activity', value: 'Missile range impacts' },
            { label: 'Climate Change', value: 'Changes in monsoon patterns' },
            { label: 'Invasive Species', value: 'Oryx impacting native plants' },
            { label: 'Development', value: 'Surrounding land use' }
        ],
        
        historicalImportance: [
            { label: 'Trinity Test', value: 'First atomic bomb tested nearby 1945' },
            { label: 'Missile Testing', value: 'White Sands Missile Range since 1945' },
            { label: 'National Monument', value: 'Protected since 1933' },
            { label: 'National Park', value: 'Upgraded to National Park 2019' }
        ],
        
        funFacts: [
            'Largest gypsum dune field in the world',
            'Animals have evolved to be white to match the sand',
            'The gypsum is cool enough to walk on barefoot even in summer',
            'The first atomic bomb was tested 60 miles north',
            'Sand is actually gypsum crystals, not silica',
            'Dunes move up to 30 feet per year',
            'The park is sometimes closed for missile testing',
            'Became Americas 62nd National Park in 2019',
            'Sledding on the dunes is a popular activity'
        ],
        
        journeyWaypoints: [
            { name: 'Visitor Center', coordinates: [32.78, -106.17], description: 'Park entrance and museum' },
            { name: 'Dunes Drive Start', coordinates: [32.78, -106.2], description: 'Scenic loop begins' },
            { name: 'Heart of Dunes', coordinates: [32.79, -106.18], description: 'Purest white sand area' },
            { name: 'Alkali Flat', coordinates: [32.79, -106.18], description: 'Backcountry trail start' },
            { name: 'Lake Lucero', coordinates: [32.89, -106.42], description: 'Source of the gypsum' }
        ]
    },

    // ========================================
    // #37 - WAHIBA SANDS (SHARQIYA SANDS)
    // ========================================
    {
        id: 'wahiba-sands',
        name: 'Wahiba Sands',
        countries: [
            { name: 'Oman', code: 'OM' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 12500,
        rank: 37,
        coordinates: [22.0, 58.75],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Wahiba Sands' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [58.0, 21.5], [58.0, 23.0], [59.5, 23.0], [59.5, 21.5], [58.0, 21.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '52°C',
            summerTempAvg: '42°C',
            winterTempMin: '10°C',
            winterTempAvg: '22°C',
            maxRecorded: '53°C',
            annualRainfall: '<50mm',
            rainyMonths: 'Winter (rare storms)'
        },
        
        formation: {
            type: 'Coastal sand sea',
            causes: ['Wind transport of coastal sand', 'Stable dune formation', 'Lack of rainfall'],
            age: '~20,000 years'
        },
        
        landforms: [
            { name: 'Linear Dunes', description: 'Parallel red dunes up to 100m' },
            { name: 'Star Dunes', description: 'Multi-armed dunes' },
            { name: 'Barchan Dunes', description: 'Crescent-shaped mobile dunes' },
            { name: 'Interdune Areas', description: 'Flat areas between dunes' }
        ],
        
        features: [
            { name: 'Northern Wahiba', type: 'Dune field', coordinates: [22.5, 58.7], description: 'Tall orange-red dunes' },
            { name: 'Southern Wahiba', type: 'Dune field', coordinates: [21.5, 58.7], description: 'White and yellow dunes' },
            { name: 'Al Wasil', type: 'Village', coordinates: [22.4, 58.8], description: 'Desert village and camp area' },
            { name: 'Wadi Bani Khalid', type: 'Wadi', coordinates: [22.6, 59.1], description: 'Oasis with pools nearby' }
        ],
        
        oases: [
            { name: 'Al Wasil', coordinates: [22.4, 58.8], country: 'Oman', population: 3000 },
            { name: 'Bidiyah', coordinates: [22.45, 59.0], country: 'Oman', population: 5000 }
        ],
        
        cities: [
            { name: 'Ibra', coordinates: [22.69, 58.53], country: 'Oman', population: 50000 },
            { name: 'Sur', coordinates: [22.57, 59.53], country: 'Oman', population: 80000 },
            { name: 'Muscat', coordinates: [23.61, 58.59], country: 'Oman', population: 1550000 }
        ],
        
        biodiversity: {
            plants: ['Ghaf Tree', 'Prosopis', 'Desert Grass', 'Wild Flowers (after rain)'],
            animals: ['Arabian Oryx (reintroduced)', 'Sand Gazelle', 'Arabian Wolf', 'Sand Cat', 'Spiny-tailed Lizard', 'Desert Monitor'],
            endangeredSpecies: ['Arabian Leopard', 'Arabian Tahr']
        },
        
        humanLife: {
            peoples: ['Bedouin (Al Wahiba tribe)', 'Omani'],
            lifestyle: 'Bedouin herding, camel breeding, tourism',
            population: '~3,000 Bedouin in the sands'
        },
        
        economy: [
            { label: 'Tourism', value: 'Desert camps, dune bashing, camel riding' },
            { label: 'Camel Breeding', value: 'Racing camels are prized' },
            { label: 'Goat Herding', value: 'Traditional pastoral activity' },
            { label: 'Date Farming', value: 'In oasis areas' }
        ],
        
        environmentalIssues: [
            { label: 'Tourism Impact', value: '4WD vehicles damaging dunes' },
            { label: 'Overgrazing', value: 'Goats stripping vegetation' },
            { label: 'Development', value: 'Roads and infrastructure' },
            { label: 'Climate Change', value: 'Changing rainfall patterns' }
        ],
        
        historicalImportance: [
            { label: 'Bedouin Heritage', value: 'Al Wahiba tribe homeland for centuries' },
            { label: 'Trade Routes', value: 'Frankincense trade passed edges' },
            { label: 'Scientific Survey', value: 'Royal Geographical Society expedition 1986' },
            { label: 'Camel Culture', value: 'Center of Omani camel breeding' }
        ],
        
        funFacts: [
            'Also officially called Sharqiya Sands',
            'Home to over 16,000 species of invertebrates',
            'Bedouin have lived here for over 1,000 years',
            'The Al Wahiba tribe gave the sands their name',
            'Dunes can be orange in north, white in south',
            'Royal Geographical Society conducted major study 1986',
            'Racing camels here are worth hundreds of thousands of dollars',
            'One of the most accessible sand deserts in the world'
        ],
        
        journeyWaypoints: [
            { name: 'Desert Edge', coordinates: [22.5, 58.5], description: 'Entry to the sands' },
            { name: 'Al Wasil Camps', coordinates: [22.4, 58.8], description: 'Bedouin tourism hub' },
            { name: 'Northern Red Dunes', coordinates: [22.6, 58.7], description: 'Tallest orange dunes' },
            { name: 'Southern White Sands', coordinates: [21.5, 58.7], description: 'White and yellow dunes' },
            { name: 'Wadi Bani Khalid', coordinates: [22.6, 59.1], description: 'Nearby oasis pools' }
        ]
    },

    // ========================================
    // #38 - REGISTAN DESERT
    // ========================================
    {
        id: 'registan-desert',
        name: 'Registan Desert',
        countries: [
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 146000,
        rank: 38,
        coordinates: [30.5, 65.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Registan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [63.0, 28.5], [63.0, 32.5], [68.0, 32.5], [68.0, 28.5], [63.0, 28.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '-10°C',
            winterTempAvg: '10°C',
            maxRecorded: '52°C',
            annualRainfall: '<100mm',
            rainyMonths: 'Winter (sparse)'
        },
        
        formation: {
            type: 'Sand desert',
            causes: ['Wind erosion from surrounding mountains', 'Lack of rainfall', 'Ancient alluvial deposits'],
            age: 'Unknown, ancient formation'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Large shifting sand dunes' },
            { name: 'Gravel Plains', description: 'Stone-covered reg surfaces' },
            { name: 'Dry Riverbeds', description: 'Seasonal watercourses' },
            { name: 'Salt Flats', description: 'Seasonal salt pans' }
        ],
        
        features: [
            { name: 'Helmand River', type: 'River', coordinates: [31.0, 64.5], description: 'Major river skirting the desert' },
            { name: 'Dasht-e Margo', type: 'Desert', coordinates: [30.5, 63.5], description: 'Desert of Death region' },
            { name: 'Chagai Hills', type: 'Hills', coordinates: [29.0, 64.5], description: 'Mountains on Pakistan border' },
            { name: 'Central Registan', type: 'Sand sea', coordinates: [30.5, 65.5], description: 'Heart of the sand desert' }
        ],
        
        oases: [
            { name: 'Lashkar Gah', coordinates: [31.59, 64.37], country: 'Afghanistan', population: 200000 },
            { name: 'Kandahar', coordinates: [31.63, 65.71], country: 'Afghanistan', population: 615000 }
        ],
        
        cities: [
            { name: 'Kandahar', coordinates: [31.63, 65.71], country: 'Afghanistan', population: 615000 },
            { name: 'Lashkar Gah', coordinates: [31.59, 64.37], country: 'Afghanistan', population: 200000 },
            { name: 'Quetta', coordinates: [30.18, 66.99], country: 'Pakistan', population: 1000000 }
        ],
        
        biodiversity: {
            plants: ['Tamarisk', 'Calotropis', 'Acacia', 'Haloxylon', 'Desert scrub'],
            animals: ['Goitered Gazelle', 'Wild Ass', 'Caracal', 'Sand Cat', 'Monitor Lizard', 'Houbara Bustard'],
            endangeredSpecies: ['Afghan Tortoise', 'Houbara Bustard (vulnerable)', 'Asiatic Cheetah (possibly extinct here)']
        },
        
        humanLife: {
            peoples: ['Pashtun', 'Baloch'],
            lifestyle: 'Nomadic herding, limited settlement',
            population: '~100,000 in surrounding areas'
        },
        
        economy: [
            { label: 'Pastoral', value: 'Sheep and goat herding' },
            { label: 'Limited Agriculture', value: 'Helmand valley irrigation' },
            { label: 'Trade Routes', value: 'Historic trade connections' },
            { label: 'Natural Resources', value: 'Potential mineral deposits' }
        ],
        
        environmentalIssues: [
            { label: 'Conflict', value: 'Decades of war prevent conservation' },
            { label: 'Desertification', value: 'Expanding desert edges' },
            { label: 'Water Scarcity', value: 'Helmand River disputes with Iran' },
            { label: 'Poaching', value: 'Wildlife hunting' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Southern routes passed nearby' },
            { label: 'Alexander the Great', value: 'Crossed the region 330 BCE' },
            { label: 'Kandahar', value: 'Founded by Alexander (Alexandría Arachosia)' },
            { label: 'Modern Conflicts', value: 'Strategic during recent wars' }
        ],
        
        funFacts: [
            'Registan means "Land of Sand" in Persian',
            'One of the least explored deserts due to conflict',
            'Alexander the Great led his army through here',
            'Kandahar was founded by Alexander and named after him',
            'The Helmand River provides the only major water source',
            'Temperatures range from -10°C to 50°C',
            'Home to some of the last Asiatic Cheetahs (possibly)',
            'Largely unstudied by modern scientists due to instability'
        ],
        
        journeyWaypoints: [
            { name: 'Kandahar', coordinates: [31.63, 65.71], description: 'Historic city, Alexanders foundation' },
            { name: 'Helmand Valley', coordinates: [31.59, 64.37], description: 'River valley agriculture' },
            { name: 'Central Registan', coordinates: [30.5, 65.5], description: 'Heart of the sand desert' },
            { name: 'Dasht-e Margo', coordinates: [30.5, 63.5], description: 'Desert of Death' },
            { name: 'Pakistan Border', coordinates: [30.0, 66.5], description: 'Eastern desert edge' }
        ]
    },

    // ========================================
    // #39 - CHOLISTAN DESERT
    // ========================================
    {
        id: 'cholistan-desert',
        name: 'Cholistan Desert',
        countries: [
            { name: 'Pakistan', code: 'PK' },
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 26300,
        rank: 39,
        coordinates: [28.5, 71.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1519748771451-a94c596fad67?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Cholistan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [69.5, 27.5], [69.5, 30.0], [73.0, 30.0], [73.0, 27.5], [69.5, 27.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '0°C',
            winterTempAvg: '15°C',
            maxRecorded: '52°C',
            annualRainfall: '100-200mm',
            rainyMonths: 'July-September (monsoon edges)'
        },
        
        formation: {
            type: 'Subtropical sandy desert',
            causes: ['Extension of Thar Desert', 'Ghaggar-Hakra River dried up', 'Monsoon rain shadow'],
            age: '~4,000 years (since Ghaggar dried)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Shifting dunes called tibba' },
            { name: 'Tobas', description: 'Rainwater collection ponds' },
            { name: 'Dahars', description: 'Flat elevated areas' },
            { name: 'Dry River Beds', description: 'Ancient Ghaggar-Hakra course' }
        ],
        
        features: [
            { name: 'Derawar Fort', type: 'Fort', coordinates: [28.77, 71.34], description: 'Massive 40-bastion desert fortress' },
            { name: 'Cholistan Rally', type: 'Event', coordinates: [28.5, 71.0], description: 'Annual desert jeep rally' },
            { name: 'Ancient Hakra Sites', type: 'Archaeological', coordinates: [28.5, 71.5], description: 'Indus Valley civilization ruins' },
            { name: 'Channan Pir', type: 'Religious site', coordinates: [28.5, 71.2], description: 'Annual desert festival site' }
        ],
        
        oases: [
            { name: 'Fort Abbas', coordinates: [29.19, 72.85], country: 'Pakistan', population: 30000 },
            { name: 'Yazman', coordinates: [29.12, 71.75], country: 'Pakistan', population: 50000 }
        ],
        
        cities: [
            { name: 'Bahawalpur', coordinates: [29.4, 71.68], country: 'Pakistan', population: 800000 },
            { name: 'Rahim Yar Khan', coordinates: [28.42, 70.3], country: 'Pakistan', population: 400000 },
            { name: 'Fort Abbas', coordinates: [29.19, 72.85], country: 'Pakistan', population: 30000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Capparis', 'Calligonum', 'Prosopis cineraria', 'Desert grasses'],
            animals: ['Chinkara (Indian Gazelle)', 'Desert Fox', 'Blue Bull (Nilgai)', 'Desert Cat', 'Spiny-tailed Lizard', 'Indian Bustard'],
            endangeredSpecies: ['Great Indian Bustard (critically endangered)', 'Chinkara (vulnerable)']
        },
        
        humanLife: {
            peoples: ['Rohi', 'Marri', 'Lund', 'Channar Baloch'],
            lifestyle: 'Semi-nomadic herding, camel breeding',
            population: '~1.5 million (semi-nomadic)'
        },
        
        economy: [
            { label: 'Livestock', value: 'Cattle, camels, sheep, goats' },
            { label: 'Handicrafts', value: 'Traditional embroidery and pottery' },
            { label: 'Tourism', value: 'Derawar Fort, desert safaris' },
            { label: 'Mining', value: 'Gypsum and other minerals' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Expanding due to overgrazing' },
            { label: 'Water Scarcity', value: 'Drying of traditional tobas' },
            { label: 'Overgrazing', value: 'Too many livestock for carrying capacity' },
            { label: 'Climate Change', value: 'Monsoon becoming less reliable' }
        ],
        
        historicalImportance: [
            { label: 'Indus Valley', value: 'Hakra sites contemporary with Harappa' },
            { label: 'Ghaggar-Hakra River', value: 'Ancient river supported civilization' },
            { label: 'Derawar Fort', value: 'Built 9th century, expanded by Abbasis' },
            { label: 'Princely State', value: 'Part of Bahawalpur princely state' }
        ],
        
        funFacts: [
            'Cholistan means "Land of the Rohi people"',
            'Derawar Fort has 40 bastions and walls 30 meters high',
            'The annual Cholistan Jeep Rally is one of the biggest in Asia',
            'The Ghaggar-Hakra River was once as important as the Indus',
            'Semi-nomadic Cholistanis move with their herds seasonally',
            'Contains over 400 archaeological sites from Indus Valley era',
            'Tobas (rainwater ponds) are the only water source for many',
            'Camels are prized for racing and often worth small fortunes'
        ],
        
        journeyWaypoints: [
            { name: 'Bahawalpur', coordinates: [29.4, 71.68], description: 'Gateway city with palaces' },
            { name: 'Derawar Fort', coordinates: [28.77, 71.34], description: 'Massive desert fortress' },
            { name: 'Central Cholistan', coordinates: [28.5, 71.0], description: 'Heart of the desert' },
            { name: 'Hakra Sites', coordinates: [28.5, 71.5], description: 'Ancient civilization ruins' },
            { name: 'India Border', coordinates: [28.5, 72.5], description: 'Eastern edge meets Thar' }
        ]
    },

    // ========================================
    // #40 - BETPAK-DALA (HUNGER STEPPE)
    // ========================================
    {
        id: 'betpak-dala',
        name: 'Betpak-Dala',
        countries: [
            { name: 'Kazakhstan', code: 'KZ' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 75000,
        rank: 40,
        coordinates: [45.0, 68.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Betpak-Dala' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [65.0, 43.5], [65.0, 47.0], [72.0, 47.0], [72.0, 43.5], [65.0, 43.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '28°C',
            winterTempMin: '-40°C',
            winterTempAvg: '-15°C',
            maxRecorded: '44°C',
            annualRainfall: '100-150mm',
            rainyMonths: 'Spring (April-May)'
        },
        
        formation: {
            type: 'Clay semi-desert',
            causes: ['Continental interior climate', 'Far from ocean moisture', 'Cold Siberian air masses'],
            age: 'Post-glacial formation'
        },
        
        landforms: [
            { name: 'Clay Plains', description: 'Vast flat clay surfaces' },
            { name: 'Takyrs', description: 'Cracked clay pans' },
            { name: 'Sandy Areas', description: 'Isolated sand accumulations' },
            { name: 'Salt Depressions', description: 'Seasonal salt lakes' }
        ],
        
        features: [
            { name: 'Saryarka Steppe', type: 'Steppe', coordinates: [46.5, 67.5], description: 'UNESCO World Heritage area nearby' },
            { name: 'Korgalzhyn Reserve', type: 'Reserve', coordinates: [50.4, 69.2], description: 'Wetland reserve on edge' },
            { name: 'Chu River', type: 'River', coordinates: [44.0, 67.5], description: 'River crossing southern edge' },
            { name: 'Baikonur', type: 'Spaceport', coordinates: [45.97, 63.31], description: 'Famous spaceport on western edge' }
        ],
        
        oases: [
            { name: 'Zhezkazgan', coordinates: [47.78, 67.71], country: 'Kazakhstan', population: 85000 },
            { name: 'Kyzylorda', coordinates: [44.85, 65.52], country: 'Kazakhstan', population: 275000 }
        ],
        
        cities: [
            { name: 'Zhezkazgan', coordinates: [47.78, 67.71], country: 'Kazakhstan', population: 85000 },
            { name: 'Kyzylorda', coordinates: [44.85, 65.52], country: 'Kazakhstan', population: 275000 },
            { name: 'Karaganda', coordinates: [49.8, 73.1], country: 'Kazakhstan', population: 500000 },
            { name: 'Baikonur', coordinates: [45.97, 63.31], country: 'Kazakhstan', population: 23000 }
        ],
        
        biodiversity: {
            plants: ['Wormwood (Artemisia)', 'Saltwort', 'Feather Grass', 'Saxaul (sparse)', 'Anabasis'],
            animals: ['Saiga Antelope', 'Corsac Fox', 'Steppe Eagle', 'Great Bustard', 'Tolai Hare', 'Long-eared Hedgehog'],
            endangeredSpecies: ['Saiga Antelope (critically endangered)', 'Sociable Lapwing (critically endangered)']
        },
        
        humanLife: {
            peoples: ['Kazakh'],
            lifestyle: 'Nomadic herding largely abandoned, mining communities',
            population: '~500,000 in surrounding region'
        },
        
        economy: [
            { label: 'Mining', value: 'Copper, uranium, coal' },
            { label: 'Space Industry', value: 'Baikonur Cosmodrome' },
            { label: 'Pastoral', value: 'Sheep and goat herding' },
            { label: 'Solar Potential', value: 'Large-scale solar being developed' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Pollution', value: 'Heavy metal contamination' },
            { label: 'Saiga Crisis', value: 'Mass die-offs from disease' },
            { label: 'Soviet Legacy', value: 'Nuclear and rocket fuel contamination' },
            { label: 'Desertification', value: 'Overgrazing and climate change' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Northern routes crossed edges' },
            { label: 'Kazakh Khanate', value: 'Nomadic Kazakh homeland' },
            { label: 'Soviet Era', value: 'Gulags and forced settlements' },
            { label: 'Space Race', value: 'Baikonur launched first human to space' }
        ],
        
        funFacts: [
            'Betpak-Dala means "Hunger Steppe" in Kazakh',
            'Baikonur Cosmodrome launched Sputnik and Yuri Gagarin',
            'Home to the critically endangered Saiga antelope',
            'Temperature can swing 80°C between summer and winter',
            'One of the most inhospitable places in Central Asia',
            'Largely empty - one of the least populated areas on Earth',
            'Soviet-era contamination remains from nuclear and space programs',
            'The Saiga has a distinctive bulbous nose for filtering dust'
        ],
        
        journeyWaypoints: [
            { name: 'Baikonur', coordinates: [45.97, 63.31], description: 'Legendary spaceport' },
            { name: 'Western Betpak-Dala', coordinates: [45.5, 65.0], description: 'Clay desert plains' },
            { name: 'Central Desert', coordinates: [45.0, 68.0], description: 'Heart of the Hunger Steppe' },
            { name: 'Zhezkazgan', coordinates: [47.78, 67.71], description: 'Copper mining city' },
            { name: 'Eastern Edge', coordinates: [45.5, 71.0], description: 'Transition to steppe' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_4;
}
