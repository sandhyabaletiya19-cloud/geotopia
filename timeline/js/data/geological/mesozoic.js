// js/data/geological/mesozoic.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  MESOZOIC ERA - "The Age of Dinosaurs"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 252 - 66 Million Years Ago (186 million years)
 *  Named after: Greek "meso" (middle) + "zoic" (life)
 *  
 *  The age when:
 *  - Dinosaurs dominate the land
 *  - First mammals and birds evolve
 *  - Flowering plants transform landscapes
 *  - Pangaea breaks apart
 *  - Ends with asteroid impact and mass extinction
 *  
 *  Three periods: Triassic, Jurassic, Cretaceous
 * ═══════════════════════════════════════════════════════════════════════════
 */

const MESOZOIC_ERA = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'mesozoic',
  name: 'Mesozoic Era',
  etymology: 'From Greek "meso" (middle) + "zoic" (life) - "Middle Life"',
  nickname: 'Age of Reptiles / Age of Dinosaurs',
  
  timeRange: {
    start: -252000000,  // 252 million years ago
    end: -66000000,     // 66 million years ago
    duration: 186000000 // 186 million years
  },
  
  color: '#32CD32',
  gradient: 'linear-gradient(135deg, #228B22, #32CD32, #98FB98)',
  
  description: `The Mesozoic Era is the legendary "Age of Dinosaurs." Beginning after the 
                devastating Permian extinction, life recovered and diversified spectacularly. 
                Dinosaurs evolved and dominated terrestrial ecosystems for over 160 million 
                years. The first mammals and birds appeared. Flowering plants transformed 
                landscapes. Pangaea broke apart, creating modern continents. The era ended 
                dramatically when an asteroid struck Earth, causing the fifth mass extinction.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Periods)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'triassic',
      name: 'Triassic Period',
      timeRange: { start: -252000000, end: -201000000 },
      duration: 51000000,
      description: 'Recovery from extinction. First dinosaurs, mammals, and pterosaurs.',
      keyEvents: ['recovery', 'first-dinosaurs', 'first-mammals'],
      namedAfter: 'Threefold rock division in Germany',
      epochs: [
        { name: 'Early Triassic', range: { start: -252000000, end: -247000000 } },
        { name: 'Middle Triassic', range: { start: -247000000, end: -237000000 } },
        { name: 'Late Triassic', range: { start: -237000000, end: -201000000 } }
      ]
    },
    {
      id: 'jurassic',
      name: 'Jurassic Period',
      timeRange: { start: -201000000, end: -145000000 },
      duration: 56000000,
      description: 'Dinosaur dominance. First birds. Pangaea begins breaking.',
      keyEvents: ['sauropod-giants', 'first-birds', 'pangaea-breakup'],
      namedAfter: 'Jura Mountains, Switzerland',
      epochs: [
        { name: 'Early Jurassic', range: { start: -201000000, end: -174000000 } },
        { name: 'Middle Jurassic', range: { start: -174000000, end: -164000000 } },
        { name: 'Late Jurassic', range: { start: -164000000, end: -145000000 } }
      ]
    },
    {
      id: 'cretaceous',
      name: 'Cretaceous Period',
      timeRange: { start: -145000000, end: -66000000 },
      duration: 79000000,
      description: 'Flowering plants spread. T. rex evolves. Ends with asteroid impact.',
      keyEvents: ['flowering-plants', 'tyrannosaurus', 'asteroid-impact'],
      namedAfter: 'Latin "creta" (chalk) - chalk deposits',
      epochs: [
        { name: 'Early Cretaceous', range: { start: -145000000, end: -100000000 } },
        { name: 'Late Cretaceous', range: { start: -100000000, end: -66000000 } }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  TRIASSIC PERIOD (252 - 201 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'mesozoic-begins',
      year: -252000000,
      name: 'Mesozoic Era Begins',
      event: 'Recovery from the Great Dying begins',
      type: 'geological',
      importance: 10,
      description: `The Mesozoic Era begins with Earth devastated. Only 4% of species 
                    survived the Permian extinction. Ecosystems are dominated by 
                    Lystrosaurus, a pig-sized therapsid that comprises 95% of land 
                    vertebrate fossils from this time.`,
      scientificData: {
        survivors: '4% of species',
        dominantVertebrate: 'Lystrosaurus (therapsid)',
        climate: 'Still hot and toxic',
        recoveryTime: '10 million years (full)'
      }
    },
    
    {
      id: 'lystrosaurus-dominance',
      year: -252000000,
      name: 'Lystrosaurus Dominance',
      event: 'Single species comprises 95% of land vertebrates',
      type: 'biological',
      importance: 8,
      description: `In the aftermath of the extinction, the therapsid Lystrosaurus 
                    achieves unprecedented dominance. This pig-sized burrowing 
                    herbivore comprises ~95% of all land vertebrate fossils from 
                    Early Triassic - the most dominant large animal ever.`,
      scientificData: {
        abundance: '95% of land vertebrate fossils',
        size: '0.6-2.5 m long',
        diet: 'Herbivore',
        adaptation: 'Burrowing (may have helped survival)',
        distribution: 'Worldwide (Pangaea)'
      }
    },
    
    {
      id: 'archosaur-radiation',
      year: -250000000,
      name: 'Archosaur Radiation',
      event: 'Ruling reptiles begin diversifying',
      type: 'biological',
      importance: 9,
      description: `Archosaurs ("ruling reptiles") begin their radiation. This group 
                    will give rise to crocodilians, pterosaurs, and dinosaurs. 
                    Early archosaurs like Proterosuchus establish the lineage.`,
      scientificData: {
        definition: 'Diapsids with specific ankle/skull features',
        earlyForms: ['Proterosuchus', 'Erythrosuchus'],
        futureLineages: ['Crocodilians', 'Pterosaurs', 'Dinosaurs', 'Birds'],
        significance: 'Will dominate for 185 million years'
      }
    },
    
    {
      id: 'first-marine-reptiles',
      year: -248000000,
      name: 'Marine Reptiles Evolve',
      event: 'Reptiles return to the sea',
      type: 'biological',
      importance: 8,
      description: `Reptiles begin returning to the sea. Ichthyosaurs evolve from 
                    land reptiles, becoming fully aquatic. Other groups like 
                    nothosaurs and placodonts also adapt to marine life.`,
      scientificData: {
        groups: ['Ichthyosaurs', 'Nothosaurs', 'Placodonts'],
        adaptations: ['Streamlined bodies', 'Flippers', 'Live birth'],
        ichthyosaurFeatures: 'Dolphin-like convergent evolution'
      }
    },
    
    {
      id: 'recovery-complete',
      year: -242000000,
      name: 'Ecosystem Recovery Complete',
      event: 'Full recovery from Permian extinction',
      type: 'geological',
      importance: 8,
      description: `Approximately 10 million years after the Great Dying, global 
                    ecosystems have fully recovered. Biodiversity reaches pre-extinction 
                    levels. Complex food webs are reestablished.`,
      scientificData: {
        recoveryTime: '10 million years',
        biodiversity: 'Comparable to pre-extinction',
        newEcosystems: 'Completely restructured',
        dominantGroups: 'Archosaurs rising'
      }
    },
    
    {
      id: 'first-pterosaurs',
      year: -230000000,
      name: 'First Pterosaurs',
      event: 'First vertebrates to evolve powered flight',
      type: 'biological',
      importance: 10,
      description: `Pterosaurs evolve - the first vertebrates to achieve powered 
                    flight. Early pterosaurs like Eudimorphodon are relatively small 
                    with long tails and teeth. They will eventually reach enormous 
                    sizes with wingspans up to 11 meters.`,
      scientificData: {
        firstPterosaur: 'Eudimorphodon',
        wingspan: '1 m (early species)',
        flightMechanism: 'Wing membrane on elongated 4th finger',
        maxWingspan: '10-11 m (Quetzalcoatlus, Cretaceous)',
        significance: 'First vertebrate fliers (100 million years before birds)'
      }
    },
    
    {
      id: 'first-dinosaurs',
      year: -233000000,
      name: 'First Dinosaurs Appear',
      event: 'Small, bipedal reptiles begin an incredible dynasty',
      type: 'biological',
      importance: 10,
      description: `The first dinosaurs evolve in South America. Early dinosaurs 
                    like Eoraptor and Herrerasaurus are small, bipedal predators. 
                    They will eventually dominate terrestrial ecosystems for over 
                    160 million years.`,
      scientificData: {
        firstDinosaurs: ['Eoraptor', 'Herrerasaurus', 'Nyasasaurus (possible earlier)'],
        size: '1-3 m',
        posture: 'Bipedal, upright legs',
        diet: 'Carnivorous (mostly)',
        location: 'South America (Gondwana)'
      },
      coordinates: { lat: -30.0, lng: -68.0 },
      location: 'Ischigualasto Formation, Argentina'
    },
    
    {
      id: 'dinosaur-diversification',
      year: -230000000,
      name: 'Dinosaur Diversification Begins',
      event: 'Major dinosaur lineages emerge',
      type: 'biological',
      importance: 9,
      description: `Dinosaurs begin diversifying into the major lineages: Theropods 
                    (bipedal carnivores, including future birds), Sauropodomorphs 
                    (long-necked herbivores), and Ornithischians (bird-hipped herbivores).`,
      scientificData: {
        saurischia: {
          theropods: 'Bipedal carnivores → birds',
          sauropodomorphs: 'Long-necked herbivores'
        },
        ornithischia: 'Bird-hipped herbivores (Stegosaurus, Triceratops ancestors)',
        posture: 'Erect, legs under body (key advantage)'
      }
    },
    
    {
      id: 'first-mammals',
      year: -225000000,
      name: 'First True Mammals',
      event: 'Tiny shrew-like mammals evolve',
      type: 'biological',
      importance: 10,
      description: `The first true mammals evolve from cynodont therapsids. Early 
                    mammals like Morganucodon are tiny, nocturnal insectivores. 
                    They will remain small and inconspicuous throughout the Age 
                    of Dinosaurs.`,
      scientificData: {
        firstMammals: ['Morganucodon', 'Megazostrodon'],
        size: '10 cm',
        weight: '20-100 g',
        features: [
          'Three middle ear bones',
          'Single lower jaw bone',
          'Differentiated teeth',
          'Likely fur and milk'
        ],
        lifestyle: 'Nocturnal insectivores'
      }
    },
    
    {
      id: 'first-crocodilians',
      year: -230000000,
      name: 'First Crocodilians',
      event: 'Modern crocodile ancestors appear',
      type: 'biological',
      importance: 7,
      description: `The first crocodilians evolve. Unlike modern crocodiles, many 
                    early species are fully terrestrial and some are even bipedal. 
                    They will coexist with dinosaurs throughout the Mesozoic.`,
      scientificData: {
        earlyForms: ['Terrestrial', 'Some bipedal'],
        modernForm: 'Aquatic ambush predators (Jurassic onwards)',
        survival: 'Survived K-Pg extinction'
      }
    },
    
    {
      id: 'triassic-jurassic-extinction',
      year: -201000000,
      name: 'Triassic-Jurassic Extinction',
      event: 'Fourth major mass extinction clears way for dinosaurs',
      type: 'catastrophic',
      importance: 9,
      description: `The Triassic-Jurassic extinction kills approximately 80% of 
                    species. The cause is likely the Central Atlantic Magmatic 
                    Province (CAMP) volcanism as Pangaea begins breaking apart. 
                    This extinction eliminates dinosaur competitors, allowing 
                    them to dominate the Jurassic.`,
      scientificData: {
        extinction: '~80% of species',
        cause: 'CAMP volcanism (Pangaea rifting)',
        victims: [
          'Many archosaurs (non-dinosaur)',
          'Large amphibians',
          'Many marine reptiles',
          'Conodonts (final extinction)'
        ],
        survivors: 'Dinosaurs, mammals, pterosaurs, crocodilians',
        significance: 'Dinosaurs become dominant'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  JURASSIC PERIOD (201 - 145 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'jurassic-begins',
      year: -201000000,
      name: 'Jurassic Period Begins',
      event: 'Age of giant dinosaurs begins',
      type: 'geological',
      importance: 9,
      description: `The Jurassic Period begins with dinosaurs poised for dominance. 
                    Freed from competition, dinosaurs will diversify spectacularly, 
                    reaching enormous sizes. Pangaea begins breaking apart.`,
      scientificData: {
        climate: 'Warm greenhouse, high CO2',
        sealevel: 'Rising',
        continents: 'Pangaea breaking up',
        vegetation: 'Conifers, ferns, cycads dominant'
      }
    },
    
    {
      id: 'pangaea-breakup-begins',
      year: -200000000,
      name: 'Pangaea Begins Breaking Apart',
      event: 'Supercontinent rifts into Laurasia and Gondwana',
      type: 'geological',
      importance: 10,
      description: `Pangaea begins breaking apart, rifting into Laurasia (north) 
                    and Gondwana (south). The Atlantic Ocean begins forming. This 
                    separation will eventually create the modern continents.`,
      scientificData: {
        rift: 'Central Atlantic rift',
        newOcean: 'Proto-Atlantic (Central Atlantic)',
        northernLandmass: 'Laurasia (N. America + Eurasia)',
        southernLandmass: 'Gondwana (S. America + Africa + India + Australia + Antarctica)',
        process: 'Continued throughout Mesozoic'
      },
      mapState: {
        supercontinent: 'Pangaea (breaking)',
        rift: 'Atlantic opening',
        oceanCoverage: 0.60
      }
    },
    
    {
      id: 'sauropod-giants',
      year: -180000000,
      name: 'Giant Sauropods Evolve',
      event: 'Largest land animals ever begin their reign',
      type: 'biological',
      importance: 10,
      description: `Sauropod dinosaurs reach gigantic sizes. With their long necks, 
                    small heads, and columnar legs, they become the largest land 
                    animals ever to exist. Some species exceed 30 meters in length 
                    and 70 tonnes in weight.`,
      scientificData: {
        examples: ['Brachiosaurus', 'Diplodocus', 'Apatosaurus'],
        maxLength: '35+ m (Supersaurus)',
        maxWeight: '70+ tonnes (Argentinosaurus)',
        features: [
          'Long neck (up to 15 m)',
          'Small head',
          'Columnar legs',
          'Hollow bones'
        ],
        diet: 'Herbivore (browse high vegetation)'
      }
    },
    
    {
      id: 'stegosaurus-evolution',
      year: -160000000,
      name: 'Stegosaurus and Armored Dinosaurs',
      event: 'Plated and spiked dinosaurs evolve',
      type: 'biological',
      importance: 8,
      description: `Stegosaurs and other armored dinosaurs (thyreophora) diversify. 
                    Stegosaurus, with its distinctive back plates and tail spikes, 
                    is among the most recognizable dinosaurs.`,
      scientificData: {
        examples: ['Stegosaurus', 'Kentrosaurus'],
        size: '9 m long, 5 tonnes',
        features: [
          'Dorsal plates (thermoregulation? display?)',
          'Tail spikes (thagomizer)',
          'Small brain'
        ],
        brainSize: 'Walnut-sized (myth of "second brain" false)'
      }
    },
    
    {
      id: 'allosaurus-apex-predator',
      year: -155000000,
      name: 'Allosaurus: Jurassic Apex Predator',
      event: 'Large theropod dominates Late Jurassic',
      type: 'biological',
      importance: 8,
      description: `Allosaurus becomes the apex predator of Late Jurassic North 
                    America. At up to 12 meters long, it hunted large herbivores 
                    including sauropods and stegosaurs.`,
      scientificData: {
        size: '8.5-12 m long',
        weight: '2-3 tonnes',
        diet: 'Large herbivores',
        huntingStyle: 'Possibly pack hunting',
        distribution: 'North America, Portugal'
      },
      coordinates: { lat: 39.0, lng: -110.0 },
      location: 'Morrison Formation, Western USA'
    },
    
    {
      id: 'archaeopteryx',
      year: -150000000,
      name: 'Archaeopteryx: First Bird',
      event: 'Feathered dinosaur bridges gap to birds',
      type: 'biological',
      importance: 10,
      description: `Archaeopteryx, discovered in 1861, provides crucial evidence 
                    of dinosaur-bird evolution. This crow-sized animal has dinosaur 
                    features (teeth, clawed wings, bony tail) combined with bird 
                    features (feathers, wishbone, flight capability).`,
      scientificData: {
        size: '50 cm long',
        weight: '0.8-1 kg',
        dinosaurFeatures: ['Teeth', 'Clawed fingers', 'Bony tail'],
        birdFeatures: ['Feathers', 'Wishbone (furcula)', 'Wings'],
        flightCapability: 'Possibly limited/gliding',
        discovery: '1861, Solnhofen limestone, Germany'
      },
      coordinates: { lat: 48.9, lng: 11.0 },
      location: 'Solnhofen, Bavaria, Germany'
    },
    
    {
      id: 'morrison-formation',
      year: -155000000,
      name: 'Morrison Formation Ecosystem',
      event: 'Rich Late Jurassic ecosystem in North America',
      type: 'biological',
      importance: 8,
      description: `The Morrison Formation preserves one of the richest dinosaur 
                    ecosystems ever discovered. Giants like Diplodocus, Brachiosaurus, 
                    Stegosaurus, and Allosaurus coexisted in a semi-arid savanna.`,
      scientificData: {
        age: '156-146 Ma',
        extent: '1.5 million km² (13 US states)',
        dinosaurs: [
          'Diplodocus',
          'Brachiosaurus',
          'Apatosaurus',
          'Stegosaurus',
          'Allosaurus',
          'Ceratosaurus'
        ],
        environment: 'Semi-arid, seasonal rivers',
        significance: 'Most studied dinosaur formation'
      },
      coordinates: { lat: 39.0, lng: -107.0 },
      location: 'Western United States'
    },
    
    {
      id: 'first-flowering-plants',
      year: -140000000,
      name: 'First Flowering Plants (Angiosperms)',
      event: 'Most successful plant group begins',
      type: 'biological',
      importance: 10,
      description: `The first flowering plants (angiosperms) appear. Initially 
                    inconspicuous, they will eventually dominate plant communities 
                    worldwide. Their flowers enable efficient insect pollination, 
                    and their seeds can be dispersed by animals.`,
      scientificData: {
        firstFossils: 'Montsechia, Archaefructus',
        keyInnovations: [
          'Flowers (attract pollinators)',
          'Enclosed seeds (fruits)',
          'Double fertilization',
          'Fast reproduction'
        ],
        coevolution: 'With insects',
        currentDiversity: '~300,000 species (90% of plants)'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  CRETACEOUS PERIOD (145 - 66 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'cretaceous-begins',
      year: -145000000,
      name: 'Cretaceous Period Begins',
      event: 'Final period of Mesozoic Era',
      type: 'geological',
      importance: 9,
      description: `The Cretaceous Period begins. It will be the longest period of 
                    the Mesozoic (79 million years) and see dinosaurs reach their 
                    peak diversity. Flowering plants will transform landscapes.`,
      scientificData: {
        climate: 'Warm greenhouse, no polar ice',
        sealevel: 'Highest of Mesozoic',
        etymology: 'Latin "creta" (chalk) - chalk deposits',
        duration: '79 million years (longest Mesozoic period)'
      }
    },
    
    {
      id: 'gondwana-breakup',
      year: -130000000,
      name: 'Gondwana Begins Breaking Up',
      event: 'Southern supercontinent fragments',
      type: 'geological',
      importance: 9,
      description: `Gondwana begins breaking apart. Africa and South America 
                    separate, opening the South Atlantic. India begins its 
                    journey northward toward Asia.`,
      scientificData: {
        separations: [
          'South America ↔ Africa',
          'India → northward drift',
          'Australia + Antarctica separate later'
        ],
        newOceans: ['South Atlantic'],
        indiaSpeed: '15-20 cm/year (fastest plate ever)'
      },
      mapState: {
        continents: 'Modern shapes emerging',
        atlantic: 'Widening',
        india: 'Drifting north'
      }
    },
    
    {
      id: 'spinosaurus',
      year: -100000000,
      name: 'Spinosaurus: Largest Carnivorous Dinosaur',
      event: 'Semi-aquatic giant evolves in Africa',
      type: 'biological',
      importance: 8,
      description: `Spinosaurus, possibly the largest carnivorous dinosaur ever, 
                    thrives in North Africa. Up to 15 meters long with a distinctive 
                    sail, it may have been semi-aquatic, hunting fish in rivers.`,
      scientificData: {
        size: '12-15 m long',
        weight: '7-20 tonnes',
        sail: '1.65 m tall (display? thermoregulation?)',
        diet: 'Fish, possibly other prey',
        lifestyle: 'Semi-aquatic (recent research)',
        location: 'North Africa'
      },
      coordinates: { lat: 30.0, lng: 10.0 },
      location: 'Kem Kem beds, Morocco'
    },
    
    {
      id: 'flowering-plant-radiation',
      year: -100000000,
      name: 'Flowering Plant Radiation',
      event: 'Angiosperms become dominant vegetation',
      type: 'biological',
      importance: 9,
      description: `Flowering plants undergo explosive diversification, becoming 
                    dominant in most ecosystems. Grasses, though present, won't 
                    become dominant until after the Mesozoic. Insect pollinators 
                    coevolve with flowers.`,
      scientificData: {
        diversification: 'Rapid expansion',
        dominance: 'Most ecosystems by Late Cretaceous',
        coevolution: 'Bees, beetles, butterflies',
        consequences: 'Changed herbivore diets and ecosystems'
      }
    },
    
    {
      id: 'cretaceous-seaway',
      year: -95000000,
      name: 'Western Interior Seaway',
      event: 'Shallow sea divides North America',
      type: 'geological',
      importance: 7,
      description: `High sea levels flood central North America, creating the 
                    Western Interior Seaway. This shallow sea divides the continent 
                    into Laramidia (west) and Appalachia (east), isolating dinosaur 
                    populations.`,
      scientificData: {
        extent: 'Gulf of Mexico to Arctic',
        width: '1,000 km',
        depth: 'Shallow (800 m max)',
        effect: 'Isolated dinosaur populations, separate evolution'
      }
    },
    
    {
      id: 'mosasaur-dominance',
      year: -90000000,
      name: 'Mosasaurs Dominate Oceans',
      event: 'Giant marine lizards become apex predators',
      type: 'biological',
      importance: 8,
      description: `Mosasaurs, giant marine lizards related to modern monitors, 
                    become the dominant ocean predators. Some species reach 17 
                    meters long. They replace ichthyosaurs, which decline.`,
      scientificData: {
        maxSize: '17 m (Mosasaurus)',
        relationship: 'Close relatives of monitor lizards',
        diet: 'Fish, ammonites, other marine reptiles',
        distribution: 'Worldwide',
        adaptations: 'Flippers, streamlined body, powerful tail'
      }
    },
    
    {
      id: 'tyrannosaurus-rex',
      year: -68000000,
      name: 'Tyrannosaurus rex Evolves',
      event: 'Most famous dinosaur appears in North America',
      type: 'biological',
      importance: 10,
      description: `Tyrannosaurus rex, the most famous dinosaur, evolves in Late 
                    Cretaceous North America. At 12 meters long and 8-14 tonnes, 
                    with a bite force of 57,000 Newtons (strongest of any land 
                    animal), it is the ultimate land predator.`,
      scientificData: {
        size: '12 m long, 3.7 m tall at hip',
        weight: '8-14 tonnes',
        biteForce: '57,000 N (strongest ever)',
        teeth: '15 cm long, bone-crushing',
        arms: 'Small but powerful',
        senses: 'Excellent smell, binocular vision',
        speed: '20-25 km/h (debated)',
        timespan: '68-66 Ma (only 2 million years!)'
      },
      coordinates: { lat: 46.5, lng: -107.0 },
      location: 'Hell Creek Formation, Montana, USA'
    },
    
    {
      id: 'triceratops',
      year: -68000000,
      name: 'Triceratops Evolves',
      event: 'Three-horned dinosaur is last great herbivore',
      type: 'biological',
      importance: 9,
      description: `Triceratops, with its three horns and large frill, is among 
                    the last and largest ceratopsians. It coexisted with T. rex, 
                    and evidence shows they battled - healed wounds on Triceratops 
                    frills match T. rex bite marks.`,
      scientificData: {
        size: '9 m long',
        weight: '6-12 tonnes',
        horns: '3 (two brow, one nose)',
        frill: '2 m wide (defense? display?)',
        diet: 'Herbivore (low vegetation)',
        battleEvidence: 'Healed wounds from T. rex attacks'
      }
    },
    
    {
      id: 'hell-creek-ecosystem',
      year: -67000000,
      name: 'Hell Creek Ecosystem',
      event: 'Last great dinosaur community before extinction',
      type: 'biological',
      importance: 9,
      description: `The Hell Creek Formation preserves the last dinosaur ecosystem 
                    before the asteroid impact. T. rex, Triceratops, Edmontosaurus, 
                    Pachycephalosaurus, and Ankylosaurus represent the final 
                    flowering of dinosaur diversity.`,
      scientificData: {
        age: '67-66 Ma',
        location: 'Montana, Dakotas, Wyoming',
        keyDinosaurs: [
          'Tyrannosaurus rex',
          'Triceratops',
          'Edmontosaurus',
          'Pachycephalosaurus',
          'Ankylosaurus',
          'Thescelosaurus'
        ],
        mammals: '~20 species, all small',
        significance: 'Best record of end-Cretaceous life'
      },
      coordinates: { lat: 47.0, lng: -106.0 },
      location: 'Hell Creek Formation, Montana, USA'
    },
    
    {
      id: 'deccan-traps-begin',
      year: -66500000,
      name: 'Deccan Traps Eruptions Begin',
      event: 'Massive volcanism in India stresses ecosystems',
      type: 'catastrophic',
      importance: 9,
      description: `Massive flood basalt volcanism begins in India, creating the 
                    Deccan Traps. These eruptions, spanning 30,000 years before 
                    and after the asteroid impact, may have already stressed 
                    ecosystems. The asteroid was the final blow.`,
      scientificData: {
        lavaVolume: '1.5 million km³',
        area: '500,000 km²',
        duration: '~1 million years total',
        peakEruptions: 'Around impact time',
        possibleEffects: ['Climate change', 'Ocean acidification', 'Stress on life']
      },
      coordinates: { lat: 19.0, lng: 75.0 },
      location: 'Deccan Plateau, India'
    },
    
    {
      id: 'chicxulub-impact',
      year: -66000000,
      name: 'Chicxulub Asteroid Impact',
      event: '10-km asteroid strikes Earth, ending the Mesozoic',
      type: 'catastrophic',
      importance: 10,
      description: `A 10-kilometer asteroid strikes the Yucatan Peninsula at 
                    72,000 km/h, releasing energy equivalent to 100 trillion tonnes 
                    of TNT - 10 billion times more powerful than the Hiroshima bomb. 
                    The impact creates a 180-km crater and triggers global 
                    devastation.`,
      scientificData: {
        impactorSize: '10-15 km diameter',
        velocity: '20 km/s (72,000 km/h)',
        energy: '10^23 Joules (100 trillion tonnes TNT)',
        craterSize: '180 km diameter, 20 km deep',
        ejecta: 'Global distribution',
        tsunami: '1.5 km high initial wave',
        earthquakes: 'Magnitude 11-12',
        immediateEffects: [
          'Fireball visible worldwide',
          'Global wildfires',
          'Impact winter (years)',
          'Acid rain',
          '75% species extinction'
        ]
      },
      coordinates: { lat: 21.4, lng: -89.5 },
      location: 'Chicxulub, Yucatan Peninsula, Mexico'
    },
    
    {
      id: 'kt-extinction',
      year: -66000000,
      name: 'Cretaceous-Paleogene Mass Extinction',
      event: 'Fifth major extinction ends Age of Dinosaurs',
      type: 'catastrophic',
      importance: 10,
      description: `The Cretaceous-Paleogene (K-Pg) extinction kills approximately 
                    76% of all species, including all non-avian dinosaurs, pterosaurs, 
                    mosasaurs, and ammonites. The Age of Dinosaurs ends after 165 
                    million years. But birds (avian dinosaurs) survive, as do mammals.`,
      scientificData: {
        extinction: '76% of species',
        dinosaurs: 'All non-avian dinosaurs extinct',
        otherVictims: [
          'Pterosaurs',
          'Marine reptiles (mosasaurs, plesiosaurs)',
          'Ammonites',
          'Many plants'
        ],
        survivors: [
          'Birds (avian dinosaurs)',
          'Mammals',
          'Crocodilians',
          'Turtles',
          'Amphibians',
          'Fish',
          'Small reptiles'
        ],
        recoveryTime: '~10 million years'
      }
    },
    
    {
      id: 'mesozoic-ends',
      year: -66000000,
      name: 'End of Mesozoic Era',
      event: 'Cenozoic Era begins - Age of Mammals',
      type: 'geological',
      importance: 10,
      description: `The Mesozoic Era ends in catastrophe. After 186 million years 
                    of dinosaur dominance, the Age of Mammals is about to begin. 
                    From the ashes, surviving mammals will diversify to fill the 
                    ecological niches left by dinosaurs.`,
      scientificData: {
        mesozoicDuration: '186 million years',
        dinosaurDuration: '165 million years',
        nextEra: 'Cenozoic (Age of Mammals)',
        survivalKey: 'Small body size, burrowing, diet flexibility'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      triassic: { O2: '16%', CO2: '1750 ppm' },
      jurassic: { O2: '26%', CO2: '1950 ppm' },
      cretaceous: { O2: '30%', CO2: '1700 ppm' },
      notes: 'High CO2 greenhouse, generally warm'
    },
    
    climate: {
      overall: 'Warm greenhouse (no polar ice caps)',
      triassic: 'Hot, arid interior',
      jurassic: 'Warm and humid',
      cretaceous: 'Warmest of Mesozoic, high sea levels'
    },
    
    continents: {
      triassic: 'Pangaea intact',
      jurassic: 'Pangaea breaking into Laurasia + Gondwana',
      cretaceous: 'Gondwana breaking up, modern shapes emerging'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE SUMMARY
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    dinosaurs: {
      duration: '165 million years',
      theropods: 'Bipedal carnivores: T. rex, Velociraptor, Spinosaurus',
      sauropods: 'Giant long-necked herbivores: Brachiosaurus, Diplodocus',
      ornithischians: 'Bird-hipped herbivores: Triceratops, Stegosaurus'
    },
    
    otherReptiles: [
      'Pterosaurs (flying)',
      'Ichthyosaurs (marine)',
      'Plesiosaurs (marine)',
      'Mosasaurs (marine)',
      'Crocodilians'
    ],
    
    mammals: {
      size: 'Mostly small (largest: 1 meter)',
      lifestyle: 'Nocturnal, insectivorous',
      groups: ['Multituberculates', 'Early therians'],
      significance: 'Ancestors of all modern mammals'
    },
    
    birds: {
      origin: 'From theropod dinosaurs (Jurassic)',
      earlyForms: ['Archaeopteryx', 'Confuciusornis'],
      cretaceous: 'Diverse, some modern groups appear'
    },
    
    plants: {
      triassicJurassic: 'Conifers, ferns, cycads, ginkgoes',
      cretaceous: 'Flowering plants dominate'
    },
    
    keyInnovations: [
      'Dinosaur body plans',
      'Vertebrate powered flight (pterosaurs, birds)',
      'Flowering plants',
      'True mammals'
    ],
    
    massExtinctions: [
      { name: 'Triassic-Jurassic', severity: '80% species', rank: 5 },
      { name: 'Cretaceous-Paleogene', severity: '76% species', rank: 3 }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KEY FOSSIL SITES
  // ═══════════════════════════════════════════════════════════════════════
  
  keyFormations: [
    {
      name: 'Ischigualasto Formation',
      age: '231-225 Ma',
      location: 'Argentina',
      significance: 'Oldest dinosaurs',
      coordinates: { lat: -30.0, lng: -68.0 }
    },
    {
      name: 'Morrison Formation',
      age: '156-146 Ma',
      location: 'Western USA',
      significance: 'Best Jurassic dinosaurs',
      coordinates: { lat: 39.0, lng: -107.0 }
    },
    {
      name: 'Solnhofen Limestone',
      age: '150 Ma',
      location: 'Germany',
      significance: 'Archaeopteryx, exceptional preservation',
      coordinates: { lat: 48.9, lng: 11.0 }
    },
    {
      name: 'Liaoning Province',
      age: '130-120 Ma',
      location: 'China',
      significance: 'Feathered dinosaurs, early birds',
      coordinates: { lat: 41.5, lng: 122.5 }
    },
    {
      name: 'Hell Creek Formation',
      age: '67-66 Ma',
      location: 'Montana, USA',
      significance: 'Last dinosaurs, T. rex, Triceratops',
      coordinates: { lat: 47.0, lng: -106.0 }
    },
    {
      name: 'Chicxulub Crater',
      age: '66 Ma',
      location: 'Yucatan, Mexico',
      significance: 'K-Pg impact site',
      coordinates: { lat: 21.4, lng: -89.5 }
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(MESOZOIC_ERA);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MESOZOIC_ERA;
}

console.log('🦖 Mesozoic Era data loaded: ' + MESOZOIC_ERA.events.length + ' events');
