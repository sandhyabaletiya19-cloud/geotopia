// js/data/geological/cenozoic.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CENOZOIC ERA - "The Age of Mammals"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 66 Million Years Ago - Present
 *  Named after: Greek "kainos" (new) + "zoic" (life)
 *  
 *  The age when:
 *  - Mammals diversify and dominate
 *  - Grasses and grasslands spread
 *  - Whales return to the sea
 *  - Primates evolve → Humans appear
 *  - Ice ages shape the modern world
 *  - Modern ecosystems and geography emerge
 *  
 *  Three periods: Paleogene, Neogene, Quaternary
 * ═══════════════════════════════════════════════════════════════════════════
 */

const CENOZOIC_ERA = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'cenozoic',
  name: 'Cenozoic Era',
  etymology: 'From Greek "kainos" (new/recent) + "zoic" (life) - "New Life"',
  nickname: 'Age of Mammals',
  
  timeRange: {
    start: -66000000,  // 66 million years ago
    end: 0,            // Present (2024 CE)
    duration: 66000000 // 66 million years (ongoing)
  },
  
  color: '#4169E1',
  gradient: 'linear-gradient(135deg, #006400, #4169E1, #87CEEB)',
  
  description: `The Cenozoic Era is our era - the Age of Mammals. After the extinction 
                of non-avian dinosaurs, mammals diversified explosively to fill vacant 
                ecological niches. Whales returned to the sea, horses galloped across 
                grasslands, and primates evolved in tropical forests - eventually 
                producing humans. The Cenozoic has also been an era of dramatic 
                climate change, from the warm "greenhouse" conditions of the Eocene 
                to the ice ages of the Quaternary.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Periods and Epochs)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'paleogene',
      name: 'Paleogene Period',
      timeRange: { start: -66000000, end: -23000000 },
      duration: 43000000,
      description: 'Recovery from extinction. Modern mammal orders appear.',
      keyEvents: ['mammal-radiation', 'petm', 'whale-evolution'],
      epochs: [
        { name: 'Paleocene', range: { start: -66000000, end: -56000000 } },
        { name: 'Eocene', range: { start: -56000000, end: -33900000 } },
        { name: 'Oligocene', range: { start: -33900000, end: -23000000 } }
      ]
    },
    {
      id: 'neogene',
      name: 'Neogene Period',
      timeRange: { start: -23000000, end: -2600000 },
      duration: 20400000,
      description: 'Grasslands spread. Modern mammals evolve. Hominins appear.',
      keyEvents: ['grassland-expansion', 'first-hominins', 'land-bridges'],
      epochs: [
        { name: 'Miocene', range: { start: -23000000, end: -5333000 } },
        { name: 'Pliocene', range: { start: -5333000, end: -2600000 } }
      ]
    },
    {
      id: 'quaternary',
      name: 'Quaternary Period',
      timeRange: { start: -2600000, end: 0 },
      duration: 2600000,
      description: 'Ice ages. Humans evolve and spread worldwide.',
      keyEvents: ['ice-ages', 'human-evolution', 'megafauna-extinction'],
      epochs: [
        { name: 'Pleistocene', range: { start: -2600000, end: -11700 } },
        { name: 'Holocene', range: { start: -11700, end: -70 } },
        { name: 'Anthropocene', range: { start: -70, end: 0 }, note: 'Proposed/informal' }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  PALEOCENE EPOCH (66 - 56 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'cenozoic-begins',
      year: -66000000,
      name: 'Cenozoic Era Begins',
      event: 'Age of Mammals begins after asteroid impact',
      type: 'geological',
      importance: 10,
      description: `The Cenozoic Era begins in the aftermath of the K-Pg extinction. 
                    With non-avian dinosaurs gone, mammals begin rapid diversification. 
                    The world is still recovering from impact winter.`,
      scientificData: {
        survivors: 'Small mammals, birds, reptiles, amphibians',
        climate: 'Recovering from impact winter',
        vegetation: 'Fern spike, then recovering forests',
        mammalSize: 'Initially small, rapidly increasing'
      }
    },
    
    {
      id: 'mammal-adaptive-radiation',
      year: -65000000,
      name: 'Mammal Adaptive Radiation',
      event: 'Mammals diversify rapidly into vacant niches',
      type: 'biological',
      importance: 10,
      description: `With dinosaurs gone, mammals undergo explosive diversification. 
                    Within 10 million years, most modern mammal orders appear: 
                    primates, rodents, carnivores, hoofed mammals, and more.`,
      scientificData: {
        timescale: '10 million years for major orders',
        newOrders: [
          'Primates',
          'Rodents',
          'Carnivora',
          'Artiodactyls (even-toed ungulates)',
          'Perissodactyls (odd-toed ungulates)'
        ],
        sizeIncrease: 'From mouse-sized to large forms quickly',
        cause: 'Ecological release from dinosaur competition'
      }
    },
    
    {
      id: 'first-modern-primates',
      year: -63000000,
      name: 'First Primates',
      event: 'Ancestors of monkeys, apes, and humans appear',
      type: 'biological',
      importance: 10,
      description: `The first true primates evolve, small tree-dwelling creatures 
                    with grasping hands and forward-facing eyes. Plesiadapis is 
                    among the earliest known. These small creatures are our 
                    distant ancestors.`,
      scientificData: {
        earlyPrimates: ['Plesiadapis', 'Purgatorius'],
        size: 'Mouse to cat-sized',
        habitat: 'Arboreal (tree-dwelling)',
        features: ['Grasping hands/feet', 'Forward-facing eyes', 'Large brain (relative)'],
        diet: 'Insects, fruit'
      }
    },
    
    {
      id: 'india-asia-collision-begins',
      year: -55000000,
      name: 'India-Asia Collision Begins',
      event: 'Indian subcontinent collides with Asia',
      type: 'geological',
      importance: 10,
      description: `After 70 million years of drifting northward, India collides 
                    with Asia. This collision will continue for millions of years, 
                    creating the Himalaya mountains - the highest on Earth.`,
      scientificData: {
        collisionSpeed: '15-20 cm/year (during drift)',
        currentSpeed: '5 cm/year (ongoing)',
        result: 'Himalaya uplift',
        tethysSeaClosure: 'Complete'
      },
      coordinates: { lat: 28.0, lng: 85.0 },
      location: 'Himalaya region'
    },
    
    {
      id: 'petm',
      year: -56000000,
      name: 'Paleocene-Eocene Thermal Maximum (PETM)',
      event: 'Dramatic global warming event',
      type: 'geological',
      importance: 10,
      description: `A sudden release of greenhouse gases causes global temperatures 
                    to rise 5-8°C over 20,000 years. This is the most rapid warming 
                    event of the Cenozoic. Tropical forests extend to the poles. 
                    The PETM is studied as an analog for modern climate change.`,
      scientificData: {
        warming: '5-8°C',
        duration: 'Peak ~20,000 years, recovery ~200,000 years',
        co2Release: '~3,000-7,000 Gt carbon',
        cause: 'Volcanic CO2? Methane hydrates? Both?',
        polarTemperatures: 'Ice-free, subtropical',
        modernRelevance: 'Best analog for anthropogenic warming'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  EOCENE EPOCH (56 - 33.9 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'eocene-begins',
      year: -56000000,
      name: 'Eocene Epoch Begins',
      event: 'Warmest epoch of Cenozoic',
      type: 'geological',
      importance: 8,
      description: `The Eocene begins with the warmest climate of the Cenozoic. 
                    Tropical forests extend to polar regions. Modern mammal 
                    families become recognizable.`,
      scientificData: {
        climate: 'Greenhouse, no polar ice',
        polarTemperatures: '10-15°C',
        tropicalExtent: 'To 60° latitude',
        sealevel: 'High'
      }
    },
    
    {
      id: 'eocene-optimum',
      year: -52000000,
      name: 'Early Eocene Climatic Optimum',
      event: 'Warmest sustained temperatures in 66 million years',
      type: 'geological',
      importance: 8,
      description: `Global temperatures peak in the Early Eocene. CO2 levels reach 
                    1,000-2,000 ppm. Crocodiles and palm trees live above the Arctic 
                    Circle. This is the warmest Earth has been since the Cretaceous.`,
      scientificData: {
        globalTemperature: '14°C warmer than today',
        co2: '1,000-2,000 ppm',
        arcticTemperature: '15-20°C',
        seaLevel: '70 m higher than today',
        iceSheets: 'None'
      }
    },
    
    {
      id: 'whale-evolution-begins',
      year: -50000000,
      name: 'Whales Return to the Sea',
      event: 'Land mammals evolve into marine giants',
      type: 'biological',
      importance: 10,
      description: `Whales evolve from small, hoofed land mammals. Transitional 
                    fossils like Pakicetus, Ambulocetus ("walking whale"), and 
                    Basilosaurus document this remarkable transformation.`,
      scientificData: {
        ancestor: 'Small hoofed mammals (related to hippos)',
        transitionFossils: [
          { name: 'Pakicetus', age: '50 Ma', features: 'Wolf-like, land-dwelling' },
          { name: 'Ambulocetus', age: '49 Ma', features: 'Semi-aquatic, crocodile-like' },
          { name: 'Rodhocetus', age: '47 Ma', features: 'Mostly aquatic, small limbs' },
          { name: 'Basilosaurus', age: '40 Ma', features: 'Fully aquatic, tiny hind limbs' }
        ],
        modernWhales: 'By 35 Ma'
      },
      coordinates: { lat: 30.0, lng: 70.0 },
      location: 'Tethys Sea region (Pakistan)'
    },
    
    {
      id: 'horse-evolution-begins',
      year: -55000000,
      name: 'Horse Evolution Begins',
      event: 'Eohippus/Hyracotherium starts horse lineage',
      type: 'biological',
      importance: 8,
      description: `The first horses appear - small, multi-toed forest browsers 
                    called Eohippus (Hyracotherium). Over 55 million years, they 
                    will evolve into modern single-toed grazers.`,
      scientificData: {
        firstHorse: 'Eohippus/Hyracotherium',
        size: 'Dog-sized (30 cm tall)',
        toes: '4 front, 3 back',
        diet: 'Forest browser (leaves)',
        evolution: '55 million years to modern horse'
      }
    },
    
    {
      id: 'first-bats',
      year: -52000000,
      name: 'First Bats',
      event: 'Only flying mammals appear',
      type: 'biological',
      importance: 8,
      description: `Bats, the only mammals capable of true flight, appear in the 
                    fossil record. Onychonycteris from Wyoming shows they could 
                    fly before they developed echolocation.`,
      scientificData: {
        earlyBat: 'Onychonycteris',
        features: 'Could fly, no echolocation',
        significance: 'Flight evolved before echolocation',
        modernDiversity: '1,400+ species (2nd most diverse mammal order)'
      }
    },
    
    {
      id: 'antarctica-isolation',
      year: -45000000,
      name: 'Antarctica Becomes Isolated',
      event: 'Southern continent separates, circumpolar current forms',
      type: 'geological',
      importance: 9,
      description: `Antarctica separates completely from Australia and South America. 
                    The Antarctic Circumpolar Current forms, isolating Antarctica 
                    thermally and leading to its eventual glaciation.`,
      scientificData: {
        separations: ['From Australia ~45 Ma', 'From South America ~34 Ma'],
        current: 'Antarctic Circumpolar Current',
        effect: 'Thermal isolation → cooling → glaciation'
      }
    },
    
    {
      id: 'grande-coupure',
      year: -33900000,
      name: 'Grande Coupure',
      event: 'Major extinction and faunal turnover in Europe',
      type: 'catastrophic',
      importance: 8,
      description: `A major extinction event in Europe at the Eocene-Oligocene 
                    boundary. Endemic European mammals are replaced by Asian 
                    immigrants as climate cools dramatically.`,
      scientificData: {
        cause: 'Rapid cooling, land bridge from Asia',
        victims: 'Many endemic European mammals',
        replacements: 'Asian immigrants (rhinos, etc.)',
        temperatureDrop: '~8°C (Eocene-Oligocene Transition)'
      }
    },
    
    {
      id: 'antarctica-glaciation-begins',
      year: -34000000,
      name: 'Antarctica Ice Sheet Forms',
      event: 'First permanent polar ice cap in 200+ million years',
      type: 'geological',
      importance: 10,
      description: `The Antarctic ice sheet begins forming - the first permanent 
                    polar ice in over 200 million years. This marks Earth's 
                    transition from greenhouse to icehouse climate.`,
      scientificData: {
        trigger: 'Antarctic isolation + declining CO2',
        co2: 'Dropped below ~760 ppm',
        consequences: ['Sea level drop', 'Global cooling', 'Icehouse climate'],
        currentIceVolume: '26.5 million km³'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  OLIGOCENE EPOCH (33.9 - 23 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'oligocene-begins',
      year: -33900000,
      name: 'Oligocene Epoch Begins',
      event: 'Cooler world with expanding grasslands',
      type: 'geological',
      importance: 7,
      description: `The Oligocene begins with a cooler, drier world. Antarctica 
                    has ice. Grasslands begin spreading. Modern mammal families 
                    become established.`,
      scientificData: {
        climate: 'Cooler than Eocene, seasonal',
        grasslands: 'Beginning to spread',
        antarcticIce: 'Present',
        arcticIce: 'Not yet'
      }
    },
    
    {
      id: 'first-apes',
      year: -25000000,
      name: 'First Apes',
      event: 'Tailless primates diverge from monkeys',
      type: 'biological',
      importance: 9,
      description: `The first apes (hominoids) diverge from Old World monkeys. 
                    Early apes like Proconsul in Africa will eventually give rise 
                    to gibbons, orangutans, gorillas, chimpanzees, and humans.`,
      scientificData: {
        divergence: 'Apes split from Old World monkeys',
        earlyApe: 'Proconsul',
        location: 'Africa',
        features: ['No tail', 'Larger brain', 'More flexible shoulders'],
        futureLineages: 'All apes including humans'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  MIOCENE EPOCH (23 - 5.3 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'miocene-begins',
      year: -23000000,
      name: 'Miocene Epoch Begins',
      event: 'Age of grass and grazing mammals',
      type: 'geological',
      importance: 8,
      description: `The Miocene begins - a period of grassland expansion and 
                    mammal diversification. Modern ecosystems begin taking shape. 
                    The stage is set for human evolution.`,
      scientificData: {
        climate: 'Initially warm, cooling toward end',
        keyChange: 'Grassland expansion',
        mammals: 'Near-modern forms'
      }
    },
    
    {
      id: 'grassland-expansion',
      year: -20000000,
      name: 'Grasslands Spread Worldwide',
      event: 'Grass-dominated ecosystems transform Earth',
      type: 'biological',
      importance: 10,
      description: `Grasslands spread across all continents, transforming Earth's 
                    surface. Grazing mammals evolve to exploit this new resource: 
                    horses develop high-crowned teeth, antelopes diversify.`,
      scientificData: {
        cause: 'Drying climate, CO2 decline favors C4 grasses',
        extent: 'All continents except Antarctica',
        mammalAdaptations: [
          'High-crowned teeth (horses)',
          'Running adaptations',
          'Grazing digestive systems'
        ],
        consequence: 'Modern savanna ecosystems'
      }
    },
    
    {
      id: 'mid-miocene-climatic-optimum',
      year: -17000000,
      name: 'Mid-Miocene Climatic Optimum',
      event: 'Last major warm period before ice ages',
      type: 'geological',
      importance: 7,
      description: `A temporary warming reverses the cooling trend. This is the 
                    last time Earth was significantly warmer than today before 
                    the recent anthropogenic warming.`,
      scientificData: {
        temperature: '3-4°C warmer than today',
        co2: '400-500 ppm',
        seaLevel: '25-40 m higher',
        antarcticIce: 'Reduced but present'
      }
    },
    
    {
      id: 'ape-diversity-peak',
      year: -15000000,
      name: 'Ape Diversity Peak',
      event: 'Dozens of ape species across Europe and Asia',
      type: 'biological',
      importance: 8,
      description: `Apes reach peak diversity in the Miocene, with dozens of 
                    species across Africa, Europe, and Asia. Climate deterioration 
                    will later cause most to go extinct.`,
      scientificData: {
        diversity: 'Dozens of species',
        distribution: 'Africa, Europe, Asia',
        examples: ['Dryopithecus', 'Sivapithecus', 'Oreopithecus'],
        futureDecline: 'Most extinct by 5 Ma'
      }
    },
    
    {
      id: 'mediterranean-dries',
      year: -5960000,
      name: 'Messinian Salinity Crisis',
      event: 'Mediterranean Sea nearly dries up',
      type: 'geological',
      importance: 8,
      description: `The Mediterranean Sea becomes isolated from the Atlantic and 
                    nearly dries up completely. Massive salt deposits form. The 
                    sea refills catastrophically when Gibraltar breaches.`,
      scientificData: {
        duration: '~640,000 years',
        cause: 'Tectonic closure of Atlantic connection',
        effect: 'Mediterranean nearly dried, massive evaporites',
        refilling: 'Zanclean Flood (~5.33 Ma)',
        refillTime: 'Months to 2 years (catastrophic)'
      },
      coordinates: { lat: 36.0, lng: -5.5 },
      location: 'Strait of Gibraltar region'
    },
    
    {
      id: 'hominin-divergence',
      year: -7000000,
      name: 'Human-Chimp Lineage Split',
      event: 'Last common ancestor of humans and chimpanzees',
      type: 'biological',
      importance: 10,
      description: `The lineage leading to humans diverges from that leading to 
                    chimpanzees. Sahelanthropus tchadensis is a possible early 
                    hominin from this time.`,
      scientificData: {
        divergenceTime: '7-6 Ma (molecular clocks)',
        possibleEarlyHominin: 'Sahelanthropus tchadensis',
        location: 'Africa',
        lastCommonAncestor: 'Unknown species',
        significance: 'Beginning of human evolution'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  PLIOCENE EPOCH (5.3 - 2.6 Ma)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'pliocene-begins',
      year: -5333000,
      name: 'Pliocene Epoch Begins',
      event: 'World approaches modern configuration',
      type: 'geological',
      importance: 7,
      description: `The Pliocene begins with continents nearly in modern positions. 
                    North and South America will soon connect. Hominins evolve 
                    bipedalism in Africa.`,
      scientificData: {
        climate: 'Warmer than today initially, cooling',
        seaLevel: '~25 m higher initially',
        continents: 'Near-modern positions'
      }
    },
    
    {
      id: 'australopithecus-afarensis',
      year: -3900000,
      name: 'Australopithecus afarensis ("Lucy")',
      event: 'Famous bipedal hominin lives in East Africa',
      type: 'biological',
      importance: 10,
      description: `Australopithecus afarensis, including the famous "Lucy" skeleton, 
                    lives in East Africa. These 1-meter-tall hominins are fully 
                    bipedal but have small brains (400-500 cc, similar to chimps).`,
      scientificData: {
        timeRange: '3.9-2.9 Ma',
        height: '1.0-1.5 m',
        brainSize: '400-500 cc',
        locomotion: 'Fully bipedal',
        diet: 'Fruits, leaves, possibly meat',
        famousFossil: 'Lucy (AL 288-1, found 1974)'
      },
      coordinates: { lat: 11.1, lng: 40.6 },
      location: 'Hadar, Ethiopia'
    },
    
    {
      id: 'laetoli-footprints',
      year: -3660000,
      name: 'Laetoli Footprints',
      event: 'Oldest hominin footprints preserved in ash',
      type: 'biological',
      importance: 9,
      description: `Volcanic ash at Laetoli, Tanzania preserves footprints of 
                    bipedal hominins (probably A. afarensis). These 3.66-million-
                    year-old tracks prove early hominins walked upright.`,
      scientificData: {
        age: '3.66 Ma',
        length: '27 m trackway',
        makers: 'Probably Australopithecus afarensis',
        significance: 'Proof of early bipedalism',
        preservation: 'Wet volcanic ash hardened'
      },
      coordinates: { lat: -3.2, lng: 35.2 },
      location: 'Laetoli, Tanzania'
    },
    
    {
      id: 'panama-isthmus-closes',
      year: -3000000,
      name: 'Isthmus of Panama Closes',
      event: 'Land bridge connects Americas, changes world climate',
      type: 'geological',
      importance: 10,
      description: `The Isthmus of Panama closes, connecting North and South 
                    America. This triggers the Great American Biotic Interchange 
                    and may have helped trigger the Quaternary ice ages by 
                    altering ocean circulation.`,
      scientificData: {
        timing: '3-2.8 Ma (complete closure)',
        bioticInterchange: {
          northToSouth: ['Dogs', 'Cats', 'Bears', 'Horses', 'Deer'],
          southToNorth: ['Armadillos', 'Opossums', 'Porcupines', 'Giant sloths']
        },
        oceanEffect: 'Gulf Stream strengthened',
        climateEffect: 'May have triggered ice ages'
      },
      coordinates: { lat: 9.0, lng: -79.5 },
      location: 'Isthmus of Panama'
    },
    
    {
      id: 'first-stone-tools',
      year: -3300000,
      name: 'First Stone Tools',
      event: 'Hominins begin making stone tools',
      type: 'biological',
      importance: 10,
      description: `The oldest known stone tools appear at Lomekwi, Kenya. These 
                    crude tools predate Homo by several hundred thousand years, 
                    possibly made by Australopithecus or Kenyanthropus.`,
      scientificData: {
        site: 'Lomekwi 3, Kenya',
        age: '3.3 Ma',
        toolType: 'Lomekwian (crude flakes, cores)',
        makers: 'Unknown (not Homo)',
        significance: 'Oldest known technology'
      },
      coordinates: { lat: 3.9, lng: 35.8 },
      location: 'Lomekwi, Kenya'
    },
    
    {
      id: 'genus-homo-appears',
      year: -2800000,
      name: 'Genus Homo Appears',
      event: 'First members of our genus evolve',
      type: 'biological',
      importance: 10,
      description: `The genus Homo appears in Africa. Homo habilis ("handy man") 
                    has a larger brain (600-700 cc) and is associated with 
                    Oldowan stone tools.`,
      scientificData: {
        species: 'Homo habilis',
        brainSize: '600-700 cc (50% increase over Australopithecus)',
        tools: 'Oldowan (Mode 1)',
        diet: 'More meat (hunting/scavenging)',
        significance: 'First member of our genus'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  PLEISTOCENE EPOCH (2.6 Ma - 11,700 years ago)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'pleistocene-begins',
      year: -2600000,
      name: 'Pleistocene Epoch Begins - Ice Ages',
      event: 'Repeated glacial cycles begin',
      type: 'geological',
      importance: 10,
      description: `The Pleistocene begins, characterized by repeated glacial 
                    cycles. Ice sheets advance and retreat across northern 
                    continents. Humans evolve and spread worldwide.`,
      scientificData: {
        glacialCycles: '~50 cycles',
        cycleLength: '~41,000 → ~100,000 years',
        cause: 'Milankovitch cycles',
        maxIceCoverage: '30% of land (vs 10% today)'
      }
    },
    
    {
      id: 'homo-erectus',
      year: -1900000,
      name: 'Homo erectus Evolves',
      event: 'First human to leave Africa',
      type: 'biological',
      importance: 10,
      description: `Homo erectus evolves in Africa. With larger brains (900-1100 cc), 
                    fully modern body proportions, and advanced Acheulean tools, 
                    H. erectus is the first human to leave Africa.`,
      scientificData: {
        brainSize: '900-1100 cc',
        height: '1.4-1.8 m',
        bodyPlan: 'Fully modern proportions',
        tools: 'Acheulean (hand axes)',
        fireUse: 'Possible control of fire',
        duration: '1.9 Ma - 100,000 years (longest-lived human species)'
      }
    },
    
    {
      id: 'first-out-of-africa',
      year: -1800000,
      name: 'First Migration Out of Africa',
      event: 'Homo erectus spreads to Asia and Europe',
      type: 'biological',
      importance: 10,
      description: `Homo erectus becomes the first human to migrate out of Africa, 
                    reaching Georgia by 1.8 Ma and Java by 1.5 Ma. This begins 
                    human colonization of the Old World.`,
      scientificData: {
        route: 'Via Sinai or Bab el-Mandeb',
        georgia: '1.8 Ma (Dmanisi)',
        java: '1.5 Ma',
        china: '1.7 Ma',
        europe: '1.2 Ma (Spain)'
      },
      coordinates: { lat: 41.3, lng: 44.3 },
      location: 'Dmanisi, Georgia'
    },
    
    {
      id: 'controlled-fire',
      year: -1000000,
      name: 'Controlled Use of Fire',
      event: 'Humans master fire',
      type: 'biological',
      importance: 10,
      description: `Humans gain control of fire. This allows cooking (which provides 
                    more calories and may have enabled brain expansion), warmth in 
                    cold climates, protection from predators, and social gathering.`,
      scientificData: {
        evidence: 'Wonderwerk Cave, South Africa (1 Ma)',
        definiteControl: 'By 400,000 years ago',
        benefits: [
          'Cooking (more calories)',
          'Warmth',
          'Protection',
          'Extended day (social time)',
          'Cognitive effects'
        ]
      }
    },
    
    {
      id: 'homo-heidelbergensis',
      year: -700000,
      name: 'Homo heidelbergensis',
      event: 'Common ancestor of Neanderthals and modern humans',
      type: 'biological',
      importance: 9,
      description: `Homo heidelbergensis evolves in Africa and spreads to Europe. 
                    This species is likely the common ancestor of both Neanderthals 
                    (in Europe) and Homo sapiens (in Africa).`,
      scientificData: {
        brainSize: '1100-1400 cc',
        distribution: 'Africa and Europe',
        tools: 'Advanced Acheulean',
        hunting: 'Large game (wooden spears)',
        descendants: 'Neanderthals and H. sapiens'
      }
    },
    
    {
      id: 'neanderthals-evolve',
      year: -400000,
      name: 'Neanderthals Evolve in Europe',
      event: 'Our closest relatives appear',
      type: 'biological',
      importance: 9,
      description: `Neanderthals evolve in Europe, adapted to cold glacial climates. 
                    With brains as large as ours (1400-1600 cc), they make 
                    sophisticated tools, bury their dead, and may have art.`,
      scientificData: {
        brainSize: '1400-1600 cc (larger than modern humans)',
        adaptations: ['Stocky build', 'Large nose (warm air)', 'Robust'],
        culture: ['Mousterian tools', 'Burials', 'Possible art'],
        distribution: 'Europe, Middle East, Central Asia',
        extinction: '~40,000 years ago'
      }
    },
    
    {
      id: 'homo-sapiens-origin',
      year: -300000,
      name: 'Homo sapiens Evolves',
      event: 'Our species appears in Africa',
      type: 'biological',
      importance: 10,
      description: `Anatomically modern humans (Homo sapiens) evolve in Africa. 
                    The oldest known fossils come from Jebel Irhoud, Morocco. 
                    Modern human behavior will develop over the next 200,000 years.`,
      scientificData: {
        oldestFossils: 'Jebel Irhoud, Morocco (315,000 years)',
        brainSize: '1350-1500 cc',
        features: ['High forehead', 'Chin', 'Smaller brow'],
        behavioralModernity: 'Develops 100,000-50,000 years ago'
      },
      coordinates: { lat: 31.9, lng: -8.6 },
      location: 'Jebel Irhoud, Morocco'
    },
    
    {
      id: 'modern-behavior',
      year: -100000,
      name: 'Emergence of Modern Human Behavior',
      event: 'Symbolic thinking, art, complex tools',
      type: 'biological',
      importance: 9,
      description: `Modern human behavior emerges: symbolic thinking, personal 
                    ornaments, long-distance trade, and complex tools. Blombos 
                    Cave in South Africa shows engraved ochre and shell beads.`,
      scientificData: {
        evidence: 'Blombos Cave (100,000-70,000 years)',
        behaviors: [
          'Symbolic art',
          'Personal ornaments',
          'Long-distance trade',
          'Hafted tools',
          'Fishing'
        ],
        significance: 'Cognitive revolution'
      },
      coordinates: { lat: -34.4, lng: 21.2 },
      location: 'Blombos Cave, South Africa'
    },
    
    {
      id: 'second-out-of-africa',
      year: -70000,
      name: 'Second Migration Out of Africa',
      event: 'Modern humans spread worldwide',
      type: 'biological',
      importance: 10,
      description: `Homo sapiens migrates out of Africa, eventually colonizing 
                    the entire world. Genetic evidence suggests a small founding 
                    population (~1,000-10,000 individuals).`,
      scientificData: {
        route: 'Southern route via Arabia',
        foundingPopulation: '~1,000-10,000 individuals',
        australia: 'By 65,000 years ago',
        europe: 'By 45,000 years ago',
        geneticEvidence: 'All non-Africans descend from this migration'
      }
    },
    
    {
      id: 'toba-supervolcano',
      year: -74000,
      name: 'Toba Supervolcanic Eruption',
      event: 'Largest eruption in 2 million years',
      type: 'catastrophic',
      importance: 9,
      description: `Mount Toba in Sumatra explodes in the largest volcanic eruption 
                    of the last 2 million years. This may have caused a volcanic 
                    winter and population bottleneck in humans.`,
      scientificData: {
        vei: '8 (supervolcanic)',
        ejecta: '2,800 km³',
        caldera: '100 × 30 km',
        volcanicWinter: '~10 years',
        populationEffect: 'Debated bottleneck hypothesis'
      },
      coordinates: { lat: 2.7, lng: 98.8 },
      location: 'Lake Toba, Sumatra, Indonesia'
    },
    
    {
      id: 'australia-colonization',
      year: -65000,
      name: 'Humans Reach Australia',
      event: 'First colonization of Australia',
      type: 'biological',
      importance: 9,
      description: `Humans reach Australia, crossing ~90 km of open water even at 
                    lowest sea levels. This is the first ocean crossing by humans 
                    and leads to Australia's megafauna extinction.`,
      scientificData: {
        seaCrossing: '~90 km minimum',
        watercraft: 'Rafts or boats (none preserved)',
        megafaunaExtinction: 'Within 10,000-20,000 years',
        evidence: 'Madjedbebe rock shelter'
      },
      coordinates: { lat: -12.5, lng: 132.9 },
      location: 'Madjedbebe, Northern Territory, Australia'
    },
    
    {
      id: 'cave-art-begins',
      year: -45000,
      name: 'First Cave Art',
      event: 'Oldest known figurative art',
      type: 'biological',
      importance: 9,
      description: `The oldest known figurative cave art appears in Indonesia. 
                    European cave art follows, with spectacular examples at 
                    Chauvet (36,000 years) and Lascaux (17,000 years).`,
      scientificData: {
        oldestFigurative: 'Sulawesi, Indonesia (45,500 years)',
        europeanArt: 'Chauvet (36,000 years)',
        lascaux: '17,000 years',
        subjects: 'Animals, hand stencils, humans',
        purpose: 'Unknown (spiritual? educational?)'
      },
      coordinates: { lat: -5.0, lng: 119.7 },
      location: 'Sulawesi, Indonesia'
    },
    
    {
      id: 'neanderthal-extinction',
      year: -40000,
      name: 'Neanderthal Extinction',
      event: 'Our closest relatives disappear',
      type: 'biological',
      importance: 9,
      description: `Neanderthals go extinct approximately 40,000 years ago, shortly 
                    after modern humans arrived in Europe. Causes include competition, 
                    climate change, or disease. Some interbreeding occurred - 
                    non-African humans carry 1-4% Neanderthal DNA.`,
      scientificData: {
        lastNeanderthals: 'Gibraltar? Caucasus? ~40,000 years',
        causes: ['Competition', 'Climate', 'Disease', 'Interbreeding'],
        interbreeding: '1-4% Neanderthal DNA in non-Africans',
        hybridEvidence: 'Oase 1 individual (Romania, 40,000 years)'
      }
    },
    
    {
      id: 'last-glacial-maximum',
      year: -26000,
      name: 'Last Glacial Maximum',
      event: 'Peak of last ice age',
      type: 'geological',
      importance: 9,
      description: `The Last Glacial Maximum - ice sheets reach their greatest 
                    extent of the current ice age. Sea levels drop 120 meters, 
                    exposing land bridges. Humans survive in refugia.`,
      scientificData: {
        timing: '26,000-19,000 years ago',
        iceExtent: 'Canada, N. Europe, parts of Asia',
        seaLevelDrop: '120 m',
        exposedLand: ['Beringia', 'Sundaland', 'Doggerland'],
        humanPopulation: 'Maybe 1-10 million worldwide'
      }
    },
    
    {
      id: 'americas-colonization',
      year: -15000,
      name: 'Humans Reach the Americas',
      event: 'Last habitable continents colonized',
      type: 'biological',
      importance: 10,
      description: `Humans cross from Asia to the Americas via Beringia or along 
                    the Pacific coast. Within 2,000-3,000 years, humans reach 
                    the southern tip of South America.`,
      scientificData: {
        routes: ['Beringia land bridge', 'Pacific coastal route'],
        timing: '15,000-16,000 years ago (debate ongoing)',
        spread: 'To South America by 14,500 years ago',
        sites: ['Monte Verde (Chile)', 'Clovis (USA)'],
        megafaunaExtinction: 'Shortly after arrival'
      }
    },
    
    {
      id: 'megafauna-extinction',
      year: -11000,
      name: 'Pleistocene Megafauna Extinction',
      event: 'Mammoths, giant sloths, and more go extinct',
      type: 'catastrophic',
      importance: 9,
      description: `Most large mammals outside Africa go extinct at the end of 
                    the Pleistocene. Woolly mammoths, giant sloths, saber-toothed 
                    cats, and many others disappear. Human hunting and climate 
                    change likely both contributed.`,
      scientificData: {
        victims: [
          'Woolly mammoth',
          'Giant ground sloth',
          'Saber-toothed cat',
          'Dire wolf',
          'American lion',
          'Giant beaver'
        ],
        africanSurvival: 'Megafauna survived (coevolved with humans)',
        causes: ['Human hunting', 'Climate change', 'Both combined'],
        lastMammoth: 'Wrangel Island, 4,000 years ago'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  HOLOCENE EPOCH (11,700 years ago - Present)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'holocene-begins',
      year: -11700,
      name: 'Holocene Epoch Begins',
      event: 'Current warm period, human civilization',
      type: 'geological',
      importance: 10,
      description: `The Holocene begins as ice age ends. Warming climate enables 
                    agriculture, which leads to civilization. All of recorded 
                    human history occurs in this epoch.`,
      scientificData: {
        cause: 'End of last glacial period',
        temperature: '~4°C warmer than glacial',
        seaLevelRise: '120 m (complete by ~6,000 years ago)',
        humanRevolution: 'Agriculture, cities, civilization'
      }
    },
    
    {
      id: 'younger-dryas',
      year: -12900,
      name: 'Younger Dryas Cold Snap',
      event: 'Brief return to glacial conditions',
      type: 'geological',
      importance: 8,
      description: `A brief but intense cold period interrupts warming. Temperatures 
                    in the North Atlantic region drop dramatically for ~1,200 years, 
                    possibly caused by meltwater disrupting ocean circulation.`,
      scientificData: {
        duration: '~1,200 years (12,900-11,700 years ago)',
        cooling: '5-10°C (North Atlantic region)',
        cause: 'Lake Agassiz meltwater pulse?',
        effect: 'May have spurred adoption of agriculture'
      }
    },
    
    {
      id: 'agriculture-begins',
      year: -10000,
      name: 'Agricultural Revolution',
      event: 'Humans domesticate plants and animals',
      type: 'biological',
      importance: 10,
      description: `The Neolithic Revolution begins: humans independently invent 
                    agriculture in multiple locations. This transforms human 
                    societies from mobile hunter-gatherers to settled farmers, 
                    enabling population growth and civilization.`,
      scientificData: {
        locations: [
          { place: 'Fertile Crescent', crops: 'Wheat, barley', date: '10,000 years' },
          { place: 'China', crops: 'Rice, millet', date: '9,000 years' },
          { place: 'Mesoamerica', crops: 'Maize, beans', date: '7,000 years' },
          { place: 'Andes', crops: 'Potato, quinoa', date: '6,000 years' }
        ],
        animals: 'Sheep, goats, cattle, pigs',
        consequences: [
          'Sedentism',
          'Population growth',
          'Social stratification',
          'Cities',
          'Writing'
        ]
      },
      coordinates: { lat: 36.0, lng: 40.0 },
      location: 'Fertile Crescent'
    },
    
    {
      id: 'first-cities',
      year: -5500,
      name: 'First Cities',
      event: 'Urban civilization begins in Mesopotamia',
      type: 'civilization',
      importance: 10,
      description: `The first true cities appear in Mesopotamia (Eridu, Uruk). 
                    These settlements have thousands of inhabitants, monumental 
                    architecture, social hierarchy, and specialized labor.`,
      scientificData: {
        firstCities: ['Eridu', 'Uruk'],
        population: 'Thousands',
        features: [
          'Monumental temples',
          'Writing (cuneiform)',
          'Social classes',
          'Specialized trades'
        ]
      },
      coordinates: { lat: 31.2, lng: 45.8 },
      location: 'Uruk, Iraq'
    },
    
    {
      id: 'writing-invented',
      year: -3200,
      name: 'Writing Invented',
      event: 'History begins with written records',
      type: 'civilization',
      importance: 10,
      description: `Writing is invented in Mesopotamia (cuneiform) and Egypt 
                    (hieroglyphics). This marks the beginning of recorded 
                    history and enables complex administration, literature, 
                    and the preservation of knowledge.`,
      scientificData: {
        systems: [
          { name: 'Cuneiform', location: 'Mesopotamia', date: '3200 BCE' },
          { name: 'Hieroglyphics', location: 'Egypt', date: '3200 BCE' },
          { name: 'Chinese', location: 'China', date: '1200 BCE' },
          { name: 'Mesoamerican', location: 'Mexico', date: '900 BCE' }
        ],
        significance: 'Beginning of recorded history'
      }
    },
    
    {
      id: 'industrial-revolution',
      year: -270,
      name: 'Industrial Revolution',
      event: 'Human impact on Earth accelerates dramatically',
      type: 'civilization',
      importance: 10,
      description: `The Industrial Revolution transforms human society. Fossil 
                    fuel use begins in earnest, starting the anthropogenic 
                    increase in atmospheric CO2 that will lead to modern 
                    climate change.`,
      scientificData: {
        start: '1750s CE',
        fossilFuels: 'Coal initially, then oil and gas',
        co2Rise: '280 → 420 ppm',
        consequences: [
          'Population explosion',
          'Urbanization',
          'Biodiversity loss',
          'Climate change'
        ]
      }
    },
    
    {
      id: 'anthropocene-proposed',
      year: -70,
      name: 'Proposed Anthropocene Begins',
      event: 'Human impact defines a new epoch',
      type: 'geological',
      importance: 9,
      description: `The proposed Anthropocene epoch - defined by human impact on 
                    geology and ecosystems. Markers include radioactive fallout 
                    from nuclear tests, plastic pollution, and species extinctions.`,
      scientificData: {
        proposedStart: '1950s CE (Great Acceleration)',
        markers: [
          'Radioactive isotopes (bomb tests)',
          'Plastics',
          'Concrete',
          'Chicken bones',
          'CO2 spike'
        ],
        status: 'Proposed, not formally adopted (as of 2024)'
      }
    },
    
    {
      id: 'present-day',
      year: 0,
      name: 'Present Day',
      event: 'Humanity faces climate crisis',
      type: 'civilization',
      importance: 10,
      description: `The present day: 8 billion humans inhabit Earth. Climate 
                    change from fossil fuel burning is accelerating. The sixth 
                    mass extinction is underway. The future depends on choices 
                    made now.`,
      scientificData: {
        humanPopulation: '8 billion',
        co2Level: '420 ppm (highest in 3 million years)',
        globalTemp: '+1.2°C since pre-industrial',
        speciesExtinction: '100-1000× background rate',
        futureProjections: [
          '+1.5-2°C by 2100 (best case)',
          '+3-5°C by 2100 (worst case)'
        ]
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      paleogene: { O2: '26%', CO2: '500-2000 ppm' },
      neogene: { O2: '21%', CO2: '200-400 ppm' },
      quaternary: { O2: '21%', CO2: '180-420 ppm' }
    },
    
    climate: {
      overall: 'Cooling trend, icehouse conditions',
      paleocene: 'Warm greenhouse recovering from K-Pg',
      eocene: 'Warmest of Cenozoic, no ice',
      oligocene: 'Antarctic ice forms',
      miocene: 'Grasslands spread, cooling',
      pliocene: 'Approaching modern',
      pleistocene: 'Ice ages (glacial-interglacial cycles)',
      holocene: 'Current interglacial'
    },
    
    continents: {
      paleogene: 'India colliding, Atlantic widening',
      neogene: 'Near-modern positions, Panama closes',
      quaternary: 'Modern positions'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE SUMMARY
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    mammals: {
      earlyDiversity: 'All modern orders appear within 10 million years',
      keyGroups: [
        'Primates → Humans',
        'Carnivora → Cats, dogs, bears',
        'Cetaceans → Whales, dolphins',
        'Proboscideans → Elephants',
        'Perissodactyls → Horses, rhinos',
        'Artiodactyls → Cattle, deer, pigs'
      ],
      megafauna: 'Abundant until human arrival'
    },
    
    birds: {
      radiation: 'Diversified after K-Pg extinction',
      giantBirds: 'Terror birds (Phorusrhacids) dominated until carnivores arrived',
      modernDiversity: '~10,000 species'
    },
    
    plants: {
      grasslands: 'Spread in Miocene, transformed ecosystems',
      forests: 'Tropical forests retreat, grasslands and deserts expand',
      flowering: 'Continue to dominate (>300,000 species)'
    },
    
    humanEvolution: {
      timeline: [
        { species: 'Sahelanthropus', age: '7 Ma', brain: '~350 cc' },
        { species: 'Australopithecus', age: '4-2 Ma', brain: '400-500 cc' },
        { species: 'Homo habilis', age: '2.4-1.4 Ma', brain: '600-700 cc' },
        { species: 'Homo erectus', age: '1.9 Ma-100 ka', brain: '900-1100 cc' },
        { species: 'Homo sapiens', age: '300 ka-present', brain: '1350-1500 cc' }
      ],
      keyMilestones: [
        'Bipedalism (~7 Ma)',
        'Stone tools (~3.3 Ma)',
        'Control of fire (~1 Ma)',
        'Language (unknown)',
        'Art (~45 ka)',
        'Agriculture (~10 ka)',
        'Writing (~5 ka)',
        'Science (~400 years)'
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KEY FOSSIL SITES
  // ═══════════════════════════════════════════════════════════════════════
  
  keyFormations: [
    {
      name: 'Messel Pit',
      age: '47 Ma',
      location: 'Germany',
      significance: 'Exceptional Eocene mammal preservation',
      coordinates: { lat: 49.9, lng: 8.8 }
    },
    {
      name: 'Fayum',
      age: '37-29 Ma',
      location: 'Egypt',
      significance: 'Early primates and proboscideans',
      coordinates: { lat: 29.4, lng: 30.6 }
    },
    {
      name: 'Olduvai Gorge',
      age: '2-0.2 Ma',
      location: 'Tanzania',
      significance: 'Early human evolution',
      coordinates: { lat: -2.9, lng: 35.3 }
    },
    {
      name: 'Laetoli',
      age: '3.7 Ma',
      location: 'Tanzania',
      significance: 'Australopithecus footprints',
      coordinates: { lat: -3.2, lng: 35.2 }
    },
    {
      name: 'La Brea Tar Pits',
      age: '50-10 ka',
      location: 'California, USA',
      significance: 'Pleistocene megafauna',
      coordinates: { lat: 34.1, lng: -118.4 }
    },
    {
      name: 'Rising Star Cave',
      age: '236-335 ka',
      location: 'South Africa',
      significance: 'Homo naledi discovery',
      coordinates: { lat: -26.0, lng: 27.7 }
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(CENOZOIC_ERA);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CENOZOIC_ERA;
}

console.log('🧬 Cenozoic Era data loaded: ' + CENOZOIC_ERA.events.length + ' events');
