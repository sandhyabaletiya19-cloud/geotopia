/* ==========================================
   DESERTS DATA - FILE 5 OF 5
   Deserts 41-50 (By Area)
   ========================================== */

const DESERTS_DATA_5 = [
    // ========================================
    // #41 - USTYURT PLATEAU
    // ========================================
    {
        id: 'ustyurt-plateau',
        name: 'Ustyurt Plateau',
        countries: [
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Turkmenistan', code: 'TM' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 200000,
        rank: 41,
        coordinates: [43.5, 56.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Ustyurt Plateau' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [53.0, 41.0], [53.0, 46.0], [60.0, 46.0], [60.0, 41.0], [53.0, 41.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '42°C',
            summerTempAvg: '28°C',
            winterTempMin: '-35°C',
            winterTempAvg: '-10°C',
            maxRecorded: '45°C',
            annualRainfall: '100-150mm',
            rainyMonths: 'Spring (March-May)'
        },
        
        formation: {
            type: 'Elevated clay desert plateau',
            causes: ['Ancient seabed uplift', 'Paratethys Sea remnant', 'Continental climate'],
            age: '20-25 million years (Miocene uplift)'
        },
        
        landforms: [
            { name: 'Chinks', description: 'Dramatic cliff escarpments up to 300m' },
            { name: 'Takyrs', description: 'Flat clay pans' },
            { name: 'Sinkholes', description: 'Karst depressions' },
            { name: 'Solonchaks', description: 'Salt marshes and flats' },
            { name: 'Shors', description: 'Dry salt lake beds' }
        ],
        
        features: [
            { name: 'Western Chink', type: 'Escarpment', coordinates: [44.0, 54.0], description: 'Dramatic 300m cliff edge' },
            { name: 'Aral Sea (remnant)', type: 'Lake', coordinates: [45.0, 59.5], description: 'Eastern shore of dying sea' },
            { name: 'Bozzhira Valley', type: 'Geological', coordinates: [43.45, 54.1], description: 'Otherworldly rock formations' },
            { name: 'Barsa-Kelmes', type: 'Former island', coordinates: [45.5, 59.5], description: 'Now peninsula in shrinking Aral' },
            { name: 'Underground Mosques', type: 'Archaeological', coordinates: [43.8, 54.5], description: 'Ancient Sufi cave mosques' }
        ],
        
        oases: [
            { name: 'Aktau', coordinates: [43.65, 51.16], country: 'Kazakhstan', population: 185000 },
            { name: 'Beyneu', coordinates: [45.32, 55.2], country: 'Kazakhstan', population: 25000 }
        ],
        
        cities: [
            { name: 'Aktau', coordinates: [43.65, 51.16], country: 'Kazakhstan', population: 185000 },
            { name: 'Nukus', coordinates: [42.46, 59.6], country: 'Uzbekistan', population: 310000 },
            { name: 'Kungrad', coordinates: [43.08, 58.9], country: 'Uzbekistan', population: 70000 },
            { name: 'Beyneu', coordinates: [45.32, 55.2], country: 'Kazakhstan', population: 25000 }
        ],
        
        biodiversity: {
            plants: ['Wormwood (Artemisia)', 'Salsola', 'Anabasis', 'Saxaul (sparse)', 'Tulips (spring)'],
            animals: ['Ustyurt Mouflon', 'Saiga Antelope', 'Corsac Fox', 'Caracal', 'Steppe Eagle', 'Long-eared Hedgehog', 'Monitor Lizard'],
            endangeredSpecies: ['Ustyurt Mouflon (vulnerable)', 'Saiga Antelope (critically endangered)', 'Asiatic Cheetah (extinct here)']
        },
        
        humanLife: {
            peoples: ['Kazakh', 'Karakalpak', 'Turkmen'],
            lifestyle: 'Nomadic herding largely gone, oil/gas workers',
            population: '~50,000 on plateau'
        },
        
        economy: [
            { label: 'Oil & Gas', value: 'Tengiz and Kashagan fields nearby' },
            { label: 'Mining', value: 'Salt, gypsum extraction' },
            { label: 'Pastoral', value: 'Limited sheep and camel herding' },
            { label: 'Tourism', value: 'Growing adventure tourism to Bozzhira' }
        ],
        
        environmentalIssues: [
            { label: 'Aral Sea Disaster', value: 'Eastern shore completely dry' },
            { label: 'Dust Storms', value: 'Toxic dust from dried seabed' },
            { label: 'Oil Development', value: 'Industrial expansion' },
            { label: 'Poaching', value: 'Saiga hunted for horns' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Northern route crossed edges' },
            { label: 'Sufi Sites', value: 'Underground mosques and necropolises' },
            { label: 'Arrow Monuments', value: 'Ancient stone arrow formations' },
            { label: 'Soviet Era', value: 'Closed military zones' }
        ],
        
        funFacts: [
            'Contains some of the most dramatic cliff edges on Earth',
            'The Bozzhira Valley looks like another planet',
            'Underground mosques were carved by Sufi mystics centuries ago',
            'The Aral Sea once lapped the eastern edge',
            'Ancient stone arrows point toward Mecca',
            'One of the least visited landscapes in the world',
            'Temperatures swing from -35°C to +45°C',
            'The plateau is an ancient seabed lifted 200m above surroundings'
        ],
        
        journeyWaypoints: [
            { name: 'Aktau', coordinates: [43.65, 51.16], description: 'Caspian Sea gateway city' },
            { name: 'Bozzhira Valley', coordinates: [43.45, 54.1], description: 'Alien-like rock formations' },
            { name: 'Western Chink', coordinates: [44.0, 54.0], description: 'Dramatic cliff escarpment' },
            { name: 'Underground Mosques', coordinates: [43.8, 54.5], description: 'Sufi cave sanctuaries' },
            { name: 'Aral Seabed', coordinates: [45.0, 59.5], description: 'Ships stranded on dry ground' }
        ]
    },

    // ========================================
    // #42 - MARANJAB DESERT
    // ========================================
    {
        id: 'maranjab-desert',
        name: 'Maranjab Desert',
        countries: [
            { name: 'Iran', code: 'IR' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        area: 2500,
        rank: 42,
        coordinates: [34.35, 51.87],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Maranjab Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [51.5, 34.0], [51.5, 34.7], [52.3, 34.7], [52.3, 34.0], [51.5, 34.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '-5°C',
            winterTempAvg: '8°C',
            maxRecorded: '48°C',
            annualRainfall: '<100mm',
            rainyMonths: 'Winter-Spring (rare)'
        },
        
        formation: {
            type: 'Salt desert',
            causes: ['Part of Dasht-e Kavir system', 'Evaporite deposits', 'Wind-shaped dunes'],
            age: 'Part of greater Kavir system'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Golden sand dunes up to 50m' },
            { name: 'Salt Lake', description: 'Seasonal salt flat (Hoz-e Soltan)' },
            { name: 'Salt Marsh', description: 'Dangerous kavir areas' },
            { name: 'Rocky Hills', description: 'Isolated outcrops' }
        ],
        
        features: [
            { name: 'Shah Abbasi Caravanserai', type: 'Historic', coordinates: [34.27, 51.78], description: 'Safavid-era rest stop, 400 years old' },
            { name: 'Maranjab Salt Lake', type: 'Salt lake', coordinates: [34.4, 51.9], description: 'Seasonal salt flat' },
            { name: 'Sand Dunes', type: 'Dune field', coordinates: [34.35, 51.87], description: 'Photogenic golden dunes' },
            { name: 'Hoz-e Soltan', type: 'Salt lake', coordinates: [34.5, 51.8], description: 'Large pink salt lake' }
        ],
        
        oases: [
            { name: 'Aran va Bidgol', coordinates: [34.06, 51.49], country: 'Iran', population: 100000 },
            { name: 'Maranjab Village', coordinates: [34.27, 51.78], country: 'Iran', population: 50 }
        ],
        
        cities: [
            { name: 'Kashan', coordinates: [33.98, 51.44], country: 'Iran', population: 300000 },
            { name: 'Aran va Bidgol', coordinates: [34.06, 51.49], country: 'Iran', population: 100000 },
            { name: 'Isfahan', coordinates: [32.65, 51.67], country: 'Iran', population: 2000000 }
        ],
        
        biodiversity: {
            plants: ['Tamarisk', 'Saxaul', 'Halophytes', 'Desert grasses'],
            animals: ['Persian Gazelle', 'Sand Cat', 'Desert Fox', 'Monitor Lizard', 'Scorpions', 'Jerboas'],
            endangeredSpecies: ['Persian Onager (nearby)', 'Asiatic Cheetah (possibly)']
        },
        
        humanLife: {
            peoples: ['Persian', 'Zoroastrian heritage'],
            lifestyle: 'Tourism, carpet weaving nearby',
            population: '~1,000 in immediate area'
        },
        
        economy: [
            { label: 'Tourism', value: 'Most accessible desert from Tehran' },
            { label: 'Salt Mining', value: 'Traditional salt extraction' },
            { label: 'Carpet Industry', value: 'Kashan carpets famous worldwide' },
            { label: 'Agriculture', value: 'Oasis rose water production' }
        ],
        
        environmentalIssues: [
            { label: 'Off-road Vehicles', value: 'Damaging dune formations' },
            { label: 'Litter', value: 'Tourism waste' },
            { label: 'Water Scarcity', value: 'Qanat systems declining' },
            { label: 'Climate Change', value: 'Increasing heat waves' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Caravanserai served traders' },
            { label: 'Safavid Era', value: 'Shah Abbas built caravanserai 1600s' },
            { label: 'Salt Trade', value: 'Historic salt production' },
            { label: 'Zoroastrian', value: 'Ancient fire temple sites nearby' }
        ],
        
        funFacts: [
            'Most popular desert destination for Iranians',
            'The caravanserai is 400 years old and still stands',
            'Located only 2 hours from Tehran',
            'The salt lake turns pink from algae',
            'Night skies are among the clearest in Iran',
            'Camels still used for tourist rides',
            'Sand boarding is popular on the dunes',
            'Full moon nights are especially popular for camping'
        ],
        
        journeyWaypoints: [
            { name: 'Kashan', coordinates: [33.98, 51.44], description: 'Historic city with gardens' },
            { name: 'Caravanserai', coordinates: [34.27, 51.78], description: '400-year-old Silk Road inn' },
            { name: 'Golden Dunes', coordinates: [34.35, 51.87], description: 'Main sand dune area' },
            { name: 'Maranjab Salt Lake', coordinates: [34.4, 51.9], description: 'White salt expanse' },
            { name: 'Hoz-e Soltan', coordinates: [34.5, 51.8], description: 'Pink salt lake' }
        ]
    },

    // ========================================
    // #43 - SECHURA DESERT
    // ========================================
    {
        id: 'sechura-desert',
        name: 'Sechura Desert',
        countries: [
            { name: 'Peru', code: 'PE' }
        ],
        continent: 'South America',
        desertType: 'coastal',
        area: 5000,
        rank: 43,
        coordinates: [-5.8, -80.5],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sechura Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-81.0, -6.5], [-81.0, -5.0], [-79.5, -5.0], [-79.5, -6.5], [-81.0, -6.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '35°C',
            summerTempAvg: '28°C',
            winterTempMin: '15°C',
            winterTempAvg: '20°C',
            maxRecorded: '40°C',
            annualRainfall: '<25mm (increases during El Niño)',
            rainyMonths: 'Normally never, El Niño brings floods'
        },
        
        formation: {
            type: 'Coastal fog desert',
            causes: ['Humboldt Current cold water', 'Coastal mountains block moisture', 'Subtropical high pressure'],
            age: 'Part of Pacific coastal desert system'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Massive barchan and transverse dunes' },
            { name: 'Tablazos', description: 'Flat coastal platforms' },
            { name: 'Dry Riverbeds', description: 'Only flow during El Niño' },
            { name: 'Salt Flats', description: 'Coastal salinas' }
        ],
        
        features: [
            { name: 'Médanos Blancos', type: 'Dune field', coordinates: [-5.8, -80.5], description: 'Massive white sand dunes' },
            { name: 'Illescas Peninsula', type: 'Peninsula', coordinates: [-5.9, -81.1], description: 'Protected desert coastline' },
            { name: 'Laguna La Niña', type: 'Lagoon', coordinates: [-5.75, -80.4], description: 'El Niño created lagoon' },
            { name: 'Bayóvar', type: 'Industrial', coordinates: [-5.8, -81.0], description: 'Phosphate mining area' }
        ],
        
        oases: [
            { name: 'Sechura Town', coordinates: [-5.56, -80.82], country: 'Peru', population: 45000 },
            { name: 'Piura', coordinates: [-5.2, -80.63], country: 'Peru', population: 480000 }
        ],
        
        cities: [
            { name: 'Piura', coordinates: [-5.2, -80.63], country: 'Peru', population: 480000 },
            { name: 'Sechura', coordinates: [-5.56, -80.82], country: 'Peru', population: 45000 },
            { name: 'Chiclayo', coordinates: [-6.77, -79.84], country: 'Peru', population: 600000 }
        ],
        
        biodiversity: {
            plants: ['Algarrobo (Carob)', 'Sapote', 'Cacti', 'Tillandsia (air plants)'],
            animals: ['Sechuran Fox', 'Peruvian Desert Gecko', 'Coastal Birds', 'Humboldt Penguin (coast)', 'Sea Lions'],
            endangeredSpecies: ['Sechuran Fox (near threatened)', 'Humboldt Penguin (vulnerable)']
        },
        
        humanLife: {
            peoples: ['Peruvian mestizo', 'Indigenous Tallán heritage'],
            lifestyle: 'Fishing, agriculture in river valleys, mining',
            population: '~600,000 in Sechura province'
        },
        
        economy: [
            { label: 'Phosphate Mining', value: 'Bayóvar major deposits' },
            { label: 'Fishing', value: 'Rich Humboldt Current fisheries' },
            { label: 'Agriculture', value: 'Irrigated Piura valley' },
            { label: 'Oil & Gas', value: 'Offshore and onshore production' }
        ],
        
        environmentalIssues: [
            { label: 'El Niño Floods', value: 'Periodic catastrophic flooding' },
            { label: 'Mining Impact', value: 'Phosphate extraction' },
            { label: 'Overfishing', value: 'Depleting fish stocks' },
            { label: 'Desertification', value: 'Goat overgrazing' }
        ],
        
        historicalImportance: [
            { label: 'Moche Culture', value: 'Ancient civilization nearby' },
            { label: 'Sicán Culture', value: 'Pre-Inca culture in region' },
            { label: 'Spanish Colonial', value: 'Founded 1572' },
            { label: 'El Niño Discovery', value: 'Pattern first described here' }
        ],
        
        funFacts: [
            'One of the driest places in the Americas',
            'El Niño events can turn the desert into lakes overnight',
            'Contains South Americas largest phosphate deposits',
            'The Sechuran Fox is found only in this region',
            'Air plants (Tillandsias) survive on fog moisture alone',
            'Named after the Sechura people',
            'The 1998 El Niño created a 35km-long lake here',
            'Fishermen named El Niño because it arrives around Christmas'
        ],
        
        journeyWaypoints: [
            { name: 'Piura', coordinates: [-5.2, -80.63], description: 'Regional capital city' },
            { name: 'Sechura Town', coordinates: [-5.56, -80.82], description: 'Desert town' },
            { name: 'Médanos Blancos', coordinates: [-5.8, -80.5], description: 'White sand dunes' },
            { name: 'Illescas', coordinates: [-5.9, -81.1], description: 'Coastal peninsula' },
            { name: 'Bayóvar', coordinates: [-5.8, -81.0], description: 'Mining area' }
        ]
    },

    // ========================================
    // #44 - MONTE DESERT
    // ========================================
    {
        id: 'monte-desert',
        name: 'Monte Desert',
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        desertType: 'cold',
        area: 460000,
        rank: 44,
        coordinates: [-35.0, -68.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Monte Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-70.0, -44.0], [-70.0, -26.0], [-64.0, -26.0], [-64.0, -44.0], [-70.0, -44.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '28°C',
            winterTempMin: '-15°C',
            winterTempAvg: '5°C',
            maxRecorded: '44°C',
            annualRainfall: '80-250mm',
            rainyMonths: 'Summer (November-March)'
        },
        
        formation: {
            type: 'Rain shadow shrubland desert',
            causes: ['Andes rain shadow', 'Subtropical latitude', 'Continental interior'],
            age: '~15 million years (Andes uplift)'
        },
        
        landforms: [
            { name: 'Bolsones', description: 'Enclosed basins' },
            { name: 'Barreales', description: 'Salt and clay flats' },
            { name: 'Médanos', description: 'Sand dune fields' },
            { name: 'Badlands', description: 'Eroded Triassic formations' }
        ],
        
        features: [
            { name: 'Ischigualasto', type: 'Park', coordinates: [-30.1, -68.0], description: 'Valley of the Moon, dinosaur fossils' },
            { name: 'Talampaya', type: 'Canyon', coordinates: [-29.8, -67.8], description: 'Red canyon walls, UNESCO site' },
            { name: 'Valle de la Luna', type: 'Badlands', coordinates: [-30.2, -68.0], description: 'Lunar landscape formations' },
            { name: 'Mendoza Wine Region', type: 'Agricultural', coordinates: [-33.0, -68.8], description: 'Desert edge vineyards' }
        ],
        
        oases: [
            { name: 'Mendoza', coordinates: [-32.89, -68.83], country: 'Argentina', population: 115000 },
            { name: 'San Juan', coordinates: [-31.54, -68.52], country: 'Argentina', population: 110000 }
        ],
        
        cities: [
            { name: 'Mendoza', coordinates: [-32.89, -68.83], country: 'Argentina', population: 115000 },
            { name: 'San Juan', coordinates: [-31.54, -68.52], country: 'Argentina', population: 110000 },
            { name: 'San Luis', coordinates: [-33.3, -66.34], country: 'Argentina', population: 205000 },
            { name: 'Neuquén', coordinates: [-38.95, -68.06], country: 'Argentina', population: 235000 }
        ],
        
        biodiversity: {
            plants: ['Jarilla (Larrea)', 'Algarrobo', 'Chañar', 'Retamo', 'Cardón cactus'],
            animals: ['Guanaco', 'Puma', 'Viscacha', 'Patagonian Mara', 'Rhea (Choique)', 'Burrowing Owl', 'Armadillo'],
            endangeredSpecies: ['Andean Cat', 'Mara (near threatened)']
        },
        
        humanLife: {
            peoples: ['Huarpe (historic)', 'Argentine'],
            lifestyle: 'Wine production, mining, ranching',
            population: '~3 million in Monte region'
        },
        
        economy: [
            { label: 'Wine', value: 'World-famous Mendoza wines' },
            { label: 'Oil & Gas', value: 'Neuquén basin production' },
            { label: 'Mining', value: 'Copper, gold, silver' },
            { label: 'Tourism', value: 'Wine tours, Ischigualasto' },
            { label: 'Agriculture', value: 'Irrigated fruit orchards' }
        ],
        
        environmentalIssues: [
            { label: 'Water Scarcity', value: 'Glacial melt reduction' },
            { label: 'Desertification', value: 'Overgrazing expanding desert' },
            { label: 'Mining', value: 'Open-pit mine impacts' },
            { label: 'Climate Change', value: 'Less Andean snowpack' }
        ],
        
        historicalImportance: [
            { label: 'Dinosaur Fossils', value: 'Ischigualasto oldest dinosaur fossils' },
            { label: 'Inca Road', value: 'Southern Qhapaq Ñan crossed here' },
            { label: 'San Martín', value: 'Crossed Andes from Mendoza 1817' },
            { label: 'Wine History', value: 'Vineyards since 1556' }
        ],
        
        funFacts: [
            'Ischigualasto has the worlds oldest known dinosaurs (230 million years)',
            'Mendoza is one of the great wine capitals of the world',
            'The "Valley of the Moon" looks like another planet',
            'General San Martín launched Andes crossing from here',
            'The Monte shrub is genetically related to US creosote bush',
            'Contains fossils from the dawn of the dinosaur age',
            'Talampaya canyon walls are 150 meters high',
            'The region produces 70% of Argentinas wine'
        ],
        
        journeyWaypoints: [
            { name: 'Mendoza', coordinates: [-32.89, -68.83], description: 'Wine capital at desert edge' },
            { name: 'San Juan', coordinates: [-31.54, -68.52], description: 'Gateway to parks' },
            { name: 'Talampaya', coordinates: [-29.8, -67.8], description: 'Red canyon UNESCO site' },
            { name: 'Ischigualasto', coordinates: [-30.1, -68.0], description: 'Valley of the Moon' },
            { name: 'Neuquén', coordinates: [-38.95, -68.06], description: 'Southern Monte city' }
        ]
    },

    // ========================================
    // #45 - TATACOA DESERT
    // ========================================
    {
        id: 'tatacoa-desert',
        name: 'Tatacoa Desert',
        countries: [
            { name: 'Colombia', code: 'CO' }
        ],
        continent: 'South America',
        desertType: 'hot',
        area: 330,
        rank: 45,
        coordinates: [3.23, -75.17],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Tatacoa Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-75.3, 3.1], [-75.3, 3.4], [-75.0, 3.4], [-75.0, 3.1], [-75.3, 3.1]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '42°C',
            summerTempAvg: '35°C',
            winterTempMin: '20°C',
            winterTempAvg: '28°C',
            maxRecorded: '45°C',
            annualRainfall: '1,000-1,300mm (but high evaporation)',
            rainyMonths: 'April-May, October-November'
        },
        
        formation: {
            type: 'Tropical dry forest/semi-desert',
            causes: ['Rain shadow of Andes', 'Magdalena Valley heat', 'High evaporation'],
            age: '~65 million years (Cretaceous sediments)'
        },
        
        landforms: [
            { name: 'Badlands', description: 'Eroded red and gray formations' },
            { name: 'Canyons', description: 'Deep eroded gullies' },
            { name: 'Mesas', description: 'Flat-topped remnant hills' },
            { name: 'Laberintos', description: 'Maze-like eroded passages' }
        ],
        
        features: [
            { name: 'El Cuzco (Red Zone)', type: 'Badlands', coordinates: [3.23, -75.15], description: 'Red-colored eroded formations' },
            { name: 'Los Hoyos (Gray Zone)', type: 'Badlands', coordinates: [3.22, -75.2], description: 'Gray lunar landscape' },
            { name: 'Observatory', type: 'Astronomical', coordinates: [3.24, -75.17], description: 'Clear skies for stargazing' },
            { name: 'Swimming Pools', type: 'Natural', coordinates: [3.23, -75.18], description: 'Natural desert pools' }
        ],
        
        oases: [
            { name: 'Villavieja', coordinates: [3.22, -75.22], country: 'Colombia', population: 8000 },
            { name: 'San Alfonso', coordinates: [3.26, -75.16], country: 'Colombia', population: 500 }
        ],
        
        cities: [
            { name: 'Neiva', coordinates: [2.93, -75.29], country: 'Colombia', population: 350000 },
            { name: 'Villavieja', coordinates: [3.22, -75.22], country: 'Colombia', population: 8000 }
        ],
        
        biodiversity: {
            plants: ['Cardón cactus', 'Doncello', 'Chaparro', 'Acacia', 'Prickly Pear'],
            animals: ['Spider Monkeys', 'Eagles', 'Scorpions', 'Snakes', 'Armadillos', 'Wild Cats', 'Iguanas'],
            endangeredSpecies: ['Spectacled Bear (edges)', 'Spider Monkey']
        },
        
        humanLife: {
            peoples: ['Colombian mestizo'],
            lifestyle: 'Tourism, goat herding, small farming',
            population: '~10,000 in Tatacoa area'
        },
        
        economy: [
            { label: 'Tourism', value: 'Growing ecotourism and stargazing' },
            { label: 'Goat Herding', value: 'Traditional livestock' },
            { label: 'Paleontology', value: 'Fossil research' },
            { label: 'Astronomy', value: 'Observatory tourism' }
        ],
        
        environmentalIssues: [
            { label: 'Erosion', value: 'Rapid soil erosion' },
            { label: 'Overgrazing', value: 'Goats accelerating desertification' },
            { label: 'Tourism Impact', value: 'Trail damage and litter' },
            { label: 'Climate Change', value: 'Increasing drought periods' }
        ],
        
        historicalImportance: [
            { label: 'Fossils', value: 'Giant turtle and crocodile fossils found' },
            { label: 'Indigenous History', value: 'Prehistoric human presence' },
            { label: 'Colonial Era', value: 'Named for rattlesnakes (tatacoa)' },
            { label: 'Scientific Research', value: 'Paleontological studies since 1920s' }
        ],
        
        funFacts: [
            'Second largest arid zone in Colombia',
            'Not a true desert - technically tropical dry forest',
            'Contains fossils of giant 15-meter crocodiles',
            'One of the best stargazing locations in South America',
            'Red zone looks like Mars, gray zone looks like the Moon',
            'Named after a rattlesnake (tatacoa) that is now extinct here',
            'Fossils show this was once a tropical forest with rivers',
            'Has an astronomical observatory for clear night skies'
        ],
        
        journeyWaypoints: [
            { name: 'Villavieja', coordinates: [3.22, -75.22], description: 'Gateway town with museum' },
            { name: 'El Cuzco (Red Zone)', coordinates: [3.23, -75.15], description: 'Mars-like red landscape' },
            { name: 'Los Hoyos (Gray Zone)', coordinates: [3.22, -75.2], description: 'Lunar gray formations' },
            { name: 'Observatory', coordinates: [3.24, -75.17], description: 'Stargazing platform' },
            { name: 'Natural Pools', coordinates: [3.23, -75.18], description: 'Desert swimming spots' }
        ]
    },

    // ========================================
    // #46 - LA GUAJIRA DESERT
    // ========================================
    {
        id: 'la-guajira-desert',
        name: 'La Guajira Desert',
        countries: [
            { name: 'Colombia', code: 'CO' },
            { name: 'Venezuela', code: 'VE' }
        ],
        continent: 'South America',
        desertType: 'hot',
        area: 25000,
        rank: 46,
        coordinates: [12.0, -72.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'La Guajira Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-73.0, 11.0], [-73.0, 12.5], [-71.0, 12.5], [-71.0, 11.0], [-73.0, 11.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '35°C',
            winterTempMin: '22°C',
            winterTempAvg: '28°C',
            maxRecorded: '42°C',
            annualRainfall: '150-500mm',
            rainyMonths: 'September-December'
        },
        
        formation: {
            type: 'Trade wind coastal desert',
            causes: ['Caribbean trade winds', 'Rain shadow of Santa Marta', 'Coastal currents'],
            age: 'Relatively recent formation'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Coastal dunes including Taroa' },
            { name: 'Coastal Cliffs', description: 'Dramatic ocean views' },
            { name: 'Scrubland', description: 'Xeric shrub plains' },
            { name: 'Salt Flats', description: 'Traditional salt mines' }
        ],
        
        features: [
            { name: 'Punta Gallinas', type: 'Point', coordinates: [12.46, -71.67], description: 'Northernmost point in South America' },
            { name: 'Taroa Dunes', type: 'Dunes', coordinates: [12.4, -71.5], description: 'Dramatic dunes meeting Caribbean' },
            { name: 'Cabo de la Vela', type: 'Beach', coordinates: [12.19, -72.15], description: 'Kitesurf capital' },
            { name: 'Pilon de Azucar', type: 'Hill', coordinates: [12.2, -72.1], description: 'Sacred Wayuu site' },
            { name: 'Manaure Salt Flats', type: 'Salt production', coordinates: [11.77, -72.45], description: 'Largest salt mine in Colombia' }
        ],
        
        oases: [
            { name: 'Riohacha', coordinates: [11.54, -72.91], country: 'Colombia', population: 280000 },
            { name: 'Maicao', coordinates: [11.38, -72.24], country: 'Colombia', population: 150000 }
        ],
        
        cities: [
            { name: 'Riohacha', coordinates: [11.54, -72.91], country: 'Colombia', population: 280000 },
            { name: 'Maicao', coordinates: [11.38, -72.24], country: 'Colombia', population: 150000 },
            { name: 'Uribia', coordinates: [11.71, -72.27], country: 'Colombia', population: 20000 },
            { name: 'Maracaibo', coordinates: [10.65, -71.64], country: 'Venezuela', population: 2000000 }
        ],
        
        biodiversity: {
            plants: ['Trupillo (Mesquite)', 'Cardón cactus', 'Yotojoro cactus', 'Dividivi tree'],
            animals: ['Flamingos', 'Pink Iguanas', 'Sea Turtles', 'Pelicans', 'Dolphins', 'Goats (introduced)'],
            endangeredSpecies: ['Hawksbill Turtle (critically endangered)', 'Leatherback Turtle (vulnerable)']
        },
        
        humanLife: {
            peoples: ['Wayuu (largest indigenous group in Colombia)'],
            lifestyle: 'Traditional Wayuu culture, fishing, goat herding',
            population: '~400,000 Wayuu people'
        },
        
        economy: [
            { label: 'Salt Mining', value: 'Manaure sea salt production' },
            { label: 'Coal', value: 'Cerrejón largest open-pit coal mine' },
            { label: 'Natural Gas', value: 'Offshore production' },
            { label: 'Tourism', value: 'Cabo de la Vela, Punta Gallinas' },
            { label: 'Crafts', value: 'Wayuu mochilas (bags) famous worldwide' }
        ],
        
        environmentalIssues: [
            { label: 'Coal Mining', value: 'Cerrejón impacts on land and water' },
            { label: 'Water Scarcity', value: 'Severe droughts affect Wayuu' },
            { label: 'Child Malnutrition', value: 'Water shortage causes deaths' },
            { label: 'Overfishing', value: 'Marine resource depletion' }
        ],
        
        historicalImportance: [
            { label: 'Wayuu Resistance', value: 'Never conquered by Spanish' },
            { label: 'Pearl Trade', value: 'Colonial pearl fishing' },
            { label: 'Smuggling', value: 'Historic and current contraband route' },
            { label: 'Salt Trade', value: 'Centuries of salt production' }
        ],
        
        funFacts: [
            'Contains the northernmost point of South America',
            'The Wayuu are the largest indigenous group in Colombia',
            'Wayuu mochilas (bags) take 20+ days to weave',
            'Wayuu women have special funeral rites with two burials',
            'Cerrejón is one of the largest open-pit coal mines in the world',
            'Flamingos flock to the salt flats seasonally',
            'Cabo de la Vela is a world-class kitesurfing destination',
            'Temperatures can exceed 40°C with constant strong winds'
        ],
        
        journeyWaypoints: [
            { name: 'Riohacha', coordinates: [11.54, -72.91], description: 'Capital of La Guajira' },
            { name: 'Manaure Salt Flats', coordinates: [11.77, -72.45], description: 'Pink-hued salt mines' },
            { name: 'Cabo de la Vela', coordinates: [12.19, -72.15], description: 'Kitesurf beach town' },
            { name: 'Taroa Dunes', coordinates: [12.4, -71.5], description: 'Dunes meeting the sea' },
            { name: 'Punta Gallinas', coordinates: [12.46, -71.67], description: 'Continents northern tip' }
        ]
    },

    // ========================================
    // #47 - TABERNAS DESERT
    // ========================================
    {
        id: 'tabernas-desert',
        name: 'Tabernas Desert',
        countries: [
            { name: 'Spain', code: 'ES' }
        ],
        continent: 'Europe',
        desertType: 'hot',
        area: 280,
        rank: 47,
        coordinates: [37.05, -2.4],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Tabernas Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-2.6, 36.9], [-2.6, 37.2], [-2.2, 37.2], [-2.2, 36.9], [-2.6, 36.9]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '35°C',
            winterTempMin: '0°C',
            winterTempAvg: '12°C',
            maxRecorded: '47°C',
            annualRainfall: '200-250mm',
            rainyMonths: 'Autumn-Winter (sporadic)'
        },
        
        formation: {
            type: 'Rain shadow badlands',
            causes: ['Sierra Nevada rain shadow', 'Mediterranean climate', 'Soft sediment erosion'],
            age: '~2 million years (Pleistocene erosion)'
        },
        
        landforms: [
            { name: 'Badlands', description: 'Eroded gullies and mesas' },
            { name: 'Ramblas', description: 'Dry riverbeds, flash flood channels' },
            { name: 'Cárcavas', description: 'Deep erosion ravines' },
            { name: 'Mesas', description: 'Flat-topped remnant hills' }
        ],
        
        features: [
            { name: 'Mini Hollywood', type: 'Film set', coordinates: [37.05, -2.38], description: 'Original Spaghetti Western film set' },
            { name: 'Fort Bravo', type: 'Film set', coordinates: [37.06, -2.42], description: 'Western movie theme park' },
            { name: 'Western Leone', type: 'Film set', coordinates: [37.04, -2.37], description: 'Another preserved film set' },
            { name: 'Tabernas Castle', type: 'Castle', coordinates: [37.05, -2.39], description: 'Moorish castle ruins' }
        ],
        
        oases: [
            { name: 'Tabernas Town', coordinates: [37.05, -2.39], country: 'Spain', population: 3500 }
        ],
        
        cities: [
            { name: 'Almería', coordinates: [36.83, -2.46], country: 'Spain', population: 200000 },
            { name: 'Tabernas', coordinates: [37.05, -2.39], country: 'Spain', population: 3500 },
            { name: 'Sorbas', coordinates: [37.1, -2.12], country: 'Spain', population: 2500 }
        ],
        
        biodiversity: {
            plants: ['Esparto Grass', 'Thyme', 'Rosemary', 'Agave', 'Prickly Pear', 'Tamarisk'],
            animals: ['Trumpeter Finch', 'Spectacled Warbler', 'Ladder Snake', 'Ocellated Lizard', 'Wild Boar', 'Iberian Hare'],
            endangeredSpecies: ['Spanish Imperial Eagle (rare visitor)', 'Lesser Kestrel']
        },
        
        humanLife: {
            peoples: ['Andalusian Spanish'],
            lifestyle: 'Film industry, tourism, olive farming',
            population: '~5,000 in desert area'
        },
        
        economy: [
            { label: 'Film Industry', value: 'Hundreds of films shot here' },
            { label: 'Tourism', value: 'Western theme parks, film tours' },
            { label: 'Agriculture', value: 'Olive groves on edges' },
            { label: 'Solar Energy', value: 'Plataforma Solar research center' }
        ],
        
        environmentalIssues: [
            { label: 'Erosion', value: 'Rapid soil loss' },
            { label: 'Desertification', value: 'Expanding arid area' },
            { label: 'Water Scarcity', value: 'Limited rainfall and aquifers' },
            { label: 'Development', value: 'Tourism infrastructure' }
        ],
        
        historicalImportance: [
            { label: 'Moorish Era', value: 'Tabernas Castle from 11th century' },
            { label: 'Spaghetti Westerns', value: 'Sergio Leone filmed here 1960s' },
            { label: 'Film History', value: 'Lawrence of Arabia, Indiana Jones filmed here' },
            { label: 'Solar Research', value: 'Pioneering solar energy research since 1980s' }
        ],
        
        funFacts: [
            'Only true desert in mainland Europe',
            'Sergio Leone filmed his famous Spaghetti Westerns here',
            'The Good, the Bad and the Ugly was filmed here',
            'Lawrence of Arabia was filmed here (doubling for Arabia)',
            'Has more than 3,000 hours of sunshine per year',
            'Indiana Jones and the Last Crusade scenes shot here',
            'Contains Europes largest solar energy research center',
            'Game of Thrones Dorne scenes were filmed nearby',
            'Still has working Western film sets you can visit'
        ],
        
        journeyWaypoints: [
            { name: 'Almería', coordinates: [36.83, -2.46], description: 'Coastal city gateway' },
            { name: 'Tabernas Town', coordinates: [37.05, -2.39], description: 'Desert town with castle' },
            { name: 'Mini Hollywood', coordinates: [37.05, -2.38], description: 'Original Western film set' },
            { name: 'Fort Bravo', coordinates: [37.06, -2.42], description: 'Western theme park' },
            { name: 'Badlands', coordinates: [37.08, -2.35], description: 'Eroded desert landscape' }
        ]
    },

    // ========================================
    // #48 - ACCONA DESERT (Crete Senesi)
    // ========================================
    {
        id: 'accona-desert',
        name: 'Accona Desert',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        desertType: 'hot',
        area: 750,
        rank: 48,
        coordinates: [43.18, 11.53],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Accona Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [11.3, 43.0], [11.3, 43.35], [11.75, 43.35], [11.75, 43.0], [11.3, 43.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '28°C',
            winterTempMin: '-5°C',
            winterTempAvg: '5°C',
            maxRecorded: '42°C',
            annualRainfall: '500-700mm',
            rainyMonths: 'Autumn-Spring'
        },
        
        formation: {
            type: 'Clay badlands (semi-desert)',
            causes: ['Pliocene marine clay erosion', 'Deforestation', 'Mediterranean climate extremes'],
            age: '3-5 million years (Pliocene clay deposits)'
        },
        
        landforms: [
            { name: 'Crete', description: 'Eroded clay hills with bare slopes' },
            { name: 'Biancane', description: 'Small white clay domes' },
            { name: 'Calanchi', description: 'Deep erosion gullies' },
            { name: 'Rolling Hills', description: 'Iconic Tuscan landscape' }
        ],
        
        features: [
            { name: 'Crete Senesi', type: 'Landscape', coordinates: [43.18, 11.53], description: 'Iconic bare clay hills' },
            { name: 'Abbey of Monte Oliveto Maggiore', type: 'Abbey', coordinates: [43.17, 11.55], description: 'Benedictine monastery' },
            { name: 'Asciano', type: 'Town', coordinates: [43.23, 11.56], description: 'Hill town in the Crete' },
            { name: 'San Giovanni dAsso', type: 'Town', coordinates: [43.15, 11.55], description: 'Truffle capital' }
        ],
        
        oases: [
            { name: 'Asciano', coordinates: [43.23, 11.56], country: 'Italy', population: 7000 },
            { name: 'Buonconvento', coordinates: [43.13, 11.48], country: 'Italy', population: 3500 }
        ],
        
        cities: [
            { name: 'Siena', coordinates: [43.32, 11.33], country: 'Italy', population: 54000 },
            { name: 'Asciano', coordinates: [43.23, 11.56], country: 'Italy', population: 7000 },
            { name: 'Montalcino', coordinates: [43.06, 11.49], country: 'Italy', population: 5000 }
        ],
        
        biodiversity: {
            plants: ['Cypress Trees', 'Olive Trees', 'Wild Herbs', 'Junipers', 'Oaks (edges)'],
            animals: ['Porcupine', 'Wild Boar', 'Hare', 'Pheasant', 'Hoopoe', 'Buzzard'],
            endangeredSpecies: ['Italian Wolf (rare)', 'Lesser Kestrel']
        },
        
        humanLife: {
            peoples: ['Tuscan Italian'],
            lifestyle: 'Wine production, truffle hunting, agritourism',
            population: '~15,000 in Crete Senesi area'
        },
        
        economy: [
            { label: 'Wine', value: 'Brunello di Montalcino nearby' },
            { label: 'Truffles', value: 'White truffle hunting' },
            { label: 'Tourism', value: 'Iconic Tuscan photography' },
            { label: 'Olive Oil', value: 'Premium olive oil production' },
            { label: 'Agritourism', value: 'Farm stays and villas' }
        ],
        
        environmentalIssues: [
            { label: 'Erosion', value: 'Severe clay erosion' },
            { label: 'Deforestation Legacy', value: 'Medieval deforestation impact' },
            { label: 'Climate Change', value: 'Increasing drought' },
            { label: 'Tourism Pressure', value: 'Overcrowding at scenic points' }
        ],
        
        historicalImportance: [
            { label: 'Medieval Abbey', value: 'Monte Oliveto Maggiore founded 1313' },
            { label: 'Etruscan Heritage', value: 'Ancient Etruscan territory' },
            { label: 'Art History', value: 'Painted by Lorenzetti 14th century' },
            { label: 'Photography', value: 'One of most photographed landscapes' }
        ],
        
        funFacts: [
            'Not a true desert but Italys most desert-like landscape',
            'Called the "desert" of Tuscany since medieval times',
            'The lone cypress trees are iconic of Tuscan photography',
            'White truffles found here are worth thousands per kilo',
            'The clay is the same that becomes famous Sienese pottery',
            'Looks lunar but is in the heart of wine country',
            'The Abbey has famous frescoes by Signorelli',
            'Gladiator opening battle scene filmed nearby',
            'Landscape appears in countless postcards and calendars'
        ],
        
        journeyWaypoints: [
            { name: 'Siena', coordinates: [43.32, 11.33], description: 'Medieval city gateway' },
            { name: 'Asciano', coordinates: [43.23, 11.56], description: 'Crete Senesi town' },
            { name: 'Monte Oliveto', coordinates: [43.17, 11.55], description: 'Historic abbey' },
            { name: 'Crete Viewpoint', coordinates: [43.18, 11.53], description: 'Iconic landscape vista' },
            { name: 'Montalcino', coordinates: [43.06, 11.49], description: 'Famous wine town' }
        ]
    },

    // ========================================
    // #49 - OLESHKY SANDS
    // ========================================
    {
        id: 'oleshky-sands',
        name: 'Oleshky Sands',
        countries: [
            { name: 'Ukraine', code: 'UA' }
        ],
        continent: 'Europe',
        desertType: 'cold',
        area: 161,
        rank: 49,
        coordinates: [46.58, 33.05],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Oleshky Sands' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [32.8, 46.4], [32.8, 46.75], [33.3, 46.75], [33.3, 46.4], [32.8, 46.4]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '25°C',
            winterTempMin: '-20°C',
            winterTempAvg: '-3°C',
            maxRecorded: '42°C',
            annualRainfall: '350-400mm',
            rainyMonths: 'Spring and Autumn'
        },
        
        formation: {
            type: 'Man-made/expanded desert',
            causes: ['Overgrazing by sheep in 19th century', 'Deforestation', 'Wind erosion'],
            age: '~200 years (human-caused expansion)'
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Low rolling dunes up to 5m' },
            { name: 'Sand Plains', description: 'Flat sandy expanses' },
            { name: 'Forest Islands', description: 'Planted pine groves' },
            { name: 'Steppe Edges', description: 'Grassland transitions' }
        ],
        
        features: [
            { name: 'Central Sands', type: 'Dune field', coordinates: [46.58, 33.05], description: 'Open sandy area' },
            { name: 'Pine Forests', type: 'Planted forest', coordinates: [46.55, 33.1], description: 'Soviet-era stabilization plantings' },
            { name: 'Observation Tower', type: 'Viewpoint', coordinates: [46.57, 33.07], description: 'Panoramic views' },
            { name: 'Oleshky Town', type: 'Town', coordinates: [46.62, 32.77], description: 'Gateway town' }
        ],
        
        oases: [
            { name: 'Oleshky', coordinates: [46.62, 32.77], country: 'Ukraine', population: 25000 }
        ],
        
        cities: [
            { name: 'Oleshky', coordinates: [46.62, 32.77], country: 'Ukraine', population: 25000 },
            { name: 'Kherson', coordinates: [46.64, 32.62], country: 'Ukraine', population: 290000 },
            { name: 'Nova Kakhovka', coordinates: [46.75, 33.37], country: 'Ukraine', population: 45000 }
        ],
        
        biodiversity: {
            plants: ['Scots Pine (planted)', 'Sand Grass', 'Steppe Herbs', 'Wild Flowers', 'Lichens'],
            animals: ['European Hare', 'Red Fox', 'Sand Lizard', 'Steppe Eagle', 'European Roller', 'Wild Boar'],
            endangeredSpecies: ['Great Bustard (rare)', 'Steppe Eagle (declining)']
        },
        
        humanLife: {
            peoples: ['Ukrainian'],
            lifestyle: 'Agriculture, forestry, some tourism',
            population: '~30,000 in surrounding area'
        },
        
        economy: [
            { label: 'Forestry', value: 'Pine forest management' },
            { label: 'Agriculture', value: 'Irrigated farming on edges' },
            { label: 'Tourism', value: 'Growing ecotourism' },
            { label: 'Sand Mining', value: 'Construction sand extraction' }
        ],
        
        environmentalIssues: [
            { label: 'War Impact', value: 'Russian occupation and dam destruction 2022-present' },
            { label: 'Desertification', value: 'Potential expansion without management' },
            { label: 'Water Crisis', value: 'Kakhovka Dam destruction 2023' },
            { label: 'Fire Risk', value: 'Pine forest fires' }
        ],
        
        historicalImportance: [
            { label: 'Man-made Desert', value: 'Created by 19th century overgrazing' },
            { label: 'Soviet Reforestation', value: 'Massive pine planting 1950s-1970s' },
            { label: 'Ancient Settlements', value: 'Scythian and Greek presence' },
            { label: '2022-23 War', value: 'Kherson Oblast occupation and dam destruction' }
        ],
        
        funFacts: [
            'Largest desert in Europe (larger than Tabernas)',
            'Entirely man-made through overgrazing by sheep barons',
            'Over 200 years ago this was fertile grassland',
            'Soviet government planted millions of pines to stop spreading',
            'Sand dunes can reach 40°C in summer but -20°C in winter',
            'Just 25km from the Dnieper River',
            'Also called Oleshkivski Pisky in Ukrainian',
            'Suffered major disruption from 2022-23 Russian occupation'
        ],
        
        journeyWaypoints: [
            { name: 'Kherson', coordinates: [46.64, 32.62], description: 'Regional capital' },
            { name: 'Oleshky Town', coordinates: [46.62, 32.77], description: 'Desert gateway' },
            { name: 'Pine Forests', coordinates: [46.55, 33.1], description: 'Stabilization plantings' },
            { name: 'Central Sands', coordinates: [46.58, 33.05], description: 'Open dune area' },
            { name: 'Eastern Edge', coordinates: [46.55, 33.2], description: 'Steppe transition' }
        ]
    },

    // ========================================
    // #50 - LENÇÓIS MARANHENSES
    // ========================================
    {
        id: 'lencois-maranhenses',
        name: 'Lençóis Maranhenses',
        countries: [
            { name: 'Brazil', code: 'BR' }
        ],
        continent: 'South America',
        desertType: 'coastal',
        area: 1550,
        rank: 50,
        coordinates: [-2.5, -43.1],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lençóis Maranhenses' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-43.5, -2.8], [-43.5, -2.3], [-42.6, -2.3], [-42.6, -2.8], [-43.5, -2.8]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '36°C',
            summerTempAvg: '30°C',
            winterTempMin: '22°C',
            winterTempAvg: '26°C',
            maxRecorded: '40°C',
            annualRainfall: '1,600mm (paradox - very high rainfall)',
            rainyMonths: 'January-June'
        },
        
        formation: {
            type: 'Coastal dune field with lagoons',
            causes: ['Coastal sand accumulation', 'High rainfall fills interdune lagoons', 'Seasonal flooding cycle'],
            age: '~10,000 years'
        },
        
        landforms: [
            { name: 'White Sand Dunes', description: 'Brilliant white dunes up to 40m' },
            { name: 'Blue Lagoons', description: 'Seasonal freshwater pools' },
            { name: 'Green Lagoons', description: 'Algae-colored pools' },
            { name: 'River Deltas', description: 'Preguiças River estuary' }
        ],
        
        features: [
            { name: 'Lagoa Azul', type: 'Lagoon', coordinates: [-2.48, -43.12], description: 'Famous Blue Lagoon' },
            { name: 'Lagoa Bonita', type: 'Lagoon', coordinates: [-2.47, -43.14], description: 'Beautiful Lagoon' },
            { name: 'Lagoa da Gaivota', type: 'Lagoon', coordinates: [-2.49, -43.08], description: 'Seagull Lagoon' },
            { name: 'Preguiças River', type: 'River', coordinates: [-2.6, -42.9], description: 'River crossing dune field' },
            { name: 'Atins Village', type: 'Village', coordinates: [-2.58, -42.74], description: 'Beach village destination' }
        ],
        
        oases: [
            { name: 'Barreirinhas', coordinates: [-2.75, -42.83], country: 'Brazil', population: 60000 },
            { name: 'Santo Amaro', coordinates: [-2.5, -43.24], country: 'Brazil', population: 15000 }
        ],
        
        cities: [
            { name: 'Barreirinhas', coordinates: [-2.75, -42.83], country: 'Brazil', population: 60000 },
            { name: 'Santo Amaro', coordinates: [-2.5, -43.24], country: 'Brazil', population: 15000 },
            { name: 'São Luís', coordinates: [-2.53, -44.3], country: 'Brazil', population: 1100000 }
        ],
        
        biodiversity: {
            plants: ['Cashew Trees', 'Buriti Palm', 'Tucum Palm', 'Restinga vegetation'],
            animals: ['Wolf Fish (in lagoons)', 'Scarlet Ibis', 'Blue-and-yellow Macaw', 'Caiman', 'Sea Turtles (coast)', 'Capybara'],
            endangeredSpecies: ['West Indian Manatee', 'Scarlet Macaw', 'Giant Otter (rivers)']
        },
        
        humanLife: {
            peoples: ['Maranhense Brazilians', 'Quilombola communities'],
            lifestyle: 'Tourism, fishing, small-scale farming',
            population: '~90,000 in park buffer zone'
        },
        
        economy: [
            { label: 'Tourism', value: 'Major ecotourism destination' },
            { label: 'Fishing', value: 'Traditional fishing communities' },
            { label: 'Agriculture', value: 'Cashew and small farming' },
            { label: 'Crafts', value: 'Buriti palm fiber crafts' }
        ],
        
        environmentalIssues: [
            { label: 'Tourism Pressure', value: '4WD vehicles damaging dunes' },
            { label: 'Development', value: 'Uncontrolled growth in Barreirinhas' },
            { label: 'Climate Change', value: 'Changing rainfall patterns' },
            { label: 'Waste Management', value: 'Pollution in lagoons' }
        ],
        
        historicalImportance: [
            { label: 'Indigenous History', value: 'Tremembé people lived here' },
            { label: 'National Park', value: 'Created 1981' },
            { label: 'Quilombola', value: 'Escaped slave communities' },
            { label: 'Tourism Discovery', value: 'Became famous in 2000s' }
        ],
        
        funFacts: [
            'Not a true desert - receives 300x more rain than the Sahara',
            'The white dunes have crystal-blue lagoons between them',
            'Lagoons only exist from June to September (rainy season aftermath)',
            'Fish appear in the lagoons every year from underground',
            'The park is the size of São Paulo city',
            'Dunes shift up to 20 meters per year',
            'The water is so clear you can see the sandy bottom',
            'One of Brazils most surreal landscapes',
            'Sand is 90% quartz, making it brilliantly white',
            'Swimming in the lagoons is a major tourist activity'
        ],
        
        journeyWaypoints: [
            { name: 'Barreirinhas', coordinates: [-2.75, -42.83], description: 'Main gateway town' },
            { name: 'Lagoa Azul', coordinates: [-2.48, -43.12], description: 'Famous Blue Lagoon' },
            { name: 'Lagoa Bonita', coordinates: [-2.47, -43.14], description: 'Beautiful Lagoon viewpoint' },
            { name: 'Atins', coordinates: [-2.58, -42.74], description: 'Rustic beach village' },
            { name: 'Santo Amaro', coordinates: [-2.5, -43.24], description: 'Western access point' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_5;
}
