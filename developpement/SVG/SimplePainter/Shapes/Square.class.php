<?php
/*
* Pour une explication des espaces de noms, voir la classe 'Shape'
*/
// namespace Shapes;

// use Tools\RendererInterface;

/**
* Classe représentant les rectangles
*
* N.B. le mot-clef 'extends' signifie que 'Rectangle' est une sous-classe de 'Shape'
*/
class Square extends Rectangle
{

	protected $height;
	protected $width;

	public function setSize(int $width, int $height=null) 
	{
		$this->height = $width;
		$this->width  = $width;

		return $this;
	}
}
