// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://feeds.gamepix.com/v2/json?sid=ANA26&pagination=96&page=1")
        .then(response => response.json())
        .then(data => {
            let games = data.items;
            let gameGrid = document.getElementById("gameGrid");

            games.forEach(game => {
                let gameCard = document.createElement("div");
                gameCard.classList.add("game-card");
                gameCard.innerHTML = `
                    <img src="${game.banner_image}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>${game.description.substring(0, 50)}...</p>
                    <a href="${game.url}" target="_blank">Mainkan</a>
                `;
                gameGrid.appendChild(gameCard);
            });
        })
        .catch(error => console.error("Gagal mengambil data:", error));
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function openGame(url) {
    const gameFrame = document.getElementById('gameFrame');
    const gameModal = document.getElementById('gameModal');
    gameFrame.src = url;
    gameModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    const gameFrame = document.getElementById('gameFrame');
    const gameModal = document.getElementById('gameModal');
    gameFrame.src = '';
    gameModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeGame();
});
