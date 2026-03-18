// mountains-data-8.js - Mountains 71-80 (Africa & Volcanic Peaks)
// Part A: Mountains 71-74

const MOUNTAINS_DATA_8_PART_A = [
    // 71. Mount Meru
    {
        id: 'mount-meru',
        name: 'Mount Meru',
        localNames: [
            { language: 'Swahili', name: 'Mlima Meru' },
            { language: 'Meru', name: 'Ol Doinyo Orok' }
        ],
        countries: [
            { name: 'Tanzania', code: 'TZ' }
        ],
        continent: 'Africa',
        mountainRange: 'East African Mountains',
        subRange: 'Eastern Rift Volcanoes',
        elevation: 4566,
        prominence: 3170,
        isolation: 70,
        coordinates: [-3.2500, 36.7500],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '2-3 million years',
            tectonicPlates: ['African Plate', 'Somali Plate'],
            process: 'Formed along East African Rift system. Massive volcanic collapse around 8,000 years ago removed entire eastern side creating horseshoe-shaped caldera. Ash cone within crater still active with last eruption in 1910. Originally may have been higher than Kilimanjaro.'
        },
        
        climbing: {
            firstAscent: {
                date: '1901',
                climbers: ['Fritz Jaeger'],
                route: 'Momella Route',
                expedition: 'German explorer during colonial era exploration of Tanzania.'
            },
            totalAscents: 8000,
            fatalities: 10,
            successRate: '85%',
            bestSeason: 'June to February (dry seasons)',
            difficulty: 'Non-technical trekking',
            routes: [
                { name: 'Momella Route', country: 'Tanzania', difficulty: 'Trekking', description: 'Only route, 3-4 days, excellent Kilimanjaro acclimatization' },
                { name: 'Summit Day via Socialist Peak', country: 'Tanzania', difficulty: 'Scramble', description: 'Final approach involves exposed ridge walking' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-15°C',
            summerHigh: '5°C',
            snowfall: 'Occasional frost and light snow possible',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'No permanent ice, occasional frost only' }
        ],
        
        baseCamps: [
            { name: 'Momella Gate', elevation: 1500, country: 'Tanzania', coordinates: [-3.2333, 36.8500] },
            { name: 'Miriakamba Hut', elevation: 2514, country: 'Tanzania', coordinates: [-3.2417, 36.7833] },
            { name: 'Saddle Hut', elevation: 3566, country: 'Tanzania', coordinates: [-3.2500, 36.7583] },
            { name: 'Rhino Point', elevation: 3800, country: 'Tanzania', coordinates: [-3.2500, 36.7500] }
        ],
        
        nearbyPeaks: [
            { name: 'Little Meru', elevation: 3820, coordinates: [-3.2333, 36.7833] },
            { name: 'Ash Cone', elevation: 3667, coordinates: [-3.2583, 36.7667] },
            { name: 'Mount Kilimanjaro', elevation: 5895, coordinates: [-3.0758, 37.3533] },
            { name: 'Ol Doinyo Lengai', elevation: 2962, coordinates: [-2.7642, 35.9025] }
        ],
        
        nearbyCities: [
            { name: 'Arusha', coordinates: [-3.3869, 36.6830], country: 'Tanzania', population: 420000 },
            { name: 'Moshi', coordinates: [-3.3500, 37.3333], country: 'Tanzania', population: 200000 },
            { name: 'Usa River', coordinates: [-3.3667, 36.8500], country: 'Tanzania', population: 15000 },
            { name: 'Nairobi', coordinates: [-1.2864, 36.8172], country: 'Kenya', population: 4400000 }
        ],
        
        flora: ['Montane Forest', 'Giant Heather', 'Hagenia Trees', 'Juniper Forest', 'Alpine Desert Plants', 'Everlasting Flowers'],
        fauna: ['Elephant', 'Buffalo', 'Giraffe', 'Colobus Monkey', 'Leopard', 'Bushbuck', 'Dik-dik', 'Hornbill'],
        
        economicImportance: [
            { label: 'Kilimanjaro Acclimatization', value: 'Popular prep climb before Kilimanjaro' },
            { label: 'Arusha National Park', value: 'Major tourist attraction for park' },
            { label: 'Wildlife Viewing', value: 'Combined trekking and safari experience' },
            { label: 'Water Source', value: 'Important watershed for Arusha region' }
        ],
        
        environmentalIssues: [
            { label: 'Deforestation', value: 'Pressure on forest buffer zone' },
            { label: 'Human-Wildlife Conflict', value: 'Elephants and buffalo encounter trekkers' },
            { label: 'Volcanic Risk', value: 'Active volcano with eruption potential' },
            { label: 'Water Extraction', value: 'Growing demands on mountain water' }
        ],
        
        conservation: [
            { label: 'Arusha National Park', value: 'Fully protected within national park' },
            { label: 'Armed Rangers', value: 'Rangers accompany all treks due to wildlife' },
            { label: 'Buffer Zone', value: 'Forest reserve surrounds park' },
            { label: 'Research Station', value: 'Ongoing volcanic and ecological monitoring' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Holy to local Meru and Maasai peoples' },
            { label: 'Colonial History', value: 'German then British colonial exploration' },
            { label: 'Catastrophic Collapse', value: 'Eastern flank collapsed ~8,000 years ago' },
            { label: 'Name Origin', value: 'Named after Meru people who live on slopes' }
        ],
        
        records: [
            { record: 'Fifth Highest Africa', value: 'Fifth highest peak in Africa' },
            { record: 'Second Highest Tanzania', value: 'Second only to Kilimanjaro in Tanzania' },
            { record: 'Best Acclimatization', value: 'Considered ideal Kilimanjaro prep' },
            { record: 'Active Volcano', value: 'One of Africas most recently active volcanoes' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 72. Ras Dashen
    {
        id: 'ras-dashen',
        name: 'Ras Dashen',
        localNames: [
            { language: 'Amharic', name: 'ራስ ዳሸን' },
            { language: 'English', name: 'Ras Dejen' }
        ],
        countries: [
            { name: 'Ethiopia', code: 'ET' }
        ],
        continent: 'Africa',
        mountainRange: 'Simien Mountains',
        subRange: 'Ethiopian Highlands',
        elevation: 4550,
        prominence: 3997,
        isolation: 1707,
        coordinates: [13.2400, 38.3700],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
        
        formation: {
            type: 'Shield Volcano / Basalt Plateau',
            age: '30-40 million years',
            tectonicPlates: ['African Plate', 'Somali Plate'],
            process: 'Part of Ethiopian Highlands formed by massive flood basalt eruptions. Subsequent erosion carved dramatic escarpments and pinnacles. Part of Afro-Alpine ecosystem found only in Ethiopian highlands. Not a typical peak but rather highest point on massive plateau.'
        },
        
        climbing: {
            firstAscent: {
                date: '1841',
                climbers: ['Ferret and Galinier', 'French Explorers'],
                route: 'From Simien Plateau',
                expedition: 'French military officers during diplomatic mission to Ethiopia.'
            },
            totalAscents: 2000,
            fatalities: 3,
            successRate: '95%',
            bestSeason: 'October to March (dry season)',
            difficulty: 'Non-technical trekking',
            routes: [
                { name: 'Standard Route via Chennek', country: 'Ethiopia', difficulty: 'Trekking', description: '3-4 day trek through Simien Mountains NP' },
                { name: 'Short Route from Arkwasiye', country: 'Ethiopia', difficulty: 'Trekking', description: 'Shorter 2-day option, less scenic' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-10°C',
            summerHigh: '10°C',
            snowfall: 'Rare, occasional hail and frost',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'No permanent ice, frost only' }
        ],
        
        baseCamps: [
            { name: 'Debark', elevation: 2850, country: 'Ethiopia', coordinates: [13.1333, 37.9000] },
            { name: 'Sankaber Camp', elevation: 3230, country: 'Ethiopia', coordinates: [13.2167, 38.0500] },
            { name: 'Geech Camp', elevation: 3600, country: 'Ethiopia', coordinates: [13.2500, 38.2000] },
            { name: 'Chennek Camp', elevation: 3620, country: 'Ethiopia', coordinates: [13.2667, 38.3000] }
        ],
        
        nearbyPeaks: [
            { name: 'Kidis Yared', elevation: 4453, coordinates: [13.2333, 38.3500] },
            { name: 'Bwahit', elevation: 4430, coordinates: [13.2500, 38.2500] },
            { name: 'Silki', elevation: 4420, coordinates: [13.2333, 38.3167] },
            { name: 'Imet Gogo', elevation: 3926, coordinates: [13.2333, 38.1500] }
        ],
        
        nearbyCities: [
            { name: 'Debark', coordinates: [13.1333, 37.9000], country: 'Ethiopia', population: 30000 },
            { name: 'Gondar', coordinates: [12.6000, 37.4667], country: 'Ethiopia', population: 350000 },
            { name: 'Axum', coordinates: [14.1167, 38.7167], country: 'Ethiopia', population: 65000 },
            { name: 'Addis Ababa', coordinates: [9.0320, 38.7500], country: 'Ethiopia', population: 3600000 }
        ],
        
        flora: ['Giant Lobelia', 'Afro-Alpine Moorland', 'Tree Heather', 'St. Johns Wort', 'Kosso Tree', 'Ethiopian Rose'],
        fauna: ['Gelada Baboon', 'Walia Ibex (endemic)', 'Ethiopian Wolf', 'Lammergeier', 'Klipspringer', 'Thick-billed Raven'],
        
        economicImportance: [
            { label: 'Trekking Tourism', value: 'Major destination for adventure tourism' },
            { label: 'Endemic Wildlife', value: 'Only place to see certain species' },
            { label: 'UNESCO Site', value: 'World Heritage designation brings attention' },
            { label: 'Community Tourism', value: 'Local employment from trekking industry' }
        ],
        
        environmentalIssues: [
            { label: 'Habitat Loss', value: 'Agricultural encroachment on park boundaries' },
            { label: 'Endangered Species', value: 'Walia Ibex critically endangered (<500)' },
            { label: 'Overgrazing', value: 'Livestock grazing in protected areas' },
            { label: 'Climate Change', value: 'Afro-Alpine habitat shrinking' }
        ],
        
        conservation: [
            { label: 'Simien Mountains NP', value: 'UNESCO World Heritage Site since 1978' },
            { label: 'Walia Ibex Protection', value: 'Species-specific conservation programs' },
            { label: 'Ethiopian Wolf Project', value: 'Ongoing research and protection' },
            { label: 'Park Expansion', value: 'Buffer zones being added' }
        ],
        
        historicalImportance: [
            { label: 'Roof of Africa', value: 'Ethiopian Highlands called Roof of Africa' },
            { label: 'Ancient History', value: 'Near ancient Axumite civilization sites' },
            { label: 'Strategic Height', value: 'Used historically as defensive position' },
            { label: 'Name Meaning', value: 'Ras Dashen means head guard in Amharic' }
        ],
        
        records: [
            { record: 'Highest Ethiopia', value: 'Highest peak in Ethiopia' },
            { record: 'Fourth Highest Africa', value: 'Fourth highest peak in Africa' },
            { record: 'Endemic Species', value: 'Home to most Ethiopian endemic mammals' },
            { record: 'UNESCO Heritage', value: 'Part of Africas most dramatic mountain scenery' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 73. Toubkal
    {
        id: 'toubkal',
        name: 'Toubkal',
        localNames: [
            { language: 'Berber', name: 'ⵜⵓⴱⵇⴰⵍ (Tubqal)' },
            { language: 'Arabic', name: 'توبقال (Tūbqāl)' }
        ],
        countries: [
            { name: 'Morocco', code: 'MA' }
        ],
        continent: 'Africa',
        mountainRange: 'Atlas Mountains',
        subRange: 'High Atlas',
        elevation: 4167,
        prominence: 3755,
        isolation: 2078,
        coordinates: [31.0594, -7.9153],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '65-80 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed during Alpine orogeny when African Plate collided with Eurasian Plate. Composed of Precambrian volcanic and sedimentary rocks thrust upward. Continued uplift and erosion created current topography. Heavy glaciation during ice ages carved cirques.'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 12, 1923',
                climbers: ['Marquis de Segonzac', 'Vincent Berger', 'Hubert Dolbeau'],
                route: 'South Cwm Route',
                expedition: 'French expedition during colonial period exploration of Morocco.'
            },
            totalAscents: 30000,
            fatalities: 15,
            successRate: '90%',
            bestSeason: 'April to October',
            difficulty: 'Non-technical scramble',
            routes: [
                { name: 'South Cwm (Normal Route)', country: 'Morocco', difficulty: 'Scramble', description: '2-day trek via Imlil and Refuge du Toubkal' },
                { name: 'North Face', country: 'Morocco', difficulty: 'AD', description: 'Technical snow/ice route in winter' },
                { name: 'Ikhibi Sud', country: 'Morocco', difficulty: 'Scramble', description: 'Alternative approach from south' },
                { name: 'Ouanoukrim Traverse', country: 'Morocco', difficulty: 'Scramble', description: 'Ridge traverse from neighboring peak' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-20°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snow, typically snow-free June-September',
            winds: 'Can be severe, especially in winter',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No permanent glaciers', length: 'N/A', description: 'Seasonal snow only, former glacial features visible' }
        ],
        
        baseCamps: [
            { name: 'Imlil', elevation: 1740, country: 'Morocco', coordinates: [31.1333, -7.9167] },
            { name: 'Refuge du Toubkal (Les Mouflons)', elevation: 3207, country: 'Morocco', coordinates: [31.0750, -7.9167] },
            { name: 'Refuge CAF', elevation: 3207, country: 'Morocco', coordinates: [31.0758, -7.9172] },
            { name: 'Sidi Chamharouch', elevation: 2350, country: 'Morocco', coordinates: [31.1000, -7.9167] }
        ],
        
        nearbyPeaks: [
            { name: 'Ouanoukrim', elevation: 4089, coordinates: [31.0500, -7.9333] },
            { name: 'Timesguida', elevation: 4089, coordinates: [31.0483, -7.9350] },
            { name: 'Ras nOuanoukrim', elevation: 4083, coordinates: [31.0517, -7.9367] },
            { name: 'Aksoual', elevation: 3912, coordinates: [31.1000, -7.8667] }
        ],
        
        nearbyCities: [
            { name: 'Marrakech', coordinates: [31.6295, -7.9811], country: 'Morocco', population: 930000 },
            { name: 'Imlil', coordinates: [31.1333, -7.9167], country: 'Morocco', population: 2000 },
            { name: 'Asni', coordinates: [31.2500, -7.9833], country: 'Morocco', population: 5000 },
            { name: 'Ouarzazate', coordinates: [30.9167, -6.9000], country: 'Morocco', population: 70000 }
        ],
        
        flora: ['Thuya Trees', 'Juniper', 'Holm Oak', 'Walnut', 'Wild Thyme', 'Berber Iris', 'Cushion Plants'],
        fauna: ['Barbary Macaque', 'Mouflon', 'Wild Boar', 'Fennec Fox', 'Golden Eagle', 'Lammergeier', 'Barbary Partridge'],
        
        economicImportance: [
            { label: 'Trekking Tourism', value: 'Most climbed peak in North Africa' },
            { label: 'Marrakech Gateway', value: 'Day trips and short treks from major tourist city' },
            { label: 'Berber Villages', value: 'Tourism supports local Amazigh communities' },
            { label: 'Guide Economy', value: 'Hundreds of local guides employed' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Heavy tourist traffic on main route' },
            { label: 'Waste Management', value: 'Litter problem on popular trails' },
            { label: 'Water Scarcity', value: 'Climate change affecting water sources' },
            { label: 'Deforestation', value: 'Wood collection depleting forests' }
        ],
        
        conservation: [
            { label: 'Toubkal National Park', value: 'Protected since 1942, Moroccos first national park' },
            { label: 'UNESCO Biosphere', value: 'Part of proposed biosphere reserve' },
            { label: 'Community Programs', value: 'Eco-tourism initiatives with villages' },
            { label: 'Reforestation', value: 'Tree planting programs active' }
        ],
        
        historicalImportance: [
            { label: 'Berber Homeland', value: 'Heartland of Amazigh (Berber) culture' },
            { label: 'Trade Routes', value: 'Historic trans-Saharan trade crossed nearby' },
            { label: 'French Colonialism', value: 'Explored during French protectorate' },
            { label: 'December 2018 Tragedy', value: 'Two tourists murdered, heightened security since' }
        ],
        
        records: [
            { record: 'Highest North Africa', value: 'Highest peak in North Africa and Arab World' },
            { record: 'Most Climbed Africa', value: 'Most frequently climbed peak in Africa' },
            { record: 'Closest 4000m to Europe', value: 'Easiest access to 4000m from Europe' },
            { record: 'Highest Atlas', value: 'Highest peak in entire Atlas Mountains' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 74. Mount Cameroon
    {
        id: 'mount-cameroon',
        name: 'Mount Cameroon',
        localNames: [
            { language: 'Bakweri', name: 'Fako' },
            { language: 'German', name: 'Kamerunberg' },
            { language: 'English', name: 'Mount Cameroon' }
        ],
        countries: [
            { name: 'Cameroon', code: 'CM' }
        ],
        continent: 'Africa',
        mountainRange: 'Cameroon Volcanic Line',
        subRange: 'Gulf of Guinea Highlands',
        elevation: 4095,
        prominence: 3901,
        isolation: 650,
        coordinates: [4.2033, 9.1708],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '10-15 million years',
            tectonicPlates: ['African Plate'],
            process: 'Formed along Cameroon Volcanic Line, hotspot track running from Atlantic into continent. Most active volcano in West Africa with eruptions in 1999, 2000, and 2012. Rises directly from Atlantic coast creating dramatic profile. Lava flows reach sea during major eruptions.'
        },
        
        climbing: {
            firstAscent: {
                date: 'December 1861',
                climbers: ['Richard Francis Burton', 'Gustav Mann'],
                route: 'South Face from Buea',
                expedition: 'British explorer Burton with German botanist during expedition.'
            },
            totalAscents: 5000,
            fatalities: 8,
            successRate: '85%',
            bestSeason: 'November to February (dry season)',
            difficulty: 'Non-technical trekking',
            routes: [
                { name: 'Guinea Fowl Route (Normal)', country: 'Cameroon', difficulty: 'Trekking', description: '2-3 days via Buea, most popular route' },
                { name: 'Race Route', country: 'Cameroon', difficulty: 'Trekking', description: 'Used for annual Mount Cameroon Race' },
                { name: 'Elephant Route', country: 'Cameroon', difficulty: 'Trekking', description: 'Alternative from northeast, less traveled' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-5°C',
            summerHigh: '8°C',
            snowfall: 'Rare frost, no permanent snow',
            winds: 'Moderate, monsoon rains heavy on seaward side',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Equatorial location, no ice' }
        ],
        
        baseCamps: [
            { name: 'Buea', elevation: 900, country: 'Cameroon', coordinates: [4.1500, 9.2333] },
            { name: 'Hut 1', elevation: 1800, country: 'Cameroon', coordinates: [4.1833, 9.2000] },
            { name: 'Hut 2', elevation: 2800, country: 'Cameroon', coordinates: [4.1917, 9.1833] },
            { name: 'Hut 3', elevation: 3700, country: 'Cameroon', coordinates: [4.2000, 9.1750] }
        ],
        
        nearbyPeaks: [
            { name: 'Etinde', elevation: 1713, coordinates: [4.0833, 9.1667] },
            { name: 'Mount Kupe', elevation: 2050, coordinates: [4.8167, 9.7000] },
            { name: 'Manengouba', elevation: 2411, coordinates: [5.0333, 9.8333] },
            { name: 'Bioko Peak (Equatorial Guinea)', elevation: 3011, coordinates: [3.5833, 8.7500] }
        ],
        
        nearbyCities: [
            { name: 'Buea', coordinates: [4.1500, 9.2333], country: 'Cameroon', population: 90000 },
            { name: 'Limbe', coordinates: [4.0167, 9.2000], country: 'Cameroon', population: 85000 },
            { name: 'Douala', coordinates: [4.0500, 9.7000], country: 'Cameroon', population: 2800000 },
            { name: 'Bamenda', coordinates: [5.9500, 10.1500], country: 'Cameroon', population: 500000 }
        ],
        
        flora: ['Montane Rainforest', 'Tree Ferns', 'Giant Lobelia', 'Hypericum', 'Afro-Alpine Grassland', 'Lava Flow Pioneers'],
        fauna: ['Forest Elephant', 'Drill (endangered)', 'Chimpanzee', 'Cross River Gorilla (rare)', 'Mount Cameroon Francolin', 'Bannermans Turaco'],
        
        economicImportance: [
            { label: 'Mount Cameroon Race', value: 'Annual race draws international athletes' },
            { label: 'Adventure Tourism', value: 'Growing trekking and volcano tourism' },
            { label: 'Agriculture', value: 'Fertile volcanic soil supports major farming' },
            { label: 'Plantation History', value: 'German colonial tea and rubber plantations' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Risk', value: 'Active volcano threatens nearby towns' },
            { label: 'Deforestation', value: 'Rainforest clearance ongoing' },
            { label: 'Poaching', value: 'Endangered drill and elephant hunting' },
            { label: 'Plantation Expansion', value: 'Palm oil and rubber encroaching forest' }
        ],
        
        conservation: [
            { label: 'Mount Cameroon National Park', value: 'Protected since 2009' },
            { label: 'Endemic Species', value: 'Many species found only here' },
            { label: 'Biodiversity Hotspot', value: 'Part of Cameroon Highlands hotspot' },
            { label: 'Research Station', value: 'Volcanic and ecological monitoring active' }
        ],
        
        historicalImportance: [
            { label: 'Hanno the Navigator', value: 'Carthaginian possibly saw eruption ~500 BC' },
            { label: 'Burton Exploration', value: 'Famous explorer Richard Burton climbed in 1861' },
            { label: 'German Colony', value: 'Kamerun colony established on slopes' },
            { label: 'Recent Eruptions', value: 'Eruptions in 1999, 2000, 2012' }
        ],
        
        records: [
            { record: 'Highest West Africa', value: 'Highest peak in West/Central Africa' },
            { record: 'Most Active W Africa', value: 'Most active volcano in West Africa' },
            { record: 'Sea to Summit', value: 'Rises directly from Atlantic coast' },
            { record: 'Mount Cameroon Race', value: 'Host of famous mountain race since 1973' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-8.js - Part B: Mountains 75-77

const MOUNTAINS_DATA_8_PART_B = [
    // 75. Mount Fuji
    {
        id: 'mount-fuji',
        name: 'Mount Fuji',
        localNames: [
            { language: 'Japanese', name: '富士山 (Fujisan)' },
            { language: 'English', name: 'Mount Fuji' }
        ],
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        mountainRange: 'Fuji Volcanic Zone',
        subRange: 'Izu-Bonin-Mariana Arc',
        elevation: 3776,
        prominence: 3776,
        isolation: 2077,
        coordinates: [35.3606, 138.7274],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '100,000 years (current form)',
            tectonicPlates: ['Philippine Sea Plate', 'Eurasian Plate', 'North American Plate'],
            process: 'Located at triple junction of three tectonic plates. Built from three overlapping volcanoes. Current cone formed in last 10,000 years. Last eruption 1707 deposited ash on Tokyo. Perfect symmetric cone from extensive explosive eruptions.'
        },
        
        climbing: {
            firstAscent: {
                date: '663 AD',
                climbers: ['Anonymous monk (En no Ozunu)'],
                route: 'Unknown',
                expedition: 'Traditional Japanese account attributes first ascent to Buddhist monk.'
            },
            totalAscents: 300000,
            fatalities: 25,
            successRate: '95%',
            bestSeason: 'July to September (official season)',
            difficulty: 'Non-technical hiking',
            routes: [
                { name: 'Yoshida Trail', country: 'Japan', difficulty: 'Hiking', description: 'Most popular, starting from 5th station, well-serviced' },
                { name: 'Subashiri Trail', country: 'Japan', difficulty: 'Hiking', description: 'Less crowded, forest approach' },
                { name: 'Gotemba Trail', country: 'Japan', difficulty: 'Hiking', description: 'Longest route, ash running descent' },
                { name: 'Fujinomiya Trail', country: 'Japan', difficulty: 'Hiking', description: 'Shortest but steepest route' }
            ]
        },
        
        climate: {
            summitTemperature: '-7°C average',
            winterLow: '-38°C',
            summerHigh: '5°C',
            snowfall: 'Heavy winter snow, typically clear July-August',
            winds: 'Can be extreme, especially outside summer',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Permanent Snowfields', length: '0.2 km', description: 'Small permanent snow patches in sheltered areas' }
        ],
        
        baseCamps: [
            { name: 'Yoshida 5th Station', elevation: 2300, country: 'Japan', coordinates: [35.4000, 138.7333] },
            { name: 'Subashiri 5th Station', elevation: 2000, country: 'Japan', coordinates: [35.3833, 138.7833] },
            { name: 'Fujinomiya 5th Station', elevation: 2400, country: 'Japan', coordinates: [35.3333, 138.7333] },
            { name: 'Gotemba 5th Station', elevation: 1450, country: 'Japan', coordinates: [35.3167, 138.8000] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Hoei', elevation: 2693, coordinates: [35.3333, 138.7500] },
            { name: 'Mount Kintoki', elevation: 1212, coordinates: [35.2667, 138.9833] },
            { name: 'Mount Ashitaka', elevation: 1504, coordinates: [35.2000, 138.8500] },
            { name: 'Mount Hakone', elevation: 1438, coordinates: [35.2167, 139.0167] }
        ],
        
        nearbyCities: [
            { name: 'Fujiyoshida', coordinates: [35.4833, 138.8000], country: 'Japan', population: 50000 },
            { name: 'Gotemba', coordinates: [35.3000, 138.9333], country: 'Japan', population: 88000 },
            { name: 'Shizuoka', coordinates: [34.9833, 138.3833], country: 'Japan', population: 700000 },
            { name: 'Tokyo', coordinates: [35.6762, 139.6503], country: 'Japan', population: 14000000 }
        ],
        
        flora: ['Japanese Stone Pine', 'Alpine Flowers', 'Moss', 'Lichen', 'Mountain Azalea', 'Larch Forest'],
        fauna: ['Japanese Serow', 'Asian Black Bear', 'Japanese Macaque', 'Fox', 'Japanese Giant Flying Squirrel', 'Ptarmigan'],
        
        economicImportance: [
            { label: 'National Symbol', value: 'Iconic symbol of Japan recognized worldwide' },
            { label: 'Tourism', value: '300,000+ climbers and millions of viewers annually' },
            { label: 'Cultural Industry', value: 'Endless merchandise, art, and media' },
            { label: 'Spiritual Tourism', value: 'Shinto and Buddhist pilgrimage site' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Severe congestion in climbing season' },
            { label: 'Waste Problem', value: 'Enormous trash and human waste issues' },
            { label: 'Volcanic Risk', value: 'Overdue for eruption based on historical patterns' },
            { label: 'Trail Erosion', value: 'Heavy foot traffic eroding paths' }
        ],
        
        conservation: [
            { label: 'UNESCO World Heritage', value: 'Cultural Heritage Site since 2013' },
            { label: 'Climbing Fee', value: 'Voluntary conservation fee collected' },
            { label: 'Waste Stations', value: 'Portable toilets and pack-out systems' },
            { label: 'Season Restrictions', value: 'Official season limits off-season climbing' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Shinto kami (spirit) dwelling place for millennia' },
            { label: 'Women Banned', value: 'Women prohibited until 1872' },
            { label: 'Hokusai Art', value: '36 Views of Mount Fuji - iconic woodblock prints' },
            { label: '1707 Eruption', value: 'Last eruption deposited ash 100km away in Tokyo' }
        ],
        
        records: [
            { record: 'Highest Japan', value: 'Highest peak in Japan at 3,776m' },
            { record: 'Most Climbed', value: 'Most climbed mountain in world (300,000+/year)' },
            { record: 'Most Photographed', value: 'One of most photographed mountains globally' },
            { record: 'Perfect Symmetry', value: 'Nearly perfect conical volcanic shape' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 76. Mount Erebus
    {
        id: 'mount-erebus',
        name: 'Mount Erebus',
        localNames: [
            { language: 'English', name: 'Mount Erebus' }
        ],
        countries: [
            { name: 'Antarctica', code: 'AQ' }
        ],
        continent: 'Antarctica',
        mountainRange: 'Transantarctic Mountains',
        subRange: 'Ross Island',
        elevation: 3794,
        prominence: 3794,
        isolation: 4914,
        coordinates: [-77.5281, 167.1531],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '1.3 million years',
            tectonicPlates: ['Antarctic Plate'],
            process: 'Formed over hotspot beneath Antarctic Plate. Worlds southernmost active volcano. Contains persistent lava lake in summit crater. Unique phonolite lava composition. Part of McMurdo Volcanic Group.'
        },
        
        climbing: {
            firstAscent: {
                date: 'March 10, 1908',
                climbers: ['Edgeworth David', 'Douglas Mawson', 'Alistair Mackay'],
                route: 'Northwestern Route',
                expedition: 'Part of Ernest Shackletons Nimrod Expedition.'
            },
            totalAscents: 200,
            fatalities: 5,
            successRate: '70%',
            bestSeason: 'November to February (Antarctic summer)',
            difficulty: 'PD to AD',
            routes: [
                { name: 'Northwestern Route', country: 'Antarctica', difficulty: 'PD', description: 'Original route, most straightforward, glacier travel' },
                { name: 'Western Route', country: 'Antarctica', difficulty: 'PD+', description: 'Alternative approach, more crevasses' },
                { name: 'Crater Rim', country: 'Antarctica', difficulty: 'AD', description: 'Approach to active crater, requires volcanic hazard assessment' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-60°C',
            summerHigh: '-20°C',
            snowfall: 'Constant snow accumulation',
            winds: 'Extreme katabatic winds possible',
            deathZone: 'Not applicable but extreme cold'
        },
        
        glaciers: [
            { name: 'Erebus Glacier Tongue', length: '11 km', description: 'Extends into McMurdo Sound' },
            { name: 'Barne Glacier', length: '5 km', description: 'Northwest side glacier' },
            { name: 'Terror Glacier', length: '3 km', description: 'Flows toward Mount Terror' }
        ],
        
        baseCamps: [
            { name: 'McMurdo Station', elevation: 10, country: 'Antarctica (USA)', coordinates: [-77.8419, 166.6863] },
            { name: 'Scott Base', elevation: 10, country: 'Antarctica (NZ)', coordinates: [-77.8500, 166.7667] },
            { name: 'Lower Erebus Hut', elevation: 3400, country: 'Antarctica', coordinates: [-77.5167, 167.1500] },
            { name: 'Upper Erebus Hut', elevation: 3612, country: 'Antarctica', coordinates: [-77.5250, 167.1500] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Terror', elevation: 3262, coordinates: [-77.5167, 168.5333] },
            { name: 'Mount Bird', elevation: 1800, coordinates: [-77.2167, 166.4333] },
            { name: 'Mount Discovery', elevation: 2681, coordinates: [-78.3667, 165.0167] },
            { name: 'Mount Morning', elevation: 2723, coordinates: [-78.5167, 163.5333] }
        ],
        
        nearbyCities: [
            { name: 'McMurdo Station', coordinates: [-77.8419, 166.6863], country: 'Antarctica', population: 1200 },
            { name: 'Scott Base', coordinates: [-77.8500, 166.7667], country: 'Antarctica', population: 85 },
            { name: 'Christchurch (gateway)', coordinates: [-43.5321, 172.6362], country: 'New Zealand', population: 380000 }
        ],
        
        flora: ['Moss', 'Lichen', 'Algae', 'No vascular plants'],
        fauna: ['Adelie Penguin', 'Weddell Seal', 'Skua', 'Snow Petrel', 'Antarctic Petrel', 'Orca'],
        
        economicImportance: [
            { label: 'Scientific Research', value: 'Major volcanology and planetary science research site' },
            { label: 'McMurdo Support', value: 'Proximity to major Antarctic research station' },
            { label: 'Lava Lake Study', value: 'One of few persistent lava lakes for study' },
            { label: 'Mars Analog', value: 'Conditions studied as Mars analog' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Hazards', value: 'Active volcano with eruption risk' },
            { label: 'Aircraft Disaster', value: '1979 Air New Zealand crash killed 257' },
            { label: 'Climate Change', value: 'Ice shelf changes affecting access' },
            { label: 'Research Impact', value: 'Station activities affect local environment' }
        ],
        
        conservation: [
            { label: 'Antarctic Treaty', value: 'Protected under Antarctic Treaty System' },
            { label: 'ASMA', value: 'Antarctic Specially Managed Area' },
            { label: 'Research Permits', value: 'Access strictly controlled by national programs' },
            { label: 'Environmental Protocol', value: 'Madrid Protocol protections' }
        ],
        
        historicalImportance: [
            { label: 'Named by Ross', value: 'James Clark Ross named it 1841 after his ship HMS Erebus' },
            { label: 'Shackleton Expedition', value: 'First climbed during heroic age of exploration' },
            { label: '1979 Disaster', value: 'Air NZ Flight 901 crashed into mountain, 257 died' },
            { label: 'Lava Lake Discovery', value: 'Persistent lava lake discovered 1972' }
        ],
        
        records: [
            { record: 'Southernmost Active Volcano', value: 'Worlds southernmost active volcano' },
            { record: 'Persistent Lava Lake', value: 'One of only ~8 persistent lava lakes on Earth' },
            { record: 'Antarctica Second Highest', value: 'Second highest volcano in Antarctica' },
            { record: 'Extreme Research', value: 'Most studied volcano in polar regions' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 77. Mount Teide
    {
        id: 'mount-teide',
        name: 'Mount Teide',
        localNames: [
            { language: 'Spanish', name: 'Pico del Teide' },
            { language: 'Guanche', name: 'Echeyde' }
        ],
        countries: [
            { name: 'Spain', code: 'ES' }
        ],
        continent: 'Europe',
        mountainRange: 'Canary Islands Volcanic Chain',
        subRange: 'Tenerife',
        elevation: 3715,
        prominence: 3715,
        isolation: 1465,
        coordinates: [28.2725, -16.6417],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '170,000 years (current cone)',
            tectonicPlates: ['African Plate'],
            process: 'Formed over Canary Islands hotspot. Sits within massive Las Cañadas caldera from ancient collapse. Part of volcanic complex that began 5 million years ago. Last eruption 1909 from flank vent. Tallest volcano in Atlantic Ocean islands.'
        },
        
        climbing: {
            firstAscent: {
                date: '1582',
                climbers: ['Sir Edmund Scory'],
                route: 'From La Orotava',
                expedition: 'English merchant during visit to Canary Islands.'
            },
            totalAscents: 200000,
            fatalities: 5,
            successRate: '99%',
            bestSeason: 'Year-round (permit dependent)',
            difficulty: 'Non-technical',
            routes: [
                { name: 'Teleférico Route', country: 'Spain', difficulty: 'Easy', description: 'Cable car to 3555m, then permit-only trail to summit' },
                { name: 'Montana Blanca Route', country: 'Spain', difficulty: 'Moderate', description: 'Full day hike from base, overnight at refuge' },
                { name: 'Pico Viejo Route', country: 'Spain', difficulty: 'Moderate', description: 'Via neighboring peak traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '5°C average',
            winterLow: '-15°C',
            summerHigh: '20°C',
            snowfall: 'Regular winter snow, melts quickly',
            winds: 'Can be strong trade winds',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Subtropical location, no permanent ice' }
        ],
        
        baseCamps: [
            { name: 'El Portillo', elevation: 2140, country: 'Spain', coordinates: [28.3083, -16.5583] },
            { name: 'Teleférico Base', elevation: 2356, country: 'Spain', coordinates: [28.2583, -16.6250] },
            { name: 'Altavista Refuge', elevation: 3260, country: 'Spain', coordinates: [28.2667, -16.6417] },
            { name: 'Teleférico Top', elevation: 3555, country: 'Spain', coordinates: [28.2700, -16.6400] }
        ],
        
        nearbyPeaks: [
            { name: 'Pico Viejo', elevation: 3135, coordinates: [28.2667, -16.6833] },
            { name: 'Montaña Blanca', elevation: 2748, coordinates: [28.2833, -16.6167] },
            { name: 'Guajara', elevation: 2718, coordinates: [28.2167, -16.6000] },
            { name: 'Roque de la Grieta', elevation: 2576, coordinates: [28.2000, -16.6333] }
        ],
        
        nearbyCities: [
            { name: 'Santa Cruz de Tenerife', coordinates: [28.4636, -16.2518], country: 'Spain', population: 207000 },
            { name: 'La Orotava', coordinates: [28.3897, -16.5231], country: 'Spain', population: 42000 },
            { name: 'Puerto de la Cruz', coordinates: [28.4167, -16.5500], country: 'Spain', population: 32000 },
            { name: 'Los Cristianos', coordinates: [28.0500, -16.7167], country: 'Spain', population: 20000 }
        ],
        
        flora: ['Teide Violet', 'Teide Broom', 'Tajinaste (Echium)', 'Teide Marguerite', 'Pine Forest', 'Canary Island Juniper'],
        fauna: ['Tenerife Lizard', 'Tenerife Blue Chaffinch', 'Kestrel', 'Long-eared Owl', 'Canary', 'Rabbit'],
        
        economicImportance: [
            { label: 'Most Visited Spain', value: 'Most visited national park in Spain, 4+ million annually' },
            { label: 'Tourism Icon', value: 'Major draw for Tenerife tourism industry' },
            { label: 'Cable Car', value: 'Teleférico carries 500,000+ passengers yearly' },
            { label: 'Astronomy', value: 'Teide Observatory is major research facility' }
        ],
        
        environmentalIssues: [
            { label: 'Overtourism', value: 'Massive visitor numbers impact environment' },
            { label: 'Volcanic Risk', value: 'Active volcano requiring monitoring' },
            { label: 'Invasive Species', value: 'Non-native plants and animals threatening endemics' },
            { label: 'Light Pollution', value: 'Threat to world-class astronomy site' }
        ],
        
        conservation: [
            { label: 'Teide National Park', value: 'UNESCO World Heritage Site since 2007' },
            { label: 'Summit Permits', value: 'Strict permit system limits summit access' },
            { label: 'Endemic Protection', value: 'Many unique species protected' },
            { label: 'Starlight Reserve', value: 'Protected as dark sky site' }
        ],
        
        historicalImportance: [
            { label: 'Guanche Sacred Site', value: 'Indigenous Guanche people considered it hell entrance' },
            { label: 'Navigation Landmark', value: 'Sailors used it for Atlantic navigation' },
            { label: 'Columbus', value: 'Columbus expedition saw eruption in 1492' },
            { label: 'Scientific History', value: 'Studied by Humboldt and other famous naturalists' }
        ],
        
        records: [
            { record: 'Highest Spain', value: 'Highest peak in Spain and its territories' },
            { record: 'Third Tallest Volcano', value: 'Third tallest volcanic structure (base to peak) after Mauna Kea and Mauna Loa' },
            { record: 'Most Visited', value: 'Most visited national park in Europe' },
            { record: 'Atlantic Highest', value: 'Highest peak in Atlantic Ocean islands' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-8.js - Part C: Mountains 78-80

const MOUNTAINS_DATA_8_PART_C = [
    // 78. Mauna Kea
    {
        id: 'mauna-kea',
        name: 'Mauna Kea',
        localNames: [
            { language: 'Hawaiian', name: 'Mauna Kea' },
            { language: 'English', name: 'White Mountain' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Hawaiian Islands',
        subRange: 'Big Island Volcanoes',
        elevation: 4207,
        prominence: 4207,
        isolation: 3951,
        coordinates: [19.8207, -155.4680],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&q=80',
        
        formation: {
            type: 'Shield Volcano (Dormant)',
            age: '1 million years',
            tectonicPlates: ['Pacific Plate'],
            process: 'Formed over Hawaiian hotspot as Pacific Plate moved northwest. Shield volcano built from fluid basalt lava. Last eruption ~4,500 years ago. If measured from oceanic base at 6,000m depth, it is tallest mountain on Earth at ~10,200m.'
        },
        
        climbing: {
            firstAscent: {
                date: '1823',
                climbers: ['Joseph Goodrich', 'Hawaiian Guides'],
                route: 'From Hilo side',
                expedition: 'American missionary during early Hawaiian exploration.'
            },
            totalAscents: 100000,
            fatalities: 10,
            successRate: '99%',
            bestSeason: 'Year-round, best May-September',
            difficulty: 'Drive up or easy hike',
            routes: [
                { name: 'Summit Road', country: 'USA', difficulty: 'Drive', description: 'Paved road to 2800m, then 4WD road to summit' },
                { name: 'Humu\'ula Trail', country: 'USA', difficulty: 'Hiking', description: 'Trail from Visitor Station, ~12 miles round trip' },
                { name: 'Mauna Kea Trail', country: 'USA', difficulty: 'Hiking', description: 'Historic trail from saddle road' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-15°C',
            summerHigh: '10°C',
            snowfall: 'Regular winter snow, name means White Mountain',
            winds: 'Generally light at summit',
            deathZone: 'Not applicable but altitude affects visitors'
        },
        
        glaciers: [
            { name: 'Ancient Glaciers', length: 'N/A', description: 'Had glaciers during ice ages, permafrost remains in some areas' }
        ],
        
        baseCamps: [
            { name: 'Onizuka Visitor Center', elevation: 2804, country: 'USA', coordinates: [19.7598, -155.4558] },
            { name: 'Summit Area', elevation: 4145, country: 'USA', coordinates: [19.8207, -155.4680] },
            { name: 'Hale Pohaku', elevation: 2835, country: 'USA', coordinates: [19.7600, -155.4500] }
        ],
        
        nearbyPeaks: [
            { name: 'Mauna Loa', elevation: 4169, coordinates: [19.4756, -155.6054] },
            { name: 'Hualalai', elevation: 2521, coordinates: [19.6914, -155.8683] },
            { name: 'Kohala', elevation: 1670, coordinates: [20.0858, -155.7703] },
            { name: 'Kilauea', elevation: 1247, coordinates: [19.4119, -155.2874] }
        ],
        
        nearbyCities: [
            { name: 'Hilo', coordinates: [19.7074, -155.0847], country: 'USA', population: 45000 },
            { name: 'Kailua-Kona', coordinates: [19.6400, -155.9969], country: 'USA', population: 12000 },
            { name: 'Waimea', coordinates: [20.0233, -155.6728], country: 'USA', population: 10000 },
            { name: 'Honolulu', coordinates: [21.3069, -157.8583], country: 'USA', population: 350000 }
        ],
        
        flora: ['Mamane Tree', 'Silversword (endangered)', 'Pukiawe', 'Native Grasses', 'Alpine Desert Plants'],
        fauna: ['Palila (endangered finch)', 'Nene (Hawaiian goose)', 'Hawaiian Petrel', 'Hawaiian Hoary Bat', 'Wekiu Bug (endemic)'],
        
        economicImportance: [
            { label: 'Astronomy Capital', value: 'Hosts 13 major observatories from 11 countries' },
            { label: 'Scientific Research', value: 'Best astronomical observing site on Earth' },
            { label: 'Tourism', value: 'Major attraction for Big Island' },
            { label: 'Skiing', value: 'Only tropical skiing destination in Pacific' }
        ],
        
        environmentalIssues: [
            { label: 'TMT Controversy', value: 'Thirty Meter Telescope construction opposed by native groups' },
            { label: 'Sacred Site', value: 'Summit sacred to Native Hawaiians' },
            { label: 'Endangered Species', value: 'Palila bird and silversword critically endangered' },
            { label: 'Road Impacts', value: 'Road construction and traffic affect environment' }
        ],
        
        conservation: [
            { label: 'Mauna Kea Ice Age Reserve', value: 'Protects unique ancient permafrost' },
            { label: 'Critical Habitat', value: 'Palila bird habitat protected' },
            { label: 'Cultural Overlay', value: 'Hawaiian cultural practices protected' },
            { label: 'State Management', value: 'University of Hawaii manages summit' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Native Hawaiians consider summit realm of gods' },
            { label: 'Pele Connection', value: 'Snow goddess Poliahu resided here' },
            { label: 'Adze Quarry', value: 'Ancient Hawaiians quarried basalt for tools' },
            { label: 'Astronomy Pioneer', value: 'First observatory built 1968' }
        ],
        
        records: [
            { record: 'Tallest Mountain (Base)', value: 'Tallest mountain from base to peak (~10,200m from sea floor)' },
            { record: 'Best Astronomy Site', value: 'Premier astronomical observing location on Earth' },
            { record: 'Highest Hawaii', value: 'Highest point in Hawaii at 4,207m' },
            { record: 'Tropical Snow', value: 'Only regular skiing location in tropics' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 79. Mauna Loa
    {
        id: 'mauna-loa',
        name: 'Mauna Loa',
        localNames: [
            { language: 'Hawaiian', name: 'Mauna Loa' },
            { language: 'English', name: 'Long Mountain' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Hawaiian Islands',
        subRange: 'Big Island Volcanoes',
        elevation: 4169,
        prominence: 2158,
        isolation: 39,
        coordinates: [19.4756, -155.6054],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1920&q=80',
        
        formation: {
            type: 'Shield Volcano (Active)',
            age: '700,000-1,000,000 years',
            tectonicPlates: ['Pacific Plate'],
            process: 'Formed over Hawaiian hotspot. Largest active volcano on Earth by volume and area. Extremely gentle slopes typical of shield volcanoes. Most recent eruption November-December 2022. Continuous volcanic activity throughout recorded history.'
        },
        
        climbing: {
            firstAscent: {
                date: '1794',
                climbers: ['Archibald Menzies', 'Lt. Joseph Baker'],
                route: 'Unknown approach',
                expedition: 'Members of Vancouver Expedition during Pacific exploration.'
            },
            totalAscents: 5000,
            fatalities: 5,
            successRate: '80%',
            bestSeason: 'Year-round when not erupting',
            difficulty: 'Strenuous hiking',
            routes: [
                { name: 'Mauna Loa Trail', country: 'USA', difficulty: 'Strenuous', description: 'From Mauna Loa Road, 2-4 days, cabin available' },
                { name: 'Observatory Trail', country: 'USA', difficulty: 'Moderate', description: 'Shorter route from NOAA observatory at 3400m' },
                { name: 'Ainapo Trail', country: 'USA', difficulty: 'Strenuous', description: 'Historic Hawaiian trail from south' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-10°C',
            summerHigh: '12°C',
            snowfall: 'Occasional winter snow',
            winds: 'Variable, can be strong',
            deathZone: 'Not applicable but altitude significant'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Occasional snow but no permanent ice' }
        ],
        
        baseCamps: [
            { name: 'Mauna Loa Lookout', elevation: 2030, country: 'USA', coordinates: [19.4333, -155.3833] },
            { name: 'Red Hill Cabin', elevation: 3048, country: 'USA', coordinates: [19.4500, -155.4333] },
            { name: 'Mauna Loa Summit Cabin', elevation: 4038, country: 'USA', coordinates: [19.4756, -155.5333] },
            { name: 'NOAA Observatory', elevation: 3397, country: 'USA', coordinates: [19.5362, -155.5763] }
        ],
        
        nearbyPeaks: [
            { name: 'Mauna Kea', elevation: 4207, coordinates: [19.8207, -155.4680] },
            { name: 'Kilauea', elevation: 1247, coordinates: [19.4119, -155.2874] },
            { name: 'Hualalai', elevation: 2521, coordinates: [19.6914, -155.8683] },
            { name: 'Kohala', elevation: 1670, coordinates: [20.0858, -155.7703] }
        ],
        
        nearbyCities: [
            { name: 'Hilo', coordinates: [19.7074, -155.0847], country: 'USA', population: 45000 },
            { name: 'Volcano Village', coordinates: [19.4330, -155.2330], country: 'USA', population: 2500 },
            { name: 'Kailua-Kona', coordinates: [19.6400, -155.9969], country: 'USA', population: 12000 },
            { name: 'Captain Cook', coordinates: [19.4975, -155.9119], country: 'USA', population: 3500 }
        ],
        
        flora: ['Ohia Lehua Tree', 'Native Ferns', 'Mamane', 'Pukiawe', 'Lava Desert Plants'],
        fauna: ['Nene', 'Hawaiian Hawk', 'Hawaiian Petrel', 'Hawaiian Hoary Bat', 'Happy-face Spider'],
        
        economicImportance: [
            { label: 'Climate Research', value: 'NOAA Mauna Loa Observatory measures global CO2' },
            { label: 'Hawaii Volcanoes NP', value: 'Major tourist attraction' },
            { label: 'Scientific Research', value: 'Major volcanology research site' },
            { label: 'Agriculture', value: 'Kona coffee grown on fertile slopes' }
        ],
        
        environmentalIssues: [
            { label: 'Active Eruptions', value: '2022 eruption threatened communities and observatory' },
            { label: 'Lava Flows', value: 'Flows periodically threaten infrastructure' },
            { label: 'Air Quality', value: 'Vog (volcanic fog) affects air quality' },
            { label: 'Invasive Species', value: 'Introduced plants and animals spreading' }
        ],
        
        conservation: [
            { label: 'Hawaii Volcanoes NP', value: 'UNESCO World Heritage Site since 1987' },
            { label: 'Wilderness Area', value: 'Large wilderness designation' },
            { label: 'Active Monitoring', value: 'Hawaiian Volcano Observatory continuous surveillance' },
            { label: 'Native Species', value: 'Programs to protect endemic plants and animals' }
        ],
        
        historicalImportance: [
            { label: 'Pele Home', value: 'Traditional home of volcano goddess Pele' },
            { label: 'CO2 Record', value: 'Keeling Curve measured here since 1958' },
            { label: 'Frequent Eruptions', value: '33 eruptions since 1843' },
            { label: '2022 Eruption', value: 'First eruption in 38 years drew global attention' }
        ],
        
        records: [
            { record: 'Largest Active Volcano', value: 'Largest active volcano on Earth by volume' },
            { record: 'Most Massive Mountain', value: 'Most massive single mountain on Earth' },
            { record: 'Climate Monitoring', value: 'Longest continuous CO2 measurement record' },
            { record: 'Shield Volcano', value: 'Classic example of shield volcano formation' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 80. Mount Etna
    {
        id: 'mount-etna',
        name: 'Mount Etna',
        localNames: [
            { language: 'Italian', name: 'Etna' },
            { language: 'Sicilian', name: 'Mungibeddu' },
            { language: 'Latin', name: 'Aetna' }
        ],
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        mountainRange: 'Sicilian Mountains',
        subRange: 'Eastern Sicily',
        elevation: 3357,
        prominence: 3357,
        isolation: 1073,
        coordinates: [37.7510, 14.9934],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '500,000 years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed where African Plate subducts beneath Eurasian Plate. Most active volcano in Europe with near-continuous activity. Four summit craters. Height varies due to eruptions and collapses. Complex volcanic system with multiple cones.'
        },
        
        climbing: {
            firstAscent: {
                date: 'Ancient times',
                climbers: ['Unknown'],
                route: 'Various',
                expedition: 'Documented ascents by Roman Emperor Hadrian (125 AD) and many others throughout history.'
            },
            totalAscents: 500000,
            fatalities: 30,
            successRate: '95%',
            bestSeason: 'May to October',
            difficulty: 'Non-technical when safe',
            routes: [
                { name: 'South Side (Rifugio Sapienza)', country: 'Italy', difficulty: 'Easy', description: 'Cable car and 4WD options, guided walks to crater area' },
                { name: 'North Side (Piano Provenzana)', country: 'Italy', difficulty: 'Easy', description: '4WD and hiking, views of Valle del Bove' },
                { name: 'Summit Craters', country: 'Italy', difficulty: 'Moderate', description: 'Requires guide, access restricted during activity' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-20°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snow, ski resort on slopes',
            winds: 'Can be severe at summit',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No permanent glaciers', length: 'N/A', description: 'Heavy seasonal snow but no glaciers at this latitude' }
        ],
        
        baseCamps: [
            { name: 'Rifugio Sapienza', elevation: 1923, country: 'Italy', coordinates: [37.6997, 15.0036] },
            { name: 'Cable Car Top Station', elevation: 2504, country: 'Italy', coordinates: [37.7167, 15.0000] },
            { name: 'Piano Provenzana', elevation: 1810, country: 'Italy', coordinates: [37.7917, 15.0417] },
            { name: 'Rifugio Citelli', elevation: 1741, country: 'Italy', coordinates: [37.7667, 15.0667] }
        ],
        
        nearbyPeaks: [
            { name: 'Monte Frumento Supino', elevation: 2865, coordinates: [37.7333, 14.9833] },
            { name: 'Monte Nero', elevation: 2636, coordinates: [37.7667, 14.9833] },
            { name: 'Monte Silvestri', elevation: 1986, coordinates: [37.6917, 15.0083] },
            { name: 'Monte Peloritani', elevation: 1374, coordinates: [38.0000, 15.3167] }
        ],
        
        nearbyCities: [
            { name: 'Catania', coordinates: [37.5079, 15.0830], country: 'Italy', population: 311000 },
            { name: 'Taormina', coordinates: [37.8500, 15.2833], country: 'Italy', population: 11000 },
            { name: 'Nicolosi', coordinates: [37.6167, 15.0167], country: 'Italy', population: 7500 },
            { name: 'Messina', coordinates: [38.1833, 15.5500], country: 'Italy', population: 230000 }
        ],
        
        flora: ['Chestnut Forest', 'Beech Forest', 'Birch', 'Pine', 'Astragalus', 'Senecio', 'Lava Pioneer Plants'],
        fauna: ['Sicilian Wildcat', 'Fox', 'Rabbit', 'Porcupine', 'Golden Eagle', 'Peregrine Falcon', 'Etna Wall Lizard'],
        
        economicImportance: [
            { label: 'Wine Production', value: 'Famous Etna DOC wines from volcanic soil' },
            { label: 'Tourism', value: 'Major Sicilian attraction, millions of visitors' },
            { label: 'Skiing', value: 'Southernmost ski resort in Europe' },
            { label: 'Agriculture', value: 'Fertile volcanic soil supports farming' }
        ],
        
        environmentalIssues: [
            { label: 'Constant Eruptions', value: 'Near-continuous activity threatens nearby areas' },
            { label: 'Lava Flows', value: 'Regular lava flows destroy infrastructure' },
            { label: 'Ash Fallout', value: 'Catania airport frequently closed by ash' },
            { label: 'Deforestation', value: 'Illegal cutting in forests' }
        ],
        
        conservation: [
            { label: 'Etna Regional Park', value: 'Protected since 1987' },
            { label: 'UNESCO World Heritage', value: 'Natural Heritage Site since 2013' },
            { label: 'Geopark', value: 'Part of European Geopark Network' },
            { label: 'Monitoring', value: 'INGV continuous volcanic surveillance' }
        ],
        
        historicalImportance: [
            { label: 'Greek Mythology', value: 'Workshop of Hephaestus, prison of Typhon' },
            { label: 'Empedocles', value: 'Philosopher allegedly jumped into crater 430 BC' },
            { label: 'Roman History', value: 'Described by Virgil, Pindar, and many ancient writers' },
            { label: '1669 Eruption', value: 'Largest historical eruption destroyed part of Catania' },
            { label: 'Continuous Record', value: 'Longest documented eruption history of any volcano' }
        ],
        
        records: [
            { record: 'Tallest Active Europe', value: 'Tallest active volcano in Europe' },
            { record: 'Most Active Europe', value: 'Most active volcano in Europe' },
            { record: 'Longest Record', value: 'Longest documented eruption history (3,500 years)' },
            { record: 'UNESCO Site', value: 'One of most documented volcanoes in world' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];

// ============================================
// COMBINE ALL PARTS INTO MOUNTAINS_DATA_8
// ============================================

const MOUNTAINS_DATA_8 = [
    ...MOUNTAINS_DATA_8_PART_A,
    ...MOUNTAINS_DATA_8_PART_B,
    ...MOUNTAINS_DATA_8_PART_C
];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_8 };
}

console.log('Mountains Data 8 loaded:', MOUNTAINS_DATA_8.length, 'mountains (Africa & Volcanic Peaks)');
