/**
 * Lightweight i18n for the two-locale site.
 * English lives at "/", French mirrors under "/fr/".
 * Project case studies stay English-only (no /fr variant).
 */

export type Locale = "en" | "fr";

export function getLocale(url: URL): Locale {
  return url.pathname === "/fr" || url.pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Prefix a canonical EN path for the given locale. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/fr/" : `/fr${path}`;
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
  const en = base === "/" ? "/" : `${base}/`;
  return { en, fr: `/fr${en}`.replace(/\/$/, "/") };
}

/** Resolve a service collection entry for a locale (fr overrides when present). */
export function resolveService(
  data: { title: string; blurb: string; points: string[]; icon: string; fr?: { title: string; blurb: string; points: string[] } },
  locale: Locale
) {
  const fr = locale === "fr" ? data.fr : undefined;
  return {
    title: fr?.title ?? data.title,
    blurb: fr?.blurb ?? data.blurb,
    points: fr?.points ?? data.points,
    icon: data.icon,
  };
}

export const ui = {
  en: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
    ],
    navCta: "Let's talk",
    contactHref: "/contact",
    hero: {
      badge: "Available part-time for new projects",
      eyebrow: "Lead Full-Stack Developer · Freelance",
      h1: "I build commercial web platforms from idea to production, and keep them running.",
      p1: `I'm Hassan, a product-minded full-stack developer. For 9+ years I've taken web products from a rough idea and UI all the way through backend architecture, payments, integrations, deployment and production support. Right now I lead development on <span class="text-head_text">VisitFootball</span>, a live football ticketing and travel platform serving customers in three languages.`,
      p2: `I work across <span class="text-head_text">Next.js, Strapi, Laravel and Vue</span>, and I'm comfortable owning the servers too: DigitalOcean, Docker, Nginx, Postgres, Redis. If you need one person who can design the workflow, build the whole thing, and be there when it breaks, that's what I do.`,
      ctaPrimary: "Book a free intro call",
      ctaSecondary: "See my work",
      stats: [
        { value: "9+", label: "years of experience" },
        { value: "End-to-end", label: "design → code → servers" },
        { value: "EU hours", label: "remote from Morocco" },
      ],
    },
    emailMe: "Email Me",
    readCaseStudy: "Read case study",
    backToProjects: "Back to projects",
    visit: "Visit",
    cta: {
      heading: "Have a project in mind?",
      sub: "I'm available part-time for freelance work, from a focused fix to a full platform. Tell me what you're building and I'll tell you how I'd approach it.",
      book: "Book a call",
      message: "Send a message",
    },
    footer: {
      blurb: "Lead Full-Stack Developer building commercial web platforms end-to-end. Have a project in mind?",
      talk: "Let's talk.",
      navigate: "Navigate",
      contact: "Contact",
      getInTouch: "Get in touch",
      book: "Book a call",
      whatsapp: "WhatsApp me",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
    },
    form: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@company.com",
      details: "Project details",
      detailsPh: "What are you building? Rough timeline and budget range help too.",
      send: "Send message",
      sending: "Sending…",
      ok: "Thanks, I'll get back to you shortly.",
      fail: "Something went wrong. Please email me directly.",
      network: "Network error. Please email me directly.",
    },
    engagements: {
      heading: "How to hire me",
      sub: "Three ways we can work together. Every engagement starts with a free intro call.",
      items: [
        {
          title: "Fixed-scope project",
          body: "A defined build with a clear quote and timeline: an MVP, a platform, a migration. Best when you know what needs to ship.",
          // Add a range when ready, e.g. price: "from $3,000"
          price: "",
        },
        {
          title: "Monthly retainer",
          body: "Reserved capacity each month for features, fixes and operations. Best for live platforms that keep evolving.",
          // e.g. price: "from $1,500/month"
          price: "",
        },
        {
          title: "Hourly consulting",
          body: "Audits, rescue work, production debugging and pairing. Best for targeted problems that need senior eyes fast.",
          price: "from $35/hr",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "What's your availability?",
          a: "I freelance part-time, so I take on a small number of projects at once and give each one focused attention. I can usually start within one to two weeks, sooner for small engagements.",
        },
        {
          q: "Do you work in my timezone?",
          a: "I'm based in Morocco and work aligned with European hours (CET). Overlap with US East Coast mornings works well too.",
        },
        {
          q: "Who owns the code?",
          a: "You do. Code, repositories, servers and accounts are set up in your name or transferred to you at the end, with documentation.",
        },
        {
          q: "Can you take over an existing codebase?",
          a: "Yes. A big part of my work is rescuing, stabilizing and extending platforms other teams started, including production troubleshooting.",
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes, happy to sign your NDA before we discuss any details.",
        },
        {
          q: "How do we start?",
          a: "Book a free intro call or send a message through the form. You'll get my honest take on your project, a rough estimate and a clear next step.",
        },
      ],
    },
  },
  fr: {
    nav: [
      { label: "Accueil", href: "/fr/" },
      { label: "Services", href: "/fr/services" },
      { label: "Projets", href: "/fr/projects" },
      { label: "À propos", href: "/fr/about" },
    ],
    navCta: "Discutons",
    contactHref: "/fr/contact",
    hero: {
      badge: "Disponible à temps partiel pour de nouveaux projets",
      eyebrow: "Développeur Full-Stack Lead · Freelance",
      h1: "Je construis des plateformes web commerciales, de l'idée à la production, et je les garde en ligne.",
      p1: `Je suis Hassan, développeur full-stack orienté produit. Depuis plus de 9 ans, je prends en charge des produits web de l'idée et de l'UI jusqu'à l'architecture backend, les paiements, les intégrations, le déploiement et le support en production. Je dirige actuellement le développement de <span class="text-head_text">VisitFootball</span>, une plateforme de billetterie et de voyages football qui sert ses clients en trois langues.`,
      p2: `Je travaille avec <span class="text-head_text">Next.js, Strapi, Laravel et Vue</span>, et je gère aussi les serveurs : DigitalOcean, Docker, Nginx, Postgres, Redis. S'il vous faut une seule personne capable de concevoir le workflow, de tout construire et d'être là quand ça casse, c'est exactement ce que je fais.`,
      ctaPrimary: "Réserver un appel gratuit",
      ctaSecondary: "Voir mes projets",
      stats: [
        { value: "9+", label: "années d'expérience" },
        { value: "De bout en bout", label: "conception → code → serveurs" },
        { value: "Horaires EU", label: "à distance depuis le Maroc" },
      ],
    },
    emailMe: "Écrivez-moi",
    readCaseStudy: "Étude de cas",
    backToProjects: "Retour aux projets",
    visit: "Visiter",
    cta: {
      heading: "Un projet en tête ?",
      sub: "Je suis disponible en freelance à temps partiel, d'un correctif ciblé à une plateforme complète. Dites-moi ce que vous construisez et je vous dirai comment je l'aborderais.",
      book: "Réserver un appel",
      message: "Envoyer un message",
    },
    footer: {
      blurb: "Développeur Full-Stack Lead, je construis des plateformes web commerciales de bout en bout. Un projet en tête ?",
      talk: "Parlons-en.",
      navigate: "Naviguer",
      contact: "Contact",
      getInTouch: "Me contacter",
      book: "Réserver un appel",
      whatsapp: "WhatsApp",
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
    },
    form: {
      name: "Nom",
      namePh: "Votre nom",
      email: "Email",
      emailPh: "vous@entreprise.com",
      details: "Votre projet",
      detailsPh: "Que construisez-vous ? Un délai et un budget approximatifs aident aussi.",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      ok: "Merci, je vous réponds très vite.",
      fail: "Une erreur est survenue. Écrivez-moi directement par email.",
      network: "Erreur réseau. Écrivez-moi directement par email.",
    },
    engagements: {
      heading: "Comment me solliciter",
      sub: "Trois façons de travailler ensemble. Chaque mission commence par un appel de découverte gratuit.",
      items: [
        {
          title: "Projet à périmètre fixe",
          body: "Un développement défini, avec un devis et un délai clairs : un MVP, une plateforme, une migration. Idéal quand vous savez ce qui doit être livré.",
          price: "",
        },
        {
          title: "Forfait mensuel",
          body: "De la capacité réservée chaque mois pour les évolutions, les correctifs et l'exploitation. Idéal pour les plateformes en production qui évoluent en continu.",
          price: "",
        },
        {
          title: "Consulting horaire",
          body: "Audits, sauvetage de projets, debugging en production et pair programming. Idéal pour les problèmes ciblés qui demandent un regard senior rapidement.",
          price: "à partir de 35 $/h",
        },
      ],
    },
    faq: {
      heading: "Questions fréquentes",
      items: [
        {
          q: "Quelle est votre disponibilité ?",
          a: "Je travaille en freelance à temps partiel : je prends peu de projets à la fois et je donne à chacun une attention soutenue. Je peux généralement démarrer sous une à deux semaines, plus vite pour les petites missions.",
        },
        {
          q: "Travaillez-vous dans mon fuseau horaire ?",
          a: "Je suis basé au Maroc et je travaille sur les horaires européens (CET). Un chevauchement avec les matinées de la côte Est américaine fonctionne bien aussi.",
        },
        {
          q: "À qui appartient le code ?",
          a: "À vous. Le code, les dépôts, les serveurs et les comptes sont créés à votre nom ou vous sont transférés en fin de mission, avec la documentation.",
        },
        {
          q: "Pouvez-vous reprendre un projet existant ?",
          a: "Oui. Une grande partie de mon travail consiste à stabiliser et faire évoluer des plateformes démarrées par d'autres équipes, y compris le débogage en production.",
        },
        {
          q: "Signez-vous des NDA ?",
          a: "Oui, avec plaisir, avant même d'entrer dans les détails.",
        },
        {
          q: "Comment démarre-t-on ?",
          a: "Réservez un appel gratuit ou envoyez un message via le formulaire. Vous recevrez mon avis honnête sur votre projet, une estimation approximative et une prochaine étape claire.",
        },
      ],
    },
  },
} as const;
