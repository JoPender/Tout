<?php
/*
* Pour une explication des espaces de noms, voir la classe 'Shape'
*/
// namespace Shapes;

// use Tools\RendererInterface;

/**
* Classe représentant les Ellipse
*
* N.B. le mot-clef 'extends' signifie que 'Ellipse' est une sous-classe de 'Shape'
*/
class Ellipse extends Shape
{
	/**
	* La valeur de la longueur du rayon1
	* @var int $rayon1
	*/
	protected $rayon1;

	/**
	* La valeur de la longueur du rayon2
	* @var int $rayon2
	*/
	protected $rayon2;


	/**
	 * Le constructeur de la classe 'Ellipse'
	 *
	 * @param RendererInterface $renderer Le moteur de rendu à utiliser pourle dessin final
	 */
public function __construct(RendererInterface $renderer)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($renderer);

		$this->rayon1 = 0;
		$this->rayon2  = 0;
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
			'cx' => $this->location->getX(),
			'cy' => $this->location->getY(),
			'rx' => $this->rayon1,
			'ry' => $this->rayon2,
			'transform' => 'rotate(' .$this->rotation.','.$this->location->getX().','.$this->location->getY().')'
		];
		$styles = [
			'opacity' => $this->opacity,
			'fill' => $this->color
		];
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$this->renderer->make($id, 'ellipse', $attributes, $styles);

		return $this;
	}

	/**
	 * Instancie les valeurs pour les deux rayon de l'ellipse
	 *
	 * @param int $rayon1 rayon 1 de l'ellipse
	 * @param int $rayon2 rayon 2 de l'ellipse
	 * @return self
	 *
	 * @example $ellipse->setSize(200,75)
	 */
	public function setSize(int $rayon1, int $rayon2)
	{
		$this->rayon1 = $rayon1;
		$this->rayon2  = $rayon2;

		return $this;
	}
}
