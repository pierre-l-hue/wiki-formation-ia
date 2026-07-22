# 🧠 Fenêtre de contexte & Mémoire de l'IA : Comment éviter la "perte de mémoire"

Pourquoi l'IA oublie-t-elle le début de votre discussion après un certain temps ? Pourquoi invente-t-elle parfois des faits ou répond-elle à côté ?

Tout s'explique par une notion fondamentale en *Prompt Engineering* : la **Fenêtre de Contexte** (*Context Window*) et les mécanismes de gestion de la mémoire.

---

## 📏 1. Qu'est-ce que la fenêtre de contexte ?

### La métaphore de la mémoire à court terme
Imaginez la fenêtre de contexte comme la **mémoire de travail** d'un humain. C'est la quantité maximale d'informations (texte, code, images, historique de conversation) que l'IA peut "garder en tête" à un instant T pour générer sa réponse.

Cette taille est mesurée en **Tokens** (1 token ≈ 0,75 mot en français).

> **Schéma du flux :**
> Entrée (Vos prompts + Documents + Historique) ➔ **[ FENÊTRE DE CONTEXTE ]** ➔ Sortie (Réponse)

Si le volume total dépasse la capacité maximale :
* L'IA **supprime les messages les plus anciens** de la discussion.
* Elle perd le fil de vos instructions initiales ou du rôle défini au tout début.

---

## 📊 2. Comparatif des capacités actuelles

| Modèle | Fenêtre de contexte | Équivalent en texte |
| :--- | :--- | :--- |
| **GPT-4o** | ~128 000 tokens | ~300 pages de livre |
| **Claude 3.5 / 3.7** | ~200 000 tokens | ~500 pages de livre |
| **Gemini 1.5 Pro** | ~2 000 000 tokens | ~4 000 pages / 1h de vidéo |

> ⚠️ **Le piège de "l'Aiguille dans la botte de foin" (*Needle in a Haystack*) :** 
> Ce n'est pas parce qu'un modèle accepte 100 pages qu'il lit tout avec une attention égale ! Les LLM ont tendance à très bien retenir le **début** et la **fin** d'un long contexte, mais à négliger les détails situés au **milieu**.

---

## 🛠️ 3. Bonnes pratiques pour gérer la mémoire de vos sessions

Pour éviter que votre assistant ne se fatigue ou ne perde le fil :

1. **Un chat = Une tâche spécifique :** Ne mélangez pas plusieurs projets dans la même discussion.
2. **Formulez des résumés intermédiaires :** Quand une session s'allonge, demandez : *"Synthétise nos décisions jusqu'ici sous forme de bullet points."* Puis ouvrez une nouvelle session avec ce résumé.
3. **Mettez les consignes critiques à la fin :** Placez vos exigences de format ou contraintes strictes tout en bas de votre prompt.

---

## 🧮 Simulateur : Estimez l'usage de la fenêtre de contexte

<div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top:0; color: #1e293b; display: flex; align-items: center; gap: 8px;">
    🧮 <span>Simulateur : Tokens & Volume de texte</span>
  </h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    Ajustez le curseur pour visualiser l'impact d'un document sur la mémoire de travail d'un modèle standard (128k tokens).
  </p>

  <div style="margin: 20px 0;">
    <label style="font-weight: 600; font-size: 0.9em; color: #334155;">
      Nombre de pages A4 de texte à injecter : <span id="pageVal" style="color: #2563eb; font-size: 1.1em; font-weight: bold;">10</span> pages
    </label>
    <input type="range" id="pageSlider" min="1" max="300" value="10" oninput="updateTokenCalc()" style="width: 100%; margin-top: 10px; cursor: pointer;">
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-top: 15px;">
    <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; text-align: center;">
      <div style="font-size: 0.75em; color: #64748b; font-weight: 600;">MOTS ESTIMÉS</div>
      <div id="wordCalc" style="font-size: 1.2em; font-weight: bold; color: #0f172a;">5 000</div>
    </div>
    <div style="background: #eff6ff; padding: 12px; border-radius: 8px; text-align: center;">
      <div style="font-size: 0.75em; color: #1d4ed8; font-weight: 600;">TOKENS ESTIMÉS</div>
      <div id="tokenCalc" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">6 666</div>
    </div>
    <div style="background: #f0fdf4; padding: 12px; border-radius: 8px; text-align: center;">
      <div style="font-size: 0.75em; color: #15803d; font-weight: 600;">CONTEXTE UTILISÉ</div>
      <div id="contextCalc" style="font-size: 1.2em; font-weight: bold; color: #166534;">5.2%</div>
    </div>
  </div>
</div>

<script>
function updateTokenCalc() {
  const pages = parseInt(document.getElementById("pageSlider").value);
  const words = pages * 500;
  const tokens = Math.round(words * 1.33);
  const contextLimit = 128000;
  const percent = ((tokens / contextLimit) * 100).toFixed(1);

  document.getElementById("pageVal").textContent = pages;
  document.getElementById("wordCalc").textContent = words.toLocaleString();
  document.getElementById("tokenCalc").textContent = tokens.toLocaleString();
  document.getElementById("contextCalc").textContent = `${percent}% (de 128k)`;
}
</script>

---

## 🧩 Mini-Quiz : Teste tes réflexes

<div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0;">
  <h3 style="margin-top:0; color: #1e293b;">🧩 Question Flash</h3>
  <p id="quizQuestion" style="font-weight: 600; font-size: 0.95em; color: #334155; margin-bottom: 12px;">
    Que se passe-t-il lorsque votre discussion dépasse la taille maximale de la fenêtre de contexte de l'IA ?
  </p>

  <div id="quizOptions" style="display: flex; flex-direction: column; gap: 8px;">
    <button onclick="checkQuizAnswer(this, false)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      A) L'IA refuse de répondre et affiche un message d'erreur définitif.
    </button>
    <button onclick="checkQuizAnswer(this, true)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      B) L'IA "oublie" silencieusement les premiers messages de la conversation pour faire de la place.
    </button>
    <button onclick="checkQuizAnswer(this, false)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      C) L'IA compresse automatiquement tout le texte sans aucune perte d'information.
    </button>
  </div>

  <div id="quizFeedback" style="margin-top: 12px; display: none; font-weight: 600; font-size: 0.9em;"></div>
</div>

<script>
function checkQuizAnswer(btn, isCorrect) {
  const feedback = document.getElementById("quizFeedback");
  const buttons = document.querySelectorAll("#quizOptions button");
  
  buttons.forEach(b => {
    b.disabled = true;
    b.style.opacity = "0.6";
  });

  btn.style.opacity = "1";
  feedback.style.display = "block";

  if (isCorrect) {
    btn.style.background = "#dcfce7";
    btn.style.borderColor = "#22c55e";
    feedback.style.color = "#15803d";
    feedback.innerHTML = "✅ Correct ! Les messages les plus anciens glissent hors de la fenêtre de mémoire, d'où l'intérêt d'ouvrir un nouveau chat pour chaque projet.";
  } else {
    btn.style.background = "#fee2e2";
    btn.style.borderColor = "#ef4444";
    feedback.style.color = "#b91c1c";
    feedback.innerHTML = "❌ Dommage ! La bonne réponse est la B : l'IA supprime progressivement l'historique le plus ancien.";
  }
}
</script>

---

!!! tip "💡 À retenir"
    Pour les tâches longues, privilégiez le travail par étapes et n'hésitez pas à démarrer une nouvelle conversation dès que le sujet change !
