<?php

class Circle extends Shape
{

	protected $rayon;



public function __construct(RendererInterface $renderer)
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct($renderer);

		$this->rayon = 0;

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
			'r' => $this->rayon,
		];
		$styles = [
			'opacity' => $this->opacity,
			'fill' => $this->color
		];
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$this->renderer->make($id, 'circle', $attributes, $styles);

		return $this;
	}

  public function setSize(int $rayon)
  {
    $this->rayon = $rayon;

    return $this;
  }
}
