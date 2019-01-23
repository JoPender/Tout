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
class triangle extends Shape
{
  protected $p1;
  protected $p2;
  protected $p3;


public function __construct(RendererInterface $renderer)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($renderer);

    $this->p1 = $this->location->toArray();
    $this->p2 = [0,0];
    $this->p3 = [0,0];
	}


	public function draw(string $id) : Shape
	{
		$attributes = [
			'points' => $this->p1->getX().','.$this->p1->getY().' '.$this->p2[0].','.$this->p2[1].' '.$this->p3[0].','.$this->p3[1]
		];
		$styles = [
			'opacity' => $this->opacity,
			'fill' => $this->color
		];
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$this->renderer->make($id, 'polygon', $attributes, $styles);

		return $this;
	}

	/**
	 * Instancie les valeurs pour les deux côtés du rectangle
	 *
	 * @param int $width Longueur du rectangle
	 * @param int $width Largeur du rectangle
	 * @return self
	 *
	 * @example $ellipse->setSize(200,75)
	 */
	public function setPoints(array $p1, array $p2, array $p3)
	{
    $this->p1 = $this->location->moveTo($p1[0], $p1[1]);
    $this->p2 = $p2;
    $this->p3 = $p3;

		return $this;
	}
}
