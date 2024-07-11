/********js for testimonial section********/
let slides = document.getElementsByClassName("child");
let currentIndex = 0;
let visibleSlides = 3; // Default for wide screens

// Function to determine the number of visible slides based on screen width
function updateVisibleSlides() {
  if (window.innerWidth < 1024) {
    visibleSlides = 1;
  } else {
    visibleSlides = 3;
  }
  showSlide(currentIndex);
}

window.onresize = updateVisibleSlides();
window.onload = updateVisibleSlides();

function showSlide(index) {
  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the appropriate number of slides based on the current index
  for (let i = 0; i < visibleSlides; i++) {
    let slideIndex = (index + i) % slides.length;
    slides[slideIndex].style.display = "flex";
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

/******* */
function openSideBar() {
  document.getElementById("sidebar").style.transition = ".6s";
  document.getElementById("sidebar").style.width = "60%";
  document.getElementById("blackOverlay").style.display = "block";
}
function closeSideBar() {
  document.getElementById("sidebar").style.width = "0%";
  document.getElementById("blackOverlay").style.display = "none";
}
