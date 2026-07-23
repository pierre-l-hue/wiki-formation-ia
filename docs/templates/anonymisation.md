# Template — Anonymisation avant usage IA

Avant de coller un texte dans une IA, vérifiez qu’il ne contient pas de données sensibles.

---

## Données à remplacer

| Donnée réelle | Remplacement conseillé |
|---|---|
| Nom d’une personne | Personne A, Client B, Salarié C |
| Email | email@example.com |
| Téléphone | 00 00 00 00 00 |
| Adresse | Ville ou région seulement |
| Nom d’entreprise confidentiel | Entreprise A |
| Montant précis | Montant approximatif ou catégorie |
| Numéro de contrat | Référence anonymisée |
| Donnée de santé | À supprimer |
| Salaire | Fourchette ou information supprimée |
| Conflit interne | Description neutre et générale |

---

## Prompt utile

    Tu vas m’aider à anonymiser un texte avant usage avec une IA générative.

    Objectif :
    Repère toutes les données personnelles, confidentielles ou sensibles.

    Pour chaque élément sensible, propose :
    - le type de donnée ;
    - le risque ;
    - une version anonymisée.

    Texte à analyser :
    [coller ici le texte]

---

## Checklist avant envoi

- [ ] J’ai supprimé les noms et prénoms.
- [ ] J’ai supprimé les emails.
- [ ] J’ai supprimé les numéros de téléphone.
- [ ] J’ai supprimé les adresses précises.
- [ ] J’ai supprimé les données de santé.
- [ ] J’ai supprimé les montants confidentiels.
- [ ] J’ai supprimé les informations RH sensibles.
- [ ] J’ai relu le prompt avant envoi.

---

## Bon réflexe

!!! warning "À éviter"
    Si l’information ne doit pas être visible par tout le monde dans l’entreprise, ne la mettez pas dans une IA grand public.
