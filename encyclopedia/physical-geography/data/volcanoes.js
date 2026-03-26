/**
 * VOLCANOES DATA FILE
 * ========================
 */

const volcanoesData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Volcanoes',
    icon: '🌋',
    theme: 'volcanoes-theme',
    existingPagesLink: '../../volcanoes/volcanoes.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is a Volcano?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1562077772-3bd90f0a1a99?w=1600&q=90',
        tagline: 'Earth\'s fiery vents where the planet\'s interior meets the surface'
      },
      
      content: {
        introduction: 'A volcano is an opening or rupture in Earth\'s crust through which molten rock (magma), volcanic ash, and gases escape from beneath the surface. When magma reaches the surface, it becomes lava, building volcanic mountains and reshaping landscapes. Volcanoes are concentrated along tectonic plate boundaries and hotspots, forming chains like the Pacific Ring of Fire. They range from gentle shield volcanoes to explosive stratovolcanoes and have shaped Earth\'s atmosphere, climate, and the evolution of life throughout geological history.',
        
        keyPoints: [
          {
            icon: '🔥',
            label: 'Magma Source',
            text: 'Molten rock from Earth\'s interior',
            detail: 'Magma forms when rock in the upper mantle or lower crust melts due to high temperature, decreased pressure, or water content. This molten material rises through cracks in overlying rock due to its lower density. The composition of magma—whether basaltic, andesitic, or rhyolitic—determines eruption style and volcanic landform.'
          },
          {
            icon: '🌍',
            label: 'Plate Boundaries',
            text: '80% located at plate margins',
            detail: 'Most volcanoes occur at tectonic plate boundaries where plates diverge (mid-ocean ridges) or converge (subduction zones). At divergent boundaries, magma wells up to fill gaps. At subduction zones, descending plates release water that triggers melting. About 20% of volcanoes form at hotspots—deep mantle plumes unrelated to plate boundaries.'
          },
          {
            icon: '💨',
            label: 'Eruption Styles',
            text: 'From gentle to explosive',
            detail: 'Eruption style depends on magma viscosity and gas content. Fluid basaltic magma produces gentle Hawaiian-style eruptions with flowing lava. Viscous silica-rich magma traps gases, causing explosive Plinian eruptions with ash columns reaching the stratosphere. Eruptions range from continuous slow effusion to catastrophic explosions.'
          },
          {
            icon: '🏔️',
            label: 'Diverse Landforms',
            text: 'Various shapes and sizes',
            detail: 'Volcanoes create diverse landforms: broad shield volcanoes, steep stratovolcanoes, small cinder cones, massive calderas, underwater seamounts, and vast lava plateaus. Iceland\'s entire landmass is volcanic; the Hawaiian Islands are the world\'s largest mountains measured from seafloor base.'
          },
          {
            icon: '⚠️',
            label: 'Natural Hazards',
            text: 'Multiple deadly threats',
            detail: 'Volcanic hazards include lava flows, pyroclastic flows (superheated gas and debris traveling 700+ km/h), lahars (volcanic mudflows), ashfall, volcanic gases, and tsunamis from flank collapse. About 500 million people live near active volcanoes. Historic eruptions have caused mass extinctions and altered global climate.'
          },
          {
            icon: '🌱',
            label: 'Benefits to Life',
            text: 'Creating fertile lands',
            detail: 'Volcanoes benefit humanity and ecosystems: volcanic soils are exceptionally fertile; geothermal energy provides clean power; volcanic rock provides building materials; hot springs support tourism. Volcanic activity released gases that formed Earth\'s original atmosphere and oceans, enabling life to evolve.'
          }
        ],
        
        comparison: {
          title: 'Volcano Types Quick Comparison',
          features: [
            {
              feature: 'Shape',
              mountain: 'Shield: Broad, gentle slopes',
              hill: 'Stratovolcano: Steep, conical',
              plateau: 'Caldera: Collapsed crater'
            },
            {
              feature: 'Eruption Style',
              mountain: 'Shield: Effusive, flowing',
              hill: 'Stratovolcano: Explosive',
              plateau: 'Caldera: Catastrophic'
            },
            {
              feature: 'Magma Type',
              mountain: 'Shield: Basaltic (fluid)',
              hill: 'Stratovolcano: Andesitic',
              plateau: 'Caldera: Rhyolitic (viscous)'
            },
            {
              feature: 'Examples',
              mountain: 'Shield: Mauna Loa',
              hill: 'Stratovolcano: Mt. Fuji',
              plateau: 'Caldera: Yellowstone'
            },
            {
              feature: 'Hazard Level',
              mountain: 'Shield: Lower',
              hill: 'Stratovolcano: Very high',
              plateau: 'Caldera: Extreme (rare)'
            }
          ]
        },
        
        funFacts: [
          '🌍 There are approximately 1,500 potentially active volcanoes worldwide, with 50-70 erupting each year',
          '🔥 The largest volcano on Earth is Mauna Loa in Hawaii, rising 9,170 meters from seafloor to summit',
          '💧 Volcanic eruptions created Earth\'s early atmosphere and oceans, releasing water vapor and gases over billions of years',
          '⚡ The 1815 eruption of Mount Tambora caused the "Year Without a Summer" in 1816, with global crop failures',
          '🌡️ Lava temperature ranges from 700°C to 1,200°C—hot enough to melt steel and glow red to white',
          '📊 Olympus Mons on Mars is the solar system\'s largest volcano: 22 km high and 600 km across'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Volcanoes',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=1600&q=90',
        tagline: 'From gentle shield volcanoes to explosive stratovolcanoes'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'shield',
          name: 'Shield Volcanoes',
          icon: '🛡️',
          color: '#F59E0B',
          
          definition: 'Shield volcanoes are broad, gently sloping volcanoes built by successive flows of fluid basaltic lava. Their shape resembles a warrior\'s shield lying flat. These are the largest volcanoes by volume, formed by repeated non-explosive effusive eruptions. The lava flows easily across the surface, spreading far from the vent before solidifying. Hawaiian volcanoes like Mauna Loa and Kilauea are classic shield volcanoes, as are the volcanoes of the Galápagos Islands and Iceland.',
          
          formation: {
            title: 'How Shield Volcanoes Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Hot, fluid basaltic magma rises from mantle (often at hotspots)' },
              { step: 2, icon: '💧', text: 'Low-viscosity lava erupts gently, flowing easily from vents' },
              { step: 3, icon: '🌊', text: 'Lava spreads in thin sheets, traveling many kilometers before cooling' },
              { step: 4, icon: '📚', text: 'Successive flows build upon each other layer by layer' },
              { step: 5, icon: '🛡️', text: 'Gradual accumulation creates broad, dome-shaped mountain' }
            ]
          },
          
          characteristics: [
            'Broad, gently sloping profile (typically 2-10° slope)',
            'Largest volcanoes by volume on Earth',
            'Composed almost entirely of basaltic lava flows',
            'Relatively non-explosive, effusive eruptions',
            'Often have summit calderas from magma chamber collapse',
            'Lava tubes common—allowing lava to travel great distances'
          ]
        },
        {
          id: 'stratovolcano',
          name: 'Stratovolcanoes',
          icon: '🗻',
          color: '#EF4444',
          
          definition: 'Stratovolcanoes, also called composite volcanoes, are tall, conical mountains built from alternating layers of lava flows, volcanic ash, and other pyroclastic materials. They are the most recognizable and dangerous type of volcano, characterized by steep slopes and explosive eruptions. Mount Fuji, Mount St. Helens, Mount Vesuvius, and Mount Pinatubo are iconic stratovolcanoes. Most occur at subduction zones where oceanic plates descend beneath continental plates.',
          
          formation: {
            title: 'How Stratovolcanoes Form',
            steps: [
              { step: 1, icon: '⬇️', text: 'Oceanic plate subducts beneath continental plate at convergent boundary' },
              { step: 2, icon: '💧', text: 'Water released from subducting plate lowers mantle melting point' },
              { step: 3, icon: '🔥', text: 'Viscous andesitic/rhyolitic magma forms and rises toward surface' },
              { step: 4, icon: '💥', text: 'Gas-rich magma erupts explosively, ejecting ash and pyroclastics' },
              { step: 5, icon: '🗻', text: 'Alternating explosive and effusive eruptions build steep cone' }
            ]
          },
          
          characteristics: [
            'Steep-sided conical shape (30-35° slopes)',
            'Alternating layers of lava and pyroclastic material',
            'Viscous, gas-rich magma causes explosive eruptions',
            'Most dangerous volcano type for nearby populations',
            'Common at subduction zone boundaries (Ring of Fire)',
            'Summit craters or calderas from explosive events'
          ]
        },
        {
          id: 'cinder',
          name: 'Cinder Cones',
          icon: '🔺',
          color: '#8B5CF6',
          
          definition: 'Cinder cones (also called scoria cones) are the simplest and most common type of volcano, built from fragments of ejected lava that solidify in the air and fall around the vent. They are small, steep-sided hills rarely exceeding 300 meters in height. Cinder cones often form on the flanks of larger volcanoes or in volcanic fields. They typically result from single, relatively brief eruptions and may become extinct after their initial activity. Parícutin in Mexico famously grew from a cornfield in 1943.',
          
          formation: {
            title: 'How Cinder Cones Form',
            steps: [
              { step: 1, icon: '💥', text: 'Gas-rich basaltic magma erupts from a single vent' },
              { step: 2, icon: '🌋', text: 'Lava fountain ejects molten blobs into the air' },
              { step: 3, icon: '🪨', text: 'Lava fragments cool in flight, forming cinders (scoria)' },
              { step: 4, icon: '⬇️', text: 'Cinders fall and pile up around the vent' },
              { step: 5, icon: '🔺', text: 'Loose material builds steep-sided symmetrical cone' }
            ]
          },
          
          characteristics: [
            'Small size (typically 30-300 meters tall)',
            'Very steep slopes (30-40°) at angle of repose',
            'Built from loose pyroclastic fragments (cinders/scoria)',
            'Bowl-shaped crater at summit',
            'Often form in clusters or volcanic fields',
            'Usually monogenetic (single eruption phase)'
          ]
        },
        {
          id: 'caldera',
          name: 'Calderas',
          icon: '🕳️',
          color: '#06B6D4',
          
          definition: 'Calderas are large volcanic depressions formed when the ground collapses after a massive eruption empties the underlying magma chamber. They can be several kilometers to tens of kilometers in diameter, far larger than explosion craters. Some calderas form during catastrophic eruptions (Krakatoa, Santorini), while others develop gradually through multiple eruptions. Yellowstone, Crater Lake, and Toba are famous calderas. Supervolcanic calderas can cause global climate impacts.',
          
          formation: {
            title: 'How Calderas Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Large magma chamber develops beneath the surface' },
              { step: 2, icon: '⬆️', text: 'Pressure builds as gases accumulate in viscous magma' },
              { step: 3, icon: '💥', text: 'Catastrophic eruption ejects massive volume of material' },
              { step: 4, icon: '🕳️', text: 'Magma chamber empties, removing structural support' },
              { step: 5, icon: '⬇️', text: 'Overlying rock collapses into void, forming caldera' }
            ]
          },
          
          characteristics: [
            'Large depression (1-50+ km diameter)',
            'Formed by collapse, not explosion',
            'Often filled with water (caldera lakes)',
            'May have resurgent domes from later activity',
            'Associated with the most powerful eruptions',
            'Ring fractures may host post-collapse volcanism'
          ]
        },
        {
          id: 'lava',
          name: 'Lava Domes',
          icon: '🫧',
          color: '#EC4899',
          
          definition: 'Lava domes are mounds of highly viscous lava that pile up over and around a volcanic vent rather than flowing away. They form when thick, pasty lava (usually dacitic or rhyolitic) is too viscous to travel far. Domes grow by internal expansion as new lava pushes into the cooling exterior. They can be extremely hazardous, as collapsing dome material can generate deadly pyroclastic flows. Famous examples include Mount St. Helens\' growing dome and the Lassen Peak dome in California.',
          
          formation: {
            title: 'How Lava Domes Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Highly viscous silica-rich magma rises toward surface' },
              { step: 2, icon: '⬆️', text: 'Thick lava erupts but cannot flow far from vent' },
              { step: 3, icon: '🫧', text: 'Lava piles up, forming rounded mound over vent' },
              { step: 4, icon: '❄️', text: 'Exterior cools and solidifies while interior remains hot' },
              { step: 5, icon: '📈', text: 'Dome grows by internal injection of new lava (endogenous growth)' }
            ]
          },
          
          characteristics: [
            'Rounded, steep-sided mound shape',
            'Composed of viscous silica-rich lava',
            'Grow by internal expansion rather than flows',
            'Often form within craters of larger volcanoes',
            'Highly unstable—prone to collapse',
            'Collapse generates deadly pyroclastic flows'
          ]
        },
        {
          id: 'submarine',
          name: 'Submarine Volcanoes',
          icon: '🌊',
          color: '#3B82F6',
          
          definition: 'Submarine volcanoes erupt on the ocean floor, often at mid-ocean ridges where tectonic plates diverge, or at hotspots beneath the sea. Most volcanic activity on Earth occurs underwater—approximately 80% of eruptions are submarine. When these volcanoes grow tall enough to breach the surface, they become volcanic islands. Pillow lavas form characteristic rounded shapes as hot lava rapidly cools in water. Loihi Seamount off Hawaii will become a new Hawaiian island in thousands of years.',
          
          formation: {
            title: 'How Submarine Volcanoes Form',
            steps: [
              { step: 1, icon: '🌍', text: 'Magma rises at mid-ocean ridge or oceanic hotspot' },
              { step: 2, icon: '🔥', text: 'Lava erupts onto seafloor under immense water pressure' },
              { step: 3, icon: '💧', text: 'Rapid cooling in water forms pillow lava shapes' },
              { step: 4, icon: '⬆️', text: 'Repeated eruptions build underwater mountain (seamount)' },
              { step: 5, icon: '🏝️', text: 'If tall enough, volcano may emerge above sea level' }
            ]
          },
          
          characteristics: [
            'Located on ocean floor, often at spreading ridges',
            'Most volcanic activity on Earth is submarine',
            'Characteristic pillow lava formations',
            'Water pressure suppresses explosive activity at depth',
            'May grow into seamounts or volcanic islands',
            'Hydrothermal vents support unique ecosystems'
          ]
        },
        {
          id: 'fissure',
          name: 'Fissure Volcanoes',
          icon: '〰️',
          color: '#10B981',
          
          definition: 'Fissure volcanoes erupt from elongated cracks (fissures) in the Earth\'s crust rather than from central vents. Highly fluid basaltic lava pours from these fractures, often creating vast lava flows that cover thousands of square kilometers. Fissure eruptions have produced the largest lava flows in Earth\'s history, forming flood basalts like the Deccan Traps in India. Iceland\'s Laki eruption (1783-84) occurred along a 27 km fissure and affected global climate.',
          
          formation: {
            title: 'How Fissure Volcanoes Form',
            steps: [
              { step: 1, icon: '↔️', text: 'Tectonic extension creates fractures in Earth\'s crust' },
              { step: 2, icon: '🔥', text: 'Fluid basaltic magma rises along the fissure' },
              { step: 3, icon: '〰️', text: 'Lava erupts from multiple points along the crack' },
              { step: 4, icon: '🌊', text: 'Low-viscosity lava flows spread over vast areas' },
              { step: 5, icon: '📏', text: 'Successive eruptions create extensive lava plateaus' }
            ]
          },
          
          characteristics: [
            'Linear eruption from cracks rather than central vents',
            'Highly fluid basaltic lava compositions',
            'Can produce enormous volumes of lava',
            'Creates flat lava plains and flood basalts',
            'Common at divergent plate boundaries (e.g., Iceland)',
            'Associated with largest volcanic events in Earth history'
          ]
        },
        {
          id: 'supervolcano',
          name: 'Supervolcanoes',
          icon: '💥',
          color: '#DC2626',
          
          definition: 'Supervolcanoes are volcanic systems capable of producing eruptions with Volcanic Explosivity Index (VEI) of 8—ejecting more than 1,000 km³ of material. These eruptions are thousands of times larger than typical volcanic events and can cause global catastrophe. Supervolcanoes don\'t form typical mountain cones but instead produce massive calderas after chamber collapse. Known supervolcanoes include Yellowstone, Toba (Indonesia), and Taupo (New Zealand). Such eruptions occur roughly every 100,000 years.',
          
          formation: {
            title: 'How Supervolcanoes Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Mantle plume supplies enormous volumes of magma over millions of years' },
              { step: 2, icon: '💧', text: 'Massive magma chamber accumulates silica-rich, gas-loaded melt' },
              { step: 3, icon: '⬆️', text: 'Chamber grows to hundreds of cubic kilometers in volume' },
              { step: 4, icon: '💥', text: 'Catastrophic eruption ejects >1000 km³ of material' },
              { step: 5, icon: '🕳️', text: 'Collapse creates caldera tens of kilometers across' }
            ]
          },
          
          characteristics: [
            'VEI 8 eruptions (>1000 km³ ejected material)',
            'Form massive calderas, not mountain peaks',
            'Global climate impact lasting years to decades',
            'Ash deposits covering entire continents',
            'Recurrence interval of tens to hundreds of thousands of years',
            'Currently dormant examples being monitored worldwide'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of Volcano Types',
        headers: ['Type', 'Shape', 'Eruption Style', 'Example'],
        rows: [
          ['Shield 🛡️', 'Broad, gentle', 'Effusive flows', 'Mauna Loa'],
          ['Stratovolcano 🗻', 'Steep cone', 'Explosive', 'Mt. Fuji'],
          ['Cinder Cone 🔺', 'Small, steep', 'Brief explosive', 'Parícutin'],
          ['Caldera 🕳️', 'Large depression', 'Catastrophic collapse', 'Yellowstone'],
          ['Lava Dome 🫧', 'Rounded mound', 'Viscous extrusion', 'Mt. St. Helens dome'],
          ['Submarine 🌊', 'Underwater mount', 'Pillow lavas', 'Loihi'],
          ['Fissure 〰️', 'Linear vent', 'Flood basalts', 'Laki, Iceland'],
          ['Supervolcano 💥', 'Massive caldera', 'VEI 8 catastrophic', 'Toba']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Volcanoes Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=1600&q=90',
        tagline: 'From deep Earth to fiery eruption—the journey of magma'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Volcanic formation involves the generation of magma deep within Earth, its ascent through the crust, and eventual eruption at the surface. The type of volcano that forms depends on the tectonic setting, magma composition, and eruption style.',
      
      stages: [
        {
          stage: 1,
          title: 'Magma Generation',
          timeframe: 'Ongoing deep Earth process',
          image: 'https://images.unsplash.com/photo-1562077772-3bd90f0a1a99?w=1200&q=80',
          
          description: [
            'Rock in the upper mantle or lower crust melts to form magma',
            'Melting occurs through temperature increase, pressure decrease, or water addition',
            'At divergent boundaries, rising mantle undergoes decompression melting',
            'At subduction zones, water from descending plates triggers flux melting',
            'Hotspot plumes bring exceptionally hot mantle material that melts partially',
            'Magma composition depends on source rock and melting conditions'
          ],
          
          geologicalProcess: 'Magma generation requires conditions that cross the rock\'s solidus (melting point). Three primary mechanisms create these conditions: (1) Decompression melting—as mantle rises at mid-ocean ridges or hotspots, decreasing pressure lowers the melting point; (2) Flux melting—water released from subducting oceanic crust lowers the melting point of overlying mantle; (3) Heat transfer—hot mantle plumes conduct heat to overlying rock. The resulting magma is less dense than surrounding solid rock, creating buoyancy that drives ascent.',
          
          keyFeatures: [
            'Partial melting of mantle rock (peridotite)',
            'Magma temperature typically 700-1300°C',
            'Initial magma composition reflects tectonic setting'
          ],
          
          evidence: [
            'Seismic studies revealing low-velocity zones (partial melt)',
            'Xenoliths (fragments of mantle rock) in erupted lavas'
          ]
        },
        {
          stage: 2,
          title: 'Magma Ascent',
          timeframe: 'Days to millions of years',
          image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=1200&q=80',
          
          description: [
            'Buoyant magma rises through overlying rock',
            'Magma exploits weaknesses—fractures, faults, and conduits',
            'Magma chambers may form where ascent stalls',
            'Fractional crystallization changes magma composition during storage',
            'Assimilation of crustal rock modifies magma chemistry',
            'Gas content increases as magma approaches surface'
          ],
          
          geologicalProcess: 'Magma rises due to density contrast with surrounding rock. Initial ascent occurs through porous flow and diking—magma-filled fractures that propagate upward. Magma may stall at density boundaries or where heat loss slows ascent, forming magma chambers. During storage, heavy minerals crystallize and sink, changing remaining liquid composition (fractional crystallization). The magma may also melt and incorporate surrounding rock (assimilation). As magma rises, decreasing pressure allows dissolved gases (H₂O, CO₂, SO₂) to exsolve, forming bubbles that increase buoyancy and eruption potential.',
          
          keyFeatures: [
            'Vertical transport through crust via dikes and conduits',
            'Magma chamber formation at depth',
            'Chemical evolution during storage and ascent'
          ],
          
          evidence: [
            'Seismic imaging of magma chambers',
            'Chemical zoning in volcanic crystals recording chamber processes'
          ]
        },
        {
          stage: 3,
          title: 'Volcanic Eruption',
          timeframe: 'Minutes to years',
          image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=1200&q=80',
          
          description: [
            'Magma reaches surface and erupts as lava or pyroclastics',
            'Eruption style depends on magma viscosity and gas content',
            'Effusive eruptions produce flowing lava',
            'Explosive eruptions eject fragmented magma and ash',
            'Volcanic gases release into atmosphere',
            'Initial eruption may precede sustained activity'
          ],
          
          geologicalProcess: 'Eruption occurs when magma pressure exceeds the strength of overlying rock. Low-viscosity basaltic magma allows gases to escape easily, producing gentle effusive eruptions with lava fountains and flows. High-viscosity silica-rich magma traps gases until pressure builds to explosive levels—fragmenting magma into ash and pumice. Eruption column height depends on eruption rate and gas content; powerful columns reach the stratosphere. Eruption duration varies from hours (cinder cone formation) to years (continuous effusion at shield volcanoes).',
          
          keyFeatures: [
            'Lava flows (effusive) or pyroclastic ejection (explosive)',
            'Volcanic ash and gas emissions',
            'Variable eruption intensity and duration'
          ],
          
          evidence: [
            'Direct observation and monitoring',
            'Pyroclastic deposits in stratigraphic record'
          ]
        },
        {
          stage: 4,
          title: 'Volcanic Edifice Construction',
          timeframe: 'Thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=1200&q=80',
          
          description: [
            'Repeated eruptions build volcanic landform over time',
            'Lava flows stack upon each other at shield volcanoes',
            'Alternating lava and pyroclastics build stratovolcanoes',
            'Cinder cones form from single or few eruptions',
            'Calderas form through explosive evacuation and collapse',
            'Erosion and collapse modify volcanic shape'
          ],
          
          geologicalProcess: 'Volcanic edifices grow through accumulation of erupted material. Shield volcanoes build slowly from thousands of lava flows, each typically meters thick. Stratovolcanoes construct steep cones through alternating eruption styles—explosive events depositing pyroclastics, effusive events adding lava. Growth rates vary: Hawaiian volcanoes grow ~2 cm/year in height; continental stratovolcanoes grow more slowly but episodically. Sector collapse, caldera formation, and erosion compete with construction, constantly reshaping volcanic landforms.',
          
          keyFeatures: [
            'Characteristic shape based on volcano type',
            'Summit crater or caldera',
            'Flanking features: parasitic cones, lava tubes, fissures'
          ],
          
          evidence: [
            'Stratigraphic sequences recording eruptive history',
            'Dating of lava flows revealing construction timeline'
          ]
        },
        {
          stage: 5,
          title: 'Volcanic Life Cycle',
          timeframe: 'Tens of thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
          
          description: [
            'Volcanoes pass through active, dormant, and extinct phases',
            'Magma supply may diminish or cease over time',
            'Hotspot volcanoes become extinct as plate moves away',
            'Subduction zone volcanoes may reactivate after long dormancy',
            'Erosion gradually dismantles extinct volcanoes',
            'Volcanic necks may remain after cone erodes'
          ],
          
          geologicalProcess: 'Volcanoes have finite lifespans tied to magma supply. Hotspot volcanoes become extinct as plate motion carries them away from the stationary heat source—the Hawaiian-Emperor chain shows progressively older, more eroded islands to the northwest. Subduction zone volcanoes may experience long dormancy (thousands of years) but reactivate if magma supply resumes. \"Extinct\" classification is uncertain—some volcanoes have erupted after dormancy exceeding 10,000 years. Erosion eventually removes volcanic edifices, leaving only resistant features like volcanic necks (solidified conduits) and dike swarms.',
          
          keyFeatures: [
            'Decreasing eruptive frequency with age',
            'Progressive erosion of edifice',
            'Potential for reactivation (dormant vs. extinct distinction)',
          ],
          
          evidence: [
            'Radiometric dating of volcanic sequences',
            'Volcanic necks and eroded remnants in ancient volcanic regions'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Magma',
            pronunciation: '(MAG-muh)',
            definition: 'Molten rock beneath Earth\'s surface, containing dissolved gases and suspended crystals. When magma erupts onto the surface, it becomes lava.',
            example: 'The magma chamber beneath Yellowstone contains partially molten rock at depths of 5-15 km, fueling geysers and hot springs.',
            relatedTerms: ['Lava', 'Magma chamber', 'Melt']
          },
          {
            term: 'Pyroclastic Flow',
            pronunciation: '(py-roh-KLAS-tik flow)',
            definition: 'A fast-moving current of hot gas and volcanic matter (ash, pumice, rock fragments) that flows down volcanic slopes at speeds up to 700 km/h. Also called nuée ardente.',
            example: 'The 79 AD eruption of Vesuvius killed Pompeii\'s residents primarily through pyroclastic flows reaching 300°C.',
            relatedTerms: ['Pyroclastic surge', 'Ignimbrite', 'Tephra']
          },
          {
            term: 'Lahar',
            pronunciation: '(LAH-har)',
            definition: 'A destructive volcanic mudflow or debris flow composed of volcanic material, debris, and water. Lahars can occur during or long after eruptions when water mobilizes loose volcanic deposits.',
            example: 'The 1985 Nevado del Ruiz eruption triggered lahars that buried the town of Armero, Colombia, killing over 23,000 people.',
            relatedTerms: ['Debris flow', 'Volcanic mudflow', 'Jökulhlaup']
          },
          {
            term: 'Volcanic Explosivity Index (VEI)',
            pronunciation: '(VEI)',
            definition: 'A logarithmic scale from 0 to 8 measuring the explosiveness of volcanic eruptions based on volume of ejected material and eruption column height.',
            example: 'The 1980 Mount St. Helens eruption was VEI 5, while the Toba supereruption 74,000 years ago was VEI 8.',
            relatedTerms: ['Plinian eruption', 'Supervolcano', 'Tephra']
          },
          {
            term: 'Subduction Zone',
            pronunciation: '(sub-DUK-shun zone)',
            definition: 'A convergent plate boundary where one tectonic plate descends beneath another. Water released from the subducting plate triggers magma generation, creating volcanic arcs.',
            example: 'The Pacific Ring of Fire contains numerous subduction zones, hosting 75% of the world\'s active volcanoes.',
            relatedTerms: ['Plate tectonics', 'Island arc', 'Volcanic arc']
          },
          {
            term: 'Hotspot',
            pronunciation: '(HOT-spot)',
            definition: 'A location where a mantle plume rises from deep within Earth, creating volcanism independent of plate boundaries. As plates move over stationary hotspots, chains of volcanoes form.',
            example: 'The Hawaiian hotspot has created a chain of islands and seamounts stretching over 6,000 km as the Pacific Plate moves northwest.',
            relatedTerms: ['Mantle plume', 'Intraplate volcanism', 'Volcanic chain']
          },
          {
            term: 'Effusive Eruption',
            pronunciation: '(eh-FYOO-siv)',
            definition: 'A volcanic eruption characterized by the relatively gentle outpouring of lava flows rather than explosive ejection of pyroclastics. Typical of low-viscosity basaltic magma.',
            example: 'Kilauea in Hawaii produces effusive eruptions with rivers of fluid basaltic lava flowing down the mountain slopes.',
            relatedTerms: ['Lava flow', 'Hawaiian eruption', 'Shield volcano']
          },
          {
            term: 'Tephra',
            pronunciation: '(TEF-ruh)',
            definition: 'All airborne volcanic material ejected during an eruption, ranging from fine ash to large blocks. Tephra falls back to ground, depositing layers used to date and correlate eruptions.',
            example: 'The distinctive white tephra layer from the ~79,000 year ago Toba eruption is found in sediments from East Africa to the Indian Ocean.',
            relatedTerms: ['Volcanic ash', 'Pumice', 'Pyroclastic']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Volcanoes of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=1600&q=90',
        tagline: 'Explore the world\'s most remarkable volcanoes'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the symmetric perfection of Mount Fuji to the continuous eruptions of Kilauea, from the catastrophic history of Vesuvius to the simmering supervolcano beneath Yellowstone, volcanoes represent Earth\'s most dramatic geological forces. Visit our comprehensive volcanoes page to explore detailed information about the world\'s most significant volcanoes, their eruption histories, associated hazards, and their role in shaping landscapes and human history.',
      
      linkToExisting: '../../volcanoes/volcanoes.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Volcanoes are essential for UPSC Geography, covering plate tectonics, landform evolution, natural hazards, and disaster management. Understanding volcanic processes, distribution, and impacts is crucial for comprehensive exam preparation.',
        
        topics: [
          '**Physical Geography:** Volcanic landforms, types of volcanoes, lava types (aa, pahoehoe), intrusive landforms (batholiths, laccoliths, sills, dykes)',
          '**Plate Tectonics:** Volcanic activity at convergent boundaries, divergent boundaries, and hotspots; Ring of Fire distribution',
          '**Indian Geography:** Deccan Traps formation, Barren Island (India\'s only active volcano), volcanic soils and their fertility',
          '**Disaster Management:** Volcanic hazards (pyroclastic flows, lahars, ash), early warning systems, volcanic winter, eruption preparedness',
          '**Climate & Environment:** Volcanic impact on climate (cooling from aerosols), volcanic winter, mass extinctions, geothermal energy',
          '**Economic Geography:** Volcanic soils and agriculture, geothermal energy resources, volcanic tourism, mineral deposits'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Explain the distribution of volcanoes along the Pacific Ring of Fire. How does plate tectonics account for this distribution?',
            approach: 'Define Ring of Fire (circum-Pacific belt); explain subduction zones around Pacific Plate margins; discuss convergent boundary processes; mention specific regions (Japan, Philippines, Indonesia, Andes, Cascades); explain volcanic arc formation; include hotspot exceptions (Hawaii).'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Differentiate between intrusive and extrusive volcanic landforms with examples. Discuss the economic significance of volcanic regions.',
            approach: 'Define intrusive (plutonic) landforms—batholiths, laccoliths, sills, dykes with examples; define extrusive landforms—shield volcanoes, stratovolcanoes, lava plateaus; discuss economic significance: fertile soils, geothermal energy, minerals, tourism; provide Indian examples (Deccan Traps).'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'Barren Island volcano is located in: (a) Arabian Sea (b) Bay of Bengal (c) Indian Ocean (d) Lakshadweep Sea',
            answer: '(b) Bay of Bengal. Barren Island is India\'s only active volcano, located in the Andaman Sea (part of Bay of Bengal), approximately 135 km from Port Blair. It has erupted multiple times since 1991.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'The Deccan Traps were formed by which type of volcanism? (a) Shield volcano (b) Fissure eruption (c) Stratovolcano (d) Caldera collapse',
            answer: '(b) Fissure eruption. The Deccan Traps formed approximately 66 million years ago through massive fissure eruptions (flood basalts). Lava flowed from cracks, covering over 500,000 km² with basalt layers up to 2,000 m thick.'
          }
        ]
      }
    }
  }
};

// ============================================
// EXPORT
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = volcanoesData;
}
