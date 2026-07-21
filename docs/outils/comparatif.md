# 🛠️ Grille de Prompting & Aide-mémoire LLM

Bienvenue sur votre boussole quotidienne ! Cette fiche regroupe les outils, méthodes et structures indispensables pour réussir vos projets d'IA générative dans le cadre de la **certification RS6776**.

---

## 🧰 Générateur express de Prompt (Méthode CROFT)

*Utilisez ce module interactif pour construire rapidement vos prompts au format structuré.*

<div style="background: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a;">

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 12px;">
    <div>
      <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Contexte :</label>
      <input type="text" id="generator-c" placeholder="Ex: Dans le cadre d'un projet de refonte intranet..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; box-sizing: border-box;">
    </div>
    <div>
      <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Rôle :</label>
      <input type="text" id="generator-r" placeholder="Ex: Tu es un expert en communication interne..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; box-sizing: border-box;">
    </div>
    <div>
      <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Objectif :</label>
      <input type="text" id="generator-o" placeholder="Ex: Rédige un mail pour annoncer la nouvelle charte..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; box-sizing: border-box;">
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 16px;">
    <div>
      <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Format :</label>
      <input type="text" id="generator-f" placeholder="Ex: Email court avec 3 puces clés..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; box-sizing: border-box;">
    </div>
    <div>
      <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Ton :</label>
      <input type="text" id="generator-t" placeholder="Ex: Professionnel, chaleureux et engageant..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 13px; box-sizing: border-box;">
    </div>
  </div>

  <label style="display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 4px;">Aperçu du prompt généré :</label>
  <textarea id="generator-output" readonly style="width: 100%; height: 100px; padding: 10px; border: 1px solid #d5d9de; border-radius: 6px; background: #f5f7fa; font-size: 13px; font-family: monospace; box-sizing: border-border; margin-bottom: 12px; resize: vertical;"></textarea>

  <div style="text-align: right;">
    <button type="button" id="generator-copy" style="padding: 8px 16px; border: none; border-radius: 6px; background: #1a5fb4; color: #fff; font-size: 13px; font-weight: 600; cursor: pointer;">📋 Copier le prompt</button>
  </div>
</div>

<script>
(function() {
  const c = document.getElementById('generator-c');
  const r = document.getElementById('generator-r');
  const o = document.getElementById('generator-o');
  const f = document.getElementById('generator-f');
  const t = document.getElementById('generator-t');
  const out = document.getElementById('generator-output');
  const btn = document.getElementById('generator-copy');

  if(!c || !out) return;

  function build() {
    let parts = [];
    if(c.value.trim()) parts.push("Contexte : " + c.value.trim());
    if(r.value.trim()) parts.push("Rôle : " + r.value.trim());
    if(o.value.trim()) parts.push("Objectif : " + o.value.trim());
    if(f.value.trim()) parts.push("Format : " + f.value.trim());
    if(t.value.trim()) parts.push("Ton : " + t.value.trim());
    out.value = parts.join("\n\n");
  }

  [c, r, o, f, t].forEach(input => input.addEventListener('input', build));

  btn.addEventListener('click', () => {
    if(!out.value) return;
    navigator.clipboard.writeText(out.value).then(() => {
      const orig = btn.textContent;
      btn.textContent = "✅ Copié !";
      setTimeout(() => btn.textContent = orig, 2000);
    });
  });

  build();
})();
</script>

---

## 📊 Matrice comparative des LLM

=== "🤖 Choisir son outil"

    | LLM / Outil | Forces majeures | Cas d'usages prioritaires | Limites & Précautions |
    | :--- | :--- | :--- | :--- |
    | **ChatGPT (GPT-4o)** | Polyvalence, vision, analyse de fichiers, exécution de code Python. | Idéation, analyse multimédia, création de GPTs personnalisés. | Attention aux données partagées (utiliser la version Enterprise/Team si sensible). |
    | **Claude (3.5 Sonnet)** | Qualité rédactionnelle naturelle, nuance, compréhension de très longs documents. | Rédaction complexe, synthèse de dossiers volumineux, codage propre. | Pas de génération visuelle directe. |
    | **Mistral (Le Chat)** | Souveraineté européenne, conformité RGPD stricte, rapidité. | Données internes sensibles, conformité européenne, automatisation. | Écosystème de plugins plus réduit que OpenAI. |
    | **Perplexity** | Recherche d'informations en temps réel avec sources vérifiables. | Veille sectorielle, fact-checking, recherche documentaire rapide. | Moins adapté pour la génération créative pure. |
    | **Copilot** | Intégration native dans l'écosystème Microsoft 365 (Word, Excel, Teams). | Productivité bureautique, compte-rendu de réunion, gestion de mails. | Fonctionne principalement au sein de l'environnement Microsoft. |

=== "📐 Structures de Prompt"

    !!! tip "Structure CROFT (Utilisation quotidienne)"
        - **C — Contexte :** Présentation du cadre et de la situation.
        - **R — Rôle :** Expertise incarnée par l'IA (*"Agis en tant que..."*).
        - **O — Objectif :** Résultat exact attendu.
        - **F — Format :** Structure de livraison (*Tableau, liste à puces, email...*).
        - **T — Ton :** Style d'écriture (*Professionnel, pédagogique, direct...*).

    !!! note "Structure SOCRATE (Tâches complexes / Multi-étapes)"
        - **S — Situation :** Mise en contexte détaillée.
        - **O — Objectif :** L'enjeu stratégique.
        - **C — Contraintes :** Ce qu'il ne faut absolument pas faire.
        - **R — Rôle :** La posture professionnelle.
        - **A — Attentes :** Les critères de qualité ou livrables.
        - **T — Transparence :** Demander à l'IA d'expliquer son raisonnement.
        - **E — Exemples :** Fournir des exemples du rendu souhaité (*Few-shot prompting*).

=== "🛠️ Dépannage & Correctifs"

    | Problème rencontré | Solution / Reformulation à ajouter |
    | :--- | :--- |
    | **Hallucination / Invention de faits** | *"Base-toi EXCLUSIVEMENT sur le texte fourni ci-dessus. Si l'information n'y figure pas, réponds 'Information non disponible'."* |
    | **Réponse trop longue ou vague** | *"Réponds sous forme de tableau à 3 colonnes [Élément, Impact, Recommandation] en 150 mots maximum."* |
    | **Jargon / Ton inadapté** | *"Reformule en utilisant la méthode FALC (Facile À Lire et à Comprendre) pour un public non-technique."* |
    | **Réponse incomplète** | *"Découpe ta réponse en 3 étapes successives. Attends ma validation avant de passer à l'étape suivante."* |
