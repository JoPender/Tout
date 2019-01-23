<?php

class CategorieController {
    public function httpGetMethod(Http $http, array $queryFields)
  {
    $message = new CategorieModel();
    $categorie = $message -> findPlatInCategories($queryFields['categorie']);
    return['categorie' => $categorie];
  }
}



 ?>
