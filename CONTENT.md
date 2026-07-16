# Editing your site's content

Everything you'll normally change is data — no components to touch. After editing, `npm run dev` shows changes live; commit + push to deploy.

---

## 1. Add or edit a project

Projects are one Markdown file each in **`src/content/projects/`**.

1. Copy **`_template.md`** to a new file. **The filename is the URL** — `my-project.md` → `/projects/my-project`.
2. Fill in the frontmatter (the part between the `---` lines):

   | Field | Required | Notes |
   |-------|----------|-------|
   | `title` | ✅ | Project name |
   | `description` | ✅ | One line, shown on cards |
   | `tech` | ✅ | List, e.g. `["Next.js", "Strapi"]` |
   | `image` | — | Path to a screenshot. **Omit it to show a branded placeholder.** |
   | `link` | — | Live URL |
   | `repo` | — | Source repo URL |
   | `video` | — | Embed URL — shown on the case-study page |
   | `featured` | — | `true` puts it on the homepage grid |
   | `status` | — | `active` (default) or `archived` (→ Graveyard list) |
   | `order` | — | Lower = earlier |
   | `role`, `year`, `client`, `outcome` | — | Shown on the case-study header |

3. **Screenshot:** drop the image in `src/assets/featured/` and set
   `image: "../../assets/featured/your-file.webp"`. Astro optimizes it automatically. WebP or PNG/JPG all work.
4. **Case study (optional):** anything you write *below* the frontmatter becomes a full
   case-study page at `/projects/<filename>`, and a "Read case study" link appears on the card.
   Leave it empty and the project is just a card.

If you get a build error after adding a project, it's almost always a frontmatter typo — the error message names the field.

---

## 2. Services

One YAML file per service in **`src/content/services/`** (`title`, `blurb`, `points`, `icon`, `order`).
Available `icon` names: `layers`, `cart`, `plug`, `sparkles`, `server`, `gauge` (defined in `src/components/Icon.astro`).

---

## 3. Testimonials

One YAML file per quote in **`src/content/testimonials/`** (`quote`, `name`, `role`, `company`, `order`).

> ⚠️ The three files there now are **placeholders**. Replace them with real quotes or delete them.
> The homepage "What people say" section hides itself automatically if there are none.

---

## 4. Your details (name, links, email, booking, keys)

All in **`src/consts.ts`** — one file:

- `SITE` — name, role, title/description (SEO), URL, email, location, Google Analytics ID.
- `CONTACT.bookingUrl` — **your Calendly / cal.com link** (currently a placeholder).
- `CONTACT.web3formsKey` — **your [Web3Forms](https://web3forms.com) access key** so the contact form emails you (free; currently a placeholder).
- `SOCIALS` — GitHub / LinkedIn / Twitter / Instagram (fix the **LinkedIn** URL).
- `NAV` — the navbar links.

---

## Before going live — checklist

- [ ] `src/consts.ts`: real Calendly URL + Web3Forms key + LinkedIn URL.
- [ ] Replace or remove the placeholder testimonials.
- [ ] Confirm the **"9+ years"** figure (hero + About) matches your real start year.
- [ ] Add real screenshots for VisitFootball / Tracefox / Evalio (they use placeholders now).
- [ ] Replace `public/preview.png` with a 1200×630 social-share image.
