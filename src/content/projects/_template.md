---
# ── Copy this file to add a project. Filename = URL slug (my-project → /projects/my-project)
title: "Project Name"
description: "One line about what it is and who it's for (also the case study's meta description)."
# Title tag for the case-study page; describe the problem, not just the name.
seoTitle: "Project Name Case Study: What Was Built and Why"
tech: ["Next.js", "Strapi", "PostgreSQL"]
# Optional screenshot. Drop the file in src/assets/featured/ and point to it.
# Delete this line to show a branded placeholder instead.
image: "../../assets/featured/your-image.webp"
imageAlt: "What the screenshot shows, in one sentence"
# Optional links. Remove `link` once the site goes offline.
link: "https://example.com"
repo: "https://github.com/you/repo"
# Show on the homepage featured grid?
featured: false
# "active" = shown in the projects grid · "archived" = earlier-projects list
status: "active"
# live · in-development · prototype · offline (shown as a label)
stage: "live"
# Lower numbers appear first
order: 100
# ── Optional case-study header fields (only used if this file has body text) ──
role: "Lead Full-Stack Developer"
year: "2025"
client: "Client / Company"
outcome: "The headline result in one line. Only facts you can back up."
# French card text (falls back to English when missing)
fr:
  description: "Une phrase sur ce que c'est et pour qui."
  outcome: "Le résultat principal en une ligne."
---

<!--
  Everything below the frontmatter is OPTIONAL.
  - Leave it empty  → this project is just a card.
  - Write markdown  → it becomes a full case study at /projects/<slug>,
                       and a "Read case study" link appears on the card.
  - French version  → add src/content/projects-fr/<slug>.md with the same slug.

  Suggested structure:
-->

## Context

Who the client is, what the product does, and where you fit in.

## The problem

What made it hard, commercially and technically.

## My role

What you owned, and what the team did.

## Decisions and trade-offs

The choices you made, and what each one cost.

## Results

What shipped and what changed. No invented numbers.
