<?php

include "repository.php";

$db = new PDO('mysql:dbname=classicmodels;host=localhost','root','troiswa');

if (!empty($_GET)) {
  $model = findUpdate($db, $_GET['id']);
  $categories = findProductLines($db);

  include "update.phtml";
} else  if (!empty($_POST)) {
  $err = updateModel($db, $_POST);
  // var_dump($err); die;

  header('Location: index.php?productLine=' . $_POST['productLine'] . '&modelYear=' . substr($_POST['productName'], 0, 4));
} else {
  // Traiter l'erreur
}


?>
