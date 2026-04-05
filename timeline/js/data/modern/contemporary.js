/**
 * CONTEMPORARY ERA (1991-2026)
 * Post-Cold War world, globalization, digital revolution
 */

const CONTEMPORARY_ERA = {
  era: 'Contemporary',
  timeRange: { start: 1991, end: 2026 },
  color: '#1E90FF',
  
  phases: [
    {
      id: 'post-cold-war',
      name: 'Post-Cold War Optimism',
      timespan: { start: 1991, end: 2001 },
      
      timeline: [
        {
          year: 1991,
          event: 'End of Soviet Union',
          type: 'political',
          importance: 10,
          coordinates: { lat: 55.7558, lng: 37.6173 },
          mapState: {
            newCountries: ['russia', 'ukraine', 'belarus', 'kazakhstan', 'uzbekistan', 'georgia', 'azerbaijan', 'lithuania', 'moldova', 'latvia', 'kyrgyzstan', 'tajikistan', 'armenia', 'turkmenistan', 'estonia'],
            coldWarEnds: true
          },
          details: 'USSR dissolves into 15 independent republics.',
          figures: ['Mikhail Gorbachev', 'Boris Yeltsin']
        },
        {
          year: 1991,
          event: 'Gulf War',
          type: 'military',
          importance: 8,
          coordinates: { lat: 29.3759, lng: 47.9774 },
          mapState: {
            coalition: 'iraq-invasion',
            quickVictory: true
          },
          details: 'Coalition forces liberate Kuwait from Iraqi occupation.',
          duration: 0.2, // 43 days
          casualties: 40000,
          figures: ['George H.W. Bush', 'Saddam Hussein', 'Norman Schwarzkopf']
        },
        {
          year: 1994,
          event: 'Rwandan Genocide',
          type: 'catastrophic',
          importance: 9,
          coordinates: { lat: -1.9403, lng: 29.8739 },
          mapState: {
            genocide: 'rwanda'
          },
          details: 'Hutu extremists murder 800,000 Tutsis and moderate Hutus in 100 days.',
          casualties: 800000,
          duration: 0.27,
          figures: ['Juvénal Habyarimana'],
          globalFailure: 'International community fails to intervene'
        },
        {
          year: 1995,
          event: 'Srebrenica Massacre',
          type: 'catastrophic',
          importance: 8,
          coordinates: { lat: 44.1064, lng: 19.2972 },
          mapState: {
            genocide: 'bosnia'
          },
          details: 'Bosnian Serb forces kill 8,000 Bosnian Muslims.',
          casualties: 8000,
          figures: ['Ratko Mladić']
        },
        {
          year: 1997,
          event: 'Hong Kong Handover',
          type: 'political',
          importance: 7,
          coordinates: { lat: 22.3193, lng: 114.1694 },
          mapState: {
            transfer: 'britain-to-china'
          },
          details: 'Britain returns Hong Kong to China after 156 years.',
          figures: ['Deng Xiaoping', 'Tony Blair']
        },
        {
          year: 1999,
          event: 'Euro Introduced',
          type: 'economic',
          importance: 8,
          coordinates: { lat: 50.8503, lng: 4.3517 },
          mapState: {
            currency: 'eurozone',
            countries: 11
          },
          details: 'European single currency launches.',
          participants: ['germany', 'france', 'italy', 'spain', 'netherlands', 'belgium', 'austria', 'portugal', 'finland', 'ireland', 'luxembourg']
        },
        {
          year: 2000,
          event: 'Y2K Bug',
          type: 'technological',
          importance: 6,
          details: 'Computer date rollover feared, massive preparations prevent disaster.',
          outcome: 'Largely non-event due to preparations'
        }
      ]
    },
    
    {
      id: 'war-on-terror',
      name: 'War on Terror',
      timespan: { start: 2001, end: 2011 },
      
      timeline: [
        {
          year: 2001,
          month: 9,
          day: 11,
          event: '9/11 Terrorist Attacks',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 40.7128, lng: -74.0060 },
          mapState: {
            attack: 'new-york-washington',
            worldChanges: true
          },
          details: 'Al-Qaeda attacks kill 2,977 in New York, Washington, Pennsylvania.',
          casualties: 2977,
          figures: ['Osama bin Laden', 'George W. Bush'],
          targets: [
            { name: 'World Trade Center', lat: 40.7128, lng: -74.0134 },
            { name: 'Pentagon', lat: 38.8719, lng: -77.0563 },
            { name: 'Shanksville, PA', lat: 40.0506, lng: -78.9014 }
          ],
          globalImpact: 'Reshapes global politics, begins War on Terror'
        },
        {
          year: 2001,
          month: 10,
          event: 'Invasion of Afghanistan',
          type: 'military',
          importance: 9,
          coordinates: { lat: 34.5553, lng: 69.2075 },
          mapState: {
            invasion: 'afghanistan',
            warOnTerror: 'begins'
          },
          details: 'USA and allies invade Afghanistan to overthrow Taliban.',
          duration: 20, // Ends 2021
          figures: ['George W. Bush', 'Mullah Omar']
        },
        {
          year: 2003,
          event: 'Iraq War Begins',
          type: 'military',
          importance: 9,
          coordinates: { lat: 33.3152, lng: 44.3661 },
          mapState: {
            invasion: 'iraq',
            regimeChange: true
          },
          details: 'USA invades Iraq, claiming WMDs (never found).',
          casualties: 500000,
          figures: ['George W. Bush', 'Saddam Hussein', 'Tony Blair'],
          controversy: 'Based on false WMD intelligence',
          outcome: 'Saddam overthrown, sectarian violence, ISIS emerges'
        },
        {
          year: 2004,
          event: 'Indian Ocean Tsunami',
          type: 'disaster',
          importance: 9,
          coordinates: { lat: 3.3, lng: 95.8 },
          mapState: {
            tsunami: 'indian-ocean'
          },
          details: '9.1 magnitude earthquake triggers devastating tsunami.',
          casualties: 230000,
          affected: ['indonesia', 'thailand', 'sri-lanka', 'india', 'somalia']
        },
        {
          year: 2008,
          event: 'Global Financial Crisis',
          type: 'economic',
          importance: 10,
          coordinates: { lat: 40.7128, lng: -74.0060 },
          mapState: {
            crisis: 'global-financial',
            recession: true
          },
          details: 'Subprime mortgage crisis triggers global recession.',
          figures: ['Ben Bernanke', 'Henry Paulson'],
          impact: '$2 trillion in losses, millions unemployed',
          bailout: '$700 billion TARP'
        },
        {
          year: 2010,
          event: 'Arab Spring Begins',
          type: 'political',
          importance: 9,
          coordinates: { lat: 36.8065, lng: 10.1815 },
          mapState: {
            revolutions: 'arab-world'
          },
          details: 'Pro-democracy uprisings sweep Middle East and North Africa.',
          affected: ['tunisia', 'egypt', 'libya', 'yemen', 'syria', 'bahrain'],
          outcomes: {
            tunisia: 'Democracy established',
            egypt: 'Temporary democracy, then military rule',
            libya: 'Civil war',
            syria: 'Devastating civil war',
            yemen: 'Civil war'
          }
        },
        {
          year: 2011,
          event: 'Osama bin Laden Killed',
          type: 'military',
          importance: 8,
          coordinates: { lat: 34.1688, lng: 73.2215 },
          mapState: {
            raid: 'abbottabad'
          },
          details: 'US Navy SEALs kill al-Qaeda leader in Pakistan.',
          figures: ['Barack Obama', 'Osama bin Laden']
        }
      ]
    },
    
    {
      id: 'digital-age',
      name: 'Digital Revolution',
      timespan: { start: 1991, end: 2026 },
      
      timeline: [
        {
          year: 1991,
          event: 'World Wide Web Goes Public',
          type: 'technological',
          importance: 10,
          coordinates: { lat: 46.2044, lng: 6.1432 },
          details: 'Tim Berners-Lee releases WWW to public.',
          figures: ['Tim Berners-Lee'],
          globalImpact: 'Information revolution begins'
        },
        {
          year: 1998,
          event: 'Google Founded',
          type: 'technological',
          importance: 9,
          coordinates: { lat: 37.4220, lng: -122.0841 },
          details: 'Larry Page and Sergey Brin launch Google.',
          figures: ['Larry Page', 'Sergey Brin']
        },
        {
          year: 2004,
          event: 'Facebook Founded',
          type: 'technological',
          importance: 8,
          coordinates: { lat: 42.3601, lng: -71.0589 },
          details: 'Mark Zuckerberg creates Facebook at Harvard.',
          figures: ['Mark Zuckerberg'],
          users: '3 billion+ by 2024'
        },
        {
          year: 2007,
          event: 'iPhone Released',
          type: 'technological',
          importance: 10,
          coordinates: { lat: 37.3318, lng: -122.0312 },
          details: 'Steve Jobs unveils iPhone, creating smartphone era.',
          figures: ['Steve Jobs'],
          impact: 'Transforms computing, communication, society'
        },
        {
          year: 2010,
          event: 'Instagram Launched',
          type: 'technological',
          importance: 7,
          details: 'Photo-sharing app explodes in popularity.',
          users: '2 billion+ by 2024'
        },
        {
          year: 2016,
          event: 'AlphaGo Defeats Human Champion',
          type: 'technological',
          importance: 8,
          coordinates: { lat: 37.5665, lng: 126.9780 },
          details: 'Google\'s AI defeats world Go champion, AI breakthrough.',
          figures: ['Demis Hassabis', 'Lee Sedol']
        },
        {
          year: 2022,
          event: 'ChatGPT Released',
          type: 'technological',
          importance: 10,
          coordinates: { lat: 37.7749, lng: -122.4194 },
          details: 'OpenAI releases ChatGPT, generative AI goes mainstream.',
          figures: ['Sam Altman'],
          users: '100 million in 2 months',
          impact: 'AI revolution accelerates'
        }
      ]
    },
    
    {
      id: 'climate-crisis',
      name: 'Climate Crisis',
      timespan: { start: 1992, end: 2026 },
      
      timeline: [
        {
          year: 1992,
          event: 'Rio Earth Summit',
          type: 'political',
          importance: 8,
          coordinates: { lat: -22.9068, lng: -43.1729 },
          details: 'UN Conference on Environment and Development.',
          outcome: 'Climate Change Convention signed'
        },
        {
          year: 1997,
          event: 'Kyoto Protocol',
          type: 'political',
          importance: 8,
          coordinates: { lat: 35.0116, lng: 135.7681 },
          details: 'First binding emissions reduction treaty.',
          limitation: 'USA never ratifies'
        },
        {
          year: 2015,
          event: 'Paris Climate Agreement',
          type: 'political',
          importance: 9,
          coordinates: { lat: 48.8566, lng: 2.3522 },
          details: '196 countries agree to limit warming to 1.5-2°C.',
          signatories: 196,
          figures: ['François Hollande', 'Ban Ki-moon']
        },
        {
          year: 2019,
          event: 'Youth Climate Strikes',
          type: 'social',
          importance: 7,
          globalMovement: true,
          details: 'Millions of students strike for climate action.',
          figures: ['Greta Thunberg']
        },
        {
          year: 2023,
          event: 'Hottest Year on Record',
          type: 'disaster',
          importance: 9,
          globalImpact: true,
          details: '2023 is hottest year in 125,000 years.',
          temperature: '+1.48°C above pre-industrial'
        }
      ]
    },
    
    {
      id: 'multipolar-world',
      name: 'Rise of Multipolarity',
      timespan: { start: 2001, end: 2026 },
      
      timeline: [
        {
          year: 2001,
          event: 'China Joins WTO',
          type: 'economic',
          importance: 9,
          coordinates: { lat: 39.9042, lng: 116.4074 },
          details: 'China joins World Trade Organization.',
          impact: 'Accelerates China\'s economic rise'
        },
        {
          year: 2008,
          event: 'Beijing Olympics',
          type: 'cultural',
          importance: 7,
          coordinates: { lat: 39.9042, lng: 116.4074 },
          details: 'China showcases rise as global power.',
          figures: ['Hu Jintao']
        },
        {
          year: 2014,
          event: 'Russia Annexes Crimea',
          type: 'military',
          importance: 9,
          coordinates: { lat: 45.0, lng: 34.0 },
          mapState: {
            annexation: 'crimea',
            sanctions: 'russia'
          },
          details: 'Russia seizes Crimea from Ukraine.',
          figures: ['Vladimir Putin'],
          consequence: 'Western sanctions, Ukraine conflict begins'
        },
        {
          year: 2016,
          event: 'Brexit Vote',
          type: 'political',
          importance: 8,
          coordinates: { lat: 51.5074, lng: -0.1278 },
          mapState: {
            exit: 'uk-from-eu'
          },
          details: 'UK votes to leave European Union.',
          margin: '52% to 48%',
          figures: ['David Cameron', 'Nigel Farage']
        },
        {
          year: 2016,
          event: 'Trump Elected President',
          type: 'political',
          importance: 8,
          coordinates: { lat: 38.8951, lng: -77.0364 },
          details: 'Donald Trump elected US President, populist wave.',
          figures: ['Donald Trump'],
          impact: 'Challenges post-WWII order'
        },
        {
          year: 2020,
          event: 'COVID-19 Pandemic',
          type: 'catastrophic',
          importance: 10,
          coordinates: { lat: 30.5928, lng: 114.3055 },
          mapState: {
            pandemic: 'global',
            lockdowns: 'worldwide'
          },
          details: 'Coronavirus pandemic kills 7 million+, reshapes world.',
          casualties: 7000000,
          infected: 700000000,
          impact: 'Economic disruption, social changes, vaccine development'
        },
        {
          year: 2022,
          event: 'Russia Invades Ukraine',
          type: 'military',
          importance: 10,
          coordinates: { lat: 50.4501, lng: 30.5234 },
          mapState: {
            invasion: 'ukraine',
            fullScaleWar: true
          },
          details: 'Russia launches full-scale invasion of Ukraine.',
          figures: ['Vladimir Putin', 'Volodymyr Zelenskyy'],
          casualties: 500000,
          impact: 'Largest European war since WWII, global energy crisis'
        },
        {
          year: 2023,
          event: 'Israel-Hamas War',
          type: 'military',
          importance: 8,
          coordinates: { lat: 31.5, lng: 34.5 },
          mapState: {
            conflict: 'gaza',
            warIntensifies: true
          },
          details: 'Hamas attacks Israel, Israel launches Gaza offensive.',
          casualties: 50000
        }
      ]
    }
  ],
  
  globalTrends: {
    population: {
      1990: 5300000000,
      2000: 6100000000,
      2010: 6900000000,
      2020: 7800000000,
      2026: 8100000000,
      projectedPeak: { year: 2086, population: 10400000000 }
    },
    internet: {
      1995: 16000000,
      2000: 413000000,
      2010: 1970000000,
      2020: 4660000000,
      2026: 5500000000,
      penetration: '68%'
    },
    urbanization: {
      1990: '43%',
      2000: '47%',
      2010: '52%',
      2020: '57%',
      2026: '58%',
      megacities: 33
    },
    co2Levels: {
      1990: 354,
      2000: 370,
      2010: 390,
      2020: 414,
      2026: 425,
      unit: 'ppm'
    },
    gdp: {
      top5_2025: [
        { country: 'USA', gdp: 28000000000000 },
        { country: 'China', gdp: 18000000000000 },
        { country: 'Germany', gdp: 4500000000000 },
        { country: 'Japan', gdp: 4200000000000 },
        { country: 'India', gdp: 3900000000000 }
      ]
    }
  },
  
  majorTechnologies: [
    {
      name: 'Internet',
      emerged: 1991,
      adoption: 'Global',
      impact: 'Transformed communication, commerce, society'
    },
    {
      name: 'Smartphones',
      emerged: 2007,
      adoption: '6.8 billion devices',
      impact: 'Computing everywhere'
    },
    {
      name: 'Social Media',
      emerged: 2004,
      adoption: '5 billion users',
      impact: 'Reshaped politics, culture, relationships'
    },
    {
      name: 'Cloud Computing',
      emerged: 2006,
      adoption: 'Universal',
      impact: 'Infrastructure revolution'
    },
    {
      name: 'AI/Machine Learning',
      emerged: 2012,
      acceleration: 2022,
      impact: 'Potential to transform all industries'
    },
    {
      name: 'Renewable Energy',
      emerged: 2000,
      growth: 'Exponential',
      impact: 'Energy transition begins'
    },
    {
      name: 'CRISPR Gene Editing',
      emerged: 2012,
      applications: ['Medicine', 'Agriculture'],
      impact: 'Potential to cure genetic diseases'
    },
    {
      name: 'Electric Vehicles',
      emerged: 2008,
      leader: 'Tesla',
      impact: 'Transportation revolution'
    }
  ],
  
  ongoingChallenges: [
    {
      challenge: 'Climate Change',
      severity: 10,
      status: 'Critical',
      details: 'Existential threat requiring immediate global action'
    },
    {
      challenge: 'Inequality',
      severity: 9,
      status: 'Worsening',
      details: 'Wealth gap at historic highs within and between nations'
    },
    {
      challenge: 'Geopolitical Tensions',
      severity: 9,
      status: 'Escalating',
      details: 'US-China rivalry, Russia-West conflict, Middle East instability'
    },
    {
      challenge: 'AI Ethics & Control',
      severity: 8,
      status: 'Emerging',
      details: 'How to develop AI safely and equitably'
    },
    {
      challenge: 'Pandemics',
      severity: 8,
      status: 'Recurring threat',
      details: 'COVID-19 showed vulnerability to novel diseases'
    },
    {
      challenge: 'Disinformation',
      severity: 8,
      status: 'Accelerating',
      details: 'Social media enables rapid spread of falsehoods'
    },
    {
      challenge: 'Biodiversity Loss',
      severity: 9,
      status: 'Critical',
      details: 'Sixth mass extinction underway'
    },
    {
      challenge: 'Nuclear Proliferation',
      severity: 9,
      status: 'Controlled but risky',
      details: '9 nuclear powers, treaty system under strain'
    }
  ],
  
  hopefulDevelopments: [
    'Extreme poverty halved since 1990',
    'Child mortality dropped 60%',
    'Global literacy at 87%',
    'Renewable energy costs plummeting',
    'HIV/AIDS deaths down 70% from peak',
    'Ozone layer recovering',
    'Democracy spread (though backsliding recently)',
    'Life expectancy increased 10+ years globally',
    'Access to education expanded massively',
    'Scientific knowledge accelerating'
  ]
};

// Register with master data engine
if (typeof GEOTOPIA_DATA !== 'undefined') {
  GEOTOPIA_DATA.register(CONTEMPORARY_ERA);
}
