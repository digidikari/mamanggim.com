document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".game-card a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let gameUrl = this.getAttribute("href");

            // Arahkan ke game.html di tab yang sama
            window.location.href = `game.html?url=${encodeURIComponent(gameUrl)}`;
        });
    });
});

// Fungsi untuk masuk ke fullscreen
function goFullscreen() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

// Event listener untuk fullscreen
document.body.addEventListener("click", goFullscreen);

// Jika keluar dari fullscreen, otomatis masuk fullscreen lagi
document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
        setTimeout(goFullscreen, 1000); // Tunggu 1 detik sebelum kembali ke fullscreen
    }
});
