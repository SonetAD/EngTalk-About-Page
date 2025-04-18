let index = 0;
const slides = document.getElementById('slideShow');
const totalSlides = slides.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}vw)`;
}, 4000);
