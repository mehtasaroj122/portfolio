# Portfolio Website Summary

## Overview

This project is a modern single-page portfolio for **Saroj Mehta**, built to work as:

- A personal online profile
- A CV and portfolio attachment
- A recruiter-friendly project showcase
- A presentation and viva support page

The design is intentionally clean, professional, minimal, responsive, and polished for internship or academic use.

## Stack

- React with Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Included Sections

- Sticky navigation with dark/light mode toggle
- Premium animated hero section
- About section
- Skills section
- Featured projects section
- Learning and experience timeline
- CV-ready highlights section
- Contact section with static-hosting-friendly form
- Footer with social links

## Key Features

- Mobile-first responsive layout
- Dark and light mode with persistence
- Smooth scrolling
- Scroll progress indicator
- Framer Motion reveal animations and hover interactions
- Featured Library Management System project card
- Downloadable CV button
- SEO and social meta tags
- GitHub Pages-friendly asset paths

## Important Content Sources Used

- GitHub profile from repo remote: `mehtasaroj122`
- Git email from local Git config: `mehtasaroj122@gmail.com`
- LinkedIn URL from the public GitHub profile README
- Featured LMS repository: `https://github.com/mehtasaroj122/LMS`

## Main Files To Edit Later

- `src/data/portfolio.js`
  Update portfolio copy, skills, links, projects, and timeline from one place.
- `public/Saroj-Mehta-CV.pdf`
  Replace with an updated real CV whenever needed.
- `index.html`
  Edit SEO metadata or social preview content.

## Deployment Notes

- `vite.config.js` uses `base: './'` to make deployment simpler for GitHub Pages and static hosting.
- The contact form uses `mailto:` so it works without a backend.
- Public assets use Vite base-aware paths for safer deployment under a repo subpath.

## Assumptions Made

- The portfolio uses real GitHub and LinkedIn profile links where they could be verified.
- Two secondary projects are presented as practice or concept projects because detailed public repositories were not confirmed for them.
- The CV button is wired for a downloadable PDF asset in `public/`.
