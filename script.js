document.getElementById("menu-toggle").addEventListener("click", function() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
});
let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;

document.querySelector(".next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const width = document.querySelector(".carousel-container").offsetWidth;
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * width}px)`;
}