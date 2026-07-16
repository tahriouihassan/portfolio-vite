/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG: edit this one file to update your details.
 * ─────────────────────────────────────────────────────────────
 *  Anything marked TODO should be replaced with your real value
 *  before going live.
 */

export const SITE = {
  /** Full name, used in titles, schema, footer. */
  name: "Hassan Tahrioui",
  /** Brand shown in the navbar logo (family name works well as a mark). */
  logo: "Tahrioui",
  /** Short tagline / role. */
  role: "Lead Full-Stack Developer",
  /** Default meta title (per-page titles override this). */
  title: "Hassan Tahrioui | Lead Full-Stack Developer",
  /** Default meta description. */
  description:
    "I design, build, and run commercial web platforms end-to-end: Next.js, Strapi, Laravel, payments, and the infrastructure behind them. Available for freelance projects.",
  /** Production URL (no trailing slash). Also set in astro.config.mjs. */
  url: "https://tahrioui.me",
  /** Contact email. */
  email: "tahrioui.hsn@gmail.com",
  /** Where you're based. */
  location: "Morocco · Remote (aligned with EU hours)",
  /** Google Analytics measurement ID. Set to "" to disable. */
  ga: "G-XZ86LZ27VZ",
} as const;

export const CONTACT = {
  /** Calendly booking link for the "Book a call" CTAs. */
  bookingUrl: "https://calendly.com/tahrioui-hsn/30min",
  /** Web3Forms access key (delivers the contact form to your email). */
  web3formsKey: "eeebe9cc-f5bb-4262-8c77-7af020fa87fd",
} as const;

/** Social / profile links. `icon` maps to a name in src/components/Icon.astro. */
export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/tahriouihsn",
    icon: "github",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/tahriouihsn",
    icon: "upwork",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tahrioui-hsn/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tahrioui_hassan",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tahrioui.hassan/",
    icon: "instagram",
  },
] as const;

/** Primary nav links. */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
] as const;
