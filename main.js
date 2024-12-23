// Get the menu icon and navbar elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const icon = menuIcon.querySelector('i'); // Get the <i> tag inside the menu icon

// Add click event listener to the menu icon
menuIcon.addEventListener('click', function() {
    // Toggle the display of the navbar
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block'; // Show navbar
        icon.classList.remove('bx-menu'); // Remove menu icon
        icon.classList.add('bx-x'); // Add close icon (X)
    } else {
        navbar.style.display = 'none'; // Hide navbar
        icon.classList.remove('bx-x'); // Remove close icon (X)
        icon.classList.add('bx-menu'); // Add menu icon
    }
});



const textArray = ["a Web Developer", "a Frontend Developer"];
let currentText = 0;
let currentChar = 0;
const typingElement = document.getElementById("typing-effect");

function typeText() {
    const text = textArray[currentText];
    typingElement.textContent = text.substring(0, currentChar);

    if (currentChar < text.length) {
        currentChar++;
        setTimeout(typeText, 150); // Speed of typing effect
    } else {
        setTimeout(deleteText, 1000); // Wait before starting to delete
    }
}

function deleteText() {
    const text = textArray[currentText];
    typingElement.textContent = text.substring(0, currentChar);

    if (currentChar > 0) {
        currentChar--;
        setTimeout(deleteText, 100); // Speed of deleting effect
    } else {
        currentText = (currentText + 1) % textArray.length; // Switch to next text
        setTimeout(typeText, 500); // Wait before starting to type next text
    }
}

// Start typing effect
typeText();


 // Function to check if the section is in view
 function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
  
  // Function to add "show" class when section is in view
  function handleScroll() {
    const sections = document.querySelectorAll('.home, .about, .services, .projects, .contact, .footer');
    sections.forEach(section => {
      if (isInView(section)) {
        section.classList.add('show');  // Trigger animation when section is in view
      }
    });
  }
  
  // Listen for scroll event to trigger animations
  window.addEventListener('scroll', handleScroll);
  
  // Trigger scroll animations on page load
  document.addEventListener('DOMContentLoaded', handleScroll);
  
  // Add event listener to each section for click-based animation trigger
  const sections = document.querySelectorAll('.home, .about, .services, .projects, .contact, .footer');
  sections.forEach(section => {
    section.addEventListener('click', function () {
      section.classList.add('show');  // Trigger animation on click
    });
  });