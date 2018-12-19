<?php
define('SERIE', 6);
define('MIN', 1);
define('MAX', 49);

/**
* Choisit un nombre aléatoirement dans intervalle donné
*
* @param  array  $t intervale de choix d'un nombre pour le loto
* @return int    [description]
*
* @example displayNumbers([10.20]);
* @example displayNumbers();
*/
function displayNumbers(array $t=[MIN, MAX]) {
 return rand($t[0], $t[1]);
}

/**
* Produit un item le liste 'li' pour la page html
*
* @param  int    $number un tirage du loto
* @return string]         [description]
*/
function li(int $number)
{
 return "<li>$number</li>";
}

/**
* Produit un tableau (ul) HTML
* @param  array  $tirage Liste des tirages
* @return string         Un tableau HTMl
*/
function ul(array $tirage)
{
 $line = "<ul>";
 foreach ($tirage as $value) {
   $line = $line . li($value);
 }
 return $line . "</ul>";
}

/**
* Tirage au sort
*
* @return string Une chaîne HTML pour afficher les tirages
*/
function displayTirage() : string
{
 $tirage = [];
 for ($i = 0; $i < SERIE ; $i++) {
   do {
     $x = displayNumbers();
   } while (in_array($x, $tirage));
   $tirage[] = $x;
 }

 sort($tirage,SORT_NUMERIC);
 // var_dump($tirage);

 return ul($tirage);
}
