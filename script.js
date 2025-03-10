async function fetchGames() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = corsProxy + "https://feeds.gamepix.com/v2/json?sid=ANA26&pagination=96&page=1";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.games || data.games.length === 0) {
            console.error("Tidak ada game yang ditemukan!");
            return;
        }

        renderGames(data.games);
    } catch (error) {
        console.error("Gagal mengambil data game:", error);
    }
}

function renderGames(games) {
    const gameGrid = document.getElementById("gameGrid");
    gameGrid.innerHTML = games.map(game => `
        <div class="game-card" onclick="openGame('${game.url}')">
            <img src="${game.thumbnail}" class="game-thumbnail" alt="${game.name}">
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <div class="game-meta">
                    <span>⭐ ${game.rating || "N/A"}</span>
                    <span>🎮 ${game.category || "Uncategorized"}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Fungsi untuk membuka game di tab baru
function openGame(url) {
    // Validasi URL sebelum redirect
    const allowedDomains = ["gamepix.com"];
    const urlObj = new URL(url);
    if (allowedDomains.includes(urlObj.hostname)) {
        window.open(url, '_blank');
    } else {
        console.error("URL tidak diizinkan:", url);
    }
}

// Fungsi untuk toggle sidebar
function toggleSidebar() {
    // Logika untuk menampilkan atau menyembunyikan sidebar
    alert('Sidebar toggled!'); // Contoh sederhana
}

// Fungsi untuk mengambil dan menampilkan RSS feed
async function fetchRSSFeed() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const rssUrl = "https://example.com/rss"; // Ganti dengan URL RSS feed Anda

    try {
        const response = await fetch(corsProxy + rssUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        renderRSSFeed(xmlDoc);
    } catch (error) {
        console.error("Gagal mengambil RSS feed:", error);
    }
}

function renderRSSFeed(xmlDoc) {
    const items = xmlDoc.querySelectorAll("item");
    const feedContainer = document.getElementById("rssFeed");

    items.forEach(item => {
        const title = item.querySelector("title").textContent;
        const description = item.querySelector("description").textContent;
        const link = item.querySelector("link").textContent;

        const feedItem = document.createElement("div");
        feedItem.classList.add("feed-item");

        feedItem.innerHTML = `
            <h3><a href="${link}" target="_blank">${title}</a></h3>
            <p>${description}</p>
        `;

        feedContainer.appendChild(feedItem);
    });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
    fetchRSSFeed();
});
