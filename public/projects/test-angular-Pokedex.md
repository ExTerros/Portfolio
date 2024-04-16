# Projet Angular - Liste de Pokémon

Ce projet Angular consiste en une application affichant une liste de Pokémon avec leurs caractéristiques telles que leur nom, leurs points de vie (HP), leurs points de combat (CP), leur image, et leurs types. Les Pokémon sont affichés sous forme de cartes avec des bordures colorées selon leur type.

## Structure du Projet

- **src/app/pokemon.ts** : Définition de la classe `Pokemon` avec ses attributs tels que `id`, `hp`, `cp`, `name`, `picture`, `types`, et `created`.
- **src/app/pokemon-type-color.pipe.ts** : Pipe Angular pour attribuer une couleur à chaque type de Pokémon.
- **src/app/mock-pokemon-list.ts** : Liste de Pokémon factices pour tester l'application.
- **border-card.directive.ts** : Directive pour appliquer une bordure personnalisée aux cartes de Pokémon.
- **src/app/app.module.ts** : Module principal de l'application déclarant les composants, les directives et les pipes utilisés.
- **src/app/app.component.ts** : Composant principal de l'application gérant l'affichage de la liste de Pokémon.
- **src/app/app.component.html** : Template HTML du composant principal affichant la liste de Pokémon.
- **src/app/app-routing.module.ts** : Module de routage de l'application (actuellement vide, mais peut être étendu pour la navigation entre les pages).

## Utilisation

Pour utiliser ce projet :

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js et Angular CLI installés.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez `ng serve` pour lancer le serveur de développement.
5. Accédez à `http://localhost:4200/` dans votre navigateur pour voir l'application.

## Fonctionnalités

- Affichage de la liste de Pokémon avec leurs caractéristiques.
- Sélection d'un Pokémon pour afficher ses détails.
- Application de bordures colorées aux cartes de Pokémon selon leur type.

