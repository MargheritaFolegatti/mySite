document.addEventListener("DOMContentLoaded", function (event) {
  const carouselContainer = document.querySelector(".carousel-container");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const itemWidth = carouselContainer.clientWidth / 3; // Imposta la larghezza di ogni elemento nel carosello
  let currentPosition = 0;

  prevButton.addEventListener("click", function () {
    currentPosition += itemWidth;
    if (currentPosition > 0) {
      currentPosition = -itemWidth * 2;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}px)`;
  });

  nextButton.addEventListener("click", function () {
    currentPosition -= itemWidth;
    if (currentPosition < -itemWidth * 50) {
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}px)`;
  });
});
