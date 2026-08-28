# P T D Fernando — Portfolio Website

A single-page, animated portfolio site built with plain HTML, CSS and JavaScript (no build tools needed).

## How to view it
Just open `index.html` in any browser — double-click it, or drag it into a browser window.

## How to publish it
Upload the three files (`index.html`, `styles.css`, `script.js`) to any static host:
- **GitHub Pages** (free, and fits a CS portfolio well)
- **Netlify** or **Vercel** (drag-and-drop the folder)

## What to personalize before you publish
1. **CV file**: `assets/Tharindu_Fernando_CV.pdf` is downloaded by the "download cv" buttons in the hero and contact sections. Replace this file with an updated version whenever your CV changes — keep the filename the same, or update the `href` in `index.html` if you rename it.
2. **Contact section** (`index.html`, near the bottom):
   - Replace `ptdfernando@example.com` with your real email.
   - Replace the LinkedIn and GitHub `href` links with your real profile URLs.
2. **Projects section**: swap the three placeholder cards for your real projects — title, description, tags, and a link to each repository.
3. **About / stats**: adjust the numbers in the "years into the degree", "languages & tools", and "projects shipped" stats to match reality.
4. **Skills section**: add or remove chips to match your actual toolkit.
5. Optional: add a profile photo — insert an `<img>` tag in the hero or about section and style it in `styles.css`.

## Design notes
- Fonts: Space Grotesk (headings), Inter (body text), JetBrains Mono (labels/terminal) — loaded from Google Fonts.
- The hero terminal window "types" your details on load — edit the lines in `script.js` under `outputLines`.
- The whole page respects `prefers-reduced-motion` for accessibility.
- Fully responsive: collapses to a mobile nav menu under 720px.
