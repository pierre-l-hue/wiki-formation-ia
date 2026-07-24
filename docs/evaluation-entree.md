# Évaluation d’entrée — IA générative et certification RS6776

Cette évaluation permet de faire un point sur vos connaissances avant de commencer ou de poursuivre la formation.

Elle n’est pas notée officiellement.  
Elle sert à identifier vos points forts et les sujets à revoir pendant le parcours.

<div class="summary-box">
  <h3>Objectif de l’évaluation</h3>
  <p>Cette évaluation couvre les bases de l’IA générative, le prompting, les outils IA, la confidentialité, l’accessibilité, l’éthique, les biais et les bons réflexes professionnels.</p>
</div>

---

## Consignes

- Répondez aux 30 questions.
- Une seule réponse est attendue par question.
- Cliquez sur **Voir mon résultat** à la fin.
- Vous pourrez ensuite afficher les bonnes réponses.
- Vous pourrez aussi sauvegarder votre évaluation en PDF.

<div class="warning-practice-box">
  <h3>Important</h3>
  <p>Cette évaluation doit être réalisée sans utiliser d’IA.</p>
  <p>Le but est d’obtenir une photographie honnête de votre niveau de départ.</p>
</div>

---

<div id="evaluation-entree" class="evaluation-entree">

  <div id="eval-intro" class="eval-identite">
    <h2>Informations</h2>

    <form id="eval-form">
      <label for="eval-nom"><strong>Nom / prénom ou identifiant :</strong></label>
      <input type="text" id="eval-nom" placeholder="Ex : Camille Martin" required />

      <label for="eval-date"><strong>Date :</strong></label>
      <input type="date" id="eval-date" required />

      <div class="eval-actions">
        <button type="button" id="eval-start">Commencer l’évaluation</button>
      </div>
    </form>
  </div>

  <div id="eval-quiz" style="display:none;">
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

</div>

<style>
.evaluation-entree {
  margin-top: 24px;
}

.eval-identite {
  padding: 18px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 12px;
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

#eval-form .eval-actions {
  margin-top: 18px;
}

.eval-question {
  padding: 18px;
  margin-bottom: 18px;
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
  border-radius: 12px;
  background: var(--md-default-bg-color, #fff);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
}

.eval-question h3 {
  margin-top: 0;
}

.eval-theme {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
  background: rgba(33, 150, 243, 0.12);
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
  transition: background 0.18s ease;
}

.eval-options label:hover {
  background: rgba(33, 150, 243, 0.08);
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
  border: 1px solid var(--md-primary-fg-color, #1a5fb4);
  border-radius: 999px;
  background: var(--md-primary-fg-color, #1a5fb4);
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s ease, transform 0.18s ease;
}

.eval-actions button:hover {
  transform: translateY(-2px);
}

.eval-actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.eval-actions button#eval-reset {
  background: var(--md-default-bg-color, #fff);
  color: var(--md-primary-fg-color, #1a5fb4);
}

.eval-resultat,
.eval-correction {
  padding: 18px;
  border-radius: 14px;
  margin-top: 20px;
}

.eval-resultat {
  border: 1px solid var(--md-primary-fg-color, #1a5fb4);
  background: rgba(33, 150, 243, 0.08);
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

---

## Après l’évaluation

Une fois le résultat affiché, relisez les corrections.

Les thèmes avec plusieurs erreurs indiquent les points à revoir en priorité pendant la formation.

<div class="good-reflex-box">
  <h3>À retenir</h3>
  <p>Ce score n’est pas une note officielle.</p>
  <p>Il sert à identifier vos besoins de progression avant de préparer la certification RS6776.</p>
</div>

---

## Prêt à commencer ?

<div class="wiki-actions">
  <a class="wiki-button primary" href="../formation/h0/">Démarrer la séance H0</a>
  <a class="wiki-button" href="../certification-rs6776/">Revoir les critères RS6776</a>
</div>
