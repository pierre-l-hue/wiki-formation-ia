# Cas pratique — Ressources humaines

Les métiers des Ressources Humaines manipulent quotidiennement des informations stratégiques et sensibles. Ce cas pratique montre comment utiliser l'IA générative comme assistant de rédaction et d'analyse pour vos documents RH (offres d'emploi, grilles d'évaluation, communications internes) tout en respectant scrupuleusement la confidentialité et le cadre légal.

<div class="summary-box">

<h3>🎯 Objectifs opérationnels</h3>

* **Optimiser la marque employeur :** rédiger des offres d'emploi attractives, claires et exemptes de biais discriminatoires.
* **Structurer les processus RH :** concevoir des grilles d'entretien objectives et des trames d'évaluation homogènes.
* **Garantir la conformité et la sécurité :** anonymiser à 100 % les données RH et conserver le jugement humain au cœur des décisions.

</div>

---

## 📌 Situation de départ

Vous devez produire régulièrement des documents RH structurants : annonces de recrutement, notes de cadrage interne, grilles de compétences, comptes-rendus d'échange ou communications relatives à la vie de l'entreprise.

<div class="real-life-box">

<h3>💼 Dans la vraie vie</h3>

L'IA est un **outil d'aide à la décision et à la rédaction**, jamais un décideur. Les arbitrages stratégiques (recrutement, promotion, sanction, évaluation) relèvent toujours de la responsabilité exclusive des professionnels RH (*Human in the loop*).

</div>

---

## 🛠️ Tâches ciblées & opportunités IA

<div class="wiki-grid">

<div class="wiki-card">
<div class="wiki-card-icon">📢</div>
<h3>Offres d'emploi</h3>
<p>Clarifier les missions, valoriser le poste et éliminer les critères involontairement discriminants.</p>
<span class="wiki-badge success">Gain de temps : Très élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">📋</div>
<h3>Grilles d'entretien</h3>
<p>Structurer des questionnaires d'évaluation par compétences pour garantir l'équité entre candidats.</p>
<span class="wiki-badge success">Gain de temps : Élevé</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">✉️</div>
<h3>Communications internes</h3>
<p>Simplifier des notes administratives ou juridiques pour les rendre compréhensibles par tous les salariés.</p>
<span class="wiki-badge">Gain de temps : Moyen</span>
</div>

<div class="wiki-card">
<div class="wiki-card-icon">🔍</div>
<h3>Analyse d'inclusivité</h3>
<p>Détecter les formulations excluantes ou les biais de genre/âge dans vos documents de recrutement.</p>
<span class="wiki-badge">Gain de temps : Élevé</span>
</div>

</div>

---

## 💡 Prompt modèle (Framework CROFT)

Utilisez cette structure prête à l'emploi pour analyser et optimiser une offre d'emploi avant publication :

```text
CONTEXTE :
Je suis responsable RH dans une entreprise du secteur [Indiquer le secteur]. 
Je souhaite réviser une offre d'emploi pour la rendre plus claire, attractive et inclusive.

RÔLE :
Agis en tant qu'expert en recrutement, marque employeur et communication inclusive.

OBJECTIF :
Analyse le texte ci-dessous, signale les biais ou formulations à risque, puis propose une version optimisée.

CONTRAINTES :
- Ne pas modifier le niveau réel d'expérience requis ni la rémunération.
- Éliminer tout stéréotype (âge, genre, profil type).
- Utiliser des termes clairs et un ton engageant.
- Signaler explicitement les termes corrigés et la raison de la modification.

FORMAT :
1. Liste des points de vigilance / biais identifiés.
2. Proposition d'offre révisée (Intitulé, Missions, Profil recherché, Avantages).

TEXTE DE L'OFFRE (ANONYMISÉ) :
"[Coller ici le texte de votre offre]"
```

---

## ⚠️ Vigilance & Données confidentielles RH

<div class="warning-practice-box">

<h3>🛑 À éviter absolument</h3>

Le RGPD et le secret professionnel imposent de ne **jamais** soumettre à une IA des données nominatives ou sensibles :

* Noms, prénoms ou coordonnées de candidats ou de collaborateurs.
* Montants de rémunération, fiches de paie ou packages individuels.
* Informations de santé, arrêts maladie, données sur le handicap.
* Comptes-rendus d'entretiens annuels, évaluations ou appréciations individuelles.
* Dossiers disciplinaires, conflits internes ou procédures de départ.

</div>

<div class="good-reflex-box">

<h3>✅ Le bon réflexe : La relecture critique et l'anonymisation</h3>

Pour tous vos travaux RH à l'aide de l'IA :

* **Masquez systématiquement** les données personnelles avant tout envoi (`[Collaborateur A]`, `[Poste X]`).
* **Relisez avec rigueur** juridique : l'IA ne connaît ni les accords d'entreprise spécifiques ni les évolutions du droit du travail en temps réel.
* **Maintenez le dialogue humain** : l'évaluation et l'empathie ne s'automatisent pas.

</div>

---

## 🚀 Checklist de validation RH

<div class="summary-box">

<h3>Avant de diffuser ou d'exploiter un document RH généré par l'IA :</h3>

1. Le document respecte-t-il les obligations légales et les conventions collectives applicables ?
2. Toutes les données nominatives ou confidentielles ont-elles été complètement retirées de l'historique des échanges ?
3. La décision finale reste-t-elle portée et assumée par un humain ?

</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../">Vue d'ensemble des cas pratiques ➔</a>
  <a class="wiki-button" href="../communication/">⬅️ Cas précédent : Communication</a>
</div>
