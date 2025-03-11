document.addEventListener("DOMContentLoaded", function() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { 
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { 
        document.documentElement.msRequestFullscreen();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let gameLinks = document.querySelectorAll(".game-card a");
    gameLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let gameUrl = this.href;
            window.open(`game.html?url=${encodeURIComponent(gameUrl)}`, "_blank");
        });
    });
});
