/**
 * DESERTS DATA FILE
 * ========================
 */

const desertsData = {
  
  // ============================================
  // META - Basic info (REQUIRED)
  // ============================================
  meta: {
    name: 'Deserts',
    icon: '🏜️',
    theme: 'deserts-theme',
    existingPagesLink: '../../deserts/deserts.html'
  },
  
  // ============================================
  // SECTIONS - All 4 required
  // ============================================
  sections: {
    
    // ==========================================
    // SECTION 1: DEFINITION
    // ==========================================
    definition: {
      title: 'What is a Desert?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=90',
        tagline: 'Earth\'s driest landscapes where life defies extremes'
      },
      
      content: {
        introduction: 'A desert is a barren landscape characterized by extremely low precipitation, typically receiving less than 250 mm (10 inches) of rainfall annually. Deserts cover approximately one-third of Earth\'s land surface and exist on every continent, from scorching sand seas to frozen polar wastes. Despite harsh conditions, deserts support uniquely adapted ecosystems with specialized plants and animals. These arid regions play crucial roles in global climate patterns, mineral resources, and human history, having shaped civilizations and trade routes for millennia.',
        
        keyPoints: [
          {
            icon: '💧',
            label: 'Low Precipitation',
            text: 'Less than 250 mm annual rainfall',
            detail: 'Deserts are defined primarily by aridity—the severe lack of available water. This includes regions with low rainfall, high evaporation rates, or both. Some deserts receive occasional heavy rain but lose moisture rapidly to evaporation. The driest place on Earth, the Atacama Desert, has areas that have received no recorded rainfall in history.'
          },
          {
            icon: '🌍',
            label: 'Global Coverage',
            text: 'One-third of Earth\'s land surface',
            detail: 'Deserts cover about 33% of the world\'s land area—approximately 50 million km². They span from the massive Sahara (9.2 million km²) to small rain shadow deserts. Hot deserts dominate subtropical regions, while cold deserts extend across polar areas and high-altitude plateaus like the Gobi.'
          },
          {
            icon: '🌡️',
            label: 'Extreme Temperatures',
            text: 'Dramatic daily fluctuations',
            detail: 'Hot deserts experience extreme temperature swings—from over 50°C during day to below freezing at night. Without clouds or humidity to retain heat, desert surfaces rapidly lose warmth after sunset. The world\'s highest recorded temperature (56.7°C) occurred in Death Valley, a hot desert.'
          },
          {
            icon: '🏔️',
            label: 'Varied Landscapes',
            text: 'Not just sand dunes',
            detail: 'Contrary to popular imagery, only about 20% of deserts are sandy (erg). Most desert surfaces consist of rocky plateaus (hamada), gravel plains (reg), salt flats, and sparse vegetation. Mountain ranges, canyons, and ancient riverbeds create diverse desert topography.'
          },
          {
            icon: '🦎',
            label: 'Adapted Life',
            text: 'Specialized survival strategies',
            detail: 'Desert organisms have evolved remarkable adaptations: cacti store water; camels can drink 100 liters at once; kangaroo rats never drink water; fennec foxes dissipate heat through large ears. Many desert animals are nocturnal, avoiding daytime heat.'
          },
          {
            icon: '⚡',
            label: 'Expanding Deserts',
            text: 'Desertification threat',
            detail: 'Climate change and human activities cause desertification—the expansion of desert conditions into previously productive land. Approximately 12 million hectares become desert annually, threatening food security for billions. The Sahel, north of the Sahara, faces severe desertification pressures.'
          }
        ],
        
        comparison: {
          title: 'Deserts vs. Other Biomes',
          features: [
            {
              feature: 'Annual Rainfall',
              mountain: 'Deserts: <250 mm',
              hill: 'Grasslands: 250-1000 mm',
              plateau: 'Forests: >1000 mm'
            },
            {
              feature: 'Vegetation Cover',
              mountain: 'Deserts: Sparse/none',
              hill: 'Grasslands: Grasses dominant',
              plateau: 'Forests: Dense canopy'
            },
            {
              feature: 'Temperature Range',
              mountain: 'Deserts: Extreme variation',
              hill: 'Grasslands: Moderate',
              plateau: 'Forests: Buffered'
            },
            {
              feature: 'Soil Type',
              mountain: 'Deserts: Sandy/rocky/saline',
              hill: 'Grasslands: Rich loam',
              plateau: 'Forests: Humus-rich'
            },
            {
              feature: 'Biodiversity',
              mountain: 'Deserts: Low but specialized',
              hill: 'Grasslands: Moderate',
              plateau: 'Forests: Very high'
            }
          ]
        },
        
        funFacts: [
          '🌍 The Sahara Desert is almost as large as the entire United States, spanning 9.2 million km² across North Africa',
          '🔥 Death Valley holds the world record for highest air temperature: 56.7°C (134°F) recorded in 1913',
          '💧 The Atacama Desert in Chile has areas where no rainfall has ever been recorded in human history',
          '⚡ Antarctica is technically the world\'s largest desert, receiving less than 200 mm precipitation annually',
          '🌡️ Desert temperatures can drop over 40°C between day and night due to lack of moisture to retain heat',
          '📊 About 2 billion people (25% of world population) live in desert or dryland regions worldwide'
        ]
      }
    },
    
    // ==========================================
    // SECTION 2: TYPES
    // ==========================================
    types: {
      title: 'Types of Deserts',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1600&q=90',
        tagline: 'From scorching sands to frozen wastes—diverse desert types'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'subtropical',
          name: 'Subtropical Deserts',
          icon: '☀️',
          color: '#F59E0B',
          
          definition: 'Subtropical deserts, also called trade wind deserts or hot deserts, form in the subtropical high-pressure belts around 20-30° latitude north and south of the equator. Here, descending dry air from the Hadley cell circulation creates persistent high pressure, clear skies, and extreme aridity. These are the classic hot deserts with scorching daytime temperatures, sand dunes, and iconic landscapes. The Sahara, Arabian, Kalahari, and Australian deserts are prime examples of subtropical deserts.',
          
          formation: {
            title: 'How Subtropical Deserts Form',
            steps: [
              { step: 1, icon: '🌡️', text: 'Warm air rises near equator, releases moisture as tropical rainfall' },
              { step: 2, icon: '⬆️', text: 'Dry air moves poleward at high altitude in Hadley cell circulation' },
              { step: 3, icon: '⬇️', text: 'Air descends at subtropical latitudes (20-30°), warming and drying further' },
              { step: 4, icon: '☀️', text: 'Descending air creates persistent high pressure and clear skies' },
              { step: 5, icon: '🏜️', text: 'Lack of clouds allows intense solar heating and minimal precipitation' }
            ]
          },
          
          characteristics: [
            'Located between 20-30° latitude in both hemispheres',
            'Extremely high daytime temperatures (often exceeding 45°C)',
            'Very low humidity and cloud cover',
            'Large diurnal temperature range (day-night variation)',
            'Persistent high atmospheric pressure throughout year',
            'Classic sand dune formations and rocky plateaus'
          ]
        },
        {
          id: 'coastal',
          name: 'Coastal Deserts',
          icon: '🌊',
          color: '#06B6D4',
          
          definition: 'Coastal deserts form along western continental margins where cold ocean currents flow parallel to the coast. The cold water cools the adjacent air, creating temperature inversions that prevent rain-bearing clouds from developing. Instead, fog and low clouds form but rarely produce precipitation. These deserts experience mild temperatures year-round due to oceanic influence but remain extremely arid. The Atacama (Peru/Chile), Namib (Namibia), and Baja California deserts exemplify this type.',
          
          formation: {
            title: 'How Coastal Deserts Form',
            steps: [
              { step: 1, icon: '🌊', text: 'Cold ocean currents (upwelling zones) flow along western continental coasts' },
              { step: 2, icon: '❄️', text: 'Cold water chills the overlying air, cooling it below dew point' },
              { step: 3, icon: '🌫️', text: 'Temperature inversion forms—cold dense air trapped beneath warm air' },
              { step: 4, icon: '☁️', text: 'Fog and low stratus clouds form but cannot rise to create rain' },
              { step: 5, icon: '🏜️', text: 'Coast remains hyper-arid despite proximity to ocean' }
            ]
          },
          
          characteristics: [
            'Located along west coasts with cold currents (Peru, Benguela, California)',
            'Mild temperatures year-round due to ocean moderation',
            'Heavy fog banks common, especially in morning',
            'Among the driest places on Earth (Atacama)',
            'Unique fog-dependent ecosystems and organisms',
            'Cool onshore breezes contrast with interior heat'
          ]
        },
        {
          id: 'rainshadow',
          name: 'Rain Shadow Deserts',
          icon: '⛰️',
          color: '#8B5CF6',
          
          definition: 'Rain shadow deserts form on the leeward (downwind) side of mountain ranges that block moisture-bearing winds. As air rises over mountains, it cools and releases precipitation on the windward slopes. The now-dry air descends on the opposite side, warming and absorbing moisture, creating arid conditions. These deserts can exist at various latitudes wherever tall mountains intercept prevailing winds. The Patagonian Desert (east of the Andes), Great Basin (east of Sierra Nevada), and Gobi (north of Himalayas) are examples.',
          
          formation: {
            title: 'How Rain Shadow Deserts Form',
            steps: [
              { step: 1, icon: '💨', text: 'Moisture-laden winds approach mountain range' },
              { step: 2, icon: '⬆️', text: 'Air forced to rise over mountains (orographic lifting)' },
              { step: 3, icon: '🌧️', text: 'Rising air cools, condenses, and precipitates on windward slope' },
              { step: 4, icon: '⬇️', text: 'Now-dry air descends on leeward side, warming adiabatically' },
              { step: 5, icon: '🏜️', text: 'Warm, dry descending air absorbs moisture, creating desert conditions' }
            ]
          },
          
          characteristics: [
            'Located on leeward side of major mountain ranges',
            'Sharp contrast between wet windward and dry leeward slopes',
            'Temperature varies with latitude and altitude',
            'Often contain interior drainage basins (no outlet to sea)',
            'Mountain barrier visible from desert floor',
            'Can occur at various latitudes worldwide'
          ]
        },
        {
          id: 'continental',
          name: 'Continental Interior Deserts',
          icon: '🗺️',
          color: '#EF4444',
          
          definition: 'Continental interior deserts form deep within large landmasses, far from oceanic moisture sources. By the time air masses travel thousands of kilometers inland, they have lost most moisture through precipitation along the way. These deserts experience extreme temperature ranges—scorching summers and frigid winters—due to lack of oceanic temperature moderation. The Gobi Desert in Central Asia, the Taklamakan in China, and the Karakum in Turkmenistan exemplify continental interior deserts.',
          
          formation: {
            title: 'How Continental Interior Deserts Form',
            steps: [
              { step: 1, icon: '🌊', text: 'Moisture-bearing winds originate from distant oceans' },
              { step: 2, icon: '📏', text: 'Air travels thousands of kilometers across landmass' },
              { step: 3, icon: '🌧️', text: 'Progressive moisture loss through precipitation along the journey' },
              { step: 4, icon: '🏔️', text: 'Mountain ranges may further block remaining moisture' },
              { step: 5, icon: '🏜️', text: 'Interior receives minimal precipitation, creating desert' }
            ]
          },
          
          characteristics: [
            'Located far from oceanic moisture sources',
            'Extreme temperature range: very hot summers, cold winters',
            'Often at high elevation (plateau deserts)',
            'Low absolute humidity year-round',
            'May have seasonal dust storms and extreme winds',
            'Sparse vegetation adapted to both heat and cold'
          ]
        },
        {
          id: 'polar',
          name: 'Polar Deserts',
          icon: '❄️',
          color: '#3B82F6',
          
          definition: 'Polar deserts, also called cold deserts, exist in Arctic and Antarctic regions where extremely cold temperatures prevent moisture retention in the atmosphere. Despite being covered in ice and snow, these regions receive very little precipitation—often less than 250 mm annually. The moisture present fell as snow over millennia and accumulated as ice sheets. Antarctica and the Arctic coastal regions qualify as deserts by precipitation criteria while being Earth\'s coldest environments.',
          
          formation: {
            title: 'How Polar Deserts Form',
            steps: [
              { step: 1, icon: '🌍', text: 'Polar regions receive minimal direct sunlight due to axial tilt' },
              { step: 2, icon: '❄️', text: 'Extremely cold temperatures freeze atmospheric moisture' },
              { step: 3, icon: '⬇️', text: 'Cold dense air descends, creating high pressure and clear skies' },
              { step: 4, icon: '🌬️', text: 'Cold air cannot hold much water vapor (low absolute humidity)' },
              { step: 5, icon: '🏔️', text: 'Region receives minimal precipitation despite ice/snow cover' }
            ]
          },
          
          characteristics: [
            'Located at high latitudes (Arctic and Antarctic regions)',
            'Extremely cold temperatures year-round',
            'Low precipitation despite ice and snow cover',
            'Ice sheets accumulated over millennia, not current snowfall',
            'Polar day/night cycles with months of darkness',
            'Very limited but highly specialized life forms'
          ]
        },
        {
          id: 'montane',
          name: 'Montane Deserts',
          icon: '🏔️',
          color: '#10B981',
          
          definition: 'Montane or high-altitude deserts occur at elevations typically above 3,000 meters where thin atmosphere, intense solar radiation, and cold temperatures combine with low precipitation. These cold deserts experience extreme diurnal temperature variation and intense UV radiation. High-altitude plateaus like the Tibetan Plateau, the Puna in the Andes, and parts of the Ethiopian Highlands qualify as montane deserts with unique alpine-adapted ecosystems.',
          
          formation: {
            title: 'How Montane Deserts Form',
            steps: [
              { step: 1, icon: '⛰️', text: 'Tectonic forces create high-altitude plateaus (>3000 m elevation)' },
              { step: 2, icon: '🌬️', text: 'Thin atmosphere retains little heat or moisture' },
              { step: 3, icon: '☀️', text: 'Intense solar radiation during day, rapid heat loss at night' },
              { step: 4, icon: '🏔️', text: 'Surrounding mountains may block moisture (rain shadow effect)' },
              { step: 5, icon: '🏜️', text: 'High elevation, cold, and dryness create montane desert' }
            ]
          },
          
          characteristics: [
            'Located at high elevations (typically >3000 meters)',
            'Cold temperatures but intense solar radiation',
            'Extreme diurnal temperature range',
            'Thin atmosphere with low oxygen levels',
            'High UV radiation affecting organisms',
            'Alpine-adapted xerophytic vegetation'
          ]
        },
        {
          id: 'monsoon',
          name: 'Monsoon Deserts',
          icon: '🌪️',
          color: '#EC4899',
          
          definition: 'Monsoon deserts occur in regions where seasonal monsoon wind patterns create extended dry seasons lasting 8-10 months, followed by brief wet seasons. While total annual rainfall may approach or exceed 250 mm, the extreme seasonality and high evaporation during long dry periods create desert conditions. The Thar Desert of India/Pakistan is a monsoon desert, receiving most precipitation during the brief southwest monsoon but remaining arid most of the year.',
          
          formation: {
            title: 'How Monsoon Deserts Form',
            steps: [
              { step: 1, icon: '🌍', text: 'Region lies in monsoon climate zone with seasonal wind reversal' },
              { step: 2, icon: '☀️', text: 'Dry offshore winds dominate for 8-10 months (winter/dry season)' },
              { step: 3, icon: '🌧️', text: 'Brief monsoon brings limited rainfall during wet season' },
              { step: 4, icon: '🌡️', text: 'High temperatures cause rapid evaporation of rainfall' },
              { step: 5, icon: '🏜️', text: 'Extended dry season creates persistent desert conditions' }
            ]
          },
          
          characteristics: [
            'Extreme seasonality: long dry season, brief wet season',
            'Monsoon rains provide most annual precipitation',
            'High evaporation rates deplete seasonal moisture quickly',
            'Vegetation adapted to drought with seasonal growth',
            'Often located on edges of monsoon climate zones',
            'Traditional cultures adapted to seasonal water availability'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of Desert Types',
        headers: ['Type', 'Formation', 'Key Feature', 'Example'],
        rows: [
          ['Subtropical ☀️', 'Hadley cell descent', 'Extremely hot', 'Sahara'],
          ['Coastal 🌊', 'Cold ocean currents', 'Foggy but rainless', 'Atacama'],
          ['Rain Shadow ⛰️', 'Mountain barrier', 'Leeward of ranges', 'Patagonian'],
          ['Continental 🗺️', 'Distance from ocean', 'Extreme temperatures', 'Gobi'],
          ['Polar ❄️', 'Extreme cold', 'Ice-covered desert', 'Antarctica'],
          ['Montane 🏔️', 'High altitude', 'Cold and thin air', 'Tibetan Plateau'],
          ['Monsoon 🌪️', 'Seasonal winds', 'Long dry season', 'Thar']
        ]
      }
    },
    
    // ==========================================
    // SECTION 3: FORMATION
    // ==========================================
    formation: {
      title: 'How Deserts Form',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1600&q=90',
        tagline: 'Understanding the processes that create Earth\'s driest landscapes'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Desert formation results from complex interactions between atmospheric circulation, geography, ocean currents, and continental positions. While some deserts formed rapidly through climate shifts, others developed over millions of years as continents drifted and mountains rose.',
      
      stages: [
        {
          stage: 1,
          title: 'Climate Controls Establish',
          timeframe: 'Millions of years',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
          
          description: [
            'Large-scale atmospheric and geographic patterns set desert conditions',
            'Hadley cell circulation establishes subtropical high-pressure zones',
            'Continental drift positions landmasses in arid latitudes',
            'Mountain ranges rise through tectonic activity, blocking moisture',
            'Ocean circulation patterns develop cold coastal currents',
            'Distance from moisture sources increases through continental expansion'
          ],
          
          geologicalProcess: 'Desertification begins when atmospheric circulation and geography combine to restrict moisture availability. The Hadley cell—rising air at the equator, sinking air at 30° latitude—creates the subtropical desert belt. Plate tectonics moves continents into these zones (Africa\'s position under the subtropical high created the Sahara). Mountain building (orogenesis) creates rain shadow effects. Cold ocean currents form where deep water upwells along western coasts, preventing precipitation despite proximity to the ocean.',
          
          keyFeatures: [
            'Subtropical high-pressure zones established',
            'Mountain barriers intercepting moisture-bearing winds',
            'Continental positions in arid climate zones'
          ],
          
          evidence: [
            'Paleoclimate records showing historical aridity patterns',
            'Tectonic reconstructions of past continental positions'
          ]
        },
        {
          stage: 2,
          title: 'Aridity Intensifies',
          timeframe: 'Thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1200&q=80',
          
          description: [
            'Precipitation decreases as climate controls strengthen',
            'Vegetation thins and eventually disappears in driest areas',
            'Soil moisture depletes; water tables drop',
            'Rivers become ephemeral, flowing only after rare rains',
            'Lakes shrink and evaporate, leaving salt flats',
            'Exposed soil begins wind erosion and dune formation'
          ],
          
          geologicalProcess: 'As aridity increases, feedback loops amplify desert conditions. Vegetation loss reduces transpiration (plant water release), further decreasing local rainfall. Lighter-colored bare ground reflects more solar radiation, reducing cloud formation. Rivers fed from distant mountains may still flow through deserts (exotic rivers like the Nile), but local streams dry up. Lakes become increasingly saline as evaporation concentrates dissolved minerals. Without vegetation anchoring soil, wind erosion accelerates.',
          
          keyFeatures: [
            'Progressive vegetation loss and soil exposure',
            'Transition from seasonal to ephemeral streams',
            'Increasing soil salinity and wind erosion'
          ],
          
          evidence: [
            'Fossil records of former vegetation and water bodies',
            'Ancient shorelines of dried lakes (paleolakes)'
          ]
        },
        {
          stage: 3,
          title: 'Desert Landforms Develop',
          timeframe: 'Hundreds to thousands of years',
          image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
          
          description: [
            'Wind and rare water events sculpt distinctive desert features',
            'Sand dunes form and migrate with prevailing winds',
            'Rock surfaces weather through temperature extremes',
            'Flash floods carve wadis (dry river valleys)',
            'Salt flats expand as playas evaporate',
            'Desert pavement forms as wind removes fine particles'
          ],
          
          geologicalProcess: 'Desert geomorphology is shaped by aeolian (wind) and episodic fluvial (water) processes. Wind sorts sediments: fine dust blows away (sometimes thousands of kilometers as loess), while sand accumulates in dune fields (ergs). Rocks fragment through thermal expansion/contraction and salt crystallization. Rare but intense rainstorms cause flash floods that carve deep channels (wadis, arroyos) in hours. Over time, rocky surfaces develop desert varnish—a dark coating of manganese and iron oxides deposited by bacteria.',
          
          keyFeatures: [
            'Active sand dune fields (ergs)',
            'Rocky desert pavement (reg, hamada)',
            'Ephemeral stream channels and dry lake beds'
          ],
          
          evidence: [
            'Dune stratigraphy recording past wind patterns',
            'Desert varnish indicating long surface exposure'
          ]
        },
        {
          stage: 4,
          title: 'Ecosystem Adaptation',
          timeframe: 'Thousands to millions of years',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
          
          description: [
            'Organisms evolve adaptations to survive extreme aridity',
            'Plants develop water storage, deep roots, and drought tolerance',
            'Animals become nocturnal, develop water-conserving physiology',
            'Specialized food webs form around rare water sources',
            'Oases support isolated populations of moisture-dependent species',
            'Endemic species evolve in isolated desert refugia'
          ],
          
          geologicalProcess: 'Life adapts to desert conditions through physiological and behavioral evolution. Plants evolve succulence (cacti, euphorbias), extensive root systems, and dormancy during drought. CAM photosynthesis allows stomata to open only at night, reducing water loss. Animals evolve water-recycling kidneys (kangaroo rats), estivation (summer dormancy), and nocturnal lifestyles. Oases become biodiversity refugia where aquatic and mesic species survive. Over long periods, species isolated in different desert regions evolve into distinct endemic forms.',
          
          keyFeatures: [
            'Xerophytic (drought-adapted) vegetation communities',
            'Nocturnal and burrowing animal populations',
            'Oasis ecosystems supporting endemic species'
          ],
          
          evidence: [
            'Phylogenetic studies showing desert adaptation evolution',
            'Convergent evolution of similar adaptations across deserts'
          ]
        },
        {
          stage: 5,
          title: 'Dynamic Desert Equilibrium',
          timeframe: 'Ongoing',
          image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200&q=80',
          
          description: [
            'Deserts maintain dynamic balance between expansion and contraction',
            'Climate cycles cause boundaries to shift over millennia',
            'Human activities accelerate desertification in some regions',
            'Sand dunes migrate and reorganize with changing winds',
            'Rare wet periods briefly transform desert landscapes',
            'Climate change alters desert extent and intensity'
          ],
          
          geologicalProcess: 'Deserts are not static but expand and contract with climate cycles. During ice ages, some deserts contracted while others expanded. The Sahara has alternated between desert and savanna multiple times in the past 10,000 years ("African Humid Period" ended ~5,500 years ago). Human activities—overgrazing, deforestation, irrigation mismanagement—accelerate desertification on desert margins. Climate change projections suggest expanding aridity in subtropics but increasing precipitation in some desert interiors. Dune fields constantly reshape as wind patterns shift.',
          
          keyFeatures: [
            'Shifting desert boundaries with climate',
            'Human-accelerated desertification on margins',
            'Ongoing landform modification by wind and water'
          ],
          
          evidence: [
            'Lake sediments recording past humid periods',
            'Archaeological evidence of past settlements in now-desert areas'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Key Terms',
        terms: [
          {
            term: 'Erg',
            pronunciation: '(ERG)',
            definition: 'A large area of desert covered with wind-blown sand and extensive dune fields. Also called sand seas, ergs cover about 20% of the Sahara and include the world\'s largest dune formations.',
            example: 'The Grand Erg Oriental in Algeria covers 140,000 km² with massive star dunes rising over 300 meters above the sand plain.',
            relatedTerms: ['Dune', 'Reg', 'Hamada']
          },
          {
            term: 'Wadi',
            pronunciation: '(WAH-dee)',
            definition: 'A dry river valley in desert regions that contains water only during rare rainstorms. Also called arroyo (Americas) or wash. Flash floods through wadis can be extremely dangerous.',
            example: 'Wadi Rum in Jordan is a famous wadi with towering sandstone cliffs, featured in films like Lawrence of Arabia.',
            relatedTerms: ['Ephemeral stream', 'Flash flood', 'Alluvial fan']
          },
          {
            term: 'Desertification',
            pronunciation: '(deh-zer-tih-fih-KAY-shun)',
            definition: 'The process by which fertile land becomes desert, typically through drought, deforestation, or inappropriate agriculture. Human activities significantly accelerate natural desertification.',
            example: 'The Sahel region south of the Sahara experiences severe desertification, with sand dunes advancing southward and displacing farmers.',
            relatedTerms: ['Land degradation', 'Drought', 'Overgrazing']
          },
          {
            term: 'Playa',
            pronunciation: '(PLY-uh)',
            definition: 'A dry, flat lake bed in a desert basin, sometimes containing salt deposits from evaporated water. Playas may occasionally hold shallow lakes after heavy rains.',
            example: 'The Bonneville Salt Flats in Utah is a playa where ancient Lake Bonneville evaporated, leaving a perfectly flat salt surface used for land speed records.',
            relatedTerms: ['Salt flat', 'Endorheic basin', 'Evaporite']
          },
          {
            term: 'Xerophyte',
            pronunciation: '(ZEER-oh-fite)',
            definition: 'A plant adapted to survive in environments with little water, such as deserts. Adaptations include succulence, deep roots, small leaves, and thick waxy coatings.',
            example: 'The saguaro cactus is a xerophyte that stores water in its accordion-like stem and has roots extending 30 meters to capture rare rainfall.',
            relatedTerms: ['Succulent', 'CAM photosynthesis', 'Drought adaptation']
          },
          {
            term: 'Barchan',
            pronunciation: '(bar-KAHN)',
            definition: 'A crescent-shaped sand dune with horns pointing downwind, formed by unidirectional winds in areas of limited sand supply. Barchans migrate slowly in the direction of wind.',
            example: 'Barchan dunes in the Namib Desert can migrate up to 30 meters per year, with the crescent horns extending downwind.',
            relatedTerms: ['Dune', 'Erg', 'Aeolian']
          },
          {
            term: 'Inselberg',
            pronunciation: '(IN-sel-berg)',
            definition: 'An isolated steep-sided rocky hill rising abruptly from a surrounding plain, common in desert regions. Formed by differential erosion where resistant rock remains after softer surrounding material erodes.',
            example: 'Uluru (Ayers Rock) in Australia is a famous inselberg—a massive sandstone monolith rising 348 meters above the desert plain.',
            relatedTerms: ['Monadnock', 'Mesa', 'Butte']
          },
          {
            term: 'Hadley Cell',
            pronunciation: '(HAD-lee cell)',
            definition: 'A large-scale atmospheric circulation pattern where air rises at the equator, moves poleward at high altitude, descends at subtropical latitudes (~30°), and returns to the equator at the surface.',
            example: 'The descending branch of the Hadley cell creates the subtropical high-pressure belt responsible for most of the world\'s hot deserts.',
            relatedTerms: ['Trade winds', 'Subtropical high', 'Atmospheric circulation']
          }
        ]
      }
    },
    
    // ==========================================
    // SECTION 4: EXAMPLES
    // ==========================================
    examples: {
      title: 'Famous Deserts of the World',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=90',
        tagline: 'Explore the world\'s most remarkable desert landscapes'
      },
      
      renderAs: 'grid',
      
      introduction: 'From the vast Sahara stretching across North Africa to the ancient Namib Desert with its towering red dunes, from the frozen Antarctic desert to the rain shadow Gobi, deserts showcase Earth\'s climatic extremes and life\'s remarkable resilience. Visit our comprehensive deserts page to explore detailed information about the world\'s major deserts, their unique features, ecosystems, and significance to human civilization.',
      
      linkToExisting: '../../deserts/deserts.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance',
        introduction: 'Deserts are crucial for UPSC Geography, covering physical geography, climatology, ecology, resource management, and environmental issues. Understanding desert formation, distribution, and challenges is essential for comprehensive exam preparation.',
        
        topics: [
          '**Physical Geography:** Desert formation processes, types of deserts, desert landforms (dunes, mesas, wadis), and aeolian processes',
          '**Climatology:** Hadley cell circulation, rain shadow effect, monsoon patterns, temperature inversions, and climate classification',
          '**Indian Geography:** Thar Desert—formation, features, climate, vegetation, Indira Gandhi Canal, and desert development programs',
          '**Ecology & Environment:** Desert ecosystems, xerophytic adaptations, biodiversity, desertification causes and prevention',
          '**Resource Management:** Water management in deserts, groundwater exploitation, irrigation (sprinkler, drip), and renewable energy potential',
          '**Disaster Management:** Desertification, dust storms, heat waves, drought mitigation, and UN Convention to Combat Desertification'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023',
            question: 'Explain the formation of the Thar Desert. Discuss the role of Indira Gandhi Canal in transforming the desert economy.',
            approach: 'Explain formation: rain shadow of Aravalli, monsoon rain shadow, subtropical high pressure; describe physical features; discuss Indira Gandhi Canal—source (Harike Barrage), length, coverage, impact on agriculture, settlement, and ecology; analyze challenges and sustainability concerns.'
          },
          {
            type: 'Mains',
            year: '2022',
            question: 'What is desertification? Examine its causes and suggest measures to combat desertification in India.',
            approach: 'Define desertification (UNCCD definition); discuss natural causes (climate change, drought) and human causes (overgrazing, deforestation, irrigation practices); identify affected regions in India; suggest measures: afforestation, sustainable agriculture, water conservation, community participation; mention government programs and international cooperation.'
          },
          {
            type: 'Prelims',
            year: '2021',
            question: 'Which of the following deserts is a coastal desert? (a) Sahara (b) Gobi (c) Atacama (d) Kalahari',
            answer: '(c) Atacama. The Atacama Desert along Chile\'s coast is formed by the cold Peru (Humboldt) Current, creating temperature inversions that prevent precipitation. It\'s the driest non-polar desert on Earth.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'The Patagonian Desert is a rain shadow desert located on the leeward side of which mountain range? (a) Rockies (b) Alps (c) Andes (d) Himalayas',
            answer: '(c) Andes. The Patagonian Desert in Argentina forms in the rain shadow of the Andes Mountains. Westerly winds drop moisture on Chilean slopes, leaving the eastern Patagonian region dry.'
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
  module.exports = desertsData;
}
