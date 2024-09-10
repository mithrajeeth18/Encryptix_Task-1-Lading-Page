document.querySelector(".hero button").addEventListener("click", () => {
  alert("Welcome to the Cyberpunk World!");
});
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndex >= 2) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});

prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = 2;
  } else {
    currentIndex--;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});
