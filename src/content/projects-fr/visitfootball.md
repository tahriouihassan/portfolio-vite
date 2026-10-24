---
seoTitle: "Étude de cas VisitFootball : billetterie multi-marques"
description: "Je dirige le développement de quatre marques de billetterie et de voyages football : Next.js et Strapi partagés, paiements, SEO multilingue, production."
---

## Contexte

VisitFootball vend des billets officiels et des voyages football complets (billets, vols et hôtels) à des supporters qui se déplacent pour des matchs partout en Europe. L'entreprise organise des voyages football depuis 2011 et exploite plusieurs marques :

- **[VisitFootball](https://www.visitfootball.com)** pour un public international, anglophone.
- **[Voetbaltrips](https://www.voetbaltrips.com)** pour le marché néerlandais. Elle partage le même code Next.js que VisitFootball.
- **[Voetbaltickets.nl](https://www.voetbaltickets.nl)**, une billetterie néerlandaise avec son propre frontend Next.js.
- **[TrustedSeats](https://www.trustedseats.com)**, une place de marché de billets multisports construite avec Nuxt et Strapi, localisée pour sept marchés européens.

J'ai rejoint l'équipe en 2021 et je dirige le développement sur ces plateformes. Elles sont construites par une équipe, et certaines parties existaient avant mon arrivée. Cette étude de cas décrit mon rôle, pas un système que j'aurais construit seul.

## Le problème

Vendre des billets et des voyages en ligne pardonne moins qu'on ne le croit :

- **Tout bouge.** Disponibilités et prix changent en permanence, et les ligues confirment souvent les dates des matchs tardivement. Les pages, les commandes et les emails doivent gérer un match dont l'horaire n'est pas encore connu.
- **Chaque commande compte.** Les commandes ont une forte valeur et une échéance. Un supporter qui a payé doit recevoir les bons billets, avec des places côte à côte comme promis, avant le match. Pas question de « corriger au prochain sprint ».
- **La recherche est un canal de revenus.** Le référencement naturel amène des clients sur plusieurs marques et plusieurs langues : structure d'URL, rendu et vitesse sont des décisions commerciales, pas seulement techniques.
- **Plusieurs marques, une équipe.** Les marques doivent partager le plus possible sans devenir un code enchevêtré que plus personne n'ose modifier.

## Mon rôle

En tant que lead developer, je porte la partie technique de bout en bout, tout en restant dans le code :

- **Direction technique :** décisions d'architecture et d'implémentation sur les storefronts, les backends Strapi et l'infrastructure.
- **Livraison :** je pilote le workflow de release entre développement, staging et production.
- **Équipe :** je relis et coordonne le travail des autres développeurs.
- **Interlocuteurs métier :** je travaille chaque jour avec les spécialistes produit, opérations, design et SEO pour transformer des besoins commerciaux en logiciel livré.
- **Production :** déploiements, monitoring et résolution d'incidents sur les serveurs, les bases de données, les files d'attente et la couche CDN.
- **Développement** sur le storefront, le checkout, les API et l'automatisation.

## Comment la plateforme s'articule

Une vue simplifiée de l'ensemble VisitFootball et Voetbaltrips :

```text
Supporters (EN, NL, ...)
  │
  ▼
Cloudflare : DNS, CDN, edge
  │
  ▼
Storefronts Next.js (SSR)
VisitFootball · Voetbaltrips
  │ API
  ▼
Strapi v4 : contenu, i18n, API
  ├─ PostgreSQL
  └─ Redis

Éditeurs & ops ─► admin Strapi

Checkout ─► paiement (PSP)
  │
  ▼
Webhooks ─► workflow commande
  ├─ documents de commande
  ├─ emails transactionnels
  └─ tâches planifiées
```

## Décisions et compromis

**Un seul code, plusieurs marques.** VisitFootball et Voetbaltrips tournent sur le même code Next.js. Un correctif ou une fonctionnalité part sur les deux marques à la fois. La contrepartie : chaque changement doit fonctionner pour la langue, le contenu et le marché de chaque marque, et il est donc conçu et relu en pensant aux deux.

**Le rendu serveur là où la recherche compte.** Les pages de match, de club et de compétition sont rendues côté serveur, pour être rapides et indexables dans chaque langue.

**La justesse d'abord dans les paiements.** La gestion des paiements et des webhooks est conçue pour qu'une requête rejouée ou une notification répétée du prestataire ne débite pas un client deux fois. Dans du code de checkout, ce qui est simple et vérifiable vaut mieux que ce qui est astucieux.

**Automatiser le travail opérationnel.** Documents de commande, emails transactionnels et jobs planifiés remplacent un travail qui serait sinon fait à la main, sous pression, par l'équipe opérations.

**Stabilité contre vitesse.** Le commercial veut toujours la prochaine fonctionnalité ; les clients ont besoin d'une plateforme qui tient pendant une grosse semaine de matchs. Un environnement de staging et un workflow de release défini permettent de servir les deux.

## Ce sur quoi je travaille

- **Storefronts :** pages de match, de club et d'atterrissage rapides et optimisées pour le SEO, avec Next.js et le rendu serveur, dans chaque langue.
- **Checkout et paiements :** des parcours de paiement avec les moyens attendus sur le marché, dont iDEAL, PayPal et la carte bancaire. C'est du code critique pour le chiffre d'affaires, et il est traité comme tel.
- **Contenu et localisation :** des backends Strapi qui alimentent le contenu multilingue et les workflows éditoriaux.
- **Automatisation :** documents de commande, emails transactionnels et jobs en arrière-plan.
- **API :** des services authentifiés qui exposent les données proprement, avec localisation et recherche intégrées.
- **Infrastructure :** déploiements sur Vercel et DigitalOcean derrière Nginx et Cloudflare, avec PostgreSQL et Redis.

## Résultats

Je ne peux pas publier le chiffre d'affaires ni le trafic de l'entreprise. Ce que je peux dire :

- Les marques vendent des billets et des voyages sur des plateformes en production dont je suis responsable.
- Les releases suivent un workflow défini entre développement, staging et production, que je pilote.
- Un développement fait pour une marque de la plateforme partagée profite à l'autre sans seconde implémentation.

## Ce que j'en retiens

Dans le commerce en ligne, les parties les moins spectaculaires sont le produit : l'email de confirmation qui arrive, le webhook qu'on peut recevoir deux fois sans risque, la page de match qui s'affiche correctement en néerlandais comme en anglais. L'essentiel de mon travail consiste à rendre ces parties fiables, et à faire en sorte que le reste de l'équipe puisse les garder fiables.
