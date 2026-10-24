/**
 * Professional history, shared by the About pages and /resume.
 * Only facts that can be backed up: no invented metrics or team sizes.
 */

type Localized = { en: string; fr: string };

export interface Role {
  company: string;
  /** Brands or products under this role, shown under the company name. */
  detail?: string;
  role: Localized;
  period: Localized;
  /** Internal case study or a live external site. Leave out dead sites. */
  href?: string;
  bullets?: { en: string[]; fr: string[] };
}

export const EXPERIENCE: Role[] = [
  {
    company: "VisitFootball group",
    detail: "VisitFootball · Voetbaltrips · Voetbaltickets.nl · TrustedSeats",
    role: { en: "Lead Full-Stack Developer", fr: "Lead développeur full-stack" },
    period: { en: "2023 – Present", fr: "2023 – aujourd'hui" },
    href: "/projects/visitfootball/",
    bullets: {
      en: [
        "Lead development across four football ticketing and travel brands built on Next.js, Strapi v4, Nuxt, PostgreSQL and Redis.",
        "Own technical direction, the release workflow across development, staging and production, and production troubleshooting.",
        "Review and coordinate other developers' work; work daily with product, operations, design and SEO specialists.",
        "Hands-on across storefronts, checkout and payments, authenticated APIs, multilingual content and order automation.",
      ],
      fr: [
        "Je dirige le développement de quatre marques de billetterie et de voyages football construites avec Next.js, Strapi v4, Nuxt, PostgreSQL et Redis.",
        "Responsable de la direction technique, du workflow de release entre développement, staging et production, et du débogage en production.",
        "Je relis et coordonne le travail des autres développeurs ; je travaille chaque jour avec les spécialistes produit, opérations, design et SEO.",
        "Développement sur les storefronts, le checkout et les paiements, les API authentifiées, le contenu multilingue et l'automatisation des commandes.",
      ],
    },
  },
  {
    company: "Tracefox",
    detail: "tracefox.co",
    role: { en: "Founder & solo developer", fr: "Fondateur et développeur unique" },
    period: { en: "2025 – Present", fr: "2025 – aujourd'hui" },
    href: "/projects/tracefox/",
    bullets: {
      en: [
        "Designed, built and launched a SaaS for automated checkout testing, live with a free plan and three paid tiers.",
        "Next.js and TypeScript, Playwright-driven Chromium runs, scheduled background jobs and a Chrome extension recorder.",
      ],
      fr: [
        "Conception, développement et lancement d'un SaaS de test automatisé des checkouts, en ligne avec une formule gratuite et trois formules payantes.",
        "Next.js et TypeScript, exécutions Chromium pilotées par Playwright, jobs planifiés et extension Chrome d'enregistrement.",
      ],
    },
  },
  {
    company: "Inbetween",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2020 – 2022", fr: "2020 – 2022" },
  },
  {
    company: "e-Coopera",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2019 – 2021", fr: "2019 – 2021" },
  },
  {
    company: "FCPO",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2020", fr: "2020" },
  },
  {
    company: "Audit Action Plus",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2019", fr: "2019" },
  },
];

/** `itemsFr` overrides `items` on French pages where the terms differ. */
export const SKILLS: { group: Localized; items: string[]; itemsFr?: string[] }[] = [
  {
    group: { en: "Backend", fr: "Backend" },
    items: ["PHP", "Laravel", "Node.js", "Express", "Strapi", "REST APIs", "Webhooks", "Background jobs"],
    itemsFr: ["PHP", "Laravel", "Node.js", "Express", "Strapi", "API REST", "Webhooks", "Jobs en arrière-plan"],
  },
  {
    group: { en: "Frontend", fr: "Frontend" },
    items: ["TypeScript", "Next.js", "React", "Vue", "Nuxt", "Inertia.js", "Tailwind CSS"],
  },
  {
    group: { en: "Data & infrastructure", fr: "Données & infrastructure" },
    items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Nginx", "PM2", "DigitalOcean", "Vercel", "Cloudflare"],
  },
  {
    group: { en: "Payments & automation", fr: "Paiements & automatisation" },
    items: ["Mollie", "Stripe", "Playwright", "Puppeteer", "OpenAI", "DeepSeek"],
  },
  {
    group: { en: "Practices", fr: "Pratiques" },
    items: [
      "Architecture",
      "Technical leadership",
      "Code review",
      "Release management",
      "Incident response",
      "Multi-brand platforms",
      "i18n",
      "Technical SEO",
    ],
    itemsFr: [
      "Architecture",
      "Lead technique",
      "Revue de code",
      "Gestion des releases",
      "Gestion d'incidents",
      "Plateformes multi-marques",
      "i18n",
      "SEO technique",
    ],
  },
];
