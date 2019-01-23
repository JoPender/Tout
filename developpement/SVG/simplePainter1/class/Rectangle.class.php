<?php

class Rectangle  {
  protected $origine;
  protected $length;
  protected $width;

  public function __construct(point $o, int $l, int $w)
  {
    $this->$origine = $o;
    $this->$length = $l;
    $this->$width = $w;
  }


}
?>
