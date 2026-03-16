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

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UPSC_GEOGRAPHY_DATA;
}
