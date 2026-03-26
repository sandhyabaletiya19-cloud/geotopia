/**
 * WATERFALLS DATA MODULE - COMPLETE ENCYCLOPEDIA VERSION
 * Comprehensive educational content about Waterfalls
 * Format: Universal concept data structure
 */

const waterfallsData = {
  meta: {
    name: 'Waterfalls',
    icon: '💧',
    theme: 'waterfalls-theme',
    existingPagesLink: '/encyclopedia/waterfalls/'
  },
  
  sections: {
    // =============================
    // SECTION 1: DEFINITION
    // =============================
    definition: {
      title: 'What is a Waterfall?',
      hero: {
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600&q=90',
        tagline: 'Nature\'s Spectacular Water Curtains'
      },
      content: {
        main: 'A waterfall is a spectacular natural feature where water flows over a vertical drop or a series of steep drops in the course of a stream or river. Waterfalls occur when a river or stream flows over a cliff, escarpment, or steep rocky outcrop, creating a dramatic cascade of falling water. They represent points in a river where the water flows from a higher elevation to a lower elevation in a relatively short distance.',
        keyPoints: [
          {
            icon: '💦',
            label: 'Natural Formation',
            text: 'Created by geological processes and erosion',
            detail: 'Waterfalls form through various geological mechanisms including differential erosion, tectonic uplift, glacial activity, and volcanic processes. They represent dynamic features in river systems that continue to evolve over time.'
          },
          {
            icon: '📏',
            label: 'Vertical Drop',
            text: 'Water descends from higher to lower elevation',
            detail: 'The defining characteristic of a waterfall is the vertical or near-vertical descent of water. This can range from a few meters to over 900 meters in the case of the world\'s tallest waterfalls.'
          },
          {
            icon: '🌊',
            label: 'Erosive Power',
            text: 'Powerful force shaping landscapes',
            detail: 'The falling water creates tremendous erosive force through hydraulic action, abrasion, and solution. This power continuously reshapes the waterfall and surrounding landscape, creating plunge pools and gorges downstream.'
          },
          {
            icon: '🌈',
            label: 'Visual Spectacle',
            text: 'Creates mist, spray, and sometimes rainbows',
            detail: 'The impact of falling water creates spray and mist, which can produce spectacular optical effects including rainbows when sunlight interacts with water droplets. This makes waterfalls major tourist attractions worldwide.'
          }
        ],
        scientificClassification: {
          title: 'Geographic Classification',
          items: [
            'Cataract: Large, powerful waterfall with massive water volume',
            'Cascade: Series of small waterfalls or steep rapids',
            'Plunge: Water descends vertically, losing contact with bedrock',
            'Horsetail: Water maintains contact with bedrock while descending',
            'Segmented: Water splits into multiple distinct streams',
            'Tiered: Multiple drops in succession forming steps',
            'Block: Water descends from a wide stream or river',
            'Punchbowl: Water descends in a constricted form then spreads out',
            'Fan: Water spreads horizontally as it descends',
            'Frozen: Waterfalls that freeze in winter conditions'
          ]
        }
      }
    },

    // =============================
    // SECTION 2: TYPES
    // =============================
    types: {
      title: 'Types of Waterfalls',
      hero: {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90',
        tagline: 'Diverse Classifications of Cascading Water'
      },
      content: {
        introduction: 'Waterfalls are classified based on their formation process, shape, water volume, and physical characteristics. Understanding these types helps in studying their geological significance and ecological importance.',
        
        categories: [
          {
            name: 'Plunge Waterfalls',
            icon: '⬇️',
            color: '#00bcd4',
            description: 'Water descends vertically, losing complete contact with the underlying bedrock surface.',
            characteristics: [
              'Free-falling water column',
              'Creates deep plunge pools at base',
              'Minimal contact with rock face',
              'Often the most dramatic visual type',
              'Strong erosive force at the base'
            ],
            formation: 'Forms when resistant rock overlies softer rock, and the softer rock erodes away faster, creating an overhang. Eventually, the overhang collapses, maintaining the vertical drop.',
            examples: [
              {
                name: 'Multnomah Falls',
                location: 'Oregon, USA',
                height: '189 meters',
                detail: 'Classic plunge waterfall with two tiers'
              },
              {
                name: 'Bridalveil Fall',
                location: 'Yosemite, USA',
                height: '188 meters',
                detail: 'Free-leaping plunge waterfall'
              }
            ]
          },
          {
            name: 'Horsetail Waterfalls',
            icon: '🌊',
            color: '#4dd0e1',
            description: 'Water maintains some contact with the bedrock while descending, but most of it falls freely.',
            characteristics: [
              'Partial contact with rock face',
              'Streamlined appearance',
              'Moderate erosion pattern',
              'Common in steep mountain regions',
              'Often seasonal flow variations'
            ],
            formation: 'Develops on steep but not vertical rock faces where water follows the contours while also falling through the air. The angle of the rock face determines the degree of contact.',
            examples: [
              {
                name: 'Yosemite Falls',
                location: 'California, USA',
                height: '739 meters',
                detail: 'One of North America\'s tallest waterfalls'
              },
              {
                name: 'Takakkaw Falls',
                location: 'British Columbia, Canada',
                height: '384 meters',
                detail: 'Second tallest waterfall in Canada'
              }
            ]
          },
          {
            name: 'Cascade Waterfalls',
            icon: '〰️',
            color: '#80deea',
            description: 'Water descends over a series of rock steps, creating multiple small falls rather than one large drop.',
            characteristics: [
              'Series of small drops',
              'Continuous water contact with rock',
              'White water appearance',
              'Extensive erosion along the channel',
              'Often found in rapids'
            ],
            formation: 'Forms on moderately sloping terrain where water encounters a series of resistant rock layers. Each layer creates a small drop, resulting in a staircase effect.',
            examples: [
              {
                name: 'Iguazu Falls',
                location: 'Argentina/Brazil border',
                detail: 'System of 275 cascading waterfalls'
              },
              {
                name: 'Rhine Falls',
                location: 'Switzerland',
                width: '150 meters',
                detail: 'Europe\'s largest cascade waterfall'
              }
            ]
          },
          {
            name: 'Tiered (Multi-step) Waterfalls',
            icon: '🪜',
            color: '#33c9dc',
            description: 'Distinct drops separated by pools or gentler slopes, forming a stepped pattern down the landscape.',
            characteristics: [
              'Multiple distinct levels',
              'Pools between drops',
              'Varied erosion at each tier',
              'Complex ecosystem development',
              'Visually dramatic appearance'
            ],
            formation: 'Results from alternating layers of hard and soft rock. Each hard layer creates a ledge while softer rock below erodes, creating pools between tiers.',
            examples: [
              {
                name: 'Gullfoss',
                location: 'Iceland',
                detail: 'Two-tiered waterfall in a canyon'
              },
              {
                name: 'Detian Falls',
                location: 'China/Vietnam border',
                detail: 'Three-tiered transnational waterfall'
              }
            ]
          },
          {
            name: 'Block Waterfalls',
            icon: '⬛',
            color: '#00acc1',
            description: 'Water descends from a relatively wide stream or river, creating a broad curtain of water.',
            characteristics: [
              'Wide water curtain',
              'Relatively uniform width',
              'Massive water volume',
              'Impressive visual scale',
              'Strong horizontal erosion'
            ],
            formation: 'Forms where a wide river encounters a resistant rock layer or fault line that extends across the entire width of the river channel.',
            examples: [
              {
                name: 'Niagara Falls',
                location: 'USA/Canada border',
                width: '1,203 meters (combined)',
                detail: 'Most powerful waterfall in North America'
              },
              {
                name: 'Victoria Falls',
                location: 'Zambia/Zimbabwe border',
                width: '1,708 meters',
                detail: 'Largest curtain of falling water in the world'
              }
            ]
          },
          {
            name: 'Fan Waterfalls',
            icon: '📐',
            color: '#008ba3',
            description: 'Water spreads out horizontally as it descends, creating a fan or triangular shape.',
            characteristics: [
              'Expanding width as water falls',
              'Triangular or fan-shaped flow',
              'Often found in narrow gorges',
              'Creates wide spray patterns',
              'Unique erosion patterns'
            ],
            formation: 'Occurs when water flows through a narrow opening then spreads out as it falls over a wider cliff face, often due to the shape of the rock structure.',
            examples: [
              {
                name: 'Virje Waterfall',
                location: 'Slovenia',
                detail: 'Classic fan-shaped waterfall'
              },
              {
                name: 'Nojoqui Falls',
                location: 'California, USA',
                height: '50 meters',
                detail: 'Beautiful fan waterfall in canyon'
              }
            ]
          },
          {
            name: 'Segmented Waterfalls',
            icon: '🔀',
            color: '#006978',
            description: 'Water flow breaks into multiple distinct streams before or during the descent.',
            characteristics: [
              'Multiple separate streams',
              'Independent flow paths',
              'Varied erosion patterns',
              'Seasonal variations in segments',
              'Complex acoustic effects'
            ],
            formation: 'Develops when resistant rock outcrops or uneven erosion divide the water flow into separate channels before the drop.',
            examples: [
              {
                name: 'Kaieteur Falls',
                location: 'Guyana',
                height: '226 meters',
                detail: 'Splits into multiple streams during descent'
              },
              {
                name: 'Ramona Falls',
                location: 'Oregon, USA',
                detail: 'Water divides into many small streams'
              }
            ]
          },
          {
            name: 'Punchbowl Waterfalls',
            icon: '🥣',
            color: '#004d5a',
            description: 'Water descends through a narrow constriction and then spreads out into a wide pool.',
            characteristics: [
              'Narrow upper channel',
              'Wide circular pool at base',
              'Bowl-shaped receiving basin',
              'Strong whirlpool action',
              'Deep plunge pool formation'
            ],
            formation: 'Forms when water is channeled through a narrow opening and falls into a basin that has been eroded into a bowl or amphitheater shape.',
            examples: [
              {
                name: 'Punch Bowl Falls',
                location: 'Oregon, USA',
                detail: 'Perfect example of punchbowl formation'
              },
              {
                name: 'Toketee Falls',
                location: 'Oregon, USA',
                height: '37 meters',
                detail: 'Two-tiered punchbowl waterfall'
              }
            ]
          },
          {
            name: 'Frozen Waterfalls',
            icon: '❄️',
            color: '#b2ebf2',
            description: 'Waterfalls that partially or completely freeze during winter, creating spectacular ice formations.',
            characteristics: [
              'Seasonal ice formation',
              'Icicle columns and curtains',
              'Blue ice coloration',
              'Popular for ice climbing',
              'Continual freeze-thaw cycles'
            ],
            formation: 'Occurs in cold climates where winter temperatures drop below freezing. Water flow may continue beneath ice, creating dynamic ice structures.',
            examples: [
              {
                name: 'Fang (Vail)',
                location: 'Colorado, USA',
                detail: 'Famous ice climbing destination'
              },
              {
                name: 'Helmcken Falls',
                location: 'British Columbia, Canada',
                height: '141 meters',
                detail: 'Creates massive ice cone in winter'
              }
            ]
          },
          {
            name: 'Underground Waterfalls',
            icon: '🕳️',
            color: '#80deea',
            description: 'Waterfalls that occur within cave systems, often invisible from the surface.',
            characteristics: [
              'Located in cave systems',
              'Limited light conditions',
              'Unique ecosystems',
              'Dissolved rock formations',
              'Often unexplored'
            ],
            formation: 'Develops when underground rivers encounter vertical shafts or chambers in limestone cave systems created by dissolution.',
            examples: [
              {
                name: 'Ruby Falls',
                location: 'Tennessee, USA',
                height: '44 meters',
                detail: 'Tallest underground waterfall in the USA'
              },
              {
                name: 'Gaping Gill',
                location: 'England, UK',
                height: '98 meters',
                detail: 'Britain\'s highest unbroken waterfall'
              }
            ]
          }
        ],
        
        comparisonTable: {
          title: 'Waterfall Type Comparison',
          headers: ['Type', 'Water Contact', 'Visual Impact', 'Erosion Pattern', 'Common Locations'],
          rows: [
            {
              type: 'Plunge',
              contact: 'None',
              visual: 'Very High',
              erosion: 'Vertical at base',
              locations: 'Mountain regions, cliffs'
            },
            {
              type: 'Horsetail',
              contact: 'Partial',
              visual: 'High',
              erosion: 'Mixed vertical/horizontal',
              locations: 'Steep mountain slopes'
            },
            {
              type: 'Cascade',
              contact: 'Continuous',
              visual: 'Moderate',
              erosion: 'Horizontal along channel',
              locations: 'Rapids, moderate slopes'
            },
            {
              type: 'Tiered',
              contact: 'Intermittent',
              visual: 'Very High',
              erosion: 'Multiple zones',
              locations: 'Layered rock regions'
            },
            {
              type: 'Block',
              contact: 'Full width',
              visual: 'Extremely High',
              erosion: 'Wide horizontal',
              locations: 'Wide rivers, fault lines'
            },
            {
              type: 'Fan',
              contact: 'Spreading',
              visual: 'High',
              erosion: 'Expanding pattern',
              locations: 'Narrow gorges'
            },
            {
              type: 'Segmented',
              contact: 'Multiple paths',
              visual: 'High',
              erosion: 'Multiple channels',
              locations: 'Rocky outcrops'
            },
            {
              type: 'Punchbowl',
              contact: 'Constricted',
              visual: 'Very High',
              erosion: 'Deep circular basin',
              locations: 'Narrow channels'
            }
          ]
        }
      }
    },

    // =============================
    // SECTION 3: FORMATION
    // =============================
    formation: {
      title: 'Formation and Characteristics of Waterfalls',
      hero: {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=90',
        tagline: 'Understanding the Geological Processes Behind Waterfalls'
      },
      content: {
        introduction: 'Waterfalls form through various geological processes that create vertical or steep drops in river courses. Their formation and evolution involve complex interactions between water erosion, rock resistance, and landscape dynamics.',
        
        formationProcesses: [
          {
            type: 'Differential Erosion',
            icon: '⛰️',
            process: 'The primary mechanism for waterfall formation worldwide',
            steps: [
              {
                stage: 'Initial Conditions',
                description: 'A river flows over layers of rock with different hardness levels',
                timeframe: 'Pre-formation',
                detail: 'Geological strata with alternating hard and soft rock layers create the foundation. Hard rocks include granite, basalt, and resistant sandstone, while soft rocks include shale, clay, and soft limestone.'
              },
              {
                stage: 'Selective Erosion',
                description: 'Softer rock erodes faster than harder rock above it',
                timeframe: 'Thousands of years',
                detail: 'Water flowing over the rock surface erodes the softer layer more rapidly through hydraulic action, abrasion, and chemical weathering. This creates an undercut beneath the harder rock layer.'
              },
              {
                stage: 'Overhang Development',
                description: 'Hard rock layer extends beyond the softer rock below',
                timeframe: 'Centuries to millennia',
                detail: 'As the soft rock continues to erode, the hard rock above forms an increasingly pronounced overhang. This creates the characteristic vertical profile of a waterfall.'
              },
              {
                stage: 'Collapse and Retreat',
                description: 'Overhang becomes unstable and collapses periodically',
                timeframe: 'Episodic events',
                detail: 'When the overhang becomes too heavy or unstable, blocks of hard rock collapse into the plunge pool below. This process causes the waterfall to retreat upstream over geological time.'
              },
              {
                stage: 'Gorge Formation',
                description: 'Continuous retreat creates a gorge downstream',
                timeframe: 'Millions of years',
                detail: 'The systematic retreat of the waterfall leaves behind a steep-walled gorge or canyon that marks its former positions. This process continues until the waterfall reaches harder rock or gentler slopes.'
              }
            ],
            realWorldExample: 'Niagara Falls has retreated approximately 11 kilometers upstream over the past 12,000 years through this process, creating the Niagara Gorge.'
          },
          {
            type: 'Tectonic Activity',
            icon: '🌋',
            process: 'Waterfalls created by earth movements and volcanic activity',
            mechanisms: [
              {
                name: 'Fault Scarps',
                description: 'Vertical displacement along fault lines creates instant waterfalls',
                detail: 'When tectonic plates move along fault lines, one side may rise or drop relative to the other. If a river crosses such a fault, an instant waterfall is created. These are called fault-line waterfalls.'
              },
              {
                name: 'Volcanic Dikes',
                description: 'Resistant volcanic rock creates barriers in river courses',
                detail: 'Molten rock that solidifies in vertical cracks (dikes) is often more resistant than surrounding rock. When exposed by erosion, these create natural dams over which rivers must flow.'
              },
              {
                name: 'Lava Flows',
                description: 'Hardened lava creates new elevation changes',
                detail: 'When lava flows cross river valleys and solidify, they create new barriers. Rivers must then flow over these resistant basalt layers, forming waterfalls.'
              }
            ],
            examples: 'Shoshone Falls on the Snake River, Idaho, formed from ancient lava flows. The Palouse Falls in Washington formed where a river crosses basalt from ancient volcanic eruptions.'
          },
          {
            type: 'Glacial Activity',
            icon: '🧊',
            process: 'Glaciers carve landscapes creating hanging valleys and waterfalls',
            mechanisms: [
              {
                name: 'Hanging Valleys',
                description: 'Tributary valleys left high above main glacial valley',
                detail: 'Large glaciers in main valleys carve deeper than smaller glaciers in tributary valleys. When glaciers melt, tributary streams must plunge down to reach the main valley floor, creating spectacular waterfalls.'
              },
              {
                name: 'Glacial Steps',
                description: 'Staircase-like features carved by glacial erosion',
                detail: 'Glaciers pluck and abrade bedrock unevenly, creating step-like features. When rivers follow these glaciated valleys, they cascade down these steps.'
              },
              {
                name: 'Terminal Moraines',
                description: 'Glacial deposits creating natural dams',
                detail: 'Debris deposited at glacier fronts can create barriers across valleys. Water must flow over these moraines, sometimes creating waterfalls.'
              }
            ],
            examples: 'Yosemite Valley in California has numerous waterfalls formed from hanging valleys, including Bridalveil Fall and Ribbon Fall. These were created when the main valley glacier cut deeper than side valley glaciers.'
          },
          {
            type: 'Coastal Processes',
            icon: '🌊',
            process: 'Waterfalls formed where rivers meet ocean cliffs',
            mechanisms: [
              {
                name: 'Sea Cliff Erosion',
                description: 'Wave action undercuts coastal cliffs creating vertical drops',
                detail: 'Waves erode coastal rock at sea level faster than rivers can erode from above. This creates overhangs where rivers plunge directly into the sea.'
              },
              {
                name: 'Raised Beaches',
                description: 'Tectonic uplift raises former coastlines',
                detail: 'When coastal areas rise due to tectonic activity, former sea-level features are elevated. Rivers must now drop to reach the new sea level.'
              }
            ],
            examples: 'McWay Falls in California drops directly onto a beach. Many Norwegian waterfalls plunge from hanging valleys into fjords carved by ancient glaciers.'
          },
          {
            type: 'Limestone Dissolution',
            icon: '🪨',
            process: 'Chemical weathering creates waterfalls in karst landscapes',
            mechanisms: [
              {
                name: 'Sinkhole Formation',
                description: 'Underground dissolution creates surface collapses',
                detail: 'Acidic water dissolves limestone underground, creating caves. When cave roofs collapse, surface streams suddenly drop into the void, creating waterfalls.'
              },
              {
                name: 'Travertine Formation',
                description: 'Calcium carbonate deposits build natural dams',
                detail: 'Calcium-rich water deposits travertine (limestone) which builds up over time. This creates natural dams that grow upward, forming and heightening waterfalls.'
              }
            ],
            examples: 'Plitvice Lakes in Croatia feature travertine barrier waterfalls. Havasu Falls in Arizona flows over travertine deposits that continue to grow.'
          }
        ],
        
        characteristics: {
          title: 'Physical and Environmental Characteristics',
          categories: [
            {
              name: 'Hydraulic Features',
              icon: '💧',
              features: [
                {
                  feature: 'Plunge Pool',
                  description: 'Deep pool carved at the base by falling water',
                  significance: 'The impact of falling water creates intense turbulence and erosion at the base, excavating a deep pool. The depth depends on water volume, fall height, and rock hardness.'
                },
                {
                  feature: 'Hydraulic Jump',
                  description: 'Turbulent transition from supercritical to subcritical flow',
                  significance: 'As water hits the plunge pool, it changes from high-velocity to lower-velocity flow, creating turbulent mixing and air entrainment.'
                },
                {
                  feature: 'Spray Zone',
                  description: 'Area affected by mist and spray from falling water',
                  significance: 'Creates unique microclimates and ecosystems. Can extend hundreds of meters from large waterfalls.'
                },
                {
                  feature: 'Undercutting',
                  description: 'Erosion behind the falling water curtain',
                  significance: 'Creates cavern-like spaces behind waterfalls and contributes to overhang collapse and upstream migration.'
                }
              ]
            },
            {
              name: 'Ecological Zones',
              icon: '🌿',
              features: [
                {
                  feature: 'Spray Zone Vegetation',
                  description: 'Specialized plants adapted to constant moisture',
                  significance: 'Mosses, liverworts, ferns, and specialized flowering plants thrive in the perpetual mist, creating lush gardens even in otherwise dry climates.'
                },
                {
                  feature: 'Plunge Pool Ecosystem',
                  description: 'Unique aquatic communities in highly oxygenated water',
                  significance: 'High oxygen levels and constant water movement support specialized fish, invertebrates, and microorganisms not found in calmer waters.'
                },
                {
                  feature: 'Migration Barrier',
                  description: 'Physical obstacle to upstream fish movement',
                  significance: 'Creates distinct upstream and downstream populations, driving evolution and biodiversity. Some fish species have evolved to navigate specific waterfalls.'
                }
              ]
            },
            {
              name: 'Acoustic Properties',
              icon: '🔊',
              features: [
                {
                  feature: 'White Noise Production',
                  description: 'Continuous broad-spectrum sound',
                  significance: 'The sound of falling water masks other noises and has psychological effects on humans, often described as calming or meditative.'
                },
                {
                  feature: 'Infrasound Generation',
                  description: 'Low-frequency vibrations below human hearing',
                  significance: 'Large waterfalls produce vibrations that can be felt rather than heard, creating a visceral experience of the waterfall\'s power.'
                }
              ]
            },
            {
              name: 'Atmospheric Effects',
              icon: '🌈',
              features: [
                {
                  feature: 'Rainbow Formation',
                  description: 'Light refraction through water droplets',
                  significance: 'When sunlight strikes water spray at the correct angle, it creates rainbows. Some waterfalls produce moonbows (lunar rainbows) on bright nights.'
                },
                {
                  feature: 'Negative Ion Production',
                  description: 'Electrical charges in water droplets',
                  significance: 'Falling water creates negative ions in the air, which many believe has health benefits and contributes to the refreshing feeling near waterfalls.'
                },
                {
                  feature: 'Local Climate Modification',
                  description: 'Cooling and humidifying effect on surroundings',
                  significance: 'Large waterfalls can lower local temperatures and increase humidity, creating microclimates that support unique ecosystems.'
                }
              ]
            }
          ]
        },
        
        evolutionStages: {
          title: 'Lifecycle of a Waterfall',
          stages: [
            {
              stage: 'Youth',
              timeframe: 'Initial formation to thousands of years',
              characteristics: [
                'Sharp, well-defined vertical drop',
                'Relatively small plunge pool',
                'Active undercutting of resistant layer',
                'Rapid erosion rates',
                'Frequent rock falls and collapses'
              ],
              visualization: 'Steep profile with prominent overhang and narrow gorge'
            },
            {
              stage: 'Maturity',
              timeframe: 'Thousands to millions of years',
              characteristics: [
                'Established plunge pool',
                'Significant upstream retreat',
                'Developed gorge downstream',
                'Balanced erosion rates',
                'Stable ecological communities'
              ],
              visualization: 'Moderate profile with established gorge and balanced erosion'
            },
            {
              stage: 'Old Age',
              timeframe: 'Millions of years',
              characteristics: [
                'Reduced vertical drop',
                'Series of rapids rather than single drop',
                'Erosion of resistant caprock',
                'Slower erosion rates',
                'Integration into gentler river gradient'
              ],
              visualization: 'Gentle profile with series of cascades or rapids'
            },
            {
              stage: 'Extinction',
              timeframe: 'Complete geological cycle',
              characteristics: [
                'Complete erosion of resistant layer',
                'Return to smooth river profile',
                'Only gorge remains as evidence',
                'Minimal elevation change',
                'Normal river flow characteristics'
              ],
              visualization: 'Nearly flat profile with only subtle grade changes'
            }
          ]
        }
      }
    },

    // =============================
    // SECTION 4: EXAMPLES
    // =============================
    examples: {
      title: 'Famous Waterfalls Around the World',
      hero: {
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600&q=90',
        tagline: 'Explore Earth\'s Most Spectacular Waterfalls'
      },
      renderAs: 'grid',
      introduction: 'From the thundering cascades of Victoria Falls to the ethereal beauty of Angel Falls, waterfalls represent some of nature\'s most awe-inspiring spectacles. These remarkable features draw millions of visitors annually and play crucial roles in their local ecosystems. Here we explore some of the world\'s most notable waterfalls, categorized by their distinctive characteristics and global significance.',
      linkToExisting: '../../waterfalls/waterfalls.html',
      
      categories: [
        {
          categoryName: 'Tallest Waterfalls',
          description: 'Record-breaking waterfalls ranked by total vertical drop',
          waterfalls: [
            {
              name: 'Angel Falls (Salto Ángel)',
              location: 'Canaima National Park, Venezuela',
              continent: 'South America',
              height: '979 meters (3,212 feet)',
              type: 'Plunge',
              longestDrop: '807 meters (2,648 feet)',
              funFact: 'World\'s tallest uninterrupted waterfall',
              description: 'Angel Falls plunges from the summit of Auyán-tepui mountain in the Gran Sabana region. Named after aviator Jimmie Angel who was the first to fly over it in 1933, the waterfall is so high that much of the water evaporates into mist before reaching the ground during the dry season.',
              characteristics: [
                'Water falls from flat-topped tepui mountain',
                'Accessible only by air or river journey',
                'Surrounded by pristine rainforest',
                'UNESCO World Heritage Site',
                'Flow varies dramatically with seasons'
              ],
              bestTimeToVisit: 'May to November (rainy season for maximum flow)',
              image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80'
            },
            {
              name: 'Tugela Falls',
              location: 'KwaZulu-Natal, South Africa',
              continent: 'Africa',
              height: '948 meters (3,110 feet)',
              type: 'Tiered',
              tiers: '5 distinct drops',
              funFact: 'Second tallest waterfall in the world',
              description: 'Located in the Drakensberg (Dragon\'s Mountains), Tugela Falls is a complex series of five free-leaping falls. The falls are seasonally fed by the Tugela River, which rises on the plateau and plunges down the dramatic amphitheater cliff face.',
              characteristics: [
                'Part of Royal Natal National Park',
                'Requires hiking to best viewing points',
                'Spectacular amphitheater setting',
                'Freezes in winter creating ice columns',
                'Source at Mont-aux-Sources plateau'
              ],
              bestTimeToVisit: 'November to March (summer rains)',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            },
            {
              name: 'Tres Hermanas Falls',
              location: 'Ayacucho, Peru',
              continent: 'South America',
              height: '914 meters (2,999 feet)',
              type: 'Tiered',
              tiers: '3 distinct drops',
              funFact: 'Name means "Three Sisters"',
              description: 'One of the world\'s tallest waterfalls, Tres Hermanas is located in a remote area of the Peruvian Andes. The waterfall consists of three distinct tiers, hence its name, and is surrounded by cloud forest.',
              characteristics: [
                'Extremely remote location',
                'Rarely visited by tourists',
                'Fed by glacial meltwater',
                'Surrounded by cloud forest',
                'Discovered relatively recently'
              ],
              bestTimeToVisit: 'May to September (dry season for access)',
              image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80'
            }
          ]
        },
        {
          categoryName: 'Most Powerful Waterfalls',
          description: 'Waterfalls ranked by water volume and flow rate',
          waterfalls: [
            {
              name: 'Inga Falls',
              location: 'Kongo Central, Democratic Republic of Congo',
              continent: 'Africa',
              averageFlow: '25,000 cubic meters per second',
              drop: '96 meters over several rapids',
              type: 'Cascade',
              funFact: 'World\'s most powerful waterfall by volume',
              description: 'Inga Falls is a series of rapids and cataracts where the mighty Congo River drops through a narrow gorge. The immense volume of water flowing through creates the world\'s largest hydroelectric potential.',
              characteristics: [
                'Part of Livingstone Falls system',
                'Enormous hydroelectric potential',
                'Series of rapids and cataracts',
                'Navigation obstacle on Congo River',
                'Massive water volume year-round'
              ],
              significance: 'Site of hydroelectric projects with potential to power much of Africa',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
            },
            {
              name: 'Niagara Falls',
              location: 'Ontario, Canada / New York, USA',
              continent: 'North America',
              averageFlow: '2,400 cubic meters per second',
              height: 'Horseshoe Falls: 51 meters; American Falls: 51 meters',
              type: 'Block',
              funFact: 'Most powerful waterfall in North America',
              description: 'Actually three separate waterfalls (Horseshoe Falls, American Falls, and Bridal Veil Falls), Niagara is one of the world\'s most famous waterfalls. The massive volume of water flowing over the Niagara Escarpment creates spectacular scenery and tremendous hydroelectric power.',
              characteristics: [
                'Retreating upstream at about 1 foot per year',
                'Created by glacial activity 10,000 years ago',
                'Major source of hydroelectric power',
                'Illuminated at night with colored lights',
                'Freezes partially in severe winters'
              ],
              tourism: 'Over 30 million visitors annually, making it one of the most visited waterfalls',
              image: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80'
            },
            {
              name: 'Paulo Afonso Falls',
              location: 'Bahia, Brazil',
              continent: 'South America',
              averageFlow: '2,800 cubic meters per second',
              height: '80 meters total drop',
              type: 'Cascade',
              funFact: 'Brazil\'s most powerful waterfall',
              description: 'Located on the São Francisco River, Paulo Afonso Falls was once a spectacular natural waterfall. Now largely harnessed for hydroelectric power, the original falls can still be impressive during flood season.',
              characteristics: [
                'Series of cataracts and rapids',
                'Major hydroelectric power source',
                'Reduced natural flow due to damming',
                'Historical significance in Brazilian exploration',
                'Important for regional power supply'
              ],
              hydroelectricCapacity: 'Powers approximately 4 million homes',
              image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80'
            }
          ]
        },
        {
          categoryName: 'Widest Waterfalls',
          description: 'Waterfalls with the most extensive horizontal span',
          waterfalls: [
            {
              name: 'Victoria Falls (Mosi-oa-Tunya)',
              location: 'Zambia / Zimbabwe border',
              continent: 'Africa',
              width: '1,708 meters (5,604 feet)',
              height: '108 meters (354 feet)',
              type: 'Block',
              funFact: 'Largest curtain of falling water in the world',
              description: 'Known locally as "Mosi-oa-Tunya" (The Smoke that Thunders), Victoria Falls is one of the world\'s most spectacular waterfalls. The Zambezi River plunges into a narrow gorge, creating a massive spray that can be seen from kilometers away.',
              characteristics: [
                'Creates spray visible 50 km away',
                'Rainforest ecosystem in spray zone',
                'Deep basalt gorge below falls',
                'Moonbows visible during full moon',
                'UNESCO World Heritage Site'
              ],
              peakFlow: 'Up to 500 million liters per minute during flood season',
              activities: 'Swimming in Devil\'s Pool (dry season only), white water rafting, bungee jumping',
              image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&q=80'
            },
            {
              name: 'Khone Phapheng Falls',
              location: 'Champasak Province, Laos',
              continent: 'Asia',
              width: '10,782 meters (35,376 feet)',
              averageFlow: '11,610 cubic meters per second',
              drop: '21 meters (69 feet)',
              type: 'Cascade',
              funFact: 'Widest waterfall in the world',
              description: 'Located on the Mekong River, Khone Phapheng Falls is a series of rapids and cascades that spread across an enormous width. While not particularly high, the combination of width and volume makes it one of the most impressive waterfalls in Southeast Asia.',
              characteristics: [
                'Part of Si Phan Don (4000 Islands)',
                'Navigation barrier on Mekong River',
                'Series of cascades across river width',
                'Critical fish migration point',
                'Supports rare Irrawaddy dolphins'
              ],
              significance: 'Marks the limit of navigation on the lower Mekong River',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            },
            {
              name: 'Iguazu Falls (Iguaçu Falls)',
              location: 'Argentina / Brazil border',
              continent: 'South America',
              width: '2,700 meters (8,858 feet)',
              height: 'Up to 82 meters (269 feet)',
              numberOfCataracts: '275 individual waterfalls',
              type: 'Multi-tiered cascade system',
              funFact: 'Eleanor Roosevelt reportedly said "Poor Niagara" upon seeing Iguazu',
              description: 'Iguazu Falls is a massive system of 275 waterfalls that straddle the border between Argentina and Brazil. The name comes from the Guarani words for "big water," and the falls are set in lush subtropical rainforest.',
              characteristics: [
                'Devil\'s Throat: U-shaped chasm 82m high',
                'Surrounded by national parks',
                'UNESCO World Heritage Site',
                'Subtropical rainforest ecosystem',
                'Home to hundreds of bird species'
              ],
              peakFlow: 'Flow can increase tenfold during rainy season',
              bestViews: 'Both countries offer different perspectives - Brazil for panoramic views, Argentina for close encounters',
              image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80'
            }
          ]
        },
        {
          categoryName: 'Iconic & Famous Waterfalls',
          description: 'Culturally significant and world-renowned waterfalls',
          waterfalls: [
            {
              name: 'Yosemite Falls',
              location: 'Yosemite National Park, California, USA',
              continent: 'North America',
              totalHeight: '739 meters (2,425 feet)',
              sections: 'Upper Fall (436m), Middle Cascades (206m), Lower Fall (97m)',
              type: 'Tiered',
              funFact: 'Tallest waterfall in North America',
              description: 'Yosemite Falls is the crown jewel of Yosemite National Park. This spectacular three-tiered waterfall is most impressive in late spring when snowmelt is at its peak. By late summer, it may dry to a trickle or disappear entirely.',
              characteristics: [
                'Fed entirely by snowmelt',
                'Seasonal flow (peak in May)',
                'Visible from Yosemite Valley floor',
                'Iconic symbol of national park',
                'Challenging hiking trail to summit'
              ],
              culturalSignificance: 'Featured in countless photographs, including famous Ansel Adams images',
              hikingTrail: '11.6 km round trip with 1,000m elevation gain',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            },
            {
              name: 'Gullfoss (Golden Falls)',
              location: 'Southwest Iceland',
              continent: 'Europe',
              height: '32 meters (105 feet) in two stages',
              river: 'Hvítá River',
              type: 'Tiered cascade',
              funFact: 'Part of Iceland\'s famous Golden Circle tourist route',
              description: 'Gullfoss is a dramatic two-tiered waterfall on the Hvítá river. Water from Langjökull glacier plunges into a narrow canyon, creating spectacular spray and often rainbows. In winter, parts of the waterfall freeze into stunning ice formations.',
              characteristics: [
                'Fed by glacial meltwater',
                'Turns 90 degrees between tiers',
                'Impressive volume year-round',
                'Partially freezes in winter',
                'Historic preservation battle site'
              ],
              historicalNote: 'Saved from hydroelectric development in early 20th century by landowner\'s daughter',
              volume: 'Can reach 2,000 cubic meters per second during glacial floods',
              image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80'
            },
            {
              name: 'Plitvice Falls',
              location: 'Plitvice Lakes National Park, Croatia',
              continent: 'Europe',
              largestFall: 'Veliki Slap (78 meters)',
              type: 'Travertine cascade system',
              funFact: 'Self-building waterfalls that grow over time',
              description: 'Plitvice is a unique system of 16 terraced lakes connected by waterfalls. The lakes are formed by travertine barriers that continue to grow as calcium carbonate deposits from the mineral-rich water. The color of the lakes ranges from azure to green to grey.',
              characteristics: [
                'Travertine barriers continuously growing',
                'Self-renewing waterfall system',
                'Vivid blue-green water colors',
                'UNESCO World Heritage Site',
                'Wooden walkways through falls'
              ],
              uniqueFeature: 'The waterfalls actually grow taller over time as travertine deposits build up',
              ecosystem: 'Home to brown bears, wolves, and rare bird species',
              image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80'
            },
            {
              name: 'Sutherland Falls',
              location: 'Fiordland, New Zealand',
              continent: 'Oceania',
              height: '580 meters (1,904 feet)',
              type: 'Tiered plunge (3 tiers)',
              funFact: 'Tallest waterfall in New Zealand',
              description: 'Located in Fiordland National Park, Sutherland Falls is fed by Lake Quill high in the mountains. The waterfall plunges down three tiers through temperate rainforest, and its remote location means it\'s only accessible via multi-day hiking trails.',
              characteristics: [
                'Fed by glacial lake',
                'Located on Milford Track',
                'Surrounded by temperate rainforest',
                'Part of UNESCO World Heritage area',
                'High annual rainfall (over 7 meters)'
              ],
              access: 'Only accessible via Milford Track (4-day hike) or scenic flight',
              discovery: 'Named after Donald Sutherland who discovered it in 1880',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            }
          ]
        },
        {
          categoryName: 'Unique & Unusual Waterfalls',
          description: 'Waterfalls with extraordinary characteristics',
          waterfalls: [
            {
              name: 'Underwater Waterfall (Mauritius)',
              location: 'Le Morne Peninsula, Mauritius',
              continent: 'Africa (Indian Ocean)',
              type: 'Optical illusion',
              funFact: 'Not actually a waterfall, but a stunning optical illusion',
              description: 'Viewed from above, the southwest coast of Mauritius appears to show an enormous underwater waterfall plunging into an oceanic abyss. In reality, this is an optical illusion created by sand and silt deposits being pulled by ocean currents through an opening in coral reefs.',
              characteristics: [
                'Visible only from aerial view',
                'Created by sediment movement',
                'Best viewed from helicopter',
                'Near Le Morne Brabant mountain',
                'UNESCO World Heritage Site nearby'
              ],
              scientificExplanation: 'Strong ocean currents wash sand and silt deposits off the coastal shelf into the deep ocean, creating the illusion of a waterfall beneath the waves',
              viewingRecommendation: 'Best seen via helicopter or drone photography',
              image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
            },
            {
              name: 'Blood Falls',
              location: 'McMurdo Dry Valleys, Antarctica',
              continent: 'Antarctica',
              type: 'Subglacial brine flow',
              color: 'Deep red',
              funFact: 'Iron-rich water creates blood-red waterfall in Antarctica',
              description: 'Blood Falls is a startling red waterfall flowing from Taylor Glacier into Lake Bonney. The water is saltwater from a subglacial lake trapped beneath the glacier for millions of years. When it reaches the surface, iron in the water oxidizes upon contact with air, creating the dramatic red color.',
              characteristics: [
                'Flows from beneath glacier',
                'Hypersaline ancient water',
                'Rich in iron and sulfur',
                'Contains ancient microorganisms',
                'One of coldest waterfalls on Earth'
              ],
              scientificSignificance: 'Provides insight into possible life on icy moons like Europa; microbes survive without sunlight or oxygen',
              discovery: 'First observed in 1911 by geologist Griffith Taylor',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
            },
            {
              name: 'Eternal Flame Falls',
              location: 'Chestnut Ridge Park, New York, USA',
              continent: 'North America',
              height: '9 meters (30 feet)',
              type: 'Cascade',
              uniqueFeature: 'Natural gas flame behind waterfall',
              funFact: 'Waterfall with a flame burning behind it',
              description: 'This small waterfall features a natural gas flame that burns behind the falling water. Natural gas seeps from the shale bedrock and can be ignited, creating an unusual combination of fire and water. The flame sometimes goes out and must be rerelit by visitors.',
              characteristics: [
                'Natural gas seep in cave behind falls',
                'Flame visible year-round (when lit)',
                'Small but unique waterfall',
                'Easy hiking access',
                'Shale bedrock geology'
              ],
              geology: 'Natural gas escapes through fractures in Marcellus and Rhinestreet shale formations',
              visitorExperience: 'Visitors can relight the flame if extinguished',
              image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80'
            },
            {
              name: 'Horizontal Falls (Talbot Bay)',
              location: 'Kimberley Region, Western Australia',
              continent: 'Oceania',
              type: 'Tidal waterfall',
              funFact: 'Waterfall that reverses direction with tides',
              description: 'Despite the name, these aren\'t traditional waterfalls but horizontal waterfalls created by tidal movements. Massive tidal changes (up to 10 meters) force water through narrow gorges, creating powerful horizontal cascades that reverse direction with the tide.',
              characteristics: [
                'Direction changes with tides',
                'Created by massive tidal range',
                'Horizontal rather than vertical',
                'Two separate gorge systems',
                'Powerful tidal currents'
              ],
              tidalRange: 'Up to 10 meters difference between high and low tide',
              davidAttenborough: 'Described by David Attenborough as "one of the greatest wonders of the natural world"',
              access: 'Only accessible by boat or seaplane',
              image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80'
            },
            {
              name: 'Baatara Gorge Waterfall',
              location: 'Tannourine, Lebanon',
              continent: 'Asia',
              height: '255 meters (837 feet)',
              type: 'Plunge into sinkhole',
              uniqueFeature: 'Falls through three natural bridges',
              funFact: 'Also called the "Cave of the Three Bridges"',
              description: 'This extraordinary waterfall plunges through three natural limestone bridges before reaching the bottom of the Baatara Pothole. The waterfall is fed by melting snow and is most impressive during the spring thaw (March-April).',
              characteristics: [
                'Seasonal waterfall (snowmelt fed)',
                'Falls through three natural bridges',
                'Jurassic limestone formation',
                'Deep sinkhole/pothole',
                'Discovered only in 1952'
              ],
              geology: 'Formed through limestone dissolution over millions of years',
              bestTime: 'March and April when snow melts from Mount Lebanon',
              image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80'
            }
          ]
        }
      ],
      
      worldRecords: {
        title: 'Waterfall World Records',
        records: [
          {
            category: 'Tallest Uninterrupted Drop',
            holder: 'Angel Falls, Venezuela',
            measurement: '807 meters (2,648 feet)',
            notes: 'Longest single plunge without interruption'
          },
          {
            category: 'Tallest Waterfall Overall',
            holder: 'Angel Falls, Venezuela',
            measurement: '979 meters (3,212 feet)',
            notes: 'Total height including all sections'
          },
          {
            category: 'Widest Waterfall',
            holder: 'Khone Phapheng Falls, Laos',
            measurement: '10,782 meters (6.7 miles)',
            notes: 'Measured during flood season'
          },
          {
            category: 'Largest Curtain of Water',
            holder: 'Victoria Falls, Zambia/Zimbabwe',
            measurement: '1,708 meters wide × 108 meters high',
            notes: 'Largest single curtain of falling water'
          },
          {
            category: 'Most Powerful Waterfall',
            holder: 'Inga Falls, DR Congo',
            measurement: '25,000 m³/s average flow',
            notes: 'Largest average water discharge'
          },
          {
            category: 'Tallest in North America',
            holder: 'Yosemite Falls, USA',
            measurement: '739 meters (2,425 feet)',
            notes: 'Combined height of all three sections'
          },
          {
            category: 'Tallest in Europe',
            holder: 'Vinnufossen, Norway',
            measurement: '860 meters (2,822 feet)',
            notes: 'Tallest waterfall in Europe and sixth tallest in the world'
          },
          {
            category: 'Tallest Underground Waterfall',
            holder: 'Gaping Gill, England',
            measurement: '98 meters (322 feet)',
            notes: 'Britain\'s highest unbroken waterfall, inside a cave'
          },
          {
            category: 'Highest Plunge Pool Depth',
            holder: 'Havasu Falls, USA',
            measurement: 'Over 30 meters deep',
            notes: 'Unusually deep turquoise plunge pool'
          },
          {
            category: 'Most Waterfalls in One System',
            holder: 'Iguazu Falls, Argentina/Brazil',
            measurement: '275 individual waterfalls',
            notes: 'Largest waterfall system by number of falls'
          }
        ]
      },
      
      importanceAndUses: {
        title: 'Importance and Uses of Waterfalls',
        categories: [
          {
            name: 'Ecological Importance',
            icon: '🌿',
            points: [
              {
                aspect: 'Oxygenation',
                description: 'Falling water entrains air and increases dissolved oxygen in rivers, crucial for aquatic life.',
                impact: 'Creates highly oxygenated zones that support diverse fish and invertebrate populations'
              },
              {
                aspect: 'Migration Barriers',
                description: 'Waterfalls create distinct upstream and downstream ecosystems, driving species evolution.',
                impact: 'Genetic isolation leads to unique species adaptation and biodiversity hotspots'
              },
              {
                aspect: 'Microclimate Creation',
                description: 'Spray zones create unique humid microclimates supporting specialized plant communities.',
                impact: 'Supports mosses, ferns, and rare plant species even in otherwise arid regions'
              },
              {
                aspect: 'Nutrient Cycling',
                description: 'Turbulent waters enhance nutrient mixing and distribution in aquatic systems.',
                impact: 'Supports rich food webs both upstream and downstream of waterfalls'
              }
            ]
          },
          {
            name: 'Economic Uses',
            icon: '💰',
            points: [
              {
                aspect: 'Hydroelectric Power',
                description: 'Waterfalls and their elevation changes provide renewable energy generation opportunities.',
                impact: 'Niagara Falls alone generates enough power for 3.8 million homes',
                examples: 'Iguazu Falls, Niagara Falls, Victoria Falls all have associated hydroelectric facilities'
              },
              {
                aspect: 'Tourism Revenue',
                description: 'Major waterfalls attract millions of visitors, generating substantial economic activity.',
                impact: 'Niagara Falls attracts over 30 million visitors annually, generating billions in tourism revenue',
                examples: 'Hotels, restaurants, tour operators, transportation services all benefit'
              },
              {
                aspect: 'Recreational Activities',
                description: 'Waterfalls support various adventure tourism activities.',
                impact: 'Creates jobs in guiding, equipment rental, and adventure tourism',
                activities: 'White water rafting, kayaking, canyoning, swimming, photography'
              }
            ]
          },
          {
            name: 'Cultural & Spiritual Significance',
            icon: '🙏',
            points: [
              {
                aspect: 'Sacred Sites',
                description: 'Many waterfalls are considered sacred in indigenous and local cultures.',
                examples: 'Victoria Falls (Mosi-oa-Tunya), Havasu Falls (sacred to Havasupai tribe)',
                significance: 'Sites of ceremony, meditation, and spiritual connection'
              },
              {
                aspect: 'Artistic Inspiration',
                description: 'Waterfalls inspire art, photography, music, and literature across cultures.',
                examples: 'Featured in countless paintings, photographs, films, and writings',
                impact: 'Symbols of natural beauty, power, and the sublime in nature'
              },
              {
                aspect: 'Historical Landmarks',
                description: 'Waterfalls often mark important historical and geographical locations.',
                examples: 'Navigation limits on rivers, boundary markers, exploration milestones',
                significance: 'Featured in exploration narratives and territorial definitions'
              }
            ]
          },
          {
            name: 'Scientific Value',
            icon: '🔬',
            points: [
              {
                aspect: 'Geological Study',
                description: 'Waterfalls provide insights into rock formations, erosion rates, and landscape evolution.',
                research: 'Dating waterfall formation helps understand regional geological history',
                applications: 'Predicting future landscape changes, understanding past climate'
              },
              {
                aspect: 'Biological Research',
                description: 'Unique ecosystems around waterfalls offer opportunities for evolutionary and ecological studies.',
                examples: 'Species adaptation to high-oxygen environments, isolated population genetics',
                discoveries: 'New species often discovered in isolated waterfall ecosystems'
              },
              {
                aspect: 'Climate Research',
                description: 'Seasonal waterfall flow patterns indicate climate trends and precipitation changes.',
                applications: 'Long-term monitoring provides data on regional climate patterns',
                significance: 'Early indicators of drought, glacial melt, and precipitation changes'
              }
            ]
          },
          {
            name: 'Water Quality',
            icon: '💧',
            points: [
              {
                aspect: 'Natural Purification',
                description: 'Aeration and turbulence help purify water through oxidation and volatilization.',
                process: 'Removes some dissolved gases and increases oxygen levels',
                benefit: 'Improves downstream water quality for human and ecological use'
              },
              {
                aspect: 'Sediment Sorting',
                description: 'Waterfalls naturally sort sediments by size and density.',
                effect: 'Creates distinct sediment zones upstream and downstream',
                application: 'Understanding sediment transport in river systems'
              }
            ]
          }
        ]
      },
      
      conservationChallenges: {
        title: 'Conservation and Threats',
        challenges: [
          {
            threat: 'Hydroelectric Development',
            description: 'Damming for power generation can reduce or eliminate waterfall flow',
            examples: 'Paulo Afonso Falls in Brazil significantly reduced by damming',
            impact: 'Loss of natural spectacle, ecosystem disruption, tourism decline'
          },
          {
            threat: 'Climate Change',
            description: 'Altered precipitation patterns and glacial melt affect waterfall flow',
            effects: 'Seasonal waterfalls drying up earlier, glacial-fed falls showing reduced flow',
            examples: 'Many Yosemite waterfalls show earlier seasonal decline'
          },
          {
            threat: 'Tourism Pressure',
            description: 'Over-visitation can damage surrounding ecosystems and infrastructure',
            problems: 'Trail erosion, vegetation damage, water pollution, overcrowding',
            solutions: 'Visitor caps, permit systems, infrastructure improvements'
          },
          {
            threat: 'Water Diversion',
            description: 'Upstream water extraction for agriculture and cities reduces flow',
            impact: 'Diminished spectacle, ecosystem degradation, tourism losses',
            examples: 'Various waterfalls worldwide affected by irrigation projects'
          },
          {
            threat: 'Invasive Species',
            description: 'Non-native species can disrupt unique waterfall ecosystems',
            problems: 'Outcompete native species, alter food webs, change physical habitat',
            concern: 'Particularly threatening to isolated populations above waterfalls'
          }
        ],
        conservationStrategies: [
          'UNESCO World Heritage designation for significant waterfalls',
          'National park and protected area establishment',
          'Sustainable tourism management and visitor education',
          'Environmental flow requirements for dammed rivers',
          'Climate change adaptation planning',
          'Community-based conservation involving local populations',
          'Scientific monitoring of waterfall ecosystems',
          'International cooperation for transboundary waterfalls'
        ]
      }
    }
  }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = waterfallsData;
}
