# Cas pratique — Assistant administratif

## Situation

Vous travaillez dans une PME.  
Vous gérez des emails, des comptes-rendus, des documents internes et des demandes clients.

Votre objectif : gagner du temps sans perdre en qualité ni partager de données sensibles.

---

## Tâches où l’IA peut aider

| Tâche | Aide possible de l’IA | Vigilance |
|---|---|---|
| Répondre à des emails courants | Proposer une réponse claire et professionnelle | Ne pas copier de données client sensibles |
| Résumer une réunion | Transformer des notes en compte-rendu structuré | Vérifier les décisions et responsabilités |
| Reformuler un document | Clarifier le style et corriger les fautes | Garder le sens initial |
| Préparer une liste d’actions | Extraire les tâches à faire | Valider humainement les priorités |

---

## Prompt utile

```text
Tu es assistant administratif dans une PME.

Objectif :
Reformule cet email pour le rendre plus clair, professionnel et chaleureux.

Contexte :
Le message est destiné à un client.

Contraintes :
- ne pas ajouter d’information inventée ;
- garder un ton professionnel ;
- faire court ;
- proposer un objet d’email.

Texte à reformuler :
[coller ici une version anonymisée du texte]
 ```

## À éviter
!!! warning "À éviter"
Ne collez pas directement un email contenant :
- le nom complet d’un client ;
- une adresse email ;
- un numéro de téléphone ;
- un montant confidentiel ;
- une information contractuelle sensible.
  
## Bon réflexe
!!! success "Bon réflexe"
Avant de coller un texte dans une IA, remplacez les informations sensibles par des exemples neutres.
Exemple :
- `Marie Dupont` devient `Client A`
- `12 500 €` devient `montant du devis`
- `contrat signé le 12 mars` devient `contrat signé à une date donnée`
  
