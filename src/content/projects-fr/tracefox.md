---
seoTitle: "Étude de cas Tracefox : un SaaS de test de checkout"
description: "Mon SaaS, construit seul : tests automatisés de checkout pour les agences e-commerce, dans un vrai navigateur, avec rapports d'échec par étape."
---

Tracefox est mon propre produit. Je l'ai construit seul, du positionnement et de la tarification jusqu'au frontend, au backend, au moteur d'automatisation de navigateur et à l'infrastructure. Il est en ligne sur [tracefox.co](https://tracefox.co) avec une formule gratuite et des formules payantes (site en anglais).

## Contexte

Les agences qui gèrent de nombreuses boutiques en ligne découvrent généralement un checkout cassé de la pire façon : un email du client ou une baisse des ventes. Une mise à jour de thème masque le bouton « Ajouter au panier », un code promo ne s'applique plus, la livraison échoue pour un pays. Les outils de monitoring de disponibilité vérifient seulement qu'une page répond. Les analytics montrent que la conversion a baissé, souvent des jours plus tard, mais pas quelle étape a cassé.

## Le produit

Tracefox rejoue les parcours de checkout que vous définissez pour chaque boutique, dans un vrai navigateur, selon un planning. Quand un test échoue, l'alerte indique l'étape fautive et joint une capture d'écran de chaque étape précédente.

- **Créer des tests :** générés à partir de l'URL de la boutique, enregistrés avec une extension Chrome, ou écrits étape par étape.
- **Les exécuter :** chaque semaine, chaque jour ou chaque heure, sur un viewport desktop, mobile ou tablette au choix pour chaque test.
- **Alertes :** email, Slack ou webhook selon la formule.
- **Agences :** un seul espace de travail pour toutes les boutiques clientes, avec des rapports par boutique que l'agence peut mettre à sa marque.
- **Scans de site :** détection des scripts de tracking, pixels et cookies ajoutés, supprimés ou modifiés, pour qu'une mise à jour de thème qui supprime un pixel apparaisse dans un scan et pas des semaines plus tard dans les rapports publicitaires.

La tarification est publique : une formule gratuite avec un test, puis Starter à 29 $, Pro à 99 $ et Business à 249 $ par mois, chacune avec un essai de 7 jours.

## Défis techniques

**Distinguer les vrais échecs des tests instables.** Un test de navigateur peut échouer pour des raisons qui ne sont pas des bugs : une réponse lente, une animation, un bandeau de cookies. Une alerte qui crie au loup apprend à l'agence à l'ignorer. Tracefox confirme un échec par une nouvelle exécution avant de prévenir qui que ce soit.

**Des rapports d'échec exploitables par un non-développeur.** « Timeout after 30000ms » ne sert à rien à un chef de projet. Les rapports décrivent ce qui s'est passé sur la page, par exemple un bouton « Continuer vers la livraison » présent mais jamais visible, avec une capture de la page telle que le test l'a vue.

**Planifier avec un quota partagé.** Les exécutions sont prises sur un quota mensuel partagé par l'espace de travail, et un seul test horaire peut consommer jusqu'à 744 exécutions par mois. L'application prévoit la consommation avant l'activation d'un planning et signale clairement si les exécutions s'arrêtent, pour que la surveillance ne s'interrompe jamais en silence.

**Exécuter de vrais checkouts sans risque.** Par défaut, les tests s'arrêtent avant le paiement. Un test peut aller jusqu'à une commande à montant nul grâce à un code de réduction de 100 %, ce qui couvre tout le parcours sans débiter personne.

## Décisions produit

**Un seul travail, un acheteur principal.** Tracefox a commencé avec un périmètre plus large, qui incluait le replay de sessions et l'analyse UX. Le produit actuel fait une seule chose, détecter les checkouts cassés, pour un acheteur principal : les agences responsables de nombreuses boutiques clientes. Il fonctionne de la même façon pour une seule boutique.

**Dire ce qu'il ne fait pas.** La page d'accueil liste les limites : Chromium uniquement, mobile émulé plutôt que de vrais iPhone, aucune vérification des étapes qui ne sont pas dans un test. Un outil de monitoring qui promet trop est pire que pas d'outil du tout.

**Montrer le calcul.** Le calculateur « combien pourrait coûter un checkout cassé » demande les chiffres de la boutique, affiche chaque étape du calcul et précise qu'il n'utilise pas de taux d'incident sectoriel, faute d'en avoir trouvé un dont la source soit vérifiable.

## Stack

Next.js et TypeScript pour l'application et le site, Playwright pilotant Chromium pour les tests, un système de jobs planifiés pour les exécutions et les scans, et une extension Chrome pour enregistrer les tests.

## Ce que ça montre

Construire un SaaS seul, c'est trancher soi-même chaque compromis : quoi construire, quoi laisser de côté, comment fixer le prix, comment le rendre assez fiable pour qu'on fasse confiance à ses alertes. C'est le même jugement que j'apporte aux produits de mes clients et employeurs, vu du côté du fondateur.
