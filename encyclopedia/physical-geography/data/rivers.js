/**
 * RIVERS DATA MODULE - COMPLETE ENCYCLOPEDIA VERSION
 * Comprehensive educational content about rivers
 * Format: Universal concept data structure (matching mountains.js)
 */

const riversData = {
    meta: {
        id: 'rivers',
        name: 'Rivers',
        icon: '🏞️',
        theme: 'rivers-theme',
        color: '#4A90A4',
        heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
        existingPagesLink: '/encyclopedia/rivers/'
    },

    sections: {
        // ========================
        // SECTION 1: DEFINITION
        // ========================
        definition: {
            title: 'What is a River?',
            
            hero: {
                image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
                tagline: 'Lifelines of civilizations, arteries of Earth'
            },
            
            content: {
                introduction: 'A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake, or another river. Rivers are fundamental to human civilization, providing water for drinking, agriculture, transportation, and energy. They have shaped landscapes over millions of years, carved valleys and canyons, deposited fertile sediments, and created ecosystems teeming with life. From the mighty Amazon discharging 20% of all freshwater entering oceans to the sacred Ganga supporting 500 million people, rivers remain the most vital natural resource for humanity.',

                keyPoints: [
                    {
                        icon: '💧',
                        label: 'Definition',
                        text: 'Natural stream of water flowing in a channel to the sea, lake, or another river',
                        detail: 'Rivers are part of the hydrological cycle, continuously moving water from precipitation on land back to the oceans. They carry approximately 40,000 km³ of water annually to the oceans.'
                    },
                    {
                        icon: '📏',
                        label: 'Parts of a River',
                        text: 'Source (origin) → Upper course → Middle course → Lower course → Mouth (end)',
                        detail: 'Each part has distinct characteristics: steep gradient and V-valleys in upper course, meanders and floodplains in middle course, and deltas or estuaries at the mouth.'
                    },
                    {
                        icon: '🌍',
                        label: 'Global Importance',
                        text: 'Water supply, agriculture, transportation, hydropower, ecosystems, and culture',
                        detail: 'Over 2 billion people depend directly on rivers for drinking water. Rivers irrigate 40% of global cropland, generate 16% of world electricity, and 75% of world population lives within 5 km of a river.'
                    },
                    {
                        icon: '📊',
                        label: 'Measurement',
                        text: 'Measured by length, discharge (volume), and drainage basin area',
                        detail: 'Amazon leads in discharge (209,000 m³/s), Nile in length (6,650 km), Amazon in basin area (7 million km²).'
                    },
                    {
                        icon: '🔄',
                        label: 'Hydrological Cycle',
                        text: 'Rivers are the land-based portion of Earth\'s continuous water cycle',
                        detail: 'Water evaporates from oceans, falls as precipitation, collects into rivers, and returns to oceans. Rivers transport 40,000 km³ of freshwater and 20 billion tonnes of sediment annually.'
                    },
                    {
                        icon: '🏔️',
                        label: 'River Sources',
                        text: 'Glaciers, springs, lakes, rainfall, or confluence of smaller streams',
                        detail: 'Himalayan rivers are glacier-fed (perennial), peninsular Indian rivers are rain-fed (seasonal), and some rivers emerge from underground springs.'
                    },
                    {
                        icon: '🌊',
                        label: 'River Mouth Types',
                        text: 'Delta (triangular land buildup) or Estuary (funnel-shaped inlet)',
                        detail: 'Deltas form when sediment deposition exceeds tidal/wave erosion (Ganga-Brahmaputra, Nile). Estuaries form when tides dominate (Thames, Narmada).'
                    },
                    {
                        icon: '🏛️',
                        label: 'Civilizational Significance',
                        text: 'All ancient civilizations arose along rivers: Nile, Tigris-Euphrates, Indus, Huang He',
                        detail: 'Rivers provided water, fertile soil, transportation, and natural defenses. India\'s Ganga-Yamuna doab has been civilization\'s heartland for 5,000 years.'
                    }
                ],

                comparison: {
                    title: 'River vs Stream vs Creek vs Canal',
                    features: [
                        {
                            feature: 'Size/Width',
                            river: 'Large (>10m wide)',
                            stream: 'Medium (2-10m)',
                            creek: 'Small (<2m)',
                            canal: 'Variable (human-designed)'
                        },
                        {
                            feature: 'Flow',
                            river: 'Continuous, powerful',
                            stream: 'Moderate flow',
                            creek: 'May dry seasonally',
                            canal: 'Controlled flow'
                        },
                        {
                            feature: 'Depth',
                            river: 'Deep (navigable)',
                            stream: 'Shallow to moderate',
                            creek: 'Very shallow',
                            canal: 'Uniform (designed)'
                        },
                        {
                            feature: 'Origin',
                            river: 'Natural',
                            stream: 'Natural',
                            creek: 'Natural',
                            canal: 'Artificial (human-made)'
                        },
                        {
                            feature: 'Navigation',
                            river: 'Often navigable',
                            stream: 'Rarely navigable',
                            creek: 'Not navigable',
                            canal: 'Designed for vessels'
                        },
                        {
                            feature: 'Example',
                            river: 'Ganga, Amazon',
                            stream: 'Mountain streams',
                            creek: 'Village channels',
                            canal: 'Suez, Panama'
                        }
                    ]
                },

                diagram: {
                    type: 'svg',
                    path: 'assets/river-anatomy.svg',
                    alt: 'Diagram showing river anatomy from source to mouth'
                },

                funFacts: [
                    '🌊 Amazon River discharges 209,000 m³/s - 20% of ALL freshwater entering oceans!',
                    '📏 Nile is the longest river at 6,650 km - longer than London to New York distance',
                    '🇮🇳 Ganga basin supports 500 million people - most populated river basin in world',
                    '🏔️ Rivers erode and transport 20 billion tonnes of sediment to oceans yearly',
                    '⚡ Rivers provide 16% of world electricity through 60,000+ hydropower dams',
                    '🐟 Amazon River has 3,000+ fish species - more than Atlantic Ocean!',
                    '🌍 75% of world population lives within 5 km of a river or lake',
                    '💧 Only 0.0001% of Earth\'s water is in rivers at any time',
                    '🏛️ Every ancient civilization arose on river banks: Nile, Indus, Tigris-Euphrates, Huang He',
                    '🐊 Ganga River dolphin (Susu) is India\'s national aquatic animal - only 2,000 remain',
                    '🔄 Colorado River no longer reaches the sea - 90% diverted for human use',
                    '🌈 Caño Cristales (Colombia) is "River of Five Colors" - unique aquatic plants create rainbow effect'
                ]
            }
        },

        // ========================
        // SECTION 2: TYPES
        // ========================
        types: {
            title: 'Types of Rivers',
            
            hero: {
                image: 'https://images.unsplash.com/photo-1468278115921-dbe42e0a19c5?w=1920&q=80',
                tagline: 'Classified by origin, flow pattern, and geological relationship'
            },
            
            renderAs: 'mindmap',

            branches: [
                {
                    id: 'perennial',
                    name: 'Perennial Rivers',
                    icon: '💧',
                    color: '#2980b9',
                    
                    definition: 'Perennial rivers flow throughout the year, maintaining continuous discharge regardless of season. They are fed by multiple sources including glacial meltwater, year-round rainfall, groundwater springs, or large lakes. These rivers are most reliable for water supply, irrigation, navigation, and hydropower generation.',

                    formation: {
                        title: 'Why Perennial Rivers Flow Year-Round',
                        steps: [
                            { step: 1, text: 'Primary source: Glacial melt provides water in summer when rainfall is low', icon: '🏔️' },
                            { step: 2, text: 'Rainfall contribution: Monsoon and year-round precipitation adds seasonal volume', icon: '🌧️' },
                            { step: 3, text: 'Large catchment area: Extensive drainage basin collects water from vast region', icon: '🗺️' },
                            { step: 4, text: 'Groundwater input: Underground aquifers continuously feed the river (baseflow)', icon: '💧' },
                            { step: 5, text: 'Multiple tributaries: Numerous streams from different sources ensure constant supply', icon: '🌊' }
                        ]
                    },

                    characteristics: [
                        'Flow throughout all seasons without interruption',
                        'Fed by multiple water sources (glacier, rain, groundwater)',
                        'Support permanent human settlements and agriculture',
                        'Critical for irrigation, especially in dry seasons',
                        'Navigable for transportation year-round',
                        'Suitable for hydroelectric power generation',
                        'Support rich aquatic ecosystems',
                        'Generally originate in high mountains with snow/glaciers'
                    ],

                    examples: [
                        { name: 'Ganga', location: 'India', link: '/encyclopedia/rivers/ganga', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80' },
                        { name: 'Amazon', location: 'South America', link: '/encyclopedia/rivers/amazon', image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80' },
                        { name: 'Nile', location: 'Africa', link: '/encyclopedia/rivers/nile', image: 'https://images.unsplash.com/photo-1568322503652-9e5a9e95ddb2?w=800&q=80' },
                        { name: 'Brahmaputra', location: 'Asia', link: '/encyclopedia/rivers/brahmaputra', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Indus', location: 'Asia', link: '/encyclopedia/rivers/indus', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Mississippi', location: 'North America', link: '/encyclopedia/rivers/mississippi', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' }
                    ]
                },

                {
                    id: 'seasonal',
                    name: 'Seasonal/Intermittent Rivers',
                    icon: '🌧️',
                    color: '#3498db',

                    definition: 'Seasonal rivers flow only during specific seasons (usually monsoon/rainy season) and dry up completely or reduce to a trickle during dry months. They depend primarily on rainfall with no glacier or significant groundwater contribution. Found predominantly in peninsular India and semi-arid regions.',

                    formation: {
                        title: 'Why Seasonal Rivers Are Intermittent',
                        steps: [
                            { step: 1, text: 'Dependent solely on monsoon/seasonal rainfall for water', icon: '🌧️' },
                            { step: 2, text: 'No glacial source to provide meltwater in dry season', icon: '❌' },
                            { step: 3, text: 'Limited or no groundwater contribution (low water table)', icon: '💧' },
                            { step: 4, text: 'High evaporation rates in hot, dry season', icon: '☀️' },
                            { step: 5, text: 'Smaller catchment areas collect less water', icon: '🗺️' }
                        ]
                    },

                    characteristics: [
                        'Flow only during rainy season (monsoon in India)',
                        'May become completely dry riverbeds in summer',
                        'Found primarily in semi-arid and peninsular regions',
                        'Important for seasonal/kharif agriculture',
                        'Groundwater recharge during monsoon',
                        'Flash floods during heavy rainfall',
                        'Rain-fed with no glacial source',
                        'Shorter length compared to perennial rivers'
                    ],

                    examples: [
                        { name: 'Luni', location: 'Rajasthan, India', link: '/encyclopedia/rivers/luni', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
                        { name: 'Sabarmati', location: 'Gujarat, India', link: '/encyclopedia/rivers/sabarmati', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Mahi', location: 'Central India', link: '/encyclopedia/rivers/mahi', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Penner', location: 'South India', link: '/encyclopedia/rivers/penner', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Ghaggar-Hakra', location: 'North India', link: '/encyclopedia/rivers/ghaggar', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' }
                    ]
                },

                {
                    id: 'ephemeral',
                    name: 'Ephemeral Rivers',
                    icon: '🏜️',
                    color: '#e67e22',

                    definition: 'Ephemeral rivers flow only briefly after rainfall events and remain dry most of the time. Unlike seasonal rivers that flow for months, ephemeral rivers may flow for only hours or days following storms. They are characteristic of arid and desert regions.',

                    formation: {
                        title: 'Why Ephemeral Rivers Are Short-Lived',
                        steps: [
                            { step: 1, text: 'Exist only in arid/semi-arid regions with very low rainfall', icon: '🏜️' },
                            { step: 2, text: 'Flow triggered by rare, intense rainfall events', icon: '⛈️' },
                            { step: 3, text: 'Extremely high evaporation rates (>2000mm/year)', icon: '☀️' },
                            { step: 4, text: 'Water rapidly infiltrates porous desert soil', icon: '⬇️' },
                            { step: 5, text: 'No groundwater table to sustain baseflow', icon: '❌' }
                        ]
                    },

                    characteristics: [
                        'Flow only hours to days after rainfall',
                        'Dry channels (wadis/arroyos) most of year',
                        'Found in true deserts and arid regions',
                        'Flash floods common - dangerous',
                        'Important for groundwater recharge',
                        'Often end in playas (dry lakes) or disappear',
                        'Critical water source for desert wildlife'
                    ],

                    examples: [
                        { name: 'Wadis (Arabian Desert)', location: 'Middle East', link: '/encyclopedia/rivers/wadis', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
                        { name: 'Arroyos', location: 'Southwest USA', link: '/encyclopedia/rivers/arroyos', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
                        { name: 'Todd River', location: 'Australia', link: '/encyclopedia/rivers/todd', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' }
                    ],

                    terminology: {
                        'Wadi': 'Arabic term for ephemeral river (Middle East, North Africa)',
                        'Arroyo': 'Spanish term used in Americas',
                        'Wash': 'Term used in southwestern USA',
                        'Nullah': 'Term used in South Asia'
                    }
                },

                {
                    id: 'antecedent',
                    name: 'Antecedent Rivers',
                    icon: '🏔️',
                    color: '#8e44ad',

                    definition: 'Antecedent rivers existed BEFORE the mountains they now flow through. As mountains slowly rose due to tectonic uplift, these rivers maintained their original course by eroding downward faster than the land uplifted. These rivers cut spectacular deep gorges through mountain ranges.',

                    formation: {
                        title: 'How Antecedent Rivers Form',
                        steps: [
                            { step: 1, text: 'River establishes course on relatively flat land', icon: '🏞️' },
                            { step: 2, text: 'Tectonic forces begin uplifting land across river\'s path', icon: '⬆️' },
                            { step: 3, text: 'Uplift occurs SLOWLY - typically 5-10 mm/year', icon: '📈' },
                            { step: 4, text: 'River\'s erosive power EXCEEDS the rate of uplift', icon: '✂️' },
                            { step: 5, text: 'River cuts downward through rising rock', icon: '⬇️' },
                            { step: 6, text: 'Over millions of years, mountains rise around river\'s gorge', icon: '🏔️' }
                        ]
                    },

                    characteristics: [
                        'Older than the mountains they cut through',
                        'Cut deep transverse gorges across mountain ranges',
                        'Maintain original pre-mountain course',
                        'Create some of world\'s deepest canyons',
                        'Flow perpendicular to mountain trend',
                        'Have headwaters BEYOND the mountain range',
                        'Typically found in young, actively rising mountains'
                    ],

                    examples: [
                        { name: 'Indus', location: 'Himalayas', gorgeDepth: '5,200m', link: '/encyclopedia/rivers/indus', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Brahmaputra', location: 'Eastern Himalayas', gorgeDepth: '5,000m+', link: '/encyclopedia/rivers/brahmaputra', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Sutlej', location: 'Himalayas', gorgeDepth: '4,500m+', link: '/encyclopedia/rivers/sutlej', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Kali Gandaki', location: 'Nepal', gorgeDepth: '6,000m (DEEPEST)', link: '/encyclopedia/rivers/kali-gandaki', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Colorado', location: 'USA', gorgeDepth: '1,800m (Grand Canyon)', link: '/encyclopedia/rivers/colorado', image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&q=80' }
                    ]
                },

                {
                    id: 'superimposed',
                    name: 'Superimposed Rivers',
                    icon: '📚',
                    color: '#9b59b6',

                    definition: 'Superimposed rivers originally developed their courses on a cover of younger rocks, then eroded down through that cover to older rocks with different structure beneath. The river maintains its course regardless of underlying rock structure.',

                    formation: {
                        title: 'How Superimposed Rivers Form',
                        steps: [
                            { step: 1, text: 'Younger sedimentary rocks deposited over older rocks', icon: '📚' },
                            { step: 2, text: 'River develops course on upper, younger rock surface', icon: '🏞️' },
                            { step: 3, text: 'River erodes downward through younger cover rocks', icon: '⬇️' },
                            { step: 4, text: 'River encounters older rocks with different structure', icon: '🪨' },
                            { step: 5, text: 'River continues cutting through, ignoring structure', icon: '✂️' }
                        ]
                    },

                    characteristics: [
                        'River pattern doesn\'t match underlying geological structure',
                        'Cuts across fold axes and fault lines',
                        'Developed on younger cover rocks now eroded away',
                        'Creates discordant drainage pattern',
                        'Common in areas with unconformities'
                    ],

                    examples: [
                        { name: 'Damodar', location: 'Jharkhand, India', link: '/encyclopedia/rivers/damodar', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Subarnarekha', location: 'Eastern India', link: '/encyclopedia/rivers/subarnarekha', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Chambal (partial)', location: 'Central India', link: '/encyclopedia/rivers/chambal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' }
                    ],

                    vsAntecedent: {
                        title: 'Superimposed vs Antecedent',
                        comparison: [
                            { aspect: 'Origin', antecedent: 'River OLDER than mountain', superimposed: 'River formed on YOUNGER cover rocks' },
                            { aspect: 'Process', antecedent: 'Mountain rose around existing river', superimposed: 'River cut down through rock layers' },
                            { aspect: 'Example', antecedent: 'Indus cutting through Himalayas', superimposed: 'Damodar cutting across Chotanagpur' }
                        ]
                    }
                },

                {
                    id: 'consequent',
                    name: 'Consequent Rivers',
                    icon: '⬇️',
                    color: '#27ae60',

                    definition: 'Consequent rivers flow in the direction of the original slope of the land. Their course is a direct "consequence" of the land\'s original slope. They are the most common type of rivers.',

                    formation: {
                        title: 'How Consequent Rivers Form',
                        steps: [
                            { step: 1, text: 'New land surface created with initial slope', icon: '🏔️' },
                            { step: 2, text: 'Precipitation falls on newly exposed surface', icon: '🌧️' },
                            { step: 3, text: 'Water flows downhill following gravity', icon: '⬇️' },
                            { step: 4, text: 'Streams develop along natural gradient', icon: '📐' },
                            { step: 5, text: 'Rivers establish courses as consequence of original tilt', icon: '🏞️' }
                        ]
                    },

                    characteristics: [
                        'Flow direction determined by original land slope',
                        'Most common type of river worldwide',
                        'Typically parallel to each other',
                        'Flow down dip slope of land',
                        'Radial pattern on volcanic cones',
                        'First rivers to form on new land surfaces'
                    ],

                    examples: [
                        { name: 'East-flowing Peninsular Rivers', rivers: 'Mahanadi, Godavari, Krishna, Cauvery', link: '/encyclopedia/rivers/peninsular-east', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'West-flowing Rivers', rivers: 'Short Western Ghat streams', link: '/encyclopedia/rivers/peninsular-west', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Radial Volcanic Streams', example: 'Rivers from Mt. Fuji, Kilimanjaro', link: '/encyclopedia/rivers/volcanic-radial', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' }
                    ]
                },

                {
                    id: 'subsequent',
                    name: 'Subsequent Rivers',
                    icon: '↔️',
                    color: '#f39c12',

                    definition: 'Subsequent rivers are tributaries that develop AFTER the main consequent rivers, along zones of structural weakness such as soft rock outcrops, fault lines, or joints. They typically flow perpendicular to the consequent rivers.',

                    formation: {
                        title: 'How Subsequent Rivers Form',
                        steps: [
                            { step: 1, text: 'Consequent rivers establish initial drainage', icon: '⬇️' },
                            { step: 2, text: 'Erosion exposes different rock types', icon: '🪨' },
                            { step: 3, text: 'New streams develop along soft rock outcrops', icon: '💧' },
                            { step: 4, text: 'Tributaries flow along strike of soft rock beds', icon: '↔️' },
                            { step: 5, text: 'Subsequent rivers grow by headward erosion', icon: '⬅️' }
                        ]
                    },

                    characteristics: [
                        'Develop after main (consequent) rivers',
                        'Follow zones of geological weakness',
                        'Flow along strike of tilted rock layers',
                        'Usually perpendicular to consequent rivers',
                        'Form trellis drainage pattern',
                        'Common in folded/faulted terrain'
                    ],

                    examples: [
                        { name: 'Chambal', location: 'Tributary of Yamuna', link: '/encyclopedia/rivers/chambal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Ken', location: 'Tributary of Yamuna', link: '/encyclopedia/rivers/ken', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Betwa', location: 'Tributary of Yamuna', link: '/encyclopedia/rivers/betwa', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
                        { name: 'Sind', location: 'Tributary of Yamuna', link: '/encyclopedia/rivers/sind', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' }
                    ]
                },

                {
                    id: 'obsequent',
                    name: 'Obsequent Rivers',
                    icon: '⬆️',
                    color: '#e74c3c',

                    definition: 'Obsequent rivers are small tributaries that flow in the OPPOSITE direction to the main consequent rivers. They flow up the dip slope (against the general tilt) of the land, typically on the scarp face of ridges.',

                    characteristics: [
                        'Flow opposite to consequent rivers',
                        'Develop on scarp slopes of ridges',
                        'Small, short tributaries',
                        'Steep gradient, high energy',
                        'Join subsequent rivers'
                    ],

                    example: 'Short streams on scarp face of Western Ghats flowing west'
                },

                {
                    id: 'resequent',
                    name: 'Resequent Rivers',
                    icon: '🔄',
                    color: '#1abc9c',

                    definition: 'Resequent rivers flow in the SAME direction as the original consequent rivers but developed later as tributaries of subsequent rivers. They flow down the dip slope but at a lower level.',

                    characteristics: [
                        'Flow same direction as consequent rivers',
                        'Develop after subsequent rivers',
                        'Flow down dip slope of lower surface',
                        'Tributaries of subsequent rivers'
                    ]
                },

                {
                    id: 'insequent',
                    name: 'Insequent Rivers',
                    icon: '❓',
                    color: '#95a5a6',

                    definition: 'Insequent rivers have no apparent relationship to the underlying rock structure. They develop irregularly on horizontal rock layers or uniform surfaces where no structural guidance exists.',

                    characteristics: [
                        'No relationship to rock structure',
                        'Irregular, unpredictable courses',
                        'Common on flat horizontal rocks',
                        'Form dendritic (tree-like) drainage',
                        'Random tributary angles'
                    ],

                    example: 'Rivers on flat-lying sediments of Indo-Gangetic Plain'
                }
            ],

            comparisonTable: {
                title: 'Quick Comparison of River Types',
                headers: ['Type', 'Basis', 'Characteristic', 'Example'],
                rows: [
                    ['Perennial 💧', 'Flow duration', 'Flows all year', 'Ganga, Amazon, Nile'],
                    ['Seasonal 🌧️', 'Flow duration', 'Rainy season only', 'Luni, Sabarmati'],
                    ['Ephemeral 🏜️', 'Flow duration', 'Hours/days after rain', 'Wadis, Arroyos'],
                    ['Antecedent 🏔️', 'Age vs terrain', 'Older than mountains', 'Indus, Brahmaputra'],
                    ['Superimposed 📚', 'Rock relationship', 'Ignores rock structure', 'Damodar'],
                    ['Consequent ⬇️', 'Slope direction', 'Follows original slope', 'Godavari, Krishna'],
                    ['Subsequent ↔️', 'Development time', 'Along weak rock zones', 'Chambal, Ken'],
                    ['Obsequent ⬆️', 'Flow direction', 'Opposite to consequent', 'Scarp streams'],
                    ['Insequent ❓', 'Structure relation', 'No structural control', 'Gangetic tributaries']
                ]
            },

            drainagePatterns: {
                title: 'Drainage Patterns',
                description: 'The arrangement of rivers and tributaries in a drainage basin',
                patterns: [
                    {
                        name: 'Dendritic',
                        icon: '🌳',
                        description: 'Tree-like branching pattern',
                        formation: 'Uniform rock type, gentle slope',
                        example: 'Ganga tributaries, most rivers on sedimentary plains'
                    },
                    {
                        name: 'Trellis',
                        icon: '🪟',
                        description: 'Rectangular pattern',
                        formation: 'Folded mountains, alternating hard/soft rock',
                        example: 'Singhbhum (Jharkhand), Appalachian rivers'
                    },
                    {
                        name: 'Radial',
                        icon: '☀️',
                        description: 'Rivers flow outward from central high point',
                        formation: 'Volcanic cones, domes, isolated peaks',
                        example: 'Rivers from Amarkantak (Narmada, Son, Mahanadi origins)'
                    },
                    {
                        name: 'Centripetal',
                        icon: '🎯',
                        description: 'Rivers flow inward toward central basin',
                        formation: 'Enclosed basins, craters',
                        example: 'Loktak Lake basin (Manipur)'
                    },
                    {
                        name: 'Rectangular',
                        icon: '⬛',
                        description: 'Right-angle bends following joints/faults',
                        formation: 'Heavily jointed or faulted rocks',
                        example: 'Colorado Plateau rivers'
                    },
                    {
                        name: 'Parallel',
                        icon: '≡',
                        description: 'Rivers flow parallel down uniform slope',
                        formation: 'Uniform steep slopes, coastal plains',
                        example: 'West-flowing Western Ghat rivers'
                    },
                    {
                        name: 'Annular',
                        icon: '⭕',
                        description: 'Circular pattern following concentric outcrops',
                        formation: 'Eroded domes, structural basins',
                        example: 'Black Hills (USA)'
                    },
                    {
                        name: 'Deranged',
                        icon: '🔀',
                        description: 'Chaotic pattern with lakes and swamps',
                        formation: 'Recently glaciated areas',
                        example: 'Canadian Shield, Finnish Lakeland'
                    }
                ]
            }
        },

        // ========================
        // SECTION 3: FORMATION
        // ========================
        formation: {
            title: 'How Rivers Form & Evolve',
            
            hero: {
                image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80',
                tagline: 'From source to sea - the journey of water through time'
            },
            
            renderAs: 'timeline',

            introduction: 'Rivers are dynamic geological agents that shape landscapes over millions of years through erosion, transportation, and deposition. A river\'s character changes dramatically from its steep, turbulent source to its sluggish, meandering mouth. Understanding these stages reveals how rivers carve valleys, build floodplains, create deltas, and continuously modify Earth\'s surface.',

            stages: [
                {
                    stage: 1,
                    title: 'Source (Origin)',
                    timeframe: 'The Beginning',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
                    
                    description: [
                        'River begins at highest point - the source or headwaters',
                        'Sources: glaciers, springs, lakes, rainfall runoff, or confluence of streams',
                        'Himalayan rivers (Ganga, Brahmaputra) originate from glaciers at 4,000-7,000m',
                        'Peninsular rivers originate from Western Ghats rainfall catchments',
                        'Water collects in rills → streams → river',
                        'Steepest gradient of entire course',
                        'Maximum erosive energy potential'
                    ],

                    landforms: ['Rills', 'Gullies', 'First-order streams'],
                    
                    geologicalProcess: 'Collection of water at highest elevation; potential energy converted to kinetic energy'
                },

                {
                    stage: 2,
                    title: 'Upper Course (Youth Stage)',
                    timeframe: 'Mountains/Hills',
                    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
                    
                    description: [
                        'River descends rapidly through mountainous terrain',
                        'Steep gradient: 10-50 m/km or more',
                        'Vertical (downcutting) erosion dominates',
                        'Creates V-shaped valleys with steep sides',
                        'Interlocking spurs form around resistant rock',
                        'Waterfalls occur where river crosses hard over soft rock',
                        'Rapids form on exposed bedrock',
                        'Narrow, deep channel (10-50m wide)',
                        'Potholes from swirling pebbles',
                        'River load: large boulders and cobbles'
                    ],

                    landforms: [
                        { name: 'V-shaped Valley', formation: 'Vertical erosion + weathering of sides' },
                        { name: 'Interlocking Spurs', formation: 'River winds between resistant ridges' },
                        { name: 'Waterfall', formation: 'Hard rock over soft rock; soft erodes faster' },
                        { name: 'Plunge Pool', formation: 'Erosion at waterfall base' },
                        { name: 'Gorge', formation: 'Waterfall retreat leaves deep gorge' },
                        { name: 'Rapids', formation: 'Exposed bedrock creates turbulence' },
                        { name: 'Pothole', formation: 'Circular holes drilled by swirling pebbles' }
                    ],

                    erosionTypes: [
                        { name: 'Hydraulic Action', description: 'Force of water pressure breaks rock' },
                        { name: 'Abrasion (Corrasion)', description: 'Sediment scrapes channel bed' },
                        { name: 'Attrition', description: 'Particles collide and break smaller' },
                        { name: 'Solution (Corrosion)', description: 'Chemical dissolution of soluble rocks' }
                    ],

                    geologicalProcess: 'Vertical erosion >> Lateral erosion; Deep narrow valley creation'
                },

                {
                    stage: 3,
                    title: 'Middle Course (Mature Stage)',
                    timeframe: 'Plains Begin',
                    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
                    
                    description: [
                        'River enters gentler terrain - foothills and plains',
                        'Gradient decreases: 1-10 m/km',
                        'Lateral (sideways) erosion increases, widening valley',
                        'Meanders (S-curves) develop',
                        'Channel widens significantly (50-200m+)',
                        'Floodplain forms on valley floor',
                        'Balance between erosion and deposition',
                        'River load: sand and gravel',
                        'Major tributaries join, increasing discharge',
                        'Point bars on inside of bends',
                        'River cliffs on outside of bends'
                    ],

                    landforms: [
                        { name: 'Meander', formation: 'River swings side to side due to erosion/deposition imbalance' },
                        { name: 'Floodplain', formation: 'Flat land built from flood deposits' },
                        { name: 'River Cliff (Cut Bank)', formation: 'Erosion on outside of meander' },
                        { name: 'Point Bar', formation: 'Deposition on inside of meander' },
                        { name: 'Alluvial Fan', formation: 'Fan deposit where river exits mountains' },
                        { name: 'River Terrace', formation: 'Old floodplain elevated after river cuts deeper' }
                    ],

                    geologicalProcess: 'Lateral erosion = Vertical erosion; Valley widening; Floodplain development'
                },

                {
                    stage: 4,
                    title: 'Lower Course (Old Stage)',
                    timeframe: 'Approaching Sea',
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
                    
                    description: [
                        'River crosses flat, low-lying plains near sea level',
                        'Minimal gradient: <1 m/km',
                        'Very wide channel (100m to several km)',
                        'Slow, sluggish flow despite huge volume',
                        'Deposition dominates over erosion',
                        'Extensive floodplains (sometimes 100+ km wide)',
                        'Highly sinuous meanders',
                        'Oxbow lakes form from cut-off meanders',
                        'Natural levees along channel banks',
                        'River may divide into distributaries',
                        'River load: fine silt and clay',
                        'Floods deposit fertile alluvium'
                    ],

                    landforms: [
                        { name: 'Oxbow Lake', formation: 'Meander cut off by flooding or breakthrough' },
                        { name: 'Natural Levee', formation: 'Raised banks from repeated flood deposits' },
                        { name: 'Braided Channel', formation: 'River splits around islands (excess sediment)' },
                        { name: 'Yazoo Stream', formation: 'Tributary flows parallel behind levee' },
                        { name: 'Backswamp', formation: 'Marshy area between levee and valley wall' }
                    ],

                    geologicalProcess: 'Deposition >> Erosion; Floodplain building; Aggradation'
                },

                {
                    stage: 5,
                    title: 'Mouth (Delta/Estuary)',
                    timeframe: 'Meeting the Sea',
                    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
                    
                    description: [
                        'River reaches end: ocean, sea, or lake',
                        'Two main mouth types: DELTA or ESTUARY',
                        'Nearly zero gradient at sea level',
                        'Sediment-laden water meets saltwater',
                        'Flocculation: clay clumps in salt water',
                        'Maximum deposition creates new land (delta)',
                        'Or tides dominate, creating estuary',
                        'River divides into distributaries in delta',
                        'Brackish water mixing zone',
                        'Rich ecosystems: mangroves, fisheries'
                    ],

                    deltaVsEstuary: {
                        delta: {
                            definition: 'Triangular landform at river mouth from sediment deposition',
                            formation: 'Sediment supply > wave/tidal removal',
                            types: [
                                { type: 'Arcuate (Fan-shaped)', example: 'Nile, Ganga-Brahmaputra' },
                                { type: 'Bird\'s Foot', example: 'Mississippi' },
                                { type: 'Cuspate (Pointed)', example: 'Tiber (Italy)' }
                            ],
                            examples: ['Sundarbans (100,000 km²)', 'Nile Delta', 'Mekong Delta']
                        },
                        estuary: {
                            definition: 'Funnel-shaped inlet where river mixes with seawater',
                            formation: 'Tidal/wave energy > sediment supply',
                            examples: ['Thames', 'Narmada', 'Amazon (partial)']
                        }
                    },

                    geologicalProcess: 'Maximum deposition; Delta progradation or estuary formation'
                }
            ],

            terminology: {
                title: '📖 Essential River Terms',
                terms: [
                    {
                        term: 'Drainage Basin',
                        pronunciation: '(DRAY-nij BAY-sin)',
                        definition: 'Total area of land drained by a river and all its tributaries',
                        example: 'Ganga basin: 1,086,000 km² (26% of India); Amazon basin: 7,000,000 km²',
                        relatedTerms: ['Watershed', 'Catchment Area']
                    },
                    {
                        term: 'Watershed (Water Divide)',
                        pronunciation: '(WAW-ter-shed)',
                        definition: 'Ridge or high ground separating two adjacent drainage basins',
                        example: 'Western Ghats separate east-flowing and west-flowing rivers',
                        relatedTerms: ['Divide', 'Drainage Divide']
                    },
                    {
                        term: 'Tributary',
                        pronunciation: '(TRIB-yoo-ter-ee)',
                        definition: 'Smaller river that flows into a larger river',
                        example: 'Yamuna is a tributary of Ganga',
                        relatedTerms: ['Affluent', 'Feeder Stream']
                    },
                    {
                        term: 'Distributary',
                        pronunciation: '(dis-TRIB-yoo-ter-ee)',
                        definition: 'Branch of river flowing away from main channel (opposite of tributary)',
                        example: 'Hooghly is a distributary of Ganga in delta',
                        relatedTerms: ['Effluent', 'Delta Channel']
                    },
                    {
                        term: 'Confluence',
                        pronunciation: '(KON-floo-ens)',
                        definition: 'Point where two rivers meet and join',
                        example: 'Prayagraj: confluence of Ganga and Yamuna (Triveni Sangam)',
                        relatedTerms: ['Junction', 'Sangam']
                    },
                    {
                        term: 'Meander',
                        pronunciation: '(mee-AN-der)',
                        definition: 'Winding curve or S-bend in river course',
                        example: 'Mississippi River has extensive meanders',
                        relatedTerms: ['Oxbow', 'Loop', 'Sinuosity']
                    },
                    {
                        term: 'Oxbow Lake',
                        pronunciation: '(OKS-boh layk)',
                        definition: 'Curved lake formed when meander is cut off from main channel',
                        example: 'Kanwar Lake (Bihar) - Asia\'s largest oxbow lake',
                        relatedTerms: ['Cut-off', 'Billabong']
                    },
                    {
                        term: 'Delta',
                        pronunciation: '(DEL-tah)',
                        definition: 'Triangular landform at river mouth from sediment deposition',
                        example: 'Sundarbans - world\'s largest delta (100,000 km²)',
                        relatedTerms: ['Distributary', 'Delta Plain']
                    },
                    {
                        term: 'Estuary',
                        pronunciation: '(ES-choo-er-ee)',
                        definition: 'Semi-enclosed coastal inlet where river meets seawater',
                        example: 'Narmada Estuary at Gulf of Khambhat',
                        relatedTerms: ['Tidal Inlet', 'Brackish']
                    },
                    {
                        term: 'Floodplain',
                        pronunciation: '(FLUD-playn)',
                        definition: 'Flat area alongside river flooded periodically',
                        example: 'Indo-Gangetic Plain - one of world\'s largest floodplains',
                        relatedTerms: ['Alluvial Plain', 'Valley Floor']
                    },
                    {
                        term: 'Alluvium',
                        pronunciation: '(uh-LOO-vee-um)',
                        definition: 'Sediment deposited by flowing water',
                        example: 'Indo-Gangetic alluvium up to 3,000m deep',
                        relatedTerms: ['Sediment', 'Fluvial Deposit']
                    },
                    {
                        term: 'Levee',
                        pronunciation: '(LEV-ee)',
                        definition: 'Raised bank along river from flood deposits',
                        example: 'Mississippi levees 5-6m high',
                        relatedTerms: ['Embankment', 'Natural Dyke']
                    },
                    {
                        term: 'Discharge',
                        pronunciation: '(DIS-charj)',
                        definition: 'Volume of water flowing past a point per second (m³/s)',
                        example: 'Amazon: 209,000 m³/s; Ganga: ~12,000 m³/s',
                        relatedTerms: ['Flow Rate', 'Streamflow']
                    },
                    {
                        term: 'Gradient',
                        pronunciation: '(GRAY-dee-ent)',
                        definition: 'Slope of river - vertical drop per horizontal distance',
                        example: 'Upper Ganga: ~20 m/km; Lower Ganga: <0.1 m/km',
                        relatedTerms: ['Slope', 'Stream Gradient']
                    },
                    {
                        term: 'Doab',
                        pronunciation: '(DOH-ab)',
                        definition: 'Land between two converging rivers (Persian: two waters)',
                        example: 'Ganga-Yamuna Doab - one of India\'s most fertile regions',
                        relatedTerms: ['Interfluve', 'Mesopotamia']
                    },
                    {
                        term: 'River Capture (Piracy)',
                        pronunciation: '(RIV-er KAP-chur)',
                        definition: 'One river erodes headward and captures another river\'s flow',
                        example: 'Possible ancient Yamuna capture by Ganga',
                        relatedTerms: ['Stream Piracy', 'Headward Erosion']
                    }
                ]
            },

            interactiveElements: {
                quiz: {
                    type: 'quiz',
                    title: '🧠 Test Your Knowledge: Rivers',
                    questions: [
                        {
                            question: 'What type of erosion dominates in the upper course of a river?',
                            options: ['Lateral erosion', 'Vertical erosion', 'Chemical erosion', 'No erosion'],
                            correct: 1,
                            explanation: 'In the steep upper course, vertical (downward) erosion dominates, creating V-shaped valleys.'
                        },
                        {
                            question: 'What landform is created when a meander is cut off?',
                            options: ['Delta', 'Waterfall', 'Oxbow lake', 'Gorge'],
                            correct: 2,
                            explanation: 'When a meander neck becomes too narrow, the river breaks through, leaving the old loop as an oxbow lake.'
                        },
                        {
                            question: 'Why do deltas form at some river mouths but not others?',
                            options: ['All rivers form deltas', 'Depends on length', 'Sediment supply vs wave/tidal removal', 'Only tropical rivers'],
                            correct: 2,
                            explanation: 'Deltas form when sediment deposited exceeds removal by waves/tides. Where tides are stronger, estuaries form instead.'
                        },
                        {
                            question: 'What is a distributary?',
                            options: ['River flowing into another river', 'Channel branching off main river', 'Type of waterfall', 'Underground river'],
                            correct: 1,
                            explanation: 'Distributaries branch off from the main river, typically in a delta. They\'re opposite of tributaries.'
                        },
                        {
                            question: 'What is an antecedent river?',
                            options: ['River that dries up seasonally', 'River older than mountains it cuts through', 'River formed by glaciers', 'River flowing underground'],
                            correct: 1,
                            explanation: 'Antecedent rivers existed before the mountains and maintained their course by eroding faster than the land uplifted.'
                        }
                    ]
                }
            }
        },

        // ========================
        // SECTION 4: EXAMPLES
        // ========================
        examples: {
            title: 'Major Rivers of the World',
            
            hero: {
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
                tagline: 'Explore Earth\'s great rivers - lifelines of civilizations'
            },
            
            renderAs: 'grid',

            introduction: 'Rivers have shaped human civilization since the dawn of history. Every great ancient civilization arose along rivers - Egypt on the Nile, Mesopotamia between Tigris and Euphrates, India along the Indus and Ganga, China on the Huang He and Yangtze. Today, rivers remain critical for water supply, agriculture, transportation, energy, and ecosystems.',

            linkToExisting: '/encyclopedia/rivers/',

            filters: ['continent', 'length', 'discharge', 'type'],
            sortOptions: ['length-desc', 'discharge-desc', 'name-asc', 'continent'],

            featuredRivers: [
                {
                    name: 'Amazon',
                    continent: 'South America',
                    type: 'Perennial',
                    stats: 'Length: 6,400 km | Discharge: 209,000 m³/s',
                    length: '6,400 km',
                    discharge: '209,000 m³/s',
                    countries: ['Brazil', 'Peru', 'Colombia', 'and 6 more'],
                    link: '/encyclopedia/rivers/amazon',
                    image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                    icon: '🌊',
                    funFact: '20% of all freshwater entering oceans! 3,000+ fish species!'
                },
                {
                    name: 'Nile',
                    continent: 'Africa',
                    type: 'Perennial',
                    stats: 'Length: 6,650 km | 11 countries',
                    length: '6,650 km',
                    discharge: '2,830 m³/s',
                    countries: ['Egypt', 'Sudan', 'Uganda', 'Ethiopia', 'and 7 more'],
                    link: '/encyclopedia/rivers/nile',
                    image: 'https://images.unsplash.com/photo-1568322503652-9e5a9e95ddb2?w=800&q=80',
                    icon: '🏛️',
                    funFact: 'World\'s longest river! Cradle of ancient Egyptian civilization!'
                },
                {
                    name: 'Ganga',
                    continent: 'Asia',
                    type: 'Perennial (Himalayan)',
                    stats: 'Length: 2,525 km | Basin: 500 million people',
                    length: '2,525 km',
                    discharge: '12,015 m³/s',
                    countries: ['India', 'Bangladesh'],
                    link: '/encyclopedia/rivers/ganga',
                    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
                    icon: '🙏',
                    funFact: 'Most populated river basin in the world! Sacred to 1 billion Hindus! 🇮🇳'
                },
                {
                    name: 'Yangtze',
                    continent: 'Asia',
                    type: 'Perennial',
                    stats: 'Length: 6,300 km | Three Gorges Dam',
                    length: '6,300 km',
                    discharge: '30,000 m³/s',
                    countries: ['China'],
                    link: '/encyclopedia/rivers/yangtze',
                    image: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=800&q=80',
                    icon: '🐉',
                    funFact: 'Asia\'s longest! World\'s largest hydropower station!'
                },
                {
                    name: 'Mississippi-Missouri',
                    continent: 'North America',
                    type: 'Perennial',
                    stats: 'Length: 6,275 km | Drains 31 US states',
                    length: '6,275 km',
                    discharge: '16,800 m³/s',
                    countries: ['USA'],
                    link: '/encyclopedia/rivers/mississippi',
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
                    icon: '🇺🇸',
                    funFact: 'North America\'s longest! Called "Old Man River"!'
                },
                {
                    name: 'Brahmaputra',
                    continent: 'Asia',
                    type: 'Perennial (Himalayan/Antecedent)',
                    stats: 'Length: 2,900 km | Highest sediment load',
                    length: '2,900 km',
                    discharge: '19,800 m³/s',
                    countries: ['China (Tibet)', 'India', 'Bangladesh'],
                    link: '/encyclopedia/rivers/brahmaputra',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🏔️',
                    funFact: 'Only male river in India! Takes 180° turn through Himalayas! 🇮🇳'
                },
                {
                    name: 'Indus',
                    continent: 'Asia',
                    type: 'Perennial (Himalayan/Antecedent)',
                    stats: 'Length: 3,180 km | Indus Valley Civilization',
                    length: '3,180 km',
                    discharge: '7,610 m³/s',
                    countries: ['China (Tibet)', 'India', 'Pakistan'],
                    link: '/encyclopedia/rivers/indus',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🏛️',
                    funFact: 'Gave name to India! Indus Valley Civilization arose here! 🇮🇳'
                },
                {
                    name: 'Danube',
                    continent: 'Europe',
                    type: 'Perennial',
                    stats: 'Length: 2,860 km | 10 countries',
                    length: '2,860 km',
                    discharge: '6,500 m³/s',
                    countries: ['Germany', 'Austria', 'Hungary', 'and 7 more'],
                    link: '/encyclopedia/rivers/danube',
                    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
                    icon: '🏰',
                    funFact: 'Europe\'s second longest! Flows through 4 capital cities!'
                },
                {
                    name: 'Congo',
                    continent: 'Africa',
                    type: 'Perennial',
                    stats: 'Length: 4,700 km | Deepest river (220m)',
                    length: '4,700 km',
                    discharge: '41,000 m³/s',
                    countries: ['DRC', 'Congo', 'and others'],
                    link: '/encyclopedia/rivers/congo',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🌴',
                    funFact: 'World\'s deepest river (220m)! Second largest by discharge!'
                },
                {
                    name: 'Mekong',
                    continent: 'Asia',
                    type: 'Perennial',
                    stats: 'Length: 4,350 km | 6 countries',
                    length: '4,350 km',
                    discharge: '16,000 m³/s',
                    countries: ['China', 'Myanmar', 'Laos', 'Thailand', 'Cambodia', 'Vietnam'],
                    link: '/encyclopedia/rivers/mekong',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🍚',
                    funFact: 'Southeast Asia\'s lifeline! Mekong Delta is Vietnam\'s rice bowl!'
                },
                {
                    name: 'Godavari',
                    continent: 'Asia',
                    type: 'Perennial (Peninsular)',
                    stats: 'Length: 1,465 km | Largest peninsular basin',
                    length: '1,465 km',
                    discharge: '3,505 m³/s',
                    countries: ['India'],
                    link: '/encyclopedia/rivers/godavari',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🛕',
                    funFact: 'Called "Dakshina Ganga" (South Ganga)! Longest peninsular river! 🇮🇳'
                },
                {
                    name: 'Narmada',
                    continent: 'Asia',
                    type: 'Perennial (Rift Valley)',
                    stats: 'Length: 1,312 km | West-flowing',
                    length: '1,312 km',
                    discharge: '1,447 m³/s',
                    countries: ['India'],
                    link: '/encyclopedia/rivers/narmada',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🕉️',
                    funFact: 'Flows west through rift valley! Only river with parikrama tradition! 🇮🇳'
                },
                {
                    name: 'Yamuna',
                    continent: 'Asia',
                    type: 'Perennial (Himalayan)',
                    stats: 'Length: 1,376 km | Largest Ganga tributary',
                    length: '1,376 km',
                    discharge: '2,950 m³/s',
                    countries: ['India'],
                    link: '/encyclopedia/rivers/yamuna',
                    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
                    icon: '🏛️',
                    funFact: 'Taj Mahal stands on its banks! Most polluted stretch in Delhi! 🇮🇳'
                },
                {
                    name: 'Krishna',
                    continent: 'Asia',
                    type: 'Perennial (Peninsular)',
                    stats: 'Length: 1,400 km | Inter-state dispute',
                    length: '1,400 km',
                    discharge: '2,200 m³/s',
                    countries: ['India'],
                    link: '/encyclopedia/rivers/krishna',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🌾',
                    funFact: 'Origin at Mahabaleshwar! Delta is "Rice Bowl of India"! 🇮🇳'
                },
                {
                    name: 'Cauvery',
                    continent: 'Asia',
                    type: 'Perennial (Peninsular)',
                    stats: 'Length: 805 km | Karnataka-TN dispute',
                    length: '805 km',
                    discharge: '677 m³/s',
                    countries: ['India'],
                    link: '/encyclopedia/rivers/cauvery',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🌾',
                    funFact: 'Grand Anaicut is 2,000 years old - still working! 🇮🇳'
                },
                {
                    name: 'Rhine',
                    continent: 'Europe',
                    type: 'Perennial',
                    stats: 'Length: 1,230 km | Europe\'s busiest waterway',
                    length: '1,230 km',
                    discharge: '2,300 m³/s',
                    countries: ['Switzerland', 'Germany', 'France', 'Netherlands'],
                    link: '/encyclopedia/rivers/rhine',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🚢',
                    funFact: 'Europe\'s most important commercial waterway!'
                },
                {
                    name: 'Volga',
                    continent: 'Europe',
                    type: 'Perennial',
                    stats: 'Length: 3,530 km | Europe\'s longest',
                    length: '3,530 km',
                    discharge: '8,060 m³/s',
                    countries: ['Russia'],
                    link: '/encyclopedia/rivers/volga',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🇷🇺',
                    funFact: 'Europe\'s longest river! Called "Mother Volga" in Russia!'
                },
                {
                    name: 'Huang He (Yellow River)',
                    continent: 'Asia',
                    type: 'Perennial',
                    stats: 'Length: 5,464 km | "China\'s Sorrow"',
                    length: '5,464 km',
                    discharge: '2,571 m³/s',
                    countries: ['China'],
                    link: '/encyclopedia/rivers/huanghe',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🐉',
                    funFact: 'Cradle of Chinese civilization! Deadliest floods in history!'
                },
                {
                    name: 'Colorado',
                    continent: 'North America',
                    type: 'Perennial (heavily diverted)',
                    stats: 'Length: 2,330 km | Grand Canyon',
                    length: '2,330 km',
                    discharge: '620 m³/s (greatly reduced)',
                    countries: ['USA', 'Mexico'],
                    link: '/encyclopedia/rivers/colorado',
                    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&q=80',
                    icon: '🏜️',
                    funFact: 'Carved Grand Canyon! No longer reaches the sea (90% diverted)!'
                },
                {
                    name: 'Murray-Darling',
                    continent: 'Australia',
                    type: 'Perennial (stressed)',
                    stats: 'Length: 2,508 km | Australia\'s largest',
                    length: '2,508 km',
                    discharge: '767 m³/s',
                    countries: ['Australia'],
                    link: '/encyclopedia/rivers/murray',
                    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                    icon: '🦘',
                    funFact: 'Australia\'s most important river system! Severe water stress!'
                }
            ],

            upscRelevance: {
                title: '🎯 UPSC Civil Services Exam Importance',
                introduction: 'Rivers are critically important for UPSC CSE across Prelims (Geography, Environment) and Mains (GS-I Geography, GS-III Environment). Understanding river systems, drainage patterns, and water issues is essential.',
                
                topics: [
                    '**Indian River Systems:** Himalayan vs Peninsular rivers - origin, characteristics, tributaries',
                    '**Drainage Patterns:** Dendritic, trellis, radial, centripetal - examples from India',
                    '**River Types:** Antecedent, consequent, subsequent, superimposed - with Indian examples',
                    '**Inter-state Water Disputes:** Cauvery, Krishna, Godavari, Mahanadi, Narmada',
                    '**River Interlinking Project:** Benefits, challenges, environmental concerns',
                    '**River Pollution:** Ganga Action Plan, Namami Gange, industrial pollution',
                    '**Floods & Flood Management:** Brahmaputra floods, Kosi, structural vs non-structural measures',
                    '**Dams & Irrigation:** Major dam projects, command area development',
                    '**Trans-boundary Rivers:** Indus Waters Treaty, Brahmaputra (China), Teesta (Bangladesh)',
                    '**Climate Change Impact:** Glacial melt, changing monsoon, water security',
                    '**Riverine Ecosystem:** Dolphins, gharials, wetlands, Ramsar sites',
                    '**Inland Waterways:** National Waterways, cargo transport potential',
                    '**Delta & Coastal Issues:** Sundarbans, erosion, sea level rise'
                ],

                sampleQuestions: [
                    {
                        type: 'Mains',
                        year: '2022',
                        marks: 15,
                        question: 'Differentiate between Himalayan and Peninsular rivers of India. How do their characteristics affect irrigation and hydropower potential?',
                        approach: 'Compare: origin (glacier vs rain), flow (perennial vs seasonal), gradient, sediment load, delta formation. Link to irrigation potential and hydropower. Use examples.'
                    },
                    {
                        type: 'Mains',
                        year: '2021',
                        marks: 15,
                        question: 'What are antecedent and superimposed rivers? Explain with Indian examples how they differ in their relationship with underlying geological structures.',
                        approach: 'Define both types. Antecedent: river older than mountains (Indus, Brahmaputra cutting Himalayas). Superimposed: developed on cover rocks (Damodar). Use diagrams.'
                    },
                    {
                        type: 'Mains',
                        year: '2020',
                        marks: 15,
                        question: 'Discuss the causes and consequences of inter-state river water disputes in India. Suggest measures for their resolution.',
                        approach: 'Discuss Cauvery, Krishna, Mahanadi disputes. Causes: uneven distribution, increasing demand, monsoon variability. Solutions: tribunals, inter-linking, demand management.'
                    },
                    {
                        type: 'Mains',
                        year: '2019',
                        marks: 10,
                        question: 'Explain the concept of river interlinking. What are its potential benefits and challenges?',
                        approach: 'Explain concept of connecting surplus and deficit basins. Benefits: irrigation, drought proofing, flood control. Challenges: environmental, displacement, cost, inter-state issues.'
                    },
                    {
                        type: 'Prelims',
                        year: '2018',
                        question: 'Which of the following rivers are west-flowing?\n1. Narmada\n2. Tapti\n3. Mahanadi\n4. Godavari\n\n(a) 1 and 2 only (b) 1, 2 and 3 (c) 2 and 4 (d) 1, 3 and 4',
                        answer: '(a) 1 and 2 only - Narmada and Tapti flow west through rift valleys. Mahanadi and Godavari flow east.'
                    },
                    {
                        type: 'Prelims',
                        year: '2019',
                        question: 'The drainage pattern developed on folded sedimentary rocks is:\n(a) Dendritic (b) Trellis (c) Radial (d) Centripetal',
                        answer: '(b) Trellis - Subsequent rivers flow perpendicular to consequent rivers along soft rock strike, creating rectangular trellis pattern.'
                    },
                    {
                        type: 'Mains',
                        year: '2023',
                        marks: 15,
                        question: 'Discuss the environmental and socio-economic impacts of dams on river ecosystems in India. How can these be mitigated?',
                        approach: 'Discuss: fragmentation, sediment trapping, downstream impacts, displacement, submergence. Mitigation: environmental flows, fish ladders, resettlement policies, run-of-river projects.'
                    }
                ],

                keyConceptsForExam: [
                    {
                        concept: 'Himalayan vs Peninsular Rivers',
                        importance: 'Very High',
                        details: 'Himalayan: perennial, glacier-fed, antecedent, large basins, high sediment. Peninsular: rain-fed, seasonal variation, smaller basins, less sediment.',
                        examRelevance: 'Frequently asked comparison in both Prelims and Mains'
                    },
                    {
                        concept: 'River Water Disputes',
                        importance: 'Very High',
                        details: 'Cauvery (Karnataka-TN), Krishna (4 states), Mahanadi (Odisha-Chhattisgarh), Narmada, Ravi-Beas',
                        examRelevance: 'Current affairs, federalism, Article 262, tribunals'
                    },
                    {
                        concept: 'River Interlinking',
                        importance: 'High',
                        details: 'National Perspective Plan 1980, Ken-Betwa link (approved), Himalayan and Peninsular components',
                        examRelevance: 'GS-I Geography, GS-III Environment, Essay'
                    },
                    {
                        concept: 'Namami Gange',
                        importance: 'High',
                        details: '₹20,000+ crore program for Ganga cleaning, sewage treatment, riverfront development, afforestation',
                        examRelevance: 'Environment, governance, current affairs'
                    },
                    {
                        concept: 'Drainage Patterns',
                        importance: 'Medium-High',
                        details: 'Dendritic, trellis, radial, rectangular, centripetal - Indian examples',
                        examRelevance: 'Map-based questions, physical geography'
                    }
                ],

                currentAffairsLinks: [
                    'Ken-Betwa Link Project - India\'s first river interlinking (2021-ongoing)',
                    'Namami Gange - Ganga rejuvenation progress and challenges',
                    'Brahmaputra dams by China - geopolitical concerns',
                    'Teesta water sharing with Bangladesh - pending agreement',
                    'Glacial Lake Outburst Floods (GLOFs) - Uttarakhand 2021, 2023',
                    'National Mission for Clean Ganga (NMCG) - sewage treatment progress',
                    'Inland Waterways - National Waterway-1 (Ganga), cargo movement',
                    'River dolphin conservation - Population surveys, protected areas',
                    'Sand mining regulation - NGT orders, environmental impact',
                    'Mekedatu dam controversy - Karnataka-Tamil Nadu dispute'
                ]
            },

            // Button to see all rivers
            exploreAllButton: {
                text: '🏞️ Explore All Rivers',
                link: '/encyclopedia/rivers/',
                description: 'Detailed pages for 50+ major rivers of India and the world'
            }
        }
    }
};

// Export for use in concept-app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = riversData;
}
