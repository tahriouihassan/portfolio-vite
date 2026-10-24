# Portfolio — Hassan Tahrioui

Personal portfolio: technical lead and senior full-stack engineer, English + French. Built with **Astro** + **Tailwind CSS**, content-driven by Markdown/YAML so adding work is a one-file change.

## Develop

```bash
npm install      # first time
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
npx tsc --noEmit # type-check (catches missing French copy)
```

## Editing content

**All content lives in `src/content/` and `src/consts.ts`. See [CONTENT.md](CONTENT.md) for the full guide.** The short version:

- **Add a project** → copy `src/content/projects/_template.md`, fill the frontmatter, drop a screenshot in `src/assets/featured/`. A markdown body turns it into a full case study automatically.
- **Edit services** → the YAML files in `src/content/services/`.
- **Edit page copy** → `src/copy/en.ts` and `src/copy/fr.ts` (French is type-checked against English).
- **Edit experience / resume** → `src/data/experience.ts`.
- **Edit testimonials** → the YAML files in `src/content/testimonials/` (real quotes only).
- **Your name, links, email, booking URL, form key, analytics** → `src/consts.ts` (one file).

## Tech

- [Astro](https://astro.build) — static site, real server-rendered HTML for SEO
- Tailwind CSS (via `postcss.config.cjs`) — design tokens in `tailwind.config.mjs`
- Content Collections (typed Markdown/YAML) — schema in `src/content/config.ts`
- `@astrojs/sitemap` — auto-generated `sitemap-index.xml`
- Contact form via [Web3Forms](https://web3forms.com); booking via Calendly/cal.com
