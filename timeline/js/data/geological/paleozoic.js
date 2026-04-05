// js/data/geological/paleozoic.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  PALEOZOIC ERA - "The Age of Ancient Life"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 541 - 252 Million Years Ago (289 million years)
 *  Named after: Greek "palaios" (old) + "zoic" (life)
 *  
 *  The age when:
 *  - Cambrian Explosion creates modern animal phyla
 *  - Fish, amphibians, and reptiles evolve
 *  - Plants colonize land
 *  - Insects and spiders evolve
 *  - Pangaea supercontinent forms
 *  - Largest mass extinction in history ends the era
 *  
 *  Six periods: Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian
 * ═══════════════════════════════════════════════════════════════════════════
 */

const PALEOZOIC_ERA = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'paleozoic',
  name: 'Paleozoic Era',
  etymology: 'From Greek "palaios" (old/ancient) + "zoic" (life)',
  
  timeRange: {
    start: -541000000,  // 541 million years ago
    end: -252000000,    // 252 million years ago
    duration: 289000000 // 289 million years
  },
  
  color: '#228B22',
  gradient: 'linear-gradient(135deg, #006400, #228B22, #32CD32)',
  
  description: `The Paleozoic Era witnessed the explosive diversification of animal life. 
                Beginning with the Cambrian Explosion that created all modern animal phyla, 
                life conquered the land and seas. Fish evolved into amphibians, which evolved 
                into reptiles. Plants transformed bare rock into lush forests. But the era 
                ended in catastrophe: the Permian-Triassic extinction, which killed 96% of 
                all marine species.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Periods within the Paleozoic)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'cambrian',
      name: 'Cambrian Period',
      timeRange: { start: -541000000, end: -485000000 },
      duration: 56000000,
      description: 'Explosion of animal life. All major phyla appear.',
      keyEvents: ['cambrian-explosion', 'first-trilobites', 'anomalocaris'],
      namedAfter: 'Cambria (Roman name for Wales)'
    },
    {
      id: 'ordovician',
      name: 'Ordovician Period',
      timeRange: { start: -485000000, end: -444000000 },
      duration: 41000000,
      description: 'Great biodiversity increase. First land plants.',
      keyEvents: ['great-ordovician-biodiversification', 'ordovician-extinction'],
      namedAfter: 'Ordovices (Celtic tribe of Wales)'
    },
    {
      id: 'silurian',
      name: 'Silurian Period',
      timeRange: { start: -444000000, end: -419000000 },
      duration: 25000000,
      description: 'Recovery from extinction. First vascular plants.',
      keyEvents: ['first-jawed-fish', 'land-colonization-begins'],
      namedAfter: 'Silures (Celtic tribe of Wales)'
    },
    {
      id: 'devonian',
      name: 'Devonian Period',
      timeRange: { start: -419000000, end: -359000000 },
      duration: 60000000,
      description: 'Age of Fishes. First amphibians evolve.',
      keyEvents: ['fish-diversity-peak', 'first-amphibians', 'first-forests'],
      namedAfter: 'Devon, England'
    },
    {
      id: 'carboniferous',
      name: 'Carboniferous Period',
      timeRange: { start: -359000000, end: -299000000 },
      duration: 60000000,
      description: 'Coal swamp forests. First reptiles. Giant insects.',
      keyEvents: ['coal-forests', 'first-reptiles', 'giant-insects'],
      namedAfter: 'Carbon (coal-bearing rocks)',
      subPeriods: [
        { name: 'Mississippian', range: { start: -359000000, end: -323000000 } },
        { name: 'Pennsylvanian', range: { start: -323000000, end: -299000000 } }
      ]
    },
    {
      id: 'permian',
      name: 'Permian Period',
      timeRange: { start: -299000000, end: -252000000 },
      duration: 47000000,
      description: 'Pangaea forms. Ends with greatest mass extinction.',
      keyEvents: ['pangaea-assembly', 'synapsid-dominance', 'permian-extinction'],
      namedAfter: 'Perm region, Russia'
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  CAMBRIAN PERIOD (541 - 485 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'cambrian-begins',
      year: -541000000,
      name: 'Cambrian Period Begins',
      event: 'Phanerozoic Eon and Paleozoic Era begin',
      type: 'geological',
      importance: 10,
      description: `The Cambrian Period begins, marked by the first appearance of 
                    complex trace fossils. This also marks the beginning of the 
                    Phanerozoic Eon - the eon of visible life.`,
      scientificData: {
        marker: 'Treptichnus pedum trace fossil',
        location: 'Fortune Head, Newfoundland (GSSP)',
        oxygen: '~15% PAL'
      },
      coordinates: { lat: 47.1, lng: -55.8 },
      location: 'Fortune Head, Newfoundland, Canada'
    },
    
    {
      id: 'cambrian-explosion',
      year: -538000000,
      name: 'Cambrian Explosion',
      event: 'Most animal phyla appear suddenly in fossil record',
      type: 'biological',
      importance: 10,
      description: `The most dramatic diversification in the history of life. Within 
                    20-25 million years, virtually all major animal phyla appear in 
                    the fossil record. Hard shells, exoskeletons, and diverse body 
                    plans evolve. Predation intensifies, driving an evolutionary 
                    "arms race."`,
      scientificData: {
        duration: '20-25 million years',
        phylaAppearing: 'All ~35 modern animal phyla',
        possibleCauses: [
          'Rising oxygen levels',
          'Development of eyes (predation)',
          'Evolution of HOX genes',
          'Breakup of supercontinent'
        ],
        keyFossils: ['Trilobites', 'Anomalocaris', 'Hallucigenia']
      }
    },
    
    {
      id: 'first-trilobites',
      year: -521000000,
      name: 'First Trilobites Appear',
      event: 'Iconic Paleozoic arthropods evolve',
      type: 'biological',
      importance: 9,
      description: `Trilobites appear and will dominate marine ecosystems for 300 
                    million years. These segmented arthropods are among the first 
                    animals with complex eyes. Over 20,000 species will evolve.`,
      scientificData: {
        classification: 'Arthropoda',
        eyeType: 'Compound (calcite lenses)',
        lifestyle: 'Benthic, swimming, burrowing',
        species: '>20,000 (entire existence)'
      }
    },
    
    {
      id: 'chengjiang-biota',
      year: -518000000,
      name: 'Chengjiang Biota',
      event: 'Exceptional fossil preservation in China',
      type: 'biological',
      importance: 9,
      description: `The Chengjiang Lagerstätte preserves an exceptional Cambrian 
                    ecosystem with soft-bodied organisms. It provides the earliest 
                    view of the Cambrian Explosion, including early vertebrates.`,
      scientificData: {
        preservation: 'Exceptional soft-tissue',
        organisms: ['Fuxianhuia', 'Myllokunmingia', 'Anomalocaris'],
        significance: 'Oldest vertebrate fossils',
        age: '518 million years'
      },
      coordinates: { lat: 24.9, lng: 102.6 },
      location: 'Yunnan Province, China'
    },
    
    {
      id: 'anomalocaris',
      year: -515000000,
      name: 'Anomalocaris: First Apex Predator',
      event: 'Meter-long predator dominates Cambrian seas',
      type: 'biological',
      importance: 8,
      description: `Anomalocaris, reaching up to 1 meter in length, is the first 
                    known apex predator. Its circular mouth and grasping appendages 
                    allowed it to crush trilobites. It represents the rise of 
                    predation as an evolutionary driver.`,
      scientificData: {
        size: 'Up to 1 m (giant for its time)',
        diet: 'Trilobites, other animals',
        features: ['Compound eyes', 'Grasping appendages', 'Circular mouth'],
        classification: 'Radiodont (stem-group arthropod)'
      }
    },
    
    {
      id: 'burgess-shale',
      year: -508000000,
      name: 'Burgess Shale Ecosystem',
      event: 'Best-preserved Cambrian fossil site forms',
      type: 'biological',
      importance: 10,
      description: `The Burgess Shale forms, preserving soft-bodied organisms in 
                    extraordinary detail. Discovered in 1909, it revolutionized 
                    understanding of Cambrian life, revealing bizarre creatures 
                    unlike anything alive today.`,
      scientificData: {
        preservation: 'Exceptional',
        keyOrganisms: [
          'Hallucigenia (walking spines)',
          'Opabinia (5-eyed predator)',
          'Wiwaxia (scale-covered)',
          'Marrella (lace crab)',
          'Pikaia (early chordate)'
        ],
        discoverer: 'Charles Doolittle Walcott (1909)',
        significance: 'Revealed Cambrian diversity'
      },
      coordinates: { lat: 51.4, lng: -116.5 },
      location: 'British Columbia, Canada'
    },
    
    {
      id: 'first-vertebrates',
      year: -518000000,
      name: 'First Vertebrates',
      event: 'Animals with backbones (chordates) appear',
      type: 'biological',
      importance: 10,
      description: `The first vertebrates appear - small, jawless fish-like creatures. 
                    Myllokunmingia and Haikouichthys from China represent the earliest 
                    known vertebrates. From these humble beginnings, all fish, 
                    amphibians, reptiles, birds, and mammals will evolve.`,
      scientificData: {
        fossils: ['Myllokunmingia', 'Haikouichthys'],
        features: ['Notochord', 'Dorsal nerve cord', 'Gill slits'],
        size: '2-3 cm',
        lifestyle: 'Swimming, filter-feeding'
      }
    },
    
    {
      id: 'dresbachian-extinction',
      year: -502000000,
      name: 'Dresbachian Extinction',
      event: 'Minor extinction event affects trilobites',
      type: 'catastrophic',
      importance: 6,
      description: `A minor extinction event significantly affects trilobite 
                    diversity. Ocean anoxia may be responsible. This is one of 
                    several smaller extinctions during the Cambrian.`,
      scientificData: {
        victims: 'Many trilobite families',
        cause: 'Ocean anoxia?',
        severity: 'Moderate'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  ORDOVICIAN PERIOD (485 - 444 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'ordovician-begins',
      year: -485000000,
      name: 'Ordovician Period Begins',
      event: 'Period of great marine diversification begins',
      type: 'geological',
      importance: 8,
      description: `The Ordovician Period begins. Marine life will undergo massive 
                    diversification, with more genera appearing than in any other 
                    period. Continents remain largely flooded by shallow seas.`,
      scientificData: {
        sealevel: 'High (continents flooded)',
        climate: 'Warm greenhouse',
        continents: 'Gondwana dominant, scattered smaller continents'
      }
    },
    
    {
      id: 'great-ordovician-biodiversification',
      year: -470000000,
      name: 'Great Ordovician Biodiversification Event (GOBE)',
      event: 'Marine diversity triples within 25 million years',
      type: 'biological',
      importance: 10,
      description: `The Great Ordovician Biodiversification Event sees marine 
                    diversity triple. Brachiopods, bryozoans, corals, echinoderms, 
                    and graptolites flourish. This event rivals the Cambrian 
                    Explosion in importance.`,
      scientificData: {
        duration: '~25 million years',
        diversityIncrease: '3× at genus level',
        dominantGroups: ['Brachiopods', 'Bryozoans', 'Corals', 'Crinoids'],
        cause: 'High sea levels, warm climate, nutrient availability'
      }
    },
    
    {
      id: 'first-land-plants',
      year: -470000000,
      name: 'First Land Plants',
      event: 'Plants begin colonizing land',
      type: 'biological',
      importance: 10,
      description: `The first plants colonize land - simple bryophyte-like organisms 
                    (liverworts, mosses) that hugged moist surfaces. Spore fossils 
                    (cryptospores) provide evidence of this momentous transition.`,
      scientificData: {
        evidence: 'Cryptospores (plant spores)',
        organisms: 'Bryophyte-like (liverworts, mosses)',
        habitat: 'Moist near-water environments',
        significance: 'Beginning of terrestrial ecosystems'
      }
    },
    
    {
      id: 'first-reef-ecosystems',
      year: -460000000,
      name: 'First Coral-Like Reef Systems',
      event: 'Reef ecosystems become established',
      type: 'biological',
      importance: 8,
      description: `True reef ecosystems become established, built by tabulate and 
                    rugose corals, stromatoporoids, and bryozoans. These reefs 
                    create complex three-dimensional habitats that increase 
                    biodiversity.`,
      scientificData: {
        builders: ['Tabulate corals', 'Rugose corals', 'Stromatoporoids'],
        structure: 'Framework reefs',
        inhabitants: 'Diverse marine communities'
      }
    },
    
    {
      id: 'ordovician-meteor-event',
      year: -466000000,
      name: 'Ordovician Meteor Event',
      event: 'Major asteroid breakup showers Earth with meteorites',
      type: 'catastrophic',
      importance: 7,
      description: `A major asteroid breaks up in the asteroid belt, sending a 
                    shower of meteorites to Earth over millions of years. This 
                    event may have affected climate and contributed to biodiversity.`,
      scientificData: {
        source: 'L-chondrite parent body breakup',
        effect: 'Increased meteorite flux 100×',
        duration: 'Millions of years',
        possibleEffects: 'Climate cooling, increased iron input to oceans'
      }
    },
    
    {
      id: 'ordovician-glaciation',
      year: -450000000,
      name: 'Ordovician Glaciation Begins',
      event: 'Ice sheets form on Gondwana',
      type: 'geological',
      importance: 8,
      description: `Gondwana, positioned over the South Pole, develops extensive 
                    ice sheets. Sea levels drop dramatically, exposing continental 
                    shelves and stressing marine ecosystems.`,
      scientificData: {
        iceSheetLocation: 'Gondwana (North Africa today)',
        seaLevelDrop: '~100 meters',
        duration: '~10 million years',
        evidence: 'Glacial deposits in Sahara'
      }
    },
    
    {
      id: 'ordovician-extinction',
      year: -444000000,
      name: 'Late Ordovician Mass Extinction',
      event: 'Second-largest mass extinction in history',
      type: 'catastrophic',
      importance: 10,
      description: `The Late Ordovician extinction kills approximately 85% of marine 
                    species. It occurs in two pulses: first from glaciation and 
                    cooling, then from warming and ocean anoxia. Brachiopods, 
                    trilobites, and graptolites are devastated.`,
      scientificData: {
        extinction: '~85% of species',
        timing: 'Two pulses',
        causes: [
          'Glaciation (first pulse)',
          'Warming + anoxia (second pulse)'
        ],
        victims: ['Many brachiopods', 'Trilobites', 'Graptolites', 'Conodonts'],
        rank: '2nd largest extinction'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  SILURIAN PERIOD (444 - 419 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'silurian-begins',
      year: -444000000,
      name: 'Silurian Period Begins',
      event: 'Recovery from Ordovician extinction',
      type: 'geological',
      importance: 8,
      description: `The Silurian Period begins with recovery from mass extinction. 
                    It will be a time of relative stability, with reef ecosystems 
                    rebuilding and the first major land colonization.`,
      scientificData: {
        climate: 'Warm, stable',
        sealevel: 'High',
        continents: 'Gondwana south, smaller continents north'
      }
    },
    
    {
      id: 'first-vascular-plants',
      year: -430000000,
      name: 'First Vascular Plants',
      event: 'Plants with internal transport systems evolve',
      type: 'biological',
      importance: 10,
      description: `The first vascular plants (Cooksonia) evolve, possessing internal 
                    tubes (xylem, phloem) to transport water and nutrients. This 
                    allows plants to grow taller and colonize drier environments.`,
      scientificData: {
        organism: 'Cooksonia',
        height: '2-5 cm',
        innovation: 'Vascular tissue',
        significance: 'Enables colonization of land interior'
      }
    },
    
    {
      id: 'first-jawed-fish',
      year: -430000000,
      name: 'First Jawed Fish (Gnathostomes)',
      event: 'Jaws evolve from gill arches',
      type: 'biological',
      importance: 10,
      description: `Jawed vertebrates (gnathostomes) appear. Jaws evolved from 
                    gill arch bones, enabling active predation. This innovation 
                    leads to the dominance of jawed fish and eventually all land 
                    vertebrates.`,
      scientificData: {
        origin: 'Modified gill arches',
        groups: ['Placoderms', 'Acanthodians'],
        significance: 'Enables active predation',
        legacy: 'All jawed vertebrates descend from these'
      }
    },
    
    {
      id: 'first-land-animals',
      year: -430000000,
      name: 'First Land Animals',
      event: 'Arthropods colonize land',
      type: 'biological',
      importance: 10,
      description: `The first animals colonize land - myriapods (centipede ancestors) 
                    and possibly early arachnids. They follow plants onto land, 
                    feeding on decaying vegetation and each other.`,
      scientificData: {
        organisms: ['Myriapods (millipede/centipede relatives)', 'Early arachnids'],
        fossils: 'Pneumodesmus (oldest myriapod)',
        adaptations: ['Waterproof cuticle', 'Book lungs/tracheae'],
        habitat: 'Near water, moist environments'
      }
    },
    
    {
      id: 'eurypterid-dominance',
      year: -430000000,
      name: 'Eurypterid ("Sea Scorpion") Dominance',
      event: 'Giant marine arthropods become apex predators',
      type: 'biological',
      importance: 8,
      description: `Eurypterids (sea scorpions) become dominant marine predators. 
                    Some species reach 2.5 meters in length - the largest arthropods 
                    ever. They hunt fish and other invertebrates in shallow seas 
                    and brackish waters.`,
      scientificData: {
        maxSize: '2.5 m (Jaekelopterus)',
        relationship: 'Related to arachnids',
        habitat: 'Shallow seas, brackish water',
        dominance: 'Silurian-Devonian'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  DEVONIAN PERIOD (419 - 359 Ma) - "Age of Fishes"
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'devonian-begins',
      year: -419000000,
      name: 'Devonian Period Begins - "Age of Fishes"',
      event: 'Period of fish diversification and first forests',
      type: 'geological',
      importance: 9,
      description: `The Devonian Period begins - the "Age of Fishes." Fish will 
                    reach extraordinary diversity, forests will develop on land, 
                    and the first four-legged vertebrates will evolve.`,
      scientificData: {
        climate: 'Warm, possibly highest CO2 of Paleozoic',
        sealevel: 'Variable',
        nickname: 'Age of Fishes'
      }
    },
    
    {
      id: 'dunkleosteus',
      year: -380000000,
      name: 'Dunkleosteus: Armored Terror',
      event: 'Giant armored fish dominates Devonian seas',
      type: 'biological',
      importance: 8,
      description: `Dunkleosteus, a placoderm fish up to 8.8 meters long with 
                    armored plates and self-sharpening bone "fangs," becomes one 
                    of the first hypercarnivore apex predators. It could bite with 
                    force rivaling T. rex.`,
      scientificData: {
        size: 'Up to 8.8 m',
        biteForce: '5,000+ N (one of strongest ever)',
        classification: 'Placoderm',
        features: ['Armor plates', 'Bone shears instead of teeth']
      }
    },
    
    {
      id: 'first-forests',
      year: -385000000,
      name: 'First True Forests',
      event: 'Archaeopteris forests cover the land',
      type: 'biological',
      importance: 10,
      description: `True forests develop for the first time. Archaeopteris, a 
                    tree-like progymn with fern-like leaves, dominates, reaching 
                    30 meters tall. These forests transform Earth's climate by 
                    accelerating rock weathering and drawing down CO2.`,
      scientificData: {
        dominantTree: 'Archaeopteris',
        height: 'Up to 30 m',
        features: ['Deep roots', 'Secondary wood', 'Fern-like leaves'],
        climateEffect: 'CO2 drawdown via weathering'
      },
      coordinates: { lat: 42.0, lng: -74.5 },
      location: 'Gilboa, New York (oldest known forest)'
    },
    
    {
      id: 'tiktaalik-transition',
      year: -375000000,
      name: 'Tiktaalik: Fish to Tetrapod Transition',
      event: 'Key transitional fossil between fish and amphibians',
      type: 'biological',
      importance: 10,
      description: `Tiktaalik, discovered in 2004, represents a crucial transitional 
                    form between fish and tetrapods. It has fish features (scales, 
                    fins) combined with tetrapod features (neck, robust ribs, 
                    fin-bones like limb bones).`,
      scientificData: {
        size: '~2.5 m',
        fishFeatures: ['Scales', 'Gills', 'Fin rays'],
        tetrapodFeatures: ['Mobile neck', 'Robust ribs', 'Limb-like fin bones'],
        discoverer: 'Neil Shubin (2004)',
        significance: 'Perfect "missing link"'
      },
      coordinates: { lat: 77.0, lng: -85.0 },
      location: 'Ellesmere Island, Nunavut, Canada'
    },
    
    {
      id: 'first-tetrapods',
      year: -370000000,
      name: 'First Tetrapods',
      event: 'Vertebrates evolve four legs, step onto land',
      type: 'biological',
      importance: 10,
      description: `The first true tetrapods (four-legged vertebrates) evolve. 
                    Acanthostega and Ichthyostega are early examples, still 
                    primarily aquatic but with four functioning limbs. From these 
                    ancestors, all amphibians, reptiles, birds, and mammals descend.`,
      scientificData: {
        organisms: ['Acanthostega', 'Ichthyostega'],
        features: ['Four limbs with digits', 'Still had gills'],
        habitat: 'Primarily aquatic',
        significance: 'Origin of all land vertebrates'
      },
      coordinates: { lat: 71.0, lng: -24.0 },
      location: 'East Greenland'
    },
    
    {
      id: 'first-insects',
      year: -385000000,
      name: 'First Winged Insects',
      event: 'Insects evolve flight',
      type: 'biological',
      importance: 9,
      description: `Insects evolve wings and become the first animals to fly. 
                    Early insects like Rhyniognatha colonize forests, eventually 
                    becoming the most diverse animal group on Earth.`,
      scientificData: {
        earliest: 'Rhyniognatha',
        age: '400 Ma (wingless)',
        wingEvolution: '~385 Ma',
        significance: 'First flying animals'
      }
    },
    
    {
      id: 'kellwasser-extinction',
      year: -372000000,
      name: 'Kellwasser Extinction Event',
      event: 'First of two Late Devonian extinction pulses',
      type: 'catastrophic',
      importance: 8,
      description: `The first of two major Late Devonian extinction pulses. 
                    Reef ecosystems collapse, with stromatoporoids and many 
                    corals going extinct. Ocean anoxia spreads globally.`,
      scientificData: {
        extinction: '~20% of families',
        victims: ['Stromatoporoids', 'Tabulate corals', 'Many brachiopods'],
        cause: 'Ocean anoxia, possibly triggered by forest weathering',
        reefRecovery: '100 million years'
      }
    },
    
    {
      id: 'hangenberg-extinction',
      year: -359000000,
      name: 'Hangenberg Event (End-Devonian)',
      event: 'Second pulse of Late Devonian extinction',
      type: 'catastrophic',
      importance: 9,
      description: `The Hangenberg Event marks the final pulse of the Late Devonian 
                    extinction. Placoderms go completely extinct, and many other 
                    fish groups are decimated. Total Devonian extinctions rank 
                    among the "Big Five."`,
      scientificData: {
        extinction: '~75% of species (combined Devonian events)',
        victims: ['All placoderms', 'Many fish', 'Eurypterids decline'],
        causes: ['Ocean anoxia', 'Climate instability', 'Forest spread?'],
        rank: 'Part of "Big Five" extinctions'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  CARBONIFEROUS PERIOD (359 - 299 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'carboniferous-begins',
      year: -359000000,
      name: 'Carboniferous Period Begins',
      event: 'Age of coal swamps and giant insects',
      type: 'geological',
      importance: 9,
      description: `The Carboniferous Period begins. Vast swamp forests will cover 
                    the continents, eventually becoming coal deposits. Giant insects 
                    thrive in the oxygen-rich atmosphere.`,
      scientificData: {
        oxygen: 'Rising to 35% (vs. 21% today)',
        climate: 'Warm and humid',
        vegetation: 'Extensive coal swamps',
        etymology: 'Named for coal deposits'
      }
    },
    
    {
      id: 'oxygen-peak-35-percent',
      year: -300000000,
      name: 'Atmospheric Oxygen Reaches 35%',
      event: 'Highest oxygen level in Earth history',
      type: 'geological',
      importance: 9,
      description: `Atmospheric oxygen reaches its highest level ever - around 35% 
                    (compared to 21% today). This is caused by massive carbon burial 
                    in coal swamps. The high oxygen enables giant insects and makes 
                    wildfires extremely common.`,
      scientificData: {
        oxygenLevel: '35%',
        cause: 'Carbon burial in coal swamps',
        consequences: ['Giant insects', 'Frequent wildfires'],
        evidence: 'Charcoal in coal deposits'
      }
    },
    
    {
      id: 'coal-swamp-forests',
      year: -320000000,
      name: 'Peak Coal Swamp Forests',
      event: 'Vast forests covering continents',
      type: 'biological',
      importance: 9,
      description: `Enormous swamp forests cover tropical regions. Lycopod trees 
                    (Lepidodendron, Sigillaria) and giant horsetails (Calamites) 
                    dominate. Dead vegetation accumulates in swamps, eventually 
                    becoming most of the world's coal deposits.`,
      scientificData: {
        dominantPlants: ['Lepidodendron (40m)', 'Sigillaria (30m)', 'Calamites'],
        extent: 'Equatorial belt worldwide',
        coalFormation: 'Most Carboniferous coal from this period',
        environment: 'Tropical swamps'
      }
    },
    
    // js/data/geological/paleozoic.js (CONTINUED)

    {
      id: 'meganeura-giant-insects',
      year: -305000000,
      name: 'Giant Insects Thrive',
      event: 'Dragonflies with 70cm wingspans',
      type: 'biological',
      importance: 8,
      description: `Giant insects flourish in the oxygen-rich atmosphere. Meganeura, 
                    a dragonfly-like insect with 70cm wingspan, hunts other insects 
                    and small vertebrates. Arthropleura, a millipede-like creature, 
                    reaches 2.5 meters long.`,
      scientificData: {
        meganeura: {
          wingspan: '70 cm',
          classification: 'Meganisoptera',
          diet: 'Other insects, small vertebrates'
        },
        arthropleura: {
          length: '2.5 m',
          classification: 'Myriapod',
          diet: 'Decaying vegetation',
          note: 'Largest land invertebrate ever'
        },
        cause: 'High oxygen (35%) enables larger tracheal systems'
      }
    },
    
    {
      id: 'first-reptiles',
      year: -312000000,
      name: 'First Reptiles (Amniotes)',
      event: 'Vertebrates evolve waterproof eggs',
      type: 'biological',
      importance: 10,
      description: `The first reptiles evolve, distinguished by the amniotic egg - 
                    a waterproof egg that allows reproduction on land without needing 
                    water. Hylonomus from Nova Scotia is among the earliest known 
                    reptiles. This innovation frees vertebrates from water dependency.`,
      scientificData: {
        keyInnovation: 'Amniotic egg',
        eggFeatures: ['Waterproof shell', 'Yolk sac', 'Amnion membrane'],
        earlyReptiles: ['Hylonomus', 'Petrolacosaurus'],
        significance: 'Complete land independence',
        location: 'Joggins, Nova Scotia (Hylonomus)'
      },
      coordinates: { lat: 45.7, lng: -64.4 },
      location: 'Joggins Fossil Cliffs, Nova Scotia, Canada'
    },
    
    {
      id: 'synapsid-evolution',
      year: -310000000,
      name: 'Synapsids (Mammal Ancestors) Evolve',
      event: 'Lineage leading to mammals diverges from reptiles',
      type: 'biological',
      importance: 9,
      description: `Synapsids evolve, characterized by a single temporal opening in 
                    the skull. This lineage will eventually lead to mammals. Early 
                    synapsids like Archaeothyris are small, but their descendants 
                    will dominate the Permian.`,
      scientificData: {
        keyFeature: 'Single temporal fenestra',
        earlyForm: 'Archaeothyris (small, lizard-like)',
        futureDescendants: 'Pelycosaurs → Therapsids → Mammals',
        significance: 'Beginning of mammal lineage'
      }
    },
    
    {
      id: 'karoo-ice-age',
      year: -330000000,
      name: 'Late Paleozoic Ice Age Begins',
      event: 'Major glaciation on Gondwana',
      type: 'geological',
      importance: 8,
      description: `A major ice age begins, with ice sheets covering much of 
                    Gondwana (positioned over the South Pole). This glaciation 
                    will continue through the early Permian, leaving extensive 
                    glacial deposits on southern continents.`,
      scientificData: {
        extent: 'Gondwana (modern Africa, S. America, India, Australia, Antarctica)',
        duration: '100+ million years',
        seaLevelEffect: 'Major fluctuations',
        coalSwampEffect: 'Cyclic flooding recorded in coal seams'
      }
    },
    
    {
      id: 'rainforest-collapse',
      year: -305000000,
      name: 'Carboniferous Rainforest Collapse',
      event: 'Climate change devastates tropical forests',
      type: 'catastrophic',
      importance: 8,
      description: `Climate change causes the collapse of the vast Carboniferous 
                    rainforests. As climate becomes drier and more seasonal, 
                    continuous swamp forests fragment. Many large amphibians go 
                    extinct, while reptiles (able to survive drier conditions) 
                    diversify.`,
      scientificData: {
        cause: 'Climate cooling and drying',
        effect: 'Forest fragmentation',
        winners: 'Reptiles, seed plants',
        losers: 'Large amphibians, lycopod forests',
        coalFormation: 'Greatly reduced'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  PERMIAN PERIOD (299 - 252 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'permian-begins',
      year: -299000000,
      name: 'Permian Period Begins',
      event: 'Final period of Paleozoic Era',
      type: 'geological',
      importance: 9,
      description: `The Permian Period begins. Continents continue assembling into 
                    Pangaea, climate becomes increasingly arid, and synapsids 
                    dominate land ecosystems. The period will end with the 
                    greatest mass extinction in Earth's history.`,
      scientificData: {
        climate: 'Increasingly arid, extreme seasonality',
        continents: 'Pangaea nearly complete',
        dominantVertebrates: 'Synapsids (pelycosaurs → therapsids)'
      }
    },
    
    {
      id: 'dimetrodon-dominance',
      year: -290000000,
      name: 'Dimetrodon Dominance',
      event: 'Sail-backed synapsids are top predators',
      type: 'biological',
      importance: 7,
      description: `Dimetrodon, a synapsid with a distinctive sail on its back, 
                    becomes a dominant predator. Despite its reptile-like appearance, 
                    it is more closely related to mammals than to dinosaurs. The 
                    sail may have been used for thermoregulation or display.`,
      scientificData: {
        size: 'Up to 4.6 m long',
        diet: 'Carnivore',
        sailFunction: 'Thermoregulation? Display?',
        classification: 'Synapsid (not a dinosaur!)',
        extinction: '~272 Ma (Olson\'s Extinction)'
      }
    },
    
    {
      id: 'pangaea-assembly',
      year: -280000000,
      name: 'Pangaea Supercontinent Assembles',
      event: 'All continents unite into single landmass',
      type: 'geological',
      importance: 10,
      description: `The supercontinent Pangaea completes assembly as Laurasia and 
                    Gondwana collide. For the first time, all major continents are 
                    united. The interior of Pangaea is extremely arid - the largest 
                    desert in Earth's history.`,
      scientificData: {
        components: 'All major continents',
        area: '~150 million km²',
        interior: 'Massive desert',
        ocean: 'Panthalassa (global ocean)',
        seaway: 'Tethys Sea (eastern gulf)'
      },
      mapState: {
        supercontinent: 'Pangaea',
        position: 'Pole-to-pole',
        oceanCoverage: 0.65,
        interiorClimate: 'Extremely arid'
      }
    },
    
    {
      id: 'olsons-extinction',
      year: -273000000,
      name: 'Olson\'s Extinction',
      event: 'Major extinction among land vertebrates',
      type: 'catastrophic',
      importance: 7,
      description: `A significant extinction event (Olson's Extinction) affects 
                    land vertebrates, particularly the pelycosaurs. Therapsids 
                    (advanced synapsids) subsequently rise to dominance.`,
      scientificData: {
        victims: 'Many pelycosaurs',
        survivors: 'Therapsids',
        cause: 'Climate change?',
        effect: 'Therapsid takeover of ecosystems'
      }
    },
    
    {
      id: 'therapsid-dominance',
      year: -270000000,
      name: 'Therapsids Dominate',
      event: 'Advanced synapsids replace pelycosaurs',
      type: 'biological',
      importance: 8,
      description: `Therapsids ("beast faces") become the dominant land vertebrates. 
                    These advanced synapsids show increasingly mammal-like features: 
                    differentiated teeth, upright gait, and possibly warm-bloodedness.`,
      scientificData: {
        groups: ['Dinocephalians', 'Gorgonopsians', 'Dicynodonts', 'Cynodonts'],
        mammalFeatures: ['Differentiated teeth', 'Upright posture', 'Possible fur'],
        distribution: 'Worldwide (especially South Africa, Russia)',
        significance: 'Direct ancestors of mammals'
      }
    },
    
    {
      id: 'cynodonts-evolve',
      year: -260000000,
      name: 'Cynodonts Evolve',
      event: 'Most mammal-like therapsids appear',
      type: 'biological',
      importance: 9,
      description: `Cynodonts ("dog teeth") evolve - the therapsid group that will 
                    give rise to mammals. They have highly differentiated teeth, 
                    secondary palate (allowing breathing while eating), and may 
                    have had whiskers and fur.`,
      scientificData: {
        features: [
          'Differentiated teeth (incisors, canines, molars)',
          'Secondary palate',
          'Enlarged brain case',
          'Possible whiskers/fur'
        ],
        examples: ['Cynognathus', 'Thrinaxodon'],
        significance: 'Immediate ancestors of mammals'
      }
    },
    
    {
      id: 'capitanian-extinction',
      year: -262000000,
      name: 'Capitanian Extinction',
      event: 'Major extinction precedes the Great Dying',
      type: 'catastrophic',
      importance: 8,
      description: `The Capitanian extinction, recently recognized as a major event, 
                    kills approximately 35% of marine species. It may be linked to 
                    the Emeishan volcanic eruptions in China. This event weakens 
                    ecosystems before the even greater end-Permian extinction.`,
      scientificData: {
        extinction: '~35% of marine genera',
        cause: 'Emeishan Traps volcanism',
        location: 'China',
        timing: '8 million years before end-Permian'
      }
    },
    
    {
      id: 'glossopteris-flora',
      year: -270000000,
      name: 'Glossopteris Dominates Gondwana',
      event: 'Seed fern becomes dominant southern plant',
      type: 'biological',
      importance: 7,
      description: `Glossopteris, a seed fern, dominates vegetation across Gondwana. 
                    Its fossils on multiple southern continents would later provide 
                    key evidence for continental drift and Pangaea.`,
      scientificData: {
        distribution: 'All Gondwanan continents',
        significance: 'Evidence for continental drift',
        historicalImportance: 'Used by Wegener (1912) to support Pangaea',
        habitat: 'Temperate forests of southern Pangaea'
      }
    },
    
    {
      id: 'siberian-traps-begin',
      year: -252200000,
      name: 'Siberian Traps Eruptions Begin',
      event: 'Largest volcanic eruption in Earth history begins',
      type: 'catastrophic',
      importance: 10,
      description: `The largest volcanic event in the Phanerozoic begins. The Siberian 
                    Traps will erupt approximately 3 million km³ of lava over 1 million 
                    years, covering an area the size of Western Europe. Volcanic gases 
                    will trigger the greatest mass extinction in Earth's history.`,
      scientificData: {
        lavaVolume: '3 million km³',
        area: '7 million km² (extent)',
        duration: '~1 million years',
        gases: ['CO2', 'SO2', 'HCl', 'HF'],
        coalInteraction: 'Intruded through coal deposits, releasing more CO2'
      },
      coordinates: { lat: 67.0, lng: 100.0 },
      location: 'Siberia, Russia'
    },
    
    {
      id: 'permian-triassic-extinction',
      year: -252000000,
      name: 'Permian-Triassic Mass Extinction ("The Great Dying")',
      event: 'Greatest mass extinction in Earth history - 96% of species lost',
      type: 'catastrophic',
      importance: 10,
      description: `The Permian-Triassic extinction, known as "The Great Dying," is 
                    the most severe mass extinction in Earth's history. Approximately 
                    96% of marine species and 70% of land vertebrate species go extinct. 
                    The cause is the Siberian Traps volcanism, which triggered global 
                    warming, ocean acidification, and anoxia.`,
      scientificData: {
        marinExtinction: '96% of species',
        landExtinction: '70% of vertebrate species',
        insectExtinction: 'Only mass extinction of insects',
        trilobites: 'Final extinction (after 300 million years)',
        cause: {
          primary: 'Siberian Traps volcanism',
          mechanisms: [
            'Global warming (+8°C)',
            'Ocean acidification',
            'Ocean anoxia',
            'Ozone depletion',
            'Acid rain',
            'Hydrogen sulfide release'
          ]
        },
        recovery: '10 million years',
        rank: 'Largest extinction event ever'
      },
      mapState: {
        climate: 'Extreme greenhouse',
        oceanState: 'Anoxic, acidic',
        biodiversity: 0.04
      }
    },
    
    {
      id: 'paleozoic-ends',
      year: -252000000,
      name: 'End of Paleozoic Era',
      event: 'Mesozoic Era begins - Age of Dinosaurs awaits',
      type: 'geological',
      importance: 10,
      description: `The Paleozoic Era ends with Earth devastated by the Great Dying. 
                    Life is at its lowest point since the Cambrian. But from the 
                    survivors, a new world will emerge. The Mesozoic Era - the Age 
                    of Dinosaurs - is about to begin.`,
      scientificData: {
        survivors: [
          'Few marine invertebrates',
          'Some fish',
          'Lystrosaurus (therapsid)',
          'Small cynodonts',
          'Early archosaurs'
        ],
        nextEra: 'Mesozoic (Age of Dinosaurs)',
        recovery: 'Slow (10+ million years)'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      cambrian: { O2: '15%', CO2: '4500 ppm' },
      ordovician: { O2: '13%', CO2: '4200 ppm' },
      silurian: { O2: '14%', CO2: '4500 ppm' },
      devonian: { O2: '15%', CO2: '2200 ppm' },
      carboniferous: { O2: '35%', CO2: '800 ppm' },
      permian: { O2: '23%', CO2: '900 ppm' },
      notes: 'Oxygen peaked in Carboniferous, enabling giant insects'
    },
    
    climate: {
      cambrian: 'Warm greenhouse, no polar ice',
      ordovician: 'Warm → glaciation at end',
      silurian: 'Warm, stable',
      devonian: 'Very warm greenhouse',
      carboniferous: 'Initially warm, then ice age',
      permian: 'Arid, extreme seasons'
    },
    
    continents: {
      cambrian: 'Gondwana + scattered small continents',
      ordovician: 'Gondwana + Laurentia + Baltica',
      silurian: 'Continents approaching',
      devonian: 'Euramerica forms, Gondwana separate',
      carboniferous: 'Pangaea assembling',
      permian: 'Pangaea complete'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE SUMMARY
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    marineLife: [
      { name: 'Trilobites', span: 'Cambrian-Permian', note: 'Dominant early, extinct at end' },
      { name: 'Brachiopods', span: 'Throughout', note: 'Dominant shellfish' },
      { name: 'Corals', span: 'Ordovician-present', note: 'Reef builders' },
      { name: 'Crinoids', span: 'Ordovician-present', note: 'Abundant in Carboniferous' },
      { name: 'Fish', span: 'Cambrian-present', note: 'Diversified enormously' },
      { name: 'Ammonoids', span: 'Devonian-present', note: 'Important index fossils' }
    ],
    
    landLife: [
      { name: 'Vascular plants', appeared: 'Silurian', note: 'First forests by Devonian' },
      { name: 'Arthropods', appeared: 'Silurian', note: 'First land animals' },
      { name: 'Insects', appeared: 'Devonian', note: 'First flight' },
      { name: 'Amphibians', appeared: 'Devonian', note: 'First tetrapods' },
      { name: 'Reptiles', appeared: 'Carboniferous', note: 'Amniotic egg' },
      { name: 'Synapsids', appeared: 'Carboniferous', note: 'Mammal ancestors' }
    ],
    
    keyInnovations: [
      'Hard shells and skeletons (Cambrian)',
      'Jaws (Silurian)',
      'Vascular tissue in plants (Silurian)',
      'Tetrapod limbs (Devonian)',
      'Flight (insects, Devonian)',
      'Amniotic egg (Carboniferous)',
      'Seeds (Devonian-Carboniferous)'
    ],
    
    massExtinctions: [
      { name: 'Late Ordovician', severity: '85% species', rank: 2 },
      { name: 'Late Devonian', severity: '75% species', rank: 4 },
      { name: 'Permian-Triassic', severity: '96% species', rank: 1 }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KEY FOSSIL SITES
  // ═══════════════════════════════════════════════════════════════════════
  
  keyFormations: [
    {
      name: 'Burgess Shale',
      age: '508 Ma',
      location: 'British Columbia, Canada',
      significance: 'Best Cambrian soft-body preservation',
      coordinates: { lat: 51.4, lng: -116.5 }
    },
    {
      name: 'Chengjiang',
      age: '518 Ma',
      location: 'Yunnan, China',
      significance: 'Oldest vertebrates, exceptional preservation',
      coordinates: { lat: 24.9, lng: 102.6 }
    },
    {
      name: 'Rhynie Chert',
      age: '410 Ma',
      location: 'Scotland',
      significance: 'Oldest land ecosystem preserved',
      coordinates: { lat: 57.3, lng: -2.8 }
    },
    {
      name: 'Miguasha',
      age: '380 Ma',
      location: 'Quebec, Canada',
      significance: 'Fish-tetrapod transition fossils',
      coordinates: { lat: 48.1, lng: -66.4 }
    },
    {
      name: 'Joggins Fossil Cliffs',
      age: '310 Ma',
      location: 'Nova Scotia, Canada',
      significance: 'Earliest reptiles, coal forest fossils',
      coordinates: { lat: 45.7, lng: -64.4 }
    },
    {
      name: 'Karoo Supergroup',
      age: '300-180 Ma',
      location: 'South Africa',
      significance: 'Best therapsid/synapsid fossils',
      coordinates: { lat: -32.0, lng: 24.0 }
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(PALEOZOIC_ERA);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PALEOZOIC_ERA;
}

console.log('🌿 Paleozoic Era data loaded: ' + PALEOZOIC_ERA.events.length + ' events');
