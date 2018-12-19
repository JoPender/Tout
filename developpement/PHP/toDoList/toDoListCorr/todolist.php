<?php

include "datalayer.php";
var_dump($_POST);


$taskItems = [];
foreach (loadCsv() as $index => $line) {  //tasklist = tableau, line = ligne du tableau
    $l = "<li>";
    $l .= "<input type=\"checkbox\" name=\"toDelete[]\" value=\"$index\" class=\"checkbox\">";
    if ($line[3] ==="priority-high")
    {
        $css= "red";
    }
    else if ($line[3] === "priority-normal")
    {
        $css = "black";
    }
    else {
        $css = "green";
    }
    if (date_create() > date_create($line[2]))
    {
        $m = " - En retard";
    } else {
        $m = null;
    }
    $l .= "<label class=$css>$line[0] $m</label>";
    if ($line[1] == "")
    {
        $l .= "";
    } else {
        $l .= "<p>$line[1]</p>";
    }
    $l .= "</li>";
    $taskItems[] = $l;
}

const ERROR1 = "Veuillez cocher une tâche à supprimer";
function removeT()
{
  if(isset($_POST['toDelete'])){
    $toDelete = $_POST['toDelete'];
  }



  if(empty($toDelete)){
    return ERROR1;
  } else {
    $t = loadCsv();
    foreach ($toDelete as $index) {
      unset($t[$index]);
    }
  }

  writeTasks($t);
}

removeT();
if (!isset($_GET['reload'])) {
     echo '<meta http-equiv=Refresh content="0;url=todolist.php?reload=1">';
}

include 'templates/index.phtml';
?>
