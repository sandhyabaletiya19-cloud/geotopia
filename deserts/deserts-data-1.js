/**
 * ═══════════════════════════════════════════════════════════
 * DESERTS DATA FILE 1 - Deserts 1-10 (Largest by Area)
 * Encyclopedia-grade detailed data for geography learning
 * ═══════════════════════════════════════════════════════════
 */

const DESERTS_DATA_1 = [
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

       // ═══════════════════════════════════════════════════════════════════
    // #4 - ARABIAN DESERT (CONTINUED)
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
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
            'https://images.unsplash.com/photo-1547235001-d703406d3f17?w=800'
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
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Location Branch
        // ═══════════════════════════════════════════════════════════
        location: {
            continent: 'Asia (Arabian Peninsula)',
            hemispheres: ['Northern', 'Eastern'],
            latitudeRange: '12°N to 33°N',
            longitudeRange: '34°E to 60°E',
            geographicCenter: '21°N, 46.5°E',
            totalCountries: 8,
            coastlines: ['Red Sea (west)', 'Persian Gulf (east)', 'Gulf of Oman (southeast)', 'Arabian Sea (south)'],
            borders: ['Fertile Crescent (north)', 'Indian Ocean (south)'],
            percentOfPeninsula: 95,
            nearestOceans: ['Indian Ocean', 'Atlantic via Red Sea']
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
                    explanation: 'Located under descending dry air of Hadley cell at 20-30°N'
                },
                {
                    cause: 'Continental Interior Effect',
                    explanation: 'Large landmass with limited moisture penetration'
                },
                {
                    cause: 'Rain Shadow',
                    explanation: 'Mountains in Yemen and Oman block monsoon moisture'
                },
                {
                    cause: 'Hot Ocean Currents',
                    explanation: 'Surrounding warm seas evaporate quickly but rain falls elsewhere'
                }
            ],
            whyItsDesert: 'Combination of subtropical high pressure and continental isolation creates extreme aridity',
            uniqueFeature: 'Contains the largest contiguous sand desert (Rub\' al Khali)'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Size & Scale Branch
        // ═══════════════════════════════════════════════════════════
        size: {
            totalArea: 2330000,
            areaUnit: 'km²',
            areaInMiles: 900000,
            percentOfPeninsula: 95,
            comparisonToCountries: [
                'Slightly smaller than Argentina',
                '10x size of United Kingdom',
                'Half the size of European Union'
            ],
            ranking: {
                amongDeserts: 4,
                totalDeserts: 50,
                hotDesertRank: 2,
                statement: 'Fourth largest desert, second largest hot desert'
            },
            subDeserts: {
                rubAlKhali: 650000,
                nafud: 65000,
                dahna: 45000
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Climate Branch
        // ═══════════════════════════════════════════════════════════
        climate: {
            overview: 'Extremely hot summers, mild winters, minimal rainfall year-round',
            temperatureData: {
                summerHigh: {
                    typical: '45°C to 50°C',
                    extreme: 'Over 54°C',
                    rubAlKhali: 'Up to 56°C'
                },
                winterLow: {
                    typical: '5°C to 15°C',
                    northern: 'Can reach freezing',
                    frost: 'Possible in northern regions'
                },
                dailySwing: '20°C to 30°C variation',
                annualMean: {
                    coastal: '27°C',
                    interior: '33°C'
                },
                extremeRecords: {
                    hottestEver: '54.0°C (Mitribah, Kuwait, 2016)',
                    hottestSaudi: '52.0°C (Jeddah)',
                    coldestEver: '-12°C (Turayf, Saudi Arabia)',
                    hottestGround: '70°C+ (sand surface)'
                }
            },
            precipitation: {
                annualAverage: '<100mm (most areas)',
                rubAlKhali: '<35mm',
                coastalAreas: '100-200mm',
                yemenHighlands: '500mm (exception)',
                type: 'Winter thunderstorms, occasional tropical systems',
                droughtPeriod: 'Years can pass without rain in interior'
            },
            wind: {
                shamal: 'Hot dry northwesterly wind',
                khamsin: 'Hot dusty wind from south',
                sandstorms: 'Common, especially spring',
                averageSpeed: '15-30 km/h'
            },
            humidity: {
                coastal: 'Very high (80-90%)',
                interior: 'Very low (10-20%)',
                summer: 'Coastal areas oppressively humid'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Landforms Branch
        // ═══════════════════════════════════════════════════════════
        landforms: [
            {
                name: 'Rub\' al Khali (Empty Quarter)',
                localName: 'الربع الخالي',
                description: 'Largest contiguous sand desert in the world',
                area: '650,000 km²',
                countries: ['Saudi Arabia', 'UAE', 'Oman', 'Yemen'],
                duneHeight: 'Up to 250m (among tallest in world)',
                duneTypes: ['Star dunes', 'Crescentic dunes', 'Linear dunes'],
                characteristics: 'Virtually uninhabited, extremely harsh conditions',
                exploration: 'First European crossing by Wilfred Thesiger (1946-1948)'
            },
            {
                name: 'An-Nafud Desert',
                localName: 'النفود',
                description: 'Northern sand desert with distinctive red dunes',
                area: '65,000 km²',
                country: 'Saudi Arabia',
                duneHeight: 'Up to 90m',
                color: 'Red-orange from iron oxide',
                characteristics: 'More accessible than Empty Quarter'
            },
            {
                name: 'Ad-Dahna Desert',
                localName: 'الدهناء',
                description: 'Narrow corridor of red sand connecting Nafud to Empty Quarter',
                length: '1,200 km',
                width: '25-80 km',
                significance: 'Natural barrier historically dividing regions'
            },
            {
                name: 'Harrat (Lava Fields)',
                description: 'Extensive volcanic fields in western Arabia',
                area: '180,000 km² total',
                examples: ['Harrat Rahat', 'Harrat Khaybar', 'Harrat al-Shaam'],
                recentActivity: 'Last eruption 1256 CE near Medina',
                characteristics: 'Black basalt plains, volcanic cones'
            },
            {
                name: 'Asir Mountains',
                description: 'Mountain range in southwestern Saudi Arabia',
                height: 'Up to 3,000m',
                climate: 'Cooler, receives monsoon rain',
                vegetation: 'Juniper forests (rare in Arabia)'
            },
            {
                name: 'Hajar Mountains',
                description: 'Mountain range in UAE and Oman',
                height: '3,009m (Jebel Shams, Oman)',
                characteristics: 'Dramatic canyons, wadis',
                significance: 'Blocks monsoon moisture from interior'
            },
            {
                name: 'Wadis',
                description: 'Dry riverbeds that flood seasonally',
                examples: ['Wadi Hanifa', 'Wadi Rum', 'Wadi Dawasir'],
                characteristics: 'Support vegetation, human settlement',
                danger: 'Flash floods can be sudden and deadly'
            },
            {
                name: 'Sabkhas',
                description: 'Coastal salt flats',
                locations: 'Persian Gulf coast, UAE, Qatar',
                characteristics: 'Flat, salty, prone to flooding',
                hazard: 'Can appear solid but be quicksand-like'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Key Features & Landmarks
        // ═══════════════════════════════════════════════════════════
        features: [
            {
                name: 'Rub\' al Khali (Empty Quarter)',
                type: 'Sand Sea',
                coordinates: [21.0, 50.0],
                area: '650,000 km²',
                description: 'Largest continuous sand desert on Earth, virtually uninhabited',
                duneHeight: '250m (some of tallest dunes in world)',
                firstCrossing: 'Wilfred Thesiger with Bedouin guides (1946-1948)',
                oilDiscovery: 'Vast oil reserves discovered beneath',
                temperature: 'Summer surface temperatures over 70°C'
            },
            {
                name: 'Wadi Rum',
                type: 'Valley/Protected Area',
                coordinates: [29.58, 35.42],
                description: 'Spectacular sandstone valley in Jordan, "Valley of the Moon"',
                area: '720 km²',
                UNESCO: 'World Heritage Site (2011)',
                filming: ['Lawrence of Arabia', 'The Martian', 'Dune', 'Star Wars'],
                features: 'Natural arches, petroglyphs, Bedouin camps',
                history: 'T.E. Lawrence headquarters during Arab Revolt'
            },
            {
                name: 'Al-Ahsa Oasis',
                type: 'Oasis',
                coordinates: [25.37, 49.59],
                description: 'Largest oasis in the world',
                area: '85.4 km² of palm groves',
                palms: '2.5 million date palm trees',
                UNESCO: 'World Heritage Site (2018)',
                springs: 'Over 60 artesian springs',
                history: 'Inhabited for 6,000+ years'
            },
            {
                name: 'Liwa Oasis',
                type: 'Oasis',
                coordinates: [23.13, 53.76],
                description: 'Crescent of oases on northern edge of Empty Quarter',
                length: '100 km arc',
                palms: 'Over 10 million date palms',
                feature: 'Moreeb Dune (300m, one of tallest in world)',
                significance: 'Ancestral home of Abu Dhabi ruling family'
            },
            {
                name: 'Madain Saleh (Hegra)',
                type: 'Archaeological Site',
                coordinates: [26.79, 37.95],
                description: 'Nabataean city with rock-cut tombs, sister city to Petra',
                UNESCO: 'First Saudi World Heritage Site (2008)',
                tombs: '131 monumental rock-cut tombs',
                age: '1st century CE',
                significance: 'Major stop on incense trade route'
            },
            {
                name: 'Edge of the World (Jebel Fihrayn)',
                type: 'Cliff',
                coordinates: [24.94, 46.23],
                description: 'Dramatic escarpment with views over ancient seabed',
                height: '300m cliffs',
                location: 'Near Riyadh, Saudi Arabia',
                geology: 'Ancient Tethys Sea floor'
            },
            {
                name: 'Wahiba Sands',
                type: 'Sand Sea',
                coordinates: [21.91, 58.75],
                description: 'Accessible dune field in Oman',
                area: '12,500 km²',
                duneHeight: 'Up to 100m',
                inhabitants: 'Bedouin still live here',
                tourism: 'Popular for desert camps'
            },
            {
                name: 'Jebel Shams',
                type: 'Mountain',
                coordinates: [23.24, 57.25],
                height: '3,009m',
                description: 'Highest peak in Oman, "Grand Canyon of Arabia"',
                feature: 'Wadi Ghul canyon 1,000m deep',
                climate: 'Snow occasionally in winter'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Oases Branch
        // ═══════════════════════════════════════════════════════════
        oases: [
            {
                name: 'Al-Ahsa Oasis',
                coordinates: [25.37, 49.59],
                country: 'Saudi Arabia',
                population: 1200000,
                description: 'Largest natural oasis in the world',
                palms: '2.5 million date palms',
                springs: '60+ artesian springs',
                UNESCO: 'World Heritage Site',
                history: 'Settlement since 4000 BCE'
            },
            {
                name: 'Liwa Oasis',
                coordinates: [23.13, 53.76],
                country: 'UAE',
                population: 20000,
                description: 'String of villages on Empty Quarter edge',
                palms: '10+ million date palms',
                dunes: 'Borders highest dunes in Arabia',
                significance: 'Ancestral Al Nahyan homeland'
            },
            {
                name: 'Al Ain Oasis',
                coordinates: [24.22, 55.76],
                country: 'UAE',
                population: 766000,
                description: 'Garden city, "Green Heart of Abu Dhabi"',
                UNESCO: 'World Heritage Site',
                features: 'Falaj irrigation system, 147,000 date palms'
            },
            {
                name: 'Wadi Hanifa',
                coordinates: [24.63, 46.72],
                country: 'Saudi Arabia',
                description: 'Valley through Riyadh with restored wetlands',
                length: '120 km',
                restoration: 'Major bioremediation project'
            },
            {
                name: 'Tabuk Oasis',
                coordinates: [28.38, 36.57],
                country: 'Saudi Arabia',
                population: 900000,
                description: 'Northern oasis, site of famous Tabuk expedition',
                history: 'Prophet Muhammad led expedition here 630 CE'
            },
            {
                name: 'Taif',
                coordinates: [21.27, 40.42],
                country: 'Saudi Arabia',
                population: 700000,
                description: 'Mountain resort, "Summer capital"',
                elevation: '1,879m',
                features: 'Rose gardens, fruit orchards, cooler climate'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Cities Branch
        // ═══════════════════════════════════════════════════════════
        cities: [
            {
                name: 'Riyadh',
                coordinates: [24.71, 46.68],
                country: 'Saudi Arabia',
                population: 7500000,
                description: 'Capital of Saudi Arabia, largest city in Arabian Desert',
                features: 'Kingdom Centre, Diriyah historic site',
                climate: 'Extreme - 48°C summers common',
                growth: 'From small oasis town to megacity in 50 years'
            },
            {
                name: 'Dubai',
                coordinates: [25.27, 55.3],
                country: 'UAE',
                population: 3500000,
                description: 'Iconic modern city, global business hub',
                features: 'Burj Khalifa, Palm Islands, modern architecture',
                transformation: 'From fishing village to global city',
                tourism: '16 million visitors per year'
            },
            {
                name: 'Abu Dhabi',
                coordinates: [24.45, 54.37],
                country: 'UAE',
                population: 1500000,
                description: 'Capital of UAE, oil wealth center',
                features: 'Sheikh Zayed Mosque, Louvre Abu Dhabi',
                oilReserves: '6% of world\'s proven reserves'
            },
            {
                name: 'Doha',
                coordinates: [25.29, 51.53],
                country: 'Qatar',
                population: 2400000,
                description: 'Capital of Qatar, ultra-modern city',
                features: 'Museum of Islamic Art, Pearl Qatar',
                wealth: 'Highest GDP per capita in world',
                events: 'FIFA World Cup 2022'
            },
            {
                name: 'Kuwait City',
                coordinates: [29.38, 47.99],
                country: 'Kuwait',
                population: 3000000,
                description: 'Capital of Kuwait, Persian Gulf port',
                features: 'Kuwait Towers, historic souks',
                history: 'Major trading port, devastated in 1990 Iraqi invasion'
            },
            {
                name: 'Muscat',
                coordinates: [23.61, 58.59],
                country: 'Oman',
                population: 1550000,
                description: 'Capital of Oman, port city',
                features: 'Sultan Qaboos Mosque, Mutrah Souq',
                character: 'More traditional feel than other Gulf cities'
            },
            {
                name: 'Mecca',
                coordinates: [21.42, 39.83],
                country: 'Saudi Arabia',
                population: 2000000,
                description: 'Holiest city in Islam',
                significance: 'Birthplace of Prophet Muhammad',
                pilgrimage: '2 million hajj pilgrims annually',
                restriction: 'Non-Muslims prohibited from entering'
            },
            {
                name: 'Medina',
                coordinates: [24.47, 39.61],
                country: 'Saudi Arabia',
                population: 1500000,
                description: 'Second holiest city in Islam',
                significance: 'Prophet\'s Mosque, burial site of Muhammad',
                history: 'Destination of Hijra (migration) from Mecca'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Biodiversity Branch
        // ═══════════════════════════════════════════════════════════
        biodiversity: {
            overview: 'Harsh conditions support specialized desert species, many now endangered',
            
            plants: [
                {
                    name: 'Date Palm',
                    scientificName: 'Phoenix dactylifera',
                    description: 'Foundation of desert agriculture, cultivated 6,000+ years',
                    uses: 'Food, timber, rope, baskets',
                    significance: 'Over 400 varieties grown in region',
                    oasisDensity: '2.5 million in Al-Ahsa alone'
                },
                {
                    name: 'Ghaf Tree',
                    scientificName: 'Prosopis cineraria',
                    description: 'National tree of UAE, drought-resistant',
                    adaptation: 'Roots reach 30m deep for groundwater',
                    uses: 'Fodder, firewood, shade',
                    status: 'Protected in UAE'
                },
                {
                    name: 'Desert Hyacinth',
                    scientificName: 'Cistanche tubulosa',
                    description: 'Parasitic plant on tree roots',
                    adaptation: 'No chlorophyll, underground bulb',
                    uses: 'Traditional medicine'
                },
                {
                    name: 'Acacia tortilis',
                    scientificName: 'Vachellia tortilis',
                    description: 'Umbrella-shaped tree in wadis',
                    adaptation: 'Deep taproot, thorns, small leaves',
                    uses: 'Fodder, gum, firewood'
                },
                {
                    name: 'Calotropis (Apple of Sodom)',
                    scientificName: 'Calotropis procera',
                    description: 'Tough shrub with milky sap',
                    adaptation: 'Toxic sap deters herbivores',
                    uses: 'Traditional medicine, fiber'
                }
            ],
            
            animals: [
                {
                    name: 'Arabian Oryx',
                    scientificName: 'Oryx leucoryx',
                    description: 'Elegant white antelope, national animal of Qatar, UAE, Jordan',
                    population: '1,220 wild, 6,000-7,000 captive',
                    adaptation: 'Can detect rain from 80km, survives without drinking',
                    status: 'Vulnerable (recovered from Extinct in Wild 1972)',
                    conservation: 'One of greatest conservation successes',
                    history: 'Last wild one shot 1972, reintroduced from zoos'
                },
                {
                    name: 'Arabian Leopard',
                    scientificName: 'Panthera pardus nimr',
                    description: 'Smallest leopard subspecies, critically endangered',
                    population: '<200 (possibly <100)',
                    range: 'Mountains of Yemen, Oman, Saudi Arabia',
                    status: 'Critically Endangered',
                    threat: 'Habitat loss, prey depletion, persecution'
                },
                {
                    name: 'Dromedary Camel',
                    scientificName: 'Camelus dromedarius',
                    description: 'One-humped camel, domesticated in Arabia 4,000 years ago',
                    population: '1 million+ in Arabia',
                    adaptation: 'Survives weeks without water, tolerates 40% body water loss',
                    uses: 'Transport, racing (major industry), meat, milk',
                    value: 'Racing camels worth millions'
                },
                {
                    name: 'Arabian Sand Gazelle',
                    scientificName: 'Gazella marica',
                    description: 'Pale gazelle adapted to sandy deserts',
                    population: '8,000-10,000',
                    adaptation: 'Pale coat reflects heat, can survive without drinking',
                    status: 'Vulnerable'
                },
                {
                    name: 'Rüppell\'s Fox',
                    scientificName: 'Vulpes rueppellii',
                    description: 'Small desert fox similar to fennec',
                    adaptation: 'Large ears for heat dissipation',
                    diet: 'Insects, rodents, reptiles',
                    status: 'Least Concern'
                },
                {
                    name: 'Arabian Wolf',
                    scientificName: 'Canis lupus arabs',
                    description: 'Smallest wolf subspecies',
                    population: '<1,000',
                    adaptation: 'Adapted to extreme heat and scarce prey',
                    status: 'Not assessed (likely Endangered)'
                },
                {
                    name: 'Spiny-tailed Lizard',
                    scientificName: 'Uromastyx aegyptia',
                    description: 'Large herbivorous lizard, locally called "dhub"',
                    size: 'Up to 75cm',
                    adaptation: 'Gets water from plants, active in extreme heat',
                    use: 'Traditional food in some cultures'
                },
                {
                    name: 'Arabian Fat-tailed Scorpion',
                    scientificName: 'Androctonus crassicauda',
                    description: 'One of world\'s most venomous scorpions',
                    size: '10cm',
                    danger: 'Potentially fatal sting',
                    habitat: 'Rocky areas, ruins'
                },
                {
                    name: 'Sand Cat',
                    scientificName: 'Felis margarita',
                    description: 'Only cat living exclusively in desert',
                    adaptation: 'Furry paws insulate from hot sand, nocturnal',
                    status: 'Near Threatened',
                    range: 'Empty Quarter, Nafud'
                },
                {
                    name: 'Hamadryas Baboon',
                    scientificName: 'Papio hamadryas',
                    description: 'Found in southwest Arabian highlands',
                    population: 'Several thousand',
                    range: 'Yemen, Asir Mountains',
                    significance: 'Sacred to ancient Egyptians'
                }
            ],
            
            birds: [
                { name: 'Arabian Bustard', description: 'Large ground bird, endangered' },
                { name: 'Houbara Bustard', description: 'Hunted with falcons, conservation concern' },
                { name: 'Lappet-faced Vulture', description: 'Largest vulture in Arabia' },
                { name: 'Sooty Falcon', description: 'Breeds on Arabian islands' }
            ],
            
            marineLife: [
                { name: 'Dugong', description: 'Largest population in UAE waters (3,000+)' },
                { name: 'Whale Shark', description: 'Seasonally abundant in Gulf' },
                { name: 'Sea Turtles', description: '5 species nest on Arabian beaches' }
            ],
            
            endangeredSpecies: [
                { name: 'Arabian Leopard', status: 'Critically Endangered', population: '<200' },
                { name: 'Arabian Oryx', status: 'Vulnerable (recovering)', population: '1,220 wild' },
                { name: 'Arabian Tahr', status: 'Endangered', population: '<2,500' },
                { name: 'Houbara Bustard', status: 'Vulnerable', threat: 'Hunting' }
            ],
            
            extinctSpecies: [
                { name: 'Arabian Ostrich', status: 'Extinct', lastSeen: '1966' },
                { name: 'Syrian Wild Ass', status: 'Extinct', lastSeen: '1927' },
                { name: 'Cheetah', status: 'Regionally Extinct', lastSeen: '1970s' }
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Human Life Branch
        // ═══════════════════════════════════════════════════════════
        humanLife: {
            overview: 'From ancient Bedouin nomads to modern oil-rich metropolises',
            
            population: {
                total: '75 million in Arabian Peninsula',
                inDesert: 'Most now in cities',
                nomadic: '<5% traditional lifestyle'
            },
            
            indigenousPeoples: [
                {
                    name: 'Bedouin',
                    region: 'Throughout Arabian Desert',
                    population: '4-5 million (ethnic), <1 million nomadic',
                    lifestyle: 'Traditionally nomadic herders of camels, sheep, goats',
                    language: 'Arabic (various dialects)',
                    culture: 'Poetry, hospitality (diyafa), honor code',
                    change: 'Most now settled in villages/cities'
                },
                {
                    name: 'Marsh Arabs (Ma\'dan)',
                    region: 'Southern Iraq marshlands',
                    population: '20,000-40,000 (reduced from 500,000)',
                    lifestyle: 'Reed house dwellers, water buffalo herding',
                    threat: 'Marshes drained under Saddam Hussein, partly restored'
                }
            ],
            
            traditionalLife: {
                housing: ['Black goat-hair tents (beit al-sha\'r)', 'Mud-brick oasis houses', 'Wind towers for cooling'],
                transport: ['Camel (primary)', 'Donkey', 'Arabian horse (prized)'],
                clothing: ['Thobe/dishdasha (men)', 'Abaya (women)', 'Keffiyeh/ghutra headwear'],
                food: ['Dates', 'Camel milk', 'Rice (machboos)', 'Coffee (qahwa)', 'Lamb'],
                economy: ['Camel breeding', 'Date farming', 'Pearl diving', 'Trade']
            },
            
            modernLife: {
                transformation: 'Oil discovered 1938, transformed economy and society',
                urbanization: '85%+ now urban',
                infrastructure: 'World-class in Gulf states',
                expatriates: 'UAE: 88% non-citizens, Qatar: 85%',
                challenges: ['Water scarcity', 'Diversification from oil', 'Climate change']
            },
            
            religion: {
                dominant: 'Islam',
                holyCity: 'Mecca (birthplace of Islam)',
                pilgrimage: 'Hajj - 2 million annually',
                significance: 'Region is heartland of Islamic civilization'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Economic Importance Branch
        // ═══════════════════════════════════════════════════════════
        economy: [
            {
                sector: 'Oil & Gas',
                description: 'World\'s largest petroleum reserves',
                value: '50% of global proven oil reserves',
                majorProducers: ['Saudi Arabia (2nd)', 'UAE (7th)', 'Kuwait (9th)', 'Qatar (gas)'],
                saudiOil: '260 billion barrels reserves',
                impact: 'Transformed region from one of poorest to wealthiest',
                export: 'Primary revenue source for all Gulf states'
            },
            {
                sector: 'Desalination',
                description: 'World\'s largest desalination capacity',
                production: 'Saudi Arabia: 5.5 million m³/day (largest)',
                necessity: 'Almost no natural freshwater',
                technology: 'Multi-stage flash, reverse osmosis',
                challenge: 'Energy intensive, environmental impact'
            },
            {
                sector: 'Tourism',
                description: 'Rapidly growing sector',
                dubaiVisitors: '16 million annually',
                attractions: ['Dubai architecture', 'Desert safaris', 'Heritage sites', 'Luxury resorts'],
                saudiOpening: 'Tourist visas from 2019, major investment',
                religiousTourism: '15 million to Mecca/Medina annually'
            },
            {
                sector: 'Finance',
                description: 'Global financial hubs',
                centers: ['Dubai International Financial Centre', 'Abu Dhabi Global Market', 'Qatar Financial Centre'],
                wealth: 'Sovereign wealth funds among world\'s largest'
            },
            {
                sector: 'Date Production',
                description: 'World\'s leading date producers',
                saudiProduction: '1.5 million tonnes/year',
                varieties: '400+ varieties',
                significance: 'Cultural and economic importance'
            },
            {
                sector: 'Camel Racing & Breeding',
                description: 'Major industry and cultural sport',
                value: 'Racing camels worth $1-10 million',
                events: 'Major festivals with large prizes',
                technology: 'Robot jockeys (replaced child jockeys)'
            },
            {
                sector: 'Renewable Energy',
                description: 'Major investment in solar',
                projects: ['NEOM (Saudi)', 'Mohammed bin Rashid Solar Park (UAE)'],
                goal: 'UAE: 44% clean energy by 2050',
                potential: 'Abundant solar radiation'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Environmental Issues Branch
        // ═══════════════════════════════════════════════════════════
        environmentalIssues: [
            {
                issue: 'Water Scarcity',
                severity: 'Critical',
                description: 'Among world\'s most water-stressed nations',
                renewable: 'Almost no renewable freshwater',
                aquifer: 'Fossil aquifers depleting rapidly',
                solution: 'Desalination provides 50-90% of water',
                cost: 'Extremely energy intensive'
            },
            {
                issue: 'Climate Change',
                severity: 'Critical',
                description: 'Already hot region getting hotter',
                projections: '2-4°C increase by 2100',
                impacts: [
                    'Heat waves exceeding human survivability',
                    'Sea level rise threatening coastal cities',
                    'More intense sandstorms'
                ],
                study: 'Parts may be uninhabitable by 2100'
            },
            {
                issue: 'Desalination Impact',
                severity: 'High',
                description: 'Brine discharge affecting marine ecosystems',
                discharge: 'Hypersaline water returned to Gulf',
                impact: 'Gulf salinity increasing',
                heating: 'Waste heat from plants'
            },
            {
                issue: 'Air Quality',
                severity: 'High',
                description: 'Dust storms and urban pollution',
                dustDays: '10-50 major dust events per year',
                urbanPollution: 'Traffic, industry, construction',
                health: 'Respiratory issues prevalent'
            },
            {
                issue: 'Wildlife Decline',
                severity: 'High',
                description: 'Large mammals nearly extirpated',
                hunting: 'Historical overhunting',
                habitatLoss: 'Development, overgrazing',
                success: 'Arabian Oryx conservation'
            },
            {
                issue: 'Coastal Development',
                severity: 'Moderate',
                description: 'Artificial islands and reclamation',
                impact: 'Coral reef destruction, seagrass loss',
                affected: 'Dugong habitat, turtle nesting beaches'
            },
            {
                issue: 'Oil Spills',
                severity: 'Moderate',
                description: 'Risk from massive oil infrastructure',
                history: 'Gulf War spill (1991) largest in history',
                ongoing: 'Pipeline leaks, tanker incidents'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Historical Importance Branch
        // ═══════════════════════════════════════════════════════════
        historicalImportance: [
            {
                era: '3000 BCE',
                title: 'Dilmun Civilization',
                description: 'Ancient trading civilization in Bahrain/Eastern Arabia',
                significance: 'Linked Mesopotamia with Indus Valley',
                evidence: 'Burial mounds, cuneiform references'
            },
            {
                era: '1000 BCE - 300 CE',
                title: 'Incense Trade',
                description: 'Frankincense and myrrh trade routes through Arabia',
                routes: 'Yemen to Mediterranean via Petra',
                wealth: 'Arabia Felix (Fortunate Arabia)',
                products: 'Incense worth more than gold'
            },
            {
                era: '300 BCE - 100 CE',
                title: 'Nabataean Kingdom',
                description: 'Desert traders built Petra and controlled routes',
                capital: 'Petra (Jordan)',
                skill: 'Water management in desert',
                legacy: 'Petra, Madain Saleh'
            },
            {
                era: '570 CE',
                title: 'Birth of Prophet Muhammad',
                description: 'Born in Mecca, founder of Islam',
                significance: 'Arabia becomes center of new world religion'
            },
            {
                era: '622 CE',
                title: 'Hijra (Migration)',
                description: 'Muhammad migrates from Mecca to Medina',
                significance: 'Start of Islamic calendar',
                outcome: 'Medina becomes first Islamic state'
            },
            {
                era: '632-750 CE',
                title: 'Islamic Conquests',
                description: 'Arab armies spread from Arabia to Spain and Central Asia',
                extent: 'Largest empire to that date',
                legacy: 'Arabic language and Islam spread globally'
            },
            {
                era: '1500-1900',
                title: 'Ottoman Period',
                description: 'Much of Arabia under Ottoman influence',
                exceptions: 'Interior remained independent',
                events: 'Portuguese, British presence on coasts'
            },
            {
                era: '1902-1932',
                title: 'Saudi Unification',
                description: 'Ibn Saud unifies Arabian Peninsula',
                foundation: 'Kingdom of Saudi Arabia proclaimed 1932'
            },
            {
                era: '1938',
                title: 'Oil Discovery',
                description: 'Commercial oil found in Saudi Arabia',
                location: 'Dammam Well #7',
                impact: 'Transformed Arabia from backwater to global importance'
            },
            {
                era: '1971',
                title: 'UAE Formation',
                description: 'Seven emirates unite after British withdrawal',
                development: 'Rapid modernization follows'
            },
            {
                era: '1990-1991',
                title: 'Gulf War',
                description: 'Iraq invades Kuwait, international coalition response',
                impact: 'Environmental disaster, regional realignment',
                oilFires: '700+ oil wells set ablaze'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Fun Facts Branch
        // ═══════════════════════════════════════════════════════════
        funFacts: [
            {
                fact: 'The Empty Quarter has no permanent human population and some areas have never been explored',
                category: 'Remoteness'
            },
            {
                fact: 'Dubai imports sand despite being surrounded by desert - beach sand requires specific properties',
                category: 'Irony'
            },
            {
                fact: 'Arabian camels can drink 100 liters of water in 10 minutes',
                category: 'Wildlife'
            },
            {
                fact: 'The Arabian Peninsula was tropical and green with rivers 10,000 years ago',
                category: 'History'
            },
            {
                fact: 'Racing camels can be worth more than $10 million',
                category: 'Economy'
            },
            {
                fact: 'Saudi Arabia has no permanent rivers, only seasonal wadis',
                category: 'Geography'
            },
            {
                fact: 'Qatar is building air-conditioned outdoor spaces for the heat',
                category: 'Engineering'
            },
            {
                fact: 'The Arabian Oryx was extinct in the wild from 1972 to 1982 - now there are 1,200',
                category: 'Conservation'
            },
            {
                fact: 'Bedouin can navigate the desert by taste - they can identify locations by the taste of soil',
                category: 'Culture'
            },
            {
                fact: 'Wadi Rum in Jordan was used to film Mars scenes in "The Martian"',
                category: 'Film'
            },
            {
                fact: 'Palm Islands in Dubai used 3 billion cubic feet of sand',
                category: 'Engineering'
            },
            {
                fact: 'The word "alcohol" comes from Arabic "al-kuhl" - an Arabian invention',
                category: 'Language'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // JOURNEY WAYPOINTS - Cross the Desert Feature
        // ═══════════════════════════════════════════════════════════
        journeyWaypoints: [
            {
                name: 'Wadi Rum, Jordan',
                coordinates: [29.58, 35.42],
                description: 'Starting in the dramatic "Valley of the Moon"',
                type: 'start',
                duration: 3000
            },
            {
                name: 'An-Nafud Desert',
                coordinates: [28.5, 40.0],
                description: 'Crossing the great northern sand sea with red dunes',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Riyadh Oasis',
                coordinates: [24.71, 46.68],
                description: 'The capital rises from the desert - ancient oasis turned megacity',
                type: 'settlement',
                duration: 3000
            },
            {
                name: 'Ad-Dahna Corridor',
                coordinates: [24.0, 48.0],
                description: 'The red sand arc connecting north to south',
                type: 'terrain',
                duration: 3000
            },
            {
                name: 'Al-Ahsa Oasis',
                coordinates: [25.37, 49.59],
                description: 'The world\'s largest natural oasis - 2.5 million palm trees',
                type: 'oasis',
                duration: 4000
            },
            {
                name: 'Rub\' al Khali Edge',
                coordinates: [22.0, 51.0],
                description: 'Entering the Empty Quarter - the largest sand desert on Earth',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Deep Empty Quarter',
                coordinates: [20.0, 50.0],
                description: 'In the heart of nothing - no water, no life, no shelter',
                type: 'terrain',
                duration: 5000
            },
            {
                name: 'Liwa Oasis, UAE',
                coordinates: [23.13, 53.76],
                description: 'Journey\'s end at the crescent of life on the Empty Quarter\'s edge',
                type: 'end',
                duration: 3000
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // QUICK FACTS - Profile Page Bottom Panel
        // ═══════════════════════════════════════════════════════════
        quickFacts: {
            area: '2,330,000 km²',
            type: 'Hot Desert',
            avgTemp: '33°C (interior)',
            rainfall: '<100mm/year',
            countries: '8 countries',
            population: '75 million (peninsula)'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #5 - GOBI DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'gobi-desert',
        name: 'Gobi Desert',
        subtitle: 'The Dinosaur Graveyard',
        countries: [
            { name: 'Mongolia', code: 'MN' },
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        subType: 'Rain Shadow Desert',
        area: 1295000,
        areaRank: 5,
        rank: 5,
        coordinates: [42.5, 105.0],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=800',
            'https://images.unsplash.com/photo-1563204601-fc81cc4cd883?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Gobi Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [87, 47], [97, 47], [115, 45], [120, 42], [118, 38],
                    [110, 37], [100, 38], [90, 40], [87, 45], [87, 47]
                ]]
            }
        },
        
        location: {
            continent: 'Asia (Central/East)',
            hemispheres: ['Northern', 'Eastern'],
            latitudeRange: '37°N to 47°N',
            longitudeRange: '87°E to 120°E',
            geographicCenter: '42.5°N, 105°E',
            totalCountries: 2,
            percentInMongolia: 60,
            percentInChina: 40,
            borderedBy: ['Altai Mountains (west)', 'Mongolian Steppe (north)', 'North China Plain (south)', 'Manchurian Plain (east)'],
            elevation: '910-1,520m above sea level'
        },
        
        desertClassification: {
            primaryType: 'Cold Desert',
            secondaryType: 'Rain Shadow Desert',
            climateClassification: 'BWk (Cold Desert Climate)',
            formationCauses: [
                {
                    cause: 'Rain Shadow Effect',
                    explanation: 'Himalayas and Tibetan Plateau block Indian Ocean moisture'
                },
                {
                    cause: 'Continental Interior',
                    explanation: 'Far from any ocean, moisture doesn\'t penetrate'
                },
                {
                    cause: 'High Altitude',
                    explanation: 'Average elevation over 1,000m contributes to extreme temperatures'
                },
                {
                    cause: 'Siberian High Pressure',
                    explanation: 'Winter high pressure brings cold dry air'
                }
            ],
            whyItsDesert: 'Himalayan rain shadow combined with extreme continental location creates cold, dry conditions',
            uniqueFeature: 'Asia\'s largest desert, extreme temperature range'
        },
        
        size: {
            totalArea: 1295000,
            areaUnit: 'km²',
            areaInMiles: 500000,
            length: '1,600 km east-west',
            width: '800 km north-south',
            comparisonToCountries: [
                'Larger than Peru',
                '5x size of United Kingdom',
                'Half of Mongolia'
            ],
            ranking: {
                amongDeserts: 5,
                totalDeserts: 50,
                coldDesertRank: 3,
                statement: 'Fifth largest desert, largest in Asia'
            },
            growthRate: 'Expanding 3,600 km²/year southward into China'
        },
        
        climate: {
            overview: 'Extreme temperature swings, cold winters, hot summers, very low rainfall',
            temperatureData: {
                summerHigh: {
                    typical: '38°C to 45°C',
                    extreme: 'Up to 50°C'
                },
                winterLow: {
                    typical: '-30°C to -40°C',
                    extreme: 'Below -40°C'
                },
                dailySwing: 'Up to 35°C variation in single day',
                annualMean: '-2°C to 8°C',
                annualRange: '80-90°C (summer high to winter low)',
                extremeRecords: {
                    hottestEver: '50°C',
                    coldestEver: '-47°C',
                    groundFrost: '10 months per year in north'
                }
            },
            precipitation: {
                annualAverage: '50-100mm',
                westernGobi: '<50mm',
                easternGobi: '100-200mm',
                type: 'Summer thunderstorms, winter snow',
                snowCover: '10-20 days per year',
                evaporation: 'Far exceeds precipitation'
            },
            wind: {
                springStorms: 'Severe dust storms March-May',
                averageSpeed: '15-20 km/h',
                dustReach: 'Gobi dust reaches Beijing, Korea, Japan, even USA',
                sandstormDays: '20-30 per year'
            }
        },
        
        landforms: [
            {
                name: 'Gravel Plains',
                description: 'Most of Gobi is bare rock and gravel, not sand',
                coverage: '~70% of desert',
                characteristics: 'Flat, hard-packed surface',
                mongolianName: 'Gobi means "waterless place" not "sandy"'
            },
            {
                name: 'Sand Dunes',
                description: 'Sand seas cover only small percentage',
                majorFields: ['Khongoryn Els (Singing Sands)', 'Mongol Els'],
                coverage: '~5% of desert',
                duneHeight: 'Up to 300m at Khongoryn Els'
            },
            {
                name: 'Mountains',
                description: 'Mountain ranges within and bordering desert',
                examples: ['Altai Mountains', 'Gobi Altai', 'Gurvan Saikhan'],
                height: 'Up to 4,374m (Khüiten Peak)'
            },
            {
                name: 'Canyons',
                description: 'Deep gorges carved by seasonal water',
                examples: ['Yolyn Am (Vulture Valley)', 'Bayanzag (Flaming Cliffs)'],
                features: 'Year-round ice in some valleys'
            },
            {
                name: 'Dry Lake Beds',
                description: 'Ancient lakes now salt flats',
                examples: ['Ulaan Nuur', 'Orog Nuur'],
                significance: 'Indicate wetter past climate'
            },
            {
                name: 'Flaming Cliffs (Bayanzag)',
                description: 'Red sandstone cliffs, major dinosaur fossil site',
                color: 'Orange-red at sunset',
                significance: 'First dinosaur eggs discovered here 1923'
            }
        ],
        
        features: [
            {
                name: 'Flaming Cliffs (Bayanzag)',
                type: 'Paleontological Site',
                coordinates: [44.15, 103.72],
                description: 'World-famous dinosaur fossil site, red sandstone cliffs',
                discovery: 'Roy Chapman Andrews expedition, 1923',
                findings: 'First dinosaur eggs, Velociraptor, Protoceratops',
                age: 'Cretaceous fossils, 75 million years old',
                name_origin: 'Glows red at sunset'
            },
            {
                name: 'Khongoryn Els (Singing Sands)',
                type: 'Sand Dunes',
                coordinates: [43.77, 102.18],
                height: 'Up to 300m',
                length: '180 km long, 27 km wide',
                description: 'Largest sand dunes in Gobi, "singing" from wind',
                sound: 'Wind creates humming/booming sound',
                activity: 'Camel trekking, sandboarding'
            },
            {
                name: 'Yolyn Am (Vulture Valley)',
                type: 'Canyon',
                coordinates: [43.5, 104.1],
                depth: '200m deep',
                description: 'Narrow gorge with year-round ice',
                ice: 'Ice persists into July despite desert heat',
                wildlife: 'Lammergeier vultures, ibex, pika'
            },
            {
                name: 'Gurvan Saikhan Mountains',
                type: 'Mountain Range',
                coordinates: [43.5, 104.5],
                height: '2,825m highest peak',
                description: '"Three Beauties" - mountain range in southern Gobi',
                protection: 'Gobi Gurvansaikhan National Park',
                size: 'Largest national park in Mongolia'
            },
            {
                name: 'Nemegt Basin',
                type: 'Paleontological Site',
                coordinates: [43.5, 100.5],
                description: 'Richest dinosaur fossil site in Asia',
                findings: 'Tarbosaurus (Asian T-Rex), Gallimimus, Therizinosaurus',
                age: 'Late Cretaceous, 70 million years'
            },
            {
                name: 'Dalanzadgad',
                type: 'Town',
                coordinates: [43.57, 104.43],
                population: 20000,
                description: 'Capital of South Gobi Province, gateway to national park',
                facilities: 'Airport, tourist base'
            },
            {
                name: 'Sainshand',
                type: 'Town',
                coordinates: [44.9, 110.13],
                population: 25000,
                description: 'Trans-Mongolian Railway stop, Buddhist temples',
                significance: 'Danzan Ravjaa museum and energy center'
            },
            {
                name: 'Ulaanbaatar',
                type: 'Capital City',
                coordinates: [47.92, 106.92],
                population: 1500000,
                description: 'Mongolia\'s capital, gateway to Gobi',
                note: 'Not in desert but primary access point'
            }
        ],
        
        oases: [
            {
                name: 'Ekhiin Gol Oasis',
                coordinates: [41.85, 101.1],
                country: 'Mongolia',
                description: 'Rare water source in deep Gobi',
                features: 'Natural spring, saxaul forest',
                wildlife: 'Wild ass, gazelle water here'
            },
            {
                name: 'Zulganai Oasis',
                coordinates: [42.5, 99.0],
                country: 'Mongolia',
                description: 'Spring-fed oasis in Trans-Altai Gobi',
                significance: 'Critical wildlife corridor'
            },
            {
                name: 'Dunhuang Oasis',
                coordinates: [40.14, 94.66],
                country: 'China',
                population: 200000,
                description: 'Ancient Silk Road oasis on Gobi edge',
                features: 'Mogao Caves (UNESCO), Crescent Lake',
                history: 'Major trading post for 2,000+ years'
            }
        ],
        
        cities: [
            {
                name: 'Dunhuang',
                coordinates: [40.14, 94.66],
                country: 'China',
                population: 200000,
                description: 'Ancient Silk Road oasis city, Mogao Caves',
                UNESCO: 'Mogao Caves World Heritage Site',
                history: '2,000 years of continuous habitation'
            },
            {
                name: 'Jiayuguan',
                coordinates: [39.77, 98.29],
                country: 'China',
                population: 300000,
                description: 'Western end of Great Wall, Gobi gateway',
                feature: 'Jiayuguan Fort (1372 CE)',
                nickname: '"First Pass Under Heaven"'
            },
            {
                name: 'Dalanzadgad',
                coordinates: [43.57, 104.43],
                country: 'Mongolia',
                population: 20000,
                description: 'Capital of South Gobi Province',
                features: 'Gateway to Gobi Gurvansaikhan National Park'
            },
            {
                name: 'Sainshand',
                coordinates: [44.9, 110.13],
                country: 'Mongolia',
                population: 25000,
                description: 'Trans-Mongolian Railway town',
                features: 'Khamaryn Khiid monastery, energy center'
            },
            {
                name: 'Bayanhongor',
                coordinates: [46.19, 100.72],
                country: 'Mongolia',
                population: 30000,
                description: 'Provincial capital on Gobi edge',
                features: 'Gateway to western Gobi'
            }
        ],
        
        biodiversity: {
            overview: 'Surprisingly rich wildlife adapted to extreme conditions',
            
            plants: [
                {
                    name: 'Saxaul Tree',
                    scientificName: 'Haloxylon ammodendron',
                    description: 'Main tree of Gobi, critical desert vegetation',
                    adaptation: 'Deep roots (up to 10m), stores water, salty bark',
                    uses: 'Fuel, erosion control, camel fodder',
                    threat: 'Overharvesting for firewood'
                },
                {
                    name: 'Wild Onion',
                    scientificName: 'Allium mongolicum',
                    description: 'Common herb in steppe-desert transition',
                    adaptation: 'Bulb survives cold and drought',
                    uses: 'Food for herders and wildlife'
                },
                {
                    name: 'Ephedra',
                    scientificName: 'Ephedra sinica',
                    description: 'Medicinal shrub, source of ephedrine',
                    adaptation: 'Leafless, photosynthesizes through stems',
                    uses: 'Traditional medicine'
                },
                {
                    name: 'Nitraria',
                    scientificName: 'Nitraria sibirica',
                    description: 'Salt-tolerant shrub forming mounds',
                    adaptation: 'Tolerates extreme salinity',
                    fruit: 'Edible berries'
                },
                {
                    name: 'Feather Grass',
                    scientificName: 'Stipa species',
                    description: 'Dominant grass in steppe-desert margins',
                    significance: 'Critical grazing resource'
                }
            ],
            
            animals: [
                {
                    name: 'Gobi Bear (Mazaalai)',
                    scientificName: 'Ursus arctos gobiensis',
                    description: 'World\'s rarest bear, only desert-dwelling brown bear',
                    population: '<40 individuals',
                    status: 'Critically Endangered',
                    range: 'Small area in western Gobi',
                    diet: 'Wild rhubarb, nitraria berries, rodents',
                    significance: 'Mongolian national treasure'
                },
                {
                    name: 'Wild Bactrian Camel',
                    scientificName: 'Camelus ferus',
                    description: 'Last truly wild camel species, two humps',
                    population: '<1,000',
                    status: 'Critically Endangered',
                    adaptation: 'Drinks salt water, survives -30°C to 40°C',
                    range: 'Gobi and Taklamakan edges',
                    difference: 'Genetically distinct from domestic Bactrian'
                },
                {
                    name: 'Mongolian Wild Ass (Khulan)',
                    scientificName: 'Equus hemionus hemionus',
                    description: 'Largest population of Asian wild ass',
                    population: '20,000-25,000',
                    adaptation: 'Can run 70 km/h, survives extreme cold',
                    status: 'Near Threatened',
                    range: 'Mongolian Gobi'
                },
                {
                    name: 'Gobi Ibex',
                    scientificName: 'Capra sibirica',
                    description: 'Mountain goat of Gobi ranges',
                    population: '40,000 in Mongolia',
                    adaptation: 'Climbs steep rocky terrain',
                    status: 'Near Threatened'
                },
                {
                    name: 'Snow Leopard',
                    scientificName: 'Panthera uncia',
                    description: 'Ghost cat of the mountains',
                    population: '500-1,000 in Mongolia',
                    range: 'Gobi Altai and mountain ranges',
                    status: 'Vulnerable',
                    adaptation: 'Thick fur, long tail for balance'
                },
                {
                    name: 'Mongolian Gazelle',
                    scientificName: 'Procapra gutturosa',
                    description: 'One of last great migrations on Earth',
                    population: '1-1.5 million',
                    migration: 'Herds of 100,000+ cross Gobi',
                    status: 'Least Concern'
                },
                {
                    name: 'Black-tailed Gazelle',
                    scientificName: 'Gazella subgutturosa',
                    description: 'Desert gazelle of Gobi proper',
                    population: '50,000',
                    adaptation: 'Survives without drinking water',
                    status: 'Vulnerable'
                },
                {
                    name: 'Pallas\'s Cat',
                    scientificName: 'Otocolobus manul',
                    description: 'Fluffy wild cat of Central Asian steppes',
                    adaptation: 'Extremely thick fur for cold',
                    status: 'Near Threatened',
                    appearance: 'Grumpy expression, round pupils'
                },
                {
                    name: 'Long-eared Jerboa',
                    scientificName: 'Euchoreutes naso',
                    description: 'Bizarre rodent with enormous ears',
                    adaptation: 'Ears 1/3 of body length for heat regulation',
                    nocturnal: 'Avoids heat by burrowing'
                },
                {
                    name: 'Corsac Fox',
                    scientificName: 'Vulpes corsac',
                    description: 'Small fox of steppes and deserts',
                    adaptation: 'Lives in burrows, survives -50°C',
                    status: 'Least Concern'
                }
            ],
            
            birds: [
                { name: 'Saker Falcon', description: 'Prized falconry bird, national bird of Mongolia' },
                { name: 'Lammergeier', description: 'Giant vulture, drops bones to break them' },
                { name: 'Houbara Bustard', description: 'Large ground bird, hunted by Arab falconers' },
                { name: 'Pallas\'s Sandgrouse', description: 'Desert bird, flies to water daily' }
            ],
            
            dinosaurs: [
                {
                    name: 'Velociraptor',
                    era: 'Late Cretaceous (75-71 mya)',
                    discovery: 'Flaming Cliffs, 1923',
                    significance: 'Famous "raptor" of Jurassic Park (smaller in reality)'
                },
                {
                    name: 'Protoceratops',
                    era: 'Late Cretaceous',
                    discovery: 'Flaming Cliffs, 1923',
                    significance: 'Ancestor of horned dinosaurs'
                },
                {
                    name: 'Tarbosaurus',
                    era: 'Late Cretaceous',
                    discovery: 'Nemegt Basin',
                    significance: 'Asian equivalent of T-Rex'
                },
                {
                    name: 'Oviraptor',
                    era: 'Late Cretaceous',
                    discovery: 'Flaming Cliffs',
                    significance: 'Found sitting on eggs, parental care evidence'
                },
                {
                    name: 'Therizinosaurus',
                    era: 'Late Cretaceous',
                    discovery: 'Nemegt',
                    significance: 'Bizarre dinosaur with 1m claws'
                }
            ],
            
            endangeredSpecies: [
                { name: 'Gobi Bear', status: 'Critically Endangered', population: '<40' },
                { name: 'Wild Bactrian Camel', status: 'Critically Endangered', population: '<1,000' },
                { name: 'Snow Leopard', status: 'Vulnerable', population: '500-1,000 in Mongolia' },
                { name: 'Takhi (Przewalski\'s Horse)', status: 'Endangered', population: '2,000 (reintroduced)' }
            ]
        },
        
        humanLife: {
            overview: 'Nomadic herders have lived in Gobi for thousands of years',
            
            population: {
                inDesert: '500,000 in Gobi region',
                density: '0.3 people per km²',
                lifestyle: '30% still semi-nomadic'
            },
            
            indigenousPeoples: [
                {
                    name: 'Mongolian Nomads',
                    population: 'Majority of Gobi inhabitants',
                    lifestyle: 'Herding goats, sheep, horses, camels, cattle',
                    dwelling: 'Ger (yurt) - portable felt tent',
                    movement: 'Move 2-4 times per year following pasture',
                    culture: 'Ancient traditions, Buddhism, shamanism'
                }
            ],
            
            traditionalLife: {
                housing: ['Ger (yurt) - circular felt tent', 'Easy to assemble/disassemble', 'Fits on camels for transport'],
                livestock: ['Goats (cashmere)', 'Sheep', 'Horses', 'Camels', 'Cattle/yaks'],
                food: ['Airag (fermented mare\'s milk)', 'Dried meat (borts)', 'Dairy products', 'Mutton'],
                economy: ['Cashmere production', 'Livestock', 'Mining (modern)']
            },
            
            challenges: [
                'Desertification increasing',
                'Climate change (dzud - harsh winters)',
                'Overgrazing from cashmere boom',
                'Mining impacts',
                'Youth migration to cities'
            ]
        },
        
        economy: [
            {
                sector: 'Mining',
                description: 'Vast mineral resources discovered',
                resources: ['Copper (Oyu Tolgoi)', 'Gold', 'Coal (Tavan Tolgoi)', 'Rare earths'],
                oyuTolgoi: 'One of world\'s largest copper-gold mines',
                controversy: 'Environmental and social impacts'
            },
            {
                sector: 'Cashmere',
                description: 'Mongolia is 2nd largest cashmere producer',
                production: '9,000 tonnes/year',
                goats: '27 million cashmere goats',
                impact: 'Overgrazing causing desertification'
            },
            {
                sector: 'Tourism',
                description: 'Growing adventure tourism',
                activities: ['Dinosaur sites', 'Ger camps', 'Camel trekking', 'Eagle hunters'],
                visitors: '500,000+ annually to Mongolia',
                growth: 'Fastest growing sector'
            },
            {
                sector: 'Livestock',
                description: 'Traditional economy still important',
                animals: '70 million head in Mongolia',
                products: 'Meat, dairy, hides, wool'
            }
        ],
        
        environmentalIssues: [
            {
                issue: 'Desertification',
                severity: 'Critical',
                description: 'Gobi expanding 3,600 km²/year southward',
                causes: ['Climate change', 'Overgrazing', 'Deforestation'],
                impacts: ['Beijing dust storms', 'Pasture loss', 'Herder displacement'],
                response: 'China\'s Great Green Wall project'
            },
            {
                issue: 'Climate Change',
                severity: 'Critical',
                description: 'Mongolia warming faster than global average',
                changes: ['More extreme temperatures', 'Less snow', 'More dzud events'],
                dzud: 'Severe winters killing millions of livestock'
            },
            {
                issue: 'Overgrazing',
                severity: 'High',
                description: 'Cashmere boom caused goat numbers to triple',
                impact: '90% of pastureland degraded',
                cause: 'Cashmere market incentives'
            },
            {
                issue: 'Mining Impact',
                severity: 'High',
                description: 'Large-scale mining affecting environment',
                issues: ['Water depletion', 'Dust pollution', 'Wildlife displacement'],
                tension: 'Economic benefit vs environmental cost'
            },
            {
                issue: 'Dust Storms',
                severity: 'High',
                description: 'Increasing dust storms affect East Asia',
                reach: 'Dust reaches Beijing, Korea, Japan, even North America',
                health: 'Respiratory problems, reduced visibility'
            },
            {
                issue: 'Wildlife Decline',
                severity: 'High',
                description: 'Poaching and habitat loss threatening species',
                victims: ['Gobi Bear', 'Wild Camel', 'Argali sheep'],
                cause: 'Illegal hunting, mining, fencing'
            }
        ],
        
        historicalImportance: [
            {
                era: 'Cretaceous Period',
                title: 'Dinosaur Age',
                description: 'Gobi was dinosaur paradise 75 million years ago',
                climate: 'Semi-arid with seasonal rivers',
                evidence: 'World\'s best preserved dinosaur fossils'
            },
            {
                era: '2000 BCE',
                title: 'Bronze Age Settlement',
                description: 'Nomadic cultures develop in Gobi region',
                evidence: 'Deer stones, burial mounds'
            },
            {
                era: '200 BCE - 100 CE',
                title: 'Xiongnu Empire',
                description: 'Powerful nomadic confederation',
                significance: 'Controlled Silk Road, rivaled Han China',
                legacy: 'May be ancestors of Huns'
            },
            {
                era: '1206-1368 CE',
                title: 'Mongol Empire',
                description: 'Gobi at heart of largest land empire in history',
                founder: 'Genghis Khan united Mongol tribes',
                extent: 'From Korea to Poland',
                capital: 'Karakorum in northern Gobi edge'
            },
            {
                era: '13th century',
                title: 'Silk Road Peak',
                description: 'Trade routes crossed Gobi',
                goods: ['Silk', 'Spices', 'Porcelain', 'Ideas'],
                safety: 'Pax Mongolica ensured safe passage'
            },
            {
                era: '1923',
                title: 'Dinosaur Discovery',
                description: 'Roy Chapman Andrews expedition finds dinosaur eggs',
                location: 'Flaming Cliffs',
                significance: 'First dinosaur eggs ever discovered',
                impact: 'Gobi becomes paleontological paradise'
            },
            {
                era: '1990',
                title: 'Democratic Revolution',
                description: 'Mongolia transitions to democracy',
                impact: 'Opening to tourism, foreign investment'
            },
            {
                era: '2000s',
                title: 'Mining Boom',
                description: 'Discovery of massive mineral deposits',
                projects: 'Oyu Tolgoi copper/gold mine',
                impact: 'Economic transformation, environmental concerns'
            }
        ],
        
        funFacts: [
            {
                fact: 'The Gobi is not sandy - only 5% is sand dunes, the rest is bare rock and gravel',
                category: 'Misconception'
            },
            {
                fact: 'The first dinosaur eggs ever discovered were found in the Gobi in 1923',
                category: 'Paleontology'
            },
            {
                fact: 'The Gobi Bear is the rarest bear in the world with fewer than 40 individuals',
                category: 'Wildlife'
            },
            {
                fact: 'Temperatures can range from -40°C in winter to +50°C in summer - a 90°C variation',
                category: 'Climate'
            },
            {
                fact: 'Wild Bactrian camels can drink salt water that would kill other mammals',
                category: 'Wildlife'
            },
            {
                fact: 'Gobi dust blows all the way to Beijing, Korea, Japan, and even North America',
                category: 'Environment'
            },
            {
                fact: 'Mongolian nomads can set up a ger (yurt) in about an hour',
                category: 'Culture'
            },
            {
                fact: 'The word "Gobi" means "waterless place" in Mongolian, not "sandy desert"',
                category: 'Language'
            },
            {
                fact: 'Marco Polo crossed the Gobi, describing it as "so long it would take a year to go from end to end"',
                category: 'History'
            },
            {
                fact: 'The "Singing Sands" of Khongoryn Els produce a booming sound when wind blows over them',
                category: 'Phenomenon'
            }
        ],
        
        journeyWaypoints: [
            {
                name: 'Ulaanbaatar',
                coordinates: [47.92, 106.92],
                description: 'Starting from Mongolia\'s capital, gateway to the Gobi',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Mandalgovi',
                coordinates: [45.76, 106.27],
                description: 'Entering the Gobi proper, endless steppe gives way to desert',
                type: 'terrain',
                duration: 3000
            },
            {
                name: 'Flaming Cliffs (Bayanzag)',
                coordinates: [44.15, 103.72],
                description: 'Where dinosaur history was written - first eggs discovered here',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Khongoryn Els (Singing Sands)',
                coordinates: [43.77, 102.18],
                description: 'The great dunes rise 300m - they sing in the wind',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Yolyn Am (Vulture Valley)',
                coordinates: [43.5, 104.1],
                description: 'A frozen canyon in the heart of the desert',
                type: 'landmark',
                duration: 3000
            },
            {
                name: 'Gurvan Saikhan Mountains',
                coordinates: [43.5, 104.5],
                description: 'The "Three Beauties" - mountains in the desert',
                type: 'terrain',
                duration: 3000
            },
            {
                name: 'Dalanzadgad',
                coordinates: [43.57, 104.43],
                description: 'Journey\'s end at the capital of South Gobi',
                type: 'end',
                duration: 3000
            }
        ],
        
        quickFacts: {
            area: '1,295,000 km²',
            type: 'Cold Desert',
            avgTemp: '-2°C to 8°C (annual)',
            rainfall: '50-100mm/year',
            countries: 'Mongolia, China',
            population: '~500,000'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #6 - KALAHARI DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'kalahari-desert',
        name: 'Kalahari Desert',
        subtitle: 'Home of the San People',
        countries: [
            { name: 'Botswana', code: 'BW' },
            { name: 'Namibia', code: 'NA' },
            { name: 'South Africa', code: 'ZA' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        subType: 'Semi-arid/Fossil Desert',
        area: 900000,
        areaRank: 6,
        rank: 6,
        coordinates: [-24.5, 21.5],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800',
            'https://images.unsplash.com/photo-1504945005722-33670dcaf685?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Kalahari Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [17, -18], [25, -18], [28, -22], [28, -28], [24, -28],
                    [20, -28], [17, -26], [17, -22], [17, -18]
                ]]
            }
        },
        
        location: {
            continent: 'Africa (Southern)',
            hemispheres: ['Southern', 'Eastern'],
            latitudeRange: '18°S to 28°S',
            longitudeRange: '17°E to 28°E',
            geographicCenter: '-24.5°S, 21.5°E',
            totalCountries: 3,
            percentages: { Botswana: 70, Namibia: 20, SouthAfrica: 10 },
            borders: ['Okavango Delta (north)', 'Orange River (south)']
        },
        
        desertClassification: {
            primaryType: 'Hot Semi-arid',
            secondaryType: 'Fossil Desert',
            climateClassification: 'BSh/BWh (Hot Semi-arid/Hot Desert)',
            formationCauses: [
                {
                    cause: 'Subtropical High Pressure',
                    explanation: 'Located under descending dry air zone'
                },
                {
                    cause: 'Cold Benguela Current',
                    explanation: 'Cools air over Atlantic, reducing rainfall'
                },
                {
                    cause: 'Continental Interior',
                    explanation: 'Far from moisture sources'
                }
            ],
            uniqueFeature: 'Technically semi-arid, not true desert - receives more rain than most deserts',
            debate: 'Some scientists classify it as desert, others as semi-desert or savanna'
        },
        
        size: {
            totalArea: 900000,
            areaUnit: 'km²',
            comparisonToCountries: ['Larger than Texas', '3.5x United Kingdom'],
            ranking: { amongDeserts: 6, statement: 'Sixth largest desert' }
        },
        
        climate: {
            overview: 'Hot semi-arid with summer rainfall - wetter than typical deserts',
            temperatureData: {
                summerHigh: { typical: '35°C to 45°C' },
                winterLow: { typical: '-10°C to 10°C (frost common)' },
                extremeRecords: {
                    hottestEver: '45°C',
                    coldestEver: '-14°C'
                }
            },
            precipitation: {
                annualAverage: '150-500mm (varies by region)',
                southern: '150mm',
                northern: '500mm',
                season: 'Summer (November-April)',
                type: 'Thunderstorms'
            }
        },
        
        landforms: [
            {
                name: 'Sand Sheets',
                description: 'Vast areas of red sand (Kalahari sand)',
                coverage: 'Covers most of region',
                depth: 'Up to 200m deep',
                color: 'Red from iron oxide'
            },
            {
                name: 'Linear Dunes',
                description: 'Long parallel sand ridges',
                orientation: 'Northwest-southeast',
                type: 'Mostly vegetated, stabilized'
            },
            {
                name: 'Pans (Salt Lakes)',
                description: 'Ancient lake beds, seasonal water',
                examples: ['Makgadikgadi Pans', 'Etosha Pan (Namibia edge)'],
                size: 'Makgadikgadi: 16,000 km²'
            },
            {
                name: 'Okavango Delta',
                description: 'Inland river delta on Kalahari edge',
                area: '15,000-22,000 km² (seasonal)',
                significance: 'World\'s largest inland delta',
                UNESCO: 'World Heritage Site'
            },
            {
                name: 'Fossil River Valleys',
                description: 'Ancient rivers now dry',
                examples: ['Molopo River', 'Nossob River'],
                water: 'Flow only after heavy rains'
            }
        ],
        
        features: [
            {
                name: 'Okavango Delta',
                type: 'Inland Delta',
                coordinates: [-19.3, 22.9],
                area: '15,000-22,000 km²',
                description: 'Largest inland delta in world, never reaches sea',
                UNESCO: 'World Heritage Site (2014)',
                wildlife: 'Africa\'s highest elephant concentration',
                water: 'Fed by Okavango River from Angola'
            },
            {
                name: 'Makgadikgadi Pans',
                type: 'Salt Pans',
                coordinates: [-20.5, 25.5],
                area: '16,000 km²',
                description: 'One of largest salt flats in world',
                rainy: 'Flamingos, zebra migration when wet',
                dry: 'White lunar landscape'
            },
            {
                name: 'Central Kalahari Game Reserve',
                type: 'Protected Area',
                coordinates: [-22.5, 23.5],
                area: '52,800 km²',
                description: 'Second largest game reserve in world',
                wildlife: 'Lions, cheetahs, wild dogs, oryx',
                people: 'San Bushmen homeland'
            },
            {
                name: 'Deception Valley',
                type: 'Fossil River Valley',
                coordinates: [-22.5, 23.5],
                description: 'Ancient river bed, famous for wildlife',
                wildlife: 'Black-maned Kalahari lions',
                research: 'Site of famous lion and meerkat studies'
            },
            {
                name: 'Kgalagadi Transfrontier Park',
                type: 'Protected Area',
                coordinates: [-25.5, 20.5],
                area: '38,000 km²',
                description: 'Cross-border park (Botswana/South Africa)',
                significance: 'Africa\'s first transfrontier park (1999)',
                wildlife: 'Black-maned lions, gemsbok, cheetah'
            },
            {
                name: 'Tsodilo Hills',
                type: 'Rock Art Site',
                coordinates: [-18.75, 21.73],
                description: 'Sacred San site with 4,500 rock paintings',
                UNESCO: 'World Heritage Site (2001)',
                age: 'Paintings span 100,000 years',
                name: '"Louvre of the Desert"'
            }
        ],
        
        oases: [
            {
                name: 'Okavango Delta',
                coordinates: [-19.3, 22.9],
                country: 'Botswana',
                description: 'World\'s largest inland delta, never reaches sea',
                water: 'From Angola highlands, 11 trillion liters annually',
                wildlife: 'Africa\'s last great wildlife refuges'
            },
            {
                name: 'Gcwihaba (Drotsky\'s Caves)',
                coordinates: [-20.02, 21.28],
                country: 'Botswana',
                description: 'Cave system with underground lake',
                features: 'Stalactites, stalagmites'
            }
        ],
        
        cities: [
            {
                name: 'Gaborone',
                coordinates: [-24.66, 25.91],
                country: 'Botswana',
                population: 270000,
                description: 'Capital of Botswana, on Kalahari edge',
                note: 'Not in desert but gateway'
            },
            {
                name: 'Maun',
                coordinates: [-19.99, 23.42],
                country: 'Botswana',
                population: 65000,
                description: 'Gateway to Okavango Delta',
                tourism: 'Safari capital of Botswana'
            },
            {
                name: 'Upington',
                coordinates: [-28.45, 21.25],
                country: 'South Africa',
                population: 80000,
                description: 'Gateway to Kgalagadi, Orange River',
                industry: 'Wine, dates, solar energy'
            },
            {
                name: 'Windhoek',
                coordinates: [-22.56, 17.08],
                country: 'Namibia',
                population: 450000,
                description: 'Capital of Namibia, near Kalahari',
                note: 'Gateway to Namibian Kalahari'
            }
        ],
        
        biodiversity: {
            overview: 'Surprisingly rich due to higher rainfall than typical deserts',
            
            plants: [
                {
                    name: 'Camel Thorn Tree',
                    scientificName: 'Vachellia erioloba',
                    description: 'Iconic tree of Kalahari',
                    adaptation: 'Roots reach 60m deep for water',
                    uses: 'Shade, pods for wildlife fodder'
                },
                {
                    name: 'Tsamma Melon',
                    scientificName: 'Citrullus lanatus',
                    description: 'Wild watermelon, water source',
                    significance: 'Critical water for wildlife and San people',
                    origin: 'Ancestor of domestic watermelon'
                },
                {
                    name: 'Hoodia',
                    scientificName: 'Hoodia gordonii',
                    description: 'Succulent used by San as appetite suppressant',
                    adaptation: 'Stores water, looks like cactus',
                    use: 'San used it to suppress hunger on hunts'
                },
                {
                    name: 'Shepherd\'s Tree',
                    scientificName: 'Boscia albitrunca',
                    description: 'Evergreen tree, roots reach 70m',
                    significance: 'Provides shade and food for wildlife'
                }
            ],
            
            animals: [
                {
                    name: 'Kalahari Lion',
                    scientificName: 'Panthera leo',
                    description: 'Black-maned lions of the Kalahari',
                    adaptation: 'Survive without drinking water for weeks',
                    range: 'Central Kalahari, Kgalagadi',
                    status: 'Vulnerable'
                },
                {
                    name: 'Meerkat',
                    scientificName: 'Suricata suricatta',
                    description: 'Iconic cooperative mongoose',
                    behavior: 'Sentry system, complex social structure',
                    fame: 'Meerkat Manor filmed in Kalahari',
                    status: 'Least Concern'
                },
                {
                    name: 'Gemsbok (Oryx)',
                    scientificName: 'Oryx gazella',
                    description: 'Large antelope, national animal of Namibia',
                    adaptation: 'Can survive without drinking water, body temperature regulation',
                    status: 'Least Concern'
                },
                {
                    name: 'African Wild Dog',
                    scientificName: 'Lycaon pictus',
                    description: 'Endangered pack hunter',
                    population: '6,600 total, Kalahari population important',
                    adaptation: 'Highly efficient hunter',
                    status: 'Endangered'
                },
                {
                    name: 'Brown Hyena',
                    scientificName: 'Parahyaena brunnea',
                    description: 'Rarest hyena species',
                    population: '5,000-8,000',
                    range: 'Southern Africa, Kalahari core habitat',
                    status: 'Near Threatened'
                },
                {
                    name: 'Springbok',
                    scientificName: 'Antidorcas marsupialis',
                    description: 'National animal of South Africa',
                    behavior: 'Famous "pronking" jumping display',
                    status: 'Least Concern'
                },
                {
                    name: 'Bat-eared Fox',
                    scientificName: 'Otocyon megalotis',
                    description: 'Large-eared fox eating termites',
                    adaptation: 'Ears detect insect sounds underground',
                    status: 'Least Concern'
                },
                {
                    name: 'Honey Badger',
                    scientificName: 'Mellivora capensis',
                    description: 'Fearless and aggressive carnivore',
                    reputation: 'Attacks animals much larger than itself',
                    status: 'Least Concern'
                },
                {
                    name: 'Pangolin',
                    scientificName: 'Smutsia temminckii',
                    description: 'Scaly anteater, world\'s most trafficked animal',
                    status: 'Vulnerable',
                    threat: 'Illegal trade for scales'
                },
                {
                    name: 'Aardvark',
                    scientificName: 'Orycteropus afer',
                    description: 'Nocturnal burrowing mammal',
                    diet: 'Termites and ants',
                    burrows: 'Provide shelter for many other species'
                }
            ],
            
            birds: [
                { name: 'Kori Bustard', description: 'Heaviest flying bird in Africa' },
                { name: 'Secretary Bird', description: 'Snake-killing raptor' },
                { name: 'Sociable Weaver', description: 'Builds giant communal nests' },
                { name: 'Lappet-faced Vulture', description: 'Largest vulture in Africa' }
            ],
            
            endangeredSpecies: [
                { name: 'African Wild Dog', status: 'Endangered', population: '6,600' },
                { name: 'Lion', status: 'Vulnerable', threat: 'Human-wildlife conflict' },
                { name: 'Cheetah', status: 'Vulnerable', population: '7,000 total' },
                { name: 'Pangolin', status: 'Vulnerable', threat: 'Illegal trade' }
            ]
        },
        
        humanLife: {
            overview: 'Home to the San (Bushmen), oldest continuous culture on Earth',
            
            population: {
                sanPeople: '100,000 across Southern Africa',
                inKalahari: '~50,000'
            },
            
            indigenousPeoples: [
                {
                    name: 'San (Bushmen)',
                    population: '100,000 total',
                    lifestyle: 'Traditionally hunter-gatherer, oldest continuous culture',
                    language: 'Khoisan languages with click consonants',
                    age: 'Genetic evidence shows 70,000+ year lineage',
                    knowledge: 'Unparalleled tracking and survival skills',
                    status: 'Marginalized, fighting for land rights',
                    controversy: 'Relocated from Central Kalahari Game Reserve'
                },
                {
                    name: 'Tswana/Batswana',
                    population: '4 million (Botswana majority)',
                    lifestyle: 'Cattle herding, farming',
                    country: 'Botswana named after them'
                }
            ],
            
            traditionalSanLife: {
                housing: ['Grass shelters', 'Rock overhangs'],
                food: ['Mongongo nuts', 'Tsamma melons', 'Wild game', '100+ plant species'],
                water: ['Sip wells (reeds inserted in sand)', 'Tsamma melons', 'Ostrich egg containers'],
                tools: ['Poison arrows', 'Digging sticks'],
                tracking: 'Can track animals for days, read footprints like books'
            }
        },
        
        economy: [
            {
                sector: 'Diamond Mining',
                description: 'Botswana is world\'s largest diamond producer by value',
                history: 'Diamonds discovered 1967, transformed country',
                impact: 'Funded Botswana\'s development success story'
            },
            {
                sector: 'Tourism',
                description: 'High-end safari tourism',
                destinations: ['Okavango Delta', 'Makgadikgadi', 'Central Kalahari'],
                type: 'Low volume, high value sustainable tourism',
                revenue: 'Major GDP contributor'
            },
            {
                sector: 'Cattle Ranching',
                description: 'Important agricultural sector',
                challenge: 'Fencing affects wildlife migration',
                conflict: 'Competes with conservation'
            },
            {
                sector: 'Solar Energy',
                description: 'Massive solar potential',
                projects: 'Jasper Solar Farm (South Africa) on Kalahari edge',
                potential: '10+ hours daily sunshine'
            }
        ],
        
        environmentalIssues: [
            {
                issue: 'Diamond Mining',
                severity: 'Moderate',
                description: 'Environmental impact of large mines',
                response: 'Botswana has strict regulations'
            },
            {
                issue: 'Wildlife Fencing',
                severity: 'High',
                description: 'Veterinary fences block migration',
                impact: 'Wildebeest populations crashed',
                reason: 'Separate cattle from wildlife to protect beef exports'
            },
            {
                issue: 'San Land Rights',
                severity: 'Ongoing',
                description: 'Indigenous people relocated from ancestral lands',
                controversy: 'Central Kalahari Game Reserve relocations',
                status: 'Legal battles ongoing'
            },
            {
                issue: 'Climate Change',
                severity: 'High',
                description: 'Increasing temperatures and drought',
                impacts: ['More severe droughts', 'Water scarcity', 'Wildlife stress']
            },
            {
                issue: 'Overgrazing',
                severity: 'Moderate',
                description: 'Cattle farming in marginal areas',
                impact: 'Vegetation degradation'
            }
        ],
        
        historicalImportance: [
            {
                era: '70,000+ years ago',
                title: 'San Arrival',
                description: 'San ancestors inhabited Kalahari',
                significance: 'Oldest continuous culture on Earth'
            },
            {
                era: '2,000 years ago',
                title: 'Bantu Migration',
                description: 'Bantu peoples arrive in southern Africa',
                impact: 'San pushed into more marginal areas'
            },
            {
                era: '1849',
                title: 'Livingstone Crosses Kalahari',
                description: 'David Livingstone first European to cross',
                route: 'Lake Ngami discovery'
            },
            {
                era: '1885',
                title: 'Bechuanaland Protectorate',
                description: 'British establish protectorate (later Botswana)',
                reason: 'Block German expansion from Namibia'
            },
            {
                era: '1966',
                title: 'Botswana Independence',
                description: 'Botswana becomes independent',
                condition: 'One of poorest countries in world'
            },
            {
                era: '1967',
                title: 'Diamond Discovery',
                description: 'Diamonds found at Orapa',
                impact: 'Transformed Botswana into success story'
            },
            {
                era: '2014',
                title: 'Okavango UNESCO Status',
                description: 'Delta becomes World Heritage Site',
                significance: '1,000th site on UNESCO list'
            }
        ],
        
        funFacts: [
            {
                fact: 'The Kalahari is not a true desert - it receives more rainfall than most deserts',
                category: 'Definition'
            },
            {
                fact: 'San Bushmen can identify 100+ plant species and track animals for days',
                category: 'Culture'
            },
            {
                fact: 'The Okavango Delta is the only inland delta in the world that never reaches the sea',
                category: 'Geography'
            },
            {
                fact: 'Meerkat Manor was filmed in the Kalahari',
                category: 'Media'
            },
            {
                fact: 'Kalahari lions are famous for their black manes',
                category: 'Wildlife'
            },
            {
                fact: 'The tsamma melon provided water for both San people and wildlife for millennia',
                category: 'Survival'
            },
            {
                fact: 'Diamonds transformed Botswana from one of poorest to one of richest African countries',
                category: 'Economy'
            },
            {
                fact: 'San rock art in Tsodilo Hills spans 100,000 years - called "Louvre of the Desert"',
                category: 'Art'
            },
            {
                fact: 'The wild watermelon (tsamma) originated in the Kalahari - ancestor of all watermelons',
                category: 'Origin'
            },
            {
                fact: 'Sociable weaver birds build the largest nests in the world - apartment complexes for 500 birds',
                category: 'Wildlife'
            }
        ],
        
        journeyWaypoints: [
            {
                name: 'Maun, Botswana',
                coordinates: [-19.99, 23.42],
                description: 'Starting at the safari capital, gateway to the Okavango',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Okavango Delta',
                coordinates: [-19.3, 22.9],
                description: 'The jewel of the Kalahari - a river that never reaches the sea',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Tsodilo Hills',
                coordinates: [-18.75, 21.73],
                description: 'Sacred to the San - 4,500 rock paintings over 100,000 years',
                type: 'cultural',
                duration: 3000
            },
            {
                name: 'Central Kalahari Game Reserve',
                coordinates: [-22.5, 23.5],
                description: 'Second largest reserve in the world - black-maned lions roam',
                type: 'terrain',
                duration: 4000
            },
            {
                name: 'Deception Valley',
                coordinates: [-22.3, 24.0],
                description: 'Fossil river valley, site of famous wildlife research',
                type: 'scientific',
                duration: 3000
            },
            {
                name: 'Makgadikgadi Pans',
                coordinates: [-20.5, 25.5],
                description: 'Vast salt flats - moonscape when dry, flamingos when wet',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Kgalagadi Transfrontier Park',
                coordinates: [-25.5, 20.5],
                description: 'Journey\'s end at Africa\'s first transfrontier park',
                type: 'end',
                duration: 3000
            }
        ],
        
        quickFacts: {
            area: '900,000 km²',
            type: 'Hot Semi-arid',
            avgTemp: '20°C to 25°C',
            rainfall: '150-500mm/year',
            countries: 'Botswana, Namibia, South Africa',
            population: 'Sparse (San people)'
        }
    },

    // Continuing with deserts 7-10...
    // Due to character limits, I'll provide a condensed but complete version

    // ═══════════════════════════════════════════════════════════════════
    // #7 - PATAGONIAN DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'patagonian-desert',
        name: 'Patagonian Desert',
        subtitle: 'Land of the Wind',
        countries: [
            { name: 'Argentina', code: 'AR' },
            { name: 'Chile', code: 'CL' }
        ],
        continent: 'South America',
        desertType: 'cold',
        subType: 'Rain Shadow Desert',
        area: 673000,
        areaRank: 7,
        rank: 7,
        coordinates: [-45.0, -69.0],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Patagonian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-75, -39], [-67, -39], [-65, -52], [-73, -52], [-75, -45], [-75, -39]
                ]]
            }
        },
        
        location: {
            continent: 'South America',
            hemispheres: ['Southern', 'Western'],
            latitudeRange: '39°S to 52°S',
            longitudeRange: '75°W to 65°W',
            totalCountries: 2,
            percentages: { Argentina: 95, Chile: 5 }
        },
        
        desertClassification: {
            primaryType: 'Cold Desert',
            secondaryType: 'Rain Shadow Desert',
            climateClassification: 'BWk (Cold Desert Climate)',
            formationCauses: [
                { cause: 'Rain Shadow', explanation: 'Andes block Pacific moisture' },
                { cause: 'Cold Ocean', explanation: 'Falkland Current cools coastal air' },
                { cause: 'High Latitude', explanation: 'Far south location means cold temperatures' }
            ]
        },
        
        size: {
            totalArea: 673000,
            areaUnit: 'km²',
            ranking: { amongDeserts: 7, coldDesertRank: 4 }
        },
        
        climate: {
            overview: 'Cold, windy, dry - Southern Hemisphere\'s largest desert',
            temperatureData: {
                summerHigh: { typical: '15°C to 25°C' },
                winterLow: { typical: '-10°C to 0°C' },
                averageAnnual: '3°C to 10°C'
            },
            precipitation: {
                annualAverage: '150-300mm',
                andeanFoothills: '100mm',
                type: 'Snow and rain'
            },
            wind: {
                averageSpeed: '30-40 km/h',
                gusts: 'Up to 150 km/h',
                direction: 'Constant westerlies',
                nickname: 'Land of the Wind'
            }
        },
        
        landforms: [
            { name: 'Mesetas (Plateaus)', description: 'Flat-topped volcanic plateaus dominate landscape' },
            { name: 'Canyons', description: 'Deep river canyons cut through plateaus' },
            { name: 'Petrified Forests', description: 'Ancient fossilized trees from Jurassic era' },
            { name: 'Glacier-fed Lakes', description: 'Striking blue lakes on western edge' }
        ],
        
        features: [
            {
                name: 'Petrified Forest (Bosque Petrificado)',
                type: 'Paleontological Site',
                coordinates: [-47.8, -68.1],
                description: '150 million year old fossilized trees',
                treeHeight: 'Some logs 30m long, 3m diameter',
                age: 'Jurassic era',
                origin: 'Volcanic ash buried and fossilized forest'
            },
            {
                name: 'Cave of the Hands (Cueva de las Manos)',
                type: 'Archaeological Site',
                coordinates: [-47.15, -70.67],
                description: '9,000 year old rock art, hand stencils',
                UNESCO: 'World Heritage Site (1999)',
                paintings: '829 hand stencils, hunting scenes',
                age: '9,300 years old'
            },
            {
                name: 'Monte León National Park',
                type: 'Coastal Park',
                coordinates: [-50.35, -68.95],
                description: 'Sea cliffs, penguin colonies, sea lions',
                coastline: '40 km of coast',
                wildlife: 'Magellanic penguins, cormorants'
            },
            {
                name: 'Valdés Peninsula',
                type: 'Wildlife Reserve',
                coordinates: [-42.5, -64.0],
                UNESCO: 'World Heritage Site (1999)',
                wildlife: 'Southern right whales, elephant seals, orcas',
                description: 'World\'s best whale watching'
            }
        ],
        
        biodiversity: {
            overview: 'Hardy wildlife adapted to wind and cold',
            animals: [
                { name: 'Guanaco', description: 'Wild relative of llama, main herbivore', population: '500,000' },
                { name: 'Puma', description: 'Top predator, hunts guanaco', status: 'Near Threatened' },
                { name: 'Patagonian Mara', description: 'Large rodent resembling rabbit-deer hybrid' },
                { name: 'Darwin\'s Rhea', description: 'Flightless bird, smaller cousin of ostrich' },
                { name: 'Magellanic Penguin', description: 'Coastal colonies, 1.5 million in Patagonia' },
                { name: 'Southern Right Whale', description: 'Breeds at Valdés Peninsula' },
                { name: 'Patagonian Fox', description: 'Endemic canid' }
            ],
            plants: [
                { name: 'Coirón Grass', description: 'Dominant grass, adapted to wind' },
                { name: 'Calafate Berry', description: 'Legend says who eats it will return' },
                { name: 'Lenga/Ñire', description: 'Southern beech at forest margins' }
            ]
        },
        
        humanLife: {
            population: { total: '2 million (entire Patagonia)', density: 'Less than 2 per km²' },
            indigenousPeoples: [
                { name: 'Tehuelche', description: 'Original "Patagonians" - nearly extinct culture' },
                { name: 'Mapuche', description: 'Major indigenous group of Chile/Argentina' }
            ],
            economy: ['Sheep ranching (50 million sheep)', 'Oil/gas', 'Tourism', 'Wind energy']
        },
        
        historicalImportance: [
            { era: '11,000 BCE', title: 'First Humans', description: 'Cave of Hands art begins' },
            { era: '1520', title: 'Magellan\'s Voyage', description: 'First European contact, named Patagonia' },
            { era: '1833', title: 'Darwin\'s Visit', description: 'Charles Darwin studies geology and wildlife' },
            { era: '1880s', title: 'Sheep Boom', description: 'Welsh and other settlers establish estancias' }
        ],
        
        funFacts: [
            { fact: 'Patagonia means "land of big feet" - Magellan\'s crew thought natives were giants', category: 'Origin' },
            { fact: 'Winds regularly exceed 100 km/h - people walk hunched over', category: 'Wind' },
            { fact: 'The petrified trees are from when dinosaurs roamed 150 million years ago', category: 'History' },
            { fact: 'Chile and Argentina almost went to war over Patagonia in 1978', category: 'Politics' },
            { fact: 'There are more sheep than people in Patagonia - 50 million sheep', category: 'Economy' }
        ],
        
        journeyWaypoints: [
            { name: 'Trelew', coordinates: [-43.25, -65.31], description: 'Welsh settlement on Atlantic coast', type: 'start', duration: 3000 },
            { name: 'Valdés Peninsula', coordinates: [-42.5, -64.0], description: 'Whale watching paradise', type: 'wildlife', duration: 3000 },
            { name: 'Patagonian Steppe', coordinates: [-45.0, -68.0], description: 'Endless windswept grasslands', type: 'terrain', duration: 4000 },
            { name: 'Petrified Forest', coordinates: [-47.8, -68.1], description: 'Jurassic trees turned to stone', type: 'landmark', duration: 3000 },
            { name: 'Cueva de las Manos', coordinates: [-47.15, -70.67], description: '9,000 years of human history on cave walls', type: 'cultural', duration: 3000 },
            { name: 'Punta Arenas', coordinates: [-53.16, -70.91], description: 'Journey\'s end at the end of the world', type: 'end', duration: 3000 }
        ],
        
        quickFacts: {
            area: '673,000 km²',
            type: 'Cold Desert',
            avgTemp: '3°C to 10°C',
            rainfall: '150-300mm/year',
            countries: 'Argentina, Chile',
            population: '~2 million'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #8 - GREAT VICTORIA DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'great-victoria-desert',
        name: 'Great Victoria Desert',
        subtitle: 'Australia\'s Largest Desert',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia',
        desertType: 'hot',
        subType: 'Subtropical Desert',
        area: 647000,
        areaRank: 8,
        rank: 8,
        coordinates: [-28.0, 129.0],
        defaultZoom: 5,
        
        image: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Victoria Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [123, -26], [133, -26], [133, -32], [123, -32], [123, -26]
                ]]
            }
        },
        
        location: {
            continent: 'Australia',
            hemispheres: ['Southern', 'Eastern'],
            latitudeRange: '26°S to 32°S',
            longitudeRange: '123°E to 133°E',
            states: ['Western Australia', 'South Australia'],
            geographicCenter: '-28°S, 129°E'
        },
        
        desertClassification: {
            primaryType: 'Hot Desert',
            secondaryType: 'Subtropical Desert',
            climateClassification: 'BWh (Hot Desert Climate)',
            formationCauses: [
                { cause: 'Subtropical High Pressure', explanation: 'Descending dry air over 30°S' },
                { cause: 'Cold Ocean Currents', explanation: 'West Australian Current cools air' },
                { cause: 'Continental Interior', explanation: 'Far from moisture sources' }
            ]
        },
        
        size: {
            totalArea: 647000,
            areaUnit: 'km²',
            ranking: { amongDeserts: 8, australianRank: 1 }
        },
        
        climate: {
            overview: 'Hot days, cool nights, summer thunderstorms',
            temperatureData: {
                summerHigh: { typical: '35°C to 42°C', extreme: 'Up to 50°C' },
                winterLow: { typical: '5°C to 10°C', frost: 'Possible' }
            },
            precipitation: {
                annualAverage: '200-250mm',
                type: 'Summer thunderstorms, winter fronts',
                variability: 'Highly variable year to year'
            }
        },
        
        landforms: [
            { name: 'Sand Dunes', description: 'Parallel east-west dunes, mostly vegetated', type: 'Linear/longitudinal dunes' },
            { name: 'Gibber Plains', description: 'Stony desert pavement', coverage: 'Interspersed between dunes' },
            { name: 'Salt Lakes', description: 'Ephemeral salt pans', examples: ['Lake Disappointment'] }
        ],
        
        features: [
            {
                name: 'Great Victoria Desert Nature Reserve',
                type: 'Protected Area',
                coordinates: [-28.5, 125.0],
                area: '2.5 million hectares',
                description: 'One of largest reserves in Australia',
                remoteness: 'No public roads or facilities'
            },
            {
                name: 'Ooldea',
                type: 'Historic Site',
                coordinates: [-30.45, 131.83],
                description: 'Historic Trans-Australian Railway siding',
                history: 'Daisy Bates lived here studying Aboriginal people'
            },
            {
                name: 'Queen Victoria Spring',
                type: 'Natural Spring',
                coordinates: [-30.33, 123.62],
                description: 'Rare water source, named for the desert',
                significance: 'Historic explorer landmark'
            }
        ],
        
        biodiversity: {
            overview: 'Rich reptile diversity despite harsh conditions',
            animals: [
                { name: 'Thorny Devil', description: 'Iconic spiny lizard that drinks through skin' },
                { name: 'Sand Goanna', description: 'Large monitor lizard' },
                { name: 'Bilby', description: 'Endangered rabbit-eared bandicoot', status: 'Vulnerable' },
                { name: 'Mulgara', description: 'Small carnivorous marsupial' },
                { name: 'Great Desert Skink', description: 'Lives in burrow colonies' },
                { name: 'Malleefowl', description: 'Ground bird using temperature-regulated mounds' }
            ],
            plants: [
                { name: 'Spinifex', description: 'Dominant grass, spiny clumps' },
                { name: 'Mulga', description: 'Acacia species, important for wildlife' },
                { name: 'Desert Oak', description: 'Distinctive tree with drooping foliage' }
            ]
        },
        
        humanLife: {
            indigenousPeoples: [
                { name: 'Anangu', description: 'Aboriginal people of western desert region' },
                { name: 'Spinifex People', description: 'Last contacted group (1986)' }
            ],
            population: 'Very sparse, <1 person per 100 km²',
            modernUse: 'Nuclear test sites (1950s-60s), now nature reserve'
        },
        
        historicalImportance: [
            { era: '40,000+ years', title: 'Aboriginal Habitation', description: 'Continuous indigenous presence' },
            { era: '1875', title: 'Ernest Giles Crossing', description: 'First European crossing, named for Queen Victoria' },
            { era: '1956-1963', title: 'Nuclear Tests', description: 'British atomic tests at Maralinga', legacy: 'Contamination issues' }
        ],
        
        funFacts: [
            { fact: 'Thorny devils drink through their skin - water channels to their mouth', category: 'Wildlife' },
            { fact: 'Named after Queen Victoria by explorer Ernest Giles in 1875', category: 'History' },
            { fact: 'The Spinifex People weren\'t contacted by Europeans until 1986', category: 'Culture' },
            { fact: 'British nuclear tests contaminated parts of the desert', category: 'History' }
        ],
        
        quickFacts: {
            area: '647,000 km²',
            type: 'Hot Desert',
            avgTemp: '18°C to 24°C',
            rainfall: '200-250mm/year',
            countries: 'Australia',
            population: 'Very sparse'
        }
    },

    // ═══════════════════════════════════════════════════════════════════
    // #9 - SYRIAN DESERT
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'syrian-desert',
        name: 'Syrian Desert',
        subtitle: 'Crossroads of Civilizations',
        countries: [
            { name: 'Syria', code: 'SY' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Saudi Arabia', code: 'SA' }
        ],
        continent: 'Asia',
        desertType: 'hot',
        subType: 'Subtropical Desert',
        area: 500000,
        areaRank: 9,
        rank: 9,
        coordinates: [33.0, 39.0],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Syrian Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [36, 35], [42, 35], [44, 32], [40, 29], [36, 30], [35, 33], [36, 35]
                ]]
            }
        },
        
        location: {
            continent: 'Asia (Middle East)',
            hemispheres: ['Northern', 'Eastern'],
            latitudeRange: '29°N to 35°N',
            longitudeRange: '35°E to 44°E',
            totalCountries: 4,
            alternateNames: ['Badiyat ash-Sham', 'Shamiyah']
        },
        
        desertClassification: {
            primaryType: 'Hot Desert',
            secondaryType: 'Subtropical Desert',
            climateClassification: 'BWh (Hot Desert Climate)',
            formationCauses: [
                { cause: 'Subtropical High', explanation: 'Descending dry air' },
                { cause: 'Continental Interior', explanation: 'Far from Mediterranean moisture' },
                { cause: 'Rain Shadow', explanation: 'Mountains block western moisture' }
            ]
        },
        
        size: {
            totalArea: 500000,
            areaUnit: 'km²'
        },
        
        climate: {
            overview: 'Hot summers, cool winters, very little rainfall',
            temperatureData: {
                summerHigh: { typical: '40°C to 46°C' },
                winterLow: { typical: '0°C to 7°C', frost: 'Common' }
            },
            precipitation: { annualAverage: '100-150mm' }
        },
        
        features: [
            {
                name: 'Palmyra',
                type: 'Archaeological Site',
                coordinates: [34.55, 38.27],
                description: 'Magnificent Roman ruins, Silk Road oasis city',
                UNESCO: 'World Heritage Site (1980)',
                history: 'Queen Zenobia\'s capital',
                damage: 'Damaged by ISIS (2015)'
            },
            {
                name: 'Qasr al-Hayr al-Sharqi',
                type: 'Archaeological Site',
                coordinates: [34.44, 38.95],
                description: 'Umayyad desert castle',
                built: '8th century CE'
            },
            {
                name: 'Azraq Wetlands',
                type: 'Oasis/Wetland',
                coordinates: [31.83, 36.83],
                country: 'Jordan',
                description: 'Desert oasis, Lawrence of Arabia base',
                history: 'T.E. Lawrence headquarters 1917'
            }
        ],
        
        biodiversity: {
            animals: [
                { name: 'Arabian Oryx', description: 'Reintroduced to reserves', status: 'Vulnerable' },
                { name: 'Striped Hyena', description: 'Nocturnal scavenger' },
                { name: 'Desert Monitor', description: 'Large lizard' },
                { name: 'MacQueen\'s Bustard', description: 'Large ground bird' }
            ],
            endangeredSpecies: [
                { name: 'Syrian Brown Bear', status: 'Extinct in Syria' },
                { name: 'Arabian Ostrich', status: 'Extinct (1966)' }
            ]
        },
        
        humanLife: {
            indigenousPeoples: [
                { name: 'Bedouin', description: 'Traditional nomads, now largely settled' }
            ],
            historicalImportance: 'Silk Road crossroads, ancient caravan routes',
            modernSituation: 'Syrian Civil War has affected region'
        },
        
        historicalImportance: [
            { era: '3000 BCE', title: 'Trade Routes', description: 'Caravans cross desert connecting Mesopotamia and Mediterranean' },
            { era: '3rd century CE', title: 'Palmyrene Empire', description: 'Queen Zenobia challenges Rome' },
            { era: '7th century', title: 'Umayyad Caliphate', description: 'Desert castles built' },
            { era: '1917', title: 'Arab Revolt', description: 'Lawrence of Arabia operates from Azraq' },
            { era: '2015', title: 'ISIS Destruction', description: 'Ancient Palmyra monuments destroyed' }
        ],
        
        funFacts: [
            { fact: 'Palmyra was a major Silk Road city controlling trade between Rome and Persia', category: 'History' },
            { fact: 'Lawrence of Arabia made Azraq Castle his headquarters', category: 'History' },
            { fact: 'The Syrian Desert was where the Arabian Oryx went extinct before reintroduction', category: 'Wildlife' }
        ],
        
        quickFacts: {
            area: '500,000 km²',
            type: 'Hot Desert',
            avgTemp: '15°C to 20°C',
            rainfall: '100-150mm/year',
            countries: 'Syria, Jordan, Iraq, Saudi Arabia',
            population: 'Sparse (Bedouin)'
        }
    },

        // ═══════════════════════════════════════════════════════════════════
    // #10 - GREAT BASIN DESERT (COMPLETION)
    // ═══════════════════════════════════════════════════════════════════
    {
        id: 'great-basin-desert',
        name: 'Great Basin Desert',
        subtitle: 'America\'s Cold Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'cold',
        subType: 'Rain Shadow Desert',
        area: 492000,
        areaRank: 10,
        rank: 10,
        coordinates: [40.0, -117.0],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920',
        galleryImages: [
            'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
        ],
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Basin Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-120, 42], [-114, 42], [-111, 37], [-117, 35], [-120, 38], [-120, 42]
                ]]
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Location Branch
        // ═══════════════════════════════════════════════════════════
        location: {
            continent: 'North America',
            hemispheres: ['Northern', 'Western'],
            latitudeRange: '35°N to 42°N',
            longitudeRange: '120°W to 111°W',
            geographicCenter: '40°N, 117°W',
            totalCountries: 1,
            states: ['Nevada (most)', 'Utah (western)', 'Oregon (southeastern)', 'Idaho (southern)', 'California (eastern)'],
            percentByState: {
                nevada: 75,
                utah: 15,
                other: 10
            },
            borders: ['Sierra Nevada (west)', 'Rocky Mountains (east)', 'Columbia Plateau (north)', 'Mojave Desert (south)'],
            elevation: '1,200-2,000m average (high desert)'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Desert Type Branch
        // ═══════════════════════════════════════════════════════════
        desertClassification: {
            primaryType: 'Cold Desert',
            secondaryType: 'Rain Shadow Desert',
            climateClassification: 'BWk (Cold Desert Climate)',
            formationCauses: [
                {
                    cause: 'Rain Shadow Effect',
                    explanation: 'Sierra Nevada blocks Pacific Ocean moisture, creating rain shadow'
                },
                {
                    cause: 'High Elevation',
                    explanation: 'Average elevation 1,200-2,000m creates cold winters'
                },
                {
                    cause: 'Basin and Range Topography',
                    explanation: 'Mountain ranges trap dry air in valleys between'
                },
                {
                    cause: 'Continental Interior',
                    explanation: 'Distance from ocean reduces moisture'
                }
            ],
            whyItsDesert: 'Sierra Nevada rain shadow combined with high elevation creates cold, dry conditions',
            uniqueFeature: 'Only true cold desert in North America, defined by sagebrush ecosystem'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Size & Scale Branch
        // ═══════════════════════════════════════════════════════════
        size: {
            totalArea: 492000,
            areaUnit: 'km²',
            areaInMiles: 190000,
            comparisonToCountries: [
                'Larger than California',
                'About size of Spain',
                '2x size of United Kingdom'
            ],
            ranking: {
                amongDeserts: 10,
                totalDeserts: 50,
                coldDesertRank: 5,
                usDesertRank: 1,
                statement: 'Largest desert in United States, tenth largest in world'
            },
            basinDefinition: 'Hydrographic Great Basin extends 540,000 km²'
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Climate Branch
        // ═══════════════════════════════════════════════════════════
        climate: {
            overview: 'Cold winters with snow, hot summers, low precipitation - America\'s only cold desert',
            temperatureData: {
                summerHigh: {
                    typical: '30°C to 38°C',
                    extreme: 'Up to 42°C in valleys'
                },
                winterLow: {
                    typical: '-10°C to -20°C',
                    extreme: '-40°C in higher elevations'
                },
                dailySwing: '15°C to 25°C variation common',
                annualMean: '7°C to 12°C',
                frostFreeDays: '100-150 days',
                extremeRecords: {
                    hottestEver: '53°C (Death Valley, at southern margin)',
                    coldestEver: '-46°C (various high-elevation sites)',
                    snowRecord: '200+ cm annually in mountains'
                }
            },
            precipitation: {
                annualAverage: '150-300mm',
                valleys: '150-200mm',
                mountains: '300-500mm',
                snowfall: 'Significant - 50-150cm per year',
                type: 'Winter snow dominant, summer thunderstorms',
                monsoon: 'Minimal influence from Arizona monsoon'
            },
            wind: {
                averageSpeed: '10-20 km/h',
                dustDevils: 'Common in summer',
                chinook: 'Warm downslope winds occasionally'
            },
            seasons: {
                summer: 'Hot and dry (June-August)',
                winter: 'Cold with snow (December-February)',
                spring: 'Windy, variable (March-May)',
                fall: 'Clear, cooling (September-November)'
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Landforms Branch
        // ═══════════════════════════════════════════════════════════
        landforms: [
            {
                name: 'Basin and Range Province',
                description: 'Distinctive topography of parallel mountain ranges separated by flat valleys',
                characteristics: 'Over 300 mountain ranges, each 50-100 km long',
                formation: 'Crustal extension stretching Earth\'s crust',
                elevation: 'Valleys 1,200m, peaks up to 4,000m',
                uniqueness: 'One of most distinctive geologic provinces on Earth'
            },
            {
                name: 'Playas (Dry Lake Beds)',
                description: 'Flat, dry lake beds that occasionally flood',
                examples: ['Bonneville Salt Flats', 'Black Rock Desert', 'Alvord Desert'],
                characteristics: 'Extremely flat, salt-encrusted surfaces',
                use: 'Land speed record attempts',
                formation: 'Remnants of Pleistocene lakes'
            },
            {
                name: 'Endorheic Basin',
                description: 'Closed drainage basin - no outlet to ocean',
                significance: 'Largest endorheic basin in North America',
                consequence: 'All water evaporates or sinks into ground',
                rivers: 'Humboldt River longest river that never reaches sea'
            },
            {
                name: 'Ancient Lake Beds',
                description: 'Remnants of massive Pleistocene lakes',
                lakeBonneville: 'Once size of Lake Michigan, left Great Salt Lake',
                lakeLahontan: 'Left Pyramid Lake, Walker Lake',
                evidence: 'Shoreline terraces visible on mountains'
            },
            {
                name: 'Sagebrush Steppe',
                description: 'Dominant vegetation type covering most of basin',
                coverage: '40 million hectares',
                plants: 'Big sagebrush, bunchgrasses',
                threat: 'Cheatgrass invasion, increased wildfires'
            },
            {
                name: 'Sky Islands',
                description: 'Isolated mountain ranges with forest ecosystems',
                characteristics: 'Cooler, wetter peaks surrounded by desert',
                examples: 'Ruby Mountains, Snake Range, Schell Creek Range',
                biodiversity: 'Isolated populations of plants and animals'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Key Features & Landmarks
        // ═══════════════════════════════════════════════════════════
        features: [
            {
                name: 'Bonneville Salt Flats',
                type: 'Salt Flat',
                coordinates: [40.75, -113.9],
                area: '260 km²',
                description: 'World-famous land speed record site, remnant of Lake Bonneville',
                records: 'Over 600 world land speed records set here',
                surface: 'So flat you can see curvature of Earth',
                origin: 'Lake Bonneville evaporated 14,000 years ago',
                events: 'Speed Week, World Finals annually',
                record: '763 mph by ThrustSSC (1997) at Black Rock'
            },
            {
                name: 'Black Rock Desert',
                type: 'Playa',
                coordinates: [40.75, -119.0],
                area: '2,600 km²',
                description: 'Largest playa in North America, Burning Man site',
                events: 'Burning Man festival (70,000+ attendees)',
                records: 'ThrustSSC broke sound barrier here (1997)',
                surface: 'Hard, flat alkaline clay',
                history: 'Emigrant trail crossing point'
            },
            {
                name: 'Great Salt Lake',
                type: 'Terminal Lake',
                coordinates: [41.0, -112.5],
                area: '4,400 km² (varies dramatically)',
                description: 'Largest salt lake in Western Hemisphere',
                salinity: '5-27% (varies by area and water level)',
                depth: 'Average 4m (shallow)',
                wildlife: 'Millions of migratory birds, brine shrimp',
                crisis: 'Shrinking rapidly, ecological disaster unfolding',
                remnant: 'Remnant of Lake Bonneville'
            },
            {
                name: 'Pyramid Lake',
                type: 'Lake',
                coordinates: [40.0, -119.5],
                area: '487 km²',
                description: 'Nevada\'s largest natural lake, Paiute sacred site',
                depth: '107m (deep)',
                significance: 'Cui-ui fish found nowhere else (endangered)',
                feature: 'Tufa formations including "The Pyramid"',
                reservation: 'Pyramid Lake Paiute Reservation'
            },
            {
                name: 'Great Basin National Park',
                type: 'National Park',
                coordinates: [39.0, -114.3],
                area: '312 km²',
                description: 'Protects Wheeler Peak and bristlecone pines',
                features: ['Wheeler Peak (3,982m)', 'Lehman Caves', 'Bristlecone pines', 'Only glacier in Great Basin'],
                established: '1986'
            },
            {
                name: 'Wheeler Peak',
                type: 'Mountain',
                coordinates: [38.99, -114.31],
                height: '3,982m (13,065 ft)',
                description: 'Second highest peak in Nevada, in Great Basin NP',
                feature: 'Only glacier in Great Basin (small, receding)',
                hike: 'Popular summit hike'
            },
            {
                name: 'Bristlecone Pine Forest',
                type: 'Ancient Forest',
                coordinates: [38.95, -114.28],
                description: 'Home to oldest known living organisms on Earth',
                age: 'Trees up to 5,000 years old',
                location: 'Wheeler Peak, Great Basin National Park',
                famous: 'Prometheus tree (4,900 years, cut down 1964)',
                living: 'Methuselah (4,850 years, location secret)'
            },
            {
                name: 'Lehman Caves',
                type: 'Cave System',
                coordinates: [39.0, -114.22],
                description: 'Spectacular limestone cave with rare formations',
                features: 'Shield formations (300+), stalactites, stalagmites',
                uniqueness: 'More shields than any other cave in world',
                tours: 'Ranger-guided tours available'
            },
            {
                name: 'Ruby Mountains',
                type: 'Mountain Range',
                coordinates: [40.6, -115.5],
                height: '3,471m (Ruby Dome)',
                description: '"Alps of Nevada" - dramatic glaciated peaks',
                features: 'Glacial cirques, alpine lakes',
                nickname: 'Most scenic range in Nevada'
            },
            {
                name: 'Area 51 (Groom Lake)',
                type: 'Military Installation',
                coordinates: [37.24, -115.81],
                description: 'Classified Air Force facility, UFO conspiracy fame',
                status: 'Highly restricted, no public access',
                culture: 'Subject of countless conspiracy theories',
                reality: 'Aircraft testing facility (U-2, SR-71, stealth aircraft)'
            },
            {
                name: 'Nevada Test Site',
                type: 'Former Nuclear Test Site',
                coordinates: [37.0, -116.0],
                area: '3,500 km²',
                description: 'Site of 928 nuclear tests (1951-1992)',
                tests: '100 atmospheric, 828 underground',
                craters: 'Subsidence craters visible from space',
                status: 'Now Nevada National Security Site'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Water Sources
        // ═══════════════════════════════════════════════════════════
        waterSources: [
            {
                name: 'Humboldt River',
                type: 'River',
                coordinates: [40.7, -117.1],
                length: '483 km',
                description: 'Longest river in US that never reaches ocean',
                terminus: 'Humboldt Sink (evaporates)',
                significance: 'Emigrant trail followed this river'
            },
            {
                name: 'Great Salt Lake',
                type: 'Terminal Lake',
                description: 'Largest terminal lake in Western Hemisphere',
                status: 'Rapidly shrinking due to water diversion'
            },
            {
                name: 'Pyramid Lake',
                type: 'Terminal Lake',
                description: 'Deep, beautiful remnant of Lake Lahontan',
                fed: 'Truckee River from Lake Tahoe'
            },
            {
                name: 'Walker Lake',
                type: 'Terminal Lake',
                coordinates: [38.7, -118.7],
                description: 'Shrinking lake, Lahontan cutthroat trout',
                status: 'Critically low, endangered species at risk'
            },
            {
                name: 'Hot Springs',
                type: 'Geothermal',
                description: 'Hundreds throughout basin',
                use: 'Geothermal power, recreation',
                examples: 'Steamboat Springs, Beowawe'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Cities Branch
        // ═══════════════════════════════════════════════════════════
        cities: [
            {
                name: 'Reno',
                coordinates: [39.53, -119.81],
                country: 'United States',
                state: 'Nevada',
                population: 265000,
                description: 'Largest city in Great Basin, "Biggest Little City in the World"',
                features: 'Casinos, gateway to Lake Tahoe and desert',
                economy: 'Gaming, tech hub (Tesla), outdoor recreation'
            },
            {
                name: 'Salt Lake City',
                coordinates: [40.76, -111.89],
                country: 'United States',
                state: 'Utah',
                population: 200000,
                metro: '1.2 million',
                description: 'On eastern edge of Great Basin, Mormon capital',
                features: 'Temple Square, gateway to desert and mountains',
                note: 'Technically on basin edge, gateway city'
            },
            {
                name: 'Elko',
                coordinates: [40.83, -115.76],
                country: 'United States',
                state: 'Nevada',
                population: 20000,
                description: 'Ranching and mining town, Basque culture',
                features: 'Cowboy Poetry Gathering, gold mining',
                culture: 'Strong Basque heritage from sheepherding'
            },
            {
                name: 'Winnemucca',
                coordinates: [40.97, -117.74],
                country: 'United States',
                state: 'Nevada',
                population: 8000,
                description: 'Historic railroad and ranching town',
                history: 'Butch Cassidy robbed bank here (1900)'
            },
            {
                name: 'Ely',
                coordinates: [39.25, -114.89],
                country: 'United States',
                state: 'Nevada',
                population: 4000,
                description: 'Gateway to Great Basin National Park',
                features: 'Nevada Northern Railway, mining history'
            },
            {
                name: 'Wendover',
                coordinates: [40.74, -114.04],
                country: 'United States',
                state: 'Nevada/Utah',
                population: 3000,
                description: 'Border town, near Bonneville Salt Flats',
                history: 'Enola Gay crew trained here for Hiroshima'
            },
            {
                name: 'Battle Mountain',
                coordinates: [40.64, -116.93],
                country: 'United States',
                state: 'Nevada',
                population: 3500,
                description: 'Mining town, gold production center',
                nickname: '"Armpit of America" (won contest)'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Biodiversity Branch
        // ═══════════════════════════════════════════════════════════
        biodiversity: {
            overview: 'Unique high-desert sagebrush ecosystem with many endemic species',
            
            plants: [
                {
                    name: 'Big Sagebrush',
                    scientificName: 'Artemisia tridentata',
                    description: 'Dominant plant, iconic smell of the West',
                    coverage: 'Over 40 million hectares',
                    adaptation: 'Deep taproot, aromatic oils deter herbivores',
                    significance: 'Defines the ecosystem, critical for wildlife',
                    threat: 'Cheatgrass, altered fire regimes'
                },
                {
                    name: 'Bristlecone Pine',
                    scientificName: 'Pinus longaeva',
                    description: 'Oldest living organisms on Earth',
                    age: 'Up to 5,000 years old',
                    location: 'High elevations (3,000m+)',
                    adaptation: 'Dense wood, slow growth, harsh conditions',
                    famous: 'Methuselah tree (4,850 years)'
                },
                {
                    name: 'Utah Juniper',
                    scientificName: 'Juniperus osteosperma',
                    description: 'Common tree in pinyon-juniper woodland',
                    adaptation: 'Drought-tolerant, berries feed wildlife'
                },
                {
                    name: 'Pinyon Pine',
                    scientificName: 'Pinus monophylla',
                    description: 'Single-needle pine with edible nuts',
                    significance: 'Pine nuts important food for indigenous peoples',
                    zone: 'Mid-elevation (1,500-2,500m)'
                },
                {
                    name: 'Mormon Tea',
                    scientificName: 'Ephedra viridis',
                    description: 'Leafless shrub used for medicinal tea',
                    use: 'Traditional medicine by pioneers and natives'
                },
                {
                    name: 'Indian Ricegrass',
                    scientificName: 'Achnatherum hymenoides',
                    description: 'Important native bunchgrass',
                    use: 'Seeds were staple food for indigenous peoples'
                },
                {
                    name: 'Cheatgrass (Invasive)',
                    scientificName: 'Bromus tectorum',
                    description: 'Highly invasive annual grass',
                    threat: 'Burns easily, outcompetes native plants',
                    impact: 'Transforming sagebrush ecosystem'
                }
            ],
            
            animals: [
                {
                    name: 'Pronghorn',
                    scientificName: 'Antilocapra americana',
                    description: 'Fastest land animal in North America',
                    speed: 'Up to 90 km/h',
                    adaptation: 'Evolved speed to escape now-extinct American cheetah',
                    population: '500,000 in North America',
                    status: 'Least Concern'
                },
                {
                    name: 'Greater Sage-Grouse',
                    scientificName: 'Centrocercus urophasianus',
                    description: 'Iconic bird with elaborate mating display',
                    display: 'Males inflate chest sacs, strut on leks',
                    population: '200,000-500,000 (declined 80%)',
                    status: 'Near Threatened',
                    threat: 'Sagebrush habitat loss, energy development'
                },
                {
                    name: 'Bighorn Sheep',
                    scientificName: 'Ovis canadensis nelsoni',
                    description: 'Desert subspecies in mountain ranges',
                    adaptation: 'Specialized hooves for climbing',
                    status: 'Conservation success, recovering'
                },
                {
                    name: 'Mule Deer',
                    scientificName: 'Odocoileus hemionus',
                    description: 'Common deer of western North America',
                    population: 'Abundant throughout basin',
                    migration: 'Seasonal movements between elevations'
                },
                {
                    name: 'Kit Fox',
                    scientificName: 'Vulpes macrotis',
                    description: 'Small nocturnal desert fox',
                    adaptation: 'Large ears for heat dissipation and hearing',
                    status: 'Least Concern'
                },
                {
                    name: 'Pygmy Rabbit',
                    scientificName: 'Brachylagus idahoensis',
                    description: 'Smallest rabbit in North America',
                    size: '0.5 kg',
                    dependence: 'Completely dependent on sagebrush',
                    status: 'Threatened',
                    population: '<5,000'
                },
                {
                    name: 'Mountain Lion',
                    scientificName: 'Puma concolor',
                    description: 'Top predator in the Great Basin',
                    prey: 'Mule deer, bighorn sheep',
                    status: 'Least Concern'
                },
                {
                    name: 'Desert Horned Lizard',
                    scientificName: 'Phrynosoma platyrhinos',
                    description: 'Spiny "horny toad" lizard',
                    defense: 'Squirts blood from eyes when threatened',
                    diet: 'Primarily harvester ants'
                },
                {
                    name: 'Great Basin Rattlesnake',
                    scientificName: 'Crotalus lutosus',
                    description: 'Only rattlesnake species in region',
                    adaptation: 'Hibernates in communal dens in winter',
                    status: 'Least Concern'
                },
                {
                    name: 'Lahontan Cutthroat Trout',
                    scientificName: 'Oncorhynchus clarkii henshawi',
                    description: 'Largest cutthroat subspecies, once up to 20 kg',
                    historical: 'Huge runs in Truckee River',
                    status: 'Threatened',
                    recovery: 'Reintroduction efforts ongoing'
                },
                {
                    name: 'Cui-ui',
                    scientificName: 'Chasmistes cujus',
                    description: 'Large sucker fish found only in Pyramid Lake',
                    significance: 'Sacred to Paiute people',
                    status: 'Endangered',
                    threat: 'Water diversion from Truckee River'
                },
                {
                    name: 'Wild Horse (Feral)',
                    scientificName: 'Equus caballus',
                    description: 'Iconic feral horses (mustangs)',
                    population: '~50,000 in Nevada (controversial)',
                    status: 'Protected but management debates',
                    controversy: 'Overgrazing vs. heritage symbol'
                },
                {
                    name: 'Brine Shrimp',
                    scientificName: 'Artemia franciscana',
                    description: 'Tiny crustaceans in Great Salt Lake',
                    industry: 'Harvested for aquarium fish food, brine shrimp eggs',
                    population: 'Billions in Great Salt Lake'
                }
            ],
            
            birds: [
                { name: 'Golden Eagle', description: 'Top avian predator, nests on cliffs' },
                { name: 'Sage Thrasher', description: 'Sagebrush specialist songbird' },
                { name: 'Burrowing Owl', description: 'Lives in ground squirrel burrows' },
                { name: 'California Gull', description: 'Utah state bird, saved Mormon crickets' },
                { name: 'American White Pelican', description: 'Breeds at Great Salt Lake' }
            ],
            
            endangeredSpecies: [
                { name: 'Greater Sage-Grouse', status: 'Near Threatened', threat: 'Habitat loss, energy development' },
                { name: 'Pygmy Rabbit', status: 'Threatened', population: '<5,000' },
                { name: 'Lahontan Cutthroat Trout', status: 'Threatened', threat: 'Dam construction, non-native fish' },
                { name: 'Cui-ui', status: 'Endangered', threat: 'Water diversion' },
                { name: 'Desert Tortoise', status: 'Threatened', range: 'Southern margins' }
            ]
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Human Life Branch
        // ═══════════════════════════════════════════════════════════
        humanLife: {
            overview: 'Sparsely populated region with mining, ranching, and military presence',
            
            population: {
                total: '1.5 million in Great Basin region',
                density: '3 people per km²',
                urban: '85% in Reno-Sparks area',
                rural: 'Very sparse, ranching communities'
            },
            
            indigenousPeoples: [
                {
                    name: 'Western Shoshone',
                    region: 'Central and eastern Nevada',
                    population: '~11,000 enrolled members',
                    lifestyle: 'Traditionally hunter-gatherers, pine nut harvesting',
                    language: 'Shoshone (Uto-Aztecan)',
                    landClaim: 'Ongoing dispute over treaty lands'
                },
                {
                    name: 'Northern Paiute',
                    region: 'Western Nevada, Oregon, California',
                    population: '~7,000',
                    lifestyle: 'Fishing (Pyramid Lake), gathering',
                    significance: 'Pyramid Lake Reservation, Walker River Reservation'
                },
                {
                    name: 'Southern Paiute',
                    region: 'Southern Nevada and Utah',
                    population: '~2,000',
                    lifestyle: 'Desert adaptation, gathering'
                },
                {
                    name: 'Goshute',
                    region: 'Western Utah, eastern Nevada',
                    population: '~500',
                    lifestyle: 'Extreme desert adaptation'
                },
                {
                    name: 'Washoe',
                    region: 'Lake Tahoe area',
                    population: '~1,500',
                    significance: 'Lake Tahoe homeland'
                }
            ],
            
            traditionalLife: {
                housing: ['Wickiups (brush shelters)', 'Winter camps in canyons'],
                food: ['Pine nuts (critical staple)', 'Rabbit drives', 'Cui-ui fish', 'Seeds', 'Roots'],
                technology: ['Rabbit-skin blankets', 'Tule duck decoys', 'Obsidian tools'],
                cycle: 'Seasonal movement following resources'
            },
            
            modernLife: {
                economy: ['Mining (gold, copper, lithium)', 'Ranching', 'Gaming (Reno)', 'Military', 'Tech (Tesla Gigafactory)'],
                culture: 'Cowboy/Western heritage, Basque influence',
                challenges: ['Water scarcity', 'Boom-bust mining cycles', 'Rural isolation']
            }
        },
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Economic Importance Branch
        // ═══════════════════════════════════════════════════════════
        economy: [
            {
                sector: 'Gold Mining',
                description: 'Nevada is largest US gold producer, 5th in world',
                production: '170 tonnes annually (75% of US production)',
                locations: ['Carlin Trend', 'Cortez Hills', 'Goldstrike'],
                value: 'Billions of dollars annually',
                method: 'Large-scale open pit and underground'
            },
            {
                sector: 'Lithium Mining',
                description: 'Critical for electric vehicle batteries',
                locations: 'Clayton Valley (only US lithium brine operation)',
                future: 'Thacker Pass may become largest US lithium mine',
                significance: 'Strategic resource for clean energy transition'
            },
            {
                sector: 'Gaming & Tourism',
                description: 'Reno casino industry',
                revenue: '$1+ billion annually',
                events: ['Burning Man', 'Speed Week', 'Hot August Nights'],
                outdoor: 'Skiing, hiking, off-roading'
            },
            {
                sector: 'Ranching',
                description: 'Cattle ranching on public lands',
                history: 'Dates to 1860s',
                scale: 'Large ranches, sparse carrying capacity',
                controversy: 'Grazing fees, wild horse competition'
            },
            {
                sector: 'Military',
                description: 'Major military presence',
                facilities: ['Nellis Air Force Base', 'Fallon Naval Air Station', 'Nevada Test Site'],
                significance: 'Top Gun training, weapons testing'
            },
            {
                sector: 'Technology',
                description: 'Growing tech sector',
                example: 'Tesla Gigafactory (largest building by footprint)',
                reason: 'Low taxes, cheap land, near California talent'
            },
            {
                sector: 'Geothermal Energy',
                description: 'Significant geothermal resources',
                production: 'Nevada 2nd in US for geothermal power',
                potential: 'Major expansion possible'
            },
            {
                sector: 'Brine Shrimp',
                description: 'Great Salt Lake brine shrimp eggs',
                value: '$100+ million annually',
                use: 'Aquarium fish food worldwide',
                threat: 'Lake shrinkage threatening industry'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Environmental Issues Branch
        // ═══════════════════════════════════════════════════════════
        environmentalIssues: [
            {
                issue: 'Great Salt Lake Crisis',
                severity: 'Critical',
                description: 'Lake has shrunk by 2/3, ecological disaster',
                cause: 'Water diversion for agriculture, drought, climate change',
                impacts: [
                    'Toxic dust from exposed lakebed',
                    'Migratory bird habitat loss',
                    'Brine shrimp industry collapse',
                    'Arsenic in dust affecting Salt Lake City'
                ],
                urgency: 'Could dry up within 5 years at current rate'
            },
            {
                issue: 'Sagebrush Ecosystem Decline',
                severity: 'Critical',
                description: 'Conversion of sagebrush to cheatgrass',
                cause: 'Invasive cheatgrass increases fire frequency',
                cycle: 'Fire kills sagebrush, cheatgrass recovers faster',
                impacted: ['Greater Sage-Grouse', 'Pygmy Rabbit', 'Many species'],
                scale: 'Millions of hectares affected'
            },
            {
                issue: 'Wildfire Increase',
                severity: 'High',
                description: 'Fire frequency dramatically increased',
                cause: 'Cheatgrass creates continuous fine fuels',
                change: 'Fire return interval from 60-100 years to 3-5 years',
                impact: 'Native vegetation cannot recover'
            },
            {
                issue: 'Groundwater Depletion',
                severity: 'High',
                description: 'Aquifers being drawn down faster than recharge',
                example: 'Las Vegas (south) draws from Great Basin aquifers',
                rural: 'Agricultural pumping lowering water tables',
                springs: 'Many springs drying up'
            },
            {
                issue: 'Mining Impacts',
                severity: 'Moderate',
                description: 'Large-scale open pit mining environmental effects',
                issues: ['Groundwater contamination', 'Pit lakes', 'Habitat destruction'],
                legacy: 'Historic mines left contamination'
            },
            {
                issue: 'Wild Horse Overgrazing',
                severity: 'Moderate',
                description: '~50,000 wild horses, no natural predators',
                impact: 'Compete with native wildlife and cattle',
                debate: 'Heritage symbol vs. ecological damage',
                management: 'Controversial roundups'
            },
            {
                issue: 'Nuclear Testing Legacy',
                severity: 'Legacy',
                description: '928 nuclear tests left contamination',
                fallout: 'Atmospheric tests spread radiation downwind',
                downwinders: 'Cancer clusters in Utah communities',
                site: 'Nevada Test Site still restricted'
            },
            {
                issue: 'Climate Change',
                severity: 'High',
                description: 'Warming and drying trend',
                impacts: [
                    'More severe droughts',
                    'Earlier snowmelt',
                    'Species range shifts',
                    'Increased fire risk'
                ],
                projection: '2-4°C warming by end of century'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Historical Importance Branch
        // ═══════════════════════════════════════════════════════════
        historicalImportance: [
            {
                era: '12,000+ years ago',
                title: 'First Peoples',
                description: 'Humans arrive as Pleistocene lakes shrink',
                evidence: 'Spirit Cave mummy (9,400 years old)',
                lifestyle: 'Hunter-gatherers following game and plants'
            },
            {
                era: '13,000 years ago',
                title: 'Lake Bonneville Flood',
                description: 'Catastrophic flood when lake breached',
                scale: 'One of largest floods in geologic record',
                evidence: 'Left Great Salt Lake as remnant'
            },
            {
                era: '1827',
                title: 'Jedediah Smith Crossing',
                description: 'First European-American to cross Great Basin',
                description: 'Nearly died of thirst, called it "a country of starvation"'
            },
            {
                era: '1843-1845',
                title: 'Frémont Expeditions',
                description: 'John C. Frémont maps and names "Great Basin"',
                contribution: 'Scientific mapping, promoted Western settlement'
            },
            {
                era: '1846',
                title: 'Donner Party Tragedy',
                description: 'Emigrants stranded in Sierra Nevada after crossing Basin',
                outcome: '48 of 87 died, survivors resorted to cannibalism',
                legacy: 'Most famous disaster of Western emigration'
            },
            {
                era: '1847',
                title: 'Mormon Arrival',
                description: 'Brigham Young leads Mormons to Salt Lake Valley',
                impact: 'Founded Salt Lake City, irrigation of desert',
                colonization: 'Mormon settlements throughout Basin'
            },
            {
                era: '1859',
                title: 'Comstock Lode Discovery',
                description: 'Massive silver discovery in Virginia City',
                impact: 'Financed Union in Civil War, created Nevada statehood',
                value: 'Over $400 million in silver and gold'
            },
            {
                era: '1864',
                title: 'Nevada Statehood',
                description: 'Nevada becomes state during Civil War',
                reason: 'Lincoln needed votes for 13th Amendment',
                nickname: '"Battle Born" state'
            },
            {
                era: '1869',
                title: 'Transcontinental Railroad',
                description: 'Golden spike ceremony at Promontory Summit, Utah',
                significance: 'First transcontinental railroad completed',
                date: 'May 10, 1869'
            },
            {
                era: '1900',
                title: 'Winnemucca Bank Robbery',
                description: 'Butch Cassidy and Sundance Kid rob bank',
                haul: '$32,000',
                legacy: 'Last confirmed Wild West bank robbery'
            },
            {
                era: '1931',
                title: 'Nevada Legalizes Gambling',
                description: 'Gambling legalized, shapes state identity',
                impact: 'Led to Las Vegas, Reno development'
            },
            {
                era: '1951-1992',
                title: 'Nuclear Testing Era',
                description: '928 nuclear tests at Nevada Test Site',
                atmospheric: '100 above-ground tests (1951-1962)',
                underground: '828 underground tests (1962-1992)',
                impact: 'Fallout affected "downwinder" communities'
            },
            {
                era: '1986',
                title: 'Great Basin National Park',
                description: 'Park established to protect Wheeler Peak and bristlecone pines',
                previous: 'Lehman Caves National Monument since 1922'
            },
            {
                era: '1997',
                title: 'Sound Barrier Broken on Land',
                description: 'ThrustSSC sets 763 mph record at Black Rock Desert',
                driver: 'Andy Green',
                significance: 'First supersonic land vehicle'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // MIND MAP DATA - Fun Facts Branch
        // ═══════════════════════════════════════════════════════════
        funFacts: [
            {
                fact: 'The Great Basin is the only true cold desert in North America - it snows here',
                category: 'Geography'
            },
            {
                fact: 'No rivers in the Great Basin reach the ocean - all water evaporates or sinks into the ground',
                category: 'Hydrology'
            },
            {
                fact: 'Bristlecone pines in Great Basin are the oldest living organisms on Earth - over 5,000 years old',
                category: 'Nature'
            },
            {
                fact: 'The Bonneville Salt Flats are so flat you can see the curvature of the Earth',
                category: 'Geography'
            },
            {
                fact: 'Nevada had more nuclear explosions (928) than any other place on Earth',
                category: 'History'
            },
            {
                fact: 'The Great Salt Lake is shrinking so fast it could disappear within 5 years',
                category: 'Crisis'
            },
            {
                fact: 'Area 51, the famous "UFO" site, is in the Great Basin Desert',
                category: 'Culture'
            },
            {
                fact: 'Burning Man festival temporarily creates Nevada\'s third largest city in the Black Rock Desert',
                category: 'Events'
            },
            {
                fact: 'The Donner Party tragedy happened after crossing the Great Basin, not in it',
                category: 'History'
            },
            {
                fact: 'Nevada produces 75% of all US gold - more than most countries',
                category: 'Economy'
            },
            {
                fact: 'Wild horses (mustangs) roam the Great Basin - about 50,000 of them',
                category: 'Wildlife'
            },
            {
                fact: 'Pronghorn antelope evolved their speed (90 km/h) to escape a now-extinct American cheetah',
                category: 'Evolution'
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // JOURNEY WAYPOINTS - Cross the Desert Feature
        // ═══════════════════════════════════════════════════════════
        journeyWaypoints: [
            {
                name: 'Reno, Nevada',
                coordinates: [39.53, -119.81],
                description: 'Starting at "The Biggest Little City in the World" on the Sierra\'s edge',
                type: 'start',
                duration: 3000
            },
            {
                name: 'Pyramid Lake',
                coordinates: [40.0, -119.5],
                description: 'Sacred Paiute lake, home of the ancient cui-ui fish',
                type: 'landmark',
                duration: 3000
            },
            {
                name: 'Black Rock Desert',
                coordinates: [40.75, -119.0],
                description: 'The playa where cars break the sound barrier and Burning Man rises',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Humboldt River Trail',
                coordinates: [40.8, -117.5],
                description: 'Following the emigrant trail along America\'s strangest river',
                type: 'terrain',
                duration: 3000
            },
            {
                name: 'Ruby Mountains',
                coordinates: [40.6, -115.5],
                description: 'The "Alps of Nevada" - glacial peaks rising from desert',
                type: 'landmark',
                duration: 3000
            },
            {
                name: 'Great Basin National Park',
                coordinates: [39.0, -114.3],
                description: 'Ancient bristlecone pines, 5,000 years old and counting',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Bonneville Salt Flats',
                coordinates: [40.75, -113.9],
                description: 'The flattest place on Earth - where speed records are made',
                type: 'landmark',
                duration: 4000
            },
            {
                name: 'Great Salt Lake',
                coordinates: [41.0, -112.5],
                description: 'Journey\'s end at the Western Hemisphere\'s largest salt lake',
                type: 'end',
                duration: 3000
            }
        ],
        
        // ═══════════════════════════════════════════════════════════
        // QUICK FACTS - Profile Page Bottom Panel
        // ═══════════════════════════════════════════════════════════
        quickFacts: {
            area: '492,000 km²',
            type: 'Cold Desert',
            avgTemp: '7°C to 12°C',
            rainfall: '150-300mm/year',
            countries: 'United States',
            population: '~1.5 million'
        }
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT - Make data available to other modules
// ═══════════════════════════════════════════════════════════════════════════

// For ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = desertsData1;
}

// For browser global
if (typeof window !== 'undefined') {
    window.DESERTS_DATA_1 = desertsData1;
}

console.log('✅ DESERTS_DATA_1.js loaded: ' + DESERTS_DATA_1.length + ' deserts (1-10)');
