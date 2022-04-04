/*    DARK MODE    */

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

/*  BOTÓN ANIMADO */

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

/* BARRA DE PROGRESO */

function _siblings(elem) {
    var siblings = [],
      node = elem;
  
    while (node) {
      node = node.previousElementSibling;
  
      if (node) {
        siblings.push(node);
      }
    }
  
    return siblings;
  }
  
  /*toggle animation on button click
  

  document.addEventListener("click", function (elem) {
    if (elem.target.matches(".play-animation")) {
      var siblingsArray = [];
  
      siblingsArray = _siblings(elem.target);
  
      siblingsArray.forEach(function (elem) {
        var self = elem;
  
        animationToggle(self, 500);
      });
    }
  });*/   
  
  function additionalElems(progressElement, value, skillName) {
    //adding value
    var valueChild = document.createElement("span");
    valueChild.className = "progress-bar__value";
    valueChild.innerHTML = value + "%";
    progressElement.appendChild(valueChild);
  
    //adding bar area
    var barChild = document.createElement("div");
    barChild.className = "progress-bar__bar";
    progressElement.appendChild(barChild);
  
    //adding inner area with the width of value
    var barInnerChild = document.createElement("div");
    barInnerChild.className = "progress-bar__bar-inner";
    barInnerChild.style.width = value + "%";
    barChild.appendChild(barInnerChild);
  
    //adding skillName
    var skillChild = document.createElement("span");
    skillChild.className = "progress-bar__skill";
    skillChild.innerHTML = skillName;
    progressElement.appendChild(skillChild);
  }
  
  //adding <span> elements for value and skill name
  var progressBar = document.querySelectorAll(".progress-bar");
  
  progressBar.forEach(function (item) {
    var self = item,
      barValue = self.getAttribute("data-value"),
      skillValue = self.getAttribute("data-skill"),
      effectNum = self.getAttribute("data-effect");
  
    additionalElems(self, barValue, skillValue);
  
    self.className += " progress-bar--" + effectNum;
  
    var valueElem = self.querySelector(".progress-bar__value");
  
    valueElem.className += " progress-bar__value--" + effectNum;
  
    var barElem = self.querySelector(".progress-bar__bar");
  
    barElem.className += " progress-bar__bar--" + effectNum;
  
    var barInnerElem = self.querySelector(".progress-bar__bar-inner");
  
    barInnerElem.className += " progress-bar__bar-inner--" + effectNum;
  
    var skillElem = self.querySelector(".progress-bar__skill");
  
    skillElem.className += " progress-bar__skill--" + effectNum;
  
    //adding alignment for values
    if (self.classList.contains("progress-bar--aligned-values")) {
      valueElem.style.left = barValue + "%";
      valueElem.classList.add("progress-bar__value--aligned-value");
    }
  
    //adding additional class for no overflow hidden
    if (self.classList.contains("progress-bar--no-overflow")) {
      barElem.classList.add("progress-bar__bar--no-overflow");
    }
  });
  
  //function for animation toggling
  function animationToggle(progressElement, delay) {
    var skillElem = progressElement.querySelector(".progress-bar__skill"),
      valueElem = progressElement.querySelector(".progress-bar__value"),
      skillBar = progressElement.querySelector(".progress-bar__bar-inner");
  
    //removing animated classes, returning to start position
    skillElem.classList.remove("js-animated");
    valueElem.classList.remove("js-animated");
    skillBar.classList.remove("js-animated");
  
    //adding animated classes to start animation
    setTimeout(function () {
      skillElem.classList.add("js-animated");
      valueElem.classList.add("js-animated");
      skillBar.classList.add("js-animated");
    }, delay);
  }
  
  //add animation onload  
  document.addEventListener("DOMContentLoaded", onloadAnimation());

    function onloadAnimation() {
        progressBar.forEach(function (item) {
            animationToggle(item, 500);
        });
    }