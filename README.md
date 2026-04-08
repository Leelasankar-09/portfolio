# Leela Portfolio

A clean personal portfolio built with HTML, CSS, and JavaScript using a simple MVC-style structure.

## Overview

This portfolio highlights:

- Hero introduction
- Education timeline
- Featured projects
- Skills grid
- Contact section
- Dark and light theme toggle

The app is designed to stay lightweight, stable, and easy to customize.

## Tech Stack

- HTML5
- CSS3
- JavaScript with ES modules
- Three.js for the animated background
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
│  └─ contact.js
├─ index.html
└─ README.md
```

## Run Locally

Start a local server:

```bash
python -m http.server 5500
```

Open:

```text
http://127.0.0.1:5500
```

## Editing Content

Update portfolio data in:

- `models/data.js`

Update section markup in:

- `views/*.js`

Update styling in:

- `assets/css/style.css`

## Notes

- The loader is dismissed safely on `DOMContentLoaded` with a fallback timeout.
- The education timeline is always visible and responsive.
- The projects renderer supports both legacy and current project data shapes.

## Author

Leela Sankar Reddy

- GitHub: https://github.com/Leelasankar-09
- LinkedIn: https://www.linkedin.com/in/leela-sankar-reddy-sirigireddy-774976302/
- Email: sirigireddyleelasankar@gmail.com
