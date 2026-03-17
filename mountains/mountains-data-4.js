/* ============================================
   MOUNTAINS DATA - FILE 4 OF 10
   Mountains 31-40: Seven Summits (6 of 7)
   & Major Alps Peaks
   ============================================ */

const MOUNTAINS_DATA_4 = [
    // ========================================
    // #31 - ACONCAGUA (Seven Summits - South America)
    // ========================================
    {
        id: 'aconcagua',
        name: 'Aconcagua',
        localNames: [
            { language: 'Quechua', name: 'Ackon Cahuak (Stone Sentinel)' },
            { language: 'Mapuche', name: 'Aконкагуа' },
            { language: 'Spanish', name: 'Centinela de Piedra' }
        ],
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Principal Cordillera',
        elevation: 6961,
        prominence: 6961,
        isolation: 16536,
        coordinates: [-32.6532, -70.0109],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&q=80',
        
        formation: {
            type: 'Volcanic (extinct)',
            age: '8-10 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Andean orogeny, subduction zone volcanism'
        },
        
        climbing: {
            firstAscent: {
                date: 'January 14, 1897',
                climbers: ['Matthias Zurbriggen'],
                route: 'North Face (Normal Route)',
                expedition: 'Fitzgerald Expedition'
            },
            totalAscents: 5000,
            fatalities: 135,
            successRate: '60%',
            bestSeason: 'November-March (Southern summer)',
            difficulty: 'Moderate',
            routes: [
                { name: 'Normal Route (North Face)', country: 'Argentina', difficulty: 'Standard', description: 'Most popular, non-technical' },
                { name: 'Polish Glacier Route', country: 'Argentina', difficulty: 'Difficult', description: 'Technical ice climbing' },
                { name: 'Polish Glacier Direct', country: 'Argentina', difficulty: 'Very Difficult', description: 'Direct variation' },
                { name: 'South Face', country: 'Argentina', difficulty: 'Extremely Difficult', description: 'Major technical challenge' }
            ]
        },
        
        climate: {
            summitTemperature: '-20°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Moderate to heavy',
            winds: 'Viento Blanco - dangerous white winds up to 200 km/h',
            deathZone: 'Not applicable (below 8000m, but altitude effects significant)'
        },
        
        glaciers: [
            { name: 'Polish Glacier', length: '5 km', description: 'Northeast face glacier' },
            { name: 'Güssfeldt Glacier', length: '4 km', description: 'East side' },
            { name: 'Horcones Inferior Glacier', length: '10 km', description: 'South face glacier' },
            { name: 'Horcones Superior Glacier', length: '8 km', description: 'Main glacier system' }
        ],
        
        baseCamps: [
            { name: 'Plaza de Mulas', elevation: 4370, country: 'Argentina', coordinates: [-32.6833, -70.0667] },
            { name: 'Plaza Argentina', elevation: 4200, country: 'Argentina', coordinates: [-32.6500, -70.0000] },
            { name: 'Confluencia', elevation: 3380, country: 'Argentina', coordinates: [-32.7167, -70.0333] }
        ],
        
        nearbyPeaks: [
            { name: 'Cerro Ameghino', elevation: 5883, coordinates: [-32.6667, -70.0333] },
            { name: 'Cerro Cuerno', elevation: 5462, coordinates: [-32.6833, -70.0500] },
            { name: 'Cerro Catedral', elevation: 5335, coordinates: [-32.7000, -70.0667] },
            { name: 'Cerro Almacenes', elevation: 5100, coordinates: [-32.7167, -70.0833] }
        ],
        
        nearbyCities: [
            { name: 'Mendoza', coordinates: [-32.8895, -68.8458], country: 'Argentina', population: 1000000 },
            { name: 'Puente del Inca', coordinates: [-32.8239, -69.9089], country: 'Argentina', population: 500 },
            { name: 'Los Penitentes', coordinates: [-32.8333, -69.8500], country: 'Argentina', population: 200 },
            { name: 'Santiago', coordinates: [-33.4489, -70.6693], country: 'Chile', population: 6000000 }
        ],
        
        flora: [
            'Yareta cushion plants',
            'High Andean grasses',
            'Llareta',
            'Sparse lichens (high altitude)'
        ],
        
        fauna: [
            'Andean condor',
            'Guanaco',
            'Puma',
            'Red fox (culpeo)',
            'Vizcacha',
            'Mountain caracara'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$800-1,200 depending on season' },
            { label: 'Tourism Revenue', value: '4,000+ climbers annually' },
            { label: 'Mendoza Economy', value: 'Major contributor to regional tourism' },
            { label: 'Seven Summits', value: 'Essential for Seven Summits challenge' }
        ],
        
        environmentalIssues: [
            { label: 'Waste Management', value: 'Mandatory garbage deposits' },
            { label: 'Human Waste', value: 'New regulations for waste removal' },
            { label: 'Overcrowding', value: 'High season crowding at camps' },
            { label: 'Climate Change', value: 'Glacier retreat documented' }
        ],
        
        conservation: [
            { label: 'Aconcagua Provincial Park', value: 'Established 1983' },
            { label: 'Permit System', value: 'Regulated access since 1990s' },
            { label: 'Ranger Stations', value: 'Staffed throughout climbing season' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'Possibly from Quechua "Ackon Cahuak" (Stone Sentinel)' },
            { label: 'Inca Site', value: 'Mummified remains found at 5,300m (1985)' },
            { label: 'First Ascent', value: 'Swiss guide Matthias Zurbriggen solo' },
            { label: 'Highest Americas', value: 'Highest peak in Western and Southern Hemispheres' },
            { label: 'Young Summiter', value: 'Tyler Armstrong - youngest at 9 years (2013)' }
        ],
        
        records: [
            { record: 'Highest Peak in Americas', value: '6,961m elevation' },
            { record: 'Highest in Western Hemisphere', value: 'Tallest outside Asia' },
            { record: 'Highest in Southern Hemisphere', value: 'South of equator record' },
            { record: 'Seven Summits', value: 'South American continental high point' },
            { record: 'Most Climbed High Peak', value: 'After Kilimanjaro, most popular 6000er' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #32 - DENALI (Seven Summits - North America)
    // ========================================
    {
        id: 'denali',
        name: 'Denali',
        localNames: [
            { language: 'Koyukon Athabascan', name: 'Denali (The Great One)' },
            { language: 'Historical', name: 'Mount McKinley (1917-2015)' },
            { language: 'Russian', name: 'Bolshaya Gora (Big Mountain)' }
        ],
        countries: [
            { name: 'USA', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Alaska Range',
        subRange: 'Central Alaska Range',
        elevation: 6190,
        prominence: 6140,
        isolation: 7450,
        coordinates: [63.0695, -151.0074],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
        
        formation: {
            type: 'Granite pluton',
            age: '56 million years',
            tectonicPlates: ['Pacific Plate', 'North American Plate'],
            process: 'Subduction and granite intrusion, uplift continuing'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 7, 1913',
                climbers: ['Hudson Stuck', 'Harry Karstens', 'Walter Harper', 'Robert Tatum'],
                route: 'Muldrow Glacier Route',
                expedition: 'First complete ascent (Harper first to summit)'
            },
            totalAscents: 6000,
            fatalities: 123,
            successRate: '50%',
            bestSeason: 'May-July',
            difficulty: 'Difficult',
            routes: [
                { name: 'West Buttress', country: 'USA', difficulty: 'Standard', description: 'Most popular route, 90% of climbers' },
                { name: 'Muldrow Glacier', country: 'USA', difficulty: 'Difficult', description: 'Original route, longer approach' },
                { name: 'West Rib', country: 'USA', difficulty: 'Very Difficult', description: 'Technical alpine route' },
                { name: 'Cassin Ridge', country: 'USA', difficulty: 'Extremely Difficult', description: 'Premier technical climb' },
                { name: 'Slovak Direct', country: 'USA', difficulty: 'Exceptionally Difficult', description: 'South face direct' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-60°C',
            summerHigh: '-15°C',
            snowfall: 'Extreme, 2m+ per year at high camps',
            winds: 'Severe arctic storms',
            deathZone: 'Not applicable (but severe altitude effects due to latitude)'
        },
        
        glaciers: [
            { name: 'Kahiltna Glacier', length: '71 km', description: 'Longest in Alaska Range' },
            { name: 'Muldrow Glacier', length: '51 km', description: 'Northeast side' },
            { name: 'Ruth Glacier', length: '61 km', description: 'Southeast side' },
            { name: 'Peters Glacier', length: '27 km', description: 'Northwest flank' },
            { name: 'Traleika Glacier', length: '18 km', description: 'East side' }
        ],
        
        baseCamps: [
            { name: 'Kahiltna Base Camp', elevation: 2200, country: 'USA', coordinates: [63.0833, -151.1667] },
            { name: 'Camp 1 (Ski Hill)', elevation: 2400, country: 'USA', coordinates: [63.0750, -151.1500] },
            { name: 'Camp 2 (11,000ft)', elevation: 3353, country: 'USA', coordinates: [63.0667, -151.1167] },
            { name: 'High Camp (17,200ft)', elevation: 5243, country: 'USA', coordinates: [63.0600, -151.0333] }
        ],
        
        nearbyPeaks: [
            { name: 'Denali South Peak', elevation: 5934, coordinates: [63.0639, -151.0075] },
            { name: 'Mount Foraker', elevation: 5304, coordinates: [62.9614, -151.3992] },
            { name: 'Mount Hunter', elevation: 4442, coordinates: [62.9500, -151.0917] },
            { name: 'Mount Huntington', elevation: 3731, coordinates: [62.9667, -150.9333] }
        ],
        
        nearbyCities: [
            { name: 'Talkeetna', coordinates: [62.3239, -150.1061], country: 'USA', population: 900 },
            { name: 'Anchorage', coordinates: [61.2181, -149.9003], country: 'USA', population: 290000 },
            { name: 'Fairbanks', coordinates: [64.8378, -147.7164], country: 'USA', population: 32000 }
        ],
        
        flora: [
            'Dwarf willow',
            'Arctic tundra vegetation',
            'Fireweed',
            'Blueberries (lower elevations)',
            'Lichens and mosses'
        ],
        
        fauna: [
            'Grizzly bear',
            'Dall sheep',
            'Caribou',
            'Gray wolf',
            'Golden eagle',
            'Moose (lower elevations)'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: '$400 per person' },
            { label: 'Air Taxi Services', value: '$500-600 round trip to base camp' },
            { label: 'Tourism', value: 'Major Alaska attraction' },
            { label: 'Talkeetna Economy', value: 'Town depends on climbing industry' }
        ],
        
        environmentalIssues: [
            { label: 'Human Waste', value: 'Clean Mountain Cans required' },
            { label: 'Climate Change', value: 'Route conditions changing' },
            { label: 'Crevasse Danger', value: 'Increasing with warming' }
        ],
        
        conservation: [
            { label: 'Denali National Park', value: 'Established 1917 (as McKinley)' },
            { label: 'Wilderness Area', value: '6 million acres protected' },
            { label: 'UNESCO Biosphere', value: 'Part of reserve network' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: '"The Great One" in Koyukon Athabascan language' },
            { label: 'Name Change', value: 'McKinley renamed to Denali in 2015' },
            { label: 'First Attempt', value: 'Frederick Cook\'s disputed 1906 claim' },
            { label: 'Sourdough Expedition', value: '1910 - first summit of North Peak' },
            { label: 'Solo Winter', value: 'Naomi Uemura - 1984 (died on descent)' }
        ],
        
        records: [
            { record: 'Highest Peak in North America', value: '6,190m elevation' },
            { record: 'Largest Base-to-Peak Rise', value: '5,500m from lowlands nearby' },
            { record: 'Coldest Major Mountain', value: 'Due to high latitude (63°N)' },
            { record: 'Seven Summits', value: 'North American continental high point' },
            { record: 'First Winter Ascent', value: 'Art Davidson, Ray Genet, Dave Johnston - 1967' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #33 - MOUNT KILIMANJARO (Seven Summits - Africa)
    // ========================================
    {
        id: 'kilimanjaro',
        name: 'Mount Kilimanjaro',
        localNames: [
            { language: 'Swahili', name: 'Kilima Njaro (Shining Mountain)' },
            { language: 'Chagga', name: 'Kipoo' },
            { language: 'Maasai', name: 'Ol Doinyo Oibor (White Mountain)' }
        ],
        countries: [
            { name: 'Tanzania', code: 'TZ' }
        ],
        continent: 'Africa',
        mountainRange: 'Eastern Rift Mountains',
        subRange: 'Kilimanjaro Massif',
        elevation: 5895,
        prominence: 5885,
        isolation: 5510,
        coordinates: [-3.0674, 37.3556],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (dormant)',
            age: '1-2 million years',
            tectonicPlates: ['African Plate'],
            process: 'East African Rift System volcanism'
        },
        
        climbing: {
            firstAscent: {
                date: 'October 6, 1889',
                climbers: ['Hans Meyer', 'Ludwig Purtscheller', 'Yohani Kinyala Lauwo'],
                route: 'Marangu Route',
                expedition: 'German Expedition (third attempt for Meyer)'
            },
            totalAscents: 50000,
            fatalities: 10,
            successRate: '65%',
            bestSeason: 'January-March, June-October',
            difficulty: 'Moderate (high altitude trekking)',
            routes: [
                { name: 'Marangu Route (Coca-Cola)', country: 'Tanzania', difficulty: 'Standard', description: 'Only route with huts, 5-6 days' },
                { name: 'Machame Route (Whiskey)', country: 'Tanzania', difficulty: 'Moderate', description: 'Most popular, scenic, 6-7 days' },
                { name: 'Lemosho Route', country: 'Tanzania', difficulty: 'Moderate', description: 'Longer, better acclimatization, 7-8 days' },
                { name: 'Rongai Route', country: 'Tanzania', difficulty: 'Moderate', description: 'North side, drier, 6-7 days' },
                { name: 'Umbwe Route', country: 'Tanzania', difficulty: 'Difficult', description: 'Steepest, fastest, 5-6 days' },
                { name: 'Western Breach', country: 'Tanzania', difficulty: 'Very Difficult', description: 'Technical scrambling, rockfall risk' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-25°C',
            summerHigh: '0°C',
            snowfall: 'Light, decreasing annually',
            winds: 'Moderate to strong',
            deathZone: 'Not applicable (but altitude sickness common)'
        },
        
        glaciers: [
            { name: 'Northern Icefield', length: '1.5 km', description: 'Rapidly retreating' },
            { name: 'Southern Icefield', length: '2 km', description: 'Largest remaining' },
            { name: 'Furtwängler Glacier', length: '0.5 km', description: 'Near summit' },
            { name: 'Eastern Ice Field', length: '1 km', description: 'East of summit' }
        ],
        
        baseCamps: [
            { name: 'Barafu Camp', elevation: 4673, country: 'Tanzania', coordinates: [-3.0833, 37.3667] },
            { name: 'Kibo Hut', elevation: 4703, country: 'Tanzania', coordinates: [-3.0750, 37.3833] },
            { name: 'Karanga Camp', elevation: 3995, country: 'Tanzania', coordinates: [-3.0917, 37.3500] }
        ],
        
        nearbyPeaks: [
            { name: 'Mawenzi', elevation: 5149, coordinates: [-3.0956, 37.4553] },
            { name: 'Shira', elevation: 3962, coordinates: [-3.0500, 37.2167] },
            { name: 'Mount Meru', elevation: 4566, coordinates: [-3.2500, 36.7500] }
        ],
        
        nearbyCities: [
            { name: 'Moshi', coordinates: [-3.3500, 37.3333], country: 'Tanzania', population: 200000 },
            { name: 'Arusha', coordinates: [-3.3869, 36.6830], country: 'Tanzania', population: 400000 },
            { name: 'Nairobi', coordinates: [-1.2921, 36.8219], country: 'Kenya', population: 4000000 }
        ],
        
        flora: [
            'Giant groundsels (Dendrosenecio)',
            'Giant lobelias',
            'Erica (heather zone)',
            'Rainforest (lower slopes)',
            'Alpine desert vegetation'
        ],
        
        fauna: [
            'Elephant (forest zone)',
            'Buffalo',
            'Blue monkey',
            'Colobus monkey',
            'Kilimanjaro shrew',
            'Lammergeier'
        ],
        
        economicImportance: [
            { label: 'Park Fees', value: '$70-100 per day' },
            { label: 'Tourism Revenue', value: '$50 million+ annually' },
            { label: 'Employment', value: '30,000+ guides and porters' },
            { label: 'Tanzania GDP', value: 'Significant contributor' }
        ],
        
        environmentalIssues: [
            { label: 'Ice Loss', value: '85% of ice lost since 1912' },
            { label: 'Predicted Ice-Free', value: '2030-2040 at current rate' },
            { label: 'Deforestation', value: 'Lower slopes pressure' },
            { label: 'Fire Risk', value: 'Increasing due to climate change' }
        ],
        
        conservation: [
            { label: 'Kilimanjaro National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Forest Reserve', value: 'Surrounding buffer zone' },
            { label: 'Porter Welfare', value: 'KPAP certification program' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: '"Shining Mountain" or "White Mountain"' },
            { label: 'European Discovery', value: 'Johannes Rebmann, 1848 (snow reported)' },
            { label: 'Ice Core Studies', value: '11,000 years of climate data' },
            { label: 'Hemingway', value: '"The Snows of Kilimanjaro" (1936)' },
            { label: 'Uhuru Peak', value: 'Named for Tanzanian independence (1961)' }
        ],
        
        records: [
            { record: 'Highest Peak in Africa', value: '5,895m elevation' },
            { record: 'Highest Free-Standing Mountain', value: 'Rises 4,900m from plain' },
            { record: 'Seven Summits', value: 'African continental high point' },
            { record: 'Most Climbed Major Peak', value: '50,000+ attempts per year' },
            { record: 'Oldest Summiter', value: 'Anne Lorimor - 89 years (2019)' },
            { record: 'Youngest Summiter', value: 'Coaltan Tanner - 6 years (2018)' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #34 - MOUNT ELBRUS (Seven Summits - Europe)
    // ========================================
    {
        id: 'elbrus',
        name: 'Mount Elbrus',
        localNames: [
            { language: 'Russian', name: 'Эльбрус (Elbrus)' },
            { language: 'Karachay-Balkar', name: 'Минги-Тау (Eternal Mountain)' },
            { language: 'Georgian', name: 'იალბუზი (Ialbuz)' },
            { language: 'Persian', name: 'Alborz' }
        ],
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Europe',
        mountainRange: 'Caucasus',
        subRange: 'Western Caucasus',
        elevation: 5642,
        prominence: 4741,
        isolation: 2473,
        coordinates: [43.3499, 42.4453],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1548320113-b1955e2c893f?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1548320113-b1955e2c893f?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (dormant)',
            age: '2.5 million years',
            tectonicPlates: ['Eurasian Plate', 'Arabian Plate'],
            process: 'Caucasus orogeny, volcanic activity'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 22, 1874',
                climbers: ['Florence Crauford Grove', 'Frederick Gardner', 'Horace Walker', 'Peter Knubel', 'Akhia Sottaiev'],
                route: 'North Route',
                expedition: 'British Expedition (East summit reached 1829 by Killar Kashirov)'
            },
            totalAscents: 10000,
            fatalities: 30,
            successRate: '70%',
            bestSeason: 'June-September',
            difficulty: 'Moderate',
            routes: [
                { name: 'South Route (Normal)', country: 'Russia', difficulty: 'Standard', description: 'Cable car assisted, most popular' },
                { name: 'North Route', country: 'Russia', difficulty: 'Moderate', description: 'Traditional route, longer approach' },
                { name: 'East Route', country: 'Russia', difficulty: 'Difficult', description: 'Less crowded, more technical' },
                { name: 'West Route', country: 'Russia', difficulty: 'Very Difficult', description: 'Rarely climbed' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy, storms common',
            winds: 'Strong, sudden weather changes',
            deathZone: 'Not applicable (but altitude effects significant)'
        },
        
        glaciers: [
            { name: 'Azau Glacier', length: '7 km', description: 'South side main glacier' },
            { name: 'Irik Glacier', length: '9 km', description: 'East side' },
            { name: 'Kyukyurtlyu Glacier', length: '8 km', description: 'West side' },
            { name: 'Ulluchiran Glacier', length: '6 km', description: 'North side' }
        ],
        
        baseCamps: [
            { name: 'Barrels (Bochki)', elevation: 3800, country: 'Russia', coordinates: [43.3333, 42.4500] },
            { name: 'Garabashi Station', elevation: 3847, country: 'Russia', coordinates: [43.3350, 42.4517] },
            { name: 'Priut 11', elevation: 4050, country: 'Russia', coordinates: [43.3417, 42.4417] },
            { name: 'High Camp', elevation: 5300, country: 'Russia', coordinates: [43.3500, 42.4400] }
        ],
        
        nearbyPeaks: [
            { name: 'Elbrus East', elevation: 5621, coordinates: [43.3542, 42.4539] },
            { name: 'Cheget', elevation: 3769, coordinates: [43.2500, 42.5167] },
            { name: 'Donguz-Orun', elevation: 4454, coordinates: [43.2833, 42.5333] },
            { name: 'Kogutay', elevation: 3819, coordinates: [43.3167, 42.5167] }
        ],
        
        nearbyCities: [
            { name: 'Terskol', coordinates: [43.2575, 42.5094], country: 'Russia', population: 2000 },
            { name: 'Nalchik', coordinates: [43.4833, 43.6167], country: 'Russia', population: 240000 },
            { name: 'Mineralnye Vody', coordinates: [44.2167, 43.1333], country: 'Russia', population: 76000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Rhododendron caucasicum',
            'Caucasian birch',
            'Wild grasses',
            'Lichens'
        ],
        
        fauna: [
            'Caucasian tur (mountain goat)',
            'Chamois',
            'Brown bear',
            'Wolf',
            'Golden eagle',
            'Bearded vulture'
        ],
        
        economicImportance: [
            { label: 'Climbing Permits', value: 'Minimal fees' },
            { label: 'Cable Car', value: 'Year-round tourism infrastructure' },
            { label: 'Ski Resort', value: 'Major Russian ski destination' },
            { label: 'Seven Summits', value: 'Draws international climbers' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Significant loss documented' },
            { label: 'Infrastructure Impact', value: 'Resort development' },
            { label: 'Waste Management', value: 'Increasing climber numbers' }
        ],
        
        conservation: [
            { label: 'Prielbrusye National Park', value: 'Protected area since 1986' },
            { label: 'UNESCO Biosphere', value: 'Part of Caucasus reserve' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'Possibly from Persian "Alborz" (high mountain)' },
            { label: 'WWII Battle', value: 'German flag briefly on summit (1942)' },
            { label: 'Soviet Record', value: '400 simultaneous climbers (1967)' },
            { label: 'Europe Debate', value: 'Whether Caucasus is in Europe contested' },
            { label: 'Greek Mythology', value: 'Associated with Prometheus legend' }
        ],
        
        records: [
            { record: 'Highest Peak in Europe', value: '5,642m elevation' },
            { record: 'Seven Summits', value: 'European continental high point' },
            { record: 'Highest Volcano in Europe', value: 'Dormant stratovolcano' },
            { record: 'Two Summits', value: 'West (5642m) and East (5621m)' },
            { record: 'Highest Ski Lift', value: 'Garabashi - 3,847m' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #35 - MOUNT VINSON (Seven Summits - Antarctica)
    // ========================================
    {
        id: 'vinson',
        name: 'Mount Vinson',
        localNames: [
            { language: 'English', name: 'Vinson Massif' },
            { language: 'Named After', name: 'Carl Vinson (US Congressman)' }
        ],
        countries: [
            { name: 'Antarctica', code: 'AQ' }
        ],
        continent: 'Antarctica',
        mountainRange: 'Ellsworth Mountains',
        subRange: 'Sentinel Range',
        elevation: 4892,
        prominence: 4892,
        isolation: 5765,
        coordinates: [-78.5254, -85.6172],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&q=80',
        
        formation: {
            type: 'Fault-block mountain',
            age: '175-190 million years',
            tectonicPlates: ['Antarctic Plate'],
            process: 'Gondwana breakup, glacial erosion'
        },
        
        climbing: {
            firstAscent: {
                date: 'December 17, 1966',
                climbers: ['Nicholas Clinch', 'Barry Corbet', 'John Evans', 'Eiichi Fukushima', 'Charles Hollister', 'William Long', 'Brian Marts', 'Peter Schoening', 'Samuel Silverstein', 'Richard Wahlstrom'],
                route: 'Normal Route (Northwest Face)',
                expedition: 'American Antarctic Mountaineering Expedition'
            },
            totalAscents: 1500,
            fatalities: 0,
            successRate: '95%',
            bestSeason: 'November-January (Antarctic summer)',
            difficulty: 'Moderate',
            routes: [
                { name: 'Normal Route (Northwest Face)', country: 'Antarctica', difficulty: 'Standard', description: 'Only commonly climbed route' },
                { name: 'West Face', country: 'Antarctica', difficulty: 'Difficult', description: 'Steeper variation' },
                { name: 'East Face', country: 'Antarctica', difficulty: 'Very Difficult', description: 'Rarely attempted' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-70°C',
            summerHigh: '-20°C',
            snowfall: 'Light (extreme cold limits precipitation)',
            winds: 'Severe katabatic winds',
            deathZone: 'Not applicable (but extreme cold is major hazard)'
        },
        
        glaciers: [
            { name: 'Nimitz Glacier', length: '40 km', description: 'West side' },
            { name: 'Crosswell Glacier', length: '25 km', description: 'East flank' },
            { name: 'Donnellan Glacier', length: '20 km', description: 'South drainage' },
            { name: 'Hammer Glacier', length: '15 km', description: 'North side' }
        ],
        
        baseCamps: [
            { name: 'Vinson Base Camp', elevation: 2134, country: 'Antarctica', coordinates: [-78.4667, -85.6167] },
            { name: 'Low Camp', elevation: 2774, country: 'Antarctica', coordinates: [-78.5000, -85.6000] },
            { name: 'High Camp', elevation: 3810, country: 'Antarctica', coordinates: [-78.5167, -85.6000] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Tyree', elevation: 4852, coordinates: [-78.4000, -85.8667] },
            { name: 'Mount Shinn', elevation: 4661, coordinates: [-78.4833, -85.8333] },
            { name: 'Mount Gardner', elevation: 4587, coordinates: [-78.4667, -85.9333] },
            { name: 'Mount Epperly', elevation: 4359, coordinates: [-78.5333, -85.5167] }
        ],
        
        nearbyCities: [
            { name: 'Union Glacier Camp', coordinates: [-79.7667, -82.8833], country: 'Antarctica', population: 100 },
            { name: 'Amundsen-Scott Station (South Pole)', coordinates: [-90.0000, 0.0000], country: 'Antarctica', population: 50 },
            { name: 'Punta Arenas', coordinates: [-53.1638, -70.9171], country: 'Chile', population: 130000 }
        ],
        
        flora: [
            'No vascular plants',
            'Lichens (extremely limited)',
            'Mosses (extremely limited)'
        ],
        
        fauna: [
            'No terrestrial fauna at summit',
            'Skuas (occasional)',
            'Coastal areas: penguins, seals (distant)'
        ],
        
        economicImportance: [
            { label: 'Expedition Cost', value: '$40,000-50,000 per person' },
            { label: 'Operator Monopoly', value: 'Antarctic Logistics & Expeditions' },
            { label: 'Seven Summits', value: 'Essential for challenge completion' },
            { label: 'Adventure Tourism', value: 'Growing sector' }
        ],
        
        environmentalIssues: [
            { label: 'Minimal Impact', value: 'Very limited human presence' },
            { label: 'Waste Removal', value: 'All waste must be removed' },
            { label: 'Climate Change', value: 'Ice sheet stability concerns' }
        ],
        
        conservation: [
            { label: 'Antarctic Treaty System', value: 'International protection since 1959' },
            { label: 'Protocol on Environmental Protection', value: 'Mining banned' },
            { label: 'No Territorial Claims', value: 'International zone' }
        ],
        
        historicalImportance: [
            { label: 'Named After', value: 'Carl Vinson, US Congressman, Antarctic supporter' },
            { label: 'Discovery', value: 'First seen by US Navy aircraft (1958)' },
            { label: 'Seven Summits', value: 'Added when challenge formalized' },
            { label: 'Remote Wilderness', value: 'One of Earth\'s most pristine areas' }
        ],
        
        records: [
            { record: 'Highest Peak in Antarctica', value: '4,892m elevation' },
            { record: 'Seven Summits', value: 'Antarctic continental high point' },
            { record: 'Most Remote High Peak', value: 'Furthest from human habitation' },
            { record: 'Most Expensive to Climb', value: '$40,000+ per expedition' },
            { record: 'Zero Fatalities', value: 'No deaths in climbing history' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #36 - PUNCAK JAYA / CARSTENSZ PYRAMID (Seven Summits - Oceania)
    // ========================================
    {
        id: 'puncak-jaya',
        name: 'Puncak Jaya',
        localNames: [
            { language: 'Indonesian', name: 'Puncak Jaya (Victory Peak)' },
            { language: 'Dutch', name: 'Carstensz Pyramide' },
            { language: 'Amungme', name: 'Nemangkawi' },
            { language: 'Historical', name: 'Carstensz Pyramid' }
        ],
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Oceania',
        mountainRange: 'Sudirman Range',
        subRange: 'Central Highlands',
        elevation: 4884,
        prominence: 4884,
        isolation: 5185,
        coordinates: [-4.0833, 137.1833],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1920&q=80',
        
        formation: {
            type: 'Limestone/Dolostone',
            age: '10-12 million years',
            tectonicPlates: ['Australian Plate', 'Pacific Plate'],
            process: 'Island arc collision, uplift of ancient seabed'
        },
        
        climbing: {
            firstAscent: {
                date: 'February 13, 1962',
                climbers: ['Heinrich Harrer', 'Bert Huizenga', 'Russell Kippax', 'Albert Huizenga'],
                route: 'Normal Route',
                expedition: 'Austrian-Dutch Expedition'
            },
            totalAscents: 1500,
            fatalities: 5,
            successRate: '85%',
            bestSeason: 'Year-round (dry season May-November best)',
            difficulty: 'Difficult (technical rock climbing)',
            routes: [
                { name: 'Normal Route (Harrer Route)', country: 'Indonesia', difficulty: 'Standard', description: 'Technical rock climbing, fixed ropes' },
                { name: 'American Direct', country: 'Indonesia', difficulty: 'Very Difficult', description: 'Steeper direct line' },
                { name: 'East Ridge', country: 'Indonesia', difficulty: 'Difficult', description: 'Alternative approach' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-5°C',
            summerHigh: '10°C',
            snowfall: 'Occasional, equatorial glacier nearby',
            winds: 'Moderate, rain more common',
            deathZone: 'Not applicable (low altitude)'
        },
        
        glaciers: [
            { name: 'Carstensz Glacier', length: '1 km', description: 'Rapidly retreating' },
            { name: 'Meren Glacier', length: '0.5 km', description: 'Nearly gone' },
            { name: 'Northwall Firn', length: '0.5 km', description: 'Remnant ice' }
        ],
        
        baseCamps: [
            { name: 'Base Camp (Lake Camp)', elevation: 4330, country: 'Indonesia', coordinates: [-4.0833, 137.1500] },
            { name: 'New Zealand Pass', elevation: 4650, country: 'Indonesia', coordinates: [-4.0833, 137.1667] }
        ],
        
        nearbyPeaks: [
            { name: 'Puncak Mandala', elevation: 4760, coordinates: [-4.7500, 140.3333] },
            { name: 'Puncak Trikora', elevation: 4750, coordinates: [-4.2667, 138.7500] },
            { name: 'Ngga Pulu', elevation: 4862, coordinates: [-4.0833, 137.1667] },
            { name: 'Sumantri', elevation: 4870, coordinates: [-4.0833, 137.2000] }
        ],
        
        nearbyCities: [
            { name: 'Timika', coordinates: [-4.5333, 136.8833], country: 'Indonesia', population: 50000 },
            { name: 'Jayapura', coordinates: [-2.5333, 140.7167], country: 'Indonesia', population: 300000 },
            { name: 'Wamena', coordinates: [-4.0833, 138.9500], country: 'Indonesia', population: 30000 }
        ],
        
        flora: [
            'Tropical alpine vegetation',
            'Tree ferns',
            'Moss forests',
            'Pandanus',
            'Orchids'
        ],
        
        fauna: [
            'Tree kangaroo',
            'Cassowary',
            'Cuscus',
            'Birds of paradise',
            'Long-beaked echidna'
        ],
        
        economicImportance: [
            { label: 'Expedition Cost', value: '$15,000-25,000' },
            { label: 'Grasberg Mine', value: 'World\'s largest gold mine nearby' },
            { label: 'Tribal Tourism', value: 'Cultural experiences' },
            { label: 'Access Challenges', value: 'Significant logistics costs' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Loss', value: 'Only equatorial glaciers, nearly gone' },
            { label: 'Mining Impact', value: 'Grasberg mine environmental damage' },
            { label: 'Deforestation', value: 'Logging and mining' }
        ],
        
        conservation: [
            { label: 'Lorentz National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Protected Area', value: 'Part of larger conservation zone' },
            { label: 'Indigenous Rights', value: 'Amungme and Kamoro territories' }
        ],
        
        historicalImportance: [
            { label: 'Named After', value: 'Jan Carstensz, Dutch explorer (1623)' },
            { label: 'First Sighting', value: 'Europeans doubted equatorial snow' },
            { label: 'Heinrich Harrer', value: 'Famous "Seven Years in Tibet" author' },
            { label: 'Seven Summits Debate', value: 'Alternative to Kosciuszko for Oceania' },
            { label: 'Political Issues', value: 'Papua independence movement' }
        ],
        
        records: [
            { record: 'Highest Peak in Oceania', value: '4,884m elevation' },
            { record: 'Highest Island Peak', value: 'Tallest on any island' },
            { record: 'Seven Summits', value: 'Oceania high point (Messner list)' },
            { record: 'Only Technical Seven Summit', value: 'Requires rock climbing' },
            { record: 'Equatorial Ice', value: 'Rare tropical glaciers' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: true,
        eightThousander: false
    },

    // ========================================
    // #37 - MONT BLANC (Alps)
    // ========================================
    {
        id: 'mont-blanc',
        name: 'Mont Blanc',
        localNames: [
            { language: 'French', name: 'Mont Blanc (White Mountain)' },
            { language: 'Italian', name: 'Monte Bianco' },
            { language: 'Arpitan', name: 'Mont Blanc' }
        ],
        countries: [
            { name: 'France', code: 'FR' },
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Graian Alps',
        elevation: 4808,
        prominence: 4695,
        isolation: 2812,
        coordinates: [45.8326, 6.8652],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80',
        
        formation: {
            type: 'Granite massif',
            age: '300-340 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Alpine orogeny, granite intrusion and uplift'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 8, 1786',
                climbers: ['Jacques Balmat', 'Michel-Gabriel Paccard'],
                route: 'Goûter Route',
                expedition: 'First high-altitude summit in history'
            },
            totalAscents: 30000,
            fatalities: 100,
            successRate: '50%',
            bestSeason: 'June-September',
            difficulty: 'Difficult',
            routes: [
                { name: 'Goûter Route (Normal Route)', country: 'France', difficulty: 'Standard', description: 'Most popular, Grand Couloir danger' },
                { name: 'Three Monts Route', country: 'France', difficulty: 'Difficult', description: 'Traverse of Mont Maudit, Mont Blanc du Tacul' },
                { name: 'Peuterey Integral', country: 'Italy', difficulty: 'Extremely Difficult', description: 'Classic long ridge traverse' },
                { name: 'Brenva Spur', country: 'Italy', difficulty: 'Very Difficult', description: 'Historic route, serious mixed climbing' },
                { name: 'Innominata Ridge', country: 'Italy', difficulty: 'Extremely Difficult', description: 'Major technical undertaking' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Very heavy',
            winds: 'Strong, sudden storms',
            deathZone: 'Not applicable (but altitude effects)'
        },
        
        glaciers: [
            { name: 'Mer de Glace', length: '12 km', description: 'Largest in Alps (France)' },
            { name: 'Bossons Glacier', length: '7.5 km', description: 'Descends to 1400m' },
            { name: 'Taconnaz Glacier', length: '4 km', description: 'North side' },
            { name: 'Miage Glacier', length: '10 km', description: 'Italian side' }
        ],
        
        baseCamps: [
            { name: 'Goûter Hut', elevation: 3817, country: 'France', coordinates: [45.8500, 6.8333] },
            { name: 'Cosmiques Hut', elevation: 3613, country: 'France', coordinates: [45.8750, 6.8917] },
            { name: 'Tête Rousse Hut', elevation: 3167, country: 'France', coordinates: [45.8583, 6.8250] },
            { name: 'Gonella Hut', elevation: 3071, country: 'Italy', coordinates: [45.8000, 6.8500] }
        ],
        
        nearbyPeaks: [
            { name: 'Mont Maudit', elevation: 4465, coordinates: [45.8500, 6.8667] },
            { name: 'Mont Blanc du Tacul', elevation: 4248, coordinates: [45.8617, 6.8883] },
            { name: 'Aiguille du Midi', elevation: 3842, coordinates: [45.8792, 6.8875] },
            { name: 'Grandes Jorasses', elevation: 4208, coordinates: [45.8683, 6.9833] },
            { name: 'Aiguille Verte', elevation: 4122, coordinates: [45.9383, 6.9650] }
        ],
        
        nearbyCities: [
            { name: 'Chamonix', coordinates: [45.9237, 6.8694], country: 'France', population: 9000 },
            { name: 'Courmayeur', coordinates: [45.7958, 6.9708], country: 'Italy', population: 3000 },
            { name: 'Geneva', coordinates: [46.2044, 6.1432], country: 'Switzerland', population: 200000 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Gentians',
            'Rhododendrons',
            'Larch and pine forests (lower)'
        ],
        
        fauna: [
            'Chamois',
            'Alpine ibex',
            'Marmot',
            'Golden eagle',
            'Bearded vulture (recently returned)'
        ],
        
        economicImportance: [
            { label: 'Tourism Revenue', value: 'Major contributor to local economy' },
            { label: 'Ski Industry', value: 'Year-round skiing on glaciers' },
            { label: 'Guides', value: 'Compagnie des Guides since 1821' },
            { label: 'Tunnel', value: 'Mont Blanc Tunnel connects France/Italy' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Too many climbers, quotas proposed' },
            { label: 'Glacier Retreat', value: 'Mer de Glace shrinking dramatically' },
            { label: 'Rockfall', value: 'Grand Couloir increasingly dangerous' },
            { label: 'Rescue Costs', value: '100+ rescues per year' }
        ],
        
        conservation: [
            { label: 'Mont Blanc Natural Reserve', value: 'French side protection' },
            { label: 'Mont Blanc Tunnel Restrictions', value: 'Pollution controls' },
            { label: 'Hut Reservation System', value: 'Managing climber numbers' }
        ],
        
        historicalImportance: [
            { label: 'Birth of Alpinism', value: 'First major summit started mountaineering' },
            { label: 'De Saussure Prize', value: 'Offered reward for first ascent' },
            { label: 'First Ascent', value: 'August 8, 1786 - beginning of alpinism' },
            { label: 'Golden Age', value: 'Central to 1850s-1865 alpine exploration' },
            { label: 'Tragedy', value: 'Many early deaths shaped safety culture' }
        ],
        
        records: [
            { record: 'Highest Peak in Alps', value: '4,808m elevation' },
            { record: 'Highest in Western Europe', value: 'If Elbrus excluded from Europe' },
            { record: 'Birth of Mountaineering', value: '1786 first ascent' },
            { record: 'Most Climbed 4000er', value: '30,000+ attempts per year' },
            { record: 'Most Deadly 4000er', value: '~100 deaths per year' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #38 - MONTE ROSA (Alps)
    // ========================================
    {
        id: 'monte-rosa',
        name: 'Monte Rosa',
        localNames: [
            { language: 'Italian', name: 'Monte Rosa' },
            { language: 'German', name: 'Dufourspitze' },
            { language: 'French', name: 'Pointe Dufour' },
            { language: 'Walser', name: 'Gornerhorn' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' },
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps',
        elevation: 4634,
        prominence: 2165,
        isolation: 66,
        coordinates: [45.9369, 7.8667],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&q=80',
        
        formation: {
            type: 'Metamorphic rock (gneiss)',
            age: '40-50 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Alpine orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 1, 1855',
                climbers: ['Charles Hudson', 'John Birkbeck', 'Christopher Smyth', 'James Grenville Smyth', 'Edward Stephenson', 'Ulrich Lauener', 'Johannes Zumtaugwald', 'Matthäus Zumtaugwald'],
                route: 'West Ridge',
                expedition: 'British team with Swiss guides'
            },
            totalAscents: 2000,
            fatalities: 15,
            successRate: '70%',
            bestSeason: 'June-September',
            difficulty: 'Difficult',
            routes: [
                { name: 'Normal Route (West Ridge)', country: 'Switzerland', difficulty: 'Standard', description: 'From Monte Rosa Hut' },
                { name: 'Marinelli Couloir', country: 'Italy', difficulty: 'Very Difficult', description: 'East face route' },
                { name: 'Cresta Signal', country: 'Switzerland', difficulty: 'Difficult', description: 'Ridge traverse' },
                { name: 'Cresta Rey', country: 'Italy', difficulty: 'Very Difficult', description: 'South face route' }
            ]
        },
        
        climate: {
            summitTemperature: '-18°C average',
            winterLow: '-35°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy',
            winds: 'Strong',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Gorner Glacier', length: '14 km', description: 'Second largest in Alps' },
            { name: 'Monte Rosa Glacier', length: '10 km', description: 'Northwest flank' },
            { name: 'Grenz Glacier', length: '7 km', description: 'West side' },
            { name: 'Lys Glacier', length: '5 km', description: 'Italian side' }
        ],
        
        baseCamps: [
            { name: 'Monte Rosa Hut', elevation: 2883, country: 'Switzerland', coordinates: [45.9583, 7.8167] },
            { name: 'Margherita Hut', elevation: 4554, country: 'Italy', coordinates: [45.9292, 7.8764] },
            { name: 'Gnifetti Hut', elevation: 3647, country: 'Italy', coordinates: [45.9167, 7.8667] }
        ],
        
        nearbyPeaks: [
            { name: 'Nordend', elevation: 4609, coordinates: [45.9361, 7.8722] },
            { name: 'Zumsteinspitze', elevation: 4563, coordinates: [45.9333, 7.8667] },
            { name: 'Signalkuppe', elevation: 4554, coordinates: [45.9292, 7.8764] },
            { name: 'Parrotspitze', elevation: 4432, coordinates: [45.9208, 7.8708] },
            { name: 'Liskamm', elevation: 4527, coordinates: [45.8917, 7.8333] }
        ],
        
        nearbyCities: [
            { name: 'Zermatt', coordinates: [46.0207, 7.7491], country: 'Switzerland', population: 5700 },
            { name: 'Macugnaga', coordinates: [45.9667, 7.9667], country: 'Italy', population: 600 },
            { name: 'Gressoney', coordinates: [45.8333, 7.8333], country: 'Italy', population: 800 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Alpine rose',
            'Gentian'
        ],
        
        fauna: [
            'Alpine ibex',
            'Chamois',
            'Marmot',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Mountaineering Tourism', value: 'Major Zermatt attraction' },
            { label: 'Ski Mountaineering', value: 'Haute Route terminus' },
            { label: 'Research', value: 'Margherita Hut scientific station' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Gorner Glacier shrinking' },
            { label: 'Permafrost Melt', value: 'Rock instability increasing' }
        ],
        
        conservation: [
            { label: 'Swiss Alps Jungfrau-Aletsch', value: 'UNESCO World Heritage nearby' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'From Latin "rosia" (glacier) or local dialect' },
            { label: 'Dufour Named', value: 'After General Guillaume-Henri Dufour' },
            { label: 'Multiple Summits', value: 'Massif has 10 peaks over 4000m' },
            { label: 'Margherita Hut', value: 'Highest building in Europe (1893)' }
        ],
        
        records: [
            { record: 'Second Highest in Alps', value: '4,634m elevation' },
            { record: 'Highest Peak in Switzerland', value: 'Summit is Swiss' },
            { record: 'Largest Alpine Massif', value: '10 peaks over 4000m' },
            { record: 'Highest Hut in Europe', value: 'Margherita Hut at 4,554m' },
            { record: 'Gorner Glacier', value: 'Second largest glacier in Alps' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #39 - DOM (Alps)
    // ========================================
    {
        id: 'dom',
        name: 'Dom',
        localNames: [
            { language: 'German', name: 'Dom (Cathedral)' },
            { language: 'French', name: 'Dom des Mischabel' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps (Mischabel Group)',
        elevation: 4545,
        prominence: 1046,
        isolation: 6.5,
        coordinates: [46.0947, 7.8583],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&q=80',
        
        formation: {
            type: 'Metamorphic rock (gneiss)',
            age: '40-50 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Alpine orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 11, 1858',
                climbers: ['J. Llewelyn Davies', 'Johann Zumtaugwald', 'Johann Kronig', 'Hieronymus Brantschen'],
                route: 'North-West Face (Festigrat)',
                expedition: 'British climber with guides'
            },
            totalAscents: 3000,
            fatalities: 25,
            successRate: '65%',
            bestSeason: 'June-September',
            difficulty: 'Difficult',
            routes: [
                { name: 'Festigrat (Normal Route)', country: 'Switzerland', difficulty: 'Standard', description: 'Northwest ridge' },
                { name: 'Domgrat', country: 'Switzerland', difficulty: 'Very Difficult', description: 'North ridge direct' },
                { name: 'South Face', country: 'Switzerland', difficulty: 'Difficult', description: 'Rock and ice' },
                { name: 'Nadelhorn Traverse', country: 'Switzerland', difficulty: 'Very Difficult', description: 'Mischabel traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-16°C average',
            winterLow: '-35°C',
            summerHigh: '-4°C',
            snowfall: 'Heavy',
            winds: 'Strong',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Fee Glacier', length: '6 km', description: 'West flank' },
            { name: 'Dom Glacier', length: '4 km', description: 'Northwest approach' },
            { name: 'Ried Glacier', length: '5 km', description: 'East side' }
        ],
        
        baseCamps: [
            { name: 'Dom Hut', elevation: 2940, country: 'Switzerland', coordinates: [46.1000, 7.8500] },
            { name: 'Mischabel Hut', elevation: 3340, country: 'Switzerland', coordinates: [46.0833, 7.8667] }
        ],
        
        nearbyPeaks: [
            { name: 'Täschhorn', elevation: 4491, coordinates: [46.0875, 7.8611] },
            { name: 'Lenzspitze', elevation: 4294, coordinates: [46.1000, 7.8667] },
            { name: 'Nadelhorn', elevation: 4327, coordinates: [46.1075, 7.8636] },
            { name: 'Stecknadelhorn', elevation: 4241, coordinates: [46.1125, 7.8639] },
            { name: 'Alphubel', elevation: 4206, coordinates: [46.0667, 7.8667] }
        ],
        
        nearbyCities: [
            { name: 'Saas-Fee', coordinates: [46.1083, 7.9278], country: 'Switzerland', population: 1600 },
            { name: 'Zermatt', coordinates: [46.0207, 7.7491], country: 'Switzerland', population: 5700 },
            { name: 'Randa', coordinates: [46.1000, 7.7833], country: 'Switzerland', population: 400 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Alpine rose',
            'Larch forests (lower)'
        ],
        
        fauna: [
            'Alpine ibex',
            'Chamois',
            'Marmot',
            'Golden eagle'
        ],
        
        economicImportance: [
            { label: 'Mountaineering', value: 'Popular Swiss 4000er' },
            { label: 'Saas-Fee Tourism', value: 'Key attraction' },
            { label: 'Hut Revenue', value: 'Dom Hut stays' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Fee Glacier shrinking' },
            { label: 'Permafrost', value: 'Rock stability concerns' }
        ],
        
        conservation: [
            { label: 'Swiss National Park System', value: 'Protected area' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'German for "cathedral" - church-like shape' },
            { label: 'Mischabel Group', value: 'Part of dramatic pinnacle chain' },
            { label: 'Golden Age', value: 'First climbed during alpinism\'s golden era' }
        ],
        
        records: [
            { record: 'Third Highest in Switzerland', value: '4,545m elevation' },
            { record: 'Highest Entirely in Switzerland', value: 'Mont Rosa summit is border' },
            { record: 'Mischabel Highpoint', value: 'Tallest of the Mischabel peaks' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // ========================================
    // #40 - WEISSHORN (Alps)
    // ========================================
    {
        id: 'weisshorn',
        name: 'Weisshorn',
        localNames: [
            { language: 'German', name: 'Weisshorn (White Horn)' },
            { language: 'French', name: 'Pointe Blanche' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps (Weisshorn Group)',
        elevation: 4506,
        prominence: 1235,
        isolation: 13.9,
        coordinates: [46.1067, 7.7164],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80',
        
        formation: {
            type: 'Metamorphic rock (gneiss)',
            age: '40-50 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Alpine orogeny'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 19, 1861',
                climbers: ['John Tyndall', 'Johann Joseph Bennen', 'Ulrich Wenger'],
                route: 'East Ridge',
                expedition: 'Irish physicist with Swiss guides'
            },
            totalAscents: 1500,
            fatalities: 50,
            successRate: '55%',
            bestSeason: 'July-September',
            difficulty: 'Very Difficult',
            routes: [
                { name: 'East Ridge (Normal Route)', country: 'Switzerland', difficulty: 'Standard', description: 'Long classic ridge' },
                { name: 'North Ridge', country: 'Switzerland', difficulty: 'Very Difficult', description: 'Technical ridge traverse' },
                { name: 'West Face', country: 'Switzerland', difficulty: 'Extremely Difficult', description: 'Steep mixed climbing' },
                { name: 'Grand Gendarme', country: 'Switzerland', difficulty: 'Very Difficult', description: 'Direct on east ridge' }
            ]
        },
        
        climate: {
            summitTemperature: '-16°C average',
            winterLow: '-35°C',
            summerHigh: '-3°C',
            snowfall: 'Heavy',
            winds: 'Strong, exposed ridges',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Weisshorn Glacier', length: '3 km', description: 'North side' },
            { name: 'Turtmann Glacier', length: '6 km', description: 'West flank' },
            { name: 'Zinal Glacier', length: '5 km', description: 'Southwest' }
        ],
        
        baseCamps: [
            { name: 'Weisshorn Hut', elevation: 2932, country: 'Switzerland', coordinates: [46.1083, 7.7167] },
            { name: 'Grand Mountet Hut', elevation: 2886, country: 'Switzerland', coordinates: [46.0750, 7.7000] },
            { name: 'Tracuit Hut', elevation: 3256, country: 'Switzerland', coordinates: [46.1333, 7.6833] }
        ],
        
        nearbyPeaks: [
            { name: 'Bishorn', elevation: 4153, coordinates: [46.1333, 7.6917] },
            { name: 'Zinalrothorn', elevation: 4221, coordinates: [46.0639, 7.6875] },
            { name: 'Obergabelhorn', elevation: 4063, coordinates: [46.0361, 7.6694] },
            { name: 'Dent Blanche', elevation: 4357, coordinates: [46.0333, 7.6167] }
        ],
        
        nearbyCities: [
            { name: 'Zermatt', coordinates: [46.0207, 7.7491], country: 'Switzerland', population: 5700 },
            { name: 'Zinal', coordinates: [46.1333, 7.6167], country: 'Switzerland', population: 250 },
            { name: 'Randa', coordinates: [46.1000, 7.7833], country: 'Switzerland', population: 400 }
        ],
        
        flora: [
            'Alpine meadows',
            'Edelweiss',
            'Gentians',
            'Alpine rose'
        ],
        
        fauna: [
            'Alpine ibex',
            'Chamois',
            'Marmot',
            'Golden eagle',
            'Ptarmigan'
        ],
        
        economicImportance: [
            { label: 'Mountaineering', value: 'Classic alpine objective' },
            { label: 'Tourism', value: 'Valais attraction' },
            { label: 'Photography', value: 'Iconic pyramid shape' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Significant ice loss' },
            { label: 'Rock Stability', value: 'Permafrost thaw concerns' }
        ],
        
        conservation: [
            { label: 'Swiss National Landscape', value: 'Protected scenic area' }
        ],
        
        historicalImportance: [
            { label: 'Name Origin', value: 'German for "White Horn" - snow-covered appearance' },
            { label: 'John Tyndall', value: 'Famous physicist made first ascent' },
            { label: 'Perfect Pyramid', value: 'Considered most beautiful Alpine peak' },
            { label: 'Golden Age Classic', value: 'Major climb of 1860s alpine era' }
        ],
        
        records: [
            { record: 'Fifth Highest in Switzerland', value: '4,506m elevation' },
            { record: 'Most Beautiful Alpine Peak', value: 'Perfect pyramidal form' },
            { record: 'Classic Ridge Climb', value: 'East ridge is alpine classic' },
            { record: 'Challenging 4000er', value: 'Lower success rate than most' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOUNTAINS_DATA_4;
}
