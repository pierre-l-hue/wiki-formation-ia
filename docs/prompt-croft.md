# Template — Framework CROFT

Le framework **CROFT** est une méthode pour structurer des instructions (prompts) claires, précises et performantes. En guidant l’IA à travers ces 5 piliers, on réduit les risques d’incompréhension, d’hallucinations et de réponses hors sujet.

<div class="summary-box" markdown="block">
<h3>🎯 Les 5 piliers du framework CROFT</h3>

- **C — Contexte** : planter le décor, la situation et le secteur d’activité.
- **R — Rôle** : donner une posture ou une expertise spécifique à l’IA.
- **O — Objectif** : décrire avec précision la tâche à accomplir et le résultat attendu.
- **F — Format** : imposer la structure de la réponse (tableau, liste, e-mail, plan).
- **T — Ton** : définir le niveau de langage, la posture et le style de rédaction.
</div>

---

## 🛠️ Modèle universel à copier-coller

Utilisez cette trame vierge pour vos demandes du quotidien avec un modèle d’IA :

```text
CONTEXTE :
[Expliquez la situation globale, le secteur et le public cible en 2 ou 3 phrases.]

RÔLE :
Tu es [Préciser la posture : expert RH, assistant administratif, copywriter B2B, formateur, etc.].

OBJECTIF :
[Expliquez précisément et clairement ce que vous voulez obtenir.]

FORMAT :
- [Indiquez la structure : e-mail, tableau à 3 colonnes, synthèse, liste à puces de 5 points.]
- [Précisez la longueur max : ex. 200 mots, 2 paragraphes.]

TON :
[Indiquez le style : professionnel, bienveillant, pédagogique, direct, enthousiaste, etc.]

CONTRAINTES :
- [Contrainte 1 : ex. Ne pas utiliser de jargon technique]
- [Contrainte 2 : ex. Rester neutre sur le plan juridique]
- [Contrainte 3 : ex. Ne pas inventer de faits ou de chiffres]

AVANT DE RÉPONDRE :
Si une information essentielle manque pour accomplir parfaitement la tâche, pose-moi
jusqu’à 3 questions de clarification avant de générer le contenu.
```

---

## 💡 Exemple concret d’application

<div class="wiki-grid">

<div class="wiki-card">
  <div class="wiki-card-icon">✉️</div>
  <h3>Cas d’usage : Communication client</h3>
  <p>Annonce d’un changement d’horaires d’accueil dans une PME de services.</p>
</div>

</div>

```text
CONTEXTE :
Je travaille dans une PME de services. Nous devons annoncer à nos clients un changement
d’horaires d’ouverture de l’accueil physique à partir du mois prochain.

RÔLE :
Tu es chargé de communication client senior, expert en relation client et gestion de crise douce.

OBJECTIF :
Rédige un e-mail clair et bienveillant pour informer nos clients du changement d’horaires
sans générer d’insatisfaction.

FORMAT :
- 2 propositions d’objets d’e-mail incitatifs.
- Corps de message avec formule d’accueil, 3 paragraphes courts et conclusion.
- Un encadré rappelant les nouveaux horaires (Lundi–Vendredi : 8h30–17h00).

TON :
Professionnel, transparent, chaleureux et rassurant.

CONTRAINTES :
- Maximum 150 mots pour le corps de texte.
- Aucun jargon administratif.
- Ne pas inventer de justifications internes complexes.
```

---

## ⚠️ Vigilance et bon réflexe

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter absolument</h3>

Ne pas confondre contexte précis et divulgation de données sensibles.  
On peut décrire une situation de façon détaillée sans jamais mentionner de noms propres, de chiffres confidentiels ou d’informations stratégiques internes.
</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe : la question de clarification</h3>

Inclure la clause : `AVANT DE RÉPONDRE : Pose-moi des questions si besoin`.

Cette simple instruction pousse l’IA à demander des précisions plutôt qu’à combler les manques par des suppositions ou des hallucinations.
</div>

---

## 🚀 Checklist de validation du prompt CROFT

<div class="summary-box" markdown="block">
<h3>Checklist d’un prompt efficace</h3>

- [ ] Le décor et le secteur d’activité sont posés (Contexte).
- [ ] Une expertise ou un métier précis est assigné à l’IA (Rôle).
- [ ] Le résultat attendu est mesurable et précis (Objectif).
- [ ] La forme finale du livrable est explicitement décrite (Format).
- [ ] Le style rédactionnel est clairement cadré (Ton).
- [ ] Les données confidentielles ont été préalablement masquées.
</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../prompt-visuel/">Template suivant : Prompt visuel ➔</a>
  <a class="wiki-button" href="../anonymisation/">⬅️ Template précédent : Anonymisation</a>
</div>
