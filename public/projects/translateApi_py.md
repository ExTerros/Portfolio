# translateApi_py

Un projet fournissant des outils pour combiner avec un mod Minecraft, permettant la traduction en jeu de panneaux et de livres.

## Introduction

Ce projet fournit un ensemble d'outils pour combiner avec un mod Minecraft, permettant la traduction en jeu de panneaux et de livres. Le code comprend des scripts Python pour gérer la gestion des clés API, les requêtes de traduction et d'autres fonctionnalités liées à la traduction dans le contexte du jeu Minecraft.

## Contenu des fichiers

- **add_new_user.py** : Ce fichier gère l'ajout d'un nouvel utilisateur dans la base de données, vérifiant s'il existe déjà dans la base de données et l'insérant sinon.
- **db_init.py** : Ce fichier initialise la base de données en créant les tables nécessaires pour stocker les clés API et les demandes de traduction.
- **requirement.txt** : Ce fichier contient les dépendances Python nécessaires pour exécuter le projet.
- **translate_api.py** : Ce fichier contient le code principal de l'API de traduction, utilisant Flask pour les routes et Google Translate pour la traduction effective.

## Installation

1. Assurez-vous d'avoir Python installé sur votre système.
2. Installez les dépendances en exécutant `pip install -r requirement.txt`.
3. Assurez-vous d'avoir configuré votre base de données MySQL en fonction des informations d'accès fournies dans le fichier `.env`.
4. Exécutez `python db_init.py` pour initialiser la base de données.
5. Exécutez `python translate_api.py` pour démarrer l'API de traduction.

## Utilisation

- L'API de traduction peut être utilisée en effectuant des requêtes HTTP aux points de terminaison spécifiés dans `translate_api.py`.
- Les utilisateurs peuvent obtenir une clé API en exécutant `add_new_user.py` et en fournissant les informations requises.
- Les demandes de traduction peuvent être effectuées en utilisant l'endpoint `/get` avec les paramètres appropriés.

## Remarques

- Assurez-vous d'avoir correctement configuré les variables d'environnement dans le fichier `.env` pour accéder à votre base de données MySQL.
- Veillez à respecter les quotas et les conditions d'utilisation de l'API Google Translate pour éviter les problèmes de blocage ou de limitation.

