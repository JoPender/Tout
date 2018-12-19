<?php
define('TRANSLATIONS',[
  "arbre"=> "tree",
  "avion" =>"plane",
  "ordinateur" => "computer"
]);

  $mot = strtolower($_POST["mot"]);
  $langue = $_POST["langue"];
  $reponse = translate($mot ,$langue);

function translate(string $mot,string $langue){
  $msg="";
  if(!empty($mot)){
      if($langue == "fr-en"){
        foreach(TRANSLATIONS as  $key=>$value){
          if($mot == $key){
            $msg= "<h2>$value</h2>";
            break;
          } else {
              $msg ="<h3>Veuillez saisir un mot valide</h3>";
          }
        }
      }else {
        $Translations = array_flip(TRANSLATIONS);
        foreach($Translations as $key=>$value){
          if($mot == $key){
            $msg= "<h2>$value</h2>";
            break;
          } else {
              $msg ="<h3>Veuillez saisir un mot correct</h3>";
          }
        }
      }
  }else {
    $msg ="<h3>Vous n'avez rien saisi !</h3>";
  }
  return $msg;
}
 ?>
