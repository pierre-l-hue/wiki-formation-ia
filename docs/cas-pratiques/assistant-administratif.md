# Cas pratique — Assistant administratif

Dans une PME, la gestion administrative au quotidien exige réactivité, rigueur et professionnalisme. Ce cas pratique montre comment utiliser l’IA comme un copilote d’organisation pour traiter les tâches chronophages, tout en protégeant les données sensibles.

<div class="summary-box" markdown="block">
<h3>🎯 Objectifs opérationnels</h3>

- Accélérer la gestion documentaire : rédiger, synthétiser et reformuler les écrits en quelques secondes.
- Conserver un ton irréprochable : adapter le niveau de langage selon les interlocuteurs (clients, fournisseurs, direction).
- Garantir la confidentialité : appliquer des règles strictes d’anonymisation avant tout envoi de prompt.
</div>

---

## Situation de départ

Dans une PME dynamique, l’assistant administratif jongle entre la boîte de réception, les comptes rendus de réunion, la remise au propre de documents internes et le traitement des sollicitations clients.

<div class="real-life-box" markdown="block">
<h3>💼 Dans la vraie vie</h3>

L’IA ne remplace pas l’assistant administratif.  
Elle sert à générer une première version propre en 30 secondes, puis l’humain garde le contrôle stratégique et valide le message final.
</div>

---

## Tâches ciblées et opportunités IA

<div class="wiki-grid">

<div class="wiki-card">
<div class="wiki-card-icon">✉️</div>
<h3>Emails courants</h3>
<p>Proposer des réponses claires, structurées et adaptées aux demandes répétitives.</p>
<span class="wiki-badge success">Gain de temps : très élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">📝</div>
<h3>Comptes rendus</h3>
<p>Mettre en forme des notes brutes sous forme de synthèses avec décisions et actions.</p>
<span class="wiki-badge success">Gain de temps : élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">✏️</div>
<h3>Reformulation</h3>
<p>Clarifier le style, corriger les fautes et adapter le ton d’une note ou d’une procédure.</p>
<span class="wiki-badge">Gain de temps : moyen</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">📋</div>
<h3>Plans d’action</h3>
<p>Extraire rapidement les tâches à exécuter et les responsables depuis un texte long.</p>
<span class="wiki-badge">Gain de temps : élevé</span>
</div>

</div>

---

## Prompt modèle (Framework CROFT)

Ce modèle de prompt sert à reformuler ou préparer une communication client de façon rapide et structurée.

```text
CONTEXTE :
Je suis assistant administratif dans une PME du secteur [indiquer le secteur].
Je dois répondre à un client concernant une demande d’information ou un retard.

RÔLE :
Agis comme un assistant administratif expérimenté, courtois et rigoureux.

OBJECTIF :
Reformule et enrichis le brouillon de message ci-dessous pour le rendre clair,
professionnel et chaleureux.

FORMAT :
- Propose 2 options d’objet d’email clairs.
- Corps du message en 2 paragraphes maximum.
- Une formule de politesse adaptée.

TON :
Professionnel, bienveillant, direct, sans jargon inutile.

TEXTE À REFORMULER (ANONYMISÉ) :
"[Coller ici le texte anonymisé]"
```

---

## Vigilance sur les données sensibles

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter absolument</h3>

Ne jamais coller directement dans un modèle d’IA un email ou un document contenant :

- Des noms complets de clients, collaborateurs ou fournisseurs.
- Des adresses email, numéros de téléphone ou coordonnées personnelles.
- Des montants financiers précis (devis, factures, salaires).
- Des références contractuelles ou des clauses de confidentialité.
</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe : la technique du masque</h3>

Avant d’envoyer un texte à l’IA, remplacer systématiquement les informations confidentielles par des éléments génériques :

- `Marie DUPONT` ➔ `[Client A]`
- `12 500 € HT` ➔ `[Montant du devis]`
- `Contrat signé le 14 mai` ➔ `[Date du contrat]`
- `Société ACME Corp` ➔ `[Entreprise X]`
</div>

---

## Checklist de validation administrative

<div class="summary-box" markdown="block">
<h3>Avant d’envoyer le document généré par l’IA</h3>

1. L’IA a-t-elle inventé des faits ou des engagements non prévus ? *(vigilance sur les hallucinations)*
2. Le ton correspond-il à la culture de l’entreprise et à l’interlocuteur ?
3. Les variables masquées (comme `[Client A]`) ont-elles été réintégrées correctement avec les vraies données ?
</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="./communication/">Cas pratique suivant : Communication ➔</a>
  <a class="wiki-button" href="../">Vue d’ensemble des cas pratiques</a>
</div>
