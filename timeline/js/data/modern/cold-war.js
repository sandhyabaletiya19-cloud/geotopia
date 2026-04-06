/**
 * COLD WAR ERA (1945-1991)
 * Global ideological struggle between capitalism and communism
 */

const COLD_WAR_ERA = {
  era: 'Cold War',
  timeRange: { start: 1945, end: 1991 },
  color: '#4B0082',
  
  superpowers: [
    {
      id: 'usa',
      name: 'United States of America',
      capital: { name: 'Washington D.C.', lat: 38.8951, lng: -77.0364 },
      ideology: 'Capitalism / Democracy',
      color: '#002868',
      
      timeline: [
        {
          year: 1947,
          event: 'Truman Doctrine',
          type: 'political',
          importance: 9,
          coordinates: { lat: 38.8951, lng: -77.0364 },
          mapState: {
            policy: 'containment'
          },
          details: 'USA commits to containing spread of communism globally.',
          figures: ['Harry S. Truman'],
          quote: '"It must be the policy of the United States to support free peoples"'
        },
        {
          year: 1948,
          event: 'Marshall Plan',
          type: 'economic',
          importance: 9,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          mapState: {
            aid: 'europe-rebuild'
          },
          details: 'USA provides $13 billion to rebuild Western Europe.',
          amount: 13000000000,
          figures: ['George Marshall'],
          recipients: ['britain', 'france', 'west-germany', 'italy', 'netherlands']
        },
        {
          year: 1949,
          event: 'NATO Founded',
          type: 'political',
          importance: 10,
          coordinates: { lat: 38.8951, lng: -77.0364 },
          mapState: {
            alliance: 'nato',
            members: ['usa', 'canada', 'britain', 'france', 'belgium', 'netherlands', 'luxembourg', 'norway', 'denmark', 'iceland', 'portugal', 'italy']
          },
          details: 'North Atlantic Treaty Organization formed as defensive alliance.',
          principle: 'Attack on one is attack on all',
          figures: ['Dean Acheson']
        },
        {
          year: 1950,
          event: 'Korean War Begins',
          type: 'military',
          importance: 9,
          coordinates: { lat: 37.5665, lng: 126.9780 },
          mapState: {
            war: 'korea',
            sides: {
              south: ['usa', 'south-korea', 'un-forces'],
              north: ['north-korea', 'china', 'soviet-union']
            }
          },
          details: 'First major proxy war of Cold War.',
          duration: 3,
          casualties: 5000000,
          outcome: 'Stalemate at 38th parallel'
        },
        {
          year: 1962,
          event: 'Cuban Missile Crisis',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 23.1136, lng: -82.3666 },
          mapState: {
            crisis: 'nuclear-brink',
            sovietMissiles: 'cuba'
          },
          details: 'Closest world came to nuclear war.',
          duration: 13,
          figures: ['John F. Kennedy', 'Nikita Khrushchev'],
          outcome: 'USSR removes missiles, USA removes missiles from Turkey',
          quote: '"We stood eyeball to eyeball, and the other guy blinked" - Dean Rusk'
        },
        {
          year: 1969,
          event: 'Moon Landing',
          type: 'scientific',
          importance: 10,
          coordinates: { lat: 0.6734, lng: 23.4731 }, // Moon
          mapState: {
            spaceRace: 'usa-wins'
          },
          details: 'Apollo 11 lands first humans on Moon.',
          figures: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'],
          quote: '"One small step for man, one giant leap for mankind"'
        },
        {
          year: 1975,
          event: 'Fall of Saigon',
          type: 'military',
          importance: 9,
          coordinates: { lat: 10.8231, lng: 106.6297 },
          mapState: {
            northVietnamVictory: true,
            usaDefeated: true
          },
          details: 'North Vietnam wins, USA withdraws.',
          figures: ['Gerald Ford'],
          casualties: 3000000
        },
        {
          year: 1989,
          event: 'Fall of Berlin Wall',
          type: 'political',
          importance: 10,
          coordinates: { lat: 52.5200, lng: 13.4050 },
          mapState: {
            wallFalls: true,
            coldWarEnding: true
          },
          details: 'Symbol of Cold War falls, German reunification begins.',
          figures: ['Ronald Reagan', 'Mikhail Gorbachev'],
          quote: '"Mr. Gorbachev, tear down this wall!" - Reagan'
        }
      ]
    },
    
    {
      id: 'ussr',
      name: 'Soviet Union',
      capital: { name: 'Moscow', lat: 55.7558, lng: 37.6173 },
      ideology: 'Communism',
      color: '#CC0000',
      
      timeline: [
        {
          year: 1949,
          event: 'Soviet Atomic Bomb',
          type: 'military',
          importance: 10,
          coordinates: { lat: 50.4501, lng: 78.3724 },
          mapState: {
            nuclear: 'ussr-has-bomb'
          },
          details: 'USSR successfully tests atomic bomb, ending USA monopoly.',
          figures: ['Joseph Stalin', 'Igor Kurchatov']
        },
        {
          year: 1955,
          event: 'Warsaw Pact Founded',
          type: 'political',
          importance: 9,
          coordinates: { lat: 52.2297, lng: 21.0122 },
          mapState: {
            alliance: 'warsaw-pact',
            members: ['soviet-union', 'poland', 'east-germany', 'czechoslovakia', 'hungary', 'romania', 'bulgaria', 'albania']
          },
          details: 'Soviet military alliance in response to NATO.',
          figures: ['Nikita Khrushchev']
        },
        {
          year: 1956,
          event: 'Hungarian Uprising Crushed',
          type: 'military',
          importance: 8,
          coordinates: { lat: 47.4979, lng: 19.0402 },
          mapState: {
            invasion: 'hungary',
            uprising: 'suppressed'
          },
          details: 'Soviet tanks crush Hungarian Revolution.',
          casualties: 20000,
          figures: ['Imre Nagy', 'Nikita Khrushchev']
        },
        {
          year: 1957,
          event: 'Sputnik Launched',
          type: 'scientific',
          importance: 10,
          coordinates: { lat: 45.9200, lng: 63.3050 },
          mapState: {
            spaceRace: 'ussr-leads'
          },
          details: 'First artificial satellite, beginning space race.',
          figures: ['Sergei Korolev'],
          impact: 'USA panics, accelerates space program'
        },
        {
          year: 1961,
          event: 'Yuri Gagarin in Space',
          type: 'scientific',
          importance: 10,
          coordinates: { lat: 45.9200, lng: 63.3050 },
          mapState: {
            spaceRace: 'ussr-leads'
          },
          details: 'First human in space.',
          figures: ['Yuri Gagarin'],
          quote: '"Poyekhali!" (Let\'s go!)'
        },
        {
          year: 1961,
          event: 'Berlin Wall Built',
          type: 'political',
          importance: 10,
          coordinates: { lat: 52.5200, lng: 13.4050 },
          mapState: {
            wall: 'berlin-divided',
            eastWestDivide: true
          },
          details: 'Physical barrier dividing East and West Berlin.',
          length: '155 km',
          casualties: 171, // Those killed trying to cross
          figures: ['Walter Ulbricht']
        },
        {
          year: 1968,
          event: 'Prague Spring Crushed',
          type: 'military',
          importance: 8,
          coordinates: { lat: 50.0755, lng: 14.4378 },
          mapState: {
            invasion: 'czechoslovakia',
            reformsSuppressed: true
          },
          details: 'Warsaw Pact forces invade Czechoslovakia.',
          casualties: 137,
          figures: ['Alexander Dubček', 'Leonid Brezhnev']
        },
        {
          year: 1979,
          event: 'Soviet Invasion of Afghanistan',
          type: 'military',
          importance: 9,
          coordinates: { lat: 34.5553, lng: 69.2075 },
          mapState: {
            invasion: 'afghanistan',
            war: 'soviet-afghan'
          },
          details: 'USSR intervenes in Afghan civil war, beginning decade-long conflict.',
          duration: 10,
          casualties: 2000000,
          figures: ['Leonid Brezhnev'],
          outcome: 'Soviet withdrawal 1989, contributed to USSR collapse'
        },
        {
          year: 1985,
          event: 'Gorbachev Comes to Power',
          type: 'political',
          importance: 10,
          coordinates: { lat: 55.7558, lng: 37.6173 },
          mapState: {
            reforms: 'glasnost-perestroika'
          },
          details: 'Mikhail Gorbachev introduces glasnost (openness) and perestroika (restructuring).',
          figures: ['Mikhail Gorbachev'],
          impact: 'Unintentionally leads to USSR collapse'
        },
        {
          year: 1986,
          event: 'Chernobyl Disaster',
          type: 'disaster',
          importance: 9,
          coordinates: { lat: 51.3891, lng: 30.0992 },
          mapState: {
            disaster: 'nuclear-meltdown'
          },
          details: 'Worst nuclear disaster in history.',
          casualties: 4000,
          figures: ['Mikhail Gorbachev'],
          impact: 'Exposes Soviet system failures'
        },
        {
          year: 1991,
          month: 12,
          day: 26,
          event: 'Soviet Union Dissolves',
          type: 'political',
          importance: 10,
          coordinates: { lat: 55.7558, lng: 37.6173 },
          mapState: {
            dissolution: true,
            newCountries: ['russia', 'ukraine', 'belarus', 'kazakhstan', 'uzbekistan', 'georgia', 'azerbaijan', 'lithuania', 'moldova', 'latvia', 'kyrgyzstan', 'tajikistan', 'armenia', 'turkmenistan', 'estonia']
          },
          details: 'USSR formally ceases to exist, Cold War ends.',
          figures: ['Mikhail Gorbachev', 'Boris Yeltsin']
        }
      ]
    }
  ],
  
  proxyWars: [
    {
      id: 'korea',
      name: 'Korean War',
      timespan: { start: 1950, end: 1953 },
      location: { lat: 37.5665, lng: 126.9780 },
      sides: {
        west: ['usa', 'south-korea', 'un'],
        east: ['north-korea', 'china', 'soviet-union']
      },
      casualties: 5000000,
      outcome: 'Stalemate, Korea remains divided'
    },
    {
      id: 'vietnam',
      name: 'Vietnam War',
      timespan: { start: 1955, end: 1975 },
      location: { lat: 10.8231, lng: 106.6297 },
      sides: {
        west: ['usa', 'south-vietnam'],
        east: ['north-vietnam', 'viet-cong', 'soviet-union', 'china']
      },
      casualties: 3000000,
      outcome: 'Communist victory, Vietnam unified'
    },
    {
      id: 'afghanistan',
      name: 'Soviet-Afghan War',
      timespan: { start: 1979, end: 1989 },
      location: { lat: 34.5553, lng: 69.2075 },
      sides: {
        west: ['usa-backed-mujahideen'],
        east: ['soviet-union', 'afghanistan-government']
      },
      casualties: 2000000,
      outcome: 'Soviet withdrawal, mujahideen victory'
    },
    {
      id: 'angola',
      name: 'Angolan Civil War',
      timespan: { start: 1975, end: 2002 },
      location: { lat: -8.8368, lng: 13.2343 },
      sides: {
        west: ['usa', 'south-africa', 'unita'],
        east: ['soviet-union', 'cuba', 'mpla']
      },
      casualties: 500000,
      outcome: 'MPLA victory'
    }
  ],
  
  nuclearArmsRace: {
    milestones: [
      { year: 1945, event: 'USA first atomic bomb', country: 'usa' },
      { year: 1949, event: 'USSR first atomic bomb', country: 'ussr' },
      { year: 1952, event: 'USA first hydrogen bomb', country: 'usa' },
      { year: 1953, event: 'USSR first hydrogen bomb', country: 'ussr' },
      { year: 1957, event: 'First ICBM (USSR)', country: 'ussr' },
      { year: 1960, event: 'First SLBM (USA)', country: 'usa' }
    ],
    peakArsenals: {
      usa: { year: 1967, warheads: 31255 },
      ussr: { year: 1986, warheads: 40723 }
    },
    treaties: [
      {
        year: 1963,
        name: 'Partial Test Ban Treaty',
        details: 'Bans nuclear tests in atmosphere, outer space, underwater'
      },
      {
        year: 1968,
        name: 'Nuclear Non-Proliferation Treaty',
        details: 'Prevents spread of nuclear weapons'
      },
      {
        year: 1972,
        name: 'SALT I',
        details: 'Strategic Arms Limitation Talks, freezes missile numbers'
      },
      {
        year: 1987,
        name: 'INF Treaty',
        details: 'Eliminates intermediate-range nuclear missiles'
      },
      {
        year: 1991,
        name: 'START I',
        details: 'Strategic Arms Reduction Treaty, reduces warheads'
      }
    ]
  },
  
  spaceRace: {
    sovietAchievements: [
      { year: 1957, event: 'Sputnik 1', details: 'First artificial satellite' },
      { year: 1957, event: 'Sputnik 2', details: 'First animal in orbit (Laika)' },
      { year: 1961, event: 'Vostok 1', details: 'Yuri Gagarin, first human in space' },
      { year: 1963, event: 'Vostok 6', details: 'Valentina Tereshkova, first woman in space' },
      { year: 1965, event: 'Voskhod 2', details: 'Alexei Leonov, first spacewalk' },
      { year: 1970, event: 'Venera 7', details: 'First spacecraft to land on another planet (Venus)' }
    ],
    usaAchievements: [
      { year: 1958, event: 'Explorer 1', details: 'First US satellite, discovers Van Allen belts' },
      { year: 1962, event: 'Friendship 7', details: 'John Glenn, first American in orbit' },
      { year: 1968, event: 'Apollo 8', details: 'First humans to orbit Moon' },
      { year: 1969, event: 'Apollo 11', details: 'First Moon landing' },
      { year: 1969-1972, event: 'Apollo program', details: '6 successful Moon landings' },
      { year: 1981, event: 'Space Shuttle', details: 'First reusable spacecraft' }
    ]
  },
  
  culturalBattlegrounds: {
    berlin: {
      description: 'Divided city, symbol of Cold War',
      wall: { built: 1961, fell: 1989 },
      importance: 10
    },
    cuba: {
      description: 'Communist state 90 miles from USA',
      revolution: 1959,
      crisis: 1962,
      importance: 10
    },
    olympics: {
      description: 'Athletic competition as proxy for supremacy',
      boycotts: [
        { year: 1980, event: 'Moscow Olympics', boycotted: 'USA and 65 nations' },
        { year: 1984, event: 'Los Angeles Olympics', boycotted: 'USSR and 14 nations' }
      ]
    },
    chess: {
      description: 'Bobby Fischer vs Boris Spassky',
      year: 1972,
      significance: 'Intellectual supremacy battle'
    }
  },
  
  decolonization: {
    description: 'Cold War accelerated end of European empires',
    regions: {
      asia: {
        events: [
          { year: 1947, country: 'India', from: 'Britain' },
          { year: 1948, country: 'Burma', from: 'Britain' },
          { year: 1949, country: 'Indonesia', from: 'Netherlands' },
          { year: 1954, country: 'Vietnam', from: 'France' }
        ]
      },
      africa: {
        events: [
          { year: 1957, country: 'Ghana', from: 'Britain' },
          { year: 1960, country: '17 African nations', from: 'Various' },
          { year: 1962, country: 'Algeria', from: 'France' },
          { year: 1975, country: 'Angola', from: 'Portugal' }
        ]
      }
    },
    nonAlignedMovement: {
      founded: 1961,
      leaders: ['Nehru (India)', 'Nasser (Egypt)', 'Tito (Yugoslavia)', 'Sukarno (Indonesia)'],
      goal: 'Avoid alignment with either superpower'
    }
  },
  
  keyFigures: {
    usa: [
      { name: 'Harry Truman', role: 'President 1945-53', significance: 'Containment policy' },
      { name: 'Dwight Eisenhower', role: 'President 1953-61', significance: 'Arms race, Interstate system' },
      { name: 'John F. Kennedy', role: 'President 1961-63', significance: 'Cuban Missile Crisis, Space Race' },
      { name: 'Richard Nixon', role: 'President 1969-74', significance: 'Détente, China opening' },
      { name: 'Ronald Reagan', role: 'President 1981-89', significance: 'Renewed confrontation, "Evil Empire"' }
    ],
    ussr: [
      { name: 'Joseph Stalin', role: 'Leader 1924-53', significance: 'Post-war expansion' },
      { name: 'Nikita Khrushchev', role: 'Leader 1953-64', significance: 'De-Stalinization, Space Race' },
      { name: 'Leonid Brezhnev', role: 'Leader 1964-82', significance: 'Détente, Afghanistan' },
      { name: 'Mikhail Gorbachev', role: 'Leader 1985-91', significance: 'Reforms, end of Cold War' }
    ]
  },
  
  legacies: {
    political: [
      'Bipolar world order',
      'United Nations system',
      'NATO and military alliances',
      'Nuclear deterrence doctrine',
      'Decolonization wave'
    ],
    technological: [
      'Space exploration',
      'Computer development',
      'Internet (ARPANET)',
      'Nuclear energy',
      'Satellite communications'
    ],
    cultural: [
      'Spy fiction genre',
      'Science fiction boom',
      'Nuclear anxiety',
      'Youth rebellion',
      'Consumer culture vs. state control'
    ],
    ongoing: [
      'Nuclear weapons proliferation',
      'Russia-West tensions',
      'North-South Korea division',
      'Cuban-US relations',
      'Middle East conflicts'
    ]
  }
};

// Register with master data engine
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(COLD_WAR_ERA);
}
