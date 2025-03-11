document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan event listener ke halaman agar fullscreen hanya aktif setelah klik pengguna
    document.body.addEventListener("click", function () {
        let elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }, { once: true }); // Event hanya berjalan sekali
});
