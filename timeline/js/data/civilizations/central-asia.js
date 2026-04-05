/**
 * GEOTOPIA - Central Asian Civilizations
 * Scythians, Xiongnu, Huns, Gökturks, Khazar, Mongol Empire, Timurids
 */

const CENTRAL_ASIA_CIVILIZATIONS = {
  region: 'Central Asia',
  color: '#8B4513', // Saddle Brown
  timeRange: { start: -900, end: 1507 },
  
  civilizations: [
    {
      id: 'scythians',
      name: 'Scythian Civilization',
      timespan: { start: -900, end: -200 },
      center: { lat: 47.0, lng: 35.0 }, // Pontic Steppe
      
      timeline: [
        {
          year: -900,
          event: 'Scythians Emerge',
          type: 'political',
          importance: 8,
          mapState: {
            territory: 'Pontic-Caspian Steppe'
          },
          details: 'Iranian nomadic people dominate Central Asian steppes.',
          origin: 'Possibly from Central Asia/Siberia'
        },
        {
          year: -700,
          event: 'Scythians Drive Out Cimmerians',
          type: 'military',
          importance: 7,
          details: 'Scythians conquer Pontic steppe region.',
          displacement: 'Cimmerians pushed into Anatolia'
        },
        {
          year: -650,
          event: 'Scythians Raid Near East',
          type: 'military',
          importance: 8,
          details: 'Scythians invade Assyria, Media, Levant.',
          extent: 'Reached borders of Egypt',
          duration: '28 years of raiding'
        },
        {
          year: -513,
          event: 'Darius I\'s Failed Invasion',
          type: 'military',
          importance: 9,
          opponent: 'Persian Empire',
          ruler: 'Darius I',
          details: 'Persian Great King invades Scythia with 700,000 troops (exaggerated).',
          outcome: 'Scythians use scorched earth tactics, Persians retreat',
          significance: 'Steppe remains unconquered'
        },
        {
          year: -400,
          event: 'Scythian Golden Age',
          type: 'major',
          importance: 8,
          details: 'Height of Scythian wealth and power.',
          economy: 'Control grain trade from Ukraine to Greece',
          art: 'Animal style goldwork masterpieces'
        },
        {
          year: -339,
          event: 'Battle with Philip II of Macedon',
          type: 'military',
          importance: 7,
          opponent: 'Macedonia',
          details: 'Philip II defeats Scythian king Ateas.',
          location: 'Danube region'
        },
        {
          year: -300,
          event: 'Sarmatians Begin Replacing Scythians',
          type: 'political',
          importance: 7,
          details: 'Related Sarmatian tribes push from east.',
          duration: 'Gradual displacement over centuries'
        },
        {
          year: -200,
          event: 'Scythians Decline',
          type: 'political',
          importance: 6,
          details: 'Reduced to Crimea and small areas.',
          successor: 'Sarmatians dominate steppes'
        }
      ],
      
      achievements: [
        'Horse archery perfected',
        'Animal style art (gold)',
        'Mounted warfare tactics',
        'Kurgan burial mounds',
        'Felt and leather technology',
        'Pants (practical horse riding)',
        'Cannabis use (Herodotus)',
        'Tattooing (Pazyryk mummies)'
      ],
      
      characteristics: {
        society: 'Nomadic pastoralists, warriors',
        women: 'High status, some warrior women (Amazons?)',
        religion: 'Sky worship, shamanism',
        diet: 'Mare\'s milk, meat, traded grain'
      },
      
      keyFigures: [
        { name: 'Idanthyrsus', role: 'King who defeated Darius', years: [-530, -500] },
        { name: 'Ateas', role: 'Last great Scythian king', years: [-429, -339] }
      ],
      
      influence: {
        influenced: ['sarmatians', 'huns', 'steppe-warfare'],
        influencedBy: ['cimmerians', 'persian-contact'],
        legacy: 'Horse archer template for all subsequent steppe peoples'
      }
    },
    
    {
      id: 'xiongnu',
      name: 'Xiongnu Empire',
      timespan: { start: -300, end: 460 },
      center: { lat: 47.0, lng: 107.0 }, // Mongolia
      
      timeline: [
        {
          year: -300,
          event: 'Xiongnu Confederation Forms',
          type: 'political',
          importance: 8,
          details: 'Nomadic tribes unite on Mongolian steppe.',
          territory: 'Mongolia, southern Siberia'
        },
        {
          year: -209,
          event: 'Modu Chanyu Creates Empire',
          type: 'political',
          importance: 10,
          ruler: 'Modu Chanyu',
          details: 'Modu kills father, unites Xiongnu into powerful empire.',
          method: 'Trained followers with whistling arrows',
          legend: 'Ordered followers to shoot whatever his arrow hit - horse, wife, then father'
        },
        {
          year: -200,
          event: 'Battle of Baideng',
          type: 'military',
          importance: 9,
          opponent: 'Han Dynasty',
          location: { lat: 40.1, lng: 113.3 },
          details: 'Modu surrounds Han Emperor Gaozu.',
          outcome: 'Emperor escapes; peace with tribute and princess',
          significance: 'Han forced to appease Xiongnu for decades'
        },
        {
          year: -176,
          event: 'Maximum Xiongnu Power',
          type: 'major',
          importance: 9,
          mapState: {
            territory: 'Mongolia to Central Asia',
            vassals: ['Western Regions (Xinjiang)', 'Manchuria']
          },
          details: 'Xiongnu control vast steppe empire.',
          rival: 'Only power matching Han China'
        },
        {
          year: -133,
          event: 'Han-Xiongnu Wars Begin',
          type: 'military',
          importance: 9,
          ruler: 'Emperor Wu of Han',
          details: 'Han China launches offensive wars against Xiongnu.',
          duration: '40 years of conflict'
        },
        {
          year: -119,
          event: 'Battle of Mobei',
          type: 'military',
          importance: 8,
          details: 'Han generals Wei Qing and Huo Qubing devastate Xiongnu.',
          outcome: 'Xiongnu pushed north',
          consequence: 'Han control Silk Road'
        },
        {
          year: -57,
          event: 'Xiongnu Civil War',
          type: 'political',
          importance: 8,
          details: 'Empire splits between five rival chanyus.',
          outcome: 'Southern Xiongnu submit to Han'
        },
        {
          year: 48,
          event: 'Permanent North-South Split',
          type: 'political',
          importance: 7,
          details: 'Northern Xiongnu independent; Southern become Han vassals.',
          southern: 'Settled inside Chinese borders'
        },
        {
          year: 89,
          event: 'Battle of Ikh Bayan',
          type: 'military',
          importance: 8,
          details: 'Han and southern Xiongnu crush northern Xiongnu.',
          outcome: 'Northern Xiongnu flee west'
        },
        {
          year: 155,
          event: 'Xianbei Destroy Northern Xiongnu',
          type: 'catastrophic',
          importance: 7,
          details: 'Xianbei confederation annihilates remaining northern Xiongnu.',
          aftermath: 'Survivors flee west (become Huns?)'
        },
        {
          year: 304,
          event: 'Southern Xiongnu Revolt',
          type: 'military',
          importance: 8,
          ruler: 'Liu Yuan',
          details: 'Sinicized Xiongnu establish Han Zhao dynasty.',
          significance: 'Help destroy Western Jin China'
        },
        {
          year: 460,
          event: 'Last Xiongnu State Falls',
          type: 'political',
          importance: 6,
          details: 'Northern Liang (Xiongnu-led) conquered.',
          legacy: 'Absorbed into other peoples'
        }
      ],
      
      achievements: [
        'First major steppe empire',
        'Template for later nomadic empires',
        'Forced construction of Great Wall',
        'Sophisticated confederation system',
        'Bronze and gold artwork',
        'Leather and felt crafts'
      ],
      
      hunConnection: {
        theory: 'Xiongnu who fled west may have become the Huns',
        evidence: 'Similar name, timing, horse archer tactics',
        debate: 'Not conclusively proven'
      },
      
      keyFigures: [
        { name: 'Modu Chanyu', role: 'Founder/Conqueror', years: [-234, -174] }
      ],
      
      influence: {
        influenced: ['huns', 'turkic-peoples', 'mongols'],
        influencedBy: ['scythians'],
        tradeRoutes: ['silk-road-north']
      }
    },
    
    {
      id: 'huns',
      name: 'Hunnic Empire',
      timespan: { start: 370, end: 469 },
      center: { lat: 47.0, lng: 20.0 }, // Hungarian Plain
      
      timeline: [
        {
          year: 370,
          event: 'Huns Appear in Europe',
          type: 'major',
          importance: 9,
          details: 'Huns cross Volga, attack Alans and Goths.',
          origin: 'Unknown - possibly descended from Xiongnu',
          impact: 'Triggers Migration Period in Europe'
        },
        {
          year: 376,
          event: 'Goths Flee Across Danube',
          type: 'major',
          importance: 9,
          details: 'Gothic tribes seek refuge in Roman Empire.',
          consequence: 'Battle of Adrianople (378), beginning of Western Roman collapse'
        },
        {
          year: 395,
          event: 'Huns Raid Roman Empire',
          type: 'military',
          importance: 7,
          details: 'Huns raid Balkans, Anatolia, Syria.',
          extent: 'Nearly reach Jerusalem'
        },
        {
          year: 434,
          event: 'Attila and Bleda Rule',
          type: 'political',
          importance: 9,
          rulers: ['Attila', 'Bleda (brother)'],
          details: 'Brothers become co-rulers of unified Huns.',
          territory: 'German to Caspian'
        },
        {
          year: 441,
          event: 'Balkan Invasions',
          type: 'military',
          importance: 8,
          details: 'Attila devastates Balkans.',
          destroyed: 'Belgrade, Sofia, other cities',
          tribute: 'Eastern Empire pays huge sums'
        },
        {
          year: 445,
          event: 'Attila Kills Bleda',
          type: 'political',
          importance: 8,
          details: 'Attila becomes sole ruler.',
          power: 'Commands all Hunnic and Germanic tribes'
        },
        {
          year: 447,
          event: 'Major Balkan Campaign',
          type: 'military',
          importance: 8,
          details: 'Attila destroys 70 cities, threatens Constantinople.',
          earthquake: 'Walls damaged, quickly rebuilt',
          tribute: 'Triple tribute extracted'
        },
        {
          year: 451,
          event: 'Battle of the Catalaunian Plains',
          type: 'military',
          importance: 10,
          location: { lat: 48.3, lng: 4.0 }, // Châlons, France
          opponents: 'Roman-Visigothic alliance vs Huns',
          details: 'One of history\'s bloodiest battles.',
          casualties: '165,000 dead (ancient claim)',
          outcome: 'Draw/Hun retreat',
          significance: 'Stopped Hunnic conquest of Western Europe'
        },
        {
          year: 452,
          event: 'Invasion of Italy',
          type: 'military',
          importance: 9,
          details: 'Attila invades Italy, devastates north.',
          destroyed: 'Aquileia, Milan, other cities',
          retreat: 'Withdraws after meeting Pope Leo I',
          reasons: 'Plague, famine, Eastern Roman threat'
        },
        {
          year: 453,
          event: 'Death of Attila',
          type: 'political',
          importance: 10,
          details: 'Attila dies on wedding night.',
          cause: 'Nosebleed/hemorrhage (possibly alcohol)',
          bride: 'Ildico (Germanic princess)',
          burial: 'Secret location, river diverted'
        },
        {
          year: 454,
          event: 'Battle of Nedao - Empire Collapses',
          type: 'catastrophic',
          importance: 9,
          details: 'Germanic subjects revolt, defeat Attila\'s sons.',
          location: { lat: 45.4, lng: 18.0 }, // Pannonia
          outcome: 'Hunnic Empire dissolves',
          afterlife: 'Huns absorbed into other peoples'
        },
        {
          year: 469,
          event: 'Last Hunnic King Dies',
          type: 'political',
          importance: 6,
          ruler: 'Dengizich',
          details: 'Last significant Hun leader killed.',
          method: 'Head sent to Constantinople'
        }
      ],
      
      achievements: [
        'Unified massive steppe empire',
        'Composite recurve bow',
        'Horse archery perfected',
        'Terror as psychological warfare',
        'Multi-ethnic empire management'
      ],
      
      attilaLegacy: {
        titles: ['Scourge of God', 'Flagellum Dei'],
        reputation: 'Where his horse trod, grass never grew',
        legend: 'Featured in Nibelungenlied (as Etzel)',
        fear: 'Terrified Christian Europe'
      },
      
      keyFigures: [
        { name: 'Attila', role: 'King of Huns', years: [406, 453] },
        { name: 'Bleda', role: 'Co-ruler', years: [390, 445] }
      ],
      
      influence: {
        influenced: ['germanic-migrations', 'fall-of-rome'],
        influencedBy: ['xiongnu', 'steppe-peoples'],
        consequence: 'Triggered reshaping of Europe'
      }
    },
    
    {
      id: 'gokturks',
      name: 'Göktürk Khaganate',
      timespan: { start: 552, end: 744 },
      center: { lat: 47.0, lng: 90.0 }, // Mongolia/Altai
      
      timeline: [
        {
          year: 552,
          event: 'First Turkic Khaganate Founded',
          type: 'political',
          importance: 9,
          ruler: 'Bumin Khagan',
          details: 'Turkic peoples overthrow Rouran, establish empire.',
          mapState: {
            capital: { name: 'Ötüken', lat: 47.5, lng: 102.0 }
          },
          significance: 'First major Turkic empire'
        },
        {
          year: 553,
          event: 'Istämi Conquers West',
          type: 'military',
          importance: 8,
          ruler: 'Istämi (brother)',
          details: 'Western expansion to Caspian and Persia.',
          extent: 'Manchuria to Black Sea'
        },
        {
          year: 568,
          event: 'Alliance with Byzantine Empire',
          type: 'political',
          importance: 7,
          details: 'Turks ally with Byzantium against Persia.',
          trade: 'Silk Road bypass around Persia'
        },
        {
          year: 580,
          event: 'Khaganate Splits',
          type: 'political',
          importance: 8,
          details: 'Empire divides into Eastern and Western Khaganates.',
          cause: 'Succession disputes'
        },
        {
          year: 630,
          event: 'Eastern Khaganate Falls to Tang',
          type: 'military',
          importance: 8,
          details: 'Tang China conquers Eastern Göktürks.',
          duration: '50 years of Chinese rule'
        },
        {
          year: 657,
          event: 'Western Khaganate Falls',
          type: 'political',
          importance: 7,
          details: 'Tang destroys Western Khaganate.',
          aftermath: 'Fragmentation into smaller groups'
        },
        {
          year: 682,
          event: 'Second Turkic Khaganate',
          type: 'political',
          importance: 9,
          ruler: 'Ilterish Khagan',
          details: 'Göktürks revolt against Tang, restore empire.',
          narrative: 'Orkhon inscriptions tell story'
        },
        {
          year: 716,
          event: 'Bilge Khagan Rules',
          type: 'political',
          importance: 8,
          ruler: 'Bilge Khagan',
          details: 'Height of Second Khaganate.',
          advisor: 'Tonyukuk (famous statesman)'
        },
        {
          year: 720,
          event: 'Orkhon Inscriptions Created',
          type: 'cultural',
          importance: 9,
          location: { lat: 47.2, lng: 102.8 },
          details: 'Oldest known Turkic writing carved in stone.',
          content: 'History of Göktürks, political advice',
          significance: 'First Turkic historical writing'
        },
        {
          year: 744,
          event: 'Göktürks Overthrown by Uyghurs',
          type: 'political',
          importance: 8,
          successor: 'Uyghur Khaganate',
          details: 'Subject Uyghur tribes revolt, destroy Göktürks.'
        }
      ],
      
      achievements: [
        'First major Turkic empire',
        'Old Turkic script',
        'Orkhon inscriptions',
        'Controlled entire Silk Road',
        'Diplomatic relations with China, Persia, Byzantium',
        'Turkic political traditions'
      ],
      
      keyFigures: [
        { name: 'Bumin Khagan', role: 'Founder', years: [490, 552] },
        { name: 'Istämi', role: 'Western Conqueror', years: [500, 576] },
        { name: 'Bilge Khagan', role: 'Second Empire', years: [683, 734] },
        { name: 'Tonyukuk', role: 'Statesman/Strategist', years: [646, 726] }
      ],
      
      influence: {
        influenced: ['uyghurs', 'turks', 'ottomans', 'turkic-peoples'],
        influencedBy: ['xiongnu', 'rouran'],
        legacy: 'All modern Turkic peoples trace to this culture'
      }
    },
    
    {
      id: 'mongol-empire',
      name: 'Mongol Empire',
      timespan: { start: 1206, end: 1368 },
      center: { lat: 47.5, lng: 107.0 }, // Mongolia
      
      timeline: [
        {
          year: 1162,
          event: 'Birth of Temüjin',
          type: 'political',
          importance: 8,
          details: 'Future Genghis Khan born.',
          circumstances: 'Son of minor chief, father poisoned when child',
          hardship: 'Grew up in poverty and exile'
        },
        {
          year: 1206,
          event: 'Mongol Empire Founded',
          type: 'political',
          importance: 10,
          ruler: 'Genghis Khan (Temüjin)',
          mapState: {
            capital: { name: 'Karakorum', lat: 47.2, lng: 102.8 }
          },
          details: 'Temüjin proclaimed universal ruler at khuriltai.',
          title: 'Genghis Khan = "Universal Ruler"',
          achievement: 'United all Mongol tribes'
        },
        {
          year: 1209,
          event: 'Conquest of Western Xia',
          type: 'military',
          importance: 7,
          details: 'First major conquest outside steppe.',
          victim: 'Tangut kingdom (NW China)'
        },
        {
          year: 1211,
          event: 'Invasion of Jin China',
          type: 'military',
          importance: 9,
          details: 'Mongols invade northern China.',
          duration: '23 years to complete conquest'
        },
        {
          year: 1215,
          event: 'Fall of Zhongdu (Beijing)',
          type: 'military',
          importance: 8,
          details: 'Mongols capture Jin capital.',
          aftermath: 'City burned, millions killed'
        },
        {
          year: 1219,
          event: 'Invasion of Khwarezm',
          type: 'military',
          importance: 10,
          opponent: 'Khwarazmian Empire (Persia/Central Asia)',
          cause: 'Khwarezm Shah killed Mongol envoys and merchants',
          details: 'Genghis Khan invades with 200,000 troops.',
          devastation: 'Cities completely destroyed'
        },
        {
          year: 1220,
          event: 'Destruction of Bukhara and Samarkand',
          type: 'military',
          importance: 9,
          details: 'Major Silk Road cities destroyed.',
          quote: 'Genghis: "I am the punishment of God"',
          method: 'Citizens used as human shields'
        },
        {
          year: 1221,
          event: 'Destruction of Merv',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 37.7, lng: 62.2 },
          details: 'One of world\'s largest cities destroyed.',
          casualties: 'Estimated 700,000-1,300,000 killed',
          significance: 'Among deadliest sieges in history'
        },
        {
          year: 1223,
          event: 'Battle of the Kalka River',
          type: 'military',
          importance: 8,
          location: { lat: 47.0, lng: 38.0 }, // Ukraine
          opponent: 'Kievan Rus and Cumans',
          details: 'First Mongol invasion of Europe.',
          outcome: 'Russian princes crushed',
          method: 'Captured princes suffocated under victory platform'
        },
        {
          year: 1227,
          event: 'Death of Genghis Khan',
          type: 'political',
          importance: 10,
          details: 'Genghis Khan dies during Western Xia campaign.',
          burial: 'Secret location (never found)',
          empire: 'Largest contiguous empire in history forming',
          succession: 'Ögedei named successor'
        },
        {
          year: 1237,
          event: 'Mongol Invasion of Russia',
          type: 'military',
          importance: 9,
          commander: 'Batu Khan',
          details: 'Mongols conquer Russian principalities.',
          destroyed: 'Kiev, Moscow, Vladimir',
          rule: 'Mongol Yoke lasts 240 years'
        },
        {
          year: 1241,
          event: 'Mongols Invade Europe',
          type: 'military',
          importance: 10,
          battles: [
            { name: 'Legnica', location: { lat: 51.2, lng: 16.2 }, date: 'April 9' },
            { name: 'Mohi', location: { lat: 47.8, lng: 21.2 }, date: 'April 11' }
          ],
          details: 'Mongols defeat Polish-German and Hungarian armies.',
          outcome: 'Europe lies open',
          salvation: 'Ögedei Khan dies; Mongols return for succession'
        },
        {
          year: 1258,
          event: 'Destruction of Baghdad',
          type: 'catastrophic',
          importance: 10,
          commander: 'Hulagu Khan',
          details: 'Mongols destroy Abbasid Caliphate capital.',
          casualties: '200,000-2,000,000 killed',
          destruction: 'Libraries destroyed, irrigation collapsed',
          significance: 'End of Islamic Golden Age',
          caliph: 'Rolled in carpet and trampled to death'
        },
        {
          year: 1260,
          event: 'Battle of Ain Jalut',
          type: 'military',
          importance: 9,
          location: { lat: 32.5, lng: 35.4 }, // Israel
          opponent: 'Mamluk Egypt',
          details: 'First major Mongol defeat.',
          commander: 'Baybars (Mamluk)',
          significance: 'Mongol expansion stopped'
        },
        {
          year: 1260,
          event: 'Empire Fragments into Khanates',
          type: 'political',
          importance: 9,
          details: 'Empire splits into four khanates.',
          khanates: [
            'Golden Horde (Russia)',
            'Chagatai Khanate (Central Asia)',
            'Ilkhanate (Persia)',
            'Yuan Dynasty (China)'
          ]
        },
        {
          year: 1271,
          event: 'Kublai Khan Founds Yuan Dynasty',
          type: 'political',
          importance: 9,
          ruler: 'Kublai Khan',
          mapState: {
            capital: { name: 'Khanbaliq (Beijing)', lat: 39.9, lng: 116.4 }
          },
          details: 'Mongols rule all China.',
          visitor: 'Marco Polo arrives (1271-1295)'
        },
        {
          year: 1274,
          event: 'First Mongol Invasion of Japan',
          type: 'military',
          importance: 8,
          details: 'Fleet destroyed by typhoon.',
          ships: '900 ships'
        },
        {
          year: 1281,
          event: 'Second Mongol Invasion of Japan',
          type: 'military',
          importance: 8,
          details: 'Largest naval invasion before D-Day destroyed by "kamikaze".',
          ships: '4,400 ships',
          troops: '140,000',
          outcome: 'Divine wind saves Japan'
        },
        {
          year: 1294,
          event: 'Death of Kublai Khan',
          type: 'political',
          importance: 8,
          details: 'Last great Mongol khan dies.',
          aftermath: 'Yuan Dynasty weakens'
        },
        {
          year: 1368,
          event: 'Mongols Expelled from China',
          type: 'political',
          importance: 9,
          details: 'Ming Dynasty overthrows Yuan.',
          aftermath: 'Mongols return to steppe'
        }
      ],
      
      achievements: [
        'Largest contiguous land empire ever',
        'Pax Mongolica (Mongol Peace)',
        'Silk Road flourishing',
        'Religious tolerance',
        'Postal system (Yam)',
        'Paper money (attempted)',
        'Cultural exchange East-West',
        'Diplomatic immunity principles'
      ],
      
      statistics: {
        area: '24 million km² at peak',
        population: '100+ million subjects',
        deaths: '40 million estimated (11% of world population)',
        length: '12,000 km east to west'
      },
      
      keyFigures: [
        { name: 'Genghis Khan', role: 'Founder/Conqueror', years: [1162, 1227] },
        { name: 'Ögedei Khan', role: 'Successor', years: [1186, 1241] },
        { name: 'Batu Khan', role: 'Golden Horde Founder', years: [1207, 1255] },
        { name: 'Kublai Khan', role: 'Yuan Emperor', years: [1215, 1294] },
        { name: 'Hulagu Khan', role: 'Destroyer of Baghdad', years: [1217, 1265] }
      ],
      
      influence: {
        influenced: ['russia', 'china', 'persia', 'india', 'world-history'],
        influencedBy: ['xiongnu', 'gokturks', 'chinese-administration'],
        legacy: 'Reshaped entire world'
      }
    },
    
    {
      id: 'timurids',
      name: 'Timurid Empire',
      timespan: { start: 1370, end: 1507 },
      center: { lat: 39.65, lng: 66.96 }, // Samarkand
      
      timeline: [
        {
          year: 1370,
          event: 'Timur Takes Samarkand',
          type: 'political',
          importance: 9,
          ruler: 'Timur (Tamerlane)',
          mapState: {
            capital: { name: 'Samarkand', lat: 39.6542, lng: 66.9597 }
          },
          details: 'Timur conquers Transoxiana, begins empire.',
          claim: 'Descendant of Genghis Khan (through marriage)',
          name: 'Timur-i-lang = "Timur the Lame"'
        },
        {
          year: 1383,
          event: 'Conquest of Persia Begins',
          type: 'military',
          importance: 8,
          details: 'Timur invades Persia.',
          duration: '10 years to complete'
        },
        {
          year: 1398,
          event: 'Invasion of India',
          type: 'military',
          importance: 9,
          details: 'Timur invades Delhi Sultanate.',
          battle: 'Delhi captured December 1398',
          massacre: '100,000 captives killed before battle',
          devastation: 'Delhi takes century to recover'
        },
        {
          year: 1400,
          event: 'Invasion of Syria',
          type: 'military',
          importance: 8,
          details: 'Timur defeats Mamluks.',
          destroyed: 'Aleppo, Damascus'
        },
        {
          year: 1402,
          event: 'Battle of Ankara',
          type: 'military',
          importance: 10,
          location: { lat: 39.9, lng: 32.9 },
          opponent: 'Ottoman Empire',
          details: 'Timur defeats and captures Ottoman Sultan Bayezid I.',
          outcome: 'Ottoman interregnum (11 years)',
          significance: 'Delayed Ottoman conquest of Constantinople'
        },
        {
          year: 1405,
          event: 'Death of Timur',
          type: 'political',
          importance: 9,
          location: 'Otrar (Kazakhstan)',
          details: 'Timur dies preparing to invade Ming China.',
          deaths: '17 million killed in conquests (5% of world)',
          burial: 'Gur-e-Amir, Samarkand'
        },
        {
          year: 1405,
          event: 'Successor Wars',
          type: 'political',
          importance: 6,
          details: 'Empire fragments among descendants.'
        },
        {
          year: 1420,
          event: 'Ulugh Beg\'s Rule',
          type: 'political',
          importance: 8,
          ruler: 'Ulugh Beg',
          details: 'Astronomer-king rules from Samarkand.',
          achievement: 'Built great observatory'
        },
        {
          year: 1437,
          event: 'Zij-i Sultani Star Catalogue',
          type: 'cultural',
          importance: 8,
          details: 'Most accurate star catalogue until Tycho Brahe.',
          stars: '994 stars catalogued',
          accuracy: 'Positions accurate to arc-minute'
        },
        {
          year: 1449,
          event: 'Ulugh Beg Assassinated',
          type: 'political',
          importance: 6,
          details: 'Scientist-king killed by own son.',
          aftermath: 'Cultural decline'
        },
        {
          year: 1469,
          event: 'Herat Renaissance',
          type: 'cultural',
          importance: 8,
          ruler: 'Sultan Husayn Bayqara',
          details: 'Last flowering of Timurid culture.',
          artists: ['Behzad (painter)', 'Jami (poet)', 'Navai (poet)']
        },
        {
          year: 1507,
          event: 'Fall of Timurid Empire',
          type: 'political',
          importance: 8,
          conqueror: 'Uzbeks (Shaybanids)',
          details: 'Last Timurid lands conquered.',
          survivor: 'Babur escapes to India, founds Mughal Empire'
        }
      ],
      
      achievements: [
        'Registan complex (Samarkand)',
        'Timurid architecture',
        'Persian miniature painting',
        'Ulugh Beg Observatory',
        'Accurate star catalogue',
        'Persian literature revival',
        'Gur-e-Amir mausoleum'
      ],
      
      keyFigures: [
        { name: 'Timur (Tamerlane)', role: 'Conqueror', years: [1336, 1405] },
        { name: 'Ulugh Beg', role: 'Astronomer-King', years: [1394, 1449] },
        { name: 'Babur', role: 'Last Timurid → Mughal Founder', years: [1483, 1530] }
      ],
      
      influence: {
        influenced: ['mughal-empire', 'persian-art', 'central-asian-architecture'],
        influencedBy: ['mongol-empire', 'persian-culture'],
        legacy: 'Mughal Empire carried Timurid culture to India'
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(CENTRAL_ASIA_CIVILIZATIONS);
}
