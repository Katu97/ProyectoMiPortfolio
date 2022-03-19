const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-theme_icons");
const toggleLogo = document.getElementById("toggle-logoAP");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("luna-creciente.png")){
        toggleIcon.src="assets/sun.png";
    } else {
        toggleIcon.src="assets/luna-creciente.png";
    }
    if(toggleLogo.src.includes("APLogorosa.png")){
        toggleLogo.src="assets/APLogoazul.png";
    } else {
        toggleLogo.src="assets/APLogorosa.png";
    }
});
