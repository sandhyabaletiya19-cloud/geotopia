/**
 * VOLCANOES DATA MODULE - COMPLETE ENCYCLOPEDIA VERSION
 * Comprehensive educational content about volcanoes
 * Format: Universal concept data structure
 */

const volcanoesData = {
    meta: {
        id: 'volcanoes',
        name: 'Volcanoes',
        icon: '🌋',
        theme: 'volcanoes-theme',
        color: '#D32F2F',
        heroImage: 'https://images.unsplash.com/photo-1719409773583-e9c21a1b133f?w=1920&q=80',
        existingPagesLink: "../../volcanoes/volcanoes.html"
    },

    sections: {
        // =============================
        // SECTION 1: DEFINITION
        // =============================
        definition: {
            title: 'What is a Volcano?',

            hero: {
                image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1920&q=80',
                tagline: 'Windows into Earth\'s fiery interior'
            },

            content: {
                introduction: 'A volcano is an opening or rupture in Earth\'s crust through which molten rock (magma), volcanic ash, gases, and pyroclastic materials escape from a magma chamber below the surface. When magma reaches the surface, it is called lava. Volcanoes can form mountains, plateaus, islands, and even reshape entire landscapes. They occur at tectonic plate boundaries (convergent and divergent) and over mantle hotspots. Volcanic activity has shaped Earth\'s atmosphere, created fertile soils, formed new land, and both destroyed and supported human civilizations throughout history.',

                keyPoints: [
                    {
                        icon: '🌋',
                        label: 'Definition',
                        text: 'An opening in Earth\'s crust allowing magma, gases, and ash to escape from below',
                        detail: 'Volcanoes can be mountains, fissures, or underwater vents. The word comes from "Vulcan," the Roman god of fire. A volcano includes the vent, crater, magma chamber, and the mountain/structure built from erupted materials.'
                    },
                    {
                        icon: '🔥',
                        label: 'Magma vs Lava',
                        text: 'Magma = molten rock below surface | Lava = molten rock above surface',
                        detail: 'Magma is a complex mixture of molten rock, dissolved gases (H₂O, CO₂, SO₂), and mineral crystals at 700-1300°C. Once it erupts and loses gases, it becomes lava. Magma viscosity (controlled by silica content) determines eruption style: low silica = fluid = gentle; high silica = thick = explosive.'
                    },
                    {
                        icon: '📍',
                        label: 'Global Distribution',
                        text: 'Found at plate boundaries (75% in Ring of Fire) and hotspots',
                        detail: 'About 1,500 potentially active volcanoes exist on land. 75% are in the Pacific Ring of Fire (subduction zones). Others occur at divergent boundaries (Mid-Atlantic Ridge, East African Rift) and over hotspots (Hawaii, Yellowstone, Iceland). ~80% of eruptions occur underwater at mid-ocean ridges.'
                    },
                    {
                        icon: '⚠️',
                        label: 'Volcanic Hazards',
                        text: 'Lava flows, pyroclastic flows, ash fall, lahars, volcanic gases, tsunamis',
                        detail: 'Pyroclastic flows (800°C, 700 km/h) are deadliest. Lahars (volcanic mudflows) travel far from volcano. Ash can collapse roofs, damage engines, disrupt aviation globally (Eyjafjallajökull 2010). Volcanic gases (SO₂, CO₂, H₂S) can suffocate. ~500 million people live within 100 km of active volcanoes.'
                    },
                    {
                        icon: '🌍',
                        label: 'Tectonic Settings',
                        text: 'Convergent boundaries, divergent boundaries, and intraplate hotspots',
                        detail: 'At convergent boundaries: oceanic plate subducts, releases water, triggers melting → volcanic arcs (Andes, Japan, Indonesia). At divergent boundaries: plates separate, mantle rises and melts → rift volcanism (Iceland, East Africa). Hotspots: mantle plumes create volcanic chains as plates move over them (Hawaii, Yellowstone).'
                    },
                    {
                        icon: '🌱',
                        label: 'Benefits of Volcanoes',
                        text: 'Fertile soils, geothermal energy, mineral deposits, new land formation',
                        detail: 'Volcanic ash weathers into extremely fertile soil (Java, Sicily, Ethiopia). Geothermal energy powers Iceland (25% electricity), Philippines, New Zealand. Volcanic systems concentrate minerals: gold, silver, copper, sulfur. Volcanic islands create new habitats (Hawaii, Galápagos). Volcanic rocks are used in construction.'
                    },
                    {
                        icon: '📊',
                        label: 'Eruption Measurement',
                        text: 'Volcanic Explosivity Index (VEI) measures eruption magnitude (0-8 scale)',
                        detail: 'VEI is logarithmic: each level is 10× more powerful. VEI 0-1: Effusive (Kilauea). VEI 2-3: Explosive (Stromboli). VEI 4-5: Cataclysmic (Mt. St. Helens VEI 5). VEI 6: Colossal (Pinatubo 1991). VEI 7: Super-colossal (Tambora 1815). VEI 8: Mega-colossal (Yellowstone 640,000 years ago).'
                    },
                    {
                        icon: '🏛️',
                        label: 'Historical Impact',
                        text: 'Volcanoes have destroyed civilizations and altered global climate',
                        detail: 'Vesuvius destroyed Pompeii (79 AD). Tambora (1815) caused "Year Without Summer" globally. Krakatoa (1883) killed 36,000+, heard 4,800 km away. Thera/Santorini (~1600 BC) may have ended Minoan civilization. Toba (~74,000 years ago) nearly caused human extinction. Volcanic winters from large eruptions cool Earth 1-3°C for years.'
                    }
                ],

                comparison: {
                    title: 'Active vs Dormant vs Extinct Volcanoes - Complete Comparison',
                    features: [
                        {
                            feature: 'Definition',
                            active: 'Currently erupting or has erupted in recorded history with potential for future activity',
                            dormant: 'Not currently erupting but has erupted in Holocene (last 10,000 years) and could erupt again',
                            extinct: 'Has not erupted in Holocene and is not expected to erupt again based on geological evidence'
                        },
                        {
                            feature: 'Last Eruption',
                            active: 'Recent (within ~10,000 years or currently active)',
                            dormant: 'Thousands of years ago but magma system still exists',
                            extinct: 'Tens of thousands to millions of years ago'
                        },
                        {
                            feature: 'Magma Chamber',
                            active: 'Active magma supply, heat, gas emissions',
                            dormant: 'May have magma but no surface activity',
                            extinct: 'No magma supply, chamber solidified'
                        },
                        {
                            feature: 'Monitoring Signs',
                            active: 'Earthquakes, gas emissions, ground deformation, hot springs',
                            dormant: 'Minimal activity, possible fumaroles',
                            extinct: 'No volcanic activity detected'
                        },
                        {
                            feature: 'Risk Level',
                            active: 'High - continuous monitoring required',
                            dormant: 'Medium - can reactivate unexpectedly',
                            extinct: 'Low - but reclassification possible'
                        },
                        {
                            feature: 'Global Count',
                            active: '~500 erupted in historical time',
                            dormant: '~1,000 potentially active',
                            extinct: 'Thousands worldwide'
                        },
                        {
                            feature: 'Examples',
                            active: 'Kilauea (Hawaii), Stromboli (Italy), Sakurajima (Japan)',
                            dormant: 'Mt. Fuji (Japan), Mt. Rainier (USA), Teide (Canary Islands)',
                            extinct: 'Edinburgh Castle Rock, Shiprock (New Mexico), Diamond Head (Hawaii)'
                        },
                        {
                            feature: 'Can Reclassify?',
                            active: 'Yes - can become dormant if activity stops',
                            dormant: 'Yes - can become active (Pinatubo was dormant 500 years)',
                            extinct: 'Rarely - but has happened (Fourpeaked, Alaska, 2006)'
                        }
                    ]
                },

                diagram: {
                    type: 'svg',
                    path: 'assets/volcano-structure.svg',
                    alt: 'Cross-section of a volcano showing magma chamber, conduit, vent, crater, lava flows, and ash cloud'
                },

                funFacts: [
                    '🌍 There are approximately 1,500 potentially active volcanoes on land worldwide',
                    '🌊 About 80% of all volcanic eruptions occur underwater at mid-ocean ridges',
                    '🔥 The largest volcano on Earth is Mauna Loa (Hawaii) with a volume of 75,000 km³',
                    '💥 Krakatoa\'s 1883 eruption was heard 4,800 km away - the loudest sound in recorded history',
                    '🇮🇳 India\'s only active volcano is Barren Island in the Andaman & Nicobar Islands',
                    '🌡️ Lava temperature ranges from 700°C (rhyolite) to 1,200°C (basalt)',
                    '☁️ Mt. Pinatubo (1991) ejected 20 million tons of SO₂, cooling Earth by 0.5°C for 2 years',
                    '🏃 Pyroclastic flows can travel at 700 km/h with temperatures up to 1,000°C',
                    '🗻 Olympus Mons on Mars is the tallest volcano in the solar system at 21,900m - 2.5× Everest!',
                    '⏰ Stromboli (Italy) has been erupting almost continuously for over 2,000 years',
                    '🌋 The word "volcano" comes from Vulcano Island, named after Roman fire god Vulcan',
                    '💀 The "Death Zone" for pyroclastic flows extends 10-20 km from volcanic vents',
                    '🏝️ Hawaii adds about 42 acres of new land each year from volcanic activity',
                    '❄️ Tambora (1815) caused the "Year Without Summer" (1816) with global crop failures',
                    '🦎 Volcanic islands like Galápagos become hotspots for evolution of unique species',
                    '⚡ Volcanic lightning (dirty thunderstorms) occurs in ash clouds due to particle collision',
                    '🌿 Volcanic soil (andisol) is among the most fertile on Earth - supports dense populations in Java, Sicily',
                    '🔬 70% of Earth\'s surface was created by volcanic activity over geological time',
                    '🏔️ Mt. Erebus (Antarctica) has a persistent lava lake - one of only ~5 on Earth',
                    '📡 Modern volcano monitoring uses GPS, satellites, seismometers, drones, and gas sensors'
                ]
            }
        },

        // =============================
        // SECTION 2: TYPES
        // =============================
        types: {
            title: 'Types of Volcanoes',

            hero: {
                image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80',
                tagline: 'Shape reveals eruption style and magma composition'
            },

            renderAs: 'mindmap',

            introduction: 'Volcanoes are classified by their shape, size, and eruption style - all determined by magma composition (silica content), gas content, and tectonic setting. The four main types are: Shield (broad and gentle), Stratovolcano/Composite (steep and dangerous), Cinder Cone (small and steep), and Caldera (massive collapse craters). Understanding these types helps predict eruption behavior and hazards.',

            branches: [
                {
                    id: 'shield',
                    name: 'Shield Volcanoes',
                    icon: '🛡️',
                    color: '#e74c3c',

                    definition: 'Shield volcanoes are broad, gently sloping volcanoes built almost entirely from fluid basaltic lava flows. Their shape resembles a warrior\'s shield lying on the ground. They form from low-viscosity (runny) magma with low silica content (45-52%) that allows gases to escape easily, resulting in non-explosive, effusive eruptions. Shield volcanoes are the largest volcanoes by volume on Earth and in the solar system.',

                    formation: {
                        title: 'How Shield Volcanoes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Mantle hotspot or rift zone generates low-silica basaltic magma at 50-100 km depth', icon: '🔥' },
                            { step: 2, text: 'Low-viscosity magma (similar to motor oil) rises quickly through conduits', icon: '⬆️' },
                            { step: 3, text: 'Magma reaches surface with most gases already escaped - low explosivity', icon: '💨' },
                            { step: 4, text: 'Fluid lava erupts gently from summit vents or flank fissures', icon: '🌋' },
                            { step: 5, text: 'Lava flows spread far (tens of km) before cooling due to low viscosity', icon: '🌊' },
                            { step: 6, text: 'Thin layers of basalt accumulate over thousands of eruptions', icon: '📚' },
                            { step: 7, text: 'Gentle slopes (2-10°) develop from overlapping flow sheets', icon: '📐' },
                            { step: 8, text: 'Summit caldera may form from collapse after large eruptions', icon: '🕳️' },
                            { step: 9, text: 'Process continues for millions of years building massive structure', icon: '⏳' },
                            { step: 10, text: 'Final shield can exceed 100 km diameter and 9 km height (base to summit)', icon: '🛡️' }
                        ],
                        animation: 'shield-volcano-animation.mp4'
                    },

                    characteristics: [
                        'Gentle slopes: 2-10° angle (appears nearly flat from distance)',
                        'Very wide base: diameter can exceed 100 km',
                        'Largest volcanoes by volume on Earth',
                        'Built from thousands of thin basaltic lava flows',
                        'Non-explosive, effusive eruptions (Hawaiian-type)',
                        'Low-silica basaltic magma (45-52% SiO₂)',
                        'Lava flows can travel 50+ km from vent',
                        'Summit calderas common (collapse craters)',
                        'Rift zones on flanks where fissure eruptions occur',
                        'Lava tubes form channels for long-distance flow',
                        'Pahoehoe (smooth) and aa (rough) lava textures',
                        'Relatively safe to observe (predictable eruptions)',
                        'Form at hotspots and divergent boundaries',
                        'Can grow from seafloor to above sea level (oceanic islands)'
                    ],

                    examples: [
                        {
                            name: 'Mauna Loa',
                            location: 'Hawaii, USA',
                            stats: 'Height: 4,169m above sea level (9,170m from seafloor) | Volume: 75,000 km³ | Last eruption: 2022',
                            link: '/encyclopedia/volcanoes/mauna-loa',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Largest active volcano on Earth', 'Part of Hawaiian hotspot chain', 'Erupts every 6 years on average']
                        },
                        {
                            name: 'Mauna Kea',
                            location: 'Hawaii, USA',
                            stats: 'Height: 4,207m above sea level (10,210m from seafloor) | Status: Dormant',
                            link: '/encyclopedia/volcanoes/mauna-kea',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Tallest mountain base-to-peak on Earth', 'World-class astronomical observatory site', 'Sacred to Native Hawaiians']
                        },
                        {
                            name: 'Kilauea',
                            location: 'Hawaii, USA',
                            stats: 'Height: 1,247m | Status: One of most active volcanoes on Earth',
                            link: '/encyclopedia/volcanoes/kilauea',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Erupted almost continuously 1983-2018', 'Halemaʻumaʻu lava lake', 'Hawaii Volcanoes National Park']
                        }
                    ],

                    hazards: ['Lava flows (slow-moving but destructive)', 'Laze (lava haze) at ocean entry', 'Volcanic gases (SO₂, CO₂)', 'Ground fractures', 'Rare explosive events when water enters vent'],

                    globalDistribution: {
                        regions: ['Hawaii (hotspot)', 'Iceland (divergent + hotspot)', 'Galápagos (hotspot)', 'East African Rift'],
                        percentage: '~15% of all volcanoes'
                    }
                },

                {
                    id: 'composite',
                    name: 'Composite/Stratovolcanoes',
                    icon: '🗻',
                    color: '#c0392b',

                    definition: 'Composite volcanoes (stratovolcanoes) are tall, steep-sided, symmetrical cones built from alternating layers of lava flows, volcanic ash, pumice, and pyroclastic deposits. They are formed from intermediate to high-silica magma (andesite, dacite, rhyolite) which is viscous and gas-rich, leading to explosive eruptions. These are the most dangerous and iconic volcanoes, responsible for most volcanic disasters in human history.',

                    formation: {
                        title: 'How Composite Volcanoes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Oceanic plate subducts beneath continental/oceanic plate at convergent boundary', icon: '⬇️' },
                            { step: 2, text: 'Water released from subducting plate lowers melting point of mantle wedge', icon: '💧' },
                            { step: 3, text: 'Intermediate-silica magma (andesite) forms - more viscous than basalt', icon: '🔥' },
                            { step: 4, text: 'Viscous magma rises slowly, trapping dissolved gases (H₂O, CO₂, SO₂)', icon: '⬆️' },
                            { step: 5, text: 'Pressure builds in magma chamber as gases cannot escape easily', icon: '💪' },
                            { step: 6, text: 'Explosive eruption: gases expand rapidly, fragmenting magma into ash and pumice', icon: '💥' },
                            { step: 7, text: 'Pyroclastic materials (ash, lapilli, bombs) deposited around vent', icon: '☁️' },
                            { step: 8, text: 'Quieter phase follows: viscous lava flows down flanks, solidifying as thick layers', icon: '🌋' },
                            { step: 9, text: 'Alternating explosive/effusive phases build layered structure (strato = layers)', icon: '📚' },
                            { step: 10, text: 'Steep cone forms (30-35°) - classic volcanic mountain shape', icon: '🗻' }
                        ],
                        animation: 'composite-volcano-animation.mp4'
                    },

                    characteristics: [
                        'Steep slopes: 30-35° angle (classic cone shape)',
                        'Tall, symmetrical, visually striking peaks',
                        'Built from alternating layers of lava and pyroclastics',
                        'Intermediate to high-silica magma (52-70% SiO₂)',
                        'Highly explosive eruptions (Plinian, Vulcanian, Strombolian)',
                        'Viscous lava that doesn\'t flow far',
                        'Produce deadly pyroclastic flows and lahars',
                        'Central crater at summit, may have multiple vents',
                        'Can collapse to form calderas after massive eruptions',
                        'Often snow-capped at high elevations',
                        'Located primarily at subduction zones',
                        'Responsible for most volcanic disasters',
                        'Eruptions can affect global climate',
                        'May have parasitic cones on flanks'
                    ],

                    examples: [
                        {
                            name: 'Mt. Fuji',
                            location: 'Japan',
                            stats: 'Height: 3,776m | Last eruption: 1707 | Status: Active',
                            link: '/encyclopedia/volcanoes/fuji',
                            image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
                            notableFeatures: ['Japan\'s highest peak and national symbol', 'UNESCO World Heritage Site', 'Perfect symmetrical cone']
                        },
                        {
                            name: 'Mt. Vesuvius',
                            location: 'Italy',
                            stats: 'Height: 1,281m | Last eruption: 1944 | Status: Active',
                            link: '/encyclopedia/volcanoes/vesuvius',
                            image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
                            notableFeatures: ['Destroyed Pompeii and Herculaneum in 79 AD', '3 million people live in danger zone', 'Only active volcano in mainland Europe']
                        },
                        {
                            name: 'Mt. St. Helens',
                            location: 'USA (Washington)',
                            stats: 'Height: 2,549m (reduced from 2,950m in 1980) | Status: Active',
                            link: '/encyclopedia/volcanoes/st-helens',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['1980 lateral blast - deadliest US eruption', 'Lost 400m of summit', 'Best-studied eruption in history']
                        }
                    ],

                    hazards: ['Pyroclastic flows (most deadly - 800°C, 700 km/h)', 'Lahars (volcanic mudflows)', 'Ash fall (roof collapse, aviation)', 'Lava flows', 'Volcanic bombs', 'Lateral blasts', 'Tsunamis (if coastal)', 'Climate effects'],

                    globalDistribution: {
                        regions: ['Pacific Ring of Fire (75%)', 'Mediterranean', 'Indonesia', 'Japan', 'Andes', 'Cascades', 'Central America'],
                        percentage: '~60% of all land volcanoes'
                    }
                },

                {
                    id: 'cinder',
                    name: 'Cinder Cone Volcanoes',
                    icon: '🔺',
                    color: '#e67e22',

                    definition: 'Cinder cone volcanoes (scoria cones) are the smallest and simplest type of volcano, built from volcanic fragments (cinders, scoria, bombs) that accumulate around a single vent. They form from gas-rich basaltic to andesitic magma that erupts in moderately explosive Strombolian-type eruptions, ejecting glowing fragments that fall and pile up around the vent. Most cinder cones are monogenetic - they erupt once and never again.',

                    formation: {
                        title: 'How Cinder Cones Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Basaltic or andesitic magma with moderate gas content rises to surface', icon: '⬆️' },
                            { step: 2, text: 'Gas bubbles expand rapidly as pressure decreases near surface', icon: '🫧' },
                            { step: 3, text: 'Strombolian eruptions: discrete explosions every few seconds to minutes', icon: '💥' },
                            { step: 4, text: 'Lava fragments (scoria, cinders, bombs) ejected 50-300m into air', icon: '🎆' },
                            { step: 5, text: 'Fragments cool during flight, landing as solid or semi-solid pieces', icon: '🌡️' },
                            { step: 6, text: 'Material accumulates around vent at angle of repose (30-40°)', icon: '📐' },
                            { step: 7, text: 'Steep-sided cone grows rapidly - can form in days to years', icon: '⛰️' },
                            { step: 8, text: 'Bowl-shaped crater forms at summit from explosions', icon: '🥣' },
                            { step: 9, text: 'Lava may break through base, flowing from cone\'s base', icon: '🌋' },
                            { step: 10, text: 'Eruption ends (usually after days to years) - cone becomes extinct', icon: '✅' }
                        ],
                        animation: 'cinder-cone-animation.mp4'
                    },

                    characteristics: [
                        'Smallest volcano type: typically 30-300m tall',
                        'Very steep slopes: 30-40° (angle of repose)',
                        'Simple cone shape with bowl-shaped summit crater',
                        'Built entirely from loose pyroclastic fragments',
                        'Single vent structure',
                        'Short-lived: days to few years of activity',
                        'Monogenetic: usually erupt only once',
                        'Often form on flanks of larger volcanoes',
                        'Strombolian eruption style (fire-fountain)',
                        'Lava flows may break out at base',
                        'No layered structure (unlike stratovolcanoes)',
                        'Easily eroded due to loose material',
                        'Can form in groups (volcanic fields)',
                        'Relatively low hazard (predictable, localized)'
                    ],

                    examples: [
                        {
                            name: 'Parícutin',
                            location: 'Mexico (Michoacán)',
                            stats: 'Height: 424m (grew from cornfield 1943-1952) | Status: Extinct',
                            link: '/encyclopedia/volcanoes/paricutin',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Only volcano witnessed from birth to extinction', 'Grew 336m in first year', 'Buried two villages']
                        },
                        {
                            name: 'Sunset Crater',
                            location: 'USA (Arizona)',
                            stats: 'Height: 300m | Eruption: ~1085 AD | Status: Extinct',
                            link: '/encyclopedia/volcanoes/sunset-crater',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Youngest volcano in Colorado Plateau', 'Red-tinted summit', 'National Monument']
                        }
                    ],

                    hazards: ['Lava flows (usually from base)', 'Falling volcanic bombs and blocks', 'Ash fall (localized)', 'Fires from hot fragments', 'Limited area of impact'],

                    globalDistribution: {
                        regions: ['Found worldwide', 'Common in volcanic fields (San Francisco Volcanic Field, Michoacán-Guanajuato)', 'Often parasitic on larger volcanoes'],
                        percentage: '~25% of all volcanoes (most numerous type)'
                    }
                },

                {
                    id: 'caldera',
                    name: 'Caldera Volcanoes',
                    icon: '🕳️',
                    color: '#9b59b6',

                    definition: 'Calderas are large volcanic depressions (1-50+ km diameter) formed when a volcano\'s magma chamber empties rapidly during a cataclysmic eruption, causing the overlying rock to collapse inward. Unlike craters (formed by explosion), calderas form by collapse. They represent Earth\'s most powerful volcanic systems, capable of supereruptions (VEI 8) that can affect global climate and threaten civilizations. Many calderas later fill with lakes or develop resurgent domes.',

                    formation: {
                        title: 'How Calderas Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Massive magma chamber accumulates at shallow depth (5-15 km) over thousands of years', icon: '🎈' },
                            { step: 2, text: 'High-silica rhyolitic magma becomes extremely viscous and gas-rich', icon: '💨' },
                            { step: 3, text: 'Pressure builds to critical point - chamber roof begins to fracture', icon: '⚡' },
                            { step: 4, text: 'Catastrophic eruption begins - VEI 6-8, ejecting hundreds to thousands of km³', icon: '💥' },
                            { step: 5, text: 'Pyroclastic flows spread for tens to hundreds of kilometers', icon: '🔥' },
                            { step: 6, text: 'Magma chamber rapidly empties (hours to days)', icon: '⬇️' },
                            { step: 7, text: 'Roof rock loses support and collapses into evacuated chamber', icon: '🕳️' },
                            { step: 8, text: 'Circular depression (caldera) forms - 1-80+ km diameter', icon: '⭕' },
                            { step: 9, text: 'Ring fractures around caldera may host future eruptions', icon: '🔄' },
                            { step: 10, text: 'Caldera may fill with water (crater lake) or develop resurgent domes', icon: '💧' }
                        ],
                        animation: 'caldera-formation-animation.mp4'
                    },

                    characteristics: [
                        'Large circular/oval depression: 1-80+ km diameter',
                        'Formed by collapse, not explosion',
                        'Steep inward-facing walls',
                        'Often filled with water (caldera lakes)',
                        'High-silica rhyolitic magma systems',
                        'Site of most powerful eruptions (VEI 7-8)',
                        'Resurgent domes may grow inside',
                        'Hot springs, geysers, fumaroles common',
                        'Multiple eruption cycles over millennia',
                        'Ring faults/fractures around perimeter',
                        'Can produce pyroclastic flows covering thousands of km²',
                        'Eruptions can cause volcanic winters',
                        'Long repose periods (thousands to millions of years)',
                        'Active magma systems beneath many calderas'
                    ],

                    examples: [
                        {
                            name: 'Yellowstone Caldera',
                            location: 'USA (Wyoming)',
                            stats: 'Size: 72×55 km | Last supereruption: 640,000 years ago | Status: Active',
                            link: '/encyclopedia/volcanoes/yellowstone',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['One of world\'s largest active calderas', 'Supervolcano (VEI 8 capability)', '10,000+ thermal features including Old Faithful']
                        },
                        {
                            name: 'Crater Lake (Mt. Mazama)',
                            location: 'USA (Oregon)',
                            stats: 'Size: 8×10 km | Caldera formed: 7,700 years ago | Depth: 594m (deepest US lake)',
                            link: '/encyclopedia/volcanoes/crater-lake',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Deepest lake in USA', 'Wizard Island (volcanic cone inside)', 'Clearest water in world']
                        },
                        {
                            name: 'Santorini (Thera)',
                            location: 'Greece',
                            stats: 'Size: 12×7 km | Major eruption: ~1600 BC | Status: Active',
                            link: '/encyclopedia/volcanoes/santorini',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: ['Minoan eruption may have ended Bronze Age civilization', 'Possible origin of Atlantis legend', 'Nea Kameni dome still growing']
                        }
                    ],

                    hazards: ['Supereruptions (global catastrophe potential)', 'Pyroclastic flows (hundreds of km)', 'Volcanic winter (years of cooling)', 'Tsunamis (if coastal)', 'Lahars', 'Ash fall (continental scale)', 'Earthquakes', 'Resurgent eruptions'],

                    globalDistribution: {
                        regions: ['Yellowstone (USA)', 'Taupo (New Zealand)', 'Toba (Indonesia)', 'Campi Flegrei (Italy)', 'Long Valley (USA)', 'Aira (Japan)'],
                        percentage: '<1% of volcanoes but most dangerous'
                    }
                },

                {
                    id: 'lava-dome',
                    name: 'Lava Domes (Volcanic Domes)',
                    icon: '🔵',
                    color: '#3498db',

                    definition: 'Lava domes are bulbous mounds formed when highly viscous lava (dacite, rhyolite) is too thick to flow away from the vent and instead piles up. They grow by expansion from within as new magma pushes into the dome\'s interior. Lava domes are extremely dangerous because they can collapse suddenly, generating deadly pyroclastic flows. They often form within craters of stratovolcanoes after explosive eruptions.',

                    formation: {
                        title: 'How Lava Domes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'High-silica magma (dacite, rhyolite) with most gas already expelled reaches surface', icon: '⬆️' },
                            { step: 2, text: 'Extremely viscous lava (like toothpaste) cannot flow - piles up over vent', icon: '🍯' },
                            { step: 3, text: 'New lava pushes from inside, inflating the dome', icon: '🎈' },
                            { step: 4, text: 'Outer surface cools and solidifies while interior remains hot', icon: '🌡️' },
                            { step: 5, text: 'Dome grows upward and outward - can reach 100s of meters high', icon: '📈' },
                            { step: 6, text: 'Surface cracks from expansion, creating spines and lobes', icon: '🔱' },
                            { step: 7, text: 'Unstable sections may collapse, triggering pyroclastic flows', icon: '💥' },
                            { step: 8, text: 'Growth continues episodically over months to decades', icon: '⏳' }
                        ],
                        animation: 'lava-dome-animation.mp4'
                    },

                    characteristics: [
                        'Bulbous, dome-shaped mounds',
                        'Steep sides due to high viscosity',
                        'Composed of dacite or rhyolite',
                        'Grow from interior expansion',
                        'Rough, blocky surface texture',
                        'Can form spines and lobes',
                        'Often grow inside craters',
                        'Extremely dangerous when collapsing',
                        'Slow growth (meters per day)',
                        'May grow for years to decades'
                    ],

                    examples: [
                        {
                            name: 'Mt. St. Helens Dome',
                            location: 'USA (Washington)',
                            stats: 'Growing inside 1980 crater | Multiple growth phases 1980-1986, 2004-2008',
                            link: '/encyclopedia/volcanoes/st-helens',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80'
                        },
                        {
                            name: 'Soufrière Hills',
                            location: 'Montserrat (Caribbean)',
                            stats: 'Active dome growth since 1995 | Destroyed capital Plymouth',
                            link: '/encyclopedia/volcanoes/soufriere-hills',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80'
                        }
                    ],

                    hazards: ['Dome collapse pyroclastic flows', 'Explosions', 'Rockfall', 'Volcanic gases'],

                    globalDistribution: {
                        regions: ['Usually within stratovolcano craters', 'Cascades', 'Japan', 'Indonesia', 'Caribbean'],
                        percentage: 'Not counted separately - part of stratovolcano systems'
                    }
                },

                {
                    id: 'fissure',
                    name: 'Fissure Volcanoes (Volcanic Rifts)',
                    icon: '➖',
                    color: '#1abc9c',

                    definition: 'Fissure volcanoes erupt from long cracks (fissures) in Earth\'s crust rather than central vents. They produce massive outpourings of fluid basaltic lava that spread over vast areas, creating lava plateaus (flood basalts). The largest volcanic eruptions in Earth\'s history were fissure eruptions. They occur at divergent plate boundaries and over hotspots.',

                    formation: {
                        title: 'How Fissure Eruptions Occur',
                        steps: [
                            { step: 1, text: 'Extensional forces pull Earth\'s crust apart (rifting)', icon: '⬅️➡️' },
                            { step: 2, text: 'Linear fractures (fissures) open in crust - can be km long', icon: '📏' },
                            { step: 3, text: 'Low-viscosity basaltic magma rises through fissure', icon: '⬆️' },
                            { step: 4, text: 'Lava erupts along entire length of fissure ("curtain of fire")', icon: '🔥' },
                            { step: 5, text: 'Fluid lava flows spread 10-100+ km in all directions', icon: '🌊' },
                            { step: 6, text: 'Multiple flows stack to build lava plateaus (flood basalts)', icon: '📚' }
                        ]
                    },

                    characteristics: [
                        'Linear vent system (kilometers long)',
                        'Extremely fluid basaltic lava',
                        'High eruption rates (km³ per day possible)',
                        'Creates flat lava plateaus',
                        'Low explosivity, high volume',
                        '"Curtain of fire" eruptions',
                        'Can produce enormous volumes (millions of km³)',
                        'Associated with continental rifting',
                        'May have spatter cones along fissure'
                    ],

                    examples: [
                        {
                            name: 'Lakagígar (Laki)',
                            location: 'Iceland',
                            stats: '1783-1784 eruption: 27 km fissure, 14 km³ lava, killed 25% of Iceland\'s population',
                            link: '/encyclopedia/volcanoes/laki'
                        },
                        {
                            name: 'Deccan Traps',
                            location: 'India',
                            stats: '66 million years ago: 500,000 km² covered, possibly contributed to dinosaur extinction',
                            link: '/encyclopedia/volcanoes/deccan-traps'
                        },
                        {
                            name: 'Columbia River Basalts',
                            location: 'USA (Pacific Northwest)',
                            stats: '17-6 million years ago: 175,000 km² covered, individual flows reached 600 km',
                            link: '/encyclopedia/volcanoes/columbia-basalts'
                        }
                    ],

                    hazards: ['Massive lava flows', 'Volcanic gases (SO₂) causing acid rain and climate cooling', 'Regional devastation'],

                    globalDistribution: {
                        regions: ['Iceland (Mid-Atlantic Ridge)', 'East African Rift', 'Hawaii rift zones', 'Historic flood basalt provinces worldwide'],
                        percentage: 'Rare but produce largest eruptions'
                    }
                }
            ],

            comparisonTable: {
                title: 'Quick Comparison of All Volcano Types',
                headers: ['Type', 'Shape', 'Size', 'Magma Type', 'Eruption Style', 'Hazard Level', 'Example'],
                rows: [
                    ['Shield 🛡️', 'Broad, gentle slopes', 'Very large (100+ km wide)', 'Basaltic (low silica)', 'Effusive, gentle', 'Low-Medium', 'Mauna Loa'],
                    ['Composite 🗻', 'Steep cone', 'Large (2-3 km high)', 'Andesitic (medium silica)', 'Explosive', 'Very High', 'Mt. Fuji'],
                    ['Cinder Cone 🔺', 'Small, steep cone', 'Small (30-300m)', 'Basaltic-Andesitic', 'Strombolian', 'Low', 'Parícutin'],
                    ['Caldera 🕳️', 'Large depression', 'Huge (1-80+ km)', 'Rhyolitic (high silica)', 'Cataclysmic', 'Extreme', 'Yellowstone'],
                    ['Lava Dome 🔵', 'Bulbous mound', 'Small-Medium', 'Dacitic-Rhyolitic', 'Effusive + collapse', 'High', 'Mt. St. Helens dome'],
                    ['Fissure ➖', 'Linear/plateau', 'Variable', 'Basaltic', 'Effusive, high volume', 'Medium-High', 'Laki (Iceland)']
                ]
            },

            eruptionStyles: {
                title: 'Volcanic Eruption Styles',
                styles: [
                    {
                        name: 'Hawaiian',
                        description: 'Gentle effusive eruptions of fluid basaltic lava, lava fountains, lava lakes',
                        VEI: '0-1',
                        example: 'Kilauea',
                        characteristics: ['Low explosivity', 'Lava fountains', 'Fluid flows', 'Fire fountains']
                    },
                    {
                        name: 'Strombolian',
                        description: 'Mild explosive bursts every few minutes, incandescent fragments, small lava flows',
                        VEI: '1-2',
                        example: 'Stromboli',
                        characteristics: ['Rhythmic explosions', 'Glowing ejecta', 'Cinder cones']
                    },
                    {
                        name: 'Vulcanian',
                        description: 'Short violent explosions, dense ash clouds, volcanic bombs, viscous lava',
                        VEI: '2-3',
                        example: 'Sakurajima',
                        characteristics: ['Cannon-like blasts', 'Cauliflower clouds', 'Blocks and bombs']
                    },
                    {
                        name: 'Plinian',
                        description: 'Massive sustained eruption columns (10-45 km), pyroclastic flows, widespread ash',
                        VEI: '4-6+',
                        example: 'Vesuvius 79 AD, Pinatubo 1991',
                        characteristics: ['Eruption columns', 'Pyroclastic flows', 'Global effects']
                    },
                    {
                        name: 'Ultra-Plinian/Supervolcanic',
                        description: 'Catastrophic caldera-forming eruptions, 100s-1000s km³ ejected, global climate impact',
                        VEI: '7-8',
                        example: 'Toba 74,000 BP, Yellowstone',
                        characteristics: ['Caldera collapse', 'Volcanic winter', 'Extinction-level']
                    }
                ]
            }
        },

        // =============================
        // SECTION 3: FORMATION
        // =============================
        formation: {
            title: 'How Volcanoes Form',

            hero: {
                image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1920&q=80',
                tagline: 'The journey of magma from mantle to eruption'
            },

            renderAs: 'timeline',

            introduction: 'Volcanoes form when molten rock (magma) from Earth\'s interior finds a pathway to the surface. This occurs in three main tectonic settings: convergent boundaries (subduction zones), divergent boundaries (mid-ocean ridges and rifts), and intraplate hotspots (mantle plumes). Understanding where and how magma generates, rises, and erupts is key to predicting volcanic hazards and understanding Earth\'s dynamic interior.',

            tectonicSettings: {
                title: 'Where Volcanoes Form - Tectonic Settings',
                settings: [
                    {
                        name: 'Convergent Boundaries (Subduction Zones)',
                        percentage: '~60% of active volcanoes',
                        mechanism: 'Oceanic plate subducts beneath another plate, releasing water that triggers melting in mantle wedge',
                        magmaType: 'Andesitic to rhyolitic (intermediate to high silica)',
                        volcanoType: 'Stratovolcanoes (explosive)',
                        examples: ['Pacific Ring of Fire', 'Andes', 'Cascades', 'Japan', 'Indonesia', 'Philippines'],
                        diagram: 'subduction-volcano.svg'
                    },
                    {
                        name: 'Divergent Boundaries',
                        percentage: '~15% of active land volcanoes (80% of all eruptions underwater)',
                        mechanism: 'Plates pull apart, mantle rises and decompresses, causing partial melting',
                        magmaType: 'Basaltic (low silica)',
                        volcanoType: 'Shield volcanoes, fissure eruptions',
                        examples: ['Mid-Atlantic Ridge (Iceland)', 'East African Rift', 'Red Sea Rift'],
                        diagram: 'divergent-volcano.svg'
                    },
                    {
                        name: 'Hotspots (Mantle Plumes)',
                        percentage: '~5% of active volcanoes',
                        mechanism: 'Stationary mantle plume provides heat, plate moves over it creating volcanic chain',
                        magmaType: 'Basaltic (usually)',
                        volcanoType: 'Shield volcanoes, volcanic island chains',
                        examples: ['Hawaii', 'Yellowstone', 'Galápagos', 'Réunion', 'Iceland (ridge + hotspot)'],
                        diagram: 'hotspot-volcano.svg'
                    }
                ]
            },

            stages: [
                {
                    stage: 1,
                    title: 'Magma Generation - Melting in the Mantle',
                    timeframe: 'At 50-200 km depth',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Rock in Earth\'s mantle is normally solid despite high temperatures (1000-1500°C) due to immense pressure',
                        'Three mechanisms can trigger partial melting: decompression (pressure release), flux melting (water addition), or heat transfer',
                        'At subduction zones: Water released from descending oceanic plate lowers melting point of overlying mantle wedge → generates andesitic magma',
                        'At divergent boundaries: Mantle rises as plates separate, pressure drops, partial melting occurs → generates basaltic magma',
                        'At hotspots: Mantle plume provides extra heat, causing partial melting of overlying mantle → generates basaltic magma',
                        'Only 1-30% of rock actually melts (partial melting) - composition depends on % melted and source rock',
                        'Magma is less dense than surrounding solid rock (2.4-2.8 g/cm³ vs 3.0-3.3 g/cm³)'
                    ],

                    geologicalProcess: 'Partial melting of mantle peridotite (olivine + pyroxene) produces basaltic magma; at subduction zones, melting of subducted sediments and altered oceanic crust produces more silica-rich magmas',

                    keyFeatures: [
                        'Depth: 50-200 km below surface',
                        'Temperature: 1000-1500°C',
                        'Pressure: 1.5-6 GPa (15,000-60,000 atmospheres)',
                        'Melt fraction: typically 1-30%',
                        'Magma density: 2.4-2.8 g/cm³'
                    ]
                },
                {
                    stage: 2,
                    title: 'Magma Rises - Buoyant Ascent Through Crust',
                    timeframe: 'From mantle to shallow crust (years to thousands of years)',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Buoyant magma rises because it is less dense than surrounding solid rock',
                        'Magma ascends through fractures, faults, and zones of weakness in lithosphere',
                        'Rising magma can stall at density contrasts (crust-mantle boundary, within crust)',
                        'Magma collects in reservoirs/chambers at 5-15 km depth where crust density matches magma density',
                        'In chamber, magma evolves: crystals settle, composition changes, gases concentrate',
                        'Fractional crystallization removes dense minerals, increasing silica content over time',
                        'Chamber may be fed by multiple pulses of magma from below over centuries',
                        'Pressure increases as more magma arrives and gases exsolve from cooling magma',
                        'Country rock above chamber may deform, bulge, or fracture as pressure builds'
                    ],

                    geologicalProcess: 'Buoyancy-driven diapirism and dike propagation; magma follows paths of least resistance through fractured rock',

                    keyFeatures: [
                        'Rise rate: meters to kilometers per year',
                        'Chamber depth: typically 5-15 km',
                        'Chamber size: 1-1,000 km³',
                        'Magma evolution: basalt → andesite → dacite → rhyolite',
                        'Monitoring: earthquakes, ground deformation, gas emissions'
                    ]
                },
                {
                    stage: 3,
                    title: 'Pre-Eruption - Pressure Builds and Warning Signs',
                    timeframe: 'Days to months before eruption',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Magma pushes toward surface as pressure overcomes rock strength',
                        'Ground surface inflates and tilts (detected by GPS and tiltmeters)',
                        'Earthquake swarms occur as rock fractures ahead of rising magma',
                        'Volcanic gases (SO₂, CO₂, H₂S) increase as magma degasses',
                        'Temperature of hot springs and fumaroles may increase',
                        'Harmonic tremor (continuous seismic shaking) indicates magma movement in conduit',
                        'Small steam explosions (phreatic eruptions) may occur if groundwater heated',
                        'Existing crater lakes may heat up, change color, or drain',
                        'These warning signs allow evacuation - modern monitoring saves lives'
                    ],

                    geologicalProcess: 'Magma fracturing rock and forcing open conduit pathway; volatile exsolution increasing internal pressure',

                    keyFeatures: [
                        'Ground inflation: cm to meters',
                        'Earthquake swarms: hundreds to thousands of events',
                        'SO₂ emissions: 100 to 10,000+ tons/day',
                        'Warning period: days to months (but not always)',
                        'Monitoring tools: seismometers, GPS, gas sensors, satellites, drones'
                    ]
                },
                {
                    stage: 4,
                    title: 'Eruption - Magma Reaches the Surface',
                    timeframe: 'Minutes to years (duration varies greatly)',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Eruption begins when magma pressure exceeds strength of overlying rock',
                        'Eruption style depends on magma viscosity and gas content:',
                        '• Low viscosity + low gas = effusive (lava flows) - Hawaiian style',
                        '• Low viscosity + high gas = fire fountains - Strombolian style',
                        '• High viscosity + high gas = explosive (ash, pyroclastic flows) - Plinian style',
                        'Explosive eruptions: gas bubbles expand rapidly, fragmenting magma into ash and pumice',
                        'Eruption column can rise 10-45 km into stratosphere (Plinian eruptions)',
                        'Pyroclastic flows (800°C, 700 km/h) race down volcano flanks',
                        'Lava flows (basaltic) can travel tens of km; viscous lava (andesitic/rhyolitic) flows shorter distances',
                        'Volcanic bombs, blocks, and lapilli ejected around vent',
                        'Eruption deposits layers that build volcano structure over time',
                        'Eruptions can last minutes (single explosion) to years (Kilauea, Stromboli)'
                    ],

                    geologicalProcess: 'Volatile-driven fragmentation (explosive) or fluid extrusion (effusive); magma degasses as pressure drops',

                    keyFeatures: [
                        'Lava temperature: 700-1200°C',
                        'Eruption column height: 1-45 km',
                        'Pyroclastic flow speed: 100-700 km/h',
                        'Lava flow speed: 1-30 km/h (basalt) to <1 km/h (rhyolite)',
                        'Ash dispersal: local to global',
                        'VEI scale: 0 (gentle) to 8 (supervolcanic)'
                    ]
                },
                {
                    stage: 5,
                    title: 'Post-Eruption - Volcano Building and Dormancy',
                    timeframe: 'Years to millions of years',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Erupted materials accumulate, building or reshaping the volcanic edifice',
                        'Lava flows add layers to shield volcano slopes',
                        'Ash and pyroclastic deposits steepen stratovolcano flanks',
                        'Crater or caldera may form from explosion or collapse',
                        'Lava domes may grow within craters over months to years',
                        'Hydrothermal systems develop: hot springs, fumaroles, geysers',
                        'Weathering and erosion begin modifying volcanic landforms immediately',
                        'Volcanic soils (andisols) form - extremely fertile for agriculture',
                        'Volcano enters dormant phase - magma chamber slowly refills',
                        'Cycle repeats: eruptions every years to centuries depending on volcano type',
                        'Some volcanoes become extinct when magma supply ends (plate moves off hotspot)'
                    ],

                    geologicalProcess: 'Volcanic construction, weathering, erosion, magma chamber recharge, hydrothermal alteration',

                    keyFeatures: [
                        'Repose period: years to thousands of years',
                        'Edifice growth: mm to m per eruption cycle',
                        'Soil formation: decades to centuries',
                        'Erosion rate: depends on climate',
                        'Hydrothermal lifespan: thousands to millions of years'
                    ]
                }
            ],

            terminology: {
                title: '📖 Essential Volcanic Terms',
                terms: [
                    {
                        term: 'Magma',
                        pronunciation: '(MAG-muh)',
                        definition: 'Molten rock beneath Earth\'s surface, containing dissolved gases, mineral crystals, and liquid rock. Composition ranges from basaltic (45-52% silica) to rhyolitic (>70% silica), controlling viscosity and eruption style.',
                        example: 'Basaltic magma at Kilauea has low viscosity and erupts gently, while rhyolitic magma at Yellowstone is highly viscous and erupts explosively',
                        relatedTerms: ['Lava', 'Viscosity', 'Silica Content', 'Volatiles']
                    },
                    {
                        term: 'Lava',
                        pronunciation: '(LAH-vuh)',
                        definition: 'Molten rock that has erupted onto Earth\'s surface. Once magma reaches the surface and loses most dissolved gases, it becomes lava. Lava can form flows, lakes, fountains, or solidify as volcanic rock.',
                        example: 'Pahoehoe lava has smooth, ropy texture; aa lava has rough, blocky texture - both from same magma at different flow conditions',
                        relatedTerms: ['Magma', 'Pahoehoe', 'Aa', 'Lava Flow', 'Pillow Lava']
                    },
                    {
                        term: 'Pyroclastic Flow',
                        pronunciation: '(py-ro-KLAS-tik)',
                        definition: 'Fast-moving current of hot gas, ash, pumice, and rock fragments that flows down volcano flanks during explosive eruptions. Temperatures reach 200-800°C, speeds 100-700 km/h. The most deadly volcanic hazard.',
                        example: 'Pyroclastic flows from Vesuvius killed residents of Pompeii in 79 AD within minutes; flows from Mt. Pelée killed 29,000 in Martinique (1902)',
                        relatedTerms: ['Nuée Ardente', 'Pyroclastic Surge', 'Ignimbrite', 'Ash Flow']
                    },
                    {
                        term: 'Ring of Fire',
                        pronunciation: '(ring of FY-er)',
                        definition: 'A 40,000 km horseshoe-shaped zone around the Pacific Ocean where approximately 75% of world\'s volcanoes and 90% of earthquakes occur. Marks Pacific Plate boundaries with surrounding plates.',
                        example: 'The Ring of Fire includes volcanoes in Japan, Philippines, Indonesia, New Zealand, Chile, Peru, Central America, Mexico, and the US Pacific Northwest',
                        relatedTerms: ['Subduction Zone', 'Pacific Plate', 'Volcanic Arc', 'Convergent Boundary']
                    },
                    {
                        term: 'Hotspot',
                        pronunciation: '(HOT-spot)',
                        definition: 'A volcanic region fed by an underlying mantle plume - a fixed zone of hot, rising mantle material. As tectonic plates move over stationary hotspots, chains of volcanoes form.',
                        example: 'The Hawaiian Islands formed as the Pacific Plate moved northwest over a fixed hotspot; Kilauea is above the hotspot now, older islands (Kauai, Midway) have moved past it',
                        relatedTerms: ['Mantle Plume', 'Volcanic Chain', 'Intraplate Volcanism', 'Hawaii']
                    },
                    {
                        term: 'Caldera',
                        pronunciation: '(kal-DAIR-uh)',
                        definition: 'A large volcanic depression formed by collapse of the ground following evacuation of magma from a shallow magma chamber during a large eruption. Calderas are typically 1-50+ km in diameter.',
                        example: 'Yellowstone Caldera (72×55 km) formed 640,000 years ago when 1,000 km³ of magma erupted; Crater Lake fills the caldera of Mt. Mazama',
                        relatedTerms: ['Crater', 'Collapse', 'Resurgent Dome', 'Supervolcano']
                    },
                    {
                        term: 'Lahar',
                        pronunciation: '(LAH-har)',
                        definition: 'A destructive mudflow or debris flow composed of volcanic debris and water that flows down valleys at high speed. Triggered by eruption melting snow/ice, crater lake breach, or heavy rainfall on ash deposits.',
                        example: 'The 1985 Nevado del Ruiz eruption generated lahars that buried the town of Armero, Colombia, killing 23,000 people 74 km from the volcano',
                        relatedTerms: ['Mudflow', 'Debris Flow', 'Volcanic Hazard', 'Nevado del Ruiz']
                    },
                    {
                        term: 'Volcanic Explosivity Index (VEI)',
                        pronunciation: '(V-E-I)',
                        definition: 'A logarithmic scale (0-8) measuring the explosivity of volcanic eruptions based on volume of ejected material, eruption column height, and duration. Each VEI level is ~10× more powerful than the previous.',
                        example: 'VEI 5: Mt. St. Helens 1980 (1 km³). VEI 6: Pinatubo 1991 (10 km³). VEI 7: Tambora 1815 (100 km³). VEI 8: Yellowstone 640 ka (1,000 km³)',
                        relatedTerms: ['Eruption Magnitude', 'Tephra Volume', 'Plinian Eruption']
                    },
                    {
                        term: 'Tephra',
                        pronunciation: '(TEF-ruh)',
                        definition: 'A general term for all fragmental volcanic material explosively ejected from a volcano, including ash (<2mm), lapilli (2-64mm), and blocks/bombs (>64mm). Falls from eruption columns or deposits from pyroclastic flows.',
                        example: 'The 1991 Pinatubo eruption deposited tephra up to 10 cm thick over 2,000 km², collapsing roofs and damaging crops',
                        relatedTerms: ['Ash', 'Lapilli', 'Volcanic Bombs', 'Fallout']
                    },
                    {
                        term: 'Fumarole',
                        pronunciation: '(FYOO-muh-role)',
                        definition: 'A vent in a volcanic area that emits steam and volcanic gases such as sulfur dioxide (SO₂), hydrogen sulfide (H₂S), and carbon dioxide (CO₂). Indicates active magmatic or hydrothermal system below.',
                        example: 'Yellowstone has thousands of fumaroles; the sulfurous gases give hot springs areas their distinctive "rotten egg" smell',
                        relatedTerms: ['Solfatara', 'Hot Spring', 'Geyser', 'Volcanic Gases']
                    },
                    {
                        term: 'Stratovolcano',
                        pronunciation: '(STRAT-oh-vol-kay-no)',
                        definition: 'A tall, steep, conical volcano built from alternating layers of lava flows, ash, and pyroclastic deposits. Also called composite volcanoes. The most common and dangerous type of volcano.',
                        example: 'Mount Fuji (Japan), Mount Rainier (USA), and Mount Pinatubo (Philippines) are classic stratovolcanoes',
                        relatedTerms: ['Composite Volcano', 'Subduction Zone', 'Andesitic Magma']
                    },
                    {
                        term: 'Phreatic Eruption',
                        pronunciation: '(free-AT-ik)',
                        definition: 'A steam-driven explosion that occurs when water (groundwater, lake, sea) is heated by magma or hot rock, generating steam that blasts out fragmented rock. No fresh magma is ejected.',
                        example: 'Mt. Ontake (Japan) 2014 phreatic eruption killed 63 hikers with no warning - no magma was involved, just superheated steam explosion',
                        relatedTerms: ['Steam Explosion', 'Phreatomagmatic', 'Hydrothermal Explosion']
                    },
                    {
                        term: 'Viscosity',
                        pronunciation: '(vis-KOS-ih-tee)',
                        definition: 'A measure of a fluid\'s resistance to flow. In magma, viscosity is controlled by silica content, temperature, and crystal content. High-silica magma is viscous (thick); low-silica magma is fluid (runny).',
                        example: 'Basaltic magma (low silica) flows like motor oil; rhyolitic magma (high silica) is as thick as toothpaste - 1 million times more viscous',
                        relatedTerms: ['Silica Content', 'Magma Composition', 'Eruption Style']
                    },
                    {
                        term: 'Volcanic Arc',
                        pronunciation: '(vol-KAN-ik ark)',
                        definition: 'A chain of volcanoes formed above a subducting oceanic plate, arranged in an arc parallel to the oceanic trench. Result from partial melting in the mantle wedge above the descending plate.',
                        example: 'The Indonesian archipelago, Japanese islands, Aleutian Islands, and Andes are volcanic arcs formed by subduction',
                        relatedTerms: ['Island Arc', 'Subduction Zone', 'Ring of Fire', 'Convergent Boundary']
                    },
                    {
                        term: 'Volcanic Winter',
                        pronunciation: '(vol-KAN-ik WIN-ter)',
                        definition: 'A period of global cooling caused by large volcanic eruptions that inject massive amounts of sulfur dioxide (SO₂) into the stratosphere, forming sulfate aerosols that reflect sunlight.',
                        example: 'The 1815 Tambora eruption caused the "Year Without Summer" (1816) with widespread crop failure, famine, and snow in June in New England',
                        relatedTerms: ['Climate Impact', 'Sulfate Aerosols', 'Tambora', 'Toba']
                    }
                ]
            },

            interactiveElements: {
                volcanoAnimation: {
                    type: 'animation',
                    description: 'Interactive 3D animation showing magma generation, rise, and eruption at different tectonic settings',
                    file: 'assets/volcano-formation-animation.mp4',
                    duration: '4 minutes',
                    features: ['Tectonic setting selector', 'Cross-section view', 'Eruption style demo', 'VEI scale comparison']
                },

                quiz: {
                    type: 'quiz',
                    title: '🧠 Test Your Knowledge: Volcanoes',
                    questions: [
                        {
                            question: 'What determines whether a volcanic eruption will be explosive or effusive (gentle)?',
                            options: [
                                'The size of the volcano only',
                                'Magma viscosity and gas content',
                                'Distance from the ocean',
                                'Time of year'
                            ],
                            correct: 1,
                            explanation: 'Eruption style is controlled by magma viscosity (determined by silica content) and gas content. High-silica magma is viscous and traps gases → explosive eruption. Low-silica magma is fluid and allows gases to escape easily → effusive eruption. This is why Hawaiian volcanoes (basaltic) are gentle while Indonesian volcanoes (andesitic) are explosive.'
                        },
                        {
                            question: 'Approximately what percentage of the world\'s active volcanoes are located in the Pacific Ring of Fire?',
                            options: [
                                '25%',
                                '50%',
                                '75%',
                                '95%'
                            ],
                            correct: 2,
                            explanation: 'About 75% of the world\'s active volcanoes (approximately 450 volcanoes) are located in the Pacific Ring of Fire. This 40,000 km horseshoe-shaped zone marks the boundaries of the Pacific Plate, where oceanic crust subducts beneath surrounding plates, triggering volcanism.'
                        },
                        {
                            question: 'What is the most deadly volcanic hazard?',
                            options: [
                                'Lava flows',
                                'Volcanic ash',
                                'Pyroclastic flows',
                                'Volcanic gases'
                            ],
                            correct: 2,
                            explanation: 'Pyroclastic flows are the deadliest volcanic hazard. These fast-moving currents of hot gas, ash, and rock fragments travel at 100-700 km/h with temperatures up to 800°C. They killed everyone in Pompeii (79 AD), 29,000 in Martinique (1902), and many others. Lava flows, while destructive, usually move slowly enough to allow evacuation.'
                        },
                        {
                            question: 'What caused the "Year Without Summer" in 1816?',
                            options: [
                                'Solar minimum (reduced sun activity)',
                                'Mt. Tambora eruption (1815) ejecting sulfur into stratosphere',
                                'Krakatoa eruption',
                                'Ice age beginning'
                            ],
                            correct: 1,
                            explanation: 'The 1815 eruption of Mt. Tambora in Indonesia (VEI 7) was the largest in recorded history. It ejected ~100 km³ of material and massive amounts of sulfur dioxide into the stratosphere, forming sulfate aerosols that reflected sunlight. Global temperatures dropped 0.4-0.7°C, causing crop failures, famine, and snow in summer across the Northern Hemisphere.'
                        },
                        {
                            question: 'What is the difference between a caldera and a crater?',
                            options: [
                                'They are the same thing',
                                'Crater is formed by explosion; caldera by collapse after magma chamber empties',
                                'Calderas are underwater; craters are on land',
                                'Craters are larger than calderas'
                            ],
                            correct: 1,
                            explanation: 'Craters are relatively small bowl-shaped depressions at volcano summits formed by explosive excavation. Calderas are much larger (1-80+ km diameter) and form by collapse when a magma chamber rapidly empties during a major eruption - the roof rock loses support and drops into the void. Yellowstone\'s caldera is 72×55 km.'
                        },
                        {
                            question: 'Why do volcanoes form at subduction zones?',
                            options: [
                                'Friction from plate collision melts rock',
                                'Water released from subducting plate lowers melting point of mantle',
                                'Subducting plate is already molten',
                                'Earthquakes cause rock to melt'
                            ],
                            correct: 1,
                            explanation: 'As oceanic crust subducts, it carries water-rich sediments and hydrated minerals. At depth (100-150 km), increasing temperature releases this water into the overlying mantle wedge. Water drastically lowers the melting point of rock (flux melting), causing partial melting and generating andesitic magma that rises to form volcanic arcs.'
                        },
                        {
                            question: 'What is a hotspot volcano, and how does it differ from subduction volcanoes?',
                            options: [
                                'Hotspots are hotter and only occur at plate boundaries',
                                'Hotspots are fed by mantle plumes and can occur in plate interiors, away from boundaries',
                                'Hotspots produce more explosive eruptions',
                                'There is no difference'
                            ],
                            correct: 1,
                            explanation: 'Hotspot volcanoes are fed by mantle plumes - columns of hot rock rising from deep in the mantle. Unlike subduction volcanoes at plate boundaries, hotspots can occur in the middle of plates (intraplate). As plates move over stationary hotspots, chains of volcanoes form (Hawaii, Yellowstone). Hotspot magma is typically basaltic (except Yellowstone - rhyolitic).'
                        },
                        {
                            question: 'What is India\'s only active volcano?',
                            options: [
                                'Deccan Traps',
                                'Barren Island (Andaman & Nicobar)',
                                'Dhinodhar Hills',
                                'Dhosi Hill'
                            ],
                            correct: 1,
                            explanation: 'Barren Island in the Andaman Sea is India\'s only confirmed active volcano. It is a stratovolcano that has erupted several times since 1787, most recently in 2017-2021. Narcondam Island (also Andaman) is dormant. The Deccan Traps are ancient (66 million years) flood basalts, not active volcanoes.'
                        }
                    ]
                },

                crossSection: {
                    type: 'interactive-diagram',
                    description: 'Detailed cross-section of Earth showing magma generation at different tectonic settings',
                    file: 'assets/volcano-cross-section.svg',
                    features: ['Toggle subduction/divergent/hotspot views', 'Magma pathway highlighting', 'Depth scale', 'Temperature gradient']
                }
            }
        },

        // =============================
        // SECTION 4: EXAMPLES
        // =============================
        examples: {
            title: 'Famous Volcanoes of the World',

            hero: {
                image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80',
                tagline: 'From gentle giants to explosive peaks'
            },

            renderAs: 'grid',

            introduction: 'Earth has approximately 1,500 potentially active volcanoes, with about 500 having erupted in recorded history. From the gentle shield volcanoes of Hawaii to the explosive stratovolcanoes of the Ring of Fire, each tells a unique story of Earth\'s internal forces. Explore our complete database of 100+ volcanoes through the link below, or browse featured highlights representing different types, regions, and historical significance.',

            linkToExisting: '/encyclopedia/volcanoes/',

            filters: ['continent', 'type', 'status', 'VEI'],
            sortOptions: ['name-asc', 'height-desc', 'last-eruption', 'type'],

            featuredVolcanoes: [
                {
                    name: 'Mount Fuji',
                    continent: 'Asia',
                    type: 'Stratovolcano',
                    stats: 'Height: 3,776m | Last eruption: 1707 | Status: Active (dormant)',
                    countries: ['Japan'],
                    link: '/encyclopedia/volcanoes/fuji',
                    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
                    icon: '🗻',
                    funFact: 'UNESCO World Heritage Site and Japan\'s highest peak!',
                    hazards: 'Pyroclastic flows, ash fall affecting Tokyo (35 million people)'
                },
                {
                    name: 'Kilauea',
                    continent: 'North America',
                    type: 'Shield Volcano',
                    stats: 'Height: 1,247m | Status: Active | Erupting since 2021',
                    countries: ['USA (Hawaii)'],
                    link: '/encyclopedia/volcanoes/kilauea',
                    image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                    icon: '🔥',
                    funFact: 'One of the most active volcanoes on Earth - erupted almost continuously 1983-2018!',
                    hazards: 'Lava flows, volcanic gases (vog), laze at ocean entry'
                },
                {
                    name: 'Barren Island',
                    continent: 'Asia',
                    type: 'Stratovolcano',
                    stats: 'Height: 354m | Status: Active | India\'s only active volcano',
                    countries: ['India (Andaman & Nicobar)'],
                    link: '/encyclopedia/volcanoes/barren-island',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=800&q=80',
                    icon: '🇮🇳',
                    funFact: 'Located in the Andaman Sea, erupting intermittently since 1787 🇮🇳',
                    hazards: 'Lava flows, ash emissions, limited due to uninhabited location'
                },
                {
                    name: 'Mount Vesuvius',
                    continent: 'Europe',
                    type: 'Stratovolcano',
                    stats: 'Height: 1,281m | Last eruption: 1944 | Status: Active',
                    countries: ['Italy'],
                    link: '/encyclopedia/volcanoes/vesuvius',
                    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
                    icon: '🏛️',
                    funFact: 'Destroyed Pompeii in 79 AD - 3 million people now live in danger zone!',
                    hazards: 'Pyroclastic flows, lahars, ash fall, extremely high risk'
                },
                {
                    name: 'Yellowstone Caldera',
                    continent: 'North America',
                    type: 'Caldera (Supervolcano)',
                    stats: 'Size: 72×55 km | Last supereruption: 640,000 years ago | Status: Active',
                    countries: ['USA (Wyoming)'],
                    link: '/encyclopedia/volcanoes/yellowstone',
                    image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                    icon: '💨',
                    funFact: 'One of Earth\'s largest active volcanic systems - powers 10,000+ thermal features!',
                    hazards: 'Future supereruption potential (VEI 8), geothermal hazards, earthquakes'
                },
                {
                    name: 'Mount Etna',
                    continent: 'Europe',
                    type: 'Stratovolcano',
                    stats: 'Height: 3,357m | Status: Frequently active | Europe\'s most active',
                    countries: ['Italy (Sicily)'],
                    link: '/encyclopedia/volcanoes/etna',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=800&q=80',
                    icon: '🌋',
                    funFact: 'Has been erupting for 500,000 years and is UNESCO World Heritage Site!',
                    hazards: 'Lava flows, ash fall, aviation disruption'
                },
                {
                    name: 'Krakatoa (Anak Krakatau)',
                    continent: 'Asia',
                    type: 'Caldera/Stratovolcano',
                    stats: 'Height: 338m (growing) | 1883 VEI 6 eruption | Status: Active',
                    countries: ['Indonesia'],
                    link: '/encyclopedia/volcanoes/krakatoa',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=800&q=80',
                    icon: '💥',
                    funFact: '1883 eruption was heard 4,800 km away - loudest sound in recorded history!',
                    hazards: 'Tsunamis (2018 flank collapse), pyroclastic flows, ash'
                },
                {
                    name: 'Mount Pinatubo',
                    continent: 'Asia',
                    type: 'Stratovolcano',
                    stats: 'Height: 1,486m | 1991 VEI 6 eruption | Status: Active',
                    countries: ['Philippines'],
                    link: '/encyclopedia/volcanoes/pinatubo',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=800&q=80',
                    icon: '☁️',
                    funFact: '1991 eruption cooled global temperatures by 0.5°C for 2 years!',
                    hazards: 'Lahars (ongoing), pyroclastic flows, climate effects'
                }
            ],

            upscRelevance: {
                title: '🎯 UPSC Civil Services Exam Importance',
                introduction: 'Volcanoes are critically important for UPSC CSE across Prelims (Geography, Environment, Disaster Management) and Mains (GS-I Physical Geography, GS-III Environment & Disaster Management). Understanding volcanic processes, distribution, and hazards is essential.',

                topics: [
                    '**Volcanic distribution:** Ring of Fire, Mid-Atlantic Ridge, East African Rift, Indian volcanoes (Barren Island, Narcondam, Deccan Traps)',
                    '**Types of volcanoes:** Shield, Composite/Stratovolcano, Cinder Cone, Caldera - formation, characteristics, examples',
                    '**Tectonic settings:** Convergent boundaries (subduction zones), divergent boundaries, hotspots - mechanism of magma generation',
                    '**Volcanic hazards:** Pyroclastic flows, lahars, ash fall, volcanic gases, tsunamis - mitigation strategies',
                    '**Volcanic landforms:** Crater, caldera, lava plateau, volcanic islands, geysers, hot springs',
                    '**India-specific:** Barren Island (only active), Narcondam (dormant), Deccan Traps (flood basalts), Dhinodhar Hills',
                    '**Climate impact:** Volcanic winter, sulfate aerosols, 1815 Tambora "Year Without Summer"',
                    '**Volcanic rocks & minerals:** Basalt, andesite, rhyolite, pumice, obsidian - economic importance',
                    '**Disaster management:** Early warning systems, evacuation, monitoring technology, NDMA guidelines',
                    '**Geothermal energy:** Volcanic regions as renewable energy source (Iceland, Philippines, Kenya)',
                    '**Volcanic soils:** Andisols - fertility, agriculture (Java, Sicily, Ethiopia)',
                    '**Recent events:** Tonga 2022 (tsunami), La Palma 2021, Eyjafjallajökull 2010 (aviation)'
                ],

                sampleQuestions: [
                    {
                        type: 'Mains',
                        year: '2021',
                        marks: 15,
                        question: 'Differentiate between the formation of Himalayas and Deccan Traps. How do volcanic activities influence global climate?',
                        approach: 'Himalayas: fold mountains from India-Eurasia collision. Deccan Traps: flood basalts from Reunion hotspot/Deccan plume 66 MYA. Climate impact: SO₂ → sulfate aerosols → cooling (Pinatubo 0.5°C). CO₂ → long-term warming. Discuss Tambora, volcanic winter.'
                    },
                    {
                        type: 'Mains',
                        year: '2019',
                        marks: 10,
                        question: 'What is the Ring of Fire? Explain its geological significance and why most earthquakes and volcanoes occur along it.',
                        approach: 'Define Ring of Fire (40,000 km, Pacific boundaries). Explain subduction zones → volcanoes + earthquakes. 75% volcanoes, 90% earthquakes. Cite examples: Japan, Indonesia, Chile, Cascades. Mention Indian context - Andaman-Sumatra trench.'
                    },
                    {
                        type: 'Mains',
                        year: '2020',
                        marks: 15,
                        question: 'Discuss the various types of volcanoes based on their shape and mode of eruption. Give suitable examples from around the world.',
                        approach: 'Four types: Shield (low silica, effusive - Mauna Loa), Composite (high silica, explosive - Fuji), Cinder Cone (small, strombolian - Parícutin), Caldera (collapse - Yellowstone). Include diagrams, magma composition link.'
                    },
                    {
                        type: 'Prelims',
                        year: '2018',
                        question: 'Consider the following statements:\n1. Barren Island is India\'s only active volcano\n2. It is located in the Bay of Bengal\n3. Narcondam is an extinct volcano\n\nWhich statements are correct?',
                        answer: '1 only - Barren Island is India\'s only active volcano (correct), but it is in the Andaman SEA not Bay of Bengal. Narcondam is DORMANT, not extinct.'
                    },
                    {
                        type: 'Prelims',
                        year: '2017',
                        question: 'Which of the following volcanic eruptions recorded the highest Volcanic Explosivity Index (VEI)?',
                        options: ['Mt. St. Helens 1980', 'Krakatoa 1883', 'Tambora 1815', 'Pinatubo 1991'],
                        answer: 'Tambora 1815 (VEI 7). Pinatubo 1991 (VEI 6), Krakatoa 1883 (VEI 6), Mt. St. Helens 1980 (VEI 5).'
                    },
                    {
                        type: 'Mains',
                        year: '2022',
                        marks: 15,
                        question: 'What are the major volcanic hazards? Discuss the disaster preparedness measures for volcanic eruptions with reference to Andaman & Nicobar Islands.',
                        approach: 'Hazards: pyroclastic flows, lahars, ash fall, gases, tsunamis. A&N context: Barren Island monitoring by GSI. Measures: seismic monitoring, gas sensors, satellite imagery, evacuation plans, NDMA guidelines, early warning systems, public awareness.'
                    },
                    {
                        type: 'Mains',
                        year: '2023 (Expected)',
                        marks: 15,
                        question: 'Discuss the formation of hotspot volcanoes with the example of Hawaiian Islands. How do they differ from subduction zone volcanoes?',
                        approach: 'Hotspot: stationary mantle plume, plate moves over it → volcanic chain (oldest to youngest: Kauai → Hawaii). Subduction: oceanic plate dives under another → water release → melting → volcanic arc. Compare magma (basaltic vs andesitic), eruption style (effusive vs explosive), volcano type (shield vs stratovolcano).'
                    }
                ],

                keyConceptsForExam: [
                    {
                        concept: 'Volcanic Distribution in India',
                        importance: 'Very High',
                        details: 'Barren Island (only active, Andaman Sea), Narcondam (dormant), Deccan Traps (66 MYA flood basalts, 500,000 km²), Dhinodhar Hills (extinct, Gujarat), Dhosi Hill (extinct, Haryana)',
                        examRelevance: 'Frequently asked in Prelims - location, status, formation'
                    },
                    {
                        concept: 'Ring of Fire',
                        importance: 'Very High',
                        details: '40,000 km around Pacific, 75% volcanoes, 90% earthquakes, subduction zones, countries: Japan, Philippines, Indonesia, Chile, Peru, USA West Coast',
                        examRelevance: 'Map questions, disaster management, tectonic context'
                    },
                    {
                        concept: 'Volcanic Hazards & Disaster Management',
                        importance: 'High',
                        details: 'Pyroclastic flows, lahars, ash fall, gases, tsunamis. Monitoring: seismometers, GPS, gas sensors, satellites. Early warning, evacuation, NDMA role',
                        examRelevance: 'GS-III Disaster Management, current affairs'
                    },
                    {
                        concept: 'Deccan Traps & K-Pg Extinction',
                        importance: 'High',
                        details: '66 MYA flood basalts, Reunion hotspot, 500,000 km² coverage, contributed to dinosaur extinction (along with asteroid), created Western Ghats escarpment',
                        examRelevance: 'Geological history, environmental impact, Western Ghats context'
                    },
                    {
                        concept: 'Climate Impact of Volcanoes',
                        importance: 'Medium-High',
                        details: 'SO₂ → sulfate aerosols → global cooling. Tambora 1815 → "Year Without Summer". Pinatubo 1991 → 0.5°C cooling. Long-term CO₂ from volcanoes',
                        examRelevance: 'Climate change questions, environmental science'
                    }
                ],

                currentAffairsLinks: [
                    'Hunga Tonga-Hunga Ha\'apai eruption 2022 - underwater eruption, tsunami, atmospheric effects',
                    'La Palma (Cumbre Vieja) eruption 2021 - 3 months of activity, lava flows',
                    'Barren Island eruptions (ongoing monitoring by GSI)',
                    'Taal Volcano (Philippines) activity - threat to Manila',
                    'Iceland Fagradalsfjall eruptions 2021-2023 - accessible lava flows',
                    'White Island (Whakaari) disaster 2019 - tourism safety at volcanoes',
                    'Geothermal energy development in Ladakh (volcanic context)',
                    'Andaman & Nicobar disaster preparedness exercises'
                ],

                mapBasedQuestions: {
                    title: 'Important Locations to Mark on Map',
                    locations: [
                        'Ring of Fire (Pacific boundaries)',
                        'Mid-Atlantic Ridge (Iceland)',
                        'East African Rift',
                        'Barren Island & Narcondam (Andaman Sea)',
                        'Deccan Traps extent',
                        'Major volcanoes: Vesuvius, Etna, Fuji, Krakatoa, Pinatubo, Yellowstone'
                    ]
                }
            }
        }
    }
};

// Export for use in concept-app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = volcanoesData;
}
