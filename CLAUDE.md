# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 19 portfolio website for Jenalyn Juntilla built with Vite and Bootstrap 5. Single-page application showcasing professional experience, skills, and services as a Virtual Assistant and Customer Support Specialist.

## Commands

```bash
npm run dev      # Start development server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

### Data-Driven Design
All resume content is centralized in `src/data/resumeData.js`. Components import and render this data, making content updates straightforward without touching component logic.

### Component Structure
```
src/
├── components/      # Feature components (Navbar, Hero, About, Experience, Services, Skills, Contact, Footer)
├── data/           # resumeData.js - centralized resume content
├── App.jsx         # Root component, imports all section components
├── main.jsx        # Bootstrap CSS imports and React root
├── index.css       # Global styles and CSS variables
└── App.css         # Component-specific styles
```

### Styling
- Bootstrap 5.3 via react-bootstrap for layout and UI components
- Bootstrap Icons for iconography
- Custom CSS variables in `index.css` for theming
- Component styles use Bootstrap utility classes with custom overrides

### Deployment
Configured for GitHub Pages deployment with `base: '/jen-portfolio/'` in vite.config.js. Build output goes to `dist/`.
