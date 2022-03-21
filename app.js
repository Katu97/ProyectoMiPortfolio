const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-theme_icons");
const toggleLogo = document.getElementById("toggle-logoAP");
const togglePerfil = document.getElementById("toggle-perfil");

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
    if(togglePerfil.src.includes("perfillight.png")){
        togglePerfil.src="assets/perfildark.png";
    } else {
        togglePerfil.src="assets/perfillight.png";
    }
});
