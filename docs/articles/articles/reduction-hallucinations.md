# 🛡️ Réduire les hallucinations & Garantir la factualité de l'IA

Pourquoi les modèles de langage inventent-ils parfois des références bibliographiques, des dates ou des faits historiques avec une assurance déconcertante ?

Ce phénomène s'appelle une **hallucination**. Il ne s'agit pas d'un "bug", mais du fonctionnement intrinsèque des LLM : ils prédisent statistiquement le mot suivant le plus probable, sans vérifier si ce mot correspond à une vérité scientifique ou historique.

---

## 🔍 1. Comprendre pourquoi l'IA hallucine

Les LLM ne sont pas des moteurs de recherche : ce sont des **moteurs de plausibilité**.

> **À garder en tête :**
> L'IA cherche à générer un texte qui *a l'air vrai* et fluide, plutôt qu'à vérifier une source factuelle autonome.

Les 3 causes majeures d'hallucination :
* **Manque de contexte :** Le prompt est trop flou, l'IA "comble les trous" avec de l'imagination.
* **Complexité / Raisonnement poussé :** Une question trop directe sans étape de réflexion intermédiaire.
* **Pression de réponse :** L'absence d'une porte de sortie explicite (ex: *"si tu ne sais pas, dis-le"*).

---

## 📊 2. Comparatif des techniques Anti-Hallucination

| Technique | Niveau d'effort | Réduction des erreurs |
| :--- | :--- | :--- |
| **Consigne d'incertitude** (*"Si inconnu, réponds N/A"*) | Faible | ~40% |
| **Génération ancrée / RAG** (Injecter le document source) | Moyen | ~85% |
| **Chain-of-Thought** (Forcer la justification pas à pas) | Moyen | ~60% |
| **Double vérification automatisée** (Self-Consistency) | Élevé | ~90% |

---

## 🛠️ 3. Les 4 règles d'or du Prompt Factuel

1. **Donnez la permission d'ignorer :** Ajoutez toujours : *"Si l'information n'est pas présente dans le texte ou si tu as un doute, réponds 'Information non disponible' au lieu de deviner."*
2. **Injectez vos propres sources (RAG) :** Au lieu de demander *"Qui est le directeur de l'entreprise X en 2026 ?"*, fournissez l'organigramme exact dans le prompt.
3. **Séparez le fait de l'analyse :** Demandez d'abord d'extraire les citations exactes du texte source avant de formuler une conclusion.
4. **Vérifiez les dates et les chiffres :** Traitez toujours les calculs et les citations précises comme nécessitant une validation humaine.

---

## 🧪 Laboratoire : Testez l'impact du cadrage sur les hallucinations

<div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top:0; color: #1e293b; display: flex; align-items: center; gap: 8px;">
    🧪 <span>Simulateur : Taux de risque d'hallucination</span>
  </h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 16px;">
    Cochez les garde-fous ajoutés à votre prompt pour voir chuter le risque d'hallucination.
  </p>

  <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9em; color: #334155;">
      <input type="checkbox" id="chk1" onchange="updateRiskCalc()" style="width: 18px; height: 18px; cursor: pointer;">
      <strong>Consigne de secours :</strong> Autoriser l'IA à dire "Je ne sais pas".
    </label>
    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9em; color: #334155;">
      <input type="checkbox" id="chk2" onchange="updateRiskCalc()" style="width: 18px; height: 18px; cursor: pointer;">
      <strong>Ancrage (RAG) :</strong> Fournir le document source directement dans le prompt.
    </label>
    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9em; color: #334155;">
      <input type="checkbox" id="chk3" onchange="updateRiskCalc()" style="width: 18px; height: 18px; cursor: pointer;">
      <strong>Citation obligatoire :</strong> Demander à l'IA de citer la phrase exacte source.
    </label>
  </div>

  <div style="background: #f8fafc; padding: 16px; border-radius: 8px; text-align: center; border: 1px solid #cbd5e1;">
    <div style="font-size: 0.8em; color: #64748b; font-weight: 600; text-transform: uppercase;">Niveau de risque d'hallucination estimé</div>
    <div id="riskScore" style="font-size: 1.8em; font-weight: bold; color: #dc2626; margin: 6px 0;">Élevé (85%)</div>
    <div id="riskMessage" style="font-size: 0.85em; color: #475569;">Prompt trop ouvert : l'IA va inventer pour combler le manque de faits.</div>
  </div>
</div>

<script>
function updateRiskCalc() {
  const c1 = document.getElementById("chk1").checked;
  const c2 = document.getElementById("chk2").checked;
  const c3 = document.getElementById("chk3").checked;

  let score = 85;
  if (c1) score -= 25;
  if (c2) score -= 40;
  if (c3) score -= 15;

  const scoreEl = document.getElementById("riskScore");
  const msgEl = document.getElementById("riskMessage");

  if (score > 60) {
    scoreEl.textContent = `Élevé (${score}%)`;
    scoreEl.style.color = "#dc2626";
    msgEl.textContent = "Prompt trop ouvert : l'IA va inventer pour combler le manque de faits.";
  } else if (score > 25) {
    scoreEl.textContent = `Modéré (${score}%)`;
    scoreEl.style.color = "#d97706";
    msgEl.textContent = "Bon encadrement, mais attention aux détails non documentés.";
  } else {
    scoreEl.textContent = `Très faible (${score}%)`;
    scoreEl.style.color = "#16a34a";
    msgEl.textContent = "Excellent ! L'IA est étroitement bridée par vos sources et consignes.";
  }
}
</script>

---

## 🧩 Mini-Quiz : Teste tes réflexes

<div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0;">
  <h3 style="margin-top:0; color: #1e293b;">🧩 Question Flash</h3>
  <p id="quizQuestion" style="font-weight: 600; font-size: 0.95em; color: #334155; margin-bottom: 12px;">
    Quelle est la méthode la plus simple et immédiate pour empêcher une IA d'inventer une réponse quand elle ne connaît pas la réponse ?
  </p>

  <div id="quizOptions" style="display: flex; flex-direction: column; gap: 8px;">
    <button onclick="checkQuizAnswer(this, false)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      A) Lui demander poliment d'être très honnête et de faire très attention.
    </button>
    <button onclick="checkQuizAnswer(this, true)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      B) Lui donner une consigne de secours explicite (ex: "Si l'information est absente, réponds 'Inconnu'").
    </button>
    <button onclick="checkQuizAnswer(this, false)" style="text-align: left; background: white; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 0.9em; transition: all 0.2s;">
      C) Augmenter la longueur du prompt pour lui donner plus d'espace d'écriture.
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
    feedback.innerHTML = "✅ Correct ! Offrir une 'issue de secours' élimine la pression qui pousse le modèle à fabriquer une réponse plausible.";
  } else {
    btn.style.background = "#fee2e2";
    btn.style.borderColor = "#ef4444";
    feedback.style.color = "#b91c1c";
    feedback.innerHTML = "❌ Dommage ! La bonne réponse est la B : sans porte de sortie explicite, le modèle va préférer inventer une réponse plausible que d'avouer son ignorance.";
  }
}
</script>

---

!!! tip "💡 À retenir"
    Ne faites jamais confiance aveuglément aux faits bruts fournis par une IA sans source fournie par vos soins. L'ancrage documentaire est la meilleure arme anti-hallucination !
