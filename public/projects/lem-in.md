# Lem-in

*Lem-in* est un projet qui se concentre sur la résolution efficace d'un problème de déplacement au sein d'un réseau. Le problème consiste à déplacer un groupe de fourmis d'une salle de départ à une salle d'arrivée à travers un réseau de salles et de tunnels, tout en minimisant le temps nécessaire pour le déplacement. Chaque tunnel et salle ne peut accueillir qu'une seule fourmi à la fois. Pour obtenir un déplacement optimal, nous trouvons d'abord tous les chemins possibles à travers le réseau. Ensuite, nous utilisons des critères spécifiques, tels que le taux de chevauchement et la longueur du chemin, pour sélectionner les chemins les plus efficaces tout en veillant à ce qu'ils respectent les contraintes définies.


## Fonctionnalités

- **Analyse syntaxique :** Le programme doit analyser efficacement l'entrée décrivant le réseau de salles et de tunnels.
- **Recherche du chemin optimal :** L'algorithme doit être capable de trouver l'ensemble de chemins le plus efficace pour déplacer les fourmis de la salle de départ à la salle d'arrivée.
- **Gestion des fourmis :** Le programme doit gérer le déplacement des fourmis à travers le réseau de salles, en veillant à ce qu'aucune salle ne soit surchargée et en optimisant leur chemin.
- **Optimisation du déplacement :** L'objectif est de minimiser le temps nécessaire au déplacement en répartissant judicieusement les fourmis sur les différents chemins disponibles.
- **Affichage du déplacement des fourmis :** Affiche les déplacements de chaque fourmi sur la sortie standard. Le format est `Lx-y` où `x` est le nom de la fourmi et `y` est sa salle de destination.