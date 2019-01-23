<?php
/*
 * Pour une explication des espaces de noms, voir la classe 'Shape'
 */

//En PHP, toString permet de matérialiser un objet et de l'afficher à l'écran avec
//
// namespace Shapes;

/**
 * Représentation des points.
 * Un point est un objet caractérisée par une abscisse et une ordonnée.
 */
final class Point
{
	/*
	 * L'abscisse du point
	 * @var int $x
	 */
	private $x;

	/*
	 * L'ordonnée du point
	 * @var int $y
	 */
    private $y;

	/**
	 * Constructeur de la classe Point
	 */
	public function __construct()
	{
		$this->x = 0;
		$this->y = 0;
	}

	/**
	 * Retourne l'abscisse du point
	 *
	 * @return int
	 */
    public function getX() : int
    {
        return $this->x;
    }

	/**
	 * Retourne l'ordonnée du point
	 *
	 * @return int
	 */
    public function getY() : int
    {
        return $this->y;
    }

	/**
	 * Déplace le point d'une certaine distance (exprimée par un vecteur)
	 *
	 * @example move(50,60)
	 *
	 * @param  int  $dx La distance en abscisse
	 * @param  int  $dy La distance en ordonnée
	 * @return self
	 */
    public function move(int $dx, int $dy) : self
    {
        $this->x += $dx;
        $this->y += $dy;

		return $this;
    }

	/**
	 * Déplace le point
	 *
	 * @example moveTo(50,60)
	 *
	 * @param  int  $dx La nouvelle abscisse
	 * @param  int  $dy La nouvelle ordonnée
	 * @return self
	 */
    public function moveTo(int $x, int $y) : self
    {
        $this->x = $x;
        $this->y = $y;

		return $this;
    }

	/**
	 * Transforme l'objet point en tableau simple
	 *
	 * @return array
	 */
	public function toArray() : array
	{
		return [$this->x, $this->y];
	}
}
