<?php




function loadCsv()
{
  $taskList = [];
  if (($handle = fopen("ressources/tasks.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle)) !== FALSE) {
      $taskList[] = $data;
    }
  }
  fclose($handle);
  return $taskList;
}

function saveTask($t)
{
  $fichier = fopen('ressources/tasks.csv', 'a');
  fputcsv($fichier, $t);
  fclose($fichier);
}

function writeTasks($t)
{
  $fichier = fopen('ressources/tasks.csv', 'w');
    foreach($t as $index){
    fputcsv($fichier, $index);
  }
    fclose($fichier);    
}
//function saveCsv()
?>
