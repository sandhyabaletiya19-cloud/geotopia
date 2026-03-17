// ============================================
// LAKES DATA - FILE 10 (Lakes 91-100)
// ============================================

const lakesData10 = [
    {
        id: 'lake-pukaki',
        name: 'Lake Pukaki',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 178,
        maxDepth: 98,
        avgDepth: 47,
        volume: 8.3,
        elevation: 518,
        coordinates: [-44.05, 170.15],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Pukaki' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [170.0, -43.85], [170.25, -43.9], [170.3, -44.1],
                    [170.15, -44.25], [170.0, -44.18], [169.95, -44.0], [170.0, -43.85]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Tasman River', length: 25, coordinates: [[170.15, -43.7], [170.18, -43.78], [170.2, -43.85]] },
            { name: 'Hooker River', length: 15, coordinates: [[170.1, -43.72], [170.12, -43.8], [170.15, -43.87]] }
        ],
        outflowRivers: [
            { name: 'Pukaki River', length: 10, coordinates: [[170.1, -44.25], [170.08, -44.3], [170.05, -44.35]] }
        ],
        basinArea: 1370,
        islands: [],
        cities: [
            { name: 'Twizel', coordinates: [-44.2575, 170.0983], country: 'New Zealand', population: 1200 },
            { name: 'Lake Pukaki Village', coordinates: [-44.2, 170.15], country: 'New Zealand', population: 50 }
        ],
        biodiversity: [
            { label: 'Glacial Flour', value: 'Rock particles create turquoise color' },
            { label: 'Salmon', value: 'Chinook salmon (introduced)' },
            { label: 'Trout', value: 'Brown and Rainbow Trout' },
            { label: 'Birds', value: 'Black stilt (rare), Paradise shelduck' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Mt Cook views - iconic NZ destination' },
            { label: 'Hydropower', value: 'Part of Waitaki hydro scheme' },
            { label: 'Salmon Farms', value: 'High Country Salmon' },
            { label: 'Film Location', value: 'The Hobbit, others filmed here' }
        ],
        environmentalIssues: [
            { label: 'Water Levels', value: 'Controlled for hydropower' },
            { label: 'Tourism Pressure', value: 'Managing visitor impacts' },
            { label: 'Generally Clean', value: 'Protected area' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Māori', value: 'Named for chief Pukaki' },
            { label: 'Mt Cook Views', value: 'Frames Aoraki/Mt Cook perfectly' },
            { label: 'Hydro Development', value: 'Lake raised 37m by dam 1979' },
            { label: 'Color', value: 'Famous milky turquoise color' }
        ]
    },
    {
        id: 'lake-annecy',
        name: 'Lake Annecy',
        countries: [
            { name: 'France', code: 'FR' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 27.6,
        maxDepth: 82,
        avgDepth: 41,
        volume: 1.1,
        elevation: 447,
        coordinates: [45.85, 6.17],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Annecy' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [6.13, 45.9], [6.2, 45.88], [6.22, 45.82],
                    [6.17, 45.78], [6.12, 45.8], [6.1, 45.87], [6.13, 45.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Eau Morte', length: 15, coordinates: [[6.25, 45.8], [6.22, 45.81], [6.2, 45.82]] },
            { name: 'Laudon', length: 10, coordinates: [[6.18, 45.78], [6.17, 45.8], [6.16, 45.82]] },
            { name: 'Ire', length: 8, coordinates: [[6.22, 45.85], [6.2, 45.86], [6.18, 45.87]] }
        ],
        outflowRivers: [
            { name: 'Thiou', length: 3.5, coordinates: [[6.13, 45.9], [6.12, 45.91], [6.11, 45.92]] }
        ],
        basinArea: 278,
        islands: [],
        cities: [
            { name: 'Annecy', coordinates: [45.8992, 6.1294], country: 'France', population: 130000 },
            { name: 'Talloires', coordinates: [45.8389, 6.2183], country: 'France', population: 1700 },
            { name: 'Menthon-Saint-Bernard', coordinates: [45.8564, 6.1983], country: 'France', population: 1900 },
            { name: 'Sevrier', coordinates: [45.8667, 6.1417], country: 'France', population: 4000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Féra (coregone), Pike, Perch, Char' },
            { label: 'Water Quality', value: 'Cleanest lake in Europe' },
            { label: 'Birds', value: 'Swans, coots, grebes' },
            { label: 'Protected', value: 'Strict environmental regulations since 1960s' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major French tourist destination' },
            { label: 'Watersports', value: 'Swimming, sailing, paddleboarding' },
            { label: 'Cycling', value: 'Circumnavigation bike path' },
            { label: 'Animation Festival', value: 'Annecy Animation Festival' }
        ],
        environmentalIssues: [
            { label: 'Success Story', value: 'Sewage treatment since 1960s restored lake' },
            { label: 'Model Lake', value: 'Example of environmental recovery' },
            { label: 'Microplastics', value: 'Recent concern' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Cleanest in Europe', value: 'Achieved through strict protection' },
            { label: 'Venice of Alps', value: 'Annecy old town with canals' },
            { label: 'Medieval', value: 'Château d\'Annecy overlooks lake' },
            { label: 'Rousseau', value: 'Jean-Jacques Rousseau lived here' }
        ]
    },
    {
        id: 'lake-thun',
        name: 'Lake Thun',
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 48,
        maxDepth: 217,
        avgDepth: 136,
        volume: 6.5,
        elevation: 558,
        coordinates: [46.72, 7.72],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Thun' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [7.6, 46.73], [7.78, 46.72], [7.85, 46.68],
                    [7.78, 46.65], [7.65, 46.67], [7.58, 46.7], [7.6, 46.73]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Kander', length: 46, coordinates: [[7.65, 46.62], [7.68, 46.65], [7.7, 46.67]] },
            { name: 'Aare (from Lake Brienz)', length: 8, coordinates: [[7.88, 46.7], [7.85, 46.69], [7.82, 46.68]] }
        ],
        outflowRivers: [
            { name: 'Aare', length: 288, coordinates: [[7.58, 46.75], [7.55, 46.77], [7.52, 46.8]] }
        ],
        basinArea: 2500,
        islands: [],
        cities: [
            { name: 'Thun', coordinates: [46.758, 7.6286], country: 'Switzerland', population: 44000 },
            { name: 'Spiez', coordinates: [46.6872, 7.6833], country: 'Switzerland', population: 13000 },
            { name: 'Interlaken', coordinates: [46.6863, 7.8632], country: 'Switzerland', population: 6000 },
            { name: 'Oberhofen', coordinates: [46.7333, 7.6667], country: 'Switzerland', population: 2500 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Whitefish, Perch, Pike, Arctic Char' },
            { label: 'Clear Water', value: 'Excellent visibility' },
            { label: 'Alpine Flora', value: 'Surrounding mountain meadows' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Gateway to Bernese Oberland' },
            { label: 'Paddle Steamers', value: 'Historic steamboat service' },
            { label: 'Military', value: 'Swiss Air Force base nearby' },
            { label: 'Castles', value: 'Oberhofen, Thun, Spiez castles' }
        ],
        environmentalIssues: [
            { label: 'Clean', value: 'Well-protected' },
            { label: 'Flood Management', value: 'Aare flow regulation' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Thun Castle', value: '12th century - museum today' },
            { label: 'Wocher Panorama', value: '1814 - oldest existing 360° painting' },
            { label: 'Tourism Pioneer', value: 'Early Alpine tourism destination' },
            { label: 'Name', value: 'From Celtic "dunum" (fortified place)' }
        ]
    },
    {
        id: 'lough-neagh',
        name: 'Lough Neagh',
        countries: [
            { name: 'United Kingdom', code: 'GB' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 392,
        maxDepth: 25,
        avgDepth: 9,
        volume: 3.5,
        elevation: 15,
        coordinates: [54.62, -6.4],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lough Neagh' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-6.6, 54.72], [-6.25, 54.7], [-6.15, 54.55],
                    [-6.3, 54.45], [-6.55, 54.5], [-6.65, 54.62], [-6.6, 54.72]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Upper Bann', length: 64, coordinates: [[-6.35, 54.4], [-6.38, 54.48], [-6.4, 54.52]] },
            { name: 'Blackwater', length: 90, coordinates: [[-6.8, 54.45], [-6.7, 54.5], [-6.6, 54.55]] },
            { name: 'Main', length: 45, coordinates: [[-6.15, 54.8], [-6.2, 54.72], [-6.25, 54.68]] },
            { name: 'Six Mile Water', length: 35, coordinates: [[-6.1, 54.68], [-6.18, 54.65], [-6.22, 54.62]] },
            { name: 'Ballinderry', length: 40, coordinates: [[-6.7, 54.58], [-6.6, 54.58], [-6.52, 54.58]] }
        ],
        outflowRivers: [
            { name: 'Lower Bann', length: 58, coordinates: [[-6.45, 54.73], [-6.5, 54.8], [-6.55, 54.9]] }
        ],
        basinArea: 4500,
        islands: [
            { name: 'Coney Island', coordinates: [54.5, -6.45], area: 0.35, description: 'Largest island' },
            { name: 'Ram\'s Island', coordinates: [54.55, -6.28], area: 0.04, description: 'Medieval ruins' }
        ],
        cities: [
            { name: 'Belfast', coordinates: [54.5973, -5.9301], country: 'UK', population: 343000 },
            { name: 'Lisburn', coordinates: [54.5, -6.0333], country: 'UK', population: 45000 },
            { name: 'Antrim', coordinates: [54.72, -6.2], country: 'UK', population: 24000 },
            { name: 'Lurgan', coordinates: [54.4667, -6.3333], country: 'UK', population: 26000 },
            { name: 'Cookstown', coordinates: [54.6417, -6.745], country: 'UK', population: 12000 }
        ],
        biodiversity: [
            { label: 'Eels', value: 'Largest wild eel fishery in Europe' },
            { label: 'Pollan', value: 'Endemic freshwater herring' },
            { label: 'Birds', value: '100,000+ waterfowl winter here' },
            { label: 'Ramsar Site', value: 'Wetland of International Importance' }
        ],
        economicImportance: [
            { label: 'Eel Fishing', value: 'Traditional eel fishery' },
            { label: 'Sand Extraction', value: 'Historical sand dredging' },
            { label: 'Water Supply', value: '40% of Northern Ireland\'s water' },
            { label: 'Recreation', value: 'Boating, fishing, birdwatching' }
        ],
        environmentalIssues: [
            { label: 'Blue-Green Algae', value: '2023 severe outbreak' },
            { label: 'Agricultural Runoff', value: 'Nutrient pollution' },
            { label: 'Eutrophication', value: 'Long-term problem' },
            { label: 'Water Quality', value: 'Declining in recent years' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest in UK & Ireland', value: 'By surface area' },
            { label: 'Finn McCool', value: 'Legend says giant created it' },
            { label: 'Saint Patrick', value: 'Supposedly fished here' },
            { label: 'Plantation Era', value: 'English and Scottish settlement' }
        ]
    },
    {
        id: 'lake-brienz',
        name: 'Lake Brienz',
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 30,
        maxDepth: 260,
        avgDepth: 173,
        volume: 5.2,
        elevation: 564,
        coordinates: [46.73, 7.97],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Brienz' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [7.85, 46.74], [8.05, 46.73], [8.12, 46.7],
                    [8.05, 46.68], [7.88, 46.7], [7.83, 46.72], [7.85, 46.74]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Aare', length: 80, coordinates: [[8.2, 46.72], [8.12, 46.72], [8.08, 46.71]] },
            { name: 'Lütschine', length: 42, coordinates: [[7.87, 46.68], [7.88, 46.7], [7.89, 46.72]] }
        ],
        outflowRivers: [
            { name: 'Aare', length: 288, coordinates: [[7.85, 46.72], [7.83, 46.71], [7.8, 46.7]] }
        ],
        basinArea: 1129,
        islands: [],
        cities: [
            { name: 'Brienz', coordinates: [46.755, 8.0375], country: 'Switzerland', population: 3200 },
            { name: 'Interlaken', coordinates: [46.6863, 7.8632], country: 'Switzerland', population: 6000 },
            { name: 'Iseltwald', coordinates: [46.7167, 7.9667], country: 'Switzerland', population: 450 },
            { name: 'Oberried', coordinates: [46.7333, 7.9667], country: 'Switzerland', population: 500 }
        ],
        biodiversity: [
            { label: 'Turquoise Water', value: 'Glacial flour creates stunning color' },
            { label: 'Fish Species', value: 'Whitefish, Arctic Char, Pike' },
            { label: 'Cold Water', value: 'Glacial melt keeps water very cold' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Jungfrau region destination' },
            { label: 'Woodcarving', value: 'Brienz woodcarving tradition' },
            { label: 'Paddle Steamers', value: 'Historic boat service' },
            { label: 'Ballenberg', value: 'Open-air museum nearby' }
        ],
        environmentalIssues: [
            { label: 'Very Clean', value: 'Pristine water quality' },
            { label: 'Sediment', value: 'Glacial sediment accumulation' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Giessbach Falls', value: 'Famous waterfall with historic hotel' },
            { label: 'Brienz Rothorn', value: 'Steam railway since 1892' },
            { label: 'Crash Landing', value: 'K-Drama filming location 2020' },
            { label: 'Wood Carving', value: 'Traditional craft since 1800s' }
        ]
    },
    {
        id: 'lake-matheson',
        name: 'Lake Matheson',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Glacial (Kettle Lake)',
        surfaceArea: 0.58,
        maxDepth: 5,
        avgDepth: 2,
        volume: 0.001,
        elevation: 100,
        coordinates: [-43.44, 169.36],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Matheson' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [169.355, -43.435], [169.368, -43.438], [169.37, -43.445],
                    [169.362, -43.45], [169.352, -43.445], [169.35, -43.44], [169.355, -43.435]
                ]]
            }
        },
        inflowRivers: [],
        outflowRivers: [
            { name: 'Small outlet stream', length: 1, coordinates: [[169.36, -43.45], [169.358, -43.455], [169.355, -43.46]] }
        ],
        basinArea: 3,
        islands: [],
        cities: [
            { name: 'Fox Glacier Village', coordinates: [-43.4644, 170.0175], country: 'New Zealand', population: 300 },
            { name: 'Franz Josef', coordinates: [-43.3833, 170.1833], country: 'New Zealand', population: 500 }
        ],
        biodiversity: [
            { label: 'Dark Water', value: 'Tannin-stained from decomposing vegetation' },
            { label: 'Eels', value: 'Longfin eels present' },
            { label: 'Birds', value: 'Native bush birds in surrounding forest' },
            { label: 'Podocarp Forest', value: 'Ancient rainforest surrounds lake' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'One of most photographed spots in NZ' },
            { label: 'Reflections', value: 'Mirror reflections of Mt Cook/Tasman' },
            { label: 'Dawn Shots', value: 'Best reflections at dawn, calm mornings' }
        ],
        environmentalIssues: [
            { label: 'Protected', value: 'Westland National Park' },
            { label: 'Climate Change', value: 'Fox Glacier retreating rapidly' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Formation', value: 'Formed 14,000 years ago by Fox Glacier' },
            { label: 'Name', value: 'Named for Murdo Matheson, early settler' },
            { label: 'Reflection Views', value: 'Called "Mirror Lake"' },
            { label: 'Kettle Lake', value: 'Formed by buried glacier ice melting' }
        ]
    },
    {
        id: 'peyto-lake',
        name: 'Peyto Lake',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 0.86,
        maxDepth: 35,
        avgDepth: 12,
        volume: 0.01,
        elevation: 1860,
        coordinates: [51.72, -116.52],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Peyto Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-116.55, 51.74], [-116.5, 51.73], [-116.48, 51.71],
                    [-116.52, 51.68], [-116.56, 51.7], [-116.57, 51.72], [-116.55, 51.74]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Peyto Creek', length: 5, coordinates: [[-116.55, 51.76], [-116.54, 51.75], [-116.53, 51.74]] }
        ],
        outflowRivers: [
            { name: 'Peyto Creek (outflow)', length: 10, coordinates: [[-116.52, 51.68], [-116.5, 51.65], [-116.48, 51.6]] }
        ],
        basinArea: 42,
        islands: [],
        cities: [
            { name: 'Lake Louise', coordinates: [51.4254, -116.1773], country: 'Canada', population: 1500 },
            { name: 'Banff', coordinates: [51.1784, -115.5708], country: 'Canada', population: 8000 }
        ],
        biodiversity: [
            { label: 'Glacial Flour', value: 'Bright turquoise from rock flour' },
            { label: 'Wildlife', value: 'Grizzly bears, mountain goats' },
            { label: 'Alpine Meadows', value: 'Summer wildflowers' },
            { label: 'Cold', value: 'Too cold for most aquatic life' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Icefields Parkway highlight' },
            { label: 'Photography', value: 'One of most photographed lakes in Canada' },
            { label: 'Bow Summit', value: 'Highest point on Icefields Parkway' }
        ],
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Peyto Glacier rapidly shrinking' },
            { label: 'Climate Change', value: 'Changing water flow patterns' },
            { label: 'Overtourism', value: 'Viewpoint crowding managed' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Named For', value: 'Bill Peyto - early guide and warden' },
            { label: 'Wolf Head', value: 'Lake shaped like wolf head' },
            { label: 'Banff National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Icefields Parkway', value: 'One of world\'s most scenic drives' }
        ]
    },
    {
        id: 'moraine-lake',
        name: 'Moraine Lake',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 0.5,
        maxDepth: 14,
        avgDepth: 8,
        volume: 0.004,
        elevation: 1885,
        coordinates: [51.325, -116.185],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Moraine Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-116.195, 51.33], [-116.175, 51.328], [-116.17, 51.32],
                    [-116.18, 51.315], [-116.195, 51.318], [-116.2, 51.325], [-116.195, 51.33]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Glacial melt streams', length: 3, coordinates: [[-116.17, 51.33], [-116.175, 51.328], [-116.18, 51.325]] }
        ],
        outflowRivers: [
            { name: 'Moraine Creek', length: 8, coordinates: [[-116.2, 51.32], [-116.22, 51.31], [-116.25, 51.3]] }
        ],
        basinArea: 14,
        islands: [],
        cities: [
            { name: 'Lake Louise', coordinates: [51.4254, -116.1773], country: 'Canada', population: 1500 },
            { name: 'Banff', coordinates: [51.1784, -115.5708], country: 'Canada', population: 8000 }
        ],
        biodiversity: [
            { label: 'Turquoise Color', value: 'Intense blue from glacial flour' },
            { label: 'Wildlife', value: 'Grizzly bears frequent area' },
            { label: 'Ten Peaks', value: 'Valley of Ten Peaks backdrop' },
            { label: 'Alpine', value: 'Treeline environment' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Top Canadian destination' },
            { label: 'Old $20 Bill', value: 'Featured on 1969-1979 Canadian $20' },
            { label: 'Lodge', value: 'Moraine Lake Lodge luxury accommodation' },
            { label: 'Hiking', value: 'Larch Valley, Sentinel Pass trails' }
        ],
        environmentalIssues: [
            { label: 'Overtourism', value: 'Reservation system implemented' },
            { label: 'Bear Safety', value: 'Trail restrictions for grizzly activity' },
            { label: 'Climate Change', value: 'Glacier feeding lake retreating' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Walter Wilcox', value: 'Discovered 1899' },
            { label: 'Name Error', value: 'Not actually a moraine-dammed lake' },
            { label: 'Twenty Dollar View', value: 'Famous rock pile viewpoint' },
            { label: 'Ten Peaks', value: 'Named Wenkchemna (Stoney for "ten")' }
        ]
    },
    {
        id: 'lake-louise',
        name: 'Lake Louise',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 0.82,
        maxDepth: 70,
        avgDepth: 35,
        volume: 0.029,
        elevation: 1750,
        coordinates: [51.415, -116.22],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Louise' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-116.24, 51.42], [-116.2, 51.425], [-116.18, 51.415],
                    [-116.19, 51.405], [-116.22, 51.4], [-116.25, 51.41], [-116.24, 51.42]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Victoria Glacier melt', length: 2, coordinates: [[-116.18, 51.42], [-116.19, 51.418], [-116.195, 51.415]] }
        ],
        outflowRivers: [
            { name: 'Louise Creek', length: 5, coordinates: [[-116.24, 51.41], [-116.26, 51.4], [-116.28, 51.39]] }
        ],
        basinArea: 20,
        islands: [],
        cities: [
            { name: 'Lake Louise Village', coordinates: [51.4254, -116.1773], country: 'Canada', population: 1500 },
            { name: 'Banff', coordinates: [51.1784, -115.5708], country: 'Canada', population: 8000 },
            { name: 'Calgary', coordinates: [51.0447, -114.0719], country: 'Canada', population: 1300000 }
        ],
        biodiversity: [
            { label: 'Glacial Flour', value: 'Emerald green color from rock particles' },
            { label: 'Wildlife', value: 'Grizzly, black bear, elk, moose' },
            { label: 'Victoria Glacier', value: 'Hanging glacier at lake head' },
            { label: 'Seasonal', value: 'Frozen November to June' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Most visited spot in Banff National Park' },
            { label: 'Fairmont Hotel', value: 'Château Lake Louise - iconic hotel' },
            { label: 'Skiing', value: 'Lake Louise Ski Resort' },
            { label: 'Wedding Destination', value: 'Popular venue' }
        ],
        environmentalIssues: [
            { label: 'Overtourism', value: 'Millions of visitors annually' },
            { label: 'Shuttle Required', value: 'Parking limitations' },
            { label: 'Glacier Retreat', value: 'Victoria Glacier shrinking' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Named For', value: 'Princess Louise Caroline Alberta' },
            { label: 'CPR Development', value: 'Canadian Pacific Railway built chalet 1890' },
            { label: 'Mountaineering', value: 'Center of Canadian mountaineering' },
            { label: 'Jewel of Rockies', value: 'Common nickname' }
        ]
    },
    {
        id: 'pangong-lake',
        name: 'Pangong Tso',
        countries: [
            { name: 'India', code: 'IN' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Endorheic/Tectonic',
        surfaceArea: 700,
        maxDepth: 100,
        avgDepth: 60,
        volume: 42,
        elevation: 4350,
        coordinates: [33.75, 78.65],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Pangong Tso' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [78.2, 33.85], [78.8, 33.82], [79.4, 33.75],
                    [79.5, 33.68], [79.0, 33.65], [78.4, 33.7],
                    [78.15, 33.78], [78.2, 33.85]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Small streams from Changchenmo Range', length: 30, coordinates: [[78.3, 33.95], [78.35, 33.88], [78.4, 33.82]] },
            { name: 'Glacial melt', length: 20, coordinates: [[79.0, 33.85], [78.95, 33.8], [78.9, 33.75]] }
        ],
        outflowRivers: [],
        basinArea: 28000,
        islands: [
            { name: 'Submerged sandbars', coordinates: [33.75, 78.7], area: 'Various' }
        ],
        cities: [
            { name: 'Leh', coordinates: [34.1526, 77.5771], country: 'India', population: 35000 },
            { name: 'Spangmik', coordinates: [33.82, 78.55], country: 'India', population: 200 },
            { name: 'Merak', coordinates: [33.85, 78.65], country: 'India', population: 150 }
        ],
        biodiversity: [
            { label: 'Bar-headed Goose', value: 'Breeding ground' },
            { label: 'Brahminy Duck', value: 'Common species' },
            { label: 'Crustaceans', value: 'Only aquatic life (too saline for fish)' },
            { label: 'Changing Colors', value: 'Lake changes color through day' },
            { label: 'Marmots', value: 'Himalayan marmots on shores' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major Ladakh attraction' },
            { label: 'Film Location', value: '3 Idiots (Bollywood) filmed here' },
            { label: 'Photography', value: 'Stunning landscape destination' },
            { label: 'Military', value: 'Strategic border area' }
        ],
        environmentalIssues: [
            { label: 'Climate Change', value: 'Glacial melt changing water levels' },
            { label: 'Tourism Impact', value: 'Fragile high-altitude ecosystem' },
            { label: 'Military Activity', value: 'Border tensions affect area' }
        ],
        waterDisputes: [
            { label: 'India-China Border', value: 'Lake divided by Line of Actual Control' },
            { label: '2020 Clash', value: 'Galwan Valley tensions nearby' },
            { label: 'Disputed Territory', value: 'Part of broader Ladakh dispute' }
        ],
        historicalImportance: [
            { label: 'Name', value: 'Tibetan "Pangong Tso" = "High Grassland Lake"' },
            { label: 'Length', value: '134 km long - extends into Tibet' },
            { label: 'Highest', value: 'One of highest saltwater lakes in world' },
            { label: 'Silk Road', value: 'Near ancient trade routes' },
            { label: 'Frozen Winter', value: 'Completely freezes despite salinity' }
        ]
    }
];
