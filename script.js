function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.transform === "translateX(-100%)") {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(-100%)";
    }
}

function playGame(gameId) {
    alert("Memulai " + gameId);
}
