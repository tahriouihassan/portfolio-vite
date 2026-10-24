---
title: "Tracefox"
seoTitle: "Tracefox Case Study: A Checkout-Testing SaaS Built Solo"
description: "My own SaaS, built solo: automated checkout testing for ecommerce agencies, with scheduled real-browser runs, step-level failure reports and paid plans."
tech: ["Next.js", "TypeScript", "Playwright", "Chromium", "Background jobs", "Chrome extension"]
image: "../../assets/featured/tracefox-checkout-testing.png"
imageAlt: "The Tracefox homepage: 'Catch broken checkouts before customers do', next to a sample failed checkout run that names the step that failed"
link: "https://tracefox.co"
featured: true
status: "active"
stage: "live"
order: 2
role: "Founder & solo developer"
year: "2025 – present"
outcome: "A live SaaS with a free plan and three paid tiers. Positioning, product, automation engine and infrastructure, all built by me."
fr:
  description: "Mon propre SaaS, construit seul : des tests automatisés de checkout pour les boutiques en ligne et les agences qui les gèrent. Parcours rejoués dans un vrai navigateur, rapports d'échec étape par étape, formules payantes."
  outcome: "Un SaaS en ligne avec une formule gratuite et trois formules payantes. Positionnement, produit, moteur d'automatisation et infrastructure, tout construit par moi."
  role: "Fondateur et développeur unique"
  year: "2025 – aujourd'hui"
  imageAlt: "La page d'accueil de Tracefox : « Catch broken checkouts before customers do », à côté d'un exemple de test de checkout en échec qui indique l'étape fautive"
---

Tracefox is my own product. I built it alone, from the positioning and pricing to the frontend, backend, browser-automation engine and infrastructure. It's live at [tracefox.co](https://tracefox.co) with a free plan and paid plans.

## Context

Agencies that look after many online stores usually find out about a broken checkout the worst way: an email from the client, or a dip in sales. A theme update hides the "Add to cart" button, a discount code stops applying, shipping fails for one country. Uptime monitors only check that a page responds. Analytics show that conversion fell, often days later, but not which step broke.

## The product

Tracefox replays the checkout flows you set up for each store, in a real browser, on a schedule. When a run fails, the alert names the step that failed and includes a screenshot of every step before it.

- **Creating tests:** generate a test from a store URL, record it with a Chrome extension, or add steps by hand.
- **Running them:** weekly, daily or hourly, on a desktop, mobile or tablet viewport per test.
- **Alerts:** email, Slack or webhook, depending on the plan.
- **Agencies:** one workspace for all client stores, with per-store client reports that agencies can put their own branding on.
- **Site scans:** checks for tracking scripts, pixels and cookies being added, removed or changed, so a theme update that drops a pixel shows up in a scan rather than weeks later in ad reporting.

Pricing is public: a free plan with one test, then Starter at $29, Pro at $99 and Business at $249 a month, each with a 7-day trial.

## Engineering challenges

**Telling real failures from flaky ones.** Browser tests fail for reasons that aren't bugs: a slow response, an animation, a cookie banner in the way. An alert that cries wolf teaches an agency to ignore it. Tracefox confirms a failure with a re-run before it alerts anyone.

**Failure reports a non-developer can act on.** "Timeout after 30000ms" is useless to an account manager. Reports describe what happened on the page, such as a "Continue to shipping" button that exists but never becomes visible, alongside a screenshot of the page as the test saw it.

**Scheduling against a shared allowance.** Runs come from a monthly pool shared across a workspace, and one hourly test can use up to 744 runs a month. The app forecasts usage before a schedule is switched on and says clearly if runs stop, so monitoring never lapses silently.

**Running real checkouts safely.** Tests stop before payment by default. A test can complete a zero-total order using a 100%-off discount code, which covers the whole flow without charging anyone.

## Product decisions

**One job, one buyer.** Tracefox started with a wider scope that included session replay and UX analytics. The current product does one job, catching broken checkouts, for one main buyer: agencies responsible for many client stores. It works the same for a single store.

**Say what it doesn't do.** The homepage lists the limits: Chromium only, emulated mobile rather than real iPhones, no checks on steps that aren't in a test. A monitoring tool that over-promises is worse than none.

**Show the working.** The "what could a broken checkout cost" calculator asks for the store's own numbers, shows every step of the calculation and says it doesn't use an industry incident rate because there isn't one I can source.

## Stack

Next.js and TypeScript for the app and marketing site, Playwright driving Chromium for test runs, a scheduled background-job system for runs and site scans, and a Chrome extension for recording tests.

## What it shows

Building a SaaS alone means making every trade-off yourself: what to build, what to leave out, how to price it, how to make it reliable enough that people trust its alerts. It's the same judgement I bring to client and employer products, from the founder's side of the table.
