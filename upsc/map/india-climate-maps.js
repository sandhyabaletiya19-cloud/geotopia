/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — INDIA CLIMATE
 * MAP 023 to MAP 033 | Monsoon · Rainfall · Temperature · Cyclones
 * Droughts · Floods · Western Disturbances · Heat/Cold Waves
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── KOPPEN CLIMATE ZONES OF INDIA ──
    koppenZones: [
      {
        code: 'Am',
        name: 'Tropical Monsoon',
        color: '#0066FF',
        description: 'Heavy monsoon rainfall, short dry season. Western coast, NE India.',
        regions: 'Malabar Coast, Western Ghats, NE states, Andaman',
        coords: [
          [8.5, 76.5], [10, 76.0], [11, 75.5], [12, 75.0],
          [13, 74.5], [14, 74.5], [15, 74.0], [16, 73.8],
          [17, 73.5], [17.5, 73.2], [17.5, 74.5], [16, 75.5],
          [14, 76.0], [12, 76.0], [10, 77.0], [8.5, 77.5], [8.5, 76.5]
        ]
      },
      {
        code: 'Aw',
        name: 'Tropical Savanna (Wet-Dry)',
        color: '#00AA44',
        description: 'Distinct wet & dry seasons. Most of peninsular India.',
        regions: 'Most of Deccan, parts of Gujarat, MP, Maharashtra',
        coords: [
          [22, 73], [22, 78], [22, 82], [21, 84],
          [20, 83], [18, 82], [16, 80.5], [14, 80],
          [12, 80], [10, 79.5], [8.5, 77.5],
          [10, 77.0], [12, 76.0], [14, 76.0],
          [16, 75.5], [17.5, 74.5], [18, 73.5],
          [20, 73], [22, 73]
        ]
      },
      {
        code: 'BSh',
        name: 'Semi-Arid (Hot Steppe)',
        color: '#CC8800',
        description: 'Low rainfall 400-750mm. Rain shadow regions.',
        regions: 'Rain shadow of Western Ghats, parts of Rajasthan, Gujarat, Haryana, Karnataka plateau',
        coords: [
          [28, 72], [27, 74], [26, 75], [25, 75],
          [24, 74.5], [23, 73.5], [22.5, 73],
          [23, 72.5], [24, 72], [25, 71],
          [26, 71], [27, 72], [28, 72]
        ]
      },
      {
        code: 'BWh',
        name: 'Hot Desert (Arid)',
        color: '#FF6600',
        description: 'Very low rainfall <250mm. Extreme heat in summer.',
        regions: 'Thar Desert — Western Rajasthan, parts of Kachchh',
        coords: [
          [27, 70], [28, 72], [27, 72], [26, 71],
          [25, 71], [24, 70], [25, 69],
          [26, 69.5], [27, 70]
        ]
      },
      {
        code: 'Cwa',
        name: 'Humid Subtropical (Dry Winter)',
        color: '#88CC00',
        description: 'Hot summers, mild winters. Bulk of Gangetic plains.',
        regions: 'Most of Northern Plains, UP, Bihar, Jharkhand, WB',
        coords: [
          [30, 76], [28, 78], [27.5, 82], [27, 85],
          [26.5, 88], [25, 90], [23, 88],
          [23, 86], [24, 84], [24, 82],
          [24, 78], [25, 76], [28, 76], [30, 76]
        ]
      },
      {
        code: 'Dfc/ET',
        name: 'Montane / Alpine / Tundra',
        color: '#9966CC',
        description: 'Cold temperatures year-round. Snowfall in winter.',
        regions: 'Higher Himalayas, Ladakh, Sikkim, Arunachal highlands',
        coords: [
          [36, 73], [36, 82], [35, 88], [33, 94],
          [30, 97], [28, 96], [27, 92],
          [27, 88], [28, 84], [29.5, 80],
          [31.5, 77], [34, 75], [36, 73]
        ]
      }
    ],

    // ── SW MONSOON DATA ──
    monsoon: {
      arabianSeaBranch: {
        name: 'Arabian Sea Branch',
        color: '#00BFFF',
        arrows: [
          { from: [8, 72], to: [10, 73], label: 'Arabian Sea' },
          { from: [10, 73], to: [13, 74], label: '' },
          { from: [13, 74], to: [17, 73.5], label: 'Western Ghats' },
          { from: [17, 73.5], to: [20, 73], label: '' },
          { from: [20, 73], to: [23, 72], label: 'Gujarat' },
          { from: [10, 73], to: [10.78, 76.65], label: 'Palakkad Gap entry' },
          { from: [13, 74], to: [15, 76], label: 'Orographic lift' },
          { from: [20, 73], to: [24, 75], label: 'Rajasthan' }
        ]
      },
      bayOfBengalBranch: {
        name: 'Bay of Bengal Branch',
        color: '#FF6347',
        arrows: [
          { from: [10, 88], to: [15, 85], label: 'Bay of Bengal' },
          { from: [15, 85], to: [20, 86], label: 'Odisha, WB' },
          { from: [20, 86], to: [22, 88], label: 'Bengal' },
          { from: [22, 88], to: [25, 90], label: 'Meghalaya, NE' },
          { from: [25, 90], to: [27, 92], label: 'Assam' },
          { from: [20, 86], to: [25, 84], label: 'Bihar' },
          { from: [25, 84], to: [27, 80], label: 'UP' },
          { from: [27, 80], to: [30, 77], label: 'Himalayas deflect' }
        ]
      },
      onsetDates: [
        { date: 'June 1', lat: 8.5, lng: 77.5, label: 'Kerala coast' },
        { date: 'June 5', lat: 10, lng: 76, label: 'Karnataka coast' },
        { date: 'June 10', lat: 15, lng: 74, label: 'Goa, Maharashtra coast' },
        { date: 'June 10', lat: 12, lng: 80, label: 'Tamil Nadu (BoB branch)' },
        { date: 'June 15', lat: 20, lng: 73, label: 'Mumbai' },
        { date: 'June 15', lat: 22, lng: 88, label: 'Kolkata' },
        { date: 'June 20', lat: 25, lng: 85, label: 'Bihar' },
        { date: 'June 25', lat: 28, lng: 77, label: 'Delhi' },
        { date: 'July 1', lat: 30, lng: 76, label: 'Punjab, Haryana' },
        { date: 'July 5', lat: 26, lng: 73, label: 'Rajasthan (parts)' },
        { date: 'July 15', lat: 33, lng: 75, label: 'Kashmir (last to get)' }
      ],
      withdrawalDates: [
        { date: 'Sept 1', lat: 27, lng: 70, label: 'NW Rajasthan (first withdrawal)' },
        { date: 'Sept 15', lat: 28, lng: 77, label: 'Delhi region' },
        { date: 'Oct 1', lat: 25, lng: 82, label: 'Central India' },
        { date: 'Oct 15', lat: 20, lng: 80, label: 'Maharashtra, MP' },
        { date: 'Nov 1', lat: 15, lng: 79, label: 'Andhra Pradesh' },
        { date: 'Nov 15', lat: 10, lng: 78, label: 'Tamil Nadu (NE monsoon starts)' },
        { date: 'Dec 1', lat: 8.5, lng: 77, label: 'Kerala (last withdrawal)' }
      ]
    },

    // ── RAINFALL DISTRIBUTION ──
    rainfallZones: [
      {
        zone: 'Very Heavy (>200 cm)',
        color: '#0000CC',
        areas: [
          { name: 'Mawsynram/Cherrapunji', lat: 25.30, lng: 91.70, rainfall: '1187 cm (Mawsynram highest)', upsc: 'Meghalaya — funnel effect of Khasi Hills traps monsoon moisture' },
          { name: 'Western Ghats (Windward)', lat: 13.5, lng: 74.5, rainfall: '250-500 cm', upsc: 'Orographic rainfall on windward side' },
          { name: 'NE States', lat: 26, lng: 93, rainfall: '200-400 cm', upsc: 'Both BoB branch and orographic effect' },
          { name: 'Andaman & Nicobar', lat: 12, lng: 93, rainfall: '>300 cm', upsc: 'Maritime climate, surrounded by sea' }
        ]
      },
      {
        zone: 'Heavy (100-200 cm)',
        color: '#0088FF',
        areas: [
          { name: 'Western coast (S of Mumbai)', lat: 16, lng: 73.5, rainfall: '100-250 cm', upsc: 'Windward side of W Ghats' },
          { name: 'Sub-Himalayan WB', lat: 27, lng: 88, rainfall: '150-200 cm', upsc: 'Terai belt' },
          { name: 'Assam Valley', lat: 26, lng: 91.5, rainfall: '150-250 cm', upsc: 'Brahmaputra valley — funnel' }
        ]
      },
      {
        zone: 'Moderate (50-100 cm)',
        color: '#66CC00',
        areas: [
          { name: 'Upper Gangetic Plain', lat: 28, lng: 79, rainfall: '50-100 cm', upsc: 'Decreasing from east to west' },
          { name: 'Eastern Deccan', lat: 17, lng: 79, rainfall: '50-100 cm', upsc: 'Moderate rainfall zone' },
          { name: 'Central India', lat: 23, lng: 79, rainfall: '75-150 cm', upsc: 'MP, Chhattisgarh' }
        ]
      },
      {
        zone: 'Low (25-50 cm)',
        color: '#FFCC00',
        areas: [
          { name: 'Western Rajasthan (parts)', lat: 27, lng: 72, rainfall: '25-50 cm', upsc: 'Arid transition zone' },
          { name: 'Rain shadow (Deccan)', lat: 16, lng: 76, rainfall: '30-50 cm', upsc: 'Leeward side of Western Ghats' },
          { name: 'Punjab-Haryana (W)', lat: 30, lng: 75, rainfall: '40-60 cm', upsc: 'Sub-humid transition' }
        ]
      },
      {
        zone: 'Very Low (<25 cm)',
        color: '#FF4400',
        areas: [
          { name: 'Thar Desert', lat: 26, lng: 70, rainfall: '<15 cm', upsc: 'Driest part of India. Jaisalmer: ~10 cm/yr.' },
          { name: 'Ladakh', lat: 34, lng: 77, rainfall: '<10 cm', upsc: 'Cold desert. Rain shadow of Himalayas.' },
          { name: 'Kachchh', lat: 23.5, lng: 69.5, rainfall: '<25 cm', upsc: 'Rann of Kachchh — salt desert' }
        ]
      }
    ],

    // ── CYCLONE TRACKS ──
    cyclones: {
      bayOfBengal: [
        {
          name: 'Bay of Bengal Track — Pre-Monsoon',
          season: 'April-June',
          path: [[8, 88], [10, 87], [12, 86], [14, 84], [16, 83], [18, 83], [20, 85]],
          color: '#FF4444',
          affected: 'Odisha, Andhra Pradesh, West Bengal',
          examples: 'Fani (2019), Amphan (2020), Yaas (2021), Biparjoy (2023)'
        },
        {
          name: 'Bay of Bengal Track — Post-Monsoon',
          season: 'October-December',
          path: [[6, 90], [8, 88], [10, 86], [12, 82], [13.5, 80], [14, 79.5]],
          color: '#FF8800',
          affected: 'Tamil Nadu, Andhra Pradesh, Odisha',
          examples: 'Gaja (2018), Nivar (2020), Cyclone Michaung (2023)'
        },
        {
          name: 'NE Coast Track',
          season: 'Nov-Dec',
          path: [[10, 84], [11, 82], [12.5, 80.5], [13, 80.2]],
          color: '#FF6600',
          affected: 'Tamil Nadu (NE monsoon cyclones)',
          examples: 'Vardah (2016 — Chennai), Mandous (2022)'
        }
      ],
      arabianSea: [
        {
          name: 'Arabian Sea Track',
          season: 'May-June, Oct-Nov',
          path: [[10, 72], [13, 70], [16, 68], [18, 67], [20, 67], [22, 68]],
          color: '#FF00FF',
          affected: 'Gujarat, Maharashtra (rare but increasing)',
          examples: 'Tauktae (2021 — Gujarat), Biparjoy (2023)'
        }
      ],
      mostAffectedStates: [
        { name: 'Odisha', lat: 20.5, lng: 85.5, risk: 'Very High', upsc: 'Super Cyclone 1999 (10,000 deaths). Fani 2019. OSDMA model.' },
        { name: 'Andhra Pradesh', lat: 16, lng: 80, risk: 'Very High', upsc: '1977 cyclone (14,000 deaths). Hudhud 2014.' },
        { name: 'West Bengal', lat: 22.5, lng: 88, risk: 'High', upsc: 'Amphan 2020 (Super cyclone). Sundarbans vulnerable.' },
        { name: 'Tamil Nadu', lat: 11, lng: 79, risk: 'High', upsc: 'Vardah 2016, Gaja 2018. NE monsoon cyclones.' },
        { name: 'Gujarat', lat: 22, lng: 71, risk: 'Moderate-High', upsc: 'Tauktae 2021. Arabian Sea cyclones increasing due to warming.' },
        { name: 'Kerala', lat: 10, lng: 76, risk: 'Low (historically)', upsc: 'Ockhi 2017 surprised — climate change shifting patterns.' }
      ]
    },

    // ── DROUGHT PRONE AREAS ──
    droughtAreas: [
      { name: 'Western Rajasthan', lat: 26, lng: 70, severity: 'Chronic', states: 'Rajasthan', upsc: '<15 cm rainfall. Permanent water scarcity.' },
      { name: 'Kachchh Region', lat: 23.5, lng: 69.5, severity: 'Chronic', states: 'Gujarat', upsc: 'Salt desert. Rann of Kachchh.' },
      { name: 'Telangana-Marathwada', lat: 18, lng: 77, severity: 'Frequent', states: 'Telangana, Maharashtra', upsc: 'Rain shadow. Farmer suicides.' },
      { name: 'Rayalaseema', lat: 15.5, lng: 78, severity: 'Frequent', states: 'Andhra Pradesh', upsc: 'Southern rain shadow of Deccan.' },
      { name: 'N. Karnataka Plateau', lat: 16, lng: 76, severity: 'Frequent', states: 'Karnataka', upsc: 'Leeward side of Western Ghats.' },
      { name: 'Bundelkhand', lat: 25, lng: 79, severity: 'Frequent', states: 'UP, MP', upsc: 'Periodic drought. Distress migration.' },
      { name: 'Vidarbha', lat: 21, lng: 79, severity: 'Moderate', states: 'Maharashtra', upsc: 'Cotton belt. Farmer crisis.' },
      { name: 'Tamil Nadu (rain shadow)', lat: 12, lng: 78, severity: 'Moderate', states: 'Tamil Nadu', upsc: 'Interior TN gets little SW monsoon.' },
      { name: 'Saurashtra', lat: 22, lng: 71, severity: 'Moderate', states: 'Gujarat', upsc: 'Low rainfall zone.' }
    ],

    // ── FLOOD PRONE AREAS ──
    floodAreas: [
      { name: 'North Bihar', lat: 26, lng: 86, severity: 'Very High', rivers: 'Kosi, Gandak, Ghaghra', upsc: 'Kosi = "Sorrow of Bihar". Annual floods. Nepal origin rivers.' },
      { name: 'Assam Valley', lat: 26, lng: 92, severity: 'Very High', rivers: 'Brahmaputra', upsc: 'Annual flooding. 2022 floods worst in decades. Kaziranga submerged.' },
      { name: 'Eastern UP', lat: 26, lng: 83, severity: 'High', rivers: 'Ganga, Ghaghra, Rapti', upsc: 'Flat terrain, heavy monsoon rainfall.' },
      { name: 'West Bengal (Hooghly Delta)', lat: 23, lng: 88, severity: 'High', rivers: 'Ganga, Damodar', upsc: 'Cyclones + river flooding. Sundarbans flooding.' },
      { name: 'Odisha', lat: 20.5, lng: 85, severity: 'High', rivers: 'Mahanadi, Brahmani', upsc: 'Cyclone-driven floods. Hirakud Dam for flood control.' },
      { name: 'Punjab', lat: 31, lng: 75, severity: 'Moderate', rivers: 'Sutlej, Beas', upsc: 'Dam release floods (Bhakra Nangal).' },
      { name: 'Gujarat (coastal)', lat: 22, lng: 72, severity: 'Moderate', rivers: 'Narmada, Tapi', upsc: 'Flash floods. 2006 Surat floods.' },
      { name: 'Kerala', lat: 10, lng: 76, severity: 'Moderate-High', rivers: 'Periyar, Pamba', upsc: '2018 Kerala floods — worst in century. Dam mismanagement.' },
      { name: 'Andhra-Telangana', lat: 17, lng: 79, severity: 'Moderate', rivers: 'Godavari, Krishna', upsc: '2023 floods in Telangana. Cloud bursts.' }
    ],

    // ── TEMPERATURE DATA ──
    temperatureJanuary: [
      { temp: '< 0°C', color: '#8800FF', areas: [{ name: 'Ladakh, Siachen', lat: 34, lng: 77 }, { name: 'Higher Himalayas', lat: 32, lng: 80 }] },
      { temp: '0-10°C', color: '#4400FF', areas: [{ name: 'Kashmir Valley', lat: 34, lng: 75 }, { name: 'Shimla, Himachal', lat: 31, lng: 77 }] },
      { temp: '10-15°C', color: '#00AAFF', areas: [{ name: 'Punjab, Haryana, Delhi', lat: 28.5, lng: 77 }, { name: 'North Rajasthan', lat: 27, lng: 73 }] },
      { temp: '15-20°C', color: '#00CC88', areas: [{ name: 'Central India, MP', lat: 23, lng: 79 }, { name: 'Gujarat', lat: 22, lng: 72 }] },
      { temp: '20-25°C', color: '#FFCC00', areas: [{ name: 'Mumbai, Goa coast', lat: 18, lng: 73 }, { name: 'Tamil Nadu', lat: 11, lng: 79 }] },
      { temp: '25-28°C', color: '#FF8800', areas: [{ name: 'Kerala', lat: 10, lng: 76 }, { name: 'Andaman', lat: 12, lng: 93 }] }
    ],

    temperatureMay: [
      { temp: '> 45°C', color: '#FF0000', areas: [{ name: 'NW Rajasthan (Thar)', lat: 27, lng: 71 }, { name: 'Vidarbha (Nagpur)', lat: 21, lng: 79 }] },
      { temp: '40-45°C', color: '#FF4400', areas: [{ name: 'Rajasthan, Gujarat', lat: 25, lng: 72 }, { name: 'Delhi, Haryana', lat: 28.5, lng: 77 }, { name: 'Central MP', lat: 23, lng: 79 }] },
      { temp: '35-40°C', color: '#FF8800', areas: [{ name: 'UP, Bihar', lat: 26, lng: 83 }, { name: 'Maharashtra interior', lat: 19, lng: 76 }] },
      { temp: '30-35°C', color: '#FFCC00', areas: [{ name: 'WB, Odisha', lat: 22, lng: 87 }, { name: 'TN interior', lat: 12, lng: 78 }] },
      { temp: '20-30°C', color: '#00CC88', areas: [{ name: 'Coastal areas', lat: 15, lng: 74 }, { name: 'NE states', lat: 25, lng: 93 }] },
      { temp: '< 20°C', color: '#8800FF', areas: [{ name: 'Higher Himalayas', lat: 32, lng: 80 }, { name: 'Ladakh', lat: 34, lng: 77 }] }
    ],

    // ── WESTERN DISTURBANCES ──
    westernDisturbances: {
      origin: [40, 35],
      path: [
        { lat: 40, lng: 35, label: 'Mediterranean Sea Origin' },
        { lat: 38, lng: 45, label: 'Over Iran' },
        { lat: 36, lng: 55, label: 'Afghanistan' },
        { lat: 34, lng: 65, label: 'Pakistan' },
        { lat: 33, lng: 74, label: 'Kashmir' },
        { lat: 31, lng: 77, label: 'HP, Uttarakhand' },
        { lat: 29, lng: 78, label: 'Delhi (weakened)' }
      ],
      affectedStates: [
        { name: 'Jammu & Kashmir', lat: 34, lng: 75, rainfall: 'Snowfall + rain', importance: 'Rabi crop moisture. Snowfall for summer rivers.' },
        { name: 'Himachal Pradesh', lat: 31.5, lng: 77, rainfall: 'Snowfall + rain', importance: 'Apple orchards depend on this.' },
        { name: 'Uttarakhand', lat: 30.5, lng: 79, rainfall: 'Snow/rain', importance: 'Glacial recharge. Hill agriculture.' },
        { name: 'Punjab', lat: 31, lng: 75, rainfall: 'Light rain', importance: 'Winter wheat (Rabi crop) moisture.' },
        { name: 'Haryana', lat: 29, lng: 76, rainfall: 'Light rain', importance: 'Wheat growing support.' },
        { name: 'Delhi', lat: 28.6, lng: 77.2, rainfall: 'Light rain', importance: 'Winter rain. Cold waves when strong WD passes.' }
      ]
    }
  };


  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 11 MAPS
  // ══════════════════════════════════════════════════════════════

  const INDIA_CLIMATE_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 023 — Climate Zones of India (Koppen)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 23,
      title: 'Climate Zones of India (Koppen Classification)',
      subtitle: 'Tropical · Semi-Arid · Arid · Humid Subtropical · Montane',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Koppen Climate Types',
          items: DATA.koppenZones.map(z => ({ color: z.color, label: `${z.code} — ${z.name}` }))
        }
      ],
      info: [
        {
          title: 'KOPPEN CLASSIFICATION — INDIA',
          facts: [
            { label: 'Am', value: 'Tropical Monsoon: W Coast, NE. Heavy rain, short dry season.' },
            { label: 'Aw', value: 'Tropical Savanna: Most of Deccan. Wet-dry seasons.' },
            { label: 'BSh', value: 'Semi-Arid Steppe: Rain shadow areas. 400-750mm.' },
            { label: 'BWh', value: 'Hot Desert: Thar. <250mm. Extreme heat.' },
            { label: 'Cwa', value: 'Humid Subtropical: Gangetic plains. Hot summer, cool winter.' },
            { label: 'Dfc/ET', value: 'Montane/Alpine: Higher Himalayas. Snow, cold.' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'India has almost every climate type due to latitude, altitude, proximity to sea',
            'Monsoon is the dominant factor in Indian climate',
            'Western Ghats create rain shadow effect — orographic rainfall',
            'Himalaya blocks cold Central Asian air from entering India',
            'Jet streams (subtropical & tropical easterly) control monsoon onset/withdrawal',
            'ENSO (El Nino/La Nina) significantly affects Indian monsoon'
          ]
        }
      ],
      render(map, app) {
        DATA.koppenZones.forEach(zone => {
          if (zone.coords && zone.coords.length > 0) {
            const poly = L.polygon(zone.coords, {
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.4,
              weight: 2
            });
            poly.bindPopup(app.buildPopup(
              `${zone.code}: ${zone.name}`,
              `<b>Description:</b> ${zone.description}<br><b>Regions:</b> ${zone.regions}`,
              [zone.code, 'Climate']
            ));
            poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.65, weight: 3 }); this.bringToFront(); });
            poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.4, weight: 2 }); });
            app.addLayer(poly);

            const centroid = zone.coords[Math.floor(zone.coords.length / 3)];
            app.addLayer(app.labelMarker(centroid, `${zone.code}\n${zone.name}`, zone.color, '10px'));
          }
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 024 — Monsoon Map of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 24,
      title: 'Monsoon Map of India',
      subtitle: 'SW Monsoon Branches · Onset Dates · Withdrawal Dates',
      mapConfig: { center: [20, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Monsoon Branches',
          items: [
            { line: '#00BFFF', label: 'Arabian Sea Branch (SW)' },
            { line: '#FF6347', label: 'Bay of Bengal Branch (SE→NW)' }
          ]
        },
        {
          sectionTitle: 'Dates',
          items: [
            { dot: '#00FF88', label: 'Onset Dates (June 1 → July 15)' },
            { dot: '#FFA500', label: 'Withdrawal Dates (Sept 1 → Dec 1)' }
          ]
        }
      ],
      info: [
        {
          title: 'MONSOON MECHANISM',
          items: [
            'ITCZ (Inter-Tropical Convergence Zone) shifts north in summer',
            'Differential heating of land & sea creates pressure gradient',
            'SE Trade winds cross equator → deflected right (Coriolis) → become SW monsoon',
            'Two branches: Arabian Sea & Bay of Bengal',
            'Arabian Sea branch: hits Western Ghats → orographic rainfall',
            'Bay of Bengal branch: curves around Himalayas, reaches NW India',
            'Cherrapunji/Mawsynram: funnel effect of Khasi Hills on BoB branch',
            'Total monsoon season: June to September (4 months = 75% of annual rain)'
          ]
        },
        {
          title: 'ONSET & WITHDRAWAL',
          facts: [
            { label: 'Onset Starts', value: 'Kerala coast — June 1 (±7 days)' },
            { label: 'Covers All India', value: 'By July 15 (45 days to cover)' },
            { label: 'Withdrawal Starts', value: 'NW Rajasthan — September 1' },
            { label: 'Full Withdrawal', value: 'By December 1 from Kerala' },
            { label: 'NE Monsoon', value: 'Oct-Dec — brings rain to Tamil Nadu coast (reverse monsoon)' }
          ]
        }
      ],
      render(map, app) {
        // Arabian Sea Branch arrows
        DATA.monsoon.arabianSeaBranch.arrows.forEach(a => {
          const line = L.polyline([a.from, a.to], {
            color: '#00BFFF', weight: 3, opacity: 0.8
          });
          // Arrowhead
          const bearing = Math.atan2(a.to[1] - a.from[1], a.to[0] - a.from[0]);
          line.bindPopup(app.buildPopup('Arabian Sea Branch', `${a.label || 'SW Monsoon wind direction'}`, ['Monsoon', 'AS Branch']));
          app.addLayer(line);

          // Arrow head marker
          const arrowIcon = L.divIcon({
            className: '',
            html: `<div style="color:#00BFFF;font-size:16px;transform:rotate(${45}deg)">➤</div>`,
            iconAnchor: [8, 8]
          });
          app.addLayer(L.marker(a.to, { icon: arrowIcon, interactive: false }));
        });

        // Bay of Bengal Branch arrows
        DATA.monsoon.bayOfBengalBranch.arrows.forEach(a => {
          const line = L.polyline([a.from, a.to], {
            color: '#FF6347', weight: 3, opacity: 0.8
          });
          line.bindPopup(app.buildPopup('Bay of Bengal Branch', `${a.label || 'SW Monsoon wind direction'}`, ['Monsoon', 'BoB Branch']));
          app.addLayer(line);

          const arrowIcon = L.divIcon({
            className: '',
            html: `<div style="color:#FF6347;font-size:16px;transform:rotate(-45deg)">➤</div>`,
            iconAnchor: [8, 8]
          });
          app.addLayer(L.marker(a.to, { icon: arrowIcon, interactive: false }));
        });

        // Onset dates
        DATA.monsoon.onsetDates.forEach(d => {
          const marker = L.circleMarker([d.lat, d.lng], {
            radius: 6, color: '#000', fillColor: '#00FF88', fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(`📅 Onset: ${d.date}`, d.label, ['Onset']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], `${d.date}`, '#00FF88', '8px'));
        });

        // Withdrawal dates
        DATA.monsoon.withdrawalDates.forEach(d => {
          const marker = L.circleMarker([d.lat, d.lng], {
            radius: 6, color: '#000', fillColor: '#FFA500', fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(`📅 Withdrawal: ${d.date}`, d.label, ['Withdrawal']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([d.lat - 0.3, d.lng], `WD: ${d.date}`, '#FFA500', '8px'));
        });

        // Labels
        app.addLayer(app.labelMarker([8, 70], 'ARABIAN SEA\nBRANCH', '#00BFFF', '12px'));
        app.addLayer(app.labelMarker([8, 88], 'BAY OF BENGAL\nBRANCH', '#FF6347', '12px'));
        app.addLayer(app.labelMarker([25.3, 91.7], '☔ CHERRAPUNJI\n(11,777mm)', '#FFFFFF', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 025 — Annual Rainfall Distribution
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 25,
      title: 'Annual Rainfall Distribution',
      subtitle: 'Isohyets · High to Low Rainfall Zones · Color Coded',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Rainfall Zones',
          items: [
            { color: '#0000CC', label: 'Very Heavy (>200 cm)' },
            { color: '#0088FF', label: 'Heavy (100-200 cm)' },
            { color: '#66CC00', label: 'Moderate (50-100 cm)' },
            { color: '#FFCC00', label: 'Low (25-50 cm)' },
            { color: '#FF4400', label: 'Very Low (<25 cm)' }
          ]
        }
      ],
      info: [
        {
          title: 'RAINFALL DISTRIBUTION FACTS',
          facts: [
            { label: 'Wettest Place', value: 'Mawsynram, Meghalaya (1187 cm/yr)' },
            { label: 'Driest Place', value: 'Jaisalmer, Rajasthan (~10 cm/yr)' },
            { label: 'National Average', value: '118 cm/year' },
            { label: 'Monsoon Share', value: '~75% of annual rainfall in June-Sept' },
            { label: 'Variability', value: 'Highest in Rajasthan & Gujarat (>40% variation)' }
          ]
        },
        {
          title: 'UPSC PATTERN',
          items: [
            'Rainfall decreases from EAST to WEST (Bengal→Rajasthan)',
            'Windward side of W Ghats: Heavy rain; Leeward: Rain shadow',
            'NE India: Heaviest rainfall due to BoB branch + orographic effect',
            'Tamil Nadu: Gets LESS rainfall in SW monsoon (parallel coast + rain shadow)',
            'Tamil Nadu gets NE monsoon (Oct-Dec) — only state different season',
            'Ladakh: Cold desert — <10 cm rain — rain shadow of Greater Himalayas'
          ]
        }
      ],
      render(map, app) {
        DATA.rainfallZones.forEach(zone => {
          zone.areas.forEach(area => {
            const radius = zone.zone.includes('>200') ? 28 :
              zone.zone.includes('100-200') ? 22 :
                zone.zone.includes('50-100') ? 18 :
                  zone.zone.includes('25-50') ? 15 : 12;

            const circle = L.circle([area.lat, area.lng], {
              radius: radius * 6000,
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.35,
              weight: 1.5
            });
            circle.bindPopup(app.buildPopup(
              `☔ ${area.name}`,
              `<b>Rainfall:</b> ${area.rainfall}<br><b>Zone:</b> ${zone.zone}<br><b>UPSC:</b> ${area.upsc}`,
              ['Rainfall', zone.zone]
            ));
            circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.6, weight: 2.5 }); });
            circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.35, weight: 1.5 }); });
            app.addLayer(circle);
            app.addLayer(app.labelMarker([area.lat + 0.4, area.lng], `${area.name}\n(${area.rainfall})`, zone.color, '8px'));
          });
        });

        // Isohyet lines (approximate)
        const isohyets = [
          { mm: '200 cm', color: '#0000CC', coords: [[8.5, 76.5], [12, 75], [14, 74.5], [17, 73.5], [19, 73], [21, 73.5]] },
          { mm: '100 cm', color: '#0088FF', coords: [[8.5, 78], [12, 78], [16, 78], [20, 79], [24, 80], [27, 83], [26, 88]] },
          { mm: '50 cm', color: '#FFCC00', coords: [[24, 75], [25, 73], [26, 72], [27, 73], [28, 74]] },
          { mm: '25 cm', color: '#FF4400', coords: [[25, 71], [26, 70], [27, 71], [28, 72]] }
        ];
        isohyets.forEach(iso => {
          const line = L.polyline(iso.coords, { color: iso.color, weight: 2.5, dashArray: '6,4', opacity: 0.7 });
          line.bindPopup(app.buildPopup(`Isohyet: ${iso.mm}`, `Line joining places with equal rainfall`, ['Isohyet']));
          app.addLayer(line);
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 026 — January Temperature Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 26,
      title: 'January Temperature Map of India',
      subtitle: 'Winter Isotherms · Cold Wave Zones · Snowfall Areas',
      mapConfig: { center: [24, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Temperature Bands',
          items: DATA.temperatureJanuary.map(t => ({ color: t.color, label: t.temp }))
        }
      ],
      info: [
        {
          title: 'JANUARY TEMPERATURE — KEY FACTS',
          facts: [
            { label: 'Coldest', value: 'Dras, Ladakh: -45°C (Second coldest inhabited place)' },
            { label: 'N-S Gradient', value: 'Delhi: 14°C, Chennai: 25°C — 11°C difference' },
            { label: 'Isotherms', value: 'Run broadly parallel to Himalayas (E-W)' },
            { label: 'Cold Waves', value: 'NW India — caused by Western Disturbances + cold north winds' }
          ]
        },
        {
          title: 'UPSC IMPORTANT',
          items: [
            'January isotherms run E-W (parallel to latitude) — unlike July',
            'Temperature gradient: North is cold, South is warm',
            'Inversion of temperature in valleys (e.g., Kashmir valley — fog)',
            'Frost in Punjab, Haryana affects Rabi crops',
            'Chennai warmer than Mumbai in January — Chennai closer to equator',
            'Western Disturbances bring winter rainfall to NW India'
          ]
        }
      ],
      render(map, app) {
        DATA.temperatureJanuary.forEach(band => {
          band.areas.forEach(area => {
            const circle = L.circle([area.lat, area.lng], {
              radius: 120000,
              color: band.color,
              fillColor: band.color,
              fillOpacity: 0.35,
              weight: 1.5
            });
            circle.bindPopup(app.buildPopup(`🌡 ${band.temp}`, `<b>Location:</b> ${area.name}<br><b>January Temperature Range</b>`, ['Temperature', 'January']));
            app.addLayer(circle);
            app.addLayer(app.labelMarker([area.lat + 0.5, area.lng], `${area.name}\n${band.temp}`, band.color, '9px'));
          });
        });

        // Cold wave zone
        const coldWaveZone = L.polygon([
          [33, 73], [33, 80], [29, 80], [28, 77], [28, 73], [30, 73], [33, 73]
        ], { color: '#8800FF', fillColor: '#8800FF', fillOpacity: 0.15, weight: 2, dashArray: '5,5' });
        coldWaveZone.bindPopup(app.buildPopup('❄ Cold Wave Zone', 'J&K, HP, Punjab, Haryana, Delhi, UP — severe cold Dec-Feb', ['Cold Wave']));
        app.addLayer(coldWaveZone);
        app.addLayer(app.labelMarker([31, 76], '❄ COLD WAVE\nZONE', '#8800FF', '10px'));

        // Snowfall areas
        const snowAreas = L.polygon([
          [36, 73], [36, 90], [33, 95], [30, 97], [28, 96],
          [28, 88], [30, 82], [33, 76], [36, 73]
        ], { color: '#FFFFFF', fillColor: '#FFFFFF', fillOpacity: 0.1, weight: 1.5, dashArray: '4,4' });
        snowAreas.bindPopup(app.buildPopup('❄ Snowfall Areas', 'Higher Himalayas — snowfall from November to April', ['Snow', 'Winter']));
        app.addLayer(snowAreas);
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 027 — May Temperature Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 27,
      title: 'May Temperature Map of India',
      subtitle: 'Summer Isotherms · Heat Wave Zones · Loo Winds',
      mapConfig: { center: [24, 78], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Temperature Bands',
          items: DATA.temperatureMay.map(t => ({ color: t.color, label: t.temp }))
        },
        {
          sectionTitle: 'Hazards',
          items: [
            { line: '#FF0000', label: 'Loo Wind Belt' },
            { color: '#FF4400', label: 'Extreme Heat Wave Zone (>45°C)' }
          ]
        }
      ],
      info: [
        {
          title: 'MAY TEMPERATURE — KEY FACTS',
          facts: [
            { label: 'Hottest', value: 'Barmer, Rajasthan — 50.6°C (2016)' },
            { label: 'Nagpur', value: 'Often crosses 48°C — "Orange City" but "Oven of India"' },
            { label: 'Loo', value: 'Hot, dry, oppressive wind in NW India. May-June.' },
            { label: 'Nor\'westers', value: 'Thunderstorms in Bengal/NE — called Kaal Baisakhi' }
          ]
        },
        {
          title: 'UPSC IMPORTANT',
          items: [
            'May isotherms run N-S (parallel to coast) — unlike January',
            'ITCZ shifts northward — creates monsoon trough over Thar',
            'Low pressure over NW India → attracts monsoon winds',
            'Loo: hot, dry wind blowing from Thar across N India',
            'Nor\'westers (Kaal Baisakhi): thunderstorms in WB, Assam in April-May',
            'Mango showers: pre-monsoon showers in Kerala-Karnataka coast',
            'Cherry blossoms: pre-monsoon showers in coffee-growing areas of Karnataka'
          ]
        }
      ],
      render(map, app) {
        DATA.temperatureMay.forEach(band => {
          band.areas.forEach(area => {
            const circle = L.circle([area.lat, area.lng], {
              radius: 120000,
              color: band.color,
              fillColor: band.color,
              fillOpacity: 0.35,
              weight: 1.5
            });
            circle.bindPopup(app.buildPopup(`🌡 ${band.temp}`, `${area.name} — May temperature`, ['Temperature', 'May']));
            app.addLayer(circle);
            app.addLayer(app.labelMarker([area.lat + 0.5, area.lng], `${area.name}\n${band.temp}`, band.color, '9px'));
          });
        });

        // Heat wave zone
        const heatWave = L.polygon([
          [30, 73], [30, 82], [26, 84], [23, 82],
          [20, 80], [20, 77], [22, 74], [25, 73], [28, 73], [30, 73]
        ], { color: '#FF0000', fillColor: '#FF0000', fillOpacity: 0.15, weight: 2, dashArray: '6,4' });
        heatWave.bindPopup(app.buildPopup('🔥 Heat Wave Zone', 'Rajasthan, Gujarat, MP, Maharashtra, Vidarbha, Delhi, UP — April-June', ['Heat Wave']));
        app.addLayer(heatWave);
        app.addLayer(app.labelMarker([25, 78], '🔥 HEAT WAVE\nZONE', '#FF0000', '12px'));

        // Loo wind direction
        const looArrows = [
          [[27, 70], [27, 75]],
          [[26, 70], [26, 76]],
          [[28, 70], [28, 77]],
          [[29, 71], [29, 78]]
        ];
        looArrows.forEach(arr => {
          const line = L.polyline(arr, { color: '#FF4400', weight: 2, dashArray: '4,3', opacity: 0.6 });
          line.bindPopup(app.buildPopup('🌬 LOO Winds', 'Hot, dry dusty winds from Thar desert, May-June', ['Loo']));
          app.addLayer(line);
        });
        app.addLayer(app.labelMarker([28, 71], '🌬 LOO WINDS\n(Hot, dry, W→E)', '#FF4400', '10px'));

        // Nor'westers region
        const norWest = L.circle([22.5, 88.5], {
          radius: 200000, color: '#FFD700', fillColor: '#FFD700',
          fillOpacity: 0.15, weight: 2, dashArray: '4,4'
        });
        norWest.bindPopup(app.buildPopup('⛈ Nor\'westers (Kaal Baisakhi)', 'Violent thunderstorms in WB, Bihar, Assam. April-May. Useful for jute, tea.', ['Kaal Baisakhi', 'Thunderstorm']));
        app.addLayer(norWest);
        app.addLayer(app.labelMarker([24, 88.5], '⛈ NOR\'WESTERS\n(Kaal Baisakhi)', '#FFD700', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 028 — Monsoon Winds Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 28,
      title: 'Monsoon Winds Map',
      subtitle: 'SW & NE Monsoon Wind Direction · Pressure Systems · ITCZ',
      mapConfig: { center: [18, 80], zoom: 4.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Wind Systems',
          items: [
            { line: '#00BFFF', label: 'SW Monsoon Winds (June-Sept)' },
            { line: '#FF6347', label: 'NE Monsoon Winds (Oct-Dec)' },
            { line: '#FFD700', label: 'ITCZ (Monsoon Trough)' }
          ]
        },
        {
          sectionTitle: 'Pressure',
          items: [
            { dot: '#FF0000', label: 'Low Pressure (Thar/NW India in summer)' },
            { dot: '#0000FF', label: 'High Pressure (Indian Ocean in summer)' }
          ]
        }
      ],
      info: [
        {
          title: 'MONSOON WIND MECHANISM',
          items: [
            'Summer: Land heats → Low pressure over NW India (Thar)',
            'Summer: Sea cooler → High pressure over Indian Ocean',
            'Pressure gradient → winds blow from ocean to land (SW Monsoon)',
            'SE Trade winds cross equator → Coriolis deflection → SW direction',
            'ITCZ shifts north to Gangetic plain → Monsoon Trough',
            'Winter: Land cools → High pressure over Central Asia',
            'Winter: Sea warmer → Low pressure over Indian Ocean',
            'NE Monsoon: winds blow from land to sea (dry for most, wet for TN)'
          ]
        }
      ],
      render(map, app) {
        // SW Monsoon wind arrows
        const swWinds = [
          [[0, 65], [8, 72]],
          [[0, 75], [8, 77]],
          [[0, 85], [8, 85]],
          [[8, 72], [15, 73]],
          [[8, 77], [13, 76]],
          [[8, 85], [15, 83]],
          [[15, 83], [22, 85]],
          [[15, 73], [22, 74]],
          [[22, 74], [28, 77]],
          [[22, 85], [27, 88]]
        ];
        swWinds.forEach(w => {
          const line = L.polyline(w, { color: '#00BFFF', weight: 2.5, opacity: 0.7 });
          app.addLayer(line);
          const arrowIcon = L.divIcon({
            className: '',
            html: `<div style="color:#00BFFF;font-size:14px">➤</div>`,
            iconAnchor: [7, 7]
          });
          app.addLayer(L.marker(w[1], { icon: arrowIcon, interactive: false }));
        });

        // NE Monsoon winds
        const neWinds = [
          [[33, 77], [28, 78]],
          [[28, 78], [22, 80]],
          [[22, 80], [15, 82]],
          [[15, 82], [10, 80]],
          [[10, 80], [8, 77]],
          [[28, 85], [22, 87]],
          [[22, 87], [15, 88]]
        ];
        neWinds.forEach(w => {
          const line = L.polyline(w, { color: '#FF6347', weight: 2, dashArray: '6,4', opacity: 0.6 });
          app.addLayer(line);
        });

        // ITCZ line
        const itcz = L.polyline([
          [25, 68], [26, 73], [27, 78], [26, 83], [25, 88], [24, 92]
        ], { color: '#FFD700', weight: 3, dashArray: '8,4', opacity: 0.8 });
        itcz.bindPopup(app.buildPopup('ITCZ / Monsoon Trough', 'Zone of convergence. Low pressure belt. Shifts N in summer, S in winter.', ['ITCZ']));
        app.addLayer(itcz);
        app.addLayer(app.labelMarker([26.5, 80], 'ITCZ / MONSOON TROUGH\n(Summer Position)', '#FFD700', '10px'));

        // Pressure centers
        const lowP = L.circleMarker([27, 71], { radius: 20, color: '#FF0000', fillColor: '#FF0000', fillOpacity: 0.2, weight: 2, dashArray: '5,5' });
        lowP.bindPopup(app.buildPopup('L — Low Pressure', 'NW India / Thar → attracts monsoon winds', ['Pressure', 'Low']));
        app.addLayer(lowP);
        app.addLayer(app.labelMarker([27, 71], 'L\n(Low Pressure\nSummer)', '#FF0000', '10px'));

        const highP = L.circleMarker([0, 80], { radius: 20, color: '#0000FF', fillColor: '#0000FF', fillOpacity: 0.15, weight: 2, dashArray: '5,5' });
        highP.bindPopup(app.buildPopup('H — High Pressure', 'Indian Ocean → source of moist SW monsoon winds', ['Pressure', 'High']));
        app.addLayer(highP);
        app.addLayer(app.labelMarker([0, 80], 'H\n(High Pressure\nOcean)', '#0000FF', '10px'));

        // Labels
        app.addLayer(app.labelMarker([4, 70], '← SW MONSOON WINDS\n   (June-September)', '#00BFFF', '12px'));
        app.addLayer(app.labelMarker([30, 82], 'NE MONSOON WINDS →\n(October-December)', '#FF6347', '10px'));
        app.addLayer(app.labelMarker([-2, 78], 'EQUATOR', '#FFFFFF', '9px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 029 — Cyclone Prone Areas Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 29,
      title: 'Cyclone Prone Areas Map',
      subtitle: 'Bay of Bengal & Arabian Sea Tracks · Most Affected States',
      mapConfig: { center: [15, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Cyclone Tracks',
          items: [
            { line: '#FF4444', label: 'BoB Pre-Monsoon Track (Apr-Jun)' },
            { line: '#FF8800', label: 'BoB Post-Monsoon Track (Oct-Dec)' },
            { line: '#FF00FF', label: 'Arabian Sea Track (rare, increasing)' }
          ]
        },
        {
          sectionTitle: 'Risk Levels',
          items: [
            { dot: '#FF0000', label: 'Very High Risk State' },
            { dot: '#FFA500', label: 'High Risk State' },
            { dot: '#FFD700', label: 'Moderate Risk State' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA CYCLONE FACTS',
          facts: [
            { label: 'Bay of Bengal', value: '~80% of Indian cyclones originate here' },
            { label: 'Arabian Sea', value: '~20% but INCREASING due to warming' },
            { label: 'Peak Season', value: 'Pre-monsoon (Apr-Jun) + Post-monsoon (Oct-Dec)' },
            { label: 'Most Deadly', value: 'Super Cyclone 1999 (Odisha) — 10,000+ deaths' },
            { label: 'Most Powerful Recent', value: 'Amphan 2020 (Super cyclone) — $13 billion damage' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'IMD classifies cyclones by wind speed: Depression → Deep Depression → Cyclonic Storm → Severe → Very Severe → Extremely Severe → Super',
            'NDRF (National Disaster Response Force) — deployed for cyclones',
            'OSDMA (Odisha State Disaster Management Authority) — model agency',
            'Climate change: Arabian Sea cyclones increasing (SST warming)',
            'India names cyclones in rotation with 13 countries (WMO)',
            'INSAT satellites + Doppler radars for early warning',
            'Cyclone shelters built post-1999 along Odisha coast'
          ]
        }
      ],
      render(map, app) {
        // Cyclone tracks
        [...DATA.cyclones.bayOfBengal, ...DATA.cyclones.arabianSea].forEach(track => {
          const line = L.polyline(track.path, {
            color: track.color, weight: 3, opacity: 0.8
          });
          line.bindPopup(app.buildPopup(
            `🌀 ${track.name}`,
            `<b>Season:</b> ${track.season}<br><b>Affected:</b> ${track.affected}<br><b>Examples:</b> ${track.examples}`,
            ['Cyclone', track.season]
          ));
          app.addLayer(line);

          // Arrow heads along track
          track.path.forEach((pt, idx) => {
            if (idx > 0 && idx % 2 === 0) {
              const dot = L.circleMarker(pt, { radius: 4, color: track.color, fillColor: track.color, fillOpacity: 0.8, weight: 1 });
              app.addLayer(dot);
            }
          });

          const mid = track.path[Math.floor(track.path.length / 2)];
          app.addLayer(app.labelMarker([mid[0] + 0.5, mid[1]], track.name, track.color, '8px'));
        });

        // Most affected states
        DATA.cyclones.mostAffectedStates.forEach(state => {
          const riskColors = { 'Very High': '#FF0000', 'High': '#FFA500', 'Moderate-High': '#FFD700', 'Moderate': '#FFD700', 'Low (historically)': '#AAAAAA' };
          const color = riskColors[state.risk] || '#FFFFFF';
          const radius = state.risk === 'Very High' ? 12 : state.risk === 'High' ? 10 : 8;

          const marker = L.circleMarker([state.lat, state.lng], {
            radius, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌀 ${state.name}`,
            `<b>Risk:</b> ${state.risk}<br><b>UPSC:</b> ${state.upsc}`,
            ['Cyclone Risk', state.risk]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([state.lat + 0.3, state.lng], `${state.name}\n(${state.risk})`, color, '9px'));
        });

        // Note: Climate change
        const note = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.85);border:2px solid #FF00FF;
            border-radius:10px;padding:10px 14px;font-size:9px;
            color:#FF69B4;max-width:230px;font-family:Inter,sans-serif;line-height:1.5;
          ">
            <b style="color:#FFD700;font-size:10px">⚠ CLIMATE CHANGE IMPACT</b><br>
            Arabian Sea cyclones ↑ increasing<br>
            SST (Sea Surface Temp) rising<br>
            More "rapid intensification" events<br>
            <span style="color:#aaa">Tauktae 2021 — Category 4 in Arabian Sea</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8, 69], { icon: note, interactive: false }));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 030 — Drought Prone Areas Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 30,
      title: 'Drought Prone Areas Map',
      subtitle: 'Chronic · Frequent · Moderate Drought Zones',
      mapConfig: { center: [22, 78], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Drought Severity',
          items: [
            { color: '#8B0000', label: 'Chronic Drought (<250mm, permanent)' },
            { color: '#FF4500', label: 'Frequent Drought (recurrent)' },
            { color: '#FFA500', label: 'Moderate Drought (periodic)' }
          ]
        }
      ],
      info: [
        {
          title: 'DROUGHT IN INDIA',
          facts: [
            { label: 'Drought Prone Area', value: '~68% of India susceptible to some degree' },
            { label: 'Chronic', value: 'W Rajasthan, Kachchh — permanent water deficit' },
            { label: 'Frequent', value: 'Rain shadow Deccan, Marathwada, Rayalaseema, Bundelkhand' },
            { label: 'El Nino Impact', value: 'El Nino years → weak monsoon → drought risk ↑' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Types: Meteorological, Hydrological, Agricultural drought',
            'NDVI (satellite) used to monitor agricultural drought',
            'MGNREGA — employment during drought years',
            'Drought Declaration: State government → Central drought relief',
            'Farmer suicides linked to recurrent drought in Maharashtra, Telangana',
            'National Rainfed Area Authority (NRAA) for drought mitigation',
            'Watershed development programs in drought-prone areas'
          ]
        }
      ],
      render(map, app) {
        DATA.droughtAreas.forEach(area => {
          const severityColors = { 'Chronic': '#8B0000', 'Frequent': '#FF4500', 'Moderate': '#FFA500' };
          const color = severityColors[area.severity] || '#FFA500';
          const radius = area.severity === 'Chronic' ? 80000 : 60000;

          const circle = L.circle([area.lat, area.lng], {
            radius,
            color: color,
            fillColor: color,
            fillOpacity: 0.35,
            weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🏜 ${area.name}`,
            `<b>Severity:</b> ${area.severity}<br><b>States:</b> ${area.states}<br><b>UPSC:</b> ${area.upsc}`,
            ['Drought', area.severity]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.35 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([area.lat + 0.5, area.lng], `${area.name}\n(${area.severity})`, color, '9px'));
        });

        app.addLayer(app.labelMarker([28, 70], '🏜 CHRONIC\nDROUGHT BELT', '#8B0000', '11px'));
        app.addLayer(app.labelMarker([16, 77], '🔥 RAIN SHADOW\nDROUGHT ZONE', '#FF4500', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 031 — Flood Prone Areas Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 31,
      title: 'Flood Prone Areas Map',
      subtitle: 'Highly Flood Prone · Flood Rivers · Affected Zones',
      mapConfig: { center: [24, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Flood Risk',
          items: [
            { color: '#0000CC', label: 'Very High Flood Risk' },
            { color: '#0066FF', label: 'High Flood Risk' },
            { color: '#00AAFF', label: 'Moderate Flood Risk' }
          ]
        }
      ],
      info: [
        {
          title: 'FLOODS IN INDIA',
          facts: [
            { label: 'Flood Prone Area', value: '~40 million hectares (12.5% of land)' },
            { label: 'Annual Average', value: '~1600 lives lost, ~7.5 million hectares affected' },
            { label: 'Most Affected', value: 'Bihar, Assam, UP, WB, Odisha' },
            { label: 'Worst Recent', value: 'Assam 2022, Kerala 2018, Chennai 2015, Bihar 2008 (Kosi)' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Kosi river — changes course drastically, Bihar floods',
            'Brahmaputra — braided channels, annual floods in Assam',
            'Damodar — "Sorrow of Bengal" (DVC built to control)',
            'Kerala 2018: 100-year flood. Dam mismanagement. Western Ghats mining.',
            'Chennai 2015: Urban flooding, poor drainage',
            'Flood management: Embankments, dams, flood forecasting (CWC)',
            'NDMA (National Disaster Management Authority)',
            'Inter-state disputes over dam releases during floods'
          ]
        }
      ],
      render(map, app) {
        DATA.floodAreas.forEach(area => {
          const severityColors = { 'Very High': '#0000CC', 'High': '#0066FF', 'Moderate': '#00AAFF', 'Moderate-High': '#0055DD' };
          const color = severityColors[area.severity] || '#00AAFF';
          const radius = area.severity === 'Very High' ? 90000 : 70000;

          const circle = L.circle([area.lat, area.lng], {
            radius, color, fillColor: color, fillOpacity: 0.35, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🌊 ${area.name}`,
            `<b>Risk:</b> ${area.severity}<br><b>Rivers:</b> ${area.rivers}<br><b>UPSC:</b> ${area.upsc}`,
            ['Flood', area.severity]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.35 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([area.lat + 0.5, area.lng], `${area.name}\n(${area.severity})`, color, '9px'));
        });

        // Sorrow rivers
        const sorrowRivers = [
          { name: 'Kosi — "Sorrow of Bihar"', lat: 26, lng: 86.5, color: '#FF0000' },
          { name: 'Damodar — "Sorrow of Bengal"', lat: 23, lng: 87, color: '#FF4400' },
          { name: 'Brahmaputra — Annual Floods', lat: 26.5, lng: 92, color: '#FF0000' }
        ];
        sorrowRivers.forEach(r => {
          const marker = L.circleMarker([r.lat, r.lng], {
            radius: 8, color: '#000', fillColor: r.color, fillOpacity: 1, weight: 2
          });
          marker.bindPopup(app.buildPopup(`⚠ ${r.name}`, 'River notorious for causing devastating floods', ['Sorrow River']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([r.lat - 0.3, r.lng], r.name, r.color, '9px'));
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 032 — Western Disturbances Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 32,
      title: 'Western Disturbances Map',
      subtitle: 'Mediterranean Origin · Path · Affected States · Winter Rainfall',
      mapConfig: { center: [30, 65], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Western Disturbances',
          items: [
            { line: '#00BFFF', label: 'WD Path (Mediterranean → India)' },
            { dot: '#FFFFFF', label: 'Snowfall (Higher Himalayas)' },
            { dot: '#87CEEB', label: 'Winter Rainfall' },
            { dot: '#FFD700', label: 'Affected States' }
          ]
        }
      ],
      info: [
        {
          title: 'WESTERN DISTURBANCES',
          facts: [
            { label: 'Origin', value: 'Mediterranean Sea / Caspian Sea' },
            { label: 'Path', value: 'Mediterranean → Iran → Afghanistan → Pakistan → NW India' },
            { label: 'Season', value: 'October to March (peak Dec-Feb)' },
            { label: 'Nature', value: 'Extra-tropical cyclone — upper-level trough in Westerlies' },
            { label: 'Rainfall', value: 'Brings winter rain (Mahawat) to NW India, crucial for Rabi crops' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Western Disturbances = temperate cyclones from Mediterranean',
            'Travel eastward with Westerly Jet Stream',
            'Bring snowfall to J&K, HP, Uttarakhand mountains',
            'Bring light rain ("Mahawat") to Punjab, Haryana, Delhi plains',
            'Crucial for RABI crops (wheat, mustard, gram)',
            'Excessive WDs → cold waves in North India',
            'Climate change: WDs becoming more erratic and intense',
            'Interaction with monsoon: WDs can cause extreme rainfall in June'
          ]
        }
      ],
      render(map, app) {
        // WD path
        const wdPath = DATA.westernDisturbances.path.map(p => [p.lat, p.lng]);
        const pathLine = L.polyline(wdPath, {
          color: '#00BFFF', weight: 3.5, opacity: 0.85
        });
        pathLine.bindPopup(app.buildPopup('Western Disturbance Path', 'Mediterranean → Iran → Afghanistan → Pakistan → NW India', ['WD Path']));
        app.addLayer(pathLine);

        // Path markers
        DATA.westernDisturbances.path.forEach(pt => {
          const m = L.circleMarker([pt.lat, pt.lng], {
            radius: 6, color: '#00BFFF', fillColor: '#00BFFF', fillOpacity: 0.8, weight: 2
          });
          m.bindPopup(app.buildPopup(pt.label, 'Western Disturbance trajectory point', ['WD']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([pt.lat + 0.3, pt.lng], pt.label, '#00BFFF', '8px'));
        });

        // Affected states
        DATA.westernDisturbances.affectedStates.forEach(s => {
          const marker = L.circleMarker([s.lat, s.lng], {
            radius: 9, color: '#000', fillColor: '#FFD700', fillOpacity: 0.85, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `☁ ${s.name}`,
            `<b>Rainfall Type:</b> ${s.rainfall}<br><b>Importance:</b> ${s.importance}`,
            ['WD', 'Winter Rain']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([s.lat + 0.3, s.lng], s.name, '#FFD700', '9px'));
        });

        // Mediterranean Sea label
        app.addLayer(app.labelMarker([35, 30], '🌊 MEDITERRANEAN\nSEA\n(Origin of WDs)', '#00BFFF', '11px'));

        // Jet Stream line
        const jetStream = L.polyline([
          [35, 30], [35, 50], [33, 65], [31, 75], [28, 80], [25, 85]
        ], { color: '#FF69B4', weight: 2, dashArray: '10,6', opacity: 0.5 });
        jetStream.bindPopup(app.buildPopup('Subtropical Westerly Jet', 'Carries WDs from west to east across South Asia', ['Jet Stream']));
        app.addLayer(jetStream);
        app.addLayer(app.labelMarker([33, 55], '✈ Subtropical\nWesterly Jet', '#FF69B4', '9px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 033 — Cold Wave & Heat Wave Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 33,
      title: 'Cold Wave & Heat Wave Map',
      subtitle: 'Cold Wave Zones · Heat Wave Zones · Duration',
      mapConfig: { center: [24, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Hazard Zones',
          items: [
            { color: '#0000CC', label: '❄ Cold Wave Zone (Dec-Feb)' },
            { color: '#FF0000', label: '🔥 Heat Wave Zone (Apr-Jun)' },
            { color: '#8800FF', label: '❄ Severe Cold Zone (Himalayas)' },
            { color: '#FF4400', label: '🔥 Extreme Heat Zone (>47°C)' }
          ]
        }
      ],
      info: [
        {
          title: 'COLD WAVES',
          facts: [
            { label: 'Definition', value: 'IMD: Temp drops ≥4.5°C below normal for ≥2 days' },
            { label: 'Cause', value: 'Strong Western Disturbances + cold north winds' },
            { label: 'Affected', value: 'J&K, HP, Punjab, Haryana, Delhi, UP, Bihar, Rajasthan' },
            { label: 'Impact', value: 'Agriculture damage, cold-related deaths, dense fog' }
          ]
        },
        {
          title: 'HEAT WAVES',
          facts: [
            { label: 'Definition', value: 'IMD: Temp ≥40°C (plains), ≥30°C (hills) + departure ≥4.5°C' },
            { label: 'Severe HW', value: 'Departure ≥6.5°C from normal' },
            { label: 'Affected', value: 'Rajasthan, Gujarat, MP, Vidarbha, Telangana, AP, UP' },
            { label: 'Deaths', value: '2015: 2500+ heat wave deaths (worst year). 2023: severe HW across India.' }
          ]
        }
      ],
      render(map, app) {
        // Cold wave zone
        const coldZone = L.polygon([
          [35, 73], [35, 88], [30, 90], [28, 88],
          [26, 86], [25, 83], [27, 80], [28, 77],
          [28, 73], [30, 73], [33, 73], [35, 73]
        ], {
          color: '#0000CC', fillColor: '#0000CC', fillOpacity: 0.2, weight: 2
        });
        coldZone.bindPopup(app.buildPopup('❄ Cold Wave Zone', 'December-February. J&K, HP, Punjab, Haryana, Delhi, UP, Bihar.', ['Cold Wave']));
        app.addLayer(coldZone);
        app.addLayer(app.labelMarker([32, 78], '❄ COLD WAVE\nZONE\n(Dec-Feb)', '#4488FF', '11px'));

        // Severe cold (higher Himalayas)
        const severeCold = L.polygon([
          [36, 73], [36, 92], [33, 96], [30, 97],
          [29, 92], [29, 86], [31, 80], [34, 76], [36, 73]
        ], {
          color: '#8800FF', fillColor: '#8800FF', fillOpacity: 0.2, weight: 2, dashArray: '5,5'
        });
        severeCold.bindPopup(app.buildPopup('❄ Severe Cold Zone', 'Temperatures drop to -30°C to -50°C. Dras, Siachen, Ladakh.', ['Severe Cold']));
        app.addLayer(severeCold);

        // Heat wave zone
        const heatZone = L.polygon([
          [30, 73], [30, 82], [27, 84], [25, 83],
          [23, 82], [20, 80], [18, 79], [18, 76],
          [20, 74], [23, 73], [26, 73], [28, 73], [30, 73]
        ], {
          color: '#FF0000', fillColor: '#FF0000', fillOpacity: 0.2, weight: 2
        });
        heatZone.bindPopup(app.buildPopup('🔥 Heat Wave Zone', 'April-June. Rajasthan, Gujarat, MP, Vidarbha, Telangana, UP.', ['Heat Wave']));
        app.addLayer(heatZone);
        app.addLayer(app.labelMarker([24, 77], '🔥 HEAT WAVE\nZONE\n(Apr-Jun)', '#FF4444', '11px'));

        // Extreme heat spots
        const extremeHeat = [
          { name: 'Barmer', lat: 25.75, lng: 71.39, record: '50.6°C (2016)', upsc: 'Hottest recorded in India.' },
          { name: 'Churu', lat: 28.30, lng: 74.97, record: '50.2°C', upsc: 'Hottest in Rajasthan regularly.' },
          { name: 'Nagpur (Vidarbha)', lat: 21.15, lng: 79.09, record: '48.6°C', upsc: 'Called "Oven of India".' },
          { name: 'Phalodi', lat: 27.13, lng: 72.37, record: '51.0°C (2016)', upsc: 'Highest temp ever recorded in India.' },
          { name: 'Delhi', lat: 28.66, lng: 77.21, record: '49.2°C (2024)', upsc: 'Heat waves increasing in frequency.' }
        ];

        extremeHeat.forEach(spot => {
          const marker = L.circleMarker([spot.lat, spot.lng], {
            radius: 9, color: '#000', fillColor: '#FF4400', fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🔥 ${spot.name}`,
            `<b>Record:</b> ${spot.record}<br><b>UPSC:</b> ${spot.upsc}`,
            ['Extreme Heat']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([spot.lat + 0.3, spot.lng], `${spot.name}\n(${spot.record})`, '#FF4400', '9px'));
        });

        // Dense fog zone
        const fogZone = L.polygon([
          [30, 74], [30, 85], [28, 85], [27, 83],
          [27, 79], [28, 77], [28, 74], [30, 74]
        ], {
          color: '#AAAAAA', fillColor: '#AAAAAA', fillOpacity: 0.15, weight: 1.5, dashArray: '4,4'
        });
        fogZone.bindPopup(app.buildPopup('🌫 Dense Fog Zone', 'Dec-Jan. IGP (Indo-Gangetic Plain). Disrupts transport, aviation. 100+ pile-ups/year.', ['Fog']));
        app.addLayer(fogZone);
        app.addLayer(app.labelMarker([29, 80], '🌫 DENSE FOG\nBELT (Dec-Jan)', '#AAAAAA', '9px'));
      }
    }

  ]; // END INDIA_CLIMATE_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('india-climate', INDIA_CLIMATE_MAPS);
  console.log('🌧️ India Climate Maps: 11 maps registered (MAP 023-033)');

})();
