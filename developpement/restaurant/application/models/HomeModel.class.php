<?php

class HomeModel {
  public function findPlatInCategories(string $categorie){

    $db = new Database();

    $result=
    'SELECT *
    FROM carte
    WHERE categorie = ?
    ';

    return $db -> query($result, [$categorie]);
  }
}
