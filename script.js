// JavaScript for Experience Carousel
const carousel = document.querySelector('.experience-carousel');
const experienceItems = document.querySelectorAll('.experience-item');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Track the current slide index
const itemCount = experienceItems.length; // Number of slides

// Function to update carousel position and active dot
function updateCarousel() {
  // Move carousel to show the current experience item
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots to reflect the current slide
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Event listener for the right arrow (next slide)
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % itemCount;
  updateCarousel();
});

// Event listener for the left arrow (previous slide)
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  updateCarousel();
});

// Event listeners for dots to navigate to a specific slide
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize carousel position
updateCarousel();
