/* ============================================
   MOUNTAINS DATA - FILE 1 OF 10
   Mountains 1-10: Eight-Thousanders (Part 1)
   The 10 Highest Peaks in the World
   ============================================ */

const MOUNTAINS_DATA_1 = [
    // ========================================
    // #1 - MOUNT EVEREST
    // ========================================
    {
        id: 'mount-everest',
        name: 'Mount Everest',
        localNames: [
            { language: 'Nepali', name: 'Sagarmāthā (सगरमाथा)' },
            { language: 'Tibetan', name: 'Chomolungma (ཇོ་མོ་གླང་མ)' },
            { language: 'Chinese', name: 'Zhūmùlǎngmǎ Fēng (珠穆朗玛峰)' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mahalangur Himal',
        elevation: 8849,
        prominence: 8849,
        isolation: 40008,
        coordinates: [27.9881, 86.9250],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50-55 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Continental collision - the Indian subcontinent colliding with Asia'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 29, 1953',
                climbers: ['Sir Edmund Hillary', 'Tenzing Norgay'],
                route: 'South Col Route',
                expedition: 'British Expedition led by John Hunt'
            },
            totalAscents: 6338,
            fatalities: 311,
            successRate: '65%',
            bestSeason: 'April-May',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'South Col Route', country: 'Nepal', difficulty: 'Standard', description: 'Most popular route via Nepal' },
                { name: 'North Ridge Route', country: 'China', difficulty: 'Technical', description: 'Original attempted route via Tibet' },
                { name: 'West Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'First climbed in 1963' },
                { name: 'South West Face', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Major technical challenge' },
                { name: 'Hornbein Couloir', country: 'Nepal/China', difficulty: 'Extremely Difficult', description: 'Named after Tom Hornbein' }
            ]
        },
        
        climate: {
            summitTemperature: '-36°C average',
            winterLow: '-60°C',
            summerHigh: '-19°C',
            snowfall: 'Heavy, year-round above 6000m',
            winds: 'Up to 280 km/h jet streams',
            deathZone: 'Above 8000m - insufficient oxygen for human survival'
        },
        
        glaciers: [
            { name: 'Khumbu Glacier', length: '17 km', description: 'One of the longest glaciers in the Himalayas' },
            { name: 'Kangshung Glacier', length: '15 km', description: 'East face glacier' },
            { name: 'Rongbuk Glacier', length: '22 km', description: 'North side, longest glacier on Everest' },
            { name: 'East Rongbuk Glacier', length: '14 km', description: 'Branch of Rongbuk Glacier' }
        ],
        
        baseCamps: [
            { name: 'South Base Camp', elevation: 5364, country: 'Nepal', coordinates: [28.0025, 86.8528], season: 'Spring' },
            { name: 'North Base Camp', elevation: 5150, country: 'China', coordinates: [28.1433, 86.8525], season: 'Spring/Autumn' }
        ],
        
        nearbyPeaks: [
            { name: 'Lhotse', elevation: 8516, coordinates: [27.9617, 86.9336] },
            { name: 'Nuptse', elevation: 7861, coordinates: [27.9650, 86.8867] },
            { name: 'Changtse', elevation: 7580, coordinates: [28.0172, 86.9147] },
            { name: 'Pumori', elevation: 7161, coordinates: [28.0133, 86.8283] }
        ],
        
        nearbyCities: [
            { name: 'Namche Bazaar', coordinates: [27.8069, 86.7140], country: 'Nepal', population: 1600 },
            { name: 'Lukla', coordinates: [27.6869, 86.7314], country: 'Nepal', population: 500 },
            { name: 'Kathmandu', coordinates: [27.7172, 85.3240], country: 'Nepal', population: 1400000 },
            { name: 'Tingri', coordinates: [28.6333, 87.0833], country: 'China', population: 8000 }
        ],
        
        flora: [
            'Rhododendron (below 4000m)',
            'Juniper shrubs',
            'Birch forests (lower altitudes)',
            'Mosses and lichens (high altitude)',
            'Alpine meadow flowers'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan tahr',
            'Red panda',
            'Musk deer',
            'Himalayan monal (bird)',
            'Lammergeier (bearded vulture)',
            'Yellow-billed chough'
        ],
        
        economicImportance: [
            { label: 'Tourism Revenue', value: '50,000+ trekkers annually to Everest region' },
            { label: 'Climbing Permits (Nepal)', value: '$11,000 per climber' },
            { label: 'Climbing Permits (China)', value: '$9,950 per climber' },
            { label: 'Local Economy', value: 'Sherpa guides, tea houses, porters' },
            { label: 'Total Economic Impact', value: '$300+ million annually to Nepal' }
        ],
        
        environmentalIssues: [
            { label: 'Waste Accumulation', value: 'Estimated 50 tons of garbage on mountain' },
            { label: 'Glacier Melt', value: 'Khumbu Glacier retreating 20m/year' },
            { label: 'Overcrowding', value: 'Traffic jams on summit day, 200+ climbers' },
            { label: 'Human Remains', value: '200+ bodies remain on mountain' },
            { label: 'Climate Change', value: 'Snow line rising, ice features changing' }
        ],
        
        conservation: [
            { label: 'Sagarmatha National Park', value: 'UNESCO World Heritage Site since 1979' },
            { label: 'Clean-up Campaigns', value: 'Annual waste removal expeditions' },
            { label: 'Deposit System', value: '$4,000 garbage deposit per climber' },
            { label: 'Climbing Limits', value: 'Proposals to limit permits' }
        ],
        
        historicalImportance: [
            { label: 'Named After', value: 'Sir George Everest, Surveyor General of India (1865)' },
            { label: 'First Survey', value: 'Great Trigonometric Survey of India (1856)' },
            { label: 'Peak XV', value: 'Original survey designation' },
            { label: 'Cultural Significance', value: 'Sacred to Sherpa people as "Goddess Mother of the World"' },
            { label: 'First Measurement', value: '8,840m by Radhanath Sikdar in 1852' }
        ],
        
        records: [
            { record: 'Highest Peak on Earth', value: '8,849m above sea level' },
            { record: 'Most Ascents (Individual)', value: 'Kami Rita Sherpa - 29 times (2024)' },
            { record: 'Fastest Ascent (South)', value: 'Lakpa Gelu Sherpa - 10h 56m (2003)' },
            { record: 'Fastest Ascent (North)', value: 'Hans Kammerlander - 16h 45m (1996)' },
            { record: 'Oldest Summiter', value: 'Yuichiro Miura - 80 years (2013)' },
            { record: 'Youngest Summiter', value: 'Jordan Romero - 13 years (2010)' },
            { record: 'First Solo Ascent', value: 'Reinhold Messner (1980)' },
            { record: 'First Winter Ascent', value: 'Krzysztof Wielicki & Leszek Cichy (1980)' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: true
    },

    // ========================================
    // #2 - K2
    // ========================================
    {
        id: 'k2',
        name: 'K2',
        localNames: [
            { language: 'Balti', name: 'Chogori (چھوغوری)' },
            { language: 'Chinese', name: 'Qogir (乔戈里峰)' },
            { language: 'English', name: 'Mount Godwin-Austen (historical)' },
            { language: 'Local', name: 'Savage Mountain' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Baltoro Muztagh',
        elevation: 8611,
        prominence: 4020,
        isolation: 1316,
        coordinates: [35.8808, 76.5155],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Uplift from collision of Indian and Eurasian plates'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 31, 1954',
                climbers: ['Achille Compagnoni', 'Lino Lacedelli'],
                route: 'Abruzzi Spur',
                expedition: 'Italian Expedition led by Ardito Desio'
            },
            totalAscents: 425,
            fatalities: 91,
            successRate: '27%',
            bestSeason: 'July-August',
            difficulty: 'Exceptionally Difficult',
            routes: [
                { name: 'Abruzzi Spur', country: 'Pakistan', difficulty: 'Standard', description: 'Southeast ridge, most common route' },
                { name: 'North Ridge', country: 'China', difficulty: 'Very Difficult', description: 'Chinese side approach' },
                { name: 'West Ridge', country: 'Pakistan', difficulty: 'Extremely Difficult', description: 'Rarely attempted' },
                { name: 'South Face (Polish Line)', country: 'Pakistan', difficulty: 'Exceptionally Difficult', description: 'Considered one of the hardest routes' },
                { name: 'Magic Line', country: 'Pakistan', difficulty: 'Exceptionally Difficult', description: 'Direct line up south-southwest pillar' }
            ]
        },
        
        climate: {
            summitTemperature: '-40°C average',
            winterLow: '-65°C',
            summerHigh: '-20°C',
            snowfall: 'Extreme, frequent storms',
            winds: 'Up to 200 km/h, unpredictable',
            deathZone: 'Above 8000m - extreme altitude effects'
        },
        
        glaciers: [
            { name: 'Baltoro Glacier', length: '62 km', description: 'One of longest glaciers outside polar regions' },
            { name: 'Godwin-Austen Glacier', length: '20 km', description: 'South side of K2' },
            { name: 'K2 Glacier', length: '15 km', description: 'North side glacier' }
        ],
        
        baseCamps: [
            { name: 'K2 Base Camp (Pakistan)', elevation: 5150, country: 'Pakistan', coordinates: [35.8617, 76.5133] },
            { name: 'K2 North Base Camp (China)', elevation: 4780, country: 'China', coordinates: [35.9500, 76.5300] }
        ],
        
        nearbyPeaks: [
            { name: 'Broad Peak', elevation: 8051, coordinates: [35.8117, 76.5650] },
            { name: 'Gasherbrum I', elevation: 8080, coordinates: [35.7244, 76.6961] },
            { name: 'Gasherbrum II', elevation: 8034, coordinates: [35.7572, 76.6531] },
            { name: 'Gasherbrum IV', elevation: 7932, coordinates: [35.7619, 76.6178] }
        ],
        
        nearbyCities: [
            { name: 'Skardu', coordinates: [35.2971, 75.6333], country: 'Pakistan', population: 15000 },
            { name: 'Askole', coordinates: [35.6833, 75.8167], country: 'Pakistan', population: 300 },
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 }
        ],
        
        flora: [
            'Alpine grasses',
            'Hardy lichens',
            'Dwarf willows (lower elevations)',
            'Rock jasmine',
            'Snow lotus'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Marco Polo sheep',
            'Himalayan brown bear',
            'Golden eagle',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$7,200 per climber (Pakistan)' },
            { label: 'Expedition Support', value: 'Local porters and guides' },
            { label: 'Adventure Tourism', value: 'Growing trekking industry' },
            { label: 'Documentaries', value: 'Significant media interest' }
        ],
        
        environmentalIssues: [
            { label: 'Waste on Mountain', value: 'Increasing debris from expeditions' },
            { label: 'Glacier Retreat', value: 'Baltoro Glacier showing signs of retreat' },
            { label: 'Remote Location', value: 'Cleanup operations very difficult' }
        ],
        
        conservation: [
            { label: 'Central Karakoram National Park', value: 'Protected area since 1993' },
            { label: 'UNESCO Tentative List', value: 'Proposed World Heritage Site' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'K2 = second peak surveyed in Karakoram (1856)' },
            { label: 'Surveyor', value: 'T.G. Montgomerie, Great Trigonometric Survey' },
            { label: 'Nickname', value: '"Savage Mountain" - deadliest 8000er per summit' },
            { label: '1954 Controversy', value: 'Dispute over final summit team' },
            { label: '2008 Disaster', value: '11 climbers died in single event' }
        ],
        
        records: [
            { record: 'Second Highest Peak', value: '8,611m - only 238m shorter than Everest' },
            { record: 'Deadliest Mountain', value: '1 death for every 4 summits historically' },
            { record: 'First Winter Ascent', value: 'Nepali team - January 16, 2021' },
            { record: 'Most Deaths (Single Day)', value: '11 climbers - August 1, 2008' },
            { record: 'First Female Summit', value: 'Wanda Rutkiewicz - June 23, 1986' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #3 - KANGCHENJUNGA
    // ========================================
    {
        id: 'kangchenjunga',
        name: 'Kangchenjunga',
        localNames: [
            { language: 'Limbu', name: 'Sewalungma' },
            { language: 'Tibetan', name: 'Gang chen mdzod lnga (གངས་ཆེན་མཛོད་ལྔ)' },
            { language: 'Nepali', name: 'कञ्चनजङ्घा' },
            { language: 'English', name: 'Five Treasures of Snow' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Kangchenjunga Himal',
        elevation: 8586,
        prominence: 3922,
        isolation: 124,
        coordinates: [27.7025, 88.1475],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny, continental collision'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 25, 1955',
                climbers: ['Joe Brown', 'George Band'],
                route: 'Southwest Face',
                expedition: 'British Expedition led by Charles Evans'
            },
            totalAscents: 283,
            fatalities: 44,
            successRate: '22%',
            bestSeason: 'April-May, October',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'Southwest Face', country: 'Nepal', difficulty: 'Standard', description: 'Original and most popular route' },
                { name: 'North Face', country: 'Nepal', difficulty: 'Very Difficult', description: 'Technical rock and ice' },
                { name: 'Northeast Spur', country: 'India', difficulty: 'Extremely Difficult', description: 'Indian side route' },
                { name: 'West Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'Less crowded alternative' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-55°C',
            summerHigh: '-18°C',
            snowfall: 'Heavy monsoon influence',
            winds: 'Up to 150 km/h',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Zemu Glacier', length: '26 km', description: 'Largest glacier in Eastern Himalayas' },
            { name: 'Talung Glacier', length: '18 km', description: 'South side glacier' },
            { name: 'Yalung Glacier', length: '22 km', description: 'Southwest approach glacier' },
            { name: 'Kangchenjunga Glacier', length: '14 km', description: 'North side glacier' }
        ],
        
        baseCamps: [
            { name: 'Kangchenjunga Base Camp', elevation: 5140, country: 'Nepal', coordinates: [27.6833, 88.1167] },
            { name: 'Pangpema Base Camp', elevation: 5143, country: 'Nepal', coordinates: [27.7167, 88.1333] }
        ],
        
        nearbyPeaks: [
            { name: 'Kangchenjunga West', elevation: 8505, coordinates: [27.6989, 88.1194] },
            { name: 'Kangchenjunga Central', elevation: 8482, coordinates: [27.7000, 88.1361] },
            { name: 'Kangchenjunga South', elevation: 8494, coordinates: [27.6908, 88.1386] },
            { name: 'Yalung Kang', elevation: 8505, coordinates: [27.6989, 88.1194] },
            { name: 'Jannu', elevation: 7711, coordinates: [27.6817, 88.0456] }
        ],
        
        nearbyCities: [
            { name: 'Taplejung', coordinates: [27.3511, 87.6681], country: 'Nepal', population: 5000 },
            { name: 'Gangtok', coordinates: [27.3389, 88.6065], country: 'India', population: 100000 },
            { name: 'Darjeeling', coordinates: [27.0410, 88.2663], country: 'India', population: 120000 }
        ],
        
        flora: [
            'Rhododendron forests',
            'Oak and magnolia (lower slopes)',
            'Bamboo groves',
            'Alpine meadows',
            'Juniper and dwarf rhododendron (high altitude)'
        ],
        
        fauna: [
            'Snow leopard',
            'Red panda',
            'Himalayan black bear',
            'Clouded leopard',
            'Musk deer',
            'Blood pheasant',
            'Satyr tragopan'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$5,000 per climber (Nepal)' },
            { label: 'Trekking Tourism', value: 'Kangchenjunga Circuit popular trek' },
            { label: 'Tea Industry', value: 'Darjeeling tea region views mountain' }
        ],
        
        environmentalIssues: [
            { label: 'Deforestation', value: 'Lower slopes facing timber pressure' },
            { label: 'Climate Change', value: 'Glacial lake formation risks' },
            { label: 'Tourism Impact', value: 'Growing trekking pressures' }
        ],
        
        conservation: [
            { label: 'Kangchenjunga Conservation Area', value: 'Established 1997, Nepal side' },
            { label: 'Khangchendzonga National Park', value: 'UNESCO World Heritage Site, India side' },
            { label: 'Sacred Mountain', value: 'Climbers stop short of summit out of respect' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Five Treasures of Great Snow" (gold, silver, gems, grain, holy books)' },
            { label: 'Highest Until 1852', value: 'Believed to be highest peak before Everest surveyed' },
            { label: 'Sacred Status', value: 'Holy mountain to Sikkim and Nepal' },
            { label: 'Summit Tradition', value: 'First ascent team stopped short of summit to honor beliefs' }
        ],
        
        records: [
            { record: 'Third Highest Peak', value: '8,586m elevation' },
            { record: 'Highest Peak in India', value: 'Partly in Sikkim state' },
            { record: 'Five Summits', value: 'Has five distinct peaks above 8,000m area' },
            { record: 'First Female Solo', value: 'Ginette Harrison - 1998' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #4 - LHOTSE
    // ========================================
    {
        id: 'lhotse',
        name: 'Lhotse',
        localNames: [
            { language: 'Tibetan', name: 'Lho rtse (ལྷོ་རྩེ)' },
            { language: 'English', name: 'South Peak' },
            { language: 'Nepali', name: 'ल्होत्से' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mahalangur Himal',
        elevation: 8516,
        prominence: 610,
        isolation: 2.7,
        coordinates: [27.9617, 86.9336],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50-55 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Continental collision, shared geology with Everest'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 18, 1956',
                climbers: ['Fritz Luchsinger', 'Ernst Reiss'],
                route: 'West Face via Lhotse Couloir',
                expedition: 'Swiss Expedition'
            },
            totalAscents: 900,
            fatalities: 13,
            successRate: '45%',
            bestSeason: 'April-May',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'West Face / Lhotse Couloir', country: 'Nepal', difficulty: 'Standard', description: 'Shares route with Everest to Camp 3' },
                { name: 'South Face', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Massive 3km face, rarely completed' },
                { name: 'North Ridge', country: 'China', difficulty: 'Very Difficult', description: 'From Tibetan side' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-55°C',
            summerHigh: '-20°C',
            snowfall: 'Heavy, similar to Everest',
            winds: 'Jet stream exposure',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Khumbu Glacier', length: '17 km', description: 'Shared with Everest' },
            { name: 'Lhotse Glacier', length: '8 km', description: 'South face drainage' },
            { name: 'Lhotse Nup Glacier', length: '6 km', description: 'West side glacier' }
        ],
        
        baseCamps: [
            { name: 'Everest Base Camp', elevation: 5364, country: 'Nepal', coordinates: [28.0025, 86.8528] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Everest', elevation: 8849, coordinates: [27.9881, 86.9250] },
            { name: 'Nuptse', elevation: 7861, coordinates: [27.9650, 86.8867] },
            { name: 'Lhotse Shar', elevation: 8383, coordinates: [27.9583, 86.9500] },
            { name: 'Lhotse Middle', elevation: 8414, coordinates: [27.9600, 86.9417] }
        ],
        
        nearbyCities: [
            { name: 'Namche Bazaar', coordinates: [27.8069, 86.7140], country: 'Nepal', population: 1600 },
            { name: 'Lukla', coordinates: [27.6869, 86.7314], country: 'Nepal', population: 500 },
            { name: 'Dingboche', coordinates: [27.8953, 86.8317], country: 'Nepal', population: 200 }
        ],
        
        flora: [
            'High altitude lichens',
            'Mosses',
            'Alpine grasses (lower camps)',
            'Cushion plants'
        ],
        
        fauna: [
            'Himalayan tahr',
            'Snow leopard',
            'Yellow-billed chough',
            'Lammergeier',
            'Himalayan griffon vulture'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: 'Often combined with Everest permit' },
            { label: 'Dual Summits', value: 'Popular Everest-Lhotse double' },
            { label: 'Filming', value: 'Featured in mountaineering documentaries' }
        ],
        
        environmentalIssues: [
            { label: 'Shared Route Impact', value: 'Same issues as Everest region' },
            { label: 'Waste Management', value: 'Cleanup efforts ongoing' }
        ],
        
        conservation: [
            { label: 'Sagarmatha National Park', value: 'UNESCO World Heritage Site' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"South Peak" in Tibetan - south of Everest' },
            { label: 'Connection to Everest', value: 'Connected by South Col' },
            { label: 'South Face Challenge', value: 'One of greatest remaining mountaineering challenges' }
        ],
        
        records: [
            { record: 'Fourth Highest Peak', value: '8,516m elevation' },
            { record: 'Highest South Face', value: '3,000m rock and ice wall' },
            { record: 'Double Summit Record', value: 'Fastest Everest-Lhotse: 10h 15m' },
            { record: 'South Face First Ascent', value: 'Krzysztof Wielicki - 1990 (partial)' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #5 - MAKALU
    // ========================================
    {
        id: 'makalu',
        name: 'Makalu',
        localNames: [
            { language: 'Tibetan', name: 'མ་ཁ་ལུ' },
            { language: 'Nepali', name: 'मकालु' },
            { language: 'Sanskrit', name: 'Maha Kala (Great Black One)' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mahalangur Himal',
        elevation: 8485,
        prominence: 2378,
        isolation: 16,
        coordinates: [27.8897, 87.0886],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 15, 1955',
                climbers: ['Jean Couzy', 'Lionel Terray'],
                route: 'North Face',
                expedition: 'French Expedition led by Jean Franco'
            },
            totalAscents: 461,
            fatalities: 36,
            successRate: '30%',
            bestSeason: 'April-May, September-October',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'Normal Route (Northwest)', country: 'Nepal', difficulty: 'Standard', description: 'French original route' },
                { name: 'West Pillar', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Technical rock climbing' },
                { name: 'West Face Direct', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Major technical challenge' },
                { name: 'Southeast Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-50°C',
            summerHigh: '-15°C',
            snowfall: 'Moderate to heavy',
            winds: 'Strong, exposed ridges',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Barun Glacier', length: '16 km', description: 'Main approach glacier' },
            { name: 'Chago Glacier', length: '10 km', description: 'North side drainage' },
            { name: 'Makalu Glacier', length: '12 km', description: 'East face glacier' }
        ],
        
        baseCamps: [
            { name: 'Makalu Base Camp', elevation: 4870, country: 'Nepal', coordinates: [27.8833, 87.0667] },
            { name: 'Advanced Base Camp', elevation: 5650, country: 'Nepal', coordinates: [27.8750, 87.0750] }
        ],
        
        nearbyPeaks: [
            { name: 'Makalu II (Kangchungtse)', elevation: 7678, coordinates: [27.9139, 87.0842] },
            { name: 'Chomo Lonzo', elevation: 7790, coordinates: [27.9333, 87.0667] },
            { name: 'Baruntse', elevation: 7152, coordinates: [27.8667, 86.9667] },
            { name: 'Peak 6770', elevation: 6770, coordinates: [27.8500, 87.0500] }
        ],
        
        nearbyCities: [
            { name: 'Lukla', coordinates: [27.6869, 86.7314], country: 'Nepal', population: 500 },
            { name: 'Tumlingtar', coordinates: [27.3167, 87.2000], country: 'Nepal', population: 7000 },
            { name: 'Khandbari', coordinates: [27.3833, 87.2167], country: 'Nepal', population: 10000 }
        ],
        
        flora: [
            'Rhododendron (lower valleys)',
            'Birch and juniper',
            'Alpine meadows',
            'High-altitude mosses'
        ],
        
        fauna: [
            'Snow leopard',
            'Red panda',
            'Himalayan tahr',
            'Musk deer',
            'Danphe (Himalayan monal)'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Trekking', value: 'Makalu-Barun trek popular' },
            { label: 'Local Employment', value: 'Porter and guide jobs' }
        ],
        
        environmentalIssues: [
            { label: 'Remote Access', value: 'Difficult cleanup operations' },
            { label: 'Climate Change', value: 'Glacier recession observed' }
        ],
        
        conservation: [
            { label: 'Makalu Barun National Park', value: 'Established 1992' },
            { label: 'Buffer Zone', value: 'Community-managed conservation area' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'Possibly from Sanskrit Maha Kala (Great Black)' },
            { label: 'Perfect Pyramid', value: 'Known for distinctive pyramidal shape' },
            { label: 'French Achievement', value: 'All team members summited on first ascent' }
        ],
        
        records: [
            { record: 'Fifth Highest Peak', value: '8,485m elevation' },
            { record: 'Perfect Pyramid Shape', value: 'Most symmetrical 8000er' },
            { record: 'First Ascent Achievement', value: 'All 9 team members summited (1955)' },
            { record: 'First Winter Ascent', value: 'February 9, 2009' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #6 - CHO OYU
    // ========================================
    {
        id: 'cho-oyu',
        name: 'Cho Oyu',
        localNames: [
            { language: 'Tibetan', name: 'ཇོ་བོ་དབུ་ཡ (Chomolungma\'s neighbor)' },
            { language: 'Nepali', name: 'चो ओयु' },
            { language: 'English', name: 'Turquoise Goddess' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mahalangur Himal',
        elevation: 8188,
        prominence: 2340,
        isolation: 30,
        coordinates: [28.0942, 86.6608],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'October 19, 1954',
                climbers: ['Joseph Jöchler', 'Herbert Tichy', 'Pasang Dawa Lama'],
                route: 'Northwest Ridge',
                expedition: 'Austrian Expedition'
            },
            totalAscents: 3500,
            fatalities: 48,
            successRate: '75%',
            bestSeason: 'September-October',
            difficulty: 'Moderate',
            routes: [
                { name: 'Northwest Ridge', country: 'China', difficulty: 'Standard', description: 'Easiest 8000er route, from Tibet' },
                { name: 'Southwest Face', country: 'Nepal', difficulty: 'Difficult', description: 'Nepal side approach' },
                { name: 'Southeast Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'More technical option' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-45°C',
            summerHigh: '-10°C',
            snowfall: 'Moderate',
            winds: 'Generally moderate',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Ngozumpa Glacier', length: '36 km', description: 'Longest glacier in Nepal' },
            { name: 'Cho Oyu Glacier', length: '15 km', description: 'North side glacier' },
            { name: 'Gyabrag Glacier', length: '12 km', description: 'West side glacier' }
        ],
        
        baseCamps: [
            { name: 'Chinese Base Camp', elevation: 4900, country: 'China', coordinates: [28.1333, 86.6500] },
            { name: 'Advanced Base Camp', elevation: 5700, country: 'China', coordinates: [28.1167, 86.6583] },
            { name: 'Nepal Base Camp', elevation: 5100, country: 'Nepal', coordinates: [28.0500, 86.6667] }
        ],
        
        nearbyPeaks: [
            { name: 'Gyachung Kang', elevation: 7952, coordinates: [28.0972, 86.7419] },
            { name: 'Nangpai Gosum', elevation: 7321, coordinates: [28.0833, 86.7167] },
            { name: 'Pumori', elevation: 7161, coordinates: [28.0133, 86.8283] }
        ],
        
        nearbyCities: [
            { name: 'Namche Bazaar', coordinates: [27.8069, 86.7140], country: 'Nepal', population: 1600 },
            { name: 'Tingri', coordinates: [28.6333, 87.0833], country: 'China', population: 8000 },
            { name: 'Gokyo', coordinates: [27.9500, 86.6833], country: 'Nepal', population: 50 }
        ],
        
        flora: [
            'Sparse alpine vegetation',
            'Lichens and mosses',
            'Dwarf shrubs (lower elevations)'
        ],
        
        fauna: [
            'Snow leopard',
            'Blue sheep (bharal)',
            'Himalayan tahr',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$9,000 (Tibet), $3,500 (Nepal)' },
            { label: 'Training Peak', value: 'Popular for Everest preparation' },
            { label: 'High Success Rate', value: 'Attracts many commercial expeditions' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Popular destination causing pressure' },
            { label: 'Waste Management', value: 'Ongoing cleanup efforts' }
        ],
        
        conservation: [
            { label: 'Sagarmatha National Park', value: 'Nepal side protected' },
            { label: 'Qomolangma National Nature Preserve', value: 'Tibet side protected' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Turquoise Goddess" in Tibetan' },
            { label: 'Lightweight First Ascent', value: 'Small team, minimal equipment' },
            { label: 'Training Ground', value: 'Used for high-altitude acclimatization' }
        ],
        
        records: [
            { record: 'Sixth Highest Peak', value: '8,188m elevation' },
            { record: 'Easiest 8000er', value: 'Highest success rate of any 8000m peak' },
            { record: 'Most Summits in Season', value: '100+ summits in single season' },
            { record: 'First Ski Descent', value: 'Hans Kammerlander - 1983' }
        ],
        
        deathZone: true,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #7 - DHAULAGIRI I
    // ========================================
    {
        id: 'dhaulagiri',
        name: 'Dhaulagiri I',
        localNames: [
            { language: 'Sanskrit', name: 'धौलागिरी (Dhavala Giri)' },
            { language: 'Nepali', name: 'धौलागिरी' },
            { language: 'English', name: 'White Mountain' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Dhaulagiri Himal',
        elevation: 8167,
        prominence: 3357,
        isolation: 150,
        coordinates: [28.6983, 83.4875],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 13, 1960',
                climbers: ['Kurt Diemberger', 'Peter Diener', 'Ernst Forrer', 'Albin Schelbert', 'Nawang Dorje', 'Nima Dorje'],
                route: 'Northeast Ridge',
                expedition: 'Swiss/Austrian Expedition'
            },
            totalAscents: 450,
            fatalities: 71,
            successRate: '28%',
            bestSeason: 'April-May, September-October',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Northeast Ridge', country: 'Nepal', difficulty: 'Standard', description: 'Original route' },
                { name: 'Southwest Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'Alternative route' },
                { name: 'South Face', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Major technical face' },
                { name: 'West Face', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Rarely attempted' }
            ]
        },
        
        climate: {
            summitTemperature: '-32°C average',
            winterLow: '-50°C',
            summerHigh: '-15°C',
            snowfall: 'Heavy, avalanche prone',
            winds: 'Severe, frequent storms',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Dhaulagiri Icefall', length: '4 km', description: 'Notorious danger zone' },
            { name: 'Hidden Valley Glacier', length: '8 km', description: 'North side glacier' },
            { name: 'Chhonbardan Glacier', length: '12 km', description: 'South side drainage' }
        ],
        
        baseCamps: [
            { name: 'Dhaulagiri Base Camp', elevation: 4750, country: 'Nepal', coordinates: [28.7167, 83.4667] },
            { name: 'Italian Base Camp', elevation: 3660, country: 'Nepal', coordinates: [28.6833, 83.5333] }
        ],
        
        nearbyPeaks: [
            { name: 'Dhaulagiri II', elevation: 7751, coordinates: [28.7667, 83.3833] },
            { name: 'Dhaulagiri III', elevation: 7715, coordinates: [28.7500, 83.3667] },
            { name: 'Dhaulagiri IV', elevation: 7618, coordinates: [28.7333, 83.3500] },
            { name: 'Tukuche Peak', elevation: 6920, coordinates: [28.7333, 83.5833] }
        ],
        
        nearbyCities: [
            { name: 'Pokhara', coordinates: [28.2096, 83.9856], country: 'Nepal', population: 300000 },
            { name: 'Beni', coordinates: [28.3500, 83.5667], country: 'Nepal', population: 25000 },
            { name: 'Jomsom', coordinates: [28.7833, 83.7333], country: 'Nepal', population: 1700 }
        ],
        
        flora: [
            'Rhododendron forests',
            'Pine and birch forests',
            'Alpine meadows',
            'Juniper scrub'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan tahr',
            'Blue sheep',
            'Danphe (Himalayan monal)',
            'Red panda (lower elevations)'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Dhaulagiri Circuit', value: 'Popular trekking route' },
            { label: 'Adventure Tourism', value: 'Growing sector for Nepal' }
        ],
        
        environmentalIssues: [
            { label: 'Avalanche Danger', value: 'Frequent deadly avalanches' },
            { label: 'Climate Change', value: 'Increased instability' }
        ],
        
        conservation: [
            { label: 'Dhaulagiri Conservation Area', value: 'Part of Annapurna Conservation Area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"White Mountain" in Sanskrit' },
            { label: 'World\'s Highest', value: 'Thought to be highest peak 1808-1838' },
            { label: 'Aircraft Landing', value: 'First 8000er approached by aircraft (1960)' },
            { label: 'Failed Attempts', value: 'Seven expeditions failed before success' }
        ],
        
        records: [
            { record: 'Seventh Highest Peak', value: '8,167m elevation' },
            { record: 'Deepest Gorge', value: 'Kali Gandaki Gorge (5571m deep) nearby' },
            { record: 'First Aircraft Approach', value: 'Pilatus Porter plane to base camp (1960)' },
            { record: 'High Fatality Rate', value: '15.6% death rate' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #8 - MANASLU
    // ========================================
    {
        id: 'manaslu',
        name: 'Manaslu',
        localNames: [
            { language: 'Sanskrit', name: 'मनस्लु (Manasa)' },
            { language: 'Nepali', name: 'मनास्लु' },
            { language: 'English', name: 'Mountain of the Spirit' },
            { language: 'Japanese', name: 'Killer Mountain (historical)' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mansiri Himal',
        elevation: 8163,
        prominence: 3092,
        isolation: 106,
        coordinates: [28.5497, 84.5597],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 9, 1956',
                climbers: ['Toshio Imanishi', 'Gyalzen Norbu'],
                route: 'Northeast Face',
                expedition: 'Japanese Expedition'
            },
            totalAscents: 1500,
            fatalities: 68,
            successRate: '40%',
            bestSeason: 'April-May, September-October',
            difficulty: 'Difficult',
            routes: [
                { name: 'Northeast Face (Normal Route)', country: 'Nepal', difficulty: 'Standard', description: 'Japanese original route' },
                { name: 'Northwest Face', country: 'Nepal', difficulty: 'Very Difficult', description: 'Alternative approach' },
                { name: 'South Face', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Technical climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-48°C',
            summerHigh: '-12°C',
            snowfall: 'Heavy, avalanche risk',
            winds: 'Moderate to strong',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Manaslu Glacier', length: '18 km', description: 'Main glacier system' },
            { name: 'Thulagi Glacier', length: '8 km', description: 'Creates glacial lake' },
            { name: 'Pung Gyen Glacier', length: '6 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Manaslu Base Camp', elevation: 4800, country: 'Nepal', coordinates: [28.5833, 84.5500] },
            { name: 'Sama Gaon', elevation: 3530, country: 'Nepal', coordinates: [28.5667, 84.6167] }
        ],
        
        nearbyPeaks: [
            { name: 'Manaslu East', elevation: 7992, coordinates: [28.5528, 84.5833] },
            { name: 'Manaslu North', elevation: 7157, coordinates: [28.5833, 84.5667] },
            { name: 'Ngadi Chuli (Peak 29)', elevation: 7871, coordinates: [28.5000, 84.5667] },
            { name: 'Himalchuli', elevation: 7893, coordinates: [28.4333, 84.6333] }
        ],
        
        nearbyCities: [
            { name: 'Gorkha', coordinates: [28.0000, 84.6333], country: 'Nepal', population: 45000 },
            { name: 'Arughat', coordinates: [28.1333, 84.8167], country: 'Nepal', population: 5000 },
            { name: 'Kathmandu', coordinates: [27.7172, 85.3240], country: 'Nepal', population: 1400000 }
        ],
        
        flora: [
            'Rhododendron',
            'Pine forests',
            'Bamboo (lower slopes)',
            'Alpine flowers',
            'Medicinal herbs'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan tahr',
            'Red panda',
            'Himalayan black bear',
            'Musk deer'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,000 per climber' },
            { label: 'Manaslu Circuit Trek', value: 'One of Nepal\'s great treks' },
            { label: 'Local Communities', value: 'Tourism supports Tibetan-influenced villages' }
        ],
        
        environmentalIssues: [
            { label: 'Avalanche Risk', value: '2012 avalanche killed 11 climbers' },
            { label: 'Glacial Lake Risk', value: 'Thulagi Lake potential GLOF' }
        ],
        
        conservation: [
            { label: 'Manaslu Conservation Area', value: 'Established 1998' },
            { label: 'Buffer Zone', value: 'Community forest management' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Mountain of the Spirit" from Sanskrit "manasa" (mind/soul)' },
            { label: 'Japanese Mountain', value: 'Strong Japanese climbing connection' },
            { label: '1972 Disaster', value: '15 climbers killed in avalanche' },
            { label: 'Cultural Ties', value: 'Sacred to local Nubri people' }
        ],
        
        records: [
            { record: 'Eighth Highest Peak', value: '8,163m elevation' },
            { record: 'Japanese Achievement', value: 'First 8000er summited by Japanese' },
            { record: 'Manaslu Circuit', value: 'One of world\'s great treks' },
            { record: '2012 Tragedy', value: 'Deadliest avalanche on 8000er in recent history' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #9 - NANGA PARBAT
    // ========================================
    {
        id: 'nanga-parbat',
        name: 'Nanga Parbat',
        localNames: [
            { language: 'Sanskrit', name: 'नंगा पर्वत (Nanga Parvata)' },
            { language: 'Urdu', name: 'نانگا پربت' },
            { language: 'Kashmiri', name: 'Deo Mir' },
            { language: 'English', name: 'Naked Mountain / Killer Mountain' },
            { language: 'German', name: 'Schicksalsberg (Mountain of Destiny)' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Nanga Parbat Massif',
        elevation: 8126,
        prominence: 4608,
        isolation: 189,
        coordinates: [35.2378, 74.5892],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1614604993679-5e3dc80c16b7?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1614604993679-5e3dc80c16b7?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny at western anchor'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 3, 1953',
                climbers: ['Hermann Buhl'],
                route: 'Rakhiot Face',
                expedition: 'German-Austrian Expedition (solo summit bid)'
            },
            totalAscents: 335,
            fatalities: 77,
            successRate: '23%',
            bestSeason: 'June-August',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'Rakhiot Face', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Original route, north side' },
                { name: 'Rupal Face', country: 'Pakistan', difficulty: 'Extremely Difficult', description: 'Highest face on Earth (4600m)' },
                { name: 'Diamir Face', country: 'Pakistan', difficulty: 'Standard', description: 'West face, most popular now' },
                { name: 'Mazeno Ridge', country: 'Pakistan', difficulty: 'Exceptionally Difficult', description: '10km ridge traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-55°C',
            summerHigh: '-15°C',
            snowfall: 'Extreme, frequent storms',
            winds: 'Violent, unpredictable',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Rakhiot Glacier', length: '15 km', description: 'North side main glacier' },
            { name: 'Rupal Glacier', length: '12 km', description: 'South side glacier' },
            { name: 'Diamir Glacier', length: '18 km', description: 'West side glacier' },
            { name: 'Bazhin Glacier', length: '10 km', description: 'Northwest glacier' }
        ],
        
        baseCamps: [
            { name: 'Diamir Base Camp', elevation: 4100, country: 'Pakistan', coordinates: [35.2833, 74.5333] },
            { name: 'Rupal Base Camp', elevation: 3600, country: 'Pakistan', coordinates: [35.1833, 74.6333] },
            { name: 'Rakhiot Base Camp', elevation: 3967, country: 'Pakistan', coordinates: [35.3167, 74.5833] }
        ],
        
        nearbyPeaks: [
            { name: 'Nanga Parbat South', elevation: 8042, coordinates: [35.2167, 74.5833] },
            { name: 'Rakhiot Peak', elevation: 7070, coordinates: [35.2833, 74.6167] },
            { name: 'Ganalo Peak', elevation: 6606, coordinates: [35.3333, 74.6833] },
            { name: 'Chongra Peak', elevation: 6830, coordinates: [35.2500, 74.5500] }
        ],
        
        nearbyCities: [
            { name: 'Chilas', coordinates: [35.4167, 74.1000], country: 'Pakistan', population: 50000 },
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 },
            { name: 'Islamabad', coordinates: [33.6844, 73.0479], country: 'Pakistan', population: 1100000 }
        ],
        
        flora: [
            'Juniper forests',
            'Alpine meadows',
            'Wild roses',
            'Willows (lower valleys)',
            'Artemisia shrubs'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Brown bear',
            'Markhor',
            'Golden eagle',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$7,200 per climber' },
            { label: 'Fairy Meadows Tourism', value: 'Popular tourist destination' },
            { label: 'Karakoram Highway', value: 'Nearby scenic route' }
        ],
        
        environmentalIssues: [
            { label: 'Rapidly Rising', value: 'Fastest rising mountain on Earth' },
            { label: 'Erosion', value: 'Active geological processes' },
            { label: 'Tourism Impact', value: 'Fairy Meadows overcrowding' }
        ],
        
        conservation: [
            { label: 'Deosai National Park', value: 'Nearby protected area' },
            { label: 'Snow Leopard Conservation', value: 'Important habitat' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Naked Mountain" - no vegetation at high altitude' },
            { label: 'Killer Mountain', value: '31 deaths before first summit' },
            { label: 'Hermann Buhl', value: 'First solo summit of 8000er without oxygen' },
            { label: '1934 Tragedy', value: '10 climbers died in storm' },
            { label: '1937 Disaster', value: '16 died in avalanche (base camp)' },
            { label: '1970 Rupal Face', value: 'Reinhold Messner\'s brother Günther died on descent' }
        ],
        
        records: [
            { record: 'Ninth Highest Peak', value: '8,126m elevation' },
            { record: 'Highest Face on Earth', value: 'Rupal Face - 4,600m rise' },
            { record: 'Longest Ridge', value: 'Mazeno Ridge - 10km traverse' },
            { record: 'First Solo 8000er', value: 'Hermann Buhl - 1953' },
            { record: 'Fastest Rise on Earth', value: '7mm per year growth' },
            { record: 'First Winter Ascent', value: 'Simone Moro, Alex Txikon, Ali Sadpara - February 26, 2016' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #10 - ANNAPURNA I
    // ========================================
    {
        id: 'annapurna',
        name: 'Annapurna I',
        localNames: [
            { language: 'Sanskrit', name: 'अन्नपूर्णा (Annapūrṇā)' },
            { language: 'Nepali', name: 'अन्नपूर्ण' },
            { language: 'English', name: 'Goddess of the Harvests' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Annapurna Himal',
        elevation: 8091,
        prominence: 2984,
        isolation: 34,
        coordinates: [28.5956, 83.8203],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 3, 1950',
                climbers: ['Maurice Herzog', 'Louis Lachenal'],
                route: 'North Face',
                expedition: 'French Expedition'
            },
            totalAscents: 365,
            fatalities: 72,
            successRate: '24%',
            bestSeason: 'April-May, October',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'North Face', country: 'Nepal', difficulty: 'Standard', description: 'Original route via French Couloir' },
                { name: 'South Face', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Massive technical face' },
                { name: 'East Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'Alternative route' },
                { name: 'Dutch Rib', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Northwest spur' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-50°C',
            summerHigh: '-12°C',
            snowfall: 'Extreme, heavy monsoon',
            winds: 'Violent, frequent storms',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Annapurna Glacier', length: '14 km', description: 'North side main glacier' },
            { name: 'South Annapurna Glacier', length: '10 km', description: 'Sanctuary glacier' },
            { name: 'Seti Glacier', length: '12 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Annapurna Base Camp (ABC)', elevation: 4130, country: 'Nepal', coordinates: [28.5333, 83.8500] },
            { name: 'Annapurna North Base Camp', elevation: 4200, country: 'Nepal', coordinates: [28.6333, 83.7833] }
        ],
        
        nearbyPeaks: [
            { name: 'Annapurna II', elevation: 7937, coordinates: [28.5333, 84.1167] },
            { name: 'Annapurna III', elevation: 7555, coordinates: [28.5833, 83.9833] },
            { name: 'Annapurna IV', elevation: 7525, coordinates: [28.5333, 84.0833] },
            { name: 'Annapurna South', elevation: 7219, coordinates: [28.5167, 83.8000] },
            { name: 'Machhapuchhre', elevation: 6993, coordinates: [28.5000, 83.9500] },
            { name: 'Hiunchuli', elevation: 6441, coordinates: [28.5000, 83.8833] }
        ],
        
        nearbyCities: [
            { name: 'Pokhara', coordinates: [28.2096, 83.9856], country: 'Nepal', population: 300000 },
            { name: 'Jomsom', coordinates: [28.7833, 83.7333], country: 'Nepal', population: 1700 },
            { name: 'Manang', coordinates: [28.6667, 84.0167], country: 'Nepal', population: 500 }
        ],
        
        flora: [
            'Rhododendron forests',
            'Pine and birch',
            'Bamboo groves',
            'Alpine meadows',
            'Orchids (lower elevations)'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan tahr',
            'Blue sheep',
            'Danphe (national bird)',
            'Red panda',
            'Himalayan black bear'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Annapurna Circuit', value: 'One of world\'s best treks' },
            { label: 'Annapurna Sanctuary', value: 'Popular trekking destination' },
            { label: 'Tourism Revenue', value: '100,000+ trekkers annually' }
        ],
        
        environmentalIssues: [
            { label: 'High Avalanche Risk', value: 'Deadliest 8000er statistically' },
            { label: 'Climate Change', value: 'Increased snow instability' },
            { label: 'Trail Erosion', value: 'Heavy trekking traffic' }
        ],
        
        conservation: [
            { label: 'Annapurna Conservation Area', value: 'Largest protected area in Nepal' },
            { label: 'Community Management', value: 'Model for sustainable tourism' },
            { label: 'Biodiversity', value: '1,226 plant species, 102 mammals, 474 birds' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Full of Food" or "Goddess of the Harvests"' },
            { label: 'First 8000er Climbed', value: 'Historic June 3, 1950 ascent' },
            { label: 'Herzog\'s Frostbite', value: 'Lost all toes and most fingers' },
            { label: 'South Face 1970', value: 'British team - major mountaineering achievement' },
            { label: 'Book', value: '"Annapurna" by Maurice Herzog, best-selling mountaineering book' }
        ],
        
        records: [
            { record: 'Tenth Highest Peak', value: '8,091m elevation' },
            { record: 'First 8000er Climbed', value: 'June 3, 1950' },
            { record: 'Deadliest 8000er', value: '32% fatality-to-summit ratio' },
            { record: 'First South Face Ascent', value: 'Don Whillans & Dougal Haston - 1970' },
            { record: 'First Female Summit', value: 'Vera Komarkova - 1978' },
            { record: '2014 Disaster', value: '43 people killed in blizzard/avalanches' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOUNTAINS_DATA_1;
}
