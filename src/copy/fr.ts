import type { Copy } from "./en";

/** French UI copy. Typed against the English object: every key is required. */
export const fr: Copy = {
  skip: "Aller au contenu",
  langSwitch: { label: "EN", aria: "English version" },
  nav: [
    { label: "Projets", href: "/fr/projects/" },
    { label: "Services", href: "/fr/services/" },
    { label: "À propos", href: "/fr/about/" },
  ],
  navCta: "Contact",
  navResume: "CV",
  contactHref: "/fr/contact/",
  resumeHref: "/resume/",

  meta: {
    home: {
      title: "Lead technique et développeur full-stack senior",
      description:
        "Lead technique et développeur full-stack senior, 9+ ans en Laravel, Next.js et Node. Je dirige une plateforme de billetterie multi-marques. À distance, Maroc.",
    },
    services: {
      title: "Consultant Laravel & Next.js, lead technique freelance",
      description:
        "Consultant senior Laravel et Next.js pour fondateurs SaaS et agences : audit d'architecture, paiements, stabilisation de la production, lead technique.",
    },
    about: {
      title: "À propos : lead technique et développeur full-stack senior",
      description:
        "Hassan Tahrioui, lead technique et développeur full-stack senior basé au Maroc : 9+ ans de plateformes commerciales en Laravel, Next.js et Node.",
    },
    contact: {
      title: "Contact : missions de conseil et postes seniors",
      description:
        "Contactez Hassan Tahrioui pour une mission de conseil ou un poste d'ingénieur senior ou lead. Réservez un appel de 30 minutes ou envoyez un message.",
    },
    projects: {
      title: "Projets et études de cas",
      description:
        "Études de cas : une plateforme de billetterie multi-marques, Tracefox (SaaS de test de checkout) et d'autres, avec le rôle, les choix et les compromis.",
    },
  },

  hero: {
    eyebrow: "Lead technique · Développeur full-stack senior",
    h1: "Je dirige et je construis des plateformes web critiques pour le chiffre d'affaires, de l'architecture à la production.",
    leadHtml: `Je suis Hassan Tahrioui. Depuis plus de 9 ans, je construis et j'exploite des logiciels commerciaux avec <span class="text-head_text">Laravel, Next.js et Node</span>. Aujourd'hui, je dirige le développement d'un groupe de marques de billetterie et de voyages football : plateformes partagées, checkout et paiements, SEO multilingue, intégrations et l'infrastructure qui fait tourner l'ensemble. Je prends les décisions techniques, je coordonne les développeurs et je reste dans le code.`,
    ctaPrimary: "Réserver un appel",
    ctaSecondary: "Lire les études de cas",
    platforms: "Plateformes que je dirige ou que j'ai construites",
    glance: {
      heading: "En bref",
      rows: [
        { label: "Actuellement", value: "Lead développeur full-stack", sub: "Groupe VisitFootball · depuis 2021" },
        { label: "Aussi", value: "Fondateur et développeur unique", sub: "Tracefox · depuis 2025" },
        { label: "Expérience", value: "9+ ans", sub: "Laravel, Next.js, Node, PostgreSQL" },
        { label: "Basé au", value: "Maroc, à distance", sub: "Avec des équipes européennes (CET)" },
      ],
      resume: "Voir le CV (EN)",
      pdf: "Télécharger le PDF",
    },
  },

  ownership: {
    heading: "Ce dont je prends la responsabilité",
    sub: "Les parties d'un produit où une erreur coûte de l'argent ou de la confiance. C'est mon travail de chaque semaine, pas une liste de technologies.",
    items: [
      {
        icon: "layers",
        title: "Architecture et direction technique",
        body: "Modèles de données, découpage des services et les compromis qui vont avec : plateformes multi-marques partagées, contenu multilingue, et des décisions avec lesquelles une équipe peut encore vivre dans deux ans.",
      },
      {
        icon: "cart",
        title: "Checkout, paiements et intégrations",
        body: "Des parcours critiques pour le chiffre d'affaires, construits pour être justes : prestataires de paiement et webhooks, API partenaires, workflows de commande et l'automatisation autour.",
      },
      {
        icon: "server",
        title: "Production et infrastructure",
        body: "Déploiements, PostgreSQL et Redis, Nginx, Cloudflare et jobs en arrière-plan. Quand la production casse, je trouve pourquoi et je corrige.",
      },
      {
        icon: "users",
        title: "Équipe et livraison",
        body: "Le workflow de release du développement au staging puis à la production, la revue de code, la coordination des développeurs, et la traduction des besoins produit, opérations et SEO en logiciel livré.",
      },
    ],
  },

  experience: {
    heading: "Parcours",
    sub: "Plus de 9 ans à construire des logiciels commerciaux ; depuis 2021, je dirige le développement de plateformes en production.",
    earlier: "Avant",
    earlierRole: "Développeur full-stack chez",
    cta: "CV complet (EN)",
    pdf: "Télécharger le PDF",
    secondary: "En savoir plus",
  },

  work: {
    heading: "Projets choisis",
    sub: "Une plateforme commerciale en production, mon propre SaaS et une plateforme d'emploi à deux faces. Chaque étude de cas présente le problème, mon rôle, les choix et les compromis.",
    all: "Tous les projets",
  },

  paths: {
    heading: "Comment travailler ensemble",
    employer: {
      kicker: "Pour les responsables techniques",
      title: "Vous recrutez un ingénieur senior ou lead",
      body: "Je suis ouvert au bon poste sur le long terme dans une équipe produit remote-first : développeur full-stack senior, lead technique ou founding engineer. Je suis basé au Maroc, je travaille sur les horaires européens, avec un recouvrement pour les équipes de la côte Est américaine.",
      cta: "Voir le CV",
      secondary: "Parcours",
      secondaryHref: "/fr/about/#experience",
    },
    client: {
      kicker: "Pour les fondateurs et les agences",
      title: "Besoin d'un partenaire technique pour votre produit",
      body: "Pour les fondateurs SaaS, les éditeurs et les agences qui font tourner des applications Laravel ou Next.js sérieuses : audits d'architecture, paiements et intégrations, stabilisation de la production ou lead technique dans la durée.",
      cta: "Voir les services",
      secondary: "Réserver un appel",
    },
  },

  reviews: {
    heading: "Retours clients",
    subBefore: "Avis (en anglais) de missions freelance antérieures sur mon",
    subLink: "profil Upwork",
    subAfter: ", où j'affiche un Job Success Score de 100 %.",
  },

  readCaseStudy: "Lire l'étude de cas",
  visit: "Visiter",

  stage: {
    live: "En production",
    "in-development": "En développement",
    prototype: "Prototype",
    offline: "Plus en ligne",
  },

  cta: {
    heading: "Parlons de ce que vous construisez",
    sub: "Une plateforme qui a besoin d'un lead technique, un code à stabiliser ou un poste dans votre équipe : un appel de 30 minutes est le moyen le plus rapide de savoir si je suis la bonne personne.",
    book: "Réserver un appel de 30 min",
    message: "Envoyer un message",
  },

  footer: {
    blurb: "Lead technique et développeur full-stack senior. Je conçois, construis et exploite des plateformes web commerciales.",
    talk: "Me contacter.",
    navigate: "Naviguer",
    contact: "Contact",
    resume: "CV (EN)",
    getInTouch: "Me contacter",
    book: "Réserver un appel",
    whatsapp: "WhatsApp",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    location: "Maroc · À distance, avec des équipes européennes",
  },

  form: {
    name: "Nom",
    namePh: "Votre nom",
    email: "Email",
    emailPh: "vous@entreprise.com",
    topic: "C'est à quel sujet ?",
    topics: ["Une mission de conseil", "Un poste à temps plein ou de long terme", "Autre chose"],
    details: "Détails",
    detailsPh: "Que construisez-vous ou pour quel poste recrutez-vous ? Le calendrier, la taille de l'équipe et une fourchette de budget m'aident à vous répondre utilement.",
    send: "Envoyer le message",
    sending: "Envoi en cours…",
    ok: "Merci, je vous réponds très vite.",
    okTitle: "Message envoyé",
    okBody: "Merci. Je lis chaque message moi-même et je vous répondrai par email. Si c'est urgent, vous pouvez aussi réserver un appel dès maintenant.",
    fail: "Une erreur est survenue. Écrivez-moi directement par email.",
    network: "Erreur réseau. Écrivez-moi directement par email.",
  },

  servicesPage: {
    h1: "Ingénierie senior et lead technique pour les produits qui doivent fonctionner",
    intro:
      "J'accompagne des fondateurs SaaS, des éditeurs et des agences dont l'application Laravel ou Next.js est devenue assez importante pour que chaque erreur coûte cher. Vous avez un seul ingénieur senior qui tranche sur l'architecture, écrit le code et en répond en production.",
    servicesHeading: "Là où je peux aider",
    proof: "Étude de cas liée",
    engagements: {
      heading: "Formats de collaboration",
      sub: "Chaque mission commence par un court appel. Le prix est établi pour chaque mission, une fois le périmètre clair.",
      items: [
        {
          title: "Audit technique",
          body: "Un examen à périmètre fixe de votre code, de votre infrastructure ou de votre architecture, qui aboutit à un plan écrit et priorisé. Une première étape raisonnable avant un engagement plus important.",
        },
        {
          title: "Projet cadré",
          body: "Un développement, une intégration ou une migration avec un périmètre et un plan convenus : un nouveau produit, une intégration de paiement, une refonte de plateforme.",
        },
        {
          title: "Lead technique dans la durée",
          body: "Une capacité mensuelle réservée pour les décisions d'architecture, la revue de code, les releases et le développement. Adapté aux produits en production qui évoluent en continu.",
        },
      ],
    },
    process: {
      heading: "Ce qui se passe après votre prise de contact",
      steps: [
        {
          title: "Appel de découverte",
          body: "30 minutes sur ce que vous construisez, ce qui ne fonctionne pas et vos contraintes. Si je ne suis pas la bonne personne, je vous le dis.",
        },
        {
          title: "Proposition écrite",
          body: "Périmètre, approche, risques et coût par écrit, pour que vous puissiez comparer et partager avec votre équipe.",
        },
        {
          title: "Un travail transparent",
          body: "Des points d'avancement réguliers, le code dans vos dépôts et l'infrastructure sur vos comptes dès le premier jour.",
        },
        {
          title: "Passation ou suivi",
          body: "Documentation et passation propre à la fin, ou un forfait mensuel si vous souhaitez que je reste impliqué.",
        },
      ],
    },
    why: {
      heading: "Pourquoi on fait appel à moi",
      items: [
        "Je dirige le développement d'une plateforme commerciale multi-marques en production, avec de vrais paiements, de vrais clients et un SEO qui pèse sur le chiffre d'affaires.",
        "J'assume la responsabilité de la production : serveurs, bases de données, files d'attente et incidents compris.",
        "J'allie ingénierie et jugement produit : UX, conversion, SEO et opérations.",
        "Je coordonne des développeurs et je travaille chaque jour avec des interlocuteurs non techniques.",
        "J'ai construit et lancé mon propre SaaS : je connais les compromis côté fondateur.",
        "Je travaille sur toute la stack : les problèmes ne se perdent pas entre frontend, backend et ops.",
      ],
    },
    ctaHeading: "Cadrons votre projet",
    ctaSub: "Dites-moi ce que vous construisez et ce qui bloque. Un appel de 30 minutes est le moyen le plus rapide de savoir si je suis la bonne personne, et à quoi ressemblerait une première étape.",
  },

  contactPage: {
    h1: "Parlons-en",
    intro:
      "Parlez-moi de votre produit, de votre équipe ou du poste. Je lis chaque message moi-même et je réponds avec une prochaine étape claire.",
    book: "Réserver un appel de 30 min",
    whatsapp: "Écrivez-moi sur WhatsApp",
    availability: "Disponibilité",
    availabilityBody: [
      "Basé au Maroc, je travaille à distance avec des équipes européennes. Recouvrement possible avec les matinées de la côte Est américaine.",
      "Je prends un petit nombre de missions de conseil à la fois.",
    ],
    elsewhere: "Ailleurs",
  },

  faq: {
    heading: "Questions fréquentes",
    items: [
      {
        q: "Êtes-vous ouvert à un poste à temps plein ?",
        a: "Oui, pour le bon poste sur le long terme dans une équipe remote-first. Mon CV et mes études de cas donnent l'aperçu le plus rapide. Écrivez-moi ou réservez un appel pour en parler.",
      },
      {
        q: "Quelle est votre disponibilité pour du conseil ?",
        a: "Je prends peu de missions à la fois pour donner à chacune une vraie attention. Je peux généralement démarrer sous une à deux semaines, plus vite pour les petites missions.",
      },
      {
        q: "Travaillez-vous dans mon fuseau horaire ?",
        a: "Je suis basé au Maroc et je travaille sur les horaires européens (CET). Un recouvrement avec les matinées de la côte Est américaine fonctionne bien aussi.",
      },
      {
        q: "Comment fixez-vous vos prix ?",
        a: "Par mission, après un court appel de cadrage. Les audits et les projets sont chiffrés selon le périmètre ; le lead technique dans la durée est un forfait mensuel.",
      },
      {
        q: "Pouvez-vous reprendre un projet existant ?",
        a: "Oui. Une grande partie de mon travail consiste à stabiliser et faire évoluer des plateformes démarrées par d'autres équipes, y compris le débogage en production.",
      },
      {
        q: "À qui appartient le code ?",
        a: "À vous. Le code, les dépôts, les serveurs et les comptes sont créés à votre nom ou vous sont transférés en fin de mission, avec la documentation.",
      },
      {
        q: "Signez-vous des NDA ?",
        a: "Oui, avec plaisir, avant même d'entrer dans les détails.",
      },
      {
        q: "Comment démarre-t-on ?",
        a: "Réservez un appel ou envoyez un message via le formulaire. Vous recevrez mon avis honnête sur votre projet, une estimation approximative et une prochaine étape claire.",
      },
    ],
  },

  aboutPage: {
    h1: "À propos",
    introHtml: [
      `Je suis Hassan Tahrioui, <span class="text-head_text">lead technique et développeur full-stack senior</span> basé au Maroc. Depuis plus de 9 ans, je construis des logiciels web commerciaux, et le travail que je préfère se situe là où les décisions techniques ont des conséquences business : checkouts, intégrations, plateformes multilingues et l'infrastructure en dessous.`,
      `Depuis 2021, je dirige le développement d'un groupe de marques de billetterie et de voyages football, dont VisitFootball, Voetbaltrips, Voetbaltickets.nl et TrustedSeats. Je gère le workflow de release, je relis et coordonne le travail des autres développeurs, et je travaille chaque jour avec les équipes produit, opérations, design et SEO pour transformer des besoins commerciaux en logiciel. Je reste dans le code et dans le débogage en production.`,
      `En 2025, j'ai lancé <a href="/fr/projects/tracefox/" class="text-link border-b-2 border-link_border hover:text-link_text_hover">Tracefox</a>, mon propre SaaS de test automatisé des checkouts. Je l'ai construit seul, du positionnement et de la tarification jusqu'au moteur d'automatisation de navigateur, et il est en ligne avec des formules gratuite et payantes. Gérer mon propre produit m'oblige à rester lucide sur les compromis : chaque heure d'ingénierie doit se justifier.`,
      `Auparavant, j'ai travaillé comme développeur full-stack pour des entreprises et des clients freelance, sur des plateformes d'emploi, des systèmes de réservation, des sites de petites annonces et d'e-commerce, avec Laravel, Vue et Nuxt.`,
    ],
    principlesHeading: "Ma façon de travailler",
    principles: [
      "Partir du résultat business, puis choisir l'architecture la plus simple qui le sert.",
      "Traiter les paiements, les données et la production comme des choses qu'on ne corrige pas plus tard.",
      "Rendre les compromis explicites, pour que l'équipe puisse les voir et les contester.",
      "Laisser des systèmes plus simples à exploiter que je ne les ai trouvés.",
    ],
    experienceHeading: "Parcours",
    skillsHeading: "Compétences",
    languagesHeading: "Langues",
    languages: "Arabe (langue maternelle), anglais (courant), français (courant).",
    resumeCta: "Voir le CV (en anglais)",
    resumePdf: "Télécharger le PDF",
  },

  projectsPage: {
    h1: "Projets",
    intro:
      "Des plateformes et des produits que j'ai dirigés ou construits, d'un groupe de billetterie multi-marques à mon propre SaaS. Les étiquettes indiquent ce qui est en production, en développement ou plus en ligne.",
    caseStudiesHeading: "Études de cas",
    caseStudiesSub: "Des analyses détaillées : le contexte, mon rôle exact, l'architecture et les compromis.",
    moreHeading: "Autres projets",
    moreSub: "Des produits plus modestes, des développements pour des clients et des expérimentations.",
    earlierHeading: "Projets antérieurs",
    earlierSub: "Des projets sur lesquels j'ai travaillé et qui ne sont plus en ligne ou plus maintenus.",
  },

  caseStudy: {
    back: "Tous les projets",
    prev: "Étude de cas précédente",
    next: "Étude de cas suivante",
    role: "Rôle",
    period: "Période",
    client: "Client",
    status: "Statut",
    stack: "Stack",
    scope: "Périmètre",
    source: "Code source",
    glance: { problem: "Le problème", role: "Mon rôle", outcome: "Résultat" },
    onThisPage: "Sur cette page",
    facts: "Fiche projet",
    ctaHeading: "Un problème similaire ?",
    ctaSub: "Si votre plateforme a des rouages comparables, ou si votre équipe a besoin de quelqu'un qui en a déjà fait tourner une, parlons-en.",
    imageAlt: "Capture d'écran de",
  },

  notFound: {
    title: "Page introuvable",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
    work: "Voir mes projets",
  },
};
