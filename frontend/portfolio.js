document.addEventListener('DOMContentLoaded', () => {
    // Music Player Toggle
    const musicToggle = document.querySelector('.music-toggle');
    const musicContainer = document.getElementById('music-container');
    musicContainer.style.display = 'none'; // Hidden by default

    musicToggle.addEventListener('click', () => {
        musicContainer.classList.toggle('show');
        musicContainer.style.display = musicContainer.classList.contains('show') ? 'block' : 'none';
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark Mode Toggle
    const themeButton = document.getElementById('theme-button');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeButton.querySelector('i').classList.remove('fa-sun');
        themeButton.querySelector('i').classList.add('fa-moon');
    }

    themeButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const icon = themeButton.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Fade-In Animation for Sections
    const sections = document.querySelectorAll('.fade-in');
    const checkFadeIn = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Run on load

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navToggleLabel = document.querySelector('.nav-toggle-label');

    navToggle.addEventListener('change', () => {
        navMenu.style.display = navToggle.checked ? 'flex' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !navMenu.contains(e.target) && !navToggleLabel.contains(e.target)) {
            navToggle.checked = false;
            navMenu.style.display = 'none';
        }
    });

    // Typewriter Effect
    const typewriterText = document.getElementById('typewriter-text');
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let i = 0;
    const typingSpeed = 100;

    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    typeWriter();

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form Submitted:', data); // Replace with actual submission logic
        alert('Message sent! (This is a demo - no real submission occurs)');
        contactForm.reset();
    });
});