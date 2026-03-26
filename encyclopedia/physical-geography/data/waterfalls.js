/**
 * WATERFALLS DATA FILE
 * ========================
 * 
 * Complete data structure for the Waterfalls topic
 */

const waterfallsData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Waterfalls',
    icon: '💧',
    theme: 'waterfalls-theme',
    existingPagesLink: '../../waterfalls/waterfalls.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is a Waterfall?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600&q=90',
        tagline: 'Nature\'s most spectacular water features'
      },
      
      content: {
        introduction: 'A waterfall is a geological formation where water flows over a vertical drop or a series of steep drops in the course of a stream or river. Waterfalls are among Earth\'s most magnificent natural features, formed through millions of years of erosion and geological processes. They range from small cascades just a few meters high to massive torrents that plunge hundreds of meters, creating powerful displays of nature\'s raw energy. These stunning formations play crucial roles in ecosystems, shaping landscapes, and providing habitats for unique flora and fauna.',
        
        keyPoints: [
          {
            icon: '🏔️',
            label: 'Vertical Drop',
            text: 'Water descending from height',
            detail: 'Waterfalls occur where water flows over a steep vertical drop in a river bed, created by differences in rock hardness or geological faulting. The height can range from a few meters to over 900 meters, with the force of falling water creating spectacular spray and mist.'
          },
          {
            icon: '⚡',
            label: 'Erosive Power',
            text: 'Continuously shapes landscape',
            detail: 'The constant flow of water over the edge creates powerful erosion, carving deeper plunge pools below and gradually wearing away rock. This erosive force can cause waterfalls to migrate upstream over geological time, sometimes at rates of several meters per century.'
          },
          {
            icon: '🌊',
            label: 'Flow Volume',
            text: 'From trickles to torrents',
            detail: 'Waterfall discharge varies dramatically with seasons and rainfall, from gentle cascades during dry periods to thundering torrents during monsoons or snowmelt. The world\'s most powerful waterfalls can discharge millions of liters per second.'
          },
          {
            icon: '🪨',
            label: 'Rock Structure',
            text: 'Created by geological differences',
            detail: 'Waterfalls typically form where hard, resistant rock overlies softer, more easily eroded rock layers. As the softer rock erodes faster, it undermines the harder cap rock, creating the characteristic overhang and vertical drop that defines a waterfall.'
          },
          {
            icon: '🌈',
            label: 'Mist & Spray',
            text: 'Creates unique microclimate',
            detail: 'The impact of falling water creates fine mist and spray that can rise hundreds of meters, creating rainbows and supporting unique plant communities. This constant moisture creates specialized ecosystems found nowhere else in the surrounding landscape.'
          },
          {
            icon: '🔊',
            label: 'Acoustic Power',
            text: 'Generates distinctive sound',
            detail: 'The roar of a waterfall can be heard from kilometers away, created by the turbulent mixing of air and water, impacts on rocks, and resonance in the surrounding gorge. The sound intensity correlates with both height and volume of water.'
          }
        ],
        
        comparison: {
          title: 'Waterfall Size Classification',
          features: [
            {
              feature: 'Height Range',
              mountain: 'Major: >100m',
              hill: 'Medium: 20-100m',
              plateau: 'Minor: <20m'
            },
            {
              feature: 'Flow Power',
              mountain: 'Thunderous roar',
              hill: 'Strong cascade',
              plateau: 'Gentle flow'
            },
            {
              feature: 'Erosion Rate',
              mountain: 'Rapid (cm/year)',
              hill: 'Moderate (mm/year)',
              plateau: 'Slow (mm/decade)'
            },
            {
              feature: 'Mist Generation',
              mountain: 'Visible for km',
              hill: 'Local spray zone',
              plateau: 'Minimal spray'
            },
            {
              feature: 'Ecosystem Impact',
              mountain: 'Regional influence',
              hill: 'Valley influence',
              plateau: 'Local influence'
            }
          ]
        },
        
        funFacts: [
          '🌍 Angel Falls in Venezuela is the world\'s tallest waterfall at 979 meters (3,212 feet), so high that much of its water turns to mist before reaching the bottom',
          '🔥 Iguazu Falls on the Argentina-Brazil border consists of 275 individual waterfalls spanning nearly 3 kilometers',
          '💧 Victoria Falls creates a mist cloud that can rise 400 meters high and be seen from 50 kilometers away, earning its local name "Mosi-oa-Tunya" (The Smoke That Thunders)',
          '⚡ Niagara Falls is not particularly tall (51m) but moves 750,000 gallons of water per second, making it North America\'s most powerful waterfall',
          '🌡️ Some waterfalls freeze completely in winter, creating massive ice pillars that attract ice climbers from around the world',
          '📊 The world\'s widest waterfall is Khone Falls in Laos, stretching 10.8 kilometers across during the monsoon season'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Waterfalls',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=90',
        tagline: 'Different types classified by form and flow'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'plunge',
          name: 'Plunge Waterfall',
          icon: '⬇️',
          color: '#3B82F6',
          
          definition: 'A plunge waterfall is one where water descends vertically, losing contact with the bedrock surface and falling freely through the air. This is the classic waterfall form that most people imagine, where water drops in a single, uninterrupted vertical stream. These waterfalls are most dramatic and are formed where the water has enough volume and the cliff is vertical enough that the stream maintains separation from the rock face throughout its descent. The base of plunge waterfalls typically features a deep plunge pool carved by the constant impact of falling water.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'Hard cap rock layer overlies softer rock, creating initial cliff face' },
              { step: 2, icon: '2️⃣', text: 'River flows over the edge with sufficient volume to maintain vertical trajectory' },
              { step: 3, icon: '3️⃣', text: 'Softer rock beneath erodes faster, creating overhang and ensuring water loses contact' },
              { step: 4, icon: '4️⃣', text: 'Falling water excavates deep plunge pool at base through hydraulic action' },
              { step: 5, icon: '5️⃣', text: 'Continuous undercutting eventually causes cap rock to collapse, maintaining vertical profile' }
            ]
          },
          
          characteristics: [
            'Water falls vertically in free-fall without touching the rock face',
            'Typically features a deep plunge pool at the base from constant water impact',
            'Creates maximum spray and mist due to high-velocity water impact',
            'Often has an undercut or overhang at the top where softer rock has eroded',
            'Produces the loudest sound of all waterfall types due to air mixing and impact',
            'Most susceptible to freeze-up in winter climates, creating dramatic ice formations'
          ]
        },
        {
          id: 'horsetail',
          name: 'Horsetail Waterfall',
          icon: '🐴',
          color: '#10B981',
          
          definition: 'A horsetail waterfall descends vertically but maintains some contact with the bedrock surface as it falls, unlike plunge waterfalls that fall completely free. The water typically slides along the rock face in a graceful, streaming pattern that resembles a horse\'s tail, hence the name. These falls combine characteristics of both plunge and cascade types, with water that falls steeply but not completely free from the cliff face. They are common where the rock face is nearly vertical but has slight irregularities or a slight backward slope that keeps the water in intermittent contact with the surface.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'Rock face is steep (near-vertical) but not completely perpendicular or slightly backward-sloping' },
              { step: 2, icon: '2️⃣', text: 'Water begins descent with high velocity over the edge' },
              { step: 3, icon: '3️⃣', text: 'Surface tension and rock irregularities keep water in contact with cliff face' },
              { step: 4, icon: '4️⃣', text: 'Water streams downward in flowing patterns, touching rock intermittently' },
              { step: 5, icon: '5️⃣', text: 'Erosion polishes the rock face into smooth channels where water flows most frequently' }
            ]
          },
          
          characteristics: [
            'Water maintains partial contact with the nearly-vertical rock face while falling',
            'Creates graceful, streaming patterns resembling flowing hair or a horse\'s tail',
            'Intermediate between plunge and cascade types in both form and erosive power',
            'Often features smooth, polished rock channels where water flows consistently',
            'Produces moderate spray and mist, less than plunge but more than cascade',
            'Can transition between horsetail and plunge during high and low water seasons'
          ]
        },
        {
          id: 'cascade',
          name: 'Cascade Waterfall',
          icon: '〰️',
          color: '#F59E0B',
          
          definition: 'A cascade waterfall is characterized by water descending over a series of rock steps or along a sloped rock face, maintaining constant contact with the bedrock throughout its descent. Unlike the dramatic vertical drops of plunge waterfalls, cascades flow down inclined surfaces in a series of tumbling drops, slides, and pools. The water follows the contours of the rock, creating a staircase-like appearance with multiple small drops rather than one large fall. Cascades are the most common type of waterfall and can extend over considerable distances, creating spectacular multi-tiered features.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'River encounters sloped bedrock with varying resistance to erosion' },
              { step: 2, icon: '2️⃣', text: 'Water flows over alternating hard and soft rock layers at an angle' },
              { step: 3, icon: '3️⃣', text: 'Softer layers erode into steps while harder layers resist, creating natural stairs' },
              { step: 4, icon: '4️⃣', text: 'Water tumbles from step to step, maintaining constant rock contact' },
              { step: 5, icon: '5️⃣', text: 'Continuous erosion gradually smooths and extends the cascade system downstream' }
            ]
          },
          
          characteristics: [
            'Water maintains continuous contact with sloping bedrock surface',
            'Descends in a series of steps, slides, and small drops rather than one vertical fall',
            'Can extend over long distances with cumulative height greater than single drop',
            'Creates multiple pools and eddies between steps, supporting diverse aquatic life',
            'Generally produces less spray and mist than plunge or horsetail types',
            'Often features intricate water patterns flowing around rocks and obstacles'
          ]
        },
        {
          id: 'tiered',
          name: 'Tiered/Multi-step',
          icon: '🪜',
          color: '#8B5CF6',
          
          definition: 'Tiered or multi-step waterfalls consist of a series of distinct falls occurring one after another down a slope, with each drop separated by pools or stretches of rapids. Unlike cascades where water flows continuously down a slope, tiered falls feature clear, separate vertical or near-vertical drops, each with its own character and plunge pool. These dramatic formations can have anywhere from two to dozens of distinct tiers, each acting as an independent waterfall. The total height of a tiered waterfall is the sum of all individual drops, which can make them among the tallest waterfalls in the world.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'Multiple horizontal layers of alternating hard and soft rock exist in sequence' },
              { step: 2, icon: '2️⃣', text: 'Each hard rock layer forms a lip over which water falls vertically' },
              { step: 3, icon: '3️⃣', text: 'Soft rock between hard layers erodes into pools or rapids' },
              { step: 4, icon: '4️⃣', text: 'Water falls from one tier to the next in distinct separate drops' },
              { step: 5, icon: '5️⃣', text: 'Each tier can migrate upstream independently, creating varied spacing between drops' }
            ]
          },
          
          characteristics: [
            'Features distinct, separate vertical drops arranged in sequence down a slope',
            'Each tier has its own plunge pool or collection area before the next drop',
            'Individual tiers can vary greatly in height, width, and character',
            'Total height is cumulative but each drop functions as independent waterfall',
            'Creates complex visual patterns with multiple falling water streams at different levels',
            'Provides varied habitats at different elevations, supporting diverse ecosystems'
          ]
        },
        {
          id: 'segmented',
          name: 'Segmented Waterfall',
          icon: '〰️〰️',
          color: '#EC4899',
          
          definition: 'A segmented waterfall, also called a split waterfall, occurs where the river flow is divided into two or more distinct streams before going over the cliff, creating multiple parallel waterfalls. These segments are formed when the river encounters obstacles like rock outcrops or islands at the brink, dividing the flow into separate channels. Each segment maintains its own character and may vary in width, volume, and even height. During periods of high water, some segmented falls may merge into a single broad curtain, while during low water they become more distinctly separated. This type creates particularly photogenic and complex waterfall landscapes.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'River approaches waterfall edge with broad, wide flow' },
              { step: 2, icon: '2️⃣', text: 'Resistant rock outcrops or islands divide the flow into separate channels' },
              { step: 3, icon: '3️⃣', text: 'Each channel develops independently, eroding at different rates' },
              { step: 4, icon: '4️⃣', text: 'Multiple distinct waterfalls form, separated by rock barriers or vegetated islands' },
              { step: 5, icon: '5️⃣', text: 'Flow varies seasonally, with segments merging during floods or separating during dry periods' }
            ]
          },
          
          characteristics: [
            'Single water source divides into multiple distinct parallel streams before falling',
            'Each segment can have different width, volume, and even slightly different heights',
            'Rock outcrops, islands, or resistant formations separate the individual streams',
            'Appearance changes dramatically with seasonal water flow variations',
            'Creates complex, multi-channel waterfall systems that are highly photogenic',
            'Individual segments may have different erosion rates, gradually changing the pattern'
          ]
        },
        {
          id: 'cataract',
          name: 'Cataract Waterfall',
          icon: '🌊',
          color: '#EF4444',
          
          definition: 'A cataract is a large, powerful waterfall characterized by tremendous water volume flowing over a wide area, creating a thunderous, churning mass of whitewater. The term "cataract" specifically refers to waterfalls with exceptional flow rates and turbulent, chaotic water movement rather than a clean fall or cascade. These are nature\'s most powerful waterfalls, where the sheer volume of water creates spectacular displays of raw hydraulic force. Cataracts often occur in major rivers where massive volumes of water are forced through relatively narrow gorges or over broad escarpments, creating some of the most impressive natural phenomena on Earth.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'Major river with enormous flow volume encounters cliff or escarpment' },
              { step: 2, icon: '2️⃣', text: 'Large volume of water forces through narrowed channel or over broad lip' },
              { step: 3, icon: '3️⃣', text: 'Extreme turbulence creates chaotic, churning whitewater conditions' },
              { step: 4, icon: '4️⃣', text: 'Massive erosive power rapidly excavates gorge and plunge pool areas' },
              { step: 5, icon: '5️⃣', text: 'Continuous high flow prevents vegetation growth and maintains raw, powerful character' }
            ]
          },
          
          characteristics: [
            'Characterized by extremely high water volume and flow rate',
            'Creates violent, turbulent, chaotic water conditions rather than clean falls',
            'Generates tremendous noise audible from great distances',
            'Produces massive spray clouds that can be seen for kilometers',
            'Possesses exceptional erosive power, rapidly reshaping the landscape',
            'Often located on major rivers at critical geological barriers'
          ]
        },
        {
          id: 'frozen',
          name: 'Frozen Waterfall',
          icon: '🧊',
          color: '#06B6D4',
          
          definition: 'A frozen waterfall occurs when extremely cold temperatures cause flowing water to freeze mid-fall, creating spectacular ice formations. While technically a seasonal state rather than a permanent type, frozen waterfalls are a distinct and important category, creating unique ice structures that can be dramatically different from the liquid waterfall. The freezing process can create massive ice pillars, curtains, and columns that attract ice climbers and photographers worldwide. Some waterfalls partially freeze, with water continuing to flow behind or through the ice, while others freeze completely solid, creating temporary ice sculptures that can reach enormous sizes.',
          
          formation: {
            title: 'How It Forms',
            steps: [
              { step: 1, icon: '1️⃣', text: 'Temperatures drop well below freezing, typically -10°C (14°F) or colder' },
              { step: 2, icon: '2️⃣', text: 'Spray and mist from waterfall freeze on contact with cold air and rock' },
              { step: 3, icon: '3️⃣', text: 'Ice builds up gradually in layers, creating curtains and pillars' },
              { step: 4, icon: '4️⃣', text: 'Continued freezing temperatures allow ice to grow thicker and taller' },
              { step: 5, icon: '5️⃣', text: 'Complete freeze-up occurs when flow reduces and cold is sustained over weeks' }
            ]
          },
          
          characteristics: [
            'Seasonal phenomenon occurring in regions with severe winter temperatures',
            'Creates spectacular ice formations including pillars, curtains, and columns',
            'Can maintain water flow behind or within the ice structure',
            'Attracts specialized ice climbing activity when fully frozen and stable',
            'Ice color can vary from clear blue to white depending on air content and formation rate',
            'Freeze and thaw cycles create constantly changing ice formations throughout winter'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of All Types',
        headers: ['Type', 'Formation', 'Key Feature', 'Example'],
        rows: [
          ['Plunge ⬇️', 'Free-falling water', 'No rock contact', 'Angel Falls'],
          ['Horsetail 🐴', 'Near-vertical descent', 'Maintains contact', 'Yosemite Falls'],
          ['Cascade 〰️', 'Sloped rock surface', 'Step-by-step flow', 'Dunn\'s River Falls'],
          ['Tiered 🪜', 'Multiple distinct drops', 'Separated pools', 'Plitvice Falls'],
          ['Segmented 〰️〰️', 'Divided flow', 'Multiple parallel streams', 'Iguazu Falls'],
          ['Cataract 🌊', 'Massive volume', 'Turbulent power', 'Victoria Falls'],
          ['Frozen 🧊', 'Extreme cold', 'Ice formations', 'Fang (Vail, USA)']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Waterfalls Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=1600&q=90',
        tagline: 'The geological journey from flat river to spectacular cascade'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Waterfalls form through a complex interplay of geological processes occurring over thousands to millions of years. The formation process involves differential erosion, where variations in rock hardness create vertical drops in river courses. Understanding waterfall formation reveals the dynamic nature of Earth\'s surface and the powerful forces that continuously reshape our landscapes.',
      
      stages: [
        {
          stage: 1,
          title: 'Initial Geological Setup',
          timeframe: 'Millions of years ago',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
          
          description: [
            'Geological processes create layers of rock with varying hardness and resistance to erosion',
            'Hard, resistant rock layers (such as granite, basalt, or limestone) form over or adjacent to softer rocks',
            'Tectonic activity, volcanic eruptions, or sedimentary deposition create the initial rock structure',
            'Regional uplift or subsidence changes the elevation and gradient of the landscape',
            'Ancient river systems begin flowing across this varied geological terrain'
          ],
          
          geologicalProcess: 'The foundation for waterfall formation begins with the creation of contrasting rock types through various geological processes. Igneous intrusions can create hard crystalline rocks, while sedimentary processes deposit softer materials. Metamorphic processes can harden existing rocks. These different rock types, when arranged in layers or zones with varying resistance to erosion, create the necessary conditions. Tectonic forces—such as continental collisions, rifting, or volcanic activity—position these rocks at different elevations and orientations, setting the stage for differential erosion.',
          
          keyFeatures: [
            'Stratified rock layers with contrasting hardness levels',
            'Tectonic or volcanic activity creating elevation changes',
            'Presence of fault lines or fractures in bedrock'
          ],
          
          evidence: [
            'Rock core samples showing distinct layers of varying composition and age',
            'Geological maps revealing fault lines and ancient volcanic or sedimentary structures'
          ]
        },
        {
          stage: 2,
          title: 'River Development & Initial Erosion',
          timeframe: 'Hundreds of thousands to millions of years ago',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
          
          description: [
            'Rivers establish their courses across the landscape, following paths of least resistance',
            'Flowing water begins eroding the bedrock through hydraulic action and abrasion',
            'Softer rock layers erode more rapidly than harder, resistant layers',
            'Differential erosion creates initial irregularities in the river bed profile',
            'Small steps or rapids begin to form where hard rock meets soft rock'
          ],
          
          geologicalProcess: 'Rivers erode through four main mechanisms: hydraulic action (water pressure breaking apart rock), abrasion (sediment scraping the riverbed), attrition (rocks grinding against each other), and solution (chemical dissolution of rock). When a river flows over alternating hard and soft rock, these erosive processes work faster on the softer material. The softer rock is excavated more quickly, creating a step in the riverbed. Meanwhile, the harder rock remains relatively intact, forming a lip or edge. This differential erosion is the fundamental process that initiates waterfall formation.',
          
          keyFeatures: [
            'Established river channel cutting through varied rock types',
            'Visible erosion patterns showing differential wear',
            'Formation of initial steps or rapids in the riverbed'
          ],
          
          evidence: [
            'Sediment deposits showing erosion history and transport patterns',
            'Exposed rock faces revealing different erosion rates in different materials'
          ]
        },
        {
          stage: 3,
          title: 'Knickpoint Formation',
          timeframe: 'Tens of thousands of years ago',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
          
          description: [
            'A distinct "knickpoint" develops where the river profile steepens dramatically',
            'The hard cap rock layer forms a resistant lip while softer rock below continues eroding',
            'Water begins to fall rather than flow smoothly over the increasingly vertical drop',
            'Undercutting of soft rock beneath the hard layer creates an overhang',
            'The height of the drop increases as erosion continues below while the cap rock resists'
          ],
          
          geologicalProcess: 'A knickpoint represents a critical transition in the river\'s longitudinal profile—the change in elevation from source to mouth. At this point, the river encounters a layer of particularly resistant rock that significantly slows vertical erosion. Meanwhile, the softer rock downstream continues to erode, deepening the channel below the resistant layer. This process, called "knickpoint retreat," creates an increasingly steep drop. The resistant rock forms a cap that protrudes as the softer supporting rock is undermined. Eventually, the water flows over an edge with sufficient height to lose contact with the bedrock, creating the characteristic free-fall of a waterfall.',
          
          keyFeatures: [
            'Clear vertical or near-vertical drop in river profile',
            'Hard cap rock layer projecting beyond eroded soft rock below',
            'Developing overhang as undercutting progresses'
          ],
          
          evidence: [
            'Longitudinal river profiles showing sharp elevation changes at knickpoints',
            'Exposed rock sequences showing hard layer over soft, more eroded layer'
          ]
        },
        {
          stage: 4,
          title: 'Plunge Pool Development',
          timeframe: 'Thousands of years ago to present',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
          
          description: [
            'Falling water strikes the riverbed below with tremendous force',
            'Hydraulic action and turbulence excavate a deep plunge pool at the base',
            'Swirling water and sediment create a circular erosion pattern',
            'The plunge pool deepens and widens, undermining the waterfall face',
            'Rock fragments are trapped in the pool, acting as grinding tools that deepen it further'
          ],
          
          geologicalProcess: 'The impact of falling water creates intense turbulence in the plunge pool area. Water velocity increases as it falls, and upon striking the pool, it creates powerful circular currents. These currents, combined with the abrasive action of sediment and rock fragments carried by the water, excavate the bedrock. The process is self-reinforcing: as the plunge pool deepens, it provides more space for water to accelerate and more volume for turbulent circulation. Potholing—where trapped rocks spin in depressions—can drill deep cylindrical holes. The excavation undercuts the waterfall face from below, destabilizing the rock above.',
          
          keyFeatures: [
            'Deep, circular pool carved into bedrock at waterfall base',
            'Evidence of circular erosion patterns and potholing',
            'Undermined rock face above the pool'
          ],
          
          evidence: [
            'Bathymetric measurements showing deep plunge pools beneath waterfalls',
            'Polished, circular rock surfaces indicating swirling water action'
          ]
        },
        {
          stage: 5,
          title: 'Upstream Migration & Gorge Formation',
          timeframe: 'Ongoing process over thousands of years',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
          
          description: [
            'Continuous undercutting causes periodic collapse of the overhanging cap rock',
            'Each collapse causes the waterfall to retreat upstream by several meters',
            'Collapsed rock is broken up and carried away by the river flow',
            'The process repeats: undercutting, collapse, retreat—thousands of times over millennia',
            'A deep gorge forms downstream, marking the waterfall\'s migration path'
          ],
          
          geologicalProcess: 'Waterfall retreat is a cyclical process driven by continuous erosion and periodic catastrophic collapse. As the plunge pool deepens and widens, it undercuts the hard cap rock from below, removing its support. Eventually, the overhang becomes unstable and collapses under its own weight, often in dramatic rockfall events. This moves the waterfall face upstream, but the process immediately begins again. The rate of retreat varies from centimeters to several meters per year, depending on rock hardness, water volume, and flow characteristics. Over thousands of years, this creates dramatic gorges downstream of the current waterfall position—geological evidence of the waterfall\'s migration history.',
          
          keyFeatures: [
            'Waterfall position moves progressively upstream over time',
            'Long, deep gorge extending downstream from current waterfall location',
            'Evidence of past rockfall and collapse events'
          ],
          
          evidence: [
            'Gorge morphology showing the path of waterfall retreat',
            'Dating of rockfall deposits to establish retreat rates',
            'Historical records or photographs documenting waterfall position changes'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Knickpoint',
            pronunciation: '(NICK-point)',
            definition: 'A sharp change or irregularity in the longitudinal profile of a river, often marking the location of a waterfall or rapids. It represents a zone of active erosion where the river is adjusting to changes in base level or rock resistance.',
            example: 'Niagara Falls represents a major knickpoint that has migrated approximately 11 kilometers upstream from its original position at the Niagara Escarpment over the past 12,000 years.',
            relatedTerms: ['Nickzone', 'River profile', 'Base level']
          },
          {
            term: 'Plunge Pool',
            pronunciation: '(PLUNJ pool)',
            definition: 'A deep depression carved into bedrock at the base of a waterfall by the erosive action of falling water, turbulent currents, and abrasive sediment. These pools can be tens of meters deep and serve as evidence of the waterfall\'s erosive power.',
            example: 'The plunge pool beneath Helmcken Falls in Canada is over 60 meters deep, carved by thousands of years of 141-meter-high falling water.',
            relatedTerms: ['Hydraulic action', 'Pothole', 'Scour']
          },
          {
            term: 'Cap Rock',
            pronunciation: '(CAP rock)',
            definition: 'A layer of hard, resistant rock that overlies softer, more easily eroded rock. In waterfall formation, the cap rock forms the lip or edge over which water falls, while the softer rock beneath is preferentially eroded.',
            example: 'At Niagara Falls, the cap rock is composed of hard dolomite limestone, while the underlying softer shale erodes much more rapidly, creating the characteristic overhang.',
            relatedTerms: ['Differential erosion', 'Overhang', 'Undercutting']
          },
          {
            term: 'Hydraulic Action',
            pronunciation: '(hy-DRAW-lik AK-shun)',
            definition: 'The erosive force of water itself, particularly the pressure exerted on rock surfaces and within cracks. In waterfalls, this includes the impact force of falling water and the pressure of turbulent flow in plunge pools.',
            example: 'The hydraulic action at the base of Victoria Falls is so powerful that it has excavated a plunge pool over 100 meters deep in the basalt bedrock.',
            relatedTerms: ['Cavitation', 'Water pressure', 'Turbulence']
          },
          {
            term: 'Differential Erosion',
            pronunciation: '(dif-er-EN-shul ee-ROH-zhun)',
            definition: 'The process by which different rock types or layers erode at different rates due to variations in their hardness, composition, or resistance to weathering. This is the fundamental process that creates and maintains waterfalls.',
            example: 'The dramatic waterfalls of Yosemite Valley formed through differential erosion, where glacial action and stream erosion worked faster on weaker rock zones than on the resistant granite.',
            relatedTerms: ['Rock hardness', 'Erosion rate', 'Lithology']
          },
          {
            term: 'Undercutting',
            pronunciation: '(UN-der-cut-ting)',
            definition: 'The erosion of rock at the base of a cliff or waterfall face, creating an overhang or hollow area beneath more resistant rock above. This process destabilizes the overhanging rock, eventually causing it to collapse.',
            example: 'Continuous undercutting of the soft shale beneath the dolomite cap rock at Niagara Falls has created an overhang of up to 10 meters in some areas.',
            relatedTerms: ['Overhang', 'Rockfall', 'Retreat']
          },
          {
            term: 'Gorge',
            pronunciation: '(GORJ)',
            definition: 'A deep, narrow valley with steep rocky sides, often formed by a river cutting through hard rock. In the context of waterfalls, gorges typically mark the path of waterfall retreat upstream over thousands of years.',
            example: 'The Niagara Gorge stretches 11 kilometers from the current position of Niagara Falls to the Niagara Escarpment, representing 12,000 years of waterfall retreat.',
            relatedTerms: ['Canyon', 'Retreat', 'Incision']
          },
          {
            term: 'Hanging Valley',
            pronunciation: '(HANG-ing VAL-lee)',
            definition: 'A tributary valley whose floor is significantly higher than the main valley floor, typically created by glacial erosion. Rivers flowing from hanging valleys often form spectacular waterfalls as they descend to the main valley.',
            example: 'Yosemite Falls cascades from a hanging valley created by glacial erosion, where the glacier in the tributary valley was smaller and eroded less deeply than the massive glacier in Yosemite Valley.',
            relatedTerms: ['Glacial erosion', 'Tributary', 'U-shaped valley']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Waterfalls of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=90',
        tagline: 'Explore the world\'s most magnificent waterfalls'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the thundering power of Victoria Falls to the ethereal beauty of Angel Falls, waterfalls represent some of Earth\'s most spectacular natural wonders. Our comprehensive waterfall database features detailed information about famous falls from every continent, including their geological formation, cultural significance, and visitor information.',
      
      linkToExisting: '../../waterfalls/waterfalls.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Waterfalls are highly relevant for UPSC Civil Services Examination, appearing frequently in Geography (both Physical and Indian), Environment & Ecology, and even in General Studies papers. Understanding waterfall formation, types, and Indian examples is crucial for comprehensive preparation.',
        
        topics: [
          '**Geomorphology:** Fluvial landforms, erosional processes, river profiles, and landscape evolution through waterfall formation and retreat',
          '**Indian Geography:** Location and characteristics of major Indian waterfalls like Jog Falls, Kunchikal Falls, Dudhsagar, and their regional importance',
          '**Hydroelectric Power:** Many waterfalls and their regions are sites for hydroelectric projects; understanding the relationship between waterfall topography and energy generation',
          '**Biodiversity Hotspots:** Waterfalls create unique microhabitats; Western Ghats waterfalls are part of biodiversity hotspots relevant for environment papers',
          '**Tourism & Economy:** Economic importance of waterfall tourism in states like Karnataka, Maharashtra, Meghalaya, and their role in local livelihoods',
          '**Disaster Management:** Flash floods, waterfall area landslides, and tourist safety measures during monsoon seasons'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Discuss the process of waterfall formation and explain how differential erosion and knickpoint retreat contribute to gorge development. Illustrate with examples from India.',
            approach: 'Define waterfalls and differential erosion → Explain the role of hard and soft rock layers → Describe knickpoint formation and retreat mechanism → Discuss plunge pool development → Explain gorge formation over time → Use examples like Jog Falls (hard laterite over soft rock) and Nohkalikai Falls (Meghalaya) → Mention the Niagara Gorge as a classic case study → Conclude with geological time scales and ongoing processes.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Examine the relationship between waterfall geography and hydroelectric potential in India. What environmental concerns arise from such developments?',
            approach: 'Explain how waterfall topography (height and flow volume) relates to hydroelectric potential → Identify regions with high waterfall concentration (Western Ghats, Northeast) → Discuss existing hydroelectric projects near waterfall sites → Address environmental concerns: ecosystem disruption, biodiversity loss, downstream flow changes → Mention Western Ghats ecology and endemic species → Discuss rehabilitation and sustainable development measures → Conclude with balancing energy needs and conservation.'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'Which of the following waterfalls is formed by the river Sharavathi? (a) Jog Falls (b) Dudhsagar Falls (c) Athirappilly Falls (d) Hogenakkal Falls',
            answer: '(a) Jog Falls. The Sharavathi River creates Jog Falls in Karnataka, which is one of India\'s highest plunge waterfalls at 253 meters. Understanding river-waterfall associations is important for Indian geography preparation.'
          }
        ]
      }
    }
  }
};

// ============================================
// EXPORT - Don't change this!
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = waterfallsData;
}
