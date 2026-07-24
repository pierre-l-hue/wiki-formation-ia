# Quiz final — Révision H1 à H7

Ce quiz permet de vérifier vos acquis à la fin du parcours.

Il ne remplace pas les exercices de certification.  
Il sert à identifier les notions à revoir avant de finaliser votre préparation.

!!! tip "Conseil"
    Répondez sans utiliser d’IA.
    
    L’objectif est de savoir quels réflexes sont déjà acquis et lesquels doivent être renforcés.

---

<div id="quiz-final-rs6776" class="quiz-final-rs6776">

  <div id="quizfinal-progress" class="quizfinal-progress"></div>

  <div id="quizfinal-card" class="quizfinal-card">
    <div id="quizfinal-module" class="quizfinal-module"></div>
    <div id="quizfinal-question" class="quizfinal-question"></div>
    <div id="quizfinal-choices" class="quizfinal-choices"></div>
    <div id="quizfinal-feedback" class="quizfinal-feedback" style="display:none;"></div>
  </div>

  <div class="quizfinal-actions">
    <button type="button" id="quizfinal-next" style="display:none;">Question suivante</button>
    <button type="button" id="quizfinal-restart" style="display:none;">Recommencer le quiz</button>
  </div>

  <div id="quizfinal-score" class="quizfinal-score" style="display:none;"></div>
  <div id="quizfinal-revisions" class="quizfinal-revisions" style="display:none;"></div>

</div>

<style>
.quiz-final-rs6776 {
  margin-top: 24px;
}

.quizfinal-progress {
  font-size: 13px;
  font-weight: 700;
  color: #1a5fb4;
  margin-bottom: 12px;
}

.quizfinal-card {
  padding: 20px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 8px;
  background: var(--md-default-bg-color, #fff);
}

.quizfinal-module {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
  background: rgba(26, 95, 180, 0.12);
  color: #1a5fb4;
  margin-bottom: 12px;
}

.quizfinal-question {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 18px;
}

.quizfinal-choices {
  display: grid;
  gap: 10px;
}

.quizfinal-choices button {
  text-align: left;
  padding: 12px 14px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 8px;
  background: var(--md-default-bg-color, #fff);
  color: var(--md-typeset-color, #000);
  cursor: pointer;
  font-size: 14px;
}

.quizfinal-choices button:hover {
  background: rgba(26, 95, 180, 0.08);
}

.quizfinal-choices button.correct {
  border-color: #2e7d32;
  background: rgba(46, 125, 50, 0.14);
}

.quizfinal-choices button.wrong {
  border-color: #c62828;
  background: rgba(198, 40, 40, 0.12);
}

.quizfinal-feedback {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.quizfinal-feedback.ok {
  border: 1px solid #2e7d32;
  background: rgba(46, 125, 50, 0.12);
}

.quizfinal-feedback.ko {
  border: 1px solid #c62828;
  background: rgba(198, 40, 40, 0.10);
}

.quizfinal-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.quizfinal-actions button {
  padding: 10px 16px;
  border: 1px solid #1a5fb4;
  border-radius: 6px;
  background: #1a5fb4;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.quizfinal-score,
.quizfinal-revisions {
  margin-top: 22px;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  background: var(--md-code-bg-color, #f8f9fa);
}

.quizfinal-score h2,
.quizfinal-revisions h2 {
  margin-top: 0;
}

.quizfinal-score-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

.quizfinal-score-table th,
.quizfinal-score-table td {
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  padding: 8px;
  text-align: left;
}

.quizfinal-score-table th {
  background: rgba(26, 95, 180, 0.10);
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Vous demandez à une IA une information récente et chiffrée. Quel est le meilleur réflexe ?",
      options: [
        "La recopier si la réponse est bien formulée",
        "Demander une reformulation plus convaincante",
        "Vérifier l’information avec une source fiable",
        "Supprimer les chiffres pour éviter la vérification"
      ],
      correct: 2,
      explain: "Une IA peut produire une réponse crédible mais fausse. Les chiffres, dates et faits importants doivent être vérifiés.",
      revision: "Révisez H1 : limites de l’IA, hallucinations et vérification humaine."
    },
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Quelle phrase décrit le mieux le rôle de l’IA dans un usage professionnel responsable ?",
      options: [
        "L’IA propose, l’humain cadre, vérifie et valide",
        "L’IA décide seule si le prompt est précis",
        "L’IA remplace la responsabilité du professionnel",
        "L’IA garantit toujours la conformité du résultat"
      ],
      correct: 0,
      explain: "L’IA est une aide à la production. La responsabilité finale reste humaine.",
      revision: "Révisez H1 : rôle de l’humain, limites et responsabilité."
    },
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Avant de choisir un outil IA, quelle est la première question à se poser ?",
      options: [
        "Quel outil est le plus connu ?",
        "Quelle tâche concrète veux-je améliorer ?",
        "Quel outil a le plus beau design ?",
        "Quel outil est utilisé par mes concurrents ?"
      ],
      correct: 1,
      explain: "Une stratégie IA part d’un besoin métier réel, pas d’un outil à la mode.",
      revision: "Révisez H2 : cartographie des tâches et choix des outils."
    },
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Une équipe veut automatiser ses comptes-rendus de réunion. Quelle réponse est la plus professionnelle ?",
      options: [
        "Utiliser directement une IA sans règles, pour aller plus vite",
        "Tout interdire, car l’IA est toujours risquée",
        "Identifier les données présentes, choisir un outil adapté et prévoir une relecture humaine",
        "Publier automatiquement tous les comptes-rendus générés"
      ],
      correct: 2,
      explain: "Il faut tenir compte du besoin, des données, de l’outil et de la validation humaine.",
      revision: "Révisez H2 : stratégie, risques, choix d’outils et supervision."
    },
    {
      module: "H3",
      label: "Prompting",
      question: "Quel prompt est le plus exploitable ?",
      options: [
        "Fais-moi un texte.",
        "Rédige un email de relance client, ton professionnel, maximum 120 mots, avec un objet clair et sans inventer d’information.",
        "Améliore ça.",
        "Écris quelque chose de bien."
      ],
      correct: 1,
      explain: "Le prompt précise l’objectif, le format, le ton et les contraintes.",
      revision: "Révisez H3 : ROFT, CROFT et précision des consignes."
    },
    {
      module: "H3",
      label: "Prompting",
      question: "Quand faut-il demander à l’IA de poser des questions avant de répondre ?",
      options: [
        "Quand la demande est complexe ou incomplète",
        "Uniquement pour créer une image",
        "Jamais, car cela ralentit toujours le travail",
        "Seulement si le texte dépasse 500 mots"
      ],
      correct: 0,
      explain: "Pour une demande complexe, les questions de clarification évitent des réponses hors sujet.",
      revision: "Révisez H3 : prompts avancés et clarification du besoin."
    },
    {
      module: "H4",
      label: "Prompt visuel",
      question: "Quel élément manque le plus dans ce prompt : “Crée une belle image pour mon article” ?",
      options: [
        "Le nom du navigateur",
        "Le nombre de paragraphes",
        "Le sujet, le style, l’ambiance, les couleurs, la composition et le format",
        "Le prix de l’outil"
      ],
      correct: 2,
      explain: "Un prompt visuel efficace décrit précisément l’image attendue.",
      revision: "Révisez H4 : les 5 éléments d’un prompt visuel."
    },
    {
      module: "H4",
      label: "Prompt visuel",
      question: "Pour un visuel professionnel, quelle contrainte est souvent utile ?",
      options: [
        "Ajouter beaucoup de texte dans l’image",
        "Utiliser obligatoirement un logo connu",
        "Demander un visage reconnaissable",
        "Éviter les logos réels, les textes illisibles et les visages identifiables si ce n’est pas nécessaire"
      ],
      correct: 3,
      explain: "Ces contraintes limitent les risques d’usage, de droits ou de rendu inexploitable.",
      revision: "Révisez H4 : prompts image, contraintes et usage professionnel."
    },
    {
      module: "H5",
      label: "Confidentialité",
      question: "Quel contenu ne faut-il pas coller tel quel dans une IA grand public ?",
      options: [
        "Un exemple fictif de mail",
        "Une consigne générale de rédaction",
        "Un email client avec nom, adresse et numéro de contrat",
        "Un texte public déjà publié"
      ],
      correct: 2,
      explain: "Les données personnelles, contractuelles ou confidentielles doivent être supprimées ou anonymisées.",
      revision: "Révisez H5 : données sensibles, RGPD et anonymisation."
    },
    {
      module: "H5",
      label: "Confidentialité",
      question: "Quel est le meilleur réflexe avant d’utiliser l’IA sur un document interne ?",
      options: [
        "Relire le document, retirer les données sensibles et vérifier les règles de confidentialité de l’outil",
        "Coller le document complet pour obtenir une meilleure réponse",
        "Envoyer le document à plusieurs IA pour comparer",
        "Demander à l’IA si le document est confidentiel après l’avoir envoyé"
      ],
      correct: 0,
      explain: "La vigilance doit avoir lieu avant l’envoi du prompt, pas après.",
      revision: "Révisez H5 : protection des données et choix de l’outil."
    },
    {
      module: "H6",
      label: "Accessibilité",
      question: "Quel texte est le plus accessible ?",
      options: [
        "Veuillez procéder à l’exécution diligente des modalités subséquentes.",
        "Les modalités opérationnelles seront implémentées ultérieurement.",
        "Merci de suivre les étapes ci-dessous.",
        "Il conviendra d’envisager les paramètres afférents."
      ],
      correct: 2,
      explain: "La formulation est courte, claire et directement compréhensible.",
      revision: "Révisez H6 : phrases courtes, vocabulaire simple et structure claire."
    },
    {
      module: "H6",
      label: "Accessibilité",
      question: "Quelle demande à l’IA est la plus adaptée pour rendre un texte plus inclusif ?",
      options: [
        "Rends ce texte plus vague.",
        "Réécris ce texte en langage plus compliqué.",
        "Supprime toutes les informations importantes.",
        "Repère les formulations excluantes ou stéréotypées et propose une version plus neutre et respectueuse."
      ],
      correct: 3,
      explain: "L’objectif est de corriger les formulations problématiques sans appauvrir le contenu.",
      revision: "Révisez H6 : accessibilité, inclusion et langage respectueux."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Quel exemple doit déclencher une vigilance éthique forte ?",
      options: [
        "Utiliser une IA pour aider à trier des candidatures",
        "Demander trois idées de titres",
        "Corriger une faute d’orthographe",
        "Résumer un texte public non sensible"
      ],
      correct: 0,
      explain: "Le recrutement peut affecter directement des personnes. Il faut une supervision humaine et une vigilance sur les biais.",
      revision: "Révisez H7 : biais, IA responsable et usages à risque."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Avant de diffuser un contenu généré par IA, quelle vérification est la plus complète ?",
      options: [
        "Vérifier uniquement que le texte est long",
        "Vérifier uniquement qu’il contient des emojis",
        "Vérifier les faits, les biais possibles, le ton et l’adaptation au public",
        "Vérifier uniquement la mise en page"
      ],
      correct: 2,
      explain: "Un contenu responsable doit être exact, adapté, non discriminant et relu par un humain.",
      revision: "Révisez H7 : audit de biais, éthique et validation humaine."
    }
  ];

  let current = 0;
  let score = 0;
  const answersByModule = {};

  const progressEl = document.getElementById("quizfinal-progress");
  const moduleEl = document.getElementById("quizfinal-module");
  const questionEl = document.getElementById("quizfinal-question");
  const choicesEl = document.getElementById("quizfinal-choices");
  const feedbackEl = document.getElementById("quizfinal-feedback");
  const nextBtn = document.getElementById("quizfinal-next");
  const restartBtn = document.getElementById("quizfinal-restart");
  const scoreEl = document.getElementById("quizfinal-score");
  const revisionsEl = document.getElementById("quizfinal-revisions");

  if (!progressEl || !questionEl || !choicesEl) return;

  function initModules() {
    questions.forEach(function (q) {
      if (!answersByModule[q.module]) {
        answersByModule[q.module] = {
          label: q.label,
          total: 0,
          correct: 0,
          revisions: []
        };
      }

      answersByModule[q.module].total += 1;
    });
  }

  function renderQuestion() {
    const q = questions[current];

    progressEl.textContent = "Question " + (current + 1) + " sur " + questions.length;
    moduleEl.textContent = q.module + " — " + q.label;
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    feedbackEl.style.display = "none";
    feedbackEl.className = "quizfinal-feedback";
    nextBtn.style.display = "none";

    q.options.forEach(function (option, index) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = option;

      btn.addEventListener("click", function () {
        answerQuestion(index, btn);
      });

      choicesEl.appendChild(btn);
    });
  }

  function answerQuestion(selectedIndex, selectedButton) {
    const q = questions[current];
    const buttons = choicesEl.querySelectorAll("button");
    const isCorrect = selectedIndex === q.correct;

    buttons.forEach(function (btn, index) {
      btn.disabled = true;

      if (index === q.correct) {
        btn.classList.add("correct");
      }

      if (index === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    if (isCorrect) {
      score += 1;
      answersByModule[q.module].correct += 1;
    } else {
      answersByModule[q.module].revisions.push(q.revision);
    }

    feedbackEl.style.display = "block";
    feedbackEl.classList.add(isCorrect ? "ok" : "ko");

    feedbackEl.innerHTML =
      (isCorrect ? "<strong>Bonne réponse.</strong>" : "<strong>Réponse à revoir.</strong>") +
      "<br>" +
      q.explain;

    if (current < questions.length - 1) {
      nextBtn.style.display = "inline-block";
    } else {
      showResults();
    }
  }

  function showResults() {
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    scoreEl.style.display = "block";
    revisionsEl.style.display = "block";

    const percent = Math.round((score / questions.length) * 100);

    let scoreHtml = "<h2>Résultat final</h2>";
    scoreHtml += "<p><strong>Score :</strong> " + score + " / " + questions.length + " (" + percent + "%)</p>";

    if (percent >= 85) {
      scoreHtml += "<p><strong>Niveau :</strong> très solide. Vous avez les principaux réflexes.</p>";
    } else if (percent >= 65) {
      scoreHtml += "<p><strong>Niveau :</strong> bon niveau. Quelques points sont à revoir.</p>";
    } else if (percent >= 45) {
      scoreHtml += "<p><strong>Niveau :</strong> bases présentes, mais plusieurs réflexes doivent être renforcés.</p>";
    } else {
      scoreHtml += "<p><strong>Niveau :</strong> reprise conseillée des notions essentielles avant certification.</p>";
    }

    scoreHtml += "<h3>Score par thème</h3>";
    scoreHtml += "<table class='quizfinal-score-table'>";
    scoreHtml += "<thead><tr><th>Séance</th><th>Thème</th><th>Score</th></tr></thead><tbody>";

    Object.keys(answersByModule).forEach(function (module) {
      const item = answersByModule[module];
      scoreHtml +=
        "<tr>" +
        "<td>" + module + "</td>" +
        "<td>" + item.label + "</td>" +
        "<td>" + item.correct + " / " + item.total + "</td>" +
        "</tr>";
    });

    scoreHtml += "</tbody></table>";
    scoreEl.innerHTML = scoreHtml;

    let revisionsHtml = "<h2>Recommandations de révision</h2>";
    let hasRevision = false;

    Object.keys(answersByModule).forEach(function (module) {
      const item = answersByModule[module];

      if (item.correct < item.total) {
        hasRevision = true;

        const uniqueRevisions = Array.from(new Set(item.revisions));

        revisionsHtml += "<h3>" + module + " — " + item.label + "</h3>";
        revisionsHtml += "<ul>";

        uniqueRevisions.forEach(function (revision) {
          revisionsHtml += "<li>" + revision + "</li>";
        });

        revisionsHtml += "</ul>";
      }
    });

    if (!hasRevision) {
      revisionsHtml += "<p><strong>Bravo.</strong> Toutes les réponses sont correctes. Vous pouvez refaire le quiz plus tard pour consolider vos acquis.</p>";
    } else {
      revisionsHtml += "<p><em>Conseil : reprenez uniquement les séances indiquées ci-dessus, puis refaites le quiz.</em></p>";
    }

    revisionsEl.innerHTML = revisionsHtml;
  }

  nextBtn.addEventListener("click", function () {
    current += 1;
    renderQuestion();
  });

  restartBtn.addEventListener("click", function () {
    current = 0;
    score = 0;

    Object.keys(answersByModule).forEach(function (module) {
      answersByModule[module].correct = 0;
      answersByModule[module].revisions = [];
    });

    scoreEl.style.display = "none";
    revisionsEl.style.display = "none";
    restartBtn.style.display = "none";

    renderQuestion();
  });

  initModules();
  renderQuestion();
});
</script>

---

## Comment interpréter le score ?

- **85 % et plus** : très bon niveau.
- **65 % à 84 %** : bon niveau, quelques points à revoir.
- **45 % à 64 %** : bases présentes, mais révision recommandée.
- **Moins de 45 %** : il faut reprendre les notions essentielles.

!!! success "À retenir"
    Le plus important n’est pas le score.
    
    Le plus utile est d’identifier les séances à revoir.
