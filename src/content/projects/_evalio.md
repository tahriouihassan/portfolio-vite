---
title: "Evalio"
description: "An AI-powered hiring platform that turns a job description into a tailored candidate assessment, with auto-generated quizzes, resume matching and scored explanations."
tech: ["Laravel", "Inertia", "Tailwind", "Stripe", "OpenAI", "DeepSeek"]
link: "https://evalio.me"
featured: true
status: "active"
order: 3
role: "Full-Stack Developer"
year: "2025"
outcome: "Job description in, ready-to-send candidate assessment out. AI-scored matching with explanations."
---

Evalio is an HR and candidate-assessment SaaS that uses AI where it actually helps: turning a messy job description into a structured, fair, ready-to-use screening test, and explaining *why* a candidate scored the way they did.

## The problem

Early-stage screening is slow and inconsistent. Recruiters write ad-hoc quizzes, grade them by hand, and struggle to compare candidates objectively against what the role actually requires.

## What I built

- **AI quiz generation:** paste a job description and Evalio generates multiple-choice and true/false questions with configurable difficulty, time limits and passing scores. It uses structured JSON output from the model, not free-form text you have to parse and pray over.
- **Resume matching:** candidates are matched against the role with a score and a plain-language explanation of the reasoning.
- **Recruiter workflows:** candidate tracking, access codes, and team accounts.
- **Plans and billing:** free and paid tiers via Stripe, with the AI model selected by subscription plan to keep costs aligned with pricing.

## The stack

Laravel and Inertia with server-side rendering, Tailwind and shadcn-style UI, Stripe for subscriptions, and AI integrations across OpenAI and DeepSeek with cost-efficient model selection and structured JSON generation.

## The result

A practical AI product that shows I can integrate LLMs into real subscription software with team accounts, billing and sane cost controls. Not a chatbot bolted onto a form.
