// 🛠 Fullscreen otomatis saat pertama kali membuka mamanggim.com
document.addEventListener("DOMContentLoaded", function () {
    function goFullscreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }
    goFullscreen(); // Panggil fungsi fullscreen

    // 🛠 Saat game diklik, buka game.html dengan parameter URL game
    let gameLinks = document.querySelectorAll(".game-card a");
    gameLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah pindah ke halaman langsung
            let gameUrl = this.href;
            window.open(`game.html?url=${encodeURIComponent(gameUrl)}`, "_blank");
        });
    });
});
