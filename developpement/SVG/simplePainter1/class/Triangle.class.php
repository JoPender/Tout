<?php

class Triangle  {
 protected $point1;
 protected $point2;
 protected $point3;



  public function  __construct(Point $p1, Point $p2, Point $p3)
  {
    $this ->$point1 = $p1;
    $this -> $point2 = $p2;
    $this -> $point3 = $p3;
  }


}

$t = new Triangle(new Point(10,20))
?>
