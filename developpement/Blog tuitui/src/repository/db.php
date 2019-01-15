<?php

/**
 * Ouvre une connexion à la base de données
 *
 * @param  string $database [description]
 * @param  string $user     [description]
 * @param  string $password [description]
 * @return PDO              [description]
 */
function openDatabase(string $database, string $user, string $password) : PDO
{
  return new PDO("mysql:host=localhost;dbname=$database", $user, $password);
}

/*
 * Connexion à la base de données
 */
$db = openDatabase('blog1','root','troiswa');
