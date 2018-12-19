

<?php
$minus=strtolower($_POST['mot']);
var_dump($_POST);

const DICT=[
  'chien'=>'dog',
  'vache'=>'cow',
  'chat'=>'cat'
];


const ERROR_MOT="Veuillez saisir un mot valide";
const ERROR_LANG="Veuillez choisir une langue";

$translate = translation();
$resultat = resultat();

function resultat()
{
  if("lang" == "français-anglais"){
    $translate;
  } elseif ("lang" == "anglais-français"){
    $translate(array_flip(DICT));
  }else{
    $error2 = ERROR_LANG;
  }
}

function translation()
{
    if(array_key_exists($minus, DICT)){ //Si la clé minus (le mot) existe dans le tableau dict
      $translate = DICT[$minus];
      return['translation'=>$translate];
    }else{
      $error1 = ERROR_MOT;
      return['error'=>$error1];
    }
}
include 'index.phtml'
 ?>
