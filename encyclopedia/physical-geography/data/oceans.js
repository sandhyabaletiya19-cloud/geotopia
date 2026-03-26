/**
 * OCEANS DATA FILE
 * Complete encyclopedia content for oceans
 */

const oceansData = {
  
  meta: {
    name: 'Oceans',
    icon: '🌊',
    theme: 'oceans-theme',
    existingPagesLink: '../../oceans/oceans.html'
  },
  
  sections: {
    
    // =============================
    // SECTION 1: DEFINITION
    // =============================
    definition: {
      title: 'What is an Ocean?',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=90',
        tagline: 'The vast blue heart of our planet'
      },
      
      content: {
        introduction: 'An ocean is a vast body of saline water that covers approximately 71% of Earth\'s surface. Oceans are the largest ecosystems on Earth, home to millions of species, and play a critical role in regulating climate, producing oxygen, and supporting human life. The global ocean is divided into five major basins: Pacific, Atlantic, Indian, Southern, and Arctic.',
        
        keyPoints: [
          {
            icon: '🌍',
            label: 'Coverage',
            text: 'Oceans cover 71% of Earth\'s surface',
            detail: 'The total area of oceans is approximately 361 million km². If Earth were flat, water would cover it to a depth of 2.7 km. The Pacific Ocean alone is larger than all landmasses combined.'
          },
          {
            icon: '💧',
            label: 'Volume',
            text: '1.335 billion cubic kilometers of water',
            detail: 'Oceans contain 97% of all water on Earth. The average depth is 3,688 meters, with the deepest point being the Mariana Trench at 10,994 meters.'
          },
          {
            icon: '🧂',
            label: 'Salinity',
            text: 'Average salinity of 35 parts per thousand',
            detail: 'Ocean water contains dissolved salts, primarily sodium chloride (table salt). Salinity varies from 32-37 ppt, being higher in tropical regions with high evaporation and lower near river mouths and poles.'
          },
          {
            icon: '🌡️',
            label: 'Temperature',
            text: 'Surface temp ranges from -2°C to 30°C',
            detail: 'Ocean temperature decreases with depth. Below 1,000m (thermocline), temperatures are consistently 0-3°C. Warm surface currents transport heat from tropics to poles, regulating global climate.'
          },
          {
            icon: '🫁',
            label: 'Oxygen Production',
            text: 'Produces 50-80% of Earth\'s oxygen',
            detail: 'Marine phytoplankton, particularly cyanobacteria and diatoms, produce most of Earth\'s oxygen through photosynthesis. They also absorb CO₂, making oceans crucial carbon sinks.'
          },
          {
            icon: '🐟',
            label: 'Biodiversity',
            text: 'Home to 230,000+ known species',
            detail: 'Oceans contain the largest animals (blue whale), the longest (lion\'s mane jellyfish), and host coral reefs with biodiversity rivaling rainforests. 80% of marine species are still undiscovered.'
          },
          {
            icon: '🌀',
            label: 'Currents',
            text: 'Global conveyor belt moves water worldwide',
            detail: 'Ocean currents are driven by wind, temperature, salinity, and Earth\'s rotation (Coriolis effect). The thermohaline circulation moves water around the globe over 1,000+ years.'
          },
          {
            icon: '⚓',
            label: 'Human Importance',
            text: '90% of global trade travels by sea',
            detail: 'Oceans provide food (100+ million tonnes of fish/year), resources (oil, gas, minerals), transportation, recreation, and regulate weather patterns affecting billions of people.'
          }
        ],
        
        comparison: {
          title: 'Five Major Oceans Comparison',
          features: [
            {
              feature: 'Area',
              mountain: 'Pacific: 165.2M km²',
              hill: 'Atlantic: 106.4M km²',
              plateau: 'Indian: 70.6M km²'
            },
            {
              feature: 'Deepest Point',
              mountain: 'Mariana Trench: 10,994m',
              hill: 'Puerto Rico Trench: 8,376m',
              plateau: 'Java Trench: 7,290m'
            },
            {
              feature: 'Average Depth',
              mountain: 'Pacific: 4,280m',
              hill: 'Atlantic: 3,646m',
              plateau: 'Indian: 3,741m'
            },
            {
              feature: 'Borders',
              mountain: 'Asia, Americas, Australia',
              hill: 'Americas, Europe, Africa',
              plateau: 'Africa, Asia, Australia'
            }
          ]
        },
        
        funFacts: [
          '🌊 The Pacific Ocean is larger than all landmasses on Earth combined',
          '🏔️ The Mid-Atlantic Ridge is the longest mountain range on Earth (65,000 km) - underwater!',
          '🐋 The blue whale is the largest animal to ever exist - larger than any dinosaur',
          '🌑 We\'ve explored more of the Moon\'s surface than the ocean floor',
          '💡 The deep ocean is pitch black, yet bioluminescent creatures create their own light',
          '🌡️ The ocean absorbs 25% of CO₂ emissions and 90% of excess heat from climate change',
          '🦑 The giant squid was considered mythical until 2004 when first photographed alive',
          '🌊 A single wave can travel thousands of kilometers across the Pacific',
          '⚡ Ocean tides could theoretically power all human energy needs',
          '🧊 If all ice melted, sea levels would rise by 70 meters',
          '🐙 Octopuses have three hearts and blue blood',
          '🌊 The Pacific Ocean is shrinking by 2.5 cm per year due to plate tectonics'
        ]
      }
    },
    
    // =============================
    // SECTION 2: TYPES
    // =============================
    types: {
      title: 'Ocean Zones & Divisions',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=90',
        tagline: 'Understanding ocean structure from surface to abyss'
      },
      
      renderAs: 'mindmap',
      
      branches: [
        {
          id: 'pacific',
          name: 'Pacific Ocean',
          icon: '🌏',
          color: '#0077B6',
          
          definition: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering more area than all landmasses combined. It spans from the Arctic in the north to the Southern Ocean, and from Asia and Australia in the west to the Americas in the east. Named by explorer Ferdinand Magellan meaning "peaceful sea," it ironically contains the most seismically active zone on Earth - the Ring of Fire.',
          
          formation: {
            title: 'How the Pacific Formed',
            steps: [
              { step: 1, icon: '🌍', text: 'Panthalassa Ocean existed around supercontinent Pangaea (300 MYA)' },
              { step: 2, icon: '💥', text: 'Pangaea broke apart, Atlantic Ocean began forming (200 MYA)' },
              { step: 3, icon: '⬅️', text: 'Pacific Plate formed and began subducting under surrounding plates' },
              { step: 4, icon: '🔥', text: 'Ring of Fire created by subduction zones around Pacific rim' },
              { step: 5, icon: '📉', text: 'Pacific continues shrinking as Atlantic widens (2.5 cm/year)' }
            ]
          },
          
          characteristics: [
            'Largest ocean: 165.2 million km² (46% of ocean area)',
            'Deepest point: Mariana Trench at 10,994 meters',
            'Contains ~25,000 islands (more than all other oceans combined)',
            'Ring of Fire: 75% of world\'s volcanoes, 90% of earthquakes',
            'Home to Great Barrier Reef and world\'s largest coral systems',
            'Contains the Pacific Garbage Patch (1.6 million km²)',
            'Bordered by 40+ countries across 4 continents',
            'Average depth: 4,280 meters (deepest average of any ocean)'
          ]
        },
        {
          id: 'atlantic',
          name: 'Atlantic Ocean',
          icon: '🌎',
          color: '#0096C7',
          
          definition: 'The Atlantic Ocean is the second-largest ocean, separating the Americas from Europe and Africa. It\'s the youngest major ocean, formed by the breakup of Pangaea. The Atlantic is characterized by the Mid-Atlantic Ridge, a massive underwater mountain range running down its center where new oceanic crust is continuously created.',
          
          formation: {
            title: 'How the Atlantic Formed',
            steps: [
              { step: 1, icon: '🌍', text: 'Pangaea supercontinent intact (250 MYA)' },
              { step: 2, icon: '💥', text: 'Rifting began between Africa and Americas (200 MYA)' },
              { step: 3, icon: '🌋', text: 'Mid-Atlantic Ridge formed, creating new seafloor' },
              { step: 4, icon: '➡️', text: 'Continents continue drifting apart (2.5 cm/year)' },
              { step: 5, icon: '📈', text: 'Atlantic is still widening today, Pacific shrinking' }
            ]
          },
          
          characteristics: [
            'Second-largest ocean: 106.4 million km²',
            'Youngest major ocean (200 million years old)',
            'Mid-Atlantic Ridge: 65,000 km underwater mountain chain',
            'Deepest point: Puerto Rico Trench at 8,376 meters',
            'Gulf Stream: major warm current affecting European climate',
            'Connects to all other oceans except Arctic (via Southern)',
            'Most commercially important ocean (busiest shipping routes)',
            'Receives outflow from major rivers: Amazon, Congo, Mississippi'
          ]
        },
        {
          id: 'indian',
          name: 'Indian Ocean',
          icon: '🌏',
          color: '#00B4D8',
          
          definition: 'The Indian Ocean is the third-largest ocean, bounded by Asia to the north, Africa to the west, Australia to the east, and the Southern Ocean to the south. It\'s the warmest ocean and is known for its monsoon climate patterns that have shaped human civilization and trade routes for millennia.',
          
          formation: {
            title: 'How the Indian Ocean Formed',
            steps: [
              { step: 1, icon: '🌍', text: 'Gondwana supercontinent in southern hemisphere (200 MYA)' },
              { step: 2, icon: '💥', text: 'India broke away from Gondwana (130 MYA)' },
              { step: 3, icon: '⬆️', text: 'India drifted northward at 15 cm/year (fastest plate movement)' },
              { step: 4, icon: '💥', text: 'India collided with Asia, creating Himalayas (50 MYA)' },
              { step: 5, icon: '🌊', text: 'Indian Ocean took current form as continents separated' }
            ]
          },
          
          characteristics: [
            'Third-largest ocean: 70.6 million km²',
            'Warmest ocean (surface temperatures 22-28°C year-round)',
            'Monsoon-dominated climate affecting 2 billion+ people',
            'Deepest point: Java Trench at 7,290 meters',
            'Landlocked to the north (only ocean with no Arctic connection)',
            'Major shipping route connecting East and West',
            '40% of world\'s offshore oil production',
            'Contains 20% of water on Earth\'s surface'
          ]
        },
        {
          id: 'southern',
          name: 'Southern Ocean',
          icon: '🧊',
          color: '#48CAE4',
          
          definition: 'The Southern Ocean, also known as the Antarctic Ocean, is the fourth-largest ocean and encircles Antarctica. It was officially designated as a separate ocean in 2000. It\'s characterized by the Antarctic Circumpolar Current, the world\'s strongest current, and plays a crucial role in global ocean circulation and climate regulation.',
          
          formation: {
            title: 'How the Southern Ocean Formed',
            steps: [
              { step: 1, icon: '🌍', text: 'Antarctica part of Gondwana supercontinent' },
              { step: 2, icon: '💥', text: 'Australia separated from Antarctica (45 MYA)' },
              { step: 3, icon: '💥', text: 'South America separated, opening Drake Passage (34 MYA)' },
              { step: 4, icon: '🌀', text: 'Antarctic Circumpolar Current began flowing' },
              { step: 5, icon: '🧊', text: 'Antarctica isolated and frozen, Southern Ocean formed' }
            ]
          },
          
          characteristics: [
            'Fourth-largest ocean: 21.9 million km²',
            'Encircles Antarctica completely',
            'Antarctic Circumpolar Current: strongest current (150 million m³/s)',
            'Deepest point: South Sandwich Trench at 7,235 meters',
            'Coldest ocean (surface temp: -2°C to 10°C)',
            'Drives global thermohaline circulation',
            'Rich in nutrients, supports massive krill populations',
            'Home to whales, seals, penguins, and abundant marine life'
          ]
        },
        {
          id: 'arctic',
          name: 'Arctic Ocean',
          icon: '❄️',
          color: '#90E0EF',
          
          definition: 'The Arctic Ocean is the smallest and shallowest of the five oceans, located around the North Pole. It\'s largely covered by sea ice year-round, though climate change is rapidly reducing ice coverage. The Arctic is crucial to global climate and is experiencing the fastest warming of any ocean.',
          
          formation: {
            title: 'How the Arctic Ocean Formed',
            steps: [
              { step: 1, icon: '🌍', text: 'Shallow seas existed in northern Pangaea' },
              { step: 2, icon: '💥', text: 'North America and Eurasia separated, basin formed' },
              { step: 3, icon: '🌊', text: 'Atlantic waters began flowing into Arctic (80 MYA)' },
              { step: 4, icon: '🧊', text: 'Global cooling led to permanent ice cover (3 MYA)' },
              { step: 5, icon: '🌡️', text: 'Currently warming 2-3x faster than global average' }
            ]
          },
          
          characteristics: [
            'Smallest ocean: 14.1 million km²',
            'Shallowest ocean (average depth: 1,205 meters)',
            'Deepest point: Litke Deep at 5,450 meters',
            'Largely covered by sea ice (varies seasonally)',
            'Ice coverage has declined 40% since 1979',
            'Strategic importance (shipping routes, resources)',
            'Polar bears, walruses, seals, narwhals',
            'Permafrost contains massive methane reserves'
          ]
        },
        {
          id: 'zones',
          name: 'Ocean Depth Zones',
          icon: '📊',
          color: '#023E8A',
          
          definition: 'Oceans are divided into vertical zones based on depth, light penetration, and environmental conditions. Each zone has distinct characteristics and supports different types of marine life. From the sun-lit surface to the crushing pressure of the hadal zone, life has adapted to every extreme.',
          
          formation: {
            title: 'Understanding Ocean Zones',
            steps: [
              { step: 1, icon: '☀️', text: 'Epipelagic (Sunlight Zone): 0-200m - photosynthesis occurs' },
              { step: 2, icon: '🌅', text: 'Mesopelagic (Twilight Zone): 200-1,000m - dim light, no plants' },
              { step: 3, icon: '🌑', text: 'Bathypelagic (Midnight Zone): 1,000-4,000m - pitch black' },
              { step: 4, icon: '🦑', text: 'Abyssopelagic (Abyss): 4,000-6,000m - near-freezing, immense pressure' },
              { step: 5, icon: '🕳️', text: 'Hadopelagic (Trenches): 6,000-11,000m - extreme conditions, life exists!' }
            ]
          },
          
          characteristics: [
            'Sunlight zone: 90% of marine life, all coral reefs',
            'Twilight zone: bioluminescent creatures, deep-diving whales',
            'Midnight zone: giant squid, anglerfish, no sunlight ever',
            'Abyss: 2°C water, 600 atmospheres pressure, sparse life',
            'Hadal zone: only 5 people have visited, unique species',
            'Pressure increases by 1 atm every 10 meters depth',
            'Temperature drops to 1-4°C below thermocline',
            'More humans have walked on Moon than visited hadal zone'
          ]
        }
      ],
      
      comparisonTable: {
        title: 'Five Oceans Quick Comparison',
        headers: ['Ocean', 'Area (km²)', 'Avg Depth', 'Deepest Point', 'Key Feature'],
        rows: [
          ['Pacific 🌏', '165.2 million', '4,280m', 'Mariana Trench (10,994m)', 'Ring of Fire'],
          ['Atlantic 🌎', '106.4 million', '3,646m', 'Puerto Rico Trench (8,376m)', 'Mid-Atlantic Ridge'],
          ['Indian 🌏', '70.6 million', '3,741m', 'Java Trench (7,290m)', 'Warmest ocean'],
          ['Southern 🧊', '21.9 million', '3,270m', 'South Sandwich (7,235m)', 'Strongest current'],
          ['Arctic ❄️', '14.1 million', '1,205m', 'Litke Deep (5,450m)', 'Mostly ice-covered']
        ]
      }
    },
    
    // =============================
    // SECTION 3: FORMATION
    // =============================
    formation: {
      title: 'How Oceans Formed',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=90',
        tagline: 'From volcanic Earth to the blue planet'
      },
      
      renderAs: 'timeline',
      
      introduction: 'Earth\'s oceans formed over billions of years through a combination of volcanic outgassing, asteroid impacts, and geological processes. Understanding ocean formation helps us appreciate how our planet became the only known world with liquid water on its surface.',
      
      stages: [
        {
          stage: 1,
          title: 'Early Earth - The Hadean Eon',
          timeframe: '4.6 - 4.0 billion years ago',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
          
          description: [
            'Earth forms from accretion of dust and gas in the solar nebula',
            'Planet is molten, bombarded by asteroids and comets',
            'Extremely hot surface (1,000-2,000°C) - no liquid water possible',
            'Heavy bombardment period delivers water-rich asteroids',
            'Volcanic outgassing releases water vapor, CO₂, and nitrogen into atmosphere',
            'Moon-forming impact may have vaporized early oceans'
          ],
          
          geologicalProcess: 'Accretion of planetesimals and volcanic outgassing release water vapor into the atmosphere. The surface is too hot for liquid water.',
          
          keyFeatures: [
            'Surface temperature: 1,000-2,000°C',
            'Atmosphere: CO₂, water vapor, nitrogen',
            'No solid surface - magma ocean',
            'Heavy asteroid bombardment'
          ],
          
          evidence: [
            'Zircon crystals suggest water present by 4.4 BYA',
            'Lunar samples record bombardment history',
            'Isotope ratios in rocks'
          ]
        },
        {
          stage: 2,
          title: 'Ocean Formation - The Archean Eon',
          timeframe: '4.0 - 2.5 billion years ago',
          image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80',
          
          description: [
            'Earth cools below 100°C - water vapor condenses as rain',
            'Massive rainstorms lasting millions of years fill low-lying areas',
            'First permanent liquid water oceans form by 4.0 BYA',
            'Early oceans were hot, acidic, and green (dissolved iron)',
            'No oxygen in atmosphere - anoxic conditions',
            'First primitive life (bacteria) appears in oceans around 3.5 BYA',
            'Stromatolites (cyanobacteria mats) begin producing oxygen'
          ],
          
          geologicalProcess: 'As Earth cooled, water vapor condensed from the atmosphere. Continuous rainfall over millions of years accumulated in basins, forming the first oceans.',
          
          keyFeatures: [
            'Ocean temperature: 50-80°C (much hotter than today)',
            'No free oxygen in atmosphere or ocean',
            'Green-colored water from dissolved iron',
            'First life: single-celled organisms'
          ],
          
          evidence: [
            'Pillow lavas from 3.8 BYA indicate underwater eruptions',
            'Banded iron formations in ancient rocks',
            '3.5 BYA stromatolite fossils in Australia'
          ]
        },
        {
          stage: 3,
          title: 'Great Oxidation Event',
          timeframe: '2.5 - 2.0 billion years ago',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
          
          description: [
            'Cyanobacteria produce oxygen through photosynthesis for 1+ billion years',
            'Oxygen accumulates, reacting with dissolved iron (banded iron formations)',
            'Once iron is oxidized, free oxygen builds in atmosphere',
            'The Great Oxidation Event transforms Earth\'s chemistry',
            'Oceans change from green/brown to blue',
            'Mass extinction of anaerobic life that couldn\'t tolerate oxygen',
            'Sets stage for complex life evolution'
          ],
          
          geologicalProcess: 'Photosynthetic cyanobacteria released oxygen that accumulated in the atmosphere and oceans, fundamentally changing Earth\'s chemistry.',
          
          keyFeatures: [
            'Atmospheric oxygen rises from 0% to ~2%',
            'Oceans become oxygenated (slowly)',
            'Banded iron formation deposition ends',
            'First mass extinction event'
          ],
          
          evidence: [
            'Banded iron formations stop forming',
            'Red beds (oxidized iron) appear in rock record',
            'Sulfur isotope changes in ancient rocks'
          ]
        },
        {
          stage: 4,
          title: 'Supercontinent Cycles',
          timeframe: '1 billion years ago - 200 million years ago',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
          
          description: [
            'Continents assemble and break apart in cycles (~500 million years)',
            'Rodinia supercontinent (1.1 BYA), Pannotia (600 MYA), Pangaea (335 MYA)',
            'Each breakup creates new ocean basins',
            'Panthalassa: giant ocean surrounding Pangaea',
            'Sea levels fluctuate 200+ meters during cycles',
            'Marine life explodes in Cambrian (540 MYA)',
            'Mass extinctions occur during major changes'
          ],
          
          geologicalProcess: 'Continental drift driven by mantle convection creates supercontinent cycles, opening and closing ocean basins over hundreds of millions of years.',
          
          keyFeatures: [
            'Supercontinent assembly every ~500 MY',
            'Panthalassa: single global ocean around Pangaea',
            'Sea level varies 200+ meters',
            'Major evolutionary events tied to ocean changes'
          ],
          
          evidence: [
            'Matching coastlines and rock formations',
            'Fossil distribution patterns',
            'Paleomagnetic data in rocks'
          ]
        },
        {
          stage: 5,
          title: 'Modern Oceans',
          timeframe: '200 million years ago - Present',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
          
          description: [
            'Pangaea begins breaking apart (200 MYA)',
            'Atlantic Ocean opens as Americas separate from Africa/Europe',
            'India breaks from Gondwana, creates Indian Ocean (130 MYA)',
            'Drake Passage opens, Southern Ocean forms (34 MYA)',
            'Antarctic Circumpolar Current begins, Antarctica freezes',
            'Current ocean configuration reached ~3 MYA',
            'Ice ages cause sea level fluctuations of 120+ meters',
            'Oceans continue changing: Atlantic widening, Pacific shrinking'
          ],
          
          geologicalProcess: 'The breakup of Pangaea created the modern ocean basins. Ongoing plate tectonics continues to reshape oceans today.',
          
          keyFeatures: [
            'Atlantic widens 2.5 cm/year',
            'Pacific shrinks 2.5 cm/year',
            'Sea level is ~120m higher than Ice Age minimums',
            'Five distinct ocean basins'
          ],
          
          evidence: [
            'GPS measurements of plate movement',
            'Age of seafloor spreading from center',
            'Satellite monitoring of sea level',
            'Coral reef records of sea level changes'
          ]
        }
      ],
      
      terminology: {
        title: '📖 Ocean Terminology',
        terms: [
          {
            term: 'Thermohaline Circulation',
            pronunciation: '(THERM-oh-HAY-line)',
            definition: 'Global ocean conveyor belt driven by differences in water temperature and salinity. Cold, salty water sinks in the North Atlantic, flows deep, and rises in the Pacific, completing a cycle over ~1,000 years.',
            example: 'The Gulf Stream is part of thermohaline circulation, carrying warm water from the Gulf of Mexico to Western Europe, making it warmer than similar latitudes.',
            relatedTerms: ['Ocean Current', 'Conveyor Belt', 'Deep Water Formation']
          },
          {
            term: 'Continental Shelf',
            pronunciation: '(KON-ti-NEN-tal shelf)',
            definition: 'The submerged edge of a continent extending from the shoreline to the continental slope. Relatively shallow (0-200m), rich in marine life, and economically important for fisheries and oil/gas.',
            example: 'The North Sea is entirely on the continental shelf, averaging only 90 meters deep. During ice ages, it was dry land.',
            relatedTerms: ['Continental Slope', 'Continental Rise', 'Abyssal Plain']
          },
          {
            term: 'Upwelling',
            pronunciation: '(UP-well-ing)',
            definition: 'The rising of cold, nutrient-rich deep water to the ocean surface, typically along coastlines or at the equator. Creates highly productive fishing grounds.',
            example: 'The Peruvian coast has strong upwelling that supports the world\'s largest anchovy fishery. When El Niño disrupts upwelling, fish populations crash.',
            relatedTerms: ['El Niño', 'La Niña', 'Nutrients', 'Productivity']
          },
          {
            term: 'Abyssal Plain',
            pronunciation: '(uh-BISS-al)',
            definition: 'Flat, sediment-covered areas of the deep ocean floor at depths of 3,000-6,000 meters. The flattest surfaces on Earth, covering 50% of ocean floor.',
            example: 'The Sohm Abyssal Plain in the North Atlantic is fed by turbidity currents carrying sediment from the continental slope.',
            relatedTerms: ['Abyssopelagic Zone', 'Deep Sea', 'Sediment']
          },
          {
            term: 'Gyre',
            pronunciation: '(JY-er)',
            definition: 'Large systems of rotating ocean currents, formed by wind patterns and the Coriolis effect. Five major gyres exist, one in each major ocean basin.',
            example: 'The North Pacific Gyre traps floating debris, creating the Great Pacific Garbage Patch - an area of concentrated plastic pollution.',
            relatedTerms: ['Ocean Current', 'Coriolis Effect', 'Garbage Patch']
          },
          {
            term: 'Thermocline',
            pronunciation: '(THERM-oh-kline)',
            definition: 'A layer of water where temperature changes rapidly with depth, separating warm surface water from cold deep water. Typically found at 200-1,000m depth.',
            example: 'Submarines can hide below the thermocline because it deflects sonar signals, making detection difficult.',
            relatedTerms: ['Halocline', 'Pycnocline', 'Water Layers']
          }
        ]
      }
    },
    
    // =============================
    // SECTION 4: EXAMPLES
    // =============================
    examples: {
      title: 'Explore World\'s Oceans',
      
      hero: {
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=90',
        tagline: 'Dive into detailed ocean information'
      },
      
      renderAs: 'grid',
      
      introduction: 'Explore comprehensive information about all five oceans, including their seas, currents, marine life, and geographical features. Our ocean database includes detailed maps, statistics, and fascinating facts.',
      
      linkToExisting: '../../oceans/oceans.html',
      
      upscRelevance: {
        title: '🎯 UPSC Exam Relevance - Oceans',
        introduction: 'Oceanography is crucial for UPSC Geography, covering physical, chemical, and biological aspects of oceans.',
        
        topics: [
          '**Ocean Floor Topography:** Continental shelf, slope, rise, abyssal plains, trenches, mid-ocean ridges',
          '**Ocean Currents:** Warm and cold currents, gyres, thermohaline circulation, effects on climate',
          '**Tides:** Spring and neap tides, tidal patterns, tidal energy potential',
          '**Salinity & Temperature:** Distribution patterns, factors affecting, thermocline, halocline',
          '**Marine Resources:** Fishing zones, EEZ (Exclusive Economic Zone), polymetallic nodules, energy',
          '**Indian Ocean:** Monsoon patterns, IORA, strategic importance, blue economy',
          '**Climate Change Impact:** Sea level rise, ocean acidification, coral bleaching, warming',
          '**Marine Pollution:** Plastic pollution, oil spills, eutrophication, dead zones',
          '**Law of the Sea:** UNCLOS, territorial waters, high seas, seabed mining',
          '**El Niño & La Niña:** Causes, effects on Indian monsoon, global impacts'
        ],
        
        sampleQuestions: [
          {
            type: 'Mains',
            year: '2022',
            question: 'Explain the role of ocean currents in regulating global climate. How does thermohaline circulation affect weather patterns?',
            approach: 'Discuss warm/cold currents, heat transfer from tropics to poles, Gulf Stream effect on Europe, thermohaline circulation mechanism, climate change impacts.'
          },
          {
            type: 'Mains',
            year: '2021',
            question: 'What is ocean acidification? Discuss its causes and impacts on marine ecosystems.',
            approach: 'Define pH decrease, CO₂ absorption mechanism, effects on coral reefs, shellfish, food chains, economic impacts on fisheries.'
          },
          {
            type: 'Prelims',
            year: '2020',
            question: 'The term "Blue Economy" refers to:\n(a) Economy of water-scarce regions\n(b) Sustainable use of ocean resources\n(c) Trade relations across oceans\n(d) Deep sea mining',
            answer: '(b) Blue Economy refers to sustainable use of ocean resources for economic growth, improved livelihoods, and ocean health.'
          }
        ]
      }
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = oceansData;
}
