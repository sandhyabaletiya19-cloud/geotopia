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
