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
