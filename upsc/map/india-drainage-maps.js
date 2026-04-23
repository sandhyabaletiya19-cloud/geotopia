/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — INDIA DRAINAGE & RIVERS
 * MAP 011 to MAP 022 | Rivers · Lakes · Dams · Wetlands · Glaciers
 * Complete UPSC Coverage — Every River, Every Tributary
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  // ══════════════════════════════════════════════════════════════
  // SHARED DATA BANK — INDIA DRAINAGE
  // ══════════════════════════════════════════════════════════════

  const DATA = {

    // ── HIMALAYAN RIVER SYSTEMS ──
    indusSystem: {
      main: {
        name: 'Indus',
        origin: 'Lake Mansarovar, Tibet (China)',
        originCoords: [30.66, 81.47],
        length: '2,880 km (total), 709 km in India',
        mouthCoords: [23.99, 67.37],
        mouth: 'Arabian Sea (Pakistan)',
        course: [
          [30.66, 81.47], [33.0, 79.0], [34.5, 77.0],
          [35.0, 76.0], [35.5, 75.0], [34.0, 72.5],
          [32.0, 71.0], [30.0, 70.0], [27.0, 68.5],
          [23.99, 67.37]
        ],
        upsc: 'Longest river in Indian subcontinent. Named India after this river. Part of Indus Water Treaty 1960.'
      },
      tributaries: [
        {
          name: 'Jhelum', origin: 'Verinag Spring, Kashmir',
          originCoords: [33.53, 75.29],
          course: [[33.53, 75.29], [34.08, 74.80], [33.50, 73.50], [32.50, 72.0], [31.0, 71.5]],
          treaty: 'Pakistan (Indus Water Treaty)',
          length: '725 km',
          upsc: 'Flows through Dal Lake, Wular Lake. Given to Pakistan under IWT.'
        },
        {
          name: 'Chenab', origin: 'Bara Lacha Pass, HP',
          originCoords: [32.74, 77.39],
          course: [[32.74, 77.39], [33.0, 76.0], [32.5, 75.0], [32.0, 74.0], [31.0, 72.5], [30.5, 71.5]],
          treaty: 'Pakistan (Indus Water Treaty)',
          length: '960 km',
          upsc: 'Largest tributary of Indus. Formed by Chandra + Bhaga rivers. Salal Dam on it.'
        },
        {
          name: 'Ravi', origin: 'Kullu Hills, HP',
          originCoords: [32.45, 76.80],
          course: [[32.45, 76.80], [32.0, 76.0], [31.5, 75.0], [31.0, 74.0], [30.5, 73.0]],
          treaty: 'India (Indus Water Treaty)',
          length: '720 km',
          upsc: 'Flows through Chamba valley. Given to India under IWT.'
        },
        {
          name: 'Beas', origin: 'Rohtang Pass, HP',
          originCoords: [32.37, 77.24],
          course: [[32.37, 77.24], [32.0, 76.5], [31.8, 76.0], [31.5, 75.5], [31.3, 75.0]],
          treaty: 'India (Indus Water Treaty)',
          length: '470 km',
          upsc: 'Shortest among 5 rivers of Punjab. Joins Sutlej at Harike. Given to India under IWT.'
        },
        {
          name: 'Sutlej', origin: 'Lake Rakshastal, Tibet',
          originCoords: [30.74, 81.03],
          course: [[30.74, 81.03], [31.76, 78.77], [31.5, 77.5], [31.2, 76.8], [31.0, 76.0], [30.8, 75.0], [30.5, 74.0]],
          treaty: 'India (Indus Water Treaty)',
          length: '1,450 km',
          upsc: 'Longest tributary of Indus. Enters India at Shipki La. Bhakra Nangal Dam on it. Given to India under IWT.'
        }
      ]
    },

    gangaSystem: {
      main: {
        name: 'Ganga',
        origin: 'Gangotri Glacier (Gaumukh), Uttarakhand',
        originCoords: [30.92, 79.08],
        length: '2,525 km',
        mouth: 'Bay of Bengal (Sunderban Delta)',
        mouthCoords: [21.62, 88.75],
        course: [
          [30.92, 79.08], [30.12, 78.30], [29.96, 78.16],
          [29.5, 79.0], [28.68, 77.21], [27.18, 78.01],
          [26.85, 80.95], [25.43, 81.84], [25.32, 83.01],
          [25.60, 85.14], [24.80, 87.00], [23.80, 88.00],
          [22.57, 88.36], [21.62, 88.75]
        ],
        upsc: 'National river. Longest river in India. Ganga Action Plan (1986). Namami Gange Program.'
      },
      rightBankTributaries: [
        {
          name: 'Yamuna', origin: 'Yamunotri Glacier',
          originCoords: [31.02, 78.45],
          course: [[31.02, 78.45], [30.32, 78.03], [29.0, 77.5], [28.68, 77.21], [27.18, 78.01], [26.50, 80.30], [25.43, 81.84]],
          length: '1,376 km',
          upsc: 'Largest tributary of Ganga. Most polluted stretch: Delhi-Agra.'
        },
        {
          name: 'Chambal', origin: 'Janapav, MP (Vindhya)',
          originCoords: [22.38, 75.78],
          course: [[22.38, 75.78], [23.0, 76.0], [24.5, 76.5], [25.5, 77.0], [26.5, 78.0], [26.70, 79.40]],
          length: '960 km',
          upsc: 'Joins Yamuna. Only large river of peninsular India flowing to Ganga. Chambal ravines.'
        },
        {
          name: 'Betwa', origin: 'Vindhya Range, MP',
          originCoords: [23.60, 77.90],
          course: [[23.60, 77.90], [24.0, 78.5], [25.0, 79.0], [25.75, 79.60]],
          length: '590 km',
          upsc: 'Joins Yamuna at Hamirpur. Ken-Betwa link project important for UPSC.'
        },
        {
          name: 'Son', origin: 'Amarkantak, MP',
          originCoords: [22.66, 81.75],
          course: [[22.66, 81.75], [23.0, 82.5], [23.5, 83.5], [24.5, 84.0], [25.40, 84.80]],
          length: '784 km',
          upsc: 'Longest south bank tributary of Ganga. Origin near Narmada. Rihand Dam on tributary.'
        }
      ],
      leftBankTributaries: [
        {
          name: 'Ramganga', origin: 'Garhwal Hills',
          originCoords: [30.0, 79.5],
          course: [[30.0, 79.5], [29.5, 79.3], [28.8, 79.0], [28.0, 79.5]],
          length: '596 km',
          upsc: 'First left bank tributary. Jim Corbett NP on its banks.'
        },
        {
          name: 'Ghaghra (Karnali)', origin: 'Mapchachungo Glacier, Tibet',
          originCoords: [30.20, 82.00],
          course: [[30.20, 82.00], [29.0, 82.0], [28.5, 81.5], [27.5, 81.5], [26.5, 82.5], [25.80, 83.80]],
          length: '1,080 km',
          upsc: 'Largest left bank tributary. Enters India from Nepal. Very flood prone.'
        },
        {
          name: 'Gandak', origin: 'Nepal-Tibet border',
          originCoords: [28.60, 83.80],
          course: [[28.60, 83.80], [27.5, 84.0], [26.5, 84.5], [25.60, 85.14]],
          length: '425 km',
          upsc: 'Called Narayani in Nepal. Joins Ganga at Patna.'
        },
        {
          name: 'Kosi', origin: 'Nepal (Saptkoshi)',
          originCoords: [27.80, 87.00],
          course: [[27.80, 87.00], [27.0, 86.8], [26.0, 86.5], [25.60, 86.80]],
          length: '720 km',
          upsc: 'Called "Sorrow of Bihar" — floods frequently. Changes course often.'
        },
        {
          name: 'Damodar', origin: 'Chota Nagpur Plateau',
          originCoords: [23.65, 84.95],
          course: [[23.65, 84.95], [23.5, 85.5], [23.2, 86.5], [23.0, 87.5], [22.50, 88.00]],
          length: '541 km',
          upsc: 'Called "Sorrow of Bengal". DVC (Damodar Valley Corporation) — modeled on TVA.'
        }
      ]
    },

    brahmaputraSystem: {
      main: {
        name: 'Brahmaputra',
        origin: 'Angsi Glacier near Mansarovar, Tibet (as Tsangpo)',
        originCoords: [30.38, 82.20],
        length: '2,900 km total, 916 km in India',
        mouth: 'Bay of Bengal (Meghna Estuary, Bangladesh)',
        mouthCoords: [22.00, 91.00],
        course: [
          [30.38, 82.20], [29.50, 90.00], [29.00, 94.00],
          [28.50, 95.50], [27.50, 94.50], [26.50, 93.00],
          [26.14, 91.74], [25.50, 90.50], [24.50, 90.00],
          [23.50, 90.50], [22.00, 91.00]
        ],
        upsc: 'Called Tsangpo in Tibet, Dihang in Arunachal, Brahmaputra in Assam, Jamuna in Bangladesh. Highest flood discharge in India.'
      },
      tributaries: [
        {
          name: 'Dibang', originCoords: [28.90, 95.50],
          course: [[28.90, 95.50], [28.00, 95.50], [27.50, 95.00]],
          upsc: 'Joins Brahmaputra from north. Arunachal Pradesh.'
        },
        {
          name: 'Lohit', originCoords: [28.50, 96.50],
          course: [[28.50, 96.50], [27.70, 96.00], [27.50, 95.50]],
          upsc: 'Joins Brahmaputra from east. Parasuram Kund on banks.'
        },
        {
          name: 'Subansiri', originCoords: [28.80, 93.50],
          course: [[28.80, 93.50], [27.50, 94.00], [26.50, 93.50]],
          upsc: 'Largest tributary of Brahmaputra in India.'
        },
        {
          name: 'Teesta', originCoords: [27.85, 88.65],
          course: [[27.85, 88.65], [27.00, 88.40], [26.00, 89.00], [25.50, 89.50]],
          upsc: 'Flows through Sikkim. Teesta water dispute between India-Bangladesh.'
        }
      ]
    },

    // ── PENINSULAR RIVERS ──
    westFlowing: [
      {
        name: 'Narmada',
        origin: 'Amarkantak, MP',
        originCoords: [22.66, 81.75],
        course: [[22.66, 81.75], [22.50, 80.0], [22.40, 78.0], [22.20, 76.0], [22.00, 74.0], [21.62, 72.97]],
        length: '1,312 km',
        mouth: 'Gulf of Khambhat (Arabian Sea)',
        mouthCoords: [21.62, 72.97],
        upsc: 'Longest west flowing river. Flows through rift valley between Vindhya & Satpura. Sardar Sarovar Dam. Does NOT form delta (estuary).'
      },
      {
        name: 'Tapi (Tapti)',
        origin: 'Betul, MP (Satpura Range)',
        originCoords: [21.72, 78.47],
        course: [[21.72, 78.47], [21.50, 76.5], [21.20, 75.0], [21.10, 73.5], [21.17, 72.83]],
        length: '724 km',
        mouth: 'Gulf of Khambhat (Arabian Sea)',
        mouthCoords: [21.17, 72.83],
        upsc: 'Parallel to Narmada. Flows through rift valley between Satpura & Ajanta ranges. Ukai Dam.'
      },
      {
        name: 'Mahi',
        origin: 'Vindhya Range, MP',
        originCoords: [22.30, 75.10],
        course: [[22.30, 75.10], [22.50, 74.0], [23.00, 73.5], [22.50, 72.50]],
        length: '583 km',
        mouth: 'Gulf of Khambhat',
        mouthCoords: [22.50, 72.50],
        upsc: 'Flows through Rajasthan, Gujarat, MP.'
      },
      {
        name: 'Sabarmati',
        origin: 'Udaipur, Rajasthan (Aravalli)',
        originCoords: [24.50, 73.70],
        course: [[24.50, 73.70], [23.50, 73.00], [23.00, 72.60], [22.00, 72.50]],
        length: '371 km',
        mouth: 'Gulf of Khambhat',
        mouthCoords: [22.00, 72.50],
        upsc: 'Sabarmati Ashram (Gandhi). Flows through Ahmedabad.'
      },
      {
        name: 'Sharavati',
        origin: 'Western Ghats, Karnataka',
        originCoords: [14.17, 75.00],
        course: [[14.17, 75.00], [14.23, 74.75], [14.22, 74.65]],
        length: '128 km',
        mouth: 'Arabian Sea',
        mouthCoords: [14.22, 74.65],
        upsc: 'Jog Falls (Gerosoppa Falls) — 253m, highest plunge waterfall in India.'
      },
      {
        name: 'Periyar',
        origin: 'Sivagiri, Western Ghats',
        originCoords: [10.10, 77.10],
        course: [[10.10, 77.10], [10.05, 76.65], [9.93, 76.26]],
        length: '244 km',
        mouth: 'Arabian Sea at Kochi',
        mouthCoords: [9.93, 76.26],
        upsc: 'Longest river of Kerala. Periyar National Park. Mullaperiyar Dam (dispute between TN-Kerala).'
      }
    ],

    eastFlowing: [
      {
        name: 'Mahanadi',
        origin: 'Sihawa, Dhamtari, Chhattisgarh',
        originCoords: [20.72, 82.09],
        course: [[20.72, 82.09], [21.00, 83.0], [21.20, 84.0], [20.80, 85.0], [20.32, 86.60]],
        length: '858 km',
        mouth: 'Bay of Bengal (Delta in Odisha)',
        mouthCoords: [20.32, 86.60],
        upsc: 'Hirakud Dam — longest dam in India (26km). Floods in Odisha.'
      },
      {
        name: 'Godavari',
        origin: 'Nashik, Maharashtra (Western Ghats)',
        originCoords: [19.90, 73.55],
        course: [[19.90, 73.55], [19.50, 75.0], [19.00, 77.0], [18.50, 79.0], [17.50, 80.0], [17.00, 81.80], [16.50, 82.50]],
        length: '1,465 km',
        mouth: 'Bay of Bengal (Delta in AP)',
        mouthCoords: [16.50, 82.50],
        upsc: 'Longest peninsular river. Called "Dakshin Ganga" (Ganga of South). Nashik Kumbh Mela.'
      },
      {
        name: 'Krishna',
        origin: 'Mahabaleshwar, Maharashtra',
        originCoords: [17.93, 73.66],
        course: [[17.93, 73.66], [17.50, 75.0], [17.00, 76.5], [16.50, 78.0], [16.00, 79.5], [16.00, 80.55]],
        length: '1,400 km',
        mouth: 'Bay of Bengal (Delta in AP)',
        mouthCoords: [16.00, 80.55],
        upsc: '2nd longest peninsular river. Krishna-Godavari basin — largest. Nagarjuna Sagar Dam. Krishna Water Dispute (4 states).'
      },
      {
        name: 'Kaveri (Cauvery)',
        origin: 'Talakaveri, Coorg, Karnataka',
        originCoords: [12.42, 75.57],
        course: [[12.42, 75.57], [12.30, 76.5], [12.40, 77.5], [12.00, 78.5], [11.50, 79.5], [10.96, 79.85]],
        length: '805 km',
        mouth: 'Bay of Bengal (Delta in TN)',
        mouthCoords: [10.96, 79.85],
        upsc: 'Called "Ganga of South". Cauvery water dispute (Karnataka vs Tamil Nadu). Ranganathittu bird sanctuary.'
      },
      {
        name: 'Pennar',
        origin: 'Nandi Hills, Karnataka',
        originCoords: [13.37, 77.68],
        course: [[13.37, 77.68], [14.0, 78.5], [14.5, 79.0], [15.0, 79.5], [15.40, 80.10]],
        length: '597 km',
        mouth: 'Bay of Bengal',
        mouthCoords: [15.40, 80.10],
        upsc: 'Seasonal/rain-fed river. Flows through AP.'
      },
      {
        name: 'Tungabhadra',
        origin: 'Western Ghats, Karnataka',
        originCoords: [13.80, 75.50],
        course: [[13.80, 75.50], [14.50, 76.0], [15.00, 76.5], [15.50, 77.0], [16.00, 78.0]],
        length: '531 km',
        mouth: 'Joins Krishna',
        mouthCoords: [16.00, 78.00],
        upsc: 'Tributary of Krishna. Hampi ruins on banks. Tungabhadra Dam.'
      }
    ],

    // ── MAJOR DAMS ──
    dams: [
      { name: 'Bhakra Nangal', lat: 31.42, lng: 76.43, river: 'Sutlej', state: 'Himachal/Punjab', height: '226m', upsc: '2nd highest gravity dam in Asia. Gobind Sagar Lake reservoir.' },
      { name: 'Hirakud Dam', lat: 21.53, lng: 83.87, river: 'Mahanadi', state: 'Odisha', height: '61m', upsc: 'Longest dam in India (26km). Multipurpose.' },
      { name: 'Nagarjuna Sagar', lat: 16.57, lng: 79.31, river: 'Krishna', state: 'Telangana/AP', height: '124m', upsc: 'World\'s largest masonry dam. Buddhist remains.' },
      { name: 'Sardar Sarovar', lat: 21.83, lng: 73.75, river: 'Narmada', state: 'Gujarat', height: '163m', upsc: 'Narmada Bachao Andolan (NBA). Medha Patkar. SC allowed construction 2000.' },
      { name: 'Tehri Dam', lat: 30.38, lng: 78.48, river: 'Bhagirathi', state: 'Uttarakhand', height: '260.5m', upsc: 'Highest dam in India. Rock-fill dam. Earthquake risk zone.' },
      { name: 'Mettur Dam', lat: 11.79, lng: 77.80, river: 'Kaveri', state: 'Tamil Nadu', height: '65m', upsc: 'One of oldest dams. Stanley Reservoir.' },
      { name: 'Tungabhadra Dam', lat: 15.27, lng: 76.34, river: 'Tungabhadra', state: 'Karnataka', height: '49m', upsc: 'Near Hampi. Irrigation for AP, Karnataka.' },
      { name: 'Rihand Dam', lat: 24.20, lng: 83.00, river: 'Rihand (Son trib)', state: 'UP', height: '91m', upsc: 'Govind Ballabh Pant Sagar — largest artificial lake in India (area).' },
      { name: 'Ukai Dam', lat: 21.25, lng: 73.58, river: 'Tapi', state: 'Gujarat', height: '81m', upsc: 'Vallabhsagar reservoir. Flood control.' },
      { name: 'Indira Sagar Dam', lat: 22.28, lng: 76.48, river: 'Narmada', state: 'MP', height: '92m', upsc: 'Largest reservoir by volume in India.' },
      { name: 'Idukki Dam', lat: 9.84, lng: 76.97, river: 'Periyar', state: 'Kerala', height: '168m', upsc: 'Asia\'s largest arch dam. Hydroelectric.' },
      { name: 'Mullaperiyar Dam', lat: 9.53, lng: 77.13, river: 'Periyar', state: 'Kerala (owned by TN)', height: '54m', upsc: 'Interstate dispute: Kerala vs TN. SC verdict. Dam safety issue.' },
      { name: 'Krishna Sagar', lat: 12.43, lng: 76.57, river: 'Kaveri', state: 'Karnataka', height: '40m', upsc: 'Brindavan Gardens. Mysore irrigation.' },
      { name: 'Koyna Dam', lat: 17.40, lng: 73.77, river: 'Koyna (Krishna trib)', state: 'Maharashtra', height: '103m', upsc: 'Reservoir-induced seismicity — 1967 earthquake.' }
    ],

    // ── LAKES ──
    lakes: [
      { name: 'Wular Lake', lat: 34.30, lng: 74.55, type: 'Freshwater (tectonic)', state: 'J&K', area: '260 sq km', upsc: 'Largest freshwater lake in India. Ramsar site. Fed by Jhelum.' },
      { name: 'Dal Lake', lat: 34.10, lng: 74.86, type: 'Freshwater', state: 'J&K', area: '18 sq km', upsc: '"Jewel of Srinagar". Houseboats. Shikaras. Shrinking.' },
      { name: 'Pangong Lake', lat: 33.76, lng: 78.66, type: 'Saline (endorheic)', state: 'Ladakh', area: '604 sq km', upsc: '60% in China. India-China standoff location. World\'s highest saltwater lake.' },
      { name: 'Tsomoriri Lake', lat: 32.90, lng: 78.32, type: 'Saline (high altitude)', state: 'Ladakh', area: '140 sq km', upsc: 'Ramsar site. 4,595m altitude. Black-necked crane breeding.' },
      { name: 'Chilika Lake', lat: 19.72, lng: 85.32, type: 'Brackish (coastal lagoon)', state: 'Odisha', area: '1,100 sq km', upsc: 'Largest coastal lagoon in Asia. Ramsar site. Irrawaddy dolphins.' },
      { name: 'Pulicat Lake', lat: 13.65, lng: 80.22, type: 'Brackish (coastal lagoon)', state: 'AP/TN', area: '759 sq km', upsc: '2nd largest lagoon. Flamingos. Sriharikota on barrier island.' },
      { name: 'Sambhar Lake', lat: 26.92, lng: 75.08, type: 'Saline (inland)', state: 'Rajasthan', area: '230 sq km', upsc: 'Largest inland saline lake. Salt production. Ramsar site. Flamingos die-off.' },
      { name: 'Loktak Lake', lat: 24.56, lng: 93.82, type: 'Freshwater', state: 'Manipur', area: '287 sq km', upsc: 'Only floating lake (Phumdis). Keibul Lamjao NP — only floating NP. Sangai deer.' },
      { name: 'Vembanad Lake', lat: 9.62, lng: 76.52, type: 'Brackish (backwater)', state: 'Kerala', area: '2,033 sq km', upsc: 'Longest lake in India. Kerala backwaters. Nehru Trophy Boat Race. Ramsar.' },
      { name: 'Kolleru Lake', lat: 16.62, lng: 81.23, type: 'Freshwater', state: 'AP', area: '245 sq km', upsc: 'Between Krishna-Godavari deltas. Wildlife sanctuary. Ramsar site.' },
      { name: 'Hussain Sagar', lat: 17.42, lng: 78.47, type: 'Artificial', state: 'Telangana', area: '5.7 sq km', upsc: 'Built 1562. Buddha statue in center. Hyderabad landmark.' },
      { name: 'Bhimtal Lake', lat: 29.35, lng: 79.56, type: 'Freshwater', state: 'Uttarakhand', area: '0.47 sq km', upsc: 'Larger than Nainital Lake. Island in center.' },
      { name: 'Nainital Lake', lat: 29.38, lng: 79.46, type: 'Freshwater (tectonic)', state: 'Uttarakhand', area: '0.49 sq km', upsc: 'Crescent shaped. Hill station lake.' }
    ],

    // ── RAMSAR SITES (KEY ONES) ──
    ramsarSites: [
      { name: 'Chilika Lake', lat: 19.72, lng: 85.32, state: 'Odisha', year: 1981 },
      { name: 'Keoladeo Ghana NP', lat: 27.16, lng: 77.52, state: 'Rajasthan', year: 1981 },
      { name: 'Loktak Lake', lat: 24.56, lng: 93.82, state: 'Manipur', year: 1990 },
      { name: 'Wular Lake', lat: 34.30, lng: 74.55, state: 'J&K', year: 1990 },
      { name: 'Sambhar Lake', lat: 26.92, lng: 75.08, state: 'Rajasthan', year: 1990 },
      { name: 'Deepor Beel', lat: 26.13, lng: 91.66, state: 'Assam', year: 2002 },
      { name: 'Tsomoriri', lat: 32.90, lng: 78.32, state: 'Ladakh', year: 2002 },
      { name: 'Ashtamudi', lat: 8.95, lng: 76.58, state: 'Kerala', year: 2002 },
      { name: 'Vembanad-Kol', lat: 9.62, lng: 76.52, state: 'Kerala', year: 2002 },
      { name: 'Point Calimere', lat: 10.30, lng: 79.85, state: 'Tamil Nadu', year: 2002 },
      { name: 'East Kolkata Wetlands', lat: 22.45, lng: 88.45, state: 'West Bengal', year: 2002 },
      { name: 'Bhoj Wetland', lat: 23.24, lng: 77.42, state: 'MP', year: 2002 },
      { name: 'Harike Lake', lat: 31.17, lng: 74.95, state: 'Punjab', year: 1990 },
      { name: 'Renuka Wetland', lat: 30.61, lng: 77.46, state: 'HP', year: 2005 },
      { name: 'Rudrasagar Lake', lat: 23.50, lng: 91.30, state: 'Tripura', year: 2005 },
      { name: 'Upper Ganga (Brijghat-Narora)', lat: 28.20, lng: 78.40, state: 'UP', year: 2005 },
      { name: 'Sur Sarovar (Keetham)', lat: 27.16, lng: 77.96, state: 'UP', year: 2020 },
      { name: 'Asan Barrage', lat: 30.45, lng: 77.65, state: 'Uttarakhand', year: 2020 },
      { name: 'Kanjirankulam Bird Sanctuary', lat: 9.60, lng: 78.45, state: 'Tamil Nadu', year: 2021 },
      { name: 'Thol Lake', lat: 23.30, lng: 72.40, state: 'Gujarat', year: 2021 },
      { name: 'Wadhvana Wetland', lat: 22.52, lng: 73.59, state: 'Gujarat', year: 2021 },
      { name: 'Sultanpur NP', lat: 28.47, lng: 76.88, state: 'Haryana', year: 2021 },
      { name: 'Bhindawas', lat: 28.55, lng: 76.55, state: 'Haryana', year: 2021 }
    ],

    // ── GLACIERS ──
    glaciers: [
      { name: 'Siachen Glacier', lat: 35.42, lng: 77.11, length: '76 km', state: 'Ladakh', upsc: 'Longest glacier in Karakoram. World\'s highest battlefield. India controls it since 1984.' },
      { name: 'Gangotri Glacier', lat: 30.92, lng: 79.08, length: '30 km', state: 'Uttarakhand', upsc: 'Source of River Ganga (as Bhagirathi). Gaumukh — snout. Retreating ~22m/year.' },
      { name: 'Zemu Glacier', lat: 27.85, lng: 88.45, length: '26 km', state: 'Sikkim', upsc: 'Largest glacier in Eastern Himalayas. Near Kangchenjunga.' },
      { name: 'Milam Glacier', lat: 30.44, lng: 80.16, length: '19 km', state: 'Uttarakhand', upsc: 'Source of Goriganga river. Kumaon Himalayas. Ancient trade route.' },
      { name: 'Pindari Glacier', lat: 30.23, lng: 79.98, length: '5 km', state: 'Uttarakhand', upsc: 'Popular trekking destination. Kumaon Himalayas. Retreating.' },
      { name: 'Kolahoi Glacier', lat: 34.10, lng: 75.30, length: '5 km', state: 'J&K', upsc: 'Largest glacier in Kashmir valley. Source of Lidder river.' },
      { name: 'Bara Shigri Glacier', lat: 32.47, lng: 77.52, length: '28 km', state: 'HP', upsc: 'Largest glacier in Himachal Pradesh. Source of Chandra river.' },
      { name: 'Satopanth Glacier', lat: 30.70, lng: 79.30, length: '13 km', state: 'Uttarakhand', upsc: 'Near Badrinath. Alaknanda river source.' },
      { name: 'Biafo Glacier', lat: 35.85, lng: 75.71, length: '63 km', state: 'PoK', upsc: '3rd longest glacier outside polar regions (with Hispar).' },
      { name: 'Chaturangi Glacier', lat: 30.80, lng: 79.15, length: '22 km', state: 'Uttarakhand', upsc: 'Tributary of Gangotri Glacier. Garhwal Himalayas.' }
    ],

    // ── RIVER INTERLINKING ──
    interlinking: {
      himalayanComponent: [
        { name: 'Kosi-Mechi Link', from: [26.5, 86.5], to: [26.4, 88.2] },
        { name: 'Kosi-Ghaghra Link', from: [26.5, 86.5], to: [26.8, 82.5] },
        { name: 'Gandak-Ganga Link', from: [26.0, 84.5], to: [25.6, 85.1] },
        { name: 'Ghaghra-Yamuna Link', from: [26.8, 82.5], to: [27.0, 78.0] },
        { name: 'Ganga-Damodar-Subarnarekha Link', from: [23.5, 86.5], to: [22.5, 87.5] }
      ],
      peninsularComponent: [
        { name: 'Mahanadi-Godavari Link', from: [20.5, 84.0], to: [17.5, 80.0] },
        { name: 'Godavari-Krishna Link', from: [17.5, 80.0], to: [16.5, 79.5] },
        { name: 'Krishna-Pennar Link', from: [16.0, 79.5], to: [15.0, 79.5] },
        { name: 'Pennar-Kaveri Link', from: [15.0, 79.5], to: [12.0, 79.0] },
        { name: 'Ken-Betwa Link', from: [25.0, 80.0], to: [24.5, 79.0] },
        { name: 'Parbati-Kalisindh-Chambal Link', from: [24.0, 77.0], to: [25.5, 76.0] }
      ]
    },

    // ── WATERSHED DIVIDES ──
    watersheds: {
      bayOfBengal: { color: '#1E90FF', label: 'Bay of Bengal Drainage' },
      arabianSea: { color: '#00CED1', label: 'Arabian Sea Drainage' },
      inland: { color: '#FFD700', label: 'Inland Drainage (no outlet to sea)' }
    }
  };


  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 12 MAPS
  // ══════════════════════════════════════════════════════════════

  const INDIA_DRAINAGE_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 011 — Complete River System of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 11,
      title: 'Complete River System of India',
      subtitle: 'All Major Rivers · Himalayan + Peninsular · Direction of Flow',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Himalayan Rivers',
          items: [
            { line: '#1E90FF', label: 'Indus System' },
            { line: '#4169E1', label: 'Ganga System' },
            { line: '#00BFFF', label: 'Brahmaputra System' }
          ]
        },
        {
          sectionTitle: 'Peninsular Rivers',
          items: [
            { line: '#FF6347', label: 'East Flowing Rivers (to Bay of Bengal)' },
            { line: '#00CED1', label: 'West Flowing Rivers (to Arabian Sea)' }
          ]
        },
        {
          sectionTitle: 'Points',
          items: [
            { dot: '#FFD700', label: 'River Origin' },
            { dot: '#FF69B4', label: 'River Mouth / Delta' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA DRAINAGE — OVERVIEW',
          facts: [
            { label: 'Total Drainage', value: '~3.28 million sq km' },
            { label: 'Bay of Bengal', value: '~77% of total drainage' },
            { label: 'Arabian Sea', value: '~23% of total drainage' },
            { label: 'Himalayan Rivers', value: 'Perennial — snow + rain fed' },
            { label: 'Peninsular Rivers', value: 'Seasonal — rain fed (except Narmada-Tapi)' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Ganga: Longest river in India (2525km)',
            'Godavari: Longest peninsular river (1465km)',
            'Narmada: Longest west flowing peninsular river (1312km)',
            'Brahmaputra: Highest flood discharge in India',
            'Indus: Longest river of Indian subcontinent (2880km)',
            'Most peninsular rivers flow EAST — Western Ghats form water divide',
            'Only Narmada & Tapi flow west through rift valleys — do NOT form deltas'
          ]
        }
      ],
      render(map, app) {
        const riverStyle = (color, weight = 2.5) => ({ color, weight, opacity: 0.85 });

        // ── INDUS SYSTEM ──
        const indusLine = L.polyline(DATA.indusSystem.main.course, riverStyle('#1E90FF', 3));
        indusLine.bindPopup(app.buildPopup('🌊 Indus River', `Length: ${DATA.indusSystem.main.length}<br>${DATA.indusSystem.main.upsc}`, ['Indus', 'Himalayan']));
        app.addLayer(indusLine);

        DATA.indusSystem.tributaries.forEach(t => {
          const line = L.polyline(t.course, riverStyle('#1E90FF', 1.8));
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, `Length: ${t.length}<br>Treaty: ${t.treaty}<br>${t.upsc}`, ['Indus System']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(t.originCoords, t.name, '#87CEEB', '8px'));
        });

        // ── GANGA SYSTEM ──
        const gangaLine = L.polyline(DATA.gangaSystem.main.course, riverStyle('#4169E1', 3.5));
        gangaLine.bindPopup(app.buildPopup('🌊 Ganga', `Length: ${DATA.gangaSystem.main.length}<br>${DATA.gangaSystem.main.upsc}`, ['Ganga', 'National River']));
        app.addLayer(gangaLine);

        [...DATA.gangaSystem.rightBankTributaries, ...DATA.gangaSystem.leftBankTributaries].forEach(t => {
          const line = L.polyline(t.course, riverStyle('#4169E1', 1.5));
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, `Length: ${t.length}<br>${t.upsc}`, ['Ganga System']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(t.originCoords, t.name, '#6495ED', '8px'));
        });

        // ── BRAHMAPUTRA ──
        const brahLine = L.polyline(DATA.brahmaputraSystem.main.course, riverStyle('#00BFFF', 3));
        brahLine.bindPopup(app.buildPopup('🌊 Brahmaputra', `Length: ${DATA.brahmaputraSystem.main.length}<br>${DATA.brahmaputraSystem.main.upsc}`, ['Brahmaputra', 'Himalayan']));
        app.addLayer(brahLine);

        DATA.brahmaputraSystem.tributaries.forEach(t => {
          const line = L.polyline(t.course, riverStyle('#00BFFF', 1.5));
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, t.upsc, ['Brahmaputra System']));
          app.addLayer(line);
        });

        // ── WEST FLOWING PENINSULAR ──
        DATA.westFlowing.forEach(r => {
          const line = L.polyline(r.course, riverStyle('#00CED1', 2));
          line.bindPopup(app.buildPopup(`🌊 ${r.name}`, `Length: ${r.length}<br>${r.upsc}`, ['West Flowing', 'Peninsular']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(r.originCoords, r.name, '#00CED1', '8px'));
        });

        // ── EAST FLOWING PENINSULAR ──
        DATA.eastFlowing.forEach(r => {
          const line = L.polyline(r.course, riverStyle('#FF6347', 2));
          line.bindPopup(app.buildPopup(`🌊 ${r.name}`, `Length: ${r.length}<br>${r.upsc}`, ['East Flowing', 'Peninsular']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(r.originCoords, r.name, '#FF6347', '8px'));
        });

        // Origin markers
        const origins = [
          { ...DATA.indusSystem.main, color: '#1E90FF' },
          { ...DATA.gangaSystem.main, color: '#4169E1' },
          { ...DATA.brahmaputraSystem.main, color: '#00BFFF' }
        ];
        origins.forEach(o => {
          const marker = L.circleMarker(o.originCoords, { radius: 8, color: '#000', fillColor: '#FFD700', fillOpacity: 1, weight: 2 });
          marker.bindPopup(app.buildPopup(`Origin: ${o.name}`, o.origin, ['Origin']));
          app.addLayer(marker);
        });

        // Water divide label
        app.addLayer(app.labelMarker([15, 75], '← Arabian Sea\n   (23% drainage)', '#00CED1', '10px'));
        app.addLayer(app.labelMarker([15, 82], 'Bay of Bengal →\n(77% drainage)', '#FF6347', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 012 — Himalayan River System
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 12,
      title: 'Himalayan River System',
      subtitle: 'Indus · Ganga · Brahmaputra & All Tributaries',
      mapConfig: { center: [28, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'River Systems',
          items: [
            { line: '#1E90FF', label: 'Indus & Tributaries' },
            { line: '#4169E1', label: 'Ganga & Tributaries (Right Bank)' },
            { line: '#7B68EE', label: 'Ganga & Tributaries (Left Bank)' },
            { line: '#00BFFF', label: 'Brahmaputra & Tributaries' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#FFD700', label: 'Origin Points' },
            { dot: '#FF69B4', label: 'Confluence Points' },
            { dot: '#FF0000', label: 'Major Cities on Rivers' }
          ]
        }
      ],
      info: [
        {
          title: 'HIMALAYAN RIVERS — KEY CHARACTERISTICS',
          items: [
            'Perennial: Snow-fed + rain-fed = year-round flow',
            'Long course through mountains before reaching plains',
            'Antecedent rivers: Older than Himalayas — cut gorges as mountains rose',
            'Heavy sediment load — form floodplains, ox-bow lakes, braided channels',
            'Prone to floods, changes in course (esp. Kosi)',
            'Indus, Sutlej, Brahmaputra — originate north of Himalayas (Tibet)'
          ]
        },
        {
          title: 'INDUS WATER TREATY 1960',
          facts: [
            { label: 'Signed', value: 'India & Pakistan, Sept 19, 1960' },
            { label: 'Brokered by', value: 'World Bank' },
            { label: 'India gets', value: 'Ravi, Beas, Sutlej (eastern rivers)' },
            { label: 'Pakistan gets', value: 'Indus, Jhelum, Chenab (western rivers)' },
            { label: 'Note', value: 'India can use western rivers for limited non-consumptive purposes' }
          ]
        }
      ],
      render(map, app) {
        // Indus full system
        const indusMain = L.polyline(DATA.indusSystem.main.course, { color: '#1E90FF', weight: 3.5, opacity: 0.85 });
        indusMain.bindPopup(app.buildPopup('🌊 Indus', `${DATA.indusSystem.main.length}<br>${DATA.indusSystem.main.upsc}`, ['Indus']));
        app.addLayer(indusMain);
        app.addLayer(app.labelMarker([33, 76], 'INDUS', '#1E90FF', '12px'));

        DATA.indusSystem.tributaries.forEach(t => {
          const color = t.treaty.includes('India') ? '#00FF88' : '#FF6347';
          const line = L.polyline(t.course, { color, weight: 2, opacity: 0.8 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, `Length: ${t.length}<br>Treaty: ${t.treaty}<br>${t.upsc}`, [t.treaty.includes('India') ? '🇮🇳 India' : '🇵🇰 Pakistan']));
          app.addLayer(line);
          const orig = L.circleMarker(t.originCoords, { radius: 6, color: '#000', fillColor: '#FFD700', fillOpacity: 1, weight: 2 });
          orig.bindPopup(app.buildPopup(`Origin: ${t.name}`, t.origin, ['Origin']));
          app.addLayer(orig);
          app.addLayer(app.labelMarker([t.originCoords[0] + 0.3, t.originCoords[1]], `${t.name} (${t.treaty.includes('India') ? '🇮🇳' : '🇵🇰'})`, color, '9px'));
        });

        // Ganga system
        const gangaMain = L.polyline(DATA.gangaSystem.main.course, { color: '#4169E1', weight: 3.5, opacity: 0.85 });
        gangaMain.bindPopup(app.buildPopup('🌊 GANGA', `${DATA.gangaSystem.main.length}<br>${DATA.gangaSystem.main.upsc}`, ['Ganga', 'National River']));
        app.addLayer(gangaMain);
        app.addLayer(app.labelMarker([27, 80], 'GANGA', '#4169E1', '12px'));

        DATA.gangaSystem.rightBankTributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#4169E1', weight: 1.8, opacity: 0.7 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name} (Right Bank)`, `Length: ${t.length}<br>${t.upsc}`, ['Ganga', 'Right Bank']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(t.originCoords, t.name, '#6495ED', '8px'));
        });

        DATA.gangaSystem.leftBankTributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#7B68EE', weight: 1.8, opacity: 0.7 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name} (Left Bank)`, `Length: ${t.length || '—'}<br>${t.upsc}`, ['Ganga', 'Left Bank']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(t.originCoords, t.name, '#7B68EE', '8px'));
        });

        // Brahmaputra
        const brahMain = L.polyline(DATA.brahmaputraSystem.main.course, { color: '#00BFFF', weight: 3.5, opacity: 0.85 });
        brahMain.bindPopup(app.buildPopup('🌊 BRAHMAPUTRA', `${DATA.brahmaputraSystem.main.length}<br>${DATA.brahmaputraSystem.main.upsc}`, ['Brahmaputra']));
        app.addLayer(brahMain);
        app.addLayer(app.labelMarker([27, 93], 'BRAHMAPUTRA', '#00BFFF', '12px'));

        DATA.brahmaputraSystem.tributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#00BFFF', weight: 1.5, opacity: 0.7 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, t.upsc, ['Brahmaputra System']));
          app.addLayer(line);
        });

        // IWT note
        const iwtIcon = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.85);border:1px solid #FFD700;
            border-radius:8px;padding:8px 12px;font-size:9px;
            color:#FFD700;max-width:220px;font-family:Inter,sans-serif;line-height:1.5;
          ">
            <b>⚖ Indus Water Treaty 1960</b><br>
            <span style="color:#00FF88">🇮🇳 India:</span> Ravi, Beas, Sutlej<br>
            <span style="color:#FF6347">🇵🇰 Pakistan:</span> Indus, Jhelum, Chenab<br>
            <span style="color:#aaa">Brokered by World Bank</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([30, 72], { icon: iwtIcon, interactive: false }));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 013 — Peninsular River System
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 13,
      title: 'Peninsular River System',
      subtitle: 'West Flowing · East Flowing · All Rivers with Origin & Mouth',
      mapConfig: { center: [17, 78], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Rivers',
          items: [
            { line: '#FF6347', label: 'East Flowing (→ Bay of Bengal)' },
            { line: '#00CED1', label: 'West Flowing (← Arabian Sea)' },
            { dot: '#FFD700', label: 'Origin' },
            { dot: '#FF69B4', label: 'Mouth / Delta' }
          ]
        }
      ],
      info: [
        {
          title: 'WHY MOST RIVERS FLOW EAST?',
          items: [
            'Western Ghats form the main water divide of peninsular India',
            'Western Ghats lie closer to western coast — rivers have long eastward journey',
            'Deccan Plateau tilts gently from west to east',
            'Exception: Narmada & Tapi flow west through RIFT VALLEYS (not normal slope)',
            'West flowing rivers: short, swift, do NOT form deltas',
            'East flowing rivers: long, slow, form large deltas'
          ]
        },
        {
          title: 'UPSC KEY COMPARISON',
          facts: [
            { label: 'Godavari', value: '1465 km — longest peninsular river (Dakshin Ganga)' },
            { label: 'Krishna', value: '1400 km — 2nd longest. Krishna Water Dispute.' },
            { label: 'Narmada', value: '1312 km — longest W-flowing. Rift valley. No delta.' },
            { label: 'Kaveri', value: '805 km — Ganga of South. KA vs TN dispute.' },
            { label: 'Mahanadi', value: '858 km — Hirakud Dam. Floods in Odisha.' }
          ]
        }
      ],
      render(map, app) {
        // Western Ghats as water divide
        const waterDivide = L.polyline([
          [21.5, 73.5], [20, 73.2], [18.5, 73.0], [17, 73.5],
          [16, 73.8], [15, 74.0], [14, 74.5], [13, 74.5],
          [12, 75.0], [11, 75.5], [10, 76.2], [8.5, 77.5]
        ], { color: '#228B22', weight: 3, dashArray: '8,4', opacity: 0.6 });
        waterDivide.bindPopup(app.buildPopup('Water Divide — Western Ghats', 'Main watershed dividing Arabian Sea & Bay of Bengal drainage', ['Water Divide']));
        app.addLayer(waterDivide);
        app.addLayer(app.labelMarker([14, 73.5], 'WATER\nDIVIDE\n(Western Ghats)', '#228B22', '10px'));

        // West flowing
        DATA.westFlowing.forEach(r => {
          const line = L.polyline(r.course, { color: '#00CED1', weight: 2.5, opacity: 0.85 });
          line.bindPopup(app.buildPopup(`🌊 ${r.name} ← W`, `Length: ${r.length}<br>Mouth: ${r.mouth}<br>${r.upsc}`, ['West Flowing']));
          app.addLayer(line);

          const orig = L.circleMarker(r.originCoords, { radius: 6, color: '#000', fillColor: '#FFD700', fillOpacity: 1, weight: 2 });
          orig.bindPopup(app.buildPopup(`Origin: ${r.name}`, r.origin, ['Origin']));
          app.addLayer(orig);

          const mouth = L.circleMarker(r.mouthCoords, { radius: 5, color: '#000', fillColor: '#FF69B4', fillOpacity: 1, weight: 2 });
          mouth.bindPopup(app.buildPopup(`Mouth: ${r.name}`, r.mouth, ['Mouth']));
          app.addLayer(mouth);

          app.addLayer(app.labelMarker([r.originCoords[0] + 0.2, r.originCoords[1]], r.name, '#00CED1', '9px'));
        });

        // East flowing
        DATA.eastFlowing.forEach(r => {
          const line = L.polyline(r.course, { color: '#FF6347', weight: 2.5, opacity: 0.85 });
          line.bindPopup(app.buildPopup(`🌊 ${r.name} → E`, `Length: ${r.length}<br>Mouth: ${r.mouth}<br>${r.upsc}`, ['East Flowing']));
          app.addLayer(line);

          const orig = L.circleMarker(r.originCoords, { radius: 6, color: '#000', fillColor: '#FFD700', fillOpacity: 1, weight: 2 });
          orig.bindPopup(app.buildPopup(`Origin: ${r.name}`, r.origin, ['Origin']));
          app.addLayer(orig);

          const mouth = L.circleMarker(r.mouthCoords, { radius: 5, color: '#000', fillColor: '#FF69B4', fillOpacity: 1, weight: 2 });
          mouth.bindPopup(app.buildPopup(`Mouth: ${r.name}`, r.mouth, ['Mouth']));
          app.addLayer(mouth);

          app.addLayer(app.labelMarker([r.originCoords[0] + 0.2, r.originCoords[1]], r.name, '#FF6347', '9px'));
        });

        // Direction arrows labels
        app.addLayer(app.labelMarker([20, 71.5], '← ARABIAN SEA', '#00CED1', '11px'));
        app.addLayer(app.labelMarker([18, 84.5], 'BAY OF BENGAL →', '#FF6347', '11px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 014 — Ganga River Basin Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 14,
      title: 'Ganga River Basin Map',
      subtitle: 'Complete Basin · All Tributaries · Cities · Origin to Mouth · Delta',
      mapConfig: { center: [26, 82], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Ganga System',
          items: [
            { line: '#4169E1', label: 'Main Ganga Channel' },
            { line: '#DC143C', label: 'Right Bank Tributaries (S/SW)' },
            { line: '#7B68EE', label: 'Left Bank Tributaries (N/NE — Himalayan)' },
            { dot: '#FFD700', label: 'Origin' },
            { dot: '#FF0000', label: 'Major Cities' }
          ]
        }
      ],
      info: [
        {
          title: 'GANGA BASIN',
          facts: [
            { label: 'Basin Area', value: '8,61,404 sq km (26% of India\'s land)' },
            { label: 'States', value: '11 states (UP has largest share)' },
            { label: 'Population', value: '~43% of India lives in Ganga basin' },
            { label: 'Length', value: '2,525 km' },
            { label: 'Source', value: 'Gangotri Glacier (Gaumukh) → Bhagirathi → Ganga at Devprayag' }
          ]
        },
        {
          title: 'PANCH PRAYAG (5 Confluences)',
          items: [
            'Vishnuprayag: Alaknanda + Dhauli Ganga',
            'Nandaprayag: Alaknanda + Nandakini',
            'Karnaprayag: Alaknanda + Pindar',
            'Rudraprayag: Alaknanda + Mandakini',
            'Devprayag: Alaknanda + Bhagirathi = GANGA formed here'
          ]
        }
      ],
      render(map, app) {
        // Basin boundary approximate
        const basinBoundary = L.polygon([
          [31, 78], [30, 80], [29, 83], [28, 87], [26, 89],
          [24, 89], [22, 88], [22, 87], [23, 86], [24, 84],
          [24, 82], [25, 80], [25, 78], [26, 77], [28, 77],
          [30, 77], [31, 78]
        ], {
          color: '#4169E1',
          fillColor: '#4169E1',
          fillOpacity: 0.08,
          weight: 2,
          dashArray: '6,4'
        });
        basinBoundary.bindPopup(app.buildPopup('Ganga Basin', 'Area: 8,61,404 sq km | 26% of India | 43% of population', ['Basin']));
        app.addLayer(basinBoundary);

        // Main Ganga
        const gangaMain = L.polyline(DATA.gangaSystem.main.course, { color: '#4169E1', weight: 4, opacity: 0.9 });
        gangaMain.bindPopup(app.buildPopup('🌊 GANGA (Main)', `${DATA.gangaSystem.main.length}<br>${DATA.gangaSystem.main.upsc}`, ['National River']));
        app.addLayer(gangaMain);

        // Right bank
        DATA.gangaSystem.rightBankTributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#DC143C', weight: 2, opacity: 0.8 });
          line.bindPopup(app.buildPopup(`${t.name} (Right Bank)`, `${t.length}<br>${t.upsc}`, ['Right Bank']));
          app.addLayer(line);
          app.addLayer(app.labelMarker([t.originCoords[0] + 0.2, t.originCoords[1]], t.name, '#DC143C', '9px'));
        });

        // Left bank
        DATA.gangaSystem.leftBankTributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#7B68EE', weight: 2, opacity: 0.8 });
          line.bindPopup(app.buildPopup(`${t.name} (Left Bank)`, `${t.length || '—'}<br>${t.upsc}`, ['Left Bank']));
          app.addLayer(line);
          app.addLayer(app.labelMarker([t.originCoords[0] + 0.2, t.originCoords[1]], t.name, '#7B68EE', '9px'));
        });

        // Cities on Ganga
        const gangaCities = [
          { name: 'Rishikesh', lat: 30.09, lng: 78.27 },
          { name: 'Haridwar', lat: 29.96, lng: 78.16 },
          { name: 'Kanpur', lat: 26.45, lng: 80.35 },
          { name: 'Allahabad (Prayagraj)', lat: 25.43, lng: 81.84 },
          { name: 'Varanasi', lat: 25.32, lng: 83.01 },
          { name: 'Patna', lat: 25.60, lng: 85.14 },
          { name: 'Kolkata', lat: 22.57, lng: 88.36 }
        ];
        gangaCities.forEach(c => {
          const m = L.circleMarker([c.lat, c.lng], { radius: 5, color: '#000', fillColor: '#FF0000', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(c.name, 'City on River Ganga', ['City']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([c.lat + 0.15, c.lng], c.name, '#FF6347', '8px'));
        });

        // Panch Prayag
        const prayags = [
          { name: 'Devprayag', lat: 30.14, lng: 78.60, note: 'Bhagirathi + Alaknanda = GANGA' },
          { name: 'Rudraprayag', lat: 30.29, lng: 78.98, note: 'Alaknanda + Mandakini' },
          { name: 'Karnaprayag', lat: 30.26, lng: 79.21, note: 'Alaknanda + Pindar' },
          { name: 'Nandaprayag', lat: 30.33, lng: 79.32, note: 'Alaknanda + Nandakini' },
          { name: 'Vishnuprayag', lat: 30.56, lng: 79.55, note: 'Alaknanda + Dhauli Ganga' }
        ];
        prayags.forEach(p => {
          const m = L.circleMarker([p.lat, p.lng], { radius: 7, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 1, weight: 2 });
          m.bindPopup(app.buildPopup(`⭐ ${p.name}`, p.note, ['Panch Prayag']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([p.lat + 0.12, p.lng], p.name, '#FFD700', '8px'));
        });

        // Gangotri origin
        const gangotri = L.circleMarker([30.92, 79.08], { radius: 10, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 1, weight: 3 });
        gangotri.bindPopup(app.buildPopup('⛰ Gangotri Glacier (Gaumukh)', 'Source of Bhagirathi → becomes Ganga at Devprayag', ['Origin', 'Glacier']));
        app.addLayer(gangotri);
        app.addLayer(app.labelMarker([31.1, 79.08], 'GANGOTRI\n(Source of Ganga)', '#FFD700', '10px'));

        // Delta
        const delta = L.polygon([
          [22.5, 87.5], [22, 88.5], [21.5, 89], [21, 88.5], [22, 87], [22.5, 87.5]
        ], { color: '#228B22', fillColor: '#228B22', fillOpacity: 0.3, weight: 1.5 });
        delta.bindPopup(app.buildPopup('Gangetic Delta (Sundarbans)', 'World\'s largest delta. Mangrove forest. Tiger reserve.', ['Delta', 'Sundarbans']));
        app.addLayer(delta);
        app.addLayer(app.labelMarker([21.5, 88], 'SUNDARBANS\nDELTA', '#228B22', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 015 — Indus River System Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 15,
      title: 'Indus River System Map',
      subtitle: 'Indus & All Tributaries · Indus Water Treaty Division',
      mapConfig: { center: [31, 75], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'IWT Division',
          items: [
            { line: '#00FF88', label: '🇮🇳 India — Ravi, Beas, Sutlej' },
            { line: '#FF6347', label: '🇵🇰 Pakistan — Indus, Jhelum, Chenab' },
            { line: '#1E90FF', label: 'Indus Main Course' }
          ]
        }
      ],
      info: [
        {
          title: 'INDUS WATER TREATY (IWT) 1960',
          facts: [
            { label: 'Signed', value: 'September 19, 1960 — Karachi' },
            { label: 'Between', value: 'Jawaharlal Nehru & Ayub Khan' },
            { label: 'Brokered', value: 'World Bank' },
            { label: 'India Rivers', value: 'Ravi, Beas, Sutlej (Eastern)' },
            { label: 'Pakistan Rivers', value: 'Indus, Jhelum, Chenab (Western)' },
            { label: 'India\'s Rights', value: 'Can use western rivers for non-consumptive purposes (hydropower but limited storage)' }
          ]
        }
      ],
      render(map, app) {
        // Indus main
        const indusMain = L.polyline(DATA.indusSystem.main.course, { color: '#1E90FF', weight: 4, opacity: 0.9 });
        indusMain.bindPopup(app.buildPopup('🌊 INDUS', `${DATA.indusSystem.main.length}<br>${DATA.indusSystem.main.upsc}`, ['Indus']));
        app.addLayer(indusMain);
        app.addLayer(app.labelMarker([33, 78], 'INDUS RIVER\n(2880 km total)', '#1E90FF', '12px'));

        // All tributaries with treaty colors
        DATA.indusSystem.tributaries.forEach(t => {
          const isIndia = t.treaty.includes('India');
          const color = isIndia ? '#00FF88' : '#FF6347';
          const line = L.polyline(t.course, { color, weight: 2.5, opacity: 0.85 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, `Length: ${t.length}<br>Treaty: ${t.treaty}<br>${t.upsc}`, [isIndia ? '🇮🇳 India' : '🇵🇰 Pakistan']));
          app.addLayer(line);

          const orig = L.circleMarker(t.originCoords, { radius: 7, color: '#000', fillColor: color, fillOpacity: 1, weight: 2 });
          orig.bindPopup(app.buildPopup(`Origin: ${t.name}`, `${t.origin}<br>${t.treaty}`, ['Origin']));
          app.addLayer(orig);
          app.addLayer(app.labelMarker([t.originCoords[0] + 0.3, t.originCoords[1]], `${t.name}\n(${isIndia ? '🇮🇳' : '🇵🇰'})`, color, '10px'));
        });

        // LOC / Border indication
        const loc = L.polyline([
          [35.0, 74.0], [34.5, 74.5], [34.0, 74.8], [33.5, 74.0], [33.0, 73.5]
        ], { color: '#FF0000', weight: 2, dashArray: '4,4', opacity: 0.5 });
        loc.bindPopup(app.buildPopup('Line of Control (LoC)', 'De facto border between India & Pakistan in Kashmir', ['Border']));
        app.addLayer(loc);

        // Treaty annotation
        const treatyNote = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.9);border:2px solid #FFD700;
            border-radius:12px;padding:12px 16px;font-size:10px;
            color:#F0F4FF;max-width:250px;font-family:Inter,sans-serif;line-height:1.6;
          ">
            <div style="color:#FFD700;font-weight:bold;font-size:12px;margin-bottom:6px">⚖ Indus Water Treaty 1960</div>
            <span style="color:#00FF88">🇮🇳 INDIA:</span> Ravi, Beas, Sutlej<br>
            <span style="color:#FF6347">🇵🇰 PAKISTAN:</span> Indus, Jhelum, Chenab<br>
            <br><span style="color:#aaa;font-size:9px">Brokered by World Bank · Signed at Karachi</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([28, 70], { icon: treatyNote, interactive: false }));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 016 — Brahmaputra River Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 16,
      title: 'Brahmaputra River Map',
      subtitle: 'Tsangpo · Dihang · Brahmaputra · Jamuna · Complete Course',
      mapConfig: { center: [27, 90], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Brahmaputra Course',
          items: [
            { line: '#00BFFF', label: 'Main Course' },
            { line: '#87CEEB', label: 'Tributaries (Dibang, Lohit, Subansiri, Teesta)' },
            { dot: '#FFD700', label: 'Name Change Points' }
          ]
        },
        {
          sectionTitle: 'Names by Region',
          items: [
            { dot: '#FF6347', label: 'Tsangpo (Tibet)' },
            { dot: '#FFA500', label: 'Siang/Dihang (Arunachal)' },
            { dot: '#00FF88', label: 'Brahmaputra (Assam)' },
            { dot: '#4169E1', label: 'Jamuna (Bangladesh)' }
          ]
        }
      ],
      info: [
        {
          title: 'BRAHMAPUTRA — DETAILS',
          facts: [
            { label: 'Total Length', value: '2,900 km' },
            { label: 'In India', value: '916 km (Assam Valley)' },
            { label: 'Origin', value: 'Angsi Glacier near Mansarovar, Tibet' },
            { label: 'Discharge', value: 'Highest flood discharge of any Indian river' },
            { label: 'Basin Area', value: '5.8 lakh sq km (India share: 1.94 lakh sq km)' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Called Tsangpo in Tibet — flows EAST for 1700 km',
            'Takes U-turn near Namcha Barwa peak (world\'s deepest gorge)',
            'Called Dihang/Siang in Arunachal Pradesh',
            'Called Brahmaputra in Assam (flows WEST → male river)',
            'Becomes Jamuna in Bangladesh, joins Ganga (Padma)',
            'Majuli Island — world\'s largest river island (in Brahmaputra)',
            'Creates braided channels due to heavy sediment',
            'Highly flood-prone — Assam floods annual problem'
          ]
        }
      ],
      render(map, app) {
        // Full course with color segments
        const tibetSegment = [[30.38, 82.20], [29.50, 86.00], [29.50, 90.00], [29.63, 95.03]];
        const arunachalSegment = [[29.63, 95.03], [28.50, 95.50], [27.50, 94.50]];
        const assamSegment = [[27.50, 94.50], [26.50, 93.00], [26.14, 91.74], [25.50, 90.50]];
        const bdSegment = [[25.50, 90.50], [24.50, 90.00], [23.50, 90.50], [22.00, 91.00]];

        const segments = [
          { coords: tibetSegment, color: '#FF6347', name: 'Tsangpo (Tibet)', label: 'TSANGPO' },
          { coords: arunachalSegment, color: '#FFA500', name: 'Siang/Dihang (Arunachal)', label: 'DIHANG' },
          { coords: assamSegment, color: '#00FF88', name: 'Brahmaputra (Assam)', label: 'BRAHMAPUTRA' },
          { coords: bdSegment, color: '#4169E1', name: 'Jamuna (Bangladesh)', label: 'JAMUNA' }
        ];

        segments.forEach(seg => {
          const line = L.polyline(seg.coords, { color: seg.color, weight: 3.5, opacity: 0.9 });
          line.bindPopup(app.buildPopup(`🌊 ${seg.name}`, `Segment of Brahmaputra River`, [seg.label]));
          app.addLayer(line);

          const mid = seg.coords[Math.floor(seg.coords.length / 2)];
          app.addLayer(app.labelMarker([mid[0] + 0.3, mid[1]], seg.label, seg.color, '11px'));
        });

        // Tributaries
        DATA.brahmaputraSystem.tributaries.forEach(t => {
          const line = L.polyline(t.course, { color: '#87CEEB', weight: 2, opacity: 0.7 });
          line.bindPopup(app.buildPopup(`🌊 ${t.name}`, t.upsc, ['Tributary']));
          app.addLayer(line);
          app.addLayer(app.labelMarker(t.originCoords, t.name, '#87CEEB', '9px'));
        });

        // Namcha Barwa — U-turn point
        const namcha = L.circleMarker([29.63, 95.03], { radius: 10, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 1, weight: 3 });
        namcha.bindPopup(app.buildPopup('⛰ Namcha Barwa Turn', 'Brahmaputra takes dramatic U-turn here<br>World\'s deepest gorge (5382m deep)', ['U-Turn', 'Gorge']));
        app.addLayer(namcha);
        app.addLayer(app.labelMarker([30, 95.03], 'NAMCHA BARWA\n(U-Turn Point)\n7782m Peak', '#FFD700', '9px'));

        // Majuli Island
        const majuli = L.circleMarker([26.95, 94.16], { radius: 10, color: '#228B22', fillColor: '#228B22', fillOpacity: 0.8, weight: 2 });
        majuli.bindPopup(app.buildPopup('🏝 Majuli Island', 'World\'s largest river island (area shrinking)<br>Sattra culture, Neo-Vaishnavism, Assam', ['Island', 'UNESCO Tentative']));
        app.addLayer(majuli);
        app.addLayer(app.labelMarker([27.2, 94.16], 'MAJULI ISLAND\n(World\'s Largest\nRiver Island)', '#228B22', '9px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 017 — River Interlinking Project Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 17,
      title: 'River Interlinking Project Map',
      subtitle: 'Himalayan & Peninsular Components · Proposed Canal Links',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Components',
          items: [
            { line: '#00BFFF', label: 'Himalayan Component Links' },
            { line: '#FF6347', label: 'Peninsular Component Links' },
            { dot: '#FFD700', label: 'Transfer Points' }
          ]
        }
      ],
      info: [
        {
          title: 'NATIONAL RIVER LINKING PROJECT',
          facts: [
            { label: 'Proposed', value: 'KL Rao (1970s) → refined by National Water Development Agency' },
            { label: 'Total Links', value: '30 river links (14 Himalayan + 16 Peninsular)' },
            { label: 'Objective', value: 'Transfer water from surplus to deficit basins' },
            { label: 'Cost', value: 'Estimated ₹5.6 lakh crore (2002 prices)' },
            { label: 'Ken-Betwa', value: 'First link approved (2021). MP-UP. Tiger reserve concern.' }
          ]
        },
        {
          title: 'UPSC — PROS & CONS',
          items: [
            'PRO: Flood control in surplus basins, drought relief in deficit',
            'PRO: Irrigation expansion, hydropower generation',
            'PRO: Navigation, drinking water supply',
            'CON: Massive ecological disruption',
            'CON: Displacement of millions of people',
            'CON: Interstate disputes over water sharing',
            'CON: Cost — massive financial burden',
            'CON: Ken-Betwa impacts Panna Tiger Reserve'
          ]
        }
      ],
      render(map, app) {
        // Himalayan links
        DATA.interlinking.himalayanComponent.forEach(link => {
          const line = L.polyline([link.from, link.to], {
            color: '#00BFFF', weight: 2.5, dashArray: '8,6', opacity: 0.8
          });
          line.bindPopup(app.buildPopup(`🔗 ${link.name}`, 'Himalayan Component — Proposed River Link', ['Interlinking', 'Himalayan']));
          app.addLayer(line);

          // Arrow markers at ends
          [link.from, link.to].forEach(pt => {
            app.addLayer(L.circleMarker(pt, { radius: 5, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.9, weight: 1 }));
          });

          const mid = [(link.from[0] + link.to[0]) / 2, (link.from[1] + link.to[1]) / 2];
          app.addLayer(app.labelMarker(mid, link.name, '#00BFFF', '8px'));
        });

        // Peninsular links
        DATA.interlinking.peninsularComponent.forEach(link => {
          const color = link.name === 'Ken-Betwa Link' ? '#FFD700' : '#FF6347';
          const weight = link.name === 'Ken-Betwa Link' ? 3.5 : 2.5;
          const line = L.polyline([link.from, link.to], {
            color, weight, dashArray: '8,6', opacity: 0.8
          });
          const label = link.name === 'Ken-Betwa Link' ? '✅ Ken-Betwa (APPROVED 2021)' : link.name;
          line.bindPopup(app.buildPopup(`🔗 ${label}`, 'Peninsular Component — Proposed River Link', ['Interlinking', 'Peninsular']));
          app.addLayer(line);

          [link.from, link.to].forEach(pt => {
            app.addLayer(L.circleMarker(pt, { radius: 5, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.9, weight: 1 }));
          });

          const mid = [(link.from[0] + link.to[0]) / 2, (link.from[1] + link.to[1]) / 2];
          app.addLayer(app.labelMarker(mid, link.name, color, '8px'));
        });

        // Label for components
        app.addLayer(app.labelMarker([28, 85], 'HIMALAYAN\nCOMPONENT', '#00BFFF', '12px'));
        app.addLayer(app.labelMarker([17, 79], 'PENINSULAR\nCOMPONENT', '#FF6347', '12px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 018 — Major Dams & Reservoirs Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 18,
      title: 'Major Dams & Reservoirs Map',
      subtitle: 'All UPSC Important Dams · Height · River · State',
      mapConfig: { center: [22, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Dam Height Categories',
          items: [
            { dot: '#FF0000', label: 'Very Tall (>150m) — Tehri, Bhakra, Idukki' },
            { dot: '#FFA500', label: 'Tall (100-150m)' },
            { dot: '#FFD700', label: 'Medium (50-100m)' },
            { dot: '#00FF88', label: 'Notable (<50m but important)' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA\'S MAJOR DAMS',
          facts: [
            { label: 'Highest', value: 'Tehri Dam — 260.5m (Bhagirathi, Uttarakhand)' },
            { label: 'Longest', value: 'Hirakud Dam — 26 km (Mahanadi, Odisha)' },
            { label: 'Largest Reservoir (area)', value: 'Govind Ballabh Pant Sagar (Rihand)' },
            { label: 'Largest Reservoir (volume)', value: 'Indira Sagar (Narmada, MP)' },
            { label: 'Controversial', value: 'Sardar Sarovar — Narmada Bachao Andolan' }
          ]
        }
      ],
      render(map, app) {
        DATA.dams.forEach(dam => {
          const h = parseInt(dam.height) || 0;
          let color = '#00FF88';
          let radius = 7;
          if (h >= 150) { color = '#FF0000'; radius = 11; }
          else if (h >= 100) { color = '#FFA500'; radius = 9; }
          else if (h >= 50) { color = '#FFD700'; radius = 8; }

          const marker = L.circleMarker([dam.lat, dam.lng], {
            radius, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🏗 ${dam.name}`,
            `<b>River:</b> ${dam.river}<br>
             <b>State:</b> ${dam.state}<br>
             <b>Height:</b> ${dam.height}<br>
             <b>UPSC:</b> ${dam.upsc}`,
            ['Dam', dam.state]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([dam.lat + 0.25, dam.lng], `${dam.name}\n(${dam.height})`, color, '8px'));
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 019 — Watershed Map of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 19,
      title: 'Watershed Map of India',
      subtitle: 'Bay of Bengal · Arabian Sea · Inland Drainage Divides',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Drainage',
          items: [
            { color: '#1E90FF', label: 'Bay of Bengal Drainage (~77%)' },
            { color: '#00CED1', label: 'Arabian Sea Drainage (~23%)' },
            { color: '#FFD700', label: 'Inland Drainage (no outlet to sea)' },
            { line: '#FF0000', label: 'Main Water Divide (Western Ghats + Aravalli)' }
          ]
        }
      ],
      info: [
        {
          title: 'WATERSHED FACTS',
          facts: [
            { label: 'Bay of Bengal', value: '~77% of total drainage area of India' },
            { label: 'Arabian Sea', value: '~23% of total drainage area' },
            { label: 'Inland', value: 'Parts of Rajasthan (Luni basin), Ladakh (Pangong)' },
            { label: 'Main Divide', value: 'Western Ghats form primary water divide in peninsular India' }
          ]
        }
      ],
      render(map, app) {
        // Bay of Bengal basin (east)
        const bobBasin = L.polygon([
          [35, 78], [30, 86], [27, 92], [26, 95],
          [21, 88], [16, 82], [10, 80],
          [8.5, 77.5], [10, 76.5], [14, 74.5],
          [17, 73.5], [22, 73], [25, 78], [30, 78], [35, 78]
        ], {
          color: '#1E90FF', fillColor: '#1E90FF', fillOpacity: 0.12, weight: 1.5, dashArray: '6,3'
        });
        bobBasin.bindPopup(app.buildPopup('Bay of Bengal Drainage', '~77% of India\'s drainage flows to Bay of Bengal', ['Watershed']));
        app.addLayer(bobBasin);
        app.addLayer(app.labelMarker([20, 83], 'BAY OF BENGAL\nDRAINAGE\n(~77%)', '#1E90FF', '12px'));

        // Arabian Sea basin (west)
        const asBasin = L.polygon([
          [25, 67], [26, 69], [27, 73], [25, 78],
          [22, 73], [17, 73.5], [14, 74.5], [10, 76.5],
          [8.5, 77.5], [8.5, 76], [10, 76], [14, 74],
          [18, 73], [20, 72.5], [22, 71], [24, 69], [25, 67]
        ], {
          color: '#00CED1', fillColor: '#00CED1', fillOpacity: 0.12, weight: 1.5, dashArray: '6,3'
        });
        asBasin.bindPopup(app.buildPopup('Arabian Sea Drainage', '~23% of India\'s drainage flows to Arabian Sea', ['Watershed']));
        app.addLayer(asBasin);
        app.addLayer(app.labelMarker([18, 72], 'ARABIAN SEA\nDRAINAGE\n(~23%)', '#00CED1', '12px'));

        // Inland drainage (Rajasthan)
        const inlandBasin = L.polygon([
          [27, 70], [28, 72], [27.5, 73.5], [26, 73],
          [25, 72], [24, 71], [25, 69.5], [27, 70]
        ], {
          color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.15, weight: 1.5, dashArray: '6,3'
        });
        inlandBasin.bindPopup(app.buildPopup('Inland Drainage', 'Luni river basin (Rajasthan). No outlet to sea. Rann of Kachchh drainage.', ['Inland', 'Endorheic']));
        app.addLayer(inlandBasin);
        app.addLayer(app.labelMarker([26, 71], 'INLAND\n(No sea outlet)', '#FFD700', '10px'));

        // Water divide line
        const waterDivide = L.polyline([
          [28.6, 77.2], [26, 73.7], [24, 73.5],
          [22, 73], [20, 73.2], [18.5, 73.0],
          [17, 73.5], [16, 73.8], [14, 74.5],
          [12, 75.0], [10, 76.2], [8.5, 77.5]
        ], { color: '#FF0000', weight: 3, dashArray: '6,4', opacity: 0.7 });
        waterDivide.bindPopup(app.buildPopup('Main Water Divide', 'Western Ghats + Aravalli form main divide between Arabian Sea & Bay of Bengal drainage', ['Divide']));
        app.addLayer(waterDivide);
        app.addLayer(app.labelMarker([14, 75.5], 'MAIN WATER\nDIVIDE', '#FF0000', '10px'));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 020 — Lakes of India Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 20,
      title: 'Lakes of India Map',
      subtitle: 'All Major Lakes · Type · State · UPSC Facts',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Lake Types',
          items: [
            { dot: '#4169E1', label: 'Freshwater (natural)' },
            { dot: '#FF6347', label: 'Saline / Brackish' },
            { dot: '#00CED1', label: 'Coastal Lagoon' },
            { dot: '#9400D3', label: 'High Altitude' },
            { dot: '#FFD700', label: 'Artificial / Man-made' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA\'S LAKES — KEY FACTS',
          facts: [
            { label: 'Largest Freshwater', value: 'Wular Lake (J&K) — 260 sq km' },
            { label: 'Largest Coastal Lagoon', value: 'Chilika (Odisha) — 1100 sq km' },
            { label: 'Largest Saline (inland)', value: 'Sambhar Lake (Rajasthan) — 230 sq km' },
            { label: 'Longest Lake', value: 'Vembanad (Kerala) — 2033 sq km' },
            { label: 'Only Floating Lake', value: 'Loktak (Manipur) — Phumdis' },
            { label: 'Highest', value: 'Pangong Lake (Ladakh) — 4350m altitude' }
          ]
        }
      ],
      render(map, app) {
        DATA.lakes.forEach(lake => {
          const typeColors = {
            'Freshwater (tectonic)': '#4169E1',
            'Freshwater': '#4169E1',
            'Saline (endorheic)': '#FF6347',
            'Saline (high altitude)': '#9400D3',
            'Saline (inland)': '#FF6347',
            'Brackish (coastal lagoon)': '#00CED1',
            'Brackish (backwater)': '#00CED1',
            'Artificial': '#FFD700'
          };
          const color = typeColors[lake.type] || '#FFFFFF';
          const radius = Math.max(6, Math.min(12, Math.sqrt(parseInt(lake.area) || 50)));

          const marker = L.circleMarker([lake.lat, lake.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.85,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `💧 ${lake.name}`,
            `<b>Type:</b> ${lake.type}<br>
             <b>State:</b> ${lake.state}<br>
             <b>Area:</b> ${lake.area}<br>
             <b>UPSC:</b> ${lake.upsc}`,
            ['Lake', lake.type.split(' ')[0]]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([lake.lat + 0.25, lake.lng], lake.name, color, '8px'));
        });
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 021 — Wetlands & Ramsar Sites of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 21,
      title: 'Wetlands & Ramsar Sites of India',
      subtitle: '75+ Ramsar Sites · State Distribution · Designation Year',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Ramsar Sites',
          items: [
            { dot: '#00FF88', label: 'Ramsar Site (designated before 2010)' },
            { dot: '#FFD700', label: 'Ramsar Site (2010-2020)' },
            { dot: '#FF69B4', label: 'Ramsar Site (2021 onwards — recent)' }
          ]
        }
      ],
      info: [
        {
          title: 'RAMSAR CONVENTION',
          facts: [
            { label: 'Convention', value: 'Ramsar Convention on Wetlands (Iran, 1971)' },
            { label: 'India Joined', value: '1982' },
            { label: 'First Sites', value: 'Chilika Lake & Keoladeo NP (1981)' },
            { label: 'Total (2024)', value: '75+ Ramsar sites' },
            { label: 'State with most', value: 'Tamil Nadu (14), UP (10)' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Ramsar = city in Iran where convention was signed',
            'World Wetlands Day = February 2',
            'Wetlands regulate floods, recharge groundwater, biodiversity habitat',
            'India has 2nd largest network of Ramsar sites in South Asia',
            'Montreux Record: sites where ecological character changed (Chilika was removed in 2002 — success story)',
            'Recent additions: focus on UP, TN, MP, Haryana, Gujarat'
          ]
        }
      ],
      render(map, app) {
        DATA.ramsarSites.forEach(site => {
          const year = site.year;
          let color = '#00FF88';
          if (year >= 2021) color = '#FF69B4';
          else if (year >= 2010) color = '#FFD700';

          const marker = L.circleMarker([site.lat, site.lng], {
            radius: 7,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.85,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌿 ${site.name}`,
            `<b>State:</b> ${site.state}<br>
             <b>Designated:</b> ${site.year}<br>
             <b>Status:</b> Ramsar Site`,
            ['Ramsar', site.state, String(site.year)]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([site.lat + 0.15, site.lng + 0.1], site.name, color, '7px'));
        });

        // Note card
        const ramsarNote = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.85);border:1px solid #00FF88;
            border-radius:10px;padding:10px 14px;font-size:9px;
            color:#00FF88;max-width:200px;font-family:Inter,sans-serif;line-height:1.5;
          ">
            <b style="color:#FFD700;font-size:10px">🌿 RAMSAR SITES: 75+</b><br>
            First: Chilika, Keoladeo (1981)<br>
            Convention: Iran, 1971<br>
            World Wetlands Day: Feb 2
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8, 76], { icon: ramsarNote, interactive: false }));
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 022 — Glaciers of India Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 22,
      title: 'Glaciers of India Map',
      subtitle: 'Siachen · Gangotri · Zemu · All Major Glaciers · Retreat Status',
      mapConfig: { center: [32, 79], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Glaciers',
          items: [
            { dot: '#00BFFF', label: 'Major Glacier' },
            { dot: '#FF6347', label: 'Retreating Fast (>20m/yr)' },
            { dot: '#FFD700', label: 'Strategic (Siachen)' },
            { line: '#FFFFFF', label: 'Glacier Length (relative)' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA\'S GLACIERS',
          facts: [
            { label: 'Total Glaciers', value: '~9,575 glaciers in Indian Himalayas' },
            { label: 'Longest', value: 'Siachen — 76 km (Karakoram)' },
            { label: 'Most Important', value: 'Gangotri — source of Ganga' },
            { label: 'Retreat Rate', value: 'Gangotri retreating ~22m/year' },
            { label: 'Strategic', value: 'Siachen — world\'s highest battlefield since 1984' }
          ]
        },
        {
          title: 'UPSC — GLACIER RETREAT',
          items: [
            'Climate change → glaciers retreating across Himalayas',
            'Gangotri has retreated ~850m since 1971',
            'GLOF (Glacial Lake Outburst Floods) — major disaster risk',
            'Chamoli disaster (2021) — glacial avalanche killed 200+',
            'Glaciers are lifeline — feed Ganga, Indus, Brahmaputra',
            'If retreat continues → rivers may become seasonal in future',
            'ISRO monitoring through satellite imagery (IRS satellites)'
          ]
        }
      ],
      render(map, app) {
        DATA.glaciers.forEach(glacier => {
          const isSiachen = glacier.name === 'Siachen Glacier';
          const isGangotri = glacier.name === 'Gangotri Glacier';
          let color = '#00BFFF';
          let radius = 8;

          if (isSiachen) { color = '#FFD700'; radius = 12; }
          if (isGangotri) { color = '#FF6347'; radius = 10; }

          const marker = L.circleMarker([glacier.lat, glacier.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🧊 ${glacier.name}`,
            `<b>Length:</b> ${glacier.length}<br>
             <b>Location:</b> ${glacier.state}<br>
             <b>UPSC:</b> ${glacier.upsc}`,
            ['Glacier', glacier.state]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 4); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([glacier.lat + 0.25, glacier.lng], `${glacier.name}\n(${glacier.length})`, color, '9px'));
        });

        // Retreat warning annotation
        const retreatNote = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.85);border:2px solid #FF6347;
            border-radius:10px;padding:10px 14px;font-size:9px;
            color:#FF6347;max-width:230px;font-family:Inter,sans-serif;line-height:1.6;
          ">
            <b style="color:#FFD700;font-size:11px">⚠ GLACIER RETREAT WARNING</b><br>
            <span style="color:#FFFFFF">Gangotri retreating ~22m/yr</span><br>
            9,575 glaciers in Indian Himalayas<br>
            GLOF risk increasing annually<br>
            <span style="color:#aaa">Chamoli 2021: 200+ deaths from glacial avalanche</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([28.5, 82], { icon: retreatNote, interactive: false }));

        // Himalaya background for context
        const himalayaBg = L.polygon([
          [36, 70], [36, 97], [27, 97], [27, 70], [36, 70]
        ], {
          color: 'transparent',
          fillColor: '#3a3028',
          fillOpacity: 0.12,
          weight: 0
        });
        app.addLayer(himalayaBg);
      }
    }

  ]; // END INDIA_DRAINAGE_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('india-drainage', INDIA_DRAINAGE_MAPS);
  console.log('🌊 India Drainage Maps: 12 maps registered (MAP 011-022)');

})();
