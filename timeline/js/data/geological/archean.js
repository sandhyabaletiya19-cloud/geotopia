// js/data/geological/archean.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ARCHEAN EON - "The Ancient Age"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 4,000 - 2,500 Million Years Ago (1.5 billion years)
 *  Named after: Greek "archaios" (ancient)
 *  
 *  The age when:
 *  - First stable continents formed (cratons)
 *  - Life originated (prokaryotes)
 *  - First photosynthesis began
 *  - Atmosphere was still oxygen-free
 *  - Banded Iron Formations created
 *  
 *  By the end: Multiple continents, cyanobacteria produce oxygen
 * ═══════════════════════════════════════════════════════════════════════════
 */

const ARCHEAN_EON = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'archean',
  name: 'Archean Eon',
  etymology: 'From Greek "archaios" meaning ancient or beginning',
  
  timeRange: {
    start: -4000000000,  // 4.0 billion years ago
    end: -2500000000,    // 2.5 billion years ago
    duration: 1500000000 // 1.5 billion years
  },
  
  color: '#8B0000',
  gradient: 'linear-gradient(135deg, #8B0000, #4B0082, #006400)',
  
  description: `The Archean Eon was when Earth became recognizably planetary. The first 
                stable continental crust formed as cratons that still exist today. More 
                importantly, life originated during this eon - simple prokaryotic cells 
                that left behind stromatolite fossils. By the late Archean, cyanobacteria 
                began producing oxygen through photosynthesis, setting the stage for the 
                greatest atmospheric change in Earth's history.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Eras within the Archean)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'eoarchean',
      name: 'Eoarchean Era',
      timeRange: { start: -4000000000, end: -3600000000 },
      duration: 400000000,
      description: 'Oldest known rocks form. Life may have originated.',
      keyEvents: ['acasta-gneiss', 'first-life-possible'],
      characteristics: 'Stabilizing surface, waning bombardment'
    },
    {
      id: 'paleoarchean',
      name: 'Paleoarchean Era',
      timeRange: { start: -3600000000, end: -3200000000 },
      duration: 400000000,
      description: 'First definite evidence of life. Earliest stromatolites.',
      keyEvents: ['earliest-fossils', 'earliest-stromatolites'],
      characteristics: 'First microbial ecosystems'
    },
    {
      id: 'mesoarchean',
      name: 'Mesoarchean Era',
      timeRange: { start: -3200000000, end: -2800000000 },
      duration: 400000000,
      description: 'First large continents form. Diverse microbial life.',
      keyEvents: ['vaalbara-supercontinent', 'first-large-cratons'],
      characteristics: 'Continental growth accelerates'
    },
    {
      id: 'neoarchean',
      name: 'Neoarchean Era',
      timeRange: { start: -2800000000, end: -2500000000 },
      duration: 300000000,
      description: 'Supercontinent Kenorland forms. Oxygen begins accumulating.',
      keyEvents: ['kenorland-formation', 'oxygen-production-begins'],
      characteristics: 'Preparation for Great Oxygenation'
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  EOARCHEAN ERA (4.0 - 3.6 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'archean-begins',
      year: -4000000000,
      name: 'Archean Eon Begins',
      event: 'Earth transitions from Hadean chaos to stability',
      type: 'geological',
      importance: 10,
      description: `The Archean Eon begins as impact rates decline and the first 
                    permanent continental crust stabilizes. The surface is mostly 
                    ocean with scattered volcanic islands. The atmosphere remains 
                    reducing (no oxygen), but conditions for life are improving.`,
      scientificData: {
        surfaceTemperature: '55-85°C',
        oceanCoverage: '60-70%',
        landCoverage: '5-10% (small islands)',
        atmospherePressure: '1-3 atm'
      }
    },
    
    {
      id: 'acasta-gneiss-formation',
      year: -4030000000,
      name: 'Acasta Gneiss Formation',
      event: 'Oldest known intact rocks on Earth form',
      type: 'geological',
      importance: 10,
      description: `The Acasta Gneiss of northern Canada forms, becoming the oldest 
                    known intact rocks on Earth. These metamorphosed granitic rocks 
                    prove that felsic continental crust existed over 4 billion years ago.`,
      scientificData: {
        age: '4.03 billion years',
        rockType: 'Tonalite gneiss',
        originalRock: 'Granite',
        metamorphism: 'High-grade'
      },
      coordinates: { lat: 65.0, lng: -115.5 },
      location: 'Slave Craton, Northwest Territories, Canada'
    },
    
    {
      id: 'nuvvuagittuq-greenstone',
      year: -4000000000,
      name: 'Nuvvuagittuq Greenstone Belt',
      event: 'Possible oldest rocks with potential life signatures',
      type: 'geological',
      importance: 9,
      description: `The Nuvvuagittuq greenstone belt in Quebec may contain rocks 
                    up to 4.4 billion years old, with structures that some scientists 
                    interpret as evidence of early microbial life. The dating and 
                    life interpretations remain controversial.`,
      scientificData: {
        age: '3.8-4.4 billion years (disputed)',
        possibleBioSignatures: 'Filamentous structures',
        controversy: 'Age and biogenicity debated'
      },
      coordinates: { lat: 58.5, lng: -78.0 },
      location: 'Quebec, Canada'
    },
    
    {
      id: 'late-heavy-bombardment-ends',
      year: -3800000000,
      name: 'Late Heavy Bombardment Ends',
      event: 'Major asteroid bombardment phase concludes',
      type: 'geological',
      importance: 9,
      description: `The Late Heavy Bombardment ends, with impact rates dropping 
                    to near-modern levels. The surface becomes stable enough for 
                    persistent oceans and the emergence of life. Continental crust 
                    begins to accumulate without constant destruction.`,
      scientificData: {
        impactRateAfter: '~100× current (dropping)',
        surfaceStability: 'Greatly improved',
        oceanPermanence: 'Established'
      }
    },
    
    {
      id: 'isua-supracrustal-belt',
      year: -3800000000,
      name: 'Isua Supracrustal Belt Forms',
      event: 'Oldest well-preserved rocks with possible life evidence',
      type: 'geological',
      importance: 9,
      description: `The Isua supracrustal belt of Greenland forms, containing some 
                    of the best-preserved Eoarchean rocks. These include banded iron 
                    formations and graphite with isotopic signatures that may indicate 
                    biological carbon fixation.`,
      scientificData: {
        age: '3.8 billion years',
        rockTypes: 'BIF, metavolcanics, metasediments',
        carbonIsotopes: 'δ13C suggests possible life',
        preservation: 'Good despite metamorphism'
      },
      coordinates: { lat: 65.2, lng: -50.0 },
      location: 'Southwest Greenland'
    },
    
    {
      id: 'origin-of-life',
      year: -3800000000,
      name: 'Origin of Life (Estimated)',
      event: 'First living cells emerge - origin of life on Earth',
      type: 'biological',
      importance: 10,
      description: `Life originates on Earth, possibly in hydrothermal vents, 
                    warm shallow ponds, or even in ice. The first cells are simple 
                    prokaryotes without nuclei. They use chemical energy (chemotrophy) 
                    rather than sunlight. RNA may have preceded DNA (RNA World hypothesis).`,
      scientificData: {
        lifeType: 'Prokaryote (bacteria/archaea)',
        metabolism: 'Chemotrophic',
        possibleLocations: ['Hydrothermal vents', 'Warm ponds', 'Ice'],
        geneticMaterial: 'RNA → DNA transition',
        uncertainty: 'Could be 3.5-4.0 Ga'
      },
      theories: [
        'Hydrothermal vent origin',
        'Warm little pond (Darwin)',
        'Panspermia (life from space)',
        'Ice origin',
        'Radioactive beach hypothesis'
      ]
    },
    
    {
      id: 'first-anoxygenic-photosynthesis',
      year: -3700000000,
      name: 'Anoxygenic Photosynthesis Evolves',
      event: 'First photosynthesis using H2S instead of H2O',
      type: 'biological',
      importance: 9,
      description: `Early bacteria evolve anoxygenic photosynthesis, using hydrogen 
                    sulfide (H2S) or iron (Fe2+) instead of water as an electron donor. 
                    This produces sulfur or iron oxides, not oxygen. These organisms 
                    dominate shallow marine environments.`,
      scientificData: {
        organisms: 'Purple and green bacteria',
        electronDonor: 'H2S, Fe2+, H2',
        products: 'S, Fe3+, no O2',
        energy: 'Sunlight (photons)'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  PALEOARCHEAN ERA (3.6 - 3.2 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'pilbara-craton-formation',
      year: -3600000000,
      name: 'Pilbara Craton Stabilizes',
      event: 'Major continental nucleus forms in Australia',
      type: 'geological',
      importance: 8,
      description: `The Pilbara Craton of Western Australia stabilizes, becoming 
                    one of Earth's oldest preserved continental nuclei. Its greenstone 
                    belts contain spectacular stromatolites and evidence of early 
                    volcanic and sedimentary processes.`,
      scientificData: {
        age: '3.6-2.8 billion years',
        area: '~500,000 km²',
        rockTypes: 'Granite-greenstone terrain'
      },
      coordinates: { lat: -21.0, lng: 118.0 },
      location: 'Western Australia'
    },
    
    {
      id: 'kaapvaal-craton-formation',
      year: -3600000000,
      name: 'Kaapvaal Craton Stabilizes',
      event: 'Major continental nucleus forms in South Africa',
      type: 'geological',
      importance: 8,
      description: `The Kaapvaal Craton of South Africa stabilizes, becoming a key 
                    archive of early Earth history. It later docks with the Pilbara 
                    Craton to form the Vaalbara supercontinent.`,
      scientificData: {
        age: '3.6-2.5 billion years',
        area: '~1,200,000 km²',
        diamonds: 'Hosts world\'s oldest diamonds'
      },
      coordinates: { lat: -26.0, lng: 27.0 },
      location: 'South Africa'
    },
    
    {
      id: 'earliest-stromatolites',
      year: -3500000000,
      name: 'Oldest Definite Stromatolites',
      event: 'Layered microbial structures preserved in rock',
      type: 'biological',
      importance: 10,
      description: `The oldest definite stromatolites form in the Dresser Formation 
                    of Australia. These layered dome structures are built by microbial 
                    mats, proving complex microbial communities existed by 3.5 billion 
                    years ago. They provide definitive evidence of early life.`,
      scientificData: {
        age: '3.48 billion years',
        location: 'Dresser Formation, Pilbara',
        structure: 'Domical, layered',
        builders: 'Microbial mats (bacteria)',
        environment: 'Shallow marine, hydrothermal'
      },
      coordinates: { lat: -21.2, lng: 119.5 },
      location: 'North Pole Dome, Western Australia'
    },
    
    {
      id: 'apex-chert-microfossils',
      year: -3465000000,
      name: 'Apex Chert Microfossils',
      event: 'Possible oldest cellular fossils (controversial)',
      type: 'biological',
      importance: 9,
      description: `The Apex chert of Australia contains filamentous microstructures 
                    originally interpreted as the oldest cellular fossils. Recent 
                    reanalysis suggests they may be biological, showing carbon 
                    isotope signatures consistent with photosynthesis.`,
      scientificData: {
        age: '3.465 billion years',
        morphology: 'Filamentous, cell-like',
        controversy: 'Biological vs mineral origin debated',
        recentFindings: '2017 study supports biological origin'
      },
      coordinates: { lat: -21.3, lng: 119.0 },
      location: 'Apex Basalt, Pilbara, Australia'
    },
    
    {
      id: 'fig-tree-microfossils',
      year: -3400000000,
      name: 'Fig Tree Group Microfossils',
      event: 'Clear bacterial fossils in South Africa',
      type: 'biological',
      importance: 8,
      description: `The Fig Tree Group of South Africa contains well-preserved 
                    microfossils interpreted as bacteria. These spherical and 
                    filamentous structures provide strong evidence for diverse 
                    microbial life in the Paleoarchean.`,
      scientificData: {
        age: '3.4 billion years',
        morphotypes: 'Spheres, filaments',
        preservation: 'Excellent in chert',
        environment: 'Marine'
      },
      coordinates: { lat: -25.9, lng: 31.1 },
      location: 'Barberton Greenstone Belt, South Africa'
    },
    
    {
      id: 'first-nitrogen-fixation',
      year: -3200000000,
      name: 'Biological Nitrogen Fixation Evolves',
      event: 'Microbes learn to convert atmospheric N2',
      type: 'biological',
      importance: 9,
      description: `Microorganisms evolve the ability to fix atmospheric nitrogen 
                    (N2) into ammonia (NH3), making it biologically available. This 
                    crucial innovation allows life to access the vast nitrogen 
                    reservoir in the atmosphere.`,
      scientificData: {
        enzyme: 'Nitrogenase',
        reaction: 'N2 + 8H+ + 8e- → 2NH3 + H2',
        importance: 'Essential for amino acids, DNA',
        evidence: 'Isotopic signatures in sediments'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  MESOARCHEAN ERA (3.2 - 2.8 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'vaalbara-supercontinent',
      year: -3100000000,
      name: 'Vaalbara Supercontinent Forms',
      event: 'First supercontinent assembles from Kaapvaal and Pilbara',
      type: 'geological',
      importance: 9,
      description: `The Kaapvaal and Pilbara cratons collide to form Vaalbara, 
                    possibly Earth's first supercontinent. This assembly shows 
                    that plate tectonics was operating in some form during the 
                    Archean.`,
      scientificData: {
        components: 'Kaapvaal + Pilbara cratons',
        area: '~3 million km²',
        evidence: 'Similar stratigraphy, paleomagnetic data',
        duration: '3.1-2.5 Ga'
      },
      mapState: {
        supercontinent: 'Vaalbara',
        oceanCoverage: 0.7
      }
    },
    
    {
      id: 'pongola-glaciation',
      year: -2900000000,
      name: 'Pongola Glaciation',
      event: 'Oldest known glacial deposits',
      type: 'geological',
      importance: 8,
      description: `Glacial deposits in South Africa and Canada suggest the 
                    earliest known glaciation on Earth. This implies surface 
                    temperatures cold enough for ice, despite the fainter young 
                    Sun (faint young Sun paradox).`,
      scientificData: {
        evidence: 'Diamictites, striated pavements',
        locations: 'Pongola Supergroup, Steep Rock Group',
        globalExtent: 'Uncertain'
      },
      coordinates: { lat: -27.5, lng: 31.5 },
      location: 'Pongola Supergroup, South Africa'
    },
    
    {
      id: 'oxygenic-photosynthesis-origin',
      year: -2900000000,
      name: 'Oxygenic Photosynthesis Evolves',
      event: 'Cyanobacteria begin producing oxygen from water',
      type: 'biological',
      importance: 10,
      description: `Cyanobacteria evolve the revolutionary ability to split water 
                    molecules during photosynthesis, releasing oxygen gas (O2). 
                    This is arguably the most important biochemical innovation in 
                    Earth history, eventually transforming the atmosphere.`,
      scientificData: {
        organisms: 'Cyanobacteria',
        reaction: '6CO2 + 6H2O + light → C6H12O6 + 6O2',
        pigment: 'Chlorophyll a',
        energySource: 'Visible light',
        oxygenFate: 'Immediately consumed by Fe2+, S, etc.'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  NEOARCHEAN ERA (2.8 - 2.5 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'massive-bif-deposition',
      year: -2700000000,
      name: 'Peak Banded Iron Formation Deposition',
      event: 'Massive iron deposits form as oxygen reacts with dissolved iron',
      type: 'geological',
      importance: 9,
      description: `The peak of Banded Iron Formation (BIF) deposition occurs. 
                    Oxygen produced by cyanobacteria reacts with dissolved ferrous 
                    iron (Fe2+) in seawater, precipitating ferric oxide (Fe2O3) in 
                    alternating layers with silica. These deposits become the world's 
                    major iron ore sources.`,
      scientificData: {
        mechanism: 'O2 + 4Fe2+ + 10H2O → 4Fe(OH)3 + 8H+',
        thickness: 'Hundreds of meters',
        locations: 'Hamersley (Australia), Transvaal (SA), Superior (USA)',
        economicValue: 'World\'s major iron ore deposits'
      }
    },
    
    {
      id: 'kenorland-supercontinent',
      year: -2700000000,
      name: 'Kenorland Supercontinent Assembles',
      event: 'Major supercontinent forms from Archean cratons',
      type: 'geological',
      importance: 9,
      description: `The supercontinent Kenorland assembles from multiple Archean 
                    cratons including Laurentia, Baltica, Western Australia, and 
                    others. This marks a period of continental growth and stability.`,
      scientificData: {
        components: 'Multiple cratons',
        area: '~25 million km²',
        duration: '2.7-2.5 Ga',
        breakup: '2.5-2.1 Ga'
      },
      mapState: {
        supercontinent: 'Kenorland',
        oceanCoverage: 0.65
      }
    },
    
    {
      id: 'abitibi-greenstone-gold',
      year: -2700000000,
      name: 'Abitibi Greenstone Belt Forms',
      event: 'World\'s largest Archean gold deposit forms',
      type: 'geological',
      importance: 7,
      description: `The Abitibi greenstone belt forms through volcanism and 
                    hydrothermal activity. It becomes the world's largest Archean 
                    gold deposit, later the foundation of Canada's mining industry.`,
      scientificData: {
        area: '100,000 km²',
        goldContent: 'Billions of ounces',
        formation: 'Volcanic-hydrothermal'
      },
      coordinates: { lat: 48.5, lng: -78.0 },
      location: 'Ontario-Quebec, Canada'
    },
    
    {
      id: 'first-continents-30-percent',
      year: -2600000000,
      name: 'Continents Reach ~30% Modern Area',
      event: 'Continental crust growth accelerates',
      type: 'geological',
      importance: 8,
      description: `Continental crust reaches approximately 30% of its modern 
                    volume. The rate of crustal growth has been a major debate, 
                    with some models suggesting rapid Archean growth and others 
                    gradual accumulation.`,
      scientificData: {
        continentalArea: '~30% of modern',
        oceanicCrust: 'Hotter, thinner than today',
        plateSpeed: 'Possibly faster than today',
        crustThickness: '25-35 km'
      }
    },
    
    {
      id: 'first-eukaryote-biomarkers',
      year: -2700000000,
      name: 'Possible Early Eukaryote Biomarkers',
      event: 'Chemical signatures suggest early eukaryotes',
      type: 'biological',
      importance: 8,
      description: `Molecular biomarkers (steranes) in Archean rocks suggest 
                    eukaryotes may have existed by 2.7 Ga. This is controversial, 
                    as the biomarkers could be contaminants or produced by bacteria.`,
      scientificData: {
        biomarkers: 'Steranes (hopanes)',
        implication: 'Eukaryotic membranes',
        controversy: 'Contamination possible',
        location: 'Pilbara, Australia'
      }
    },
    
    {
      id: 'archean-oxygen-whiffs',
      year: -2600000000,
      name: '"Whiffs" of Oxygen in Atmosphere',
      event: 'Brief spikes of atmospheric oxygen detected',
      type: 'geological',
      importance: 9,
      description: `Geochemical evidence suggests brief "whiffs" of oxygen 
                    appeared in the atmosphere 2.5-2.7 Ga, possibly reaching 
                    0.001% of present levels. These transient increases were 
                    consumed by oxidizing iron and other reductants.`,
      scientificData: {
        oxygenLevel: '0.001% PAL (present atmospheric level)',
        evidence: 'Mo, Re enrichments, S isotopes',
        duration: 'Transient, unstable'
      }
    },
    
    {
      id: 'great-archean-diversification',
      year: -2500000000,
      name: 'Microbial Diversification',
      event: 'Multiple metabolic strategies evolve',
      type: 'biological',
      importance: 8,
      description: `By the end of the Archean, microorganisms have diversified 
                    into many metabolic types: phototrophs, chemotrophs, anaerobes, 
                    and early aerobes. Microbial mats dominate shallow marine 
                    environments worldwide.`,
      scientificData: {
        metabolicTypes: [
          'Oxygenic photosynthesis',
          'Anoxygenic photosynthesis',
          'Methanogenesis',
          'Sulfate reduction',
          'Iron oxidation',
          'Nitrogen fixation'
        ],
        dominantOrganisms: 'Bacteria, Archaea',
        eukaryotes: 'Possibly present'
      }
    },
    
    {
      id: 'archean-ends',
      year: -2500000000,
      name: 'End of Archean Eon',
      event: 'Transition to Proterozoic begins',
      type: 'geological',
      importance: 10,
      description: `The Archean Eon ends with Earth on the verge of a major 
                    transformation. Oxygen is accumulating in the atmosphere, 
                    large continents exist, and diverse microbial life thrives. 
                    The Proterozoic Eon will see the Great Oxygenation Event 
                    and eventual emergence of complex life.`,
      scientificData: {
        atmosphericO2: '~0.001% PAL',
        continentalCoverage: '30% modern',
        oceanCoverage: '70%',
        lifeForms: 'Bacteria, Archaea, possibly early Eukaryotes',
        temperature: '~30-40°C'
      },
      mapState: {
        continents: 'Kenorland supercontinent',
        oceanCoverage: 0.7,
        atmosphericO2: 0.00001
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      composition: {
        N2: '70-80%',
        CO2: '10-20%',
        CH4: '0.1-1%',
        H2O: '1-5%',
        Ar: '1%',
        O2: '<0.001%',
        H2S: 'Trace',
        NH3: 'Trace'
      },
      pressure: '0.5-2 atm',
      temperature: '30-70°C global average',
      color: 'Hazy orange-red (methane smog)',
      greenhouse: 'Strong CO2 + CH4 warming',
      notes: 'Reducing atmosphere, UV reaching surface'
    },
    
    surface: {
      oceanCoverage: '70-80%',
      continentalCoverage: '20-30%',
      continentType: 'Small cratons, greenstone belts',
      temperature: '50-80°C surface oceans',
      oceanChemistry: 'Rich in dissolved Fe2+, low O2',
      tectonics: 'Active, possibly faster than today'
    },
    
    sun: {
      luminosity: '75% of present',
      faintYoungSunParadox: 'Solved by greenhouse gases',
      uvRadiation: 'Intense at surface (no ozone)'
    },
    
    magneticField: {
      present: true,
      strength: '50-100% of modern',
      importance: 'Protects atmosphere from solar wind'
    },
    
    moon: {
      distance: '200,000 → 300,000 km',
      dayLength: '10 → 18 hours',
      tidalRange: 'Still significant'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  MAP STATES (Continental Configuration)
  // ═══════════════════════════════════════════════════════════════════════
  
  mapStates: [
    {
      year: -4000000000,
      description: 'Early Archean',
      continents: [
        {
          name: 'Scattered protocratons',
          type: 'protocontinent',
          fragments: ['Proto-Slave', 'Proto-Pilbara', 'Proto-Kaapvaal']
        }
      ],
      oceanCoverage: 0.85
    },
    {
      year: -3500000000,
      description: 'Growing cratons',
      continents: [
        { name: 'Pilbara Craton', coordinates: { lat: -30, lng: 130 } },
        { name: 'Kaapvaal Craton', coordinates: { lat: 0, lng: 30 } },
        { name: 'Slave Craton', coordinates: { lat: 45, lng: -90 } }
      ],
      oceanCoverage: 0.75
    },
    {
      year: -3100000000,
      description: 'Vaalbara supercontinent',
      continents: [
        {
          name: 'Vaalbara',
          type: 'supercontinent',
          coordinates: { lat: -20, lng: 80 },
          components: ['Pilbara', 'Kaapvaal']
        }
      ],
      oceanCoverage: 0.70
    },
    {
      year: -2700000000,
      description: 'Kenorland assembling',
      continents: [
        {
          name: 'Kenorland',
          type: 'supercontinent',
          coordinates: { lat: 0, lng: 0 },
          components: ['Laurentia', 'Baltica', 'W. Australia', 'Kalahari']
        }
      ],
      oceanCoverage: 0.65
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE SUMMARY
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    present: true,
    domains: ['Bacteria', 'Archaea', 'Possibly early Eukarya'],
    
    majorGroups: [
      {
        name: 'Cyanobacteria',
        appeared: -2900000000,
        significance: 'Oxygenic photosynthesis',
        habitat: 'Shallow marine, stromatolites'
      },
      {
        name: 'Purple bacteria',
        appeared: -3500000000,
        significance: 'Anoxygenic photosynthesis',
        habitat: 'Marine'
      },
      {
        name: 'Methanogens',
        appeared: -3800000000,
        significance: 'Produce methane, greenhouse gas',
        habitat: 'Anoxic environments'
      },
      {
        name: 'Iron-oxidizing bacteria',
        appeared: -3500000000,
        significance: 'Create banded iron formations',
        habitat: 'Marine'
      }
    ],
    
    ecosystems: [
      'Microbial mats (stromatolites)',
      'Hydrothermal vent communities',
      'Planktonic marine communities',
      'Possible terrestrial crusts'
    ],
    
    complexity: 'Single-celled prokaryotes dominant'
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KEY ROCK FORMATIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  keyFormations: [
    {
      name: 'Acasta Gneiss',
      age: '4.03 Ga',
      location: 'Northwest Territories, Canada',
      significance: 'Oldest known intact rocks',
      coordinates: { lat: 65.0, lng: -115.5 }
    },
    {
      name: 'Isua Supracrustal Belt',
      age: '3.8 Ga',
      location: 'Greenland',
      significance: 'Oldest sedimentary rocks, possible life evidence',
      coordinates: { lat: 65.2, lng: -50.0 }
    },
    {
      name: 'Pilbara Supergroup',
      age: '3.5-2.8 Ga',
      location: 'Western Australia',
      significance: 'Oldest stromatolites, microfossils',
      coordinates: { lat: -21.0, lng: 119.0 }
    },
    {
      name: 'Barberton Greenstone Belt',
      age: '3.5-3.2 Ga',
      location: 'South Africa',
      significance: 'Early life evidence, komatiites',
      coordinates: { lat: -25.8, lng: 31.0 }
    },
    {
      name: 'Abitibi Greenstone Belt',
      age: '2.7 Ga',
      location: 'Ontario-Quebec, Canada',
      significance: 'World\'s largest Archean gold deposit',
      coordinates: { lat: 48.5, lng: -78.0 }
    },
    {
      name: 'Hamersley Basin BIF',
      age: '2.6-2.4 Ga',
      location: 'Western Australia',
      significance: 'Major iron ore deposits',
      coordinates: { lat: -22.5, lng: 117.5 }
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(ARCHEAN_EON);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARCHEAN_EON;
}

console.log('🦠 Archean Eon data loaded: ' + ARCHEAN_EON.events.length + ' events');
