const RIDDLES_DATABASE = [
    // Easy (50)
    { q: "I'm the city of love where the Eiffel Tower stands tall.", a: "Paris", hint: "Capital of France", difficulty: "easy" },
    { q: "I'm home to kangaroos and the Great Barrier Reef.", a: "Australia", hint: "Continent down under", difficulty: "easy" },
    { q: "I'm the longest river in Africa, flowing through Egypt.", a: "Nile", hint: "Pharaohs lived near me", difficulty: "easy" },
    { q: "I'm the tallest mountain in the world.", a: "Everest", hint: "In the Himalayas", difficulty: "easy" },
    { q: "I'm shaped like a boot and famous for pizza.", a: "Italy", hint: "Rome is my capital", difficulty: "easy" },
    { q: "I'm the land of sushi and cherry blossoms.", a: "Japan", hint: "Tokyo is here", difficulty: "easy" },
    { q: "I'm the largest hot desert in the world.", a: "Sahara", hint: "In North Africa", difficulty: "easy" },
    { q: "I'm the country with maple leaves and hockey.", a: "Canada", hint: "North of USA", difficulty: "easy" },
    { q: "I'm the ancient wonder with a Sphinx as my neighbor.", a: "Pyramids", hint: "In Egypt", difficulty: "easy" },
    { q: "I'm the frozen continent at the South Pole.", a: "Antarctica", hint: "Penguins live here", difficulty: "easy" },
    
    // Medium (30)
    { q: "I'm the smallest country in the world, home to the Pope.", a: "Vatican", hint: "Inside Rome", difficulty: "medium" },
    { q: "I'm the river that runs through 10 countries in Europe.", a: "Danube", hint: "Second longest in Europe", difficulty: "medium" },
    { q: "I'm the island nation known as the 'Land of Fire and Ice'.", a: "Iceland", hint: "Nordic country", difficulty: "medium" },
    { q: "I'm the ancient Incan citadel high in the Andes.", a: "Machu Picchu", hint: "In Peru", difficulty: "medium" },
    { q: "I'm the sea between Europe and Africa, named after my location.", a: "Mediterranean", hint: "Connected to Atlantic", difficulty: "medium" },
    { q: "I'm the capital of Australia, not Sydney.", a: "Canberra", hint: "Planned city", difficulty: "medium" },
    { q: "I'm the only country that is also a continent.", a: "Australia", hint: "Down under", difficulty: "medium" },
    { q: "I'm the waterfall on the border of USA and Canada.", a: "Niagara", hint: "Famous honeymoon spot", difficulty: "medium" },
    { q: "I'm the mountain range separating Europe from Asia.", a: "Urals", hint: "In Russia", difficulty: "medium" },
    { q: "I'm the country with the most time zones in the world.", a: "Russia", hint: "Largest by area", difficulty: "medium" },
    
    // Hard (15)
    { q: "I'm the African country with the most pyramids.", a: "Sudan", hint: "More than Egypt", difficulty: "hard" },
    { q: "I'm the driest non-polar desert on Earth.", a: "Atacama", hint: "In Chile", difficulty: "hard" },
    { q: "I'm the only sea with no coastline.", a: "Sargasso", hint: "In the Atlantic", difficulty: "hard" },
    { q: "I'm the deepest point in Earth's oceans.", a: "Mariana", hint: "Challenger Deep", difficulty: "hard" },
    { q: "I'm the oldest continuously inhabited city in the world.", a: "Damascus", hint: "Capital of Syria", difficulty: "hard" },
    { q: "I'm the country entirely surrounded by South Africa.", a: "Lesotho", hint: "Mountain kingdom", difficulty: "hard" },
    { q: "I'm the highest capital city in the world.", a: "La Paz", hint: "In Bolivia", difficulty: "hard" },
    { q: "I'm the country with the longest coastline.", a: "Canada", hint: "Not Russia", difficulty: "hard" },
    { q: "I'm the only country that borders both the Caspian and Persian Gulf.", a: "Iran", hint: "Ancient Persia", difficulty: "hard" },
    { q: "I'm the strait separating Europe and Africa by only 13km.", a: "Gibraltar", hint: "British territory nearby", difficulty: "hard" },
    
    // Expert (5)
    { q: "I'm the point furthest from Earth's center (not Everest).", a: "Chimborazo", hint: "Ecuadorian volcano", difficulty: "expert" },
    { q: "I'm the largest lake entirely in one country.", a: "Michigan", hint: "In the USA", difficulty: "expert" },
    { q: "I'm the country with the most neighbors (14).", a: "China", hint: "Also Russia", difficulty: "expert" },
    { q: "I'm the only river that flows both north and south of the equator.", a: "Congo", hint: "In Africa", difficulty: "expert" },
    { q: "I'm the newest country to gain independence (2011).", a: "South Sudan", hint: "From Sudan", difficulty: "expert" }
];
