/**
 * ═══════════════════════════════════════════════════════════
 * DESERTS DATA FILE 1 - Deserts 1-10 (Largest by Area)
 * Encyclopedia-grade detailed data for geography learning
 * ═══════════════════════════════════════════════════════════
 */

const desertsData1 = [
    // ═══════════════════════════════════════════════════════════
    // #1 - ANTARCTIC DESERT (Largest Desert on Earth)
    // ═══════════════════════════════════════════════════════════
    {
        id: 'antarctic-desert',
        name: 'Antarctic Desert',
        subtitle: 'The Frozen Giant',
        countries: [
            { name: 'Antarctica', code: 'AQ', claimants: ['Argentina', 'Australia', 'Chile', 'France', 'New Zealand', 'Norway', 'United Kingdom'] }
        ],
        continent: 'Antarctica',
        desertType: 'cold',
        subType: 'Polar Desert',
        area: 14200000,
        areaRank: 1,
        rank: 1,
        coordinates: [-82.8628, 135.0000],
        defaultZoom: 3,
        
        image: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800',
            'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=800',
            'https://images.unsplash.com/photo-1503788311183-fa3e42b7a1e4?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Antarctic Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, -60], [-180, -90], [180, -90], [180, -60],
                    [170, -72], [150, -70], [120, -66], [90, -67],
                    [60, -70], [30, -70], [0, -70], [-30, -72],
                    [-60, -75], [-90, -74], [-120, -73], [-150, -72], [-180, -60]
                ]]
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Location Branch
        // ═══════════════════════════════════════════════════════════
        location: {
            continent: 'Antarctica',
            hemispheres: ['Southern', 'All Longitudinal'],
            latitudeRange: '60°S to 90°S',
            longitudeRange: '180°W to 180°E (entire continent)',
            geographicCenter: '82°S, 135°E (approximate)',
            totalCountries: 0,
            claimantNations: 7,
            borderingOceans: ['Southern Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean'],
            timeZones: 'All time zones (research stations use various)',
            closestContinent: 'South America (1,000 km from Antarctic Peninsula)',
            isolationFactor: 'Most isolated landmass on Earth'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Desert Type Branch
        // ═══════════════════════════════════════════════════════════
        desertClassification: {
            primaryType: 'Polar Desert',
            secondaryType: 'Cold Desert',
            climateClassification: 'EF (Ice Cap) & ET (Tundra)',
            formationCauses: [
                {
                    cause: 'Extreme Cold',
                    explanation: 'Temperatures too low for moisture to remain as liquid water'
                },
                {
                    cause: 'High Pressure System',
                    explanation: 'Permanent high pressure prevents moisture-bearing clouds'
                },
                {
                    cause: 'Katabatic Winds',
                    explanation: 'Dense cold air flows from interior, blocking precipitation'
                },
                {
                    cause: 'Polar Vortex',
                    explanation: 'Circumpolar winds isolate continent from warm moist air'
                },
                {
                    cause: 'Elevation',
                    explanation: 'Average elevation of 2,500m reduces precipitation'
                }
            ],
            whyItsDesert: 'Despite being covered in ice, Antarctica receives less than 200mm precipitation annually in interior, making it technically the driest continent on Earth',
            paradox: 'Contains 70% of Earth\'s fresh water but is technically a desert'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Size & Scale Branch
        // ═══════════════════════════════════════════════════════════
        size: {
            totalArea: 14200000,
            areaUnit: 'km²',
            areaInMiles: 5483000,
            percentOfEarthLand: 9.4,
            comparisonToCountries: [
                'Larger than Europe',
                '1.5x size of USA',
                '58x size of United Kingdom',
                '2x size of Australia'
            ],
            ranking: {
                amongDeserts: 1,
                totalDeserts: 50,
                statement: 'Largest desert on Earth'
            },
            iceSheetArea: 13829000,
            iceFreeArea: 371000,
            coastlineLength: 17968
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Climate Branch
        // ═══════════════════════════════════════════════════════════
        climate: {
            overview: 'The coldest, driest, and windiest continent on Earth',
            temperatureData: {
                summerHigh: {
                    coastal: '-5°C to 0°C',
                    interior: '-20°C to -30°C'
                },
                winterLow: {
                    coastal: '-20°C to -30°C',
                    interior: '-60°C to -70°C'
                },
                annualMean: {
                    coastal: '-10°C',
                    interior: '-57°C'
                },
                extremeRecords: {
                    coldestEver: '-89.2°C (Vostok Station, July 21, 1983)',
                    coldestReliable: '-89.2°C',
                    warmestEver: '18.3°C (Esperanza Station, February 6, 2020)',
                    coldestAnnualMean: '-58.3°C (Dome Fuji)'
                }
            },
            precipitation: {
                annualAverage: '<50mm (interior)',
                coastalAverage: '200mm',
                type: 'Snow (never rain in interior)',
                snowAccumulation: '2-3cm water equivalent per year',
                humidity: 'Extremely low (air too cold to hold moisture)'
            },
            wind: {
                averageSpeed: '20-30 km/h',
                maximumRecorded: '327 km/h (Commonwealth Bay)',
                katabaticWinds: 'Cold dense air flowing from high interior to coast',
                blizzardFrequency: 'Common, can last days',
                windChillEffect: 'Can make -40°C feel like -80°C'
            },
            sunlight: {
                summerSunlight: '24 hours (polar day)',
                winterDarkness: '24 hours (polar night)',
                sunlightHoursPerYear: 'Varies by latitude, ~4,380 at pole',
                uvRadiation: 'Intense in summer due to ozone hole'
            },
            seasons: {
                summer: 'October to February',
                winter: 'March to September',
                transitionSpeed: 'Rapid, dramatic temperature swings'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Landforms Branch
        // ═══════════════════════════════════════════════════════════
        landforms: [
            {
                name: 'Ice Sheet',
                localName: 'Antarctic Ice Sheet',
                description: 'Largest single mass of ice on Earth',
                coverage: '98% of continent',
                averageThickness: '2,160 meters',
                maximumThickness: '4,776 meters (Terre Adélie)',
                volume: '26.5 million km³',
                seaLevelImpact: 'Would raise sea levels 58m if melted'
            },
            {
                name: 'Ice Shelves',
                localName: 'Floating Ice Platforms',
                description: 'Thick floating ice attached to coastline',
                majorShelves: ['Ross Ice Shelf', 'Filchner-Ronne Ice Shelf', 'Larsen Ice Shelf'],
                largestShelf: 'Ross Ice Shelf (487,000 km²)',
                thickness: '100-1,000 meters'
            },
            {
                name: 'Glaciers',
                localName: 'Ice Rivers',
                description: 'Rivers of ice flowing from interior to coast',
                majorGlaciers: ['Lambert Glacier', 'Beardmore Glacier', 'Byrd Glacier'],
                largestGlacier: 'Lambert Glacier (400 km long, 100 km wide)',
                flowSpeed: '0.5-3 km per year'
            },
            {
                name: 'Nunataks',
                localName: 'Mountain Peaks',
                description: 'Rocky peaks protruding through ice sheet',
                significance: 'Only exposed rock in most of interior',
                examples: ['Vinson Massif', 'Mount Erebus']
            },
            {
                name: 'Dry Valleys',
                localName: 'McMurdo Dry Valleys',
                description: 'Ice-free valleys with exposed rock and soil',
                area: '4,800 km²',
                significance: 'Most Mars-like environment on Earth',
                features: 'No snow, no ice, extremely dry'
            },
            {
                name: 'Subglacial Lakes',
                localName: 'Hidden Lakes',
                description: 'Lakes beneath the ice sheet',
                numberOfLakes: '400+ discovered',
                largestLake: 'Lake Vostok (15,690 km², 4th largest by volume)',
                depth: 'Up to 1,000m',
                isolation: 'Some isolated for millions of years'
            },
            {
                name: 'Transantarctic Mountains',
                localName: 'Mountain Range',
                description: 'Divides East and West Antarctica',
                length: '3,500 km',
                highestPeak: 'Mount Kirkpatrick (4,528m)',
                age: '500 million years old'
            },
            {
                name: 'Antarctic Peninsula',
                localName: 'Banana Belt',
                description: 'Warmest region of Antarctica',
                length: '1,300 km',
                width: '70-250 km',
                significance: 'Most accessible, most studied region'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Key Features & Landmarks
        // ═══════════════════════════════════════════════════════════
        features: [
            {
                name: 'South Pole',
                type: 'Geographic Marker',
                coordinates: [-90, 0],
                elevation: '2,835m',
                description: 'Southernmost point on Earth, all directions point north',
                station: 'Amundsen-Scott South Pole Station',
                temperature: 'Annual mean -49°C',
                sunlight: '6 months day, 6 months night'
            },
            {
                name: 'Vinson Massif',
                type: 'Mountain',
                coordinates: [-78.5254, -85.6171],
                elevation: '4,892m',
                description: 'Highest peak in Antarctica',
                firstClimbed: '1966',
                difficulty: 'Seven Summits challenge peak',
                climbingSeason: 'November-January'
            },
            {
                name: 'Mount Erebus',
                type: 'Volcano',
                coordinates: [-77.5283, 167.1533],
                elevation: '3,794m',
                description: 'Southernmost active volcano on Earth',
                lavaLake: 'Persistent lava lake since 1972',
                eruptions: 'Minor eruptions ongoing',
                discoveredBy: 'James Clark Ross, 1841'
            },
            {
                name: 'Ross Ice Shelf',
                type: 'Ice Shelf',
                coordinates: [-81.5, 175.0],
                area: '487,000 km²',
                description: 'Largest ice shelf on Earth, size of Spain',
                thickness: '100-750m',
                cliffsHeight: '15-50m above water',
                discoveredBy: 'James Clark Ross, 1841'
            },
            {
                name: 'Lake Vostok',
                type: 'Subglacial Lake',
                coordinates: [-77.5, 106.0],
                area: '15,690 km²',
                description: 'Largest known subglacial lake',
                depth: '510m',
                iceThicknessAbove: '3,769m',
                waterAge: '15-25 million years isolated',
                astrobiology: 'Potential analogue for Europa\'s ocean'
            },
            {
                name: 'McMurdo Dry Valleys',
                type: 'Ice-Free Region',
                coordinates: [-77.5, 162.0],
                area: '4,800 km²',
                description: 'Largest ice-free area in Antarctica',
                precipitation: '<100mm per year',
                significance: 'Mars analog for NASA research',
                features: 'Mummified seals, ventifacts, saline lakes'
            },
            {
                name: 'Antarctic Peninsula',
                type: 'Peninsula',
                coordinates: [-64.2, -60.0],
                length: '1,300 km',
                description: 'Most accessible and warmest region',
                temperature: 'Summer can reach 15°C',
                wildlife: 'Richest in biodiversity',
                tourism: 'Primary destination for Antarctic tourism'
            },
            {
                name: 'Deception Island',
                type: 'Volcanic Caldera',
                coordinates: [-62.97, -60.65],
                description: 'Active volcano with flooded caldera harbor',
                lastEruption: '1970',
                feature: 'Geothermally heated beaches',
                activity: 'Hot springs for swimming'
            },
            {
                name: 'Blood Falls',
                type: 'Geological Feature',
                coordinates: [-77.717, 162.267],
                description: 'Red-colored outflow from Taylor Glacier',
                cause: 'Iron-rich hypersaline water oxidizing on contact with air',
                waterSource: 'Ancient subglacial lake, 2 million years old',
                significance: 'Contains living microbes, astrobiology interest'
            },
            {
                name: 'Gamburtsev Mountains',
                type: 'Subglacial Mountains',
                coordinates: [-81.0, 76.0],
                elevation: '2,700m peaks (under 600m ice)',
                description: 'Mountain range completely buried under ice',
                length: '1,200 km',
                discovery: 'Discovered by seismic surveys, 1958',
                age: 'Over 1 billion years old'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Water Sources (No Oases - Research Stations)
        // ═══════════════════════════════════════════════════════════
        waterSources: [
            {
                name: 'Lake Vostok',
                type: 'Subglacial Lake',
                coordinates: [-77.5, 106.0],
                description: 'Liquid water under 4km of ice',
                volume: '5,400 km³',
                significance: 'Largest subglacial lake'
            },
            {
                name: 'Lake Whillans',
                type: 'Subglacial Lake',
                coordinates: [-84.24, -153.7],
                description: 'Active subglacial water system',
                discovery: '2013 drilling confirmed life',
                significance: 'First subglacial lake directly sampled'
            },
            {
                name: 'Don Juan Pond',
                type: 'Hypersaline Pond',
                coordinates: [-77.563, 161.191],
                description: 'Saltiest body of water on Earth (40% salinity)',
                liquidState: 'Remains liquid at -50°C',
                size: 'Only 10cm deep, 300m x 100m'
            },
            {
                name: 'Lake Bonney',
                type: 'Perennially Ice-Covered Lake',
                coordinates: [-77.717, 162.45],
                description: 'Dry Valley lake with permanent ice cover',
                depth: '40m',
                salinity: 'Extremely saline lower layer'
            },
            {
                name: 'Meltwater Streams',
                type: 'Seasonal',
                description: 'Brief summer meltwater flows',
                duration: '4-10 weeks per year',
                location: 'Coastal areas and dry valleys'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Research Stations (Instead of Cities)
        // ═══════════════════════════════════════════════════════════
        researchStations: [
            {
                name: 'McMurdo Station',
                country: 'United States',
                coordinates: [-77.846, 166.668],
                population: '1,200 summer / 200 winter',
                established: 1956,
                description: 'Largest Antarctic research station',
                facilities: 'Airport, harbor, 100+ buildings',
                focus: 'Multi-disciplinary research hub'
            },
            {
                name: 'Amundsen-Scott South Pole Station',
                country: 'United States',
                coordinates: [-90, 0],
                population: '150 summer / 50 winter',
                established: 1956,
                description: 'Station at geographic South Pole',
                elevation: '2,835m',
                focus: 'Astrophysics, glaciology, climate'
            },
            {
                name: 'Vostok Station',
                country: 'Russia',
                coordinates: [-78.464, 106.837],
                population: '25 winter / 50 summer',
                established: 1957,
                description: 'Coldest place on Earth record holder',
                elevation: '3,488m',
                focus: 'Ice cores, subglacial Lake Vostok'
            },
            {
                name: 'Concordia Station',
                country: 'France/Italy',
                coordinates: [-75.1, 123.35],
                population: '15 winter / 80 summer',
                established: 2005,
                description: 'Remote plateau station',
                elevation: '3,233m',
                focus: 'Astronomy, glaciology, human physiology'
            },
            {
                name: 'Casey Station',
                country: 'Australia',
                coordinates: [-66.28, 110.53],
                population: '70 summer / 20 winter',
                established: 1969,
                description: 'Australian research station',
                focus: 'Climate change, marine biology'
            },
            {
                name: 'Mawson Station',
                country: 'Australia',
                coordinates: [-67.6, 62.87],
                population: '60 summer / 20 winter',
                established: 1954,
                description: 'Oldest continuously occupied Australian station',
                focus: 'Upper atmosphere physics, biology'
            },
            {
                name: 'Palmer Station',
                country: 'United States',
                coordinates: [-64.774, -64.053],
                population: '44 summer / 15 winter',
                established: 1968,
                description: 'Only US station north of Antarctic Circle',
                focus: 'Marine biology, seabirds'
            },
            {
                name: 'Rothera Station',
                country: 'United Kingdom',
                coordinates: [-67.567, -68.125],
                population: '120 summer / 20 winter',
                established: 1975,
                description: 'British Antarctic Survey main base',
                facilities: 'Runway, wharf, extensive labs',
                focus: 'Climate, marine ecology'
            },
            {
                name: 'Neumayer Station III',
                country: 'Germany',
                coordinates: [-70.65, -8.25],
                population: '50 summer / 9 winter',
                established: 2009,
                description: 'Elevated station on ice shelf',
                focus: 'Geophysics, meteorology, air chemistry'
            },
            {
                name: 'Kunlun Station',
                country: 'China',
                coordinates: [-80.42, 77.12],
                population: 'Summer only (28)',
                established: 2009,
                description: 'At Dome A, highest point on ice sheet',
                elevation: '4,087m',
                focus: 'Astronomy, glaciology'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Biodiversity Branch
        // ═══════════════════════════════════════════════════════════
        biodiversity: {
            overview: 'Limited terrestrial life, rich marine ecosystem',
            
            plants: [
                {
                    name: 'Antarctic Hairgrass',
                    scientificName: 'Deschampsia antarctica',
                    description: 'One of only two flowering plants native to Antarctica',
                    location: 'Antarctic Peninsula',
                    adaptation: 'Antifreeze proteins in cells'
                },
                {
                    name: 'Antarctic Pearlwort',
                    scientificName: 'Colobanthus quitensis',
                    description: 'Second of two native flowering plants',
                    location: 'Antarctic Peninsula and islands',
                    adaptation: 'Cushion growth form conserves heat'
                },
                {
                    name: 'Mosses',
                    scientificName: 'Various species (100+)',
                    description: 'Form carpets in ice-free areas',
                    location: 'Coastal regions, Dry Valleys edges',
                    adaptation: 'Can survive complete desiccation'
                },
                {
                    name: 'Lichens',
                    scientificName: 'Various species (400+)',
                    description: 'Most widespread vegetation',
                    location: 'Rock surfaces throughout',
                    adaptation: 'Photosynthesis at -10°C, dormant at -60°C',
                    age: 'Some colonies over 4,000 years old'
                },
                {
                    name: 'Algae',
                    scientificName: 'Including Chlamydomonas nivalis',
                    description: 'Snow algae creating pink/red patches',
                    location: 'Snow surfaces, lakes, sea ice',
                    adaptation: 'Contains antifreeze compounds'
                }
            ],
            
            animals: [
                {
                    name: 'Emperor Penguin',
                    scientificName: 'Aptenodytes forsteri',
                    description: 'Largest penguin, breeds in Antarctic winter',
                    population: '595,000 breeding pairs',
                    adaptation: 'Huddles to conserve heat, fasts 4 months',
                    diet: 'Fish, squid, krill',
                    status: 'Near Threatened'
                },
                {
                    name: 'Adélie Penguin',
                    scientificName: 'Pygoscelis adeliae',
                    description: 'Most numerous penguin in Antarctica',
                    population: '5 million breeding pairs',
                    adaptation: 'Dense feathers, counter-current blood flow',
                    diet: 'Primarily krill',
                    status: 'Least Concern'
                },
                {
                    name: 'Leopard Seal',
                    scientificName: 'Hydrurga leptonyx',
                    description: 'Top predator of Antarctic fauna',
                    population: '220,000-440,000',
                    adaptation: 'Powerful jaws, streamlined body',
                    diet: 'Penguins, seals, fish, krill',
                    status: 'Least Concern'
                },
                {
                    name: 'Weddell Seal',
                    scientificName: 'Leptonychotes weddellii',
                    description: 'Southernmost breeding mammal',
                    population: '800,000',
                    adaptation: 'Can dive 600m, hold breath 80 minutes',
                    diet: 'Fish, squid, invertebrates',
                    status: 'Least Concern'
                },
                {
                    name: 'Antarctic Krill',
                    scientificName: 'Euphausia superba',
                    description: 'Keystone species of Antarctic ecosystem',
                    population: '500 million tonnes',
                    adaptation: 'Shrinks body size when food scarce',
                    significance: 'Base of Antarctic food web',
                    status: 'Not assessed (superabundant)'
                },
                {
                    name: 'Wandering Albatross',
                    scientificName: 'Diomedea exulans',
                    description: 'Largest wingspan of any bird (3.5m)',
                    population: '8,114 breeding pairs',
                    adaptation: 'Dynamic soaring, can travel 10,000km per trip',
                    diet: 'Squid, fish, ship waste',
                    status: 'Vulnerable'
                },
                {
                    name: 'Antarctic Midge',
                    scientificName: 'Belgica antarctica',
                    description: 'Largest purely terrestrial animal in Antarctica',
                    size: '2-6mm',
                    adaptation: 'Survives freezing, dehydration, lacks wings',
                    lifecycle: 'Lives 2 years',
                    status: 'Endemic, only insect'
                },
                {
                    name: 'Orca (Killer Whale)',
                    scientificName: 'Orcinus orca',
                    description: 'Apex predator of Antarctic waters',
                    population: '25,000 in Southern Ocean',
                    adaptation: 'Cooperative hunting, wave washing seals off ice',
                    ecotypes: 'Type A, B, C, D (distinct populations)',
                    status: 'Data Deficient'
                }
            ],
            
            marineLife: [
                { name: 'Antarctic Toothfish', description: 'Deep water fish, source of "Chilean Sea Bass"' },
                { name: 'Icefish', description: 'Only vertebrates with no hemoglobin (clear blood)' },
                { name: 'Colossal Squid', description: 'Largest squid species by mass' },
                { name: 'Antarctic Sponges', description: 'Some over 1,000 years old' },
                { name: 'Sea Spiders', description: 'Giant varieties due to polar gigantism' }
            ],
            
            microorganisms: [
                { name: 'Extremophile Bacteria', description: 'Survive in subglacial lakes, ice cores' },
                { name: 'Tardigrades', description: 'Microscopic animals survive extreme cold' },
                { name: 'Nematodes', description: 'Soil nematodes in Dry Valleys' }
            ],
            
            endangeredSpecies: [
                { name: 'Blue Whale', status: 'Endangered', population: '~3,000 in Southern Ocean' },
                { name: 'Fin Whale', status: 'Vulnerable', population: 'Recovering slowly' },
                { name: 'Emperor Penguin', status: 'Near Threatened', threat: 'Climate change reducing sea ice' }
            ],
            
            extinctSpecies: [
                { name: 'None known', notes: 'However, fossils show tropical forests existed 50 million years ago' }
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Human Presence Branch
        // ═══════════════════════════════════════════════════════════
        humanLife: {
            overview: 'No permanent population; research stations and tourism only',
            
            permanentPopulation: 0,
            summerPopulation: '4,000-5,000 researchers + 30,000-50,000 tourists',
            winterPopulation: '1,000 researchers',
            
            governance: {
                treaty: 'Antarctic Treaty System (1959)',
                signatories: 54,
                principles: ['Scientific cooperation', 'No military activity', 'No territorial claims pursued'],
                protection: 'Madrid Protocol (1991) - Environmental protection'
            },
            
            nationalClaims: [
                { country: 'Argentina', sector: 'Argentine Antarctica' },
                { country: 'Australia', sector: 'Australian Antarctic Territory (42%)' },
                { country: 'Chile', sector: 'Chilean Antarctic Territory' },
                { country: 'France', sector: 'Adélie Land' },
                { country: 'New Zealand', sector: 'Ross Dependency' },
                { country: 'Norway', sector: 'Queen Maud Land' },
                { country: 'United Kingdom', sector: 'British Antarctic Territory' }
            ],
            
            researchNations: 30,
            activeStations: 70,
            
            historicalExploration: [
                { year: 1820, event: 'First confirmed sighting (Russian, British, American claims)' },
                { year: 1895, event: 'First confirmed landing (Norwegian)' },
                { year: 1911, event: 'South Pole reached by Amundsen' },
                { year: 1912, event: 'Scott reaches pole, dies on return' },
                { year: 1914, event: 'Shackleton\'s Endurance expedition' },
                { year: 1956, event: 'First permanent stations established' },
                { year: 1959, event: 'Antarctic Treaty signed' }
            ],
            
            tourism: {
                annualVisitors: '74,000 (2019-20 season)',
                mainActivities: ['Penguin watching', 'Zodiac cruises', 'Camping', 'Kayaking'],
                primaryDestination: 'Antarctic Peninsula',
                cruisePorts: ['Ushuaia (Argentina)', 'Hobart (Australia)', 'Christchurch (New Zealand)'],
                season: 'November to March'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Scientific Importance Branch
        // ═══════════════════════════════════════════════════════════
        scientificImportance: [
            {
                field: 'Climate Research',
                description: 'Ice cores provide 800,000 years of climate data',
                keyFindings: 'CO2 levels correlation with temperature'
            },
            {
                field: 'Astronomy',
                description: 'Clearest, driest skies on Earth',
                facilities: 'South Pole Telescope, IceCube Neutrino Observatory'
            },
            {
                field: 'Astrobiology',
                description: 'Extreme environments analog for extraterrestrial life',
                relevance: 'Lake Vostok similar to Europa\'s subsurface ocean'
            },
            {
                field: 'Ozone Research',
                description: 'Ozone hole discovered here in 1985',
                monitoring: 'Continuous ozone layer monitoring'
            },
            {
                field: 'Glaciology',
                description: 'Understanding ice sheet dynamics and sea level rise',
                importance: 'Contains 70% of Earth\'s fresh water'
            },
            {
                field: 'Marine Biology',
                description: 'Unique ecosystem isolated for millions of years',
                discoveries: 'Antifreeze proteins in fish blood'
            },
            {
                field: 'Meteorite Collection',
                description: 'Dark rocks easily visible on white ice',
                collection: 'Over 40,000 meteorites found',
                significance: 'Includes Martian meteorites'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Environmental Issues Branch
        // ═══════════════════════════════════════════════════════════
        environmentalIssues: [
            {
                issue: 'Climate Change',
                severity: 'Critical',
                description: 'Warming faster than global average',
                impacts: [
                    'Ice sheet melting accelerating',
                    'Ice shelves collapsing (Larsen A, B)',
                    'Penguin colony disruption',
                    'Sea level rise potential'
                ],
                data: 'Peninsula has warmed 3°C since 1950'
            },
            {
                issue: 'Sea Ice Decline',
                severity: 'High',
                description: 'Reduced sea ice affecting wildlife',
                impacts: [
                    'Krill population decline',
                    'Penguin breeding failure',
                    'Seal haul-out areas reduced'
                ],
                data: 'Sea ice at historic lows in recent years'
            },
            {
                issue: 'Ocean Acidification',
                severity: 'High',
                description: 'CO2 absorption making waters more acidic',
                impacts: [
                    'Shell-forming organisms affected',
                    'Pteropods (sea butterflies) dissolving',
                    'Food web disruption'
                ]
            },
            {
                issue: 'Invasive Species',
                severity: 'Moderate',
                description: 'Non-native species arriving via ships and supplies',
                examples: [
                    'Plant seeds on clothing/equipment',
                    'Marine organisms on ship hulls',
                    'Rats (eradicated from South Georgia)'
                ],
                prevention: 'Strict biosecurity protocols'
            },
            {
                issue: 'Tourism Impact',
                severity: 'Moderate',
                description: 'Growing tourism pressure on fragile ecosystems',
                concerns: [
                    'Wildlife disturbance',
                    'Pathway erosion',
                    'Pollution potential'
                ],
                regulation: 'IAATO guidelines, visitor limits'
            },
            {
                issue: 'Ozone Hole',
                severity: 'Recovering',
                description: 'Antarctic ozone layer thinning',
                status: 'Slowly recovering since CFC ban',
                impacts: 'Increased UV affecting phytoplankton',
                recovery: 'Expected by 2060-2070'
            },
            {
                issue: 'Microplastics',
                severity: 'Emerging',
                description: 'Microplastics found in Antarctic snow and sea ice',
                sources: 'Ocean currents, atmospheric transport',
                research: 'Ongoing study of impacts'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Historical Importance Branch
        // ═══════════════════════════════════════════════════════════
        historicalImportance: [
            {
                era: 'Prehistoric',
                title: 'Ancient Supercontinent',
                description: 'Part of Gondwana supercontinent until 25 million years ago',
                evidence: 'Fossils of tropical plants and dinosaurs'
            },
            {
                era: '1773',
                title: 'First Crossing of Antarctic Circle',
                description: 'Captain James Cook first to cross Antarctic Circle',
                significance: 'Proved existence of southern continent possible'
            },
            {
                era: '1820',
                title: 'Discovery',
                description: 'First confirmed sightings of Antarctic mainland',
                claimants: 'Fabian von Bellingshausen (Russia), Edward Bransfield (UK), Nathaniel Palmer (USA)'
            },
            {
                era: '1899-1900',
                title: 'First Winter',
                description: 'Southern Cross expedition first to winter on continent',
                leader: 'Carsten Borchgrevink'
            },
            {
                era: '1911',
                title: 'Race to the Pole',
                description: 'Roald Amundsen reaches South Pole on December 14',
                method: 'Dog sleds, careful planning',
                route: 'Bay of Whales via Axel Heiberg Glacier'
            },
            {
                era: '1912',
                title: 'Scott\'s Tragedy',
                description: 'Robert Falcon Scott reaches pole, all perish on return',
                date: 'January 17, 1912',
                death: 'March 1912, blizzard trapped team'
            },
            {
                era: '1914-1916',
                title: 'Endurance Expedition',
                description: 'Shackleton\'s ship crushed by ice, epic survival story',
                duration: '22 months stranded',
                outcome: 'All 28 crew survived'
            },
            {
                era: '1929',
                title: 'First Flights',
                description: 'Richard Byrd claims first flight over South Pole',
                significance: 'Aviation age begins in Antarctica'
            },
            {
                era: '1959',
                title: 'Antarctic Treaty',
                description: 'International agreement preserving Antarctica for peace and science',
                signatories: '12 original, now 54',
                provisions: 'No military, no claims, free science'
            },
            {
                era: '1991',
                title: 'Madrid Protocol',
                description: 'Environmental protection protocol banning mining',
                duration: 'Minimum 50 years (until 2048)',
                designation: 'Designated as natural reserve'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Fun Facts Branch
        // ═══════════════════════════════════════════════════════════
        funFacts: [
            {
                fact: 'Antarctica contains 70% of Earth\'s fresh water, but is technically a desert',
                category: 'Paradox'
            },
            {
                fact: 'The coldest temperature ever recorded was -89.2°C at Vostok Station',
                category: 'Record'
            },
            {
                fact: 'Antarctica has no time zones - research stations use the time zone of their home country',
                category: 'Geography'
            },
            {
                fact: 'If all Antarctic ice melted, global sea levels would rise by 58 meters',
                category: 'Scale'
            },
            {
                fact: 'Antarctica was once a tropical forest with dinosaurs',
                category: 'History'
            },
            {
                fact: 'There are ATMs in Antarctica at McMurdo Station',
                category: 'Modern Life'
            },
            {
                fact: 'The Antarctic Treaty bans military activity, making it the only demilitarized continent',
                category: 'Politics'
            },
            {
                fact: 'Fire is one of the biggest dangers - air is so dry that fires spread quickly',
                category: 'Hazard'
            },
            {
                fact: 'You cannot work in Antarctica unless your wisdom teeth and appendix are removed',
                category: 'Requirement'
            },
            {
                fact: 'The ice sheet is so heavy it has pushed the land below sea level',
                category: 'Geology'
            },
            {
                fact: 'There is a marathon held in Antarctica each year',
                category: 'Events'
            },
            {
                fact: 'McMurdo Station has a chapel, bars, and a bowling alley',
                category: 'Community'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // JOURNEY WAYPOINTS - Cross the Desert Feature
        // ═══════════════════════════════════════════════════════════
        journeyWaypoints: [
            {
                name: 'Antarctic Peninsula',
                coordinates: [-64.2, -60.0],
                description: 'Starting from the warmest region, gateway to Antarctica',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Elephant Island',
                coordinates: [-61.1, -55.1],
                description: 'Where Shackleton\'s crew survived for 4 months',
                type: 'historical',
                duration: 3000
            },
            {
                name: 'Ross Ice Shelf',
                coordinates: [-81.5, 175.0],
                description: 'The great ice barrier - size of Spain',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Mount Erebus',
                coordinates: [-77.5283, 167.1533],
                description: 'Active volcano with permanent lava lake',
                type: 'landmark',
                duration: 3000
            },
            {
                name: 'McMurdo Dry Valleys',
                coordinates: [-77.5, 162.0],
                description: 'Most Mars-like place on Earth',
                type: 'scientific',
                duration: 3000
            },
            {
                name: 'Transantarctic Mountains',
                coordinates: [-83.0, 160.0],
                description: 'Crossing the mountain range dividing the continent',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Polar Plateau',
                coordinates: [-85.0, 120.0],
                description: 'The vast interior ice sheet, 3,000m elevation',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'South Pole',
                coordinates: [-90, 0],
                description: 'The southernmost point on Earth - all directions are north!',
                type: 'end',
                duration: 5000
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // QUICK FACTS - Profile Page Bottom Panel
        // ═══════════════════════════════════════════════════════════
        quickFacts: {
            area: '14,200,000 km²',
            type: 'Polar Desert',
            avgTemp: '-49°C (interior)',
            rainfall: '<50mm/year',
            countries: 'None (7 claimants)',
            population: '1,000-5,000 (seasonal)'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #2 - ARCTIC DESERT (Second Largest)
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'arctic-desert',
        name: 'Arctic Desert',
        subtitle: 'The Northern Ice Realm',
        countries: [
            { name: 'Canada', code: 'CA' },
            { name: 'Russia', code: 'RU' },
            { name: 'United States', code: 'US' },
            { name: 'Denmark/Greenland', code: 'GL' },
            { name: 'Norway', code: 'NO' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Finland', code: 'FI' },
            { name: 'Iceland', code: 'IS' }
        ],
        continent: 'Arctic',
        desertType: 'cold',
        subType: 'Polar Desert',
        area: 13900000,
        areaRank: 2,
        rank: 2,
        coordinates: [90, 0],
        defaultZoom: 2,
        
        image: 'https://images.unsplash.com/photo-1518173946687-a27d8a944837?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518173946687-a27d8a944837?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
            'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
            'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Arctic Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, 66.5], [-180, 90], [180, 90], [180, 66.5],
                    [170, 70], [150, 68], [120, 67], [90, 68],
                    [60, 70], [30, 72], [0, 71], [-30, 68],
                    [-60, 65], [-90, 67], [-120, 70], [-150, 72], [-180, 66.5]
                ]]
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Location Branch
        // ═══════════════════════════════════════════════════════════
        location: {
            continent: 'Arctic (spans multiple continents)',
            hemispheres: ['Northern'],
            latitudeRange: '66.5°N to 90°N (north of Arctic Circle)',
            longitudeRange: '180°W to 180°E (circumpolar)',
            geographicCenter: 'North Pole (90°N)',
            totalCountries: 8,
            borderingOceans: ['Arctic Ocean'],
            borderingBodies: ['Bering Sea', 'Norwegian Sea', 'Barents Sea', 'Kara Sea', 'Laptev Sea', 'Beaufort Sea'],
            definition: 'Area north of Arctic Circle (66°34\'N) or area above 10°C July isotherm',
            landArea: '8 million km² (land)',
            oceanArea: '14 million km² (total including ocean)'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Desert Type Branch
        // ═══════════════════════════════════════════════════════════
        desertClassification: {
            primaryType: 'Polar Desert',
            secondaryType: 'Cold Desert',
            climateClassification: 'ET (Tundra) & EF (Ice Cap)',
            formationCauses: [
                {
                    cause: 'Extreme Cold',
                    explanation: 'Cold air cannot hold much moisture'
                },
                {
                    cause: 'High Pressure System',
                    explanation: 'Polar high prevents moist air from entering'
                },
                {
                    cause: 'Distance from Moisture',
                    explanation: 'Central Arctic far from open ocean sources'
                },
                {
                    cause: 'Ice Cover',
                    explanation: 'Sea ice prevents evaporation from ocean'
                }
            ],
            whyItsDesert: 'Annual precipitation under 250mm qualifies as desert despite ice and snow presence',
            keyDifference: 'Unlike Antarctic, Arctic is frozen ocean (no continental landmass at pole)'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Size & Scale Branch
        // ═══════════════════════════════════════════════════════════
        size: {
            totalArea: 13900000,
            areaUnit: 'km²',
            landArea: 8000000,
            oceanArea: 5900000,
            areaInMiles: 5366800,
            percentOfEarthSurface: 2.7,
            comparisonToCountries: [
                'Land area equals USA',
                'Total area 1.4x USA',
                '56x United Kingdom'
            ],
            ranking: {
                amongDeserts: 2,
                totalDeserts: 50,
                statement: 'Second largest desert on Earth'
            },
            seaIceExtent: {
                winterMax: '15.5 million km²',
                summerMin: '4.5 million km²'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Climate Branch
        // ═══════════════════════════════════════════════════════════
        climate: {
            overview: 'Extremely cold winters, brief cool summers, 24-hour daylight/darkness cycles',
            temperatureData: {
                summerHigh: {
                    coastal: '10°C to 15°C',
                    interior: '0°C to 5°C'
                },
                winterLow: {
                    coastal: '-20°C to -30°C',
                    interior: '-40°C to -55°C'
                },
                annualMean: {
                    coastalAlaska: '-12°C',
                    centralArctic: '-30°C'
                },
                extremeRecords: {
                    coldestEver: '-69.8°C (Klinck, Greenland, 1991)',
                    coldestSettlement: '-67.8°C (Oymyakon, Russia)',
                    warmestArctic: '38°C (Verkhoyansk, Russia, 2020)'
                }
            },
            precipitation: {
                annualAverage: '150-250mm (desert classification)',
                coastalAverage: '400-500mm',
                type: 'Mostly snow, some summer rain',
                snowfall: '50-100cm annually',
                humidity: 'Very low in winter'
            },
            wind: {
                averageSpeed: '15-25 km/h',
                blizzardFrequency: 'Common in winter',
                windChillEffect: 'Severe, frostbite in minutes'
            },
            sunlight: {
                polarDay: 'Up to 6 months continuous daylight',
                polarNight: 'Up to 6 months continuous darkness',
                twilightPeriod: 'Weeks of twilight between seasons'
            },
            seasons: {
                summer: 'June to August',
                winter: 'October to April',
                brief: 'Only 2-3 months above freezing'
            },
            permafrost: {
                coverage: '25% of Northern Hemisphere land',
                depth: 'Up to 1,500m in Siberia',
                activeLayer: 'Top 0.3-4m thaws seasonally'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Landforms Branch
        // ═══════════════════════════════════════════════════════════
        landforms: [
            {
                name: 'Arctic Ocean',
                description: 'Smallest and shallowest ocean, mostly covered by sea ice',
                area: '14.06 million km²',
                averageDepth: '1,205m',
                significance: 'Only ocean to be mostly covered by ice'
            },
            {
                name: 'Sea Ice',
                localName: 'Pack Ice / Ice Pack',
                description: 'Frozen ocean surface, varies seasonally',
                winterExtent: '15.5 million km²',
                summerExtent: '4.5 million km²',
                thickness: 'Multi-year ice up to 4m'
            },
            {
                name: 'Tundra',
                description: 'Treeless plain with permafrost, grasses, mosses',
                coverage: '5.6 million km²',
                characteristics: 'Permafrost prevents trees, boggy in summer'
            },
            {
                name: 'Greenland Ice Sheet',
                description: 'Second largest ice body on Earth',
                area: '1.71 million km²',
                thickness: 'Up to 3,000m',
                seaLevelImpact: 'Would raise sea level 7m if melted'
            },
            {
                name: 'Arctic Islands',
                description: 'Thousands of islands in Arctic Ocean',
                majorGroups: ['Canadian Arctic Archipelago', 'Svalbard', 'Franz Josef Land', 'Novaya Zemlya'],
                largestIsland: 'Greenland (2.16 million km²)'
            },
            {
                name: 'Fjords',
                description: 'Deep glacially-carved coastal inlets',
                locations: 'Greenland, Norway, Canada, Svalbard',
                depth: 'Up to 1,308m (Scoresby Sund)'
            },
            {
                name: 'Pingos',
                description: 'Ice-cored hills unique to Arctic',
                height: 'Up to 70m',
                formation: 'Water freezes and expands underground',
                location: 'Canada, Siberia'
            },
            {
                name: 'Thermokarst',
                description: 'Landscape formed by melting permafrost',
                features: 'Sinkholes, lakes, uneven terrain',
                trend: 'Increasing due to climate change'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Key Features & Landmarks
        // ═══════════════════════════════════════════════════════════
        features: [
            {
                name: 'North Pole',
                type: 'Geographic Marker',
                coordinates: [90, 0],
                description: 'Northernmost point on Earth, located on sea ice over Arctic Ocean',
                depth: '4,261m of water beneath',
                seaIce: 'Drifting ice, no permanent marking possible',
                firstReached: 'Disputed - Peary (1909), or later expeditions'
            },
            {
                name: 'Greenland Ice Sheet',
                type: 'Ice Sheet',
                coordinates: [72, -40],
                area: '1,710,000 km²',
                description: 'Second largest ice body after Antarctic ice sheet',
                thickness: 'Average 2,135m',
                age: 'Ice up to 130,000 years old at base'
            },
            {
                name: 'Northwest Passage',
                type: 'Sea Route',
                coordinates: [74, -95],
                description: 'Sea route through Canadian Arctic connecting Atlantic and Pacific',
                length: '1,450 km',
                history: 'First navigated by Amundsen (1903-1906)',
                status: 'Increasingly ice-free due to climate change'
            },
            {
                name: 'Northern Sea Route',
                type: 'Sea Route',
                coordinates: [75, 140],
                description: 'Russian Arctic shipping route along Siberian coast',
                length: '5,600 km',
                advantage: '40% shorter than Suez Canal route to Asia',
                status: 'Navigable 2-4 months per year'
            },
            {
                name: 'Svalbard',
                type: 'Archipelago',
                coordinates: [78, 16],
                description: 'Norwegian archipelago, northernmost permanent settlement',
                population: '2,900',
                feature: 'Svalbard Global Seed Vault',
                wildlife: 'More polar bears than people'
            },
            {
                name: 'Ellesmere Island',
                type: 'Island',
                coordinates: [80, -80],
                area: '196,236 km²',
                description: 'Northernmost island of Canada, extreme Arctic environment',
                features: 'Ice shelves, fjords, glaciers',
                highPoint: 'Barbeau Peak (2,616m)'
            },
            {
                name: 'Alert, Nunavut',
                type: 'Settlement',
                coordinates: [82.5, -62.3],
                description: 'Northernmost permanently inhabited place on Earth',
                population: '62 (military/research)',
                distance: '817 km from North Pole'
            },
            {
                name: 'Lomonosov Ridge',
                type: 'Underwater Ridge',
                coordinates: [88, 140],
                length: '1,800 km',
                description: 'Underwater mountain range crossing Arctic Ocean',
                depth: 'Rises to 954m below surface',
                significance: 'Subject of territorial claims (Russia, Canada, Denmark)'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Major Arctic Regions
        // ═══════════════════════════════════════════════════════════
        majorRegions: [
            {
                name: 'Canadian Arctic',
                countries: ['Canada'],
                area: '3,850,000 km²',
                description: 'Largest Arctic archipelago, Inuit homeland',
                features: ['36,563 islands', 'Northwest Passage', 'Permafrost']
            },
            {
                name: 'Russian Arctic',
                countries: ['Russia'],
                area: '3,100,000 km²',
                description: 'Longest Arctic coastline, rich in resources',
                features: ['Siberian coast', 'Franz Josef Land', 'Northern Sea Route']
            },
            {
                name: 'Greenland',
                countries: ['Denmark'],
                area: '2,166,086 km²',
                description: 'World\'s largest island, 80% ice-covered',
                features: ['Ice sheet', 'Calving glaciers', 'Inuit culture']
            },
            {
                name: 'Svalbard',
                countries: ['Norway'],
                area: '61,022 km²',
                description: 'High Arctic archipelago with international status',
                features: ['Polar bears', 'Seed vault', 'Research stations']
            },
            {
                name: 'Alaska Arctic',
                countries: ['United States'],
                area: '240,000 km²',
                description: 'Northernmost US territory, Prudhoe Bay oil fields',
                features: ['North Slope', 'ANWR', 'Inupiat communities']
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Cities & Settlements
        // ═══════════════════════════════════════════════════════════
        cities: [
            {
                name: 'Murmansk',
                coordinates: [68.97, 33.09],
                country: 'Russia',
                population: 287000,
                description: 'Largest city above Arctic Circle',
                features: 'Ice-free port year-round due to Gulf Stream'
            },
            {
                name: 'Tromsø',
                coordinates: [69.65, 18.96],
                country: 'Norway',
                population: 77000,
                description: 'Major Arctic research hub',
                features: 'Arctic University, Northern Lights tourism'
            },
            {
                name: 'Norilsk',
                coordinates: [69.35, 88.2],
                country: 'Russia',
                population: 177000,
                description: 'Major mining city, heavy metal extraction',
                notoriety: 'Most polluted city in Russia'
            },
            {
                name: 'Longyearbyen',
                coordinates: [78.22, 15.63],
                country: 'Norway (Svalbard)',
                population: 2400,
                description: 'Northernmost town with over 1,000 residents',
                features: 'No one allowed to die here (permanently frozen bodies)'
            },
            {
                name: 'Iqaluit',
                coordinates: [63.75, -68.52],
                country: 'Canada',
                population: 7740,
                description: 'Capital of Nunavut territory',
                features: 'Inuit-majority city, gateway to Canadian Arctic'
            },
            {
                name: 'Barrow (Utqiagvik)',
                coordinates: [71.29, -156.79],
                country: 'United States',
                population: 4500,
                description: 'Northernmost city in USA',
                features: '65 days of midnight sun, 65 days of polar night'
            },
            {
                name: 'Nuuk',
                coordinates: [64.17, -51.74],
                country: 'Greenland (Denmark)',
                population: 19000,
                description: 'Capital and largest city of Greenland',
                features: 'Cultural center, colorful houses'
            },
            {
                name: 'Hammerfest',
                coordinates: [70.66, 23.68],
                country: 'Norway',
                population: 10900,
                description: 'Claims title of northernmost city in the world',
                history: 'First European city with electric street lights'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Biodiversity Branch
        // ═══════════════════════════════════════════════════════════
        biodiversity: {
            overview: 'Rich wildlife adapted to extreme cold, dependent on sea ice',
            
            plants: [
                {
                    name: 'Arctic Willow',
                    scientificName: 'Salix arctica',
                    description: 'Grows only 15cm tall, oldest is 236 years',
                    adaptation: 'Grows horizontally to avoid wind'
                },
                {
                    name: 'Arctic Poppy',
                    scientificName: 'Papaver radicatum',
                    description: 'Northernmost flowering plant',
                    adaptation: 'Yellow flowers track sun for warmth'
                },
                {
                    name: 'Cotton Grass',
                    scientificName: 'Eriophorum',
                    description: 'Characteristic tundra plant',
                    adaptation: 'White fluffy seed heads disperse in wind'
                },
                {
                    name: 'Lichens',
                    description: 'Dominant vegetation in polar desert',
                    species: 'Over 600 species in Arctic',
                    adaptation: 'Survive extreme cold and desiccation'
                },
                {
                    name: 'Mosses',
                    description: 'Form extensive carpets in tundra',
                    species: 'Over 400 species',
                    adaptation: 'Absorb nutrients from air due to poor soil'
                }
            ],
            
            animals: [
                {
                    name: 'Polar Bear',
                    scientificName: 'Ursus maritimus',
                    description: 'Largest land carnivore, apex predator',
                    population: '26,000',
                    adaptation: 'Black skin, hollow fur for insulation, swims vast distances',
                    diet: 'Primarily ringed seals',
                    status: 'Vulnerable',
                    threat: 'Sea ice loss'
                },
                {
                    name: 'Arctic Fox',
                    scientificName: 'Vulpes lagopus',
                    description: 'Survives temperatures to -50°C',
                    population: 'Hundreds of thousands',
                    adaptation: 'Thick fur, furry paw pads, small ears',
                    diet: 'Lemmings, birds, carrion',
                    status: 'Least Concern'
                },
                {
                    name: 'Muskox',
                    scientificName: 'Ovibos moschatus',
                    description: 'Ancient Arctic survivor, herd animal',
                    population: '80,000-125,000',
                    adaptation: 'Qiviut underwool (warmest natural fiber)',
                    behavior: 'Form defensive circle against predators',
                    status: 'Least Concern'
                },
                {
                    name: 'Caribou/Reindeer',
                    scientificName: 'Rangifer tarandus',
                    description: 'Only deer where both sexes have antlers',
                    population: '5 million wild, 3 million domesticated',
                    adaptation: 'Hollow fur, click-knees for herd tracking',
                    migration: 'Longest of any land mammal (5,000 km)',
                    status: 'Vulnerable (wild populations declining)'
                },
                {
                    name: 'Walrus',
                    scientificName: 'Odobenus rosmarus',
                    description: 'Tusked pinnipeds up to 1,500 kg',
                    population: '225,000',
                    adaptation: 'Tusks for hauling onto ice, thick blubber',
                    diet: 'Clams, mussels, bottom dwellers',
                    status: 'Vulnerable'
                },
                {
                    name: 'Narwhal',
                    scientificName: 'Monodon monoceros',
                    description: '"Unicorn of the sea" - male has spiral tusk',
                    population: '80,000',
                    adaptation: 'Tusk is sensory organ, no dorsal fin (for under-ice swimming)',
                    diet: 'Fish, squid, shrimp',
                    status: 'Near Threatened'
                },
                {
                    name: 'Beluga Whale',
                    scientificName: 'Delphinapterus leucas',
                    description: 'White whale, highly vocal ("canary of the sea")',
                    population: '200,000',
                    adaptation: 'Flexible neck, echolocation, no dorsal fin',
                    status: 'Least Concern'
                },
                {
                    name: 'Arctic Tern',
                    scientificName: 'Sterna paradisaea',
                    description: 'Longest migration of any animal',
                    migration: '70,000 km round trip (Arctic to Antarctic)',
                    lifespan: '30+ years',
                    status: 'Least Concern'
                },
                {
                    name: 'Snowy Owl',
                    scientificName: 'Bubo scandiacus',
                    description: 'Iconic Arctic predator, mostly white',
                    adaptation: 'Feathered feet, hunts 24 hours in summer',
                    diet: 'Lemmings (can eat 1,600 per year)',
                    status: 'Vulnerable'
                },
                {
                    name: 'Lemming',
                    scientificName: 'Various species',
                    description: 'Keystone prey species, population cycles',
                    adaptation: 'Active year-round under snow',
                    cycle: 'Population booms and crashes every 3-4 years',
                    status: 'Least Concern'
                }
            ],
            
            marineLife: [
                { name: 'Ringed Seal', description: 'Primary prey of polar bears' },
                { name: 'Bowhead Whale', description: 'Can live over 200 years' },
                { name: 'Arctic Cod', description: 'Key species in Arctic food web' },
                { name: 'Greenland Shark', description: 'Lives 400+ years, oldest vertebrate' }
            ],
            
            endangeredSpecies: [
                { name: 'Polar Bear', status: 'Vulnerable', threat: 'Sea ice loss from climate change' },
                { name: 'Bowhead Whale', status: 'Least Concern (recovering)', history: 'Hunted nearly to extinction' },
                { name: 'Narwhal', status: 'Near Threatened', threat: 'Climate change, hunting' }
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Human Life Branch
        // ═══════════════════════════════════════════════════════════
        humanLife: {
            overview: 'Indigenous peoples have lived in Arctic for 20,000+ years',
            
            permanentPopulation: 4000000,
            
            indigenousPeoples: [
                {
                    name: 'Inuit',
                    region: 'Canada, Greenland, Alaska',
                    population: '180,000',
                    lifestyle: 'Historically hunting (seal, whale, caribou)',
                    languages: 'Inuktitut, Inupiaq, Kalaallisut'
                },
                {
                    name: 'Yupik',
                    region: 'Alaska, Russia',
                    population: '35,000',
                    lifestyle: 'Coastal hunting, fishing',
                    languages: 'Yupik languages'
                },
                {
                    name: 'Sami',
                    region: 'Norway, Sweden, Finland, Russia',
                    population: '80,000-100,000',
                    lifestyle: 'Reindeer herding',
                    languages: 'Sami languages'
                },
                {
                    name: 'Nenets',
                    region: 'Russia',
                    population: '45,000',
                    lifestyle: 'Reindeer herding, nomadic',
                    languages: 'Nenets'
                },
                {
                    name: 'Chukchi',
                    region: 'Russia',
                    population: '16,000',
                    lifestyle: 'Coastal and reindeer herding',
                    languages: 'Chukchi'
                }
            ],
            
            traditionalLife: {
                housing: ['Igloo (temporary)', 'Sod houses', 'Skin tents', 'Modern houses'],
                transport: ['Dog sled', 'Kayak', 'Umiak', 'Snowmobile (modern)'],
                clothing: ['Caribou/seal skin', 'Fur parkas', 'Mukluks'],
                food: ['Seal', 'Whale', 'Caribou', 'Fish', 'Berries']
            },
            
            modernLife: {
                infrastructure: 'Limited roads, relies on air/sea transport',
                internet: 'Satellite internet expanding',
                challenges: ['High cost of living', 'Climate change impacts', 'Food security'],
                rights: 'Indigenous self-governance in many regions'
            },
            
            governance: {
                arcticCouncil: 'Intergovernmental forum (8 Arctic states)',
                established: 1996,
                focus: 'Environmental protection, indigenous peoples',
                observers: 'Many non-Arctic countries including China'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Economic Importance Branch
        // ═══════════════════════════════════════════════════════════
        economy: [
            {
                sector: 'Oil & Gas',
                description: 'Estimated 13% of world\'s undiscovered oil, 30% of gas',
                value: 'Hundreds of billions of dollars',
                locations: 'Prudhoe Bay (Alaska), Russian shelf, Norwegian Sea',
                controversy: 'Environmental risks, indigenous rights'
            },
            {
                sector: 'Mining',
                description: 'Rich mineral deposits accessible as ice retreats',
                resources: ['Zinc', 'Lead', 'Nickel', 'Rare earth elements', 'Gold', 'Diamonds'],
                locations: 'Russia, Canada, Greenland',
                value: 'Greenland rare earths worth potentially billions'
            },
            {
                sector: 'Shipping',
                description: 'Shorter routes as ice melts',
                routes: ['Northwest Passage', 'Northern Sea Route'],
                advantage: '40% shorter Europe-Asia route',
                growth: 'Traffic increasing yearly'
            },
            {
                sector: 'Fishing',
                description: 'Major fisheries moving north',
                species: 'Cod, pollock, shrimp, crab',
                concern: 'Overfishing, ecosystem change',
                value: 'Multi-billion dollar industry'
            },
            {
                sector: 'Tourism',
                description: 'Growing polar tourism industry',
                activities: ['Northern Lights', 'Polar expeditions', 'Wildlife viewing'],
                locations: 'Norway, Iceland, Canada, Russia, Svalbard',
                visitors: 'Over 5 million per year to Arctic regions'
            },
            {
                sector: 'Research',
                description: 'Billions invested in climate and scientific research',
                focus: 'Climate monitoring, biodiversity, indigenous knowledge',
                stations: 'Dozens of research stations across Arctic'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Environmental Issues Branch
        // ═══════════════════════════════════════════════════════════
        environmentalIssues: [
            {
                issue: 'Climate Change',
                severity: 'Critical',
                description: 'Arctic warming 2-3x faster than global average',
                impacts: [
                    'Sea ice declining 13% per decade',
                    'Ice-free summers predicted by 2050',
                    'Permafrost thawing releasing methane',
                    'Wildlife habitat loss'
                ],
                data: 'September sea ice extent halved since 1980'
            },
            {
                issue: 'Permafrost Thaw',
                severity: 'Critical',
                description: 'Permanently frozen ground melting',
                impacts: [
                    'Methane release (potent greenhouse gas)',
                    'Infrastructure damage (buildings, roads)',
                    'Ancient pathogens potentially released',
                    'Coastal erosion accelerating'
                ],
                data: '30-70% of surface permafrost may thaw by 2100'
            },
            {
                issue: 'Polar Bear Decline',
                severity: 'High',
                description: 'Iconic species losing hunting habitat',
                cause: 'Sea ice loss reducing access to seals',
                projection: '30% population decline by 2050',
                action: 'Listed as threatened species'
            },
            {
                issue: 'Ocean Acidification',
                severity: 'High',
                description: 'Cold water absorbs more CO2',
                impacts: ['Shell-forming species affected', 'Food web disruption']
            },
            {
                issue: 'Industrial Pollution',
                severity: 'Moderate',
                description: 'Oil spills, heavy metal contamination',
                examples: 'Norilsk oil spill 2020 (21,000 tonnes diesel)',
                legacy: 'Soviet-era pollution in Russian Arctic'
            },
            {
                issue: 'Plastic Pollution',
                severity: 'Moderate',
                description: 'Microplastics found in Arctic sea ice and wildlife',
                source: 'Ocean currents carrying plastics from populated areas'
            },
            {
                issue: 'Invasive Species',
                severity: 'Increasing',
                description: 'Warming allows species to move north',
                examples: 'Red king crab in Norway, killer whales ranging further north'
            },
            {
                issue: 'Geopolitical Tension',
                severity: 'Moderate',
                description: 'Increased competition for resources and routes',
                players: 'Russia, USA, Canada, China, NATO',
                concern: 'Militarization of Arctic'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Historical Importance Branch
        // ═══════════════════════════════════════════════════════════
        historicalImportance: [
            {
                era: '20,000 BCE',
                title: 'First Human Settlement',
                description: 'Humans cross into Americas via Bering land bridge',
                significance: 'Populating of the Americas'
            },
            {
                era: '982 CE',
                title: 'Viking Exploration',
                description: 'Erik the Red discovers Greenland',
                settlements: 'Norse settlements lasted 500 years'
            },
            {
                era: '1596',
                title: 'Barents Expedition',
                description: 'Willem Barents discovers Svalbard',
                outcome: 'First wintering in Arctic by Europeans'
            },
            {
                era: '1845',
                title: 'Franklin Expedition',
                description: 'Lost expedition seeking Northwest Passage',
                legacy: 'All 129 men perished, mystery lasted 170 years',
                discovery: 'Wrecks found 2014 and 2016'
            },
            {
                era: '1878-1879',
                title: 'Northeast Passage',
                description: 'Nordenskiöld first to navigate Northern Sea Route',
                ship: 'Vega'
            },
            {
                era: '1903-1906',
                title: 'Northwest Passage',
                description: 'Roald Amundsen first to navigate through Canadian Arctic',
                ship: 'Gjøa',
                duration: '3 years'
            },
            {
                era: '1909',
                title: 'North Pole Claim',
                description: 'Robert Peary claims to reach North Pole',
                controversy: 'Disputed, may not have reached exact pole'
            },
            {
                era: '1926',
                title: 'First Verified Pole Visit',
                description: 'Amundsen-Ellsworth-Nobile fly over pole in airship',
                airship: 'Norge'
            },
            {
                era: '1958',
                title: 'Nuclear Submarine',
                description: 'USS Nautilus first to cross North Pole underwater',
                significance: 'Cold War military importance'
            },
            {
                era: '2007',
                title: 'Russian Flag Planting',
                description: 'Russia plants flag on seabed at North Pole',
                significance: 'Territorial claims intensify',
                reaction: 'International concern over Arctic sovereignty'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Fun Facts Branch
        // ═══════════════════════════════════════════════════════════
        funFacts: [
            {
                fact: 'The North Pole is on sea ice over 4,000m deep ocean - there\'s no land underneath',
                category: 'Geography'
            },
            {
                fact: 'In Svalbard, it\'s illegal to be unprepared for polar bears - guns recommended outside settlements',
                category: 'Safety'
            },
            {
                fact: 'Greenland sharks can live over 400 years - the oldest vertebrates on Earth',
                category: 'Wildlife'
            },
            {
                fact: 'The word "Arctic" comes from Greek "arktos" meaning bear - for the constellation, not polar bears',
                category: 'Language'
            },
            {
                fact: 'Santa Claus officially has an address in the Arctic (various countries claim him)',
                category: 'Culture'
            },
            {
                fact: 'The Aurora Borealis can be heard as well as seen - it makes crackling sounds',
                category: 'Phenomenon'
            },
            {
                fact: 'Polar bear liver contains lethal amounts of Vitamin A - explorers died from eating it',
                category: 'Danger'
            },
            {
                fact: 'The Inuit have over 50 words for different types of snow',
                category: 'Language'
            },
            {
                fact: 'You can walk from Alaska to Russia when the Bering Strait freezes (technically)',
                category: 'Geography'
            },
            {
                fact: 'The magnetic North Pole moves about 55km per year - currently racing toward Russia',
                category: 'Science'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // JOURNEY WAYPOINTS - Cross the Desert Feature
        // ═══════════════════════════════════════════════════════════
        journeyWaypoints: [
            {
                name: 'Tromsø, Norway',
                coordinates: [69.65, 18.96],
                description: 'Starting from the Gateway to the Arctic',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Svalbard',
                coordinates: [78, 16],
                description: 'The remote archipelago where polar bears outnumber people',
                type: 'settlement',
                duration: 3000
            },
            {
                name: 'Arctic Ocean Pack Ice',
                coordinates: [82, 40],
                description: 'Entering the frozen ocean, ice in every direction',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'North Pole',
                coordinates: [90, 0],
                description: 'The top of the world - all directions lead south from here!',
                type: 'landmark',
                duration: 5000
            },
            {
                name: 'Canadian Arctic Archipelago',
                coordinates: [78, -95],
                description: 'Navigating through the legendary Northwest Passage',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Greenland Ice Sheet',
                coordinates: [72, -40],
                description: 'The great white expanse, 2 miles of ice',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Barrow, Alaska',
                coordinates: [71.29, -156.79],
                description: 'Reaching the northernmost settlement of the USA',
                type: 'end',
                duration: 3000
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // QUICK FACTS - Profile Page Bottom Panel
        // ═══════════════════════════════════════════════════════════
        quickFacts: {
            area: '13,900,000 km²',
            type: 'Polar Desert',
            avgTemp: '-20°C to -30°C',
            rainfall: '150-250mm/year',
            countries: '8 Arctic nations',
            population: '4 million'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #3 - SAHARA DESERT (Largest Hot Desert)
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'sahara-desert',
        name: 'Sahara Desert',
        subtitle: 'The Great African Desert',
        countries: [
            { name: 'Algeria', code: 'DZ' },
            { name: 'Chad', code: 'TD' },
            { name: 'Egypt', code: 'EG' },
            { name: 'Libya', code: 'LY' },
            { name: 'Mali', code: 'ML' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Niger', code: 'NE' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Western Sahara', code: 'EH' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        subType: 'Subtropical/Trade Wind Desert',
        area: 9200000,
        areaRank: 3,
        rank: 3,
        coordinates: [23.4162, 12.2286],
        defaultZoom: 4,
        
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800',
            'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800',
            'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Sahara Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-17, 21], [-13, 28], [-5, 32], [10, 35], [25, 32], [35, 30],
                    [38, 25], [35, 22], [40, 15], [35, 12], [25, 16], [15, 12],
                    [5, 15], [-5, 14], [-12, 15], [-17, 21]
                ]]
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Location Branch
        // ═══════════════════════════════════════════════════════════
        location: {
            continent: 'Africa',
            hemispheres: ['Northern', 'Eastern & Western'],
            latitudeRange: '12°N to 35°N',
            longitudeRange: '17°W to 40°E',
            geographicCenter: '23°N, 12°E (approximately)',
            totalCountries: 11,
            coastlines: ['Atlantic Ocean (west)', 'Mediterranean Sea (north)', 'Red Sea (east)'],
            borders: ['Atlas Mountains (north)', 'Sahel (south)', 'Red Sea (east)', 'Atlantic (west)'],
            eastWestExtent: '5,000 km',
            northSouthExtent: '1,800 km',
            percentOfAfrica: '25%'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Desert Type Branch
        // ═══════════════════════════════════════════════════════════
        desertClassification: {
            primaryType: 'Hot Desert',
            secondaryType: 'Subtropical Desert',
            climateClassification: 'BWh (Hot Desert Climate)',
            formationCauses: [
                {
                    cause: 'Subtropical High Pressure',
                    explanation: 'Hadley cell creates permanent high pressure at 30°N'
                },
                {
                    cause: 'Trade Winds',
                    explanation: 'Northeast trade winds blow dry air from interior'
                },
                {
                    cause: 'Cold Ocean Currents',
                    explanation: 'Canary Current cools Atlantic coast, reducing rainfall'
                },
                {
                    cause: 'Continental Interior',
                    explanation: 'Far from moisture sources'
                },
                {
                    cause: 'Rain Shadow',
                    explanation: 'Atlas Mountains block Mediterranean moisture'
                }
            ],
            whyItsDesert: 'Dominated by dry, sinking air of Hadley cell and blocked by Atlas Mountains from Mediterranean moisture',
            uniqueFeature: 'World\'s largest hot desert and third largest desert overall'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Size & Scale Branch
        // ═══════════════════════════════════════════════════════════
        size: {
            totalArea: 9200000,
            areaUnit: 'km²',
            areaInMiles: 3552000,
            percentOfAfrica: 25,
            comparisonToCountries: [
                'Slightly smaller than USA',
                'Larger than Australia',
                '37x size of United Kingdom',
                '16x size of France'
            ],
            ranking: {
                amongDeserts: 3,
                totalDeserts: 50,
                hotDesertRank: 1,
                statement: 'Largest hot desert, third largest overall'
            },
            growthRate: 'Expanding southward at 48km/year in some areas'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Climate Branch
        // ═══════════════════════════════════════════════════════════
        climate: {
            overview: 'Extreme heat, minimal rainfall, massive temperature swings day to night',
            temperatureData: {
                summerHigh: {
                    typical: '45°C to 50°C',
                    extreme: 'Over 55°C'
                },
                winterLow: {
                    typical: '0°C to 10°C (night)',
                    extreme: '-11°C recorded'
                },
                dailySwing: '30°C to 50°C variation between day and night',
                annualMean: {
                    central: '30°C',
                    northern: '20°C'
                },
                extremeRecords: {
                    hottestEver: '58°C (El Azizia, Libya - disputed)',
                    hottestReliable: '55°C (Kebili, Tunisia)',
                    hottestGround: '80°C (surface temperature)',
                    coldestEver: '-11°C (Ifrane, Morocco)'
                }
            },
            precipitation: {
                annualAverage: '<25mm (central)',
                someAreasAverage: '0mm (years without rain)',
                coastalAverage: '100-200mm',
                type: 'Rare thunderstorms, flash floods',
                droughtPeriod: 'Some areas 10+ years without rain'
            },
            wind: {
                dustStorms: 'Haboob, Harmattan',
                averageSpeed: '15-30 km/h',
                simoom: 'Hot dry wind causing rapid dehydration',
                sandstormHeight: 'Up to 1,500m'
            },
            sunlight: {
                hoursPerYear: '4,000+ hours (highest in world)',
                cloudCover: 'Minimal, <10%',
                uvRadiation: 'Extreme'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Landforms Branch
        // ═══════════════════════════════════════════════════════════
        landforms: [
            {
                name: 'Erg (Sand Seas)',
                localName: 'Erg',
                description: 'Vast areas of wind-blown sand dunes',
                coverage: '25% of Sahara',
                examples: ['Grand Erg Oriental', 'Grand Erg Occidental', 'Erg Chebbi', 'Ubari Sand Sea'],
                duneHeight: 'Up to 180m',
                duneTypes: ['Barchan', 'Star dunes', 'Linear dunes', 'Transverse dunes']
            },
            {
                name: 'Hamada (Rocky Plateau)',
                localName: 'Hamada',
                description: 'Barren, rocky plateaus swept clean of sand',
                coverage: '70% of Sahara',
                examples: ['Hamada du Draa', 'Hamada al-Hamra', 'Tanezrouft'],
                characteristics: 'Bare rock, gravel, wind-polished surfaces'
            },
            {
                name: 'Reg (Gravel Plains)',
                localName: 'Reg / Serir',
                description: 'Flat areas covered with pebbles and gravel',
                formation: 'Wind removes sand, leaves heavy stones',
                examples: ['Tanezrouft', 'Ténéré Desert edge'],
                color: 'Often black from desert varnish'
            },
            {
                name: 'Wadis (Dry Riverbeds)',
                localName: 'Wadi / Oued',
                description: 'Dry river channels that flood briefly after rare rains',
                examples: ['Wadi Draa', 'Wadi Saoura', 'Wadi Howar'],
                danger: 'Flash floods can be deadly',
                history: 'Once permanent rivers in Green Sahara period'
            },
            {
                name: 'Mountains',
                description: 'Several mountain ranges rise from the desert',
                examples: [
                    { name: 'Tibesti Mountains', height: '3,415m', country: 'Chad' },
                    { name: 'Hoggar Mountains', height: '2,918m', country: 'Algeria' },
                    { name: 'Aïr Mountains', height: '2,022m', country: 'Niger' },
                    { name: 'Tassili n\'Ajjer', height: '2,158m', country: 'Algeria' }
                ]
            },
            {
                name: 'Salt Flats',
                localName: 'Chott / Sebkha',
                description: 'Salt lakes and salt pans',
                examples: ['Chott el Djerid', 'Chott Melrhir'],
                formation: 'Ancient dried lakes',
                use: 'Salt mining'
            },
            {
                name: 'Depressions',
                description: 'Low-lying basins, some below sea level',
                examples: [
                    { name: 'Qattara Depression', depth: '-133m', country: 'Egypt' },
                    { name: 'Bodélé Depression', description: 'Dustiest place on Earth' }
                ]
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Key Features & Landmarks
        // ═══════════════════════════════════════════════════════════
        features: [
            {
                name: 'Richat Structure (Eye of the Sahara)',
                type: 'Geological Formation',
                coordinates: [21.1167, -11.4],
                diameter: '40 km',
                description: 'Circular geological formation visible from space',
                formation: 'Eroded dome, not impact crater',
                age: '100 million years old',
                significance: 'Navigation landmark for astronauts'
            },
            {
                name: 'Erg Chebbi',
                type: 'Sand Dunes',
                coordinates: [31.1492, -4.0125],
                height: '150m dunes',
                description: 'Iconic orange dunes of Morocco',
                area: '28 km x 5 km',
                tourism: 'Major desert tourism destination'
            },
            {
                name: 'Tibesti Mountains',
                type: 'Mountain Range',
                coordinates: [20.8, 17.8],
                height: '3,415m (Emi Koussi)',
                description: 'Highest point in Sahara, volcanic origin',
                volcanoes: 'Contains dormant volcanoes with calderas',
                climate: 'Snow occasionally falls on peaks'
            },
            {
                name: 'Tassili n\'Ajjer',
                type: 'Plateau/Heritage Site',
                coordinates: [25.5, 9.0],
                area: '72,000 km²',
                description: 'Sandstone plateau with ancient rock art',
                rockArt: '15,000+ paintings and engravings',
                age: '6,000-10,000 years old',
                UNESCO: 'World Heritage Site since 1982'
            },
            {
                name: 'Qattara Depression',
                type: 'Depression',
                coordinates: [29.5, 27.5],
                depth: '-133m below sea level',
                description: 'Largest natural depression in Africa',
                area: '19,605 km²',
                features: 'Salt pans, sand dunes, salt marshes'
            },
            {
                name: 'Bodélé Depression',
                type: 'Dust Source',
                coordinates: [17.0, 17.0],
                description: 'Dustiest place on Earth',
                output: 'Provides 40% of Amazon fertilizer via dust',
                origin: 'Ancient Lake Mega-Chad bed',
                dustDays: '100+ major dust events per year'
            },
            {
                name: 'Grand Erg Oriental',
                type: 'Sand Sea',
                coordinates: [31, 8],
                area: '140,000 km²',
                description: 'Second largest erg in Sahara',
                countries: 'Algeria, Tunisia',
                duneHeight: 'Up to 100m'
            },
            {
                name: 'Chott el Djerid',
                type: 'Salt Lake',
                coordinates: [33.7, 8.4],
                area: '5,000 km²',
                description: 'Largest salt lake in Sahara',
                filming: 'Star Wars filming location (Tatooine)',
                mirages: 'Famous for mirage phenomena'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Oases Branch
        // ═══════════════════════════════════════════════════════════
        oases: [
            {
                name: 'Siwa Oasis',
                coordinates: [29.2, 25.52],
                country: 'Egypt',
                population: 33000,
                description: 'Ancient oasis, Alexander the Great visited Oracle here',
                features: 'Salt lakes, date palms, Berber culture',
                water: 'Over 200 springs',
                history: 'Oracle of Amun temple, 6th century BCE'
            },
            {
                name: 'Tafilalet Oasis',
                coordinates: [31.5, -4.2],
                country: 'Morocco',
                population: 100000,
                description: 'Largest oasis in Morocco, over 1 million palm trees',
                features: 'Erfoud, Rissani, kasbahs',
                history: 'Ancient caravan crossroads'
            },
            {
                name: 'Kufra Oasis',
                coordinates: [24.2, 23.3],
                country: 'Libya',
                population: 50000,
                description: 'Remote oasis in southeast Libya',
                water: 'Nubian Sandstone Aquifer',
                agriculture: 'Circular irrigation visible from space'
            },
            {
                name: 'Ghardaïa Oasis',
                coordinates: [32.48, 3.67],
                country: 'Algeria',
                population: 200000,
                description: 'UNESCO World Heritage Site, Mozabite Berber culture',
                architecture: 'Unique M\'zab Valley architecture',
                history: 'Founded 1053 CE'
            },
            {
                name: 'Dakhla Oasis',
                coordinates: [25.5, 29.0],
                country: 'Egypt',
                population: 75000,
                description: 'One of seven oases in Egypt\'s Western Desert',
                features: 'Hot springs, Roman ruins, sand dunes',
                history: 'Inhabited since Neolithic period'
            },
            {
                name: 'Figuig Oasis',
                coordinates: [32.11, -1.23],
                country: 'Morocco',
                population: 15000,
                description: 'Ancient fortified oasis near Algerian border',
                palms: '150,000 date palms',
                water: 'Artesian wells, underground channels'
            },
            {
                name: 'Ghadames Oasis',
                coordinates: [30.13, 9.5],
                country: 'Libya',
                population: 10000,
                description: '"Pearl of the Desert" - UNESCO World Heritage Site',
                architecture: 'Traditional mud-brick houses, covered streets',
                age: 'Pre-Roman settlement'
            },
            {
                name: 'Timimoun Oasis',
                coordinates: [29.26, 0.23],
                country: 'Algeria',
                population: 35000,
                description: 'Red oasis town, traditional architecture',
                features: 'Foggaras (underground water channels)',
                nickname: 'Red Oasis'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Cities Branch
        // ═══════════════════════════════════════════════════════════
        cities: [
            {
                name: 'Timbuktu',
                coordinates: [16.77, -3.0],
                country: 'Mali',
                population: 55000,
                description: 'Legendary city of learning and trade',
                history: 'UNESCO World Heritage, center of Islamic scholarship',
                founded: '5th century CE',
                significance: 'Major trans-Saharan trade hub'
            },
            {
                name: 'Ouarzazate',
                coordinates: [30.92, -6.9],
                country: 'Morocco',
                population: 72000,
                description: 'Gateway to Sahara, "Hollywood of Morocco"',
                features: 'Kasbah Taourirt, Atlas Film Studios',
                films: 'Gladiator, Lawrence of Arabia, Game of Thrones'
            },
            {
                name: 'Tamanrasset',
                coordinates: [22.79, 5.52],
                country: 'Algeria',
                population: 93000,
                description: 'Largest city in central Sahara, Tuareg center',
                elevation: '1,400m',
                features: 'Base for Hoggar Mountain exploration'
            },
            {
                name: 'Ghardaïa',
                coordinates: [32.48, 3.67],
                country: 'Algeria',
                population: 200000,
                description: 'M\'zab Valley, UNESCO World Heritage',
                architecture: 'Influenced Le Corbusier',
                people: 'Mozabite Berber community'
            },
            {
                name: 'Merzouga',
                coordinates: [31.08, -4.01],
                country: 'Morocco',
                population: 3000,
                description: 'Village at edge of Erg Chebbi dunes',
                tourism: 'Camel treks, desert camps',
                feature: 'Sunrise over dunes'
            },
            {
                name: 'Douz',
                coordinates: [33.46, 9.02],
                country: 'Tunisia',
                population: 35000,
                description: 'Gateway to Tunisian Sahara',
                nickname: 'Gateway to the Desert',
                festival: 'International Sahara Festival'
            },
            {
                name: 'Djanet',
                coordinates: [24.55, 9.48],
                country: 'Algeria',
                population: 15000,
                description: 'Oasis town near Tassili n\'Ajjer',
                features: 'Base for rock art tours',
                people: 'Tuareg community'
            },
            {
                name: 'Sebha',
                coordinates: [27.03, 14.43],
                country: 'Libya',
                population: 130000,
                description: 'Largest city in southern Libya',
                history: 'Ancient Garamantes territory',
                features: 'Ubari Lakes nearby'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Biodiversity Branch
        // ═══════════════════════════════════════════════════════════
        biodiversity: {
            overview: 'Surprisingly diverse life adapted to extreme conditions',
            
            plants: [
                {
                    name: 'Date Palm',
                    scientificName: 'Phoenix dactylifera',
                    description: 'Foundation of oasis agriculture',
                    adaptation: 'Deep roots reach groundwater',
                    uses: 'Food, shade, building materials, rope',
                    significance: 'Called "tree of life" - 800 uses'
                },
                {
                    name: 'Acacia Trees',
                    scientificName: 'Acacia tortilis and others',
                    description: 'Umbrella-shaped trees in wadis',
                    adaptation: 'Deep taproot, thorns deter herbivores',
                    uses: 'Fodder, firewood, gum arabic'
                },
                {
                    name: 'Desert Rose',
                    scientificName: 'Adenium obesum',
                    description: 'Succulent with striking pink flowers',
                    adaptation: 'Water-storing trunk',
                    toxicity: 'Poisonous sap, used for arrow poison'
                },
                {
                    name: 'Saharan Cypress',
                    scientificName: 'Cupressus dupreziana',
                    description: 'Relic trees in Tassili, oldest 4,000+ years',
                    population: 'Only 233 trees remain',
                    status: 'Critically endangered',
                    significance: 'Survivor from Green Sahara'
                },
                {
                    name: 'Tamarisk',
                    scientificName: 'Tamarix',
                    description: 'Salt-tolerant shrub',
                    adaptation: 'Excretes salt through leaves',
                    location: 'Wadis, salt flats'
                },
                {
                    name: 'Welwitschia',
                    scientificName: 'Welwitschia mirabilis',
                    description: 'Ancient plant with only 2 leaves (Namib edge)',
                    lifespan: 'Lives over 1,000 years',
                    adaptation: 'Absorbs fog moisture'
                }
            ],
            
            animals: [
                {
                    name: 'Dromedary Camel',
                    scientificName: 'Camelus dromedarius',
                    description: 'One-humped camel, "ship of the desert"',
                    population: '15 million in Sahara region',
                    adaptation: 'Can drink 100L in 10 min, survives 10 days without water',
                    uses: 'Transport, meat, milk, hair, leather',
                    domesticated: '4,000 years ago in Arabia'
                },
                {
                    name: 'Fennec Fox',
                    scientificName: 'Vulpes zerda',
                    description: 'World\'s smallest fox with huge ears',
                    weight: '1-1.5 kg',
                    adaptation: 'Ears radiate heat, furry feet for hot sand',
                    diet: 'Insects, rodents, plants',
                    status: 'Least Concern (national animal of Algeria)'
                },
                {
                    name: 'Addax',
                    scientificName: 'Addax nasomaculatus',
                    description: 'White antelope, critically endangered',
                    population: '<100 in wild',
                    adaptation: 'Can survive without drinking (gets water from plants)',
                    status: 'Critically Endangered',
                    conservation: 'Captive breeding programs'
                },
                {
                    name: 'Dorcas Gazelle',
                    scientificName: 'Gazella dorcas',
                    description: 'Small gazelle adapted to desert',
                    adaptation: 'Concentrates urine to conserve water',
                    population: '35,000-40,000',
                    status: 'Vulnerable',
                    diet: 'Acacia leaves, grasses, flowers'
                },
                {
                    name: 'Saharan Cheetah',
                    scientificName: 'Acinonyx jubatus hecki',
                    description: 'Critically endangered subspecies',
                    population: '<250',
                    adaptation: 'Pale coat, nocturnal to avoid heat',
                    range: 'Algeria, Niger, Mali',
                    status: 'Critically Endangered'
                },
                {
                    name: 'Desert Monitor',
                    scientificName: 'Varanus griseus',
                    description: 'Large lizard, up to 2m long',
                    adaptation: 'Burrows to escape heat, eats eggs, rodents',
                    status: 'Least Concern'
                },
                {
                    name: 'Deathstalker Scorpion',
                    scientificName: 'Leiurus quinquestriatus',
                    description: 'One of world\'s most venomous scorpions',
                    size: '5-10 cm',
                    adaptation: 'Nocturnal, burrows by day',
                    venom: 'Potentially fatal, used in medical research'
                },
                {
                    name: 'Saharan Silver Ant',
                    scientificName: 'Cataglyphis bombycina',
                    description: 'Forages in midday heat when predators hide',
                    adaptation: 'Silver hairs reflect heat, can survive 53°C',
                    speed: 'One of fastest ants (108 body lengths/second)'
                },
                {
                    name: 'Desert Hedgehog',
                    scientificName: 'Paraechinus aethiopicus',
                    description: 'Smallest hedgehog species',
                    adaptation: 'Active at night, burrows by day',
                    diet: 'Insects, scorpions (immune to venom)'
                },
                {
                    name: 'Sandfish',
                    scientificName: 'Scincus scincus',
                    description: 'Lizard that "swims" through sand',
                    adaptation: 'Smooth scales reduce friction, swims 15cm/second',
                    size: '8-15 cm'
                }
            ],
            
            birds: [
                { name: 'Ostrich', description: 'Red-necked subspecies (critically endangered in wild)' },
                { name: 'Desert Sparrow', description: 'Well-adapted to arid conditions' },
                { name: 'Lappet-faced Vulture', description: 'Largest African vulture' },
                { name: 'Hoopoe Lark', description: 'Distinctive desert songbird' }
            ],
            
            endangeredSpecies: [
                { name: 'Addax', status: 'Critically Endangered', population: '<100 wild' },
                { name: 'Saharan Cheetah', status: 'Critically Endangered', population: '<250' },
                { name: 'Dama Gazelle', status: 'Critically Endangered', population: '100-200' },
                { name: 'Slender-horned Gazelle', status: 'Endangered', population: '<1,000' }
            ],
            
            extinctSpecies: [
                { name: 'Scimitar-horned Oryx', status: 'Extinct in wild (reintroduction ongoing)', lastSeen: '2000' },
                { name: 'North African Elephant', status: 'Extinct', lastSeen: '4th century CE' },
                { name: 'Barbary Lion', status: 'Extinct in wild', lastSeen: '1942' },
                { name: 'Saharan Hippopotamus', status: 'Extinct', lastSeen: '~4000 BCE (Green Sahara)' }
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Human Life Branch
        // ═══════════════════════════════════════════════════════════
        humanLife: {
            overview: 'Inhabited for thousands of years by various nomadic and settled peoples',
            
            population: {
                inDesert: '2.5 million in desert proper',
                periphery: '90 million in Saharan countries'
            },
            
            indigenousPeoples: [
                {
                    name: 'Tuareg',
                    region: 'Algeria, Niger, Mali, Libya, Burkina Faso',
                    population: '2 million',
                    lifestyle: 'Nomadic herders, salt traders',
                    language: 'Tamasheq (Berber)',
                    nickname: '"Blue People" (indigo-dyed clothes)',
                    status: 'Traditional lifestyle under pressure'
                },
                {
                    name: 'Bedouin',
                    region: 'Egypt, Libya, Tunisia, Algeria',
                    population: '4-5 million',
                    lifestyle: 'Nomadic/semi-nomadic herding',
                    language: 'Arabic',
                    culture: 'Poetry, hospitality traditions'
                },
                {
                    name: 'Berber (Amazigh)',
                    region: 'Morocco, Algeria, Tunisia, Libya',
                    population: '25-30 million total',
                    lifestyle: 'Farmers, traders, herders',
                    language: 'Tamazight',
                    history: 'Indigenous pre-Arab population'
                },
                {
                    name: 'Toubou',
                    region: 'Chad, Niger, Libya, Sudan',
                    population: '500,000',
                    lifestyle: 'Nomadic herders, date farmers',
                    language: 'Tedaga, Dazaga',
                    region: 'Tibesti Mountains and surroundings'
                },
                {
                    name: 'Mozabite',
                    region: 'M\'zab Valley, Algeria',
                    population: '200,000',
                    lifestyle: 'Oasis agriculture, trade',
                    religion: 'Ibadi Islam',
                    architecture: 'Distinctive UNESCO World Heritage towns'
                }
            ],
            
            traditionalLife: {
                housing: ['Nomad tents (khayma)', 'Mud-brick oasis houses', 'Kasbahs', 'Cave dwellings'],
                transport: ['Camel caravans', 'Donkeys', '4x4 vehicles (modern)'],
                clothing: ['Flowing robes for sun protection', 'Tagelmust (Tuareg veil)', 'Cotton/wool layers'],
                food: ['Dates', 'Camel milk', 'Couscous', 'Flatbread', 'Mint tea'],
                water: ['Well systems', 'Foggaras (underground channels)', 'Cisterns']
            },
            
            modernChallenges: [
                'Climate change increasing temperatures',
                'Desertification expanding desert',
                'Political instability in several countries',
                'Declining nomadic lifestyle',
                'Groundwater depletion'
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Economic Importance Branch
        // ═══════════════════════════════════════════════════════════
        economy: [
            {
                sector: 'Oil & Gas',
                description: 'Major petroleum resources',
                value: 'Algeria: 12th largest oil producer',
                locations: 'Algeria (Hassi Messaoud), Libya (Sirte Basin)',
                significance: 'Primary export for Algeria, Libya before conflict'
            },
            {
                sector: 'Mining',
                description: 'Rich mineral deposits',
                resources: ['Phosphates (Morocco)', 'Iron ore (Mauritania)', 'Uranium (Niger)', 'Salt', 'Copper'],
                value: 'Niger provides 5% of world\'s uranium'
            },
            {
                sector: 'Solar Energy',
                description: 'Highest solar potential on Earth',
                potential: 'Could power entire world if fully utilized',
                projects: ['Noor Power Station (Morocco)', 'Desertec concept'],
                challenge: 'Transmission to markets'
            },
            {
                sector: 'Date Production',
                description: 'World\'s date palm heartland',
                production: 'Algeria, Egypt, Tunisia major producers',
                varieties: 'Deglet Nour, Medjool',
                export: 'Billions of dollars annually'
            },
            {
                sector: 'Tourism',
                description: 'Growing desert tourism industry',
                activities: ['Camel treks', 'Desert camps', '4x4 safaris', 'Star gazing', 'Oasis visits'],
                destinations: 'Morocco, Tunisia, Egypt (safer areas)',
                challenges: 'Security concerns in some regions'
            },
            {
                sector: 'Salt Trade',
                description: 'Traditional commodity, historically valuable as gold',
                locations: 'Taoudenni (Mali), various salt pans',
                history: 'Salt bars once used as currency'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Environmental Issues Branch
        // ═══════════════════════════════════════════════════════════
        environmentalIssues: [
            {
                issue: 'Desertification',
                severity: 'Critical',
                description: 'Sahara expanding southward into Sahel',
                rate: '48 km/year in some areas',
                causes: ['Climate change', 'Overgrazing', 'Deforestation'],
                impacts: ['Agricultural land loss', 'Migration', 'Conflict'],
                solutions: 'Great Green Wall project (8,000 km tree belt)'
            },
            {
                issue: 'Climate Change',
                severity: 'Critical',
                description: 'Temperatures rising, rainfall becoming more erratic',
                impacts: [
                    'Hotter extremes',
                    'More intense dust storms',
                    'Oasis water depletion'
                ],
                data: '2°C warming already observed'
            },
            {
                issue: 'Water Depletion',
                severity: 'High',
                description: 'Fossil aquifers being depleted faster than recharge',
                aquifer: 'Nubian Sandstone Aquifer (shared by 4 countries)',
                concern: 'Could be depleted in decades at current rate',
                cause: 'Increased irrigation, population growth'
            },
            {
                issue: 'Overgrazing',
                severity: 'High',
                description: 'Livestock damage fragile vegetation',
                impacts: ['Soil erosion', 'Vegetation loss', 'Dune activation'],
                location: 'Desert margins, Sahel'
            },
            {
                issue: 'Dust Storms',
                severity: 'Increasing',
                description: 'Major dust events affecting health and agriculture',
                impact: 'Dust reaches Europe, Amazon',
                frequency: 'Increasing with climate change',
                health: 'Respiratory problems, meningitis outbreaks'
            },
            {
                issue: 'Wildlife Decline',
                severity: 'Critical',
                description: 'Large mammals nearly extinct',
                cause: 'Hunting, habitat loss',
                victims: ['Addax', 'Cheetah', 'Wild dog', 'Oryx'],
                action: 'Reintroduction programs ongoing'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Historical Importance Branch
        // ═══════════════════════════════════════════════════════════
        historicalImportance: [
            {
                era: '11,000-5,000 BCE',
                title: 'Green Sahara',
                description: 'Sahara was savanna with lakes, rivers, and abundant wildlife',
                evidence: 'Rock art showing hippos, crocodiles, cattle',
                climate: '10x more rainfall than today',
                inhabitants: 'Hunter-gatherer and pastoral communities'
            },
            {
                era: '3,000 BCE',
                title: 'Desertification Begins',
                description: 'Climate shift transforms Sahara into desert',
                cause: 'Orbital changes, reduced monsoon',
                impact: 'Population migration to Nile, Niger'
            },
            {
                era: '1,000 BCE - 500 CE',
                title: 'Garamantes Civilization',
                description: 'Sophisticated desert civilization in Libya',
                achievements: 'Underground irrigation (foggaras)',
                extent: 'Fezzan region',
                decline: 'Water depletion'
            },
            {
                era: '5th-16th century CE',
                title: 'Trans-Saharan Trade',
                description: 'Major trade routes connecting sub-Saharan Africa to Mediterranean',
                goods: ['Gold southward', 'Salt southward', 'Slaves northward', 'Ivory', 'Leather'],
                value: 'Gold worth more than volume in Europe',
                routes: ['Western route to Ghana/Mali', 'Central to Kanem-Bornu', 'Eastern to Egypt']
            },
            {
                era: '11th-16th century',
                title: 'Saharan Empires',
                description: 'Great empires controlled trans-Saharan trade',
                empires: ['Ghana Empire', 'Mali Empire', 'Songhai Empire'],
                cities: 'Timbuktu becomes center of learning',
                decline: 'Portuguese sea routes bypass desert'
            },
            {
                era: '1880s-1960s',
                title: 'Colonial Period',
                description: 'European powers partition Sahara',
                rulers: ['France (most)', 'Spain', 'Italy', 'Britain'],
                impact: 'Artificial borders cutting through tribal territories',
                legacy: 'Current national boundaries'
            },
            {
                era: '1960s-present',
                title: 'Independence and Modern Era',
                description: 'Nations gain independence, oil era begins',
                developments: ['Oil/gas extraction', 'Tourism', 'Conflicts (Libya, Mali, Niger)'],
                challenges: 'Climate change, political instability'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Fun Facts Branch
        // ═══════════════════════════════════════════════════════════
        funFacts: [
            {
                fact: 'The Sahara is roughly the size of the United States',
                category: 'Scale'
            },
            {
                fact: 'Only 25% of the Sahara is sand dunes - 70% is rocky hamada',
                category: 'Landscape'
            },
            {
                fact: 'The Sahara was green with lakes and rivers just 5,000 years ago',
                category: 'History'
            },
            {
                fact: 'It occasionally snows in the Sahara - last in 2021',
                category: 'Weather'
            },
            {
                fact: 'Saharan dust fertilizes the Amazon rainforest, traveling 5,000 km',
                category: 'Connection'
            },
            {
                fact: 'The name "Sahara" comes from Arabic meaning "desert" - so it\'s "Desert Desert"',
                category: 'Language'
            },
            {
                fact: 'There are ancient shipwrecks in the middle of the Sahara from when it had lakes',
                category: 'Mystery'
            },
            {
                fact: 'Temperatures can swing 50°C between day and night',
                category: 'Climate'
            },
            {
                fact: 'Star Wars\' Tatooine was filmed in Tunisia, with buildings still standing',
                category: 'Film'
            },
            {
                fact: 'The Sahara has enough sunlight to power the entire world',
                category: 'Energy'
            },
            {
                fact: 'Some oases have underground water channels built 2,000 years ago still in use',
                category: 'Engineering'
            },
            {
                fact: 'The Eye of the Sahara is visible from space and was used by astronauts for navigation',
                category: 'Space'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // JOURNEY WAYPOINTS - Cross the Desert Feature
        // ═══════════════════════════════════════════════════════════
        journeyWaypoints: [
            {
                name: 'Marrakech, Morocco',
                coordinates: [31.63, -8.0],
                description: 'Starting from the Red City at the Atlas foothills',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Erg Chebbi',
                coordinates: [31.1, -4.0],
                description: 'Entering the towering orange dunes of Morocco',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Grand Erg Occidental',
                coordinates: [30.5, 0],
                description: 'Crossing vast Algerian sand seas',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Tassili n\'Ajjer',
                coordinates: [25.5, 9.0],
                description: 'Ancient rock art tells stories of the Green Sahara',
                type: 'historical',
                duration: 3000
            },
            {
                name: 'Tibesti Mountains',
                coordinates: [20.8, 17.8],
                description: 'The highest peaks in the Sahara, volcanic origin',
                type: 'landmark',
                duration: 3000
            },
            {
                name: 'Bodélé Depression',
                coordinates: [17.0, 17.0],
                description: 'The dustiest place on Earth - ancient lake bed',
                type: 'scientific',
                duration: 3000
            },
            {
                name: 'Siwa Oasis',
                coordinates: [29.2, 25.52],
                description: 'A life-giving oasis - Alexander the Great visited here',
                type: 'oasis',
                duration: 4000
            },
            {
                name: 'Nile Valley',
                coordinates: [27.0, 30.8],
                description: 'Journey\'s end at the river that flows through the desert',
                type: 'end',
                duration: 3000
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // QUICK FACTS - Profile Page Bottom Panel
        // ═══════════════════════════════════════════════════════════
        quickFacts: {
            area: '9,200,000 km²',
            type: 'Hot Desert',
            avgTemp: '30°C (central)',
            rainfall: '<25mm/year',
            countries: '11 countries',
            population: '2.5 million'
        }
    },

    // Continue with deserts 4-10...
    // Due to length, I'll provide the remaining 7 deserts with the same comprehensive structure

    // ═══════════════════════════════════════════════════════════════════
    // #4 - ARABIAN DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'arabian-desert',
        name: 'Arabian Desert',
        subtitle: 'Land of Empty Quarters',
        countries: [
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Oman', code: 'OM' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Iraq', code: 'IQ' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        subType: 'Subtropical Desert',
        area: 2330000,
        areaRank: 4,
        rank: 4,
        coordinates: [21.0, 46.5],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Arabian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [34, 32], [39, 33], [48, 30], [56, 25], [59, 22],
                    [55, 16], [50, 13], [45, 12], [42, 15], [36, 17],
                    [34, 25], [34, 32]
                ]]
            }
        },
        
        location: {
            continent: 'Asia (Arabian Peninsula)',
            hemispheres: ['Northern', 'Eastern'],
            latitudeRange: '12°N to 33°N',
            longitudeRange: '34°E to 60°E',
            totalCountries: 8,
            coastlines: ['Red Sea', 'Persian Gulf', 'Gulf of Oman', 'Arabian Sea'],
            percentOfPeninsula: '95%'
        },
        
        desertClassification: {
            primaryType: 'Hot Desert',
            secondaryType: 'Subtropical Desert',
            climateClassification: 'BWh (Hot Desert Climate)',
            formationCauses: [
                { cause: 'Subtropical High Pressure', explanation: 'Permanent high pressure zone at 30°N' },
                { cause: 'Continental Interior', explanation: 'Far from moisture-bearing winds' },
                { cause: 'Surrounding Warm Seas', explanation: 'Seas too warm to produce much precipitation' }
            ]
        },
        
        size: {
            totalArea: 2330000,
            areaUnit: 'km²',
            comparisonToCountries: ['Slightly smaller than Argentina', '9x United Kingdom'],
            ranking: { amongDeserts: 4, hotDesertRank: 2 }
        },
        
        climate: {
            overview: 'Extreme heat, very little rainfall, hot winds',
            temperatureData: {
                summerHigh: { typical: '45°C to 54°C' },
                winterLow: { typical: '5°C to 15°C' },
                extremeRecords: {
                    hottestEver: '54.0°C (Mitribah, Kuwait)',
                    coldestEver: '-12°C (Turayf, Saudi Arabia)'
                }
            },
            precipitation: {
                annualAverage: '<100mm (most areas <35mm)',
                rubAlKhali: 'Less than 30mm'
            }
        },
        
        landforms: [
            {
                name: 'Rub\' al Khali (Empty Quarter)',
                description: 'Largest contiguous sand desert in world',
                area: '650,000 km²',
                duneHeight: 'Up to 250m'
            },
            {
                name: 'Nafud Desert',
                description: 'Northern sand desert with red dunes',
                area: '65,000 km²'
            },
            {
                name: 'Dahna Desert',
                description: 'Narrow arc of red sand connecting Nafud to Empty Quarter',
                length: '1,200 km'
            },
            {
                name: 'Asir Mountains',
                description: 'Mountain range in western Saudi Arabia',
                height: 'Up to 3,000m'
            },
            {
                name: 'Lava Fields (Harrat)',
                description: 'Extensive volcanic fields',
                area: '180,000 km² total',
                age: 'Some eruptions as recent as 1256 CE'
            }
        ],
        
        features: [
            {
                name: 'Rub\' al Khali (Empty Quarter)',
                type: 'Sand Sea',
                coordinates: [21.0, 50.0],
                area: '650,000 km²',
                description: 'Largest sand desert on Earth',
                duneHeight: '250m dunes',
                firstCrossing: 'Wilfred Thesiger (1948)'
            },
            {
                name: 'Wadi Rum',
                type: 'Valley',
                coordinates: [29.58, 35.42],
                description: 'Spectacular sandstone valley in Jordan',
                UNESCO: 'World Heritage Site',
                filming: 'The Martian, Lawrence of Arabia, Dune'
            },
            {
                name: 'Liwa Oasis',
                type: 'Oasis',
                coordinates: [23.13, 53.76],
                description: 'Crescent of oases on Empty Quarter edge',
                palms: '10+ million date palms'
            },
            {
                name: 'Al-Ahsa Oasis',
                type: 'Oasis',
                coordinates: [25.37, 49.59],
                description: 'Largest oasis in world',
                UNESCO: 'World Heritage Site',
                palms: '2.5 million date palms'
            }
        ],
        
        oases: [
            { name: 'Al-Ahsa Oasis', coordinates: [25.37, 49.59], country: 'Saudi Arabia', description: 'Largest oasis in world' },
            { name: 'Liwa Oasis', coordinates: [23.13, 53.76], country: 'UAE', description: 'Edge of Empty Quarter' },
            { name: 'Wadi Hanifa', coordinates: [24.63, 46.72], country: 'Saudi Arabia', description: 'Near Riyadh' }
        ],
        
        cities: [
            { name: 'Riyadh', coordinates: [24.71, 46.68], country: 'Saudi Arabia', population: 7500000, description: 'Capital, largest desert city in world' },
            { name: 'Dubai', coordinates: [25.27, 55.3], country: 'UAE', population: 3500000, description: 'Modern metropolis on desert coast' },
            { name: 'Abu Dhabi', coordinates: [24.45, 54.37], country: 'UAE', population: 1500000, description: 'Capital of UAE' },
            { name: 'Doha', coordinates: [25.29, 51.53], country: 'Qatar', population: 2400000, description: 'Capital of Qatar' },
            { name: 'Kuwait City', coordinates: [29.38, 47.99], country: 'Kuwait', population: 3000000, description: 'Capital of Kuwait' },
            { name: 'Muscat', coordinates: [23.61, 58.59], country: 'Oman', population: 1550000, description: 'Capital of Oman' }
        ],
        
        biodiversity: {
            overview: 'Limited but specialized desert fauna',
            plants: [
                { name: 'Date Palm', description: 'Foundation of oasis agriculture' },
                { name: 'Ghaf Tree', description: 'National tree of UAE' },
                { name: 'Desert Hyacinth', description: 'Bulb survives drought' }
            ],
            animals: [
                { name: 'Arabian Oryx', scientificName: 'Oryx leucoryx', description: 'National animal of several countries', status: 'Vulnerable (recovered from extinction in wild)' },
                { name: 'Arabian Leopard', scientificName: 'Panthera pardus nimr', description: 'Critically endangered', population: '<200' },
                { name: 'Dromedary Camel', description: '1 million wild, domesticated throughout' },
                { name: 'Arabian Sand Gazelle', description: 'Adapted to extreme heat' },
                { name: 'Rüppell\'s Fox', description: 'Smallest canid in Arabia' },
                { name: 'Spiny-tailed Lizard', description: 'Herbivorous lizard' }
            ],
            endangeredSpecies: [
                { name: 'Arabian Leopard', status: 'Critically Endangered' },
                { name: 'Arabian Oryx', status: 'Vulnerable (recovering)' }
            ]
        },
        
        humanLife: {
            population: { peninsula: '75 million (most in cities)', nomadic: '<5%' },
            indigenousPeoples: [
                { name: 'Bedouin', description: 'Traditional Arab nomads', lifestyle: 'Herding, trading, now largely settled' }
            ],
            historicalLife: 'Camel herding, oasis farming, trade routes',
            modernLife: 'Oil wealth transformed region, modern cities'
        },
        
        economy: [
            { sector: 'Oil & Gas', description: '
