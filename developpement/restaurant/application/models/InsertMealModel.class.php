<?php

class InsertMealModel
{
  public function insertMeal()
    $nom,
    $cat,
    $desc,
    $photo,
    $stock,
    $prix)
  )
  {
    $result=
    'INSERT INTO `carte`(`id`, `categorie`, `nom`, `description`, `photo`, `stock`, `prix`)
     VALUES (?, ?, ?, ?, ?, ?, ?)';

    $db = new Database();
    $db -> executeSql,
    [
      $cat,
      $nom,
      $desc,
      $photo,
      $stock,
      $prix
    ]);
    $flashBag = new FlashBag();
    $flashBag->add('Votre plat a bient été ajouté');
  }
}
