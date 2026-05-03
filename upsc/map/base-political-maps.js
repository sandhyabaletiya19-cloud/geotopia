(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // DATA: BASE POLITICAL MAPS — MAPS 114-121
  // ═══════════════════════════════════════════════════════════════

  var DATA = {

    indiaNeighbours: {
      pakistan: {
        name: 'Pakistan',
        borderLength: '3,323 km',
        coords: [30.0, 69.0],
        color: '#FFEB3B',
        borderLine: [
          [35.5, 77.0], [34.5, 76.0], [33.8, 74.0], [32.5, 74.8], [31.0, 74.5],
          [29.5, 73.5], [27.5, 71.0], [25.5, 70.0], [24.5, 69.0], [24.0, 68.8],
          [23.7, 68.5], [23.5, 68.2]
        ],
        issues: 'LoC in J&K, Sir Creek maritime boundary unresolved',
        status2025: 'Ceasefire 2021 largely holding, LoC militarized but stable'
      },
      china: {
        name: 'China',
        borderLength: '3,488 km',
        coords: [35.0, 87.0],
        color: '#FF6B6B',
        lacLine: [
          [35.5, 77.0], [35.0, 78.0], [34.0, 79.0], [33.0, 79.8],
          [32.0, 80.0], [31.5, 81.0], [30.5, 82.0], [29.5, 84.0],
          [28.5, 87.0], [28.0, 89.0], [27.5, 92.0], [27.0, 93.5],
          [28.0, 96.5], [28.5, 97.5]
        ],
        frictionPoints: [
          { name: 'Depsang Plains', coords: [35.3, 78.0], note: 'Disengagement Oct 2024', color: '#FF6B6B' },
          { name: 'Demchok', coords: [32.8, 79.5], note: 'Disengagement Oct 2024', color: '#FF6B6B' },
          { name: 'Galwan Valley', coords: [34.7, 78.2], note: '2020 clash site, buffer zone', color: '#FFA500' },
          { name: 'Pangong Tso', coords: [33.8, 78.7], note: 'Disengagement Feb 2021', color: '#FFA500' },
          { name: 'Hot Springs/Gogra', coords: [34.1, 78.5], note: 'Disengagement Sep 2022', color: '#FFA500' },
          { name: 'Doklam Tri-junction', coords: [27.4, 89.0], note: '2017 standoff, sensitive', color: '#FF6B6B' },
          { name: 'Tawang (Arunachal)', coords: [27.6, 91.9], note: 'Dec 2022 clash, critical sector', color: '#FF6B6B' }
        ],
        borderInfra: [
          { name: 'Atal Tunnel', coords: [32.4, 77.15], status: 'Operational', color: '#00FF88' },
          { name: 'Sela Tunnel', coords: [27.5, 92.1], status: 'Opened 2024', color: '#00FF88' },
          { name: 'Nimmu-Padum-Darcha', coords: [33.5, 77.0], status: 'Near completion', color: '#FFA500' },
          { name: 'Zojila Tunnel', coords: [34.3, 75.5], status: 'Under construction', color: '#FFA500' },
          { name: 'Daulat Beg Oldi', coords: [35.4, 77.9], status: 'Airstrip operational', color: '#00FF88' }
        ],
        xiaokangVillages: [
          { name: 'Xiaokang villages (LAC)', coords: [28.5, 88.5], note: 'China building model villages near border', color: '#FF6B6B' }
        ]
      },
      nepal: {
        name: 'Nepal',
        borderLength: '1,751 km',
        coords: [28.5, 84.0],
        color: '#FFEB3B',
        borderLine: [
          [27.0, 80.2], [27.5, 81.5], [27.0, 83.0], [27.5, 84.5],
          [26.8, 86.0], [27.0, 87.0], [27.0, 88.0]
        ],
        disputes: [
          { name: 'Kalapani-Lipulekh-Limpiyadhura', coords: [30.2, 80.3], note: 'Disputed tri-junction area, Nepal new map 2020', color: '#FF6B6B' }
        ]
      },
      bhutan: {
        name: 'Bhutan',
        borderLength: '699 km',
        coords: [27.5, 90.5],
        color: '#66BB6A',
        issues: 'Border talks ongoing, Doklam tri-junction sensitive',
        borderLine: [
          [27.0, 88.8], [27.2, 89.5], [27.5, 90.5], [27.0, 91.5], [27.0, 92.0]
        ]
      },
      bangladesh: {
        name: 'Bangladesh',
        borderLength: '4,096 km',
        coords: [24.0, 90.0],
        color: '#42A5F5',
        borderLine: [
          [22.0, 88.0], [22.5, 88.5], [23.0, 89.0], [24.0, 89.0],
          [24.5, 90.0], [25.0, 91.0], [25.5, 92.0], [26.5, 92.0],
          [27.0, 92.0]
        ],
        issues: 'Teesta water sharing unresolved, smart fencing ongoing',
        status2025: 'Stable border, political change Dhaka Aug 2024 → reset period'
      },
      myanmar: {
        name: 'Myanmar',
        borderLength: '1,643 km',
        coords: [21.0, 96.0],
        color: '#FFA500',
        borderLine: [
          [28.5, 97.5], [27.5, 97.0], [26.5, 96.0], [25.0, 95.0],
          [23.5, 94.5], [22.0, 94.0], [21.0, 93.5], [20.5, 92.5]
        ],
        issues: 'Myanmar civil war, refugee flows, border fencing proposal 2024-25',
        status2025: 'FMR restrictions imposed, cross-border insurgency concerns'
      },
      sriLanka: {
        name: 'Sri Lanka',
        coords: [7.5, 80.7],
        color: '#AB47BC',
        issues: 'Palk Strait maritime boundary, fishermen disputes',
        maritime: true
      },
      maldives: {
        name: 'Maldives',
        coords: [3.2, 73.2],
        color: '#AB47BC',
        issues: 'India-China competition, India Out campaign 2024',
        maritime: true
      }
    },

    lacFrictionZones: [
      { name: 'Aksai Chin', coords: [35.0, 79.5], type: 'China-occupied, India claims', color: '#FF6B6B', area: '38,000 km²' },
      { name: 'Arunachal Pradesh', coords: [28.0, 94.0], type: 'India-administered, China claims as "South Tibet"', color: '#FF6B6B', area: '83,743 km²' }
    ],

    sirCreek: {
      coords: [23.6, 68.6],
      note: 'India-Pakistan maritime boundary dispute in Rann of Kutch',
      color: '#FF6B6B'
    },

    strategicCorridors: [
      {
        name: 'India-Myanmar-Thailand Trilateral Highway',
        path: [[25.6, 94.1], [22.0, 96.2], [20.0, 97.0], [18.0, 98.5], [14.0, 100.5]],
        color: '#FFA500',
        status: 'Progress resumed 2024-25',
        length: '1,360 km'
      },
      {
        name: 'Kaladan Multi-Modal Project',
        path: [[23.35, 93.0], [21.0, 93.0], [20.5, 93.1], [20.1, 92.9]],
        color: '#FFA500',
        status: 'Near completion stages 2024-25',
        length: '~539 km (road + waterway)'
      }
    ],

    worldPoliticalChanges: {
      natoExpansion: [
        { name: 'Finland', coords: [64.0, 26.0], year: 2023, color: '#00FF88' },
        { name: 'Sweden', coords: [63.0, 16.0], year: 2024, color: '#00FF88' }
      ],
      bricsExpansion: [
        { name: 'Egypt', coords: [26.0, 30.0], year: 2024, color: '#FFA500' },
        { name: 'UAE', coords: [24.0, 54.5], year: 2024, color: '#FFA500' },
        { name: 'Iran', coords: [32.5, 53.5], year: 2024, color: '#FFA500' },
        { name: 'Ethiopia', coords: [9.0, 39.5], year: 2024, color: '#FFA500' },
        { name: 'Saudi Arabia', coords: [24.0, 45.0], year: 2024, color: '#FFA500' }
      ],
      conflictZones: [
        { name: 'Russia-Ukraine War', coords: [49.0, 32.0], since: '2022', color: '#FF6B6B', note: 'Ongoing, 1000+ days' },
        { name: 'Israel-Gaza Conflict', coords: [31.4, 34.4], since: '2023', color: '#FF6B6B', note: 'Oct 2023 onwards' },
        { name: 'Red Sea/Yemen (Houthis)', coords: [15.0, 43.0], since: '2024', color: '#FF6B6B', note: 'Shipping attacks' },
        { name: 'Myanmar Civil War', coords: [20.0, 96.0], since: '2021', color: '#FFA500', note: 'Post-coup ongoing' },
        { name: 'Sudan Crisis', coords: [15.5, 32.5], since: '2023', color: '#FFA500', note: 'Civil war, humanitarian crisis' },
        { name: 'Haiti Instability', coords: [19.0, -72.0], since: '2024', color: '#FFA500', note: 'Gang violence, state collapse' }
      ],
      g20AU: {
        name: 'African Union',
        coords: [9.0, 38.7],
        note: 'Permanent G20 member since India\'s presidency 2023',
        color: '#00FF88'
      }
    },

    indianOceanRegion: {
      quadMembers: [
        { name: 'India', coords: [22.0, 78.0], color: '#00FF88' },
        { name: 'USA', coords: [39.0, -98.0], color: '#4FC3F7' },
        { name: 'Japan', coords: [36.5, 138.0], color: '#4FC3F7' },
        { name: 'Australia', coords: [-25.0, 135.0], color: '#4FC3F7' }
      ],
      stringOfPearls: [
        { name: 'Gwadar (Pakistan)', coords: [25.12, 62.33], color: '#FF6B6B', note: 'China CPEC, naval port' },
        { name: 'Hambantota (Sri Lanka)', coords: [6.12, 81.1], color: '#FF6B6B', note: '99-year Chinese lease' },
        { name: 'Djibouti (China base)', coords: [11.59, 43.15], color: '#FF6B6B', note: 'China\'s only overseas military base' },
        { name: 'Kyaukpyu (Myanmar)', coords: [19.43, 93.55], color: '#FF6B6B', note: 'China SEZ + deep sea port' },
        { name: 'Chittagong (Bangladesh)', coords: [22.34, 91.78], color: '#FF6B6B', note: 'Chinese submarines docked 2017' }
      ],
      necklaceOfDiamonds: [
        { name: 'Sabang (Indonesia)', coords: [5.89, 95.32], color: '#00FF88', note: 'India naval access' },
        { name: 'Duqm (Oman)', coords: [19.67, 57.7], color: '#00FF88', note: 'India logistics hub' },
        { name: 'Assumption Island (Seychelles)', coords: [-9.74, 46.51], color: '#00FF88', note: 'India naval facility proposed' },
        { name: 'Agaléga (Mauritius)', coords: [-10.43, 56.62], color: '#00FF88', note: 'India built runway + jetty' },
        { name: 'Changi (Singapore)', coords: [1.35, 103.82], color: '#00FF88', note: 'India logistics agreement' }
      ],
      chokepoints: [
        { name: 'Strait of Hormuz', coords: [26.5, 56.5], note: '~21% global oil', color: '#FFD700' },
        { name: 'Strait of Malacca', coords: [2.5, 101.5], note: '~25% global trade', color: '#FFD700' },
        { name: 'Bab-el-Mandeb', coords: [12.6, 43.3], note: 'Yemen crisis, disrupted', color: '#FF6B6B' },
        { name: 'Mozambique Channel', coords: [-15.0, 42.0], note: 'Africa SE route', color: '#FFD700' },
        { name: '6° & 9° Channels', coords: [7.5, 73.5], note: 'India Lakshadweep chokes', color: '#FFD700' }
      ],
      andamanNicobar: {
        name: 'Andaman & Nicobar',
        coords: [11.5, 92.7],
        note: 'India\'s strategic hub, controls Malacca approach',
        color: '#00FF88'
      }
    },

    indiaStatesUT: [
      { name: 'Jammu & Kashmir', coords: [33.7, 75.3], type: 'UT', color: '#AB47BC', note: 'UT since 2019' },
      { name: 'Ladakh', coords: [34.2, 77.6], type: 'UT', color: '#AB47BC', note: 'UT since 2019' },
      { name: 'Himachal Pradesh', coords: [31.5, 77.0], type: 'State', color: '#4FC3F7' },
      { name: 'Punjab', coords: [31.0, 75.5], type: 'State', color: '#4FC3F7' },
      { name: 'Uttarakhand', coords: [30.3, 79.0], type: 'State', color: '#4FC3F7' },
      { name: 'Haryana', coords: [29.0, 76.0], type: 'State', color: '#4FC3F7' },
      { name: 'Delhi', coords: [28.7, 77.2], type: 'UT (NCT)', color: '#AB47BC' },
      { name: 'Rajasthan', coords: [26.5, 73.5], type: 'State', color: '#4FC3F7' },
      { name: 'Uttar Pradesh', coords: [27.0, 80.5], type: 'State', color: '#4FC3F7' },
      { name: 'Bihar', coords: [25.6, 85.5], type: 'State', color: '#4FC3F7' },
      { name: 'Sikkim', coords: [27.5, 88.5], type: 'State', color: '#4FC3F7' },
      { name: 'Arunachal Pradesh', coords: [28.0, 94.5], type: 'State', color: '#4FC3F7', note: 'China claims as "South Tibet"' },
      { name: 'Nagaland', coords: [26.0, 94.5], type: 'State', color: '#4FC3F7' },
      { name: 'Manipur', coords: [24.8, 93.9], type: 'State', color: '#4FC3F7' },
      { name: 'Mizoram', coords: [23.2, 92.8], type: 'State', color: '#4FC3F7' },
      { name: 'Tripura', coords: [23.8, 91.5], type: 'State', color: '#4FC3F7' },
      { name: 'Meghalaya', coords: [25.5, 91.8], type: 'State', color: '#4FC3F7' },
      { name: 'Assam', coords: [26.2, 92.5], type: 'State', color: '#4FC3F7' },
      { name: 'West Bengal', coords: [23.0, 87.5], type: 'State', color: '#4FC3F7' },
      { name: 'Jharkhand', coords: [23.5, 85.5], type: 'State', color: '#4FC3F7' },
      { name: 'Odisha', coords: [20.5, 84.0], type: 'State', color: '#4FC3F7' },
      { name: 'Chhattisgarh', coords: [21.5, 82.0], type: 'State', color: '#4FC3F7' },
      { name: 'Madhya Pradesh', coords: [23.5, 78.5], type: 'State', color: '#4FC3F7' },
      { name: 'Gujarat', coords: [22.5, 71.5], type: 'State', color: '#4FC3F7' },
      { name: 'Maharashtra', coords: [19.5, 76.0], type: 'State', color: '#4FC3F7' },
      { name: 'Goa', coords: [15.4, 74.0], type: 'State', color: '#4FC3F7' },
      { name: 'Karnataka', coords: [14.5, 76.0], type: 'State', color: '#4FC3F7' },
      { name: 'Kerala', coords: [10.0, 76.5], type: 'State', color: '#4FC3F7' },
      { name: 'Tamil Nadu', coords: [11.0, 78.5], type: 'State', color: '#4FC3F7' },
      { name: 'Andhra Pradesh', coords: [16.0, 80.0], type: 'State', color: '#4FC3F7' },
      { name: 'Telangana', coords: [17.8, 79.0], type: 'State', color: '#4FC3F7' },
      { name: 'Chandigarh', coords: [30.73, 76.78], type: 'UT', color: '#AB47BC' },
      { name: 'Puducherry', coords: [11.94, 79.81], type: 'UT', color: '#AB47BC' },
      { name: 'Lakshadweep', coords: [10.5, 72.5], type: 'UT', color: '#AB47BC' },
      { name: 'A & N Islands', coords: [11.5, 92.7], type: 'UT', color: '#AB47BC' },
      { name: 'D & N Haveli and Daman & Diu', coords: [20.3, 73.0], type: 'UT', color: '#AB47BC', note: 'Merged UT since 2020' }
    ]
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 114 — INDIA POLITICAL MAP (States & UTs)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 114,
      title: 'India — States & Union Territories',
      subtitle: '28 States + 8 Union Territories, capitals, recent changes',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Administrative Units',
          items: [
            { dot: '#4FC3F7', label: 'State' },
            { dot: '#AB47BC', label: 'Union Territory' },
            { dot: '#00FF88', label: 'Recent Change (2019-20)' },
            { dot: '#FF6B6B', label: 'Disputed Territory' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Changed' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'States', value: '28' },
            { label: 'Union Territories', value: '8' },
            { label: 'Total area', value: '3.287 million km²' },
            { label: 'Largest state (area)', value: 'Rajasthan (342,239 km²)' },
            { label: 'Smallest state (area)', value: 'Goa (3,702 km²)' },
            { label: 'Largest state (pop)', value: 'UP (~241M)' },
            { label: 'Recent changes', value: 'J&K + Ladakh UTs (2019), DD merger (2020)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            '28 States + 8 UTs: federal structure with unitary bias (Art 1: India = Union of States)',
            'J&K reorganized 2019: bifurcated into J&K UT (with legislature) + Ladakh UT (without)',
            'Dadra & Nagar Haveli and Daman & Diu merged into single UT (2020)',
            'Art 370 abrogated Aug 2019 — J&K special status revoked',
            'Arunachal Pradesh: China claims as "South Tibet" — India firmly rejects',
            'Statehood demands: Bodoland, Gorkhaland, Vidarbha — periodic movements',
            'PoK/Gilgit-Baltistan: India claims, Pakistan administers'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: Supreme Court upholds Art 370 abrogation as constitutional',
            '2024: J&K Assembly elections held after Art 370 revocation (first)',
            '2024: Ladakh UT statehood demand movement (Sonam Wangchuk agitation)',
            '2024: Manipur ethnic violence continuing since May 2023',
            'Arunachal: China objections to PM visit (2024) — India rejects',
            'NE reorganization: demand for Greater Nagalim ongoing',
            'PoK: India consistently raises in international forums'
          ]
        }
      ],
      render: function (map, app) {
        // State & UT markers
        DATA.indiaStatesUT.forEach(function (s) {
          var rad = s.type === 'State' ? 6 : 5;
          var marker = L.circleMarker(s.coords, {
            radius: rad,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            s.name,
            'Type: ' + s.type + (s.note ? '<br><b style="color:#FFD700">' + s.note + '</b>' : ''),
            s.note ? ['changed', 'recent'] : [s.type]
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [s.coords[0], s.coords[1] + 0.5],
            s.name,
            s.color,
            '8px'
          ));
        });

        // J&K and Ladakh special highlight
        var jkRing = L.circleMarker([33.7, 75.3], {
          radius: 15, color: '#00FF88', fillColor: '#00FF88',
          fillOpacity: 0.1, weight: 2, dashArray: '4,4'
        }).addTo(map);
        app.addLayer(jkRing);

        var ladakhRing = L.circleMarker([34.2, 77.6], {
          radius: 15, color: '#00FF88', fillColor: '#00FF88',
          fillOpacity: 0.1, weight: 2, dashArray: '4,4'
        }).addTo(map);
        app.addLayer(ladakhRing);

        // PoK/Aksai Chin disputed markers
        var disputed = [
          { name: 'PoK (Pakistan-occupied)', coords: [34.0, 74.0], color: '#FF6B6B' },
          { name: 'Aksai Chin (China-occupied)', coords: [35.0, 79.5], color: '#FF6B6B' },
          { name: 'Gilgit-Baltistan', coords: [36.0, 75.0], color: '#FF6B6B' }
        ];

        disputed.forEach(function (d) {
          var m = L.circleMarker(d.coords, {
            radius: 8,
            color: d.color,
            fillColor: d.color,
            fillOpacity: 0.25,
            weight: 2,
            dashArray: '6,4'
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚠ ' + d.name, 'Integral part of India — illegally occupied', ['disputed', 'India']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.coords[0] + 0.5, d.coords[1]], d.name, d.color, '9px'));
        });

        // Info boxes
        app.addLayer(app.infoBox([35.0, 72.0],
          '<b style="color:#00FF88">J&K Reorganization 2019</b><br>' +
          'Art 370 abrogated<br>' +
          'J&K UT (with legislature)<br>' +
          'Ladakh UT (without legislature)<br>' +
          '<span style="color:#FFD700">SC upheld 2023</span>'
        ));

        app.addLayer(app.infoBox([15.0, 71.0],
          '<b style="color:#4FC3F7">India: 28 States + 8 UTs</b><br>' +
          'Federal with unitary bias<br>' +
          'Art 1: "India, that is Bharat"<br>' +
          'Union of States'
        ));

        app.addLayer(app.infoBox([25.0, 94.0],
          '<b style="color:#FF6B6B">NE India Sensitivity</b><br>' +
          'Manipur violence since May 2023<br>' +
          'Arunachal: China claims rejected<br>' +
          'NE: 8 states, diverse ethnicity'
        ));

        app.showToast('Map 114: India States & UTs loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 115 — INDIA-CHINA BORDER (LAC)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 115,
      title: 'India-China Border — Line of Actual Control (LAC)',
      subtitle: 'Friction points, disengagement, border infrastructure, Xiaokang villages',
      mapConfig: { center: [32.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Border Features',
          items: [
            { line: '#FF6B6B', label: 'Line of Actual Control (LAC)' },
            { dot: '#FF6B6B', label: 'Active Friction Point' },
            { dot: '#FFA500', label: 'Buffer Zone / Past Clash' },
            { dot: '#00FF88', label: 'India Border Infra (New)' },
            { dot: '#E53935', label: 'China Xiaokang Village' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Disengagement 2024' },
            { dot: '#FF6B6B', label: 'Disputed/Sensitive' },
            { dot: '#FFA500', label: 'Under Construction' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'LAC length', value: '~3,488 km' },
            { label: 'Sectors', value: '3 (Western, Middle, Eastern)' },
            { label: 'Aksai Chin', value: '38,000 km² (China-occupied)' },
            { label: 'Arunachal Pradesh', value: 'China claims as "South Tibet"' },
            { label: 'Disengagement 2024', value: 'Depsang + Demchok (Oct 2024)' },
            { label: 'BRO infrastructure', value: 'Record border roads 2023-25' },
            { label: 'Xiaokang villages', value: 'China building near LAC' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'LAC: 3,488 km, not demarcated → source of friction',
            'Three sectors: Western (Ladakh), Middle (HP/Uttarakhand), Eastern (Arunachal)',
            'Galwan Valley clash June 2020: first combat deaths in 45 years',
            'Disengagement: phased — Pangong (2021), Gogra-Hot Springs (2022), Depsang+Demchok (2024)',
            'Buffer zones: no-patrol areas created → de facto territory changes',
            'China Xiaokang villages: model border villages near LAC (infrastructure assertion)',
            'India counter: Vibrant Villages Programme + BRO record road construction'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024 (Oct): Disengagement at Depsang Plains + Demchok',
            '2024: Sela Tunnel (Arunachal Pradesh) inaugurated — all-weather connectivity',
            '2024: PM Modi-Xi Jinping bilateral at Kazan BRICS (Oct 2024)',
            '2023-25: BRO constructs record km of border roads near LAC',
            'Vibrant Villages Programme: border village development in LAC areas',
            'China continues Xiaokang village construction near disputed border',
            'Daulat Beg Oldi: world\'s highest airstrip, operational for military logistics'
          ]
        }
      ],
      render: function (map, app) {
        // LAC line
        var lacLine = L.polyline(DATA.indiaNeighbours.china.lacLine, {
          color: '#FF6B6B',
          weight: 4,
          opacity: 0.85,
          dashArray: '10,6'
        }).addTo(map);
        lacLine.bindPopup(app.buildPopup('Line of Actual Control (LAC)', '~3,488 km | Not demarcated<br>3 sectors: Western, Middle, Eastern<br>Source of India-China border friction', ['LAC', 'border']));
        app.addLayer(lacLine);

        // LAC sector labels
        app.addLayer(app.labelMarker([35.0, 78.0], 'Western Sector (Ladakh)', '#FF6B6B', '10px'));
        app.addLayer(app.labelMarker([31.0, 80.5], 'Middle Sector', '#FF6B6B', '9px'));
        app.addLayer(app.labelMarker([27.5, 93.0], 'Eastern Sector (Arunachal)', '#FF6B6B', '10px'));

        // Friction points
        DATA.indiaNeighbours.china.frictionPoints.forEach(function (fp) {
          var marker = L.circleMarker(fp.coords, {
            radius: 9,
            color: '#000',
            fillColor: fp.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '⚠ ' + fp.name,
            fp.note,
            fp.color === '#FF6B6B' ? ['friction', 'LAC', 'active'] : ['buffer', 'disengagement']
          ));

          marker.on('mouseover', function () {
            this.setRadius(13);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(9);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [fp.coords[0] + 0.3, fp.coords[1] + 0.5],
            fp.name,
            fp.color,
            '9px'
          ));
        });

        // Aksai Chin and Arunachal claimed areas
        DATA.lacFrictionZones.forEach(function (fz) {
          var cir = L.circle(fz.coords, {
            radius: 150000,
            color: fz.color,
            fillColor: fz.color,
            fillOpacity: 0.1,
            weight: 2,
            dashArray: '8,4'
          }).addTo(map);
          cir.bindPopup(app.buildPopup('⚠ ' + fz.name, fz.type + '<br>Area: ' + fz.area, ['disputed', 'territory']));
          app.addLayer(cir);
          app.addLayer(app.labelMarker([fz.coords[0], fz.coords[1]], fz.name, fz.color, '10px'));
        });

        // India border infrastructure
        DATA.indiaNeighbours.china.borderInfra.forEach(function (bi) {
          var outerRing = L.circleMarker(bi.coords, {
            radius: 14,
            color: bi.color,
            fillColor: bi.color,
            fillOpacity: 0.1,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          app.addLayer(outerRing);

          var m = L.circleMarker(bi.coords, {
            radius: 7,
            color: '#000',
            fillColor: bi.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(
            '🏗 ' + bi.name,
            'Status: ' + bi.status,
            bi.color === '#00FF88' ? ['BRO', '2024', 'infrastructure'] : ['under construction']
          ));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);

          app.addLayer(app.labelMarker(
            [bi.coords[0] - 0.4, bi.coords[1] + 0.5],
            bi.name + ' (' + bi.status + ')',
            bi.color,
            '9px'
          ));
        });

        // Xiaokang villages (China)
        DATA.indiaNeighbours.china.xiaokangVillages.forEach(function (xk) {
          var m = L.circleMarker(xk.coords, {
            radius: 8,
            color: '#000',
            fillColor: '#E53935',
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚠ ' + xk.name, xk.note + '<br>Infrastructure assertion along LAC', ['China', 'Xiaokang', 'LAC']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([xk.coords[0] + 0.5, xk.coords[1]], 'Xiaokang Villages (China)', '#E53935', '9px'));
        });

        // Info boxes
        app.addLayer(app.infoBox([36.0, 82.0],
          '<b style="color:#00FF88">Disengagement Oct 2024</b><br>' +
          'Depsang Plains + Demchok<br>' +
          'PM Modi-Xi bilateral at Kazan<br>' +
          '<span style="color:#FFA500">Buffer zones remain in effect</span>'
        ));

        app.addLayer(app.infoBox([29.0, 80.0],
          '<b style="color:#00FF88">India Border Infra Push</b><br>' +
          'BRO: record road construction<br>' +
          'Sela Tunnel 2024 (Arunachal)<br>' +
          'Atal Tunnel (operational)<br>' +
          'Vibrant Villages Programme'
        ));

        app.addLayer(app.infoBox([26.0, 90.0],
          '<b style="color:#FF6B6B">Doklam + Tawang</b><br>' +
          'Doklam: 2017 standoff site<br>' +
          'Tawang: Dec 2022 clash<br>' +
          'Both remain sensitive zones'
        ));

        app.showToast('Map 115: India-China LAC loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 116 — INDIA NEIGHBOURS & BORDERS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 116,
      title: 'India — Neighbours & Land/Maritime Borders',
      subtitle: 'All border disputes, strategic corridors, 2024 developments',
      mapConfig: { center: [24.0, 78.0], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Border Status',
          items: [
            { line: '#FF6B6B', label: 'LAC (China) — Disputed' },
            { line: '#FFEB3B', label: 'LoC (Pakistan) — Ceasefire' },
            { line: '#42A5F5', label: 'Bangladesh — Stable' },
            { line: '#66BB6A', label: 'Bhutan — Friendly' },
            { line: '#FFA500', label: 'Myanmar — Turbulent' },
            { dot: '#AB47BC', label: 'Maritime Neighbour' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Sensitive' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Land borders', value: '15,106.7 km' },
            { label: 'Coastline', value: '7,516.6 km' },
            { label: 'Land neighbours', value: '7 (Pak, China, Nepal, Bhutan, Bangladesh, Myanmar, Afghanistan)' },
            { label: 'Maritime neighbours', value: 'Sri Lanka, Maldives, Indonesia' },
            { label: 'Longest border', value: 'Bangladesh (4,096 km)' },
            { label: 'Most sensitive', value: 'China LAC (3,488 km)' },
            { label: 'Border disputes', value: 'LAC, LoC, Kalapani, Sir Creek' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India shares land border with 7 countries (Afghanistan through PoK)',
            'Pakistan: LoC (J&K), International Border; ceasefire 2021 holding',
            'China: LAC not demarcated, multiple friction points, disengagement ongoing',
            'Nepal: Kalapani-Lipulekh-Limpiyadhura dispute unresolved',
            'Bangladesh: longest border, stable, Teesta unresolved',
            'Myanmar: civil war impact, FMR restrictions, border fencing proposed',
            'Maritime: Palk Strait (Sri Lanka), EEZ boundaries, island territories'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: India-China disengagement at Depsang + Demchok',
            '2024: Bangladesh political change (Aug 2024) — relations reset',
            '2024-25: Myanmar FMR restrictions imposed, border fencing proposal',
            '2024: Nepal bilateral dialogue continuing, Kalapani unresolved',
            '2023: India-Bhutan MoU on border dispute resolution',
            'Sir Creek maritime dispute: no progress',
            'India-Myanmar-Thailand Trilateral Highway: progress resumed'
          ]
        }
      ],
      render: function (map, app) {
        // Neighbour country markers
        var neighbours = [
          DATA.indiaNeighbours.pakistan,
          DATA.indiaNeighbours.china,
          DATA.indiaNeighbours.nepal,
          DATA.indiaNeighbours.bhutan,
          DATA.indiaNeighbours.bangladesh,
          DATA.indiaNeighbours.myanmar
        ];

        neighbours.forEach(function (n) {
          var marker = L.circleMarker(n.coords, {
            radius: 10,
            color: '#000',
            fillColor: n.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌐 ' + n.name,
            'Border: ' + (n.borderLength || 'Maritime') +
            '<br>' + (n.issues || '') +
            (n.status2025 ? '<br><b style="color:#00FF88">' + n.status2025 + '</b>' : ''),
            ['neighbour', 'border']
          ));

          marker.on('mouseover', function () { this.setRadius(14); this.setStyle({ weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(10); this.setStyle({ weight: 2 }); });

          app.addLayer(app.labelMarker(
            [n.coords[0] + 1, n.coords[1]],
            n.name + (n.borderLength ? ' (' + n.borderLength + ')' : ''),
            n.color,
            '10px'
          ));

          // Border lines
          if (n.borderLine) {
            var line = L.polyline(n.borderLine, {
              color: n.color,
              weight: 3,
              opacity: 0.7,
              dashArray: n.color === '#FF6B6B' ? '8,6' : '4,4'
            }).addTo(map);
            app.addLayer(line);
          }
        });

        // Maritime neighbours
        [DATA.indiaNeighbours.sriLanka, DATA.indiaNeighbours.maldives].forEach(function (mn) {
          var m = L.circleMarker(mn.coords, {
            radius: 8,
            color: '#000',
            fillColor: mn.color,
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(mn.name, mn.issues, ['maritime', 'neighbour']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([mn.coords[0] - 1, mn.coords[1]], mn.name, mn.color, '10px'));
        });

        // Nepal dispute
        DATA.indiaNeighbours.nepal.disputes.forEach(function (d) {
          var m = L.circleMarker(d.coords, {
            radius: 8, color: '#000', fillColor: d.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚠ ' + d.name, d.note, ['dispute', 'Nepal']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.coords[0] + 0.5, d.coords[1]], d.name, d.color, '9px'));
        });

        // Sir Creek
        var sc = DATA.sirCreek;
        var scm = L.circleMarker(sc.coords, {
          radius: 7, color: '#000', fillColor: sc.color, fillOpacity: 0.9, weight: 2
        }).addTo(map);
        scm.bindPopup(app.buildPopup('⚠ Sir Creek', sc.note, ['dispute', 'maritime']));
        scm.on('mouseover', function () { this.setRadius(11); });
        scm.on('mouseout', function () { this.setRadius(7); });
        app.addLayer(scm);
        app.addLayer(app.labelMarker([sc.coords[0] - 0.5, sc.coords[1]], 'Sir Creek', sc.color, '9px'));

        // Strategic corridors
        DATA.strategicCorridors.forEach(function (cor) {
          var line = L.polyline(cor.path, {
            color: cor.color,
            weight: 3.5,
            opacity: 0.8,
            dashArray: '10,5'
          }).addTo(map);
          line.bindPopup(app.buildPopup(
            cor.name,
            'Length: ' + cor.length + '<br>Status: ' + cor.status,
            ['corridor', '2024']
          ));
          app.addLayer(line);

          var mid = Math.floor(cor.path.length / 2);
          app.addLayer(app.labelMarker(
            [cor.path[mid][0] + 0.5, cor.path[mid][1] + 0.5],
            cor.name.split('(')[0].trim(),
            cor.color,
            '9px'
          ));
        });

        // India center marker
        app.addLayer(app.circleMarker([22.0, 78.0], { radius: 4, color: '#FFD700', borderColor: '#000' }));

        // Info boxes
        app.addLayer(app.infoBox([36.0, 71.0],
          '<b style="color:#FFEB3B">Pakistan Border</b><br>' +
          'LoC: ceasefire 2021 holding<br>' +
          'IB: fenced + tech surveillance<br>' +
          'Sir Creek: maritime unresolved'
        ));

        app.addLayer(app.infoBox([20.0, 95.0],
          '<b style="color:#FFA500">Myanmar Border</b><br>' +
          'Civil war → refugee flows<br>' +
          'FMR restrictions 2024-25<br>' +
          'Border fencing proposed<br>' +
          'Trilateral Highway resumed'
        ));

        app.addLayer(app.infoBox([22.0, 93.0],
          '<b style="color:#42A5F5">Bangladesh 2024</b><br>' +
          'Political change Aug 2024<br>' +
          'Sheikh Hasina resigned<br>' +
          'Teesta still unresolved<br>' +
          'Smart fencing ongoing'
        ));

        app.showToast('Map 116: India Neighbours & Borders loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 117 — WORLD POLITICAL CHANGES (2023-25)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 117,
      title: 'World Political Changes 2023-25',
      subtitle: 'BRICS expansion, NATO expansion, conflict zones, G20+AU',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Changes',
          items: [
            { dot: '#00FF88', label: 'NATO New Members (2023-24)' },
            { dot: '#FFA500', label: 'BRICS New Members (2024)' },
            { dot: '#FF6B6B', label: 'Active Conflict Zone' },
            { dot: '#4FC3F7', label: 'Quad Member' },
            { dot: '#FFEB3B', label: 'G20 New (AU 2023)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Changed' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'BRICS expansion', value: '5 new members (2024)' },
            { label: 'NATO members', value: '32 (Finland 2023, Sweden 2024)' },
            { label: 'G20 + AU', value: 'African Union permanent member (2023)' },
            { label: 'Active conflicts', value: 'Ukraine, Gaza, Yemen, Myanmar, Sudan' },
            { label: 'Global South assertion', value: 'Rising multipolar world' },
            { label: 'QUAD', value: 'India, USA, Japan, Australia' },
            { label: 'India G20 presidency', value: '2023 (historic)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'BRICS 2024: Egypt, UAE, Iran, Ethiopia, Saudi Arabia — expanded block',
            'NATO: Finland (2023) + Sweden (2024) joined — largest expansion post-Cold War',
            'G20: AU added as permanent member during India\'s presidency 2023',
            'Russia-Ukraine war: ongoing since 2022, 1000+ days',
            'Israel-Gaza: Oct 2023 onwards, humanitarian crisis',
            'Red Sea: Houthi attacks on shipping → trade disruption',
            'Multi-polar world replacing West-dominated order'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: BRICS expanded — 5 new members, counter-G7 block assertion',
            '2024: Sweden joins NATO (32nd member) — Nordic defense realignment',
            '2023: India\'s G20 presidency — AU permanent member, "One Earth" theme',
            '2023-25: Russia-Ukraine war continues — NATO involvement deepened',
            '2023-25: Israel-Gaza conflict — largest displacement in Palestine',
            '2024-25: Red Sea crisis — global shipping disrupted',
            'Global South demands reform: UNSC, IMF, World Bank governance'
          ]
        }
      ],
      render: function (map, app) {
        // NATO expansion
        DATA.worldPoliticalChanges.natoExpansion.forEach(function (n) {
          var ring = L.circleMarker(n.coords, {
            radius: 16, color: n.color, fillColor: n.color,
            fillOpacity: 0.12, weight: 2, dashArray: '4,4'
          }).addTo(map);
          app.addLayer(ring);

          var m = L.circleMarker(n.coords, {
            radius: 8, color: '#000', fillColor: n.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('🛡 NATO: ' + n.name + ' (' + n.year + ')', 'Joined NATO — Northern Europe defense realignment', ['NATO', n.year.toString(), 'new']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([n.coords[0] + 2, n.coords[1]], n.name + ' → NATO ' + n.year, n.color, '10px'));
        });

        // BRICS expansion
        DATA.worldPoliticalChanges.bricsExpansion.forEach(function (b) {
          var ring = L.circleMarker(b.coords, {
            radius: 14, color: b.color, fillColor: b.color,
            fillOpacity: 0.15, weight: 2, dashArray: '6,4'
          }).addTo(map);
          app.addLayer(ring);

          var m = L.circleMarker(b.coords, {
            radius: 8, color: '#000', fillColor: b.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('BRICS+ ' + b.name + ' (' + b.year + ')', 'New BRICS member 2024', ['BRICS', '2024', 'expansion']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([b.coords[0] - 2.5, b.coords[1]], b.name + ' (BRICS 2024)', b.color, '9px'));
        });

        // BRICS original members
        var origBrics = [
          { name: 'Brazil', coords: [-10.0, -52.0] },
          { name: 'Russia', coords: [62.0, 100.0] },
          { name: 'India', coords: [22.0, 78.0] },
          { name: 'China', coords: [35.0, 105.0] },
          { name: 'South Africa', coords: [-29.0, 25.0] }
        ];
        origBrics.forEach(function (ob) {
          var m = L.circleMarker(ob.coords, {
            radius: 9, color: '#000', fillColor: '#FFEB3B', fillOpacity: 0.8, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('BRICS (founding): ' + ob.name, 'Original BRICS member', ['BRICS', 'founding']));
          m.on('mouseover', function () { this.setRadius(13); });
          m.on('mouseout', function () { this.setRadius(9); });
          app.addLayer(m);
        });

        // Conflict zones
        DATA.worldPoliticalChanges.conflictZones.forEach(function (cz) {
          var cir = L.circle(cz.coords, {
            radius: 400000,
            color: cz.color,
            fillColor: cz.color,
            fillOpacity: 0.12,
            weight: 2,
            dashArray: '6,4'
          }).addTo(map);
          cir.bindPopup(app.buildPopup(
            '⚠ ' + cz.name,
            'Since: ' + cz.since + (cz.note ? '<br>' + cz.note : ''),
            ['conflict', cz.since]
          ));
          app.addLayer(cir);
          app.addLayer(app.labelMarker([cz.coords[0] + 3, cz.coords[1]], cz.name, cz.color, '9px'));
        });

        // QUAD markers
        DATA.indianOceanRegion.quadMembers.forEach(function (q) {
          var m = L.circleMarker(q.coords, {
            radius: 8, color: '#000', fillColor: q.color, fillOpacity: 0.7, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('QUAD: ' + q.name, 'Quadrilateral Security Dialogue member', ['QUAD']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
        });

        // QUAD connectivity lines
        for (var i = 0; i < DATA.indianOceanRegion.quadMembers.length; i++) {
          for (var j = i + 1; j < DATA.indianOceanRegion.quadMembers.length; j++) {
            var ql = L.polyline(
              [DATA.indianOceanRegion.quadMembers[i].coords, DATA.indianOceanRegion.quadMembers[j].coords],
              { color: '#4FC3F7', weight: 0.8, opacity: 0.2, dashArray: '3,8' }
            ).addTo(map);
            app.addLayer(ql);
          }
        }

        // G20 + AU marker
        var auM = DATA.worldPoliticalChanges.g20AU;
        var auMarker = L.circleMarker(auM.coords, {
          radius: 9, color: '#000', fillColor: auM.color, fillOpacity: 0.9, weight: 2
        }).addTo(map);
        auMarker.bindPopup(app.buildPopup('🌍 ' + auM.name, auM.note, ['G20', '2023', 'India presidency']));
        auMarker.on('mouseover', function () { this.setRadius(13); });
        auMarker.on('mouseout', function () { this.setRadius(9); });
        app.addLayer(auMarker);
        app.addLayer(app.labelMarker([auM.coords[0] + 3, auM.coords[1]], 'AU → G20 (India 2023)', auM.color, '10px'));

        // Info boxes
        app.addLayer(app.infoBox([50.0, -20.0],
          '<b style="color:#00FF88">NATO Expansion</b><br>' +
          'Finland joined 2023 | Sweden 2024<br>' +
          '32 members now<br>' +
          'Largest post-Cold War expansion'
        ));

        app.addLayer(app.infoBox([5.0, 55.0],
          '<b style="color:#FFA500">BRICS+ 2024</b><br>' +
          '5 new members: Egypt, UAE, Iran,<br>' +
          'Ethiopia, Saudi Arabia<br>' +
          '<span style="color:#FFEB3B">~45% world population</span>'
        ));

        app.addLayer(app.infoBox([55.0, 45.0],
          '<b style="color:#FF6B6B">Active Conflicts</b><br>' +
          'Russia-Ukraine (2022+)<br>' +
          'Israel-Gaza (2023+)<br>' +
          'Red Sea/Yemen (2024+)<br>' +
          'Myanmar, Sudan civil wars'
        ));

        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">India G20 2023</b><br>' +
          '"One Earth One Family One Future"<br>' +
          'AU permanent G20 member<br>' +
          'New Delhi Leaders\' Declaration'
        ));

        app.showToast('Map 117: World Political Changes loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 118 — INDIAN OCEAN REGION STRATEGY
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 118,
      title: 'Indian Ocean Region — Strategic Geography',
      subtitle: 'String of Pearls vs Necklace of Diamonds, QUAD, chokepoints, SAGAR',
      mapConfig: { center: [5.0, 70.0], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Strategic Features',
          items: [
            { dot: '#FF6B6B', label: 'String of Pearls (China)' },
            { dot: '#00FF88', label: 'Necklace of Diamonds (India)' },
            { dot: '#4FC3F7', label: 'QUAD Member' },
            { dot: '#FFD700', label: 'Strategic Chokepoint' },
            { dot: '#AB47BC', label: 'Naval Base / Facility' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'India Expansion 2024-25' },
            { dot: '#FF6B6B', label: 'China Expansion' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Indian Ocean area', value: '~70.56 million km²' },
            { label: 'IOR trade share', value: '~80% of world oil, ~50% container' },
            { label: 'String of Pearls ports', value: 'Gwadar, Hambantota, Djibouti, Kyaukpyu' },
            { label: 'India counter', value: 'Necklace of Diamonds strategy' },
            { label: 'SAGAR doctrine', value: 'Security And Growth for All in the Region' },
            { label: 'Andaman & Nicobar', value: 'Strategic tri-service command' },
            { label: 'QUAD exercises', value: 'Malabar naval exercises' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'IOR: crossroads of global maritime trade — oil, container, strategic choke transit',
            'China String of Pearls: Gwadar, Hambantota, Djibouti, Kyaukpyu — dual-use ports',
            'India Necklace of Diamonds: Sabang, Duqm, Assumption, Agaléga — counter-strategy',
            'QUAD: India-USA-Japan-Australia — maritime security, Free Indo-Pacific',
            'SAGAR: Security And Growth for All in the Region — India\'s IOR doctrine',
            'Andaman & Nicobar: strategic hub controlling Malacca approach',
            'IORA: Indian Ocean Rim Association — 23 members'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Agaléga (Mauritius) — India built runway + jetty, operational',
            '2024: Malabar naval exercises continued (QUAD nations)',
            '2024-25: China expanding Gwadar + Djibouti facilities',
            '2024: India-France defense agreement — Reunion Island cooperation',
            '2025: Andaman & Nicobar Command upgrade — INS Jatayu at Minicoy',
            'India coastal radar network expansion across IOR partner nations',
            'Sri Lanka: balancing India-China — port access negotiations'
          ]
        }
      ],
      render: function (map, app) {
        // String of Pearls (China)
        DATA.indianOceanRegion.stringOfPearls.forEach(function (sp) {
          var ring = L.circleMarker(sp.coords, {
            radius: 16, color: sp.color, fillColor: sp.color,
            fillOpacity: 0.12, weight: 2, dashArray: '6,4'
          }).addTo(map);
          app.addLayer(ring);

          var m = L.circleMarker(sp.coords, {
            radius: 9, color: '#000', fillColor: sp.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('🔴 String of Pearls: ' + sp.name, sp.note, ['China', 'String of Pearls', 'strategic']));
          m.on('mouseover', function () { this.setRadius(13); this.setStyle({ weight: 3 }); });
          m.on('mouseout', function () { this.setRadius(9); this.setStyle({ weight: 2 }); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([sp.coords[0] + 1.5, sp.coords[1]], sp.name, sp.color, '9px'));
        });

        // Connect String of Pearls
        var sopCoords = DATA.indianOceanRegion.stringOfPearls.map(function (s) { return s.coords; });
        var sopLine = L.polyline(sopCoords, {
          color: '#FF6B6B', weight: 1.5, opacity: 0.3, dashArray: '4,6'
        }).addTo(map);
        app.addLayer(sopLine);

        // Necklace of Diamonds (India)
        DATA.indianOceanRegion.necklaceOfDiamonds.forEach(function (nd) {
          var ring = L.circleMarker(nd.coords, {
            radius: 16, color: nd.color, fillColor: nd.color,
            fillOpacity: 0.12, weight: 2, dashArray: '4,4'
          }).addTo(map);
          app.addLayer(ring);

          var m = L.circleMarker(nd.coords, {
            radius: 9, color: '#000', fillColor: nd.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('💎 Necklace of Diamonds: ' + nd.name, nd.note, ['India', 'Necklace of Diamonds', 'counter']));
          m.on('mouseover', function () { this.setRadius(13); this.setStyle({ weight: 3 }); });
          m.on('mouseout', function () { this.setRadius(9); this.setStyle({ weight: 2 }); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([nd.coords[0] - 2, nd.coords[1]], nd.name, nd.color, '9px'));
        });

        // Connect Necklace of Diamonds
        var nodCoords = DATA.indianOceanRegion.necklaceOfDiamonds.map(function (n) { return n.coords; });
        var nodLine = L.polyline(nodCoords, {
          color: '#00FF88', weight: 1.5, opacity: 0.3, dashArray: '4,6'
        }).addTo(map);
        app.addLayer(nodLine);

        // Chokepoints
        DATA.indianOceanRegion.chokepoints.forEach(function (cp) {
          var m = L.circleMarker(cp.coords, {
            radius: 8, color: '#000', fillColor: cp.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚓ ' + cp.name, cp.note, ['chokepoint', 'strategic']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([cp.coords[0] + 1.5, cp.coords[1]], cp.name, cp.color, '9px'));
        });

        // Andaman & Nicobar
        var an = DATA.indianOceanRegion.andamanNicobar;
        var anRing = L.circleMarker(an.coords, {
          radius: 18, color: '#00FF88', fillColor: '#00FF88',
          fillOpacity: 0.12, weight: 2
        }).addTo(map);
        app.addLayer(anRing);
        var anM = L.circleMarker(an.coords, {
          radius: 10, color: '#000', fillColor: '#00FF88', fillOpacity: 0.95, weight: 2
        }).addTo(map);
        anM.bindPopup(app.buildPopup('🏝 ' + an.name, an.note, ['A&N', 'strategic hub', 'India']));
        anM.on('mouseover', function () { this.setRadius(14); });
        anM.on('mouseout', function () { this.setRadius(10); });
        app.addLayer(anM);
        app.addLayer(app.labelMarker([an.coords[0] - 2, an.coords[1]], 'A&N: India Strategic Hub', '#00FF88', '10px'));

        // India (center)
        app.addLayer(app.circleMarker([22.0, 78.0], { radius: 8, color: '#FFD700', borderColor: '#000' }));
        app.addLayer(app.labelMarker([22.0, 80.0], 'INDIA', '#FFD700', '13px'));

        // QUAD members
        DATA.indianOceanRegion.quadMembers.forEach(function (q) {
          var m = L.circleMarker(q.coords, {
            radius: 7, color: '#000', fillColor: q.color, fillOpacity: 0.7, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('QUAD: ' + q.name, 'Quadrilateral Security Dialogue', ['QUAD']));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([30.0, 60.0],
          '<b style="color:#FF6B6B">String of Pearls</b><br>' +
          'China: Gwadar, Hambantota,<br>' +
          'Djibouti, Kyaukpyu, Chittagong<br>' +
          'Dual-use ports encirclement'
        ));

        app.addLayer(app.infoBox([-5.0, 48.0],
          '<b style="color:#00FF88">Necklace of Diamonds</b><br>' +
          'India counter: Sabang, Duqm,<br>' +
          'Agaléga, Assumption Island<br>' +
          'Naval logistics agreements'
        ));

        app.addLayer(app.infoBox([15.0, 80.0],
          '<b style="color:#FFD700">SAGAR Doctrine</b><br>' +
          'Security And Growth for All<br>' +
          'India\'s IOR maritime doctrine<br>' +
          'First Responder in IOR'
        ));

        app.addLayer(app.infoBox([-15.0, 75.0],
          '<b style="color:#4FC3F7">QUAD Active</b><br>' +
          'India, USA, Japan, Australia<br>' +
          'Malabar exercises annual<br>' +
          'Free & Open Indo-Pacific'
        ));

        app.showToast('Map 118: Indian Ocean Region Strategy loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 119 — INDIA-PAKISTAN BORDER & LoC
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 119,
      title: 'India-Pakistan Border & Line of Control',
      subtitle: 'LoC, International Border, Sir Creek, ceasefire status',
      mapConfig: { center: [30.0, 73.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Border Features',
          items: [
            { line: '#FF6B6B', label: 'Line of Control (LoC)' },
            { line: '#FFEB3B', label: 'International Border (IB)' },
            { dot: '#FF6B6B', label: 'Disputed / PoK' },
            { dot: '#00FF88', label: 'Ceasefire (2021+)' },
            { dot: '#4FC3F7', label: 'Border Post / City' },
            { dot: '#FFA500', label: 'Sir Creek Dispute' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Ceasefire Holding 2025' },
            { dot: '#FF6B6B', label: 'Disputed Territory' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Indo-Pak border', value: '3,323 km total' },
            { label: 'LoC length', value: '~740 km (J&K)' },
            { label: 'IB length', value: '~2,583 km (Punjab to Gujarat)' },
            { label: 'PoK area', value: '~13,297 km² (Pak-occupied)' },
            { label: 'Gilgit-Baltistan', value: '~72,971 km² (Pak-administered)' },
            { label: 'Sir Creek', value: 'Maritime boundary unresolved' },
            { label: 'Ceasefire', value: 'Feb 2021 — largely holding' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'LoC: ceasefire line from 1949 → LoC since 1972 (Simla Agreement)',
            'IB: demarcated border from Punjab to Rann of Kutch (Radcliffe Line 1947)',
            'PoK: India claims as integral part — Pakistan controls "Azad J&K" + Gilgit-Baltistan',
            'Sir Creek: 96 km marshy creek, India-Pakistan maritime boundary dispute',
            'Ceasefire 2021: DGMOs agreement, largely holding through 2025',
            'Border fencing: IB largely fenced, LoC smart fencing ongoing',
            'Kartarpur Corridor: operational since 2019, pilgrimage access'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Ceasefire 2021 largely holding through 2025 — reduced casualties',
            'Border fencing + surveillance technology upgraded',
            'LoC: highly militarized but stable 2023-25',
            'Sir Creek: no progress on negotiations',
            'PoK/Gilgit-Baltistan: India raises in UN, international forums',
            'Cross-border terrorism: India maintains vigilance, border grid strengthened',
            'Kartarpur Corridor: operational, expanded pilgrim quota'
          ]
        }
      ],
      render: function (map, app) {
        // LoC line
        var locLine = L.polyline([
          [35.5, 77.0], [34.5, 76.0], [34.0, 75.0], [33.8, 74.5], [33.0, 74.2], [32.5, 74.8]
        ], {
          color: '#FF6B6B', weight: 4, opacity: 0.85, dashArray: '10,6'
        }).addTo(map);
        locLine.bindPopup(app.buildPopup('Line of Control (LoC)', '~740 km | J&K sector<br>Ceasefire 2021 holding<br>Highly militarized but stable', ['LoC', 'ceasefire']));
        app.addLayer(locLine);
        app.addLayer(app.labelMarker([34.0, 75.5], 'LoC', '#FF6B6B', '12px'));

        // International Border
        var ibLine = L.polyline(DATA.indiaNeighbours.pakistan.borderLine.slice(5), {
          color: '#FFEB3B', weight: 3, opacity: 0.7, dashArray: '6,4'
        }).addTo(map);
        ibLine.bindPopup(app.buildPopup('International Border (IB)', '~2,583 km | Punjab to Gujarat<br>Radcliffe Line 1947 | Largely fenced', ['IB', 'border']));
        app.addLayer(ibLine);
        app.addLayer(app.labelMarker([27.0, 71.5], 'International Border', '#FFEB3B', '10px'));

        // PoK and Gilgit-Baltistan
        var pok = L.circle([34.0, 74.0], {
          radius: 80000, color: '#FF6B6B', fillColor: '#FF6B6B',
          fillOpacity: 0.15, weight: 2, dashArray: '6,4'
        }).addTo(map);
        pok.bindPopup(app.buildPopup('⚠ PoK (Pakistan-occupied Kashmir)', 'Area: ~13,297 km²<br>India claims as integral part<br>Illegally occupied by Pakistan since 1947', ['PoK', 'disputed']));
        app.addLayer(pok);
        app.addLayer(app.labelMarker([34.0, 73.5], 'PoK', '#FF6B6B', '11px'));

        var gb = L.circle([36.0, 75.0], {
          radius: 120000, color: '#FF6B6B', fillColor: '#FF6B6B',
          fillOpacity: 0.1, weight: 2, dashArray: '8,4'
        }).addTo(map);
        gb.bindPopup(app.buildPopup('⚠ Gilgit-Baltistan', '~72,971 km²<br>Pak-administered territory<br>Part of India — illegally ceded by Pakistan', ['Gilgit', 'disputed']));
        app.addLayer(gb);
        app.addLayer(app.labelMarker([36.5, 75.0], 'Gilgit-Baltistan', '#FF6B6B', '10px'));

        // Key cities/posts
        var borderCities = [
          { name: 'Srinagar', coords: [34.08, 74.79], color: '#4FC3F7' },
          { name: 'Jammu', coords: [32.73, 74.87], color: '#4FC3F7' },
          { name: 'Amritsar', coords: [31.63, 74.87], color: '#4FC3F7' },
          { name: 'Wagah-Attari', coords: [31.6, 74.6], color: '#00FF88', note: 'Border crossing point' },
          { name: 'Jaisalmer', coords: [26.92, 70.91], color: '#4FC3F7' },
          { name: 'Barmer', coords: [25.75, 71.39], color: '#4FC3F7' },
          { name: 'Bhuj', coords: [23.25, 69.67], color: '#4FC3F7' },
          { name: 'Kartarpur', coords: [32.45, 74.65], color: '#00FF88', note: 'Corridor operational 2019' }
        ];

        borderCities.forEach(function (bc) {
          var m = L.circleMarker(bc.coords, {
            radius: 6, color: '#000', fillColor: bc.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(bc.name, bc.note || 'Border region city', bc.color === '#00FF88' ? ['2019', 'corridor'] : ['city']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([bc.coords[0] + 0.3, bc.coords[1] + 0.3], bc.name, bc.color, '9px'));
        });

        // Sir Creek
        var scMark = L.circleMarker(DATA.sirCreek.coords, {
          radius: 9, color: '#000', fillColor: DATA.sirCreek.color, fillOpacity: 0.9, weight: 2
        }).addTo(map);
        scMark.bindPopup(app.buildPopup('⚠ Sir Creek', DATA.sirCreek.note + '<br>96 km marshy creek<br>Maritime boundary affects EEZ', ['Sir Creek', 'dispute', 'maritime']));
        scMark.on('mouseover', function () { this.setRadius(13); });
        scMark.on('mouseout', function () { this.setRadius(9); });
        app.addLayer(scMark);
        app.addLayer(app.labelMarker([DATA.sirCreek.coords[0] - 0.8, DATA.sirCreek.coords[1]], 'Sir Creek', DATA.sirCreek.color, '10px'));

        // Info boxes
        app.addLayer(app.infoBox([35.5, 79.0],
          '<b style="color:#00FF88">Ceasefire 2021</b><br>' +
          'DGMO agreement Feb 2021<br>' +
          'Largely holding through 2025<br>' +
          'Reduced civilian/military casualties'
        ));

        app.addLayer(app.infoBox([29.0, 68.0],
          '<b style="color:#FFEB3B">IB: Radcliffe Line</b><br>' +
          'Drawn 1947 partition<br>' +
          '~2,583 km Punjab→Gujarat<br>' +
          'Largely fenced + smart surveillance'
        ));

        app.addLayer(app.infoBox([25.0, 73.0],
          '<b style="color:#FF6B6B">Sir Creek</b><br>' +
          '96 km creek in Rann of Kutch<br>' +
          'Maritime boundary affects EEZ<br>' +
          'Negotiations stalled'
        ));

        app.showToast('Map 119: India-Pakistan Border loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 120 — INDIA NE BORDERS & EAST
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 120,
      title: 'India — Northeast & Eastern Borders',
      subtitle: 'Nepal, Bhutan, Bangladesh, Myanmar — disputes & connectivity',
      mapConfig: { center: [25.0, 88.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Border Status',
          items: [
            { line: '#FFEB3B', label: 'Nepal Border' },
            { line: '#66BB6A', label: 'Bhutan Border' },
            { line: '#42A5F5', label: 'Bangladesh Border' },
            { line: '#FFA500', label: 'Myanmar Border' },
            { dot: '#FF6B6B', label: 'Dispute Point' },
            { dot: '#00FF88', label: 'New Connectivity 2024' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Sensitive' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Nepal border', value: '1,751 km (5 states)' },
            { label: 'Bhutan border', value: '699 km (4 states)' },
            { label: 'Bangladesh border', value: '4,096 km (5 states, longest)' },
            { label: 'Myanmar border', value: '1,643 km (4 states)' },
            { label: 'Chicken\'s Neck', value: 'Siliguri Corridor (~22 km wide)' },
            { label: 'Kalapani dispute', value: 'India-Nepal unresolved' },
            { label: 'Act East Policy', value: 'India\'s NE connectivity push' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Bangladesh: longest Indian border (4,096 km), LBA 2015 resolved enclaves',
            'Nepal: open border (Treaty of Peace 1950), Kalapani dispute since 2019-20',
            'Bhutan: friendly, Doklam tri-junction sensitive, MoU 2023',
            'Myanmar: post-2021 civil war → refugee crisis, FMR restricted',
            'Siliguri Corridor: India\'s strategic vulnerability — connects NE to mainland',
            'Act East Policy: NE as India\'s gateway to SE Asia',
            'Trilateral Highway + Kaladan project: connectivity to SE Asia'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Bangladesh political upheaval (Aug) — relations reset period',
            '2024-25: Myanmar FMR restrictions, border fencing proposal',
            '2024: Nepal PM Prachanda visit to India — dialogue continuing',
            '2023: India-Bhutan MoU on border dispute resolution',
            '2024: Sela Tunnel opened — all-weather Tawang access',
            'Teesta water sharing: still unresolved with Bangladesh',
            'Kaladan Multi-Modal project: near completion 2024-25'
          ]
        }
      ],
      render: function (map, app) {
        // Nepal border
        var nepalLine = L.polyline(DATA.indiaNeighbours.nepal.borderLine, {
          color: '#FFEB3B', weight: 3, opacity: 0.7, dashArray: '6,4'
        }).addTo(map);
        nepalLine.bindPopup(app.buildPopup('Nepal Border', '1,751 km | Open border (Treaty 1950)<br>5 Indian states', ['Nepal', 'border']));
        app.addLayer(nepalLine);
        app.addLayer(app.labelMarker([28.5, 84.0], 'NEPAL', '#FFEB3B', '12px'));

        // Bhutan border
        var bhutanLine = L.polyline(DATA.indiaNeighbours.bhutan.borderLine, {
          color: '#66BB6A', weight: 3, opacity: 0.7, dashArray: '4,4'
        }).addTo(map);
        bhutanLine.bindPopup(app.buildPopup('Bhutan Border', '699 km | Friendly relations<br>Doklam tri-junction sensitive', ['Bhutan']));
        app.addLayer(bhutanLine);
        app.addLayer(app.labelMarker([27.5, 90.5], 'BHUTAN', '#66BB6A', '11px'));

        // Bangladesh border
        var bdLine = L.polyline(DATA.indiaNeighbours.bangladesh.borderLine, {
          color: '#42A5F5', weight: 3, opacity: 0.7
        }).addTo(map);
        bdLine.bindPopup(app.buildPopup('Bangladesh Border', '4,096 km | India\'s longest border<br>Smart fencing ongoing<br>Political change Aug 2024', ['Bangladesh']));
        app.addLayer(bdLine);
        app.addLayer(app.labelMarker([24.0, 90.0], 'BANGLADESH', '#42A5F5', '11px'));

        // Myanmar border
        var mmLine = L.polyline(DATA.indiaNeighbours.myanmar.borderLine, {
          color: '#FFA500', weight: 3, opacity: 0.7, dashArray: '8,4'
        }).addTo(map);
        mmLine.bindPopup(app.buildPopup('Myanmar Border', '1,643 km | Civil war → refugee flows<br>FMR restrictions 2024-25<br>Border fencing proposed', ['Myanmar', 'turbulent']));
        app.addLayer(mmLine);
        app.addLayer(app.labelMarker([21.0, 96.0], 'MYANMAR', '#FFA500', '11px'));

        // Kalapani dispute
        var kalapani = DATA.indiaNeighbours.nepal.disputes[0];
        var km = L.circleMarker(kalapani.coords, {
          radius: 10, color: '#000', fillColor: kalapani.color, fillOpacity: 0.9, weight: 2
        }).addTo(map);
        km.bindPopup(app.buildPopup('⚠ ' + kalapani.name, kalapani.note, ['dispute', 'Nepal', 'Kalapani']));
        km.on('mouseover', function () { this.setRadius(14); });
        km.on('mouseout', function () { this.setRadius(10); });
        app.addLayer(km);
        app.addLayer(app.labelMarker([kalapani.coords[0] + 0.5, kalapani.coords[1] + 0.5], 'Kalapani Dispute', kalapani.color, '9px'));

        // Siliguri Corridor (Chicken's Neck)
        var siliguri = L.circleMarker([26.72, 88.43], {
          radius: 10, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.3, weight: 3
        }).addTo(map);
        siliguri.bindPopup(app.buildPopup('⚠ Siliguri Corridor ("Chicken\'s Neck")', '~22 km wide at narrowest<br>Only land link to NE India<br>Strategic vulnerability', ['Siliguri', 'strategic']));
        siliguri.on('mouseover', function () { this.setRadius(14); });
        siliguri.on('mouseout', function () { this.setRadius(10); });
        app.addLayer(siliguri);
        app.addLayer(app.labelMarker([26.2, 88.43], 'Siliguri Corridor', '#FFD700', '10px'));

        // Doklam
        var doklam = L.circleMarker([27.4, 89.0], {
          radius: 8, color: '#000', fillColor: '#FF6B6B', fillOpacity: 0.9, weight: 2
        }).addTo(map);
        doklam.bindPopup(app.buildPopup('⚠ Doklam Tri-junction', '2017 India-China standoff<br>Bhutan-China-India tri-junction<br>Still sensitive area', ['Doklam', '2017']));
        doklam.on('mouseover', function () { this.setRadius(12); });
        doklam.on('mouseout', function () { this.setRadius(8); });
        app.addLayer(doklam);
        app.addLayer(app.labelMarker([27.8, 89.3], 'Doklam', '#FF6B6B', '9px'));

        // Strategic corridors
        DATA.strategicCorridors.forEach(function (cor) {
          var line = L.polyline(cor.path, {
            color: cor.color, weight: 3.5, opacity: 0.8, dashArray: '10,5'
          }).addTo(map);
          line.bindPopup(app.buildPopup(cor.name, 'Status: ' + cor.status + '<br>Length: ' + cor.length, ['corridor', '2024']));
          app.addLayer(line);
          var mid = Math.floor(cor.path.length / 2);
          app.addLayer(app.labelMarker([cor.path[mid][0], cor.path[mid][1] + 1], cor.name.split(' ').slice(0, 3).join(' '), cor.color, '9px'));
        });

        // NE States labels
        var neStates = [
          { name: 'Arunachal', coords: [28.0, 94.5] },
          { name: 'Assam', coords: [26.2, 92.5] },
          { name: 'Nagaland', coords: [26.0, 94.5] },
          { name: 'Manipur', coords: [24.8, 93.9] },
          { name: 'Mizoram', coords: [23.2, 92.8] },
          { name: 'Tripura', coords: [23.8, 91.5] },
          { name: 'Meghalaya', coords: [25.5, 91.8] },
          { name: 'Sikkim', coords: [27.5, 88.5] }
        ];
        neStates.forEach(function (ns) {
          app.addLayer(app.labelMarker(ns.coords, ns.name, '#4FC3F7', '8px'));
        });

        // Info boxes
        app.addLayer(app.infoBox([22.0, 86.0],
          '<b style="color:#42A5F5">Bangladesh 2024</b><br>' +
          'Sheikh Hasina resigned Aug 2024<br>' +
          'Relations reset period<br>' +
          'Teesta unresolved | Smart fencing'
        ));

        app.addLayer(app.infoBox([20.0, 95.0],
          '<b style="color:#FFA500">Myanmar 2024-25</b><br>' +
          'Civil war ongoing since 2021<br>' +
          'FMR restrictions imposed<br>' +
          'Border fencing proposal<br>' +
          'Trilateral Highway resumed'
        ));

        app.addLayer(app.infoBox([30.0, 82.0],
          '<b style="color:#FFEB3B">Nepal Kalapani</b><br>' +
          'Kalapani-Lipulekh-Limpiyadhura<br>' +
          'Nepal map 2020 contests<br>' +
          'Dialogue ongoing, unresolved'
        ));

        app.showToast('Map 120: India NE & Eastern Borders loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 121 — WORLD GEOPOLITICAL BLOCKS & ALLIANCES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 121,
      title: 'World Geopolitical Blocks & Alliances',
      subtitle: 'BRICS+, G7, NATO, QUAD, SCO, ASEAN, AU — multipolar 2025',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Alliances',
          items: [
            { dot: '#FFEB3B', label: 'BRICS+ (original)' },
            { dot: '#FFA500', label: 'BRICS+ (2024 new)' },
            { dot: '#4FC3F7', label: 'G7 / NATO Core' },
            { dot: '#00FF88', label: 'QUAD' },
            { dot: '#AB47BC', label: 'SCO' },
            { dot: '#66BB6A', label: 'ASEAN' },
            { dot: '#FF6B6B', label: 'Conflict Zone' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Changed' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'BRICS+', value: '10 members (2024), ~45% world pop' },
            { label: 'G7', value: 'USA, UK, France, Germany, Italy, Canada, Japan' },
            { label: 'NATO', value: '32 members (2024)' },
            { label: 'QUAD', value: 'India, USA, Japan, Australia' },
            { label: 'SCO', value: '10 members (China, Russia, India, Pakistan + 6)' },
            { label: 'ASEAN', value: '10 SE Asian nations' },
            { label: 'African Union', value: '55 members, G20 permanent (2023)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Multi-polar world emerging: West vs Global South → blocs realigning',
            'India: unique multi-alignment — BRICS + QUAD + SCO + G20',
            'BRICS vs G7: economic weight shifting, BRICS > G7 in PPP',
            'NATO: expanded to 32 with Finland, Sweden — Russia encirclement concern',
            'SCO: China-Russia led, India-Pakistan both members — strategic balancing',
            'ASEAN centrality: Indo-Pacific architecture, India\'s Act East Policy',
            'Global South assertion: demand for UNSC reform, multilateral restructuring'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: BRICS+ operational with 10 members — de-dollarization debate',
            '2024: NATO at 32 members — Finland (2023) + Sweden (2024)',
            '2024: SCO summit — India-hosted virtual + Kazakhstan in-person',
            '2024: QUAD leaders summit continues — maritime security focus',
            '2023: India G20 presidency — transformative, AU inclusion',
            'Global South: India\'s "Voice of the Global South" summit (2023)',
            'Multi-alignment: India balances QUAD + BRICS + SCO simultaneously'
          ]
        }
      ],
      render: function (map, app) {
        // G7 members
        var g7 = [
          { name: 'USA', coords: [39.0, -98.0] },
          { name: 'UK', coords: [54.0, -2.0] },
          { name: 'France', coords: [46.5, 2.5] },
          { name: 'Germany', coords: [51.0, 10.0] },
          { name: 'Italy', coords: [42.5, 12.5] },
          { name: 'Canada', coords: [56.0, -96.0] },
          { name: 'Japan', coords: [36.5, 138.0] }
        ];

        g7.forEach(function (g) {
          var m = L.circleMarker(g.coords, {
            radius: 8, color: '#000', fillColor: '#4FC3F7', fillOpacity: 0.8, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('G7: ' + g.name, 'Group of Seven advanced economies', ['G7']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([g.coords[0] + 2, g.coords[1]], g.name, '#4FC3F7', '9px'));
        });

        // BRICS original
        var bricsOrig = [
          { name: 'Brazil', coords: [-10.0, -52.0] },
          { name: 'Russia', coords: [62.0, 100.0] },
          { name: 'India', coords: [22.0, 78.0] },
          { name: 'China', coords: [35.0, 105.0] },
          { name: 'S. Africa', coords: [-29.0, 25.0] }
        ];

        bricsOrig.forEach(function (b) {
          var m = L.circleMarker(b.coords, {
            radius: 9, color: '#000', fillColor: '#FFEB3B', fillOpacity: 0.8, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('BRICS: ' + b.name, 'Original BRICS member', ['BRICS']));
          m.on('mouseover', function () { this.setRadius(13); });
          m.on('mouseout', function () { this.setRadius(9); });
          app.addLayer(m);
        });

        // BRICS 2024 new
        DATA.worldPoliticalChanges.bricsExpansion.forEach(function (b) {
          var m = L.circleMarker(b.coords, {
            radius: 8, color: '#000', fillColor: b.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('BRICS+ 2024: ' + b.name, 'New member 2024', ['BRICS+', '2024']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
        });

        // ASEAN members
        var asean = [
          { name: 'Indonesia', coords: [-2.0, 118.0] },
          { name: 'Thailand', coords: [15.0, 100.0] },
          { name: 'Vietnam', coords: [16.0, 107.5] },
          { name: 'Philippines', coords: [12.0, 122.0] },
          { name: 'Malaysia', coords: [3.5, 102.0] },
          { name: 'Singapore', coords: [1.3, 103.8] },
          { name: 'Myanmar', coords: [20.0, 96.0] },
          { name: 'Cambodia', coords: [12.5, 105.0] },
          { name: 'Laos', coords: [18.0, 103.0] },
          { name: 'Brunei', coords: [4.5, 114.8] }
        ];

        asean.forEach(function (a) {
          var m = L.circleMarker(a.coords, {
            radius: 5, color: '#000', fillColor: '#66BB6A', fillOpacity: 0.7, weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('ASEAN: ' + a.name, 'Association of Southeast Asian Nations', ['ASEAN']));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // SCO core markers
        var sco = [
          { name: 'China', coords: [35.0, 105.0] },
          { name: 'Russia', coords: [62.0, 100.0] },
          { name: 'India', coords: [22.0, 78.0] },
          { name: 'Pakistan', coords: [30.0, 69.0] },
          { name: 'Kazakhstan', coords: [48.0, 68.0] },
          { name: 'Uzbekistan', coords: [41.0, 64.0] },
          { name: 'Kyrgyzstan', coords: [41.0, 75.0] },
          { name: 'Tajikistan', coords: [38.5, 71.0] },
          { name: 'Iran', coords: [32.5, 53.5] },
          { name: 'Belarus', coords: [53.5, 28.0] }
        ];

        sco.forEach(function (s) {
          var ring = L.circleMarker(s.coords, {
            radius: 13, color: '#AB47BC', fillColor: 'transparent',
            fillOpacity: 0, weight: 1.5, dashArray: '3,5'
          }).addTo(map);
          ring.bindPopup(app.buildPopup('SCO: ' + s.name, 'Shanghai Cooperation Organisation member', ['SCO']));
          app.addLayer(ring);
        });

        // India special — multi-alignment
        var indiaMulti = L.circleMarker([22.0, 78.0], {
          radius: 14, color: '#FFD700', fillColor: '#FFD700',
          fillOpacity: 0.15, weight: 3
        }).addTo(map);
        indiaMulti.bindPopup(app.buildPopup('🇮🇳 India: Multi-Alignment', 'BRICS + QUAD + SCO + G20<br>Unique strategic balancing<br>Voice of Global South', ['India', 'multi-alignment']));
        app.addLayer(indiaMulti);
        app.addLayer(app.labelMarker([19.0, 78.0], '🇮🇳 Multi-Alignment', '#FFD700', '11px'));

        // QUAD connectivity
        var quadCoords = [[22.0, 78.0], [39.0, -98.0], [36.5, 138.0], [-25.0, 135.0]];
        for (var qi = 0; qi < quadCoords.length; qi++) {
          for (var qj = qi + 1; qj < quadCoords.length; qj++) {
            var ql = L.polyline([quadCoords[qi], quadCoords[qj]], {
              color: '#00FF88', weight: 1, opacity: 0.2, dashArray: '4,8'
            }).addTo(map);
            app.addLayer(ql);
          }
        }

        // Info boxes
        app.addLayer(app.infoBox([45.0, -35.0],
          '<b style="color:#4FC3F7">G7 vs BRICS+</b><br>' +
          'G7: ~43% nominal GDP (declining)<br>' +
          'BRICS+: ~35% nominal, >40% PPP<br>' +
          '<span style="color:#FFEB3B">Power shifting to Global South</span>'
        ));

        app.addLayer(app.infoBox([50.0, 65.0],
          '<b style="color:#AB47BC">SCO</b><br>' +
          '10 members including India<br>' +
          'China-Russia led grouping<br>' +
          'India + Pakistan both members'
        ));

        app.addLayer(app.infoBox([5.0, 115.0],
          '<b style="color:#66BB6A">ASEAN Centrality</b><br>' +
          '10 SE Asian nations<br>' +
          'Indo-Pacific architecture hub<br>' +
          'India\'s Act East gateway'
        ));

        app.addLayer(app.infoBox([0, -10.0],
          '<b style="color:#FFD700">Multipolar World 2025</b><br>' +
          'West-dominated order declining<br>' +
          'UNSC reform demanded<br>' +
          'India: Global South leader'
        ));

        app.showToast('Map 121: World Geopolitical Blocks loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('base-political', MAPS);
  console.log('base-political-maps.js: registered ' + MAPS.length + ' maps');

})();
