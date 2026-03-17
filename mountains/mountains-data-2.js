/* ============================================
   MOUNTAINS DATA - FILE 2 OF 10
   Mountains 11-20: Eight-Thousanders (Part 2) 
   & Major Himalayan/Karakoram Peaks
   ============================================ */

const MOUNTAINS_DATA_2 = [
    // ========================================
    // #11 - GASHERBRUM I
    // ========================================
    {
        id: 'gasherbrum-i',
        name: 'Gasherbrum I',
        localNames: [
            { language: 'Balti', name: 'rgasha brum (Beautiful Mountain)' },
            { language: 'Urdu', name: 'گاشر برم' },
            { language: 'English', name: 'Hidden Peak' },
            { language: 'Survey', name: 'K5' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Baltoro Muztagh',
        elevation: 8080,
        prominence: 2155,
        isolation: 23.4,
        coordinates: [35.7244, 76.6961],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1520637836993-a071674a2472?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1520637836993-a071674a2472?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny, collision zone uplift'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 5, 1958',
                climbers: ['Pete Schoening', 'Andy Kauffman'],
                route: 'Roch Ridge/Southwest Ridge',
                expedition: 'American Expedition led by Nick Clinch'
            },
            totalAscents: 334,
            fatalities: 29,
            successRate: '30%',
            bestSeason: 'July-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Japanese Couloir', country: 'Pakistan', difficulty: 'Standard', description: 'Most popular route via northwest face' },
                { name: 'Southwest Ridge', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Original ascent route' },
                { name: 'Northwest Face', country: 'Pakistan', difficulty: 'Extremely Difficult', description: 'Direct line variation' },
                { name: 'North Face', country: 'China', difficulty: 'Very Difficult', description: 'Chinese side approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-55°C',
            summerHigh: '-18°C',
            snowfall: 'Heavy, frequent storms',
            winds: 'Strong, unpredictable weather windows',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Baltoro Glacier', length: '62 km', description: 'One of longest non-polar glaciers' },
            { name: 'Gasherbrum Glacier', length: '18 km', description: 'North side glacier system' },
            { name: 'Abruzzi Glacier', length: '12 km', description: 'Southeast drainage' }
        ],
        
        baseCamps: [
            { name: 'Gasherbrum Base Camp', elevation: 5150, country: 'Pakistan', coordinates: [35.7500, 76.6500] },
            { name: 'Advanced Base Camp', elevation: 5900, country: 'Pakistan', coordinates: [35.7333, 76.6833] }
        ],
        
        nearbyPeaks: [
            { name: 'Gasherbrum II', elevation: 8034, coordinates: [35.7572, 76.6531] },
            { name: 'Gasherbrum III', elevation: 7946, coordinates: [35.7567, 76.6397] },
            { name: 'Gasherbrum IV', elevation: 7932, coordinates: [35.7619, 76.6178] },
            { name: 'Broad Peak', elevation: 8051, coordinates: [35.8117, 76.5650] }
        ],
        
        nearbyCities: [
            { name: 'Skardu', coordinates: [35.2971, 75.6333], country: 'Pakistan', population: 15000 },
            { name: 'Askole', coordinates: [35.6833, 75.8167], country: 'Pakistan', population: 300 },
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 }
        ],
        
        flora: [
            'High altitude lichens',
            'Alpine grasses',
            'Dwarf willows (lower valleys)',
            'Cushion plants'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Marco Polo sheep',
            'Golden eagle',
            'Himalayan griffon'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$7,200 per climber' },
            { label: 'Expedition Support', value: 'Balti porters and high-altitude guides' },
            { label: 'Baltoro Trek', value: 'Popular approach trek to K2 region' }
        ],
        
        environmentalIssues: [
            { label: 'Remote Location', value: 'Difficult waste removal' },
            { label: 'Glacier Retreat', value: 'Climate change impacts' },
            { label: 'Limited Infrastructure', value: 'Minimal cleanup capabilities' }
        ],
        
        conservation: [
            { label: 'Central Karakoram National Park', value: 'Protected area since 1993' },
            { label: 'UNESCO Tentative List', value: 'Part of proposed World Heritage Site' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: '"Beautiful Mountain" in Balti language' },
            { label: 'Hidden Peak', value: 'Not visible from Concordia, hence the name' },
            { label: 'American First', value: 'First 8000er summited by Americans' },
            { label: 'Alpine Style', value: 'Messner & Habeler 1975 - first alpine style 8000er' }
        ],
        
        records: [
            { record: 'Eleventh Highest Peak', value: '8,080m elevation' },
            { record: 'First Alpine Style 8000er', value: 'Messner & Habeler - 1975' },
            { record: 'First American 8000er', value: 'July 5, 1958' },
            { record: 'Gasherbrum Traverse', value: 'GI to GII first done in 1984' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #12 - BROAD PEAK
    // ========================================
    {
        id: 'broad-peak',
        name: 'Broad Peak',
        localNames: [
            { language: 'Balti', name: 'Faichan Kangri' },
            { language: 'Survey', name: 'K3' },
            { language: 'Urdu', name: 'براڈ پیک' },
            { language: 'Chinese', name: '布洛阿特峰' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Baltoro Muztagh',
        elevation: 8051,
        prominence: 1701,
        isolation: 8.6,
        coordinates: [35.8117, 76.5650],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 9, 1957',
                climbers: ['Fritz Wintersteller', 'Marcus Schmuck', 'Kurt Diemberger', 'Hermann Buhl'],
                route: 'West Spur',
                expedition: 'Austrian Expedition (without supplemental oxygen or high-altitude porters)'
            },
            totalAscents: 450,
            fatalities: 21,
            successRate: '40%',
            bestSeason: 'June-August',
            difficulty: 'Difficult',
            routes: [
                { name: 'West Spur/Normal Route', country: 'Pakistan', difficulty: 'Standard', description: 'Original and most popular route' },
                { name: 'Southwest Face', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Alternative approach' },
                { name: 'North Ridge', country: 'China', difficulty: 'Very Difficult', description: 'Chinese side route' }
            ]
        },
        
        climate: {
            summitTemperature: '-32°C average',
            winterLow: '-50°C',
            summerHigh: '-15°C',
            snowfall: 'Heavy during monsoon',
            winds: 'Moderate to strong',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Baltoro Glacier', length: '62 km', description: 'Main access glacier' },
            { name: 'Godwin-Austen Glacier', length: '20 km', description: 'Connects to K2' },
            { name: 'Broad Glacier', length: '8 km', description: 'West face drainage' }
        ],
        
        baseCamps: [
            { name: 'Broad Peak Base Camp', elevation: 4960, country: 'Pakistan', coordinates: [35.8333, 76.5500] },
            { name: 'Camp 1', elevation: 5700, country: 'Pakistan', coordinates: [35.8250, 76.5583] }
        ],
        
        nearbyPeaks: [
            { name: 'K2', elevation: 8611, coordinates: [35.8808, 76.5155] },
            { name: 'Gasherbrum IV', elevation: 7932, coordinates: [35.7619, 76.6178] },
            { name: 'Broad Peak Central', elevation: 8011, coordinates: [35.8067, 76.5683] },
            { name: 'Broad Peak North', elevation: 7490, coordinates: [35.8217, 76.5583] }
        ],
        
        nearbyCities: [
            { name: 'Skardu', coordinates: [35.2971, 75.6333], country: 'Pakistan', population: 15000 },
            { name: 'Askole', coordinates: [35.6833, 75.8167], country: 'Pakistan', population: 300 }
        ],
        
        flora: [
            'Sparse alpine vegetation',
            'Lichens',
            'Hardy mosses'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Brown bear',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$7,200 per climber' },
            { label: 'K2 Acclimatization', value: 'Often climbed before K2 attempt' },
            { label: 'Tourism', value: 'Part of Concordia region treks' }
        ],
        
        environmentalIssues: [
            { label: 'Waste Management', value: 'Remote location challenges' },
            { label: 'Climate Change', value: 'Glacier instability increasing' }
        ],
        
        conservation: [
            { label: 'Central Karakoram National Park', value: 'Protected since 1993' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'Named for its broad 1.5km summit ridge' },
            { label: 'K3 Survey Name', value: 'Third peak surveyed in Karakoram' },
            { label: 'Hermann Buhl', value: 'Died on descent after bivouac (1957)' },
            { label: 'Lightweight Style', value: 'First 8000er climbed without high-altitude porters' }
        ],
        
        records: [
            { record: 'Twelfth Highest Peak', value: '8,051m elevation' },
            { record: 'Broad Summit', value: '1.5km long summit ridge' },
            { record: 'Three Summits', value: 'Central (8011m), Main (8051m), North (7490m)' },
            { record: 'Tragic First Ascent', value: 'Hermann Buhl died on mountain after success' }
        ],
        
        deathZone: true,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #13 - GASHERBRUM II
    // ========================================
    {
        id: 'gasherbrum-ii',
        name: 'Gasherbrum II',
        localNames: [
            { language: 'Balti', name: 'Gasherbrum (Beautiful Mountain)' },
            { language: 'Survey', name: 'K4' },
            { language: 'Urdu', name: 'گاشربرم ٢' },
            { language: 'Chinese', name: '加舒尔布鲁木II峰' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Baltoro Muztagh',
        elevation: 8034,
        prominence: 1524,
        isolation: 1.5,
        coordinates: [35.7572, 76.6531],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 7, 1956',
                climbers: ['Fritz Moravec', 'Josef Larch', 'Hans Willenpart'],
                route: 'Southwest Ridge',
                expedition: 'Austrian Expedition'
            },
            totalAscents: 980,
            fatalities: 21,
            successRate: '55%',
            bestSeason: 'July-August',
            difficulty: 'Moderate',
            routes: [
                { name: 'Southwest Ridge/Normal Route', country: 'Pakistan', difficulty: 'Standard', description: 'Original and easiest route' },
                { name: 'West Face', country: 'Pakistan', difficulty: 'Difficult', description: 'More technical variation' },
                { name: 'East Ridge', country: 'China', difficulty: 'Very Difficult', description: 'Chinese side approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-48°C',
            summerHigh: '-12°C',
            snowfall: 'Heavy',
            winds: 'Moderate',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Baltoro Glacier', length: '62 km', description: 'Main approach glacier' },
            { name: 'Gasherbrum Glacier', length: '18 km', description: 'North side system' },
            { name: 'South Gasherbrum Glacier', length: '10 km', description: 'South drainage' }
        ],
        
        baseCamps: [
            { name: 'Gasherbrum II Base Camp', elevation: 5100, country: 'Pakistan', coordinates: [35.7667, 76.6333] },
            { name: 'Camp 1', elevation: 5900, country: 'Pakistan', coordinates: [35.7583, 76.6500] }
        ],
        
        nearbyPeaks: [
            { name: 'Gasherbrum I', elevation: 8080, coordinates: [35.7244, 76.6961] },
            { name: 'Gasherbrum III', elevation: 7946, coordinates: [35.7567, 76.6397] },
            { name: 'Gasherbrum IV', elevation: 7932, coordinates: [35.7619, 76.6178] },
            { name: 'Gasherbrum V', elevation: 7321, coordinates: [35.7500, 76.6667] }
        ],
        
        nearbyCities: [
            { name: 'Skardu', coordinates: [35.2971, 75.6333], country: 'Pakistan', population: 15000 },
            { name: 'Askole', coordinates: [35.6833, 75.8167], country: 'Pakistan', population: 300 }
        ],
        
        flora: [
            'Alpine lichens',
            'Sparse mosses',
            'Rock-dwelling plants'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Golden eagle',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$7,200 per climber' },
            { label: 'Popular 8000er', value: 'High success rate attracts climbers' },
            { label: 'Training Peak', value: 'Good preparation for harder peaks' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Popular peak seeing more traffic' },
            { label: 'Waste', value: 'Cleanup efforts needed' }
        ],
        
        conservation: [
            { label: 'Central Karakoram National Park', value: 'Protected area' }
        ],
        
        historicalImportance: [
            { label: 'K4 Survey Name', value: 'Fourth peak surveyed in Karakoram' },
            { label: 'Austrian Success', value: 'Three Austrian climbers on first ascent' },
            { label: 'Gasherbrum Traverse', value: 'Popular to combine with GI' }
        ],
        
        records: [
            { record: 'Thirteenth Highest Peak', value: '8,034m elevation' },
            { record: 'Easiest Karakoram 8000er', value: 'Highest success rate in range' },
            { record: 'First Winter Ascent', value: 'Denis Urubko & Simone Moro - Feb 2, 2011' },
            { record: 'First Ski Descent', value: 'Fredrik Ericsson - 2008' }
        ],
        
        deathZone: true,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #14 - SHISHAPANGMA
    // ========================================
    {
        id: 'shishapangma',
        name: 'Shishapangma',
        localNames: [
            { language: 'Tibetan', name: 'ཤིས་པ་པང་མ (Shisha Pangma)' },
            { language: 'Chinese', name: '希夏邦马峰 (Xīxiàbāngmǎ Fēng)' },
            { language: 'Sanskrit', name: 'Gosainthān (Place of the Saint)' },
            { language: 'English', name: 'Crest Above the Grassy Plain' }
        ],
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Jugal Himal',
        elevation: 8027,
        prominence: 2897,
        isolation: 91.3,
        coordinates: [28.3531, 85.7797],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 2, 1964',
                climbers: ['Xu Jing', 'Zhang Junyan', 'Wang Fuzhou', 'Chen San', 'Cheng Tianliang', 'Wu Zongye', 'Soinam Dorje', 'Migmar Zashi', 'Doji', 'Yun Den'],
                route: 'North Ridge',
                expedition: 'Chinese Expedition'
            },
            totalAscents: 450,
            fatalities: 25,
            successRate: '55%',
            bestSeason: 'April-May, September-October',
            difficulty: 'Moderate',
            routes: [
                { name: 'North Ridge/Normal Route', country: 'China', difficulty: 'Standard', description: 'Original route, most common' },
                { name: 'Southwest Face', country: 'China', difficulty: 'Extremely Difficult', description: 'Technical challenge' },
                { name: 'Central Summit via West Ridge', country: 'China', difficulty: 'Very Difficult', description: 'To true summit' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-10°C',
            snowfall: 'Moderate to heavy',
            winds: 'Can be severe',
            deathZone: 'Above 8000m'
        },
        
        glaciers: [
            { name: 'Shishapangma Glacier', length: '12 km', description: 'North side main glacier' },
            { name: 'Langtang Glacier', length: '20 km', description: 'South side, Nepal border' },
            { name: 'Phurbi Chyachumbu Glacier', length: '8 km', description: 'West drainage' }
        ],
        
        baseCamps: [
            { name: 'Chinese Base Camp', elevation: 5000, country: 'China', coordinates: [28.3833, 85.7667] },
            { name: 'Advanced Base Camp', elevation: 5600, country: 'China', coordinates: [28.3667, 85.7833] }
        ],
        
        nearbyPeaks: [
            { name: 'Shishapangma Central', elevation: 8008, coordinates: [28.3500, 85.7833] },
            { name: 'Molamenqing', elevation: 7703, coordinates: [28.3333, 85.7500] },
            { name: 'Porong Ri', elevation: 7292, coordinates: [28.3167, 85.7667] },
            { name: 'Phurbi Chyachumbu', elevation: 6637, coordinates: [28.3667, 85.7333] }
        ],
        
        nearbyCities: [
            { name: 'Nyalam', coordinates: [28.1833, 85.9667], country: 'China', population: 3000 },
            { name: 'Tingri', coordinates: [28.6333, 87.0833], country: 'China', population: 8000 },
            { name: 'Shigatse', coordinates: [29.2667, 88.8833], country: 'China', population: 100000 }
        ],
        
        flora: [
            'Alpine grasses',
            'Juniper scrub',
            'High-altitude lichens',
            'Cushion plants'
        ],
        
        fauna: [
            'Snow leopard',
            'Blue sheep',
            'Tibetan antelope',
            'Himalayan marmot',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$9,500 (Chinese fee)' },
            { label: 'Tibet Tourism', value: 'Part of Himalayan tourism circuit' },
            { label: 'Only Wholly Chinese 8000er', value: 'Unique access through Tibet' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glacier retreat observed' },
            { label: 'Access Road Impact', value: 'Development near mountain' }
        ],
        
        conservation: [
            { label: 'Qomolangma National Nature Preserve', value: 'Extended protected area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Crest Above the Grassy Plain" in Tibetan' },
            { label: 'Last 8000er Climbed', value: 'Final 8000er to see first ascent (1964)' },
            { label: 'Chinese Only', value: 'Only 8000er entirely within China' },
            { label: 'Political Access', value: 'Closed to foreigners until 1978' }
        ],
        
        records: [
            { record: 'Fourteenth Highest Peak', value: '8,027m - lowest 8000er' },
            { record: 'Last 8000er Climbed', value: 'May 2, 1964 (14 years after first 8000er)' },
            { record: 'Only Chinese 8000er', value: 'Entirely within Tibet' },
            { record: 'Main vs Central Summit', value: 'Central (8008m) vs Main (8027m) controversy' },
            { record: 'First Winter Ascent', value: 'Piotr Morawski & Simone Moro - Jan 14, 2005' }
        ],
        
        deathZone: true,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: true
    },

    // ========================================
    // #15 - GYACHUNG KANG
    // ========================================
    {
        id: 'gyachung-kang',
        name: 'Gyachung Kang',
        localNames: [
            { language: 'Tibetan', name: 'རྒྱ་ཆུང་སྒང' },
            { language: 'Nepali', name: 'ग्याचुंग काङ' },
            { language: 'English', name: 'Gyachung Peak' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Mahalangur Himal',
        elevation: 7952,
        prominence: 700,
        isolation: 7.2,
        coordinates: [28.0972, 86.7419],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'April 10, 1964',
                climbers: ['Y. Kato', 'K. Sakaizawa', 'Pasang Phutar'],
                route: 'Northeast Ridge',
                expedition: 'Japanese Expedition'
            },
            totalAscents: 15,
            fatalities: 2,
            successRate: '20%',
            bestSeason: 'April-May, October',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Northeast Ridge', country: 'Nepal', difficulty: 'Standard', description: 'Original route' },
                { name: 'West Ridge', country: 'Nepal/China', difficulty: 'Very Difficult', description: 'Alternative approach' },
                { name: 'South Face', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Technical climb' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-8°C',
            snowfall: 'Heavy',
            winds: 'Strong, exposed position',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Ngozumpa Glacier', length: '36 km', description: 'Longest glacier in Nepal' },
            { name: 'Gyachung Glacier', length: '10 km', description: 'North side glacier' }
        ],
        
        baseCamps: [
            { name: 'Gyachung Kang Base Camp', elevation: 5400, country: 'Nepal', coordinates: [28.0667, 86.7500] }
        ],
        
        nearbyPeaks: [
            { name: 'Cho Oyu', elevation: 8188, coordinates: [28.0942, 86.6608] },
            { name: 'Pumori', elevation: 7161, coordinates: [28.0133, 86.8283] },
            { name: 'Nangpai Gosum I', elevation: 7321, coordinates: [28.0833, 86.7167] }
        ],
        
        nearbyCities: [
            { name: 'Gokyo', coordinates: [27.9500, 86.6833], country: 'Nepal', population: 50 },
            { name: 'Namche Bazaar', coordinates: [27.8069, 86.7140], country: 'Nepal', population: 1600 }
        ],
        
        flora: [
            'Alpine grasses',
            'Lichens',
            'Mosses'
        ],
        
        fauna: [
            'Snow leopard',
            'Blue sheep',
            'Himalayan tahr'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$2,500 per climber' },
            { label: 'Remote Peak', value: 'Less commercial than neighboring peaks' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Ngozumpa glacier melting' }
        ],
        
        conservation: [
            { label: 'Sagarmatha National Park', value: 'UNESCO World Heritage Site' }
        ],
        
        historicalImportance: [
            { label: 'Highest Non-8000er', value: 'Highest peak under 8000m' },
            { label: 'Infrequent Ascents', value: 'Rarely attempted despite accessibility' }
        ],
        
        records: [
            { record: 'Fifteenth Highest Peak', value: '7,952m elevation' },
            { record: 'Highest Sub-8000er', value: 'Tallest peak below 8000m threshold' },
            { record: 'Low Ascent Count', value: 'Fewer than 20 successful summits' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #16 - NAMCHA BARWA
    // ========================================
    {
        id: 'namcha-barwa',
        name: 'Namcha Barwa',
        localNames: [
            { language: 'Tibetan', name: 'གནམ་ལྕགས་འབར་བ (Namjakbarwa)' },
            { language: 'Chinese', name: '南迦巴瓦峰 (Nánjiābāwǎ Fēng)' },
            { language: 'English', name: 'Sky-Burning Peak' }
        ],
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Namcha Barwa Himal',
        elevation: 7782,
        prominence: 4106,
        isolation: 231,
        coordinates: [29.6375, 95.0336],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1545552987-720aa18145ca?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1545552987-720aa18145ca?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny, Eastern Syntaxis'
        },
        
        climbing: {
            firstAscent: {
                date: 'October 30, 1992',
                climbers: ['Chinese-Japanese Joint Expedition (11 members)'],
                route: 'Northwest Ridge',
                expedition: 'First ascent after many failed attempts'
            },
            totalAscents: 3,
            fatalities: 0,
            successRate: '10%',
            bestSeason: 'October-November',
            difficulty: 'Exceptionally Difficult',
            routes: [
                { name: 'Northwest Ridge', country: 'China', difficulty: 'Standard', description: 'Only completed route' },
                { name: 'West Face', country: 'China', difficulty: 'Unclimbed', description: 'Extremely dangerous' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Very heavy, monsoon influence',
            winds: 'Violent storms common',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Namcha Barwa Glacier', length: '12 km', description: 'North face glacier' },
            { name: 'Yarlung Tsangpo Glacier', length: '15 km', description: 'Connected to great canyon' }
        ],
        
        baseCamps: [
            { name: 'Namcha Barwa Base Camp', elevation: 3800, country: 'China', coordinates: [29.5833, 95.0000] }
        ],
        
        nearbyPeaks: [
            { name: 'Gyala Peri', elevation: 7294, coordinates: [29.8000, 94.9833] },
            { name: 'Kangla Karpo', elevation: 6805, coordinates: [29.5667, 95.0500] }
        ],
        
        nearbyCities: [
            { name: 'Nyingchi', coordinates: [29.5667, 94.3667], country: 'China', population: 50000 },
            { name: 'Lhasa', coordinates: [29.6500, 91.1000], country: 'China', population: 500000 }
        ],
        
        flora: [
            'Temperate rainforest (lower)',
            'Rhododendrons',
            'Alpine meadows',
            'Diverse orchids'
        ],
        
        fauna: [
            'Red panda',
            'Clouded leopard',
            'Takin',
            'Himalayan black bear',
            'Diverse birds (400+ species)'
        ],
        
        economicImportance: [
            { label: 'Adventure Tourism', value: 'Growing trekking destination' },
            { label: 'Great Bend', value: 'Yarlung Tsangpo Grand Canyon views' }
        ],
        
        environmentalIssues: [
            { label: 'Dam Proposals', value: 'Controversial hydropower plans' },
            { label: 'Deforestation', value: 'Logging pressure in valleys' }
        ],
        
        conservation: [
            { label: 'Yarlung Tsangpo Grand Canyon', value: 'Deepest canyon on Earth' },
            { label: 'Biodiversity Hotspot', value: 'One of world\'s richest ecosystems' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Sky-Burning Peak" or "Blazing Meteorite"' },
            { label: 'Last Major Virgin Peak', value: 'Unclimbed until 1992' },
            { label: 'Tibetan Sacred Mountain', value: 'One of Bon religion\'s holiest peaks' },
            { label: 'Great Canyon', value: 'Where Himalayas meet Yarlung Tsangpo' }
        ],
        
        records: [
            { record: 'Sixteenth Highest Peak', value: '7,782m elevation' },
            { record: 'Easternmost Himalayan Giant', value: 'Eastern anchor of Himalayas' },
            { record: 'One of Rarest Summits', value: 'Only 3 successful expeditions ever' },
            { record: 'Deepest Canyon Nearby', value: 'Yarlung Tsangpo - 5,382m deep' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #17 - NANDA DEVI
    // ========================================
    {
        id: 'nanda-devi',
        name: 'Nanda Devi',
        localNames: [
            { language: 'Sanskrit', name: 'नन्दा देवी (Nandā Devī)' },
            { language: 'Hindi', name: 'नंदा देवी' },
            { language: 'English', name: 'Bliss-Giving Goddess' }
        ],
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Garhwal Himalaya',
        elevation: 7816,
        prominence: 3139,
        isolation: 185,
        coordinates: [30.3733, 79.9742],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 29, 1936',
                climbers: ['Noel Odell', 'Bill Tilman'],
                route: 'South Ridge',
                expedition: 'British-American Expedition'
            },
            totalAscents: 25,
            fatalities: 6,
            successRate: '30%',
            bestSeason: 'May-June, September-October',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'South Ridge', country: 'India', difficulty: 'Standard', description: 'Original route' },
                { name: 'North Ridge', country: 'India', difficulty: 'Very Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy monsoon',
            winds: 'Moderate to strong',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Nanda Devi Glacier', length: '14 km', description: 'Main glacier' },
            { name: 'Rishi Glacier', length: '12 km', description: 'Southern approach' },
            { name: 'Milam Glacier', length: '16 km', description: 'Northern drainage' }
        ],
        
        baseCamps: [
            { name: 'Nanda Devi Base Camp', elevation: 4300, country: 'India', coordinates: [30.3833, 79.9500] }
        ],
        
        nearbyPeaks: [
            { name: 'Nanda Devi East', elevation: 7434, coordinates: [30.3783, 80.0042] },
            { name: 'Dunagiri', elevation: 7066, coordinates: [30.5500, 79.8833] },
            { name: 'Changabang', elevation: 6864, coordinates: [30.4833, 79.9333] },
            { name: 'Kalanka', elevation: 6931, coordinates: [30.4833, 79.9167] }
        ],
        
        nearbyCities: [
            { name: 'Joshimath', coordinates: [30.5583, 79.5667], country: 'India', population: 15000 },
            { name: 'Rishikesh', coordinates: [30.0869, 78.2676], country: 'India', population: 100000 },
            { name: 'Dehradun', coordinates: [30.3165, 78.0322], country: 'India', population: 700000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Brahmakamal (sacred lotus)',
            'Rhododendrons',
            'Birch forests',
            'Medicinal herbs'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan musk deer',
            'Himalayan black bear',
            'Serow',
            'Himalayan monal'
        ],
        
        economicImportance: [
            { label: 'Climbing Closed', value: 'No permits issued since 1982' },
            { label: 'Trekking', value: 'Limited treks to sanctuary edge' },
            { label: 'Religious Tourism', value: 'Hindu pilgrimage site' }
        ],
        
        environmentalIssues: [
            { label: 'Protected Zone', value: 'Closed to preserve ecosystem' },
            { label: 'Plutonium Device', value: 'Lost CIA device on mountain (1965)' },
            { label: 'Glacier Melt', value: 'Climate change impacts' }
        ],
        
        conservation: [
            { label: 'Nanda Devi National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Core Zone Closed', value: 'No entry since 1982' },
            { label: 'Biosphere Reserve', value: 'Part of larger protected area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Bliss-Giving Goddess" - Hindu deity' },
            { label: 'Highest in British India', value: 'Highest peak until 1947 partition' },
            { label: 'Sanctuary Basin', value: 'Surrounded by ring of peaks over 6000m' },
            { label: '1936 Expedition', value: 'Among highest climbed pre-WWII' },
            { label: 'CIA Incident', value: 'Nuclear device lost on mountain 1965' }
        ],
        
        records: [
            { record: 'Highest Peak Entirely in India', value: '7,816m elevation' },
            { record: 'Closed to Climbing', value: 'No permits since 1982' },
            { record: 'Nanda Devi Sanctuary', value: 'Ringed by peaks forming natural fortress' },
            { record: 'Pre-WWII Achievement', value: 'Highest summit until 1950' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #18 - RAKAPOSHI
    // ========================================
    {
        id: 'rakaposhi',
        name: 'Rakaposhi',
        localNames: [
            { language: 'Burushaski', name: 'Dumani (Mother of Mist)' },
            { language: 'Wakhi', name: 'Rakaposhi (Snow Covered)' },
            { language: 'Urdu', name: 'راکاپوشی' },
            { language: 'English', name: 'Snow Covered' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Rakaposhi-Haramosh Range',
        elevation: 7788,
        prominence: 2818,
        isolation: 42,
        coordinates: [36.1417, 74.4897],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 25, 1958',
                climbers: ['Mike Banks', 'Tom Patey'],
                route: 'Southwest Spur',
                expedition: 'British-Pakistani Expedition'
            },
            totalAscents: 30,
            fatalities: 8,
            successRate: '25%',
            bestSeason: 'June-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Southwest Spur', country: 'Pakistan', difficulty: 'Standard', description: 'Original route' },
                { name: 'Northwest Ridge', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Alternative approach' },
                { name: 'North Face', country: 'Pakistan', difficulty: 'Extremely Difficult', description: 'Major technical challenge' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-8°C',
            snowfall: 'Very heavy, avalanche risk',
            winds: 'Strong, exposed ridges',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Biro Glacier', length: '20 km', description: 'North side glacier' },
            { name: 'Rakaposhi Glacier', length: '14 km', description: 'Southwest drainage' },
            { name: 'Jaglot Glacier', length: '12 km', description: 'South side glacier' }
        ],
        
        baseCamps: [
            { name: 'Rakaposhi Base Camp', elevation: 3600, country: 'Pakistan', coordinates: [36.1333, 74.5167] }
        ],
        
        nearbyPeaks: [
            { name: 'Diran', elevation: 7266, coordinates: [36.1167, 74.5833] },
            { name: 'Haramosh', elevation: 7409, coordinates: [35.8583, 74.8917] },
            { name: 'Spantik', elevation: 7027, coordinates: [36.0333, 75.0833] }
        ],
        
        nearbyCities: [
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 },
            { name: 'Karimabad', coordinates: [36.3167, 74.6667], country: 'Pakistan', population: 5000 },
            { name: 'Aliabad', coordinates: [36.3000, 74.6167], country: 'Pakistan', population: 8000 }
        ],
        
        flora: [
            'Juniper forests',
            'Wild roses',
            'Apricot orchards (valleys)',
            'Alpine flowers'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Markhor',
            'Brown bear',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Karakoram Highway Views', value: 'Iconic mountain for tourists' },
            { label: 'Hunza Tourism', value: 'Key attraction for region' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Visible climate change impacts' },
            { label: 'Tourism Impact', value: 'Increasing visitors to base camp' }
        ],
        
        conservation: [
            { label: 'Karakoram International University Research', value: 'Scientific studies ongoing' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Snow Covered" in local Wakhi language' },
            { label: 'Hunza Landmark', value: 'Dominates views from Karakoram Highway' },
            { label: 'Greatest Rise', value: 'One of steepest rises from base to summit' }
        ],
        
        records: [
            { record: 'Major Karakoram Peak', value: '7,788m elevation' },
            { record: 'Greatest Vertical Rise', value: '5,900m from Hunza Valley floor' },
            { record: 'Karakoram Highway Icon', value: 'Most photographed mountain on highway' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #19 - BATURA SAR
    // ========================================
    {
        id: 'batura-sar',
        name: 'Batura Sar',
        localNames: [
            { language: 'Wakhi', name: 'Batura' },
            { language: 'Urdu', name: 'بتورا سر' },
            { language: 'English', name: 'Batura Peak' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Batura Muztagh',
        elevation: 7795,
        prominence: 1572,
        isolation: 19.5,
        coordinates: [36.5200, 74.4925],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 30, 1976',
                climbers: ['Hubert Bleicher', 'Herbert Oberhofer'],
                route: 'South Spur',
                expedition: 'German Expedition'
            },
            totalAscents: 8,
            fatalities: 3,
            successRate: '15%',
            bestSeason: 'June-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'South Spur', country: 'Pakistan', difficulty: 'Standard', description: 'Original route' },
                { name: 'West Ridge', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-5°C',
            snowfall: 'Very heavy',
            winds: 'Strong, exposed',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Batura Glacier', length: '57 km', description: 'One of the longest glaciers outside polar regions' },
            { name: 'Pasu Glacier', length: '25 km', description: 'Southern drainage' }
        ],
        
        baseCamps: [
            { name: 'Batura Base Camp', elevation: 4200, country: 'Pakistan', coordinates: [36.4833, 74.5333] }
        ],
        
        nearbyPeaks: [
            { name: 'Batura II', elevation: 7762, coordinates: [36.5333, 74.5167] },
            { name: 'Batura III', elevation: 7729, coordinates: [36.5167, 74.5500] },
            { name: 'Batura IV', elevation: 7594, coordinates: [36.5000, 74.5000] },
            { name: 'Shispare', elevation: 7611, coordinates: [36.4333, 74.6833] }
        ],
        
        nearbyCities: [
            { name: 'Pasu', coordinates: [36.4833, 74.8833], country: 'Pakistan', population: 1000 },
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 }
        ],
        
        flora: [
            'Sparse alpine vegetation',
            'Juniper scrub',
            'Willows (lower valleys)'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Marco Polo sheep',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Batura Glacier Trek', value: 'Popular adventure tourism' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Lake Formation', value: 'GLOF risk increasing' },
            { label: 'Climate Change', value: 'Glacier dynamics changing' }
        ],
        
        conservation: [
            { label: 'Proposed Protected Area', value: 'Conservation efforts ongoing' }
        ],
        
        historicalImportance: [
            { label: 'Batura Wall', value: 'Massive mountain wall with 4 peaks over 7500m' },
            { label: 'Remote Location', value: 'Difficult access contributes to few ascents' }
        ],
        
        records: [
            { record: 'Batura Muztagh Highpoint', value: '7,795m elevation' },
            { record: 'Batura Wall', value: 'Four peaks over 7500m in single massif' },
            { record: 'One of Longest Glaciers', value: 'Batura Glacier - 57km' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #20 - KAMET
    // ========================================
    {
        id: 'kamet',
        name: 'Kamet',
        localNames: [
            { language: 'Sanskrit', name: 'कामत' },
            { language: 'Hindi', name: 'कामेट' },
            { language: 'Tibetan', name: 'Kangmed' }
        ],
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Garhwal Himalaya',
        elevation: 7756,
        prominence: 2825,
        isolation: 56.4,
        coordinates: [30.9211, 79.5925],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1601831224352-a32baf91af26?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1601831224352-a32baf91af26?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 21, 1931',
                climbers: ['Frank Smythe', 'Eric Shipton', 'R.L. Holdsworth', 'Lewa'],
                route: 'Northeast Ridge',
                expedition: 'British Expedition'
            },
            totalAscents: 50,
            fatalities: 5,
            successRate: '40%',
            bestSeason: 'May-June, September-October',
            difficulty: 'Difficult',
            routes: [
                { name: 'Northeast Ridge', country: 'India', difficulty: 'Standard', description: 'Original and most popular route' },
                { name: 'Northwest Ridge', country: 'India', difficulty: 'Difficult', description: 'Alternative approach' },
                { name: 'East Face', country: 'India', difficulty: 'Very Difficult', description: 'Technical route' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy monsoon season',
            winds: 'Strong above 7000m',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'East Kamet Glacier', length: '14 km', description: 'Main approach glacier' },
            { name: 'West Kamet Glacier', length: '10 km', description: 'Western drainage' },
            { name: 'Purbi Kamet Glacier', length: '8 km', description: 'Eastern system' }
        ],
        
        baseCamps: [
            { name: 'Kamet Base Camp', elevation: 4700, country: 'India', coordinates: [30.8833, 79.6000] }
        ],
        
        nearbyPeaks: [
            { name: 'Abi Gamin', elevation: 7355, coordinates: [30.9333, 79.5833] },
            { name: 'Mana', elevation: 7272, coordinates: [30.8833, 79.5167] },
            { name: 'Mukut Parbat', elevation: 7242, coordinates: [30.9167, 79.5667] }
        ],
        
        nearbyCities: [
            { name: 'Badrinath', coordinates: [30.7436, 79.4931], country: 'India', population: 800 },
            { name: 'Joshimath', coordinates: [30.5583, 79.5667], country: 'India', population: 15000 },
            { name: 'Rishikesh', coordinates: [30.0869, 78.2676], country: 'India', population: 100000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Rhododendrons (lower slopes)',
            'Junipers',
            'Himalayan herbs'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan tahr',
            'Blue sheep',
            'Musk deer',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: 'IMF regulated fees' },
            { label: 'Mountaineering Training', value: 'Popular for Indian courses' },
            { label: 'Trekking', value: 'Kamet-Abi Gamin trek' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Significant melt observed' },
            { label: 'Tibet Border Area', value: 'Access restrictions' }
        ],
        
        conservation: [
            { label: 'Nanda Devi Biosphere', value: 'Part of extended protection zone' },
            { label: 'Indo-Tibetan Border', value: 'Military presence for protection' }
        ],
        
        historicalImportance: [
            { label: 'Highest Climbed Until 1931', value: 'World altitude record at time of first ascent' },
            { label: 'British Exploration', value: 'Part of Golden Age of Himalayan climbing' },
            { label: 'Near Tibet', value: 'Border peak with significant history' },
            { label: 'Smythe\'s Triumph', value: 'Frank Smythe\'s major achievement' }
        ],
        
        records: [
            { record: 'Second Highest in Garhwal', value: '7,756m elevation' },
            { record: 'World Altitude Record', value: 'Highest summit 1931-1936' },
            { record: 'First 7500m Peak Climbed', value: 'Major altitude milestone' },
            { record: 'Border Peak', value: 'Near India-China border' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOUNTAINS_DATA_2;
}
