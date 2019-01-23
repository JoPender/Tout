<?php

interface ShapeInterface {

  public function setLocation(int $x, int $y);
  public function getLocation();

  public function fillWithColor(string $color);
  public function getFillColor();

  public function shade(float $opacity);
  public function getOpacity();

  public function rotate(float $angle);
  public function getRotation();
}
