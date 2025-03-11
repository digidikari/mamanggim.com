document.addEventListener("DOMContentLoaded", function () {
    let gameLinks = document.querySelectorAll(".game-card a"); // Target semua link game

    gameLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah navigasi default
            let gameUrl = this.href;

            // Buat iframe fullscreen
            let fullScreenDiv = document.createElement("div");
            fullScreenDiv.id = "fullScreenContainer";
            fullScreenDiv.innerHTML = `
                <iframe id="fullScreenGame" src="${gameUrl}" allowfullscreen></iframe>
                <button id="closeFullscreen">✖ Close</button>
            `;

            document.body.appendChild(fullScreenDiv);

            // CSS otomatis
            let style = document.createElement("style");
            style.innerHTML = `
                #fullScreenContainer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: black;
                    z-index: 9999;
                }
                #fullScreenGame {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                #closeFullscreen {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: red;
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                    font-size: 16px;
                }
            `;
            document.head.appendChild(style);

            // Tutup fullscreen saat tombol ditekan
            document.getElementById("closeFullscreen").addEventListener("click", function () {
                document.getElementById("fullScreenContainer").remove();
                style.remove(); // Hapus CSS setelah keluar fullscreen
            });
        });
    });
});
