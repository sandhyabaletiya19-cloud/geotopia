/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — WORLD CLIMATE
 * MAP 073 to MAP 084 | Global Climate Zones · Rainfall · Temperature
 * Monsoons · Ocean Currents · Winds · Pressure · Cyclones
 * El Niño · Global Warming · Biomes
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── KOPPEN WORLD CLIMATE ZONES ──
    worldClimateZones: [
      { code: 'Af', name: 'Tropical Rainforest', color: '#0000CC', temp: '>18°C all months', rain: '>60mm all months', regions: 'Amazon, Congo, SE Asia, W Africa coast', lat: 0, lng: -60, upsc: 'No dry season. Highest biodiversity. Dense canopy. Laterite soils. Shifting cultivation (slash & burn).' },
      { code: 'Aw', name: 'Tropical Savanna', color: '#00AA44', temp: '>18°C all months', rain: 'Distinct dry season', regions: 'Sub-Saharan Africa, Brazil (Cerrado), India (Deccan)', lat: 10, lng: 25, upsc: 'Grasslands with scattered trees. Wet-dry cycle. Bushfires common. Serengeti, Masai Mara. Laterite soils.' },
      { code: 'Am', name: 'Tropical Monsoon', color: '#0066FF', temp: '>18°C all months', rain: 'Very heavy monsoon, short dry', regions: 'India W coast, SE Asia, W Africa', lat: 12, lng: 76, upsc: 'Monsoon-driven. India\'s Malabar coast, Bangladesh, Myanmar. Heavy but seasonal rainfall.' },
      { code: 'BWh', name: 'Hot Desert', color: '#FF4400', temp: 'Hot summer >35°C', rain: '<250mm/yr', regions: 'Sahara, Arabian, Thar, Sonoran, Kalahari, Australian interior', lat: 25, lng: 10, upsc: 'Subtropical high pressure belt (Horse latitudes). Trade wind deserts. Rain shadow deserts (Patagonia, Gobi). Extreme diurnal temp range.' },
      { code: 'BWk', name: 'Cold Desert', color: '#FF8800', temp: 'Cold winter <0°C', rain: '<250mm/yr', regions: 'Gobi, Taklamakan, Ladakh, Patagonia, Antarctica interior', lat: 43, lng: 100, upsc: 'Continentality + rain shadow. Gobi — cold desert in Mongolia. Ladakh in India. Antarctica — largest desert on earth (technically).' },
      { code: 'BSh', name: 'Hot Semi-Arid (Steppe)', color: '#CC8800', temp: 'Hot', rain: '250-500mm/yr', regions: 'Sahel, parts of India, Australia, Mexico', lat: 15, lng: 5, upsc: 'Transition between desert and savanna. Sahel — desertification crisis. Pastoralism dominant. Fragile ecosystem.' },
      { code: 'Cfa', name: 'Humid Subtropical', color: '#88CC00', temp: 'Warmest >22°C', rain: '>1000mm/yr', regions: 'SE USA, E China, Japan, SE Brazil, N India plains', lat: 32, lng: -85, upsc: 'Hot, humid summers. Mild winters. Rice, cotton, tea. Gangetic plain partially this type.' },
      { code: 'Cfb', name: 'Oceanic / Maritime', color: '#00CC88', temp: 'Mild, cool summers', rain: 'Year-round rain', regions: 'W Europe (UK, France, Germany), NZ, Chile', lat: 52, lng: 0, upsc: 'Warm Gulf Stream influence. Moderate temperatures. Green agriculture. Westerlies bring rain. 4 seasons but mild.' },
      { code: 'Cs', name: 'Mediterranean', color: '#FFCC00', temp: 'Hot dry summer', rain: 'Wet winter (cyclonic)', regions: 'Mediterranean basin, California, SW Australia, Chile, S Africa', lat: 37, lng: 15, upsc: 'Dry summer due to subtropical high; wet winter due to Westerlies shifting. Olives, grapes, citrus. Maquis/Chaparral vegetation. Fire-adapted.' },
      { code: 'Dfc', name: 'Subarctic / Boreal', color: '#4682B4', temp: 'Severe winter <-3°C', rain: 'Low (snow dominant)', regions: 'Siberia, Canada, Scandinavia, Alaska', lat: 60, lng: 90, upsc: 'Taiga/Boreal forest = world\'s largest biome. Coniferous (pine, spruce, fir). Permafrost in north. Short summers. Long harsh winters (-40°C).' },
      { code: 'ET', name: 'Tundra', color: '#9370DB', temp: 'Warmest month 0-10°C', rain: 'Very low (snow/ice)', regions: 'Arctic coast, N Canada, N Russia, Greenland edge', lat: 70, lng: -30, upsc: 'Permafrost. No trees. Lichens, mosses, low shrubs. Short growing season (6-8 weeks). Polar bears, caribou, lemmings. Fragile — climate change sensitive.' },
      { code: 'EF', name: 'Ice Cap', color: '#B0C4DE', temp: 'All months <0°C', rain: 'Precipitation as snow only', regions: 'Antarctica interior, Greenland interior', lat: -80, lng: 0, upsc: 'Permanent ice. Antarctica = 90% of world\'s ice. If all ice melts → 60m+ sea level rise. Research stations only. No permanent human habitation.' }
    ],

    // ── WORLD RAINFALL ──
    worldRainfall: [
      { zone: 'Equatorial Belt (>2000mm)', color: '#0000CC', lat: 0, lng: 25, regions: 'Amazon, Congo, Indonesia, Malaysia', upsc: 'ITCZ convergence. Convectional rainfall. Year-round rain. Tropical evergreen forests.' },
      { zone: 'Monsoon Regions (1000-3000mm)', color: '#0088FF', lat: 20, lng: 85, regions: 'South Asia, SE Asia, W Africa', upsc: 'Seasonal heavy rain. SW Monsoon (India). Orographic + convectional. Agricultural lifeline.' },
      { zone: 'Temperate Oceanic (750-1500mm)', color: '#00CC88', lat: 52, lng: -5, regions: 'W Europe, Pacific NW, S Chile, NZ', upsc: 'Frontal (cyclonic) rainfall. Year-round. Moderate intensity. Westerlies carry moisture.' },
      { zone: 'Mediterranean (400-900mm)', color: '#FFCC00', lat: 37, lng: 15, regions: 'Mediterranean basin, California, SW Australia', upsc: 'Winter rainfall only. Summer dry (subtropical high blocks rain). Drought-adapted vegetation.' },
      { zone: 'Semi-Arid Steppe (250-500mm)', color: '#FF8800', lat: 15, lng: 5, regions: 'Sahel, Great Plains, Central Asia, Interior Australia', upsc: 'Transition zone. Variable rainfall. Drought risk. Overgrazing → desertification.' },
      { zone: 'Desert (<250mm)', color: '#FF4400', lat: 25, lng: 10, regions: 'Sahara, Arabian, Gobi, Atacama, Namib, Australian', upsc: 'Subtropical highs. Trade wind deserts. Rain shadow. Atacama driest (0.76mm/yr average).' },
      { zone: 'Polar (<250mm)', color: '#B0C4DE', lat: 75, lng: 0, regions: 'Arctic, Antarctica', upsc: 'Cold air holds less moisture. Precipitation as snow. Antarctica technically a desert.' }
    ],

    // ── WORLD TEMPERATURE ──
    worldTempJanuary: [
      { band: '> 30°C', color: '#FF0000', lat: -25, lng: 135, region: 'Australia, S Africa, S America (summer)' },
      { band: '20-30°C', color: '#FF6347', lat: 10, lng: 80, region: 'Tropics — India, SE Asia, Africa, C America' },
      { band: '10-20°C', color: '#FFA500', lat: 35, lng: -5, region: 'Mediterranean, N Africa, S USA' },
      { band: '0-10°C', color: '#FFD700', lat: 45, lng: -80, region: 'SE USA, W Europe (Gulf Stream warmth)' },
      { band: '-10 to 0°C', color: '#00BFFF', lat: 55, lng: -100, region: 'N USA, S Canada, C Europe' },
      { band: '-20 to -10°C', color: '#4169E1', lat: 60, lng: 90, region: 'Siberia, N Canada, Scandinavia' },
      { band: '< -30°C', color: '#0000CC', lat: 65, lng: 120, region: 'NE Siberia (Verkhoyansk/Oymyakon), Antarctica' }
    ],

    worldTempJuly: [
      { band: '> 40°C', color: '#8B0000', lat: 30, lng: 45, region: 'Sahara, Arabian, Thar, Iran, Iraq' },
      { band: '30-40°C', color: '#FF0000', lat: 25, lng: 78, region: 'India (N), Sahara, SW USA, Australia (winter)' },
      { band: '20-30°C', color: '#FF6347', lat: 45, lng: -90, region: 'N USA, S Canada, Europe, China' },
      { band: '10-20°C', color: '#FFA500', lat: 60, lng: 0, region: 'N Europe, N Asia, S Australia (winter)' },
      { band: '0-10°C', color: '#00BFFF', lat: 70, lng: 0, region: 'Arctic fringe, Tundra, Antarctica coast' },
      { band: '< 0°C', color: '#0000CC', lat: -80, lng: 0, region: 'Antarctica interior, Greenland interior' }
    ],

    // ── MONSOON SYSTEMS OF WORLD ──
    monsoonSystems: [
      {
        name: 'Asian (Indian) Monsoon',
        color: '#FF6347',
        region: 'South & SE Asia',
        center: [20, 80],
        arrows: [[[5, 65], [15, 73]], [[5, 80], [15, 82]], [[5, 90], [20, 88]]],
        mechanism: 'Differential heating of land & sea. ITCZ shifts N in summer. SE trades cross equator → SW monsoon.',
        season: 'June-September (SW Monsoon)',
        upsc: 'Strongest monsoon globally. Affects 60% of world population. ENSO significantly modulates it. Break & active phases. Indian agriculture = monsoon dependent.'
      },
      {
        name: 'West African Monsoon',
        color: '#00CC88',
        region: 'West Africa (Guinea to Sahel)',
        center: [10, -5],
        arrows: [[[0, -15], [10, -10]], [[0, -5], [12, -3]], [[0, 5], [10, 5]]],
        mechanism: 'ITCZ moves northward in boreal summer. Moist S Atlantic air replaces dry Harmattan.',
        season: 'June-October',
        upsc: 'Controls Sahel rainfall. Failure → famine. Desertification linkage. Lake Chad drying connected to monsoon weakening.'
      },
      {
        name: 'Australian Monsoon',
        color: '#FFD700',
        region: 'Northern Australia, Indonesia',
        center: [-15, 135],
        arrows: [[[-5, 120], [-15, 130]], [[-5, 135], [-18, 140]], [[-5, 145], [-15, 145]]],
        mechanism: 'ITCZ shifts S in austral summer (Dec-Feb). NW monsoon brings rain to N Australia.',
        season: 'December-March (Austral summer)',
        upsc: 'Weaker than Asian monsoon. Darwin is gateway. Tropical cyclones during this season. Aboriginal knowledge of "wet" and "dry" seasons.'
      },
      {
        name: 'North American Monsoon',
        color: '#8B5CF6',
        region: 'SW USA, NW Mexico',
        center: [28, -110],
        arrows: [[[20, -115], [30, -110]], [[22, -108], [32, -108]]],
        mechanism: 'Heated Sonoran Desert → low pressure → draws Gulf of Mexico moisture.',
        season: 'July-September',
        upsc: 'Also called Arizona Monsoon or Mexican Monsoon. Weak compared to Asian. Flash floods. Thunderstorms.'
      },
      {
        name: 'East Asian Monsoon',
        color: '#00BFFF',
        region: 'China, Japan, Korea',
        center: [30, 118],
        arrows: [[[10, 115], [25, 118]], [[15, 125], [30, 125]], [[20, 130], [35, 130]]],
        mechanism: 'Pacific high sends moist air → frontal rain (Meiyu/Baiu front). ITCZ + Jet Stream interaction.',
        season: 'May-September',
        upsc: 'Meiyu (China) / Baiu (Japan) / Jangma (Korea) front. Stationary front → prolonged rain. Typhoons in summer-autumn.'
      }
    ],

    // ── OCEAN CURRENTS ──
    oceanCurrents: {
      warm: [
        { name: 'Gulf Stream', from: [25, -80], to: [50, -25], color: '#FF4500', path: [[25, -80], [30, -75], [35, -65], [40, -50], [45, -35], [50, -25]], upsc: 'Strongest ocean current. Warms W Europe 5-10°C above latitude average. London same latitude as Labrador but 15°C warmer in winter. Thermohaline driven.' },
        { name: 'North Atlantic Drift', from: [50, -25], to: [60, -5], color: '#FF6347', path: [[50, -25], [55, -15], [60, -5]], upsc: 'Continuation of Gulf Stream. Keeps N Europe ice-free. Norway coast navigable year-round unlike Labrador.' },
        { name: 'Kuroshio Current', from: [15, 125], to: [35, 145], color: '#FF8C00', path: [[15, 125], [20, 128], [25, 135], [30, 140], [35, 145]], upsc: 'Pacific equivalent of Gulf Stream. Warms Japan. "Black Stream" (Japanese). Fishing grounds where it meets cold Oyashio.' },
        { name: 'Brazilian Current', from: [-5, -35], to: [-35, -50], color: '#FFA500', path: [[-5, -35], [-15, -38], [-25, -45], [-35, -50]], upsc: 'Warm current along Brazil coast. Weaker than Gulf Stream. Meets cold Falkland current.' },
        { name: 'Mozambique Current (Agulhas)', from: [-15, 40], to: [-35, 30], color: '#FFD700', path: [[-15, 40], [-25, 35], [-35, 30]], upsc: 'Warm current along SE Africa. Becomes Agulhas current. One of fastest ocean currents. Carries Indian Ocean water to Atlantic.' },
        { name: 'East Australian Current', from: [-15, 155], to: [-40, 155], color: '#FF69B4', path: [[-15, 155], [-25, 155], [-35, 153], [-40, 155]], upsc: 'Warm current. "Finding Nemo" current. Carries tropical marine life southward. Weaker than Gulf Stream.' },
        { name: 'North Equatorial Current', from: [10, 130], to: [10, -80], color: '#FF7F50', path: [[10, 130], [10, 100], [10, 60], [10, 0], [10, -40], [10, -80]], upsc: 'Trade wind driven. Flows westward. Splits at continents into warm poleward currents.' },
        { name: 'Equatorial Counter Current', from: [5, -80], to: [5, 130], color: '#DDA0DD', path: [[5, -80], [5, -40], [5, 0], [5, 60], [5, 100], [5, 130]], upsc: 'Flows EASTWARD against trade winds. Between N & S equatorial currents. Returns water piled up in west.' }
      ],
      cold: [
        { name: 'Labrador Current', from: [60, -55], to: [40, -55], color: '#4169E1', path: [[60, -55], [55, -55], [50, -55], [45, -55], [40, -55]], upsc: 'Brings icebergs south (Titanic!). Meets Gulf Stream → Grand Banks fog. Rich fishing grounds at convergence.' },
        { name: 'Canary Current', from: [35, -15], to: [15, -20], color: '#00BFFF', path: [[35, -15], [30, -15], [25, -18], [20, -18], [15, -20]], upsc: 'Cool current along NW Africa. Sahara coast desert enhanced by cold current (no evaporation = no rain). Upwelling.' },
        { name: 'Benguela Current', from: [-15, 12], to: [-35, 18], color: '#1E90FF', path: [[-35, 18], [-30, 15], [-25, 13], [-20, 12], [-15, 12]], upsc: 'Cold current along SW Africa. Creates Namib Desert. Rich fishing. Upwelling (nutrients from deep). Cold current + hot land = fog (Skeleton Coast).' },
        { name: 'Humboldt (Peru) Current', from: [-5, -82], to: [-45, -75], color: '#0000CD', path: [[-45, -75], [-35, -73], [-25, -72], [-15, -78], [-5, -82]], upsc: 'Coldest ocean current. Creates Atacama Desert (driest on Earth). Rich fishing (anchoveta). El Niño disrupts it → fish die, rain in Peru, drought in India.' },
        { name: 'Oyashio Current', from: [55, 165], to: [40, 150], color: '#4682B4', path: [[55, 165], [50, 158], [45, 152], [40, 150]], upsc: 'Cold current off NE Japan. Meets warm Kuroshio → world\'s richest fishing grounds (N Pacific). Fog formation.' },
        { name: 'West Australian Current', from: [-15, 110], to: [-35, 115], color: '#5F9EA0', path: [[-15, 110], [-25, 112], [-35, 115]], upsc: 'Cold current along W Australia. Keeps W Australian coast dry. Perth drier than Sydney despite same latitude.' },
        { name: 'California Current', from: [45, -125], to: [25, -118], color: '#00CED1', path: [[45, -125], [40, -125], [35, -122], [30, -120], [25, -118]], upsc: 'Cold current along W USA. Causes fog (San Francisco famous fog). Upwelling → rich fishing. Kelp forests.' },
        { name: 'Falkland (Malvinas) Current', from: [-55, -55], to: [-35, -55], color: '#6495ED', path: [[-55, -55], [-50, -55], [-45, -55], [-40, -55], [-35, -55]], upsc: 'Cold current from Antarctic. Meets warm Brazilian current → mixing zone. Falkland Islands fishing.' }
      ]
    },

    // ── WIND SYSTEMS ──
    windSystems: [
      { name: 'NE Trade Winds', latRange: '0°-30°N', direction: 'NE → SW', color: '#FF6347', arrows: [[[25, -30], [10, -45]], [[25, 50], [10, 35]], [[25, 130], [10, 115]]], upsc: 'Coriolis deflection of air from subtropical high to equatorial low. Carry moisture. Dry on eastern continental margins → deserts (Sahara, Arabian).' },
      { name: 'SE Trade Winds', latRange: '0°-30°S', direction: 'SE → NW', color: '#FF8C00', arrows: [[[-25, -30], [-10, -45]], [[-25, 50], [-10, 35]], [[-25, 130], [-10, 115]]], upsc: 'Southern hemisphere trade winds. Cross equator and become SW Monsoon (Indian Ocean). Drive Pacific equatorial currents westward.' },
      { name: 'Westerlies', latRange: '30°-60° (both hemispheres)', direction: 'SW → NE (N) / NW → SE (S)', color: '#00BFFF', arrows: [[[45, -80], [50, -40]], [[45, 0], [50, 40]], [[-45, -80], [-50, -40]]], upsc: 'Strongest in Southern Hemisphere ("Roaring Forties", "Furious Fifties"). Carry frontal cyclones → mid-latitude rainfall. W Europe rainfall from Westerlies.' },
      { name: 'Polar Easterlies', latRange: '60°-90° (both)', direction: 'NE → SW (N) / SE → NW (S)', color: '#9370DB', arrows: [[[75, -30], [65, -50]], [[75, 90], [65, 70]]], upsc: 'Cold, dry winds from poles. Polar front where they meet Westerlies → cyclogenesis. Weak winds. Limited extent.' },
      { name: 'Jet Streams', latRange: '~30° & ~60°', direction: 'W → E (upper troposphere)', color: '#FFD700', arrows: [[[30, -120], [30, -60], [30, 0], [30, 60], [30, 120]]], upsc: 'Subtropical Jet (STJ) at ~30°: drives western disturbances to India in winter. Tropical Easterly Jet (TEJ) at ~15°N in summer: drives Indian SW monsoon.' }
    ],

    // ── PRESSURE BELTS ──
    pressureBelts: [
      { name: 'Equatorial Low (ITCZ / Doldrums)', lat: 0, color: '#FF0000', type: 'Low Pressure', upsc: 'Inter-Tropical Convergence Zone. Trade winds converge here. Calm winds (doldrums). Heavy convectional rain. Shifts N/S seasonally → monsoon.' },
      { name: 'Subtropical High (Horse Latitudes)', lat: 30, color: '#0000FF', type: 'High Pressure', upsc: 'Descending arm of Hadley Cell. Clear skies, calm. World\'s deserts located here (Sahara, Arabian, Thar, Australian). Trade winds blow OUT from here.' },
      { name: 'Subpolar Low', lat: 60, color: '#FF00FF', type: 'Low Pressure', upsc: 'Polar front — warm Westerlies meet cold Polar Easterlies. Cyclogenesis. Mid-latitude cyclones form here. Variable, stormy weather.' },
      { name: 'Polar High', lat: 90, color: '#00BFFF', type: 'High Pressure', upsc: 'Extremely cold, dense air sinking. Dry. Antarctic high = coldest place on Earth (-89.2°C Vostok). Polar Easterlies blow OUT from here.' }
    ],

    // ── CYCLONE BASINS ──
    cycloneBasins: [
      { name: 'North Atlantic (Hurricanes)', center: [20, -60], color: '#FF4444', season: 'June-November', strongest: 'Hurricane Katrina (2005), Maria (2017), Dorian (2019)', upsc: 'Called Hurricanes. Saffir-Simpson scale (Cat 1-5). NOAA monitors. Climate change → more Category 4-5 storms.' },
      { name: 'NE Pacific (Hurricanes)', center: [15, -115], color: '#FF6600', season: 'May-November', strongest: 'Patricia (2015) — strongest Western Hemisphere hurricane', upsc: 'Called Hurricanes. Fewer landfalls than Atlantic. Mexico coast affected.' },
      { name: 'NW Pacific (Typhoons)', center: [15, 140], color: '#FF8800', season: 'Year-round (peak Jul-Oct)', strongest: 'Typhoon Haiyan (2013) — 315 km/h, Philippines', upsc: 'Called Typhoons. MOST ACTIVE basin — 26 storms/year average. Philippines, Japan, China, Taiwan. Typhoon = Tai-Fung (Chinese: "Great Wind").' },
      { name: 'North Indian Ocean (Cyclones)', center: [15, 85], color: '#FFAA00', season: 'Apr-Jun & Oct-Dec (bimodal)', strongest: 'Bhola (1970) — 500,000 deaths (Bangladesh). Amphan (2020)', upsc: 'Called Cyclones. Bay of Bengal: 80% of Indian cyclones. Arabian Sea: increasing due to warming. IMD tracks. India naming system with 13 countries.' },
      { name: 'South Indian Ocean', center: [-15, 70], color: '#CC6600', season: 'November-April', strongest: 'Cyclone Idai (2019) — Mozambique', upsc: 'Less documented. Madagascar, Mozambique, Mauritius affected. Increasing intensity with Indian Ocean warming.' },
      { name: 'SW Pacific (Cyclones)', center: [-18, 165], color: '#888800', season: 'November-April', strongest: 'Cyclone Winston (2016) — Fiji', upsc: 'Called Cyclones. Australia, Fiji, Vanuatu, NZ. Climate change → more intense events. Pacific Island nations most vulnerable.' }
    ],

    // ── EL NIÑO / LA NIÑA ──
    elNinoLaNina: {
      elNino: {
        name: 'El Niño (Warm Phase)',
        color: '#FF4500',
        pacificTemp: 'Warmer than normal in Eastern Pacific (Peru coast)',
        walkerCirculation: 'Weakened or reversed',
        impacts: [
          { region: 'India', impact: 'Weak/deficient monsoon. Drought risk in India.', lat: 22, lng: 78 },
          { region: 'Peru/Ecuador', impact: 'Heavy rainfall, flooding. Fishing collapses (anchoveta die).', lat: -5, lng: -80 },
          { region: 'Australia', impact: 'Drought, bushfires. 2019 Black Summer fires linked.', lat: -25, lng: 135 },
          { region: 'Indonesia', impact: 'Drought, forest fires (1997-98 worst). Haze crisis.', lat: -2, lng: 115 },
          { region: 'E Africa', impact: 'Increased rainfall. Flooding.', lat: 0, lng: 35 },
          { region: 'S USA', impact: 'Increased rainfall, especially California (atmospheric rivers).', lat: 32, lng: -115 },
          { region: 'NW Pacific', impact: 'Fewer typhoons. Shifted eastward.', lat: 15, lng: 160 }
        ],
        upsc: 'El Niño = "The Boy Child" (Christ Child — appears around Christmas). SST rises >0.5°C in Niño 3.4 region (5°S-5°N, 120°W-170°W) for 5+ consecutive overlapping 3-month periods. Walker Circulation weakens → trade winds weaken → warm water sloshes east.'
      },
      laNina: {
        name: 'La Niña (Cool Phase)',
        color: '#0000CD',
        pacificTemp: 'Cooler than normal in Eastern Pacific',
        walkerCirculation: 'Strengthened',
        impacts: [
          { region: 'India', impact: 'Strong/excess monsoon. Flooding risk.', lat: 22, lng: 78 },
          { region: 'Australia', impact: 'Above-normal rainfall. Flooding. 2022 floods.', lat: -25, lng: 135 },
          { region: 'Indonesia/Malaysia', impact: 'Heavy rain, flooding.', lat: -2, lng: 115 },
          { region: 'Peru/Ecuador', impact: 'Drought. Cold water upwelling — fishing better.', lat: -5, lng: -80 },
          { region: 'S USA', impact: 'Drought in south. Cold in north.', lat: 32, lng: -95 },
          { region: 'NW Pacific', impact: 'More typhoons. Shifted westward.', lat: 15, lng: 130 }
        ],
        upsc: 'La Niña = "The Girl Child". Opposite of El Niño. Strong trade winds → cold upwelling intensifies in East Pacific. Usually GOOD for Indian monsoon. Can cause flooding. IOD (Indian Ocean Dipole) also interacts.'
      },
      iod: {
        name: 'Indian Ocean Dipole (IOD)',
        positive: 'Warm W Indian Ocean + Cool E Indian Ocean → MORE rain for India',
        negative: 'Cool W + Warm E → LESS rain for India',
        upsc: 'Positive IOD = good monsoon (supplements El Niño deficit sometimes). Negative IOD = drought risk. Saji (1999) discovered IOD. Independent of ENSO but interacts.'
      }
    },

    // ── GLOBAL WARMING IMPACTS ──
    globalWarming: {
      temperatureRise: [
        { region: 'Arctic', lat: 75, lng: 0, rise: '+3-4°C since 1900', impact: 'Sea ice loss 13%/decade. Polar bears. NW Passage opening.' },
        { region: 'Central Asia', lat: 45, lng: 70, rise: '+2-3°C', impact: 'Glacier retreat. Aral Sea drying. Water scarcity.' },
        { region: 'South Asia', lat: 25, lng: 78, rise: '+0.7°C', impact: 'Monsoon disruption. Heat waves. Glacier retreat. Agriculture.' },
        { region: 'Sahel Africa', lat: 13, lng: 5, rise: '+1.5°C', impact: 'Desertification. Lake Chad 90% shrunk. Food insecurity.' },
        { region: 'Small Islands', lat: -5, lng: 170, rise: '+1°C + SLR', impact: 'Existential threat. Tuvalu, Kiribati, Maldives may disappear.' },
        { region: 'Antarctica', lat: -70, lng: 0, rise: '+2°C (W Antarctica)', impact: 'Ice sheet collapse risk. Thwaites "Doomsday Glacier". Penguin habitat loss.' }
      ],
      seaLevelRise: { current: '3.7 mm/yr (accelerating)', projected2100: '0.3-1.0 m (IPCC AR6)', worst: 'If all ice melts: +60m+' },
      arcticIce: { loss: '13%/decade since 1979', projected: 'Ice-free Arctic summers by 2040-2050', upsc: 'Arctic amplification: warming 2-3x faster than global average' }
    },

    // ── WORLD BIOMES ──
    biomes: [
      { name: 'Tropical Rainforest', color: '#006400', lat: 0, lng: -60, area: '17 million sq km', rainfall: '>2000mm', temp: '25-28°C', upsc: 'Highest biodiversity. 50% of world species. Amazon, Congo, SE Asia. Carbon sink. Deforestation = 15% of CO₂ emissions. Slash & burn farming. Epiphytes, canopy layers.' },
      { name: 'Tropical Savanna / Grassland', color: '#90EE90', lat: 8, lng: 30, area: '20 million sq km', rainfall: '500-1500mm', temp: '20-30°C', upsc: 'Grass with scattered trees. Serengeti, Masai Mara. Seasonal fires. Herbivore megafauna. Elephant, giraffe, zebra. Laterite soils.' },
      { name: 'Hot Desert', color: '#F4A460', lat: 25, lng: 10, area: '36 million sq km', rainfall: '<250mm', temp: 'Extreme (55°C to -10°C diurnal)', upsc: 'Sahara largest hot desert. Xerophytes, CAM plants. Oasis agriculture. Wadis. Nomadic pastoralism. Growing due to climate change.' },
      { name: 'Mediterranean / Chaparral', color: '#BDB76B', lat: 35, lng: 15, area: '3.4 million sq km', rainfall: '400-900mm', temp: 'Hot dry summer, mild wet winter', upsc: 'Fire-adapted. Maquis/Garrigue. Olives, grapes, citrus, cork. California fires. Tourism economy. Water scarcity.' },
      { name: 'Temperate Deciduous Forest', color: '#228B22', lat: 45, lng: -80, area: '10 million sq km', rainfall: '750-1500mm', temp: '10-20°C avg', upsc: 'Four distinct seasons. Oak, maple, beech, elm. Autumn leaf shedding. E USA, W Europe, E China. Rich soil (brown earth). Heavily cleared for agriculture.' },
      { name: 'Temperate Grassland', color: '#9ACD32', lat: 40, lng: -100, area: '9 million sq km', rainfall: '250-750mm', temp: 'Hot summers, cold winters', upsc: 'Prairies (N America), Pampas (S America), Steppe (Eurasia), Veldt (S Africa), Downs (Australia). Chernozem (black earth) = world\'s most fertile soil. Wheat belt.' },
      { name: 'Boreal Forest (Taiga)', color: '#2E8B57', lat: 58, lng: 90, area: '17 million sq km', rainfall: '200-750mm', temp: '-40 to 20°C', upsc: 'LARGEST terrestrial biome. Coniferous: pine, spruce, fir, larch. Permafrost on N fringe. Paper, timber. Carbon sink (equal to tropical forests). Russia, Canada, Scandinavia.' },
      { name: 'Tundra', color: '#9370DB', lat: 70, lng: -30, area: '8 million sq km', rainfall: '<250mm', temp: '-34 to 10°C', upsc: 'Permafrost — ground permanently frozen below surface. Lichens, mosses, sedges. No trees. Caribou, polar bear, arctic fox. Climate change → permafrost thaw → methane release (positive feedback).' },
      { name: 'Mangrove', color: '#3CB371', lat: 5, lng: 80, area: '0.15 million sq km', rainfall: 'Coastal (tidal)', temp: 'Tropical/subtropical', upsc: 'Salt-tolerant. Pneumatophores. Stilt roots. Fish nursery. Coastal protection. Carbon sequestration (Blue Carbon). Sundarbans largest. Threatened by aquaculture & development.' }
    ]
  };


  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 12 MAPS
  // ══════════════════════════════════════════════════════════════

  const WORLD_CLIMATE_MAPS = [

    // MAP 073 — World Climate Zones
    {
      mapNum: 73,
      title: 'World Climate Zones (Koppen Classification)',
      subtitle: 'All Climate Types · Global Distribution · Color Coded',
      mapConfig: { center: [20, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Koppen Zones', items: DATA.worldClimateZones.map(z => ({ color: z.color, label: `${z.code} — ${z.name}` })) }],
      info: [{ title: 'KOPPEN SYSTEM', facts: DATA.worldClimateZones.slice(0, 6).map(z => ({ label: z.code, value: z.upsc.substring(0, 70) + '...' })) }, { title: 'UPSC KEY', items: ['Koppen: based on TEMPERATURE & PRECIPITATION', 'A = Tropical, B = Dry, C = Temperate, D = Continental, E = Polar', 'Thornthwaite: based on EVAPOTRANSPIRATION (alternative system)', 'India has: Am (W coast), Aw (Deccan), BWh (Thar), Cwa (Gangetic), Dfc (Himalaya)'] }],
      render(map, app) {
        DATA.worldClimateZones.forEach(z => {
          const circle = L.circle([z.lat, z.lng], { radius: 1200000, color: z.color, fillColor: z.color, fillOpacity: 0.3, weight: 1.5 });
          circle.bindPopup(app.buildPopup(`${z.code}: ${z.name}`, `<b>Temp:</b> ${z.temp}<br><b>Rain:</b> ${z.rain}<br><b>Regions:</b> ${z.regions}<br><b>UPSC:</b> ${z.upsc}`, [z.code]));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([z.lat + 5, z.lng], `${z.code}\n${z.name}`, z.color, '9px'));
        });
      }
    },

    // MAP 074 — World Rainfall
    {
      mapNum: 74,
      title: 'World Rainfall Map',
      subtitle: 'Annual Precipitation · High to Low Zones',
      mapConfig: { center: [15, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Rainfall Zones', items: DATA.worldRainfall.map(z => ({ color: z.color, label: z.zone })) }],
      info: [{ title: 'GLOBAL RAINFALL PATTERN', items: ['Equatorial: >2000mm (ITCZ convection)', 'Monsoon: 1000-3000mm (seasonal)', 'Temperate: 750-1500mm (frontal cyclonic)', 'Desert: <250mm (subtropical high + rain shadow)', 'Polar: <250mm (cold air = low moisture)', 'Wettest: Mawsynram 11,871mm/yr; Cherrapunji 11,777mm', 'Driest: Atacama (Chile) 0.76mm/yr average'] }],
      render(map, app) {
        DATA.worldRainfall.forEach(z => {
          const circle = L.circle([z.lat, z.lng], { radius: 1500000, color: z.color, fillColor: z.color, fillOpacity: 0.3, weight: 1.5 });
          circle.bindPopup(app.buildPopup(`☔ ${z.zone}`, `<b>Regions:</b> ${z.regions}<br><b>UPSC:</b> ${z.upsc}`, ['Rainfall']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([z.lat + 5, z.lng], z.zone, z.color, '9px'));
        });
      }
    },

    // MAP 075 — World Temperature (January)
    {
      mapNum: 75,
      title: 'World Temperature Map (January)',
      subtitle: 'Global Isotherms · Cold vs Warm Zones in Northern Winter',
      mapConfig: { center: [25, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'January Temps', items: DATA.worldTempJanuary.map(t => ({ color: t.color, label: t.band })) }],
      info: [{ title: 'JANUARY ISOTHERMS', items: ['January = Northern Hemisphere winter, Southern Hemisphere summer', 'Southern Hemisphere warmer (more ocean = moderating)', 'Isotherms follow latitude over oceans, bend over continents (continentality)', 'Verkhoyansk/Oymyakon: -50 to -68°C (coldest inhabited places)', 'Thermal equator shifts SOUTH in January (near 0° or slightly south)'] }],
      render(map, app) {
        DATA.worldTempJanuary.forEach(t => {
          const circle = L.circle([t.lat, t.lng], { radius: 1200000, color: t.color, fillColor: t.color, fillOpacity: 0.3, weight: 1.5 });
          circle.bindPopup(app.buildPopup(`🌡 ${t.band}`, `<b>Region:</b> ${t.region}`, ['January Temp']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([t.lat + 4, t.lng], `${t.band}\n${t.region.substring(0, 30)}`, t.color, '8px'));
        });
      }
    },

    // MAP 076 — World Temperature (July)
    {
      mapNum: 76,
      title: 'World Temperature Map (July)',
      subtitle: 'Global Isotherms · Northern Summer · Heat Zones',
      mapConfig: { center: [25, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'July Temps', items: DATA.worldTempJuly.map(t => ({ color: t.color, label: t.band })) }],
      info: [{ title: 'JULY ISOTHERMS', items: ['July = Northern Hemisphere summer', 'Thermal equator shifts NORTH (to ~20°N over continents)', 'Sahara, Arabian, Thar: >45°C. Hottest on Earth.', 'Isotherms bend northward over continents (hotter than ocean at same latitude)', 'Southern Hemisphere: moderate (more ocean). Australia cool (winter).', 'Antarctica interior: -40 to -60°C even in July'] }],
      render(map, app) {
        DATA.worldTempJuly.forEach(t => {
          const circle = L.circle([t.lat, t.lng], { radius: 1200000, color: t.color, fillColor: t.color, fillOpacity: 0.3, weight: 1.5 });
          circle.bindPopup(app.buildPopup(`🌡 ${t.band}`, `<b>Region:</b> ${t.region}`, ['July Temp']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([t.lat + 4, t.lng], `${t.band}\n${t.region.substring(0, 30)}`, t.color, '8px'));
        });
      }
    },

    // MAP 077 — Monsoon Systems of World
    {
      mapNum: 77,
      title: 'Monsoon Systems of the World',
      subtitle: 'Asian · West African · Australian · N American · East Asian',
      mapConfig: { center: [15, 60], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Global Monsoons', items: DATA.monsoonSystems.map(m => ({ line: m.color, label: m.name })) }],
      info: [{ title: 'MONSOON COMPARISON', facts: DATA.monsoonSystems.map(m => ({ label: m.name, value: `${m.season} | ${m.region}` })) }, { title: 'UPSC KEY', items: ['Indian Monsoon: STRONGEST globally. Affects 60% of world pop.', 'ITCZ position = key driver for all monsoons', 'East Asian: Meiyu/Baiu front. Different mechanism than Indian.', 'Australian: weaker. NW monsoon (Dec-Mar).', 'West African: Sahel dependent. Failure = famine.'] }],
      render(map, app) {
        DATA.monsoonSystems.forEach(m => {
          const circle = L.circle(m.center, { radius: 1500000, color: m.color, fillColor: m.color, fillOpacity: 0.15, weight: 2 });
          circle.bindPopup(app.buildPopup(`🌧 ${m.name}`, `<b>Region:</b> ${m.region}<br><b>Season:</b> ${m.season}<br><b>Mechanism:</b> ${m.mechanism}<br><b>UPSC:</b> ${m.upsc}`, ['Monsoon']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([m.center[0] + 3, m.center[1]], `${m.name}\n(${m.season})`, m.color, '10px'));

          m.arrows.forEach(a => {
            const line = L.polyline(a, { color: m.color, weight: 2.5, opacity: 0.7 });
            app.addLayer(line);
          });
        });
      }
    },

    // MAP 078 — Ocean Currents
    {
      mapNum: 78,
      title: 'Ocean Currents World Map',
      subtitle: 'Warm & Cold Currents · Gyres · Named Currents',
      mapConfig: { center: [15, 0], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Currents', items: [{ line: '#FF4500', label: '🔴 Warm Currents' }, { line: '#4169E1', label: '🔵 Cold Currents' }] }],
      info: [{ title: 'OCEAN CURRENTS — UPSC KEY', items: ['Warm current → coastal areas get MORE rainfall (e.g., W Europe from Gulf Stream)', 'Cold current → coastal areas get LESS rainfall (deserts form: Namib, Atacama, Sahara coast)', 'Warm + Cold meeting → FOG + RICH fishing (Grand Banks, Hokkaido)', 'Gyres: clockwise in N Hemisphere, counterclockwise in S Hemisphere (Coriolis)', 'Gulf Stream transfers 100x more water than all rivers combined', 'Humboldt Current disruption = El Niño event', 'Thermohaline circulation (Global Conveyor Belt) — deep water movement driven by density (temp + salinity)'] }],
      render(map, app) {
        DATA.oceanCurrents.warm.forEach(c => {
          const line = L.polyline(c.path, { color: c.color, weight: 3, opacity: 0.75 });
          line.bindPopup(app.buildPopup(`🔴 ${c.name} (Warm)`, c.upsc, ['Warm Current']));
          app.addLayer(line);
          const mid = c.path[Math.floor(c.path.length / 2)];
          app.addLayer(app.labelMarker([mid[0] + 2, mid[1]], c.name, c.color, '8px'));
        });

        DATA.oceanCurrents.cold.forEach(c => {
          const line = L.polyline(c.path, { color: c.color, weight: 3, opacity: 0.75 });
          line.bindPopup(app.buildPopup(`🔵 ${c.name} (Cold)`, c.upsc, ['Cold Current']));
          app.addLayer(line);
          const mid = c.path[Math.floor(c.path.length / 2)];
          app.addLayer(app.labelMarker([mid[0] - 2, mid[1]], c.name, c.color, '8px'));
        });
      }
    },

    // MAP 079 — Wind Systems
    {
      mapNum: 79,
      title: 'Wind Systems World Map',
      subtitle: 'Trade Winds · Westerlies · Polar Easterlies · Jet Streams',
      mapConfig: { center: [20, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Wind Belts', items: DATA.windSystems.map(w => ({ line: w.color, label: `${w.name} (${w.latRange})` })) }],
      info: [{ title: 'GLOBAL WIND PATTERN', items: ['Trade Winds: 0-30° — most consistent winds. Named because they aided trade ships.', 'Westerlies: 30-60° — carry frontal cyclones. W Europe rainfall.', 'Polar Easterlies: 60-90° — cold dry. Polar front at 60°.', 'Jet Streams: high altitude (9-12km), 150-300 km/h', 'STJ at ~30°: drives Western Disturbances to India winter', 'TEJ at ~15°N summer: drives Indian monsoon. Somali Jet.', 'Ferrel Cell, Hadley Cell, Polar Cell — 3 atmospheric circulation cells'] }],
      render(map, app) {
        DATA.windSystems.forEach(w => {
          w.arrows.forEach(a => {
            const line = L.polyline(a, { color: w.color, weight: 2.5, opacity: 0.7 });
            line.bindPopup(app.buildPopup(`🌬 ${w.name}`, `<b>Lat:</b> ${w.latRange}<br><b>Direction:</b> ${w.direction}<br><b>UPSC:</b> ${w.upsc}`, ['Wind']));
            app.addLayer(line);
          });
          const midLat = parseInt(w.latRange);
          app.addLayer(app.labelMarker([midLat, w.arrows[0][0][1] + 20], `${w.name}\n(${w.direction})`, w.color, '9px'));
        });

        // Lat labels
        [0, 30, 60, 90, -30, -60].forEach(lat => {
          app.addLayer(app.labelMarker([lat, -170], `${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'}`, '#888', '8px'));
        });
      }
    },

    // MAP 080 — Pressure Belts
    {
      mapNum: 80,
      title: 'Pressure Belts World Map',
      subtitle: 'ITCZ · Subtropical High · Subpolar Low · Polar High · Seasonal Shift',
      mapConfig: { center: [25, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Pressure Belts', items: DATA.pressureBelts.map(p => ({ line: p.color, label: `${p.name} (~${p.lat}°)` })) }],
      info: [{ title: 'PRESSURE BELTS & CELLS', items: ['ITCZ (0°): Convergence → uplift → clouds → rain. Doldrums (calm).', 'Subtropical High (30°): Descending air → clear skies → DESERTS.', 'Subpolar Low (60°): Polar front → cyclones → stormy.', 'Polar High (90°): Dense cold air → sinking → dry.', 'Hadley Cell: 0-30° (strongest, most consistent)', 'Ferrel Cell: 30-60° (mid-latitude, indirect)', 'Polar Cell: 60-90° (weakest)', 'All belts SHIFT 5-10° N in July (summer) and S in January (winter) → MONSOON'] }],
      render(map, app) {
        DATA.pressureBelts.forEach(p => {
          // Draw belt lines
          [p.lat, -p.lat].forEach(lat => {
            if (lat === 0 && p.lat === 0) {
              const line = L.polyline([[0, -180], [0, 180]], { color: p.color, weight: 3, dashArray: '8,4', opacity: 0.7 });
              line.bindPopup(app.buildPopup(`${p.type}: ${p.name}`, p.upsc, ['Pressure Belt']));
              app.addLayer(line);
              app.addLayer(app.labelMarker([2, 0], p.name, p.color, '10px'));
            } else if (lat !== 0) {
              const line = L.polyline([[lat, -180], [lat, 180]], { color: p.color, weight: 2.5, dashArray: '8,4', opacity: 0.6 });
              line.bindPopup(app.buildPopup(`${p.type} at ~${Math.abs(lat)}°`, p.upsc, ['Pressure']));
              app.addLayer(line);
              app.addLayer(app.labelMarker([lat + 2, 0], `${p.name}\n(${Math.abs(lat)}°${lat > 0 ? 'N' : 'S'})`, p.color, '9px'));
            }
          });
        });

        // Shift arrows
        const shiftNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #FFD700;
            border-radius:10px;padding:10px;font-size:9px;color:#FFD700;
            max-width:220px;line-height:1.5;font-family:Inter,sans-serif">
            <b>📍 SEASONAL SHIFT</b><br>
            All belts shift 5-10° N in July<br>
            and 5-10° S in January<br>
            → This shift = MONSOON mechanism<br>
            <span style="color:#aaa">ITCZ over India in summer → monsoon</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([35, -150], { icon: shiftNote, interactive: false }));
      }
    },

    // MAP 081 — Cyclone Tracks
    {
      mapNum: 81,
      title: 'Cyclone Tracks World Map',
      subtitle: 'Atlantic Hurricanes · Pacific Typhoons · Indian Cyclones',
      mapConfig: { center: [15, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Cyclone Basins', items: DATA.cycloneBasins.map(c => ({ dot: c.color, label: c.name })) }],
      info: [{ title: 'TROPICAL CYCLONES — GLOBAL', facts: [{ label: 'Total Annual', value: '~80-90 tropical storms globally, ~45 reach hurricane/typhoon strength' }, { label: 'Most Active Basin', value: 'NW Pacific: ~26 storms/yr (Typhoons)' }, { label: 'Deadliest', value: 'Bhola (1970) — 500,000 deaths (Bangladesh)' }, { label: 'Strongest Wind', value: 'Typhoon Tip (1979): 305 km/h sustained' }] }, { title: 'UPSC KEY', items: ['Same phenomenon, different names: Hurricane (Atlantic), Typhoon (Pacific), Cyclone (Indian)', 'Coriolis force → anticlockwise in N Hemisphere, clockwise in S Hemisphere', 'Cannot form within 5° of equator (Coriolis too weak)', 'SST >26.5°C needed for formation. Climate change → warming → more intense storms', 'Eye of storm: calm, clear. Eyewall: most destructive.'] }],
      render(map, app) {
        DATA.cycloneBasins.forEach(basin => {
          const circle = L.circle(basin.center, { radius: 2000000, color: basin.color, fillColor: basin.color, fillOpacity: 0.2, weight: 2 });
          circle.bindPopup(app.buildPopup(`🌀 ${basin.name}`, `<b>Season:</b> ${basin.season}<br><b>Strongest:</b> ${basin.strongest}<br><b>UPSC:</b> ${basin.upsc}`, ['Cyclone Basin']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([basin.center[0] + 5, basin.center[1]], `${basin.name}\n(${basin.season})`, basin.color, '9px'));
        });
      }
    },

    // MAP 082 — El Niño / La Niña
    {
      mapNum: 82,
      title: 'El Niño & La Niña Map',
      subtitle: 'Pacific Temperature · Walker Circulation · Global Impacts · IOD',
      mapConfig: { center: [5, -150], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'ENSO Phases', items: [{ color: '#FF4500', label: 'El Niño (Warm Eastern Pacific)' }, { color: '#0000CD', label: 'La Niña (Cool Eastern Pacific)' }, { dot: '#FFD700', label: 'IOD (Indian Ocean Dipole)' }] }],
      info: [{ title: 'EL NIÑO', items: [`UPSC: ${DATA.elNinoLaNina.elNino.upsc}`] }, { title: 'LA NIÑA', items: [`UPSC: ${DATA.elNinoLaNina.laNina.upsc}`] }, { title: 'IOD', items: [`Positive IOD: ${DATA.elNinoLaNina.iod.positive}`, `Negative IOD: ${DATA.elNinoLaNina.iod.negative}`, DATA.elNinoLaNina.iod.upsc] }],
      render(map, app) {
        // El Niño impacts
        DATA.elNinoLaNina.elNino.impacts.forEach(imp => {
          const m = L.circleMarker([imp.lat, imp.lng], { radius: 10, color: '#000', fillColor: '#FF4500', fillOpacity: 0.8, weight: 2 });
          m.bindPopup(app.buildPopup(`🌡 El Niño → ${imp.region}`, imp.impact, ['El Niño']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([imp.lat + 3, imp.lng], `El Niño:\n${imp.region}`, '#FF4500', '8px'));
        });

        // La Niña impacts
        DATA.elNinoLaNina.laNina.impacts.forEach(imp => {
          const m = L.circleMarker([imp.lat - 5, imp.lng + 5], { radius: 8, color: '#000', fillColor: '#0000CD', fillOpacity: 0.7, weight: 2 });
          m.bindPopup(app.buildPopup(`❄ La Niña → ${imp.region}`, imp.impact, ['La Niña']));
          app.addLayer(m);
        });

        // Niño 3.4 region
        const nino34 = L.rectangle([[-5, -170], [5, -120]], { color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.15, weight: 2, dashArray: '6,4' });
        nino34.bindPopup(app.buildPopup('NIÑO 3.4 Region', 'SST measured here for ENSO classification. >+0.5°C = El Niño. <-0.5°C = La Niña.', ['ENSO']));
        app.addLayer(nino34);
        app.addLayer(app.labelMarker([0, -145], 'NIÑO 3.4\nREGION', '#FFD700', '11px'));

        // Walker Circulation
        const walker = L.polyline([[5, -170], [5, -140], [5, -100], [5, -80]], { color: '#FFFFFF', weight: 2, dashArray: '6,4', opacity: 0.5 });
        walker.bindPopup(app.buildPopup('Walker Circulation', 'East-west atmospheric circulation over Pacific. Weakens in El Niño, strengthens in La Niña.', ['Walker']));
        app.addLayer(walker);
      }
    },

    // MAP 083 — Global Warming Impact
    {
      mapNum: 83,
      title: 'Global Warming Impact Map',
      subtitle: 'Temperature Rise · Sea Level · Arctic Ice · Affected Regions',
      mapConfig: { center: [25, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Warming Severity', items: [{ color: '#FF0000', label: 'Extreme Warming (>3°C)' }, { color: '#FF6347', label: 'High Warming (2-3°C)' }, { color: '#FFA500', label: 'Moderate Warming (1-2°C)' }, { color: '#FFD700', label: 'Below Average Warming' }] }],
      info: [{ title: 'GLOBAL WARMING FACTS', facts: [{ label: 'Current Warming', value: '+1.2°C since pre-industrial (2024)' }, { label: 'Paris Agreement', value: 'Limit warming to 1.5°C (preferably) or 2°C max' }, { label: 'CO₂ Level', value: '424 ppm (2024) — highest in 3 million years' }, { label: 'Sea Level Rise', value: '3.7 mm/yr (accelerating from 1.5 mm/yr in 1990s)' }] }, { title: 'IPCC AR6 KEY POINTS', items: ['1.5°C breach likely in early 2030s', 'Every 0.5°C matters — exponential damage increase', 'Arctic warming 2-3x faster (Arctic Amplification)', 'Permafrost thaw → methane release → positive feedback', 'Ocean acidification → coral reef death (30% already dead)', 'Extreme weather events doubled since 1980', 'Carbon budget for 1.5°C: ~400 Gt CO₂ remaining', 'Net Zero by 2050 needed to stay under 1.5°C globally'] }],
      render(map, app) {
        DATA.globalWarming.temperatureRise.forEach(t => {
          const rise = parseFloat(t.rise);
          let color = '#FFD700';
          if (rise >= 3) color = '#FF0000';
          else if (rise >= 2) color = '#FF6347';
          else if (rise >= 1) color = '#FFA500';

          const circle = L.circle([t.lat, t.lng], { radius: 1500000, color, fillColor: color, fillOpacity: 0.25, weight: 1.5 });
          circle.bindPopup(app.buildPopup(`🌡 ${t.region}`, `<b>Rise:</b> ${t.rise}<br><b>Impact:</b> ${t.impact}`, ['Warming']));
          app.addLayer(circle);
          app.addLayer(app.labelMarker([t.lat + 4, t.lng], `${t.region}\n(${t.rise})`, color, '9px'));
        });

        // Arctic ice loss
        const arctic = L.circle([85, 0], { radius: 2500000, color: '#00BFFF', fillColor: '#00BFFF', fillOpacity: 0.1, weight: 2, dashArray: '6,4' });
        arctic.bindPopup(app.buildPopup('❄ ARCTIC ICE LOSS', `Loss: ${DATA.globalWarming.arcticIce.loss}<br>Projected: ${DATA.globalWarming.arcticIce.projected}<br>${DATA.globalWarming.arcticIce.upsc}`, ['Arctic']));
        app.addLayer(arctic);

        // Sea level note
        const slrNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:2px solid #00BFFF;border-radius:10px;padding:10px;font-size:9px;color:#87CEEB;max-width:230px;line-height:1.5;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🌊 SEA LEVEL RISE</b><br>
            Current: ${DATA.globalWarming.seaLevelRise.current}<br>
            By 2100: ${DATA.globalWarming.seaLevelRise.projected}<br>
            Worst case: ${DATA.globalWarming.seaLevelRise.worst}<br>
            <span style="color:#FF6347">300 million people at risk globally</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([-35, -150], { icon: slrNote, interactive: false }));
      }
    },

    // MAP 084 — Biomes World Map
    {
      mapNum: 84,
      title: 'Biomes World Map',
      subtitle: 'Tropical Rainforest · Savanna · Desert · Taiga · Tundra · All Biomes',
      mapConfig: { center: [15, 30], zoom: 2.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'World Biomes', items: DATA.biomes.map(b => ({ color: b.color, label: b.name })) }],
      info: [{ title: 'BIOMES — UPSC COMPARISON', facts: DATA.biomes.map(b => ({ label: b.name, value: `${b.area} | ${b.rainfall} | ${b.upsc.substring(0, 50)}...` })) }],
      render(map, app) {
        DATA.biomes.forEach(biome => {
          const circle = L.circle([biome.lat, biome.lng], { radius: 1300000, color: biome.color, fillColor: biome.color, fillOpacity: 0.3, weight: 2 });
          circle.bindPopup(app.buildPopup(`🌍 ${biome.name}`, `<b>Area:</b> ${biome.area}<br><b>Rainfall:</b> ${biome.rainfall}<br><b>Temperature:</b> ${biome.temp}<br><b>UPSC:</b> ${biome.upsc}`, ['Biome']));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([biome.lat + 4, biome.lng], `${biome.name}\n(${biome.area})`, biome.color, '9px'));
        });
      }
    }

  ]; // END

  window.registerMaps('world-climate', WORLD_CLIMATE_MAPS);
  console.log('🌍 World Climate Maps: 12 maps registered (MAP 073-084)');

})();
