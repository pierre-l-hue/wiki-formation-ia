# Template — Anonymisation avant usage IA

La protection des données personnelles et confidentielles est un prérequis absolu avant tout usage de l’IA générative. Ce template fournit une méthode pas à pas pour nettoyer les textes, masquer les variables sensibles et garantir la conformité RGPD avant d’envoyer la moindre requête à un modèle d’IA.

<div class="summary-box" markdown="block">
<h3>🎯 Objectifs du template</h3>

- Protéger les données personnelles : supprimer ou remplacer tout élément identifiable (RGPD).
- Préserver le secret des affaires : masquer les informations financières, stratégiques ou contractuelles.
- Conserver le contexte : anonymiser sans perdre le sens du texte pour permettre à l’IA d’apporter une réponse pertinente.
</div>

---

## 📌 Règle de remplacement des données

Avant de soumettre un document ou un message à l’IA, appliquez la **technique du masque** en utilisant ce tableau de correspondance :

| Type de donnée réelle | Exemple réel | Remplacement conseillé |
| :--- | :--- | :--- |
| **Nom d’une personne** | *Marie Dupont, Jean Martin* | `[Personne A]`, `[Client B]`, `[Salarié C]` |
| **Adresse email** | *m.dupont@entreprise.com* | `email@example.com` ou `[Email]` |
| **Numéro de téléphone** | *06 12 34 56 78* | `00 00 00 00 00` ou `[Téléphone]` |
| **Adresse postale** | *12 rue de la Paix, Paris* | `[Ville]` ou `[Région]` uniquement |
| **Nom d’entreprise** | *Acme Corporation* | `[Entreprise A]`, `[Société X]` |
| **Montant financier** | *42 350 € HT* | `[Montant du devis]` ou fourchette neutre |
| **Référence contractuelle** | *Contrat n°2026-89A* | `[Référence contrat]` |
| **Donnée de santé** | *Arrêt maladie pour burn-out* | 🛑 À supprimer totalement |
| **Salaire / paie** | *3 800 € brut/mois* | `[Niveau de rémunération]` ou supprimer |
| **Conflit / sanction** | *Litige avec M. X pour faute* | Description neutre, factuelle et générale |

---

## 🛠️ Prompt modèle : Assistant d’anonymisation

Utilisez ce prompt pour demander à l’IA de scanner un texte et d’identifier elle-même les zones à risque avant traitement :

```text
CONTEXTE :
Je souhaite utiliser un texte dans un outil d’IA générative, mais je dois m’assurer
qu’il ne contient aucune donnée personnelle ou confidentielle.

RÔLE :
Agis comme un DPO (Délégué à la Protection des Données) et expert en sécurité de l’information.

OBJECTIF :
Analyse le texte ci-dessous et repère toutes les données personnelles, confidentielles
ou sensibles (RGPD, secret des affaires).

FORMAT DE RÉPONSE :
Pour chaque élément à risque détecté, présente un tableau avec 3 colonnes :
1. Élément détecté
2. Type de risque (RGPD, Financier, RH, Stratégique)
3. Proposition de remplacement neutre (ex : [Client A], [Montant X])

Propose ensuite une version finale 100% anonymisée du texte, prête à être réutilisée.

TEXTE À ANALYSER :
"[Coller ici votre texte brut]"
```

---

## ⚠️ Vigilance et bon réflexe

<div class="warning-practice-box" markdown="block">
<h3>🛑 À éviter absolument</h3>

Si une information ne doit pas être accessible à l’ensemble des collaborateurs ou au grand public, ne l’insérez jamais dans un outil d’IA grand public.

Ne vous reposez pas uniquement sur les options de suppression ou de confidentialité annoncées : une donnée partagée dans un modèle non sécurisé peut être conservée ou utilisée pour le réentraînement.
</div>

<div class="good-reflex-box" markdown="block">
<h3>✅ Le bon réflexe : la règle du double coup d’œil</h3>

- Étape 1 : masquer les données directement dans le traitement de texte avant de copier la note.
- Étape 2 : relire uniquement les variables entre crochets `[...]` juste avant de cliquer sur « Envoyer ».
- Étape 3 : après la génération de l’IA, réinjecter les vraies données dans le document final sur le poste local.
</div>

---

## 🚀 Checklist de validation avant envoi

<div class="summary-box" markdown="block">
<h3>Checklist « Zéro fuite de données »</h3>

- [ ] Tous les noms et prénoms ont été retirés.
- [ ] Les adresses emails et numéros de téléphone ont été remplacés.
- [ ] Les adresses postales précises ont été masquées.
- [ ] Les données relatives à la santé ou à la vie privée ont été supprimées.
- [ ] Les montants chiffrés et références de devis/contrats ont été anonymisés.
- [ ] Les informations RH sensibles (sanctions, évaluations, conflits) ont été neutralisées.
- [ ] Le prompt final a été relu pour vérifier qu’aucune donnée d’entreprise sensible n’est visible.
</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../prompt-croft/">Template suivant : Prompt CROFT ➔</a>
  <a class="wiki-button" href="../">Vue d’ensemble des ressources</a>
</div>
