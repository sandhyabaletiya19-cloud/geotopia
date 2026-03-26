// desertsData.js - Complete Desert Encyclopedia Data Module
// Last Updated: 2024
// Author: Geography Content Team

const desertsData = {
  meta: {
    name: 'Deserts',
    icon: '🏜️',
    theme: 'desert-theme',
    existingPagesLink: '/encyclopedia/deserts/',
    lastUpdated: '2024-01-15',
    version: '1.0.0',
    contributors: ['Geography Content Team'],
    totalExamples: 35,
    coverageArea: 'Global'
  },

  sections: {
    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: DEFINITION
    // ═══════════════════════════════════════════════════════════════════════════
    definition: {
      title: 'What is a Desert?',
      hero: {
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        tagline: 'Where Life Masters the Art of Survival'
      },
      content: {
        introduction: 'A desert is a barren landscape characterized by extremely low precipitation, typically receiving less than 250 millimeters (10 inches) of rainfall annually, resulting in hostile living conditions for plant and animal life. Deserts are not defined by temperature alone—they can be scorching hot like the Sahara or freezing cold like Antarctica. These arid regions cover approximately one-third of Earth\'s land surface and exist on every continent. Despite their harsh conditions, deserts are dynamic ecosystems that support remarkably adapted flora and fauna, contain valuable mineral resources, and have shaped human civilizations for millennia.',
        
        keyPoints: [
          {
            icon: '💧',
            label: 'Aridity Definition',
            text: 'Less than 250mm annual precipitation',
            detail: 'The primary defining characteristic of a desert is its aridity—receiving less than 250 millimeters (10 inches) of precipitation annually. This includes rain, snow, sleet, and all other forms of moisture. Some hyper-arid deserts like the Atacama receive less than 1mm of rain per year, making them the driest places on Earth.'
          },
          {
            icon: '🌡️',
            label: 'Extreme Temperature Variations',
            text: 'Daily swings can exceed 40°C',
            detail: 'Deserts experience dramatic diurnal temperature variations due to low humidity and sparse vegetation. During the day, temperatures can soar above 50°C (122°F), while nights can drop below freezing. The lack of moisture in the air means there\'s nothing to retain the day\'s heat, causing rapid cooling after sunset.'
          },
          {
            icon: '🌍',
            label: 'Global Coverage',
            text: 'One-third of Earth\'s land surface',
            detail: 'Deserts occupy approximately 33% of the planet\'s land area—about 50 million square kilometers. This includes hot deserts in subtropical regions, cold deserts in temperate zones, and polar deserts in Arctic and Antarctic regions. The total desert area is expanding due to desertification processes.'
          },
          {
            icon: '🏔️',
            label: 'Diverse Landscapes',
            text: 'Sand dunes, rocky plateaus, salt flats',
            detail: 'Contrary to popular belief, sandy deserts (ergs) comprise only about 20% of all desert terrain. Deserts feature diverse landscapes including rocky plateaus (hamadas), gravel plains (regs), salt flats (playas), mountain ranges, canyons, and badlands. Each landscape type supports unique geological processes and ecosystems.'
          },
          {
            icon: '🦎',
            label: 'Specialized Ecosystems',
            text: 'Unique adaptations for survival',
            detail: 'Desert organisms have evolved remarkable adaptations to survive extreme conditions. Plants like cacti store water in their tissues, while animals like the kangaroo rat can survive without drinking water. Nocturnal behavior, burrowing, and specialized kidney functions are common desert survival strategies.'
          },
          {
            icon: '💨',
            label: 'Wind as Primary Force',
            text: 'Dominant erosional and depositional agent',
            detail: 'In the absence of significant water, wind becomes the primary geological force in deserts. Aeolian processes create sand dunes, sculpt rock formations through abrasion, and transport vast quantities of dust across continents. Saharan dust, for example, fertilizes the Amazon rainforest thousands of kilometers away.'
          },
          {
            icon: '⏳',
            label: 'Ancient Landscapes',
            text: 'Some deserts are millions of years old',
            detail: 'While some deserts formed recently due to climate change, others are ancient. The Namib Desert is approximately 55-80 million years old, making it the world\'s oldest desert. These ancient landscapes preserve geological records spanning millions of years and contain unique endemic species found nowhere else.'
          },
          {
            icon: '🏛️',
            label: 'Cradle of Civilizations',
            text: 'Home to ancient and modern cultures',
            detail: 'Despite harsh conditions, deserts have supported human civilizations for millennia. The Nile River enabled ancient Egypt to flourish in the Sahara\'s edge, while Bedouin, Tuareg, and Aboriginal cultures developed sophisticated desert survival knowledge. Today, over 1 billion people live in or near desert regions.'
          },
          {
            icon: '💎',
            label: 'Mineral Wealth',
            text: 'Rich deposits of oil, minerals, and rare earths',
            detail: 'Deserts contain substantial mineral resources including petroleum (Arabian Desert), copper (Atacama), uranium (Namib), and lithium (Atacama). The lack of vegetation and soil cover makes mineral exploration easier, and ancient lake beds often contain valuable evaporite deposits like salt, borax, and gypsum.'
          },
          {
            icon: '☀️',
            label: 'Solar Energy Potential',
            text: 'Highest solar radiation on Earth',
            detail: 'Deserts receive more solar radiation per square meter than any other environment on Earth, with some areas receiving over 6 kWh/m²/day. This makes them ideal locations for solar power generation. Projects like Morocco\'s Noor-Ouarzazate complex demonstrate deserts\' potential as renewable energy hubs.'
          }
        ],

        comparison: {
          title: 'Desert vs. Semi-Arid Regions',
          features: [
            { feature: 'Annual Precipitation', desert: 'Less than 250mm', semiArid: '250-500mm' },
            { feature: 'Vegetation Cover', desert: 'Less than 10%', semiArid: '10-30%' },
            { feature: 'Aridity Index', desert: 'Less than 0.20', semiArid: '0.20-0.50' },
            { feature: 'Evaporation Rate', desert: 'Exceeds precipitation by 10x+', semiArid: 'Exceeds precipitation by 2-5x' },
            { feature: 'Soil Development', desert: 'Minimal, often bare rock', semiArid: 'Thin but present' },
            { feature: 'Agricultural Potential', desert: 'Requires irrigation', semiArid: 'Marginal rain-fed farming possible' },
            { feature: 'Population Density', desert: 'Very low (<1/km²)', semiArid: 'Low to moderate (1-25/km²)' },
            { feature: 'Climate Classification', desert: 'BWh, BWk, EF', semiArid: 'BSh, BSk' }
          ]
        },

        diagram: {
          type: 'svg',
          path: 'assets/desert-cross-section-diagram.svg',
          alt: 'Cross-sectional diagram showing desert features including sand dunes, rocky plateau, oasis, salt flat, and underground aquifer'
        },

        funFacts: [
          '🏜️ Antarctica is technically the world\'s largest desert, receiving only 166mm of precipitation annually along its coast and virtually none in its interior.',
          '🌡️ The highest reliably recorded air temperature on Earth was 56.7°C (134°F) in Death Valley, California, on July 10, 1913.',
          '⭐ The Atacama Desert is so dry and clear that it hosts the world\'s most powerful astronomical observatories, including ALMA with its 66 radio telescopes.',
          '🐪 A camel can drink up to 200 liters of water in just 3 minutes and survive for weeks without drinking by metabolizing fat stored in its hump.',
          '🎵 Some sand dunes "sing" or "boom" when sand grains avalanche, producing sounds up to 105 decibels—as loud as a rock concert.',
          '🌊 The Sahara Desert was once a lush savanna with rivers, lakes, and hippos—as recently as 5,000-11,000 years ago during the African Humid Period.',
          '🧭 Desert varnish—a dark coating on rocks—takes thousands of years to form and has been used by archaeologists to date ancient rock art.',
          '🌵 The saguaro cactus can live for over 200 years, grow 12 meters tall, and store up to 4,500 liters of water in its tissues.',
          '💨 The Sahara exports approximately 182 million tons of dust annually, fertilizing the Amazon rainforest and Caribbean coral reefs.',
          '🦂 The Antarctic midge is Antarctica\'s only native insect, measuring just 2-6mm, yet it can survive being frozen solid and thawed repeatedly.',
          '🌈 The White Desert in Egypt features surreal chalk formations carved by wind erosion, creating landscapes that look like another planet.',
          '💀 The Skeleton Coast in Namibia earned its name from whale bones and shipwrecks that litter its fog-shrouded shores.',
          '🔥 Desert surface temperatures can exceed 80°C (176°F)—hot enough to fry an egg—even when air temperature is "only" 50°C.',
          '🌙 The temperature difference between day and night in some deserts can exceed 50°C, more than the temperature change between summer and winter in tropical regions.',
          '🪨 The moving rocks of Death Valley\'s Racetrack Playa travel across the dry lake bed, leaving trails up to 457 meters long, propelled by thin ice sheets and wind.',
          '🐜 Namibia\'s "fairy circles" puzzled scientists for decades until research revealed they\'re likely created by termites engineering their own water-harvesting systems.',
          '🌺 After rare rains, the Atacama Desert bursts into "desierto florido" (flowering desert), with over 200 species of flowers blooming simultaneously.',
          '📡 Due to extremely low humidity and minimal light pollution, Chile\'s Atacama hosts telescopes that have discovered thousands of exoplanets.',
          '🏃 The Marathon des Sables is a 251km ultramarathon across the Sahara, where runners must carry their own food and survive temperatures exceeding 50°C.',
          '🌊 The Qattara Depression in Egypt sits 133 meters below sea level and has been proposed as a site for a massive hydroelectric project using Mediterranean seawater.'
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: TYPES OF DESERTS
    // ═══════════════════════════════════════════════════════════════════════════
    types: {
      title: 'Types of Deserts',
      hero: {
        image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1920',
        tagline: 'From Scorching Sands to Frozen Wastelands'
      },
      renderAs: 'mindmap',
      
      branches: [
        // ─────────────────────────────────────────────────────────────────────
        // TYPE 1: SUBTROPICAL / TRADE WIND DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'subtropical-deserts',
          name: 'Subtropical (Trade Wind) Deserts',
          icon: '☀️',
          color: '#FF6B35',
          definition: 'Subtropical deserts form in bands along the Tropics of Cancer and Capricorn (approximately 20-30° latitude) due to persistent high-pressure zones created by descending air in the Hadley cell circulation. As air rises at the equator, loses moisture through tropical rainfall, and descends at these latitudes, it creates extremely stable, dry conditions. These are the world\'s hottest and most iconic deserts, characterized by minimal cloud cover, intense solar radiation, and extreme temperatures.',
          
          formation: {
            title: 'How Subtropical Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Solar heating at the equator causes air to rise rapidly, creating a zone of low pressure and heavy rainfall in tropical regions.', icon: '🌡️' },
              { step: 2, text: 'As this moist air rises, it cools and releases precipitation, creating tropical rainforests along the equator.', icon: '🌧️' },
              { step: 3, text: 'The now-dry air moves poleward at high altitudes (approximately 10-15km) as part of the Hadley cell circulation.', icon: '💨' },
              { step: 4, text: 'At approximately 20-30° latitude (north and south), this air begins to sink back toward the surface.', icon: '⬇️' },
              { step: 5, text: 'As the air descends, it compresses and warms adiabatically, becoming even drier and creating persistent high-pressure zones.', icon: '🔥' },
              { step: 6, text: 'These subtropical high-pressure systems (like the Azores High and South Pacific High) block moisture-bearing weather systems.', icon: '🛑' },
              { step: 7, text: 'Trade winds blowing from these high-pressure zones toward the equator reinforce aridity by carrying dry air.', icon: '🌀' },
              { step: 8, text: 'Minimal cloud cover allows intense solar radiation to reach the surface, creating extreme daytime temperatures.', icon: '☀️' },
              { step: 9, text: 'At night, the same lack of cloud cover allows heat to radiate rapidly into space, causing dramatic temperature drops.', icon: '🌙' },
              { step: 10, text: 'Over millennia, this persistent aridity creates characteristic desert landforms through wind erosion and minimal chemical weathering.', icon: '🏜️' }
            ],
            animation: 'assets/hadley-cell-animation.mp4'
          },
          
          characteristics: [
            'Located between 20° and 30° latitude in both hemispheres',
            'Average annual precipitation below 250mm, often below 100mm',
            'Summer temperatures regularly exceed 40°C (104°F)',
            'Record temperatures can surpass 50°C (122°F)',
            'Diurnal temperature range often exceeds 20°C',
            'Dominated by persistent subtropical high-pressure systems',
            'Clear skies more than 90% of the year',
            'Extremely low relative humidity (often below 20%)',
            'Strong winds capable of creating massive sand dunes',
            'Sparse vegetation limited to wadis and oases',
            'Characteristic landforms: ergs, regs, hamadas, wadis',
            'High potential evapotranspiration exceeding precipitation by 20-50x',
            'Ancient stable landscapes with minimal recent geological activity',
            'Significant day/night wind pattern changes',
            'Dust devils and haboobs (dust storms) common'
          ],
          
          examples: [
            {
              name: 'Sahara Desert',
              location: 'Northern Africa',
              keyDetails: '9.2 million km² - largest hot desert, temperatures up to 58°C recorded',
              link: '/encyclopedia/deserts/sahara',
              image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
              notableFeatures: [
                'World\'s largest hot desert, spanning 11 countries',
                'Contains the Ténéré, one of Earth\'s most desolate regions',
                'Home to 2.5 million Tuareg people',
                'Saharan dust fertilizes Amazon rainforest',
                'Was green savanna just 5,000-11,000 years ago',
                'Contains ancient rock art depicting hippos and crocodiles'
              ]
            },
            {
              name: 'Arabian Desert',
              location: 'Arabian Peninsula',
              keyDetails: '2.3 million km², includes Rub\' al Khali (Empty Quarter)',
              link: '/encyclopedia/deserts/arabian',
              image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800',
              notableFeatures: [
                'Rub\' al Khali is world\'s largest continuous sand body',
                'Contains approximately 31% of world\'s oil reserves',
                'Star dunes reach heights of 250 meters',
                'Summer temperatures can exceed 54°C',
                'Annual rainfall in interior below 35mm',
                'Bedouin cultures adapted over 4,000 years'
              ]
            },
            {
              name: 'Kalahari Desert',
              location: 'Southern Africa (Botswana, Namibia, South Africa)',
              keyDetails: '930,000 km², semi-arid with ancient sand dunes',
              link: '/encyclopedia/deserts/kalahari',
              image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
              notableFeatures: [
                'Technically a semi-arid sandy savanna',
                'Home to the San (Bushmen) people for 20,000+ years',
                'Central Kalahari Game Reserve is second-largest reserve globally',
                'Contains vast underground aquifers',
                'Supports meerkats, oryx, and African wild dogs',
                'Experiences seasonal rainfall creating temporary rivers'
              ]
            },
            {
              name: 'Great Victoria Desert',
              location: 'Australia (Western and South Australia)',
              keyDetails: '424,400 km², largest Australian desert',
              link: '/encyclopedia/deserts/great-victoria',
              image: 'https://images.unsplash.com/photo-1494887205043-c5f291293cf6?w=800',
              notableFeatures: [
                'Australia\'s largest desert ecosystem',
                'Contains parallel sand dunes up to 30m high',
                'Home to indigenous Pitjantjatjara and Mirning peoples',
                'Spinifex grasslands support unique wildlife',
                'Average annual rainfall 200-250mm',
                'Discovered numerous new species in recent surveys'
              ]
            },
            {
              name: 'Thar Desert',
              location: 'India and Pakistan',
              keyDetails: '200,000 km², most densely populated desert',
              link: '/encyclopedia/deserts/thar',
              image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
              notableFeatures: [
                'World\'s most densely populated desert (83 people/km²)',
                'Receives monsoon rainfall (100-500mm annually)',
                'Home to 23 million people',
                'Jaisalmer Fort is UNESCO World Heritage Site',
                'Supports camels, Indian wild asses, and blackbucks',
                'Great Indian Bustard critically endangered here'
              ]
            },
            {
              name: 'Gibson Desert',
              location: 'Central Australia (Western Australia)',
              keyDetails: '156,000 km², remote stony desert',
              link: '/encyclopedia/deserts/gibson',
              image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800',
              notableFeatures: [
                'Named after explorer Alfred Gibson who perished here',
                'Characterized by laterite gravel plains',
                'Aboriginal peoples have lived here for 22,000+ years',
                'Lake Disappointment is a large salt lake',
                'Extremely remote with no permanent settlements',
                'Important habitat for bilbies and thorny devils'
              ]
            },
            {
              name: 'Syrian Desert',
              location: 'Syria, Jordan, Iraq, Saudi Arabia',
              keyDetails: '500,000 km², steppe-desert landscape',
              link: '/encyclopedia/deserts/syrian',
              image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
              notableFeatures: [
                'Mix of true desert and semi-arid steppe',
                'Contains ancient city of Palmyra (UNESCO site)',
                'Historically controlled by Bedouin tribes',
                'Annual rainfall varies from 100-300mm',
                'Extensive basalt desert (harrat) areas',
                'Important overland trade route for millennia'
              ]
            },
            {
              name: 'Sonoran Desert',
              location: 'USA (Arizona, California) and Mexico',
              keyDetails: '310,000 km², most biodiverse hot desert',
              link: '/encyclopedia/deserts/sonoran',
              image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
              notableFeatures: [
                'Home to iconic saguaro cacti (up to 200 years old)',
                'Receives both winter and summer rainfall (bimodal)',
                'Over 2,000 plant species documented',
                'Gila monsters and roadrunners are endemic',
                'Contains fertile Imperial Valley agricultural region',
                'Tohono O\'odham and other tribes have lived here for millennia'
              ]
            }
          ],
          
          distribution: {
            continents: ['Africa', 'Asia', 'Australia', 'North America', 'South America'],
            mapImage: 'assets/subtropical-deserts-map.png',
            majorRegions: [
              { name: 'Sahara Belt', extent: '9,200,000 km²', features: 'Extends from Atlantic to Red Sea, world\'s largest hot desert' },
              { name: 'Arabian Peninsula', extent: '2,300,000 km²', features: 'Includes Rub\' al Khali, Nafud, and Syrian deserts' },
              { name: 'Australian Deserts', extent: '1,371,000 km²', features: 'Great Victoria, Gibson, Simpson, Great Sandy deserts' },
              { name: 'Southern African', extent: '1,000,000 km²', features: 'Kalahari and Namib (partially subtropical)' },
              { name: 'North American', extent: '500,000 km²', features: 'Sonoran, Mojave, and Chihuahuan deserts' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 2: RAIN SHADOW DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'rain-shadow-deserts',
          name: 'Rain Shadow Deserts',
          icon: '🏔️',
          color: '#8B4513',
          definition: 'Rain shadow deserts form on the leeward (downwind) side of mountain ranges where moist air is forced to rise over the mountains, losing its moisture as precipitation on the windward slopes. By the time the air descends on the other side, it has lost most of its water content and warms as it descends, creating extremely dry conditions. These deserts demonstrate the profound influence of topography on climate and can exist at latitudes that would otherwise receive ample rainfall.',
          
          formation: {
            title: 'How Rain Shadow Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Moisture-laden air masses approach a mountain range, typically from an ocean or large water body.', icon: '💨' },
              { step: 2, text: 'The air is forced to rise (orographic lifting) as it encounters the mountain barrier.', icon: '⬆️' },
              { step: 3, text: 'As the air rises, it cools at the dry adiabatic rate (approximately 10°C per 1,000m) until reaching saturation.', icon: '🌡️' },
              { step: 4, text: 'Once saturated, the air continues to cool at the slower moist adiabatic rate (approximately 6°C per 1,000m).', icon: '💧' },
              { step: 5, text: 'Clouds form and precipitation falls heavily on the windward slopes, creating lush forests or grasslands.', icon: '🌧️' },
              { step: 6, text: 'The air, now depleted of moisture, crosses the mountain summit and begins descending the leeward slope.', icon: '⬇️' },
              { step: 7, text: 'As it descends, the air warms at the dry adiabatic rate (10°C per 1,000m), becoming increasingly dry.', icon: '🔥' },
              { step: 8, text: 'The relative humidity drops dramatically—often below 15%—creating desert conditions in the rain shadow.', icon: '🏜️' },
              { step: 9, text: 'This process can reduce precipitation by 90% or more compared to the windward side.', icon: '📉' },
              { step: 10, text: 'Persistent rain shadow effects over geological time create permanent desert ecosystems with unique adapted species.', icon: '🦎' }
            ],
            animation: 'assets/rain-shadow-animation.mp4'
          },
          
          characteristics: [
            'Located directly downwind (leeward) of major mountain ranges',
            'Sharp precipitation gradient from windward to leeward slopes',
            'Can occur at any latitude where mountains intercept moisture',
            'Often feature dramatic elevation differences within short distances',
            'Windward slopes may receive 10-100x more precipitation',
            'Desert conditions can exist near tropical or temperate latitudes',
            'Hot, dry winds (chinook, föhn) common on leeward slopes',
            'Temperature inversions frequent in valley floors',
            'Vegetation changes abruptly over short distances',
            'Ancient lake beds (playas) common in closed basins',
            'Flash floods occur when rare precipitation falls',
            'Strong daily wind patterns due to heating differentials',
            'Clear skies and high solar radiation typical',
            'Sensitive to climate oscillations affecting moisture sources',
            'Often contain endemic species isolated by mountain barriers'
          ],
          
          examples: [
            {
              name: 'Great Basin Desert',
              location: 'USA (Nevada, Utah, Oregon, Idaho, California)',
              keyDetails: '492,000 km², largest US desert, cold desert climate',
              link: '/encyclopedia/deserts/great-basin',
              image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
              notableFeatures: [
                'Rain shadow of Sierra Nevada and Cascade Range',
                'Contains over 200 mountain ranges',
                'Characterized by Basin and Range topography',
                'Great Salt Lake is largest Western Hemisphere salt lake',
                'Sagebrush steppe dominates vegetation',
                'Winter snowfall provides most moisture'
              ]
            },
            {
              name: 'Patagonian Desert',
              location: 'Argentina (Patagonia region)',
              keyDetails: '673,000 km², largest desert in Americas',
              link: '/encyclopedia/deserts/patagonian',
              image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
              notableFeatures: [
                'Rain shadow of the Andes Mountains',
                'Cold desert with strong persistent winds',
                'Semi-arid steppe vegetation',
                'Home to guanacos, rheas, and Patagonian maras',
                'Perito Moreno Glacier contrasts nearby aridity',
                'Welsh settlers established communities in 1860s'
              ]
            },
            {
              name: 'Gobi Desert',
              location: 'Mongolia and China',
              keyDetails: '1.3 million km², famous for dinosaur fossils',
              link: '/encyclopedia/deserts/gobi',
              image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
              notableFeatures: [
                'Rain shadow of the Himalayas',
                'Cold desert with winter temperatures to -40°C',
                'Major paleontological site (dinosaur eggs discovered 1923)',
                'Part of ancient Silk Road trading route',
                'Home to critically endangered Gobi bears and wild camels',
                'Expanding southward at 3,600 km² per year'
              ]
            },
            {
              name: 'Mojave Desert',
              location: 'USA (California, Nevada, Utah, Arizona)',
              keyDetails: '124,000 km², transitional desert with Joshua trees',
              link: '/encyclopedia/deserts/mojave',
              image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
              notableFeatures: [
                'Rain shadow of Sierra Nevada and Transverse Ranges',
                'Joshua trees are iconic endemic species',
                'Death Valley is lowest point in North America (-86m)',
                'Highest reliably recorded temperature: 56.7°C',
                'Contains vast solar energy installations',
                'Mojave rattlesnake is North America\'s most toxic'
              ]
            },
            {
              name: 'Judean Desert',
              location: 'Israel and West Bank',
              keyDetails: '1,500 km², rain shadow east of Judean mountains',
              link: '/encyclopedia/deserts/judean',
              image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800',
              notableFeatures: [
                'Rain shadow of Judean Mountains',
                'Contains Dead Sea—lowest point on Earth (-430m)',
                'Masada fortress is UNESCO World Heritage Site',
                'Qumran caves held Dead Sea Scrolls',
                'Supports ibex and leopard populations',
                'Flash floods create dramatic wadi systems'
              ]
            },
            {
              name: 'Ladakh Cold Desert',
              location: 'India (Ladakh region)',
              keyDetails: '45,000 km², high-altitude rain shadow desert',
              link: '/encyclopedia/deserts/ladakh',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
              notableFeatures: [
                'Rain shadow of the Greater Himalayas',
                'Altitude ranges from 3,000 to 7,000 meters',
                'Winter temperatures drop to -40°C',
                'Buddhist monasteries perch on dramatic cliffs',
                'Snow leopards inhabit highest elevations',
                'Precipitation mostly as winter snow (100-300mm)'
              ]
            }
          ],
          
          distribution: {
            continents: ['North America', 'South America', 'Asia', 'Australia'],
            mapImage: 'assets/rain-shadow-deserts-map.png',
            majorRegions: [
              { name: 'North American Great Basin', extent: '492,000 km²', features: 'Sierra Nevada and Cascade rain shadow, Basin and Range topography' },
              { name: 'Patagonia', extent: '673,000 km²', features: 'Andes rain shadow, cold windy steppe desert' },
              { name: 'Central Asian (Gobi)', extent: '1,300,000 km²', features: 'Himalayan rain shadow, extreme continental climate' },
              { name: 'Tibetan Plateau', extent: 'Part of 2,500,000 km² plateau', features: 'Multiple rain shadows, high-altitude cold desert' },
              { name: 'Australian Leeward', extent: 'Variable', features: 'Great Dividing Range rain shadow effects' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 3: COASTAL DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'coastal-deserts',
          name: 'Coastal (Cold Current) Deserts',
          icon: '🌊',
          color: '#4A90A4',
          definition: 'Coastal deserts form along western continental margins where cold ocean currents flow parallel to the shore, creating a temperature inversion that prevents moisture from reaching the land. Despite being adjacent to the ocean, these deserts are among the driest on Earth. Cold water chills the air above it, creating fog but preventing the convective uplift needed for rainfall. The Atacama Desert has locations that have never recorded rain in human history, yet is frequently bathed in fog called "camanchaca."',
          
          formation: {
            title: 'How Coastal Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Cold water upwells from deep ocean (1,000-3,000m depth) along the western continental margin due to prevailing wind patterns and the Coriolis effect.', icon: '🌊' },
              { step: 2, text: 'This cold current (e.g., Humboldt Current off South America, Benguela Current off Africa) runs parallel to the coast.', icon: '❄️' },
              { step: 3, text: 'The cold water chills the overlying air to near or below the dew point, creating dense coastal fog (marine layer).', icon: '🌫️' },
              { step: 4, text: 'A temperature inversion forms: cold air at the surface, warmer air above, creating a stable atmospheric lid.', icon: '📊' },
              { step: 5, text: 'This inversion prevents convective uplift—air cannot rise to form rain clouds.', icon: '⛔' },
              { step: 6, text: 'The subtropical high-pressure system reinforces stability, further blocking precipitation.', icon: '⬇️' },
              { step: 7, text: 'Trade winds blow offshore or parallel to the coast, preventing moisture-laden air from reaching land.', icon: '💨' },
              { step: 8, text: 'Although fog forms frequently, it rarely penetrates far inland and evaporates quickly in the morning sun.', icon: '☀️' },
              { step: 9, text: 'The cold current also suppresses tropical storm formation, eliminating hurricane rainfall.', icon: '🌀' },
              { step: 10, text: 'This combination creates hyper-arid conditions where some areas receive measurable rain only once per decade—or never.', icon: '🏜️' }
            ],
            animation: 'assets/coastal-desert-formation.mp4'
          },
          
          characteristics: [
            'Located on western coasts with cold offshore currents',
            'Extremely low precipitation despite ocean proximity',
            'Frequent dense fog (fog deserts) providing some moisture',
            'Cool temperatures moderated by ocean influence',
            'Temperature rarely exceeds 30°C even in summer',
            'Small annual and daily temperature ranges compared to interior deserts',
            'High humidity in coastal strip, extremely dry inland',
            'Strong temperature inversions prevent convective rainfall',
            'Unique fog-dependent ecosystems (lomas vegetation)',
            'Rich offshore marine life due to nutrient upwelling',
            'Important seabird and marine mammal colonies',
            'Salt accumulation on soil surface from fog drip',
            'Camanchaca/garúa fog provides moisture for specialized plants',
            'Some of Earth\'s oldest desert surfaces with minimal weathering',
            'Often rich in mineral deposits (copper, nitrates, diamonds)'
          ],
          
          examples: [
            {
              name: 'Atacama Desert',
              location: 'Chile and Peru',
              keyDetails: '105,000 km², driest hot desert on Earth, some areas with zero recorded rainfall',
              link: '/encyclopedia/deserts/atacama',
              image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
              notableFeatures: [
                'Driest non-polar desert (under 1mm annual precipitation)',
                'Some weather stations have never recorded rain',
                'Moon Valley mimics lunar landscape',
                'World\'s best astronomical observation sites',
                'Largest known copper deposits globally',
                'Soil so sterile it\'s used to test Mars life-detection instruments'
              ]
            },
            {
              name: 'Namib Desert',
              location: 'Namibia, Angola, South Africa',
              keyDetails: '81,000 km², 55-80 million years old, possibly Earth\'s oldest desert',
              link: '/encyclopedia/deserts/namib',
              image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800',
              notableFeatures: [
                'World\'s oldest desert (55-80 million years)',
                'Sossusvlei dunes reach 325 meters—tallest in world',
                'Skeleton Coast shipwrecks from treacherous fog',
                'Welwitschia plants live 1,000+ years on fog moisture alone',
                'Fog-basking beetles harvest water from their shells',
                'Diamond deposits in coastal sands'
              ]
            },
            {
              name: 'Sechura Desert',
              location: 'Peru (northwest coast)',
              keyDetails: '5,000 km², fog oases support unique ecosystems',
              link: '/encyclopedia/deserts/sechura',
              image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
              notableFeatures: [
                'Garúa fog provides seasonal moisture',
                'Lomas vegetation blooms with fog season',
                'Ancient Moche and Chimú civilizations thrived here',
                'Guano islands offshore historically important for fertilizer',
                'El Niño events can bring devastating floods',
                'Sechuran fox is endemic species'
              ]
            },
            {
              name: 'Baja California Desert',
              location: 'Mexico (Baja California Peninsula)',
              keyDetails: '77,700 km², influenced by cold California Current',
              link: '/encyclopedia/deserts/baja-california',
              image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
              notableFeatures: [
                'Vizcaino Desert is largest subdivision',
                'Gray whale breeding lagoons in desert bays',
                'Cardon cactus—world\'s tallest cactus species',
                'Endemic Baja California pronghorn critically endangered',
                'Cave paintings in Sierra de San Francisco (UNESCO)',
                'Sea of Cortez adjacent is biodiversity hotspot'
              ]
            },
            {
              name: 'Western Sahara Coast',
              location: 'Western Sahara, Mauritania (Atlantic coast)',
              keyDetails: 'Coastal strip influenced by cold Canary Current',
              link: '/encyclopedia/deserts/western-sahara-coast',
              image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
              notableFeatures: [
                'Canary Current creates coastal fog zones',
                'Rich fishing grounds offshore (one of world\'s richest)',
                'Monk seal populations in coastal caves',
                'Historically important Mauritanian caravan routes',
                'Sand dunes meet Atlantic Ocean',
                'Nouadhibou ship graveyard is largest in world'
              ]
            }
          ],
          
          distribution: {
            continents: ['South America', 'Africa', 'North America'],
            mapImage: 'assets/coastal-deserts-map.png',
            majorRegions: [
              { name: 'Atacama-Sechura', extent: '110,000 km²', features: 'Humboldt (Peru) Current, world\'s driest non-polar desert' },
              { name: 'Namib', extent: '81,000 km²', features: 'Benguela Current, oldest desert on Earth' },
              { name: 'Baja-Sonoran Coast', extent: '80,000 km²', features: 'California Current influence' },
              { name: 'West African Coast', extent: 'Variable', features: 'Canary Current, coastal Sahara influence' },
              { name: 'Australian West Coast', extent: 'Small areas', features: 'West Australian Current, minor influence' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 4: POLAR / COLD DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'polar-deserts',
          name: 'Polar (Cold) Deserts',
          icon: '🧊',
          color: '#87CEEB',
          definition: 'Polar deserts are regions at high latitudes (generally above 60°) where extremely cold temperatures cause water to exist primarily as ice, making liquid water unavailable for biological processes. Despite containing vast amounts of frozen water, these regions receive minimal annual precipitation—often less than 250mm—qualifying them as true deserts. Antarctica and the Arctic contain the largest deserts on Earth by area. The extreme cold, polar night, and intense winds create the harshest environment for life anywhere on the planet.',
          
          formation: {
            title: 'How Polar Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Earth\'s axial tilt causes polar regions to receive minimal direct solar radiation, especially during winter months.', icon: '🌍' },
              { step: 2, text: 'Low solar angle means sunlight travels through more atmosphere and strikes at an oblique angle, reducing heating.', icon: '☀️' },
              { step: 3, text: 'The high albedo (reflectivity) of ice and snow reflects up to 90% of incoming solar radiation back to space.', icon: '✨' },
              { step: 4, text: 'This creates a positive feedback loop: cold temperatures preserve ice, ice reflects heat, maintaining cold temperatures.', icon: '🔄' },
              { step: 5, text: 'Cold air holds very little water vapor (cold air saturation point is extremely low).', icon: '❄️' },
              { step: 6, text: 'Descending air over the polar high-pressure cells prevents cloud formation and precipitation.', icon: '⬇️' },
              { step: 7, text: 'What precipitation does occur typically falls as fine ice crystals or "diamond dust" rather than rain or snow.', icon: '💎' },
              { step: 8, text: 'The polar vortex creates circumpolar winds that largely block warmer, moister air from reaching the interior.', icon: '🌀' },
              { step: 9, text: 'Continental interiors (especially Antarctica) are further from oceanic moisture sources.', icon: '🗺️' },
              { step: 10, text: 'Despite massive ice accumulation over millions of years, annual precipitation in interior regions is under 50mm—less than the Sahara.', icon: '📊' }
            ],
            animation: 'assets/polar-desert-formation.mp4'
          },
          
          characteristics: [
            'Located above 60° latitude (polar regions)',
            'Annual precipitation typically below 250mm, often below 100mm',
            'Most precipitation falls as ice crystals or very light snow',
            'Temperatures can drop below -80°C in winter (Antarctic interior)',
            'Summer temperatures rarely exceed 0°C except in coastal areas',
            'Water exists primarily in frozen form, unavailable for organisms',
            'Extreme wind chill factors make actual temperatures even more severe',
            'Katabatic winds can exceed 300 km/h',
            'Polar night provides months of complete darkness in winter',
            'Midnight sun provides continuous daylight in summer',
            'Permafrost extends to great depths (up to 1,500m in Siberia)',
            'Very low biodiversity except in coastal marine ecosystems',
            'Ice sheets can be over 4 km thick',
            'Ground surface often rocky (nunataks) or ice-covered',
            'Unique phenomena: aurora, sun dogs, ice halos'
          ],
          
          examples: [
            {
              name: 'Antarctic Desert',
              location: 'Antarctica',
              keyDetails: '14.2 million km², largest desert on Earth, ice sheet up to 4.8km thick',
              link: '/encyclopedia/deserts/antarctic',
              image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800',
              notableFeatures: [
                'Largest desert on Earth by area',
                'Interior receives less than 50mm precipitation annually',
                'Coldest temperature recorded: -89.2°C at Vostok Station',
                'Contains 70% of Earth\'s fresh water as ice',
                'McMurdo Dry Valleys are most Mars-like environment on Earth',
                'Emperor penguins breed in -40°C temperatures'
              ]
            },
            {
              name: 'Arctic Desert',
              location: 'Arctic regions (Canada, Russia, Greenland, Svalbard)',
              keyDetails: '13.9 million km² (seasonal ice), polar bear habitat',
              link: '/encyclopedia/deserts/arctic',
              image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800',
              notableFeatures: [
                'Second-largest desert after Antarctica',
                'Sea ice extent varies dramatically with seasons',
                'Supports polar bears, Arctic foxes, and muskoxen',
                'Indigenous peoples (Inuit, Sami, Nenets) have thrived for millennia',
                'Northern Sea Route becoming viable due to ice loss',
                'Permafrost contains 1,400 gigatons of carbon'
              ]
            },
            {
              name: 'Greenland Ice Desert',
              location: 'Greenland (interior ice sheet)',
              keyDetails: '1.71 million km² ice sheet, second-largest ice body on Earth',
              link: '/encyclopedia/deserts/greenland',
              image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800',
              notableFeatures: [
                'Ice sheet up to 3.2km thick',
                'Would raise sea level 7.4m if completely melted',
                'Summit station receives ~150mm annual precipitation',
                'Contains ice core records spanning 100,000+ years',
                'Ice sheet losing 280 billion tons annually',
                'Nunataks (rocky peaks) protrude through ice'
              ]
            },
            {
              name: 'McMurdo Dry Valleys',
              location: 'Antarctica (Victoria Land)',
              keyDetails: '4,800 km², ice-free polar desert',
              link: '/encyclopedia/deserts/mcmurdo-dry-valleys',
              image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
              notableFeatures: [
                'Largest ice-free region in Antarctica',
                'Receives less than 10mm precipitation annually',
                'Katabatic winds exceed 320 km/h',
                'Blood Falls seeps iron-rich water from ancient microbes',
                'Used as analog for Mars surface conditions',
                'Mummified seals found dozens of kilometers from ocean'
              ]
            },
            {
              name: 'Russian Arctic Islands',
              location: 'Russia (Franz Josef Land, Severnaya Zemlya, New Siberian Islands)',
              keyDetails: 'Multiple archipelagos totaling ~92,000 km²',
              link: '/encyclopedia/deserts/russian-arctic-islands',
              image: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800',
              notableFeatures: [
                'Northernmost land in Russia (Rudolf Island: 81.8°N)',
                'Cold War-era military installations now abandoned',
                'Walrus and polar bear stronghold',
                'Rapidly losing glacial ice due to warming',
                'Mammoth remains preserved in permafrost',
                'Northern Sea Route transit point'
              ]
            }
          ],
          
          distribution: {
            continents: ['Antarctica', 'North America', 'Europe', 'Asia'],
            mapImage: 'assets/polar-deserts-map.png',
            majorRegions: [
              { name: 'Antarctic Continent', extent: '14,200,000 km²', features: 'Largest desert, coldest temperatures, thickest ice' },
              { name: 'Arctic Basin', extent: '13,900,000 km²', features: 'Sea ice and surrounding tundra-desert transition' },
              { name: 'Greenland Interior', extent: '1,710,000 km²', features: 'Second-largest ice sheet, extreme isolation' },
              { name: 'Canadian Arctic Archipelago', extent: '1,400,000 km²', features: 'Multiple islands with polar desert climate' },
              { name: 'Russian Arctic', extent: '~2,000,000 km²', features: 'Siberian Arctic coast and islands' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 5: INTERIOR / CONTINENTAL DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'continental-deserts',
          name: 'Interior (Continental) Deserts',
          icon: '🗺️',
          color: '#C19A6B',
          definition: 'Continental deserts form in the interior of large landmasses, far from oceanic moisture sources. By the time air masses travel hundreds or thousands of kilometers from the ocean, they have lost most of their moisture through precipitation along the way. These mid-latitude deserts experience extreme continentality: scorching summers, frigid winters, and dramatic temperature swings. Central Asian deserts exemplify this type, isolated from all oceans by vast distances and mountain ranges that further block moisture.',
          
          formation: {
            title: 'How Continental Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Vast continental landmasses place interior regions thousands of kilometers from oceanic moisture sources.', icon: '🗺️' },
              { step: 2, text: 'Air masses moving inland progressively lose moisture through precipitation as they travel.', icon: '🌧️' },
              { step: 3, text: 'By the time air reaches continental interiors, relative humidity has dropped dramatically.', icon: '💨' },
              { step: 4, text: 'Mountain ranges surrounding interior basins (Himalayas, Tian Shan, Altai) block remaining moisture.', icon: '🏔️' },
              { step: 5, text: 'Distance from moderating ocean influence creates extreme continental climate.', icon: '🌡️' },
              { step: 6, text: 'Winters become severely cold as continents cool rapidly without oceanic heat buffer.', icon: '❄️' },
              { step: 7, text: 'Summers become extremely hot as land heats faster than oceans.', icon: '🔥' },
              { step: 8, text: 'High pressure develops over cold winter continents, blocking precipitation.', icon: '⬇️' },
              { step: 9, text: 'Low pressure in summer can draw some moisture but typically not enough to overcome aridity.', icon: '⬆️' },
              { step: 10, text: 'Enclosed drainage basins accumulate salt from evaporating waters, creating salt flats and brackish lakes.', icon: '🧂' }
            ],
            animation: 'assets/continental-desert-formation.mp4'
          },
          
          characteristics: [
            'Located in continental interiors far from oceans',
            'Extreme annual temperature ranges (>40°C between seasons)',
            'Summer highs can exceed 40°C, winter lows below -30°C',
            'Very low relative humidity year-round',
            'Sparse, irregular precipitation (100-300mm annually)',
            'Often surrounded by mountain ranges creating basin topography',
            'Endorheic (enclosed) drainage basins common',
            'Salt flats and brackish/saline lakes characteristic',
            'Loess (wind-blown silt) deposits extensive in some areas',
            'Cold winters distinguish from subtropical deserts',
            'Strong seasonal wind patterns',
            'Low biodiversity adapted to extreme temperatures',
            'Historical Silk Road traversed these regions',
            'Nomadic pastoralism traditional land use',
            'Shrub-steppe vegetation transitions to true desert'
          ],
          
          examples: [
            {
              name: 'Karakum Desert',
              location: 'Turkmenistan (Central Asia)',
              keyDetails: '350,000 km², 70% of Turkmenistan, gas reserves',
              link: '/encyclopedia/deserts/karakum',
              image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
              notableFeatures: [
                'Name means "Black Sand" in Turkic',
                'Darvaza Gas Crater ("Door to Hell") burns continuously since 1971',
                'Summer temperatures exceed 50°C',
                'Karakum Canal is world\'s largest irrigation canal',
                'Home to rare goitered gazelle and caracal',
                'Historic Merv oasis (UNESCO) on desert edge'
              ]
            },
            {
              name: 'Kyzylkum Desert',
              location: 'Uzbekistan and Kazakhstan',
              keyDetails: '298,000 km², shrinking Aral Sea borders it',
              link: '/encyclopedia/deserts/kyzylkum',
              image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
              notableFeatures: [
                'Name means "Red Sand" in Turkic',
                'Contains significant gold and uranium deposits',
                'Bukara and Samarkand oases were Silk Road jewels',
                'Summer-winter temperature range exceeds 70°C',
                'Shrinking Aral Sea creating new desert areas',
                'Saiga antelope critically endangered here'
              ]
            },
            {
              name: 'Taklamakan Desert',
              location: 'China (Xinjiang, Tarim Basin)',
              keyDetails: '337,000 km², world\'s second-largest shifting sand desert',
              link: '/encyclopedia/deserts/taklamakan',
              image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
              notableFeatures: [
                'Name allegedly means "Place of No Return"',
                'Surrounded by Himalayas, Kunlun, Tian Shan, and Pamir mountains',
                'Nearly 85% covered by shifting sand dunes',
                'Winter temperatures drop to -20°C despite latitude',
                'Mummies preserved 4,000 years in arid conditions',
                'Cross-desert highway completed 1995'
              ]
            },
            {
              name: 'Gobi Desert',
              location: 'Mongolia and China',
              keyDetails: '1.3 million km², fifth-largest desert, dinosaur fossils',
              link: '/encyclopedia/deserts/gobi',
              image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
              notableFeatures: [
                'Cold desert with snow in winter',
                'Temperature range from -40°C to +45°C',
                'Flaming Cliffs famous for dinosaur egg discoveries',
                'Expanding ~3,600 km² annually (desertification)',
                'Wild Bactrian camels critically endangered',
                'Mongolian nomads practice traditional herding'
              ]
            },
            {
              name: 'Ordos Desert',
              location: 'China (Inner Mongolia)',
              keyDetails: '90,650 km², within Yellow River loop',
              link: '/encyclopedia/deserts/ordos',
              image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
              notableFeatures: [
                'Enclosed by bend of Yellow River',
                'Major coal reserves beneath desert',
                'Genghis Khan\'s mausoleum in region',
                'Extensive reforestation efforts underway',
                '響沙灣 (Resonant Sand Bay) singing dunes',
                'Combination of sandy and rocky desert'
              ]
            },
            {
              name: 'Dasht-e Kavir',
              location: 'Iran (central plateau)',
              keyDetails: '77,600 km², salt marshes and kavirs',
              link: '/encyclopedia/deserts/dasht-e-kavir',
              image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
              notableFeatures: [
                'Name means "Great Salt Desert" in Persian',
                'Treacherous salt crust hides mud beneath',
                'Historic obstacle on Silk Road routes',
                'Summer highs above 50°C, winter below -10°C',
                'Virtually no permanent settlements',
                'Rich mineral deposits including copper'
              ]
            },
            {
              name: 'Dasht-e Lut',
              location: 'Iran (southeastern plateau)',
              keyDetails: '51,800 km², hottest surface temperature recorded (70.7°C)',
              link: '/encyclopedia/deserts/dasht-e-lut',
              image: 'https://images.unsplash.com/photo-1524996048207-b5bc1a21aad4?w=800',
              notableFeatures: [
                'UNESCO World Heritage Site (2016)',
                'Highest surface temperature ever recorded: 70.7°C',
                'Kaluts (yardangs) form dramatic wind-carved ridges',
                'Considered abiotic—nearly lifeless in hottest areas',
                'Sand-free in eastern portion',
                'Meteorites well-preserved in dry conditions'
              ]
            }
          ],
          
          distribution: {
            continents: ['Asia', 'North America', 'Australia'],
            mapImage: 'assets/continental-deserts-map.png',
            majorRegions: [
              { name: 'Central Asian Deserts', extent: '2,000,000+ km²', features: 'Karakum, Kyzylkum, Taklamakan, isolated from all oceans' },
              { name: 'Iranian Plateau', extent: '130,000 km²', features: 'Dasht-e Kavir and Dasht-e Lut, extreme temperatures' },
              { name: 'Gobi Region', extent: '1,300,000 km²', features: 'Cold desert, Himalayan rain shadow and continentality combined' },
              { name: 'Western Chinese Basins', extent: '500,000+ km²', features: 'Tarim and Junggar basins, mountain-enclosed' },
              { name: 'Australian Interior', extent: 'Variable', features: 'Some continentality effects, mainly subtropical influence' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 6: MONSOON DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'monsoon-deserts',
          name: 'Monsoon (Seasonal) Deserts',
          icon: '🌦️',
          color: '#DAA520',
          definition: 'Monsoon deserts occur in regions that lie at the edge of monsoonal circulation patterns, receiving brief seasonal rainfall but experiencing prolonged dry periods for most of the year. These transitional zones may receive substantial rainfall during the wet monsoon (2-4 months) but remain arid during the remaining 8-10 months. The Thar Desert exemplifies this type: summer monsoon brings 100-500mm of rain, but intense heat and evaporation during the long dry season maintain desert conditions. These deserts are often densely populated, as seasonal water makes human habitation possible.',
          
          formation: {
            title: 'How Monsoon Deserts Form - Complete Process',
            steps: [
              { step: 1, text: 'Seasonal heating of continental landmasses creates low-pressure zones that draw in moist oceanic air.', icon: '☀️' },
              { step: 2, text: 'The monsoon wind system reverses direction between seasons: onshore in summer, offshore in winter.', icon: '🔄' },
              { step: 3, text: 'Summer monsoon brings moisture-laden air from oceans toward heated continents.', icon: '💨' },
              { step: 4, text: 'Regions at the western or northern edge of monsoon circulation receive limited, unreliable rainfall.', icon: '🌧️' },
              { step: 5, text: 'Monsoon moisture is largely exhausted before reaching these peripheral regions.', icon: '📉' },
              { step: 6, text: 'Brief wet season (typically 2-4 months) provides 100-500mm of annual precipitation.', icon: '⛈️' },
              { step: 7, text: 'Extreme heat during pre-monsoon months (April-June) causes intense evaporation.', icon: '🔥' },
              { step: 8, text: 'Long dry winter and pre-monsoon seasons (8-10 months) maintain overall aridity.', icon: '🏜️' },
              { step: 9, text: 'Potential evapotranspiration exceeds precipitation for most of the year.', icon: '⬆️' },
              { step: 10, text: 'Interannual monsoon variability causes alternating floods and droughts.', icon: '📊' }
            ],
            animation: 'assets/monsoon-desert-formation.mp4'
          },
          
          characteristics: [
            'Located at margins of Asian and African monsoon systems',
            'Receive seasonal rainfall during 2-4 month monsoon period',
            'Annual precipitation typically 100-500mm, highly variable',
            'Long dry season (8-10 months) with virtually no rain',
            'Extreme pre-monsoon temperatures (45-50°C common)',
            'High interannual rainfall variability',
            'Periodic droughts and floods both common',
            'Often among the most densely populated deserts',
            'Traditional water harvesting systems developed',
            'Seasonal grazing patterns (transhumance) common',
            'Vegetation greens briefly during monsoon',
            'Agriculture possible with irrigation and water storage',
            'Dust storms common in pre-monsoon months',
            'Cultural adaptations include seasonal migration',
            'Ephemeral streams and lakes fill during monsoon'
          ],
          
          examples: [
            {
              name: 'Thar Desert',
              location: 'India (Rajasthan, Gujarat) and Pakistan (Sindh, Punjab)',
              keyDetails: '200,000 km², world\'s most densely populated desert (83 people/km²)',
              link: '/encyclopedia/deserts/thar',
              image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
              notableFeatures: [
                'World\'s most densely populated desert',
                'Home to 23 million people',
                'Summer monsoon brings 100-500mm rainfall',
                'Jaisalmer "Golden City" and other historic forts',
                'Great Indian Bustard critically endangered',
                'Extensive traditional stepwells and johads'
              ]
            },
            {
              name: 'Cholistan Desert',
              location: 'Pakistan (Punjab)',
              keyDetails: '26,330 km², continuation of Thar Desert',
              link: '/encyclopedia/deserts/cholistan',
              image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
              notableFeatures: [
                'Part of the greater Thar Desert ecosystem',
                'Derawar Fort is iconic 9th-century structure',
                'Semi-nomadic Rohi people practice transhumance',
                'Annual Cholistan Jeep Rally draws visitors',
                'Hakra River once flowed through (now dried)',
                'Summer monsoon provides brief greening'
              ]
            },
            {
              name: 'Sahel Region',
              location: 'Africa (Mauritania to Sudan)',
              keyDetails: '5.4 million km² semi-arid belt south of Sahara',
              link: '/encyclopedia/deserts/sahel',
              image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
              notableFeatures: [
                'Transition zone between Sahara and savanna',
                'Rainfall varies 200-600mm, entirely seasonal',
                'Home to 150+ million people',
                'Lake Chad has shrunk 90% since 1960s',
                'Great Green Wall project planting trees',
                'Frequent drought-induced famines'
              ]
            },
            {
              name: 'Karoo',
              location: 'South Africa (Northern, Western, Eastern Cape)',
              keyDetails: '400,000 km², semi-arid plateau influenced by seasonal rainfall',
              link: '/encyclopedia/deserts/karoo',
              image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
              notableFeatures: [
                'Name from Khoisan meaning "Land of Thirst"',
                'Contains exceptional fossil record (Permian/Triassic)',
                'Summer rainfall in east, winter in west',
                'World\'s richest succulent diversity',
                'Sheep farming major land use',
                'Dark skies attract astronomers (SALT telescope)'
              ]
            },
            {
              name: 'Ethiopian Rift Deserts',
              location: 'Ethiopia (Afar, Danakil Depression)',
              keyDetails: 'Danakil is one of Earth\'s lowest, hottest, most alien landscapes',
              link: '/encyclopedia/deserts/ethiopian-rift',
              image: 'https://images.unsplash.com/photo-1524996048207-b5bc1a21aad4?w=800',
              notableFeatures: [
                'Danakil Depression 125m below sea level',
                'Dallol holds record hottest annual temperature (34.4°C average)',
                'Active volcanoes and lava lakes (Erta Ale)',
                'Sulfur springs create surreal colorful landscapes',
                'Afar people mine salt as they have for centuries',
                'Three tectonic plates meeting'
              ]
            }
          ],
          
          distribution: {
            continents: ['Asia', 'Africa', 'Australia'],
            mapImage: 'assets/monsoon-deserts-map.png',
            majorRegions: [
              { name: 'Thar-Cholistan', extent: '226,000 km²', features: 'India-Pakistan border, edge of Indian monsoon' },
              { name: 'Sahel Belt', extent: '5,400,000 km²', features: 'Trans-Africa, West African monsoon margin' },
              { name: 'Horn of Africa', extent: '~1,000,000 km²', features: 'Somalia, Djibouti, Ethiopia—inconsistent monsoon' },
              { name: 'Australian Monsoonal Fringe', extent: 'Variable', features: 'Northern Australia transitions to desert' },
              { name: 'Southern African', extent: '400,000+ km²', features: 'Karoo, Namib fringes, seasonal rainfall' }
            ]
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // TYPE 7: PALEOCLIMATE / ANCIENT DESERTS
        // ─────────────────────────────────────────────────────────────────────
        {
          id: 'ancient-deserts',
          name: 'Paleodeserts (Ancient/Relict Deserts)',
          icon: '⏳',
          color: '#A0522D',
          definition: 'Paleodeserts are ancient desert landscapes that formed millions of years ago and have persisted through dramatic climate changes, or regions that preserve evidence of past desert conditions now buried or vegetated. These include the Namib Desert (55-80 million years old) and fossil dune systems found worldwide. Studying paleodeserts reveals how Earth\'s climate zones have shifted over geological time and provides insights into future climate change. Some paleodesertsremain active; others are "fossil" deserts now under different climates.',
          
          formation: {
            title: 'How Ancient Deserts Persist or Form - Complete Process',
            steps: [
              { step: 1, text: 'Plate tectonics position landmasses in arid climate zones (subtropical, continental, coastal current) tens of millions of years ago.', icon: '🌍' },
              { step: 2, text: 'Desert conditions establish and persist if plate movement keeps the region in an arid zone.', icon: '🏜️' },
              { step: 3, text: 'Mountain building (orogeny) can create long-term rain shadow effects lasting millions of years.', icon: '🏔️' },
              { step: 4, text: 'Ocean current patterns, once established, may persist for millions of years maintaining coastal aridity.', icon: '🌊' },
              { step: 5, text: 'Desert surfaces age slowly due to minimal chemical weathering, preserving ancient landforms.', icon: '🪨' },
              { step: 6, text: 'Desert varnish, ancient pavements, and ventifacts develop over hundreds of thousands of years.', icon: '⏳' },
              { step: 7, text: 'Climate oscillations (ice ages, wet periods) may temporarily reduce aridity but rarely eliminate desert entirely.', icon: '🔄' },
              { step: 8, text: 'Ancient lake beds, dune fields, and evaporite deposits preserve evidence of paleoclimate.', icon: '📚' },
              { step: 9, text: 'Endemic species evolve over millions of years, becoming uniquely adapted to specific deserts.', icon: '🦎' },
              { step: 10, text: 'Geological stability allows uninterrupted desert evolution for tens of millions of years.', icon: '📊' }
            ],
            animation: 'assets/paleodesert-evolution.mp4'
          },
          
          characteristics: [
            'Extremely old landscapes (tens of millions of years)',
            'High degree of endemism—species found nowhere else',
            'Ancient, deeply weathered landforms',
            'Thick desert pavements with heavy varnish coatings',
            'Fossil dune systems preserved in rock record',
            'Ancient evaporite deposits (salt, gypsum, borax)',
            'Low relief due to long erosional history',
            'Often positioned near stable plate interiors',
            'May contain evidence of wetter paleoclimate periods',
            'Exceptionally adapted endemic flora and fauna',
            'Minimal soil development even over millions of years',
            'Valuable paleoclimate archives in sediment layers',
            'Often contain economically important mineral deposits',
            'Unique geological features found nowhere else',
            'Showcase stability of certain climate zones'
          ],
          
          examples: [
            {
              name: 'Namib Desert',
              location: 'Namibia, Angola, South Africa',
              keyDetails: '55-80 million years old, world\'s oldest desert',
              link: '/encyclopedia/deserts/namib',
              image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800',
              notableFeatures: [
                'World\'s oldest desert (since Cretaceous)',
                'Benguela Current maintained aridity since dinosaur era',
                'Welwitschia mirabilis plants live 1,500+ years',
                'Fairy circles remain scientifically debated',
                'Sossusvlei dunes are orange-red from iron oxidation over time',
                '80% of species are endemic—found nowhere else'
              ]
            },
            {
              name: 'Simpson Desert',
              location: 'Australia (Northern Territory, Queensland, South Australia)',
              keyDetails: '176,500 km², parallel sand dunes formed over 1 million years',
              link: '/encyclopedia/deserts/simpson',
              image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
              notableFeatures: [
                'Over 1,100 parallel sand dunes',
                'Big Red is most famous dune (40m tall)',
                'Formed during Pleistocene ice ages',
                'Dunes aligned by prevailing winds over millennia',
                'Supports unique adaptated wildlife',
                'Aboriginal peoples have crossed it for 40,000+ years'
              ]
            },
            {
              name: 'Atacama Desert',
              location: 'Chile and Peru',
              keyDetails: 'Hyper-arid core has been dry for 15+ million years',
              link: '/encyclopedia/deserts/atacama',
              image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
              notableFeatures: [
                'Hyper-arid core dry since Miocene epoch',
                'Oldest known continuous desert conditions',
                'Nitrate deposits formed over millions of years',
                'NASA tests Mars instruments in sterile soils',
                'Chinchilla and viscacha are ancient endemic mammals',
                'Astronomical observations benefit from ancient stability'
              ]
            },
            {
              name: 'Navajo Sandstone (Fossil Desert)',
              location: 'USA (Utah, Arizona, Colorado)',
              keyDetails: '175-190 million-year-old petrified desert landscape',
              link: '/encyclopedia/deserts/navajo-sandstone',
              image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800',
              notableFeatures: [
                'Ancient sand dunes turned to stone',
                'Zion, Grand Staircase-Escalante showcase formations',
                'The Wave is global icon of paleodesert geology',
                'Cross-bedding reveals wind direction 180 million years ago',
                'Thickest eolian sandstone deposit in geological record',
                'Represents Jurassic-era erg rivaling modern Sahara'
              ]
            },
            {
              name: 'Central Saharan Paleodesert',
              location: 'Algeria, Libya, Niger (Saharan interior)',
              keyDetails: 'Desert conditions have existed cyclically for 7+ million years',
              link: '/encyclopedia/deserts/central-saharan-paleodesert',
              image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
              notableFeatures: [
                'Sahara has oscillated between desert and savanna',
                'Current arid phase began ~5,000-7,000 years ago',
                'Fossil river systems visible from space',
                'Ancient lake deposits contain fish and hippo remains',
                'Tassili n\'Ajjer rock art shows former green Sahara',
                '7 million-year-old Sahelanthropus tchadensis found here'
              ]
            },
            {
              name: 'Australian Interior Paleodeserts',
              location: 'Australia (interior regions)',
              keyDetails: 'Desert conditions established 1-2 million years ago',
              link: '/encyclopedia/deserts/australian-paleodeserts',
              image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
              notableFeatures: [
                'Aridification began as Australia drifted north',
                'Lake Eyre Basin was once vast lake system',
                'Sturt\'s Stony Desert pavements extremely ancient',
                'Megafauna adapted then went extinct with human arrival',
                'Aboriginal Dreamtime stories may record climate changes',
                'Relict species survive from wetter eras'
              ]
            }
          ],
          
          distribution: {
            continents: ['Africa', 'South America', 'Australia', 'North America', 'Asia'],
            mapImage: 'assets/paleodeserts-map.png',
            majorRegions: [
              { name: 'Namib Region', extent: '81,000 km²', features: 'World\'s oldest continuous desert, Cretaceous-era origin' },
              { name: 'Atacama Core', extent: '~30,000 km²', features: 'Hyper-arid core dry since Miocene (15+ million years)' },
              { name: 'Australian Interior', extent: '1,000,000+ km²', features: 'Multiple deserts with Pleistocene origins' },
              { name: 'Colorado Plateau Fossil Deserts', extent: '~337,000 km²', features: 'Navajo Sandstone and related Mesozoic ergs' },
              { name: 'Saharan Oscillation Zone', extent: '9,000,000 km²', features: 'Cyclic desert-savanna for 7+ million years' }
            ]
          }
        }
      ],

            // Continuing comparisonTable rows...
      comparisonTable: {
        title: 'Quick Comparison of All Desert Types',
        headers: ['Type', 'Formation Mechanism', 'Key Characteristics', 'Example', 'Precipitation'],
        rows: [
          ['Subtropical', 'Hadley cell subsidence at 20-30° latitude', 'Hottest deserts, clear skies, extreme temps', 'Sahara, Arabian', '<250mm'],
          ['Rain Shadow', 'Mountain barrier blocks moisture', 'Abrupt transition, leeward of ranges', 'Great Basin, Patagonian', '<300mm'],
          ['Coastal', 'Cold ocean current creates inversion', 'Fog-dependent, cool temps, hyper-arid', 'Atacama, Namib', '<50mm'],
          ['Polar', 'Extreme cold locks water as ice', 'Frozen, minimal life, largest deserts', 'Antarctic, Arctic', '<250mm'],
          ['Continental', 'Distance from ocean moisture sources', 'Extreme seasonal temps, enclosed basins', 'Gobi, Karakum', '100-300mm'],
          ['Monsoon', 'Edge of monsoon circulation', 'Seasonal rain, densely populated', 'Thar, Sahel', '100-500mm'],
          ['Paleodesert', 'Long-term tectonic positioning', 'Ancient landscapes, high endemism', 'Namib, Simpson', 'Variable']
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: FORMATION & CHARACTERISTICS
    // ═══════════════════════════════════════════════════════════════════════════
    formation: {
      title: 'How Deserts Form',
      hero: {
        image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1920',
        tagline: 'Understanding the Forces That Create Earth\'s Arid Lands'
      },
      renderAs: 'article',
      introduction: 'Desert formation is a complex interplay of atmospheric circulation, topography, ocean currents, and continental positioning. Unlike instantaneous geological events, deserts develop over thousands to millions of years through persistent climatic conditions that limit precipitation. Understanding desert formation requires knowledge of global wind patterns, the water cycle, plate tectonics, and energy balance. These forces work in combination—many deserts result from multiple mechanisms acting together. As climate changes, desert boundaries shift, and regions that were once green become arid while some deserts may retreat.',

      content: {
        introduction: 'Deserts form through six primary mechanisms, often working in combination. Atmospheric subsidence in subtropical regions, orographic rain shadows, cold ocean currents, extreme polar cold, continental isolation from moisture, and marginal monsoon positioning all contribute to creating and maintaining the world\'s arid lands.',

        formationProcesses: [
          {
            type: 'Atmospheric Subsidence (Subtropical Deserts)',
            icon: '⬇️',
            process: 'Global atmospheric circulation creates permanent high-pressure zones where dry air descends',
            steps: [
              { stage: 'Solar Heating', description: 'Intense equatorial heating causes air to rise rapidly', timeframe: 'Continuous process', detail: 'The equatorial region receives the most direct solar radiation, heating the air and causing it to rise in powerful convective currents. This rising air creates the Intertropical Convergence Zone (ITCZ).' },
              { stage: 'Moisture Loss', description: 'Rising air cools, condenses, and releases precipitation', timeframe: 'During ascent', detail: 'As air rises and expands in lower pressure, it cools at approximately 10°C per kilometer. When it reaches the dew point, water vapor condenses into clouds and falls as tropical rainfall.' },
              { stage: 'Poleward Flow', description: 'Dry air moves toward poles at high altitude', timeframe: 'Continuous', detail: 'Having lost its moisture, the air flows poleward at altitudes of 10-15 km, forming the upper branch of the Hadley cell. This air is extremely dry, having already released its precipitation.' },
              { stage: 'Subsidence', description: 'Air descends at 20-30° latitude, creating high pressure', timeframe: 'Continuous', detail: 'The air begins sinking around the subtropical latitudes, compressing and warming as it descends. This creates the subtropical high-pressure belt—areas of persistent clear skies and low humidity.' },
              { stage: 'Desert Conditions', description: 'Descending air warms, preventing cloud formation', timeframe: 'Permanent feature', detail: 'The subsiding air heats at the dry adiabatic rate (10°C/km), making it even drier. Relative humidity drops below 20%, cloud formation is suppressed, and desert conditions prevail.' }
            ],
            realWorldExample: 'The Sahara Desert spans 30°N latitude, directly beneath the descending branch of the northern Hadley cell, receiving only 25mm rainfall annually in its core.'
          },
          {
            type: 'Orographic Rain Shadow',
            icon: '🏔️',
            process: 'Mountain barriers force air to rise, lose moisture, then descend as dry wind',
            steps: [
              { stage: 'Air Mass Approach', description: 'Moisture-laden air moves toward mountain range', timeframe: 'Hours to days', detail: 'Prevailing winds carry moist air from oceans toward continental interiors. When this air encounters a mountain barrier, it has no option but to rise over the obstacle.' },
              { stage: 'Orographic Lifting', description: 'Air forced upward over mountain slopes', timeframe: 'Hours', detail: 'The air rises along the windward slope, cooling at approximately 10°C per kilometer initially (dry adiabatic rate), then at about 6°C per kilometer once saturated (moist adiabatic rate).' },
              { stage: 'Precipitation', description: 'Cooling causes condensation and heavy rainfall', timeframe: 'During ascent', detail: 'As the air cools below its dew point, clouds form and precipitation falls heavily on the windward slopes. Some windward mountain slopes receive over 10,000mm of rainfall annually.' },
              { stage: 'Summit Crossing', description: 'Now-dry air crosses mountain crest', timeframe: 'Hours', detail: 'By the time the air reaches the summit, it has lost most of its moisture. The air crossing the ridge is significantly drier than when it began its ascent.' },
              { stage: 'Leeward Descent', description: 'Air descends and warms rapidly', timeframe: 'Hours', detail: 'Descending on the leeward (downwind) side, the air compresses and warms at the dry adiabatic rate (10°C/km)—faster than it cooled while rising. This creates warm, dry föhn or chinook winds.' },
              { stage: 'Rain Shadow', description: 'Arid conditions on leeward slopes', timeframe: 'Permanent feature', detail: 'The descending air reaches the leeward lowlands much warmer and drier than when it started. Precipitation may be reduced by 90% or more compared to the windward side.' }
            ],
            realWorldExample: 'The Great Basin Desert receives less than 250mm annually, despite being at the same latitude as Oregon\'s rain forests that receive 2,000-3,000mm, because the Sierra Nevada intercepts Pacific moisture.'
          },
          {
            type: 'Cold Ocean Current Effect',
            icon: '🌊',
            process: 'Cold upwelling water chills air, creating inversions that prevent rainfall',
            steps: [
              { stage: 'Upwelling', description: 'Deep cold water rises along western continental margins', timeframe: 'Continuous', detail: 'Trade winds push surface water offshore (Ekman transport), allowing cold, nutrient-rich water from depths of 200-1,000m to rise to the surface along the coast.' },
              { stage: 'Air Chilling', description: 'Cold water chills overlying air to dew point', timeframe: 'Continuous', detail: 'The cold water (often 10-15°C cooler than expected for the latitude) chills the air immediately above it, often to or below the dew point.' },
              { stage: 'Fog Formation', description: 'Dense fog forms over cold water', timeframe: 'Especially overnight/morning', detail: 'The chilled, saturated air forms dense fog banks that may extend several hundred meters above the ocean surface. This fog rarely produces measurable precipitation.' },
              { stage: 'Temperature Inversion', description: 'Cold air at surface, warm air above', timeframe: 'Persistent', detail: 'A strong temperature inversion develops: cold, dense air is trapped near the surface beneath a layer of warmer air. This stable configuration prevents convective rising.' },
              { stage: 'Blocked Convection', description: 'Inversion prevents air from rising to form rain clouds', timeframe: 'Persistent', detail: 'Unlike normal atmospheric conditions where warm air rises freely, the inversion acts as a lid. Air cannot rise high enough to form cumulus clouds capable of producing rain.' },
              { stage: 'Hyper-Aridity', description: 'Extreme dryness despite ocean adjacency', timeframe: 'Permanent feature', detail: 'The result is paradoxical: despite being adjacent to the ocean, these coastal regions are among the driest on Earth. Some areas of the Atacama have never recorded rain.' }
            ],
            realWorldExample: 'The Namib Desert receives less than 15mm of rain annually, yet dense fog rolls in from the cold Benguela Current, which Welwitschia plants have evolved to harvest.'
          },
          {
            type: 'Polar Cold',
            icon: '❄️',
            process: 'Extreme cold locks water as ice, creating frozen deserts',
            steps: [
              { stage: 'Low Solar Input', description: 'Minimal direct sunlight at high latitudes', timeframe: 'Seasonal/permanent', detail: 'Earth\'s axial tilt causes polar regions to receive sunlight at oblique angles, spreading energy over larger areas. During polar winter, no sunlight reaches for months.' },
              { stage: 'High Albedo', description: 'Ice and snow reflect up to 90% of incoming solar radiation', timeframe: 'Self-reinforcing', detail: 'White surfaces reflect rather than absorb sunlight, preventing warming. This creates a positive feedback: cold maintains ice, ice reflects heat, maintaining cold.' },
              { stage: 'Cold Air Capacity', description: 'Cold air holds extremely little water vapor', timeframe: 'Physical law', detail: 'The saturation vapor pressure of air decreases exponentially with temperature. Air at -40°C can hold only 2% of the moisture that air at +20°C can hold.' },
              { stage: 'Descending Air', description: 'Polar high pressure causes subsidence', timeframe: 'Persistent', detail: 'Cold, dense air over polar regions creates persistent high-pressure systems. Air sinking from upper atmosphere warms and dries, further suppressing precipitation.' },
              { stage: 'Ice Desert', description: 'Precipitation falls as ice crystals, accumulating slowly', timeframe: 'Millennia', detail: 'What little precipitation occurs falls as fine ice crystals or light snow. Antarctic interior receives under 50mm water equivalent annually—less than the Sahara.' }
            ],
            realWorldExample: 'Antarctica is Earth\'s largest desert, receiving only 166mm of precipitation annually on the coast and less than 50mm in the interior, yet holds 70% of Earth\'s fresh water as accumulated ice.'
          },
          {
            type: 'Continental Isolation',
            icon: '🗺️',
            process: 'Distance from oceans depletes moisture from air masses',
            steps: [
              { stage: 'Ocean Evaporation', description: 'Moisture enters atmosphere over oceans', timeframe: 'Continuous', detail: 'The vast majority of atmospheric water vapor originates from ocean evaporation. Air masses acquire moisture proportional to time spent over water and water temperature.' },
              { stage: 'Overland Travel', description: 'Air masses move across continents', timeframe: 'Days to weeks', detail: 'As air masses move inland, they progressively lose moisture through precipitation. Each mountain range, forest, or water body extracts additional moisture.' },
              { stage: 'Progressive Drying', description: 'Moisture depleted with distance', timeframe: 'Continuous', detail: 'By the time air reaches continental interiors thousands of kilometers from oceans, relative humidity has dropped significantly. Multiple rain shadows compound the effect.' },
              { stage: 'Basin Enclosure', description: 'Mountains surround interior basins', timeframe: 'Permanent topography', detail: 'Central Asian deserts are surrounded by the Himalayas, Tian Shan, Kunlun, and other ranges that block moisture from all directions—Indian Ocean, Pacific, and Atlantic.' },
              { stage: 'Extreme Continentality', description: 'Lack of oceanic temperature moderation', timeframe: 'Seasonal extremes', detail: 'Without the thermal buffering of nearby oceans, continental interiors experience extreme temperature swings: scorching summers, frigid winters, and dramatic day-night differences.' }
            ],
            realWorldExample: 'The Taklamakan Desert, surrounded by mountains and over 2,000km from any ocean, receives less than 40mm of precipitation annually and experiences temperatures from -40°C to +45°C.'
          },
          {
            type: 'Monsoon Margin Effects',
            icon: '🌦️',
            process: 'Regions at the edge of monsoon systems receive inadequate seasonal rainfall',
            steps: [
              { stage: 'Monsoon Development', description: 'Seasonal heating creates continental low pressure', timeframe: 'Summer months', detail: 'Differential heating between land and ocean causes pressure differences. In summer, heated continents develop low pressure that draws in moist oceanic air.' },
              { stage: 'Moisture Transport', description: 'Moist air moves inland during wet season', timeframe: '2-4 months', detail: 'Monsoon winds carry moisture-laden air from oceans toward continental interiors. Rainfall is heavy where moisture first encounters land.' },
              { stage: 'Progressive Weakening', description: 'Monsoon moisture depletes with distance', timeframe: 'During monsoon', detail: 'As the monsoon penetrates inland, it progressively weakens. Regions at the northwestern or northern edge receive only the tail end of monsoon moisture.' },
              { stage: 'Long Dry Season', description: 'Offshore winds dominate 8-10 months', timeframe: 'Winter/pre-monsoon', detail: 'During the dry season, winds reverse to blow from continent to ocean, bringing no moisture. Pre-monsoon months (April-June) are especially hot and dry.' },
              { stage: 'Net Water Deficit', description: 'Evaporation exceeds precipitation annually', timeframe: 'Annual cycle', detail: 'Although seasonal rain may total 100-500mm, potential evapotranspiration can exceed 2,000mm. The net water balance remains negative, maintaining desert conditions.' }
            ],
            realWorldExample: 'The Thar Desert receives 100-500mm of monsoon rain during July-September, but intense heat causing evaporation of 2,000+ mm annually maintains desert conditions for the remainder of the year.'
          }
        ],

        characteristics: {
          title: 'Physical and Environmental Characteristics of Deserts',
          categories: [
            {
              name: 'Climatic Features',
              icon: '🌡️',
              features: [
                { feature: 'Aridity', description: 'Annual precipitation below 250mm, often below 100mm', significance: 'Defines desert classification and limits biological productivity' },
                { feature: 'Temperature Extremes', description: 'Hot deserts can exceed 50°C; cold deserts drop below -40°C', significance: 'Creates extreme survival challenges for organisms' },
                { feature: 'Diurnal Variation', description: 'Day-night temperature swings of 20-40°C common', significance: 'Low humidity allows rapid radiative cooling after sunset' },
                { feature: 'Low Humidity', description: 'Relative humidity often below 25%, sometimes below 5%', significance: 'Increases evaporation, desiccation stress on organisms' },
                { feature: 'Intense Solar Radiation', description: 'Clear skies allow maximum solar exposure', significance: 'Drives extreme surface heating, solar energy potential' },
                { feature: 'Minimal Cloud Cover', description: 'Many deserts have 90%+ sunny days annually', significance: 'Reduces precipitation potential, increases UV exposure' }
              ]
            },
            {
              name: 'Geomorphological Features',
              icon: '🏜️',
              features: [
                { feature: 'Sand Dunes (Erg)', description: 'Accumulations of wind-blown sand forming various dune types', significance: 'Only 20% of deserts; showcase aeolian processes' },
                { feature: 'Rocky Plateaus (Hamada)', description: 'Bare rock surfaces swept clean of fine material', significance: 'Wind removes transportable particles leaving bedrock' },
                { feature: 'Gravel Plains (Reg/Serir)', description: 'Flat surfaces covered with pebbles and small stones', significance: 'Desert pavement protects underlying material from erosion' },
                { feature: 'Dry Lake Beds (Playa)', description: 'Flat, salt-encrusted former lake floors', significance: 'Evidence of wetter paleoclimates; mineral deposits' },
                { feature: 'Wadis/Arroyos', description: 'Dry streambeds that flash flood after rare rains', significance: 'Channels water during rare precipitation events' },
                { feature: 'Yardangs', description: 'Wind-carved ridges aligned with prevailing wind', significance: 'Demonstrate long-term wind erosion patterns' },
                { feature: 'Alluvial Fans', description: 'Fan-shaped sediment deposits at mountain bases', significance: 'Created by flash floods depositing sediment' },
                { feature: 'Mesas and Buttes', description: 'Flat-topped erosional remnants', significance: 'Resistant rock caps protect underlying softer layers' }
              ]
            },
            {
              name: 'Hydrological Features',
              icon: '💧',
              features: [
                { feature: 'Ephemeral Streams', description: 'Watercourses flowing only after rainfall', significance: 'Primary water source for desert ecosystems' },
                { feature: 'Oases', description: 'Isolated areas with water from springs or aquifers', significance: 'Support life and human settlement in otherwise barren regions' },
                { feature: 'Groundwater Aquifers', description: 'Underground water reserves, often fossil water', significance: 'Critical for irrigation; some aquifers are non-renewable' },
                { feature: 'Salt Lakes', description: 'Terminal lakes with no outlet, accumulating salts', significance: 'Mineral extraction; extreme environments for life' },
                { feature: 'Flash Floods', description: 'Sudden, violent floods after rainfall', significance: 'Primary erosional force; dangerous to humans' },
                { feature: 'Fog/Dew', description: 'Moisture from condensation in coastal deserts', significance: 'Vital water source for fog-dependent organisms' }
              ]
            },
            {
              name: 'Soil Characteristics',
              icon: '🪨',
              features: [
                { feature: 'Aridisols', description: 'Dry soils with minimal organic matter', significance: 'Dominant desert soil order; low fertility' },
                { feature: 'Desert Pavement', description: 'Surface layer of tightly packed stones', significance: 'Protects underlying soil from erosion' },
                { feature: 'Desert Varnish', description: 'Dark coating of manganese and iron oxides on rocks', significance: 'Forms over millennia; used for dating rock art' },
                { feature: 'Caliche/Calcrete', description: 'Calcium carbonate cement layer in soil', significance: 'Forms hardpan that affects drainage and roots' },
                { feature: 'Salt Crusts', description: 'Evaporite deposits on soil surface', significance: 'Toxic to most plants; affects agriculture' },
                { feature: 'Sand Sheets', description: 'Broad, flat areas of wind-deposited sand', significance: 'Less dramatic than dunes but more extensive' }
              ]
            },
            {
              name: 'Ecological Characteristics',
              icon: '🦎',
              features: [
                { feature: 'Low Biomass', description: 'Sparse vegetation covering less than 10% of surface', significance: 'Limited primary productivity affects entire food web' },
                { feature: 'Specialized Adaptations', description: 'Organisms evolved for water conservation', significance: 'Succulence, nocturnality, burrowing, dormancy' },
                { feature: 'High Endemism', description: 'Many species found nowhere else', significance: 'Isolation creates unique evolutionary lineages' },
                { feature: 'Boom-Bust Cycles', description: 'Population explosions after rare rains', significance: 'Opportunistic reproduction strategies dominate' },
                { feature: 'Cryptobiotic Crusts', description: 'Living soil crusts of bacteria, fungi, lichens', significance: 'Stabilize soil, fix nitrogen, critical for ecosystem health' },
                { feature: 'Nocturnal Activity', description: 'Most animals active at night', significance: 'Avoids daytime heat stress; reduces water loss' }
              ]
            }
          ]
        }
      },

      terminology: {
        title: '📖 Essential Desert Terminology',
        terms: [
          {
            term: 'Aridity',
            pronunciation: '(uh-RID-ih-tee)',
            definition: 'A climate condition characterized by severe lack of available water, measured by precipitation deficit relative to evaporation.',
            example: 'The aridity index of the Atacama Desert is below 0.05, classifying it as hyper-arid.',
            relatedTerms: ['Hyper-arid', 'Semi-arid', 'Evapotranspiration']
          },
          {
            term: 'Erg',
            pronunciation: '(URG)',
            definition: 'A large area of shifting sand dunes in a desert, also called a sand sea. From Arabic عرق meaning "dune field."',
            example: 'The Grand Erg Oriental in Algeria covers 140,000 km² of rolling sand dunes.',
            relatedTerms: ['Dune', 'Barchan', 'Seif']
          },
          {
            term: 'Hamada',
            pronunciation: '(hah-MAH-dah)',
            definition: 'A type of desert landscape consisting of barren, rocky plateaus with very little sand, where wind has removed all fine material.',
            example: 'The Hamada du Draa in Morocco is a vast rocky plateau virtually devoid of vegetation.',
            relatedTerms: ['Reg', 'Desert pavement', 'Deflation']
          },
          {
            term: 'Reg',
            pronunciation: '(REG)',
            definition: 'A desert surface covered with a layer of gravel and small stones, also called serir in the eastern Sahara.',
            example: 'Crossing the reg required careful navigation as loose stones made driving treacherous.',
            relatedTerms: ['Hamada', 'Desert pavement', 'Lag deposit']
          },
          {
            term: 'Playa',
            pronunciation: '(PLY-ah)',
            definition: 'A dry, vegetation-free, flat area at the lowest point of a desert basin, typically an ephemeral lake bed encrusted with salts.',
            example: 'The Bonneville Salt Flats are a playa so flat they\'re used for land speed records.',
            relatedTerms: ['Salt flat', 'Sabkha', 'Salina']
          },
          {
            term: 'Wadi',
            pronunciation: '(WAH-dee)',
            definition: 'A valley or dry streambed in desert regions that contains water only during and immediately after heavy rainfall.',
            example: 'Flash floods through the wadi transformed the dry channel into a raging torrent within minutes.',
            relatedTerms: ['Arroyo', 'Wash', 'Ephemeral stream']
          },
          {
            term: 'Barchan',
            pronunciation: '(bar-KHAN)',
            definition: 'A crescent-shaped sand dune with horns pointing downwind, formed when wind direction is consistent and sand supply limited.',
            example: 'Barchan dunes in the Namib can migrate up to 15 meters per year.',
            relatedTerms: ['Seif', 'Star dune', 'Transverse dune']
          },
          {
            term: 'Yardang',
            pronunciation: '(YAR-dang)',
            definition: 'A streamlined, wind-eroded ridge typically made of soft rock, oriented parallel to prevailing wind direction.',
            example: 'The yardangs of the Lut Desert form dramatic ridges up to 150 meters high.',
            relatedTerms: ['Deflation', 'Abrasion', 'Ventifact']
          },
          {
            term: 'Deflation',
            pronunciation: '(dee-FLAY-shun)',
            definition: 'The removal of loose, fine-grained particles from a surface by wind action, leaving behind coarser material.',
            example: 'Deflation created a lag deposit of pebbles too heavy for the wind to transport.',
            relatedTerms: ['Abrasion', 'Desert pavement', 'Dust storm']
          },
          {
            term: 'Xerophyte',
            pronunciation: '(ZEER-oh-fite)',
            definition: 'A plant adapted to survive in an environment with little water availability, such as a desert or semi-arid region.',
            example: 'Cacti are xerophytes with succulent stems that store water for months between rains.',
            relatedTerms: ['Succulent', 'CAM photosynthesis', 'Drought adaptation']
          },
          {
            term: 'Desertification',
            pronunciation: '(deh-zert-ih-fih-KAY-shun)',
            definition: 'The process by which fertile land becomes increasingly arid, typically due to drought, deforestation, or inappropriate agriculture.',
            example: 'Desertification threatens the livelihoods of 250 million people in the Sahel region.',
            relatedTerms: ['Land degradation', 'Overgrazing', 'Soil erosion']
          },
          {
            term: 'Oasis',
            pronunciation: '(oh-AY-sis)',
            definition: 'A fertile area in a desert where water from an aquifer or underground river reaches the surface, enabling plant growth.',
            example: 'The Siwa Oasis in Egypt has supported human habitation for over 10,000 years.',
            relatedTerms: ['Spring', 'Aquifer', 'Artesian well']
          },
          {
            term: 'Endorheic',
            pronunciation: '(en-doh-REE-ik)',
            definition: 'A closed drainage basin with no outflow to rivers or oceans, where water loss is only through evaporation or seepage.',
            example: 'The Great Salt Lake occupies an endorheic basin, accumulating salts over millions of years.',
            relatedTerms: ['Closed basin', 'Terminal lake', 'Internal drainage']
          },
          {
            term: 'Haboob',
            pronunciation: '(hah-BOOB)',
            definition: 'An intense dust storm caused by strong winds from a collapsing thunderstorm, creating a wall of dust up to 100 km wide.',
            example: 'The haboob approached Phoenix as a massive brown wall 1,500 meters high.',
            relatedTerms: ['Dust storm', 'Sandstorm', 'Dust devil']
          },
          {
            term: 'Inselberg',
            pronunciation: '(IN-sel-berg)',
            definition: 'An isolated rocky hill or mountain rising abruptly from a flat plain, typically in arid or semi-arid regions.',
            example: 'Uluru (Ayers Rock) is Australia\'s most famous inselberg, sacred to Aboriginal peoples.',
            relatedTerms: ['Monadnock', 'Kopje', 'Bornhardt']
          }
        ]
      },

      interactiveElements: {
        animation: {
          type: 'animation',
          description: 'Interactive 3D visualization of desert formation processes',
          file: 'assets/desert-formation-interactive.mp4',
          features: [
            'Toggle between different desert types',
            'Visualize air mass movements and moisture loss',
            'Compare precipitation patterns across desert types',
            'Explore geological timescales of desert development'
          ]
        },
        quiz: {
          type: 'quiz',
          title: '🧠 Test Your Desert Knowledge',
          questions: [
            {
              question: 'What is the primary cause of subtropical desert formation?',
              options: [
                'Proximity to oceans',
                'Descending air in the Hadley cell',
                'Mountain rain shadows',
                'Cold ocean currents'
              ],
              correct: 1,
              explanation: 'Subtropical deserts form where air that rose at the equator descends at around 20-30° latitude. This descending air warms and dries as it compresses, creating the persistent high-pressure zones that characterize these deserts.'
            },
            {
              question: 'Which desert is considered the oldest on Earth?',
              options: [
                'Sahara Desert',
                'Atacama Desert',
                'Namib Desert',
                'Gobi Desert'
              ],
              correct: 2,
              explanation: 'The Namib Desert is estimated to be 55-80 million years old, making it the world\'s oldest desert. The cold Benguela Current that creates its aridity has existed since the Cretaceous period when Africa and South America separated.'
            },
            {
              question: 'What percentage of deserts are covered by sand dunes?',
              options: [
                'About 70%',
                'About 50%',
                'About 20%',
                'About 5%'
              ],
              correct: 2,
              explanation: 'Contrary to popular belief, only about 20% of desert surfaces are sand dunes (ergs). The majority of desert terrain consists of rocky plateaus (hamadas), gravel plains (regs), salt flats, mountains, and other landscapes.'
            },
            {
              question: 'Which is the largest desert on Earth by area?',
              options: [
                'Sahara Desert',
                'Arabian Desert',
                'Antarctic Desert',
                'Gobi Desert'
              ],
              correct: 2,
              explanation: 'Antarctica is technically the largest desert on Earth at 14.2 million km², followed by the Arctic at 13.9 million km². The Sahara is the largest hot desert at 9.2 million km². Deserts are defined by precipitation, not temperature.'
            },
            {
              question: 'What causes the extreme aridity of the Atacama Desert?',
              options: [
                'Hadley cell subsidence only',
                'Rain shadow effect only',
                'Cold Humboldt Current and rain shadow combined',
                'Distance from the ocean'
              ],
              correct: 2,
              explanation: 'The Atacama\'s extreme aridity results from multiple factors: the cold Humboldt Current creates a temperature inversion preventing rain, the Andes create a rain shadow blocking Atlantic moisture, and subtropical high pressure suppresses precipitation.'
            },
            {
              question: 'What is a playa?',
              options: [
                'A type of sand dune',
                'A dry lake bed with salt deposits',
                'A wind-eroded rock formation',
                'An oasis with palm trees'
              ],
              correct: 1,
              explanation: 'A playa is a dry, flat lake bed in a desert basin, typically encrusted with salts left behind when water evaporates. Famous examples include Death Valley\'s Racetrack Playa and the Bonneville Salt Flats.'
            },
            {
              question: 'What is desertification?',
              options: [
                'The formation of new deserts through natural processes',
                'The expansion of existing deserts',
                'Land degradation in arid areas due to climate change or human activity',
                'The process of sand dune formation'
              ],
              correct: 2,
              explanation: 'Desertification is land degradation in arid, semi-arid, and dry sub-humid areas, resulting from climate variations and human activities. It affects 250 million people globally and threatens one-third of Earth\'s land surface.'
            },
            {
              question: 'Why do coastal deserts receive so little rainfall despite being next to oceans?',
              options: [
                'The ocean water is too salty to evaporate',
                'Cold currents create temperature inversions preventing rain',
                'Mountains block all moisture',
                'The wind always blows offshore'
              ],
              correct: 1,
              explanation: 'Cold ocean currents (like the Humboldt and Benguela) chill the air above them, creating a temperature inversion where cold air is trapped below warm air. This stable arrangement prevents the convective rising needed to form rain clouds.'
            },
            {
              question: 'What is the primary erosional agent in most deserts?',
              options: [
                'Water from flash floods',
                'Wind',
                'Chemical weathering',
                'Glaciers'
              ],
              correct: 1,
              explanation: 'Wind is the dominant erosional agent in deserts, creating features like sand dunes, yardangs, and desert pavement through deflation and abrasion. However, water from rare flash floods can also cause significant erosion in short periods.'
            },
            {
              question: 'What adaptation allows camels to survive in deserts?',
              options: [
                'They store water in their humps',
                'They can drink salt water',
                'They metabolize fat in their humps for energy and water',
                'They absorb water through their skin'
              ],
              correct: 2,
              explanation: 'Contrary to popular belief, camel humps store fat, not water. When metabolized, this fat produces energy and metabolic water. Camels also have other adaptations: they can tolerate 25% body water loss (vs. 12% for humans) and drink 200 liters in minutes.'
            }
          ]
        }
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: EXAMPLES - FAMOUS DESERTS AROUND THE WORLD
    // ═══════════════════════════════════════════════════════════════════════════
    examples: {
      title: 'Famous Deserts Around the World',
      hero: {
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        tagline: 'Exploring Earth\'s Most Remarkable Arid Landscapes'
      },
      renderAs: 'grid',
      introduction: 'From the frozen expanse of Antarctica to the scorching sands of the Sahara, Earth\'s deserts showcase the planet\'s most extreme environments. These 35 remarkable deserts span every continent and demonstrate the diverse ways aridity shapes landscapes, ecosystems, and human civilizations.',
      linkToExisting: '../../deserts/deserts.html',
      
      filters: ['continent', 'type', 'size', 'climate'],
      sortOptions: ['size-desc', 'name-asc', 'precipitation-asc', 'continent'],

      featuredDeserts: [
        // ─────────────────────────────────────────────────────────────────────
        // AFRICA
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Sahara Desert',
          continent: 'Africa',
          type: 'Subtropical',
          keyMetrics: '9,200,000 km²',
          countries: ['Algeria', 'Chad', 'Egypt', 'Libya', 'Mali', 'Mauritania', 'Morocco', 'Niger', 'Sudan', 'Tunisia', 'Western Sahara'],
          age: 'Current arid phase: ~5,000-7,000 years',
          link: '/encyclopedia/deserts/sahara',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
          icon: '🏜️',
          funFact: 'The Sahara was a lush savanna with hippos and crocodiles just 5,000 years ago',
          keyStats: {
            area: '9,200,000 km²',
            annualRainfall: '25mm (core)',
            maxTemperature: '58°C (recorded)',
            population: '~2.5 million',
            highestDunes: '180m (Erg Chebbi)',
            countries: 11
          }
        },
        {
          name: 'Namib Desert',
          continent: 'Africa',
          type: 'Coastal',
          keyMetrics: '81,000 km²',
          countries: ['Namibia', 'Angola', 'South Africa'],
          age: '55-80 million years',
          link: '/encyclopedia/deserts/namib',
          image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800',
          icon: '🌊',
          funFact: 'The oldest desert on Earth, with some of the tallest sand dunes (325m)',
          keyStats: {
            area: '81,000 km²',
            annualRainfall: '5-85mm',
            age: '55-80 million years',
            highestDunes: '325m (Sossusvlei)',
            endemicSpecies: '80% of species',
            coastline: '1,600 km'
          }
        },
        {
          name: 'Kalahari Desert',
          continent: 'Africa',
          type: 'Subtropical/Semi-arid',
          keyMetrics: '930,000 km²',
          countries: ['Botswana', 'Namibia', 'South Africa'],
          age: '60+ million years',
          link: '/encyclopedia/deserts/kalahari',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
          icon: '🦁',
          funFact: 'Not a true desert—it receives 250-500mm rain and supports abundant wildlife',
          keyStats: {
            area: '930,000 km²',
            annualRainfall: '250-500mm',
            sandDepth: 'Up to 200m',
            indigenousPeople: 'San (Bushmen)',
            gameReserve: 'Central Kalahari (52,800 km²)',
            mainWildlife: 'Lions, meerkats, oryx'
          }
        },
        {
          name: 'Danakil Desert',
          continent: 'Africa',
          type: 'Subtropical/Rift',
          keyMetrics: '~100,000 km²',
          countries: ['Ethiopia', 'Eritrea', 'Djibouti'],
          age: 'Active rift zone forming',
          link: '/encyclopedia/deserts/danakil',
          image: 'https://images.unsplash.com/photo-1524996048207-b5bc1a21aad4?w=800',
          icon: '🌋',
          funFact: 'Hottest place on Earth by average annual temperature (34.4°C)',
          keyStats: {
            area: '~100,000 km²',
            lowestPoint: '-125m (Danakil Depression)',
            avgAnnualTemp: '34.4°C (hottest on Earth)',
            annualRainfall: '<200mm',
            activeVolcanoes: 'Erta Ale lava lake',
            saltMining: 'Traditional Afar practice'
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // ASIA
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Arabian Desert',
          continent: 'Asia',
          type: 'Subtropical',
          keyMetrics: '2,330,000 km²',
          countries: ['Saudi Arabia', 'Yemen', 'Oman', 'UAE', 'Qatar', 'Kuwait', 'Jordan', 'Iraq'],
          age: '~10,000 years (current phase)',
          link: '/encyclopedia/deserts/arabian',
          image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800',
          icon: '🛢️',
          funFact: 'Contains the Rub\' al Khali (Empty Quarter), the largest continuous sand body on Earth',
          keyStats: {
            area: '2,330,000 km²',
            rubAlKhali: '650,000 km²',
            annualRainfall: '<100mm',
            maxTemperature: '54°C',
            oilReserves: '31% of world total',
            highestDunes: '250m'
          }
        },
        {
          name: 'Gobi Desert',
          continent: 'Asia',
          type: 'Rain Shadow/Continental',
          keyMetrics: '1,300,000 km²',
          countries: ['Mongolia', 'China'],
          age: '65+ million years',
          link: '/encyclopedia/deserts/gobi',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
          icon: '🦴',
          funFact: 'Famous for dinosaur fossil discoveries including the first confirmed dinosaur eggs',
          keyStats: {
            area: '1,300,000 km²',
            annualRainfall: '50-100mm',
            tempRange: '-40°C to +45°C',
            expansion: '3,600 km²/year',
            fossilSites: 'Flaming Cliffs, etc.',
            wildlife: 'Wild Bactrian camels, Gobi bears'
          }
        },
        {
          name: 'Thar Desert',
          continent: 'Asia',
          type: 'Monsoon',
          keyMetrics: '200,000 km²',
          countries: ['India', 'Pakistan'],
          age: '~4,000-10,000 years',
          link: '/encyclopedia/deserts/thar',
          image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
          icon: '🐪',
          funFact: 'World\'s most densely populated desert with 83 people per km²',
          keyStats: {
            area: '200,000 km²',
            population: '~23 million',
            density: '83 people/km²',
            annualRainfall: '100-500mm',
            monsoonPeriod: 'July-September',
            unescoSites: 'Jaisalmer Fort'
          }
        },
        {
          name: 'Karakum Desert',
          continent: 'Asia',
          type: 'Continental',
          keyMetrics: '350,000 km²',
          countries: ['Turkmenistan'],
          age: '~5-10 million years',
          link: '/encyclopedia/deserts/karakum',
          image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
          icon: '🔥',
          funFact: 'Home to the Darvaza Gas Crater ("Door to Hell"), burning continuously since 1971',
          keyStats: {
            area: '350,000 km²',
            coverage: '70% of Turkmenistan',
            annualRainfall: '70-150mm',
            maxTemperature: '50°C',
            darvazaCrater: '70m diameter',
            gasReserves: 'Among world\'s largest'
          }
        },
        {
          name: 'Taklamakan Desert',
          continent: 'Asia',
          type: 'Continental',
          keyMetrics: '337,000 km²',
          countries: ['China (Xinjiang)'],
          age: '~5 million years',
          link: '/encyclopedia/deserts/taklamakan',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
          icon: '💀',
          funFact: 'Name allegedly means "Place of No Return" - 85% covered by shifting sand dunes',
          keyStats: {
            area: '337,000 km²',
            dunesCoverage: '85%',
            annualRainfall: '<40mm',
            surroundingMountains: 'Himalayas, Kunlun, Tian Shan, Pamir',
            crossDesertHighway: '522 km (1995)',
            mummyAge: '4,000 years preserved'
          }
        },
        {
          name: 'Kyzylkum Desert',
          continent: 'Asia',
          type: 'Continental',
          keyMetrics: '298,000 km²',
          countries: ['Uzbekistan', 'Kazakhstan'],
          age: '~5-10 million years',
          link: '/encyclopedia/deserts/kyzylkum',
          image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
          icon: '⛏️',
          funFact: 'Contains significant gold deposits and borders the shrinking Aral Sea',
          keyStats: {
            area: '298,000 km²',
            annualRainfall: '100-200mm',
            tempRange: '-30°C to +45°C',
            mineralDeposits: 'Gold, uranium, copper',
            silkRoadCities: 'Bukhara, Samarkand',
            aralSeaCrisis: 'Sea shrank 90%'
          }
        },
        {
          name: 'Syrian Desert',
          continent: 'Asia',
          type: 'Subtropical',
          keyMetrics: '500,000 km²',
          countries: ['Syria', 'Jordan', 'Iraq', 'Saudi Arabia'],
          age: '~10,000+ years',
          link: '/encyclopedia/deserts/syrian',
          image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
          icon: '🏛️',
          funFact: 'Contains the ancient oasis city of Palmyra, a UNESCO World Heritage Site',
          keyStats: {
            area: '500,000 km²',
            annualRainfall: '100-300mm',
            terrain: 'Rocky steppe-desert',
            unescoSite: 'Palmyra',
            bedouinTribes: 'Historically dominant',
            oilPipelines: 'Major transit zone'
          }
        },
        {
          name: 'Dasht-e Kavir',
          continent: 'Asia',
          type: 'Continental',
          keyMetrics: '77,600 km²',
          countries: ['Iran'],
          age: '~10+ million years',
          link: '/encyclopedia/deserts/dasht-e-kavir',
          image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800',
          icon: '🧂',
          funFact: 'Treacherous salt marshes hide quicksand-like mud beneath thin salt crusts',
          keyStats: {
            area: '77,600 km²',
            annualRainfall: '<100mm',
            tempRange: '-10°C to +50°C',
            terrain: 'Salt marshes, kavirs',
            settlements: 'Virtually none',
            silkRoadHazard: 'Historic obstacle'
          }
        },
        {
          name: 'Dasht-e Lut',
          continent: 'Asia',
          type: 'Continental',
          keyMetrics: '51,800 km²',
          countries: ['Iran'],
          age: '~10+ million years',
          link: '/encyclopedia/deserts/dasht-e-lut',
          image: 'https://images.unsplash.com/photo-1524996048207-b5bc1a21aad4?w=800',
          icon: '🌡️',
          funFact: 'Holds record for highest land surface temperature ever measured: 70.7°C',
          keyStats: {
            area: '51,800 km²',
            surfaceTemp: '70.7°C (record)',
            annualRainfall: '<30mm',
            unescoStatus: 'World Heritage Site (2016)',
            yardangs: 'Up to 150m tall',
            lifeStatus: 'Virtually abiotic zones'
          }
        },
        {
          name: 'Ladakh Cold Desert',
          continent: 'Asia',
          type: 'Rain Shadow',
          keyMetrics: '45,000 km²',
          countries: ['India'],
          age: '~10-20 million years',
          link: '/encyclopedia/deserts/ladakh',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
          icon: '🏔️',
          funFact: 'High-altitude cold desert where Buddhist monasteries perch on dramatic cliffs',
          keyStats: {
            area: '45,000 km²',
            altitude: '3,000-7,000m',
            annualRainfall: '100-300mm',
            winterTemp: 'Down to -40°C',
            snowLeopards: 'Key habitat',
            buddhism: 'Ancient monasteries'
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // NORTH AMERICA
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Great Basin Desert',
          continent: 'North America',
          type: 'Rain Shadow',
          keyMetrics: '492,000 km²',
          countries: ['United States'],
          age: '~10,000-15,000 years (current form)',
          link: '/encyclopedia/deserts/great-basin',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
          icon: '🏔️',
          funFact: 'Largest US desert, contains over 200 mountain ranges in Basin and Range topography',
          keyStats: {
            area: '492,000 km²',
            annualRainfall: '150-300mm',
            tempRange: '-18°C to +38°C',
            terrain: 'Basin and Range',
            greatSaltLake: 'Largest W. Hemisphere salt lake',
            sagebrush: 'Dominant vegetation'
          }
        },
        {
          name: 'Mojave Desert',
          continent: 'North America',
          type: 'Rain Shadow',
          keyMetrics: '124,000 km²',
          countries: ['United States'],
          age: '~15,000 years',
          link: '/encyclopedia/deserts/mojave',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
          icon: '🌵',
          funFact: 'Contains Death Valley, lowest point in North America (-86m) and record 56.7°C',
          keyStats: {
            area: '124,000 km²',
            annualRainfall: '50-200mm',
            recordTemp: '56.7°C (Death Valley)',
            lowestPoint: '-86m (Badwater)',
            joshuaTrees: 'Iconic endemic species',
            solarPlants: 'Major installations'
          }
        },
        {
          name: 'Sonoran Desert',
          continent: 'North America',
          type: 'Subtropical',
          keyMetrics: '310,000 km²',
          countries: ['United States', 'Mexico'],
          age: '~8,000-10,000 years',
          link: '/encyclopedia/deserts/sonoran',
          image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
          icon: '🌵',
          funFact: 'Most biodiverse desert in North America with over 2,000 plant species',
          keyStats: {
            area: '310,000 km²',
            annualRainfall: '75-400mm',
            bimodalRain: 'Winter and summer',
            plantSpecies: '2,000+',
            saguaroCacti: 'Up to 200 years old',
            gilaMonster: 'Venomous endemic lizard'
          }
        },
        {
          name: 'Chihuahuan Desert',
          continent: 'North America',
          type: 'Rain Shadow',
          keyMetrics: '450,000 km²',
          countries: ['United States', 'Mexico'],
          age: '~8,000-10,000 years',
          link: '/encyclopedia/deserts/chihuahuan',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
          icon: '🦅',
          funFact: 'Largest desert in North America, known for White Sands gypsum dunes',
          keyStats: {
            area: '450,000 km²',
            annualRainfall: '150-400mm',
            whiteSands: '710 km² gypsum dunes',
            elevation: '1,000-1,500m',
            carlsbadCaverns: 'Famous cave system',
            borderLocation: 'US-Mexico straddling'
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // SOUTH AMERICA
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Atacama Desert',
          continent: 'South America',
          type: 'Coastal',
          keyMetrics: '105,000 km²',
          countries: ['Chile', 'Peru'],
          age: '15+ million years (hyper-arid)',
          link: '/encyclopedia/deserts/atacama',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
          icon: '🔭',
          funFact: 'Driest non-polar desert—some weather stations have never recorded rain',
          keyStats: {
            area: '105,000 km²',
            annualRainfall: '<15mm (coast), 0mm (core)',
            observatories: 'ALMA, VLT, others',
            copperDeposits: 'World\'s largest',
            marsAnalog: 'NASA testing site',
            nitrateDeposits: 'Historically mined'
          }
        },
        {
          name: 'Patagonian Desert',
          continent: 'South America',
          type: 'Rain Shadow',
          keyMetrics: '673,000 km²',
          countries: ['Argentina'],
          age: '~15 million years',
          link: '/encyclopedia/deserts/patagonian',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
          icon: '💨',
          funFact: 'Largest desert in the Americas, constantly battered by fierce winds',
          keyStats: {
            area: '673,000 km²',
            annualRainfall: '150-300mm',
            tempRange: '-20°C to +30°C',
            terrain: 'Steppe and gravel',
            wildlife: 'Guanacos, rheas',
            windSpeed: 'Among strongest on Earth'
          }
        },
        {
          name: 'Sechura Desert',
          continent: 'South America',
          type: 'Coastal',
          keyMetrics: '188,000 km²',
          countries: ['Peru'],
          age: '~10+ million years',
          link: '/encyclopedia/deserts/sechura',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
          icon: '🌫️',
          funFact: 'Garúa fog creates unique lomas ecosystems that bloom with rare moisture',
          keyStats: {
            area: '188,000 km²',
            annualRainfall: '<25mm',
            fogSeason: 'June-November (garúa)',
            lomasEcosystems: 'Fog-dependent vegetation',
            elNinoEffect: 'Occasional severe floods',
            ancientCultures: 'Moche, Chimú'
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // AUSTRALIA
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Great Victoria Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '424,400 km²',
          countries: ['Australia'],
          age: '~1-2 million years',
          link: '/encyclopedia/deserts/great-victoria',
          image: 'https://images.unsplash.com/photo-1494887205043-c5f291293cf6?w=800',
          icon: '🦘',
          funFact: 'Australia\'s largest desert, home to indigenous peoples for 30,000+ years',
          keyStats: {
            area: '424,400 km²',
            annualRainfall: '200-250mm',
            terrain: 'Sand dunes, mulga woodland',
            indigenousPeoples: 'Pitjantjatjara, Mirning',
            duneHeight: 'Up to 30m',
            thunderstorms: '15-20 annually'
          }
        },
        {
          name: 'Great Sandy Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '284,993 km²',
          countries: ['Australia'],
          age: '~1-2 million years',
          link: '/encyclopedia/deserts/great-sandy',
          image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
          icon: '🏜️',
          funFact: 'Contains parallel sand dune systems that can stretch for 50+ km',
          keyStats: {
            area: '284,993 km²',
            annualRainfall: '250-400mm',
            terrain: 'Longitudinal dunes',
            indigenousPeoples: 'Martu people',
            camels: 'Feral population thrives',
            mining: 'Uranium deposits'
          }
        },
        {
          name: 'Simpson Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '176,500 km²',
          countries: ['Australia'],
          age: '~1 million years',
          link: '/encyclopedia/deserts/simpson',
          image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
          icon: '🔴',
          funFact: 'Contains over 1,100 parallel sand dunes, including "Big Red" at 40 meters',
          keyStats: {
            area: '176,500 km²',
            annualRainfall: '100-150mm',
            parallelDunes: '1,100+',
            bigRedHeight: '40m',
            duneColor: 'Red from iron oxide',
            crossings: 'Popular 4WD challenge'
          }
        },
        {
          name: 'Tanami Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '184,500 km²',
          countries: ['Australia'],
          age: '~1-2 million years',
          link: '/encyclopedia/deserts/tanami',
          image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
          icon: '💎',
          funFact: 'Remote desert with significant gold deposits, still mined today',
          keyStats: {
            area: '184,500 km²',
            annualRainfall: '300-500mm',
            terrain: 'Sand plains, rocky hills',
            goldMining: 'Tanami Gold Mine',
            indigenousPeoples: 'Warlpiri people',
            bilbies: 'Endangered species habitat'
          }
        },
        {
          name: 'Gibson Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '156,000 km²',
          countries: ['Australia'],
          age: '~1-2 million years',
          link: '/encyclopedia/deserts/gibson',
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800',
          icon: '🪨',
          funFact: 'Named after explorer Alfred Gibson who perished attempting to cross it',
          keyStats: {
            area: '156,000 km²',
            annualRainfall: '200-250mm',
            terrain: 'Laterite gravel plains',
            lakeDisappointment: 'Salt lake feature',
            indigenousPeoples: 'Pintupi people',
            thornyDevils: 'Endemic lizard species'
          }
        },
        {
          name: 'Sturt Stony Desert',
          continent: 'Australia',
          type: 'Subtropical',
          keyMetrics: '29,750 km²',
          countries: ['Australia'],
          age: '~1-2 million years',
          link: '/encyclopedia/deserts/sturt-stony',
          image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
          icon: '🪨',
          funFact: 'Covered in gibber plains—ancient desert pavement of polished red stones',
          keyStats: {
            area: '29,750 km²',
            annualRainfall: '100-200mm',
            terrain: 'Gibber plains',
            stoneAge: 'Millions of years old',
            namedAfter: 'Explorer Charles Sturt',
            cornerCountry: 'SA/QLD/NSW junction'
          }
        },

        // ─────────────────────────────────────────────────────────────────────
        // ANTARCTICA / POLAR
        // ─────────────────────────────────────────────────────────────────────
        {
          name: 'Antarctic Desert',
          continent: 'Antarctica',
          type: 'Polar',
          keyMetrics: '14,200,000 km²',
          countries: ['Antarctica (international)'],
          age: '~34 million years (ice sheet)',
          link: '/encyclopedia/deserts/antarctic',
          image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800',
          icon: '🐧',
          funFact: 'Earth\'s largest desert, containing 70% of the planet\'s fresh water as ice',
          keyStats: {
            area: '14,200,000 km²',
            annualRainfall: '<50mm (interior)',
            coldestTemp: '-89.2°C (Vostok)',
            iceThickness: 'Up to 4.8 km',
            freshWater: '70% of Earth\'s total',
            dryValleys: '4,800 km² ice-free'
          }
        },
        {
          name: 'Arctic Desert',
          continent: 'Arctic',
          type: 'Polar',
          keyMetrics: '13,900,000 km²',
          countries: ['Canada', 'Russia', 'USA (Alaska)', 'Norway', 'Greenland', 'Iceland'],
          age: 'Variable (sea ice seasonal)',
          link: '/encyclopedia/deserts/arctic',
          image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800',
          icon: '🐻‍❄️',
          funFact: 'Second-largest desert, rapidly changing due to climate warming',
          keyStats: {
            area: '13,900,000 km²',
            annualRainfall: '150-250mm',
            seaIceMinimum: 'Shrinking annually',
            permafrost: '1,400 gigatons carbon',
            polarBears: '26,000 estimated',
            indigenousPeoples: 'Inuit, Sami, Nenets'
          }
        },
        {
          name: 'McMurdo Dry Valleys',
          continent: 'Antarctica',
          type: 'Polar',
          keyMetrics: '4,800 km²',
          countries: ['Antarctica (international)'],
          age: '~14 million years',
          link: '/encyclopedia/deserts/mcmurdo-dry-valleys',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
          icon: '🔬',
          funFact: 'Most Mars-like place on Earth—used to test instruments for Mars missions',
          keyStats: {
            area: '4,800 km²',
            annualRainfall: '<10mm',
            katabaticWinds: 'Up to 320 km/h',
            bloodFalls: 'Iron-rich microbial seep',
            mummifiedSeals: 'Found inland',
            astrobiology: 'Mars analog research'
          }
        },
        {
          name: 'Greenland Ice Desert',
          continent: 'North America/Europe',
          type: 'Polar',
          keyMetrics: '1,710,000 km²',
          countries: ['Greenland (Denmark)'],
          age: '~2.6 million years',
          link: '/encyclopedia/deserts/greenland',
          image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800',
          icon: '🧊',
          funFact: 'If fully melted, would raise global sea levels by 7.4 meters',
          keyStats: {
            area: '1,710,000 km²',
            iceThickness: 'Up to 3.2 km',
            annualRainfall: '~150mm (summit)',
            massLoss: '280 billion tons/year',
            seaLevelRise: '7.4m if melted',
            iceCores: '100,000+ year climate record'
          }
        }
      ],

      // ─────────────────────────────────────────────────────────────────────
      // UPSC RELEVANCE SECTION
      // ─────────────────────────────────────────────────────────────────────
      upscRelevance: {
        title: '🎯 UPSC Civil Services Exam Importance',
        introduction: 'Deserts are a crucial topic for UPSC examinations, appearing in Geography (Physical and Human), Environment and Ecology, and Current Affairs. Understanding desert formation, types, ecosystems, and human interactions is essential for both Prelims and Mains. Desert-related questions frequently appear in the context of climate change, biodiversity, water resources, and sustainable development.',
        
        topics: [
          '📍 Types of deserts and their global distribution (Hot, Cold, Coastal, Rain Shadow)',
          '🌍 Formation mechanisms: Hadley cells, rain shadow effect, cold currents',
          '🏜️ Major deserts of India: Thar Desert location, climate, ecology, and economy',
          '💧 Water resources in deserts: Aquifers, Indira Gandhi Canal, traditional water harvesting',
          '🌡️ Climate and weather patterns in arid regions',
          '🦎 Desert ecosystems, biodiversity, and endemic species',
          '🌿 Desertification causes, extent, and prevention measures',
          '🌾 Agriculture in arid regions: Irrigation projects, drought-resistant crops',
          '👥 Human adaptations to desert environments (Rajasthan, Middle East)',
          '⚡ Renewable energy potential: Solar power in Rajasthan, Gujarat',
          '🛢️ Mineral resources in desert regions globally and in India',
          '🌍 International conventions: UNCCD (UN Convention to Combat Desertification)',
          '📊 Desert soils (Aridisols) and their characteristics',
          '🔥 Impact of climate change on desert expansion and contraction',
          '🏛️ Historical trade routes through deserts (Silk Road, Trans-Saharan routes)'
        ],

        sampleQuestions: [
          {
            type: 'Prelims',
            year: '2019',
            question: 'Which of the following is/are the possible cause(s) of desertification? 1. Overgrazing 2. Climate change 3. Deforestation 4. Over-irrigation',
            answer: 'All of the above (1, 2, 3, and 4) are causes of desertification. Overgrazing removes vegetation cover; climate change alters precipitation patterns; deforestation exposes soil to erosion; over-irrigation leads to salinization.'
          },
          {
            type: 'Prelims',
            year: '2017',
            question: 'Consider the following: 1. Atacama 2. Namib 3. Sahara. Which of the above is/are example(s) of coastal desert(s)?',
            answer: 'Atacama and Namib are coastal deserts formed by cold ocean currents (Humboldt and Benguela respectively). The Sahara is primarily a subtropical desert formed by Hadley cell subsidence, though its western edge has coastal influences.'
          },
          {
            type: 'Mains',
            year: '2021',
            question: 'Discuss the causes of desertification in India and suggest measures for its mitigation. (250 words)',
            approach: 'Cover: 1) Extent in India (30% land affected), 2) Causes: overgrazing, deforestation, over-irrigation, climate change, 3) Affected states (Rajasthan, Gujarat, Maharashtra, Karnataka), 4) Impact on livelihoods, 5) Mitigation: UNCCD implementation, watershed management, agroforestry, Kuchchh afforestation.'
          },
          {
            type: 'Mains',
            year: '2018',
            question: 'Explain the formation of rain shadow deserts with suitable examples. (150 words)',
            approach: 'Define rain shadow effect, explain orographic lifting, moisture loss on windward side, adiabatic warming on leeward side. Examples: Patagonian Desert (Andes shadow), Gobi Desert (Himalayas), Great Basin (Sierra Nevada). Include diagram if possible.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'The Great Indian Desert (Thar) receives rainfall during which season?',
            answer: 'The Thar Desert receives most of its annual rainfall (100-500mm) during the Southwest Monsoon season (July-September). The monsoon weakens significantly by the time it reaches this region, explaining the desert conditions.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'Evaluate the potential of solar energy in desert regions of India. What are the challenges? (250 words)',
            approach: 'Cover: 1) Solar potential in Thar Desert and Gujarat (6-7 kWh/m²/day), 2) Projects: Bhadla Solar Park (world\'s largest), 3) National Solar Mission targets, 4) Challenges: land acquisition, water for cleaning, grid connectivity, dust accumulation. Include policy recommendations.'
          },
          {
            type: 'Prelims',
            year: '2016',
            question: 'Which current is responsible for the formation of the Namib Desert?',
            answer: 'The Benguela Current, a cold ocean current flowing northward along the southwest African coast, is responsible for the Namib Desert\'s aridity. It creates a temperature inversion that prevents rainfall despite the desert\'s proximity to the Atlantic Ocean.'
          },
          {
            type: 'Mains',
            year: '2019',
            question: 'Discuss the ecological significance of the Thar Desert and the threats it faces. (250 words)',
            approach: 'Cover: 1) Biodiversity: Great Indian Bustard, chinkara, Desert National Park, 2) Adaptations of flora and fauna, 3) Ecosystem services, 4) Threats: Indira Gandhi Canal (waterlogging, changed ecology), mining, overgrazing, 5) Conservation needs and policies.'
          }
        ],

        keyConceptsForExam: [
          {
            concept: 'Desertification',
            importance: 'Very High',
            details: 'Process of land degradation in arid regions due to climate change and human activities. India has 30% land under desertification threat.',
            examRelevance: 'Frequently asked in Prelims and Mains; links to SDGs, UNCCD, environment topics'
          },
          {
            concept: 'Rain Shadow Effect',
            importance: 'High',
            details: 'Mechanism creating leeward aridity behind mountain ranges. Critical for understanding global desert distribution.',
            examRelevance: 'Conceptual questions in Prelims; map-based questions; understanding monsoon behavior'
          },
          {
            concept: 'Cold Ocean Currents',
            importance: 'High',
            details: 'Humboldt (Peru), Benguela, California currents create coastal deserts through temperature inversions.',
            examRelevance: 'Links oceanography with climatology; frequently tested mechanism'
          },
          {
            concept: 'Thar Desert Ecology',
            importance: 'Very High',
            details: 'India-specific knowledge: location, climate, flora, fauna (Great Indian Bustard), human adaptations, Indira Gandhi Canal impacts.',
            examRelevance: 'India-specific Geography; Environment and Biodiversity; Prelims factual and Mains analytical'
          },
          {
            concept: 'Solar Energy in Deserts',
            importance: 'High',
            details: 'Desert regions receive highest solar radiation. Bhadla Solar Park, Gujarat installations, National Solar Mission.',
            examRelevance: 'Current affairs; Science and Technology; Economic development; Climate change mitigation'
          },
          {
            concept: 'Hadley Cell Circulation',
            importance: 'High',
            details: 'Atmospheric circulation creating subtropical high-pressure zones and deserts at 20-30° latitude.',
            examRelevance: 'Fundamental concept for understanding global wind patterns and climate zones'
          },
          {
            concept: 'Water Resources in Arid Regions',
            importance: 'Very High',
            details: 'Groundwater (aquifers), traditional harvesting (johads, tankas), Indira Gandhi Canal, drip irrigation.',
            examRelevance: 'Links geography with development; water security; agriculture policy'
          },
          {
            concept: 'UNCCD (UN Convention to Combat Desertification)',
            importance: 'High',
            details: '1994 convention; India is Party; COP meetings; Land Degradation Neutrality targets.',
            examRelevance: 'International relations; Environment; India\'s commitments and actions'
          }
        ],

        currentAffairsLinks: [
          {
            topic: 'Bhadla Solar Park, Rajasthan',
            relevance: 'World\'s largest solar park (2,245 MW) in Thar Desert; demonstrates desert solar potential',
            year: '2020-2024'
          },
          {
            topic: 'Great Green Wall of India',
            relevance: 'Planned 1,400 km green corridor from Gujarat to Delhi-Haryana to combat desertification',
            year: '2022-ongoing'
          },
          {
            topic: 'UNCCD COP15 (Abidjan, 2022)',
            relevance: 'India\'s Land Degradation Neutrality commitments; restoration of 26 million hectares',
            year: '2022'
          },
          {
            topic: 'Great Indian Bustard Conservation',
            relevance: 'Supreme Court orders on power lines in Thar; critically endangered status; Project Great Indian Bustard',
            year: '2021-2024'
          },
          {
            topic: 'Saharan Dust and Indian Monsoon',
            relevance: 'Research linking Saharan dust transport to monsoon patterns and Amazon fertilization',
            year: '2023'
          },
          {
            topic: 'Arctic Ice Loss',
            relevance: 'Record low sea ice extent; implications for global climate and India\'s monsoon',
            year: '2023-2024'
          },
          {
            topic: 'Chile Lithium in Atacama',
            relevance: 'World\'s largest lithium reserves; electric vehicle battery supply chain; water conflicts',
            year: '2022-2024'
          },
          {
            topic: 'Saudi Arabia NEOM Project',
            relevance: 'Massive desert development project; "The Line" linear city; sustainable desert cities',
            year: '2021-2024'
          },
          {
            topic: 'Rajasthan Camel Conservation',
            relevance: 'State animal; declining population; Camel Research Centre; traditional knowledge',
            year: '2023'
          },
          {
            topic: 'Aral Sea Restoration Efforts',
            relevance: 'One of worst environmental disasters; partial recovery of North Aral Sea; lessons for India',
            year: '2020-2024'
          }
        ]
      }
    }
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = desertsData;
}

// For ES6 modules
export default desertsData;
