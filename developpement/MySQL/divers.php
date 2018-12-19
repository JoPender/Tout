<?php
/*function orderNumber ()
{
    $bdd = new PDO('mysql:host=localhost;dbname=classicmodels','root','');

    $requete = $bdd->query
                  ("SELECT *
                  FROM `orders`");

    $table = $requete->fetch(PDO::FETCH_ASSOC);

    foreach($table as $key => $value) {
        return $value;
    }

  }
    $orderNumber = orderNumber();

/*
$requete = 'SELECT * FROM orders';

$statement = $bdd -> prepare($requete);
$statement -> execute();
$resultat = $statement->fetchAll(PDO::FETCH_ASSOC);



}
*/


/*$resultat = $bdd->query('SELECT * FROM orders');
var_dump($resultat -> fetchAll(PDO::FETCH_ASSOC));*/




/*if (!empty($_POST)) {
  $ch = new PDO('mysql:dbname=classicmodels;host=localhost','root','troiswa');
  $statement = $ch->prepare ("SELECT * FROM 'products' WHERE 'producLine' LIKE ? ");
  $result = $statement->execute([$_POST['vehiclesList']]);
  $table = $statement->fetchAll(PDO::FETCH_ASSOC);
  var_dump($table);*/

 /********************************************************************************
 ***************Affichage des données en lignes avec echo depuis php************
 ********************************************************************************

       $bdd = new PDO('mysql:host=localhost;dbname=classicmodels','root','');

       $requete = $bdd->query
                     ("SELECT *
                     FROM `orders` AS O");


       while($data = $requete->fetch(PDO::FETCH_ASSOC)){
         echo
         "<tr>".$orderNumber = $data['orderNumber']."</tr>."
         $orderDate = $data['orderDate'].
         $shippedDate = $data['shippedDate'].
         $status = $data['status'];
       }

       $close = $requete -> closeCursor();

 /**/
include "home.phtml";
  ?>
