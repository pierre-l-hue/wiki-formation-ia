# Quiz final combiné H1 à H7

<!-- ==================================================== -->
<!-- DEBUT DU JEU : QUIZ FINAL COMBINÉ (H1 à H7)          -->
<!-- ==================================================== -->

<div style="background: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0; color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

  <p style="font-size: 14px; color: #555; margin-top: 0; margin-bottom: 16px;">
    14 questions piochées dans les 7 séances, pour un bilan avant votre oral de certification :
  </p>

  <div id="quizfinal-progress" style="font-size: 13px; color: #777; margin-bottom: 8px;"></div>

  <div id="quizfinal-question" style="font-size: 16px; font-weight: 600; min-height: 48px; padding: 14px 16px; background: #f5f7fa; border: 1px solid #d5d9de; border-radius: 8px; margin-bottom: 18px; color: #1a1a1a; line-height: 1.5; display: flex; align-items: center;"></div>

  <div id="quizfinal-choices" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;"></div>

  <div id="quizfinal-feedback" style="display: none; margin-top: 16px; padding: 14px 16px; border-radius: 8px; font-size: 14px; line-height: 1.4;"></div>

  <div style="display: flex; gap: 10px; margin-top: 14px;">
    <button type="button" id="quizfinal-next" style="display: none; padding: 8px 16px; border: 1px solid #999; border-radius: 6px; background: #ffffff; cursor: pointer; font-size: 13px; color: #1a1a1a;">Question suivante</button>
    <button type="button" id="quizfinal-restart" style="display: none; padding: 8px 16px; border: 1px solid #1a5fb4; border-radius: 6px; background: #1a5fb4; color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 600;">Recommencer le quiz</button>
  </div>

  <div id="quizfinal-score" style="display: none; margin-top: 18px; padding: 16px; background: #eef4fb; border: 1px solid #b8d3ec; border-radius: 8px; font-size: 16px; font-weight: 600; text-align: center; color: #1a5fb4;"></div>

</div>

<script>
(function() {
  const questions = [
    { module: "H1", situation: "Quelle méthode combine Rôle, Objectif, Format, Ton ?", options: ["ROFT", "SOCRATE", "TLDR", "FALC"], correct: 0, explain: "ROFT est le cadre de base pour une demande simple et directe." },
    { module: "H1", situation: "Quelle est une limite connue de l'IA générative ?", options: ["Elle ne fait jamais d'erreur", "Elle peut halluciner des informations", "Elle comprend toujours l'intention exacte", "Elle est toujours connectée à internet"], correct: 1, explain: "L'IA peut inventer des informations qui semblent vraies : toujours vérifier." },
    { module: "H2", situation: "Quel outil s'appuie uniquement sur vos documents pour répondre ?", options: ["ChatGPT", "NotebookLM", "Napkin", "Remove.bg"], correct: 1, explain: "NotebookLM analyse uniquement les sources que vous lui donnez, contrairement à une IA généraliste." },
    { module: "H2", situation: "Qu'est-ce qu'un Gem ?", options: ["Un format d'image", "Un assistant IA personnalisé réutilisable", "Un code de simplification", "Un niveau de risque IA Act"], correct: 1, explain: "Un Gem mémorise un rôle, un contexte et un ton une fois pour toutes." },
    { module: "H3", situation: "Quelle méthode ajoute un Contexte à ROFT ?", options: ["FAI", "CROFT", "TLDR", "Reverse prompting"], correct: 1, explain: "CROFT = Contexte + Rôle + Objectif + Format + Ton." },
    { module: "H3", situation: "Quand utiliser la méthode FAI ?", options: ["Pour un blocage complexe", "Pour une demande urgente et rapide", "Pour une personnalisation fine", "Pour un cadrage à 7 éléments"], correct: 1, explain: "FAI (Formule, Action, Intention) va droit au but pour les demandes simples." },
    { module: "H4", situation: "Combien d'éléments composent un bon prompt visuel ?", options: ["3", "4", "5", "7"], correct: 2, explain: "Principal, Style, Ambiance, Couleurs, Composition/Format." },
    { module: "H4", situation: "Quel est le risque d'un prompt visuel trop vague ?", options: ["Résultats incohérents et aléatoires", "Trop de style", "Prompt trop long", "Aucun risque"], correct: 0, explain: "Sans détails précis, chaque génération donne un résultat différent et imprévisible." },
    { module: "H5", situation: "Que faut-il faire avant de coller une donnée dans une IA gratuite ?", options: ["Rien de spécial", "Vérifier si elle est sensible et l'anonymiser si besoin", "La chiffrer soi-même", "L'envoyer en plusieurs fois"], correct: 1, explain: "Anonymiser (Client A, 75000€...) réduit fortement le risque de fuite." },
    { module: "H5", situation: "Quel type d'IA présente le risque le plus faible pour les données sensibles ?", options: ["IA gratuite grand public", "IA locale", "Réseau social", "Moteur de recherche"], correct: 1, explain: "Une IA locale garde les données sur votre machine, sans passer par le cloud d'un fournisseur." },
    { module: "H6", situation: "Quel est le but de la checklist accessibilité ?", options: ["Rendre le contenu utilisable par le plus grand nombre", "Ajouter plus de jargon technique", "Réduire le texte au strict minimum", "Utiliser uniquement des images"], correct: 0, explain: "Phrases courtes, structure claire, bon contraste : utile à tous, pas seulement à un public spécifique." },
    { module: "H7", situation: "Que reporte le Digital Omnibus (juin 2026) ?", options: ["Toutes les obligations de l'IA Act", "Les obligations « haut risque » à décembre 2027", "Les sanctions financières", "Rien du tout"], correct: 1, explain: "Seules les obligations haut risque sont reportées ; transparence et sanctions restent applicables au 2 août 2026." },
    { module: "H7", situation: "Quel est le premier réflexe face à une réponse IA suspecte de biais ?", options: ["La diffuser telle quelle", "Demander un audit de biais à l'IA", "L'ignorer", "Supprimer la conversation"], correct: 1, explain: "Un prompt d'audit permet de détecter et corriger une généralisation avant diffusion." }
  ];

  let i = 0;
  let scoreCount = 0;

  const progress = document.getElementById('quizfinal-progress');
  const situationEl = document.getElementById('quizfinal-question');
  const choicesEl = document.getElementById('quizfinal-choices');
  const feedback = document.getElementById('quizfinal-feedback');
  const nextBtn = document.getElementById('quizfinal-next');
  const restartBtn = document.getElementById('quizfinal-restart');
  const scoreEl = document.getElementById('quizfinal-score');

  if (!situationEl || !choicesEl) return;

  function render() {
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    scoreEl.style.display = 'none';

    progress.textContent = "Question " + (i + 1) + " sur " + questions.length + " — module " + questions[i].module;
    situationEl.textContent = questions[i].situation;
    choicesEl.innerHTML = '';

    questions[i].options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.style.cssText = "text-align: left; padding: 12px 14px; border: 1px solid #d5d5d5; border-radius: 8px; background: #ffffff; cursor: pointer; font-size: 14px; color: #1a1a1a; width: 100%; transition: filter 0.2s;";
      btn.textContent = opt;
      btn.addEventListener('mouseenter', () => btn.style.filter = "brightness(0.95)");
      btn.addEventListener('mouseleave', () => btn.style.filter = "brightness(1)");
      btn.addEventListener('click', () => answer(idx, btn));
      choicesEl.appendChild(btn);
    });
  }

  function answer(idx, btn) {
    const q = questions[i];
    const allBtns = choicesEl.querySelectorAll('button');
    allBtns.forEach((b, bIdx) => {
      b.disabled = true;
      b.style.cursor = "default";
      b.style.filter = "none";
      if (bIdx === q.correct) {
        b.style.background = "#e6f4ea";
        b.style.borderColor = "#4a9b5e";
        b.style.color = "#1e4620";
      }
    });

    if (idx === q.correct) {
      feedback.style.background = "#e6f4ea";
      feedback.style.border = "1px solid #a8d5b5";
      feedback.style.color = "#1e4620";
      feedback.textContent = "Exact. " + q.explain;
      scoreCount++;
    } else {
      btn.style.background = "#fbe9e7";
      btn.style.borderColor = "#c9564a";
      btn.style.color = "#6b241d";
      feedback.style.background = "#fbe9e7";
      feedback.style.border = "1px solid #e3b3ac";
      feedback.style.color = "#6b241d";
      feedback.textContent = "Pas tout à fait. " + q.explain;
    }
    feedback.style.display = 'block';

    if (i < questions.length - 1) {
      nextBtn.style.display = 'inline-block';
    } else {
      scoreEl.style.display = 'block';
      scoreEl.textContent = "Score final : " + scoreCount + " / " + questions.length;
    }
  }

  nextBtn.addEventListener('click', () => { i++; render(); });
  restartBtn.addEventListener('click', () => { i = 0; scoreCount = 0; render(); });

  render();
})();
</script>

<!-- ==================================================== -->
<!-- FIN DU JEU                                            -->
<!-- ==================================================== -->
