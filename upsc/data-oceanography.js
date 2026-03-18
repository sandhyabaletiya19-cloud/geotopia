/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Oceanography Data File - COMPREHENSIVE
   Topics: Ocean Floor, Temperature & Salinity,
           Ocean Currents, Tides, Waves, Marine Resources
   ============================================ */

const oceanographyData = [

    // ============================================
    // TOPIC 1: OCEAN FLOOR RELIEF
    // ============================================
    {
        id: 'ocean-floor-relief',
        name: 'Ocean Floor Relief',
        icon: '🌊',
        category: 'oceanography',
        theme: 'ocean',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Ocean Floor Relief',
            branches: [
                {
                    name: 'Continental Margin',
                    color: '#4ECDC4',
                    children: [
                        'Continental Shelf (0-200m)',
                        'Continental Slope (200-3000m)',
                        'Continental Rise (3000-5000m)',
                        'Submarine Canyons'
                    ]
                },
                {
                    name: 'Deep Sea Floor',
                    color: '#FF6B6B',
                    children: [
                        'Abyssal Plains (4000-6000m)',
                        'Abyssal Hills',
                        'Deep Sea Trenches (>6000m)',
                        'Submarine Mountains'
                    ]
                },
                {
                    name: 'Mid-Ocean Features',
                    color: '#FFE66D',
                    children: [
                        'Mid-Ocean Ridges',
                        'Rift Valleys',
                        'Transform Faults',
                        'Hydrothermal Vents'
                    ]
                },
                {
                    name: 'Isolated Features',
                    color: '#95E1D3',
                    children: [
                        'Seamounts (underwater mountains)',
                        'Guyots (flat-topped seamounts)',
                        'Atolls (ring-shaped reefs)',
                        'Coral Reefs'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Continental Margin Sequence',
                content: 'SSR = Shelf (shallowest), Slope (steep), Rise (gentle) - Like steps going down into ocean!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Shelf vs Slope',
                content: 'Continental Shelf = Wide parking lot (flat, 0-200m) | Continental Slope = Steep ramp to deep garage (200-3000m)',
                icon: '🅿️'
            },
            {
                type: 'acronym',
                title: 'Deepest Trenches',
                content: 'MJP = Mariana (deepest, 11,034m), Japan, Philippine trenches - all in Pacific!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Seamount to Guyot',
                content: 'Seamount is underwater volcano with peak. Wave erosion flattens top = Guyot. If coral grows on top = Atoll!',
                icon: '🏔️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Continental Shelf',
                icon: '🏖️',
                points: [
                    'DEFINITION: Shallow, gently sloping extension of continent underwater',
                    'DEPTH: 0 to 200 meters (average 150m)',
                    'WIDTH: Varies greatly - few km to 1500 km',
                    'GRADIENT: Very gentle - about 1° or less',
                    'WIDEST SHELVES: Siberian Shelf (1500 km), Grand Banks of Newfoundland',
                    'NARROW SHELVES: Pacific coast of Americas, East coast of Africa',
                    'IMPORTANCE: 90% of world\'s fish catch, petroleum reserves, mineral deposits',
                    'FORMED BY: Sea level changes, sediment deposition, tectonic activity'
                ]
            },
            {
                title: 'Continental Slope',
                icon: '📐',
                points: [
                    'DEFINITION: Steep zone between continental shelf and ocean floor',
                    'DEPTH: 200m to 3000m (base varies)',
                    'GRADIENT: Steep - 2° to 5° (can reach 25° in places)',
                    'FEATURES: Submarine canyons cut through slope',
                    'SUBMARINE CANYONS: V-shaped valleys, carved by turbidity currents',
                    'EXAMPLES: Hudson Canyon (USA), Indus Canyon (India), Congo Canyon (Africa)',
                    'TRUE EDGE: Marks true boundary between continental and oceanic crust',
                    'SEDIMENTS: Turbidity currents deposit sediment at base'
                ]
            },
            {
                title: 'Continental Rise',
                icon: '🏔️',
                points: [
                    'DEFINITION: Gentle slope between continental slope and abyssal plain',
                    'DEPTH: 3000m to 5000m approximately',
                    'GRADIENT: Very gentle - 0.5° to 1°',
                    'FORMED BY: Sediment accumulation from turbidity currents',
                    'SEDIMENTS: Deep sea fans (submarine fans) of deposited material',
                    'THICKNESS: Sediment can be several km thick',
                    'NOT UNIVERSAL: Absent where trenches meet continental slope',
                    'EXAMPLE: Well-developed off eastern North America'
                ]
            },
            {
                title: 'Abyssal Plains',
                icon: '🌊',
                points: [
                    'DEFINITION: Flat, deep ocean floor between continental rise and mid-ocean ridges',
                    'DEPTH: 4000m to 6000m',
                    'FLATTEST FEATURES: Most level areas on Earth (slope <1:1000)',
                    'AREA: Cover about 40% of ocean floor',
                    'SEDIMENTS: Fine sediment (ooze) accumulates slowly (1-2 cm per 1000 years)',
                    'ABYSSAL HILLS: Small hills (100-1000m) on abyssal plains',
                    'TEMPERATURE: Near freezing (1-4°C), completely dark',
                    'LIFE: Sparse but unique - deep sea organisms adapted to extreme pressure'
                ]
            },
            {
                title: 'Deep Sea Trenches',
                icon: '⬇️',
                points: [
                    'DEFINITION: Long, narrow, extremely deep depressions in ocean floor',
                    'DEPTH: Greater than 6000m, up to 11,034m (Mariana Trench)',
                    'FORMATION: Created at convergent plate boundaries (subduction zones)',
                    'LOCATION: Mostly in Pacific Ocean (Ring of Fire)',
                    'MARIANA TRENCH: Deepest point - Challenger Deep (11,034m)',
                    'OTHER MAJOR TRENCHES:',
                    '  • Tonga Trench (10,882m) - second deepest',
                    '  • Japan Trench (9,000m)',
                    '  • Philippine Trench (10,540m)',
                    '  • Peru-Chile Trench (8,065m)',
                    '  • Puerto Rico Trench (8,380m) - deepest in Atlantic',
                    '  • Sunda Trench (7,725m) - Indian Ocean',
                    'ASSOCIATED FEATURES: Volcanic arcs, island arcs, earthquakes'
                ]
            },
            {
                title: 'Mid-Ocean Ridges',
                icon: '🏔️',
                points: [
                    'DEFINITION: Underwater mountain chain formed at divergent plate boundaries',
                    'LENGTH: 65,000 km - longest mountain chain on Earth',
                    'HEIGHT: Rise 2-3 km above ocean floor',
                    'WIDTH: 1000-3000 km wide',
                    'MID-ATLANTIC RIDGE: Runs N-S through Atlantic Ocean',
                    'FEATURES:',
                    '  • Central Rift Valley - where plates separate',
                    '  • Transform faults - offset the ridge',
                    '  • Hydrothermal vents - hot water springs',
                    '  • Black smokers - sulfide-rich vents',
                    'ICELAND: Only place where Mid-Atlantic Ridge is above sea level',
                    'SEAFLOOR SPREADING: New oceanic crust created at ridges'
                ]
            },
            {
                title: 'Seamounts, Guyots & Atolls',
                icon: '🏝️',
                points: [
                    'SEAMOUNT:',
                    '  • Underwater volcanic mountain rising >1000m from seafloor',
                    '  • Does not reach surface',
                    '  • Over 100,000 seamounts in Pacific alone',
                    '  • Example: Emperor Seamount Chain (Pacific)',
                    'GUYOT (Tablemount):',
                    '  • Flat-topped seamount (wave erosion flattened peak)',
                    '  • Peak was once above sea level, then submerged',
                    '  • Named after Swiss geologist Arnold Guyot',
                    'ATOLL:',
                    '  • Ring-shaped coral reef enclosing lagoon',
                    '  • Forms when volcanic island sinks, coral grows upward',
                    '  • Darwin\'s Subsidence Theory explains formation',
                    '  • Examples: Maldives, Lakshadweep, Marshall Islands'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Complete Ocean Floor Profile',
                type: 'cross-section',
                description: 'Cross-section from continent to mid-ocean ridge showing: Continental Shelf (0-200m) → Continental Slope (200-3000m, with submarine canyons) → Continental Rise (3000-5000m, with deep sea fans) → Abyssal Plain (4000-6000m) → Mid-Ocean Ridge (rising 2-3km). Include depth markers and feature labels.'
            },
            {
                title: 'World\'s Major Ocean Trenches Map',
                type: 'map',
                description: 'Pacific-centered world map showing locations and depths of: Mariana (11,034m), Tonga (10,882m), Philippine (10,540m), Japan (9,000m), Peru-Chile (8,065m), Puerto Rico (8,380m), Sunda/Java (7,725m) trenches. Mark Ring of Fire.'
            },
            {
                title: 'Seamount-Guyot-Atoll Evolution',
                type: 'timeline',
                description: '4-stage diagram: (1) Active volcanic island above sea level (2) Coral reef forms around island (3) Island erodes, sinks → Guyot with coral (4) Complete submergence → Atoll with lagoon'
            },
            {
                title: 'Mid-Ocean Ridge Structure',
                type: 'cross-section',
                description: 'Cross-section of mid-ocean ridge showing: Rift valley at center, magma rising, seafloor spreading, transform faults, hydrothermal vents, black smokers, pillow lavas'
            }
        ],

        quickFacts: [
            '🌊 Continental shelf: Only 8% of ocean floor but 90% of fish catch',
            '📏 Average ocean depth: 3,688 meters (Pacific deepest at 4,280m avg)',
            '⬇️ Mariana Trench depth: 11,034m - Mt. Everest (8,849m) would fit with 2km to spare!',
            '🏔️ Mid-Ocean Ridge: 65,000 km long - longest mountain chain on Earth',
            '🇮🇳 India\'s continental shelf: Widest off Gujarat coast (~350 km)',
            '🌋 Over 100,000 seamounts in Pacific Ocean alone',
            '🏝️ Lakshadweep: India\'s only coral atoll system',
            '🌡️ Hydrothermal vents: Water reaches 400°C but doesn\'t boil (extreme pressure)',
            '📅 Seafloor spreading rate: 2-18 cm/year at different ridges',
            '🐟 Abyssal plains: Temperature 1-4°C, pressure 400-600 atmospheres',
            '🔬 First deep-sea exploration: Challenger Expedition (1872-1876)',
            '🏊 Deepest human dive: Don Walsh & Jacques Piccard, 1960 (10,916m)'
        ],

        upscTraps: [
            {
                trap: 'Continental shelf is same width everywhere',
                clarity: 'WIDTH VARIES GREATLY: Pacific coasts have narrow shelves (few km), Atlantic coasts have wide shelves (up to 1500 km in Siberia). Indian coast: wider on west (Gujarat ~350 km) than east.'
            },
            {
                trap: 'Deep sea trenches are found in all oceans equally',
                clarity: 'PACIFIC DOMINATES: Almost all major trenches are in Pacific (Ring of Fire = subduction zones). Atlantic has only Puerto Rico Trench. Indian Ocean has only Sunda/Java Trench.'
            },
            {
                trap: 'Atolls are formed by coral growing on volcanic islands',
                clarity: 'SUBSIDENCE THEORY: Atoll forms when volcanic island SINKS while coral grows UPWARD. Three stages: Fringing reef → Barrier reef → Atoll. Coral doesn\'t just grow ON island.'
            },
            {
                trap: 'Abyssal plains are lifeless',
                clarity: 'LIFE EXISTS: Unique organisms adapted to extreme pressure, cold, and darkness. Chemosynthetic bacteria at hydrothermal vents form base of food chain. Giant tube worms, blind shrimp found.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Continental Margin: Shelf (0-200m, fishing) → Slope (200-3000m, canyons) → Rise (3000-5000m, fans)',
                'Abyssal Plains: 4000-6000m, flattest features on Earth, 40% of ocean floor',
                'Trenches: Subduction zones, Pacific dominates, Mariana deepest (11,034m)',
                'Mid-Ocean Ridges: 65,000 km, divergent boundaries, seafloor spreading, Iceland visible',
                'Seamount → Guyot (flat-topped) → Atoll (coral ring + lagoon)',
                'India: Wide shelf on west (Gujarat), Lakshadweep = atoll, Andaman near Sunda Trench'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Explain the major relief features of ocean floor with suitable diagrams.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Describe the formation of coral atolls according to Darwin\'s theory.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The deepest point in the world\'s oceans is located in:',
                type: 'Prelims',
                options: ['Tonga Trench', 'Mariana Trench', 'Philippine Trench', 'Japan Trench']
            },
            {
                year: 2018,
                question: 'What are submarine canyons? How are they formed?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: OCEAN TEMPERATURE & SALINITY
    // ============================================
    {
        id: 'temperature-salinity',
        name: 'Ocean Temperature & Salinity',
        icon: '🌡️',
        category: 'oceanography',
        theme: 'ocean',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Temperature & Salinity',
            branches: [
                {
                    name: 'Temperature Distribution',
                    color: '#FF6B6B',
                    children: [
                        'Horizontal (latitude-based)',
                        'Vertical (depth-based)',
                        'Thermocline (rapid change zone)',
                        'Seasonal Variations'
                    ]
                },
                {
                    name: 'Factors Affecting Temp',
                    color: '#4ECDC4',
                    children: [
                        'Latitude & Insolation',
                        'Ocean Currents',
                        'Prevailing Winds',
                        'Depth & Mixing'
                    ]
                },
                {
                    name: 'Salinity Distribution',
                    color: '#FFE66D',
                    children: [
                        'Average: 35 ppt (parts per thousand)',
                        'Highest: Red Sea, Persian Gulf',
                        'Lowest: Baltic Sea, Arctic',
                        'Halocline (rapid change zone)'
                    ]
                },
                {
                    name: 'Factors Affecting Salinity',
                    color: '#95E1D3',
                    children: [
                        'Evaporation & Precipitation',
                        'River Inflow',
                        'Ice Formation/Melting',
                        'Ocean Currents'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Salinity Extremes',
                content: 'RED sea = Really Extremely Dry (high evap = high salinity ~40‰). BALTIC = Barely Any Salt (rivers, rain = low salinity ~10‰)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Thermocline vs Halocline',
                content: 'Thermocline = Temperature cliff (rapid temp drop with depth) | Halocline = Salinity cliff (rapid salinity change). Both are transition zones.',
                icon: '📊'
            },
            {
                type: 'acronym',
                title: 'Salinity Factors',
                content: 'ERIC = Evaporation (+), River inflow (-), Ice formation (+melting -), Currents (mixing)',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Salinity Belt Pattern',
                content: 'Imagine a camel hump pattern: Low at equator (rain), HIGH at 20-30° (deserts, evaporation), Low at poles (ice melt, rivers)',
                icon: '🐫'
            }
        ],

        conceptBlocks: [
            {
                title: 'Horizontal Temperature Distribution',
                icon: '🌍',
                points: [
                    'GENERAL PATTERN: Decreases from equator to poles',
                    'EQUATORIAL ZONE: 25-28°C average surface temperature',
                    'TROPICAL ZONE: 20-25°C',
                    'MID-LATITUDES: 10-20°C',
                    'POLAR REGIONS: -2°C to 5°C (seawater freezes at -1.9°C)',
                    'WARMEST OCEAN: Pacific Ocean (larger area in tropics)',
                    'COLDEST OCEAN: Arctic Ocean (polar location)',
                    'ANNUAL RANGE: Low at equator (2-3°C), High at mid-latitudes (10-15°C)',
                    'ISOTHERMS: Lines of equal temperature, parallel to latitude in open ocean'
                ]
            },
            {
                title: 'Vertical Temperature Distribution',
                icon: '📊',
                points: [
                    'THREE LAYERS:',
                    '  1. SURFACE LAYER (Mixed Layer):',
                    '     • 0-200m depth',
                    '     • Warm, well-mixed by waves and currents',
                    '     • Temperature 20-25°C in tropics',
                    '  2. THERMOCLINE LAYER:',
                    '     • 200-1000m depth',
                    '     • Rapid temperature decrease (up to 20°C drop)',
                    '     • Acts as barrier between surface and deep water',
                    '     • Permanent in tropics, seasonal in mid-latitudes',
                    '     • Absent in polar regions (no warm surface)',
                    '  3. DEEP WATER LAYER:',
                    '     • Below 1000m to ocean floor',
                    '     • Cold and stable (0-5°C everywhere)',
                    '     • Formed by sinking polar water',
                    '     • Makes up 80% of ocean volume'
                ]
            },
            {
                title: 'Salinity Basics',
                icon: '🧂',
                points: [
                    'DEFINITION: Total dissolved salts in seawater, measured in parts per thousand (‰ or ppt)',
                    'AVERAGE OCEAN SALINITY: 35‰ (35 grams salt per 1000 grams water)',
                    'COMPOSITION OF SEA SALT:',
                    '  • Chloride (Cl⁻): 55%',
                    '  • Sodium (Na⁺): 31%',
                    '  • Sulfate (SO₄²⁻): 8%',
                    '  • Magnesium (Mg²⁺): 4%',
                    '  • Others: 2%',
                    'SOURCE OF SALTS: River weathering, volcanic activity, hydrothermal vents',
                    'WHY CONSTANT RATIO: Chemical equilibrium over millions of years'
                ]
            },
            {
                title: 'Horizontal Salinity Distribution',
                icon: '🗺️',
                points: [
                    'PATTERN: High in subtropics (20-30°), lower at equator and poles',
                    'EQUATORIAL ZONE (0-10°):',
                    '  • Salinity: 34-35‰',
                    '  • Heavy rainfall dilutes surface water',
                    '  • High cloud cover, moderate evaporation',
                    'SUBTROPICAL ZONE (20-30°):',
                    '  • HIGHEST salinity: 36-37‰',
                    '  • Subtropical high = clear skies = high evaporation',
                    '  • Low rainfall (descending dry air)',
                    'POLAR ZONES (>60°):',
                    '  • Low salinity: 30-34‰',
                    '  • Ice melting adds freshwater',
                    '  • Many rivers drain here (especially Arctic)',
                    'ENCLOSED SEAS:',
                    '  • Red Sea: 40-42‰ (extreme evaporation, no rivers)',
                    '  • Dead Sea: 330‰ (not ocean, but hypersaline lake)',
                    '  • Baltic Sea: 5-15‰ (many rivers, low evaporation)',
                    '  • Black Sea: 18‰ (restricted mixing with Mediterranean)'
                ]
            },
            {
                title: 'Vertical Salinity Distribution',
                icon: '📉',
                points: [
                    'HALOCLINE: Layer of rapid salinity change with depth',
                    'PATTERN VARIES BY LATITUDE:',
                    'TROPICAL OCEANS:',
                    '  • Surface: Lower salinity (heavy rain)',
                    '  • Subsurface maximum at 50-100m',
                    '  • Decreases below, then stable',
                    'SUBTROPICAL OCEANS:',
                    '  • Surface: High salinity (evaporation)',
                    '  • Decreases with depth',
                    '  • Stable in deep water',
                    'POLAR OCEANS:',
                    '  • Surface: Low salinity (ice melt)',
                    '  • Increases with depth',
                    '  • No clear halocline',
                    'DEEP OCEAN: Relatively uniform 34.5-35‰ worldwide'
                ]
            },
            {
                title: 'Factors Affecting Salinity',
                icon: '⚙️',
                points: [
                    'EVAPORATION (Increases salinity):',
                    '  • Removes water, leaves salt behind',
                    '  • Highest in subtropical high pressure belts',
                    '  • Red Sea: 40‰ due to intense evaporation',
                    'PRECIPITATION (Decreases salinity):',
                    '  • Dilutes surface water',
                    '  • Equatorial zone: Heavy rain = lower salinity',
                    'RIVER INFLOW (Decreases salinity):',
                    '  • Freshwater dilutes ocean near river mouths',
                    '  • Bay of Bengal: Lower salinity than Arabian Sea (Ganga, Brahmaputra)',
                    '  • Baltic Sea: Many rivers = very low salinity',
                    'ICE FORMATION/MELTING:',
                    '  • Freezing: Salt excluded = increases salinity below ice',
                    '  • Melting: Freshwater released = decreases salinity',
                    'OCEAN CURRENTS:',
                    '  • Warm currents from tropics bring high salinity',
                    '  • Cold currents from poles bring low salinity',
                    '  • Mixing creates intermediate values'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Vertical Ocean Temperature Profile',
                type: 'cross-section',
                description: 'Graph showing three layers: Surface Mixed Layer (0-200m, warm), Thermocline (200-1000m, rapid decrease shown with gradient), Deep Water (1000m+, cold ~4°C). Show tropical vs polar profiles.'
            },
            {
                title: 'Global Surface Salinity Distribution',
                type: 'map',
                description: 'World map with salinity zones: Low at equator (34-35‰), HIGH in subtropics (36-37‰), Low at poles (30-34‰). Mark Red Sea (40‰), Baltic (10‰), Dead Sea (330‰), Mediterranean (38‰).'
            },
            {
                title: 'Thermocline & Halocline Comparison',
                type: 'comparison-chart',
                description: 'Side-by-side depth profiles showing: (1) Temperature vs depth with thermocline marked (2) Salinity vs depth with halocline marked. Show for tropical, temperate, and polar regions.'
            },
            {
                title: 'Arabian Sea vs Bay of Bengal Salinity',
                type: 'comparison-chart',
                description: 'India map with two seas: Arabian Sea (high salinity 35-37‰ - high evaporation, few rivers) vs Bay of Bengal (low salinity 30-34‰ - heavy monsoon rain, Ganga-Brahmaputra input)'
            }
        ],

        quickFacts: [
            '🌡️ Average ocean surface temperature: 17°C globally',
            '❄️ Seawater freezes at -1.9°C (salt lowers freezing point)',
            '🧂 Average ocean salinity: 35‰ (3.5%)',
            '📊 Dead Sea: 330‰ salinity (10x ocean average) - you float!',
            '🌊 Red Sea: Highest open ocean salinity at 40-42‰',
            '💧 Baltic Sea: Lowest salinity at 5-15‰ (almost brackish)',
            '🇮🇳 Arabian Sea: Saltier than Bay of Bengal (evaporation vs rivers)',
            '🌡️ Deep ocean: Uniformly cold (0-4°C) regardless of latitude',
            '📉 Thermocline: Temperature can drop 20°C in 1000m depth',
            '🔬 Ocean water contains 3.5% dissolved salts by weight',
            '🌍 80% of ocean volume is cold deep water below thermocline',
            '💨 Subtropical high pressure = highest evaporation = highest salinity'
        ],

        upscTraps: [
            {
                trap: 'Salinity is highest at the equator (most evaporation due to heat)',
                clarity: 'SUBTROPICAL HIGHS have highest salinity (20-30° lat). Equator has heavy RAIN which dilutes water. It\'s about evaporation MINUS precipitation balance!'
            },
            {
                trap: 'Deep ocean water is warm because Earth\'s core heats it',
                clarity: 'Deep water is COLD (0-4°C). It comes from polar regions where cold, dense water sinks and flows toward equator. Geothermal heat is minimal compared to surface heat loss.'
            },
            {
                trap: 'Bay of Bengal is saltier than Arabian Sea',
                clarity: 'OPPOSITE! Bay of Bengal receives Ganga, Brahmaputra + heavy monsoon rain = LOWER salinity (30-34‰). Arabian Sea has high evaporation, few rivers = HIGHER salinity (35-37‰).'
            },
            {
                trap: 'Thermocline exists everywhere in the ocean',
                clarity: 'Thermocline is ABSENT in POLAR regions. Surface water is already cold (no warm layer to transition from). It\'s permanent in tropics, seasonal in mid-latitudes.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Temperature: Decreases equator→poles; 3 vertical layers (mixed→thermocline→deep)',
                'Thermocline: 200-1000m, rapid temp drop, barrier layer, absent at poles',
                'Salinity average: 35‰; Highest 20-30° (evap>precip), Lower at equator (rain) & poles (rivers, ice)',
                'Highest salinity: Red Sea (40‰), Dead Sea (330‰); Lowest: Baltic (10‰)',
                'India: Arabian Sea saltier than Bay of Bengal (evap vs rivers)',
                'Deep ocean: Cold (0-4°C), uniform salinity (~35‰) everywhere'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Explain the factors affecting the distribution of salinity in the oceans.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is thermocline? Discuss its significance.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why is the salinity of Bay of Bengal less than the Arabian Sea?',
                type: 'Prelims'
            },
            {
                year: 2018,
                question: 'Discuss the horizontal and vertical distribution of temperature in the oceans.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: OCEAN CURRENTS (COMPREHENSIVE)
    // ============================================
    {
        id: 'ocean-currents',
        name: 'Ocean Currents',
        icon: '🌊',
        category: 'oceanography',
        theme: 'current',
        difficulty: 'hard',
        upscRelevance: 'high',

        mindMap: {
            central: 'Ocean Currents',
            branches: [
                {
                    name: 'Types of Currents',
                    color: '#FF6B6B',
                    children: [
                        'Warm Currents (toward poles)',
                        'Cold Currents (toward equator)',
                        'Surface Currents (wind-driven)',
                        'Deep Currents (thermohaline)'
                    ]
                },
                {
                    name: 'Atlantic Currents',
                    color: '#4ECDC4',
                    children: [
                        'Gulf Stream (warm)',
                        'North Atlantic Drift',
                        'Labrador Current (cold)',
                        'Canary Current (cold)',
                        'Benguela Current (cold)',
                        'Brazil Current (warm)'
                    ]
                },
                {
                    name: 'Pacific Currents',
                    color: '#FFE66D',
                    children: [
                        'Kuroshio Current (warm)',
                        'California Current (cold)',
                        'Peru/Humboldt Current (cold)',
                        'North Pacific Drift',
                        'Oyashio Current (cold)'
                    ]
                },
                {
                    name: 'Indian Ocean Currents',
                    color: '#95E1D3',
                    children: [
                        'Agulhas Current (warm)',
                        'West Australian Current (cold)',
                        'Monsoon Currents (reversing)',
                        'Somali Current (reversing)'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Current Pattern',
                content: 'CLOCKWISE in NORTH, COUNTER-CLOCKWISE in SOUTH (like NH/SH Coriolis). Warm on WEST side of ocean, Cold on EAST side!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Gulf Stream Power',
                content: 'Gulf Stream carries 30x more water than all world rivers combined! It\'s like an ocean river 100km wide, 1km deep, moving at 9 km/hr.',
                icon: '💪'
            },
            {
                type: 'acronym',
                title: 'Cold Currents (East Side)',
                content: 'CLAP on EAST coast = California, Labrador (sort of), Africa (Benguela, Canary), Peru currents - all cold, eastern ocean margins!',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Indian Ocean Uniqueness',
                content: 'Only Indian Ocean currents REVERSE with monsoon! Summer = clockwise (SW monsoon), Winter = counter-clockwise (NE monsoon). Somali Current flips completely!',
                icon: '🔄'
            }
        ],

        conceptBlocks: [
            {
                title: 'Types & Causes of Ocean Currents',
                icon: '⚙️',
                points: [
                    'SURFACE CURRENTS (Top 400m):',
                    '  • Wind-driven (prevailing winds push water)',
                    '  • Coriolis effect deflects current direction',
                    '  • 10% of ocean volume, but most studied',
                    'DEEP CURRENTS (Thermohaline):',
                    '  • Driven by density differences (temp + salinity)',
                    '  • Cold, salty water sinks at poles',
                    '  • Very slow but massive volume (90% of ocean)',
                    '  • Global Conveyor Belt circulation',
                    'WARM CURRENTS: Move from tropics toward poles',
                    'COLD CURRENTS: Move from poles toward equator',
                    'FACTORS CAUSING CURRENTS:',
                    '  • Wind stress (main driver for surface)',
                    '  • Coriolis effect (deflection)',
                    '  • Gravity (water flows downslope)',
                    '  • Temperature/Salinity differences (density)',
                    '  • Continental barriers (redirect flow)'
                ]
            },
            {
                title: 'Atlantic Ocean Currents (Complete List)',
                icon: '🌊',
                points: [
                    '🔴 WARM CURRENTS:',
                    '• GULF STREAM:',
                    '  - Location: Florida to Western Europe',
                    '  - Speed: 6-9 km/hr, width 100km',
                    '  - Effect: Keeps Western Europe warm (10°C warmer than same latitude)',
                    '  - Carries 30 Sv (Sverdrup) of water',
                    '• NORTH ATLANTIC DRIFT:',
                    '  - Extension of Gulf Stream toward Europe',
                    '  - Keeps Norwegian coast ice-free',
                    '• BRAZIL CURRENT:',
                    '  - Flows south along Brazil coast',
                    '  - Warm, low nutrient, poor fishing',
                    '• NORTH EQUATORIAL CURRENT:',
                    '  - Flows west across tropical Atlantic',
                    '',
                    '🔵 COLD CURRENTS:',
                    '• LABRADOR CURRENT:',
                    '  - Flows south from Arctic along Canada',
                    '  - Brings icebergs to shipping lanes',
                    '  - Meets Gulf Stream → Grand Banks fog + rich fishing',
                    '• CANARY CURRENT:',
                    '  - Flows south along NW Africa coast',
                    '  - Cold, causes Sahara coastal fog',
                    '  - Upwelling → rich fishing',
                    '• BENGUELA CURRENT:',
                    '  - Flows north along SW Africa coast',
                    '  - Strong upwelling, rich fisheries',
                    '  - Creates Namib Desert coastal fog',
                    '• FALKLAND/MALVINAS CURRENT:',
                    '  - Flows north along Argentina coast'
                ]
            },
            {
                title: 'Pacific Ocean Currents (Complete List)',
                icon: '🌏',
                points: [
                    '🔴 WARM CURRENTS:',
                    '• KUROSHIO CURRENT (Japan Current):',
                    '  - Pacific\'s equivalent of Gulf Stream',
                    '  - Flows north along Japan',
                    '  - Warms Japan, rich in marine life',
                    '  - Becomes North Pacific Drift',
                    '• NORTH PACIFIC DRIFT:',
                    '  - Extension of Kuroshio toward North America',
                    '  - Splits into Alaska Current (north) and California Current (south)',
                    '• ALASKA CURRENT:',
                    '  - Warm current flowing north along Alaska',
                    '  - Keeps southern Alaska relatively mild',
                    '• EAST AUSTRALIAN CURRENT:',
                    '  - Flows south along Australia\'s east coast',
                    '  - Warm, featured in "Finding Nemo"',
                    '• NORTH & SOUTH EQUATORIAL CURRENTS:',
                    '  - Flow west across tropical Pacific',
                    '',
                    '🔵 COLD CURRENTS:',
                    '• CALIFORNIA CURRENT:',
                    '  - Flows south along US west coast',
                    '  - Causes California coastal fog',
                    '  - Upwelling → excellent fishing',
                    '• PERU/HUMBOLDT CURRENT:',
                    '  - One of most important cold currents',
                    '  - Flows north along South America',
                    '  - World\'s richest fishing grounds (anchovies)',
                    '  - Creates Atacama Desert fog (garúa)',
                    '  - Disturbed during El Niño events',
                    '• OYASHIO CURRENT:',
                    '  - Flows south from Bering Sea along Russia/Japan',
                    '  - Meets Kuroshio → rich fishing, fog'
                ]
            },
            {
                title: 'Indian Ocean Currents (Unique Reversing)',
                icon: '🇮🇳',
                points: [
                    '⚠️ UNIQUE FEATURE: Northern Indian Ocean currents REVERSE with monsoons!',
                    '',
                    '☀️ SUMMER (SW MONSOON) - Clockwise:',
                    '• SW Monsoon Current flows EAST',
                    '• Somali Current flows NORTH (strong upwelling)',
                    '• Water piles up in Bay of Bengal',
                    '',
                    '❄️ WINTER (NE MONSOON) - Counter-clockwise:',
                    '• NE Monsoon Current flows WEST',
                    '• Somali Current flows SOUTH',
                    '• Pattern reverses completely',
                    '',
                    '🌊 PERMANENT CURRENTS:',
                    '• AGULHAS CURRENT (warm):',
                    '  - Flows south along E. Africa/Mozambique',
                    '  - One of world\'s strongest currents',
                    '  - Creates "Agulhas leakage" into Atlantic',
                    '• WEST AUSTRALIAN CURRENT (cold):',
                    '  - Flows north along W. Australia',
                    '  - Relatively weak cold current',
                    '• EQUATORIAL COUNTER CURRENT:',
                    '  - Flows east, returns piled-up water',
                    '',
                    '📍 SOMALI CURRENT (Special):',
                    '  - Only current that completely reverses direction',
                    '  - Summer: Strong northward (upwelling, fishing)',
                    '  - Winter: Weak southward'
                ]
            },
            {
                title: 'Effects of Ocean Currents',
                icon: '🌍',
                points: [
                    '🌡️ CLIMATE EFFECTS:',
                    '• Warm currents: Warm adjacent land, increase rainfall',
                    '  - Gulf Stream keeps UK 10°C warmer than Labrador at same latitude',
                    '  - Alaska Current moderates Alaska climate',
                    '• Cold currents: Cool adjacent land, create deserts/fog',
                    '  - Benguela → Namib Desert',
                    '  - Peru/Humboldt → Atacama Desert',
                    '  - California → San Francisco fog',
                    '  - Canary → Sahara coastal fog',
                    '',
                    '🐟 FISHING EFFECTS:',
                    '• Cold currents bring nutrients (upwelling)',
                    '  - Peru Current: World\'s largest anchovy fishery',
                    '  - Benguela: Rich in fish',
                    '• Mixing zones (warm + cold) very productive',
                    '  - Grand Banks (Gulf Stream + Labrador)',
                    '  - Japanese coast (Kuroshio + Oyashio)',
                    '',
                    '🚢 NAVIGATION EFFECTS:',
                    '• Ships use currents to save fuel',
                    '• Labrador brings icebergs (Titanic disaster)',
                    '',
                    '🌫️ FOG FORMATION:',
                    '• Cold currents cool warm air → condensation → fog',
                    '• Famous: San Francisco, Namib coast, Peru coast'
                ]
            },
            {
                title: 'Global Thermohaline Circulation',
                icon: '🔄',
                points: [
                    'ALSO CALLED: Global Conveyor Belt, Global Ocean Circulation',
                    '',
                    'MECHANISM:',
                    '• Cold, salty water in North Atlantic sinks (dense)',
                    '• Flows south along ocean floor to Antarctica',
                    '• Spreads into Pacific and Indian Oceans',
                    '• Gradually warms, rises, returns at surface',
                    '• Complete circuit takes ~1000 years!',
                    '',
                    'KEY SINKING ZONES:',
                    '• North Atlantic (Greenland Sea, Labrador Sea)',
                    '• Southern Ocean (around Antarctica)',
                    '',
                    'IMPORTANCE:',
                    '• Distributes heat globally',
                    '• Brings oxygen to deep ocean',
                    '• Brings nutrients to surface',
                    '• Climate regulation (affects European warmth)',
                    '',
                    'CLIMATE CHANGE THREAT:',
                    '• Greenland ice melt adds freshwater',
                    '• Less salty water is less dense, may not sink',
                    '• Could slow/stop conveyor belt',
                    '• Would dramatically cool Europe'
                ]
            }
        ],

        diagrams: [
            {
                title: 'World Ocean Currents Map',
                type: 'map',
                description: 'Complete world map showing all major currents with: RED arrows for warm currents, BLUE arrows for cold currents. Label all currents mentioned. Show circular gyres in each ocean basin (clockwise in N, counterclockwise in S).'
            },
            {
                title: 'Atlantic Ocean Circulation Detail',
                type: 'map',
                description: 'North and South Atlantic with Gulf Stream, North Atlantic Drift, Labrador, Canary, Benguela, Brazil currents. Show Grand Banks mixing zone. Arrow thickness indicates strength.'
            },
            {
                title: 'Indian Ocean Monsoon Reversal',
                type: 'comparison-chart',
                description: 'Two maps: (1) Summer/SW Monsoon - clockwise flow, strong Somali Current north (2) Winter/NE Monsoon - counterclockwise, Somali Current south. Show current reversal clearly.'
            },
            {
                title: 'Global Thermohaline Circulation',
                type: 'flowchart',
                description: '3D globe view showing conveyor belt: Surface warm water (red) flowing north in Atlantic, sinking in North Atlantic, deep cold water (blue) flowing south, spreading to Pacific/Indian, rising, returning. Show 1000-year timescale.'
            },
            {
                title: 'Cold Current Desert Effect',
                type: 'cross-section',
                description: 'Cross-section showing: Cold current offshore → cools air → moisture condenses as fog over sea → dry air reaches land → coastal desert (Namib, Atacama). Show temperature inversion.'
            }
        ],

        quickFacts: [
            '🌊 Gulf Stream: 30 Sverdrup (30 million m³/second) - more than all rivers combined!',
            '🌡️ Gulf Stream keeps UK 10°C warmer than Labrador at same latitude',
            '🐟 Peru/Humboldt Current: World\'s richest fishing ground (20% of global catch)',
            '🔄 Indian Ocean currents reverse twice a year with monsoon',
            '⏱️ Thermohaline circulation takes ~1000 years for complete circuit',
            '❄️ Labrador Current brings icebergs that sank Titanic (1912)',
            '🏜️ Cold currents create coastal deserts: Namib, Atacama',
            '🌫️ San Francisco fog: Pacific cold current meets warm California air',
            '🇯🇵 Kuroshio means "black current" (dark blue color due to clarity)',
            '🦑 Upwelling zones (cold currents) have 50x more fish than open ocean',
            '⚡ Somali Current reverses from 5 km/hr south to 12 km/hr north in summer',
            '🌍 Surface currents move 10% of ocean water, thermohaline moves 90%'
        ],

        upscTraps: [
            {
                trap: 'Cold currents flow along western coasts of continents',
                clarity: 'OPPOSITE! Cold currents flow along EASTERN sides of ocean basins = WESTERN coasts of continents (California, Peru, Canary, Benguela). Warm currents on western ocean sides = eastern coasts.'
            },
            {
                trap: 'All ocean currents flow in same direction year-round',
                clarity: 'EXCEPTION: Indian Ocean northern currents REVERSE with monsoon. Somali Current flows north in summer, south in winter. Pacific/Atlantic currents are stable.'
            },
            {
                trap: 'Warm currents cause deserts',
                clarity: 'COLD currents cause coastal deserts! Cold water cools air, moisture falls as fog over ocean, dry air reaches land. Namib (Benguela), Atacama (Peru), Baja (California) - all due to cold currents.'
            },
            {
                trap: 'Deep ocean currents are driven by wind',
                clarity: 'Deep currents are THERMOHALINE - driven by temperature and salinity (density) differences. Wind drives only surface currents (top 400m). Deep currents are slow but massive.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Pattern: Clockwise gyres in N. Hemisphere, Counter-clockwise in S. (Coriolis)',
                'Warm currents: Western ocean sides → Eastern coasts (Gulf Stream, Kuroshio, Brazil)',
                'Cold currents: Eastern ocean sides → Western coasts → DESERTS (California, Peru, Benguela, Canary)',
                'Indian Ocean: Only ocean with REVERSING currents (monsoon) - Somali Current flips!',
                'Thermohaline: Deep circulation, density-driven, 1000-year circuit, climate regulation',
                'Effects: Climate moderation, fishing (upwelling), fog, navigation, desert formation'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the distribution of ocean currents in the Atlantic Ocean and their climatic significance.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the reversal of ocean currents in the Indian Ocean with reference to monsoons.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Why are the western coasts of continents in tropical latitudes relatively cooler?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Which current is responsible for keeping the Norwegian coast ice-free?',
                type: 'Prelims',
                options: ['Gulf Stream', 'North Atlantic Drift', 'Labrador Current', 'Canary Current']
            },
            {
                year: 2018,
                question: 'Discuss the concept of thermohaline circulation and its importance.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: TIDES (COMPREHENSIVE)
    // ============================================
    {
        id: 'tides',
        name: 'Tides',
        icon: '🌙',
        category: 'oceanography',
        theme: 'tide',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Tides',
            branches: [
                {
                    name: 'Causes',
                    color: '#4ECDC4',
                    children: [
                        'Moon\'s Gravitational Pull (primary)',
                        'Sun\'s Gravitational Pull',
                        'Centrifugal Force',
                        'Earth\'s Rotation'
                    ]
                },
                {
                    name: 'Types by Range',
                    color: '#FF6B6B',
                    children: [
                        'Spring Tides (highest range)',
                        'Neap Tides (lowest range)'
                    ]
                },
                {
                    name: 'Types by Frequency',
                    color: '#FFE66D',
                    children: [
                        'Semi-diurnal (2 high, 2 low daily)',
                        'Diurnal (1 high, 1 low daily)',
                        'Mixed (unequal heights)'
                    ]
                },
                {
                    name: 'Special Phenomena',
                    color: '#95E1D3',
                    children: [
                        'Tidal Bore',
                        'Tidal Range Variations',
                        'Tidal Currents'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Spring vs Neap',
                content: 'SPRING = Sun-Moon PULL together (Full/New moon) = STRONG tides. NEAP = No Extra Amplitude Power (Quarter moons, Sun-Moon at 90°) = WEAK tides.',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Moon vs Sun Effect',
                content: 'Moon is 400x closer than Sun, so its tide-generating force is 2.2x stronger despite Sun being much larger. Distance matters more than size for tides!',
                icon: '🌙'
            },
            {
                type: 'acronym',
                title: 'Tide Timing',
                content: 'High tide advances 50 minutes daily (moon\'s orbit adds time). So if high tide at 8 AM today, it\'s at 8:50 AM tomorrow!',
                icon: '⏰'
            },
            {
                type: 'visual',
                title: 'Tidal Bulge',
                content: 'Earth has TWO tidal bulges - one facing Moon (pulled toward), one opposite (centrifugal/inertia). As Earth rotates, locations pass through both bulges = 2 high tides daily.',
                icon: '🌍'
            }
        ],

        conceptBlocks: [
            {
                title: 'Causes of Tides',
                icon: '🌙',
                points: [
                    'PRIMARY CAUSE: Moon\'s gravitational attraction',
                    '  • Moon pulls water toward it creating bulge',
                    '  • Opposite side bulges due to centrifugal force/inertia',
                    '  • Two bulges = Two high tides per day',
                    '',
                    'SECONDARY CAUSE: Sun\'s gravitational attraction',
                    '  • Sun is larger but much farther (150 million km vs 384,000 km)',
                    '  • Sun\'s tide-generating force = 46% of Moon\'s',
                    '  • Sun reinforces or opposes Moon\'s pull',
                    '',
                    'CENTRIFUGAL FORCE:',
                    '  • Earth-Moon system rotates around common center',
                    '  • Creates outward force on side away from Moon',
                    '  • Results in second tidal bulge',
                    '',
                    'WHY TWO HIGH TIDES PER DAY?',
                    '  • Two tidal bulges exist simultaneously',
                    '  • As Earth rotates, each location passes through both',
                    '  • One high tide every ~12 hours 25 minutes'
                ]
            },
            {
                title: 'Spring and Neap Tides',
                icon: '🌑',
                points: [
                    '🌊 SPRING TIDES (Maximum Range):',
                    '  • Occur during FULL MOON and NEW MOON',
                    '  • Sun, Earth, Moon aligned (syzygy)',
                    '  • Sun and Moon pull together (reinforced)',
                    '  • Highest high tides, lowest low tides',
                    '  • Tidal range 20% greater than average',
                    '  • Occur twice per month (every ~14 days)',
                    '  • Name from "springing forth" not season',
                    '',
                    '🌗 NEAP TIDES (Minimum Range):',
                    '  • Occur during FIRST QUARTER and LAST QUARTER moon',
                    '  • Sun and Moon at RIGHT ANGLES (90°)',
                    '  • Gravitational pulls partially cancel',
                    '  • Lower high tides, higher low tides',
                    '  • Tidal range 20% less than average',
                    '  • Occur twice per month',
                    '',
                    '📊 RATIO: Spring tide range is ~2x Neap tide range'
                ]
            },
            {
                title: 'Types by Daily Pattern',
                icon: '📅',
                points: [
                    '🔄 SEMI-DIURNAL TIDES:',
                    '  • 2 high tides + 2 low tides per day',
                    '  • Both high tides roughly equal height',
                    '  • Period: ~12 hours 25 minutes between highs',
                    '  • Most common type globally',
                    '  • Example: Atlantic Ocean, Indian Ocean coasts',
                    '',
                    '☝️ DIURNAL TIDES:',
                    '  • Only 1 high tide + 1 low tide per day',
                    '  • Period: ~24 hours 50 minutes',
                    '  • Less common, specific locations',
                    '  • Example: Gulf of Mexico, parts of China Sea',
                    '',
                    '↕️ MIXED TIDES:',
                    '  • 2 high tides + 2 low tides BUT unequal heights',
                    '  • One high tide significantly higher than other',
                    '  • Called "higher high" and "lower high"',
                    '  • Example: Pacific coast of North America, parts of Indian coast'
                ]
            },
            {
                title: 'Tidal Range & Special Phenomena',
                icon: '🌊',
                points: [
                    '📏 TIDAL RANGE (Difference between high and low):',
                    '  • Varies enormously by location',
                    '  • Open ocean: 0.5-1 meter',
                    '  • Bay of Fundy (Canada): 16+ meters (world\'s highest!)',
                    '  • Gulf of Khambhat (India): 10-12 meters',
                    '  • Mediterranean: 0.3 meters (almost tideless)',
                    '',
                    'FACTORS AFFECTING RANGE:',
                    '  • Shape of coastline (funnel shape amplifies)',
                    '  • Water depth (shallow = higher range)',
                    '  • Basin size and shape',
                    '',
                    '🌊 TIDAL BORE (Mascaret):',
                    '  • Definition: Wall of water rushing up river',
                    '  • Caused when incoming tide enters narrow river',
                    '  • Can be surfable wave!',
                    '  • Famous Examples:',
                    '    - Severn Bore (UK)',
                    '    - Qiantang River Bore (China) - up to 9m high!',
                    '    - Hooghly Bore (India) - called "baan"',
                    '    - Amazon Bore - "Pororoca"',
                    '',
                    '⚡ TIDAL CURRENTS:',
                    '  • Horizontal water movement due to tide',
                    '  • Flood current: water moving inland with high tide',
                    '  • Ebb current: water moving seaward with low tide',
                    '  • Can be very strong in narrow straits'
                ]
            },
            {
                title: 'Importance of Tides',
                icon: '⚙️',
                points: [
                    '🚢 NAVIGATION:',
                    '  • Ships time entry/exit from harbors',
                    '  • Tidal tables essential for shipping',
                    '  • Many ports accessible only at high tide',
                    '',
                    '🐟 FISHING:',
                    '  • Tidal zones rich in marine life',
                    '  • Fish caught in tidal traps',
                    '  • Shellfish exposed at low tide',
                    '',
                    '⚡ TIDAL ENERGY:',
                    '  • Harness tidal movement for electricity',
                    '  • La Rance (France): First major tidal plant (1966)',
                    '  • Sihwa Lake (South Korea): World\'s largest (254 MW)',
                    '  • Gulf of Khambhat (India): Potential site',
                    '  • Renewable, predictable, but high capital cost',
                    '',
                    '🏗️ COASTAL ENGINEERING:',
                    '  • Structures must account for tidal range',
                    '  • Bridge clearances, jetty heights',
                    '',
                    '🌿 ECOLOGY:',
                    '  • Intertidal zones: Unique ecosystems',
                    '  • Mangroves adapted to tidal flooding',
                    '  • Tidal flushing cleans estuaries'
                ]
            },
            {
                title: 'Tides in India',
                icon: '🇮🇳',
                points: [
                    '📍 HIGH TIDAL RANGE AREAS:',
                    '  • Gulf of Khambhat (Cambay): 10-12 meters',
                    '    - Funnel-shaped, amplifies tides',
                    '    - Potential for tidal power',
                    '  • Gulf of Kutch: 5-8 meters',
                    '  • Hooghly River: 4-5 meters, tidal bore occurs',
                    '',
                    '📍 MODERATE TIDAL RANGE:',
                    '  • Mumbai coast: 4-5 meters',
                    '  • Sundarbans: 3-5 meters',
                    '',
                    '📍 LOW TIDAL RANGE:',
                    '  • East coast (except Bengal): 1-2 meters',
                    '  • Lakshadweep: Less than 1 meter',
                    '',
                    '🌊 TIDAL BORE IN INDIA:',
                    '  • Hooghly River: Local name "Baan"',
                    '  • Narmada River: Occurs during spring tides',
                    '',
                    '⚡ TIDAL POWER POTENTIAL:',
                    '  • Gulf of Khambhat: 7,000 MW potential',
                    '  • Gulf of Kutch: 1,000 MW potential',
                    '  • Sundarbans: 100 MW potential',
                    '  • Total estimated: 8,000-9,000 MW'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Cause of Tides - Tidal Bulges',
                type: 'cross-section',
                description: 'Earth with Moon showing two tidal bulges: one facing Moon (gravitational pull) and one opposite (centrifugal force). Show Earth rotation creating two high tides per location daily.'
            },
            {
                title: 'Spring vs Neap Tides',
                type: 'comparison-chart',
                description: 'Two diagrams: (1) Spring tide - Sun-Earth-Moon aligned (full and new moon), combined pull, large range (2) Neap tide - Sun-Moon at 90°, partial cancellation, small range'
            },
            {
                title: 'Types of Tides - Daily Patterns',
                type: 'bar-graph',
                description: 'Three tide graphs over 24 hours: (1) Semi-diurnal - 2 equal high tides (2) Diurnal - 1 high tide (3) Mixed - 2 unequal high tides'
            },
            {
                title: 'Tidal Bore Formation',
                type: 'cross-section',
                description: 'Funnel-shaped river estuary showing incoming tide wave compressing and rising as it moves upstream, forming wall of water (bore)'
            },
            {
                title: 'India - Tidal Range Map',
                type: 'map',
                description: 'India map showing tidal ranges: Gulf of Khambhat (10-12m), Gulf of Kutch (5-8m), Mumbai (4-5m), Hooghly (4-5m), East coast (1-2m), Lakshadweep (<1m). Mark tidal bore locations.'
            }
        ],

        quickFacts: [
            '🌙 Moon\'s tide force is 2.2x stronger than Sun\'s (despite Sun\'s larger size)',
            '📏 Bay of Fundy (Canada): World\'s highest tides at 16+ meters',
            '🇮🇳 Gulf of Khambhat: India\'s highest tides at 10-12 meters',
            '⏰ High tide advances 50 minutes daily (moon\'s orbit)',
            '🌑 Spring tides: Full Moon and New Moon (aligned)',
            '🌗 Neap tides: Quarter Moons (Sun-Moon at 90°)',
            '🌊 Qiantang River Bore (China): 9 meters high, world\'s largest',
            '⚡ World\'s largest tidal power: Sihwa Lake, South Korea (254 MW)',
            '🇮🇳 India\'s tidal power potential: 8,000-9,000 MW',
            '🐚 Intertidal zone: Most diverse marine ecosystem per area',
            '📅 Semi-diurnal (2 high tides/day) is most common type globally',
            '🌊 Hooghly bore locally called "Baan" in India'
        ],

        upscTraps: [
            {
                trap: 'Spring tides occur in spring season',
                clarity: 'Name comes from water "springing up" - nothing to do with season! Spring tides occur twice per MONTH at full and new moon, in any season.'
            },
            {
                trap: 'Moon causes tides only on the side facing it',
                clarity: 'TWO tidal bulges exist - one facing Moon (gravitational) and one opposite (centrifugal/inertia). That\'s why there are 2 high tides per day, not 1.'
            },
            {
                trap: 'Mediterranean Sea has normal tides',
                clarity: 'Mediterranean is nearly TIDELESS (range 0.3m) because it\'s almost enclosed with narrow Gibraltar connection. Tidal waves can\'t easily enter and amplify.'
            },
            {
                trap: 'Tidal energy is impractical',
                clarity: 'Tidal energy works! La Rance (France) has operated since 1966. Sihwa (South Korea) produces 254 MW. It\'s expensive but reliable and predictable unlike wind/solar.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Cause: Moon\'s gravity (primary) + Sun\'s gravity (46% of Moon\'s effect)',
                'Two bulges: Toward Moon (gravity) + Opposite side (centrifugal) = 2 high tides/day',
                'Spring tide: Full/New Moon, aligned, MAXIMUM range (2x neap)',
                'Neap tide: Quarter Moon, 90° angle, MINIMUM range',
                'Highest tides: Bay of Fundy (16m), Gulf of Khambhat (10-12m)',
                'India tidal power potential: ~8,000 MW (Khambhat, Kutch, Sundarbans)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Explain the causes of ocean tides and differentiate between spring and neap tides.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is tidal bore? Name the rivers in India where it occurs.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Discuss the potential of tidal energy in India.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Spring tides occur during:',
                type: 'Prelims',
                options: ['Full moon only', 'New moon only', 'Both full and new moon', 'Quarter moon']
            }
        ]
    },

    // ============================================
    // TOPIC 5: OCEAN WAVES
    // ============================================
    {
        id: 'ocean-waves',
        name: 'Ocean Waves',
        icon: '🌊',
        category: 'oceanography',
        theme: 'ocean',
        difficulty: 'easy',
        upscRelevance: 'medium',

        mindMap: {
            central: 'Ocean Waves',
            branches: [
                {
                    name: 'Wave Characteristics',
                    color: '#4ECDC4',
                    children: [
                        'Crest (highest point)',
                        'Trough (lowest point)',
                        'Wave Height',
                        'Wavelength',
                        'Wave Period'
                    ]
                },
                {
                    name: 'Types by Cause',
                    color: '#FF6B6B',
                    children: [
                        'Wind Waves (most common)',
                        'Tsunami (seismic)',
                        'Internal Waves',
                        'Seiche (enclosed basins)'
                    ]
                },
                {
                    name: 'Wave Behavior',
                    color: '#FFE66D',
                    children: [
                        'Refraction (bending)',
                        'Reflection (bouncing)',
                        'Diffraction (spreading)',
                        'Breaking (shore)'
                    ]
                },
                {
                    name: 'Coastal Effects',
                    color: '#95E1D3',
                    children: [
                        'Erosion',
                        'Deposition',
                        'Longshore Drift',
                        'Wave-cut Platforms'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Wave Parts',
                content: 'CTHWP = Crest (top), Trough (bottom), Height (vertical), Wavelength (horizontal), Period (time)',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'Wave vs Current',
                content: 'Waves move ENERGY (water stays roughly in place, circular motion) | Currents move WATER (actual mass transport)',
                icon: '🔄'
            },
            {
                type: 'acronym',
                title: 'Tsunami Characteristics',
                content: 'TSUNAMI = Travels Swiftly Under Notice And Moves Inland. Long wavelength (200 km), fast (800 km/hr), looks like rising tide, not curl.',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Wave Breaking',
                content: 'Deep water: Circular motion. Shallow water: Bottom drags, top moves faster, wave "trips" and breaks. Height increases, wavelength decreases near shore.',
                icon: '🏄'
            }
        ],

        conceptBlocks: [
            {
                title: 'Wave Characteristics',
                icon: '📊',
                points: [
                    'WAVE ANATOMY:',
                    '  • Crest: Highest point of wave',
                    '  • Trough: Lowest point of wave',
                    '  • Wave Height: Vertical distance crest to trough',
                    '  • Wavelength: Horizontal distance crest to crest',
                    '  • Wave Period: Time for one full wave to pass',
                    '  • Wave Frequency: Number of waves per unit time',
                    '',
                    'WAVE MOTION:',
                    '  • Water particles move in CIRCLES (orbital motion)',
                    '  • Energy moves forward, but water stays roughly in place',
                    '  • Motion decreases with depth',
                    '  • Wave base: Depth where motion stops (~half wavelength)',
                    '',
                    'WAVE SPEED depends on: Water depth, wavelength'
                ]
            },
            {
                title: 'Types of Ocean Waves',
                icon: '🌊',
                points: [
                    '💨 WIND WAVES (Most Common):',
                    '  • Caused by wind friction on water surface',
                    '  • Size depends on: Wind speed, duration, fetch (distance)',
                    '  • Largest: Southern Ocean (Roaring Forties) - up to 30m!',
                    '',
                    '🌋 TSUNAMI (Seismic Sea Waves):',
                    '  • Caused by: Underwater earthquakes, volcanic eruptions, landslides',
                    '  • Wavelength: 200+ km (vs 100m for wind waves)',
                    '  • Speed: Up to 800 km/hr in deep ocean',
                    '  • Height in deep ocean: <1 meter (unnoticeable)',
                    '  • Height at coast: 10-30+ meters (devastating)',
                    '  • 2004 Indian Ocean Tsunami: 230,000+ deaths',
                    '',
                    '📊 INTERNAL WAVES:',
                    '  • Occur within ocean (at thermocline/pycnocline)',
                    '  • Not visible at surface',
                    '  • Important for mixing',
                    '',
                    '🏊 SEICHE:',
                    '  • Standing wave in enclosed/semi-enclosed basin',
                    '  • Water sloshes back and forth',
                    '  • Can occur in lakes, harbors, bays'
                ]
            },
            {
                title: 'Tsunami in Detail',
                icon: '⚠️',
                points: [
                    'GENERATION:',
                    '  • Requires large vertical displacement of water',
                    '  • Usually from earthquakes >7.0 magnitude',
                    '  • Subduction zone quakes most dangerous',
                    '',
                    'CHARACTERISTICS:',
                    '  • Deep ocean: Height <1m, wavelength 200km, speed 800 km/hr',
                    '  • Approaching coast: Slows down, wavelength decreases',
                    '  • At coast: Height amplifies (10-30m), devastating',
                    '',
                    'WARNING SIGNS:',
                    '  • Sea withdraws unusually far (negative first arrival)',
                    '  • Loud roaring sound',
                    '  • First wave often NOT the largest',
                    '',
                    'MAJOR TSUNAMIS:',
                    '  • 2004 Indian Ocean: 230,000+ deaths, M9.1 earthquake',
                    '  • 2011 Japan: 20,000+ deaths, caused Fukushima disaster',
                    '  • 1883 Krakatoa: Volcanic, waves up to 40m',
                    '',
                    'INDIAN OCEAN TSUNAMI WARNING SYSTEM:',
                    '  • Established after 2004 disaster',
                    '  • Network of seismographs and sea-level gauges',
                    '  • INCOIS coordinates for India'
                ]
            },
            {
                title: 'Wave Behavior Near Coast',
                icon: '🏖️',
                points: [
                    '🔀 REFRACTION:',
                    '  • Wave bending due to depth change',
                    '  • Wave slows in shallow water',
                    '  • Energy focused on headlands, spread in bays',
                    '',
                    '⬅️ REFLECTION:',
                    '  • Wave bouncing off steep surfaces (cliffs, sea walls)',
                    '  • Creates standing waves',
                    '',
                    '↗️ DIFFRACTION:',
                    '  • Wave spreading around obstacles',
                    '  • Allows waves to reach behind breakwaters',
                    '',
                    '💥 BREAKING:',
                    '  • Occurs when wave height > 1/7 of wavelength',
                    '  • Bottom friction slows base, top overtakes',
                    '  • Types:',
                    '    - Spilling: Gentle slope, foam slides down face',
                    '    - Plunging: Steep slope, classic "tube" wave',
                    '    - Surging: Very steep, wave surges up beach',
                    '',
                    '➡️ LONGSHORE DRIFT:',
                    '  • Sediment transport along beach',
                    '  • Waves approach at angle, drag sediment sideways',
                    '  • Creates spits, bars, beaches'
                ]
            },
            {
                title: 'Wave Energy & Applications',
                icon: '⚡',
                points: [
                    'WAVE ENERGY POTENTIAL:',
                    '  • Waves contain enormous energy',
                    '  • Global wave power: ~2 terawatts',
                    '  • Best locations: Western coasts (40-60° lat)',
                    '',
                    'WAVE ENERGY DEVICES:',
                    '  • Oscillating Water Column (OWC)',
                    '  • Point Absorbers (buoys)',
                    '  • Overtopping devices',
                    '  • Still largely experimental',
                    '',
                    'INDIA\'S WAVE ENERGY:',
                    '  • Western coast has better potential',
                    '  • NIOT developing wave energy devices',
                    '  • Vizhinjam (Kerala): Test site',
                    '',
                    'EROSION BY WAVES:',
                    '  • Hydraulic action: Water pressure in cracks',
                    '  • Abrasion: Rock fragments scrape coast',
                    '  • Attrition: Rocks break down each other',
                    '  • Corrosion: Chemical dissolution (limestone)',
                    '',
                    'COASTAL FEATURES FORMED:',
                    '  • Erosional: Cliffs, caves, arches, stacks, wave-cut platforms',
                    '  • Depositional: Beaches, spits, bars, tombolos'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Wave Anatomy',
                type: 'cross-section',
                description: 'Single wave showing: Crest at top, Trough at bottom, Wave Height (vertical arrow), Wavelength (horizontal arrow), still water level. Show circular orbital motion of water particles decreasing with depth.'
            },
            {
                title: 'Tsunami Generation and Travel',
                type: 'cross-section',
                description: 'Sequence: (1) Underwater earthquake displaces water (2) Long, low wave in deep ocean (800 km/hr) (3) Wave slows and rises approaching coast (4) Devastating wave at shore'
            },
            {
                title: 'Wave Breaking Types',
                type: 'comparison-chart',
                description: 'Three wave breaking types: Spilling (gentle slope, foam), Plunging (steep slope, tube), Surging (very steep, no break). Show beach profile for each.'
            },
            {
                title: 'Longshore Drift',
                type: 'map',
                description: 'Beach view from above showing waves approaching at angle, water and sediment movement in zig-zag pattern along beach, net sediment transport direction.'
            }
        ],

        quickFacts: [
            '🌊 Largest recorded wind wave: 34 meters (112 ft) in North Atlantic',
            '⚡ Tsunami speed in deep ocean: 800 km/hr (as fast as jet plane!)',
            '📏 Tsunami wavelength: 200+ km (wind waves: ~100m)',
            '🌋 2004 Indian Ocean Tsunami: 230,000+ deaths across 14 countries',
            '🏄 Perfect surfing wave: Plunging breaker on reef or point break',
            '📊 Wave base = half wavelength (motion stops below this depth)',
            '🌍 Most powerful waves: Southern Ocean "Roaring Forties"',
            '⚠️ First tsunami wave often NOT the largest - stay away for hours!',
            '🇮🇳 India\'s wave energy potential: Western coast (especially Gujarat, Kerala)',
            '⏰ Tsunami warning: Sea withdrawing unusually is danger sign!',
            '🔬 Waves transport ENERGY, not water (water moves in circles)',
            '🏖️ Beach sand moves by longshore drift - up to 500,000 m³/year in some places'
        ],

        upscTraps: [
            {
                trap: 'Waves move water from one place to another',
                clarity: 'Waves move ENERGY, not water! Water particles move in circular orbits but return to roughly the same position. Only breaking waves near shore actually transport water.'
            },
            {
                trap: 'Tsunami is a huge curling wave like in movies',
                clarity: 'Tsunami appears more like rapidly rising tide (the name means "harbor wave"). It\'s a wall of water, not a curling surf wave. Often first sign is water WITHDRAWING.'
            },
            {
                trap: 'The first tsunami wave is the most dangerous',
                clarity: 'Often the 2nd, 3rd, or later waves are LARGER! Waves can continue for hours. People returning after first wave have been killed by subsequent waves.'
            },
            {
                trap: 'Wave height stays same as wave approaches shore',
                clarity: 'Waves INCREASE in height as they approach shore (shoaling). A 1-meter deep ocean wave can become 10-30 meter tsunami at coast due to energy compression in shallow water.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Wave parts: Crest (top), Trough (bottom), Height (vertical), Wavelength (horizontal)',
                'Waves move ENERGY (circular water motion), not water mass',
                'Tsunami: Seismic, 200+ km wavelength, 800 km/hr, looks like rising tide',
                '2004 Indian Ocean Tsunami: 230,000+ deaths, led to warning system',
                'Breaking waves: Spilling (gentle), Plunging (steep/"tubes"), Surging (very steep)',
                'Coastal erosion: Hydraulic action, abrasion, attrition, corrosion'
            ]
        },

        pyqs: [
            {
                year: 2020,
                question: 'Explain the formation of tsunami and its devastating effects.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Discuss the mechanism of tsunami generation and early warning systems.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is longshore drift? Explain with diagram.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: MARINE RESOURCES
    // ============================================
    {
        id: 'marine-resources',
        name: 'Marine Resources',
        icon: '🐟',
        category: 'oceanography',
        theme: 'ocean',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Marine Resources',
            branches: [
                {
                    name: 'Living Resources',
                    color: '#2ECC71',
                    children: [
                        'Fish (capture & aquaculture)',
                        'Shellfish & Crustaceans',
                        'Seaweed & Algae',
                        'Coral & Marine Organisms'
                    ]
                },
                {
                    name: 'Mineral Resources',
                    color: '#FF6B6B',
                    children: [
                        'Polymetallic Nodules',
                        'Hydrothermal Deposits',
                        'Sand & Gravel',
                        'Phosphorite'
                    ]
                },
                {
                    name: 'Energy Resources',
                    color: '#FFE66D',
                    children: [
                        'Offshore Oil & Gas',
                        'Tidal Energy',
                        'Wave Energy',
                        'OTEC (Thermal)'
                    ]
                },
                {
                    name: 'Other Resources',
                    color: '#4ECDC4',
                    children: [
                        'Fresh Water (desalination)',
                        'Salt',
                        'Pharmaceuticals',
                        'Genetic Resources'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Marine Resource Types',
                content: 'LMEF = Living (fish), Mineral (nodules), Energy (oil), Fresh water - the four seas of resources!',
                icon: '🧠'
            },
            {
                type: 'comparison',
                title: 'EEZ vs High Seas',
                content: 'EEZ (200 nautical miles) = Your ocean backyard, exclusive rights. High Seas = Common heritage, shared resources but limited mining rights.',
                icon: '🌊'
            },
            {
                type: 'acronym',
                title: 'Polymetallic Nodules',
                content: 'MNCC = Manganese, Nickel, Cobalt, Copper - main metals in "potato-sized" nodules on ocean floor',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Blue Economy',
                content: 'Blue Economy = Ocean as sustainable economic zone. Not just extraction but conservation, ecotourism, biotechnology. India launched Sagarmala for port-led development!',
                icon: '🌏'
            }
        ],

        conceptBlocks: [
            {
                title: 'Living Marine Resources',
                icon: '🐟',
                points: [
                    'FISH PRODUCTION:',
                    '  • Global marine capture: ~80 million tonnes/year',
                    '  • Top countries: China, Indonesia, India, Peru',
                    '  • India: 7th largest marine producer globally',
                    '  • India\'s marine catch: ~4 million tonnes/year',
                    '',
                    'MAJOR FISHING GROUNDS:',
                    '  • Upwelling zones (Peru, Benguela, California)',
                    '  • Continental shelves (rich nutrients)',
                    '  • Mixing zones (warm + cold currents)',
                    '  • Grand Banks (Newfoundland) - now depleted',
                    '',
                    'AQUACULTURE (Mariculture):',
                    '  • Fastest growing food sector globally',
                    '  • Fish, shrimp, oysters, mussels, seaweed',
                    '  • India: Major shrimp exporter (Andhra Pradesh coast)',
                    '',
                    'SEAWEED:',
                    '  • Food, fertilizer, pharmaceuticals, cosmetics',
                    '  • Carrageenan, agar, alginates extracted',
                    '  • Tamil Nadu, Gujarat coast important in India',
                    '',
                    'THREATS:',
                    '  • Overfishing: Many stocks depleted',
                    '  • Bycatch: Non-target species killed',
                    '  • Pollution: Plastic, chemicals, oil spills',
                    '  • Climate change: Ocean acidification, warming'
                ]
            },
            {
                title: 'Mineral Resources',
                icon: '⛏️',
                points: [
                    'POLYMETALLIC NODULES:',
                    '  • "Potato-sized" lumps on ocean floor',
                    '  • Depth: 4000-6000 meters',
                    '  • Contain: Manganese (25-30%), Nickel, Cobalt, Copper',
                    '  • Main location: Clarion-Clipperton Zone (Pacific)',
                    '  • India has exploration rights in Indian Ocean',
                    '  • India\'s allocation: 150,000 km² in Central Indian Ocean',
                    '',
                    'POLYMETALLIC SULPHIDES:',
                    '  • Found at hydrothermal vents (mid-ocean ridges)',
                    '  • Contain: Copper, Zinc, Gold, Silver',
                    '  • Hot, mineral-rich water deposits metals',
                    '  • India has rights in Southwest Indian Ridge',
                    '',
                    'COBALT-RICH CRUSTS:',
                    '  • Coat seamounts at 400-4000m depth',
                    '  • High cobalt content (used in batteries)',
                    '',
                    'SAND & GRAVEL:',
                    '  • Extracted from shallow coastal waters',
                    '  • Used in construction',
                    '',
                    'PHOSPHORITE:',
                    '  • Phosphate-rich deposits',
                    '  • Used in fertilizers'
                ]
            },
            {
                title: 'Energy Resources',
                icon: '⚡',
                points: [
                    '🛢️ OFFSHORE OIL & GAS:',
                    '  • ~30% of global oil from offshore',
                    '  • India\'s offshore: Mumbai High, Krishna-Godavari Basin',
                    '  • Mumbai High: Discovered 1974, India\'s largest',
                    '  • KG Basin: Major gas discoveries (D6 block)',
                    '',
                    '🌊 TIDAL ENERGY:',
                    '  • Harnesses tidal rise and fall',
                    '  • India potential: ~8,000 MW',
                    '  • Best sites: Gulf of Khambhat, Gulf of Kutch',
                    '  • La Rance (France): First major tidal plant (1966)',
                    '',
                    '🌊 WAVE ENERGY:',
                    '  • Still experimental globally',
                    '  • India potential: ~40,000 MW (theoretical)',
                    '  • Western coast has better potential',
                    '',
                    '🌡️ OCEAN THERMAL ENERGY (OTEC):',
                    '  • Uses temperature difference between surface and deep water',
                    '  • Needs 20°C+ difference',
                    '  • Tropical oceans ideal (warm surface, cold depth)',
                    '  • India: Lakshadweep experimental plant',
                    '  • Potential: ~180,000 MW for India',
                    '',
                    '🧂 SALINITY GRADIENT ENERGY:',
                    '  • Energy from freshwater meeting saltwater',
                    '  • River mouths potential sites'
                ]
            },
            {
                title: 'India\'s Marine Resources',
                icon: '🇮🇳',
                points: [
                    '📏 MARITIME ZONES:',
                    '  • Territorial Sea: 12 nautical miles',
                    '  • Contiguous Zone: 24 nautical miles',
                    '  • EEZ: 200 nautical miles (~2.02 million km²)',
                    '  • Continental Shelf: Can extend to 350 nm',
                    '',
                    '🐟 FISHERIES:',
                    '  • Coastline: 7,517 km',
                    '  • Marine production: ~4 million tonnes',
                    '  • Major states: Gujarat, Tamil Nadu, Kerala, Maharashtra',
                    '  • Major species: Mackerel, sardines, shrimp, tuna',
                    '',
                    '🛢️ HYDROCARBONS:',
                    '  • Mumbai High: Largest offshore oilfield',
                    '  • KG Basin: Major gas reserves',
                    '  • Andaman, Lakshadweep basins: Potential',
                    '',
                    '⛏️ DEEP SEA MINING:',
                    '  • India is "Pioneer Investor" (UN recognition)',
                    '  • 150,000 km² in Central Indian Ocean Basin (nodules)',
                    '  • 10,000 km² in Southwest Indian Ridge (sulphides)',
                    '',
                    '⚡ OCEAN ENERGY:',
                    '  • Tidal: 8,000 MW potential',
                    '  • Wave: 40,000 MW potential',
                    '  • OTEC: 180,000 MW potential',
                    '',
                    '🌊 BLUE ECONOMY INITIATIVES:',
                    '  • Sagarmala: Port-led development',
                    '  • Deep Ocean Mission: ₹4,077 crore program',
                    '  • Focus on: Exploration, desalination, energy'
                ]
            },
            {
                title: 'International Ocean Governance',
                icon: '🌐',
                points: [
                    '📜 UNCLOS (1982):',
                    '  • UN Convention on Law of the Sea',
                    '  • Defines maritime zones and rights',
                    '  • EEZ concept: 200 nm exclusive rights',
                    '  • High seas: "Common heritage of mankind"',
                    '',
                    '🔵 INTERNATIONAL SEABED AUTHORITY (ISA):',
                    '  • Regulates deep sea mining in international waters',
                    '  • Issues exploration/exploitation licenses',
                    '  • India has Pioneer Investor status',
                    '',
                    '📏 MARITIME ZONES:',
                    '  • Territorial Sea: 12 nm - full sovereignty',
                    '  • Contiguous Zone: 24 nm - customs, immigration control',
                    '  • EEZ: 200 nm - resource rights',
                    '  • Continental Shelf: Up to 350 nm for seabed resources',
                    '  • High Seas: Beyond EEZ, shared resources',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Sustainable use vs. exploitation',
                    '  • Deep sea ecosystem protection',
                    '  • Climate change impacts',
                    '  • Plastic pollution crisis'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Maritime Zones Diagram',
                type: 'cross-section',
                description: 'Cross-section from coast showing: Territorial Sea (12 nm), Contiguous Zone (24 nm), EEZ (200 nm), Continental Shelf (can extend 350 nm), High Seas. Show rights in each zone.'
            },
            {
                title: 'Distribution of Polymetallic Nodules',
                type: 'map',
                description: 'World map showing nodule deposits: Clarion-Clipperton Zone (Pacific), India\'s allocation (Central Indian Ocean). Mark depth zones and concentration areas.'
            },
            {
                title: 'India\'s Offshore Oil & Gas Fields',
                type: 'map',
                description: 'India map showing: Mumbai High, KG Basin, Cauvery Basin, Andaman Basin. Mark producing and potential areas.'
            },
            {
                title: 'Ocean Energy Types',
                type: 'comparison-chart',
                description: 'Four panels showing: (1) Tidal barrage mechanism (2) Wave energy device (3) OTEC system using temperature difference (4) Salinity gradient energy at river mouth'
            },
            {
                title: 'India\'s Blue Economy Initiatives',
                type: 'flowchart',
                description: 'Diagram showing Deep Ocean Mission components: Manned submersible, polymetallic nodule mining, OTEC, desalination, marine biodiversity. Show Sagarmala ports linkage.'
            }
        ],

        quickFacts: [
            '🐟 Global marine fish catch: ~80 million tonnes/year',
            '🇮🇳 India\'s EEZ: 2.02 million km² (7th largest in world)',
            '🛢️ Mumbai High: India\'s largest offshore oil field (discovered 1974)',
            '⚡ India\'s ocean energy potential: Tidal (8,000 MW), Wave (40,000 MW), OTEC (180,000 MW)',
            '⛏️ Polymetallic nodules contain: Manganese, Nickel, Cobalt, Copper',
            '🌊 India\'s nodule allocation: 150,000 km² in Central Indian Ocean',
            '📜 UNCLOS: "Constitution of the Oceans" - adopted 1982',
            '🌍 High seas: 64% of ocean surface, "common heritage of mankind"',
            '💧 Desalination: Removes salt from seawater - Chennai, Gujarat plants in India',
            '🌊 Deep Ocean Mission: India\'s ₹4,077 crore ocean exploration program',
            '🏗️ Sagarmala: ₹12 lakh crore port-led development initiative',
            '🦞 India: 2nd largest aquaculture producer globally (after China)'
        ],

        upscTraps: [
            {
                trap: 'EEZ gives full sovereignty like territorial waters',
                clarity: 'EEZ (200 nm) gives RESOURCE RIGHTS only - fish, oil, minerals. Other countries can still navigate freely. Full sovereignty only in territorial sea (12 nm).'
            },
            {
                trap: 'Polymetallic nodules are easy to mine',
                clarity: 'Mining at 4000-6000m depth is extremely challenging! Technology still developing. Environmental concerns about disturbing deep-sea ecosystems. No commercial mining yet.'
            },
            {
                trap: 'Offshore oil is unlimited',
                clarity: 'Offshore reserves are finite and depleting. Mumbai High production declining. Focus shifting to deep water (KG Basin) and alternative ocean energy.'
            },
            {
                trap: 'India has no deep sea exploration capability',
                clarity: 'Deep Ocean Mission launched 2021! India developing manned submersible for 6000m depth. Already a Pioneer Investor in deep sea mining with ISA allocation.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Maritime zones: Territorial (12 nm), Contiguous (24 nm), EEZ (200 nm), Continental Shelf (350 nm max)',
                'Living: Fish, shellfish, seaweed - India 7th largest marine producer',
                'Minerals: Polymetallic nodules (Mn, Ni, Co, Cu) - India has 150,000 km² exploration rights',
                'Energy: Offshore oil (Mumbai High, KG Basin), Tidal (8,000 MW), Wave (40,000 MW), OTEC (180,000 MW)',
                'Initiatives: Deep Ocean Mission (₹4,077 cr), Sagarmala (port development)',
                'UNCLOS: Law of the Sea, EEZ concept, ISA regulates deep sea mining'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss India\'s Deep Ocean Mission and its significance for marine resources.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What are polymetallic nodules? Discuss their distribution and India\'s exploration efforts.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Explain the concept of Blue Economy with reference to India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is the extent of India\'s Exclusive Economic Zone?',
                type: 'Prelims',
                options: ['12 nautical miles', '200 nautical miles', '350 nautical miles', '500 nautical miles']
            },
            {
                year: 2018,
                question: 'Discuss the ocean energy potential of India.',
                type: 'Mains'
            }
        ]
    }

];

// Make data available globally
window.oceanographyData = oceanographyData;

console.log('🌊 Oceanography Data Loaded:', oceanographyData.length, 'topics');
