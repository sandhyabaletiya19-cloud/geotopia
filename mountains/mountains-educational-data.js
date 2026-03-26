/**
 * ================================================
 * MOUNTAINS EDUCATION DATA MODULE
 * Complete educational content for Mountains
 * ================================================
 */

const mountainsEducationData = {
    meta: {
        name: 'Mountains',
        icon: '⛰️',
        theme: 'mountains-theme',
        primaryColor: '#5D6D7E',
        secondaryColor: '#85929E',
        accentColor: '#2E4053',
        existingPagesLink: '/encyclopedia/mountains/',
        heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80'
    },

    sections: {
        // ================================
        // SECTION 1: DEFINITION
        // ================================
        definition: {
            title: 'What is a Mountain?',
            hero: {
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
                tagline: 'Earth\'s Majestic Peaks Rising Above the Landscape'
            },
            content: {
                introduction: 'A mountain is a large landform that rises significantly above its surrounding terrain, typically with steep slopes, a relatively confined summit area, and considerable local relief. Mountains are formed through tectonic forces, volcanic activity, or erosion and are distinguished from hills by their height—generally exceeding 600 meters (2,000 feet) above sea level.',
                
                keyPoints: [
                    {
                        icon: '📏',
                        label: 'Height Criteria',
                        text: 'Generally above 600m (2,000 ft)',
                        detail: 'While there\'s no universal definition, most geographers consider a landform a mountain if it rises at least 600 meters above the surrounding terrain with a steep gradient.'
                    },
                    {
                        icon: '⛰️',
                        label: 'Summit',
                        text: 'Peaked or rounded top',
                        detail: 'The summit is the highest point of a mountain. It can be sharp and peaked (like the Matterhorn) or rounded and dome-like (like many ancient mountains).'
                    },
                    {
                        icon: '📐',
                        label: 'Steep Slopes',
                        text: 'Gradient typically >25°',
                        detail: 'Mountains have steep sides that distinguish them from plateaus and hills. The steepness affects drainage, soil formation, and vegetation patterns.'
                    },
                    {
                        icon: '🏔️',
                        label: 'Local Relief',
                        text: 'Significant elevation change',
                        detail: 'Local relief refers to the difference in elevation between the mountain base and summit. True mountains have high local relief, often over 300 meters.'
                    },
                    {
                        icon: '🌡️',
                        label: 'Climate Zones',
                        text: 'Temperature drops 6.5°C per 1000m',
                        detail: 'Mountains create vertical climate zones. As elevation increases, temperature decreases at approximately 6.5°C per 1,000 meters (environmental lapse rate).'
                    },
                    {
                        icon: '🌧️',
                        label: 'Orographic Effect',
                        text: 'Creates rain shadow',
                        detail: 'Mountains force air upward, causing cooling and precipitation on windward slopes, while leeward slopes remain dry (rain shadow effect).'
                    },
                    {
                        icon: '🧊',
                        label: 'Snow Line',
                        text: 'Permanent snow above certain altitude',
                        detail: 'Above the snow line, snow persists year-round. This altitude varies by latitude—from 5,500m at the equator to sea level near the poles.'
                    },
                    {
                        icon: '🏞️',
                        label: 'Mountain Ranges',
                        text: 'Series of connected mountains',
                        detail: 'Mountains rarely exist alone. They typically form ranges (like the Himalayas) or systems (like the Rocky Mountain System) spanning thousands of kilometers.'
                    },
                    {
                        icon: '🌍',
                        label: 'Coverage',
                        text: '24% of Earth\'s land surface',
                        detail: 'Mountains cover approximately one-quarter of Earth\'s land area and are home to about 12% of the world\'s population.'
                    },
                    {
                        icon: '💧',
                        label: 'Water Towers',
                        text: 'Source of major rivers',
                        detail: 'Mountains are called "water towers of the world" because they provide freshwater to over half of humanity through rivers, groundwater, and glaciers.'
                    }
                ],

                comparison: {
                    title: 'Mountain vs Hill vs Plateau',
                    features: [
                        { feature: 'Height', mountain: '>600m above surroundings', hill: '<600m above surroundings', plateau: 'Varies (flat top)' },
                        { feature: 'Summit', mountain: 'Peaked/Rounded', hill: 'Rounded', plateau: 'Flat/Tableland' },
                        { feature: 'Slopes', mountain: 'Steep (>25°)', hill: 'Gentle to Moderate', plateau: 'Steep edges, flat top' },
                        { feature: 'Formation', mountain: 'Tectonic/Volcanic', hill: 'Erosion/Deposition', plateau: 'Uplift/Lava flows' },
                        { feature: 'Climate Zones', mountain: 'Multiple vertical zones', hill: 'Single zone', plateau: '1-2 zones' },
                        { feature: 'Example', mountain: 'Mount Everest', hill: 'Capitol Hill', plateau: 'Tibetan Plateau' }
                    ]
                },

                diagram: {
                    type: 'svg',
                    id: 'mountain-anatomy-diagram',
                    alt: 'Anatomy of a Mountain'
                },

                funFacts: [
                    '🏔️ Mount Everest grows about 4mm taller each year due to tectonic activity',
                    '🌊 The tallest mountain from base to peak is Mauna Kea (10,203m from ocean floor)',
                    '🦅 Bar-headed geese fly over the Himalayas at altitudes of 8,800m',
                    '❄️ K2 has never been climbed in winter due to extreme conditions',
                    '🌡️ Temperature drops roughly 1°C for every 150m of elevation gain',
                    '⛰️ The Himalayas are still rising by about 1cm per year',
                    '🏃 The fastest Everest ascent from base camp is 10 hours 56 minutes',
                    '🌍 Mars has the tallest known mountain—Olympus Mons at 21,900m',
                    '💨 Winds atop Everest can exceed 280 km/h during winter',
                    '🦋 Some butterflies migrate over the Himalayas at 5,800m altitude',
                    '🏔️ About 800 people have summited all 14 eight-thousanders',
                    '💎 Many mountains contain valuable mineral deposits',
                    '🌲 The tree line on mountains varies from 2,000m to 4,500m by latitude',
                    '🦌 Mountain goats can climb slopes of nearly 60 degrees',
                    '⚡ Mountains receive more lightning strikes than lowlands'
                ]
            }
        },

        // ================================
        // SECTION 2: TYPES OF MOUNTAINS
        // ================================
        types: {
            title: 'Types of Mountains',
            hero: {
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
                tagline: 'Understanding How Mountains Form and Their Characteristics'
            },
            renderAs: 'mindmap',
            
            branches: [
                {
                    id: 'fold-mountains',
                    name: 'Fold Mountains',
                    icon: '🏔️',
                    color: '#5D6D7E',
                    definition: 'Fold mountains form when two tectonic plates collide, causing the Earth\'s crust to buckle, fold, and be pushed upward. They are the most common and highest type of mountains on Earth, featuring dramatic peaks and extensive ranges.',
                    
                    formation: {
                        title: 'How Fold Mountains Form',
                        steps: [
                            { step: 1, text: 'Two tectonic plates move toward each other (convergent boundary)', icon: '➡️⬅️' },
                            { step: 2, text: 'Sedimentary layers between plates begin to compress', icon: '📚' },
                            { step: 3, text: 'Continued pressure causes layers to buckle and fold', icon: '〰️' },
                            { step: 4, text: 'Folds intensify, creating anticlines (upfolds) and synclines (downfolds)', icon: '📈📉' },
                            { step: 5, text: 'Rocks are pushed upward, forming mountain peaks', icon: '⬆️' },
                            { step: 6, text: 'Overthrusting may occur—older rocks pushed over younger', icon: '🔄' },
                            { step: 7, text: 'Continued collision causes further uplift over millions of years', icon: '⏰' },
                            { step: 8, text: 'Erosion shapes peaks while uplift continues', icon: '💨' }
                        ]
                    },
                    
                    characteristics: [
                        'Highest mountains on Earth',
                        'Long, linear ranges spanning thousands of km',
                        'Parallel ridges and valleys',
                        'Visible fold patterns in rock layers',
                        'Often contain marine fossils at high altitudes',
                        'Earthquake-prone regions',
                        'Contains metamorphic and sedimentary rocks',
                        'Young mountains have sharp, jagged peaks',
                        'Old fold mountains are more rounded (erosion)',
                        'Often associated with volcanic activity',
                        'Major sources of rivers',
                        'Contain valuable mineral deposits'
                    ],
                    
                    examples: [
                        {
                            name: 'Himalayas',
                            location: 'Asia (Nepal, India, China, Pakistan, Bhutan)',
                            details: 'Highest mountain range; 10 of 14 peaks above 8,000m; 50 million years old',
                            link: '/encyclopedia/mountains/himalayas',
                            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
                            notableFeatures: [
                                'Contains Mount Everest (8,849m)',
                                'Still rising 1cm/year',
                                'Formed by India-Eurasia collision',
                                'Source of major Asian rivers'
                            ]
                        },
                        {
                            name: 'Alps',
                            location: 'Europe (8 countries)',
                            details: 'Most famous European range; 4,808m (Mont Blanc); formed 65 million years ago',
                            link: '/encyclopedia/mountains/alps',
                            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
                            notableFeatures: [
                                'Iconic jagged peaks',
                                'Extensive glacier coverage',
                                'Major tourist destination',
                                'African-European plate collision'
                            ]
                        },
                        {
                            name: 'Andes',
                            location: 'South America (7 countries)',
                            details: 'Longest continental range; 7,000km; 6,961m (Aconcagua)',
                            link: '/encyclopedia/mountains/andes',
                            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
                            notableFeatures: [
                                'World\'s longest mountain range',
                                'Contains many active volcanoes',
                                'Home to ancient Incan civilization',
                                'Nazca-South American plate convergence'
                            ]
                        },
                        {
                            name: 'Rocky Mountains',
                            location: 'North America (USA, Canada)',
                            details: '4,800km long; 4,401m (Mount Elbert); 80-55 million years old',
                            link: '/encyclopedia/mountains/rockies',
                            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
                            notableFeatures: [
                                'Continental Divide of Americas',
                                'Rich mineral deposits (gold, silver)',
                                'Diverse ecosystems',
                                'Major watershed source'
                            ]
                        },
                        {
                            name: 'Appalachians',
                            location: 'Eastern North America',
                            details: '2,400km; 2,037m (Mount Mitchell); 480 million years old',
                            link: '/encyclopedia/mountains/appalachians',
                            image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
                            notableFeatures: [
                                'Among oldest mountains on Earth',
                                'Heavily eroded, rounded peaks',
                                'Rich coal deposits',
                                'Appalachian Trail (3,500km)'
                            ]
                        }
                    ],
                    
                    distribution: {
                        continents: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'],
                        majorRegions: [
                            { name: 'Alpine-Himalayan Belt', extent: '10,000km', features: 'Youngest, highest fold mountains' },
                            { name: 'Circum-Pacific Belt', extent: '40,000km', features: 'Ring of Fire, active tectonics' },
                            { name: 'Caledonian Belt', extent: 'N. Europe, E. N. America', features: 'Ancient, eroded' }
                        ]
                    }
                },

                {
                    id: 'volcanic-mountains',
                    name: 'Volcanic Mountains',
                    icon: '🌋',
                    color: '#C0392B',
                    definition: 'Volcanic mountains form through the accumulation of lava, ash, and other volcanic materials ejected during eruptions. They can grow rapidly compared to other mountain types and are often found at plate boundaries or hotspots.',
                    
                    formation: {
                        title: 'How Volcanic Mountains Form',
                        steps: [
                            { step: 1, text: 'Magma rises from the mantle through the crust', icon: '🔥' },
                            { step: 2, text: 'Pressure builds until eruption occurs', icon: '💥' },
                            { step: 3, text: 'Lava, ash, and pyroclastic materials are ejected', icon: '🌋' },
                            { step: 4, text: 'Materials accumulate around the vent', icon: '⛰️' },
                            { step: 5, text: 'Repeated eruptions build layers over time', icon: '📚' },
                            { step: 6, text: 'Mountain grows with each eruption cycle', icon: '📈' },
                            { step: 7, text: 'Crater or caldera may form at summit', icon: '🕳️' },
                            { step: 8, text: 'Erosion and weathering shape final form', icon: '💨' }
                        ]
                    },
                    
                    characteristics: [
                        'Conical or dome-shaped profile',
                        'Crater or caldera at summit',
                        'Made of igneous rocks (basalt, andesite)',
                        'Layered structure (lava and ash)',
                        'Often surrounded by fertile soils',
                        'Hot springs and geothermal activity nearby',
                        'Can be active, dormant, or extinct',
                        'May have multiple vents',
                        'Associated with earthquakes',
                        'Can grow rapidly (geologically speaking)',
                        'Often isolated peaks (not in ranges)',
                        'Steep upper slopes, gentler base'
                    ],
                    
                    examples: [
                        {
                            name: 'Mount Fuji',
                            location: 'Japan',
                            details: 'Perfect stratovolcano; 3,776m; sacred mountain; last erupted 1707',
                            link: '/encyclopedia/mountains/fuji',
                            image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
                            notableFeatures: [
                                'Symmetrical cone shape',
                                'UNESCO World Heritage Site',
                                'Climbed by 300,000 people yearly',
                                'Cultural icon of Japan'
                            ]
                        },
                        {
                            name: 'Mount Kilimanjaro',
                            location: 'Tanzania',
                            details: 'Highest in Africa; 5,895m; dormant stratovolcano with three cones',
                            link: '/encyclopedia/mountains/kilimanjaro',
                            image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
                            notableFeatures: [
                                'Freestanding mountain (not in range)',
                                'Glaciers at equator',
                                'Five climate zones',
                                'Three volcanic cones: Kibo, Mawenzi, Shira'
                            ]
                        },
                        {
                            name: 'Mauna Loa',
                            location: 'Hawaii, USA',
                            details: 'Largest active volcano; 4,169m above sea level; shield volcano',
                            link: '/encyclopedia/mountains/mauna-loa',
                            image: 'https://images.unsplash.com/photo-1547483238-2cbf881a559f?w=800&q=80',
                            notableFeatures: [
                                'Covers half of Hawaii Island',
                                'Erupted 33 times since 1843',
                                '10,203m from ocean floor base',
                                'Produces fluid basaltic lava'
                            ]
                        },
                        {
                            name: 'Mount Vesuvius',
                            location: 'Italy',
                            details: 'Only active volcano in mainland Europe; 1,281m; destroyed Pompeii 79 AD',
                            link: '/encyclopedia/mountains/vesuvius',
                            image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
                            notableFeatures: [
                                'Most dangerous volcano in Europe',
                                '3 million people live nearby',
                                'Erupted 50+ times since 79 AD',
                                'Part of Campanian volcanic arc'
                            ]
                        },
                        {
                            name: 'Mount Etna',
                            location: 'Sicily, Italy',
                            details: 'Europe\'s most active volcano; 3,357m; UNESCO World Heritage Site',
                            link: '/encyclopedia/mountains/etna',
                            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
                            notableFeatures: [
                                'Nearly constant activity',
                                '500,000 years old',
                                'Fertile volcanic soils (vineyards)',
                                'Multiple summit craters'
                            ]
                        }
                    ],
                    
                    distribution: {
                        continents: ['All continents'],
                        majorRegions: [
                            { name: 'Ring of Fire', extent: 'Pacific Rim', features: '75% of world\'s volcanoes' },
                            { name: 'East African Rift', extent: '6,400km', features: 'Active rift volcanism' },
                            { name: 'Hotspots', extent: 'Global', features: 'Hawaii, Iceland, Yellowstone' }
                        ]
                    }
                },

                {
                    id: 'block-mountains',
                    name: 'Block Mountains (Fault-Block)',
                    icon: '🧱',
                    color: '#8E44AD',
                    definition: 'Block mountains form when large blocks of crust are uplifted along fault lines while adjacent blocks drop down. They are characterized by steep, cliff-like faces on one side (fault scarp) and gentler slopes on the other.',
                    
                    formation: {
                        title: 'How Block Mountains Form',
                        steps: [
                            { step: 1, text: 'Tensional forces stretch the Earth\'s crust', icon: '↔️' },
                            { step: 2, text: 'Crust fractures along fault lines', icon: '💔' },
                            { step: 3, text: 'Blocks between faults move vertically', icon: '↕️' },
                            { step: 4, text: 'Some blocks are pushed up (horst)', icon: '⬆️' },
                            { step: 5, text: 'Adjacent blocks drop down (graben)', icon: '⬇️' },
                            { step: 6, text: 'Steep fault scarp forms on uplifted side', icon: '🏔️' },
                            { step: 7, text: 'Tilted block creates asymmetric profile', icon: '📐' },
                            { step: 8, text: 'Erosion modifies the mountain over time', icon: '💨' }
                        ]
                    },
                    
                    characteristics: [
                        'Asymmetric profile (one steep, one gentle side)',
                        'Steep fault scarp (cliff face)',
                        'Relatively flat summit area',
                        'Often occur in pairs (horst and graben)',
                        'Rift valleys between mountains',
                        'Rectangular or block-like appearance',
                        'Visible fault lines in rock',
                        'Associated with extensional tectonics',
                        'Can expose ancient rock layers',
                        'Often have internal basins',
                        'May contain fault-controlled lakes',
                        'Generally lower than fold mountains'
                    ],
                    
                    examples: [
                        {
                            name: 'Sierra Nevada',
                            location: 'California, USA',
                            details: '640km long; 4,421m (Mount Whitney); tilted fault block',
                            link: '/encyclopedia/mountains/sierra-nevada',
                            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
                            notableFeatures: [
                                'Steep eastern escarpment',
                                'Gentle western slope',
                                'Contains Yosemite Valley',
                                'Mount Whitney (highest in contiguous US)'
                            ]
                        },
                        {
                            name: 'Vosges Mountains',
                            location: 'France',
                            details: '120km long; 1,424m; horst between Rhine and Saône grabens',
                            link: '/encyclopedia/mountains/vosges',
                            image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
                            notableFeatures: [
                                'Classic horst structure',
                                'Rounded summits',
                                'Dense forest coverage',
                                'Paired with Black Forest across Rhine'
                            ]
                        },
                        {
                            name: 'Black Forest',
                            location: 'Germany',
                            details: '160km long; 1,493m; horst mountain paired with Vosges',
                            link: '/encyclopedia/mountains/black-forest',
                            image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80',
                            notableFeatures: [
                                'Steep western slopes',
                                'Dense coniferous forests',
                                'Numerous hot springs',
                                'Rhine Graben on western side'
                            ]
                        },
                        {
                            name: 'Ruwenzori Mountains',
                            location: 'Uganda/DR Congo',
                            details: '120km long; 5,109m; "Mountains of the Moon"',
                            link: '/encyclopedia/mountains/ruwenzori',
                            image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
                            notableFeatures: [
                                'Glaciers near equator',
                                'Block mountain in rift zone',
                                'Endemic species',
                                'Third highest in Africa'
                            ]
                        }
                    ],
                    
                    distribution: {
                        continents: ['North America', 'Europe', 'Africa'],
                        majorRegions: [
                            { name: 'Basin and Range Province', extent: 'Western USA', features: 'Parallel block mountains' },
                            { name: 'East African Rift', extent: 'Kenya to Mozambique', features: 'Active faulting' },
                            { name: 'Upper Rhine Graben', extent: 'France-Germany', features: 'Classic horst-graben' }
                        ]
                    }
                },

                {
                    id: 'dome-mountains',
                    name: 'Dome Mountains',
                    icon: '🔵',
                    color: '#27AE60',
                    definition: 'Dome mountains form when magma pushes up beneath the crust without breaking through the surface, creating a rounded, dome-shaped uplift. The overlying rock layers arch upward, and erosion may later expose the igneous core.',
                    
                    formation: {
                        title: 'How Dome Mountains Form',
                        steps: [
                            { step: 1, text: 'Magma rises from deep in the Earth\'s interior', icon: '🔥' },
                            { step: 2, text: 'Magma collects beneath the surface (no eruption)', icon: '⏸️' },
                            { step: 3, text: 'Overlying rock layers are pushed upward', icon: '⬆️' },
                            { step: 4, text: 'Rocks arch into a dome shape', icon: '🔵' },
                            { step: 5, text: 'Magma cools and solidifies into igneous rock', icon: '🧊' },
                            { step: 6, text: 'Erosion removes softer outer rock layers', icon: '💨' },
                            { step: 7, text: 'Resistant igneous core becomes exposed', icon: '⛰️' },
                            { step: 8, text: 'Circular ridge pattern may develop around dome', icon: '⭕' }
                        ]
                    },
                    
                    characteristics: [
                        'Rounded, dome-like shape',
                        'Circular or elliptical footprint',
                        'Igneous rock core (granite, etc.)',
                        'Concentric ring pattern of rocks',
                        'No volcanic crater',
                        'Relatively gentle slopes',
                        'Resistant rock core surrounded by softer rocks',
                        'Often isolated mountains',
                        'May have dissected (eroded) tops',
                        'Ancient geological features',
                        'Good source of granite and minerals',
                        'Often have radial drainage patterns'
                    ],
                    
                    examples: [
                        {
                            name: 'Black Hills',
                            location: 'South Dakota, USA',
                            details: '200km long; 2,207m (Black Elk Peak); exposed igneous core',
                            link: '/encyclopedia/mountains/black-hills',
                            image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80',
                            notableFeatures: [
                                'Mount Rushmore carved into granite',
                                'Elliptical dome structure',
                                'Sacred to Lakota Sioux',
                                '60 million years old'
                            ]
                        },
                        {
                            name: 'Ozark Plateau/Mountains',
                            location: 'Arkansas/Missouri, USA',
                            details: 'Eroded dome uplift; 839m (Magazine Mountain)',
                            link: '/encyclopedia/mountains/ozarks',
                            image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
                            notableFeatures: [
                                'Heavily dissected plateau',
                                'Numerous springs and caves',
                                'Ancient eroded dome',
                                'Rich in lead and zinc'
                            ]
                        },
                        {
                            name: 'Adirondack Mountains',
                            location: 'New York, USA',
                            details: 'Circular dome; 1,628m (Mount Marcy); billion-year-old rocks',
                            link: '/encyclopedia/mountains/adirondacks',
                            image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
                            notableFeatures: [
                                'Circular uplift pattern',
                                'Among oldest rocks in North America',
                                'Still rising slightly',
                                'Surrounded by younger rocks'
                            ]
                        },
                        {
                            name: 'Half Dome',
                            location: 'California, USA',
                            details: 'Granite dome; 2,693m; iconic Yosemite landmark',
                            link: '/encyclopedia/mountains/half-dome',
                            image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80',
                            notableFeatures: [
                                'Vertical cliff face (600m)',
                                'Exfoliation dome (peeling layers)',
                                '87 million years old',
                                'Iconic climbing destination'
                            ]
                        }
                    ],
                    
                    distribution: {
                        continents: ['North America', 'Africa', 'Europe'],
                        majorRegions: [
                            { name: 'Interior USA', extent: 'Great Plains region', features: 'Ancient domes exposed by erosion' },
                            { name: 'Shield regions', extent: 'Global', features: 'Ancient dome structures' }
                        ]
                    }
                },

                {
                    id: 'plateau-mountains',
                    name: 'Plateau Mountains (Residual)',
                    icon: '🏜️',
                    color: '#E67E22',
                    definition: 'Plateau mountains, also called residual or erosional mountains, form when a plateau is carved by rivers and erosion over millions of years. The resistant parts remain standing as mountains while surrounding areas are worn away.',
                    
                    formation: {
                        title: 'How Plateau Mountains Form',
                        steps: [
                            { step: 1, text: 'Flat plateau exists (from uplift or lava flows)', icon: '➖' },
                            { step: 2, text: 'Rivers begin cutting into the plateau surface', icon: '💧' },
                            { step: 3, text: 'Valleys deepen and widen over time', icon: '↕️' },
                            { step: 4, text: 'Resistant rock areas erode more slowly', icon: '🪨' },
                            { step: 5, text: 'Softer areas are removed, leaving highlands', icon: '💨' },
                            { step: 6, text: 'Dissected plateau takes on mountainous appearance', icon: '⛰️' },
                            { step: 7, text: 'Continued erosion isolates mountain masses', icon: '🏔️' },
                            { step: 8, text: 'Flat-topped mesas and buttes may form', icon: '🗿' }
                        ]
                    },
                    
                    characteristics: [
                        'Often flat or gently rolling summits',
                        'Deep river valleys cut into plateau',
                        'Resistant rock caps (often horizontal)',
                        'Steep valley walls',
                        'Mesa and butte formations common',
                        'Evidence of original plateau surface',
                        'Horizontal rock layering visible',
                        'Generally lower than fold mountains',
                        'Found in ancient, stable areas',
                        'Rich in coal and mineral deposits',
                        'Distinctive stepped profiles',
                        'Table-top appearances common'
                    ],
                    
                    examples: [
                        {
                            name: 'Catskill Mountains',
                            location: 'New York, USA',
                            details: 'Dissected plateau; 1,274m; not true fold mountains',
                            link: '/encyclopedia/mountains/catskills',
                            image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
                            notableFeatures: [
                                'Eroded Allegheny Plateau',
                                'Horizontal sedimentary layers',
                                'Rounded, flat-topped peaks',
                                'Deep glacially carved valleys'
                            ]
                        },
                        {
                            name: 'Scottish Highlands',
                            location: 'Scotland, UK',
                            details: 'Ancient eroded plateau; 1,345m (Ben Nevis)',
                            link: '/encyclopedia/mountains/scottish-highlands',
                            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                            notableFeatures: [
                                'Heavily glaciated',
                                'Ancient Caledonian mountain roots',
                                'Numerous lochs (lakes)',
                                '400+ million years of erosion'
                            ]
                        },
                        {
                            name: 'Western Ghats',
                            location: 'India',
                            details: 'Escarpment of Deccan Plateau; 2,695m; biodiversity hotspot',
                            link: '/encyclopedia/mountains/western-ghats',
                            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
                            notableFeatures: [
                                'Steep western escarpment',
                                'Older than Himalayas',
                                'UNESCO World Heritage Site',
                                'Source of major peninsular rivers'
                            ]
                        },
                        {
                            name: 'Ethiopian Highlands',
                            location: 'Ethiopia',
                            details: 'Rugged plateau; 4,550m; "Roof of Africa"',
                            link: '/encyclopedia/mountains/ethiopian-highlands',
                            image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
                            notableFeatures: [
                                'Volcanic origin plateau',
                                'Deeply dissected by rivers',
                                'Source of Blue Nile',
                                'Isolated endemic species'
                            ]
                        }
                    ],
                    
                    distribution: {
                        continents: ['All continents'],
                        majorRegions: [
                            { name: 'Appalachian Plateau', extent: 'Eastern USA', features: 'Coal-bearing dissected plateau' },
                            { name: 'Deccan Plateau edges', extent: 'India', features: 'Western and Eastern Ghats' },
                            { name: 'East African Plateau', extent: 'Ethiopia to South Africa', features: 'Ancient, elevated surfaces' }
                        ]
                    }
                }
            ],

            comparisonTable: {
                title: 'Quick Comparison: Types of Mountains',
                headers: ['Type', 'Formation', 'Shape', 'Height', 'Example', 'Age'],
                rows: [
                    ['Fold', 'Plate collision', 'Sharp peaks, ridges', 'Highest', 'Himalayas', 'Young-Old'],
                    ['Volcanic', 'Lava accumulation', 'Conical, crater', 'Variable', 'Mt. Fuji', 'Young'],
                    ['Block', 'Faulting/uplift', 'Asymmetric, flat top', 'Moderate', 'Sierra Nevada', 'Variable'],
                    ['Dome', 'Magma uplift (no eruption)', 'Rounded, circular', 'Moderate', 'Black Hills', 'Ancient'],
                    ['Plateau', 'Erosion of plateau', 'Flat-topped, dissected', 'Lower', 'Catskills', 'Ancient']
                ]
            }
        },

        // ================================
        // SECTION 3: FORMATION PROCESSES
        // ================================
        formation: {
            title: 'How Mountains Form',
            hero: {
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
                tagline: 'The Powerful Forces That Build Earth\'s Peaks'
            },
            renderAs: 'timeline',
            introduction: 'Mountain formation (orogeny) is one of the most dramatic processes on Earth, involving immense forces that shape continents over millions of years. Understanding these processes helps us comprehend Earth\'s dynamic nature and predict geological hazards.',

            stages: [
                {
                    stage: 1,
                    title: 'Tectonic Forces Begin',
                    timeframe: 'Ongoing Process',
                    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
                    description: [
                        'Earth\'s lithosphere is divided into tectonic plates',
                        'Plates float on the semi-fluid asthenosphere',
                        'Convection currents in the mantle drive plate movement',
                        'Plates move 1-10 cm per year (fingernail growth rate)',
                        'Movement creates three types of boundaries: convergent, divergent, transform',
                        'Convergent boundaries are primary mountain-building zones',
                        'Heat from Earth\'s core provides energy for plate tectonics',
                        'Process has been occurring for 3+ billion years',
                        'Continents have repeatedly joined and separated (Wilson Cycle)',
                        'Current plate configuration is temporary on geological timescale'
                    ],
                    keyFeatures: [
                        '15 major tectonic plates',
                        'Movement: 1-10 cm/year',
                        'Asthenosphere: 80-200 km deep',
                        'Lithosphere: 0-100 km thick'
                    ]
                },
                {
                    stage: 2,
                    title: 'Collision and Compression',
                    timeframe: 'Millions of Years',
                    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
                    description: [
                        'Two plates converge at collision zones',
                        'Oceanic-continental: oceanic plate subducts, forming volcanic mountains',
                        'Continental-continental: both plates crumple (no subduction)',
                        'Oceanic-oceanic: one subducts, forming island arcs',
                        'Immense pressure builds at collision zones',
                        'Rocks are compressed, folded, and faulted',
                        'Sediments accumulated between plates are squeezed upward',
                        'Process releases enormous energy (earthquakes)',
                        'India-Asia collision: still ongoing, creating Himalayas',
                        'Collision zones are seismically and volcanically active'
                    ],
                    keyFeatures: [
                        'Collision force: millions of tons',
                        'Compression: horizontal stress',
                        'Folding: plastic deformation',
                        'Faulting: brittle fracture'
                    ]
                },
                {
                    stage: 3,
                    title: 'Uplift and Mountain Growth',
                    timeframe: '10-50 Million Years',
                    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
                    description: [
                        'Compressed crust is pushed upward (orogeny)',
                        'Mountains can rise several kilometers over millions of years',
                        'Uplift rate varies: 1-10 mm per year typically',
                        'Himalayas rising ~5 mm/year currently',
                        'Isostatic adjustment: crust floats higher as it thickens',
                        'Metamorphism occurs deep in mountain roots',
                        'Marine fossils found at high altitudes (former sea floor)',
                        'Multiple phases of orogeny may occur',
                        'Uplift continues as long as collision continues',
                        'Mountains can reach extreme heights (8,000m+)'
                    ],
                    keyFeatures: [
                        'Uplift rate: 1-10 mm/year',
                        'Himalayan age: 50 million years',
                        'Everest contains marine fossils',
                        'Isostasy balances mountain weight'
                    ]
                },
                {
                    stage: 4,
                    title: 'Erosion and Sculpting',
                    timeframe: 'Continuous',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    description: [
                        'Erosion begins immediately as mountains rise',
                        'Water, ice, and wind are primary erosional agents',
                        'Glaciers carve dramatic valleys and peaks',
                        'Rivers cut deep gorges through mountains',
                        'Freeze-thaw weathering breaks apart rock',
                        'Landslides and rockfalls remove material',
                        'Erosion rate depends on rock type and climate',
                        'Young mountains: sharp peaks (erosion < uplift)',
                        'Old mountains: rounded summits (erosion > uplift)',
                        'Eroded sediments form new sedimentary rocks'
                    ],
                    keyFeatures: [
                        'Erosion agents: water, ice, wind',
                        'Glacial features: cirques, horns, U-valleys',
                        'River features: V-valleys, gorges',
                        'Old mountains: rounded profiles'
                    ]
                },
                {
                    stage: 5,
                    title: 'Equilibrium and Decline',
                    timeframe: '100+ Million Years',
                    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
                    description: [
                        'Eventually, erosion outpaces uplift',
                        'Mountains slowly decrease in height',
                        'Root zone beneath mountains also erodes',
                        'Isostatic rebound: mountains rise slightly as mass removed',
                        'Very old mountains become low, rounded hills',
                        'Appalachians once rivaled Himalayas in height',
                        'Process takes hundreds of millions of years',
                        'Peneplain: nearly flat erosion surface may form',
                        'Mountain rocks spread across continents as sediments',
                        'Cycle may restart with new tectonic activity'
                    ],
                    keyFeatures: [
                        'Appalachians: 480 million years old',
                        'Original height: possibly 8,000m+',
                        'Current height: ~2,000m max',
                        'Erosion rate varies: 0.001-1 mm/year'
                    ]
                }
            ],

            terminology: {
                title: '📖 Essential Mountain Terms',
                terms: [
                    {
                        term: 'Orogeny',
                        pronunciation: '(oh-ROJ-eh-nee)',
                        definition: 'The process of mountain formation through tectonic forces, particularly the folding and faulting of the Earth\'s crust.',
                        example: 'The Himalayan orogeny began about 50 million years ago when India collided with Asia.',
                        relatedTerms: ['orogenic belt', 'orogen', 'mountain building']
                    },
                    {
                        term: 'Subduction',
                        pronunciation: '(sub-DUK-shun)',
                        definition: 'The process where one tectonic plate moves under another plate, descending into the mantle.',
                        example: 'The Andes formed through subduction of the Nazca Plate beneath the South American Plate.',
                        relatedTerms: ['subduction zone', 'trench', 'volcanic arc']
                    },
                    {
                        term: 'Anticline',
                        pronunciation: '(AN-tih-kline)',
                        definition: 'An upward-curving (convex) fold in rock layers, often forming ridges in fold mountains.',
                        example: 'Oil and gas often accumulate in the crests of anticlines.',
                        relatedTerms: ['syncline', 'fold', 'arch']
                    },
                    {
                        term: 'Syncline',
                        pronunciation: '(SIN-kline)',
                        definition: 'A downward-curving (concave) fold in rock layers, often forming valleys.',
                        example: 'Rivers often flow along synclines because they form natural valleys.',
                        relatedTerms: ['anticline', 'trough', 'fold']
                    },
                    {
                        term: 'Horst',
                        pronunciation: '(horst)',
                        definition: 'An uplifted block of crust bounded by parallel faults, forming a block mountain.',
                        example: 'The Black Forest in Germany is a classic example of a horst.',
                        relatedTerms: ['graben', 'fault block', 'rift']
                    },
                    {
                        term: 'Graben',
                        pronunciation: '(GRAH-ben)',
                        definition: 'A down-dropped block of crust between parallel faults, forming a rift valley.',
                        example: 'The Rhine Graben lies between the Vosges and Black Forest horsts.',
                        relatedTerms: ['horst', 'rift valley', 'fault']
                    },
                    {
                        term: 'Isostasy',
                        pronunciation: '(eye-SOSS-tah-see)',
                        definition: 'The gravitational equilibrium between the lithosphere and asthenosphere; heavier crust sinks deeper.',
                        example: 'Mountains have deep roots in the mantle due to isostasy.',
                        relatedTerms: ['isostatic adjustment', 'rebound', 'equilibrium']
                    },
                    {
                        term: 'Metamorphism',
                        pronunciation: '(met-ah-MOR-fizm)',
                        definition: 'The transformation of rocks by heat and pressure, common deep within mountain roots.',
                        example: 'Limestone becomes marble through metamorphism in mountain-building zones.',
                        relatedTerms: ['metamorphic rocks', 'recrystallization', 'foliation']
                    },
                    {
                        term: 'Orographic Precipitation',
                        pronunciation: '(or-oh-GRAF-ik)',
                        definition: 'Precipitation caused when moist air is forced upward by mountains, cooling and releasing moisture.',
                        example: 'The Western Ghats receive heavy monsoon rainfall due to orographic lift.',
                        relatedTerms: ['rain shadow', 'windward', 'leeward']
                    },
                    {
                        term: 'Cirque',
                        pronunciation: '(sirk)',
                        definition: 'A bowl-shaped depression carved by glaciers at the head of a valley.',
                        example: 'When three or more cirques erode back-to-back, they form a pyramidal peak (horn).',
                        relatedTerms: ['arête', 'horn', 'glacial erosion']
                    },
                    {
                        term: 'Escarpment',
                        pronunciation: '(es-KARP-ment)',
                        definition: 'A steep cliff or slope separating two relatively level areas of different elevations.',
                        example: 'The Western Ghats form a prominent escarpment along India\'s western coast.',
                        relatedTerms: ['scarp', 'fault scarp', 'bluff']
                    },
                    {
                        term: 'Treeline',
                        pronunciation: '(TREE-line)',
                        definition: 'The altitude above which trees cannot grow due to cold temperatures, wind, and snow.',
                        example: 'The treeline in the Alps is around 2,000-2,500 meters.',
                        relatedTerms: ['timberline', 'alpine zone', 'krummholz']
                    }
                ]
            },

            interactiveElements: {
                quiz: {
                    type: 'quiz',
                    title: '🧠 Test Your Mountain Knowledge',
                    questions: [
                        {
                            question: 'Which type of mountain is the Himalayas?',
                            options: ['Volcanic', 'Fold', 'Block', 'Dome'],
                            correct: 1,
                            explanation: 'The Himalayas are fold mountains formed by the collision of the Indian and Eurasian tectonic plates about 50 million years ago.'
                        },
                        {
                            question: 'What is the primary cause of fold mountain formation?',
                            options: ['Volcanic eruption', 'Erosion', 'Plate collision', 'Meteor impact'],
                            correct: 2,
                            explanation: 'Fold mountains form when tectonic plates collide, compressing and folding the crust upward over millions of years.'
                        },
                        {
                            question: 'Mount Kilimanjaro is an example of what type of mountain?',
                            options: ['Fold', 'Volcanic', 'Block', 'Plateau'],
                            correct: 1,
                            explanation: 'Kilimanjaro is a dormant stratovolcano with three volcanic cones: Kibo, Mawenzi, and Shira.'
                        },
                        {
                            question: 'Which term describes a raised block of crust between faults?',
                            options: ['Graben', 'Syncline', 'Horst', 'Anticline'],
                            correct: 2,
                            explanation: 'A horst is an elevated block of crust between parallel faults. A graben is the opposite—a dropped block forming a valley.'
                        },
                        {
                            question: 'Approximately how much does temperature drop per 1,000m of elevation?',
                            options: ['2°C', '4°C', '6.5°C', '10°C'],
                            correct: 2,
                            explanation: 'The environmental lapse rate is approximately 6.5°C per 1,000 meters of elevation gain.'
                        },
                        {
                            question: 'What percentage of Earth\'s land surface is covered by mountains?',
                            options: ['10%', '24%', '35%', '50%'],
                            correct: 1,
                            explanation: 'Mountains cover approximately 24% (about one-quarter) of Earth\'s land surface.'
                        },
                        {
                            question: 'Which is the longest mountain range on Earth?',
                            options: ['Himalayas', 'Rockies', 'Andes', 'Mid-Atlantic Ridge'],
                            correct: 3,
                            explanation: 'The Mid-Atlantic Ridge (underwater) is longest at 65,000km. On land, the Andes is longest at 7,000km.'
                        },
                        {
                            question: 'What causes orographic precipitation?',
                            options: ['Cold fronts', 'Mountains forcing air upward', 'Ocean currents', 'Deforestation'],
                            correct: 1,
                            explanation: 'Mountains force moist air to rise, cool, and release moisture as precipitation on the windward side.'
                        }
                    ]
                }
            }
        },

        // ================================
        // SECTION 4: EXAMPLES (Names/Links)
        // ================================
        examples: {
            title: 'Famous Mountains to Explore',
            categories: [
                {
                    name: 'Highest Peaks (8,000m+)',
                    icon: '🏔️',
                    items: [
                        { name: 'Mount Everest', link: '/mountains/everest', location: 'Nepal/China', height: '8,849m' },
                        { name: 'K2', link: '/mountains/k2', location: 'Pakistan/China', height: '8,611m' },
                        { name: 'Kangchenjunga', link: '/mountains/kangchenjunga', location: 'Nepal/India', height: '8,586m' },
                        { name: 'Lhotse', link: '/mountains/lhotse', location: 'Nepal/China', height: '8,516m' },
                        { name: 'Makalu', link: '/mountains/makalu', location: 'Nepal/China', height: '8,485m' }
                    ]
                },
                {
                    name: 'Iconic Mountains',
                    icon: '⭐',
                    items: [
                        { name: 'Matterhorn', link: '/mountains/matterhorn', location: 'Switzerland/Italy', height: '4,478m' },
                        { name: 'Mount Fuji', link: '/mountains/fuji', location: 'Japan', height: '3,776m' },
                        { name: 'Denali', link: '/mountains/denali', location: 'Alaska, USA', height: '6,190m' },
                        { name: 'Mont Blanc', link: '/mountains/mont-blanc', location: 'France/Italy', height: '4,808m' },
                        { name: 'Mount Kilimanjaro', link: '/mountains/kilimanjaro', location: 'Tanzania', height: '5,895m' }
                    ]
                },
                {
                    name: 'Continental Highest',
                    icon: '🌍',
                    items: [
                        { name: 'Aconcagua', link: '/mountains/aconcagua', location: 'Argentina', height: '6,961m', note: 'South America' },
                        { name: 'Mount Elbrus', link: '/mountains/elbrus', location: 'Russia', height: '5,642m', note: 'Europe' },
                        { name: 'Vinson Massif', link: '/mountains/vinson', location: 'Antarctica', height: '4,892m', note: 'Antarctica' },
                        { name: 'Puncak Jaya', link: '/mountains/puncak-jaya', location: 'Indonesia', height: '4,884m', note: 'Oceania' },
                        { name: 'Mount Kosciuszko', link: '/mountains/kosciuszko', location: 'Australia', height: '2,228m', note: 'Australia mainland' }
                    ]
                },
                {
                    name: 'Active Volcanoes',
                    icon: '🌋',
                    items: [
                        { name: 'Mount Etna', link: '/mountains/etna', location: 'Italy', height: '3,357m' },
                        { name: 'Mauna Loa', link: '/mountains/mauna-loa', location: 'Hawaii, USA', height: '4,169m' },
                        { name: 'Mount Merapi', link: '/mountains/merapi', location: 'Indonesia', height: '2,968m' },
                        { name: 'Stromboli', link: '/mountains/stromboli', location: 'Italy', height: '926m' },
                        { name: 'Sakurajima', link: '/mountains/sakurajima', location: 'Japan', height: '1,117m' }
                    ]
                }
            ]
        },

        // ================================
        // SECTION 5: UPSC RELEVANCE
        // ================================
        upscRelevance: {
            title: '🎯 UPSC Civil Services Exam Importance',
            introduction: 'Mountains are a crucial topic in the Geography section of UPSC Civil Services Examination. They appear in both Prelims (objective) and Mains (descriptive) papers, particularly in General Studies Paper I which covers Physical Geography.',
            
            topics: [
                'Types of mountains and their formation processes (orogeny)',
                'Major mountain ranges of the world and India',
                'Distribution of Himalayas and its geological significance',
                'Impact of mountains on climate (orographic rainfall, rain shadow)',
                'River systems originating from mountains',
                'Biodiversity hotspots in mountain ecosystems',
                'Glaciers and their role in water resources',
                'Mountain passes and their strategic importance',
                'Earthquakes and volcanic activity in mountain regions',
                'Environmental issues: deforestation, landslides, glacial lake outburst floods (GLOF)',
                'Indigenous communities and mountain livelihoods',
                'Sustainable development in mountain regions',
                'Impact of climate change on mountains and glaciers',
                'International Mountain Day and relevant conventions',
                'Trans-Himalayan region and its geopolitical significance'
            ],
            
            sampleQuestions: [
                {
                    type: 'Prelims',
                    year: '2019',
                    question: 'Consider the following pairs:\n1. Limboo - Sikkim\n2. Karbi - Himachal Pradesh\n3. Dongria Kondh - Odisha\nWhich of the pairs given above are correctly matched?',
                    answer: '(a) 1 and 3 only - Limboo are primarily in Sikkim and Dongria Kondh in Odisha\'s Niyamgiri Hills.'
                },
                {
                    type: 'Prelims',
                    year: '2020',
                    question: 'Which of the following statements about the Himalayan region is/are correct?\n1. The Himalayas are young fold mountains.\n2. They are still rising due to plate tectonics.',
                    answer: 'Both statements are correct. The Himalayas formed 50 million years ago (geologically young) and continue rising approximately 1cm/year.'
                },
                {
                    type: 'Mains',
                    year: '2018',
                    question: 'How do the Himalayas influence Indian monsoons? Discuss with reference to orographic rainfall.',
                    answer: 'Approach: Discuss Himalayan barrier effect, deflection of monsoon winds, orographic lift, distribution of rainfall, rain shadow regions, and role in climate moderation.'
                },
                {
                    type: 'Mains',
                    year: '2021',
                    question: 'Examine the causes and consequences of glacial lake outburst floods (GLOFs) in the Himalayan region.',
                    answer: 'Approach: Define GLOFs, causes (climate change, seismic activity), vulnerable areas, recent incidents (Chamoli 2021), impacts, and mitigation measures.'
                },
                {
                    type: 'Prelims',
                    year: '2017',
                    question: 'In the South Atlantic and South-Eastern Pacific regions, in summer, theichthyofauna are localized along the coast. Give a reason.',
                    answer: 'Related to ocean currents and upwelling—while not directly mountains, understanding marine geography complements orographic knowledge.'
                },
                {
                    type: 'Mains',
                    year: '2019',
                    question: 'What are the environmental implications of mining in Western Ghats? Suggest measures for sustainable development.',
                    answer: 'Approach: Biodiversity value of Western Ghats, mining impacts (deforestation, water pollution), Kasturirangan Committee recommendations, sustainable alternatives.'
                }
            ],
            
            keyConceptsForExam: [
                {
                    concept: 'Himalayan Divisions',
                    importance: 'Very High',
                    details: 'Shiwalik, Lesser Himalaya, Greater Himalaya, Trans-Himalaya - their characteristics, passes, and rivers',
                    examRelevance: 'Frequently asked in both Prelims and Mains; know all major passes and their states'
                },
                {
                    concept: 'Orographic Rainfall',
                    importance: 'Very High',
                    details: 'Mechanism, distribution in India, Western Ghats and Eastern Himalayas, rain shadow zones',
                    examRelevance: 'Core concept for understanding Indian monsoon and regional climates'
                },
                {
                    concept: 'Plate Tectonics',
                    importance: 'High',
                    details: 'Theory of plate tectonics, convergent boundaries, formation of Himalayas, seismic zones',
                    examRelevance: 'Fundamental concept for understanding earthquakes and mountain formation'
                },
                {
                    concept: 'Glacial Features',
                    importance: 'High',
                    details: 'Himalayan glaciers, glacial landforms, source of perennial rivers, climate change impact',
                    examRelevance: 'Important for Mains questions on water resources and climate change'
                },
                {
                    concept: 'Western Ghats Biodiversity',
                    importance: 'Very High',
                    details: 'UNESCO World Heritage Site, endemic species, Gadgil and Kasturirangan reports',
                    examRelevance: 'Environment section frequently covers Western Ghats conservation issues'
                },
                {
                    concept: 'Mountain Passes',
                    importance: 'High',
                    details: 'Strategic passes (Khyber, Bolan, Nathu La, etc.), their locations and significance',
                    examRelevance: 'Prelims factual questions and Mains for strategic/historical significance'
                }
            ],
            
            currentAffairsLinks: [
                {
                    topic: 'Glacial Lake Outburst Flood (GLOF)',
                    event: 'Chamoli disaster, February 2021',
                    relevance: 'Climate change, disaster management, Himalayan ecology'
                },
                {
                    topic: 'Mountain Tourism',
                    event: 'Carrying capacity studies in Himalayan states',
                    relevance: 'Sustainable development, eco-tourism policies'
                },
                {
                    topic: 'Trans-Himalayan Region',
                    event: 'India-China border tensions in Ladakh',
                    relevance: 'Geopolitical significance of mountain passes and borders'
                },
                {
                    topic: 'International Mountain Day',
                    event: 'December 11 - UN observance',
                    relevance: 'Mountain ecosystem conservation, SDGs'
                },
                {
                    topic: 'Himalayan Biodiversity',
                    event: 'Kaziranga-Karbi Anglong corridor',
                    relevance: 'Wildlife conservation, forest management'
                },
                {
                    topic: 'Western Ghats Mining',
                    event: 'Ongoing debates on Goa mining',
                    relevance: 'Environmental clearances, judicial interventions'
                }
            ]
        }
    },

    // ================================
    // IMPORTANCE SECTION (Why Mountains Matter)
    // ================================
    importance: {
        title: 'Why Mountains Matter',
        cards: [
            {
                icon: '💧',
                title: 'Water Towers',
                description: 'Mountains provide freshwater to over 50% of humanity. Major rivers like the Ganges, Indus, Amazon, and Mekong originate in mountains.'
            },
            {
                icon: '🌡️',
                title: 'Climate Regulation',
                description: 'Mountains influence weather patterns, create microclimates, and their glaciers help regulate global temperatures and sea levels.'
            },
            {
                icon: '🦎',
                title: 'Biodiversity Hotspots',
                description: 'Mountain regions contain about 25% of all terrestrial biodiversity, including many endemic species found nowhere else on Earth.'
            },
            {
                icon: '🏠',
                title: 'Human Habitation',
                description: 'Over 1 billion people live in mountain regions. Mountains provide livelihoods through agriculture, tourism, and natural resources.'
            },
            {
                icon: '⚡',
                title: 'Energy Resources',
                description: 'Mountains are sources of hydroelectric power, minerals, and geothermal energy. The Himalayas alone could generate 500,000 MW of hydropower.'
            },
            {
                icon: '🌲',
                title: 'Forest Cover',
                description: 'Mountain forests store vast amounts of carbon, provide timber and non-timber forest products, and prevent soil erosion.'
            },
            {
                icon: '🧘',
                title: 'Cultural Significance',
                description: 'Mountains hold spiritual importance in many cultures. Mount Kailash, Mount Sinai, and Mount Olympus are sacred to billions.'
            },
            {
                icon: '🛡️',
                title: 'Natural Barriers',
                description: 'Mountains serve as natural borders and have shaped human history by creating isolated civilizations and trade routes.'
            }
        ]
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mountainsEducationData;
}
