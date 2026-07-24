# Template — Anonymisation avant usage IA

La protection des données personnelles et confidentielles est un prérequis absolu avant tout usage de l'IA générative. Ce template vous fournit une méthode pas à pas pour nettoyer vos textes, masquer vos variables sensibles et garantir la conformité RGPD avant d'envoyer la moindre requête à un modèle d'IA.

<div class="summary-box">

<h3>🎯 Objectifs du template</h3>

  <ul>
    <li><strong>**Protéger les données personnelles :** supprimer ou remplacer tout élément identifiable (RGPD).</li>
<li><strong>**Préserver le secret des affaires :** masquer les informations financières, stratégiques ou contractuelles.</li>
<li><strong>**Conserver le contexte :** anonymiser sans perdre le sens du texte pour permettre à l'IA d'apporter une réponse pertinente.</li>

</div>

---

## 📌 Règle de remplacement des données

Avant de soumettre un document ou un message à l'IA, appliquez la **technique du masque** en utilisant ce tableau de correspondance :

| Type de donnée réelle | Exemple réel | Remplacement conseillé |
| :--- | :--- | :--- |
| **Nom d'une personne** | *Marie Dupont, Jean Martin* | `[Personne A]`, `[Client B]`, `[Salarié C]` |
| **Adresse email** | *m.dupont@entreprise.com* | `email@example.com` ou `[Email]` |
| **Numéro de téléphone** | *06 12 34 56 78* | `00 00 00 00 00` ou `[Téléphone]` |
| **Adresse postale** | *12 rue de la Paix, Paris* | `[Ville]` ou `[Région]` uniquement |
| **Nom d'entreprise** | *Acme Corporation* | `[Entreprise A]`, `[Société X]` |
| **Montant financier** | *42 350 € HT* | `[Montant du devis]` ou fourchette neutre |
| **Référence contractuelle** | *Contrat n°2026-89A* | `[Référence contrat]` |
| **Donnée de santé** | *Arrêt maladie pour burn-out* | 🛑 **À supprimer totalement** |
| **Salaire / Paie** | *3 800 € brut/mois* | `[Niveau de rémunération]` ou supprimer |
| **Conflit / Sanction** | *Litige avec M. X pour faute* | Description neutre, factuelle et générale |

---

## 🛠️ Prompt modèle : Assistant d'anonymisation

Utilisez ce prompt pour demander à l'IA de scanner votre texte et d'identifier elle-même les zones à risques avant traitement :

```text
CONTEXTE :
Je souhaite utiliser un texte dans un outil d'IA générative, mais je dois m'assurer qu'il ne contient aucune donnée personnelle ou confidentielle.

RÔLE :
Agis comme un DPO (Délégué à la Protection des Données) et expert en sécurité de l'information.

OBJECTIF :
Analyse le texte ci-dessous et repère toutes les données personnelles, confidentielles ou sensibles (RGPD, secret des affaires).

FORMAT DE RÉPONSE :
Pour chaque élément à risque détecté, présente un tableau avec 3 colonnes :
1. Élément détecté
2. Type de risque (RGPD, Financier, RH, Stratégique)
3. Proposition de remplacement neutre (ex: [Client A], [Montant X])

Propose ensuite une version finale 100 % anonymisée du texte, prête à être réutilisée.

TEXTE À ANALYSER :
"[Coller ici votre texte brut]"
```

---

## ⚠️ Vigilance & Bon réflexe

<div class="warning-practice-box">

<h3>🛑 À éviter absolument</h3>

Si une information ne doit pas être accessible à l'ensemble des collaborateurs de votre entreprise ou au grand public, **ne l'insérez jamais dans un outil d'IA grand public**. 

Ne faites pas confiance aux options de suppression par défaut : une donnée partagée dans un modèle non sécurisé peut être conservée dans l'historique ou utilisée pour le réentraînement des modèles.

</div>

<div class="good-reflex-box">

<h3>✅ Le bon réflexe : La règle du "Double Coup d'Œil"</h3>

* **Étape 1 :** Masquez les données directement dans votre traitement de texte avant de copier la note.
* **Étape 2 :** Relisez uniquement les variables entre crochets `[...]` juste avant de cliquer sur "Envoyer".
* **Étape 3 :** Après la génération de l'IA, réinjectez vos vraies données dans le document final sur votre poste local.

</div>

---

## 🚀 Checklist de validation avant envoi

<div class="summary-box">

<h3>Checklist "Zéro Fuite de Données" :</h3>

- [ ] J'ai supprimé tous les noms et prénoms.
- [ ] J'ai remplacé les adresses emails et numéros de téléphone.
- [ ] J'ai masqué les adresses postales précises.
- [ ] J'ai supprimé toutes les données relatives à la santé ou à la vie privée.
- [ ] J'ai anonymisé les montants chiffrés et les références de devis/contrats.
- [ ] J'ai neutrisé les informations RH sensibles (sanctions, évaluations, conflits).
- [ ] J'ai relu une dernière fois le prompt final pour m'assurer qu'aucune donnée d'entreprise n'est visible.

</div>

---

<div class="wiki-actions">
  <a class="wiki-button primary" href="../prompt-croft/">Template suivant : Prompt CROFT ➔</a>
  <a class="wiki-button" href="../">Vue d'ensemble des ressources</a>
</div>
