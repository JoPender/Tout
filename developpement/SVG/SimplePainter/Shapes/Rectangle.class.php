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
class Rectangle extends Shape
{
	/**
	* La valeur de la largeur du rectangle
	* @var int $height
	*/
	protected $height;

	/**
	* La valeur de la longueur du rectangle
	* @var int $width
	*/
	protected $width;


	/**
	 * Le constructeur de la classe 'Ellipse'
	 *
	 * @param RendererInterface $renderer Le moteur de rendu à utiliser pourle dessin final
	 */
public function __construct(RendererInterface $renderer)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($renderer);

		$this->height = 0;
		$this->width  = 0;
	}

	/**
	 * Passe la forme géométrique paramétrée au moteur de rendu
	 * On remarquera que les clefs des tableaux
	 * correspondent à la syntaxe des attributs des éléments SVG
	 *
	 * @param  string $id Un identifiant arbitraire pour la forme à dessiner
	 * @return self
	 */
	public function draw(string $id) : Shape
	{
		$attributes = [
			'x' => $this->location->getX(),
			'y' => $this->location->getY(),
			'width' => $this->width,
			'height' => $this->height,
			'transform' => 'rotate(' .$this->rotation.','.$this->location->getX().','.$this->location->getY().')'
		];
		$styles = [
			'opacity' => $this->opacity,
			'fill' => $this->color
		];
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$this->renderer->make($id, 'rect', $attributes, $styles);

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
	public function setSize(int $width, int $height)
	{
		$this->height = $height;
		$this->width  = $width;

		return $this;
	}
}
