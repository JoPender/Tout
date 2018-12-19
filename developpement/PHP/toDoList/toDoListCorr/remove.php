<?php/*
include 'datalayer.php';

$toDelete = $_POST['toDelete[]'];
$file_1 = fopen("ressources/tasks.csv", "r");
const ERROR1 = "Veuillez cocher une tâche à supprimer";


if(empty($toDelete)){
  return ERROR1;
} else {
  $t = loadCsv($file_1);
  foreach ($toDelete as $index) {
    unset($t[$index]);
  }
}

writeTasks($t);


header('Location: todolist.php');
*/




 ?>
