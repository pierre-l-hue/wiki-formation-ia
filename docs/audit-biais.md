# Template — Audit de biais & communication inclusive

Les modèles d’IA générative sont entraînés sur d’immenses volumes de données web qui contiennent des stéréotypes, des généralisations et des biais culturels. Ce template permet d’auditer systématiquement les contenus générés (textes, offres d’emploi, supports de communication) afin de garantir une communication éthique, neutre et inclusive.

<div class="summary-box" markdown="block">
<h3>🎯 Objectifs de l’audit de biais</h3>

- Garantir l’équité : éliminer les formulations discriminatoires ou stéréotypées (genre, âge, origine, handicap).
- Respecter la conformité légale : veiller au respect des réglementations sur le recrutement et la communication publique (IA Act, Code du travail).
- Protéger l’image de marque : véhiculer une posture d’entreprise responsable, moderne et ouverte à la diversité.
</div>

---

## 📌 Quand utiliser ce template ?

Appliquer cet audit de biais dès que vous produisez ou validez l’un des supports suivants :

<div class="wiki-grid">

<div class="wiki-card">
  <div class="wiki-card-icon">📢</div>
  <h3>Recrutement & RH</h3>
  <p>Offres d’emploi, fiches de poste, critères de sélection, trames d’entretien.</p>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">💼</div>
  <h3>Communication interne</h3>
  <p>Notes de service, chartes d’entreprise, comptes rendus, guides collaborateurs.</p>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">📣</div>
  <h3>Marketing & vente</h3>
  <p>Fiches produits, campagnes publicitaires, posts réseaux sociaux, scripts de vente.</p>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">🖼️</div>
  <h3>Visuels & multimédia</h3>
  <p>Images générées par IA (représentativité des équipes, stéréotypes d’apparence).</p>
</div>

</div>

---

## 🛠️ Prompt modèle : auditeur éthique et inclusion

Utiliser ce prompt pour soumettre un texte à une analyse critique avant validation :

```text
CONTEXTE :
Je souhaite vérifier un document produit pour ma structure afin de m’assurer
qu’il ne comporte aucun biais discriminant ou formulation excluante.

RÔLE :
Tu es expert en éthique de l’IA, communication inclusive et conformité
en matière de non-discrimination.

OBJECTIF :
Analyse le contenu ci-dessous pour repérer les biais, stéréotypes,
généralisations abusives ou termes potentiellement excluants.

POINTS DE VIGILANCE À SCANNER :
- Égalité F/H et langage inclusif
- Âge et stéréotypes générationnels (ex : "Digital native", "Senior")
- Origine, culture et appartenance
- Handicap, accessibilité et santé
- Situation familiale, sociale et niveau d’études
- Apparence physique ou critères vestimentaires non pertinents

FORMAT DE RÉPONSE :
1. Tableau des points de vigilance identifiés
   (Formulation brute | Risque/Biais associé | Remplacement conseillé).
2. Version révisée intégrale du texte, neutre, claire et professionnelle.

TEXTE À ANALYSER :
"[Coller ici votre texte]"
```

---

## ⚠️ Vigilance et bon réflexe

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter absolument</h3>

Ne pas se contenter de demander à l’IA : « Rends ce texte non discriminatoire ».

Sans critères précis ni analyse explicite des risques, l’IA peut lisser excessivement le texte, en altérer le sens d’origine ou passer à côté de biais implicites plus subtils.
</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe : demander l’explication du risque</h3>

Exiger toujours de l’IA qu’elle explique pourquoi une formulation pose problème.

Cette démarche pédagogique permet de former les équipes, de prendre des décisions éclairées et de comprendre les nuances de la communication responsable.
</div>

---

## 🚀 Checklist de validation d’un contenu éthique

<div class="summary-box" markdown="block">
<h3>Checklist « Zéro biais »</h3>

- [ ] L’intitulé et le corps du texte s’adressent de manière neutre à toutes et tous.
- [ ] Les critères demandés (compétences, prérequis) sont strictement factuels et en lien direct avec le besoin.
- [ ] Aucun terme lié à l’âge, au genre ou au mode de vie n’est utilisé comme condition implicite.
- [ ] Les visuels associés représentent la diversité sans tomber dans le stéréotype caricatural.
- [ ] Une relecture humaine finale a validé les propositions de correction de l’IA.
</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../checklist-accessibilite/">Template suivant : Checklist accessibilité ➔</a>
  <a class="wiki-button" href="../prompt-visuel/">⬅️ Template précédent : Prompt visuel</a>
</div>
