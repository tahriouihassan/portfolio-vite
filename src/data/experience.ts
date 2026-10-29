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
  /** A few words on what the job was, for the homepage's one-line "Earlier" summary. */
  summary?: Localized;
  bullets?: { en: string[]; fr: string[] };
}

export const EXPERIENCE: Role[] = [
  {
    company: "VisitFootball group",
    detail: "VisitFootball · Voetbaltrips · Voetbaltickets.nl · TrustedSeats",
    role: { en: "Lead Full-Stack Developer", fr: "Lead développeur full-stack" },
    period: { en: "2021 – Present", fr: "2021 – aujourd'hui" },
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
    detail: "OpenMatch",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2020 – 2022", fr: "2020 – 2022" },
    href: "/projects/openmatch/",
    summary: { en: "OpenMatch job platform", fr: "plateforme d'emploi OpenMatch" },
    bullets: {
      en: [
        "Built OpenMatch, a two-sided job platform with AI-assisted resume building, job matching, recruiter tools and Stripe subscriptions, using Nuxt and Vue.",
      ],
      fr: [
        "Développement d'OpenMatch, une plateforme d'emploi à deux faces avec création de CV assistée par IA, matching d'offres, outils recruteurs et abonnements Stripe, avec Nuxt et Vue.",
      ],
    },
  },
  {
    company: "e-Coopera",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2019 – 2021", fr: "2019 – 2021" },
    summary: { en: "e-commerce", fr: "e-commerce" },
    bullets: {
      en: ["Built the company's e-commerce website from scratch with Laravel and Nuxt, handling both backend and storefront."],
      fr: ["Développement complet du site e-commerce de l'entreprise avec Laravel et Nuxt, du backend à la boutique en ligne."],
    },
  },
  {
    company: "FCPO",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2020", fr: "2020" },
    summary: { en: "agency client websites", fr: "sites clients d'agence" },
    bullets: {
      en: ["Built multiple client websites from scratch for this web development agency, handling frontend and backend on each."],
      fr: ["Développement de plusieurs sites clients pour cette agence web, de zéro, en prenant en charge le frontend et le backend de chacun."],
    },
  },
  {
    company: "Audit Action Plus",
    role: { en: "Full-Stack Developer", fr: "Développeur full-stack" },
    period: { en: "2019", fr: "2019" },
    summary: { en: "ERP", fr: "ERP" },
    bullets: {
      en: ["Built an ERP for the company from scratch, handling both frontend and backend."],
      fr: ["Développement d'un ERP pour l'entreprise, de zéro, en prenant en charge le frontend et le backend."],
    },
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
