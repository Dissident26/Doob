const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');
const slides = document.querySelectorAll('.slider-item');
const menuButton = document.querySelector('.nav_toggle');

btnNext.addEventListener('click', ()=>handleClick('next'));
btnPrev.addEventListener('click', ()=>handleClick('prev'));

const handleClick = (direction) => {
  const currSlide = document.querySelector('.active');
  const nextSlide = currSlide.nextElementSibling;
  const prevSlide = currSlide.previousElementSibling;
  
  (nextSlide && direction == 'next') ? (currSlide.classList.remove('active'), nextSlide.classList.add('active')) :
  (!nextSlide && direction == 'next') ? (currSlide.classList.remove('active'), slides[0].classList.add('active')) :
  (prevSlide && direction == 'prev') ? (currSlide.classList.remove('active'), prevSlide.classList.add('active')) :
  (!prevSlide && direction == 'prev') ? (currSlide.classList.remove('active'), slides[slides.length - 1].classList.add('active')) : currSlide;
  
};

menuButton.addEventListener('click', function(){
  const menu = document.querySelector('.menu ul');
  menu.classList.toggle('nav_toggle_active');
  menuButton.classList.toggle('active');
  console.log(menu)
});
