// ============================================================
// DATA-LANDFORMS.JS - UPSC Geography Learning System
// Fluvial, Glacial, Aeolian, Karst, Coastal, Volcanic Landforms
// ============================================================

const landformsData = [

    // ============================================================
    // TOPIC 1: FLUVIAL LANDFORMS (RIVERS)
    // ============================================================
    {
        id: 'fluvial-landforms',
        name: 'Fluvial Landforms',
        icon: '🏞️',
        category: 'landforms',
        theme: 'river',
        difficulty: 'Medium',
        upscRelevance: 'High',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Fluvial Landforms',
            branches: [
                {
                    name: 'Upper Course (Erosion)',
                    color: '#FF6B6B',
                    children: [
                        'V-Shaped Valleys - Vertical erosion',
                        'Waterfalls - Hard rock over soft',
                        'Gorges/Canyons - Deep narrow valleys',
                        'Rapids - Rocky riverbed sections',
                        'Potholes - Swirling erosion holes'
                    ]
                },
                {
                    name: 'Middle Course (Transport)',
                    color: '#4ECDC4',
                    children: [
                        'Meanders - S-shaped bends',
                        'River Cliffs - Outer bend erosion',
                        'Slip-off Slopes - Inner bend deposition',
                        'Interlocking Spurs - Zigzag valley sides',
                        'River Terraces - Old floodplain levels'
                    ]
                },
                {
                    name: 'Lower Course (Deposition)',
                    color: '#FFE66D',
                    children: [
                        'Floodplains - Flat depositional areas',
                        'Levees - Raised river banks',
                        'Oxbow Lakes - Cut-off meanders',
                        'Deltas - River mouth deposits',
                        'Alluvial Fans - Mountain base deposits'
                    ]
                },
                {
                    name: 'River Processes',
                    color: '#95E1D3',
                    children: [
                        'Erosion - Hydraulic, Abrasion, Attrition, Solution',
                        'Transportation - Traction, Saltation, Suspension, Solution',
                        'Deposition - Velocity decrease'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Erosion Processes - HAAS',
                content: 'H-Hydraulic Action | A-Abrasion | A-Attrition | S-Solution (Chemical)',
                icon: '🧠'
            },
            {
                type: 'mnemonic',
                title: 'Transportation - TSSS',
                content: 'T-Traction (rolling) | S-Saltation (bouncing) | S-Suspension (floating) | S-Solution (dissolved)',
                icon: '📦'
            },
            {
                type: 'story',
                title: 'Life of a River',
                content: 'Young river (upper) is energetic - cuts down vertically. Adult river (middle) is mature - swings side to side. Old river (lower) is tired - drops everything and rests!',
                icon: '👴'
            },
            {
                type: 'comparison',
                title: 'Meander Formation',
                content: 'Like a snake slithering - outer bend is attacked (cliff), inner bend is relaxed (slope). Snake keeps moving sideways!',
                icon: '🐍'
            },
            {
                type: 'trick',
                title: 'Delta Types - ABC',
                content: 'A-Arcuate (Arc shaped - Nile) | B-Bird\'s foot (Mississippi) | C-Cuspate (Pointed - Tiber)',
                icon: '🔺'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'V-Shaped Valley Formation',
                icon: '⛰️',
                points: [
                    '• Formed in upper course of river',
                    '• Vertical erosion dominates (downward cutting)',
                    '• Steep valley sides weathered by freeze-thaw',
                    '• Debris falls into river → carried away',
                    '• Cross-section looks like letter "V"'
                ]
            },
            {
                title: 'Waterfall Formation',
                icon: '💧',
                points: [
                    '• Forms where hard rock overlies soft rock',
                    '• Soft rock erodes faster → undercuts hard rock',
                    '• Hard rock overhangs → collapses',
                    '• Plunge pool forms at base (swirling erosion)',
                    '• Waterfall retreats upstream → creates gorge'
                ]
            },
            {
                title: 'Meander Development',
                icon: '〰️',
                points: [
                    '• River doesn\'t flow in straight line',
                    '• Outer bend: faster flow → erosion → river cliff',
                    '• Inner bend: slower flow → deposition → slip-off slope',
                    '• Meander migrates laterally and downstream',
                    '• Eventually neck cut-off → oxbow lake'
                ]
            },
            {
                title: 'Oxbow Lake Formation',
                icon: '🔵',
                points: [
                    '• Meander neck gets narrower over time',
                    '• During flood, river cuts through neck',
                    '• New straight channel formed',
                    '• Old meander loop abandoned',
                    '• Deposited sediment seals ends → isolated lake'
                ]
            },
            {
                title: 'Delta Formation',
                icon: '🔺',
                points: [
                    '• Forms at river mouth (sea/lake)',
                    '• Velocity drops → sediment deposited',
                    '• River splits into distributaries',
                    '• Conditions: Large sediment load, calm water, no tides',
                    '• Types: Arcuate, Bird\'s foot, Cuspate, Estuarine'
                ]
            },
            {
                title: 'Levees & Floodplains',
                icon: '🏖️',
                points: [
                    '• Floodplain: Flat area beside river, flooded periodically',
                    '• Each flood deposits thin layer of alluvium',
                    '• Levees: Natural raised banks along river',
                    '• Coarser sediment deposited near river (heavier)',
                    '• Finer sediment spreads across floodplain'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'River Profile & Landforms',
                type: 'cross-section',
                description: 'Long profile from source to mouth showing: Upper (V-valley, waterfall), Middle (meanders), Lower (floodplain, delta)'
            },
            {
                title: 'Meander Cross-Section',
                type: 'diagram',
                description: 'Show outer bend (erosion, cliff, deep water) vs inner bend (deposition, slip-off slope, shallow)'
            },
            {
                title: 'Oxbow Lake Formation Stages',
                type: 'sequence',
                description: '4 stages: Wide meander → Narrow neck → Cut-through → Isolated oxbow lake'
            },
            {
                title: 'Delta Types Comparison',
                type: 'comparison-chart',
                description: 'Three delta types with shapes and examples: Arcuate (Nile), Bird\'s foot (Mississippi), Cuspate (Tiber)'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🏞️ Grand Canyon carved by Colorado River over 5-6 million years',
            '💧 Victoria Falls is 1,708m wide - largest curtain of falling water',
            '🔺 Ganga-Brahmaputra Delta is world\'s LARGEST delta (105,000 km²)',
            '〰️ Amazon River has meanders up to 15 km wide',
            '🏔️ Indus Gorge is one of world\'s deepest at 7,120m',
            '🌊 Niagara Falls retreats ~1m per year upstream',
            '📏 Mississippi River meanders shift ~25m per year'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Confusing Gorge and Canyon',
                clarity: 'Gorge = Narrow, steep walls, V-shape | Canyon = Wider, stepped walls, plateau region. Grand Canyon is CANYON, Indus is GORGE.'
            },
            {
                trap: 'All rivers form deltas',
                clarity: 'NO! Deltas need: large sediment, calm water, no strong tides/currents. Narmada & Tapi form ESTUARIES (funnel-shaped) due to tides.'
            },
            {
                trap: 'Levees are man-made',
                clarity: 'Natural levees form from flood deposits. Man-made ones are ARTIFICIAL levees or embankments. UPSC may ask about natural levees.'
            },
            {
                trap: 'Alluvial fan = Delta',
                clarity: 'Alluvial Fan = Land-based, at mountain base, semi-circular | Delta = Water-based, at river mouth, triangular/varied shapes'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Upper course: Vertical erosion → V-valley, waterfall, gorge',
                '• Middle course: Lateral erosion → meanders, terraces',
                '• Lower course: Deposition → floodplain, levees, delta',
                '• Erosion: HAAS (Hydraulic, Abrasion, Attrition, Solution)',
                '• Delta types: Arcuate (Nile), Bird\'s foot (Mississippi), Cuspate (Tiber)',
                '• Oxbow = cut-off meander loop'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2021,
                question: 'Explain the formation of an Oxbow Lake with suitable diagrams.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Distinguish between a gorge and a canyon.',
                type: 'Prelims'
            },
            {
                year: 2017,
                question: 'Describe the features formed by river erosion and deposition.',
                type: 'Mains'
            },
            {
                year: 2015,
                question: 'What is a floodplain? How are natural levees formed?',
                type: 'Mains'
            }
        ]
    },

    // ============================================================
    // TOPIC 2: GLACIAL LANDFORMS
    // ============================================================
    {
        id: 'glacial-landforms',
        name: 'Glacial Landforms',
        icon: '🏔️',
        category: 'landforms',
        theme: 'himalaya',
        difficulty: 'Medium',
        upscRelevance: 'High',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Glacial Landforms',
            branches: [
                {
                    name: 'Erosional Features',
                    color: '#74b9ff',
                    children: [
                        'Cirque/Corrie - Armchair hollow',
                        'Arête - Knife-edge ridge',
                        'Horn/Pyramidal Peak - Sharp peak',
                        'U-Shaped Valley - Flat floor, steep sides',
                        'Hanging Valley - Tributary above main',
                        'Fjord - Flooded U-valley'
                    ]
                },
                {
                    name: 'Depositional Features',
                    color: '#a29bfe',
                    children: [
                        'Moraines - Debris deposits',
                        'Drumlins - Egg-shaped hills',
                        'Eskers - Snake-like ridges',
                        'Kames - Mound deposits',
                        'Outwash Plain - Meltwater deposits',
                        'Erratics - Foreign boulders'
                    ]
                },
                {
                    name: 'Moraine Types',
                    color: '#81ecec',
                    children: [
                        'Lateral - Side of glacier',
                        'Medial - Center (2 glaciers merge)',
                        'Ground - Under glacier',
                        'Terminal - End of glacier',
                        'Recessional - Retreat stages'
                    ]
                },
                {
                    name: 'Glacial Processes',
                    color: '#ffeaa7',
                    children: [
                        'Plucking - Freezing & pulling rocks',
                        'Abrasion - Sandpaper effect',
                        'Freeze-thaw - Water expansion'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Erosional Sequence - CAUH',
                content: 'C-Cirque forms first | A-Arête (2 cirques meet) | U-U-valley below | H-Hanging valley joins',
                icon: '🧠'
            },
            {
                type: 'mnemonic',
                title: 'Moraine Types - LMGT',
                content: 'L-Lateral (sides) | M-Medial (middle) | G-Ground (below) | T-Terminal (end)',
                icon: '📍'
            },
            {
                type: 'story',
                title: 'The Ice Sculptor',
                content: 'Glacier is like a giant sculptor: First carves armchair (cirque), sharpens ridges (arête), peaks (horn), then bulldozes a highway (U-valley), and dumps debris (moraines) when tired!',
                icon: '🎨'
            },
            {
                type: 'comparison',
                title: 'U vs V Valley',
                content: 'V-valley = River carving (young, energetic, vertical) | U-valley = Glacier carving (heavy, wide, bulldozer effect)',
                icon: '⚔️'
            },
            {
                type: 'trick',
                title: 'Drumlin Direction',
                content: 'Drumlin = Upside-down spoon | Steep end faces upstream (ice came from) | Gentle end downstream (ice went to)',
                icon: '🥄'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'Cirque (Corrie) Formation',
                icon: '🪑',
                points: [
                    '• Armchair-shaped hollow in mountainside',
                    '• Snow accumulates → compresses to ice',
                    '• Freeze-thaw on back wall → steepens it',
                    '• Rotational sliding deepens floor',
                    '• Tarn (lake) forms when glacier melts',
                    '• Example: Nanda Devi cirques'
                ]
            },
            {
                title: 'Arête & Horn Formation',
                icon: '⛰️',
                points: [
                    '• Arête: Knife-edge ridge between 2 cirques',
                    '• Formed by back-to-back glacial erosion',
                    '• Horn/Pyramidal Peak: 3+ cirques erode a peak',
                    '• Classic horn shape: Matterhorn (Alps)',
                    '• Example in India: Nanda Devi peak'
                ]
            },
            {
                title: 'U-Shaped Valley Formation',
                icon: '🏔️',
                points: [
                    '• Pre-existing V-valley occupied by glacier',
                    '• Glacier widens and deepens valley',
                    '• Steep, straight sides + flat/rounded floor',
                    '• Cross-section looks like letter "U"',
                    '• Truncated spurs (cut-off interlocking spurs)',
                    '• Example: Yosemite Valley, USA'
                ]
            },
            {
                title: 'Hanging Valley & Fjord',
                icon: '💧',
                points: [
                    '• Hanging Valley: Tributary glacier less erosion',
                    '• Main valley eroded deeper → tributary "hangs" above',
                    '• Waterfall forms where hanging valley joins',
                    '• Fjord: U-valley flooded by sea',
                    '• Deep, steep-sided coastal inlet',
                    '• Example: Norway fjords, Milford Sound (NZ)'
                ]
            },
            {
                title: 'Moraines - Glacial Debris',
                icon: '🪨',
                points: [
                    '• Lateral: Along glacier sides (frost-shattered)',
                    '• Medial: Where two glaciers merge laterally',
                    '• Ground: Dragged under glacier (till)',
                    '• Terminal: End of glacier - marks max advance',
                    '• Recessional: Multiple retreat positions',
                    '• Unsorted mixture of all sizes (till)'
                ]
            },
            {
                title: 'Drumlins & Eskers',
                icon: '🥚',
                points: [
                    '• Drumlin: Elongated egg-shaped hill',
                    '• Made of glacial till (unsorted)',
                    '• Steep end upstream, gentle end downstream',
                    '• Found in groups (drumlin swarms)',
                    '• Esker: Long, winding ridge',
                    '• Deposited by meltwater streams IN glacier'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'Glacial Erosion Features',
                type: 'landscape',
                description: 'Mountain showing: cirque with tarn, arête, horn peak, U-valley below, hanging valley with waterfall, truncated spurs'
            },
            {
                title: 'Cirque Formation Stages',
                type: 'sequence',
                description: '4 stages: Snow accumulation → Neve formation → Rotational erosion → Completed cirque with tarn'
            },
            {
                title: 'Moraine Types on Glacier',
                type: 'aerial-view',
                description: 'Bird\'s eye view of glacier showing lateral, medial, terminal moraines and their positions'
            },
            {
                title: 'U vs V Valley Comparison',
                type: 'comparison',
                description: 'Cross-section: V-valley (steep, narrow, river at bottom) vs U-valley (wide, flat floor, steep sides)'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🏔️ Matterhorn (Switzerland) is classic example of a HORN peak',
            '🧊 Siachen Glacier (76 km) is longest glacier outside polar regions',
            '🌊 Sognefjord (Norway) is deepest fjord at 1,308m deep',
            '🪨 Erratics can be massive - some weigh over 16,000 tonnes!',
            '🏔️ Great Lakes (USA) were carved by glaciers during Ice Age',
            '📏 Gangotri Glacier (30 km) is source of River Ganga',
            '🥚 Ireland has over 10,000 drumlins - largest concentration'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Confusing Cirque and U-Valley',
                clarity: 'Cirque = Armchair hollow at head of glacier (source) | U-Valley = The valley carved by glacier as it flows downhill'
            },
            {
                trap: 'Thinking moraines are sorted',
                clarity: 'Moraines contain UNSORTED material (till) - boulders to clay mixed. SORTED deposits = outwash plains (by meltwater)'
            },
            {
                trap: 'Drumlins formed by erosion',
                clarity: 'Drumlins are DEPOSITIONAL features! Formed by glacier depositing till, then reshaping it. NOT carved by erosion.'
            },
            {
                trap: 'All glacial lakes are tarns',
                clarity: 'Tarn = Lake in cirque only | Ribbon Lake = Long, narrow lake in U-valley floor | Kettle Lake = Melted ice block'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Erosion: Cirque → Arête → Horn → U-Valley → Hanging Valley',
                '• Cirque: Armchair hollow, tarn inside after melt',
                '• Moraine types: Lateral, Medial, Ground, Terminal',
                '• Drumlin: Egg-shaped, steep end = upstream direction',
                '• Esker: Winding ridge from IN-glacier streams',
                '• Fjord: Flooded U-valley by sea'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2020,
                question: 'Describe the landforms created by glacial erosion.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Distinguish between a cirque and a U-shaped valley.',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'What are moraines? Discuss different types of moraines.',
                type: 'Mains'
            },
            {
                year: 2014,
                question: 'Explain the formation of a fjord.',
                type: 'Mains'
            }
        ]
    },

    // ============================================================
    // TOPIC 3: AEOLIAN LANDFORMS (WIND/DESERT)
    // ============================================================
    {
        id: 'aeolian-landforms',
        name: 'Aeolian Landforms',
        icon: '🏜️',
        category: 'landforms',
        theme: 'desert',
        difficulty: 'Medium',
        upscRelevance: 'Medium',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Aeolian Landforms',
            branches: [
                {
                    name: 'Erosional Features',
                    color: '#fdcb6e',
                    children: [
                        'Mushroom Rock/Pedestal - Top-heavy rock',
                        'Zeugen - Tabular masses',
                        'Yardang - Streamlined ridges',
                        'Inselberg - Isolated rocky hill',
                        'Deflation Hollow - Blown-out depression',
                        'Desert Pavement - Rocky surface'
                    ]
                },
                {
                    name: 'Depositional Features',
                    color: '#e17055',
                    children: [
                        'Sand Dunes - Various types',
                        'Loess - Fine wind-blown silt',
                        'Sand Shadow - Behind obstacle',
                        'Sand Drift - One-sided accumulation'
                    ]
                },
                {
                    name: 'Dune Types',
                    color: '#fab1a0',
                    children: [
                        'Barchan - Crescent, horns downwind',
                        'Seif/Longitudinal - Long ridges',
                        'Transverse - Perpendicular to wind',
                        'Star Dune - Multi-armed',
                        'Parabolic - Horns upwind (opposite of barchan)'
                    ]
                },
                {
                    name: 'Wind Processes',
                    color: '#ffeaa7',
                    children: [
                        'Deflation - Lifting & removing',
                        'Abrasion - Sandblasting effect',
                        'Attrition - Particle collision'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Wind Erosion - DAA',
                content: 'D-Deflation (blowing away) | A-Abrasion (sandblasting) | A-Attrition (collision)',
                icon: '💨'
            },
            {
                type: 'mnemonic',
                title: 'Dune Types - BSTSP',
                content: 'B-Barchan (crescent) | S-Seif (long) | T-Transverse (wave) | S-Star (multi-arm) | P-Parabolic (U-shape)',
                icon: '🏜️'
            },
            {
                type: 'comparison',
                title: 'Barchan vs Parabolic',
                content: 'Barchan: Horns point DOWNwind (like running person, arms back) | Parabolic: Horns point UPwind (vegetation anchors sides)',
                icon: '🏃'
            },
            {
                type: 'trick',
                title: 'Mushroom Rock Zone',
                content: 'Wind carries sand particles up to ~1m height. Maximum abrasion at 0-1m → base eroded more → mushroom shape!',
                icon: '🍄'
            },
            {
                type: 'story',
                title: 'Zeugen vs Yardang',
                content: 'Zeugen = Table (horizontal layers of hard/soft rock) | Yardang = Streamlined boats (wind carves ridges parallel to flow)',
                icon: '⛵'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'Mushroom Rock Formation',
                icon: '🍄',
                points: [
                    '• Also called pedestal rock or rock table',
                    '• Sand-laden wind abrades rock base (0-1m)',
                    '• Upper part less affected (above sand zone)',
                    '• Base narrows → top remains wide',
                    '• Top-heavy appearance like mushroom',
                    '• Example: Thar Desert, Egypt'
                ]
            },
            {
                title: 'Zeugen Formation',
                icon: '📊',
                points: [
                    '• Ridge-and-furrow landscape',
                    '• Horizontal alternating hard/soft rock layers',
                    '• Soft rock eroded by wind → furrows',
                    '• Hard rock remains → tabular ridges (zeugen)',
                    '• Perpendicular to wind direction',
                    '• Found in Sahara, Arabian deserts'
                ]
            },
            {
                title: 'Yardang Formation',
                icon: '⛵',
                points: [
                    '• Streamlined, elongated ridges',
                    '• Parallel to prevailing wind direction',
                    '• Alternating hard/soft vertical rock bands',
                    '• Wind erodes soft bands → creates grooves',
                    '• Hard rock forms the ridge crests',
                    '• Can be kilometers long'
                ]
            },
            {
                title: 'Barchan Dunes',
                icon: '🌙',
                points: [
                    '• Crescent-shaped sand dune',
                    '• Convex side faces windward (gentle slope)',
                    '• Horns point DOWNwind (leeward)',
                    '• Form where: limited sand, steady wind direction',
                    '• Height: 10-30m typically',
                    '• Migrate up to 15m/year downwind'
                ]
            },
            {
                title: 'Seif (Longitudinal) Dunes',
                icon: '📏',
                points: [
                    '• Long, narrow sand ridges',
                    '• Parallel to wind direction',
                    '• Form where: bi-directional winds converge',
                    '• Can extend for hundreds of kilometers',
                    '• Sharp crests, steep sides',
                    '• Common in Sahara, Thar Desert'
                ]
            },
            {
                title: 'Loess Deposits',
                icon: '🌾',
                points: [
                    '• Fine silt deposited by wind',
                    '• Yellow/brown color, very fertile',
                    '• Carried from deserts/glacial outwash',
                    '• Loess Plateau of China - largest deposit',
                    '• Creates vertical cliffs (cohesive soil)',
                    '• Ideal for agriculture'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'Mushroom Rock Formation',
                type: 'sequence',
                description: '3 stages: Original rock → Base abrasion (0-1m) → Final mushroom shape with narrow stem'
            },
            {
                title: 'Dune Types Comparison',
                type: 'aerial-view',
                description: 'Bird\'s eye view showing: Barchan (crescent), Seif (lines), Transverse (waves), Star (multiple arms), Parabolic (U-shape)'
            },
            {
                title: 'Barchan vs Parabolic',
                type: 'comparison',
                description: 'Side by side showing horn directions: Barchan horns downwind, Parabolic horns upwind with vegetation anchoring'
            },
            {
                title: 'Zeugen vs Yardang',
                type: 'comparison',
                description: 'Cross-sections showing rock layer orientations and wind direction relationships'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🏜️ Sahara Desert has over 2 million km² of sand (erg)',
            '📏 Some seif dunes in Iran extend over 100 km long!',
            '🌾 China\'s Loess Plateau covers 640,000 km² - largest loess deposit',
            '💨 Desert sand can travel thousands of km - Saharan dust reaches Amazon!',
            '🍄 Mushroom rocks near Jaisalmer are popular tourist attractions',
            '🏃 Barchans can migrate 10-15m per year following wind',
            '⬛ Desert pavement (reg) protects underlying sand from erosion'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Confusing Barchan and Parabolic dunes',
                clarity: 'Both crescent-shaped BUT: Barchan horns point DOWNwind | Parabolic horns point UPwind (vegetation anchors the sides)'
            },
            {
                trap: 'Thinking wind erosion equals water erosion',
                clarity: 'Wind erosion limited to ~1m height (sand travel limit). Water erosion affects all heights. Different landform patterns!'
            },
            {
                trap: 'Zeugen and Yardang are same',
                clarity: 'Zeugen = Horizontal rock layers → tabular ridges PERPENDICULAR to wind | Yardang = Vertical layers → ridges PARALLEL to wind'
            },
            {
                trap: 'Loess is same as sand',
                clarity: 'Loess = SILT (finer than sand) | Very fertile, forms cliffs | Sand is coarser, less fertile, doesn\'t hold vertical cliffs'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Wind processes: Deflation, Abrasion, Attrition',
                '• Erosional: Mushroom rock, Zeugen, Yardang, Inselberg',
                '• Barchan: Crescent, horns DOWNwind',
                '• Parabolic: Crescent, horns UPwind (vegetation anchors)',
                '• Seif: Long ridges PARALLEL to wind',
                '• Loess: Fine fertile silt, from deserts/glaciers'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2019,
                question: 'Describe the different types of sand dunes.',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'What are mushroom rocks? How are they formed?',
                type: 'Prelims'
            },
            {
                year: 2015,
                question: 'Distinguish between Zeugen and Yardangs.',
                type: 'Mains'
            },
            {
                year: 2013,
                question: 'What is loess? Discuss its distribution and significance.',
                type: 'Mains'
            }
        ]
    },

    // ============================================================
    // TOPIC 4: KARST LANDFORMS
    // ============================================================
    {
        id: 'karst-landforms',
        name: 'Karst Landforms',
        icon: '🕳️',
        category: 'landforms',
        theme: 'cave',
        difficulty: 'Medium',
        upscRelevance: 'Medium',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Karst Landforms',
            branches: [
                {
                    name: 'Surface Features',
                    color: '#a29bfe',
                    children: [
                        'Sinkholes/Dolines - Circular depressions',
                        'Uvala - Merged sinkholes',
                        'Polje - Large flat-floored basin',
                        'Karren/Lapies - Grooved surfaces',
                        'Swallow Holes - River disappears',
                        'Dry Valleys - Former river valleys'
                    ]
                },
                {
                    name: 'Underground Features',
                    color: '#6c5ce7',
                    children: [
                        'Caves - Dissolved chambers',
                        'Stalactites - Hang from ceiling',
                        'Stalagmites - Rise from floor',
                        'Pillars/Columns - Joined stal-formations',
                        'Underground Rivers - Hidden drainage'
                    ]
                },
                {
                    name: 'Requirements',
                    color: '#74b9ff',
                    children: [
                        'Soluble Rock - Limestone, Dolomite',
                        'Rainfall - Source of weak acid',
                        'Joints/Cracks - Entry for water',
                        'Vegetation - CO2 for carbonic acid'
                    ]
                },
                {
                    name: 'Process',
                    color: '#81ecec',
                    children: [
                        'Chemical weathering dominant',
                        'CO2 + H2O → H2CO3 (carbonic acid)',
                        'Dissolves CaCO3 (limestone)',
                        'Creates voids and passages'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Stal-formations',
                content: 'StalaCtite = C = Ceiling (hangs down) | StalaGmite = G = Ground (rises up) | When they meet = Column/Pillar',
                icon: '🧠'
            },
            {
                type: 'mnemonic',
                title: 'Surface Features Size',
                content: 'Small to Large: Karren → Doline → Uvala → Polje (Think: Kids Do Unique Paintings)',
                icon: '📏'
            },
            {
                type: 'comparison',
                title: 'Kitchen Sink Analogy',
                content: 'Karst = Earth\'s drainage system without pipes. Sinkholes = drains | Caves = pipe network | Underground rivers = water flow',
                icon: '🚰'
            },
            {
                type: 'trick',
                title: 'Karst Conditions',
                content: 'LRJV: Limestone + Rain + Joints + Vegetation = Karst development. Missing any = weak karst.',
                icon: '✅'
            },
            {
                type: 'story',
                title: 'The Patient Sculptor',
                content: 'Rainwater is a slow sculptor. It picks up CO2, becomes acidic, enters limestone through cracks, dissolves rock over millions of years → magnificent caves!',
                icon: '⏳'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'Karst Process',
                icon: '⚗️',
                points: [
                    '• Rain absorbs CO2 from atmosphere/soil',
                    '• Forms weak carbonic acid (H2CO3)',
                    '• Acid dissolves limestone (CaCO3)',
                    '• Water enters through joints/fractures',
                    '• Slow dissolution over thousands of years',
                    '• Creates surface + underground features'
                ]
            },
            {
                title: 'Sinkholes/Dolines',
                icon: '🕳️',
                points: [
                    '• Circular/oval depressions in ground',
                    '• Can be few meters to 100+ meters wide',
                    '• Solution doline: Gradual dissolution',
                    '• Collapse doline: Roof of cave collapses',
                    '• Often have drainage at bottom',
                    '• Can form suddenly (dangerous!)'
                ]
            },
            {
                title: 'Uvala & Polje',
                icon: '🏞️',
                points: [
                    '• Uvala: Several dolines merge together',
                    '• Irregular shape, larger than single doline',
                    '• Polje: Largest karst depression',
                    '• Flat floor, steep walls, km-wide',
                    '• Often has rivers that disappear into swallow holes',
                    '• May have temporary lakes after rain'
                ]
            },
            {
                title: 'Stalactites Formation',
                icon: '🔽',
                points: [
                    '• Hang FROM ceiling (C = Ceiling)',
                    '• Water drips through cave roof',
                    '• CO2 escapes → water deposits CaCO3',
                    '• Builds up drip by drip downward',
                    '• Icicle-shaped, hollow tube initially',
                    '• Growth rate: ~1cm per 100 years'
                ]
            },
            {
                title: 'Stalagmites Formation',
                icon: '🔼',
                points: [
                    '• Rise FROM ground (G = Ground)',
                    '• Water drips to floor, deposits minerals',
                    '• Builds upward with each drip',
                    '• Thicker, more rounded than stalactites',
                    '• When stalactite + stalagmite join = Column',
                    '• Some columns are millions of years old'
                ]
            },
            {
                title: 'Karren/Lapies',
                icon: '📐',
                points: [
                    '• Grooved/furrowed rock surfaces',
                    '• Formed by rainwater dissolution',
                    '• Channels follow water flow paths',
                    '• Sharp ridges between grooves',
                    '• Found on exposed limestone surfaces',
                    '• Example: Burren, Ireland'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'Complete Karst Landscape',
                type: 'cross-section',
                description: 'Surface to underground: Karren, sinkholes, swallow hole, cave system with stalactites/stalagmites, underground river'
            },
            {
                title: 'Stalactite vs Stalagmite',
                type: 'diagram',
                description: 'Cave interior showing stalactite (ceiling, thin) vs stalagmite (floor, thick) with water dripping'
            },
            {
                title: 'Sinkhole Types',
                type: 'comparison',
                description: 'Solution sinkhole (gradual) vs Collapse sinkhole (sudden cave roof collapse)'
            },
            {
                title: 'Surface Features Scale',
                type: 'sequence',
                description: 'Karren (small) → Doline (medium) → Uvala (large) → Polje (largest) with size comparisons'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🕳️ Word "Karst" comes from Kras region in Slovenia',
            '⏳ Stalactites grow ~1 cm per 100 years on average',
            '🦇 Largest cave chamber: Sarawak Chamber, Malaysia (700m x 400m)',
            '💧 Son Doong Cave (Vietnam) has its own weather system!',
            '🇮🇳 India\'s karst: Meghalaya caves, Pachmarhi, Bastar',
            '🏊 Cenotes in Mexico = water-filled sinkholes, used by Mayans',
            '📏 Mammoth Cave (USA) = longest cave system (650+ km)'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Stalactite vs Stalagmite confusion',
                clarity: 'C = Ceiling = StalaCtite (hangs down) | G = Ground = StalaGmite (rises up). Simple trick: C comes before G, ceiling is above ground.'
            },
            {
                trap: 'Thinking karst forms only in limestone',
                clarity: 'Primary: Limestone, Dolomite. Also possible in: Gypsum, Rock salt, even Quartzite under specific conditions. Limestone is most common though.'
            },
            {
                trap: 'Confusing sinkhole formation types',
                clarity: 'Solution sinkhole = SLOW (dissolution) | Collapse sinkhole = SUDDEN (cave roof caves in). Both look similar but form differently!'
            },
            {
                trap: 'Dry valleys always mean karst',
                clarity: 'Dry valleys CAN indicate karst (river went underground) but can also form from climate change, stream capture, or permeable rock. Need other karst evidence!'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Karst = Chemical weathering of limestone by carbonic acid',
                '• Surface: Karren → Doline → Uvala → Polje (small to large)',
                '• Underground: Caves, stalactites (ceiling), stalagmites (ground)',
                '• StalaCtite = C = Ceiling | StalaGmite = G = Ground',
                '• Requirements: Limestone + Rain + Joints + Vegetation',
                '• India: Meghalaya caves, Bastar, Pachmarhi'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2020,
                question: 'Describe the features associated with karst topography.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'How are stalactites and stalagmites formed?',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'What conditions are necessary for karst landform development?',
                type: 'Mains'
            },
            {
                year: 2014,
                question: 'Discuss the karst regions of India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================================
    // TOPIC 5: COASTAL LANDFORMS
    // ============================================================
    {
        id: 'coastal-landforms',
        name: 'Coastal Landforms',
        icon: '🏖️',
        category: 'landforms',
        theme: 'coastal',
        difficulty: 'Medium',
        upscRelevance: 'High',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Coastal Landforms',
            branches: [
                {
                    name: 'Erosional Features',
                    color: '#0984e3',
                    children: [
                        'Cliff - Steep rock face',
                        'Wave-cut Platform - Flat rock surface',
                        'Cave - Hollow in cliff',
                        'Arch - Natural bridge',
                        'Stack - Isolated pillar',
                        'Stump - Collapsed stack'
                    ]
                },
                {
                    name: 'Depositional Features',
                    color: '#00cec9',
                    children: [
                        'Beach - Sand/pebble accumulation',
                        'Spit - Extended sand ridge',
                        'Bar - Offshore sand barrier',
                        'Tombolo - Connects island to mainland',
                        'Lagoon - Enclosed water body',
                        'Barrier Island - Parallel to coast'
                    ]
                },
                {
                    name: 'Wave Processes',
                    color: '#fdcb6e',
                    children: [
                        'Hydraulic Action - Air compression',
                        'Abrasion/Corrasion - Sand grinding',
                        'Attrition - Particle collision',
                        'Solution/Corrosion - Chemical dissolution'
                    ]
                },
                {
                    name: 'Wave Types',
                    color: '#e17055',
                    children: [
                        'Constructive - Low, deposit sediment',
                        'Destructive - High, erode coastline',
                        'Longshore Drift - Zigzag transport'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Erosional Sequence',
                content: 'Cliff → Cave → Arch → Stack → Stump (CCASS - "Catch Cats And Scare Snakes")',
                icon: '🧠'
            },
            {
                type: 'mnemonic',
                title: 'Wave Erosion - HACS',
                content: 'H-Hydraulic | A-Abrasion | C-Corrosion | S-Attrition (Solution is Corrosion!)',
                icon: '🌊'
            },
            {
                type: 'story',
                title: 'Birth and Death of a Cliff',
                content: 'Waves attack cliff → Cave forms → Cave goes through = Arch → Arch roof collapses = Stack → Stack crumbles = Stump. Circle of coastal life!',
                icon: '⏳'
            },
            {
                type: 'comparison',
                title: 'Spit vs Bar vs Tombolo',
                content: 'Spit = One end attached, grows into sea | Bar = Crosses bay mouth | Tombolo = Connects mainland to island (like a bridge made of sand)',
                icon: '🌉'
            },
            {
                type: 'trick',
                title: 'Longshore Drift Direction',
                content: 'Waves approach at angle, swash goes UP-diagonal, backwash goes straight DOWN → Zigzag movement along coast',
                icon: '↗️'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'Cliff & Wave-cut Platform',
                icon: '🏔️',
                points: [
                    '• Cliff: Steep rock face along coast',
                    '• Waves erode base → notch forms',
                    '• Overhang collapses → cliff retreats',
                    '• Wave-cut platform: Flat surface left behind',
                    '• Platform exposed at low tide',
                    '• Eventually limits wave erosion power'
                ]
            },
            {
                title: 'Cave → Arch → Stack Sequence',
                icon: '🕳️',
                points: [
                    '• Wave attacks weakness in cliff → Cave',
                    '• Caves on both sides break through → Arch',
                    '• Arch roof weakens and collapses → Stack',
                    '• Stack base erodes → Stump',
                    '• Classic example: Old Harry Rocks (UK)',
                    '• India example: Elephanta Caves approach'
                ]
            },
            {
                title: 'Spit Formation',
                icon: '📏',
                points: [
                    '• Long, narrow ridge extending into sea',
                    '• One end attached to coastline',
                    '• Formed by longshore drift',
                    '• Grows in drift direction',
                    '• Often curved at end (wave refraction)',
                    '• Example: Spurn Head (UK), Kakinada spit (India)'
                ]
            },
            {
                title: 'Bar & Lagoon',
                icon: '🏝️',
                points: [
                    '• Bar: Sand deposit across bay mouth',
                    '• Connects two headlands',
                    '• Traps water behind it → Lagoon',
                    '• Lagoon: Shallow, enclosed water body',
                    '• Example: Chilika Lake, Pulicat Lake (India)',
                    '• Bar can become tombolo if connects island'
                ]
            },
            {
                title: 'Tombolo Formation',
                icon: '🔗',
                points: [
                    '• Sand/shingle ridge connecting island to mainland',
                    '• Forms in wave shadow of island',
                    '• Sediment accumulates in calm water',
                    '• Can be exposed or submerged at times',
                    '• Example: Chesil Beach (UK), Rameswaram (India)',
                    '• Can connect multiple islands (double tombolo)'
                ]
            },
            {
                title: 'Longshore Drift',
                icon: '↗️',
                points: [
                    '• Transportation of sediment along coast',
                    '• Waves approach at angle to shore',
                    '• Swash: carries sediment up at angle',
                    '• Backwash: carries down perpendicular',
                    '• Net movement = zigzag along coast',
                    '• Creates spits, bars, and redistributes beaches'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'Erosional Landform Sequence',
                type: 'sequence',
                description: '5 stages: Cliff with weakness → Cave → Arch → Stack → Stump (with wave-cut platform visible)'
            },
            {
                title: 'Depositional Features',
                type: 'aerial-view',
                description: 'Coastline showing: Beach, Spit, Bar, Lagoon, Tombolo connecting to island'
            },
            {
                title: 'Longshore Drift Process',
                type: 'diagram',
                description: 'Top view showing: Wave approach angle, swash (diagonal up), backwash (straight down), zigzag sediment path'
            },
            {
                title: 'Spit vs Bar vs Tombolo',
                type: 'comparison',
                description: 'Three diagrams: Spit (one end attached), Bar (across bay), Tombolo (mainland to island)'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🏖️ India has 7,517 km coastline (mainland: 6,100 km)',
            '🪨 Durdle Door (UK) is famous natural arch limestone',
            '🌊 Bay of Fundy (Canada) has world\'s highest tides: 16m!',
            '🏝️ Rameswaram connects to mainland via tombolo + bridge',
            '💧 Chilika Lake is Asia\'s largest brackish water lagoon',
            '📏 Great Barrier Reef is world\'s largest coral barrier',
            '⏳ White Cliffs of Dover retreat ~1 cm/year from erosion'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Confusing Spit, Bar, and Tombolo',
                clarity: 'Spit = One end free | Bar = Crosses opening | Tombolo = Connects to island. Remember: Spit is incomplete bar, Tombolo is bar reaching an island.'
            },
            {
                trap: 'Thinking lagoons are freshwater',
                clarity: 'Lagoons are BRACKISH (mix of salt + fresh water). Chilika, Pulicat are lagoons, not freshwater lakes. They connect to sea through inlets.'
            },
            {
                trap: 'Wave-cut platform = Erosional surface only',
                clarity: 'It IS erosional but can have DEPOSITIONAL features on it (beach sediments at low tide). Don\'t confuse platform itself with deposits ON it.'
            },
            {
                trap: 'All coastal islands have tombolos',
                clarity: 'Tombolo needs: island close to coast + adequate sediment supply + suitable wave patterns. Many islands remain separate forever.'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Erosion sequence: Cliff → Cave → Arch → Stack → Stump',
                '• Depositional: Beach, Spit, Bar, Tombolo, Lagoon',
                '• Spit = One end attached | Bar = Crosses bay | Tombolo = Island connection',
                '• Longshore drift = Zigzag sediment movement along coast',
                '• Wave erosion: Hydraulic, Abrasion, Corrosion, Attrition',
                '• India lagoons: Chilika (Odisha), Pulicat (TN/AP)'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2021,
                question: 'Explain the formation of a wave-cut platform.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What is longshore drift? How does it affect coastal landforms?',
                type: 'Mains'
            },
            {
                year: 2017,
                question: 'Distinguish between a spit and a tombolo.',
                type: 'Prelims'
            },
            {
                year: 2015,
                question: 'Describe the depositional landforms of coastlines with examples from India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================================
    // TOPIC 6: VOLCANIC LANDFORMS
    // ============================================================
    {
        id: 'volcanic-landforms',
        name: 'Volcanic Landforms',
        icon: '🌋',
        category: 'landforms',
        theme: 'volcanic',
        difficulty: 'Medium',
        upscRelevance: 'High',
        
        // 1️⃣ VISUAL MIND MAP
        mindMap: {
            central: 'Volcanic Landforms',
            branches: [
                {
                    name: 'Extrusive (Surface)',
                    color: '#d63031',
                    children: [
                        'Shield Volcano - Broad, gentle slopes',
                        'Cinder Cone - Steep, small',
                        'Composite/Strato - Classic cone shape',
                        'Caldera - Large collapsed crater',
                        'Lava Plateau - Flat lava sheets',
                        'Volcanic Dome - Steep, bulbous'
                    ]
                },
                {
                    name: 'Intrusive (Underground)',
                    color: '#e17055',
                    children: [
                        'Batholith - Largest, irregular mass',
                        'Laccolith - Dome-shaped, horizontal',
                        'Lopolith - Saucer-shaped, depressed',
                        'Dyke - Vertical wall-like',
                        'Sill - Horizontal sheet',
                        'Phacolith - Wave-like in folds'
                    ]
                },
                {
                    name: 'Lava Types',
                    color: '#fdcb6e',
                    children: [
                        'Basaltic - Fluid, gentle volcanoes',
                        'Andesitic - Intermediate viscosity',
                        'Rhyolitic - Viscous, explosive'
                    ]
                },
                {
                    name: 'Associated Features',
                    color: '#74b9ff',
                    children: [
                        'Geysers - Hot water fountains',
                        'Hot Springs - Heated groundwater',
                        'Fumaroles - Steam vents',
                        'Crater Lake - Water-filled caldera'
                    ]
                }
            ]
        },
        
        // 2️⃣ MEMORY HOOKS
        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Volcano Types - SCC',
                content: 'S-Shield (Smooth, spread out) | C-Cinder (Cone, steep) | C-Composite (Combination of both)',
                icon: '🌋'
            },
            {
                type: 'mnemonic',
                title: 'Intrusive Bodies - BLaLo DiSPha',
                content: 'B-Batholith | La-Laccolith | Lo-Lopolith | Di-Dyke | S-Sill | Pha-Phacolith',
                icon: '🪨'
            },
            {
                type: 'comparison',
                title: 'Laccolith vs Lopolith',
                content: 'Laccolith = Dome UP (like pregnant belly) | Lopolith = Saucer DOWN (like soup bowl). Both horizontal intrusions, opposite shapes!',
                icon: '🍜'
            },
            {
                type: 'trick',
                title: 'Dyke vs Sill Direction',
                content: 'Dyke = Cuts across rock layers (vertical) like a DAGGER | Sill = Lies along layers (horizontal) like a window SILL',
                icon: '🗡️'
            },
            {
                type: 'story',
                title: 'Caldera Birth',
                content: 'Massive eruption → Magma chamber empties → Mountain summit collapses into empty chamber → Giant depression forms = Caldera. Some fill with water = Crater Lake!',
                icon: '💥'
            }
        ],
        
        // 3️⃣ CONCEPT BLOCKS
        conceptBlocks: [
            {
                title: 'Shield Volcano',
                icon: '🛡️',
                points: [
                    '• Broad, gently sloping sides',
                    '• Built from fluid BASALTIC lava',
                    '• Lava flows long distances before cooling',
                    '• Non-explosive eruptions typically',
                    '• Example: Mauna Loa (Hawaii) - largest volcano',
                    '• India: Deccan Traps are shield-type eruptions'
                ]
            },
            {
                title: 'Composite/Stratovolcano',
                icon: '🗻',
                points: [
                    '• Classic cone shape (steep)',
                    '• Built from alternate layers: lava + ash',
                    '• Uses ANDESITIC lava (intermediate)',
                    '• Explosive + effusive eruptions alternate',
                    '• Example: Mt. Fuji, Mt. Vesuvius, Mt. St. Helens',
                    '• Most dangerous volcano type (explosive)'
                ]
            },
            {
                title: 'Caldera Formation',
                icon: '🕳️',
                points: [
                    '• Large, basin-shaped depression',
                    '• Formed by: eruption + collapse',
                    '• Much larger than crater (km wide)',
                    '• Often fills with water → Crater Lake',
                    '• Example: Yellowstone, Crater Lake (USA)',
                    '• India: Lonar Lake (Maharashtra) - meteor + volcanic'
                ]
            },
            {
                title: 'Batholith & Laccolith',
                icon: '⛰️',
                points: [
                    '• Batholith: LARGEST intrusive body',
                    '• Irregular mass, exposed after erosion',
                    '• Example: Idaho Batholith, Peninsular India granites',
                    '• Laccolith: Dome-shaped, pushes up overlying rock',
                    '• Mushroom-like cross-section',
                    '• Example: Henry Mountains (Utah), suggested for some Indian hills'
                ]
            },
            {
                title: 'Dyke & Sill',
                icon: '📐',
                points: [
                    '• Dyke: VERTICAL/near-vertical intrusion',
                    '• Cuts ACROSS rock layers (discordant)',
                    '• Can form ridges after erosion',
                    '• Sill: HORIZONTAL intrusion',
                    '• Lies ALONG rock layers (concordant)',
                    '• Example: Palisades Sill (USA), Deccan dykes (India)'
                ]
            },
            {
                title: 'Lava Plateau',
                icon: '🏔️',
                points: [
                    '• Flat/gently undulating lava surface',
                    '• Formed by massive FISSURE eruptions',
                    '• Basaltic, fluid lava spreads wide',
                    '• Covers huge areas (thousands of km²)',
                    '• Example: Deccan Plateau (India)',
                    '• Also: Columbia Plateau (USA), Ethiopian Highlands'
                ]
            }
        ],
        
        // 4️⃣ DIAGRAM IDEAS
        diagrams: [
            {
                title: 'Volcano Types Comparison',
                type: 'comparison-chart',
                description: 'Three volcano profiles: Shield (broad, gentle), Cinder Cone (small, steep), Composite (tall, layered) with lava types'
            },
            {
                title: 'Intrusive Bodies',
                type: 'cross-section',
                description: 'Earth layers showing: Batholith (large, deep), Laccolith (dome), Lopolith (saucer), Dyke (vertical), Sill (horizontal)'
            },
            {
                title: 'Caldera Formation Stages',
                type: 'sequence',
                description: '3 stages: Active volcano → Massive eruption emptying chamber → Collapse into void = Caldera'
            },
            {
                title: 'Dyke vs Sill',
                type: 'diagram',
                description: 'Rock layers showing dyke cutting vertically through AND sill lying horizontally between layers'
            }
        ],
        
        // 5️⃣ QUICK FACTS
        quickFacts: [
            '🌋 Mauna Loa is world\'s LARGEST volcano (17 km base to summit!)',
            '💥 Yellowstone Caldera is 55 km x 72 km - a SUPERVOLCANO',
            '🇮🇳 Deccan Traps eruptions lasted ~30,000 years (66 MYA)',
            '🏔️ Mt. Everest has marine fossils because it was under sea!',
            '🌊 75% of world\'s volcanoes are in Pacific "Ring of Fire"',
            '⏰ Barren Island (Andaman) is India\'s only ACTIVE volcano',
            '🪨 Granite batholiths form many famous hills: Half Dome, Hampi rocks'
        ],
        
        // 6️⃣ UPSC TRAPS
        upscTraps: [
            {
                trap: 'Confusing Caldera and Crater',
                clarity: 'Crater = Small, at summit, from eruption (hundreds of meters) | Caldera = HUGE, from collapse after eruption (kilometers wide). Yellowstone is CALDERA, not crater.'
            },
            {
                trap: 'Mixing Laccolith and Lopolith',
                clarity: 'Both horizontal intrusions BUT: Laccolith = Dome UP (convex top) | Lopolith = Basin DOWN (concave top). Think: Laco = Lake belly (dome), Lopo = Low pool (basin).'
            },
            {
                trap: 'Thinking Deccan is shield volcano',
                clarity: 'Deccan Traps are FISSURE ERUPTIONS forming LAVA PLATEAU, not a shield volcano. Shield = single central vent (like Hawaii). Deccan had multiple fissure vents.'
            },
            {
                trap: 'Dyke = Dam',
                clarity: 'In geology, Dyke = vertical intrusive igneous body. This is different from engineering "dike/dyke" meaning embankment/dam. UPSC asks geological dyke!'
            }
        ],
        
        // 7️⃣ REVISION BOX
        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '• Extrusive: Shield (gentle), Cinder (steep small), Composite (layers)',
                '• Intrusive: Batholith (largest), Laccolith (dome up), Lopolith (basin down)',
                '• Dyke = Vertical, cuts across | Sill = Horizontal, along layers',
                '• Caldera = Collapsed magma chamber (huge) | Crater = Summit vent (small)',
                '• Deccan Traps = Lava plateau from fissure eruptions',
                '• Barren Island = India\'s only active volcano'
            ]
        },
        
        // 8️⃣ PYQs
        pyqs: [
            {
                year: 2022,
                question: 'Describe the different types of volcanoes on the basis of their shape.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What are intrusive volcanic landforms? Explain with examples.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Distinguish between a sill and a dyke.',
                type: 'Prelims'
            },
            {
                year: 2016,
                question: 'How was the Deccan Plateau formed? Discuss its volcanic origin.',
                type: 'Mains'
            },
            {
                year: 2014,
                question: 'What is a caldera? How is it different from a crater?',
                type: 'Mains'
            }
        ]
    }

];

// ============================================================
// EXPORT/MAKE AVAILABLE
// ============================================================

// For module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = landformsData;
}

// For browser global access
if (typeof window !== 'undefined') {
    window.landformsData = landformsData;
}

console.log('✅ Landforms Data Loaded:', landformsData.length, 'topics');
