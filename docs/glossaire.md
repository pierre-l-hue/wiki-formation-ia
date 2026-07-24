# Glossaire des termes à insérer dans les prompts

<div class="summary-box" markdown="block">
<h3>🎯 Objectif du glossaire</h3>

Ces codes sont des raccourcis à insérer dans les prompts pour améliorer la qualité des réponses produites par l’IA.

Ils servent notamment à :

- cadrer plus vite les demandes ;
- adapter le niveau de langage ;
- contrôler le ton, le format et la pédagogie ;
- améliorer la fiabilité des réponses IA.
</div>

---

## 1. Codes de structuration du prompt

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **ROFT** | Cadre rapide : Rôle, Objectif, Format, Ton | « Tu es [rôle]. [Objectif]. Format : […]. Ton : […]. » | Demande simple et directe (H1) |
| **CROFT** | ROFT + contexte pour personnaliser | « Contexte : […]. Tu es [rôle]. […] » | Mail important, compte rendu (H3) |
| **SOCRATE** | Cadrage complet pour situation complexe | « Situation : […]. Objectif : […]. Contexte : […]. Rôle : […]. Attentes : […]. Ton : […]. Exemples : […]. » | Blocage, situation délicate (H3) |
| **FAI** | Aller vite sur une demande simple | « Formule : […]. Action : […]. Intention : […]. » | Brainstorm, email rapide (H3) |

---

## 2. Codes de simplification / vulgarisation

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **FALC** (Facile à Lire et à Comprendre) | Texte accessible, phrases courtes, vocabulaire simple | « Réécrire ce texte en FALC, phrases courtes et mots simples : … » | Documents pour public en insertion, supports inclusifs |
| **ELI5** (Explain Like I'm 5) | Vulgariser fortement, métaphores simples | « ELI5 : expliquer la blockchain » | Casser le jargon |
| **ELI15 / ELI Student** | Niveau ado/étudiant, sans jargon pro | « Explique le machine learning niveau lycée (ELI15) » | Formation niveau bac / débutant motivé |
| **TLDR** | Résumé très court (3–5 lignes) | « TLDR : coller ici un mail ou un article » | Texte trop long, aller à l’essentiel |
| **TLDR + ELI5** | Résumé + simplification | « TLDR + ELI5 ce texte de contrat : … » | Résumé simple, compréhensible par tous |
| **Niveau B1** | Réécriture au niveau de langue B1 | « Réécris ce texte au niveau B1, phrases courtes, un mot difficile expliqué entre parenthèses » | Exercice 5 de la certification |

<div class="good-reflex-box" markdown="block">
<h3>✅ Bon réflexe</h3>

Pour des publics variés, il est souvent utile de combiner :

- un code de niveau, comme **FALC**, **ELI5** ou **B1** ;
- un code de format, comme **TLDR** ou **bullet points**.

Cette combinaison permet d’obtenir un texte à la fois plus accessible et plus directement exploitable.
</div>

---

## 3. Codes de ton / style

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **Humanize** | Texte plus naturel, moins « robotique » | « Réécrire ce texte en français naturel, ton humain, plus simple. Humanize : » | Texte IA trop froid ou rigide |
| **Jargonize** | Ajouter du vocabulaire technique/spécialisé | « Jargonize : reformuler ce texte pour un public d’experts en cybersécurité » | Supports pour experts |
| **Ton professionnel** | Texte formel, corporate | « Réécrire ce mail en ton professionnel, poli et concis » | Mails, comptes rendus |
| **Ton convivial / pédagogique** | Style proche de l’oral, rassurant | « Réécrire ce texte en ton convivial et pédagogique, phrases courtes » | Ateliers, FAQ, onboarding |
| **Ton commercial** | Style orienté vente | « Réécrire ce paragraphe en ton commercial, orienté bénéfices client » | Pages de vente |
| **Ton inclusif / neutre** | Retirer les stéréotypes, ton bienveillant | « Réécris ce texte en langage neutre, sans stéréotype de genre ou d’âge, ton bienveillant et inclusif » | Notes internes, offres d’emploi (H6) |

---

## 4. Codes de format / structure

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **TLDR en bullet points** | Résumé en liste à puces | « Résumer ce texte en 5 bullet points clairs (format TLDR) » | Synthèses, slides, briefs |
| **Format tableau** | Forcer un tableau | « Présenter le résultat dans un tableau avec colonnes : Étape, Description, Durée » | Comparatifs, supports de formation |
| **Format checklist** | Liste avec cases à cocher | « Donner une checklist des étapes à suivre, chaque étape sur une ligne » | Guides pas à pas |
| **Longueur max (X mots)** | Contrôler la taille | « Répondre en maximum 150 mots, pas plus » | Espace de copie limité |
| **Format JSON / code** | Sortie structurée pour outils | « Répondre uniquement en JSON valide avec les clés : titre, étapes, durée » | Automatisation, cas avancés |

<div class="wiki-card" markdown="block">
<h3>Astuce format</h3>

Pour un même contenu, spécifier à la fois :

- un **format** attendu, comme tableau, checklist ou JSON ;
- une **longueur maximale** ;

permet souvent d’obtenir une réponse plus lisible et plus facile à réutiliser.
</div>

---

## 5. Codes pédagogiques / d’analyse

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **« Étape par étape »** | Forcer le raisonnement détaillé | « Résoudre ce problème en expliquant étape par étape avant de donner la réponse finale » | Calculs, décisions, dossiers complexes |
| **« Critiquer ta propre réponse »** | Auto-contrôle | « Analyser ta réponse précédente : quels sont ses points faibles ou risques d’erreur ? » | Fiabilité, esprit critique |
| **« Proposer 3 versions »** | Obtenir de la variété | « Proposer 3 versions de ce mail : formel, neutre, chaleureux » | Choix de style |
| **« Niveau 1/2/3 d’explication »** | Progression pédagogique | « Explique ce concept : d’abord comme à un enfant, puis comme à un lycéen, puis comme à un professionnel » | Adaptation au public |
| **« Améliore mon prompt »** | Optimiser un prompt avant usage | « Je viens de te donner ce prompt : […]. Comment je pourrais l’améliorer ? » | Boucle d’amélioration continue (H3) |

---

## 6. Codes de vérification / audit

| Code | Effet attendu | Exemple de prompt | Quand l’utiliser |
|---|---|---|---|
| **Audit biais** | Détecter et corriger un biais | « Analyse cette réponse : contient-elle des généralisations sur le genre, l’âge, l’origine ? Propose une version neutre. » | Avant diffusion d’un contenu RH ou public (H7) |
| **Reverse prompting** | Deviner le prompt qui a produit un résultat | « Quel prompt a probablement généré ce texte/cette image ? » | Réutiliser une méthode qui a marché (H3, H4) |
| **Fact-check** | Vérifier une affirmation avant usage | « Vérifie cette information et indique ton niveau de confiance » | Avant d’utiliser un chiffre ou une date officielle (H5) |
| **Anonymiser** | Retirer les données sensibles d’un texte | « Réécris ce texte en remplaçant noms, montants et lieux par des génériques » | Avant de coller un texte avec des données clients (H5) |

<div class="summary-box" markdown="block">
<h3>💡 Comment utiliser ce glossaire en pratique</h3>

Cette page peut servir de repère pendant une session de prompting.

Pour l’utiliser efficacement :

- garder le glossaire ouvert pendant l’exercice ;
- combiner 2 à 3 codes au maximum par demande ;
- réutiliser les formulations qui fonctionnent bien dans des modèles de prompt ou des assistants dédiés.
</div>
