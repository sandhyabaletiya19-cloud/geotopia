/* ========================================
   UPSC GEOGRAPHY - DATA FILE
   Message 1: 3 Sample Topics for Testing
======================================== */

const UPSCData = {
    version: "1.0.0",
    lastUpdated: "2024",
    
    categories: {
        physical: {
            name: "Physical Geography",
            icon: "🌍",
            subcategories: {
                geomorphology: {
                    name: "Geomorphology",
                    topics: [
                        {
                            id: "earth-interior",
                            title: "Earth's Interior",
                            icon: "🌋",
                            theme: "geomorphology",
                            difficulty: 2,
                            tags: ["core", "mantle", "crust", "seismic waves"],
                            
                            mindMap: {
                                central: "Earth's Interior",
                                branches: [
                                    {
                                        label: "🔴 Crust",
                                        items: [
                                            "Oceanic: 5-30 km (Basalt - SIMA)",
                                            "Continental: 30-70 km (Granite - SIAL)",
                                            "Thinnest layer, we live here!"
                                        ]
                                    },
                                    {
                                        label: "🟠 Mantle",
                                        items: [
                                            "Upper Mantle → Asthenosphere (plastic)",
                                            "Lower Mantle → Solid but flows slowly",
                                            "2900 km thick, 84% of Earth's volume"
                                        ]
                                    },
                                    {
                                        label: "🟡 Core",
                                        items: [
                                            "Outer Core: Liquid iron-nickel (2200 km)",
                                            "Inner Core: Solid iron-nickel (1200 km)",
                                            "Temperature: 5000-6000°C"
                                        ]
                                    },
                                    {
                                        label: "📊 Evidence",
                                        items: [
                                            "Seismic waves (P & S waves)",
                                            "Meteorite composition",
                                            "Volcanic eruptions"
                                        ]
                                    }
                                ]
                            },
                            
                            memoryHooks: [
                                {
                                    type: "🎯 Mnemonic",
                                    title: "Remember Layers: CMC",
                                    content: "<span class='mnemonic-highlight'>C</span>rust → <span class='mnemonic-highlight'>M</span>antle → <span class='mnemonic-highlight'>C</span>ore = Like an <strong>EGG</strong>: Shell (Crust) → White (Mantle) → Yolk (Core)"
                                },
                                {
                                    type: "🎭 Analogy",
                                    title: "SIAL & SIMA",
                                    content: "<span class='mnemonic-highlight'>SIAL</span> = <strong>SI</strong>lica + <strong>AL</strong>uminum (Continental - Lighter, floats)<br><span class='mnemonic-highlight'>SIMA</span> = <strong>SI</strong>lica + <strong>MA</strong>gnesium (Oceanic - Denser, sinks)"
                                },
                                {
                                    type: "🔢 Number Trick",
                                    title: "Layer Depths",
                                    content: "Crust: <strong>0-70 km</strong> (thin as apple skin!)<br>Mantle: <strong>70-2900 km</strong> (bulk of Earth)<br>Core: <strong>2900-6371 km</strong> (center)"
                                }
                            ],
                            
                            concepts: [
                                {
                                    title: "Seismic Waves & Discovery",
                                    content: "P-waves travel through solids AND liquids. S-waves ONLY through solids. When S-waves stop at 2900 km depth → Scientists knew outer core is LIQUID!"
                                },
                                {
                                    title: "Shadow Zones",
                                    content: "P-wave shadow: 103°-143° from earthquake. S-wave shadow: Beyond 103°. These gaps proved Earth has a liquid outer core."
                                },
                                {
                                    title: "Moho & Gutenberg Discontinuities",
                                    content: "Moho = Crust-Mantle boundary (velocity increases). Gutenberg = Mantle-Core boundary (S-waves disappear). These are the key boundaries!"
                                },
                                {
                                    title: "Why Core is Metallic",
                                    content: "Earth formed from meteorites containing iron-nickel. Heavy metals sank to center during molten phase. That's why core is iron-nickel!"
                                }
                            ],
                            
                            quickFacts: [
                                "<strong>Earth's radius:</strong> 6,371 km (remember: 6-3-7-1)",
                                "<strong>Crust thickness:</strong> 5 km (ocean) to 70 km (mountains)",
                                "<strong>Core temperature:</strong> Same as Sun's surface (~5500°C)",
                                "<strong>Mantle composition:</strong> Mainly silicate rocks rich in Fe & Mg",
                                "<strong>Inner core:</strong> Solid despite extreme heat (due to pressure)",
                                "<strong>Earth's age:</strong> 4.5 billion years (determined by meteorites)"
                            ],
                            
                            upscTraps: [
                                {
                                    title: "Inner Core State",
                                    wrong: "Inner core is liquid because it's hottest",
                                    correct: "Inner core is SOLID! Extreme pressure keeps it solid despite 5500°C temperature"
                                },
                                {
                                    title: "S-Waves in Core",
                                    wrong: "S-waves can't pass through entire core",
                                    correct: "S-waves CAN'T pass through OUTER core (liquid) but CAN pass through INNER core (solid)"
                                },
                                {
                                    title: "SIAL-SIMA Location",
                                    wrong: "SIAL is below SIMA",
                                    correct: "SIAL (lighter) is ABOVE and forms continents. SIMA (denser) is below and forms ocean floor"
                                }
                            ],
                            
                            revision: [
                                "Earth = Crust + Mantle + Core (like an egg)",
                                "SIAL (continental) floats on SIMA (oceanic)",
                                "P-waves: All layers | S-waves: Solids only",
                                "Outer core: Liquid | Inner core: Solid",
                                "Moho = Crust-Mantle | Gutenberg = Mantle-Core"
                            ]
                        },
                        
                        {
                            id: "plate-tectonics",
                            title: "Plate Tectonics",
                            icon: "🗺️",
                            theme: "geomorphology",
                            difficulty: 2,
                            tags: ["plates", "boundaries", "convection", "seafloor spreading"],
                            
                            mindMap: {
                                central: "Plate Tectonics",
                                branches: [
                                    {
                                        label: "📋 Major Plates (7)",
                                        items: [
                                            "Pacific (largest oceanic)",
                                            "North American & South American",
                                            "African & Antarctic",
                                            "Eurasian & Indo-Australian"
                                        ]
                                    },
                                    {
                                        label: "↔️ Divergent Boundary",
                                        items: [
                                            "Plates move APART",
                                            "Creates: Mid-ocean ridges, Rift valleys",
                                            "Example: Mid-Atlantic Ridge"
                                        ]
                                    },
                                    {
                                        label: "→← Convergent Boundary",
                                        items: [
                                            "Plates move TOGETHER",
                                            "Creates: Mountains, Trenches, Volcanoes",
                                            "Example: Himalayas, Mariana Trench"
                                        ]
                                    },
                                    {
                                        label: "↑↓ Transform Boundary",
                                        items: [
                                            "Plates slide PAST each other",
                                            "Creates: Earthquakes",
                                            "Example: San Andreas Fault"
                                        ]
                                    }
                                ]
                            },
                            
                            memoryHooks: [
                                {
                                    type: "🎯 Mnemonic",
                                    title: "7 Major Plates: PANESSA",
                                    content: "<span class='mnemonic-highlight'>P</span>acific, <span class='mnemonic-highlight'>A</span>frican, <span class='mnemonic-highlight'>N</span>orth American, <span class='mnemonic-highlight'>E</span>urasian, <span class='mnemonic-highlight'>S</span>outh American, Indo-Au<span class='mnemonic-highlight'>S</span>tralian, <span class='mnemonic-highlight'>A</span>ntarctic"
                                },
                                {
                                    type: "🎭 Analogy",
                                    title: "Boundary Actions",
                                    content: "<strong>Divergent:</strong> Like people walking away from each other 🚶←→🚶<br><strong>Convergent:</strong> Like a car crash 🚗💥🚗<br><strong>Transform:</strong> Like two trains passing 🚃↑↓🚃"
                                },
                                {
                                    type: "💡 Memory Trick",
                                    title: "What Gets Created",
                                    content: "<strong>D</strong>ivergent = <strong>D</strong>rift apart = New crust<br><strong>C</strong>onvergent = <strong>C</strong>rush together = Mountains/Trenches<br><strong>T</strong>ransform = <strong>T</strong>ension = Earthquakes"
                                }
                            ],
                            
                            concepts: [
                                {
                                    title: "Convection Current Engine",
                                    content: "Hot mantle rises → Cools at surface → Sinks back down → Creates circular motion → This DRAGS plates along. It's the ENGINE of plate movement!"
                                },
                                {
                                    title: "Seafloor Spreading",
                                    content: "At mid-ocean ridges, magma rises and creates NEW oceanic crust. The seafloor spreads apart at 2-5 cm/year. Proved by magnetic stripe patterns!"
                                },
                                {
                                    title: "Subduction Zones",
                                    content: "When oceanic plate meets continental plate → Oceanic plate DIVES under (subducts) because it's denser. Creates trenches + volcanic arcs!"
                                },
                                {
                                    title: "Ring of Fire",
                                    content: "Pacific plate boundaries = Most earthquakes & volcanoes on Earth. 75% of world's volcanoes are here! It's where plates are most active."
                                }
                            ],
                            
                            quickFacts: [
                                "<strong>Plate speed:</strong> 2-15 cm/year (fingernail growth rate!)",
                                "<strong>Oldest ocean floor:</strong> ~200 million years (new crust constantly forming)",
                                "<strong>Himalayas rising:</strong> 1 cm/year (India still pushing into Asia)",
                                "<strong>Atlantic widening:</strong> 2.5 cm/year (America moving away from Europe)",
                                "<strong>Pacific shrinking:</strong> Being consumed by subduction zones",
                                "<strong>Deepest trench:</strong> Mariana Trench (11,034 m) - convergent boundary"
                            ],
                            
                            upscTraps: [
                                {
                                    title: "Plate Movement Speed",
                                    wrong: "Plates move several meters per year",
                                    correct: "Plates move only 2-15 CENTIMETERS per year - extremely slow!"
                                },
                                {
                                    title: "Continental Drift vs Plate Tectonics",
                                    wrong: "Both theories are the same",
                                    correct: "Continental Drift (Wegener) - continents move through ocean floor. Plate Tectonics - entire plates (including ocean floor) move together"
                                },
                                {
                                    title: "What Drives Movement",
                                    wrong: "Plates move because of Earth's rotation",
                                    correct: "Convection currents in the mantle are the PRIMARY driving force of plate movement"
                                }
                            ],
                            
                            revision: [
                                "7 major plates: Pacific largest, all moving constantly",
                                "Divergent = Apart = New crust (Mid-Atlantic Ridge)",
                                "Convergent = Together = Mountains/Trenches",
                                "Transform = Slide past = Earthquakes (San Andreas)",
                                "Convection currents = Engine driving plates"
                            ]
                        }
                    ]
                },
                
                climatology: {
                    name: "Climatology",
                    topics: [
                        {
                            id: "indian-monsoon",
                            title: "Indian Monsoon System",
                            icon: "🌧️",
                            theme: "climatology",
                            difficulty: 3,
                            tags: ["monsoon", "ITCZ", "jet streams", "rainfall", "India"],
                            
                            mindMap: {
                                central: "Indian Monsoon",
                                branches: [
                                    {
                                        label: "☀️ SW Monsoon (June-Sept)",
                                        items: [
                                            "Onset: Kerala (June 1) → All India (July 15)",
                                            "Arabian Sea Branch → Western Ghats",
                                            "Bay of Bengal Branch → NE India",
                                            "Brings 75% of annual rainfall"
                                        ]
                                    },
                                    {
                                        label: "❄️ NE Monsoon (Oct-Dec)",
                                        items: [
                                            "Winds blow from land to sea",
                                            "Retreating monsoon",
                                            "Tamil Nadu gets rainfall",
                                            "Cool, dry season for most India"
                                        ]
                                    },
                                    {
                                        label: "⚙️ Mechanism",
                                        items: [
                                            "Differential heating of land & sea",
                                            "ITCZ shift northward in summer",
                                            "Somali Jet (Low Level) crosses equator",
                                            "Tropical Easterly Jet at upper level"
                                        ]
                                    },
                                    {
                                        label: "🎯 Key Factors",
                                        items: [
                                            "Tibetan Plateau heating",
                                            "Indian Ocean Dipole (IOD)",
                                            "El Niño/La Niña effects",
                                            "Subtropical Westerly Jet withdrawal"
                                        ]
                                    }
                                ]
                            },
                            
                            memoryHooks: [
                                {
                                    type: "🎯 Mnemonic",
                                    title: "Monsoon Dates",
                                    content: "<span class='mnemonic-highlight'>June 1</span> = Kerala (Monsoon arrives)<br><span class='mnemonic-highlight'>July 15</span> = All India covered<br><span class='mnemonic-highlight'>September 1</span> = Retreat begins<br>Remember: <strong>JJS</strong> = June, July, September"
                                },
                                {
                                    type: "🎭 Analogy",
                                    title: "Two Branches Explained",
                                    content: "<strong>Arabian Sea Branch:</strong> Like hitting a wall (Western Ghats) = Heavy rain on windward side 🌧️<br><strong>Bay of Bengal Branch:</strong> Curves into NE India + joins Ganga plains 🌊"
                                },
                                {
                                    type: "💡 Memory Trick",
                                    title: "El Niño Effect on India",
                                    content: "<strong>El Niño</strong> = <strong>Bad</strong> for India (less rainfall, drought)<br><strong>La Niña</strong> = <strong>Good</strong> for India (more rainfall, floods possible)<br>Remember: <span class='mnemonic-highlight'>Niño = No rain</span>"
                                }
                            ],
                            
                            concepts: [
                                {
                                    title: "ITCZ - The Monsoon Trigger",
                                    content: "Inter-Tropical Convergence Zone shifts NORTH in summer (over Ganga plains). This low-pressure trough PULLS moisture-laden winds from Indian Ocean into India!"
                                },
                                {
                                    title: "Burst vs Break",
                                    content: "BURST: Sudden onset with heavy rainfall (normal). BREAK: Prolonged dry spell during monsoon season. Caused by: ITCZ moving to Himalayas, weak low pressure."
                                },
                                {
                                    title: "Somali Jet (LLJ)",
                                    content: "Low Level Jet that crosses equator near Somalia → Brings moisture to India. Stronger Somali Jet = Better monsoon. It's affected by East African highlands!"
                                },
                                {
                                    title: "Why Tamil Nadu in Winter?",
                                    content: "NE monsoon winds pick up moisture from Bay of Bengal → Hit Tamil Nadu coast. Rest of India is dry because winds come from LAND (dry)!"
                                }
                            ],
                            
                            quickFacts: [
                                "<strong>Monsoon word origin:</strong> Arabic 'Mausim' = Season",
                                "<strong>India's rainfall:</strong> 75% from SW monsoon (June-Sept)",
                                "<strong>Wettest place:</strong> Mawsynram (Meghalaya) - 11,871 mm/year",
                                "<strong>Arabian branch:</strong> More powerful than Bay of Bengal branch",
                                "<strong>Onset variation:</strong> ±7 days from June 1 is normal",
                                "<strong>Western Ghats:</strong> Cause orographic rainfall (windward wet, leeward dry)"
                            ],
                            
                            upscTraps: [
                                {
                                    title: "SW Monsoon Direction",
                                    wrong: "SW Monsoon comes from Southwest of India",
                                    correct: "SW Monsoon originates from SOUTHEAST (Southern Indian Ocean), crosses equator, turns SW due to Coriolis force, THEN reaches India"
                                },
                                {
                                    title: "Mawsynram vs Cherrapunji",
                                    wrong: "Cherrapunji is the wettest place",
                                    correct: "MAWSYNRAM is now the wettest (11,871 mm). Cherrapunji was earlier but Mawsynram took the record"
                                },
                                {
                                    title: "Northeast Monsoon Rains",
                                    wrong: "NE monsoon brings rainfall all over India",
                                    correct: "NE monsoon brings significant rainfall ONLY to Tamil Nadu & south Andhra Pradesh coast"
                                }
                            ],
                            
                            revision: [
                                "SW Monsoon: June-Sept (75% of rainfall)",
                                "NE Monsoon: Oct-Dec (Tamil Nadu only)",
                                "ITCZ shift + Tibetan heating = Triggers",
                                "El Niño = Bad | La Niña = Good for India",
                                "Arabian branch = Western Ghats rain",
                                "Bay branch = NE India + Ganga plains"
                            ]
                        }
                    ]
                }
            }
        }
    }
};

// Make globally available
window.UPSCData = UPSCData;
