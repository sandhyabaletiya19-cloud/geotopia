// mountains-data-5.js - Mountains 41-50 (Alps & Andes Peaks) - Part A
// Alpine classics and Andean giants

const MOUNTAINS_DATA_5_PART_A = [
    // 41. Matterhorn
    {
        id: 'matterhorn',
        name: 'Matterhorn',
        localNames: [
            { language: 'German', name: 'Matterhorn' },
            { language: 'Italian', name: 'Monte Cervino' },
            { language: 'French', name: 'Mont Cervin' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' },
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps',
        elevation: 4478,
        prominence: 1042,
        isolation: 13.8,
        coordinates: [45.9766, 7.6586],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1529923748474-a99c71734a44?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1529923748474-a99c71734a44?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Thrust Nappe',
            age: '50-100 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'The Matterhorn formed from a thrust nappe when the African and Eurasian plates collided. The distinctive pyramid shape is carved by glacial erosion from four directions, creating four faces and four ridges meeting at the summit.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 14, 1865',
                climbers: ['Edward Whymper', 'Charles Hudson', 'Lord Francis Douglas', 'Douglas Hadow', 'Michel Croz', 'Peter Taugwalder Sr.', 'Peter Taugwalder Jr.'],
                route: 'Hörnli Ridge (Northeast)',
                expedition: 'Tragic first ascent - four of seven climbers died during descent when a rope broke. This remains one of the most famous mountaineering disasters.'
            },
            totalAscents: 3500,
            fatalities: 500,
            successRate: '75%',
            bestSeason: 'July to September',
            difficulty: 'AD (Assez Difficile)',
            routes: [
                { name: 'Hörnli Ridge', country: 'Switzerland', difficulty: 'AD', description: 'Normal route from Zermatt side, most popular, involves rock scrambling and some technical sections' },
                { name: 'Lion Ridge', country: 'Italy', difficulty: 'AD+', description: 'Italian normal route from Cervinia, slightly more technical with fixed ropes' },
                { name: 'Zmutt Ridge', country: 'Switzerland', difficulty: 'D', description: 'Northwest ridge, considered most beautiful, serious alpine route' },
                { name: 'North Face', country: 'Switzerland', difficulty: 'TD', description: 'One of six great north faces of Alps, 1,100m of ice and mixed climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-35°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy snowfall, summit perpetually snow-covered',
            winds: 'Strong föhn winds can appear suddenly, creating dangerous conditions',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Matterhorn Glacier', length: '2.5 km', description: 'North side glacier feeding into Zmutt Glacier' },
            { name: 'Zmutt Glacier', length: '7 km', description: 'Major glacier on northwest side draining toward Zermatt' },
            { name: 'Tiefmatten Glacier', length: '4 km', description: 'West side glacier between Matterhorn and Dent dHérens' }
        ],
        
        baseCamps: [
            { name: 'Hörnli Hut', elevation: 3260, country: 'Switzerland', coordinates: [45.9833, 7.6667] },
            { name: 'Solvay Hut', elevation: 4003, country: 'Switzerland', coordinates: [45.9789, 7.6625] },
            { name: 'Carrel Hut', elevation: 3830, country: 'Italy', coordinates: [45.9717, 7.6517] }
        ],
        
        nearbyPeaks: [
            { name: 'Dent Blanche', elevation: 4357, coordinates: [46.0333, 7.6167] },
            { name: 'Weisshorn', elevation: 4506, coordinates: [46.1067, 7.7161] },
            { name: 'Dent dHérens', elevation: 4171, coordinates: [45.9614, 7.6069] },
            { name: 'Breithorn', elevation: 4164, coordinates: [45.9417, 7.7472] }
        ],
        
        nearbyCities: [
            { name: 'Zermatt', coordinates: [46.0207, 7.7491], country: 'Switzerland', population: 5800 },
            { name: 'Cervinia', coordinates: [45.9344, 7.6317], country: 'Italy', population: 520 },
            { name: 'Visp', coordinates: [46.2940, 7.8810], country: 'Switzerland', population: 8000 },
            { name: 'Aosta', coordinates: [45.7372, 7.3153], country: 'Italy', population: 34000 }
        ],
        
        flora: ['Alpine Rose', 'Edelweiss', 'Glacier Crowfoot', 'Alpine Poppy', 'Cushion Pink', 'Mountain Avens'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Alpine Chough', 'Ptarmigan', 'Ermine'],
        
        economicImportance: [
            { label: 'Tourism Icon', value: 'Most photographed mountain in world, symbol of Switzerland and Toblerone chocolate' },
            { label: 'Annual Visitors', value: 'Over 2 million tourists visit Zermatt annually' },
            { label: 'Ski Industry', value: 'Year-round skiing at Klein Matterhorn, highest ski area in Alps' },
            { label: 'Climbing Revenue', value: 'Approximately 3,000 summit attempts annually generate significant guide economy' }
        ],
        
        environmentalIssues: [
            { label: 'Permafrost Thawing', value: 'Warming temperatures causing rockfall and route instability' },
            { label: 'Glacier Retreat', value: 'Surrounding glaciers losing mass rapidly, exposing unstable rock' },
            { label: 'Overcrowding', value: 'Popular routes see dangerous congestion during peak season' },
            { label: 'Climate Change', value: 'Summer climbing increasingly dangerous due to rockfall' }
        ],
        
        conservation: [
            { label: 'Protected Status', value: 'Part of Swiss Alps UNESCO World Heritage Site nomination' },
            { label: 'Access Management', value: 'Guide requirements and hut reservations help control crowds' },
            { label: 'Research Station', value: 'High-altitude research on climate change impacts' },
            { label: 'Car-Free Zermatt', value: 'Village is car-free to reduce environmental impact' }
        ],
        
        historicalImportance: [
            { label: 'First Ascent Tragedy', value: '1865 first ascent ended with four deaths, bringing mountaineering into public consciousness' },
            { label: 'Golden Age of Alpinism', value: 'Last major Alpine peak to be climbed, ending the Golden Age' },
            { label: 'Edward Whymper', value: 'Led successful first ascent team, wrote famous account Scrambles Amongst the Alps' },
            { label: 'North Face First Ascent', value: '1931 by brothers Franz and Toni Schmid, pioneering achievement' }
        ],
        
        records: [
            { record: 'Fastest Ascent', value: 'Under 2 hours from Cervinia by Kilian Jornet (2013)' },
            { record: 'Most Iconic Shape', value: 'Considered most recognized mountain silhouette worldwide' },
            { record: 'Historic Deaths', value: 'Over 500 fatalities, one of deadliest Alps peaks' },
            { record: 'First Winter Ascent', value: 'February 1962 by Hilti von Allmen' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 42. Dent Blanche
    {
        id: 'dent-blanche',
        name: 'Dent Blanche',
        localNames: [
            { language: 'French', name: 'Dent Blanche' },
            { language: 'German', name: 'Weisszahn' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps',
        elevation: 4357,
        prominence: 627,
        isolation: 4.8,
        coordinates: [46.0333, 7.6167],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Massif',
            age: '50-100 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed from Arolla gneiss, a metamorphic rock created during Alpine orogeny. The distinctive tooth shape (Dent meaning tooth in French) carved by glacial erosion creating dramatic cliffs.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 18, 1862',
                climbers: ['Thomas Stuart Kennedy', 'William Wigram', 'Jean-Baptiste Croz', 'Johann Kronig'],
                route: 'South Ridge',
                expedition: 'British climbers with Chamonix guide Croz, who later died on Matterhorn first ascent in 1865.'
            },
            totalAscents: 800,
            fatalities: 45,
            successRate: '60%',
            bestSeason: 'July to September',
            difficulty: 'AD+ to D',
            routes: [
                { name: 'South Ridge (Normal Route)', country: 'Switzerland', difficulty: 'AD+', description: 'Most popular route via Grand Cornier, involves exposed ridge climbing' },
                { name: 'North Ridge', country: 'Switzerland', difficulty: 'D', description: 'Classic ridge traverse from Wandflue, sustained technical climbing' },
                { name: 'Viereselgrat', country: 'Switzerland', difficulty: 'D+', description: 'Four Donkey Ridge, aesthetic but serious undertaking' },
                { name: 'Northwest Face', country: 'Switzerland', difficulty: 'TD', description: 'Steep ice and mixed climbing, serious objective' }
            ]
        },
        
        climate: {
            summitTemperature: '-12°C average',
            winterLow: '-30°C',
            summerHigh: '-3°C',
            snowfall: 'Heavy snowfall, extensive glaciation',
            winds: 'Exposed summit ridge experiences severe winds',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Grand Cornier Glacier', length: '3 km', description: 'East side glacier below south ridge' },
            { name: 'Moming Glacier', length: '4 km', description: 'Northwest side glacier, approach for north routes' },
            { name: 'Ferpècle Glacier', length: '5 km', description: 'Major glacier system on eastern slopes' }
        ],
        
        baseCamps: [
            { name: 'Dent Blanche Hut', elevation: 3507, country: 'Switzerland', coordinates: [46.0167, 7.6333] },
            { name: 'Schönbiel Hut', elevation: 2694, country: 'Switzerland', coordinates: [46.0028, 7.6333] },
            { name: 'Mountet Hut', elevation: 2886, country: 'Switzerland', coordinates: [46.0500, 7.6000] }
        ],
        
        nearbyPeaks: [
            { name: 'Matterhorn', elevation: 4478, coordinates: [45.9766, 7.6586] },
            { name: 'Grand Cornier', elevation: 3962, coordinates: [46.0239, 7.5992] },
            { name: 'Ober Gabelhorn', elevation: 4063, coordinates: [46.0431, 7.6694] },
            { name: 'Zinalrothorn', elevation: 4221, coordinates: [46.0644, 7.6900] }
        ],
        
        nearbyCities: [
            { name: 'Zermatt', coordinates: [46.0207, 7.7491], country: 'Switzerland', population: 5800 },
            { name: 'Evolène', coordinates: [46.1125, 7.4933], country: 'Switzerland', population: 1800 },
            { name: 'Zinal', coordinates: [46.1350, 7.6258], country: 'Switzerland', population: 280 },
            { name: 'Sion', coordinates: [46.2333, 7.3667], country: 'Switzerland', population: 34000 }
        ],
        
        flora: ['Alpine Rose', 'Edelweiss', 'Glacier Buttercup', 'Rock Jasmine', 'Alpine Forget-me-not'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Lammergeier', 'Snow Vole'],
        
        economicImportance: [
            { label: 'Mountaineering Tourism', value: 'Classic 4000m peak attracting experienced alpinists' },
            { label: 'Guide Services', value: 'Provides work for local mountain guides' },
            { label: 'Hut System', value: 'Mountain huts generate tourism revenue' },
            { label: 'Haute Route', value: 'Part of famous ski touring route infrastructure' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Surrounding glaciers receding significantly' },
            { label: 'Permafrost Degradation', value: 'Rock instability increasing with warming' },
            { label: 'Climate Impact', value: 'Changing conditions affecting traditional routes' }
        ],
        
        conservation: [
            { label: 'Swiss Alps Protection', value: 'Within Swiss federal protection guidelines' },
            { label: 'Leave No Trace', value: 'SAC huts promote minimal impact climbing' },
            { label: 'Research Monitoring', value: 'Glacier monitoring programs active' }
        ],
        
        historicalImportance: [
            { label: 'Golden Age Peak', value: 'First ascent during Golden Age of Alpinism' },
            { label: 'Jean-Baptiste Croz', value: 'First ascent guide later died on Matterhorn' },
            { label: 'Classic Status', value: 'Considered one of finest 4000m peaks in Alps' },
            { label: 'North Ridge History', value: 'First complete traverse 1928, became classic' }
        ],
        
        records: [
            { record: 'Most Beautiful 4000er', value: 'Often voted among most aesthetic Alpine peaks' },
            { record: 'Technical Challenge', value: 'Considered hardest of popular Valais 4000m peaks' },
            { record: 'Summit Tooth', value: 'Distinctive pointed summit visible from many peaks' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 43. Grand Combin
    {
        id: 'grand-combin',
        name: 'Grand Combin',
        localNames: [
            { language: 'French', name: 'Grand Combin' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Pennine Alps',
        elevation: 4314,
        prominence: 1517,
        isolation: 25.4,
        coordinates: [45.9403, 7.2975],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Massive Glaciated Peak',
            age: '50-100 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed during Alpine orogeny, composed of gneiss and schist. The massif has multiple summits and is one of most heavily glaciated mountains in Alps, with glaciers on all sides.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 30, 1859',
                climbers: ['Charles Sainte-Claire Deville', 'Daniel Balleys', 'Gaspard Balleys', 'Basile Dorsaz'],
                route: 'Northwest Flank',
                expedition: 'French geologist Deville with local guides made first ascent during scientific expedition.'
            },
            totalAscents: 1200,
            fatalities: 35,
            successRate: '70%',
            bestSeason: 'June to September',
            difficulty: 'PD to AD',
            routes: [
                { name: 'Normal Route (Northwest Face)', country: 'Switzerland', difficulty: 'PD+', description: 'Glacier approach from Panossière hut, crevasse danger, snow/ice slopes to summit' },
                { name: 'Corridor Route', country: 'Switzerland', difficulty: 'AD', description: 'Steeper variation via ice couloir, more direct but technical' },
                { name: 'West Ridge', country: 'Switzerland', difficulty: 'AD', description: 'Fine ridge climbing from Valsorey hut' },
                { name: 'South Face', country: 'Switzerland', difficulty: 'TD', description: 'Serious ice face, rarely climbed' }
            ]
        },
        
        climate: {
            summitTemperature: '-14°C average',
            winterLow: '-35°C',
            summerHigh: '-2°C',
            snowfall: 'Extremely heavy, one of snowiest peaks in Alps',
            winds: 'Exposed to weather systems from both north and south',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Corbassière Glacier', length: '8 km', description: 'Largest glacier in Swiss Alps, north side of massif' },
            { name: 'Glacier de Sonadon', length: '4 km', description: 'Northeast glacier feeding into Val de Bagnes' },
            { name: 'Glacier du Mont Durand', length: '5 km', description: 'South side glacier system' },
            { name: 'Brenay Glacier', length: '3 km', description: 'West side glacier' }
        ],
        
        baseCamps: [
            { name: 'Panossière Hut', elevation: 2641, country: 'Switzerland', coordinates: [45.9583, 7.2917] },
            { name: 'Valsorey Hut', elevation: 3037, country: 'Switzerland', coordinates: [45.9167, 7.2417] },
            { name: 'Chanrion Hut', elevation: 2462, country: 'Switzerland', coordinates: [45.9417, 7.3583] }
        ],
        
        nearbyPeaks: [
            { name: 'Combin de Corbassière', elevation: 3716, coordinates: [45.9583, 7.2833] },
            { name: 'Petit Combin', elevation: 3672, coordinates: [45.9644, 7.2583] },
            { name: 'Mont Vélan', elevation: 3731, coordinates: [45.8778, 7.2917] },
            { name: 'Grand Golliaz', elevation: 3238, coordinates: [45.9083, 7.1833] }
        ],
        
        nearbyCities: [
            { name: 'Verbier', coordinates: [46.0964, 7.2286], country: 'Switzerland', population: 3200 },
            { name: 'Fionnay', coordinates: [46.0333, 7.3167], country: 'Switzerland', population: 100 },
            { name: 'Martigny', coordinates: [46.0986, 7.0736], country: 'Switzerland', population: 18500 },
            { name: 'Aosta', coordinates: [45.7372, 7.3153], country: 'Italy', population: 34000 }
        ],
        
        flora: ['Alpine Rose', 'Edelweiss', 'Saxifrage', 'Glacier Buttercup', 'Androsace'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Snow Finch', 'Alpine Accentor'],
        
        economicImportance: [
            { label: 'Haute Route', value: 'Key waypoint on famous Chamonix-Zermatt ski traverse' },
            { label: 'Hydroelectric', value: 'Glacier melt feeds important hydroelectric schemes' },
            { label: 'Guide Economy', value: 'Popular objective for guided parties' },
            { label: 'Verbier Tourism', value: 'Part of backdrop for major ski resort' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Loss', value: 'Corbassière Glacier retreating rapidly' },
            { label: 'Serac Danger', value: 'Warming increasing serac collapse risk' },
            { label: 'Route Changes', value: 'Traditional routes becoming more dangerous' }
        ],
        
        conservation: [
            { label: 'Research Site', value: 'Long-term glacier monitoring programs' },
            { label: 'Hut Stewardship', value: 'SAC maintains low-impact mountain huts' },
            { label: 'Protected Landscape', value: 'Part of Val de Bagnes nature protection' }
        ],
        
        historicalImportance: [
            { label: 'Scientific First', value: 'First ascent by geologist studying Alps' },
            { label: 'Haute Route Pioneer', value: 'Early inclusion in trans-Alpine route' },
            { label: 'Glaciology', value: 'Important site for glacier research since 1800s' },
            { label: 'Aviation History', value: 'Plane crashed on glacier in 1946, still emerging' }
        ],
        
        records: [
            { record: 'Largest Swiss Glacier', value: 'Corbassière is longest glacier entirely in Switzerland' },
            { record: 'Triple Summit', value: 'Three distinct 4000m summits on massif' },
            { record: 'High Prominence', value: 'Sixth most prominent peak in Alps' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 44. Finsteraarhorn
    {
        id: 'finsteraarhorn',
        name: 'Finsteraarhorn',
        localNames: [
            { language: 'German', name: 'Finsteraarhorn' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Bernese Alps',
        elevation: 4274,
        prominence: 2280,
        isolation: 65.3,
        coordinates: [46.5372, 8.1261],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Massif',
            age: '300-400 million years (rock), 30 million years (uplift)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Composed of ancient Aar granite, among oldest rocks in Alps. Uplifted during Alpine orogeny when African plate collided with Europe. The sharp pyramid form carved by glaciers from multiple directions.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 10, 1812',
                climbers: ['Arnold Abbühl', 'Joseph Bortis', 'Alois Volker'],
                route: 'Northwest Ridge',
                expedition: 'Local Swiss guides made first ascent, one of earliest major Alpine first ascents. Some sources dispute date.'
            },
            totalAscents: 2000,
            fatalities: 28,
            successRate: '65%',
            bestSeason: 'July to September',
            difficulty: 'AD',
            routes: [
                { name: 'Northwest Ridge (Normal)', country: 'Switzerland', difficulty: 'AD', description: 'Long glacier approach followed by mixed ridge climbing to summit' },
                { name: 'Southeast Ridge', country: 'Switzerland', difficulty: 'AD+', description: 'Alternative from Finsteraarhorn hut side' },
                { name: 'Northeast Face', country: 'Switzerland', difficulty: 'D', description: 'Mixed ice and rock face, serious undertaking' },
                { name: 'Southwest Pillar', country: 'Switzerland', difficulty: 'TD', description: 'Technical rock climbing route' }
            ]
        },
        
        climate: {
            summitTemperature: '-13°C average',
            winterLow: '-35°C',
            summerHigh: '-2°C',
            snowfall: 'Heavy precipitation from Atlantic systems',
            winds: 'Isolated position creates severe wind exposure',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Finsteraar Glacier', length: '6 km', description: 'East side glacier, approach for normal route' },
            { name: 'Unteraar Glacier', length: '12 km', description: 'Historic glacier, one of first studied' },
            { name: 'Oberaar Glacier', length: '5 km', description: 'Northern glacier system' },
            { name: 'Studer Glacier', length: '3 km', description: 'West side glacier' }
        ],
        
        baseCamps: [
            { name: 'Finsteraarhorn Hut', elevation: 3048, country: 'Switzerland', coordinates: [46.5417, 8.0833] },
            { name: 'Oberaarjoch Hut', elevation: 3256, country: 'Switzerland', coordinates: [46.5500, 8.1333] },
            { name: 'Grimsel Hospiz', elevation: 1980, country: 'Switzerland', coordinates: [46.5697, 8.3325] }
        ],
        
        nearbyPeaks: [
            { name: 'Gross Wannenhorn', elevation: 3906, coordinates: [46.5333, 8.1000] },
            { name: 'Agassizhorn', elevation: 3946, coordinates: [46.5278, 8.0750] },
            { name: 'Schreckhorn', elevation: 4078, coordinates: [46.5853, 8.1050] },
            { name: 'Lauteraarhorn', elevation: 4042, coordinates: [46.5728, 8.1208] }
        ],
        
        nearbyCities: [
            { name: 'Grindelwald', coordinates: [46.6244, 8.0367], country: 'Switzerland', population: 4100 },
            { name: 'Meiringen', coordinates: [46.7272, 8.1850], country: 'Switzerland', population: 4800 },
            { name: 'Guttannen', coordinates: [46.6550, 8.2883], country: 'Switzerland', population: 280 },
            { name: 'Interlaken', coordinates: [46.6863, 7.8632], country: 'Switzerland', population: 5600 }
        ],
        
        flora: ['Alpine Moss', 'Lichen', 'Glacier Buttercup', 'Saxifrage', 'Alpine Poppy'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Ptarmigan', 'Snow Vole'],
        
        economicImportance: [
            { label: 'Highest in Bernese Alps', value: 'Major draw for peak baggers and alpinists' },
            { label: 'Hydroelectric', value: 'Grimsel area major hydroelectric production region' },
            { label: 'Research Base', value: 'Jungfraujoch research station nearby' },
            { label: 'Tourism', value: 'Part of UNESCO Swiss Alps Jungfrau-Aletsch region' }
        ],
        
        environmentalIssues: [
            { label: 'Rapid Glacier Loss', value: 'Bernese glaciers among fastest retreating in Alps' },
            { label: 'Permafrost Thaw', value: 'Mountain infrastructure threatened by thaw' },
            { label: 'Changing Routes', value: 'Bergschrunds and seracs increasingly unstable' }
        ],
        
        conservation: [
            { label: 'UNESCO Status', value: 'Part of Swiss Alps Jungfrau-Aletsch World Heritage Site' },
            { label: 'Long-term Monitoring', value: 'Glaciers monitored since Louis Agassiz studies 1840s' },
            { label: 'Protected Area', value: 'Federal protection as natural heritage' }
        ],
        
        historicalImportance: [
            { label: 'Early First Ascent', value: 'One of first major Alps peaks climbed (1812)' },
            { label: 'Glaciology Birthplace', value: 'Louis Agassiz developed glacier theory here' },
            { label: 'Scientific History', value: 'Site of pioneering Alpine research' },
            { label: 'Highest Bernese Peak', value: 'Symbol of Bernese Oberland region' }
        ],
        
        records: [
            { record: 'Highest Bernese Alps', value: 'At 4274m, highest peak entirely within Bernese Alps' },
            { record: 'Greatest Prominence', value: 'Third most prominent peak in Alps at 2280m' },
            { record: 'Earliest Major Ascent', value: 'One of first 4000m peaks climbed in Alps' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 45. Jungfrau
    {
        id: 'jungfrau',
        name: 'Jungfrau',
        localNames: [
            { language: 'German', name: 'Jungfrau' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Bernese Alps',
        elevation: 4158,
        prominence: 721,
        isolation: 2.9,
        coordinates: [46.5367, 7.9614],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1594749908814-6e28c4d6bcd1?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1594749908814-6e28c4d6bcd1?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Massif',
            age: '300 million years (rock), 30 million years (uplift)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Composed of crystalline schist and gneiss pushed upward during Alpine collision. The "Maiden" forms distinctive trio with Eiger and Mönch, with massive north face dropping 3000m to Lauterbrunnen Valley.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 3, 1811',
                climbers: ['Johann Rudolf Meyer', 'Hieronymus Meyer', 'Joseph Bortis', 'Alois Volker'],
                route: 'Southeast Ridge from Rottalsattel',
                expedition: 'Meyer brothers from Aarau with local guides achieved first ascent, second major Alpine peak climbed after Mont Blanc.'
            },
            totalAscents: 2500,
            fatalities: 20,
            successRate: '80%',
            bestSeason: 'June to September',
            difficulty: 'PD to AD',
            routes: [
                { name: 'Rottalsattel (Normal Route)', country: 'Switzerland', difficulty: 'PD+', description: 'Easiest route via Mönchsjoch hut, glacier approach and snow slopes' },
                { name: 'Jungfrau Railway Route', country: 'Switzerland', difficulty: 'PD', description: 'Start from Jungfraujoch station at 3454m' },
                { name: 'Northeast Ridge', country: 'Switzerland', difficulty: 'AD', description: 'More technical ridge traverse' },
                { name: 'North Face', country: 'Switzerland', difficulty: 'ED', description: 'Extreme face, first climbed 1970' }
            ]
        },
        
        climate: {
            summitTemperature: '-12°C average',
            winterLow: '-35°C',
            summerHigh: '-2°C',
            snowfall: 'Very heavy snowfall, north face accumulates massive cornices',
            winds: 'Severe exposure on ridges',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Jungfrau Firn', length: '3 km', description: 'Southwest side glacier, approach for normal route' },
            { name: 'Guggi Glacier', length: '4 km', description: 'North side glacier' },
            { name: 'Aletsch Glacier', length: '23 km', description: 'Longest glacier in Alps, fed by Jungfrau area' },
            { name: 'Giessen Glacier', length: '2 km', description: 'East side hanging glacier' }
        ],
        
        baseCamps: [
            { name: 'Mönchsjoch Hut', elevation: 3657, country: 'Switzerland', coordinates: [46.5500, 7.9833] },
            { name: 'Jungfraujoch Station', elevation: 3454, country: 'Switzerland', coordinates: [46.5475, 7.9853] },
            { name: 'Silberhorn Hut', elevation: 2663, country: 'Switzerland', coordinates: [46.5333, 7.9333] }
        ],
        
        nearbyPeaks: [
            { name: 'Mönch', elevation: 4107, coordinates: [46.5578, 7.9992] },
            { name: 'Eiger', elevation: 3967, coordinates: [46.5775, 8.0053] },
            { name: 'Silberhorn', elevation: 3695, coordinates: [46.5333, 7.9500] },
            { name: 'Gletscherhorn', elevation: 3983, coordinates: [46.5250, 7.9583] }
        ],
        
        nearbyCities: [
            { name: 'Grindelwald', coordinates: [46.6244, 8.0367], country: 'Switzerland', population: 4100 },
            { name: 'Lauterbrunnen', coordinates: [46.5933, 7.9083], country: 'Switzerland', population: 2400 },
            { name: 'Wengen', coordinates: [46.6067, 7.9217], country: 'Switzerland', population: 1300 },
            { name: 'Interlaken', coordinates: [46.6863, 7.8632], country: 'Switzerland', population: 5600 }
        ],
        
        flora: ['Edelweiss', 'Alpine Rose', 'Glacier Buttercup', 'Alpine Poppy', 'Mountain Avens'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Alpine Chough', 'Ptarmigan'],
        
        economicImportance: [
            { label: 'Jungfrau Railway', value: 'Highest railway station in Europe brings 1 million+ visitors annually' },
            { label: 'UNESCO World Heritage', value: 'Part of Swiss Alps Jungfrau-Aletsch site' },
            { label: 'Ski Tourism', value: 'Major ski areas on surrounding slopes' },
            { label: 'Research Station', value: 'Sphinx Observatory for climate research' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Recession', value: 'Aletsch Glacier losing 50m per year' },
            { label: 'Tourism Pressure', value: 'Infrastructure impacts on sensitive environment' },
            { label: 'Climate Change', value: 'Permafrost thaw threatening infrastructure' }
        ],
        
        conservation: [
            { label: 'UNESCO Site', value: 'Swiss Alps Jungfrau-Aletsch World Heritage since 2001' },
            { label: 'Research Center', value: 'High Altitude Research Station Jungfraujoch' },
            { label: 'Monitoring', value: 'Continuous climate and glacier monitoring' }
        ],
        
        historicalImportance: [
            { label: 'Second 4000er Climbed', value: 'After Mont Blanc, second major Alpine peak ascended' },
            { label: 'Railway Engineering', value: 'Jungfrau Railway completed 1912, engineering marvel' },
            { label: 'Name Origin', value: 'Named after white-robed nuns of Interlaken convent' },
            { label: 'Tourism Pioneer', value: 'One of first peaks to become tourist destination' }
        ],
        
        records: [
            { record: 'Highest Railway', value: 'Jungfraujoch station at 3454m highest in Europe' },
            { record: 'Most Accessible 4000er', value: 'Railway provides closest approach to 4000m peak' },
            { record: 'Early Ascent', value: 'Third 4000m peak climbed (1811)' },
            { record: 'Iconic Trio', value: 'Forms famous Eiger-Mönch-Jungfrau skyline' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];

// Continue in Part B with mountains 46-50
// mountains-data-5.js - Mountains 41-50 (Alps & Andes Peaks) - Part B

const MOUNTAINS_DATA_5_PART_B = [
    // 46. Eiger
    {
        id: 'eiger',
        name: 'Eiger',
        localNames: [
            { language: 'German', name: 'Eiger' }
        ],
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Bernese Alps',
        elevation: 3967,
        prominence: 366,
        isolation: 2.2,
        coordinates: [46.5775, 8.0053],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1527006299521-9b5c9e2f9c3d?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1527006299521-9b5c9e2f9c3d?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Limestone Peak',
            age: '150-200 million years (rock), 30 million years (uplift)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Composed of Jurassic limestone thrust over younger rock during Alpine orogeny. The infamous North Face is 1,800m vertical wall carved by glacial erosion, one of most sheer faces in Alps.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 11, 1858',
                climbers: ['Charles Barrington', 'Christian Almer', 'Peter Bohren'],
                route: 'West Flank',
                expedition: 'Irish climber Barrington with Swiss guides made first summit ascent.'
            },
            totalAscents: 1500,
            fatalities: 64,
            successRate: '50%',
            bestSeason: 'July to September',
            difficulty: 'AD (West), ED (North Face)',
            routes: [
                { name: 'West Flank (Normal Route)', country: 'Switzerland', difficulty: 'AD', description: 'Most popular route via Eigergletscher station, snow and rock climbing' },
                { name: 'Mittellegi Ridge', country: 'Switzerland', difficulty: 'AD+', description: 'Classic ridge traverse, finest route on mountain' },
                { name: 'North Face (Heckmair Route)', country: 'Switzerland', difficulty: 'ED2', description: 'Infamous Nordwand, 1800m of ice, rock, and terror' },
                { name: 'North Pillar', country: 'Switzerland', difficulty: 'ED3', description: 'Direct line up north face, extreme difficulty' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-30°C',
            summerHigh: '0°C',
            snowfall: 'Heavy snowfall, north face collects massive amounts',
            winds: 'North face exposed to severe storms arriving with little warning',
            deathZone: 'Not applicable - below 8,000m'
        },
        
        glaciers: [
            { name: 'Eiger Glacier', length: '3 km', description: 'West side glacier, normal route approach' },
            { name: 'Ischmeer (Ice Sea)', length: '2 km', description: 'Glacier in north face basin, visible from railway windows' },
            { name: 'Lower Grindelwald Glacier', length: '5 km', description: 'Below north face, receives ice avalanches' }
        ],
        
        baseCamps: [
            { name: 'Mittellegi Hut', elevation: 3355, country: 'Switzerland', coordinates: [46.5728, 8.0117] },
            { name: 'Eigergletscher Station', elevation: 2320, country: 'Switzerland', coordinates: [46.5750, 7.9750] },
            { name: 'Kleine Scheidegg', elevation: 2061, country: 'Switzerland', coordinates: [46.5850, 7.9617] }
        ],
        
        nearbyPeaks: [
            { name: 'Mönch', elevation: 4107, coordinates: [46.5578, 7.9992] },
            { name: 'Jungfrau', elevation: 4158, coordinates: [46.5367, 7.9614] },
            { name: 'Wetterhorn', elevation: 3692, coordinates: [46.6122, 8.0608] },
            { name: 'Schreckhorn', elevation: 4078, coordinates: [46.5853, 8.1050] }
        ],
        
        nearbyCities: [
            { name: 'Grindelwald', coordinates: [46.6244, 8.0367], country: 'Switzerland', population: 4100 },
            { name: 'Wengen', coordinates: [46.6067, 7.9217], country: 'Switzerland', population: 1300 },
            { name: 'Lauterbrunnen', coordinates: [46.5933, 7.9083], country: 'Switzerland', population: 2400 },
            { name: 'Interlaken', coordinates: [46.6863, 7.8632], country: 'Switzerland', population: 5600 }
        ],
        
        flora: ['Alpine Moss', 'Lichen', 'Glacier Buttercup', 'Saxifrage', 'Rock Rose'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Alpine Chough', 'Wall Creeper'],
        
        economicImportance: [
            { label: 'Tourism Magnet', value: 'North face visible from trains draws millions of spectators' },
            { label: 'Jungfrau Railway', value: 'Tunnel through Eiger provides access to Jungfraujoch' },
            { label: 'Climbing Fame', value: 'North Face attempts generate global media coverage' },
            { label: 'Eiger Ultra Trail', value: 'Annual race draws international trail runners' }
        ],
        
        environmentalIssues: [
            { label: 'Rockfall Increase', value: 'Warming causing more frequent rockfall on face' },
            { label: 'Ice Collapse', value: 'Hanging seracs becoming less stable' },
            { label: 'Route Changes', value: 'Classic lines becoming more dangerous' }
        ],
        
        conservation: [
            { label: 'UNESCO Inclusion', value: 'Part of Swiss Alps Jungfrau-Aletsch World Heritage Site' },
            { label: 'Alpine Club Efforts', value: 'SAC maintains huts and route information' },
            { label: 'Research', value: 'Climate change monitoring on north face' }
        ],
        
        historicalImportance: [
            { label: 'Mordwand (Murder Wall)', value: 'North Face earned notorious nickname from many deaths' },
            { label: '1938 First N Face Ascent', value: 'Heinrich Harrer, Anderl Heckmair team success after many failures' },
            { label: 'Media Spectacle', value: 'Early attempts watched through telescopes, broadcast on radio' },
            { label: 'Film Fame', value: 'Featured in Clint Eastwood The Eiger Sanction' }
        ],
        
        records: [
            { record: 'Fastest North Face', value: 'Under 2.5 hours by Ueli Steck (2015)' },
            { record: 'North Face Deaths', value: 'Over 64 climbers have died on Nordwand' },
            { record: 'First Winter Ascent NF', value: '1961 by Toni Kinshofer team' },
            { record: 'Most Infamous Wall', value: 'North Face considered most deadly in Alps historically' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 47. Ojos del Salado
    {
        id: 'ojos-del-salado',
        name: 'Ojos del Salado',
        localNames: [
            { language: 'Spanish', name: 'Ojos del Salado' }
        ],
        countries: [
            { name: 'Chile', code: 'CL' },
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Puna de Atacama',
        elevation: 6893,
        prominence: 3688,
        isolation: 739,
        coordinates: [-27.1097, -68.5417],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano',
            age: '1.5 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Formed by subduction of Nazca Plate under South American Plate. Highest active volcano in the world. Contains permanent crater lake at 6,390m, second highest lake on Earth. Last eruption approximately 1,300 years ago.'
        },
        
        climbing: {
            firstAscent: {
                date: 'February 26, 1937',
                climbers: ['Jan Alfred Szczepański', 'Justyn Wojsznis'],
                route: 'Chilean Route',
                expedition: 'Polish climbers during expedition to Andes. Previously thought unclimbed but Incan artifacts suggest pre-Columbian ascents.'
            },
            totalAscents: 800,
            fatalities: 8,
            successRate: '70%',
            bestSeason: 'December to March',
            difficulty: 'PD (non-technical)',
            routes: [
                { name: 'Normal Route (Chilean)', country: 'Chile', difficulty: 'PD', description: 'Non-technical scree and rock scramble, altitude is main challenge' },
                { name: 'Argentine Route', country: 'Argentina', difficulty: 'PD', description: 'Longer approach but less steep, via Laguna Verde' },
                { name: 'Direct Route', country: 'Chile', difficulty: 'AD', description: 'Steeper variation with some scrambling' },
                { name: 'East Face', country: 'Argentina', difficulty: 'D', description: 'More technical, seldom climbed' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-45°C',
            summerHigh: '-10°C',
            snowfall: 'Minimal - extreme aridity, driest mountains on Earth',
            winds: 'Severe high-altitude winds common',
            deathZone: 'Near death zone altitude, extreme hypoxia'
        },
        
        glaciers: [
            { name: 'Summit Ice Patches', length: '0.5 km', description: 'Small permanent ice fields near summit, rarely seen at this latitude' }
        ],
        
        baseCamps: [
            { name: 'Atacama Base Camp', elevation: 4500, country: 'Chile', coordinates: [-27.0500, -68.6000] },
            { name: 'Refugio Tejos', elevation: 5830, country: 'Chile', coordinates: [-27.0833, -68.5500] },
            { name: 'Refugio Universidad de Atacama', elevation: 5260, country: 'Chile', coordinates: [-27.0667, -68.5667] }
        ],
        
        nearbyPeaks: [
            { name: 'Cerro Solo', elevation: 6205, coordinates: [-27.1333, -68.5833] },
            { name: 'Nevado Tres Cruces', elevation: 6758, coordinates: [-27.0833, -68.7833] },
            { name: 'Cerro El Muerto', elevation: 6488, coordinates: [-27.0333, -68.4833] },
            { name: 'Nevado de Cachi', elevation: 6380, coordinates: [-24.8000, -66.4833] }
        ],
        
        nearbyCities: [
            { name: 'Copiapó', coordinates: [-27.3667, -70.3333], country: 'Chile', population: 160000 },
            { name: 'Fiambalá', coordinates: [-27.6833, -67.6167], country: 'Argentina', population: 5000 },
            { name: 'Tinogasta', coordinates: [-28.0667, -67.5667], country: 'Argentina', population: 15000 },
            { name: 'San Fernando del Valle de Catamarca', coordinates: [-28.4696, -65.7852], country: 'Argentina', population: 170000 }
        ],
        
        flora: ['Llareta', 'Tola', 'High Altitude Lichens', 'Yareta Cushion Plants', 'Puna Grass'],
        fauna: ['Vicuña', 'Guanaco', 'Andean Fox', 'Viscacha', 'Andean Condor', 'Puna Rhea'],
        
        economicImportance: [
            { label: 'Mining Region', value: 'Area rich in copper, gold, and lithium deposits' },
            { label: 'Expedition Tourism', value: 'Growing destination for high-altitude mountaineers' },
            { label: 'Scientific Research', value: 'High altitude and aridity attract astrobiology studies' },
            { label: 'Altitude Records', value: 'Site of various altitude driving and cycling records' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Impact', value: 'Mining exploration threatening pristine environment' },
            { label: 'Climate Change', value: 'Rare summit ice increasingly threatened' },
            { label: 'Water Scarcity', value: 'Extremely limited water resources in region' }
        ],
        
        conservation: [
            { label: 'Nevado Tres Cruces NP', value: 'Nearby national park protects similar ecosystems' },
            { label: 'Border Protection', value: 'Remote location provides natural protection' },
            { label: 'Research Value', value: 'Protected as extreme environment research site' }
        ],
        
        historicalImportance: [
            { label: 'Incan Presence', value: 'Artifacts suggest Incas reached summit for ceremonies' },
            { label: 'Highest Volcano', value: 'Confirmed as highest volcano on Earth' },
            { label: 'Polish Exploration', value: 'Polish expeditions pioneered climbing in region' },
            { label: 'Driving Records', value: 'Vehicles driven to 6,688m on slopes' }
        ],
        
        records: [
            { record: 'Highest Volcano', value: 'At 6,893m, highest active volcano on Earth' },
            { record: 'Highest Crater Lake', value: 'Crater lake at 6,390m, second highest in world' },
            { record: 'Vehicle Altitude Record', value: 'Jeep driven to 6,688m in 2007' },
            { record: 'Driest Major Peak', value: 'Among driest high mountains on Earth' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 48. Monte Pissis
    {
        id: 'monte-pissis',
        name: 'Monte Pissis',
        localNames: [
            { language: 'Spanish', name: 'Monte Pissis' }
        ],
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Puna de Atacama',
        elevation: 6795,
        prominence: 1947,
        isolation: 119,
        coordinates: [-27.7567, -68.7989],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Extinct Stratovolcano',
            age: '5-10 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Formed through subduction volcanism during Miocene epoch. Now extinct with heavily eroded crater. Multiple summit peaks across long ridge system.'
        },
        
        climbing: {
            firstAscent: {
                date: 'February 1937',
                climbers: ['Polish Expedition Team'],
                route: 'South Route',
                expedition: 'Same Polish expedition that climbed Ojos del Salado. Mountain was relatively unknown until then.'
            },
            totalAscents: 200,
            fatalities: 3,
            successRate: '65%',
            bestSeason: 'December to March',
            difficulty: 'PD (non-technical)',
            routes: [
                { name: 'Normal Route (South)', country: 'Argentina', difficulty: 'PD', description: 'Long approach through arid landscape, altitude main challenge' },
                { name: 'Northwest Route', country: 'Argentina', difficulty: 'PD', description: 'Alternative approach with different scenery' },
                { name: 'East Ridge', country: 'Argentina', difficulty: 'AD', description: 'More technical option with some scrambling' }
            ]
        },
        
        climate: {
            summitTemperature: '-22°C average',
            winterLow: '-40°C',
            summerHigh: '-8°C',
            snowfall: 'Very light - extreme aridity',
            winds: 'Strong westerly winds common',
            deathZone: 'Near death zone, significant altitude challenges'
        },
        
        glaciers: [
            { name: 'Summit Snowfields', length: '1 km', description: 'Seasonal snow patches, no permanent glaciers' }
        ],
        
        baseCamps: [
            { name: 'Base Camp', elevation: 4200, country: 'Argentina', coordinates: [-27.7000, -68.8500] },
            { name: 'High Camp', elevation: 5500, country: 'Argentina', coordinates: [-27.7333, -68.8167] }
        ],
        
        nearbyPeaks: [
            { name: 'Cerro Bonete Chico', elevation: 6759, coordinates: [-28.0333, -68.7667] },
            { name: 'Nevado Ojos del Salado', elevation: 6893, coordinates: [-27.1097, -68.5417] },
            { name: 'Cerro de los Patos', elevation: 6239, coordinates: [-27.9000, -68.8500] }
        ],
        
        nearbyCities: [
            { name: 'Fiambalá', coordinates: [-27.6833, -67.6167], country: 'Argentina', population: 5000 },
            { name: 'Tinogasta', coordinates: [-28.0667, -67.5667], country: 'Argentina', population: 15000 },
            { name: 'Copiapó', coordinates: [-27.3667, -70.3333], country: 'Chile', population: 160000 },
            { name: 'La Rioja', coordinates: [-29.4111, -66.8508], country: 'Argentina', population: 180000 }
        ],
        
        flora: ['Llareta', 'Puna Grass', 'Yareta', 'High Altitude Lichens', 'Tola Bush'],
        fauna: ['Vicuña', 'Guanaco', 'Andean Condor', 'Viscacha', 'Puna Flamingo', 'Andean Fox'],
        
        economicImportance: [
            { label: 'Remote Expedition', value: 'Attracts adventurous mountaineers seeking solitude' },
            { label: 'Mining Potential', value: 'Region has mineral exploration interest' },
            { label: 'Scientific Interest', value: 'Extreme environment research site' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Threats', value: 'Potential mining development in region' },
            { label: 'Climate Change', value: 'Reduction in seasonal snow coverage' },
            { label: 'Access Impact', value: 'Improved road access increasing human presence' }
        ],
        
        conservation: [
            { label: 'Remote Location', value: 'Isolation provides natural protection' },
            { label: 'Limited Access', value: 'Difficult approach restricts visitation' },
            { label: 'Provincial Protection', value: 'Some protective measures by Catamarca province' }
        ],
        
        historicalImportance: [
            { label: 'Late Discovery', value: 'Height not accurately measured until late 20th century' },
            { label: 'Name Origin', value: 'Named for French geographer Pedro José Amadeo Pissis' },
            { label: 'Height Controversy', value: 'Was once thought to be tallest in Americas' }
        ],
        
        records: [
            { record: 'Third Highest Americas', value: 'Third highest peak in Western Hemisphere' },
            { record: 'Highest in Argentina', value: 'Second highest peak entirely within Argentina' },
            { record: 'Remotest 6000er', value: 'Among most remote 6000m+ peaks' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 49. Huascarán
    {
        id: 'huascaran',
        name: 'Huascarán',
        localNames: [
            { language: 'Quechua', name: 'Mataraju' },
            { language: 'Spanish', name: 'Huascarán' }
        ],
        countries: [
            { name: 'Peru', code: 'PE' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Blanca',
        elevation: 6768,
        prominence: 2776,
        isolation: 260,
        coordinates: [-9.1222, -77.6047],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80',
        
        formation: {
            type: 'Granite Batholith / Glaciated Peak',
            age: '8-10 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Part of Cordillera Blanca batholith, formed by magma intrusion. Heavy glaciation carved dramatic faces and created two distinct summits. Sits above active subduction zone causing frequent earthquakes.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 20, 1932',
                climbers: ['Philipp Borchers', 'Wilhelm Bernard', 'Erwin Hein', 'Herman Hoerlin'],
                route: 'Garganta Col (Normal Route)',
                expedition: 'German-Austrian expedition via col between north and south summits. North peak climbed 1908 by Annie Peck.'
            },
            totalAscents: 3000,
            fatalities: 100,
            successRate: '55%',
            bestSeason: 'June to September',
            difficulty: 'PD+ to D',
            routes: [
                { name: 'Normal Route (Garganta)', country: 'Peru', difficulty: 'PD+', description: 'Via col between peaks, crevassed glacier, serac danger' },
                { name: 'Shield Route (West Face)', country: 'Peru', difficulty: 'TD', description: 'Technical ice face, serious undertaking' },
                { name: 'French Direct', country: 'Peru', difficulty: 'ED', description: 'Steep ice and mixed climbing on west face' },
                { name: 'East Ridge', country: 'Peru', difficulty: 'D', description: 'Long ridge traverse from Chopicalqui' }
            ]
        },
        
        climate: {
            summitTemperature: '-20°C average',
            winterLow: '-35°C',
            summerHigh: '-5°C',
            snowfall: 'Moderate to heavy, tropical glacier system',
            winds: 'Generally moderate but can be severe',
            deathZone: 'Near death zone altitude'
        },
        
        glaciers: [
            { name: 'Glacier 513', length: '2 km', description: 'West side glacier, source of 2010 avalanche' },
            { name: 'Garganta Glacier', length: '3 km', description: 'Between north and south peaks, heavily crevassed' },
            { name: 'Llanganuco Glacier', length: '4 km', description: 'Eastern drainage toward famous lakes' }
        ],
        
        baseCamps: [
            { name: 'Base Camp Musho', elevation: 4300, country: 'Peru', coordinates: [-9.0833, -77.6167] },
            { name: 'High Camp (Campo 2)', elevation: 5900, country: 'Peru', coordinates: [-9.1083, -77.6083] },
            { name: 'Camp Garganta', elevation: 6000, country: 'Peru', coordinates: [-9.1167, -77.6000] }
        ],
        
        nearbyPeaks: [
            { name: 'Huascarán Norte', elevation: 6655, coordinates: [-9.1000, -77.6083] },
            { name: 'Chopicalqui', elevation: 6354, coordinates: [-9.0750, -77.5667] },
            { name: 'Copa', elevation: 6188, coordinates: [-9.1500, -77.5583] },
            { name: 'Hualcán', elevation: 6122, coordinates: [-9.0500, -77.5250] }
        ],
        
        nearbyCities: [
            { name: 'Huaraz', coordinates: [-9.5300, -77.5328], country: 'Peru', population: 120000 },
            { name: 'Yungay', coordinates: [-9.1386, -77.7450], country: 'Peru', population: 10000 },
            { name: 'Carhuaz', coordinates: [-9.2806, -77.6447], country: 'Peru', population: 8000 },
            { name: 'Caraz', coordinates: [-9.0472, -77.8133], country: 'Peru', population: 15000 }
        ],
        
        flora: ['Puya Raimondii', 'Polylepis Forest', 'Cushion Plants', 'High Altitude Grasses', 'Andean Lupine'],
        fauna: ['Andean Condor', 'Vicuña', 'Spectacled Bear', 'Viscacha', 'Andean Fox', 'Mountain Caracara'],
        
        economicImportance: [
            { label: 'Tourism Hub', value: 'Major destination for trekkers and climbers' },
            { label: 'Water Source', value: 'Glaciers supply water to millions downstream' },
            { label: 'National Park', value: 'Huascarán NP generates significant tourism revenue' },
            { label: 'Cultural Symbol', value: 'Named after Incan emperor, national pride' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Lost 40% of glacial mass since 1970' },
            { label: 'GLOF Risk', value: 'Glacial lake outburst floods threaten valleys' },
            { label: 'Climate Vulnerability', value: 'Tropical glaciers among most threatened' },
            { label: 'Seismic Danger', value: '1970 earthquake killed 20,000 in Yungay' }
        ],
        
        conservation: [
            { label: 'National Park', value: 'Huascarán National Park established 1975' },
            { label: 'UNESCO Biosphere', value: 'World Heritage Site and Biosphere Reserve' },
            { label: 'Glacial Monitoring', value: 'Active research on glacier changes' },
            { label: 'GLOF Mitigation', value: 'Engineering projects to reduce flood risk' }
        ],
        
        historicalImportance: [
            { label: '1970 Disaster', value: 'Earthquake triggered avalanche burying Yungay, killing 20,000' },
            { label: 'Annie Peck', value: 'American mountaineer climbed north peak 1908, setting womens altitude record' },
            { label: 'Name Origin', value: 'Named after Incan Emperor Huáscar' },
            { label: 'Cordillera Blanca Symbol', value: 'Represents highest point in world tropics mountain range' }
        ],
        
        records: [
            { record: 'Highest Peru', value: 'Highest peak in Peru at 6,768m' },
            { record: 'Highest Tropics', value: 'Highest peak in the tropics' },
            { record: 'Deadliest Avalanche', value: '1970 avalanche killed over 20,000 people' },
            { record: 'Fourth Highest Americas', value: 'Fourth highest in Western Hemisphere' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 50. Llullaillaco
    {
        id: 'llullaillaco',
        name: 'Llullaillaco',
        localNames: [
            { language: 'Quechua/Aymara', name: 'Llullaillaco' },
            { language: 'Spanish', name: 'Volcán Llullaillaco' }
        ],
        countries: [
            { name: 'Chile', code: 'CL' },
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Puna de Atacama',
        elevation: 6739,
        prominence: 2442,
        isolation: 213,
        coordinates: [-24.7200, -68.5350],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano',
            age: '1-2 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Active stratovolcano formed by Nazca plate subduction. Last eruption in 1877. Features perfect volcanic cone shape. Site of important Incan ritual sacrifices, mummies found near summit in 1999.'
        },
        
        climbing: {
            firstAscent: {
                date: 'December 1, 1952',
                climbers: ['Bión González', 'Juan Harseim'],
                route: 'South Route',
                expedition: 'Chilean expedition. However, evidence suggests Incas reached summit for ceremonies around 500 years ago.'
            },
            totalAscents: 400,
            fatalities: 5,
            successRate: '65%',
            bestSeason: 'December to March',
            difficulty: 'PD (non-technical)',
            routes: [
                { name: 'South Route (Chilean)', country: 'Chile', difficulty: 'PD', description: 'Gradual approach through volcanic terrain, altitude main challenge' },
                { name: 'Southeast Route (Argentine)', country: 'Argentina', difficulty: 'PD', description: 'Alternative from Salta side with different scenery' },
                { name: 'North Route', country: 'Chile', difficulty: 'PD+', description: 'Less traveled, steeper approach' }
            ]
        },
        
        climate: {
            summitTemperature: '-25°C average',
            winterLow: '-45°C',
            summerHigh: '-10°C',
            snowfall: 'Very minimal - one of driest places on Earth',
            winds: 'Extreme high-altitude winds common',
            deathZone: 'Near death zone, extreme altitude effects'
        },
        
        glaciers: [
            { name: 'Summit Ice Cap', length: '0.3 km', description: 'Small permanent ice patch on summit crater' }
        ],
        
        baseCamps: [
            { name: 'Base Camp', elevation: 4500, country: 'Chile', coordinates: [-24.6833, -68.5833] },
            { name: 'High Camp', elevation: 5500, country: 'Chile', coordinates: [-24.7000, -68.5500] },
            { name: 'Argentine Camp', elevation: 4800, country: 'Argentina', coordinates: [-24.7500, -68.4833] }
        ],
        
        nearbyPeaks: [
            { name: 'Cerro Socompa', elevation: 6051, coordinates: [-24.4000, -68.2500] },
            { name: 'Volcán Lastarria', elevation: 5697, coordinates: [-25.1667, -68.5000] },
            { name: 'Cerro Aracar', elevation: 6095, coordinates: [-24.2833, -67.7333] }
        ],
        
        nearbyCities: [
            { name: 'San Pedro de Atacama', coordinates: [-22.9087, -68.1997], country: 'Chile', population: 5000 },
            { name: 'Antofagasta', coordinates: [-23.6500, -70.4000], country: 'Chile', population: 350000 },
            { name: 'Salta', coordinates: [-24.7821, -65.4232], country: 'Argentina', population: 620000 },
            { name: 'Calama', coordinates: [-22.4564, -68.9250], country: 'Chile', population: 180000 }
        ],
        
        flora: ['Llareta', 'Tola', 'Puna Grass', 'High Altitude Lichens', 'Yareta'],
        fauna: ['Vicuña', 'Andean Fox', 'Viscacha', 'Andean Condor', 'Puma', 'Guanaco'],
        
        economicImportance: [
            { label: 'Archaeological Site', value: 'Mummy discoveries brought international attention' },
            { label: 'Tourism', value: 'Part of Atacama Desert tourism circuit' },
            { label: 'Research Site', value: 'High altitude and dry conditions attract scientists' },
            { label: 'Mining Region', value: 'Nearby mining operations in mineral-rich area' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Impact', value: 'Regional mining affecting air and water quality' },
            { label: 'Climate Change', value: 'Summit ice patches shrinking' },
            { label: 'Access Roads', value: 'Improved access increasing human impact' }
        ],
        
        conservation: [
            { label: 'Los Flamencos Reserve', value: 'Nearby national reserve protects ecosystem' },
            { label: 'Archaeological Protection', value: 'Summit area protected as archaeological site' },
            { label: 'Border Location', value: 'Remote location provides natural protection' }
        ],
        
        historicalImportance: [
            { label: 'Children of Llullaillaco', value: '1999 discovery of three Incan child mummies near summit' },
            { label: 'Incan High Priests', value: 'Site of capacocha sacrifice ritual' },
            { label: 'Highest Archaeological Site', value: 'Mummies found at 6,739m - highest in world' },
            { label: 'Colonial History', value: 'Mentioned in Spanish colonial records' }
        ],
        
        records: [
            { record: 'Highest Archaeological Site', value: 'Incan ceremonial site at summit' },
            { record: 'Highest Preserved Mummies', value: 'Three child mummies found at 6,739m' },
            { record: 'Second Highest Active Volcano', value: 'After Ojos del Salado' },
            { record: 'Driest Major Volcano', value: 'In Atacama, driest desert on Earth' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];

// Combine both parts into final MOUNTAINS_DATA_5
const MOUNTAINS_DATA_5 = [...MOUNTAINS_DATA_5_PART_A, ...MOUNTAINS_DATA_5_PART_B];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_5 };
}

console.log('Mountains Data 5 loaded:', MOUNTAINS_DATA_5.length, 'mountains (Alps & Andes)');
