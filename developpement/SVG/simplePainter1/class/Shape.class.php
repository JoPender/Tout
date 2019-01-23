<?php

class Shape {
  protected $origine;
  protected $color;
  protected $opacity;

  public function __construct($o, $c, $op)
  {
    $this->$origine = $o;
    $this->color = $c;
    $this->opacity = $op;
  }

}

?>
