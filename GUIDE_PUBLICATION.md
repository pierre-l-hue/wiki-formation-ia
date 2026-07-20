# Guide de publication — Wiki formation IA

Ce guide vous explique comment mettre votre wiki en ligne, gratuitement, en une seule fois. Ensuite, ajouter du contenu prendra 2 minutes.

## Étape 1 — Créer le dépôt (le "dossier" du site)

1. Allez sur [github.com/new](https://github.com/new)
2. Nom du dépôt : `wiki-formation-ia` (ou le nom que vous voulez)
3. Cochez **Public**
4. Ne cochez rien d'autre (pas de README, pas de licence)
5. Cliquez sur **Create repository**

## Étape 2 — Envoyer les fichiers

Sur la page qui s'affiche, cherchez le lien **"uploading an existing file"** (ou "téléverser des fichiers existants").

1. Cliquez dessus
2. Glissez-déposez **tout le contenu** du dossier que je vous fournis (gardez la structure des sous-dossiers `docs/`, `.github/`)
3. En bas de page, cliquez sur **Commit changes**

!!! warning "Important"
    Le dossier `.github` est caché par défaut sur votre ordinateur. Si vous glissez-déposez le dossier complet `wiki-formation`, tout part avec, y compris `.github`. Ne recréez pas les fichiers un par un.

## Étape 3 — Activer la publication automatique

1. Dans votre dépôt GitHub, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Build and deployment", choisissez la source **Deploy from a branch**
4. Sélectionnez la branche **gh-pages** et le dossier **/ (root)**
5. Cliquez sur **Save**

La première publication se lance automatiquement (comptez 1 à 2 minutes). Vous pouvez suivre sa progression dans l'onglet **Actions** de votre dépôt.

## Étape 4 — Trouver votre lien

Toujours dans **Settings → Pages**, votre lien apparaît en haut, sous la forme :

```
https://votre-nom-utilisateur.github.io/wiki-formation-ia/
```

C'est ce lien que vous partagerez à vos apprenants pendant vos séances au téléphone.

---

## Ajouter un nouvel article (une fois le site en ligne)

1. Ouvrez votre dépôt sur GitHub
2. Allez dans le dossier `docs/articles/`
3. Cliquez sur **Add file → Create new file**
4. Nommez-le, par exemple `nouveaux-outils-2026.md`
5. Écrivez votre texte (voir la mini-syntaxe ci-dessous)
6. En bas, cliquez sur **Commit changes**
7. Ouvrez le fichier `mkdocs.yml` à la racine, cliquez sur le crayon (éditer), ajoutez une ligne sous `Articles:` :
   ```
   - Nouveaux outils 2026: articles/nouveaux-outils-2026.md
   ```
8. Cliquez sur **Commit changes**

Le site se republie tout seul (1 à 2 minutes). Vous n'avez jamais besoin d'installer quoi que ce soit sur votre ordinateur : tout se passe dans le navigateur, sur github.com.

## Mini-syntaxe Markdown (pour écrire vos articles)

```
# Titre principal
## Sous-titre

Texte normal, comme dans un mail.

- Un élément de liste
- Un autre élément

**Mot en gras**

> Une citation ou un encart
```

## Besoin d'aide plus tard ?

Revenez me voir avec votre lien GitHub ou un message d'erreur précis (copié depuis l'onglet Actions), je pourrai vous aider à diagnostiquer.
