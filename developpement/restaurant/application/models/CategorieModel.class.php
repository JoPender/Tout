<?php

class CategorieModel {
  public function findPlatInCategories(string $categorie){

    $db = new Database();

    $result=
    'SELECT *
    FROM Carte
    WHERE categorie = ?
    ';

    return $db -> query($result, [$categorie]);
  }
}



 ?>
