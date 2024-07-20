let closeMScreenButton = document.getElementById("mscreen-close");
let openMScreenButton = document.getElementById("toggle-dm-screen");
let masterScreen = document.getElementById("master-screen");
openMScreenButton.addEventListener("click", () => {
    masterScreen.style.display = "block";
});
closeMScreenButton.addEventListener("click", () => {
    masterScreen.style.display = "none";
});

