/**
 * VOLCANOES DATA FILE - Complete Version
 * Works with universal concept-app.js
 */

const volcanoesData = {
  meta: {
    name: 'Volcanoes',
    icon: '🌋',
    theme: 'volcanoes-theme',
    existingPagesLink: '../../volcanoes/volcanoes.html'
  },
  
  sections: {
    // =============================
    // SECTION 1: DEFINITION
    // =============================
    definition: {
      title: 'What is a Volcano?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600&q=90',
        tagline: 'Earth\'s most powerful natural force'
      },
      
      content: {
        introduction: 'A volcano is an opening in Earth\'s crust through which molten rock (magma), volcanic ash, and gases escape from below the surface. When magma reaches the surface, it\'s called lava. Volcanoes can build mountains, create new land, and dramatically reshape landscapes. They occur at tectonic plate boundaries and over mantle hotspots, with over 1,500 potentially active volcanoes worldwide.',
        
        keyPoints: [
          {
            icon: '🔥',
            label: 'Magma Chamber',
            text: 'Underground reservoir of molten rock',
            detail: 'Magma chambers form 1-10 km beneath the surface where temperatures exceed 700-1300°C. The chamber feeds eruptions and can be several cubic kilometers in volume.'
          },
          {
            icon: '⛰️',
            label: 'Volcanic Cone',
            text: 'Mountain built from erupted materials',
            detail: 'Repeated eruptions build up layers of lava, ash, and debris to form the characteristic cone shape. Some cones grow thousands of meters tall over millions of years.'
          },
          {
            icon: '💨',
            label: 'Crater',
            text: 'Bowl-shaped depression at the summit',
            detail: 'Craters form from explosive eruptions or collapse. They range from a few meters to over 1 km across. Calderas are giant craters formed when magma chambers empty and collapse.'
          },
          {
            icon: '🌊',
            label: 'Lava Flows',
            text: 'Rivers of molten rock on the surface',
            detail: 'Lava temperatures range from 700-1200°C. Basaltic lava flows quickly (up to 60 km/h), while viscous rhyolitic lava moves slowly and often plugs vents causing explosive eruptions.'
          },
          {
            icon: '💥',
            label: 'Pyroclastic Flows',
            text: 'Fast-moving clouds of hot gas and debris',
            detail: 'These deadly avalanches of superheated gas, ash, and rock travel at 100-700 km/h with temperatures up to 700°C. They\'re the most dangerous volcanic hazard.'
          },
          {
            icon: '🌍',
            label: 'Ring of Fire',
            text: '75% of world\'s volcanoes in Pacific rim',
            detail: 'The Ring of Fire is a 40,000 km horseshoe-shaped zone around the Pacific Ocean where most volcanic and seismic activity occurs due to subduction zones.'
          },
          {
            icon: '⚠️',
            label: 'Volcanic Hazards',
            text: 'Eruptions, lahars, ash fall, tsunamis',
            detail: 'Beyond lava and pyroclastic flows, volcanoes cause lahars (mudflows), ash clouds disrupting aviation, volcanic gases, landslides, and tsunamis from flank collapse.'
          },
          {
            icon: '🌱',
            label: 'Fertile Soils',
            text: 'Volcanic ash creates rich agricultural land',
            detail: 'Weathered volcanic materials release nutrients like potassium, phosphorus, and trace minerals. This is why densely populated areas exist near dangerous volcanoes.'
          }
        ],
        
        comparison: {
          title: 'Volcano Classification by Activity',
          features: [
            {
              feature: 'Active',
              mountain: 'Currently erupting or showing signs',
              hill: '~1,500 worldwide',
              plateau: 'Mt. Etna, Kilauea, Stromboli'
            },
            {
              feature: 'Dormant',
              mountain: 'Not currently active but could erupt',
              hill: 'No recent eruptions but not extinct',
              plateau: 'Mt. Fuji, Mt. Rainier, Vesuvius'
            },
            {
              feature: 'Extinct',
              mountain: 'No eruption expected',
              hill: 'No magma supply remaining',
              plateau: 'Edinburgh Castle Rock, Shiprock'
            }
          ]
        },
        
        funFacts: [
          '🌋 There are more than 1,500 potentially active volcanoes on Earth',
          '🔥 The word "volcano" comes from Vulcan, Roman god of fire',
          '🌊 About 80% of volcanic eruptions occur underwater',
          '⛰️ Olympus Mons on Mars is the largest volcano in the solar system (21.9 km high)',
          '💀 The 1815 Tambora eruption killed 92,000 people and caused "Year Without a Summer"',
          '🏝️ The Hawaiian Islands were entirely created by volcanic activity',
          '🌡️ Lava temperatures can reach 1,200°C (2,200°F)',
          '✈️ The 2010 Eyjafjallajökull eruption cancelled 100,000 flights',
          '🌍 Supervolcano eruptions occur roughly every 100,000 years',
          '💎 Volcanic activity creates diamonds, opals, and other gemstones',
          '🔬 Scientists monitor over 150 volcanoes using satellites',
          '🌋 Indonesia has the most active volcanoes (130+)'
        ]
      }
    },
    
    // =============================
    // SECTION 2: TYPES
    // =============================
    types: {
      title: 'Types of Volcanoes',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=1600&q=90',
        tagline: 'Different shapes formed by different eruption styles'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'shield',
          name: 'Shield Volcanoes',
          icon: '🛡️',
          color: '#FF6B35',
          
          definition: 'Shield volcanoes are broad, gently sloping mountains formed by the accumulation of fluid basaltic lava flows. They resemble a warrior\'s shield lying on the ground. These are the largest volcanoes on Earth by volume, built up over hundreds of thousands of years through countless non-explosive eruptions.',
          
          formation: {
            title: 'How Shield Volcanoes Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Hot, fluid basaltic magma rises from mantle hotspot or rift zone' },
              { step: 2, icon: '⬆️', text: 'Low-viscosity lava erupts gently at summit crater or flanks' },
              { step: 3, icon: '🌊', text: 'Fluid lava flows long distances before cooling (up to 50+ km)' },
              { step: 4, icon: '📚', text: 'Thousands of thin lava layers accumulate over time' },
              { step: 5, icon: '🛡️', text: 'Broad, dome-shaped profile develops with gentle 2-10° slopes' },
              { step: 6, icon: '⏳', text: 'Process continues for 500,000-1,000,000+ years building massive volcano' }
            ]
          },
          
          characteristics: [
            'Very broad base with gentle slopes (2-10°)',
            'Formed by highly fluid basaltic lava',
            'Non-explosive, effusive eruptions',
            'Summit calderas from magma chamber collapse',
            'Lava tubes can extend for kilometers',
            'Can reach enormous sizes (Mauna Loa: 75,000 km³)',
            'Often found over hotspots or rift zones',
            'Eruptions can continue for months or years'
          ],
          
          examples: [
            {
              name: 'Mauna Loa',
              location: 'Hawaii, USA',
              height: '4,169m above sea level (10,210m from ocean floor)',
              status: 'Active - last erupted 2022',
              image: 'https://images.unsplash.com/photo-1547483238-2cbf881a559f?w=800&q=80',
              link: '/encyclopedia/volcanoes/mauna-loa',
              notableFeatures: [
                'Largest volcano on Earth by volume (75,000 km³)',
                'Rises 10,210m from ocean floor to summit',
                'Part of Hawaiian hotspot chain',
                'Erupts every 6 years on average'
              ]
            },
            {
              name: 'Kilauea',
              location: 'Hawaii, USA',
              height: '1,247m',
              status: 'Active - one of most active volcanoes on Earth',
              image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=800&q=80',
              link: '/encyclopedia/volcanoes/kilauea',
              notableFeatures: [
                'Continuous eruption from 1983-2018 (35 years)',
                'Created 230 hectares of new land',
                'Halemaʻumaʻu crater has active lava lake',
                'Sacred to Hawaiian goddess Pele'
              ]
            },
            {
              name: 'Piton de la Fournaise',
              location: 'Réunion Island, Indian Ocean',
              height: '2,632m',
              status: 'Active - erupts 1-2 times per year',
              image: 'https://images.unsplash.com/photo-1591792111137-5b8219d5fad6?w=800&q=80',
              link: '/encyclopedia/volcanoes/piton-fournaise',
              notableFeatures: [
                'One of world\'s most active volcanoes',
                'UNESCO World Heritage Site',
                'Over 150 eruptions since 17th century',
                'Uninhabited volcanic enclosure'
              ]
            }
          ]
        },
        {
          id: 'stratovolcano',
          name: 'Stratovolcanoes (Composite)',
          icon: '🗻',
          color: '#D32F2F',
          
          definition: 'Stratovolcanoes, also called composite volcanoes, are tall, steep-sided mountains built from alternating layers of lava flows, volcanic ash, and pyroclastic materials. They produce the most violent and dangerous eruptions on Earth due to their viscous, gas-rich magma. Most famous volcanoes are stratovolcanoes.',
          
          formation: {
            title: 'How Stratovolcanoes Form',
            steps: [
              { step: 1, icon: '⬇️', text: 'Oceanic plate subducts beneath continental plate' },
              { step: 2, icon: '💧', text: 'Water released from subducting plate lowers mantle melting point' },
              { step: 3, icon: '🔥', text: 'Viscous andesitic/rhyolitic magma forms and rises' },
              { step: 4, icon: '💥', text: 'Gas-rich magma causes explosive eruptions ejecting ash and bombs' },
              { step: 5, icon: '🌊', text: 'Between explosions, thick lava flows down flanks' },
              { step: 6, icon: '📚', text: 'Alternating layers of ash and lava build steep cone' },
              { step: 7, icon: '⛰️', text: 'Classic conical shape develops over 10,000-100,000+ years' }
            ]
          },
          
          characteristics: [
            'Steep slopes (30-35°) near summit',
            'Symmetrical, conical shape',
            'Alternating layers of lava and pyroclastics',
            'Viscous, intermediate to felsic magma',
            'Explosive, dangerous eruptions',
            'Often have multiple vents and parasitic cones',
            'Associated with subduction zones',
            'Can grow to great heights (4,000-6,000m+)'
          ],
          
          examples: [
            {
              name: 'Mount Fuji',
              location: 'Japan',
              height: '3,776m',
              status: 'Active (dormant since 1707)',
              image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
              link: '/encyclopedia/volcanoes/fuji',
              notableFeatures: [
                'Japan\'s highest peak and national symbol',
                'Perfect symmetrical cone',
                'UNESCO World Heritage Site',
                'Last erupted in 1707 (Hoei eruption)'
              ]
            },
            {
              name: 'Mount Vesuvius',
              location: 'Italy',
              height: '1,281m',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
              link: '/encyclopedia/volcanoes/vesuvius',
              notableFeatures: [
                'Destroyed Pompeii and Herculaneum in 79 AD',
                'Only active volcano on European mainland',
                '3 million people live in danger zone',
                'One of world\'s most dangerous volcanoes'
              ]
            },
            {
              name: 'Mount St. Helens',
              location: 'Washington, USA',
              height: '2,549m (was 2,950m before 1980)',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
              link: '/encyclopedia/volcanoes/st-helens',
              notableFeatures: [
                '1980 eruption killed 57 people',
                'Lateral blast destroyed 600 km² of forest',
                'Reduced summit by 400m',
                'Most-studied volcanic eruption in history'
              ]
            },
            {
              name: 'Mount Rainier',
              location: 'Washington, USA',
              height: '4,392m',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
              link: '/encyclopedia/volcanoes/rainier',
              notableFeatures: [
                'Most glaciated peak in contiguous USA',
                'Extreme lahar hazard to Seattle-Tacoma',
                'One of 16 "Decade Volcanoes"',
                '26 major glaciers'
              ]
            },
            {
              name: 'Cotopaxi',
              location: 'Ecuador',
              height: '5,897m',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
              link: '/encyclopedia/volcanoes/cotopaxi',
              notableFeatures: [
                'One of highest active volcanoes',
                'Near-perfect symmetrical cone',
                'Permanent glacial cap',
                'Major lahar threat to Quito'
              ]
            }
          ]
        },
        {
          id: 'cinder',
          name: 'Cinder Cone Volcanoes',
          icon: '🔺',
          color: '#FF9800',
          
          definition: 'Cinder cones are the smallest and simplest type of volcano, built from ejected lava fragments (cinders, scoria) that accumulate around a single vent. They typically form during short-lived, moderately explosive eruptions and rarely exceed 300 meters in height.',
          
          formation: {
            title: 'How Cinder Cones Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Gas-rich basaltic magma rises through a vent' },
              { step: 2, icon: '💥', text: 'Explosive fountaining ejects lava fragments (cinders)' },
              { step: 3, icon: '⬇️', text: 'Cinders cool and fall around vent, building cone' },
              { step: 4, icon: '🔺', text: 'Steep-sided cone forms with bowl-shaped crater' },
              { step: 5, icon: '⏰', text: 'Most form in single eruption lasting days to months' }
            ]
          },
          
          characteristics: [
            'Small size (typically 30-300m high)',
            'Very steep slopes (30-40°)',
            'Bowl-shaped summit crater',
            'Built from loose pyroclastic material',
            'Usually form in single eruption',
            'Often occur on flanks of larger volcanoes',
            'Dark colored (basaltic composition)',
            'Little erosion resistance'
          ],
          
          examples: [
            {
              name: 'Parícutin',
              location: 'Mexico',
              height: '424m above original ground',
              status: 'Extinct (1943-1952)',
              image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80',
              link: '/encyclopedia/volcanoes/paricutin',
              notableFeatures: [
                'Born in a cornfield in 1943',
                'Only volcano witnessed from birth to extinction',
                'Grew to 336m in first year',
                'Buried two villages in lava'
              ]
            },
            {
              name: 'Sunset Crater',
              location: 'Arizona, USA',
              height: '340m',
              status: 'Extinct (last eruption ~1085 AD)',
              image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
              link: '/encyclopedia/volcanoes/sunset-crater',
              notableFeatures: [
                'Named for red and orange coloration',
                'National Monument since 1930',
                'Last volcanic activity in region',
                'Forced relocation of ancestral Puebloans'
              ]
            }
          ]
        },
        {
          id: 'caldera',
          name: 'Calderas (Supervolcanoes)',
          icon: '🕳️',
          color: '#9C27B0',
          
          definition: 'Calderas are massive volcanic craters (>1 km diameter) formed when a volcano\'s magma chamber empties during a catastrophic eruption, causing the overlying rock to collapse. Supervolcanoes can produce eruptions 1,000+ times larger than typical volcanoes, with global climate impacts.',
          
          formation: {
            title: 'How Calderas Form',
            steps: [
              { step: 1, icon: '🎈', text: 'Massive magma chamber (100s of km³) develops underground' },
              { step: 2, icon: '⬆️', text: 'Pressure builds over 100,000+ years as magma accumulates' },
              { step: 3, icon: '💥', text: 'Catastrophic eruption ejects enormous volume of magma' },
              { step: 4, icon: '⬇️', text: 'Emptied chamber cannot support overlying rock' },
              { step: 5, icon: '🕳️', text: 'Ground collapses into empty chamber forming caldera' },
              { step: 6, icon: '🔄', text: 'Process may repeat with resurgent dome formation' }
            ]
          },
          
          characteristics: [
            'Massive size (up to 80 km diameter)',
            'Formed by collapse, not explosion',
            'Can produce VEI 7-8 eruptions',
            'Often contain post-collapse volcanic features',
            'May form resurgent domes',
            'Can have hot springs and geysers',
            'Global climate impacts possible',
            'Very long dormancy between eruptions'
          ],
          
          examples: [
            {
              name: 'Yellowstone Caldera',
              location: 'Wyoming, USA',
              height: 'Caldera floor at 2,400m',
              status: 'Active (last eruption 640,000 years ago)',
              image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80',
              link: '/encyclopedia/volcanoes/yellowstone',
              notableFeatures: [
                'One of largest active volcanic systems on Earth',
                'Three major eruptions in past 2.1 million years',
                'Powers 10,000+ geothermal features',
                'Half the world\'s geysers are here'
              ]
            },
            {
              name: 'Lake Toba',
              location: 'Sumatra, Indonesia',
              height: '100 km × 30 km caldera lake',
              status: 'Active (last eruption 74,000 years ago)',
              image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80',
              link: '/encyclopedia/volcanoes/toba',
              notableFeatures: [
                'Largest volcanic lake in the world',
                'Last eruption was largest in 2 million years',
                'May have caused human population bottleneck',
                'Ejected 2,800 km³ of material'
              ]
            },
            {
              name: 'Krakatoa (Krakatau)',
              location: 'Indonesia',
              height: '813m (Anak Krakatau)',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1580687774725-ec8435d5a6c3?w=800&q=80',
              link: '/encyclopedia/volcanoes/krakatoa',
              notableFeatures: [
                '1883 eruption heard 4,800 km away',
                'Generated 30m+ tsunamis',
                'Killed 36,000+ people',
                'Anak Krakatau ("Child of Krakatau") growing'
              ]
            }
          ]
        },
        {
          id: 'lava-dome',
          name: 'Lava Dome Volcanoes',
          icon: '🫧',
          color: '#795548',
          
          definition: 'Lava domes form when highly viscous lava erupts and piles up around the vent instead of flowing away. The thick, sticky magma squeezes out slowly like toothpaste, building a steep-sided dome or spine. They often grow inside larger volcano craters.',
          
          formation: {
            title: 'How Lava Domes Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Very viscous, silica-rich magma rises to surface' },
              { step: 2, icon: '⬆️', text: 'Thick lava slowly squeezes out of vent' },
              { step: 3, icon: '🫧', text: 'Lava piles up around vent (too thick to flow)' },
              { step: 4, icon: '🧊', text: 'Outer surface cools while interior stays molten' },
              { step: 5, icon: '💥', text: 'Pressure buildup can cause explosive collapse' }
            ]
          },
          
          characteristics: [
            'Steep-sided, bulbous shape',
            'Very viscous rhyolitic/dacitic lava',
            'Slow growth over months to years',
            'Surface crust with molten interior',
            'Can collapse causing pyroclastic flows',
            'Often form inside larger volcano craters',
            'Spines can grow from dome top',
            'Dangerous unpredictable behavior'
          ],
          
          examples: [
            {
              name: 'Mount St. Helens Dome',
              location: 'Washington, USA',
              height: 'Growing inside 1980 crater',
              status: 'Active',
              image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
              link: '/encyclopedia/volcanoes/st-helens-dome',
              notableFeatures: [
                'Growing since 1980 eruption',
                'Multiple growth episodes',
                'Closely monitored',
                'Example of post-eruption dome building'
              ]
            },
            {
              name: 'Soufrière Hills',
              location: 'Montserrat, Caribbean',
              height: '1,050m',
              status: 'Active (ongoing since 1995)',
              image: 'https://images.unsplash.com/photo-1580687774725-ec8435d5a6c3?w=800&q=80',
              link: '/encyclopedia/volcanoes/soufriere-hills',
              notableFeatures: [
                'Destroyed capital Plymouth',
                'Ongoing dome growth since 1995',
                '2/3 of island evacuated',
                'Multiple dome collapses'
              ]
            }
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Volcano Types Comparison',
        headers: ['Type', 'Shape', 'Size', 'Eruption Style', 'Lava Type', 'Example'],
        rows: [
          ['Shield 🛡️', 'Broad, gentle slopes', 'Very large', 'Effusive, gentle', 'Basalt (fluid)', 'Mauna Loa'],
          ['Stratovolcano 🗻', 'Steep cone', 'Large', 'Explosive', 'Andesite/Rhyolite', 'Mt. Fuji'],
          ['Cinder Cone 🔺', 'Small, steep cone', 'Small (<300m)', 'Moderate explosive', 'Basalt', 'Parícutin'],
          ['Caldera 🕳️', 'Huge depression', 'Massive', 'Catastrophic', 'Rhyolite', 'Yellowstone'],
          ['Lava Dome 🫧', 'Bulbous mound', 'Small-medium', 'Slow extrusion', 'Rhyolite/Dacite', 'Mt. Pelée']
        ]
      }
    },
    
    // =============================
    // SECTION 3: FORMATION
    // =============================
    formation: {
      title: 'How Volcanoes Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=1600&q=90',
        tagline: 'Understanding the volcanic process from magma to eruption'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Volcanic eruptions occur when molten rock from Earth\'s interior reaches the surface. This process involves the generation of magma deep underground, its rise through the crust, and eventual eruption. Understanding volcano formation helps us predict eruptions and protect communities.',
      
      stages: [
        {
          stage: 1,
          title: 'Magma Generation',
          timeframe: 'Continuous process in Earth\'s mantle',
          image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=1200&q=80',
          description: [
            'Magma forms when rock in Earth\'s mantle melts due to high temperature, decreased pressure, or added water',
            'Three main settings: subduction zones (water lowers melting point), rift zones (decompression melting), and hotspots (mantle plumes)',
            'Temperature needed: 700-1300°C depending on rock composition and water content',
            'Magma is less dense than surrounding rock, causing it to rise toward surface',
            'Different magma compositions create different eruption styles: basalt (fluid) vs rhyolite (viscous)'
          ],
          geologicalProcess: 'Partial melting of mantle rock creates buoyant magma that begins ascending through the lithosphere.',
          keyFeatures: [
            'Melting depth: 70-200 km below surface',
            'Temperature: 700-1300°C',
            'Three settings: subduction, rift, hotspot',
            'Magma types: basaltic, andesitic, rhyolitic'
          ],
          evidence: [
            'Seismic wave analysis shows partial melt zones',
            'Xenoliths (rock fragments) in lava reveal mantle composition',
            'Geochemical analysis of erupted materials'
          ]
        },
        {
          stage: 2,
          title: 'Magma Rise Through Crust',
          timeframe: 'Years to thousands of years',
          image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200&q=80',
          description: [
            'Buoyant magma rises through cracks and weaknesses in overlying rock',
            'Creates magma conduits (pipes) and sills (horizontal sheets)',
            'Can pause in intermediate chambers while gaining pressure',
            'Magma may assimilate surrounding rock, changing composition',
            'Rise rate varies: slow (cm/year) for viscous magma, faster for fluid magma',
            'Fractures rock above, triggering earthquakes detectable by seismometers'
          ],
          geologicalProcess: 'Magma migrates upward through crustal fractures, sometimes ponding in intermediate chambers before continuing ascent.',
          keyFeatures: [
            'Rise rate: cm/year to m/day',
            'Creates dikes and sills',
            'Causes swarms of earthquakes',
            'May pond at intermediate levels'
          ],
          evidence: [
            'Earthquake swarms beneath volcanoes',
            'Ground deformation (inflation) detected by GPS',
            'Changes in gas emissions',
            'Dike structures visible in eroded volcanoes'
          ]
        },
        {
          stage: 3,
          title: 'Magma Chamber Formation',
          timeframe: 'Thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1462275646964-a0e3571f4f5f?w=1200&q=80',
          description: [
            'Magma accumulates 1-10 km below surface in reservoir',
            'Chamber may be several cubic kilometers in volume',
            'Differentiation occurs: heavier crystals sink, lighter material rises',
            'Gas content increases in upper chamber (more explosive potential)',
            'Chamber shape and size affects eruption style',
            'Can feed eruptions for thousands of years before depleting'
          ],
          geologicalProcess: 'Magma pools in crustal chamber where it evolves through crystallization, mixing, and degassing before eruption.',
          keyFeatures: [
            'Depth: 1-10 km below surface',
            'Volume: 1-1000s of km³',
            'Temperature: 700-1200°C',
            'Evolves through crystallization'
          ],
          evidence: [
            'Ground swelling from magma injection',
            'Seismic tomography images chamber',
            'Gravitational and magnetic anomalies',
            'Calderas reveal emptied chambers'
          ]
        },
        {
          stage: 4,
          title: 'Eruption Trigger',
          timeframe: 'Days to months before eruption',
          image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80',
          description: [
            'Pressure exceeds strength of overlying rock',
            'Triggers: new magma injection, gas buildup, tectonic stress, or external events',
            'Earthquakes intensify as magma forces path to surface',
            'Ground inflates measurably (cm to meters)',
            'Gas emissions increase dramatically',
            'Warning signs may appear hours to months before eruption'
          ],
          geologicalProcess: 'When magma pressure exceeds the confining strength of overlying rock, the system becomes unstable and eruption initiates.',
          keyFeatures: [
            'Increasing earthquake frequency',
            'Ground inflation: cm to meters',
            'Gas output increases 10-100x',
            'Precursory activity hours-months before'
          ],
          evidence: [
            'Seismic swarms directly beneath volcano',
            'GPS measures ground deformation',
            'SO₂ and CO₂ gas flux measurements',
            'Thermal satellite imagery shows heating'
          ]
        },
        {
          stage: 5,
          title: 'Volcanic Eruption',
          timeframe: 'Hours to years',
          image: 'https://images.unsplash.com/photo-1580687774725-ec8435d5a6c3?w=1200&q=80',
          description: [
            'Magma reaches surface through central vent or flank fissures',
            'Eruption style depends on magma viscosity and gas content',
            'Effusive eruptions: fluid lava flows gently (Hawaiian style)',
            'Explosive eruptions: gas-rich magma fragments violently (Plinian style)',
            'Products: lava flows, pyroclastic flows, ash clouds, lahars',
            'Can build new land, destroy existing terrain, affect global climate',
            'Duration: hours (explosive) to decades (effusive)'
          ],
          geologicalProcess: 'Magma reaches the surface, releasing dissolved gases that drive eruption. Style depends on magma composition and gas content.',
          keyFeatures: [
            'VEI scale: 0-8 (logarithmic)',
            'Effusive vs. explosive styles',
            'Column heights: meters to 40+ km',
            'Lava temperatures: 700-1200°C'
          ],
          evidence: [
            'Direct observation and measurement',
            'Deposits record eruption history',
            'Ice cores record sulfur from major eruptions',
            'Tree rings show climate impacts'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Volcanic Terminology',
        terms: [
          {
            term: 'Magma',
            pronunciation: '(MAG-muh)',
            definition: 'Molten rock beneath Earth\'s surface, containing dissolved gases and suspended crystals. When it reaches the surface, it\'s called lava.',
            example: 'The magma chamber beneath Yellowstone contains enough molten rock to fill 11 Grand Canyons.',
            relatedTerms: ['Lava', 'Mantle', 'Partial Melting', 'Melt']
          },
          {
            term: 'Pyroclastic Flow',
            pronunciation: '(pie-roh-KLAS-tik)',
            definition: 'A fast-moving, ground-hugging avalanche of hot gas, ash, and rock fragments ejected during explosive eruptions. Temperatures reach 700°C and speeds exceed 100 km/h.',
            example: 'The 79 AD pyroclastic flows from Vesuvius killed the residents of Pompeii in seconds, preserving them in ash.',
            relatedTerms: ['Surge', 'Nuée Ardente', 'Ignimbrite', 'Volcanic Hazard']
          },
          {
            term: 'Lahar',
            pronunciation: '(LAH-har)',
            definition: 'A destructive mudflow or debris flow composed of volcanic material and water. Lahars can travel tens of kilometers and bury entire towns.',
            example: 'The 1985 Nevado del Ruiz lahar killed 23,000 people in Armero, Colombia, traveling 100 km from the volcano.',
            relatedTerms: ['Debris Flow', 'Mudflow', 'Volcanic Hazard']
          },
          {
            term: 'Caldera',
            pronunciation: '(kal-DAIR-uh)',
            definition: 'A large, basin-shaped volcanic depression (>1 km diameter) formed by collapse following the emptying of a magma chamber during a large eruption.',
            example: 'Crater Lake, Oregon fills a 10 km wide caldera formed 7,700 years ago when Mount Mazama collapsed.',
            relatedTerms: ['Crater', 'Collapse', 'Supervolcano', 'Resurgent Dome']
          },
          {
            term: 'VEI (Volcanic Explosivity Index)',
            pronunciation: '(V-E-I)',
            definition: 'A scale from 0-8 measuring eruption size based on volume of ejected material. Each step represents a 10-fold increase.',
            example: 'The 1980 Mount St. Helens eruption was VEI 5. The 1815 Tambora eruption was VEI 7 – 100 times larger.',
            relatedTerms: ['Eruption', 'Explosivity', 'Magnitude']
          },
          {
            term: 'Tephra',
            pronunciation: '(TEF-ruh)',
            definition: 'All solid material ejected into the air during volcanic eruptions, including ash (<2mm), lapilli (2-64mm), and bombs/blocks (>64mm).',
            example: 'The 2010 Eyjafjallajökull eruption ejected fine tephra that closed European airspace for weeks.',
            relatedTerms: ['Ash', 'Lapilli', 'Volcanic Bomb', 'Pyroclast']
          }
        ]
      }
    },
    
    // =============================
    // SECTION 4: EXAMPLES
    // =============================
    examples: {
      title: 'Famous Volcanoes of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=1600&q=90',
        tagline: 'Explore Earth\'s most iconic volcanic mountains'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the fiery peaks of the Ring of Fire to isolated hotspot volcanoes, these mountains represent some of Earth\'s most powerful natural features. Each tells a unique story of our planet\'s dynamic interior.',
      
      linkToExisting: '/encyclopedia/volcanoes/index.html',
      
      featuredRanges: [
        {
          name: 'Mount Fuji',
          continent: 'Asia',
          type: 'Stratovolcano',
          highestPeak: '3,776m (12,389 ft)',
          length: 'Base diameter: 40-50 km',
          countries: ['Japan'],
          age: '100,000 years (current form)',
          link: '/encyclopedia/volcanoes/fuji',
          image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
          icon: '🗻',
          funFact: 'Last erupted in 1707 and is considered sacred in Shinto religion'
        },
        {
          name: 'Kilauea',
          continent: 'North America',
          type: 'Shield Volcano',
          highestPeak: '1,247m (4,091 ft)',
          length: 'Part of Big Island, Hawaii',
          countries: ['USA'],
          age: '300,000-600,000 years',
          link: '/encyclopedia/volcanoes/kilauea',
          image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=800&q=80',
          icon: '🌋',
          funFact: 'One of the most active volcanoes on Earth with near-continuous eruption'
        },
        {
          name: 'Mount Vesuvius',
          continent: 'Europe',
          type: 'Stratovolcano',
          highestPeak: '1,281m (4,203 ft)',
          length: 'Base diameter: 15 km',
          countries: ['Italy'],
          age: '25,000 years (current cone)',
          link: '/encyclopedia/volcanoes/vesuvius',
          image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
          icon: '🏛️',
          funFact: 'Destroyed Pompeii in 79 AD and remains one of world\'s most dangerous volcanoes'
        },
        {
          name: 'Mount Etna',
          continent: 'Europe',
          type: 'Stratovolcano',
          highestPeak: '3,357m (11,014 ft)',
          length: 'Base area: 1,190 km²',
          countries: ['Italy'],
          age: '500,000 years',
          link: '/encyclopedia/volcanoes/etna',
          image: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=800&q=80',
          icon: '🌋',
          funFact: 'Europe\'s most active volcano with recorded eruptions for 3,500 years'
        },
        {
          name: 'Mount Kilimanjaro',
          continent: 'Africa',
          type: 'Stratovolcano (dormant)',
          highestPeak: '5,895m (19,341 ft)',
          length: 'Three volcanic cones',
          countries: ['Tanzania'],
          age: '3 million years',
          link: '/encyclopedia/volcanoes/kilimanjaro',
          image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&q=80',
          icon: '🏔️',
          funFact: 'Africa\'s highest peak with glaciers at the equator (rapidly melting)'
        },
        {
          name: 'Yellowstone Supervolcano',
          continent: 'North America',
          type: 'Caldera/Supervolcano',
          highestPeak: 'Caldera floor: ~2,400m',
          length: '55 km × 72 km caldera',
          countries: ['USA'],
          age: '2.1 million years',
          link: '/encyclopedia/volcanoes/yellowstone',
          image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80',
          icon: '🌡️',
          funFact: 'Powers 10,000+ geothermal features including Old Faithful geyser'
        },
        {
          name: 'Krakatoa',
          continent: 'Asia',
          type: 'Caldera',
          highestPeak: '813m (Anak Krakatau)',
          length: 'Original island destroyed 1883',
          countries: ['Indonesia'],
          age: 'Anak Krakatau emerged 1927',
          link: '/encyclopedia/volcanoes/krakatoa',
          image: 'https://images.unsplash.com/photo-1580687774725-ec8435d5a6c3?w=800&q=80',
          icon: '💥',
          funFact: '1883 eruption was heard 4,800 km away – loudest sound in recorded history'
        },
        {
          name: 'Mount Pinatubo',
          continent: 'Asia',
          type: 'Stratovolcano',
          highestPeak: '1,486m (was 1,745m)',
          length: 'Summit caldera: 2.5 km',
          countries: ['Philippines'],
          age: '35,000 years',
          link: '/encyclopedia/volcanoes/pinatubo',
          image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80',
          icon: '☁️',
          funFact: '1991 eruption cooled global temperatures by 0.5°C for two years'
        },
        {
          name: 'Mauna Loa',
          continent: 'North America',
          type: 'Shield Volcano',
          highestPeak: '4,169m above sea level',
          length: 'Volume: 75,000 km³',
          countries: ['USA'],
          age: '700,000-1,000,000 years',
          link: '/encyclopedia/volcanoes/mauna-loa',
          image: 'https://images.unsplash.com/photo-1547483238-2cbf881a559f?w=800&q=80',
          icon: '🌊',
          funFact: 'Largest volcano on Earth by volume – rises 10,210m from ocean floor!'
        }
      ],
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance - Volcanoes',
        introduction: 'Volcanism is a crucial topic for UPSC Geography covering tectonic processes, landforms, hazards, and global impacts.',
        topics: [
          '**Types of Volcanoes:** Shield, Composite, Cinder Cone, Caldera - with examples',
          '**Volcanic Distribution:** Ring of Fire, Mid-Ocean Ridges, Hotspots',
          '**Plate Tectonics:** Convergent boundaries (subduction), Divergent boundaries, Hotspot volcanism',
          '**Volcanic Landforms:** Craters, Calderas, Lava plateaus, Volcanic islands',
          '**Volcanic Hazards:** Pyroclastic flows, Lahars, Ash fall, Tsunamis',
          '**Indian Volcanoes:** Barren Island (only active), Narcondam, Deccan Traps (flood basalts)',
          '**Climate Impact:** Volcanic winter, Aerosol cooling, Ozone depletion',
          '**Geothermal Energy:** Iceland, Kenya, Philippines - renewable energy from volcanoes',
          '**Volcanic Soils:** Andisols - highly fertile agricultural soils',
          '**Current Affairs:** Recent eruptions, monitoring systems, disaster management'
        ],
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2022',
            question: 'Distinguish between different types of volcanoes based on their shape, composition, and eruption style with suitable examples.',
            approach: 'Compare shield (Mauna Loa), stratovolcano (Fuji), cinder cone (Parícutin), caldera (Yellowstone). Discuss magma viscosity, gas content, tectonic setting.'
          },
          {
            type: 'Mains',
            year: '2020',
            question: 'Examine the distribution of volcanoes in the world. Why is the Pacific Ring of Fire the most volcanically active region?',
            approach: 'Discuss global distribution: Ring of Fire, Mid-Atlantic Ridge, East African Rift. Explain subduction zone mechanics, plate convergence rates.'
          },
          {
            type: 'Prelims',
            year: '2019',
            question: 'Which of the following is the only active volcano in India?\n(a) Barren Island\n(b) Narcondam\n(c) Deccan Traps\n(d) Andaman Islands',
            answer: '(a) Barren Island - located in Andaman Sea, last major eruption 2017'
          }
        ]
      }
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = volcanoesData;
}
