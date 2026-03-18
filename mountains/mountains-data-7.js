// mountains-data-7.js - Mountains 61-70 (North America & Africa)
// Part A: Mountains 61-64

const MOUNTAINS_DATA_7_PART_A = [
    // 61. Mount Whitney
    {
        id: 'mount-whitney',
        name: 'Mount Whitney',
        localNames: [
            { language: 'Paiute', name: 'Tumanguya' },
            { language: 'English', name: 'Mount Whitney' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Sierra Nevada',
        subRange: 'Sierra Crest',
        elevation: 4421,
        prominence: 3071,
        isolation: 1649,
        coordinates: [36.5785, -118.2923],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Granite Batholith',
            age: '90 million years',
            tectonicPlates: ['North American Plate', 'Pacific Plate'],
            process: 'Formed from massive granite intrusion during Cretaceous period. Sierra Nevada uplifted along fault line 5-10 million years ago. Glacial carving during ice ages created dramatic cirques and the distinctive summit needles.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 18, 1873',
                climbers: ['Charles Begole', 'Albert Johnson', 'John Lucas'],
                route: 'Mountaineers Route',
                expedition: 'Local fishermen from Lone Pine made first recorded ascent during summer expedition.'
            },
            totalAscents: 30000,
            fatalities: 15,
            successRate: '95%',
            bestSeason: 'June to October',
            difficulty: 'Class 1 (Trail) to Class 3 (Mountaineers Route)',
            routes: [
                { name: 'Mount Whitney Trail', country: 'USA', difficulty: 'Class 1', description: '22 miles round trip from Whitney Portal, non-technical but strenuous' },
                { name: 'Mountaineers Route', country: 'USA', difficulty: 'Class 3', description: 'North face chute, snow climbing in early season, more direct' },
                { name: 'East Face', country: 'USA', difficulty: 'Class 5', description: 'Technical rock climbing routes on east face' },
                { name: 'East Buttress', country: 'USA', difficulty: '5.7', description: 'Classic rock climb, 10 pitches' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-30°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snowfall, typically snow-free July-September',
            winds: 'Can be severe, especially in afternoon storms',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No permanent glaciers', length: 'N/A', description: 'Snow patches remain into late summer but no true glaciers' }
        ],
        
        baseCamps: [
            { name: 'Whitney Portal', elevation: 2550, country: 'USA', coordinates: [36.5867, -118.2389] },
            { name: 'Trail Camp', elevation: 3657, country: 'USA', coordinates: [36.5644, -118.2717] },
            { name: 'Iceberg Lake', elevation: 3872, country: 'USA', coordinates: [36.5717, -118.2900] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Muir', elevation: 4271, coordinates: [36.5692, -118.2889] },
            { name: 'Mount Russell', elevation: 4296, coordinates: [36.5942, -118.2864] },
            { name: 'Mount Williamson', elevation: 4390, coordinates: [36.6556, -118.3103] },
            { name: 'Mount Langley', elevation: 4275, coordinates: [36.5217, -118.2394] }
        ],
        
        nearbyCities: [
            { name: 'Lone Pine', coordinates: [36.6061, -118.0628], country: 'USA', population: 2000 },
            { name: 'Independence', coordinates: [36.8027, -118.2001], country: 'USA', population: 670 },
            { name: 'Bishop', coordinates: [37.3636, -118.3951], country: 'USA', population: 3800 },
            { name: 'Ridgecrest', coordinates: [35.6225, -117.6709], country: 'USA', population: 28000 }
        ],
        
        flora: ['Foxtail Pine', 'Limber Pine', 'Alpine Willow', 'Sky Pilot', 'Polemonium', 'Alpine Gold'],
        fauna: ['Bighorn Sheep', 'Marmot', 'Pika', 'Clark Nutcracker', 'Golden Eagle', 'White-tailed Jackrabbit'],
        
        economicImportance: [
            { label: 'Highest Contiguous USA', value: 'Major hiking destination, thousands of permits annually' },
            { label: 'Tourism Economy', value: 'Lone Pine economy heavily dependent on Whitney visitors' },
            { label: 'John Muir Trail', value: 'Terminus of famous 211-mile trail' },
            { label: 'Film Location', value: 'Alabama Hills nearby used in hundreds of films' }
        ],
        
        environmentalIssues: [
            { label: 'Human Waste', value: 'Pack-out waste system required due to impact' },
            { label: 'Trail Erosion', value: 'Heavy use causing trail degradation' },
            { label: 'Crowding', value: 'Permit system needed to manage overuse' },
            { label: 'Climate Change', value: 'Earlier snowmelt affecting water sources' }
        ],
        
        conservation: [
            { label: 'Inyo National Forest', value: 'Managed by US Forest Service' },
            { label: 'Wilderness Designation', value: 'Part of John Muir Wilderness' },
            { label: 'Permit System', value: 'Day-use and overnight permits limit impact' },
            { label: 'Pack-Out Policy', value: 'Human waste must be carried out' }
        ],
        
        historicalImportance: [
            { label: 'Named for Josiah Whitney', value: 'California State Geologist' },
            { label: 'Height Rivalry', value: 'Long thought to be highest in USA' },
            { label: 'John Muir', value: 'Naturalist extensively explored region' },
            { label: 'Shelter Built 1909', value: 'Historic stone shelter on summit' }
        ],
        
        records: [
            { record: 'Highest Contiguous USA', value: 'At 4,421m, highest in Lower 48 states' },
            { record: 'Most Summited 14er', value: 'Most climbed peak over 14,000 feet in USA' },
            { record: 'John Muir Trail Terminus', value: 'End point of famous 211-mile trail' },
            { record: 'Lowest to Highest', value: '84 miles from Badwater (lowest USA) to summit' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 62. Mount Elbert
    {
        id: 'mount-elbert',
        name: 'Mount Elbert',
        localNames: [
            { language: 'Ute', name: 'Unknown traditional name' },
            { language: 'English', name: 'Mount Elbert' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Rocky Mountains',
        subRange: 'Sawatch Range',
        elevation: 4401,
        prominence: 2765,
        isolation: 677,
        coordinates: [39.1178, -106.4454],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fault-Block Mountain',
            age: '30-70 million years',
            tectonicPlates: ['North American Plate'],
            process: 'Formed during Laramide orogeny when ancient basement rock was thrust upward. Composed of Precambrian metamorphic rock over 1.7 billion years old. Glacial erosion shaped current profile.'
        },
        
        climbing: {
            firstAscent: {
                date: '1874',
                climbers: ['Henry W. Stuckle', 'Survey Party'],
                route: 'South Approach',
                expedition: 'Hayden Survey party during geographic survey of Colorado.'
            },
            totalAscents: 25000,
            fatalities: 5,
            successRate: '98%',
            bestSeason: 'June to October',
            difficulty: 'Class 1 (Trail hiking)',
            routes: [
                { name: 'North Elbert Trail', country: 'USA', difficulty: 'Class 1', description: 'Most popular, 9 miles round trip, 4,400 feet elevation gain' },
                { name: 'South Elbert Trail', country: 'USA', difficulty: 'Class 1', description: 'Slightly longer, less crowded alternative' },
                { name: 'Black Cloud Trail', country: 'USA', difficulty: 'Class 1', description: 'Steepest route, most direct from southeast' },
                { name: 'East Ridge', country: 'USA', difficulty: 'Class 2', description: 'Off-trail variation with scrambling' }
            ]
        },
        
        climate: {
            summitTemperature: '-3°C average',
            winterLow: '-30°C',
            summerHigh: '12°C',
            snowfall: 'Heavy winter snow, typically climbable June-October',
            winds: 'Afternoon thunderstorms common, can be severe',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Some permanent snowfields but no true glaciers' }
        ],
        
        baseCamps: [
            { name: 'North Elbert Trailhead', elevation: 3109, country: 'USA', coordinates: [39.1456, -106.4117] },
            { name: 'South Elbert Trailhead', elevation: 3049, country: 'USA', coordinates: [39.0983, -106.4250] },
            { name: 'Halfmoon Campground', elevation: 3048, country: 'USA', coordinates: [39.1450, -106.4067] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Massive', elevation: 4395, coordinates: [39.1875, -106.4756] },
            { name: 'La Plata Peak', elevation: 4370, coordinates: [39.0297, -106.4731] },
            { name: 'Huron Peak', elevation: 4268, coordinates: [38.9453, -106.4381] },
            { name: 'Mount Oxford', elevation: 4260, coordinates: [38.9647, -106.3867] }
        ],
        
        nearbyCities: [
            { name: 'Leadville', coordinates: [39.2508, -106.2925], country: 'USA', population: 2600 },
            { name: 'Buena Vista', coordinates: [38.8422, -106.1311], country: 'USA', population: 2900 },
            { name: 'Aspen', coordinates: [39.1911, -106.8175], country: 'USA', population: 7000 },
            { name: 'Denver', coordinates: [39.7392, -104.9903], country: 'USA', population: 715000 }
        ],
        
        flora: ['Bristlecone Pine', 'Engelmann Spruce', 'Alpine Avens', 'Moss Campion', 'Alpine Clover', 'Old Man of the Mountain'],
        fauna: ['Elk', 'Mule Deer', 'Mountain Goat', 'Marmot', 'Pika', 'Ptarmigan', 'Black Bear'],
        
        economicImportance: [
            { label: 'Highest Rocky Mountains', value: 'Draws peak baggers seeking Colorado highpoint' },
            { label: '14er Tourism', value: 'Part of Colorados 58 fourteeners attracting thousands' },
            { label: 'Leadville Economy', value: 'Mountain tourism supports local businesses' },
            { label: 'Leadville Trail 100', value: 'Famous ultramarathon passes nearby' }
        ],
        
        environmentalIssues: [
            { label: 'Trail Erosion', value: 'Heavy use causing significant trail damage' },
            { label: 'Crowding', value: 'Summit congestion on popular weekends' },
            { label: 'Human Waste', value: 'Increasing problem with high traffic' },
            { label: 'Lightning Deaths', value: 'Afternoon storms pose serious risk' }
        ],
        
        conservation: [
            { label: 'San Isabel National Forest', value: 'Managed by US Forest Service' },
            { label: 'Mount Massive Wilderness', value: 'Adjacent wilderness protection' },
            { label: 'Colorado Fourteeners Initiative', value: 'Trail maintenance and education' },
            { label: 'Leave No Trace', value: 'Active education campaigns' }
        ],
        
        historicalImportance: [
            { label: 'Named for Samuel Elbert', value: 'Colorado territorial governor' },
            { label: 'Mining Era', value: 'Leadville silver boom brought attention to area' },
            { label: 'Survey History', value: 'Mapped during Hayden Survey 1874' },
            { label: 'Height Disputes', value: 'Rivalry with Mount Massive over which is higher' }
        ],
        
        records: [
            { record: 'Highest Rocky Mountains', value: 'At 4,401m, highest peak in entire Rocky Mountains' },
            { record: 'Highest Colorado', value: 'Highest point in Colorado' },
            { record: 'Second Highest Contiguous USA', value: 'Second only to Mount Whitney' },
            { record: 'Most Accessible 14er', value: 'Considered easiest to climb of Colorados highest' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 63. Mount Rainier
    {
        id: 'mount-rainier',
        name: 'Mount Rainier',
        localNames: [
            { language: 'Puyallup', name: 'Tahoma' },
            { language: 'Lushootseed', name: 'Tacoma' },
            { language: 'English', name: 'Mount Rainier' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Cascade Range',
        subRange: 'Cascade Volcanic Arc',
        elevation: 4392,
        prominence: 4027,
        isolation: 1029,
        coordinates: [46.8528, -121.7604],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: '500,000 years',
            tectonicPlates: ['Juan de Fuca Plate', 'North American Plate'],
            process: 'Formed by subduction of Juan de Fuca Plate. Built from alternating lava flows and pyroclastic deposits. Last eruption approximately 1,000 years ago. Significant lahar hazard threatens Puget Sound lowlands.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 17, 1870',
                climbers: ['Hazard Stevens', 'Philemon Van Trump'],
                route: 'Gibraltar Ledges',
                expedition: 'First documented summit with local guide Sluiskin.'
            },
            totalAscents: 10000,
            fatalities: 400,
            successRate: '50%',
            bestSeason: 'May to September',
            difficulty: 'Grade II-III',
            routes: [
                { name: 'Disappointment Cleaver', country: 'USA', difficulty: 'Grade II', description: 'Most popular route, glacier travel, crevasse danger' },
                { name: 'Emmons Glacier', country: 'USA', difficulty: 'Grade II', description: 'Longer approach, less crowded, largest glacier route' },
                { name: 'Liberty Ridge', country: 'USA', difficulty: 'Grade IV', description: 'Classic alpine route, serious commitment' },
                { name: 'Kautz Glacier', country: 'USA', difficulty: 'Grade III', description: 'Ice climbing, technical glacier route' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'World record snowfall area, over 15 meters annually',
            winds: 'Severe storms, rapid weather changes',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Emmons Glacier', length: '7.5 km', description: 'Largest glacier in contiguous USA by area' },
            { name: 'Carbon Glacier', length: '8.5 km', description: 'Largest by volume in contiguous USA' },
            { name: 'Nisqually Glacier', length: '6 km', description: 'Most studied glacier in North America' },
            { name: 'Ingraham Glacier', length: '3 km', description: 'Disappointment Cleaver route glacier' },
            { name: 'Cowlitz Glacier', length: '4 km', description: 'Southeast side glacier' }
        ],
        
        baseCamps: [
            { name: 'Paradise', elevation: 1647, country: 'USA', coordinates: [46.7865, -121.7353] },
            { name: 'Camp Muir', elevation: 3073, country: 'USA', coordinates: [46.8353, -121.7331] },
            { name: 'Camp Schurman', elevation: 2758, country: 'USA', coordinates: [46.8750, -121.7083] },
            { name: 'White River Campground', elevation: 1341, country: 'USA', coordinates: [46.9000, -121.6417] }
        ],
        
        nearbyPeaks: [
            { name: 'Little Tahoma', elevation: 3395, coordinates: [46.8500, -121.7250] },
            { name: 'Mount Adams', elevation: 3742, coordinates: [46.2024, -121.4909] },
            { name: 'Mount St. Helens', elevation: 2549, coordinates: [46.1914, -122.1956] },
            { name: 'Mount Hood', elevation: 3429, coordinates: [45.3735, -121.6959] }
        ],
        
        nearbyCities: [
            { name: 'Tacoma', coordinates: [47.2529, -122.4443], country: 'USA', population: 220000 },
            { name: 'Seattle', coordinates: [47.6062, -122.3321], country: 'USA', population: 750000 },
            { name: 'Olympia', coordinates: [47.0379, -122.9007], country: 'USA', population: 55000 },
            { name: 'Yakima', coordinates: [46.6021, -120.5059], country: 'USA', population: 95000 }
        ],
        
        flora: ['Subalpine Fir', 'Mountain Hemlock', 'Avalanche Lily', 'Lupine', 'Indian Paintbrush', 'Bears Grass'],
        fauna: ['Black Bear', 'Mountain Goat', 'Elk', 'Marmot', 'Pika', 'Gray Jay', 'Golden Eagle'],
        
        economicImportance: [
            { label: 'Iconic Northwest Symbol', value: 'Dominates Seattle skyline, major tourism draw' },
            { label: 'National Park Tourism', value: 'Over 2 million visitors annually' },
            { label: 'Mountaineering School', value: 'Training ground for Himalayan expeditions' },
            { label: 'Climbing Industry', value: 'Guide services generate millions annually' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Hazard', value: 'Major lahar threat to populated valleys' },
            { label: 'Glacial Retreat', value: 'Glaciers losing significant mass' },
            { label: 'Crowding', value: 'Popular routes congested in summer' },
            { label: 'Climate Change', value: 'Changing conditions affecting routes' }
        ],
        
        conservation: [
            { label: 'Mount Rainier National Park', value: 'Protected since 1899, fifth US national park' },
            { label: 'Wilderness Areas', value: 'Large wilderness zones within park' },
            { label: 'Research Station', value: 'Active volcanic and glacial monitoring' },
            { label: 'Climbing Rangers', value: 'Dedicated climbing rangers manage routes' }
        ],
        
        historicalImportance: [
            { label: 'Named 1792', value: 'George Vancouver named it for Rear Admiral Peter Rainier' },
            { label: 'Native Sacred Site', value: 'Sacred to multiple Native American tribes' },
            { label: 'Early National Park', value: 'Fifth national park established (1899)' },
            { label: 'Mountaineering History', value: 'Pioneer of American mountaineering' }
        ],
        
        records: [
            { record: 'Most Glaciated Peak', value: 'Most glaciated peak in contiguous USA (25 named glaciers)' },
            { record: 'World Record Snow', value: 'Paradise holds record for most snow in season (28.5m)' },
            { record: 'Largest Volcano USA', value: 'Most massive volcano in Cascade Range' },
            { record: 'Most Dangerous', value: 'Considered most dangerous volcano in USA' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 64. Longs Peak
    {
        id: 'longs-peak',
        name: 'Longs Peak',
        localNames: [
            { language: 'Arapaho', name: 'Nesotaieux' },
            { language: 'English', name: 'Longs Peak' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Rocky Mountains',
        subRange: 'Front Range',
        elevation: 4346,
        prominence: 1472,
        isolation: 93,
        coordinates: [40.2549, -105.6157],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80',
        
        formation: {
            type: 'Granite Batholith',
            age: '1.4 billion years (rock), 40-70 million years (uplift)',
            tectonicPlates: ['North American Plate'],
            process: 'Composed of Silver Plume granite formed in Precambrian. Uplifted during Laramide orogeny. Glacial carving created the dramatic Diamond face and cirques. Distinctive flat summit visible from Great Plains.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 23, 1868',
                climbers: ['John Wesley Powell', 'William Byers', 'Ned Farrell', 'Lewis Keplinger', 'Samuel Garman', 'John Sumner', 'William Powell'],
                route: 'Keyhole Route',
                expedition: 'Powell expedition, one-armed Civil War veteran who later explored Grand Canyon.'
            },
            totalAscents: 15000,
            fatalities: 65,
            successRate: '60%',
            bestSeason: 'July to September',
            difficulty: 'Class 3 to Class 5.14',
            routes: [
                { name: 'Keyhole Route', country: 'USA', difficulty: 'Class 3', description: 'Standard route, exposed scrambling, 15 miles round trip' },
                { name: 'Loft Route', country: 'USA', difficulty: 'Class 3', description: 'Alternative via Loft couloir' },
                { name: 'Diamond (Casual Route)', country: 'USA', difficulty: '5.10', description: 'Classic big wall climb on east face' },
                { name: 'Kieners Route', country: 'USA', difficulty: 'Class 5', description: 'Mixed ice and rock route' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-35°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snow, summit often snow-covered',
            winds: 'Severe winds common, afternoon thunderstorms frequent',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Mills Glacier', length: '0.5 km', description: 'Small glacier below Diamond face' },
            { name: 'Andrews Glacier', length: '0.3 km', description: 'Remnant glacier in nearby cirque' }
        ],
        
        baseCamps: [
            { name: 'Longs Peak Trailhead', elevation: 2896, country: 'USA', coordinates: [40.2719, -105.5567] },
            { name: 'Chasm Lake', elevation: 3524, country: 'USA', coordinates: [40.2517, -105.6000] },
            { name: 'Boulder Field', elevation: 3823, country: 'USA', coordinates: [40.2567, -105.6083] },
            { name: 'The Keyhole', elevation: 4024, country: 'USA', coordinates: [40.2553, -105.6150] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Meeker', elevation: 4241, coordinates: [40.2439, -105.6044] },
            { name: 'Chiefs Head Peak', elevation: 4117, coordinates: [40.2278, -105.6247] },
            { name: 'Pagoda Mountain', elevation: 4079, coordinates: [40.2289, -105.6119] },
            { name: 'Mount Lady Washington', elevation: 4022, coordinates: [40.2617, -105.5992] }
        ],
        
        nearbyCities: [
            { name: 'Estes Park', coordinates: [40.3772, -105.5217], country: 'USA', population: 6300 },
            { name: 'Boulder', coordinates: [40.0150, -105.2705], country: 'USA', population: 105000 },
            { name: 'Longmont', coordinates: [40.1672, -105.1019], country: 'USA', population: 98000 },
            { name: 'Denver', coordinates: [39.7392, -104.9903], country: 'USA', population: 715000 }
        ],
        
        flora: ['Engelmann Spruce', 'Limber Pine', 'Alpine Avens', 'Moss Campion', 'Alpine Sunflower', 'Krummholz'],
        fauna: ['Bighorn Sheep', 'Elk', 'Marmot', 'Pika', 'Ptarmigan', 'Golden Eagle', 'Mountain Lion'],
        
        economicImportance: [
            { label: 'Rocky Mountain NP Icon', value: 'Most recognizable peak, drives park visitation' },
            { label: 'Technical Climbing', value: 'Diamond is world-class big wall destination' },
            { label: 'Colorado Symbol', value: 'Featured on state quarter' },
            { label: 'Estes Park Tourism', value: 'Major economic driver for gateway town' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Keyhole route severely congested in summer' },
            { label: 'Human Waste', value: 'Pack-out requirements implemented' },
            { label: 'Trail Damage', value: 'Erosion from heavy use' },
            { label: 'Search and Rescue', value: 'Frequent rescues strain resources' }
        ],
        
        conservation: [
            { label: 'Rocky Mountain National Park', value: 'Protected since 1915' },
            { label: 'Wilderness Area', value: 'Part of designated wilderness' },
            { label: 'Permit System', value: 'Summer camping permits required' },
            { label: 'Ranger Patrols', value: 'Active ranger presence on route' }
        ],
        
        historicalImportance: [
            { label: 'Named for Stephen Long', value: 'Explorer who first sighted peak in 1820' },
            { label: 'Powell Ascent', value: 'John Wesley Powell led first ascent' },
            { label: 'Enos Mills', value: 'Naturalist advocated for national park' },
            { label: 'Diamond History', value: 'First climbed 1960, changed American big wall climbing' }
        ],
        
        records: [
            { record: 'Most Deaths Any 14er', value: 'Deadliest Colorado fourteener with 65+ deaths' },
            { record: 'The Diamond', value: 'Iconic 300m vertical east face' },
            { record: 'Colorado Quarter', value: 'Featured on Colorado state quarter' },
            { record: 'Most Recognizable', value: 'Most recognized peak in Rocky Mountain NP' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-7.js - Part B: Mountains 65-67

const MOUNTAINS_DATA_7_PART_B = [
    // 65. Mount Shasta
    {
        id: 'mount-shasta',
        name: 'Mount Shasta',
        localNames: [
            { language: 'Karuk', name: 'Úytaahkoo' },
            { language: 'Wintu', name: 'Bohem Puyuik' },
            { language: 'English', name: 'Mount Shasta' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Cascade Range',
        subRange: 'Cascade Volcanic Arc',
        elevation: 4322,
        prominence: 2924,
        isolation: 294,
        coordinates: [41.4092, -122.1949],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Potentially Active)',
            age: '593,000 years',
            tectonicPlates: ['Juan de Fuca Plate', 'North American Plate'],
            process: 'Formed by subduction volcanism. Complex volcano with four overlapping cones. Shastina, satellite cone, is itself a large volcano. Last eruption approximately 1250 AD. Considered one of most likely Cascades volcanoes to erupt.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 14, 1854',
                climbers: ['Elias Pearce', 'Captain E.D. Pierce'],
                route: 'Hotlum-Bolam Route or Avalanche Gulch',
                expedition: 'Pioneer climbers during California settlement era.'
            },
            totalAscents: 15000,
            fatalities: 30,
            successRate: '75%',
            bestSeason: 'May to July',
            difficulty: 'Grade II',
            routes: [
                { name: 'Avalanche Gulch', country: 'USA', difficulty: 'Class 3', description: 'Most popular route, steep snow climbing, rockfall hazard' },
                { name: 'Clear Creek', country: 'USA', difficulty: 'Class 3', description: 'Alternative with less traffic' },
                { name: 'Hotlum-Bolam Ridge', country: 'USA', difficulty: 'Class 3', description: 'North side route, more remote' },
                { name: 'Casaval Ridge', country: 'USA', difficulty: 'Class 4', description: 'Technical ridge climb' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-35°C',
            summerHigh: '5°C',
            snowfall: 'Heavy snowfall, glaciers sustained year-round',
            winds: 'Severe, lenticular clouds indicate high winds',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Whitney Glacier', length: '3 km', description: 'Largest glacier in California' },
            { name: 'Hotlum Glacier', length: '2.5 km', description: 'Second largest, north side' },
            { name: 'Bolam Glacier', length: '2 km', description: 'Northwest side glacier' },
            { name: 'Wintun Glacier', length: '1.5 km', description: 'East side glacier' },
            { name: 'Konwakiton Glacier', length: '1 km', description: 'South side glacier' }
        ],
        
        baseCamps: [
            { name: 'Bunny Flat Trailhead', elevation: 2070, country: 'USA', coordinates: [41.3550, -122.2333] },
            { name: 'Horse Camp (Sierra Club)', elevation: 2438, country: 'USA', coordinates: [41.3633, -122.2200] },
            { name: 'Helen Lake Camp', elevation: 3169, country: 'USA', coordinates: [41.3833, -122.2000] },
            { name: 'Clear Creek Trailhead', elevation: 1981, country: 'USA', coordinates: [41.4167, -122.1167] }
        ],
        
        nearbyPeaks: [
            { name: 'Shastina', elevation: 3758, coordinates: [41.4133, -122.2250] },
            { name: 'Black Butte', elevation: 1951, coordinates: [41.3592, -122.3450] },
            { name: 'Mount Eddy', elevation: 2751, coordinates: [41.3183, -122.4833] },
            { name: 'Lassen Peak', elevation: 3187, coordinates: [40.4882, -121.5050] }
        ],
        
        nearbyCities: [
            { name: 'Mount Shasta City', coordinates: [41.3099, -122.3106], country: 'USA', population: 3300 },
            { name: 'Dunsmuir', coordinates: [41.2082, -122.2719], country: 'USA', population: 1700 },
            { name: 'Weed', coordinates: [41.4227, -122.3864], country: 'USA', population: 2900 },
            { name: 'Redding', coordinates: [40.5865, -122.3917], country: 'USA', population: 92000 }
        ],
        
        flora: ['Shasta Red Fir', 'Mountain Hemlock', 'Whitebark Pine', 'Shasta Lily', 'Alpine Buckwheat', 'Phlox'],
        fauna: ['Black Bear', 'Mountain Lion', 'Marten', 'Pika', 'Gray Jay', 'Blue Grouse', 'Golden Eagle'],
        
        economicImportance: [
            { label: 'Spiritual Tourism', value: 'New Age spiritual center, vortex beliefs draw visitors' },
            { label: 'Mountaineering', value: 'Most climbed glacier peak in California' },
            { label: 'Ski Tourism', value: 'Backcountry skiing destination' },
            { label: 'Water Source', value: 'Springs supply water to surrounding areas' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Glaciers shrinking significantly' },
            { label: 'Volcanic Hazard', value: 'Potential for eruption and lahars' },
            { label: 'Overuse', value: 'Popular routes showing wear' },
            { label: 'Human Waste', value: 'Pack-out system implemented' }
        ],
        
        conservation: [
            { label: 'Shasta-Trinity National Forest', value: 'Managed by US Forest Service' },
            { label: 'Mount Shasta Wilderness', value: 'Designated wilderness since 1984' },
            { label: 'Climbing Permits', value: 'Summit passes required' },
            { label: 'Pack-Out Requirements', value: 'Human waste must be carried out' }
        ],
        
        historicalImportance: [
            { label: 'Native Sacred Site', value: 'Sacred to multiple tribes including Wintu and Shasta' },
            { label: 'Lemuria Legends', value: 'New Age beliefs about hidden civilization' },
            { label: 'John Muir', value: 'Wrote extensively about Shasta' },
            { label: 'Early Exploration', value: 'Major landmark for California pioneers' }
        ],
        
        records: [
            { record: 'Largest Volcanic Cone', value: 'Largest stratovolcano by volume in Cascades' },
            { record: 'Californias Largest Glaciers', value: 'Whitney Glacier largest in state' },
            { record: 'Most Prominent California', value: 'Most prominent peak in California' },
            { record: 'Spiritual Significance', value: 'Considered one of worlds spiritual power spots' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 66. Grand Teton
    {
        id: 'grand-teton',
        name: 'Grand Teton',
        localNames: [
            { language: 'Shoshone', name: 'Teewinot' },
            { language: 'French', name: 'Les Trois Tétons' },
            { language: 'English', name: 'Grand Teton' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Rocky Mountains',
        subRange: 'Teton Range',
        elevation: 4199,
        prominence: 1996,
        isolation: 118,
        coordinates: [43.7413, -110.8024],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&q=80',
        
        formation: {
            type: 'Fault-Block Mountain',
            age: '2.5 billion years (rock), 10 million years (uplift)',
            tectonicPlates: ['North American Plate'],
            process: 'Youngest range in Rockies, still rising along Teton Fault. Composed of ancient Precambrian gneiss and granite. Dramatic eastern escarpment rises 2,000m above Jackson Hole with no foothills. Glacial carving created dramatic horns and cirques.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 11, 1898',
                climbers: ['William Owen', 'Franklin Spalding', 'Frank Petersen', 'John Shive'],
                route: 'Owen-Spalding Route',
                expedition: 'After disputed 1872 claim by James Stevenson, this ascent is officially recognized.'
            },
            totalAscents: 4000,
            fatalities: 60,
            successRate: '50%',
            bestSeason: 'July to September',
            difficulty: 'Class 4 to 5.13',
            routes: [
                { name: 'Owen-Spalding', country: 'USA', difficulty: 'Class 4', description: 'Standard route, exposed scrambling with one rappel descent' },
                { name: 'Upper Exum Ridge', country: 'USA', difficulty: '5.5', description: 'Classic route, arguably finest rock climb in Tetons' },
                { name: 'Complete Exum Ridge', country: 'USA', difficulty: '5.7', description: 'Full ridge from base, longer commitment' },
                { name: 'North Face', country: 'USA', difficulty: 'Grade V', description: 'Serious alpine route, ice and mixed climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-8°C average',
            winterLow: '-35°C',
            summerHigh: '8°C',
            snowfall: 'Heavy snowfall, snow possible any month',
            winds: 'Severe, can be extreme on exposed ridges',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Teton Glacier', length: '0.6 km', description: 'Small glacier on north face' },
            { name: 'Teepe Glacier', length: '0.4 km', description: 'Remnant glacier below Middle Teton' },
            { name: 'Middle Teton Glacier', length: '0.3 km', description: 'Small glacier between peaks' }
        ],
        
        baseCamps: [
            { name: 'Lupine Meadows Trailhead', elevation: 2072, country: 'USA', coordinates: [43.7500, -110.7500] },
            { name: 'Lower Saddle', elevation: 3387, country: 'USA', coordinates: [43.7367, -110.7983] },
            { name: 'Garnet Canyon', elevation: 3048, country: 'USA', coordinates: [43.7383, -110.7800] },
            { name: 'Moraine Camp', elevation: 3200, country: 'USA', coordinates: [43.7400, -110.7900] }
        ],
        
        nearbyPeaks: [
            { name: 'Middle Teton', elevation: 3903, coordinates: [43.7322, -110.8019] },
            { name: 'South Teton', elevation: 3814, coordinates: [43.7158, -110.8008] },
            { name: 'Mount Owen', elevation: 3940, coordinates: [43.7500, -110.8075] },
            { name: 'Teewinot', elevation: 3751, coordinates: [43.7589, -110.7881] }
        ],
        
        nearbyCities: [
            { name: 'Jackson', coordinates: [43.4799, -110.7624], country: 'USA', population: 10500 },
            { name: 'Driggs', coordinates: [43.7233, -111.1111], country: 'USA', population: 1800 },
            { name: 'Victor', coordinates: [43.6028, -111.1125], country: 'USA', population: 2000 },
            { name: 'Teton Village', coordinates: [43.5875, -110.8275], country: 'USA', population: 350 }
        ],
        
        flora: ['Engelmann Spruce', 'Subalpine Fir', 'Whitebark Pine', 'Alpine Forget-me-not', 'Columbine', 'Indian Paintbrush'],
        fauna: ['Grizzly Bear', 'Moose', 'Elk', 'Mule Deer', 'Pika', 'Marmot', 'Bald Eagle', 'Trumpeter Swan'],
        
        economicImportance: [
            { label: 'Iconic American Peak', value: 'Symbol of American wilderness, drives tourism' },
            { label: 'Jackson Hole Tourism', value: 'Backdrop for world-famous ski resort' },
            { label: 'Climbing Guides', value: 'Exum Mountain Guides founded 1931, oldest in USA' },
            { label: 'Photography', value: 'One of most photographed mountains in world' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glaciers disappearing rapidly' },
            { label: 'Grizzly Habitat', value: 'Human-bear conflicts increasing' },
            { label: 'Crowding', value: 'Popular routes congested in summer' },
            { label: 'Lower Saddle Impact', value: 'Bivy site showing wear from use' }
        ],
        
        conservation: [
            { label: 'Grand Teton National Park', value: 'Protected since 1929' },
            { label: 'Wilderness Designation', value: 'Jedediah Smith Wilderness on west' },
            { label: 'Bear Management', value: 'Bear canisters required for camping' },
            { label: 'Climbing Registration', value: 'Voluntary registration for climbers' }
        ],
        
        historicalImportance: [
            { label: 'French Trappers', value: 'Named Les Trois Tétons (The Three Breasts)' },
            { label: 'First Ascent Dispute', value: '1872 vs 1898 controversy never resolved' },
            { label: 'Paul Petzoldt', value: 'Legendary guide summited 300+ times' },
            { label: 'Exum History', value: 'Glenn Exum pioneered iconic ridge in 1931' }
        ],
        
        records: [
            { record: 'Youngest Rockies', value: 'Part of youngest range in Rocky Mountains' },
            { record: 'Most Dramatic Rise', value: '2,000m rise from valley with no foothills' },
            { record: 'Classic American Climb', value: 'Exum Ridge considered classic American route' },
            { record: 'Oldest Guide Service', value: 'Exum Guides oldest operating in USA' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 67. Mount Hood
    {
        id: 'mount-hood',
        name: 'Mount Hood',
        localNames: [
            { language: 'Multnomah', name: 'Wy\'east' },
            { language: 'English', name: 'Mount Hood' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Cascade Range',
        subRange: 'Cascade Volcanic Arc',
        elevation: 3429,
        prominence: 2349,
        isolation: 299,
        coordinates: [45.3735, -121.6959],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Potentially Active)',
            age: '500,000 years',
            tectonicPlates: ['Juan de Fuca Plate', 'North American Plate'],
            process: 'Formed by subduction volcanism. Has had two major eruptive periods in last 1,500 years, most recently around 1781-1782. Steaming fumaroles near summit indicate ongoing volcanic activity. Perfect glaciated cone visible from Portland.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 1857',
                climbers: ['Henry Pittock', 'Thomas J. Dryer', 'others'],
                route: 'South Side',
                expedition: 'Party of early Oregon settlers made first documented ascent.'
            },
            totalAscents: 10000,
            fatalities: 130,
            successRate: '60%',
            bestSeason: 'April to June',
            difficulty: 'Grade II',
            routes: [
                { name: 'South Side (Pearly Gates)', country: 'USA', difficulty: 'Class 3', description: 'Most popular, steep snow climbing, falling ice hazard' },
                { name: 'Hogsback-Mazama Chute', country: 'USA', difficulty: 'Class 3', description: 'Variation avoiding Pearly Gates' },
                { name: 'Sunshine Route', country: 'USA', difficulty: 'Class 4', description: 'West side alternative' },
                { name: 'North Face', country: 'USA', difficulty: 'Grade IV', description: 'Serious alpine route, ice climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-30°C',
            summerHigh: '2°C',
            snowfall: 'Extremely heavy, 15+ meters annually',
            winds: 'Severe Pacific storms, whiteouts common',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Eliot Glacier', length: '2 km', description: 'Largest glacier, north side' },
            { name: 'Coe Glacier', length: '1.5 km', description: 'Northeast glacier' },
            { name: 'Reid Glacier', length: '1.5 km', description: 'West side glacier' },
            { name: 'White River Glacier', length: '1.5 km', description: 'East side glacier' },
            { name: 'Sandy Glacier', length: '1.5 km', description: 'West side glacier' },
            { name: 'Palmer Glacier', length: '1 km', description: 'Summer ski area glacier' }
        ],
        
        baseCamps: [
            { name: 'Timberline Lodge', elevation: 1829, country: 'USA', coordinates: [45.3311, -121.7111] },
            { name: 'Silcox Hut', elevation: 2134, country: 'USA', coordinates: [45.3350, -121.7100] },
            { name: 'Cloud Cap Inn', elevation: 1829, country: 'USA', coordinates: [45.4000, -121.6500] },
            { name: 'Cooper Spur', elevation: 2530, country: 'USA', coordinates: [45.3917, -121.6583] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Adams', elevation: 3742, coordinates: [46.2024, -121.4909] },
            { name: 'Mount Jefferson', elevation: 3199, coordinates: [44.6742, -121.7997] },
            { name: 'Mount St. Helens', elevation: 2549, coordinates: [46.1914, -122.1956] },
            { name: 'Illumination Rock', elevation: 2881, coordinates: [45.3678, -121.7000] }
        ],
        
        nearbyCities: [
            { name: 'Portland', coordinates: [45.5152, -122.6784], country: 'USA', population: 650000 },
            { name: 'Hood River', coordinates: [45.7054, -121.5215], country: 'USA', population: 8300 },
            { name: 'Government Camp', coordinates: [45.3001, -121.7520], country: 'USA', population: 250 },
            { name: 'Sandy', coordinates: [45.3979, -122.2612], country: 'USA', population: 12000 }
        ],
        
        flora: ['Pacific Silver Fir', 'Noble Fir', 'Mountain Hemlock', 'Avalanche Lily', 'Paintbrush', 'Lupine'],
        fauna: ['Black Bear', 'Mountain Goat', 'Cougar', 'Marmot', 'Pika', 'Gray Jay', 'Golden Eagle'],
        
        economicImportance: [
            { label: 'Oregon Icon', value: 'Symbol of Oregon, visible from Portland' },
            { label: 'Ski Industry', value: 'Year-round skiing on Palmer Glacier' },
            { label: 'Timberline Lodge', value: 'Historic WPA lodge, major tourist attraction' },
            { label: 'Most Climbed Major Peak', value: 'Second most climbed major glaciated peak in world' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Glaciers losing mass rapidly' },
            { label: 'Volcanic Hazard', value: 'Active volcano with lahar potential' },
            { label: 'Crowding', value: 'Extreme congestion on south side in season' },
            { label: 'Fumarole Danger', value: 'Volcanic vents create hazardous conditions' }
        ],
        
        conservation: [
            { label: 'Mount Hood National Forest', value: 'Managed by US Forest Service' },
            { label: 'Mount Hood Wilderness', value: 'Designated wilderness since 1964' },
            { label: 'Climbing Permits', value: 'Required above certain elevation' },
            { label: 'Volcanic Monitoring', value: 'USGS monitors volcanic activity' }
        ],
        
        historicalImportance: [
            { label: 'Named by Broughton', value: 'Named 1792 for British naval officer Lord Hood' },
            { label: 'Oregon Trail Landmark', value: 'Major landmark for pioneers' },
            { label: 'Timberline Lodge', value: 'Built 1936-1937 by WPA, National Historic Landmark' },
            { label: 'The Shining', value: 'Timberline Lodge exterior used in Kubricks film' }
        ],
        
        records: [
            { record: 'Second Most Climbed', value: 'Second most climbed glaciated peak in world after Fuji' },
            { record: 'Year-Round Skiing', value: 'Only place in USA with year-round lift skiing' },
            { record: 'Most Fatalities', value: 'Deadliest mountain in Oregon' },
            { record: 'Highest Oregon', value: 'Highest peak in Oregon' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-7.js - Part C: Mountains 68-70

const MOUNTAINS_DATA_7_PART_C = [
    // 68. Mount Kenya
    {
        id: 'mount-kenya',
        name: 'Mount Kenya',
        localNames: [
            { language: 'Kikuyu', name: 'Kĩrĩnyaga' },
            { language: 'Embu', name: 'Kirenia' },
            { language: 'Swahili', name: 'Mlima Kenya' }
        ],
        countries: [
            { name: 'Kenya', code: 'KE' }
        ],
        continent: 'Africa',
        mountainRange: 'East African Mountains',
        subRange: 'Mount Kenya Massif',
        elevation: 5199,
        prominence: 3825,
        isolation: 714,
        coordinates: [-0.1522, 37.3081],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
        
        formation: {
            type: 'Extinct Stratovolcano',
            age: '3-3.5 million years',
            tectonicPlates: ['African Plate', 'Somali Plate'],
            process: 'Formed by volcanic activity associated with East African Rift. Originally may have been over 6,500m before glacial erosion. Volcanic plug forms distinctive twin peaks of Batian and Nelion. Dramatic equatorial glaciers despite location on equator.'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 13, 1899',
                climbers: ['Halford Mackinder', 'César Ollier', 'Joseph Brocherel'],
                route: 'Southeast Face of Batian',
                expedition: 'British geographer Mackinder with Italian guides after failed 1893 attempt.'
            },
            totalAscents: 1000,
            fatalities: 50,
            successRate: '30%',
            bestSeason: 'January-February, August-September',
            difficulty: 'UIAA IV+ to VI',
            routes: [
                { name: 'Normal Route (Batian)', country: 'Kenya', difficulty: 'UIAA V', description: 'Via southeast face, technical rock climbing required' },
                { name: 'North Face Standard', country: 'Kenya', difficulty: 'UIAA V+', description: 'Ice and mixed route when conditions permit' },
                { name: 'Nelion Normal Route', country: 'Kenya', difficulty: 'UIAA IV+', description: 'More accessible technical summit' },
                { name: 'Diamond Couloir', country: 'Kenya', difficulty: 'UIAA VI', description: 'Classic ice route, rarely in condition' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-15°C',
            summerHigh: '-2°C',
            snowfall: 'Regular snowfall, maintains equatorial glaciers',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Lewis Glacier', length: '0.4 km', description: 'Largest remaining glacier, rapidly shrinking' },
            { name: 'Gregory Glacier', length: '0.2 km', description: 'Small remnant glacier' },
            { name: 'Diamond Glacier', length: '0.2 km', description: 'North face glacier, source of ice route' },
            { name: 'Darwin Glacier', length: '0.15 km', description: 'Very small remnant' }
        ],
        
        baseCamps: [
            { name: 'Naro Moru Gate', elevation: 2400, country: 'Kenya', coordinates: [-0.1500, 37.2000] },
            { name: 'Mackinders Camp', elevation: 4200, country: 'Kenya', coordinates: [-0.1533, 37.2883] },
            { name: 'Austrian Hut', elevation: 4790, country: 'Kenya', coordinates: [-0.1500, 37.3017] },
            { name: 'Shipton Camp', elevation: 4236, country: 'Kenya', coordinates: [-0.1250, 37.3167] }
        ],
        
        nearbyPeaks: [
            { name: 'Nelion', elevation: 5188, coordinates: [-0.1536, 37.3083] },
            { name: 'Point Lenana', elevation: 4985, coordinates: [-0.1550, 37.3117] },
            { name: 'Point Pigott', elevation: 4957, coordinates: [-0.1567, 37.3050] },
            { name: 'Point John', elevation: 4883, coordinates: [-0.1433, 37.3150] }
        ],
        
        nearbyCities: [
            { name: 'Nanyuki', coordinates: [0.0167, 37.0667], country: 'Kenya', population: 50000 },
            { name: 'Nyeri', coordinates: [-0.4167, 36.9500], country: 'Kenya', population: 120000 },
            { name: 'Meru', coordinates: [0.0500, 37.6500], country: 'Kenya', population: 50000 },
            { name: 'Nairobi', coordinates: [-1.2864, 36.8172], country: 'Kenya', population: 4400000 }
        ],
        
        flora: ['Giant Groundsel', 'Giant Lobelia', 'Tussock Grass', 'Helichrysum', 'Afro-alpine Moorland', 'Bamboo Forest'],
        fauna: ['Elephant', 'Buffalo', 'Leopard', 'Black Rhino', 'Colobus Monkey', 'Hyrax', 'Sunbird', 'Lammergeier'],
        
        economicImportance: [
            { label: 'Water Tower', value: 'Provides water to millions of Kenyans' },
            { label: 'Tourism', value: 'Major trekking and climbing destination' },
            { label: 'National Symbol', value: 'Country named after mountain' },
            { label: 'Agriculture', value: 'Fertile slopes support major farming' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Disappearance', value: 'Glaciers may vanish by 2030' },
            { label: 'Deforestation', value: 'Illegal logging and charcoal burning' },
            { label: 'Poaching', value: 'Wildlife poaching ongoing problem' },
            { label: 'Climate Change', value: 'Dramatic ecosystem changes occurring' }
        ],
        
        conservation: [
            { label: 'Mount Kenya National Park', value: 'UNESCO World Heritage Site since 1997' },
            { label: 'Forest Reserve', value: 'Surrounding forest protected' },
            { label: 'Rhino Sanctuary', value: 'Black rhino reintroduction programs' },
            { label: 'Community Conservancies', value: 'Local communities involved in protection' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Kikuyu god Ngai dwells on summit' },
            { label: 'Country Namesake', value: 'Kenya named after mountain' },
            { label: 'Colonial Exploration', value: 'First seen by Europeans in 1849' },
            { label: 'Independence Symbol', value: 'Important in Kenyan independence movement' }
        ],
        
        records: [
            { record: 'Second Highest Africa', value: 'Second highest peak in Africa after Kilimanjaro' },
            { record: 'Equatorial Glaciers', value: 'Most accessible equatorial glaciers' },
            { record: 'Country Namesake', value: 'Only mountain that named a country' },
            { record: 'Technical African Peak', value: 'Most technical of African major peaks' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 69. Mount Stanley (Margherita Peak)
    {
        id: 'mount-stanley',
        name: 'Mount Stanley',
        localNames: [
            { language: 'Local', name: 'Rwenzori' },
            { language: 'Italian', name: 'Margherita Peak' },
            { language: 'English', name: 'Mount Stanley' }
        ],
        countries: [
            { name: 'Uganda', code: 'UG' },
            { name: 'Democratic Republic of the Congo', code: 'CD' }
        ],
        continent: 'Africa',
        mountainRange: 'Rwenzori Mountains',
        subRange: 'Central Rwenzori',
        elevation: 5109,
        prominence: 3951,
        isolation: 834,
        coordinates: [0.3858, 29.8717],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1920&q=80',
        
        formation: {
            type: 'Fault-Block Mountain / Horst',
            age: '3 million years',
            tectonicPlates: ['African Plate', 'Somali Plate'],
            process: 'Formed by uplift along East African Rift faults. Not volcanic unlike nearby peaks. Block of Precambrian metamorphic rock pushed upward. Heavy glaciation carved dramatic peaks. Known as Mountains of the Moon to ancient Greeks.'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 18, 1906',
                climbers: ['Luigi Amedeo di Savoia (Duke of Abruzzi)', 'Joseph Petigax', 'César Ollier', 'Joseph Brocherel'],
                route: 'Southeast Ridge of Margherita',
                expedition: 'Italian expedition led by Duke of Abruzzi, same explorer who made early attempts on K2.'
            },
            totalAscents: 500,
            fatalities: 20,
            successRate: '50%',
            bestSeason: 'December-February, June-August',
            difficulty: 'AD (Alpine Difficulty)',
            routes: [
                { name: 'Normal Route (via Stanley Plateau)', country: 'Uganda', difficulty: 'AD', description: 'Most popular, glacier travel and scrambling' },
                { name: 'Congolese Route', country: 'DR Congo', difficulty: 'AD', description: 'Western approach, less developed' },
                { name: 'Northwest Ridge', country: 'DR Congo', difficulty: 'AD+', description: 'Alternative ridge route' },
                { name: 'South Face', country: 'Uganda', difficulty: 'D', description: 'More technical ice route' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-15°C',
            summerHigh: '0°C',
            snowfall: 'Frequent precipitation, very wet environment',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Stanley Glacier', length: '0.5 km', description: 'Main summit glacier, rapidly retreating' },
            { name: 'Elena Glacier', length: '0.4 km', description: 'South side glacier' },
            { name: 'Margherita Glacier', length: '0.3 km', description: 'Small glacier near summit' },
            { name: 'Savoia Glacier', length: '0.3 km', description: 'Named for Duke of Abruzzi' }
        ],
        
        baseCamps: [
            { name: 'Nyakalengija Trailhead', elevation: 1615, country: 'Uganda', coordinates: [0.3000, 29.9833] },
            { name: 'Guy Yeoman Hut', elevation: 4350, country: 'Uganda', coordinates: [0.3667, 29.8833] },
            { name: 'Elena Hut', elevation: 4541, country: 'Uganda', coordinates: [0.3767, 29.8783] },
            { name: 'Margherita Camp', elevation: 4485, country: 'Uganda', coordinates: [0.3833, 29.8750] }
        ],
        
        nearbyPeaks: [
            { name: 'Alexandra Peak', elevation: 5091, coordinates: [0.3847, 29.8733] },
            { name: 'Albert Peak', elevation: 5087, coordinates: [0.3858, 29.8683] },
            { name: 'Mount Speke', elevation: 4890, coordinates: [0.4000, 29.8833] },
            { name: 'Mount Baker', elevation: 4844, coordinates: [0.3500, 29.9000] }
        ],
        
        nearbyCities: [
            { name: 'Kasese', coordinates: [0.1833, 30.0833], country: 'Uganda', population: 100000 },
            { name: 'Fort Portal', coordinates: [0.6667, 30.2750], country: 'Uganda', population: 55000 },
            { name: 'Beni', coordinates: [0.4833, 29.4667], country: 'DR Congo', population: 75000 },
            { name: 'Kampala', coordinates: [0.3476, 32.5825], country: 'Uganda', population: 1650000 }
        ],
        
        flora: ['Giant Heather', 'Giant Groundsel', 'Giant Lobelia', 'Tree Ferns', 'Moss Forest', 'Everlasting Flowers'],
        fauna: ['Forest Elephant', 'Chimpanzee', 'Colobus Monkey', 'Duiker', 'Hyrax', 'Rwenzori Turaco', 'Three-horned Chameleon'],
        
        economicImportance: [
            { label: 'Water Tower', value: 'Major water source for surrounding regions' },
            { label: 'Ecotourism', value: 'Growing trekking and climbing tourism' },
            { label: 'Biodiversity', value: 'Unique endemic species attract researchers' },
            { label: 'Cultural Heritage', value: 'Mountains of the Moon mystique attracts visitors' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Loss', value: 'Lost over 80% of glacial coverage since 1906' },
            { label: 'Climate Change', value: 'Rapid ecosystem changes occurring' },
            { label: 'Political Instability', value: 'Congo side affected by conflict' },
            { label: 'Deforestation', value: 'Encroachment on lower forest zones' }
        ],
        
        conservation: [
            { label: 'Rwenzori Mountains NP', value: 'Uganda side UNESCO World Heritage Site since 1994' },
            { label: 'Virunga National Park', value: 'Congo side part of Africas oldest national park' },
            { label: 'Research Programs', value: 'Glaciology and ecology research ongoing' },
            { label: 'Community Tourism', value: 'Local Bakonzo people involved in tourism' }
        ],
        
        historicalImportance: [
            { label: 'Mountains of the Moon', value: 'Ptolemy identified them as Nile source in 150 AD' },
            { label: 'Source of the Nile', value: 'Believed to be Nile headwaters for millennia' },
            { label: 'Stanley Discovery', value: 'Henry Morton Stanley first European to see (1889)' },
            { label: 'Duke of Abruzzi', value: 'Legendary explorer made first ascent' }
        ],
        
        records: [
            { record: 'Third Highest Africa', value: 'Third highest peak in Africa' },
            { record: 'Most Equatorial Glaciers', value: 'Closest glaciers to equator (now disappearing)' },
            { record: 'Ancient Mystery', value: 'Legendary Mountains of the Moon' },
            { record: 'Unique Flora', value: 'Home to bizarre giant vegetation' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

       // 70. Mount Ararat (CONTINUING FROM WHERE IT CUT OFF)
    
        totalAscents: 10000,
        fatalities: 25,
        successRate: '80%',
        bestSeason: 'July to September',
        difficulty: 'PD (non-technical)',
        routes: [
            { name: 'South Route (Normal)', country: 'Turkey', difficulty: 'PD', description: 'Most popular from Doğubayazıt, non-technical but long' },
            { name: 'North Route', country: 'Turkey', difficulty: 'PD+', description: 'Less traveled, more remote approach' },
            { name: 'West Route', country: 'Turkey', difficulty: 'PD', description: 'Alternative from Iğdır side' },
            { name: 'East Route', country: 'Turkey', difficulty: 'AD', description: 'More technical, glacier crossing required' }
        ]
    },
    
    climate: {
        summitTemperature: '-20°C average',
        winterLow: '-40°C',
        summerHigh: '-5°C',
        snowfall: 'Heavy snowfall, permanent ice cap',
        winds: 'Can be severe, especially on summit plateau',
        deathZone: 'Not applicable'
    },
    
    glaciers: [
        { name: 'North Glacier', length: '2 km', description: 'Largest glacier on mountain' },
        { name: 'South Glacier', length: '1.5 km', description: 'Summit ice cap' },
        { name: 'Western Ice Cap', length: '1 km', description: 'Permanent ice field on summit' },
        { name: 'Parrot Glacier', length: '0.8 km', description: 'Named after first ascent climber' }
    ],
    
    baseCamps: [
        { name: 'Doğubayazıt', elevation: 1950, country: 'Turkey', coordinates: [39.5489, 44.0850] },
        { name: 'Base Camp (Eli Village)', elevation: 2200, country: 'Turkey', coordinates: [39.6833, 44.2667] },
        { name: 'Camp 1', elevation: 3200, country: 'Turkey', coordinates: [39.6950, 44.2833] },
        { name: 'Camp 2 (High Camp)', elevation: 4200, country: 'Turkey', coordinates: [39.7000, 44.2917] }
    ],
    
    nearbyPeaks: [
        { name: 'Little Ararat (Küçük Ağrı)', elevation: 3896, coordinates: [39.6403, 44.4578] },
        { name: 'Mount Süphan', elevation: 4058, coordinates: [38.9167, 42.8333] },
        { name: 'Mount Tendürek', elevation: 3533, coordinates: [39.3667, 43.8667] },
        { name: 'Mount Erek', elevation: 3200, coordinates: [38.5000, 43.2833] }
    ],
    
    nearbyCities: [
        { name: 'Doğubayazıt', coordinates: [39.5489, 44.0850], country: 'Turkey', population: 80000 },
        { name: 'Iğdır', coordinates: [39.9167, 44.0500], country: 'Turkey', population: 95000 },
        { name: 'Van', coordinates: [38.5012, 43.3730], country: 'Turkey', population: 430000 },
        { name: 'Erzurum', coordinates: [39.9086, 41.2769], country: 'Turkey', population: 760000 }
    ],
    
    flora: ['Alpine Meadows', 'Wild Grasses', 'Mountain Flowers', 'Cushion Plants', 'Astragalus', 'Thistle'],
    fauna: ['Persian Leopard (rare)', 'Brown Bear', 'Wild Goat', 'Wolf', 'Golden Eagle', 'Caspian Snowcock', 'Bearded Vulture'],
    
    economicImportance: [
        { label: 'Biblical Tourism', value: 'Noahs Ark legend draws religious tourists' },
        { label: 'Mountaineering', value: 'Popular destination for international climbers' },
        { label: 'Regional Symbol', value: 'Important to Armenian, Kurdish, and Turkish identity' },
        { label: 'Border Region', value: 'Strategic location at Turkey-Iran-Armenia border' }
    ],
    
    environmentalIssues: [
        { label: 'Glacial Retreat', value: 'Ice cap shrinking due to climate change' },
        { label: 'Military Restrictions', value: 'Military activity impacts environment' },
        { label: 'Overgrazing', value: 'Livestock grazing on lower slopes' },
        { label: 'Waste Management', value: 'Climbing camps generating waste' }
    ],
    
    conservation: [
        { label: 'Ağrı Dağı National Park', value: 'Protected as national park' },
        { label: 'Permit System', value: 'Climbing permits required and managed' },
        { label: 'Military Oversight', value: 'Military controls access in sensitive border zone' },
        { label: 'Guide Requirements', value: 'Licensed guides required for climbing' }
    ],
    
    historicalImportance: [
        { label: 'Noahs Ark', value: 'Biblical tradition places ark landing here' },
        { label: 'Armenian Sacred Site', value: 'Holy mountain for Armenian people for millennia' },
        { label: 'Ancient History', value: 'Mentioned in Assyrian texts from 13th century BC' },
        { label: 'First Ascent Controversy', value: 'Locals believed mountain unclimbable until 1829' },
        { label: 'Political Symbol', value: 'Mount appears on Armenian coat of arms despite being in Turkey' }
    ],
    
    records: [
        { record: 'Highest Turkey', value: 'Highest peak in Turkey at 5,137m' },
        { record: 'Biblical Mountain', value: 'Most famous mountain in religious tradition' },
        { record: 'Largest Volcanic Cone', value: 'Largest volcanic edifice in region' },
        { record: 'National Symbol', value: 'Appears on Armenian coat of arms' }
    ],
    
    deathZone: false,
    technicalClimbing: false,
    permitRequired: true,
    sevenSummit: false,
    eightThousander: false
}
];

// ============================================
// COMBINE ALL PARTS INTO MOUNTAINS_DATA_7
// ============================================

const MOUNTAINS_DATA_7 = [
    ...MOUNTAINS_DATA_7_PART_A,
    ...MOUNTAINS_DATA_7_PART_B,
    ...MOUNTAINS_DATA_7_PART_C
];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_7 };
}

console.log('Mountains Data 7 loaded:', MOUNTAINS_DATA_7.length, 'mountains (North America & Africa)');
