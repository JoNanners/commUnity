// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    const liveBoardLink = document.getElementById("live-board-link");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const iframe = document.getElementById("main-frame");
    const liveBoard = document.getElementById("live-board");

    liveBoardLink.addEventListener("click", function (e) {
        e.preventDefault();
        iframe.style.display = "none";
        liveBoard.style.display = "block";
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSrc = this.getAttribute("href");
            iframe.src = targetSrc;
            iframe.style.display = "block";
            liveBoard.style.display = "none";
        });
    });
});
