# Prasad Gawade — Data Analyst Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, React Router, and Framer Motion.

## Features

- Left sidebar navigation (desktop) with a mobile top-bar + slide-out drawer
- Blue & white color scheme with full dark mode support (toggle in sidebar)
- 9 pages: Home, About, Skills, Projects, Project Detail, Experience, Education, Certifications, Contact
- Reusable `ProjectCard` and `SkillBar` components
- Animated stat counters, progress bars, and page transitions (Framer Motion)
- Resume download button (wired to `/public/Prasad_Gawade_Resume.pdf`)
- Contact form (opens the visitor's email client pre-filled — swap in Formspree/EmailJS for a real backend if you want in-page submission)
- SEO-friendly title/description in `index.html`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  components/   Sidebar, Footer, ProjectCard, SkillBar, StatCard, PageWrapper
  context/      ThemeContext (dark/light mode)
  data/         portfolioData.js — all content lives here, edit freely
  pages/        one file per route
```

## Customizing content

Everything text-based — name, summary, stats, skills, projects, experience,
education, certifications, and contact details — lives in
`src/data/portfolioData.js`. Edit that one file to update the whole site.

## Swapping in real images

Project thumbnails and the profile photo are currently styled gradient
placeholders (to avoid shipping binary assets you didn't provide). Drop your
own images into `src/assets/` and reference them from `portfolioData.js` and
`About.jsx` / `ProjectCard.jsx` when you're ready.

## Resume download

Replace `public/Prasad_Gawade_Resume.pdf` with an updated resume any time —
the filename is already wired up to the "Download Resume" button on the Home
page.
