<<<<<<< HEAD
# Leela Portfolio

A premium personal portfolio built with HTML, CSS, and JavaScript using a simple MVC-style structure.

## Overview

This project showcases Leela Sankar Reddy's profile, education, projects, skills, achievements, and contact information in a modern glassmorphism-style interface. It includes:

- Responsive premium UI
- Dark and light theme toggle with `localStorage`
- Education timeline
- Project cards with tech stack badges
- Skills grid
- Contact form powered by Formspree
- Resume download button

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES Modules)
- Three.js for background particles
- Font Awesome for icons

## Project Structure

```text
portfolio/
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  └─ js/
│     └─ main.js
├─ controllers/
│  └─ appController.js
├─ models/
│  └─ data.js
├─ views/
│  ├─ navbar.js
│  ├─ hero.js
│  ├─ education.js
│  ├─ projects.js
│  ├─ skills.js
│  ├─ achievements.js
│  └─ contact.js
├─ resume/
│  └─ Leela_Resume.pdf
└─ index.html
```

## How It Works

- `models/data.js` stores profile content, education, projects, skills, and achievements.
- `views/*.js` generate section markup.
- `controllers/appController.js` combines all sections and renders the app.
- `assets/js/main.js` handles app boot, loader dismissal, theme toggle, animations, and background effects.
- `assets/css/style.css` contains the design system, layout, responsiveness, and section styling.

## Local Development

Run the project with a simple static server:

```bash
python -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500
```

## Features

### Loader Safety

- Uses `DOMContentLoaded` to initialize safely
- Has a fallback timeout so the loader never blocks the UI

### Theme Toggle

- Navbar toggle for dark and light mode
- Theme preference is stored in `localStorage`

### Education Timeline

- Always visible
- Responsive left-right layout on desktop
- Single-column layout on mobile

### Projects Section

- Glassmorphism cards
- Hover lift effects
- Tech stack badges

### Skills Section

- Card-based grid layout
- Icons and hover interactions

### Contact Section

- Styled glass form
- Formspree integration
- Responsive layout

## Customization

Update content from:

- Profile info: `models/data.js`
- Education data: `models/data.js`
- Projects: `models/data.js`
- Skills: `models/data.js`
- Contact links: `models/data.js`

Update styling from:

- `assets/css/style.css`

Update section markup from:

- `views/*.js`

## Deployment

This project can be deployed easily on Vercel or any static hosting platform.

Before deploying:

1. Make sure `resume/Leela_Resume.pdf` exists.
2. Confirm the Formspree endpoint is correct in `views/contact.js`.
3. Test both dark and light mode.

## Troubleshooting

### Blank screen or loader stuck

- Make sure `index.html` loads `assets/js/main.js` as a module
- Confirm there are no syntax errors in `views/*.js`
- Hard refresh the browser to clear stale cached modules

### Resume download not working

- Ensure the file exists at `resume/Leela_Resume.pdf`

### Contact form not submitting

- Verify the Formspree form ID in `views/contact.js`

## Author

Leela Sankar Reddy

- GitHub: https://github.com/Leelasankar-09
- LinkedIn: https://www.linkedin.com/in/leela-sankar-reddy-sirigireddy-774976302/
- Email: sirigireddyleelasankar@gmail.com
=======
# 💻 Leela Sankar Reddy — Personal Portfolio

Welcome to the source code for my personal portfolio website!  
I built this site to showcase my journey as a developer, my skills, projects, certifications, and a little more about me.

This portfolio is not just static — it reflects my growth as I evolve as a Computer Science Engineer and a passionate tech enthusiast.  
From Discord bots to full-stack systems, this site tells that story.

---

## 🚀 Tech Stack

- **HTML5 & CSS3** — Carefully crafted and styled for a smooth and modern experience.
- **JavaScript (Vanilla)** — Simple, clean DOM manipulation and interactions.
- **FontAwesome** — Icon support.
- **Custom Responsive Design** — Mobile-first and desktop polished.

---

## 🌗 Features

- **Dark/Light Theme Toggle**  
  Click the sun/moon icon to switch themes — your preference is remembered.
  
- **Smooth Scrolling Navigation**  
  Clean links that guide you through each section.
  
- **Animated Typewriter Effect**  
  Introducing myself with a fun, minimal type effect.

- **Projects & Certifications Section**  
  Highlighting what I’ve worked on, complete with tech stacks and links.

- **Contact Form**  
  Want to say hi or hire me? Just fill out the form!

---

## 📂 Folder Structure

|-- index.html # Main page with all sections
|-- portfolio.css # Custom CSS styles with light/dark theme logic
|-- portfolio.js # JavaScript for interactivity (theme toggle, back-to-top, music player)

---

## 🎯 My Vision

This isn’t just a resume on the web —  
It's a living project that evolves with every new skill I learn and every project I complete.

Whether you’re a recruiter, a client, or just a curious visitor —  
I hope this gives you an honest glimpse of who I am:  
A student, a problem-solver, and an engineer passionate about design, code, and creative thinking.

---

## 📬 Get in Touch

If you like my work or would like to collaborate, feel free to reach out via the contact section on the site or drop me an email.  
You can also find me on [LinkedIn](#) or [GitHub](#).

Thanks for visiting!
>>>>>>> 822e8fb7e623bdf4ebe843c66758a7ab57397f4c
