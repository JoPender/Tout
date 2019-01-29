<?php

class RegisterModel
{
  public function insertUser(array $data)
  {
    $db = new Database();
    $err = $db->executeSql(
      'INSERT INTO `client`(`nom`, `prenom`, `mail`,`pseudo`, `adresse`, `mdp`)
      VALUES(:firstname, :surname, :mail, :pseudo, :adress, :mdp)',
      [
        'firstname'    => $data["prenom"],   //le premier 'name' correspond a "l'étiquette", la VALUES juste au dessus
        'surname'      => $data["nom"],
        'mail'         => $data['email'],
        'pseudo'       => $data["pseudo"],
        'adress'       => $data["adress"],
    //  'mdp'          => $data(password_hash(['password'], PASSWORD_DEFAULT)),
        'mdp'          => password_hash($data['pw'], PASSWORD_DEFAULT)
      ]);
      return $err;

      $flashBag = new FlashBag();
      $flashBag->add('Bienvenue!');
  }
}
