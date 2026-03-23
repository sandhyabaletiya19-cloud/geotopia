/**
 * MOUNTAINS DATA MODULE - COMPLETE ENCYCLOPEDIA VERSION
 * Comprehensive educational content about mountains
 * Format: Universal concept data structure
 */

const mountainsData = {
  meta: {
    name: 'Mountains',
    icon: '🏔️',
    theme: 'mountains-theme',
    existingPagesLink: '/encyclopedia/mountains/'
  },
  
  sections: {
    // =============================
    // SECTION 1: DEFINITION
    // =============================
    definition: {
      title: 'What is a Mountain?',
      
      hero: {
        image: 'https://source.unsplash.com/1600x900/?mountain,peak,summit',
        tagline: 'Natural giants that touch the sky'
      },
      
      content: {
        introduction: 'A mountain is a natural elevation of the Earth\'s surface that rises prominently above its surroundings, typically characterized by steep slopes, significant height (usually above 600 meters or 2,000 feet), relatively confined summit area, and considerable local relief. Mountains are formed through tectonic forces, volcanic activity, or erosional processes acting over millions of years.',
        
        keyPoints: [
          {
            icon: '📏',
            label: 'Height Requirement',
            text: 'Typically rises more than 600 meters (2,000 feet) above surrounding terrain',
            detail: 'The 600m threshold is not universal - in the UK, peaks above 610m are called "mountains", while in the USA, the definition varies by state. Some geographers use 300m as the minimum elevation.'
          },
          {
            icon: '⛰️',
            label: 'Slope Characteristic',
            text: 'Steeper than 2° gradient with significant local relief',
            detail: 'Mountains have steep slopes (typically >2° inclination), while hills have gentler slopes (<2°). The steepness results from tectonic uplift, volcanic formation, or resistant rock types that resist erosion.'
          },
          {
            icon: '🌍',
            label: 'Formation Process',
            text: 'Created by tectonic forces, volcanic activity, or erosional processes',
            detail: 'Mountain formation (orogeny) takes millions of years through: plate collision (fold mountains), faulting (block mountains), volcanic eruptions (volcanic mountains), magma uplift (dome mountains), or plateau dissection (erosion mountains).'
          },
          {
            icon: '🏔️',
            label: 'Structural Components',
            text: 'Distinct summit, slopes, ridges, valleys, and base',
            detail: 'Mountains feature: summit/peak (highest point), ridges (elevated crests), slopes/flanks (sides), valleys (low areas between peaks), shoulders (flatter areas below summit), and base/foot (lowest margin).'
          },
          {
            icon: '🌡️',
            label: 'Climate Impact',
            text: 'Creates unique microclimates and weather patterns',
            detail: 'Mountains force air upward causing orographic rainfall on windward slopes and rain shadow deserts on leeward sides. Temperature drops ~6.5°C per 1000m (lapse rate), creating distinct vegetation zones from base to summit.'
          },
          {
            icon: '💧',
            label: 'Water Towers',
            text: 'Source of major rivers and freshwater for billions',
            detail: 'Mountains store water as snow and ice, releasing it gradually through rivers. The Himalayas supply water to 3 billion people via the Indus, Ganges, Brahmaputra, Mekong, Yangtze, and Yellow Rivers.'
          },
          {
            icon: '🌿',
            label: 'Biodiversity Hotspots',
            text: 'Host unique ecosystems and endemic species',
            detail: 'Mountains cover 27% of Earth\'s land but harbor 85% of bird, mammal, and amphibian species. Isolated peaks create "sky islands" where species evolve independently, leading to high endemism.'
          },
          {
            icon: '🏛️',
            label: 'Cultural Significance',
            text: 'Sacred sites and cultural boundaries throughout history',
            detail: 'Mountains are revered in many cultures: Mount Kailash (Hinduism/Buddhism), Mount Fuji (Shintoism), Mount Sinai (Judaism/Christianity/Islam), Machu Picchu (Incan), Olympus (Greek mythology).'
          }
        ],
        
        comparison: {
          title: 'Mountain vs Hill vs Plateau - Complete Comparison',
          features: [
            {
              feature: 'Height',
              mountain: '> 600m (2,000 ft) - some >8,000m',
              hill: '< 600m (2,000 ft) - typically 100-500m',
              plateau: 'Elevated (300-3,000m+) but flat-topped'
            },
            {
              feature: 'Slope Gradient',
              mountain: '> 2° (steep, often >30°)',
              hill: '< 2° (gentle, rolling)',
              plateau: 'Minimal (<1°) on top, steep edges'
            },
            {
              feature: 'Summit Shape',
              mountain: 'Pointed peak or narrow ridge',
              hill: 'Rounded, dome-like top',
              plateau: 'Flat, extensive top surface'
            },
            {
              feature: 'Formation',
              mountain: 'Tectonic/volcanic/erosional',
              hill: 'Erosion, deposition, glacial',
              plateau: 'Uplift + horizontal erosion'
            },
            {
              feature: 'Local Relief',
              mountain: 'High (>300m from base)',
              hill: 'Low (<300m from base)',
              plateau: 'High elevation, low relief'
            },
            {
              feature: 'Climate Zones',
              mountain: 'Multiple (base to alpine)',
              hill: 'Usually one zone',
              plateau: 'Uniform across top'
            },
            {
              feature: 'Vegetation',
              mountain: 'Zones: forest→alpine→barren',
              hill: 'Uniform vegetation',
              plateau: 'Grasslands/shrubs on top'
            },
            {
              feature: 'Glaciers',
              mountain: 'Common above 4,000m',
              hill: 'Never',
              plateau: 'Rare (only high plateaus)'
            },
            {
              feature: 'Human Settlement',
              mountain: 'Sparse, high-altitude villages',
              hill: 'Easy, widespread settlement',
              plateau: 'Moderate, on flat top'
            },
            {
              feature: 'Example',
              mountain: 'Mount Everest (8,849m)',
              hill: 'Palatine Hill, Rome (51m)',
              plateau: 'Tibetan Plateau (4,500m avg)'
            }
          ]
        },
        
        diagram: {
          type: 'svg',
          path: 'assets/mountain-vs-hill.svg',
          alt: 'Visual comparison of mountain, hill, and plateau profiles showing elevation, slope, and structural differences'
        },
        
        funFacts: [
          '🌏 Earth has over 1,000 mountains above 7,000m - all in Asia',
          '🏔️ The Himalayas grow ~5mm/year - but erosion removes ~2-3mm/year',
          '⛰️ 24% of Earth\'s land (33.2 million km²) is mountainous terrain',
          '🌡️ Temperature drops ~6.5°C per 1000m (3.6°F per 1000ft) - the environmental lapse rate',
          '🏔️ Mount Everest grows ~4mm annually due to tectonic collision',
          '🌊 Marine fossils (ammonites, corals) found at 8,000m in Himalayas - proof of ancient ocean',
          '⛰️ Mauna Kea (Hawaii) is Earth\'s tallest mountain: 10,210m base-to-summit (mostly underwater)',
          '🏔️ Olympus Mons (Mars) is solar system\'s tallest: 21,900m - 2.5× Everest!',
          '🌍 The longest mountain range: Mid-Atlantic Ridge (underwater, 40,000km)',
          '⛰️ K2 is deadlier than Everest: 25% fatality rate vs 4%',
          '🏔️ Mountains create 60-80% of world\'s freshwater resources',
          '🌿 Mountains harbor 85% of world\'s bird, mammal, amphibian species',
          '⛰️ The "Death Zone" above 8,000m: human cells die faster than they regenerate',
          '🏔️ Appalachians were once taller than Himalayas (formed 480 million years ago)',
          '🌋 Ring of Fire has 75% of world\'s volcanoes - mostly volcanic mountains',
          '⛰️ Tallest mountain from Earth\'s center: Chimborazo, Ecuador (due to equatorial bulge)',
          '🏔️ Snow line elevation: 0m (poles) to 6,000m (tropics)',
          '🌍 14 "eight-thousanders" (peaks >8,000m) - all in Himalayas/Karakoram',
          '⛰️ Mountains occupy 27% of land but influence climate of 50%+ of Earth',
          '🏔️ First Everest summit: Tenzing Norgay & Edmund Hillary, May 29, 1953'
        ]
      }
    },
    
    // =============================
    // SECTION 2: TYPES
    // =============================
    types: {
      title: 'Types of Mountains',
      
      hero: {
        image: 'https://source.unsplash.com/1600x900/?mountain,range,landscape',
        tagline: 'Five major types based on geological formation processes'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'fold',
          name: 'Fold Mountains',
          icon: '🗻',
          color: '#8B7355',
          
          definition: 'Fold mountains form when two tectonic plates collide at convergent boundaries, causing sedimentary rock layers to compress, buckle, and fold upward under immense horizontal pressure. This process, called orogeny, creates parallel ridges and valleys with complex folded structures. Fold mountains are the most common type globally and include Earth\'s highest peaks.',
          
          formation: {
            title: 'How Fold Mountains Form - Complete Process',
            steps: [
              {
                step: 1,
                text: 'Two tectonic plates move toward each other at 2-15 cm/year (convergent boundary)',
                icon: '➡️⬅️'
              },
              {
                step: 2,
                text: 'Ocean basin between plates gradually closes as seafloor subducts or sediments accumulate',
                icon: '🌊'
              },
              {
                step: 3,
                text: 'Immense compressional pressure (thousands of atmospheres) builds at collision zone',
                icon: '💪'
              },
              {
                step: 4,
                text: 'Sedimentary rock layers (limestone, sandstone, shale) compress and begin to deform',
                icon: '📚'
              },
              {
                step: 5,
                text: 'Rocks fold into anticlines (upward arches) and synclines (downward troughs)',
                icon: '〰️'
              },
              {
                step: 6,
                text: 'Continued pressure causes overthrusting - older rocks pushed over younger rocks',
                icon: '⤴️'
              },
              {
                step: 7,
                text: 'Mountain range uplifts vertically as continental crust thickens (30-70km thick)',
                icon: '⬆️'
              },
              {
                step: 8,
                text: 'Metamorphism occurs deep in mountain roots: limestone→marble, shale→slate→schist',
                icon: '🔥'
              },
              {
                step: 9,
                text: 'Erosion by rivers, glaciers, and weathering begins shaping peaks and valleys',
                icon: '🌊'
              },
              {
                step: 10,
                text: 'Process continues over 50-100 million years, creating massive mountain ranges',
                icon: '⏳'
              }
            ],
            animation: 'fold-mountain-animation.mp4'
          },
          
          characteristics: [
            'Parallel ridges and valleys (trend lines)',
            'Very high elevations (often 4,000-8,000m+)',
            'Complex folded rock structures visible in cliffs',
            'Youngest and most active mountain ranges on Earth',
            'Still tectonically active with ongoing uplift',
            'Frequent earthquakes (magnitude 6-9)',
            'Visible sedimentary layers (often tilted 45-90°)',
            'Marine fossils at high elevations (proof of ocean origin)',
            'Deep earthquake foci (70-300km depth)',
            'Thick continental crust (up to 70km)',
            'Metamorphic rocks in core (high pressure/temperature)',
            'Linear arrangement over hundreds/thousands of km',
            'Asymmetric valleys (steeper on one side)',
            'Multiple parallel ranges (Outer, Middle, Greater Himalayas)'
          ],
          
          examples: [
            {
              name: 'Himalayas',
              location: 'Asia (India, Nepal, Bhutan, China, Pakistan, Afghanistan)',
              age: '50-40 million years (Eocene-Oligocene)',
              highestPeak: 'Mount Everest (8,849m / 29,032 ft)',
              length: '2,400 km',
              width: '200-400 km',
              formationCause: 'Indian Plate + Eurasian Plate collision',
              upliftRate: '5mm/year (still rising)',
              countries: 6,
              link: '/encyclopedia/mountains/himalayas',
              image: 'https://source.unsplash.com/800x600/?himalayas,everest',
              notableFeatures: [
                '14 peaks above 8,000m (all "eight-thousanders" on Earth)',
                'Youngest major mountain range',
                'Source of 10 major Asian rivers',
                'Glaciers covering 33,000 km²',
                'Biodiversity hotspot: 10,000+ plant species'
              ]
            },
            {
              name: 'Andes Mountains',
              location: 'South America (Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, Argentina)',
              age: '25 million years (Oligocene-Miocene)',
              highestPeak: 'Aconcagua (6,961m / 22,838 ft)',
              length: '7,000 km',
              width: '200-700 km',
              formationCause: 'Nazca Plate subducting under South American Plate',
              upliftRate: '2-3mm/year',
              countries: 7,
              link: '/encyclopedia/mountains/andes',
              image: 'https://source.unsplash.com/800x600/?andes,mountains',
              notableFeatures: [
                'Longest continental mountain range on Earth',
                'Over 50 active volcanoes',
                'Atacama Desert (rain shadow effect)',
                'Source of Amazon River tributaries',
                'Contains world\'s highest capital: La Paz (3,640m)'
              ]
            },
            {
              name: 'Alps',
              location: 'Europe (France, Switzerland, Italy, Austria, Germany, Slovenia, Liechtenstein, Monaco)',
              age: '30 million years (Oligocene)',
              highestPeak: 'Mont Blanc (4,808m / 15,774 ft)',
              length: '1,200 km',
              width: '150-250 km',
              formationCause: 'African Plate + Eurasian Plate collision',
              upliftRate: '1-2mm/year',
              countries: 8,
              link: '/encyclopedia/mountains/alps',
              image: 'https://source.unsplash.com/800x600/?alps,matterhorn',
              notableFeatures: [
                'Most densely settled mountain range',
                'Over 1,200 glaciers',
                'Major European watershed (Rhine, Rhône, Po, Danube)',
                'Famous peaks: Matterhorn, Eiger, Jungfrau',
                'Mont Blanc Tunnel connects France-Italy'
              ]
            },
            {
              name: 'Rocky Mountains',
              location: 'North America (USA: Montana, Idaho, Wyoming, Colorado, New Mexico; Canada: British Columbia, Alberta)',
              age: '80-55 million years (Late Cretaceous-Eocene)',
              highestPeak: 'Mount Elbert (4,401m / 14,440 ft)',
              length: '4,800 km',
              width: '120-650 km',
              formationCause: 'Farallon Plate subduction + later uplift',
              upliftRate: '0.5-1mm/year',
              countries: 2,
              link: '/encyclopedia/mountains/rockies',
              image: 'https://source.unsplash.com/800x600/?rocky+mountains',
              notableFeatures: [
                'Continental Divide (separates Atlantic/Pacific watersheds)',
                '100+ separate mountain ranges',
                'Rich in mineral deposits (gold, silver, copper)',
                'Yellowstone hotspot volcanics',
                'Canadian Rockies: UNESCO World Heritage'
              ]
            },
            {
              name: 'Atlas Mountains',
              location: 'North Africa (Morocco, Algeria, Tunisia)',
              age: '65 million years (Paleocene)',
              highestPeak: 'Toubkal (4,167m / 13,671 ft)',
              length: '2,500 km',
              width: '100-400 km',
              formationCause: 'African + Eurasian Plate collision',
              upliftRate: '1mm/year',
              countries: 3,
              link: '/encyclopedia/mountains/atlas',
              image: 'https://source.unsplash.com/800x600/?atlas+mountains',
              notableFeatures: [
                'Separates Mediterranean coast from Sahara Desert',
                'Three parallel ranges: Tell, High, Saharan Atlas',
                'Home to Berber communities',
                'Snow-capped even near Sahara',
                'Rich iron ore deposits'
              ]
            },
            {
              name: 'Caucasus Mountains',
              location: 'Eurasia (Russia, Georgia, Armenia, Azerbaijan)',
              age: '25 million years (Oligocene-Miocene)',
              highestPeak: 'Mount Elbrus (5,642m / 18,510 ft) - Europe\'s highest',
              length: '1,200 km',
              width: '160 km',
              formationCause: 'Arabian Plate + Eurasian Plate collision',
              upliftRate: '2mm/year',
              countries: 4,
              link: '/encyclopedia/mountains/caucasus',
              image: 'https://source.unsplash.com/800x600/?caucasus+mountains',
              notableFeatures: [
                'Traditional Europe-Asia boundary',
                'Over 2,000 glaciers',
                '5 peaks above 5,000m',
                'Rich biodiversity (Caucasian leopard, tur)',
                'Oil and gas reserves'
              ]
            },
            {
              name: 'Zagros Mountains',
              location: 'Middle East (Iran, Iraq, Turkey)',
              age: '40-30 million years (Eocene-Oligocene)',
              highestPeak: 'Dena (4,409m / 14,465 ft)',
              length: '1,600 km',
              width: '200-300 km',
              formationCause: 'Arabian Plate + Eurasian Plate collision',
              upliftRate: '10mm/year (fastest in world)',
              countries: 3,
              link: '/encyclopedia/mountains/zagros',
              image: 'https://source.unsplash.com/800x600/?zagros+mountains',
              notableFeatures: [
                'Fastest-rising mountains on Earth',
                'Parallel ridges and valleys',
                'Major oil/gas deposits',
                'Source of Tigris-Euphrates rivers',
                'Frequent earthquakes (Iran seismic zone)'
              ]
            },
            {
              name: 'European Alps Extensions',
              location: 'Europe (Pyrenees, Carpathians, Dinaric Alps, Apennines)',
              age: '65-30 million years',
              highestPeak: 'Pyrenees: Aneto (3,404m); Carpathians: Gerlachovský (2,655m)',
              length: 'Pyrenees: 430 km; Carpathians: 1,500 km',
              formationCause: 'Same Alpine orogeny (African-Eurasian collision)',
              link: '/encyclopedia/mountains/alpine-system',
              image: 'https://source.unsplash.com/800x600/?pyrenees,carpathians',
              notableFeatures: [
                'Part of Alpine-Himalayan belt',
                'Pyrenees: France-Spain border',
                'Carpathians: arc through Central Europe',
                'Dinaric Alps: Balkans',
                'Apennines: spine of Italy'
              ]
            },
            {
              name: 'Hindu Kush',
              location: 'Central Asia (Afghanistan, Pakistan)',
              age: '50 million years (Eocene)',
              highestPeak: 'Tirich Mir (7,708m / 25,289 ft)',
              length: '800 km',
              width: '240 km',
              formationCause: 'Indian-Eurasian collision (western extension)',
              countries: 2,
              link: '/encyclopedia/mountains/hindu-kush',
              image: 'https://source.unsplash.com/800x600/?hindu+kush',
              notableFeatures: [
                'Western continuation of Himalayas',
                'Over 20 peaks above 7,000m',
                'Critical watershed for Central Asia',
                'Strategically important (Khyber Pass)',
                'Harsh climate (down to -50°C)'
              ]
            },
            {
              name: 'Karakoram Range',
              location: 'Asia (Pakistan, India, China)',
              age: '50 million years (Eocene)',
              highestPeak: 'K2 (8,611m / 28,251 ft) - world\'s 2nd highest',
              length: '500 km',
              width: '240 km',
              formationCause: 'Indian-Eurasian collision',
              countries: 3,
              link: '/encyclopedia/mountains/karakoram',
              image: 'https://source.unsplash.com/800x600/?k2,karakoram',
              notableFeatures: [
                'World\'s 2nd highest peak: K2 (deadliest 8000er)',
                'Largest glaciers outside polar regions (Siachen: 76km)',
                '4 of world\'s 14 eight-thousanders',
                'Highest battleground: Siachen Glacier conflict',
                'K2 has 25% summit death rate'
              ]
            },
            {
              name: 'Southern Alps (New Zealand)',
              location: 'Oceania (South Island, New Zealand)',
              age: '5 million years (Pliocene) - very young',
              highestPeak: 'Aoraki/Mount Cook (3,724m / 12,218 ft)',
              length: '500 km',
              width: '30-70 km',
              formationCause: 'Pacific + Indo-Australian Plate collision',
              upliftRate: '10mm/year (very fast)',
              countries: 1,
              link: '/encyclopedia/mountains/southern-alps-nz',
              image: 'https://source.unsplash.com/800x600/?mount+cook,new+zealand',
              notableFeatures: [
                'Fastest-uplifting mountains (10mm/year)',
                'Over 360 glaciers',
                'Alpine Fault: major earthquake risk',
                'Dramatic relief (sea level to 3,700m in 15km)',
                'UNESCO World Heritage Site'
              ]
            },
            {
              name: 'Transantarctic Mountains',
              location: 'Antarctica',
              age: '500 million years (originally), reactivated 65 MYA',
              highestPeak: 'Mount Kirkpatrick (4,528m / 14,856 ft)',
              length: '3,500 km',
              width: '200 km',
              formationCause: 'Ancient fold mountains, later rifting',
              countries: 0,
              link: '/encyclopedia/mountains/transantarctic',
              image: 'https://source.unsplash.com/800x600/?antarctica,mountains',
              notableFeatures: [
                'Longest mountain range in Antarctica',
                'Divides East/West Antarctica',
                'Mostly buried under ice sheet',
                'Fossil evidence of ancient forests',
                'Coal deposits (proof of tropical past)'
              ]
            }
          ],
          
          distribution: {
            continents: ['Asia', 'South America', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica'],
            mapImage: 'assets/fold-mountains-map.png',
            majorBelts: [
              {
                name: 'Circum-Pacific Belt (Ring of Fire)',
                ranges: ['Andes', 'Rockies', 'Alaska Range', 'Japanese Alps', 'Philippines'],
                length: '40,000 km',
                features: 'Youngest, most active, volcanic + fold mountains'
              },
              {
                name: 'Alpine-Himalayan Belt',
                ranges: ['Atlas', 'Pyrenees', 'Alps', 'Caucasus', 'Zagros', 'Hindu Kush', 'Himalayas'],
                length: '15,000 km',
                features: 'East-west trending, highest peaks, collision zones'
              },
              {
                name: 'East African Rift System',
                ranges: ['Ethiopian Highlands', 'East African Mountains'],
                length: '6,000 km',
                features: 'Divergent boundary, volcanic + block mountains'
              }
            ]
          }
        },
        
        {
          id: 'block',
          name: 'Block Mountains (Fault-Block)',
          icon: '⛰️',
          color: '#A0522D',
          
          definition: 'Block mountains, also called fault-block mountains, form when large crustal blocks are broken by extensional tectonic forces and displaced vertically along normal or reverse faults. The uplifted blocks (horsts) become mountains while the down-dropped blocks (grabens) form valleys or rift zones. Unlike fold mountains created by compression, block mountains result from tensional forces pulling Earth\'s crust apart.',
          
          formation: {
            title: 'How Block Mountains Form - Complete Process',
            steps: [
              {
                step: 1,
                text: 'Earth\'s crust experiences tensional (extensional) forces - plates pulling apart',
                icon: '⬅️➡️'
              },
              {
                step: 2,
                text: 'Brittle upper crust (10-20km depth) fractures along parallel normal faults',
                icon: '⚡'
              },
              {
                step: 3,
                text: 'Fault planes develop at 45-65° angles dipping toward downthrown side',
                icon: '📐'
              },
              {
                step: 4,
                text: 'Crustal blocks slip vertically along fault planes (dip-slip movement)',
                icon: '⬆️⬇️'
              },
              {
                step: 5,
                text: 'Upthrown block (horst) rises to form mountain or plateau',
                icon: '🏔️'
              },
              {
                step: 6,
                text: 'Downthrown block (graben) subsides to form valley or rift basin',
                icon: '🏞️'
              },
              {
                step: 7,
                text: 'Fault scarp (steep cliff) forms along fault line - visible evidence',
                icon: '⛰️'
              },
              {
                step: 8,
                text: 'Erosion attacks uplifted block, depositing sediments in graben',
                icon: '🌊'
              },
              {
                step: 9,
                text: 'Process repeats with multiple parallel faults creating mountain ranges',
                icon: '🔄'
              },
              {
                step: 10,
                text: 'Isostatic adjustment causes further uplift as erosion removes weight',
                icon: '⚖️'
              }
            ],
            animation: 'block-mountain-animation.mp4'
          },
          
          characteristics: [
            'Steep, linear fault scarps (cliffs)',
            'Straight mountain fronts aligned with faults',
            'Asymmetric profiles (one steep, one gentle slope)',
            'Often flat or gently tilted summits',
            'Parallel grabens (rift valleys) between horsts',
            'Formed by crustal extension, not compression',
            'Lower elevations than fold mountains (typically 1,000-3,000m)',
            'Older rocks exposed by uplift and erosion',
            'Triangular facets on fault scarps',
            'Alluvial fans at mountain base from erosion',
            'Active normal faults with earthquake risk',
            'Basin-and-range topography',
            'Sharp breaks in slope at fault lines',
            'Often show tilted sedimentary layers'
          ],
          
          examples: [
            {
              name: 'Sierra Nevada',
              location: 'USA (California)',
              age: '5-2 million years (Pliocene uplift)',
              highestPeak: 'Mount Whitney (4,421m / 14,505 ft) - highest in contiguous USA',
              length: '640 km',
              width: '105 km',
              faultType: 'Normal faults on east side',
              upliftRate: '1-2mm/year',
              link: '/encyclopedia/mountains/sierra-nevada',
              image: 'https://source.unsplash.com/800x600/?sierra+nevada,yosemite',
              notableFeatures: [
                'Classic fault-block: steep east, gentle west slope',
                'Eastern fault scarp rises 3,000m in 10km',
                'Yosemite National Park (glacial valleys)',
                'Giant sequoia groves on western slope',
                'Granite batholith (100+ million years old) uplifted'
              ]
            },
            {
              name: 'Teton Range',
              location: 'USA (Wyoming)',
              age: '9-2 million years (Miocene-Pliocene)',
              highestPeak: 'Grand Teton (4,199m / 13,775 ft)',
              length: '64 km',
              width: '19 km',
              faultType: 'Teton Fault (normal fault)',
              upliftRate: '1mm/year (still active)',
              link: '/encyclopedia/mountains/tetons',
              image: 'https://source.unsplash.com/800x600/?grand+teton',
              notableFeatures: [
                'Youngest mountain range in Rockies',
                'Dramatic vertical relief: 2,100m fault scarp',
                'Jackson Hole graben (valley) on east',
                'Frequent earthquakes (magnitude 5-6)',
                'No foothills - mountains rise abruptly from valley'
              ]
            },
            {
              name: 'Black Forest (Schwarzwald)',
              location: 'Germany (Baden-Württemberg)',
              age: '15 million years (Miocene)',
              highestPeak: 'Feldberg (1,493m / 4,898 ft)',
              length: '160 km',
              width: '60 km',
              faultType: 'Horst between Rhine and Neckar grabens',
              link: '/encyclopedia/mountains/black-forest',
              image: 'https://source.unsplash.com/800x600/?black+forest+germany',
              notableFeatures: [
                'Classic horst: uplifted block between rift valleys',
                'Rhine Graben (rift valley) to west',
                'Dense coniferous forests (gave it name)',
                'Crystalline basement rocks exposed',
                'Source of Danube River'
              ]
            },
            {
              name: 'Vosges Mountains',
              location: 'France (Alsace, Lorraine)',
              age: '20 million years (Miocene)',
              highestPeak: 'Grand Ballon (1,424m / 4,672 ft)',
              length: '170 km',
              width: '50 km',
              faultType: 'Horst opposite Black Forest across Rhine Graben',
              link: '/encyclopedia/mountains/vosges',
              image: 'https://source.unsplash.com/800x600/?vosges+mountains',
              notableFeatures: [
                'Mirror image of Black Forest (same rift system)',
                'Rounded summits (ballons) - ancient erosion',
                'Rhine Graben to east (sinking at 1mm/year)',
                'Volcanic features on ridges',
                'Famous wine region on eastern slopes'
              ]
            },
            {
              name: 'Wasatch Range',
              location: 'USA (Utah)',
              age: '17-5 million years (Miocene-Pliocene)',
              highestPeak: 'Mount Nebo (3,636m / 11,928 ft)',
              length: '260 km',
              width: '16-48 km',
              faultType: 'Wasatch Fault (active normal fault)',
              upliftRate: '1-2mm/year',
              link: '/encyclopedia/mountains/wasatch',
              image: 'https://source.unsplash.com/800x600/?wasatch+mountains',
              notableFeatures: [
                'Western edge of Rocky Mountains',
                'Great Basin graben to west',
                'Wasatch Fault: major earthquake threat (M7.5 potential)',
                'Ski resorts (Alta, Snowbird, Park City)',
                'Salt Lake City built on ancient lake bed in graben'
              ]
            },
            {
              name: 'Harz Mountains',
              location: 'Germany (Lower Saxony, Saxony-Anhalt, Thuringia)',
              age: '300 million years (original), uplifted 100 MYA',
              highestPeak: 'Brocken (1,141m / 3,743 ft)',
              length: '110 km',
              width: '40 km',
              faultType: 'Horst and fault-block uplift',
              link: '/encyclopedia/mountains/harz',
              image: 'https://source.unsplash.com/800x600/?harz+mountains',
              notableFeatures: [
                'Ancient block mountain reactivated',
                'Rich mining history (silver, lead)',
                'Brocken: legendary witches\' gathering site',
                'Dense spruce forests',
                'Fault-bounded on north and south'
              ]
            },
            {
              name: 'Basin and Range Province',
              location: 'USA (Nevada, Utah, parts of 9 states)',
              age: '20-5 million years (ongoing)',
              highestPeak: 'Varies (White Mountains: 4,342m)',
              extent: '800,000 km² area',
              faultType: 'Hundreds of parallel normal faults',
              link: '/encyclopedia/mountains/basin-and-range',
              image: 'https://source.unsplash.com/800x600/?nevada+mountains',
              notableFeatures: [
                'Classic example of extensional tectonics',
                '400+ north-south trending mountain ranges',
                'Alternating horsts (ranges) and grabens (basins)',
                'Crust stretched 100% - doubled in width',
                'Death Valley: lowest point in North America (-86m)'
              ]
            },
            {
              name: 'Ruwenzori Mountains',
              location: 'Africa (Uganda, DR Congo)',
              age: '3 million years (Pliocene)',
              highestPeak: 'Margherita Peak (5,109m / 16,763 ft)',
              length: '120 km',
              width: '65 km',
              faultType: 'Horst within East African Rift',
              link: '/encyclopedia/mountains/ruwenzori',
              image: 'https://source.unsplash.com/800x600/?ruwenzori+mountains',
              notableFeatures: [
                '"Mountains of the Moon" (Ptolemy)',
                'Equatorial glaciers (rapidly retreating)',
                'Fault-block uplift within rift valley',
                'Extreme rainfall (2,500mm/year)',
                'UNESCO World Heritage Site'
              ]
            },
            {
              name: 'Vindhya Range',
              location: 'India (Central India)',
              age: '1,100 million years (Precambrian)',
              highestPeak: 'Sad-bhawna Shikhar (752m / 2,467 ft)',
              length: '1,050 km',
              width: '15-100 km',
              faultType: 'Ancient fault-bounded range',
              link: '/encyclopedia/mountains/vindhya',
              image: 'https://source.unsplash.com/800x600/?vindhya+range',
              notableFeatures: [
                'Traditional North-South India divide',
                'Ancient sedimentary rocks',
                'Numerous hill forts',
                'Source of several rivers',
                'Rich in minerals'
              ]
            },
            {
              name: 'Sinai Mountains',
              location: 'Egypt (Sinai Peninsula)',
              age: '600 million years (Pan-African orogeny)',
              highestPeak: 'Mount Catherine (2,629m / 8,625 ft)',
              faultType: 'Fault-bounded crystalline massif',
              link: '/encyclopedia/mountains/sinai',
              image: 'https://source.unsplash.com/800x600/?sinai+mountains',
              notableFeatures: [
                'Mount Sinai: biblical significance',
                'Bounded by Gulf of Suez and Gulf of Aqaba (rift)',
                'Ancient granite and metamorphic rocks',
                'Saint Catherine\'s Monastery at base',
                'Part of Red Sea Rift system'
              ]
            }
          ],
          
          distribution: {
            continents: ['North America', 'Europe', 'Africa', 'Asia', 'Australia'],
            mapImage: 'assets/block-mountains-map.png',
            majorRegions: [
              {
                name: 'Basin and Range Province (USA)',
                extent: '800,000 km²',
                features: 'World\'s best example of extensional block faulting'
              },
              {
                name: 'East African Rift System',
                extent: '6,000 km length',
                features: 'Active continental rifting creating horsts and grabens'
              },
              {
                name: 'Rhine Graben System (Europe)',
                extent: '300 km length',
                features: 'Classic graben with horsts (Vosges, Black Forest) on sides'
              }
            ]
          }
        },
        
        {
          id: 'volcanic',
          name: 'Volcanic Mountains',
          icon: '🌋',
          color: '#D32F2F',
          
          definition: 'Volcanic mountains form when molten rock (magma) from Earth\'s mantle rises through the crust and erupts onto the surface as lava, ash, and pyroclastic materials. Over thousands to millions of years, repeated eruptions build up layers of solidified lava and volcanic debris, creating cone-shaped mountains. Volcanic mountains can form at convergent boundaries (subduction zones), divergent boundaries (rift zones), or over mantle hotspots in plate interiors.',
          
          formation: {
            title: 'How Volcanic Mountains Form - Complete Process',
            steps: [
              {
                step: 1,
                text: 'Magma forms 50-200km deep in mantle from: subduction, rifting, or hotspot melting',
                icon: '🔥'
              },
              {
                step: 2,
                text: 'Magma rises through crust (less dense than surrounding rock)',
                icon: '⬆️'
              },
              {
                step: 3,
                text: 'Magma accumulates in shallow chamber (5-15km depth) beneath surface',
                icon: '🎈'
              },
              {
                step: 4,
                text: 'Pressure builds until magma breaks through surface at vent/fissure',
                icon: '💥'
              },
              {
                step: 5,
                text: 'Eruption: Lava flows, ash clouds, pyroclastic flows expelled',
                icon: '🌋'
              },
              {
                step: 6,
                text: 'Lava cools and solidifies into igneous rock (basalt, andesite, rhyolite)',
                icon: '🪨'
              },
              {
                step: 7,
                text: 'Ash and tephra settle in layers around vent',
                icon: '💨'
              },
              {
                step: 8,
                text: 'Repeated eruptions build cone layer by layer (stratification)',
                icon: '📚'
              },
              {
                step: 9,
                text: 'Central crater forms at summit; secondary vents may develop on flanks',
                icon: '⭕'
              },
              {
                step: 10,
                text: 'Mountain grows over 10,000-1,000,000 years through episodic eruptions',
                icon: '⏳'
              }
            ],
            animation: 'volcanic-mountain-animation.mp4'
          },
          
          characteristics: [
            'Conical or dome-shaped profile',
            'Central crater or caldera at summit',
            'Steep sides (30-35° angle)',
            'Composed of layered igneous rocks',
            'Can be active, dormant, or extinct',
            'Radial drainage pattern (streams flow down all sides)',
            'Fumaroles, hot springs at base',
            'Parasitic cones on flanks',
            'Lava flows visible on slopes',
            'Volcanic ash layers (tephra)',
            'Bombs and blocks scattered on slopes',
            'Fertile volcanic soils (weathered basalt)',
            'Found at plate boundaries or hotspots',
            'Explosive or effusive eruption styles'
          ],
          
          examples: [
            {
              name: 'Mount Fuji (Fujisan)',
              location: 'Japan (Honshu Island)',
              status: 'Active (dormant)',
              height: '3,776m / 12,389 ft',
              lastEruption: '1707 (Hoei eruption)',
              type: 'Stratovolcano (composite)',
              plateContext: 'Pacific + Philippine + Eurasian plate junction',
              link: '/encyclopedia/volcanoes/fuji',
              image: 'https://source.unsplash.com/800x600/?mount+fuji',
              notableFeatures: [
                'Japan\'s highest peak and national symbol',
                'Perfect symmetrical cone',
                'UNESCO World Heritage Site',
                'Last eruption covered Edo (Tokyo) in ash',
                'Sacred site in Shinto religion',
                'Over 300,000 climbers annually'
              ]
            },
            {
              name: 'Mount Kilimanjaro',
              location: 'Tanzania (East Africa)',
              status: 'Dormant stratovolcano',
              height: '5,895m / 19,341 ft - Africa\'s highest',
              lastEruption: '360,000-150,000 years ago',
              type: 'Stratovolcano with 3 volcanic cones (Kibo, Mawenzi, Shira)',
              plateContext: 'East African Rift System',
              link: '/encyclopedia/volcanoes/kilimanjaro',
              image: 'https://source.unsplash.com/800x600/?kilimanjaro',
              notableFeatures: [
                'Africa\'s highest mountain',
                'Free-standing mountain (not part of range)',
                'Three volcanic cones, only Kibo still active',
                'Glaciers rapidly retreating (80% loss since 1912)',
                'Seven different climate zones base to summit',
                'UNESCO World Heritage Site'
              ]
            },
            {
              name: 'Mount Vesuvius',
              location: 'Italy (Campania, near Naples)',
              status: 'Active',
              height: '1,281m / 4,203 ft',
              lastEruption: '1944',
              type: 'Somma-stratovolcano',
              plateContext: 'African Plate subducting under Eurasian',
              link: '/encyclopedia/volcanoes/vesuvius',
              image: 'https://source.unsplash.com/800x600/?vesuvius,naples',
              notableFeatures: [
                'Destroyed Pompeii and Herculaneum in 79 AD',
                'Most densely populated volcanic region (3 million people)',
                'Only active volcano in mainland Europe',
                'Plinian eruptions (explosive ash columns)',
                'Last eruption: 1944 during WWII',
                'Continuously monitored due to extreme danger'
              ]
            },
            {
              name: 'Mauna Loa',
              location: 'Hawaii, USA (Big Island)',
              status: 'Active shield volcano',
              height: '4,169m / 13,678 ft above sea level (10,100m from seafloor)',
              lastEruption: '2022',
              type: 'Shield volcano',
              plateContext: 'Hawaiian hotspot (intraplate)',
              link: '/encyclopedia/volcanoes/mauna-loa',
              image: 'https://source.unsplash.com/800x600/?mauna+loa,hawaii',
              notableFeatures: [
                'Earth\'s largest volcano by volume (75,000 km³)',
                'Gentle slopes (4-6°) from fluid basaltic lava',
                'Summit caldera: Moku\'āweoweo',
                'Erupts every 6 years on average',
                'Built over 700,000 years',
                'Part of Hawaiian Emperor seamount chain'
              ]
            },
            {
              name: 'Mount Rainier',
              location: 'USA (Washington State)',
              status: 'Active stratovolcano',
              height: '4,392m / 14,411 ft',
              lastEruption: '1894',
              type: 'Stratovolcano',
              plateContext: 'Juan de Fuca Plate subducting under North American',
              link: '/encyclopedia/volcanoes/rainier',
              image: 'https://source.unsplash.com/800x600/?mount+rainier',
              notableFeatures: [
                'Most glaciated peak in contiguous USA (26 glaciers)',
                'Highest peak in Cascade Range',
                'Extreme lahar (mudflow) hazard to Seattle-Tacoma',
                'Active geothermal system melting summit ice',
                'One of 16 "Decade Volcanoes" (high risk)',
                'Last major eruption: 1,000 years ago'
              ]
            },
            {
              name: 'Mount Etna',
              location: 'Italy (Sicily)',
              status: 'Active - Europe\'s most active',
              height: '3,357m / 11,014 ft (variable due to eruptions)',
              lastEruption: 'Ongoing (last major: 2021-2023)',
              type: 'Stratovolcano',
              plateContext: 'African-Eurasian plate boundary',
              link: '/encyclopedia/volcanoes/etna',
              image: 'https://source.unsplash.com/800x600/?mount+etna',
              notableFeatures: [
                'Europe\'s highest active volcano',
                'Erupts almost continuously',
                '4 summit craters + hundreds of lateral vents',
                'Documented eruptions for 2,700 years',
                'UNESCO World Heritage Site',
                'Supports agriculture (vineyards) on fertile slopes'
              ]
            },
            {
              name: 'Popocatépetl',
              location: 'Mexico (Central Mexico)',
              status: 'Active',
              height: '5,426m / 17,802 ft',
              lastEruption: 'Ongoing since 2005',
              type: 'Stratovolcano',
              plateContext: 'Cocos Plate subducting under North American',
              link: '/encyclopedia/volcanoes/popocatepetl',
              image: 'https://source.unsplash.com/800x600/?popocatepetl',
              notableFeatures: [
                'Second highest peak in Mexico',
                'Name means "Smoking Mountain" in Nahuatl',
                '25 million people live within 100km',
                'Frequent ash emissions close Mexico City airport',
                'Sister volcano: Iztaccíhuatl (dormant)',
                'Aztec mythology: lovers turned to mountains'
              ]
            },
            {
              name: 'Cotopaxi',
              location: 'Ecuador (Andes)',
              status: 'Active',
              height: '5,897m / 19,347 ft',
              lastEruption: '2015',
              type: 'Stratovolcano',
              plateContext: 'Nazca Plate subducting under South American',
              link: '/encyclopedia/volcanoes/cotopaxi',
              image: 'https://source.unsplash.com/800x600/?cotopaxi',
              notableFeatures: [
                'World\'s highest active volcano',
                'Near-perfect symmetrical cone',
                'Permanent snow/ice cap above 5,000m',
                'Major lahar threat to Quito (50km away)',
                '50+ eruptions since 1738',
                'Part of "Avenue of the Volcanoes"'
              ]
            },
            {
              name: 'Krakatoa (Anak Krakatau)',
              location: 'Indonesia (Sunda Strait)',
              status: 'Active',
              height: '338m / 1,109 ft (growing)',
              lastEruption: '2020',
              type: 'Stratovolcano/Caldera',
              plateContext: 'Indo-Australian subducting under Eurasian',
              link: '/encyclopedia/volcanoes/krakatoa',
              image: 'https://source.unsplash.com/800x600/?krakatoa',
              notableFeatures: [
                '1883 eruption: 4th largest in history',
                'Generated 40m tsunami, killed 36,000',
                'Explosion heard 4,800km away',
                'Anak Krakatau ("Child of Krakatoa") emerged 1927',
                'Growing 5m/year',
                '2018 flank collapse caused deadly tsunami'
              ]
            },
            {
              name: 'Mount St. Helens',
              location: 'USA (Washington State)',
              status: 'Active',
              height: '2,549m / 8,363 ft (reduced from 2,950m after 1980)',
              lastEruption: '2008',
              type: 'Stratovolcano',
              plateContext: 'Juan de Fuca subducting under North American',
              link: '/encyclopedia/volcanoes/st-helens',
              image: 'https://source.unsplash.com/800x600/?mount+st+helens',
              notableFeatures: [
                '1980 eruption: deadliest in US history (57 deaths)',
                'Lateral blast destroyed 600 km² forest',
                'Reduced height by 400m',
                'Created horseshoe-shaped crater',
                'Lava dome growing since 1980',
                'Best-studied volcanic eruption in history'
              ]
            },
            {
              name: 'Nyiragongo',
              location: 'DR Congo (Virunga Mountains)',
              status: 'Active',
              height: '3,470m / 11,385 ft',
              lastEruption: '2021',
              type: 'Stratovolcano',
              plateContext: 'East African Rift System',
              link: '/encyclopedia/volcanoes/nyiragongo',
              image: 'https://source.unsplash.com/800x600/?nyiragongo',
              notableFeatures: [
                'World\'s largest lava lake in crater',
                'Extremely fluid lava (flows 100 km/h)',
                '2002 eruption destroyed 15% of Goma city',
                'Lava lake depth: 600m',
                'One of Africa\'s most active volcanoes',
                'Part of Virunga National Park'
              ]
            },
            {
              name: 'Eyjafjallajökull',
              location: 'Iceland',
              status: 'Active',
              height: '1,651m / 5,417 ft',
              lastEruption: '2010',
              type: 'Stratovolcano (ice-capped)',
              plateContext: 'Mid-Atlantic Ridge (divergent) + hotspot',
              link: '/encyclopedia/volcanoes/eyjafjallajokull',
              image: 'https://source.unsplash.com/800x600/?eyjafjallajokull',
              notableFeatures: [
                '2010 eruption: ash cloud disrupted global air travel',
                '100,000 flights cancelled, 10 million affected',
                'Ice-magma interaction created explosive phreatomagmatic eruption',
                'Name means "island mountain glacier"',
                'Summit caldera covered by ice cap',
                'Historically erupts before nearby Katla volcano'
              ]
            }
          ],
          
          distribution: {
            continents: ['Asia', 'Africa', 'South America', 'North America', 'Oceania', 'Antarctica', 'Europe'],
            mapImage: 'assets/volcanic-mountains-map.png',
            majorZones: [
              {
                name: 'Ring of Fire',
                extent: '40,000 km',
                volcanoes: '452 (75% of world\'s active)',
                features: 'Circum-Pacific subduction zones'
              },
              {
                name: 'Mid-Atlantic Ridge',
                extent: '16,000 km',
                volcanoes: 'Iceland, Azores, Tristan da Cunha',
                features: 'Divergent boundary + hotspot'
              },
              {
                name: 'East African Rift',
                extent: '6,000 km',
                volcanoes: 'Kilimanjaro, Nyiragongo, Ol Doinyo Lengai',
                features: 'Continental rifting creating volcanoes'
              },
              {
                name: 'Hotspot Chains',
                examples: 'Hawaii, Yellowstone, Réunion, Galápagos',
                features: 'Intraplate volcanism over mantle plumes'
              }
            ]
          }
        },
        
        // Continuing with Dome and Plateau mountains in next part due to length...
        
        {
          id: 'dome',
          name: 'Dome Mountains',
          icon: '🏔️',
          color: '#7B68EE',
          
          definition: 'Dome mountains form when large volumes of magma push upward from depth but do not break through Earth\'s surface to erupt. Instead, the magma intrudes between existing rock layers, causing them to arch upward in a dome shape. Over millions of years, erosion removes the overlying sedimentary rocks, gradually exposing the crystalline igneous core (batholith or laccolith) and creating rounded, dome-shaped mountains. Unlike volcanic mountains that erupt explosively, dome mountains form through slow, non-eruptive uplift.',
          
          formation: {
            title: 'How Dome Mountains Form - Complete Process',
            steps: [
              {
                step: 1,
                text: 'Magma rises from mantle/lower crust toward surface (50-10km depth)',
                icon: '⬆️'
              },
              {
                step: 2,
                text: 'Magma lacks sufficient pressure/gas to break through (non-eruptive)',
                icon: '🚫🌋'
              },
              {
                step: 3,
                text: 'Magma spreads horizontally between rock layers or pools as batholith',
                icon: '➡️'
              },
              {
                step: 4,
                text: 'Buoyant magma pushes overlying sedimentary layers upward',
                icon: '⤴️'
              },
              {
                step: 5,
                text: 'Rock layers bend and arch into dome/anticline shape',
                icon: '🎪'
              },
              {
                step: 6,
                text: 'Magma slowly cools forming coarse-grained intrusive igneous rock (granite)',
                icon: '🪨'
              },
              {
                step: 7,
                text: 'Uplift continues as buoyant rock rises (isostatic adjustment)',
                icon: '⚖️'
              },
              {
                step: 8,
                text: 'Erosion attacks dome, removing softer sedimentary cover',
                icon: '🌊'
              },
              {
                step: 9,
                text: 'Resistant granite core gradually exposed at surface',
                icon: '🏔️'
              },
              {
                step: 10,
                text: 'Complete dome structure revealed after millions of years erosion',
                icon: '⏳'
              }
            ],
            animation: 'dome-mountain-animation.mp4'
          },
          
          characteristics: [
            'Rounded, dome-like shape (not pointed)',
            'Smooth, gentle slopes (10-20°)',
            'Circular or elliptical plan view',
            'No volcanic craters or lava flows',
            'Composed of intrusive igneous rock (granite, granodiorite)',
            'Coarse-grained crystals (slow cooling)',
            'Concentric erosion pattern (exfoliation)',
            'Radial drainage (streams flow outward)',
            'Often isolated peaks, not ranges',
            'Older than surrounding sedimentary rocks',
            'May show contact metamorphism around edges',
            'Lower elevation than fold/volcanic mountains',
            'Formed by uplift, not compression or eruption',
            'Resistant to erosion (hard granite core)'
          ],
          
          examples: [
            {
              name: 'Black Hills',
              location: 'USA (South Dakota, Wyoming)',
              age: '60-50 million years (uplift)',
              rockAge: '2,500-1,600 million years (Precambrian)',
              highestPeak: 'Black Elk Peak (Harney Peak) - 2,207m / 7,242 ft',
              type: 'Crystalline dome',
              diameter: '200 km × 110 km',
              link: '/encyclopedia/mountains/black-hills',
              image: 'https://source.unsplash.com/800x600/?black+hills,south+dakota',
              notableFeatures: [
                'Classic dome: granite core surrounded by sedimentary rocks',
                'Mount Rushmore carved in granite batholith',
                'Concentric ring structure visible from space',
                'Sacred to Lakota Sioux (Paha Sapa)',
                'Gold discovered 1874 (led to Gold Rush)',
                'Formed by magmatic intrusion lifting sediments'
              ]
            },
            {
              name: 'Navajo Mountain',
              location: 'USA (Utah-Arizona border)',
              age: '65 million years (Laramide orogeny)',
              rockAge: '70 million years (Late Cretaceous intrusion)',
              highestPeak: '3,154m / 10,346 ft',
              type: 'Laccolith dome',
              diameter: '19 km',
              link: '/encyclopedia/mountains/navajo',
              image: 'https://source.unsplash.com/800x600/?navajo+mountain',
              notableFeatures: [
                'Classic laccolith: mushroom-shaped intrusion',
                'Sacred to Navajo Nation (Naatsisʼáán)',
                'Visible for 100+ miles across Colorado Plateau',
                'Sedimentary layers arched over igneous core',
                'Colorado River carved canyons around it',
                'Isolated peak rising from desert'
              ]
            },
            {
              name: 'Adirondack Mountains',
              location: 'USA (New York)',
              age: '5 million years (recent uplift)',
              rockAge: '1,300-1,000 million years (Grenville orogeny)',
              highestPeak: 'Mount Marcy - 1,629m / 5,344 ft',
              type: 'Anorthosite dome',
              extent: '31,000 km²',
              link: '/encyclopedia/mountains/adirondacks',
              image: 'https://source.unsplash.com/800x600/?adirondack+mountains',
              notableFeatures: [
                'Ancient metamorphic dome recently uplifted',
                'Only domed mountains in eastern USA',
                'Composed of anorthosite (rare rock type)',
                'Same rock as lunar highlands!',
                'Still rising ~2mm/year (isostatic rebound)',
                'Over 100 peaks above 1,000m'
              ]
            },
            {
              name: 'Enchanted Rock',
              location: 'USA (Texas)',
              age: '1,000 million years (Precambrian batholith)',
              exposed: '10-5 million years ago',
              height: '425m / 1,394 ft (130m above plain)',
              type: 'Granite dome (monadnock)',
              diameter: '2.5 km',
              link: '/encyclopedia/mountains/enchanted-rock',
              image: 'https://source.unsplash.com/800x600/?enchanted+rock+texas',
              notableFeatures: [
                'Massive pink granite dome',
                'Second largest granite dome in USA',
                'Exfoliation creates smooth surface',
                'Makes creaking sounds (thermal expansion)',
                'Sacred site to Native Americans',
                'Classic example of batholith exposure'
              ]
            },
            {
              name: 'Stone Mountain',
              location: 'USA (Georgia)',
              age: '300 million years (Carboniferous batholith)',
              exposed: '15 million years ago',
              height: '514m / 1,686 ft (251m above surrounding)',
              type: 'Granite dome (monadnock)',
              diameter: '8 km base',
              link: '/encyclopedia/mountains/stone-mountain',
              image: 'https://source.unsplash.com/800x600/?stone+mountain+georgia',
              notableFeatures: [
                'World\'s largest exposed granite surface',
                'Quartz monzonite batholith',
                'Confederate Memorial carving (controversial)',
                'Smooth dome from exfoliation',
                'Visible from 30 km away',
                'Forms from differential erosion'
              ]
            },
            {
              name: 'Pilot Mountain',
              location: 'USA (North Carolina)',
              age: '400 million years (Devonian intrusion)',
              exposed: 'Tertiary erosion',
              height: '747m / 2,451 ft (488m monadnock)',
              type: 'Quartzite dome',
              link: '/encyclopedia/mountains/pilot-mountain',
              image: 'https://source.unsplash.com/800x600/?pilot+mountain',
              notableFeatures: [
                'Distinctive knob rising from plateau',
                'Erosional remnant (monadnock)',
                'Resistant quartzite cap',
                'Navigation landmark for centuries',
                'Surrounded by eroded softer rock',
                'Classic "island mountain"'
              ]
            },
            {
              name: 'Half Dome',
              location: 'USA (Yosemite, California)',
              age: '87 million years (Late Cretaceous batholith)',
              exposed: '15 million years ago',
              height: '2,695m / 8,842 ft (1,444m above valley)',
              type: 'Granite dome',
              link: '/encyclopedia/mountains/half-dome',
              image: 'https://source.unsplash.com/800x600/?half+dome,yosemite',
              notableFeatures: [
                'Iconic sheared granite dome',
                'Part of Sierra Nevada batholith',
                'Glacial erosion created vertical face',
                'Originally full dome, ice removed half',
                'Cable route for hikers up steep side',
                'Composed of El Capitan granite'
              ]
            },
            {
              name: 'Uluru (Ayers Rock)',
              location: 'Australia (Northern Territory)',
              age: '550 million years (Cambrian sandstone)',
              uplifted: '300 million years ago',
              height: '863m / 2,831 ft (348m above plain)',
              type: 'Arkose inselberg/monadnock',
              link: '/encyclopedia/mountains/uluru',
              image: 'https://source.unsplash.com/800x600/?uluru,ayers+rock',
              notableFeatures: [
                'World\'s largest monolith (3.6 km long)',
                'Sacred to Anangu Aboriginal people',
                'Arkose sandstone (sedimentary, not igneous)',
                'Actually tip of vertical rock formation',
                'Most of mass extends underground',
                'Changes color with sun angle (red-orange)'
              ]
            },
            {
              name: 'Sugarloaf Mountain (Pão de Açúcar)',
              location: 'Brazil (Rio de Janeiro)',
              age: '600 million years (Precambrian)',
              height: '396m / 1,299 ft',
              type: 'Granite dome',
              link: '/encyclopedia/mountains/sugarloaf',
              image: 'https://source.unsplash.com/800x600/?sugarloaf+mountain,rio',
              notableFeatures: [
                'Iconic symbol of Rio de Janeiro',
                'Resistant granite dome on peninsula',
                'Cable car to summit since 1912',
                'Smooth dome from exfoliation weathering',
                'Part of Guanabara Bay complex',
                'Peak visible from 30+ km'
              ]
            },
            {
              name: 'Doi Suthep',
              location: 'Thailand (Chiang Mai)',
              age: 'Granite intrusion age unclear',
              height: '1,676m / 5,499 ft',
              type: 'Granite dome',
              link: '/encyclopedia/mountains/doi-suthep',
              image: 'https://source.unsplash.com/800x600/?doi+suthep',
              notableFeatures: [
                'Sacred Buddhist mountain',
                'Wat Phra That Doi Suthep temple at summit',
                'Overlooks Chiang Mai city',
                'Part of Doi Suthep-Pui National Park',
                'Rich biodiversity (300+ bird species)',
                'Rounded granite peak'
              ]
            }
          ],
          
          distribution: {
            continents: ['North America', 'South America', 'Africa', 'Australia', 'Asia'],
            mapImage: 'assets/dome-mountains-map.png',
            formationSettings: [
              {
                setting: 'Ancient Shield Regions',
                examples: 'Adirondacks, Black Hills, Uluru',
                age: 'Precambrian cores (1-3 billion years)',
                features: 'Exposed after long erosion'
              },
              {
                setting: 'Batholith Exposures',
                examples: 'Sierra Nevada domes, Yosemite',
                age: 'Mesozoic-Cenozoic (200-50 million years)',
                features: 'Large intrusive bodies gradually exposed'
              },
              {
                setting: 'Laccolith Regions',
                examples: 'Colorado Plateau (Navajo Mountain, Henry Mountains)',
                age: 'Tertiary (65-50 million years)',
                features: 'Mushroom-shaped intrusions lifting sediments'
              }
            ]
          }
        },
        
        {
          id: 'plateau',
          name: 'Plateau Mountains (Erosional/Dissected Plateaus)',
          icon: '🏞️',
          color: '#CD853F',
          
          definition: 'Plateau mountains, also called erosional or dissected plateaus, form when a large elevated flat area (plateau) is uplifted tectonically and then carved by rivers, streams, and glaciers over millions of years. The erosional forces cut deep valleys, canyons, and gorges into the plateau, leaving behind isolated peaks, mesas, and buttes that resemble mountains. Unlike fold or volcanic mountains built by construction, plateau mountains form through destruction—the removal of rock by erosion.',
          
          formation: {
            title: 'How Plateau Mountains Form - Complete Process',
            steps: [
              {
                step: 1,
                text: 'Large area of relatively flat land uplifted by tectonic forces (1,000-5,000m)',
                icon: '⬆️'
              },
              {
                step: 2,
                text: 'Creates elevated plateau (high plain) - horizontal sedimentary layers intact',
                icon: '🏔️'
              },
              {
                step: 3,
                text: 'Rivers begin cutting downward into uplifted plateau surface',
                icon: '🌊'
              },
              {
                step: 4,
                text: 'Increased elevation = increased rainfall = faster erosion',
                icon: '💧'
              },
              {
                step: 5,
                text: 'Rivers carve V-shaped valleys, then wider canyons',
                icon: '⛰️'
              },
              {
                step: 6,
                text: 'Headward erosion extends valleys upstream',
                icon: '↩️'
              },
              {
                step: 7,
                text: 'Valleys merge, isolating remnant peaks and ridges',
                icon: '✂️'
              },
              {
                step: 8,
                text: 'Resistant rock layers form cliffs; soft layers erode forming slopes',
                icon: '🪨'
              },
              {
                step: 9,
                text: 'Creates diverse landforms: mesas (flat tops), buttes (isolated peaks), hoodoos',
                icon: '🏞️'
              },
              {
                step: 10,
                text: 'Process continues over millions of years creating rugged terrain from plateau',
                icon: '⏳'
              }
            ],
            animation: 'plateau-mountain-animation.mp4'
          },
          
          characteristics: [
            'Flat-topped peaks (mesas, tablelands)',
            'Horizontal sedimentary rock layers visible in cliffs',
            'Deep canyons and gorges',
            'Steep-sided valleys with flat floors',
            'Formed by erosion, not uplift or volcanism',
            'Multicolored rock layers (different ages)',
            'Buttes and hoodoos (erosional remnants)',
            'Cliffs alternate with slopes (differential erosion)',
            'Often in arid/semi-arid climates',
            'Resistance to erosion varies by rock type',
            'Lack of folded structures',
            'Drainage deeply incised into plateau',
            'Relatively low elevation vs. fold mountains',
            'Found in tectonically stable regions'
          ],
          
          examples: [
            {
              name: 'Colorado Plateau',
              location: 'USA (Colorado, Utah, Arizona, New Mexico)',
              age: 'Rocks: 2,000-65 million years; Uplift: 70-40 MYA',
              elevation: '1,500-3,000m average',
              area: '337,000 km²',
              highestPeak: 'Mount Peale (3,877m / 12,721 ft)',
              type: 'Dissected sedimentary plateau',
              link: '/encyclopedia/mountains/colorado-plateau',
              image: 'https://source.unsplash.com/800x600/?colorado+plateau,grand+canyon',
              notableFeatures: [
                'Grand Canyon - 1.8km deep (Colorado River)',
                'Zion, Bryce, Arches, Canyonlands NPs',
                'Horizontal sedimentary layers (2 billion years)',
                'Monument Valley - iconic buttes and mesas',
                'Relatively stable tectonics (little deformation)',
                'Ancestral Rockies erosion deposited sediments'
              ]
            },
            {
              name: 'Catskill Mountains',
              location: 'USA (New York)',
              age: 'Rocks: 400-350 million years (Devonian); Dissection: Pleistocene',
              elevation: '600-1,200m',
              highestPeak: 'Slide Mountain (1,274m / 4,180 ft)',
              type: 'Dissected Allegheny Plateau',
              link: '/encyclopedia/mountains/catskills',
              image: 'https://source.unsplash.com/800x600/?catskill+mountains',
              notableFeatures: [
                'Not true mountains - eroded plateau',
                'Devonian delta sediments',
                'Source of NYC water supply (reservoirs)',
                'Deeply dissected by streams',
                'Glacial features (U-shaped valleys)',
                'Horizontal sandstone and shale layers'
              ]
            },
            {
              name: 'Deccan Plateau / Western Ghats',
              location: 'India (Western India)',
              age: 'Basalt: 66 million years (K-Pg boundary); Uplift: 50 MYA',
              elevation: '500-1,000m (Deccan), 1,000-2,700m (Ghats)',
              highestPeak: 'Anamudi (2,695m / 8,842 ft) - South India\'s highest',
              type: 'Volcanic plateau (flood basalts) + escarpment',
              area: '500,000 km²',
              link: '/encyclopedia/mountains/western-ghats',
              image: 'https://source.unsplash.com/800x600/?western+ghats',
              notableFeatures: [
                'World\'s second-largest flood basalt province',
                'Formed from Reunion hotspot eruptions',
                'Western Ghats: UNESCO biodiversity hotspot',
                'Escarpment faces Arabian Sea',
                'Orographic rainfall (6,000mm/year)',
                'Source of major rivers (Godavari, Krishna)'
              ]
            },
            {
              name: 'Ethiopian Highlands',
              location: 'Ethiopia, Eritrea',
              age: 'Basalt: 75-30 million years; Uplift: 30-25 MYA',
              elevation: '2,000-4,500m',
              highestPeak: 'Ras Dashen (4,550m / 14,928 ft)',
              type: 'Volcanic plateau dissected by rivers',
              area: '400,000 km²',
              link: '/encyclopedia/mountains/ethiopian-highlands',
              image: 'https://source.unsplash.com/800x600/?ethiopia+mountains',
              notableFeatures: [
                '"Roof of Africa" - Africa\'s largest highlands',
                'Blue Nile Gorge (1,500m deep)',
                'Flood basalts from Afar hotspot',
                'High biodiversity (Ethiopian wolf, gelada)',
                'Center of coffee origin',
                'Deeply dissected by erosion'
              ]
            },
            {
              name: 'Drakensberg Escarpment',
              location: 'South Africa, Lesotho',
              age: 'Basalt: 183 million years; Uplift: 65-30 MYA',
              elevation: '1,000-3,000m (escarpment)',
              highestPeak: 'Thabana Ntlenyana (3,482m / 11,424 ft) - Southern Africa\'s highest',
              type: 'Basalt capped plateau edge',
              length: '1,000 km',
              link: '/encyclopedia/mountains/drakensberg',
              image: 'https://source.unsplash.com/800x600/?drakensberg',
              notableFeatures: [
                '"Dragon Mountains" - massive escarpment',
                'Basalt lava flows cap Karoo sediments',
                'Dramatic 1,000m+ cliffs',
                'UNESCO World Heritage Site',
                'San rock art sites',
                'Orographic rainfall creates rivers'
              ]
            },
            {
              name: 'Blue Mountains',
              location: 'Australia (New South Wales)',
              age: 'Sandstone: 250 million years; Uplift: 80-60 MYA',
              elevation: '600-1,300m',
              highestPeak: 'Mount Werong (1,215m / 3,986 ft)',
              type: 'Dissected sandstone plateau',
              link: '/encyclopedia/mountains/blue-mountains',
              image: 'https://source.unsplash.com/800x600/?blue+mountains+australia',
              notableFeatures: [
                'Blue haze from eucalyptus oil droplets',
                'Triassic sandstone plateau',
                'Deeply incised valleys and gorges',
                'Three Sisters rock formation (icon)',
                'UNESCO World Heritage (Gondwana)',
                'Over 140 species of eucalyptus'
              ]
            },
            {
              name: 'Allegheny Plateau',
              location: 'USA (Pennsylvania, West Virginia, Ohio, New York)',
              age: 'Rocks: 300 million years (Pennsylvanian); Dissection: Pleistocene',
              elevation: '300-900m',
              highestPeak: 'Spruce Knob (1,482m / 4,863 ft)',
              type: 'Dissected sedimentary plateau',
              area: '200,000 km²',
              link: '/encyclopedia/mountains/allegheny-plateau',
              image: 'https://source.unsplash.com/800x600/?allegheny+mountains',
              notableFeatures: [
                'Western section of Appalachian Plateau',
                'Horizontal coal-bearing strata',
                'Deeply dissected by rivers',
                'Rich coal deposits (energy source)',
                'Part of Appalachian Mountain system',
                'Allegheny and Monongahela Rivers'
              ]
            },
            {
              name: 'Kimberley Plateau',
              location: 'Australia (Western Australia)',
              age: 'Rocks: 1,800-500 million years; Dissection: ongoing',
              elevation: '200-800m',
              area: '423,000 km²',
              type: 'Dissected sandstone plateau',
              link: '/encyclopedia/mountains/kimberley',
              image: 'https://source.unsplash.com/800x600/?kimberley+australia',
              notableFeatures: [
                'Ancient Precambrian plateau',
                'Horizontal sandstone layers',
                'Spectacular gorges and waterfalls',
                'Mitchell Falls, King George Falls',
                'Rich Aboriginal rock art',
                'Extremely remote wilderness'
              ]
            },
            {
              name: 'Guiana Highlands (Tepuis)',
              location: 'Venezuela, Guyana, Brazil',
              age: 'Sandstone: 2,000-1,600 million years; Uplift: 180-150 MYA',
              elevation: '1,000-3,000m',
              highestPeak: 'Pico da Neblina (2,995m / 9,826 ft)',
              type: 'Dissected sandstone plateau (tepuis)',
              link: '/encyclopedia/mountains/guiana-highlands',
              image: 'https://source.unsplash.com/800x600/?tepui,angel+falls',
              notableFeatures: [
                'Tepuis: tabletop mountains (flat summits)',
                'Angel Falls (979m) - world\'s highest waterfall',
                'Mount Roraima inspiration for "Lost World"',
                'Oldest exposed rocks on Earth',
                'Endemic species (isolated evolution)',
                'Vertical sandstone cliffs 1,000m+'
              ]
            },
            {
              name: 'Tibetan Plateau Edges',
              location: 'Tibet, China, India',
              age: 'Uplift: 50-25 million years',
              elevation: '4,000-5,000m average',
              highestPeak: 'Varies (plateau itself avg 4,500m)',
              type: 'Uplifted plateau with dissected edges',
              area: '2.5 million km² (world\'s largest)',
              link: '/encyclopedia/mountains/tibetan-plateau',
              image: 'https://source.unsplash.com/800x600/?tibetan+plateau',
              notableFeatures: [
                '"Roof of the World" - highest plateau',
                'Edges dissected by major rivers',
                'Source of 10 major Asian rivers',
                'Himalayas bound southern edge',
                'Permafrost at high elevations',
                'Influences global climate (monsoons)'
              ]
            }
          ],
          
          distribution: {
            continents: ['North America', 'South America', 'Africa', 'Asia', 'Australia'],
            mapImage: 'assets/plateau-mountains-map.png',
            commonSettings: [
              {
                setting: 'Sedimentary Plateaus',
                examples: 'Colorado Plateau, Deccan, Kimberley',
                age: 'Various (Precambrian to Cenozoic)',
                features: 'Horizontal layers, differential erosion'
              },
              {
                setting: 'Volcanic Plateaus',
                examples: 'Deccan Traps, Ethiopian Highlands, Drakensberg',
                age: 'Mesozoic to Cenozoic',
                features: 'Flood basalts, resistant caps'
              },
              {
                setting: 'Ancient Shields',
                examples: 'Guiana Highlands, Kimberley',
                age: 'Precambrian (1-2 billion years)',
                features: 'World\'s oldest exposed rocks'
              }
            ]
          }
        }
      ],
      
      comparisonTable: {
        title: 'Quick Comparison of All Mountain Types',
        headers: ['Type', 'Formation Process', 'Shape/Profile', 'Rock Composition', 'Example', 'Typical Age'],
        rows: [
          ['Fold 🗻', 'Plate collision & compression', 'Parallel ridges & valleys', 'Folded sedimentary + metamorphic', 'Himalayas', 'Young (< 100 MY)'],
          ['Block ⛰️', 'Crustal faulting & vertical displacement', 'Steep one side, gentle other', 'Crystalline basement rocks', 'Sierra Nevada', 'Variable'],
          ['Volcanic 🌋', 'Magma eruption & accumulation', 'Symmetrical cone', 'Layered igneous (basalt/andesite)', 'Mt. Fuji', 'Variable'],
          ['Dome 🏔️', 'Magma uplift (non-eruptive)', 'Rounded dome', 'Intrusive igneous (granite)', 'Black Hills', 'Old (> 50 MY)'],
          ['Plateau 🏞️', 'Uplift + river/glacial erosion', 'Flat tops, steep sides', 'Horizontal sedimentary layers', 'Grand Canyon area', 'Very old (> 100 MY)']
        ]
      }
    },
    
    // =============================
    // SECTION 3: FORMATION
    // =============================
    formation: {
      title: 'How Mountains Form',
      
      hero: {
        image: 'https://source.unsplash.com/1600x900/?tectonic,geology,rocks',
        tagline: 'A journey through millions of years of geological forces'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Mountain formation, called orogeny, is one of Earth\'s most powerful geological processes. It takes tens of millions of years and involves immense tectonic forces, volcanic eruptions, or relentless erosion. Let\'s follow the complete journey of fold mountain formation using the Himalayas as our example—a process spanning 200 million years from ancient ocean to the world\'s highest peaks.',
      
      stages: [
        {
          stage: 1,
          title: 'Ancient Ocean - The Tethys Sea',
          timeframe: '200-70 million years ago (Mesozoic Era: Jurassic-Cretaceous)',
          image: 'https://source.unsplash.com/1200x800/?ancient+ocean,sea,blue',
          
          description: [
            'Two major landmasses exist: Gondwana (containing India, Antarctica, Australia, Africa) in the south and Laurasia (Eurasia, North America) in the north',
            'Vast Tethys Ocean separates these supercontinents, spanning thousands of kilometers',
            'Indian plate breaks away from Gondwana and begins drifting northward at unprecedented speed: 5-15 cm per year (very fast for tectonic plates)',
            'Thick marine sediments accumulate on the ocean floor: limestone from coral reefs, sandstone from river deltas, shale from deep ocean',
            'Tropical marine life thrives: ammonites, brachiopods, corals, foraminifera create massive limestone deposits',
            'Ocean floor gradually subducts under Eurasian plate, recycling into mantle',
            'Ocean width decreases by ~50 meters per year as India approaches Asia',
            'Sediment thickness reaches 10-15 km on continental margins',
            'Volcanic island arcs form along subduction zones (similar to modern Indonesia)',
            'Continental drift powered by mantle convection: hot material rises under mid-ocean ridges, cools and sinks at subduction zones'
          ],
          
          diagram: 'assets/formation-stage1.svg',
          
          geologicalProcess: 'Continental drift driven by mantle convection currents beneath lithospheric plates; seafloor spreading at mid-ocean ridges pushes India northward',
          
          keyFeatures: [
            'Tethys Ocean width: ~8,000 km (wider than modern Atlantic)',
            'India\'s speed: 5-15 cm/year (fastest plate movement)',
            'Sediment accumulation: 10-15 km thick',
            'Ocean depth: 3,000-5,000 meters',
            'Temperature: Tropical (20-30°C)'
          ],
          
          evidence: [
            'Marine fossils (ammonites, corals) now found at 8,000m in Himalayas',
            'Limestone beds hundreds of meters thick in Himalayan peaks',
            'Ophiolite sutures (ancient seafloor) in Indus-Tsangpo suture zone',
            'Radiolarian cherts (deep ocean sediments) in mountain cores'
          ]
        },
        
        {
          stage: 2,
          title: 'Continental Collision Begins',
          timeframe: '50-40 million years ago (Early Cenozoic: Eocene Epoch)',
          image: 'https://source.unsplash.com/1200x800/?rock+collision,geology',
          
          description: [
            'Indian plate collides with Eurasian plate at convergent boundary around 50 million years ago',
            'Unlike oceanic crust, continental crust is too buoyant to subduct, causing massive pile-up',
            'Tethys Ocean seafloor continues subducting but ocean rapidly closes',
            'Collision speed still fast: 8-10 cm/year initially',
            'Immense compressional pressure builds at plate boundary: thousands of atmospheres',
            'Ocean sedimentary rocks begin to compress, fold, and crumple like accordion',
            'First proto-mountains emerge from closing ocean basin',
            'Volcanic activity intensifies along collision zone',
            'Earthquakes become frequent and powerful (magnitude 8-9)',
            'Metamorphism begins: heat and pressure transform sedimentary rocks into schist, gneiss, marble',
            'Partial melting of crust creates granite batholiths deep underground',
            'Ocean basin narrows to less than 1,000 km wide'
          ],
          
          diagram: 'assets/formation-stage2.svg',
          
          geologicalProcess: 'Convergent plate boundary formation with continental-continental collision; no subduction of continental crust due to low density (2.7 g/cm³ vs oceanic 3.0 g/cm³)',
          
          keyFeatures: [
            'Collision force: equivalent to millions of nuclear bombs continuously',
            'Crustal thickening begins: from 35km to 50km',
            'Pressure: 5-10 kilobars (5,000-10,000 atmospheres)',
            'Temperature: 400-600°C at 15-20km depth',
            'Deformation rate: centimeters per year'
          ],
          
          evidence: [
            'Indus-Tsangpo Suture Zone: marks collision point',
            'Metamorphic rocks (grade increases with depth)',
            'Granite plutons (now exposed by erosion)',
            'Folded and faulted sedimentary layers',
            'Ophiolites: slices of ancient ocean floor thrust onto land'
          ]
        },
        
        {
          stage: 3,
          title: 'Intense Uplift & Folding',
          timeframe: '40-25 million years ago (Mid Cenozoic: Eocene-Oligocene)',
          image: 'https://source.unsplash.com/1200x800/?mountain+formation,folded+rocks',
          
          description: [
            'Peak period of mountain building - most dramatic uplift occurs',
            'Rock layers violently buckle, fold, and thrust upward in massive folds',
            'Ocean sediments pushed to elevations of 3,000-5,000 meters above sea level',
            'First major mountain peaks emerge above permanent snow line',
            'Anticlines (upward folds) form peaks; synclines (downward folds) form valleys',
            'Thrust faulting: older rocks pushed on top of younger rocks (reversal of normal order)',
            'Nappe formation: huge rock sheets thrust tens of kilometers horizontally',
            'Regional metamorphism intensifies: creates schist, gneiss, and marble from original sediments',
            'Partial melting generates magma that rises to form granite intrusions',
            'Crustal thickness increases to 60-70 km (double normal continental crust)',
            'Intense seismic activity: magnitude 8+ earthquakes occur regularly',
            'Mountain range extends laterally (east-west) as India continues pushing north',
            'Erosion begins competing with uplift: rivers start carving valleys',
            'Climate changes: mountains create rain shadow, affecting monsoons',
            'First glaciers form on highest peaks above 5,000m'
          ],
          
          diagram: 'assets/formation-stage3.svg',
          
          geologicalProcess: 'Orogeny (mountain building) through intense compression, folding, thrust faulting, and regional metamorphism; isostatic compensation causes additional uplift',
          
          keyFeatures: [
            'Uplift rate: 10-20 mm/year (peak period)',
            'Crustal thickness: 60-70 km (vs normal 35km)',
            'Shortening: 2,000+ km of crust compressed to ~500km',
            'Metamorphic temperature: 600-800°C at depth',
            'Pressure: 10-15 kilobars',
            'Fold wavelength: 10-100 km'
          ],
          
          evidence: [
            'Massive recumbent folds visible in mountain faces',
            'Thrust sheets stacked like shingles',
            'High-grade metamorphic rocks (sillimanite, kyanite)',
            'Marine limestone now at 7,000-8,000m elevation',
            'Inverted stratigraphy (old rocks on top of young)',
            'Granite intrusions (now exposed as peaks like Everest summit)'
          ]
        },
        
        {
          stage: 4,
          title: 'Continued Growth & Erosional Shaping',
          timeframe: '25-5 million years ago (Late Cenozoic: Oligocene-Pliocene)',
          image: 'https://source.unsplash.com/1200x800/?himalaya,mountain+peak',
          
          description: [
            'Mountains continue rising to extreme elevations (7,000-8,000+ meters)',
            'Mount Everest and other "eight-thousanders" (14 peaks >8,000m) reach near-current heights',
            'Uplift rate slows but continues: 5-10 mm/year',
            'Major glacier systems form and begin sculpting mountains',
            'Valley glaciers carve U-shaped valleys, cirques, and arêtes',
            'Major rivers establish courses: Indus, Ganges, Brahmaputra, Tsangpo',
            'Rivers cut deep gorges through rising mountains (antecedent drainage)',
            'Kali Gandaki Gorge forms: world\'s deepest gorge (6,000m from river to peak)',
            'Erosion accelerates: mountains lose 2-3 mm/year to weathering',
            'Eroded sediments deposited in Indo-Gangetic Plain: world\'s largest alluvial plain',
            'Climate patterns drastically change due to mountain barrier',
            'Asian monsoon system develops and intensifies',
            'Tibetan Plateau uplifts to average 4,000-5,000m elevation',
            'Plateau uplift influences global climate: affects jet stream, rainfall patterns',
            'Glacial-interglacial cycles begin (2.6 million years ago)',
            'Ice ages cause massive glaciation, further sculpting peaks'
          ],
          
          diagram: 'assets/formation-stage4.svg',
          
          geologicalProcess: 'Dynamic equilibrium between tectonic uplift and erosional denudation; isostatic adjustment compensates for erosion by causing additional uplift',
          
          keyFeatures: [
            'Uplift rate: 5-10 mm/year',
            'Erosion rate: 2-3 mm/year',
            'Net growth: 2-7 mm/year',
            'Glacier coverage: 30,000-50,000 km² during ice ages',
            'River sediment load: 1-2 billion tons/year to ocean',
            'Tibetan Plateau elevation: 4,000-5,000m average'
          ],
          
          evidence: [
            'U-shaped glacial valleys throughout Himalayas',
            'Moraines (glacial deposits) at various elevations',
            'River terraces showing uplift history',
            'Indo-Gangetic sediments 2-5 km thick',
            'Glacial striations on bedrock',
            'Cirques and hanging valleys on mountain flanks'
          ]
        },
        
        {
          stage: 5,
          title: 'Modern Himalayas - Active & Growing',
          timeframe: 'Present Day (Holocene to Now)',
          image: 'https://source.unsplash.com/1200x800/?himalayas,everest,peak',
          
          description: [
            'Mountains still rising approximately 5mm per year due to ongoing collision',
            'India continues pushing northward at 4-5 cm/year into Eurasia',
            'Home to all 14 "eight-thousanders" (peaks above 8,000m) on Earth',
            'Mount Everest: 8,849m (29,032 ft) - world\'s highest point above sea level',
            'Massive glacier systems cover 33,000 km²: Gangotri, Siachen, Khumbu, Baltoro',
            'Glaciers retreating rapidly: 80% lost ice mass since 1850s due to climate change',
            'Frequent devastating earthquakes: Nepal 2015 (M7.8, 9,000 deaths), Kashmir 2005 (M7.6, 86,000 deaths)',
            'Earthquake risk extreme: sits on active fault system',
            'Marine fossils (ammonites, brachiopods, corals) found at 8,000m altitude - proof of ocean origin',
            'Deepest gorges on Earth: Kali Gandaki (6,000m depth), Yarlung Tsangpo (5,000m)',
            'Three parallel ranges: Outer Himalayas (Siwaliks), Lesser Himalayas, Greater Himalayas',
            'Active erosion transporting 1+ billion tons of sediment annually to Bay of Bengal',
            'Youngest and most tectonically active mountain range on Earth',
            'Source of 10 major Asian rivers supplying water to 3 billion people',
            'Permafrost above 4,500m, glaciers above 5,000m',
            'Extreme climate: -60°C in winter at high elevations',
            'Biodiversity hotspot: 10,000+ plant species, 300+ mammal species, 1,000+ bird species',
            'Major geopolitical boundary: India-China border disputes',
            'Climate change impacts: glacial lake outburst floods (GLOFs), increased avalanches',
            'Tourism and mountaineering: 500,000+ trekkers and climbers annually'
          ],
          
          diagram: 'assets/formation-stage5.svg',
          
          geologicalProcess: 'Ongoing active tectonics with uplift rates of 5mm/year + simultaneous glacial, fluvial, and mass-wasting erosion; isostatic rebound compensating for erosional removal',
          
          keyFeatures: [
            'Current uplift: 5 mm/year',
            'Erosion rate: 2-3 mm/year',
            'India\'s movement: 4-5 cm/year north',
            'Crustal thickness: 70 km (thickest continental crust)',
            'Earthquake frequency: M6+ every 2-3 years',
            'Glacier area: 33,000 km² (declining)',
            'River discharge: 1,500 km³/year'
          ],
          
          evidence: [
            'GPS measurements show ongoing uplift and plate movement',
            'Continuous seismic activity (thousands of quakes yearly)',
            'Active faults: Main Frontal Thrust, Main Boundary Thrust',
            'Young, rugged topography (minimal weathering)',
            'Fresh rockfall and landslide scars',
            'Glacial advance/retreat monitoring since 1850s',
            'Satellite imagery shows fault movements'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Essential Geological Terms',
        terms: [
          {
            term: 'Orogeny',
            pronunciation: '(o-ROJ-uh-nee)',
            definition: 'The process of mountain formation through tectonic forces, typically involving folding, faulting, volcanic activity, and metamorphism of rock layers over millions of years',
            example: 'The Himalayan Orogeny began 50 million years ago when the Indian and Eurasian plates collided, and continues today with ongoing uplift',
            relatedTerms: ['Plate Tectonics', 'Convergent Boundary', 'Mountain Building', 'Deformation']
          },
          {
            term: 'Subduction',
            pronunciation: '(suhb-DUCK-shun)',
            definition: 'The process where one tectonic plate slides beneath another at a convergent boundary, descending into the mantle where it melts and recycles, often creating volcanic arcs and deep ocean trenches',
            example: 'The Pacific Plate subducts under the North American Plate at 3-4 cm/year, forming the Cascade Range volcanoes (Mt. Rainier, Mt. St. Helens) and generating earthquakes',
            relatedTerms: ['Convergent Boundary', 'Volcanic Arc', 'Trench', 'Benioff Zone']
          },
          {
            term: 'Fold',
            pronunciation: '(fohld)',
            definition: 'Bends or curves in rock layers (strata) caused by compressional forces, creating anticlines (upward-arching folds) and synclines (downward-bending folds). Large-scale folding creates mountain ranges',
            example: 'The Appalachian Mountains show dramatic folding visible in road cuts where horizontal sedimentary layers have been bent into wavelike patterns by ancient tectonic compression',
            relatedTerms: ['Anticline', 'Syncline', 'Fold Axis', 'Compression', 'Nappe']
          },
          {
            term: 'Fault',
            pronunciation: '(fawlt)',
            definition: 'A fracture or zone of fractures in Earth\'s crust where blocks of rock have moved relative to each other, caused by tectonic stress. Types include normal, reverse, strike-slip, and thrust faults',
            example: 'The San Andreas Fault is a 1,200 km transform (strike-slip) fault cutting through California, where the Pacific and North American plates slide past each other horizontally at 3-5 cm/year',
            relatedTerms: ['Normal Fault', 'Reverse Fault', 'Strike-Slip Fault', 'Thrust Fault', 'Fault Scarp']
          },
          {
            term: 'Uplift',
            pronunciation: '(UP-lift)',
            definition: 'The vertical elevation of Earth\'s surface due to tectonic forces, causing rocks to rise and exposing deeper crustal layers through erosion. Can result from compression, extension, or isostatic adjustment',
            example: 'The Colorado Plateau experienced 1,500-3,000m of uplift over the past 70 million years without significant deformation, causing the Colorado River to cut the Grand Canyon',
            relatedTerms: ['Isostasy', 'Tectonic Uplift', 'Epeirogeny', 'Exhumation']
          },
          {
            term: 'Isostasy',
            pronunciation: '(eye-SOS-tuh-see)',
            definition: 'The gravitational equilibrium between Earth\'s lithosphere (crust) and asthenosphere (upper mantle), where less dense crustal blocks "float" at different elevations like icebergs in water. Mountains have deep roots extending into mantle',
            example: 'When Pleistocene glaciers (2 km thick ice) melted 10,000 years ago, Scandinavia rebounded upward ~200m and continues rising 1 cm/year due to isostatic rebound',
            relatedTerms: ['Crustal Equilibrium', 'Mantle Convection', 'Isostatic Rebound', 'Root']
          },
          {
            term: 'Metamorphism',
            pronunciation: '(met-uh-MOR-fiz-um)',
            definition: 'The transformation of existing rocks into new rock types through changes in temperature, pressure, and/or chemical environment, without melting. Regional metamorphism occurs during mountain building',
            example: 'In the cores of fold mountain ranges, limestone metamorphoses into marble, shale into slate then schist, and sandstone into quartzite due to intense heat (400-800°C) and pressure (5-15 kilobars)',
            relatedTerms: ['Metamorphic Rock', 'Regional Metamorphism', 'Schist', 'Gneiss', 'Marble']
          },
          {
            term: 'Erosion',
            pronunciation: '(ee-ROH-zhun)',
            definition: 'The wearing away and transport of rock and soil by natural agents including water (rivers, rain), ice (glaciers), wind, waves, and gravity (mass wasting). Major force shaping mountains',
            example: 'Glacial erosion carved the Matterhorn\'s iconic pyramidal shape over 2 million years, with ice plucking rock from three sides creating sharp arêtes and a pointed peak',
            relatedTerms: ['Weathering', 'Denudation', 'Mass Wasting', 'Fluvial Erosion', 'Glacial Erosion']
          },
          {
            term: 'Convergent Boundary',
            pronunciation: '(kuhn-VUR-jent BOWN-duh-ree)',
            definition: 'A tectonic plate boundary where two plates move toward each other, resulting in subduction (oceanic-continental or oceanic-oceanic) or collision (continental-continental), creating mountains, trenches, and volcanoes',
            example: 'The convergent boundary between the Indian and Eurasian plates created the Himalayas through continental collision, while the Nazca-South American boundary creates the Andes through subduction',
            relatedTerms: ['Plate Boundary', 'Subduction Zone', 'Continental Collision', 'Destructive Margin']
          },
          {
            term: 'Batholith',
            pronunciation: '(BATH-uh-lith)',
            definition: 'A large mass of intrusive igneous rock (typically granite) formed from cooled magma deep beneath Earth\'s surface, with an exposed surface area greater than 100 km². The core of many mountain ranges',
            example: 'The Sierra Nevada batholith formed 120-80 million years ago from subduction-related magmatism and is now exposed at the surface after millions of years of uplift and erosion, creating peaks like Half Dome',
            relatedTerms: ['Intrusive Igneous', 'Pluton', 'Granite', 'Stock', 'Laccolith']
          },
          {
            term: 'Thrust Fault',
            pronunciation: '(thrust fawlt)',
            definition: 'A low-angle reverse fault (typically <45°) where older rocks are pushed up and over younger rocks, common in fold mountain belts. Can transport rock masses tens of kilometers horizontally',
            example: 'The Main Frontal Thrust in the Himalayas has pushed Precambrian crystalline rocks (2+ billion years old) over recent Tertiary sediments (20 million years old), reversing the normal age sequence',
            relatedTerms: ['Reverse Fault', 'Nappe', 'Overthrust', 'Décollement', 'Imbrication']
          },
          {
            term: 'Plate Tectonics',
            pronunciation: '(playt tek-TON-iks)',
            definition: 'The scientific theory explaining Earth\'s surface movements: the lithosphere is broken into ~15 major plates that move on the asthenosphere, driven by mantle convection, creating earthquakes, volcanoes, and mountains',
            example: 'Plate tectonics explains why the Himalayas continue rising (India-Eurasia collision), why Japan has earthquakes (Pacific subduction), and why Iceland has volcanoes (Mid-Atlantic Ridge divergence)',
            relatedTerms: ['Lithosphere', 'Asthenosphere', 'Mantle Convection', 'Seafloor Spreading']
          },
          {
            term: 'Anticline',
            pronunciation: '(AN-tih-kline)',
            definition: 'An upward-arching fold in rock layers where the oldest rocks are in the core and youngest on the outside. Anticlines form mountain ridges in fold mountain ranges',
            example: 'The Zagros Mountains in Iran display spectacular anticlines visible from space, with parallel ridges of upward-folded Cretaceous and Tertiary limestones stretching for hundreds of kilometers',
            relatedTerms: ['Syncline', 'Fold', 'Fold Axis', 'Plunging Anticline', 'Dome']
          },
          {
            term: 'Glaciation',
            pronunciation: '(glay-see-AY-shun)',
            definition: 'The process of land ice formation and movement, and the erosional/depositional features created. Mountain glaciation carves distinctive landforms: cirques, arêtes, horns, U-valleys',
            example: 'During the Last Glacial Maximum (20,000 years ago), glaciers carved the Matterhorn into a pyramidal peak by eroding three cirques into the mountain\'s sides, creating sharp arêtes between them',
            relatedTerms: ['Glacier', 'Cirque', 'Arête', 'Horn', 'U-shaped Valley', 'Moraine']
          },
          {
            term: 'Orographic Rainfall',
            pronunciation: '(or-uh-GRAF-ik RAYN-fall)',
            definition: 'Precipitation caused when moist air is forced to rise over mountains, cooling adiabatically until water vapor condenses. Windward slopes receive heavy rain; leeward slopes are dry (rain shadow)',
            example: 'The Western Ghats in India receive 5,000-7,000mm annual rainfall on windward slopes from monsoons, while the leeward Deccan Plateau receives <600mm, creating rain shadow deserts',
            relatedTerms: ['Rain Shadow', 'Adiabatic Cooling', 'Windward', 'Leeward', 'Precipitation']
          }
        ]
      },
      
      interactiveElements: {
        plateAnimation: {
          type: 'animation',
          description: 'Interactive 3D animation showing tectonic plate movement and mountain formation from 200 million years ago to present, with adjustable timeline and viewpoint',
          file: 'assets/plate-tectonics-animation.mp4',
          duration: '3 minutes',
          features: ['Play/Pause', 'Timeline scrubber', 'Speed control', '360° rotation', 'Layer toggle']
        },
        
        quiz: {
          type: 'quiz',
          title: '🧠 Test Your Knowledge: Mountain Formation',
          questions: [
            {
              question: 'What drives the movement of tectonic plates?',
              options: [
                'Ocean currents and tidal forces',
                'Mantle convection currents from Earth\'s internal heat',
                'Earth\'s rotation (Coriolis effect)',
                'Gravitational pull of the Moon and Sun'
              ],
              correct: 1,
              explanation: 'Heat from Earth\'s core and radioactive decay in the mantle creates convection currents in the semi-molten asthenosphere. Hot material rises under mid-ocean ridges (divergent boundaries) and cooler material sinks at subduction zones, dragging and pushing the overlying tectonic plates at 1-15 cm/year.'
            },
            {
              question: 'Approximately how fast do the Himalayas currently grow per year?',
              options: ['0.5 millimeters', '5 millimeters', '50 millimeters', '500 millimeters'],
              correct: 1,
              explanation: 'The Himalayas grow approximately 5mm per year due to ongoing collision between the Indian and Eurasian plates (India moving north at 4-5 cm/year). However, erosion removes about 2-3mm/year, so net growth is 2-3mm/year. GPS measurements confirm this ongoing uplift.'
            },
            {
              question: 'Why are marine fossils (corals, ammonites) found at 8,000m elevation in the Himalayas?',
              options: [
                'Ancient humans carried them from the sea for religious purposes',
                'They formed from atmospheric precipitation and minerals',
                'The rocks containing them were once sediments on the floor of the Tethys Ocean',
                'Birds and animals transported them over millions of years'
              ],
              correct: 2,
              explanation: 'The sedimentary rocks (limestone, sandstone, shale) at high elevations in the Himalayas were deposited 200-50 million years ago on the floor of the ancient Tethys Ocean. When India collided with Eurasia, these ocean floor sediments were compressed, folded, and uplifted to form the mountains, carrying marine fossils to extreme elevations.'
            },
            {
              question: 'Which type of plate boundary creates fold mountains like the Himalayas?',
              options: [
                'Divergent boundary (plates moving apart)',
                'Transform boundary (plates sliding past each other)',
                'Convergent boundary (plates colliding)',
                'Conservative boundary (no vertical movement)'
              ],
              correct: 2,
              explanation: 'Convergent boundaries, where tectonic plates collide, create the immense compressional forces necessary to fold and uplift rock layers into fold mountains. Continental-continental collision (Himalayas: India + Eurasia) creates the highest mountains. Oceanic-continental convergent boundaries (Andes: Nazca + South America) create volcanic mountain ranges.'
            },
            {
              question: 'What is isostasy and how does it affect mountain formation?',
              options: [
                'The balance between Earth\'s crust and mantle; mountains have deep roots that "float" like icebergs',
                'The process of rock layers sliding past each other along fault lines',
                'The chemical weathering of rocks due to atmospheric exposure',
                'The lateral movement of continents across Earth\'s surface'
              ],
              correct: 0,
              explanation: 'Isostasy is the gravitational equilibrium between Earth\'s lithosphere (crust) and asthenosphere (upper mantle). Mountains have deep "roots" extending 50-70km into the mantle (vs. normal 35km crust) to balance their height above surface. As erosion removes rock from peaks, isostatic rebound causes additional uplift, like an iceberg rising as it melts.'
            },
            {
              question: 'How long did it take for the Himalayas to form from ocean to current height?',
              options: [
                '500,000 years',
                '5 million years',
                '50 million years',
                '500 million years'
              ],
              correct: 2,
              explanation: 'The Himalayan orogeny began approximately 50 million years ago when India collided with Eurasia and continues today. The most intense uplift occurred 40-25 million years ago. The entire process from Tethys Ocean closure to modern 8,000m+ peaks took 50+ million years and is still ongoing.'
            },
            {
              question: 'What causes the "rain shadow" effect in mountains?',
              options: [
                'Mountains block sunlight, creating permanent shadows',
                'Moist air rises on windward side, loses moisture; dry air descends on leeward side',
                'Rain clouds cannot rise above high peaks',
                'Mountain rocks absorb all rainfall on one side'
              ],
              correct: 1,
              explanation: 'Orographic rainfall occurs when moist air is forced to rise over mountains. As air rises, it cools adiabatically (0.6°C per 100m), causing water vapor to condense and precipitate on the windward slope. The now-dry air descends the leeward slope, warming and creating arid rain shadow deserts (e.g., Atacama behind Andes, Gobi behind Himalayas).'
            },
            {
              question: 'Why do mountains have multiple climate zones from base to summit?',
              options: [
                'Different rock types create different climates',
                'Temperature decreases with elevation (~6.5°C per 1000m), creating zones',
                'Prevailing winds change direction at different altitudes',
                'Seasonal variations are more extreme at higher elevations'
              ],
              correct: 1,
              explanation: 'Temperature decreases with elevation at approximately 6.5°C per 1000m (environmental lapse rate). This creates distinct climate and vegetation zones: tropical/subtropical base → temperate forests → alpine meadows → tundra → permanent ice/snow. Mount Kilimanjaro has 7 climate zones from tropical base (30°C) to arctic summit (-20°C).'
            }
          ]
        },
        
        crossSection: {
          type: 'interactive-diagram',
          description: 'Detailed cross-section of Himalayan collision zone showing crustal structure, faults, and rock deformation',
          file: 'assets/himalaya-cross-section.svg',
          features: ['Layer toggle', 'Zoom', 'Fault highlighting', 'Rock type legend', 'Depth scale']
        }
      }
    },
        // =============================
    // SECTION 4: EXAMPLES
    // =============================
    examples: {
      title: 'Major Mountain Ranges of the World',
      
      hero: {
        image: 'https://source.unsplash.com/1600x900/?mountain+ranges,peaks,landscape',
        tagline: 'Explore Earth\'s greatest peaks and mountain systems'
      },
      
      renderAs: 'grid',
      
      introduction: 'Earth has hundreds of mountain ranges spanning every continent. From the towering Himalayas to the ancient Appalachians, from volcanic Pacific peaks to the windswept Andes, each range tells a unique geological story. Click any range below to explore detailed information, interactive maps, stunning photography, and learn about the forces that shaped these natural wonders.',
      
      linkToExisting: '/encyclopedia/mountains/',
      
      filters: ['continent', 'type', 'height', 'age'],
      sortOptions: ['height-desc', 'height-asc', 'name-asc', 'age-desc', 'continent'],
      
      featuredRanges: [
        {
          name: 'Himalayas',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Mount Everest (8,849m / 29,032 ft)',
          length: '2,400 km (1,500 miles)',
          countries: ['India', 'Nepal', 'Bhutan', 'China', 'Pakistan', 'Afghanistan'],
          age: '50 million years',
          link: '/encyclopedia/mountains/himalayas',
          image: 'https://source.unsplash.com/800x600/?himalayas,mount+everest',
          icon: '🏔️',
          funFact: 'Growing 5mm/year and contains all 14 eight-thousanders!',
          keyStats: {
            peaks8000m: 14,
            glaciers: '15,000+ (33,000 km²)',
            rivers: '10 major rivers',
            population: '50 million people in mountains'
          }
        },
        {
          name: 'Andes Mountains',
          continent: 'South America',
          type: 'Fold Mountains',
          highestPeak: 'Aconcagua (6,961m / 22,838 ft)',
          length: '7,000 km (4,300 miles)',
          countries: ['Argentina', 'Chile', 'Peru', 'Bolivia', 'Ecuador', 'Colombia', 'Venezuela'],
          age: '25 million years',
          link: '/encyclopedia/mountains/andes',
          image: 'https://source.unsplash.com/800x600/?andes+mountains',
          icon: '⛰️',
          funFact: 'Longest continental mountain range in the world!',
          keyStats: {
            volcanoes: '50+ active volcanoes',
            width: '200-700 km',
            highestCapital: 'La Paz (3,640m)',
            minerals: 'Copper, gold, silver, lithium'
          }
        },
        {
          name: 'Rocky Mountains',
          continent: 'North America',
          type: 'Fold Mountains',
          highestPeak: 'Mount Elbert (4,401m / 14,440 ft)',
          length: '4,800 km (3,000 miles)',
          countries: ['USA', 'Canada'],
          age: '80 million years',
          link: '/encyclopedia/mountains/rockies',
          image: 'https://source.unsplash.com/800x600/?rocky+mountains',
          icon: '🏔️',
          funFact: 'Contains the Continental Divide separating Atlantic/Pacific watersheds',
          keyStats: {
            ranges: '100+ separate mountain ranges',
            nationalParks: '14 major parks',
            width: '120-650 km',
            minerals: 'Gold, silver, copper, molybdenum'
          }
        },
        {
          name: 'Alps',
          continent: 'Europe',
          type: 'Fold Mountains',
          highestPeak: 'Mont Blanc (4,808m / 15,774 ft)',
          length: '1,200 km (750 miles)',
          countries: ['France', 'Switzerland', 'Italy', 'Austria', 'Germany', 'Slovenia', 'Liechtenstein', 'Monaco'],
          age: '30 million years',
          link: '/encyclopedia/mountains/alps',
          image: 'https://source.unsplash.com/800x600/?alps,matterhorn',
          icon: '🗻',
          funFact: 'Most densely settled mountain range with 14 million people',
          keyStats: {
            glaciers: '1,200+ glaciers',
            peaks4000m: '82 peaks',
            tunnels: '15+ major road/rail tunnels',
            tourism: '120 million visitors/year'
          }
        },
        {
          name: 'Ural Mountains',
          continent: 'Europe/Asia',
          type: 'Fold Mountains (ancient)',
          highestPeak: 'Mount Narodnaya (1,895m / 6,217 ft)',
          length: '2,500 km (1,550 miles)',
          countries: ['Russia', 'Kazakhstan'],
          age: '250-300 million years',
          link: '/encyclopedia/mountains/urals',
          image: 'https://source.unsplash.com/800x600/?ural+mountains',
          icon: '⛰️',
          funFact: 'Traditional geographical boundary between Europe and Asia',
          keyStats: {
            width: '40-150 km',
            minerals: 'Iron, copper, gold, platinum, gemstones',
            forestCover: '60% forested',
            climate: 'Subarctic to continental'
          }
        },
        {
          name: 'Atlas Mountains',
          continent: 'Africa',
          type: 'Fold Mountains',
          highestPeak: 'Toubkal (4,167m / 13,671 ft)',
          length: '2,500 km (1,600 miles)',
          countries: ['Morocco', 'Algeria', 'Tunisia'],
          age: '65 million years',
          link: '/encyclopedia/mountains/atlas',
          image: 'https://source.unsplash.com/800x600/?atlas+mountains',
          icon: '🏔️',
          funFact: 'Separates Mediterranean climate from Sahara Desert',
          keyStats: {
            ranges: 'Tell Atlas, High Atlas, Saharan Atlas',
            snowCap: 'Snow-capped even near Sahara',
            biodiversity: 'Barbary macaque, Atlas cedar',
            population: 'Berber communities 10+ million'
          }
        },
        {
          name: 'Appalachian Mountains',
          continent: 'North America',
          type: 'Fold Mountains (ancient)',
          highestPeak: 'Mount Mitchell (2,037m / 6,684 ft)',
          length: '2,400 km (1,500 miles)',
          countries: ['USA', 'Canada'],
          age: '480 million years',
          link: '/encyclopedia/mountains/appalachians',
          image: 'https://source.unsplash.com/800x600/?appalachian+mountains',
          icon: '🌲',
          funFact: 'Once as tall as Himalayas, now heavily eroded',
          keyStats: {
            originalHeight: '~6,000m (Himalayan scale)',
            currentHeight: '~2,000m (eroded)',
            coalDeposits: 'World\'s largest coal reserves',
            biodiversity: 'Temperate rainforest hotspot'
          }
        },
        {
          name: 'Caucasus Mountains',
          continent: 'Europe/Asia',
          type: 'Fold Mountains',
          highestPeak: 'Mount Elbrus (5,642m / 18,510 ft) - Europe\'s highest',
          length: '1,200 km (750 miles)',
          countries: ['Russia', 'Georgia', 'Armenia', 'Azerbaijan'],
          age: '25 million years',
          link: '/encyclopedia/mountains/caucasus',
          image: 'https://source.unsplash.com/800x600/?caucasus+mountains',
          icon: '🗻',
          funFact: 'Traditional Europe-Asia boundary, has 5 peaks >5,000m',
          keyStats: {
            glaciers: '2,000+ glaciers',
            peaks5000m: '5 peaks',
            languages: '50+ languages spoken',
            biodiversity: 'Caucasian leopard, tur, wisent'
          }
        },
        {
          name: 'Karakoram Range',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'K2 (8,611m / 28,251 ft) - world\'s 2nd highest',
          length: '500 km (310 miles)',
          countries: ['Pakistan', 'India', 'China'],
          age: '50 million years',
          link: '/encyclopedia/mountains/karakoram',
          image: 'https://source.unsplash.com/800x600/?k2,karakoram',
          icon: '🏔️',
          funFact: 'K2 has 25% summit death rate - deadliest eight-thousander',
          keyStats: {
            'eight-thousanders': '4 peaks (K2, Broad Peak, Gasherbrum I & II)',
            glaciers: 'Siachen (76km), Baltoro (63km)',
            elevation: 'Highest average elevation globally',
            conflict: 'Siachen Glacier: world\'s highest battlefield'
          }
        },
        {
          name: 'Great Dividing Range',
          continent: 'Australia',
          type: 'Fold Mountains (ancient)',
          highestPeak: 'Mount Kosciuszko (2,228m / 7,310 ft)',
          length: '3,500 km (2,175 miles)',
          countries: ['Australia'],
          age: '300 million years',
          link: '/encyclopedia/mountains/great-dividing-range',
          image: 'https://source.unsplash.com/800x600/?australian+mountains',
          icon: '⛰️',
          funFact: 'Longest mountain range in Australia, 3rd longest globally',
          keyStats: {
            width: '160-300 km',
            rainfall: 'Orographic >2,000mm/year east',
            rainShadow: 'Interior <400mm/year',
            biodiversity: 'Eucalyptus forests, alpine heaths'
          }
        },
        {
          name: 'Transantarctic Mountains',
          continent: 'Antarctica',
          type: 'Fold Mountains (ancient, reactivated)',
          highestPeak: 'Mount Kirkpatrick (4,528m / 14,856 ft)',
          length: '3,500 km (2,200 miles)',
          countries: ['None (Antarctica)'],
          age: '500 million years (reactivated 65 MYA)',
          link: '/encyclopedia/mountains/transantarctic',
          image: 'https://source.unsplash.com/800x600/?antarctica,mountains',
          icon: '🏔️',
          funFact: 'Divides East/West Antarctica; mostly buried under ice',
          keyStats: {
            iceThickness: 'Up to 4,000m covering range',
            fossilRecords: 'Ancient forests, dinosaurs',
            coalDeposits: 'Proof of tropical climate past',
            peaks: 'Few ice-free peaks (nunataks)'
          }
        },
        {
          name: 'Southern Alps (New Zealand)',
          continent: 'Oceania',
          type: 'Fold Mountains',
          highestPeak: 'Aoraki/Mount Cook (3,724m / 12,218 ft)',
          length: '500 km (310 miles)',
          countries: ['New Zealand'],
          age: '5 million years (very young)',
          link: '/encyclopedia/mountains/southern-alps-nz',
          image: 'https://source.unsplash.com/800x600/?mount+cook,new+zealand',
          icon: '🏔️',
          funFact: 'Fastest-uplifting mountains: 10mm/year!',
          keyStats: {
            upliftRate: '10mm/year',
            glaciers: '360+ glaciers',
            rainfall: '8,000-12,000mm/year west',
            earthquakes: 'Alpine Fault: M8+ every 300 years'
          }
        },
        {
          name: 'Zagros Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Dena (4,409m / 14,465 ft)',
          length: '1,600 km (990 miles)',
          countries: ['Iran', 'Iraq', 'Turkey'],
          age: '40-30 million years',
          link: '/encyclopedia/mountains/zagros',
          image: 'https://source.unsplash.com/800x600/?zagros+mountains',
          icon: '🗻',
          funFact: 'Fastest-rising mountains on Earth: 10mm/year',
          keyStats: {
            folds: 'Spectacular parallel anticlines',
            oil: 'World\'s largest oil/gas reserves',
            earthquakes: 'Iran seismic zone - frequent M6+',
            rivers: 'Source of Tigris and Euphrates'
          }
        },
        {
          name: 'Hindu Kush',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Tirich Mir (7,708m / 25,289 ft)',
          length: '800 km (500 miles)',
          countries: ['Afghanistan', 'Pakistan'],
          age: '50 million years',
          link: '/encyclopedia/mountains/hindu-kush',
          image: 'https://source.unsplash.com/800x600/?hindu+kush',
          icon: '⛰️',
          funFact: 'Western continuation of Himalayas with 20+ peaks >7,000m',
          keyStats: {
            peaks7000m: '20+ peaks',
            passes: 'Khyber Pass (strategic importance)',
            glaciers: 'Source of Amu Darya, Indus',
            climate: 'Extreme: -50°C in winter'
          }
        },
        {
          name: 'Tian Shan',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Jengish Chokusu/Pobeda Peak (7,439m / 24,406 ft)',
          length: '2,500 km (1,550 miles)',
          countries: ['China', 'Kazakhstan', 'Kyrgyzstan'],
          age: '300 million years (reactivated 25 MYA)',
          link: '/encyclopedia/mountains/tian-shan',
          image: 'https://source.unsplash.com/800x600/?tian+shan',
          icon: '🏔️',
          funFact: '"Celestial Mountains" - central Asia\'s highest range',
          keyStats: {
            peaks7000m: '5 peaks',
            glaciers: '15,000+ glaciers',
            area: '800,000 km²',
            biodiversity: 'Snow leopard, Marco Polo sheep'
          }
        },
        {
          name: 'Pyrenees',
          continent: 'Europe',
          type: 'Fold Mountains',
          highestPeak: 'Aneto (3,404m / 11,168 ft)',
          length: '430 km (270 miles)',
          countries: ['Spain', 'France', 'Andorra'],
          age: '65 million years',
          link: '/encyclopedia/mountains/pyrenees',
          image: 'https://source.unsplash.com/800x600/?pyrenees',
          icon: '🗻',
          funFact: 'Natural border between Iberian Peninsula and Europe',
          keyStats: {
            peaks3000m: '129 peaks',
            width: '80-150 km',
            nationalParks: '7 major parks',
            biodiversity: 'Iberian lynx, brown bear'
          }
        },
        {
          name: 'Carpathian Mountains',
          continent: 'Europe',
          type: 'Fold Mountains',
          highestPeak: 'Gerlachovský štít (2,655m / 8,711 ft)',
          length: '1,500 km (930 miles)',
          countries: ['Slovakia', 'Poland', 'Ukraine', 'Romania', 'Czech Republic', 'Hungary', 'Serbia'],
          age: '65-30 million years',
          link: '/encyclopedia/mountains/carpathians',
          image: 'https://source.unsplash.com/800x600/?carpathian+mountains',
          icon: '⛰️',
          funFact: 'Forms giant arc through Central Europe',
          keyStats: {
            forestCover: '55% forested',
            biodiversity: 'European bison, lynx, wolf, bear',
            area: '210,000 km²',
            population: '18 million in mountains'
          }
        },
        {
          name: 'Altai Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Belukha (4,506m / 14,783 ft)',
          length: '2,000 km (1,240 miles)',
          countries: ['Russia', 'Mongolia', 'China', 'Kazakhstan'],
          age: '500 million years (reactivated)',
          link: '/encyclopedia/mountains/altai',
          image: 'https://source.unsplash.com/800x600/?altai+mountains',
          icon: '🏔️',
          funFact: 'UNESCO World Heritage - "Golden Mountains"',
          keyStats: {
            glaciers: '1,400+ glaciers',
            rivers: 'Source of Ob and Irtysh rivers',
            biodiversity: 'Snow leopard, argali sheep',
            culture: 'Ancient Scythian burial mounds'
          }
        },
        {
          name: 'Cascade Range',
          continent: 'North America',
          type: 'Volcanic Mountains',
          highestPeak: 'Mount Rainier (4,392m / 14,411 ft)',
          length: '1,100 km (700 miles)',
          countries: ['USA', 'Canada'],
          age: '36 million years',
          link: '/encyclopedia/mountains/cascades',
          image: 'https://source.unsplash.com/800x600/?cascade+mountains,mount+rainier',
          icon: '🌋',
          funFact: 'Part of Ring of Fire with 20+ major volcanoes',
          keyStats: {
            volcanoes: '20+ major, 5 active',
            lastEruption: 'Mount St. Helens (1980, 2008)',
            glaciers: '700+ glaciers on peaks',
            hazard: 'High lahar and eruption risk'
          }
        },
        {
          name: 'Sierra Madre',
          continent: 'North America',
          type: 'Fold Mountains',
          highestPeak: 'Cerro Mohinora (3,300m / 10,827 ft)',
          length: '1,250 km (Oriental), 1,000 km (Occidental)',
          countries: ['Mexico'],
          age: '80-50 million years',
          link: '/encyclopedia/mountains/sierra-madre',
          image: 'https://source.unsplash.com/800x600/?sierra+madre+mexico',
          icon: '⛰️',
          funFact: 'Three parallel ranges enclosing Mexican Plateau',
          keyStats: {
            ranges: 'Oriental, Occidental, del Sur',
            biodiversity: 'Monarch butterfly, jaguar',
            canyons: 'Copper Canyon (deeper than Grand)',
            minerals: 'Silver, gold, copper'
          }
        },
        {
          name: 'Ethiopian Highlands',
          continent: 'Africa',
          type: 'Plateau Mountains (volcanic)',
          highestPeak: 'Ras Dashen (4,550m / 14,928 ft)',
          area: '400,000 km²',
          countries: ['Ethiopia', 'Eritrea'],
          age: '75-30 million years',
          link: '/encyclopedia/mountains/ethiopian-highlands',
          image: 'https://source.unsplash.com/800x600/?ethiopia+mountains',
          icon: '🏔️',
          funFact: '"Roof of Africa" - source of Blue Nile',
          keyStats: {
            gorges: 'Blue Nile Gorge (1,500m deep)',
            basalts: 'Flood basalt plateau',
            endemism: 'Ethiopian wolf, gelada',
            coffee: 'Origin of Arabica coffee'
          }
        },
        {
          name: 'Drakensberg',
          continent: 'Africa',
          type: 'Plateau Mountains (basalt)',
          highestPeak: 'Thabana Ntlenyana (3,482m / 11,424 ft)',
          length: '1,000 km (620 miles)',
          countries: ['South Africa', 'Lesotho'],
          age: '183 million years (basalt)',
          link: '/encyclopedia/mountains/drakensberg',
          image: 'https://source.unsplash.com/800x600/?drakensberg',
          icon: '⛰️',
          funFact: '"Dragon Mountains" with 1,000m+ escarpment cliffs',
          keyStats: {
            escarpment: '1,000-2,000m sheer cliffs',
            basaltCap: 'Karoo basalt lava flows',
            rockArt: 'San paintings (40,000+ sites)',
            UNESCO: 'World Heritage Site'
          }
        },
        {
          name: 'Brooks Range',
          continent: 'North America',
          type: 'Fold Mountains',
          highestPeak: 'Mount Isto (2,736m / 8,976 ft)',
          length: '1,100 km (700 miles)',
          countries: ['USA (Alaska)'],
          age: '120 million years',
          link: '/encyclopedia/mountains/brooks-range',
          image: 'https://source.unsplash.com/800x600/?brooks+range+alaska',
          icon: '🏔️',
          funFact: 'Northernmost mountain range in USA, entirely above Arctic Circle',
          keyStats: {
            latitude: 'Above 68°N',
            permafrost: 'Continuous permafrost',
            oil: 'North Slope oil fields',
            wildlife: 'Caribou, grizzly, wolf'
          }
        },
        {
          name: 'Kunlun Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Liushi Shan (7,167m / 23,514 ft)',
          length: '3,000 km (1,860 miles)',
          countries: ['China'],
          age: '65-40 million years',
          link: '/encyclopedia/mountains/kunlun',
          image: 'https://source.unsplash.com/800x600/?kunlun+mountains',
          icon: '🗻',
          funFact: 'Northern edge of Tibetan Plateau - "Backbone of Asia"',
          keyStats: {
            peaks7000m: '3 peaks',
            width: '125-200 km',
            glaciers: 'Largest outside polar regions',
            mythology: 'Sacred in Chinese mythology'
          }
        },
        {
          name: 'Saint Elias Mountains',
          continent: 'North America',
          type: 'Fold Mountains',
          highestPeak: 'Mount Logan (5,959m / 19,551 ft) - Canada\'s highest',
          length: '480 km (300 miles)',
          countries: ['USA (Alaska)', 'Canada (Yukon)'],
          age: '50 million years',
          link: '/encyclopedia/mountains/saint-elias',
          image: 'https://source.unsplash.com/800x600/?saint+elias+mountains',
          icon: '🏔️',
          funFact: 'Highest coastal mountain range on Earth',
          keyStats: {
            glaciers: 'Largest glaciers outside poles',
            relief: '6,000m base-to-peak in 10km',
            icefields: 'Vast icefields feed glaciers',
            UNESCO: 'Kluane/Wrangell World Heritage'
          }
        },
        {
          name: 'Pamir Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Ismoil Somoni Peak (7,495m / 24,590 ft)',
          area: '120,000 km²',
          countries: ['Tajikistan', 'Afghanistan', 'Kyrgyzstan', 'China'],
          age: '50 million years',
          link: '/encyclopedia/mountains/pamir',
          image: 'https://source.unsplash.com/800x600/?pamir+mountains',
          icon: '⛰️',
          funFact: '"Roof of the World" - where 5 major ranges meet',
          keyStats: {
            peaks7000m: '8 peaks',
            knot: 'Pamir Knot (convergence point)',
            plateau: 'High plateau 3,000-4,000m',
            remoteness: 'Extremely isolated, harsh climate'
          }
        },
        {
          name: 'Rwenzori Mountains',
          continent: 'Africa',
          type: 'Block Mountains',
          highestPeak: 'Margherita Peak (5,109m / 16,763 ft)',
          length: '120 km (75 miles)',
          countries: ['Uganda', 'DR Congo'],
          age: '3 million years',
          link: '/encyclopedia/mountains/rwenzori',
          image: 'https://source.unsplash.com/800x600/?rwenzori+mountains',
          icon: '🏔️',
          funFact: '"Mountains of the Moon" - equatorial glaciers',
          keyStats: {
            glaciers: 'Rapidly retreating glaciers',
            rainfall: '2,500mm/year',
            endemism: 'High plant endemism',
            UNESCO: 'World Heritage Site'
          }
        },
        {
          name: 'Elburz Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Mount Damavand (5,610m / 18,406 ft)',
          length: '900 km (560 miles)',
          countries: ['Iran'],
          age: '50 million years',
          link: '/encyclopedia/mountains/elburz',
          image: 'https://source.unsplash.com/800x600/?elburz+mountains',
          icon: '🗻',
          funFact: 'Damavand is highest volcano in Asia',
          keyStats: {
            volcano: 'Damavand: dormant stratovolcano',
            rainfall: 'Orographic 2,000mm/year',
            forests: 'Caspian Hyrcanian forests',
            Tehran: 'Tehran sits at southern base'
          }
        },
        {
          name: 'Dinaric Alps',
          continent: 'Europe',
          type: 'Fold Mountains',
          highestPeak: 'Maja Jezercë (2,694m / 8,839 ft)',
          length: '645 km (400 miles)',
          countries: ['Slovenia', 'Croatia', 'Bosnia', 'Serbia', 'Montenegro', 'Albania'],
          age: '65 million years',
          link: '/encyclopedia/mountains/dinaric-alps',
          image: 'https://source.unsplash.com/800x600/?dinaric+alps',
          icon: '⛰️',
          funFact: 'Classic karst topography - limestone caves and sinkholes',
          keyStats: {
            karst: 'Extensive cave systems',
            coastline: 'Parallels Adriatic coast',
            biodiversity: 'Balkan lynx, brown bear',
            caves: '10,000+ documented caves'
          }
        },
        {
          name: 'Japanese Alps',
          continent: 'Asia',
          type: 'Fold/Volcanic Mountains',
          highestPeak: 'Kita-dake (3,193m / 10,476 ft)',
          length: '300 km (190 miles)',
          countries: ['Japan'],
          age: '20 million years',
          link: '/encyclopedia/mountains/japanese-alps',
          image: 'https://source.unsplash.com/800x600/?japanese+alps',
          icon: '🏔️',
          funFact: 'Three ranges: Hida, Kiso, Akaishi (Northern, Central, Southern Alps)',
          keyStats: {
            peaks3000m: '21 peaks',
            volcanoes: 'Many volcanic peaks',
            snowfall: '10-15m annual snowfall',
            parks: '5 national parks'
          }
        },
        {
          name: 'Blue Ridge Mountains',
          continent: 'North America',
          type: 'Fold Mountains (ancient)',
          highestPeak: 'Mount Mitchell (2,037m / 6,684 ft)',
          length: '885 km (550 miles)',
          countries: ['USA'],
          age: '480 million years',
          link: '/encyclopedia/mountains/blue-ridge',
          image: 'https://source.unsplash.com/800x600/?blue+ridge+mountains',
          icon: '🌲',
          funFact: 'Named for blue haze from tree-released isoprene',
          keyStats: {
            parkway: 'Blue Ridge Parkway (755 km scenic road)',
            biodiversity: 'Salamander capital of world',
            forests: 'Temperate deciduous forests',
            parks: 'Shenandoah, Great Smoky Mountains'
          }
        },
        {
          name: 'Scandinavian Mountains',
          continent: 'Europe',
          type: 'Block/Fold Mountains',
          highestPeak: 'Galdhøpiggen (2,469m / 8,100 ft)',
          length: '1,700 km (1,060 miles)',
          countries: ['Norway', 'Sweden', 'Finland'],
          age: '400 million years (reactivated)',
          link: '/encyclopedia/mountains/scandinavian',
          image: 'https://source.unsplash.com/800x600/?norwegian+mountains',
          icon: '⛰️',
          funFact: 'Spine of Scandinavian Peninsula, heavily glaciated',
          keyStats: {
            glaciers: '2,500+ glaciers',
            fjords: 'Glacial erosion created fjords',
            plateaus: 'High plateaus (vidda)',
            rebounds: 'Isostatic rebound 1cm/year'
          }
        },
        {
          name: 'Alaska Range',
          continent: 'North America',
          type: 'Fold/Volcanic Mountains',
          highestPeak: 'Denali (6,190m / 20,310 ft) - North America\'s highest',
          length: '650 km (400 miles)',
          countries: ['USA (Alaska)'],
          age: '60 million years',
          link: '/encyclopedia/mountains/alaska-range',
          image: 'https://source.unsplash.com/800x600/?denali,alaska',
          icon: '🏔️',
          funFact: 'Denali has greatest base-to-peak rise on Earth (5,500m)',
          keyStats: {
            relief: '5,500m base-to-peak',
            glaciers: 'Largest glaciers in Alaska',
            volcanoes: '5+ active volcanoes',
            park: 'Denali National Park'
          }
        },
        {
          name: 'Taurus Mountains',
          continent: 'Asia',
          type: 'Fold Mountains',
          highestPeak: 'Demirkazık (3,756m / 12,323 ft)',
          length: '560 km (350 miles)',
          countries: ['Turkey'],
          age: '65 million years',
          link: '/encyclopedia/mountains/taurus',
          image: 'https://source.unsplash.com/800x600/?taurus+mountains+turkey',
          icon: '🗻',
          funFact: 'Southern edge of Anatolian Plateau',
          keyStats: {
            peaks3000m: '15+ peaks',
            karst: 'Extensive limestone karst',
            gorges: 'Deep river gorges',
            biodiversity: 'Cedar forests, Anatolian leopard'
          }
        },
        {
          name: 'Western Ghats',
          continent: 'Asia',
          type: 'Plateau Mountains (basalt escarpment)',
          highestPeak: 'Anamudi (2,695m / 8,842 ft)',
          length: '1,600 km (990 miles)',
          countries: ['India'],
          age: '66 million years (basalt)',
          link: '/encyclopedia/mountains/western-ghats',
          image: 'https://source.unsplash.com/800x600/?western+ghats',
          icon: '🌿',
          funFact: 'UNESCO biodiversity hotspot - 77% endemic species',
          keyStats: {
            biodiversity: '7,402 flowering plants (1/3 endemic)',
            rainfall: '6,000-7,000mm/year',
            rivers: 'Source of 7 major rivers',
            UNESCO: 'World Heritage Site (39 properties)'
          }
        }
      ],
      
      upscRelevance: {
        title: '🎯 UPSC Civil Services Exam Importance',
        introduction: 'Mountains are critically important for UPSC CSE across Prelims (Geography, Environment) and Mains (GS-I Geography, GS-III Environment). Understanding mountain systems, formation processes, and their impacts is essential.',
        
        topics: [
          '**Map-based questions:** Identifying mountain ranges, peaks, passes, and their locations (Prelims & Mains)',
          '**Mountain types:** Differentiating fold, block, volcanic, dome, and plateau mountains with Indian and global examples',
          '**Himalayan geology:** Formation, structure, divisions (Trans-Himalayas, Greater, Lesser, Outer), and ongoing tectonic activity',
          '**Strategic importance:** International boundaries, border disputes (India-China, India-Pakistan), defense implications',
          '**Climate and monsoons:** Impact on Indian monsoon (orographic rainfall, rain shadow), climate zones',
          '**Water resources:** Himalayan rivers (Indus, Ganga, Brahmaputra), glacial melt, water security for 3 billion people',
          '**Biodiversity hotspots:** Western Ghats, Eastern Himalayas, endemic species, conservation challenges',
          '**Natural disasters:** Earthquakes, landslides, avalanches, glacial lake outburst floods (GLOFs), cloud bursts',
          '**Climate change impacts:** Glacial retreat (33% loss since 1850s), changing precipitation, ecosystem shifts',
          '**Geopolitical significance:** Strategic passes (Nathu La, Jelep La, Lipulekh), trans-border rivers, territorial disputes',
          '**Economic importance:** Tourism, hydropower potential, mineral resources, agriculture in valleys',
          '**Environmental issues:** Deforestation, habitat loss, fragile ecosystems, carrying capacity of hill stations',
          '**Recent developments:** Char Dham project, China\'s infrastructure in Tibet, glacial studies, early warning systems'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2023 (Expected)',
            marks: 15,
            question: 'Explain how the Himalayas influence the Indian monsoon system. Discuss the consequences of climate change on Himalayan glaciers and their implications for water security in South Asia.',
            approach: 'Explain orographic effect, monsoon mechanism, rain shadow. Discuss glacial retreat data, GLOF risks, river flow impacts, water stress in Indo-Gangetic plain. Mention mitigation strategies.'
          },
          {
            type: 'Mains',
            year: '2019',
            marks: 15,
            question: 'Differentiate between fold mountains and block mountains with suitable examples from India and the world. How do their formation processes differ?',
            approach: 'Define both types. Explain formation: fold (compression at convergent boundaries) vs. block (faulting from tensional forces). Examples: Himalayas vs. Vindhyas/Satpuras. Use diagrams.'
          },
          {
            type: 'Mains',
            year: '2021',
            marks: 10,
            question: 'Why are marine fossils found at high altitudes in the Himalayas? What does this indicate about the geological history of the region?',
            approach: 'Explain Tethys Ocean existence, sediment deposition with marine life. Describe India-Eurasia collision, uplift of ocean floor. Mention fossils as evidence, dating techniques, plate tectonics validation.'
          },
          {
            type: 'Mains',
            year: '2020',
            marks: 15,
            question: 'Discuss the role of mountains in the global climate system. How do they act as "water towers" for surrounding regions?',
            approach: 'Explain orographic rainfall, rain shadow, temperature gradients. Discuss snowpack/glacier storage, seasonal melt, river systems. Cover 50% of humanity depending on mountain water. Climate regulation role.'
          },
          {
            type: 'Mains',
            year: '2022',
            marks: 15,
            question: 'Examine the impact of climate change on Himalayan glaciers and its implications for India\'s water security. Suggest measures to mitigate the risks.',
            approach: 'Present glacial retreat data (33% loss). Discuss impacts: reduced river flow, seasonal shifts, GLOF hazards. Implications for agriculture, hydropower. Mitigation: monitoring, early warning, water conservation, climate action.'
          },
          {
            type: 'Prelims',
            year: '2018',
            question: 'Which of the following ranges are examples of fold mountains?\n1. Himalayas\n2. Vindhyas\n3. Aravalli\n4. Satpura\n\n(a) 1 only (b) 1 and 2 (c) 1, 2, and 3 (d) All of the above',
            answer: '(a) 1 only - Himalayas are fold mountains. Vindhyas, Aravalli, Satpura are block/old fold mountains.'
          },
          {
            type: 'Prelims',
            year: '2017',
            question: 'Consider the following:\n1. Indus\n2. Brahmaputra\n3. Sutlej\n\nWhich of these rivers originate from Tibet?\n(a) 1 only (b) 1 and 2 (c) 2 and 3 (d) All of the above',
            answer: '(d) All of the above - All three trans-Himalayan rivers originate in Tibet (Kailash-Mansarovar region).'
          },
          {
            type: 'Mains',
            year: '2016',
            marks: 12,
            question: 'The Himalayas are highly prone to earthquakes. Explain the tectonic reasons and discuss the earthquake preparedness measures needed.',
            approach: 'Explain ongoing India-Eurasia collision, active faults (MCT, MBT, MFT), stress accumulation. Cite historical earthquakes (1897, 1905, 1934, 1950, 2015). Discuss building codes, early warning, disaster preparedness.'
          }
        ],
        
        keyConceptsForExam: [
          {
            concept: 'Himalayan Divisions',
            importance: 'Very High',
            details: 'Trans-Himalayas (Karakoram, Ladakh), Greater Himalayas (Himadri, 6,000m+), Lesser Himalayas (3,000-5,000m), Outer Himalayas (Siwaliks, <1,500m)',
            examRelevance: 'Frequently asked in Prelims and Mains map questions'
          },
          {
            concept: 'Himalayan Rivers',
            importance: 'Very High',
            details: 'Antecedent rivers (Indus, Sutlej, Brahmaputra) - older than mountains. Consequent rivers (Ganga tributaries). Trans-Himalayan vs. Himalayan origin',
            examRelevance: 'Water sharing, international rivers, strategic importance'
          },
          {
            concept: 'Western Ghats',
            importance: 'High',
            details: 'Escarpment, not true mountains. Sahyadri. UNESCO World Heritage. Biodiversity hotspot. Orographic rainfall. Source of peninsular rivers',
            examRelevance: 'Environment questions, biodiversity, conservation'
          },
          {
            concept: 'Mountain Ecology',
            importance: 'High',
            details: 'Altitudinal zonation: tropical → temperate → alpine → tundra. Timber line, snow line. Endemic species. Fragile ecosystems',
            examRelevance: 'Environment, ecology, climate change impacts'
          },
          {
            concept: 'Disasters',
            importance: 'Very High',
            details: 'Earthquakes (active faults), landslides (Uttarakhand 2013), GLOFs, avalanches, cloud bursts, flash floods',
            examRelevance: 'Disaster management, current affairs, GS-III'
          }
        ],
        
        currentAffairsLinks: [
          'Uttarkashi tunnel rescue (2023) - Himalayan infrastructure challenges',
          'China\'s dam building on Brahmaputra - trans-boundary water issues',
          'Joshimath subsidence (2023) - carrying capacity, unplanned development',
          'GLOF early warning systems - NDMA initiatives',
          'Char Dham all-weather road - environmental vs. strategic concerns',
          'Snow leopard conservation - high-altitude biodiversity',
          'Glacial lake inventory - ISRO satellite monitoring',
          'Zanskar-Zojila tunnel - strategic connectivity'
        ]
      }
    }
  }
};

// Export for use in concept-app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mountainsData;
}
