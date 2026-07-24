# Prompting avancé : Few-Shot & Chain-of-Thought

Si les structures de base (Rôle, Contexte, Tâche, Format) permettent déjà d’obtenir de très bons résultats avec les LLM, certaines tâches complexes nécessitent de mieux guider la logique du modèle ou de lui imposer un format très strict.

<div class="summary-box" markdown="block">
<h3>🎯 Ce que cet article apporte</h3>

- Comprendre la différence entre Zero-Shot, Few-Shot et Chain-of-Thought.
- Savoir quand ajouter des exemples dans un prompt.
- Savoir quand demander une réflexion étape par étape.
- Tester concrètement l’impact de ces techniques sur la qualité des réponses.
</div>

---

## 1. Le Few-Shot Prompting

### C’est quoi ?

Par défaut, quand vous posez une question directe à l’IA sans lui donner d’exemple, on parle de **Zero-Shot**.

Le **Few-Shot Prompting** consiste à fournir 1, 2 ou 3 exemples complets (*Entrée → Sortie attendue*) directement dans le prompt avant de formuler la vraie demande.

### Pourquoi l’utiliser ?

- Pour imposer un **format de sortie très spécifique** (JSON, tableau, structure de mail, etc.).
- Pour transmettre un **ton ou un style rédactionnel** difficile à décrire uniquement avec des adjectifs.
- Pour des usages de **classement ou catégorisation** de données métiers.

## Exemple comparatif

=== "Zero-Shot"
    ```text
    Analyse les retours clients suivants et extrait le sentiment ainsi que le produit concerné :
    "La machine à café fuit depuis deux jours, c'est inadmissible."
    ```

=== "Few-Shot"
    ```text
    Tu es un assistant de service client. Analyse le retour et extrait le sentiment et le produit selon la structure exacte des exemples.

    Exemple 1 :
    Texte : "La livraison a pris 3 semaines de retard, je suis furieux."
    Produit : Livraison
    Sentiment : Négatif

    Exemple 2 :
    Texte : "L'application mobile est ultra fluide, bravo à l'équipe !"
    Produit : Application mobile
    Sentiment : Positif

    Texte à analyser :
    Texte : "La machine à café fuit depuis deux jours, c'est inadmissible."
    Produit :
    Sentiment :
    ```

<div class="good-reflex-box" markdown="block">
<h3>✅ Bon réflexe</h3>

2 à 3 exemples suffisent généralement.

Au-delà, vous consommez souvent de la fenêtre de contexte sans gain majeur de précision.
</div>

---

## 2. Le Chain-of-Thought

### C’est quoi ?

Les LLM génèrent leur réponse mot après mot. Quand on leur demande de résoudre un problème complexe d’un seul coup, ils peuvent sauter trop vite à une conclusion erronée.

Le **Chain-of-Thought** consiste à demander explicitement à l’IA de détailler son raisonnement intermédiaire avant de donner la réponse finale.

### Pourquoi l’utiliser ?

- Pour résoudre des **problèmes de logique, de mathématiques ou de statistiques**.
- Pour analyser des **textes réglementaires ou juridiques** plus complexes.
- Pour réduire les erreurs sur des **prises de décision à plusieurs étapes**.

## Deux façons de le déclencher

### 1. La formule simple

Ajoutez à la fin du prompt :

> *Réfléchis étape par étape avant de donner ta réponse finale.*

### 2. Le guidage explicite

Donnez à l’IA le cheminement à suivre :

```text
Tu dois évaluer si notre projet est éligible à la prime énergie 2026.

Avant de donner ton verdict final, déroule ton analyse selon les étapes suivantes :
1. Liste les critères d'éligibilité légaux basés sur le document fourni.
2. Vérifie un par un si notre projet coche chaque critère (Indique : Validé / Non validé / À vérifier).
3. Calcule le montant estimé en détaillant la formule utilisée.
4. Conclus par un verdict clair : Éligible / Non éligible.
```

<div class="warning-practice-box" markdown="block">
<h3>🛑 Point de vigilance</h3>

Demander un raisonnement détaillé n’assure pas automatiquement une réponse juste.

Il faut toujours vérifier les faits, les calculs et les sources lorsque l’enjeu est important.
</div>

---

## 3. Testez vos prompts

<div class="wiki-card" markdown="block">
<h3>Mini-jeu : optimise ton prompt</h3>

Teste l’effet de mots-clés comme **Exemple**, **Format**, ou **Étape par étape** pour voir comment la qualité du prompt évolue.
</div>

<div class="prompt-generator advanced-prompt-tester">
  <label for="promptInput">Votre prompt à tester</label>
  <textarea id="promptInput" placeholder="Écrivez votre prompt ici...">Analyse les avis clients suivants et extrais les sentiments.</textarea>

  <div class="wiki-actions">
    <button type="button" id="prompt-test-button" class="wiki-button primary">Exécuter le prompt</button>
  </div>

  <div id="promptResult" class="summary-box" style="display: none;"></div>
</div>

---

## 4. Quelle technique utiliser et quand ?

| Technique | Quand l’utiliser ? | Bénéfice principal |
| :--- | :--- | :--- |
| **Zero-Shot** | Questions simples, rédaction standard, synthèses rapides. | Rapidité et simplicité. |
| **Few-Shot** | Formats stricts, ton spécifique, classification de données. | Respect plus fiable de la structure attendue. |
| **Chain-of-Thought** | Calculs, logique, analyse réglementaire, décision complexe. | Réduction des erreurs sur les tâches à étapes multiples. |

---

<div class="summary-box" markdown="block">
<h3>💡 Combiner les deux</h3>

Pour les tâches les plus sensibles, combinez **Few-Shot** et **Chain-of-Thought** :
- montrez un exemple du résultat attendu ;
- puis indiquez à l’IA comment raisonner avant de conclure.

C’est souvent la meilleure combinaison pour obtenir une réponse à la fois structurée et plus fiable.
</div>
