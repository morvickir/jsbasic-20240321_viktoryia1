import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
  }
     createCarouselElement() {
      const carousel = createElement(`
        <div class="carousel">
          <div class="carousel__inner">
            ${this.slides.map(slide => this.createSlideElement(slide)).join('')}
          </div>
          <button class="carousel__button carousel__button_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </button>
          <button class="carousel__button carousel__button_left" style="display: none;">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </button>
        </div>
      `);
  
      const inner = carousel.querySelector('.carousel__inner');
      const rightButton = carousel.querySelector('.carousel__button_right');
      const leftButton = carousel.querySelector('.carousel__button_left');
  
      rightButton.addEventListener('click', () => this.moveSlide(inner, 'right'));
      leftButton.addEventListener('click', () => this.moveSlide(inner, 'left'));
  
      inner.addEventListener('scroll', () => this.toggleButtons(inner, leftButton, rightButton));
  
      return carousel;
    }
  
    createSlideElement(slide) {
      return `
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">,${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;
    }
  
    moveSlide(inner, direction) {
      const slideWidth = inner.offsetWidth;
      const scrollOffset = direction === 'left' ? -slideWidth : slideWidth;
      inner.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  
    toggleButtons(inner, leftButton, rightButton) {
      leftButton.style.display = inner.scrollLeft > 0 ? '' : 'none';
      rightButton.style.display = inner.scrollLeft < inner.scrollWidth - inner.clientWidth ? '' : 'none';
    }
  }
  
