/* ==========================================
   DESERTS DATA - FILE 1 OF 5
   Deserts 1-10 (Largest by Area)
   ========================================== */

const DESERTS_DATA_1 = [
    // ========================================
    // #1 - ANTARCTIC DESERT
    // ========================================
    {
        id: 'antarctic-desert',
        name: 'Antarctic Desert',
        countries: [
            { name: 'Antarctica', code: 'AQ' }
        ],
        continent: 'Antarctica',
        desertType: 'cold',
        area: 14200000,
        rank: 1,
        coordinates: [-82.8628, 135.0000],
        defaultZoom: 3,
        image: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Antarctic Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, -60], [180, -60], [180, -90], [-180, -90], [-180, -60]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '0°C',
            summerTempAvg: '-20°C',
            winterTempMin: '-89.2°C',
            winterTempAvg: '-60°C',
            maxRecorded: '18.3°C (Esperanza Base)',
            minRecorded: '-89.2°C (Vostok Station)',
            annualRainfall: '<50mm (as snow)',
            rainyMonths: 'None - precipitation as snow'
        },
        
        formation: {
            type: 'Polar desert',
            causes: ['Extreme cold', 'High pressure system', 'Isolation from warm currents', 'High altitude'],
            age: '34 million years (ice sheet formation)'
        },
        
        landforms: [
            { name: 'Ice Sheet', description: 'Covers 98% of Antarctica, up to 4.8km thick' },
            { name: 'Dry Valleys', description: 'Ice-free valleys, most Mars-like place on Earth' },
            { name: 'Nunataks', description: 'Mountain peaks protruding through ice' },
            { name: 'Ice Shelves', description: 'Floating ice platforms extending into sea' }
        ],
        
        features: [
            { name: 'Vinson Massif', type: 'Mountain', coordinates: [-78.5254, -85.6172], description: 'Highest peak at 4,892m' },
            { name: 'McMurdo Dry Valleys', type: 'Geological', coordinates: [-77.5, 162.0], description: 'Ice-free desert valleys' },
            { name: 'Lake Vostok', type: 'Subglacial Lake', coordinates: [-77.0, 105.0], description: 'Buried under 4km of ice' },
            { name: 'Ross Ice Shelf', type: 'Ice Formation', coordinates: [-81.5, 175.0], description: 'Size of France' }
        ],
        
        oases: [
            { name: 'Schirmacher Oasis', coordinates: [-70.75, 11.6], country: 'Antarctica', population: 0 },
            { name: 'Bunger Hills', coordinates: [-66.25, 100.75], country: 'Antarctica', population: 0 }
        ],
        
        cities: [
            { name: 'McMurdo Station', coordinates: [-77.85, 166.67], country: 'Antarctica (USA)', population: 1000 },
            { name: 'Amundsen-Scott Station', coordinates: [-90.0, 0.0], country: 'Antarctica (USA)', population: 150 },
            { name: 'Vostok Station', coordinates: [-78.46, 106.84], country: 'Antarctica (Russia)', population: 25 }
        ],
        
        biodiversity: {
            plants: ['Mosses', 'Lichens', 'Antarctic Hair Grass', 'Antarctic Pearlwort'],
            animals: ['Emperor Penguin', 'Weddell Seal', 'Antarctic Krill', 'Snow Petrel', 'Leopard Seal', 'Antarctic Midge'],
            endangeredSpecies: ['Blue Whale', 'Fin Whale']
        },
        
        humanLife: {
            peoples: ['No indigenous population'],
            lifestyle: 'Research stations only',
            population: '1,000-5,000 (seasonal researchers)'
        },
        
        economy: [
            { label: 'Scientific Research', value: 'Climate, astronomy, biology studies' },
            { label: 'Tourism', value: '~75,000 visitors annually' },
            { label: 'Fishing', value: 'Regulated krill and fish harvesting' },
            { label: 'Mineral Resources', value: 'Protected by Antarctic Treaty' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Ice sheet melting accelerating' },
            { label: 'Ozone Depletion', value: 'Ozone hole over Antarctica' },
            { label: 'Tourism Impact', value: 'Increasing human footprint' },
            { label: 'Sea Level Rise', value: 'Contains 70% of Earths freshwater' }
        ],
        
        historicalImportance: [
            { label: 'Exploration Era', value: 'Race to South Pole 1911-1912' },
            { label: 'Antarctic Treaty', value: 'Signed 1959, protects continent' },
            { label: 'Scientific Discovery', value: 'Ozone hole discovered 1985' },
            { label: 'Climate Record', value: 'Ice cores reveal 800,000 years of climate' }
        ],
        
        funFacts: [
            'Largest desert on Earth by area',
            'Contains 70% of worlds freshwater',
            'Technically the driest place on Earth',
            'No permanent human residents',
            'Has 24 hours of daylight in summer',
            'Coldest temperature ever recorded: -89.2°C',
            'The ice sheet is so heavy it pushes land below sea level'
        ],
        
        journeyWaypoints: [
            { name: 'Ross Island', coordinates: [-77.5, 168.0], description: 'Gateway to Antarctica, McMurdo Station' },
            { name: 'Transantarctic Mountains', coordinates: [-80.0, 160.0], description: 'Mountain range dividing East and West Antarctica' },
            { name: 'South Pole', coordinates: [-90.0, 0.0], description: 'Geographic South Pole, Amundsen-Scott Station' },
            { name: 'Vostok Station', coordinates: [-78.46, 106.84], description: 'Russian research station, coldest place' },
            { name: 'Dry Valleys', coordinates: [-77.5, 162.0], description: 'Mars-like ice-free landscape' }
        ]
    },

    // ========================================
    // #2 - ARCTIC DESERT
    // ========================================
    {
        id: 'arctic-desert',
        name: 'Arctic Desert',
        countries: [
            { name: 'Russia', code: 'RU' },
            { name: 'Canada', code: 'CA' },
            { name: 'Greenland (Denmark)', code: 'GL' },
            { name: 'Norway', code: 'NO' },
            { name: 'United States (Alaska)', code: 'US' },
            { name: 'Iceland', code: 'IS' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Finland', code: 'FI' }
        ],
        continent: 'Arctic',
        desertType: 'cold',
        area: 13900000,
        rank: 2,
        coordinates: [90.0000, 0.0000],
        defaultZoom: 2,
        image: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Arctic Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, 66.5], [180, 66.5], [180, 90], [-180, 90], [-180, 66.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '10°C',
            summerTempAvg: '0°C',
            winterTempMin: '-50°C',
            winterTempAvg: '-30°C',
            maxRecorded: '38°C (Verkhoyansk, Russia)',
            minRecorded: '-67.8°C (Oymyakon, Russia)',
            annualRainfall: '<250mm',
            rainyMonths: 'July-August (brief summer)'
        },
        
        formation: {
            type: 'Polar desert',
            causes: ['Extreme cold', 'Polar high pressure', 'Limited solar radiation', 'Permafrost'],
            age: '2.6 million years (current ice age)'
        },
        
        landforms: [
            { name: 'Sea Ice', description: 'Floating ice cover, shrinking annually' },
            { name: 'Tundra', description: 'Treeless permafrost plains' },
            { name: 'Pingos', description: 'Ice-cored mounds' },
            { name: 'Fjords', description: 'Glacially carved coastal inlets' }
        ],
        
        features: [
            { name: 'North Pole', type: 'Geographic Point', coordinates: [90.0, 0.0], description: 'Northernmost point on Earth' },
            { name: 'Greenland Ice Sheet', type: 'Ice Formation', coordinates: [72.0, -40.0], description: 'Second largest ice body' },
            { name: 'Svalbard', type: 'Archipelago', coordinates: [78.0, 16.0], description: 'Norwegian Arctic islands' },
            { name: 'Northwest Passage', type: 'Sea Route', coordinates: [74.0, -100.0], description: 'Arctic shipping route' }
        ],
        
        oases: [],
        
        cities: [
            { name: 'Longyearbyen', coordinates: [78.22, 15.64], country: 'Norway', population: 2400 },
            { name: 'Barrow (Utqiaġvik)', coordinates: [71.29, -156.79], country: 'USA', population: 4400 },
            { name: 'Murmansk', coordinates: [68.97, 33.09], country: 'Russia', population: 295000 },
            { name: 'Tromsø', coordinates: [69.65, 18.96], country: 'Norway', population: 77000 }
        ],
        
        biodiversity: {
            plants: ['Arctic Willow', 'Arctic Moss', 'Bearberry', 'Labrador Tea', 'Arctic Poppy'],
            animals: ['Polar Bear', 'Arctic Fox', 'Caribou/Reindeer', 'Musk Ox', 'Snowy Owl', 'Arctic Hare', 'Walrus', 'Narwhal', 'Beluga Whale'],
            endangeredSpecies: ['Polar Bear (vulnerable)', 'Narwhal (near threatened)']
        },
        
        humanLife: {
            peoples: ['Inuit', 'Yupik', 'Sami', 'Nenets', 'Chukchi'],
            lifestyle: 'Hunting, fishing, reindeer herding',
            population: '~4 million in Arctic regions'
        },
        
        economy: [
            { label: 'Oil & Gas', value: '13% of worlds undiscovered oil' },
            { label: 'Mining', value: 'Diamonds, gold, zinc' },
            { label: 'Fishing', value: 'Major fishing grounds' },
            { label: 'Shipping', value: 'Northern Sea Route opening' },
            { label: 'Tourism', value: 'Arctic cruises, Northern Lights' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Warming 2-3x faster than global average' },
            { label: 'Sea Ice Loss', value: 'Summer ice declining 13% per decade' },
            { label: 'Permafrost Thaw', value: 'Releasing methane greenhouse gas' },
            { label: 'Oil Spill Risk', value: 'Increased shipping and drilling' }
        ],
        
        historicalImportance: [
            { label: 'Indigenous History', value: '20,000+ years of human habitation' },
            { label: 'Northwest Passage', value: 'Centuries of exploration attempts' },
            { label: 'North Pole Race', value: 'Peary 1909, disputed claims' },
            { label: 'Cold War', value: 'Strategic military importance' }
        ],
        
        funFacts: [
            'Second largest desert on Earth',
            'Arctic means "near the bear" (constellation)',
            'Has 6 months of daylight and 6 months of darkness',
            'Polar bears only live in the Arctic, not Antarctica',
            'The Arctic Ocean is the smallest ocean',
            'Indigenous peoples have lived there for 20,000 years',
            'Santa Claus traditionally lives at the North Pole'
        ],
        
        journeyWaypoints: [
            { name: 'Svalbard', coordinates: [78.0, 16.0], description: 'Norwegian Arctic archipelago' },
            { name: 'North Pole', coordinates: [90.0, 0.0], description: 'Geographic North Pole on sea ice' },
            { name: 'Franz Josef Land', coordinates: [80.5, 55.0], description: 'Russian Arctic archipelago' },
            { name: 'Canadian Arctic', coordinates: [75.0, -100.0], description: 'Northwest Passage region' },
            { name: 'Greenland Coast', coordinates: [72.0, -40.0], description: 'Worlds largest island' }
        ]
    },

    // ========================================
    // #3 - SAHARA DESERT
    // ========================================
    {
        id: 'sahara-desert',
        name: 'Sahara Desert',
        countries: [
            { name: 'Algeria', code: 'DZ' },
            { name: 'Egypt', code: 'EG' },
            { name: 'Libya', code: 'LY' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Mali', code: 'ML' },
            { name: 'Niger', code: 'NE' },
            { name: 'Chad', code: 'TD' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Western Sahara', code: 'EH' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 9200000,
        rank: 3,
        coordinates: [23.4162, 12.2286],
        defaultZoom: 4,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sahara Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-17.0, 15.0], [-17.0, 35.0], [35.0, 35.0], [35.0, 15.0], [-17.0, 15.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '50°C',
            summerTempAvg: '38°C',
            winterTempMin: '-5°C (night)',
            winterTempAvg: '20°C',
            maxRecorded: '58°C (Aziziya, Libya)',
            annualRainfall: '<25mm',
            rainyMonths: 'None (irregular storms)'
        },
        
        formation: {
            type: 'Trade wind desert',
            causes: ['Subtropical high pressure', 'Cold Canary Current', 'Rain shadow of Atlas', 'Continental position'],
            age: '2-3 million years (current form)'
        },
        
        landforms: [
            { name: 'Erg (Sand seas)', description: '25% of Sahara, massive dune fields up to 180m high' },
            { name: 'Hamada (Rocky plateau)', description: '70% of Sahara, bare rock and gravel' },
            { name: 'Reg (Gravel plains)', description: 'Flat pebble-covered desert pavement' },
            { name: 'Wadis', description: 'Dry riverbeds, flash flood channels' },
            { name: 'Sebkhas', description: 'Salt flats and dried lake beds' }
        ],
        
        features: [
            { name: 'Erg Chebbi', type: 'Sand dunes', coordinates: [31.1492, -4.0125], description: 'Iconic 150m high orange dunes' },
            { name: 'Tibesti Mountains', type: 'Mountain', coordinates: [20.8, 17.8], description: 'Highest point Emi Koussi 3,445m' },
            { name: 'Richat Structure', type: 'Geological', coordinates: [21.1167, -11.4], description: 'Eye of the Sahara, 50km diameter' },
            { name: 'Tassili nAjjer', type: 'Plateau', coordinates: [25.5, 9.0], description: 'Ancient rock art, UNESCO site' },
            { name: 'Grand Erg Oriental', type: 'Sand sea', coordinates: [30.5, 7.5], description: 'Vast dune field in Algeria' }
        ],
        
        oases: [
            { name: 'Siwa Oasis', coordinates: [29.2, 25.52], country: 'Egypt', population: 33000 },
            { name: 'Tafilalt Oasis', coordinates: [31.5, -4.2], country: 'Morocco', population: 100000 },
            { name: 'Kufra Oasis', coordinates: [24.2, 23.3], country: 'Libya', population: 50000 },
            { name: 'Djanet Oasis', coordinates: [24.55, 9.48], country: 'Algeria', population: 15000 },
            { name: 'Faya-Largeau', coordinates: [17.93, 19.1], country: 'Chad', population: 13000 }
        ],
        
        cities: [
            { name: 'Ouarzazate', coordinates: [30.92, -6.9], country: 'Morocco', population: 72000 },
            { name: 'Timbuktu', coordinates: [16.77, -3.0], country: 'Mali', population: 55000 },
            { name: 'Ghadames', coordinates: [30.13, 9.5], country: 'Libya', population: 10000 },
            { name: 'Tamanrasset', coordinates: [22.79, 5.52], country: 'Algeria', population: 93000 },
            { name: 'Agadez', coordinates: [16.97, 7.99], country: 'Niger', population: 124000 }
        ],
        
        biodiversity: {
            plants: ['Date Palm', 'Acacia', 'Desert Rose', 'Tamarisk', 'Fig', 'Doum Palm', 'Oleander'],
            animals: ['Dromedary Camel', 'Fennec Fox', 'Addax', 'Dorcas Gazelle', 'Desert Monitor', 'Deathstalker Scorpion', 'Saharan Horned Viper', 'Saharan Silver Ant'],
            endangeredSpecies: ['Addax (critically endangered)', 'Saharan Cheetah (critically endangered)', 'Slender-horned Gazelle']
        },
        
        humanLife: {
            peoples: ['Tuareg', 'Bedouin', 'Berber', 'Toubou', 'Sahrawi'],
            lifestyle: 'Nomadic herding, oasis agriculture, trans-Saharan trade',
            population: '2.5 million in desert proper'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Algeria, Libya major producers' },
            { label: 'Mining', value: 'Iron ore, phosphates, uranium, gold' },
            { label: 'Tourism', value: 'Desert safaris, Erg Chebbi, Siwa' },
            { label: 'Solar Energy', value: 'Massive solar potential, Desertec project' },
            { label: 'Salt Trade', value: 'Ancient Taoudenni salt mines still active' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Expanding southward into Sahel at 48km/year' },
            { label: 'Climate Change', value: 'Increasing temperatures and evaporation' },
            { label: 'Water Depletion', value: 'Fossil aquifers being pumped dry' },
            { label: 'Overgrazing', value: 'Vegetation loss at desert edges' },
            { label: 'Sand Encroachment', value: 'Dunes burying settlements and roads' }
        ],
        
        historicalImportance: [
            { label: 'Green Sahara', value: 'Was lush savanna 5,000-11,000 years ago' },
            { label: 'Trans-Saharan Trade', value: 'Gold, salt, slaves traded for 1,500+ years' },
            { label: 'Ancient Egypt', value: 'Nile corridor through eastern Sahara' },
            { label: 'Rock Art', value: 'Tassili nAjjer cave paintings 8,000 years old' },
            { label: 'Garamantes', value: 'Ancient Saharan civilization with irrigation' }
        ],
        
        funFacts: [
            'Size of the entire United States',
            'Only 25% is sand dunes, 75% is rock and gravel',
            'Was green and full of lakes 5,000 years ago',
            'Gets snow occasionally in winter in mountains',
            'Contains the hottest reliably recorded temperature: 55°C',
            'The word Sahara comes from Arabic for "desert"',
            'Saharan dust fertilizes the Amazon rainforest',
            'Has more stars visible at night than almost anywhere on Earth'
        ],
        
        journeyWaypoints: [
            { name: 'Morocco Atlas Edge', coordinates: [31.5, -6.5], description: 'Starting from the Atlas foothills' },
            { name: 'Erg Chebbi Dunes', coordinates: [31.1, -4.0], description: 'Towering golden sand dunes' },
            { name: 'Algerian Plateau', coordinates: [28.0, 2.0], description: 'Vast rocky hamada terrain' },
            { name: 'Tassili Mountains', coordinates: [25.5, 9.0], description: 'Ancient rock art sites' },
            { name: 'Tibesti Massif', coordinates: [21.0, 17.5], description: 'Volcanic mountains in Chad' },
            { name: 'Southern Edge', coordinates: [17.0, 10.0], description: 'Where Sahara meets Sahel savanna' }
        ]
    },

    // ========================================
    // #4 - ARABIAN DESERT
    // ========================================
    {
        id: 'arabian-desert',
        name: 'Arabian Desert',
        countries: [
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Oman', code: 'OM' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Iraq', code: 'IQ' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 2330000,
        rank: 4,
        coordinates: [22.5, 46.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Arabian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [34.0, 12.0], [34.0, 32.0], [60.0, 32.0], [60.0, 12.0], [34.0, 12.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '54°C',
            summerTempAvg: '45°C',
            winterTempMin: '0°C (night)',
            winterTempAvg: '15°C',
            maxRecorded: '54°C (Kuwait)',
            annualRainfall: '<100mm',
            rainyMonths: 'November-March (sporadic)'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Subtropical high pressure', 'Rain shadow of mountains', 'Distance from ocean moisture'],
            age: '5,000-6,000 years (current form)'
        },
        
        landforms: [
            { name: 'Rub al Khali (Empty Quarter)', description: 'Largest contiguous sand desert, 650,000 km²' },
            { name: 'An Nafud', description: 'Northern sand desert with red dunes' },
            { name: 'Dahna Desert', description: 'Arc of red sand connecting Nafud to Rub al Khali' },
            { name: 'Jafurah Desert', description: 'Coastal desert near Persian Gulf' },
            { name: 'Volcanic Fields', description: 'Harrat volcanic lava fields' }
        ],
        
        features: [
            { name: 'Rub al Khali', type: 'Sand sea', coordinates: [20.0, 50.0], description: 'Empty Quarter, largest sand desert' },
            { name: 'Al Wahbah Crater', type: 'Volcanic crater', coordinates: [22.9, 41.13], description: '250m deep volcanic crater' },
            { name: 'Edge of the World', type: 'Cliff', coordinates: [24.85, 46.22], description: 'Dramatic escarpment near Riyadh' },
            { name: 'Wadi Rum', type: 'Valley', coordinates: [29.53, 35.42], description: 'Valley of the Moon in Jordan' }
        ],
        
        oases: [
            { name: 'Al-Hasa Oasis', coordinates: [25.38, 49.58], country: 'Saudi Arabia', population: 1200000 },
            { name: 'Liwa Oasis', coordinates: [23.13, 53.76], country: 'UAE', population: 20000 },
            { name: 'Al-Ain Oasis', coordinates: [24.21, 55.76], country: 'UAE', population: 766900 },
            { name: 'Azraq Oasis', coordinates: [31.83, 36.83], country: 'Jordan', population: 15000 }
        ],
        
        cities: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], country: 'Saudi Arabia', population: 7500000 },
            { name: 'Dubai', coordinates: [25.2, 55.27], country: 'UAE', population: 3400000 },
            { name: 'Doha', coordinates: [25.29, 51.53], country: 'Qatar', population: 2400000 },
            { name: 'Muscat', coordinates: [23.61, 58.59], country: 'Oman', population: 1550000 },
            { name: 'Sana\'a', coordinates: [15.35, 44.21], country: 'Yemen', population: 3000000 }
        ],
        
        biodiversity: {
            plants: ['Date Palm', 'Ghaf Tree', 'Acacia', 'Desert Hyacinth', 'Arabian Primrose'],
            animals: ['Arabian Oryx', 'Arabian Leopard', 'Sand Cat', 'Spiny-tailed Lizard', 'Arabian Red Fox', 'Dromedary Camel', 'Sand Gazelle'],
            endangeredSpecies: ['Arabian Oryx (vulnerable)', 'Arabian Leopard (critically endangered)', 'Arabian Tahr']
        },
        
        humanLife: {
            peoples: ['Bedouin', 'Saudi Arabs', 'Emirati', 'Omani'],
            lifestyle: 'Traditional nomadic herding, modern urban cities',
            population: '~83 million in Arabian Peninsula'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Worlds largest oil reserves, 25% of global supply' },
            { label: 'Tourism', value: 'Dubai, Wadi Rum, religious tourism (Mecca, Medina)' },
            { label: 'Construction', value: 'Mega-projects like NEOM' },
            { label: 'Solar Energy', value: 'Massive solar farms being developed' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Relies heavily on desalination' },
            { label: 'Climate Change', value: 'Increasingly extreme heat waves' },
            { label: 'Habitat Loss', value: 'Development threatening wildlife' },
            { label: 'Air Quality', value: 'Dust storms and pollution' }
        ],
        
        historicalImportance: [
            { label: 'Birthplace of Islam', value: 'Mecca and Medina, 7th century CE' },
            { label: 'Incense Route', value: 'Ancient trade in frankincense and myrrh' },
            { label: 'Nabataean Civilization', value: 'Petra and desert trade empire' },
            { label: 'Lawrence of Arabia', value: 'WWI Arab Revolt through desert' }
        ],
        
        funFacts: [
            'The Empty Quarter has dunes up to 250 meters high',
            'Summer temperatures can reach 55°C in the shade',
            'Contains 25% of the worlds proven oil reserves',
            'The Arabian oryx was extinct in the wild until reintroduction',
            'Ancient lake beds are found beneath the sand',
            'Dubai was a small fishing village 50 years ago',
            'The Bedouin can find water by observing ant behavior'
        ],
        
        journeyWaypoints: [
            { name: 'Wadi Rum', coordinates: [29.53, 35.42], description: 'Valley of the Moon, Jordan' },
            { name: 'An Nafud', coordinates: [28.0, 41.0], description: 'Northern red sand desert' },
            { name: 'Edge of the World', coordinates: [24.85, 46.22], description: 'Dramatic cliff escarpment' },
            { name: 'Rub al Khali Edge', coordinates: [22.0, 50.0], description: 'Entering the Empty Quarter' },
            { name: 'Liwa Oasis', coordinates: [23.13, 53.76], description: 'Oasis at the edge of Empty Quarter' }
        ]
    },

    // ========================================
    // #5 - GOBI DESERT
    // ========================================
    {
        id: 'gobi-desert',
        name: 'Gobi Desert',
        countries: [
            { name: 'Mongolia', code: 'MN' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 1295000,
        rank: 5,
        coordinates: [42.5, 105.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Gobi Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [87.0, 37.0], [87.0, 47.0], [120.0, 47.0], [120.0, 37.0], [87.0, 37.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '25°C',
            winterTempMin: '-40°C',
            winterTempAvg: '-20°C',
            maxRecorded: '45°C',
            annualRainfall: '50-100mm',
            rainyMonths: 'June-August (monsoon fringe)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Himalayan rain shadow', 'Distance from ocean', 'High altitude', 'Cold Siberian air'],
            age: '65 million years (Cretaceous formation)'
        },
        
        landforms: [
            { name: 'Khongoryn Els', description: 'Singing Dunes, 180km long, up to 300m high' },
            { name: 'Flaming Cliffs', description: 'Red sandstone formations, dinosaur fossils' },
            { name: 'Gobi Altai', description: 'Mountain ranges within the desert' },
            { name: 'Gravel Plains', description: 'Vast pebbly desert pavement' }
        ],
        
        features: [
            { name: 'Khongoryn Els', type: 'Sand dunes', coordinates: [43.75, 102.2], description: 'Singing Dunes, largest in Gobi' },
            { name: 'Flaming Cliffs (Bayanzag)', type: 'Geological', coordinates: [44.15, 103.72], description: 'Dinosaur fossil site' },
            { name: 'Yolyn Am', type: 'Canyon', coordinates: [43.5, 104.08], description: 'Ice canyon in summer' },
            { name: 'Gurvan Saikhan', type: 'Mountains', coordinates: [43.6, 104.2], description: 'Three Beauties Mountains' }
        ],
        
        oases: [
            { name: 'Dunhuang', coordinates: [40.14, 94.66], country: 'China', population: 140000 },
            { name: 'Dalanzadgad', coordinates: [43.58, 104.42], country: 'Mongolia', population: 20000 }
        ],
        
        cities: [
            { name: 'Sainshand', coordinates: [44.87, 110.12], country: 'Mongolia', population: 25000 },
            { name: 'Dalanzadgad', coordinates: [43.58, 104.42], country: 'Mongolia', population: 20000 },
            { name: 'Jiuquan', coordinates: [39.74, 98.5], country: 'China', population: 1100000 },
            { name: 'Hohhot', coordinates: [40.84, 111.75], country: 'China', population: 3500000 }
        ],
        
        biodiversity: {
            plants: ['Saxaul Tree', 'Wild Onion', 'Convolvulus', 'Gobi Kumarchik', 'Tamarix'],
            animals: ['Bactrian Camel', 'Gobi Bear', 'Snow Leopard', 'Mongolian Wild Ass', 'Gobi Jerboa', 'Long-eared Hedgehog', 'Siberian Ibex'],
            endangeredSpecies: ['Gobi Bear (critically endangered, <50 left)', 'Snow Leopard (vulnerable)', 'Przewalski\'s Horse']
        },
        
        humanLife: {
            peoples: ['Mongolian nomads', 'Chinese Han', 'Uyghur'],
            lifestyle: 'Nomadic herding, ger (yurt) dwellings, horse culture',
            population: '~3 million in Gobi regions'
        },
        
        economy: [
            { label: 'Mining', value: 'Copper, gold, coal (Oyu Tolgoi mine)' },
            { label: 'Livestock', value: 'Cashmere goats, horses, camels' },
            { label: 'Tourism', value: 'Adventure tourism, dinosaur sites' },
            { label: 'Renewable Energy', value: 'Wind farms in southern Gobi' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Expanding at 3,600 km² per year' },
            { label: 'Dust Storms', value: 'Increasing frequency reaching Beijing' },
            { label: 'Climate Change', value: 'Warming faster than global average' },
            { label: 'Mining Impact', value: 'Water and land degradation' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Major trade route crossing the Gobi' },
            { label: 'Mongol Empire', value: 'Genghis Khans armies crossed here' },
            { label: 'Dinosaur Discoveries', value: 'First dinosaur eggs found 1923' },
            { label: 'Mogao Caves', value: 'Buddhist art spanning 1,000 years' }
        ],
        
        funFacts: [
            'One of the few deserts where dinosaur eggs were found',
            'Can experience temperature swings of 35°C in one day',
            'The Bactrian camel can drink 100 liters of water in 10 minutes',
            'Gobi means "waterless place" in Mongolian',
            'The Gobi Bear is one of the rarest animals on Earth',
            'Genghis Khan is said to be buried somewhere in the Gobi',
            'Contains one of the most complete dinosaur fossil records'
        ],
        
        journeyWaypoints: [
            { name: 'Dunhuang Caves', coordinates: [40.14, 94.66], description: 'Ancient Buddhist cave art' },
            { name: 'Singing Dunes', coordinates: [43.75, 102.2], description: 'Khongoryn Els sand dunes' },
            { name: 'Flaming Cliffs', coordinates: [44.15, 103.72], description: 'Dinosaur fossil discovery site' },
            { name: 'Yolyn Am Canyon', coordinates: [43.5, 104.08], description: 'Ice-filled desert canyon' },
            { name: 'Eastern Gobi', coordinates: [44.5, 110.0], description: 'Vast gravel plains' }
        ]
    },

    // ========================================
    // #6 - KALAHARI DESERT
    // ========================================
    {
        id: 'kalahari-desert',
        name: 'Kalahari Desert',
        countries: [
            { name: 'Botswana', code: 'BW' },
            { name: 'Namibia', code: 'NA' },
            { name: 'South Africa', code: 'ZA' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 900000,
        rank: 6,
        coordinates: [-23.0, 22.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Kalahari Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [17.0, -28.0], [17.0, -18.0], [27.0, -18.0], [27.0, -28.0], [17.0, -28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '35°C',
            winterTempMin: '-10°C (night)',
            winterTempAvg: '20°C',
            maxRecorded: '45°C',
            annualRainfall: '150-500mm',
            rainyMonths: 'November-April (summer monsoon)'
        },
        
        formation: {
            type: 'Semi-arid desert',
            causes: ['Subtropical high pressure', 'Rain shadow', 'Cold Benguela Current'],
            age: '60 million years (sand deposits)'
        },
        
        landforms: [
            { name: 'Kalahari Dunes', description: 'Ancient stabilized sand dunes, orange-red' },
            { name: 'Pans', description: 'Seasonal salt and clay pans' },
            { name: 'Okavango Delta', description: 'Inland delta, worlds largest' },
            { name: 'Makgadikgadi Pans', description: 'Largest salt flats in world' }
        ],
        
        features: [
            { name: 'Okavango Delta', type: 'Wetland', coordinates: [-19.3, 22.9], description: 'UNESCO World Heritage inland delta' },
            { name: 'Makgadikgadi Pans', type: 'Salt flats', coordinates: [-20.7, 25.5], description: 'Largest salt pans in world' },
            { name: 'Central Kalahari Game Reserve', type: 'Protected area', coordinates: [-21.75, 23.5], description: 'Second largest game reserve in world' },
            { name: 'Kgalagadi Transfrontier Park', type: 'Protected area', coordinates: [-25.5, 20.5], description: 'Cross-border park, red dunes' }
        ],
        
        oases: [
            { name: 'Okavango Delta', coordinates: [-19.3, 22.9], country: 'Botswana', population: 0 },
            { name: 'Ghanzi', coordinates: [-21.7, 21.7], country: 'Botswana', population: 14000 }
        ],
        
        cities: [
            { name: 'Gaborone', coordinates: [-24.65, 25.9], country: 'Botswana', population: 230000 },
            { name: 'Windhoek', coordinates: [-22.56, 17.08], country: 'Namibia', population: 430000 },
            { name: 'Upington', coordinates: [-28.46, 21.26], country: 'South Africa', population: 75000 },
            { name: 'Maun', coordinates: [-19.99, 23.42], country: 'Botswana', population: 60000 }
        ],
        
        biodiversity: {
            plants: ['Camel Thorn Tree', 'Shepherd\'s Tree', 'Hoodia', 'Tsamma Melon', 'Devils Claw'],
            animals: ['African Lion', 'Gemsbok (Oryx)', 'Meerkat', 'Brown Hyena', 'Springbok', 'Black-maned Lion', 'Aardvark', 'Pangolin'],
            endangeredSpecies: ['African Wild Dog', 'Cheetah', 'Pangolin (critically endangered)']
        },
        
        humanLife: {
            peoples: ['San (Bushmen)', 'Tswana', 'Herero', 'Nama'],
            lifestyle: 'San hunter-gatherers, cattle herding, tourism',
            population: '~3 million in Kalahari region'
        },
        
        economy: [
            { label: 'Diamonds', value: 'Botswana is worlds top diamond producer' },
            { label: 'Tourism', value: 'Safari tourism, Okavango Delta' },
            { label: 'Cattle', value: 'Major beef exporter' },
            { label: 'Solar Energy', value: 'Developing solar farms' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Okavango water conflicts' },
            { label: 'Overgrazing', value: 'Cattle damaging vegetation' },
            { label: 'Climate Change', value: 'Shifting rainfall patterns' },
            { label: 'Wildlife Conflict', value: 'Lions vs livestock' }
        ],
        
        historicalImportance: [
            { label: 'San Bushmen', value: 'One of the oldest cultures, 20,000+ years' },
            { label: 'Rock Art', value: 'Tsodilo Hills, 4,500+ rock paintings' },
            { label: 'Missionary Exploration', value: 'David Livingstone crossed Kalahari 1849' },
            { label: 'Diamond Discovery', value: 'Orapa diamond mine 1967' }
        ],
        
        funFacts: [
            'Not a true desert - receives enough rain for grass and trees',
            'Home to the iconic meerkat colonies',
            'San Bushmen have lived there for over 20,000 years',
            'The Okavango Delta is the worlds largest inland delta',
            'Black-maned lions are unique to the Kalahari',
            'Contains some of the oldest rock art in Africa',
            'The tsamma melon was a crucial water source for the San'
        ],
        
        journeyWaypoints: [
            { name: 'Okavango Delta', coordinates: [-19.3, 22.9], description: 'Lush inland delta oasis' },
            { name: 'Makgadikgadi Pans', coordinates: [-20.7, 25.5], description: 'Vast white salt flats' },
            { name: 'Central Kalahari', coordinates: [-21.75, 23.5], description: 'Heart of the desert' },
            { name: 'Kgalagadi Park', coordinates: [-25.5, 20.5], description: 'Red dunes and lions' },
            { name: 'Tsodilo Hills', coordinates: [-18.75, 21.75], description: 'Ancient San rock art' }
        ]
    },

    // ========================================
    // #7 - PATAGONIAN DESERT
    // ========================================
    {
        id: 'patagonian-desert',
        name: 'Patagonian Desert',
        countries: [
            { name: 'Argentina', code: 'AR' },
            { name: 'Chile', code: 'CL' }
        ],
        continent: 'South America',
        desertType: 'cold',
        area: 673000,
        rank: 7,
        coordinates: [-45.0, -69.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Patagonian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-75.0, -55.0], [-75.0, -38.0], [-62.0, -38.0], [-62.0, -55.0], [-75.0, -55.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '25°C',
            summerTempAvg: '15°C',
            winterTempMin: '-20°C',
            winterTempAvg: '2°C',
            maxRecorded: '35°C',
            annualRainfall: '100-200mm',
            rainyMonths: 'Winter (May-August)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Andes rain shadow', 'Cold Falkland Current', 'Strong westerly winds'],
            age: '15 million years (Andes uplift)'
        },
        
        landforms: [
            { name: 'Mesetas', description: 'Flat-topped plateaus of basalt' },
            { name: 'Canyons', description: 'Deep river-carved canyons' },
            { name: 'Steppe', description: 'Grass and shrub covered plains' },
            { name: 'Petrified Forests', description: 'Ancient fossilized trees' }
        ],
        
        features: [
            { name: 'Perito Moreno Glacier', type: 'Glacier', coordinates: [-50.5, -73.05], description: 'Advancing glacier, UNESCO site' },
            { name: 'Bosques Petrificados', type: 'Fossils', coordinates: [-47.67, -67.98], description: 'Petrified forest national park' },
            { name: 'Monte León', type: 'Coastline', coordinates: [-50.33, -68.88], description: 'Coastal cliffs and wildlife' },
            { name: 'Cueva de las Manos', type: 'Rock art', coordinates: [-47.15, -70.67], description: 'Cave of Hands, 9,000 years old' }
        ],
        
        oases: [],
        
        cities: [
            { name: 'Comodoro Rivadavia', coordinates: [-45.87, -67.5], country: 'Argentina', population: 180000 },
            { name: 'Trelew', coordinates: [-43.25, -65.31], country: 'Argentina', population: 100000 },
            { name: 'Puerto Madryn', coordinates: [-42.77, -65.04], country: 'Argentina', population: 82000 },
            { name: 'Río Gallegos', coordinates: [-51.62, -69.22], country: 'Argentina', population: 100000 },
            { name: 'Punta Arenas', coordinates: [-53.16, -70.91], country: 'Chile', population: 130000 }
        ],
        
        biodiversity: {
            plants: ['Patagonian Shrub', 'Calafate Berry', 'Neneo', 'Coirón Grass', 'Mata Negra'],
            animals: ['Guanaco', 'Patagonian Mara', 'Puma', 'Lesser Rhea', 'Magellanic Penguin', 'Armadillo', 'Patagonian Fox'],
            endangeredSpecies: ['Huemul Deer (endangered)', 'Andean Condor']
        },
        
        humanLife: {
            peoples: ['Tehuelche', 'Mapuche', 'Welsh settlers'],
            lifestyle: 'Sheep ranching (estancias), oil industry',
            population: '~2 million in Patagonia'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Major Argentinian oil production' },
            { label: 'Sheep Ranching', value: 'Wool and meat production' },
            { label: 'Tourism', value: 'Glaciers, wildlife, adventure' },
            { label: 'Fishing', value: 'Patagonian toothfish, squid' }
        ],
        
        environmentalIssues: [
            { label: 'Overgrazing', value: 'Sheep damaging fragile steppe' },
            { label: 'Desertification', value: 'Expanding desert conditions' },
            { label: 'Climate Change', value: 'Glaciers retreating rapidly' },
            { label: 'Oil Spills', value: 'Risk to coastal wildlife' }
        ],
        
        historicalImportance: [
            { label: 'Cueva de las Manos', value: '9,000 year old hand paintings' },
            { label: 'Tehuelche Giants', value: 'Early European accounts of tall natives' },
            { label: 'Welsh Settlement', value: 'Patagonia Welsh colony 1865' },
            { label: 'Exploration', value: 'Magellan, Darwin voyages' }
        ],
        
        funFacts: [
            'Largest desert in the Americas',
            'Wind speeds can exceed 100 km/h regularly',
            'Home to the Welsh-speaking town of Gaiman',
            'Contains petrified forests 150 million years old',
            'The guanaco is related to the llama',
            'Named after the Tehuelche people, called "Patagones"',
            'Has some of the cleanest air on Earth'
        ],
        
        journeyWaypoints: [
            { name: 'Valdés Peninsula', coordinates: [-42.5, -64.0], description: 'Wildlife sanctuary, whales and penguins' },
            { name: 'Petrified Forest', coordinates: [-47.67, -67.98], description: 'Ancient fossilized trees' },
            { name: 'Cueva de las Manos', coordinates: [-47.15, -70.67], description: 'Cave of Hands rock art' },
            { name: 'Perito Moreno', coordinates: [-50.5, -73.05], description: 'Advancing glacier' },
            { name: 'Tierra del Fuego', coordinates: [-54.5, -68.5], description: 'Land of Fire, end of continent' }
        ]
    },

    // ========================================
    // #8 - GREAT VICTORIA DESERT
    // ========================================
    {
        id: 'great-victoria-desert',
        name: 'Great Victoria Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        area: 647000,
        rank: 8,
        coordinates: [-28.5, 129.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Victoria Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [123.0, -32.0], [123.0, -26.0], [135.0, -26.0], [135.0, -32.0], [123.0, -32.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '42°C',
            summerTempAvg: '35°C',
            winterTempMin: '5°C',
            winterTempAvg: '18°C',
            maxRecorded: '48°C',
            annualRainfall: '200-250mm',
            rainyMonths: 'Variable, often summer thunderstorms'
        },
        
        formation: {
            type: 'Subtropical desert',
            causes: ['Subtropical high pressure', 'Continental position', 'Lack of mountain moisture'],
            age: '2 million years (current form)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Long parallel dunes running east-west' },
            { name: 'Salt Lakes', description: 'Ephemeral salt lakes' },
            { name: 'Gibber Plains', description: 'Stony desert pavement' },
            { name: 'Spinifex Grasslands', description: 'Hummock grasslands' }
        ],
        
        features: [
            { name: 'Nullarbor Plain', type: 'Plain', coordinates: [-31.5, 128.0], description: 'Treeless plain, worlds largest limestone karst' },
            { name: 'Lake Disappointment', type: 'Salt lake', coordinates: [-23.5, 122.8], description: 'Large ephemeral salt lake' },
            { name: 'Queen Victoria Spring', type: 'Spring', coordinates: [-30.28, 123.62], description: 'Rare permanent water source' },
            { name: 'Mamungari Conservation Park', type: 'Protected area', coordinates: [-29.0, 129.5], description: 'Indigenous protected area' }
        ],
        
        oases: [
            { name: 'Queen Victoria Spring', coordinates: [-30.28, 123.62], country: 'Australia', population: 0 }
        ],
        
        cities: [
            { name: 'Kalgoorlie', coordinates: [-30.75, 121.47], country: 'Australia', population: 30000 },
            { name: 'Laverton', coordinates: [-28.63, 122.4], country: 'Australia', population: 400 },
            { name: 'Ceduna', coordinates: [-32.13, 133.68], country: 'Australia', population: 3500 }
        ],
        
        biodiversity: {
            plants: ['Spinifex', 'Mulga', 'Desert Oak', 'Quandong', 'Sandalwood'],
            animals: ['Thorny Devil', 'Perentie Monitor', 'Red Kangaroo', 'Dingo', 'Malleefowl', 'Numbat', 'Greater Bilby'],
            endangeredSpecies: ['Greater Bilby (vulnerable)', 'Malleefowl (vulnerable)', 'Sandhill Dunnart']
        },
        
        humanLife: {
            peoples: ['Pitjantjatjara', 'Ngaanyatjarra', 'Mirning', 'Spinifex People'],
            lifestyle: 'Aboriginal traditional lands, mining communities',
            population: '~10,000 in desert region'
        },
        
        economy: [
            { label: 'Mining', value: 'Gold, nickel, uranium' },
            { label: 'Indigenous Tourism', value: 'Cultural experiences' },
            { label: 'Research', value: 'Astronomical observatories' },
            { label: 'Pastoral', value: 'Limited cattle stations' }
        ],
        
        environmentalIssues: [
            { label: 'Invasive Species', value: 'Camels, cats, foxes threatening wildlife' },
            { label: 'Mining Impact', value: 'Habitat destruction' },
            { label: 'Fire Regime', value: 'Changed burning patterns' },
            { label: 'Climate Change', value: 'Increasing droughts' }
        ],
        
        historicalImportance: [
            { label: 'Aboriginal Dreamtime', value: '50,000+ years of indigenous history' },
            { label: 'European Exploration', value: 'Ernest Giles crossed 1875' },
            { label: 'Maralinga', value: 'British nuclear tests 1950s-60s' },
            { label: 'Rabbit-Proof Fence', value: 'Built through desert 1901-1907' }
        ],
        
        funFacts: [
            'Named after Queen Victoria in 1875',
            'One of the most remote places in Australia',
            'Aboriginal people have lived there for 50,000+ years',
            'Contains some of the oldest rocks on Earth',
            'Has more reptile species than anywhere else',
            'The Nullarbor means "no trees" in Latin',
            'Wild camels from Afghan camel trains roam free'
        ],
        
        journeyWaypoints: [
            { name: 'Kalgoorlie Goldfields', coordinates: [-30.75, 121.47], description: 'Historic gold mining town' },
            { name: 'Lake Disappointment', coordinates: [-23.5, 122.8], description: 'Named by frustrated explorer' },
            { name: 'Central Desert', coordinates: [-28.5, 129.0], description: 'Heart of the Great Victoria' },
            { name: 'Nullarbor Edge', coordinates: [-31.5, 128.0], description: 'Treeless limestone plain' },
            { name: 'Mamungari', coordinates: [-29.0, 129.5], description: 'Indigenous conservation area' }
        ]
    },

    // ========================================
    // #9 - SYRIAN DESERT
    // ========================================
    {
        id: 'syrian-desert',
        name: 'Syrian Desert',
        countries: [
            { name: 'Syria', code: 'SY' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Saudi Arabia', code: 'SA' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 500000,
        rank: 9,
        coordinates: [33.0, 39.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Syrian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [35.0, 28.0], [35.0, 36.0], [44.0, 36.0], [44.0, 28.0], [35.0, 28.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '46°C',
            summerTempAvg: '38°C',
            winterTempMin: '-5°C',
            winterTempAvg: '7°C',
            maxRecorded: '49°C',
            annualRainfall: '<125mm',
            rainyMonths: 'November-March (winter rains)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Subtropical high pressure', 'Rain shadow', 'Continental climate'],
            age: '5,000-10,000 years (current form)'
        },
        
        landforms: [
            { name: 'Hamad', description: 'Black volcanic rock desert' },
            { name: 'Wadis', description: 'Dry riverbeds with occasional floods' },
            { name: 'Playas', description: 'Seasonal mudflats and salt flats' },
            { name: 'Basalt Fields', description: 'Ancient lava flows' }
        ],
        
        features: [
            { name: 'Palmyra', type: 'Ruins', coordinates: [34.55, 38.27], description: 'Ancient caravan city, UNESCO site' },
            { name: 'Wadi Rum', type: 'Valley', coordinates: [29.53, 35.42], description: 'Dramatic sandstone landscape' },
            { name: 'Azraq Wetland', type: 'Oasis', coordinates: [31.87, 36.82], description: 'Critical wetland reserve' },
            { name: 'Qasr Amra', type: 'Castle', coordinates: [31.8, 36.59], description: 'Desert castle with frescoes' }
        ],
        
        oases: [
            { name: 'Palmyra Oasis', coordinates: [34.55, 38.27], country: 'Syria', population: 50000 },
            { name: 'Azraq Oasis', coordinates: [31.87, 36.82], country: 'Jordan', population: 15000 },
            { name: 'Dumayr', coordinates: [33.77, 36.7], country: 'Syria', population: 30000 }
        ],
        
        cities: [
            { name: 'Palmyra (Tadmur)', coordinates: [34.55, 38.27], country: 'Syria', population: 50000 },
            { name: 'Deir ez-Zor', coordinates: [35.33, 40.15], country: 'Syria', population: 240000 },
            { name: 'Rutbah', coordinates: [33.03, 40.28], country: 'Iraq', population: 22000 },
            { name: 'Azraq', coordinates: [31.87, 36.82], country: 'Jordan', population: 15000 }
        ],
        
        biodiversity: {
            plants: ['Artemisia', 'Anabasis', 'White Saxaul', 'Atriplex', 'Desert Tulip'],
            animals: ['Arabian Oryx (reintroduced)', 'Striped Hyena', 'Sand Cat', 'Desert Eagle Owl', 'Sand Gazelle', 'Spiny-tailed Lizard'],
            endangeredSpecies: ['Arabian Oryx', 'Syrian Brown Bear (extinct in area)', 'Asiatic Cheetah (extinct in area)']
        },
        
        humanLife: {
            peoples: ['Bedouin', 'Syrian Arabs', 'Druze'],
            lifestyle: 'Nomadic herding, oasis agriculture',
            population: '~1 million in desert regions'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Syrian and Iraqi oil fields' },
            { label: 'Pastoral', value: 'Sheep and camel herding' },
            { label: 'Tourism', value: 'Palmyra, desert castles (pre-conflict)' },
            { label: 'Phosphates', value: 'Mining in Syria' }
        ],
        
        environmentalIssues: [
            { label: 'War Damage', value: 'Palmyra destruction, oil field fires' },
            { label: 'Desertification', value: 'Overgrazing expanding desert' },
            { label: 'Water Scarcity', value: 'Aquifer depletion' },
            { label: 'Habitat Loss', value: 'Wildlife pushed out' }
        ],
        
        historicalImportance: [
            { label: 'Palmyra', value: 'Silk Road caravan city, Queen Zenobia' },
            { label: 'Desert Castles', value: 'Umayyad pleasure palaces 7th-8th century' },
            { label: 'Lawrence of Arabia', value: 'WWI Arab Revolt campaigns' },
            { label: 'Biblical History', value: 'Route of biblical journeys' }
        ],
        
        funFacts: [
            'Also called the Badiya, meaning "steppe" in Arabic',
            'Palmyra was once one of the richest cities in the world',
            'Desert castles were hunting lodges for Umayyad caliphs',
            'T.E. Lawrence (Lawrence of Arabia) fought here in WWI',
            'The Azraq Oasis was used by migrating birds for millennia',
            'Bedouin can navigate by the stars like ancient mariners',
            'Contains some of the oldest continuously inhabited sites'
        ],
        
        journeyWaypoints: [
            { name: 'Damascus Edge', coordinates: [33.5, 36.3], description: 'Ancient city at desert edge' },
            { name: 'Palmyra', coordinates: [34.55, 38.27], description: 'Ruins of caravan city' },
            { name: 'Central Hamad', coordinates: [33.0, 39.0], description: 'Black volcanic desert' },
            { name: 'Azraq Oasis', coordinates: [31.87, 36.82], description: 'Wetland oasis' },
            { name: 'Wadi Rum', coordinates: [29.53, 35.42], description: 'Valley of the Moon' }
        ]
    },

    // ========================================
    // #10 - GREAT BASIN DESERT
    // ========================================
    {
        id: 'great-basin-desert',
        name: 'Great Basin Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'cold',
        area: 492000,
        rank: 10,
        coordinates: [39.5, -117.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Basin Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-125.0, 35.0], [-125.0, 44.0], [-110.0, 44.0], [-110.0, 35.0], [-125.0, 35.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '28°C',
            winterTempMin: '-18°C',
            winterTempAvg: '0°C',
            maxRecorded: '53°C (Death Valley nearby)',
            annualRainfall: '150-300mm',
            rainyMonths: 'Winter and spring (snow)'
        },
        
        formation: {
            type: 'Rain shadow desert',
            causes: ['Sierra Nevada rain shadow', 'High altitude', 'Basin and range topography'],
            age: '10,000 years (post-Ice Age)'
        },
        
        landforms: [
            { name: 'Basin and Range', description: 'Alternating valleys and mountain ranges' },
            { name: 'Playas', description: 'Dry lake beds, salt flats' },
            { name: 'Sagebrush Steppe', description: 'High desert shrubland' },
            { name: 'Sand Dunes', description: 'Scattered dune fields' }
        ],
        
        features: [
            { name: 'Bonneville Salt Flats', type: 'Salt flat', coordinates: [40.77, -113.88], description: 'Land speed record site' },
            { name: 'Great Salt Lake', type: 'Lake', coordinates: [41.0, -112.5], description: 'Largest salt lake in Western Hemisphere' },
            { name: 'Pyramid Lake', type: 'Lake', coordinates: [40.0, -119.5], description: 'Remnant of ancient Lake Lahontan' },
            { name: 'Black Rock Desert', type: 'Playa', coordinates: [40.87, -119.06], description: 'Site of Burning Man festival' }
        ],
        
        oases: [
            { name: 'Ruby Valley', coordinates: [40.35, -115.48], country: 'USA', population: 100 },
            { name: 'Fish Springs', coordinates: [39.85, -113.42], country: 'USA', population: 0 }
        ],
        
        cities: [
            { name: 'Reno', coordinates: [39.53, -119.81], country: 'USA', population: 265000 },
            { name: 'Salt Lake City', coordinates: [40.76, -111.89], country: 'USA', population: 200000 },
            { name: 'Elko', coordinates: [40.83, -115.76], country: 'USA', population: 20000 },
            { name: 'Winnemucca', coordinates: [40.97, -117.74], country: 'USA', population: 8000 },
            { name: 'Ely', coordinates: [39.25, -114.89], country: 'USA', population: 4000 }
        ],
        
        biodiversity: {
            plants: ['Sagebrush', 'Shadscale', 'Greasewood', 'Joshua Tree (edges)', 'Juniper', 'Pinyon Pine'],
            animals: ['Pronghorn Antelope', 'Mule Deer', 'Coyote', 'Great Basin Rattlesnake', 'Kit Fox', 'Greater Sage-Grouse', 'Wild Mustang'],
            endangeredSpecies: ['Greater Sage-Grouse (threatened)', 'Lahontan Cutthroat Trout', 'Desert Tortoise']
        },
        
        humanLife: {
            peoples: ['Western Shoshone', 'Paiute', 'Ute'],
            lifestyle: 'Ranching, mining, military installations',
            population: '~1 million in Great Basin region'
        },
        
        economy: [
            { label: 'Mining', value: 'Gold, silver, copper (Nevada produces most US gold)' },
            { label: 'Military', value: 'Numerous military bases and test sites' },
            { label: 'Ranching', value: 'Cattle grazing on public lands' },
            { label: 'Geothermal', value: 'Major geothermal energy production' },
            { label: 'Tourism', value: 'National parks, Burning Man' }
        ],
        
        environmentalIssues: [
            { label: 'Water Rights', value: 'Competition for scarce water' },
            { label: 'Overgrazing', value: 'Cattle damaging sagebrush steppe' },
            { label: 'Invasive Species', value: 'Cheatgrass increasing fire risk' },
            { label: 'Mining Pollution', value: 'Legacy contamination' },
            { label: 'Climate Change', value: 'Longer droughts, less snowpack' }
        ],
        
        historicalImportance: [
            { label: 'Native American History', value: 'Shoshone, Paiute homeland for 10,000+ years' },
            { label: 'California Trail', value: 'Pioneer route to Gold Rush' },
            { label: 'Transcontinental Railroad', value: 'Golden Spike at Promontory 1869' },
            { label: 'Nuclear Testing', value: 'Nevada Test Site, 1,000+ tests' }
        ],
        
        funFacts: [
            'Only desert in the US where water drains inward, not to ocean',
            'Contains over 33 mountain ranges',
            'The Bonneville Salt Flats host land speed records',
            'Wild mustangs roam freely, descendants of Spanish horses',
            'Lake Bonneville was once as large as Lake Michigan',
            'Home to the Burning Man festival in Black Rock Desert',
            'Has more mountain ranges than any US desert'
        ],
        
        journeyWaypoints: [
            { name: 'Reno Area', coordinates: [39.53, -119.81], description: 'Biggest little city in the world' },
            { name: 'Black Rock Desert', coordinates: [40.87, -119.06], description: 'Burning Man playa' },
            { name: 'Ruby Mountains', coordinates: [40.5, -115.5], description: 'Alps of Nevada' },
            { name: 'Bonneville Flats', coordinates: [40.77, -113.88], description: 'Land speed record site' },
            { name: 'Great Salt Lake', coordinates: [41.0, -112.5], description: 'Americas Dead Sea' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_1;
}
