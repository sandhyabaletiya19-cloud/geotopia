/**
 * WORLD WARS ERA (1914-1945)
 * Two global conflicts that reshaped the world
 */

const WORLD_WARS_ERA = {
  era: 'World Wars',
  timeRange: { start: 1914, end: 1945 },
  color: '#8B0000',
  
  conflicts: [
    {
      id: 'ww1',
      name: 'World War I',
      timespan: { start: 1914, end: 1918 },
      
      timeline: [
        {
          year: 1914,
          month: 6,
          day: 28,
          event: 'Assassination of Archduke Franz Ferdinand',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 43.8563, lng: 18.4131 },
          mapState: {
            trigger: 'world-war-1'
          },
          details: 'Gavrilo Princip assassinates Archduke, triggering WWI.',
          figures: ['Franz Ferdinand', 'Gavrilo Princip'],
          cascadeEvents: [
            { date: '1914-07-28', event: 'Austria-Hungary declares war on Serbia' },
            { date: '1914-08-01', event: 'Germany declares war on Russia' },
            { date: '1914-08-03', event: 'Germany declares war on France' },
            { date: '1914-08-04', event: 'Britain declares war on Germany' }
          ]
        },
        {
          year: 1914,
          month: 9,
          event: 'First Battle of the Marne',
          type: 'military',
          importance: 9,
          coordinates: { lat: 49.0, lng: 3.5 },
          mapState: {
            frontLine: 'western-front-stabilizes'
          },
          details: 'Allies halt German advance, war becomes stalemate.',
          casualties: 500000,
          outcome: 'Allied tactical victory'
        },
        {
          year: 1915,
          month: 4,
          event: 'Armenian Genocide Begins',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 39.9334, lng: 32.8597 },
          mapState: {
            genocide: 'armenian'
          },
          details: 'Ottoman Empire systematically murders 1.5 million Armenians.',
          casualties: 1500000,
          figures: ['Talaat Pasha']
        },
        {
          year: 1915,
          month: 5,
          event: 'Lusitania Sunk',
          type: 'military',
          importance: 8,
          coordinates: { lat: 51.4250, lng: -8.5500 },
          details: 'German U-boat sinks British liner, killing 1,198 including 128 Americans.',
          casualties: 1198,
          impact: 'Turns American opinion against Germany'
        },
        {
          year: 1916,
          month: 2,
          event: 'Battle of Verdun Begins',
          type: 'military',
          importance: 9,
          coordinates: { lat: 49.1600, lng: 5.3878 },
          mapState: {
            battle: 'verdun'
          },
          details: 'Longest battle of WWI, 10 months of horror.',
          duration: 303,
          casualties: 700000,
          outcome: 'French strategic victory at enormous cost'
        },
        {
          year: 1916,
          month: 7,
          event: 'Battle of the Somme',
          type: 'military',
          importance: 9,
          coordinates: { lat: 50.0167, lng: 2.6972 },
          mapState: {
            battle: 'somme'
          },
          details: '58,000 British casualties on first day alone.',
          casualties: 1000000,
          tacticalAdvance: '10 km',
          outcome: 'Indecisive'
        },
        {
          year: 1917,
          month: 4,
          event: 'USA Enters War',
          type: 'political',
          importance: 10,
          coordinates: { lat: 38.8951, lng: -77.0364 },
          mapState: {
            alliance: 'usa-joins-allies'
          },
          details: 'American entry tips balance decisively toward Allies.',
          figures: ['Woodrow Wilson']
        },
        {
          year: 1917,
          month: 11,
          event: 'Russian Revolution',
          type: 'political',
          importance: 10,
          coordinates: { lat: 59.9311, lng: 30.3609 },
          mapState: {
            regime: 'communist',
            withdrawal: 'russia-exits-war'
          },
          details: 'Bolsheviks overthrow Provisional Government, Russia exits war.',
          figures: ['Vladimir Lenin', 'Leon Trotsky'],
          globalImpact: 'Birth of first communist state'
        },
        {
          year: 1918,
          month: 11,
          day: 11,
          event: 'Armistice Signed',
          type: 'political',
          importance: 10,
          coordinates: { lat: 49.4296, lng: 2.8285 },
          mapState: {
            warEnd: true,
            newBorders: 'versailles'
          },
          details: 'WWI ends at 11:00 on 11/11/1918.',
          totalCasualties: 40000000,
          empiresFallen: ['ottoman', 'austro-hungarian', 'german', 'russian']
        },
        {
          year: 1919,
          month: 6,
          event: 'Treaty of Versailles',
          type: 'political',
          importance: 10,
          coordinates: { lat: 48.8049, lng: 2.1204 },
          mapState: {
            newBorders: {
              created: ['poland', 'czechoslovakia', 'yugoslavia'],
              modified: ['germany', 'turkey', 'austria', 'hungary']
            },
            reparations: 'germany-pays'
          },
          details: 'Harsh terms imposed on Germany, setting stage for WWII.',
          figures: ['Woodrow Wilson', 'Georges Clemenceau', 'David Lloyd George'],
          terms: {
            territorial: 'Germany loses 13% of territory',
            military: 'Army limited to 100,000',
            financial: '132 billion gold marks in reparations',
            blame: 'War guilt clause'
          }
        }
      ],
      
      alliances: {
        allies: {
          members: ['france', 'britain', 'russia', 'italy', 'usa', 'japan', 'serbia'],
          color: '#4169E1'
        },
        centralPowers: {
          members: ['germany', 'austro-hungary', 'ottoman-empire', 'bulgaria'],
          color: '#8B0000'
        }
      },
      
      casualties: {
        military: 10000000,
        civilian: 10000000,
        total: 20000000,
        byCountry: {
          russia: 3300000,
          germany: 2050000,
          france: 1697000,
          'austro-hungary': 1567000,
          'britain-empire': 1115000,
          italy: 651000,
          'ottoman-empire': 771000,
          usa: 117000
        }
      },
      
      newTechnologies: [
        'tanks', 'poison gas', 'aircraft', 'submarines', 'machine guns', 'zeppelins'
      ],
      
      aftermath: {
        political: ['Collapse of 4 empires', 'Creation of League of Nations', 'Rise of communism'],
        territorial: ['New nation-states in Europe', 'Ottoman Empire partitioned', 'Colonial mandates'],
        social: ['Lost Generation', 'Women\'s suffrage advances', 'Spanish Flu pandemic'],
        economic: ['European economies devastated', 'USA becomes creditor nation', 'Hyperinflation in Germany']
      }
    },
    
    {
      id: 'interwar',
      name: 'Interwar Period',
      timespan: { start: 1918, end: 1939 },
      
      timeline: [
        {
          year: 1920,
          event: 'League of Nations Founded',
          type: 'political',
          importance: 8,
          coordinates: { lat: 46.2044, lng: 6.1432 },
          details: 'First international organization for peace.',
          weakness: 'USA never joins, lacks enforcement power'
        },
        {
          year: 1922,
          event: 'Mussolini Takes Power in Italy',
          type: 'political',
          importance: 8,
          coordinates: { lat: 41.9028, lng: 12.4964 },
          mapState: {
            regime: 'fascist'
          },
          details: 'March on Rome brings first fascist to power.',
          figures: ['Benito Mussolini']
        },
        {
          year: 1929,
          event: 'Wall Street Crash',
          type: 'economic',
          importance: 10,
          coordinates: { lat: 40.7061, lng: -74.0087 },
          mapState: {
            depression: 'global'
          },
          details: 'Stock market collapse triggers Great Depression.',
          globalImpact: 'Worldwide economic crisis, 25% unemployment',
          figures: ['Herbert Hoover']
        },
        {
          year: 1933,
          event: 'Hitler Becomes Chancellor',
          type: 'political',
          importance: 10,
          coordinates: { lat: 52.5200, lng: 13.4050 },
          mapState: {
            regime: 'nazi'
          },
          details: 'Adolf Hitler appointed Chancellor of Germany.',
          figures: ['Adolf Hitler', 'Paul von Hindenburg'],
          consequences: 'Path to WWII and Holocaust'
        },
        {
          year: 1935,
          event: 'Italy Invades Ethiopia',
          type: 'military',
          importance: 7,
          coordinates: { lat: 9.1450, lng: 40.4897 },
          mapState: {
            invasion: 'ethiopia'
          },
          details: 'Fascist Italy conquers one of last independent African nations.',
          casualties: 275000,
          outcome: 'Italian victory, League of Nations fails to act effectively'
        },
        {
          year: 1936,
          event: 'Spanish Civil War Begins',
          type: 'military',
          importance: 8,
          coordinates: { lat: 40.4168, lng: -3.7038 },
          mapState: {
            civilWar: 'spain'
          },
          details: 'Dress rehearsal for WWII, fascists vs. republicans.',
          duration: 3,
          casualties: 500000,
          figures: ['Francisco Franco', 'Manuel Azaña'],
          internationalInvolvement: {
            nationalists: ['germany', 'italy'],
            republicans: ['soviet-union', 'international-brigades']
          }
        },
        {
          year: 1937,
          event: 'Japan Invades China',
          type: 'military',
          importance: 9,
          coordinates: { lat: 39.9042, lng: 116.4074 },
          mapState: {
            invasion: 'china',
            'second-sino-japanese-war': true
          },
          details: 'Full-scale Japanese invasion of China.',
          atrocity: {
            name: 'Rape of Nanking',
            year: 1937,
            casualties: 300000
          }
        },
        {
          year: 1938,
          event: 'Munich Agreement',
          type: 'political',
          importance: 8,
          coordinates: { lat: 48.1351, lng: 11.5820 },
          mapState: {
            appeasement: 'czechoslovakia-partition'
          },
          details: 'Britain and France appease Hitler, ceding Sudetenland.',
          figures: ['Neville Chamberlain', 'Adolf Hitler', 'Édouard Daladier'],
          quote: '"Peace for our time" - Chamberlain',
          consequence: 'Emboldens Hitler'
        },
        {
          year: 1939,
          month: 8,
          event: 'Molotov-Ribbentrop Pact',
          type: 'political',
          importance: 9,
          coordinates: { lat: 55.7558, lng: 37.6173 },
          mapState: {
            alliance: 'nazi-soviet-nonaggression',
            secretProtocol: 'poland-partition'
          },
          details: 'Nazi Germany and Soviet Union agree to divide Poland.',
          figures: ['Vyacheslav Molotov', 'Joachim von Ribbentrop'],
          consequence: 'Clears way for invasion of Poland'
        }
      ]
    },
    
    {
      id: 'ww2',
      name: 'World War II',
      timespan: { start: 1939, end: 1945 },
      
      timeline: [
        {
          year: 1939,
          month: 9,
          day: 1,
          event: 'Germany Invades Poland',
          type: 'military',
          importance: 10,
          coordinates: { lat: 52.2297, lng: 21.0122 },
          mapState: {
            invasion: 'poland',
            warBegins: true
          },
          details: 'Blitzkrieg begins WWII.',
          figures: ['Adolf Hitler'],
          casualties: 200000,
          cascadeEvents: [
            { date: '1939-09-03', event: 'Britain and France declare war on Germany' },
            { date: '1939-09-17', event: 'Soviet Union invades Poland from east' }
          ]
        },
        {
          year: 1940,
          month: 5,
          event: 'Fall of France',
          type: 'military',
          importance: 10,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          mapState: {
            occupation: 'france',
            vichyRegime: true
          },
          details: 'France falls in 6 weeks to German Blitzkrieg.',
          casualties: 360000,
          figures: ['Philippe Pétain', 'Charles de Gaulle']
        },
        {
          year: 1940,
          month: 7,
          event: 'Battle of Britain',
          type: 'military',
          importance: 9,
          coordinates: { lat: 51.5074, lng: -0.1278 },
          mapState: {
            airBattle: true
          },
          details: 'RAF defeats Luftwaffe, preventing German invasion.',
          duration: 4,
          casualties: 3500,
          figures: ['Winston Churchill', 'Hermann Göring'],
          outcome: 'British victory',
          quote: '"Never was so much owed by so many to so few" - Churchill'
        },
        {
          year: 1941,
          month: 6,
          event: 'Operation Barbarossa',
          type: 'military',
          importance: 10,
          coordinates: { lat: 55.7558, lng: 37.6173 },
          mapState: {
            invasion: 'soviet-union',
            easternFront: true
          },
          details: 'Largest military operation in history, Germany invades USSR.',
          troops: 3800000,
          casualties: 27000000,
          figures: ['Adolf Hitler', 'Joseph Stalin'],
          outcome: 'Eventual Soviet victory, turning point of war'
        },
        {
          year: 1941,
          month: 12,
          day: 7,
          event: 'Pearl Harbor Attack',
          type: 'military',
          importance: 10,
          coordinates: { lat: 21.3645, lng: -157.9501 },
          mapState: {
            attack: 'pearl-harbor',
            usaEnters: true
          },
          details: 'Japan\'s surprise attack brings USA into WWII.',
          casualties: 2403,
          figures: ['Franklin D. Roosevelt', 'Isoroku Yamamoto'],
          quote: '"A date which will live in infamy" - FDR'
        },
        {
          year: 1942,
          month: 6,
          event: 'Battle of Midway',
          type: 'military',
          importance: 9,
          coordinates: { lat: 28.2072, lng: -177.3735 },
          mapState: {
            navalBattle: true,
            pacificTurningPoint: true
          },
          details: 'Decisive US naval victory ends Japanese expansion.',
          outcome: 'USA sinks 4 Japanese carriers',
          figures: ['Chester Nimitz']
        },
        {
          year: 1942,
          month: 8,
          event: 'Battle of Stalingrad Begins',
          type: 'military',
          importance: 10,
          coordinates: { lat: 48.7080, lng: 44.5133 },
          mapState: {
            urbanBattle: true,
            stalingrad: true
          },
          details: 'Bloodiest battle in history.',
          duration: 5,
          casualties: 2000000,
          outcome: 'Soviet victory, major turning point',
          figures: ['Georgy Zhukov', 'Friedrich Paulus']
        },
        {
          year: 1944,
          month: 6,
          day: 6,
          event: 'D-Day Landings',
          type: 'military',
          importance: 10,
          coordinates: { lat: 49.3470, lng: -0.4831 },
          mapState: {
            invasion: 'normandy',
            westernFront: 'reopens'
          },
          details: 'Largest amphibious invasion in history.',
          troops: 156000,
          casualties: 10000,
          figures: ['Dwight D. Eisenhower', 'Bernard Montgomery'],
          outcome: 'Allies establish foothold in Western Europe'
        },
        {
          year: 1945,
          month: 4,
          event: 'Fall of Berlin',
          type: 'military',
          importance: 10,
          coordinates: { lat: 52.5200, lng: 13.4050 },
          mapState: {
            sovietCapture: 'berlin',
            naziFall: true
          },
          details: 'Soviet forces capture Berlin, Hitler commits suicide.',
          casualties: 1300000,
          figures: ['Georgy Zhukov', 'Adolf Hitler']
        },
        {
          year: 1945,
          month: 5,
          day: 8,
          event: 'VE Day',
          type: 'political',
          importance: 10,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          mapState: {
            europeLiberated: true,
            warEndEurope: true
          },
          details: 'Germany surrenders, war in Europe ends.',
          figures: ['Karl Dönitz']
        },
        {
          year: 1945,
          month: 8,
          day: 6,
          event: 'Hiroshima Atomic Bomb',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 34.3853, lng: 132.4553 },
          mapState: {
            atomicBombing: 'hiroshima'
          },
          details: 'First atomic weapon used in war.',
          casualties: 140000,
          figures: ['Harry S. Truman', 'Paul Tibbets'],
          bombName: 'Little Boy'
        },
        {
          year: 1945,
          month: 8,
          day: 9,
          event: 'Nagasaki Atomic Bomb',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 32.7503, lng: 129.8779 },
          mapState: {
            atomicBombing: 'nagasaki'
          },
          details: 'Second atomic bomb dropped.',
          casualties: 74000,
          bombName: 'Fat Man'
        },
        {
          year: 1945,
          month: 8,
          day: 15,
          event: 'VJ Day',
          type: 'political',
          importance: 10,
          coordinates: { lat: 35.6762, lng: 139.6503 },
          mapState: {
            japanSurrenders: true,
            ww2Ends: true
          },
          details: 'Japan surrenders, WWII ends.',
          figures: ['Hirohito', 'Douglas MacArthur']
        }
      ],
      
      alliances: {
        allies: {
          members: ['usa', 'britain', 'soviet-union', 'china', 'france', 'canada', 'australia'],
          color: '#4169E1'
        },
        axis: {
          members: ['germany', 'japan', 'italy', 'hungary', 'romania', 'bulgaria'],
          color: '#8B0000'
        }
      },
      
      holocaust: {
        name: 'The Holocaust',
        timespan: { start: 1941, end: 1945 },
        victims: 6000000,
        details: 'Systematic genocide of European Jews by Nazi Germany.',
        camps: [
          { name: 'Auschwitz-Birkenau', lat: 50.0262, lng: 19.2045, deaths: 1100000 },
          { name: 'Treblinka', lat: 52.6312, lng: 22.0431, deaths: 900000 },
          { name: 'Belzec', lat: 50.3719, lng: 23.4572, deaths: 600000 },
          { name: 'Sobibor', lat: 51.4464, lng: 23.5953, deaths: 250000 },
          { name: 'Chelmno', lat: 52.1539, lng: 18.7111, deaths: 320000 },
          { name: 'Majdanek', lat: 51.2221, lng: 22.6006, deaths: 78000 }
        ],
        otherVictims: {
          'Roma': 500000,
          'Disabled': 250000,
          'Poles': 1900000,
          'Soviet POWs': 3000000,
          'Homosexuals': 15000,
          'Political prisoners': 1000000
        }
      },
      
      casualties: {
        military: 25000000,
        civilian: 50000000,
        total: 75000000,
        byCountry: {
          'soviet-union': 27000000,
          china: 20000000,
          germany: 7000000,
          poland: 6000000,
          japan: 3100000,
          india: 3000000,
          'yugoslavia': 1000000,
          'france': 600000,
          'britain': 450000,
          'usa': 420000,
          'italy': 500000
        }
      },
      
      theaters: {
        europe: {
          campaigns: ['Poland', 'France', 'Britain', 'Eastern Front', 'Italy', 'Normandy', 'Germany']
        },
        pacific: {
          campaigns: ['Pearl Harbor', 'Philippines', 'Midway', 'Guadalcanal', 'Iwo Jima', 'Okinawa', 'Japan']
        },
        africa: {
          campaigns: ['North Africa', 'East Africa']
        },
        asia: {
          campaigns: ['China', 'Burma', 'Southeast Asia']
        }
      },
      
      technologies: [
        'Atomic bomb',
        'Jet aircraft',
        'Radar',
        'Penicillin',
        'Computers (Colossus, ENIAC)',
        'Rockets (V-2)',
        'Aircraft carriers',
        'Submarines'
      ],
      
      aftermath: {
        political: [
          'United Nations founded',
          'Cold War begins',
          'Decolonization accelerates',
          'Germany divided',
          'Israel created',
          'Europe rebuilt (Marshall Plan)'
        ],
        territorial: [
          'Soviet Union expands westward',
          'Germany loses eastern territories',
          'Japan loses empire',
          'Colonial empires begin collapse'
        ],
        social: [
          'Nuclear age begins',
          'Human rights movement',
          'Women in workforce',
          'Nuremberg Trials',
          'Geneva Conventions updated'
        ],
        economic: [
          'USA becomes superpower',
          'Europe devastated',
          'Bretton Woods system',
          'World Bank and IMF created'
        ]
      }
    }
  ],
  
  globalImpacts: {
    deathToll: 95000000,
    refugeesDisplaced: 60000000,
    citiesDestroyed: 1500,
    economicCost: '4 trillion USD (1945 dollars)',
    empiresFallen: ['nazi-germany', 'imperial-japan', 'fascist-italy'],
    newWorldOrder: 'Bipolar USA-USSR rivalry',
    weaponsOfMassDestruction: 'Nuclear age begins',
    internationalLaw: 'UN, Geneva Conventions, Human Rights'
  }
};

// Register with master data engine
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(WORLD_WARS_ERA);
}
