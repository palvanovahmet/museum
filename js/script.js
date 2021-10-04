var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  let current__number = document.querySelector('#current__number');
  current__number.innerHTML = '0' + slideIndex;
}

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener('click', () => {
  plusSlides(-1);
});

next.addEventListener('click', () => {
  plusSlides(1);
});

// let dote = document.querySelectorAll('.dot')

// for(let i = 0; i < dote.length; i++) {
//   dote[i].addEventListener('click', (event) => {
//      let index = event.target.dataset.index;
//      currentSlide(index);
//   });  
// }

let burgerMenu = document.querySelector('.burger__menu');
let burgerMenuLines = document.querySelector('.burger__menu__lines');
let adaptiveMenu = document.querySelector('.welcome__adaptive__menu');
let menuLinks = document.querySelector('.welcome__menu__links');
let hideWelcomeOffer = document.querySelector('.welcome__offer');

burgerMenu.onclick = openBurgerMenu;
menuLinks.onclink = closeBurgerMenu;

function openBurgerMenu(e){
  burgerMenu.onclick = null;
  if (e.target == burgerMenuLines || e.target == burgerMenu){
      burgerMenuLines.classList.toggle("burger__menu__lines__active");
      hideWelcomeOffer.classList.toggle("ninja");
      adaptiveMenu.classList.toggle("burger__active");
  }
  

  setTimeout(function(){
    burgerMenu.onclick = openBurgerMenu;
  },200);
}

function closeBurgerMenu(){  
  burgerMenuLines.classList.toggle("burger__menu__lines__active");
  hideWelcomeOffer.classList.toggle("ninja");
  adaptiveMenu.classList.toggle("burger__active");
}


