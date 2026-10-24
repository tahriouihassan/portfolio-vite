import { getCollection } from "astro:content";

/**
 * Case studies are projects with a markdown body, in display order.
 * `frOnly` limits the list to those with a French translation, so French
 * prev/next links never point at a missing page.
 */
export async function caseStudyPaths(frOnly = false) {
  const fr = await getCollection("projects-fr");
  const frBySlug = new Map<string, (typeof fr)[number]>(fr.map((e) => [e.slug, e]));
  const projects = (await getCollection("projects"))
    .filter((p) => p.body.trim().length > 0)
    .filter((p) => !frOnly || frBySlug.has(p.slug))
    .sort((a, b) => a.data.order - b.data.order);

  return projects.map((p, i) => ({
    params: { slug: p.slug },
    props: {
      project: p,
      fr: frBySlug.get(p.slug),
      prev: i > 0 ? { slug: projects[i - 1].slug, title: projects[i - 1].data.title } : null,
      next: i < projects.length - 1 ? { slug: projects[i + 1].slug, title: projects[i + 1].data.title } : null,
    },
  }));
}
