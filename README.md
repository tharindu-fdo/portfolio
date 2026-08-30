# P T D Fernando | Portfolio Website

A modern personal portfolio website for P T D Fernando, a Computer Science undergraduate at Kotelawala Defence University (KDU), Sri Lanka.

This project presents a responsive, terminal-inspired portfolio with sections for about, education, skills, selected projects, and contact information. It is designed to look sleek, minimal, and tech-focused while remaining easy to customize and deploy.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio website is a single-page personal website built with HTML, CSS, and JavaScript. It is intended to act as an online resume and professional showcase for academic background, technical skills, personal projects, and contact details.

The design includes:

- a fixed navigation bar
- animated reveal effects
- terminal-style hero section
- academic timeline
- skill chips and project cards
- contact form integration
- responsive layout for desktop and mobile devices

## Features

- Responsive single-page portfolio layout
- Modern cyber/terminal-inspired aesthetic
- Fixed navigation with mobile menu
- Animated scroll reveal effects
- Hero section with typed command-style terminal output
- Education timeline with progress indicators
- Skills section with technology icons
- Project showcase cards with live links
- Downloadable CV button
- Contact form using FormSubmit
- Smooth scrolling and polished UI transitions

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- SVG and image assets
- FormSubmit for contact form handling

## Project Structure

```text
portfolio/
├── assets/
│   ├── profile.jpg
│   ├── cv.pdf
│   ├── *.svg
│   └── *.png
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## Prerequisites

Before running the project locally, ensure you have:

- a modern web browser (Chrome, Edge, Firefox, etc.)
- a code editor such as VS Code
- optional: a local web server for previewing the page more accurately

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Open the project folder.

3. Open `index.html` directly in a browser, or use a local development server.

## Run Locally

### Option 1: Open directly in browser

Simply double-click `index.html` or open it in your browser.

### Option 2: Use a local server (recommended)

From the project folder, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

### Option 3: VS Code Live Server

- Open the project in VS Code
- Install the Live Server extension
- Right-click `index.html`
- Select "Open with Live Server"

## Deployment

This portfolio can be deployed easily on GitHub Pages.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Go to the repository on GitHub.
3. Open "Settings".
4. Go to "Pages".
5. Select the branch to deploy (usually `main`).
6. Save the settings.
7. GitHub will provide a live URL for the site.

### Example deployment commands

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Customization

You can easily update the portfolio content by editing the following files:

- `index.html` — main content, sections, profile text, projects, contact links
- `styles.css` — colors, layout, typography, animations, responsiveness
- `script.js` — motion effects, nav toggle behavior, and contact form logic
- `assets/` — images, icons, CV file, and project previews

### Common edits

- Change the name and title text in `index.html`
- Replace profile image in `assets/profile.jpg`
- Update project descriptions and links
- Replace the CV file in `assets/`
- Change contact email in `script.js`

## Contact

For opportunities, collaborations, or inquiries, you can reach out through the contact section on the website or via the configured email.

### Portfolio

- Website: [Your Portfolio URL]
- Email: [your-email@example.com]
- GitHub: [github.com/yourusername]
- LinkedIn: [linkedin.com/in/yourprofile]

## License

This project is a personal portfolio website. Please check whether a project-specific license has been added before reusing the code or assets for commercial purposes.

If no explicit license is included, treat the content as personal work and request permission before public reuse.

## Acknowledgements

- Google Fonts for typography
- SVG icons and asset files used in the design
- GitHub Pages for free static hosting

## Future Improvements

Possible future enhancements include:

- adding a dark/light theme toggle
- adding a blog section
- improving project filtering
- integrating a real backend for contact form handling
- adding a downloadable PDF or resume section with styling

---

Built with care for a clean, professional, and memorable online presence.
