/**
 * CORAL REEFS DATA FILE
 * ========================
 */

const coralReefsData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Coral Reefs',
    icon: '🪸',
    theme: 'coral-reefs-theme',
    existingPagesLink: '../../coral-reefs/coral-reefs.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is a Coral Reef?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1600&q=90',
        tagline: 'Underwater rainforests built by billions of tiny architects'
      },
      
      content: {
        introduction: 'Coral reefs are underwater ecosystems built from the calcium carbonate skeletons secreted by colonies of tiny animals called coral polyps. Often called the "rainforests of the sea," coral reefs cover less than 0.1% of the ocean floor but support approximately 25% of all marine species. These magnificent structures form in warm, shallow, clear tropical waters, creating biodiversity hotspots that provide food, coastal protection, and livelihoods for over 500 million people worldwide. Despite their importance, coral reefs face existential threats from climate change, ocean acidification, and human activities.',
        
        keyPoints: [
          {
            icon: '🐠',
            label: 'Marine Biodiversity',
            text: 'Home to 25% of ocean species',
            detail: 'Coral reefs support extraordinary biodiversity despite covering only 0.1% of the ocean floor. They provide habitat for over 4,000 fish species, 800 hard coral species, and countless invertebrates, algae, and microorganisms. This biodiversity rivals tropical rainforests, earning coral reefs the nickname "rainforests of the sea."'
          },
          {
            icon: '🏗️',
            label: 'Living Structures',
            text: 'Built by billions of coral polyps',
            detail: 'Coral reefs are living structures constructed by tiny animals called polyps (typically 1-3mm wide) that secrete calcium carbonate exoskeletons. Over centuries to millennia, these skeletons accumulate, forming massive reef structures. The Great Barrier Reef contains billions of individual polyps building the world\'s largest living structure.'
          },
          {
            icon: '🌡️',
            label: 'Temperature Requirements',
            text: 'Thrive in warm tropical waters',
            detail: 'Reef-building corals require specific conditions: water temperature between 23-29°C, shallow depths (usually <70 meters) for sunlight penetration, clear water with low sediment, and normal ocean salinity. These requirements restrict coral reefs to tropical and subtropical regions between approximately 30°N and 30°S latitude.'
          },
          {
            icon: '🤝',
            label: 'Symbiotic Relationship',
            text: 'Partnership with zooxanthellae algae',
            detail: 'Coral polyps have a mutualistic relationship with microscopic algae called zooxanthellae living in their tissues. The algae photosynthesize, providing corals with up to 90% of their energy needs. In return, corals provide the algae with shelter and nutrients. This partnership is crucial—when stressed, corals expel zooxanthellae, causing coral bleaching.'
          },
          {
            icon: '🛡️',
            label: 'Coastal Protection',
            text: 'Natural barriers against waves',
            detail: 'Coral reefs act as natural breakwaters, reducing wave energy by an average of 97% before waves reach shore. They protect coastlines from erosion, storm surge, and tsunamis, safeguarding coastal communities and infrastructure. The economic value of this coastal protection service is estimated at $9 billion annually worldwide.'
          },
          {
            icon: '⚠️',
            label: 'Climate Vulnerability',
            text: 'Threatened by warming oceans',
            detail: 'Coral reefs are among the most climate-vulnerable ecosystems. Rising ocean temperatures cause mass bleaching events; ocean acidification from absorbed CO₂ inhibits calcium carbonate formation; extreme weather intensifies. Since the 1980s, the world has lost approximately 50% of its coral reefs, with projections suggesting 90% loss by 2050 under current warming scenarios.'
          }
        ],
        
        comparison: {
          title: 'Coral Reefs vs. Other Marine Ecosystems',
          features: [
            {
              feature: 'Biodiversity',
              mountain: 'Coral Reefs: Extremely high',
              hill: 'Kelp Forests: High',
              plateau: 'Open Ocean: Low'
            },
            {
              feature: 'Primary Producers',
              mountain: 'Coral Reefs: Zooxanthellae',
              hill: 'Kelp Forests: Macroalgae',
              plateau: 'Open Ocean: Phytoplankton'
            },
            {
              feature: 'Water Depth',
              mountain: 'Coral Reefs: Shallow (<70m)',
              hill: 'Kelp Forests: Shallow-mid',
              plateau: 'Open Ocean: All depths'
            },
            {
              feature: 'Temperature',
              mountain: 'Coral Reefs: Warm (23-29°C)',
              hill: 'Kelp Forests: Cool-cold',
              plateau: 'Open Ocean: Variable'
            },
            {
              feature: 'Structure',
              mountain: 'Coral Reefs: Calcium carbonate',
              hill: 'Kelp Forests: Organic tissue',
              plateau: 'Open Ocean: No structure'
            }
          ]
        },
        
        funFacts: [
          '🌍 The Great Barrier Reef is the largest living structure on Earth, visible from space and spanning 2,300 km',
          '🔥 Coral reefs have existed for over 240 million years, surviving five mass extinction events',
          '💧 A single coral colony can contain millions of individual polyps working together as a superorganism',
          '⚡ Some corals can live for over 4,000 years, making them among Earth\'s oldest living organisms',
          '🌡️ Coral reefs generate approximately $375 billion in economic value annually through tourism, fisheries, and coastal protection',
          '📊 Despite covering only 0.1% of the ocean, coral reefs provide food and livelihoods for over 500 million people'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Coral Reefs',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1600&q=90',
        tagline: 'From fringing reefs to magnificent atolls'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'fringing',
          name: 'Fringing Reefs',
          icon: '🏖️',
          color: '#3B82F6',
          
          definition: 'Fringing reefs are the most common type of coral reef, growing directly from the shore with little or no separation from land. They form a narrow, continuous platform along coastlines, typically extending 50-100 meters from shore with a shallow lagoon or no lagoon at all. These are the youngest type of reef, representing the first stage in Darwin\'s reef development theory. Fringing reefs are found throughout the Caribbean, Red Sea, and along the coasts of many Pacific islands.',
          
          formation: {
            title: 'How Fringing Reefs Form',
            steps: [
              { step: 1, icon: '🏝️', text: 'Coral larvae settle on shallow rocky shoreline in warm, clear water' },
              { step: 2, icon: '🪸', text: 'Polyps establish colonies and begin secreting calcium carbonate skeletons' },
              { step: 3, icon: '📈', text: 'Reef grows upward toward sunlight and outward from shore' },
              { step: 4, icon: '🌊', text: 'Wave action shapes reef crest facing open ocean' },
              { step: 5, icon: '🏖️', text: 'Narrow or absent lagoon between reef and shore characterizes fringing reef' }
            ]
          },
          
          characteristics: [
            'Directly attached to shore with minimal separation',
            'Narrow or absent lagoon between reef and land',
            'Typically 50-100 meters wide, extending from shore',
            'Most common reef type globally',
            'Youngest stage in reef development sequence',
            'Vulnerable to land-based pollution and runoff'
          ]
        },
        {
          id: 'barrier',
          name: 'Barrier Reefs',
          icon: '🌊',
          color: '#06B6D4',
          
          definition: 'Barrier reefs are separated from the mainland or island shore by a deep, wide lagoon. These massive reef structures run parallel to the coast, sometimes for hundreds of kilometers. The lagoon between reef and shore can be several kilometers wide and tens of meters deep, providing protected habitat for diverse marine life. The Great Barrier Reef off Australia\'s northeast coast is the world\'s largest barrier reef system, while Belize\'s Barrier Reef is the second largest.',
          
          formation: {
            title: 'How Barrier Reefs Form',
            steps: [
              { step: 1, icon: '🏖️', text: 'Begins as fringing reef along volcanic island or continental coast' },
              { step: 2, icon: '⬇️', text: 'Island subsides or sea level rises, increasing distance from shore' },
              { step: 3, icon: '⬆️', text: 'Coral grows upward to maintain position in sunlit zone' },
              { step: 4, icon: '🌊', text: 'Wide, deep lagoon develops between reef and receding shoreline' },
              { step: 5, icon: '🪸', text: 'Barrier reef continues growing while separated from land by lagoon' }
            ]
          },
          
          characteristics: [
            'Separated from shore by wide, deep lagoon',
            'Runs parallel to coastline, sometimes for hundreds of km',
            'Lagoon depth typically 10-75 meters',
            'Second stage in Darwin\'s reef development sequence',
            'Provides protected lagoon habitat',
            'Includes the world\'s largest reef systems'
          ]
        },
        {
          id: 'atoll',
          name: 'Atolls',
          icon: '💍',
          color: '#10B981',
          
          definition: 'Atolls are ring-shaped coral reefs, islands, or chains of islands surrounding a central lagoon with no land in the center. They are among the most distinctive coral formations, typically circular or oval in shape. Atolls form when volcanic islands completely subside below sea level while coral continues growing upward, eventually leaving only the reef ring. Famous examples include the Maldives (entirely composed of atolls), Bikini Atoll, and numerous atolls across the Pacific and Indian Oceans.',
          
          formation: {
            title: 'How Atolls Form',
            steps: [
              { step: 1, icon: '🌋', text: 'Volcanic island forms in warm tropical ocean (often at hotspot)' },
              { step: 2, icon: '🪸', text: 'Fringing reef develops around island\'s shoreline' },
              { step: 3, icon: '⬇️', text: 'Island subsides as volcanic rock cools and contracts' },
              { step: 4, icon: '⬆️', text: 'Coral grows upward as island sinks, forming barrier reef with lagoon' },
              { step: 5, icon: '💍', text: 'Island completely submerges, leaving ring-shaped atoll around lagoon' }
            ]
          },
          
          characteristics: [
            'Ring or horseshoe shape surrounding central lagoon',
            'No central island—completely surrounds water',
            'Represents final stage in Darwin\'s reef sequence',
            'Lagoon depth typically 50-80 meters',
            'Formed through complete island subsidence',
            'Most common in Pacific and Indian Oceans'
          ]
        },
        {
          id: 'patch',
          name: 'Patch Reefs',
          icon: '🎯',
          color: '#F59E0B',
          
          definition: 'Patch reefs are small, isolated coral formations that grow up from the bottom of island platforms or continental shelves, often within lagoons of other reef types. They are typically circular or oval and range from a few meters to several hundred meters in diameter. Unlike the continuous structures of fringing or barrier reefs, patch reefs are scattered formations that provide important habitat diversity. They\'re common in the Caribbean, particularly in the lagoons of barrier reefs and around atolls.',
          
          formation: {
            title: 'How Patch Reefs Form',
            steps: [
              { step: 1, icon: '🪨', text: 'Coral larvae settle on isolated rocky outcrops or hard substrate' },
              { step: 2, icon: '🪸', text: 'Colonies establish and grow upward from seafloor' },
              { step: 3, icon: '⭕', text: 'Reef develops circular/oval shape around initial settlement point' },
              { step: 4, icon: '📍', text: 'Remains isolated from other reefs, surrounded by sand or seagrass' },
              { step: 5, icon: '🎯', text: 'Multiple patch reefs may form scattered pattern in lagoon or shelf' }
            ]
          },
          
          characteristics: [
            'Small, isolated formations on shallow platforms',
            'Circular or oval shape, typically <1 km diameter',
            'Often found within lagoons of larger reef systems',
            'Surrounded by sand, mud, or seagrass beds',
            'Provide isolated habitat "islands" for marine life',
            'Common in Caribbean and Indo-Pacific lagoons'
          ]
        },
        {
          id: 'bank',
          name: 'Bank/Platform Reefs',
          icon: '🏔️',
          color: '#8B5CF6',
          
          definition: 'Bank reefs (also called platform reefs) are isolated coral formations on continental shelves or oceanic platforms that have no relationship to nearby islands. They grow on submerged banks or platforms, often forming irregular shapes or linear features. These reefs can be massive, sometimes exceeding 100 km in length. They differ from other reef types by their isolated position away from land. The Saya de Malha Bank in the Indian Ocean is one of the largest submerged bank reef systems.',
          
          formation: {
            title: 'How Bank Reefs Form',
            steps: [
              { step: 1, icon: '🏔️', text: 'Coral colonizes shallow submerged platform or seamount top' },
              { step: 2, icon: '🪸', text: 'Reef grows upward and outward from platform edges' },
              { step: 3, icon: '📏', text: 'Develops irregular or linear shape following platform contours' },
              { step: 4, icon: '🌊', text: 'Remains isolated from mainland or islands' },
              { step: 5, icon: '🏝️', text: 'May develop shallow central area or small sand cays' }
            ]
          },
          
          characteristics: [
            'Isolated from land on continental shelf or oceanic platform',
            'Irregular or linear shape following underwater topography',
            'Can be extremely large (>100 km)',
            'Not associated with coastal features',
            'May have shallow lagoon-like central areas',
            'Important in regions far from continental coasts'
          ]
        },
        {
          id: 'apron',
          name: 'Apron Reefs',
          icon: '🎭',
          color: '#EC4899',
          
          definition: 'Apron reefs are coral formations found along the margins of carbonate platforms, growing outward and downward like an apron from the platform edge. They typically extend from shallow water down steep slopes into deeper water. These reefs characteristically have a distinct spur-and-groove structure perpendicular to the platform edge. Apron reefs are particularly common in the Bahamas and other carbonate platform regions where they create dramatic underwater topography.',
          
          formation: {
            title: 'How Apron Reefs Form',
            steps: [
              { step: 1, icon: '🏔️', text: 'Coral establishes on edge of shallow carbonate platform' },
              { step: 2, icon: '⬇️', text: 'Reef grows outward over platform edge and down the slope' },
              { step: 3, icon: '〰️', text: 'Wave action creates spur-and-groove formations perpendicular to edge' },
              { step: 4, icon: '🎭', text: 'Reef drapes platform margin like an apron' },
              { step: 5, icon: '📐', text: 'Continues growing on both shallow platform and steep slope' }
            ]
          },
          
          characteristics: [
            'Grows along edges of carbonate platforms',
            'Extends from shallow water down steep slopes',
            'Distinctive spur-and-groove structure',
            'Drapes platform margin like an apron',
            'Common in Bahamas and Caribbean platforms',
            'Transitions between shallow and deep water habitats'
          ]
        },
        {
          id: 'ribbon',
          name: 'Ribbon Reefs',
          icon: '🎀',
          color: '#EF4444',
          
          definition: 'Ribbon reefs are long, narrow reefs that run roughly parallel to the edge of the continental shelf, typically in deep water. They are characterized by their elongated, sinuous shape and may extend for many kilometers. Unlike barrier reefs, ribbon reefs occur in deeper water (often 30-100+ meters) at shelf edges. The Great Barrier Reef system includes numerous ribbon reefs along its outer edge, forming a nearly continuous chain along the continental shelf margin.',
          
          formation: {
            title: 'How Ribbon Reefs Form',
            steps: [
              { step: 1, icon: '📏', text: 'Coral colonizes edge of continental shelf or submerged platform' },
              { step: 2, icon: '〰️', text: 'Linear growth follows shelf break contour' },
              { step: 3, icon: '🌊', text: 'Strong currents along shelf edge promote growth' },
              { step: 4, icon: '🎀', text: 'Elongated, sinuous ribbon shape develops' },
              { step: 5, icon: '⛓️', text: 'Multiple ribbon reefs may form parallel chains' }
            ]
          },
          
          characteristics: [
            'Long, narrow, sinuous shape',
            'Located along continental shelf edges',
            'Often in deeper water (30-100+ meters)',
            'Parallel to shelf break',
            'Exposed to strong oceanic currents',
            'May form chains of multiple ribbon reefs'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of Reef Types',
        headers: ['Type', 'Location', 'Key Feature', 'Example'],
        rows: [
          ['Fringing 🏖️', 'Attached to shore', 'Direct coastal contact', 'Red Sea reefs'],
          ['Barrier 🌊', 'Parallel to coast', 'Wide lagoon separation', 'Great Barrier Reef'],
          ['Atoll 💍', 'Open ocean', 'Ring around lagoon', 'Maldives'],
          ['Patch 🎯', 'Within lagoons', 'Isolated circular', 'Caribbean patches'],
          ['Bank 🏔️', 'On platforms', 'Isolated from land', 'Saya de Malha'],
          ['Apron 🎭', 'Platform edges', 'Drapes slope', 'Bahamas reefs'],
          ['Ribbon 🎀', 'Shelf breaks', 'Long and narrow', 'GBR ribbon reefs']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Coral Reefs Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=90',
        tagline: 'From single polyp to massive reef—millennia in the making'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Coral reef formation is a complex biological and geological process spanning thousands to millions of years. Individual polyps build calcium carbonate skeletons that accumulate layer upon layer, eventually creating massive structures. The process depends on specific environmental conditions, symbiotic relationships, and ongoing biological and physical processes.',
      
      stages: [
        {
          stage: 1,
          title: 'Larval Settlement',
          timeframe: 'Days to weeks',
          image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200&q=80',
          
          description: [
            'Coral larvae (planulae) drift with ocean currents',
            'Chemical and physical cues trigger settlement on suitable substrate',
            'Hard, stable surfaces in warm, clear, shallow water are preferred',
            'Multiple larvae may settle together, beginning colony formation',
            'Settlement typically occurs on existing rock, dead coral, or artificial structures',
            'Critical first step determining future reef location and orientation'
          ],
          
          geologicalProcess: 'Coral reproduction occurs sexually through mass spawning events—many coral colonies simultaneously release eggs and sperm into the water column. Fertilized eggs develop into planula larvae that swim and drift for days to weeks, dispersing by ocean currents. When larvae encounter suitable substrate (hard, stable, in appropriate water conditions), chemical signals trigger metamorphosis and settlement. The larva attaches permanently, transforms into a polyp, and begins secreting a calcium carbonate base plate—the foundation of a new coral colony.',
          
          keyFeatures: [
            'Free-swimming planula larvae seeking settlement sites',
            'Specific environmental requirements for settlement',
            'Permanent attachment to hard substrate'
          ],
          
          evidence: [
            'Direct observation of mass spawning and larval settlement',
            'Chemical analyses of settlement cues and triggers'
          ]
        },
        {
          stage: 2,
          title: 'Polyp Development & Colony Growth',
          timeframe: 'Months to years',
          image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
          
          description: [
            'Settled polyp develops tentacles and begins feeding',
            'Zooxanthellae algae establish symbiotic relationship in polyp tissues',
            'Polyp divides asexually through budding, creating clone colonies',
            'Each new polyp secretes its own calcium carbonate skeleton',
            'Colony expands outward and upward as polyps multiply',
            'Different coral species exhibit distinct growth forms (branching, massive, plate)'
          ],
          
          geologicalProcess: 'The initial polyp undergoes asexual reproduction through budding—creating genetically identical polyps that remain connected. Each polyp continuously secretes calcium carbonate (CaCO₃) extracted from seawater, building cup-like corallites around its body. Zooxanthellae algae living symbiotically in polyp tissues provide energy through photosynthesis, enabling rapid calcification. Coral growth rates vary by species: branching corals may grow 10-20 cm/year, while massive boulder corals grow only 0.5-2 cm/year. The resulting colony takes species-specific shapes determined by budding patterns and environmental conditions.',
          
          keyFeatures: [
            'Asexual budding creating genetically identical polyp colonies',
            'Continuous calcium carbonate skeleton secretion',
            'Symbiosis with zooxanthellae providing energy for growth'
          ],
          
          evidence: [
            'Growth band analysis (similar to tree rings) in coral skeletons',
            'Fluorescent markers tracking coral growth rates'
          ]
        },
        {
          stage: 3,
          title: 'Reef Framework Construction',
          timeframe: 'Decades to centuries',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=90',
          
          description: [
            'Multiple coral colonies grow and merge into continuous framework',
            'Living corals build upon skeletons of dead predecessors',
            'Coralline algae cement coral fragments together',
            'Reef structure develops three-dimensional complexity',
            'Wave action breaks coral fragments, creating rubble and sand',
            'Framework provides habitat for diverse marine organisms'
          ],
          
          geologicalProcess: 'As coral colonies grow, they eventually contact and fuse with neighbors, creating a continuous carbonate framework. Living coral tissue forms only the outer surface layer; beneath lies accumulated skeleton of previous generations. Coralline algae—calcareous red algae—grows between and over coral structures, secreting calcium carbonate that acts as natural cement binding the framework. Physical and biological erosion (waves, boring organisms, parrotfish grazing) breaks coral into fragments that fill reef interstices. This creates a complex three-dimensional structure with caves, crevices, and overhangs supporting high biodiversity.',
          
          keyFeatures: [
            'Three-dimensional carbonate framework accumulation',
            'Coralline algae cementing reef structure',
            'Complex habitat structures supporting diverse communities'
          ],
          
          evidence: [
            'Core samples revealing centuries of vertical reef growth',
            'Ancient reef frameworks preserved in uplifted fossil reefs'
          ]
        },
        {
          stage: 4,
          title: 'Reef Zonation & Maturation',
          timeframe: 'Centuries to millennia',
          image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80',
          
          description: [
            'Distinct reef zones develop based on depth, wave energy, and light',
            'Reef crest forms at wave impact zone with robust corals',
            'Fore reef slopes into deeper water with varying coral types',
            'Back reef or lagoon develops in protected areas',
            'Reef flat may emerge at low tide in mature reefs',
            'Each zone supports characteristic coral species and communities'
          ],
          
          geologicalProcess: 'Mature reefs develop distinct ecological zones controlled by environmental gradients. The reef crest faces maximum wave energy and hosts sturdy, fast-growing branching corals and coralline algae that withstand wave impact. The fore reef slope extends to deeper water, with light availability and wave energy decreasing with depth—supporting plate-like and massive corals adapted to lower light. Behind the crest, the reef flat and lagoon provide protected environments with different conditions favoring seagrasses, patch reefs, and sediment accumulation. This zonation maximizes biodiversity by creating multiple habitat types within the reef ecosystem.',
          
          keyFeatures: [
            'Distinct ecological zones (crest, fore reef, back reef, lagoon)',
            'Species composition reflecting environmental gradients',
            'Reef flat potentially emerging at low tide'
          ],
          
          evidence: [
            'Transect studies documenting species distributions across zones',
            'Fossil reefs preserving ancient zonation patterns'
          ]
        },
        {
          stage: 5,
          title: 'Long-term Reef Evolution',
          timeframe: 'Millennia to millions of years',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
          
          description: [
            'Reef development tracks sea-level changes over geological time',
            'Subsiding volcanic islands transform fringing reefs into barrier reefs, then atolls',
            'Reefs grow upward during sea-level rise, maintaining position in photic zone',
            'Climate oscillations cause reef growth and death cycles',
            'Uplift may expose ancient reefs as fossil limestone',
            'Modern reefs face accelerated changes from anthropogenic climate change'
          ],
          
          geologicalProcess: 'Coral reefs respond to long-term geological and climatic changes. Darwin\'s subsidence theory explains atoll formation: volcanic islands subside while fringing reefs grow upward, progressing through barrier reef to atoll stages over millions of years. During glacial-interglacial cycles, sea-level fluctuations of 120+ meters exposed reefs during ice ages (causing reef death) and submerged them during warm periods (promoting upward growth). Reef cores from the Great Barrier Reef reveal multiple episodes of reef growth and hiatus corresponding to Pleistocene climate cycles. Anthropogenic climate change now threatens reefs with warming rates exceeding their adaptive capacity.',
          
          keyFeatures: [
            'Reef development following Darwin\'s subsidence sequence',
            'Response to sea-level changes and climate cycles',
            'Accumulation of massive carbonate platforms over millions of years'
          ],
          
          evidence: [
            'Reef drill cores revealing thousands of years of growth history',
            'Fossil reefs documenting ancient reef ecosystems and extinctions'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Coral Polyp',
            pronunciation: '(KOR-ul POL-ip)',
            definition: 'The individual soft-bodied animal (typically 1-3mm diameter) that builds coral reefs. Polyps are cnidarians related to jellyfish and sea anemones, living in colonies where they secrete calcium carbonate skeletons.',
            example: 'A single brain coral colony may contain millions of individual polyps, each with tentacles that capture plankton at night.',
            relatedTerms: ['Corallite', 'Colony', 'Cnidarian']
          },
          {
            term: 'Zooxanthellae',
            pronunciation: '(zoh-zan-THEL-ee)',
            definition: 'Microscopic photosynthetic algae (dinoflagellates) living symbiotically within coral tissues. They provide corals with up to 90% of their energy through photosynthesis in exchange for shelter and nutrients.',
            example: 'When water temperatures exceed tolerance levels, corals expel their zooxanthellae, causing coral bleaching and potential death.',
            relatedTerms: ['Symbiosis', 'Photosynthesis', 'Coral bleaching']
          },
          {
            term: 'Coral Bleaching',
            pronunciation: '(KOR-ul BLEECH-ing)',
            definition: 'The process where corals expel their symbiotic zooxanthellae algae in response to stress (usually elevated temperature), losing their color and primary energy source. Prolonged bleaching leads to coral death.',
            example: 'The 2016 mass bleaching event affected 93% of the Great Barrier Reef, killing approximately 30% of corals in the worst-affected areas.',
            relatedTerms: ['Zooxanthellae', 'Heat stress', 'Climate change']
          },
          {
            term: 'Coralline Algae',
            pronunciation: '(KOR-uh-line AL-jee)',
            definition: 'Red algae that deposit calcium carbonate in their cell walls, creating hard, rock-like structures. They act as natural cement binding coral reef frameworks together and can contribute significantly to reef construction.',
            example: 'Crustose coralline algae cover the reef crest at Bikini Atoll, cementing broken coral fragments into a solid pavement.',
            relatedTerms: ['Calcification', 'Reef cement', 'Algal ridge']
          },
          {
            term: 'Calcium Carbonate',
            pronunciation: '(KAL-see-um KAR-bon-ate)',
            definition: 'The chemical compound (CaCO₃) secreted by corals and other reef organisms to build their skeletons. Also called aragonite in its coral form, it is the primary building material of coral reefs.',
            example: 'Corals extract calcium and carbonate ions from seawater to precipitate calcium carbonate, building their limestone skeletons.',
            relatedTerms: ['Aragonite', 'Calcification', 'Skeleton']
          },
          {
            term: 'Ocean Acidification',
            pronunciation: '(OH-shun uh-sid-ih-fih-KAY-shun)',
            definition: 'The ongoing decrease in ocean pH caused by absorption of atmospheric carbon dioxide. Acidification reduces carbonate ion availability, making it harder for corals to build calcium carbonate skeletons.',
            example: 'Since pre-industrial times, ocean pH has dropped by 0.1 units, representing a 30% increase in acidity that threatens coral calcification rates.',
            relatedTerms: ['pH', 'Carbonate saturation', 'Climate change']
          },
          {
            term: 'Reef Crest',
            pronunciation: '(REEF KREST)',
            definition: 'The highest point of a coral reef, typically at or near the low tide level, where the reef faces maximum wave energy. Usually dominated by robust, fast-growing corals and coralline algae.',
            example: 'The reef crest of the Great Barrier Reef features wave-resistant Acropora corals and algal ridges built by coralline algae.',
            relatedTerms: ['Reef zonation', 'Algal ridge', 'Wave energy']
          },
          {
            term: 'Atoll',
            pronunciation: '(A-tol)',
            definition: 'A ring-shaped coral reef, island, or series of islets surrounding a central lagoon, formed when a volcanic island subsides completely while coral continues growing upward around the original island margin.',
            example: 'The Maldives consists of 26 atolls—rings of coral islands surrounding turquoise lagoons where volcanic islands once stood.',
            relatedTerms: ['Darwin\'s subsidence theory', 'Lagoon', 'Barrier reef']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Coral Reefs of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1600&q=90',
        tagline: 'Explore the world\'s most magnificent coral reef ecosystems'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the vast Great Barrier Reef stretching along Australia\'s coast to the pristine atolls of the Maldives, from the Caribbean\'s vibrant reefs to the remote beauty of Raja Ampat, coral reefs showcase nature\'s architectural mastery and biological diversity. Visit our comprehensive coral reefs page to explore detailed information about the world\'s major reef systems, their unique ecosystems, conservation challenges, and their critical importance to marine biodiversity and human communities.',
      
      linkToExisting: '../../coral-reefs/coral-reefs.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Coral reefs are crucial for UPSC Geography and Environment, covering marine ecosystems, biodiversity conservation, climate change impacts, and sustainable development. Understanding coral reef ecology, threats, and conservation is essential for comprehensive exam preparation.',
        
        topics: [
          '**Marine Ecosystems:** Coral reef formation, types (fringing, barrier, atoll), reef zonation, symbiotic relationships, and marine biodiversity hotspots',
          '**Biodiversity & Conservation:** Coral reef biodiversity, endemic species, marine protected areas, biodiversity hotspots, and conservation challenges',
          '**Climate Change:** Coral bleaching mechanisms, ocean acidification, sea temperature rise, extreme weather impacts, and climate-reef interactions',
          '**Indian Geography:** Indian coral reefs (Lakshadweep, Andaman & Nicobar, Gulf of Mannar, Gulf of Kutch), status, threats, and conservation efforts',
          '**Environment & Ecology:** Ecosystem services (coastal protection, fisheries, tourism), blue carbon, marine protected areas, and sustainable reef management',
          '**International Agreements:** UNEP Coral Reef Unit, International Coral Reef Initiative, Ramsar Convention, CBD targets, and global conservation frameworks'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Discuss the major threats to coral reefs in India. Evaluate the effectiveness of current conservation measures.',
            approach: 'Identify threats: climate change/bleaching, ocean acidification, coastal pollution, destructive fishing, tourism impacts, sedimentation; discuss specific Indian reef areas (Lakshadweep, Gulf of Mannar); evaluate measures: Marine Protected Areas, Gulf of Mannar Biosphere Reserve, community-based conservation, coral restoration; suggest improvements and integrated management approaches.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Explain the phenomenon of coral bleaching. How does it impact marine ecosystems and human communities dependent on coral reefs?',
            approach: 'Define coral bleaching and zooxanthellae-coral symbiosis; explain mechanisms: temperature stress, light stress, pollution; discuss cascading impacts: loss of biodiversity, fishery decline, coastal erosion, tourism loss; provide recent examples (Great Barrier Reef 2016-2017); suggest mitigation and adaptation strategies.'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'Which of the following coral reef formations is/are found in India? 1) Fringing reefs 2) Barrier reefs 3) Atolls (a) 1 only (b) 1 and 3 only (c) 2 and 3 only (d) 1, 2 and 3',
            answer: '(d) 1, 2 and 3. India has all three types: Fringing reefs (Andaman & Nicobar, Gulf of Mannar), Barrier reefs (parts of Andaman), and Atolls (Lakshadweep islands). Lakshadweep consists entirely of coral atolls.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'The symbiotic algae living in coral tissues that provide them with most of their energy are called: (a) Phytoplankton (b) Zooxanthellae (c) Diatoms (d) Kelp',
            answer: '(b) Zooxanthellae. These microscopic dinoflagellate algae live symbiotically in coral tissues, providing up to 90% of coral energy through photosynthesis. Their expulsion causes coral bleaching.'
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
  module.exports = coralReefsData;
}
