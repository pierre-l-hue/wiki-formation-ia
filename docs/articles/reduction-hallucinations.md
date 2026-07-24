# Réduire les hallucinations et garantir la factualité de l’IA

*Comprendre pourquoi une IA peut inventer des faits et comment limiter ce risque dans la pratique.*

<div class="summary-box" markdown="block">
<h3>🎯 Ce que cette page apporte</h3>

- comprendre pourquoi un LLM peut produire une réponse fausse mais plausible ;
- repérer les principales causes d’hallucination ;
- appliquer des garde-fous simples dans les prompts ;
- tester l’effet du cadrage sur le niveau de risque.
</div>

---

## 1. Comprendre pourquoi l’IA hallucine

Les LLM ne sont pas des moteurs de recherche.  
Ce sont avant tout des **moteurs de plausibilité** : ils produisent la suite de texte la plus probable, sans vérifier automatiquement la vérité du contenu. [web:94]

<div class="warning-practice-box" markdown="block">
<h3>🛑 À garder en tête</h3>

L’IA cherche d’abord à générer un texte qui **semble vrai** et fluide.

Sans source fiable ou sans garde-fou clair, elle peut donc :
- inventer une référence ;
- se tromper sur une date ;
- affirmer un fait inexact avec assurance.
</div>

### Les 3 causes majeures d’hallucination

<div class="wiki-grid">

<div class="wiki-card" markdown="block">
<h3>Manque de contexte</h3>

Si le prompt est trop flou, l’IA comble les trous avec ce qui lui paraît plausible.
</div>

<div class="wiki-card" markdown="block">
<h3>Question complexe</h3>

Une demande difficile, sans étapes intermédiaires, augmente le risque d’erreur ou de saut logique.
</div>

<div class="wiki-card" markdown="block">
<h3>Absence de porte de sortie</h3>

Si on ne lui permet pas de dire qu’elle ne sait pas, l’IA peut préférer inventer une réponse plutôt que rester incomplète.
</div>

</div>

---

## 2. Comparatif des techniques anti-hallucination

| Technique | Niveau d’effort | Réduction des erreurs |
| :--- | :--- | :--- |
| **Consigne d’incertitude** | Faible | ~40% |
| **Génération ancrée / RAG** | Moyen | ~85% |
| **Chain-of-Thought** | Moyen | ~60% |
| **Double vérification automatisée** | Élevé | ~90% |

<div class="good-reflex-box" markdown="block">
<h3>✅ Bon réflexe</h3>

Quand l’enjeu est important, la meilleure protection reste l’**ancrage documentaire** :
- fournir le texte source ;
- demander des citations exactes ;
- distinguer clairement le fait, l’interprétation et la conclusion.
</div>

---

## 3. Les 4 règles d’or du prompt factuel

<div class="wiki-grid">

<div class="wiki-card" markdown="block">
<h3>1. Autoriser l’incertitude</h3>

Ajouter une consigne explicite du type :

`Si l’information est absente ou incertaine, réponds "Information non disponible" au lieu de deviner.`
</div>

<div class="wiki-card" markdown="block">
<h3>2. Fournir les sources</h3>

Injecter le document ou l’extrait de référence directement dans le prompt pour limiter l’invention.
</div>

<div class="wiki-card" markdown="block">
<h3>3. Séparer fait et analyse</h3>

Demander d’abord l’extraction des éléments exacts, puis seulement ensuite une interprétation ou une conclusion.
</div>

<div class="wiki-card" markdown="block">
<h3>4. Vérifier chiffres et dates</h3>

Tout ce qui touche aux calculs, montants, références ou citations précises doit être relu et validé humainement.
</div>

</div>

---

## 4. Laboratoire : testez le niveau de risque

<div class="wiki-card" markdown="block">
<h3>Simulateur : risque d’hallucination</h3>

Coche les garde-fous ajoutés à ton prompt pour voir comment le risque diminue.
</div>

<div class="prompt-generator hallucination-risk-calculator">
  <label><input type="checkbox" id="chk1"> Consigne de secours : autoriser l’IA à dire « Je ne sais pas »</label>
  <label><input type="checkbox" id="chk2"> Ancrage documentaire : fournir la source dans le prompt</label>
  <label><input type="checkbox" id="chk3"> Citation obligatoire : demander la phrase exacte source</label>

  <div id="riskBox" class="warning-practice-box" style="margin-top: 18px;">
    <h3 id="riskScore">Risque élevé (85%)</h3>
    <p id="riskMessage">Prompt trop ouvert : l’IA risque d’inventer pour combler le manque de faits.</p>
  </div>
</div>

---

## 5. Mini-quiz

<div class="wiki-card" markdown="block">
<h3>Question flash</h3>

Quelle est la méthode la plus simple et immédiate pour empêcher une IA d’inventer une réponse quand elle ne connaît pas la réponse ?
</div>

<div class="prompt-generator hallucination-quiz">
  <div id="quizOptions" style="display: grid; gap: 10px;">
    <button type="button" class="wiki-button" data-correct="false">
      A) Lui demander poliment d’être très honnête et de faire très attention.
    </button>

    <button type="button" class="wiki-button" data-correct="true">
      B) Lui donner une consigne de secours explicite, par exemple : « Si l’information est absente, réponds Inconnu ».
    </button>

    <button type="button" class="wiki-button" data-correct="false">
      C) Augmenter la longueur du prompt pour lui donner plus d’espace d’écriture.
    </button>
  </div>

  <div id="quizFeedback" class="summary-box" style="display: none; margin-top: 16px;"></div>
</div>

---

<div class="summary-box" markdown="block">
<h3>💡 À retenir</h3>

Ne pas faire confiance aveuglément aux faits bruts produits par une IA.

Pour réduire les hallucinations :
- cadrer clairement ;
- autoriser l’IA à ne pas savoir ;
- fournir les sources ;
- vérifier les éléments sensibles avant diffusion.
</div>
