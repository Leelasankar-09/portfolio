// portfolio.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the theme button and body elements
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    // Ensure the theme button exists before proceeding
    if (!themeButton) {
        console.error('Theme button not found. Please ensure the element with id "theme-button" exists.');
        return;
    }

    // Check for stored theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeButton.textContent = '🌙'; // Moon icon to switch to dark
    } else {
        body.classList.remove('light-mode'); // Default to dark mode
        themeButton.textContent = '☀️'; // Sun icon to switch to light
    }

    // Add click event listener to toggle theme
    themeButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Update button icon and save preference
        if (body.classList.contains('light-mode')) {
            themeButton.textContent = '🌙'; // Show moon to switch to dark
            localStorage.setItem('theme', 'light');
        } else {
            themeButton.textContent = '☀️'; // Show sun to switch to light
            localStorage.setItem('theme', 'dark');
        }
    });
});