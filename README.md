# julian-portafolio

Personal site of Julian Arámbulo, data engineer and software developer in Asunción, Paraguay.
Live at https://julian-portafolio.vercel.app

## Stack

- [Astro](https://astro.build), fully static, no client framework
- Plain CSS with light and dark themes (`src/styles/global.css`)
- Self-hosted IBM Plex fonts via Fontsource
- Deployed on Vercel

## Structure

```
src/
  data/        content: site.ts, projects.ts (case studies), experience.ts, skills.ts
  components/  Header, Hero, Work, Flow (architecture diagrams), Experience, Contact, Footer, Intro
  layouts/     Layout.astro (meta tags, Open Graph, JSON-LD)
public/cv/     downloadable CVs (PDF)
```

Content lives in `src/data`, so editing text never means touching markup.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Intro

`Intro.astro` plays a ~2.6 s signature animation once per browser. Any click, key, scroll or
touch skips it, it never runs with `prefers-reduced-motion`, and the footer signature replays it.
