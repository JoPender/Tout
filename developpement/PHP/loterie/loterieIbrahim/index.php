<?php
/*  On créer un tableau vide dans une variable  */
$tab = [];

/*  On définit une fonction qui renvoi un nombre aléatoire
    entre deux nombres que l'on aura choisi en paramètres de
    la fonction par les variables de type integer "int $a"
    et "int $b";
*/
function roll(int $a, int $b)
{
  return rand($a, $b);
}

/*  On définit une fonction qui remplie le tableau vide par six valeurs
    aléatoires qui ne contient aucun doublons. La fonction renvoie le tableau
    une fois remplie.
    La fonction prend en paramères les variables "int $a" et "int $b" pour
    les utiliser dans la fonction roll($a, $b) et définir les nombres
    aléatoires.
*/
function loterie(int $a, int $b)
{
  /* On remplie le tableau au moins une fois pour avoir un premier élément
  dans le tableau qui ne peut être un doublon et qui servira pour une première
  comparaison lors du remplissage pour le second nombre.
  */
  $tab[] = roll($a, $b);
  /* On déclare une boucle qui éxécutera le code intégré 5 fois,
  pour $i = 0, 1, 2, 3, 4; à 5, la boucle s'arretera. */
  for ($i = 0; $i < 5; $i++) {
    /* On génère un nombre aléatoire avec la fonction roll() qu'on inclu dans
    une variable "$x" */
    $x = roll($a, $b);
    /* On veut tester si le nombre est un doublon ou pas, on utilise
    une structure de contrôle "if", avec la fonction "in_array" qui test
    si la variable "$x" est dans le tableau "$tab". */
    if (in_array ($x, $tab)) {
      /* Si le nombre généré est deja dans le tableau,
      on ne compte pas l'itération qui vient d'être effectué
      en soustrayant 1 à la variable i déclaré lors de la boucle. */
      $i--;
    }
    /* Sinon (si le nombre généré n'est pas dans le tableau), on l'inclu
    dans le tableau. */
    else {
      $tab[] = $x;
    }
  }
  /* On tri le tableau pour qu'il soit dans l'ordre croissant. */
  sort($tab);
  /* On renvoie le tableau remplie */
  return $tab;
}
include "index.html" ?>
