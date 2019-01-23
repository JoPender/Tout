<?php

interface RendererInterface {

  public function display();
  public function make(string $id, string $element, array $attributes, array $styles);
}
