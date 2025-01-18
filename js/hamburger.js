// Get elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backdrop = document.getElementById('backdrop');

// Toggle 'active' class on hamburger, navMenu, and backdrop
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animate hamburger into "X"
    navMenu.classList.toggle('active'); // Show/hide nav menu
    backdrop.classList.toggle('active'); // Show/hide backdrop
});

// Close the menu when a nav-link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
    });
});

// Close the menu when the backdrop is clicked
backdrop.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    backdrop.classList.remove('active');
});