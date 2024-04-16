# Portfolio Nicolas Duval

Ce dépôt contient le code source de mon portfolio personnel.

## Structure du dossier

- **public/** : Ce dossier contient les ressources publiques du site.
  - **img/** : Contient le logo du site et les images pour les métadonnées.
  - **pdf/** : Contient mon CV au format PDF (`CV_nicolas.pdf`).
  - **Projets/** : Contient les fichiers markdown décrivant certains de mes projets.
  - **projects-list.json** : Un fichier JSON contenant des informations sur mes projets, y compris leur titre, description, lien vers le dépôt GitHub, et s'ils sont privés ou non.
- **src/** : Ce dossier contient le code source de l'application React.
  - **components/** : Contient les composants réutilisables de l'application.
  - **pages/** : Contient les pages de l'application.
  - **services/** : Contient les services utilisés pour récupérer les données des projets depuis GitHub.
- **package.json** : Fichier de configuration npm contenant les dépendances et les scripts de construction, de développement et de linting.
- **index.html** : Fichier HTML principal de l'application.
- **src/Root.jsx** : Composant racine de l'application, qui gère le routage et l'affichage de la page principale.
- **src/main.jsx** : Point d'entrée de l'application React.
- **src/index.css** : Feuille de style globale de l'application.

## Fonctionnalités

- Affichage de ma présentation personnelle.
- Liste de mes projets avec leurs descriptions.
- Affichage détaillé de chaque projet avec des liens vers les dépôts GitHub correspondants.

## Technologies utilisées

- React.js
- React Router
- GitHub API (pour récupérer les informations sur les projets)
- Tailwind CSS (pour le stylage)

## Comment exécuter localement

1. Cloner ce dépôt : `git clone https://github.com/ExTerros/Portfolio.git`
2. Accéder au dossier du projet : `cd Portfolio`
3. Installer les dépendances : `npm install`
4. Lancer l'application en mode développement : `npm run dev`