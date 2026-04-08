/**
 * Wildlife Map Data - Tiger Reserves & Biodiversity Hotspots
 * Geotopia Encyclopedia - Bharat Geography Section
 * 
 * This file adds:
 * - All 54 Tiger Reserves of India
 * - 4 Biodiversity Hotspots (as polygon regions)
 * - Layer controls for toggling visibility
 * - Custom markers and styling
 * 
 * Connect to main file: <script src="wildlife-map-data.js"></script>
 */

(function() {
    'use strict';

    // Wait for map to be initialized
    if (typeof map === 'undefined') {
        console.error('Map not initialized. Please ensure Leaflet map is loaded first.');
        return;
    }

    console.log('🐅 Loading Tiger Reserves & Biodiversity Hotspots...');

    // ========================================
    // CUSTOM ICONS
    // ========================================

    // Tiger Reserve Icon
    const tigerIcon = L.divIcon({
        className: 'tiger-marker',
        html: `<div style="
            background: linear-gradient(135deg, #FF6600 0%, #FF8C00 100%);
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(255, 102, 0, 0.5);
            border: 3px solid white;
            font-weight: bold;
        "><i class="fas fa-cat"></i></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });

    // Hotspot marker icon
    const hotspotIcon = L.divIcon({
        className: 'hotspot-marker',
        html: `<div style="
            background: linear-gradient(135deg, #9C27B0 0%, #E040FB 100%);
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            box-shadow: 0 4px 15px rgba(156, 39, 176, 0.5);
            border: 3px solid gold;
            animation: pulse-hotspot 2s infinite;
        "><i class="fas fa-fire"></i></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
    });

    // Add CSS animation for hotspot markers
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse-hotspot {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .tiger-popup {
            min-width: 300px;
        }
        
        .tiger-popup h3 {
            color: #FF6600;
            margin-bottom: 8px;
            font-size: 1.2rem;
            border-bottom: 2px solid #FF6600;
            padding-bottom: 5px;
        }
        
        .tiger-popup .stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin: 10px 0;
        }
        
        .tiger-popup .stat-item {
            background: #FFF3E0;
            padding: 8px;
            border-radius: 6px;
            text-align: center;
        }
        
        .tiger-popup .stat-value {
            font-size: 1.4rem;
            font-weight: bold;
            color: #FF6600;
        }
        
        .tiger-popup .stat-label {
            font-size: 0.8rem;
            color: #666;
        }
        
        .tiger-popup .species {
            background: #FFEBEE;
            padding: 10px;
            border-radius: 8px;
            margin-top: 10px;
            border-left: 4px solid #D32F2F;
        }
        
        .tiger-popup .species h4 {
            color: #C62828;
            font-size: 0.9rem;
            margin-bottom: 5px;
        }
        
        .hotspot-popup {
            min-width: 320px;
        }
        
        .hotspot-popup h3 {
            color: #9C27B0;
            margin-bottom: 8px;
            font-size: 1.3rem;
        }
        
        .hotspot-popup .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin: 12px 0;
        }
        
        .hotspot-popup .stat-box {
            background: #F3E5F5;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }
        
        .hotspot-popup .stat-box .value {
            font-size: 1.3rem;
            font-weight: bold;
            color: #7B1FA2;
        }
        
        .hotspot-popup .stat-box .label {
            font-size: 0.75rem;
            color: #666;
        }
        
        .leaflet-control-layers {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            padding: 10px 15px;
        }
        
        .leaflet-control-layers-list {
            font-family: 'Segoe UI', sans-serif;
        }
        
        .leaflet-control-layers-selector {
            margin-right: 8px;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // ALL 54 TIGER RESERVES DATA
    // ========================================

    const tigerReserves = [
        // Original 9 (1973)
        { name: "Jim Corbett Tiger Reserve", state: "Uttarakhand", year: 1973, lat: 29.53, lng: 78.78, area: 1318, tigers: 260, coreArea: 520, bufferArea: 798, landscape: "Shivalik-Gangetic", keySpecies: "Bengal Tiger, Asian Elephant, Gharial, Leopard, Sloth Bear" },
        { name: "Manas Tiger Reserve", state: "Assam", year: 1973, lat: 26.75, lng: 91.00, area: 3150, tigers: 52, coreArea: 840, bufferArea: 2310, landscape: "Brahmaputra Floodplains", keySpecies: "Bengal Tiger, Indian Rhinoceros, Wild Water Buffalo, Pygmy Hog, Golden Langur" },
        { name: "Palamau Tiger Reserve", state: "Jharkhand", year: 1973, lat: 23.87, lng: 84.05, area: 1129, tigers: 3, coreArea: 414, bufferArea: 715, landscape: "Central Indian Highlands", keySpecies: "Bengal Tiger, Elephant, Wolf, Leopard, Gaur" },
        { name: "Simlipal Tiger Reserve", state: "Odisha", year: 1973, lat: 21.83, lng: 86.37, area: 2750, tigers: 16, coreArea: 845, bufferArea: 1905, landscape: "Eastern Ghats", keySpecies: "Melanistic Tiger (Black Tiger), Elephant, Gaur, Giant Squirrel" },
        { name: "Kanha Tiger Reserve", state: "Madhya Pradesh", year: 1973, lat: 22.33, lng: 80.62, area: 2051, tigers: 105, coreArea: 940, bufferArea: 1111, landscape: "Central Indian Highlands", keySpecies: "Bengal Tiger, Barasingha (Hard-ground Swamp Deer), Leopard, Wild Dog" },
        { name: "Ranthambore Tiger Reserve", state: "Rajasthan", year: 1973, lat: 26.00, lng: 76.50, area: 1411, tigers: 81, coreArea: 392, bufferArea: 1019, landscape: "Semi-Arid", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Sambar, Chital, Mugger Crocodile" },
        { name: "Melghat Tiger Reserve", state: "Maharashtra", year: 1973, lat: 21.45, lng: 77.00, area: 2768, tigers: 48, coreArea: 1500, bufferArea: 1268, landscape: "Central Indian Highlands", keySpecies: "Bengal Tiger, Sloth Bear, Wild Dog, Flying Squirrel, Ratel" },
        { name: "Bandipur Tiger Reserve", state: "Karnataka", year: 1973, lat: 11.67, lng: 76.63, area: 1456, tigers: 150, coreArea: 874, bufferArea: 582, landscape: "Western Ghats-Nilgiris", keySpecies: "Bengal Tiger, Asian Elephant, Gaur, Wild Dog, Four-horned Antelope" },
        { name: "Sundarbans Tiger Reserve", state: "West Bengal", year: 1973, lat: 21.95, lng: 88.90, area: 2585, tigers: 100, coreArea: 1700, bufferArea: 885, landscape: "Mangrove Delta", keySpecies: "Royal Bengal Tiger (swimming), Saltwater Crocodile, Gangetic Dolphin, Fishing Cat" },
        
        // Added 1978
        { name: "Periyar Tiger Reserve", state: "Kerala", year: 1978, lat: 9.47, lng: 77.17, area: 925, tigers: 35, coreArea: 350, bufferArea: 575, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Asian Elephant, Nilgiri Tahr, Lion-tailed Macaque, Gaur" },
        { name: "Sariska Tiger Reserve", state: "Rajasthan", year: 1978, lat: 27.35, lng: 76.43, area: 1213, tigers: 25, coreArea: 500, bufferArea: 713, landscape: "Aravalli Hills", keySpecies: "Bengal Tiger (reintroduced), Leopard, Striped Hyena, Caracal, Sambar" },
        
        // Added 1982-1989
        { name: "Buxa Tiger Reserve", state: "West Bengal", year: 1982, lat: 26.75, lng: 89.55, area: 757, tigers: 0, coreArea: 390, bufferArea: 367, landscape: "Eastern Himalayas", keySpecies: "Elephant, Clouded Leopard, Hispid Hare, Giant Hornbill" },
        { name: "Indravati Tiger Reserve", state: "Chhattisgarh", year: 1982, lat: 19.17, lng: 81.08, area: 2799, tigers: 5, coreArea: 1258, bufferArea: 1541, landscape: "Central India", keySpecies: "Bengal Tiger, Wild Buffalo (only population), Leopard, Hill Myna" },
        { name: "Nagarjunsagar-Srisailam Tiger Reserve", state: "Andhra Pradesh/Telangana", year: 1982, lat: 16.10, lng: 78.90, area: 3728, tigers: 93, coreArea: 1200, bufferArea: 2528, landscape: "Deccan Peninsula", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Indian Pangolin, Mugger" },
        { name: "Namdapha Tiger Reserve", state: "Arunachal Pradesh", year: 1982, lat: 27.50, lng: 96.38, area: 2052, tigers: 11, coreArea: 1808, bufferArea: 244, landscape: "Eastern Himalayas", keySpecies: "Bengal Tiger, Clouded Leopard, Snow Leopard, Hoolock Gibbon, Red Panda" },
        { name: "Dudhwa Tiger Reserve", state: "Uttar Pradesh", year: 1987, lat: 28.55, lng: 80.75, area: 2201, tigers: 135, coreArea: 884, bufferArea: 1317, landscape: "Terai", keySpecies: "Bengal Tiger, Indian Rhinoceros, Swamp Deer, Hispid Hare, Bengal Florican" },
        { name: "Kalakad-Mundanthurai Tiger Reserve", state: "Tamil Nadu", year: 1988, lat: 8.62, lng: 77.32, area: 1601, tigers: 17, coreArea: 895, bufferArea: 706, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Nilgiri Tahr, Lion-tailed Macaque, Nilgiri Langur" },
        { name: "Valmiki Tiger Reserve", state: "Bihar", year: 1989, lat: 27.42, lng: 83.92, area: 899, tigers: 54, coreArea: 598, bufferArea: 301, landscape: "Gangetic Plains", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Hispid Hare, Gangetic Dolphin" },
        
        // Added 1992-1999
        { name: "Pench Tiger Reserve (MP)", state: "Madhya Pradesh", year: 1992, lat: 21.75, lng: 79.30, area: 1179, tigers: 77, coreArea: 411, bufferArea: 768, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Gaur (Jungle Book inspiration)" },
        { name: "Tadoba-Andhari Tiger Reserve", state: "Maharashtra", year: 1993, lat: 20.22, lng: 79.40, area: 1727, tigers: 97, coreArea: 625, bufferArea: 1102, landscape: "Central India", keySpecies: "Bengal Tiger, Sloth Bear, Wild Dog, Indian Python, Honey Badger" },
        { name: "Bandhavgarh Tiger Reserve", state: "Madhya Pradesh", year: 1993, lat: 23.72, lng: 81.00, area: 1536, tigers: 135, coreArea: 716, bufferArea: 820, landscape: "Central India", keySpecies: "Bengal Tiger (highest density), Leopard, Sloth Bear, Gaur, 250+ bird species" },
        { name: "Panna Tiger Reserve", state: "Madhya Pradesh", year: 1994, lat: 24.72, lng: 80.02, area: 1578, tigers: 55, coreArea: 576, bufferArea: 1002, landscape: "Vindhyan", keySpecies: "Bengal Tiger, Gharial, Sloth Bear, Wolf, Vultures" },
        { name: "Dampa Tiger Reserve", state: "Mizoram", year: 1994, lat: 23.67, lng: 92.40, area: 988, tigers: 0, coreArea: 500, bufferArea: 488, landscape: "Indo-Burma", keySpecies: "Clouded Leopard, Hoolock Gibbon, Serow, Binturong" },
        { name: "Bhadra Tiger Reserve", state: "Karnataka", year: 1998, lat: 13.70, lng: 75.65, area: 1064, tigers: 33, coreArea: 492, bufferArea: 572, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Elephant, Gaur, Sambar, Malabar Giant Squirrel" },
        { name: "Pench Tiger Reserve (MH)", state: "Maharashtra", year: 1998, lat: 21.68, lng: 79.17, area: 741, tigers: 45, coreArea: 257, bufferArea: 484, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Chital, Sambar" },
        { name: "Pakke Tiger Reserve", state: "Arunachal Pradesh", year: 1999, lat: 27.00, lng: 92.97, area: 1198, tigers: 8, coreArea: 683, bufferArea: 515, landscape: "Eastern Himalayas", keySpecies: "Bengal Tiger, Clouded Leopard, Elephant, Hornbills (4 species)" },
        { name: "Nameri Tiger Reserve", state: "Assam", year: 1999, lat: 27.00, lng: 92.78, area: 344, tigers: 4, coreArea: 137, bufferArea: 207, landscape: "Brahmaputra Valley", keySpecies: "Bengal Tiger, White-winged Wood Duck, Elephant, Wild Buffalo" },
        { name: "Satpura Tiger Reserve", state: "Madhya Pradesh", year: 1999, lat: 22.50, lng: 78.17, area: 2133, tigers: 50, coreArea: 1339, bufferArea: 794, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Sloth Bear, Giant Squirrel" },
        { name: "Nagarhole Tiger Reserve", state: "Karnataka", year: 1999, lat: 12.05, lng: 76.12, area: 1205, tigers: 141, coreArea: 643, bufferArea: 562, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Asian Elephant, Wild Dog, Gaur, Leopard" },
        
        // Added 2007-2010
        { name: "Anamalai Tiger Reserve", state: "Tamil Nadu", year: 2007, lat: 10.35, lng: 77.05, area: 1479, tigers: 30, coreArea: 958, bufferArea: 521, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Lion-tailed Macaque, Nilgiri Tahr, Grizzled Giant Squirrel" },
        { name: "Mudumalai Tiger Reserve", state: "Tamil Nadu", year: 2007, lat: 11.58, lng: 76.55, area: 688, tigers: 114, coreArea: 321, bufferArea: 367, landscape: "Nilgiri Biosphere", keySpecies: "Bengal Tiger, Asian Elephant, Gaur, Wild Dog, Leopard" },
        { name: "Udanti-Sitanadi Tiger Reserve", state: "Chhattisgarh", year: 2008, lat: 20.45, lng: 82.32, area: 1842, tigers: 4, coreArea: 851, bufferArea: 991, landscape: "Central India", keySpecies: "Bengal Tiger, Wild Buffalo, Mouse Deer, Hill Myna" },
        { name: "Satkosia Tiger Reserve", state: "Odisha", year: 2008, lat: 20.45, lng: 84.77, area: 963, tigers: 3, coreArea: 523, bufferArea: 440, landscape: "Eastern Ghats", keySpecies: "Bengal Tiger, Gharial, Mugger, Elephant, Leopard" },
        { name: "Kaziranga Tiger Reserve", state: "Assam", year: 2008, lat: 26.58, lng: 93.17, area: 1173, tigers: 121, coreArea: 430, bufferArea: 743, landscape: "Brahmaputra Floodplains", keySpecies: "Bengal Tiger, Indian Rhinoceros (2,600+), Wild Water Buffalo, Elephant" },
        { name: "Achanakmar Tiger Reserve", state: "Chhattisgarh", year: 2009, lat: 22.50, lng: 81.75, area: 914, tigers: 5, coreArea: 551, bufferArea: 363, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Flying Squirrel, Gaur" },
        { name: "Dandeli-Anshi Tiger Reserve", state: "Karnataka", year: 2009, lat: 15.13, lng: 74.55, area: 1097, tigers: 29, coreArea: 814, bufferArea: 283, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Black Panther, Elephant, King Cobra, Hornbills" },
        { name: "Sanjay-Dubri Tiger Reserve", state: "Madhya Pradesh", year: 2009, lat: 24.17, lng: 81.88, area: 1674, tigers: 36, coreArea: 812, bufferArea: 862, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Chinkara, Wolf" },
        { name: "Parambikulam Tiger Reserve", state: "Kerala", year: 2010, lat: 10.42, lng: 76.80, area: 643, tigers: 31, coreArea: 390, bufferArea: 253, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Elephant, Nilgiri Tahr, Lion-tailed Macaque, Gaur" },
        { name: "Sahyadri Tiger Reserve", state: "Maharashtra", year: 2010, lat: 17.22, lng: 73.80, area: 1165, tigers: 12, coreArea: 600, bufferArea: 565, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Leopard, Giant Squirrel, Malabar Pied Hornbill" },
        { name: "Biligiri Ranganathaswamy Tiger Reserve", state: "Karnataka", year: 2010, lat: 11.98, lng: 77.15, area: 574, tigers: 68, coreArea: 359, bufferArea: 215, landscape: "Western/Eastern Ghats junction", keySpecies: "Bengal Tiger, Elephant, Leopard, Sloth Bear, Four-horned Antelope" },
        
        // Added 2012-2016
        { name: "Kawal Tiger Reserve", state: "Telangana", year: 2012, lat: 19.25, lng: 79.00, area: 2015, tigers: 10, coreArea: 893, bufferArea: 1122, landscape: "Deccan", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Wild Dog, Chital" },
        { name: "Sathyamangalam Tiger Reserve", state: "Tamil Nadu", year: 2013, lat: 11.50, lng: 77.25, area: 1411, tigers: 85, coreArea: 793, bufferArea: 618, landscape: "Eastern Ghats-Western Ghats", keySpecies: "Bengal Tiger, Elephant, Leopard, Gaur, Wild Dog" },
        { name: "Mukundra Hills Tiger Reserve", state: "Rajasthan", year: 2013, lat: 24.67, lng: 75.82, area: 759, tigers: 5, coreArea: 417, bufferArea: 342, landscape: "Aravalli-Vindhyan", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Chinkara, Caracal" },
        { name: "Nawegaon-Nagzira Tiger Reserve", state: "Maharashtra", year: 2013, lat: 21.00, lng: 80.00, area: 1894, tigers: 9, coreArea: 653, bufferArea: 1241, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Pangolin, Flying Squirrel" },
        { name: "Amrabad Tiger Reserve", state: "Telangana", year: 2014, lat: 16.35, lng: 79.00, area: 2611, tigers: 22, coreArea: 1618, bufferArea: 993, landscape: "Deccan", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Pangolin, Indian Python" },
        { name: "Pilibhit Tiger Reserve", state: "Uttar Pradesh", year: 2014, lat: 28.63, lng: 80.12, area: 730, tigers: 65, coreArea: 602, bufferArea: 128, landscape: "Terai", keySpecies: "Bengal Tiger, Leopard, Swamp Deer, Hispid Hare, Fishing Cat" },
        { name: "Bor Tiger Reserve", state: "Maharashtra", year: 2014, lat: 21.10, lng: 78.65, area: 138, tigers: 8, coreArea: 61, bufferArea: 77, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Chital (smallest TR)" },
        { name: "Rajaji Tiger Reserve", state: "Uttarakhand", year: 2015, lat: 30.08, lng: 78.18, area: 1150, tigers: 48, coreArea: 820, bufferArea: 330, landscape: "Shivalik", keySpecies: "Bengal Tiger, Elephant (1,500+), Leopard, King Cobra, Goral" },
        { name: "Orang Tiger Reserve", state: "Assam", year: 2016, lat: 26.50, lng: 92.25, area: 492, tigers: 28, coreArea: 79, bufferArea: 413, landscape: "Brahmaputra", keySpecies: "Bengal Tiger, Indian Rhinoceros, Elephant, Wild Buffalo, Pygmy Hog" },
        { name: "Kamlang Tiger Reserve", state: "Arunachal Pradesh", year: 2016, lat: 27.60, lng: 96.40, area: 783, tigers: 1, coreArea: 400, bufferArea: 383, landscape: "Eastern Himalayas", keySpecies: "Bengal Tiger, Hoolock Gibbon, Mishmi Takin, Red Panda, Clouded Leopard" },
        
        // Added 2021-2022
        { name: "Srivilliputhur-Megamalai Tiger Reserve", state: "Tamil Nadu", year: 2021, lat: 9.62, lng: 77.35, area: 1016, tigers: 8, coreArea: 601, bufferArea: 415, landscape: "Western Ghats", keySpecies: "Bengal Tiger, Nilgiri Tahr, Lion-tailed Macaque, Grizzled Giant Squirrel" },
        { name: "Ramgarh Vishdhari Tiger Reserve", state: "Rajasthan", year: 2022, lat: 25.30, lng: 75.50, area: 1501, tigers: 3, coreArea: 481, bufferArea: 1020, landscape: "Vindhyan", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Chinkara, Wolf" },
        { name: "Guru Ghasidas Tiger Reserve", state: "Chhattisgarh", year: 2022, lat: 23.83, lng: 82.58, area: 2899, tigers: 2, coreArea: 1440, bufferArea: 1459, landscape: "Central India", keySpecies: "Bengal Tiger, Leopard, Wild Dog, Wolf, Sloth Bear" },
        { name: "Ranipur Tiger Reserve", state: "Uttar Pradesh", year: 2022, lat: 25.08, lng: 83.17, area: 529, tigers: 2, coreArea: 230, bufferArea: 299, landscape: "Vindhyan", keySpecies: "Bengal Tiger, Leopard, Sloth Bear, Chinkara, Sambar" }
    ];

    // ========================================
    // BIODIVERSITY HOTSPOTS DATA
    // ========================================

    const biodiversityHotspots = [
        {
            name: "Western Ghats",
            center: { lat: 12.5, lng: 75.5 },
            area: 160000,
            plantSpecies: 7402,
            endemicPlants: 1540,
            mammalSpecies: 139,
            endemicMammals: 25,
            birdSpecies: 508,
            amphibianSpecies: 179,
            endemicAmphibians: 117,
            keySpecies: "Lion-tailed Macaque, Nilgiri Tahr, Purple Frog, Malabar Giant Squirrel",
            states: "Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu",
            polygon: [
                [21.2, 72.8], [21.0, 73.2], [20.5, 73.5], [19.8, 73.8],
                [18.5, 73.5], [17.0, 73.8], [15.5, 74.2], [14.0, 74.5],
                [12.5, 75.0], [11.5, 75.8], [10.5, 76.5], [9.5, 77.0],
                [8.3, 77.2], [8.0, 77.5], [8.3, 77.8], [9.0, 77.5],
                [10.0, 77.0], [11.0, 76.5], [12.0, 76.0], [13.5, 75.5],
                [15.0, 75.0], [16.5, 74.5], [18.0, 74.2], [19.5, 74.0],
                [20.5, 73.8], [21.2, 73.5], [21.2, 72.8]
            ],
            color: "#4CAF50"
        },
        {
            name: "Himalayas",
            center: { lat: 30.0, lng: 80.0 },
            area: 750000,
            plantSpecies: 10000,
            endemicPlants: 3160,
            mammalSpecies: 300,
            endemicMammals: 12,
            birdSpecies: 980,
            amphibianSpecies: 105,
            endemicAmphibians: 42,
            keySpecies: "Snow Leopard, Red Panda, Himalayan Musk Deer, Hangul (Kashmir Stag), Western Tragopan",
            states: "J&K, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh, West Bengal",
            polygon: [
                [32.5, 74.5], [33.5, 76.0], [34.0, 77.5], [34.5, 79.0],
                [34.0, 80.5], [32.0, 79.5], [30.5, 79.5], [29.5, 81.0],
                [28.5, 84.0], [28.0, 87.0], [27.5, 89.5], [27.0, 92.0],
                [27.5, 95.0], [28.5, 97.0], [29.0, 96.5], [28.5, 94.0],
                [28.0, 91.0], [28.5, 88.0], [29.5, 85.0], [30.5, 82.0],
                [31.5, 79.0], [32.5, 77.0], [32.5, 74.5]
            ],
            color: "#2196F3"
        },
        {
            name: "Indo-Burma (Northeast India)",
            center: { lat: 25.5, lng: 93.0 },
            area: 200000,
            plantSpecies: 13500,
            endemicPlants: 7000,
            mammalSpecies: 433,
            endemicMammals: 71,
            birdSpecies: 1170,
            amphibianSpecies: 148,
            endemicAmphibians: 57,
            keySpecies: "Hoolock Gibbon, Sangai (Brow-antlered Deer), Golden Langur, Clouded Leopard, Pygmy Hog",
            states: "Assam, Meghalaya, Manipur, Nagaland, Mizoram, Tripura, Arunachal Pradesh, Sikkim",
            polygon: [
                [27.0, 88.0], [27.5, 89.5], [28.0, 92.0], [28.5, 94.5],
                [28.0, 96.5], [27.5, 97.0], [26.5, 96.5], [25.5, 95.0],
                [24.0, 94.5], [23.0, 93.5], [22.5, 92.5], [22.0, 92.0],
                [22.5, 91.0], [23.5, 90.5], [24.5, 89.5], [25.5, 89.0],
                [26.5, 88.5], [27.0, 88.0]
            ],
            color: "#FF9800"
        },
        {
            name: "Sundaland (Andaman & Nicobar)",
            center: { lat: 10.0, lng: 92.5 },
            area: 8249,
            plantSpecies: 2200,
            endemicPlants: 200,
            mammalSpecies: 58,
            endemicMammals: 32,
            birdSpecies: 271,
            amphibianSpecies: 83,
            endemicAmphibians: 28,
            keySpecies: "Dugong, Narcondam Hornbill, Nicobar Megapode, Andaman Wild Pig, Leatherback Turtle",
            states: "Andaman & Nicobar Islands (572 islands)",
            polygon: [
                [13.7, 92.5], [13.5, 93.2], [12.5, 93.0], [11.5, 92.8],
                [10.5, 92.6], [9.5, 92.8], [8.5, 93.0], [7.5, 93.5],
                [6.8, 93.8], [6.8, 93.2], [7.5, 92.8], [8.5, 92.5],
                [9.5, 92.3], [10.5, 92.2], [11.5, 92.3], [12.5, 92.5],
                [13.5, 92.3], [13.7, 92.5]
            ],
            color: "#9C27B0"
        }
    ];

    // ========================================
    // CREATE LAYER GROUPS
    // ========================================

    // Tiger Reserves Layer
    const tigerReservesLayer = L.layerGroup();
    
    // Create marker cluster for tiger reserves
    const tigerCluster = L.markerClusterGroup({
        maxClusterRadius: 40,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: true,
        zoomToBoundsOnClick: true,
        iconCreateFunction: function(cluster) {
            const count = cluster.getChildCount();
            return L.divIcon({
                html: `<div style="
                    background: linear-gradient(135deg, #FF6600 0%, #FF8C00 100%);
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: bold;
                    box-shadow: 0 4px 15px rgba(255, 102, 0, 0.5);
                    border: 3px solid white;
                ">${count}</div>`,
                className: 'tiger-cluster',
                iconSize: [40, 40]
            });
        }
    });

    // Add tiger reserve markers
    tigerReserves.forEach((reserve, index) => {
        const popupContent = `
            <div class="tiger-popup">
                <h3><i class="fas fa-cat"></i> ${reserve.name}</h3>
                <p style="color: #666; margin-bottom: 10px;">
                    <strong>State:</strong> ${reserve.state} | 
                    <strong>Established:</strong> ${reserve.year}
                </p>
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-value">${reserve.tigers}</div>
                        <div class="stat-label">Tigers (2022)</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${reserve.area}</div>
                        <div class="stat-label">Total Area (km²)</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${reserve.coreArea}</div>
                        <div class="stat-label">Core Area (km²)</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${reserve.bufferArea}</div>
                        <div class="stat-label">Buffer Area (km²)</div>
                    </div>
                </div>
                <p style="font-size: 0.9rem; color: #555;">
                    <strong>Landscape:</strong> ${reserve.landscape}
                </p>
                <div class="species">
                    <h4><i class="fas fa-paw"></i> Key Species</h4>
                    <p style="font-size: 0.85rem; color: #B71C1C;">${reserve.keySpecies}</p>
                </div>
            </div>
        `;

        const marker = L.marker([reserve.lat, reserve.lng], { icon: tigerIcon })
            .bindPopup(popupContent, { maxWidth: 350 });
        
        tigerCluster.addLayer(marker);
    });

    tigerReservesLayer.addLayer(tigerCluster);

    // Biodiversity Hotspots Layer
    const hotspotsLayer = L.layerGroup();

    // Add hotspot polygons and markers
    biodiversityHotspots.forEach(hotspot => {
        // Create polygon
        const polygon = L.polygon(hotspot.polygon, {
            color: hotspot.color,
            fillColor: hotspot.color,
            fillOpacity: 0.2,
            weight: 3,
            dashArray: '10, 5'
        });

        // Popup for polygon
        const polygonPopup = `
            <div class="hotspot-popup">
                <h3><i class="fas fa-fire"></i> ${hotspot.name} Biodiversity Hotspot</h3>
                <p style="color: #666; margin-bottom: 10px;">
                    <strong>States:</strong> ${hotspot.states}
                </p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <div class="value">${hotspot.plantSpecies.toLocaleString()}</div>
                        <div class="label">Plant Species</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${hotspot.endemicPlants.toLocaleString()}</div>
                        <div class="label">Endemic Plants</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${hotspot.mammalSpecies}</div>
                        <div class="label">Mammal Species</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${hotspot.birdSpecies}</div>
                        <div class="label">Bird Species</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${hotspot.amphibianSpecies}</div>
                        <div class="label">Amphibian Species</div>
                    </div>
                    <div class="stat-box">
                        <div class="value">${hotspot.endemicAmphibians}</div>
                        <div class="label">Endemic Amphibians</div>
                    </div>
                </div>
                <div style="background: #F3E5F5; padding: 10px; border-radius: 8px; margin-top: 10px;">
                    <strong style="color: #7B1FA2;"><i class="fas fa-star"></i> Key Endemic Species:</strong>
                    <p style="font-size: 0.85rem; margin-top: 5px; color: #4A148C;">${hotspot.keySpecies}</p>
                </div>
            </div>
        `;

        polygon.bindPopup(polygonPopup, { maxWidth: 400 });
        hotspotsLayer.addLayer(polygon);

        // Add center marker
        const centerMarker = L.marker([hotspot.center.lat, hotspot.center.lng], { icon: hotspotIcon })
            .bindPopup(polygonPopup, { maxWidth: 400 });
        hotspotsLayer.addLayer(centerMarker);
    });

    // ========================================
    // ADD LAYERS TO MAP
    // ========================================

    // Add layers to map (visible by default)
    tigerReservesLayer.addTo(map);
    hotspotsLayer.addTo(map);

    // ========================================
    // LAYER CONTROL
    // ========================================

    // Get existing layers if any
    const baseLayers = {};
    
    const overlayLayers = {
        "<span style='color: #228B22;'><i class='fas fa-tree'></i> National Parks (106)</span>": markers,
        "<span style='color: #FF6600;'><i class='fas fa-cat'></i> Tiger Reserves (54)</span>": tigerReservesLayer,
        "<span style='color: #9C27B0;'><i class='fas fa-fire'></i> Biodiversity Hotspots (4)</span>": hotspotsLayer
    };

    // Remove existing control if any and add new one
    const existingControls = document.querySelectorAll('.leaflet-control-layers');
    existingControls.forEach(control => control.remove());

    L.control.layers(null, overlayLayers, {
        collapsed: false,
        position: 'topright'
    }).addTo(map);

    // ========================================
    // UPDATE LEGEND
    // ========================================

    // Find and update existing legend
    const legendContainer = document.querySelector('.map-legend');
    if (legendContainer) {
        legendContainer.innerHTML = `
            <div class="legend-item">
                <div class="legend-color" style="background: #228B22;"></div>
                <span><strong>National Parks</strong> (106 total)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(135deg, #FF6600 0%, #FF8C00 100%);"></div>
                <span><strong>Tiger Reserves</strong> (54 total)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(135deg, #9C27B0 0%, #E040FB 100%); border-color: gold;"></div>
                <span><strong>Biodiversity Hotspot Centers</strong></span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #1976D2; border-color: gold;"></div>
                <span><strong>UNESCO World Heritage Sites</strong></span>
            </div>
            <div class="legend-item">
                <div style="width: 30px; height: 4px; background: #4CAF50; border-radius: 2px;"></div>
                <span>Western Ghats Hotspot</span>
            </div>
            <div class="legend-item">
                <div style="width: 30px; height: 4px; background: #2196F3; border-radius: 2px;"></div>
                <span>Himalayan Hotspot</span>
            </div>
            <div class="legend-item">
                <div style="width: 30px; height: 4px; background: #FF9800; border-radius: 2px;"></div>
                <span>Indo-Burma Hotspot</span>
            </div>
            <div class="legend-item">
                <div style="width: 30px; height: 4px; background: #9C27B0; border-radius: 2px;"></div>
                <span>Sundaland Hotspot</span>
            </div>
        `;
    }

    // ========================================
    // SEARCH ENHANCEMENT
    // ========================================

    // Extend search to include tiger reserves
    const originalSearchFunction = window.searchParks;
    
    window.searchParks = function() {
        const searchTerm = document.getElementById('parkSearch').value.toLowerCase();
        
        // Search in National Parks
        const park = nationalParks.find(p => p.name.toLowerCase().includes(searchTerm));
        if (park) {
            map.setView([park.lat, park.lng], 10);
            return;
        }
        
        // Search in Tiger Reserves
        const reserve = tigerReserves.find(r => r.name.toLowerCase().includes(searchTerm));
        if (reserve) {
            map.setView([reserve.lat, reserve.lng], 10);
            tigerCluster.eachLayer(function(layer) {
                if (layer.getLatLng && 
                    Math.abs(layer.getLatLng().lat - reserve.lat) < 0.01 && 
                    Math.abs(layer.getLatLng().lng - reserve.lng) < 0.01) {
                    layer.openPopup();
                }
            });
            return;
        }
        
        // Search in Hotspots
        const hotspot = biodiversityHotspots.find(h => h.name.toLowerCase().includes(searchTerm));
        if (hotspot) {
            map.setView([hotspot.center.lat, hotspot.center.lng], 6);
            return;
        }
        
        alert('Location not found. Try searching for National Parks, Tiger Reserves, or Biodiversity Hotspots.');
    };

    // Update search placeholder
    const searchInput = document.getElementById('parkSearch');
    if (searchInput) {
        searchInput.placeholder = 'Search Parks, Tiger Reserves, Hotspots...';
    }

    // ========================================
    // STATISTICS UPDATE
    // ========================================

    // Calculate tiger population
    const totalTigers = tigerReserves.reduce((sum, r) => sum + r.tigers, 0);
    const totalTRArea = tigerReserves.reduce((sum, r) => sum + r.area, 0);

    console.log(`✅ Tiger Reserves loaded: ${tigerReserves.length}`);
    console.log(`🐅 Total Tiger Population: ${totalTigers}`);
    console.log(`📏 Total Tiger Reserve Area: ${totalTRArea.toLocaleString()} km²`);
    console.log(`🔥 Biodiversity Hotspots loaded: ${biodiversityHotspots.length}`);
    console.log('🗺️ Map layers updated successfully!');

    // ========================================
    // EXPORT DATA FOR EXTERNAL USE
    // ========================================

    window.wildlifeMapData = {
        tigerReserves: tigerReserves,
        biodiversityHotspots: biodiversityHotspots,
        tigerReservesLayer: tigerReservesLayer,
        hotspotsLayer: hotspotsLayer,
        totalTigers: totalTigers,
        totalTRArea: totalTRArea
    };

})();
