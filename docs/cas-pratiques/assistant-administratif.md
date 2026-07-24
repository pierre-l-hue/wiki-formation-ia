# Cas pratique — Assistant administratif

Dans une PME, la gestion administrative au quotidien exige réactivité, rigueur et professionnalisme. Ce cas pratique illustre comment transformer l'IA en un copilote d'organisation efficace pour traiter les tâches chronophages tout en garantissant la sécurité des données.

<div class="summary-box">

<h3>🎯 Objectifs opérationnels</h3>

* **Accélérer la gestion documentaire :** rédiger, synthétiser et reformuler vos écrits en quelques secondes.
* **Conserver un ton irréprochable :** adapter le niveau de langage selon vos interlocuteurs (clients, fournisseurs, direction).
* **Garantir la confidentialité :** appliquer les règles strictes d'anonymisation avant tout envoi de prompt.

</div>

---

## 📌 Situation de départ

Vous travaillez dans une PME dynamique. Au quotidien, vous devez jongler entre la boîte de réception, les comptes-rendus de réunion, la remise au propre de documents internes et le traitement des sollicitations clients.

<div class="real-life-box">

<h3>💼 Dans la vraie vie</h3>

L'objectif n'est pas de laisser l'IA répondre seule à vos mails, mais de l'utiliser pour **générer une première mouture propre en 30 secondes**. Vous conservez ainsi 100 % du contrôle stratégique et de la validation finale.

</div>

---

## 🛠️ Tâches ciblées & opportunités IA

<div class="wiki-grid">

<div class="wiki-card">
<div class="wiki-card-icon">✉️</div>
<h3>Emails courants</h3>
<p>Proposer des réponses claires, structurées et adaptées aux demandes répétitives.</p>
<span class="wiki-badge success">Gain de temps : Très élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">📝</div>
<h3>Comptes-rendus</h3>
<p>Mettre en forme des notes brutes sous forme de synthèses structurées avec décisions et actions.</p>
<span class="wiki-badge success">Gain de temps : Élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">✏️</div>
<h3>Reformulation</h3>
<p>Clarifier le style, corriger les fautes et adapter le ton d'une note ou d'une procédure.</p>
<span class="wiki-badge">Gain de temps : Moyen</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">📋</div>
<h3>Plans d'action</h3>
<p>Extraire rapidement les tâches à exécuter et les responsables désignés depuis un texte long.</p>
<span class="wiki-badge">Gain de temps : Élevé</span>
</div>

</div>

---

## 💡 Prompt modèle (Framework CROFT)

Utilisez cette structure prête à l'emploi pour reformuler ou préparer vos communications clients :

```text
CONTEXTE :
Je suis assistant administratif dans une PME du secteur [Indiquer le secteur]. 
Je dois répondre à un client concernant une demande d'information / un retard.

RÔLE :
Agis comme un assistant administratif expérimenté, courtois et très rigoureux.

OBJECTIF :
Reformule et enrichis le brouillon de message ci-dessous pour le rendre clair, professionnel et chaleureux.

FORMAT :
- Propose 2 options d'objets d'email clairs.
- Corps du message en 2 paragraphes maximum.
- Une formule de politesse adaptée.

TON :
Professionnel, bienveillant, direct et sans jargon inutile.

TEXTE À REFORMULER (ANONYMISÉ) :
"[Coller ici votre texte anonymisé]"
```

---

## ⚠️ Vigilance & Données sensibles

<div class="warning-practice-box">

<h3>🛑 À éviter absolument</h3>

Ne collez **jamais** directement dans un modèle d'IA un email ou un document contenant :

* Des noms complets de clients, collaborateurs ou fournisseurs.
* Des adresses emails, numéros de téléphone ou coordonnées personnelles.
* Des montants financiers précis (devis, factures, salaires).
* Des références contractuelles ou des clauses de confidentialité.

</div>

<div class="good-reflex-box">

<h3>✅ Le bon réflexe : La technique du masque</h3>

Avant d'envoyer votre texte à l'IA, remplacez systématiquement les informations confidentielles par des éléments génériques :

* `Marie DUPONT` ➔ `[Client A]`
* `12 500 € HT` ➔ `[Montant du devis]`
* `Contrat signé le 14 mai` ➔ `[Date du contrat]`
* `Société ACME Corp` ➔ `[Entreprise X]`

</div>

---

## 🚀 Checklist de validation administrative

<div class="summary-box">

<h3>Avant d'envoyer le document généré par l'IA :</h3>

1. L'IA a-t-elle inventé des faits ou des engagements non prévus ? *(Vérification des hallucinations)*
2. Le ton correspond-il exactement à la culture de l'entreprise ?
3. Les variables masquées *(comme `[Client A]`)* ont-elles toutes été réintégrées correctement avec les vraies données ?

</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="./communication/">Cas pratique suivant : Communication ➔</a>
  <a class="wiki-button" href="../">Vue d'ensemble des cas pratiques</a>
</div>
