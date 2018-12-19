<?php

include "datalayer.php";
var_dump($_POST);

$taskItems = [];
foreach (loadCsv() as $index => $line) {  //tasklist = tableau, line = ligne du tableau
    $l = "<li>";
    $l .= "<input type=\"checkbox\" name = \"toDelete[]\" value=\"$index\" class=\"checkbox\">";
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

include 'templates/index.phtml';


 ?>
