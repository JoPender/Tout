<?php

class InsertmealController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	return ['message' => ''];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
      $m = new InsertmealModel();

      $newMeal = $m -> insertMeal($formFields);

      header('Location: insertmeal');

    }
}

 ?>
