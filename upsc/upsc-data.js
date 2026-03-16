/* ═══════════════════════════════════════════════════════════════
   🌍 UPSC GEOGRAPHY - COMPLETE DATA FILE
   All Topics with Mind Maps, Mnemonics, Concepts, Diagrams
   ═══════════════════════════════════════════════════════════════ */

const UPSC_GEOGRAPHY_DATA = {

    // ═══════════════════════════════════════════════════════════════
    // 📚 CATEGORIES DEFINITION
    // ═══════════════════════════════════════════════════════════════
    
    categories: [
        {
            id: "physical",
            name: "Physical Geography",
            icon: "fas fa-mountain",
            description: "Earth's physical features, climate, oceans & landforms",
            color: "linear-gradient(135deg, #667eea, #764ba2)",
            subcategories: ["geomorphology", "climatology", "oceanography", "biogeography"]
        },
        {
            id: "india",
            name: "Geography of India",
            icon: "fas fa-flag",
            description: "India's terrain, climate, rivers & resources",
            color: "linear-gradient(135deg, #f093fb, #f5576c)",
            subcategories: ["physical-india", "drainage", "climate-india", "vegetation-india", "resources", "human-geo"]
        },
        {
            id: "economic",
            name: "Economic Geography",
            icon: "fas fa-chart-line",
            description: "Agriculture, industries, settlements & planning",
            color: "linear-gradient(135deg, #4facfe, #00f2fe)",
            subcategories: ["economic-activities", "settlements", "regional-planning"]
        },
        {
            id: "environment",
            name: "Models & Environment",
            icon: "fas fa-leaf",
            description: "Geographical models, environment & mapping",
            color: "linear-gradient(135deg, #43e97b, #38f9d7)",
            subcategories: ["models", "environment", "mapping"]
        }
    ],

    // ═══════════════════════════════════════════════════════════════
    // 🌋 I. PHYSICAL GEOGRAPHY - GEOMORPHOLOGY
    // ═══════════════════════════════════════════════════════════════

    topics: [

        // ─────────────────────────────────────────
        // 🌍 EARTH'S INTERIOR
        // ─────────────────────────────────────────
        {
            id: "earth-interior",
            name: "Earth's Interior",
            category: "physical",
            subcategory: "geomorphology",
            theme: "tectonic",
            difficulty: "medium",
            importance: "high",
            studyTime: "45 min",
            
            // 1️⃣ VISUAL MIND MAP
            mindMap: {
                center: "🌍 Earth's Interior",
                branches: [
                    {
                        name: "🔴 CRUST",
                        color: "#e74c3c",
                        subs: [
                            "Continental (35-70 km) - SIAL",
                            "Oceanic (5-10 km) - SIMA",
                            "Density: 2.7-3.0 g/cm³",
                            "Made of silicates"
                        ]
                    },
                    {
                        name: "🟠 MANTLE",
                        color: "#e67e22",
                        subs: [
                            "Upper Mantle (Asthenosphere)",
                            "Lower Mantle (Mesosphere)",
                            "Depth: 35-2900 km",
                            "Contains magma"
                        ]
                    },
                    {
                        name: "🟡 CORE",
                        color: "#f1c40f",
                        subs: [
                            "Outer Core (Liquid)",
                            "Inner Core (Solid)",
                            "Made of Iron & Nickel",
                            "Temp: 5000-6000°C"
                        ]
                    },
                    {
                        name: "📊 EVIDENCE",
                        color: "#9b59b6",
                        subs: [
                            "Seismic waves (P & S)",
                            "Meteorite composition",
                            "Volcanic eruptions",
                            "Density calculations"
                        ]
                    }
                ]
            },

            // 2️⃣ MEMORY HOOKS / MNEMONICS
            mnemonics: [
                {
                    title: "Remember Layers: 'COMO'",
                    trick: "C-O-M-O",
                    meaning: [
                        { letter: "C", word: "Crust", hint: "Outer thin shell" },
                        { letter: "O", word: "Outer Mantle", hint: "Semi-solid" },
                        { letter: "M", word: "Middle Mantle", hint: "Flowing rock" },
                        { letter: "O", word: "Outer/Inner Core", hint: "Iron heart" }
                    ],
                    visual: "🥚 Think of Earth like a BOILED EGG - Shell (Crust), White (Mantle), Yolk (Core)"
                },
                {
                    title: "SIAL vs SIMA Memory",
                    trick: "SIAL = SIt on ALuminium chair (Light, Continental)\nSIMA = SInk in MAgma pool (Heavy, Oceanic)",
                    visual: "🪑 Continental crust FLOATS like sitting\n🏊 Oceanic crust SINKS like swimming down"
                },
                {
                    title: "Seismic Waves: 'PS I Love You'",
                    trick: "P-S-I-L-Y",
                    meaning: [
                        { letter: "P", word: "Primary waves", hint: "Fastest, through all" },
                        { letter: "S", word: "Secondary waves", hint: "Slower, not through liquid" }
                    ],
                    visual: "💌 P waves deliver letter FIRST, S waves come SECOND"
                }
            ],

            // 3️⃣ MICRO CONCEPT BLOCKS
            concepts: [
                {
                    title: "🔴 The Crust - Earth's Skin",
                    icon: "🌏",
                    points: [
                        "• Thinnest layer - only 1% of Earth's volume",
                        "• Continental crust (SIAL) = Silicon + Aluminium, avg 35km thick",
                        "• Oceanic crust (SIMA) = Silicon + Magnesium, only 5-10km thick",
                        "• Oceanic crust is DENSER but THINNER than continental"
                    ]
                },
                {
                    title: "🟠 The Mantle - Flowing Rock",
                    icon: "🔥",
                    points: [
                        "• 84% of Earth's volume, 2900 km thick",
                        "• Upper mantle has ASTHENOSPHERE - semi-molten, plates float here",
                        "• Convection currents in mantle DRIVE plate tectonics",
                        "• Temperature: 1000°C to 3700°C (increases with depth)"
                    ]
                },
                {
                    title: "🟡 The Core - Earth's Engine",
                    icon: "⚡",
                    points: [
                        "• Outer Core: LIQUID iron-nickel, creates magnetic field",
                        "• Inner Core: SOLID despite 6000°C (extreme pressure)",
                        "• Core is size of Mars! Radius = 3,486 km",
                        "• Earth's magnetism protects us from solar radiation"
                    ]
                },
                {
                    title: "📊 How Do We Know? - Evidence",
                    icon: "🔬",
                    points: [
                        "• P-waves pass through ALL layers, S-waves STOP at liquid outer core",
                        "• Shadow zones prove liquid core exists (103° to 142°)",
                        "• Meteorites contain same iron-nickel = similar to core",
                        "• Volcanic lava tells us about mantle composition"
                    ]
                }
            ],

            // 4️⃣ VISUAL DIAGRAMS
            diagrams: [
                {
                    type: "cross-section",
                    title: "Earth's Layers Cross-Section",
                    icon: "🌍",
                    description: "Cut-away view showing Crust → Mantle → Outer Core → Inner Core with depth & temperature at each level"
                },
                {
                    type: "comparison",
                    title: "Continental vs Oceanic Crust",
                    icon: "⚖️",
                    description: "Side-by-side comparison showing SIAL (thick, light) vs SIMA (thin, dense)"
                },
                {
                    type: "wave-diagram",
                    title: "Seismic Wave Paths",
                    icon: "📈",
                    description: "Shows P-waves bending through core, S-waves creating shadow zone"
                }
            ],

            // 5️⃣ QUICK FACTS
            quickFacts: [
                { icon: "📏", fact: "Crust is only 1% of Earth's total volume" },
                { icon: "🌡️", fact: "Inner core temperature = 5,000-6,000°C (as hot as Sun's surface!)" },
                { icon: "🧲", fact: "Earth's magnetic field is generated by liquid outer core movements" },
                { icon: "⚡", fact: "P-waves travel at 8 km/sec in crust, 13 km/sec in core" },
                { icon: "🔬", fact: "Deepest drill (Kola borehole) reached only 12 km - still in crust!" },
                { icon: "📊", fact: "Mantle makes up 84% of Earth's volume" },
                { icon: "🌋", fact: "Asthenosphere's convection currents = engine of plate tectonics" }
            ],

            // 6️⃣ COMMON UPSC TRAPS
            traps: [
                {
                    wrong: "Inner core is liquid because of high temperature",
                    correct: "Inner core is SOLID - extreme pressure overcomes temperature",
                    explanation: "High pressure raises melting point, keeping inner core solid despite 6000°C"
                },
                {
                    wrong: "Continental crust is thinner than oceanic crust",
                    correct: "Continental crust is THICKER (35-70 km) than oceanic (5-10 km)",
                    explanation: "Continental is thicker but LESS dense (floats higher)"
                },
                {
                    wrong: "S-waves can travel through all layers",
                    correct: "S-waves CANNOT pass through liquid outer core",
                    explanation: "S-waves need solid medium - this proves outer core is liquid"
                },
                {
                    wrong: "Moho discontinuity is between mantle and core",
                    correct: "Moho is between CRUST and MANTLE (Gutenberg is mantle-core)",
                    explanation: "Mohorovicic discontinuity at ~35km depth marks crust-mantle boundary"
                }
            ],

            // 7️⃣ SUPER FAST REVISION
            revision: {
                oneLiner: "Earth = Crust (SIAL/SIMA) + Mantle (convection) + Core (magnetic field). P-waves through all, S-waves stop at liquid core.",
                keyPoints: [
                    "Crust: 1% volume, SIAL (continental), SIMA (oceanic)",
                    "Mantle: 84% volume, asthenosphere has convection currents",
                    "Core: Outer liquid (magnetism), Inner solid (pressure > heat)",
                    "Evidence: Seismic waves, shadow zones, meteorites"
                ],
                examTip: "Remember discontinuities: MOHO (crust-mantle), GUTENBERG (mantle-core), LEHMANN (outer-inner core)"
            }
        },

        // ─────────────────────────────────────────
        // 🌍 PLATE TECTONICS
        // ─────────────────────────────────────────
        {
            id: "plate-tectonics",
            name: "Plate Tectonics",
            category: "physical",
            subcategory: "geomorphology",
            theme: "tectonic",
            difficulty: "high",
            importance: "very-high",
            studyTime: "60 min",

            mindMap: {
                center: "🌍 Plate Tectonics",
                branches: [
                    {
                        name: "📋 MAJOR PLATES",
                        color: "#3498db",
                        subs: [
                            "Pacific Plate (largest)",
                            "North American Plate",
                            "Eurasian Plate",
                            "African Plate",
                            "Antarctic Plate",
                            "Indo-Australian Plate",
                            "South American Plate"
                        ]
                    },
                    {
                        name: "🔄 PLATE BOUNDARIES",
                        color: "#e74c3c",
                        subs: [
                            "Divergent (moving apart)",
                            "Convergent (colliding)",
                            "Transform (sliding past)"
                        ]
                    },
                    {
                        name: "⚡ DRIVING FORCES",
                        color: "#f39c12",
                        subs: [
                            "Convection currents",
                            "Ridge push",
                            "Slab pull",
                            "Mantle plumes"
                        ]
                    },
                    {
                        name: "🌋 RESULTS",
                        color: "#9b59b6",
                        subs: [
                            "Earthquakes",
                            "Volcanoes",
                            "Mountain building",
                            "Ocean trenches"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "7 Major Plates: 'PENSAIA'",
                    trick: "P-E-N-S-A-I-A",
                    meaning: [
                        { letter: "P", word: "Pacific", hint: "Largest plate" },
                        { letter: "E", word: "Eurasian", hint: "Europe + Asia" },
                        { letter: "N", word: "North American", hint: "USA + Canada" },
                        { letter: "S", word: "South American", hint: "Brazil etc." },
                        { letter: "A", word: "African", hint: "Africa" },
                        { letter: "I", word: "Indo-Australian", hint: "India + Australia" },
                        { letter: "A", word: "Antarctic", hint: "South Pole" }
                    ],
                    visual: "🗺️ Imagine PENSAIA as a giant puzzle with 7 moving pieces!"
                },
                {
                    title: "Boundary Types: 'DeCT'",
                    trick: "De-C-T",
                    meaning: [
                        { letter: "De", word: "Divergent", hint: "Divide/Depart = move apart" },
                        { letter: "C", word: "Convergent", hint: "Collide/Come together" },
                        { letter: "T", word: "Transform", hint: "Turn/Twist sideways" }
                    ],
                    visual: "👐 Hands: Pull apart (Divergent), Push together (Convergent), Slide past (Transform)"
                },
                {
                    title: "Convergent Types: 'COO'",
                    trick: "C-O-O",
                    meaning: [
                        { letter: "C", word: "Continental-Continental", hint: "Himalayas" },
                        { letter: "O", word: "Oceanic-Continental", hint: "Andes" },
                        { letter: "O", word: "Oceanic-Oceanic", hint: "Mariana Trench" }
                    ],
                    visual: "🏔️ COO like a dove = Creates mountains peacefully over millions of years"
                }
            ],

            concepts: [
                {
                    title: "🔄 What is Plate Tectonics?",
                    icon: "🌍",
                    points: [
                        "• Earth's crust broken into 15+ plates floating on asthenosphere",
                        "• Plates move 2-15 cm/year (fingernail growth speed!)",
                        "• Boundaries are where earthquakes & volcanoes concentrate",
                        "• Theory explains mountain building, ocean formation, continental drift"
                    ]
                },
                {
                    title: "⬅️➡️ Divergent Boundaries",
                    icon: "↔️",
                    points: [
                        "• Plates move APART - new crust forms from rising magma",
                        "• Creates mid-ocean ridges (Mid-Atlantic Ridge)",
                        "• On land: Rift valleys (East African Rift)",
                        "• Features: Shallow earthquakes, volcanic activity, new seafloor"
                    ]
                },
                {
                    title: "➡️⬅️ Convergent Boundaries",
                    icon: "💥",
                    points: [
                        "• Ocean-Ocean: Denser plate subducts → Trenches + Island arcs (Japan)",
                        "• Ocean-Continent: Ocean subducts → Coastal mountains (Andes)",
                        "• Continent-Continent: Neither subducts → Fold mountains (Himalayas)",
                        "• Features: Deep earthquakes, explosive volcanoes, mountain chains"
                    ]
                },
                {
                    title: "↕️ Transform Boundaries",
                    icon: "⚡",
                    points: [
                        "• Plates slide PAST each other horizontally",
                        "• No crust created or destroyed",
                        "• Example: San Andreas Fault (California)",
                        "• Features: Shallow but powerful earthquakes, no volcanoes"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "world-map",
                    title: "World Tectonic Plates Map",
                    icon: "🗺️",
                    description: "Shows all 15 major/minor plates with boundaries marked - divergent (red), convergent (blue), transform (green)"
                },
                {
                    type: "cross-section",
                    title: "Three Boundary Types",
                    icon: "📐",
                    description: "Side-view showing divergent spreading, convergent subduction, transform sliding"
                },
                {
                    type: "process",
                    title: "Convection Current Engine",
                    icon: "🔄",
                    description: "Circular arrows showing hot mantle rising at ridges, cooling & sinking at trenches"
                }
            ],

            quickFacts: [
                { icon: "📏", fact: "Pacific Plate is LARGEST - covers 103 million km²" },
                { icon: "🏃", fact: "Plates move 2-15 cm/year - same as fingernail growth" },
                { icon: "🏔️", fact: "Himalayas grow 1 cm/year due to India-Eurasia collision" },
                { icon: "🌊", fact: "Atlantic Ocean widens 2.5 cm/year at Mid-Atlantic Ridge" },
                { icon: "⬇️", fact: "Mariana Trench (11 km deep) = Pacific plate subducting under Philippine" },
                { icon: "🔥", fact: "Ring of Fire has 75% of world's active volcanoes" },
                { icon: "📍", fact: "Juan de Fuca is smallest major plate (near Oregon coast)" }
            ],

            traps: [
                {
                    wrong: "Himalayas formed by oceanic plate subducting",
                    correct: "Himalayas = Continental-Continental collision (no subduction)",
                    explanation: "Both plates are buoyant - neither subducts, they crumple upward"
                },
                {
                    wrong: "Transform boundaries create volcanoes",
                    correct: "Transform boundaries have NO volcanic activity",
                    explanation: "No magma rises - plates just slide past each other"
                },
                {
                    wrong: "Indian plate is separate from Australian plate",
                    correct: "Indo-Australian Plate is ONE plate (though breaking apart slowly)",
                    explanation: "Traditionally considered one plate, recent evidence shows slow separation"
                },
                {
                    wrong: "Pacific plate is entirely oceanic",
                    correct: "Pacific plate is MOSTLY oceanic but has small continental parts",
                    explanation: "New Zealand, parts of California sit on Pacific plate edges"
                }
            ],

            revision: {
                oneLiner: "15 plates on asthenosphere move by convection. Divergent = apart (ridges), Convergent = together (mountains/trenches), Transform = slide (earthquakes).",
                keyPoints: [
                    "7 major plates: PENSAIA (Pacific, Eurasian, N.American, S.American, African, Indo-Australian, Antarctic)",
                    "Divergent: Mid-ocean ridges, rift valleys (new crust)",
                    "Convergent: Subduction zones, fold mountains (crust destroyed/uplifted)",
                    "Transform: San Andreas type (crust preserved, earthquakes)"
                ],
                examTip: "Ring of Fire = Pacific plate boundaries. Himalayas = India colliding with Eurasia at 5cm/year for 50 million years"
            }
        },

        // ─────────────────────────────────────────
        // 🌍 CONTINENTAL DRIFT
        // ─────────────────────────────────────────
        {
            id: "continental-drift",
            name: "Continental Drift Theory",
            category: "physical",
            subcategory: "geomorphology",
            theme: "tectonic",
            difficulty: "medium",
            importance: "high",
            studyTime: "30 min",

            mindMap: {
                center: "🗺️ Continental Drift",
                branches: [
                    {
                        name: "👤 WEGENER'S THEORY",
                        color: "#3498db",
                        subs: [
                            "Proposed in 1912",
                            "Pangaea = supercontinent",
                            "Panthalassa = super ocean",
                            "Continents 'drifted' apart"
                        ]
                    },
                    {
                        name: "🔍 EVIDENCE",
                        color: "#2ecc71",
                        subs: [
                            "Jigsaw Fit (coastlines match)",
                            "Fossil evidence (same species)",
                            "Rock formations match",
                            "Glacial deposits alignment",
                            "Coal in Antarctica"
                        ]
                    },
                    {
                        name: "❌ CRITICISMS",
                        color: "#e74c3c",
                        subs: [
                            "No mechanism explained",
                            "Weak driving force idea",
                            "Rejected initially"
                        ]
                    },
                    {
                        name: "✅ MODERN PROOF",
                        color: "#9b59b6",
                        subs: [
                            "Seafloor spreading",
                            "Magnetic striping",
                            "GPS measurements",
                            "Now = Plate Tectonics"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Wegener's Evidence: 'FROG-C'",
                    trick: "F-R-O-G-C",
                    meaning: [
                        { letter: "F", word: "Fit of coastlines", hint: "Africa-S.America jigsaw" },
                        { letter: "R", word: "Rock formations", hint: "Same age rocks match" },
                        { letter: "O", word: "Old glacial deposits", hint: "Striations align" },
                        { letter: "G", word: "Glossopteris flora", hint: "Same plant fossils" },
                        { letter: "C", word: "Creature fossils", hint: "Mesosaurus in both" }
                    ],
                    visual: "🐸 A FROG jumped from Africa to South America when they were joined!"
                },
                {
                    title: "Pangaea Timeline: 'PLGJCT'",
                    trick: "Pan-Lau-Gon-Ju-Cre-Today",
                    meaning: [
                        { letter: "Pan", word: "Pangaea", hint: "300 mya - all together" },
                        { letter: "Lau", word: "Laurasia", hint: "Northern supercontinent" },
                        { letter: "Gon", word: "Gondwana", hint: "Southern supercontinent" },
                        { letter: "Split", word: "Jurassic breakup", hint: "180 mya" },
                        { letter: "Cre", word: "Cretaceous separation", hint: "100 mya" },
                        { letter: "Today", word: "Present positions", hint: "Still moving!" }
                    ],
                    visual: "📅 Pangaea → Laurasia+Gondwana → Individual continents → Today"
                }
            ],

            concepts: [
                {
                    title: "🗺️ Wegener's Big Idea (1912)",
                    icon: "💡",
                    points: [
                        "• All continents were once joined = PANGAEA ('all lands')",
                        "• Surrounded by single ocean = PANTHALASSA ('all seas')",
                        "• ~200 million years ago, Pangaea broke apart",
                        "• Continents 'drifted' to current positions over time"
                    ]
                },
                {
                    title: "🧩 The Jigsaw Evidence",
                    icon: "🔍",
                    points: [
                        "• South America's east coast FITS Africa's west coast perfectly",
                        "• If you match continental shelves - even better fit!",
                        "• Mountains in Africa align with mountains in South America",
                        "• Appalachians (USA) match Caledonian mountains (Scotland/Norway)"
                    ]
                },
                {
                    title: "🦎 Fossil Evidence",
                    icon: "🦴",
                    points: [
                        "• MESOSAURUS: Freshwater reptile found ONLY in Brazil & South Africa",
                        "• GLOSSOPTERIS: Fern fossils in India, Australia, Africa, Antarctica, S.America",
                        "• CYNOGNATHUS & LYSTROSAURUS: Land animals - couldn't swim across oceans",
                        "• All these prove continents were CONNECTED once"
                    ]
                },
                {
                    title: "🧊 Climate Evidence",
                    icon: "❄️",
                    points: [
                        "• COAL deposits in Antarctica = once had tropical forests!",
                        "• Glacial scratches (striations) in India, Africa, Australia align",
                        "• All point to single ice sheet over southern Gondwana",
                        "• Desert sandstones in Europe = once near equator"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "map-sequence",
                    title: "Pangaea Breakup Animation",
                    icon: "🎬",
                    description: "4-frame sequence: Pangaea (300mya) → Laurasia/Gondwana (200mya) → Separation (100mya) → Today"
                },
                {
                    type: "matching",
                    title: "Continental Fit Map",
                    icon: "🧩",
                    description: "Shows how South America and Africa coastlines match like puzzle pieces"
                },
                {
                    type: "distribution-map",
                    title: "Fossil Evidence Distribution",
                    icon: "🦴",
                    description: "World map showing where Mesosaurus, Glossopteris, Cynognathus fossils found"
                }
            ],

            quickFacts: [
                { icon: "📅", fact: "Pangaea existed ~335-200 million years ago" },
                { icon: "👤", fact: "Alfred Wegener - German meteorologist, proposed theory in 1912" },
                { icon: "🧊", fact: "Wegener died in 1930 - theory only accepted in 1960s after seafloor spreading discovered" },
                { icon: "🌊", fact: "Atlantic Ocean didn't exist 200 mya - formed as Americas separated from Africa/Europe" },
                { icon: "🦎", fact: "Mesosaurus was freshwater reptile - couldn't have crossed salty oceans" },
                { icon: "🏔️", fact: "Himalayas formed when India (from Gondwana) collided with Eurasia" },
                { icon: "📏", fact: "Africa and South America separate by 2-3 cm per year" }
            ],

            traps: [
                {
                    wrong: "Wegener said continents plowed through ocean floor",
                    correct: "Wegener couldn't explain mechanism - this was his theory's WEAKNESS",
                    explanation: "He suggested centrifugal force & tidal forces - both too weak"
                },
                {
                    wrong: "Continental drift and plate tectonics are the same theory",
                    correct: "Continental drift is older concept; Plate tectonics is modern, complete theory",
                    explanation: "Plate tectonics explains HOW (seafloor spreading, convection) while drift just said WHAT happened"
                },
                {
                    wrong: "Gondwana included North America",
                    correct: "Gondwana = SOUTHERN landmass (India, Africa, Antarctica, Australia, S.America)",
                    explanation: "Laurasia = Northern (N.America, Europe, Asia)"
                },
                {
                    wrong: "India was always part of Asia",
                    correct: "India was part of GONDWANA, separated, moved north, collided with Asia",
                    explanation: "India-Asia collision (50 mya) created Himalayas - still ongoing!"
                }
            ],

            revision: {
                oneLiner: "Wegener (1912): Pangaea broke into Laurasia (N) + Gondwana (S). Evidence = FROG-C (Fit, Rocks, Old glacials, Glossopteris, Creatures).",
                keyPoints: [
                    "Pangaea (300 mya) → Laurasia + Gondwana (200 mya) → Today's continents",
                    "Evidence: Coastline fit, matching fossils, rock formations, glacial deposits",
                    "Key fossils: Mesosaurus, Glossopteris, Cynognathus, Lystrosaurus",
                    "Theory rejected until 1960s seafloor spreading proved mechanism"
                ],
                examTip: "Remember: Wegener was a METEOROLOGIST, not geologist - scientific community initially rejected his theory!"
            }
        },

        // ─────────────────────────────────────────
        // 🌋 VOLCANOES
        // ─────────────────────────────────────────
        {
            id: "volcanoes",
            name: "Volcanoes",
            category: "physical",
            subcategory: "geomorphology",
            theme: "volcano",
            difficulty: "medium",
            importance: "very-high",
            studyTime: "50 min",

            mindMap: {
                center: "🌋 Volcanoes",
                branches: [
                    {
                        name: "🔥 TYPES BY SHAPE",
                        color: "#e74c3c",
                        subs: [
                            "Shield (gentle, basaltic)",
                            "Composite/Stratovolcano",
                            "Cinder Cone (smallest)",
                            "Caldera (collapsed)"
                        ]
                    },
                    {
                        name: "⚡ TYPES BY ACTIVITY",
                        color: "#f39c12",
                        subs: [
                            "Active (erupted recently)",
                            "Dormant (sleeping)",
                            "Extinct (dead)"
                        ]
                    },
                    {
                        name: "📍 DISTRIBUTION",
                        color: "#3498db",
                        subs: [
                            "Ring of Fire (Pacific)",
                            "Mid-ocean ridges",
                            "Hotspots (Hawaii)",
                            "Rift valleys (Africa)"
                        ]
                    },
                    {
                        name: "🧱 PRODUCTS",
                        color: "#9b59b6",
                        subs: [
                            "Lava flows",
                            "Pyroclastic materials",
                            "Volcanic gases",
                            "Ash clouds"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Volcano Types: 'SCC = Small to Big Explosion'",
                    trick: "S-C-C",
                    meaning: [
                        { letter: "S", word: "Shield", hint: "Smooth, gentle, Hawaiian type" },
                        { letter: "C", word: "Composite", hint: "Classic cone shape, explosive" },
                        { letter: "C", word: "Cinder Cone", hint: "Compact, small, steep" }
                    ],
                    visual: "🛡️ Shield = flat shield shape, Composite = perfect triangle, Cinder = small pile of ash"
                },
                {
                    title: "Ring of Fire Countries: 'JAPAN CHIPS'",
                    trick: "J-A-P-A-N C-H-I-P-S",
                    meaning: [
                        { letter: "J", word: "Japan", hint: "Mount Fuji" },
                        { letter: "A", word: "Alaska/Aleutians", hint: "USA" },
                        { letter: "P", word: "Philippines", hint: "Taal, Pinatubo" },
                        { letter: "A", word: "Andes (Chile/Peru)", hint: "Cotopaxi" },
                        { letter: "N", word: "New Zealand", hint: "White Island" },
                        { letter: "C", word: "Central America", hint: "Guatemala" },
                        { letter: "I", word: "Indonesia", hint: "Krakatoa, Merapi" },
                        { letter: "P", word: "Pacific islands", hint: "Tonga, Fiji" },
                        { letter: "S", word: "South America west", hint: "Andes chain" }
                    ],
                    visual: "🍟 Ring of Fire shaped like circular CHIPS around Pacific!"
                },
                {
                    title: "Active-Dormant-Extinct: 'ADE like Lemonade'",
                    trick: "A-D-E",
                    meaning: [
                        { letter: "A", word: "Active", hint: "Currently erupting or recently erupted" },
                        { letter: "D", word: "Dormant", hint: "Sleeping but can wake up" },
                        { letter: "E", word: "Extinct", hint: "Dead, no magma supply" }
                    ],
                    visual: "🍋 Like lemonade stages: Fresh (Active), Stale (Dormant), Evaporated (Extinct)"
                }
            ],

            concepts: [
                {
                    title: "🛡️ Shield Volcanoes",
                    icon: "🌊",
                    points: [
                        "• Broad, gently sloping sides - shaped like warrior's shield",
                        "• Made of fluid BASALTIC lava - flows far before cooling",
                        "• Non-explosive, effusive eruptions",
                        "• Examples: Mauna Loa, Mauna Kea (Hawaii) - largest volcanoes on Earth!"
                    ]
                },
                {
                    title: "🗻 Composite/Stratovolcanoes",
                    icon: "⛰️",
                    points: [
                        "• Classic steep-sided cone shape",
                        "• Built of alternating LAVA + ASH layers (strato = layers)",
                        "• EXPLOSIVE eruptions - viscous andesitic/rhyolitic lava",
                        "• Examples: Mt. Fuji, Mt. Vesuvius, Mt. St. Helens, Mt. Pinatubo"
                    ]
                },
                {
                    title: "🔥 Cinder Cones",
                    icon: "🎯",
                    points: [
                        "• Smallest type - usually < 300m height",
                        "• Steep sides made of loose pyroclastic fragments",
                        "• Short eruption periods, often single eruption",
                        "• Example: Paricutin (Mexico) - grew in farmer's field in 1943!"
                    ]
                },
                {
                    title: "🕳️ Calderas",
                    icon: "⭕",
                    points: [
                        "• Large depression formed when volcano COLLAPSES after eruption",
                        "• Can be tens of kilometers wide",
                        "• Often fill with water = crater lakes",
                        "• Examples: Yellowstone, Crater Lake (Oregon), Santorini (Greece)"
                    ]
                },
                {
                    title: "🌏 Distribution Patterns",
                    icon: "🗺️",
                    points: [
                        "• RING OF FIRE: 75% of active volcanoes, circles Pacific plate",
                        "• MID-OCEAN RIDGES: Iceland sits on spreading ridge (divergent)",
                        "• HOTSPOTS: Hawaii, Yellowstone - magma plumes from deep mantle",
                        "• RIFT VALLEYS: East African Rift - continent splitting"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "comparison",
                    title: "Volcano Types Comparison",
                    icon: "📊",
                    description: "Side-by-side profiles showing Shield (gentle), Composite (steep), Cinder Cone (small steep)"
                },
                {
                    type: "cross-section",
                    title: "Inside a Volcano",
                    icon: "🌋",
                    description: "Cutaway showing magma chamber, conduit/pipe, crater, side vent, lava flow, ash cloud"
                },
                {
                    type: "world-map",
                    title: "Ring of Fire Map",
                    icon: "🔥",
                    description: "Pacific Ocean with Ring of Fire marked, showing major volcanoes along the belt"
                }
            ],

            quickFacts: [
                { icon: "📊", fact: "Ring of Fire = 40,000 km horseshoe shape, 452 volcanoes" },
                { icon: "🏔️", fact: "Mauna Loa (Hawaii) = largest volcano on Earth (taller than Everest from seafloor!)" },
                { icon: "💨", fact: "Pinatubo (1991) lowered global temperature by 0.5°C for 2 years" },
                { icon: "🇮🇳", fact: "India's only active volcano = Barren Island (Andaman & Nicobar)" },
                { icon: "⚡", fact: "Indonesia has 130+ active volcanoes - most of any country" },
                { icon: "🌋", fact: "Supervolcano Yellowstone eruption could cover USA in ash" },
                { icon: "🏃", fact: "Pyroclastic flows travel up to 700 km/h - faster than any car!" }
            ],

            traps: [
                {
                    wrong: "All volcanoes are at plate boundaries",
                    correct: "Hotspot volcanoes (Hawaii, Yellowstone) are in middle of plates",
                    explanation: "Hotspots are fed by mantle plumes rising from deep Earth"
                },
                {
                    wrong: "Shield volcanoes are more dangerous than composite",
                    correct: "Composite/Stratovolcanoes are MORE dangerous (explosive)",
                    explanation: "Shield = gentle lava flow. Composite = explosive ash, pyroclastic flows"
                },
                {
                    wrong: "Dormant volcanoes are safe",
                    correct: "Dormant = sleeping, CAN erupt again (Mt. Pinatubo was dormant 600 years!)",
                    explanation: "Only EXTINCT volcanoes have no chance of eruption"
                },
                {
                    wrong: "Deccan Traps are mountains",
                    correct: "Deccan Traps are flood basalt deposits from massive volcanic eruptions",
                    explanation: "Formed 66 million years ago - may have contributed to dinosaur extinction"
                }
            ],

            revision: {
                oneLiner: "Shield (gentle, Hawaii), Composite (explosive, Fuji), Cinder (small). Ring of Fire = 75% active volcanoes around Pacific. Hotspots = mid-plate (Hawaii, Yellowstone).",
                keyPoints: [
                    "Shield: Basaltic, gentle, largest (Mauna Loa)",
                    "Composite: Layers of lava+ash, explosive (Fuji, Vesuvius)",
                    "Ring of Fire: Pacific plate boundaries, 452 volcanoes",
                    "India: Barren Island (active), Narcondam (dormant), Deccan Traps (extinct flood basalt)"
                ],
                examTip: "Remember VEI (Volcanic Explosivity Index) - Pinatubo was VEI 6, Tambora (1815) was VEI 7 - caused 'Year Without Summer'"
            }
        },

        // ─────────────────────────────────────────
        // 🌍 EARTHQUAKES
        // ─────────────────────────────────────────
        {
            id: "earthquakes",
            name: "Earthquakes",
            category: "physical",
            subcategory: "geomorphology",
            theme: "tectonic",
            difficulty: "medium",
            importance: "very-high",
            studyTime: "50 min",

            mindMap: {
                center: "🌍 Earthquakes",
                branches: [
                    {
                        name: "📍 KEY TERMS",
                        color: "#e74c3c",
                        subs: [
                            "Focus/Hypocenter (origin)",
                            "Epicenter (surface above)",
                            "Fault line (fracture)",
                            "Seismic waves"
                        ]
                    },
                    {
                        name: "🌊 WAVE TYPES",
                        color: "#3498db",
                        subs: [
                            "P-waves (Primary, fastest)",
                            "S-waves (Secondary, slower)",
                            "L-waves (Surface, destructive)"
                        ]
                    },
                    {
                        name: "📏 MEASUREMENT",
                        color: "#f39c12",
                        subs: [
                            "Richter Scale (magnitude)",
                            "Mercalli Scale (intensity)",
                            "Seismograph (instrument)"
                        ]
                    },
                    {
                        name: "📍 ZONES IN INDIA",
                        color: "#27ae60",
                        subs: [
                            "Zone V (Very High Risk)",
                            "Zone IV (High Risk)",
                            "Zone III (Moderate)",
                            "Zone II (Low)"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Seismic Waves Order: 'PSL = Please Stay Low'",
                    trick: "P-S-L",
                    meaning: [
                        { letter: "P", word: "Primary waves", hint: "Fastest, first to arrive, through solids & liquids" },
                        { letter: "S", word: "Secondary waves", hint: "Slower, second to arrive, only through solids" },
                        { letter: "L", word: "Long/Surface waves", hint: "Slowest but MOST destructive" }
                    ],
                    visual: "🏃 In earthquake: Please Stay Low for safety - P, S, L order of arrival!"
                },
                {
                    title: "Focus vs Epicenter: 'FUG = Focus Under Ground'",
                    trick: "F-U-G",
                    meaning: [
                        { letter: "F", word: "Focus", hint: "Point of origin INSIDE Earth" },
                        { letter: "U", word: "Under", hint: "Below the surface" },
                        { letter: "G", word: "Ground", hint: "Epicenter is on ground surface above" }
                    ],
                    visual: "📍 Focus = underground origin, Epicenter = surface point directly above"
                },
                {
                    title: "India Earthquake Zones: 'KANG Gets Hot'",
                    trick: "K-A-N-G",
                    meaning: [
                        { letter: "K", word: "Kashmir", hint: "Zone V" },
                        { letter: "A", word: "Andaman", hint: "Zone V" },
                        { letter: "N", word: "Northeast", hint: "Zone V" },
                        { letter: "G", word: "Gujarat (Kutch)", hint: "Zone V" }
                    ],
                    visual: "🔥 KANG areas are HOTTEST for earthquakes - Zone V = most dangerous!"
                }
            ],

            concepts: [
                {
                    title: "⚡ What Causes Earthquakes?",
                    icon: "💥",
                    points: [
                        "• Sudden release of energy from Earth's crust",
                        "• Stress builds along fault lines → rocks suddenly slip",
                        "• Energy travels as SEISMIC WAVES in all directions",
                        "• Most occur at plate boundaries (90%), some at faults within plates"
                    ]
                },
                {
                    title: "🌊 Types of Seismic Waves",
                    icon: "📊",
                    points: [
                        "• P-WAVES: Push-pull motion, fastest (6 km/s), travel through ALL media",
                        "• S-WAVES: Side-to-side shaking, slower (3.5 km/s), ONLY through solids",
                        "• L-WAVES (Surface): Roll like ocean waves, SLOWEST but MOST DESTRUCTIVE",
                        "• P-S wave gap helps locate epicenter distance"
                    ]
                },
                {
                    title: "📏 Measuring Earthquakes",
                    icon: "🔬",
                    points: [
                        "• RICHTER SCALE: Measures MAGNITUDE (energy released), logarithmic (6 is 10× stronger than 5)",
                        "• MERCALLI SCALE: Measures INTENSITY (damage), I to XII",
                        "• SEISMOGRAPH: Instrument that records ground motion",
                        "• Moment Magnitude Scale (Mw) now preferred over Richter"
                    ]
                },
                {
                    title: "🗺️ India's Seismic Zones",
                    icon: "🇮🇳",
                    points: [
                        "• ZONE V (Very High): Kashmir, NE India, Andaman, Kutch, Himachal",
                        "• ZONE IV (High): Delhi-NCR, Bihar, UP, parts of Rajasthan",
                        "• ZONE III (Moderate): Mumbai, Kerala, most of Deccan",
                        "• ZONE II (Low): Southern Peninsular India (most stable)"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "cross-section",
                    title: "Earthquake Anatomy",
                    icon: "📐",
                    description: "Shows Focus (hypocenter), Epicenter, Fault line, concentric seismic wave circles"
                },
                {
                    type: "wave-comparison",
                    title: "P, S, L Waves Motion",
                    icon: "🌊",
                    description: "3 panels showing P-wave compression, S-wave shearing, L-wave rolling motion"
                },
                {
                    type: "map",
                    title: "India Seismic Zones Map",
                    icon: "🗺️",
                    description: "India map with Zone II (green), III (yellow), IV (orange), V (red) colored"
                }
            ],

            quickFacts: [
                { icon: "📊", fact: "Each Richter step = 10× more amplitude, 32× more energy" },
                { icon: "🌏", fact: "World's largest recorded: Chile 1960 (9.5 magnitude)" },
                { icon: "🇮🇳", fact: "India's worst: Gujarat 2001 (7.7), killed 20,000+" },
                { icon: "⏰", fact: "500,000+ earthquakes occur yearly, only 100,000 felt" },
                { icon: "🏠", fact: "Most earthquake deaths from BUILDING COLLAPSE, not ground shaking" },
                { icon: "🌊", fact: "Submarine earthquakes can trigger TSUNAMIS (2004 Indian Ocean)" },
                { icon: "📍", fact: "Delhi is in Zone IV - moderate-high risk area" }
            ],

            traps: [
                {
                    wrong: "Richter scale measures earthquake intensity",
                    correct: "Richter measures MAGNITUDE. Mercalli measures INTENSITY",
                    explanation: "Magnitude = energy released (same everywhere). Intensity = damage felt (varies by location)"
                },
                {
                    wrong: "Surface waves are fastest",
                    correct: "P-waves are FASTEST, Surface/L-waves are SLOWEST",
                    explanation: "But surface waves cause MOST damage despite being slowest"
                },
                {
                    wrong: "Peninsular India is earthquake-free",
                    correct: "Peninsular India is in Zone II-III, still has earthquake risk",
                    explanation: "Koyna (1967), Latur (1993) - even 'stable' regions have intraplate earthquakes"
                },
                {
                    wrong: "Earthquakes can be predicted accurately",
                    correct: "Earthquakes CANNOT be precisely predicted yet",
                    explanation: "We can identify high-risk zones but not exact date/time/magnitude"
                }
            ],

            revision: {
                oneLiner: "Focus (origin underground) → Epicenter (surface above). Waves: P (fastest, all media), S (slower, solids only), L (slowest, most destructive). India Zone V = Kashmir, NE, Andaman, Kutch.",
                keyPoints: [
                    "Cause: Stress release at faults/plate boundaries",
                    "P > S > L waves in speed; L > S > P in destruction",
                    "Richter = magnitude (energy); Mercalli = intensity (damage)",
                    "India Zone V: KANG (Kashmir, Andaman, Northeast, Gujarat-Kutch)"
                ],
                examTip: "Remember 2001 Gujarat (7.7), 2004 Indian Ocean Tsunami (9.1 off Sumatra), 2005 Kashmir (7.6). These are frequently asked!"
            }
        },

        // ─────────────────────────────────────────
        // 🌧️ WEATHERING
        // ─────────────────────────────────────────
        {
            id: "weathering",
            name: "Weathering",
            category: "physical",
            subcategory: "geomorphology",
            theme: "soil",
            difficulty: "medium",
            importance: "high",
            studyTime: "40 min",

            mindMap: {
                center: "🪨 Weathering",
                branches: [
                    {
                        name: "🔨 PHYSICAL",
                        color: "#e74c3c",
                        subs: [
                            "Frost action (freeze-thaw)",
                            "Temperature changes",
                            "Wetting & drying",
                            "Salt crystallization",
                            "Biological agents"
                        ]
                    },
                    {
                        name: "🧪 CHEMICAL",
                        color: "#3498db",
                        subs: [
                            "Oxidation (rusting)",
                            "Carbonation (limestone)",
                            "Hydration (absorbing water)",
                            "Solution (dissolving)",
                            "Hydrolysis (mineral breakdown)"
                        ]
                    },
                    {
                        name: "🌱 BIOLOGICAL",
                        color: "#27ae60",
                        subs: [
                            "Root growth",
                            "Burrowing animals",
                            "Lichens & mosses",
                            "Microorganisms"
                        ]
                    },
                    {
                        name: "🌍 FACTORS",
                        color: "#f39c12",
                        subs: [
                            "Climate (temp, rainfall)",
                            "Rock type & structure",
                            "Slope & drainage",
                            "Vegetation cover",
                            "Time"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Physical Weathering Types: 'FETUS'",
                    trick: "F-E-T-U-S",
                    meaning: [
                        { letter: "F", word: "Frost action", hint: "Freeze-thaw cycles" },
                        { letter: "E", word: "Exfoliation", hint: "Peeling layers" },
                        { letter: "T", word: "Thermal expansion", hint: "Heat-cool cycles" },
                        { letter: "U", word: "Unloading", hint: "Pressure release" },
                        { letter: "S", word: "Salt weathering", hint: "Crystal growth" }
                    ],
                    visual: "🪨 FETUS - like rocks being 'born' slowly, breaking down from solid mass!"
                },
                {
                    title: "Chemical Weathering: 'OCHS'",
                    trick: "O-C-H-S",
                    meaning: [
                        { letter: "O", word: "Oxidation", hint: "Iron rusts red" },
                        { letter: "C", word: "Carbonation", hint: "CO₂ + water dissolves limestone" },
                        { letter: "H", word: "Hydrolysis", hint: "Water breaks minerals" },
                        { letter: "S", word: "Solution", hint: "Dissolving completely" }
                    ],
                    visual: "🧪 OCHS sounds like 'OAKS' - trees helped by chemical weathering of rocks for soil!"
                }
            ],

            concepts: [
                {
                    title: "🔨 Physical/Mechanical Weathering",
                    icon: "💥",
                    points: [
                        "• Breaks rock into smaller pieces WITHOUT chemical change",
                        "• FROST WEDGING: Water freezes in cracks, expands 9%, splits rock",
                        "• THERMAL EXPANSION: Day heating + night cooling = stress fractures",
                        "• EXFOLIATION: Curved sheets peel off (like onion layers) from pressure release"
                    ]
                },
                {
                    title: "🧪 Chemical Weathering",
                    icon: "⚗️",
                    points: [
                        "• Changes rock's CHEMICAL composition",
                        "• CARBONATION: CO₂ + H₂O = carbonic acid dissolves limestone → caves, karst",
                        "• OXIDATION: Iron minerals + oxygen = rust (red/yellow soils)",
                        "• HYDROLYSIS: Feldspar + water = clay minerals (essential for soil)"
                    ]
                },
                {
                    title: "🌱 Biological Weathering",
                    icon: "🌿",
                    points: [
                        "• Living organisms physically AND chemically break rocks",
                        "• Tree roots grow into cracks, widen them (physical)",
                        "• Lichens release acids that dissolve rock surface (chemical)",
                        "• Burrowing animals mix soil, expose fresh rock"
                    ]
                },
                {
                    title: "🌍 Climate & Weathering Types",
                    icon: "🌡️",
                    points: [
                        "• HOT-DRY (Desert): Physical dominates (thermal, salt)",
                        "• HOT-WET (Tropical): Chemical dominates (fast decomposition)",
                        "• COLD (Polar/Mountain): Physical dominates (frost action)",
                        "• TEMPERATE: Mix of both depending on season"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "process",
                    title: "Freeze-Thaw Cycle",
                    icon: "❄️",
                    description: "4-step diagram: Water enters crack → Freezes & expands → Widens crack → Repeat until rock splits"
                },
                {
                    type: "comparison",
                    title: "Physical vs Chemical Weathering",
                    icon: "⚖️",
                    description: "Table comparing: Process, Products, Climate preference, Rock types affected, Speed"
                },
                {
                    type: "climate-map",
                    title: "Global Weathering Types",
                    icon: "🗺️",
                    description: "World map showing dominant weathering type by climate zone"
                }
            ],

            quickFacts: [
                { icon: "❄️", fact: "Water expands 9% when frozen - enough to split hardest rocks" },
                { icon: "🧪", fact: "Chemical weathering is fastest in hot, wet tropical climates" },
                { icon: "🏛️", fact: "Acid rain (pollution) accelerates carbonation on marble monuments" },
                { icon: "🌡️", fact: "Desert rocks can experience 50°C temperature swing in single day" },
                { icon: "⏰", fact: "Weathering is extremely slow - 1cm of soil takes 200-1000 years" },
                { icon: "🪨", fact: "Granite weathers slowly (resistant), limestone weathers fast (reactive)" },
                { icon: "🌿", fact: "Lichens can live 4,500+ years on same rock, slowly dissolving it" }
            ],

            traps: [
                {
                    wrong: "Weathering and erosion are the same",
                    correct: "Weathering = breaking down IN PLACE. Erosion = TRANSPORT of material",
                    explanation: "Weathering creates particles, erosion moves them away"
                },
                {
                    wrong: "Physical weathering only happens in cold areas",
                    correct: "Physical weathering also dominates in HOT DESERTS (thermal, salt)",
                    explanation: "Temperature extremes cause expansion-contraction everywhere"
                },
                {
                    wrong: "Chemical weathering destroys rock structure immediately",
                    correct: "Chemical weathering is SLOW and SUBTLE - takes years to centuries",
                    explanation: "Transforms minerals gradually, creates clay and soil"
                },
                {
                    wrong: "Stronger rocks weather faster",
                    correct: "Weaker/reactive rocks (limestone) weather FASTER than resistant rocks (granite)",
                    explanation: "Rock composition determines weathering speed"
                }
            ],

            revision: {
                oneLiner: "Physical = breaks rock (frost, thermal, exfoliation). Chemical = changes composition (carbonation, oxidation, hydrolysis). Hot-wet = chemical dominated. Cold/desert = physical dominated.",
                keyPoints: [
                    "Physical: FETUS (Frost, Exfoliation, Thermal, Unloading, Salt)",
                    "Chemical: OCHS (Oxidation, Carbonation, Hydrolysis, Solution)",
                    "Tropical = fast chemical; Desert/Polar = physical dominates",
                    "Weathering ≠ Erosion (weathering is in-place breakdown)"
                ],
                examTip: "Exfoliation domes (like Sugarloaf Mountain, Brazil) form from pressure release when overlying rock is removed"
            }
        },

        // ─────────────────────────────────────────
        // ☁️ STRUCTURE OF ATMOSPHERE
        // ─────────────────────────────────────────
        {
            id: "atmosphere-structure",
            name: "Structure of Atmosphere",
            category: "physical",
            subcategory: "climatology",
            theme: "climate",
            difficulty: "medium",
            importance: "very-high",
            studyTime: "45 min",

            mindMap: {
                center: "☁️ Atmosphere Layers",
                branches: [
                    {
                        name: "🌍 TROPOSPHERE",
                        color: "#3498db",
                        subs: [
                            "0-12 km height",
                            "Contains 75% of air mass",
                            "ALL weather happens here",
                            "Temperature DECREASES",
                            "Tropopause at top"
                        ]
                    },
                    {
                        name: "🛫 STRATOSPHERE",
                        color: "#27ae60",
                        subs: [
                            "12-50 km height",
                            "Contains OZONE layer",
                            "Temperature INCREASES",
                            "Aircraft fly here",
                            "Stratopause at top"
                        ]
                    },
                    {
                        name: "☄️ MESOSPHERE",
                        color: "#e74c3c",
                        subs: [
                            "50-80 km height",
                            "Temperature DECREASES",
                            "Meteors burn here",
                            "Coldest layer (-90°C)",
                            "Mesopause at top"
                        ]
                    },
                    {
                        name: "🌌 THERMOSPHERE",
                        color: "#9b59b6",
                        subs: [
                            "80-700 km height",
                            "Temperature INCREASES",
                            "IONOSPHERE within",
                            "Aurora occurs here",
                            "ISS orbits here"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Layers Bottom to Top: 'The Smart Man Talked'",
                    trick: "T-S-M-T",
                    meaning: [
                        { letter: "T", word: "Troposphere", hint: "Bottom, weather layer" },
                        { letter: "S", word: "Stratosphere", hint: "Ozone layer" },
                        { letter: "M", word: "Mesosphere", hint: "Meteors burn" },
                        { letter: "T", word: "Thermosphere", hint: "Top, very hot" }
                    ],
                    visual: "👨‍🎓 THE SMART MAN TALKED - from ground up to space!"
                },
                {
                    title: "Temperature Pattern: 'DIDU'",
                    trick: "D-I-D-I",
                    meaning: [
                        { letter: "D", word: "Decrease (Troposphere)", hint: "Gets colder going up" },
                        { letter: "I", word: "Increase (Stratosphere)", hint: "Ozone absorbs UV" },
                        { letter: "D", word: "Decrease (Mesosphere)", hint: "Gets coldest" },
                        { letter: "I", word: "Increase (Thermosphere)", hint: "Solar radiation heats" }
                    ],
                    visual: "📈 Temperature zigzags: Down-Up-Down-Up as you go higher!"
                },
                {
                    title: "Troposphere Facts: 'TWITCH'",
                    trick: "T-W-I-T-C-H",
                    meaning: [
                        { letter: "T", word: "Temperature decreases", hint: "6.5°C per km" },
                        { letter: "W", word: "Weather happens", hint: "All clouds, rain here" },
                        { letter: "I", word: "Important for life", hint: "We breathe here" },
                        { letter: "T", word: "Turbulence present", hint: "Mixing of air" },
                        { letter: "C", word: "Contains 75% air", hint: "Most dense layer" },
                        { letter: "H", word: "Height varies", hint: "8km poles, 18km equator" }
                    ],
                    visual: "😅 Weather makes us TWITCH - happens in troposphere!"
                }
            ],

            concepts: [
                {
                    title: "🌍 Troposphere (0-12 km)",
                    icon: "🌤️",
                    points: [
                        "• WHERE WE LIVE - contains all life, weather, water vapor",
                        "• Temperature DECREASES 6.5°C per km (Normal Lapse Rate)",
                        "• Contains 75% of atmospheric mass, 99% of water vapor",
                        "• Height: 8 km at poles, 18 km at equator (warm air expands)"
                    ]
                },
                {
                    title: "🛫 Stratosphere (12-50 km)",
                    icon: "✈️",
                    points: [
                        "• Contains OZONE LAYER (O₃) - absorbs UV radiation",
                        "• Temperature INCREASES with height (ozone absorbs UV = heat)",
                        "• Very stable, no weather - ideal for aircraft",
                        "• Ozone maximum at 20-25 km height"
                    ]
                },
                {
                    title: "☄️ Mesosphere (50-80 km)",
                    icon: "💫",
                    points: [
                        "• Temperature DECREASES again - coldest place on Earth (-90°C)!",
                        "• METEORS burn up here due to friction (shooting stars)",
                        "• Too thin for aircraft, too thick for spacecraft = 'ignorosphere'",
                        "• Noctilucent clouds form at top (highest clouds)"
                    ]
                },
                {
                    title: "🌌 Thermosphere (80-700 km)",
                    icon: "🛸",
                    points: [
                        "• Temperature INCREASES to 2000°C (but wouldn't feel hot - too few molecules)",
                        "• Contains IONOSPHERE (80-400 km) - ionized gases, reflects radio waves",
                        "• AURORAS (Northern/Southern Lights) occur here",
                        "• International Space Station orbits at ~400 km"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "vertical-profile",
                    title: "Atmosphere Layers Stack",
                    icon: "📊",
                    description: "Vertical bar showing all layers with heights, temperature changes (zigzag line), and key features"
                },
                {
                    type: "temperature-graph",
                    title: "Temperature vs Altitude",
                    icon: "🌡️",
                    description: "X-Y graph showing temperature zigzagging as altitude increases through layers"
                },
                {
                    type: "features-map",
                    title: "What Happens in Each Layer",
                    icon: "🎯",
                    description: "Infographic showing weather (tropo), ozone (strato), meteors (meso), aurora (thermo)"
                }
            ],

            quickFacts: [
                { icon: "🌡️", fact: "Normal Lapse Rate = 6.5°C decrease per 1 km rise (in troposphere)" },
                { icon: "🛡️", fact: "Ozone layer absorbs 97-99% of harmful UV radiation" },
                { icon: "❄️", fact: "Mesopause (-90°C) is coldest natural place on Earth" },
                { icon: "📻", fact: "Ionosphere reflects AM radio waves - enables long-distance radio" },
                { icon: "🌈", fact: "Auroras occur when solar wind particles hit atmospheric gases" },
                { icon: "🛫", fact: "Commercial aircraft fly at 10-12 km - top of troposphere/lower stratosphere" },
                { icon: "🌍", fact: "99% of atmosphere's mass is below 32 km height" }
            ],

            traps: [
                {
                    wrong: "Temperature always decreases with altitude",
                    correct: "Temperature alternates: Decreases (Tropo), Increases (Strato), Decreases (Meso), Increases (Thermo)",
                    explanation: "Ozone absorbs UV in stratosphere, solar radiation heats thermosphere"
                },
                {
                    wrong: "Ozone layer is in troposphere",
                    correct: "Ozone layer is in STRATOSPHERE (20-25 km)",
                    explanation: "That's why UV increases at high mountains but stratosphere protects Earth"
                },
                {
                    wrong: "Thermosphere is hottest so we'd burn there",
                    correct: "Thermosphere is 2000°C but has very few molecules - won't feel hot",
                    explanation: "Temperature ≠ heat transfer. Too few particles to transfer heat to your body"
                },
                {
                    wrong: "Ionosphere is a separate layer",
                    correct: "Ionosphere is WITHIN thermosphere (80-400 km range)",
                    explanation: "It's a region with ionized gases, not a separate layer"
                }
            ],

            revision: {
                oneLiner: "TSMT (The Smart Man Talked): Troposphere (weather, 0-12km, temp↓), Stratosphere (ozone, 12-50km, temp↑), Mesosphere (meteors, 50-80km, temp↓, coldest), Thermosphere (aurora, 80-700km, temp↑).",
                keyPoints: [
                    "Troposphere: Weather, 75% air mass, lapse rate 6.5°C/km",
                    "Stratosphere: Ozone (20-25km), stable, aircraft fly here",
                    "Mesosphere: Coldest (-90°C), meteors burn up",
                    "Thermosphere: Ionosphere + Aurora, ISS orbits here"
                ],
                examTip: "Remember DIDI pattern for temperature (Decrease-Increase-Decrease-Increase). Tropopause height varies: 8km poles, 18km equator."
            }
        },

        // ─────────────────────────────────────────
        // 🌊 OCEAN CURRENTS
        // ─────────────────────────────────────────
        {
            id: "ocean-currents",
            name: "Ocean Currents",
            category: "physical",
            subcategory: "oceanography",
            theme: "ocean",
            difficulty: "high",
            importance: "very-high",
            studyTime: "60 min",

            mindMap: {
                center: "🌊 Ocean Currents",
                branches: [
                    {
                        name: "🌡️ BY TEMPERATURE",
                        color: "#e74c3c",
                        subs: [
                            "Warm currents (toward poles)",
                            "Cold currents (toward equator)"
                        ]
                    },
                    {
                        name: "📍 BY DEPTH",
                        color: "#3498db",
                        subs: [
                            "Surface currents (wind-driven)",
                            "Deep currents (density-driven)"
                        ]
                    },
                    {
                        name: "⚡ CAUSES",
                        color: "#f39c12",
                        subs: [
                            "Planetary winds",
                            "Temperature differences",
                            "Salinity differences",
                            "Coriolis effect",
                            "Landmass shapes"
                        ]
                    },
                    {
                        name: "🌍 EFFECTS",
                        color: "#27ae60",
                        subs: [
                            "Climate modification",
                            "Fishing grounds",
                            "Fog formation",
                            "Navigation"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Atlantic Currents: 'GNCL' = Great North Current Loop",
                    trick: "G-N-C-L",
                    meaning: [
                        { letter: "G", word: "Gulf Stream", hint: "Warm, east USA coast" },
                        { letter: "N", word: "North Atlantic Drift", hint: "Warms Europe" },
                        { letter: "C", word: "Canary Current", hint: "Cold, African coast" },
                        { letter: "L", word: "Labrador Current", hint: "Cold, Canadian coast" }
                    ],
                    visual: "🔄 Clockwise loop in North Atlantic: Gulf Stream → N.Atlantic Drift → Canary → Return"
                },
                {
                    title: "Pacific Currents: 'KCOP'",
                    trick: "K-C-O-P",
                    meaning: [
                        { letter: "K", word: "Kuroshio", hint: "Warm, Japan (like Gulf Stream)" },
                        { letter: "C", word: "California Current", hint: "Cold, US west coast" },
                        { letter: "O", word: "Oyashio", hint: "Cold, north Japan" },
                        { letter: "P", word: "Peru/Humboldt", hint: "Cold, South America west" }
                    ],
                    visual: "👮 KCOP sounds like 'COP' - Pacific Ocean Police currents!"
                },
                {
                    title: "Warm vs Cold Effect: 'Warm Wine, Cold Coffee'",
                    trick: "Warm brings moisture, Cold brings dryness",
                    meaning: [
                        { letter: "W", word: "Warm currents", hint: "Bring rainfall to coasts" },
                        { letter: "C", word: "Cold currents", hint: "Bring deserts/fog" }
                    ],
                    visual: "🍷 Warm wine makes you wet (sweat). ☕ Cold coffee makes you dry!"
                }
            ],

            concepts: [
                {
                    title: "🔄 What Drives Ocean Currents?",
                    icon: "⚡",
                    points: [
                        "• PLANETARY WINDS: Trade winds, Westerlies push surface water",
                        "• TEMPERATURE: Warm water rises, cold sinks = vertical circulation",
                        "• SALINITY: Saltier water is denser, sinks",
                        "• CORIOLIS: Deflects currents RIGHT in N.Hemisphere, LEFT in South"
                    ]
                },
                {
                    title: "🌡️ Warm Currents",
                    icon: "🔥",
                    points: [
                        "• Flow from EQUATOR toward POLES (carry warm water to cold regions)",
                        "• GULF STREAM: Warms Western Europe (UK warmer than same latitude Canada!)",
                        "• KUROSHIO: Warms Japan, 'Gulf Stream of Pacific'",
                        "• Effect: Bring RAINFALL, moderate temperatures, help ports stay ice-free"
                    ]
                },
                {
                    title: "❄️ Cold Currents",
                    icon: "🧊",
                    points: [
                        "• Flow from POLES toward EQUATOR (carry cold water to warm regions)",
                        "• LABRADOR: Cold, icebergs (Titanic sank here!)",
                        "• HUMBOLDT/PERU: World's most productive fishing ground",
                        "• Effect: Cause coastal DESERTS (Atacama, Namib), FOG (San Francisco)"
                    ]
                },
                {
                    title: "🎣 Effects on Climate & Life",
                    icon: "🌍",
                    points: [
                        "• FISHING: Cold currents bring nutrients (upwelling) → rich fishing",
                        "• DESERTS: Cold currents = coastal deserts (Atacama is driest place)",
                        "• FOG: Warm air over cold water = condensation = fog",
                        "• CLIMATE: Gulf Stream keeps Europe 5-10°C warmer than normal"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "world-map",
                    title: "Global Ocean Currents Map",
                    icon: "🗺️",
                    description: "World map with arrows showing warm currents (red) and cold currents (blue) in all oceans"
                },
                {
                    type: "circulation",
                    title: "Gyre Circulation Pattern",
                    icon: "🔄",
                    description: "Shows 5 major gyres - clockwise in Northern hemisphere, anticlockwise in Southern"
                },
                {
                    type: "cause-effect",
                    title: "Upwelling Process",
                    icon: "⬆️",
                    description: "Cross-section showing wind pushing surface water away, cold nutrient-rich water rising"
                }
            ],

            quickFacts: [
                { icon: "🌡️", fact: "Gulf Stream moves 100× more water than all rivers combined" },
                { icon: "🎣", fact: "Peru/Humboldt Current = world's richest fishing ground (anchovies)" },
                { icon: "🏜️", fact: "Atacama Desert exists because of cold Peru Current" },
                { icon: "🌫️", fact: "San Francisco fog = cold California Current meets warm air" },
                { icon: "🧊", fact: "Labrador Current brings icebergs to Titanic's route" },
                { icon: "🇬🇧", fact: "UK is at same latitude as Labrador (Canada) but much warmer - thanks to Gulf Stream" },
                { icon: "⚡", fact: "El Niño = warming of Peru Current - causes global weather chaos" }
            ],

            traps: [
                {
                    wrong: "Gulf Stream warms North America's east coast",
                    correct: "Gulf Stream flows ALONG east coast but mainly warms WESTERN EUROPE",
                    explanation: "It carries warm water away from USA toward Europe"
                },
                {
                    wrong: "Cold currents cause high rainfall on coasts",
                    correct: "Cold currents cause DESERTS and FOG on coasts, not rainfall",
                    explanation: "Cold water = cold air = stable atmosphere = no rain"
                },
                {
                    wrong: "Ocean currents only affect coastal areas",
                    correct: "Currents affect GLOBAL climate patterns, including inland areas",
                    explanation: "El Niño from Pacific affects weather in India, Africa, everywhere"
                },
                {
                    wrong: "All currents flow in same direction in a gyre",
                    correct: "Western boundary currents are NARROW & FAST; Eastern are WIDE & SLOW",
                    explanation: "Gulf Stream is narrow (100km), Canary Current is wide (1000km)"
                }
            ],

            revision: {
                oneLiner: "Warm currents = equator to poles, bring rain (Gulf Stream warms Europe). Cold currents = poles to equator, cause deserts & fog (Humboldt = Atacama). Gyres = clockwise in North, anticlockwise in South.",
                keyPoints: [
                    "Atlantic: Gulf Stream (warm), Labrador (cold), N.Atlantic Drift (warms Europe)",
                    "Pacific: Kuroshio (warm), Humboldt/Peru (cold, best fishing)",
                    "Cold currents → coastal deserts (Namib, Atacama), fog (San Francisco)",
                    "El Niño = Peru Current warming = global weather disruption"
                ],
                examTip: "Remember: Western boundary currents (Gulf Stream, Kuroshio) are WARM, narrow, fast. Eastern boundary currents (California, Humboldt) are COLD, wide, slow."
            }
        }
    ]
};
/* ═══════════════════════════════════════════════════════════════
   🌍 UPSC GEOGRAPHY DATA - PART 3B
   Climatology, Oceanography, Biogeography & India Geography
   ═══════════════════════════════════════════════════════════════ */

// Continue adding to UPSC_GEOGRAPHY_DATA.topics array:

const UPSC_GEOGRAPHY_DATA_PART_B = {

    topics: [

        // ═══════════════════════════════════════════════════════════════
        // ☁️ CLIMATOLOGY - CONTINUED
        // ═══════════════════════════════════════════════════════════════

        // ─────────────────────────────────────────
        // 🌬️ PRESSURE BELTS & WIND SYSTEMS
        // ─────────────────────────────────────────
        {
            id: "pressure-belts",
            name: "Pressure Belts & Wind Systems",
            category: "physical",
            subcategory: "climatology",
            theme: "climate",
            difficulty: "high",
            importance: "very-high",
            studyTime: "60 min",

            mindMap: {
                center: "🌬️ Pressure Belts",
                branches: [
                    {
                        name: "⬇️ LOW PRESSURE",
                        color: "#e74c3c",
                        subs: [
                            "Equatorial Low (0° - ITCZ)",
                            "Subpolar Low (60°N & 60°S)",
                            "Rising air, clouds, rain"
                        ]
                    },
                    {
                        name: "⬆️ HIGH PRESSURE",
                        color: "#3498db",
                        subs: [
                            "Subtropical High (30°N & 30°S)",
                            "Polar High (90°N & 90°S)",
                            "Sinking air, clear, dry"
                        ]
                    },
                    {
                        name: "💨 PLANETARY WINDS",
                        color: "#27ae60",
                        subs: [
                            "Trade Winds (0°-30°)",
                            "Westerlies (30°-60°)",
                            "Polar Easterlies (60°-90°)"
                        ]
                    },
                    {
                        name: "🔄 CIRCULATION",
                        color: "#f39c12",
                        subs: [
                            "Hadley Cell (0°-30°)",
                            "Ferrel Cell (30°-60°)",
                            "Polar Cell (60°-90°)"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Pressure Belts from Equator: 'LHLS HP'",
                    trick: "L-H-L-H (Low-High-Low-High)",
                    meaning: [
                        { letter: "L", word: "Low (0° Equatorial)", hint: "ITCZ, rising air, rain" },
                        { letter: "H", word: "High (30° Subtropical)", hint: "Horse latitudes, deserts" },
                        { letter: "L", word: "Low (60° Subpolar)", hint: "Stormy, westerlies meet" },
                        { letter: "H", word: "High (90° Polar)", hint: "Cold, sinking air" }
                    ],
                    visual: "🎢 Like a wave: Low-High-Low-High from equator to pole!"
                },
                {
                    title: "Wind Directions: 'NEWTON' Rule",
                    trick: "NE-W-E (North hemisphere)",
                    meaning: [
                        { letter: "NE", word: "Trade Winds", hint: "NE Trades (0-30°N)" },
                        { letter: "W", word: "Westerlies", hint: "SW winds (30-60°N)" },
                        { letter: "E", word: "Polar Easterlies", hint: "NE winds (60-90°N)" }
                    ],
                    visual: "🧭 Flip for Southern hemisphere: SE Trades, NW Westerlies, SE Polar"
                },
                {
                    title: "Cells Memory: 'HaFePo'",
                    trick: "Ha-Fe-Po",
                    meaning: [
                        { letter: "Ha", word: "Hadley Cell", hint: "0°-30°, strongest, thermally direct" },
                        { letter: "Fe", word: "Ferrel Cell", hint: "30°-60°, weak, thermally indirect" },
                        { letter: "Po", word: "Polar Cell", hint: "60°-90°, cold, small" }
                    ],
                    visual: "☕ HaFePo sounds like 'Half a Po(t)' - 3 cells make half the circulation!"
                }
            ],

            concepts: [
                {
                    title: "🌡️ Why Pressure Belts Form?",
                    icon: "💡",
                    points: [
                        "• EQUATOR (0°): Intense heating → air rises → LOW pressure (ITCZ)",
                        "• 30° LATITUDE: Rising air cools, descends → HIGH pressure (deserts!)",
                        "• 60° LATITUDE: Warm & cold air meet → air rises → LOW pressure (storms)",
                        "• POLES (90°): Extreme cold → air sinks → HIGH pressure"
                    ]
                },
                {
                    title: "💨 Trade Winds (0°-30°)",
                    icon: "⛵",
                    points: [
                        "• Blow from subtropical HIGH to equatorial LOW",
                        "• Deflected by Coriolis: NE Trades (N.Hem), SE Trades (S.Hem)",
                        "• Most RELIABLE winds - sailors used for trade voyages",
                        "• Bring moisture to eastern coasts, dry western coasts"
                    ]
                },
                {
                    title: "🌀 Westerlies (30°-60°)",
                    icon: "🌪️",
                    points: [
                        "• Blow from subtropical HIGH to subpolar LOW",
                        "• SW winds in N.Hemisphere, NW winds in S.Hemisphere",
                        "• Carry warm air poleward - responsible for European mild climate",
                        "• Variable, stormy - 'Roaring Forties' (40°S) famous for strong westerlies"
                    ]
                },
                {
                    title: "❄️ Polar Easterlies (60°-90°)",
                    icon: "🧊",
                    points: [
                        "• Blow from polar HIGH toward subpolar LOW",
                        "• Cold, dry winds from NE (N.Hem), SE (S.Hem)",
                        "• Meet warm westerlies at POLAR FRONT → storms, cyclones",
                        "• Weak and inconsistent compared to other winds"
                    ]
                },
                {
                    title: "🔄 Three-Cell Model",
                    icon: "📊",
                    points: [
                        "• HADLEY CELL: Largest, thermally direct, drives trade winds",
                        "• FERREL CELL: Middle, thermally indirect (mechanically driven)",
                        "• POLAR CELL: Smallest, thermally direct, cold and dense air",
                        "• Together they distribute heat from equator to poles"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "cross-section",
                    title: "Global Pressure Belts Profile",
                    icon: "🌍",
                    description: "Earth cross-section showing L-H-L-H pattern from equator to pole with rising/sinking arrows"
                },
                {
                    type: "circulation",
                    title: "Three-Cell Circulation Model",
                    icon: "🔄",
                    description: "Shows Hadley, Ferrel, Polar cells with air movement arrows and wind directions"
                },
                {
                    type: "world-map",
                    title: "Global Wind Patterns Map",
                    icon: "🗺️",
                    description: "World map with trade winds, westerlies, polar easterlies arrows + ITCZ line"
                }
            ],

            quickFacts: [
                { icon: "🌡️", fact: "ITCZ shifts: 5°N in July (summer), 5°S in January (winter)" },
                { icon: "🏜️", fact: "World's major deserts lie at 30° latitude - sinking air from Hadley Cell" },
                { icon: "🐴", fact: "Horse Latitudes (30°) - calm winds, ships threw horses overboard (lack of water)" },
                { icon: "⛵", fact: "Doldrums (ITCZ) - calm zone, sailing ships got stuck for weeks" },
                { icon: "💨", fact: "Roaring Forties, Furious Fifties, Screaming Sixties - southern westerlies" },
                { icon: "🔄", fact: "Coriolis deflects winds RIGHT in N.Hemisphere, LEFT in South" },
                { icon: "📏", fact: "Trade winds cover 50% of Earth's surface" }
            ],

            traps: [
                {
                    wrong: "Trade winds blow from east to west everywhere",
                    correct: "Trade winds blow toward EQUATOR: NE in N.Hemisphere, SE in S.Hemisphere",
                    explanation: "They're deflected by Coriolis from their original N/S direction"
                },
                {
                    wrong: "Westerlies blow from west in both hemispheres",
                    correct: "Westerlies blow FROM the west - SW in North, NW in South hemisphere",
                    explanation: "Named for direction they come FROM, not where they go"
                },
                {
                    wrong: "ITCZ stays at equator throughout the year",
                    correct: "ITCZ shifts with the sun - to 20°N in July, near equator/5°S in January",
                    explanation: "This shift causes monsoons in India!"
                },
                {
                    wrong: "High pressure means stormy weather",
                    correct: "HIGH pressure = sinking air = CLEAR, DRY weather",
                    explanation: "LOW pressure = rising air = clouds, rain, storms"
                }
            ],

            revision: {
                oneLiner: "Belts: L(0°)-H(30°)-L(60°)-H(90°). Winds: Trade (NE/SE), Westerlies (SW/NW), Polar Easterlies. Cells: Hadley-Ferrel-Polar. ITCZ shifts with sun = monsoon.",
                keyPoints: [
                    "Equatorial Low (ITCZ) + Subpolar Low = rain/storms",
                    "Subtropical High (30°) + Polar High = deserts/clear",
                    "Trade winds: NE (N.Hem), SE (S.Hem) toward equator",
                    "Westerlies: SW (N.Hem), NW (S.Hem) toward poles"
                ],
                examTip: "ITCZ shifting to India (20°N in summer) brings SW Monsoon. Horse Latitudes & Doldrums are CALM zones."
            }
        },

        // ─────────────────────────────────────────
        // ✈️ JET STREAMS
        // ─────────────────────────────────────────
        {
            id: "jet-streams",
            name: "Jet Streams",
            category: "physical",
            subcategory: "climatology",
            theme: "climate",
            difficulty: "high",
            importance: "very-high",
            studyTime: "45 min",

            mindMap: {
                center: "✈️ Jet Streams",
                branches: [
                    {
                        name: "📍 WHAT ARE THEY",
                        color: "#3498db",
                        subs: [
                            "Narrow bands of fast winds",
                            "9-12 km altitude (tropopause)",
                            "Speed: 180-400+ km/h",
                            "Flow west to east"
                        ]
                    },
                    {
                        name: "🌊 TYPES",
                        color: "#e74c3c",
                        subs: [
                            "Polar Jet Stream (60°N/S)",
                            "Subtropical Jet Stream (30°N/S)",
                            "Tropical Easterly Jet (India summer)"
                        ]
                    },
                    {
                        name: "⚡ CAUSES",
                        color: "#f39c12",
                        subs: [
                            "Temperature gradient",
                            "Earth's rotation (Coriolis)",
                            "Pressure differences"
                        ]
                    },
                    {
                        name: "🇮🇳 INDIA IMPACT",
                        color: "#27ae60",
                        subs: [
                            "Subtropical Jet = Winter rain",
                            "Easterly Jet = SW Monsoon onset",
                            "Western Disturbances guided"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Types of Jets: 'PST - PostScript Text'",
                    trick: "P-S-T",
                    meaning: [
                        { letter: "P", word: "Polar Jet", hint: "60°, strongest, variable" },
                        { letter: "S", word: "Subtropical Jet", hint: "30°, steadier, brings WD to India" },
                        { letter: "T", word: "Tropical Easterly Jet", hint: "15°N, ONLY in summer, E to W" }
                    ],
                    visual: "📮 PST like a fast postal delivery - jets deliver weather!"
                },
                {
                    title: "India Monsoon Jets: 'EXIT = Easterly Jet Indicates Summer (Tropical)'",
                    trick: "EXIT",
                    meaning: [
                        { letter: "E", word: "Easterly", hint: "Blows from east to west (opposite!)" },
                        { letter: "X", word: "Xtra fast", hint: "150 km/h average" },
                        { letter: "I", word: "Indian", hint: "Only over India/SE Asia" },
                        { letter: "T", word: "Tropical Summer", hint: "June-September, brings monsoon" }
                    ],
                    visual: "🚪 EXIT sign appears in summer = Monsoon EXIT (arrival)!"
                },
                {
                    title: "Jet Stream Rule: 'Jets West, Monsoon Best'",
                    trick: "W-B relationship",
                    meaning: [
                        { letter: "W", word: "West to East flow", hint: "Normal polar/subtropical jets" },
                        { letter: "B", word: "Best monsoon", hint: "When Easterly Jet establishes" }
                    ],
                    visual: "✈️ When Subtropical Jet shifts NORTH of Himalayas in June, monsoon bursts!"
                }
            ],

            concepts: [
                {
                    title: "✈️ What is a Jet Stream?",
                    icon: "💨",
                    points: [
                        "• NARROW bands of VERY FAST wind (200-400 km/h)",
                        "• Located at TROPOPAUSE level (9-12 km altitude)",
                        "• Typically 100-200 km wide, 1-2 km thick",
                        "• Flow from WEST to EAST (except Tropical Easterly Jet)"
                    ]
                },
                {
                    title: "🌀 Polar Jet Stream",
                    icon: "❄️",
                    points: [
                        "• Located around 60° latitude (both hemispheres)",
                        "• STRONGEST jet - speeds can exceed 400 km/h",
                        "• Highly WAVY (Rossby waves) - brings cold/warm spells",
                        "• Separates cold polar air from warm tropical air"
                    ]
                },
                {
                    title: "🌡️ Subtropical Jet Stream",
                    icon: "☀️",
                    points: [
                        "• Located around 30° latitude (both hemispheres)",
                        "• Forms at boundary of Hadley and Ferrel cells",
                        "• CRITICAL for India - guides Western Disturbances in winter",
                        "• Position shifts: South of Himalayas (winter), North (summer)"
                    ]
                },
                {
                    title: "🇮🇳 Tropical Easterly Jet (TEJ)",
                    icon: "🌧️",
                    points: [
                        "• ONLY exists in SUMMER (June-September)",
                        "• Flows EAST to WEST (opposite to other jets!)",
                        "• Located over India/SE Asia at 15°N, 14 km height",
                        "• Strong TEJ = GOOD monsoon; Weak TEJ = poor monsoon"
                    ]
                },
                {
                    title: "🔄 Jets & Indian Monsoon",
                    icon: "⚡",
                    points: [
                        "• WINTER: Subtropical Jet SOUTH of Himalayas = Western Disturbances bring rain",
                        "• JUNE: Subtropical Jet shifts NORTH of Himalayas = Monsoon onset!",
                        "• SUMMER: Tropical Easterly Jet strengthens = sustains SW Monsoon",
                        "• SEPTEMBER: TEJ weakens, Subtropical Jet returns south = monsoon withdrawal"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "profile",
                    title: "Jet Stream Altitude & Location",
                    icon: "📊",
                    description: "Cross-section showing jets at tropopause, polar jet at 60°, subtropical at 30°"
                },
                {
                    type: "seasonal-map",
                    title: "Jet Stream Shift Over India",
                    icon: "🗺️",
                    description: "Two maps: Winter (Subtropical Jet south of Himalayas) vs Summer (North + TEJ appears)"
                },
                {
                    type: "mechanism",
                    title: "Monsoon Jet Stream Mechanism",
                    icon: "🔄",
                    description: "Shows how jet shift triggers monsoon onset and TEJ sustains rain"
                }
            ],

            quickFacts: [
                { icon: "💨", fact: "Jet stream speeds can exceed 400 km/h - faster than bullet trains!" },
                { icon: "✈️", fact: "Flights FROM west to east are faster (jetstream tail wind)" },
                { icon: "📏", fact: "Jets are 100-200 km wide but only 1-2 km thick" },
                { icon: "🏔️", fact: "Himalayas 'split' the jet stream - unique global phenomenon" },
                { icon: "🇮🇳", fact: "Subtropical Jet position determines Indian monsoon timing" },
                { icon: "☀️", fact: "TEJ exists ONLY in summer over India/SE Asia - nowhere else!" },
                { icon: "❄️", fact: "Polar jet waviness causes extreme weather (polar vortex events)" }
            ],

            traps: [
                {
                    wrong: "All jet streams flow west to east",
                    correct: "Tropical Easterly Jet flows EAST to WEST (opposite)",
                    explanation: "TEJ is unique - driven by temperature gradient over Tibet plateau"
                },
                {
                    wrong: "Jet streams exist at ground level",
                    correct: "Jets exist at TROPOPAUSE (9-12 km altitude)",
                    explanation: "They're upper atmospheric phenomena, not surface winds"
                },
                {
                    wrong: "Subtropical jet stays at same position year-round",
                    correct: "Subtropical jet SHIFTS - south of Himalayas (winter), north (summer)",
                    explanation: "This seasonal shift is KEY to Indian monsoon mechanism"
                },
                {
                    wrong: "Western Disturbances are driven by Tropical Easterly Jet",
                    correct: "Western Disturbances are guided by SUBTROPICAL Jet Stream in WINTER",
                    explanation: "TEJ exists only in summer and brings monsoon, not WDs"
                }
            ],

            revision: {
                oneLiner: "Polar Jet (60°, strongest), Subtropical Jet (30°, guides WDs), TEJ (15°N, summer, E→W, monsoon). Jets at tropopause 9-12km, 200-400 km/h. Subtropical Jet shifts north in June = monsoon onset.",
                keyPoints: [
                    "All jets flow W→E except TEJ (E→W)",
                    "Polar Jet: Variable, causes cold waves when dips south",
                    "Subtropical Jet: Winter south of Himalayas, Summer north",
                    "TEJ: Summer only, over India, strong TEJ = good monsoon"
                ],
                examTip: "Himalayas BIFURCATE (split) the subtropical jet - this is why India has unique monsoon system!"
            }
        },

        // ─────────────────────────────────────────
        // 🌀 CYCLONES
        // ─────────────────────────────────────────
        {
            id: "cyclones",
            name: "Cyclones & Anticyclones",
            category: "physical",
            subcategory: "climatology",
            theme: "climate",
            difficulty: "high",
            importance: "very-high",
            studyTime: "55 min",

            mindMap: {
                center: "🌀 Cyclones",
                branches: [
                    {
                        name: "🌊 TROPICAL CYCLONES",
                        color: "#e74c3c",
                        subs: [
                            "Hurricanes (Atlantic)",
                            "Typhoons (Pacific)",
                            "Cyclones (Indian Ocean)",
                            "Need warm ocean (26°C+)"
                        ]
                    },
                    {
                        name: "❄️ TEMPERATE CYCLONES",
                        color: "#3498db",
                        subs: [
                            "Extratropical cyclones",
                            "Form at polar front",
                            "Western Disturbances",
                            "Less intense, larger area"
                        ]
                    },
                    {
                        name: "📍 STRUCTURE",
                        color: "#f39c12",
                        subs: [
                            "Eye (calm center)",
                            "Eye wall (strongest winds)",
                            "Spiral rain bands",
                            "Anticlockwise (N.Hem)"
                        ]
                    },
                    {
                        name: "🇮🇳 INDIA CYCLONES",
                        color: "#27ae60",
                        subs: [
                            "Bay of Bengal (Oct-Nov)",
                            "Arabian Sea (May-Jun)",
                            "IMD naming since 2004",
                            "Amphan, Tauktae, Biparjoy"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Tropical Cyclone Names: 'HTC = Hot Tropical Cyclone'",
                    trick: "H-T-C",
                    meaning: [
                        { letter: "H", word: "Hurricane", hint: "Atlantic Ocean, Caribbean" },
                        { letter: "T", word: "Typhoon", hint: "Pacific Ocean, Japan/Philippines" },
                        { letter: "C", word: "Cyclone", hint: "Indian Ocean, Bay of Bengal" }
                    ],
                    visual: "📱 HTC phone logo - all same storm, different names by location!"
                },
                {
                    title: "Cyclone Conditions: 'COWL'",
                    trick: "C-O-W-L",
                    meaning: [
                        { letter: "C", word: "Coriolis effect", hint: "Must be away from equator (5°+)" },
                        { letter: "O", word: "Ocean temperature", hint: "26°C or more" },
                        { letter: "W", word: "Wind shear low", hint: "Uniform winds needed" },
                        { letter: "L", word: "Low pressure", hint: "Central low pressure system" }
                    ],
                    visual: "🐄 COWL like a cow's collar - cyclone needs all these conditions to 'collar' the energy!"
                },
                {
                    title: "Rotation Direction: 'Right-Anti, Left-Clock'",
                    trick: "N.Hemisphere = Anticlockwise, S.Hemisphere = Clockwise",
                    meaning: [
                        { letter: "N", word: "Northern", hint: "Anticlockwise (counterclockwise)" },
                        { letter: "S", word: "Southern", hint: "Clockwise rotation" }
                    ],
                    visual: "🌀 In Northern hemisphere, flush water spirals left - so do cyclones!"
                },
                {
                    title: "India Cyclone Seasons: 'BONDS'",
                    trick: "B-O-N-D-S",
                    meaning: [
                        { letter: "B", word: "Bay of Bengal", hint: "More cyclones (4× Arabian)" },
                        { letter: "O", word: "October-November", hint: "Post-monsoon peak" },
                        { letter: "N", word: "North Andhra, Odisha", hint: "Most vulnerable" },
                        { letter: "D", word: "December low", hint: "Winter few cyclones" },
                        { letter: "S", word: "Second peak May-June", hint: "Pre-monsoon" }
                    ],
                    visual: "🎬 James BOND movies - Indian cyclones have dramatic seasons!"
                }
            ],

            concepts: [
                {
                    title: "🌊 Tropical Cyclone Formation",
                    icon: "🌀",
                    points: [
                        "• Need WARM OCEAN (26°C+, deep warm layer 60m+)",
                        "• Form 8°-20° latitude (need Coriolis, not at equator)",
                        "• Low wind shear (uniform wind speed at all heights)",
                        "• Evaporation creates low pressure → air spirals inward → rises"
                    ]
                },
                {
                    title: "👁️ Cyclone Structure",
                    icon: "🎯",
                    points: [
                        "• EYE: 20-40 km diameter, calm, clear, low pressure center",
                        "• EYE WALL: Ring of thunderstorms, STRONGEST winds & rain",
                        "• SPIRAL BANDS: Curved rain bands extending 500 km+",
                        "• Rotates: Anticlockwise (N.Hem), Clockwise (S.Hem)"
                    ]
                },
                {
                    title: "📏 Saffir-Simpson Scale",
                    icon: "📊",
                    points: [
                        "• Category 1: 119-153 km/h (minimal damage)",
                        "• Category 2: 154-177 km/h (moderate damage)",
                        "• Category 3: 178-208 km/h (extensive damage) - MAJOR",
                        "• Category 4: 209-251 km/h, Category 5: 252+ km/h (catastrophic)"
                    ]
                },
                {
                    title: "❄️ Temperate (Extratropical) Cyclones",
                    icon: "🌧️",
                    points: [
                        "• Form at POLAR FRONT (60°) - warm & cold air meet",
                        "• NOT powered by warm ocean - powered by temperature difference",
                        "• LARGER area but LESS intense than tropical cyclones",
                        "• Western Disturbances affecting India are temperate cyclones!"
                    ]
                },
                {
                    title: "🇮🇳 Cyclones in India",
                    icon: "🏴",
                    points: [
                        "• Bay of Bengal: 4× more cyclones than Arabian Sea",
                        "• Peak seasons: Oct-Nov (post-monsoon), May-Jun (pre-monsoon)",
                        "• Odisha, Andhra, West Bengal, Tamil Nadu most affected",
                        "• Recent severe: Amphan (2020), Yaas (2021), Biparjoy (2023)"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "cross-section",
                    title: "Cyclone Structure",
                    icon: "🌀",
                    description: "Cut-away showing eye (calm), eye wall (strongest), spiral bands, wind direction arrows"
                },
                {
                    type: "world-map",
                    title: "Global Cyclone Tracks",
                    icon: "🗺️",
                    description: "World map showing typical cyclone paths, peak seasons, and names by region"
                },
                {
                    type: "comparison",
                    title: "Tropical vs Temperate Cyclones",
                    icon: "⚖️",
                    description: "Table comparing energy source, location, size, intensity, structure"
                },
                {
                    type: "india-map",
                    title: "India Cyclone Tracks",
                    icon: "🇮🇳",
                    description: "Bay of Bengal and Arabian Sea tracks, vulnerable states highlighted"
                }
            ],

            quickFacts: [
                { icon: "🌡️", fact: "Cyclones need 26°C+ ocean temperature to form" },
                { icon: "📍", fact: "Cyclones CANNOT form at equator - no Coriolis effect there" },
                { icon: "👁️", fact: "Eye can be 20-40 km wide, calm with clear skies" },
                { icon: "💨", fact: "Eye wall has strongest winds - can exceed 300 km/h" },
                { icon: "🇮🇳", fact: "Odisha Super Cyclone (1999) killed 10,000+ - India's worst in century" },
                { icon: "🌊", fact: "Bay of Bengal cyclones intensify rapidly due to warm water" },
                { icon: "📅", fact: "Atlantic hurricanes have human names since 1953, India since 2004" }
            ],

            traps: [
                {
                    wrong: "Cyclones form directly at the equator where it's hottest",
                    correct: "Cyclones form 8°-20° away from equator - need Coriolis effect",
                    explanation: "At equator Coriolis = 0, air can't spiral to form organized cyclone"
                },
                {
                    wrong: "Eye of cyclone is most dangerous",
                    correct: "EYE WALL is most dangerous - strongest winds and rain",
                    explanation: "Eye is actually calm with clear skies"
                },
                {
                    wrong: "Western Disturbances are tropical cyclones",
                    correct: "Western Disturbances are TEMPERATE (extratropical) cyclones",
                    explanation: "They form at polar front over Mediterranean, move to India"
                },
                {
                    wrong: "Cyclones rotate same direction in both hemispheres",
                    correct: "ANTICLOCKWISE in Northern, CLOCKWISE in Southern hemisphere",
                    explanation: "Coriolis effect deflects in opposite directions"
                }
            ],

            revision: {
                oneLiner: "Tropical cyclones need 26°C+ ocean, 8-20° latitude, low wind shear. Eye (calm) < Eye Wall (strongest) < Spiral bands. Anticlockwise (N.Hem). India: Bay of Bengal Oct-Nov, Odisha/Andhra most hit.",
                keyPoints: [
                    "Same storm: Hurricane (Atlantic), Typhoon (Pacific), Cyclone (Indian Ocean)",
                    "Structure: Eye (calm) → Eye Wall (worst) → Spiral Bands",
                    "Conditions: COWL (Coriolis, Ocean 26°C+, Wind shear low, Low pressure)",
                    "India: Bay > Arabian (4×), Post-monsoon peak, Temperate WDs in winter"
                ],
                examTip: "Why Bay of Bengal has more cyclones? Warmer water, higher moisture, weaker winds. Amphan (2020) was 'Super Cyclone' - Category 5 equivalent."
            }
        },

        // ═══════════════════════════════════════════════════════════════
        // 🌊 OCEANOGRAPHY - CONTINUED
        // ═══════════════════════════════════════════════════════════════

        // ─────────────────────────────────────────
        // 🌊 TIDES
        // ─────────────────────────────────────────
        {
            id: "tides",
            name: "Tides",
            category: "physical",
            subcategory: "oceanography",
            theme: "ocean",
            difficulty: "medium",
            importance: "high",
            studyTime: "40 min",

            mindMap: {
                center: "🌊 Tides",
                branches: [
                    {
                        name: "⚡ CAUSES",
                        color: "#3498db",
                        subs: [
                            "Moon's gravitational pull (main)",
                            "Sun's gravitational pull",
                            "Earth's rotation",
                            "Centrifugal force"
                        ]
                    },
                    {
                        name: "📊 TYPES",
                        color: "#e74c3c",
                        subs: [
                            "Spring Tide (Sun+Moon aligned)",
                            "Neap Tide (Sun-Moon 90°)",
                            "High Tide & Low Tide"
                        ]
                    },
                    {
                        name: "🔄 FREQUENCY",
                        color: "#27ae60",
                        subs: [
                            "Semi-diurnal (2 high, 2 low daily)",
                            "Diurnal (1 high, 1 low daily)",
                            "Mixed tides"
                        ]
                    },
                    {
                        name: "📍 IMPORTANCE",
                        color: "#f39c12",
                        subs: [
                            "Navigation (harbors)",
                            "Fishing schedules",
                            "Tidal energy",
                            "Coastal ecosystems"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Tidal Forces: 'MooSun' (Moon + Sun)",
                    trick: "M-S",
                    meaning: [
                        { letter: "M", word: "Moon", hint: "PRIMARY force (68% of tidal effect)" },
                        { letter: "S", word: "Sun", hint: "Secondary force (32% of tidal effect)" }
                    ],
                    visual: "🐄 MooSun - like a cow mooing at both Moon AND Sun!"
                },
                {
                    title: "Spring vs Neap: 'SPRING = Strong, NEAP = Not Extreme'",
                    trick: "S-N",
                    meaning: [
                        { letter: "S", word: "Spring Tide", hint: "Sun-Moon ALIGNED (new/full moon) = HIGH tides" },
                        { letter: "N", word: "Neap Tide", hint: "Sun-Moon at 90° (quarter moon) = LOW tides" }
                    ],
                    visual: "🌕🌙 Full/New Moon = Spring (strong). Half Moon = Neap (weak)."
                },
                {
                    title: "Why Moon Dominates: 'Closer is Stronger'",
                    trick: "C-S",
                    meaning: [
                        { letter: "C", word: "Closer distance", hint: "Moon is 400× closer than Sun" },
                        { letter: "S", word: "Stronger pull", hint: "Despite Sun being much larger" }
                    ],
                    visual: "📏 Gravitational tidal force depends on distance³ - Moon wins!"
                }
            ],

            concepts: [
                {
                    title: "🌙 Why Do Tides Occur?",
                    icon: "❓",
                    points: [
                        "• Moon's gravity PULLS water toward it = bulge (high tide)",
                        "• Opposite side: centrifugal force creates SECOND bulge",
                        "• Earth rotates under bulges = 2 high tides daily per location",
                        "• Sun adds to effect but Moon is DOMINANT (closer = stronger tidal force)"
                    ]
                },
                {
                    title: "🌕 Spring Tides (Maximum)",
                    icon: "⬆️",
                    points: [
                        "• Sun and Moon ALIGNED (same or opposite sides of Earth)",
                        "• Occur during FULL MOON and NEW MOON",
                        "• Combined gravitational pull = HIGHEST high tides, LOWEST low tides",
                        "• Happen every ~14 days (twice per lunar month)"
                    ]
                },
                {
                    title: "🌗 Neap Tides (Minimum)",
                    icon: "⬇️",
                    points: [
                        "• Sun and Moon at RIGHT ANGLES (90°)",
                        "• Occur during FIRST QUARTER and THIRD QUARTER moon",
                        "• Gravitational pulls CANCEL partially = moderate tides",
                        "• Tidal range (difference high-low) is MINIMUM"
                    ]
                },
                {
                    title: "🔄 Tidal Patterns",
                    icon: "📊",
                    points: [
                        "• SEMI-DIURNAL: Most common, 2 high + 2 low tides daily (Atlantic)",
                        "• DIURNAL: 1 high + 1 low tide daily (Gulf of Mexico, some Pacific)",
                        "• MIXED: Unequal highs/lows (Pacific coast of Americas)",
                        "• Tidal cycle = 24 hrs 50 min (Moon rises ~50 min later each day)"
                    ]
                },
                {
                    title: "🇮🇳 Tides in India & Importance",
                    icon: "⚓",
                    points: [
                        "• Highest tides: Gulf of Khambhat (up to 12m range!)",
                        "• Tidal energy potential: Gulf of Kutch, Khambhat, Sundarbans",
                        "• Navigation: Ports plan ship entry/exit by tides",
                        "• Mumbai's natural harbor aided by tidal patterns"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "orbital",
                    title: "Spring & Neap Tides",
                    icon: "🌙",
                    description: "Earth-Moon-Sun positions showing aligned (spring) vs 90° (neap)"
                },
                {
                    type: "bulge",
                    title: "Tidal Bulges",
                    icon: "🌍",
                    description: "Earth with two ocean bulges - one toward Moon, one opposite"
                },
                {
                    type: "graph",
                    title: "Tidal Height Cycle",
                    icon: "📈",
                    description: "Graph showing water level over ~25 hours with 2 highs and 2 lows"
                }
            ],

            quickFacts: [
                { icon: "🌙", fact: "Moon causes 68% of tides, Sun causes 32%" },
                { icon: "📏", fact: "Bay of Fundy (Canada) has highest tides - up to 16 meters!" },
                { icon: "🇮🇳", fact: "Gulf of Khambhat has India's highest tides - up to 12 meters" },
                { icon: "⏰", fact: "Tidal day = 24 hours 50 minutes (Moon rises 50 min later daily)" },
                { icon: "🔄", fact: "Spring tides occur every ~14 days (new and full moon)" },
                { icon: "⚡", fact: "First tidal power plant: La Rance, France (1966)" },
                { icon: "🌊", fact: "Tidal bore = tidal wave traveling up rivers (Severn, Amazon)" }
            ],

            traps: [
                {
                    wrong: "Sun causes stronger tides than Moon because Sun is bigger",
                    correct: "MOON causes stronger tides despite being smaller - it's much CLOSER",
                    explanation: "Tidal force depends on distance³, not just mass"
                },
                {
                    wrong: "Spring tides happen in spring season",
                    correct: "Spring tides happen twice per MONTH (new & full moon) - all year",
                    explanation: "'Spring' means 'to spring forth' (strong), not the season"
                },
                {
                    wrong: "Only one tidal bulge exists on Earth",
                    correct: "TWO bulges exist - one toward Moon, one on opposite side",
                    explanation: "Opposite bulge due to centrifugal force of Earth-Moon system"
                },
                {
                    wrong: "High tide means more water arrives from ocean",
                    correct: "High tide is water BULGE passing that location as Earth rotates",
                    explanation: "Water doesn't flow in - Earth rotates under the bulge"
                }
            ],

            revision: {
                oneLiner: "Moon (68%) + Sun (32%) cause tides. Spring Tide = aligned (Full/New Moon) = max. Neap Tide = 90° (Quarter Moon) = min. 2 high + 2 low daily (semi-diurnal). Gulf of Khambhat = India's highest.",
                keyPoints: [
                    "Moon dominates because CLOSER (tidal force ∝ 1/distance³)",
                    "Spring: Full/New Moon, Sun-Moon aligned, maximum tides",
                    "Neap: Quarter Moon, Sun-Moon 90°, minimum tides",
                    "Tidal energy potential: Khambhat, Kutch, Sundarbans"
                ],
                examTip: "Bay of Fundy (Canada) = world's highest tides (16m). Gulf of Khambhat = India's highest (~12m). India's first tidal plant planned at Gulf of Kutch."
            }
        },

        // ─────────────────────────────────────────
        // 🧂 OCEAN SALINITY
        // ─────────────────────────────────────────
        {
            id: "ocean-salinity",
            name: "Ocean Salinity",
            category: "physical",
            subcategory: "oceanography",
            theme: "ocean",
            difficulty: "medium",
            importance: "high",
            studyTime: "35 min",

            mindMap: {
                center: "🧂 Ocean Salinity",
                branches: [
                    {
                        name: "📊 MEASUREMENT",
                        color: "#3498db",
                        subs: [
                            "Average: 35 ppt (parts per thousand)",
                            "35 grams salt per 1 kg water",
                            "Also written as 35‰",
                            "Varies 33-37 ppt globally"
                        ]
                    },
                    {
                        name: "⬆️ HIGH SALINITY",
                        color: "#e74c3c",
                        subs: [
                            "High evaporation (tropics)",
                            "Enclosed seas (Red Sea 40‰)",
                            "Low rainfall areas",
                            "Subtropics (20°-30°)"
                        ]
                    },
                    {
                        name: "⬇️ LOW SALINITY",
                        color: "#27ae60",
                        subs: [
                            "High rainfall (equator)",
                            "River inflow areas",
                            "Melting ice (poles)",
                            "Baltic Sea (7‰)"
                        ]
                    },
                    {
                        name: "🔬 COMPOSITION",
                        color: "#f39c12",
                        subs: [
                            "Sodium Chloride (NaCl) 78%",
                            "Magnesium Chloride 11%",
                            "Other salts 11%"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Salinity Pattern: 'HIGH at Horse, LOW at Lips'",
                    trick: "H-L pattern",
                    meaning: [
                        { letter: "H", word: "High at Horse Latitudes", hint: "30° = high evaporation, deserts" },
                        { letter: "L", word: "Low at 'Lips'", hint: "Equator (0°) & Poles (90°) = low salinity" }
                    ],
                    visual: "🐴👄 Horse latitudes have HIGH salinity. Lips (top/bottom = poles & middle = equator) have LOW!"
                },
                {
                    title: "High Salinity Seas: 'MRS Dead'",
                    trick: "M-R-S-D",
                    meaning: [
                        { letter: "M", word: "Mediterranean Sea", hint: "38-39‰" },
                        { letter: "R", word: "Red Sea", hint: "40‰ - highest enclosed sea" },
                        { letter: "S", word: "Salty enclosed seas", hint: "Limited freshwater input" },
                        { letter: "D", word: "Dead Sea", hint: "340‰! - not really a sea, a lake" }
                    ],
                    visual: "💀 MRS is DEAD from too much salt!"
                },
                {
                    title: "Factors: 'REIT' affects salinity",
                    trick: "R-E-I-T",
                    meaning: [
                        { letter: "R", word: "Rainfall", hint: "More rain = lower salinity" },
                        { letter: "E", word: "Evaporation", hint: "More evaporation = higher salinity" },
                        { letter: "I", word: "Inflow (rivers)", hint: "More rivers = lower salinity" },
                        { letter: "T", word: "Temperature", hint: "Affects evaporation rate" }
                    ],
                    visual: "🏠 REIT like real estate - location factors determine salinity 'value'!"
                }
            ],

            concepts: [
                {
                    title: "📊 What is Salinity?",
                    icon: "🧂",
                    points: [
                        "• Amount of dissolved salts in seawater",
                        "• Measured in PPT (parts per thousand) or ‰",
                        "• Average ocean salinity = 35 ppt (35 grams salt per kg water)",
                        "• Main component: Sodium Chloride (NaCl) = 78% of sea salt"
                    ]
                },
                {
                    title: "📍 Horizontal Distribution",
                    icon: "🗺️",
                    points: [
                        "• EQUATOR (0°): LOW salinity - high rainfall dilutes salt",
                        "• SUBTROPICS (20-30°): HIGHEST salinity - high evaporation, low rainfall",
                        "• POLES: LOW salinity - ice melting adds freshwater",
                        "• Pattern: Low → High → Low → High → Low (0° to 90°)"
                    ]
                },
                {
                    title: "📈 Vertical Distribution",
                    icon: "⬇️",
                    points: [
                        "• SURFACE: Variable (affected by sun, rain, rivers)",
                        "• HALOCLINE: Layer where salinity changes rapidly (200-1000m)",
                        "• DEEP OCEAN: Uniform ~35 ppt (no external factors)",
                        "• Salinity affects water density → drives deep ocean circulation"
                    ]
                },
                {
                    title: "🌡️ Factors Affecting Salinity",
                    icon: "⚡",
                    points: [
                        "• EVAPORATION: High = more salinity (water leaves, salt stays)",
                        "• PRECIPITATION: High = less salinity (dilution)",
                        "• RIVER INFLOW: Near estuaries = low salinity",
                        "• ICE MELTING: Polar regions = low salinity seasonally"
                    ]
                },
                {
                    title: "🌍 Notable Salinity Extremes",
                    icon: "📌",
                    points: [
                        "• HIGHEST: Red Sea (40‰), Mediterranean (38-39‰)",
                        "• LOWEST: Baltic Sea (7‰), Bay of Bengal (lower than Arabian Sea)",
                        "• Dead Sea: 340‰ (technically a lake, hypersaline)",
                        "• Bay of Bengal lower than Arabian Sea due to river discharge (Ganga, Brahmaputra)"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "latitude-graph",
                    title: "Salinity vs Latitude",
                    icon: "📈",
                    description: "Graph showing salinity pattern: low at equator, high at 20-30°, low at poles"
                },
                {
                    type: "vertical-profile",
                    title: "Depth vs Salinity",
                    icon: "📊",
                    description: "Shows surface variation, halocline zone, uniform deep water"
                },
                {
                    type: "world-map",
                    title: "Global Sea Surface Salinity",
                    icon: "🗺️",
                    description: "Color-coded map showing salinity variations across oceans"
                }
            ],

            quickFacts: [
                { icon: "🧂", fact: "78% of sea salt is Sodium Chloride (table salt)" },
                { icon: "📊", fact: "Average ocean salinity = 35 ppt (35 grams per kg)" },
                { icon: "🔴", fact: "Red Sea has highest salinity among major seas (~40‰)" },
                { icon: "🔵", fact: "Baltic Sea has lowest salinity (~7‰) - almost freshwater!" },
                { icon: "🇮🇳", fact: "Bay of Bengal is less salty than Arabian Sea - river discharge" },
                { icon: "💀", fact: "Dead Sea = 340‰ (10× normal) - you float automatically!" },
                { icon: "🌊", fact: "Salinity differences drive thermohaline circulation (global conveyor)" }
            ],

            traps: [
                {
                    wrong: "Equator has highest salinity because it's hottest",
                    correct: "SUBTROPICS (20-30°) have highest salinity, not equator",
                    explanation: "Equator has high RAINFALL that dilutes the salt"
                },
                {
                    wrong: "Polar regions have high salinity due to ice",
                    correct: "Polar regions have LOW salinity - ice melting adds freshwater",
                    explanation: "However, ice formation INCREASES salinity (salt rejected)"
                },
                {
                    wrong: "Dead Sea is the world's saltiest sea",
                    correct: "Dead Sea is a LAKE, not a sea. Among true seas, Red Sea is saltiest",
                    explanation: "Red Sea ~40‰, Dead Sea ~340‰ but it's landlocked"
                },
                {
                    wrong: "Salinity is uniform throughout ocean depth",
                    correct: "Salinity varies at surface, has HALOCLINE zone, then uniform at depth",
                    explanation: "Surface affected by rain/evaporation, deep ocean is stable"
                }
            ],

            revision: {
                oneLiner: "Average 35 ppt (NaCl 78%). Pattern: Low (equator, rain) → High (20-30°, evaporation) → Low (poles, ice melt). Red Sea highest (40‰), Baltic lowest (7‰). Bay of Bengal < Arabian Sea (rivers).",
                keyPoints: [
                    "Salinity = dissolved salts, measured in ppt (parts per thousand)",
                    "Highest at subtropics (20-30°) due to evaporation > precipitation",
                    "Lowest at equator (rain), poles (ice melt), river mouths",
                    "Vertical: Variable surface → Halocline → Uniform deep"
                ],
                examTip: "Why Bay of Bengal lower than Arabian Sea? Ganga, Brahmaputra discharge huge freshwater. Arabian Sea is enclosed, higher evaporation."
            }
        },

        // ═══════════════════════════════════════════════════════════════
        // 🌱 BIOGEOGRAPHY & SOIL
        // ═══════════════════════════════════════════════════════════════

        // ─────────────────────────────────────────
        // 🌱 SOIL FORMATION & TYPES
        // ─────────────────────────────────────────
        {
            id: "soil-formation",
            name: "Soil Formation & Types",
            category: "physical",
            subcategory: "biogeography",
            theme: "soil",
            difficulty: "high",
            importance: "very-high",
            studyTime: "60 min",

            mindMap: {
                center: "🌱 Soil",
                branches: [
                    {
                        name: "⚡ FORMATION FACTORS",
                        color: "#8b4513",
                        subs: [
                            "Parent Rock (bedrock)",
                            "Climate (temp, rainfall)",
                            "Organisms (bio activity)",
                            "Relief/Topography",
                            "Time"
                        ]
                    },
                    {
                        name: "📊 SOIL PROFILE",
                        color: "#27ae60",
                        subs: [
                            "O Horizon (organic)",
                            "A Horizon (topsoil)",
                            "B Horizon (subsoil)",
                            "C Horizon (regolith)",
                            "R Horizon (bedrock)"
                        ]
                    },
                    {
                        name: "🇮🇳 INDIAN SOILS",
                        color: "#e74c3c",
                        subs: [
                            "Alluvial (largest)",
                            "Black/Regur",
                            "Red & Yellow",
                            "Laterite",
                            "Desert (Arid)",
                            "Mountain/Forest"
                        ]
                    },
                    {
                        name: "🌍 WORLD SOILS",
                        color: "#3498db",
                        subs: [
                            "Podzol (cold regions)",
                            "Chernozem (grasslands)",
                            "Laterite (tropics)",
                            "Desert soils"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Soil Formation Factors: 'CLORPT'",
                    trick: "C-L-O-R-P-T",
                    meaning: [
                        { letter: "C", word: "Climate", hint: "Temperature & moisture" },
                        { letter: "L", word: "Living organisms", hint: "Plants, animals, microbes" },
                        { letter: "O", word: "Organic matter", hint: "Humus accumulation" },
                        { letter: "R", word: "Relief/Topography", hint: "Slope, drainage" },
                        { letter: "P", word: "Parent material", hint: "Bedrock type" },
                        { letter: "T", word: "Time", hint: "Age of soil formation" }
                    ],
                    visual: "🪴 CLORPT sounds like 'CHLOR-POT' - a pot where soil grows!"
                },
                {
                    title: "Soil Horizons: 'OAB-CR' = O Above Bedrock, Creating Root-zone",
                    trick: "O-A-B-C-R",
                    meaning: [
                        { letter: "O", word: "Organic layer", hint: "Leaf litter, humus" },
                        { letter: "A", word: "Topsoil", hint: "Dark, nutrients, roots" },
                        { letter: "B", word: "Subsoil", hint: "Accumulation zone (illuviation)" },
                        { letter: "C", word: "Weathered rock (Regolith)", hint: "Broken bedrock" },
                        { letter: "R", word: "Bedrock", hint: "Solid rock base" }
                    ],
                    visual: "📚 O-A-B-C-R like reading downward into Earth!"
                },
                {
                    title: "Indian Soils: 'A BLACK RED LAtE DESErt FOREST Morning'",
                    trick: "Major soil types",
                    meaning: [
                        { letter: "A", word: "Alluvial", hint: "Ganga plains, largest" },
                        { letter: "BLACK", word: "Black/Regur", hint: "Deccan, cotton soil" },
                        { letter: "RED", word: "Red & Yellow", hint: "Crystalline rocks" },
                        { letter: "LATE", word: "Laterite", hint: "Heavy rain, leached" },
                        { letter: "DESERT", word: "Desert/Arid", hint: "Rajasthan" },
                        { letter: "FOREST", word: "Forest/Mountain", hint: "Himalayan, acidic" }
                    ],
                    visual: "☀️ A BLACK RED sunrise LATE in DESERT FOREST morning!"
                }
            ],

            concepts: [
                {
                    title: "⚗️ Soil Formation (Pedogenesis)",
                    icon: "🔬",
                    points: [
                        "• WEATHERING: Physical + Chemical breakdown of parent rock",
                        "• HUMIFICATION: Organic matter decomposition adds nutrients",
                        "• LEACHING: Water carries minerals downward (eluviation)",
                        "• ACCUMULATION: Minerals deposit in lower layers (illuviation)"
                    ]
                },
                {
                    title: "📊 Soil Profile Layers",
                    icon: "📐",
                    points: [
                        "• O HORIZON: Surface organic matter (leaf litter, humus)",
                        "• A HORIZON: Topsoil - dark, nutrient-rich, most roots here",
                        "• B HORIZON: Subsoil - accumulation of leached minerals (iron, clay)",
                        "• C HORIZON: Regolith - weathered parent rock fragments",
                        "• R HORIZON: Bedrock - unweathered solid rock"
                    ]
                },
                {
                    title: "🏞️ Alluvial Soil (India)",
                    icon: "🌾",
                    points: [
                        "• LARGEST coverage in India - entire Indo-Gangetic plain",
                        "• Deposited by rivers (Ganga, Indus, Brahmaputra)",
                        "• KHADAR: New alluvium, floods annually, more fertile",
                        "• BHANGAR: Old alluvium, higher ground, contains kankar (calcium nodules)",
                        "• Best for: Rice, wheat, sugarcane, jute"
                    ]
                },
                {
                    title: "⬛ Black/Regur Soil",
                    icon: "🖤",
                    points: [
                        "• Derived from BASALT (Deccan Traps volcanic rock)",
                        "• High MOISTURE RETENTION - swells wet, cracks dry (self-plowing)",
                        "• Rich in: Calcium, Magnesium, Potash; Poor in: Nitrogen, Phosphorus",
                        "• Black color from iron-titanium compounds",
                        "• Best for: COTTON (hence 'Black Cotton Soil'), also oilseeds"
                    ]
                },
                {
                    title: "🔴 Red & Laterite Soils",
                    icon: "🟤",
                    points: [
                        "• RED SOIL: From crystalline igneous rocks, iron oxide gives color",
                        "• Found in: Odisha, Jharkhand, Tamil Nadu, Karnataka",
                        "• LATERITE: Heavy leaching in high rainfall tropics",
                        "• Hard when dry (used for building bricks!), soft when wet",
                        "• Laterite needs fertilizers - nutrients leached away"
                    ]
                },
                {
                    title: "🏜️ Desert & Mountain Soils",
                    icon: "🏔️",
                    points: [
                        "• DESERT: Sandy, saline, low humus, found in Rajasthan, Gujarat",
                        "• High evaporation = salt accumulation (alkaline)",
                        "• MOUNTAIN: Thin, immature, acidic (conifers add acid)",
                        "• Found in Himalayas, Western Ghats peaks",
                        "• Rich in humus at higher elevations but poorly developed"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "profile",
                    title: "Soil Profile Layers",
                    icon: "📊",
                    description: "Vertical cross-section showing O, A, B, C, R horizons with labels"
                },
                {
                    type: "india-map",
                    title: "Soil Types of India",
                    icon: "🗺️",
                    description: "Color-coded map showing distribution of 6 major soil types"
                },
                {
                    type: "comparison",
                    title: "Khadar vs Bhangar",
                    icon: "⚖️",
                    description: "Table comparing new vs old alluvium characteristics"
                },
                {
                    type: "process",
                    title: "Laterization Process",
                    icon: "🔄",
                    description: "Shows heavy rainfall leaching silica, leaving iron/aluminum oxides"
                }
            ],

            quickFacts: [
                { icon: "📏", fact: "1 cm of topsoil takes 200-1000 years to form" },
                { icon: "🌾", fact: "Alluvial soil covers 40% of India's land area" },
                { icon: "⬛", fact: "Black soil can crack up to 50 cm deep when dry (self-plowing)" },
                { icon: "🧱", fact: "Laterite means 'brick' in Latin - used for building (Konkan coast)" },
                { icon: "🏜️", fact: "Desert soils have 90% sand and very low organic matter" },
                { icon: "❄️", fact: "Mountain soils above 3000m have pH < 6 (acidic)" },
                { icon: "🔴", fact: "Red soil color = hematite (Fe₂O₃), Yellow = limonite (hydrated iron)" }
            ],

            traps: [
                {
                    wrong: "Black soil is formed from organic matter (humus)",
                    correct: "Black color is from IRON-TITANIUM compounds, not humus",
                    explanation: "Black soil actually has LOW organic matter"
                },
                {
                    wrong: "Khadar is less fertile than Bhangar",
                    correct: "KHADAR (new alluvium) is MORE fertile than Bhangar (old)",
                    explanation: "Khadar gets fresh nutrient deposits from annual floods"
                },
                {
                    wrong: "Laterite is highly fertile due to heavy rainfall",
                    correct: "Laterite is POOR in nutrients - heavy rain leaches them away",
                    explanation: "Only iron & aluminum oxides remain, nutrients washed out"
                },
                {
                    wrong: "Red soil is red due to blood-like organic matter",
                    correct: "Red color is due to IRON OXIDE (hematite/Fe₂O₃)",
                    explanation: "Iron minerals oxidize (rust) giving red-yellow colors"
                }
            ],

            revision: {
                oneLiner: "Factors: CLORPT. Profile: O-A-B-C-R (down). India: Alluvial (largest, rivers), Black (Deccan, cotton), Red (iron), Laterite (leached, bricks), Desert (sandy), Mountain (acidic). Khadar (new) > Bhangar (old) fertility.",
                keyPoints: [
                    "Alluvial: 40% of India, Khadar (new/fertile) vs Bhangar (old/kankar)",
                    "Black/Regur: Basalt origin, self-plowing, cotton, moisture retention",
                    "Laterite: Heavy rain leaches nutrients, hardpan, needs fertilizers",
                    "Red: Iron oxide color, crystalline rock parent material"
                ],
                examTip: "Black soil is POOR in Nitrogen & Phosphorus but RICH in Calcium, Potash, Magnesium. Laterite used for BRICKS (Karnataka, Kerala houses)."
            }
        },

        // ═══════════════════════════════════════════════════════════════
        // 🇮🇳 II. GEOGRAPHY OF INDIA
        // ═══════════════════════════════════════════════════════════════

        // ─────────────────────────────────────────
        // 🏔️ HIMALAYAS
        // ─────────────────────────────────────────
        {
            id: "himalayas",
            name: "The Himalayas",
            category: "india",
            subcategory: "physical-india",
            theme: "mountain",
            difficulty: "high",
            importance: "very-high",
            studyTime: "60 min",

            mindMap: {
                center: "🏔️ Himalayas",
                branches: [
                    {
                        name: "📍 THREE RANGES",
                        color: "#3498db",
                        subs: [
                            "Greater Himalayas (Himadri)",
                            "Lesser Himalayas (Himachal)",
                            "Outer Himalayas (Shiwalik)"
                        ]
                    },
                    {
                        name: "📏 DIVISIONS (W to E)",
                        color: "#e74c3c",
                        subs: [
                            "Kashmir Himalayas",
                            "Himachal Himalayas",
                            "Kumaon Himalayas",
                            "Nepal Himalayas",
                            "Assam Himalayas"
                        ]
                    },
                    {
                        name: "⛰️ KEY PEAKS",
                        color: "#f39c12",
                        subs: [
                            "Everest (8848m) - Nepal",
                            "K2 (8611m) - India/Pak",
                            "Kanchenjunga (8586m) - Sikkim",
                            "Nanda Devi (7816m) - India"
                        ]
                    },
                    {
                        name: "🚪 PASSES",
                        color: "#27ae60",
                        subs: [
                            "Khyber, Bolan (W)",
                            "Shipki La, Bara-Lacha",
                            "Nathu La, Jelep La (E)",
                            "Karakoram Pass"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Three Ranges: 'Great Lessons in Outer Space'",
                    trick: "G-L-O (North to South)",
                    meaning: [
                        { letter: "G", word: "Greater Himalayas (Himadri)", hint: "Highest, all 8000m peaks" },
                        { letter: "L", word: "Lesser Himalayas (Himachal)", hint: "Hill stations, Pir Panjal" },
                        { letter: "O", word: "Outer Himalayas (Shiwalik)", hint: "Lowest, foothills, Duns" }
                    ],
                    visual: "🏔️ GLO like GLOW - Himalayas glow with snow from Great to Outer!"
                },
                {
                    title: "Himalayan Divisions W to E: 'KKNNA'",
                    trick: "K-K-N-N-A",
                    meaning: [
                        { letter: "K", word: "Kashmir", hint: "Zanskar, Ladakh, Karakoram" },
                        { letter: "K", word: "Kumaon-Garhwal", hint: "Uttarakhand, Nanda Devi" },
                        { letter: "N", word: "Nepal", hint: "Everest, Annapurna" },
                        { letter: "N", word: "Sikkim-Darjeeling", hint: "Kanchenjunga" },
                        { letter: "A", word: "Assam-Arunachal", hint: "Purvanchal hills" }
                    ],
                    visual: "🗺️ KKNNA - like 'KHANNA' surname - travel W to E across Himalayas!"
                },
                {
                    title: "Highest Peaks: 'Every Kid Knows Mountains'",
                    trick: "E-K-K-M",
                    meaning: [
                        { letter: "E", word: "Everest", hint: "8848m, Nepal, highest on Earth" },
                        { letter: "K", word: "K2", hint: "8611m, Karakoram, 2nd highest" },
                        { letter: "K", word: "Kanchenjunga", hint: "8586m, Sikkim, 3rd highest" },
                        { letter: "M", word: "Makalu", hint: "8463m, Nepal, 5th highest" }
                    ],
                    visual: "👧 EVERY KID KNOWS MOUNTAINS - world's highest in order!"
                }
            ],

            concepts: [
                {
                    title: "🏔️ Greater Himalayas (Himadri)",
                    icon: "❄️",
                    points: [
                        "• HIGHEST range - average 6000m, all peaks above 8000m here",
                        "• Perpetual snow, glaciers (Siachen, Gangotri, Zemu)",
                        "• Includes: Everest, K2, Kanchenjunga, Nanga Parbat",
                        "• Core of folded mountains, granite & metamorphic rocks"
                    ]
                },
                {
                    title: "⛰️ Lesser Himalayas (Himachal)",
                    icon: "🌲",
                    points: [
                        "• Average height: 3700-4500m",
                        "• Contains: Pir Panjal, Dhaula Dhar, Mahabharat, Mussoorie ranges",
                        "• ALL MAJOR HILL STATIONS: Shimla, Mussoorie, Nainital, Darjeeling",
                        "• Kashmir Valley and Kullu Valley are here"
                    ]
                },
                {
                    title: "🏕️ Outer Himalayas (Shiwalik)",
                    icon: "🌿",
                    points: [
                        "• LOWEST range - 900-1200m average",
                        "• Composed of unconsolidated sediments (easily erodes)",
                        "• Contains DUNS: Dehradun, Haridwar, Kotli Dun",
                        "• Terai region at foothills - marshy, forested"
                    ]
                },
                {
                    title: "🌊 Trans-Himalayas",
                    icon: "🏜️",
                    points: [
                        "• NORTH of Greater Himalayas - Karakoram, Ladakh, Zaskar ranges",
                        "• K2 (8611m) is in Karakoram, NOT Himalayas proper",
                        "• Cold desert climate - Ladakh, Spiti",
                        "• Important passes: Khardung La, Karakoram Pass"
                    ]
                },
                {
                    title: "🚗 Important Passes",
                    icon: "🚪",
                    points: [
                        "• WEST: Khyber, Bolan (Pakistan), historical invasion routes",
                        "• J&K: Zoji La (Srinagar-Leh), Banihal (Jammu-Srinagar)",
                        "• HP: Shipki La, Rohtang, Bara-Lacha La (Manali-Leh)",
                        "• Sikkim: Nathu La, Jelep La (India-China trade)"
                    ]
                },
                {
                    title: "🌏 Formation & Significance",
                    icon: "⚡",
                    points: [
                        "• Formed by India-Eurasia collision (50 million years ago), still rising!",
                        "• Blocks cold Central Asian winds → keeps India warm",
                        "• Stops monsoon winds → causes heavy rainfall in India",
                        "• Source of major rivers: Ganga, Indus, Brahmaputra"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "cross-section",
                    title: "Himalayan Ranges Profile",
                    icon: "📐",
                    description: "North to South: Trans-Himalayas → Greater → Lesser → Shiwalik → Plains"
                },
                {
                    type: "map",
                    title: "Himalayan Divisions Map",
                    icon: "🗺️",
                    description: "W to E divisions with major peaks and passes marked"
                },
                {
                    type: "3d-view",
                    title: "Three Parallel Ranges",
                    icon: "🏔️",
                    description: "3D view showing three ranges with relative heights and features"
                }
            ],

            quickFacts: [
                { icon: "📏", fact: "Himalayas stretch 2,400 km from Nanga Parbat to Namcha Barwa" },
                { icon: "⬆️", fact: "Himalayas rise ~1 cm per year - still growing!" },
                { icon: "🏔️", fact: "9 of world's 10 highest peaks are in Himalayas (including K2 in Karakoram)" },
                { icon: "🧊", fact: "Siachen Glacier (76 km) is world's 2nd longest non-polar glacier" },
                { icon: "🚗", fact: "Khardung La (5,359m) claims to be world's highest motorable road" },
                { icon: "🇮🇳", fact: "Kanchenjunga (8,586m) is highest peak entirely in India" },
                { icon: "🌧️", fact: "Mawsynram/Cherrapunji get extreme rain due to Himalayan barrier effect" }
            ],

            traps: [
                {
                    wrong: "K2 is in the Himalayas",
                    correct: "K2 is in KARAKORAM range (Trans-Himalayas), not Himalayas proper",
                    explanation: "Karakoram is separate range north of Himalayas"
                },
                {
                    wrong: "Everest is in India",
                    correct: "Everest is on Nepal-China (Tibet) border, NOT India",
                    explanation: "India's highest is Kanchenjunga on Sikkim-Nepal border"
                },
                {
                    wrong: "Shiwalik is the highest range",
                    correct: "SHIWALIK is the LOWEST range; Greater Himalayas is HIGHEST",
                    explanation: "Height increases northward: Shiwalik < Lesser < Greater"
                },
                {
                    wrong: "Duns are found in Greater Himalayas",
                    correct: "Duns (longitudinal valleys) are in SHIWALIK (Outer Himalayas)",
                    explanation: "Dehradun, Patli Dun, Kotli Dun are between Shiwalik hills"
                }
            ],

            revision: {
                oneLiner: "Three ranges (N→S): Greater (highest, 8000m peaks) → Lesser (hill stations, valleys) → Shiwalik (lowest, Duns). W→E: Kashmir-Kumaon-Nepal-Sikkim-Assam. K2 in Karakoram (Trans-Himalaya), not Himalaya. Rising 1cm/year.",
                keyPoints: [
                    "Greater: Everest, Kanchenjunga, glaciers (Siachen, Gangotri)",
                    "Lesser: Hill stations (Shimla, Mussoorie), Pir Panjal, Kashmir Valley",
                    "Shiwalik: Duns (Dehradun), Terai forests, sedimentary",
                    "Trans-Himalayas: Karakoram (K2), Ladakh, cold desert"
                ],
                examTip: "Nanda Devi (7816m) = highest peak entirely within India. Kanchenjunga is on India-Nepal border. Aravalli is OLDEST mountain, Himalaya is YOUNGEST (fold mountain)."
            }
        },

        // ─────────────────────────────────────────
        // 🌊 INDIAN MONSOON
        // ─────────────────────────────────────────
        {
            id: "indian-monsoon",
            name: "Indian Monsoon",
            category: "india",
            subcategory: "climate-india",
            theme: "climate",
            difficulty: "very-high",
            importance: "very-high",
            studyTime: "75 min",

            mindMap: {
                center: "🌧️ Indian Monsoon",
                branches: [
                    {
                        name: "⚡ MECHANISM",
                        color: "#3498db",
                        subs: [
                            "Differential heating",
                            "ITCZ shift northward",
                            "Subtropical Jet withdrawal",
                            "Tropical Easterly Jet onset",
                            "Somali Jet (Low Level)"
                        ]
                    },
                    {
                        name: "🌬️ SW MONSOON",
                        color: "#27ae60",
                        subs: [
                            "June to September",
                            "Arabian Sea branch",
                            "Bay of Bengal branch",
                            "75% of annual rain"
                        ]
                    },
                    {
                        name: "🌬️ NE MONSOON",
                        color: "#e74c3c",
                        subs: [
                            "October to December",
                            "Retreating monsoon",
                            "Tamil Nadu gets rain",
                            "Cyclonic activity"
                        ]
                    },
                    {
                        name: "📊 VARIATIONS",
                        color: "#f39c12",
                        subs: [
                            "El Niño (weak monsoon)",
                            "La Niña (strong monsoon)",
                            "IOD (Indian Ocean Dipole)",
                            "Break monsoon periods"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Monsoon Mechanism: 'STIFF' Factors",
                    trick: "S-T-I-F-F",
                    meaning: [
                        { letter: "S", word: "Sun's apparent movement", hint: "Sun over Tropic of Cancer in June" },
                        { letter: "T", word: "Thermal contrast", hint: "Land heats faster than ocean" },
                        { letter: "I", word: "ITCZ shift", hint: "Moves to 20-25°N over Ganga plain" },
                        { letter: "F", word: "Ferrel & Coriolis", hint: "Deflect winds to SW direction" },
                        { letter: "F", word: "Flux (Jet streams)", hint: "Subtropical Jet leaves, TEJ arrives" }
                    ],
                    visual: "💪 Monsoon is STIFF and strong - all factors work together!"
                },
                {
                    title: "Two Branches: 'BABA - Bay Arabian Bring All'",
                    trick: "B-A-B-A",
                    meaning: [
                        { letter: "B", word: "Bay of Bengal branch", hint: "NE India, Bengal, Bihar" },
                        { letter: "A", word: "Arrives earlier (June 1)", hint: "Hits Kerala first" },
                        { letter: "B", word: "Arabian Sea branch", hint: "Western Ghats, Mumbai" },
                        { letter: "A", word: "Also June but slower", hint: "Parallel advance" }
                    ],
                    visual: "👴 BABA (grandfather) brings rain every June like clockwork!"
                },
                {
                    title: "Monsoon Dates: 'June 1st Kerala, July 15 All India'",
                    trick: "J-1-K → J-15-A",
                    meaning: [
                        { letter: "J1K", word: "June 1st Kerala", hint: "Onset date (±7 days)" },
                        { letter: "J15A", word: "July 15 all India", hint: "Covers entire country" }
                    ],
                    visual: "📅 June 1 = START (Kerala), July 15 = FULL (all India)"
                },
                {
                    title: "El Niño Effect: 'EL = Extreme Loss'",
                    trick: "E-L",
                    meaning: [
                        { letter: "E", word: "El Niño", hint: "Warm Pacific = weak Indian monsoon" },
                        { letter: "L", word: "Loss of rain", hint: "Droughts in India during El Niño years" }
                    ],
                    visual: "🌊 EL Niño = Extra warm Pacific = Less rain in India!"
                }
            ],

            concepts: [
                {
                    title: "☀️ Why Does Monsoon Happen?",
                    icon: "❓",
                    points: [
                        "• DIFFERENTIAL HEATING: Land heats faster than ocean in summer",
                        "• Creates LOW PRESSURE over Indian landmass (Thar Desert)",
                        "• High pressure over Indian Ocean → winds blow from sea to land",
                        "• Coriolis deflects SE Trade Winds → become SW Monsoon winds"
                    ]
                },
                {
                    title: "✈️ Jet Stream Role",
                    icon: "💨",
                    points: [
                        "• WINTER: Subtropical Jet SOUTH of Himalayas → blocks monsoon",
                        "• JUNE: Jet shifts NORTH of Himalayas → monsoon bursts!",
                        "• SUMMER: Tropical Easterly Jet (TEJ) appears at 15°N",
                        "• Strong TEJ = GOOD monsoon; Weak TEJ = poor monsoon"
                    ]
                },
                {
                    title: "🌊 Arabian Sea Branch",
                    icon: "⬅️",
                    points: [
                        "• Hits Kerala coast first (June 1) → 'Monsoon burst'",
                        "• Moves north along Western Ghats → heavy rain on windward side",
                        "• Mumbai, Konkan, Western Ghats get intense rain",
                        "• Rain shadow: Deccan interior stays dry"
                    ]
                },
                {
                    title: "🌊 Bay of Bengal Branch",
                    icon: "➡️",
                    points: [
                        "• Enters through Myanmar, splits into TWO branches",
                        "• NE Branch: Meghalaya plateau → HIGHEST rainfall (Mawsynram, Cherrapunji)",
                        "• NW Branch: Moves up Ganga plain → July 15 reaches Punjab",
                        "• Gives maximum rain to NE India, Bengal, Bihar"
                    ]
                },
                {
                    title: "📅 Monsoon Calendar",
                    icon: "🗓️",
                    points: [
                        "• ONSET: June 1 (Kerala) → June 10 (Mumbai) → July 15 (all India)",
                        "• PEAK: July-August (heaviest rain)",
                        "• WITHDRAWAL: Sept 1 (Rajasthan) → Oct 15 (Tamil Nadu)",
                        "• RETREAT: October-November brings cyclones to Bay of Bengal"
                    ]
                },
                {
                    title: "🌡️ El Niño & La Niña",
                    icon: "🌊",
                    points: [
                        "• EL NIÑO: Pacific warms → Indian monsoon WEAKENS → droughts",
                        "• LA NIÑA: Pacific cools → Indian monsoon STRENGTHENS → floods",
                        "• IOD Positive: Warm western Indian Ocean → good monsoon",
                        "• IOD + La Niña = excellent monsoon years"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "mechanism",
                    title: "Monsoon Mechanism",
                    icon: "⚡",
                    description: "Shows pressure systems, ITCZ position, jet stream shift, wind direction"
                },
                {
                    type: "map",
                    title: "Two Branches Path",
                    icon: "🗺️",
                    description: "India map showing Arabian Sea & Bay of Bengal branch paths with dates"
                },
                {
                    type: "timeline",
                    title: "Monsoon Onset Calendar",
                    icon: "📅",
                    description: "Month-wise progression: June 1 Kerala → July 15 Punjab/Rajasthan"
                },
                {
                    type: "enso",
                    title: "El Niño Effect on Monsoon",
                    icon: "🌊",
                    description: "Pacific temperature map + India rainfall correlation"
                }
            ],

            quickFacts: [
                { icon: "💧", fact: "SW Monsoon brings 75% of India's annual rainfall" },
                { icon: "📅", fact: "Normal onset: June 1 (Kerala), July 15 (entire India)" },
                { icon: "🌧️", fact: "Mawsynram & Cherrapunji: 11,000+ mm rain/year (world's wettest)" },
                { icon: "🏜️", fact: "Thar Desert gets <25 cm rain - monsoon doesn't reach effectively" },
                { icon: "🌡️", fact: "Pre-monsoon: 'Loo' hot winds in North India (May-June)" },
                { icon: "⛈️", fact: "Monsoon trough position determines rainfall distribution" },
                { icon: "📊", fact: "Break monsoon: 1-2 week pause, trough shifts to Himalayas" }
            ],

            traps: [
                {
                    wrong: "Monsoon comes from Indian Ocean",
                    correct: "SW Monsoon is SE Trade Winds that CROSS equator and get deflected",
                    explanation: "They originate in Southern Hemisphere, not Indian Ocean directly"
                },
                {
                    wrong: "Kerala gets monsoon first because it's southernmost",
                    correct: "Kerala gets first because moisture-laden winds first encounter LAND there",
                    explanation: "Sri Lanka doesn't block - winds curve around and hit Kerala"
                },
                {
                    wrong: "NE Monsoon brings rain to all of India",
                    correct: "NE Monsoon mainly benefits TAMIL NADU (50% of its rain)",
                    explanation: "Rest of India has dry winter; only TN gets Oct-Nov rain"
                },
                {
                    wrong: "El Niño always causes drought in India",
                    correct: "El Niño USUALLY weakens monsoon, but positive IOD can compensate",
                    explanation: "2019 had El Niño but positive IOD gave normal monsoon"
                }
            ],

            revision: {
                oneLiner: "SW Monsoon (June-Sept, 75% rain): ITCZ shifts north, Subtropical Jet leaves, TEJ arrives. Two branches: Arabian (Western Ghats) + Bay of Bengal (NE India, Ganga plain). NE Monsoon (Oct-Dec) gives rain to Tamil Nadu. El Niño = weak, La Niña = strong monsoon.",
                keyPoints: [
                    "Mechanism: Differential heating + ITCZ shift + Jet stream change",
                    "Onset: June 1 Kerala → July 15 all India → Sept 1 withdrawal starts",
                    "Arabian branch: Western coast; Bay branch: NE India, Ganga plain",
                    "Highest rain: Mawsynram (11,000mm); Lowest: W. Rajasthan (<25cm)"
                ],
                examTip: "Monsoon trough (low pressure) lies along Ganga plain. If it shifts to Himalayas = Break monsoon (dry spell in plains, floods in Himalayan foothills)."
            }
        },

        // ─────────────────────────────────────────
        // 🌊 INDIAN RIVERS - DRAINAGE SYSTEM
        // ─────────────────────────────────────────
        {
            id: "indian-rivers",
            name: "Indian Rivers & Drainage",
            category: "india",
            subcategory: "drainage",
            theme: "river",
            difficulty: "high",
            importance: "very-high",
            studyTime: "70 min",

            mindMap: {
                center: "🌊 Indian Drainage",
                branches: [
                    {
                        name: "🏔️ HIMALAYAN RIVERS",
                        color: "#3498db",
                        subs: [
                            "Perennial (snow-fed)",
                            "Ganga System",
                            "Indus System",
                            "Brahmaputra System",
                            "Young, deep valleys"
                        ]
                    },
                    {
                        name: "🏜️ PENINSULAR RIVERS",
                        color: "#e74c3c",
                        subs: [
                            "Seasonal (rain-fed)",
                            "East-flowing (Godavari, Krishna)",
                            "West-flowing (Narmada, Tapi)",
                            "Mature, shallow valleys"
                        ]
                    },
                    {
                        name: "🌊 DRAINAGE PATTERNS",
                        color: "#27ae60",
                        subs: [
                            "Dendritic (Ganga)",
                            "Trellis (Himalayan)",
                            "Radial (Amarkantak)",
                            "Centripetal (inland)"
                        ]
                    },
                    {
                        name: "⚡ KEY CONCEPTS",
                        color: "#f39c12",
                        subs: [
                            "Antecedent rivers",
                            "River capture/piracy",
                            "Water divide",
                            "Doabs & Basins"
                        ]
                    }
                ]
            },

            mnemonics: [
                {
                    title: "Himalayan Rivers: 'GIB' - Three Major Systems",
                    trick: "G-I-B",
                    meaning: [
                        { letter: "G", word: "Ganga", hint: "Largest basin in India, Bay of Bengal" },
                        { letter: "I", word: "Indus", hint: "Originates in Tibet, flows to Pakistan" },
                        { letter: "B", word: "Brahmaputra", hint: "From Tibet (Tsangpo), NE India, Bangladesh" }
                    ],
                    visual: "🎁 GIB like 'GIVE' - Himalayan rivers GIVE water year-round!"
                },
                {
                    title: "East-Flowing Peninsular: 'MGK CKP'",
                    trick: "M-G-K C-K-P (North to South)",
                    meaning: [
                        { letter: "M", word: "Mahanadi", hint: "Odisha, Hirakud Dam" },
                        { letter: "G", word: "Godavari", hint: "Longest peninsular, 'Dakshin Ganga'" },
                        { letter: "K", word: "Krishna", hint: "Maharashtra, Karnataka, AP" },
                        { letter: "C", word: "Cauvery", hint: "Karnataka, Tamil Nadu" },
                        { letter: "K", word: "Kaveri (alt. spelling)", hint: "Dispute between KA-TN" },
                        { letter: "P", word: "Pennar, Palar", hint: "Smaller rivers" }
                    ],
                    visual: "📱 MGK CKP like 'MEGA QUICK PICKUP' of rain → Bay of Bengal!"
                },
                {
                    title: "West-Flowing: 'NaTaSaLu Ma'",
                    trick: "Na-Ta-Sa-Lu-Ma",
                    meaning: [
                        { letter: "Na", word: "Narmada", hint: "Longest west-flowing, rift valley" },
                        { letter: "Ta", word: "Tapi/Tapti", hint: "2nd longest west-flowing" },
                        { letter: "Sa", word: "Sabarmati", hint: "Gujarat, Ahmedabad" },
                        { letter: "Lu", word: "Luni", hint: "Only significant river in Rajasthan" },
                        { letter: "Ma", word: "Mahi", hint: "Gujarat" }
                    ],
                    visual: "🌅 NATASA LUMA sounds exotic - sunset over Arabian Sea where they flow!"
                },
                {
                    title: "Ganga Tributaries: 'GYRS GKS'",
                    trick: "Left Bank (North): GYRS, Right Bank (South): GKS",
                    meaning: [
                        { letter: "G", word: "Ghaghara/Ghagra", hint: "Left, from Tibet via Nepal" },
                        { letter: "Y", word: "Yamuna", hint: "Biggest tributary, Delhi" },
                        { letter: "R", word: "Ramganga", hint: "Left bank" },
                        { letter: "S", word: "Sharda/Kali", hint: "Left, India-Nepal border" },
                        { letter: "G", word: "Gomti", hint: "Left bank, Lucknow" },
                        { letter: "K", word: "Kosi", hint: "Left, 'Sorrow of Bihar' - floods" },
                        { letter: "S", word: "Son", hint: "Right bank, from Amarkantak" }
                    ],
                    visual: "📝 Left: GYRS = Ghaghara, Yamuna, Ramganga, Sharda/Gomti, Kosi. Right: Son"
                }
            ],

            concepts: [
                {
                    title: "🏔️ Himalayan vs Peninsular Rivers",
                    icon: "⚖️",
                    points: [
                        "• HIMALAYAN: Perennial (snow + rain), young, deep gorges, waterfalls",
                        "• PENINSULAR: Seasonal (only rain), old, shallow valleys, graded profile",
                        "• Himalayan: Antecedent (older than mountains!), meander in plains",
                        "• Peninsular: Follow rift valleys (Narmada, Tapi) or slope of plateau"
                    ]
                },
                {
                    title: "🌊 The Ganga System",
                    icon: "💧",
                    points: [
                        "• Origin: Gangotri Glacier (Bhagirathi) + Alaknanda → meet at Devprayag",
                        "• Length: 2,525 km, Basin: Largest in India (26% area)",
                        "• Major tributaries: Yamuna, Ghaghara, Gandak, Kosi, Son",
                        "• Ends: Sundarbans delta (world's largest) → Bay of Bengal"
                    ]
                },
                {
                    title: "🌊 The Indus System",
                    icon: "🏔️",
                    points: [
                        "• Origin: Mansarovar region (Tibet), near Kailash",
                        "• Indian tributaries: Jhelum, Chenab, Ravi, Beas, Sutlej (Punjab rivers)",
                        "• Indus Waters Treaty (1960): India gets 3 eastern rivers (Ravi, Beas, Sutlej)",
                        "• Total length: 2,880 km (longest among the three)"
                    ]
                },
                {
                    title: "🌊 The Brahmaputra System",
                    icon: "🌀",
                    points: [
                        "• Origin: Chemayungdung Glacier (Tibet), known as Tsangpo in Tibet",
                        "• Enters India at Namcha Barwa (sharp U-turn, world's largest river canyon)",
                        "• Called Dihang → Brahmaputra (Assam) → Jamuna (Bangladesh)",
                        "• Highly braided, floods annually, Majuli - world's largest river island"
                    ]
                },
                {
                    title: "🌊 East-Flowing Peninsular Rivers",
                    icon: "➡️",
                    points: [
                        "• Why east? Western Ghats = water divide, slopes east to Bay",
                        "• GODAVARI: Longest peninsular (1,465 km), 'Dakshin Ganga'",
                        "• KRISHNA: 2nd longest, Tungabhadra major tributary",
                        "• MAHANADI: Hirakud Dam, Odisha", 
                        "• CAUVERY: Karnataka-TN dispute, less water"
                    ]
                },
                {
                    title: "🌊 West-Flowing Rivers",
                    icon: "⬅️",
                    points: [
                        "• Flow through RIFT VALLEYS (fault origin), not over plateau",
                        "• NARMADA: Longest west-flowing (1,312 km), Sardar Sarovar Dam",
                        "• TAPI: Parallel to Narmada, 2nd longest west-flowing",
                        "• NO DELTA: Steep gradient, flow fast → estuaries, not deltas",
                        "• Luni: Only river in W. Rajasthan (ends in Rann of Kutch)"
                    ]
                }
            ],

            diagrams: [
                {
                    type: "map",
                    title: "Indian River Systems Map",
                    icon: "🗺️",
                    description: "Complete map showing all major rivers, basins, and drainage divide"
                },
                {
                    type: "comparison",
                    title: "Himalayan vs Peninsular Rivers",
                    icon: "⚖️",
                    description: "Table comparing origin, flow type, valley shape, age, delta formation"
                },
                {
                    type: "basin",
                    title: "Ganga Basin & Tributaries",
                    icon: "🌊",
                    description: "Detailed view of Ganga system with all tributaries marked"
                },
                {
                    type: "profile",
                    title: "River Long Profile",
                    icon: "📈",
                    description: "Himalayan (steep, waterfalls) vs Peninsular (graded, mature) profiles"
                }
            ],

            quickFacts: [
                { icon: "📏", fact: "Ganga basin covers 26% of India's total area" },
                { icon: "🏆", fact: "Godavari = longest peninsular river (1,465 km)" },
                { icon: "🌊", fact: "Brahmaputra carries most water (has highest discharge)" },
                { icon: "🏝️", fact: "Majuli (Brahmaputra) = world's largest river island" },
                { icon: "⚡", fact: "Indus originates in Tibet, flows 2,880 km to Arabian Sea" },
                { icon: "🌿", fact: "Sundarbans delta = world's largest mangrove forest" },
                { icon: "😢", fact: "Kosi = 'Sorrow of Bihar', Damodar = 'Sorrow of Bengal' - floods" }
            ],

            traps: [
                {
                    wrong: "Indus is entirely in India",
                    correct: "Indus originates in TIBET, mostly flows through PAKISTAN",
                    explanation: "Only tributaries (Punjab rivers) and upper course in India"
                },
                {
                    wrong: "West-flowing rivers form deltas",
                    correct: "Narmada & Tapi form ESTUARIES, not deltas (steep gradient, fast flow)",
                    explanation: "Only east-flowing rivers form deltas (gentle slope)"
                },
                {
                    wrong: "Brahmaputra is longest river in India",
                    correct: "GANGA is longest river entirely in India. Brahmaputra/Indus are longer but trans-boundary",
                    explanation: "Brahmaputra in India is ~725 km; in total system ~2,900 km"
                },
                {
                    wrong: "Godavari is called 'Sorrow of South'",
                    correct: "Godavari is called 'DAKSHIN GANGA' (Ganga of South) - a positive term",
                    explanation: "'Sorrow' terms are for flood-prone rivers like Kosi, Damodar"
                }
            ],

            revision: {
                oneLiner: "Himalayan (perennial, snow-fed): GIB (Ganga, Indus, Brahmaputra). Peninsular: East-flowing (Godavari longest), West-flowing (Narmada, Tapi - rift valleys, estuaries). Ganga = largest basin, Brahmaputra = highest discharge, Godavari = longest peninsular.",
                keyPoints: [
                    "Himalayan: Antecedent, perennial, young valleys, large deltas",
                    "Peninsular: Rain-fed, seasonal, mature valleys, rift origin (west)",
                    "East-flowing: Godavari > Krishna > Mahanadi > Cauvery → Bay of Bengal",
                    "West-flowing: Narmada > Tapi (estuaries) → Arabian Sea"
                ],
                examTip: "Indus Waters Treaty (1960): India gets Ravi, Beas, Sutlej (eastern). Pakistan gets Indus, Jhelum, Chenab (western). Water divide at Western Ghats makes most rivers flow east."
            }
        }
    ]
};

// Merge with main data
if (typeof UPSC_GEOGRAPHY_DATA !== 'undefined') {
    UPSC_GEOGRAPHY_DATA.topics = UPSC_GEOGRAPHY_DATA.topics.concat(UPSC_GEOGRAPHY_DATA_PART_B.topics);
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UPSC_GEOGRAPHY_DATA;
}
