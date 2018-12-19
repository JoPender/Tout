
<?php

include "datalayer.php";
// titre
$error = [];
if(!array_key_exists('titre', $_POST) || ($_POST['titre'] == ""))
{
  $errors[] = "Le titre est vide";
} else {
  $titre = $_POST['titre'];

}

//day
$date = $_POST['date'];
/*
if(!array_key_exists('day', $_POST) || $_POST['day'] < 1 || $_POST['day'] > 31)
{
  $errors[] = "Le jour n'est pas valide";
} else {
  $day = $_POST['day'];
}

//month
if(!array_key_exists('month', $_POST) || $_POST['month'] < 1 || $_POST['month'] > 12)
{
  $errors[] = "Le mois n'est pas valide";
} else {
  $month = $_POST['month'];
}

//year
if(!array_key_exists('year', $_POST) || ($_POST['year'] < 2018))
{
  $errors[] = "L'année n'est pas valide";
} else {
  $year = $_POST['year'];
}
*/

//priority
if(!array_key_exists('priority', $_POST) || (!in_array($_POST['priority'], ['priority-low', 'priority-normal', 'priority-high'])))
{
  $errors[] = "L'année n'est pas valide";
} else {
  $priority = $_POST['priority'];
}


//création de la ligne de tableau
$task = [];
$task[] = $titre;
$task[] = $_POST['description'];
$task[] = $date;
$task[] = $priority;

//function saveTask($task);

saveTask($task);
header('Location: todolist.php');


?>

/*

const ERROR1 = "Veuillez indiquer le titre de votre tâche";
const ERROR2 = "Veuillez indiquer une date";

function validateTitre(string $field)
{
  if($field == ""){
    //return ['error' => ERROR1];
    return false;
  }else{
    $titre = $field;
    //return ['value' => $titre];
    return $titre;
  }
}
$x = validateTitre($_POST['titre']);
// if (array_key_exists('error', $x)) {}
if (is_bool($x)) {
  $errors[] = ERROR1;
}

function validateDate()
{
  if($date == ""){
    echo ERROR2;
  }else{
    echo $date;
  }
$date =htmlentities($_POST["date"]);

var_dump($date);
}
validateDate();
//$description = htmlentities($_POST ["description"]);








//include "todo.php";
