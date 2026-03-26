/**
 * ISLANDS DATA FILE
 * ========================
 */

const islandsData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Islands',
    icon: '🏝️',
    theme: 'islands-theme',
    existingPagesLink: '../../islands/islands.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is an Island?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=90',
        tagline: 'Land surrounded by water, shaped by geology and life'
      },
      
      content: {
        introduction: 'An island is a piece of land completely surrounded by water, smaller than a continent but large enough to support vegetation and, in some cases, permanent human habitation. Islands range from tiny coral atolls to massive landmasses like Greenland, covering 2.17 million km². They form through volcanic activity, tectonic processes, rising sea levels, sediment deposition, and coral growth. Islands host unique ecosystems with high levels of endemism and play crucial roles in marine biodiversity, cultural diversity, and global climate patterns.',
        
        keyPoints: [
          {
            icon: '🌊',
            label: 'Surrounded by Water',
            text: 'Land entirely enclosed by water',
            detail: 'Islands are distinguished from continents by size and surrounded by water on all sides—ocean, sea, lake, or river. They maintain separation from mainland at high tide. The distinction between large islands and small continents is arbitrary; Australia is considered a continental landmass while Greenland is classified as an island.'
          },
          {
            icon: '🌍',
            label: 'Global Distribution',
            text: 'Over 900,000 islands worldwide',
            detail: 'Islands exist in all oceans and major water bodies. Indonesia has over 17,000 islands, making it the world\'s largest archipelago. The Pacific Ocean contains tens of thousands of islands, from massive New Guinea to tiny coral atolls. Islands cover less than 7% of Earth\'s land surface but host disproportionately high biodiversity.'
          },
          {
            icon: '🌋',
            label: 'Diverse Origins',
            text: 'Multiple formation processes',
            detail: 'Islands form through volcanic eruptions building seamounts above sea level, tectonic uplift raising ocean floor, coral reefs growing on submerged platforms, sediment deposition creating deltaic islands, and rising sea levels isolating high ground. Each formation type produces distinct characteristics and ecosystems.'
          },
          {
            icon: '🦎',
            label: 'Unique Ecosystems',
            text: 'Hotspots of endemism',
            detail: 'Island isolation drives evolution of unique species found nowhere else. The Galápagos Islands host species that inspired Darwin\'s theory of evolution. Madagascar has 90% endemic species. Island ecosystems are vulnerable to invasive species, habitat loss, and climate change, making conservation critical.'
          },
          {
            icon: '👥',
            label: 'Human Settlement',
            text: 'Cultural diversity centers',
            detail: 'Islands have been inhabited for millennia, developing distinct cultures, languages, and traditions. Pacific Islanders navigated thousands of kilometers using stars and currents. Island nations face unique challenges including limited resources, climate vulnerability, and dependence on maritime connections for trade.'
          },
          {
            icon: '🌡️',
            label: 'Climate Vulnerability',
            text: 'Frontline of climate change',
            detail: 'Low-lying islands face existential threats from sea-level rise, with nations like Maldives and Kiribati potentially becoming uninhabitable. Islands experience increased storm intensity, coastal erosion, saltwater intrusion into freshwater, and coral bleaching. Some islands have already been submerged.'
          }
        ],
        
        comparison: {
          title: 'Islands vs. Other Landforms',
          features: [
            {
              feature: 'Water Surrounding',
              mountain: 'Islands: Complete',
              hill: 'Peninsulas: Three sides',
              plateau: 'Continents: Coastal only'
            },
            {
              feature: 'Size Range',
              mountain: 'Islands: Small to large',
              hill: 'Peninsulas: Variable',
              plateau: 'Continents: Very large'
            },
            {
              feature: 'Formation',
              mountain: 'Islands: Multiple processes',
              hill: 'Peninsulas: Erosion/deposition',
              plateau: 'Continents: Tectonic plates'
            },
            {
              feature: 'Isolation',
              mountain: 'Islands: High',
              hill: 'Peninsulas: Connected',
              plateau: 'Continents: Connected'
            },
            {
              feature: 'Ecosystems',
              mountain: 'Islands: High endemism',
              hill: 'Peninsulas: Mainland species',
              plateau: 'Continents: Diverse'
            }
          ]
        },
        
        funFacts: [
          '🌍 Greenland is the world\'s largest island at 2.17 million km², but Australia (7.6 million km²) is classified as a continent',
          '🔥 Iceland gains about 5 cm of land per year as the Mid-Atlantic Ridge pulls apart, creating new volcanic islands',
          '💧 The Maldives is the world\'s flattest country with highest point just 2.4 meters, threatened by sea-level rise',
          '⚡ Indonesia has over 17,500 islands but only about 6,000 are inhabited, with 8,000+ unnamed',
          '🌡️ Socotra Island has 37% endemic plant species, including the bizarre dragon\'s blood tree found nowhere else',
          '📊 Over 730 million people (10% of world population) live on islands, with Java being the most populous island'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Islands',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1600&q=90',
        tagline: 'From volcanic peaks to coral atolls—diverse island types'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'oceanic',
          name: 'Oceanic Islands',
          icon: '🌋',
          color: '#EF4444',
          
          definition: 'Oceanic islands rise from the ocean floor, never connected to continental landmasses. Most form through volcanic activity at mid-ocean ridges, hotspots, or subduction zones. These islands are typically younger geologically, with rocky or volcanic soils. They start as barren volcanic rock but gradually develop ecosystems through colonization by wind-dispersed seeds, ocean currents, and migratory birds. Famous examples include Hawaii, Iceland, and the Galápagos Islands.',
          
          formation: {
            title: 'How Oceanic Islands Form',
            steps: [
              { step: 1, icon: '🔥', text: 'Magma rises from mantle through oceanic crust at hotspot or tectonic boundary' },
              { step: 2, icon: '🌋', text: 'Repeated eruptions build underwater seamount from ocean floor' },
              { step: 3, icon: '⬆️', text: 'Volcanic cone grows upward, eventually breaching sea surface' },
              { step: 4, icon: '🏝️', text: 'Continued eruptions expand island above water, creating new land' },
              { step: 5, icon: '🌱', text: 'Erosion, weathering, and biological colonization transform barren rock into ecosystem' }
            ]
          },
          
          characteristics: [
            'Volcanic origin with basaltic rock composition',
            'No connection to continental shelf',
            'Young geological age (usually < 100 million years)',
            'High levels of species endemism due to isolation',
            'Often arranged in chains following tectonic plate movement',
            'Nutrient-rich volcanic soils support diverse vegetation'
          ]
        },
        {
          id: 'continental',
          name: 'Continental Islands',
          icon: '🏔️',
          color: '#3B82F6',
          
          definition: 'Continental islands sit on continental shelves and were once part of mainland landmasses. They separated through rising sea levels after ice ages, tectonic rifting, or erosion creating channels. These islands share geological and biological heritage with nearby continents. They typically have diverse geology matching the mainland, varied topography, and species that reflect their continental origins. Examples include Great Britain, Madagascar, and Greenland.',
          
          formation: {
            title: 'How Continental Islands Form',
            steps: [
              { step: 1, icon: '❄️', text: 'During ice ages, lower sea levels connect islands to mainland' },
              { step: 2, icon: '🌡️', text: 'Climate warms, glaciers melt, causing sea levels to rise globally' },
              { step: 3, icon: '🌊', text: 'Rising water floods low-lying areas, separating high ground from mainland' },
              { step: 4, icon: '🏝️', text: 'Former peninsulas and highlands become isolated islands' },
              { step: 5, icon: '⏳', text: 'Over time, island ecosystems diverge from mainland due to isolation' }
            ]
          },
          
          characteristics: [
            'Sit on continental shelf within 200m depth',
            'Share geology and rock types with nearby continent',
            'Often large and mountainous with varied terrain',
            'Flora and fauna originally derived from mainland',
            'May have been connected during lower sea levels',
            'Generally older than oceanic islands geologically'
          ]
        },
        {
          id: 'coral',
          name: 'Coral Islands',
          icon: '🪸',
          color: '#06B6D4',
          
          definition: 'Coral islands form from the skeletal remains of coral polyps over thousands of years. They develop on shallow submarine platforms where warm, clear water allows coral reef growth. Atolls are ring-shaped coral islands surrounding lagoons, formed when volcanic islands subside while coral continues growing upward. These low-lying islands rarely exceed a few meters elevation, making them extremely vulnerable to sea-level rise and storms. The Maldives, Marshall Islands, and Kiribati are examples.',
          
          formation: {
            title: 'How Coral Islands Form',
            steps: [
              { step: 1, icon: '🌋', text: 'Volcanic island forms in warm tropical ocean waters' },
              { step: 2, icon: '🪸', text: 'Coral polyps colonize shallow waters around volcanic island, forming fringing reef' },
              { step: 3, icon: '⬇️', text: 'Volcanic island slowly subsides while coral grows upward at same rate' },
              { step: 4, icon: '💍', text: 'Barrier reef forms as island sinks, creating lagoon between island and reef' },
              { step: 5, icon: '🏝️', text: 'Island fully submerges leaving ring-shaped atoll with central lagoon' }
            ]
          },
          
          characteristics: [
            'Composed entirely of calcium carbonate from coral',
            'Extremely low elevation, typically 1-3 meters above sea level',
            'Ring-shaped atolls with central lagoons common',
            'Porous limestone allows limited freshwater retention',
            'Highly vulnerable to climate change and sea-level rise',
            'Support unique ecosystems adapted to coral substrates'
          ]
        },
        {
          id: 'barrier',
          name: 'Barrier Islands',
          icon: '🏖️',
          color: '#F59E0B',
          
          definition: 'Barrier islands are elongated sandy islands parallel to coastlines, separated from the mainland by lagoons or sounds. They form from sediment deposition by waves, currents, and wind, protecting mainland coasts from storm waves and erosion. These dynamic landforms constantly shift through erosion and accretion. Barrier islands have distinct zones: beach, dunes, grasslands, and marshes. The Outer Banks of North Carolina and Padre Island in Texas are prominent examples.',
          
          formation: {
            title: 'How Barrier Islands Form',
            steps: [
              { step: 1, icon: '🌊', text: 'Waves and longshore currents transport sediment along coastline' },
              { step: 2, icon: '🏖️', text: 'Sediment accumulates in shallow water parallel to shore, forming submerged bar' },
              { step: 3, icon: '⬆️', text: 'Bar grows upward through continued sediment deposition until it emerges' },
              { step: 4, icon: '💨', text: 'Wind blows sand inland, creating dunes that stabilize with vegetation' },
              { step: 5, icon: '🦆', text: 'Protected lagoon forms between island and mainland, creating wetland habitat' }
            ]
          },
          
          characteristics: [
            'Elongated shape parallel to coastline',
            'Composed of sand and sediment, not rock',
            'Highly dynamic, constantly changing shape',
            'Separated from mainland by lagoon or sound',
            'Important storm protection for mainland coasts',
            'Support unique dune and wetland ecosystems'
          ]
        },
        {
          id: 'tidal',
          name: 'Tidal Islands',
          icon: '🌊',
          color: '#8B5CF6',
          
          definition: 'Tidal islands are connected to mainland at low tide by natural causeways or tombolo (sand/gravel bar) but become isolated at high tide. They occupy a transitional state between islands and peninsulas. The connection may be a sandy beach, rocky outcrop, or mudflat exposed during tidal recession. These islands have been significant for defensive purposes throughout history. Mont-Saint-Michel in France and St Michael\'s Mount in England are iconic examples.',
          
          formation: {
            title: 'How Tidal Islands Form',
            steps: [
              { step: 1, icon: '🏔️', text: 'Rocky outcrop or hill exists near coastline' },
              { step: 2, icon: '🌊', text: 'Sea level rises or land subsides, partially surrounding the feature' },
              { step: 3, icon: '🏖️', text: 'Wave action deposits sediment creating tombolo or causeway at low tide' },
              { step: 4, icon: '🌗', text: 'Tidal range determines when connection is exposed or submerged' },
              { step: 5, icon: '⚖️', text: 'Balance between erosion and deposition maintains tidal connection' }
            ]
          },
          
          characteristics: [
            'Connected to mainland during low tide',
            'Isolated during high tide',
            'Natural causeway of sand, gravel, or rock',
            'Accessibility varies with tidal cycle',
            'Often historically used for defensive positions',
            'May have mixed terrestrial and marine ecosystems'
          ]
        },
        {
          id: 'river',
          name: 'River Islands',
          icon: '🏞️',
          color: '#10B981',
          
          definition: 'River islands, also called aits or eyots, form in rivers through sediment deposition or channel braiding. They can be permanent or temporary depending on flow variations. Sediment islands form when rivers deposit material around obstructions or where flow velocity decreases. Channel bars emerge when rivers split into multiple channels. River islands provide unique freshwater ecosystems and can be highly dynamic, changing size and position during floods. Majuli in India\'s Brahmaputra River is the world\'s largest river island.',
          
          formation: {
            title: 'How River Islands Form',
            steps: [
              { step: 1, icon: '🌊', text: 'River carries sediment load of sand, silt, and gravel downstream' },
              { step: 2, icon: '🪨', text: 'Obstruction (boulder, fallen tree) or flow decrease causes deposition' },
              { step: 3, icon: '⬆️', text: 'Sediment accumulates around obstruction, building upward' },
              { step: 4, icon: '🌱', text: 'Vegetation colonizes stabilizing sediment, trapping more material' },
              { step: 5, icon: '🏝️', text: 'Island fully forms, river splits into channels around it' }
            ]
          },
          
          characteristics: [
            'Located in rivers rather than oceans or lakes',
            'Composed of alluvial sediment deposits',
            'Highly dynamic, especially during floods',
            'Size varies from small bars to hundreds of square kilometers',
            'Support riparian vegetation and wildlife',
            'May migrate downstream or disappear during extreme floods'
          ]
        },
        {
          id: 'artificial',
          name: 'Artificial Islands',
          icon: '🏗️',
          color: '#EC4899',
          
          definition: 'Artificial islands are human-made landforms created by expanding existing islets, building on reefs, or constructing entirely new islands. Methods include land reclamation through dredging and filling, building platforms on stilts, or floating structures. They serve purposes including urban expansion, agriculture, airports, military bases, and tourism. Modern examples include Dubai\'s Palm Islands, Hong Kong International Airport, and several artificial islands in the South China Sea, though they raise environmental and geopolitical concerns.',
          
          formation: {
            title: 'How Artificial Islands Form',
            steps: [
              { step: 1, icon: '📋', text: 'Site selection based on water depth, purpose, and engineering feasibility' },
              { step: 2, icon: '🚧', text: 'Perimeter established using sheet piling, caissons, or seawall construction' },
              { step: 3, icon: '⚓', text: 'Dredging excavates sediment from seabed or brings fill from elsewhere' },
              { step: 4, icon: '🏗️', text: 'Fill material (sand, rock, soil) pumped or dumped inside perimeter' },
              { step: 5, icon: '🏢', text: 'Land compacted, stabilized, and developed for intended use' }
            ]
          },
          
          characteristics: [
            'Entirely human-constructed or significantly modified',
            'Engineered for specific purposes (airports, cities, defense)',
            'Require ongoing maintenance against erosion',
            'Environmental impacts on marine ecosystems',
            'Often controversial regarding territorial claims',
            'Expensive to construct and maintain'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of Island Types',
        headers: ['Type', 'Formation', 'Key Feature', 'Example'],
        rows: [
          ['Oceanic 🌋', 'Volcanic activity', 'Never connected to mainland', 'Hawaii'],
          ['Continental 🏔️', 'Sea level rise', 'On continental shelf', 'Great Britain'],
          ['Coral 🪸', 'Coral reef growth', 'Low elevation atolls', 'Maldives'],
          ['Barrier 🏖️', 'Sediment deposition', 'Parallel to coast', 'Outer Banks'],
          ['Tidal 🌊', 'Partial submersion', 'Connected at low tide', 'Mont-Saint-Michel'],
          ['River 🏞️', 'Fluvial deposition', 'Within rivers', 'Majuli Island'],
          ['Artificial 🏗️', 'Human construction', 'Man-made', 'Palm Jumeirah']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Islands Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1600&q=90',
        tagline: 'From volcanic eruptions to rising seas—the birth of islands'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Island formation involves diverse geological and biological processes operating over timescales from years to millions of years. Whether through volcanic construction, tectonic movements, or biological accumulation, each island tells a unique story of Earth\'s dynamic systems.',
      
      stages: [
        {
          stage: 1,
          title: 'Initial Emergence',
          timeframe: 'Days to millions of years',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
          
          description: [
            'Land rises above water surface through various processes',
            'Volcanic eruptions build seamounts from ocean floor',
            'Tectonic uplift raises sections of ocean or lake floor',
            'Coral reefs accumulate on submerged platforms',
            'Sediment deposits form bars and islands in rivers or coasts',
            'Rising sea levels isolate high ground from mainland'
          ],
          
          geologicalProcess: 'Island emergence requires either land rising or water level changing relative to each other. Volcanic islands grow through effusive or explosive eruptions, with magma from mantle hotspots or subduction zones building seamounts that breach sea level. Tectonic forces can uplift ocean floor along fault zones. Coral polyps secrete calcium carbonate skeletons that accumulate over millennia. Sediment transported by water or wind deposits in specific patterns forming bars and islands. Post-glacial sea level rise drowns valleys, leaving peaks as islands.',
          
          keyFeatures: [
            'Land surface elevation above surrounding water',
            'Distinct boundary between land and water',
            'Foundation capable of supporting emerged land'
          ],
          
          evidence: [
            'Volcanic rocks indicate magmatic origin',
            'Coral limestone reveals biological construction'
          ]
        },
        {
          stage: 2,
          title: 'Land Stabilization',
          timeframe: 'Years to thousands of years',
          image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80',
          
          description: [
            'Newly emerged land undergoes weathering and erosion',
            'Volcanic islands cool and solidify',
            'Sediment islands consolidate through compaction',
            'Coral structures lithify (harden into rock)',
            'Coastline develops through wave action',
            'Initial soil formation begins from rock weathering'
          ],
          
          geologicalProcess: 'Fresh volcanic rock weathers through chemical and physical processes, creating initial soil substrates. Rain, temperature fluctuations, and chemical reactions break down minerals. Wave action shapes coastlines, creating beaches, cliffs, and sea stacks. Sedimentary islands consolidate as weight compresses loose material. Coral calcium carbonate transforms from skeletal material into solid limestone through diagenesis. Groundwater percolates through porous materials, sometimes creating freshwater lenses in coral islands.',
          
          keyFeatures: [
            'Stable substrate resistant to immediate erosion',
            'Defined coastline with beach or cliff formation',
            'Initial weathered material providing soil precursors'
          ],
          
          evidence: [
            'Weathering rinds on volcanic rocks',
            'Beach deposits and coastal landforms'
          ]
        },
        {
          stage: 3,
          title: 'Biological Colonization',
          timeframe: 'Decades to centuries',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
          
          description: [
            'Pioneer species arrive and establish',
            'Wind carries seeds, spores, and insects',
            'Ocean currents deliver floating seeds and marine larvae',
            'Migratory birds transport seeds and establish seabird colonies',
            'Bacteria and lichens begin soil formation',
            'Marine organisms colonize intertidal zones'
          ],
          
          geologicalProcess: 'Biological colonization transforms barren rock into living ecosystem. Bacteria and lichens break down rock, creating initial organic matter. Wind-dispersed seeds from grasses, ferns, and pioneer plants arrive first. Coconuts and sea beans drift on currents to colonize shores. Birds bring seeds in digestive systems or stuck to feathers. Seabird guano enriches soil with nutrients. Marine organisms establish in tidal zones. Colonization rate depends on distance from source populations—closer islands receive more colonists.',
          
          keyFeatures: [
            'Presence of pioneer vegetation (grasses, ferns, shrubs)',
            'Soil development with organic matter incorporation',
            'Establishment of basic food webs'
          ],
          
          evidence: [
            'Lichen growth on rocks indicates biological activity',
            'Seabird nesting colonies and guano deposits'
          ]
        },
        {
          stage: 4,
          title: 'Ecosystem Development',
          timeframe: 'Centuries to millennia',
          image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80',
          
          description: [
            'Ecological succession progresses to mature communities',
            'Forest develops on larger islands with sufficient rainfall',
            'Endemic species evolve through isolation',
            'Trophic levels expand with predators and herbivores',
            'Soil deepens and becomes more fertile',
            'Freshwater sources establish (if island large enough)'
          ],
          
          geologicalProcess: 'Ecological succession transforms pioneer communities into complex ecosystems. Early colonists modify environment making it suitable for later arrivals. Leaf litter and organic matter accumulate, deepening soil. On volcanic islands, weathering creates nutrient-rich soils supporting forests. Island isolation drives speciation—populations adapt to local conditions, evolving into endemic species. Galápagos finches exemplify adaptive radiation from single ancestor. Larger islands support more species and complex food webs. Groundwater accumulates in aquifers, emerging as springs.',
          
          keyFeatures: [
            'Diverse plant communities with multiple species',
            'Stratified vegetation (ground cover, shrubs, trees)',
            'Endemic species unique to the island'
          ],
          
          evidence: [
            'Fossil pollen showing succession of plant communities',
            'Genetic studies revealing endemic species evolution'
          ]
        },
        {
          stage: 5,
          title: 'Mature Island Dynamics',
          timeframe: 'Thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80',
          
          description: [
            'Island reaches ecological equilibrium',
            'Erosion shapes topography into valleys and peaks',
            'Coral reefs develop around volcanic islands',
            'Human arrival may transform ecosystems',
            'Long-term subsidence or erosion reduces island size',
            'Climate changes affect island ecosystems and extent'
          ],
          
          geologicalProcess: 'Mature islands balance constructive and destructive forces. Volcanic islands erode through rainfall creating drainage networks, valleys, and coastal cliffs. Coral reefs grow around subsiding volcanic islands, forming barrier reefs and eventually atolls. Tectonic subsidence lowers islands gradually. Climate oscillations during ice ages raise and lower sea levels, changing island size and connectivity. Human colonization dramatically alters islands through deforestation, introduced species, agriculture, and hunting, often causing extinctions. Some islands eventually erode completely or submerge, becoming guyots (flat-topped seamounts).',
          
          keyFeatures: [
            'Complex topography with erosional features',
            'Mature ecosystems with high biodiversity',
            'Balance between geological and biological processes'
          ],
          
          evidence: [
            'Eroded volcanic cones and U-shaped valleys',
            'Archaeological sites documenting human settlement'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Atoll',
            pronunciation: '(A-toll)',
            definition: 'A ring-shaped coral reef, island, or series of islets surrounding a central lagoon. Atolls form when volcanic islands subside while coral continues growing upward, eventually leaving only the reef.',
            example: 'The Marshall Islands consist of 29 atolls with ring-shaped coral formations enclosing turquoise lagoons, formed over millions of years.',
            relatedTerms: ['Coral reef', 'Lagoon', 'Barrier reef']
          },
          {
            term: 'Hotspot',
            pronunciation: '(HOT-spot)',
            definition: 'A location in Earth\'s mantle where a plume of hot magma rises toward the surface, creating volcanic activity. As tectonic plates move over stationary hotspots, chains of volcanic islands form.',
            example: 'The Hawaiian Islands formed as the Pacific Plate moved northwest over a mantle hotspot, creating a chain of progressively older islands.',
            relatedTerms: ['Mantle plume', 'Volcanic island', 'Island chain']
          },
          {
            term: 'Endemism',
            pronunciation: '(en-DEM-iz-um)',
            definition: 'The ecological state of a species being unique to a specific geographic location and found nowhere else on Earth. Islands have high endemism due to isolation promoting speciation.',
            example: 'Madagascar has 90% plant endemism, with species like the baobab tree and many lemurs found only on that island.',
            relatedTerms: ['Speciation', 'Adaptive radiation', 'Biogeography']
          },
          {
            term: 'Archipelago',
            pronunciation: '(ar-kih-PEL-uh-go)',
            definition: 'A group, chain, or cluster of islands. Archipelagos can form through volcanic activity along tectonic boundaries, hotspot chains, or rising sea levels fragmenting larger landmasses.',
            example: 'The Indonesian Archipelago contains over 17,500 islands formed by volcanic activity where the Indo-Australian Plate subducts beneath the Eurasian Plate.',
            relatedTerms: ['Island chain', 'Island arc', 'Volcanic arc']
          },
          {
            term: 'Tombolo',
            pronunciation: '(TOM-boh-loh)',
            definition: 'A deposition landform where sand or gravel creates a narrow connection between an island and the mainland or between two islands. Often associated with tidal islands.',
            example: 'Mont-Saint-Michel in France is connected to the mainland by a tombolo that is submerged at high tide, making it an island twice daily.',
            relatedTerms: ['Tidal island', 'Sand spit', 'Barrier island']
          },
          {
            term: 'Seamount',
            pronunciation: '(SEE-mount)',
            definition: 'An underwater mountain rising from the ocean floor, typically of volcanic origin, that does not reach the surface. If it once breached the surface and eroded flat, it\'s called a guyot.',
            example: 'The Emperor Seamount chain extends northwest from Hawaii, consisting of underwater volcanoes formed by the Hawaiian hotspot millions of years ago.',
            relatedTerms: ['Guyot', 'Volcanic island', 'Hotspot']
          },
          {
            term: 'Subsidence',
            pronunciation: '(sub-SY-dense)',
            definition: 'The gradual sinking or lowering of land or oceanic crust. Volcanic islands subside as the lithosphere cools and densifies, while coral reefs may grow upward maintaining surface elevation.',
            example: 'The Hawaiian Islands subside several millimeters per year as the volcanic rock cools, eventually becoming atolls or submerged guyots.',
            relatedTerms: ['Atoll formation', 'Tectonic movement', 'Isostasy']
          },
          {
            term: 'Adaptive Radiation',
            pronunciation: '(uh-DAP-tiv ray-dee-AY-shun)',
            definition: 'Rapid evolutionary diversification of a single ancestral species into multiple species adapted to different ecological niches, common on isolated islands with diverse habitats.',
            example: 'Darwin\'s finches on the Galápagos Islands evolved from one ancestral species into 18 species with different beak shapes adapted to specific food sources.',
            relatedTerms: ['Endemism', 'Speciation', 'Island biogeography']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Islands of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=90',
        tagline: 'Explore the world\'s most remarkable islands'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the volcanic landscapes of Iceland to the coral atolls of the Maldives, from ancient Madagascar to newly formed Surtsey, islands showcase Earth\'s geological creativity and biological diversity. Visit our comprehensive islands page to explore detailed information about the world\'s most significant islands, their unique ecosystems, cultural heritage, and their critical role in understanding evolution, climate, and ocean processes.',
      
      linkToExisting: '../../islands/islands.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Islands are crucial for UPSC Geography, covering topics from physical geography and oceanography to biodiversity, international relations, and climate change. Understanding island formation, ecosystems, and geopolitical significance is essential for comprehensive exam preparation.',
        
        topics: [
          '**Physical Geography:** Island formation processes (volcanic, coral, tectonic), atoll development, and coastal geomorphology',
          '**Biodiversity & Ecology:** Island biogeography, endemism, conservation hotspots, and vulnerable ecosystems',
          '**Indian Geography:** Andaman & Nicobar Islands, Lakshadweep, island territories, strategic importance, and tribal communities',
          '**International Relations:** Island disputes (South China Sea, Kuril Islands), EEZ (Exclusive Economic Zone), and maritime boundaries',
          '**Climate Change:** Sea-level rise impacts, small island developing states (SIDS), climate refugees, and adaptation strategies',
          '**Disaster Management:** Tsunami vulnerability, volcanic eruptions on island nations, cyclone exposure, and early warning systems'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Discuss the ecological significance of the Andaman and Nicobar Islands. What are the major threats to their biodiversity and how can they be mitigated?',
            approach: 'Explain unique biodiversity: coral reefs, tropical rainforests, endemic species (Nicobar megapode, Andaman wild pig); discuss threats: deforestation, invasive species, tourism impact, climate change; suggest mitigation: protected areas, sustainable tourism, community participation, restoration projects; highlight Biosphere Reserves and conservation efforts.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Examine the geopolitical significance of islands in the Indo-Pacific region. How do island disputes affect regional security?',
            approach: 'Identify strategic islands: South China Sea islands, Andaman & Nicobar; explain importance: EEZ, maritime trade routes, military bases; discuss disputes: Spratly Islands, Kuril Islands; analyze impacts on regional security, UNCLOS provisions; suggest conflict resolution mechanisms.'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'The Lakshadweep Islands are classified as: (a) Volcanic islands (b) Coral islands (c) Continental islands (d) Barrier islands',
            answer: '(b) Coral islands. Lakshadweep consists of coral atolls formed by coral reef growth on submerged platforms. They are low-lying with highest elevation under 5 meters, composed entirely of coral limestone and sand.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'Which of the following island groups is of volcanic origin? (a) Lakshadweep (b) Maldives (c) Andaman & Nicobar (d) Seychelles',
            answer: '(c) Andaman & Nicobar Islands. These islands are part of a volcanic arc formed by subduction of the Indian Plate beneath the Eurasian Plate. They have volcanic and sedimentary rock formations, unlike the coral-based Lakshadweep and Maldives.'
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
  module.exports = islandsData;
}
