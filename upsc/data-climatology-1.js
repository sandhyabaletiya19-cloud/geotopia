// ☁️ DATA-CLIMATOLOGY-1.JS
// Topics: Atmosphere Structure, Temperature Distribution, Pressure Belts, Wind Systems

const climatologyData1 = [
    {
        id: 'atmosphere-structure',
        title: '🌍 Structure of Atmosphere',
        category: 'Climatology',
        icon: '☁️',
        color: '#4A90E2',
        
        // Background theme
        theme: {
            primary: '#4A90E2',
            secondary: '#87CEEB',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            pattern: 'clouds'
        },

        // Quick Stats
        stats: {
            'Total Height': '10,000 km',
            'Layers': '5 Major',
            'Breathable Zone': 'Up to 5 km',
            'Weather Zone': 'Troposphere'
        },

        // 1️⃣ VISUAL MIND MAP
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

        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 **"The Smart Man Takes Exercise"**',
                explanation: 'Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere'
            },
            {
                type: 'Story Method',
                text: '🏔️ **The Temperature Rollercoaster**',
                explanation: 'Tropos: Gets COLD going up (normal)\nStratos: Gets HOT going up (ozone party!)\nMesos: Gets COLD again (coldest layer)\nThermos: Gets SUPER HOT (think thermos bottle!)'
            },
            {
                type: 'Visual Hook',
                text: '📏 **Height Trick**',
                explanation: '0-12-50-80-400 (Remember: 12, 50, 80 are nice round numbers)'
            }
        ],

        // 3️⃣ MICRO CONCEPT BLOCKS
        concepts: [
            {
                title: 'Troposphere - The Weather Kitchen',
                icon: '🌦️',
                points: [
                    '• Contains 75% of atmospheric mass and 99% of water vapor',
                    '• Temperature decreases at 6.5°C per km (Normal Lapse Rate)',
                    '• All weather phenomena (clouds, rain, storms) happen here',
                    '• Height varies: 18km at equator, 8km at poles (heat expansion)'
                ]
            },
            {
                title: 'Stratosphere - The Ozone Shield',
                icon: '🛡️',
                points: [
                    '• Contains ozone layer (O₃) which absorbs UV radiation',
                    '• Temperature INCREASES with height (temperature inversion)',
                    '• Ideal for jet aircraft - stable, no weather turbulence',
                    '• CFCs destroy ozone here causing ozone holes'
                ]
            },
            {
                title: 'Mesosphere - The Meteor Destroyer',
                icon: '☄️',
                points: [
                    '• Coldest atmospheric layer (-90°C at top)',
                    '• Meteors burn up here due to friction with air molecules',
                    '• Noctilucent clouds form here (highest clouds)',
                    '• Least studied layer - too high for balloons, too low for satellites'
                ]
            },
            {
                title: 'Thermosphere - The Aurora Zone',
                icon: '🌌',
                points: [
                    '• Temperature can reach 1500°C but feels cold (low density)',
                    '• Aurora Borealis/Australis (Northern/Southern Lights) occur here',
                    '• International Space Station orbits here (~400 km)',
                    '• Radio waves are reflected back by ionosphere (part of thermosphere)'
                ]
            },
            {
                title: 'Exosphere - The Space Gateway',
                icon: '🛰️',
                points: [
                    '• Outermost layer merging with outer space',
                    '• Extremely low density - atoms escape to space',
                    '• Satellites orbit in this layer',
                    '• No clear boundary - gradually fades into space'
                ]
            }
        ],

        // 4️⃣ VISUAL DIAGRAM IDEAS
        diagrams: [
            {
                type: 'Layered Diagram',
                title: 'Atmospheric Layers with Height',
                description: 'Vertical cross-section showing all 5 layers with exact heights, temperature curve, and key features (aircraft, aurora, meteors, satellites)'
            },
            {
                type: 'Temperature Graph',
                title: 'Temperature vs Height',
                description: 'Line graph showing temperature changes - decreasing in troposphere, increasing in stratosphere, decreasing in mesosphere, increasing in thermosphere'
            },
            {
                type: 'Comparison Table',
                title: 'Layer-wise Features',
                description: 'Table comparing all layers: Height, Temperature trend, Density, Special features, Importance'
            }
        ],

        // 5️⃣ QUICK FACTS (UPSC Important)
        quickFacts: [
            '📍 78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% CO₂',
            '📍 Troposphere contains ALL weather - clouds, rain, storms',
            '📍 Ozone layer at 25-30 km absorbs 97-99% UV radiation',
            '📍 Tropopause height: 18km (equator) vs 8km (poles)',
            '📍 Mesopause is coldest point in atmosphere (-90°C)',
            '📍 Ionosphere (part of thermosphere) reflects radio waves',
            '📍 Karman Line (100 km) - official boundary of space',
            '📍 Air pressure decreases by 50% every 5.6 km'
        ],

        // 6️⃣ COMMON UPSC TRAPS
        traps: [
            {
                wrong: '❌ Temperature always decreases with height',
                right: '✅ Only in Troposphere & Mesosphere. INCREASES in Stratosphere & Thermosphere'
            },
            {
                wrong: '❌ Ozone layer is in Troposphere',
                right: '✅ Ozone layer is in STRATOSPHERE (25-30 km)'
            },
            {
                wrong: '❌ All atmospheric layers have same height everywhere',
                right: '✅ Troposphere is TALLER at equator (18km) than poles (8km) due to heat'
            },
            {
                wrong: '❌ Thermosphere is hottest so it feels hot',
                right: '✅ High temperature but LOW DENSITY = feels cold (few molecules to transfer heat)'
            },
            {
                wrong: '❌ Mesosphere is where auroras occur',
                right: '✅ Auroras occur in THERMOSPHERE (not mesosphere)'
            }
        ],

        // 7️⃣ SUPER FAST REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🔢 5 Layers: Tropo-Strato-Meso-Thermo-Exo (The Smart Man Takes Exercise)',
                '🌡️ Temp: ↓↑↓↑ (down-up-down-up pattern)',
                '☁️ Tropo = Weather | Strato = Ozone | Meso = Meteors | Thermo = Aurora',
                '📏 Heights: 12-50-80-400 km boundaries',
                '⚠️ Temperature INVERSION in Stratosphere (unique!)'
            ]
        }
    },

    {
        id: 'temperature-distribution',
        title: '🌡️ Temperature Distribution on Earth',
        category: 'Climatology',
        icon: '🔥',
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
            'Average Earth Temp': '15°C',
            'Equator Temp': '25-28°C'
        },

        mindmap: {
            center: 'Temperature Distribution',
            branches: [
                {
                    name: 'Controls/Factors',
                    color: '#E74C3C',
                    sub: ['Latitude (most important)', 'Altitude', 'Distance from sea', 'Ocean currents', 'Winds', 'Slope & Aspect']
                },
                {
                    name: 'Horizontal Distribution',
                    color: '#3498DB',
                    sub: ['Isotherms (lines)', 'Equator = Hottest', 'Poles = Coldest', 'Thermal equator (ITCZ)']
                },
                {
                    name: 'Vertical Distribution',
                    color: '#27AE60',
                    sub: ['Normal lapse rate', '6.5°C per km', 'Temperature inversion', 'Mountain climates']
                },
                {
                    name: 'Land vs Ocean',
                    color: '#F39C12',
                    sub: ['Land heats faster', 'Water heats slowly', 'Specific heat capacity', 'Albedo differences']
                },
                {
                    name: 'Seasonal Variation',
                    color: '#9B59B6',
                    sub: ['Axial tilt (23.5°)', 'Revolution around sun', 'Solstices & Equinoxes', 'Angle of sun rays']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 **"LADOS WC"** for Temperature Controls',
                explanation: 'Latitude - Altitude - Distance from sea - Ocean currents - Slope - Wind - Clouds'
            },
            {
                type: 'Story Method',
                text: '🏖️ **Beach vs Mountain Story**',
                explanation: 'Beach boy (sea) = Calm, steady temperature, slow to anger, slow to cool\nMountain man (land) = Quick temper, heats up fast, cools down fast!'
            },
            {
                type: 'Number Trick',
                text: '📊 **The 6.5 Rule**',
                explanation: 'Every 1 km UP = 6.5°C DOWN (Normal Lapse Rate)\nEasy: Climb Mt. Everest (8.8km) = 57°C cooler at top!'
            }
        ],

        concepts: [
            {
                title: 'Latitude - The Master Control',
                icon: '🌍',
                points: [
                    '• Equator receives direct/vertical sun rays = maximum heating (25-28°C)',
                    '• Poles receive slanted/oblique rays = minimum heating (-40 to -50°C)',
                    '• Sun\'s rays spread over larger area at poles (same energy, larger area)',
                    '• Insolation (incoming solar radiation) decreases from equator to poles'
                ]
            },
            {
                title: 'Altitude - The Height Effect',
                icon: '⛰️',
                points: [
                    '• Temperature DECREASES with altitude at 6.5°C/km (Normal Lapse Rate)',
                    '• Mountains are colder even at equator (Mt. Kilimanjaro has snow!)',
                    '• Air is thinner at height = holds less heat',
                    '• Exception: Temperature INVERSION (temperature increases with height in valleys during winter nights)'
                ]
            },
            {
                title: 'Distance from Sea - Maritime vs Continental',
                icon: '🌊',
                points: [
                    '• Oceans: Moderate temperature, small daily/annual range (specific heat capacity of water)',
                    '• Land interiors: Extreme temperatures, large daily/annual range (continental climate)',
                    '• Coastal areas: Mild climate, sea breeze moderates temperature',
                    '• Example: Mumbai (coastal) vs Delhi (interior) temperature range'
                ]
            },
            {
                title: 'Ocean Currents - The Heat Conveyor Belt',
                icon: '🌊',
                points: [
                    '• Warm currents (from equator) WARM nearby coasts (Gulf Stream warms Western Europe)',
                    '• Cold currents (from poles) COOL nearby coasts (Labrador Current cools NE Canada)',
                    '• West coasts of continents = usually cold currents',
                    '• East coasts of continents = usually warm currents'
                ]
            },
            {
                title: 'Land vs Water Heating',
                icon: '🏝️',
                points: [
                    '• Land: Heats quickly, cools quickly (low specific heat, opaque, no mobility)',
                    '• Water: Heats slowly, cools slowly (high specific heat, transparent, currents distribute heat)',
                    '• Land has HIGHER annual temperature range than oceans',
                    '• Northern Hemisphere has more extreme seasons (more landmass)'
                ]
            },
            {
                title: 'Temperature Inversion - The Upside Down',
                icon: '🔄',
                points: [
                    '• Normally: Temperature DECREASES with height',
                    '• Inversion: Temperature INCREASES with height (opposite/abnormal)',
                    '• Occurs: Winter nights in valleys, under anticyclones, near polar regions',
                    '• Effects: Pollution trapped, frost in valleys, poor visibility'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Global Heat Map',
                title: 'World Temperature Distribution',
                description: 'Map with isotherms (lines joining equal temperature) showing hot equatorial belt, temperate mid-latitudes, and cold polar regions'
            },
            {
                type: 'Comparative Diagram',
                title: 'Land vs Water Heating Curves',
                description: 'Graph showing land heats/cools rapidly (steep curve) vs water heats/cools slowly (gentle curve) over 24 hours'
            },
            {
                type: 'Altitude Temperature Graph',
                title: 'Normal Lapse Rate',
                description: 'Graph showing temperature decreasing 6.5°C per km with altitude, with example of mountain climates'
            },
            {
                type: 'Seasonal Diagram',
                title: 'Earth\'s Tilt & Seasons',
                description: 'Earth\'s 23.5° tilt causing direct rays at Tropic of Cancer (June) and Tropic of Capricorn (December)'
            }
        ],

        quickFacts: [
            '📍 Thermal Equator (hottest zone) shifts N-S with seasons, NOT fixed at geographical equator',
            '📍 Isotherms = lines joining places with same temperature',
            '📍 Isotherms are irregular over land, smooth over oceans',
            '📍 Northern Hemisphere is warmer than Southern (more land)',
            '📍 Highest temperature: Death Valley, USA (56.7°C)',
            '📍 Lowest temperature: Vostok, Antarctica (-89.2°C)',
            '📍 Albedo effect: Snow reflects 80-90% sunlight (stays cold)',
            '📍 Annual temperature range: Least at equator, maximum in continental interiors'
        ],

        traps: [
            {
                wrong: '❌ Hottest point is exactly at Equator',
                right: '✅ Thermal Equator (ITCZ) shifts between Tropics with seasons'
            },
            {
                wrong: '❌ Temperature always decreases with altitude',
                right: '✅ Normally yes, but INVERSION occurs (increases with height in special conditions)'
            },
            {
                wrong: '❌ Oceans are colder than land',
                right: '✅ Oceans are WARMER in winter, COOLER in summer (moderate temperature)'
            },
            {
                wrong: '❌ Latitude and altitude have same effect',
                right: '✅ Both cool, but mechanisms differ - latitude = slanted rays; altitude = thin air'
            },
            {
                wrong: '❌ West coasts are warmer than east coasts',
                right: '✅ Depends on ocean currents! Generally, west = cold current, east = warm current'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🌍 Latitude = King control (equator hot, poles cold)',
                '⛰️ Altitude: -6.5°C per km (Normal Lapse Rate)',
                '🌊 Water = Slow & Steady; Land = Quick & Extreme',
                '🔄 Inversion = Temperature increases with height (abnormal)',
                '📏 LADOS WC: Latitude-Altitude-Distance-Ocean-Slope-Wind-Clouds'
            ]
        }
    },

    {
        id: 'pressure-belts',
        title: '🌀 Atmospheric Pressure Belts',
        category: 'Climatology',
        icon: '🔵',
        color: '#3498DB',
        
        theme: {
            primary: '#3498DB',
            secondary: '#2ECC71',
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            pattern: 'pressure-zones'
        },

        stats: {
            'Pressure Belts': '7 Major',
            'High Pressure Belts': '3',
            'Low Pressure Belts': '4',
            'Standard Pressure': '1013.25 mb'
        },

        mindmap: {
            center: 'Pressure Belts',
            branches: [
                {
                    name: 'Equatorial Low (0-5°)',
                    color: '#E74C3C',
                    sub: ['Doldrums', 'ITCZ', 'Rising air', 'Calm winds', 'Heavy rainfall']
                },
                {
                    name: 'Sub-Tropical High (25-35°)',
                    color: '#3498DB',
                    sub: ['Horse Latitudes', 'Descending air', 'Calm winds', 'Deserts form', 'Both hemispheres']
                },
                {
                    name: 'Sub-Polar Low (60-65°)',
                    color: '#E74C3C',
                    sub: ['Polar front', 'Convergence zone', 'Stormy weather', 'Cyclonic activity']
                },
                {
                    name: 'Polar High (90°)',
                    color: '#3498DB',
                    sub: ['Very cold', 'Descending air', 'High pressure', 'Dry conditions']
                },
                {
                    name: 'Formation Causes',
                    color: '#F39C12',
                    sub: ['Thermal factors', 'Dynamic factors', 'Rotation of Earth', 'Differential heating']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 **"Every Student Should Pass"** for Pressure Belts',
                explanation: 'Equatorial Low → Sub-tropical High → Sub-polar Low → Polar High'
            },
            {
                type: 'Pattern Memory',
                text: '🔄 **The Pressure Sandwich**',
                explanation: 'LOW-HIGH-LOW-HIGH from Equator to Pole\n0° = LOW, 30° = HIGH, 60° = LOW, 90° = HIGH'
            },
            {
                type: 'Story Method',
                text: '🐴 **Horse Latitudes Story**',
                explanation: 'Spanish ships carrying horses to Americas got stuck in calm winds at 30°. No wind = No movement. Threw horses overboard to lighten ship. Hence "Horse Latitudes"!'
            },
            {
                type: 'Visual Trick',
                text: '☝️👇 **Up & Down Pattern**',
                explanation: 'LOW = Air RISES ☝️ (light, goes up)\nHIGH = Air DESCENDS 👇 (heavy, comes down)'
            }
        },

        concepts: [
            {
                title: 'Equatorial Low Pressure Belt (ITCZ)',
                icon: '🌧️',
                points: [
                    '• Located 0-5° N & S of equator (shifts with seasons)',
                    '• Called "Doldrums" - calm, light winds, no sailor\'s friend',
                    '• Formed due to intense heating → hot air rises → low pressure',
                    '• Characteristics: Heavy convectional rainfall, thunderstorms, high humidity'
                ]
            },
            {
                title: 'Sub-Tropical High Pressure Belt',
                icon: '🏜️',
                points: [
                    '• Located at 25-35° N & S latitudes (both hemispheres)',
                    '• Called "Horse Latitudes" - calm winds, descending air',
                    '• Formed by DYNAMIC reasons - air from equator descends here after rising',
                    '• World\'s major deserts located here: Sahara, Arabian, Kalahari, Australian'
                ]
            },
            {
                title: 'Sub-Polar Low Pressure Belt',
                icon: '🌪️',
                points: [
                    '• Located at 60-65° N & S latitudes',
                    '• Called "Polar Front" - where warm & cold air masses meet',
                    '• Formed by convergence of warm westerlies and cold polar winds',
                    '• Characteristics: Stormy weather, cyclonic activity, variable winds'
                ]
            },
            {
                title: 'Polar High Pressure Belt',
                icon: '❄️',
                points: [
                    '• Located at 90° N & S (North & South poles)',
                    '• Formed due to extreme cold → cold air descends → high pressure',
                    '• Characteristics: Very cold, dry, descending air, calm conditions',
                    '• Polar easterlies blow FROM poles TO sub-polar low belt'
                ]
            },
            {
                title: 'Thermal vs Dynamic Formation',
                icon: '🔥',
                points: [
                    '• THERMAL belts: Formed due to temperature (Equatorial Low & Polar High)',
                    '• DYNAMIC belts: Formed due to Earth\'s rotation & air circulation (Sub-tropical High & Sub-polar Low)',
                    '• Sub-tropical high is MOST IMPORTANT dynamic belt',
                    '• Understanding this helps explain desert formation and wind systems'
                ]
            },
            {
                title: 'Seasonal Shifting of Belts',
                icon: '🔄',
                points: [
                    '• Pressure belts shift NORTH in June (Northern Summer)',
                    '• Pressure belts shift SOUTH in December (Southern Summer)',
                    '• ITCZ shifts most (up to 20-25° from equator)',
                    '• This shifting causes monsoons in tropical regions (India, SE Asia)'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Global Pressure Map',
                title: 'World Pressure Belts',
                description: 'Circular diagram showing Earth with 7 pressure belts marked at correct latitudes (0°, 30°N, 30°S, 60°N, 60°S, 90°N, 90°S) with H and L labels'
            },
            {
                type: 'Vertical Circulation',
                title: 'Air Circulation Cells',
                description: 'Cross-section showing Hadley Cell (0-30°), Ferrel Cell (30-60°), Polar Cell (60-90°) with rising and descending air marked'
            },
            {
                type: 'Seasonal Shift',
                title: 'ITCZ Migration',
                description: 'Map showing ITCZ position in January vs July, demonstrating northward shift in summer'
            }
        ],

        quickFacts: [
            '📍 Standard atmospheric pressure at sea level = 1013.25 millibars (mb)',
            '📍 Pressure DECREASES with altitude (50% reduction at 5.6 km)',
            '📍 LOW pressure = Rising air = Clouds = Rain (bad weather)',
            '📍 HIGH pressure = Descending air = Clear skies = Dry (good weather)',
            '📍 All major deserts (Sahara, Arabian, Kalahari) at 30° latitudes',
            '📍 ITCZ shifts 20-25° north in July, causes Indian monsoon',
            '📍 Sub-polar low = meeting point of warm & cold winds = storms',
            '📍 Horse Latitudes = 30° = calm winds frustrated ancient sailors'
        ],

        traps: [
            {
                wrong: '❌ Equatorial region has high pressure',
                right: '✅ Equatorial region has LOW pressure (hot air rises)'
            },
            {
                wrong: '❌ All pressure belts are thermally formed',
                right: '✅ Equatorial Low & Polar High = Thermal; Sub-tropical High & Sub-polar Low = Dynamic'
            },
            {
                wrong: '❌ ITCZ is always at the equator',
                right: '✅ ITCZ SHIFTS north (June-Sept) and south (Dec-March) with seasons'
            },
            {
                wrong: '❌ High pressure means good rainfall',
                right: '✅ HIGH pressure = Descending air = NO RAIN = Clear skies (opposite!)'
            },
            {
                wrong: '❌ Sub-tropical high and sub-polar low are at same latitude',
                right: '✅ Sub-tropical high = 30°; Sub-polar low = 60° (different!)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '🔢 7 Belts: LOW-HIGH-LOW-HIGH pattern (0°-30°-60°-90°)',
                '🌍 Every Student Should Pass = Eq.Low - Sub.High - Sub.Low - Polar High',
                '🌧️ LOW = Rain (rising air); HIGH = Dry (descending air)',
                '🏜️ Deserts at 30° (Sub-tropical High)',
                '🔄 ITCZ shifts N-S causing monsoons'
            ]
        }
    },

    {
        id: 'wind-systems',
        title: '💨 Planetary Wind Systems',
        category: 'Climatology',
        icon: '🌬️',
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
            'Coriolis Effect': 'Deflects winds'
        },

        mindmap: {
            center: 'Wind Systems',
            branches: [
                {
                    name: 'Permanent/Planetary Winds',
                    color: '#E74C3C',
                    sub: ['Trade Winds', 'Westerlies', 'Polar Easterlies', 'Blow year-round', 'Same direction']
                },
                {
                    name: 'Periodic/Seasonal Winds',
                    color: '#3498DB',
                    sub: ['Monsoons', 'Land & Sea Breeze', 'Mountain & Valley Breeze', 'Change direction', 'Seasonal/Daily']
                },
                {
                    name: 'Local Winds',
                    color: '#F39C12',
                    sub: ['Loo (India)', 'Chinook (USA)', 'Foehn (Alps)', 'Mistral (France)', 'Sirocco (Sahara)']
                },
                {
                    name: 'Coriolis Effect',
                    color: '#9B59B6',
                    sub: ['Earth\'s rotation', 'Deflects winds', 'Right in N.Hemisphere', 'Left in S.Hemisphere']
                },
                {
                    name: 'Ferrel\'s Law',
                    color: '#16A085',
                    sub: ['Wind deflection law', 'Due to Coriolis', 'Explains wind patterns', 'Navigation impact']
                }
            ]
        },

        memoryHooks: [
            {
                type: 'Mnemonic',
                text: '🎯 **"TWP"** for Permanent Winds',
                explanation: 'Trade winds → Westerlies → Polar easterlies (from equator to poles)'
            },
            {
                type: 'Directional Trick',
                text: '➡️⬅️ **East vs West Winds**',
                explanation: 'EASTERLIES = FROM East (Trade winds, Polar easterlies)\nWESTERLIES = FROM West (Mid-latitude westerlies)\nRemember: Named by SOURCE direction, not destination!'
            },
            {
                type: 'Story Method',
                text: '🏝️ **The Trade Route Story**',
                explanation: 'Trade Winds helped merchant ships sail from Europe to Americas (predictable, steady). Columbus used them! That\'s why called "Trade" winds.'
            },
            {
                type: 'Visual Hook',
                text: '🔄 **Coriolis Right-Left Rule**',
                explanation: 'Northern Hemisphere = Deflection to RIGHT\nSouthern Hemisphere = Deflection to LEFT\nThink: "North RIGHT, South LEFT" (like politics!)'
            }
        ],

        concepts: [
            {
                title: 'Trade Winds - The Reliable Traders',
                icon: '⛵',
                points: [
                    '• Blow from Sub-tropical High (30°) TO Equatorial Low (0°)',
                    '• Direction: NE in Northern Hemisphere, SE in Southern Hemisphere',
                    '• Most regular & constant winds - helped historical trade routes',
                    '• Convergence at equator forms ITCZ (Inter-Tropical Convergence Zone)'
                ]
            },
            {
                title: 'Westerlies - The Storm Bringers',
                icon: '🌩️',
                points: [
                    '• Blow from Sub-tropical High (30°) TO Sub-polar Low (60°)',
                    '• Direction: SW in Northern Hemisphere, NW in Southern Hemisphere',
                    '• Strongest between 40-50° latitudes ("Roaring Forties")',
                    '• Bring cyclonic storms, variable weather, important for rainfall in temperate regions'
                ]
            },
            {
                title: 'Polar Easterlies - The Cold Winds',
                icon: '❄️',
                points: [
                    '• Blow from Polar High (90°) TO Sub-polar Low (60°)',
                    '• Direction: NE in Northern Hemisphere, SE in Southern Hemisphere',
                    '• Cold, dry winds from polar regions',
                    '• Weak and irregular compared to Trade Winds and Westerlies'
                ]
            },
            {
                title: 'Monsoons - The Seasonal Giants',
                icon: '🌧️',
                points: [
                    '• REVERSE direction seasonally (Summer vs Winter)',
                    '• Summer: Blow from Ocean to Land (bring rainfall)',
                    '• Winter: Blow from Land to Ocean (dry season)',
                    '• Most prominent in India, SE Asia, West Africa (40% world population depends on monsoons!)'
                ]
            },
            {
                title: 'Land & Sea Breeze - Daily Dancers',
                icon: '🏖️',
                points: [
                    '• Sea Breeze (Day): From SEA → LAND (sea is cooler, high pressure)',
                    '• Land Breeze (Night): From LAND → SEA (land cools faster, high pressure)',
                    '• Distance: Extends 30-50 km inland',
                    '• Gives relief in coastal areas during hot days'
                ]
            },
            {
                title: 'Coriolis Effect - The Invisible Deflector',
                icon: '🌀',
                points: [
                    '• Earth\'s rotation deflects moving air (and water)',
                    '• Northern Hemisphere: Deflection to the RIGHT',
                    '• Southern Hemisphere: Deflection to the LEFT',
                    '• Maximum at poles, ZERO at equator (no deflection)'
                ]
            },
            {
                title: 'Famous Local Winds',
                icon: '💨',
                points: [
                    '• Loo: Hot, dusty wind in N.India summer (May-June)',
                    '• Chinook: Warm wind in Rockies (USA) - "Snow Eater"',
                    '• Foehn: Warm wind in Alps (Europe) - helps ripen grapes',
                    '• Mistral: Cold wind in S.France - causes frost damage',
                    '• Sirocco: Hot Saharan wind affecting Mediterranean'
                ]
            }
        ],

        diagrams: [
            {
                type: 'Global Wind Map',
                title: 'Planetary Wind Systems',
                description: 'World map showing Trade Winds (0-30°), Westerlies (30-60°), Polar Easterlies (60-90°) with arrows showing direction and Coriolis deflection'
            },
            {
                type: 'Circulation Cells',
                title: 'Hadley-Ferrel-Polar Cells',
                description: 'Vertical cross-section from equator to pole showing 3 circulation cells and wind belts between them'
            },
            {
                type: 'Daily Wind Pattern',
                title: 'Land & Sea Breeze',
                description: 'Side-by-side comparison of day (sea breeze) and night (land breeze) with pressure centers and wind arrows'
            },
            {
                type: 'Coriolis Deflection',
                title: 'Wind Deflection Pattern',
                description: 'Diagram showing how winds deflect right (N.Hem) and left (S.Hem) with curved arrows'
            }
        ],

        quickFacts: [
            '📍 Trade Winds blow FROM 30° TO 0° (Sub-tropical to Equator)',
            '📍 Westerlies blow FROM 30° TO 60° (Sub-tropical to Sub-polar)',
            '📍 "Roaring Forties" = Strong westerlies at 40-50°S',
            '📍 Wind named by SOURCE direction (Easterly = FROM East)',
            '📍 Coriolis effect is ZERO at equator (no deflection)',
            '📍 Monsoon comes from Arabic "Mausim" = Season',
            '📍 Indian SW Monsoon brings 75-80% annual rainfall',
            '📍 Jet streams are HIGH ALTITUDE winds (9-15 km up)',
            '📍 Chinook can raise temp by 20°C in few hours!'
        ],

        traps: [
            {
                wrong: '❌ Easterlies blow TOWARDS East',
                right: '✅ Easterlies blow FROM East (named by source, not destination!)'
            },
            {
                wrong: '❌ Trade winds blow from equator to 30°',
                right: '✅ Trade winds blow FROM 30° TO equator (opposite direction!)'
            },
            {
                wrong: '❌ Coriolis effect is strongest at equator',
                right: '✅ Coriolis effect is ZERO at equator, maximum at poles'
            },
            {
                wrong: '❌ Land breeze blows during day',
                right: '✅ LAND breeze = Night (land to sea); SEA breeze = Day (sea to land)'
            },
            {
                wrong: '❌ All winds deflect to the right',
                right: '✅ N.Hemisphere = Right; S.Hemisphere = LEFT (Coriolis)'
            },
            {
                wrong: '❌ Monsoons are permanent winds',
                right: '✅ Monsoons are SEASONAL/PERIODIC winds (change direction)'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '💨 TWP: Trade winds (0-30°) → Westerlies (30-60°) → Polar Easterlies (60-90°)',
                '🔄 Coriolis: Right in North, Left in South',
                '📍 Named by SOURCE: Easterly = FROM East, Westerly = FROM West',
                '🌧️ Monsoon = Seasonal reversal; Sea Breeze = Daily (day)',
                '⛵ Trade winds = Most reliable; Westerlies = "Roaring Forties"'
            ]
        }
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = climatologyData1;
}
