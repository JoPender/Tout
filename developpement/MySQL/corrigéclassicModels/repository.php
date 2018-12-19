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
  return new PDO("mysql:host=localhost;dbname=$database", 'root', 'troiswa');
}

/**
 * Renvoie une liste de modèles de maquettes selon des critères de catégorie et d'année
 *
 * @param  PDO    $db   Le connecteur à la base de données
 * @param  string $line La catgégorie souhaitée par l'utilisateur
 * @param  string $year L'année du véhicule
 * @return array
 */
function findModels(PDO $db, string $line, string $year) : array
{
  $statement = $db->prepare("SELECT * FROM `products`  WHERE `productLine` LIKE ? AND `productName` LIKE ?");
  $err = $statement->execute([$line.'%', $year.'%']);

  return $statement->fetchAll(PDO::FETCH_ASSOC);
}


/**
 * Liste toutes les catégories de maquettes indiquées dans la base
 *
 * @param  PDO   $db [description]
 * @return array     [description]
 */
function findProductLines(PDO $db) : array
{
  $statement = $db->prepare("SELECT `productLine` FROM `productlines`  WHERE 1");
  $err = $statement->execute();

  return $statement->fetchAll(PDO::FETCH_ASSOC);
}

function findYears(PDO $db) : array
{
  $statement = $db->prepare("SELECT DISTINCT SUBSTRING(`productName`, 1, 4) AS `year` FROM `products` WHERE 1 ORDER BY `year` ASC");
  $err = $statement->execute();

  return $statement->fetchAll(PDO::FETCH_ASSOC);
}

/**
 * Renvoie un modèle de maquette à modifier
 *
 * @param  PDO    $db Le connecteur à la base de données
 * @param  string $id L'identifiant unique du modèle
 * @return array     Tojutes les données relatives à la maquette
 */
function findUpdate(PDO $db, string $id) : array
{
  $statement = $db->prepare("SELECT * FROM `products`  WHERE `productCode` = ?");
  $err = $statement->execute([$id]);

  return $statement->fetch(PDO::FETCH_ASSOC);
}

/**
 * Met à jour un modèle de maquette dans la base de données
 *
 * @param  PDO    $db   Le connecteur à la base de données
 * @param  array  $data les données issues du formulaire
 * @return int
 */
function updateModel(PDO $db, array $data)
{
  $statement = $db->prepare(
    "UPDATE `products`
     SET `productLine` = :line, `productName` = :name, `productScale` = :scale, `productVendor` = :vendor, `productDescription` = :descr, `quantityInstock` = :stock, `buyPrice` = :buy, `MSRP` = :sell
     WHERE `productCode` = :code");
  $err = $statement->execute([
    'code' => $data['productCode'],
    'line' => $data['productLine'],
    'name' => $data['productName'],
    'scale' => $data['productScale'],
    'vendor' => $data['productVendor'],
    'descr' => $data['productDescription'],
    'stock' => $data['quantityInStock'],
    'buy' => $data['buyPrice'],
    'sell' => $data['MSRP']
  ]);

  return $err;
}
