# 🚀 Prompting avancé : Few-Shot & Chain-of-Thought

Si les structures de base (Rôle, Contexte, Tâche, Format) permettent d'obtenir de très bons résultats avec les LLM, certaines tâches complexes nécessitent de **guider la logique** du modèle ou de lui **imposer un format ultra-strict**.

C'est là qu'interviennent deux techniques majeures du *Prompt Engineering* avancé : le **Few-Shot Prompting** et le **Chain-of-Thought** (Pensée étape par étape).

---

## 🎯 1. Le Few-Shot Prompting (L'apprentissage par l'exemple)

### C'est quoi ?
Par défaut, quand vous posez une question directe à l'IA sans lui donner d'exemple, on parle de **Zero-Shot**. 
Le **Few-Shot Prompting** consiste à fournir **1, 2 ou 3 exemples complets** (Entrée ➔ Sortie attendue) directement dans votre prompt avant de lui donner votre vraie demande.

### Pourquoi l'utiliser ?
* Pour imposer un **format de sortie très spécifique** (ex: JSON, tableau, structure de mail particulière).
* Pour transmettre un **ton ou un style rédactionnel** difficile à décrire uniquement avec des adjectifs.
* Pour du **classage / catégorisation de données** métiers.

### 💡 Exemple comparatif

=== "❌ Zero-Shot (Résultat imprévisible)"
    ```text
    Analyse les retours clients suivants et extrait le sentiment ainsi que le produit concerné :
    "La machine à café fuit depuis deux jours, c'est inadmissible."
    ```

=== "✅ Few-Shot (Résultat garanti et calibré)"
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

> 📌 **Conseil pratique :** 2 à 3 exemples suffisent généralement. Au-delà, vous consommez inutilement de la fenêtre de contexte sans gain majeur de précision.

---

## 🧠 2. Le Chain-of-Thought (La réflexion étape par étape)

### C'est quoi ?
Les LLM prédisent les mots les uns après les autres. Si vous leur demandez de résoudre un problème complexe ou un calcul d'un seul coup, ils risquent de "sauter" vers une mauvaise conclusion.

Le **Chain-of-Thought (CoT)** consiste à forcer l'IA à **détailler son raisonnement intermédiaire** avant de donner la réponse finale.

### Pourquoi l'utiliser ?
* Pour résoudre des **problèmes de logique, de mathématiques ou de statistiques**.
* Pour analyser des **textes réglementaires ou juridiques** complexes.
* Pour éviter les **hallucinations** lors de prises de décision à étapes multiples.

### 💡 Comment le déclencher dans votre prompt ?

Il existe deux manières simples d'activer le Chain-of-Thought :

#### 1. La formule magique (Zero-Shot CoT)
Ajoutez simplement cette phrase à la fin de votre prompt :
> *"Réflechis étape par étape avant de donner ta réponse finale."*

#### 2. Le guidage explicite de la réflexion
Structurez votre prompt en lui dictant le cheminement intellectuel à suivre :

    ```text
    Tu dois évaluer si notre projet est éligible à la prime énergie 2026.
    
    Avant de donner ton verdict final, déroule ton analyse selon les étapes suivantes :
    1. Liste les critères d'éligibilité légaux basés sur le document fourni.
    2. Vérifie un par un si notre projet coche chaque critère (Indique : Validé / Non validé / À vérifier).
    3. Calcule le montant estimé en détaillant la formule utilisée.
    4. Conclus par un verdict clair : Éligible / Non éligible.

---

## 🧪 À vous de jouer : Testez vos prompts

<div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <h3 style="margin-top:0; color: #1e293b; display: flex; align-items: center; gap: 8px;">
    🧪 <span>Mini-Jeu : Optimise ton Prompt</span>
  </h3>
  <p style="font-size: 0.9em; color: #64748b; margin-bottom: 12px;">
    Testez la combinaison des deux méthodes ! Ajoutez des mots-clés de structure comme <b>"Exemple"</b> (Few-Shot) et/ou <b>"Étape par étape"</b> (Chain-of-Thought) pour observer le résultat.
  </p>
  
  <div style="margin-bottom: 12px;">
    <textarea id="promptInput" style="width: 100%; height: 75px; padding: 10px; border-radius: 8px; border: 1px solid #cbd5e1; font-family: sans-serif; font-size: 0.9em; resize: vertical;" placeholder="Écrivez votre prompt ici...">Analyse les avis clients suivants et extrais les sentiments.</textarea>
  </div>

  <button onclick="testPromptSim()" style="background: #2563eb; color: white; border: none; padding: 8px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85em; transition: all 0.2s;">
    🚀 Exécuter le Prompt
  </button>

  <div id="promptResult" style="margin-top: 15px; display: none; padding: 12px 16px; border-radius: 8px; font-size: 0.9em; line-height: 1.5;"></div>
</div>

<script>
function testPromptSim() {
  const input = document.getElementById("promptInput").value.toLowerCase();
  const res = document.getElementById("promptResult");
  res.style.display = "block";
  
  const hasExamples = input.includes("exemple") || input.includes("sample");
  const hasCoT = input.includes("étape") || input.includes("etape") || input.includes("réfléchis") || input.includes("raisonne");
  const hasFormat = input.includes("format") || input.includes("json") || input.includes("tableau");

  if (hasExamples && (hasCoT || hasFormat)) {
    res.style.background = "#dcfce7";
    res.style.border = "1px solid #86efac";
    res.style.color = "#14532d";
    res.innerHTML = "🎯 <b>Prompt Expert (Few-Shot + Chain-of-Thought) !</b><br>L'IA a toutes les clés : elle analyse avec méthode et génère un résultat 100% calibré sans hallucination.";
  } else if (hasExamples || hasCoT || hasFormat) {
    res.style.background = "#fef9c3";
    res.style.border = "1px solid #fde047";
    res.style.color = "#713f12";
    res.innerHTML = "⚡ <b>Bon Prompt (Niveau Intermédiaire) !</b><br>Vous avez ajouté de la structure. Pour un résultat optimal, combinez un <i>Exemple</i> (Few-Shot) avec une consigne de <i>Réflexion étape par étape</i> (Chain-of-Thought).";
  } else {
    res.style.background = "#fee2e2";
    res.style.border = "1px solid #fca5a5";
    res.style.color = "#7f1d1d";
    res.innerHTML = "⚠️ <b>Prompt Zero-Shot basique !</b><br>L'IA risque de répondre de façon imprévisible. Essayez d'ajouter le mot <i>'Exemple'</i> ou la consigne <i>'Réflechis étape par étape'</i>.";
  }
}
</script>

---

## 📊 Résumé : Quelle technique utiliser et quand ?

| Technique | Quand l'utiliser ? | Bénéfice principal |
| :--- | :--- | :--- |
| **Zero-Shot** | Questions simples, rédaction standard, synthèses rapides. | Rapidité et simplicité. |
| **Few-Shot** | Formats stricts, ton spécifique, classification de données. | Respect parfait de la structure désirée. |
| **Chain-of-Thought** | Calculs, logique, analyse juridique, prise de décision complexe. | Réduction drastique des erreurs et hallucinations. |

---

!!! tip "💡 Combiner les deux pour un prompt parfait"
    Pour les tâches les plus critiques, combinez le **Few-Shot** et le **Chain-of-Thought** : donnez un exemple à l'IA où vous lui montrez *comment* réfléchir étape par étape avant d'afficher le résultat !
