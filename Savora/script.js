
  let currentIndex = 0;
  const slideContainer = document.getElementById('slideContainer');
  const totalSlides = document.querySelectorAll('.slide').length;

  function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
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