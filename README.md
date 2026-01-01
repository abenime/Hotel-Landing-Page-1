# Seaside Aurora Hotel Landing Page

A Vite + React + TypeScript front-end for a luxury coastal hotel experience. Uses Tailwind CSS for styling, React Router for multi-page navigation, and mock JSON endpoints served from `public/api` to simulate API calls for rooms, amenities, offers, and experiences.

## Getting started

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Lint and format (optional):
   - `npm run lint`
   - `npm run format`
4. Build for production:
   - `npm run build`
   - Preview build: `npm run preview`

## Routes

- `/` — overview with hero, featured suites, experiences, offers, testimonials
- `/suites` — full suite grid plus booking form
- `/experiences` — curated experiences
- `/offers` — seasonal collections
- `/amenities` — property amenities
- `/book` — booking form with quick room highlights
- `/contact` — concierge contact CTA

## Mock API data

Static JSON lives under `public/api` and is fetched at runtime:

- `rooms.json` — room rates, tags, and highlights
- `amenities.json` — property amenities
- `offers.json` — stay collections
- `experiences.json` — curated activities
- `testimonials.json` — guest quotes

Update these files to change what the page renders. Calls are intentionally delayed slightly in `src/lib/mockApi.ts` to mirror real network latency.

## Design notes

- Tailwind theme includes custom sand, ocean, and forest palettes plus display/body fonts (Playfair Display, DM Sans).
- Sections/pages: hero, availability callouts, suites grid, amenities, experiences, offers, testimonials, and concierge call-to-action.
- Booking form submits to a mock handler that returns a reference code; no backend is required.

## Project scripts

- `npm run dev` — start Vite dev server
- `npm run build` — type-check and build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run format` — format with Prettier

## Notes

- All data and imagery are placeholders; replace with real assets before launch.
- No authentication or payments are implemented; this is a front-end showcase.
