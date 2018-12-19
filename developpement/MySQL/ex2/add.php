<?php
$con = new PDO('mysql:host=localhost;dbname=classicmodels;charset=utf8','root','troiswa');
//$con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//$con -> setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

if(isset($_POST['btn_Save'])){
  $orderNum = $_POST['orderNum'];
  $orderD = $_POST['orderD'];
  $shippedD = $_POST['shippedD'];
  $status = $_POST['status'];
    if(!empty($orderNum)){
      //try{
        $stmt=$con->prepare("INSERT INTO orders(orderNumber,orderDate,shippedDate,status)
                                        VALUES(:orderNum, :orderD, :shippedD, :status);");
        $stmt->execute(array(':orderNum'=>$orderNum, ':orderD'=>$orderD, ':shippedD'=>$shippedD,':status'=>$status));
      //  header('Location:index.php');
      /*}catch(PDOException $ex){
        echo $ex->getMessage();
      }*/
    }else{
      echo "Saisissez un numéro de commande";
    }
  }

?>

<h2>Saisir une nouvelle commande</h2>
<form class="" action="add.php" method="post">
  <table>
    <tr>
      <td>Numero de commande</td>
      <td><input type="text" name="orderNum"</td>
    </tr>
    <tr>
      <td>Date de la commande</td>
      <td><input type="text" name="orderD"</td>
    </tr>
    <tr>
      <td>Date de réception</td>
      <td><input type="text" name="shippedD"</td>
    </tr>
    <tr>
      <td>Statut</td>
      <td><input type="text" name="status"</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="submit" name="btn_Save"></td>
    </tr>
  </table>
</form>
