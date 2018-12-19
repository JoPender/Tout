<?php
define("SERIE",6);
define("MIN",1);
define("MAX",49);
function display_numbers(array $t()){
  rand(MIN,MAX);
}
/**
 * [display_tirage description]
 * @return [type] [description]
 */
function display_tirage()
{
  $line = "<ul>";
  for($i=0; $i < SERIE; $i++) {
    $line = $line."<li>".display_numbers()."<li>";// code...
  }
}

 ?>
