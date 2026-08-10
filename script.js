const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');

let currentIndex = 0;
totalSlidesEl.textContent = slides.length;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });
  currentSlideEl.textContent = currentIndex + 1;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlides();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlides();
  }
});

// Navegación con teclado (Teclas Izquierda y Derecha)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlides();
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    updateSlides();
  }
});