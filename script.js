// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Automatic Image Slider (Gallery Section)
// Initialize slide index
let slideIndex = 0;

// Function to change slide
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    // Reset all slides to be hidden
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    
    // Increment slide index
    slideIndex++;
    
    // Loop back to the first slide after the last one
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow
showSlides();

// Form Validation (Optional, if needed)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name && email && message) {
        alert('Your message has been sent successfully!');
        form.reset(); // Reset the form
    } else {
        alert('Please fill in all the fields.');
    }
});
