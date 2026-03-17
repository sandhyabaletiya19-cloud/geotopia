/* ============================================
   MOUNTAINS DATA - FILE 3 OF 10
   Mountains 21-30: Major Himalayan, Karakoram,
   Hindu Kush & Central Asian Peaks
   ============================================ */

const MOUNTAINS_DATA_3 = [
    // ========================================
    // #21 - KANJUT SAR
    // ========================================
    {
        id: 'kanjut-sar',
        name: 'Kanjut Sar',
        localNames: [
            { language: 'Burushaski', name: 'Kanjut Sar' },
            { language: 'Urdu', name: 'کنجوت سر' },
            { language: 'English', name: 'Peak of the Kanjut' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Hispar Muztagh',
        elevation: 7760,
        prominence: 1450,
        isolation: 12.5,
        coordinates: [36.1250, 75.4167],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny, uplift continuing'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 9, 1959',
                climbers: ['Carlo Pinelli', 'Guerrino De Francesch'],
                route: 'Southwest Ridge',
                expedition: 'Italian Expedition led by Guido Monzino'
            },
            totalAscents: 12,
            fatalities: 2,
            successRate: '20%',
            bestSeason: 'July-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Southwest Ridge', country: 'Pakistan', difficulty: 'Standard', description: 'Original route via Kanjut Glacier' },
                { name: 'West Face', country: 'Pakistan', difficulty: 'Extremely Difficult', description: 'Direct line attempt' },
                { name: 'North Ridge', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-8°C',
            snowfall: 'Heavy, frequent storms',
            winds: 'Strong, unpredictable',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Hispar Glacier', length: '61 km', description: 'One of longest glaciers in Karakoram' },
            { name: 'Kanjut Glacier', length: '18 km', description: 'Main approach glacier' },
            { name: 'Khani Basa Glacier', length: '12 km', description: 'East side drainage' }
        ],
        
        baseCamps: [
            { name: 'Kanjut Sar Base Camp', elevation: 4600, country: 'Pakistan', coordinates: [36.1000, 75.4333] }
        ],
        
        nearbyPeaks: [
            { name: 'Distaghil Sar', elevation: 7885, coordinates: [36.0833, 75.3333] },
            { name: 'Khunyang Chhish', elevation: 7823, coordinates: [36.1833, 75.6333] },
            { name: 'Pumari Chhish', elevation: 7492, coordinates: [36.1667, 75.5833] }
        ],
        
        nearbyCities: [
            { name: 'Nagar', coordinates: [36.1167, 74.9333], country: 'Pakistan', population: 5000 },
            { name: 'Gilgit', coordinates: [35.9208, 74.3144], country: 'Pakistan', population: 60000 }
        ],
        
        flora: [
            'Alpine lichens',
            'Sparse grasses',
            'Juniper (lower valleys)',
            'Willow scrub'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Marco Polo sheep',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,500 per climber' },
            { label: 'Remote Tourism', value: 'Limited adventure tourism' },
            { label: 'Hispar Trek', value: 'Part of Hispar-Biafo traverse' }
        ],
        
        environmentalIssues: [
            { label: 'Remote Access', value: 'Difficult environmental monitoring' },
            { label: 'Climate Change', value: 'Glacier changes observed' }
        ],
        
        conservation: [
            { label: 'Central Karakoram National Park', value: 'Protected since 1993' }
        ],
        
        historicalImportance: [
            { label: 'Italian Achievement', value: 'Climbed by Italian expedition' },
            { label: 'Hispar Muztagh', value: 'One of major peaks in the subrange' },
            { label: 'Rarely Attempted', value: 'Remote location limits expeditions' }
        ],
        
        records: [
            { record: 'Hispar Muztagh Peak', value: '7,760m elevation' },
            { record: 'Remote Location', value: 'One of least visited 7000ers' },
            { record: 'Italian First Ascent', value: 'Part of Italian Karakoram tradition' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #22 - SALTORO KANGRI
    // ========================================
    {
        id: 'saltoro-kangri',
        name: 'Saltoro Kangri',
        localNames: [
            { language: 'Balti', name: 'Saltoro Kangri' },
            { language: 'Urdu', name: 'سالتورو کانگری' },
            { language: 'English', name: 'Peak K10 (Survey)' }
        ],
        countries: [
            { name: 'India', code: 'IN' },
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Karakoram',
        subRange: 'Saltoro Mountains',
        elevation: 7742,
        prominence: 2160,
        isolation: 58,
        coordinates: [35.3900, 76.8500],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Karakoram orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 24, 1962',
                climbers: ['Yoshikazu Harada', 'T. Shidei', 'Capt. A.S. Cheema'],
                route: 'Southeast Ridge',
                expedition: 'Japanese-Indian Joint Expedition'
            },
            totalAscents: 5,
            fatalities: 0,
            successRate: '15%',
            bestSeason: 'July-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Southeast Ridge', country: 'India', difficulty: 'Standard', description: 'Original route' },
                { name: 'Southwest Face', country: 'India', difficulty: 'Very Difficult', description: 'Technical variation' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-6°C',
            snowfall: 'Very heavy',
            winds: 'Strong, exposed position',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Siachen Glacier', length: '76 km', description: 'Longest glacier in Karakoram' },
            { name: 'Saltoro Glacier', length: '30 km', description: 'Western drainage' },
            { name: 'Bilafond Glacier', length: '20 km', description: 'Eastern approach' }
        ],
        
        baseCamps: [
            { name: 'Saltoro Base Camp', elevation: 4800, country: 'India', coordinates: [35.3667, 76.8667] }
        ],
        
        nearbyPeaks: [
            { name: 'K12', elevation: 7428, coordinates: [35.3000, 76.9500] },
            { name: 'Ghent Kangri', elevation: 7401, coordinates: [35.2833, 77.0500] },
            { name: 'Sia Kangri', elevation: 7422, coordinates: [35.4167, 77.0333] }
        ],
        
        nearbyCities: [
            { name: 'Leh', coordinates: [34.1526, 77.5771], country: 'India', population: 30000 },
            { name: 'Skardu', coordinates: [35.2971, 75.6333], country: 'Pakistan', population: 15000 }
        ],
        
        flora: [
            'Sparse high-altitude vegetation',
            'Lichens',
            'Alpine mosses'
        ],
        
        fauna: [
            'Snow leopard',
            'Himalayan ibex',
            'Brown bear',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Military Significance', value: 'Siachen conflict area' },
            { label: 'Restricted Access', value: 'Limited civilian access' },
            { label: 'Strategic Location', value: 'India-Pakistan border region' }
        ],
        
        environmentalIssues: [
            { label: 'Military Activity', value: 'Environmental impact from Siachen conflict' },
            { label: 'Pollution', value: 'Waste from military operations' },
            { label: 'Climate Monitoring', value: 'Scientific access limited' }
        ],
        
        conservation: [
            { label: 'Proposed Peace Park', value: 'Siachen Peace Park suggested' },
            { label: 'Environmental Concerns', value: 'Calls for demilitarization' }
        ],
        
        historicalImportance: [
            { label: 'Survey Name K10', value: 'Tenth peak surveyed in Karakoram' },
            { label: 'Siachen Conflict', value: 'Strategic importance in India-Pakistan dispute' },
            { label: 'Highest Battlefield', value: 'Near world\'s highest battlefield' },
            { label: 'Joint First Ascent', value: 'Japanese-Indian cooperation' }
        ],
        
        records: [
            { record: 'Saltoro Range Highpoint', value: '7,742m elevation' },
            { record: 'Strategic Peak', value: 'Overlooks Siachen Glacier' },
            { record: 'Restricted Mountain', value: 'Limited access due to conflict' },
            { record: 'Joint Achievement', value: 'First Japanese-Indian 7000m summit' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #23 - GURLA MANDHATA
    // ========================================
    {
        id: 'gurla-mandhata',
        name: 'Gurla Mandhata',
        localNames: [
            { language: 'Sanskrit', name: 'Gurla Mandhata (गुर्ला मान्धाता)' },
            { language: 'Tibetan', name: 'Naimona\'nyi (གནའ་མོ་ནཱ་ཉི)' },
            { language: 'Chinese', name: '纳木那尼峰 (Nàmùnànípēng)' }
        ],
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Nalakankar Himal',
        elevation: 7728,
        prominence: 2788,
        isolation: 136,
        coordinates: [30.4333, 81.2833],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny, western section'
        },
        
        climbing: {
            firstAscent: {
                date: 'May 12, 1985',
                climbers: ['Japanese-Chinese Joint Expedition'],
                route: 'North Face',
                expedition: 'Joint Expedition of 13 climbers'
            },
            totalAscents: 25,
            fatalities: 3,
            successRate: '30%',
            bestSeason: 'May-June, September-October',
            difficulty: 'Difficult',
            routes: [
                { name: 'North Face', country: 'China', difficulty: 'Standard', description: 'Original route' },
                { name: 'Northwest Ridge', country: 'China', difficulty: 'Difficult', description: 'Alternative approach' },
                { name: 'Southeast Ridge', country: 'China', difficulty: 'Very Difficult', description: 'Technical route' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-42°C',
            summerHigh: '-5°C',
            snowfall: 'Moderate, dry climate',
            winds: 'Strong plateau winds',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Gurla Glacier', length: '12 km', description: 'North face glacier' },
            { name: 'Namo\'nani Glacier', length: '10 km', description: 'West side drainage' },
            { name: 'Southeast Glacier', length: '8 km', description: 'Southeast face' }
        ],
        
        baseCamps: [
            { name: 'Gurla Mandhata Base Camp', elevation: 5100, country: 'China', coordinates: [30.4667, 81.2667] }
        ],
        
        nearbyPeaks: [
            { name: 'Gurla Mandhata II', elevation: 7694, coordinates: [30.4167, 81.3000] },
            { name: 'Gurla Mandhata III', elevation: 7654, coordinates: [30.4000, 81.2500] }
        ],
        
        nearbyCities: [
            { name: 'Pulan', coordinates: [30.2833, 81.1500], country: 'China', population: 10000 },
            { name: 'Burang', coordinates: [30.2833, 81.1833], country: 'China', population: 8000 },
            { name: 'Taklakot', coordinates: [30.2833, 81.2167], country: 'China', population: 1000 }
        ],
        
        flora: [
            'Alpine steppe grasses',
            'Cushion plants',
            'Juniper scrub',
            'Seabuckthorn (valleys)'
        ],
        
        fauna: [
            'Tibetan antelope (chiru)',
            'Tibetan wild ass (kiang)',
            'Snow leopard',
            'Blue sheep',
            'Tibetan wolf'
        ],
        
        economicImportance: [
            { label: 'Pilgrimage Tourism', value: 'Near Mount Kailash circuit' },
            { label: 'Lake Manasarovar', value: 'Sacred lake nearby' },
            { label: 'Climbing Permits', value: 'Chinese mountaineering fees' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glacier retreat observed' },
            { label: 'Tourism Impact', value: 'Increasing pilgrimage traffic' }
        ],
        
        conservation: [
            { label: 'Kailash Sacred Landscape', value: 'Trans-boundary conservation initiative' },
            { label: 'Tibetan Plateau Protection', value: 'Ecological zone' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: 'Named after Rishi Mandhata from Hindu mythology' },
            { label: 'Sacred Mountain', value: 'Important in Hindu and Buddhist traditions' },
            { label: 'Near Mount Kailash', value: 'Part of sacred landscape' },
            { label: 'Lake Rakshastal', value: 'Demon lake mythology nearby' }
        ],
        
        records: [
            { record: 'Highest in Nalakankar Himal', value: '7,728m elevation' },
            { record: 'Near Kailash', value: 'Part of sacred region' },
            { record: 'Tibetan Highpoint', value: 'One of highest wholly in Tibet' },
            { record: 'Lake Views', value: 'Overlooks Manasarovar and Rakshastal' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #24 - JANNU (KUMBHAKARNA)
    // ========================================
    {
        id: 'jannu',
        name: 'Jannu',
        localNames: [
            { language: 'Limbu', name: 'Kumbhakarna (कुम्भकर्ण)' },
            { language: 'Nepali', name: 'जान्नु' },
            { language: 'Tibetan', name: 'Phoktanglungma' },
            { language: 'English', name: 'Throne of the Gods' }
        ],
        countries: [
            { name: 'Nepal', code: 'NP' }
        ],
        continent: 'Asia',
        mountainRange: 'Himalayas',
        subRange: 'Kangchenjunga Himal',
        elevation: 7711,
        prominence: 1036,
        isolation: 14,
        coordinates: [27.6817, 88.0456],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Himalayan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'April 28, 1962',
                climbers: ['Robert Paragot', 'Paul Keller', 'René Desmaison', 'Lionel Terray', 'Jean Ravier', 'Gyalzen Mitchu', 'Wangdi'],
                route: 'South Ridge',
                expedition: 'French Expedition led by Lionel Terray'
            },
            totalAscents: 40,
            fatalities: 8,
            successRate: '25%',
            bestSeason: 'April-May, October',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'South Ridge', country: 'Nepal', difficulty: 'Very Difficult', description: 'Original route' },
                { name: 'North Face', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Major technical achievement' },
                { name: 'East Ridge', country: 'Nepal', difficulty: 'Extremely Difficult', description: 'Challenging alternative' },
                { name: 'West Face', country: 'Nepal', difficulty: 'Exceptionally Difficult', description: 'Steep direct route' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-45°C',
            summerHigh: '-8°C',
            snowfall: 'Very heavy, monsoon influence',
            winds: 'Strong, exposed ridges',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Jannu Glacier', length: '15 km', description: 'Main glacier system' },
            { name: 'Yamatari Glacier', length: '10 km', description: 'South approach' },
            { name: 'Kumbhakarna Glacier', length: '12 km', description: 'East drainage' }
        ],
        
        baseCamps: [
            { name: 'Jannu Base Camp', elevation: 4700, country: 'Nepal', coordinates: [27.7000, 88.0333] },
            { name: 'Kumbhakarna BC', elevation: 4600, country: 'Nepal', coordinates: [27.6667, 88.0667] }
        ],
        
        nearbyPeaks: [
            { name: 'Kangchenjunga', elevation: 8586, coordinates: [27.7025, 88.1475] },
            { name: 'Yalung Kang', elevation: 8505, coordinates: [27.6989, 88.1194] },
            { name: 'Phole', elevation: 6645, coordinates: [27.6667, 88.0167] },
            { name: 'Sobithongie', elevation: 6670, coordinates: [27.6500, 88.0833] }
        ],
        
        nearbyCities: [
            { name: 'Taplejung', coordinates: [27.3511, 87.6681], country: 'Nepal', population: 5000 },
            { name: 'Ghunsa', coordinates: [27.6667, 87.9333], country: 'Nepal', population: 300 }
        ],
        
        flora: [
            'Rhododendron forests',
            'Alpine meadows',
            'Juniper scrub',
            'Primulas'
        ],
        
        fauna: [
            'Snow leopard',
            'Red panda',
            'Himalayan tahr',
            'Musk deer',
            'Blood pheasant'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$2,500 per climber' },
            { label: 'Technical Climbing', value: 'Attracts expert mountaineers' },
            { label: 'Kangchenjunga Trek', value: 'Part of trekking region' }
        ],
        
        environmentalIssues: [
            { label: 'Limited Impact', value: 'Few expeditions mean less pollution' },
            { label: 'Climate Change', value: 'Glacier retreat observed' }
        ],
        
        conservation: [
            { label: 'Kangchenjunga Conservation Area', value: 'Part of protected zone' },
            { label: 'Community Forest', value: 'Local management' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'Kumbhakarna - demon from Ramayana epic' },
            { label: 'French Achievement', value: 'Major French mountaineering triumph' },
            { label: 'North Face', value: 'One of great Himalayan walls' },
            { label: 'Throne Shape', value: 'Distinctive summit appearance' }
        ],
        
        records: [
            { record: 'Most Aesthetic Peak', value: 'Considered one of most beautiful mountains' },
            { record: 'Technical Difficulty', value: 'Among hardest 7000ers' },
            { record: 'North Face Challenge', value: 'Premier big wall in Himalayas' },
            { record: 'French Glory', value: 'Terray\'s last major first ascent' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #25 - TIRICH MIR
    // ========================================
    {
        id: 'tirich-mir',
        name: 'Tirich Mir',
        localNames: [
            { language: 'Khowar', name: 'Terichmir' },
            { language: 'Urdu', name: 'تریچ میر' },
            { language: 'English', name: 'King of Darkness' }
        ],
        countries: [
            { name: 'Pakistan', code: 'PK' }
        ],
        continent: 'Asia',
        mountainRange: 'Hindu Kush',
        subRange: 'Tirich Mir Range',
        elevation: 7708,
        prominence: 3905,
        isolation: 223,
        coordinates: [36.2528, 71.8394],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Hindu Kush orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 21, 1950',
                climbers: ['Arne Næss', 'P. Kvernberg', 'H. Berg', 'Tony Streather'],
                route: 'Northwest Ridge',
                expedition: 'Norwegian Expedition'
            },
            totalAscents: 50,
            fatalities: 10,
            successRate: '35%',
            bestSeason: 'June-August',
            difficulty: 'Difficult',
            routes: [
                { name: 'Northwest Ridge', country: 'Pakistan', difficulty: 'Standard', description: 'Original Norwegian route' },
                { name: 'South Face', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Technical variation' },
                { name: 'West Ridge', country: 'Pakistan', difficulty: 'Difficult', description: 'Alternative approach' },
                { name: 'Northeast Ridge', country: 'Pakistan', difficulty: 'Very Difficult', description: 'Long ridge traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy, monsoon influenced',
            winds: 'Moderate to strong',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Tirich Glacier', length: '28 km', description: 'Main glacier system' },
            { name: 'South Barum Glacier', length: '15 km', description: 'Southern approach' },
            { name: 'North Barum Glacier', length: '12 km', description: 'Northern drainage' }
        ],
        
        baseCamps: [
            { name: 'Tirich Mir Base Camp', elevation: 4500, country: 'Pakistan', coordinates: [36.2333, 71.8667] },
            { name: 'Shagrom Camp', elevation: 4000, country: 'Pakistan', coordinates: [36.2000, 71.9000] }
        ],
        
        nearbyPeaks: [
            { name: 'Noshaq', elevation: 7492, coordinates: [36.4167, 71.8333] },
            { name: 'Tirich Mir East', elevation: 7692, coordinates: [36.2500, 71.8667] },
            { name: 'Tirich Mir West IV', elevation: 7338, coordinates: [36.2667, 71.8167] },
            { name: 'Istor-o-Nal', elevation: 7403, coordinates: [36.3833, 71.8833] }
        ],
        
        nearbyCities: [
            { name: 'Chitral', coordinates: [35.8500, 71.7833], country: 'Pakistan', population: 50000 },
            { name: 'Dir', coordinates: [35.2000, 71.8833], country: 'Pakistan', population: 35000 },
            { name: 'Mastuj', coordinates: [36.2833, 71.8333], country: 'Pakistan', population: 5000 }
        ],
        
        flora: [
            'Cedar forests (Cedrus deodara)',
            'Oak woodlands',
            'Juniper scrub',
            'Alpine meadows',
            'Wild roses'
        ],
        
        fauna: [
            'Snow leopard',
            'Markhor (national animal)',
            'Himalayan ibex',
            'Brown bear',
            'Wolf',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$3,000 per climber' },
            { label: 'Chitral Tourism', value: 'Major attraction for region' },
            { label: 'Kalash Valley', value: 'Cultural tourism nearby' }
        ],
        
        environmentalIssues: [
            { label: 'Deforestation', value: 'Logging pressure in valleys' },
            { label: 'Climate Change', value: 'Glacier changes observed' },
            { label: 'Overgrazing', value: 'Pastoral pressure' }
        ],
        
        conservation: [
            { label: 'Chitral Gol National Park', value: 'Nearby protected area' },
            { label: 'Markhor Conservation', value: 'Important habitat' },
            { label: 'Snow Leopard Range', value: 'Key conservation area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"King of Darkness" or "Mountain of Tirich"' },
            { label: 'Hindu Kush Monarch', value: 'Highest peak in Hindu Kush range' },
            { label: 'Norwegian First', value: 'First major Norwegian Himalayan success' },
            { label: 'Kalash Culture', value: 'Sacred to local Kalash people' },
            { label: 'Alexander\'s Route', value: 'Near ancient invasion routes' }
        ],
        
        records: [
            { record: 'Highest Peak in Hindu Kush', value: '7,708m elevation' },
            { record: 'Norwegian Achievement', value: 'First 7000er for Norway' },
            { record: 'Highest Peak Entirely in Pakistan', value: 'Wholly within Pakistan borders' },
            { record: 'Remote Giant', value: 'Isolated from other 7000ers' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #26 - KONGUR TAGH
    // ========================================
    {
        id: 'kongur-tagh',
        name: 'Kongur Tagh',
        localNames: [
            { language: 'Uyghur', name: 'Kongur Tagh (كونگۇر تاغ)' },
            { language: 'Chinese', name: '公格尔峰 (Gōnggé\'ěr Fēng)' },
            { language: 'Kyrgyz', name: 'Kongur-Tube' },
            { language: 'English', name: 'Brown Mountain' }
        ],
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Kunlun',
        subRange: 'Kongur Shan',
        elevation: 7649,
        prominence: 3585,
        isolation: 272,
        coordinates: [38.6000, 75.3333],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '45-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Pamir-Kunlun orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 12, 1981',
                climbers: ['Chris Bonington', 'Al Rouse', 'Pete Boardman', 'Joe Tasker'],
                route: 'Southwest Ridge',
                expedition: 'British Expedition'
            },
            totalAscents: 20,
            fatalities: 5,
            successRate: '25%',
            bestSeason: 'July-August',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'Southwest Ridge', country: 'China', difficulty: 'Standard', description: 'Original British route' },
                { name: 'North Face', country: 'China', difficulty: 'Very Difficult', description: 'More technical variation' },
                { name: 'South Ridge', country: 'China', difficulty: 'Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-50°C',
            summerHigh: '-8°C',
            snowfall: 'Moderate to heavy',
            winds: 'Strong, high altitude jet stream influence',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Kongur Glacier', length: '22 km', description: 'Main glacier system' },
            { name: 'Kara-Kol Glacier', length: '15 km', description: 'Northern drainage' },
            { name: 'Southwest Glacier', length: '12 km', description: 'Approach glacier' }
        ],
        
        baseCamps: [
            { name: 'Kongur Base Camp', elevation: 4400, country: 'China', coordinates: [38.5667, 75.3167] }
        ],
        
        nearbyPeaks: [
            { name: 'Kongur Tiube', elevation: 7530, coordinates: [38.6167, 75.3500] },
            { name: 'Muztagh Ata', elevation: 7509, coordinates: [38.2833, 75.1167] },
            { name: 'Chakragil', elevation: 6760, coordinates: [38.5333, 75.4000] }
        ],
        
        nearbyCities: [
            { name: 'Kashgar', coordinates: [39.4547, 75.9797], country: 'China', population: 500000 },
            { name: 'Tashkurgan', coordinates: [37.7722, 75.2286], country: 'China', population: 10000 },
            { name: 'Karakol (Lake)', coordinates: [38.4500, 75.1667], country: 'China', population: 500 }
        ],
        
        flora: [
            'Alpine steppe vegetation',
            'Sparse grasses',
            'Cushion plants',
            'Mountain sorrel'
        ],
        
        fauna: [
            'Marco Polo sheep',
            'Tibetan wild ass',
            'Snow leopard',
            'Brown bear',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: 'Chinese mountaineering fees' },
            { label: 'Karakoram Highway', value: 'Tourist attraction along highway' },
            { label: 'Silk Road Tourism', value: 'Part of historic route' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glacier recession documented' },
            { label: 'Remote Monitoring', value: 'Limited scientific access' }
        ],
        
        conservation: [
            { label: 'Xinjiang Nature Reserves', value: 'Part of protected mountain system' },
            { label: 'Marco Polo Sheep Habitat', value: 'Important wildlife area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Brown Mountain" in Uyghur' },
            { label: 'British First Ascent', value: 'Bonington\'s team achievement' },
            { label: 'Silk Road Peak', value: 'Visible from ancient trade routes' },
            { label: 'Kongur Massif', value: 'Dominates eastern Pamir' }
        ],
        
        records: [
            { record: 'Highest Peak in Eastern Pamir', value: '7,649m elevation' },
            { record: 'Kunlun Range Highpoint', value: 'Highest in Kunlun Mountains' },
            { record: 'British Achievement', value: 'First ascent by legendary team' },
            { record: 'Isolation Record', value: 'Over 270km from higher peak' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #27 - MUZTAGH ATA
    // ========================================
    {
        id: 'muztagh-ata',
        name: 'Muztagh Ata',
        localNames: [
            { language: 'Uyghur', name: 'Muztagata (مۇزتاغ ئاتا)' },
            { language: 'Chinese', name: '慕士塔格峰 (Mùshìtǎgé Fēng)' },
            { language: 'Kyrgyz', name: 'Muztag-Ata' },
            { language: 'English', name: 'Father of Ice Mountains' }
        ],
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Kunlun',
        subRange: 'Muztagh Ata Range',
        elevation: 7509,
        prominence: 2735,
        isolation: 132,
        coordinates: [38.2833, 75.1167],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '45-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Pamir-Kunlun orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 17, 1956',
                climbers: ['E.A. Beletsky', 'A.V. Bleshunov', 'V.N. Petrov', 'K.K. Kuzmin', 'B.A. Rzhevsky', 'L.F. Trusov'],
                route: 'East Ridge',
                expedition: 'Soviet-Chinese Joint Expedition'
            },
            totalAscents: 300,
            fatalities: 10,
            successRate: '60%',
            bestSeason: 'July-August',
            difficulty: 'Moderate',
            routes: [
                { name: 'West Ridge/Normal Route', country: 'China', difficulty: 'Standard', description: 'Easiest route, ski descent possible' },
                { name: 'East Ridge', country: 'China', difficulty: 'Moderate', description: 'Original ascent route' },
                { name: 'South Face', country: 'China', difficulty: 'Difficult', description: 'More technical option' }
            ]
        },
        
        climate: {
            summitTemperature: '-28°C average',
            winterLow: '-48°C',
            summerHigh: '-8°C',
            snowfall: 'Moderate, continental climate',
            winds: 'Can be severe',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Muztagh Ata Glacier', length: '25 km', description: 'Main glacier' },
            { name: 'Koxkar Glacier', length: '15 km', description: 'Western drainage' },
            { name: 'Yambulak Glacier', length: '12 km', description: 'Eastern system' }
        ],
        
        baseCamps: [
            { name: 'Muztagh Ata Base Camp', elevation: 4400, country: 'China', coordinates: [38.2500, 75.0833] },
            { name: 'Camp 1', elevation: 5500, country: 'China', coordinates: [38.2667, 75.1000] }
        ],
        
        nearbyPeaks: [
            { name: 'Kongur Tagh', elevation: 7649, coordinates: [38.6000, 75.3333] },
            { name: 'Kongur Tiube', elevation: 7530, coordinates: [38.6167, 75.3500] },
            { name: 'Karatash', elevation: 6525, coordinates: [38.3333, 75.2167] }
        ],
        
        nearbyCities: [
            { name: 'Kashgar', coordinates: [39.4547, 75.9797], country: 'China', population: 500000 },
            { name: 'Tashkurgan', coordinates: [37.7722, 75.2286], country: 'China', population: 10000 },
            { name: 'Subash', coordinates: [38.3000, 75.0500], country: 'China', population: 500 }
        ],
        
        flora: [
            'Alpine steppe',
            'Sparse grasses',
            'Cushion plants',
            'Edelweiss (lower slopes)'
        ],
        
        fauna: [
            'Marco Polo sheep',
            'Tibetan wild ass (kiang)',
            'Snow leopard',
            'Marmots',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Tourism', value: 'Popular with international climbers' },
            { label: 'Ski Mountaineering', value: 'One of highest ski descents' },
            { label: 'Karakoram Highway', value: 'Tourist attraction' },
            { label: 'Training Peak', value: 'Acclimatization for higher peaks' }
        ],
        
        environmentalIssues: [
            { label: 'Increasing Tourism', value: 'More visitors each year' },
            { label: 'Climate Change', value: 'Glacier retreat observed' }
        ],
        
        conservation: [
            { label: 'Xinjiang Protected Area', value: 'Part of mountain conservation' },
            { label: 'Karakol Lake', value: 'Scenic protected area nearby' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Father of Ice Mountains" in Uyghur' },
            { label: 'Sven Hedin', value: 'First modern exploration in 1890s' },
            { label: 'Silk Road Landmark', value: 'Visible from ancient trade routes' },
            { label: 'Soviet-Chinese Cooperation', value: 'Symbol of 1950s alliance' },
            { label: 'Ski History', value: 'Early ski mountaineering attempts' }
        ],
        
        records: [
            { record: 'Father of Ice Mountains', value: '7,509m elevation' },
            { record: 'Easiest 7500m Peak', value: 'High success rate' },
            { record: 'Ski Descent', value: 'Popular for ski mountaineering' },
            { record: 'Soviet-Chinese First', value: 'Joint expedition achievement' },
            { record: 'Highest Skiable Peak', value: 'Complete ski descents possible' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #28 - ISMOIL SOMONI PEAK
    // ========================================
    {
        id: 'ismoil-somoni',
        name: 'Ismoil Somoni Peak',
        localNames: [
            { language: 'Tajik', name: 'Қуллаи Исмоили Сомонӣ' },
            { language: 'Russian', name: 'Пик Исмоила Сомони' },
            { language: 'Historical', name: 'Communism Peak (Soviet era)' },
            { language: 'Historical', name: 'Stalin Peak (until 1962)' }
        ],
        countries: [
            { name: 'Tajikistan', code: 'TJ' }
        ],
        continent: 'Asia',
        mountainRange: 'Pamir',
        subRange: 'Academy of Sciences Range',
        elevation: 7495,
        prominence: 3402,
        isolation: 228,
        coordinates: [38.9400, 72.0200],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '40-50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Pamir orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 3, 1933',
                climbers: ['Yevgeniy Abalakov'],
                route: 'East Face',
                expedition: 'Soviet Expedition'
            },
            totalAscents: 300,
            fatalities: 15,
            successRate: '50%',
            bestSeason: 'July-August',
            difficulty: 'Difficult',
            routes: [
                { name: 'Borodkin Spur', country: 'Tajikistan', difficulty: 'Standard', description: 'Most popular route' },
                { name: 'East Face (Abalakov Route)', country: 'Tajikistan', difficulty: 'Difficult', description: 'Original route' },
                { name: 'Southeast Ridge', country: 'Tajikistan', difficulty: 'Very Difficult', description: 'Technical option' },
                { name: 'North Face', country: 'Tajikistan', difficulty: 'Extremely Difficult', description: 'Major technical challenge' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-50°C',
            summerHigh: '-10°C',
            snowfall: 'Heavy, frequent storms',
            winds: 'Strong, high altitude jet stream',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'Fedchenko Glacier', length: '77 km', description: 'Longest glacier outside polar regions' },
            { name: 'Fortambek Glacier', length: '25 km', description: 'North side approach' },
            { name: 'Garmo Glacier', length: '30 km', description: 'Western drainage' }
        ],
        
        baseCamps: [
            { name: 'Moskvina Base Camp', elevation: 4200, country: 'Tajikistan', coordinates: [38.9000, 72.0500] },
            { name: 'Fortambek Base Camp', elevation: 3800, country: 'Tajikistan', coordinates: [38.9333, 72.0833] }
        ],
        
        nearbyPeaks: [
            { name: 'Peak Korzhenevskaya', elevation: 7105, coordinates: [38.9833, 72.0083] },
            { name: 'Peak Garmo', elevation: 6595, coordinates: [38.8333, 72.0333] },
            { name: 'Peak Revolution', elevation: 6940, coordinates: [38.9500, 72.0500] }
        ],
        
        nearbyCities: [
            { name: 'Dushanbe', coordinates: [38.5600, 68.7739], country: 'Tajikistan', population: 800000 },
            { name: 'Khorog', coordinates: [37.4917, 71.5128], country: 'Tajikistan', population: 30000 },
            { name: 'Jirgital', coordinates: [39.2667, 69.5167], country: 'Tajikistan', population: 5000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Juniper scrub',
            'Wild onions',
            'Edelweiss'
        ],
        
        fauna: [
            'Marco Polo sheep',
            'Snow leopard',
            'Himalayan brown bear',
            'Ibex',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Climbing Tourism', value: 'Major destination for mountaineers' },
            { label: 'Soviet Legacy', value: 'Historic climbing center' },
            { label: 'Helicopter Access', value: 'Commercial flights to base camp' },
            { label: 'National Symbol', value: 'Important for Tajik identity' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Monitoring', value: 'Fedchenko retreat studied' },
            { label: 'Climate Change', value: 'Significant warming observed' }
        ],
        
        conservation: [
            { label: 'Tajik National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Pamir Protected Area', value: 'Part of mountain conservation' }
        ],
        
        historicalImportance: [
            { label: 'Name History', value: 'Stalin Peak → Communism Peak → Ismoil Somoni (1998)' },
            { label: 'Soviet Achievement', value: 'Symbol of Soviet mountaineering' },
            { label: 'Ismoil Somoni', value: 'Named after founder of Tajik nation (10th century)' },
            { label: 'Abalakov\'s Triumph', value: 'Solo summit by legendary climber' },
            { label: 'Snow Leopard Award', value: 'Part of Soviet mountaineering honor' }
        ],
        
        records: [
            { record: 'Highest Peak in Tajikistan', value: '7,495m elevation' },
            { record: 'Highest in Former Soviet Union', value: 'Highest in ex-USSR' },
            { record: 'Fedchenko Glacier', value: 'Longest non-polar glacier (77km)' },
            { record: 'Snow Leopard Peak', value: 'One of five peaks for Soviet award' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #29 - JENGISH CHOKUSU (VICTORY PEAK)
    // ========================================
    {
        id: 'jengish-chokusu',
        name: 'Jengish Chokusu',
        localNames: [
            { language: 'Kyrgyz', name: 'Жеңиш чокусу (Victory Peak)' },
            { language: 'Russian', name: 'Пик Победы (Pik Pobedy)' },
            { language: 'Chinese', name: '托木尔峰 (Tuōmù\'ěr Fēng)' },
            { language: 'Uyghur', name: 'تومۇر چوققىسى (Tomur Peak)' }
        ],
        countries: [
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Tian Shan',
        subRange: 'Kakshaal Too',
        elevation: 7439,
        prominence: 4148,
        isolation: 584,
        coordinates: [42.0333, 80.1333],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '300-500 million years (renewed uplift)',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Tian Shan orogeny, reactivated uplift'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 19, 1956',
                climbers: ['Vitaliy Abalakov', 'V. Kuzmin', 'M. Alimov', 'N. Gusak', 'A. Gogolev', 'P. Potanin', 'E. Ryspaev', 'U. Usenko'],
                route: 'West Ridge',
                expedition: 'Soviet Expedition'
            },
            totalAscents: 150,
            fatalities: 30,
            successRate: '25%',
            bestSeason: 'July-August',
            difficulty: 'Extremely Difficult',
            routes: [
                { name: 'West Ridge (Abalakov Route)', country: 'Kyrgyzstan', difficulty: 'Very Difficult', description: 'Original route' },
                { name: 'North Face', country: 'Kyrgyzstan', difficulty: 'Extremely Difficult', description: 'Steep ice and snow' },
                { name: 'East Ridge (from China)', country: 'China', difficulty: 'Very Difficult', description: 'Tomur approach' },
                { name: 'Southwest Face', country: 'Kyrgyzstan', difficulty: 'Extremely Difficult', description: 'Major technical challenge' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-60°C',
            summerHigh: '-15°C',
            snowfall: 'Extreme, frequent storms',
            winds: 'Severe, notorious weather',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'South Inylchek Glacier', length: '60.5 km', description: 'One of largest Asian glaciers' },
            { name: 'North Inylchek Glacier', length: '38 km', description: 'Major northern glacier' },
            { name: 'Tomur Glacier', length: '35 km', description: 'Chinese side' },
            { name: 'Zvezdochka Glacier', length: '15 km', description: 'Summit glacier' }
        ],
        
        baseCamps: [
            { name: 'South Inylchek Base Camp', elevation: 4000, country: 'Kyrgyzstan', coordinates: [42.0000, 79.9667] },
            { name: 'Camp 1', elevation: 4400, country: 'Kyrgyzstan', coordinates: [42.0167, 80.0167] }
        ],
        
        nearbyPeaks: [
            { name: 'Khan Tengri', elevation: 7010, coordinates: [42.2133, 80.1736] },
            { name: 'Peak Voyennykh Topografov', elevation: 6873, coordinates: [42.0500, 80.0833] },
            { name: 'Peak Nansen', elevation: 5697, coordinates: [41.9833, 80.0167] }
        ],
        
        nearbyCities: [
            { name: 'Karakol', coordinates: [42.4907, 78.3936], country: 'Kyrgyzstan', population: 70000 },
            { name: 'Bishkek', coordinates: [42.8746, 74.5698], country: 'Kyrgyzstan', population: 1000000 },
            { name: 'Aksu', coordinates: [41.1231, 80.2644], country: 'China', population: 500000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Juniper scrub',
            'Tian Shan spruce (lower)'
        ],
        
        fauna: [
            'Snow leopard',
            'Marco Polo sheep',
            'Tian Shan brown bear',
            'Ibex',
            'Bearded vulture'
        ],
        
        economicImportance: [
            { label: 'Mountaineering Tourism', value: 'Premier Central Asian destination' },
            { label: 'Helicopter Access', value: 'Commercial services to base' },
            { label: 'Snow Leopard Award', value: 'Key peak for Soviet honor' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Major glacier retreat documented' },
            { label: 'Lake Merzbacher', value: 'Glacial lake outburst flood risk' }
        ],
        
        conservation: [
            { label: 'Sary-Chelek Nature Reserve', value: 'Regional protected area' },
            { label: 'Border Area', value: 'Limited access, some protection' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Victory Peak" - named after WWII victory (1945)' },
            { label: 'Soviet Achievement', value: 'Symbol of Soviet mountaineering prowess' },
            { label: 'Deadliest Peak', value: 'Highest fatality rate in Central Asia' },
            { label: 'Tomur/Pobedy', value: 'Different names reflect China-USSR history' },
            { label: 'Weather Challenge', value: 'Notorious for sudden deadly storms' }
        ],
        
        records: [
            { record: 'Highest Peak in Tian Shan', value: '7,439m elevation' },
            { record: 'Highest Peak in Kyrgyzstan', value: 'Shared with China' },
            { record: 'Northernmost 7000er', value: 'Most northern high peak' },
            { record: 'Snow Leopard Peak', value: 'One of five for Soviet award' },
            { record: 'Deadliest in Central Asia', value: 'High fatality rate' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #30 - KHAN TENGRI
    // ========================================
    {
        id: 'khan-tengri',
        name: 'Khan Tengri',
        localNames: [
            { language: 'Kazakh', name: 'Қантау / Қан Тәңірі' },
            { language: 'Kyrgyz', name: 'Кан-Теңир' },
            { language: 'Russian', name: 'Хан-Тенгри' },
            { language: 'English', name: 'Lord of the Spirits / Blood Lord' }
        ],
        countries: [
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Tian Shan',
        subRange: 'Tengri Tag',
        elevation: 7010,
        prominence: 2260,
        isolation: 26,
        coordinates: [42.2133, 80.1736],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1520637836993-a071674a2472?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1520637836993-a071674a2472?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain',
            age: '300-500 million years (renewed uplift)',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Tian Shan orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 11, 1931',
                climbers: ['Mikhail Pogrebetsky', 'Franz Zauberer', 'Boris Tyurin'],
                route: 'West Ridge',
                expedition: 'Ukrainian Expedition'
            },
            totalAscents: 500,
            fatalities: 25,
            successRate: '45%',
            bestSeason: 'July-August',
            difficulty: 'Difficult',
            routes: [
                { name: 'North Route (Kazakhstan)', country: 'Kazakhstan', difficulty: 'Standard', description: 'Most popular route' },
                { name: 'South Route (Kyrgyzstan)', country: 'Kyrgyzstan', difficulty: 'Standard', description: 'Alternative approach' },
                { name: 'West Ridge', country: 'Kazakhstan', difficulty: 'Difficult', description: 'Original route' },
                { name: 'Marble Rib', country: 'Kazakhstan', difficulty: 'Very Difficult', description: 'Technical variation' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-55°C',
            summerHigh: '-12°C',
            snowfall: 'Heavy, frequent storms',
            winds: 'Strong, unpredictable weather',
            deathZone: 'Not applicable (below 8000m)'
        },
        
        glaciers: [
            { name: 'South Inylchek Glacier', length: '60.5 km', description: 'Major approach glacier' },
            { name: 'North Inylchek Glacier', length: '38 km', description: 'Kazakhstan approach' },
            { name: 'Khan Tengri Glacier', length: '12 km', description: 'Summit glacier system' }
        ],
        
        baseCamps: [
            { name: 'North Base Camp (Kazakhstan)', elevation: 4000, country: 'Kazakhstan', coordinates: [42.2500, 80.1333] },
            { name: 'South Base Camp (Kyrgyzstan)', elevation: 4000, country: 'Kyrgyzstan', coordinates: [42.1833, 80.1833] }
        ],
        
        nearbyPeaks: [
            { name: 'Jengish Chokusu', elevation: 7439, coordinates: [42.0333, 80.1333] },
            { name: 'Peak Chapaev', elevation: 6371, coordinates: [42.1833, 80.0667] },
            { name: 'Peak Gorky', elevation: 6050, coordinates: [42.2167, 80.1167] }
        ],
        
        nearbyCities: [
            { name: 'Almaty', coordinates: [43.2220, 76.8512], country: 'Kazakhstan', population: 1900000 },
            { name: 'Karakol', coordinates: [42.4907, 78.3936], country: 'Kyrgyzstan', population: 70000 },
            { name: 'Bishkek', coordinates: [42.8746, 74.5698], country: 'Kyrgyzstan', population: 1000000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Mountain grasses',
            'Tian Shan spruce (lower elevations)'
        ],
        
        fauna: [
            'Snow leopard',
            'Marco Polo sheep',
            'Ibex',
            'Marmot',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Commercial Climbing', value: 'Major mountaineering destination' },
            { label: 'Helicopter Services', value: 'Access from both countries' },
            { label: 'Snow Leopard Award', value: 'One of five required peaks' },
            { label: 'Tourism Revenue', value: 'Significant for local economies' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glacier recession documented' },
            { label: 'Overcrowding', value: 'Popular peak seeing more traffic' }
        ],
        
        conservation: [
            { label: 'Ile-Alatau National Park', value: 'Kazakhstan side protection' },
            { label: 'Trans-boundary Reserve', value: 'Proposed protected area' }
        ],
        
        historicalImportance: [
            { label: 'Name Meaning', value: '"Lord of the Spirits" - ancient Tengri religion' },
            { label: 'Blood Lord', value: 'Red glow at sunset gives mountain blood color' },
            { label: 'Marble Peak', value: 'Summit made of marble (calcite)' },
            { label: 'Soviet Legacy', value: 'Central to Soviet mountaineering culture' },
            { label: 'Snow Leopard', value: 'Key peak for prestigious Soviet award' }
        ],
        
        records: [
            { record: 'World\'s Most Northern 7000er', value: '7,010m at 42°N latitude' },
            { record: 'Most Beautiful Peak', value: 'Considered most aesthetic in Central Asia' },
            { record: 'Marble Summit', value: 'Summit pyramid is calcite marble' },
            { record: 'Sunset Blood', value: 'Famous red glow at sunset' },
            { record: 'Three-Country Peak', value: 'Borders Kazakhstan, Kyrgyzstan, China' }
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
    module.exports = MOUNTAINS_DATA_3;
}
