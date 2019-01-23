<?php

include "RendererInterface.class.php";

class SimpleSvgRenderer implements RendererInterface {

  protected $htmlCode;

  public function display()
  {
    $svg = '<svg width="800" height="800">';
    $svg .= $this->htmlCode;
    $svg .= '</svg>';

    return $svg;
  }

  public function make(string $id, string $element, array $attributes, array $styles) : string
  {
    $svg = "<$element ";
    $svg .= "id='$id' ";
    foreach ($attributes as $attr => $value) {
      $svg .= "$attr='$value' ";
    }
    if (!empty($styles)) {
      $svg .= "style='";
      foreach ($styles as $attr => $value) {
        $svg .= "$attr:$value;";
      }
      $svg .= "'";
    }
    $svg .= "/>";

    $this->htmlCode .= $svg;

    return $svg;
  }

}
