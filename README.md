# Yasar M — Portfolio

Personal portfolio site for **Yasar M**, Full Stack Developer (Java · Spring Boot · React.js · MySQL). Built as a single-page React app with smooth scroll navigation, animated sections, and a live-styled "stack visual" showing the request path through a full-stack app.

**Live site:** _add your deployed URL here_

## Sections

- **Hero** — intro, availability status, and quick links (resume, contact, GitHub, LinkedIn)
- **Stack** — toolbox broken down by layer (Database, Backend, API, Frontend)
- **Work** — selected projects with live demo and GitHub links
- **Resume** — downloadable/previewable one-pager
- **Experience** — internship history and education
- **Certifications** — certificate gallery with a full-size lightbox view
- **Contact** — direct email/phone actions plus social links

## Tech stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) — app shell and dev/build tooling
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered and hover animations
- [Lucide React](https://lucide.dev/) — icon set
- Plain CSS with custom properties (no CSS framework) — see `src/index.css` for design tokens (colors, type, spacing)

## Getting started

```bash
# install dependencies
npm install

# start the dev server (with HMR)
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs on [http://localhost:5173](http://localhost:5173) by default.

## Project structure

```
src/
├── assets/            # profile photo, resume preview image, etc.
├── components/        # one component + co-located CSS per section
│   ├── AmbientBackground.jsx
│   ├── BrandIcons.jsx       # hand-drawn GitHub/LinkedIn marks
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── StackVisual.jsx      # 3D-tilted stack layers on the hero
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Experience.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolio.js   # profile info, projects, skills, experience, certs
├── App.jsx
└── index.css           # design tokens + global/reset styles
```

## Editing content

All personal content (name, bio, projects, skills, experience, certifications, contact links) lives in `src/data/portfolio.js` — update it there rather than inside individual components.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages). Build with `npm run build`, then deploy the generated `dist/` folder.

## License

Personal project — not licensed for reuse.