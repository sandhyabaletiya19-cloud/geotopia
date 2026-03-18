/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Geomorphology Data File
   Topics: Earth's Interior, Plate Tectonics, 
           Continental Drift, Volcanoes, Earthquakes,
           Weathering, Erosion, Landforms Overview
   ============================================ */

const geomorphologyData = [

    // ============================================
    // TOPIC 1: EARTH'S INTERIOR
    // ============================================
    {
        id: 'earths-interior',
        name: "Earth's Interior",
        icon: '🌍',
        category: 'geomorphology',
        theme: 'tectonic',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: "Earth's Interior",
            branches: [
                {
                    name: 'Layers',
                    color: '#FF6B6B',
                    children: [
                        'Crust - Outermost, 5-70 km',
                        'Mantle - Middle, 2900 km',
                        'Core - Innermost, 3400 km'
                    ]
                },
                {
                    name: 'Evidence Sources',
                    color: '#4ECDC4',
                    children: [
                        'Seismic Waves (P & S)',
                        'Volcanic Eruptions',
                        'Meteors & Density Studies',
                        'Gravitational Anomalies'
                    ]
                },
                {
                    name: 'Discontinuities',
                    color: '#FFE66D',
                    children: [
                        'Moho - Crust/Mantle boundary',
                        'Gutenberg - Mantle/Core boundary',
                        'Lehmann - Outer/Inner Core'
                    ]
                },
                {
                    name: 'Composition',
                    color: '#95E1D3',
                    children: [
                        'SIAL - Silicon + Aluminum',
                        'SIMA - Silicon + Magnesium',
                        'NIFE - Nickel + Iron'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Remember the Layers',
                content: 'CMC = Crust (skin), Mantle (muscle), Core (bone) - Just like human body!',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Discontinuities Order',
                content: 'MGL = Moho, Gutenberg, Lehmann (from top to bottom) = "My Good Lord"',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Egg Analogy',
                content: 'Earth = Boiled Egg: Shell = Crust, White = Mantle, Yolk = Core',
                icon: '🥚'
            },
            {
                type: 'story',
                title: 'The Earth Onion',
                content: 'Imagine peeling an onion - each layer reveals another. Earth has 3 main layers, with the hottest, densest core at center!',
                icon: '🧅'
            }
        ],

        conceptBlocks: [
            {
                title: 'The Crust',
                icon: '🏔️',
                points: [
                    'Outermost solid layer of Earth',
                    'Continental Crust: 30-70 km thick, granitic (SIAL)',
                    'Oceanic Crust: 5-10 km thick, basaltic (SIMA)',
                    'Density: 2.7-3.0 g/cm³ (lightest layer)',
                    'Contains all life, water bodies, and atmosphere interface'
                ]
            },
            {
                title: 'The Mantle',
                icon: '🔥',
                points: [
                    'Largest layer - 84% of Earth\'s volume',
                    'Upper Mantle: Lithosphere (rigid) + Asthenosphere (plastic)',
                    'Lower Mantle: Solid but flows slowly',
                    'Temperature: 1000°C to 3700°C',
                    'Convection currents drive plate tectonics'
                ]
            },
            {
                title: 'The Core',
                icon: '⚫',
                points: [
                    'Composed mainly of Iron and Nickel (NIFE)',
                    'Outer Core: Liquid, 2200 km thick, creates magnetic field',
                    'Inner Core: Solid due to immense pressure',
                    'Temperature: ~5500°C (as hot as Sun\'s surface!)',
                    'Density: 13 g/cm³ (heaviest part)'
                ]
            },
            {
                title: 'Seismic Evidence',
                icon: '📊',
                points: [
                    'P-waves (Primary): Travel through solids AND liquids',
                    'S-waves (Secondary): Travel ONLY through solids',
                    'S-wave shadow zone proves liquid outer core',
                    'Wave velocity changes at layer boundaries',
                    'Reflection & refraction reveal discontinuities'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Earth\'s Layers Cross-Section',
                type: 'cross-section',
                description: 'Concentric circles showing Crust, Mantle (upper & lower), Outer Core, Inner Core with thicknesses and compositions labeled'
            },
            {
                title: 'Seismic Wave Propagation',
                type: 'flowchart',
                description: 'Diagram showing P-waves and S-waves traveling through Earth, with shadow zones marked'
            },
            {
                title: 'Discontinuities Diagram',
                type: 'cross-section',
                description: 'Earth cross-section highlighting Moho, Gutenberg, and Lehmann discontinuities'
            }
        ],

        quickFacts: [
            '📏 Earth\'s radius is approximately 6,371 km',
            '🌡️ Inner core temperature reaches 5,500°C',
            '⚖️ Core accounts for 33% of Earth\'s mass but only 16% volume',
            '🧲 Liquid outer core generates Earth\'s magnetic field',
            '🏔️ Continental crust is 6x thicker than oceanic crust',
            '🌊 Asthenosphere allows tectonic plates to "float"',
            '📡 Deepest human drilling: 12.3 km (Kola Superdeep Borehole)',
            '💎 Mantle contains precious minerals like diamonds'
        ],

        upscTraps: [
            {
                trap: 'Thinking entire mantle is liquid/molten',
                clarity: 'Only asthenosphere (upper mantle) is semi-plastic. Most mantle is SOLID but can flow slowly over millions of years'
            },
            {
                trap: 'Confusing SIAL and SIMA layers',
                clarity: 'SIAL = Continental crust (lighter, Silicon+Aluminum) | SIMA = Oceanic crust (denser, Silicon+Magnesium)'
            },
            {
                trap: 'Inner core is hotter than outer core but still solid',
                clarity: 'Extreme PRESSURE keeps inner core solid despite higher temperature. Pressure > Temperature effect'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Three layers: Crust → Mantle → Core',
                'Crust types: Continental (SIAL, thick) & Oceanic (SIMA, thin)',
                'Mantle has Asthenosphere (plastic) where plates float',
                'Core: Outer (liquid, magnetic field) + Inner (solid, NIFE)',
                'Discontinuities: Moho, Gutenberg, Lehmann',
                'P-waves travel through all; S-waves blocked by liquid core'
            ]
        },

        pyqs: [
            {
                year: 2018,
                question: 'What are the evidences of the presence of a liquid outer core in the Earth?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The__(discontinuity) separates the crust from the mantle.',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'Differentiate between continental and oceanic crust.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: PLATE TECTONICS
    // ============================================
    {
        id: 'plate-tectonics',
        name: 'Plate Tectonics',
        icon: '🌏',
        category: 'geomorphology',
        theme: 'tectonic',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Plate Tectonics',
            branches: [
                {
                    name: 'Types of Plates',
                    color: '#FF6B6B',
                    children: [
                        'Major Plates (7)',
                        'Minor Plates (8+)',
                        'Continental Plates (lighter)',
                        'Oceanic Plates (denser)'
                    ]
                },
                {
                    name: 'Plate Boundaries',
                    color: '#4ECDC4',
                    children: [
                        'Divergent - Plates separate',
                        'Convergent - Plates collide',
                        'Transform - Plates slide'
                    ]
                },
                {
                    name: 'Driving Forces',
                    color: '#FFE66D',
                    children: [
                        'Convection Currents',
                        'Ridge Push',
                        'Slab Pull (strongest)',
                        'Mantle Drag'
                    ]
                },
                {
                    name: 'Results',
                    color: '#95E1D3',
                    children: [
                        'Mountains (Fold & Volcanic)',
                        'Earthquakes & Volcanoes',
                        'Rift Valleys & Trenches',
                        'Mid-Ocean Ridges'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Major Plates',
                content: 'PANACEA = Pacific, Antarctic, North American, African, Caribbean, Eurasian, Australian',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Plate Boundaries',
                content: 'DCT = Divergent (Divide), Convergent (Crash), Transform (Turn/Twist)',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Conveyor Belt',
                content: 'Convection currents work like a conveyor belt - hot material rises at ridges, cools, moves sideways, then sinks at trenches!',
                icon: '🔄'
            },
            {
                type: 'story',
                title: 'Plates as Rafts',
                content: 'Imagine plates as wooden rafts floating on thick honey (asthenosphere). When honey circulates, rafts bump, separate, or slide past!',
                icon: '🚣'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are Tectonic Plates?',
                icon: '🧩',
                points: [
                    'Lithosphere divided into 15-20 rigid plates',
                    'Float on semi-plastic asthenosphere',
                    'Move 2-15 cm per year (fingernail growth speed)',
                    'Include both continental and oceanic crust',
                    'Boundaries are zones of geological activity'
                ]
            },
            {
                title: 'Divergent Boundaries',
                icon: '↔️',
                points: [
                    'Plates move APART from each other',
                    'Magma rises to fill gap → new crust forms',
                    'Creates: Mid-ocean ridges, Rift valleys',
                    'Example: Mid-Atlantic Ridge, East African Rift',
                    'Associated with mild earthquakes, volcanic activity'
                ]
            },
            {
                title: 'Convergent Boundaries',
                icon: '💥',
                points: [
                    'Plates move TOWARD each other',
                    'Ocean-Ocean: Island arcs form (Japan, Philippines)',
                    'Ocean-Continent: Volcanic mountains (Andes)',
                    'Continent-Continent: Fold mountains (Himalayas)',
                    'Subduction occurs when denser plate goes under'
                ]
            },
            {
                title: 'Transform Boundaries',
                icon: '↹',
                points: [
                    'Plates slide PAST each other horizontally',
                    'No creation or destruction of crust',
                    'Causes powerful earthquakes',
                    'Example: San Andreas Fault (California)',
                    'Also called Conservative boundaries'
                ]
            }
        ],

        diagrams: [
            {
                title: 'World Tectonic Plates Map',
                type: 'map',
                description: 'World map showing all major and minor plates with arrows indicating direction of movement'
            },
            {
                title: 'Three Types of Plate Boundaries',
                type: 'comparison-chart',
                description: 'Side-by-side diagrams of Divergent, Convergent, and Transform boundaries with features formed'
            },
            {
                title: 'Convection Currents in Mantle',
                type: 'cross-section',
                description: 'Cross-section showing circular convection cells in mantle driving plate movement'
            }
        ],

        quickFacts: [
            '🌍 Earth has 7 MAJOR tectonic plates',
            '📏 Pacific Plate is the LARGEST (103 million km²)',
            '🏔️ Himalayas grow 1 cm/year due to plate collision',
            '🌊 Atlantic Ocean widens 2.5 cm/year',
            '🔥 Ring of Fire has 75% of world\'s volcanoes',
            '📅 Pangaea broke up ~200 million years ago',
            '⚡ 90% of earthquakes occur at plate boundaries',
            '🏝️ Hawaii is over a hotspot, not plate boundary'
        ],

        upscTraps: [
            {
                trap: 'All convergent boundaries have subduction',
                clarity: 'Continent-Continent collision has NO SUBDUCTION - both are too light. They crumple to form fold mountains (Himalayas)'
            },
            {
                trap: 'Ridge Push is the main driving force',
                clarity: 'SLAB PULL is the STRONGEST force - the sinking cold slab pulls the plate behind it'
            },
            {
                trap: 'Plates move at same speed',
                clarity: 'Pacific Plate moves fastest (~10 cm/yr), Arctic Ridge slowest (~2.5 cm/yr)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '15-20 plates float on asthenosphere',
                '3 boundaries: Divergent (apart), Convergent (together), Transform (slide)',
                'Convergent subtypes: O-O (island arc), O-C (volcanic mt), C-C (fold mt)',
                'Driven by: Convection + Slab Pull (strongest) + Ridge Push',
                'Ring of Fire = Pacific Plate edges = most earthquakes/volcanoes',
                'India-Eurasia collision → Himalayas still rising!'
            ]
        },

        pyqs: [
            {
                year: 2019,
                question: 'Explain the concept of seafloor spreading and its role in plate tectonics.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'The Himalayas were formed due to which type of plate boundary?',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Discuss the theory of Plate Tectonics and explain the formation of fold mountains.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: CONTINENTAL DRIFT
    // ============================================
    {
        id: 'continental-drift',
        name: 'Continental Drift',
        icon: '🗺️',
        category: 'geomorphology',
        theme: 'tectonic',
        difficulty: 'easy',
        upscRelevance: 'high',

        mindMap: {
            central: 'Continental Drift',
            branches: [
                {
                    name: 'Wegener\'s Theory',
                    color: '#FF6B6B',
                    children: [
                        'Proposed in 1912',
                        'All continents were ONE',
                        'Called Pangaea',
                        'Surrounded by Panthalassa'
                    ]
                },
                {
                    name: 'Evidences',
                    color: '#4ECDC4',
                    children: [
                        'Jigsaw Fit (coastlines)',
                        'Fossil Distribution',
                        'Geological Similarity',
                        'Paleoclimatic Evidence'
                    ]
                },
                {
                    name: 'Breakup Sequence',
                    color: '#FFE66D',
                    children: [
                        'Pangaea → Laurasia + Gondwana',
                        'Laurasia → N.America + Eurasia',
                        'Gondwana → S.America, Africa, India, Australia, Antarctica'
                    ]
                },
                {
                    name: 'Forces (Wegener)',
                    color: '#95E1D3',
                    children: [
                        'Pole-fleeing Force',
                        'Tidal Force',
                        '(Later disproved - too weak)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Gondwana Continents',
                content: 'SAAIA = South America, Africa, Antarctica, India, Australia - all were together!',
                icon: '🧠'
            },
            {
                type: 'story',
                title: 'The Supercontinent Puzzle',
                content: 'Imagine a giant jigsaw puzzle that slowly broke apart over 200 million years. South America and Africa fit like two pieces separated!',
                icon: '🧩'
            },
            {
                type: 'visual',
                title: 'Mesosaurus Fossil',
                content: 'Picture a small reptile fossil found in BOTH Brazil and South Africa - impossible if they were always separated by an ocean!',
                icon: '🦎'
            },
            {
                type: 'acronym',
                title: 'Evidence Types',
                content: 'JFGP = Jigsaw fit, Fossils, Geology, Paleoclimate',
                icon: '🔤'
            }
        ],

        conceptBlocks: [
            {
                title: 'Pangaea & Panthalassa',
                icon: '🌍',
                points: [
                    'Pangaea = "All Lands" - single supercontinent',
                    'Existed ~335-200 million years ago',
                    'Panthalassa = "All Seas" - single ocean',
                    'Tethys Sea separated Laurasia and Gondwana',
                    'Breakup began in Jurassic period (~200 MYA)'
                ]
            },
            {
                title: 'Jigsaw Fit Evidence',
                icon: '🧩',
                points: [
                    'Eastern coast of South America fits Western coast of Africa',
                    'Best fit at continental shelf (not coastline)',
                    'Computer analysis shows 98% accuracy',
                    'North America fits with Europe and Africa',
                    'Australia fits with Antarctica'
                ]
            },
            {
                title: 'Fossil Evidence',
                icon: '🦴',
                points: [
                    'Mesosaurus: Brazil and South Africa only',
                    'Glossopteris (plant): All Gondwana continents',
                    'Lystrosaurus (reptile): India, Africa, Antarctica',
                    'Cynognathus: South America and Africa',
                    'These organisms couldn\'t cross oceans!'
                ]
            },
            {
                title: 'Geological Evidence',
                icon: '⛰️',
                points: [
                    'Appalachian Mountains (USA) continue as Caledonian (Europe)',
                    'Similar rock types and ages across continents',
                    'Brazilian and African highlands match',
                    'Coal deposits in Antarctica suggest warm climate',
                    'Glacial deposits in tropical regions'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Pangaea Reconstruction',
                type: 'map',
                description: 'Map showing all continents joined as Pangaea with Tethys Sea and Panthalassa Ocean'
            },
            {
                title: 'Continental Drift Timeline',
                type: 'timeline',
                description: 'Sequence showing Pangaea → Laurasia/Gondwana → Modern continents over 200 million years'
            },
            {
                title: 'Fossil Distribution Map',
                type: 'map',
                description: 'World map showing distribution of Mesosaurus, Glossopteris, and other key fossils'
            }
        ],

        quickFacts: [
            '📅 Alfred Wegener proposed theory in 1912',
            '🌍 Pangaea means "All Earth" in Greek',
            '🌊 Panthalassa means "All Sea" in Greek',
            '🦎 Mesosaurus was a freshwater reptile - couldn\'t swim oceans!',
            '🌿 Glossopteris found on 5 continents',
            '❄️ Glacial evidence found in India, Africa - once near South Pole',
            '🔬 Theory rejected initially due to weak driving forces',
            '✅ Accepted after seafloor spreading discovered (1960s)'
        ],

        upscTraps: [
            {
                trap: 'Continents floated ON oceans',
                clarity: 'Continents PLOUGHED through oceanic crust according to Wegener (later corrected - plates carry both)'
            },
            {
                trap: 'Continental Drift is same as Plate Tectonics',
                clarity: 'Drift was the IDEA; Plate Tectonics is the MECHANISM. Drift explained WHAT, Tectonics explains HOW'
            },
            {
                trap: 'Wegener\'s forces were correct',
                clarity: 'Pole-fleeing and tidal forces are TOO WEAK. Correct force: Convection currents (discovered later)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Wegener (1912): All continents were once ONE = Pangaea',
                'Panthalassa = surrounding ocean, Tethys = internal sea',
                'Evidence: Jigsaw fit, Fossils, Geology, Paleoclimate',
                'Key fossils: Mesosaurus, Glossopteris, Lystrosaurus',
                'Pangaea → Laurasia (N) + Gondwana (S)',
                'Theory rejected initially; accepted after seafloor spreading proof'
            ]
        },

        pyqs: [
            {
                year: 2015,
                question: 'Discuss the evidences in support of Continental Drift Theory.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Which fossil is found in both South America and Africa supporting continental drift?',
                type: 'Prelims'
            }
        ]
    },

    // ============================================
    // TOPIC 4: VOLCANOES
    // ============================================
    {
        id: 'volcanoes',
        name: 'Volcanoes',
        icon: '🌋',
        category: 'geomorphology',
        theme: 'volcanic',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Volcanoes',
            branches: [
                {
                    name: 'Types by Shape',
                    color: '#FF4444',
                    children: [
                        'Shield - Broad, gentle (Hawaii)',
                        'Composite/Strato - Steep, layered (Fuji)',
                        'Cinder Cone - Small, steep',
                        'Caldera - Collapsed crater'
                    ]
                },
                {
                    name: 'Distribution',
                    color: '#FF6B35',
                    children: [
                        'Ring of Fire (Pacific)',
                        'Mid-Ocean Ridges',
                        'Hotspots (Hawaii, Yellowstone)',
                        'Continental Rifts'
                    ]
                },
                {
                    name: 'Products',
                    color: '#FFD93D',
                    children: [
                        'Lava (Aa & Pahoehoe)',
                        'Pyroclastic Material',
                        'Volcanic Gases',
                        'Ash & Tephra'
                    ]
                },
                {
                    name: 'Activity Status',
                    color: '#95E1D3',
                    children: [
                        'Active - Currently erupting/recent',
                        'Dormant - Inactive but may erupt',
                        'Extinct - No future eruption'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Volcano Types',
                content: 'SCC = Shield (flat like shield), Composite (combination/layers), Cinder Cone (conical)',
                icon: '🧠'
            },
            {
                type: 'visual',
                title: 'Shape Memory',
                content: 'Shield = Warrior\'s flat shield | Composite = Layer cake | Cinder = Ice cream cone | Caldera = Broken bowl',
                icon: '👁️'
            },
            {
                type: 'comparison',
                title: 'Lava Types',
                content: 'Aa lava = "Ah! Ah!" (painful to walk on, rough) | Pahoehoe = "Pa-hoy-hoy" (smooth, ropy, can walk)',
                icon: '🦶'
            },
            {
                type: 'story',
                title: 'Ring of Fire',
                content: 'Imagine the Pacific Ocean surrounded by a ring of birthday candles (volcanoes) - 75% of world\'s volcanoes form this fiery necklace!',
                icon: '🔥'
            }
        ],

        conceptBlocks: [
            {
                title: 'How Volcanoes Form',
                icon: '🌋',
                points: [
                    'Magma rises through cracks in lithosphere',
                    'Pressure release allows gases to expand',
                    'Eruption when magma reaches surface (becomes lava)',
                    'Form at divergent boundaries, convergent boundaries, hotspots',
                    'Magma chamber feeds the volcano from below'
                ]
            },
            {
                title: 'Shield Volcanoes',
                icon: '🛡️',
                points: [
                    'Broad, gently sloping sides (2-10°)',
                    'Built by low-viscosity basaltic lava',
                    'Non-explosive, effusive eruptions',
                    'Largest volcanoes by volume',
                    'Examples: Mauna Loa, Mauna Kea (Hawaii)'
                ]
            },
            {
                title: 'Composite (Stratovolcanoes)',
                icon: '🗻',
                points: [
                    'Steep, cone-shaped (30-35°)',
                    'Alternating layers of lava and pyroclastics',
                    'Violent, explosive eruptions',
                    'Most picturesque volcanoes',
                    'Examples: Mt. Fuji, Mt. Vesuvius, Mt. Rainier'
                ]
            },
            {
                title: 'Volcanic Hazards',
                icon: '⚠️',
                points: [
                    'Lava flows destroy everything in path',
                    'Pyroclastic flows: Hot gas + debris at 700°C',
                    'Lahars: Volcanic mudflows',
                    'Ash fall affects aviation, health, crops',
                    'Volcanic gases: SO2, CO2, H2S - toxic'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Types of Volcanoes Comparison',
                type: 'comparison-chart',
                description: 'Side-by-side profiles of Shield, Composite, Cinder Cone, and Caldera with key features labeled'
            },
            {
                title: 'Volcano Internal Structure',
                type: 'cross-section',
                description: 'Cross-section showing magma chamber, conduit, crater, side vents, and lava flow'
            },
            {
                title: 'Ring of Fire Map',
                type: 'map',
                description: 'Pacific Ocean map showing the Ring of Fire with major volcanoes marked'
            }
        ],

        quickFacts: [
            '🔥 Ring of Fire has 452 volcanoes (75% of world total)',
            '📊 ~1,500 potentially active volcanoes worldwide',
            '🌡️ Lava temperature: 700°C to 1200°C',
            '🏔️ Mauna Kea is tallest mountain from base (10,203 m)',
            '💨 Volcanic gases include CO2, SO2, H2S',
            '🇮🇳 India\'s only active volcano: Barren Island (Andaman)',
            '🇮🇳 Narcondam (Andaman) is dormant',
            '⏰ Indonesia has most active volcanoes (130+)'
        ],

        upscTraps: [
            {
                trap: 'All volcanoes are at plate boundaries',
                clarity: 'WRONG! Hotspot volcanoes form in middle of plates (Hawaii, Yellowstone)'
            },
            {
                trap: 'Larger volcano = more dangerous',
                clarity: 'Shield volcanoes are largest but LEAST dangerous (gentle eruptions). Composite are most dangerous (explosive)'
            },
            {
                trap: 'Extinct volcanoes can\'t erupt',
                clarity: 'Classification is not absolute. "Extinct" Mt. Vesuvius erupted in 79 AD after long dormancy'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '3 types: Shield (gentle), Composite (steep), Cinder Cone (small)',
                'Shield = effusive, basaltic | Composite = explosive, layered',
                'Distribution: Ring of Fire (75%), Mid-Ocean Ridges, Hotspots',
                'India: Barren Island (active), Narcondam (dormant)',
                'Hazards: Lava, pyroclastic flows, lahars, ash, gases',
                'Ring of Fire = Pacific Plate boundaries'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Differentiate between Shield and Composite volcanoes with examples.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which is the only active volcano in India?',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'Discuss the distribution of volcanoes around the world.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: EARTHQUAKES
    // ============================================
    {
        id: 'earthquakes',
        name: 'Earthquakes',
        icon: '💥',
        category: 'geomorphology',
        theme: 'earthquake',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Earthquakes',
            branches: [
                {
                    name: 'Terminology',
                    color: '#FFD93D',
                    children: [
                        'Focus - Point of origin',
                        'Epicenter - Surface point above focus',
                        'Fault - Rock fracture zone',
                        'Seismic Waves - Energy waves'
                    ]
                },
                {
                    name: 'Types of Waves',
                    color: '#FF6B6B',
                    children: [
                        'P-waves - Primary, fastest',
                        'S-waves - Secondary, through solids',
                        'L-waves - Surface, most destructive'
                    ]
                },
                {
                    name: 'Measurement',
                    color: '#4ECDC4',
                    children: [
                        'Richter Scale (Magnitude)',
                        'Mercalli Scale (Intensity)',
                        'Moment Magnitude Scale'
                    ]
                },
                {
                    name: 'Causes',
                    color: '#95E1D3',
                    children: [
                        'Tectonic (most common)',
                        'Volcanic Activity',
                        'Human-induced (mining, dams)',
                        'Isostatic Rebound'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Seismic Waves Order',
                content: 'PSL = Primary (fastest), Secondary, L-waves (slowest but strongest) - Like cricket league! 🏏',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Focus vs Epicenter',
                content: 'Focus = Floor (underground) | Epicenter = Exterior (surface)',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Wave Behavior',
                content: 'P-waves = Push-Pull (like accordion) | S-waves = Shake (like rope wave) | L-waves = Long rolling (like ocean wave)',
                icon: '🌊'
            },
            {
                type: 'story',
                title: 'The Domino Effect',
                content: 'Stress builds between plates like pressing dominoes together. When they slip - BOOM! Energy releases as waves spreading outward like ripples in a pond.',
                icon: '🎯'
            }
        ],

        conceptBlocks: [
            {
                title: 'Earthquake Basics',
                icon: '💥',
                points: [
                    'Sudden release of energy in lithosphere',
                    'Focus (Hypocenter): Actual point of origin',
                    'Epicenter: Point on surface directly above focus',
                    'Shallow focus (<70 km) most destructive',
                    '90% occur along plate boundaries'
                ]
            },
            {
                title: 'Seismic Waves',
                icon: '〰️',
                points: [
                    'P-waves: Fastest, travel through all media, push-pull motion',
                    'S-waves: Slower, only through solids, perpendicular motion',
                    'L-waves: Slowest, surface waves, most destructive',
                    'Love waves: Horizontal shaking',
                    'Rayleigh waves: Rolling motion'
                ]
            },
            {
                title: 'Measurement Scales',
                icon: '📊',
                points: [
                    'Richter Scale: Measures magnitude (1-10), logarithmic',
                    'Each unit = 10x amplitude, 31.6x energy',
                    'Mercalli Scale: Measures intensity (I-XII), based on damage',
                    'Moment Magnitude: Modern, most accurate for large quakes',
                    'Seismograph records earthquake waves'
                ]
            },
            {
                title: 'India Seismic Zones',
                icon: '🇮🇳',
                points: [
                    'Zone V (Very High): Kashmir, Himachal, Uttarakhand, NE India, Kutch',
                    'Zone IV (High): Remaining Himalayan region, Delhi, J&K',
                    'Zone III (Moderate): Most of Peninsular India',
                    'Zone II (Low): Remaining areas',
                    'India on three tectonic plates boundary'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Focus and Epicenter',
                type: 'cross-section',
                description: 'Diagram showing focus underground, epicenter on surface, and seismic waves radiating outward'
            },
            {
                title: 'Types of Seismic Waves',
                type: 'comparison-chart',
                description: 'Comparison of P-waves, S-waves, and L-waves with their properties and motion patterns'
            },
            {
                title: 'India Seismic Zone Map',
                type: 'map',
                description: 'Map of India showing Seismic Zones II through V with color coding'
            }
        ],

        quickFacts: [
            '⚡ 500,000 earthquakes occur annually (100,000 felt)',
            '📊 Richter scale is logarithmic: +1 = 10x stronger',
            '🌍 Pacific Ring of Fire has 81% of largest earthquakes',
            '🇮🇳 Delhi is in Seismic Zone IV',
            '🏔️ Himalayan region is most seismically active in India',
            '💀 2001 Gujarat earthquake killed 20,000+',
            '📅 2004 Indian Ocean earthquake triggered deadly tsunami',
            '🔬 USGS records ~20,000 earthquakes annually'
        ],

        upscTraps: [
            {
                trap: 'Higher Richter = more deaths',
                clarity: 'Intensity matters more! A 7.0 in populated area is worse than 8.0 in ocean'
            },
            {
                trap: 'S-waves are most destructive',
                clarity: 'SURFACE waves (L-waves) are most destructive despite being slowest'
            },
            {
                trap: 'Peninsular India is earthquake-free',
                clarity: 'Peninsular India has Zone II-III. Koyna (1967), Latur (1993) - significant quakes occurred'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Focus = origin point | Epicenter = surface above focus',
                'Waves: P (fastest, all media) → S (solids only) → L (slowest, most destructive)',
                'Richter = magnitude (logarithmic) | Mercalli = intensity (damage)',
                'India Zones: V (Kashmir, NE) → IV (Delhi) → III → II',
                '90% earthquakes at plate boundaries',
                'Ring of Fire = 81% of major earthquakes'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Explain the different types of seismic waves and their characteristics.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Delhi falls under which seismic zone?',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Discuss the seismic zonation of India and its implications.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: WEATHERING
    // ============================================
    {
        id: 'weathering',
        name: 'Weathering',
        icon: '🪨',
        category: 'geomorphology',
        theme: 'soil',
        difficulty: 'easy',
        upscRelevance: 'medium',

        mindMap: {
            central: 'Weathering',
            branches: [
                {
                    name: 'Physical Weathering',
                    color: '#8B4513',
                    children: [
                        'Frost Wedging',
                        'Thermal Expansion',
                        'Exfoliation',
                        'Root Wedging'
                    ]
                },
                {
                    name: 'Chemical Weathering',
                    color: '#4ECDC4',
                    children: [
                        'Oxidation',
                        'Hydrolysis',
                        'Carbonation',
                        'Solution'
                    ]
                },
                {
                    name: 'Biological Weathering',
                    color: '#2ECC71',
                    children: [
                        'Root Action',
                        'Burrowing Animals',
                        'Lichens & Mosses',
                        'Human Activities'
                    ]
                },
                {
                    name: 'Factors Affecting',
                    color: '#FFE66D',
                    children: [
                        'Climate (temp, moisture)',
                        'Rock Type',
                        'Slope & Exposure',
                        'Time Duration'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Types of Weathering',
                content: 'PCB = Physical (breaking), Chemical (changing), Biological (living things)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Breaking vs Changing',
                content: 'Physical = Breaking a cookie into pieces (same substance) | Chemical = Cookie dissolving in milk (new substance)',
                icon: '🍪'
            },
            {
                type: 'acronym',
                title: 'Chemical Weathering Types',
                content: 'OHCS = Oxidation, Hydrolysis, Carbonation, Solution (Oh! How Cool Substances change!)',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Frost Wedging',
                content: 'Water enters crack → freezes → expands 9% → cracks rock → Like ice cube tray overflow!',
                icon: '🧊'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is Weathering?',
                icon: '🪨',
                points: [
                    'Breaking down of rocks IN PLACE (no transport)',
                    'Prepares material for erosion',
                    'Leads to soil formation',
                    'Occurs at or near Earth\'s surface',
                    'Different from erosion (which involves movement)'
                ]
            },
            {
                title: 'Physical/Mechanical Weathering',
                icon: '💪',
                points: [
                    'Rocks break without chemical change',
                    'Frost Wedging: Water freezes in cracks, expands',
                    'Thermal Expansion: Day-night temp differences',
                    'Exfoliation: Outer layers peel off (onion-skin)',
                    'Dominant in: Cold/Dry climates, Deserts'
                ]
            },
            {
                title: 'Chemical Weathering',
                icon: '🧪',
                points: [
                    'Rocks decompose, new minerals form',
                    'Oxidation: Iron + Oxygen → Rust',
                    'Hydrolysis: Water reacts with minerals',
                    'Carbonation: CO2 + Water dissolves limestone',
                    'Dominant in: Hot and humid climates'
                ]
            },
            {
                title: 'Biological Weathering',
                icon: '🌱',
                points: [
                    'Living organisms break rocks',
                    'Roots grow in cracks, widen them',
                    'Burrowing animals mix and expose rock',
                    'Lichens produce acids that dissolve rock',
                    'Includes both physical and chemical effects'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Types of Weathering Comparison',
                type: 'comparison-chart',
                description: 'Three columns showing Physical, Chemical, and Biological weathering with examples and dominant climates'
            },
            {
                title: 'Frost Wedging Process',
                type: 'cycle',
                description: 'Step-by-step diagram showing water entering crack, freezing, expanding, and breaking rock'
            },
            {
                title: 'Climate and Weathering Type',
                type: 'bar-graph',
                description: 'Graph showing which weathering type dominates in different climate zones'
            }
        ],

        quickFacts: [
            '🧊 Water expands by 9% when frozen',
            '🌡️ Thermal weathering common in deserts (>30°C daily range)',
            '🦎 Biological weathering is slowest but very effective',
            '🌧️ Chemical weathering fastest in tropics',
            '⏰ Weathering is a continuous, slow process',
            '🪨 Granite weathers slower than limestone',
            '🌿 Lichens are pioneer organisms in weathering',
            '🏜️ Physical weathering dominates in arid regions'
        ],

        upscTraps: [
            {
                trap: 'Weathering and erosion are same',
                clarity: 'Weathering = BREAKING in place | Erosion = TRANSPORT of material. Weathering prepares material for erosion'
            },
            {
                trap: 'Chemical weathering only in wet climates',
                clarity: 'Also occurs in deserts (morning dew causes oxidation). Just slower than physical there'
            },
            {
                trap: 'All rocks weather at same rate',
                clarity: 'Rate depends on rock type: Limestone fast, Granite slow. Also climate matters!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Weathering = breaking rocks IN PLACE (no transport)',
                '3 types: Physical (breaking), Chemical (changing), Biological (living)',
                'Physical dominant: Cold, dry, deserts | Chemical dominant: Hot, humid',
                'Physical: Frost wedging, exfoliation, thermal expansion',
                'Chemical: Oxidation, hydrolysis, carbonation, solution',
                'Weathering → Regolith (broken rock) → Soil formation'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Distinguish between physical and chemical weathering with suitable examples.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which type of weathering is dominant in tropical humid regions?',
                type: 'Prelims'
            }
        ]
    },

    // ============================================
    // TOPIC 7: EROSION
    // ============================================
    {
        id: 'erosion',
        name: 'Erosion',
        icon: '💨',
        category: 'geomorphology',
        theme: 'desert',
        difficulty: 'easy',
        upscRelevance: 'medium',

        mindMap: {
            central: 'Erosion',
            branches: [
                {
                    name: 'Agents of Erosion',
                    color: '#FF6B6B',
                    children: [
                        'Water (Rivers, Rain)',
                        'Wind (Aeolian)',
                        'Ice (Glaciers)',
                        'Waves (Coastal)',
                        'Gravity (Mass Wasting)'
                    ]
                },
                {
                    name: 'Processes',
                    color: '#4ECDC4',
                    children: [
                        'Hydraulic Action',
                        'Abrasion',
                        'Attrition',
                        'Corrosion/Solution'
                    ]
                },
                {
                    name: 'Erosion vs Weathering',
                    color: '#FFE66D',
                    children: [
                        'Weathering = Breaking in place',
                        'Erosion = Transport of material',
                        'Often work together'
                    ]
                },
                {
                    name: 'Factors',
                    color: '#95E1D3',
                    children: [
                        'Climate & Rainfall',
                        'Slope & Gradient',
                        'Vegetation Cover',
                        'Rock/Soil Type'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Erosion Agents',
                content: 'WWIGS = Water, Wind, Ice, Gravity, Sea (waves)',
                icon: '🧠'
            },
            {
                type: 'acronym',
                title: 'Erosion Processes',
                content: 'HAAC = Hydraulic action, Abrasion, Attrition, Corrosion',
                icon: '🔤'
            },
            {
                type: 'comparison',
                title: 'Weathering vs Erosion',
                content: 'Weathering = Chef chopping vegetables (stays on cutting board) | Erosion = Chef sweeping vegetables into pot (moving them)',
                icon: '👨‍🍳'
            },
            {
                type: 'story',
                title: 'The River\'s Journey',
                content: 'A river is like a conveyor belt - picks up material (erosion), carries it (transportation), drops it (deposition) as it loses energy!',
                icon: '🏭'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is Erosion?',
                icon: '💨',
                points: [
                    'Removal and TRANSPORT of weathered material',
                    'Requires an agent of transport',
                    'Part of the rock cycle',
                    'Followed by deposition when energy decreases',
                    'Shapes Earth\'s surface features'
                ]
            },
            {
                title: 'Erosion Processes',
                icon: '⚙️',
                points: [
                    'Hydraulic Action: Force of water on rocks',
                    'Abrasion: Rock fragments scrape surface',
                    'Attrition: Particles collide and break',
                    'Corrosion/Solution: Chemical dissolving of rock',
                    'Each agent uses these processes differently'
                ]
            },
            {
                title: 'River Erosion',
                icon: '🌊',
                points: [
                    'Vertical erosion: Deepening valley (upper course)',
                    'Lateral erosion: Widening valley (lower course)',
                    'Headward erosion: Lengthening river backwards',
                    'Creates V-shaped valleys, gorges, waterfalls',
                    'Strongest in upper course with steep gradient'
                ]
            },
            {
                title: 'Wind Erosion',
                icon: '💨',
                points: [
                    'Dominant in arid/semi-arid regions',
                    'Deflation: Wind removes loose particles',
                    'Abrasion: Sand-blast effect on rocks',
                    'Creates: Yardangs, ventifacts, desert pavement',
                    'More effective on dry, unvegetated surfaces'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Agents of Erosion',
                type: 'comparison-chart',
                description: 'Chart showing five agents (Water, Wind, Ice, Waves, Gravity) with their dominant regions and features created'
            },
            {
                title: 'River Course Erosion',
                type: 'cross-section',
                description: 'Long profile of river showing erosion types in upper, middle, and lower courses'
            },
            {
                title: 'Erosion-Transportation-Deposition Cycle',
                type: 'cycle',
                description: 'Circular diagram showing relationship between weathering, erosion, transportation, and deposition'
            }
        ],

        quickFacts: [
            '🌊 Water is the most powerful erosion agent',
            '🏜️ Wind erosion creates up to 200 million tons of dust/year',
            '🏔️ Glaciers erode 10x faster than rivers',
            '🌿 Vegetation reduces erosion by 90%',
            '🇮🇳 India loses 5,334 million tonnes of soil annually',
            '📊 1 inch of topsoil takes 500-1000 years to form',
            '🌾 Soil erosion reduces agricultural productivity by 30%',
            '🦌 Overgrazing accelerates erosion significantly'
        ],

        upscTraps: [
            {
                trap: 'Erosion is always harmful',
                clarity: 'Erosion is a NATURAL process - creates fertile deltas, beaches. Only human-accelerated erosion is problematic'
            },
            {
                trap: 'Glaciers deposit more than erode',
                clarity: 'Glaciers are POWERFUL ERODERS - they carve U-shaped valleys, fjords. Deposition comes after glacier melts'
            },
            {
                trap: 'Wind is major erosion agent everywhere',
                clarity: 'Wind erosion significant only in ARID regions. In humid areas, vegetation prevents wind erosion'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Erosion = removal + TRANSPORT of material',
                'Agents: Water (most powerful), Wind, Ice, Waves, Gravity',
                'Processes: HAAC - Hydraulic, Abrasion, Attrition, Corrosion',
                'River erosion: Vertical (upper), Lateral (lower), Headward (backward)',
                'Wind erosion: Deflation + Abrasion (deserts)',
                'Factors: Climate, slope, vegetation, rock type'
            ]
        },

        pyqs: [
            {
                year: 2019,
                question: 'Distinguish between weathering and erosion with suitable examples.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Discuss the various agents of erosion and landforms created by them.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 8: LANDFORMS OVERVIEW
    // ============================================
    {
        id: 'landforms-overview',
        name: 'Landforms Overview',
        icon: '🏞️',
        category: 'geomorphology',
        theme: 'plateau',
        difficulty: 'easy',
        upscRelevance: 'high',

        mindMap: {
            central: 'Landforms',
            branches: [
                {
                    name: 'First Order (Continents)',
                    color: '#FF6B6B',
                    children: [
                        'Continental Masses',
                        'Ocean Basins',
                        'Tectonic Origin'
                    ]
                },
                {
                    name: 'Second Order',
                    color: '#4ECDC4',
                    children: [
                        'Mountains',
                        'Plateaus',
                        'Plains',
                        'Basins'
                    ]
                },
                {
                    name: 'Third Order',
                    color: '#FFE66D',
                    children: [
                        'Valleys & Canyons',
                        'Deltas & Dunes',
                        'Caves & Cliffs',
                        'Lakes & Waterfalls'
                    ]
                },
                {
                    name: 'Forming Agents',
                    color: '#95E1D3',
                    children: [
                        'Rivers (Fluvial)',
                        'Glaciers (Glacial)',
                        'Wind (Aeolian)',
                        'Waves (Coastal)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Second Order Landforms',
                content: 'MPP = Mountains, Plateaus, Plains - The big three!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Mountains vs Plateaus',
                content: 'Mountain = Pointed hat (peak) | Plateau = Flat hat (tabletop with steep sides)',
                icon: '🎩'
            },
            {
                type: 'acronym',
                title: 'Agents Creating Landforms',
                content: 'FGAW = Fluvial (rivers), Glacial (ice), Aeolian (wind), Wave (sea)',
                icon: '🔤'
            },
            {
                type: 'story',
                title: 'Three Brothers',
                content: 'Mountains, Plateaus, and Plains are three brothers - Mountain is tallest and pointed, Plateau is tall but flat-headed, Plain is the shortest and humble!',
                icon: '👨‍👩‍👦'
            }
        ],

        conceptBlocks: [
            {
                title: 'Orders of Landforms',
                icon: '📊',
                points: [
                    '1st Order: Continents, Ocean basins (tectonic origin)',
                    '2nd Order: Mountains, Plateaus, Plains (large scale)',
                    '3rd Order: Valleys, Deltas, Dunes (erosional/depositional)',
                    'Scale decreases from 1st to 3rd order',
                    'Each order nested within larger one'
                ]
            },
            {
                title: 'Mountains',
                icon: '⛰️',
                points: [
                    'Elevated landform with peaks and slopes',
                    'Fold Mountains: Tectonic collision (Himalayas)',
                    'Block Mountains: Faulting (Vosges, Black Forest)',
                    'Volcanic Mountains: Lava accumulation (Mt. Fuji)',
                    'Residual Mountains: Erosion remnants (Aravalli)'
                ]
            },
            {
                title: 'Plateaus',
                icon: '🏔️',
                points: [
                    'Flat, elevated land with steep edges',
                    'Intermontane: Between mountains (Tibetan Plateau)',
                    'Piedmont: Foot of mountains (Patagonian)',
                    'Continental: Within continent (Deccan Plateau)',
                    'Volcanic/Lava: Lava flows (Columbia Plateau)'
                ]
            },
            {
                title: 'Plains',
                icon: '🌾',
                points: [
                    'Low, flat, extensive land areas',
                    'Structural: Formed by tectonic uplift',
                    'Depositional: River/Glacial deposits (Indo-Gangetic)',
                    'Erosional: Wearing down of highlands',
                    'Coastal: Wave deposition (coastal plains of India)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Orders of Landforms',
                type: 'hierarchy',
                description: 'Pyramid showing 1st, 2nd, and 3rd order landforms with examples'
            },
            {
                title: 'Types of Mountains',
                type: 'comparison-chart',
                description: 'Four types - Fold, Block, Volcanic, Residual - with formation process and examples'
            },
            {
                title: 'Major Landforms World Map',
                type: 'map',
                description: 'World map showing major mountain ranges, plateaus, and plains'
            }
        ],

        quickFacts: [
            '🏔️ Himalayas are youngest fold mountains',
            '📊 Tibetan Plateau is highest and largest plateau',
            '🌾 Indo-Gangetic Plain is one of largest alluvial plains',
            '🗻 Aravalli is oldest mountain range in India',
            '🌊 Amazon Basin is world\'s largest drainage basin',
            '🏜️ Deccan Plateau covers 43% of India',
            '⛰️ Andes is longest mountain range (7,000 km)',
            '🌍 Plains cover about 55% of Earth\'s land'
        ],

        upscTraps: [
            {
                trap: 'All mountains formed by folding',
                clarity: 'Mountains also form by: Faulting (Block), Volcanoes (Volcanic), Erosion resistance (Residual)'
            },
            {
                trap: 'Plateaus are always flat',
                clarity: 'Plateaus have flat TOP but can have dissected, rugged surface. "Tableland" doesn\'t mean smooth'
            },
            {
                trap: 'Plains are only formed by rivers',
                clarity: 'Plains also form by: Glacial deposits, Lava flows, Wind deposits, Wave action, Tectonic uplift'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Orders: 1st (continents) → 2nd (mountains, plateaus, plains) → 3rd (valleys, deltas)',
                'Mountains: Fold (Himalayas), Block (Vosges), Volcanic (Fuji), Residual (Aravalli)',
                'Plateaus: Intermontane (Tibet), Piedmont, Continental (Deccan), Volcanic',
                'Plains: Structural, Depositional (Indo-Gangetic), Erosional, Coastal',
                'Agents: Rivers, Glaciers, Wind, Waves',
                'India: Himalayas (fold), Aravalli (residual), Deccan (volcanic plateau)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Classify landforms based on their order and give examples.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which type of plateau is the Tibetan Plateau?',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'Discuss the formation of fold mountains with suitable examples.',
                type: 'Mains'
            }
        ]
    }

];

// Make data available globally
window.geomorphologyData = geomorphologyData;

console.log('🌋 Geomorphology Data Loaded:', geomorphologyData.length, 'topics');
