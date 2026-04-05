/**
 * GEOTOPIA - East Asian Civilizations
 * Chinese Dynasties, Japan, Korea, Mongolia
 */

const EAST_ASIA_CIVILIZATIONS = {
  region: 'East Asia',
  color: '#DC143C', // Crimson
  timeRange: { start: -2070, end: 1912 },
  
  civilizations: [
    {
      id: 'china-xia-shang',
      name: 'Ancient China (Xia, Shang, Zhou)',
      timespan: { start: -2070, end: -256 },
      center: { lat: 34.5, lng: 109.0 }, // Yellow River
      
      timeline: [
        {
          year: -2070,
          event: 'Xia Dynasty (legendary)',
          type: 'political',
          importance: 7,
          ruler: 'Yu the Great',
          details: 'First Chinese dynasty according to tradition.',
          achievement: 'Flood control (Yu the Great)',
          note: 'Historicity debated, archaeological evidence limited'
        },
        {
          year: -1600,
          event: 'Shang Dynasty Established',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'Yin (Anyang)', lat: 36.1, lng: 114.3 }
          },
          details: 'First historically verified Chinese dynasty.',
          achievements: ['Oracle bones', 'Bronze casting', 'Chinese writing']
        },
        {
          year: -1300,
          event: 'Oracle Bone Script Developed',
          type: 'cultural',
          importance: 10,
          details: 'Earliest Chinese writing on turtle shells and bones.',
          purpose: 'Divination - asking ancestors questions',
          significance: 'Ancestor of all Chinese scripts'
        },
        {
          year: -1046,
          event: 'Zhou Dynasty Founded',
          type: 'political',
          importance: 9,
          ruler: 'King Wu of Zhou',
          details: 'Zhou overthrow Shang at Battle of Muye.',
          concept: 'Mandate of Heaven introduced',
          significance: 'Longest Chinese dynasty (800 years)'
        },
        {
          year: -771,
          event: 'Eastern Zhou - Spring and Autumn Period',
          type: 'political',
          importance: 8,
          details: 'Zhou king flees east, feudal lords gain power.',
          mapState: {
            capital: { name: 'Luoyang', lat: 34.6, lng: 112.4 }
          },
          period: 'Hundred Schools of Thought'
        },
        {
          year: -551,
          event: 'Birth of Confucius',
          type: 'cultural',
          importance: 10,
          location: { lat: 35.6, lng: 117.0 }, // Qufu
          details: 'Most influential Chinese philosopher born.',
          teachings: ['Filial piety', 'Social harmony', 'Ritual propriety', 'Virtue'],
          significance: 'Shaped Chinese civilization for 2,500 years'
        },
        {
          year: -544,
          event: 'Birth of Laozi (traditional)',
          type: 'cultural',
          importance: 9,
          details: 'Founder of Taoism, wrote Tao Te Ching.',
          teachings: ['The Way (Tao)', 'Wu wei (non-action)', 'Naturalness'],
          significance: 'Second major Chinese philosophy'
        },
        {
          year: -475,
          event: 'Warring States Period',
          type: 'political',
          importance: 8,
          details: '7 major states fight for supremacy.',
          states: ['Qin', 'Chu', 'Qi', 'Yan', 'Han', 'Wei', 'Zhao'],
          innovations: 'Iron weapons, cavalry, siege warfare, crossbow'
        },
        {
          year: -372,
          event: 'Birth of Mencius',
          type: 'cultural',
          importance: 7,
          details: '"Second Sage" after Confucius, argued humans innately good.'
        },
        {
          year: -256,
          event: 'Zhou Dynasty Ends',
          type: 'political',
          importance: 6,
          details: 'Qin conquers last Zhou territory.'
        }
      ],
      
      achievements: [
        'Chinese writing system',
        'Bronze casting (finest in ancient world)',
        'Confucianism',
        'Taoism',
        'Iron metallurgy',
        'Crossbow',
        'Cavalry warfare',
        'Philosophical schools'
      ],
      
      keyFigures: [
        { name: 'Yu the Great', role: 'Legendary flood controller', years: [-2200, -2100] },
        { name: 'Confucius', role: 'Great Philosopher', years: [-551, -479] },
        { name: 'Laozi', role: 'Taoist Founder', years: [-600, -500] },
        { name: 'Sun Tzu', role: 'Art of War author', years: [-544, -496] },
        { name: 'Mencius', role: 'Confucian Scholar', years: [-372, -289] }
      ],
      
      influence: {
        influenced: ['all-china', 'korea', 'japan', 'vietnam', 'confucian-sphere'],
        tradeRoutes: ['yellow-river', 'yangtze']
      }
    },
    
    {
      id: 'qin-dynasty',
      name: 'Qin Dynasty',
      timespan: { start: -221, end: -206 },
      center: { lat: 34.3, lng: 108.9 }, // Xianyang
      
      timeline: [
        {
          year: -246,
          event: 'Ying Zheng Becomes King of Qin',
          type: 'political',
          importance: 8,
          ruler: 'Ying Zheng (future First Emperor)',
          details: '13-year-old becomes king, begins conquest.'
        },
        {
          year: -221,
          event: 'Unification of China - First Emperor',
          type: 'political',
          importance: 10,
          ruler: 'Qin Shi Huang (First Emperor)',
          mapState: {
            capital: { name: 'Xianyang', lat: 34.3366, lng: 108.7147 },
            unified: true
          },
          details: 'Qin conquers all rivals, creates first unified Chinese empire.',
          title: 'Huangdi (Emperor) - new title combining ancient terms',
          significance: 'China\'s name comes from "Qin"'
        },
        {
          year: -220,
          event: 'Standardization Reforms',
          type: 'major',
          importance: 10,
          details: 'Sweeping reforms unify Chinese culture.',
          standardizations: [
            'Writing script',
            'Weights and measures',
            'Currency',
            'Axle widths (road gauge)',
            'Laws'
          ],
          significance: 'Created cultural unity that persists today'
        },
        {
          year: -214,
          event: 'Great Wall Construction Begins',
          type: 'major',
          importance: 10,
          details: 'Existing walls connected and extended.',
          length: '5,000 km (initial)',
          workers: '300,000+ conscripts',
          casualties: 'Hundreds of thousands died',
          purpose: 'Defense against northern nomads'
        },
        {
          year: -213,
          event: 'Burning of Books',
          type: 'catastrophic',
          importance: 8,
          details: 'Emperor orders destruction of non-approved texts.',
          destroyed: 'Philosophy, history, poetry (except practical texts)',
          aftermath: '460 scholars buried alive'
        },
        {
          year: -210,
          event: 'Death of First Emperor',
          type: 'political',
          importance: 9,
          location: { lat: 38.0, lng: 114.5 }, // Died while traveling
          details: 'Emperor dies seeking immortality elixir.',
          burial: 'Terracotta Army guards tomb'
        },
        {
          year: -210,
          event: 'Terracotta Army Buried',
          type: 'cultural',
          importance: 10,
          location: { lat: 34.3848, lng: 109.2734 },
          details: '8,000+ life-size terracotta warriors buried with emperor.',
          army: [
            '8,000 soldiers',
            '130 chariots',
            '670 horses',
            'Each face unique'
          ],
          significance: 'Greatest archaeological find of 20th century (1974)'
        },
        {
          year: -206,
          event: 'Qin Dynasty Falls',
          type: 'political',
          importance: 8,
          details: 'Peasant rebellions overthrow weak second emperor.',
          cause: 'Harsh laws, excessive conscription',
          aftermath: 'Civil war between Chu and Han'
        }
      ],
      
      achievements: [
        'First unified Chinese empire',
        'Standardized writing, currency, measures',
        'Great Wall (initial construction)',
        'Terracotta Army',
        'Road network',
        'Centralized bureaucracy',
        'Legalist government'
      ],
      
      keyFigures: [
        { name: 'Qin Shi Huang', role: 'First Emperor', years: [-259, -210] },
        { name: 'Li Si', role: 'Prime Minister', years: [-284, -208] }
      ],
      
      influence: {
        influenced: ['han-dynasty', 'all-chinese-empires'],
        influencedBy: ['warring-states', 'legalism']
      }
    },
    
    {
      id: 'han-dynasty',
      name: 'Han Dynasty',
      timespan: { start: -206, end: 220 },
      center: { lat: 34.3, lng: 108.9 }, // Chang'an
      
      timeline: [
        {
          year: -206,
          event: 'Han Dynasty Founded',
          type: 'political',
          importance: 10,
          ruler: 'Liu Bang (Emperor Gaozu)',
          details: 'Peasant leader defeats rivals, founds 400-year dynasty.',
          mapState: {
            capital: { name: 'Chang\'an (Xi\'an)', lat: 34.2667, lng: 108.9 }
          },
          significance: 'Chinese call themselves "Han people"'
        },
        {
          year: -141,
          event: 'Emperor Wu\'s Reign Begins',
          type: 'political',
          importance: 10,
          ruler: 'Emperor Wu (Han Wudi)',
          details: 'Greatest Han emperor, rules 54 years.',
          achievements: ['Military expansion', 'Silk Road', 'Confucian state']
        },
        {
          year: -138,
          event: 'Zhang Qian\'s Western Expedition',
          type: 'major',
          importance: 9,
          explorer: 'Zhang Qian',
          details: 'Embassy sent to Central Asia, opens Silk Road.',
          destination: 'Reached Bactria (Afghanistan)',
          significance: 'Connected China to Western world',
          discoveries: 'Grapes, alfalfa, horses (Ferghana)'
        },
        {
          year: -119,
          event: 'Xiongnu (Huns) Defeated',
          type: 'military',
          importance: 8,
          details: 'Major victory over northern nomads.',
          general: 'Wei Qing, Huo Qubing',
          result: 'Xiongnu pushed north, Silk Road secured'
        },
        {
          year: -108,
          event: 'Conquest of Korea',
          type: 'military',
          importance: 7,
          details: 'Han conquers Korean peninsula, establishes commanderies.',
          significance: 'Chinese influence in Korea begins'
        },
        {
          year: -104,
          event: 'Calendar Reform',
          type: 'cultural',
          importance: 7,
          details: 'Grand Inception Calendar adopted.',
          accuracy: 'Year = 365.25 days'
        },
        {
          year: -100,
          event: 'Sima Qian Writes Records of Grand Historian',
          type: 'cultural',
          importance: 9,
          historian: 'Sima Qian',
          details: 'First comprehensive Chinese history written.',
          coverage: 'From legendary Yellow Emperor to his time',
          significance: 'Model for all subsequent Chinese histories'
        },
        {
          year: -2,
          event: 'Population Census',
          type: 'major',
          importance: 7,
          details: 'Han census counts 57.7 million people.',
          significance: 'Most populous empire in world'
        },
        {
          year: 2,
          event: 'Paper Invention Documented',
          type: 'cultural',
          importance: 10,
          inventor: 'Cai Lun (improved process)',
          details: 'Paper production standardized and improved.',
          significance: 'One of greatest inventions in human history'
        },
        {
          year: 9,
          event: 'Wang Mang Usurps Throne',
          type: 'political',
          importance: 7,
          ruler: 'Wang Mang',
          details: 'Xin dynasty briefly interrupts Han (9-23 CE).',
          reforms: 'Land redistribution (failed)'
        },
        {
          year: 25,
          event: 'Eastern Han Restoration',
          type: 'political',
          importance: 8,
          ruler: 'Emperor Guangwu',
          mapState: {
            capital: { name: 'Luoyang', lat: 34.6, lng: 112.4 }
          },
          details: 'Han restored with new capital at Luoyang.'
        },
        {
          year: 100,
          event: 'Buddhism Arrives in China',
          type: 'cultural',
          importance: 9,
          details: 'Buddhist monks and texts reach China via Silk Road.',
          significance: 'Major religion takes root in China'
        },
        {
          year: 105,
          event: 'Cai Lun Presents Paper to Emperor',
          type: 'cultural',
          importance: 10,
          details: 'Paper-making process officially presented.',
          materials: 'Tree bark, hemp, rags, fishnets'
        },
        {
          year: 132,
          event: 'First Seismograph',
          type: 'cultural',
          importance: 8,
          inventor: 'Zhang Heng',
          details: 'World\'s first earthquake detector invented.',
          design: 'Bronze vessel with dragons and toads'
        },
        {
          year: 166,
          event: 'Roman Envoys Reach China',
          type: 'major',
          importance: 7,
          details: 'First recorded contact between Rome and China.',
          significance: 'East meets West'
        },
        {
          year: 184,
          event: 'Yellow Turban Rebellion',
          type: 'catastrophic',
          importance: 8,
          details: 'Massive peasant uprising weakens Han.',
          followers: 'Hundreds of thousands',
          cause: 'Famine, corruption, disease'
        },
        {
          year: 220,
          event: 'Fall of Han Dynasty',
          type: 'catastrophic',
          importance: 9,
          details: 'Last Han emperor abdicates, Three Kingdoms period begins.',
          aftermath: 'China divided for 350 years'
        }
      ],
      
      achievements: [
        'Paper invention',
        'Silk Road trade',
        'Seismograph',
        'Confucian state system',
        'Civil service exams (early form)',
        'Iron and steel',
        'Historical writing',
        'Wheelbarrow',
        'Porcelain',
        'Acupuncture systematized'
      ],
      
      keyFigures: [
        { name: 'Liu Bang (Gaozu)', role: 'Founder', years: [-256, -195] },
        { name: 'Emperor Wu', role: 'Expansion Emperor', years: [-157, -87] },
        { name: 'Sima Qian', role: 'Grand Historian', years: [-145, -86] },
        { name: 'Zhang Qian', role: 'Explorer', years: [-200, -114] },
        { name: 'Cai Lun', role: 'Paper Maker', years: [50, 121] },
        { name: 'Zhang Heng', role: 'Scientist', years: [78, 139] }
      ],
      
      influence: {
        influenced: ['silk-road', 'korea', 'japan', 'vietnam', 'central-asia'],
        influencedBy: ['qin-dynasty', 'confucianism'],
        tradeRoutes: ['silk-road', 'maritime-silk-road']
      }
    },
    
    {
      id: 'tang-dynasty',
      name: 'Tang Dynasty',
      timespan: { start: 618, end: 907 },
      center: { lat: 34.3, lng: 108.9 }, // Chang'an
      
      timeline: [
        {
          year: 618,
          event: 'Tang Dynasty Founded',
          type: 'political',
          importance: 10,
          ruler: 'Emperor Gaozu (Li Yuan)',
          mapState: {
            capital: { name: 'Chang\'an', lat: 34.2667, lng: 108.9 }
          },
          details: 'Li Yuan overthrows Sui, begins golden age.',
          capital: 'Chang\'an - world\'s largest city (1 million)'
        },
        {
          year: 626,
          event: 'Taizong Becomes Emperor',
          type: 'political',
          importance: 10,
          ruler: 'Emperor Taizong (Li Shimin)',
          details: 'Greatest Tang emperor after killing brothers in coup.',
          reign: 'Model of good governance in Chinese history'
        },
        {
          year: 629,
          event: 'Xuanzang\'s Journey to India',
          type: 'cultural',
          importance: 8,
          traveler: 'Xuanzang',
          details: 'Buddhist monk travels to India for scriptures.',
          duration: '17 years, 10,000 km',
          significance: 'Inspired "Journey to the West" novel',
          texts: 'Brought back 657 Buddhist texts'
        },
        {
          year: 640,
          event: 'Tang Conquers Central Asia',
          type: 'military',
          importance: 9,
          details: 'Tang controls Silk Road, dominates Central Asia.',
          extent: 'From Korea to Iran border',
          significance: 'Greatest extent of Chinese power before Qing'
        },
        {
          year: 690,
          event: 'Wu Zetian Becomes Empress',
          type: 'political',
          importance: 9,
          ruler: 'Wu Zetian',
          details: 'Only woman to rule China in her own right as emperor.',
          achievements: ['Expanded civil service', 'Patronized Buddhism'],
          controversy: 'Rose through intrigue, eliminated rivals'
        },
        {
          year: 712,
          event: 'Emperor Xuanzong\'s Reign - Peak of Tang',
          type: 'major',
          importance: 10,
          ruler: 'Emperor Xuanzong',
          details: '44-year reign, Tang golden age.',
          population: '50 million',
          culture: 'Poetry, music, art flourish'
        },
        {
          year: 751,
          event: 'Battle of Talas',
          type: 'military',
          importance: 9,
          location: { lat: 42.5, lng: 71.0 }, // Kazakhstan
          opponent: 'Abbasid Caliphate',
          details: 'Tang defeated by Arabs in Central Asia.',
          consequence: 'Papermaking spreads to Islamic world',
          significance: 'Limit of Chinese western expansion'
        },
        {
          year: 755,
          event: 'An Lushan Rebellion',
          type: 'catastrophic',
          importance: 10,
          rebel: 'An Lushan',
          details: 'Massive rebellion devastates Tang China.',
          casualties: '36 million killed (2/3 of Tang population)',
          duration: '8 years (755-763)',
          significance: 'One of deadliest conflicts in history'
        },
        {
          year: 763,
          event: 'Rebellion Suppressed',
          type: 'political',
          importance: 7,
          details: 'Tang survives but permanently weakened.',
          aftermath: 'Regional military governors gain power'
        },
        {
          year: 845,
          event: 'Great Anti-Buddhist Persecution',
          type: 'cultural',
          importance: 7,
          details: '4,600 monasteries destroyed, 260,000 monks/nuns secularized.',
          cause: 'Economic concerns, Taoist influence',
          aftermath: 'Buddhism declines, Chan (Zen) survives'
        },
        {
          year: 907,
          event: 'Fall of Tang Dynasty',
          type: 'political',
          importance: 8,
          details: 'Last Tang emperor deposed, Five Dynasties period begins.',
          aftermath: '53 years of chaos'
        }
      ],
      
      achievements: [
        'Greatest Chinese poetry (Li Bai, Du Fu, Wang Wei)',
        'Cosmopolitan culture',
        'Civil service examination perfected',
        'Woodblock printing',
        'Porcelain (true China)',
        'Tea culture',
        'Tang legal code (influenced all East Asia)',
        'Chang\'an - world\'s largest city'
      ],
      
      keyFigures: [
        { name: 'Emperor Taizong', role: 'Model Emperor', years: [598, 649] },
        { name: 'Wu Zetian', role: 'Only Female Emperor', years: [624, 705] },
        { name: 'Emperor Xuanzong', role: 'Golden Age Emperor', years: [685, 762] },
        { name: 'Li Bai', role: 'Greatest Poet', years: [701, 762] },
        { name: 'Du Fu', role: 'Poet-Saint', years: [712, 770] },
        { name: 'Xuanzang', role: 'Buddhist Pilgrim', years: [602, 664] }
      ],
      
      influence: {
        influenced: ['japan', 'korea', 'vietnam', 'tibet', 'islamic-world'],
        influencedBy: ['han-dynasty', 'buddhism', 'silk-road'],
        culturalExports: ['Poetry', 'Buddhism', 'Legal code', 'Civil service']
      }
    },
    
    {
      id: 'song-dynasty',
      name: 'Song Dynasty',
      timespan: { start: 960, end: 1279 },
      center: { lat: 34.8, lng: 114.3 }, // Kaifeng, later Hangzhou
      
      timeline: [
        {
          year: 960,
          event: 'Song Dynasty Founded',
          type: 'political',
          importance: 9,
          ruler: 'Emperor Taizu (Zhao Kuangyin)',
          mapState: {
            capital: { name: 'Kaifeng', lat: 34.7972, lng: 114.3069 }
          },
          details: 'General reunifies China (except north), founds Song.'
        },
        {
          year: 1000,
          event: 'Northern Song Economic Boom',
          type: 'major',
          importance: 9,
          details: 'China becomes world\'s most advanced economy.',
          innovations: [
            'Paper money (first in history)',
            'Joint-stock companies',
            'Maritime trade expansion'
          ],
          population: '100 million (1/3 of world)'
        },
        {
          year: 1040,
          event: 'Moveable Type Printing Invented',
          type: 'cultural',
          importance: 10,
          inventor: 'Bi Sheng',
          details: 'First moveable type system (ceramic).',
          note: '400 years before Gutenberg',
          limitation: 'Less efficient for Chinese due to character number'
        },
        {
          year: 1044,
          event: 'Gunpowder Weapons Developed',
          type: 'major',
          importance: 10,
          details: 'First guns, bombs, grenades used in warfare.',
          weapons: ['Fire lances (proto-guns)', 'Bombs', 'Rockets', 'Land mines'],
          significance: 'Military revolution'
        },
        {
          year: 1088,
          event: 'Dream Pool Essays Written',
          type: 'cultural',
          importance: 7,
          author: 'Shen Kuo',
          details: 'Polymath describes magnetic compass, fossils, climate.',
          discoveries: ['True north', 'Fossils = ancient life', 'Erosion']
        },
        {
          year: 1100,
          event: 'Compass Navigation Widespread',
          type: 'major',
          importance: 9,
          details: 'Chinese ships use compass for navigation.',
          significance: 'Enables blue-water voyages'
        },
        {
          year: 1127,
          event: 'Jurchen Conquest - Southern Song',
          type: 'catastrophic',
          importance: 9,
          invader: 'Jin dynasty (Jurchen)',
          details: 'North China lost, Song flees south.',
          mapState: {
            capital: { name: 'Hangzhou', lat: 30.25, lng: 120.17 },
            territory: 'South China only'
          },
          aftermath: 'Southern Song flourishes economically'
        },
        {
          year: 1150,
          event: 'Hangzhou Becomes World\'s Largest City',
          type: 'major',
          importance: 8,
          details: 'Southern Song capital reaches 1.5 million people.',
          description: 'Marco Polo: "Greatest city in the world"'
        },
        {
          year: 1200,
          event: 'Neo-Confucianism Dominates',
          type: 'cultural',
          importance: 9,
          philosopher: 'Zhu Xi',
          details: 'Neo-Confucian synthesis becomes official ideology.',
          significance: 'Shapes Chinese thought for 700 years'
        },
        {
          year: 1260,
          event: 'Mongol Conquest Begins',
          type: 'military',
          importance: 8,
          invader: 'Kublai Khan',
          details: 'Mongols begin conquest of Southern Song.'
        },
        {
          year: 1279,
          event: 'Fall of Song Dynasty',
          type: 'catastrophic',
          importance: 9,
          location: { lat: 22.2, lng: 113.5 }, // Yamen naval battle
          details: 'Last Song emperor drowns fleeing Mongols.',
          aftermath: 'Mongol Yuan dynasty rules all China'
        }
      ],
      
      achievements: [
        'Moveable type printing',
        'Gunpowder weapons',
        'Magnetic compass navigation',
        'Paper money',
        'Advanced steel production',
        'Rice cultivation revolution',
        'Neo-Confucianism',
        'Landscape painting',
        'Porcelain (peak quality)',
        'World\'s most advanced economy'
      ],
      
      keyFigures: [
        { name: 'Emperor Taizu', role: 'Founder', years: [927, 976] },
        { name: 'Bi Sheng', role: 'Printing Inventor', years: [990, 1051] },
        { name: 'Shen Kuo', role: 'Scientist', years: [1031, 1095] },
        { name: 'Zhu Xi', role: 'Neo-Confucian Philosopher', years: [1130, 1200] },
        { name: 'Su Shi (Su Dongpo)', role: 'Poet/Calligrapher', years: [1037, 1101] }
      ],
      
      influence: {
        influenced: ['ming-dynasty', 'korea', 'japan', 'world-technology'],
        influencedBy: ['tang-dynasty', 'buddhism', 'confucianism']
      }
    },
    
    {
      id: 'ming-dynasty',
      name: 'Ming Dynasty',
      timespan: { start: 1368, end: 1644 },
      center: { lat: 32.0, lng: 118.8 }, // Nanjing, later Beijing
      
      timeline: [
        {
          year: 1368,
          event: 'Ming Dynasty Founded',
          type: 'political',
          importance: 10,
          ruler: 'Zhu Yuanzhang (Hongwu Emperor)',
          mapState: {
            capital: { name: 'Nanjing', lat: 32.0603, lng: 118.7969 }
          },
          details: 'Peasant rebel expels Mongols, restores Chinese rule.',
          significance: 'Native Chinese dynasty after Mongol rule'
        },
        {
          year: 1380,
          event: 'Abolition of Prime Minister',
          type: 'political',
          importance: 7,
          details: 'Hongwu eliminates position, concentrates power.',
          consequence: 'Autocratic government pattern'
        },
        {
          year: 1403,
          event: 'Yongle Emperor Takes Power',
          type: 'political',
          importance: 9,
          ruler: 'Yongle Emperor (Zhu Di)',
          details: 'Usurps throne from nephew, becomes great builder.',
          projects: ['Forbidden City', 'Treasure voyages', 'Encyclopedia']
        },
        {
          year: 1405,
          event: 'Zheng He\'s First Voyage',
          type: 'major',
          importance: 10,
          admiral: 'Zheng He',
          details: 'Massive treasure fleet sets sail for Southeast Asia.',
          fleet: [
            '317 ships (largest wooden ships ever built)',
            '27,000+ crew',
            'Largest ship: 135m long (4x Columbus\'s)'
          ],
          purpose: 'Display Ming power, tribute trade'
        },
        {
          year: 1406,
          event: 'Forbidden City Construction Begins',
          type: 'cultural',
          importance: 10,
          location: { lat: 39.9163, lng: 116.3972 },
          details: 'World\'s largest palace complex built.',
          workers: '1 million workers over 14 years',
          buildings: '980 buildings, 8,707 rooms',
          area: '72 hectares'
        },
        {
          year: 1407,
          event: 'Yongle Encyclopedia Completed',
          type: 'cultural',
          importance: 8,
          details: 'Largest encyclopedia in world compiled.',
          volumes: '11,095 volumes, 370 million characters',
          note: 'Mostly lost; only 400 volumes survive'
        },
        {
          year: 1420,
          event: 'Capital Moves to Beijing',
          type: 'political',
          importance: 9,
          details: 'Beijing becomes capital, Forbidden City complete.',
          mapState: {
            capital: { name: 'Beijing', lat: 39.9042, lng: 116.4074 }
          }
        },
        {
          year: 1421,
          event: 'Zheng He Reaches Africa',
          type: 'major',
          importance: 9,
          location: { lat: -4.0, lng: 39.7 }, // East African coast
          details: 'Chinese fleet reaches East Africa (Mogadishu, Kenya).',
          brought: 'Giraffe (identified as qilin/unicorn)',
          significance: 'Chinese could have colonized - chose not to'
        },
        {
          year: 1433,
          event: 'End of Treasure Voyages',
          type: 'political',
          importance: 9,
          details: 'Zheng He\'s voyages cancelled, records destroyed.',
          cause: 'Cost, Confucian opposition to merchant influence',
          consequence: 'China turns inward',
          significance: 'What-if moment in history'
        },
        {
          year: 1449,
          event: 'Tumu Crisis - Emperor Captured',
          type: 'catastrophic',
          importance: 8,
          details: 'Mongols capture Emperor Zhengtong in battle.',
          aftermath: 'Defensive mindset adopted'
        },
        {
          year: 1514,
          event: 'Portuguese Reach China',
          type: 'major',
          importance: 8,
          location: { lat: 22.5, lng: 114.1 }, // Guangdong coast
          details: 'First European ships reach China.',
          trade: 'Beginning of direct East-West trade'
        },
        {
          year: 1557,
          event: 'Macau Ceded to Portuguese',
          type: 'political',
          importance: 7,
          details: 'Portugal establishes permanent base in China.',
          significance: 'First European colony in China'
        },
        {
          year: 1582,
          event: 'Matteo Ricci Arrives',
          type: 'cultural',
          importance: 7,
          visitor: 'Matteo Ricci (Jesuit)',
          details: 'Begins cultural exchange between Europe and China.',
          contributions: 'Map of world, clocks, mathematics'
        },
        {
          year: 1600,
          event: 'Ming Decline Begins',
          type: 'political',
          importance: 7,
          details: 'Corruption, factionalism, fiscal crisis.',
          problems: ['Silver shortage', 'Little Ice Age', 'Court paralysis']
        },
        {
          year: 1616,
          event: 'Manchu State Founded',
          type: 'political',
          importance: 8,
          ruler: 'Nurhaci',
          details: 'Manchus unite, pose threat from north.',
          future: 'Will become Qing dynasty'
        },
        {
          year: 1644,
          event: 'Fall of Ming Dynasty',
          type: 'catastrophic',
          importance: 10,
          details: 'Rebel Li Zicheng takes Beijing, emperor hangs himself.',
          location: { lat: 39.92, lng: 116.38 }, // Jingshan Park
          aftermath: 'Manchus invited in to suppress rebels, seize power'
        }
      ],
      
      achievements: [
        'Forbidden City',
        'Zheng He\'s voyages',
        'Great Wall (most of current wall)',
        'Yongle Encyclopedia',
        'Blue and white porcelain',
        'Novel tradition (Water Margin, Journey to West)',
        'Ming furniture',
        'Maritime maps'
      ],
      
      keyFigures: [
        { name: 'Hongwu Emperor', role: 'Founder', years: [1328, 1398] },
        { name: 'Yongle Emperor', role: 'Great Builder', years: [1360, 1424] },
        { name: 'Zheng He', role: 'Admiral/Explorer', years: [1371, 1433] },
        { name: 'Wang Yangming', role: 'Philosopher', years: [1472, 1529] },
        { name: 'Matteo Ricci', role: 'Jesuit Missionary', years: [1552, 1610] }
      ],
      
      influence: {
        influenced: ['qing-dynasty', 'korea', 'japan', 'southeast-asia'],
        influencedBy: ['song-dynasty', 'yuan-dynasty']
      }
    },
    
    {
      id: 'japan-classical',
      name: 'Classical Japan',
      timespan: { start: -300, end: 1868 },
      center: { lat: 35.0, lng: 136.0 }, // Kyoto/central Japan
      
      timeline: [
        {
          year: -300,
          event: 'Yayoi Period - Rice Agriculture',
          type: 'cultural',
          importance: 7,
          details: 'Rice cultivation, bronze and iron from Korea.',
          origin: 'Korean/Chinese migrants'
        },
        {
          year: 250,
          event: 'Kofun Period - First Unified State',
          type: 'political',
          importance: 7,
          details: 'Yamato clan emerges as rulers.',
          monuments: 'Giant burial mounds (kofun)'
        },
        {
          year: 552,
          event: 'Buddhism Arrives in Japan',
          type: 'cultural',
          importance: 9,
          details: 'Korean kingdom sends Buddhist statue and texts.',
          significance: 'Transforms Japanese culture'
        },
        {
          year: 593,
          event: 'Prince Shotoku\'s Reforms',
          type: 'political',
          importance: 8,
          ruler: 'Prince Shotoku',
          details: 'Constitution, Chinese government model adopted.',
          article: 'Harmony is to be valued'
        },
        {
          year: 645,
          event: 'Taika Reforms',
          type: 'political',
          importance: 8,
          details: 'Chinese-style centralized government established.',
          reforms: 'Land distribution, tax system, bureaucracy'
        },
        {
          year: 710,
          event: 'Nara Period',
          type: 'political',
          importance: 7,
          mapState: {
            capital: { name: 'Nara', lat: 34.6851, lng: 135.8048 }
          },
          details: 'First permanent capital, modeled on Chang\'an.'
        },
        {
          year: 794,
          event: 'Heian Period Begins',
          type: 'political',
          importance: 9,
          mapState: {
            capital: { name: 'Heian-kyo (Kyoto)', lat: 35.0116, lng: 135.7681 }
          },
          details: 'Golden age of Japanese court culture.',
          duration: '400 years of refined culture'
        },
        {
          year: 1000,
          event: 'Tale of Genji Written',
          type: 'cultural',
          importance: 9,
          author: 'Murasaki Shikibu',
          details: 'World\'s first novel written by court lady.',
          significance: 'Masterpiece of world literature'
        },
        {
          year: 1180,
          event: 'Genpei War',
          type: 'military',
          importance: 8,
          combatants: 'Minamoto vs Taira clans',
          details: 'Civil war ends court dominance.'
        },
        {
          year: 1185,
          event: 'Kamakura Shogunate Founded',
          type: 'political',
          importance: 9,
          ruler: 'Minamoto no Yoritomo',
          details: 'First military government (bakufu).',
          title: 'Shogun - military dictator',
          significance: 'Emperor becomes figurehead'
        },
        {
          year: 1274,
          event: 'First Mongol Invasion',
          type: 'military',
          importance: 9,
          invader: 'Kublai Khan',
          details: '900 ships, 40,000 troops attack Japan.',
          outcome: 'Typhoon destroys fleet'
        },
        {
          year: 1281,
          event: 'Second Mongol Invasion',
          type: 'military',
          importance: 9,
          details: '4,400 ships, 140,000 troops - largest naval invasion until D-Day.',
          outcome: 'Typhoon destroys fleet again',
          significance: '"Kamikaze" (divine wind) legend born'
        },
        {
          year: 1467,
          event: 'Onin War - Warring States Begin',
          type: 'catastrophic',
          importance: 8,
          details: '150 years of civil war (Sengoku period).',
          destruction: 'Kyoto burned, central authority collapses'
        },
        {
          year: 1543,
          event: 'Portuguese Introduce Firearms',
          type: 'major',
          importance: 9,
          location: { lat: 30.4, lng: 130.9 }, // Tanegashima
          details: 'First guns reach Japan.',
          impact: 'Transforms warfare, enables unification'
        },
        {
          year: 1549,
          event: 'Christianity Arrives',
          type: 'cultural',
          importance: 7,
          missionary: 'Francis Xavier',
          details: 'Jesuit missions begin.',
          converts: '300,000 by 1600'
        },
        {
          year: 1568,
          event: 'Oda Nobunaga Begins Unification',
          type: 'political',
          importance: 9,
          ruler: 'Oda Nobunaga',
          details: 'First of three unifiers enters Kyoto.',
          tactics: 'Mass gunfire, ruthless campaigns'
        },
        {
          year: 1582,
          event: 'Honnoji Incident - Nobunaga Assassinated',
          type: 'political',
          importance: 8,
          details: 'Nobunaga killed by general Akechi Mitsuhide.',
          aftermath: 'Toyotomi Hideyoshi seizes power'
        },
        {
          year: 1590,
          event: 'Japan Unified',
          type: 'major',
          importance: 9,
          ruler: 'Toyotomi Hideyoshi',
          details: 'All Japan under single rule for first time.',
          achievements: ['Land surveys', 'Sword hunt', 'Class system']
        },
        {
          year: 1592,
          event: 'Invasion of Korea',
          type: 'military',
          importance: 8,
          details: 'Hideyoshi invades Korea, repelled by Ming China.',
          troops: '158,000 samurai',
          outcome: 'Failure, but acquired Korean craftsmen'
        },
        {
          year: 1600,
          event: 'Battle of Sekigahara',
          type: 'military',
          importance: 10,
          location: { lat: 35.4, lng: 136.5 },
          victor: 'Tokugawa Ieyasu',
          details: 'Decisive battle establishes Tokugawa dominance.',
          forces: '170,000 samurai total'
        },
        {
          year: 1603,
          event: 'Tokugawa Shogunate Founded',
          type: 'political',
          importance: 10,
          ruler: 'Tokugawa Ieyasu',
          mapState: {
            capital: { name: 'Edo (Tokyo)', lat: 35.6762, lng: 139.6503 }
          },
          details: 'Third shogunate, rules 265 years.',
          era: 'Edo Period - long peace'
        },
        {
          year: 1635,
          event: 'Sakoku - Isolation Policy',
          type: 'political',
          importance: 9,
          details: 'Japan closes to outside world.',
          allowed: 'Only Dutch and Chinese at Nagasaki',
          duration: 'Until 1853'
        },
        {
          year: 1637,
          event: 'Shimabara Rebellion',
          type: 'military',
          importance: 7,
          details: 'Christian peasant rebellion crushed.',
          aftermath: 'Christianity banned, persecuted'
        },
        {
          year: 1700,
          event: 'Genroku Period - Cultural Flourishing',
          type: 'cultural',
          importance: 8,
          details: 'Golden age of urban culture.',
          arts: ['Kabuki theater', 'Ukiyo-e prints', 'Haiku poetry'],
          artists: ['Basho', 'Chikamatsu', 'Hiroshige']
        },
        {
          year: 1853,
          event: 'Perry Opens Japan',
          type: 'major',
          importance: 10,
          visitor: 'Commodore Matthew Perry',
          details: 'US "Black Ships" force Japan to open.',
          consequence: 'End of isolation'
        },
        {
          year: 1868,
          event: 'Meiji Restoration',
          type: 'political',
          importance: 10,
          details: 'Shogunate falls, Emperor restored to power.',
          significance: 'Japan modernizes rapidly',
          aftermath: 'Transforms into industrial power in decades'
        }
      ],
      
      achievements: [
        'Tale of Genji (first novel)',
        'Zen Buddhism',
        'Samurai culture/Bushido',
        'Tea ceremony',
        'Kabuki and Noh theater',
        'Ukiyo-e woodblock prints',
        'Haiku poetry',
        'Japanese architecture',
        'Martial arts (kendo, judo)',
        'Gardens and landscaping'
      ],
      
      keyFigures: [
        { name: 'Prince Shotoku', role: 'Reformer', years: [574, 622] },
        { name: 'Murasaki Shikibu', role: 'Novelist', years: [978, 1014] },
        { name: 'Minamoto Yoritomo', role: 'First Shogun', years: [1147, 1199] },
        { name: 'Oda Nobunaga', role: 'Unifier', years: [1534, 1582] },
        { name: 'Toyotomi Hideyoshi', role: 'Unifier', years: [1537, 1598] },
        { name: 'Tokugawa Ieyasu', role: 'Shogun', years: [1543, 1616] },
        { name: 'Matsuo Basho', role: 'Haiku Poet', years: [1644, 1694] }
      ],
      
      influence: {
        influenced: ['zen-buddhism', 'martial-arts', 'art'],
        influencedBy: ['china', 'korea', 'buddhism'],
        tradeRoutes: ['korea-strait', 'ryukyu-trade']
      }
    },
    
    {
      id: 'korea-joseon',
      name: 'Korean Kingdoms',
      timespan: { start: -57, end: 1910 },
      center: { lat: 37.6, lng: 127.0 }, // Seoul area
      
      timeline: [
        {
          year: -57,
          event: 'Three Kingdoms Period Begins',
          type: 'political',
          importance: 8,
          kingdoms: ['Goguryeo', 'Baekje', 'Silla'],
          details: 'Three kingdoms emerge on Korean peninsula.'
        },
        {
          year: 372,
          event: 'Buddhism Arrives',
          type: 'cultural',
          importance: 8,
          details: 'Buddhism introduced from China.',
          significance: 'Shapes Korean culture'
        },
        {
          year: 668,
          event: 'Silla Unifies Korea',
          type: 'political',
          importance: 9,
          details: 'Silla conquers rivals with Tang help.',
          mapState: {
            capital: { name: 'Gyeongju', lat: 35.85, lng: 129.21 }
          }
        },
        {
          year: 918,
          event: 'Goryeo Dynasty Founded',
          type: 'political',
          importance: 8,
          ruler: 'Wang Geon',
          details: 'Korea derives from "Goryeo".',
          mapState: {
            capital: { name: 'Kaesong', lat: 37.97, lng: 126.57 }
          }
        },
        {
          year: 1234,
          event: 'World\'s First Metal Moveable Type',
          type: 'cultural',
          importance: 9,
          details: 'Korean invention, before Gutenberg.',
          work: 'Jikji - oldest extant metal-printed book (1377)'
        },
        {
          year: 1392,
          event: 'Joseon Dynasty Founded',
          type: 'political',
          importance: 9,
          ruler: 'Yi Seong-gye (Taejo)',
          mapState: {
            capital: { name: 'Hanyang (Seoul)', lat: 37.5665, lng: 126.978 }
          },
          details: 'Korea\'s longest dynasty (500+ years).'
        },
        {
          year: 1443,
          event: 'Hangul Alphabet Created',
          type: 'cultural',
          importance: 10,
          ruler: 'King Sejong the Great',
          details: 'Scientific alphabet for Korean language.',
          design: '24 letters based on phonetic principles',
          significance: 'Most logical alphabet in world'
        },
        {
          year: 1592,
          event: 'Japanese Invasion (Imjin War)',
          type: 'military',
          importance: 9,
          invader: 'Toyotomi Hideyoshi',
          details: 'Devastating invasion repelled.',
          hero: 'Admiral Yi Sun-sin (turtle ships)'
        },
        {
          year: 1636,
          event: 'Manchu Invasion',
          type: 'military',
          importance: 7,
          details: 'Korea forced to submit to Qing China.',
          status: 'Tributary state'
        },
        {
          year: 1876,
          event: 'Opening of Korea',
          type: 'political',
          importance: 8,
          details: 'Japan forces unequal treaty, isolation ends.'
        },
        {
          year: 1910,
          event: 'Japanese Annexation',
          type: 'catastrophic',
          importance: 9,
          details: 'Korea becomes Japanese colony.',
          duration: 'Until 1945'
        }
      ],
      
      achievements: [
        'Metal moveable type printing',
        'Hangul alphabet',
        'Celadon pottery',
        'Turtle ships (armored warships)',
        'Confucian scholarship',
        'Buddhist art',
        'Traditional medicine',
        'Ondol (underfloor heating)'
      ],
      
      keyFigures: [
        { name: 'King Sejong', role: 'Greatest King', years: [1397, 1450] },
        { name: 'Admiral Yi Sun-sin', role: 'Naval Hero', years: [1545, 1598] }
      ],
      
      influence: {
        influenced: ['printing-technology'],
        influencedBy: ['china', 'buddhism', 'confucianism']
      }
    }
  ]
};

// Register
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(EAST_ASIA_CIVILIZATIONS);
}
