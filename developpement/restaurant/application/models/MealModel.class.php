<?php

class MealModel
{
  public function display()
  {
    $db = new Database(); //connexion à la bdd

    $result =
    '
      SELECT *
      FROM carte
    ';

    return $db -> query($result);
  }
}
