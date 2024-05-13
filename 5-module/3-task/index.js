function initCarousel() {
    const carouselInner = document.querySelector('.carousel__inner');
    const carouselArrows = document.querySelectorAll('.carousel__arrow');
    const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
    const carouselArrowRight = document.querySelector('.carousel__arrow_right');
    const slideWidth = carouselInner.offsetWidth;
    let currentSlide = 0;
  
    function moveSlide(direction) {
      if (direction === 'left') {
        currentSlide--;
      } else {
        currentSlide++;
      }
  
      carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      if (currentSlide === 0) {
        carouselArrowLeft.style.display = 'none';
        carouselArrowRight.style.display = '';
      } else if (currentSlide === 3) {
        carouselArrowLeft.style.display = '';
        carouselArrowRight.style.display = 'none';
      } else {
        carouselArrows.forEach(arrow => arrow.style.display = '');
      }
    }
  
    carouselArrowLeft.addEventListener('click', () => moveSlide('left'));
    carouselArrowRight.addEventListener('click', () => moveSlide('right'));
  
    carouselArrowLeft.style.display = 'none';
  }
  
