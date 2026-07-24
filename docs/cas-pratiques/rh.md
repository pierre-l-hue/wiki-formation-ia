# Cas pratique — Ressources humaines

Dans les ressources humaines, de nombreux documents demandent à la fois rigueur, clarté et confidentialité. Ce cas pratique montre comment utiliser l’IA comme assistant de rédaction et d’analyse pour produire des documents RH utiles, tout en respectant les règles de sécurité, de conformité et de non-discrimination.

<div class="summary-box" markdown="block">
<h3>🎯 Objectifs opérationnels</h3>

- Rédiger des offres d’emploi plus claires, attractives et inclusives.
- Structurer les processus RH avec des trames, des grilles et des supports homogènes.
- Protéger les données sensibles et garder la décision finale du côté humain.
</div>

---

## Situation de départ

Les équipes RH produisent régulièrement des offres d’emploi, des notes internes, des grilles d’entretien, des documents de cadrage et des supports de communication liés à la vie de l’entreprise.

<div class="real-life-box" markdown="block">
<h3>💼 Dans la vraie vie</h3>

L’IA aide à rédiger, reformuler, structurer ou relire.  
Elle ne décide jamais à la place des professionnels RH.  
Le recrutement, l’évaluation, la promotion ou la sanction restent des décisions humaines.
</div>

---

## Tâches ciblées et opportunités IA

<div class="wiki-grid">

<div class="wiki-card">
  <div class="wiki-card-icon">📢</div>
  <h3>Offres d’emploi</h3>
  <p>Clarifier les missions, valoriser le poste et repérer les formulations à risque ou peu inclusives.</p>
  <span class="wiki-badge success">Gain de temps : très élevé</span>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">📋</div>
  <h3>Grilles d’entretien</h3>
  <p>Construire des questions par compétence pour comparer les candidatures de façon plus homogène.</p>
  <span class="wiki-badge success">Gain de temps : élevé</span>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">✉️</div>
  <h3>Communications internes</h3>
  <p>Reformuler des notes RH ou administratives pour les rendre plus claires et plus accessibles.</p>
  <span class="wiki-badge">Gain de temps : moyen</span>
</div>

<div class="wiki-card">
  <div class="wiki-card-icon">🔍</div>
  <h3>Analyse d’inclusivité</h3>
  <p>Repérer les biais de formulation liés au genre, à l’âge, au parcours ou aux stéréotypes implicites.</p>
  <span class="wiki-badge">Gain de temps : élevé</span>
</div>

</div>

---

## Prompt modèle (Framework CROFT)

Ce modèle de prompt sert à analyser et améliorer une offre d’emploi avant publication.

```text
CONTEXTE :
Je suis responsable RH dans une entreprise du secteur [indiquer le secteur].
Je souhaite réviser une offre d’emploi pour la rendre plus claire, attractive et inclusive.

RÔLE :
Agis comme un expert en recrutement, communication RH et rédaction inclusive.

OBJECTIF :
Analyse le texte ci-dessous, signale les biais ou formulations à risque,
puis propose une version améliorée.

CONTRAINTES :
- Ne pas modifier le niveau réel d’expérience requis ni la rémunération.
- Éliminer les stéréotypes liés à l’âge, au genre ou au profil type.
- Utiliser des termes clairs et un ton engageant.
- Signaler les formulations corrigées et expliquer pourquoi.

FORMAT :
1. Liste des points de vigilance repérés.
2. Proposition d’offre révisée :
   - Intitulé
   - Missions
   - Profil recherché
   - Avantages

TEXTE DE L’OFFRE (ANONYMISÉ) :
"[Coller ici le texte de l’offre]"
```

---

## Vigilance sur les données RH

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter absolument</h3>

Ne jamais envoyer dans une IA des données nominatives ou sensibles comme :

- les noms, prénoms ou coordonnées de candidats ou de collaborateurs ;
- les montants de rémunération individuels, fiches de paie ou avantages personnalisés ;
- les données de santé, arrêts maladie ou informations liées au handicap ;
- les évaluations individuelles, comptes rendus d’entretien ou appréciations nominatives ;
- les dossiers disciplinaires, conflits internes ou procédures de départ.
</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe : anonymiser et relire</h3>

Pour tout usage RH de l’IA :

- masquer systématiquement les données personnelles avant tout envoi ;
- remplacer les éléments identifiants par des repères neutres comme `[Candidat A]`, `[Collaborateur B]` ou `[Poste X]` ;
- relire le résultat avec un regard juridique, humain et métier avant toute diffusion ou décision.
</div>

---

## Rendre une offre plus inclusive

<div class="real-life-box" markdown="block">
<h3>🧩 Exemple de vigilance</h3>

Une offre d’emploi peut exclure sans le vouloir si elle :

- utilise un vocabulaire stéréotypé ou trop agressif ;
- liste trop d’exigences secondaires ;
- emploie du jargon difficile à comprendre ;
- laisse entendre un profil type lié à l’âge, au genre ou au parcours.

L’IA peut aider à repérer ces signaux, mais la validation finale reste humaine.
</div>

---

## Checklist de validation RH

<div class="summary-box" markdown="block">
<h3>Avant de diffuser ou d’utiliser un document RH généré avec l’IA</h3>

1. Le document respecte-t-il les obligations légales et les règles internes applicables ?
2. Toutes les données personnelles ou sensibles ont-elles été retirées avant l’échange avec l’IA ?
3. La décision finale est-elle bien prise, expliquée et assumée par un humain ?
</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../">Vue d’ensemble des cas pratiques ➔</a>
  <a class="wiki-button" href="./communication/">⬅️ Cas précédent : Communication</a>
</div>
