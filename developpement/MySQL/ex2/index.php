
<?php
	$con = new PDO('mysql:host=localhost;dbname=classicmodels;charset=utf8','root','troiswa');
	if(!empty($_POST)){
		$stmt = $con->prepare("SELECT productLine,productName,productDescription FROM products WHERE productLine LIKE ? ORDER BY productName DESC");
		$stmt -> execute([$_POST["choiceProductLine"]]);
		$table = $stmt ->fetchAll(PDO::FETCH_ASSOC);
		//var_dump($table);
    }
include "template/index.phtml";
?>
