<?php

class HomeController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      $session = new UserSession();
      $message = new HomeModel();
      $boissons = $message -> findPlatInCategories('boisson');


      return[
        'categorie' => $boissons,
        'pseudo' => $session->getPseudo()
      ];
    }

    public function display() {
      $m = new HomeModel();
      $b = $m -> findPlatInCategories('boisson');

      $t = [];
      foreach ($b as $key) {
        $t['boisson'][] = json_encode($key);
      }


      echo json_encode($t);
    }


    public function httpPostMethod(Http $http, array $formFields)
    {

    }
}
