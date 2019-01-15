<?php

session_start();
session_unset();
session_destroy();
session_start();

$_SESSION[$data_user] = null;
header ('location: ../../index.php');

 ?>
