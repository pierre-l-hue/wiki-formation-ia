# Quiz final — Révision H1 à H7

Ce quiz permet de vérifier vos acquis à la fin du parcours de formation.

Il ne remplace pas les exercices de certification, mais sert à identifier les notions et réflexes à revoir avant de finaliser votre préparation.

<div class="good-reflex-box">
  <h3>Conseil pour l'évaluation</h3>
  <p>Répondez aux questions sans utiliser d'IA générative.<br>
  L'objectif est d'évaluer vos propres réflexes professionnels et d'identifier les séances à retravailler.</p>
</div>

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
    // --- H1 : Fondamentaux IA ---
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Vous demandez à une IA une information récente et chiffrée. Quel est le meilleur réflexe ?",
      options: [
        "La recopier directement si la réponse est bien formulée",
        "Demander une reformulation plus convaincante",
        "Vérifier l’information avec une source fiable ou officielle",
        "Supprimer les chiffres pour éviter la vérification"
      ],
      correct: 2,
      explain: "Une IA peut produire une réponse parfaitement crédible mais totalement fausse (hallucination). Les chiffres, dates et faits importants doivent toujours être vérifiés.",
      revision: "Révisez H1 : limites de l’IA, hallucinations et vérification humaine."
    },
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Quelle phrase décrit le mieux le rôle de l’IA dans un usage professionnel responsable ?",
      options: [
        "L’IA propose, l’humain cadre, vérifie et valide",
        "L’IA décide seule si le prompt est précis",
        "L’IA remplace la responsabilité juridique du professionnel",
        "L’IA garantit toujours la conformité du résultat produit"
      ],
      correct: 0,
      explain: "L’IA est une aide à la production. La responsabilité finale et juridique reste exclusivement humaine.",
      revision: "Révisez H1 : rôle de l’humain, limites et responsabilité."
    },
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Qu'appelle-t-on la 'fenêtre de contexte' d'un Modèle de Langage (LLM) ?",
      options: [
        "L'interface graphique dans laquelle on tape le texte",
        "La quantité maximale de texte (en tokens) que le modèle peut lire et retenir dans un échange",
        "La période de mise à jour des données d'entraînement de l'IA",
        "L'historique complet de toutes les conversations de l'utilisateur"
      ],
      correct: 1,
      explain: "La fenêtre de contexte correspond au volume d'informations (mots/tokens) que le modèle peut traiter en une fois sans perdre le fil.",
      revision: "Révisez H1 : mécanismes des LLM et notion de tokens/contexte."
    },
    {
      module: "H1",
      label: "Fondamentaux IA",
      question: "Pourquoi une IA peut-elle affirmer avec assurance des faits totalement fictifs ?",
      options: [
        "Parce qu'elle tente de tromper intentionnellement l'utilisateur",
        "Parce qu'elle fonctionne par prédiction statistique de mots et non par compréhension logique du réel",
        "Parce que son serveur est saturé d'informations",
        "Parce qu'elle n'a pas accès à la langue française"
      ],
      correct: 1,
      explain: "Un LLM assemble des séquences de mots statistiquement probables, ce qui peut générer des erreurs plausibles mais fausses.",
      revision: "Révisez H1 : fonctionnement probabiliste des LLM."
    },

    // --- H2 : Stratégie IA ---
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Avant de choisir un outil IA, quelle est la première question à se poser ?",
      options: [
        "Quel outil est le plus populaire ou à la mode ?",
        "Quelle tâche concrète et quel besoin métier veux-je traiter ?",
        "Quel outil possède l'interface la plus moderne ?",
        "Quel outil est utilisé par mes concurrents direct ?"
      ],
      correct: 1,
      explain: "Une stratégie IA part toujours d’un besoin métier réel ou d'une tâche identifiée, et non d’un outil technologique.",
      revision: "Révisez H2 : cartographie des tâches et stratégie IA."
    },
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Une équipe veut automatiser ses comptes-rendus de réunion. Quelle démarche est la plus professionnelle ?",
      options: [
        "Utiliser immédiatement une IA sans règles pour gagner du temps",
        "Tout interdire par principe car l’IA comporte des risques",
        "Identifier les données traitées, choisir un outil conforme et prévoir une validation humaine",
        "Publier automatiquement tous les comptes-rendus générés"
      ],
      correct: 2,
      explain: "Une démarche rigoureuse prend en compte la nature des données, le cadre juridique/sécurité et la relecture humaine.",
      revision: "Révisez H2 : cartographie des risques et gouvernance."
    },
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Dans le cadre d'un diagnostic d'opportunité IA, quel indicateur est prioritaire pour évaluer une tâche ?",
      options: [
        "Le niveau de technicité du vocabulaire utilisé",
        "Le rapport entre le temps gagné / la valeur ajoutée et le niveau de risque associé",
        "La quantité de texte produite à la minute",
        "La capacité de l'IA à remplacer totalement les collaborateurs"
      ],
      correct: 1,
      explain: "Le diagnostic d'opportunité évalue le gain potentiel (temps/qualité) au regard de la criticité de la tâche et des risques.",
      revision: "Révisez H2 : matrice gain/risque et choix des cas d'usage."
    },
    {
      module: "H2",
      label: "Stratégie IA",
      question: "Quel est l'un des principaux dangers du 'Shadow AI' (usage d'outils IA non validés par l'organisation) ?",
      options: [
        "La lenteur des connexions réseau",
        "La fuite de données confidentielles et la non-conformité RGPD",
        "L'augmentation des factures d'électricité de l'entreprise",
        "Le risque de saturation du disque dur de l'ordinateur"
      ],
      correct: 1,
      explain: "Le Shadow AI expose l'organisation à la fuite d'informations stratégiques ou personnelles sur des serveurs tiers non sécurisés.",
      revision: "Révisez H2 : risques du Shadow AI et cadre de gouvernance."
    },

    // --- H3 : Prompting textuel ---
    {
      module: "H3",
      label: "Prompting",
      question: "Quel prompt est le plus exploitable et efficace pour un usage professionnel ?",
      options: [
        "Fais-moi un texte sur le service client.",
        "Rédige un email de relance client, ton professionnel, maximum 120 mots, avec un objet clair et sans inventer d’information.",
        "Améliore la communication de notre service.",
        "Écris quelque chose de vendeur pour nos produits."
      ],
      correct: 1,
      explain: "Un bon prompt précise le Rôle, l'Objectif, le Format, le Ton et les Contraintes applicables.",
      revision: "Révisez H3 : structures de prompts (CROFT / ROFT) et consignes."
    },
    {
      module: "H3",
      label: "Prompting",
      question: "Quand est-il particulièrement pertinent de demander à l’IA de vous poser des questions avant de répondre ?",
      options: [
        "Quand la demande est complexe, stratégique ou incomplète",
        "Uniquement pour générer une illustration ou une image",
        "Jamais, car cela ralentit inutilement le processus",
        "Seulement si le document d'entrée fait moins de 10 mots"
      ],
      correct: 0,
      explain: "Permettre à l'IA d'interroger l'utilisateur (mode métaguidage) garantit que toutes les contraintes clés sont clarifiées avant rédaction.",
      revision: "Révisez H3 : prompts avancés et clarification du besoin."
    },
    {
      module: "H3",
      label: "Prompting",
      question: "Dans le framework CROFT, à quoi correspond la lettre 'C' ?",
      options: [
        "Conclusion",
        "Contexte",
        "Correction",
        "Complexité"
      ],
      correct: 1,
      explain: "Dans CROFT, le 'C' désigne le Contexte (situation, public cible, enjeux).",
      revision: "Révisez H3 : composantes de la méthode CROFT."
    },
    {
      module: "H3",
      label: "Prompting",
      question: "Quelle technique de prompting consiste à donner un ou plusieurs exemples de résultats attendus dans la consigne ?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting",
        "Prompting négatif",
        "Chain of Thought (Pensée étape par étape)"
      ],
      correct: 1,
      explain: "Le Few-shot prompting fournit des exemples concrets (ex. paires entrée/sortie) pour guider le modèle vers le format exact voulu.",
      revision: "Révisez H3 : Zero-shot vs Few-shot prompting."
    },

    // --- H4 : Prompt visuel ---
    {
      module: "H4",
      label: "Prompt visuel",
      question: "Quel élément crucial manque le plus dans le prompt : 'Crée une belle image pour mon article' ?",
      options: [
        "Le nom du navigateur web utilisé",
        "Le nombre de paragraphes du texte",
        "Le sujet précis, le style artistique, l’éclairage, les couleurs, la cadrage et le ratio",
        "Le tarif d'abonnement de l'outil"
      ],
      correct: 2,
      explain: "Un prompt visuel professionnel spécifie le sujet, le style (ex. photo, illustration vectorielle), la lumière, la composition et le format.",
      revision: "Révisez H4 : les 5 piliers d’un prompt visuel."
    },
    {
      module: "H4",
      label: "Prompt visuel",
      question: "Pour un visuel professionnel destiné à un site d'entreprise, quelle précaution est recommandée ?",
      options: [
        "Demander d'intégrer de longs paragraphes de texte dans l'image",
        "Demander le logo d'une marque très connue sans autorisation",
        "Exiger des visages de personnalités publiques facilement identifiables",
        "Éviter les logos réels, les textes intégrés complexes et les personnes réelles identifiables"
      ],
      correct: 3,
      explain: "Les générateurs d'images gèrent mal les textes longs et posent des risques de droit à l'image ou de propriété intellectuelle sur les marques.",
      revision: "Révisez H4 : contraintes, droits d'auteur et bonnes pratiques d'image."
    },
    {
      module: "H4",
      label: "Prompt visuel",
      question: "A quoi sert un 'prompt négatif' dans les outils de génération d'images ?",
      options: [
        "A exprimer son mécontentement sur le résultat",
        "A lister explicitement les éléments que l'IA ne doit PAS faire apparaître dans le visuel",
        "A réduire la résolution de l'image pour accélérer le calcul",
        "A générer une image entièrement noire"
      ],
      correct: 1,
      explain: "Le prompt négatif (ex: `--no text, blur, watermark`) élimine les artefacts, le texte ou les éléments indésirables.",
      revision: "Révisez H4 : prompts négatifs et paramètres avancés."
    },
    {
      module: "H4",
      label: "Prompt visuel",
      question: "Quel terme désigne le rapport entre la largeur et la hauteur d'une image (ex. 16:9, 1:1, 9:16) ?",
      options: [
        "La définition de pixels",
        "Le ratio d'aspect (Aspect Ratio)",
        "La profondeur de champ",
        "La balance des blancs"
      ],
      correct: 1,
      explain: "Le ratio d'aspect (Aspect Ratio) définit le format géométrique du visuel selon le support de destination (bannière, réseau social, impression).",
      revision: "Révisez H4 : formats et paramètres techniques des visuels."
    },

    // --- H5 : Confidentialité & Données ---
    {
      module: "H5",
      label: "Confidentialité",
      question: "Quel contenu NE FAUT-IL PAS insérer dans une IA générative grand public ?",
      options: [
        "Un modèle d'email totalement anonymisé",
        "Une consigne générale de rédaction administrative",
        "Un listing de clients avec noms, adresses et numéros de contrat",
        "Un extrait de texte public déjà paru sur un site officiel"
      ],
      correct: 2,
      explain: "Les données à caractère personnel (DCP) et les informations stratégiques ou confidentielles ne doivent jamais être saisies sans garanties contractuelles.",
      revision: "Révisez H5 : données sensibles, RGPD et anonymisation."
    },
    {
      module: "H5",
      label: "Confidentialité",
      question: "Quel est le bon réflexe avant de soumettre un document interne à un outil d'IA ?",
      options: [
        "Nettoyer le document de ses données identifiables et vérifier si les données saisies servent à réentraîner le modèle",
        "Transmettre le document complet pour maximiser la précision de la réponse",
        "Multiplier les envois sur différentes plateformes pour comparer les analyses",
        "Demander à l’IA elle-même si elle garantit la confidentialité de la pièce jointe"
      ],
      correct: 0,
      explain: "La sécurisation des données s’effectue en amont (anonymisation) et nécessite la vérification des conditions générales d'utilisation (CGU).",
      revision: "Révisez H5 : protection des données et paramètres de confidentialité."
    },
    {
      module: "H5",
      label: "Confidentialité",
      question: "Que signifie l'anonymisation par 'pseudonymisation' ou 'caviardage' ?",
      options: [
        "Changer la police de caractère en italique",
        "Remplacer les identifiants réels (noms, dates, lieux) par des variables génériques (ex: [CLIENT_A], [DATE_1])",
        "Mettre tout le texte en majuscules",
        "Compresser le fichier au format ZIP avant de l'envoyer"
      ],
      correct: 1,
      explain: "Le caviardage ou la pseudonymisation permet de conserver la structure logique du texte sans exposer d'informations identifiables.",
      revision: "Révisez H5 : techniques de caviardage et d'anonymisation."
    },
    {
      module: "H5",
      label: "Confidentialité",
      question: "Dans le cadre du RGPD, quel principe exige de ne collecter et traiter que les données strictement nécessaires à l'objectif visé ?",
      options: [
        "Le principe de souveraineté nationale",
        "Le principe de minimisation des données",
        "Le principe d'obsolescence programmée",
        "Le principe d'archivage permanent"
      ],
      correct: 1,
      explain: "Le principe de minimisation impose de limiter au strict nécessaire les informations personnelles transmises à un système de traitement.",
      revision: "Révisez H5 : principes fondamentaux du RGPD."
    },

    // --- H6 : Accessibilité & Inclusivité ---
    {
      module: "H6",
      label: "Accessibilité",
      question: "Parmi ces formulations, laquelle respecte le mieux les principes du Langage Clair (FALC / FALC-like) ?",
      options: [
        "Veuillez procéder à l’exécution diligente des modalités subséquentes.",
        "Les modalités opérationnelles seront implémentées ultérieurement.",
        "Merci de suivre les étapes ci-dessous.",
        "Il conviendra d’envisager l'ensemble des paramètres afférents."
      ],
      correct: 2,
      explain: "Le langage clair privilégie les phrases courtes, la voix active et un vocabulaire simple et direct.",
      revision: "Révisez H6 : phrases courtes, langage clair et lisibilité."
    },
    {
      module: "H6",
      label: "Accessibilité",
      question: "Quelle consigne donnée à une IA est la plus adaptée pour traiter un texte dans un objectif d'inclusivité et d'accessibilité ?",
      options: [
        "Rends ce texte plus abstrait pour toucher un public plus large.",
        "Utilise des termes techniques plus recherchés.",
        "Supprime la ponctuation pour fluidifier la lecture.",
        "Identifie les formulations ambiguës ou excluantes et propose une version claire, neutre et accessible à tous."
      ],
      correct: 3,
      explain: "L’IA peut agir comme un filtre pour éliminer le jargon, les stéréotypes et corriger la structure au profit de tous les lecteurs.",
      revision: "Révisez H6 : accessibilité, inclusion et prompts de réécriture."
    },
    {
      module: "H6",
      label: "Accessibilité",
      question: "Pourquoi est-il important de structurer un document avec des titres hiérarchisés (H1, H2, H3) lors de l'utilisation d'IA générative ?",
      options: [
        "Pour que l'IA consomme moins d'électricité",
        "Pour permettre aux lecteurs d'écran (utilisés par les personnes malvoyantes) et à l'IA de comprendre la logique du document",
        "C'est une obligation uniquement pour imprimer sur du papier A4",
        "Pour masquer les erreurs de grammaire"
      ],
      correct: 1,
      explain: "Une structure HTML/Markdown claire bénéficie à la fois aux synthèses d'IA et aux outils d'assistance pour personnes en situation de handicap (RGAA).",
      revision: "Révisez H6 : structuration des contenus et normes RGAA."
    },
    {
      module: "H6",
      label: "Accessibilité",
      question: "Qu'est-ce que l'Alternative Textuelle (attribut `alt`) recommandée pour les images ?",
      options: [
        "Le titre de l'image visible sous la photo",
        "Une description textuelle courte décrivant le contenu et la fonction de l'image pour les lecteurs d'écran",
        "Le nom du fichier stocké sur l'ordinateur (ex: img_1024.jpg)",
        "Le lien URL vers la page de téléchargement"
      ],
      correct: 1,
      explain: "Le texte alternatif rend l'information visuelle accessible aux personnes déficientes visuelles ou lorsque l'image ne charge pas.",
      revision: "Révisez H6 : description d'images et accessibilité numérique."
    },

    // --- H7 : Éthique & IA Act ---
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Selon la réglementation européenne (IA Act), dans quelle catégorie se situe un système d'IA utilisé pour trier automatiquement des candidatures RH ?",
      options: [
        "Risque minimal (aucune obligation particulière)",
        "Risque limité (simple obligation de transparence)",
        "Haut risque (obligations renforcées, supervision humaine et audit de biais)",
        "Inacceptable (strictement interdit)"
      ],
      correct: 2,
      explain: "L'usage de l'IA pour l'accès à l'emploi et le recrutement relève de la catégorie 'Haut Risque' (Annexe III) de l'IA Act.",
      revision: "Révisez H7 : classification IA Act et usages à haut risque."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Avant de diffuser un document généré par IA à l'ensemble des collaborateurs, quelle vérification est obligatoire ?",
      options: [
        "Vérifier uniquement que le texte contient des émoticônes",
        "Vérifier uniquement qu'il dépasse une longueur de 500 mots",
        "Effectuer une relecture humaine : exactitude des faits, absence de biais, ton et adaptation au public",
        "Vérifier la couleur de l'arrière-plan"
      ],
      correct: 2,
      explain: "Un usage éthique et responsable implique une relecture critique par un humain qui valide et assume le contenu produit.",
      revision: "Révisez H7 : audit de biais, éthique et validation humaine."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Quel cas d'usage relève de la catégorie 'Risque Inacceptable' (Interdit) selon l'IA Act ?",
      options: [
        "Un système de notation sociale (social scoring) évaluant les citoyens",
        "Un chatbot d'assistance client sur un site internet",
        "Un outil de détection des spams dans une boîte mail",
        "Un logiciel de correction grammaticale"
      ],
      correct: 0,
      explain: "La notation sociale des personnes par les États ou entreprises est formellement interdite dans l'Union Européenne.",
      revision: "Révisez H7 : usages interdits sous l'IA Act."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Comment appelle-t-on la tendance d'une IA à reproduire des stéréotypes sexistes ou racistes présents dans ses données d'entraînement ?",
      options: [
        "Une erreur de syntaxe",
        "Un biais algorithmique",
        "Un problème de bande passante",
        "Une baisse d'énergie du serveur"
      ],
      correct: 1,
      explain: "Les biais algorithmiques résultent des préjugés ou déséquilibres historiques contenus dans les masses de données web ayant servi à l'entraînement.",
      revision: "Révisez H7 : origine des biais et éthique de l'IA."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "Quel est l'objectif d'un 'prompt d'audit de biais' ?",
      options: [
        "Accélérer la vitesse de génération du texte",
        "Demander au modèle de réexaminer un contenu avec un œil critique pour détecter d'éventuels stéréotypes ou exclusions",
        "Traduire le texte automatiquement en cinq langues",
        "Changer le format du document en PDF"
      ],
      correct: 1,
      explain: "Le prompt d'audit invite l'IA à analyser sa propre production pour en corriger la neutralité, l'équité et le ton.",
      revision: "Révisez H7 : techniques de prompts d'audit réflexif."
    },
    {
      module: "H7",
      label: "Éthique et biais",
      question: "En matière d'empreinte environnementale de l'IA, quel principe d'action est préconisé ?",
      options: [
        "Générer systématiquement 10 images haute définition par requête",
        "Répéter le même prompt 50 fois pour comparer les micro-variations",
        "Adopter la sobriété numérique (prompts précis, choix de modèles adaptés, éviter la sur-génération inutile)",
        "Ne jamais éteindre son ordinateur"
      ],
      correct: 2,
      explain: "La sobriété numérique exige de mesurer l'impact énergétique (surtout pour la génération multimédia) et d'optimiser ses requêtes.",
      revision: "Révisez H7 : sobriété numérique et impacts environnementaux."
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
      (isCorrect ? "<strong>Bonne réponse.</strong> " : "<strong>Réponse à revoir.</strong> ") +
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
    scoreHtml += "<p><strong>Score global :</strong> " + score + " / " + questions.length + " (" + percent + "%)</p>";

    if (percent >= 85) {
      scoreHtml += "<p><strong>Niveau :</strong> Très solide. Vous maîtrisez parfaitement l'ensemble des réflexes professionnels.</p>";
    } else if (percent >= 65) {
      scoreHtml += "<p><strong>Niveau :</strong> Bon niveau global. Quelques notions ciblées méritent une relecture.</p>";
    } else if (percent >= 45) {
      scoreHtml += "<p><strong>Niveau :</strong> Bases présentes, mais plusieurs automatismes fondamentaux doivent être renforcés.</p>";
    } else {
      scoreHtml += "<p><strong>Niveau :</strong> Reprise conseillée des modules théoriques et pratiques avant toute tentative de certification.</p>";
    }

    scoreHtml += "<h3>Détail par séance</h3>";
    scoreHtml += "<table class='quizfinal-score-table'>";
    scoreHtml += "<thead><tr><th>Séance</th><th>Thème</th><th>Score obtenu</th></tr></thead><tbody>";

    Object.keys(answersByModule).forEach(function (module) {
      const item = answersByModule[module];
      scoreHtml +=
        "<tr>" +
        "<td><strong>" + module + "</strong></td>" +
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
      revisionsHtml += "<p><strong>Excellente maîtrise !</strong> Vous avez répondu correctement à l'ensemble des 30 questions. Vous êtes prêt pour la suite.</p>";
    } else {
      revisionsHtml += "<p><em>Conseil : relisez prioritairement les fiches des séances répertoriées ci-dessus, puis rejouez le quiz.</em></p>";
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

## Comment interpréter votre résultat ?

- **85 % et plus (26/30 et +)** : Très bon niveau. Vous possédez les automatismes d'un usager averti et responsable.
- **65 % à 84 % (20/30 à 25/30)** : Bon niveau. Identifiez les 1 ou 2 thèmes faibles dans le tableau récapitulatif pour vous ajuster.
- **45 % à 64 % (14/30 à 19/30)** : Niveau intermédiaire. Une relecture des séances H3, H5 et H7 est vivement recommandée.
- **Moins de 45 % (moins de 14/30)** : Reprenez méthodiquement les fiches de cours avant d'aborder des exercices pratiques complexes.

<div class="summary-box">
  <h3>À retenir</h3>
  <p>L'objectif de ce quiz n'est pas uniquement d'obtenir une note, mais de valider vos <strong>réflexes professionnels</strong> au quotidien (sécurité des données, vérification des faits, conformité légale et accessibilité).</p>
</div>

<div class="wiki-actions">
  <a class="wiki-button primary" href="../">Retour au sommaire de la formation</a>
</div>
