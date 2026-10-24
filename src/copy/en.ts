/**
 * English UI copy. French (fr.ts) is typed against this object, so every key
 * added here must be translated there too.
 *
 * Strings ending in `Html` are rendered with set:html: keep them to inline
 * markup only (spans, links), never user input.
 */

export const en = {
  skip: "Skip to content",
  langSwitch: { label: "FR", aria: "Version française" },
  nav: [
    { label: "Work", href: "/projects/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
  ],
  navCta: "Contact",
  navResume: "Resume",
  contactHref: "/contact/",
  resumeHref: "/resume/",

  meta: {
    home: {
      title: "",
      description:
        "Technical lead and senior full-stack engineer, 9+ years in Laravel, Next.js and Node. Leading a multi-brand ticketing platform; founder of Tracefox. Remote, Morocco.",
    },
    services: {
      title: "Laravel & Next.js Consulting and Technical Leadership",
      description:
        "Senior Laravel and Next.js consulting for SaaS founders and agencies: architecture reviews, payments, production stabilization and fractional technical leadership.",
    },
    about: {
      title: "About: Technical Lead & Senior Full-Stack Engineer",
      description:
        "Hassan Tahrioui: Morocco-based technical lead and senior full-stack engineer, 9+ years building commercial platforms in Laravel, Next.js and Node.",
    },
    contact: {
      title: "Contact: Consulting Projects and Senior Roles",
      description:
        "Get in touch with Hassan Tahrioui about a consulting engagement or a senior or lead engineering role. Book a 30-minute call or send a message.",
    },
    projects: {
      title: "Work and Case Studies",
      description:
        "Case studies: a multi-brand ticketing and travel platform, Tracefox (a checkout-testing SaaS) and more, with the role, decisions and trade-offs behind each.",
    },
  },

  hero: {
    eyebrow: "Technical Lead · Senior Full-Stack Engineer",
    h1: "I lead and build revenue-critical web platforms, from architecture to production.",
    leadHtml: `I'm Hassan Tahrioui. For 9+ years I've built and run commercial software on <span class="text-head_text">Laravel, Next.js and Node</span>. Today I lead development for a group of football ticketing and travel brands: shared platforms, checkout and payments, multilingual SEO, integrations and the infrastructure they run on. I make the technical calls, coordinate the developers and stay hands-on in the code.`,
    ctaPrimary: "Book an intro call",
    ctaSecondary: "Read the case studies",
    platforms: "Platforms I lead or built",
    glance: {
      heading: "At a glance",
      rows: [
        { label: "Now", value: "Lead Full-Stack Developer", sub: "VisitFootball group · since 2021" },
        { label: "Also", value: "Founder & solo developer", sub: "Tracefox · since 2025" },
        { label: "Experience", value: "9+ years", sub: "Laravel, Next.js, Node, PostgreSQL" },
        { label: "Based in", value: "Morocco, remote", sub: "Works with European teams (CET)" },
      ],
      resume: "View resume",
    },
  },

  ownership: {
    heading: "What I take ownership of",
    sub: "The parts of a product where mistakes cost money or trust. This is the work I do every week, not a list of technologies.",
    items: [
      {
        icon: "layers",
        title: "Architecture and technical direction",
        body: "Data models, service boundaries and the trade-offs behind them: shared multi-brand platforms, multilingual content, and decisions a team can still live with in two years.",
      },
      {
        icon: "cart",
        title: "Checkout, payments and integrations",
        body: "Revenue-critical flows built for correctness: payment providers and webhooks, partner APIs, order workflows and the automation around them.",
      },
      {
        icon: "server",
        title: "Production and infrastructure",
        body: "Deployments, PostgreSQL and Redis, Nginx, Cloudflare and background jobs. When production breaks, I find out why and fix it.",
      },
      {
        icon: "users",
        title: "Team and delivery",
        body: "The release workflow from development to staging to production, code review, coordinating developers, and turning requirements from product, operations and SEO into shipped software.",
      },
    ],
  },

  experience: {
    heading: "Experience",
    sub: "9+ years building commercial software; since 2021, leading development on live production platforms.",
    earlier: "Earlier",
    earlierRole: "Full-Stack Developer at",
    cta: "Full resume",
    secondary: "More about me",
  },

  work: {
    heading: "Selected work",
    sub: "A live commercial platform, my own SaaS and a two-sided job platform. Each case study covers the problem, my role, the decisions and the trade-offs.",
    all: "All projects",
  },

  paths: {
    heading: "How we could work together",
    employer: {
      kicker: "For engineering leaders",
      title: "Hiring a senior or lead engineer",
      body: "I'm open to the right long-term role with a remote-first product team: Senior Full-Stack Engineer, Technical Lead or founding engineer. I'm based in Morocco and work European hours, with overlap for US East Coast teams.",
      cta: "View resume",
      secondary: "Experience",
      secondaryHref: "/about/#experience",
    },
    client: {
      kicker: "For founders and agencies",
      title: "Need a technical partner for your product",
      body: "For SaaS founders, product companies and agencies running serious Laravel or Next.js applications: architecture reviews, payments and integrations, stabilizing production, or ongoing technical leadership.",
      cta: "See services",
      secondary: "Book a call",
    },
  },

  reviews: {
    heading: "Client feedback",
    subBefore: "Reviews from earlier freelance projects on my",
    subLink: "Upwork profile",
    subAfter: ", where I hold a 100% Job Success Score.",
  },

  readCaseStudy: "Read case study",
  visit: "Visit",

  stage: {
    live: "Live",
    "in-development": "In development",
    prototype: "Prototype",
    offline: "No longer online",
  },

  cta: {
    heading: "Let's talk about what you're building",
    sub: "Whether it's a platform that needs a technical lead, a codebase that needs stabilizing, or a role on your team, a 30-minute call is the quickest way to find out if I'm the right fit.",
    book: "Book a 30-min call",
    message: "Send a message",
  },

  footer: {
    blurb: "Technical lead and senior full-stack engineer. I design, build and run commercial web platforms.",
    talk: "Get in touch.",
    navigate: "Navigate",
    contact: "Contact",
    resume: "Resume",
    getInTouch: "Get in touch",
    book: "Book a call",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    location: "Morocco · Remote, working with European teams",
  },

  form: {
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    topic: "What's this about?",
    topics: ["A consulting project", "A full-time or long-term role", "Something else"],
    details: "Details",
    detailsPh: "What are you building or hiring for? Timeline, team size and budget range help me give you a useful answer.",
    send: "Send message",
    sending: "Sending…",
    ok: "Thanks, I'll get back to you shortly.",
    okTitle: "Message sent",
    okBody: "Thanks. I read every message myself and will reply by email. If it's time-sensitive, you can also book a call now.",
    fail: "Something went wrong. Please email me directly.",
    network: "Network error. Please email me directly.",
  },

  servicesPage: {
    h1: "Senior engineering and technical leadership for products that have to work",
    intro:
      "I work with SaaS founders, product companies and agencies whose Laravel or Next.js application has become important enough that mistakes are expensive. You get one senior engineer who can make the architecture call, write the code and own it in production.",
    servicesHeading: "Where I can help",
    proof: "Related case study",
    engagements: {
      heading: "Ways to engage",
      sub: "Every engagement starts with a short call. Pricing is quoted per engagement once the scope is clear.",
      items: [
        {
          title: "Technical review",
          body: "A fixed-scope look at your codebase, infrastructure or architecture, ending in a written, prioritized plan. A sensible first step before a bigger commitment.",
        },
        {
          title: "Scoped project",
          body: "A defined build, integration or migration with an agreed scope and plan: a new product, a payments integration, a platform rebuild.",
        },
        {
          title: "Ongoing technical leadership",
          body: "Reserved monthly capacity for architecture decisions, code review, releases and hands-on work. Suited to live products that keep evolving.",
        },
      ],
    },
    process: {
      heading: "What happens after you get in touch",
      steps: [
        {
          title: "Intro call",
          body: "30 minutes on what you're building, what isn't working and the constraints you have. If I'm not the right fit, I'll tell you.",
        },
        {
          title: "Written proposal",
          body: "Scope, approach, risks and cost in writing, so you can compare it and share it with your team.",
        },
        {
          title: "Work in the open",
          body: "Regular progress updates, with code in your repositories and infrastructure in your accounts from day one.",
        },
        {
          title: "Handover or ongoing support",
          body: "Documentation and a clean handover at the end, or a retainer if you want me to stay involved.",
        },
      ],
    },
    why: {
      heading: "Why clients bring me in",
      items: [
        "I lead development on a live, multi-brand commercial platform with real payments, real customers and SEO that affects revenue.",
        "I take production responsibility: servers, databases, queues and incidents included.",
        "I combine engineering with product judgement: UX, conversion, SEO and operations.",
        "I coordinate developers and work daily with non-technical stakeholders.",
        "I built and launched my own SaaS, so I know the founder's side of the trade-offs.",
        "I work across the stack, so problems don't get passed between a frontend, a backend and an ops person.",
      ],
    },
    ctaHeading: "Let's scope your project",
    ctaSub: "Tell me what you're building and what's in the way. A 30-minute call is the quickest way to find out whether I'm the right fit, and what a first step would look like.",
  },

  contactPage: {
    h1: "Let's talk",
    intro:
      "Tell me about your product, your team or the role. I read every message myself and reply with a clear next step.",
    book: "Book a 30-min call",
    whatsapp: "Message me on WhatsApp",
    availability: "Availability",
    availabilityBody: [
      "Based in Morocco, working remotely with European teams. Overlap with US East Coast mornings.",
      "I take on a small number of consulting engagements at a time.",
    ],
    elsewhere: "Elsewhere",
  },

  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Are you open to full-time roles?",
        a: "Yes, for the right long-term role with a remote-first team. My resume and case studies are the quickest overview. Email me or book a call to talk.",
      },
      {
        q: "What's your availability for consulting?",
        a: "I take on a small number of engagements at a time so each one gets real attention. I can usually start within one to two weeks, sooner for small engagements.",
      },
      {
        q: "Do you work in my timezone?",
        a: "I'm based in Morocco and work aligned with European hours (CET). Overlap with US East Coast mornings works well too.",
      },
      {
        q: "How do you price work?",
        a: "Per engagement, after a short scoping call. Technical reviews and projects are quoted on scope; ongoing technical leadership is a monthly retainer.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. A big part of my work is stabilizing and extending platforms other teams started, including production troubleshooting.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Code, repositories, servers and accounts are set up in your name or transferred to you at the end, with documentation.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, happy to sign your NDA before we discuss any details.",
      },
      {
        q: "How do we start?",
        a: "Book an intro call or send a message through the form. You'll get my honest take on your project, a rough estimate and a clear next step.",
      },
    ],
  },

  aboutPage: {
    h1: "About",
    introHtml: [
      `I'm Hassan Tahrioui, a <span class="text-head_text">technical lead and senior full-stack engineer</span> based in Morocco. I've spent 9+ years building commercial web software, and the work I enjoy most sits where engineering decisions meet business consequences: checkouts, integrations, multilingual platforms and the infrastructure under them.`,
      `Since 2021 I've led development for a group of football ticketing and travel brands, including VisitFootball, Voetbaltrips, Voetbaltickets.nl and TrustedSeats. I manage the release workflow, review and coordinate other developers' work, and work daily with product, operations, design and SEO specialists to turn commercial requirements into software. I stay hands-on in the code and in production troubleshooting.`,
      `In 2025 I started <a href="/projects/tracefox/" class="text-link border-b-2 border-link_border hover:text-link_text_hover">Tracefox</a>, my own SaaS for automated checkout testing. I built it alone, from positioning and pricing to the browser-automation engine, and it's live with free and paid plans. Running my own product keeps me honest about trade-offs: every hour of engineering has to earn its place.`,
      `Before that I worked as a full-stack developer for companies and freelance clients, building job platforms, booking systems, classifieds and e-commerce sites with Laravel, Vue and Nuxt.`,
    ],
    principlesHeading: "How I work",
    principles: [
      "Start from the business outcome, then choose the simplest architecture that serves it.",
      "Treat payments, data and production as things you can't fix later.",
      "Make trade-offs explicit, so the team can see them and disagree with them.",
      "Leave systems easier to run than I found them.",
    ],
    experienceHeading: "Experience",
    skillsHeading: "Skills",
    languagesHeading: "Languages",
    languages: "Arabic (native), English (fluent), French (fluent).",
    resumeCta: "View the one-page resume",
  },

  projectsPage: {
    h1: "Work",
    intro:
      "Platforms and products I've led or built, from a multi-brand ticketing group to my own SaaS. Status labels show what's live, in development or no longer online.",
    caseStudiesHeading: "Case studies",
    caseStudiesSub: "Long-form write-ups with the context, my exact role, the architecture and the trade-offs.",
    moreHeading: "More work",
    moreSub: "Smaller products, client builds and experiments.",
    earlierHeading: "Earlier projects",
    earlierSub: "Projects I worked on that are no longer online or maintained.",
  },

  caseStudy: {
    back: "All work",
    prev: "Previous case study",
    next: "Next case study",
    role: "Role",
    period: "Period",
    client: "Client",
    status: "Status",
    stack: "Stack",
    scope: "Scope",
    source: "Source",
    glance: { problem: "The problem", role: "My role", outcome: "Outcome" },
    onThisPage: "On this page",
    facts: "Project facts",
    ctaHeading: "Facing a similar problem?",
    ctaSub: "If your platform has similar moving parts, or your team needs someone who has run one, let's talk.",
    imageAlt: "Screenshot of",
  },

  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    home: "Go home",
    work: "See my work",
  },
};

export type Copy = typeof en;
