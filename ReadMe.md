# Projet de Site : Au Max !

Ce projet consiste en la création d'un site avec des fonctionnalités de CRUD et d'affichage de produits à partir d'une base de données MySQL. Le projet utilise Node.js avec Express pour le back-end, MySQL pour la base de données, et EJS comme moteur de template pour générer les vues HTML.

## Installation de WampServer (Windows)

1. Téléchargez et installez [WampServer]
```bash 
http://www.wampserver.com/en/
```
2. Suivez les instructions d'installation fournies par l'installateur.
3. Assurez-vous que le service Apache et le service MySQL sont démarrés depuis la fenêtre de gestion de WampServer.

## Configuration de la base de données

1. Ouvrez phpMyAdmin en cliquant sur l'icône WampServer dans la barre des tâches, puis en sélectionnant "phpMyAdmin".
2. Créez une nouvelle base de données nommée `nom_de_ta_base_de_donnees`.
3. Importez le fichier SQL `tp_nodejs_siteweb.sql` fourni dans le répertoire git pour créer la structure de la base de données.

## Configuration du projet Node.js

1. Clonez ce dépôt Git ou téléchargez-le sur votre ordinateur.
2. Assurez-vous d'avoir Node.js et npm installés sur votre machine.
3. Ouvrez une invite de commande dans le répertoire racine du projet.
4. Installez les dépendances du projet en exécutant la commande suivante :
```bash
npm install
```
5. Configurez les paramètres de connexion à la base de données dans le fichier `utils/database.js`.

## Lancement de l'application

Une fois que WampServer est démarré et que la base de données est configurée, vous pouvez démarrer l'application Node.js.

1. Ouvrez une invite de commande dans le répertoire racine du projet.
2. Lancez l'application en exécutant la commande suivante :
```bash
npm start
```
3. L'application devrait maintenant être accessible dans votre navigateur web, à l'adresse suivante :  
```bash
http://localhost:4000
```

## Info
Vous retrouvez une bibliothèque de fonction basique dans le dossier utils.

Ces fonctions proviennes du Cours.md ci-joint au projet. 

## Auteur

Ce projet a été réalisé par Max-Yves MASTRODICASA.
