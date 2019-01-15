<?php
/*
 * Import de la bibliothèque de fonctions gérant les requêtes SQL
 */
include "test.php";
include "db.php";


$titre = $_POST['titre'];
$content = $_POST['corps_de_texte'];
$categorie = $_POST['theme'];
$date_pub = $_POST['date_publication'];
//var_dump($_FILES); die;
$fileName = $_FILES['image']['name'];
$tmp = $_FILES['image']['tmp_name'];

move_uploaded_file($tmp, '/home/wamont2-12/Bureau/Lien vers sites/developpement/Blog tuitui/public/images/voyages/'.$fileName);
$user = $_POST['user'];

$data_billet = [
  'titre'=> $titre,
  'corps_de_texte' => $content,
  'cat' => $categorie,
  'date_pub' => $date_pub,
  'image' => $fileName,
  'auteur' => $user
];

$insert_billet = $db -> prepare
(
  'INSERT INTO billet (titre, corps_de_texte, image, date_publication, categorie, auteur)
  VALUES (:titre, :corps_de_texte, :image, :date_pub, :cat, :auteur);
');


$insert_billet -> execute($data_billet);
//var_dump($data_billet);die;

header('Location: ../../index.php');
?>
