/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG: edit this one file to update your details.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  /** Full name, used in titles, schema, footer. */
  name: "Hassan Tahrioui",
  /** Brand shown in the navbar logo (family name works well as a mark). */
  logo: "Tahrioui",
  /** Short role, used in schema and as a fallback. */
  role: "Technical Lead & Senior Full-Stack Engineer",
  /** Default meta title (per-page titles override this). */
  title: "Hassan Tahrioui | Technical Lead & Senior Full-Stack Engineer",
  /** Default meta description. */
  description:
    "Technical lead and senior full-stack engineer, 9+ years in Laravel, Next.js and Node. Leading a multi-brand ticketing platform; founder of Tracefox. Remote, Morocco.",
  /** Production URL (no trailing slash). Also set in astro.config.mjs. */
  url: "https://www.tahrioui.me",
  /** Contact email. */
  email: "tahrioui.hsn@gmail.com",
  /** Where you're based. */
  location: "Morocco · Remote, working with European teams",
  /** Downloadable resume, generated from /resume/ by `npm run resume:pdf`. */
  resumePdf: "/Hassan-Tahrioui-Resume.pdf",
  /** Google Analytics measurement ID. Set to "" to disable. */
  ga: "G-XZ86LZ27VZ",
} as const;

export const CONTACT = {
  /** Calendly booking link for the "Book a call" CTAs. */
  bookingUrl: "https://calendly.com/tahrioui-hsn/30min",
  /** Web3Forms access key (delivers the contact form to your email). */
  web3formsKey: "eeebe9cc-f5bb-4262-8c77-7af020fa87fd",
  /** WhatsApp number, digits only (used for wa.me links). */
  whatsapp: "212687904064",
} as const;

/**
 * Social / profile links. `icon` maps to a name in src/components/Icon.astro.
 * `primary` profiles are shown next to the hero and on the resume; all of
 * them appear in the footer and in the Person schema's sameAs.
 */
export const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tahrioui-hsn/",
    icon: "linkedin",
    primary: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/tahriouihsn",
    icon: "github",
    primary: true,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/tahriouihsn",
    icon: "upwork",
    primary: true,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/tahrioui_hassan",
    icon: "twitter",
    primary: false,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tahrioui.hassan/",
    icon: "instagram",
    primary: false,
  },
] as const;

/** Public sites of products and platforms referenced across the site. */
export const LINKS = {
  tracefox: "https://tracefox.co",
  visitfootball: "https://www.visitfootball.com",
  voetbaltrips: "https://www.voetbaltrips.com",
  voetbaltickets: "https://www.voetbaltickets.nl",
  trustedseats: "https://www.trustedseats.com",
} as const;
