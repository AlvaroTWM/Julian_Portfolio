# julian-portafolio

Personal site of Julian Arámbulo, data engineer and software developer in Asunción, Paraguay.
Live at https://julian-portafolio.vercel.app

## Stack

- [Astro](https://astro.build), fully static, no client framework, English and Spanish
- Plain CSS with light and dark themes (`src/styles/global.css`)
- Self-hosted IBM Plex fonts via Fontsource
- Deployed on Vercel

## Structure

```
src/
  content/     en.ts and es.ts (all copy, same shape), site.ts (shared links), types.ts
  components/  Page, Header, Hero, Work, Flow (architecture diagrams), Experience, Contact, Footer, Intro
  layouts/     Layout.astro (meta tags, Open Graph, JSON-LD)
public/cv/     downloadable CVs (PDF)
```

All copy lives in `src/content`, one file per language, so editing text never means touching markup.
The English page is `/` and the Spanish page is `/es/`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Intro

`Intro.astro` plays a ~2.6 s signature animation once per browser. Any click, key, scroll or
touch skips it, it never runs with `prefers-reduced-motion`, and the footer signature replays it.

## Tests

```sh
npm run spell    # spell check in English and Spanish (cspell)
npm test         # Playwright: builds the site, then runs the tests
npm run check    # all of the above
```

The Playwright suite runs on desktop and mobile screen sizes and checks: language, title and meta
tags; console errors and failed requests; accessibility with axe (WCAG 2.2 AA, light and dark
mode); in-page anchors, unique ids, internal links and CV files; external links; images; no
horizontal scroll from 320 px to 1280 px; the language switch and header navigation; the intro
(plays once, can be skipped, stays off with reduced motion, and can be replayed); and that the English and Spanish
content stay in sync. CI runs everything on every pull request.
