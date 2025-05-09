
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;
  
  const slideContainer = document.getElementById('slideContainer');
  const slides = document.querySelectorAll('.slide');
  slideContainer.style.width = `${slides.length * 100}vw`;

  function updateSlidePosition() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  // Autoplay every 3 seconds
  setInterval(nextSlide, 10000);