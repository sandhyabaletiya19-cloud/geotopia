/* ========================================
   UPSC GEOGRAPHY - GEOMORPHOLOGY
   Message 3: 8 Topics
   
   Topics Covered:
   1. Earth's Interior
   2. Plate Tectonics
   3. Continental Drift
   4. Volcanoes
   5. Earthquakes
   6. Weathering
   7. Erosion
   8. Landforms (Overview)
   
   Load AFTER: data-base.js
======================================== */

const geomorphologyTopics = [

    // ========================================
    // TOPIC 1: EARTH'S INTERIOR
    // ========================================
    {
        id: "earth-interior",
        title: "Earth's Interior",
        icon: "🌋",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["core", "mantle", "crust", "seismic waves", "discontinuities"],
        
        mindMap: {
            central: "Earth's Interior Structure",
            branches: [
                {
                    label: "🔵 Crust (Outer Shell)",
                    items: [
                        "Oceanic Crust: 5-30 km thick, Basalt (SIMA)",
                        "Continental Crust: 30-70 km thick, Granite (SIAL)",
                        "Thinnest layer - like apple skin on Earth!",
                        "Contains all life, resources we use"
                    ]
                },
                {
                    label: "🟠 Mantle (Middle Layer)",
                    items: [
                        "Upper Mantle: Contains Asthenosphere (semi-plastic)",
                        "Lower Mantle: Solid but flows very slowly",
                        "Thickness: 2,900 km (84% of Earth's volume)",
                        "Made of silicate rocks rich in Fe & Mg"
                    ]
                },
                {
                    label: "🔴 Core (Center)",
                    items: [
                        "Outer Core: Liquid iron-nickel, 2,200 km thick",
                        "Inner Core: Solid iron-nickel, 1,200 km radius",
                        "Temperature: 5,000-6,000°C (Sun's surface!)",
                        "Creates Earth's magnetic field"
                    ]
                },
                {
                    label: "📊 Key Discontinuities",
                    items: [
                        "Mohorovičić (Moho): Crust-Mantle boundary",
                        "Gutenberg: Mantle-Core boundary (2,900 km)",
                        "Lehmann: Outer Core-Inner Core boundary",
                        "Conrad: Upper-Lower Crust (continental only)"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Layer Order: CMC (Egg Analogy)",
                content: "<span class='mnemonic-highlight'>C</span>rust → <span class='mnemonic-highlight'>M</span>antle → <span class='mnemonic-highlight'>C</span>ore<br><br>Like an <strong>EGG</strong>: Shell (Crust) → White (Mantle) → Yolk (Core)<br>The yolk has two parts: runny outside, solid center = Core structure!"
            },
            {
                type: "🎭 Story Method",
                title: "SIAL Floats on SIMA",
                content: "<span class='mnemonic-highlight'>SIAL</span> = <strong>SI</strong>lica + <strong>AL</strong>uminum → Makes continents (LIGHTER)<br><span class='mnemonic-highlight'>SIMA</span> = <strong>SI</strong>lica + <strong>MA</strong>gnesium → Makes ocean floor (DENSER)<br><br>Think: <strong>'Aluminum boats float on Magnesium sea'</strong>"
            },
            {
                type: "🔢 Number Trick",
                title: "Depths to Remember",
                content: "Crust: <strong>0-70 km</strong> (max under Himalayas)<br>Moho: <strong>~35 km</strong> average depth<br>Mantle: <strong>35-2,900 km</strong><br>Outer Core: <strong>2,900-5,100 km</strong><br>Inner Core: <strong>5,100-6,371 km</strong> (center)<br><br>Remember: <span class='mnemonic-highlight'>6,371 = Earth's radius</span>"
            },
            {
                type: "💡 Exam Trick",
                title: "Discontinuity Scientists",
                content: "<strong>M</strong>oho = <strong>M</strong>ohorovičić (Croatian)<br><strong>G</strong>utenberg = <strong>G</strong>erman-American<br><strong>L</strong>ehmann = <strong>L</strong>ady scientist (Inge Lehmann, Danish)<br><br>All discovered through <span class='mnemonic-highlight'>seismic wave analysis</span>!"
            }
        ],
        
        concepts: [
            {
                title: "How We Know Earth's Interior (Seismic Evidence)",
                content: "We can't dig to the core! We use EARTHQUAKE WAVES. P-waves travel through solids AND liquids. S-waves travel ONLY through solids. When S-waves disappear at 2,900 km → We know outer core is LIQUID!"
            },
            {
                title: "Shadow Zones Explained",
                content: "P-wave shadow zone: 103°-143° from earthquake epicenter. S-wave shadow zone: Beyond 103° (no S-waves at all). These 'silent zones' prove Earth has a liquid outer core that bends/blocks waves."
            },
            {
                title: "Why Inner Core is Solid Despite Heat",
                content: "Inner core is 5,500°C - hot enough to melt iron! But PRESSURE is so immense (3.6 million atmospheres) that atoms are squeezed together, making it SOLID. Pressure beats temperature!"
            },
            {
                title: "Earth's Magnetic Field Origin",
                content: "Liquid outer core + Earth's rotation = Dynamo Effect. Convecting liquid iron creates electric currents → Generates magnetic field. This protects us from solar radiation!"
            }
        ],
        
        quickFacts: [
            "<strong>Earth's radius:</strong> 6,371 km (remember as 6-3-7-1)",
            "<strong>Crust percentage:</strong> Less than 1% of Earth's volume",
            "<strong>Mantle percentage:</strong> 84% of Earth's volume",
            "<strong>Core composition:</strong> 85% iron + 10% nickel + 5% lighter elements",
            "<strong>Core temperature:</strong> Equal to Sun's surface (~5,500°C)",
            "<strong>Deepest drill:</strong> Kola Superdeep Borehole, Russia - only 12 km (barely scratched crust!)",
            "<strong>Asthenosphere:</strong> 100-200 km depth, where plates 'float'"
        ],
        
        upscTraps: [
            {
                title: "Inner Core State",
                wrong: "Inner core is liquid because it's the hottest part",
                correct: "Inner core is SOLID despite extreme heat. The immense PRESSURE (3.6 million atm) keeps it solid. Outer core is liquid because pressure is lower there."
            },
            {
                title: "S-Wave Behavior in Core",
                wrong: "S-waves cannot pass through the entire core",
                correct: "S-waves cannot pass through OUTER core (liquid) but CAN pass through INNER core (solid). They're detected again after passing through inner core!"
            },
            {
                title: "SIAL-SIMA Location",
                wrong: "SIAL is below SIMA because silicon comes before magnesium",
                correct: "SIAL (lighter, density ~2.7) FLOATS on SIMA (denser, ~3.0). Continents (SIAL) sit on top of oceanic crust (SIMA). It's about DENSITY, not alphabetical order!"
            },
            {
                title: "Conrad Discontinuity",
                wrong: "Conrad discontinuity exists everywhere like Moho",
                correct: "Conrad discontinuity (upper-lower crust boundary) exists ONLY under CONTINENTAL crust, not under oceanic crust. It's not a global feature!"
            }
        ],
        
        revision: [
            "Earth = Crust + Mantle + Core (like an egg)",
            "SIAL (continental, lighter) floats on SIMA (oceanic, denser)",
            "P-waves: Through all layers | S-waves: Solids only",
            "Outer core: Liquid iron | Inner core: Solid iron (due to pressure)",
            "Moho: Crust-Mantle | Gutenberg: Mantle-Core | Lehmann: Inner-Outer Core",
            "Shadow zones prove liquid outer core exists"
        ]
    },

    // ========================================
    // TOPIC 2: PLATE TECTONICS
    // ========================================
    {
        id: "plate-tectonics",
        title: "Plate Tectonics Theory",
        icon: "🗺️",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["plates", "boundaries", "convection", "seafloor spreading", "subduction"],
        
        mindMap: {
            central: "Plate Tectonics",
            branches: [
                {
                    label: "📋 Major Plates (7)",
                    items: [
                        "Pacific Plate - Largest oceanic plate",
                        "North American & South American Plates",
                        "Eurasian Plate - Largest continental",
                        "African Plate",
                        "Antarctic Plate",
                        "Indo-Australian Plate (sometimes split)"
                    ]
                },
                {
                    label: "📋 Minor Plates (Important)",
                    items: [
                        "Nazca Plate (Pacific coast of S. America)",
                        "Philippine Plate",
                        "Arabian Plate",
                        "Caribbean Plate",
                        "Cocos Plate",
                        "Juan de Fuca Plate"
                    ]
                },
                {
                    label: "↔️ Divergent Boundary",
                    items: [
                        "Plates move APART from each other",
                        "New crust forms from rising magma",
                        "Creates: Mid-ocean ridges, Rift valleys",
                        "Example: Mid-Atlantic Ridge, East African Rift"
                    ]
                },
                {
                    label: "→← Convergent Boundary",
                    items: [
                        "Plates move TOWARD each other",
                        "Oceanic-Continental: Subduction + Volcanoes",
                        "Oceanic-Oceanic: Trenches + Island arcs",
                        "Continental-Continental: Fold mountains"
                    ]
                },
                {
                    label: "↑↓ Transform Boundary",
                    items: [
                        "Plates slide PAST each other horizontally",
                        "No crust created or destroyed",
                        "Creates: Earthquakes (lots of them!)",
                        "Example: San Andreas Fault, Dead Sea Transform"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "7 Major Plates: PANE-SAA",
                content: "<span class='mnemonic-highlight'>P</span>acific<br><span class='mnemonic-highlight'>A</span>frican<br><span class='mnemonic-highlight'>N</span>orth American<br><span class='mnemonic-highlight'>E</span>urasian<br><span class='mnemonic-highlight'>S</span>outh American<br><span class='mnemonic-highlight'>A</span>ntarctic<br><span class='mnemonic-highlight'>A</span>ustralian (Indo-Australian)<br><br>Remember: <strong>'PANE of glass on SAA (sea)'</strong>"
            },
            {
                type: "🎭 Visual Analogy",
                title: "Boundary Types as Human Actions",
                content: "<strong>Divergent:</strong> Two people walking AWAY from each other 🚶←→🚶 (creating space)<br><strong>Convergent:</strong> Two cars in a HEAD-ON collision 🚗💥🚗 (destruction/mountains)<br><strong>Transform:</strong> Two trains passing each other 🚃↕️🚃 (friction, shaking)"
            },
            {
                type: "💡 Memory Trick",
                title: "What Each Boundary Creates",
                content: "<strong>D</strong>ivergent = <strong>D</strong>ivide apart = <strong>D</strong>evelops new crust<br><strong>C</strong>onvergent = <strong>C</strong>ollide = <strong>C</strong>rushes & <strong>C</strong>reates mountains<br><strong>T</strong>ransform = <strong>T</strong>wist past = <strong>T</strong>remors (earthquakes)"
            },
            {
                type: "🔢 Speed Memory",
                title: "Plate Movement Rates",
                content: "Plates move <strong>2-15 cm/year</strong><br><br>Think: <span class='mnemonic-highlight'>Same as your fingernails grow!</span><br><br>Fastest: Pacific Plate (~10 cm/yr)<br>Slowest: Arctic Ridge (~2.5 cm/yr)"
            }
        ],
        
        concepts: [
            {
                title: "Convection Currents - The Engine",
                content: "Hot mantle material rises near core → Spreads horizontally at base of lithosphere → Cools and sinks back down → Creates circular motion. This DRAGS tectonic plates along like packages on a conveyor belt!"
            },
            {
                title: "Seafloor Spreading",
                content: "At mid-ocean ridges, magma rises and solidifies → Creates NEW oceanic crust → Older crust pushed away. Proved by: Magnetic stripe patterns (alternating polarity) on ocean floor. Rate: 2-5 cm/year."
            },
            {
                title: "Subduction Zones",
                content: "When oceanic plate meets continental plate → Denser oceanic plate DIVES under (subducts) → Creates deep trenches + volcanic arcs. The descending plate melts → Magma rises → VOLCANOES on overriding plate!"
            },
            {
                title: "Ring of Fire",
                content: "Pacific Plate boundaries = Most earthquakes & volcanoes on Earth. 75% of world's active volcanoes! 90% of earthquakes! Shaped like a horseshoe around Pacific Ocean. Result of multiple subduction zones."
            }
        ],
        
        quickFacts: [
            "<strong>Plate speed:</strong> 2-15 cm/year (fingernail growth rate!)",
            "<strong>Oldest ocean floor:</strong> ~200 million years only (constantly recycled)",
            "<strong>Oldest continental rock:</strong> 4 billion years (not recycled)",
            "<strong>Himalayas rising:</strong> ~1 cm/year (India still pushing into Asia)",
            "<strong>Atlantic widening:</strong> ~2.5 cm/year (Americas moving away from Europe/Africa)",
            "<strong>Pacific shrinking:</strong> Being consumed by subduction on all sides",
            "<strong>Mariana Trench:</strong> 11,034 m deep - deepest point (convergent boundary)"
        ],
        
        upscTraps: [
            {
                title: "Plate Movement Speed",
                wrong: "Plates move several meters per year causing rapid changes",
                correct: "Plates move only 2-15 CENTIMETERS per year - extremely slow! Changes take millions of years. But sudden releases cause earthquakes."
            },
            {
                title: "What Floats on What",
                wrong: "Plates float directly on liquid outer core",
                correct: "Plates (lithosphere) float on ASTHENOSPHERE - the semi-plastic upper mantle (100-200 km depth). NOT on the core which is 2,900 km deep!"
            },
            {
                title: "All Plates Have Both Crust Types",
                wrong: "Continental plates are only continental crust",
                correct: "Most plates contain BOTH oceanic and continental crust. Example: North American Plate has continent + Atlantic Ocean floor. Only Pacific Plate is almost entirely oceanic."
            }
        ],
        
        revision: [
            "7 major + several minor plates cover Earth's surface",
            "Divergent = Apart = New crust (Mid-Atlantic Ridge)",
            "Convergent = Together = Mountains/Trenches/Volcanoes",
            "Transform = Slide past = Earthquakes (San Andreas)",
            "Convection currents in mantle = Driving force",
            "Ring of Fire = Pacific boundaries = Most seismic activity"
        ]
    },

    // ========================================
    // TOPIC 3: CONTINENTAL DRIFT
    // ========================================
    {
        id: "continental-drift",
        title: "Continental Drift Theory",
        icon: "🌎",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["Wegener", "Pangaea", "Gondwana", "Laurasia", "evidence"],
        
        mindMap: {
            central: "Continental Drift (Wegener, 1912)",
            branches: [
                {
                    label: "🌍 The Big Idea",
                    items: [
                        "All continents were once joined: PANGAEA",
                        "Pangaea = 'All Land' in Greek",
                        "Surrounded by single ocean: PANTHALASSA",
                        "Broke apart ~200 million years ago"
                    ]
                },
                {
                    label: "🧩 Breakup Sequence",
                    items: [
                        "Pangaea split into LAURASIA (north) + GONDWANA (south)",
                        "Laurasia → N. America, Europe, Asia",
                        "Gondwana → S. America, Africa, India, Australia, Antarctica",
                        "India separated ~140 MYA, collided with Asia ~50 MYA"
                    ]
                },
                {
                    label: "📜 Evidences (JIGSAW)",
                    items: [
                        "J - Jigsaw fit of continents (S. America + Africa)",
                        "I - Identical fossils across oceans",
                        "G - Geological structures match",
                        "S - Similar rocks & mountains",
                        "A - Ancient climate evidence",
                        "W - Wegener's observations"
                    ]
                },
                {
                    label: "❌ Why Initially Rejected",
                    items: [
                        "No mechanism explained HOW continents move",
                        "Wegener proposed wrong forces (centrifugal, tidal)",
                        "Scientists couldn't accept continents 'plowing' through ocean floor",
                        "Accepted only after plate tectonics theory (1960s)"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Evidence: JIGSAW FIT",
                content: "<span class='mnemonic-highlight'>J</span>igsaw fit of coastlines<br><span class='mnemonic-highlight'>I</span>dentical fossils (Mesosaurus, Glossopteris)<br><span class='mnemonic-highlight'>G</span>eological structures match<br><span class='mnemonic-highlight'>S</span>imilar rock sequences<br><span class='mnemonic-highlight'>A</span>ncient climates (glacial deposits in tropics)<br><span class='mnemonic-highlight'>W</span>egener's persistence!"
            },
            {
                type: "🦖 Fossil Story",
                title: "Mesosaurus Can't Swim Oceans!",
                content: "<strong>Mesosaurus</strong> = Freshwater reptile found in BOTH South America AND Africa<br><br>This small creature couldn't cross 5,000 km Atlantic Ocean!<br><br>Only explanation: <span class='mnemonic-highlight'>The continents were joined when it lived!</span>"
            },
            {
                type: "🌱 Plant Evidence",
                title: "Glossopteris Fern Distribution",
                content: "<strong>Glossopteris</strong> (seed fern) fossils found in:<br>• South America ✓<br>• Africa ✓<br>• India ✓<br>• Australia ✓<br>• Antarctica ✓<br><br>All were part of <span class='mnemonic-highlight'>GONDWANA</span>!"
            },
            {
                type: "🗺️ Visual Memory",
                title: "Laurasia vs Gondwana",
                content: "<strong>LAURASIA</strong> (North) = <span class='mnemonic-highlight'>LENA</span><br>• <strong>L</strong>aurentian Shield (N. America)<br>• <strong>E</strong>urope<br>• <strong>N</strong>orthern lands<br>• <strong>A</strong>sia<br><br><strong>GONDWANA</strong> (South) = <span class='mnemonic-highlight'>SAAIAA</span><br>S. America, Africa, Antarctica, India, Australia"
            }
        ],
        
        concepts: [
            {
                title: "Alfred Wegener's Observations (1912)",
                content: "German meteorologist noticed coastlines of South America and Africa fit like puzzle pieces. He gathered evidence from fossils, rocks, and climate. But he couldn't explain the MECHANISM - why his theory was rejected for 50 years!"
            },
            {
                title: "Geological Evidence",
                content: "Appalachian Mountains (N. America) match Caledonian Mountains (Scotland/Scandinavia). Same age, same rock types, same structure! They were once a SINGLE mountain chain before Atlantic Ocean opened."
            },
            {
                title: "Paleoclimate Evidence",
                content: "300-million-year-old glacial deposits found in tropical regions: India, Africa, South America, Australia. These places are now near equator! They must have been near South Pole together (as Gondwana)."
            },
            {
                title: "Difference: Continental Drift vs Plate Tectonics",
                content: "DRIFT: Wegener thought continents plow THROUGH ocean floor. TECTONICS: Whole plates (continent + ocean floor) move TOGETHER on asthenosphere. Plate Tectonics provided the missing MECHANISM!"
            }
        ],
        
        quickFacts: [
            "<strong>Wegener's book:</strong> 'The Origin of Continents and Oceans' (1915)",
            "<strong>Pangaea existed:</strong> ~335-200 million years ago",
            "<strong>Name origin:</strong> Pangaea = Greek 'Pan' (all) + 'Gaea' (Earth)",
            "<strong>Wegener's death:</strong> 1930 in Greenland expedition (theory unaccepted)",
            "<strong>Theory accepted:</strong> 1960s after seafloor spreading evidence",
            "<strong>India's journey:</strong> Traveled ~6,000 km north in 140 million years"
        ],
        
        upscTraps: [
            {
                title: "Continental Drift vs Plate Tectonics",
                wrong: "Continental Drift and Plate Tectonics are the same theory",
                correct: "Continental Drift (Wegener, 1912) said continents move THROUGH ocean floor. Plate Tectonics (1960s) says continents + ocean floor move TOGETHER as plates. Different concepts!"
            },
            {
                title: "Why Wegener Was Rejected",
                wrong: "Wegener had no evidence for his theory",
                correct: "Wegener had EXCELLENT evidence (fossils, geology, climate). He was rejected because he couldn't explain the MECHANISM - HOW continents move. His proposed forces (centrifugal, tidal) were too weak."
            },
            {
                title: "India's Original Position",
                wrong: "India was always attached to Asia",
                correct: "India was part of GONDWANA (southern supercontinent), attached to Africa, Antarctica, Australia. It separated ~140 MYA and collided with Asia ~50 MYA, creating Himalayas!"
            }
        ],
        
        revision: [
            "Wegener (1912): All continents once joined as Pangaea",
            "Pangaea → Laurasia (north) + Gondwana (south)",
            "Evidence: JIGSAW - Jigsaw fit, Identical fossils, Geology, Similar rocks, Ancient climate",
            "Key fossils: Mesosaurus, Glossopteris (found across Gondwana)",
            "Rejected because: No mechanism explained",
            "Accepted after: Plate tectonics theory (1960s)"
        ]
    },

    // ========================================
    // TOPIC 4: VOLCANOES
    // ========================================
    {
        id: "volcanoes",
        title: "Volcanoes",
        icon: "🌋",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["magma", "lava", "eruption", "volcanic types", "Ring of Fire"],
        
        mindMap: {
            central: "Volcanoes",
            branches: [
                {
                    label: "🔥 Types by Shape",
                    items: [
                        "Shield Volcano: Broad, gentle slopes (Hawaii)",
                        "Composite/Stratovolcano: Steep, layered (Mt. Fuji)",
                        "Cinder Cone: Small, steep, loose fragments",
                        "Caldera: Collapsed crater (Yellowstone)"
                    ]
                },
                {
                    label: "💥 Types by Activity",
                    items: [
                        "Active: Currently erupting or recently erupted",
                        "Dormant: Not erupting but could in future",
                        "Extinct: No eruption expected ever",
                        "Example: Barren Island (India) = Only active volcano"
                    ]
                },
                {
                    label: "📍 Where Volcanoes Form",
                    items: [
                        "Convergent boundaries: Subduction zones",
                        "Divergent boundaries: Mid-ocean ridges",
                        "Hotspots: Middle of plates (Hawaii, Yellowstone)",
                        "Ring of Fire: 75% of world's volcanoes"
                    ]
                },
                {
                    label: "🌡️ Volcanic Products",
                    items: [
                        "Lava: Magma reaching surface",
                        "Pyroclastic material: Ash, bombs, lapilli",
                        "Gases: CO2, SO2, H2O vapor",
                        "Volcanic bombs: Large ejected rocks"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Volcano Types: SCC (Smallest to Largest)",
                content: "<span class='mnemonic-highlight'>S</span>hield = <strong>S</strong>pread out, gentle (Like a warrior's shield lying flat)<br><span class='mnemonic-highlight'>C</span>omposite = <strong>C</strong>lassic cone shape (Mt. Fuji postcard!)<br><span class='mnemonic-highlight'>C</span>inder = <strong>C</strong>ompact & small (Made of loose cinders)<br><br>Think: <strong>Shields are wide, Cones are classic, Cinders are crumbly</strong>"
            },
            {
                type: "🎭 Analogy",
                title: "Shield vs Composite",
                content: "<strong>Shield Volcano</strong> = Pouring honey on a plate<br>Spreads wide, gentle slopes, runny lava<br><br><strong>Composite Volcano</strong> = Squeezing thick toothpaste<br>Builds up steep, sticky lava, explosive<br><br><span class='mnemonic-highlight'>Runny = Safe | Sticky = Explosive!</span>"
            },
            {
                type: "🇮🇳 India Focus",
                title: "Indian Volcanoes",
                content: "<strong>Active:</strong> Barren Island (Andaman) - India's ONLY active volcano<br><strong>Dormant:</strong> Narcondam (Andaman)<br><br>Both in <span class='mnemonic-highlight'>Andaman Sea</span> = Part of Indonesian volcanic arc<br><br><strong>Deccan Traps:</strong> Largest volcanic feature in India (flood basalt)"
            },
            {
                type: "🔢 Number Memory",
                title: "Ring of Fire Stats",
                content: "<strong>75%</strong> of world's active volcanoes in Ring of Fire<br><strong>90%</strong> of world's earthquakes here<br><strong>450+</strong> volcanoes in the ring<br><br>Shaped like <span class='mnemonic-highlight'>horseshoe around Pacific Ocean</span>"
            }
        ],
        
        concepts: [
            {
                title: "Why Volcanoes at Plate Boundaries",
                content: "CONVERGENT: Subducting plate melts → Magma rises → Volcanoes on overriding plate. DIVERGENT: Plates separate → Mantle rises to fill gap → Underwater volcanoes. Most volcanic activity at these boundaries!"
            },
            {
                title: "Hotspot Volcanoes",
                content: "Some volcanoes form in plate MIDDLE, not edges! Hot mantle plume burns through plate like blowtorch. As plate moves, chain of volcanoes forms. Hawaii: Pacific Plate moves over hotspot → Hawaiian island chain!"
            },
            {
                title: "Explosive vs Effusive Eruptions",
                content: "EXPLOSIVE: Thick, viscous magma traps gas → Pressure builds → BOOM! (Mt. St. Helens). EFFUSIVE: Thin, runny magma → Gas escapes easily → Gentle lava flows (Hawaii). Silica content determines viscosity!"
            },
            {
                title: "Deccan Traps Formation",
                content: "66 million years ago, massive flood basalt eruptions covered 500,000 km². May have contributed to dinosaur extinction! Possibly caused by Reunion hotspot when India passed over it."
            }
        ],
        
        quickFacts: [
            "<strong>Most active volcano:</strong> Kilauea, Hawaii (continuous since 1983)",
            "<strong>Largest volcano:</strong> Mauna Loa, Hawaii (10,000+ m from ocean floor)",
            "<strong>Deadliest eruption:</strong> Tambora, 1815 (92,000 deaths, 'Year Without Summer')",
            "<strong>India's active volcano:</strong> Barren Island, Andaman (last erupted 2020)",
            "<strong>Supervolcano:</strong> Yellowstone - could devastate North America if it erupts",
            "<strong>Volcanic soil:</strong> Very fertile (potassium, phosphorus) - good for agriculture"
        ],
        
        upscTraps: [
            {
                title: "Magma vs Lava",
                wrong: "Magma and lava are different substances",
                correct: "SAME substance! Called MAGMA when underground, called LAVA when it reaches the surface. Just different names for location!"
            },
            {
                title: "Dormant vs Extinct",
                wrong: "Dormant volcanoes will never erupt again",
                correct: "DORMANT = Sleeping (can wake up). EXTINCT = Dead (no future eruption expected). Mt. Vesuvius was thought extinct before destroying Pompeii!"
            },
            {
                title: "Deccan Traps Location",
                wrong: "Deccan Traps are in the Deccan Plateau only",
                correct: "Deccan Traps cover parts of Maharashtra, Gujarat, Madhya Pradesh, and even extend to Rajasthan. Much larger than just the plateau region!"
            }
        ],
        
        revision: [
            "Types: Shield (wide), Composite (steep), Cinder (small), Caldera (collapsed)",
            "Activity: Active, Dormant, Extinct",
            "Location: Convergent, Divergent boundaries + Hotspots",
            "Ring of Fire: 75% of world's volcanoes, 90% earthquakes",
            "India: Barren Island (active), Narcondam (dormant), Deccan Traps (ancient)",
            "Silica content: High = Explosive, Low = Effusive"
        ]
    },

    // ========================================
    // TOPIC 5: EARTHQUAKES
    // ========================================
    {
        id: "earthquakes",
        title: "Earthquakes",
        icon: "📳",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["seismic waves", "focus", "epicenter", "Richter", "faults"],
        
        mindMap: {
            central: "Earthquakes",
            branches: [
                {
                    label: "📍 Key Terms",
                    items: [
                        "Focus/Hypocenter: Point of origin INSIDE Earth",
                        "Epicenter: Point on surface directly above focus",
                        "Seismic waves: Energy waves from earthquake",
                        "Fault: Fracture where movement occurs"
                    ]
                },
                {
                    label: "🌊 Types of Seismic Waves",
                    items: [
                        "P-waves: Primary, fastest, compressional, through all",
                        "S-waves: Secondary, slower, transverse, solids only",
                        "L-waves: Surface waves, slowest, most destructive",
                        "Rayleigh & Love waves: Types of surface waves"
                    ]
                },
                {
                    label: "📊 Measurement Scales",
                    items: [
                        "Richter Scale: Magnitude (1-10), logarithmic",
                        "Mercalli Scale: Intensity (I-XII), observed damage",
                        "Moment Magnitude (Mw): Modern, most accurate",
                        "Each Richter point = 32x more energy!"
                    ]
                },
                {
                    label: "📍 Earthquake Zones",
                    items: [
                        "Circum-Pacific Belt (Ring of Fire): 81%",
                        "Mid-Atlantic Ridge: Divergent boundary",
                        "Alpine-Himalayan Belt: 17%",
                        "India: Zones II, III, IV, V (V = highest risk)"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Wave Types: PSL (Speed Order)",
                content: "<span class='mnemonic-highlight'>P</span> = <strong>P</strong>rimary = <strong>P</strong>ush-pull = Fastest<br><span class='mnemonic-highlight'>S</span> = <strong>S</strong>econdary = <strong>S</strong>ide-to-side = <strong>S</strong>olids only<br><span class='mnemonic-highlight'>L</span> = <strong>L</strong>ast = <strong>L</strong>argest damage = Surface<br><br>Think: <strong>'Please Send Love'</strong> in order of arrival!"
            },
            {
                type: "🎭 Analogy",
                title: "Focus vs Epicenter",
                content: "Imagine dropping a stone in water:<br><br><strong>Focus</strong> = Where stone enters water (INSIDE)<br><strong>Epicenter</strong> = Circle pattern on surface (ABOVE)<br><br><span class='mnemonic-highlight'>Focus = Underground | Epicenter = On ground</span>"
            },
            {
                type: "🔢 Scale Trick",
                title: "Richter Scale Math",
                content: "Each number = <strong>10x more amplitude</strong><br>Each number = <strong>32x more energy</strong><br><br>So Magnitude 7 vs 6:<br>• 10x bigger waves<br>• 32x more energy released<br><br><span class='mnemonic-highlight'>Remember: 10-32 Rule!</span>"
            },
            {
                type: "🇮🇳 India Zones",
                title: "Indian Seismic Zones (II-V)",
                content: "<strong>Zone V</strong> (Very High): Kashmir, NE India, Kutch, Himachal<br><strong>Zone IV</strong> (High): Delhi, NCR, Bihar, parts of UP<br><strong>Zone III</strong> (Moderate): Most of Peninsula<br><strong>Zone II</strong> (Low): South India, Rajasthan interior<br><br><span class='mnemonic-highlight'>Higher number = Higher risk!</span>"
            }
        ],
        
        concepts: [
            {
                title: "Why Earthquakes Happen",
                content: "Plates constantly move but get stuck at edges. Stress builds up over years/centuries. When friction overcome → Sudden slip → EARTHQUAKE! Like snapping a bent stick. Energy released as seismic waves."
            },
            {
                title: "Types of Faults",
                content: "NORMAL fault: Plates pull apart, hanging wall drops DOWN. REVERSE fault: Plates push together, hanging wall moves UP. STRIKE-SLIP fault: Plates slide horizontally past each other (San Andreas)."
            },
            {
                title: "P-waves vs S-waves in Discovery",
                content: "P-waves travel through EVERYTHING (solid, liquid, gas). S-waves travel through SOLIDS only. At 2,900 km depth, S-waves disappear → Scientists discovered LIQUID outer core! Waves are geological X-rays!"
            },
            {
                title: "Earthquake Prediction Challenge",
                content: "Cannot predict exact time/place of earthquakes! We can only: Identify high-risk zones, estimate probability, prepare buildings. Japan, Chile invest heavily in earthquake-resistant construction."
            }
        ],
        
        quickFacts: [
            "<strong>Largest recorded:</strong> Chile 1960, Magnitude 9.5",
            "<strong>Deadliest:</strong> China 1556, ~830,000 deaths (Shaanxi earthquake)",
            "<strong>India's deadliest:</strong> Gujarat 2001, Magnitude 7.7, 20,000+ deaths",
            "<strong>Tsunami trigger:</strong> Underwater earthquakes (2004 Indian Ocean M9.1)",
            "<strong>Earthquake frequency:</strong> ~500,000/year detected, ~100 cause damage",
            "<strong>Ring of Fire:</strong> 81% of world's largest earthquakes occur here"
        ],
        
        upscTraps: [
            {
                title: "Richter vs Mercalli",
                wrong: "Richter and Mercalli scales measure the same thing",
                correct: "RICHTER (Magnitude) measures energy released - same everywhere. MERCALLI (Intensity) measures damage observed - varies by location. Same earthquake has ONE magnitude but MULTIPLE intensities!"
            },
            {
                title: "Surface Waves Damage",
                wrong: "P-waves cause the most damage because they arrive first",
                correct: "SURFACE waves (L-waves) cause MOST damage because they have largest amplitude and shake buildings side-to-side. P-waves arrive first but are less destructive."
            },
            {
                title: "India Earthquake Zones",
                wrong: "South India is earthquake-free (Zone I)",
                correct: "There is NO Zone I in India! Entire India is in Zone II or higher. Even South India (Zone II-III) has seismic risk. Koyna (Maharashtra) had M6.3 in 1967!"
            }
        ],
        
        revision: [
            "Focus (underground) vs Epicenter (surface directly above)",
            "Waves: P (fastest, all materials), S (solids only), L (most destructive)",
            "Richter = Energy (logarithmic) | Mercalli = Damage observed",
            "Major belts: Ring of Fire (81%), Alpine-Himalayan (17%)",
            "India zones: II (low) to V (very high risk)",
            "Cannot predict exact earthquakes - only prepare"
        ]
    },

    // ========================================
    // TOPIC 6: WEATHERING
    // ========================================
    {
        id: "weathering",
        title: "Weathering",
        icon: "🪨",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["physical", "chemical", "biological", "disintegration", "decomposition"],
        
        mindMap: {
            central: "Weathering (In-situ rock breakdown)",
            branches: [
                {
                    label: "🔨 Physical/Mechanical Weathering",
                    items: [
                        "Frost action: Water freezes, expands, cracks rock",
                        "Thermal expansion: Heat cycles expand/contract",
                        "Exfoliation: Onion-like peeling of rock layers",
                        "Pressure release: Unloading as overlying rock erodes"
                    ]
                },
                {
                    label: "🧪 Chemical Weathering",
                    items: [
                        "Oxidation: Iron rusts (red/brown color)",
                        "Hydrolysis: Water reacts with minerals",
                        "Carbonation: CO2 + water dissolves limestone",
                        "Solution: Direct dissolving of soluble rocks"
                    ]
                },
                {
                    label: "🌱 Biological Weathering",
                    items: [
                        "Root action: Roots grow into cracks, widen them",
                        "Burrowing animals: Earthworms, rabbits mix soil",
                        "Lichens & moss: Produce acids that dissolve rock",
                        "Human activity: Mining, construction"
                    ]
                },
                {
                    label: "🌍 Climate Control",
                    items: [
                        "Hot-Dry: Physical weathering dominates",
                        "Hot-Wet: Chemical weathering dominates",
                        "Cold: Frost weathering dominates",
                        "Temperate: Mixed weathering"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Key Distinction",
                title: "Weathering vs Erosion",
                content: "<strong>WEATHERING</strong> = Breaking rock <span class='mnemonic-highlight'>IN PLACE</span> (no movement)<br><strong>EROSION</strong> = Breaking + <span class='mnemonic-highlight'>CARRYING AWAY</span> (movement)<br><br>Think: Weathering = Standing still & crumbling<br>Erosion = Running away with pieces!"
            },
            {
                type: "🎭 Analogy",
                title: "Types of Weathering",
                content: "<strong>Physical:</strong> Like smashing a cookie with hammer (pieces, same material)<br><strong>Chemical:</strong> Like cookie dissolving in milk (changes composition)<br><strong>Biological:</strong> Like ants eating through cookie (living things involved)"
            },
            {
                type: "🌡️ Climate Memory",
                title: "Climate Controls Weathering Type",
                content: "<strong>Desert (Hot-Dry):</strong> Physical dominates (thermal, no water for chemical)<br><strong>Rainforest (Hot-Wet):</strong> Chemical dominates (water + heat = reactions!)<br><strong>Mountains (Cold):</strong> Frost action dominates (freeze-thaw cycles)<br><br><span class='mnemonic-highlight'>Water = Chemical | Heat cycles = Physical | Freezing = Frost</span>"
            },
            {
                type: "💡 Exam Tip",
                title: "Carbonation Formula",
                content: "<strong>H₂O + CO₂ → H₂CO₃</strong> (Carbonic acid)<br><br>This weak acid dissolves <span class='mnemonic-highlight'>LIMESTONE</span> (CaCO₃)<br><br>Creates: Caves, karst topography, sinkholes<br><br>Remember: <strong>Carbon + Water = Limestone's enemy!</strong>"
            }
        ],
        
        concepts: [
            {
                title: "Frost Wedging/Action",
                content: "Water seeps into rock cracks → Temperature drops below 0°C → Water EXPANDS 9% when freezing → Exerts enormous pressure → Cracks widen → Repeated cycles shatter rock. Common in mountains & cold climates!"
            },
            {
                title: "Exfoliation (Onion-Skin Weathering)",
                content: "Rock expands when heated, contracts when cooled. Outer layers expand/contract more than inner layers → Different stress → Outer layers peel off like onion skins. Creates dome-shaped rocks in deserts!"
            },
            {
                title: "Oxidation (Rusting of Rocks)",
                content: "Iron in rocks + Oxygen + Water → Iron oxide (rust). Gives rocks red/brown/yellow colors. Common in humid climates. Weakens rock structure. Red soils of India = Heavily oxidized!"
            },
            {
                title: "Spheroidal Weathering",
                content: "Angular rock blocks → Weathering attacks corners & edges more (more surface area) → Corners round off first → Eventually becomes spherical. Common in granite. Joint-block weathering creates 'tor' formations."
            }
        ],
        
        quickFacts: [
            "<strong>Weathering depth:</strong> Can extend several meters into rock",
            "<strong>Frost wedging pressure:</strong> Can exert up to 2,000 kg/cm²",
            "<strong>Water expansion:</strong> 9% increase in volume when frozen",
            "<strong>Regolith:</strong> Layer of weathered material over bedrock",
            "<strong>Saprolite:</strong> Highly weathered rock that retains structure",
            "<strong>Most effective:</strong> Chemical weathering in hot-wet climates"
        ],
        
        upscTraps: [
            {
                title: "Weathering = Erosion?",
                wrong: "Weathering and erosion are the same process",
                correct: "WEATHERING = In-situ breakdown (no transport). EROSION = Breakdown + transportation by agents (water, wind, ice). Weathering happens FIRST, then erosion carries material away!"
            },
            {
                title: "Physical Weathering Changes Composition",
                wrong: "Physical weathering changes the rock's chemical composition",
                correct: "Physical weathering breaks rock into smaller pieces of SAME composition. Only CHEMICAL weathering changes the mineral composition through reactions!"
            },
            {
                title: "Biological = Minor Process",
                wrong: "Biological weathering is not significant",
                correct: "Biological weathering is very significant! Roots can split rocks, lichens produce acids, burrowing animals mix soil. It also ACCELERATES physical and chemical weathering!"
            }
        ],
        
        revision: [
            "Weathering = In-place breakdown | Erosion = Breakdown + Transport",
            "Physical: Frost action, thermal expansion, exfoliation (no chemical change)",
            "Chemical: Oxidation, hydrolysis, carbonation (composition changes)",
            "Biological: Roots, animals, lichens (living agents)",
            "Climate control: Hot-Wet = Chemical | Hot-Dry = Physical | Cold = Frost",
            "Carbonation: H₂O + CO₂ dissolves limestone → Caves, karst"
        ]
    },

    // ========================================
    // TOPIC 7: EROSION
    // ========================================
    {
        id: "erosion",
        title: "Erosion",
        icon: "💨",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["agents", "river", "wind", "glacier", "waves", "mass wasting"],
        
        mindMap: {
            central: "Erosion (Removal & Transport)",
            branches: [
                {
                    label: "💧 Running Water (Fluvial)",
                    items: [
                        "Most powerful erosion agent worldwide",
                        "Hydraulic action: Water force loosens material",
                        "Abrasion: Rocks scrape channel bed",
                        "Creates: V-valleys, waterfalls, gorges"
                    ]
                },
                {
                    label: "💨 Wind (Aeolian)",
                    items: [
                        "Dominant in deserts & dry regions",
                        "Deflation: Lifting loose particles",
                        "Abrasion: Sand-blasting rock surfaces",
                        "Creates: Yardangs, ventifacts, desert pavements"
                    ]
                },
                {
                    label: "🧊 Glaciers",
                    items: [
                        "Powerful but slow erosion agent",
                        "Plucking: Freezing to rock, pulling pieces",
                        "Abrasion: Rock fragments scrape bedrock",
                        "Creates: U-valleys, cirques, fjords"
                    ]
                },
                {
                    label: "🌊 Waves (Marine)",
                    items: [
                        "Shapes coastlines worldwide",
                        "Hydraulic action: Wave compression",
                        "Attrition: Rocks hit each other",
                        "Creates: Cliffs, caves, arches, stacks"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Erosion Agents: WWGI",
                content: "<span class='mnemonic-highlight'>W</span>ater (Running water - rivers)<br><span class='mnemonic-highlight'>W</span>ind (Aeolian)<br><span class='mnemonic-highlight'>G</span>lacier (Ice)<br><span class='mnemonic-highlight'>I</span>mpact (Waves - coastal)<br><br>Remember: <strong>'WW-GI are erosion soldiers!'</strong>"
            },
            {
                type: "🎭 Valley Shape Trick",
                title: "V vs U Valleys",
                content: "<strong>V-Valley:</strong> Made by <strong>V</strong>ery fast <strong>RIVERS</strong><br>Sharp, narrow bottom (river cuts DOWN)<br><br><strong>U-Valley:</strong> Made by <strong>U</strong>nbelievably slow <strong>GLACIERS</strong><br>Wide, flat bottom (glacier scrapes SIDES too)<br><br><span class='mnemonic-highlight'>V = Vertical cutting | U = Uniform scraping</span>"
            },
            {
                type: "💡 Process Memory",
                title: "4 Types of Erosion Processes",
                content: "<span class='mnemonic-highlight'>H</span>ydraulic action: Water force<br><span class='mnemonic-highlight'>A</span>brasion: Scraping with load<br><span class='mnemonic-highlight'>A</span>ttrition: Load hitting each other<br><span class='mnemonic-highlight'>S</span>olution: Dissolving rock<br><br>Remember: <strong>HAAS</strong> (sounds like 'has' - erosion HAS these processes!)"
            },
            {
                type: "🔢 Erosion Power Ranking",
                title: "Which Agent is Strongest?",
                content: "<strong>1. Running Water</strong> - Most powerful globally<br><strong>2. Glaciers</strong> - Most powerful per unit area<br><strong>3. Waves</strong> - Coastal areas only<br><strong>4. Wind</strong> - Only effective in dry areas<br><br><span class='mnemonic-highlight'>Water always wins!</span>"
            }
        ],
        
        concepts: [
            {
                title: "Erosion vs Weathering",
                content: "WEATHERING: Rock breaks IN PLACE (static). EROSION: Rock breaks AND MOVES (dynamic). Weathering produces loose material → Erosion transports it away. Both work together to shape landscapes!"
            },
            {
                title: "River Erosion Processes",
                content: "HYDRAULIC ACTION: Sheer water force loosens material. ABRASION (Corrasion): Rocks in water scrape bed like sandpaper. ATTRITION: Carried rocks collide, become smaller & rounder. SOLUTION (Corrosion): Water dissolves soluble rock."
            },
            {
                title: "Glacial Erosion Power",
                content: "Glaciers are incredibly powerful! Move slowly but carry huge rock debris. PLUCKING: Ice freezes onto rock, pulls chunks away. ABRASION: Debris in ice grinds bedrock smooth. Creates dramatic landscapes: Cirques, arêtes, horns, U-valleys!"
            },
            {
                title: "Wind Erosion Requirements",
                content: "Wind erosion needs: DRY conditions (no vegetation), LOOSE material, STRONG winds. Deflation: Wind removes fine particles, leaves pebbles (desert pavement). Abrasion: Sand grains sandblast lower rock surfaces (undercutting)."
            }
        ],
        
        quickFacts: [
            "<strong>Running water:</strong> Responsible for 90% of landscape erosion on Earth",
            "<strong>Glacier speed:</strong> 1 meter to 300 meters per year (varies greatly)",
            "<strong>Wave force:</strong> Can exert pressure of 30 tons/m² during storms",
            "<strong>Wind height limit:</strong> Abrasion mostly below 1-2 meters height",
            "<strong>Niagara Falls:</strong> Retreating ~1 meter/year due to erosion",
            "<strong>Grand Canyon:</strong> Carved by Colorado River over 5-6 million years"
        ],
        
        upscTraps: [
            {
                title: "Wind Erosion Height",
                wrong: "Wind erosion affects rocks at all heights equally",
                correct: "Wind erosion (abrasion) is concentrated at lower heights (below 1-2 m) where sand particles travel. This creates MUSHROOM rocks with narrow bases!"
            },
            {
                title: "Most Powerful Agent",
                wrong: "Glaciers are the most powerful erosion agent globally",
                correct: "RUNNING WATER is the most powerful erosion agent globally (shapes 90% of landscapes). Glaciers are most powerful PER UNIT AREA but cover limited Earth surface!"
            },
            {
                title: "Erosion in Forests",
                wrong: "Erosion doesn't occur in forested areas",
                correct: "Erosion occurs EVERYWHERE but forests greatly REDUCE erosion by: holding soil with roots, reducing water runoff, blocking wind. Deforestation dramatically increases erosion!"
            }
        ],
        
        revision: [
            "Erosion = Weathering products TRANSPORTED by agents",
            "Main agents: Water (most powerful), Wind, Glaciers, Waves",
            "Processes: Hydraulic action, Abrasion, Attrition, Solution (HAAS)",
            "V-valleys = Rivers | U-valleys = Glaciers",
            "Wind erosion: Effective only in dry areas, concentrated near ground",
            "Vegetation reduces erosion significantly"
        ]
    },

    // ========================================
    // TOPIC 8: LANDFORMS (OVERVIEW)
    // ========================================
    {
        id: "landforms-overview",
        title: "Landforms: An Overview",
        icon: "🏞️",
        theme: "geomorphology",
        difficulty: 2,
        tags: ["fluvial", "glacial", "coastal", "karst", "aeolian", "volcanic"],
        
        mindMap: {
            central: "Major Landform Types",
            branches: [
                {
                    label: "💧 Fluvial (River) Landforms",
                    items: [
                        "Erosional: V-valley, Gorge, Waterfall, Pothole",
                        "Depositional: Floodplain, Delta, Alluvial fan",
                        "Meanders, Oxbow lakes, Levees",
                        "River terraces, Braided channels"
                    ]
                },
                {
                    label: "🧊 Glacial Landforms",
                    items: [
                        "Erosional: Cirque, Arête, Horn, U-valley, Fjord",
                        "Depositional: Moraine, Drumlin, Esker, Outwash plain",
                        "Hanging valleys, Tarns (glacial lakes)",
                        "Roche moutonnée (asymmetric rock)"
                    ]
                },
                {
                    label: "🌊 Coastal Landforms",
                    items: [
                        "Erosional: Cliff, Cave, Arch, Stack, Stump",
                        "Depositional: Beach, Spit, Tombolo, Barrier island",
                        "Wave-cut platform, Sea wall",
                        "Lagoons, Estuaries"
                    ]
                },
                {
                    label: "💨 Aeolian (Wind) Landforms",
                    items: [
                        "Erosional: Mushroom rock, Yardang, Ventifact",
                        "Depositional: Sand dunes, Loess deposits",
                        "Deflation hollow, Desert pavement",
                        "Types of dunes: Barchan, Seif, Star"
                    ]
                },
                {
                    label: "🕳️ Karst Landforms",
                    items: [
                        "Surface: Sinkholes, Karst towers, Poljes",
                        "Underground: Caves, Stalactites, Stalagmites",
                        "Solution features in limestone regions",
                        "Disappearing streams, Springs"
                    ]
                }
            ]
        },
        
        memoryHooks: [
            {
                type: "🎯 Mnemonic",
                title: "Cave Features: TIG vs MIG",
                content: "<strong>Stalac<span class='mnemonic-highlight'>T</span>ites</strong> hang from <strong>T</strong>op (ceiling) - T for Top!<br><strong>Stalag<span class='mnemonic-highlight'>M</span>ites</strong> grow from <strong>M</strong>id (floor) - M for Might grow up!<br><br>Or remember: <strong>'Tights hang down, Mights grow up!'</strong><br><br>When they meet = <strong>Column/Pillar</strong>"
            },
            {
                type: "🎭 Coastal Evolution",
                title: "Cave → Arch → Stack → Stump",
                content: "Waves attack cliff → <strong>Cave</strong> forms<br>Cave erodes through → <strong>Arch</strong> forms<br>Arch roof collapses → <strong>Stack</strong> remains<br>Stack erodes down → <strong>Stump</strong> left at low tide<br><br><span class='mnemonic-highlight'>CASS: Cave-Arch-Stack-Stump</span>"
            },
            {
                type: "💡 Delta vs Fan",
                title: "Where Water Slows Down",
                content: "<strong>DELTA:</strong> River meets <span class='mnemonic-highlight'>SEA/LAKE</span> → Deposits spread → Fan shape<br>Example: Ganga-Brahmaputra Delta (world's largest!)<br><br><strong>ALLUVIAL FAN:</strong> River meets <span class='mnemonic-highlight'>PLAIN</span> from mountains → Cone shape<br>Example: Rivers leaving Himalayas"
            },
            {
                type: "🔢 Glacial Feature Memory",
                title: "Erosional: 3 C's & H",
                content: "<span class='mnemonic-highlight'>C</span>irque (armchair hollow)<br><span class='mnemonic-highlight'>C</span>orrie (Scottish name for cirque)<br><span class='mnemonic-highlight'>C</span>wm (Welsh name for cirque)<br><span class='mnemonic-highlight'>H</span>orn (peak between cirques - Matterhorn!)<br><br>Depositional: <strong>MED</strong>: Moraine, Esker, Drumlin"
            }
        ],
        
        concepts: [
            {
                title: "First Order vs Higher Order Landforms",
                content: "1ST ORDER: Continents, Ocean basins (largest). 2ND ORDER: Mountains, Plains, Plateaus. 3RD ORDER: Valleys, Deltas, Beaches, Dunes. Lower order = smaller features formed by specific agents."
            },
            {
                title: "Erosional vs Depositional Landforms",
                content: "EROSIONAL: Created by REMOVAL of material (cliffs, valleys, gorges). DEPOSITIONAL: Created by ACCUMULATION of material (deltas, beaches, dunes). Same agent creates BOTH types at different locations!"
            },
            {
                title: "India's Major Landforms",
                content: "Himalayas: Fold mountains (still rising!). Gangetic Plain: Alluvial depositional plain. Peninsular Plateau: Ancient, stable landmass. Western/Eastern Ghats: Block mountains (fault-bounded). Coastal plains: Depositional features."
            },
            {
                title: "Landform Evolution (Davis Cycle)",
                content: "William Morris Davis proposed: YOUTH stage (steep valleys, waterfalls) → MATURITY stage (rounded hills, wide valleys) → OLD AGE stage (flat peneplain). Though simplified, shows landscapes evolve over time!"
            }
        ],
        
        quickFacts: [
            "<strong>Largest delta:</strong> Ganga-Brahmaputra (59,000 km²)",
            "<strong>Highest waterfall:</strong> Angel Falls, Venezuela (979 m)",
            "<strong>Largest cave:</strong> Mammoth Cave, USA (650+ km passages)",
            "<strong>Famous horn:</strong> Matterhorn, Switzerland (4,478 m)",
            "<strong>Famous fjord:</strong> Sognefjord, Norway (204 km long, 1,308 m deep)",
            "<strong>India's longest beach:</strong> Marina Beach, Chennai (13 km)"
        ],
        
        upscTraps: [
            {
                title: "All Deltas are Same Shape",
                wrong: "All deltas are triangular fan-shaped",
                correct: "Delta shapes vary: ARCUATE (fan - Nile), BIRD'S FOOT (elongated - Mississippi), CUSPATE (tooth-shaped - Ebro). Shape depends on river, waves, tides!"
            },
            {
                title: "Moraines and Glaciers",
                wrong: "Moraines form only when glaciers melt",
                correct: "Moraines form DURING glacial movement too. LATERAL moraine (sides), MEDIAL moraine (two glaciers merge), TERMINAL moraine (glacier front), GROUND moraine (underneath). Active + melting glaciers create moraines!"
            },
            {
                title: "Karst = Only Limestone",
                wrong: "Karst landforms form only in limestone",
                correct: "Karst forms in ANY soluble rock: limestone (most common), dolomite, gypsum, rock salt. The key requirement is SOLUBILITY in slightly acidic water!"
            }
        ],
        
        revision: [
            "Fluvial: V-valleys (erosion), Deltas/Floodplains (deposition)",
            "Glacial: Cirques, U-valleys, Horns | Moraines, Drumlins",
            "Coastal: Cliffs, Caves, Arches, Stacks | Beaches, Spits",
            "Aeolian: Mushroom rocks, Yardangs | Sand dunes",
            "Karst: Sinkholes, Caves, Stalactites/Stalagmites (limestone)",
            "Stalactites (ceiling-T) vs Stalagmites (ground-M)"
        ]
    }
];

// ===== ADD TO BASE DATA =====
if (typeof addTopicsToCategory === 'function') {
    addTopicsToCategory('physical', 'geomorphology', geomorphologyTopics);
} else {
    console.error("❌ Base data not loaded! Load data-base.js first.");
}

console.log("🏔️ Geomorphology Topics Loaded:", geomorphologyTopics.length);
