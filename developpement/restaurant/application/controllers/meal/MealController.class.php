<?php
class MealController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      $message = new MealModel();
      $plats = $message -> display();
      //var_dump(['plats' => $plats]);
      return ['plats' => $plats];
    }
}
