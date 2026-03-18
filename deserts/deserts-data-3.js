/* ==========================================
   DESERTS DATA - FILE 3 OF 5
   Deserts 21-30 (By Area)
   ========================================== */

const DESERTS_DATA_3 = [
    // ========================================
    // #21 - NAMIB DESERT
    // ========================================
    {
        id: 'namib-desert',
        name: 'Namib Desert',
        countries: [
            { name: 'Namibia', code: 'NA' },
            { name: 'Angola', code: 'AO' },
            { name: 'South Africa', code: 'ZA' }
        ],
        continent: 'Africa',
        desertType: 'coastal',
        area: 81000,
        rank: 21,
        coordinates: [-24.5, 15.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Namib Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [12.0, -28.0], [12.0, -14.0], [17.0, -14.0], [17.0, -28.0], [12.0, -28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '35°C',
            summerTempAvg: '25°C',
            winterTempMin: '0°C (inland)',
            winterTempAvg: '15°C',
            maxRecorded: '45°C',
            annualRainfall: '2-200mm (varies coast to inland)',
            rainyMonths: 'Fog year-round (coastal), summer rains (inland)'
        },
        
        formation: {
            type: 'Coastal cold current desert',
            causes: ['Benguela Current cold water', 'Subtropical high pressure', 'Atlantic moisture blocked'],
            age: '55-80 million years (possibly oldest desert on Earth)'
        },
        
        landforms: [
            { name: 'Sossusvlei Dunes', description: 'Towering red/orange dunes up to 380m' },
            { name: 'Gravel Plains', description: 'Flat stone-covered surfaces' },
            { name: 'Inselbergs', description: 'Isolated rocky mountains' },
            { name: 'Dry Riverbeds', description: 'Ephemeral rivers reaching the coast' },
            { name: 'Skeleton Coast', description: 'Fog-shrouded shipwreck coastline' }
        ],
        
        features: [
            { name: 'Sossusvlei', type: 'Dune field', coordinates: [-24.73, 15.29], description: 'Worlds tallest dunes, iconic red color' },
            { name: 'Deadvlei', type: 'Clay pan', coordinates: [-24.76, 15.29], description: 'Dead trees in white clay pan, 900 years old' },
            { name: 'Skeleton Coast', type: 'Coastline', coordinates: [-19.5, 12.5], description: 'Shipwrecks and seal colonies' },
            { name: 'Spitzkoppe', type: 'Mountain', coordinates: [-21.83, 15.2], description: 'Matterhorn of Africa' },
            { name: 'Welwitschia Plains', type: 'Habitat', coordinates: [-23.0, 14.8], description: 'Ancient plant specimens' }
        ],
        
        oases: [
            { name: 'Walvis Bay', coordinates: [-22.96, 14.51], country: 'Namibia', population: 85000 },
            { name: 'Omaruru', coordinates: [-21.43, 15.93], country: 'Namibia', population: 6000 }
        ],
        
        cities: [
            { name: 'Swakopmund', coordinates: [-22.68, 14.53], country: 'Namibia', population: 45000 },
            { name: 'Walvis Bay', coordinates: [-22.96, 14.51], country: 'Namibia', population: 85000 },
            { name: 'Lüderitz', coordinates: [-26.65, 15.16], country: 'Namibia', population: 12500 },
            { name: 'Windhoek', coordinates: [-22.56, 17.08], country: 'Namibia', population: 430000 }
        ],
        
        biodiversity: {
            plants: ['Welwitschia mirabilis (2,000 year lifespan)', 'Nara Melon', 'Dollar Bush', 'Quiver Tree', 'Elephant\'s Foot'],
            animals: ['Oryx (Gemsbok)', 'Desert Elephant', 'Brown Hyena', 'Namib Desert Beetle', 'Sidewinder Snake', 'Cape Fur Seal', 'Black Rhino'],
            endangeredSpecies: ['Desert-adapted Black Rhino (critically endangered)', 'Desert Lion', 'Hartmann\'s Mountain Zebra']
        },
        
        humanLife: {
            peoples: ['Himba', 'Herero', 'San (Bushmen)', 'Topnaar'],
            lifestyle: 'Herding, fishing, tourism, diamond mining',
            population: '~100,000 in Namib region'
        },
        
        economy: [
            { label: 'Diamonds', value: 'Diamond mining along coast (Sperrgebiet)' },
            { label: 'Uranium', value: 'Rössing mine, one of largest' },
            { label: 'Tourism', value: 'Sossusvlei, safaris, adventure sports' },
            { label: 'Fishing', value: 'Major fishing industry at Walvis Bay' },
            { label: 'Salt', value: 'Salt pans at Walvis Bay' }
        ],
        
        environmentalIssues: [
            { label: 'Mining Impact', value: 'Diamond mining scarring landscape' },
            { label: 'Tourism Pressure', value: 'Increasing visitor numbers' },
            { label: 'Poaching', value: 'Rhino and elephant poaching' },
            { label: 'Climate Change', value: 'Changes in fog patterns' }
        ],
        
        historicalImportance: [
            { label: 'Ancient Desert', value: 'Possibly oldest desert on Earth (55-80 million years)' },
            { label: 'Bushmen Art', value: 'Rock engravings thousands of years old' },
            { label: 'German Colony', value: 'German Southwest Africa 1884-1915' },
            { label: 'Shipwrecks', value: 'Skeleton Coast claimed many ships' }
        ],
        
        funFacts: [
            'May be the oldest desert on Earth at 55-80 million years',
            'Namib Desert beetles harvest fog water with their bodies',
            'Deadvlei trees have been dead for 900 years but dont decompose',
            'Dune 7 and Big Daddy are among the tallest dunes in the world',
            'Desert elephants have adapted to survive with minimal water',
            'Welwitschia plants can live over 2,000 years',
            'The Sperrgebiet was off-limits for 100 years due to diamonds',
            'Fairy circles remain a scientific mystery'
        ],
        
        journeyWaypoints: [
            { name: 'Swakopmund', coordinates: [-22.68, 14.53], description: 'German colonial coastal town' },
            { name: 'Skeleton Coast', coordinates: [-19.5, 12.5], description: 'Shipwrecks and seals' },
            { name: 'Sossusvlei', coordinates: [-24.73, 15.29], description: 'Iconic red dunes' },
            { name: 'Deadvlei', coordinates: [-24.76, 15.29], description: 'Surreal dead tree landscape' },
            { name: 'Kolmanskop', coordinates: [-26.7, 15.23], description: 'Diamond ghost town' }
        ]
    },

    // ========================================
    // #22 - MOJAVE DESERT
    // ========================================
    {
        id: 'mojave-desert',
        name: 'Mojave Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'hot',
        area: 65000,
        rank: 22,
        coordinates: [35.0, -116.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Mojave Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-118.5, 33.5], [-118.5, 37.0], [-114.0, 37.0], [-114.0, 33.5], [-118.5, 33.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '49°C',
            summerTempAvg: '40°C',
            winterTempMin: '-10°C',
            winterTempAvg: '10°C',
            maxRecorded: '56.7°C (Death Valley - hottest on Earth)',
            annualRainfall: '50-150mm',
            rainyMonths: 'Winter (November-March)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Sierra Nevada rain shadow', 'Transverse Ranges', 'High pressure'],
            age: '15,000 years (current form)'
        },
        
        landforms: [
            { name: 'Joshua Tree Forests', description: 'Iconic yucca trees creating forests' },
            { name: 'Dry Lakes', description: 'Playas including Rogers Dry Lake' },
            { name: 'Volcanic Fields', description: 'Cinder cones and lava flows' },
            { name: 'Alluvial Fans', description: 'Gravel deposits from mountains' },
            { name: 'Sand Dunes', description: 'Kelso Dunes and others' }
        ],
        
        features: [
            { name: 'Death Valley', type: 'Valley', coordinates: [36.5, -117.0], description: 'Lowest point in North America, hottest place on Earth' },
            { name: 'Joshua Tree NP', type: 'Park', coordinates: [33.87, -115.9], description: 'Iconic Joshua tree landscape' },
            { name: 'Kelso Dunes', type: 'Dunes', coordinates: [34.89, -115.71], description: 'Singing sand dunes' },
            { name: 'Mojave National Preserve', type: 'Preserve', coordinates: [35.0, -115.5], description: '1.6 million acres of wilderness' },
            { name: 'Red Rock Canyon', type: 'Canyon', coordinates: [36.14, -115.43], description: 'Colorful sandstone near Las Vegas' }
        ],
        
        oases: [
            { name: 'Oasis of Mara', coordinates: [34.13, -116.04], country: 'USA', population: 0 },
            { name: 'China Ranch Date Farm', coordinates: [35.85, -116.3], country: 'USA', population: 10 }
        ],
        
        cities: [
            { name: 'Las Vegas', coordinates: [36.17, -115.14], country: 'USA', population: 650000 },
            { name: 'Barstow', coordinates: [34.9, -117.02], country: 'USA', population: 25000 },
            { name: 'Victorville', coordinates: [34.54, -117.29], country: 'USA', population: 135000 },
            { name: 'Lancaster', coordinates: [34.7, -118.14], country: 'USA', population: 175000 },
            { name: 'Palmdale', coordinates: [34.58, -118.12], country: 'USA', population: 170000 }
        ],
        
        biodiversity: {
            plants: ['Joshua Tree', 'Creosote Bush', 'Mojave Yucca', 'Brittlebush', 'Barrel Cactus', 'California Juniper'],
            animals: ['Desert Tortoise', 'Roadrunner', 'Gila Monster', 'Kit Fox', 'Bighorn Sheep', 'Sidewinder Rattlesnake', 'Chuckwalla'],
            endangeredSpecies: ['Desert Tortoise (threatened)', 'Mojave Ground Squirrel', 'Mojave Tui Chub']
        },
        
        humanLife: {
            peoples: ['Mojave', 'Chemehuevi', 'Serrano', 'Cahuilla'],
            lifestyle: 'Urban sprawl, military bases, solar farms, tourism',
            population: '~1.8 million in Mojave region'
        },
        
        economy: [
            { label: 'Gaming', value: 'Las Vegas casino industry' },
            { label: 'Solar Energy', value: 'Ivanpah and other major solar plants' },
            { label: 'Military', value: 'Edwards AFB, China Lake, Fort Irwin' },
            { label: 'Film Industry', value: 'Location shooting' },
            { label: 'Tourism', value: 'Death Valley, Joshua Tree, Las Vegas' }
        ],
        
        environmentalIssues: [
            { label: 'Urban Sprawl', value: 'Las Vegas and LA suburbs expanding' },
            { label: 'Water Crisis', value: 'Colorado River and groundwater depletion' },
            { label: 'Solar Farm Impact', value: 'Large installations affecting habitat' },
            { label: 'Climate Change', value: 'Joshua trees dying, moving upslope' }
        ],
        
        historicalImportance: [
            { label: 'Native American Trade', value: 'Mojave Trail trade route' },
            { label: 'Spanish Exploration', value: 'Garcés expedition 1776' },
            { label: 'Route 66', value: 'Mother Road crossed desert' },
            { label: 'Atomic Testing', value: 'Nevada Test Site nearby' },
            { label: 'Space History', value: 'Edwards AFB space shuttle landings' }
        ],
        
        funFacts: [
            'Death Valley holds the record for hottest temperature ever: 56.7°C',
            'Joshua trees are not actually trees but giant yuccas',
            'Badwater Basin is 86m below sea level, lowest in North America',
            'Las Vegas uses more water per capita than almost any US city',
            'Route 66 brought millions of travelers through the desert',
            'Edwards Air Force Base is where many speed records were set',
            'The Mojave phone booth was a famous internet oddity',
            'Burning Man predecessor events started in the Mojave'
        ],
        
        journeyWaypoints: [
            { name: 'Joshua Tree', coordinates: [33.87, -115.9], description: 'Iconic yucca forest' },
            { name: 'Kelso Dunes', coordinates: [34.89, -115.71], description: 'Singing sand dunes' },
            { name: 'Las Vegas', coordinates: [36.17, -115.14], description: 'Entertainment capital' },
            { name: 'Death Valley', coordinates: [36.5, -117.0], description: 'Hottest place on Earth' },
            { name: 'Red Rock Canyon', coordinates: [36.14, -115.43], description: 'Colorful sandstone cliffs' }
        ]
    },

    // ========================================
    // #23 - DASHT-E KAVIR (Great Salt Desert)
    // ========================================
    {
        id: 'dasht-e-kavir',
        name: 'Dasht-e Kavir',
        countries: [
            { name: 'Iran', code: 'IR' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 77000,
        rank: 23,
        coordinates: [34.5, 54.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Dasht-e Kavir' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [51.0, 32.0], [51.0, 37.0], [58.0, 37.0], [58.0, 32.0], [51.0, 32.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '-20°C',
            winterTempAvg: '5°C',
            maxRecorded: '52°C',
            annualRainfall: '<100mm',
            rainyMonths: 'November-April (sporadic)'
        },
        
        formation: {
            type: 'Continental salt desert',
            causes: ['Mountain rain shadows', 'Endorheic basin', 'Extreme evaporation'],
            age: '~30,000 years (current salt formations)'
        },
        
        landforms: [
            { name: 'Kavirs', description: 'Salt crusts over mud, extremely dangerous' },
            { name: 'Salt Flats', description: 'Vast white salt expanses' },
            { name: 'Sand Dunes', description: 'Erg formations in places' },
            { name: 'Mud Flats', description: 'Treacherous soft ground beneath crust' },
            { name: 'Salt Marshes', description: 'Seasonal saline wetlands' }
        ],
        
        features: [
            { name: 'Maranjab Desert', type: 'Desert', coordinates: [34.35, 51.87], description: 'Popular salt desert area' },
            { name: 'Salt Lake (Darya-ye Namak)', type: 'Salt lake', coordinates: [34.7, 51.8], description: 'Seasonal salt lake' },
            { name: 'Rig-e Jenn', type: 'Sand sea', coordinates: [34.5, 55.0], description: 'Place of the Jinn - unexplored region' },
            { name: 'Mesr Village', type: 'Oasis', coordinates: [33.97, 54.92], description: 'Desert oasis village' }
        ],
        
        oases: [
            { name: 'Mesr', coordinates: [33.97, 54.92], country: 'Iran', population: 100 },
            { name: 'Garmeh', coordinates: [33.85, 55.1], country: 'Iran', population: 200 },
            { name: 'Khur', coordinates: [33.77, 55.08], country: 'Iran', population: 6000 }
        ],
        
        cities: [
            { name: 'Kashan', coordinates: [33.98, 51.44], country: 'Iran', population: 300000 },
            { name: 'Qom', coordinates: [34.64, 50.88], country: 'Iran', population: 1200000 },
            { name: 'Semnan', coordinates: [35.57, 53.39], country: 'Iran', population: 185000 },
            { name: 'Yazd', coordinates: [31.9, 54.37], country: 'Iran', population: 530000 }
        ],
        
        biodiversity: {
            plants: ['Halophytes', 'Tamarisk', 'Saxaul', 'Salsola', 'Zygophyllum'],
            animals: ['Persian Onager', 'Goitered Gazelle', 'Sand Cat', 'Persian Leopard', 'Caracal', 'Desert Monitor'],
            endangeredSpecies: ['Asiatic Cheetah (critically endangered, <50 left)', 'Persian Onager (endangered)']
        },
        
        humanLife: {
            peoples: ['Persian', 'Turkmen'],
            lifestyle: 'Oasis agriculture, caravanserai heritage, tourism',
            population: '~50,000 in desert fringe communities'
        },
        
        economy: [
            { label: 'Salt Mining', value: 'Industrial salt extraction' },
            { label: 'Tourism', value: 'Desert eco-tourism growing' },
            { label: 'Agriculture', value: 'Oasis date and pomegranate farming' },
            { label: 'Handicrafts', value: 'Traditional carpets and pottery' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Qanat systems drying up' },
            { label: 'Desertification', value: 'Expanding due to overuse' },
            { label: 'Dust Storms', value: 'Increasingly severe' },
            { label: 'Wildlife Decline', value: 'Asiatic Cheetah near extinction' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Caravanserais dotted edges' },
            { label: 'Persian Empire', value: 'Barrier protecting Persian heartland' },
            { label: 'Zoroastrian Sites', value: 'Ancient fire temples nearby' },
            { label: 'Qanat System', value: 'Ancient underground irrigation' }
        ],
        
        funFacts: [
            'Kavir means "salt marsh" - the crust can collapse under weight',
            'Rig-e Jenn means "Place of the Jinn (spirits)" - avoided by locals',
            'Traditional qanats (underground channels) have carried water for 3,000 years',
            'Summer temperatures can reach 50°C while winter nights drop to -20°C',
            'One of the last refuges of the Asiatic Cheetah',
            'The salt crust can be only centimeters thick over deep mud',
            'Caravanserais (rest stops) are spaced one days camel journey apart'
        ],
        
        journeyWaypoints: [
            { name: 'Kashan', coordinates: [33.98, 51.44], description: 'Historic gardens and bazaar' },
            { name: 'Maranjab', coordinates: [34.35, 51.87], description: 'Salt desert and caravanserai' },
            { name: 'Salt Lake', coordinates: [34.7, 51.8], description: 'Vast white salt flat' },
            { name: 'Mesr Oasis', coordinates: [33.97, 54.92], description: 'Desert village oasis' },
            { name: 'Garmeh', coordinates: [33.85, 55.1], description: 'Traditional mud-brick village' }
        ]
    },

    // ========================================
    // #24 - DASHT-E LUT (Lut Desert)
    // ========================================
    {
        id: 'dasht-e-lut',
        name: 'Dasht-e Lut',
        countries: [
            { name: 'Iran', code: 'IR' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 52000,
        rank: 24,
        coordinates: [30.5, 59.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Dasht-e Lut' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [56.0, 28.0], [56.0, 34.0], [61.0, 34.0], [61.0, 28.0], [56.0, 28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '70.7°C (surface)',
            summerTempAvg: '45°C (air)',
            winterTempMin: '-5°C',
            winterTempAvg: '15°C',
            maxRecorded: '70.7°C (highest surface temperature ever recorded on Earth)',
            annualRainfall: '<30mm',
            rainyMonths: 'Almost never (one of driest places on Earth)'
        },
        
        formation: {
            type: 'Wind-shaped desert',
            causes: ['Mountain rain shadow', 'Extreme wind erosion', 'Subsidence basin'],
            age: 'Unknown (extremely ancient)'
        },
        
        landforms: [
            { name: 'Kaluts (Yardangs)', description: 'Massive wind-carved sand castles up to 150m tall' },
            { name: 'Rig-e Yalan', description: 'Sand sea with star dunes' },
            { name: 'Gandom Beryan', description: 'Black lava plateau, hottest surface on Earth' },
            { name: 'Salt Flats', description: 'Ephemeral salt lakes' },
            { name: 'Nebkhas', description: 'Vegetated sand mounds' }
        ],
        
        features: [
            { name: 'Gandom Beryan', type: 'Plateau', coordinates: [30.5, 59.1], description: 'Hottest surface temperature ever recorded: 70.7°C' },
            { name: 'Kaluts', type: 'Yardangs', coordinates: [30.5, 58.5], description: 'Natural sand castles carved by wind' },
            { name: 'Rig-e Yalan', type: 'Sand dunes', coordinates: [29.0, 58.5], description: 'Tallest sand dunes in Iran' },
            { name: 'Shur River', type: 'River', coordinates: [31.0, 57.5], description: 'Seasonal river, disappears in desert' }
        ],
        
        oases: [
            { name: 'Shahdad', coordinates: [30.42, 57.7], country: 'Iran', population: 4000 }
        ],
        
        cities: [
            { name: 'Kerman', coordinates: [30.28, 57.08], country: 'Iran', population: 820000 },
            { name: 'Bam', coordinates: [29.1, 58.35], country: 'Iran', population: 120000 },
            { name: 'Zahedan', coordinates: [29.5, 60.87], country: 'Iran', population: 600000 }
        ],
        
        biodiversity: {
            plants: ['Almost none in central region', 'Halophytes on edges', 'Tamarisk near water'],
            animals: ['Desert Insects', 'Reptiles on edges', 'Migratory birds occasionally'],
            endangeredSpecies: ['Persian Leopard (edges only)', 'Asiatic Cheetah (possibly)']
        },
        
        humanLife: {
            peoples: ['Persian', 'Baloch'],
            lifestyle: 'Edge settlements only, tourism, date farming',
            population: '~20,000 in edge communities'
        },
        
        economy: [
            { label: 'Tourism', value: 'UNESCO World Heritage site tourism' },
            { label: 'Mining', value: 'Copper and other minerals on edges' },
            { label: 'Agriculture', value: 'Date palms at Shahdad' },
            { label: 'Research', value: 'Scientific studies of extremophiles' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Extremes', value: 'Getting even hotter' },
            { label: 'Water Scarcity', value: 'Underground water depleting' },
            { label: 'Tourism Impact', value: 'Vehicle tracks damaging Kaluts' },
            { label: 'Dust Storms', value: 'Severe seasonal dust storms' }
        ],
        
        historicalImportance: [
            { label: 'UNESCO World Heritage', value: 'Inscribed 2016 for natural values' },
            { label: 'Silk Road Edge', value: 'Trade routes skirted the desert' },
            { label: 'Ancient Civilization', value: 'Shahdad Bronze Age site nearby' },
            { label: 'Scientific Records', value: 'Hottest surface temperature documented here' }
        ],
        
        funFacts: [
            'Holds record for hottest surface temperature ever: 70.7°C (159°F)',
            'So hot that no life exists in central regions - literally sterile',
            'Kaluts are natural skyscrapers carved by wind, up to 150m tall',
            'UNESCO World Heritage Site since 2016',
            'Lut means "empty" or "barren" in Persian',
            'Scientists study it as a Mars analog',
            'The black lava plateau absorbs all sunlight, creating extreme heat',
            'Satellite temperature measurements confirmed it as Earths thermal pole'
        ],
        
        journeyWaypoints: [
            { name: 'Kerman', coordinates: [30.28, 57.08], description: 'Gateway city with historic bazaar' },
            { name: 'Shahdad', coordinates: [30.42, 57.7], description: 'Edge oasis town' },
            { name: 'Kaluts', coordinates: [30.5, 58.5], description: 'Wind-carved sand castles' },
            { name: 'Gandom Beryan', coordinates: [30.5, 59.1], description: 'Hottest spot on Earth' },
            { name: 'Rig-e Yalan', coordinates: [29.0, 58.5], description: 'Irans tallest sand dunes' }
        ]
    },

    // ========================================
    // #25 - RUB' AL KHALI (Empty Quarter)
    // ========================================
    {
        id: 'rub-al-khali',
        name: 'Rub\' al Khali (Empty Quarter)',
        countries: [
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Oman', code: 'OM' },
            { name: 'Yemen', code: 'YE' },
            { name: 'United Arab Emirates', code: 'AE' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 650000,
        rank: 25,
        coordinates: [20.0, 50.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Rub\' al Khali' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [44.0, 16.0], [44.0, 24.0], [56.0, 24.0], [56.0, 16.0], [44.0, 16.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '55°C',
            summerTempAvg: '47°C',
            winterTempMin: '0°C (night)',
            winterTempAvg: '15°C',
            maxRecorded: '56°C',
            annualRainfall: '<35mm',
            rainyMonths: 'Rare winter storms'
        },
        
        formation: {
            type: 'Sand sea desert',
            causes: ['Subtropical high pressure', 'Wind accumulation of sand', 'Lack of any moisture source'],
            age: '2 million years'
        },
        
        landforms: [
            { name: 'Star Dunes', description: 'Multi-armed dunes up to 250m high' },
            { name: 'Linear Dunes', description: 'Parallel ridges hundreds of km long' },
            { name: 'Sabkhas', description: 'Salt flats and coastal salt marshes' },
            { name: 'Gravel Plains', description: 'Between dune fields' },
            { name: 'Quicksand Areas', description: 'Dangerous soft sand zones' }
        ],
        
        features: [
            { name: 'Uruq al Shaiba', type: 'Dunes', coordinates: [19.5, 52.0], description: 'Among tallest dunes in world at 250m' },
            { name: 'Umm al-Samim', type: 'Quicksand', coordinates: [21.5, 56.0], description: 'Legendary quicksand area' },
            { name: 'Lost City of Ubar', type: 'Archaeological', coordinates: [18.28, 53.65], description: 'Legendary lost city, possibly Iram' },
            { name: 'Shaybah Oil Field', type: 'Industrial', coordinates: [22.5, 54.0], description: 'Major oil production in desert heart' }
        ],
        
        oases: [
            { name: 'Liwa Oasis', coordinates: [23.13, 53.76], country: 'UAE', population: 20000 },
            { name: 'Al Ain', coordinates: [24.21, 55.76], country: 'UAE', population: 766900 }
        ],
        
        cities: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], country: 'Saudi Arabia', population: 7500000 },
            { name: 'Abu Dhabi', coordinates: [24.45, 54.37], country: 'UAE', population: 1500000 },
            { name: 'Salalah', coordinates: [17.02, 54.09], country: 'Oman', population: 340000 }
        ],
        
        biodiversity: {
            plants: ['Ghaf Tree', 'Arta Bush', 'Salt-tolerant grasses', 'Tribulus'],
            animals: ['Arabian Oryx (reintroduced)', 'Sand Gazelle', 'Sand Cat', 'Rüppell\'s Fox', 'Spiny-tailed Lizard', 'Scorpions'],
            endangeredSpecies: ['Arabian Oryx (vulnerable, recovered from extinction)', 'Arabian Leopard']
        },
        
        humanLife: {
            peoples: ['Bedouin', 'Rashid tribe', 'Al Murrah tribe'],
            lifestyle: 'Traditional nomads mostly settled now, oil workers',
            population: '~3,000 nomadic Bedouin remain'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Massive oil reserves, Shaybah and Ghawar fields' },
            { label: 'Natural Gas', value: 'Significant gas deposits' },
            { label: 'Tourism', value: 'Luxury desert camps, dune bashing' },
            { label: 'Camel Racing', value: 'Traditional sport' }
        ],
        
        environmentalIssues: [
            { label: 'Oil Industry', value: 'Infrastructure in pristine desert' },
            { label: 'Climate Change', value: 'Even more extreme temperatures' },
            { label: 'Groundwater Depletion', value: 'Ancient aquifers being pumped' },
            { label: 'Habitat Loss', value: 'Development on edges' }
        ],
        
        historicalImportance: [
            { label: 'Frankincense Trade', value: 'Ancient incense route crossed edges' },
            { label: 'Lost City of Ubar', value: 'Legendary trading city found 1992' },
            { label: 'Thesiger Crossings', value: 'Wilfred Thesiger crossed 1946-1950' },
            { label: 'Oil Discovery', value: 'Transformed Arabian Peninsula' }
        ],
        
        funFacts: [
            'Largest contiguous sand desert in the world',
            'Dunes reach 250m - taller than most skyscrapers',
            'Wilfred Thesiger was the first European to cross it (1946)',
            'Contains more oil than many countries combined',
            'The legendary lost city of Ubar was found here in 1992',
            'Summer sand surface temperature can reach 80°C',
            'Bedouin call it "The Abode of Silence"',
            'Some dunes "sing" when the wind blows'
        ],
        
        journeyWaypoints: [
            { name: 'Liwa Oasis', coordinates: [23.13, 53.76], description: 'Gateway to Empty Quarter' },
            { name: 'Moreeb Dune', coordinates: [23.15, 53.8], description: 'Tallest dune in UAE' },
            { name: 'Central Rub al Khali', coordinates: [20.0, 50.0], description: 'Heart of the Empty Quarter' },
            { name: 'Ubar Ruins', coordinates: [18.28, 53.65], description: 'Lost city Atlantis of the Sands' },
            { name: 'Uruq al Shaiba', coordinates: [19.5, 52.0], description: 'Towering orange dunes' }
        ]
    },

    // ========================================
    // #26 - NEGEV DESERT
    // ========================================
    {
        id: 'negev-desert',
        name: 'Negev Desert',
        countries: [
            { name: 'Israel', code: 'IL' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 12000,
        rank: 26,
        coordinates: [30.5, 34.8],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Negev Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [34.2, 29.5], [34.2, 31.5], [35.5, 31.5], [35.5, 29.5], [34.2, 29.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '33°C',
            winterTempMin: '0°C',
            winterTempAvg: '12°C',
            maxRecorded: '46°C',
            annualRainfall: '25-200mm (north to south)',
            rainyMonths: 'October-March (Mediterranean winter)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Mediterranean rain shadow', 'Descending air from mountains', 'Proximity to Sahara-Arabian desert belt'],
            age: '~5 million years'
        },
        
        landforms: [
            { name: 'Craters (Makhteshim)', description: 'Unique erosion craters found only here' },
            { name: 'Wadis', description: 'Flash flood channels' },
            { name: 'Loess Plains', description: 'Wind-deposited soil' },
            { name: 'Rocky Highlands', description: 'Central Negev mountains' }
        ],
        
        features: [
            { name: 'Ramon Crater', type: 'Makhtesh', coordinates: [30.6, 34.8], description: 'Worlds largest erosion crater, 40km long' },
            { name: 'Timna Park', type: 'Geological', coordinates: [29.78, 34.98], description: 'Ancient copper mines, Solomon\'s Pillars' },
            { name: 'Ein Avdat', type: 'Canyon', coordinates: [30.82, 34.77], description: 'Spring-fed canyon oasis' },
            { name: 'Avdat', type: 'Archaeological', coordinates: [30.79, 34.77], description: 'Nabataean city ruins, UNESCO site' }
        ],
        
        oases: [
            { name: 'Ein Gedi', coordinates: [31.45, 35.39], country: 'Israel', population: 600 },
            { name: 'Kadesh Barnea', coordinates: [30.64, 34.41], country: 'Israel', population: 0 }
        ],
        
        cities: [
            { name: 'Be\'er Sheva', coordinates: [31.25, 34.79], country: 'Israel', population: 210000 },
            { name: 'Eilat', coordinates: [29.56, 34.95], country: 'Israel', population: 52000 },
            { name: 'Mitzpe Ramon', coordinates: [30.61, 34.8], country: 'Israel', population: 5000 },
            { name: 'Dimona', coordinates: [31.07, 35.03], country: 'Israel', population: 35000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Atlantic Pistachio', 'White Broom', 'Desert Lily', 'Iris'],
            animals: ['Nubian Ibex', 'Striped Hyena', 'Caracal', 'Sand Partridge', 'Desert Monitor', 'Arabian Leopard (rare)'],
            endangeredSpecies: ['Arabian Leopard (critically endangered)', 'Negev Tortoise']
        },
        
        humanLife: {
            peoples: ['Bedouin', 'Israeli Jews', 'Nabataean heritage'],
            lifestyle: 'Agriculture, military bases, high-tech, tourism',
            population: '~700,000 in Negev region'
        },
        
        economy: [
            { label: 'Agriculture', value: 'Drip irrigation innovation' },
            { label: 'High-Tech', value: 'Cyber and tech industries' },
            { label: 'Tourism', value: 'Ramon Crater, Eilat' },
            { label: 'Solar Energy', value: 'Major solar installations' },
            { label: 'Mining', value: 'Phosphates, potash' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Desalination dependency' },
            { label: 'Development', value: 'Rapid urbanization' },
            { label: 'Military Use', value: 'Large areas restricted' },
            { label: 'Climate Change', value: 'Increasing aridity' }
        ],
        
        historicalImportance: [
            { label: 'Biblical History', value: 'Abraham, Exodus routes' },
            { label: 'Nabataean Cities', value: 'Avdat, Shivta - UNESCO sites' },
            { label: 'Incense Route', value: 'Spice trade from Arabia' },
            { label: 'Modern Israel', value: 'Ben-Gurion\'s vision to "make the desert bloom"' }
        ],
        
        funFacts: [
            'Contains the worlds only "makhtesh" erosion craters',
            'Drip irrigation was invented here',
            'David Ben-Gurion retired to a Negev kibbutz',
            'Ramon Crater is 40km long and 500m deep',
            'The Nabataeans built sophisticated water systems 2,000 years ago',
            'Israel\'s nuclear facility is located here',
            'Wine grapes are now grown in the desert',
            'SpaceIL lunar lander was tested in the Negev'
        ],
        
        journeyWaypoints: [
            { name: 'Be\'er Sheva', coordinates: [31.25, 34.79], description: 'Capital of the Negev' },
            { name: 'Avdat', coordinates: [30.79, 34.77], description: 'Nabataean ruins' },
            { name: 'Ramon Crater', coordinates: [30.6, 34.8], description: 'Worlds largest makhtesh' },
            { name: 'Timna Park', coordinates: [29.78, 34.98], description: 'Ancient copper mines' },
            { name: 'Eilat', coordinates: [29.56, 34.95], description: 'Red Sea resort' }
        ]
    },

    // ========================================
    // #27 - JUDEAN DESERT
    // ========================================
    {
        id: 'judean-desert',
        name: 'Judean Desert',
        countries: [
            { name: 'Israel', code: 'IL' },
            { name: 'Palestine', code: 'PS' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 1500,
        rank: 27,
        coordinates: [31.5, 35.3],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Judean Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [35.1, 31.0], [35.1, 32.0], [35.6, 32.0], [35.6, 31.0], [35.1, 31.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '32°C',
            winterTempMin: '5°C',
            winterTempAvg: '15°C',
            maxRecorded: '45°C',
            annualRainfall: '50-100mm',
            rainyMonths: 'November-March'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Judean Hills rain shadow', 'Jordan Rift Valley descent', 'Dead Sea evaporation'],
            age: 'Millions of years'
        },
        
        landforms: [
            { name: 'Wadis', description: 'Deep canyons carved by flash floods' },
            { name: 'Cliffs', description: 'Dramatic escarpments to Dead Sea' },
            { name: 'Caves', description: 'Thousands of caves including Qumran' },
            { name: 'Badlands', description: 'Eroded marl formations' }
        ],
        
        features: [
            { name: 'Masada', type: 'Fortress', coordinates: [31.32, 35.35], description: 'Herods mountain fortress, UNESCO site' },
            { name: 'Qumran Caves', type: 'Archaeological', coordinates: [31.74, 35.46], description: 'Dead Sea Scrolls discovered here' },
            { name: 'Ein Gedi', type: 'Oasis', coordinates: [31.45, 35.39], description: 'Spring oasis, nature reserve' },
            { name: 'Dead Sea', type: 'Lake', coordinates: [31.5, 35.5], description: 'Lowest point on Earth, 430m below sea level' },
            { name: 'Mar Saba Monastery', type: 'Monastery', coordinates: [31.7, 35.33], description: 'Ancient monastery in canyon' }
        ],
        
        oases: [
            { name: 'Ein Gedi', coordinates: [31.45, 35.39], country: 'Israel', population: 600 },
            { name: 'Ein Feshkha', coordinates: [31.71, 35.45], country: 'Israel/Palestine', population: 0 },
            { name: 'Jericho', coordinates: [31.86, 35.46], country: 'Palestine', population: 22000 }
        ],
        
        cities: [
            { name: 'Jericho', coordinates: [31.86, 35.46], country: 'Palestine', population: 22000 },
            { name: 'Jerusalem', coordinates: [31.77, 35.23], country: 'Israel', population: 950000 },
            { name: 'Bethlehem', coordinates: [31.7, 35.21], country: 'Palestine', population: 30000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Jujube', 'Dead Sea Shrubs', 'Salt-tolerant species'],
            animals: ['Nubian Ibex', 'Rock Hyrax', 'Leopard (rare)', 'Griffon Vulture', 'Tristram\'s Starling', 'Desert Tortoise'],
            endangeredSpecies: ['Arabian Leopard (critically endangered)', 'Griffon Vulture (declining)']
        },
        
        humanLife: {
            peoples: ['Bedouin', 'Israeli', 'Palestinian', 'Monastic communities'],
            lifestyle: 'Religious sites, tourism, agriculture at oases',
            population: '~100,000 in and around the desert'
        },
        
        economy: [
            { label: 'Tourism', value: 'Dead Sea, Masada, religious sites' },
            { label: 'Dead Sea Products', value: 'Minerals, cosmetics' },
            { label: 'Agriculture', value: 'Date palms at oases' },
            { label: 'Religious', value: 'Monasteries and pilgrimages' }
        ],
        
        environmentalIssues: [
            { label: 'Dead Sea Shrinking', value: 'Losing 1 meter depth per year' },
            { label: 'Sinkholes', value: 'Thousands forming around Dead Sea' },
            { label: 'Flash Floods', value: 'Dangerous seasonal floods' },
            { label: 'Development', value: 'Tourism infrastructure' }
        ],
        
        historicalImportance: [
            { label: 'Dead Sea Scrolls', value: 'Found at Qumran 1947, oldest biblical texts' },
            { label: 'Masada', value: 'Jewish revolt against Rome 73 CE' },
            { label: 'Early Monasticism', value: 'Desert Fathers, Mar Saba founded 483 CE' },
            { label: 'Biblical Events', value: 'David hid from Saul, Jesus\' temptation' }
        ],
        
        funFacts: [
            'The Dead Sea is the lowest point on Earth at 430m below sea level',
            'Dead Sea Scrolls are 2,000 years old and include oldest Bible texts',
            'You cannot sink in the Dead Sea due to extreme salinity',
            'Masada is where Jewish rebels held out against Rome',
            'Flash floods can appear suddenly from clear skies',
            'The Dead Sea is shrinking by 1 meter per year',
            'Over 3,000 sinkholes have formed since 1980',
            'Mar Saba Monastery has been continuously inhabited since 483 CE'
        ],
        
        journeyWaypoints: [
            { name: 'Jerusalem', coordinates: [31.77, 35.23], description: 'Holy city on desert edge' },
            { name: 'Qumran', coordinates: [31.74, 35.46], description: 'Dead Sea Scrolls caves' },
            { name: 'Ein Gedi', coordinates: [31.45, 35.39], description: 'Oasis and ibex reserve' },
            { name: 'Masada', coordinates: [31.32, 35.35], description: 'Mountain fortress' },
            { name: 'Dead Sea', coordinates: [31.5, 35.5], description: 'Lowest point on Earth' }
        ]
    },

    // ========================================
    // #28 - SINAI DESERT
    // ========================================
    {
        id: 'sinai-desert',
        name: 'Sinai Desert',
        countries: [
            { name: 'Egypt', code: 'EG' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 60000,
        rank: 28,
        coordinates: [29.5, 34.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sinai Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [32.5, 28.0], [32.5, 31.5], [35.0, 31.5], [35.0, 28.0], [32.5, 28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '35°C',
            winterTempMin: '-5°C (mountains)',
            winterTempAvg: '12°C',
            maxRecorded: '48°C',
            annualRainfall: '20-100mm',
            rainyMonths: 'Winter (rare)'
        },
        
        formation: {
            type: 'Continental desert',
            causes: ['Extension of Sahara', 'Rain shadow', 'Subtropical high pressure'],
            age: 'Part of larger Saharan system'
        },
        
        landforms: [
            { name: 'Granite Mountains', description: 'Southern mountains including Mt. Sinai' },
            { name: 'Sand Dunes', description: 'Northern Sinai erg' },
            { name: 'Gravel Plains', description: 'Central plateau' },
            { name: 'Wadis', description: 'Flash flood channels' },
            { name: 'Coral Coast', description: 'Red Sea fringing reefs' }
        ],
        
        features: [
            { name: 'Mount Sinai', type: 'Mountain', coordinates: [28.54, 33.97], description: 'Where Moses received Ten Commandments, 2,285m' },
            { name: 'St. Catherine\'s Monastery', type: 'Monastery', coordinates: [28.56, 33.98], description: 'Oldest continuously operating monastery' },
            { name: 'Colored Canyon', type: 'Canyon', coordinates: [29.03, 34.6], description: 'Rainbow-colored rock formations' },
            { name: 'Blue Hole', type: 'Diving site', coordinates: [28.57, 34.54], description: 'Famous (and dangerous) diving site' },
            { name: 'White Canyon', type: 'Canyon', coordinates: [29.0, 34.65], description: 'White limestone formations' }
        ],
        
        oases: [
            { name: 'Feiran Oasis', coordinates: [28.72, 33.62], country: 'Egypt', population: 3000 },
            { name: 'Ain Khudra', coordinates: [29.12, 34.53], country: 'Egypt', population: 0 }
        ],
        
        cities: [
            { name: 'Sharm el-Sheikh', coordinates: [27.92, 34.33], country: 'Egypt', population: 73000 },
            { name: 'Dahab', coordinates: [28.5, 34.52], country: 'Egypt', population: 5000 },
            { name: 'Nuweiba', coordinates: [29.03, 34.67], country: 'Egypt', population: 7000 },
            { name: 'El-Arish', coordinates: [31.13, 33.8], country: 'Egypt', population: 165000 },
            { name: 'Taba', coordinates: [29.49, 34.9], country: 'Egypt', population: 3000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Tamarisk', 'Moringa', 'St. Catherine\'s endemic plants'],
            animals: ['Nubian Ibex', 'Sinai Leopard (possibly extinct)', 'Rock Hyrax', 'Lappet-faced Vulture', 'Sand Cat', 'Sinai Baton Blue butterfly'],
            endangeredSpecies: ['Sinai Leopard (critically endangered/extinct)', 'Lappet-faced Vulture', 'Dugong (coastal)']
        },
        
        humanLife: {
            peoples: ['Bedouin tribes (Jabaliya, Tarabin, Muzeina)', 'Egyptian'],
            lifestyle: 'Bedouin traditions, tourism, fishing',
            population: '~600,000 in Sinai Peninsula'
        },
        
        economy: [
            { label: 'Tourism', value: 'Red Sea resorts, Mt. Sinai pilgrimages' },
            { label: 'Diving', value: 'World-class coral reefs' },
            { label: 'Oil & Gas', value: 'Gulf of Suez production' },
            { label: 'Mining', value: 'Manganese, turquoise (ancient)' }
        ],
        
        environmentalIssues: [
            { label: 'Tourism Impact', value: 'Coral reef damage from overtourism' },
            { label: 'Security', value: 'Insurgency affecting development' },
            { label: 'Climate Change', value: 'Coral bleaching events' },
            { label: 'Overgrazing', value: 'Bedouin livestock' }
        ],
        
        historicalImportance: [
            { label: 'Exodus', value: 'Moses and Israelites 40 years in wilderness' },
            { label: 'St. Catherines', value: 'Founded 565 CE, oldest monastery' },
            { label: 'Ancient Mines', value: 'Egyptians mined turquoise and copper' },
            { label: 'Modern Wars', value: 'Israeli occupation 1967-1982' }
        ],
        
        funFacts: [
            'St. Catherines Monastery has operated continuously since 565 CE',
            'Contains possibly the oldest Bible manuscript (Codex Sinaiticus was found here)',
            'The Burning Bush is said to still grow at the monastery',
            'Sinai was traded between Egypt and Israel multiple times',
            'The Blue Hole has claimed many divers lives',
            'Bedouin have lived here for over 1,400 years',
            'The peninsula is shaped like a triangle',
            'Mt. Sinai is climbed by thousands of pilgrims annually for sunrise'
        ],
        
        journeyWaypoints: [
            { name: 'Sharm el-Sheikh', coordinates: [27.92, 34.33], description: 'Red Sea resort hub' },
            { name: 'Dahab', coordinates: [28.5, 34.52], description: 'Laid-back beach town' },
            { name: 'Mount Sinai', coordinates: [28.54, 33.97], description: 'Sacred mountain of Moses' },
            { name: 'St. Catherines', coordinates: [28.56, 33.98], description: 'Ancient monastery' },
            { name: 'Colored Canyon', coordinates: [29.03, 34.6], description: 'Rainbow rock formations' }
        ]
    },

    // ========================================
    // #29 - LIBYAN DESERT
    // ========================================
    {
        id: 'libyan-desert',
        name: 'Libyan Desert',
        countries: [
            { name: 'Libya', code: 'LY' },
            { name: 'Egypt', code: 'EG' },
            { name: 'Sudan', code: 'SD' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 1100000,
        rank: 29,
        coordinates: [25.0, 25.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Libyan Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [19.0, 19.0], [19.0, 32.0], [32.0, 32.0], [32.0, 19.0], [19.0, 19.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '40°C',
            winterTempMin: '-5°C (night)',
            winterTempAvg: '15°C',
            maxRecorded: '58°C (former world record at El Azizia)',
            annualRainfall: '<25mm',
            rainyMonths: 'Virtually none'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Part of Sahara system', 'Subtropical high pressure', 'No moisture sources'],
            age: 'Part of Sahara, 2-3 million years in current form'
        },
        
        landforms: [
            { name: 'Sand Seas', description: 'Great Sand Sea, Calanshio Sand Sea' },
            { name: 'Rocky Plateaus', description: 'Libyan Plateau, Gilf Kebir' },
            { name: 'Oasis Depressions', description: 'Siwa, Kharga, Dakhla' },
            { name: 'Sand Dunes', description: 'Some reaching 120m' }
        ],
        
        features: [
            { name: 'Great Sand Sea', type: 'Erg', coordinates: [26.0, 26.0], description: 'One of worlds largest sand seas' },
            { name: 'Gilf Kebir', type: 'Plateau', coordinates: [23.5, 26.0], description: 'Remote plateau with ancient cave art' },
            { name: 'Siwa Oasis', type: 'Oasis', coordinates: [29.2, 25.52], description: 'Remote oasis, Berber culture' },
            { name: 'Cave of Swimmers', type: 'Rock art', coordinates: [23.5, 25.7], description: 'Famous prehistoric art' },
            { name: 'Qattara Depression', type: 'Depression', coordinates: [29.5, 27.0], description: 'Below sea level basin' }
        ],
        
        oases: [
            { name: 'Siwa Oasis', coordinates: [29.2, 25.52], country: 'Egypt', population: 33000 },
            { name: 'Kharga Oasis', coordinates: [25.45, 30.55], country: 'Egypt', population: 70000 },
            { name: 'Dakhla Oasis', coordinates: [25.5, 29.0], country: 'Egypt', population: 80000 },
            { name: 'Kufra Oasis', coordinates: [24.2, 23.3], country: 'Libya', population: 50000 }
        ],
        
        cities: [
            { name: 'Benghazi', coordinates: [32.12, 20.07], country: 'Libya', population: 630000 },
            { name: 'Sabha', coordinates: [27.03, 14.43], country: 'Libya', population: 130000 },
            { name: 'Aswan', coordinates: [24.09, 32.9], country: 'Egypt', population: 290000 }
        ],
        
        biodiversity: {
            plants: ['Date Palm (oases)', 'Acacia (wadis)', 'Tamarisk', 'Sparse desert scrub'],
            animals: ['Fennec Fox', 'Sand Cat', 'Jerboa', 'Desert Monitor', 'Horned Viper', 'Saharan Cheetah (rare)'],
            endangeredSpecies: ['Saharan Cheetah (critically endangered)', 'Addax (critically endangered)']
        },
        
        humanLife: {
            peoples: ['Berber (Siwa)', 'Bedouin', 'Toubou', 'Arab'],
            lifestyle: 'Oasis agriculture, nomadic herding, oil industry',
            population: '~500,000 in oases and fringes'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Libyan oil fields' },
            { label: 'Agriculture', value: 'Oasis date farming' },
            { label: 'Tourism', value: 'Limited due to instability' },
            { label: 'Mining', value: 'Iron ore, phosphates' }
        ],
        
        environmentalIssues: [
            { label: 'Political Instability', value: 'Libya conflict affects conservation' },
            { label: 'Water Mining', value: 'Great Man-Made River depleting aquifer' },
            { label: 'Climate Change', value: 'Increasing aridity' },
            { label: 'Overgrazing', value: 'Oasis edge degradation' }
        ],
        
        historicalImportance: [
            { label: 'Cave of Swimmers', value: '8,000-year-old art showing green Sahara' },
            { label: 'Oracle of Amun', value: 'Alexander the Great visited Siwa 331 BCE' },
            { label: 'WWII Battles', value: 'North African campaign, Long Range Desert Group' },
            { label: 'Lost Army of Cambyses', value: '50,000 Persian soldiers allegedly lost 525 BCE' }
        ],
        
        funFacts: [
            'Once held the world temperature record at 58°C (later disputed)',
            'The Cave of Swimmers shows people swimming 8,000 years ago',
            'Alexander the Great traveled to Siwa to consult the Oracle',
            'The Lost Army of Cambyses may still be buried in the sand',
            'Siwa Oasis has its own Berber language',
            'The Great Man-Made River is the largest irrigation project ever',
            'WWII Long Range Desert Group operated throughout',
            'Some areas have never been surveyed by modern explorers'
        ],
        
        journeyWaypoints: [
            { name: 'Siwa Oasis', coordinates: [29.2, 25.52], description: 'Remote Berber oasis' },
            { name: 'Great Sand Sea', coordinates: [26.0, 26.0], description: 'Endless sand dunes' },
            { name: 'Gilf Kebir', coordinates: [23.5, 26.0], description: 'Remote plateau sanctuary' },
            { name: 'Cave of Swimmers', coordinates: [23.5, 25.7], description: 'Prehistoric art gallery' },
            { name: 'Kufra Oasis', coordinates: [24.2, 23.3], description: 'Deep southern oasis' }
        ]
    },

    // ========================================
    // #30 - NUBIAN DESERT
    // ========================================
    {
        id: 'nubian-desert',
        name: 'Nubian Desert',
        countries: [
            { name: 'Sudan', code: 'SD' },
            { name: 'Egypt', code: 'EG' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 400000,
        rank: 30,
        coordinates: [21.0, 34.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Nubian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [31.0, 18.0], [31.0, 24.0], [38.0, 24.0], [38.0, 18.0], [31.0, 18.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '47°C',
            summerTempAvg: '40°C',
            winterTempMin: '5°C',
            winterTempAvg: '20°C',
            maxRecorded: '50°C',
            annualRainfall: '<25mm',
            rainyMonths: 'Virtually none in north, summer storms in south'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Eastern Sahara extension', 'Red Sea Hills rain shadow', 'Subtropical high pressure'],
            age: 'Part of greater Saharan system'
        },
        
        landforms: [
            { name: 'Red Sea Hills', description: 'Mountain chain along coast' },
            { name: 'Sandstone Plateaus', description: 'Eroded ancient formations' },
            { name: 'Nile Valley', description: 'Lifeline through the desert' },
            { name: 'Volcanic Fields', description: 'Ancient lava flows' },
            { name: 'Gold-bearing Quartz Veins', description: 'Historic mining areas' }
        ],
        
        features: [
            { name: 'Meroë Pyramids', type: 'Archaeological', coordinates: [16.94, 33.75], description: 'Kushite pyramids, UNESCO site' },
            { name: 'Nile Cataracts', type: 'River features', coordinates: [21.0, 30.5], description: 'Six cataracts break the Nile' },
            { name: 'Jebel Barkal', type: 'Sacred mountain', coordinates: [18.53, 31.82], description: 'Holy mountain of Kush' },
            { name: 'Old Dongola', type: 'Ruins', coordinates: [18.22, 30.75], description: 'Medieval Christian kingdom capital' }
        ],
        
        oases: [
            { name: 'Selima Oasis', coordinates: [21.37, 26.87], country: 'Sudan', population: 0 },
            { name: 'Laqiya Oases', coordinates: [20.5, 28.5], country: 'Sudan', population: 1000 }
        ],
        
        cities: [
            { name: 'Wadi Halfa', coordinates: [21.8, 31.35], country: 'Sudan', population: 15000 },
            { name: 'Port Sudan', coordinates: [19.62, 37.22], country: 'Sudan', population: 490000 },
            { name: 'Atbara', coordinates: [17.7, 33.97], country: 'Sudan', population: 150000 },
            { name: 'Karima', coordinates: [18.55, 31.85], country: 'Sudan', population: 10000 },
            { name: 'Aswan', coordinates: [24.09, 32.9], country: 'Egypt', population: 290000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Tamarisk', 'Date Palm (Nile)', 'Doum Palm', 'Desert scrub'],
            animals: ['Nubian Ibex', 'Dorcas Gazelle', 'Fennec Fox', 'Desert Hedgehog', 'Sand Cat', 'Nile Crocodile (river)'],
            endangeredSpecies: ['Nubian Ibex (vulnerable)', 'Slender-horned Gazelle']
        },
        
        humanLife: {
            peoples: ['Nubian', 'Beja', 'Ababda', 'Sudanese Arab'],
            lifestyle: 'Nile agriculture, gold mining, pastoral',
            population: '~2 million in Nubian region'
        },
        
        economy: [
            { label: 'Gold Mining', value: 'Artisanal and industrial gold extraction' },
            { label: 'Agriculture', value: 'Nile irrigation' },
            { label: 'Trade', value: 'Egypt-Sudan border trade' },
            { label: 'Archaeology', value: 'Tourism potential (limited)' }
        ],
        
        environmentalIssues: [
            { label: 'Gold Mining Pollution', value: 'Mercury contamination' },
            { label: 'Dam Impacts', value: 'Aswan Dam flooded ancient Nubia' },
            { label: 'Desertification', value: 'Sahara expanding southward' },
            { label: 'Water Conflicts', value: 'Nile water disputes' }
        ],
        
        historicalImportance: [
            { label: 'Kingdom of Kush', value: 'Rival to ancient Egypt, Meroë capital' },
            { label: 'Black Pharaohs', value: '25th Dynasty ruled Egypt from Nubia' },
            { label: 'Christian Nubia', value: 'Medieval kingdoms 600-1500 CE' },
            { label: 'Gold Source', value: 'Egyptians called it "Land of Gold"' }
        ],
        
        funFacts: [
            'Ancient Egyptians called Nubia "Ta-Seti" (Land of the Bow)',
            'The Kushite kingdom conquered and ruled Egypt for nearly a century',
            'Nubia has more pyramids than Egypt (about 255 vs 138)',
            'The Nubian language is one of the oldest in Africa',
            'Aswan High Dam flooded much of ancient Nubia in 1960s',
            'The Beja people have lived here for 4,000 years',
            'Ancient gold mines are still being worked today',
            'Christian kingdoms flourished here for 900 years'
        ],
        
        journeyWaypoints: [
            { name: 'Aswan', coordinates: [24.09, 32.9], description: 'Gateway to Nubia' },
            { name: 'Abu Simbel', coordinates: [22.34, 31.63], description: 'Rescued Ramesses temples' },
            { name: 'Wadi Halfa', coordinates: [21.8, 31.35], description: 'Border town, flooded old town' },
            { name: 'Jebel Barkal', coordinates: [18.53, 31.82], description: 'Sacred mountain of Kush' },
            { name: 'Meroë', coordinates: [16.94, 33.75], description: 'Kushite pyramids' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_3;
}
