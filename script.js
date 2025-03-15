document.addEventListener("DOMContentLoaded", function () {
           let link = event.target.closest(".game-card a");
            if (!link) return;

            // Gunakan window.open() langsung tanpa template literal
            let newTab = window.open("game.html", "_blank");
            if (newTab) {
                newTab.location.href = `game.html?url=${encodeURIComponent(gameUrl)}`;
            } else {
                alert("Popup terblokir! Izinkan pop-up untuk membuka game.");
            }
        });
    });

    function goFullscreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }

    // Tambahkan event listener untuk klik yang bisa mengaktifkan fullscreen kapan saja
    document.body.addEventListener("click", goFullscreen);

    // Jika keluar dari fullscreen, tetap bisa masuk fullscreen lagi
    document.addEventListener("fullscreenchange", function () {
        if (!document.fullscreenElement) {
            console.log("Fullscreen ditutup, klik untuk mengaktifkan lagi.");
        }
    });
});
