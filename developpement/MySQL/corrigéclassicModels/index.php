<?php

include "repository.php";

$db = openDatabase('classicmodels', 'root', 'troiswa');

$categories = findProductLines($db);
$years = findYears($db);

if(!empty($_POST) || (isset($_GET['productLine']) && isset($_GET['modelYear']))) {
  $p = isset($_POST['productLine']) ? $_POST['productLine'] : $_GET['productLine'];
  $y = isset($_POST['modelYear']) ? $_POST['modelYear'] : $_GET['modelYear'];
  $models = findModels($db, $p,$y);
  $searchCategorie = $p;
  $searchYear = $y;
}

include "index.phtml";
