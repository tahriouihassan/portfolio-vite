import { defineCollection, z } from "astro:content";

/**
 * PROJECTS: one markdown file per project in src/content/projects/.
 * Copy _template.md to add a new one. The frontmatter below is validated
 * at build time, so a typo fails loudly instead of silently breaking.
 *
 * If a file has a markdown BODY (below the frontmatter), it automatically
 * becomes a full case-study page at /projects/<filename>. No body = card only.
 */
const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One-line blurb shown on cards.
      description: z.string(),
      // Tech chips shown on cards. Leave out (or empty) to show none.
      tech: z.array(z.string()).default([]),
      // Path is relative to the markdown file, e.g. ../../assets/featured/x.webp
      // Optional: if omitted, a branded placeholder is shown until you add one.
      image: image().optional(),
      // Live URL (optional).
      link: z.string().url().optional(),
      // Source repo (optional).
      repo: z.string().url().optional(),
      // Embed URL for the in-page video popup (optional).
      video: z.string().url().optional(),
      // Show on the homepage featured grid.
      featured: z.boolean().default(false),
      // "active" shows in the grid; "archived" drops to the graveyard list.
      status: z.enum(["active", "archived"]).default("active"),
      // Lower numbers appear first.
      order: z.number().default(0),
      // Optional case-study metadata (shown on the detail page header).
      role: z.string().optional(),
      year: z.string().optional(),
      client: z.string().optional(),
      // Headline result, e.g. "Processes live ticket payments in EN/NL/DE".
      outcome: z.string().optional(),
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
  }),
});

export const collections = { projects, services, testimonials };
