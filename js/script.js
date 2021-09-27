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