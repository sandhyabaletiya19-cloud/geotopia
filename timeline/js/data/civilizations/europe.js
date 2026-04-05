/**
 * GEOTOPIA - European Civilizations
 * Celts, Germanic, Vikings, Franks, Holy Roman Empire, Medieval Kingdoms
 */

const EUROPE_CIVILIZATIONS = {
  region: 'Europe',
  color: '#4169E1', // Royal Blue
  timeRange: { start: -800, end: 1500 },
  
  civilizations: [
    {
      id: 'celts',
      name: 'Celtic Civilization',
      timespan: { start: -800, end: 400 },
      center: { lat: 48.0, lng: 2.0 }, // Central Gaul
      
      timeline: [
        {
          year: -800,
          event: 'Hallstatt Culture',
          type: 'cultural',
          importance: 7,
          location: { lat: 47.6, lng: 13.6 }, // Austria
          details: 'Iron Age Celtic culture emerges in Central Europe.',
          characteristics: ['Iron weapons', 'Horse equipment', 'Salt trade']
        },
        {
          year: -450,
          event: 'La Tène Culture',
          type: 'cultural',
          importance: 8,
          details: 'Peak Celtic art style, spread across Europe.',
          extent: 'Ireland to Turkey, Scotland to Italy',
          art: 'Swirling, abstract metalwork designs'
        },
        {
          year: -390,
          event: 'Gauls Sack Rome',
          type: 'military',
          importance: 9,
          details: 'Celtic tribes capture and plunder Rome.',
          leader: 'Brennus',
          quote: '"Vae victis!" (Woe to the vanquished)',
          aftermath: 'Rome pays ransom, humiliating defeat'
        },
        {
          year: -280,
          event: 'Galatians Invade Greece/Anatolia',
          type: 'military',
          importance: 7,
          details: 'Celts invade Greece, settle in Anatolia (Turkey).',
          outcome: 'Galatia - Celtic kingdom in Turkey'
        },
        {
          year: -225,
          event: 'Battle of Telamon',
          type: 'military',
          importance: 7,
          details: 'Rome defeats Gauls in Italy, begins conquest.',
          location: { lat: 42.8, lng: 11.1 }
        },
        {
          year: -58,
          event: 'Caesar\'s Gallic Wars Begin',
          type: 'military',
          importance: 9,
          details: 'Julius Caesar begins conquest of Gaul.',
          duration: '8 years',
          deaths: '1 million Gauls killed, 1 million enslaved'
        },
        {
          year: -52,
          event: 'Siege of Alesia - Gaul Falls',
          type: 'military',
          importance: 10,
          location: { lat: 47.5, lng: 4.5 },
          details: 'Caesar defeats Vercingetorix, conquers Gaul.',
          leader: 'Vercingetorix',
          significance: 'End of Celtic independence in mainland Europe'
        },
        {
          year: 43,
          event: 'Roman Invasion of Britain',
          type: 'military',
          importance: 8,
          ruler: 'Emperor Claudius',
          details: 'Rome conquers southern Britain.',
          resistance: 'Boudicca revolt (60 CE)'
        },
        {
          year: 400,
          event: 'Celtic Languages Retreat',
          type: 'cultural',
          importance: 6,
          details: 'Celtic languages survive only in fringe areas.',
          remnants: 'Ireland, Scotland, Wales, Cornwall, Brittany'
        }
      ],
      
      achievements: [
        'La Tène art style',
        'Iron technology',
        'Chainmail invention',
        'Roads across Europe',
        'Druids religious class',
        'Oral literature traditions',
        'Metalworking',
        'Celtic languages'
      ],
      
      keyFigures: [
        { name: 'Brennus', role: 'Sacked Rome', years: [-400, -390] },
        { name: 'Vercingetorix', role: 'Gallic Hero', years: [-82, -46] },
        { name: 'Boudicca', role: 'British Queen Rebel', years: [30, 61] }
      ],
      
      influence: {
        influenced: ['irish-culture', 'welsh-culture', 'arthurian-legend'],
        influencedBy: ['hallstatt', 'mediterranean']
      }
    },
    
    {
      id: 'vikings',
      name: 'Viking Age',
      timespan: { start: 793, end: 1066 },
      center: { lat: 60.0, lng: 10.0 }, // Scandinavia
      
      timeline: [
        {
          year: 793,
          event: 'Raid on Lindisfarne',
          type: 'military',
          importance: 10,
          location: { lat: 55.68, lng: -1.8 },
          details: 'Viking raid on monastery marks beginning of Viking Age.',
          chronicle: '"Never before has such terror appeared in Britain"',
          significance: 'Start of 300 years of Viking expansion'
        },
        {
          year: 800,
          event: 'Vikings Raid British Isles',
          type: 'military',
          importance: 8,
          details: 'Systematic raiding of Ireland, Scotland, England.',
          targets: 'Monasteries (wealth, no defenses)'
        },
        {
          year: 841,
          event: 'Dublin Founded',
          type: 'political',
          importance: 7,
          details: 'Vikings establish Dublin as trading center.',
          significance: 'Major Viking settlement outside Scandinavia'
        },
        {
          year: 860,
          event: 'Vikings Attack Constantinople',
          type: 'military',
          importance: 7,
          details: 'Rus Vikings besiege Byzantine capital.',
          outcome: 'Trade agreements established'
        },
        {
          year: 865,
          event: 'Great Heathen Army Invades England',
          type: 'military',
          importance: 9,
          details: 'Massive Danish invasion conquers most of England.',
          aftermath: 'Only Wessex remains English'
        },
        {
          year: 878,
          event: 'Alfred the Great\'s Victory',
          type: 'military',
          importance: 9,
          details: 'Wessex defeats Danes at Battle of Edington.',
          result: 'Danelaw established in eastern England',
          significance: 'England survives'
        },
        {
          year: 911,
          event: 'Normandy Granted to Vikings',
          type: 'political',
          importance: 9,
          ruler: 'Rollo',
          details: 'French king grants land to Vikings (Normans).',
          future: 'Normans will conquer England, Sicily, Crusader states'
        },
        {
          year: 930,
          event: 'Althing Founded in Iceland',
          type: 'political',
          importance: 8,
          details: 'World\'s oldest parliament established.',
          location: { lat: 64.3, lng: -21.1 }, // Thingvellir
          significance: 'First democratic assembly in medieval Europe'
        },
        {
          year: 982,
          event: 'Erik the Red Explores Greenland',
          type: 'major',
          importance: 7,
          explorer: 'Erik the Red',
          details: 'Norse settlement of Greenland begins.',
          colonies: 'Eastern and Western Settlements'
        },
        {
          year: 1000,
          event: 'Leif Erikson Reaches North America',
          type: 'major',
          importance: 10,
          explorer: 'Leif Erikson',
          location: { lat: 51.6, lng: -55.5 }, // Newfoundland
          details: 'Norse reach "Vinland" - first Europeans in Americas.',
          site: 'L\'Anse aux Meadows (Newfoundland)',
          significance: '500 years before Columbus'
        },
        {
          year: 1000,
          event: 'Christianization of Scandinavia',
          type: 'cultural',
          importance: 8,
          details: 'Iceland converts; Norway, Denmark, Sweden follow.',
          impact: 'End of pagan Viking culture'
        },
        {
          year: 1014,
          event: 'Battle of Clontarf',
          type: 'military',
          importance: 7,
          location: { lat: 53.4, lng: -6.2 }, // Dublin
          details: 'Irish High King Brian Boru defeats Vikings.',
          aftermath: 'End of Viking power in Ireland'
        },
        {
          year: 1016,
          event: 'Cnut Rules England, Denmark, Norway',
          type: 'political',
          importance: 8,
          ruler: 'Cnut the Great',
          details: 'Viking king rules North Sea Empire.',
          significance: 'Peak of Danish Viking power'
        },
        {
          year: 1066,
          event: 'End of Viking Age',
          type: 'political',
          importance: 10,
          details: 'Harald Hardrada killed at Stamford Bridge; Norman conquest.',
          battles: ['Stamford Bridge (Vikings lose)', 'Hastings (Normans win)'],
          significance: 'End of Scandinavian expansion'
        }
      ],
      
      achievements: [
        'Longship technology',
        'Atlantic exploration (Iceland, Greenland, America)',
        'Althing parliament',
        'Runic writing (Elder Futhark)',
        'Saga literature',
        'Trade networks (Scandinavia to Baghdad)',
        'Dublin, York, Kiev founded',
        'Navigation without compass'
      ],
      
      keyFigures: [
        { name: 'Ragnar Lothbrok', role: 'Legendary Raider', years: [750, 850] },
        { name: 'Rollo', role: 'Founder of Normandy', years: [846, 931] },
        { name: 'Erik the Red', role: 'Greenland Explorer', years: [950, 1003] },
        { name: 'Leif Erikson', role: 'American Explorer', years: [970, 1020] },
        { name: 'Cnut the Great', role: 'King of North Sea', years: [995, 1035] },
        { name: 'Harald Hardrada', role: 'Last Viking King', years: [1015, 1066] }
      ],
      
      influence: {
        influenced: ['normandy', 'russia', 'english-language', 'ireland'],
        influencedBy: ['germanic-tribes'],
        tradeRoutes: ['baltic-sea', 'volga-route', 'atlantic']
      }
    },

    {
      id: 'franks',
      name: 'Frankish Kingdom / Carolingian Empire',
      timespan: { start: 481, end: 987 },
      center: { lat: 49.0, lng: 7.0 }, // Aachen region
      
      timeline: [
        {
          year: 481,
          event: 'Clovis I Unites Franks',
          type: 'political',
          importance: 9,
          ruler: 'Clovis I',
          mapState: {
            capital: { name: 'Paris', lat: 48.8566, lng: 2.3522 }
          },
          details: 'Frankish king unites tribes, conquers Gaul.',
          dynasty: 'Merovingian'
        },
        {
          year: 496,
          event: 'Clovis Converts to Christianity',
          type: 'cultural',
          importance: 10,
          details: 'Frankish king converts to Catholic Christianity.',
          significance: 'Alliance with Papacy, shapes European Christianity',
          legend: 'Baptized with 3,000 warriors at Reims'
        },
        {
          year: 507,
          event: 'Visigoths Expelled from Gaul',
          type: 'military',
          importance: 7,
          battle: 'Battle of Vouillé',
          details: 'Clovis defeats Visigoths, expands to Pyrenees.'
        },
        {
          year: 732,
          event: 'Battle of Tours/Poitiers',
          type: 'military',
          importance: 10,
          location: { lat: 46.6, lng: 0.3 },
          commander: 'Charles Martel',
          opponent: 'Umayyad Caliphate',
          details: 'Frankish army stops Muslim advance into Europe.',
          significance: 'Preserved Christian Europe',
          title: 'Charles "Martel" (The Hammer)'
        },
        {
          year: 751,
          event: 'Carolingian Dynasty Begins',
          type: 'political',
          importance: 9,
          ruler: 'Pepin the Short',
          details: 'Carolingians replace Merovingians with papal blessing.',
          significance: 'Alliance between Franks and Papacy formalized'
        },
        {
          year: 768,
          event: 'Charlemagne Becomes King',
          type: 'political',
          importance: 10,
          ruler: 'Charlemagne (Charles the Great)',
          details: 'Greatest medieval European ruler begins reign.'
        },
        {
          year: 772,
          event: 'Saxon Wars Begin',
          type: 'military',
          importance: 8,
          details: 'Charlemagne begins 30-year conquest of Saxons.',
          methods: 'Forced conversion to Christianity',
          massacre: 'Verden massacre - 4,500 Saxons killed (782)'
        },
        {
          year: 774,
          event: 'Conquest of Lombard Italy',
          type: 'military',
          importance: 8,
          details: 'Charlemagne conquers Lombard Kingdom in Italy.',
          title: 'King of the Lombards'
        },
        {
          year: 778,
          event: 'Battle of Roncevaux Pass',
          type: 'military',
          importance: 7,
          location: { lat: 43.0, lng: -1.3 },
          details: 'Frankish rear guard destroyed by Basques.',
          legend: 'Song of Roland - epic poem',
          casualty: 'Roland, Charlemagne\'s nephew, killed'
        },
        {
          year: 800,
          event: 'Charlemagne Crowned Emperor',
          type: 'political',
          importance: 10,
          location: { lat: 41.9, lng: 12.5 }, // Rome
          details: 'Pope Leo III crowns Charlemagne "Emperor of Romans".',
          date: 'Christmas Day, 800 CE',
          significance: 'Revival of Roman Empire in West',
          mapState: {
            title: 'Holy Roman Emperor',
            borders: [
              { lat: 55.0, lng: 3.0 },   // North Sea
              { lat: 50.0, lng: 15.0 },  // Eastern border
              { lat: 41.0, lng: 15.0 },  // Italy
              { lat: 43.0, lng: -5.0 },  // Spain border
              { lat: 50.0, lng: -5.0 }   // Atlantic
            ]
          }
        },
        {
          year: 800,
          event: 'Carolingian Renaissance',
          type: 'cultural',
          importance: 9,
          details: 'Cultural and educational revival across empire.',
          achievements: [
            'Carolingian minuscule script (basis of modern lowercase)',
            'Monastery schools',
            'Classical text preservation',
            'Alcuin of York as chief scholar'
          ]
        },
        {
          year: 814,
          event: 'Death of Charlemagne',
          type: 'political',
          importance: 9,
          location: { lat: 50.7753, lng: 6.0839 }, // Aachen
          details: 'Charlemagne dies after 46-year reign.',
          legacy: 'Father of Europe, greatest medieval ruler',
          succession: 'Son Louis the Pious inherits'
        },
        {
          year: 843,
          event: 'Treaty of Verdun',
          type: 'political',
          importance: 10,
          details: 'Carolingian Empire divided among Charlemagne\'s grandsons.',
          divisions: [
            'West Francia (France)',
            'East Francia (Germany)',
            'Middle Kingdom (Lotharingia)'
          ],
          significance: 'Origin of France and Germany as separate nations'
        },
        {
          year: 887,
          event: 'Final Division of Empire',
          type: 'political',
          importance: 7,
          details: 'Carolingian Empire permanently fragments.'
        },
        {
          year: 962,
          event: 'Holy Roman Empire Founded',
          type: 'political',
          importance: 9,
          ruler: 'Otto I',
          details: 'German king crowned emperor, revives Charlemagne\'s title.',
          mapState: {
            capital: { name: 'Various (itinerant)', lat: 50.0, lng: 10.0 }
          },
          significance: 'Holy Roman Empire lasts until 1806'
        },
        {
          year: 987,
          event: 'Capetian Dynasty in France',
          type: 'political',
          importance: 8,
          ruler: 'Hugh Capet',
          details: 'Carolingians end in France, Capetians rule until 1848.',
          significance: 'New French royal line'
        }
      ],
      
      achievements: [
        'Carolingian minuscule (modern lowercase letters)',
        'Preservation of classical texts',
        'Monastery network',
        'Feudal system foundations',
        'United Western Europe briefly',
        'Foundation of France and Germany'
      ],
      
      keyFigures: [
        { name: 'Clovis I', role: 'Frankish Founder', years: [466, 511] },
        { name: 'Charles Martel', role: 'The Hammer', years: [688, 741] },
        { name: 'Charlemagne', role: 'Emperor of West', years: [747, 814] },
        { name: 'Alcuin of York', role: 'Scholar', years: [735, 804] },
        { name: 'Otto I', role: 'HRE Founder', years: [912, 973] }
      ],
      
      influence: {
        influenced: ['france', 'germany', 'holy-roman-empire', 'european-christianity'],
        influencedBy: ['rome', 'christianity', 'germanic-tribes']
      }
    },
    
    {
      id: 'byzantine',
      name: 'Byzantine Empire',
      timespan: { start: 330, end: 1453 },
      center: { lat: 41.0, lng: 29.0 }, // Constantinople
      
      timeline: [
        {
          year: 330,
          event: 'Constantinople Founded',
          type: 'political',
          importance: 10,
          ruler: 'Constantine I',
          mapState: {
            capital: { name: 'Constantinople', lat: 41.0082, lng: 28.9784 }
          },
          details: 'Constantine establishes new Roman capital on Byzantium.',
          names: ['Nova Roma', 'Constantinople', 'Istanbul']
        },
        {
          year: 395,
          event: 'Permanent East-West Split',
          type: 'political',
          importance: 9,
          details: 'Roman Empire permanently divided.',
          significance: 'Byzantine Empire becomes distinct entity'
        },
        {
          year: 476,
          event: 'West Falls, East Continues',
          type: 'political',
          importance: 9,
          details: 'Western Roman Empire falls; Byzantium continues.',
          significance: 'Eastern Roman Empire survives 1,000 more years'
        },
        {
          year: 527,
          event: 'Justinian I Becomes Emperor',
          type: 'political',
          importance: 10,
          ruler: 'Justinian I',
          details: 'Greatest Byzantine emperor begins 38-year reign.',
          wife: 'Empress Theodora (former actress)'
        },
        {
          year: 532,
          event: 'Nika Riots',
          type: 'catastrophic',
          importance: 8,
          details: 'Massive riots nearly overthrow Justinian.',
          casualties: '30,000 killed in suppression',
          quote: 'Theodora: "Purple makes a fine shroud"'
        },
        {
          year: 533,
          event: 'Reconquest of North Africa',
          type: 'military',
          importance: 8,
          general: 'Belisarius',
          details: 'Vandal Kingdom conquered in months.',
          speed: 'Lightning campaign'
        },
        {
          year: 535,
          event: 'Reconquest of Italy',
          type: 'military',
          importance: 8,
          details: 'Byzantine invasion of Ostrogothic Italy.',
          duration: '20 years of devastating war',
          result: 'Italy recovered but depopulated'
        },
        {
          year: 537,
          event: 'Hagia Sophia Completed',
          type: 'cultural',
          importance: 10,
          location: { lat: 41.0086, lng: 28.9802 },
          details: 'Greatest church in Christendom completed.',
          specifications: [
            'Dome: 31m diameter, 56m high',
            'Largest cathedral for 1,000 years',
            'Built in 5 years'
          ],
          quote: 'Justinian: "Solomon, I have surpassed thee!"',
          significance: 'Architectural wonder of medieval world'
        },
        {
          year: 541,
          event: 'Plague of Justinian',
          type: 'catastrophic',
          importance: 10,
          details: 'Bubonic plague devastates empire and world.',
          deaths: '25-50 million (40% of Constantinople)',
          waves: 'Returns every 10-15 years for 200 years',
          significance: 'First recorded bubonic plague pandemic'
        },
        {
          year: 565,
          event: 'Death of Justinian',
          type: 'political',
          importance: 8,
          details: 'Empire overstretched, treasury exhausted.',
          legacy: 'Justinian Code (basis of civil law)'
        },
        {
          year: 626,
          event: 'Siege of Constantinople',
          type: 'military',
          importance: 9,
          attackers: 'Avars and Persians',
          details: 'Joint siege fails, city saved.',
          defender: 'Patriarch Sergius (religious defense)'
        },
        {
          year: 674,
          event: 'First Arab Siege of Constantinople',
          type: 'military',
          importance: 9,
          details: 'Arab fleet attacks Constantinople for 4 years.',
          defense: 'Greek Fire (napalm-like weapon)',
          outcome: 'Arabs defeated'
        },
        {
          year: 717,
          event: 'Second Arab Siege',
          type: 'military',
          importance: 10,
          defender: 'Leo III',
          details: 'Massive Arab army and navy besiege city.',
          forces: '120,000 troops, 1,800 ships',
          outcome: 'Arabs suffer catastrophic defeat',
          significance: 'Saved Christian Europe from Islamic conquest'
        },
        {
          year: 726,
          event: 'Iconoclasm Begins',
          type: 'cultural',
          importance: 8,
          details: 'Emperor Leo III bans religious images.',
          controversy: 'Icons destroyed, monks persecuted',
          duration: '117 years (two phases)'
        },
        {
          year: 843,
          event: 'Iconoclasm Ends',
          type: 'cultural',
          importance: 7,
          details: 'Icons restored, "Triumph of Orthodoxy".',
          celebration: 'Still celebrated in Orthodox Church'
        },
        {
          year: 867,
          event: 'Macedonian Dynasty - Golden Age',
          type: 'major',
          importance: 9,
          details: 'Byzantine golden age begins.',
          achievements: ['Military expansion', 'Cultural renaissance', 'Missionary work']
        },
        {
          year: 988,
          event: 'Conversion of Rus',
          type: 'cultural',
          importance: 10,
          convert: 'Vladimir of Kiev',
          details: 'Byzantine Christianity spreads to Russia.',
          significance: 'Russian Orthodoxy begins'
        },
        {
          year: 1054,
          event: 'Great Schism',
          type: 'cultural',
          importance: 10,
          details: 'Christianity splits into Catholic and Orthodox.',
          cause: 'Theological disputes, papal authority',
          significance: 'Division continues today'
        },
        {
          year: 1071,
          event: 'Battle of Manzikert',
          type: 'catastrophic',
          importance: 10,
          location: { lat: 39.1, lng: 42.5 }, // Eastern Turkey
          opponent: 'Seljuk Turks',
          details: 'Emperor Romanos IV captured, Anatolia lost.',
          aftermath: 'Turks flood into Asia Minor',
          significance: 'Beginning of end for Byzantium'
        },
        {
          year: 1095,
          event: 'Call for First Crusade',
          type: 'political',
          importance: 9,
          details: 'Emperor Alexios I appeals to Pope for help.',
          outcome: 'Crusades launched, mixed results for Byzantium'
        },
        {
          year: 1204,
          event: 'Fourth Crusade Sacks Constantinople',
          type: 'catastrophic',
          importance: 10,
          attackers: 'Crusaders and Venice',
          details: 'Christian Crusaders loot and destroy Constantinople.',
          atrocities: 'Churches desecrated, treasures stolen',
          aftermath: 'Latin Empire established (1204-1261)',
          significance: 'Byzantine Empire never recovers'
        },
        {
          year: 1261,
          event: 'Byzantine Restoration',
          type: 'political',
          importance: 7,
          ruler: 'Michael VIII Palaiologos',
          details: 'Constantinople recaptured from Latins.',
          state: 'Empire much reduced'
        },
        {
          year: 1453,
          event: 'Fall of Constantinople',
          type: 'catastrophic',
          importance: 10,
          date: 'May 29, 1453',
          attacker: 'Mehmed II "the Conqueror"',
          details: 'Ottoman Turks capture Constantinople after 53-day siege.',
          methods: [
            'Giant cannons breach walls',
            'Ships dragged overland into harbor'
          ],
          casualties: 'Constantine XI dies in battle',
          significance: [
            'End of Roman Empire (2,206 years)',
            'End of Middle Ages',
            'Scholars flee West, spark Renaissance'
          ]
        }
      ],
      
      achievements: [
        'Hagia Sophia',
        'Justinian Code (civil law foundation)',
        'Greek Fire (secret weapon)',
        'Preserved classical learning',
        'Orthodox Christianity spread',
        'Byzantine art and icons',
        'Cyrillic alphabet (missionaries)',
        'Diplomatic sophistication',
        'Silk production (stolen from China)'
      ],
      
      keyFigures: [
        { name: 'Constantine I', role: 'Founder', years: [272, 337] },
        { name: 'Justinian I', role: 'Great Emperor', years: [482, 565] },
        { name: 'Theodora', role: 'Empress', years: [500, 548] },
        { name: 'Belisarius', role: 'Greatest General', years: [505, 565] },
        { name: 'Basil II', role: 'Bulgar-Slayer', years: [958, 1025] },
        { name: 'Constantine XI', role: 'Last Emperor', years: [1405, 1453] }
      ],
      
      influence: {
        influenced: ['russia', 'orthodox-christianity', 'ottoman-empire', 'renaissance'],
        influencedBy: ['rome', 'greece', 'christianity'],
        tradeRoutes: ['silk-road', 'mediterranean']
      }
    },
    
    {
      id: 'medieval-europe',
      name: 'Medieval European Kingdoms',
      timespan: { start: 1000, end: 1500 },
      center: { lat: 48.0, lng: 5.0 }, // Central Europe
      
      timeline: [
        {
          year: 1066,
          event: 'Norman Conquest of England',
          type: 'military',
          importance: 10,
          location: { lat: 50.9, lng: 0.5 }, // Hastings
          ruler: 'William the Conqueror',
          details: 'Normans conquer England, French culture imposed.',
          significance: 'Transforms English language and culture'
        },
        {
          year: 1086,
          event: 'Domesday Book Compiled',
          type: 'major',
          importance: 7,
          details: 'Comprehensive survey of England.',
          purpose: 'Tax assessment',
          significance: 'Earliest detailed census'
        },
        {
          year: 1095,
          event: 'First Crusade Called',
          type: 'military',
          importance: 10,
          caller: 'Pope Urban II',
          location: { lat: 45.8, lng: 3.1 }, // Clermont
          details: 'Pope calls for holy war to reclaim Jerusalem.',
          quote: '"Deus vult!" (God wills it!)',
          significance: 'Begins 200 years of Crusades'
        },
        {
          year: 1099,
          event: 'Crusaders Capture Jerusalem',
          type: 'military',
          importance: 10,
          location: { lat: 31.78, lng: 35.23 },
          details: 'First Crusade succeeds, Crusader states established.',
          atrocities: 'Massacre of Muslim and Jewish defenders',
          states: ['Kingdom of Jerusalem', 'County of Tripoli', 'Principality of Antioch']
        },
        {
          year: 1122,
          event: 'Concordat of Worms',
          type: 'political',
          importance: 8,
          details: 'Investiture Controversy resolved.',
          issue: 'Who appoints bishops - Pope or Emperor?',
          result: 'Compromise between Church and State'
        },
        {
          year: 1170,
          event: 'Murder of Thomas Becket',
          type: 'political',
          importance: 8,
          location: { lat: 51.28, lng: 1.08 }, // Canterbury
          details: 'Archbishop killed by king\'s knights.',
          quote: '"Will no one rid me of this turbulent priest?"',
          aftermath: 'Becket becomes saint, Henry II humiliated'
        },
        {
          year: 1187,
          event: 'Saladin Retakes Jerusalem',
          type: 'military',
          importance: 9,
          location: { lat: 32.8, lng: 35.5 }, // Hattin
          details: 'Saladin defeats Crusaders, recaptures Jerusalem.',
          treatment: 'Saladin shows mercy to defenders',
          response: 'Third Crusade launched'
        },
        {
          year: 1189,
          event: 'Third Crusade',
          type: 'military',
          importance: 8,
          leaders: ['Richard I (England)', 'Philip II (France)', 'Frederick I (Germany)'],
          details: 'Kings\' Crusade fails to retake Jerusalem.',
          outcome: 'Access to holy sites negotiated'
        },
        {
          year: 1215,
          event: 'Magna Carta Signed',
          type: 'political',
          importance: 10,
          location: { lat: 51.43, lng: -0.57 }, // Runnymede
          ruler: 'King John',
          details: 'English barons force king to sign charter of rights.',
          principles: ['Rule of law', 'Due process', 'Limits on royal power'],
          significance: 'Foundation of constitutional government'
        },
        {
          year: 1215,
          event: 'Fourth Lateran Council',
          type: 'cultural',
          importance: 8,
          details: 'Major Catholic reform council.',
          decisions: ['Annual confession required', 'Transubstantiation defined', 'Jews must wear badges']
        },
        {
          year: 1241,
          event: 'Mongol Invasion of Europe',
          type: 'military',
          importance: 9,
          location: { lat: 50.1, lng: 17.3 }, // Legnica
          details: 'Mongols devastate Poland and Hungary.',
          battles: ['Legnica', 'Mohi'],
          outcome: 'Mongols withdraw (Khan dies)',
          what_if: 'Europe nearly conquered'
        },
        {
          year: 1258,
          event: 'Provisions of Oxford',
          type: 'political',
          importance: 7,
          details: 'First English parliament with elected members.',
          significance: 'Step toward representative government'
        },
        {
          year: 1291,
          event: 'Fall of Acre - End of Crusades',
          type: 'military',
          importance: 8,
          location: { lat: 32.93, lng: 35.08 },
          details: 'Last Crusader stronghold falls to Mamluks.',
          significance: 'End of Crusader presence in Holy Land'
        },
        {
          year: 1302,
          event: 'Battle of the Golden Spurs',
          type: 'military',
          importance: 7,
          location: { lat: 50.85, lng: 3.25 }, // Courtrai
          details: 'Flemish commoners defeat French knights.',
          significance: 'Infantry defeats cavalry, social change'
        },
        {
          year: 1309,
          event: 'Avignon Papacy Begins',
          type: 'political',
          importance: 8,
          location: { lat: 43.95, lng: 4.81 },
          details: 'Popes move to Avignon under French influence.',
          duration: '68 years (Babylonian Captivity)',
          aftermath: 'Weakens papal authority'
        },
        {
          year: 1337,
          event: 'Hundred Years\' War Begins',
          type: 'military',
          importance: 9,
          combatants: 'England vs France',
          cause: 'English claim to French throne',
          duration: '116 years (1337-1453)'
        },
        {
          year: 1346,
          event: 'Battle of Crécy',
          type: 'military',
          importance: 8,
          location: { lat: 50.25, lng: 1.85 },
          details: 'English longbowmen destroy French knights.',
          significance: 'End of knightly cavalry dominance'
        },
        {
          year: 1347,
          event: 'Black Death Arrives in Europe',
          type: 'catastrophic',
          importance: 10,
          origin: 'Genoese ships from Crimea',
          details: 'Bubonic plague devastates Europe.',
          deaths: '75-200 million (30-60% of Europe)',
          peak: '1347-1351',
          consequences: [
            'Labor shortage → peasant power',
            'Religious crisis',
            'Jews scapegoated',
            'Economic transformation'
          ]
        },
        {
          year: 1356,
          event: 'Golden Bull',
          type: 'political',
          importance: 7,
          details: 'Holy Roman Empire constitution established.',
          content: 'Seven electors choose Emperor'
        },
        {
          year: 1378,
          event: 'Western Schism Begins',
          type: 'political',
          importance: 8,
          details: 'Two (later three) rival popes claim authority.',
          duration: '39 years',
          aftermath: 'Papal authority damaged'
        },
        {
          year: 1381,
          event: 'Peasants\' Revolt in England',
          type: 'political',
          importance: 8,
          leader: 'Wat Tyler',
          details: 'Largest peasant uprising in English history.',
          cause: 'Poll tax, post-plague frustrations',
          quote: '"When Adam delved and Eve span, who was then the gentleman?"',
          outcome: 'Crushed, but serfdom declines'
        },
        {
          year: 1415,
          event: 'Battle of Agincourt',
          type: 'military',
          importance: 8,
          location: { lat: 50.46, lng: 2.15 },
          commander: 'Henry V of England',
          details: 'English longbowmen defeat French again.',
          odds: '6,000 English vs 36,000 French',
          significance: 'English conquer much of France'
        },
        {
          year: 1429,
          event: 'Joan of Arc Lifts Siege of Orléans',
          type: 'military',
          importance: 9,
          location: { lat: 47.9, lng: 1.9 },
          leader: 'Joan of Arc',
          details: 'Teenage peasant girl leads French army to victory.',
          significance: 'Turning point of Hundred Years\' War'
        },
        {
          year: 1431,
          event: 'Joan of Arc Burned at Stake',
          type: 'political',
          importance: 8,
          location: { lat: 49.44, lng: 1.1 }, // Rouen
          details: 'English burn Joan as heretic.',
          age: '19 years old',
          aftermath: 'Canonized as saint (1920)'
        },
        {
          year: 1453,
          event: 'Hundred Years\' War Ends',
          type: 'military',
          importance: 9,
          details: 'France expels English (except Calais).',
          significance: 'France emerges as unified nation'
        },
        {
          year: 1455,
          event: 'Wars of the Roses Begin',
          type: 'military',
          importance: 7,
          combatants: 'York vs Lancaster',
          details: 'English civil war for throne.',
          duration: '30 years',
          outcome: 'Tudor dynasty emerges (1485)'
        },
        {
          year: 1469,
          event: 'Marriage of Ferdinand and Isabella',
          type: 'political',
          importance: 9,
          rulers: 'Ferdinand of Aragon + Isabella of Castile',
          details: 'Union creates unified Spain.',
          future: 'Reconquista completed, Columbus funded'
        },
        {
          year: 1485,
          event: 'Battle of Bosworth Field',
          type: 'military',
          importance: 8,
          location: { lat: 52.6, lng: -1.4 },
          victor: 'Henry Tudor (Henry VII)',
          details: 'Richard III killed, Tudor dynasty begins.',
          significance: 'End of Middle Ages in England'
        },
        {
          year: 1492,
          event: 'Fall of Granada / Columbus Voyage',
          type: 'major',
          importance: 10,
          details: 'Spain conquers last Muslim state, funds Columbus.',
          granada: 'Reconquista complete after 780 years',
          columbus: 'Reaches Americas',
          significance: 'End of Medieval Spain, Age of Exploration begins'
        }
      ],
      
      achievements: [
        'Gothic cathedrals',
        'Universities (Bologna, Paris, Oxford)',
        'Magna Carta',
        'Parliamentary development',
        'Scholasticism (Aquinas)',
        'Romanesque and Gothic art',
        'Chivalric culture',
        'Printing press (1450s)',
        'National languages develop'
      ],
      
      keyFigures: [
        { name: 'William the Conqueror', role: 'English Conqueror', years: [1028, 1087] },
        { name: 'Richard I (Lionheart)', role: 'Crusader King', years: [1157, 1199] },
        { name: 'Thomas Aquinas', role: 'Philosopher', years: [1225, 1274] },
        { name: 'Dante Alighieri', role: 'Poet (Divine Comedy)', years: [1265, 1321] },
        { name: 'Joan of Arc', role: 'Warrior Saint', years: [1412, 1431] },
        { name: 'Geoffrey Chaucer', role: 'Canterbury Tales', years: [1343, 1400] }
      ],
      
      influence: {
        influenced: ['renaissance', 'nation-states', 'parliament'],
        influencedBy: ['carolingians', 'roman', 'christianity', 'islam']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(EUROPE_CIVILIZATIONS);
}
📁 js/data/civilizations/americas.js
JavaScript

/**
 * GEOTOPIA - American Civilizations
 * Olmec, Maya, Teotihuacan, Toltec, Aztec, Inca, Norte Chico, Mississippian
 */

const AMERICAS_CIVILIZATIONS = {
  region: 'Americas',
  color: '#228B22', // Forest Green
  timeRange: { start: -3000, end: 1572 },
  
  civilizations: [
    {
      id: 'norte-chico',
      name: 'Norte Chico (Caral-Supe)',
      timespan: { start: -3000, end: -1800 },
      center: { lat: -10.9, lng: -77.5 }, // Peru
      
      timeline: [
        {
          year: -3000,
          event: 'Norte Chico Civilization Emerges',
          type: 'major',
          importance: 9,
          mapState: {
            capital: { name: 'Caral', lat: -10.8931, lng: -77.5203 }
          },
          details: 'Oldest civilization in Americas develops in Peru.',
          significance: 'Contemporary with Egypt and Mesopotamia',
          characteristics: ['No pottery', 'No writing', 'Monumental architecture']
        },
        {
          year: -2627,
          event: 'Caral City Built',
          type: 'cultural',
          importance: 9,
          details: 'Oldest city in Americas constructed.',
          features: [
            'Six pyramids',
            'Circular plazas',
            'Residential areas',
            '150 acres'
          ],
          population: '3,000'
        },
        {
          year: -2500,
          event: 'Peak of Norte Chico',
          type: 'major',
          importance: 8,
          details: '30+ major sites with pyramids.',
          economy: 'Cotton for fishing nets traded for seafood',
          society: 'Peaceful (no fortifications, weapons, or warfare evidence)'
        },
        {
          year: -1800,
          event: 'Decline of Norte Chico',
          type: 'political',
          importance: 6,
          details: 'Civilization declines, population disperses.',
          causes: 'Unknown - possibly climate change',
          legacy: 'Foundation for later Andean civilizations'
        }
      ],
      
      achievements: [
        'Oldest American pyramids',
        'Quipu (string recording system)',
        'Irrigation systems',
        'Cotton cultivation',
        'Peaceful urban society'
      ],
      
      influence: {
        influenced: ['chavin', 'moche', 'inca'],
        tradeRoutes: ['pacific-coast']
      }
    },
    
    {
      id: 'olmec',
      name: 'Olmec Civilization',
      altNames: ['Mother Culture of Mesoamerica'],
      timespan: { start: -1500, end: -400 },
      center: { lat: 18.0, lng: -94.5 }, // Gulf Coast Mexico
      
      timeline: [
        {
          year: -1500,
          event: 'Olmec Civilization Emerges',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'San Lorenzo', lat: 17.75, lng: -94.76 }
          },
          details: 'First major Mesoamerican civilization.',
          significance: '"Mother culture" of Mesoamerica'
        },
        {
          year: -1200,
          event: 'San Lorenzo Flourishes',
          type: 'major',
          importance: 8,
          details: 'First Olmec capital at peak.',
          population: '13,000',
          features: 'Colossal stone heads carved'
        },
        {
          year: -1150,
          event: 'Colossal Heads Created',
          type: 'cultural',
          importance: 9,
          details: '17 giant basalt heads carved (up to 50 tons each).',
          height: 'Up to 3.4 meters',
          transport: 'Stones moved 80+ km from mountains',
          mystery: 'Portraits of rulers or ballplayers'
        },
        {
          year: -900,
          event: 'La Venta Becomes Capital',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'La Venta', lat: 18.1, lng: -94.05 }
          },
          details: 'Center shifts to La Venta after San Lorenzo destroyed.',
          pyramid: 'First Mesoamerican pyramid (34m tall)'
        },
        {
          year: -600,
          event: 'Olmec Writing Develops',
          type: 'cultural',
          importance: 8,
          details: 'Earliest Mesoamerican writing system.',
          significance: 'Precursor to Maya hieroglyphs'
        },
        {
          year: -400,
          event: 'Olmec Civilization Ends',
          type: 'political',
          importance: 7,
          details: 'La Venta abandoned, monuments defaced.',
          cause: 'Unknown - possibly environmental or social',
          legacy: 'Ideas spread to Maya, Zapotec, Aztec'
        }
      ],
      
      achievements: [
        'Colossal stone heads',
        'First Mesoamerican writing',
        'Long Count calendar (basis)',
        'Ballgame (ritual sport)',
        'Jade working',
        'First pyramid in Americas',
        'Rubber production',
        'Cacao use',
        'Jaguar worship'
      ],
      
      keyFigures: [
        { name: 'Unknown rulers', role: 'Portrayed in colossal heads', years: [-1200, -400] }
      ],
      
      influence: {
        influenced: ['maya', 'zapotec', 'teotihuacan', 'aztec'],
        culturalExports: ['Calendar', 'Writing', 'Ballgame', 'Religion']
      }
    },
    
    {
      id: 'maya',
      name: 'Maya Civilization',
      timespan: { start: -2000, end: 1697 },
      center: { lat: 17.0, lng: -89.0 }, // Guatemala/Yucatan
      
      timeline: [
        {
          year: -2000,
          event: 'Early Maya Period',
          type: 'political',
          importance: 7,
          details: 'Maya settlements emerge in Mesoamerica.',
          characteristics: 'Agriculture, villages'
        },
        {
          year: -400,
          event: 'Preclassic Maya Cities',
          type: 'major',
          importance: 8,
          details: 'Major cities like El Mirador constructed.',
          features: 'Pyramids, writing, Long Count calendar'
        },
        {
          year: -100,
          event: 'El Mirador at Peak',
          type: 'major',
          importance: 8,
          location: { lat: 17.75, lng: -89.92 },
          details: 'Largest Preclassic Maya city.',
          pyramid: 'La Danta - one of largest pyramids by volume in world',
          population: '100,000+'
        },
        {
          year: 250,
          event: 'Classic Maya Period Begins',
          type: 'major',
          importance: 9,
          details: 'Golden age of Maya civilization.',
          characteristics: ['Divine kingship', 'Hieroglyphic writing', 'Monumental art']
        },
        {
          year: 378,
          event: 'Teotihuacan Influence - "Entrada"',
          type: 'political',
          importance: 8,
          details: 'Mexican warriors intervene in Tikal.',
          location: { lat: 17.22, lng: -89.62 },
          result: 'New dynasty installed, Mexican influence'
        },
        {
          year: 562,
          event: 'Caracol Defeats Tikal',
          type: 'military',
          importance: 7,
          details: 'Major Maya superpower defeated.',
          aftermath: '130-year hiatus in Tikal monuments'
        },
        {
          year: 600,
          event: 'Peak of Classic Maya',
          type: 'major',
          importance: 9,
          mapState: {
            cities: [
              { name: 'Tikal', lat: 17.22, lng: -89.62 },
              { name: 'Calakmul', lat: 18.1, lng: -89.81 },
              { name: 'Palenque', lat: 17.48, lng: -92.05 },
              { name: 'Copan', lat: 14.84, lng: -89.14 },
              { name: 'Caracol', lat: 16.76, lng: -89.12 }
            ],
            population: '10-15 million total'
          },
          details: 'Maya civilization at height with 40+ kingdoms.',
          astronomy: 'Track Venus, Mars, predict eclipses',
          mathematics: 'Concept of zero independently invented'
        },
        {
          year: 615,
          event: 'K\'inich Janaab Pakal Becomes King',
          type: 'political',
          importance: 8,
          ruler: 'Pakal the Great',
          location: { lat: 17.48, lng: -92.05 }, // Palenque
          details: 'Greatest Maya king begins 68-year reign.',
          age: 'Crowned at age 12'
        },
        {
          year: 683,
          event: 'Death of Pakal',
          type: 'political',
          importance: 8,
          details: 'Pakal buried in Temple of Inscriptions.',
          tomb: 'Greatest Maya royal tomb ever found (1952)',
          sarcophagus: 'Famous carved lid (astronaut conspiracy theory subject)',
          age: '80 years old'
        },
        {
          year: 695,
          event: 'Tikal Defeats Calakmul',
          type: 'military',
          importance: 7,
          details: 'Tikal avenges earlier defeat, becomes supreme.',
          ruler: 'Jasaw Chan K\'awiil'
        },
        {
          year: 800,
          event: 'Classic Maya Collapse Begins',
          type: 'catastrophic',
          importance: 10,
          details: 'Major cities abandoned over 150 years.',
          causes: [
            'Prolonged drought',
            'Overpopulation',
            'Warfare',
            'Environmental degradation',
            'Political collapse'
          ],
          population_loss: '90-95% in some areas'
        },
        {
          year: 900,
          event: 'Classic Maya Collapse Complete',
          type: 'catastrophic',
          importance: 9,
          details: 'Southern lowland cities abandoned.',
          aftermath: 'Maya continue in Yucatan and highlands'
        },
        {
          year: 987,
          event: 'Chichen Itza Rises',
          type: 'political',
          importance: 8,
          location: { lat: 20.68, lng: -88.57 },
          details: 'Postclassic Maya-Toltec city flourishes.',
          features: 'El Castillo pyramid, cenote sacrifices'
        },
        {
          year: 1221,
          event: 'Chichen Itza Falls',
          type: 'political',
          importance: 6,
          details: 'City conquered by Mayapan confederation.'
        },
        {
          year: 1441,
          event: 'Mayapan Falls',
          type: 'political',
          importance: 6,
          details: 'Last Maya capital abandoned.',
          aftermath: 'Fragmented city-states'
        },
        {
          year: 1517,
          event: 'Spanish Contact',
          type: 'major',
          importance: 8,
          details: 'Hernández de Córdoba reaches Yucatan.',
          observation: 'Stone cities, advanced civilization'
        },
        {
          year: 1524,
          event: 'Spanish Conquest Begins',
          type: 'military',
          importance: 9,
          conquistador: 'Pedro de Alvarado',
          details: 'Spanish begin conquest of Maya lands.',
          resistance: 'Maya resist for 170 years'
        },
        {
          year: 1562,
          event: 'Diego de Landa Burns Maya Books',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 20.97, lng: -89.62 }, // Maní
          details: 'Spanish bishop destroys Maya codices.',
          destroyed: '27 codices (thousands of books)',
          surviving: 'Only 4 Maya books survive today',
          irony: 'Same bishop later writes key Maya documentation'
        },
        {
          year: 1697,
          event: 'Fall of Tayasal - Last Maya Kingdom',
          type: 'political',
          importance: 8,
          location: { lat: 16.93, lng: -89.9 }, // Lake Petén Itzá
          details: 'Spanish conquer last independent Maya city.',
          kingdom: 'Itza Maya',
          significance: 'End of independent Maya states'
        }
      ],
      
      achievements: [
        'Hieroglyphic writing (fully phonetic)',
        'Concept of zero',
        'Most accurate pre-modern calendar',
        'Astronomical observations (Venus, eclipses)',
        'Corbelled arch architecture',
        'Stepped pyramids',
        'Codex books',
        'Blue pigment (Maya blue)',
        'Cacao cultivation (chocolate)',
        'Rubber balls for ballgame'
      ],
      
      keyFigures: [
        { name: 'K\'inich Janaab Pakal', role: 'Palenque King', years: [603, 683] },
        { name: 'Jasaw Chan K\'awiil', role: 'Tikal King', years: [682, 734] },
        { name: 'Lady Six Sky', role: 'Naranjo Queen', years: [682, 741] }
      ],
      
      influence: {
        influenced: ['aztec', 'mesoamerican-culture'],
        influencedBy: ['olmec'],
        tradeRoutes: ['mesoamerican-network', 'caribbean']
      }
    },
    
    {
      id: 'teotihuacan',
      name: 'Teotihuacan',
      timespan: { start: -200, end: 650 },
      center: { lat: 19.69, lng: -98.84 },
      
      timeline: [
        {
          year: -200,
          event: 'Teotihuacan Founded',
          type: 'political',
          importance: 8,
          mapState: {
            capital: { name: 'Teotihuacan', lat: 19.6925, lng: -98.8438 }
          },
          details: 'City begins in Valley of Mexico.',
          name: '"Place where the gods were created"'
        },
        {
          year: 100,
          event: 'Pyramid of the Sun Built',
          type: 'cultural',
          importance: 9,
          details: 'Third largest pyramid in world constructed.',
          dimensions: '225m base, 75m high',
          volume: '1.2 million cubic meters',
          significance: 'Largest structure in ancient Americas'
        },
        {
          year: 150,
          event: 'Avenue of the Dead Laid Out',
          type: 'cultural',
          importance: 8,
          details: 'Central avenue connecting major monuments.',
          length: '4 km',
          features: 'Pyramid of Moon at north end'
        },
        {
          year: 200,
          event: 'Feathered Serpent Temple',
          type: 'cultural',
          importance: 8,
          details: 'Temple with 365 serpent heads built.',
          sacrifice: '200+ sacrificed warriors buried',
          deity: 'Quetzalcoatl (Feathered Serpent)'
        },
        {
          year: 350,
          event: 'Teotihuacan at Peak',
          type: 'major',
          importance: 10,
          mapState: {
            population: '125,000-200,000',
            area: '20+ square km',
            influence: 'All of Mesoamerica'
          },
          details: 'Sixth largest city in world.',
          comparison: 'Larger than any European city of the time',
          economy: 'Obsidian trade, workshops',
          apartments: 'Multi-family apartment compounds'
        },
        {
          year: 378,
          event: 'Intervention in Maya Cities',
          type: 'military',
          importance: 8,
          details: 'Teotihuacan warriors establish new dynasty at Tikal.',
          general: 'Siyaj K\'ahk\' ("Fire is Born")',
          significance: 'Shows Teotihuacan\'s vast reach'
        },
        {
          year: 550,
          event: 'Collapse Begins',
          type: 'catastrophic',
          importance: 8,
          details: 'City begins to decline.',
          evidence: 'Elite buildings burned deliberately'
        },
        {
          year: 650,
          event: 'Teotihuacan Falls',
          type: 'catastrophic',
          importance: 9,
          details: 'City largely abandoned after burning.',
          cause: 'Internal revolt? Invasion? Climate?',
          mystery: 'Builders\' ethnicity and language unknown'
        }
      ],
      
      achievements: [
        'Largest pre-Columbian city',
        'Pyramid of the Sun',
        'Urban planning grid',
        'Multi-family apartments',
        'Obsidian industry',
        'Mesoamerican influence',
        'Talud-tablero architecture',
        'Mural painting'
      ],
      
      mysteries: [
        'No writing system found',
        'Rulers never identified',
        'Language unknown',
        'Ethnicity debated',
        'Cause of collapse unknown'
      ],
      
      influence: {
        influenced: ['toltec', 'aztec', 'maya'],
        influencedBy: ['olmec'],
        tradeRoutes: ['mesoamerican-obsidian']
      }
    },
    
    {
      id: 'aztec',
      name: 'Aztec Empire',
      altNames: ['Mexica'],
      timespan: { start: 1325, end: 1521 },
      center: { lat: 19.43, lng: -99.13 }, // Mexico City
      
      timeline: [
        {
          year: 1325,
          event: 'Tenochtitlan Founded',
          type: 'political',
          importance: 10,
          mapState: {
            capital: { name: 'Tenochtitlan', lat: 19.4326, lng: -99.1332 }
          },
          details: 'Aztecs found capital on island in Lake Texcoco.',
          legend: 'Eagle eating snake on cactus (Mexican flag)',
          location: 'Swampy island, became largest city in Americas'
        },
        {
          year: 1428,
          event: 'Triple Alliance Formed',
          type: 'political',
          importance: 9,
          allies: ['Tenochtitlan', 'Texcoco', 'Tlacopan'],
          details: 'Aztec-led alliance defeats Tepanec Empire.',
          significance: 'Aztec Empire begins'
        },
        {
          year: 1440,
          event: 'Moctezuma I - Imperial Expansion',
          type: 'political',
          importance: 9,
          ruler: 'Moctezuma I',
          details: 'Major conquests expand empire.',
          conquests: 'Gulf Coast, Oaxaca, Puebla',
          projects: 'Aqueduct, dike, Templo Mayor expansion'
        },
        {
          year: 1450,
          event: 'Great Famine',
          type: 'catastrophic',
          importance: 7,
          details: 'Four-year famine devastates central Mexico.',
          response: 'Flower Wars instituted for sacrifice captives'
        },
        {
          year: 1473,
          event: 'Conquest of Tlatelolco',
          type: 'military',
          importance: 7,
          details: 'Sister city absorbed, becomes great market.',
          market: 'Largest market in Americas (60,000 daily)'
        },
        {
          year: 1487,
          event: 'Templo Mayor Dedication',
          type: 'cultural',
          importance: 8,
          ruler: 'Ahuitzotl',
          details: 'Great Temple rededicated with mass sacrifice.',
          sacrifice: 'Thousands sacrificed over 4 days',
          controversy: 'Numbers debated (10,000-80,000 claimed)',
          purpose: 'Feed the sun, maintain cosmic order'
        },
        {
          year: 1500,
          event: 'Aztec Empire at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            borders: [
              { lat: 21.0, lng: -105.0 }, // West
              { lat: 22.0, lng: -98.0 },  // North
              { lat: 16.0, lng: -96.0 },  // South
              { lat: 19.0, lng: -93.0 }   // East
            ],
            population: '5-6 million subjects',
            tribute: '371 towns'
          },
          details: 'Empire controls central Mexico.',
          tenochtitlan: '200,000-300,000 population (5x London)',
          economy: 'Tribute system, long-distance trade'
        },
        {
          year: 1502,
          event: 'Moctezuma II Becomes Emperor',
          type: 'political',
          importance: 8,
          ruler: 'Moctezuma II',
          details: 'Last effective Aztec emperor takes throne.',
          reign: 'Consolidation, religious focus'
        },
        {
          year: 1519,
          event: 'Spanish Arrival',
          type: 'major',
          importance: 10,
          date: 'April 22, 1519',
          details: 'Hernán Cortés lands on Mexican coast.',
          forces: '500 soldiers, 16 horses, few cannons',
          coincidence: 'Year "One Reed" - prophecy of Quetzalcoatl\'s return'
        },
        {
          year: 1519,
          event: 'Cortés Enters Tenochtitlan',
          type: 'major',
          importance: 10,
          date: 'November 8, 1519',
          details: 'Spanish enter Aztec capital as guests.',
          description: 'Spaniards amazed by city larger than any in Europe',
          quote: 'Bernal Díaz: "Like an enchanted vision... great towers, temples, buildings rising from the water"'
        },
        {
          year: 1520,
          event: 'La Noche Triste (Night of Sorrows)',
          type: 'military',
          importance: 9,
          date: 'June 30, 1520',
          details: 'Spanish flee Tenochtitlan with heavy losses.',
          casualties: '600+ Spanish, thousands of allies killed',
          cause: 'Aztec uprising after Spanish massacre at temple'
        },
        {
          year: 1520,
          event: 'Smallpox Epidemic',
          type: 'catastrophic',
          importance: 10,
          details: 'Smallpox devastates Aztec population.',
          deaths: 'Possibly 40% of population',
          victim: 'Emperor Cuitláhuac dies',
          significance: 'Disease more deadly than Spanish weapons'
        },
        {
          year: 1521,
          event: 'Fall of Tenochtitlan',
          type: 'catastrophic',
          importance: 10,
          date: 'August 13, 1521',
          details: 'Cortés conquers Aztec capital after 80-day siege.',
          tactics: [
            'Native allies (80,000+ Tlaxcalans)',
            'Brigantines on lake',
            'Destroying causeways',
            'Starvation'
          ],
          defender: 'Cuauhtémoc (last emperor)',
          aftermath: 'City destroyed, rebuilt as Mexico City',
          casualties: '100,000+ Aztec dead'
        }
      ],
      
      achievements: [
        'Tenochtitlan (engineering marvel on lake)',
        'Chinampas (floating gardens)',
        'Causeways and aqueducts',
        'Templo Mayor',
        'Aztec calendar stone',
        'Featherwork art',
        'Nahuatl poetry',
        'Complex tribute system',
        'Calmecac schools',
        'Chocolate and vanilla cultivation'
      ],
      
      keyFigures: [
        { name: 'Itzcoatl', role: 'Empire Founder', years: [1380, 1440] },
        { name: 'Moctezuma I', role: 'Expander', years: [1398, 1469] },
        { name: 'Moctezuma II', role: 'Last Great Emperor', years: [1466, 1520] },
        { name: 'Cuauhtémoc', role: 'Last Emperor', years: [1495, 1525] },
        { name: 'Hernán Cortés', role: 'Conqueror', years: [1485, 1547] }
      ],
      
      influence: {
        influenced: ['mexican-culture', 'spanish-empire'],
        influencedBy: ['toltec', 'teotihuacan', 'maya']
      }
    },
    
    {
      id: 'inca',
      name: 'Inca Empire',
      altNames: ['Tawantinsuyu'],
      timespan: { start: 1438, end: 1572 },
      center: { lat: -13.52, lng: -71.98 }, // Cusco
      
      timeline: [
        {
          year: 1200,
          event: 'Inca Tribe Settles Cusco',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Cusco', lat: -13.5319, lng: -71.9675 }
          },
          details: 'Small tribe settles in Cusco valley.',
          legend: 'Founded by Manco Cápac, sent by sun god'
        },
        {
          year: 1438,
          event: 'Pachacuti Founds Empire',
          type: 'political',
          importance: 10,
          ruler: 'Pachacuti ("World Shaker")',
          details: 'Prince defeats Chankas, transforms kingdom into empire.',
          achievement: 'Rebuilds Cusco in shape of puma',
          title: '"Alexander the Great of the Americas"'
        },
        {
          year: 1450,
          event: 'Machu Picchu Built',
          type: 'cultural',
          importance: 10,
          location: { lat: -13.1631, lng: -72.545 },
          details: 'Royal estate constructed for Pachacuti.',
          altitude: '2,430 meters',
          features: ['200 buildings', 'Terraces', 'Water channels', 'Astronomical alignments'],
          rediscovery: 'Hiram Bingham 1911'
        },
        {
          year: 1471,
          event: 'Tupac Inca Expands South',
          type: 'military',
          importance: 9,
          ruler: 'Tupac Inca Yupanqui',
          details: 'Conquers Chile, Ecuador, Bolivia.',
          extent: 'Empire stretches 4,000 km'
        },
        {
          year: 1493,
          event: 'Huayna Capac - Height of Empire',
          type: 'major',
          importance: 9,
          ruler: 'Huayna Capac',
          mapState: {
            borders: [
              { lat: 2.0, lng: -79.0 },   // Ecuador
              { lat: -35.0, lng: -71.0 }, // Central Chile
              { lat: -20.0, lng: -65.0 }, // Bolivia
              { lat: 0.0, lng: -75.0 }    // Amazon edge
            ],
            population: '10-12 million',
            length: '4,000 km (NY to LA)',
            area: '2 million km²'
          },
          details: 'Largest empire in pre-Columbian Americas.',
          roads: '40,000 km of paved roads',
          economy: 'No money, no markets - state distribution'
        },
        {
          year: 1525,
          event: 'Smallpox Reaches Inca Empire',
          type: 'catastrophic',
          importance: 10,
          details: 'European disease precedes Europeans.',
          victims: 'Huayna Capac and heir die',
          consequence: 'Civil war between sons Atahualpa and Huascar'
        },
        {
          year: 1532,
          event: 'Civil War Ends',
          type: 'political',
          importance: 8,
          victor: 'Atahualpa',
          details: 'Atahualpa defeats Huascar, becomes Sapa Inca.',
          timing: 'Just as Spanish arrive'
        },
        {
          year: 1532,
          event: 'Pizarro Arrives',
          type: 'major',
          importance: 10,
          date: 'September 1532',
          details: 'Francisco Pizarro lands with 168 men.',
          knowledge: 'Learned from Cortés\'s conquest of Mexico'
        },
        {
          year: 1532,
          event: 'Battle of Cajamarca',
          type: 'military',
          importance: 10,
          date: 'November 16, 1532',
          location: { lat: -7.16, lng: -78.52 },
          details: 'Spanish ambush and capture Atahualpa.',
          forces: '168 Spanish vs 80,000 Inca',
          outcome: [
            '7,000 Inca killed in hour',
            '0 Spanish killed',
            'Atahualpa captured'
          ],
          factors: ['Steel', 'Horses', 'Guns', 'Surprise', 'Inca confusion']
        },
        {
          year: 1533,
          event: 'Atahualpa\'s Ransom and Execution',
          type: 'political',
          importance: 9,
          ransom: 'Room filled with gold, twice with silver',
          value: '$50 million+ in modern terms',
          execution: 'Strangled after "trial" despite ransom paid',
          charge: 'Heresy, treason (against Spain)'
        },
        {
          year: 1533,
          event: 'Fall of Cusco',
          type: 'military',
          importance: 9,
          date: 'November 1533',
          details: 'Spanish capture Inca capital.',
          puppet: 'Manco Inca installed as puppet emperor'
        },
        {
          year: 1536,
          event: 'Manco Inca\'s Rebellion',
          type: 'military',
          importance: 8,
          details: 'Puppet emperor rebels, besieges Cusco.',
          force: '200,000 Inca warriors',
          outcome: 'Siege fails after 10 months',
          retreat: 'Manco establishes rebel state at Vilcabamba'
        },
        {
          year: 1572,
          event: 'Fall of Vilcabamba - End of Inca',
          type: 'catastrophic',
          importance: 9,
          ruler: 'Tupac Amaru',
          details: 'Spanish conquer last Inca stronghold.',
          execution: 'Tupac Amaru beheaded in Cusco plaza',
          significance: 'End of Inca royal line'
        }
      ],
      
      achievements: [
        'Machu Picchu',
        'Road system (40,000 km)',
        'Quipu (string records)',
        'Terraced agriculture',
        'Suspension bridges',
        'Freeze-drying food (chuño)',
        'Stonework without mortar',
        'Brain surgery (trepanning)',
        'Llama domestication',
        'Central planned economy',
        'MIT'A labor tax system'
      ],
      
      keyFigures: [
        { name: 'Pachacuti', role: 'Empire Founder', years: [1418, 1471] },
        { name: 'Tupac Inca', role: 'Expander', years: [1441, 1493] },
        { name: 'Huayna Capac', role: 'Peak Emperor', years: [1468, 1527] },
        { name: 'Atahualpa', role: 'Last Emperor', years: [1502, 1533] },
        { name: 'Manco Inca', role: 'Resistance Leader', years: [1516, 1544] },
        { name: 'Francisco Pizarro', role: 'Conqueror', years: [1478, 1541] }
      ],
      
      influence: {
        influenced: ['peru', 'andean-culture'],
        influencedBy: ['chavin', 'moche', 'tiwanaku'],
        tradeRoutes: ['inca-road-system']
      }
    },
    
    {
      id: 'mississippian',
      name: 'Mississippian Culture',
      timespan: { start: 800, end: 1600 },
      center: { lat: 38.66, lng: -90.06 }, // Cahokia
      
      timeline: [
        {
          year: 800,
          event: 'Mississippian Culture Emerges',
          type: 'political',
          importance: 7,
          details: 'Complex chiefdoms develop in Mississippi Valley.',
          characteristics: ['Mound building', 'Maize agriculture', 'Hierarchical society']
        },
        {
          year: 1050,
          event: 'Cahokia Founded',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'Cahokia', lat: 38.6554, lng: -90.0618 }
          },
          details: 'Largest pre-Columbian city north of Mexico.',
          location: 'Near modern St. Louis'
        },
        {
          year: 1100,
          event: 'Monks Mound Completed',
          type: 'cultural',
          importance: 8,
          details: 'Largest earthwork in Americas completed.',
          dimensions: '100 feet high, 14 acre base',
          comparison: 'Larger base than Great Pyramid of Giza',
          labor: 'Estimated 15 million baskets of earth'
        },
        {
          year: 1150,
          event: 'Cahokia at Peak',
          type: 'major',
          importance: 9,
          mapState: {
            population: '10,000-20,000 (city), 40,000+ (region)',
            size: '6 square miles',
            mounds: '120 earthen mounds'
          },
          details: 'Larger than London at the time.',
          features: ['Woodhenge (astronomical)', 'Grand Plaza', 'Palisade walls']
        },
        {
          year: 1200,
          event: 'Moundville Flourishes',
          type: 'major',
          importance: 7,
          location: { lat: 33.0, lng: -87.6 }, // Alabama
          details: 'Second largest Mississippian center.',
          mounds: '29 mounds'
        },
        {
          year: 1350,
          event: 'Cahokia Abandoned',
          type: 'catastrophic',
          importance: 8,
          details: 'City abandoned for unknown reasons.',
          theories: ['Environmental degradation', 'Climate change', 'Warfare', 'Social collapse']
        },
        {
          year: 1540,
          event: 'De Soto Expedition Contacts',
          type: 'major',
          importance: 8,
          explorer: 'Hernando de Soto',
          details: 'Spanish expedition encounters Mississippian chiefdoms.',
          aftermath: 'Diseases devastate populations'
        },
        {
          year: 1600,
          event: 'Mississippian Decline',
          type: 'political',
          importance: 7,
          details: 'Culture largely collapses.',
          cause: 'European diseases, disruption',
          descendants: 'Natchez and other tribes preserve elements'
        }
      ],
      
      achievements: [
        'Cahokia (largest pre-Columbian settlement north of Mexico)',
        'Massive earthen mounds',
        'Woodhenge astronomical observatory',
        'Long-distance trade networks',
        'Chunkey game',
        'Shell gorgets and copper work',
        'Sophisticated agriculture'
      ],
      
      influence: {
        influenced: ['natchez', 'cherokee'],
        influencedBy: ['hopewell', 'mesoamerica']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(AMERICAS_CIVILIZATIONS);
}
