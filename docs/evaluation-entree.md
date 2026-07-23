# Évaluation d’entrée — IA générative et certification RS6776

Cette évaluation permet de faire un point sur vos connaissances avant de commencer ou de poursuivre la formation.

Elle n’est pas notée officiellement.  
Elle sert à identifier vos points forts et les sujets à revoir pendant le parcours.

!!! info "Objectif de l’évaluation"
    Cette évaluation couvre les bases de l’IA générative, le prompting, les outils IA, la confidentialité, l’accessibilité, l’éthique, les biais et les bons réflexes professionnels.

---

## Consignes

- Répondez aux 30 questions.
- Une seule réponse est attendue par question.
- Cliquez sur **Voir mon résultat** à la fin.
- Vous pourrez ensuite afficher les bonnes réponses.
- Vous pourrez aussi sauvegarder votre évaluation en PDF.

!!! warning "Important"
    Cette évaluation doit être réalisée sans utiliser d’IA.
    
    Le but est d’obtenir une photographie honnête de votre niveau de départ.

---

<div id="evaluation-entree" class="evaluation-entree">

  <div class="eval-identite">
    <h2>Informations</h2>

    <label for="eval-nom"><strong>Nom / prénom ou identifiant :</strong></label>
    <input type="text" id="eval-nom" placeholder="Ex : Camille Martin" />

    <label for="eval-date"><strong>Date :</strong></label>
    <input type="date" id="eval-date" />
  </div>

  <div id="eval-questions"></div>

  <div class="eval-actions">
    <button type="button" id="eval-submit">Voir mon résultat</button>
    <button type="button" id="eval-show-answers" style="display:none;">Afficher les bonnes réponses</button>
    <button type="button" id="eval-print" style="display:none;">Sauvegarder / imprimer en PDF</button>
    <button type="button" id="eval-reset">Recommencer</button>
  </div>

  <div id="eval-resultat" class="eval-resultat" style="display:none;"></div>
  <div id="eval-correction" class="eval-correction" style="display:none;"></div>

</div>

<style>
.evaluation-entree {
  margin-top: 24px;
}

.eval-identite {
  padding: 18px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 8px;
  background: var(--md-code-bg-color, #f8f9fa);
  margin-bottom: 24px;
}

.eval-identite label {
  display: block;
  margin-top: 12px;
  margin-bottom: 6px;
}

.eval-identite input {
  width: 100%;
  max-width: 420px;
  padding: 8px 10px;
  border: 1px solid var(--md-default-fg-color--light, #aaa);
  border-radius: 6px;
  background: var(--md-default-bg-color, #fff);
  color: var(--md-typeset-color, #000);
}

.eval-question {
  padding: 18px;
  margin-bottom: 18px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 8px;
  background: var(--md-default-bg-color, #fff);
}

.eval-question h3 {
  margin-top: 0;
}

.eval-theme {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(26, 95, 180, 0.12);
  color: #1a5fb4;
  margin-bottom: 8px;
}

.eval-options label {
  display: block;
  padding: 8px 10px;
  margin: 6px 0;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 6px;
  cursor: pointer;
}

.eval-options label:hover {
  background: rgba(26, 95, 180, 0.08);
}

.eval-options input {
  margin-right: 8px;
}

.eval-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 24px 0;
}

.eval-actions button {
  padding: 10px 16px;
  border: 1px solid #1a5fb4;
  border-radius: 6px;
  background: #1a5fb4;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

.eval-actions button#eval-reset {
  background: var(--md-default-bg-color, #fff);
  color: #1a5fb4;
}

.eval-resultat,
.eval-correction {
  padding: 18px;
  border-radius: 8px;
  margin-top: 20px;
}

.eval-resultat {
  border: 1px solid #1a5fb4;
  background: rgba(26, 95, 180, 0.08);
}

.eval-correction {
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  background: var(--md-code-bg-color, #f8f9fa);
}

.eval-correction-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--md-default-fg-color--lightest, #ddd);
}

.eval-correction-item:last-child {
  border-bottom: none;
}

.eval-ok {
  color: #2e7d32;
  font-weight: 700;
}

.eval-ko {
  color: #c62828;
  font-weight: 700;
}

@media print {
  .md-header,
  .md-tabs,
  .md-sidebar,
  .md-footer,
  .eval-actions {
    display: none !important;
  }

  .md-content {
    margin: 0 !important;
  }

  .eval-question {
    break-inside: avoid;
  }

  body {
    background: #ffffff !important;
  }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      theme: "Bases de l’IA",
      question: "Qu’est-ce qu’une IA générative ?",
      options: [
        "Un outil capable de produire du contenu à partir d’une consigne",
        "Un moteur de recherche classique",
        "Un logiciel qui ne fait que corriger l’orthographe",
        "Un outil qui remplace totalement le jugement humain"
      ],
      correct: 0,
      explain: "Une IA générative peut produire du texte, des images, du code ou d’autres contenus à partir d’un prompt."
    },
    {
      theme: "Bases de l’IA",
      question: "Quelle est une limite importante des IA génératives ?",
      options: [
        "Elles peuvent inventer des informations fausses",
        "Elles ne peuvent jamais écrire de texte",
        "Elles sont toujours exactes",
        "Elles connaissent toujours les informations les plus récentes"
      ],
      correct: 0,
      explain: "Une IA peut produire une réponse convaincante mais fausse. Il faut vérifier les informations importantes."
    },
    {
      theme: "Bases de l’IA",
      question: "Pourquoi faut-il donner du contexte dans un prompt ?",
      options: [
        "Pour aider l’IA à produire une réponse adaptée",
        "Pour rendre le prompt plus long sans raison",
        "Pour empêcher l’IA de répondre",
        "Pour remplacer toute vérification humaine"
      ],
      correct: 0,
      explain: "Le contexte permet à l’IA de comprendre la situation, le public, les contraintes et l’objectif."
    },
    {
      theme: "Bases de l’IA",
      question: "Quelle affirmation est la plus juste ?",
      options: [
        "L’IA assiste l’humain, mais l’humain garde la responsabilité finale",
        "L’IA doit décider seule",
        "L’IA ne fait jamais d’erreur",
        "L’IA remplace toujours l’expertise métier"
      ],
      correct: 0,
      explain: "Dans un usage professionnel, l’humain doit cadrer, vérifier et valider le résultat."
    },
    {
      theme: "Bases de l’IA",
      question: "Que signifie le terme “hallucination” en IA générative ?",
      options: [
        "Une information fausse produite avec assurance par l’IA",
        "Une image toujours réaliste",
        "Une réponse automatiquement certifiée",
        "Un bug d’affichage du navigateur"
      ],
      correct: 0,
      explain: "Une hallucination est une réponse fausse ou inventée, parfois formulée de manière très crédible."
    },
    {
      theme: "Prompting",
      question: "Que signifie la méthode ROFT ?",
      options: [
        "Rôle, Objectif, Format, Ton",
        "Recherche, Organisation, Fichier, Texte",
        "Résumé, Orthographe, Fichier, Traduction",
        "Risque, Outil, Formation, Test"
      ],
      correct: 0,
      explain: "ROFT est une méthode simple pour structurer un prompt efficace."
    },
    {
      theme: "Prompting",
      question: "Quel prompt est le plus efficace ?",
      options: [
        "Tu es chargé de communication. Rédige un email court et professionnel pour relancer un client après un devis sans réponse.",
        "Fais un mail.",
        "Écris quelque chose.",
        "Aide-moi vite."
      ],
      correct: 0,
      explain: "Un bon prompt précise le rôle, l’objectif, le format et le ton."
    },
    {
      theme: "Prompting",
      question: "À quoi sert la méthode CROFT ?",
      options: [
        "À ajouter le contexte à la méthode ROFT",
        "À supprimer le ton du prompt",
        "À générer uniquement des images",
        "À éviter toute consigne"
      ],
      correct: 0,
      explain: "CROFT ajoute le Contexte à Rôle, Objectif, Format et Ton."
    },
    {
      theme: "Prompting",
      question: "Que faut-il faire si le sujet est complexe ou flou ?",
      options: [
        "Demander à l’IA de poser des questions de clarification avant de répondre",
        "Donner le moins d’informations possible",
        "Accepter la première réponse sans vérification",
        "Écrire uniquement un mot-clé"
      ],
      correct: 0,
      explain: "Demander des questions de clarification limite les suppositions et améliore la qualité de la réponse."
    },
    {
      theme: "Prompting",
      question: "Pourquoi faut-il préciser le format attendu ?",
      options: [
        "Pour obtenir une réponse directement exploitable",
        "Pour compliquer inutilement la demande",
        "Pour empêcher l’IA de structurer sa réponse",
        "Pour éviter la relecture humaine"
      ],
      correct: 0,
      explain: "Le format permet d’obtenir un email, un tableau, une liste ou une synthèse adaptée au besoin."
    },
    {
      theme: "Outils IA",
      question: "Quel outil est le plus adapté pour rédiger un premier brouillon d’email ?",
      options: [
        "Un assistant IA généraliste",
        "Un outil de détourage d’image",
        "Un logiciel de compression",
        "Un agenda en ligne"
      ],
      correct: 0,
      explain: "Un assistant IA généraliste est adapté aux tâches rédactionnelles simples."
    },
    {
      theme: "Outils IA",
      question: "Quel outil est utile pour interroger un corpus de documents fournis par l’utilisateur ?",
      options: [
        "Un outil de type assistant documentaire",
        "Un outil de recadrage photo",
        "Un correcteur d’écran",
        "Un outil météo"
      ],
      correct: 0,
      explain: "Un assistant documentaire permet de travailler à partir de documents donnés."
    },
    {
      theme: "Outils IA",
      question: "Avant de choisir un outil IA, quelle est la bonne première étape ?",
      options: [
        "Identifier la tâche réelle à améliorer",
        "Choisir l’outil le plus connu",
        "Créer un compte partout",
        "Ignorer les risques de données"
      ],
      correct: 0,
      explain: "On part du besoin métier avant de choisir l’outil."
    },
    {
      theme: "Outils IA",
      question: "Pourquoi faut-il comparer les outils IA ?",
      options: [
        "Parce qu’ils n’ont pas les mêmes usages, limites et garanties",
        "Parce qu’ils font tous exactement la même chose",
        "Parce que le plus cher est toujours le meilleur",
        "Parce qu’il faut utiliser tous les outils disponibles"
      ],
      correct: 0,
      explain: "Chaque outil a ses forces, ses limites, son modèle économique et ses conditions d’utilisation."
    },
    {
      theme: "Données sensibles",
      question: "Quelle information ne doit pas être copiée telle quelle dans une IA grand public ?",
      options: [
        "Le nom complet d’un client avec son email",
        "Une consigne générale sans donnée personnelle",
        "Un exemple fictif",
        "Une question théorique"
      ],
      correct: 0,
      explain: "Les données personnelles doivent être protégées et anonymisées si nécessaire."
    },
    {
      theme: "Données sensibles",
      question: "Quel est le bon réflexe avant de coller un texte professionnel dans une IA ?",
      options: [
        "Repérer et anonymiser les données sensibles",
        "Coller tout le document sans relecture",
        "Ajouter plus de données personnelles",
        "Envoyer le document à plusieurs IA différentes"
      ],
      correct: 0,
      explain: "Il faut relire et anonymiser les données personnelles, confidentielles ou sensibles."
    },
    {
      theme: "Données sensibles",
      question: "Lequel de ces éléments est une donnée sensible ou confidentielle ?",
      options: [
        "Un salaire individuel",
        "Une phrase fictive",
        "Un exemple inventé",
        "Un titre générique"
      ],
      correct: 0,
      explain: "Un salaire individuel est une information RH sensible."
    },
    {
      theme: "Données sensibles",
      question: "Que signifie anonymiser un texte ?",
      options: [
        "Remplacer ou supprimer les informations permettant d’identifier une personne ou une organisation",
        "Ajouter des noms réels",
        "Mettre le texte en majuscules",
        "Changer uniquement la police"
      ],
      correct: 0,
      explain: "Anonymiser consiste à retirer ou remplacer les informations identifiantes ou sensibles."
    },
    {
      theme: "Données sensibles",
      question: "Pourquoi faut-il vérifier les conditions d’utilisation d’un outil IA ?",
      options: [
        "Pour savoir comment les données peuvent être stockées ou utilisées",
        "Pour changer la couleur de l’interface",
        "Pour éviter d’écrire un prompt",
        "Pour supprimer toute responsabilité humaine"
      ],
      correct: 0,
      explain: "Les politiques de confidentialité varient selon les outils et les offres."
    },
    {
      theme: "Accessibilité",
      question: "Un contenu accessible est un contenu qui...",
      options: [
        "peut être compris et utilisé par le plus grand nombre",
        "utilise toujours des phrases longues",
        "contient beaucoup de jargon",
        "repose uniquement sur la couleur"
      ],
      correct: 0,
      explain: "L’accessibilité vise à rendre un contenu utilisable par des publics variés."
    },
    {
      theme: "Accessibilité",
      question: "Quelle bonne pratique améliore la compréhension d’un texte ?",
      options: [
        "Utiliser des phrases courtes et une structure claire",
        "Multiplier les sigles non expliqués",
        "Écrire des paragraphes très longs",
        "Supprimer tous les titres"
      ],
      correct: 0,
      explain: "Les phrases courtes, les titres et les listes facilitent la lecture."
    },
    {
      theme: "Accessibilité",
      question: "Que faut-il éviter dans un contenu inclusif ?",
      options: [
        "Les stéréotypes et formulations stigmatisantes",
        "Les exemples variés",
        "Les phrases simples",
        "Les titres explicites"
      ],
      correct: 0,
      explain: "Un contenu inclusif évite les stéréotypes, les jugements et les formulations excluantes."
    },
    {
      theme: "Accessibilité",
      question: "Pourquoi demander à l’IA de simplifier un texte peut être utile ?",
      options: [
        "Pour rendre le contenu plus clair pour différents publics",
        "Pour rendre le contenu moins fiable",
        "Pour supprimer toutes les informations importantes",
        "Pour éviter toute relecture humaine"
      ],
      correct: 0,
      explain: "La simplification aide à rendre le contenu plus compréhensible, sans supprimer le sens."
    },
    {
      theme: "Éthique et biais",
      question: "Qu’est-ce qu’un biais dans une réponse IA ?",
      options: [
        "Une réponse qui reproduit un stéréotype ou une discrimination",
        "Une réponse toujours neutre",
        "Une réponse sans aucun risque",
        "Une réponse obligatoirement officielle"
      ],
      correct: 0,
      explain: "Les IA peuvent reproduire des biais présents dans les données ou les formulations."
    },
    {
      theme: "Éthique et biais",
      question: "Quel est le bon réflexe avant de publier un contenu généré par IA ?",
      options: [
        "Le relire, vérifier les faits et repérer les biais possibles",
        "Le publier immédiatement",
        "Supprimer les sources",
        "Faire confiance automatiquement à l’IA"
      ],
      correct: 0,
      explain: "La validation humaine reste indispensable avant diffusion."
    },
    {
      theme: "Éthique et biais",
      question: "Dans quel cas faut-il être particulièrement vigilant avec l’IA ?",
      options: [
        "Pour des décisions liées au recrutement, à l’évaluation ou à l’accès à un service",
        "Pour corriger une faute d’orthographe simple",
        "Pour reformuler un texte fictif",
        "Pour générer une idée de titre sans enjeu"
      ],
      correct: 0,
      explain: "Les décisions qui affectent des personnes nécessitent une vigilance éthique et juridique renforcée."
    },
    {
      theme: "Éthique et biais",
      question: "Que faut-il faire si une réponse IA semble stéréotypée ?",
      options: [
        "Demander un audit des biais et reformuler le contenu",
        "La publier telle quelle",
        "Ignorer le problème",
        "Ajouter encore plus de stéréotypes"
      ],
      correct: 0,
      explain: "Il faut repérer le problème, comprendre le risque et proposer une version corrigée."
    },
    {
      theme: "Éthique et biais",
      question: "Quel principe est essentiel dans un usage responsable de l’IA ?",
      options: [
        "La supervision humaine",
        "L’automatisation sans contrôle",
        "L’absence de vérification",
        "La publication immédiate"
      ],
      correct: 0,
      explain: "L’humain doit garder le contrôle et la responsabilité finale."
    },
    {
      theme: "Vérification",
      question: "Que faire si l’IA donne une information chiffrée importante ?",
      options: [
        "Vérifier avec une source fiable",
        "La recopier sans contrôle",
        "La transformer en opinion",
        "Supprimer le contexte"
      ],
      correct: 0,
      explain: "Les chiffres, dates, sources et affirmations importantes doivent être vérifiés."
    },
    {
      theme: "Vérification",
      question: "Quelle est la meilleure attitude face à une réponse IA ?",
      options: [
        "La considérer comme une proposition à vérifier",
        "La considérer comme une vérité absolue",
        "La publier sans relecture",
        "La transmettre sans contexte"
      ],
      correct: 0,
      explain: "Une réponse IA est une aide, pas une validation automatique."
    }
  ];

  const container = document.getElementById("eval-questions");
  const resultBox = document.getElementById("eval-resultat");
  const correctionBox = document.getElementById("eval-correction");
  const submitBtn = document.getElementById("eval-submit");
  const showAnswersBtn = document.getElementById("eval-show-answers");
  const printBtn = document.getElementById("eval-print");
  const resetBtn = document.getElementById("eval-reset");
  const dateInput = document.getElementById("eval-date");

  if (!container) return;

  if (dateInput && !dateInput.value) {
    const today = new Date().toISOString().slice(0, 10);
    dateInput.value = today;
  }

  function renderQuestions() {
    container.innerHTML = "";

    questions.forEach(function (q, qIndex) {
      const card = document.createElement("div");
      card.className = "eval-question";

      const title = document.createElement("h3");
      title.textContent = "Question " + (qIndex + 1) + " sur " + questions.length;

      const theme = document.createElement("div");
      theme.className = "eval-theme";
      theme.textContent = q.theme;

      const questionText = document.createElement("p");
      questionText.innerHTML = "<strong>" + q.question + "</strong>";

      const options = document.createElement("div");
      options.className = "eval-options";

      q.options.forEach(function (option, optionIndex) {
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "question-" + qIndex;
        input.value = optionIndex;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        options.appendChild(label);
      });

      card.appendChild(theme);
      card.appendChild(title);
      card.appendChild(questionText);
      card.appendChild(options);
      container.appendChild(card);
    });
  }

  function getAnswers() {
    return questions.map(function (_, qIndex) {
      const selected = document.querySelector("input[name='question-" + qIndex + "']:checked");
      return selected ? Number(selected.value) : null;
    });
  }

  function getLevel(score) {
    if (score <= 10) {
      return {
        label: "Niveau débutant",
        message: "Vous allez surtout consolider les bases de l’IA générative, du prompting et des bons réflexes de sécurité."
      };
    }

    if (score <= 20) {
      return {
        label: "Niveau intermédiaire",
        message: "Vous avez déjà des repères. La formation va vous aider à structurer vos usages et à sécuriser vos pratiques."
      };
    }

    if (score <= 26) {
      return {
        label: "Niveau avancé",
        message: "Vous avez de bonnes bases. L’objectif sera d’aller vers plus de méthode, de précision et de responsabilité."
      };
    }

    return {
      label: "Niveau très avancé",
      message: "Vous maîtrisez déjà beaucoup de notions. La formation servira à renforcer vos réflexes professionnels et votre préparation à la certification."
    };
  }

  function calculateScore() {
    const answers = getAnswers();
    let score = 0;

    answers.forEach(function (answer, index) {
      if (answer === questions[index].correct) {
        score += 1;
      }
    });

    return { score: score, answers: answers };
  }

  function renderResult() {
    const data = calculateScore();
    const score = data.score;
    const answers = data.answers;
    const unanswered = answers.filter(function (answer) { return answer === null; }).length;
    const level = getLevel(score);
    const nom = document.getElementById("eval-nom").value || "Non renseigné";
    const date = document.getElementById("eval-date").value || "Non renseignée";

    resultBox.style.display = "block";
    showAnswersBtn.style.display = "inline-block";
    printBtn.style.display = "inline-block";

    resultBox.innerHTML =
      "<h2>Résultat</h2>" +
      "<p><strong>Participant :</strong> " + nom + "</p>" +
      "<p><strong>Date :</strong> " + date + "</p>" +
      "<p><strong>Score :</strong> " + score + " / " + questions.length + "</p>" +
      "<p><strong>Niveau estimé :</strong> " + level.label + "</p>" +
      "<p>" + level.message + "</p>" +
      (unanswered > 0 ? "<p><strong>Questions sans réponse :</strong> " + unanswered + "</p>" : "") +
      "<p><em>Ce résultat sert uniquement à situer votre niveau de départ.</em></p>";

    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderCorrection() {
    const data = calculateScore();
    const answers = data.answers;

    correctionBox.style.display = "block";
    correctionBox.innerHTML = "<h2>Correction détaillée</h2>";

    questions.forEach(function (q, index) {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === q.correct;
      const item = document.createElement("div");

      item.className = "eval-correction-item";

      const userAnswerText = userAnswer === null ? "Aucune réponse" : q.options[userAnswer];
      const correctAnswerText = q.options[q.correct];

      item.innerHTML =
        "<h3>Question " + (index + 1) + " — " + q.theme + "</h3>" +
        "<p><strong>" + q.question + "</strong></p>" +
        "<p>Votre réponse : <span class='" + (isCorrect ? "eval-ok" : "eval-ko") + "'>" + userAnswerText + "</span></p>" +
        "<p>Bonne réponse : <strong>" + correctAnswerText + "</strong></p>" +
        "<p><em>" + q.explain + "</em></p>";

      correctionBox.appendChild(item);
    });

    correctionBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  submitBtn.addEventListener("click", renderResult);
  showAnswersBtn.addEventListener("click", renderCorrection);

  printBtn.addEventListener("click", function () {
    if (resultBox.style.display === "none") {
      renderResult();
    }

    if (correctionBox.style.display === "none") {
      renderCorrection();
    }

    window.print();
  });

  resetBtn.addEventListener("click", function () {
    const inputs = document.querySelectorAll("#evaluation-entree input[type='radio']");
    inputs.forEach(function (input) {
      input.checked = false;
    });

    resultBox.style.display = "none";
    correctionBox.style.display = "none";
    showAnswersBtn.style.display = "none";
    printBtn.style.display = "none";

    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  renderQuestions();
});
</script>

---

## Après l’évaluation

Une fois le résultat affiché, relisez les corrections.

Les thèmes avec plusieurs erreurs indiquent les points à revoir en priorité pendant la formation.

!!! success "À retenir"
    Ce score n’est pas une note officielle.
    
    Il sert à identifier vos besoins de progression avant de préparer la certification RS6776.
