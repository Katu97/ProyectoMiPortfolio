/*    DARK MODE    */

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

/*   MENU DESPEGABLE   */

const nav = document.getElementById("nav");
const background_menu = document.getElementById("back_menu");

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu);

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = "-200px";
    background_menu.style.display = "none";
}

/*    MENU SELECCIONADO    

const active = document.getElementsByClassName("active");

active.addEventListener("click",() => {
    document.menu.nav.ul.li.a.classList.toggle("selected");
});*/

var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }