document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".game-card a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let gameUrl = this.href; // Tambahkan deklarasi gameUrl

            let newTab = window.open("game.html", "_blank");
            if (newTab) {
                newTab.location.href = `game.html?url=${encodeURIComponent(gameUrl)}`;
            } else {
                alert("Popup terblokir! Izinkan pop-up untuk membuka game.");
            }
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

// Tambahkan event listener untuk fullscreen
document.body.addEventListener("click", goFullscreen);

// Jika keluar dari fullscreen, tetap bisa masuk fullscreen lagi
 document.addEventListener("fullscreenchange", function () {
     if (!document.fullscreenElement) {
         console.log("Fullscreen ditutup, klik untuk mengaktifkan lagi.");
     }
});
