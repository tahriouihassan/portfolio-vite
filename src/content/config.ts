import { defineCollection, z } from "astro:content";

/**
 * PROJECTS: one markdown file per project in src/content/projects/.
 * Copy _template.md to add a new one. The frontmatter below is validated
 * at build time, so a typo fails loudly instead of silently breaking.
 *
 * If a file has a markdown BODY (below the frontmatter), it automatically
 * becomes a full case-study page at /projects/<filename>. No body = card only.
 */
const glanceSchema = z.object({
  problem: z.string(),
  role: z.string(),
  outcome: z.string(),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One-line blurb shown on cards and used as the case study's meta description.
      description: z.string(),
      // Title tag for the case-study page (falls back to `title`).
      seoTitle: z.string().optional(),
      // Tech chips shown on cards. Leave out (or empty) to show none.
      tech: z.array(z.string()).default([]),
      // Path is relative to the markdown file, e.g. ../../assets/featured/x.webp
      // Optional: if omitted, a branded placeholder is shown until you add one.
      image: image().optional(),
      // Describes the screenshot for screen readers and image search.
      imageAlt: z.string().optional(),
      // Live URL (optional). Leave it out once a site goes offline.
      link: z.string().url().optional(),
      // Source repo (optional).
      repo: z.string().url().optional(),
      // Embed URL for an in-page video (optional).
      video: z.string().url().optional(),
      // Show on the homepage featured grid.
      featured: z.boolean().default(false),
      // "active" shows in the grid; "archived" drops to the earlier-projects list.
      status: z.enum(["active", "archived"]).default("active"),
      // Where the product stands today; shown as a label so nothing in
      // development or offline reads as a live product.
      stage: z.enum(["live", "in-development", "prototype", "offline"]).default("live"),
      // Lower numbers appear first.
      order: z.number().default(0),
      // Optional case-study metadata (shown on the detail page header).
      role: z.string().optional(),
      year: z.string().optional(),
      client: z.string().optional(),
      // Headline result, e.g. "Processes live ticket payments in EN/NL/DE".
      outcome: z.string().optional(),
      // Short context line for the facts panel, e.g. "4 brands · team-built".
      scope: z.string().optional(),
      // Case-study summary panel. Only restate facts from the case study body.
      glance: glanceSchema.optional(),
      // French card fields (shown on /fr pages; falls back to English).
      fr: z
        .object({
          description: z.string(),
          outcome: z.string().optional(),
          role: z.string().optional(),
          year: z.string().optional(),
          imageAlt: z.string().optional(),
          scope: z.string().optional(),
          glance: glanceSchema.optional(),
        })
        .optional(),
    }),
});

/**
 * FRENCH CASE STUDIES: src/content/projects-fr/<slug>.md, where <slug> matches
 * a file in projects/. The body becomes /fr/projects/<slug>; card data and
 * images still come from the English entry.
 */
const projectsFr = defineCollection({
  type: "content",
  schema: z.object({
    seoTitle: z.string(),
    description: z.string(),
  }),
});

/** SERVICES: one YAML file per offering in src/content/services/. */
const services = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    points: z.array(z.string()),
    // Icon name from src/components/Icon.astro.
    icon: z.string().default("spark"),
    order: z.number().default(0),
    // Slug of the case study that backs this service up (optional).
    caseStudy: z.string().optional(),
    // Optional French translation (shown on /fr pages; falls back to English).
    fr: z
      .object({
        title: z.string(),
        blurb: z.string(),
        points: z.array(z.string()),
      })
      .optional(),
  }),
});

/** TESTIMONIALS: one YAML file per quote in src/content/testimonials/. */
const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    order: z.number().default(0),
    // Shown on the homepage; the rest still appear where all quotes are listed.
    featured: z.boolean().default(true),
  }),
});

export const collections = { projects, "projects-fr": projectsFr, services, testimonials };
