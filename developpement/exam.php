<?php



$tableau = [2, 3, '+', 12, '*', 4, 2, '/', '-'];

$stack = [];



try {

foreach($tableau as $valeur) {

  switch ($valeur) {

    case '+' :

      $x = array_shift($stack);

      $y = array_shift($stack);

      array_unshift($stack, $y + $x);

      break;



    case '-' :

      $x = array_shift($stack);

      $y = array_shift($stack);

      array_unshift($stack, $y - $x);

      break;



    case '*' :

      $x = array_shift($stack);

      $y = array_shift($stack);

      array_unshift($stack, $y * $x);

      break;



    case '/' :

        $x = array_shift($stack);

        $y = array_shift($stack);

        array_unshift($stack, $y / $x);

        break;



    default:

    array_unshift($stack, (integer)$valeur);

  }

}

} catch (Exception $e) {

  echo "- '$x' is not a number";

}

var_dump($stack);



?>
