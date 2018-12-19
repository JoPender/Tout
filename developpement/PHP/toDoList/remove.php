<?php
include 'datalayer.php'

$toDelete = $_POST["toDelete[]"];

const ERROR1 = "Veuillez cocher une tâche à supprimer";

if(empty($toDelete)){
  return ERROR1;

}else{
  $t = loadCsv();
    foreach ($toDelete as $index) {
      $remove = unset($t[$index]);
      return $remove;
    }

writeTasks($t);


header('Location: todolist.php');





 ?>
