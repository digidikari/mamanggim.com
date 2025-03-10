// scripts.js
document.addEventListener("DOMContentLoaded", function() {
            fetch("https://feeds.gamepix.com/v2/json?sid=ANA26&pagination=96&page=1")
                .then(response => response.json())
                .then(data => {
                    let games = data.items;
                    let gameList = document.getElementById("game-list");

                    games.forEach(game => {
                        let gameCard = document.createElement("div");
                        gameCard.classList.add("game-card");
                        gameCard.innerHTML = `
                            <img src="${game.banner_image}" alt="${game.title}">
                            <h3>${game.title}</h3>
                            <p>${game.description.substring(0, 50)}...</p>
                            <a href="${game.url}" target="_blank">Mainkan</a>
                        `;
                        gameList.appendChild(gameCard);
                    });
                })
                .catch(error => console.error("Gagal mengambil data:", error));
        });

        // Generate Game Cards
        function generateGameCards() {
            const grid = document.getElementById('gameGrid');
            grid.innerHTML = games.map(game => `
                <div class="game-card" onclick="openGame('${game.embedUrl}')">
                    <img src="${game.thumbnail}" class="game-thumbnail">
                    <div class="game-info">
                        <h3 class="game-title">${game.title}</h3>
                        <div class="game-meta">
                            <span class="game-genre">${game.genre}</span>
                            <span>⭐ ${game.rating}</span>
                        </div>
                        <div class="game-meta">
                            <span>👥 ${game.players}</span>
                            <span>🏷️ ${game.category}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Game Control
        function openGame(url) {
            document.getElementById('gameFrame').src = url;
            document.getElementById('gameModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeGame() {
            document.getElementById('gameFrame').src = '';
            document.getElementById('gameModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Sidebar Toggle
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.querySelector('.sidebar-toggle');
            
            sidebar.classList.toggle('active');
            toggleBtn.textContent = sidebar.classList.contains('active') ? '✕' : '☰';
        }

        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.querySelector('.sidebar-toggle');
            
            if (!sidebar.contains(e.target) && !e.target.classList.contains('sidebar-toggle')) {
                sidebar.classList.remove('active');
                toggleBtn.textContent = '☰';
            }
        });

        // Search Functionality
        document.querySelector('.search-input').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = games.filter(game => 
                game.title.toLowerCase().includes(searchTerm) || 
                game.genre.toLowerCase().includes(searchTerm)
            );
            renderFilteredGames(filtered);
        });

        function renderFilteredGames(filteredGames) {
            const grid = document.getElementById('gameGrid');
            grid.innerHTML = filteredGames.map(game => `
                <div class="game-card" onclick="openGame('${game.embedUrl}')">
                    <img src="${game.thumbnail}" class="game-thumbnail">
                    <div class="game-info">
                        <h3 class="game-title">${game.title}</h3>
                        <div class="game-meta">
                            <span class="game-genre">${game.genre}</span>
                            <span>⭐ ${game.rating}</span>
                        </div>
                        <div class="game-meta">
                            <span>👥 ${game.players}</span>
                            <span>🏷️ ${game.category}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Initialize
        generateGameCards();

        // Close modal with ESC
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') closeGame();
        });
