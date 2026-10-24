---
title: "VisitFootball"
seoTitle: "VisitFootball Case Study: Multi-Brand Ticketing Platform"
description: "Leading development for four football ticketing and travel brands: shared Next.js and Strapi platforms, payments, multilingual SEO and production."
tech: ["Next.js", "TypeScript", "Strapi v4", "PostgreSQL", "Redis", "Nuxt", "Cloudflare", "Nginx", "DigitalOcean", "Vercel"]
image: "../../assets/featured/visitfootball.png"
imageAlt: "VisitFootball on mobile: the homepage with match search, and the order summary for a trip with flights and hotel"
link: "https://www.visitfootball.com"
featured: true
status: "active"
stage: "live"
order: 1
role: "Lead Full-Stack Developer"
year: "2023 – present"
client: "Football ticketing & travel group"
outcome: "Leading development across four ticketing and travel brands, with shared platforms, live payments and production I'm responsible for."
fr:
  description: "Lead developer d'un groupe de marques de billetterie et de voyages football : plateformes Next.js et Strapi partagées, checkout et paiements, SEO multilingue, automatisation et infrastructure de production."
  outcome: "Je dirige le développement de quatre marques de billetterie et de voyages : plateformes partagées, paiements réels et une production dont je suis responsable."
  role: "Lead développeur full-stack"
  year: "2023 – aujourd'hui"
  imageAlt: "VisitFootball sur mobile : la page d'accueil avec la recherche de matchs, et le récapitulatif de commande d'un voyage avec vols et hôtel"
---

## Context

VisitFootball sells official match tickets and complete football trips (tickets, flights and hotels) to fans travelling to matches across Europe. The business has organized football trips since 2011 and runs several brands:

- **[VisitFootball](https://www.visitfootball.com)** for an international, English-speaking audience.
- **[Voetbaltrips](https://www.voetbaltrips.com)** for the Dutch market. It shares its Next.js codebase with VisitFootball.
- **[Voetbaltickets.nl](https://www.voetbaltickets.nl)**, a Dutch ticket shop built on its own Next.js frontend.
- **[TrustedSeats](https://www.trustedseats.com)**, a multi-sport ticket marketplace built with Nuxt and Strapi and localized for seven European markets.

I joined in 2023 and lead development across these platforms. They are built by a team, and parts of them predate me. This case study describes my role, not a system I built alone.

## The problem

Selling tickets and trips online is less forgiving than it looks:

- **Everything moves.** Availability and prices change constantly, and leagues often confirm fixture dates late. Pages, orders and emails all have to cope with a match whose kickoff time is still unknown.
- **Every order matters.** Orders are high-value and time-bound. A fan who has paid needs the right tickets, seated together as promised, before the match. There's no "we'll fix it next sprint".
- **Search is a revenue channel.** Organic search brings in customers across several brands and languages, so URL structure, rendering and page speed are commercial decisions, not just technical ones.
- **Several brands, one team.** The brands need to share as much as possible without turning into one tangled codebase that nobody dares to change.

## My role

As lead developer I own the technical side end to end, and I stay hands-on:

- **Technical direction:** architecture and implementation decisions across the storefronts, the Strapi backends and the infrastructure.
- **Delivery:** I run the release workflow across development, staging and production.
- **Team:** I review and coordinate the work of other developers.
- **Stakeholders:** I work daily with product, operations, design and SEO specialists to turn commercial requirements into shipped software.
- **Production:** deployments, monitoring and troubleshooting across servers, databases, queues and the CDN layer.
- **Hands-on development** on the storefront, checkout, APIs and automation.

## How the platform fits together

A simplified view of the main VisitFootball and Voetbaltrips setup:

```text
Fans (EN, NL, ...)
  │
  ▼
Cloudflare: DNS, CDN, edge
  │
  ▼
Next.js storefronts (SSR)
VisitFootball · Voetbaltrips
  │ API
  ▼
Strapi v4: content, i18n, APIs
  ├─ PostgreSQL
  └─ Redis

Editors & ops ─► Strapi admin

Checkout ─► payment providers
  │
  ▼
Webhooks ─► order workflow
  ├─ order documents
  ├─ transactional email
  └─ scheduled jobs
```

## Decisions and trade-offs

**One codebase, several brands.** VisitFootball and Voetbaltrips run on the same Next.js codebase. A fix or a feature ships to both brands at once. The cost is that every change has to work for each brand's language, content and market, so each one is designed and reviewed with both brands in mind.

**Server-side rendering where search matters.** Match, club and competition pages are rendered on the server so they're fast and crawlable in every language.

**Correctness first in payments.** Payment and webhook handling is built so that a retried request or a repeated provider notification doesn't charge a customer twice. In checkout code, boring and verifiable beats clever.

**Automate the operational work.** Order documents, transactional emails and scheduled background jobs replace work that would otherwise be done by hand, under time pressure, by the operations team.

**Stability versus speed.** The commercial side always wants the next feature; customers need the platform to work during a busy matchweek. A staging environment and a defined release workflow are how both get what they need.

## What I work on

- **Storefronts:** fast, SEO-friendly match, club and landing pages with Next.js and server-side rendering, in every supported language.
- **Checkout and payments:** online payment flows with the payment methods the market expects, including iDEAL, PayPal and cards. This is revenue-critical code, and it's treated that way.
- **Content and localization:** Strapi-based backends that power multilingual content and editorial workflows.
- **Automation:** order documents, transactional email and scheduled background jobs.
- **APIs:** authenticated services that expose platform data cleanly, with localization and search built in.
- **Infrastructure:** deployments across Vercel and DigitalOcean behind Nginx and Cloudflare, with PostgreSQL and Redis.

## Results

I can't publish the business's revenue or traffic figures. What I can say:

- The brands sell tickets and trips on live platforms I'm responsible for in production.
- Releases go through a defined development, staging and production workflow that I run.
- New work for one brand of the shared platform reaches the other brand without a second implementation.

## What I took from it

In commerce, the unglamorous parts are the product: the confirmation email that arrives, the webhook that's safe to receive twice, the match page that renders correctly in Dutch as well as in English. Most of my job is making those parts dependable, and making it easy for the rest of the team to keep them that way.
