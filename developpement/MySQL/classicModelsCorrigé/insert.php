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
 * Si le tableau $_POST est vide, cela veut dire qu'il faut juste afficher le formulaire
 * pour que l'utilisateur puisse le remplir.
 *
 * Comme on veut n'utiliser qu'un seul formulaire pour l'ajout et la modification,
 * et que celui-ci cherche à afficher dees valeurs, on initialise des valeurs vides
 * pour tous les champs (ce serait possible aussi de mettre n'importe quelle valeur par défaut)
 */
if (empty($_POST)) {
  $model = [
    'productCode' => '',
    'productLine' => '',
    'productName' => '',
    'productScale' => '',
    'productVendor' => '',
    'productDescription' => '',
    'quantityInStock' => '',
    'buyPrice' => '',
    'MSRP' => ''
  ];

  /*
   * Recherche de la liste des catégories pour permettre à l'utilisateur de choisir
   * dans un menu déroulant la valeur qu'il cherche.
   */
  $categories = findProductLines($db);

  $action = "insert.php";
  $submitValue = "Ajouter";
  include "modelForm.phtml";
}
/*
 * Si le tableau $_POST n'est pas vide, on peut en déduire que le programme a reçu
 * des données issues d'un formulaire envoyé par l'utilisateur.
 * A ce moment, il reste à enregistrer les données grâce à une requête SQL INSERT
 */
else {
  $err = insertModel($db, $_POST);
  /*
   * Une fois terminé l'enregistrement, on redirige l'utilisateur vers la première page
   * pour faire une  nouvelle recherche. La fonction 'header', qui envoie au navigateur
   * l'entête HTTP 'Location' (dans notre cas), force le navigateur à recharger la page 'index.php'.
   *
   * On prendra comme convention que l'on souhaite afficher à l'utilisateur la liste des
   * maquettes semblables à la nouvelle, à savoir même catégorie et même année.
   *
   * La redirection HTTP envoie donc une requête GET avec les paramètres à la fin de l'URL.
   * Pour avoir la liste des maquettes 'similaires', il faut faire la requête en cherchant
   * les modèles qui ont la même 'productLine' et la même 'year' (4 premiers caractères de 'productName')
   * Exemple : index.php?productLine=Planes&modelYear=1982
   */
  header('Location: index.php?productLine=' . $_POST['productLine'] . '&modelYear=' . substr($_POST['productName'], 0, 4));
}
