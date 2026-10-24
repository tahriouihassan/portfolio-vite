/**
 * Lightweight i18n for the two-locale site.
 * English lives at "/", French mirrors under "/fr/".
 * All UI copy lives in src/copy/{en,fr}.ts; `fr` is typed against `en`, so a
 * missing French string is a type error instead of English leaking onto /fr.
 */

import { en } from "./copy/en";
import { fr } from "./copy/fr";

export type Locale = "en" | "fr";

export const ui = { en, fr };

export function getLocale(url: URL): Locale {
  return url.pathname === "/fr" || url.pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Normalize an internal path to the trailing-slash form the site serves. */
export function withSlash(path: string): string {
  const [p, hash] = path.split("#");
  const out = p.endsWith("/") ? p : `${p}/`;
  return hash ? `${out}#${hash}` : out;
}

/** Prefix a canonical EN path for the given locale ("/services" -> "/fr/services/"). */
export function localizePath(path: string, locale: Locale): string {
  const p = withSlash(path);
  if (locale === "en") return p;
  return p === "/" ? "/fr/" : `/fr${p}`;
}

/** EN paths that exist in both languages (used for hreflang + the switcher). */
export const TRANSLATED = ["/", "/services", "/about", "/contact", "/privacy", "/projects"];

/** Given any pathname, return its EN base path ("/fr/services/" -> "/services"). */
export function basePath(pathname: string): string {
  let p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/fr") return "/";
  if (p.startsWith("/fr/")) p = p.slice(3);
  return p || "/";
}

/** Both-locale URLs for a pathname, or null if the page has no translation. */
export function alternates(pathname: string): { en: string; fr: string } | null {
  const base = basePath(pathname);
  if (!TRANSLATED.includes(base)) return null;
  return { en: localizePath(base, "en"), fr: localizePath(base, "fr") };
}

/** Resolve a service collection entry for a locale (fr overrides when present). */
export function resolveService(
  data: {
    title: string;
    blurb: string;
    points: string[];
    icon: string;
    caseStudy?: string;
    fr?: { title: string; blurb: string; points: string[] };
  },
  locale: Locale
) {
  const fr = locale === "fr" ? data.fr : undefined;
  return {
    title: fr?.title ?? data.title,
    blurb: fr?.blurb ?? data.blurb,
    points: fr?.points ?? data.points,
    icon: data.icon,
    caseStudy: data.caseStudy,
  };
}

/** Resolve the card-level fields of a project for a locale. */
export function resolveProject(
  data: {
    description: string;
    outcome?: string;
    role?: string;
    year?: string;
    fr?: { description: string; outcome?: string; role?: string; year?: string };
  },
  locale: Locale
) {
  const fr = locale === "fr" ? data.fr : undefined;
  return {
    description: fr?.description ?? data.description,
    outcome: fr?.outcome ?? data.outcome,
    role: fr?.role ?? data.role,
    year: fr?.year ?? data.year,
  };
}
