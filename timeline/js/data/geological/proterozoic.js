// js/data/geological/proterozoic.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  PROTEROZOIC EON - "The Age of Early Life"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 2,500 - 541 Million Years Ago (1.96 billion years)
 *  Named after: Greek "protero" (earlier) + "zoic" (life)
 *  
 *  The age when:
 *  - Great Oxygenation Event transforms atmosphere
 *  - First eukaryotic cells appear
 *  - First multicellular life evolves
 *  - Snowball Earth events occur
 *  - Complex animals emerge (Ediacaran biota)
 *  
 *  By the end: Oxygen reaches modern levels, complex life ready to explode
 * ═══════════════════════════════════════════════════════════════════════════
 */

const PROTEROZOIC_EON = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'proterozoic',
  name: 'Proterozoic Eon',
  etymology: 'From Greek "protero" (earlier) + "zoic" (life/animal)',
  
  timeRange: {
    start: -2500000000,  // 2.5 billion years ago
    end: -541000000,     // 541 million years ago
    duration: 1959000000 // Nearly 2 billion years
  },
  
  color: '#4B0082',
  gradient: 'linear-gradient(135deg, #4B0082, #006400, #1E90FF)',
  
  description: `The Proterozoic Eon was the longest eon of visible change. It began with 
                the Great Oxygenation Event that fundamentally changed Earth's atmosphere, 
                killing most anaerobic life but enabling more complex metabolisms. Eukaryotic 
                cells evolved, then multicellular life, and finally the first animals. 
                The eon was punctuated by at least four "Snowball Earth" glaciations that 
                covered the entire planet in ice.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Eras within the Proterozoic)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'paleoproterozoic',
      name: 'Paleoproterozoic Era',
      timeRange: { start: -2500000000, end: -1600000000 },
      duration: 900000000,
      description: 'Great Oxygenation Event. First eukaryotes appear.',
      keyEvents: ['great-oxygenation', 'huronian-glaciation', 'first-eukaryotes'],
      periods: [
        { name: 'Siderian', range: { start: -2500000000, end: -2300000000 } },
        { name: 'Rhyacian', range: { start: -2300000000, end: -2050000000 } },
        { name: 'Orosirian', range: { start: -2050000000, end: -1800000000 } },
        { name: 'Statherian', range: { start: -1800000000, end: -1600000000 } }
      ]
    },
    {
      id: 'mesoproterozoic',
      name: 'Mesoproterozoic Era',
      timeRange: { start: -1600000000, end: -1000000000 },
      duration: 600000000,
      description: 'Rodinia supercontinent assembles. Sexual reproduction evolves.',
      keyEvents: ['columbia-breakup', 'rodinia-assembly', 'sexual-reproduction'],
      periods: [
        { name: 'Calymmian', range: { start: -1600000000, end: -1400000000 } },
        { name: 'Ectasian', range: { start: -1400000000, end: -1200000000 } },
        { name: 'Stenian', range: { start: -1200000000, end: -1000000000 } }
      ]
    },
    {
      id: 'neoproterozoic',
      name: 'Neoproterozoic Era',
      timeRange: { start: -1000000000, end: -541000000 },
      duration: 459000000,
      description: 'Snowball Earth events. First animals appear.',
      keyEvents: ['snowball-earth', 'ediacaran-biota', 'animals-emerge'],
      periods: [
        { name: 'Tonian', range: { start: -1000000000, end: -720000000 } },
        { name: 'Cryogenian', range: { start: -720000000, end: -635000000 } },
        { name: 'Ediacaran', range: { start: -635000000, end: -541000000 } }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  PALEOPROTEROZOIC ERA (2.5 - 1.6 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'proterozoic-begins',
      year: -2500000000,
      name: 'Proterozoic Eon Begins',
      event: 'Transition from Archean to Proterozoic',
      type: 'geological',
      importance: 10,
      description: `The Proterozoic Eon begins as oxygen accumulates in the atmosphere, 
                    ending the Archean. This transition marks the beginning of the 
                    most profound environmental change in Earth's history.`,
      scientificData: {
        atmosphericO2: 'Rising above 0.001% PAL',
        continents: 'Kenorland breaking up',
        life: 'Cyanobacteria dominant'
      }
    },
    
    {
      id: 'great-oxygenation-event',
      year: -2450000000,
      name: 'Great Oxygenation Event (GOE)',
      event: 'Free oxygen permanently accumulates in atmosphere',
      type: 'geological',
      importance: 10,
      description: `The most significant atmospheric change in Earth's history. 
                    Oxygen produced by cyanobacteria finally overwhelms all reducing 
                    sinks (iron, sulfur, organic matter). Free O2 permanently accumulates 
                    in the atmosphere. This is a catastrophe for anaerobic life but 
                    enables the evolution of aerobic respiration.`,
      scientificData: {
        oxygenLevel: '0.001% → 1-2% PAL',
        duration: '~200 million years',
        evidence: 'Disappearance of detrital pyrite, uraninite; red beds appear',
        causes: 'Cyanobacteria + exhaustion of reducing sinks',
        consequences: [
          'Mass extinction of anaerobes',
          'Formation of ozone layer',
          'End of banded iron formation deposition',
          'Enables aerobic respiration'
        ]
      }
    },
    
    {
      id: 'huronian-glaciation-start',
      year: -2400000000,
      name: 'Huronian Glaciation Begins',
      event: 'First well-documented ice age, possible Snowball Earth',
      type: 'geological',
      importance: 9,
      description: `Earth enters a severe glaciation, possibly the first "Snowball Earth." 
                    The cause may be the loss of methane greenhouse gas, which was 
                    oxidized by the rising oxygen. Ice sheets extend to equatorial 
                    latitudes.`,
      scientificData: {
        duration: '300 million years (2.4-2.1 Ga)',
        glacialDeposits: 'Gowganda Formation, Ontario',
        extent: 'Possibly global',
        cause: 'Methane oxidation → loss of greenhouse'
      },
      coordinates: { lat: 47.0, lng: -83.0 },
      location: 'Huronian Supergroup, Ontario, Canada'
    },
    
    {
      id: 'kenorland-breakup',
      year: -2400000000,
      name: 'Kenorland Supercontinent Breakup',
      event: 'First well-documented supercontinent cycle completes',
      type: 'geological',
      importance: 8,
      description: `The supercontinent Kenorland begins to break apart, with rifting 
                    creating new ocean basins. This demonstrates that the supercontinent 
                    cycle was operating in the early Proterozoic.`,
      scientificData: {
        fragments: ['Laurentia', 'Baltica', 'Australia', 'Kalahari'],
        rifting: 'Multiple rift basins'
      }
    },
    
    {
      id: 'ozone-layer-forms',
      year: -2300000000,
      name: 'Ozone Layer Begins Forming',
      event: 'UV shield develops as oxygen accumulates',
      type: 'geological',
      importance: 9,
      description: `With oxygen accumulating in the atmosphere, UV radiation splits 
                    O2 molecules, forming ozone (O3). The ozone layer begins shielding 
                    Earth's surface from harmful UV radiation, making land colonization 
                    eventually possible.`,
      scientificData: {
        ozoneMechanism: 'O2 + UV → 2O; O + O2 → O3',
        altitude: '15-35 km',
        uvReduction: 'Significant',
        importance: 'Enables life on land (eventually)'
      }
    },
    
    {
      id: 'vredefort-impact',
      year: -2023000000,
      name: 'Vredefort Impact',
      event: 'Largest confirmed impact crater on Earth forms',
      type: 'catastrophic',
      importance: 9,
      description: `An asteroid approximately 10-15 km in diameter strikes what is 
                    now South Africa, creating the Vredefort crater - the largest 
                    confirmed impact structure on Earth at ~300 km diameter.`,
      scientificData: {
        craterDiameter: '300 km (original)',
        impactorSize: '10-15 km',
        energy: '10^23 Joules',
        currentStructure: '90 km remnant dome'
      },
      coordinates: { lat: -27.0, lng: 27.5 },
      location: 'Free State, South Africa'
    },
    
    {
      id: 'sudbury-impact',
      year: -1849000000,
      name: 'Sudbury Impact',
      event: 'Second largest impact crater on Earth forms',
      type: 'catastrophic',
      importance: 8,
      description: `A massive impact creates the Sudbury Basin in Ontario, Canada. 
                    The structure is rich in nickel, copper, and platinum group elements, 
                    making it one of the world's most important mining districts.`,
      scientificData: {
        craterDiameter: '250 km (original)',
        currentSize: '60 x 30 km (deformed)',
        impactorSize: '10-15 km',
        mineralDeposits: 'Ni, Cu, PGE'
      },
      coordinates: { lat: 46.5, lng: -81.0 },
      location: 'Ontario, Canada'
    },
    
    {
      id: 'columbia-supercontinent',
      year: -1800000000,
      name: 'Columbia Supercontinent Assembles',
      event: 'First fully documented supercontinent forms',
      type: 'geological',
      importance: 9,
      description: `The supercontinent Columbia (also called Nuna) assembles from 
                    most of Earth's continental crust. This is the first supercontinent 
                    with strong geological evidence for its configuration.`,
      scientificData: {
        alternateNames: ['Nuna', 'Hudsonland'],
        components: ['Laurentia', 'Baltica', 'Siberia', 'N. China', 'W. Africa'],
        area: '~100 million km²',
        duration: '1.8-1.5 Ga'
      },
      mapState: {
        supercontinent: 'Columbia',
        oceanCoverage: 0.6
      }
    },
    
    {
      id: 'first-definite-eukaryotes',
      year: -1800000000,
      name: 'First Definite Eukaryotes',
      event: 'Complex cells with nuclei appear',
      type: 'biological',
      importance: 10,
      description: `The first definite eukaryotic cells appear, characterized by 
                    membrane-bound nuclei and organelles. The leading theory 
                    (endosymbiosis) suggests mitochondria and chloroplasts originated 
                    as engulfed bacteria.`,
      scientificData: {
        fossils: 'Grypania spiralis',
        features: ['Nucleus', 'Mitochondria', 'Complex organelles'],
        mechanism: 'Endosymbiosis',
        significance: 'Enables complex life'
      }
    },
    
    {
      id: 'grypania-spiralis',
      year: -1850000000,
      name: 'Grypania spiralis Fossils',
      event: 'Oldest probable eukaryote fossils discovered',
      type: 'biological',
      importance: 8,
      description: `Coiled, ribbon-like fossils called Grypania spiralis appear in 
                    iron formations. These are interpreted as early eukaryotic algae, 
                    representing some of the oldest known complex cells.`,
      scientificData: {
        morphology: 'Coiled ribbon, 1-2 mm wide',
        interpretation: 'Eukaryotic alga',
        location: 'Michigan (USA), China',
        controversy: 'Could be cyanobacterial colony'
      },
      coordinates: { lat: 46.5, lng: -87.5 },
      location: 'Negaunee Iron Formation, Michigan'
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  MESOPROTEROZOIC ERA (1.6 - 1.0 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'columbia-breakup',
      year: -1500000000,
      name: 'Columbia Supercontinent Breakup',
      event: 'Supercontinent begins rifting apart',
      type: 'geological',
      importance: 8,
      description: `The supercontinent Columbia begins to break apart. Rifting creates 
                    new ocean basins, setting the stage for eventual reassembly into 
                    Rodinia.`,
      scientificData: {
        duration: '300 million years',
        rifts: 'Midcontinent Rift (N. America)',
        newOceans: 'Proto-Pacific'
      }
    },
    
    {
      id: 'boring-billion-begins',
      year: -1800000000,
      name: '"Boring Billion" Period Begins',
      event: 'Period of relative environmental stability',
      type: 'geological',
      importance: 7,
      description: `Earth enters a long period of relative environmental stability 
                    known as the "Boring Billion" (1.8-0.8 Ga). Oxygen levels are 
                    stable but low, continental configuration changes slowly, and 
                    life evolves gradually without major innovations.`,
      scientificData: {
        oxygenLevel: '1-10% PAL',
        tectonics: 'Slow',
        lifeDiversification: 'Gradual',
        duration: '1 billion years'
      }
    },
    
    {
      id: 'first-sexual-reproduction',
      year: -1200000000,
      name: 'Sexual Reproduction Evolves',
      event: 'Genetic recombination accelerates evolution',
      type: 'biological',
      importance: 9,
      description: `Sexual reproduction evolves in eukaryotes, enabling genetic 
                    recombination. This dramatically accelerates evolution by 
                    combining beneficial mutations from different lineages.`,
      scientificData: {
        evidence: 'Bangiomorpha pubescens (red alga)',
        mechanism: 'Meiosis + gamete fusion',
        advantage: 'Genetic variation, faster adaptation'
      }
    },
    
    {
      id: 'bangiomorpha-pubescens',
      year: -1200000000,
      name: 'Bangiomorpha pubescens',
      event: 'Oldest sexually reproducing organism fossil',
      type: 'biological',
      importance: 8,
      description: `Fossils of the red alga Bangiomorpha pubescens from Arctic Canada 
                    show clear evidence of sexual reproduction - distinct male and 
                    female forms. This is the oldest confirmed sexual dimorphism.`,
      scientificData: {
        morphology: 'Filamentous red alga',
        sexualDimorphism: 'Male and female structures visible',
        location: 'Hunting Formation, Arctic Canada',
        significance: 'Confirms sexual reproduction by 1.2 Ga'
      },
      coordinates: { lat: 75.0, lng: -97.0 },
      location: 'Somerset Island, Nunavut, Canada'
    },
    
    {
      id: 'grenville-orogeny',
      year: -1100000000,
      name: 'Grenville Orogeny',
      event: 'Major mountain-building event as Rodinia assembles',
      type: 'geological',
      importance: 8,
      description: `The Grenville Orogeny creates a massive mountain chain as 
                    continents collide to form Rodinia. The Grenville belt extends 
                    from Texas to Labrador and is one of the best-studied ancient 
                    mountain belts.`,
      scientificData: {
        mountainHeight: 'Himalayan-scale',
        extent: 'Texas to Labrador',
        cause: 'Rodinia assembly',
        duration: '1.3-1.0 Ga'
      },
      coordinates: { lat: 45.0, lng: -75.0 },
      location: 'Grenville Province, eastern North America'
    },
    
    {
      id: 'rodinia-supercontinent',
      year: -1000000000,
      name: 'Rodinia Supercontinent Assembles',
      event: 'New supercontinent forms at equator',
      type: 'geological',
      importance: 10,
      description: `The supercontinent Rodinia assembles, with all continental crust 
                    gathered primarily at equatorial latitudes. This configuration 
                    will have profound climatic consequences, leading to the 
                    Snowball Earth events.`,
      scientificData: {
        components: 'All major continents',
        centerLocation: 'Equatorial',
        area: '~150 million km²',
        duration: '1.0-0.75 Ga'
      },
      mapState: {
        supercontinent: 'Rodinia',
        position: 'Equatorial',
        oceanCoverage: 0.55
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  NEOPROTEROZOIC ERA (1.0 - 0.541 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'boring-billion-ends',
      year: -800000000,
      name: '"Boring Billion" Ends',
      event: 'Environmental stability gives way to extreme changes',
      type: 'geological',
      importance: 8,
      description: `The long period of environmental stability ends. Oxygen levels 
                    begin fluctuating, Rodinia starts breaking apart, and Earth 
                    enters an era of extreme climate swings.`,
      scientificData: {
        trigger: 'Rodinia breakup begins',
        consequences: ['Increased weathering', 'CO2 drawdown', 'Cooling']
      }
    },
    
    {
      id: 'rodinia-breakup',
      year: -750000000,
      name: 'Rodinia Breakup Begins',
      event: 'Supercontinent begins rifting apart',
      type: 'geological',
      importance: 9,
      description: `Rodinia begins breaking apart through rifting. The breakup 
                    increases weathering of continental rocks, which draws down 
                    atmospheric CO2 and triggers global cooling.`,
      scientificData: {
        mechanism: 'Rifting',
        climateEffect: 'Increased weathering → CO2 drawdown → cooling',
        newContinents: 'Proto-Laurentia, Proto-Gondwana'
      }
    },
    
    {
      id: 'sturtian-glaciation',
      year: -720000000,
      name: 'Sturtian Glaciation (Snowball Earth)',
      event: 'Global glaciation covers entire planet in ice',
      type: 'catastrophic',
      importance: 10,
      description: `Earth enters its most severe ice age. Glaciers extend from poles 
                    to equator, covering nearly the entire planet. Sea ice may have 
                    been kilometers thick. Life survives only in refugia: hydrothermal 
                    vents, cracks in ice, volcanic hot spots.`,
      scientificData: {
        duration: '55-60 million years',
        extent: 'Global (glacial deposits at all paleolatitudes)',
        iceThickness: '1-3 km on continents',
        seaIce: 'Up to 1 km thick',
        surfaceTemperature: '-40 to -50°C',
        oceanTemperature: '-2°C (still liquid below ice)',
        escape: 'Volcanic CO2 accumulation'
      },
      mapState: {
        glaciation: 'global',
        iceExtent: 'Equator to poles'
      }
    },
    
    {
      id: 'first-animals-possible',
      year: -700000000,
      name: 'First Animals May Appear',
      event: 'Molecular clocks suggest animal origins during glaciation',
      type: 'biological',
      importance: 9,
      description: `Molecular clock analyses suggest the first animals may have 
                    originated during or just before the Sturtian glaciation. These 
                    would be simple sponge-like organisms, surviving in refugia 
                    under the ice.`,
      scientificData: {
        organisms: 'Proto-sponges, simple metazoans',
        evidence: 'Molecular clocks',
        fossilEvidence: 'Lacking from this period',
        environment: 'Possibly hydrothermal vents'
      }
    },
    
    {
      id: 'sturtian-ends',
      year: -660000000,
      name: 'Sturtian Glaciation Ends',
      event: 'Volcanic CO2 triggers rapid warming',
      type: 'geological',
      importance: 9,
      description: `After ~60 million years, volcanic CO2 accumulates to such high 
                    levels that even the high albedo of ice cannot prevent warming. 
                    The ice melts catastrophically, creating a brief ultra-greenhouse 
                    world.`,
      scientificData: {
        co2Level: '350× modern (estimated)',
        meltTime: 'Thousands of years',
        postGlacialTemp: '50°C+ surface',
        capCarbonate: 'Deposited worldwide'
      }
    },
    
    {
      id: 'marinoan-glaciation',
      year: -650000000,
      name: 'Marinoan Glaciation (Snowball Earth)',
      event: 'Second global glaciation',
      type: 'catastrophic',
      importance: 10,
      description: `Earth freezes over again in another Snowball Earth event. The 
                    Marinoan glaciation is shorter but equally severe, with ice 
                    reaching the equator. Cap carbonates mark its end worldwide.`,
      scientificData: {
        duration: '~15 million years',
        extent: 'Global',
        evidence: 'Glacial deposits in Namibia, Australia, China',
        ending: 'Cap carbonates deposited'
      },
      coordinates: { lat: -23.0, lng: 15.0 },
      location: 'Nama Group, Namibia'
    },
    
    {
      id: 'marinoan-ends',
      year: -635000000,
      name: 'Marinoan Glaciation Ends / Ediacaran Begins',
      event: 'Final major Snowball Earth ends, Ediacaran Period begins',
      type: 'geological',
      importance: 10,
      description: `The Marinoan glaciation ends, marking the beginning of the 
                    Ediacaran Period. Oxygen levels surge following the glaciation, 
                    setting the stage for the evolution of complex animals.`,
      scientificData: {
        oxygenSurge: '10% → 15%+ PAL',
        cause: 'Organic carbon burial post-glaciation',
        significance: 'Enables animal evolution'
      }
    },
    
    {
      id: 'gaskiers-glaciation',
      year: -580000000,
      name: 'Gaskiers Glaciation',
      event: 'Final Neoproterozoic glaciation, less severe',
      type: 'geological',
      importance: 7,
      description: `A final, less severe glaciation occurs. The Gaskiers glaciation 
                    is shorter and may not have been a full Snowball Earth. It 
                    occurs shortly before the explosion of Ediacaran biota.`,
      scientificData: {
        duration: '<1 million years',
        extent: 'Possibly not global',
        timing: 'Just before Ediacaran radiation'
      }
    },
    
    {
      id: 'avalon-explosion',
      year: -575000000,
      name: 'Avalon Explosion',
      event: 'First diverse complex organisms appear',
      type: 'biological',
      importance: 10,
      description: `Complex, macroscopic organisms suddenly appear in the fossil 
                    record. The Avalon assemblage includes rangeomorphs - fractal, 
                    frond-like organisms up to 2 meters long that lived on the 
                    seafloor.`,
      scientificData: {
        organisms: ['Rangeomorphs', 'Fractofusus', 'Charnia'],
        size: 'Up to 2 meters',
        lifestyle: 'Sessile, seafloor',
        feeding: 'Osmotrophy? Unknown',
        location: 'Mistaken Point, Newfoundland'
      },
      coordinates: { lat: 46.6, lng: -53.2 },
      location: 'Mistaken Point, Newfoundland, Canada'
    },
    
    {
      id: 'dickinsonia-appears',
      year: -560000000,
      name: 'Dickinsonia Appears',
      event: 'Iconic Ediacaran organism evolves',
      type: 'biological',
      importance: 9,
      description: `Dickinsonia, one of the most iconic Ediacaran organisms, appears. 
                    This oval, quilted organism up to 1.4 meters long is now confirmed 
                    as an animal based on cholesterol biomarkers found in fossils.`,
      scientificData: {
        size: 'Up to 1.4 m',
        morphology: 'Oval, segmented',
        kingdom: 'Animalia (confirmed 2018)',
        evidence: 'Cholesterol biomarkers',
        lifestyle: 'Mat-grazer'
      },
      coordinates: { lat: -31.0, lng: 138.0 },
      location: 'Ediacara Hills, South Australia'
    },
    
    {
      id: 'kimberella-appears',
      year: -555000000,
      name: 'Kimberella Appears',
      event: 'First animal with apparent bilateral symmetry',
      type: 'biological',
      importance: 9,
      description: `Kimberella appears, possibly the oldest bilaterian animal. This 
                    slug-like organism left feeding traces showing it grazed on 
                    microbial mats. It may be related to molluscs.`,
      scientificData: {
        size: '10-15 cm',
        morphology: 'Bilateral, slug-like',
        feeding: 'Grazing on microbial mats',
        relationship: 'Possibly early mollusc',
        significance: 'Oldest bilaterian?'
      },
      coordinates: { lat: 60.5, lng: 57.5 },
      location: 'White Sea, Russia'
    },
    
    {
      id: 'cloudina-appears',
      year: -550000000,
      name: 'Cloudina Appears',
      event: 'First mineralized skeletal animal',
      type: 'biological',
      importance: 9,
      description: `Cloudina evolves the first known mineralized external skeleton - 
                    a tubular calcareous shell. Some specimens show bore holes, 
                    indicating predation existed. This marks the beginning of the 
                    "arms race" that will drive the Cambrian Explosion.`,
      scientificData: {
        skeleton: 'Calcareous tube',
        size: '1-5 cm long, 1-8 mm diameter',
        predation: 'Bore holes found',
        significance: 'First biomineralization, first predation evidence'
      },
      coordinates: { lat: -23.0, lng: 15.5 },
      location: 'Nama Group, Namibia'
    },
    
    {
      id: 'first-trace-fossils',
      year: -555000000,
      name: 'First Complex Trace Fossils',
      event: 'Animals begin burrowing in seafloor',
      type: 'biological',
      importance: 8,
      description: `The first complex trace fossils appear, showing that animals 
                    were actively moving across and burrowing into the seafloor. 
                    This bioturbation will eventually revolutionize marine ecosystems.`,
      scientificData: {
        traceTypes: ['Horizontal burrows', 'Grazing trails'],
        depth: 'Surface only (not yet vertical)',
        makers: 'Bilaterian animals'
      }
    },
    
    {
      id: 'nama-assemblage',
      year: -550000000,
      name: 'Nama Assemblage',
      event: 'Diverse Ediacaran ecosystem before the end',
      type: 'biological',
      importance: 8,
      description: `The Nama assemblage represents the final flourishing of Ediacaran 
                    life. It includes Cloudina, Namacalathus, and other organisms 
                    with hard parts, showing life was becoming more complex.`,
      scientificData: {
        organisms: ['Cloudina', 'Namacalathus', 'Ernietta'],
        characteristics: 'First hard parts',
        ecology: 'Reef-like communities',
        location: 'Namibia'
      },
      coordinates: { lat: -24.0, lng: 16.0 },
      location: 'Namibia'
    },
    
    {
      id: 'ediacaran-extinction',
      year: -542000000,
      name: 'End-Ediacaran Extinction',
      event: 'Most Ediacaran organisms disappear',
      type: 'catastrophic',
      importance: 9,
      description: `The strange organisms of the Ediacaran largely disappear at or 
                    before the Cambrian boundary. Whether this was a mass extinction 
                    or ecological replacement by new Cambrian organisms is debated.`,
      scientificData: {
        victims: 'Rangeomorphs, most Ediacaran biota',
        survivors: 'Some into early Cambrian',
        cause: 'Unknown (environment? competition?)',
        coincidence: 'Begins simultaneously with Cambrian radiation'
      }
    },
    
    {
      id: 'proterozoic-ends',
      year: -541000000,
      name: 'End of Proterozoic Eon',
      event: 'Transition to Phanerozoic Eon / Cambrian Period',
      type: 'geological',
      importance: 10,
      description: `The Proterozoic Eon ends with the first appearance of complex 
                    trace fossils (Treptichnus pedum) marking the Cambrian boundary. 
                    The Phanerozoic Eon - the age of visible life - begins.`,
      scientificData: {
        marker: 'Treptichnus pedum trace fossil',
        oxygen: '~15% PAL',
        globalBiosphere: 'Animals widespread',
        nextEvent: 'Cambrian Explosion'
      },
      mapState: {
        continents: 'Gondwana + smaller continents',
        oceanCoverage: 0.65,
        atmosphericO2: 0.15
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      earlyComposition: {
        N2: '78%',
        CO2: '10-20%',
        O2: '0.1-2%',
        CH4: '0.01%',
        Ar: '1%'
      },
      lateComposition: {
        N2: '78%',
        CO2: '0.5-5%',
        O2: '5-18%',
        CH4: '0.001%',
        Ar: '1%'
      },
      ozoneLayer: 'Developing → established',
      notes: 'Oxygen rises dramatically during this eon'
    },
    
    climate: {
      overall: 'Highly variable',
      extremes: 'Snowball Earth events',
      temperature: '-50°C (glacial) to +50°C (post-glacial)',
      notes: 'Most extreme climate swings in Earth history'
    },
    
    surface: {
      continents: 'Columbia → Rodinia → breaking up',
      oceanCoverage: '55-70%',
      oceanChemistry: 'Becoming oxygenated',
      tectonics: 'Active, supercontinent cycles'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE SUMMARY
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    majorDevelopments: [
      'Eukaryotic cells become dominant',
      'Sexual reproduction evolves',
      'First multicellular organisms',
      'First animals appear',
      'First organisms with hard parts'
    ],
    
    keyOrganisms: [
      { name: 'Cyanobacteria', significance: 'Continue oxygenating atmosphere' },
      { name: 'Grypania', significance: 'Early eukaryotic alga' },
      { name: 'Bangiomorpha', significance: 'First sexual reproduction evidence' },
      { name: 'Tappania', significance: 'Complex eukaryotic cell' },
      { name: 'Rangeomorphs', significance: 'First complex multicellular life' },
      { name: 'Dickinsonia', significance: 'Early animal' },
      { name: 'Kimberella', significance: 'Possible early bilaterian' },
      { name: 'Cloudina', significance: 'First mineralized skeleton' }
    ],
    
    ecosystems: [
      'Stromatolite reefs',
      'Open ocean plankton',
      'Ediacaran seafloor communities',
      'Early reef communities'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KEY ROCK FORMATIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  keyFormations: [
    {
      name: 'Huronian Supergroup',
      age: '2.4-2.2 Ga',
      location: 'Ontario, Canada',
      significance: 'Evidence of first ice age',
      coordinates: { lat: 47.0, lng: -83.0 }
    },
    {
      name: 'Gunflint Formation',
      age: '1.88 Ga',
      location: 'Minnesota/Ontario',
      significance: 'Spectacular microfossils',
      coordinates: { lat: 47.5, lng: -89.5 }
    },
    {
      name: 'Ediacara Hills',
      age: '560-550 Ma',
      location: 'South Australia',
      significance: 'Type locality for Ediacaran Period',
      coordinates: { lat: -31.0, lng: 138.0 }
    },
    {
      name: 'Mistaken Point',
      age: '575-560 Ma',
      location: 'Newfoundland, Canada',
      significance: 'Oldest complex fossils',
      coordinates: { lat: 46.6, lng: -53.2 }
    },
    {
      name: 'Doushantuo Formation',
      age: '630-550 Ma',
      location: 'South China',
      significance: 'Possible embryo fossils',
      coordinates: { lat: 30.5, lng: 111.0 }
    },
    {
      name: 'Nama Group',
      age: '550-541 Ma',
      location: 'Namibia',
      significance: 'First shelly fossils',
      coordinates: { lat: -24.0, lng: 16.0 }
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(PROTEROZOIC_EON);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROTEROZOIC_EON;
}

console.log('❄️ Proterozoic Eon data loaded: ' + PROTEROZOIC_EON.events.length + ' events');
