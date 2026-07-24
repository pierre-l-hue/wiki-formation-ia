# Fenêtre de contexte & mémoire de l’IA

*Comprendre pourquoi l’IA peut perdre le fil d’une discussion et comment limiter cet effet.*

<div class="summary-box" markdown="block">
<h3>🎯 Ce que cette page explique</h3>

- ce qu’est la fenêtre de contexte ;
- pourquoi une IA peut oublier une partie de l’échange ;
- comment mieux structurer une session longue ;
- comment estimer l’impact d’un document sur la mémoire de travail d’un modèle.
</div>

---

## 1. Qu’est-ce que la fenêtre de contexte ?

### La métaphore de la mémoire à court terme

La fenêtre de contexte peut être comparée à une **mémoire de travail**.  
C’est la quantité maximale d’informations que l’IA peut garder en tête à un instant donné pour produire sa réponse.

Ces informations peuvent inclure :
- vos prompts ;
- l’historique de la conversation ;
- des documents ;
- du code ;
- parfois des images ou d’autres contenus selon l’outil.

<div class="wiki-card" markdown="block">
<h3>Repère simple</h3>

La taille du contexte est souvent mesurée en **tokens**.

En pratique, on retient souvent qu’**1 token représente environ 0,75 mot en français**.
</div>

> **Schéma du flux**  
> Entrée (prompts + documents + historique) → **fenêtre de contexte** → sortie (réponse)

Si le volume total dépasse la capacité maximale :
- l’IA peut écarter les messages les plus anciens ;
- elle peut perdre des consignes données au début ;
- elle peut répondre de façon moins cohérente.

---

## 2. Comparatif des capacités

| Modèle | Fenêtre de contexte | Équivalent en texte |
| :--- | :--- | :--- |
| **GPT-4o** | ~128 000 tokens | ~300 pages de livre |
| **Claude 3.5 / 3.7** | ~200 000 tokens | ~500 pages de livre |
| **Gemini 1.5 Pro** | ~2 000 000 tokens | ~4 000 pages / 1h de vidéo |

<div class="warning-practice-box" markdown="block">
<h3>🛑 Point de vigilance</h3>

Ce n’est pas parce qu’un modèle accepte un très gros volume qu’il traite tout avec la même attention.

Les LLM ont souvent tendance à mieux retenir :
- le **début** du contexte ;
- la **fin** du contexte ;
- et à moins bien exploiter certains éléments situés **au milieu**.
</div>

---

## 3. Bonnes pratiques pour éviter la perte de mémoire

<div class="wiki-grid">

<div class="wiki-card" markdown="block">
<h3>Un chat = une tâche</h3>

Évitez de mélanger plusieurs projets dans une même discussion.

Une conversation claire donne souvent de meilleurs résultats qu’un fil trop long et trop hétérogène.
</div>

<div class="wiki-card" markdown="block">
<h3>Faire des résumés intermédiaires</h3>

Quand la session devient longue, demandez un résumé des décisions prises.

Vous pouvez ensuite repartir dans un nouveau chat avec ce résumé comme base.
</div>

<div class="wiki-card" markdown="block">
<h3>Rappeler les consignes critiques</h3>

Les contraintes importantes peuvent être répétées ou replacées à la fin du prompt :
- format attendu ;
- ton ;
- consignes de sécurité ;
- critères de sortie.
</div>

</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Bon réflexe</h3>

Si vous sentez que l’IA “perd le fil”, ne luttez pas dans le même échange.

Faites un résumé propre, puis redémarrez une nouvelle conversation avec :
- l’objectif ;
- le contexte utile ;
- les décisions déjà prises ;
- le livrable attendu.
</div>

---

## 4. Simulateur : tokens et volume de texte

<div class="wiki-card" markdown="block">
<h3>À quoi sert ce simulateur ?</h3>

Il permet d’estimer l’effet d’un document sur une fenêtre de contexte standard de **128k tokens**.
</div>

<div class="prompt-generator context-window-calculator">
  <label for="pageSlider">Nombre de pages A4 de texte à injecter : <span id="pageVal">10</span> pages</label>
  <input type="range" id="pageSlider" min="1" max="300" value="10">

  <div class="wiki-grid">
    <div class="wiki-card">
      <h3>Mots estimés</h3>
      <p id="wordCalc">5 000</p>
    </div>

    <div class="wiki-card">
      <h3>Tokens estimés</h3>
      <p id="tokenCalc">6 666</p>
    </div>

    <div class="wiki-card">
      <h3>Contexte utilisé</h3>
      <p id="contextCalc">5.2% (de 128k)</p>
    </div>
  </div>
</div>

---

## 5. Mini-quiz

<div class="wiki-card" markdown="block">
<h3>Question flash</h3>

Que se passe-t-il lorsque votre discussion dépasse la taille maximale de la fenêtre de contexte de l’IA ?
</div>

<div class="prompt-generator context-quiz">
  <div id="quizOptions" class="wiki-actions" style="display: grid; gap: 10px;">
    <button type="button" class="wiki-button" data-correct="false">
      A) L’IA refuse de répondre et affiche un message d’erreur définitif.
    </button>

    <button type="button" class="wiki-button" data-correct="true">
      B) L’IA oublie progressivement les premiers messages pour faire de la place.
    </button>

    <button type="button" class="wiki-button" data-correct="false">
      C) L’IA compresse automatiquement tout le texte sans aucune perte d’information.
    </button>
  </div>

  <div id="quizFeedback" class="summary-box" style="display: none; margin-top: 16px;"></div>
</div>

---

<div class="summary-box" markdown="block">
<h3>💡 À retenir</h3>

Pour les tâches longues :
- travaillez par étapes ;
- évitez les fils trop chargés ;
- résumez régulièrement ;
- ouvrez une nouvelle conversation dès que le sujet change vraiment.
</div>
