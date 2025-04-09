// Theme Toggle
document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#theme-button i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// Music Player Toggle
document.querySelector('.music-toggle').addEventListener('click', () => {
    const musicContainer = document.getElementById('music-container');
    musicContainer.classList.toggle('show');
});

// Back to Top
window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});