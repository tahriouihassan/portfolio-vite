# Editing your site's content

Everything you'll normally change is data, no components to touch. After editing, `npm run dev` shows changes live; commit + push to deploy.

---

## 1. Page copy (EN + FR)

All interface and page text lives in **`src/copy/en.ts`** and **`src/copy/fr.ts`**.
Both languages render through the same view components in `src/views/`, so the pages can't drift apart.

`fr.ts` is typed against `en.ts`: if you add a key in English and forget French, `npx tsc --noEmit` fails instead of English quietly appearing on a French page.

---

## 2. Add or edit a project

Projects are one Markdown file each in **`src/content/projects/`**.

1. Copy **`_template.md`** to a new file. **The filename is the URL**: `my-project.md` → `/projects/my-project/`.
2. Fill in the frontmatter:

   | Field | Required | Notes |
   |-------|----------|-------|
   | `title` | ✅ | Project name |
   | `description` | ✅ | One line, shown on cards and used as the meta description |
   | `seoTitle` | — | Title tag for the case study (describe the problem, not just the name) |
   | `tech` | — | List, e.g. `["Next.js", "Strapi"]` |
   | `image` / `imageAlt` | — | Screenshot + a sentence describing it. Omit `image` for a placeholder. |
   | `link` | — | Live URL. **Remove it when the site goes offline.** |
   | `stage` | — | `live` (default), `in-development`, `prototype` or `offline`, shown as a label |
   | `featured` | — | `true` puts it on the homepage (the first one is shown large) |
   | `status` | — | `active` (default) or `archived` (→ "Earlier projects" list) |
   | `order` | — | Lower = earlier |
   | `role`, `year`, `client`, `outcome` | — | Shown on the case-study header and facts panel |
   | `scope` | — | One line for the facts panel, e.g. `4 brands · team-built` |
   | `glance` | — | `problem`, `role`, `outcome`: the summary panel at the top of a case study. Restate facts from the body only. |
   | `fr` | — | French `description`, `outcome`, `role`, `year`, `imageAlt`, `scope`, `glance` |

3. **Screenshot:** drop the image in `src/assets/featured/` and set `image: "../../assets/featured/your-file.webp"`. Astro optimizes it automatically.
4. **Case study:** anything you write *below* the frontmatter becomes a full case study at `/projects/<filename>/`, shown as a large card on the Work page. Projects without a body are listed compactly under "More work" (no screenshot needed). The case study's `##` headings become its "On this page" navigation.
5. **French case study:** add **`src/content/projects-fr/<same-filename>.md`** with `seoTitle`, `description` and the translated body. It's published at `/fr/projects/<filename>/` with hreflang links. Without it, French cards link to the English case study.

Never put numbers in a case study that you can't back up (revenue, traffic, uptime, team size).

---

## 3. Services

One YAML file per service in **`src/content/services/`** (`title`, `blurb`, `points`, `icon`, `order`, optional `caseStudy` slug and `fr` block).
Icon names: `layers`, `cart`, `plug`, `sparkles`, `server`, `gauge`, `users`, `globe`, `briefcase` (see `src/components/Icon.astro`).

---

## 4. Experience, skills and resume

**`src/data/experience.ts`** feeds both the About pages and `/resume/`. Edit roles there once.

The downloadable PDF (`public/Hassan-Tahrioui-Resume.pdf`) is rendered from `/resume/`. After changing experience, skills or the resume page, run **`npm run resume:pdf`** (needs Chrome installed) and commit the regenerated PDF. Vercel serves the committed file and doesn't regenerate it.

---

## 5. Testimonials

One YAML file per quote in **`src/content/testimonials/`** (`quote`, `name`, `role`, `company`, `order`, `featured`). Use real quotes only, verbatim. `featured: false` keeps a quote off the homepage.

---

## 6. Your details (name, links, email, booking, keys)

All in **`src/consts.ts`**: `SITE` (name, role, default title/description, URL, email, GA ID), `CONTACT` (Calendly, Web3Forms key, WhatsApp), `SOCIALS` (`primary: true` shows a profile in the hero and on the resume), `LINKS`.

Also keep **`public/llms.txt`** in sync when your role or availability changes. It's the plain-text summary AI search tools read.

---

## Analytics events (GA4)

Sent from `src/layouts/BaseLayout.astro`. Any element with `data-event="name"` (and optional `data-event-label`) sends that event on click.

`book_call_click`, `resume_click`, `resume_print`, `case_study_click`, `case_studies_click`, `services_click`, `nav_contact_click`, `project_site_click`, `contact_form_submit` (with `topic_index`: 0 consulting, 1 role, 2 other), `email_click`, `whatsapp_click`, `upwork_click`, `linkedin_click`, `github_click`.

Mark `contact_form_submit`, `book_call_click` and `resume_click` as key events in GA4.
