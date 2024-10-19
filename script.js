// JavaScript for dark/light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Function to handle theme toggling
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sunIcon.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'block';
    moonIcon.style.display = document.body.classList.contains('dark-mode') ? 'block' : 'none';
});

// Trigger animations on load
const animatedItems = document.querySelectorAll('.animate');
animatedItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.opacity = '1'; // Make item visible
        item.style.transform = 'translateY(0)'; // Reset position
    }, index * 200); // Stagger the animations
});
