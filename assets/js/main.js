/********js for testimonial section********/
let slides = document.getElementsByClassName("child");
let currentIndex = 0;
let visibleSlides = 3; // Default for wide screens
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
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
    // let slideIndex = (index + i) % slides.length;
    let slideIndex = index + i;
    slides[slideIndex].style.display = "flex";
  }

  // button opacity
  if (
    index == slides.length - 1 ||
    (window.innerWidth > 1024 && index == slides.length - 3)
  ) {
    nextButton.style.opacity = "50%";
  } else if (index == 0) {
    prevButton.style.opacity = "50%";
  } else {
    nextButton.style.opacity = "100%";
    prevButton.style.opacity = "100%";
  }
}

function nextSlide() {
  // currentIndex = (currentIndex + 1) % slides.length;

  if (
    currentIndex == slides.length - 1 ||
    (window.innerWidth > 1024 && currentIndex == slides.length - 3)
  ) {
    return false;
  } else {
    currentIndex++;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  // currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  if (currentIndex == 0) {
    return false;
  } else {
    currentIndex--;
    showSlide(currentIndex);
  }
}

/******* */
function openSideBar() {
  document.getElementById("sidebar").style.width = "0%";
  document.getElementById("blackOverlay").style.display = "block";
}
function closeSideBar() {
  document.getElementById("sidebar").style.width = "0%";
  document.getElementById("blackOverlay").style.display = "none";
}
