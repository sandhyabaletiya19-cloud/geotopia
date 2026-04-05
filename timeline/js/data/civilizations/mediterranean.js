/**
 * GEOTOPIA - Mediterranean Civilizations
 * Minoan Crete, Mycenaean Greece, Ancient Greece, Hellenistic World, Roman Empire
 */

const MEDITERRANEAN_CIVILIZATIONS = {
  region: 'Mediterranean',
  color: '#4682B4', // Steel Blue
  timeRange: { start: -2700, end: 476 },
  
  civilizations: [
    {
      id: 'minoan',
      name: 'Minoan Civilization',
      timespan: { start: -2700, end: -1100 },
      center: { lat: 35.3, lng: 25.1 }, // Crete
      
      timeline: [
        {
          year: -2700,
          event: 'Minoan Civilization Emerges',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Knossos', lat: 35.2979, lng: 25.1632 }
          },
          details: 'Bronze Age civilization on Crete, Europe\'s first advanced civilization.',
          achievements: ['Palace architecture', 'Linear A script', 'Maritime trade']
        },
        {
          year: -2000,
          event: 'Palace Period Begins',
          type: 'major',
          importance: 8,
          details: 'Construction of great palaces at Knossos, Phaistos, Malia.',
          achievements: ['Advanced plumbing', 'Frescoes', 'Bull-leaping culture']
        },
        {
          year: -1600,
          event: 'Thera Eruption',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 36.4, lng: 25.4 }, // Santorini
          details: 'Massive volcanic eruption destroys Thera, devastates Minoan civilization.',
          casualties: 'Unknown, possibly tens of thousands',
          aftermath: 'Possible origin of Atlantis legend'
        },
        {
          year: -1450,
          event: 'Mycenaean Takeover',
          type: 'political',
          importance: 7,
          details: 'Mycenaean Greeks conquer weakened Minoan Crete.'
        },
        {
          year: -1100,
          event: 'Final Collapse',
          type: 'catastrophic',
          importance: 6,
          details: 'Minoan-Mycenaean culture ends during Bronze Age Collapse.'
        }
      ],
      
      achievements: [
        'Linear A writing',
        'Palace architecture',
        'Maritime trade empire',
        'Advanced art/frescoes',
        'Indoor plumbing',
        'Bull-leaping sport'
      ],
      
      influence: {
        influenced: ['mycenaean', 'greece-ancient'],
        tradeRoutes: ['mediterranean', 'egypt']
      }
    },
    
    {
      id: 'mycenaean',
      name: 'Mycenaean Greece',
      timespan: { start: -1600, end: -1100 },
      center: { lat: 37.7, lng: 22.8 }, // Mycenae
      
      timeline: [
        {
          year: -1600,
          event: 'Mycenaean Civilization Rises',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Mycenae', lat: 37.7308, lng: 22.7569 }
          },
          details: 'Indo-European Greeks establish fortified kingdoms.',
          achievements: ['Cyclopean masonry', 'Linear B script', 'Warrior culture']
        },
        {
          year: -1250,
          event: 'Trojan War (legendary)',
          type: 'military',
          importance: 9,
          location: { lat: 39.95, lng: 26.24 }, // Troy
          details: 'Legendary war between Mycenaean coalition and Troy. Basis for Homer\'s Iliad.',
          culturalImpact: 'Foundation myth of Greek civilization',
          keyFigures: ['Agamemnon', 'Achilles', 'Odysseus', 'Hector']
        },
        {
          year: -1100,
          event: 'Bronze Age Collapse',
          type: 'catastrophic',
          importance: 9,
          details: 'Mycenaean palaces destroyed, writing lost, population crashes.',
          causes: ['Sea Peoples invasions', 'Earthquakes', 'Climate change', 'Internal conflict'],
          aftermath: 'Greek Dark Ages begin (400 years)'
        }
      ],
      
      achievements: [
        'Linear B writing (earliest Greek)',
        'Tholos tombs',
        'Cyclopean fortifications',
        'Bronze weapons/armor',
        'Trade networks'
      ],
      
      influence: {
        influenced: ['greece-ancient'],
        influencedBy: ['minoan']
      }
    },
    
    {
      id: 'greece-ancient',
      name: 'Ancient Greece',
      timespan: { start: -800, end: -146 },
      center: { lat: 38.0, lng: 23.7 }, // Athens
      
      timeline: [
        {
          year: -800,
          event: 'Greek Renaissance - End of Dark Ages',
          type: 'cultural',
          importance: 8,
          details: 'Greek alphabet adopted, Homer composes epics, city-states emerge.',
          achievements: ['Iliad & Odyssey', 'Phoenician alphabet adapted', 'Polis system']
        },
        {
          year: -776,
          event: 'First Olympic Games',
          type: 'cultural',
          importance: 8,
          location: { lat: 37.6379, lng: 21.6300 }, // Olympia
          details: 'Pan-Hellenic games established, promoting Greek unity.',
          culturalImpact: 'Continued for 1,000+ years, revived 1896'
        },
        {
          year: -750,
          event: 'Greek Colonization Begins',
          type: 'major',
          importance: 8,
          mapState: {
            colonies: [
              { name: 'Syracuse', lat: 37.08, lng: 15.29 }, // Sicily
              { name: 'Byzantium', lat: 41.01, lng: 28.97 }, // Constantinople
              { name: 'Massalia', lat: 43.30, lng: 5.37 }, // Marseille
              { name: 'Cyrene', lat: 32.82, lng: 21.86 }  // Libya
            ]
          },
          details: 'Greeks establish colonies across Mediterranean and Black Sea.',
          extent: 'From Spain to Crimea'
        },
        {
          year: -508,
          event: 'Athenian Democracy Established',
          type: 'political',
          importance: 10,
          ruler: 'Cleisthenes',
          mapState: {
            capital: { name: 'Athens', lat: 37.9838, lng: 23.7275 }
          },
          details: 'Cleisthenes reforms create world\'s first democracy.',
          significance: 'Foundation of Western political thought',
          system: 'Direct democracy for male citizens'
        },
        {
          year: -490,
          event: 'Battle of Marathon',
          type: 'military',
          importance: 9,
          location: { lat: 38.1167, lng: 23.9667 },
          opponent: 'Persian Empire',
          details: 'Outnumbered Athenians defeat first Persian invasion.',
          casualties: '6,400 Persians, 192 Athenians',
          culturalImpact: 'Origin of marathon race (messenger ran 26 miles to Athens)'
        },
        {
          year: -480,
          event: 'Battle of Thermopylae',
          type: 'military',
          importance: 10,
          location: { lat: 38.8, lng: 22.5 },
          details: '300 Spartans and allies hold Persian army for 3 days.',
          leader: 'King Leonidas',
          outcome: 'Heroic defeat, delayed Persians',
          culturalImpact: 'Ultimate symbol of sacrifice and courage'
        },
        {
          year: -480,
          event: 'Battle of Salamis',
          type: 'military',
          importance: 10,
          location: { lat: 37.96, lng: 23.55 },
          details: 'Greek fleet destroys Persian navy, saving Greece.',
          commander: 'Themistocles',
          significance: 'Preserved Greek independence and democracy'
        },
        {
          year: -461,
          event: 'Age of Pericles Begins',
          type: 'cultural',
          importance: 10,
          ruler: 'Pericles',
          details: 'Golden Age of Athens - democracy, art, philosophy, architecture flourish.',
          achievements: [
            'Parthenon construction',
            'Sophocles writes tragedies',
            'Socrates teaches',
            'Direct democracy peak'
          ]
        },
        {
          year: -447,
          event: 'Parthenon Construction Begins',
          type: 'cultural',
          importance: 9,
          location: { lat: 37.9715, lng: 23.7267 },
          architects: ['Ictinus', 'Callicrates'],
          sculptor: 'Phidias',
          details: 'Iconic temple to Athena, epitome of Classical architecture.',
          culturalImpact: 'Most influential building in Western architecture'
        },
        {
          year: -431,
          event: 'Peloponnesian War Begins',
          type: 'military',
          importance: 9,
          opponents: 'Athens vs Sparta',
          details: '27-year conflict between Greek city-states.',
          causes: 'Athenian imperialism vs Spartan militarism'
        },
        {
          year: -430,
          event: 'Plague of Athens',
          type: 'catastrophic',
          importance: 8,
          casualties: '75,000-100,000 dead (25% of population)',
          details: 'Epidemic devastates Athens during war, kills Pericles.',
          disease: 'Possibly typhoid or Ebola'
        },
        {
          year: -404,
          event: 'Athens Defeated - Sparta Victorious',
          type: 'political',
          importance: 8,
          details: 'Athens surrenders, democracy temporarily overthrown.',
          aftermath: 'Thirty Tyrants installed by Sparta'
        },
        {
          year: -399,
          event: 'Trial and Death of Socrates',
          type: 'cultural',
          importance: 10,
          details: 'Socrates executed for "corrupting youth" and "impiety".',
          significance: 'Martyrdom for philosophy, influenced Western thought forever',
          students: ['Plato', 'Xenophon']
        },
        {
          year: -387,
          event: 'Plato Founds Academy',
          type: 'cultural',
          importance: 10,
          location: { lat: 37.99, lng: 23.71 }, // Athens
          details: 'First institution of higher learning in Western world.',
          significance: 'Operated for 900 years, model for universities',
          achievements: ['Philosophy', 'Mathematics', 'Astronomy']
        },
        {
          year: -338,
          event: 'Battle of Chaeronea - Macedonian Conquest',
          type: 'military',
          importance: 9,
          location: { lat: 38.50, lng: 22.58 },
          victor: 'Philip II of Macedon',
          details: 'Macedonia defeats combined Greek forces, ends independence.',
          significance: 'End of Classical Greek period'
        },
        {
          year: -336,
          event: 'Alexander Becomes King',
          type: 'political',
          importance: 10,
          ruler: 'Alexander III (the Great)',
          details: '20-year-old Alexander inherits Macedonian throne after Philip\'s assassination.'
        },
        {
          year: -334,
          event: 'Alexander Invades Persia',
          type: 'military',
          importance: 10,
          details: 'Alexander begins conquest of Persian Empire.',
          mapState: {
            campaign: 'begins'
          }
        },
        {
          year: -331,
          event: 'Battle of Gaugamela',
          type: 'military',
          importance: 10,
          location: { lat: 36.36, lng: 43.25 }, // Iraq
          details: 'Alexander defeats Darius III, conquers Persian Empire.',
          forces: '47,000 Macedonians vs 100,000+ Persians',
          outcome: 'Decisive victory'
        },
        {
          year: -326,
          event: 'Alexander Reaches India',
          type: 'major',
          importance: 9,
          location: { lat: 31.5, lng: 74.3 }, // Punjab
          details: 'Alexander\'s army reaches India but refuses to go further.',
          extent: 'Largest empire in ancient world'
        },
        {
          year: -323,
          event: 'Death of Alexander the Great',
          type: 'catastrophic',
          importance: 10,
          location: { lat: 32.54, lng: 44.42 }, // Babylon
          details: 'Alexander dies at 32 in Babylon, empire fragments.',
          cause: 'Fever (possibly malaria or poisoning)',
          aftermath: 'Wars of the Diadochi - empire splits'
        },
        {
          year: -306,
          event: 'Hellenistic Kingdoms Established',
          type: 'political',
          importance: 9,
          details: 'Alexander\'s generals carve up empire into kingdoms.',
          kingdoms: [
            { name: 'Ptolemaic Egypt', ruler: 'Ptolemy I' },
            { name: 'Seleucid Empire', ruler: 'Seleucus I' },
            { name: 'Antigonid Macedonia', ruler: 'Antigonus' }
          ]
        },
        {
          year: -300,
          event: 'Library of Alexandria Founded',
          type: 'cultural',
          importance: 10,
          location: { lat: 31.2, lng: 29.9 },
          details: 'Largest library in ancient world, center of scholarship.',
          holdings: '400,000-700,000 scrolls',
          scholars: ['Euclid', 'Archimedes', 'Eratosthenes']
        },
        {
          year: -146,
          event: 'Roman Conquest of Greece',
          type: 'political',
          importance: 8,
          details: 'Rome annexes Greece after Battle of Corinth.',
          significance: 'End of political independence, beginning of cultural dominance',
          aftermath: 'Greece becomes Roman province of Achaea'
        }
      ],
      
      achievements: [
        'Democracy',
        'Western philosophy (Socrates, Plato, Aristotle)',
        'Scientific method',
        'Theater (tragedy & comedy)',
        'Olympic Games',
        'Classical architecture',
        'Mathematics (Pythagoras, Euclid)',
        'Medicine (Hippocrates)',
        'History writing (Herodotus, Thucydides)',
        'Epic poetry',
        'Sculpture',
        'Astronomy'
      ],
      
      keyFigures: [
        { name: 'Homer', role: 'Epic Poet', years: [-800, -750] },
        { name: 'Solon', role: 'Lawgiver', years: [-630, -560] },
        { name: 'Pythagoras', role: 'Mathematician', years: [-570, -495] },
        { name: 'Herodotus', role: 'Father of History', years: [-484, -425] },
        { name: 'Socrates', role: 'Philosopher', years: [-469, -399] },
        { name: 'Pericles', role: 'Statesman', years: [-495, -429] },
        { name: 'Hippocrates', role: 'Father of Medicine', years: [-460, -370] },
        { name: 'Plato', role: 'Philosopher', years: [-428, -348] },
        { name: 'Aristotle', role: 'Philosopher', years: [-384, -322] },
        { name: 'Alexander the Great', role: 'Conqueror', years: [-356, -323] },
        { name: 'Euclid', role: 'Mathematician', years: [-325, -265] },
        { name: 'Archimedes', role: 'Scientist', years: [-287, -212] }
      ],
      
      influence: {
        influenced: ['rome', 'all-western-civilization'],
        influencedBy: ['egypt-ancient', 'phoenicia', 'mesopotamia'],
        tradeRoutes: ['mediterranean', 'black-sea']
      }
    },
    
    {
      id: 'rome',
      name: 'Roman Empire',
      timespan: { start: -753, end: 476 },
      center: { lat: 41.9, lng: 12.5 }, // Rome
      
      timeline: [
        {
          year: -753,
          event: 'Founding of Rome (legendary)',
          type: 'political',
          importance: 10,
          founder: 'Romulus',
          mapState: {
            capital: { name: 'Rome', lat: 41.9028, lng: 12.4964 },
            size: 'village'
          },
          details: 'Traditional founding date by Romulus and Remus.',
          legend: 'Twins raised by she-wolf'
        },
        {
          year: -509,
          event: 'Roman Republic Established',
          type: 'political',
          importance: 9,
          details: 'Monarchy overthrown, republic with Senate and consuls begins.',
          system: 'Mixed constitution (monarchy, aristocracy, democracy)',
          motto: 'SPQR - Senatus Populusque Romanus'
        },
        {
          year: -264,
          event: 'First Punic War Begins',
          type: 'military',
          importance: 9,
          opponent: 'Carthage',
          details: 'Rome challenges Carthage for control of Sicily.'
        },
        {
          year: -218,
          event: 'Hannibal Invades Italy',
          type: 'military',
          importance: 10,
          details: 'Carthaginian general crosses Alps with elephants.',
          threat: 'Most dangerous enemy Rome ever faced'
        },
        {
          year: -146,
          event: 'Destruction of Carthage & Conquest of Greece',
          type: 'major',
          importance: 9,
          details: 'Rome becomes dominant Mediterranean power.',
          mapState: {
            controlled: ['italy', 'sicily', 'north-africa', 'greece', 'spain']
          }
        },
        {
          year: -73,
          event: 'Spartacus Slave Revolt',
          type: 'military',
          importance: 8,
          leader: 'Spartacus',
          details: 'Gladiator leads 70,000+ slaves in rebellion.',
          outcome: '6,000 rebels crucified along Appian Way'
        },
        {
          year: -60,
          event: 'First Triumvirate',
          type: 'political',
          importance: 8,
          members: ['Julius Caesar', 'Pompey', 'Crassus'],
          details: 'Informal alliance controls Rome.'
        },
        {
          year: -49,
          event: 'Caesar Crosses Rubicon',
          type: 'political',
          importance: 10,
          details: 'Julius Caesar crosses Rubicon River with army, sparking civil war.',
          quote: '"The die is cast" (Alea iacta est)',
          significance: 'Point of no return - idiom born'
        },
        {
          year: -44,
          event: 'Assassination of Julius Caesar',
          type: 'catastrophic',
          importance: 10,
          location: { lat: 41.8955, lng: 12.4823 }, // Theatre of Pompey
          details: 'Caesar stabbed 23 times by senators led by Brutus and Cassius.',
          date: 'Ides of March (March 15)',
          lastWords: '"Et tu, Brute?" (And you, Brutus?)',
          aftermath: 'End of Republic'
        },
        {
          year: -31,
          event: 'Battle of Actium',
          type: 'military',
          importance: 10,
          location: { lat: 38.9, lng: 20.7 }, // Greece
          combatants: 'Octavian vs Marc Antony & Cleopatra',
          details: 'Octavian defeats Antony, becomes sole ruler.',
          outcome: 'End of Roman civil wars'
        },
        {
          year: -27,
          event: 'Roman Empire Begins',
          type: 'political',
          importance: 10,
          ruler: 'Augustus (Octavian)',
          details: 'Senate grants Octavian title "Augustus", becomes first emperor.',
          system: 'Principate - empire disguised as republic',
          significance: 'Pax Romana begins (200 years of peace)'
        },
        {
          year: 0,
          event: 'Birth of Jesus Christ',
          type: 'cultural',
          importance: 10,
          location: { lat: 31.7, lng: 35.2 }, // Bethlehem
          details: 'Jesus born in Roman Judaea, founder of Christianity.',
          significance: 'Divides human history (BC/AD)',
          context: 'Under Emperor Augustus, during census'
        },
        {
          year: 33,
          event: 'Crucifixion of Jesus',
          type: 'cultural',
          importance: 10,
          location: { lat: 31.78, lng: 35.23 }, // Jerusalem
          details: 'Jesus executed by Roman authorities, rises (according to Christians).',
          significance: 'Birth of Christianity as world religion'
        },
        {
          year: 64,
          event: 'Great Fire of Rome',
          type: 'catastrophic',
          importance: 8,
          ruler: 'Nero',
          details: 'Fire destroys 2/3 of Rome. Nero blames Christians.',
          duration: '6 days',
          casualties: 'Thousands',
          aftermath: 'First persecution of Christians'
        },
        {
          year: 79,
          event: 'Eruption of Mount Vesuvius',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 40.82, lng: 14.43 },
          details: 'Pompeii and Herculaneum buried in ash.',
          casualties: '16,000+ killed',
          significance: 'Preserved snapshot of Roman life',
          culturalImpact: 'Archaeological treasure, frozen in time'
        },
        {
          year: 117,
          event: 'Roman Empire at Greatest Extent',
          type: 'major',
          importance: 9,
          ruler: 'Trajan',
          mapState: {
            borders: [
              { lat: 55.0, lng: -3.0 },   // Britain
              { lat: 50.0, lng: 10.0 },   // Germany
              { lat: 45.0, lng: 45.0 },   // Caucasus
              { lat: 33.0, lng: 45.0 },   // Mesopotamia
              { lat: 24.0, lng: 35.0 },   // Egypt
              { lat: 30.0, lng: -10.0 },  // Morocco
              { lat: 37.0, lng: -9.0 }    // Spain
            ],
            area: '5 million km²',
            population: '70 million (25% of world)'
          },
          details: 'Empire stretches from Britain to Mesopotamia.',
          extent: '6 million km²'
        },
        {
          year: 161,
          event: 'Marcus Aurelius Becomes Emperor',
          type: 'political',
          importance: 8,
          ruler: 'Marcus Aurelius',
          details: 'Philosopher-emperor, last of "Five Good Emperors".',
          work: 'Meditations - Stoic philosophy classic'
        },
        {
          year: 212,
          event: 'Edict of Caracalla',
          type: 'political',
          importance: 8,
          details: 'Roman citizenship extended to all free men in empire.',
          significance: 'Unified legal identity'
        },
        {
          year: 284,
          event: 'Diocletian\'s Reforms',
          type: 'political',
          importance: 8,
          ruler: 'Diocletian',
          details: 'Empire split into East and West, Tetrarchy established.',
          reforms: ['Price controls', 'Tax reform', 'Military reorganization']
        },
        {
          year: 313,
          event: 'Edict of Milan',
          type: 'cultural',
          importance: 10,
          ruler: 'Constantine I',
          details: 'Christianity legalized, persecution ends.',
          significance: 'Christianity becomes dominant religion'
        },
        {
          year: 324,
          event: 'Constantinople Founded',
          type: 'political',
          importance: 10,
          location: { lat: 41.01, lng: 28.97 },
          details: 'Constantine establishes new capital on Byzantium.',
          name: '"New Rome" / Constantinople',
          significance: 'Eastern capital lasts 1,000+ years'
        },
        {
          year: 380,
          event: 'Christianity Becomes State Religion',
          type: 'cultural',
          importance: 10,
          ruler: 'Theodosius I',
          details: 'Edict of Thessalonica makes Nicene Christianity official.',
          significance: 'End of pagan Rome'
        },
        {
          year: 395,
          event: 'Permanent Division of Empire',
          type: 'political',
          importance: 9,
          details: 'Empire permanently splits into Western and Eastern (Byzantine).',
          capitals: ['Rome (West)', 'Constantinople (East)']
        },
        {
          year: 410,
          event: 'Sack of Rome by Visigoths',
          type: 'catastrophic',
          importance: 9,
          leader: 'Alaric',
          details: 'Rome plundered for first time in 800 years.',
          quote: 'St. Jerome: "The city which conquered the world is conquered"',
          significance: 'Psychological shock to Roman world'
        },
        {
          year: 476,
          event: 'Fall of Western Roman Empire',
          type: 'catastrophic',
          importance: 10,
          details: 'Last Western Emperor Romulus Augustulus deposed by Odoacer.',
          significance: 'End of ancient world, beginning of Middle Ages',
          note: 'Eastern Empire (Byzantine) continues until 1453'
        }
      ],
      
      achievements: [
        'Roman law (basis of Western legal systems)',
        'Latin language (Romance languages)',
        'Roman roads (73,000 km)',
        'Aqueducts',
        'Concrete',
        'Arches and domes',
        'Senate (representative government)',
        'Professional army',
        'Postal system',
        'Urban planning',
        'Literature (Virgil, Ovid, Cicero)',
        'Engineering',
        'Spread of Christianity'
      ],
      
      keyFigures: [
        { name: 'Romulus', role: 'Legendary Founder', years: [-771, -717] },
        { name: 'Julius Caesar', role: 'General/Dictator', years: [-100, -44] },
        { name: 'Augustus', role: 'First Emperor', years: [-63, 14] },
        { name: 'Jesus Christ', role: 'Religious Founder', years: [-4, 33] },
        { name: 'Nero', role: 'Infamous Emperor', years: [37, 68] },
        { name: 'Trajan', role: 'Greatest Emperor', years: [53, 117] },
        { name: 'Marcus Aurelius', role: 'Philosopher Emperor', years: [121, 180] },
        { name: 'Constantine I', role: 'Christian Emperor', years: [272, 337] },
        { name: 'Virgil', role: 'Poet (Aeneid)', years: [-70, -19] },
        { name: 'Cicero', role: 'Orator/Statesman', years: [-106, -43] }
      ],
      
      influence: {
        influenced: ['all-europe', 'christianity', 'islam', 'byzantine'],
        influencedBy: ['greece-ancient', 'etruscans'],
        tradeRoutes: ['mediterranean', 'silk-road', 'amber-road']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(MEDITERRANEAN_CIVILIZATIONS);
}
