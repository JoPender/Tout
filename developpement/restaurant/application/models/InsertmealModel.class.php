<?php


class InsertmealModel
{
  public function insertMeal (array $data)
  {
    $db = new Database();
    $err = $db->executeSql(
      'INSERT INTO `carte`(`nom`, `categorie`, `description`,`stock`, `prix`)
      VALUES(:name, :cat, :descr, :quantity, :price)',
      [
        'name'           => $data["nom_plat"],   //le premier 'name' correspond a "l'étiquette", la VALUES juste au dessus
        'cat'            => $data["cat_plat"],
        'descr'          => $data['description'],
      /*  'photo'          => $_FILE["photo"],*/
        'quantity'       => $data["stock"],
        'price'          => $data["prix"],
      ]);
      return $err;

      $flashBag = new FlashBag();
      $flashBag->add('Votre plat a bien été ajouté');

    }
  }



  ?>
