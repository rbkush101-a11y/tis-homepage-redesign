# Tula's International School Homepage Redesign

A responsive, single-page homepage concept for Tula's International School (TIS), built with React and Vite. The layout keeps the school's red, cream, and dark palette while making the main paths—learning about the school and reaching admissions—easy to find.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). To make a production build or preview it locally:

```bash
npm run build
npm run preview
```

Run the code-quality check with:

```bash
npm run lint
```

## Tech stack

- React 19 for the page and reusable components
- Vite for local development and production builds
- Tailwind CSS 4 for responsive styling
- Motion for scroll reveals, the progress indicator, and the pointer effect
- Lucide React for interface icons

## Page structure

`src/App.jsx` composes the page in reading order:

1. `layout/Navbar.jsx` — fixed navigation and the small-screen menu
2. `sections/Hero.jsx` and `sections/Stats.jsx` — introduction, admissions action, and school facts
3. `sections/About.jsx`, `Academics.jsx`, and `WhyTis.jsx` — school overview and learning
4. `sections/Sports.jsx` and `CampusExperience.jsx` — activities and boarding life
5. `sections/Rankings.jsx` and `Testimonials.jsx` — recognition and parent feedback
6. `sections/AdmissionsCTA.jsx` and `layout/Footer.jsx` — admissions links and contact details

Shared animation behavior lives in `src/components/animation/`. Official school image URLs are collected in `src/data/assets.js` so they can be changed in one place. Those public images are served by [tis.edu.in](https://tis.edu.in/); the page therefore needs an internet connection to show them.

## Interaction and accessibility notes

- The top progress bar is driven by Motion's `useScroll` and smoothed with `useSpring`.
- `Reveal` uses `whileInView` with `viewport={{ once: true }}` so sections animate once as they enter view.
- `CustomCursor` is enabled only for fine pointers and enlarges when it passes over interactive elements. Touch devices keep their native pointer behavior.
- The mobile menu closes after a section is selected and locks background scrolling while open.
- Anchor links connect navigation and calls to action to the relevant sections.
- Global styles include a reduced-motion override and visible text alternatives for the content images.

## Before submission

- Check the page at 375px, 768px, and 1280px or wider.
- Confirm the official image URLs load on the network where the page will be reviewed.
- Replace or verify all school facts and testimonial wording against current official content.
- Push the repository to a public GitHub repository and deploy it to a public URL (Vercel, Netlify, or GitHub Pages).
- Add those real repository and deployment URLs to the required submission form.

AI tools are permitted by the supplied assessment guide. Be ready to explain the component tree, the animation hooks, and the mobile-menu state, and only submit code you have reviewed and can discuss.
