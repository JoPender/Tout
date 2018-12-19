<?php

function displayTable(array $a)
{
  $line="<table class='table'><thead>";
  foreach ($a as $b => $v) {
    $line .= "<tr>";
    foreach ($v as $key => $value) {
      $line .= '<td>'.$key.'</td>';
      }
      $line .= '</tr>';
      $line .= "</thead>";
      echo $line;
      break;
    }
  $line2 = "<tbody>";
  foreach ($a as $b => $v) {
    $line2 = "<tr>";
    foreach ($v as $key => $value) {
      $line2 .= '<td>'.$value.'</td>';
      }
      $line2 .= '</tr>';
      echo $line2;
    }
    $line2 .= "</tbody></table>";
  }
}

?>
