/* ==========================================
   DORAEMON WORLD TOUR GAME LOGIC
   ========================================== */

class DoraemonWorldTour {
    constructor() {
        this.currentCountry = 'japan';
        this.visitedCountries = ['japan'];
        this.totalCountries = 15;
        this.currentOrder = 1;
        this.totalDistance = 0;
        this.level = 1;
        
        // Country connections (geographical neighbors)
        this.connections = {
            japan: ['china'],
            china: ['japan', 'mongolia', 'myanmar'],
            mongolia: ['china', 'russia'],
            russia: ['mongolia', 'kazakhstan'],
            kazakhstan: ['russia', 'pakistan'],
            pakistan: ['kazakhstan', 'nepal', 'india'],
            nepal: ['pakistan', 'india'],
            india: ['pakistan', 'nepal', 'myanmar'],
            myanmar: ['china', 'india', 'thailand'],
            thailand: ['myanmar', 'singapore'],
            singapore: ['thailand', 'indonesia'],
            indonesia: ['singapore', 'australia'],
            australia: ['indonesia', 'newzealand'],
            newzealand: ['australia', 'fiji'],
            fiji: ['newzealand']
        };
        
        // Distances between countries (in km)
        this.distances = {
            'japan-china': 2100,
            'china-mongolia': 1500,
            'mongolia-russia': 2300,
            'russia-kazakhstan': 2800,
            'kazakhstan-pakistan': 2200,
            'pakistan-nepal': 800,
            'nepal-india': 200,
            'india-myanmar': 1400,
            'myanmar-thailand': 900,
            'thailand-singapore': 1600,
            'singapore-indonesia': 890,
            'indonesia-australia': 3200,
            'australia-newzealand': 4155,
            'newzealand-fiji': 2150,
            'china-myanmar': 1900,
            'pakistan-india': 700
        };
        
        // Country information
        this.countryInfo = {
            japan: {
                name: 'Tokyo, Japan',
                info: 'Starting point! Land of the rising sun and Doraemon\'s home! 🏯',
                flag: '🇯🇵'
            },
            china: {
                name: 'Beijing, China',
                info: 'Home to the Great Wall and pandas! 🐼',
                flag: '🇨🇳'
            },
            mongolia: {
                name: 'Ulaanbaatar, Mongolia',
                info: 'Land of vast steppes and nomadic culture! 🏇',
                flag: '🇲🇳'
            },
            russia: {
                name: 'Moscow, Russia',
                info: 'The largest country in the world! 🏛️',
                flag: '🇷🇺'
            },
            kazakhstan: {
                name: 'Nur-Sultan, Kazakhstan',
                info: 'Beautiful country between Europe and Asia! 🏔️',
                flag: '🇰🇿'
            },
            pakistan: {
                name: 'Islamabad, Pakistan',
                info: 'Land of high mountains and rich culture! ⛰️',
                flag: '🇵🇰'
            },
            nepal: {
                name: 'Kathmandu, Nepal',
                info: 'Home to Mount Everest! 🏔️',
                flag: '🇳🇵'
            },
            india: {
                name: 'New Delhi, India',
                info: 'Incredible India with diverse culture! 🕌',
                flag: '🇮🇳'
            },
            myanmar: {
                name: 'Naypyidaw, Myanmar',
                info: 'Land of golden pagodas! 🛕',
                flag: '🇲🇲'
            },
            thailand: {
                name: 'Bangkok, Thailand',
                info: 'Land of smiles and beautiful temples! 🙏',
                flag: '🇹🇭'
            },
            singapore: {
                name: 'Singapore',
                info: 'Modern city-state with amazing gardens! 🌸',
                flag: '🇸🇬'
            },
            indonesia: {
                name: 'Jakarta, Indonesia',
                info: 'Thousands of islands with rich biodiversity! 🏝️',
                flag: '🇮🇩'
            },
            australia: {
                name: 'Canberra, Australia',
                info: 'Land down under with unique wildlife! 🦘',
                flag: '🇦🇺'
            },
            newzealand: {
                name: 'Wellington, New Zealand',
                info: 'Beautiful landscapes and Maori culture! 🌋',
                flag: '🇳🇿'
            },
            fiji: {
                name: 'Suva, Fiji',
                info: 'Tropical paradise! Final destination! 🏖️',
                flag: '🇫🇯'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateUI();
        this.unlockNextCountries();
    }
    
    setupEventListeners() {
        const markers = document.querySelectorAll('.country-marker');
        markers.forEach(marker => {
            marker.addEventListener('click', () => this.handleCountryClick(marker));
        });
    }
    
    handleCountryClick(marker) {
        const country = marker.dataset.country;
        const pin = marker.querySelector('.marker-pin');
        
        // Check if country is unlocked (active)
        if (!pin.classList.contains('active')) {
            this.showMessage('❌ You cannot travel there yet! Follow the route!', 'error');
            return;
        }
        
        // Check if already visited
        if (this.visitedCountries.includes(country)) {
            this.showMessage('✓ Already visited!', 'info');
            return;
        }
        
        // Travel to country
        this.travelToCountry(country, marker);
    }
    
    travelToCountry(country, marker) {
        // Get distance
        const distanceKey = `${this.currentCountry}-${country}`;
        const reverseKey = `${country}-${this.currentCountry}`;
        const distance = this.distances[distanceKey] || this.distances[reverseKey] || 0;
        
        this.totalDistance += distance;
        
        // Animate Doraemon
        this.animateDoraemon(marker);
        
        // Update visited countries
        this.visitedCountries.push(country);
        this.currentCountry = country;
        this.currentOrder++;
        
        // Mark as visited
        const pin = marker.querySelector('.marker-pin');
        pin.classList.remove('active');
        pin.classList.add('visited');
        
        // Update level
        if (this.visitedCountries.length % 5 === 0) {
            this.level++;
        }
        
        // Update UI
        setTimeout(() => {
            this.updateUI();
            this.unlockNextCountries();
            this.checkWin();
        }, 2000);
    }
    
    animateDoraemon(targetMarker) {
        const doraemon = document.getElementById('doraemon');
        const rect = targetMarker.getBoundingClientRect();
        const mapRect = document.getElementById('worldMap').getBoundingClientRect();
        
        const left = ((rect.left - mapRect.left + rect.width/2) / mapRect.width * 100);
        const top = ((rect.top - mapRect.top + rect.height/2) / mapRect.height * 100);
        
        doraemon.style.left = left + '%';
        doraemon.style.top = top + '%';
        
        // Play flying sound effect (you can add actual audio)
        this.playSound('fly');
    }
    
    unlockNextCountries() {
        // Lock all countries first
        const allMarkers = document.querySelectorAll('.country-marker');
        allMarkers.forEach(marker => {
            const pin = marker.querySelector('.marker-pin');
            if (!pin.classList.contains('visited')) {
                pin.classList.remove('active');
                pin.classList.add('locked');
            }
        });
        
        // Unlock connected countries
        const nextCountries = this.connections[this.currentCountry];
        nextCountries.forEach(country => {
            if (!this.visitedCountries.includes(country)) {
                const marker = document.querySelector(`[data-country="${country}"]`);
                if (marker) {
                    const pin = marker.querySelector('.marker-pin');
                    pin.classList.remove('locked');
                    pin.classList.add('active');
                }
            }
        });
    }
    
    updateUI() {
        // Update stats
        document.getElementById('countriesVisited').textContent = 
            `${this.visitedCountries.length}/${this.totalCountries}`;
        document.getElementById('distance').textContent = 
            `${this.totalDistance.toLocaleString()} km`;
        document.getElementById('level').textContent = this.level;
        
        // Update current country info
        const info = this.countryInfo[this.currentCountry];
        document.getElementById('currentCountry').textContent = 
            `📍 Current Location: ${info.name}`;
        document.getElementById('countryInfo').textContent = info.info;
        
        // Update next destinations
        const nextCountries = this.connections[this.currentCountry]
            .filter(c => !this.visitedCountries.includes(c));
        
        const nextList = document.getElementById('nextCountries');
        nextList.innerHTML = '';
        
        if (nextCountries.length === 0) {
            nextList.innerHTML = '<li>🎉 No more destinations - Journey complete!</li>';
        } else {
            nextCountries.forEach(country => {
                const info = this.countryInfo[country];
                const distanceKey = `${this.currentCountry}-${country}`;
                const reverseKey = `${country}-${this.currentCountry}`;
                const distance = this.distances[distanceKey] || this.distances[reverseKey] || 0;
                
                const li = document.createElement('li');
                li.textContent = `${info.flag} ${info.name} (${distance.toLocaleString()} km)`;
                nextList.appendChild(li);
            });
        }
    }
    
    checkWin() {
        if (this.visitedCountries.length === this.totalCountries) {
            setTimeout(() => {
                this.showVictory();
            }, 500);
        }
    }
    
    showVictory() {
        const victory = document.createElement('div');
        victory.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.5s;
            ">
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 50px;
                    border-radius: 30px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    animation: victoryBounce 0.8s;
                ">
                    <h1 style="color: #FFD700; font-size: 60px; margin: 0 0 20px 0; text-shadow: 3px 3px 6px rgba(0,0,0,0.3);">
                        🎉 WORLD TOUR COMPLETE! 🎉
                    </h1>
                    <p style="color: #fff; font-size: 28px; margin: 20px 0;">
                        Doraemon visited all ${this.totalCountries} countries!
                    </p>
                    <p style="color: #FFD700; font-size: 32px; font-weight: bold; margin: 20px 0;">
                        Total Distance: ${this.totalDistance.toLocaleString()} km
                    </p>
                    <p style="color: #fff; font-size: 24px; margin: 20px 0;">
                        Final Level: ${this.level}
                    </p>
                    <button onclick="location.reload()" style="
                        margin-top: 30px;
                        padding: 20px 50px;
                        font-size: 24px;
                        background: #FFD700;
                        color: #333;
                        border: none;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        transition: all 0.3s;
                        font-family: 'Comic Sans MS', cursive;
                    " onmouseover="this.style.transform='scale(1.1)'" 
                       onmouseout="this.style.transform='scale(1)'">
                        🚁 Start New Journey
                    </button>
                </div>
            </div>
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes victoryBounce {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            </style>
        `;
        document.body.appendChild(victory);
        
        // Play victory sound
        this.playSound('victory');
        
        // Confetti effect
        this.createConfetti();
    }
    
    createConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3'][Math.floor(Math.random() * 4)]};
                    left: ${Math.random() * 100}%;
                    top: -10px;
                    border-radius: 50%;
                    animation: confettiFall ${2 + Math.random() * 3}s linear;
                    z-index: 10001;
                `;
                
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes confettiFall {
                        to {
                            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
    }
    
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            padding: 20px 40px;
            background: ${type === 'error' ? '#FF6B6B' : '#4ECDC4'};
            color: #fff;
            border-radius: 50px;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: messageSlide 0.5s;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes messageSlide {
                from {
                    transform: translateX(-50%) translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(messageDiv);
        setTimeout(() => messageDiv.remove(), 3000);
    }
    
    playSound(type) {
        // You can add actual audio files here
        // const audio = new Audio(`sounds/${type}.mp3`);
        // audio.play();
        console.log(`Playing ${type} sound`);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new DoraemonWorldTour();
});
