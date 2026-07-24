# 🛠️ Grille de prompting & aide-mémoire LLM

Bienvenue sur votre boussole quotidienne. Cette fiche regroupe les outils, méthodes et structures utiles pour réussir vos usages d’IA générative dans le cadre de la **certification RS6776**.

<div class="summary-box" markdown="block">
<h3>🎯 À quoi sert cette page ?</h3>

- Construire rapidement un prompt clair avec la méthode CROFT.
- Comparer les principaux outils selon le besoin.
- Corriger les problèmes fréquents : hallucinations, ton inadapté, réponses trop vagues ou incomplètes.
</div>

---

## Générateur express de prompt

Utilisez ce module pour construire rapidement un prompt structuré.

<div class="wiki-card" markdown="block">
<div class="wiki-card-icon">🧩</div>
<h3>Générateur CROFT</h3>

Compléter les 5 champs, puis copier le prompt généré.
</div>

<div class="prompt-generator">
  <div class="prompt-generator-grid">
    <div>
      <label for="generator-c">Contexte</label>
      <input type="text" id="generator-c" placeholder="Ex. Dans le cadre d’un projet de refonte intranet...">
    </div>

    <div>
      <label for="generator-r">Rôle</label>
      <input type="text" id="generator-r" placeholder="Ex. Tu es un expert en communication interne...">
    </div>

    <div>
      <label for="generator-o">Objectif</label>
      <input type="text" id="generator-o" placeholder="Ex. Rédige un mail pour annoncer la nouvelle charte...">
    </div>

    <div>
      <label for="generator-f">Format</label>
      <input type="text" id="generator-f" placeholder="Ex. Email court avec 3 puces clés...">
    </div>

    <div>
      <label for="generator-t">Ton</label>
      <input type="text" id="generator-t" placeholder="Ex. Professionnel, chaleureux et engageant...">
    </div>
  </div>

  <label for="generator-output">Aperçu du prompt généré</label>
  <textarea id="generator-output" readonly></textarea>

  <div class="wiki-actions">
    <button type="button" id="generator-copy" class="wiki-button primary">📋 Copier le prompt</button>
  </div>
</div>

---

## Matrice comparative des LLM

=== "🤖 Choisir son outil"

    | LLM / Outil | Forces majeures | Cas d’usages prioritaires | Limites et précautions |
    | :--- | :--- | :--- | :--- |
    | **ChatGPT** | Polyvalence, vision, analyse de fichiers, code. | Idéation, analyse multimédia, assistants personnalisés. | Vigilance sur les données partagées selon l’environnement utilisé. |
    | **Claude** | Qualité rédactionnelle, nuance, gestion de longs documents. | Rédaction complexe, synthèse, codage propre. | Pas de génération visuelle native intégrée. |
    | **Mistral** | Souveraineté européenne, rapidité, approche orientée conformité. | Données internes sensibles, conformité européenne, automatisation. | Écosystème plus restreint selon les usages. |
    | **Perplexity** | Recherche en temps réel avec sources vérifiables. | Veille, fact-checking, recherche documentaire. | Moins adapté à la génération créative pure. |
    | **Copilot** | Intégration Microsoft 365. | Productivité bureautique, mails, comptes rendus. | Très lié à l’écosystème Microsoft. |

=== "📐 Structures de prompt"

    !!! tip "Structure CROFT"
        - **C — Contexte** : cadre, situation, secteur.
        - **R — Rôle** : posture ou expertise donnée à l’IA.
        - **O — Objectif** : résultat attendu.
        - **F — Format** : forme de la réponse.
        - **T — Ton** : style rédactionnel attendu.

    !!! note "Structure SOCRATE"
        - **S — Situation** : mise en contexte détaillée.
        - **O — Objectif** : enjeu stratégique.
        - **C — Contraintes** : ce qu’il ne faut pas faire.
        - **R — Rôle** : posture professionnelle.
        - **A — Attentes** : critères de qualité ou livrables.
        - **T — Transparence** : demander à l’IA d’expliquer sa logique.
        - **E — Exemples** : fournir un exemple du rendu attendu.

=== "🛠️ Dépannage et correctifs"

    | Problème rencontré | Reformulation utile |
    | :--- | :--- |
    | **Hallucination / invention** | *Base-toi exclusivement sur le texte fourni. Si l’information n’y figure pas, réponds : « Information non disponible ».* |
    | **Réponse trop longue ou vague** | *Réponds sous forme de tableau à 3 colonnes [Élément, Impact, Recommandation] en 150 mots maximum.* |
    | **Jargon / ton inadapté** | *Reformule avec la méthode FALC pour un public non technique.* |
    | **Réponse incomplète** | *Découpe la réponse en 3 étapes successives et attends ma validation entre chaque étape.* |

---

## Bon réflexe

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe</h3>

Commencer par un prompt simple, puis l’améliorer avec CROFT.

Un bon prompt n’a pas besoin d’être long.  
Il doit surtout être clair, précis et exploitable.
</div>

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter</h3>

Ne pas changer 5 paramètres à la fois quand une réponse ne convient pas.

Modifier un seul élément à la fois permet de comprendre ce qui améliore réellement le résultat.
</div>
