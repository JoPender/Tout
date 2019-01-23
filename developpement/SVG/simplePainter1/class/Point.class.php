<?php
class Point {
  protected $abscisse = 0;
  protected $ordonnee = 0;
  public function __construct(int $x, int $y)
  {
    $this->abscisse = $x;
    $this->ordonnee = $y;
  }

  public function move($a, $b)
  {
    $this ->abscisse += $a;
    $this ->ordonnee += $b;
  }

  public function moveto($a, $b)
  {
    $this ->abscisse = $a;
    $this ->ordonnee = $b;
  }
}

$p = new Point(10,10);
$p = move(20,50);
$p = moveto(100,100);


var_dump($p)
?>
