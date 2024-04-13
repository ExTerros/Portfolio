# Blind-Test en Ligne avec Socket.io

Ce projet propose une plateforme de blind-test en ligne où les utilisateurs peuvent jouer à partir de leur téléphone tout en utilisant un PC comme hôte pour la partie. La communication entre le PC et les téléphones des joueurs est gérée grâce à Socket.io.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) - version 12.x ou supérieure
- [npm](https://www.npmjs.com/) - généralement installé avec Node.js

## Dépendance

Voici les dépendances qui seront installées avec npm install.

- [Socket.io](https://socket.io) - Bibliothèque qui permet une communication bidirectionnelle entre un client et un serveur, souvent utilisée avec Node.js.
- [express](https://www.npmjs.com/package/express) - Framework Web rapide, sans opinion et minimaliste pour Node.js, facilitant la création d'applications Web et d'API.
- [express-session](https://www.npmjs.com/package/express-session) - Module permettant la gestion des sessions dans les applications Express, facilitant le stockage et la récupération des données de session.
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Moteur de modèle pour Express qui facilite l'intégration de vues dans vos applications, avec une syntaxe flexible.
- [body-parser](https://www.npmjs.com/package/body-parser) - Module facilitant l'interprétation du corps JSON d'une réponse HTTP dans les applications Express.
- [youtube-stream-url](https://github.com/dangdungcntt/youtube-stream-url) - Obtenez l'URL du flux de la vidéo YouTube dans node.js.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Module facilitant l'interprétation des cookies dans les applications Express, utile pour la gestion des sessions et de l'authentification.
- [flowbite](https://flowbite.com) - extension de tailwindcss

## Installation

1. Clonez ce dépôt sur votre machine :
    ```bash
    git clone https://github.com/ExTerros/Blind-Test-Socket.io.git
    cd Blind-Test-Socket.io
    node .\server.js
    ```

2. Installez les dépendances du projet :
    ```bash
    npm install
    ```

## Configuration

1. Ouvrez le fichier `config.json` et ajustez les paramètres selon vos besoins, tels que le port d'écoute.

## Utilisation

1. Démarrez le serveur sur votre PC :
    ```bash
    npm start
    ```

2. Les joueurs peuvent accéder à la partie en ouvrant le navigateur de leur téléphone et en se connectant à l'adresse IP de votre PC avec le port spécifié.

3. Amusez-vous bien avec le blind-test en ligne !

## Fonctionnalités

- **Multi-joueur**: Permet à plusieurs utilisateurs de se connecter simultanément.
- **Communication en temps réel**: Utilise Socket.io pour une communication bidirectionnelle entre le PC et les téléphones des joueurs.
- **Personnalisation**: Adaptez le blind-test en modifiant les paramètres dans le fichier de configuration.

---

**Note**: N'oubliez pas de personnaliser chaque section en fonction des spécificités de votre projet.