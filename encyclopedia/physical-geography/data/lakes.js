/**
 * LAKES DATA FILE
 * ========================
 */

const lakesData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Lakes',
    icon: '🏞️',
    theme: 'lakes-theme',
    existingPagesLink: '../../lakes/lakes.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is a Lake?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90',
        tagline: 'Bodies of water that tell Earth\'s geological story'
      },
      
      content: {
        introduction: 'A lake is a body of water that is surrounded by land and not part of an ocean. Lakes vary enormously in size, depth, and origin, ranging from small ponds to massive inland seas. They can be formed by glacial activity, tectonic movements, volcanic activity, or human construction. Lakes play crucial roles in ecosystems, water cycles, climate regulation, and human civilization. Understanding lakes helps us appreciate Earth\'s hydrological processes and the delicate balance of freshwater resources.',
        
        keyPoints: [
          {
            icon: '💧',
            label: 'Water Bodies',
            text: 'Enclosed bodies of standing water',
            detail: 'Lakes are inland water bodies completely surrounded by land, distinguished from seas by their lack of direct connection to oceans. They can contain fresh or saline water depending on their drainage and evaporation rates.'
          },
          {
            icon: '🌍',
            label: 'Global Distribution',
            text: 'Found on every continent',
            detail: 'Lakes exist in diverse climates from tropical to polar regions. Canada alone has over 2 million lakes, while Finland is known as the "Land of a Thousand Lakes" with approximately 188,000 lakes within its borders.'
          },
          {
            icon: '⏳',
            label: 'Temporary Features',
            text: 'Geologically short-lived',
            detail: 'Most lakes are temporary on geological timescales, lasting thousands to millions of years. They gradually fill with sediment, drain, or evaporate unless continuously replenished by water sources or maintained by ongoing geological processes.'
          },
          {
            icon: '🔄',
            label: 'Water Cycle',
            text: 'Critical hydrological role',
            detail: 'Lakes regulate water flow between land and atmosphere, store freshwater, moderate local climates, and serve as natural reservoirs. They receive water from precipitation, rivers, and groundwater while losing it through evaporation and outflow.'
          },
          {
            icon: '🐟',
            label: 'Ecosystems',
            text: 'Biodiversity hotspots',
            detail: 'Lakes support unique aquatic ecosystems with distinct zones (littoral, limnetic, profundal) each hosting specialized organisms. Ancient lakes like Baikal and Tanganyika contain thousands of endemic species found nowhere else on Earth.'
          },
          {
            icon: '👥',
            label: 'Human Importance',
            text: 'Essential for civilization',
            detail: 'Lakes provide drinking water, irrigation, transportation, recreation, and fisheries for billions of people. Many major cities developed around lakes, which serve as natural resources for industry, agriculture, and tourism.'
          }
        ],
        
        comparison: {
          title: 'Lakes vs. Other Water Bodies',
          features: [
            {
              feature: 'Water Movement',
              mountain: 'Lakes: Still/standing',
              hill: 'Rivers: Flowing',
              plateau: 'Oceans: Tidal/currents'
            },
            {
              feature: 'Salinity',
              mountain: 'Lakes: Fresh or saline',
              hill: 'Rivers: Freshwater',
              plateau: 'Oceans: Saltwater'
            },
            {
              feature: 'Size Range',
              mountain: 'Lakes: Varies widely',
              hill: 'Rivers: Linear/narrow',
              plateau: 'Oceans: Massive'
            },
            {
              feature: 'Lifespan',
              mountain: 'Lakes: Thousands of years',
              hill: 'Rivers: Permanent (with flow)',
              plateau: 'Oceans: Permanent'
            },
            {
              feature: 'Formation',
              mountain: 'Lakes: Multiple processes',
              hill: 'Rivers: Erosion',
              plateau: 'Oceans: Tectonic basins'
            }
          ]
        },
        
        funFacts: [
          '🌍 Lake Baikal contains 20% of Earth\'s unfrozen freshwater - more than all the Great Lakes combined',
          '🔥 The Caspian Sea is actually the world\'s largest lake, covering 371,000 km² between Europe and Asia',
          '💧 Lake Superior is so large it could cover all of North and South America in 30 cm of water',
          '⚡ Lake Maracaibo in Venezuela has the world\'s highest concentration of lightning strikes',
          '🌡️ Don Juan Pond in Antarctica is so salty (40% salinity) it never freezes despite temperatures of -50°C',
          '📊 More than 100 million lakes exist on Earth, covering about 3.7% of the non-oceanic land surface'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Lakes',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&q=90',
        tagline: 'Different formation processes create diverse lake types'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'glacial',
          name: 'Glacial Lakes',
          icon: '🏔️',
          color: '#60A5FA',
          
          definition: 'Glacial lakes are formed by the action of glaciers through various mechanisms including erosion, deposition, and ice damming. These lakes are among the most common types worldwide, particularly in regions that experienced glaciation during the Pleistocene epoch. They range from small cirque lakes high in mountains to massive lakes like the Great Lakes of North America. Glacial lakes often have characteristic features such as deep basins, irregular shorelines, and clear, cold water.',
          
          formation: {
            title: 'How Glacial Lakes Form',
            steps: [
              { step: 1, icon: '❄️', text: 'Glaciers advance, carving deep basins through erosion and plucking bedrock' },
              { step: 2, icon: '⛰️', text: 'Ice gouges out valleys and depressions, especially where rock is weaker' },
              { step: 3, icon: '🌡️', text: 'Climate warms and glaciers retreat, leaving behind carved depressions' },
              { step: 4, icon: '💧', text: 'Meltwater fills the basins, while moraines may dam valleys' },
              { step: 5, icon: '🏞️', text: 'Lake stabilizes with distinct glacial features like U-shaped valleys and rock flour' }
            ]
          },
          
          characteristics: [
            'Deep basins carved by ice erosion with steep sides',
            'Often elongated along former glacier flow direction',
            'May contain rock flour giving water a distinctive turquoise color',
            'Frequently found in chains or groups in glaciated regions',
            'Common features include fjords, tarns, and kettle lakes',
            'Usually oligotrophic (nutrient-poor) with clear, cold water'
          ]
        },
        {
          id: 'tectonic',
          name: 'Tectonic Lakes',
          icon: '🌋',
          color: '#F59E0B',
          
          definition: 'Tectonic lakes form in basins created by movements of Earth\'s crust, including faulting, folding, and rifting. These are often among the deepest and oldest lakes on Earth, with some containing unique ecosystems that evolved over millions of years. Tectonic activity creates depressions that fill with water from precipitation, rivers, and groundwater. Famous examples include Lake Baikal in Russia and Lake Tanganyika in Africa, both formed in continental rift zones.',
          
          formation: {
            title: 'How Tectonic Lakes Form',
            steps: [
              { step: 1, icon: '🌍', text: 'Tectonic forces cause Earth\'s crust to fracture, creating faults or rift zones' },
              { step: 2, icon: '⬇️', text: 'Blocks of crust subside between parallel faults, forming grabens (down-dropped basins)' },
              { step: 3, icon: '💧', text: 'The depression gradually fills with water from rivers, precipitation, and springs' },
              { step: 4, icon: '⏳', text: 'Continued tectonic activity deepens the basin over millions of years' },
              { step: 5, icon: '🔬', text: 'Isolated ecosystems develop with endemic species unique to the ancient lake' }
            ]
          },
          
          characteristics: [
            'Exceptionally deep with steep-sided basins',
            'Very old, often millions of years in age',
            'Long, narrow shape following fault lines or rift valleys',
            'High levels of endemic species due to long isolation',
            'Often thermally stratified with distinct water layers',
            'May have volcanic activity nearby or thermal springs'
          ]
        },
        {
          id: 'volcanic',
          name: 'Volcanic Lakes',
          icon: '🌋',
          color: '#EF4444',
          
          definition: 'Volcanic lakes form in craters, calderas, or volcanic depressions created by eruptions or collapse of volcanic structures. These lakes can be highly acidic or alkaline depending on volcanic gases and minerals. Crater Lake in Oregon, formed in the caldera of Mount Mazama, is a classic example. Some volcanic lakes pose hazards due to dissolved gases like CO₂ or potential for eruptions, while others are remarkably stable and scenic.',
          
          formation: {
            title: 'How Volcanic Lakes Form',
            steps: [
              { step: 1, icon: '💥', text: 'Volcanic eruption creates a crater or magma chamber empties causing caldera collapse' },
              { step: 2, icon: '🕳️', text: 'A deep, circular depression forms with walls of volcanic rock' },
              { step: 3, icon: '☔', text: 'Precipitation accumulates in the sealed basin with no outlet' },
              { step: 4, icon: '🌡️', text: 'Volcanic heat and gases may influence water chemistry and temperature' },
              { step: 5, icon: '⚖️', text: 'Water level stabilizes based on balance of precipitation and evaporation' }
            ]
          },
          
          characteristics: [
            'Circular or oval shape following crater or caldera rim',
            'Often extremely deep relative to surface area',
            'Water chemistry influenced by volcanic gases and minerals',
            'May be unusually clear due to lack of inlet streams',
            'Can be thermally heated by underlying magma',
            'Some lakes stratified with dangerous gas layers (limnic eruption risk)'
          ]
        },
        {
          id: 'fluvial',
          name: 'Fluvial Lakes',
          icon: '🌊',
          color: '#06B6D4',
          
          definition: 'Fluvial lakes are formed by river processes, including oxbow lakes from meandering rivers, levee-enclosed lakes, and delta lakes. These are dynamic water bodies that change with river behavior and flooding patterns. Oxbow lakes form when meandering river curves cut off from the main channel. Fluvial lakes are typically shallow and may be temporary, filling during floods and drying during low water periods.',
          
          formation: {
            title: 'How Fluvial Lakes Form',
            steps: [
              { step: 1, icon: '〰️', text: 'River develops meanders (curves) as it erodes outer banks and deposits on inner banks' },
              { step: 2, icon: '➰', text: 'Meander loop becomes increasingly curved and narrow at the neck' },
              { step: 3, icon: '✂️', text: 'During flooding, river cuts through the narrow neck, taking a shorter path' },
              { step: 4, icon: '🏝️', text: 'Original meander becomes isolated from main channel as sediment seals both ends' },
              { step: 5, icon: '🌿', text: 'Oxbow lake gradually fills with sediment and vegetation over time' }
            ]
          },
          
          characteristics: [
            'Crescent or horseshoe shape (oxbow lakes)',
            'Shallow depth with muddy or sandy bottoms',
            'Rich in nutrients from river sediments',
            'Temporary on geological timescales',
            'Support diverse wetland ecosystems',
            'Water chemistry similar to parent river'
          ]
        },
        {
          id: 'landslide',
          name: 'Landslide Lakes',
          icon: '⛰️',
          color: '#8B5CF6',
          
          definition: 'Landslide lakes, also called barrier lakes or dammed lakes, form when landslides, rockfalls, or debris flows block river valleys. These lakes can form rapidly after earthquakes, heavy rainfall, or volcanic eruptions trigger slope failures. While some are stable, others pose significant hazards if the natural dam fails catastrophically. Examples include Lake Sarez in Tajikistan and Spirit Lake at Mount St. Helens.',
          
          formation: {
            title: 'How Landslide Lakes Form',
            steps: [
              { step: 1, icon: '⚡', text: 'Trigger event (earthquake, rainfall, eruption) destabilizes mountain slope' },
              { step: 2, icon: '🪨', text: 'Massive amount of rock, soil, and debris slides into valley' },
              { step: 3, icon: '🚧', text: 'Debris blocks river flow, creating natural dam across valley' },
              { step: 4, icon: '💧', text: 'Water accumulates behind barrier, forming lake' },
              { step: 5, icon: '⚠️', text: 'Lake may stabilize or dam may fail, causing downstream flooding' }
            ]
          },
          
          characteristics: [
            'Rapid formation, sometimes within hours or days',
            'Irregular shape following valley topography',
            'Unstable natural dams prone to failure',
            'Water may seep through or overtop the debris dam',
            'Often sediment-rich and murky',
            'Can pose significant hazards to downstream communities'
          ]
        },
        {
          id: 'solution',
          name: 'Solution Lakes',
          icon: '🕳️',
          color: '#EC4899',
          
          definition: 'Solution lakes form in areas of soluble bedrock like limestone, gypsum, or salt through a process called karst formation. As slightly acidic water dissolves rock over time, underground caverns form and may collapse, creating sinkholes that fill with water. These lakes often have connections to underground aquifers and cave systems. They\'re common in regions with limestone geology, such as Florida, the Yucatan Peninsula, and parts of China.',
          
          formation: {
            title: 'How Solution Lakes Form',
            steps: [
              { step: 1, icon: '💧', text: 'Rainwater becomes slightly acidic by absorbing CO₂, forming weak carbonic acid' },
              { step: 2, icon: '🪨', text: 'Acidic water seeps through soil and dissolves limestone bedrock' },
              { step: 3, icon: '🕳️', text: 'Underground caverns and channels develop through chemical weathering' },
              { step: 4, icon: '💥', text: 'Cavern roof collapses, creating surface depression (sinkhole)' },
              { step: 5, icon: '🏊', text: 'Depression fills with groundwater, creating clear, often circular lake' }
            ]
          },
          
          characteristics: [
            'Nearly circular shape with steep sides',
            'Exceptionally clear water often with blue or green tint',
            'Direct connection to groundwater systems',
            'Depth can vary greatly, sometimes exceeding 100 meters',
            'May suddenly drain if underground connections open',
            'Common in karst landscapes with limestone bedrock'
          ]
        },
        {
          id: 'artificial',
          name: 'Artificial Reservoirs',
          icon: '🏗️',
          color: '#10B981',
          
          definition: 'Artificial reservoirs are human-made lakes created by damming rivers or excavating land. They serve purposes including water supply, hydroelectric power, flood control, irrigation, and recreation. While not natural, reservoirs have become important ecosystems and can persist for centuries. Examples include Lake Mead behind Hoover Dam and Ghana\'s Lake Volta, one of the world\'s largest artificial lakes by surface area.',
          
          formation: {
            title: 'How Artificial Reservoirs Form',
            steps: [
              { step: 1, icon: '📋', text: 'Site selection based on valley shape, geology, water needs, and engineering feasibility' },
              { step: 2, icon: '🏗️', text: 'Construction of dam across river valley using concrete, earth, or rock' },
              { step: 3, icon: '🚧', text: 'River is diverted during construction, often through tunnels or channels' },
              { step: 4, icon: '💧', text: 'Dam gates close and water begins accumulating behind barrier' },
              { step: 5, icon: '⚙️', text: 'Reservoir fills to design level and begins operation for intended purposes' }
            ]
          },
          
          characteristics: [
            'Controlled water levels for human purposes',
            'Often irregular shorelines following flooded valleys',
            'May have varying water levels seasonally',
            'Engineered structures like spillways and intake towers',
            'Ecosystems adapted from riverine to lacustrine',
            'Sediment accumulation reduces capacity over time'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of Lake Types',
        headers: ['Type', 'Formation', 'Key Feature', 'Example'],
        rows: [
          ['Glacial 🏔️', 'Ice erosion', 'Deep, clear basins', 'Great Lakes'],
          ['Tectonic 🌍', 'Crustal faulting', 'Ancient & very deep', 'Lake Baikal'],
          ['Volcanic 🌋', 'Crater/caldera', 'Circular, no outlets', 'Crater Lake'],
          ['Fluvial 🌊', 'River meanders', 'Crescent-shaped', 'Oxbow lakes'],
          ['Landslide ⛰️', 'Debris dam', 'Rapid formation', 'Lake Sarez'],
          ['Solution 🕳️', 'Rock dissolution', 'Sinkhole origin', 'Florida springs'],
          ['Artificial 🏗️', 'Human construction', 'Controlled levels', 'Lake Mead']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Lakes Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=90',
        tagline: 'From geological processes to standing water bodies'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Lake formation involves creating a depression in Earth\'s surface and a water source to fill it. Various geological processes create these basins, while the water balance determines whether a lake persists or disappears.',
      
      stages: [
        {
          stage: 1,
          title: 'Basin Creation',
          timeframe: 'Initial event to thousands of years',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
          
          description: [
            'A depression or basin forms through geological processes',
            'Glacial erosion carves deep valleys and cirques',
            'Tectonic movements create fault-bounded grabens',
            'Volcanic eruptions leave craters or calderas',
            'Rivers meander and cut off oxbow loops',
            'Landslides dam valleys creating barriers'
          ],
          
          geologicalProcess: 'Basin formation is the critical first step requiring a topographic low point that can hold water. The process varies dramatically: glacial erosion excavates bedrock over millennia; tectonic faulting drops crustal blocks suddenly; volcanic explosions create voids in minutes; river processes gradually isolate meander loops; dissolution of limestone creates sinkholes. The basin must be sealed or have low permeability to retain water.',
          
          keyFeatures: [
            'Topographic depression below surrounding landscape',
            'Impermeable or low-permeability floor material',
            'Sufficient depth and volume to hold water body'
          ],
          
          evidence: [
            'U-shaped valleys and moraines indicate glacial basins',
            'Fault scarps and linear patterns show tectonic origins'
          ]
        },
        {
          stage: 2,
          title: 'Water Accumulation',
          timeframe: 'Years to centuries',
          image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80',
          
          description: [
            'Water fills the newly formed basin',
            'Precipitation directly enters the depression',
            'Rivers and streams flow into the basin',
            'Groundwater seeps from surrounding aquifers',
            'Glacial meltwater provides initial water source',
            'Water level rises until balance is reached'
          ],
          
          geologicalProcess: 'Water accumulation depends on the hydrological budget: inputs (precipitation, runoff, groundwater inflow) versus outputs (evaporation, seepage, outlet flow). Climate strongly influences this balance. In humid regions, lakes fill quickly and maintain high levels. In arid regions, evaporation may equal or exceed inputs, creating saline lakes or dry playas. The water chemistry reflects source water composition and evaporative concentration.',
          
          keyFeatures: [
            'Multiple water sources contributing to filling',
            'Gradual rise in water level over time',
            'Chemical composition reflecting source waters'
          ],
          
          evidence: [
            'Shoreline features show historical water levels',
            'Sediment cores reveal lake history and filling rates'
          ]
        },
        {
          stage: 3,
          title: 'Lake Establishment',
          timeframe: 'Decades to millennia',
          image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
          
          description: [
            'Water level stabilizes at equilibrium',
            'Distinct lake zones develop (littoral, limnetic, profundal)',
            'Thermal stratification establishes in deep lakes',
            'Sediment begins accumulating on lake bottom',
            'Biological communities colonize the new habitat',
            'Shoreline processes shape lake margins'
          ],
          
          geologicalProcess: 'A mature lake develops characteristic physical, chemical, and biological zonation. Thermal stratification creates layers: warm epilimnion on top, cold hypolimnion below, separated by the thermocline. Seasonal turnover mixes these layers in temperate lakes. Sediments accumulate as varves (annual layers), recording climate history. Wave action erodes some shores while depositing sediment elsewhere, creating beaches and deltas.',
          
          keyFeatures: [
            'Stable water level with seasonal variations',
            'Established inlet and outlet channels',
            'Layered water structure with distinct zones'
          ],
          
          evidence: [
            'Beach ridges and wave-cut terraces mark stable shorelines',
            'Varved sediments in cores show seasonal deposition cycles'
          ]
        },
        {
          stage: 4,
          title: 'Lake Evolution',
          timeframe: 'Centuries to millions of years',
          image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80',
          
          description: [
            'Lake gradually changes through natural processes',
            'Sediment accumulation reduces depth and volume',
            'Vegetation encroaches from margins',
            'Nutrient levels increase (eutrophication)',
            'Climate changes affect water balance',
            'Tectonic activity may deepen or drain the lake'
          ],
          
          geologicalProcess: 'Lakes are geologically temporary features that evolve toward extinction. Sediment from inflowing rivers fills the basin at rates from millimeters to meters per century. Organic material from productivity within the lake adds to sediment. In humid climates, wetland vegetation colonizes shallow margins, accelerating filling. Climate shifts can raise or lower lake levels dramatically. Some lakes persist millions of years if tectonic subsidence continues, but most fill or drain within thousands to tens of thousands of years.',
          
          keyFeatures: [
            'Progressive sediment infilling',
            'Transition from oligotrophic to eutrophic conditions',
            'Changing size and depth over time'
          ],
          
          evidence: [
            'Sediment cores showing decreased depth over time',
            'Fossil shorelines at different elevations'
          ]
        },
        {
          stage: 5,
          title: 'Lake Termination',
          timeframe: 'Variable - sudden to gradual',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
          
          description: [
            'Lake eventually disappears through various processes',
            'Complete sediment filling creates flat plain',
            'Outlet erosion drains the lake',
            'Climate change causes complete evaporation',
            'Tectonic uplift drains the basin',
            'Vegetation succession creates wetland then terrestrial habitat'
          ],
          
          geologicalProcess: 'Lake death occurs through multiple pathways. Infilling transforms the lake to marsh, then to terrestrial ecosystem, leaving organic-rich sediments (potential coal). Outlet downcutting can catastrophically drain a lake. Climate aridification evaporates lakes, leaving salt flats (playas). Tectonic uplift or tilting can drain water through new outlets. Evidence of ancient lakes includes lacustrine sediments, fossil shorelines, and unique endemic species in nearby surviving lakes.',
          
          keyFeatures: [
            'Shallow wetland or dry basin',
            'Thick lacustrine sediment deposits',
            'Former shorelines as geomorphic features'
          ],
          
          evidence: [
            'Lacustrine sediments in now-dry basins',
            'Ancient beach ridges far from current water bodies'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Epilimnion',
            pronunciation: '(eh-pih-LIM-nee-on)',
            definition: 'The upper, warm, well-mixed layer of a thermally stratified lake. This layer is in contact with the atmosphere and receives sunlight, making it the zone of highest biological productivity.',
            example: 'In summer, Lake Superior\'s epilimnion may reach 20°C while the hypolimnion remains at 4°C, creating distinct thermal layers.',
            relatedTerms: ['Thermocline', 'Hypolimnion', 'Turnover']
          },
          {
            term: 'Thermocline',
            pronunciation: '(THER-moh-cline)',
            definition: 'The transition layer in a stratified lake where temperature changes rapidly with depth, separating the warm epilimnion from the cold hypolimnion.',
            example: 'Divers in deep lakes often feel a sudden temperature drop when passing through the thermocline at depths of 10-20 meters.',
            relatedTerms: ['Stratification', 'Epilimnion', 'Hypolimnion']
          },
          {
            term: 'Eutrophication',
            pronunciation: '(yoo-troh-fih-KAY-shun)',
            definition: 'The process by which a lake becomes enriched in nutrients, leading to excessive plant growth, algal blooms, and eventual oxygen depletion. Can be natural or accelerated by human pollution.',
            example: 'Lake Erie experienced severe eutrophication in the 1960s due to phosphorus pollution, causing massive algal blooms and dead zones.',
            relatedTerms: ['Oligotrophic', 'Mesotrophic', 'Algal bloom']
          },
          {
            term: 'Varves',
            pronunciation: '(VARVZ)',
            definition: 'Annual layers of sediment deposited in lakes, typically showing seasonal variations in grain size and composition. Used to date lake sediments and reconstruct past climate.',
            example: 'Swedish glacial lake varves provided the first accurate chronology of the last ice age, with each layer representing one year.',
            relatedTerms: ['Sediment core', 'Chronology', 'Paleoclimate']
          },
          {
            term: 'Oxbow Lake',
            pronunciation: '(OKS-boh lake)',
            definition: 'A U-shaped or crescent-shaped lake formed when a meandering river cuts off one of its loops, isolating the curved section from the main channel.',
            example: 'The Mississippi River has created hundreds of oxbow lakes along its floodplain, visible as crescent-shaped water bodies on maps.',
            relatedTerms: ['Meander', 'Fluvial', 'Cutoff']
          },
          {
            term: 'Graben',
            pronunciation: '(GRAH-ben)',
            definition: 'A down-dropped block of Earth\'s crust bounded by parallel faults, often forming a depression that fills with water to create a tectonic lake.',
            example: 'Lake Baikal occupies a graben in the Baikal Rift Zone, with fault scarps rising over 2000 meters above the lake floor.',
            relatedTerms: ['Fault', 'Rift valley', 'Tectonic lake']
          },
          {
            term: 'Endorheic Basin',
            pronunciation: '(en-doh-RAY-ik)',
            definition: 'A closed drainage basin with no outlet to the ocean, where water leaves only through evaporation. Lakes in these basins are typically saline.',
            example: 'The Great Basin in Nevada contains numerous endorheic lakes including Great Salt Lake, which has become increasingly saline over time.',
            relatedTerms: ['Closed basin', 'Salt lake', 'Playa']
          },
          {
            term: 'Limnology',
            pronunciation: '(lim-NAH-luh-jee)',
            definition: 'The scientific study of inland waters including lakes, ponds, rivers, and wetlands, encompassing their physical, chemical, biological, and geological characteristics.',
            example: 'Limnologists study Lake Tahoe to understand how climate change affects water clarity, temperature, and ecosystem health.',
            relatedTerms: ['Hydrology', 'Aquatic ecology', 'Freshwater']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Lakes of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90',
        tagline: 'Explore the world\'s most remarkable lakes'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the deepest lake on Earth to the highest navigable lake, our planet\'s lakes showcase incredible diversity in size, depth, chemistry, and ecological importance. Visit our comprehensive lakes page to explore detailed information about the world\'s most significant lakes, their unique characteristics, and their importance to human civilization and ecosystems.',
      
      linkToExisting: '../../lakes/lakes.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Lakes are important for UPSC Geography, covering physical features, water resources, ecosystems, international boundaries, and environmental issues. Understanding lake formation, distribution, and human impacts is essential for both Prelims and Mains.',
        
        topics: [
          '**Physical Geography:** Lake formation processes (glacial, tectonic, fluvial, volcanic), lake types, and geomorphological evolution',
          '**Water Resources:** Freshwater availability, lake ecosystems, wetlands, Ramsar sites, and conservation of aquatic biodiversity',
          '**Indian Geography:** Important Indian lakes - Chilika, Wular, Sambhar, Pulicat; wetland conservation; and lake pollution issues',
          '**International Relations:** Transboundary lakes (Pangong Tso, Caspian Sea), water disputes, and shared water management',
          '**Environment & Ecology:** Lake ecosystems, eutrophication, invasive species, wetland conservation, and climate change impacts',
          '**Disaster Management:** Glacial lake outburst floods (GLOFs), lake tsunamis, dam failures, and early warning systems'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Discuss the formation and significance of glacial lakes in the Himalayan region. How do Glacial Lake Outburst Floods (GLOFs) pose threats to downstream areas?',
            approach: 'Explain glacial lake formation through ice melting; discuss distribution in Himalayan region; detail GLOF mechanism and triggers; provide examples (Kedarnath 2013); discuss monitoring and early warning systems; suggest mitigation measures.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Examine the environmental challenges faced by inland wetlands and lakes in India. Suggest measures for their conservation.',
            approach: 'Identify challenges: pollution, encroachment, siltation, invasive species, climate change; provide examples (Dal Lake, Loktak Lake); discuss Wetlands Conservation Rules; suggest integrated management approaches; highlight community participation and legal frameworks.'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'Which of the following lakes is a salt lake? (a) Wular (b) Chilika (c) Sambhar (d) Dal',
            answer: '(c) Sambhar. Sambhar Lake in Rajasthan is India\'s largest inland salt lake. Wular is a freshwater lake in Kashmir; Chilika is a brackish water lagoon in Odisha; Dal is a freshwater lake in Kashmir.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'Pangong Tso Lake is an example of which type of lake? (a) Crater lake (b) Tectonic lake (c) Lagoon (d) Oxbow lake',
            answer: '(b) Tectonic lake. Pangong Tso is a tectonic lake formed by geological faulting in the Himalayas. It\'s an endorheic lake (landlocked) located at about 4,350 meters altitude, extending from India to China.'
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
  module.exports = lakesData;
}
