<?php

/*
 * Script permettant d'ajouter un modèle de maquette dans la base de données.
 */

/*
 * Import de la bibliothèque de fonctions gérant les requêtes SQL
 */
include "repository.php";

/*
 * Connexion à la base de données
 */
$db = openDatabase('classicmodels','root','troiswa');

/*
 * Recherche de la liste des catégories pour permettre à l'utilisateur de choisir
 * dans un menu déroulant la valeur qu'il cherche.
 */
$categories = findProductLines($db);

/*
 * Recherche de la liste des années des véhicules, codées dans le nom des maquettes.
 * L'utilisateur ne peut pas donner une année qui n'existe pas dans la base.
 */
$years = findYears($db);

/*
 * Le script 'index.php' peut être exécuté via des requêtes de type POST (formulaire
 * de recherche) ou des requêtes de type GET (redirections HTTP). Il faut don examiner
 * les deux cas.
 */
if(
  (isset($_POST['productLine']) || isset($_GET['productLine'])) // Soit on a un formulaire de recherche non-vide (cf. 'index.phtml'),
  &&
  (isset($_POST['modelYear']) || isset($_GET['modelYear'])) // soit on a des paramètres d'URL (cf 'update.php' ligne 61)
) {
  /*
   * On utilise l'opérateur ternaire pour déterminer où puiser la bonne information.
   * Si elle n'est pas dans le tableau $_POST, alors on est sûr de la trouver dans $_GET (cf. condition lignes 35-37)
   */
  $searchCategorie = isset($_POST['productLine']) ? $_POST['productLine'] : $_GET['productLine'];
  $searchYear = isset($_POST['modelYear']) ? $_POST['modelYear'] : $_GET['modelYear'];

  /*
   * Recherche de tous les modèles qui corresondent à une catégorie et une année donnée.
   */
  $models = findModels($db, $searchCategorie, $searchYear);
}

include "index.phtml";
