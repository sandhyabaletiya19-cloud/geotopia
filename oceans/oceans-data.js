/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - COMPLETE DATA FILE
   All 5 Oceans + 30+ Major Seas
   Part 1 of 3 - Pacific Ocean & Atlantic Ocean
   ═══════════════════════════════════════════════════════════ */

const oceansData = [
    // ═══════════════════════════════════════════════════════
    // PACIFIC OCEAN - The Largest Ocean
    // ═══════════════════════════════════════════════════════
    {
        id: 'pacific-ocean',
        name: 'Pacific Ocean',
        area: 168723000,
        percentEarthSurface: 33,
        percentEarthWater: 46,
        volume: '710 million km³',
        avgDepth: 4280,
        maxDepth: 10935,
        tempRange: '-2°C to 30°C',
        
        deepestPoint: {
            name: 'Challenger Deep, Mariana Trench',
            depth: 10935,
            coordinates: [11.3493, 142.1996],
            discoveredYear: 1875,
            firstDescent: 1960
        },
        
        coordinates: [0, -160],
        defaultZoom: 2,
        
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        surroundingContinents: ['Asia', 'Australia', 'North America', 'South America', 'Antarctica'],
        
        majorSeas: [
            { name: 'South China Sea', area: 3500000, coordinates: [12, 113], maxDepth: 5560 },
            { name: 'Philippine Sea', area: 5695000, coordinates: [20, 135], maxDepth: 10540 },
            { name: 'Coral Sea', area: 4791000, coordinates: [-18, 152], maxDepth: 9140 },
            { name: 'Sea of Japan', area: 978000, coordinates: [40, 135], maxDepth: 3742 },
            { name: 'Sea of Okhotsk', area: 1583000, coordinates: [55, 150], maxDepth: 3372 },
            { name: 'Bering Sea', area: 2292000, coordinates: [58, -178], maxDepth: 4773 },
            { name: 'Tasman Sea', area: 2300000, coordinates: [-38, 165], maxDepth: 5200 },
            { name: 'East China Sea', area: 1249000, coordinates: [30, 126], maxDepth: 2719 },
            { name: 'Yellow Sea', area: 380000, coordinates: [35, 123], maxDepth: 152 },
            { name: 'Celebes Sea', area: 280000, coordinates: [3, 122], maxDepth: 6220 },
            { name: 'Sulu Sea', area: 260000, coordinates: [8, 120], maxDepth: 5576 },
            { name: 'Solomon Sea', area: 720000, coordinates: [-8, 153], maxDepth: 9103 }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'Kuroshio Current', 
                    path: [[18, 122], [25, 130], [32, 138], [38, 145], [42, 155]],
                    description: 'The "Black Stream" - warm western boundary current flowing north along Japan',
                    speed: '1-3 m/s',
                    type: 'warm'
                },
                { 
                    name: 'North Equatorial Current', 
                    path: [[12, -140], [12, -160], [13, -180], [14, 160], [15, 135]],
                    description: 'Flows westward along the equator driven by trade winds',
                    speed: '0.3-0.5 m/s',
                    type: 'warm'
                },
                { 
                    name: 'East Australian Current', 
                    path: [[-15, 150], [-22, 154], [-30, 155], [-38, 152]],
                    description: 'Warm current flowing south - made famous by Finding Nemo!',
                    speed: '0.5-1 m/s',
                    type: 'warm'
                },
                { 
                    name: 'South Equatorial Current', 
                    path: [[-5, -90], [-5, -120], [-5, -150], [-5, -175]],
                    description: 'Flows westward in the southern hemisphere',
                    speed: '0.5 m/s',
                    type: 'warm'
                },
                {
                    name: 'Equatorial Counter Current',
                    path: [[5, 140], [5, 170], [5, -170], [5, -140]],
                    description: 'Flows eastward between the two equatorial currents',
                    speed: '0.3 m/s',
                    type: 'warm'
                }
            ],
            cold: [
                { 
                    name: 'California Current', 
                    path: [[48, -126], [40, -125], [32, -120], [24, -115]],
                    description: 'Cold eastern boundary current flowing south along North American coast',
                    speed: '0.25 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Humboldt (Peru) Current', 
                    path: [[-45, -75], [-35, -74], [-25, -76], [-15, -78], [-5, -82]],
                    description: 'Cold nutrient-rich current - world\'s most productive fishing grounds',
                    speed: '0.1-0.3 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Oyashio Current', 
                    path: [[55, 160], [50, 155], [45, 150], [40, 145]],
                    description: 'Cold northwestern current bringing nutrient-rich water',
                    speed: '0.3-0.5 m/s',
                    type: 'cold'
                },
                { 
                    name: 'West Wind Drift', 
                    path: [[-55, 180], [-55, -150], [-55, -120], [-55, -90]],
                    description: 'Part of Antarctic Circumpolar Current',
                    speed: '0.1 m/s',
                    type: 'cold'
                }
            ],
            gyres: [
                { name: 'North Pacific Gyre', center: [30, -150], radius: 2000, direction: 'clockwise' },
                { name: 'South Pacific Gyre', center: [-30, -130], radius: 2000, direction: 'counterclockwise' }
            ]
        },
        
        tectonicFeatures: {
            ridges: [
                { 
                    name: 'East Pacific Rise', 
                    coordinates: [[-55, -115], [-40, -112], [-20, -113], [0, -104], [20, -108]],
                    description: 'One of the fastest spreading ridges on Earth (up to 15 cm/year)',
                    spreadingRate: '15 cm/year'
                },
                {
                    name: 'Pacific-Antarctic Ridge',
                    coordinates: [[-65, -150], [-60, -140], [-55, -125]],
                    description: 'Separates Pacific Plate from Antarctic Plate'
                }
            ],
            trenches: [
                { name: 'Mariana Trench', depth: 10935, coordinates: [11.35, 142.2], length: 2550 },
                { name: 'Tonga Trench', depth: 10882, coordinates: [-22.2, -175.2], length: 2500 },
                { name: 'Philippine Trench', depth: 10540, coordinates: [10, 127], length: 1320 },
                { name: 'Kermadec Trench', depth: 10047, coordinates: [-30, -176.5], length: 1500 },
                { name: 'Japan Trench', depth: 9000, coordinates: [37, 144], length: 800 },
                { name: 'Peru-Chile Trench', depth: 8065, coordinates: [-23, -71], length: 5900 },
                { name: 'Aleutian Trench', depth: 7679, coordinates: [51, -175], length: 3400 }
            ],
            plates: ['Pacific Plate', 'Philippine Sea Plate', 'Nazca Plate', 'Cocos Plate', 'Juan de Fuca Plate', 'North American Plate', 'Australian Plate', 'Antarctic Plate']
        },
        
        islands: [
            { name: 'Hawaii', coordinates: [19.82, -155.47], country: 'USA' },
            { name: 'Fiji', coordinates: [-17.71, 178.06], country: 'Fiji' },
            { name: 'Tahiti', coordinates: [-17.67, -149.41], country: 'French Polynesia' },
            { name: 'Galápagos', coordinates: [-0.83, -91.13], country: 'Ecuador' },
            { name: 'Easter Island', coordinates: [-27.11, -109.35], country: 'Chile' },
            { name: 'Guam', coordinates: [13.44, 144.79], country: 'USA' },
            { name: 'New Zealand', coordinates: [-40.9, 174.88], country: 'New Zealand' },
            { name: 'Papua New Guinea', coordinates: [-6.31, 143.95], country: 'Papua New Guinea' },
            { name: 'Samoa', coordinates: [-13.83, -171.76], country: 'Samoa' },
            { name: 'Tonga', coordinates: [-21.18, -175.20], country: 'Tonga' },
            { name: 'Palau', coordinates: [7.51, 134.58], country: 'Palau' },
            { name: 'Marshall Islands', coordinates: [7.13, 171.18], country: 'Marshall Islands' }
        ],
        
        cities: [
            { name: 'Tokyo', coordinates: [35.68, 139.69], country: 'Japan', population: 14000000 },
            { name: 'Los Angeles', coordinates: [34.05, -118.24], country: 'USA', population: 3900000 },
            { name: 'Sydney', coordinates: [-33.87, 151.21], country: 'Australia', population: 5300000 },
            { name: 'Lima', coordinates: [-12.05, -77.04], country: 'Peru', population: 10000000 },
            { name: 'Shanghai', coordinates: [31.23, 121.47], country: 'China', population: 26000000 },
            { name: 'Hong Kong', coordinates: [22.32, 114.17], country: 'China', population: 7500000 },
            { name: 'Singapore', coordinates: [1.35, 103.82], country: 'Singapore', population: 5600000 },
            { name: 'Manila', coordinates: [14.60, 120.98], country: 'Philippines', population: 13500000 },
            { name: 'San Francisco', coordinates: [37.77, -122.42], country: 'USA', population: 870000 },
            { name: 'Auckland', coordinates: [-36.85, 174.76], country: 'New Zealand', population: 1660000 }
        ],
        
        shippingRoutes: [
            {
                name: 'Trans-Pacific Route',
                path: [[35, 140], [40, 180], [40, -160], [35, -125]],
                description: 'Major shipping lane between Asia and North America'
            },
            {
                name: 'Asia-Australia Route',
                path: [[1, 104], [-10, 120], [-25, 150], [-34, 151]],
                description: 'Connects Southeast Asia to Australia'
            }
        ],
        
        marineLife: {
            totalSpecies: 'Estimated millions (most unexplored)',
            keySpecies: ['Blue Whale', 'Great White Shark', 'Pacific Salmon', 'Manta Ray', 'Sea Otter', 'Giant Pacific Octopus', 'Orca', 'Humpback Whale', 'Pacific Sea Turtle'],
            coralRegions: ['Great Barrier Reef', 'Coral Triangle', 'Hawaiian Reefs', 'Fiji Reefs', 'French Polynesia Reefs'],
            endangeredSpecies: ['Hawksbill Turtle', 'Vaquita (most endangered)', 'Blue Whale', 'Leatherback Sea Turtle', 'Hawaiian Monk Seal']
        },
        
        climateRole: [
            { label: 'ENSO', value: 'El Niño and La Niña originate here, affecting global weather patterns' },
            { label: 'Heat Transport', value: 'Distributes tropical heat to polar regions via currents' },
            { label: 'Typhoons', value: 'Most tropical cyclones on Earth form in the western Pacific' },
            { label: 'Monsoon', value: 'Pacific warm pool drives Asian monsoon system' },
            { label: 'Carbon Sink', value: 'Absorbs significant amounts of atmospheric CO2' }
        ],
        
        economicImportance: [
            { label: 'Shipping', value: '60% of global maritime trade crosses the Pacific' },
            { label: 'Fishing', value: 'Largest fishing grounds - provides 70% of global fish catch' },
            { label: 'Oil & Gas', value: 'Major deposits in Southeast Asia, Alaska, and South America' },
            { label: 'Undersea Cables', value: 'Trans-Pacific cables connect Americas to Asia' },
            { label: 'Tourism', value: 'Pacific Islands, Hawaii, Australia - billions in revenue' },
            { label: 'Minerals', value: 'Polymetallic nodules on seafloor contain valuable metals' }
        ],
        
        environmentalIssues: [
            { label: 'Great Pacific Garbage Patch', value: '1.6 million km² of floating plastic debris' },
            { label: 'Ocean Warming', value: 'Coral bleaching accelerating, 50% of Great Barrier Reef damaged' },
            { label: 'Overfishing', value: 'Pacific Bluefin tuna population down 96%' },
            { label: 'Acidification', value: 'pH dropping, affecting shellfish and coral growth' },
            { label: 'Nuclear Legacy', value: 'Bikini Atoll and Enewetak testing sites still contaminated' },
            { label: 'Dead Zones', value: 'Oxygen-depleted areas expanding due to pollution' }
        ],
        
        exploration: [
            { label: 'First Crossing', value: 'Ferdinand Magellan (1520-1521) - named it "Pacific" meaning peaceful' },
            { label: 'Scientific Survey', value: 'HMS Challenger expedition (1872-1876) discovered Mariana Trench' },
            { label: 'James Cook', value: 'Extensive Pacific mapping (1768-1779)' },
            { label: 'First Trench Dive', value: 'Jacques Piccard & Don Walsh (1960) - Trieste bathyscaphe' },
            { label: 'Solo Dive', value: 'James Cameron (2012) - Deepsea Challenger' },
            { label: 'Victor Vescovo', value: '2019 - Deepest solo dive to 10,928m' }
        ],
        
        geopolitics: [
            { label: 'AUKUS', value: 'Australia-UK-US Pacific security alliance' },
            { label: 'South China Sea', value: 'Territorial disputes over islands and shipping lanes' },
            { label: 'Pacific Islands', value: 'China-US competition for influence' },
            { label: 'RIMPAC', value: 'World\'s largest international naval exercise' },
            { label: 'Exclusive Economic Zones', value: 'Pacific nations control vast EEZs' },
            { label: 'Nuclear-Free Zone', value: 'South Pacific Nuclear Free Zone Treaty' }
        ],
        
        funFacts: [
            'Larger than all land on Earth combined - you could fit all continents inside it!',
            'Contains more than half of all free water on Earth (50.1%)',
            'Named "Pacific" (peaceful) by Ferdinand Magellan who had calm weather during his crossing',
            'Has more islands than all other oceans combined (20,000-30,000 islands)',
            'Shrinking 2-3 cm per year as plates subduct under surrounding continents',
            'The Pacific Ring of Fire contains 75% of Earth\'s volcanoes',
            'Home to the only marine iguanas in the world (Galápagos)',
            'The Mariana Trench could fit Mount Everest with 2km to spare above it'
        ],
        
        currentFlowWaypoints: [
            { 
                name: 'Equatorial Start', 
                coordinates: [5, 170], 
                description: 'North Equatorial Current begins its westward journey',
                type: 'warm',
                direction: 'Westward',
                temp: '28°C',
                speed: '0.5 m/s'
            },
            { 
                name: 'Philippine Sea', 
                coordinates: [15, 130], 
                description: 'Current reaches the western Pacific near the Philippines',
                type: 'warm',
                direction: 'Northwest',
                temp: '27°C',
                speed: '0.4 m/s'
            },
            { 
                name: 'Kuroshio Current', 
                coordinates: [30, 135], 
                description: 'Warm current flows north along Japan coast - the "Black Stream"',
                type: 'warm',
                direction: 'Northward',
                temp: '24°C',
                speed: '1.5 m/s'
            },
            { 
                name: 'North Pacific Current', 
                coordinates: [42, 180], 
                description: 'Current turns east crossing the mid-Pacific',
                type: 'cold',
                direction: 'Eastward',
                temp: '15°C',
                speed: '0.3 m/s'
            },
            { 
                name: 'California Coast', 
                coordinates: [38, -125], 
                description: 'California Current brings cold water south along USA coast',
                type: 'cold',
                direction: 'Southward',
                temp: '12°C',
                speed: '0.25 m/s'
            },
            { 
                name: 'Gyre Complete', 
                coordinates: [15, -140], 
                description: 'North Pacific Gyre circulation complete - a 10,000 km journey!',
                type: 'warm',
                direction: 'Returning West',
                temp: '26°C',
                speed: '0.4 m/s'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ATLANTIC OCEAN - The Second Largest Ocean
    // ═══════════════════════════════════════════════════════
    {
        id: 'atlantic-ocean',
        name: 'Atlantic Ocean',
        area: 85133000,
        percentEarthSurface: 17,
        percentEarthWater: 23,
        volume: '310 million km³',
        avgDepth: 3646,
        maxDepth: 8376,
        tempRange: '-2°C to 30°C',
        
        deepestPoint: {
            name: 'Milwaukee Deep, Puerto Rico Trench',
            depth: 8376,
            coordinates: [19.7, -67.4],
            discoveredYear: 1939
        },
        
        coordinates: [0, -30],
        defaultZoom: 2,
        
        image: 'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        
        surroundingContinents: ['North America', 'South America', 'Europe', 'Africa', 'Antarctica'],
        
        majorSeas: [
            { name: 'Caribbean Sea', area: 2754000, coordinates: [15, -75], maxDepth: 7686 },
            { name: 'Mediterranean Sea', area: 2500000, coordinates: [35, 18], maxDepth: 5267 },
            { name: 'Gulf of Mexico', area: 1550000, coordinates: [25, -90], maxDepth: 4384 },
            { name: 'North Sea', area: 570000, coordinates: [56, 3], maxDepth: 700 },
            { name: 'Baltic Sea', area: 377000, coordinates: [58, 20], maxDepth: 459 },
            { name: 'Black Sea', area: 436000, coordinates: [43, 34], maxDepth: 2212 },
            { name: 'Norwegian Sea', area: 1383000, coordinates: [67, 0], maxDepth: 3970 },
            { name: 'Sargasso Sea', area: 3000000, coordinates: [28, -66], maxDepth: 7000 },
            { name: 'Labrador Sea', area: 841000, coordinates: [58, -55], maxDepth: 4316 },
            { name: 'Irish Sea', area: 100000, coordinates: [53.5, -5], maxDepth: 175 },
            { name: 'Bay of Biscay', area: 223000, coordinates: [45, -5], maxDepth: 4735 },
            { name: 'Scotia Sea', area: 900000, coordinates: [-57, -40], maxDepth: 6022 }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'Gulf Stream', 
                    path: [[25, -80], [30, -78], [35, -72], [40, -60], [45, -45], [50, -30]],
                    description: 'One of the strongest ocean currents - carries warm water to Europe',
                    speed: '2-2.5 m/s',
                    type: 'warm'
                },
                { 
                    name: 'North Atlantic Drift', 
                    path: [[50, -30], [52, -20], [55, -10], [58, 0], [60, 5]],
                    description: 'Continuation of Gulf Stream - keeps Europe warm',
                    speed: '0.5 m/s',
                    type: 'warm'
                },
                { 
                    name: 'Brazil Current', 
                    path: [[-5, -35], [-15, -38], [-25, -42], [-35, -50]],
                    description: 'Warm western boundary current along South America',
                    speed: '0.3-0.5 m/s',
                    type: 'warm'
                },
                { 
                    name: 'North Equatorial Current', 
                    path: [[8, -20], [10, -35], [12, -50], [15, -60]],
                    description: 'Flows westward toward Caribbean',
                    speed: '0.5 m/s',
                    type: 'warm'
                },
                {
                    name: 'South Equatorial Current',
                    path: [[0, -5], [-2, -20], [-5, -30]],
                    description: 'Flows westward in southern hemisphere',
                    speed: '0.5 m/s',
                    type: 'warm'
                }
            ],
            cold: [
                { 
                    name: 'Canary Current', 
                    path: [[35, -10], [30, -12], [25, -15], [20, -18]],
                    description: 'Cold eastern boundary current along Africa',
                    speed: '0.2 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Benguela Current', 
                    path: [[-35, 17], [-30, 15], [-25, 13], [-18, 12]],
                    description: 'Cold current along southwestern Africa - rich fishing grounds',
                    speed: '0.2-0.3 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Labrador Current', 
                    path: [[65, -60], [55, -55], [45, -50], [40, -50]],
                    description: 'Brings cold Arctic water and icebergs south',
                    speed: '0.3-0.5 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Falkland Current', 
                    path: [[-55, -65], [-50, -60], [-45, -58], [-40, -55]],
                    description: 'Cold northward flow along South America',
                    speed: '0.3 m/s',
                    type: 'cold'
                }
            ],
            gyres: [
                { name: 'North Atlantic Gyre', center: [30, -45], radius: 1500, direction: 'clockwise' },
                { name: 'South Atlantic Gyre', center: [-30, -20], radius: 1500, direction: 'counterclockwise' }
            ]
        },
        
        tectonicFeatures: {
            ridges: [
                { 
                    name: 'Mid-Atlantic Ridge', 
                    coordinates: [[-55, -10], [-35, -15], [-10, -20], [10, -25], [30, -30], [50, -28], [65, -18]],
                    description: 'Longest mountain range on Earth (16,000 km) - where Atlantic widens 2.5cm/year',
                    spreadingRate: '2.5 cm/year'
                }
            ],
            trenches: [
                { name: 'Puerto Rico Trench', depth: 8376, coordinates: [19.7, -67.4], length: 800 },
                { name: 'South Sandwich Trench', depth: 8266, coordinates: [-55, -25.5], length: 965 },
                { name: 'Romanche Trench', depth: 7758, coordinates: [-0.5, -18.5], length: 300 },
                { name: 'Cayman Trench', depth: 7686, coordinates: [19.2, -80], length: 1000 }
            ],
            plates: ['North American Plate', 'South American Plate', 'Eurasian Plate', 'African Plate', 'Caribbean Plate', 'Antarctic Plate', 'Scotia Plate']
        },
        
        islands: [
            { name: 'Iceland', coordinates: [64.96, -19.02], country: 'Iceland' },
            { name: 'Greenland', coordinates: [72, -40], country: 'Denmark' },
            { name: 'Cuba', coordinates: [21.52, -77.78], country: 'Cuba' },
            { name: 'Jamaica', coordinates: [18.11, -77.30], country: 'Jamaica' },
            { name: 'Bermuda', coordinates: [32.32, -64.76], country: 'UK' },
            { name: 'Azores', coordinates: [37.74, -25.68], country: 'Portugal' },
            { name: 'Canary Islands', coordinates: [28.29, -16.63], country: 'Spain' },
            { name: 'Bahamas', coordinates: [25.03, -77.40], country: 'Bahamas' },
            { name: 'Cape Verde', coordinates: [16.00, -24.00], country: 'Cape Verde' },
            { name: 'Falkland Islands', coordinates: [-51.80, -59.00], country: 'UK' },
            { name: 'Trinidad & Tobago', coordinates: [10.69, -61.22], country: 'Trinidad and Tobago' },
            { name: 'Madeira', coordinates: [32.65, -16.91], country: 'Portugal' }
        ],
        
        cities: [
            { name: 'New York City', coordinates: [40.71, -74.01], country: 'USA', population: 8400000 },
            { name: 'Rio de Janeiro', coordinates: [-22.91, -43.17], country: 'Brazil', population: 6700000 },
            { name: 'London', coordinates: [51.51, -0.13], country: 'UK', population: 8900000 },
            { name: 'Lagos', coordinates: [6.52, 3.38], country: 'Nigeria', population: 15400000 },
            { name: 'Miami', coordinates: [25.76, -80.19], country: 'USA', population: 470000 },
            { name: 'Lisbon', coordinates: [38.72, -9.14], country: 'Portugal', population: 505000 },
            { name: 'Buenos Aires', coordinates: [-34.60, -58.38], country: 'Argentina', population: 3100000 },
            { name: 'Casablanca', coordinates: [33.59, -7.62], country: 'Morocco', population: 3400000 },
            { name: 'Cape Town', coordinates: [-33.93, 18.42], country: 'South Africa', population: 4600000 },
            { name: 'Boston', coordinates: [42.36, -71.06], country: 'USA', population: 690000 }
        ],
        
        shippingRoutes: [
            {
                name: 'Transatlantic Route',
                path: [[40, -74], [42, -50], [48, -20], [51, 0]],
                description: 'Historic shipping lane between North America and Europe'
            },
            {
                name: 'Cape Route',
                path: [[5, 0], [-20, 5], [-35, 18], [-34, 25]],
                description: 'Route around Cape of Good Hope'
            }
        ],
        
        marineLife: {
            totalSpecies: 'Estimated hundreds of thousands',
            keySpecies: ['Atlantic Bluefin Tuna', 'North Atlantic Right Whale', 'Atlantic Cod', 'Swordfish', 'Leatherback Sea Turtle', 'Bottlenose Dolphin', 'Manatee', 'Great Hammerhead Shark'],
            coralRegions: ['Caribbean Coral Reefs', 'Bermuda Reefs', 'Cape Verde Reefs', 'Brazilian Reefs'],
            endangeredSpecies: ['North Atlantic Right Whale (critically endangered)', 'Atlantic Bluefin Tuna', 'West Indian Manatee', 'Hawksbill Turtle']
        },
        
        climateRole: [
            { label: 'Gulf Stream', value: 'Keeps Western Europe 5°C warmer than similar latitudes' },
            { label: 'AMOC', value: 'Atlantic Meridional Overturning Circulation - global heat conveyor' },
            { label: 'Hurricane Formation', value: 'Atlantic hurricane basin - warm waters fuel storms' },
            { label: 'Carbon Absorption', value: 'Major carbon sink - absorbs billions of tons of CO2' },
            { label: 'Thermohaline Circulation', value: 'Deep water formation in North Atlantic drives global currents' }
        ],
        
        economicImportance: [
            { label: 'Shipping', value: 'Busiest shipping ocean - connects Americas with Europe/Africa' },
            { label: 'Fishing', value: 'Historic fishing grounds - Grand Banks, North Sea' },
            { label: 'Oil & Gas', value: 'Gulf of Mexico, North Sea, Brazilian pre-salt reserves' },
            { label: 'Undersea Cables', value: 'First transatlantic telegraph cable 1858' },
            { label: 'Tourism', value: 'Caribbean, Mediterranean, cruise industry' },
            { label: 'Trade', value: 'Connects world\'s largest economies' }
        ],
        
        environmentalIssues: [
            { label: 'Overfishing', value: 'Atlantic Cod stocks collapsed in 1990s' },
            { label: 'Sargassum Blooms', value: 'Massive seaweed blooms affecting Caribbean beaches' },
            { label: 'Gulf Dead Zone', value: 'Mississippi River pollution creates oxygen-depleted zone' },
            { label: 'Plastic Pollution', value: 'North Atlantic garbage patch growing' },
            { label: 'AMOC Weakening', value: 'Atlantic circulation slowing due to climate change' },
            { label: 'Oil Spills', value: 'Deepwater Horizon 2010 - largest marine oil spill' }
        ],
        
        exploration: [
            { label: 'Vikings', value: 'First Europeans to cross Atlantic to North America (c. 1000 AD)' },
            { label: 'Columbus', value: '1492 voyage opened Age of Exploration' },
            { label: 'Titanic', value: 'Sank in Atlantic 1912 - discovered 1985' },
            { label: 'Transatlantic Cable', value: 'First successful telegraph cable 1866' },
            { label: 'Challenger Expedition', value: '1872-1876 first comprehensive ocean study' },
            { label: 'NOAA Expeditions', value: 'Ongoing deep-sea exploration and mapping' }
        ],
        
        geopolitics: [
            { label: 'NATO', value: 'North Atlantic Treaty Organization - mutual defense' },
            { label: 'Arctic Resources', value: 'Competition for northern Atlantic resources' },
            { label: 'Caribbean', value: 'US strategic interest, Cuban tensions' },
            { label: 'Falkland Islands', value: 'UK-Argentina dispute' },
            { label: 'Gibraltar Strait', value: 'Strategic chokepoint for Mediterranean access' },
            { label: 'Fishing Rights', value: 'Brexit fishing disputes' }
        ],
        
        funFacts: [
            'Gets its name from Greek mythology - Atlas held the heavens near Morocco',
            'The youngest of the major oceans - only 150 million years old',
            'The saltiest of all oceans (33-37 parts per thousand)',
            'Home to the Sargasso Sea - only sea without any coastline',
            'The Bermuda Triangle is located here (actually not unusually dangerous!)',
            'Mid-Atlantic Ridge is the longest mountain range on Earth',
            'Titanic rests 3.8 km deep on the Atlantic floor',
            'The Atlantic is widening by about 2.5 cm per year'
        ],
        
        currentFlowWaypoints: [
            { 
                name: 'Caribbean Start', 
                coordinates: [20, -75], 
                description: 'Warm Caribbean waters begin flowing north through Florida Straits',
                type: 'warm',
                direction: 'Northward',
                temp: '27°C',
                speed: '2.5 m/s'
            },
            { 
                name: 'Gulf Stream', 
                coordinates: [35, -72], 
                description: 'The mighty Gulf Stream - carrying 30 million cubic meters per second!',
                type: 'warm',
                direction: 'Northeast',
                temp: '24°C',
                speed: '2.0 m/s'
            },
            { 
                name: 'North Atlantic Drift', 
                coordinates: [50, -30], 
                description: 'Gulf Stream becomes the North Atlantic Drift, warming Europe',
                type: 'warm',
                direction: 'Eastward',
                temp: '15°C',
                speed: '0.5 m/s'
            },
            { 
                name: 'European Coast', 
                coordinates: [58, -5], 
                description: 'Warm waters reach British Isles and Scandinavia',
                type: 'warm',
                direction: 'Northeast',
                temp: '10°C',
                speed: '0.3 m/s'
            },
            { 
                name: 'Canary Current', 
                coordinates: [28, -15], 
                description: 'Cold Canary Current flows south along African coast',
                type: 'cold',
                direction: 'Southward',
                temp: '18°C',
                speed: '0.2 m/s'
            },
            { 
                name: 'Gyre Complete', 
                coordinates: [15, -45], 
                description: 'North Atlantic Gyre circulation complete - 10,000 km journey!',
                type: 'warm',
                direction: 'Returning West',
                temp: '25°C',
                speed: '0.5 m/s'
            }
        ]
    }
];
/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - COMPLETE DATA FILE
   Part 2 of 3 - Indian Ocean & Southern Ocean
   ═══════════════════════════════════════════════════════════ */

// Continue oceansData array...
oceansData.push(
    // ═══════════════════════════════════════════════════════
    // INDIAN OCEAN - The Third Largest Ocean
    // ═══════════════════════════════════════════════════════
    {
        id: 'indian-ocean',
        name: 'Indian Ocean',
        area: 70560000,
        percentEarthSurface: 14,
        percentEarthWater: 19.8,
        volume: '264 million km³',
        avgDepth: 3741,
        maxDepth: 7290,
        tempRange: '-2°C to 30°C',
        
        deepestPoint: {
            name: 'Java Trench (Sunda Trench)',
            depth: 7290,
            coordinates: [-10.19, 109.58],
            discoveredYear: 1876
        },
        
        coordinates: [-10, 75],
        defaultZoom: 3,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
        
        surroundingContinents: ['Africa', 'Asia', 'Australia', 'Antarctica'],
        
        majorSeas: [
            { name: 'Arabian Sea', area: 3862000, coordinates: [15, 65], maxDepth: 4652 },
            { name: 'Bay of Bengal', area: 2172000, coordinates: [15, 88], maxDepth: 4694 },
            { name: 'Red Sea', area: 438000, coordinates: [20, 38], maxDepth: 3040 },
            { name: 'Persian Gulf', area: 251000, coordinates: [26, 51], maxDepth: 90 },
            { name: 'Andaman Sea', area: 797000, coordinates: [10, 96], maxDepth: 4198 },
            { name: 'Timor Sea', area: 610000, coordinates: [-10, 127], maxDepth: 3310 },
            { name: 'Arafura Sea', area: 650000, coordinates: [-10, 135], maxDepth: 3680 },
            { name: 'Gulf of Aden', area: 410000, coordinates: [12, 48], maxDepth: 2700 },
            { name: 'Mozambique Channel', area: 386000, coordinates: [-18, 42], maxDepth: 3292 },
            { name: 'Gulf of Oman', area: 180000, coordinates: [24.5, 58], maxDepth: 3694 },
            { name: 'Laccadive Sea', area: 786000, coordinates: [8, 74], maxDepth: 4131 },
            { name: 'Java Sea', area: 320000, coordinates: [-5, 110], maxDepth: 46 }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'Agulhas Current', 
                    path: [[-25, 35], [-30, 32], [-35, 25], [-40, 20]],
                    description: 'Strongest western boundary current in Southern Hemisphere',
                    speed: '1.5-2 m/s',
                    type: 'warm'
                },
                { 
                    name: 'South Equatorial Current', 
                    path: [[-10, 90], [-10, 70], [-10, 50], [-10, 42]],
                    description: 'Flows westward toward Africa',
                    speed: '0.5 m/s',
                    type: 'warm'
                },
                { 
                    name: 'Northeast Monsoon Current', 
                    path: [[8, 75], [5, 60], [3, 50]],
                    description: 'Winter monsoon current - flows westward',
                    speed: '0.5 m/s',
                    type: 'warm'
                },
                {
                    name: 'Leeuwin Current',
                    path: [[-22, 114], [-28, 114], [-34, 115]],
                    description: 'Unusual warm poleward current along Western Australia',
                    speed: '0.3 m/s',
                    type: 'warm'
                }
            ],
            cold: [
                { 
                    name: 'Somali Current', 
                    path: [[-5, 45], [0, 48], [5, 52], [10, 55]],
                    description: 'Changes direction with monsoon seasons',
                    speed: '2-3.5 m/s (summer)',
                    type: 'cold'
                },
                { 
                    name: 'West Australian Current', 
                    path: [[-20, 112], [-25, 110], [-30, 108]],
                    description: 'Cold current along Western Australia',
                    speed: '0.2 m/s',
                    type: 'cold'
                },
                {
                    name: 'Southwest Monsoon Current',
                    path: [[0, 50], [5, 60], [8, 75], [10, 90]],
                    description: 'Summer monsoon current - flows eastward',
                    speed: '0.5-1 m/s',
                    type: 'cold'
                }
            ],
            gyres: [
                { name: 'Indian Ocean Gyre', center: [-20, 75], radius: 1500, direction: 'counterclockwise' }
            ]
        },
        
        tectonicFeatures: {
            ridges: [
                { 
                    name: 'Central Indian Ridge', 
                    coordinates: [[-10, 68], [-20, 65], [-30, 55]],
                    description: 'Spreading ridge in the Indian Ocean',
                    spreadingRate: '3-5 cm/year'
                },
                { 
                    name: 'Southeast Indian Ridge', 
                    coordinates: [[-35, 85], [-45, 100], [-50, 115]],
                    description: 'Separates Australian and Antarctic plates'
                },
                { 
                    name: 'Southwest Indian Ridge', 
                    coordinates: [[-40, 20], [-45, 35], [-50, 50]],
                    description: 'Slowest spreading ridge on Earth'
                }
            ],
            trenches: [
                { name: 'Java Trench', depth: 7290, coordinates: [-10.19, 109.58], length: 4500 },
                { name: 'Ob Trench', depth: 6874, coordinates: [-15, 100], length: 900 },
                { name: 'Diamantina Trench', depth: 8047, coordinates: [-35, 105], length: 300 }
            ],
            plates: ['African Plate', 'Indo-Australian Plate', 'Antarctic Plate', 'Arabian Plate', 'Indian Plate', 'Australian Plate']
        },
        
        islands: [
            { name: 'Madagascar', coordinates: [-18.87, 47.51], country: 'Madagascar' },
            { name: 'Sri Lanka', coordinates: [7.87, 80.77], country: 'Sri Lanka' },
            { name: 'Maldives', coordinates: [3.20, 73.22], country: 'Maldives' },
            { name: 'Mauritius', coordinates: [-20.35, 57.55], country: 'Mauritius' },
            { name: 'Seychelles', coordinates: [-4.68, 55.49], country: 'Seychelles' },
            { name: 'Réunion', coordinates: [-21.12, 55.54], country: 'France' },
            { name: 'Comoros', coordinates: [-11.65, 43.33], country: 'Comoros' },
            { name: 'Zanzibar', coordinates: [-6.16, 39.20], country: 'Tanzania' },
            { name: 'Andaman Islands', coordinates: [11.74, 92.65], country: 'India' },
            { name: 'Socotra', coordinates: [12.50, 54.00], country: 'Yemen' },
            { name: 'Christmas Island', coordinates: [-10.45, 105.69], country: 'Australia' },
            { name: 'Cocos Islands', coordinates: [-12.19, 96.83], country: 'Australia' }
        ],
        
        cities: [
            { name: 'Mumbai', coordinates: [19.08, 72.88], country: 'India', population: 20700000 },
            { name: 'Chennai', coordinates: [13.08, 80.27], country: 'India', population: 10900000 },
            { name: 'Jakarta', coordinates: [-6.21, 106.85], country: 'Indonesia', population: 10700000 },
            { name: 'Durban', coordinates: [-29.86, 31.02], country: 'South Africa', population: 3700000 },
            { name: 'Karachi', coordinates: [24.86, 67.01], country: 'Pakistan', population: 16000000 },
            { name: 'Dar es Salaam', coordinates: [-6.79, 39.21], country: 'Tanzania', population: 7400000 },
            { name: 'Kolkata', coordinates: [22.57, 88.36], country: 'India', population: 14800000 },
            { name: 'Perth', coordinates: [-31.95, 115.86], country: 'Australia', population: 2100000 },
            { name: 'Dhaka', coordinates: [23.81, 90.41], country: 'Bangladesh', population: 21700000 },
            { name: 'Mogadishu', coordinates: [2.04, 45.34], country: 'Somalia', population: 2600000 }
        ],
        
        shippingRoutes: [
            {
                name: 'Suez-Singapore Route',
                path: [[30, 32], [13, 43], [5, 55], [1, 104]],
                description: 'Major shipping lane connecting Europe to Asia'
            },
            {
                name: 'Cape Route',
                path: [[-35, 18], [-25, 45], [-10, 75], [5, 95]],
                description: 'Alternative route around Cape of Good Hope'
            }
        ],
        
        marineLife: {
            totalSpecies: 'High biodiversity, thousands of species',
            keySpecies: ['Whale Shark', 'Dugong', 'Coelacanth (living fossil)', 'Indian Ocean Dolphin', 'Blue Whale', 'Manta Ray', 'Giant Grouper', 'Sea Turtles'],
            coralRegions: ['Maldives Reefs', 'Seychelles Reefs', 'Great Chagos Bank', 'Red Sea Corals', 'Ningaloo Reef'],
            endangeredSpecies: ['Dugong', 'Hawksbill Turtle', 'Blue Whale', 'Indian Ocean Humpback Dolphin']
        },
        
        climateRole: [
            { label: 'Monsoon', value: 'Drives Asian monsoon affecting 4 billion people' },
            { label: 'IOD', value: 'Indian Ocean Dipole - affects Australian and African rainfall' },
            { label: 'Cyclones', value: 'Major tropical cyclone formation region' },
            { label: 'Heat Distribution', value: 'Warm pool influences global climate patterns' },
            { label: 'Evaporation', value: 'High evaporation rates - saltiest tropical ocean' }
        ],
        
        economicImportance: [
            { label: 'Shipping', value: '40% of offshore oil, 65% of world oil reserves pass through' },
            { label: 'Oil Transport', value: 'Strait of Hormuz - 20% of world oil transits here' },
            { label: 'Fishing', value: 'Important fisheries - tuna, shrimp, lobster' },
            { label: 'Tourism', value: 'Maldives, Seychelles, Mauritius - luxury tourism' },
            { label: 'Minerals', value: 'Polymetallic nodules, oil reserves' },
            { label: 'Trade Routes', value: 'Connects Middle East oil to Asia' }
        ],
        
        environmentalIssues: [
            { label: 'Coral Bleaching', value: '2016 event killed 80% of some Maldives reefs' },
            { label: 'Overfishing', value: 'Tuna and shark populations declining' },
            { label: 'Plastic Pollution', value: 'Indian Ocean garbage patch forming' },
            { label: 'Warming', value: 'Fastest warming ocean - 1.2°C since 1950' },
            { label: 'Coastal Development', value: 'Mangrove destruction, habitat loss' },
            { label: 'Piracy', value: 'Somali coast piracy disrupts shipping' }
        ],
        
        exploration: [
            { label: 'Ancient Trade', value: 'Monsoon trade routes used for 5000+ years' },
            { label: 'Vasco da Gama', value: '1498 - First European to reach India by sea' },
            { label: 'HMS Investigator', value: '1801 - Matthew Flinders mapped Australian coast' },
            { label: 'Coelacanth Discovery', value: '1938 - "Living fossil" found off South Africa' },
            { label: 'MH370 Search', value: '2014-2018 - Mapped vast areas of seafloor' },
            { label: 'Deep-Sea Mining', value: 'Exploration for polymetallic nodules ongoing' }
        ],
        
        geopolitics: [
            { label: 'String of Pearls', value: 'China building naval bases around Indian Ocean' },
            { label: 'Strait of Hormuz', value: 'Critical oil chokepoint - Iran tensions' },
            { label: 'Strait of Malacca', value: 'Vital trade chokepoint to Pacific' },
            { label: 'Military Bases', value: 'US Diego Garcia, French Réunion, Indian Andamans' },
            { label: 'Piracy', value: 'Gulf of Aden anti-piracy operations' },
            { label: 'QUAD', value: 'India-US-Japan-Australia cooperation' }
        ],
        
        funFacts: [
            'The warmest ocean in the world - regularly exceeds 28°C in places',
            'Home to 40% of the world\'s offshore oil production',
            'The Maldives is the flattest country on Earth - highest point only 2.4m!',
            'Coelacanth fish, thought extinct for 65 million years, was found here in 1938',
            'Indian Ocean islands have incredible endemic species - 90% of Madagascar wildlife is unique',
            'The monsoon winds have been used for sailing trade for over 5,000 years',
            'Contains the "underwater waterfall" optical illusion off Mauritius',
            'The Chagos Archipelago has the world\'s largest coral atoll'
        ],
        
        currentFlowWaypoints: [
            { 
                name: 'Bay of Bengal', 
                coordinates: [10, 88], 
                description: 'Monsoon-driven currents begin their journey',
                type: 'warm',
                direction: 'Westward',
                temp: '28°C',
                speed: '0.5 m/s'
            },
            { 
                name: 'Sri Lanka', 
                coordinates: [6, 80], 
                description: 'Current flows around Sri Lanka toward Arabian Sea',
                type: 'warm',
                direction: 'Southwest',
                temp: '28°C',
                speed: '0.6 m/s'
            },
            { 
                name: 'Somali Coast', 
                coordinates: [5, 50], 
                description: 'Somali Current - changes direction with monsoons',
                type: 'cold',
                direction: 'Northward (summer)',
                temp: '25°C',
                speed: '3.0 m/s'
            },
            { 
                name: 'East African Coast', 
                coordinates: [-15, 42], 
                description: 'Current flows south along Mozambique Channel',
                type: 'warm',
                direction: 'Southward',
                temp: '26°C',
                speed: '0.5 m/s'
            },
            { 
                name: 'Agulhas Current', 
                coordinates: [-35, 25], 
                description: 'Mighty Agulhas - strongest current in Southern Hemisphere',
                type: 'warm',
                direction: 'Southwest',
                temp: '22°C',
                speed: '2.0 m/s'
            },
            { 
                name: 'Gyre Return', 
                coordinates: [-25, 80], 
                description: 'South Equatorial Current returns water eastward',
                type: 'warm',
                direction: 'Eastward',
                temp: '24°C',
                speed: '0.4 m/s'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════
    // SOUTHERN OCEAN - The Antarctic Ocean
    // ═══════════════════════════════════════════════════════
    {
        id: 'southern-ocean',
        name: 'Southern Ocean',
        area: 21960000,
        percentEarthSurface: 4.3,
        percentEarthWater: 6,
        volume: '71.8 million km³',
        avgDepth: 3270,
        maxDepth: 7235,
        tempRange: '-2°C to 10°C',
        
        deepestPoint: {
            name: 'South Sandwich Trench',
            depth: 7235,
            coordinates: [-55.42, -25.91],
            discoveredYear: 1962
        },
        
        coordinates: [-65, 0],
        defaultZoom: 2,
        
        image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1920',
        
        surroundingContinents: ['Antarctica', 'South America', 'Africa', 'Australia'],
        
        majorSeas: [
            { name: 'Weddell Sea', area: 2800000, coordinates: [-73, -45], maxDepth: 5256 },
            { name: 'Ross Sea', area: 960000, coordinates: [-75, 175], maxDepth: 730 },
            { name: 'Amundsen Sea', area: 250000, coordinates: [-73, -115], maxDepth: 3000 },
            { name: 'Bellingshausen Sea', area: 520000, coordinates: [-71, -90], maxDepth: 4800 },
            { name: 'Davis Sea', area: 250000, coordinates: [-65, 95], maxDepth: 1300 },
            { name: 'Riiser-Larsen Sea', area: 450000, coordinates: [-68, 20], maxDepth: 3000 },
            { name: "D'Urville Sea", area: 300000, coordinates: [-65, 140], maxDepth: 3600 },
            { name: 'Somov Sea', area: 200000, coordinates: [-68, 160], maxDepth: 1000 },
            { name: 'Scotia Sea', area: 900000, coordinates: [-57, -40], maxDepth: 6022 },
            { name: 'Lazarev Sea', area: 335000, coordinates: [-68, 5], maxDepth: 4500 },
            { name: 'Mawson Sea', area: 300000, coordinates: [-66, 110], maxDepth: 1000 },
            { name: 'Cooperation Sea', area: 258000, coordinates: [-66, 70], maxDepth: 3000 }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'Return Currents', 
                    path: [[-40, 0], [-45, 30], [-48, 60]],
                    description: 'Warmer water from other oceans mixing into Southern Ocean',
                    speed: '0.2 m/s',
                    type: 'warm'
                }
            ],
            cold: [
                { 
                    name: 'Antarctic Circumpolar Current', 
                    path: [[-55, -60], [-55, -20], [-55, 20], [-55, 60], [-55, 100], [-55, 140], [-55, 180]],
                    description: 'Largest ocean current - moves 100x more water than all rivers combined!',
                    speed: '0.2-0.5 m/s',
                    type: 'cold'
                },
                { 
                    name: 'East Wind Drift', 
                    path: [[-68, 0], [-68, 60], [-68, 120], [-68, 180]],
                    description: 'Flows westward close to Antarctic coast',
                    speed: '0.1-0.2 m/s',
                    type: 'cold'
                },
                {
                    name: 'Weddell Gyre',
                    path: [[-65, -50], [-70, -40], [-75, -30], [-70, -20], [-65, -30], [-65, -50]],
                    description: 'Major gyre in the Weddell Sea',
                    speed: '0.1 m/s',
                    type: 'cold'
                },
                {
                    name: 'Ross Gyre',
                    path: [[-70, 170], [-75, 180], [-72, -170], [-68, 175]],
                    description: 'Cyclonic gyre in the Ross Sea',
                    speed: '0.1 m/s',
                    type: 'cold'
                }
            ],
            gyres: [
                { name: 'Weddell Gyre', center: [-70, -40], radius: 800, direction: 'clockwise' },
                { name: 'Ross Gyre', center: [-72, 175], radius: 600, direction: 'clockwise' }
            ]
        },
        
        tectonicFeatures: {
            ridges: [
                { 
                    name: 'Pacific-Antarctic Ridge', 
                    coordinates: [[-65, -140], [-60, -150], [-55, -165]],
                    description: 'Spreading ridge between Pacific and Antarctic plates'
                },
                { 
                    name: 'American-Antarctic Ridge', 
                    coordinates: [[-60, -60], [-55, -40], [-50, -20]],
                    description: 'Connects to South Atlantic Ridge'
                },
                {
                    name: 'Southeast Indian Ridge',
                    coordinates: [[-50, 90], [-55, 110], [-60, 130]],
                    description: 'Separates Antarctic from Australian plate'
                }
            ],
            trenches: [
                { name: 'South Sandwich Trench', depth: 7235, coordinates: [-55.42, -25.91], length: 965 },
                { name: 'South Shetland Trench', depth: 5111, coordinates: [-61, -57], length: 550 }
            ],
            plates: ['Antarctic Plate', 'South American Plate', 'African Plate', 'Indo-Australian Plate', 'Pacific Plate', 'Scotia Plate']
        },
        
        islands: [
            { name: 'South Georgia', coordinates: [-54.25, -36.75], country: 'UK' },
            { name: 'South Sandwich Islands', coordinates: [-57.75, -26.50], country: 'UK' },
            { name: 'South Shetland Islands', coordinates: [-62.00, -58.00], country: 'Various Claims' },
            { name: 'South Orkney Islands', coordinates: [-60.58, -45.50], country: 'UK/Argentina' },
            { name: 'Peter I Island', coordinates: [-68.85, -90.58], country: 'Norway' },
            { name: 'Bouvet Island', coordinates: [-54.43, 3.38], country: 'Norway' },
            { name: 'Heard Island', coordinates: [-53.10, 73.52], country: 'Australia' },
            { name: 'Macquarie Island', coordinates: [-54.62, 158.86], country: 'Australia' },
            { name: 'Scott Island', coordinates: [-67.37, -179.97], country: 'New Zealand' },
            { name: 'Balleny Islands', coordinates: [-66.92, 163.00], country: 'New Zealand' }
        ],
        
        cities: [
            { name: 'Ushuaia', coordinates: [-54.80, -68.30], country: 'Argentina', population: 75000 },
            { name: 'Punta Arenas', coordinates: [-53.16, -70.91], country: 'Chile', population: 127000 },
            { name: 'Stanley', coordinates: [-51.69, -57.86], country: 'Falkland Islands (UK)', population: 2500 },
            { name: 'Hobart', coordinates: [-42.88, 147.33], country: 'Australia', population: 240000 },
            { name: 'Christchurch', coordinates: [-43.53, 172.64], country: 'New Zealand', population: 380000 },
            { name: 'Cape Town', coordinates: [-33.93, 18.42], country: 'South Africa', population: 4600000 }
        ],
        
        shippingRoutes: [
            {
                name: 'Drake Passage',
                path: [[-56, -68], [-58, -60], [-56, -55]],
                description: 'Shortest route between Pacific and Atlantic - notoriously rough seas'
            },
            {
                name: 'Antarctic Supply Route',
                path: [[-42, 147], [-55, 150], [-65, 140]],
                description: 'Supply route from Australia to Antarctic bases'
            }
        ],
        
        marineLife: {
            totalSpecies: '9000+ species, many found nowhere else',
            keySpecies: ['Emperor Penguin', 'Leopard Seal', 'Antarctic Krill', 'Blue Whale', 'Colossal Squid', 'Weddell Seal', 'Orca', 'Antarctic Toothfish', 'Albatross'],
            coralRegions: ['Cold-water coral communities on seafloor'],
            endangeredSpecies: ['Blue Whale', 'Sei Whale', 'Antarctic Fur Seal (recovering)', 'Wandering Albatross']
        },
        
        climateRole: [
            { label: 'Heat Sink', value: 'Absorbs more heat than any other ocean - slows global warming' },
            { label: 'Carbon Sink', value: 'Absorbs 40% of human-produced CO2 taken up by oceans' },
            { label: 'Deep Water Formation', value: 'Antarctic Bottom Water drives global thermohaline circulation' },
            { label: 'Sea Ice', value: '18 million km² of ice forms and melts annually - affects global albedo' },
            { label: 'Polar Vortex', value: 'Isolated circulation pattern keeps Antarctica cold' }
        ],
        
        economicImportance: [
            { label: 'Fishing', value: 'Antarctic krill and toothfish fisheries (regulated by CCAMLR)' },
            { label: 'Tourism', value: '75,000+ tourists visit Antarctica annually' },
            { label: 'Research', value: '40+ research stations - climate, astronomy, biology' },
            { label: 'Resources', value: 'Mining banned until 2048 under Antarctic Treaty' },
            { label: 'Shipping', value: 'Drake Passage shortcut between oceans' },
            { label: 'Bioprospecting', value: 'Research into unique Antarctic organisms' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'West Antarctic ice sheet melting at accelerating rate' },
            { label: 'Ocean Acidification', value: 'Cold waters absorb more CO2, becoming more acidic' },
            { label: 'Ozone Hole', value: 'Seasonal ozone depletion over Antarctica (improving)' },
            { label: 'Krill Decline', value: 'Antarctic krill populations declined 80% since 1970s' },
            { label: 'Ice Shelf Collapse', value: 'Larsen B ice shelf collapsed 2002, Larsen C calving' },
            { label: 'Invasive Species', value: 'Seeds and microbes arriving with tourists and supplies' }
        ],
        
        exploration: [
            { label: 'James Cook', value: '1773 - First to cross Antarctic Circle' },
            { label: 'First Landing', value: '1895 - First confirmed landing on Antarctic continent' },
            { label: 'South Pole', value: 'Amundsen 1911, Scott 1912 reached South Pole' },
            { label: 'Shackleton', value: '1914-1916 - Endurance expedition survival story' },
            { label: 'Antarctic Treaty', value: '1959 - International cooperation for science' },
            { label: 'Modern Research', value: 'Ice cores reveal 800,000 years of climate history' }
        ],
        
        geopolitics: [
            { label: 'Antarctic Treaty', value: '54 nations - peaceful use, no military, science cooperation' },
            { label: 'Territorial Claims', value: '7 nations claim territory (all frozen under treaty)' },
            { label: 'Environmental Protocol', value: 'Mining banned until 2048' },
            { label: 'CCAMLR', value: 'Commission for Conservation of Antarctic Marine Living Resources' },
            { label: 'IWC', value: 'International Whaling Commission - Southern Ocean Sanctuary' },
            { label: 'Research Stations', value: '40+ stations from 30 countries' }
        ],
        
        funFacts: [
            'The Antarctic Circumpolar Current moves 130 million cubic meters per second - 100x all rivers!',
            'Officially recognized as the 5th ocean in 2000 by the IHO (some say 2021)',
            'The coldest, windiest, and driest continent surrounds it',
            'Contains 70% of Earth\'s fresh water (as ice)',
            'Antarctic krill biomass is ~500 million tonnes - largest of any multi-cellular animal',
            'Icebergs can be larger than small countries - one in 2021 was bigger than Majorca',
            'The Colossal Squid lives here - largest invertebrate with the biggest eyes of any animal',
            'Temperatures have dropped to -89.2°C at Vostok Station'
        ],
        
        currentFlowWaypoints: [
            { 
                name: 'Drake Passage', 
                coordinates: [-58, -65], 
                description: 'Where the ACC squeezes between South America and Antarctica',
                type: 'cold',
                direction: 'Eastward',
                temp: '2°C',
                speed: '0.5 m/s'
            },
            { 
                name: 'Weddell Sea', 
                coordinates: [-70, -40], 
                description: 'Dense Antarctic Bottom Water forms here',
                type: 'cold',
                direction: 'Circulating',
                temp: '-1°C',
                speed: '0.1 m/s'
            },
            { 
                name: 'South Atlantic', 
                coordinates: [-55, 0], 
                description: 'ACC continues its endless journey around Antarctica',
                type: 'cold',
                direction: 'Eastward',
                temp: '3°C',
                speed: '0.3 m/s'
            },
            { 
                name: 'Indian Ocean Sector', 
                coordinates: [-55, 70], 
                description: 'Current flows between Africa and Antarctica',
                type: 'cold',
                direction: 'Eastward',
                temp: '2°C',
                speed: '0.3 m/s'
            },
            { 
                name: 'Ross Sea', 
                coordinates: [-75, 175], 
                description: 'Ross Sea gyre - important for deep water formation',
                type: 'cold',
                direction: 'Circulating',
                temp: '-1°C',
                speed: '0.1 m/s'
            },
            { 
                name: 'ACC Complete', 
                coordinates: [-56, -80], 
                description: 'The endless loop - 21,000 km around Antarctica!',
                type: 'cold',
                direction: 'Continuous East',
                temp: '2°C',
                speed: '0.4 m/s'
            }
        ]
    }
);
/* ═══════════════════════════════════════════════════════════
   🌊 OCEANS EXPLORER - COMPLETE DATA FILE
   Part 3 of 3 - Arctic Ocean + Additional Data
   ═══════════════════════════════════════════════════════════ */

// Add Arctic Ocean to oceansData array
oceansData.push(
    // ═══════════════════════════════════════════════════════
    // ARCTIC OCEAN - The Smallest and Shallowest Ocean
    // ═══════════════════════════════════════════════════════
    {
        id: 'arctic-ocean',
        name: 'Arctic Ocean',
        area: 15558000,
        percentEarthSurface: 3,
        percentEarthWater: 4,
        volume: '18.75 million km³',
        avgDepth: 1205,
        maxDepth: 5669,
        tempRange: '-2°C to 6°C',
        
        deepestPoint: {
            name: 'Molloy Deep',
            depth: 5669,
            coordinates: [79.13, 2.82],
            discoveredYear: 1972
        },
        
        coordinates: [85, 0],
        defaultZoom: 2,
        
        image: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=500',
        backgroundImage: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=1920',
        
        surroundingContinents: ['North America', 'Europe', 'Asia'],
        
        majorSeas: [
            { name: 'Barents Sea', area: 1405000, coordinates: [75, 35], maxDepth: 600 },
            { name: 'Kara Sea', area: 926000, coordinates: [76, 80], maxDepth: 620 },
            { name: 'Laptev Sea', area: 662000, coordinates: [76, 125], maxDepth: 3385 },
            { name: 'East Siberian Sea', area: 987000, coordinates: [73, 160], maxDepth: 358 },
            { name: 'Chukchi Sea', area: 620000, coordinates: [70, -170], maxDepth: 1256 },
            { name: 'Beaufort Sea', area: 476000, coordinates: [72, -135], maxDepth: 4683 },
            { name: 'Greenland Sea', area: 1205000, coordinates: [76, -5], maxDepth: 5527 },
            { name: 'Norwegian Sea', area: 1383000, coordinates: [67, 0], maxDepth: 3970 },
            { name: 'Lincoln Sea', area: 64000, coordinates: [83, -55], maxDepth: 500 },
            { name: 'Wandel Sea', area: 57000, coordinates: [80, -15], maxDepth: 370 },
            { name: 'White Sea', area: 90000, coordinates: [65, 38], maxDepth: 340 },
            { name: 'Pechora Sea', area: 81263, coordinates: [69, 54], maxDepth: 210 }
        ],
        
        currents: {
            warm: [
                { 
                    name: 'North Atlantic Current Extension', 
                    path: [[65, 0], [70, 10], [75, 20], [78, 30]],
                    description: 'Brings warm Atlantic water into the Arctic',
                    speed: '0.1-0.3 m/s',
                    type: 'warm'
                },
                {
                    name: 'West Spitsbergen Current',
                    path: [[72, 5], [76, 8], [79, 10]],
                    description: 'Warm current along western Svalbard',
                    speed: '0.2 m/s',
                    type: 'warm'
                }
            ],
            cold: [
                { 
                    name: 'Transpolar Drift', 
                    path: [[85, 140], [88, 0], [83, -30], [78, -50]],
                    description: 'Carries ice from Siberia across the pole to the Atlantic',
                    speed: '0.02-0.05 m/s',
                    type: 'cold'
                },
                { 
                    name: 'Beaufort Gyre', 
                    path: [[75, -150], [78, -140], [80, -130], [78, -140], [75, -150]],
                    description: 'Clockwise circulation that traps and ages ice',
                    speed: '0.02 m/s',
                    type: 'cold'
                },
                { 
                    name: 'East Greenland Current', 
                    path: [[80, -10], [75, -15], [70, -20], [65, -30]],
                    description: 'Exports Arctic ice and cold water to the Atlantic',
                    speed: '0.3 m/s',
                    type: 'cold'
                },
                {
                    name: 'Lomonosov Ridge Current',
                    path: [[88, 140], [86, 100], [84, 60]],
                    description: 'Deep current along the Lomonosov Ridge',
                    speed: '0.05 m/s',
                    type: 'cold'
                }
            ],
            gyres: [
                { name: 'Beaufort Gyre', center: [75, -145], radius: 800, direction: 'clockwise' }
            ]
        },
        
        tectonicFeatures: {
            ridges: [
                { 
                    name: 'Lomonosov Ridge', 
                    coordinates: [[88, 140], [86, 100], [84, 60], [82, 20]],
                    description: 'Underwater ridge crossing the Arctic from Siberia to Greenland - 1,800 km long'
                },
                { 
                    name: 'Gakkel Ridge', 
                    coordinates: [[85, -5], [84, 40], [82, 85], [80, 120]],
                    description: 'Slowest spreading ridge on Earth - only 1cm/year',
                    spreadingRate: '1 cm/year'
                },
                {
                    name: 'Alpha-Mendeleev Ridge',
                    coordinates: [[85, -130], [85, -160], [82, 180]],
                    description: 'Extinct volcanic ridge'
                }
            ],
            trenches: [
                { name: 'Molloy Deep', depth: 5669, coordinates: [79.13, 2.82], length: 100 },
                { name: 'Litke Deep', depth: 5449, coordinates: [82, 19], length: 50 }
            ],
            plates: ['North American Plate', 'Eurasian Plate', 'Okhotsk Plate']
        },
        
        islands: [
            { name: 'Greenland', coordinates: [72, -40], country: 'Denmark' },
            { name: 'Svalbard', coordinates: [78, 16], country: 'Norway' },
            { name: 'Franz Josef Land', coordinates: [81, 55], country: 'Russia' },
            { name: 'Novaya Zemlya', coordinates: [74, 56], country: 'Russia' },
            { name: 'Severnaya Zemlya', coordinates: [80, 97], country: 'Russia' },
            { name: 'New Siberian Islands', coordinates: [75, 142], country: 'Russia' },
            { name: 'Wrangel Island', coordinates: [71, -180], country: 'Russia' },
            { name: 'Banks Island', coordinates: [73, -122], country: 'Canada' },
            { name: 'Victoria Island', coordinates: [71, -110], country: 'Canada' },
            { name: 'Ellesmere Island', coordinates: [80, -80], country: 'Canada' },
            { name: 'Baffin Island', coordinates: [68, -70], country: 'Canada' },
            { name: 'Iceland', coordinates: [65, -18], country: 'Iceland' },
            { name: 'Jan Mayen', coordinates: [71, -8.3], country: 'Norway' }
        ],
        
        cities: [
            { name: 'Murmansk', coordinates: [68.97, 33.09], country: 'Russia', population: 295000 },
            { name: 'Tromsø', coordinates: [69.65, 18.96], country: 'Norway', population: 77000 },
            { name: 'Longyearbyen', coordinates: [78.22, 15.64], country: 'Norway', population: 2400 },
            { name: 'Barrow (Utqiagvik)', coordinates: [71.29, -156.79], country: 'USA', population: 4500 },
            { name: 'Reykjavik', coordinates: [64.15, -21.94], country: 'Iceland', population: 130000 },
            { name: 'Nuuk', coordinates: [64.17, -51.74], country: 'Greenland', population: 19000 },
            { name: 'Arkhangelsk', coordinates: [64.54, 40.54], country: 'Russia', population: 350000 },
            { name: 'Norilsk', coordinates: [69.35, 88.20], country: 'Russia', population: 180000 },
            { name: 'Tiksi', coordinates: [71.64, 128.87], country: 'Russia', population: 5000 },
            { name: 'Hammerfest', coordinates: [70.66, 23.68], country: 'Norway', population: 10000 }
        ],
        
        shippingRoutes: [
            {
                name: 'Northern Sea Route',
                path: [[69, 33], [72, 60], [75, 100], [72, 140], [68, 170], [66, -170]],
                description: 'Shipping lane along Russian Arctic coast - 40% shorter Europe-Asia'
            },
            {
                name: 'Northwest Passage',
                path: [[66, -65], [72, -95], [73, -125], [70, -155]],
                description: 'Route through Canadian Arctic Archipelago - increasingly ice-free'
            },
            {
                name: 'Transpolar Sea Route',
                path: [[70, 30], [88, 0], [70, -170]],
                description: 'Future route directly over North Pole as ice melts'
            }
        ],
        
        marineLife: {
            totalSpecies: '~7,500 known species, many unique to Arctic',
            keySpecies: ['Polar Bear', 'Arctic Cod', 'Narwhal', 'Beluga Whale', 'Walrus', 'Ringed Seal', 'Bowhead Whale', 'Arctic Fox', 'Greenland Shark'],
            coralRegions: ['Cold-water coral gardens in Barents Sea', 'Lophelia reefs'],
            endangeredSpecies: ['Polar Bear (vulnerable)', 'Narwhal', 'Bowhead Whale', 'Ivory Gull']
        },
        
        climateRole: [
            { label: 'Albedo Effect', value: 'Sea ice reflects 80% of sunlight - critical for cooling' },
            { label: 'Heat Sink', value: 'Cold Arctic waters moderate global temperatures' },
            { label: 'Thermohaline', value: 'Dense cold water sinks, driving global ocean circulation' },
            { label: 'Permafrost', value: 'Surrounding permafrost stores twice as much carbon as atmosphere' },
            { label: 'Polar Amplification', value: 'Arctic warming 2-4x faster than global average' }
        ],
        
        economicImportance: [
            { label: 'Shipping', value: 'Northern Sea Route saves 40% on Europe-Asia shipping' },
            { label: 'Oil & Gas', value: '13% of world undiscovered oil, 30% of gas may be in Arctic' },
            { label: 'Fishing', value: 'Arctic cod, shrimp, crab fisheries' },
            { label: 'Minerals', value: 'Rare earth elements, zinc, lead, diamonds' },
            { label: 'Tourism', value: 'Polar expeditions, Northern Lights tourism' },
            { label: 'Research', value: 'Climate research stations, space weather monitoring' }
        ],
        
        environmentalIssues: [
            { label: 'Sea Ice Loss', value: 'Summer ice volume down 75% since 1979' },
            { label: 'Permafrost Thaw', value: 'Releasing methane - positive feedback loop' },
            { label: 'Ocean Acidification', value: 'Cold waters absorbing more CO2' },
            { label: 'Polar Bear Decline', value: 'Ice loss threatening hunting habitat' },
            { label: 'Oil Spill Risk', value: 'Increased shipping and drilling in sensitive areas' },
            { label: 'Plastic Pollution', value: 'Microplastics found in Arctic ice and snow' }
        ],
        
        exploration: [
            { label: 'Vikings', value: 'Reached Greenland c. 985 AD' },
            { label: 'Northeast Passage', value: 'Nordenskiöld first complete transit 1878-1879' },
            { label: 'Northwest Passage', value: 'Amundsen first complete transit 1903-1906' },
            { label: 'North Pole', value: 'Peary claimed 1909, disputed; confirmed flights 1926' },
            { label: 'Submarine', value: 'USS Nautilus first under-ice North Pole transit 1958' },
            { label: 'Modern', value: 'Year-round research stations, icebreaker expeditions' }
        ],
        
        geopolitics: [
            { label: 'Arctic Council', value: '8 nations coordinating Arctic governance' },
            { label: 'Russia', value: 'Claims over Lomonosov Ridge extend territory to pole' },
            { label: 'Resource Race', value: 'Multiple nations claiming seabed resources' },
            { label: 'Northwest Passage', value: 'Canada claims internal waters, US says international' },
            { label: 'Military', value: 'Increased Russian military presence' },
            { label: 'Climate', value: 'Paris Agreement critical for Arctic preservation' }
        ],
        
        funFacts: [
            'The smallest and shallowest of all oceans',
            'Almost completely covered by sea ice in winter - shrinking rapidly',
            'The only ocean where polar bears live',
            'Greenland Sharks here can live over 500 years - oldest vertebrates!',
            'In summer, the sun never sets at the North Pole (midnight sun)',
            'The Lomonosov Ridge splits the Arctic basin in two',
            'Arctic ice reflects 80% of sunlight - without it, Earth would be much warmer',
            'Some Arctic waters are so cold they are supercooled below 0°C but still liquid'
        ],
        
        currentFlowWaypoints: [
            { 
                name: 'Atlantic Inflow', 
                coordinates: [70, 15], 
                description: 'Warm Atlantic water enters through Norwegian Sea',
                type: 'warm',
                direction: 'Northward',
                temp: '6°C',
                speed: '0.2 m/s'
            },
            { 
                name: 'Barents Sea', 
                coordinates: [75, 35], 
                description: 'Water mixes and cools in the Barents Sea',
                type: 'warm',
                direction: 'Eastward',
                temp: '4°C',
                speed: '0.15 m/s'
            },
            { 
                name: 'Siberian Shelf', 
                coordinates: [76, 130], 
                description: 'Cold shallow waters along Siberian coast',
                type: 'cold',
                direction: 'Eastward',
                temp: '-1°C',
                speed: '0.05 m/s'
            },
            { 
                name: 'Beaufort Gyre', 
                coordinates: [78, -145], 
                description: 'Clockwise gyre traps ice for years',
                type: 'cold',
                direction: 'Clockwise',
                temp: '-1.5°C',
                speed: '0.02 m/s'
            },
            { 
                name: 'Transpolar Drift', 
                coordinates: [88, 0], 
                description: 'Ice and water drift from Siberia toward Fram Strait',
                type: 'cold',
                direction: 'Toward Atlantic',
                temp: '-1.8°C',
                speed: '0.03 m/s'
            },
            { 
                name: 'Fram Strait Exit', 
                coordinates: [80, 0], 
                description: 'Arctic water and ice exit to the Atlantic',
                type: 'cold',
                direction: 'Southward',
                temp: '-1°C',
                speed: '0.3 m/s'
            }
        ]
    }
);

// ═══════════════════════════════════════════════════════════
// ADDITIONAL GLOBAL SEAS DATA (For Reference)
// ═══════════════════════════════════════════════════════════

const allMajorSeas = [
    // Pacific Ocean Seas
    { name: 'South China Sea', ocean: 'Pacific', area: 3500000, maxDepth: 5560 },
    { name: 'Philippine Sea', ocean: 'Pacific', area: 5695000, maxDepth: 10540 },
    { name: 'Coral Sea', ocean: 'Pacific', area: 4791000, maxDepth: 9140 },
    { name: 'Sea of Japan', ocean: 'Pacific', area: 978000, maxDepth: 3742 },
    { name: 'Sea of Okhotsk', ocean: 'Pacific', area: 1583000, maxDepth: 3372 },
    { name: 'Bering Sea', ocean: 'Pacific', area: 2292000, maxDepth: 4773 },
    { name: 'Tasman Sea', ocean: 'Pacific', area: 2300000, maxDepth: 5200 },
    { name: 'East China Sea', ocean: 'Pacific', area: 1249000, maxDepth: 2719 },
    { name: 'Yellow Sea', ocean: 'Pacific', area: 380000, maxDepth: 152 },
    { name: 'Celebes Sea', ocean: 'Pacific', area: 280000, maxDepth: 6220 },
    { name: 'Sulu Sea', ocean: 'Pacific', area: 260000, maxDepth: 5576 },
    { name: 'Solomon Sea', ocean: 'Pacific', area: 720000, maxDepth: 9103 },
    
    // Atlantic Ocean Seas
    { name: 'Caribbean Sea', ocean: 'Atlantic', area: 2754000, maxDepth: 7686 },
    { name: 'Mediterranean Sea', ocean: 'Atlantic', area: 2500000, maxDepth: 5267 },
    { name: 'Gulf of Mexico', ocean: 'Atlantic', area: 1550000, maxDepth: 4384 },
    { name: 'North Sea', ocean: 'Atlantic', area: 570000, maxDepth: 700 },
    { name: 'Baltic Sea', ocean: 'Atlantic', area: 377000, maxDepth: 459 },
    { name: 'Black Sea', ocean: 'Atlantic', area: 436000, maxDepth: 2212 },
    { name: 'Norwegian Sea', ocean: 'Atlantic', area: 1383000, maxDepth: 3970 },
    { name: 'Sargasso Sea', ocean: 'Atlantic', area: 3000000, maxDepth: 7000 },
    { name: 'Labrador Sea', ocean: 'Atlantic', area: 841000, maxDepth: 4316 },
    { name: 'Irish Sea', ocean: 'Atlantic', area: 100000, maxDepth: 175 },
    { name: 'Bay of Biscay', ocean: 'Atlantic', area: 223000, maxDepth: 4735 },
    { name: 'Scotia Sea', ocean: 'Atlantic', area: 900000, maxDepth: 6022 },
    
    // Indian Ocean Seas
    { name: 'Arabian Sea', ocean: 'Indian', area: 3862000, maxDepth: 4652 },
    { name: 'Bay of Bengal', ocean: 'Indian', area: 2172000, maxDepth: 4694 },
    { name: 'Red Sea', ocean: 'Indian', area: 438000, maxDepth: 3040 },
    { name: 'Persian Gulf', ocean: 'Indian', area: 251000, maxDepth: 90 },
    { name: 'Andaman Sea', ocean: 'Indian', area: 797000, maxDepth: 4198 },
    { name: 'Timor Sea', ocean: 'Indian', area: 610000, maxDepth: 3310 },
    { name: 'Arafura Sea', ocean: 'Indian', area: 650000, maxDepth: 3680 },
    { name: 'Gulf of Aden', ocean: 'Indian', area: 410000, maxDepth: 2700 },
    { name: 'Mozambique Channel', ocean: 'Indian', area: 386000, maxDepth: 3292 },
    { name: 'Laccadive Sea', ocean: 'Indian', area: 786000, maxDepth: 4131 },
    
    // Southern Ocean Seas
    { name: 'Weddell Sea', ocean: 'Southern', area: 2800000, maxDepth: 5256 },
    { name: 'Ross Sea', ocean: 'Southern', area: 960000, maxDepth: 730 },
    { name: 'Amundsen Sea', ocean: 'Southern', area: 250000, maxDepth: 3000 },
    { name: 'Bellingshausen Sea', ocean: 'Southern', area: 520000, maxDepth: 4800 },
    { name: 'Scotia Sea', ocean: 'Southern', area: 900000, maxDepth: 6022 },
    
    // Arctic Ocean Seas
    { name: 'Barents Sea', ocean: 'Arctic', area: 1405000, maxDepth: 600 },
    { name: 'Kara Sea', ocean: 'Arctic', area: 926000, maxDepth: 620 },
    { name: 'Laptev Sea', ocean: 'Arctic', area: 662000, maxDepth: 3385 },
    { name: 'East Siberian Sea', ocean: 'Arctic', area: 987000, maxDepth: 358 },
    { name: 'Chukchi Sea', ocean: 'Arctic', area: 620000, maxDepth: 1256 },
    { name: 'Beaufort Sea', ocean: 'Arctic', area: 476000, maxDepth: 4683 },
    { name: 'Greenland Sea', ocean: 'Arctic', area: 1205000, maxDepth: 5527 },
    { name: 'Lincoln Sea', ocean: 'Arctic', area: 64000, maxDepth: 500 },
    { name: 'White Sea', ocean: 'Arctic', area: 90000, maxDepth: 340 }
];

// ═══════════════════════════════════════════════════════════
// HELPER FUNCTIONS FOR DATA ACCESS
// ═══════════════════════════════════════════════════════════

function getOceanById(id) {
    return oceansData.find(ocean => ocean.id === id);
}

function getOceanByName(name) {
    return oceansData.find(ocean => 
        ocean.name.toLowerCase() === name.toLowerCase()
    );
}

function getAllSeas() {
    let seas = [];
    oceansData.forEach(ocean => {
        if (ocean.majorSeas) {
            ocean.majorSeas.forEach(sea => {
                seas.push({
                    ...sea,
                    oceanId: ocean.id,
                    oceanName: ocean.name
                });
            });
        }
    });
    return seas;
}

function getSeaByName(name) {
    const seas = getAllSeas();
    return seas.find(sea => 
        sea.name.toLowerCase() === name.toLowerCase()
    );
}

function getOceanStats() {
    const totalArea = oceansData.reduce((sum, o) => sum + o.area, 0);
    const totalSeas = oceansData.reduce((sum, o) => sum + (o.majorSeas?.length || 0), 0);
    const deepestOcean = oceansData.reduce((prev, curr) => 
        prev.maxDepth > curr.maxDepth ? prev : curr
    );
    
    return {
        totalOceans: oceansData.length,
        totalArea: totalArea,
        totalSeas: totalSeas,
        deepestOcean: deepestOcean.name,
        deepestPoint: deepestOcean.deepestPoint.name,
        maxDepth: deepestOcean.maxDepth
    };
}

function searchOceans(query) {
    query = query.toLowerCase();
    return oceansData.filter(ocean => 
        ocean.name.toLowerCase().includes(query) ||
        ocean.majorSeas?.some(sea => sea.name.toLowerCase().includes(query)) ||
        ocean.islands?.some(island => island.name.toLowerCase().includes(query)) ||
        ocean.cities?.some(city => city.name.toLowerCase().includes(query))
    );
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        oceansData,
        allMajorSeas,
        getOceanById,
        getOceanByName,
        getAllSeas,
        getSeaByName,
        getOceanStats,
        searchOceans
    };
}

// ═══════════════════════════════════════════════════════════
// DATA VALIDATION
// ═══════════════════════════════════════════════════════════

console.log('🌊 Oceans Data Loaded Successfully!');
console.log(`📊 Total Oceans: ${oceansData.length}`);
console.log(`🌊 Total Seas: ${getAllSeas().length}`);
console.log(`📍 Total Islands: ${oceansData.reduce((sum, o) => sum + (o.islands?.length || 0), 0)}`);
console.log(`🏙️ Total Cities: ${oceansData.reduce((sum, o) => sum + (o.cities?.length || 0), 0)}`);
