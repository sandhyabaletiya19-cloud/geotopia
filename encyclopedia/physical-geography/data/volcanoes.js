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
                image: 'https://images.unsplash.com/photo-1719409773583-e9c21a1b133f?w=1920&q=80',
                tagline: 'Windows into Earth\'s fiery interior'
            },

            content: {
                introduction: 'A volcano is an opening or rupture in Earth\'s crust through which molten rock (magma), volcanic ash, gases, and pyroclastic materials escape from a magma chamber below the surface. When magma reaches the surface, it is called lava. Volcanoes can form mountains, plateaus, islands, and even reshape entire landscapes. They occur at tectonic plate boundaries (convergent and divergent) and over mantle hotspots. Volcanic activity has shaped Earth\'s atmosphere, created fertile soils, formed new land, and both destroyed and supported human civilizations throughout history. Understanding volcanoes is crucial for disaster preparedness, as approximately 800 million people live within 100 km of an active volcano.',

                keyPoints: [
                    {
                        icon: '🌋',
                        label: 'Definition',
                        text: 'An opening in Earth\'s crust allowing magma, gases, and ash to escape from below',
                        detail: 'Volcanoes can be mountains, fissures, or underwater vents. The word comes from "Vulcan," the Roman god of fire and metalworking. A volcano includes several components: the vent (opening), crater (depression at summit), magma chamber (underground reservoir), conduit (pipe connecting chamber to vent), and the volcanic edifice (mountain structure built from erupted materials over thousands to millions of years).'
                    },
                    {
                        icon: '🔥',
                        label: 'Magma vs Lava',
                        text: 'Magma = molten rock below surface | Lava = molten rock above surface',
                        detail: 'Magma is a complex mixture of molten rock (silicate melt), dissolved gases (H₂O, CO₂, SO₂, H₂S), and mineral crystals at temperatures of 700-1300°C. Once magma erupts and loses most dissolved gases, it becomes lava. Magma viscosity (thickness) is controlled by silica content: basaltic magma (45-52% silica) is fluid like motor oil; rhyolitic magma (>70% silica) is thick like cold toothpaste. This viscosity determines eruption style: low silica = fluid = gentle effusive eruptions; high silica = thick = violent explosive eruptions.'
                    },
                    {
                        icon: '📍',
                        label: 'Global Distribution',
                        text: 'Found at plate boundaries (75% in Ring of Fire) and hotspots',
                        detail: 'About 1,500 potentially active volcanoes exist on land, with ~500 having erupted in recorded history. 75% are concentrated in the Pacific Ring of Fire (subduction zones). Others occur at divergent boundaries (Mid-Atlantic Ridge creating Iceland, East African Rift) and over intraplate hotspots (Hawaii, Yellowstone, Galápagos, Réunion). Remarkably, ~80% of all volcanic eruptions occur underwater at mid-ocean ridges, unseen by humans but constantly creating new oceanic crust.'
                    },
                    {
                        icon: '⚠️',
                        label: 'Volcanic Hazards',
                        text: 'Lava flows, pyroclastic flows, ash fall, lahars, volcanic gases, tsunamis',
                        detail: 'Pyroclastic flows (800°C, 700 km/h) are the deadliest hazard - a superheated mixture of gas, ash, and rock that incinerates everything in its path. Lahars (volcanic mudflows) can travel 100+ km at 60 km/h, following river valleys. Ash can collapse roofs (1m of wet ash = 200 kg/m²), damage jet engines, and disrupt aviation globally (Eyjafjallajökull 2010: 100,000 flights cancelled). Volcanic gases (SO₂, CO₂, H₂S) can suffocate in low-lying areas. Approximately 800 million people live within 100 km of an active volcano.'
                    },
                    {
                        icon: '🌍',
                        label: 'Tectonic Settings',
                        text: 'Convergent boundaries, divergent boundaries, and intraplate hotspots',
                        detail: 'At convergent boundaries (60% of volcanoes): oceanic plate subducts, releases water into mantle wedge, triggers flux melting → volcanic arcs with explosive stratovolcanoes (Andes, Japan, Indonesia, Philippines, Cascades). At divergent boundaries (15% on land, 80% underwater): plates separate, mantle rises and decompresses, causing partial melting → effusive basaltic volcanism (Iceland, East African Rift, Mid-Ocean Ridges). Hotspots (5% of volcanoes): stationary mantle plumes create volcanic chains as plates move over them (Hawaii, Yellowstone, Galápagos).'
                    },
                    {
                        icon: '🌱',
                        label: 'Benefits of Volcanoes',
                        text: 'Fertile soils, geothermal energy, mineral deposits, new land formation',
                        detail: 'Volcanic ash weathers rapidly into extremely fertile andisol soils - explaining dense populations in Java (140 million), Sicily, and Ethiopian highlands. Geothermal energy harnesses volcanic heat: Iceland (25% electricity), Philippines (#2 producer), Kenya, New Zealand. Volcanic hydrothermal systems concentrate precious minerals: gold, silver, copper, sulfur deposits. Volcanic islands create new habitats for evolution (Hawaii, Galápagos - Darwin\'s finches). Volcanic rocks (basalt, pumice, obsidian) used in construction. Roman concrete used volcanic ash (pozzolan).'
                    },
                    {
                        icon: '📊',
                        label: 'Eruption Measurement',
                        text: 'Volcanic Explosivity Index (VEI) measures eruption magnitude (0-8 scale)',
                        detail: 'VEI is a logarithmic scale where each level represents approximately 10× more ejected material than the previous. VEI 0-1: Effusive, gentle (Kilauea daily). VEI 2-3: Explosive but local (Stromboli). VEI 4-5: Cataclysmic, regional effects (Mt. St. Helens 1980 = VEI 5). VEI 6: Colossal, global effects (Pinatubo 1991, Krakatoa 1883). VEI 7: Super-colossal (Tambora 1815 - largest in recorded history). VEI 8: Mega-colossal "supereruptions" (Yellowstone 640,000 years ago, Toba 74,000 years ago - nearly caused human extinction).'
                    },
                    {
                        icon: '🏛️',
                        label: 'Historical Impact',
                        text: 'Volcanoes have destroyed civilizations and altered global climate',
                        detail: 'Vesuvius destroyed Pompeii and Herculaneum in 79 AD, preserving them under ash for archaeology. Tambora 1815 (VEI 7) caused the "Year Without Summer" 1816 with global crop failures, famine, and snow in June. Krakatoa 1883 killed 36,000+, generated 40m tsunamis, and was heard 4,800 km away - loudest sound in recorded history. Thera/Santorini (~1600 BC) may have ended Minoan civilization and inspired Atlantis legend. Toba (~74,000 years ago) caused 6-10 year volcanic winter and may have reduced human population to 3,000-10,000 individuals (genetic bottleneck theory). Flood basalt eruptions (Deccan Traps, Siberian Traps) contributed to mass extinctions.'
                    }
                ],

                comparison: {
                    title: 'Active vs Dormant vs Extinct Volcanoes - Complete Comparison',
                    features: [
                        {
                            feature: 'Definition',
                            active: 'Currently erupting or has erupted in recorded history (Holocene, last 10,000 years) with evidence of ongoing magmatic activity',
                            dormant: 'Not currently erupting but has erupted in Holocene and retains potential for future activity; "sleeping" volcano',
                            extinct: 'Has not erupted in Holocene (>10,000 years) and shows no evidence of future activity based on geological assessment'
                        },
                        {
                            feature: 'Last Eruption',
                            active: 'Recent (within ~10,000 years) or currently active with ongoing eruptions',
                            dormant: 'Thousands of years ago but within geological "recent" time; magma system may still exist',
                            extinct: 'Tens of thousands to millions of years ago; magma supply has ended'
                        },
                        {
                            feature: 'Magma Chamber',
                            active: 'Active magma supply confirmed by monitoring; heat, gas emissions, ground deformation detected',
                            dormant: 'May retain magma at depth but no surface activity; cooling but not solidified',
                            extinct: 'No magma supply; chamber completely solidified into plutonic rock'
                        },
                        {
                            feature: 'Monitoring Signs',
                            active: 'Frequent earthquakes, elevated gas emissions (SO₂), ground deformation (inflation), hot springs, fumaroles',
                            dormant: 'Minimal seismic activity, possible fumaroles, occasional hydrothermal features',
                            extinct: 'No volcanic activity detected; no seismic swarms, no gas emissions, no deformation'
                        },
                        {
                            feature: 'Risk Level',
                            active: 'High - requires continuous 24/7 monitoring and evacuation planning',
                            dormant: 'Medium - can reactivate unexpectedly; historical examples exist (Pinatubo dormant 500 years)',
                            extinct: 'Low - but reclassification is possible if new evidence emerges'
                        },
                        {
                            feature: 'Global Count',
                            active: '~500 have erupted in historical time; ~50-70 erupt each year',
                            dormant: '~1,000 potentially active volcanoes could reawaken',
                            extinct: 'Thousands worldwide; many eroded beyond recognition'
                        },
                        {
                            feature: 'Examples',
                            active: 'Kilauea (Hawaii - continuous), Stromboli (Italy - 2000+ years), Sakurajima (Japan - daily explosions), Merapi (Indonesia)',
                            dormant: 'Mt. Fuji (Japan - last 1707), Mt. Rainier (USA - last 1894), Teide (Canary Islands), Vesuvius (Italy - last 1944)',
                            extinct: 'Edinburgh Castle Rock (Scotland), Shiprock (New Mexico), Diamond Head (Hawaii), Ben Nevis (Scotland)'
                        },
                        {
                            feature: 'Can Reclassify?',
                            active: 'Yes - can become dormant if activity stops for extended period',
                            dormant: 'Yes - can become active suddenly (Pinatubo 1991 after 500 years, Chaitén 2008 after 9,000 years)',
                            extinct: 'Rarely - but has happened (Fourpeaked, Alaska erupted 2006 after being considered extinct)'
                        },
                        {
                            feature: 'Monitoring Priority',
                            active: 'Highest priority - continuous real-time monitoring networks',
                            dormant: 'Medium priority - periodic surveys and basic monitoring',
                            extinct: 'Low priority - geological studies only'
                        },
                        {
                            feature: 'Human Settlement',
                            active: 'Often settled due to fertile soils despite danger (Java, Naples, Philippines)',
                            dormant: 'Heavily settled as perceived safe (Seattle near Rainier)',
                            extinct: 'Safe for permanent settlement'
                        }
                    ]
                },

                diagram: {
                    type: 'svg',
                    path: 'assets/volcano-structure.svg',
                    alt: 'Cross-section of a volcano showing magma chamber, conduit, vent, crater, lava flows, pyroclastic layers, and ash cloud',
                    labels: ['Magma Chamber', 'Conduit', 'Main Vent', 'Crater', 'Lava Flow', 'Pyroclastic Layers', 'Ash Cloud', 'Secondary Vent', 'Dike', 'Sill']
                },

                funFacts: [
                    '🌍 There are approximately 1,500 potentially active volcanoes on land worldwide, with about 50-70 erupting each year',
                    '🌊 About 80% of all volcanic eruptions occur underwater at mid-ocean ridges, creating new oceanic crust unseen by humans',
                    '🔥 The largest volcano on Earth is Mauna Loa (Hawaii) with a volume of 75,000 km³ - it would take 18 Mount Everests to match it',
                    '💥 Krakatoa\'s 1883 eruption was heard 4,800 km away in Australia - the loudest sound in recorded human history',
                    '🇮🇳 India\'s only active volcano is Barren Island in the Andaman Sea, part of the Andaman & Nicobar Islands',
                    '🌡️ Lava temperature ranges from 700°C (rhyolite - thick, explosive) to 1,200°C (basalt - fluid, gentle)',
                    '☁️ Mt. Pinatubo (1991) ejected 20 million tons of SO₂ into stratosphere, cooling Earth by 0.5°C for 2 years',
                    '🏃 Pyroclastic flows can travel at 700 km/h with temperatures up to 1,000°C - faster than any vehicle and unsurvivable',
                    '🗻 Olympus Mons on Mars is the tallest volcano in the solar system at 21,900m - 2.5× the height of Mount Everest!',
                    '⏰ Stromboli (Italy) has been erupting almost continuously for over 2,000 years, earning the name "Lighthouse of the Mediterranean"',
                    '🌋 The word "volcano" comes from Vulcano Island in Italy, named after Vulcan, the Roman god of fire and forge',
                    '💀 The "Death Zone" for pyroclastic flows typically extends 10-20 km from volcanic vents - evacuation is the only survival option',
                    '🏝️ Hawaii adds about 42 acres of new land each year from volcanic lava flows entering the ocean',
                    '❄️ Tambora 1815 (VEI 7) caused the "Year Without Summer" in 1816 with global crop failures, famine, and June snowstorms',
                    '🦎 Volcanic islands like Galápagos become evolutionary laboratories where species evolve in isolation (Darwin\'s finches)',
                    '⚡ Volcanic lightning ("dirty thunderstorms") occurs in eruption columns when ash particles collide and generate static electricity',
                    '🌿 Volcanic soil (andisol) is among the most fertile on Earth - explaining dense populations in Java (140 million), Sicily, Ethiopia',
                    '🔬 70% of Earth\'s surface was created by volcanic activity over geological time - volcanoes literally built our planet',
                    '🏔️ Mt. Erebus (Antarctica) has a persistent lava lake - one of only ~5 long-lived lava lakes on Earth',
                    '📡 Modern volcano monitoring uses GPS (ground deformation), satellites (thermal imaging, gas detection), seismometers, drones, and AI'
                ]
            }
        },

        // =============================
        // SECTION 2: TYPES
        // =============================
        types: {
            title: 'Types of Volcanoes',

            hero: {
                image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80',
                tagline: 'Shape reveals eruption style and magma composition'
            },

            renderAs: 'mindmap',

            introduction: 'Volcanoes are classified by their shape, size, and eruption style - all determined by magma composition (silica content), gas content, and tectonic setting. The main types are: Shield (broad and gentle), Stratovolcano/Composite (steep and dangerous), Cinder Cone (small and steep), Caldera (massive collapse craters), Lava Dome (bulbous mounds), and Fissure (linear eruptions). Understanding these types helps volcanologists predict eruption behavior, assess hazards to nearby populations, and develop appropriate monitoring and evacuation strategies. Each type tells a story about the magma that created it.',

            branches: [
                {
                    id: 'shield',
                    name: 'Shield Volcanoes',
                    icon: '🛡️',
                    color: '#e74c3c',

                    definition: 'Shield volcanoes are broad, gently sloping volcanoes built almost entirely from fluid basaltic lava flows. Their shape resembles a warrior\'s shield lying on the ground (hence the name). They form from low-viscosity (runny) magma with low silica content (45-52%) that allows gases to escape easily, resulting in non-explosive, effusive eruptions. Shield volcanoes are the largest volcanoes by volume on Earth and in the solar system. They form primarily at hotspots and divergent plate boundaries where basaltic magma is generated from mantle melting.',

                    formation: {
                        title: 'How Shield Volcanoes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Mantle hotspot or rift zone generates low-silica basaltic magma at 50-100 km depth through decompression melting', icon: '🔥' },
                            { step: 2, text: 'Low-viscosity magma (similar to motor oil consistency) rises quickly through conduits due to buoyancy', icon: '⬆️' },
                            { step: 3, text: 'Magma reaches surface with most dissolved gases already escaped during ascent - results in low explosivity', icon: '💨' },
                            { step: 4, text: 'Fluid lava erupts gently from summit vents, flank fissures, or rift zones as lava fountains or flows', icon: '🌋' },
                            { step: 5, text: 'Lava flows spread far (tens of kilometers) before cooling and solidifying due to extremely low viscosity', icon: '🌊' },
                            { step: 6, text: 'Thin layers of basalt (1-10m thick) accumulate over thousands of individual eruption events', icon: '📚' },
                            { step: 7, text: 'Gentle slopes of 2-10° develop from overlapping sheet flows building outward from central vent', icon: '📐' },
                            { step: 8, text: 'Summit caldera may form from collapse when magma chamber partially drains during large eruptions', icon: '🕳️' },
                            { step: 9, text: 'Lava tubes develop allowing lava to travel great distances underground without cooling', icon: '🚇' },
                            { step: 10, text: 'Process continues for millions of years building massive structure - final shield can exceed 100 km diameter and 9 km height (base to summit)', icon: '🛡️' }
                        ],
                        animation: 'shield-volcano-animation.mp4'
                    },

                    characteristics: [
                        'Gentle slopes: 2-10° angle (appears nearly flat from distance)',
                        'Very wide base: diameter can exceed 100-200 km',
                        'Largest volcanoes by volume on Earth (Mauna Loa: 75,000 km³)',
                        'Built from thousands of thin basaltic lava flows (1-10m each)',
                        'Non-explosive, effusive eruptions (Hawaiian-type)',
                        'Low-silica basaltic magma (45-52% SiO₂)',
                        'Lava flows can travel 50+ km from vent before solidifying',
                        'Summit calderas common from roof collapse over drained magma chamber',
                        'Rift zones on flanks where parallel fissure eruptions occur',
                        'Lava tubes form underground channels for long-distance flow',
                        'Pahoehoe (smooth, ropy) and aa (rough, blocky) lava surface textures',
                        'Relatively safe to observe - predictable, slow-moving eruptions',
                        'Form at hotspots (Hawaii, Galápagos) and divergent boundaries (Iceland)',
                        'Can grow from seafloor (5,000m deep) to above sea level creating oceanic islands'
                    ],

                    examples: [
                        {
                            name: 'Mauna Loa',
                            location: 'Hawaii, USA (Big Island)',
                            stats: 'Height: 4,169m above sea level (9,170m from seafloor) | Volume: 75,000 km³ | Last eruption: 2022',
                            age: '700,000-1,000,000 years',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Hawaiian hotspot (intraplate)',
                            link: '/encyclopedia/volcanoes/mauna-loa',
                            image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=800&q=80',
                            notableFeatures: [
                                'Largest active volcano on Earth by volume (75,000 km³) and area (5,271 km²)',
                                'Part of Hawaiian hotspot chain - plate moves NW at 7 cm/year',
                                'Erupts every 6 years on average - 33 eruptions since 1843',
                                'Summit caldera: Moku\'āweoweo (6 km × 3 km, 183m deep)',
                                'Lava flows have reached the ocean 40+ times, adding new land',
                                'Name means "Long Mountain" in Hawaiian',
                                'If measured from seafloor base, it\'s taller than Mount Everest',
                                'November-December 2022: most recent eruption after 38-year repose'
                            ]
                        },
                        {
                            name: 'Mauna Kea',
                            location: 'Hawaii, USA (Big Island)',
                            stats: 'Height: 4,207m above sea level (10,210m from seafloor) | Status: Dormant',
                            age: '1 million years',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Hawaiian hotspot (moved off center)',
                            link: '/encyclopedia/volcanoes/mauna-kea',
                            image: 'https://source.unsplash.com/800x600/?mauna+kea+hawaii',
                            notableFeatures: [
                                'Tallest mountain on Earth measured base-to-peak (10,210m) - taller than Everest!',
                                'Summit hosts world\'s premier astronomical observatory complex (13 telescopes)',
                                'Sacred to Native Hawaiians - "Piko" (navel/origin point) of Hawaiian Islands',
                                'Last erupted approximately 4,500 years ago - moved off hotspot',
                                'Evidence of glaciers during Pleistocene ice ages (unique for tropical latitude)',
                                'Permafrost still present near summit in cinder cones',
                                'Name means "White Mountain" - snow-capped in winter',
                                'Older than Mauna Loa, approaching end of active life'
                            ]
                        },
                        {
                            name: 'Kilauea',
                            location: 'Hawaii, USA (Big Island)',
                            stats: 'Height: 1,247m | Status: One of world\'s most active volcanoes',
                            age: '300,000-600,000 years',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Hawaiian hotspot (directly over plume)',
                            link: '/encyclopedia/volcanoes/kilauea',
                            image: 'https://source.unsplash.com/800x600/?kilauea+lava',
                            notableFeatures: [
                                'Erupted almost continuously from 1983-2018 (35 years)',
                                'Halema\'uma\'u lava lake at summit - reformed after 2020',
                                'Hawaii Volcanoes National Park - UNESCO World Heritage Site',
                                'Added 500+ acres of new land to Hawaii since 1983',
                                'Home to Pele - Hawaiian goddess of volcanoes and fire',
                                '2018 Lower East Rift Zone eruption: 24 fissures, destroyed 700+ homes',
                                '2018 summit collapse: caldera dropped 500m, lost lava lake',
                                'Name means "spewing" or "much spreading" in Hawaiian'
                            ]
                        },
                        {
                            name: 'Fernandina',
                            location: 'Galápagos Islands, Ecuador',
                            stats: 'Height: 1,476m | Status: Active | Last eruption: 2020',
                            age: '30,000-100,000 years (youngest Galápagos island)',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Galápagos hotspot',
                            link: '/encyclopedia/volcanoes/fernandina',
                            image: 'https://source.unsplash.com/800x600/?galapagos+volcano',
                            notableFeatures: [
                                'Most active and youngest volcano in Galápagos',
                                'Near-perfect shield shape - textbook example',
                                'Large summit caldera (6.5 km × 5 km, 900m deep)',
                                'Pristine ecosystem - no introduced species (Galápagos National Park)',
                                'Home to flightless cormorants, marine iguanas, Galápagos penguins',
                                'Erupted 24 times since 1813 - very frequent activity',
                                'Inspired Darwin\'s theory of evolution during Beagle voyage',
                                '1968 caldera floor collapsed 350m in single event'
                            ]
                        },
                        {
                            name: 'Piton de la Fournaise',
                            location: 'Réunion Island, France (Indian Ocean)',
                            stats: 'Height: 2,632m | Status: Very active | Last eruption: 2023',
                            age: '530,000 years',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Réunion hotspot',
                            link: '/encyclopedia/volcanoes/piton-fournaise',
                            image: 'https://source.unsplash.com/800x600/?reunion+volcano',
                            notableFeatures: [
                                'One of world\'s most active volcanoes - erupts almost yearly',
                                '150+ eruptions since 1640 (documented by French colonists)',
                                'Relatively safe to observe - major tourist attraction',
                                'Formed by Réunion hotspot (same plume that created Deccan Traps 66 MYA)',
                                'Three nested calderas from repeated collapse events',
                                'Lava flows regularly reach Indian Ocean',
                                'Volcanological Observatory monitors 24/7',
                                'Name means "Peak of the Furnace" in French'
                            ]
                        },
                        {
                            name: 'Wolf Volcano',
                            location: 'Isabela Island, Galápagos, Ecuador',
                            stats: 'Height: 1,707m (highest in Galápagos) | Status: Active | Last eruption: 2022',
                            age: '~700,000 years',
                            type: 'Shield volcano (hotspot)',
                            tectonicSetting: 'Galápagos hotspot',
                            link: '/encyclopedia/volcanoes/wolf-volcano',
                            image: 'https://source.unsplash.com/800x600/?isabela+galapagos',
                            notableFeatures: [
                                'Tallest peak in Galápagos Islands',
                                'Only place on Earth with pink land iguanas (unique population)',
                                'Home to distinct population of Galápagos giant tortoises',
                                'Erupted 2015 after 33 years dormancy, again 2022',
                                'Steep caldera walls up to 700m high',
                                'Named after German geologist Theodor Wolf',
                                'One of 6 shield volcanoes forming Isabela Island',
                                'Basaltic eruptions with spectacular lava fountains'
                            ]
                        }
                    ],

                    hazards: [
                        'Lava flows - slow-moving (typically 1-10 km/h) but destructive to property; follow topography downslope',
                        'Laze (lava haze) - produced when lava enters ocean; creates toxic plume of hydrochloric acid mist and volcanic glass shards',
                        'Vog (volcanic smog) - mixture of SO₂ gas and aerosols; causes respiratory problems, acid rain, crop damage',
                        'Ground fractures and subsidence - rift zones can suddenly open; buildings may collapse into fissures',
                        'Rare explosive events - when water enters vent (phreatomagmatic); littoral explosions at ocean entries',
                        'Bench collapses - new land at ocean entries is unstable and can collapse suddenly without warning',
                        'Volcanic glass (Pele\'s hair and tears) - fine glass threads and droplets carried by wind; hazard to eyes, lungs',
                        'Tsunami - from large flank collapses (rare but catastrophic; past Hawaiian collapses generated 300m tsunamis)'
                    ],

                    globalDistribution: {
                        regions: [
                            'Hawaii (Pacific hotspot) - most famous shield volcano chain; Kilauea, Mauna Loa, Mauna Kea',
                            'Iceland (Mid-Atlantic Ridge + hotspot) - Skjaldbreiður, Erta Ale (rift shields)',
                            'Galápagos Islands (Pacific hotspot) - Fernandina, Wolf, Sierra Negra, Cerro Azul',
                            'Réunion Island (Indian Ocean hotspot) - Piton de la Fournaise',
                            'East African Rift (divergent boundary) - Erta Ale (Ethiopia) with persistent lava lake',
                            'Samoa Islands (Pacific hotspot) - Savai\'i',
                            'Canary Islands (Atlantic hotspot) - older eroded shields'
                        ],
                        percentage: '~15% of all subaerial volcanoes',
                        tectonicSetting: 'Primarily hotspots (intraplate) and divergent boundaries',
                        largest: 'Tamu Massif (Pacific Ocean) - largest single volcano on Earth; Olympus Mons (Mars) - largest in solar system'
                    }
                },

                {
                    id: 'composite',
                    name: 'Composite/Stratovolcanoes',
                    icon: '🗻',
                    color: '#c0392b',

                    definition: 'Composite volcanoes (stratovolcanoes) are tall, steep-sided, symmetrical cones built from alternating layers (strata) of viscous lava flows, volcanic ash, pumice, tephra, and pyroclastic deposits. They are formed from intermediate to high-silica magma (andesite, dacite, rhyolite) which is viscous and gas-rich, leading to explosive eruptions. These are the most dangerous and iconic volcanoes, responsible for most volcanic disasters in human history. The classic cone shape - what most people picture when thinking of a volcano - is the stratovolcano. They form almost exclusively at subduction zones.',

                    formation: {
                        title: 'How Composite Volcanoes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Oceanic plate subducts beneath continental or oceanic plate at convergent boundary (100-300 km depth)', icon: '⬇️' },
                            { step: 2, text: 'Water released from subducting plate (dehydration of serpentine, chlorite) lowers melting point of overlying mantle wedge', icon: '💧' },
                            { step: 3, text: 'Flux melting generates intermediate-silica magma (andesite, 52-63% SiO₂) - more viscous than basalt', icon: '🔥' },
                            { step: 4, text: 'Viscous magma rises slowly through crust, trapping dissolved volatiles (H₂O, CO₂, SO₂) under pressure', icon: '⬆️' },
                            { step: 5, text: 'Magma may stall in crustal chambers (5-15 km depth), evolving to more silica-rich compositions through crystal fractionation', icon: '⏸️' },
                            { step: 6, text: 'Pressure builds in magma chamber as volatiles exsolve from cooling, crystallizing magma', icon: '💪' },
                            { step: 7, text: 'Explosive eruption when pressure exceeds rock strength: volatiles expand rapidly, fragmenting magma into ash and pumice', icon: '💥' },
                            { step: 8, text: 'Pyroclastic materials (ash, lapilli, bombs) ejected and deposited in layers around vent; eruption column can reach 40+ km', icon: '☁️' },
                            { step: 9, text: 'Quieter effusive phase follows: viscous lava flows (short, thick) solidify on flanks as resistant layers', icon: '🌋' },
                            { step: 10, text: 'Alternating explosive/effusive phases over thousands of years build layered structure (strato = layers) with steep 30-35° slopes', icon: '🗻' }
                        ],
                        animation: 'composite-volcano-animation.mp4'
                    },

                    characteristics: [
                        'Steep slopes: 30-35° angle (classic symmetrical cone shape)',
                        'Tall, visually striking peaks - often snow-capped (Fuji, Rainier, Cotopaxi)',
                        'Built from alternating layers of lava flows and pyroclastic deposits',
                        'Intermediate to high-silica magma (52-70% SiO₂)',
                        'Highly explosive eruptions (Vulcanian, Plinian styles)',
                        'Viscous lava that doesn\'t flow far before solidifying (1-10 km typical)',
                        'Produce deadly pyroclastic flows (nuées ardentes) and lahars',
                        'Central summit crater; may have multiple vents and parasitic cones on flanks',
                        'Can collapse to form calderas after massive chamber-emptying eruptions',
                        'Often snow-capped and glacier-covered at high elevations',
                        'Located primarily at subduction zones (60% of all volcanoes)',
                        'Responsible for most volcanic disasters (highest death tolls)',
                        'Large eruptions can affect global climate through stratospheric aerosols',
                        'May have lava domes growing in craters between explosive phases',
                        'Frequent earthquake swarms precede eruptions (monitoring opportunity)'
                    ],

                    examples: [
                        {
                            name: 'Mount Fuji',
                            location: 'Japan (Honshu Island)',
                            stats: 'Height: 3,776m | Last eruption: 1707 | Status: Active (dormant)',
                            age: '100,000 years (current cone); older cones beneath',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Triple junction: Pacific, Philippine Sea, Eurasian plates',
                            VEI: '5 (1707 Hoei eruption)',
                            link: '/encyclopedia/volcanoes/fuji',
                            image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
                            notableFeatures: [
                                'Japan\'s highest peak and most iconic national symbol',
                                'UNESCO World Heritage Site (2013) as cultural site',
                                'Near-perfect symmetrical cone - inspirational to artists for centuries',
                                '1707 Hoei eruption: VEI 5, covered Edo (Tokyo) in ash, lasted 16 days',
                                'Sacred mountain in Shintoism - pilgrimage site for centuries',
                                '300,000+ climbers summit annually (July-August climbing season)',
                                'At triple junction of three tectonic plates - complex stress field',
                                'Last three eruptions: 1707, 1708, (minor), prehistoric - overdue?',
                                'Government has detailed evacuation plans for 35+ million people'
                            ]
                        },
                        {
                            name: 'Mount Vesuvius',
                            location: 'Italy (Campania, near Naples)',
                            stats: 'Height: 1,281m | Last eruption: 1944 | Status: Active',
                            age: '25,000 years (current cone)',
                            type: 'Somma-stratovolcano',
                            tectonicSetting: 'African Plate subducting under Eurasian Plate',
                            VEI: '5 (79 AD Plinian eruption)',
                            link: '/encyclopedia/volcanoes/vesuvius',
                            image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
                            notableFeatures: [
                                'Destroyed Pompeii and Herculaneum in 79 AD - preserved as archaeological sites',
                                '3 million people live in extreme danger zone (most densely populated volcanic area)',
                                'Only active volcano in mainland Europe (Etna is on Sicily island)',
                                'Somma caldera remnant from ancient larger volcano',
                                'Pliny the Younger wrote first detailed scientific description of eruption (79 AD)',
                                'Last eruption: March 1944 during WWII - destroyed 80 Allied aircraft',
                                'Continuously monitored by Osservatorio Vesuviano (oldest volcano observatory, 1841)',
                                'Government evacuation plan for 600,000+ people in highest-risk "red zone"',
                                '8+ major eruptions since 79 AD, including 1631 (4,000 deaths)'
                            ]
                        },
                        {
                            name: 'Mount St. Helens',
                            location: 'USA (Washington State)',
                            stats: 'Height: 2,549m (was 2,950m before 1980) | Status: Active',
                            age: '40,000 years (current edifice)',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Juan de Fuca Plate subducting under North American Plate',
                            VEI: '5 (1980 eruption)',
                            link: '/encyclopedia/volcanoes/st-helens',
                            image: 'https://source.unsplash.com/800x600/?mount+st+helens',
                            notableFeatures: [
                                'May 18, 1980 eruption: deadliest and most economically destructive in US history',
                                '57 deaths including volcanologist David Johnston',
                                'Lost 400m of summit height in seconds from lateral collapse',
                                'Debris avalanche: largest in recorded history (2.8 km³)',
                                'Lateral blast devastated 600 km² of forest, traveling at 1,080 km/h',
                                'Spirit Lake displaced creating 180m wave that stripped surrounding hills',
                                'Best-studied volcanic eruption in history - revolutionized volcanology',
                                'Lava dome growing since 1980: episodic growth 1980-86, 2004-08',
                                'Horseshoe-shaped crater now home to small glacier',
                                'Ecosystem recovery studied intensively - life returned surprisingly fast'
                            ]
                        },
                        {
                            name: 'Mount Pinatubo',
                            location: 'Philippines (Luzon Island)',
                            stats: 'Height: 1,486m | 1991 eruption: VEI 6 | Status: Active',
                            age: '1.1 million years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Eurasian Plate over Philippine Sea Plate subduction',
                            VEI: '6 (1991 - second largest eruption of 20th century)',
                            link: '/encyclopedia/volcanoes/pinatubo',
                            image: 'https://source.unsplash.com/800x600/?pinatubo',
                            notableFeatures: [
                                'June 15, 1991: second largest eruption of 20th century (after Novarupta 1912)',
                                'Ejected 10 km³ of material (dense rock equivalent 5 km³)',
                                'Cooled global temperatures by 0.5°C for 2 years from stratospheric SO₂',
                                'Formed 2.5 km wide caldera, now contains crater lake',
                                'Pyroclastic flows covered 400 km², reaching 16 km from vent',
                                'Lahars killed 300+ people in years following eruption (rain remobilizing ash)',
                                'Successful evacuation saved estimated 5,000-20,000 lives - triumph of monitoring',
                                'Dormant for 500+ years before 1991 - not even recognized as a volcano initially',
                                'Coincided with Typhoon Yunya, which worsened ash fall impact',
                                'Clark Air Base (US) and Subic Bay Naval Base heavily damaged/closed'
                            ]
                        },
                        {
                            name: 'Mount Rainier',
                            location: 'USA (Washington State)',
                            stats: 'Height: 4,392m | Last eruption: 1894 | Status: Active',
                            age: '500,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Juan de Fuca Plate subducting under North American',
                            VEI: '3-4 (historical eruptions)',
                            link: '/encyclopedia/volcanoes/rainier',
                            image: 'https://source.unsplash.com/800x600/?mount+rainier',
                            notableFeatures: [
                                'Most glaciated peak in contiguous USA (26 named glaciers, 93 km² ice)',
                                'Highest peak in Cascade Range - dominates Seattle skyline',
                                'Extreme lahar (volcanic mudflow) hazard to Seattle-Tacoma metro (3.8 million people)',
                                'One of 16 "Decade Volcanoes" - highest priority for global monitoring',
                                'Active geothermal system melting ice, creating summit crater fumaroles and caves',
                                'Osceola Mudflow (5,600 years ago): traveled 120 km, covered Puget Sound lowlands',
                                'Lahar warning time to populated valleys: only 30-45 minutes',
                                'USGS lahar detection system with sirens in river valleys',
                                'Heavily weathered, hydrothermally altered flanks prone to collapse',
                                'Last significant eruption ~1,000 years ago; ongoing minor activity'
                            ]
                        },
                        {
                            name: 'Mount Etna',
                            location: 'Italy (Sicily)',
                            stats: 'Height: 3,357m (variable) | Status: Very active | Europe\'s most active',
                            age: '500,000 years',
                            type: 'Stratovolcano (complex)',
                            tectonicSetting: 'Complex - African Plate collision with Eurasian',
                            VEI: '1-3 (typical eruptions)',
                            link: '/encyclopedia/volcanoes/etna',
                            image: 'https://source.unsplash.com/800x600/?mount+etna',
                            notableFeatures: [
                                'Europe\'s tallest and most active volcano',
                                'Erupts almost continuously - small explosions, lava flows, strombolian activity',
                                '4 summit craters + 300+ lateral vents and cones',
                                'Documented eruptions for 2,700+ years (Greek colonists, 475 BC earliest reliable)',
                                'UNESCO World Heritage Site (2013)',
                                'Supports extensive agriculture - vineyards and orchards on fertile volcanic slopes',
                                'Lava fountains regularly reach 1 km height during paroxysms',
                                'Ski resorts on upper flanks (bizarre: skiing above active vents)',
                                '2021: 50+ paroxysmal episodes with spectacular lava fountains',
                                'Name from Greek "aitne" meaning "I burn"'
                            ]
                        },
                        {
                            name: 'Mount Merapi',
                            location: 'Indonesia (Java)',
                            stats: 'Height: 2,930m | Status: Very active | Last major: 2010',
                            age: '400,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Indo-Australian Plate subducting under Eurasian Plate',
                            VEI: '4 (2010 eruption)',
                            link: '/encyclopedia/volcanoes/merapi',
                            image: 'https://source.unsplash.com/800x600/?mount+merapi',
                            notableFeatures: [
                                'Indonesia\'s most active volcano - erupts every 2-5 years on average',
                                '1+ million people live on its fertile slopes despite extreme danger',
                                'Summit lava dome constantly growing, periodically collapsing',
                                '2010 eruption: 350+ deaths (VEI 4), largest since 1872',
                                'Pyroclastic flows (nuées ardentes) from dome collapse are primary hazard',
                                'Yogyakarta city (2.6 million) at southern base',
                                'Name means "Mountain of Fire" in Javanese',
                                'Monitored 24/7 by BPPTKG (Indonesian volcano monitoring center)',
                                'Cultural significance: offerings made to mountain spirits',
                                'Dense population due to extremely fertile volcanic soils'
                            ]
                        },
                        {
                            name: 'Krakatoa (Anak Krakatau)',
                            location: 'Indonesia (Sunda Strait)',
                            stats: 'Height: 338m (growing) | Status: Active',
                            age: 'Anak emerged 1927; original Krakatau ancient',
                            type: 'Stratovolcano/Caldera complex',
                            tectonicSetting: 'Indo-Australian Plate subducting under Eurasian',
                            VEI: '6 (1883 - one of largest in recorded history)',
                            link: '/encyclopedia/volcanoes/krakatoa',
                            image: 'https://source.unsplash.com/800x600/?krakatoa',
                            notableFeatures: [
                                '1883 eruption: VEI 6, fourth largest in recorded history',
                                'Generated 40m tsunamis that killed 36,000+ people',
                                'Explosion heard 4,800 km away in Australia - loudest sound in recorded history',
                                'Ejected 25 km³ of material, collapsed 2/3 of island into caldera',
                                'Global temperature dropped 1.2°C; spectacular sunsets for years',
                                'Anak Krakatau ("Child of Krakatoa") emerged from caldera in 1927',
                                'Growing at ~5m/year before 2018 collapse',
                                '2018 flank collapse: generated tsunami killing 437 people',
                                '2018 collapse reduced island from 338m to 110m height',
                                'Continuous small eruptions and rebuilding since 2018'
                            ]
                        },
                        {
                            name: 'Popocatépetl',
                            location: 'Mexico (Central Mexico)',
                            stats: 'Height: 5,426m | Status: Active | Ongoing eruption since 1994',
                            age: '730,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Cocos Plate subducting under North American Plate',
                            VEI: '2-3 (current activity)',
                            link: '/encyclopedia/volcanoes/popocatepetl',
                            image: 'https://source.unsplash.com/800x600/?popocatepetl',
                            notableFeatures: [
                                'Second highest peak in Mexico (after Pico de Orizaba)',
                                'Name means "Smoking Mountain" in Nahuatl',
                                '25 million people live within 100 km - huge population at risk',
                                'Frequent ash emissions close Mexico City\'s international airport',
                                'Ongoing activity since December 1994 after 70-year repose',
                                'Twin volcano: Iztaccíhuatl (dormant "White Woman")',
                                'Aztec mythology: two lovers turned to mountains',
                                'CENAPRED (Mexico\'s volcano observatory) monitors continuously',
                                'Alert level raised to Yellow (Phase 2) frequently',
                                'Glacier-covered summit - lahar hazard potential'
                            ]
                        },
                        {
                            name: 'Cotopaxi',
                            location: 'Ecuador (Andes)',
                            stats: 'Height: 5,897m | Last eruption: 2015 | Status: Active',
                            age: '570,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Nazca Plate subducting under South American Plate',
                            VEI: '4 (historical eruptions)',
                            link: '/encyclopedia/volcanoes/cotopaxi',
                            image: 'https://source.unsplash.com/800x600/?cotopaxi',
                            notableFeatures: [
                                'One of world\'s highest active volcanoes',
                                'Near-perfect symmetrical cone - one of most beautiful volcanoes',
                                'Permanent ice cap above 5,000m (threatened by climate change)',
                                'Major lahar threat: 1877 lahars traveled 100+ km, killed 1,000',
                                'Quito (capital, 2.8 million people) only 50 km away',
                                '50+ eruptions since 1738 (well-documented by Spanish)',
                                'Part of Ecuador\'s "Avenue of the Volcanoes"',
                                '2015 reawakening after 138 years: ash emissions, lahars',
                                'National park protects slopes with Andean wildlife',
                                'Name from Quechua: "Neck of the Moon"'
                            ]
                        },
                        {
                            name: 'Mayon Volcano',
                            location: 'Philippines (Luzon)',
                            stats: 'Height: 2,463m | Status: Active | Last eruption: 2018',
                            age: '~25,000 years (current cone)',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Philippine Sea Plate subducting under Philippine Mobile Belt',
                            VEI: '4 (1814 eruption)',
                            link: '/encyclopedia/volcanoes/mayon',
                            image: 'https://source.unsplash.com/800x600/?mayon+volcano',
                            notableFeatures: [
                                'World\'s most perfectly formed volcanic cone - textbook stratovolcano',
                                'Erupted 50+ times in 400 years - very active',
                                '1814 eruption: VEI 4, buried town of Cagsawa, killed 1,200',
                                'Cagsawa church ruins: iconic photo with Mayon in background',
                                'Frequent lava flows and pyroclastic flows',
                                '3 million people live within danger zones (Albay province)',
                                'Named after legendary beautiful woman Daragang Magayon',
                                '2018 eruption: 90,000 evacuated, lava dome growth',
                                'Permanent danger zone within 6 km radius - strictly enforced',
                                'Strombolian to Plinian eruption styles'
                            ]
                        },
                        {
                            name: 'Tambora',
                            location: 'Indonesia (Sumbawa Island)',
                            stats: 'Height: 2,850m (was 4,300m before 1815) | Last eruption: 1967',
                            age: '57,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Indo-Australian Plate subducting under Eurasian',
                            VEI: '7 (1815 - largest eruption in recorded human history)',
                            link: '/encyclopedia/volcanoes/tambora',
                            image: 'https://source.unsplash.com/800x600/?tambora',
                            notableFeatures: [
                                'April 1815: largest eruption in recorded history (VEI 7)',
                                'Ejected 100+ km³ of material - 100× more than Mt. St. Helens',
                                'Killed 71,000+ directly + from resulting famine',
                                'Lost 1,450m of height - mountain collapsed into 6 km caldera',
                                'Caused "Year Without Summer" 1816: global cooling 0.4-0.7°C',
                                '1816: Snow in June (New England), crop failures worldwide, famine',
                                'Inspired Mary Shelley\'s "Frankenstein" (dark summer at Lake Geneva)',
                                'Tambora culture obliterated - language went extinct',
                                'Sound heard 2,600 km away in Sumatra',
                                'Sulfate aerosols circled globe, spectacular sunsets for years'
                            ]
                        },
                        {
                            name: 'Nyiragongo',
                            location: 'DR Congo (Virunga Mountains)',
                            stats: 'Height: 3,470m | Status: Active | Persistent lava lake',
                            age: '~10,000 years (current cone)',
                            type: 'Stratovolcano',
                            tectonicSetting: 'East African Rift (continental divergence)',
                            VEI: '1-2 (effusive but extremely fast flows)',
                            link: '/encyclopedia/volcanoes/nyiragongo',
                            image: 'https://source.unsplash.com/800x600/?nyiragongo',
                            notableFeatures: [
                                'World\'s largest persistent lava lake in summit crater (200m+ diameter)',
                                'Extremely fluid nephelinite lava - flows at up to 100 km/h',
                                '2002 eruption: lava flows destroyed 15% of Goma city, 400,000 displaced',
                                '2021 eruption: killed 32+, forced 400,000 to evacuate',
                                'Lava lake is 600m deep - one of deepest lava lakes on Earth',
                                'One of Africa\'s most active and dangerous volcanoes',
                                'Part of Virunga National Park (mountain gorilla habitat)',
                                'Conflict zone complicates monitoring and evacuation',
                                '1977 flank eruption: lava flows killed 70 in minutes',
                                'Lava lake drained in 1977, reformed within months'
                            ]
                        },
                        {
                            name: 'Sakurajima',
                            location: 'Japan (Kyushu)',
                            stats: 'Height: 1,117m | Status: Very active | Daily explosions',
                            age: '26,000 years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'Philippine Sea Plate subducting under Eurasian',
                            VEI: '4 (1914 Taishō eruption)',
                            link: '/encyclopedia/volcanoes/sakurajima',
                            image: 'https://source.unsplash.com/800x600/?sakurajima',
                            notableFeatures: [
                                'One of Japan\'s most active volcanoes - hundreds of explosions per year',
                                'Ash falls daily on Kagoshima city (600,000 people) across bay',
                                '1914 Taishō eruption: lava flows connected island to mainland',
                                'Vulcanian eruption style - cannon-like explosive blasts',
                                'Continuously monitored: eruption drills and ash cleanup routine',
                                'Part of larger Aira caldera (30,000 years old)',
                                'Concrete shelters throughout city for ash and bomb protection',
                                'Citizens carry umbrellas for ash, not rain',
                                'Ferries run between Kagoshima and volcano base',
                                'Symbol of Japanese volcanic resilience'
                            ]
                        },
                        {
                            name: 'Mount Erebus',
                            location: 'Antarctica (Ross Island)',
                            stats: 'Height: 3,794m | Status: Active | Persistent lava lake',
                            age: '1.3 million years',
                            type: 'Stratovolcano',
                            tectonicSetting: 'West Antarctic Rift System',
                            VEI: '1-2 (typical)',
                            link: '/encyclopedia/volcanoes/erebus',
                            image: 'https://source.unsplash.com/800x600/?mount+erebus+antarctica',
                            notableFeatures: [
                                'Southernmost active volcano on Earth',
                                'One of only ~5 volcanoes with persistent lava lake',
                                'Unique phonolite magma composition (unusual chemistry)',
                                'Ice towers: fumarole steam creates frozen chimneys on flanks',
                                'McMurdo Station (US Antarctic base) on its lower slopes',
                                '1979 Air New Zealand disaster: DC-10 crashed into mountain, 257 killed',
                                'Year-round scientific research station at summit',
                                'Named after HMS Erebus (James Clark Ross expedition, 1841)',
                                'Lava bombs ejected from lava lake (strombolian activity)',
                                'Extreme environment for volcanology research'
                            ]
                        }
                    ],

                    hazards: [
                        'Pyroclastic flows (most deadly): 200-800°C, 100-700 km/h, hugs ground, impossible to outrun - destroys everything',
                        'Lahars (volcanic mudflows): triggered by eruption melting glaciers/snow, crater lake breach, or heavy rain on ash; travel 50-100+ km following valleys',
                        'Ash fall: roof collapse (wet ash very heavy), aviation disruption (abrades jet engines), respiratory hazard, crop damage, water contamination',
                        'Volcanic bombs and blocks: ballistic projectiles up to 10+ km from vent during explosive phases',
                        'Lateral blasts (directed explosions): when flank collapses or dome fails (Mt. St. Helens 1980)',
                        'Tsunamis: from flank collapse into water (Krakatoa 1883, Anak Krakatau 2018)',
                        'Climate effects: VEI 6+ eruptions inject SO₂ into stratosphere causing global cooling for 1-3 years',
                        'Volcanic gases (SO₂, CO₂, H₂S, HCl, HF): acid rain, respiratory hazard, can pool in depressions',
                        'Debris avalanches: catastrophic flank collapse (Mt. St. Helens: 2.8 km³)',
                        'Dome collapse: generates deadly block-and-ash flows (Unzen 1991: 43 killed including volcanologists)'
                    ],

                    globalDistribution: {
                        regions: [
                            'Pacific Ring of Fire (75% of stratovolcanoes) - entire Pacific rim subduction zones',
                            'Indonesia: 130 active volcanoes - most volcanic country (Merapi, Krakatoa, Tambora, Kelut)',
                            'Japan: 110 active volcanoes (Fuji, Sakurajima, Unzen, Asama)',
                            'Philippines: 24 active volcanoes (Pinatubo, Mayon, Taal)',
                            'Andes Mountains: 200+ volcanoes (Cotopaxi, Chimborazo, Villarrica)',
                            'Cascades (USA/Canada): 20 major volcanoes (Rainier, St. Helens, Hood, Shasta)',
                            'Central America volcanic arc: Guatemala to Panama (Fuego, Santa María, Arenal)',
                            'Mediterranean: Italy (Vesuvius, Etna, Stromboli), Greece (Santorini, Nisyros)',
                            'Kamchatka Peninsula (Russia): 30 active volcanoes (Klyuchevskaya, Bezymianny)',
                            'Alaska and Aleutian Islands: 130 volcanoes (Redoubt, Augustine, Pavlof)'
                        ],
                        percentage: '~60% of all subaerial volcanoes',
                        tectonicSetting: 'Primarily subduction zones (convergent boundaries)',
                        deadliest: 'Stratovolcanoes have caused ~90% of volcanic deaths in recorded history'
                    }
                },

                {
                    id: 'cinder',
                    name: 'Cinder Cone Volcanoes',
                    icon: '🔺',
                    color: '#e67e22',

                    definition: 'Cinder cone volcanoes (also called scoria cones or pyroclastic cones) are the smallest and simplest type of volcano, built from volcanic fragments (cinders, scoria, bombs) that accumulate around a single vent. They form from gas-rich basaltic to andesitic magma that erupts in moderately explosive Strombolian-type eruptions, ejecting glowing fragments that cool during flight and pile up around the vent. Most cinder cones are monogenetic - they erupt once (over days to years) and never again, unlike polygenetic stratovolcanoes. They are the most common type of volcano on Earth by number.',

                    formation: {
                        title: 'How Cinder Cones Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Basaltic or basaltic-andesitic magma with moderate-to-high dissolved gas content rises toward surface', icon: '⬆️' },
                            { step: 2, text: 'Gas bubbles expand rapidly as confining pressure decreases near surface', icon: '🫧' },
                            { step: 3, text: 'Magma reaches surface and erupts explosively in Strombolian-style bursts every few seconds to minutes', icon: '💥' },
                            { step: 4, text: 'Lava fragments (scoria, cinders, volcanic bombs) ejected 50-300m into air', icon: '🎆' },
                            { step: 5, text: 'Fragments cool during flight, landing as solid or semi-molten pieces around vent', icon: '🌡️' },
                            { step: 6, text: 'Accumulated material piles up at angle of repose (30-40° - steepest natural slope for loose material)', icon: '📐' },
                            { step: 7, text: 'Steep-sided cone grows rapidly - can form in days, weeks, or years', icon: '⛰️' },
                            { step: 8, text: 'Bowl-shaped summit crater forms from explosion excavation', icon: '🥣' },
                            { step: 9, text: 'Lava often breaches base of cone, flowing outward as lava flows (weak point in loose scoria)', icon: '🌋' },
                            { step: 10, text: 'Eruption ends when gas-rich magma batch is exhausted - cone becomes extinct (monogenetic)', icon: '✅' }
                        ],
                        animation: 'cinder-cone-animation.mp4'
                    },

                    characteristics: [
                        'Smallest volcano type: typically 30-300m tall (rarely exceeds 400m)',
                        'Very steep slopes: 30-40° (angle of repose for loose pyroclastic material)',
                        'Simple cone shape with bowl-shaped summit crater (often breached)',
                        'Built entirely from loose pyroclastic fragments (scoria, cinders, bombs)',
                        'Single vent structure (no complex conduit system)',
                        'Short-lived: typically days to few years of activity',
                        'Monogenetic: usually erupt only once and never reactivate',
                        'Often occur on flanks of larger volcanoes (parasitic cones)',
                        'Strombolian eruption style: rhythmic explosive bursts',
                        'Lava flows commonly break out from cone base (weak point)',
                        'No layered structure (unlike stratovolcanoes) - just loose fragments',
                        'Easily eroded due to loose, unconsolidated material',
                        'Frequently occur in groups (volcanic fields with hundreds of cones)',
                        'Relatively low hazard: predictable, localized, effusive lava'
                    ],

                    examples: [
                        {
                            name: 'Parícutin',
                            location: 'Mexico (Michoacán State)',
                            stats: 'Height: 424m above original ground | Erupted: 1943-1952 | Status: Extinct',
                            age: '81 years old (born February 20, 1943)',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'Trans-Mexican Volcanic Belt (subduction)',
                            VEI: '4 (at peak activity)',
                            link: '/encyclopedia/volcanoes/paricutin',
                            image: 'https://source.unsplash.com/800x600/?paricutin',
                            notableFeatures: [
                                'Only volcano in human history witnessed from birth to extinction',
                                'Emerged from farmer Dionisio Pulido\'s cornfield on February 20, 1943',
                                'Grew 336m in its first year alone - remarkable growth rate',
                                'Buried villages of Parícutin and San Juan Parangaricutiro',
                                'Church tower of San Juan still visible above lava field - iconic image',
                                'Erupted continuously for 9 years (1943-1952), then went extinct',
                                'Total lava volume: 1.3 km³, covering 25 km²',
                                'One of Seven Natural Wonders of the World',
                                'No direct fatalities but three deaths from lightning in ash clouds',
                                'Extensively studied - revolutionized understanding of monogenetic volcanism'
                            ]
                        },
                        {
                            name: 'Sunset Crater',
                            location: 'USA (Arizona)',
                            stats: 'Height: 300m above surrounding plain | Eruption: ~1085 AD | Status: Extinct',
                            age: '~940 years old',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'San Francisco Volcanic Field (extension/hotspot?)',
                            VEI: '3',
                            link: '/encyclopedia/volcanoes/sunset-crater',
                            image: 'https://source.unsplash.com/800x600/?sunset+crater',
                            notableFeatures: [
                                'Youngest volcano in Colorado Plateau region',
                                'Named for red and orange oxidized cinders at summit (sunset colors)',
                                'Lava flows from base cover 8 km²',
                                'Sunset Crater Volcano National Monument (protected)',
                                'Eruption displaced Sinagua people, later attracted them with fertile ash',
                                'Part of San Francisco Volcanic Field (600+ cinder cones)',
                                'Eruption may have lasted 100+ years in multiple phases',
                                'Bonito lava flow is dramatic example of aa flow',
                                'Tree molds preserved in lava flows',
                                'Black cinders contrast beautifully with red summit'
                            ]
                        },
                        {
                            name: 'Cerro Negro',
                            location: 'Nicaragua',
                            stats: 'Height: 728m | Status: Active | Last eruption: 1999',
                            age: '174 years (born April 1850)',
                            type: 'Cinder cone (active - unusual for cinder cone)',
                            tectonicSetting: 'Central American volcanic arc (subduction)',
                            VEI: '3 (1992 eruption)',
                            link: '/encyclopedia/volcanoes/cerro-negro',
                            image: 'https://source.unsplash.com/800x600/?cerro+negro',
                            notableFeatures: [
                                'Youngest volcano in Central America',
                                'Unusually active for cinder cone: 23 eruptions since 1850',
                                'Unusual basaltic composition for subduction zone (most are andesitic)',
                                'Popular "volcano boarding" (sandboarding) tourist destination',
                                'Black ash and scoria slopes create dramatic landscape',
                                'Part of Marrabios Range volcanic chain',
                                'Growing rapidly with each eruption - defying monogenetic classification',
                                '1992 eruption: ash fell on León city, 18 km away',
                                'One of most accessible active volcanoes in world',
                                'May eventually become stratovolcano if activity continues'
                            ]
                        },
                        {
                            name: 'SP Crater',
                            location: 'USA (Arizona)',
                            stats: 'Height: 250m above plain | Eruption: ~71,000 years ago | Status: Extinct',
                            age: '71,000 years',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'San Francisco Volcanic Field',
                            VEI: '2-3',
                            link: '/encyclopedia/volcanoes/sp-crater',
                            image: 'https://source.unsplash.com/800x600/?sp+crater+arizona',
                            notableFeatures: [
                                'Perfect textbook example of cinder cone morphology',
                                'Pristine - never been mined (protected)',
                                'Spectacular lava flow extends 6.4 km from breached base',
                                'Used in NASA Apollo astronaut geology training',
                                'Part of San Francisco Volcanic Field',
                                'Bowl crater perfectly preserved at summit',
                                'National Natural Landmark designation',
                                'Name "SP" origin uncertain (possibly "Shit Pot" from ranchers)',
                                'Visible dark lava flow contrasts with light surroundings',
                                'Best example of cone-and-flow relationship'
                            ]
                        },
                        {
                            name: 'Capulin Volcano',
                            location: 'USA (New Mexico)',
                            stats: 'Height: 458m (244m above surrounding plain) | Eruption: ~60,000 years ago',
                            age: '60,000 years',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'Raton-Clayton Volcanic Field (extension)',
                            VEI: '2-3',
                            link: '/encyclopedia/volcanoes/capulin',
                            image: 'https://source.unsplash.com/800x600/?capulin+volcano',
                            notableFeatures: [
                                'Near-perfect symmetrical cinder cone',
                                'Capulin Volcano National Monument since 1916',
                                'Paved road spirals to summit crater rim',
                                '360° views from crater rim - see into 4 states on clear days',
                                'Four lava flows extend from cone base',
                                'One of youngest volcanoes in Raton-Clayton field',
                                'Vent tube visible at bottom of crater',
                                'Trail descends into crater interior',
                                'Named for chokecherry bushes (capulín in Spanish)',
                                'Excellent preservation due to dry climate'
                            ]
                        },
                        {
                            name: 'Puu Puai',
                            location: 'Hawaii, USA (Kilauea, Big Island)',
                            stats: 'Height: 48m above pre-eruption surface | Eruption: 1959 | Status: Dormant',
                            age: '65 years old',
                            type: 'Cinder/spatter cone',
                            tectonicSetting: 'Hawaiian hotspot',
                            VEI: '2',
                            link: '/encyclopedia/volcanoes/puu-puai',
                            image: 'https://source.unsplash.com/800x600/?kilauea+crater',
                            notableFeatures: [
                                'Formed during spectacular 1959 Kilauea Iki eruption',
                                'Lava fountains reached record height of 580m (1,900 ft)',
                                'Built in just 36 days of eruption',
                                'Located in Hawaii Volcanoes National Park',
                                'Overlooks Kilauea Iki crater (solidified lava lake)',
                                'Spatter and cinder composition mixed',
                                'Name means "Gushing Hill" in Hawaiian',
                                'Devastation Trail shows forest killed by fallout',
                                'Popular hiking destination with interpretive signs',
                                'Example of Hawaiian-style cinder cone formation'
                            ]
                        },
                        {
                            name: 'Lava Butte',
                            location: 'USA (Oregon)',
                            stats: 'Height: 152m above surrounding lava field | Eruption: ~7,000 years ago',
                            age: '~7,000 years',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'Newberry Volcanic Complex (hotspot/extension)',
                            VEI: '2',
                            link: '/encyclopedia/volcanoes/lava-butte',
                            image: 'https://source.unsplash.com/800x600/?lava+butte+oregon',
                            notableFeatures: [
                                'Lava Lands Visitor Center at base (educational)',
                                'Paved road spirals to summit with fire lookout',
                                'Lava River Cave nearby - 1.6 km lava tube open to public',
                                'Basaltic lava flow diverted around cone',
                                'Part of Newberry National Volcanic Monument',
                                'One of youngest volcanoes in region',
                                'Excellent interpretive trails explain formation',
                                'View of entire lava flow field from summit',
                                'Classic Pacific Northwest cinder cone',
                                'Eruption dammed Deschutes River temporarily'
                            ]
                        },
                        {
                            name: 'Inferno Cone',
                            location: 'USA (Idaho, Craters of the Moon)',
                            stats: 'Height: 183m above lava field | Eruption: ~2,000 years ago',
                            age: '~2,000 years',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'Great Rift volcanic zone (extension)',
                            VEI: '2',
                            link: '/encyclopedia/volcanoes/inferno-cone',
                            image: 'https://source.unsplash.com/800x600/?craters+moon+idaho',
                            notableFeatures: [
                                'Highest point in Craters of the Moon National Monument',
                                'Symmetrical cinder cone with obvious crater',
                                'Trail to summit offers panoramic views of lava field',
                                'Part of Great Rift volcanic zone (series of fissures)',
                                'Craters of the Moon has 25+ cinder cones',
                                'Apollo astronauts trained here (moon-like landscape)',
                                'Basaltic cinders and bombs scattered on slopes',
                                'Named for harsh, unvegetated appearance',
                                'Lava field covers 1,600 km²',
                                'Youngest eruptions only 2,000 years ago - will erupt again'
                            ]
                        },
                        {
                            name: 'Amboy Crater',
                            location: 'USA (California, Mojave Desert)',
                            stats: 'Height: 75m above surrounding lava field | Eruption: ~6,000 years ago',
                            age: '~6,000 years',
                            type: 'Cinder cone (monogenetic)',
                            tectonicSetting: 'Basin and Range extension',
                            VEI: '1-2',
                            link: '/encyclopedia/volcanoes/amboy-crater',
                            image: 'https://source.unsplash.com/800x600/?amboy+crater',
                            notableFeatures: [
                                'Symmetrical crater in Mojave Desert',
                                'Basaltic lava flows surround cone',
                                'BLM National Natural Landmark',
                                'Popular hiking destination (trail to crater rim)',
                                'Breach on west side from lava flow outbreak',
                                                                'Part of Mojave Desert volcanic field',
                                'Visible from historic Route 66',
                                'Lava flows cover approximately 70 km²',
                                'Excellent example of desert cinder cone preservation',
                                'Roy\'s Motel and Café nearby - iconic Route 66 stop',
                                'Interior of crater accessible via trail'
                            ]
                        },
                        {
                            name: 'Monte Nuovo',
                            location: 'Italy (Campi Flegrei, near Naples)',
                            stats: 'Height: 133m | Eruption: September-October 1538 | Status: Extinct',
                            age: '486 years old',
                            type: 'Cinder/tuff cone (monogenetic)',
                            tectonicSetting: 'Campi Flegrei caldera (subduction)',
                            VEI: '3',
                            link: '/encyclopedia/volcanoes/monte-nuovo',
                            image: 'https://source.unsplash.com/800x600/?campi+flegrei',
                            notableFeatures: [
                                'Youngest volcano in Campi Flegrei caldera complex',
                                'Formed in just 8 days (September 29 - October 6, 1538)',
                                'Only historical eruption in Campi Flegrei in last 500 years',
                                'Destroyed village of Tripergole',
                                'Preceded by years of ground uplift (bradyseism)',
                                'Warning that Campi Flegrei supervolcano system is still active',
                                'Part of Campi Flegrei Regional Park',
                                'Well-documented historical eruption (Renaissance Italy)',
                                'Small but significant - formed within supervolcano caldera',
                                '24 people killed when eruption resumed after pause'
                            ]
                        }
                    ],

                    hazards: [
                        'Lava flows - usually from breached base of cone; follow topography; typically 1-10 km/h',
                        'Falling volcanic bombs and blocks - ballistic projectiles up to 1-2 km from vent; can be car-sized',
                        'Ash fall - localized, usually within 10-20 km; respiratory hazard, roof loading',
                        'Fires from hot fragments - incandescent bombs can ignite vegetation',
                        'Ground fracturing - fissures may open around cone',
                        'Limited area of impact - typically within 10-20 km radius (much safer than stratovolcanoes)',
                        'Gas emissions - usually minor SO₂, CO₂',
                        'Tephra fallout - blankets surrounding area, damages crops',
                        'Lava tube roof collapse - hazard after eruption ends'
                    ],

                    globalDistribution: {
                        regions: [
                            'Found worldwide in all tectonic settings - most common volcano type by number',
                            'San Francisco Volcanic Field (Arizona, USA) - 600+ cinder cones',
                            'Michoacán-Guanajuato Volcanic Field (Mexico) - 1,400+ cones including Parícutin',
                            'Auckland Volcanic Field (New Zealand) - 50+ cones under major city',
                            'Trans-Mexican Volcanic Belt - hundreds of cones along subduction zone',
                            'Snake River Plain (Idaho, USA) - Great Rift volcanic zone',
                            'Parasitic cones on larger volcanoes (Etna has 300+ flank cones)',
                            'East African Rift - numerous small cones along fissures',
                            'Iceland - many small cones along rift zones',
                            'Canary Islands - numerous cones (La Palma, Lanzarote)'
                        ],
                        percentage: '~25% of all volcanoes (most numerous type by count)',
                        tectonicSetting: 'All settings - hotspots, rifts, subduction zones, extensional basins',
                        volcanoFields: 'Often occur in volcanic fields containing 50-1,400+ individual cones'
                    }
                },

                {
                    id: 'caldera',
                    name: 'Caldera Volcanoes (Supervolcanoes)',
                    icon: '🕳️',
                    color: '#9b59b6',

                    definition: 'Calderas are large volcanic depressions (1-80+ km diameter) formed when a volcano\'s magma chamber empties rapidly during a cataclysmic eruption, causing the overlying rock to collapse inward. Unlike craters (formed by explosion), calderas form primarily by subsidence and collapse. They represent Earth\'s most powerful volcanic systems, capable of supereruptions (VEI 7-8) that can affect global climate for years and potentially threaten human civilization. Many calderas later fill with lakes or develop resurgent domes as magma re-enters the chamber. The term "supervolcano" (VEI 8 capable) applies to the largest caldera systems.',

                    formation: {
                        title: 'How Calderas Form - Complete Process',
                        steps: [
                            { step: 1, text: 'Massive magma chamber accumulates at shallow depth (5-15 km) over thousands to tens of thousands of years', icon: '🎈' },
                            { step: 2, text: 'High-silica rhyolitic or dacitic magma becomes extremely viscous and traps dissolved gases', icon: '💨' },
                            { step: 3, text: 'Volatile gases (H₂O, CO₂) exsolve as magma crystallizes, increasing pressure in chamber', icon: '⬆️' },
                            { step: 4, text: 'Pressure builds to critical point - chamber roof begins to fracture along ring faults', icon: '⚡' },
                            { step: 5, text: 'Catastrophic eruption begins along ring fractures - VEI 6-8, ejecting hundreds to thousands of km³', icon: '💥' },
                            { step: 6, text: 'Pyroclastic flows spread for tens to hundreds of kilometers in all directions', icon: '🔥' },
                            { step: 7, text: 'Magma chamber rapidly empties (hours to days), removing support for roof rock', icon: '⬇️' },
                            { step: 8, text: 'Unsupported roof rock collapses into evacuated chamber along ring faults', icon: '🕳️' },
                            { step: 9, text: 'Circular or elliptical depression (caldera) forms - 1-80+ km diameter, hundreds to thousands of meters deep', icon: '⭕' },
                            { step: 10, text: 'Post-collapse: caldera may fill with water (crater lake), develop hot springs, or grow resurgent domes as new magma intrudes', icon: '💧' }
                        ],
                        animation: 'caldera-formation-animation.mp4'
                    },

                    characteristics: [
                        'Large circular or elliptical depression: 1-80+ km diameter',
                        'Formed by collapse/subsidence, not explosion (unlike craters)',
                        'Steep inward-facing walls (caldera rim) - cliffs often 100-1000m high',
                        'Often filled with water forming caldera lakes (Crater Lake, Toba)',
                        'High-silica rhyolitic or dacitic magma systems (>65% SiO₂)',
                        'Site of Earth\'s most powerful eruptions (VEI 7-8 supereruptions)',
                        'Resurgent domes may grow inside caldera from renewed magma intrusion',
                        'Extensive hydrothermal systems: hot springs, geysers, fumaroles, mud pots',
                        'Multiple eruption cycles over hundreds of thousands to millions of years',
                        'Ring faults/fractures around perimeter - may host future eruptions',
                        'Pyroclastic flow deposits (ignimbrites) covering thousands of km²',
                        'Large eruptions cause volcanic winters lasting years',
                        'Long repose periods between major eruptions (thousands to hundreds of thousands of years)',
                        'Active magma systems beneath many calderas detected by monitoring'
                    ],

                    examples: [
                        {
                            name: 'Yellowstone Caldera',
                            location: 'USA (Wyoming, Montana, Idaho)',
                            stats: 'Size: 72×55 km | Last supereruption: 640,000 years ago | Status: Active',
                            age: '640,000 years (current caldera); 2.1 MY, 1.3 MY (older calderas)',
                            type: 'Resurgent caldera (hotspot)',
                            tectonicSetting: 'Yellowstone hotspot (intraplate)',
                            VEI: '8 capable (past supereruptions)',
                            link: '/encyclopedia/volcanoes/yellowstone',
                            image: 'https://source.unsplash.com/800x600/?yellowstone+geyser',
                            notableFeatures: [
                                'One of world\'s largest active calderas',
                                'Supervolcano - VEI 8 capability (1,000+ km³ eruptions)',
                                '10,000+ thermal features: geysers, hot springs, mud pots, fumaroles',
                                'Old Faithful - world\'s most famous geyser',
                                'Three major supereruptions: 2.1 MYA (2,500 km³), 1.3 MYA (280 km³), 640 KYA (1,000 km³)',
                                'Last VEI 8 eruption ejected 1,000 km³ - 1,000× Mt. St. Helens',
                                'Magma chamber: 80 km × 40 km × 10 km (partially molten)',
                                'Ground "breathes": rises and falls 2-3 cm/year (inflation/deflation cycles)',
                                'Continuous seismic activity: 1,500-3,000 earthquakes per year',
                                'Yellowstone Volcano Observatory (YVO) monitors 24/7',
                                'Next supereruption probability: ~0.00014% per year',
                                'Would devastate North America, cause multi-year volcanic winter globally'
                            ]
                        },
                        {
                            name: 'Crater Lake (Mount Mazama)',
                            location: 'USA (Oregon)',
                            stats: 'Size: 8×10 km | Caldera formed: 7,700 years ago | Depth: 594m (deepest US lake)',
                            age: '7,700 years',
                            type: 'Collapse caldera (subduction)',
                            tectonicSetting: 'Cascadia subduction zone',
                            VEI: '7 (7,700 BP eruption - Mazama eruption)',
                            link: '/encyclopedia/volcanoes/crater-lake',
                            image: 'https://source.unsplash.com/800x600/?crater+lake+oregon',
                            notableFeatures: [
                                'Deepest lake in United States (594m), 9th deepest in world',
                                'Formed by collapse of Mount Mazama after VEI 7 eruption',
                                'Wizard Island - post-caldera cinder cone rising from lake',
                                'Phantom Ship - remnant of older volcanic cone',
                                'Clearest water in world - 41m visibility (no inlet/outlet streams)',
                                'Filled only by precipitation - took ~700 years to fill',
                                'Crater Lake National Park (since 1902)',
                                'Native American (Klamath) legends accurately describe eruption',
                                'Pumice deposits found 50+ miles from caldera',
                                'Mazama erupted 50 km³ of material - covered Pacific Northwest in ash',
                                'Intensely blue color from depth and purity',
                                'Still thermally active - warm areas on lake floor'
                            ]
                        },
                        {
                            name: 'Santorini (Thera)',
                            location: 'Greece (Cyclades Islands, Aegean Sea)',
                            stats: 'Size: 12×7 km | Minoan eruption: ~1600 BC | Status: Active',
                            age: '~3,600 years (current caldera form)',
                            type: 'Submarine/subaerial caldera (subduction)',
                            tectonicSetting: 'Hellenic subduction zone (African under Aegean)',
                            VEI: '7 (Minoan eruption ~1600 BC)',
                            link: '/encyclopedia/volcanoes/santorini',
                            image: 'https://source.unsplash.com/800x600/?santorini+caldera',
                            notableFeatures: [
                                'Minoan eruption (VEI 7) - one of largest in last 10,000 years',
                                'May have ended Minoan civilization on Crete',
                                'Possible inspiration for Plato\'s Atlantis legend',
                                'Caldera flooded by Aegean Sea - dramatic scenery',
                                'Nea Kameni and Palea Kameni - active volcanic domes in center',
                                'Nea Kameni last erupted 1950 - still growing',
                                '~60m tsunami from Minoan eruption devastated eastern Mediterranean',
                                'Famous white and blue architecture perched on caldera rim',
                                '2+ million tourists per year - Greece\'s top destination',
                                'Submarine hydrothermal vents active in caldera',
                                'Volcanic hazard to millions in eastern Mediterranean',
                                'Continuously monitored by Greek scientists'
                            ]
                        },
                        {
                            name: 'Toba Caldera',
                            location: 'Indonesia (Sumatra)',
                            stats: 'Size: 100×30 km | Last supereruption: 74,000 years ago | Status: Resurgent',
                            age: '74,000 years (youngest caldera)',
                            type: 'Resurgent caldera (subduction)',
                            tectonicSetting: 'Indo-Australian Plate subducting under Sunda Plate',
                            VEI: '8 (74,000 BP - largest eruption in 2 million years)',
                            link: '/encyclopedia/volcanoes/toba',
                            image: 'https://source.unsplash.com/800x600/?lake+toba',
                            notableFeatures: [
                                'Largest volcanic eruption in last 2 million years (VEI 8)',
                                'Ejected approximately 2,800 km³ of material',
                                'Caused 6-10 year volcanic winter - global temperatures dropped 3-5°C',
                                'Toba catastrophe theory: nearly caused human extinction',
                                'Human population may have dropped to 3,000-10,000 individuals (genetic bottleneck)',
                                'Lake Toba: largest volcanic lake in world (1,707 km² surface area)',
                                'Samosir Island: massive resurgent dome in lake center (647 km²)',
                                'Samosir has risen 450m since caldera formation (ongoing uplift)',
                                'Ash deposits found from Africa to South China Sea',
                                'Still geothermally active: hot springs, fumaroles',
                                'Batak people live around lake - 2+ million residents',
                                'Popular tourist destination despite supervolcano status'
                            ]
                        },
                        {
                            name: 'Taupo Caldera',
                            location: 'New Zealand (North Island)',
                            stats: 'Size: 35 km diameter | Last supereruption: 26,500 years ago | Status: Active',
                            age: '26,500 years (Oruanui caldera)',
                            type: 'Rhyolitic caldera (subduction)',
                            tectonicSetting: 'Pacific Plate subducting under Australian Plate',
                            VEI: '8 (Oruanui eruption 26,500 BP)',
                            link: '/encyclopedia/volcanoes/taupo',
                            image: 'https://source.unsplash.com/800x600/?lake+taupo',
                            notableFeatures: [
                                'Most frequently active rhyolitic volcanic system on Earth',
                                'Oruanui eruption (26,500 BP): VEI 8, ejected 1,170 km³ - supervolcanic',
                                'Hatepe eruption (232 AD): VEI 7, one of most violent in last 5,000 years',
                                'Hatepe created 100+ km high eruption column - seen from China and Rome',
                                'Lake Taupo fills caldera (616 km² - largest lake in Australasia)',
                                'Active geothermal fields around lake (Wairakei power station)',
                                'Geothermal electricity generation significant for NZ',
                                'Trout fishing world-famous (introduced rainbow and brown trout)',
                                '28 vents identified around and under lake',
                                'Ground inflation averaging 15 mm/year - magma accumulating',
                                'Considered overdue for eruption by some volcanologists',
                                'Māori legends describe Hatepe eruption'
                            ]
                        },
                        {
                            name: 'Campi Flegrei',
                            location: 'Italy (Naples region)',
                            stats: 'Size: 13 km diameter | Last eruption: 1538 (Monte Nuovo) | Status: Active, restless',
                            age: '39,000 years (Campanian Ignimbrite caldera)',
                            type: 'Nested caldera (subduction)',
                            tectonicSetting: 'African Plate subducting under Eurasian Plate',
                            VEI: '7 capable (Campanian Ignimbrite: VEI 7, 39,000 BP)',
                            link: '/encyclopedia/volcanoes/campi-flegrei',
                            image: 'https://source.unsplash.com/800x600/?pozzuoli+italy',
                            notableFeatures: [
                                '"Phlegraean Fields" - supervolcano in Naples metropolitan area',
                                '360,000+ people live INSIDE the caldera - extreme risk',
                                'Campanian Ignimbrite eruption (39,000 BP): VEI 7, 200+ km³',
                                'May have contributed to Neanderthal extinction in Europe',
                                'Bradyseism: ground has risen 3.5m since 1950s - unique phenomenon',
                                '1982-84 crisis: ground rose 1.8m in 2 years, 40,000 evacuated',
                                '24 craters, numerous fumaroles, hot springs',
                                'Solfatara crater: active fumarole field, steam vents, sulfur deposits',
                                'Higher hazard than Vesuvius according to many volcanologists',
                                'Continuous monitoring by INGV (Italian volcano observatory)',
                                'Phlegraean Fields Regional Park protects area',
                                'Roman ruins at Pozzuoli show evidence of past bradyseism cycles'
                            ]
                        },
                        {
                            name: 'Long Valley Caldera',
                            location: 'USA (California, Eastern Sierra Nevada)',
                            stats: 'Size: 32×18 km | Formation: 767,000 years ago | Status: Active',
                            age: '767,000 years',
                            type: 'Resurgent caldera (extension)',
                            tectonicSetting: 'Basin and Range extension',
                            VEI: '7 (Bishop Tuff eruption 767,000 BP)',
                            link: '/encyclopedia/volcanoes/long-valley',
                            image: 'https://source.unsplash.com/800x600/?mammoth+mountain',
                            notableFeatures: [
                                'Bishop Tuff eruption: VEI 7, ejected 600 km³',
                                'Resurgent dome rising in center of caldera',
                                'Earthquake swarms starting 1980 indicated magma movement',
                                '1980 earthquakes: four M6.0 events in single day',
                                'Hot Creek: geothermally heated stream (swimming once popular, now banned)',
                                'Mammoth Mountain: ski resort on caldera rim (adjacent volcanic system)',
                                'Mammoth CO₂ emissions killed 100+ acres of trees (Horseshoe Lake)',
                                'USGS elevated monitoring status multiple times since 1980',
                                'Devil\'s Postpile: spectacular columnar basalt',
                                'Geothermal resources being developed',
                                'Inflation episodes detected periodically',
                                'Considered one of higher-risk calderas in USA'
                            ]
                        },
                        {
                            name: 'Aira Caldera',
                            location: 'Japan (Kagoshima Bay, Kyushu)',
                            stats: 'Size: 20×17 km | Formation: 30,000 years ago | Status: Active',
                            age: '30,000 years',
                            type: 'Submarine caldera (subduction)',
                            tectonicSetting: 'Philippine Sea Plate subducting under Eurasian',
                            VEI: '7 (30,000 BP eruption)',
                            link: '/encyclopedia/volcanoes/aira',
                            image: 'https://source.unsplash.com/800x600/?kagoshima+bay',
                            notableFeatures: [
                                'VEI 7 eruption 30,000 years ago formed caldera',
                                'Partially submerged - forms Kagoshima Bay',
                                'Sakurajima - extremely active post-caldera stratovolcano',
                                '600,000 people in Kagoshima city live in caldera',
                                'Daily ash emissions from Sakurajima (hundreds per year)',
                                '1914 Sakurajima eruption connected island to Kyushu',
                                'Submarine hydrothermal vents in bay',
                                'Caldera floor monitored for deformation',
                                'Hot springs around bay',
                                'One of most densely populated calderas',
                                'Evacuation drills routine for Kagoshima residents',
                                'Concrete ash shelters throughout city'
                            ]
                        },
                        {
                            name: 'Aso Caldera',
                            location: 'Japan (Kumamoto Prefecture, Kyushu)',
                            stats: 'Size: 25×18 km | Formation: 90,000 years ago | Status: Active',
                            age: '90,000 years',
                            type: 'Active caldera (subduction)',
                            tectonicSetting: 'Philippine Sea Plate subduction',
                            VEI: '7 (Aso-4 eruption 90,000 BP)',
                            link: '/encyclopedia/volcanoes/aso',
                            image: 'https://source.unsplash.com/800x600/?mount+aso',
                            notableFeatures: [
                                'One of world\'s largest calderas with 128 km circumference',
                                'Five post-caldera cones in center (Aso Gogaku - "Five Peaks of Aso")',
                                'Nakadake crater actively erupting - acid crater lake',
                                '70,000+ people live inside the caldera on flat caldera floor',
                                'Farmland on fertile caldera floor (rice paddies)',
                                'Aso-4 eruption (90,000 BP): VEI 7, pyroclastic flows reached 150 km',
                                'Frequent phreatic and magmatic eruptions from Nakadake',
                                'Cable car to Nakadake crater (often closed due to activity)',
                                'One of most visited volcanoes in Japan',
                                'Kumamoto earthquake 2016 triggered increased activity',
                                'Hot springs (onsen) throughout caldera',
                                'JR Aso Station inside caldera - trains run through volcanic landscape'
                            ]
                        },
                        {
                            name: 'Valles Caldera',
                            location: 'USA (New Mexico)',
                            stats: 'Size: 22 km diameter | Formation: 1.25 million years ago | Status: Potentially active',
                            age: '1.25 million years',
                            type: 'Resurgent caldera',
                            tectonicSetting: 'Rio Grande Rift (continental extension)',
                            VEI: '7 (Bandelier Tuff eruption)',
                            link: '/encyclopedia/volcanoes/valles',
                            image: 'https://source.unsplash.com/800x600/?valles+caldera',
                            notableFeatures: [
                                'VEI 7 eruption 1.25 million years ago: 600 km³ ejected',
                                'Redondo Peak: resurgent dome in caldera center',
                                'Valles Caldera National Preserve (since 2000)',
                                'Bandelier National Monument: cliff dwellings in tuff deposits',
                                'Geothermal exploration area',
                                'Hot springs and fumaroles indicate ongoing activity',
                                'Beautiful grassland valleys inside caldera (valles)',
                                'Elk herds roam caldera floor',
                                'Part of Jemez volcanic field',
                                'Multiple ring fracture eruptions post-collapse',
                                'Extensively studied as analogue for other calderas',
                                'Youngest eruption: 68,000 years ago'
                            ]
                        },
                        {
                            name: 'Kikai Caldera',
                            location: 'Japan (Ryukyu Islands, south of Kyushu)',
                            stats: 'Size: 19 km diameter | Akahoya eruption: 7,300 years ago | Status: Active',
                            age: '7,300 years',
                            type: 'Submarine caldera (subduction)',
                            tectonicSetting: 'Philippine Sea Plate subduction',
                            VEI: '7 (Akahoya eruption 7,300 BP)',
                            link: '/encyclopedia/volcanoes/kikai',
                            image: 'https://source.unsplash.com/800x600/?yakushima+japan',
                            notableFeatures: [
                                '90% of caldera is submarine (underwater)',
                                'Akahoya eruption (7,300 BP): VEI 7, devastated southern Japan',
                                'Jōmon civilization in Kyushu largely wiped out',
                                'Pyroclastic flows traveled 100+ km across ocean surface',
                                'Large lava dome discovered on seafloor in 2018',
                                'Dome is 32 km³ and rising - potential future eruption',
                                'Closest major caldera to large population centers',
                                'Takeshima and Iōjima islands are caldera rim remnants',
                                'Satsuma Iōjima has active fumaroles',
                                'Potential future supereruption could affect 100 million people',
                                'Submarine monitoring ongoing by Japanese agencies',
                                'One of most dangerous calderas in world due to proximity to population'
                            ]
                        },
                        {
                            name: 'La Garita Caldera',
                            location: 'USA (Colorado)',
                            stats: 'Size: 35×75 km | Fish Canyon Tuff eruption: 28 million years ago | Status: Extinct',
                            age: '28 million years',
                            type: 'Extinct supercaldera',
                            tectonicSetting: 'Ancient subduction (now extinct)',
                            VEI: '9.2 estimated (largest known eruption on Earth)',
                            link: '/encyclopedia/volcanoes/la-garita',
                            image: 'https://source.unsplash.com/800x600/?san+juan+mountains+colorado',
                            notableFeatures: [
                                'Largest known volcanic eruption in Earth\'s history',
                                'Fish Canyon Tuff: estimated 5,000 km³ ejected (5× Toba)',
                                'VEI 9.2 estimated - off the standard scale',
                                'Now heavily eroded - San Juan Mountains',
                                'Extinct - no future eruption risk',
                                'Part of Southern Rocky Mountain Volcanic Field',
                                'Eruption would have had global catastrophic effects',
                                'Beautiful scenery now - Creede, Colorado area',
                                'Wheeler Geologic Area within caldera',
                                'Studied as example of maximum volcanic scale',
                                'Silver mining towns developed in eroded caldera',
                                'Demonstrates that supereruptions larger than Yellowstone are possible'
                            ]
                        }
                    ],

                    hazards: [
                        'Supereruptions (VEI 7-8): global catastrophic potential - volcanic winter, crop failure, mass casualties',
                        'Pyroclastic flows: can travel 100+ km from vent at 200-700 km/h, covering entire regions',
                        'Volcanic winter: stratospheric SO₂ aerosols block sunlight for years; 3-10°C global cooling',
                        'Ash fall: continental to global scale; meters of ash near caldera, centimeters across continents',
                        'Tsunamis: if coastal or submarine caldera collapses (Santorini, Krakatau)',
                        'Lahars: from pyroclastic flows entering rivers or melting snow/ice',
                        'Earthquakes: M6-7+ during caldera collapse along ring faults',
                        'Resurgent dome eruptions: post-collapse volcanism can be explosive',
                        'Hydrothermal explosions: superheated water flashing to steam (Yellowstone hazard)',
                        'Toxic gas emissions: CO₂, H₂S accumulation in low areas',
                        'Caldera floor uplift/subsidence (bradyseism): damages buildings, infrastructure',
                        'Long-term climate disruption: mass extinction potential for largest events'
                    ],

                    globalDistribution: {
                        regions: [
                            'Yellowstone (USA) - North American hotspot; VEI 8 capable',
                            'Taupo Volcanic Zone (New Zealand) - subduction; most active rhyolitic system',
                            'Toba (Indonesia) - subduction; largest eruption in 2 million years',
                            'Long Valley (USA) - extensional; restless since 1980',
                            'Aira, Aso, Kikai (Japan) - subduction; densely populated',
                            'Campi Flegrei (Italy) - subduction; 360,000 people inside caldera',
                            'Valles (USA) - Rio Grande Rift extension',
                            'Santorini (Greece) - subduction; active dome growth',
                            'Crater Lake/Mazama (USA) - subduction; beautiful caldera lake',
                            'Rabaul (Papua New Guinea) - subduction; erupted 1994'
                        ],
                        percentage: '<1% of volcanoes but responsible for largest eruptions',
                        tectonicSetting: 'Subduction zones, hotspots, extensional settings',
                        risk: 'Highest risk volcanic features on Earth when active'
                    },

                    supervolcanoes: {
                        title: 'Known Supervolcanoes (VEI 8 Capable)',
                        description: 'Volcanic systems that have produced or could produce eruptions ejecting >1,000 km³ of material',
                        list: [
                            {
                                name: 'Yellowstone',
                                location: 'USA (Wyoming)',
                                lastSuper: '640,000 years ago',
                                volume: '1,000 km³',
                                status: 'Active - continuous monitoring'
                            },
                            {
                                name: 'Toba',
                                location: 'Indonesia (Sumatra)',
                                lastSuper: '74,000 years ago',
                                volume: '2,800 km³',
                                status: 'Resurgent - dome rising'
                            },
                            {
                                name: 'Taupo',
                                location: 'New Zealand',
                                lastSuper: '26,500 years ago',
                                volume: '1,170 km³',
                                status: 'Active - inflating'
                            },
                            {
                                name: 'Long Valley',
                                location: 'USA (California)',
                                lastSuper: '767,000 years ago',
                                volume: '600 km³',
                                status: 'Restless since 1980'
                            },
                            {
                                name: 'Campi Flegrei',
                                location: 'Italy',
                                lastSuper: '39,000 years ago',
                                volume: '200 km³ (VEI 7)',
                                status: 'Active - bradyseism ongoing'
                            },
                            {
                                name: 'Aira',
                                location: 'Japan',
                                lastSuper: '30,000 years ago',
                                volume: '400 km³ (VEI 7)',
                                status: 'Active - Sakurajima erupting'
                            },
                            {
                                name: 'La Garita (extinct)',
                                location: 'USA (Colorado)',
                                lastSuper: '28 million years ago',
                                volume: '5,000 km³',
                                status: 'Extinct - largest known'
                            }
                        ],
                        impactOfVEI8: [
                            'Pyroclastic flows covering thousands of km²',
                            'Ash fall across continents (meters thick near source)',
                            'Volcanic winter lasting 5-10 years',
                            'Global temperature drop of 5-10°C',
                            'Crop failures worldwide',
                            'Potential civilization-level disruption',
                            'Mass extinction of species in affected regions',
                            'Economic collapse on global scale'
                        ]
                    }
                },

                {
                    id: 'lava-dome',
                    name: 'Lava Domes (Volcanic Domes)',
                    icon: '🔵',
                    color: '#3498db',

                    definition: 'Lava domes are bulbous, steep-sided mounds formed when highly viscous lava (typically dacite or rhyolite, 63-75% silica) is too thick to flow away from the vent and instead piles up over the eruption site. They grow by expansion from within (endogenous growth) as new magma pushes into the dome\'s interior, or by extrusion onto the surface (exogenous growth). Lava domes are extremely dangerous because they can collapse suddenly and without warning, generating deadly pyroclastic flows (block-and-ash flows). They often form within craters of stratovolcanoes after explosive eruptions.',

                    formation: {
                        title: 'How Lava Domes Form - Complete Process',
                        steps: [
                            { step: 1, text: 'High-silica magma (dacite, rhyolite: 63-75% SiO₂) degasses during slow rise through conduit, losing most volatiles', icon: '⬆️' },
                            { step: 2, text: 'Extremely viscous, gas-poor lava reaches surface - too thick to flow (like toothpaste or cold tar)', icon: '🍯' },
                            { step: 3, text: 'Lava piles up over vent, unable to spread laterally', icon: '📍' },
                            { step: 4, text: 'New magma pushes from inside (endogenous growth), inflating dome like balloon', icon: '🎈' },
                            { step: 5, text: 'Outer surface cools rapidly, forming solid carapace while interior remains molten', icon: '🌡️' },
                            { step: 6, text: 'Dome expands upward and outward, reaching 100-500m height and 1-2 km diameter', icon: '📈' },
                            { step: 7, text: 'Surface cracks from internal expansion, creating spines, lobes, and blocky texture', icon: '🔱' },
                            { step: 8, text: 'Talus apron of fallen blocks accumulates around dome base', icon: '⛰️' },
                            { step: 9, text: 'Unstable sections collapse periodically, generating pyroclastic flows (block-and-ash flows)', icon: '💥' },
                            { step: 10, text: 'Growth continues episodically over months to decades until magma supply exhausted', icon: '⏳' }
                        ],
                        animation: 'lava-dome-animation.mp4'
                    },

                    characteristics: [
                        'Bulbous, dome-shaped or spine-like mounds',
                        'Very steep sides: 25-60° (limited by rock strength)',
                        'Composed of dacite or rhyolite (high silica: 63-75% SiO₂)',
                        'Grow by interior expansion (endogenous) or surface extrusion (exogenous)',
                        'Rough, blocky, fractured surface texture from cooling contraction',
                        'Can form spines - vertical projections squeezed up through solid carapace',
                        'Often grow inside summit craters of stratovolcanoes',
                        'Extremely dangerous - collapse generates pyroclastic flows',
                        'Slow growth rate: meters per day to meters per month',
                        'May grow for years to decades during eruption episode',
                        'Often associated with explosive activity (dome destruction/regrowth cycles)',
                        'Talus aprons of collapsed blocks surround dome',
                        'Glow visible at night through cracks exposing hot interior',
                        'Can be destroyed by explosion and rebuild multiple times'
                    ],

                    examples: [
                        {
                            name: 'Mount St. Helens Lava Dome',
                            location: 'USA (Washington State)',
                            stats: 'Height: ~280m above crater floor | Growing since 1980 | Status: Active',
                            age: '44 years (current dome)',
                            type: 'Dacite dome',
                            tectonicSetting: 'Cascadia subduction',
                            link: '/encyclopedia/volcanoes/st-helens-dome',
                            image: 'https://source.unsplash.com/800x600/?mount+st+helens+dome',
                            notableFeatures: [
                                'Growing inside horseshoe crater from 1980 eruption',
                                'Multiple growth phases: 1980-86, 2004-08',
                                '2004-08 dome growth: "whaleback" and "fin" spines extruded',
                                'Spines grew up to 2m per day at peak',
                                'Continuously monitored by USGS Cascades Volcano Observatory',
                                'Helicopter and fixed-camera monitoring',
                                'Glacier reforming around dome since 2004',
                                'Composite dome - multiple lobes from different phases',
                                'Visitor center allows viewing of dome (from safe distance)',
                                'Best-studied dome-building eruption in history'
                            ]
                        },
                        {
                            name: 'Soufrière Hills',
                            location: 'Montserrat (Caribbean)',
                            stats: 'Height: Variable (dome repeatedly collapses) | Active since 1995 | Status: Active',
                            age: '29 years (current eruption episode)',
                            type: 'Andesite dome',
                            tectonicSetting: 'Lesser Antilles subduction',
                            link: '/encyclopedia/volcanoes/soufriere-hills',
                            image: 'https://source.unsplash.com/800x600/?montserrat+volcano',
                            notableFeatures: [
                                'Ongoing eruption since July 18, 1995',
                                'Destroyed capital city Plymouth - now ghost town buried in ash',
                                'Dome collapses have generated numerous pyroclastic flows',
                                'June 25, 1997: 19 deaths from pyroclastic flow',
                                'Southern 2/3 of island declared exclusion zone - uninhabitable',
                                'Population dropped from 12,000 to 5,000',
                                'Dome has grown and collapsed multiple times',
                                'Montserrat Volcano Observatory monitors 24/7',
                                'Tourism now focused on viewing devastated areas',
                                'Example of long-duration dome-building eruption'
                            ]
                        },
                        {
                            name: 'Unzen (Mount Fugendake) Lava Dome',
                            location: 'Japan (Kyushu, Nagasaki Prefecture)',
                            stats: 'Height: 1,486m total | 1991-95 eruption | Status: Dormant (dome stable)',
                            age: '33 years since last growth',
                            type: 'Dacite dome',
                            tectonicSetting: 'Philippine Sea Plate subduction',
                            VEI: '2-3',
                            link: '/encyclopedia/volcanoes/unzen',
                            image: 'https://source.unsplash.com/800x600/?unzen+volcano',
                            notableFeatures: [
                                '1991-95 dome growth killed 43 people including volcanologists',
                                'June 3, 1991: Maurice and Katia Krafft (famous volcanologists) killed',
                                'Harry Glicken (USGS) also killed - was at Mt. St. Helens in 1980',
                                'Pyroclastic flows from dome collapse devastated Shimabara',
                                'Heisei-Shinzan dome still visible today',
                                '1792 collapse of earlier dome triggered tsunami - 15,000 deaths',
                                'Deadliest volcanic disaster in Japanese history (1792)',
                                'One of 16 Decade Volcanoes (high risk)',
                                'Extensive monitoring network now in place',
                                'Ropeway (cable car) for viewing dome (closed during activity)'
                            ]
                        },
                        {
                            name: 'Lassen Peak',
                            location: 'USA (California)',
                            stats: 'Height: 3,187m | Last eruption: 1914-17 | Status: Active',
                            age: '27,000 years (dome itself)',
                            type: 'Dacite plug dome',
                            tectonicSetting: 'Cascadia subduction (southern end)',
                            VEI: '3 (1915 eruption)',
                            link: '/encyclopedia/volcanoes/lassen',
                            image: 'https://source.unsplash.com/800x600/?lassen+peak',
                            notableFeatures: [
                                'World\'s largest plug dome by volume',
                                'Plug dome type - solidified lava filling vent',
                                '1914-17 eruption: dome growth, explosions, pyroclastic flows',
                                'May 22, 1915: massive explosion, mudflows reached 30+ km',
                                'Devastated Area trail shows recovery from 1915 blast',
                                'Lassen Volcanic National Park',
                                'Bumpass Hell: active hydrothermal area (sulfurous)',
                                'Most recent Cascade Range eruption before Mt. St. Helens 1980',
                                'Snow-capped most of year',
                                'Southernmost active volcano in Cascades'
                            ]
                        },
                        {
                            name: 'Novarupta Dome',
                            location: 'USA (Alaska, Katmai National Park)',
                            stats: 'Height: 60m above crater floor | Formed: June 1912 | Status: Dormant',
                            age: '112 years',
                            type: 'Rhyolite dome',
                            tectonicSetting: 'Aleutian subduction',
                            VEI: '6 (1912 eruption - largest of 20th century)',
                            link: '/encyclopedia/volcanoes/novarupta',
                            image: 'https://source.unsplash.com/800x600/?katmai+alaska',
                            notableFeatures: [
                                'Formed during largest eruption of 20th century (June 6-8, 1912)',
                                'VEI 6: ejected 13+ km³ of material (30× Mt. St. Helens)',
                                'Dome plugged vent after explosive phase ended',
                                'Valley of Ten Thousand Smokes created by pyroclastic flows',
                                'Katmai caldera formed 10 km away (magma drained to Novarupta)',
                                'Remote location - no casualties',
                                'Ash reached Algeria 8,500 km away',
                                'Acid rain damaged clothes on clotheslines in Vancouver',
                                'Katmai National Park and Preserve',
                                'Brown bears now famous in Valley of Ten Thousand Smokes area'
                            ]
                        },
                        {
                            name: 'Santiaguito Dome Complex',
                            location: 'Guatemala',
                            stats: 'Height: ~250m above crater floor | Growing since 1922 | Status: Active',
                            age: '102 years (continuous growth)',
                            type: 'Dacite dome complex',
                            tectonicSetting: 'Central American subduction',
                            VEI: '1-2 (typical)',
                            link: '/encyclopedia/volcanoes/santiaguito',
                            image: 'https://source.unsplash.com/800x600/?santiaguito',
                            notableFeatures: [
                                'Growing continuously since 1922 - one of longest dome eruptions',
                                'Formed in crater of Santa María volcano (1902 VEI 6 eruption)',
                                'Four vents active at different times (Caliente most active)',
                                'Small explosions several times daily',
                                'Ash plumes regularly reach 2-4 km above dome',
                                'Pyroclastic flows from dome collapses every few years',
                                'Monitored by INSIVUMEH (Guatemala volcano observatory)',
                                'Tourist observation point at Llano del Pinal',
                                'Block-and-ash flows have reached inhabited areas',
                                'One of world\'s most accessible active dome volcanoes'
                            ]
                        },
                        {
                            name: 'Chaitén Lava Dome',
                            location: 'Chile (Patagonia)',
                            stats: 'Height: Variable | 2008-09 eruption | Status: Dormant',
                            age: '16 years (current dome)',
                            type: 'Rhyolite dome',
                            tectonicSetting: 'Nazca Plate subduction',
                            VEI: '4-5 (2008)',
                            link: '/encyclopedia/volcanoes/chaiten',
                            image: 'https://source.unsplash.com/800x600/?chaiten+volcano',
                            notableFeatures: [
                                'Unexpected eruption in May 2008 after 9,000+ years dormancy',
                                'Not recognized as significant hazard before eruption',
                                'Entire town of Chaitén evacuated (4,500 people)',
                                'Lahars from heavy rain on ash devastated town',
                                'Rhyolite dome grew in ancient caldera',
                                'Rare rhyolite composition for Chile (most are andesitic)',
                                'Explosive phases alternated with dome growth',
                                'Town partially rebuilt but many did not return',
                                'Demonstrates that "extinct" volcanoes can reawaken',
                                'Cautionary tale for volcanic hazard assessment'
                            ]
                        },
                        {
                            name: 'Merapi Summit Dome',
                            location: 'Indonesia (Java)',
                            stats: 'Height: Constantly changing | Status: Very active',
                            age: 'Continuously rebuilt',
                            type: 'Andesite-basaltic dome',
                            tectonicSetting: 'Sunda Arc subduction',
                            VEI: '4 (2010 eruption)',
                            link: '/encyclopedia/volcanoes/merapi-dome',
                            image: 'https://source.unsplash.com/800x600/?merapi+dome',
                            notableFeatures: [
                                'Dome constantly growing at summit crater',
                                'Periodic collapses generate pyroclastic flows (nuées ardentes)',
                                '2010 dome collapse: 350+ deaths, largest eruption since 1872',
                                'Dome grows, becomes unstable, collapses - cycle repeats',
                                'Monitored 24/7 by BPPTKG (Indonesian monitoring center)',
                                '1 million+ people live on slopes',
                                'Erupts every 2-5 years on average',
                                'Most dangerous dome volcano in world (by population at risk)',
                                'Dense population due to fertile volcanic soils',
                                'Evacuation protocols well-practiced by local population'
                            ]
                        },
                        {
                            name: 'Puy de Dôme',
                            location: 'France (Massif Central)',
                            stats: 'Height: 1,465m | Age: ~11,000 years | Status: Extinct',
                            age: '11,000 years',
                            type: 'Trachyte dome',
                            tectonicSetting: 'Continental hotspot/extension',
                            VEI: '2-3 (estimated)',
                            link: '/encyclopedia/volcanoes/puy-de-dome',
                            image: 'https://source.unsplash.com/800x600/?puy+de+dome',
                            notableFeatures: [
                                'Classic lava dome - type example (domite named after it)',
                                'Part of Chaîne des Puys volcanic field (80 volcanoes)',
                                'UNESCO World Heritage Site (2018)',
                                'Panoramic cog railway to summit',
                                'Roman Temple of Mercury ruins on summit',
                                'Weather observatory (historic atmospheric pressure experiments)',
                                'Trachyte composition - unusual chemistry',
                                'Extinct - no future eruption expected',
                                'Popular hiking destination',
                                'Gave name to dome-type volcanoes (puys)'
                            ]
                        },
                        {
                            name: 'Tarawera Dome Complex',
                            location: 'New Zealand (North Island)',
                            stats: 'Eruption: June 10, 1886 | 120+ deaths | Status: Dormant',
                            age: '138 years since eruption',
                            type: 'Rhyolite dome complex',
                            tectonicSetting: 'Taupo Volcanic Zone (subduction)',
                            VEI: '5 (1886 eruption)',
                            link: '/encyclopedia/volcanoes/tarawera',
                            image: 'https://source.unsplash.com/800x600/?tarawera+new+zealand',
                            notableFeatures: [
                                'June 10, 1886: largest NZ eruption in 600 years',
                                'Destroyed Pink and White Terraces (natural wonder)',
                                '120+ deaths mostly from pyroclastic surges',
                                'Village of Te Wairoa buried - "Buried Village" tourist site',
                                'Rift opened along multiple domes',
                                'Basaltic magma erupted through rhyolite domes (unusual)',
                                'Lakes created in explosion craters',
                                'Māori oral history describes events',
                                'Popular tramping (hiking) area today',
                                'Part of Okataina volcanic center'
                            ]
                        }
                    ],

                    hazards: [
                        'Dome collapse pyroclastic flows (block-and-ash flows) - main hazard, generated when unstable dome sections fail',
                        'Explosions - if gas pressure builds beneath dome surface',
                        'Rockfall and ballistic blocks - continuous from dome surface',
                        'Volcanic gases (SO₂, H₂S, CO₂) - released through dome cracks',
                        'Lahars - if dome collapse or explosion incorporates water/ice',
                        'Sudden directed blasts - if dome collapses asymmetrically',
                        'Ash emissions - during explosive phases of dome destruction',
                        'Ground deformation - dome growth stresses surrounding rock',
                        'Fires - from hot blocks in pyroclastic flows',
                        'Unpredictability - collapses often occur without warning'
                    ],

                    globalDistribution: {
                        regions: [
                            'Cascade Range (USA) - Mt. St. Helens, Lassen Peak',
                            'Japan - Unzen, Showa-Shinzan, Usu',
                            'Indonesia - Merapi, Kelut, Sinabung',
                            'Caribbean - Soufrière Hills (Montserrat), Mt. Pelée (Martinique)',
                            'Central America - Santiaguito (Guatemala), Colima (Mexico)',
                            'South America - Chaitén (Chile), Ubinas (Peru)',
                            'Alaska - Novarupta, Redoubt, Augustine',
                            'New Zealand - Tarawera dome complex',
                            'France - Chaîne des Puys (extinct domes)'
                        ],
                        percentage: 'Not counted separately - component of stratovolcano/caldera systems',
                        tectonicSetting: 'Primarily subduction zones where silica-rich magmas form',
                        note: 'Domes form during eruptions of composite volcanoes, not standalone systems'
                    }
                },

                {
                    id: 'fissure',
                    name: 'Fissure Volcanoes (Volcanic Rifts)',
                    icon: '➖',
                    color: '#1abc9c',

                    definition: 'Fissure volcanoes (also called volcanic rifts) erupt from elongated cracks (fissures) in Earth\'s crust rather than from central vents. They produce massive outpourings of fluid basaltic lava that spread over vast areas, creating lava plateaus (flood basalts). Some fissure eruptions produce spectacular "curtains of fire" - lines of lava fountains along the entire fissure length. The largest volcanic eruptions in Earth\'s history were fissure eruptions (flood basalt events) that lasted millions of years and produced millions of km³ of lava. Fissure eruptions occur primarily at divergent plate boundaries (mid-ocean ridges, continental rifts) and over hotspots.',

                    formation: {
                        title: 'How Fissure Eruptions Occur - Complete Process',
                        steps: [
                            { step: 1, text: 'Extensional tectonic forces pull Earth\'s crust apart (rifting) at divergent boundaries or over thermal upwelling', icon: '⬅️➡️' },
                            { step: 2, text: 'Crust thins and fractures along parallel normal faults, creating linear zones of weakness', icon: '📏' },
                            { step: 3, text: 'Magma dike intrudes vertically through crust along fracture zone', icon: '⬆️' },
                            { step: 4, text: 'Dike reaches surface and lava erupts along entire length of fissure (can be km to 100+ km long)', icon: '🔥' },
                            { step: 5, text: '"Curtain of fire" - lava fountains erupt from multiple points along fissure simultaneously', icon: '⛲' },
                            { step: 6, text: 'Lava fountains can reach 100-500m height during peak activity', icon: '🌋' },
                            { step: 7, text: 'Low-viscosity basaltic lava flows spread 10-100+ km in all directions', icon: '🌊' },
                            { step: 8, text: 'Lava channels and tubes develop, allowing lava to travel long distances without cooling', icon: '🚇' },
                            { step: 9, text: 'Spatter cones and ramparts build along fissure from accumulated lava splatter', icon: '🔺' },
                            { step: 10, text: 'Multiple eruptions over time stack flows, building extensive lava plateaus (flood basalts)', icon: '📚' }
                        ],
                        animation: 'fissure-eruption-animation.mp4'
                    },

                    characteristics: [
                        'Linear vent system: fissures can be kilometers to over 100 km long',
                        'Extremely fluid basaltic lava (low viscosity, 45-52% silica)',
                        'Very high eruption rates - can produce km³ of lava per day',
                        'Creates flat, extensive lava plateaus and plains',
                        'Low explosivity (Hawaiian/Strombolian style) but immense volume',
                        '"Curtain of fire" lava fountains along fissure during eruption',
                        'Can produce enormous total volumes over time (millions of km³)',
                        'Associated with rifting, continental breakup, and hotspots',
                        'Spatter cones, lava ramparts form along fissure',
                        'Lava channels and tubes transport lava tens of kilometers',
                        'Rapid emplacement - individual flows in days to months',
                        'Individual flows can cover thousands of km² area',
                        'Often occur in swarms (multiple parallel fissures)',
                        'Gas emissions (SO₂, CO₂) can affect climate globally for large events'
                    ],

                    examples: [
                        {
                            name: 'Laki Fissure (Lakagígar)',
                            location: 'Iceland',
                            stats: 'Length: 27 km | Eruption: 1783-84 | Volume: 14.7 km³ lava + tephra',
                            age: '241 years since eruption',
                            type: 'Fissure eruption (rift + hotspot)',
                            tectonicSetting: 'Mid-Atlantic Ridge + Iceland hotspot',
                            VEI: '6 (large effusive eruption)',
                            link: '/encyclopedia/volcanoes/laki',
                            image: 'https://source.unsplash.com/800x600/?laki+iceland',
                            notableFeatures: [
                                'Deadliest fissure eruption in recorded history',
                                '130+ spatter cones (craters) along 27 km fissure',
                                'Killed 25% of Iceland\'s population (9,000+ people) from famine',
                                '80% of sheep, 50% of cattle died (fluorine poisoning)',
                                '"Laki haze" spread across Europe - respiratory illness epidemic',
                                'Contributed to European famine, possibly French Revolution food crisis',
                                'Northern Hemisphere cooled ~1°C for years',
                                'Lava covered 565 km² of land',
                                '8 months of continuous eruption (June 1783 - February 1784)',
                                'Part of Grímsvötn volcanic system',
                                '120 million tons of SO₂ released - major climate impact'
                            ]
                        },
                        {
                            name: 'Holuhraun Fissure',
                            location: 'Iceland (Vatnajökull)',
                            stats: 'Length: 1.8 km | Eruption: 2014-15 | Volume: 1.6 km³',
                            age: '10 years since eruption',
                            type: 'Fissure eruption (rift)',
                            tectonicSetting: 'Mid-Atlantic Ridge (Bárðarbunga system)',
                            VEI: '0-1 (effusive)',
                            link: '/encyclopedia/volcanoes/holuhraun',
                            image: 'https://source.unsplash.com/800x600/?holuhraun',
                            notableFeatures: [
                                'Largest Icelandic eruption since Laki (1783)',
                                '6 months continuous eruption (August 2014 - February 2015)',
                                'Lava field covered 85 km² (Holuhraun lava field)',
                                'SO₂ pollution affected air quality across Iceland',
                                'Evacuations due to gas emissions',
                                'Bárðarbunga caldera subsided 65m as magma drained laterally',
                                'Magma traveled 45 km underground from Bárðarbunga to erupt',
                                'No direct casualties (remote location)',
                                'Spectacular tourism during eruption',
                                'Closely monitored with drones, satellites, GPS'
                            ]
                        },
                        {
                            name: 'Fagradalsfjall / Sundhnúkur Fissures',
                            location: 'Iceland (Reykjanes Peninsula)',
                            stats: 'Multiple fissures | Eruptions: 2021, 2022, 2023, 2024 | Status: Active',
                            age: 'Ongoing (first eruption March 2021)',
                            type: 'Fissure eruptions (rift)',
                            tectonicSetting: 'Mid-Atlantic Ridge (Reykjanes Ridge on land)',
                            VEI: '0-1 (effusive)',
                            link: '/encyclopedia/volcanoes/fagradalsfjall',
                            image: 'https://source.unsplash.com/800x600/?fagradalsfjall',
                            notableFeatures: [
                                'First eruption on Reykjanes Peninsula in 800+ years',
                                'Beginning of new rifting episode expected to last decades',
                                'Highly accessible - tourism boom with hiking to active lava',
                                '2021: Geldingadalir valley filled with lava (6 months)',
                                '2022-2024: Multiple new fissures opened',
                                'December 2023: Fissure threatened Grindavík town (4,000 evacuated)',
                                'Svartsengi geothermal power plant at risk',
                                'Dramatic footage shared globally',
                                'Scientists expect continued activity for years',
                                'Blue Lagoon resort repeatedly evacuated'
                            ]
                        },
                        {
                            name: 'Deccan Traps',
                            location: 'India (Western and Central India)',
                            stats: 'Area: 500,000 km² | Age: 66 million years | Volume: 1+ million km³',
                            age: '66 million years (K-Pg boundary)',
                            type: 'Flood basalt province (hotspot)',
                            tectonicSetting: 'Réunion hotspot (ancient position)',
                            VEI: 'N/A (massive effusive over millions of years)',
                            link: '/encyclopedia/volcanoes/deccan-traps',
                            image: 'https://source.unsplash.com/800x600/?deccan+plateau+india',
                            notableFeatures: [
                                'One of largest volcanic features on Earth',
                                'Erupted at K-Pg boundary (dinosaur extinction)',
                                'Contributed to Cretaceous-Paleogene mass extinction',
                                'Created by Réunion hotspot before India drifted north',
                                'Eruptions lasted ~1 million years',
                                'Originally covered 1.5 million km² (eroded to 500,000 km²)',
                                'Individual flows traveled 500-1,000+ km',
                                'Thickness: up to 2,000m in western India',
                                'Western Ghats escarpment formed by erosion',
                                'Rich coal deposits between lava layers',
                                'Created extremely fertile black cotton soils (regur)',
                                '⭐ UPSC Important: India-specific flood basalt, K-Pg extinction'
                            ]
                        },
                        {
                            name: 'Columbia River Basalts',
                            location: 'USA (Washington, Oregon, Idaho)',
                            stats: 'Area: 175,000 km² | Age: 17-6 million years | Volume: 234,000 km³',
                            age: '17-6 million years (Miocene)',
                            type: 'Flood basalt province (hotspot)',
                            tectonicSetting: 'Yellowstone hotspot (early track)',
                            VEI: 'N/A (massive effusive over millions of years)',
                            link: '/encyclopedia/volcanoes/columbia-basalts',
                            image: 'https://source.unsplash.com/800x600/?columbia+river+basalt',
                            notableFeatures: [
                                'Largest flood basalt in North America',
                                'Individual flows traveled 600+ km',
                                'Over 300 individual flows identified',
                                'Created by early Yellowstone hotspot activity',
                                'Grande Ronde flows: some largest single eruptions in geologic record',
                                'Flows followed ancient river valleys, dammed streams',
                                'Dry Falls: spectacular cliffs from Ice Age megafloods over basalts',
                                'Channeled Scablands carved by glacial megafloods through basalts',
                                'Visible in road cuts, canyons throughout Pacific Northwest',
                                'Economic: aquifer in porous basalt layers'
                            ]
                        },
                        {
                            name: 'Siberian Traps',
                            location: 'Russia (Siberia)',
                            stats: 'Area: 2+ million km² | Age: 252 million years | Volume: 1-4 million km³',
                            age: '252 million years (end-Permian)',
                            type: 'Flood basalt province (superplume)',
                            tectonicSetting: 'Mantle superplume',
                            VEI: 'N/A (largest known volcanic event)',
                            link: '/encyclopedia/volcanoes/siberian-traps',
                            image: 'https://source.unsplash.com/800x600/?siberian+traps',
                            notableFeatures: [
                                'Largest known volcanic event in Earth history',
                                'Caused Permian-Triassic mass extinction ("The Great Dying")',
                                '96% of marine species extinct, 70% of land vertebrates',
                                'Erupted 1-4 million km³ over ~1-2 million years',
                                'Released catastrophic amounts of CO₂, SO₂, methane (from coal)',
                                'Global warming of 8-10°C',
                                'Ocean acidification and anoxia',
                                'Took life 10+ million years to recover',
                                'Nickel-copper ore deposits formed (Norilsk mines)',
                                'Demonstrates volcanic ability to cause mass extinction'
                            ]
                        },
                        {
                            name: 'East African Rift Fissures',
                            location: 'Ethiopia, Kenya, Tanzania',
                            stats: 'Rift length: 6,000 km | Status: Active | Multiple eruptions',
                            age: 'Ongoing (rift forming)',
                            type: 'Continental rift fissures',
                            tectonicSetting: 'Continental divergent boundary (Africa splitting)',
                            VEI: 'Various',
                            link: '/encyclopedia/volcanoes/east-african-rift',
                            image: 'https://source.unsplash.com/800x600/?east+african+rift',
                            notableFeatures: [
                                'Active continental rifting - Africa slowly splitting',
                                'Afar Triangle: extremely active, 3 plates meeting',
                                'Erta Ale: active shield volcano with persistent lava lake',
                                'Dabbahu fissure (2005): 60 km long opened in days',
                                'Ol Doinyo Lengai: only active carbonatite volcano (unique lava)',
                                'Ethiopian flood basalts (30 million years ago)',
                                'Future ocean basin forming',
                                'Red Sea and Gulf of Aden: advanced rift (already oceanic)',
                                'Numerous active volcanoes along rift',
                                'Geothermal resources being developed (Kenya)'
                            ]
                        },
                        {
                            name: 'Eldgjá Fissure',
                            location: 'Iceland',
                            stats: 'Length: 75 km | Eruption: 934-940 AD | Volume: 19 km³',
                            age: '~1,090 years',
                            type: 'Fissure eruption (rift)',
                            tectonicSetting: 'Mid-Atlantic Ridge (Katla system)',
                            VEI: '4-6',
                            link: '/encyclopedia/volcanoes/eldgja',
                            image: 'https://source.unsplash.com/800x600/?eldgja+iceland',
                            notableFeatures: [
                                'Largest Icelandic fissure eruption in recorded history',
                                'Longest volcanic fissure on Earth (75 km)',
                                'Canyon up to 270m deep and 600m wide formed',
                                'Largest lava flow in historical times (780 km² covered)',
                                'Occurred during Viking Age settlement of Iceland',
                                'May have influenced Medieval climate (cooling)',
                                'Byzantine and Chinese chronicles mention atmospheric effects',
                                'Part of Katla volcanic system',
                                'Spectacular hiking destination today',
                                'Connected to Katla central volcano'
                            ]
                        },
                        {
                            name: 'Hawaiian Rift Zones',
                            location: 'Hawaii, USA (Big Island)',
                            stats: 'Multiple fissures | Ongoing | Most recent: 2018',
                            age: 'Current and historical',
                            type: 'Rift zone fissures (hotspot)',
                            tectonicSetting: 'Hawaiian hotspot',
                            VEI: '0-2 (typically)',
                            link: '/encyclopedia/volcanoes/hawaii-rift-zones',
                            image: 'https://source.unsplash.com/800x600/?kilauea+fissure+2018',
                            notableFeatures: [
                                'Kilauea East Rift Zone: 125 km long fracture system',
                                '2018 Leilani Estates eruption: 24 fissures opened',
                                'Fissure 8: produced river of lava to ocean for months',
                                'Lava fountains reached 80m height',
                                '700+ homes destroyed in 2018 eruption',
                                'Added 875 acres of new land to Hawaii',
                                'Kilauea summit drained and collapsed as lava erupted on flank',
                                'Highway 132 covered by thick lava',
                                'Kapoho Bay filled completely with lava',
                                'Rift zones are weaknesses where flank spreads seaward'
                            ]
                        },
                        {
                            name: 'Central Atlantic Magmatic Province (CAMP)',
                            location: 'Brazil, Africa, North America, Europe (when connected)',
                            stats: 'Area: 11 million km² | Age: 201 million years | Volume: 2-3 million km³',
                            age: '201 million years (Triassic-Jurassic boundary)',
                            type: 'Flood basalt province (superplume)',
                            tectonicSetting: 'Pangaea breakup',
                            VEI: 'N/A (massive effusive)',
                            link: '/encyclopedia/volcanoes/camp',
                            image: 'https://source.unsplash.com/800x600/?pangaea',
                            notableFeatures: [
                                'Largest continental flood basalt province by area',
                                'Caused Triassic-Jurassic mass extinction',
                                '76% of species extinct',
                                'Cleared ecological niches for dinosaur rise',
                                'Erupted as Pangaea began breaking apart',
                                'Volume: 2-3 million km³ erupted in <600,000 years',
                                'Global warming from CO₂ release',
                                'Preserved on 4 continents (now separated)',
                                'Palisades Sill (NJ, USA) is CAMP remnant',
                                'Demonstrates flood basalt-extinction connection'
                            ]
                        },
                        {
                            name: 'Krafla Fires',
                            location: 'Iceland (North Iceland)',
                            stats: 'Multiple fissures | Eruptions: 1975-1984 | Volume: 0.25 km³',
                            age: '40-49 years since eruption',
                            type: 'Fissure eruption episode',
                            tectonicSetting: 'Mid-Atlantic Ridge',
                            VEI: '0-1',
                            link: '/encyclopedia/volcanoes/krafla',
                            image: 'https://source.unsplash.com/800x600/?krafla+iceland',
                            notableFeatures: [
                                '9 eruptions over 9 years (1975-1984)',
                                'Rifting episode: plate spreading concentrated in pulses',
                                '9m of horizontal extension occurred',
                                'Krafla geothermal power plant threatened',
                                'Lava fountains reached 80m height',
                                'Multiple fissures opened progressively',
                                'Víti explosion crater from 1724 in caldera',
                                'Still geothermally active - hot springs, mud pots',
                                'Major research site for rifting processes',
                                'Tourism: Námafjall geothermal area'
                            ]
                        },
                        {
                            name: 'Karoo-Ferrar',
                            location: 'South Africa, Antarctica (when connected)',
                            stats: 'Area: 3 million km² | Age: 183 million years | Volume: 2-3 million km³',
                            age: '183 million years (Early Jurassic)',
                            type: 'Flood basalt province',
                            tectonicSetting: 'Gondwana breakup (mantle plume)',
                            VEI: 'N/A',
                            link: '/encyclopedia/volcanoes/karoo-ferrar',
                            image: 'https://source.unsplash.com/800x600/?drakensberg+south+africa',
                            notableFeatures: [
                                'Associated with Gondwana breakup',
                                'Linked to Toarcian Oceanic Anoxic Event (extinction)',
                                'South African Karoo + Antarctic Ferrar (were connected)',
                                'Drakensberg mountains capped by these basalts',
                                'Released massive CO₂, triggered warming',
                                'Ocean anoxic event killed marine life',
                                'Volume: 2-3 million km³',
                                'Gondwana began separating afterward',
                                'Important for understanding Pangaea breakup'
                            ]
                        }
                    ],

                    hazards: [
                        'Massive lava flows - can travel 100+ km, burying large areas',
                        'Volcanic gases (SO₂, CO₂, HF) - acid rain, crop damage, respiratory hazard',
                        'Vog (volcanic smog) - covers huge areas for months',
                        'Climate effects - major eruptions inject SO₂ into stratosphere causing cooling',
                        'Fluorine poisoning - fluorine in gases poisons livestock, contaminates water (Laki 1783)',
                        'Ground fracturing - fissures can open with little warning',
                        'Infrastructure destruction - lava flows bury roads, buildings, farmland',
                        'Long duration - eruptions can last months to years',
                        'Large events: global climate disruption, crop failures, famine, mass extinction'
                    ],

                    globalDistribution: {
                        regions: [
                            'Iceland (Mid-Atlantic Ridge + hotspot) - most accessible fissure volcanism',
                            'East African Rift (continental divergent) - active rifting',
                            'Hawaii rift zones (hotspot) - Kilauea, Mauna Loa',
                            'Mid-Ocean Ridges worldwide (submarine) - most volcanically active features on Earth',
                            'Flood basalt provinces (extinct): Deccan (India), Siberian, Columbia River, Karoo-Ferrar, CAMP'
                        ],
                        percentage: 'Rare on land but produce largest known eruptions; 80% of volcanism is submarine at ridges',
                        tectonicSetting: 'Divergent boundaries (rifts, ridges), hotspots, extensional settings',
                        historicalImpact: 'Four of five major mass extinctions in Earth history linked to flood basalt volcanism'
                    },

                    floodBasaltProvinces: {
                        title: 'Major Flood Basalt Provinces (Large Igneous Provinces)',
                        description: 'Massive volcanic events that erupted millions of km³ of lava over geologically short periods',
                        list: [
                            {
                                name: 'Siberian Traps',
                                age: '252 million years ago',
                                area: '2-7 million km²',
                                volume: '1-4 million km³',
                                extinction: 'Permian-Triassic (96% marine species)',
                                note: 'Largest known volcanic event; "The Great Dying"'
                            },
                            {
                                name: 'CAMP (Central Atlantic)',
                                age: '201 million years ago',
                                area: '11 million km²',
                                volume: '2-3 million km³',
                                extinction: 'Triassic-Jurassic (76% species)',
                                note: 'Pangaea breakup; cleared way for dinosaurs'
                            },
                            {
                                name: 'Karoo-Ferrar',
                                age: '183 million years ago',
                                area: '3 million km²',
                                volume: '2-3 million km³',
                                extinction: 'Toarcian Oceanic Anoxic Event',
                                note: 'Gondwana breakup'
                            },
                            {
                                name: 'Deccan Traps',
                                age: '66 million years ago',
                                area: '0.5-1.5 million km²',
                                volume: '1+ million km³',
                                extinction: 'K-Pg (contributed with asteroid)',
                                note: '⭐ INDIA - Réunion hotspot origin'
                            },
                            {
                                name: 'North Atlantic (NAIP)',
                                age: '62-55 million years ago',
                                area: '1.3 million km²',
                                volume: '~10 million km³',
                                extinction: 'PETM (Paleocene-Eocene Thermal Maximum)',
                                note: 'Opened North Atlantic; Iceland remnant'
                            },
                            {
                                name: 'Columbia River',
                                age: '17-6 million years ago',
                                area: '175,000 km²',
                                volume: '234,000 km³',
                                extinction: 'No major extinction',
                                note: 'Yellowstone hotspot early track'
                            },
                            {
                                name: 'Ethiopian (Afar)',
                                age: '30 million years ago',
                                area: '600,000 km²',
                                volume: '350,000 km³',
                                extinction: 'Climate effects',
                                note: 'Afar hotspot; Ethiopian Highlands'
                            }
                        ],
                        significances: [
                            'Linked to 4 of 5 major mass extinctions',
                            'Release massive CO₂, SO₂, and methane',
                            'Cause global warming, ocean acidification',
                            'Demonstrate volcanism can drive global catastrophes',
                            'Important for understanding extinction mechanisms'
                        ]
                    }
                }
            ],

            comparisonTable: {
                title: 'Quick Comparison of All Volcano Types',
                headers: ['Type', 'Shape', 'Size', 'Magma Type', 'Eruption Style', 'Hazard Level', 'Example'],
                rows: [
                    ['Shield 🛡️', 'Broad, gentle slopes (2-10°)', 'Very large (100+ km wide)', 'Basaltic (low silica 45-52%)', 'Effusive, gentle (Hawaiian)', 'Low-Medium', 'Mauna Loa (Hawaii)'],
                    ['Composite 🗻', 'Steep cone (30-35°)', 'Large (2-4 km high)', 'Andesitic-Dacitic (52-68%)', 'Explosive (Plinian/Vulcanian)', 'Very High', 'Mt. Fuji (Japan)'],
                    ['Cinder Cone 🔺', 'Small, steep (30-40°)', 'Small (30-300m)', 'Basaltic-Andesitic', 'Strombolian (moderate)', 'Low', 'Parícutin (Mexico)'],
                    ['Caldera 🕳️', 'Large depression', 'Huge (1-80+ km)', 'Rhyolitic (high silica >70%)', 'Cataclysmic (VEI 7-8)', 'Extreme', 'Yellowstone (USA)'],
                    ['Lava Dome 🔵', 'Bulbous mound', 'Small-Medium (100-500m)', 'Dacitic-Rhyolitic (63-75%)', 'Effusive + collapse', 'High', 'St. Helens dome'],
                    ['Fissure ➖', 'Linear/plateau', 'Variable (km³ to millions km³)', 'Basaltic (low silica)', 'Effusive, high volume', 'Medium-Extreme', 'Laki (Iceland)']
                ]
            },

            eruptionStyles: {
                title: 'Volcanic Eruption Styles - Complete Classification',
                description: 'Volcanologists classify eruptions by their characteristics, named after volcanoes that typify each style.',
                styles: [
                    {
                        name: 'Hawaiian',
                        description: 'Gentle effusive eruptions of fluid basaltic lava, lava fountains up to 500m, lava lakes, minimal explosivity',
                        VEI: '0-1',
                        viscosity: 'Very low (basalt)',
                        gasContent: 'Low (escapes easily)',
                        explosivity: 'Non-explosive to weakly explosive',
                        eruptionColumn: 'None to 1 km',
                        duration: 'Days to decades (continuous)',
                        examples: 'Kilauea, Mauna Loa, Piton de la Fournaise',
                        hazards: 'Lava flows (slow, predictable)',
                        characteristics: ['Lava fountains', 'Lava lakes', 'Pahoehoe and aa flows', 'Shield building']
                    },
                    {
                        name: 'Strombolian',
                        description: 'Mild explosive bursts every few minutes, incandescent lava fragments ejected, rhythmic explosions, small lava flows',
                        VEI: '1-2',
                        viscosity: 'Low to moderate (basalt to andesite)',
                        gasContent: 'Moderate (bursting bubbles)',
                        explosivity: 'Mildly explosive',
                        eruptionColumn: '<2 km',
                        duration: 'Years to centuries (continuous)',
                        examples: 'Stromboli (continuous 2000+ years), Cerro Negro, Yasur',
                        hazards: 'Volcanic bombs, cinders, ash, small lava flows',
                        characteristics: ['Rhythmic explosions', 'Glowing ejecta', 'Cinder cones', 'Incandescent fountains']
                    },
                    {
                        name: 'Vulcanian',
                        description: 'Short violent cannon-like explosions, dense ash clouds, volcanic bombs, viscous lava, less frequent than Strombolian',
                        VEI: '2-3',
                        viscosity: 'Medium (andesite to dacite)',
                        gasContent: 'Moderate to high',
                        explosivity: 'Moderately explosive',
                        eruptionColumn: '5-20 km',
                        duration: 'Hours to days per explosion',
                        examples: 'Sakurajima (daily explosions), Tavurvur, Ngauruhoe',
                        hazards: 'Ash fall, bombs, pyroclastic flows (small)',
                        characteristics: ['Cannon-like blasts', 'Cauliflower ash clouds', 'Ballistic blocks', 'Dense ash']
                    },
                    {
                        name: 'Pelean (Nuée Ardente)',
                        description: 'Dome collapse or directed blast generating deadly pyroclastic density currents; named for Mt. Pelée 1902',
                        VEI: '3-4',
                        viscosity: 'High (dacite to rhyolite)',
                        gasContent: 'High',
                        explosivity: 'Highly explosive (directed)',
                        eruptionColumn: '10-20 km',
                        duration: 'Hours to days',
                        examples: 'Mt. Pelée 1902 (29,000 deaths), Soufrière Hills, Unzen',
                        hazards: 'Pyroclastic flows (deadliest hazard)',
                        characteristics: ['Dome growth and collapse', 'Lateral blasts', 'Nuées ardentes', 'Extreme deadliness']
                    },
                    {
                        name: 'Plinian',
                        description: 'Massive sustained eruption columns reaching stratosphere (10-45 km), widespread ash, pyroclastic flows from column collapse',
                        VEI: '4-6',
                        viscosity: 'High (dacite to rhyolite)',
                        gasContent: 'Very high',
                        explosivity: 'Violently explosive',
                        eruptionColumn: '10-45 km (stratosphere)',
                        duration: 'Hours to days',
                        examples: 'Vesuvius 79 AD, Pinatubo 1991, Mt. St. Helens 1980',
                        hazards: 'Pyroclastic flows, ash fall (regional-global), column collapse',
                        characteristics: ['Towering columns', 'Stratospheric injection', 'Global climate effects', 'Pumice falls']
                    },
                    {
                        name: 'Ultra-Plinian / Supervolcanic',
                        description: 'Catastrophic caldera-forming eruptions, 100s-1000s km³ ejected, global climate impact, mass extinction potential',
                        VEI: '7-8',
                        viscosity: 'Very high (rhyolite)',
                        gasContent: 'Extremely high',
                        explosivity: 'Mega-colossal',
                        eruptionColumn: '>45 km (well into stratosphere)',
                        duration: 'Days to weeks',
                        examples: 'Tambora 1815 (VEI 7), Toba 74,000 BP (VEI 8), Yellowstone 640,000 BP (VEI 8)',
                        hazards: 'Global catastrophe, volcanic winter, mass extinction',
                        characteristics: ['Caldera collapse', 'Years of volcanic winter', 'Continental ash fall', 'Civilization threat']
                    },
                    {
                        name: 'Phreatic (Steam Explosion)',
                        description: 'Steam-driven explosion when groundwater is heated by magma/hot rock; no fresh magma erupted, only fragmented country rock',
                        VEI: '0-2',
                        viscosity: 'N/A (no magma reaches surface)',
                        gasContent: 'Steam',
                        explosivity: 'Variable (can be violent)',
                        eruptionColumn: '<5 km',
                        duration: 'Minutes to hours',
                        examples: 'Mt. Ontake 2014 (63 deaths), Taal 2020, Kawah Ijen',
                        hazards: 'Ballistic blocks, ash, lahars, burns, NO WARNING',
                        characteristics: ['No magma', 'Sudden onset', 'Steam-driven', 'Unpredictable']
                    },
                    {
                        name: 'Phreatomagmatic',
                        description: 'Magma-water interaction causing extremely violent explosions, fine ash production; creates maar craters and tuff rings',
                        VEI: '2-4',
                        viscosity: 'Variable (any magma type)',
                        gasContent: 'Very high (steam + volcanic gases)',
                        explosivity: 'Very explosive',
                        eruptionColumn: '5-25 km',
                        duration: 'Hours to days',
                        examples: 'Surtsey 1963-65, Eyjafjallajökull 2010, Hunga Tonga 2022',
                        hazards: 'Fine ash (aviation), base surges, lahars',
                        characteristics: ['Magma-water mixing', 'Very fine ash', 'Base surges', 'Maar craters']
                    },
                    {
                        name: 'Surtseyan',
                        description: 'Shallow submarine eruptions breaking the surface; distinct "cock\'s tail" or cypressoid jets; builds tuff cones and islands',
                        VEI: '1-3',
                        viscosity: 'Low (typically basalt)',
                        gasContent: 'High (steam)',
                        explosivity: 'Moderately explosive',
                        eruptionColumn: '<10 km',
                        duration: 'Months to years',
                        examples: 'Surtsey 1963-67 (new island), Hunga Tonga-Hunga Ha\'apai 2015',
                        hazards: 'Ash, ballistics, steam, tsunamis',
                        characteristics: ['Submarine to emergent', 'Island building', 'Roostertail jets', 'Tuff rings']
                    }
                ]
            },

            VEIscale: {
                title: 'Volcanic Explosivity Index (VEI) - Complete Scale',
                description: 'Logarithmic scale (0-8) measuring eruption magnitude based on tephra volume, column height, and qualitative description. Each level represents approximately 10× the power of the previous.',
                levels: [
                    {
                        VEI: 0,
                        classification: 'Non-explosive',
                        description: 'Gentle, effusive',
                        tephraVolume: '< 10,000 m³',
                        columnHeight: '< 100m',
                        frequency: 'Continuous/Daily',
                        examples: 'Kilauea (continuous), Erta Ale lava lake',
                        eruptionStyle: 'Hawaiian',
                        climateImpact: 'None'
                    },
                    {
                        VEI: 1,
                        classification: 'Small',
                        description: 'Gentle',
                        tephraVolume: '10,000 - 1 million m³',
                        columnHeight: '100m - 1 km',
                        frequency: 'Daily',
                        examples: 'Stromboli (continuous), Piton de la Fournaise',
                        eruptionStyle: 'Hawaiian, Strombolian',
                        climateImpact: 'None'
                    },
                    {
                        VEI: 2,
                        classification: 'Moderate',
                        description: 'Explosive',
                        tephraVolume: '1 - 10 million m³ (0.001-0.01 km³)',
                        columnHeight: '1-5 km',
                        frequency: 'Weekly',
                        examples: 'Sakurajima (frequent), Pacaya',
                        eruptionStyle: 'Strombolian, Vulcanian',
                        climateImpact: 'None to negligible'
                    },
                    {
                        VEI: 3,
                        classification: 'Large',
                        description: 'Explosive',
                        tephraVolume: '10 - 100 million m³ (0.01-0.1 km³)',
                        columnHeight: '3-15 km',
                        frequency: 'Yearly',
                        examples: 'Nevado del Ruiz 1985, Soufrière Hills 1997',
                        eruptionStyle: 'Vulcanian, Pelean',
                        climateImpact: 'Minor local effects'
                    },
                    {
                        VEI: 4,
                        classification: 'Very Large',
                        description: 'Cataclysmic',
                        tephraVolume: '0.1 - 1 km³',
                        columnHeight: '10-25 km',
                        frequency: 'Tens of years (~18/century)',
                        examples: 'Eyjafjallajökull 2010, Galunggung 1982',
                        eruptionStyle: 'Vulcanian, Sub-Plinian',
                        climateImpact: 'Minor regional cooling possible'
                    },
                    {
                        VEI: 5,
                        classification: 'Very Large',
                        description: 'Paroxysmal',
                        tephraVolume: '1 - 10 km³',
                        columnHeight: '>25 km',
                        frequency: 'Centuries (~5/century)',
                        examples: 'Mt. St. Helens 1980, Vesuvius 79 AD, Fuji 1707',
                        eruptionStyle: 'Plinian',
                        climateImpact: 'Detectable global cooling (~0.1-0.2°C)'
                    },
                    {
                        VEI: 6,
                        classification: 'Colossal',
                        description: 'Paroxysmal',
                        tephraVolume: '10 - 100 km³',
                        columnHeight: '>25 km',
                        frequency: 'Centuries to millennia (~4/millennium)',
                        examples: 'Pinatubo 1991, Krakatoa 1883, Huaynaputina 1600',
                        eruptionStyle: 'Plinian, Ultra-Plinian',
                        climateImpact: 'Significant global cooling (0.5-1°C for 1-3 years)'
                    },
                    {
                        VEI: 7,
                        classification: 'Super-colossal',
                        description: 'Super-eruption',
                        tephraVolume: '100 - 1,000 km³',
                        columnHeight: '>25 km (well into stratosphere)',
                        frequency: 'Millennia (~5/10,000 years)',
                        examples: 'Tambora 1815 (Year Without Summer), Crater Lake ~5700 BC, Santorini ~1600 BC',
                        eruptionStyle: 'Ultra-Plinian',
                        climateImpact: 'Severe global cooling (1-3°C for years), crop failures, famine'
                    },
                    {
                        VEI: 8,
                        classification: 'Mega-colossal',
                        description: 'Supervolcanic',
                        tephraVolume: '> 1,000 km³',
                        columnHeight: '>25 km',
                        frequency: 'Tens of thousands of years (~2/million years)',
                        examples: 'Yellowstone 640,000 BP, Toba 74,000 BP, Taupo 26,500 BP',
                        eruptionStyle: 'Ultra-Plinian, Apocalyptic',
                        climateImpact: 'Volcanic winter (5-10°C drop, 5-10 years), mass extinction potential'
                    }
                ],
                importantNote: 'Each VEI level is approximately 10× more powerful than the previous. VEI 7-8 are called "supereruptions" capable of global climate impact and potentially civilization-threatening consequences.'
            }
        },
                // =============================
        // SECTION 3: FORMATION
        // =============================
        formation: {
            title: 'How Volcanoes Form',

            hero: {
                image: 'https://images.unsplash.com/photo-1719409773583-e9c21a1b133f?w=1920&q=80',
                tagline: 'The journey of magma from mantle to eruption'
            },

            renderAs: 'timeline',

            introduction: 'Volcanoes form when molten rock (magma) from Earth\'s interior finds a pathway to the surface. This occurs in three main tectonic settings: convergent boundaries (subduction zones where one plate dives beneath another), divergent boundaries (mid-ocean ridges and continental rifts where plates pull apart), and intraplate hotspots (mantle plumes rising from deep Earth). Understanding where and how magma generates, rises, accumulates, and erupts is fundamental to predicting volcanic hazards and comprehending Earth\'s dynamic interior. The process from magma generation to eruption can take thousands to millions of years.',

            tectonicSettings: {
                title: 'Where Volcanoes Form - The Three Tectonic Settings',
                settings: [
                    {
                        name: 'Convergent Boundaries (Subduction Zones)',
                        percentage: '~60% of active volcanoes',
                        mechanism: 'Oceanic plate subducts beneath another plate (oceanic or continental), carrying water-rich sediments and hydrated minerals. At 100-150 km depth, heat releases this water into the overlying mantle wedge. Water drastically lowers the melting point of mantle rock (flux melting), generating magma that rises to form volcanic arcs.',
                        depth: 'Melting occurs at 100-150 km depth above subducting slab',
                        magmaType: 'Andesitic to rhyolitic (intermediate to high silica: 52-75% SiO₂)',
                        volcanoType: 'Stratovolcanoes (explosive), some calderas',
                        eruptions: 'Explosive, dangerous - pyroclastic flows, ash, lahars',
                        examples: [
                            'Pacific Ring of Fire (75% of world\'s volcanoes)',
                            'Andes (Cotopaxi, Chimborazo, Villarrica) - Nazca under South American',
                            'Cascades (Rainier, St. Helens, Hood) - Juan de Fuca under North American',
                            'Japan (Fuji, Unzen, Sakurajima) - Pacific/Philippine under Eurasian',
                            'Indonesia (Merapi, Krakatoa, Tambora) - Indo-Australian under Sunda',
                            'Philippines (Pinatubo, Mayon, Taal) - Philippine Sea under Philippine Mobile Belt',
                            'Central America (Fuego, Santa María) - Cocos under Caribbean',
                            'Aleutian Islands (Redoubt, Augustine) - Pacific under North American',
                            'Mediterranean (Vesuvius, Etna, Santorini) - African under Eurasian',
                            'Lesser Antilles (Soufrière Hills, Mt. Pelée) - Atlantic under Caribbean'
                        ],
                        diagram: 'subduction-volcano.svg',
                        detailedProcess: [
                            '1. Oceanic plate (denser, ~3.0 g/cm³) approaches continental or oceanic plate',
                            '2. Oceanic plate bends and subducts at trench (deepest ocean areas)',
                            '3. Subducting plate carries water-rich sediments and hydrated oceanic crust',
                            '4. As plate descends, pressure and temperature increase',
                            '5. At 100-150 km depth, metamorphic reactions release water from minerals',
                            '6. Water rises into overlying mantle wedge',
                            '7. Water drastically lowers melting point of peridotite mantle rock',
                            '8. Partial melting (5-20%) produces andesitic magma',
                            '9. Buoyant magma rises through overlying plate',
                            '10. Magma collects in crustal chambers, evolves, eventually erupts',
                            '11. Volcanic arc forms parallel to trench, 100-300 km inland'
                        ]
                    },
                    {
                        name: 'Divergent Boundaries (Rifts and Mid-Ocean Ridges)',
                        percentage: '~15% of active land volcanoes (but 80% of all volcanic activity occurs underwater at ridges)',
                        mechanism: 'Tectonic plates pull apart, creating extensional stress. As plates separate, hot mantle rock rises to fill the gap. The decrease in pressure as mantle rises (without significant temperature change) causes decompression melting, generating basaltic magma.',
                        depth: 'Melting occurs at 10-60 km depth as mantle rises',
                        magmaType: 'Basaltic (low silica: 45-52% SiO₂)',
                        volcanoType: 'Shield volcanoes, fissure eruptions, rift valleys',
                        eruptions: 'Effusive, gentle, high volume - lava flows, lava fountains',
                        examples: [
                            'Mid-Atlantic Ridge (Iceland is surface expression)',
                            'East African Rift (Nyiragongo, Erta Ale, Ol Doinyo Lengai)',
                            'Red Sea Rift (opening new ocean basin)',
                            'Gulf of Aden',
                            'Basin and Range Province (USA) - ancient rifting',
                            'Rio Grande Rift (New Mexico)',
                            'Baikal Rift (Russia)'
                        ],
                        diagram: 'divergent-volcano.svg',
                        detailedProcess: [
                            '1. Tectonic plates move apart at 1-10 cm/year',
                            '2. Extension creates normal faults and rift valleys (graben)',
                            '3. Crust thins as plates separate',
                            '4. Hot mantle rock (asthenosphere) rises to fill gap',
                            '5. As mantle rises, pressure decreases (decompression)',
                            '6. Decompression lowers solidus temperature, causing partial melting (10-20%)',
                            '7. Basaltic magma forms from mantle peridotite',
                            '8. Low-viscosity magma rises easily through fractured crust',
                            '9. Erupts along fissures or central vents',
                            '10. Creates new oceanic crust at ridges, continental rifts on land',
                            '11. Process is continuous - most volcanically active environment'
                        ]
                    },
                    {
                        name: 'Hotspots (Mantle Plumes)',
                        percentage: '~5% of active volcanoes',
                        mechanism: 'A stationary mantle plume - a column of abnormally hot rock rising from deep in the mantle (possibly from core-mantle boundary at 2,900 km depth) - provides a persistent heat source. As the tectonic plate moves over this fixed plume, a chain of volcanoes forms, with the youngest and most active volcano directly over the plume.',
                        depth: 'Plume may originate at core-mantle boundary (2,900 km) or upper mantle (~660 km)',
                        magmaType: 'Usually basaltic (hotspots through oceanic crust); can be rhyolitic (hotspots through thick continental crust like Yellowstone)',
                        volcanoType: 'Shield volcanoes, volcanic island chains, some calderas/supervolcanoes',
                        eruptions: 'Usually effusive (basaltic); explosive if rhyolitic (Yellowstone)',
                        examples: [
                            'Hawaii (Kilauea, Mauna Loa, Mauna Kea) - Pacific Plate moves NW at 7 cm/year',
                            'Yellowstone (supervolcano) - North American Plate moves SW',
                            'Galápagos (Fernandina, Wolf) - Nazca Plate moves E',
                            'Réunion (Piton de la Fournaise) - African Plate moves N',
                            'Iceland (hotspot + divergent boundary - double source)',
                            'Canary Islands (Teide, La Palma)',
                            'Samoa Islands',
                            'Azores (triple junction + hotspot)',
                            'Deccan Traps (ancient - Réunion hotspot 66 MYA when India was over it)'
                        ],
                        diagram: 'hotspot-volcano.svg',
                        detailedProcess: [
                            '1. Mantle plume rises from deep mantle (thermal anomaly)',
                            '2. Plume head may be 500-1,000 km diameter',
                            '3. Hot material is less dense, rises buoyantly',
                            '4. Plume reaches base of lithosphere (tectonic plate)',
                            '5. Heat causes partial melting of overlying mantle and/or crust',
                            '6. Magma rises through plate to erupt at surface',
                            '7. Volcano forms directly above plume (active phase)',
                            '8. Tectonic plate moves over stationary plume',
                            '9. Original volcano moves off plume, becomes dormant then extinct',
                            '10. New volcano forms over plume',
                            '11. Chain of progressively older volcanoes trails behind',
                            '12. Hawaii: Big Island active, Maui dormant, Oahu-Kauai eroding, Emperor Seamounts extinct'
                        ]
                    }
                ],
                
                ringOfFire: {
                    title: 'The Pacific Ring of Fire - Earth\'s Most Volcanically Active Zone',
                    description: 'A 40,000 km horseshoe-shaped zone around the Pacific Ocean containing 75% of world\'s active volcanoes and 90% of earthquakes. It marks the boundaries of the Pacific Plate with surrounding plates.',
                    stats: {
                        length: '40,000 km (25,000 miles)',
                        volcanoes: '452 active volcanoes (75% of world total)',
                        earthquakes: '~90% of world\'s earthquakes',
                        population_at_risk: '~450 million people living in volcanic hazard zones',
                        plates: 'Pacific Plate interacting with North American, Juan de Fuca, Cocos, Nazca, Antarctic, Philippine Sea, Eurasian plates'
                    },
                    countries: [
                        'Chile', 'Peru', 'Ecuador', 'Colombia', 'Central America (all countries)',
                        'Mexico', 'USA (Alaska, Cascades)', 'Canada (British Columbia)',
                        'Russia (Kamchatka)', 'Japan', 'Taiwan', 'Philippines',
                        'Indonesia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Tonga'
                    ],
                    majorVolcanoes: [
                        'Mt. Fuji (Japan)', 'Pinatubo (Philippines)', 'Krakatoa (Indonesia)',
                        'Merapi (Indonesia)', 'Taal (Philippines)', 'Mayon (Philippines)',
                        'Mt. St. Helens (USA)', 'Mt. Rainier (USA)', 'Popocatépetl (Mexico)',
                        'Cotopaxi (Ecuador)', 'Villarrica (Chile)', 'Ruapehu (New Zealand)'
                    ],
                    cause: 'Pacific Plate and surrounding plates meet at subduction zones where denser oceanic crust dives beneath less dense continental or oceanic crust, generating magma through flux melting.'
                }
            },

            stages: [
                {
                    stage: 1,
                    title: 'Magma Generation - Melting in the Mantle',
                    timeframe: 'At 10-200 km depth | Continuous process over millions of years',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Rock in Earth\'s mantle is normally solid despite extremely high temperatures (1000-1500°C) because immense pressure keeps it from melting. Three mechanisms can trigger partial melting to generate magma:',
                        '',
                        '**Decompression Melting** (Divergent boundaries, Hotspots):',
                        '• Hot mantle rock rises as plates separate or over thermal plumes',
                        '• Pressure decreases as rock rises, but temperature stays high',
                        '• Lower pressure crosses the solidus (melting curve), initiating melting',
                        '• Produces basaltic magma with low silica content',
                        '',
                        '**Flux Melting** (Subduction zones):',
                        '• Subducting oceanic plate carries water-rich sediments and hydrated minerals',
                        '• At 100-150 km depth, heat releases water from minerals',
                        '• Water rises into overlying mantle wedge',
                        '• Water drastically lowers rock\'s melting point (flux effect)',
                        '• Produces andesitic to rhyolitic magma (higher silica)',
                        '',
                        '**Heat Transfer** (Hotspots, Rift zones):',
                        '• Mantle plume provides extra heat from deep Earth',
                        '• Elevated temperature causes melting of overlying mantle or crust',
                        '• Can produce basaltic or rhyolitic magma depending on what melts',
                        '',
                        'Only 1-30% of rock actually melts (partial melting). The melt composition depends on:',
                        '• Percentage melted (more melting = more basaltic)',
                        '• Source rock composition',
                        '• Presence of water or other volatiles',
                        '',
                        'Resulting magma is less dense (2.4-2.8 g/cm³) than surrounding solid rock (3.0-3.3 g/cm³), so it begins to rise.'
                    ],

                    geologicalProcess: 'Partial melting of mantle peridotite (olivine + pyroxene) produces basaltic magma. At subduction zones, flux melting with water generates more silica-rich magmas. Melt segregates and begins buoyant rise.',

                    keyFeatures: [
                        'Depth: 10-200 km below surface (depends on setting)',
                        'Temperature: 1000-1500°C',
                        'Pressure: 0.5-6 GPa (5,000-60,000 atmospheres)',
                        'Melt fraction: typically 1-30% (partial melting)',
                        'Magma density: 2.4-2.8 g/cm³ (vs. solid rock 3.0-3.3 g/cm³)',
                        'Composition: basalt (decompression), andesite-rhyolite (flux melting)'
                    ],

                    evidence: [
                        'Seismic tomography shows slow-velocity zones (partial melt) in mantle beneath volcanoes',
                        'Xenoliths (mantle rock fragments) brought up in eruptions',
                        'Magma chemistry matches predicted partial melt compositions from experiments',
                        'Geothermal gradients measured in deep boreholes',
                        'Experimental petrology replicates melting conditions in laboratory'
                    ],

                    meltingTypes: [
                        {
                            type: 'Decompression Melting',
                            location: 'Divergent boundaries, hotspots',
                            mechanism: 'Pressure decreases as hot rock rises, crossing solidus curve',
                            magmaType: 'Basaltic (low silica, fluid)',
                            examples: 'Mid-Atlantic Ridge (Iceland), Hawaii, East African Rift'
                        },
                        {
                            type: 'Flux Melting',
                            location: 'Subduction zones (convergent boundaries)',
                            mechanism: 'Water from subducting plate lowers mantle melting point',
                            magmaType: 'Andesitic to rhyolitic (higher silica, viscous)',
                            examples: 'Cascades, Andes, Japan, Indonesia, Philippines'
                        },
                        {
                            type: 'Heat Transfer',
                            location: 'Hotspots, especially under continental crust',
                            mechanism: 'Extra heat from mantle plume induces melting',
                            magmaType: 'Variable - basaltic or rhyolitic',
                            examples: 'Yellowstone (rhyolitic through continental crust)'
                        }
                    ]
                },

                {
                    stage: 2,
                    title: 'Magma Rises - Buoyant Ascent Through the Crust',
                    timeframe: 'Years to thousands of years | From mantle to shallow crustal chambers',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'Once formed, buoyant magma begins its journey toward the surface. Being less dense than surrounding solid rock, magma rises like a hot air balloon through cooler, denser material.',
                        '',
                        '**Rise Mechanisms:**',
                        '• Buoyancy: density contrast drives upward movement',
                        '• Dike propagation: magma fractures overlying rock, creating sheet-like conduits',
                        '• Diapirism: large blobs of magma rise through ductile lower crust',
                        '• Stoping: magma breaks off blocks of overlying rock which sink',
                        '',
                        '**Rise Rate Factors:**',
                        '• Magma viscosity: basalt rises faster than rhyolite',
                        '• Density contrast with surrounding rock',
                        '• Presence of fractures and faults (pathways)',
                        '• Crustal structure and thickness',
                        '',
                        '**Magma Chambers:**',
                        '• Magma often stalls at density boundaries in crust (5-15 km depth)',
                        '• Accumulates in reservoirs called magma chambers',
                        '• Chambers can be 1-1,000+ km³ in volume',
                        '• Multiple magma batches may collect over centuries',
                        '',
                        '**Magma Evolution in Chambers:**',
                        '• Fractional crystallization: dense minerals (olivine, pyroxene) settle, increasing silica',
                        '• Assimilation: magma melts and incorporates surrounding rock',
                        '• Magma mixing: different batches mix, creating hybrid compositions',
                        '• Degassing: volatiles (H₂O, CO₂) concentrate as crystals form',
                        '',
                        'Through these processes, originally basaltic magma can evolve to andesite, dacite, even rhyolite.'
                    ],

                    geologicalProcess: 'Buoyancy-driven ascent through dike propagation and diapirism. Magma stalls at neutral buoyancy levels, accumulating in chambers where it evolves through crystallization, assimilation, and mixing.',

                    keyFeatures: [
                        'Rise rate: meters per year to kilometers per year',
                        'Chamber depth: typically 5-15 km (detectable by monitoring)',
                        'Chamber size: 1-1,000+ km³',
                        'Chamber shape: sill-like, spherical, or complex geometries',
                        'Magma evolution: basalt → andesite → dacite → rhyolite',
                        'Crystal content: 0-50% (increases with time in chamber)',
                        'Residence time: centuries to millennia in chamber'
                    ],

                    evidence: [
                        'Seismic imaging shows magma bodies beneath volcanoes',
                        'Ground deformation (GPS, InSAR) detects chamber inflation',
                        'Gravity changes indicate density changes from magma movement',
                        'Geochemistry of erupted lavas records fractionation history',
                        'Exposed plutons reveal solidified ancient magma chambers',
                        'Earthquake swarms track dike propagation'
                    ],

                    magmaChambers: {
                        title: 'Magma Chamber Anatomy and Dynamics',
                        components: [
                            'Roof: Cooler, solidified margin; may fracture under pressure',
                            'Walls: Contact with country rock; partial melting/assimilation',
                            'Floor: Dense crystal mush accumulates (cumulates)',
                            'Center: Hottest, most liquid, least crystallized',
                            'Conduit: Connection to deeper magma source',
                            'Dikes: Vertical fracture-filling magma sheets',
                            'Sills: Horizontal magma sheets between rock layers'
                        ],
                        processes: [
                            'Fractional crystallization enriches silica in remaining liquid',
                            'Crystal settling creates layered cumulate rocks',
                            'Assimilation of wall rock changes magma composition',
                            'Convection mixes magma and distributes heat',
                            'Volatile exsolution increases pressure as crystallization proceeds',
                            'Multiple recharge events add fresh magma'
                        ]
                    }
                },

                {
                    stage: 3,
                    title: 'Pre-Eruption - Pressure Builds and Warning Signs Emerge',
                    timeframe: 'Days to months before eruption (sometimes years)',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'As magma approaches the surface, multiple warning signs typically emerge. Modern monitoring can detect these precursors, allowing evacuations that save thousands of lives.',
                        '',
                        '**Ground Deformation:**',
                        '• Magma inflates the crust like a balloon',
                        '• Ground surface rises (inflation) and tilts outward',
                        '• Detected by GPS stations, tiltmeters, and InSAR satellites',
                        '• Can measure millimeters to meters of uplift',
                        '',
                        '**Seismic Activity:**',
                        '• Earthquake swarms occur as rock fractures ahead of rising magma',
                        '• Earthquakes shallow and migrate upward over time',
                        '• Harmonic tremor (continuous shaking) indicates magma movement in conduit',
                        '• Long-period earthquakes from fluid/gas movement',
                        '',
                        '**Gas Emissions:**',
                        '• SO₂, CO₂, H₂S increase as magma degasses',
                        '• CO₂ often rises first (deeper degassing)',
                        '• SO₂ spikes indicate shallow magma',
                        '• Measured by ground sensors, aircraft, satellites',
                        '',
                        '**Other Indicators:**',
                        '• Hot springs and fumaroles increase in temperature',
                        '• Crater lakes may heat up, change color, or drain',
                        '• Hydrothermal explosions (phreatic) may occur',
                        '• Glacier melting accelerates over hot zones',
                        '• Magnetic and electrical field changes',
                        '• Animal behavior changes (anecdotal)',
                        '',
                        '**Warning Period:**',
                        '• Can be days (Pinatubo 1991) to years (Long Valley ongoing)',
                        '• Some eruptions give little warning (phreatic explosions)',
                        '• Monitoring networks save lives - Pinatubo evacuation saved 5,000-20,000'
                    ],

                    geologicalProcess: 'Magma fractures overlying rock, forcing open conduit pathway. Volatile (gas) exsolution from crystallizing magma increases internal pressure. Hydrothermal systems respond to heat input. Rock weakens through heating and alteration.',

                    keyFeatures: [
                        'Ground inflation: millimeters to meters (GPS, tiltmeters)',
                        'Earthquake swarms: hundreds to thousands per day at peak',
                        'Earthquake depth: shallow (<5 km) and migrating upward',
                        'SO₂ emissions: 100 to 50,000+ tons/day (satellites can detect)',
                        'CO₂ flux: increases before SO₂ (deeper source)',
                        'Ground temperature: rising (thermal cameras)',
                        'Warning period: hours to years (not always present)'
                    ],

                    monitoringTechniques: [
                        {
                            technique: 'Seismic Monitoring',
                            measures: 'Earthquakes, volcanic tremor, explosion signals',
                            instruments: 'Seismometers (short-period, broadband), arrays',
                            interpretation: 'Swarm location and migration shows magma pathway',
                            example: 'USGS networks around Kilauea, Yellowstone'
                        },
                        {
                            technique: 'Ground Deformation',
                            measures: 'Inflation, deflation, tilting, faulting',
                            instruments: 'GPS receivers, tiltmeters, InSAR satellite radar',
                            interpretation: 'Inflation indicates magma accumulation; deflation may indicate eruption',
                            example: 'Yellowstone "breathing" detected by GPS'
                        },
                        {
                            technique: 'Gas Monitoring',
                            measures: 'SO₂, CO₂, H₂S, HCl flux and ratios',
                            instruments: 'DOAS, COSPEC, MultiGAS, drones, satellites (OMI, TROPOMI)',
                            interpretation: 'Rising SO₂ = shallow magma; changing ratios = changing source',
                            example: 'Kilauea SO₂ emissions tracked daily'
                        },
                        {
                            technique: 'Thermal Monitoring',
                            measures: 'Surface temperature changes, hot spots',
                            instruments: 'Thermal cameras, satellite sensors (MODIS, Landsat, ASTER)',
                            interpretation: 'New hot spots indicate near-surface magma or vent opening',
                            example: 'Satellite detection of new vents at Kilauea 2018'
                        },
                        {
                            technique: 'Hydrological Monitoring',
                            measures: 'Hot spring temperature, chemistry, water levels',
                            instruments: 'Thermocouples, water samplers, level sensors',
                            interpretation: 'Heating and chemical changes indicate magmatic input',
                            example: 'Yellowstone hot springs temperature monitoring'
                        },
                        {
                            technique: 'Acoustic Monitoring',
                            measures: 'Infrasound from explosions and degassing',
                            instruments: 'Infrasound microphones',
                            interpretation: 'Explosion energy, vent size, eruption intensity',
                            example: 'Detection of explosions in remote volcanoes'
                        }
                    ],

                    successStories: [
                        'Pinatubo 1991: Monitoring and evacuation saved 5,000-20,000 lives',
                        'Mt. St. Helens 1980: Exclusion zone prevented greater casualties',
                        'Kilauea 2018: Evacuation of Leilani Estates before fissures opened',
                        'Merapi 2010: Evacuation of 400,000 reduced casualties',
                        'Nevado del Ruiz 1985: TRAGIC - warnings ignored, 23,000 died (lesson learned)'
                    ]
                },

                {
                    stage: 4,
                    title: 'Eruption - Magma Reaches the Surface',
                    timeframe: 'Minutes to years (highly variable by eruption type)',
                    image: 'https://images.unsplash.com/photo-1719409773583-e9c21a1b133f?w=1200&q=80',

                    description: [
                        'Eruption begins when magma pressure exceeds the strength of overlying rock, or when external triggers (earthquakes, landslides) breach the containment.',
                        '',
                        '**What Controls Eruption Style?**',
                        'Two key factors determine whether eruption is gentle or explosive:',
                        '',
                        '1. **Magma Viscosity** (controlled by silica content):',
                        '   • Low silica (basalt, 45-52%): fluid, gases escape easily → EFFUSIVE',
                        '   • High silica (rhyolite, >70%): thick, gases trapped → EXPLOSIVE',
                        '',
                        '2. **Gas Content**:',
                        '   • Low gas: quiet lava flows',
                        '   • High gas: drives explosive fragmentation',
                        '',
                        '**Eruption Matrix:**',
                        '• LOW viscosity + LOW gas = effusive lava flows (Hawaiian style)',
                        '• LOW viscosity + HIGH gas = lava fountains (Strombolian style)',
                        '• HIGH viscosity + LOW gas = lava domes (slow extrusion)',
                        '• HIGH viscosity + HIGH gas = EXPLOSIVE (Plinian, pyroclastic flows)',
                        '',
                        '**Explosive Eruptions:**',
                        '• Gas bubbles expand rapidly as pressure drops at surface',
                        '• Magma fragments into ash, pumice, bombs',
                        '• Eruption column can reach 10-45 km (stratosphere)',
                        '• Column collapse generates deadly pyroclastic flows',
                        '',
                        '**Effusive Eruptions:**',
                        '• Lava flows emerge from vent',
                        '• Flow distance depends on eruption rate and viscosity',
                        '• Lava tubes allow long-distance transport',
                        '',
                        '**Eruption Products:**',
                        '• Lava flows: molten rock on surface',
                        '• Pyroclastic flows: hot gas + ash + rock fragments',
                        '• Tephra (airfall): ash, lapilli, bombs',
                        '• Volcanic gases: H₂O, CO₂, SO₂, H₂S, HCl, HF',
                        '• Lahars: volcanic mudflows (if water involved)'
                    ],

                    geologicalProcess: 'Volatile-driven fragmentation (explosive) or fluid extrusion (effusive). As magma rises, dissolved gases exsolve (come out of solution) as pressure decreases. In explosive eruptions, rapid bubble expansion fragments magma into pyroclasts.',

                    keyFeatures: [
                        'Lava temperature: 700-1,200°C (rhyolite to basalt)',
                        'Eruption column height: 1-45+ km',
                        'Pyroclastic flow speed: 100-700 km/h',
                        'Pyroclastic flow temperature: 200-800°C',
                        'Lava flow speed: <1 km/h (rhyolite) to 30 km/h (basalt)',
                        'Ash dispersal: local to global',
                        'VEI scale: 0 (gentle) to 8 (supervolcanic)',
                        'Eruption rate: 1 to 100,000+ m³/second'
                    ],

                    eruptionProducts: [
                        {
                            product: 'Lava Flows',
                            description: 'Molten rock flowing over land surface',
                            temperature: '700-1,200°C',
                            speed: '0.1-60 km/h (basalt faster, rhyolite slower)',
                            distance: '1-100+ km depending on viscosity and eruption rate',
                            hazard: 'Destructive to property but usually escapable',
                            types: ['Pahoehoe (smooth, ropy)', 'Aa (rough, blocky)', 'Block lava', 'Pillow lava (underwater)']
                        },
                        {
                            product: 'Pyroclastic Flows',
                            description: 'Fast-moving density current of hot gas, ash, and rock',
                            temperature: '200-800°C',
                            speed: '100-700 km/h',
                            distance: '5-100+ km',
                            hazard: 'Deadliest volcanic hazard - impossible to outrun, 100% fatal',
                            types: ['Block-and-ash flows (dome collapse)', 'Pumice flows (column collapse)', 'Pyroclastic surges (dilute, turbulent)']
                        },
                        {
                            product: 'Tephra (Airfall)',
                            description: 'Fragmented volcanic material falling from eruption cloud',
                            size: 'Ash (<2mm), Lapilli (2-64mm), Bombs/Blocks (>64mm)',
                            distribution: 'Wind-dispersed; can travel thousands of km (fine ash)',
                            hazard: 'Roof collapse, respiratory damage, aviation danger, crop damage',
                            types: ['Volcanic ash', 'Pumice (frothy)', 'Scoria (dense)', 'Volcanic bombs (aerodynamic)', 'Blocks (angular)']
                        },
                        {
                            product: 'Volcanic Gases',
                            description: 'Dissolved volatiles released from magma',
                            composition: 'H₂O (70-95%), CO₂ (5-25%), SO₂ (1-10%), H₂S, HCl, HF',
                            hazard: 'Asphyxiation (CO₂), acid rain, respiratory damage, climate effects',
                            effects: ['Vog (volcanic smog)', 'Acid rain (SO₂)', 'Volcanic winter (stratospheric SO₂)', 'Local asphyxiation (CO₂, H₂S)']
                        },
                        {
                            product: 'Lahars (Volcanic Mudflows)',
                            description: 'Rapidly flowing mixture of volcanic debris and water',
                            trigger: 'Eruption melting ice/snow, crater lake breach, heavy rain on ash',
                            speed: '20-100 km/h',
                            distance: '50-100+ km following river valleys',
                            hazard: 'Destroys everything in valley floors; buries towns'
                        }
                    ],

                    volcanicTerms: [
                        'Vent: opening through which magma erupts',
                        'Crater: depression at summit from explosions',
                        'Caldera: large collapse depression (>1 km)',
                        'Conduit: pipe connecting chamber to vent',
                        'Dike: vertical sheet of magma cutting through rock',
                        'Sill: horizontal sheet of magma between layers',
                        'Parasitic cone: secondary cone on flank of larger volcano'
                    ]
                },

                {
                    stage: 5,
                    title: 'Post-Eruption - Aftermath and Volcanic Evolution',
                    timeframe: 'Years to millions of years',
                    image: 'https://images.unsplash.com/photo-1562114808-990b7de06ec7?w=1200&q=80',

                    description: [
                        'After an eruption ends, the volcano enters a new phase of its evolution. The volcanic landscape is reshaped, ecosystems recover, and the volcanic system slowly rebuilds toward potential future activity.',
                        '',
                        '**Immediate Aftermath:**',
                        '• Eruption ends when magma supply is exhausted or vent blocks',
                        '• Hot deposits continue degassing for months to years',
                        '• Secondary hazards persist: lahars from rain, gas emissions, slope instability',
                        '• Ecosystem devastated in blast/flow zones',
                        '',
                        '**Volcanic Construction:**',
                        '• Lava flows add layers to edifice',
                        '• Ash and tephra build steep slopes on stratovolcanoes',
                        '• Craters/calderas may form from explosions or collapse',
                        '• Lava domes may grow in craters over months to decades',
                        '',
                        '**Hydrothermal Systems Develop:**',
                        '• Heat from cooling magma drives groundwater circulation',
                        '• Hot springs, fumaroles, geysers form',
                        '• Minerals precipitate (gold, silver, copper deposits)',
                        '• Can persist thousands to millions of years',
                        '',
                        '**Erosion and Weathering:**',
                        '• Rain, wind, ice immediately attack new volcanic rocks',
                        '• Rivers carve valleys into volcano flanks',
                        '• Glaciers sculpt high-elevation volcanoes',
                        '• Steep volcanic slopes prone to landslides',
                        '',
                        '**Soil Formation and Ecosystem Recovery:**',
                        '• Volcanic ash weathers rapidly into fertile andisol soils',
                        '• Pioneer species (mosses, lichens) colonize first',
                        '• Plants return within years; forests within decades to centuries',
                        '• St. Helens: life returned within weeks (biotic recovery studies)',
                        '',
                        '**Volcanic Cycle Continues:**',
                        '• Magma chamber slowly refills from deeper source',
                        '• Pressure builds again over years to millennia',
                        '• Volcano may erupt again (polygenetic) or become extinct',
                        '• Time between eruptions: years (Stromboli) to millions of years (extinct)'
                    ],

                    geologicalProcess: 'Volcanic construction competes with erosion and weathering. Hydrothermal alteration changes rock properties. Magma chamber recharges through episodic injections. Isostatic adjustment occurs as volcano loads crust.',

                    keyFeatures: [
                        'Repose period: years to hundreds of thousands of years',
                        'Edifice growth: millimeters to meters per eruption cycle',
                        'Soil formation: decades to centuries (volcanic ash weathers fast)',
                        'Erosion rate: highly variable; tropical climates fastest',
                        'Hydrothermal lifespan: thousands to millions of years',
                        'Climate recovery: 1-3 years after large eruptions',
                        'Ecosystem recovery: decades to centuries'
                    ],

                    postEruptionHazards: [
                        'Lahars from rain on fresh ash (years to decades after eruption)',
                        'Volcanic gas emissions from cooling deposits',
                        'Dome collapse generating pyroclastic flows',
                        'Flank collapse and debris avalanche',
                        'Tsunamis from coastal collapse',
                        'Continued seismicity from cooling contraction',
                        'Phreatic (steam) explosions from groundwater heating'
                    ],

                    benefits: [
                        {
                            benefit: 'Fertile Volcanic Soils (Andisols)',
                            description: 'Volcanic ash weathers rapidly into nutrient-rich soils with excellent water retention',
                            examples: 'Java, Indonesia (140 million people); Sicily; Ethiopian Highlands; Costa Rica',
                            timeframe: 'Decades to centuries for mature soils',
                            importance: 'Supports 10% of world\'s population despite hazards'
                        },
                        {
                            benefit: 'Geothermal Energy',
                            description: 'Heat from cooling magma and hydrothermal circulation can generate electricity',
                            examples: 'Iceland (25% of electricity), Philippines (27%), Kenya (45%), New Zealand, Italy, USA',
                            capacity: '15,000+ MW installed globally; potential much larger',
                            importance: 'Renewable, baseload (24/7) power source'
                        },
                        {
                            benefit: 'Mineral Deposits',
                            description: 'Volcanic-hydrothermal systems concentrate precious and base metals',
                            examples: 'Gold (Andes, Indonesia), Copper (Chile), Silver (Mexico), Sulfur (Java)',
                            types: 'Epithermal deposits, porphyry copper, VMS deposits',
                            importance: 'Major source of gold, copper, silver globally'
                        },
                        {
                            benefit: 'New Land Formation',
                            description: 'Lava flows extend coastlines and create new islands',
                            examples: 'Hawaii (42 acres/year), Surtsey (new island 1963), Hunga Tonga',
                            process: 'Lava enters ocean, solidifies, builds new substrate',
                            importance: 'Creates new habitat for biological colonization'
                        },
                        {
                            benefit: 'Tourism and Recreation',
                            description: 'Volcanic landscapes attract millions of visitors annually',
                            examples: 'Hawaii Volcanoes NP, Yellowstone, Mt. Fuji, Iceland, Santorini',
                            economic: 'Billions of dollars in tourism revenue globally',
                            activities: 'Hiking, viewing eruptions, hot springs, skiing'
                        },
                        {
                            benefit: 'Building Materials',
                            description: 'Volcanic rocks and products used in construction',
                            examples: 'Pumice (concrete addite), Basalt (road base), Obsidian (historical tools)',
                            products: 'Pozzolanic cement (Roman concrete used volcanic ash)',
                            importance: 'Durable, widely available construction materials'
                        },
                        {
                            benefit: 'Scientific Research',
                            description: 'Volcanoes are natural laboratories for Earth science',
                            fields: 'Petrology, geochemistry, geophysics, ecology, astrobiology',
                            applications: 'Understanding Earth\'s interior, predicting eruptions, Mars/Venus volcanoes',
                            sites: 'Kilauea, Yellowstone, Vesuvius (oldest volcano observatory)'
                        }
                    ]
                }
            ],

            terminology: {
                title: '📖 Essential Volcanic Terminology',
                terms: [
                    {
                        term: 'Magma',
                        pronunciation: '(MAG-muh)',
                        definition: 'Molten rock beneath Earth\'s surface, containing dissolved gases (H₂O, CO₂, SO₂), mineral crystals, and silicate melt at temperatures of 700-1,300°C. Composition ranges from basaltic (45-52% silica, fluid) to rhyolitic (>70% silica, viscous).',
                        example: 'Basaltic magma at Kilauea has low viscosity (like motor oil) and erupts gently; rhyolitic magma at Yellowstone is highly viscous (like cold toothpaste) and erupts explosively.',
                        relatedTerms: ['Lava', 'Melt', 'Viscosity', 'Silica Content', 'Volatiles']
                    },
                    {
                        term: 'Lava',
                        pronunciation: '(LAH-vuh)',
                        definition: 'Molten rock that has erupted onto Earth\'s surface. Once magma reaches the surface and loses most dissolved gases, it becomes lava. Lava can form flows, lakes, fountains, tubes, or solidify as various igneous rock types.',
                        example: 'Pahoehoe lava has a smooth, ropy texture from fluid flow; aa lava has rough, blocky texture from higher viscosity or faster flow - both from same magma under different conditions.',
                        relatedTerms: ['Magma', 'Pahoehoe', 'Aa', 'Lava Flow', 'Pillow Lava', 'Lava Tube']
                    },
                    {
                        term: 'Pyroclastic Flow',
                        pronunciation: '(py-ro-KLAS-tik)',
                        definition: 'A fast-moving ground-hugging density current of hot gas, ash, pumice, and rock fragments that flows down volcano flanks during explosive eruptions. Temperatures reach 200-800°C, speeds 100-700 km/h. The deadliest volcanic hazard - unsurvivable.',
                        example: 'Pyroclastic flows from Vesuvius killed everyone in Pompeii in 79 AD in minutes. Flows from Mt. Pelée killed 29,000 in St. Pierre, Martinique in under 2 minutes (1902).',
                        relatedTerms: ['Nuée Ardente', 'Pyroclastic Surge', 'Ignimbrite', 'Block-and-Ash Flow']
                    },
                    {
                        term: 'Ring of Fire',
                        pronunciation: '(ring of FY-er)',
                        definition: 'A 40,000 km horseshoe-shaped zone around the Pacific Ocean where approximately 75% of world\'s volcanoes and 90% of earthquakes occur. Marks the boundaries of the Pacific Plate with surrounding plates at subduction zones.',
                        example: 'The Ring of Fire includes volcanoes in Japan, Philippines, Indonesia, New Zealand, Chile, Peru, Central America, Mexico, USA Pacific Northwest, Alaska, and Russia\'s Kamchatka.',
                        relatedTerms: ['Subduction Zone', 'Pacific Plate', 'Volcanic Arc', 'Convergent Boundary', 'Circum-Pacific Belt']
                    },
                    {
                        term: 'Hotspot',
                        pronunciation: '(HOT-spot)',
                        definition: 'A volcanic region fed by an underlying mantle plume - a fixed zone of abnormally hot rock rising from deep in the mantle (possibly core-mantle boundary). As tectonic plates move over stationary hotspots, chains of volcanoes form.',
                        example: 'The Hawaiian Islands formed as Pacific Plate moved NW at 7 cm/year over a fixed hotspot; Kilauea sits over the hotspot now, older islands have moved past it and are extinct.',
                        relatedTerms: ['Mantle Plume', 'Volcanic Chain', 'Intraplate Volcanism', 'Hawaii', 'Yellowstone']
                    },
                    {
                        term: 'Caldera',
                        pronunciation: '(kal-DAIR-uh)',
                        definition: 'A large volcanic depression (1-80+ km diameter) formed by collapse of ground surface into an evacuated magma chamber following a massive eruption. Unlike craters formed by explosion, calderas form by subsidence.',
                        example: 'Yellowstone Caldera (72×55 km) formed 640,000 years ago when 1,000 km³ of magma erupted and the roof collapsed; Crater Lake fills the caldera where Mt. Mazama collapsed.',
                        relatedTerms: ['Crater', 'Collapse', 'Resurgent Dome', 'Supervolcano', 'Ring Fracture']
                    },
                    {
                        term: 'Lahar',
                        pronunciation: '(LAH-har)',
                        definition: 'A rapidly flowing mixture of volcanic debris and water that travels down valleys from volcanoes. Lahars are triggered by eruptions melting snow/ice, crater lake breaches, or heavy rainfall on loose volcanic ash. They can travel 50-100+ km.',
                        example: 'The 1985 Nevado del Ruiz eruption triggered lahars that buried Armero, Colombia (74 km away), killing 23,000 people in minutes.',
                        relatedTerms: ['Mudflow', 'Debris Flow', 'Volcanic Hazard', 'Nevado del Ruiz']
                    },
                    {
                        term: 'Volcanic Explosivity Index (VEI)',
                        pronunciation: '(V-E-I)',
                        definition: 'A logarithmic scale (0-8) measuring eruption explosivity based on volume of ejected material (tephra), eruption column height, and duration. Each VEI level is approximately 10× more powerful than the previous.',
                        example: 'VEI 5: Mt. St. Helens 1980 (~1 km³). VEI 6: Pinatubo 1991 (~10 km³). VEI 7: Tambora 1815 (~100 km³). VEI 8: Yellowstone 640 ka (~1,000 km³).',
                        relatedTerms: ['Tephra', 'Eruption Column', 'Plinian Eruption', 'Supereruption']
                    },
                    {
                        term: 'Tephra',
                        pronunciation: '(TEF-ruh)',
                        definition: 'A general term for all fragmental volcanic material explosively ejected from a volcano, regardless of size, shape, or composition. Includes ash (<2mm), lapilli (2-64mm), and blocks/bombs (>64mm).',
                        example: 'Pinatubo 1991 deposited tephra up to 10 cm thick over 2,000 km², collapsing roofs, destroying crops, and grounding aircraft.',
                        relatedTerms: ['Ash', 'Lapilli', 'Volcanic Bombs', 'Pumice', 'Scoria']
                    },
                    {
                        term: 'Fumarole',
                        pronunciation: '(FYOO-muh-role)',
                        definition: 'A vent in a volcanic area that emits steam and volcanic gases such as sulfur dioxide (SO₂), hydrogen sulfide (H₂S), and carbon dioxide (CO₂). Indicates active magmatic or hydrothermal system below.',
                        example: 'Yellowstone has thousands of fumaroles; sulfurous gases (H₂S) give hot spring areas their "rotten egg" smell. Solfatara at Campi Flegrei is a famous fumarole field.',
                        relatedTerms: ['Solfatara', 'Hot Spring', 'Geyser', 'Volcanic Gases', 'Hydrothermal']
                    },
                    {
                        term: 'Stratovolcano (Composite Volcano)',
                        pronunciation: '(STRAT-oh-vol-kay-no)',
                        definition: 'A tall, steep, conical volcano built from alternating layers (strata) of lava flows, volcanic ash, and pyroclastic deposits. The most dangerous type, responsible for most volcanic disasters.',
                        example: 'Mount Fuji (Japan), Mount Rainier (USA), and Mount Pinatubo (Philippines) are classic stratovolcanoes formed at subduction zones.',
                        relatedTerms: ['Composite Volcano', 'Subduction Zone', 'Andesitic Magma', 'Explosive Eruption']
                    },
                    {
                        term: 'Shield Volcano',
                        pronunciation: '(sheeld vol-KAY-no)',
                        definition: 'A broad volcano with gentle slopes (2-10°) built almost entirely from fluid basaltic lava flows. Named for resemblance to a warrior\'s shield lying on ground. The largest volcanoes by volume.',
                        example: 'Mauna Loa (Hawaii) is Earth\'s largest active volcano with volume of 75,000 km³. From seafloor base to summit, it rises 9,170m - taller than Everest.',
                        relatedTerms: ['Basalt', 'Hotspot', 'Hawaiian Eruption', 'Effusive']
                    },
                    {
                        term: 'Phreatic Eruption',
                        pronunciation: '(free-AT-ik)',
                        definition: 'A steam-driven explosion that occurs when water (groundwater, lake, sea) is heated by magma or hot rock, generating steam that blasts out fragmented country rock. No fresh magma is ejected.',
                        example: 'Mt. Ontake (Japan) 2014: phreatic eruption killed 63 hikers with virtually no warning - only steam and rock fragments, no magma.',
                        relatedTerms: ['Steam Explosion', 'Phreatomagmatic', 'Hydrothermal Explosion']
                    },
                    {
                        term: 'Viscosity',
                        pronunciation: '(vis-KOS-ih-tee)',
                        definition: 'A measure of a fluid\'s resistance to flow. In magma, viscosity is controlled primarily by silica content, temperature, and crystal content. High-silica magma is viscous; low-silica magma is fluid.',
                        example: 'Basaltic magma (50% silica) flows like motor oil; rhyolitic magma (75% silica) is 1 million times more viscous, flowing like cold toothpaste. This controls eruption style.',
                        relatedTerms: ['Silica Content', 'Magma Composition', 'Eruption Style']
                    },
                    {
                        term: 'Volcanic Arc',
                        pronunciation: '(vol-KAN-ik ark)',
                        definition: 'A chain of volcanoes formed above a subducting oceanic plate, arranged in an arc parallel to the oceanic trench. Results from partial melting in mantle wedge above descending plate.',
                        example: 'The Indonesian archipelago (130+ active volcanoes), Japanese islands, Aleutian Islands, and Andes are volcanic arcs formed by subduction.',
                        relatedTerms: ['Island Arc', 'Subduction Zone', 'Ring of Fire', 'Andesite']
                    },
                    {
                        term: 'Volcanic Winter',
                        pronunciation: '(vol-KAN-ik WIN-ter)',
                        definition: 'A period of global cooling caused by large volcanic eruptions that inject massive amounts of sulfur dioxide (SO₂) into the stratosphere, forming sulfate aerosols that reflect incoming sunlight.',
                        example: 'Tambora 1815 (VEI 7) caused "Year Without Summer" 1816: global cooling of 0.4-0.7°C, June snow in New England, crop failures, famine in Europe.',
                        relatedTerms: ['Sulfate Aerosols', 'Climate Impact', 'Tambora', 'Toba', 'Stratosphere']
                    },
                    {
                        term: 'Subduction',
                        pronunciation: '(sub-DUCK-shun)',
                        definition: 'The process where one tectonic plate slides beneath another at a convergent boundary, descending into the mantle. The subducting plate releases water that triggers magma generation in overlying mantle.',
                        example: 'The Pacific Plate subducts under the Philippine Sea Plate at 8-10 cm/year, creating Japan\'s volcanic arc including Mt. Fuji.',
                        relatedTerms: ['Convergent Boundary', 'Volcanic Arc', 'Trench', 'Flux Melting']
                    },
                    {
                        term: 'Ignimbrite',
                        pronunciation: '(IG-nim-brite)',
                        definition: 'A volcanic rock formed from the deposits of pyroclastic flows. Composed of pumice, ash, and rock fragments that were hot enough to weld together upon deposition.',
                        example: 'The Bishop Tuff ignimbrite near Long Valley Caldera covers 1,500 km² and is up to 200m thick - deposited by pyroclastic flows from a VEI 7 eruption 767,000 years ago.',
                        relatedTerms: ['Pyroclastic Flow', 'Welded Tuff', 'Caldera']
                    },
                    {
                        term: 'Vog',
                        pronunciation: '(VOG)',
                        definition: 'Volcanic smog created when volcanic gases (primarily SO₂) react with oxygen, moisture, and sunlight to form sulfate aerosols and sulfuric acid droplets. Causes respiratory problems and crop damage.',
                        example: 'Kilauea\'s 2018 eruption released 50,000+ tons/day of SO₂, creating vog that blanketed Hawaii Island and drifted to other islands, triggering health advisories.',
                        relatedTerms: ['Volcanic Gases', 'SO₂', 'Sulfate Aerosols', 'Air Quality']
                    },
                    {
                        term: 'Laze',
                        pronunciation: '(LAYZ)',
                        definition: 'Lava haze created when hot lava enters the ocean, producing a white plume of hydrochloric acid mist, steam, and tiny glass particles. Extremely corrosive and dangerous to breathe.',
                        example: 'When lava from Kilauea\'s 2018 eruption entered the ocean at Kapoho, laze plumes forced evacuations. The acid can corrode metal and damage lungs.',
                        relatedTerms: ['Lava Ocean Entry', 'Hydrochloric Acid', 'Hawaii']
                    },
                    {
                        term: 'Pahoehoe',
                        pronunciation: '(pah-HOY-hoy)',
                        definition: 'Hawaiian term for basaltic lava with a smooth, billowy, or ropy surface texture. Forms when fluid lava flows slowly, allowing surface to cool and wrinkle while interior continues flowing.',
                        example: 'Pahoehoe flows at Kilauea create beautiful ropy textures that look like coiled rope. It often forms lava tubes that transport lava tens of kilometers.',
                        relatedTerms: ['Aa', 'Basalt', 'Lava Flow', 'Lava Tube', 'Hawaiian']
                    },
                    {
                        term: 'Aa',
                        pronunciation: '(AH-ah)',
                        definition: 'Hawaiian term for basaltic lava with a rough, jagged, clinkery surface texture. Forms when lava flows faster, cools more rapidly, or has higher viscosity, causing the surface to break into sharp blocks.',
                        example: 'Aa flows are extremely difficult to walk on - the sharp, glassy edges can shred boots and skin. Same magma can form pahoehoe or aa depending on flow conditions.',
                        relatedTerms: ['Pahoehoe', 'Basalt', 'Lava Flow', 'Clinker']
                    },
                    {
                        term: 'Supervolcano',
                        pronunciation: '(SOO-per-vol-kay-no)',
                        definition: 'A volcanic system capable of producing a VEI 8 eruption (>1,000 km³ of tephra). These catastrophic eruptions cause global volcanic winter, mass extinction potential, and civilization-level disruption.',
                        example: 'Yellowstone, Toba (Indonesia), and Taupo (New Zealand) are supervolcanoes. Toba\'s eruption 74,000 years ago may have reduced human population to under 10,000 individuals.',
                        relatedTerms: ['Caldera', 'VEI 8', 'Volcanic Winter', 'Toba', 'Yellowstone']
                    },
                    {
                        term: 'Plinian Eruption',
                        pronunciation: '(PLIN-ee-un)',
                        definition: 'The most explosive volcanic eruption style, named after Pliny the Younger who described the 79 AD Vesuvius eruption. Characterized by sustained eruption columns 10-45 km high, massive pyroclastic flows, and widespread tephra fall.',
                        example: 'Vesuvius 79 AD (buried Pompeii), Pinatubo 1991, Mt. St. Helens 1980, and Tambora 1815 were Plinian eruptions with columns visible from hundreds of kilometers away.',
                        relatedTerms: ['Eruption Column', 'Pyroclastic Flow', 'VEI 4-6', 'Vesuvius']
                    }
                ]
            },

            interactiveElements: {
                volcanoAnimation: {
                    type: 'animation',
                    description: 'Interactive 3D animation showing magma generation, rise, and eruption at different tectonic settings',
                    file: 'assets/volcano-formation-animation.mp4',
                    duration: '4 minutes',
                    features: [
                        'Tectonic setting selector (subduction, divergent, hotspot)',
                        'Cross-section view with depth scale',
                        'Eruption style demonstration (effusive vs explosive)',
                        'VEI scale comparison with example eruptions',
                        'Magma viscosity visualization',
                        'Plate movement animation'
                    ]
                },

                quiz: {
                    type: 'quiz',
                    title: '🧠 Test Your Knowledge: Volcanoes',
                    questions: [
                        {
                            question: 'What determines whether a volcanic eruption will be explosive or effusive (gentle)?',
                            options: [
                                'The size of the volcano only',
                                'Magma viscosity (controlled by silica content) and gas content',
                                'Distance from the ocean',
                                'Time of year and weather conditions'
                            ],
                            correct: 1,
                            explanation: 'Eruption style is controlled by magma viscosity (determined by silica content) and gas content. High-silica magma is viscous and traps gases, leading to explosive eruptions when pressure is released. Low-silica magma is fluid and allows gases to escape easily, resulting in effusive lava flows. This is why Hawaiian volcanoes (basaltic, low silica) have gentle eruptions while Indonesian volcanoes (andesitic, high silica) are explosive.'
                        },
                        {
                            question: 'What percentage of the world\'s active volcanoes are located in the Pacific Ring of Fire?',
                            options: [
                                '25%',
                                '50%',
                                '75%',
                                '95%'
                            ],
                            correct: 2,
                            explanation: 'Approximately 75% of the world\'s active volcanoes (about 452) are located in the Pacific Ring of Fire. This 40,000 km horseshoe-shaped zone marks the boundaries of the Pacific Plate, where oceanic crust subducts beneath surrounding plates. The Ring of Fire also experiences 90% of the world\'s earthquakes.'
                        },
                        {
                            question: 'What is the most deadly volcanic hazard?',
                            options: [
                                'Lava flows',
                                'Volcanic ash fall',
                                'Pyroclastic flows',
                                'Volcanic gases'
                            ],
                            correct: 2,
                            explanation: 'Pyroclastic flows are the deadliest volcanic hazard. These fast-moving density currents of hot gas, ash, and rock travel at 100-700 km/h with temperatures up to 800°C. They killed everyone in Pompeii (79 AD), 29,000 in Martinique (1902), and many others throughout history. Unlike lava flows (which are slow), pyroclastic flows are impossible to outrun.'
                        },
                        {
                            question: 'What caused the "Year Without Summer" in 1816?',
                            options: [
                                'Solar minimum (reduced sun activity)',
                                'Mt. Tambora eruption (1815) ejecting sulfur into stratosphere',
                                'Krakatoa eruption',
                                'Beginning of an ice age'
                            ],
                            correct: 1,
                            explanation: 'The 1815 eruption of Mt. Tambora in Indonesia (VEI 7) was the largest in recorded history. It ejected ~100 km³ of material and massive amounts of sulfur dioxide into the stratosphere. This formed sulfate aerosols that reflected sunlight, cooling global temperatures by 0.4-0.7°C. The result was crop failures, famine, and June snowstorms in New England in 1816.'
                        },
                        {
                            question: 'What is the difference between a caldera and a crater?',
                            options: [
                                'They are the same thing',
                                'Craters are formed by explosion; calderas form by collapse after magma chamber empties',
                                'Calderas are underwater; craters are on land',
                                'Craters are larger than calderas'
                            ],
                            correct: 1,
                            explanation: 'Craters are relatively small (typically <1 km) bowl-shaped depressions at volcano summits formed by explosive excavation. Calderas are much larger (1-80+ km diameter) and form by collapse when a magma chamber rapidly empties during a major eruption - the roof rock loses support and subsides into the void. Yellowstone\'s caldera is 72×55 km.'
                        },
                        {
                            question: 'Why do volcanoes form at subduction zones?',
                            options: [
                                'Friction from plate collision directly melts rock',
                                'Water released from subducting plate lowers melting point of overlying mantle',
                                'The subducting plate is already molten',
                                'Earthquakes cause rock to melt'
                            ],
                            correct: 1,
                            explanation: 'As oceanic crust subducts, it carries water-rich sediments and hydrated minerals. At 100-150 km depth, increasing temperature releases this water into the overlying mantle wedge. Water drastically lowers the melting point of rock (a process called flux melting), causing partial melting and generating andesitic magma that rises to form volcanic arcs.'
                        },
                        {
                            question: 'What is a hotspot volcano, and how does it differ from subduction zone volcanoes?',
                            options: [
                                'Hotspots are hotter and only occur at plate boundaries',
                                'Hotspots are fed by mantle plumes and can occur within plates, away from boundaries',
                                'Hotspots always produce more explosive eruptions',
                                'There is no difference; all volcanoes form the same way'
                            ],
                            correct: 1,
                            explanation: 'Hotspot volcanoes are fed by mantle plumes - columns of abnormally hot rock rising from deep in the mantle. Unlike subduction volcanoes at plate boundaries, hotspots can occur in the middle of tectonic plates (intraplate volcanism). As plates move over stationary hotspots, chains of volcanoes form. Hawaii is the classic example: the Pacific Plate moves over the Hawaiian hotspot at 7 cm/year.'
                        },
                        {
                            question: 'What is India\'s only active volcano and where is it located?',
                            options: [
                                'Deccan Traps in Maharashtra',
                                'Barren Island in Andaman & Nicobar Islands',
                                'Dhinodhar Hills in Gujarat',
                                'Dhosi Hill in Haryana'
                            ],
                            correct: 1,
                            explanation: 'Barren Island in the Andaman Sea is India\'s only confirmed active volcano. It is a stratovolcano that has erupted numerous times since 1787, most recently in 2017-2021. Narcondam Island (also Andaman) is dormant. The Deccan Traps are ancient (66 million years old) flood basalts that are extinct, not active volcanoes.'
                        },
                        {
                            question: 'What type of volcano is the largest by volume on Earth?',
                            options: [
                                'Stratovolcano (composite volcano)',
                                'Shield volcano',
                                'Cinder cone',
                                'Lava dome'
                            ],
                            correct: 1,
                            explanation: 'Shield volcanoes are the largest volcanoes by volume. Mauna Loa in Hawaii has a volume of approximately 75,000 km³ and rises 9,170m from the seafloor (taller than Everest from base to peak). Shield volcanoes grow large because their fluid basaltic lava flows far before solidifying, building broad structures over hundreds of thousands of years.'
                        },
                        {
                            question: 'Which volcanic eruption in recorded history had the highest Volcanic Explosivity Index (VEI)?',
                            options: [
                                'Mt. St. Helens 1980 (VEI 5)',
                                'Krakatoa 1883 (VEI 6)',
                                'Tambora 1815 (VEI 7)',
                                'Pinatubo 1991 (VEI 6)'
                            ],
                            correct: 2,
                            explanation: 'The 1815 eruption of Mt. Tambora in Indonesia was VEI 7 - the largest in recorded human history. It ejected approximately 100 km³ of material, killed 71,000+ people directly and from famine, and caused global climate disruption. Pinatubo and Krakatoa were VEI 6; Mt. St. Helens was VEI 5. VEI 8 eruptions (Yellowstone, Toba) are prehistoric.'
                        },
                        {
                            question: 'What percentage of all volcanic eruptions occur underwater?',
                            options: [
                                '20%',
                                '50%',
                                '80%',
                                '95%'
                            ],
                            correct: 2,
                            explanation: 'Approximately 80% of all volcanic eruptions occur underwater, primarily along mid-ocean ridges where tectonic plates diverge. The Mid-Atlantic Ridge alone produces more volcanic material than all land volcanoes combined, constantly creating new oceanic crust. Most of these eruptions go unobserved by humans.'
                        },
                        {
                            question: 'What is a lahar and why is it dangerous?',
                            options: [
                                'A type of slow-moving lava flow',
                                'A volcanic mudflow that can travel 100+ km at speeds up to 60 km/h',
                                'A cloud of volcanic ash',
                                'An earthquake caused by volcanic activity'
                            ],
                            correct: 1,
                            explanation: 'A lahar is a volcanic mudflow - a rapidly flowing mixture of volcanic debris and water. Lahars can travel over 100 km at speeds of 20-60 km/h, following river valleys and burying everything in their path. They are triggered by eruptions melting glaciers, crater lake breaches, or heavy rain on ash deposits. The 1985 Nevado del Ruiz lahar killed 23,000 people in Armero, Colombia, 74 km from the volcano.'
                        }
                    ]
                },

                crossSection: {
                    type: 'interactive-diagram',
                    description: 'Detailed cross-section of Earth showing magma generation at different tectonic settings',
                    file: 'assets/volcano-cross-section.svg',
                    features: [
                        'Toggle subduction/divergent/hotspot views',
                        'Magma pathway highlighting',
                        'Depth scale (0-200 km)',
                        'Temperature gradient visualization',
                        'Plate movement arrows',
                        'Magma chamber zoom view',
                        'Clickable labels with definitions'
                    ]
                },

                VEIcomparison: {
                    type: 'interactive-chart',
                    description: 'Compare eruption sizes by VEI with famous examples',
                    file: 'assets/vei-comparison.js',
                    features: [
                        'Logarithmic volume visualization',
                        'Historical eruptions plotted on scale',
                        'Climate impact indicators',
                        'Death toll statistics',
                        'Click for eruption details'
                    ]
                },

                volcanoLocator: {
                    type: 'interactive-map',
                    description: 'Global map showing volcano locations, types, and activity status',
                    file: 'assets/volcano-world-map.js',
                    features: [
                        'Filter by volcano type',
                        'Filter by tectonic setting',
                        'Recent eruptions highlighted',
                        'Click for volcano details',
                        'Ring of Fire overlay',
                        'Plate boundary visualization',
                        'Population at risk data'
                    ]
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

            introduction: 'Earth has approximately 1,500 potentially active volcanoes on land, with about 500 having erupted in recorded history. Every year, 50-70 volcanoes erupt somewhere on Earth. From the gentle shield volcanoes of Hawaii to the explosive stratovolcanoes of the Ring of Fire, each tells a unique story of Earth\'s internal forces. An estimated 800 million people live within 100 km of an active volcano. Explore our complete database of volcanoes through the link below, or browse featured highlights representing different types, regions, tectonic settings, and historical significance.',

            linkToExisting: '../../volcanoes/volcanoes.html',

            filters: ['continent', 'type', 'status', 'VEI', 'tectonicSetting'],
            sortOptions: ['name-asc', 'height-desc', 'last-eruption', 'type', 'danger-level'],

            featuredVolcanoes: [
                {
                    name: 'Mount Fuji',
                    continent: 'Asia',
                    country: 'Japan',
                    type: 'Stratovolcano',
                    stats: 'Height: 3,776m | Last eruption: 1707 | Status: Active (dormant)',
                    VEI: '5 (1707 Hoei eruption)',
                    tectonicSetting: 'Triple plate junction (subduction)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
                    icon: '🗻',
                    funFact: 'UNESCO World Heritage Site and Japan\'s highest peak! Perfect symmetrical cone, sacred mountain.',
                    hazards: 'Pyroclastic flows, ash fall affecting Tokyo (35+ million people)',
                    keyStats: {
                        population_at_risk: '35+ million (Greater Tokyo)',
                        last_eruption: '1707 (Hoei eruption)',
                        eruption_frequency: 'Every 200-300 years historically',
                        monitoring: 'Extensive JMA seismic network'
                    }
                },
                {
                    name: 'Kilauea',
                    continent: 'North America',
                    country: 'USA (Hawaii)',
                    type: 'Shield Volcano',
                    stats: 'Height: 1,247m | Status: Active | Most recent: 2023',
                    VEI: '0-2 (effusive)',
                    tectonicSetting: 'Hawaiian hotspot (intraplate)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?kilauea+lava',
                    icon: '🔥',
                    funFact: 'One of Earth\'s most active volcanoes! Erupted continuously 1983-2018. Home to goddess Pele.',
                    hazards: 'Lava flows, volcanic gases (vog), laze at ocean entry',
                    keyStats: {
                        continuous_eruption: '1983-2018 (35 years)',
                        lava_output: '2-5 m³/second at peak',
                        new_land_created: '500+ acres since 1983',
                        monitoring: 'Hawaiian Volcano Observatory (HVO)'
                    }
                },
                {
                    name: 'Barren Island',
                    continent: 'Asia',
                    country: 'India (Andaman & Nicobar)',
                    type: 'Stratovolcano',
                    stats: 'Height: 354m | Status: Active | India\'s ONLY active volcano',
                    VEI: '2-3 (recent eruptions)',
                    tectonicSetting: 'Andaman subduction zone',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?barren+island+volcano',
                    icon: '🇮🇳',
                    funFact: 'India\'s only active volcano! Located in the Andaman Sea, part of the same subduction zone as Indonesia.',
                    hazards: 'Lava flows, ash emissions - limited impact (uninhabited)',
                    keyStats: {
                        first_recorded: '1787',
                        recent_activity: '2017-2021 (intermittent)',
                        island_diameter: '~3 km',
                        monitoring: 'Geological Survey of India (GSI)'
                    }
                },
                {
                    name: 'Mount Vesuvius',
                    continent: 'Europe',
                    country: 'Italy',
                    type: 'Stratovolcano (Somma-type)',
                    stats: 'Height: 1,281m | Last eruption: 1944 | Status: Active',
                    VEI: '5 (79 AD)',
                    tectonicSetting: 'African-Eurasian subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
                    icon: '🏛️',
                    funFact: 'Destroyed Pompeii in 79 AD! 3 million people now live in the danger zone.',
                    hazards: 'Pyroclastic flows, lahars, ash - extremely high risk',
                    keyStats: {
                        population_at_risk: '3+ million',
                        famous_eruption: '79 AD (Pompeii, Herculaneum)',
                        last_eruption: 'March 1944',
                        monitoring: 'Osservatorio Vesuviano (since 1841)'
                    }
                },
                {
                    name: 'Yellowstone Caldera',
                    continent: 'North America',
                    country: 'USA (Wyoming)',
                    type: 'Caldera (Supervolcano)',
                    stats: 'Size: 72×55 km | Last supereruption: 640,000 years ago | Status: Active',
                    VEI: '8 capable (supervolcano)',
                    tectonicSetting: 'Yellowstone hotspot (intraplate)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?yellowstone+geyser',
                    icon: '💨',
                    funFact: 'One of Earth\'s largest active volcanic systems! Powers 10,000+ geysers and hot springs.',
                    hazards: 'Supereruption potential (global catastrophe), geothermal hazards',
                    keyStats: {
                        caldera_dimensions: '72 × 55 km',
                        thermal_features: '10,000+',
                        earthquakes_per_year: '1,500-3,000',
                        monitoring: 'Yellowstone Volcano Observatory (YVO)'
                    }
                },
                {
                    name: 'Mount Etna',
                    continent: 'Europe',
                    country: 'Italy (Sicily)',
                    type: 'Stratovolcano',
                    stats: 'Height: 3,357m | Status: Very active | Europe\'s most active',
                    VEI: '1-3 (typical)',
                    tectonicSetting: 'Complex (subduction + extension)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?mount+etna+eruption',
                    icon: '🌋',
                    funFact: 'Erupting for 500,000 years! UNESCO World Heritage. Erupts almost continuously.',
                    hazards: 'Lava flows, ash fall, aviation disruption',
                    keyStats: {
                        age: '500,000 years',
                        documented_eruptions: '2,700+ years',
                        summit_craters: '4 main + 300+ vents',
                        monitoring: 'INGV Osservatorio Etneo'
                    }
                },
                {
                    name: 'Krakatoa (Anak Krakatau)',
                    continent: 'Asia',
                    country: 'Indonesia',
                    type: 'Caldera/Stratovolcano',
                    stats: 'Height: 338m (growing) | 1883 VEI 6 | Status: Active',
                    VEI: '6 (1883)',
                    tectonicSetting: 'Sunda Arc subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?krakatoa+eruption',
                    icon: '💥',
                    funFact: '1883 eruption heard 4,800 km away - loudest sound in recorded history! Generated 40m tsunamis.',
                    hazards: 'Tsunamis (2018 collapse killed 437), pyroclastic flows',
                    keyStats: {
                        '1883_deaths': '36,000+ (mostly tsunami)',
                        '2018_tsunami_deaths': '437',
                        'anak_emerged': '1927 (Child of Krakatoa)',
                        'monitoring': 'BMKG Indonesia'
                    }
                },
                {
                    name: 'Mount Pinatubo',
                    continent: 'Asia',
                    country: 'Philippines',
                    type: 'Stratovolcano',
                    stats: 'Height: 1,486m | 1991 eruption: VEI 6 | Status: Active',
                    VEI: '6 (1991)',
                    tectonicSetting: 'Philippine subduction zone',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?pinatubo+crater',
                    icon: '☁️',
                    funFact: '1991 eruption cooled Earth 0.5°C for 2 years! Successful evacuation saved 20,000 lives.',
                    hazards: 'Lahars (ongoing for years), pyroclastic flows, climate effects',
                    keyStats: {
                        eruption_volume: '10 km³ ejected',
                        global_cooling: '0.5°C for 2 years',
                        lives_saved: '5,000-20,000 (evacuation)',
                        dormancy_before: '500+ years'
                    }
                },
                {
                    name: 'Mauna Loa',
                    continent: 'North America',
                    country: 'USA (Hawaii)',
                    type: 'Shield Volcano',
                    stats: 'Height: 4,169m (9,170m from seafloor) | Last eruption: 2022 | Status: Active',
                    VEI: '0-1 (effusive)',
                    tectonicSetting: 'Hawaiian hotspot',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?mauna+loa',
                    icon: '🛡️',
                    funFact: 'Earth\'s largest active volcano! Volume 75,000 km³. Base-to-peak taller than Everest.',
                    hazards: 'Fast-moving lava flows threatening Hilo (45,000 people)',
                    keyStats: {
                        volume: '75,000 km³',
                        base_to_summit: '9,170m (taller than Everest)',
                        eruption_frequency: 'Every 6 years average',
                        last_eruption: 'November-December 2022'
                    }
                },
                {
                    name: 'Mount Merapi',
                    continent: 'Asia',
                    country: 'Indonesia (Java)',
                    type: 'Stratovolcano',
                    stats: 'Height: 2,930m | Status: Very active | Last major: 2010',
                    VEI: '4 (2010 eruption)',
                    tectonicSetting: 'Sunda Arc subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?mount+merapi',
                    icon: '⚠️',
                    funFact: 'Indonesia\'s most active volcano! 1+ million people live on its slopes despite extreme danger.',
                    hazards: 'Pyroclastic flows from dome collapse, lahars',
                    keyStats: {
                        population_on_slopes: '1+ million',
                        eruption_frequency: 'Every 2-5 years',
                        '2010_deaths': '350+',
                        monitoring: 'BPPTKG 24/7'
                    }
                },
                {
                    name: 'Tambora',
                    continent: 'Asia',
                    country: 'Indonesia (Sumbawa)',
                    type: 'Stratovolcano',
                    stats: 'Height: 2,850m (was 4,300m) | 1815: VEI 7 | Status: Active',
                    VEI: '7 (1815 - largest recorded)',
                    tectonicSetting: 'Sunda Arc subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?tambora+volcano',
                    icon: '❄️',
                    funFact: 'Largest eruption in recorded history! Caused "Year Without Summer" 1816 - global famine.',
                    hazards: 'Historical example of global climate disruption potential',
                    keyStats: {
                        '1815_volume': '100+ km³ ejected',
                        '1815_deaths': '71,000+ (eruption + famine)',
                        height_lost: '1,450m (mountain collapsed)',
                        global_cooling: '0.4-0.7°C worldwide'
                    }
                },
                {
                    name: 'Mount St. Helens',
                    continent: 'North America',
                    country: 'USA (Washington)',
                    type: 'Stratovolcano',
                    stats: 'Height: 2,549m (was 2,950m) | Last eruption: 2008 | Status: Active',
                    VEI: '5 (1980)',
                    tectonicSetting: 'Cascadia subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?mount+st+helens',
                    icon: '💨',
                    funFact: '1980 lateral blast was deadliest US eruption! Lost 400m of summit. Best-studied eruption.',
                    hazards: 'Lateral blasts, pyroclastic flows, lahars, dome collapse',
                    keyStats: {
                        '1980_deaths': '57',
                        summit_loss: '400m (lateral collapse)',
                        blast_zone: '600 km² devastated',
                        monitoring: 'Cascades Volcano Observatory'
                    }
                },
                {
                    name: 'Eyjafjallajökull',
                    continent: 'Europe',
                    country: 'Iceland',
                    type: 'Stratovolcano (ice-capped)',
                    stats: 'Height: 1,651m | 2010 eruption: VEI 4 | Status: Active',
                    VEI: '4 (2010)',
                    tectonicSetting: 'Mid-Atlantic Ridge + hotspot',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?eyjafjallajokull',
                    icon: '✈️',
                    funFact: '2010 eruption disrupted global aviation for weeks! 100,000 flights cancelled, 10 million affected.',
                    hazards: 'Aviation disruption (fine ash), flooding from glacier melt',
                    keyStats: {
                        flights_cancelled: '100,000+',
                        passengers_affected: '10 million',
                        economic_loss: '$5+ billion',
                        ash_plume_height: '9 km'
                    }
                },
                {
                    name: 'Toba',
                    continent: 'Asia',
                    country: 'Indonesia (Sumatra)',
                    type: 'Supervolcano/Caldera',
                    stats: 'Size: 100×30 km | Last supereruption: 74,000 years ago | Status: Resurgent',
                    VEI: '8 (74,000 BP - largest in 2 million years)',
                    tectonicSetting: 'Sunda Arc subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?lake+toba',
                    icon: '🌡️',
                    funFact: 'Nearly caused human extinction! Population may have dropped to 3,000-10,000 individuals.',
                    hazards: 'Supervolcanic potential - global catastrophic effects',
                    keyStats: {
                        eruption_volume: '2,800 km³',
                        caldera_size: '100 × 30 km',
                        volcanic_winter: '6-10 years',
                        human_bottleneck: 'Genetic evidence supports population crash'
                    }
                },
                {
                    name: 'Santorini (Thera)',
                    continent: 'Europe',
                    country: 'Greece',
                    type: 'Caldera',
                    stats: 'Size: 12×7 km | Minoan eruption: ~1600 BC | Status: Active',
                    VEI: '7 (Minoan eruption)',
                    tectonicSetting: 'Hellenic subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?santorini+caldera',
                    icon: '🏛️',
                    funFact: 'May have inspired Atlantis legend! Ended Minoan civilization. Now top tourist destination.',
                    hazards: 'Tsunami, pyroclastic flows - caldera flooded',
                    keyStats: {
                        minoan_volume: '60+ km³',
                        tsunami_height: '~60m',
                        annual_tourists: '2+ million',
                        last_eruption: '1950 (Nea Kameni dome)'
                    }
                },
                {
                    name: 'Mount Rainier',
                    continent: 'North America',
                    country: 'USA (Washington)',
                    type: 'Stratovolcano',
                    stats: 'Height: 4,392m | Last eruption: 1894 | Status: Active',
                    VEI: '3-4 (historical)',
                    tectonicSetting: 'Cascadia subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?mount+rainier',
                    icon: '🏔️',
                    funFact: 'Most glaciated peak in contiguous USA! Lahars could reach Seattle in 1 hour.',
                    hazards: 'Lahars threatening 3.8 million in Seattle-Tacoma',
                    keyStats: {
                        glaciers: '26 named glaciers',
                        lahar_risk_population: '3.8 million',
                        lahar_warning_time: '30-45 minutes',
                        decade_volcano: 'Yes (highest priority globally)'
                    }
                },
                {
                    name: 'Popocatépetl',
                    continent: 'North America',
                    country: 'Mexico',
                    type: 'Stratovolcano',
                    stats: 'Height: 5,426m | Status: Active | Ongoing since 1994',
                    VEI: '2-3 (current)',
                    tectonicSetting: 'Cocos Plate subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?popocatepetl',
                    icon: '🌋',
                    funFact: '"Smoking Mountain" in Nahuatl. 25 million people within 100 km! Frequently closes Mexico City airport.',
                    hazards: 'Pyroclastic flows, lahars, ash affecting Mexico City',
                    keyStats: {
                        population_at_risk: '25 million',
                        activity_since: '1994 (ongoing)',
                        airport_closures: 'Frequent (Mexico City)',
                        elevation_rank: '2nd highest in Mexico'
                    }
                },
                {
                    name: 'Cotopaxi',
                    continent: 'South America',
                    country: 'Ecuador',
                    type: 'Stratovolcano',
                    stats: 'Height: 5,897m | Last eruption: 2015 | Status: Active',
                    VEI: '4 (historical)',
                    tectonicSetting: 'Nazca Plate subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?cotopaxi',
                    icon: '❄️',
                    funFact: 'One of world\'s highest active volcanoes! Perfect cone with permanent ice cap.',
                    hazards: 'Lahars from ice melt - could reach Quito (capital)',
                    keyStats: {
                        ice_cap: 'Above 5,000m (shrinking)',
                        eruptions_since_1738: '50+',
                        distance_to_quito: '50 km',
                        lahar_reach: '100+ km historically'
                    }
                },
                {
                    name: 'Campi Flegrei',
                    continent: 'Europe',
                    country: 'Italy',
                    type: 'Caldera (Supervolcano)',
                    stats: 'Size: 13 km diameter | Last eruption: 1538 | Status: Restless',
                    VEI: '7 capable',
                    tectonicSetting: 'African-Eurasian subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?pozzuoli+italy',
                    icon: '⚠️',
                    funFact: '360,000 people live INSIDE this supervolcano! Ground rising 3.5m since 1950s (bradyseism).',
                    hazards: 'Supereruption potential - higher risk than Vesuvius',
                    keyStats: {
                        population_inside: '360,000',
                        ground_uplift: '3.5m since 1950s',
                        craters: '24',
                        monitoring: 'INGV continuous'
                    }
                },
                {
                    name: 'Nyiragongo',
                    continent: 'Africa',
                    country: 'DR Congo',
                    type: 'Stratovolcano',
                    stats: 'Height: 3,470m | Status: Active | Persistent lava lake',
                    VEI: '1-2 (effusive but deadly)',
                    tectonicSetting: 'East African Rift',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?nyiragongo+lava+lake',
                    icon: '🔴',
                    funFact: 'World\'s largest lava lake! Extremely fluid lava flows at 100 km/h.',
                    hazards: 'Fast lava flows, lava lake overflow, gas emissions',
                    keyStats: {
                        lava_lake_diameter: '200m+',
                        lava_flow_speed: 'Up to 100 km/h',
                        goma_population: '2 million at risk',
                        '2002_displacement': '400,000 people'
                    }
                },
                {
                    name: 'Stromboli',
                    continent: 'Europe',
                    country: 'Italy',
                    type: 'Stratovolcano',
                    stats: 'Height: 924m | Status: Active | Continuous for 2,000+ years',
                    VEI: '1-2 (Strombolian)',
                    tectonicSetting: 'Tyrrhenian subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?stromboli+eruption',
                    icon: '💫',
                    funFact: '"Lighthouse of the Mediterranean" - erupting every 10-20 minutes for 2,000+ years!',
                    hazards: 'Volcanic bombs, occasional larger explosions',
                    keyStats: {
                        continuous_activity: '2,000+ years',
                        explosion_frequency: 'Every 10-20 minutes',
                        residents: '~500 people',
                        tourism: 'Night hikes to view eruptions'
                    }
                },
                {
                    name: 'Hunga Tonga-Hunga Ha\'apai',
                    continent: 'Oceania',
                    country: 'Tonga',
                    type: 'Submarine/Caldera',
                    stats: 'Mostly submarine | January 2022: VEI 5-6 | Status: Active',
                    VEI: '5-6 (2022)',
                    tectonicSetting: 'Tonga-Kermadec subduction',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?tonga+eruption',
                    icon: '🌊',
                    funFact: 'January 2022 eruption was largest since Pinatubo! Shockwave circled Earth 4 times.',
                    hazards: 'Tsunami, atmospheric shockwaves, ashfall',
                    keyStats: {
                        eruption_plume: '58 km (highest ever recorded)',
                        tsunami: 'Pacific-wide',
                        shockwave: 'Circled Earth 4 times',
                        water_vapor: '146 Tg injected into stratosphere'
                    }
                },
                {
                    name: 'Fagradalsfjall / Sundhnúkur',
                    continent: 'Europe',
                    country: 'Iceland',
                    type: 'Fissure/Shield',
                    stats: 'Variable fissures | Eruptions: 2021-2024 | Status: Active',
                    VEI: '0-1 (effusive)',
                    tectonicSetting: 'Mid-Atlantic Ridge (Reykjanes)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?fagradalsfjall+eruption',
                    icon: '🇮🇸',
                    funFact: 'First Reykjanes eruption in 800 years! Accessible lava viewing created tourism boom.',
                    hazards: 'Lava flows threatening Grindavík town, power plant',
                    keyStats: {
                        eruptions_since_2021: '8+',
                        reykjanes_dormancy: '800 years',
                        grindavik_evacuated: '4,000 people (2023-2024)',
                        expected_duration: 'Decades (rifting episode)'
                    }
                },
                {
                    name: 'Deccan Traps',
                    continent: 'Asia',
                    country: 'India',
                    type: 'Flood Basalt Province (extinct)',
                    stats: 'Area: 500,000 km² | Age: 66 million years | Status: Extinct',
                    VEI: 'N/A (massive effusive over 1 million years)',
                    tectonicSetting: 'Réunion hotspot (ancient position)',
                    link: '../../volcanoes/volcanoes.html',
                    image: 'https://source.unsplash.com/800x600/?deccan+plateau',
                    icon: '🇮🇳',
                    funFact: 'One of largest volcanic features on Earth! Contributed to dinosaur extinction. Created Western Ghats.',
                    hazards: 'None (extinct) - but demonstrates volcanic scale',
                    keyStats: {
                        original_area: '1.5 million km²',
                        current_area: '500,000 km²',
                        volume: '1+ million km³',
                        age: '66 million years (K-Pg boundary)'
                    }
                }
            ],

            upscRelevance: {
                title: '🎯 UPSC Civil Services Exam Importance',
                introduction: 'Volcanoes are critically important for UPSC CSE across Prelims (Geography, Environment, Disaster Management) and Mains (GS-I Physical Geography, GS-III Environment & Disaster Management). Understanding volcanic processes, global distribution, and their impacts is essential for both prelims factual questions and mains analytical answers.',

                topics: [
                    '**Volcanic Distribution:** Ring of Fire, Mid-Atlantic Ridge, East African Rift, Indian volcanoes (Barren Island, Narcondam, Deccan Traps)',
                    '**Types of Volcanoes:** Shield, Composite/Stratovolcano, Cinder Cone, Caldera - formation, characteristics, examples with diagrams',
                    '**Tectonic Settings:** Convergent boundaries (subduction), divergent boundaries (rifts), hotspots - mechanism of magma generation',
                    '**Volcanic Hazards:** Pyroclastic flows, lahars, ash fall, volcanic gases, tsunamis - characteristics and mitigation',
                    '**Volcanic Landforms:** Crater, caldera, lava plateau, volcanic islands, geysers, hot springs, volcanic lakes',
                    '**India-Specific:** Barren Island (only active), Narcondam (dormant), Deccan Traps (flood basalts), Dhinodhar Hills, Dhosi Hill',
                    '**Climate Impact:** Volcanic winter, sulfate aerosols, 1815 Tambora "Year Without Summer", VEI scale',
                    '**Volcanic Rocks & Minerals:** Basalt, andesite, rhyolite, pumice, obsidian - formation and economic importance',
                    '**Disaster Management:** Early warning systems, evacuation protocols, monitoring technology, NDMA guidelines',
                    '**Geothermal Energy:** Volcanic regions as renewable energy source (Iceland, Philippines, Kenya)',
                    '**Volcanic Soils:** Andisols - formation, fertility, agricultural importance (Java, Sicily, Ethiopia)',
                    '**Recent Events:** Hunga Tonga 2022, Iceland 2021-24, La Palma 2021 - current affairs linkages'
                ],

                sampleQuestions: [
                    {
                        type: 'Mains',
                        year: '2021',
                        marks: 15,
                        question: 'Differentiate between the formation of Himalayas and Deccan Traps. How do volcanic activities influence global climate?',
                        approach: 'Structure: (1) Himalayas formation - fold mountains, India-Eurasia collision, convergent boundary, 50 MY ongoing, sedimentary-metamorphic rocks. (2) Deccan Traps - flood basalts, Réunion hotspot, 66 MYA, fissure eruptions, 1+ million km³. (3) Climate impact - SO₂ → sulfate aerosols → short-term cooling (Pinatubo 0.5°C, 2 years); volcanic winter (Tambora "Year Without Summer"); CO₂ → long-term warming (minor vs anthropogenic). Include diagram.'
                    },
                    {
                        type: 'Mains',
                        year: '2019',
                        marks: 10,
                        question: 'What is the Ring of Fire? Explain its geological significance and why most earthquakes and volcanoes occur along it.',
                        approach: 'Define Ring of Fire: 40,000 km around Pacific, 75% volcanoes, 90% earthquakes. Explain subduction zones - oceanic plates diving under continental/oceanic plates at convergent boundaries. Water release → flux melting → volcanic arcs. Cite examples: Japan, Indonesia, Philippines, Chile, Cascades. Mention Indian context: Andaman-Sumatra subduction extends Ring of Fire. Include map sketch.'
                    },
                    {
                        type: 'Mains',
                        year: '2020',
                        marks: 15,
                        question: 'Discuss the various types of volcanoes based on their shape and mode of eruption. Give suitable examples from around the world.',
                        approach: 'Four main types with diagrams: (1) Shield - gentle slopes, basaltic, effusive, hotspots (Mauna Loa). (2) Stratovolcano - steep, andesitic, explosive, subduction (Fuji, Vesuvius). (3) Cinder Cone - small, strombolian (Parícutin). (4) Caldera - collapse, rhyolitic, supervolcanic (Yellowstone). Link magma viscosity (silica) → eruption style. Indian example: Barren Island (stratovolcano).'
                    },
                    {
                        type: 'Prelims',
                        year: '2018',
                        question: 'Consider the following statements:\n1. Barren Island is India\'s only active volcano\n2. It is located in the Bay of Bengal\n3. Narcondam is an extinct volcano\n\nWhich statements are correct?',
                        answer: '1 only. Statement 1: CORRECT - Barren Island is India\'s only active volcano. Statement 2: INCORRECT - located in Andaman Sea, not Bay of Bengal (common trap). Statement 3: INCORRECT - Narcondam is DORMANT, not extinct.'
                    },
                    {
                        type: 'Prelims',
                        year: '2017',
                        question: 'Which of the following volcanic eruptions recorded the highest Volcanic Explosivity Index (VEI) in recorded history?',
                        options: ['Mt. St. Helens 1980', 'Krakatoa 1883', 'Tambora 1815', 'Pinatubo 1991'],
                        answer: 'Tambora 1815 (VEI 7). Pinatubo 1991 (VEI 6), Krakatoa 1883 (VEI 6), Mt. St. Helens 1980 (VEI 5). Tambora is largest eruption in recorded human history.'
                    },
                    {
                        type: 'Mains',
                        year: '2022',
                        marks: 15,
                        question: 'What are the major volcanic hazards? Discuss the disaster preparedness measures for volcanic eruptions with reference to Andaman & Nicobar Islands.',
                        approach: 'Hazards: (1) Pyroclastic flows - deadliest, 800°C, 700 km/h. (2) Lahars - volcanic mudflows, 100+ km range. (3) Ash fall - roof collapse, aviation, respiratory. (4) Volcanic gases - SO₂, CO₂. (5) Tsunamis - coastal/submarine eruptions. (6) Lava flows. A&N context: Barren Island monitoring by GSI. Measures: seismic monitoring, gas sensors, satellite imagery, evacuation plans, NDMA guidelines, early warning systems, exclusion zones, public awareness. Cite Pinatubo as success story.'
                    },
                    {
                        type: 'Mains',
                        year: '2023',
                        marks: 15,
                        question: 'Discuss the formation of hotspot volcanoes with the example of Hawaiian Islands. How do they differ from subduction zone volcanoes?',
                        approach: 'Hotspot formation: mantle plume (fixed, deep), plate moves over it → volcanic chain. Hawaii: Pacific Plate moves NW at 7 cm/year; Big Island (active) over hotspot, older islands (Maui→Kauai→Midway) progressively extinct. Comparison: (1) Location - intraplate vs plate boundary. (2) Magma - basaltic vs andesitic. (3) Eruption style - effusive vs explosive. (4) Volcano type - shield vs stratovolcano. (5) Hazards - lava flows vs pyroclastic. Include diagram of Hawaiian chain formation.'
                    },
                    {
                        type: 'Mains',
                        year: '2024 (Expected)',
                        marks: 15,
                        question: 'Explain the global climate impacts of major volcanic eruptions. Discuss with reference to recent volcanic events.',
                        approach: 'Climate mechanisms: (1) SO₂ → stratospheric sulfate aerosols → reflects sunlight → cooling. (2) Ash → short-term local effects. (3) CO₂ → minor long-term warming. Historical: Tambora 1815 (0.4-0.7°C cooling, Year Without Summer), Pinatubo 1991 (0.5°C, 2 years). Recent: Hunga Tonga 2022 - unprecedented water vapor injection (warming potential), minimal SO₂. Compare volcanic vs anthropogenic CO₂. Discuss temporary vs permanent effects.'
                    },
                    {
                        type: 'Prelims',
                        year: '2016',
                        question: 'The recent volcanic eruption of Barren Island is the result of:',
                        options: ['Pacific Plate subduction', 'Indo-Australian Plate subduction under Eurasian/Burma Plate', 'Divergent boundary activity', 'Hotspot volcanism'],
                        answer: 'Indo-Australian Plate subduction under Eurasian/Burma Plate. Barren Island is part of the Andaman volcanic arc, formed by subduction similar to Indonesian volcanoes (same subduction zone extends from Sumatra to Myanmar).'
                    },
                    {
                        type: 'Prelims',
                        year: '2020',
                        question: 'Consider the following pairs:\n1. Deccan Traps - Flood Basalt\n2. Himalayas - Fold Mountains\n3. Aravalli - Block Mountains\n4. Western Ghats - Volcanic Mountains\n\nWhich pairs are correctly matched?',
                        answer: '1 and 2 only. (1) Deccan Traps ARE flood basalts - CORRECT. (2) Himalayas ARE fold mountains - CORRECT. (3) Aravalli are ancient FOLD mountains, not block - INCORRECT. (4) Western Ghats are erosional ESCARPMENT of Deccan Plateau, not volcanic mountains per se - INCORRECT (technically the basalt is volcanic, but "Western Ghats" refers to the escarpment landform).'
                    }
                ],

                keyConceptsForExam: [
                    {
                        concept: 'Volcanic Distribution in India',
                        importance: 'Very High',
                        details: 'Barren Island (only active, Andaman Sea, stratovolcano, 354m, part of Andaman arc), Narcondam (dormant, 710m), Deccan Traps (66 MYA flood basalts, 500,000 km², Réunion hotspot), Dhinodhar Hills (extinct, Gujarat), Dhosi Hill (extinct, Haryana)',
                        examRelevance: 'Frequently asked in Prelims - location, status, formation, tectonic setting. Common trap: Bay of Bengal vs Andaman Sea.'
                    },
                    {
                        concept: 'Ring of Fire',
                        importance: 'Very High',
                        details: '40,000 km around Pacific, 75% volcanoes, 90% earthquakes, subduction zones. Countries: Japan, Philippines, Indonesia, Chile, Peru, USA (Cascades, Alaska). Pacific Plate boundaries. Andaman-Sumatra subduction is westward extension.',
                        examRelevance: 'Map questions, disaster management, tectonic context, current affairs (eruptions). Link to Indian Ocean region.'
                    },
                    {
                        concept: 'Volcanic Hazards & Disaster Management',
                        importance: 'High',
                        details: 'Primary: pyroclastic flows (deadliest), lava flows, ash fall, volcanic gases. Secondary: lahars, tsunamis. Monitoring: seismometers, GPS, gas sensors, satellites, drones. NDMA role. Early warning systems. Pinatubo 1991: successful evacuation saved 20,000.',
                        examRelevance: 'GS-III Disaster Management, case studies, current affairs. Contrast Pinatubo (success) vs Nevado del Ruiz (failure).'
                    },
                    {
                        concept: 'Deccan Traps & K-Pg Extinction',
                        importance: 'High',
                        details: '66 MYA flood basalts, Réunion hotspot origin when India over it. 500,000 km² (originally 1.5 million). Contributed to dinosaur extinction with Chicxulub asteroid. Western Ghats escarpment. Fertile black cotton soils (regur). Duration: ~1 million years of eruptions.',
                        examRelevance: 'India-specific geology, geological history, environmental impact, Western Ghats context, agriculture (regur soils).'
                    },
                    {
                        concept: 'Climate Impact of Volcanoes',
                        importance: 'Medium-High',
                        details: 'SO₂ → stratospheric sulfate aerosols → reflects sunlight → global cooling (1-3 years). Tambora 1815 → "Year Without Summer" 1816. Pinatubo 1991 → 0.5°C cooling, 2 years. Toba 74,000 BP → 6-10 year volcanic winter, near-extinction of humans.',
                        examRelevance: 'Climate change questions, environmental science, comparison with anthropogenic warming.'
                    },
                    {
                        concept: 'Types of Volcanoes',
                        importance: 'Very High',
                        details: 'Shield (gentle, basaltic, effusive - Mauna Loa), Stratovolcano (steep, andesitic, explosive - Fuji, Vesuvius), Cinder Cone (small, strombolian - Parícutin), Caldera (collapse, rhyolitic - Yellowstone). Magma viscosity (silica) → eruption style.',
                        examRelevance: 'Frequently asked to differentiate. Diagram-based questions. Link to plate tectonics.'
                    },
                    {
                        concept: 'Geothermal Energy',
                        importance: 'Medium',
                        details: 'Heat from cooling magma drives electricity generation. Iceland (25% electricity), Philippines (27%), Kenya (45%), New Zealand, USA (The Geysers). Renewable, baseload (24/7), low carbon. Puga Valley (Ladakh) potential in India.',
                        examRelevance: 'Energy security, renewable energy, geography of energy resources.'
                    },
                    {
                        concept: 'Volcanic Explosivity Index (VEI)',
                        importance: 'Medium',
                        details: 'Logarithmic scale 0-8. Each level 10× previous. VEI 5: St. Helens (1 km³). VEI 6: Pinatubo, Krakatoa (10 km³). VEI 7: Tambora (100 km³). VEI 8: Yellowstone, Toba (1,000 km³). Know examples for each level.',
                        examRelevance: 'Comparative questions, understanding eruption magnitude.'
                    }
                ],

                currentAffairsLinks: [
                    'Hunga Tonga-Hunga Ha\'apai January 2022 - largest since Pinatubo, Pacific-wide tsunami, atmospheric shockwave circled Earth, unprecedented water vapor injection into stratosphere',
                    'Iceland Reykjanes eruptions 2021-2024 - first in 800 years, Grindavík evacuations, ongoing rifting episode, accessible lava viewing',
                    'La Palma (Cumbre Vieja) September-December 2021 - 3 months activity, 3,000 buildings destroyed, lava reached ocean',
                    'Barren Island ongoing activity - India\'s only active volcano, monitored by GSI, intermittent eruptions 2017-2021',
                    'Taal Volcano (Philippines) 2020-2024 - phreatomagmatic eruptions, threat to Manila metropolitan area',
                    'Mauna Loa November-December 2022 - first eruption since 1984, lava approached Saddle Road',
                    'Mount Merapi ongoing - Indonesia\'s most active, dome growth and collapses, pyroclastic flow risk',
                    'White Island (Whakaari) New Zealand 2019 - tourist deaths highlight volcano tourism risks',
                    'Geothermal development in Puga Valley, Ladakh - India\'s geothermal potential',
                    'Climate effects of volcanic aerosols - comparison with geoengineering proposals'
                ],

                mapBasedQuestions: {
                    title: 'Important Locations to Mark on Map',
                    locations: [
                        'Ring of Fire (40,000 km arc around Pacific)',
                        'Mid-Atlantic Ridge (Iceland surface expression)',
                        'East African Rift (Kenya, Ethiopia, Tanzania)',
                        'Barren Island & Narcondam (Andaman Sea - NOT Bay of Bengal)',
                        'Deccan Traps extent (Western/Central India, 500,000 km²)',
                        'Major volcanoes: Vesuvius, Etna (Italy), Fuji (Japan), Krakatoa, Pinatubo, Yellowstone',
                        'Hawaiian Islands chain (NW-SE age progression)',
                        'Andaman-Sumatra subduction zone',
                        'Indonesian volcanic arc (Sumatra to Banda Sea)',
                        'Cascade Range (USA/Canada - subduction volcanoes)'
                    ],
                    tips: [
                        'Know plate boundaries associated with each volcano',
                        'Understand plate movement directions',
                        'Link volcano distribution to tectonic settings',
                        'Practice locating recent eruption sites',
                        'Distinguish Andaman Sea from Bay of Bengal (common error)'
                    ]
                },

                previousYearQuestions: [
                    {
                        year: '2013',
                        type: 'Prelims',
                        question: 'Which one of the following is an example of volcanic mountain?',
                        answer: 'Mt. Kilimanjaro (Africa\'s highest, dormant stratovolcano)'
                    },
                    {
                        year: '2014',
                        type: 'Prelims',
                        question: 'The Barren Island of Andaman and Nicobar Islands is an active volcanic area.',
                        answer: 'True - India\'s only active volcano'
                    },
                    {
                        year: '2015',
                        type: 'Mains',
                        question: 'Explain the formation and distribution of volcanoes across the world.',
                        marks: 15
                    },
                    {
                        year: '2017',
                        type: 'Mains',
                        question: 'Differentiate between the composition of magma in shield volcanoes and composite volcanoes.',
                        marks: 10
                    },
                    {
                        year: '2019',
                        type: 'Prelims',
                        question: 'Which of the following is not associated with Ring of Fire?',
                        answer: 'Mid-Atlantic Ridge (separate divergent boundary)'
                    }
                ],

                importantFacts: [
                    'India has only ONE active volcano: Barren Island (Andaman Sea)',
                    'Narcondam is DORMANT, not extinct (common misconception)',
                    'Deccan Traps: 66 million years old, flood basalts, NOT active',
                    '75% of world\'s volcanoes are in Ring of Fire',
                    '80% of volcanic eruptions occur underwater at mid-ocean ridges',
                    'Tambora 1815: largest historical eruption (VEI 7)',
                    'Toba 74,000 BP: nearly caused human extinction (VEI 8)',
                    'Pyroclastic flows are deadliest hazard (800°C, 700 km/h)',
                    'Pinatubo 1991: cooled Earth 0.5°C for 2 years',
                    'Shield volcanoes: largest by volume (Mauna Loa: 75,000 km³)',
                    'Stratovolcanoes: most dangerous (subduction zones)',
                    'Yellowstone: supervolcano, VEI 8 capable',
                    'Hunga Tonga 2022: 58 km eruption column (highest recorded)',
                    'Volcanic soil (andisol): among most fertile on Earth'
                ]
            }
        }
    }
};

// Export for use in concept-app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = volcanoesData;
}
        
