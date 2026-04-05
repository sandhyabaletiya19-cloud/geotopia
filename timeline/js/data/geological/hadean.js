// js/data/geological/hadean.js
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  HADEAN EON - "The Hidden Age"
 * ═══════════════════════════════════════════════════════════════════════════
 *  
 *  Time: 4,540 - 4,000 Million Years Ago (540 million years)
 *  Named after: Hades (Greek god of underworld) - Earth was hellish
 *  
 *  This was Earth's violent birth:
 *  - Planet forms from solar nebula
 *  - Moon created by giant impact
 *  - Constant meteorite bombardment
 *  - Magma oceans cover the surface
 *  - No continents, no life, toxic atmosphere
 *  
 *  By the end: First protocontinents, possible liquid water
 * ═══════════════════════════════════════════════════════════════════════════
 */

const HADEAN_EON = {
  // ═══════════════════════════════════════════════════════════════════════
  //  METADATA
  // ═══════════════════════════════════════════════════════════════════════
  
  type: 'geological',
  id: 'hadean',
  name: 'Hadean Eon',
  etymology: 'From Greek "Hades" - the underworld, reflecting hellish conditions',
  
  timeRange: {
    start: -4540000000,  // 4.54 billion years ago
    end: -4000000000,    // 4.0 billion years ago
    duration: 540000000  // 540 million years
  },
  
  color: '#FF4500',
  gradient: 'linear-gradient(135deg, #FF4500, #DC143C, #8B0000)',
  
  description: `The Hadean Eon represents Earth's violent infancy. The planet formed from 
                the gravitational collapse of the solar nebula, experiencing constant 
                bombardment by asteroids and comets. The surface was covered by magma oceans, 
                and temperatures exceeded 1,000°C. Despite the chaos, by the end of the Hadean, 
                the first protocontinents and possibly liquid water had appeared.`,

  // ═══════════════════════════════════════════════════════════════════════
  //  SUB-DIVISIONS (Informal - no rocks survive from this period)
  // ═══════════════════════════════════════════════════════════════════════
  
  subEras: [
    {
      id: 'cryptic',
      name: 'Cryptic Era',
      timeRange: { start: -4540000000, end: -4500000000 },
      duration: 40000000,
      description: 'Earth forms from solar nebula. Complete magma ocean covers surface.',
      keyEvents: ['earth-formation', 'core-differentiation']
    },
    {
      id: 'basin-groups',
      name: 'Basin Groups Era',
      timeRange: { start: -4500000000, end: -4200000000 },
      duration: 300000000,
      description: 'Giant impact creates Moon. Heavy bombardment begins.',
      keyEvents: ['moon-formation', 'magma-ocean']
    },
    {
      id: 'nectarian',
      name: 'Nectarian Era',
      timeRange: { start: -4200000000, end: -4100000000 },
      duration: 100000000,
      description: 'Major bombardment phase. Large impact basins form.',
      keyEvents: ['nectaris-basin', 'first-crust']
    },
    {
      id: 'early-imbrian',
      name: 'Early Imbrian Era',
      timeRange: { start: -4100000000, end: -4000000000 },
      duration: 100000000,
      description: 'Late Heavy Bombardment peaks. First stable protocontinents.',
      keyEvents: ['lhb-peak', 'first-protocontinent']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  COMPLETE EVENT TIMELINE
  // ═══════════════════════════════════════════════════════════════════════
  
  events: [
    // ───────────────────────────────────────────────────────────────────
    //  EARTH FORMATION (4.54 - 4.5 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'solar-nebula-collapse',
      year: -4567000000,
      name: 'Solar Nebula Collapse',
      event: 'Collapse of molecular cloud begins Solar System formation',
      type: 'geological',
      importance: 10,
      description: `A massive molecular cloud in the Milky Way galaxy begins gravitational 
                    collapse, triggered possibly by a nearby supernova. This cloud will 
                    become our Solar System. The collapse takes approximately 100,000 years 
                    to form a protoplanetary disk.`,
      scientificData: {
        cloudMass: '1-2 solar masses',
        cloudTemperature: '10-20 K',
        collapseTime: '100,000 years',
        triggerEvent: 'Nearby supernova shock wave'
      }
    },
    
    {
      id: 'sun-ignition',
      year: -4567000000,
      name: 'Sun Ignites',
      event: 'Nuclear fusion begins in the proto-Sun',
      type: 'geological',
      importance: 10,
      description: `The proto-Sun reaches sufficient mass and temperature for nuclear fusion 
                    to begin in its core. Hydrogen atoms fuse into helium, releasing enormous 
                    energy. The T Tauri phase begins, with powerful solar winds.`,
      scientificData: {
        coreTemperature: '15 million K',
        luminosity: '70% of current',
        tTauriWindSpeed: '200 km/s'
      }
    },
    
    {
      id: 'earth-accretion-begins',
      year: -4540000000,
      name: 'Earth Accretion Begins',
      event: 'Planetesimals begin coalescing to form proto-Earth',
      type: 'geological',
      importance: 10,
      description: `In the inner Solar System, dust grains stick together to form 
                    planetesimals. These rocky bodies collide and merge through 
                    runaway accretion. Within 10-20 million years, a Mars-sized 
                    proto-Earth emerges.`,
      scientificData: {
        accretionZone: '0.9-1.1 AU',
        initialMass: 'Dust particles',
        accretionRate: 'Exponential',
        temperature: 'Increasing with impacts'
      },
      coordinates: { lat: 0, lng: 0 },
      mapState: {
        earthDiameter: 0.1, // Fraction of current
        surface: 'planetesimals',
        atmosphere: 'none'
      }
    },
    
    {
      id: 'core-differentiation',
      year: -4530000000,
      name: 'Core-Mantle Differentiation',
      event: 'Iron sinks to center, forming Earth\'s core',
      type: 'geological',
      importance: 10,
      description: `The proto-Earth becomes hot enough to melt. Dense iron and nickel 
                    sink to the center, forming the core. Lighter silicates rise to 
                    form the mantle. This catastrophic event releases enormous gravitational 
                    energy, heating Earth further. The magnetic field begins.`,
      scientificData: {
        coreFormationTime: '30 million years',
        coreTemperature: '6,000 K',
        coreComposition: 'Iron-Nickel (85-15%)',
        energyReleased: '2×10^31 Joules',
        magneticFieldStrength: 'Weak but present'
      },
      coordinates: { lat: 0, lng: 0 },
      mapState: {
        earthDiameter: 0.9,
        surface: 'magma ocean',
        coreFormed: true
      }
    },
    
    {
      id: 'first-atmosphere',
      year: -4530000000,
      name: 'First Atmosphere Forms',
      event: 'Volcanic outgassing creates primordial atmosphere',
      type: 'geological',
      importance: 9,
      description: `Intense volcanic activity releases gases trapped in the mantle. 
                    The first atmosphere consists mainly of water vapor, carbon dioxide, 
                    nitrogen, and trace amounts of hydrogen sulfide and ammonia. 
                    No free oxygen exists.`,
      scientificData: {
        composition: {
          H2O: '60%',
          CO2: '30%',
          N2: '5%',
          H2S: '3%',
          NH3: '1%',
          Other: '1%'
        },
        pressure: '250 atm (estimated)',
        temperature: '1,200°C surface'
      }
    },
    
    // ───────────────────────────────────────────────────────────────────
    //  MOON FORMATION - THE GIANT IMPACT
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'theia-approach',
      year: -4510000000,
      name: 'Theia Approaches',
      event: 'Mars-sized planet Theia enters collision course with Earth',
      type: 'geological',
      importance: 8,
      description: `A Mars-sized planetary embryo, named Theia (mother of the Moon 
                    in Greek mythology), has formed at Earth's L4 or L5 Lagrange point. 
                    Gravitational perturbations destabilize its orbit, sending it 
                    on a collision course with Earth.`,
      scientificData: {
        theiaMass: '0.1 Earth masses',
        theiaDiameter: '6,100 km',
        approachVelocity: '4 km/s',
        impactAngle: '45 degrees (estimated)'
      }
    },
    
    {
      id: 'giant-impact',
      year: -4500000000,
      name: 'The Giant Impact (Theia Collision)',
      event: 'Mars-sized body Theia collides with Earth, creating the Moon',
      type: 'catastrophic',
      importance: 10,
      description: `The most violent event in Earth's history. Theia strikes Earth at 
                    approximately 45 degrees. The impact vaporizes both bodies' crusts 
                    and mantles. A ring of debris forms around the molten Earth. Within 
                    a year, this debris coalesces to form the Moon at 1/4 its current 
                    distance. Earth's rotation speeds to 5-hour days.`,
      scientificData: {
        impactEnergy: '10^29 Joules',
        debrisRingMass: '2 lunar masses',
        moonFormationTime: '1-100 years',
        initialMoonDistance: '22,500 km',
        earthDayLength: '5 hours',
        earthTilt: '23.5 degrees (established)',
        surfaceTemperature: '10,000 K (post-impact)'
      },
      coordinates: { lat: 0, lng: 0 },
      mapState: {
        surface: 'vaporized silicate',
        debrisRing: true,
        moonForming: true
      }
    },
    
    {
      id: 'lunar-magma-ocean',
      year: -4500000000,
      name: 'Lunar Magma Ocean',
      event: 'Newly formed Moon covered entirely by magma ocean',
      type: 'geological',
      importance: 8,
      description: `The newly coalesced Moon is entirely molten. A magma ocean covers 
                    the surface to a depth of several hundred kilometers. As it cools, 
                    light plagioclase crystals float to form the anorthosite highlands 
                    we see today.`,
      scientificData: {
        magmaOceanDepth: '500+ km',
        surfaceTemperature: '2,000 K',
        coolingTime: '100-200 million years',
        anorthositeFormation: 'Floating crystals'
      }
    },
    
    {
      id: 'tidal-locking-begins',
      year: -4490000000,
      name: 'Tidal Forces Dominate',
      event: 'Extreme tides reshape Earth and Moon',
      type: 'geological',
      importance: 7,
      description: `With the Moon only 22,500 km away (vs today's 384,400 km), 
                    tidal forces are enormous. Tides on both bodies reach kilometers 
                    high. Angular momentum transfer begins slowing Earth's rotation 
                    and pushing the Moon outward.`,
      scientificData: {
        tidalHeight: '1+ km',
        moonRecessionRate: '20 m/year (initial)',
        earthDayLengthening: '0.002 seconds/year',
        tidalHeating: 'Significant'
      }
    },

    // ───────────────────────────────────────────────────────────────────
    //  POST-IMPACT COOLING (4.5 - 4.4 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'magma-ocean-phase',
      year: -4480000000,
      name: 'Global Magma Ocean',
      event: 'Earth\'s entire surface is molten rock',
      type: 'geological',
      importance: 9,
      description: `Following the giant impact, Earth is completely molten to depths 
                    of hundreds of kilometers. No solid surface exists. Heavy elements 
                    continue sinking to the core while the magma ocean slowly radiates 
                    heat to space. The atmosphere glows red-hot.`,
      scientificData: {
        magmaOceanDepth: '400-1,000 km',
        surfaceTemperature: '2,000 K',
        radiativeHeatLoss: '10^17 W',
        viscosity: 'Low (highly fluid)'
      },
      mapState: {
        surface: 'magma ocean',
        landmass: 'none',
        oceanCoverage: 0
      }
    },
    
    {
      id: 'first-crust-formation',
      year: -4450000000,
      name: 'First Solid Crust',
      event: 'Patches of solid crust begin forming on magma ocean',
      type: 'geological',
      importance: 9,
      description: `As the magma ocean cools, lighter minerals crystallize and float 
                    to the surface, forming a thin, unstable crust. This crust is 
                    repeatedly destroyed by impacts and volcanic activity, but 
                    rebuilds each time. The first rocks of Earth form.`,
      scientificData: {
        crustComposition: 'Ultramafic (komatiite-like)',
        crustThickness: '1-5 km (unstable)',
        surfaceTemperature: '1,200°C',
        crustLifespan: 'Days to years (destroyed by impacts)'
      },
      mapState: {
        surface: 'forming crust',
        crustCoverage: 0.1
      }
    },
    
    {
      id: 'jack-hills-zircons',
      year: -4400000000,
      name: 'Oldest Known Minerals Form',
      event: 'Jack Hills zircon crystals form - oldest known Earth materials',
      type: 'geological',
      importance: 10,
      description: `Zircon crystals form in cooling magma. These microscopic minerals, 
                    later found in Jack Hills, Western Australia, are the oldest known 
                    materials from Earth. Their oxygen isotope ratios suggest liquid 
                    water may have existed, implying surprisingly cool conditions.`,
      scientificData: {
        zirconAge: '4.404 billion years',
        oxygenIsotopes: 'δ18O indicates cool temperatures',
        implications: 'Possible liquid water',
        location: 'Jack Hills, Western Australia (found later)'
      },
      coordinates: { lat: -26.18, lng: 117.17 }
    },
    
    {
      id: 'cool-early-earth-hypothesis',
      year: -4400000000,
      name: 'Cool Early Earth Phase',
      event: 'Evidence suggests surprisingly cool surface temperatures',
      type: 'geological',
      importance: 8,
      description: `Contrary to the traditional "hellish" view of the Hadean, zircon 
                    evidence suggests Earth may have cooled rapidly. Surface temperatures 
                    may have dropped below 100°C in some regions, allowing liquid water 
                    to exist episodically.`,
      scientificData: {
        surfaceTemperature: '0-100°C (possible)',
        waterState: 'Possibly liquid in places',
        crustCoverage: '30% (estimated)',
        evidence: 'Oxygen isotopes in zircons'
      }
    },

    // ───────────────────────────────────────────────────────────────────
    //  LATE HEAVY BOMBARDMENT (4.1 - 3.8 Ga)
    // ───────────────────────────────────────────────────────────────────
    {
      id: 'lhb-begins',
      year: -4100000000,
      name: 'Late Heavy Bombardment Begins',
      event: 'Intense asteroid/comet bombardment phase begins',
      type: 'catastrophic',
      importance: 10,
      description: `A catastrophic period of asteroid and comet impacts begins. 
                    The Nice model suggests this was caused by orbital migration 
                    of the giant planets, which scattered debris from the outer 
                    Solar System inward. Earth receives thousands of major impacts.`,
      scientificData: {
        cause: 'Giant planet migration',
        impactRate: '1000× current',
        impactorSource: 'Asteroid belt + Kuiper belt',
        duration: '300 million years',
        totalMassDelivered: '10^21 kg'
      },
      mapState: {
        surface: 'cratered',
        bombardmentIntensity: 'extreme'
      }
    },
    
    {
      id: 'south-pole-aitken',
      year: -4100000000,
      name: 'South Pole-Aitken Basin Impact',
      event: 'Massive impact creates largest lunar basin',
      type: 'catastrophic',
      importance: 8,
      description: `An asteroid approximately 170 km in diameter strikes the lunar 
                    south pole, creating the South Pole-Aitken basin - the largest 
                    confirmed impact structure in the Solar System (2,500 km diameter). 
                    Earth receives similar or larger impacts.`,
      scientificData: {
        impactorSize: '170 km diameter',
        basinDiameter: '2,500 km',
        basinDepth: '8.2 km',
        location: 'Moon south pole'
      }
    },
    
    {
      id: 'ocean-vaporization-events',
      year: -4050000000,
      name: 'Ocean Vaporization Events',
      event: 'Large impacts repeatedly vaporize early oceans',
      type: 'catastrophic',
      importance: 9,
      description: `If oceans existed during the LHB, they would have been repeatedly 
                    vaporized by large impacts. An impactor larger than 400 km would 
                    boil all surface water. Recovery would take thousands of years 
                    as water rained back from the atmosphere.`,
      scientificData: {
        vaporizationThreshold: '400 km impactor',
        recoveryTime: '3,000 years',
        occurrences: 'Multiple (estimated)',
        effect: 'Sterilization of any early life'
      }
    },
    
    {
      id: 'hadean-end',
      year: -4000000000,
      name: 'End of Hadean Eon',
      event: 'Bombardment decreases, Archean Eon begins',
      type: 'geological',
      importance: 9,
      description: `The Late Heavy Bombardment begins to wane. Impact rates drop 
                    to levels that allow continuous surface water. The oldest 
                    known rocks begin to form and survive. Earth transitions 
                    to the Archean Eon.`,
      scientificData: {
        impactRateDecrease: '90%',
        surfaceConditions: 'Stabilizing',
        waterState: 'Persistent oceans possible',
        crustStability: 'Increasing'
      },
      mapState: {
        surface: 'cooling',
        oceanCoverage: 0.3,
        crustCoverage: 0.5
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENTAL CONDITIONS
  // ═══════════════════════════════════════════════════════════════════════
  
  characteristics: {
    atmosphere: {
      composition: {
        H2O: '60%',
        CO2: '30%',
        N2: '5%',
        H2S: '2%',
        SO2: '1%',
        NH3: '1%',
        CH4: '0.5%',
        O2: '0%'
      },
      pressure: '100-250 atm',
      temperature: '230-1200°C',
      color: 'Orange-red (from suspended dust and sulfur)',
      visibility: 'Near zero (thick clouds)',
      notes: 'Reducing atmosphere, no ozone layer, intense UV radiation'
    },
    
    surface: {
      state: 'Mostly molten → partially solid',
      temperature: '200-1200°C',
      waterPresence: 'Mostly vapor → occasional liquid',
      tectonics: 'None (single magma ocean)',
      continents: 'None → small protocontinents'
    },
    
    magneticField: {
      present: true,
      strength: 'Weak to moderate',
      notes: 'Core dynamo active but unstable'
    },
    
    moon: {
      distance: '22,500 → 200,000 km',
      angularSize: '17× current → 2× current',
      tidalEffects: 'Extreme → moderate',
      tidalLocking: 'Moon locks to Earth'
    },
    
    dayLength: '5 → 10 hours',
    yearLength: '~365 days',
    axialTilt: '23.5° (established by giant impact)'
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  MAP STATES (Continental Configuration)
  // ═══════════════════════════════════════════════════════════════════════
  
  mapStates: [
    {
      year: -4540000000,
      description: 'Forming Earth',
      continents: [],
      oceans: [],
      features: ['Accretion disk', 'Planetesimal bombardment']
    },
    {
      year: -4500000000,
      description: 'Post-impact magma ocean',
      continents: [],
      oceans: [],
      features: ['Global magma ocean', 'Debris ring', 'Forming Moon']
    },
    {
      year: -4400000000,
      description: 'Cooling begins',
      continents: [
        {
          name: 'Protocontinents',
          type: 'unstable',
          coordinates: [
            // Scattered small landmasses
            { lat: 30, lng: 45 },
            { lat: -20, lng: 120 },
            { lat: 10, lng: -60 }
          ]
        }
      ],
      oceans: [],
      features: ['Thin crust forming', 'Possible liquid water']
    },
    {
      year: -4000000000,
      description: 'End of Hadean',
      continents: [
        {
          name: 'Ur (proto-craton)',
          type: 'forming',
          coordinates: [
            { lat: -30, lng: 80 }
          ]
        },
        {
          name: 'Vaalbara (proto-craton)',
          type: 'forming',
          coordinates: [
            { lat: 20, lng: -20 }
          ]
        }
      ],
      oceans: [
        { name: 'Proto-ocean', coverage: 0.4 }
      ],
      features: ['Stabilizing crust', 'Persistent oceans']
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════
  //  EVIDENCE & ROCK RECORD
  // ═══════════════════════════════════════════════════════════════════════
  
  evidence: {
    directEvidence: [
      {
        name: 'Jack Hills Zircons',
        location: 'Western Australia',
        age: '4.404 billion years',
        significance: 'Oldest known Earth materials'
      }
    ],
    indirectEvidence: [
      {
        name: 'Lunar rock samples',
        source: 'Apollo missions',
        significance: 'Date Moon formation'
      },
      {
        name: 'Lunar crater record',
        source: 'Orbital imaging',
        significance: 'Evidence of Late Heavy Bombardment'
      },
      {
        name: 'Meteorite dating',
        source: 'Various',
        significance: 'Date Solar System formation'
      }
    ],
    whyNoRocks: `Virtually no Hadean rocks survive because: 
                 1) Constant bombardment destroyed surface
                 2) Plate tectonics recycled early crust
                 3) Metamorphism altered old rocks
                 Only a few zircon crystals survive.`
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIFE
  // ═══════════════════════════════════════════════════════════════════════
  
  life: {
    present: false,
    probability: 'Unknown',
    notes: `While traditionally thought impossible, some scientists now 
            speculate life could have originated during brief cool periods 
            of the late Hadean, only to be destroyed by impacts. The "impact 
            frustration" hypothesis suggests life may have started and been 
            sterilized multiple times.`
  }
};

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER WITH MASTER INDEX
// ═══════════════════════════════════════════════════════════════════════════

if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(HADEAN_EON);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HADEAN_EON;
}

console.log('🌋 Hadean Eon data loaded: ' + HADEAN_EON.events.length + ' events');
