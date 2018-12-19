
<?php
	$con = new PDO('mysql:host=localhost;dbname=classicmodels;charset=utf8','root','troiswa');
    $stmt = $con->prepare("SELECT * FROM orders LIMIT 0,20;");
    $stmt -> execute();
    $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);

?>