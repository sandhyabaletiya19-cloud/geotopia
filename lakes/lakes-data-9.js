// ============================================
// LAKES DATA - FILE 9 (Lakes 81-90)
// ============================================

const lakesData9 = [
    {
        id: 'lake-tekapo',
        name: 'Lake Tekapo',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 83,
        maxDepth: 120,
        avgDepth: 64,
        volume: 5.3,
        elevation: 710,
        coordinates: [-44.0, 170.48],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Tekapo' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [170.35, -43.9], [170.55, -43.92], [170.6, -44.05],
                    [170.5, -44.15], [170.35, -44.1], [170.3, -43.98], [170.35, -43.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Godley River', length: 35, coordinates: [[170.4, -43.75], [170.42, -43.82], [170.45, -43.88]] },
            { name: 'Cass River', length: 20, coordinates: [[170.5, -43.78], [170.48, -43.85], [170.47, -43.9]] },
            { name: 'Macaulay River', length: 30, coordinates: [[170.55, -43.8], [170.52, -43.87], [170.5, -43.92]] }
        ],
        outflowRivers: [
            { name: 'Tekapo River', length: 25, coordinates: [[170.45, -44.15], [170.42, -44.2], [170.4, -44.25]] }
        ],
        basinArea: 730,
        islands: [
            { name: 'Motuariki Island', coordinates: [-44.0, 170.48], area: 0.02 }
        ],
        cities: [
            { name: 'Lake Tekapo (town)', coordinates: [-44.0044, 170.4769], country: 'New Zealand', population: 600 },
            { name: 'Twizel', coordinates: [-44.2575, 170.0983], country: 'New Zealand', population: 1200 }
        ],
        biodiversity: [
            { label: 'Trout', value: 'Brown and Rainbow Trout (introduced)' },
            { label: 'Salmon', value: 'Chinook Salmon in canals' },
            { label: 'Turquoise Color', value: 'Glacial flour creates famous blue color' },
            { label: 'Lupins', value: 'Colorful lupins along shores (invasive)' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major South Island attraction' },
            { label: 'Dark Sky Reserve', value: 'International Dark Sky Reserve' },
            { label: 'Hydropower', value: 'Part of Waitaki hydropower scheme' },
            { label: 'Astronomy', value: 'Mt John Observatory' }
        ],
        environmentalIssues: [
            { label: 'Invasive Lupins', value: 'Beautiful but ecologically damaging' },
            { label: 'Tourism Pressure', value: 'Managing visitor impacts' },
            { label: 'Water Levels', value: 'Controlled for hydropower' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Māori', value: 'Traditional food gathering area' },
            { label: 'Name Origin', value: 'Māori "Takapō" - sleeping mat' },
            { label: 'Church of Good Shepherd', value: '1935 - iconic landmark' },
            { label: 'Mackenzie Basin', value: 'Named for James Mackenzie (sheep rustler)' }
        ]
    },
    {
        id: 'lake-wakatipu',
        name: 'Lake Wakatipu',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 293,
        maxDepth: 380,
        avgDepth: 230,
        volume: 67,
        elevation: 310,
        coordinates: [-45.05, 168.65],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Wakatipu' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [168.35, -44.85], [168.7, -44.95], [168.85, -45.15],
                    [168.55, -45.4], [168.35, -45.2], [168.25, -45.0], [168.35, -44.85]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Dart River', length: 56, coordinates: [[168.4, -44.7], [168.42, -44.78], [168.45, -44.85]] },
            { name: 'Rees River', length: 40, coordinates: [[168.5, -44.72], [168.48, -44.8], [168.47, -44.87]] },
            { name: 'Greenstone River', length: 45, coordinates: [[168.2, -44.9], [168.28, -44.92], [168.35, -44.95]] }
        ],
        outflowRivers: [
            { name: 'Kawarau River', length: 60, coordinates: [[168.7, -45.02], [168.8, -45.0], [168.9, -44.98]] }
        ],
        basinArea: 2830,
        islands: [
            { name: 'Pigeon Island', coordinates: [-45.08, 168.6], area: 0.15 },
            { name: 'Pig Island', coordinates: [-45.0, 168.55], area: 0.1 }
        ],
        cities: [
            { name: 'Queenstown', coordinates: [-45.0312, 168.6626], country: 'New Zealand', population: 16000 },
            { name: 'Glenorchy', coordinates: [-44.8486, 168.3853], country: 'New Zealand', population: 500 },
            { name: 'Kingston', coordinates: [-45.3344, 168.7186], country: 'New Zealand', population: 200 }
        ],
        biodiversity: [
            { label: 'Trout', value: 'Brown and Rainbow Trout' },
            { label: 'Longfin Eel', value: 'Native species' },
            { label: 'Birds', value: 'Paradise shelduck, Black swan' },
            { label: 'Seiche', value: 'Lake "breathes" - 27cm rise/fall every 27 minutes' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Adventure capital of NZ' },
            { label: 'Jet Boating', value: 'Invented here' },
            { label: 'Bungee', value: 'Commercial bungee started at Kawarau Bridge' },
            { label: 'Skiing', value: 'Remarkables, Coronet Peak' }
        ],
        environmentalIssues: [
            { label: 'Growth Pressure', value: 'Queenstown development impacts' },
            { label: 'Water Quality', value: 'Still very clean' },
            { label: 'Invasive Species', value: 'Didymo algae concerns' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Māori Legend', value: 'Sleeping giant - heartbeat causes seiche' },
            { label: 'Gold Rush', value: '1860s Otago gold rush' },
            { label: 'TSS Earnslaw', value: '1912 vintage steamship still operating' },
            { label: 'Film Location', value: 'Lord of the Rings filming' }
        ]
    },
    {
        id: 'lake-wanaka',
        name: 'Lake Wanaka',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 192,
        maxDepth: 300,
        avgDepth: 152,
        volume: 29,
        elevation: 278,
        coordinates: [-44.65, 169.1],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Wanaka' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [169.0, -44.45], [169.3, -44.5], [169.4, -44.7],
                    [169.2, -44.85], [168.95, -44.75], [168.85, -44.55], [169.0, -44.45]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Matukituki River', length: 75, coordinates: [[168.7, -44.5], [168.85, -44.55], [168.95, -44.6]] },
            { name: 'Makarora River', length: 50, coordinates: [[169.25, -44.25], [169.22, -44.35], [169.2, -44.45]] }
        ],
        outflowRivers: [
            { name: 'Clutha River', length: 322, coordinates: [[169.15, -44.7], [169.2, -44.75], [169.3, -44.8]] }
        ],
        basinArea: 2540,
        islands: [
            { name: 'Mou Waho Island', coordinates: [-44.6, 169.15], area: 1.2, description: 'Nature reserve' },
            { name: 'Ruby Island', coordinates: [-44.68, 169.12], area: 0.15 },
            { name: 'Harwich Island', coordinates: [-44.58, 169.08], area: 0.08 }
        ],
        cities: [
            { name: 'Wanaka', coordinates: [-44.7, 169.15], country: 'New Zealand', population: 11500 },
            { name: 'Makarora', coordinates: [-44.2186, 169.2369], country: 'New Zealand', population: 50 }
        ],
        biodiversity: [
            { label: 'Trout', value: 'Brown and Rainbow Trout fishing' },
            { label: 'Salmon', value: 'Landlocked Salmon' },
            { label: 'Birds', value: 'Crested grebe, Paradise shelduck' },
            { label: 'Wānaka Tree', value: 'Famous willow tree in lake (planted 1930s)' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major tourist destination' },
            { label: 'Skiing', value: 'Treble Cone, Cardrona ski fields' },
            { label: 'Film Industry', value: 'Warbirds Over Wanaka air show' },
            { label: 'Adventure Sports', value: 'Skydiving, canyoning' }
        ],
        environmentalIssues: [
            { label: 'Growth', value: 'Rapid tourism development' },
            { label: 'Water Quality', value: 'Excellent, monitored' },
            { label: 'Lake Weed', value: 'Lagarosiphon control efforts' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Māori', value: 'Kāi Tahu traveled for pounamu (greenstone)' },
            { label: 'Name', value: 'Māori chief Wānaka' },
            { label: 'That Wanaka Tree', value: 'Instagram-famous willow' },
            { label: 'Mt Aspiring', value: 'Gateway to national park' }
        ]
    },
    {
        id: 'lake-como-north',
        name: 'Lake Orta',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 18,
        maxDepth: 143,
        avgDepth: 69,
        volume: 1.3,
        elevation: 290,
        coordinates: [45.8, 8.4],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Orta' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [8.38, 45.88], [8.43, 45.86], [8.44, 45.78],
                    [8.4, 45.73], [8.36, 45.77], [8.35, 45.85], [8.38, 45.88]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Pescone', length: 10, coordinates: [[8.42, 45.72], [8.41, 45.74], [8.4, 45.76]] },
            { name: 'Small streams', length: 5, coordinates: [[8.38, 45.88], [8.39, 45.86], [8.4, 45.84]] }
        ],
        outflowRivers: [
            { name: 'Nigoglia', length: 10, coordinates: [[8.42, 45.88], [8.45, 45.9], [8.48, 45.92]] }
        ],
        basinArea: 116,
        islands: [
            { name: 'Isola San Giulio', coordinates: [45.8, 8.4], area: 0.01, description: 'Romanesque basilica, monastery' }
        ],
        cities: [
            { name: 'Orta San Giulio', coordinates: [45.7975, 8.4139], country: 'Italy', population: 1200 },
            { name: 'Omegna', coordinates: [45.8764, 8.4081], country: 'Italy', population: 15000 },
            { name: 'Pettenasco', coordinates: [45.8175, 8.4061], country: 'Italy', population: 1400 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Recovering after pollution recovery' },
            { label: 'Acidification Recovery', value: 'Lake recovered from industrial pollution' },
            { label: 'Birds', value: 'Herons, swans, coots' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Quieter alternative to larger lakes' },
            { label: 'Kitchenware', value: 'Alessi, Bialetti nearby' },
            { label: 'Faucets', value: 'Major tap manufacturing area' }
        ],
        environmentalIssues: [
            { label: 'Recovery Success', value: 'Liming restored lake from acidification' },
            { label: 'Now Clean', value: 'Water quality excellent' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'St. Julius', value: '4th century - drove out dragons (legend)' },
            { label: 'Sacro Monte', value: 'UNESCO World Heritage pilgrimage site' },
            { label: 'Nietzsche', value: 'Wrote "Thus Spoke Zarathustra" here' },
            { label: 'Flows North', value: 'Only Italian lake flowing north' }
        ]
    },
    {
        id: 'lake-bolsena',
        name: 'Lake Bolsena',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Volcanic (Caldera)',
        surfaceArea: 114,
        maxDepth: 151,
        avgDepth: 81,
        volume: 9.2,
        elevation: 305,
        coordinates: [42.6, 11.93],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Bolsena' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [11.82, 42.7], [12.0, 42.68], [12.08, 42.58],
                    [12.0, 42.48], [11.85, 42.5], [11.78, 42.6], [11.82, 42.7]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Small streams only', length: 8, coordinates: [[11.85, 42.72], [11.87, 42.7], [11.88, 42.68]] }
        ],
        outflowRivers: [
            { name: 'Marta River', length: 50, coordinates: [[11.9, 42.48], [11.85, 42.4], [11.75, 42.35]] }
        ],
        basinArea: 273,
        islands: [
            { name: 'Bisentina', coordinates: [42.62, 11.88], area: 0.17, description: 'Farnese family church' },
            { name: 'Martana', coordinates: [42.59, 11.9], area: 0.1, description: 'Medieval ruins' }
        ],
        cities: [
            { name: 'Bolsena', coordinates: [42.6456, 11.9858], country: 'Italy', population: 4000 },
            { name: 'Montefiascone', coordinates: [42.5378, 12.0314], country: 'Italy', population: 13500 },
            { name: 'Marta', coordinates: [42.5333, 11.9250], country: 'Italy', population: 3500 },
            { name: 'Capodimonte', coordinates: [42.5489, 11.9056], country: 'Italy', population: 1800 }
        ],
        biodiversity: [
            { label: 'Eels', value: 'Famous Bolsena eels' },
            { label: 'Coregone', value: 'Whitefish introduced 1900s' },
            { label: 'Pike', value: 'Native species' },
            { label: 'Clean Water', value: 'Cleanest large lake in Italy' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Beach resorts, camping' },
            { label: 'Fishing', value: 'Eel and coregone fishing' },
            { label: 'Wine', value: 'Est! Est!! Est!!! wine region' },
            { label: 'Agriculture', value: 'Olive oil production' }
        ],
        environmentalIssues: [
            { label: 'Clean Lake', value: 'Very good water quality' },
            { label: 'Protected', value: 'Environmental regulations in place' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest Volcanic', value: 'Largest volcanic lake in Europe' },
            { label: 'Miracle of Bolsena', value: '1263 - Origin of Corpus Christi feast' },
            { label: 'Etruscan', value: 'Important Etruscan settlements' },
            { label: 'Via Francigena', value: 'Pilgrimage route passes here' }
        ]
    },
    {
        id: 'lake-pichola',
        name: 'Lake Pichola',
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Artificial',
        surfaceArea: 7,
        maxDepth: 8.5,
        avgDepth: 4,
        volume: 0.03,
        elevation: 600,
        coordinates: [24.57, 73.68],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Pichola' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [73.67, 24.59], [73.7, 24.58], [73.7, 24.55],
                    [73.68, 24.54], [73.66, 24.56], [73.66, 24.58], [73.67, 24.59]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Sisarma River', length: 15, coordinates: [[73.6, 24.5], [73.65, 24.53], [73.67, 24.55]] },
            { name: 'Bujda River', length: 10, coordinates: [[73.68, 24.62], [73.68, 24.6], [73.68, 24.58]] }
        ],
        outflowRivers: [],
        basinArea: 55,
        islands: [
            { name: 'Jag Niwas', coordinates: [24.575, 73.68], area: 0.016, description: 'Lake Palace Hotel' },
            { name: 'Jag Mandir', coordinates: [24.565, 73.685], area: 0.014, description: 'Island palace' },
            { name: 'Mohan Mandir', coordinates: [24.58, 73.675], area: 0.005 },
            { name: 'Arsi Vilas', coordinates: [24.578, 73.688], area: 0.003 }
        ],
        cities: [
            { name: 'Udaipur', coordinates: [24.5854, 73.7125], country: 'India', population: 475000 }
        ],
        biodiversity: [
            { label: 'Birds', value: 'Cormorants, herons, kingfishers' },
            { label: 'Fish', value: 'Carp, catfish' },
            { label: 'Urban Lake', value: 'Important urban water body' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Udaipur\'s main attraction' },
            { label: 'Lake Palace', value: 'World-famous luxury hotel' },
            { label: 'Water Supply', value: 'Historically supplied city' },
            { label: 'Film Location', value: 'James Bond "Octopussy" filmed here' }
        ],
        environmentalIssues: [
            { label: 'Water Levels', value: 'Dependent on monsoon' },
            { label: 'Pollution', value: 'Sewage and urban runoff' },
            { label: 'Encroachment', value: 'Illegal construction on shores' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Created', value: '1362 AD by Banjara tribe' },
            { label: 'Mewar Dynasty', value: 'Royal capital of Mewar' },
            { label: 'Palaces', value: 'Lake Palace built 1743-1746' },
            { label: 'City of Lakes', value: 'Udaipur named for lakes' }
        ]
    },
    {
        id: 'lake-dal',
        name: 'Dal Lake',
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Natural (Urban)',
        surfaceArea: 18,
        maxDepth: 6,
        avgDepth: 3,
        volume: 0.05,
        elevation: 1583,
        coordinates: [34.1, 74.85],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Dal Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [74.82, 34.13], [74.88, 34.12], [74.9, 34.08],
                    [74.86, 34.05], [74.82, 34.07], [74.8, 34.1], [74.82, 34.13]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Dachigam Stream', length: 15, coordinates: [[74.95, 34.1], [74.9, 34.1], [74.88, 34.1]] },
            { name: 'Telbal Nullah', length: 8, coordinates: [[74.85, 34.15], [74.85, 34.13], [74.85, 34.11]] }
        ],
        outflowRivers: [
            { name: 'Dalgate', length: 2, coordinates: [[74.82, 34.08], [74.8, 34.07], [74.78, 34.06]] }
        ],
        basinArea: 316,
        islands: [
            { name: 'Char Chinari', coordinates: [34.1, 74.86], area: 0.002, description: 'Four chinar trees' },
            { name: 'Sona Lank', coordinates: [34.085, 74.85], area: 0.015, description: 'Golden Island' },
            { name: 'Rupa Lank', coordinates: [34.09, 74.87], area: 0.01, description: 'Silver Island' }
        ],
        cities: [
            { name: 'Srinagar', coordinates: [34.0837, 74.7973], country: 'India', population: 1270000 }
        ],
        biodiversity: [
            { label: 'Lotus', value: 'Famous lotus gardens' },
            { label: 'Birds', value: 'Kingfisher, Common Coot, Mallard' },
            { label: 'Fish', value: 'Carp, Schizothorax' },
            { label: 'Floating Gardens', value: '"Rad" - vegetable gardens on lake' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Kashmir\'s top attraction' },
            { label: 'Houseboats', value: '1,000+ houseboats' },
            { label: 'Shikara', value: 'Traditional boats - water taxis' },
            { label: 'Vegetables', value: 'Floating gardens produce vegetables' }
        ],
        environmentalIssues: [
            { label: 'Shrinking', value: 'Lost 50% area since 1900' },
            { label: 'Pollution', value: 'Sewage, fertilizer runoff' },
            { label: 'Encroachment', value: 'Illegal construction' },
            { label: 'Eutrophication', value: 'Weeds and algae growth' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Mughal Gardens', value: 'Shalimar Bagh, Nishat Bagh on shores' },
            { label: 'British Era', value: 'Houseboats developed (couldn\'t own land)' },
            { label: 'Name', value: '"Dal" means lake in Kashmiri' },
            { label: 'Jewel of Kashmir', value: 'Called "Jewel in the crown of Kashmir"' }
        ]
    },
    {
        id: 'lake-chilika',
        name: 'Chilika Lake',
        countries: [
            { name: 'India', code: 'IN' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Lagoon',
        surfaceArea: 1165,
        maxDepth: 4.2,
        avgDepth: 2,
        volume: 2,
        elevation: 0,
        coordinates: [19.75, 85.4],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Chilika Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [85.15, 19.85], [85.55, 19.8], [85.65, 19.65],
                    [85.5, 19.55], [85.2, 19.6], [85.1, 19.75], [85.15, 19.85]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Daya River', length: 90, coordinates: [[85.2, 20.0], [85.25, 19.9], [85.3, 19.85]] },
            { name: 'Bhargavi River', length: 75, coordinates: [[85.3, 20.0], [85.35, 19.92], [85.38, 19.85]] },
            { name: 'Luna River', length: 50, coordinates: [[85.1, 19.85], [85.15, 19.8], [85.18, 19.78]] }
        ],
        outflowRivers: [
            { name: 'Mouth to Bay of Bengal', length: 3, coordinates: [[85.5, 19.68], [85.55, 19.65], [85.6, 19.6]] }
        ],
        basinArea: 4406,
        islands: [
            { name: 'Nalabana Bird Island', coordinates: [19.72, 85.42], area: 16, description: 'Bird sanctuary - core zone' },
            { name: 'Honeymoon Island', coordinates: [19.75, 85.45], area: 0.5 },
            { name: 'Breakfast Island', coordinates: [19.73, 85.48], area: 0.3 },
            { name: 'Kalijai Island', coordinates: [19.77, 85.33], area: 0.2, description: 'Temple to goddess Kalijai' }
        ],
        cities: [
            { name: 'Puri', coordinates: [19.8, 85.8311], country: 'India', population: 200000 },
            { name: 'Bhubaneswar', coordinates: [20.2961, 85.8245], country: 'India', population: 885000 },
            { name: 'Balugaon', coordinates: [20.0167, 85.1333], country: 'India', population: 30000 }
        ],
        biodiversity: [
            { label: 'Birds', value: '1 million+ migratory birds, 230 species' },
            { label: 'Irrawaddy Dolphins', value: '150+ endangered dolphins' },
            { label: 'Fish', value: '225 fish species' },
            { label: 'Ramsar Site', value: 'Wetland of International Importance' }
        ],
        economicImportance: [
            { label: 'Fishing', value: '200,000 fishermen depend on lake' },
            { label: 'Tourism', value: 'Bird watching, dolphin tours' },
            { label: 'Prawns', value: 'Major prawn fishery' }
        ],
        environmentalIssues: [
            { label: 'Siltation', value: 'River sediment reducing depth' },
            { label: 'Salinity Changes', value: 'Affecting ecosystem balance' },
            { label: 'Overfishing', value: 'Pressure on fish stocks' },
            { label: 'Invasive Species', value: 'Water hyacinth spread' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest Lagoon', value: 'Largest brackish water lagoon in Asia' },
            { label: 'Ancient Lake', value: 'Mentioned in ancient Hindu texts' },
            { label: 'Formation', value: 'Formed by sand deposits' },
            { label: 'Revival', value: '2000 mouth opening improved ecosystem' }
        ]
    },
    {
        id: 'lake-naivasha',
        name: 'Lake Naivasha',
        countries: [
            { name: 'Kenya', code: 'KE' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Volcanic/Tectonic (Rift Valley)',
        surfaceArea: 139,
        maxDepth: 8,
        avgDepth: 4,
        volume: 0.6,
        elevation: 1884,
        coordinates: [-0.75, 36.35],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Naivasha' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [36.25, -0.7], [36.42, -0.72], [36.45, -0.8],
                    [36.38, -0.85], [36.25, -0.82], [36.22, -0.75], [36.25, -0.7]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Malewa River', length: 130, coordinates: [[36.3, -0.55], [36.32, -0.62], [36.33, -0.7]] },
            { name: 'Gilgil River', length: 75, coordinates: [[36.35, -0.5], [36.36, -0.6], [36.37, -0.68]] }
        ],
        outflowRivers: [],
        basinArea: 3200,
        islands: [
            { name: 'Crescent Island', coordinates: [-0.78, 36.42], area: 1.8, description: 'Walking safari destination' }
        ],
        cities: [
            { name: 'Naivasha', coordinates: [-0.7167, 36.4333], country: 'Kenya', population: 180000 },
            { name: 'Nairobi', coordinates: [-1.2864, 36.8172], country: 'Kenya', population: 4400000 }
        ],
        biodiversity: [
            { label: 'Hippos', value: 'Large hippo population' },
            { label: 'Birds', value: '450+ species - important bird area' },
            { label: 'Fish Eagle', value: 'African Fish Eagle common' },
            { label: 'Fish', value: 'Tilapia, Black bass (introduced)' }
        ],
        economicImportance: [
            { label: 'Flower Industry', value: 'Major flower export area' },
            { label: 'Geothermal', value: 'Olkaria geothermal plant nearby' },
            { label: 'Tourism', value: 'Weekend destination from Nairobi' },
            { label: 'Horticulture', value: 'Vegetables for export' }
        ],
        environmentalIssues: [
            { label: 'Flower Farms', value: 'Water extraction, pollution' },
            { label: 'Falling Levels', value: 'Irrigation demands' },
            { label: 'Invasive Species', value: 'Water hyacinth, Louisiana crayfish' },
            { label: 'Hippo Conflict', value: 'Human-hippo incidents' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Only Freshwater', value: 'Only freshwater lake in Rift Valley' },
            { label: 'Masai', value: 'Name means "rough water" in Masai' },
            { label: 'Colonial', value: 'Happy Valley settler community' },
            { label: 'Hell\'s Gate', value: 'National Park nearby' }
        ]
    },
    {
        id: 'lake-kivu-small',
        name: 'Lake Bunyonyi',
        countries: [
            { name: 'Uganda', code: 'UG' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Volcanic',
        surfaceArea: 61,
        maxDepth: 900,
        avgDepth: 44,
        volume: 3,
        elevation: 1962,
        coordinates: [-1.28, 29.88],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Bunyonyi' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [29.82, -1.22], [29.92, -1.25], [29.95, -1.32],
                    [29.9, -1.38], [29.83, -1.35], [29.8, -1.28], [29.82, -1.22]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Multiple small streams', length: 10, coordinates: [[29.85, -1.2], [29.86, -1.23], [29.87, -1.25]] }
        ],
        outflowRivers: [
            { name: 'To Lake Mutanda', length: 8, coordinates: [[29.83, -1.38], [29.82, -1.4], [29.8, -1.42]] }
        ],
        basinArea: 170,
        islands: [
            { name: 'Akampene (Punishment Island)', coordinates: [-1.29, 29.87], area: 0.002, description: 'Unmarried pregnant girls were left here' },
            { name: 'Bwama Island', coordinates: [-1.28, 29.88], area: 0.15, description: 'School and church' },
            { name: 'Njuyeera (Sharp\'s Island)', coordinates: [-1.27, 29.89], area: 0.1 },
            { name: '29 islands total', coordinates: [-1.28, 29.88], area: 'Various' }
        ],
        cities: [
            { name: 'Kabale', coordinates: [-1.2494, 29.9892], country: 'Uganda', population: 50000 },
            { name: 'Kisoro', coordinates: [-1.2833, 29.6833], country: 'Uganda', population: 15000 }
        ],
        biodiversity: [
            { label: 'Name', value: 'Means "place of many little birds"' },
            { label: 'Birds', value: 'Weavers, herons, kingfishers' },
            { label: 'Fish', value: 'Limited native species' },
            { label: 'No Bilharzia', value: 'Safe swimming - no snails' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Growing eco-tourism' },
            { label: 'Gorilla Gateway', value: 'Near Bwindi gorilla tracking' },
            { label: 'Canoeing', value: 'Dugout canoe experiences' },
            { label: 'Terraced Agriculture', value: 'Hillside farming' }
        ],
        environmentalIssues: [
            { label: 'Deforestation', value: 'Hillside erosion' },
            { label: 'Population Pressure', value: 'Densely populated region' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Depth Mystery', value: 'Possibly 2nd deepest in Africa (unconfirmed)' },
            { label: 'Punishment Island', value: 'Girls banished for unwed pregnancy' },
            { label: 'Bakiga People', value: 'Traditional homeland' },
            { label: 'Switzerland of Africa', value: 'Nickname for terraced hills' }
        ]
    }
];
