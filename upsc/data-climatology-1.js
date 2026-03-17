/* ========================================
   UPSC GEOGRAPHY - CLIMATOLOGY PART 1
   4 Topics:
   1. Structure of Atmosphere
   2. Temperature Distribution
   3. Pressure Belts
   4. Wind Systems
   
   Load AFTER: data-geomorphology.js
======================================== */

const climatologyTopics1 = [

    // ========================================
    // TOPIC 1: STRUCTURE OF ATMOSPHERE
    // ========================================
    {
        id: 'atmosphere-structure',
        title: 'Structure of Atmosphere',
        category: 'Climatology',
        icon: '☁️',
        color: '#4A90E2',
        
        theme: {
            primary: '#4A90E2',
            secondary: '#87CEEB',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            pattern: 'clouds'
        },

        stats: {
            'Total Height': '10,000 km',
            'Layers': '5 Major',
            'Breathable Zone': 'Up to 5 km',
            'Weather Zone': 'Troposphere'
        },

        mindmap: {
            center: 'Atmosphere Structure',
            branches: [
                {
                    name: 'Troposphere',
                    color: '#FF6B6B',
                    sub: ['0-12 km', 'Weather occurs here', 'Temperature ↓ with height', 'Tropopause boundary']
                },
                {
                    name: 'Stratosphere',
                    color: '#4ECDC4',
                    sub: ['12-50 km', 'Ozone layer (25-30 km)', 'Temperature ↑ with height', 'Stratopause boundary']
                },
                {
                    name: 'Mesosphere',
                    color: '#45B7D1',
                    sub: ['50-80 km', 'Coldest layer (-90°C)', 'Meteors burn here', 'Mesopause boundary']
                },
                {
                    name: 'Thermosphere',
                    color: '#F7DC6F',
                    sub: ['80-400 km', 'Aurora occurs', 'Temperature ↑ (up to 1500°C)', 'Radio waves reflect']
                },
                {
                    name: 'Exosphere',
                    color: '#BB8FCE',
                    sub: ['400+ km', 'Merges with space', 'Satellites orbit', 'Very low density']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 "The Smart Man Takes Exercise"',
                explanation: 'Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere'
            },
            {
                type: 'Story Method',
                text: '🏔️ The Temperature Rollercoaster',
                explanation: 'Tropos: Gets COLD going up ❄️\nStratos: Gets HOT going up 🔥 (ozone party!)\nMesos: Gets COLD again ❄️\nThermos: Gets SUPER HOT 🔥🔥'
            },
            {
                type: 'Number Trick',
                text: '📏 Height Memory',
                explanation: '0-12-50-80-400 km (Remember: 12, 50, 80 are nice round numbers)'
            }
        ],

        concepts: [
            {
                title: 'Troposphere - The Weather Kitchen',
                icon: '🌦️',
                points: [
                    '• Contains 75% of atmospheric mass and 99% of water vapor - ALL weather happens here',
                    '• Temperature decreases at 6.5°C per km - called Normal Lapse Rate (NLR)',
                    '• Height varies: 18km at equator (hot air expands), only 8km at poles (cold air contracts)',
                    '• Tropopause = boundary layer - jet aircraft fly here for smooth travel'
                ]
            },
            {
                title: 'Stratosphere - The Ozone Shield',
                icon: '🛡️',
                points: [
                    '• Contains ozone layer (O₃) at 25-30 km - absorbs 97-99% harmful UV radiation',
                    '• Temperature INCREASES with height - called temperature inversion (opposite of normal)',
                    '• Very stable layer - no weather, no turbulence - ideal for aircraft',
                    '• CFCs released from ACs/refrigerators destroy ozone here - causing ozone holes'
                ]
            },
            {
                title: 'Mesosphere - The Meteor Destroyer',
                icon: '☄️',
                points: [
                    '• COLDEST atmospheric layer - temperature drops to -90°C at mesopause',
                    '• Meteors burn up here due to friction - we see them as "shooting stars"',
                    '• Noctilucent clouds form here - highest clouds visible from Earth',
                    '• Least studied layer - too high for balloons, too low for satellites'
                ]
            },
            {
                title: 'Thermosphere - The Aurora Zone',
                icon: '🌌',
                points: [
                    '• Temperature can reach 1500°C but feels cold - very few molecules to transfer heat',
                    '• Aurora Borealis (North) and Aurora Australis (South) occur here - solar wind + magnetic field',
                    '• International Space Station orbits at ~400 km in this layer',
                    '• Ionosphere (60-1000 km) is part of this - reflects radio waves for communication'
                ]
            },
            {
                title: 'Exosphere - The Space Gateway',
                icon: '🛰️',
                points: [
                    '• Outermost layer starting at ~400 km - gradually merges with outer space',
                    '• Extremely low density - atoms can escape Earth\'s gravity into space',
                    '• Weather satellites orbit here in geostationary positions',
                    '• No clear upper boundary - fades into the vacuum of space'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Layered Diagram',
                title: 'Atmospheric Layers with Height',
                description: 'Vertical cross-section showing all 5 layers with heights, temperature curve, aircraft, aurora, meteors, and satellites at correct positions'
            },
            {
                type: 'Temperature Graph',
                title: 'Temperature vs Height',
                description: 'Line graph showing zigzag pattern - decrease in troposphere, increase in stratosphere, decrease in mesosphere, increase in thermosphere'
            }
        ],

        quickFacts: [
            '📍 Atmosphere composition: 78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% CO₂',
            '📍 Troposphere has ALL weather - clouds, rain, storms, cyclones form here',
            '📍 Ozone hole discovered 1985 over Antarctica - Montreal Protocol banned CFCs',
            '📍 Normal Lapse Rate = 6.5°C decrease per 1 km altitude increase',
            '📍 Karman Line at 100 km = official boundary between atmosphere and space',
            '📍 Air pressure reduces by 50% every 5.6 km increase in altitude'
        ],

        traps: [
            {
                wrong: '❌ Temperature always decreases with height',
                right: '✅ Decreases in Troposphere & Mesosphere, INCREASES in Stratosphere & Thermosphere'
            },
            {
                wrong: '❌ Ozone layer is in Troposphere',
                right: '✅ Ozone layer is in STRATOSPHERE at 25-30 km height'
            },
            {
                wrong: '❌ Troposphere has same height everywhere',
                right: '✅ 18 km at equator (hot = expansion), only 8 km at poles (cold = contraction)'
            },
            {
                wrong: '❌ Thermosphere is hottest so it feels very hot',
                right: '✅ High temperature but LOW density = feels cold (few molecules to transfer heat)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🔢 5 Layers: Tropo → Strato → Meso → Thermo → Exo (The Smart Man Takes Exercise)',
                '🌡️ Temperature pattern: ↓ ↑ ↓ ↑ (down-up-down-up)',
                '☁️ Tropo = Weather | Strato = Ozone | Meso = Meteors | Thermo = Aurora',
                '📏 Heights: 0-12-50-80-400 km',
                '⚠️ Stratosphere = Temperature INVERSION (increases with height)'
            ]
        }
    },

    // ========================================
    // TOPIC 2: TEMPERATURE DISTRIBUTION
    // ========================================
    {
        id: 'temperature-distribution',
        title: 'Temperature Distribution',
        category: 'Climatology',
        icon: '🌡️',
        color: '#E74C3C',
        
        theme: {
            primary: '#E74C3C',
            secondary: '#F39C12',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            pattern: 'heatmap'
        },

        stats: {
            'Hottest Recorded': '56.7°C (Death Valley)',
            'Coldest Recorded': '-89.2°C (Antarctica)',
            'Average Earth': '15°C',
            'Lapse Rate': '6.5°C/km'
        },

        mindmap: {
            center: 'Temperature Distribution',
            branches: [
                {
                    name: 'Controls/Factors',
                    color: '#E74C3C',
                    sub: ['Latitude', 'Altitude', 'Distance from sea', 'Ocean currents', 'Winds', 'Slope aspect']
                },
                {
                    name: 'Horizontal Pattern',
                    color: '#3498DB',
                    sub: ['Isotherms', 'Equator hottest', 'Poles coldest', 'Thermal equator']
                },
                {
                    name: 'Vertical Pattern',
                    color: '#27AE60',
                    sub: ['Lapse rate 6.5°C/km', 'Inversion', 'Mountain climates']
                },
                {
                    name: 'Land vs Ocean',
                    color: '#F39C12',
                    sub: ['Land heats faster', 'Ocean moderate', 'Specific heat', 'Albedo']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 "LADOS-WC" for Temperature Controls',
                explanation: 'Latitude - Altitude - Distance from sea - Ocean currents - Slope - Winds - Clouds'
            },
            {
                type: 'Story',
                text: '🏖️ Beach vs Mountain Story',
                explanation: 'Beach boy (ocean) = Calm, steady, slow to anger, slow to cool down\nMountain man (land) = Quick temper, heats up fast, cools down fast!'
            },
            {
                type: 'Number',
                text: '📊 The 6.5 Rule',
                explanation: 'Every 1 km UP = 6.5°C DOWN\nMt Everest (8.8 km) = ~57°C cooler at top!'
            }
        ],

        concepts: [
            {
                title: 'Latitude - The Master Control',
                icon: '🌍',
                points: [
                    '• Equator receives DIRECT sun rays = maximum heating (25-28°C average)',
                    '• Poles receive SLANTED rays = same energy spread over larger area = less heating',
                    '• Temperature generally decreases from equator to poles at ~0.5°C per degree latitude',
                    '• Thermal equator (hottest zone) is NOT at 0° - shifts north in July, south in January'
                ]
            },
            {
                title: 'Altitude - The Height Effect',
                icon: '⛰️',
                points: [
                    '• Temperature DECREASES at 6.5°C per km - Normal Lapse Rate (NLR)',
                    '• Mountains are cold even at equator - Mt Kilimanjaro has snow on equator!',
                    '• Air is thinner at height = fewer molecules = holds less heat',
                    '• Exception: Temperature INVERSION - temperature increases with height in valleys at night'
                ]
            },
            {
                title: 'Distance from Sea - Continentality',
                icon: '🌊',
                points: [
                    '• Coastal areas = MODERATE temperature - small daily/annual range (maritime climate)',
                    '• Interior areas = EXTREME temperature - large daily/annual range (continental climate)',
                    '• Water has HIGH specific heat - absorbs more heat, releases slowly',
                    '• Mumbai (coast) has 5°C annual range vs Delhi (interior) has 20°C annual range'
                ]
            },
            {
                title: 'Ocean Currents - Heat Transporters',
                icon: '🌀',
                points: [
                    '• WARM currents (from equator) WARM nearby coasts - Gulf Stream warms Western Europe',
                    '• COLD currents (from poles) COOL nearby coasts - Labrador Current cools Canada',
                    '• West coasts of continents usually have COLD currents (except in Indian Ocean)',
                    '• East coasts of continents usually have WARM currents'
                ]
            },
            {
                title: 'Temperature Inversion',
                icon: '🔄',
                points: [
                    '• ABNORMAL condition - temperature INCREASES with height instead of decreasing',
                    '• Occurs in: Valley bottoms at night, under anticyclones, polar regions',
                    '• Cold heavy air sinks to valley floor, warm air stays above',
                    '• Causes: Frost in valleys, fog, smog trapped, poor visibility - Delhi winter smog!'
                ]
            }
        ],

        diagrams: [
            {
                type: 'World Map',
                title: 'Global Temperature Distribution',
                description: 'Map with isotherms (lines of equal temperature) showing hot equatorial belt and cold polar zones'
            },
            {
                type: 'Graph',
                title: 'Land vs Water Heating',
                description: 'Two curves showing land heats/cools rapidly vs ocean heats/cools slowly over 24 hours'
            }
        ],

        quickFacts: [
            '📍 Isotherms = lines joining places with SAME temperature',
            '📍 Isotherms are irregular over land, smooth over oceans',
            '📍 Northern Hemisphere is warmer than Southern (more land mass)',
            '📍 Hottest: Death Valley, USA (56.7°C) | Coldest: Vostok, Antarctica (-89.2°C)',
            '📍 Albedo effect: Snow reflects 80-90% sunlight - stays cold',
            '📍 Annual range: LEAST at equator, MAXIMUM in continental interiors (Siberia)'
        ],

        traps: [
            {
                wrong: '❌ Hottest point on Earth is exactly at Equator (0°)',
                right: '✅ Thermal equator shifts - north of 0° in July, south in January'
            },
            {
                wrong: '❌ Temperature always decreases with altitude',
                right: '✅ Normally yes, but INVERSION = temperature increases with height'
            },
            {
                wrong: '❌ Oceans are always colder than land',
                right: '✅ Oceans are WARMER in winter, COOLER in summer (moderate temperature)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🌍 Latitude = King factor (equator hot, poles cold)',
                '⛰️ Altitude: -6.5°C per km up (Normal Lapse Rate)',
                '🌊 Water = Slow & Steady; Land = Quick & Extreme',
                '🔄 Inversion = Temperature increases with height (abnormal)',
                '📏 LADOS-WC: Latitude-Altitude-Distance-Ocean-Slope-Winds-Clouds'
            ]
        }
    },

    // ========================================
    // TOPIC 3: PRESSURE BELTS
    // ========================================
    {
        id: 'pressure-belts',
        title: 'Atmospheric Pressure Belts',
        category: 'Climatology',
        icon: '🌀',
        color: '#3498DB',
        
        theme: {
            primary: '#3498DB',
            secondary: '#2ECC71',
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            pattern: 'pressure-zones'
        },

        stats: {
            'Pressure Belts': '7 Major',
            'High Pressure': '3 Belts',
            'Low Pressure': '4 Belts',
            'Standard Pressure': '1013.25 mb'
        },

        mindmap: {
            center: 'Pressure Belts',
            branches: [
                {
                    name: 'Equatorial Low (0-5°)',
                    color: '#E74C3C',
                    sub: ['Doldrums', 'ITCZ', 'Rising air', 'Heavy rain']
                },
                {
                    name: 'Sub-Tropical High (25-35°)',
                    color: '#3498DB',
                    sub: ['Horse Latitudes', 'Descending air', 'Deserts form']
                },
                {
                    name: 'Sub-Polar Low (60-65°)',
                    color: '#E74C3C',
                    sub: ['Polar Front', 'Cyclones form', 'Stormy']
                },
                {
                    name: 'Polar High (90°)',
                    color: '#3498DB',
                    sub: ['Very cold', 'Descending air', 'Dry']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 "Every Student Should Pass"',
                explanation: 'Equatorial Low → Sub-tropical High → Sub-polar Low → Polar High'
            },
            {
                type: 'Pattern',
                text: '🔄 The LOW-HIGH Pattern',
                explanation: 'From equator to pole: LOW → HIGH → LOW → HIGH\n0° = L, 30° = H, 60° = L, 90° = H'
            },
            {
                type: 'Story',
                text: '🐴 Horse Latitudes Story',
                explanation: 'Spanish ships carrying horses got stuck at 30° - no winds! Threw horses overboard to save water. Hence "Horse Latitudes"!'
            }
        ],

        concepts: [
            {
                title: 'Equatorial Low Pressure (ITCZ)',
                icon: '🌧️',
                points: [
                    '• Located 0-5° N & S - shifts with seasons following the sun',
                    '• Called DOLDRUMS - calm winds, sailors got stuck here for weeks',
                    '• ITCZ = Inter-Tropical Convergence Zone - trade winds meet here',
                    '• Intense heating → hot air rises → low pressure → heavy convectional rainfall'
                ]
            },
            {
                title: 'Sub-Tropical High Pressure (25-35°)',
                icon: '🏜️',
                points: [
                    '• Called HORSE LATITUDES - calm, descending air, clear skies',
                    '• Formed by DYNAMIC reasons - air from equator descends here after cooling',
                    '• World\'s major HOT DESERTS located here: Sahara, Arabian, Kalahari, Thar, Australian',
                    '• Air descends → compresses → heats up → no rain → deserts form'
                ]
            },
            {
                title: 'Sub-Polar Low Pressure (60-65°)',
                icon: '🌪️',
                points: [
                    '• Called POLAR FRONT - warm westerlies meet cold polar winds',
                    '• Convergence of different air masses → cyclones form → stormy weather',
                    '• Formed by DYNAMIC reasons - rotation of Earth causes convergence',
                    '• Variable, unpredictable weather - important for Europe and North America'
                ]
            },
            {
                title: 'Polar High Pressure (90°)',
                icon: '❄️',
                points: [
                    '• Located at North and South poles - extremely cold regions',
                    '• Formed by THERMAL reasons - intense cold → air descends → high pressure',
                    '• Cold, dry, stable conditions - minimal precipitation (polar deserts)',
                    '• Source of cold polar easterly winds blowing toward 60°'
                ]
            },
            {
                title: 'Thermal vs Dynamic Belts',
                icon: '⚡',
                points: [
                    '• THERMAL belts formed by temperature: Equatorial Low (hot) & Polar High (cold)',
                    '• DYNAMIC belts formed by Earth\'s rotation: Sub-tropical High & Sub-polar Low',
                    '• Thermal belts are PRIMARY - formed first due to heating/cooling',
                    '• Dynamic belts are SECONDARY - formed due to air circulation patterns'
                ]
            },
            {
                title: 'Seasonal Shifting',
                icon: '🔄',
                points: [
                    '• All pressure belts shift NORTH in June (Northern summer) following the sun',
                    '• All pressure belts shift SOUTH in December (Southern summer)',
                    '• ITCZ shifts most dramatically - up to 20-25° from equator',
                    '• This shifting causes MONSOONS in tropical regions (India, SE Asia, Africa)'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Globe Diagram',
                title: 'World Pressure Belts',
                description: 'Earth showing 7 belts at 0°, 30°N, 30°S, 60°N, 60°S, 90°N, 90°S with L and H marked'
            },
            {
                type: 'Vertical Section',
                title: 'Air Circulation Cells',
                description: 'Hadley Cell (0-30°), Ferrel Cell (30-60°), Polar Cell (60-90°) with rising/descending air'
            }
        ],

        quickFacts: [
            '📍 Standard atmospheric pressure at sea level = 1013.25 millibars (mb)',
            '📍 LOW pressure = Rising air = Clouds = Rain ☔',
            '📍 HIGH pressure = Descending air = Clear sky = No rain ☀️',
            '📍 All major deserts at 30° N & S (Sub-tropical high belt)',
            '📍 ITCZ shifts to 25°N over India in July → causes SW Monsoon',
            '📍 Horse Latitudes = 30° = calm winds (descending air)'
        ],

        traps: [
            {
                wrong: '❌ Equatorial region has high pressure due to heat',
                right: '✅ Equatorial region has LOW pressure - hot air rises!'
            },
            {
                wrong: '❌ All pressure belts are thermally formed',
                right: '✅ Only Equatorial Low & Polar High are thermal; others are dynamic'
            },
            {
                wrong: '❌ ITCZ stays fixed at equator',
                right: '✅ ITCZ shifts north (June) and south (December) with seasons'
            },
            {
                wrong: '❌ High pressure means more rainfall',
                right: '✅ HIGH pressure = Descending air = NO rainfall'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🔢 7 Belts: L-H-L-H pattern (0°-30°-60°-90°)',
                '🎯 Every Student Should Pass = Eq.Low → Sub.High → Sub.Low → Polar.High',
                '☔ LOW = Rain (rising air) | ☀️ HIGH = Dry (descending air)',
                '🏜️ Deserts at 30° (Sub-tropical High)',
                '🔄 ITCZ shifts → causes Monsoons'
            ]
        }
    },

    // ========================================
    // TOPIC 4: WIND SYSTEMS
    // ========================================
    {
        id: 'wind-systems',
        title: 'Planetary Wind Systems',
        category: 'Climatology',
        icon: '💨',
        color: '#16A085',
        
        theme: {
            primary: '#16A085',
            secondary: '#27AE60',
            background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            pattern: 'wind-arrows'
        },

        stats: {
            'Permanent Winds': '3 Types',
            'Periodic Winds': '2 Types',
            'Local Winds': '50+ Types',
            'Coriolis Effect': 'Deflects all winds'
        },

        mindmap: {
            center: 'Wind Systems',
            branches: [
                {
                    name: 'Permanent Winds',
                    color: '#E74C3C',
                    sub: ['Trade Winds (0-30°)', 'Westerlies (30-60°)', 'Polar Easterlies (60-90°)']
                },
                {
                    name: 'Periodic Winds',
                    color: '#3498DB',
                    sub: ['Monsoons (seasonal)', 'Land/Sea Breeze (daily)', 'Mountain/Valley Breeze']
                },
                {
                    name: 'Local Winds',
                    color: '#F39C12',
                    sub: ['Loo (India)', 'Chinook (USA)', 'Foehn (Alps)', 'Mistral (France)']
                },
                {
                    name: 'Coriolis Effect',
                    color: '#9B59B6',
                    sub: ['Right in N.Hemisphere', 'Left in S.Hemisphere', 'Zero at Equator']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 "TWP" for Permanent Winds',
                explanation: 'Trade winds → Westerlies → Polar easterlies (Equator to Poles)'
            },
            {
                type: 'Direction Trick',
                text: '➡️ Easterly vs Westerly',
                explanation: 'Winds named by SOURCE!\nEasterly = FROM East (blowing westward)\nWesterly = FROM West (blowing eastward)'
            },
            {
                type: 'Story',
                text: '⛵ Trade Wind Story',
                explanation: 'Reliable Trade Winds helped merchant ships sail from Europe to Americas. Columbus used them! That\'s why called "Trade" winds!'
            },
            {
                type: 'Coriolis Rule',
                text: '🔄 Right-Left Rule',
                explanation: 'Northern Hemisphere = Deflection to RIGHT\nSouthern Hemisphere = Deflection to LEFT\nThink: "North-Right, South-Left"'
            }
        ],

        concepts: [
            {
                title: 'Trade Winds - The Reliable Traders',
                icon: '⛵',
                points: [
                    '• Blow FROM Sub-tropical High (30°) TO Equatorial Low (0°) - most reliable winds',
                    '• Direction: NE Trade Winds in N.Hemisphere, SE Trade Winds in S.Hemisphere',
                    '• Helped sailing ships trade between continents - hence the name "Trade" winds',
                    '• Where they meet at equator = ITCZ (Inter-Tropical Convergence Zone)'
                ]
            },
            {
                title: 'Westerlies - The Storm Bringers',
                icon: '🌩️',
                points: [
                    '• Blow FROM Sub-tropical High (30°) TO Sub-polar Low (60°)',
                    '• Direction: SW in N.Hemisphere, NW in S.Hemisphere (Coriolis deflection)',
                    '• Strongest at 40-50°S latitude - called "Roaring Forties" (no land obstruction)',
                    '• Bring cyclonic storms and rainfall to Western Europe and temperate regions'
                ]
            },
            {
                title: 'Polar Easterlies - The Cold Winds',
                icon: '❄️',
                points: [
                    '• Blow FROM Polar High (90°) TO Sub-polar Low (60°)',
                    '• Direction: NE in N.Hemisphere, SE in S.Hemisphere',
                    '• Cold, dry, weak and irregular winds compared to Trade Winds',
                    '• Where they meet Westerlies = Polar Front (cyclones form)'
                ]
            },
            {
                title: 'Monsoons - Seasonal Reversal',
                icon: '🌧️',
                points: [
                    '• REVERSE direction seasonally - most important for India (40% world depends on monsoons)',
                    '• Summer Monsoon: Blows from OCEAN to LAND - brings rainfall (SW Monsoon in India)',
                    '• Winter Monsoon: Blows from LAND to OCEAN - dry season (NE Monsoon)',
                    '• Caused by differential heating of land and ocean + ITCZ shifting'
                ]
            },
            {
                title: 'Land & Sea Breeze - Daily Cycle',
                icon: '🏖️',
                points: [
                    '• SEA BREEZE (Daytime): Sea → Land (sea is cooler, high pressure over sea)',
                    '• LAND BREEZE (Nighttime): Land → Sea (land cools faster, high pressure over land)',
                    '• Extends 30-50 km inland - gives relief in coastal areas',
                    '• Daily reversal based on differential heating of land and water'
                ]
            },
            {
                title: 'Coriolis Effect',
                icon: '🌀',
                points: [
                    '• Earth\'s rotation deflects moving air (and water) from straight path',
                    '• Northern Hemisphere: Deflection to the RIGHT of motion',
                    '• Southern Hemisphere: Deflection to the LEFT of motion',
                    '• Maximum at poles, ZERO at equator (no deflection at equator)'
                ]
            },
            {
                title: 'Famous Local Winds',
                icon: '💨',
                points: [
                    '• LOO: Hot, dry, dusty wind in North India (May-June) - can cause heat stroke',
                    '• CHINOOK: Warm wind in Rocky Mountains (USA/Canada) - melts snow rapidly - "Snow Eater"',
                    '• FOEHN: Warm, dry wind in Alps (Europe) - helps ripen grapes',
                    '• MISTRAL: Cold wind in Southern France - causes frost damage to crops',
                    '• SIROCCO: Hot Saharan wind affecting Mediterranean - carries dust'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Global Map',
                title: 'Planetary Wind Systems',
                description: 'World map showing Trade Winds, Westerlies, and Polar Easterlies with arrows showing direction and Coriolis deflection'
            },
            {
                type: 'Daily Cycle',
                title: 'Land & Sea Breeze',
                description: 'Two diagrams showing day (sea breeze: sea to land) and night (land breeze: land to sea)'
            }
        ],

        quickFacts: [
            '📍 Trade Winds: FROM 30° TO 0° (most reliable, helped Columbus!)',
            '📍 Westerlies: FROM 30° TO 60° (Roaring Forties at 40-50°S)',
            '📍 Winds named by SOURCE direction (Easterly = FROM East)',
            '📍 Coriolis: Right in North, Left in South, Zero at Equator',
            '📍 Monsoon = Arabic "Mausim" meaning Season',
            '📍 Indian SW Monsoon brings 75-80% of annual rainfall',
            '📍 Chinook can raise temperature by 20°C in few hours!'
        ],

        traps: [
            {
                wrong: '❌ Easterlies blow TOWARDS East',
                right: '✅ Easterlies blow FROM East (named by source, not destination!)'
            },
            {
                wrong: '❌ Trade winds blow from equator to 30°',
                right: '✅ Trade winds blow FROM 30° TO equator (high to low pressure)'
            },
            {
                wrong: '❌ Coriolis effect is strongest at equator',
                right: '✅ Coriolis is ZERO at equator, MAXIMUM at poles'
            },
            {
                wrong: '❌ Land breeze occurs during daytime',
                right: '✅ LAND breeze = Night | SEA breeze = Day'
            },
            {
                wrong: '❌ Monsoons are permanent winds',
                right: '✅ Monsoons are PERIODIC/SEASONAL winds (reverse direction)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '💨 TWP: Trade (0-30°) → Westerlies (30-60°) → Polar Easterlies (60-90°)',
                '🔄 Coriolis: Right in North, Left in South, Zero at Equator',
                '📍 Named by SOURCE: Easterly = FROM East, Westerly = FROM West',
                '🌧️ Monsoon = Seasonal reversal; Sea Breeze = Daily (daytime)',
                '⛵ Trade winds = Most reliable; Roaring Forties = 40-50°S'
            ]
        }
    }

];

// Export check for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = climatologyTopics1;
}
