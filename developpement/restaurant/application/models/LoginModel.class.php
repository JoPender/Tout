<?php

class LoginModel
{
  public function loginUser($pseudo)
  {
    $db = new Database(); //connexion à la bdd

    $result =
    '
      SELECT *
      FROM client
      WHERE pseudo = ?
    ';

    return $db -> queryOne($result,[$pseudo]);
  }
}
