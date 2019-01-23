<?php
/*
 * La notion d'« espace de noms » a été introduite dans PHP 5.3 pour limiter les conflits de nommage entre classes
 * et permettre un mécanisme plus simple d'auto-chargement de celles-ci.
 * L'ensemble "<espace-de-nom>\<nom-de-classe>" permet de reconstituer le __nom complet__ de la classe ou "nom qualifié".
 * Par exemple le nom qualifié de la classe Shape sera :
 * Shapes\Shape
 * L'espace de nom est purement arbitraire, a priori. Néanmoins, dans la pratique,
 * tant pour faciliter les stratégies d'auto-chargement que dans la mesure où les applications
 * PHP sont de plus en plus dépendantes des stratégies de Composer et des recommandations de PHP-FIG,
 * l'espace de noms copie la hiérarchie des dossiers, en remplaçant seulement le '/' par '\'
 *
 * (pour être exact, les espaces de noms peuvent être employés avec des fichiers PHP ne comprenant pas de classe,
 * mais cela devrait être maintenant une pratique en voie de disparition).
 *
 * Le not-clef 'namespace' doit toujours être sur la première ligne du fichier, avant tout autre code.
 * Et on ne doit déclarer qu'un seul espace de noms par fichier, sachant également qu'un fichier comprend une (seule) classe,
 * comme nous l'avons vu.
 *
 * Pour le reste (l'utilisation des classes qualifiées), il y a maintenant 3 cas de figure :
 * 1. Si le fichier est importé avec "include", on devra toujours utiliser le chemin entier du fichier ;
 * 2. Si on a un mécanisme d'auto-chargement, le "new ..." est suivi par défaut du nom qualifié de la classe, mais...
 * 3. ... pour éviter la lourdeur syntaxique, on fait généralement une déclaration 'use ...' en début de fichier,
 * ce qui permet ensuite d'utiliser le nom simple.
 *
 * Pour entrer dans les détails de ce mécanisme de nommage, qui peut devenir assez complexe,
 * tout est expliqué sur la documentation PHP:
 * https://secure.php.net/manual/fr/language.namespaces.rationale.php
 */
// namespace Shapes;

/*
 * La déclaration qui permettra plus loin dans le code d'utiliser le simple nom 'RendererInterface'
 * Si cette déclaration est omise, PHP cherchera la classe dans le même espace de nom que la classe
 * appelante. Ici, il tenterait donc de trouver une classe 'Shapes\RendererInterface', qui n'existe
 * pas, bien entendu.
 * On peut même, comme ici, déclarer un alias qui sera ensuite utilisé à la place du nom véritable
 * de la classe
 */
// use Tools\RendererInterface as Renderer;

/**
 * Racine de la hiérarchie des "types" géométriques.
 * La classe est définie comme "abstraite" car il n'existe jamais d'instances de cette classe.
 * C'est juste une classe qui permet de définir des sous-classes, qui comprend donc un certain
 * nombre d'éléments de définition communs à toutes les sous-classes (par héritage).
 * L'intérêt d'une classe abstraite, par rapport à une super-classe normale, est de pouvoir
 * définir des "méthodes abstraites" dont l'implémentation sera laissée à la responsabilité des sous-classes.
 * (e.g. ici la méthode "draw")
 */


abstract class Shape implements ShapeInterface
{
	/**
	 * Couleur de fond de la forme géométrique
	 * @var string $color
	 */
	protected $color;

	/**
	 * Coordonnées de l'origine de la forme géométrique
	 * @var Point $location
	 */
	protected $location;

	/**
	 * Transparence de la forme géométrique
	 * @var float $opacity
	 */
  protected $opacity;

		/**
		 * Angle de la forme géométrique par rapport à l'horizontale
		 * @var float $rotation
		 */
	    protected $rotation;


	/**
	 * Exécute le rendu d'une forme
	 *
	 * @param  string $id Un identifiant pour la forme à dessiner
	 * @return self
	 */
	abstract public function draw(string $id) : self;



	/**
	 * Constructeur de la classe Shape
	 *
	 * @param RendererInterface $renderer Le moteur de rendu à utiliser pourle dessin final
	 */
	public function __construct(RendererInterface $renderer)
	{
		/*
		 * On crée une dépendance entre la forme et le moteur de rendu qui devra l'afficher,
		 * par le mécanisme d'injection de dépendance.
		 * Comme on le voit dans la signature, le type n'est pas la classe 'MySvgRenderer' elle-même
		 * mais une interface que doit implémenter le moteur de rendu pour être compatible avec le programme.
		 * En l'occurrence, $renderer devra posséder une méthode 'draw', ce qui est spécifié dans l'interface 'RendererInterface'
		 */
		$this->renderer = $renderer;

		$this->color    = 'black';
		/*
		 * La classe Point étant dans le même espace de noms que la classe 'Shape',
		 * on n'a donc pas à préciser le "nom qualifié" de la classe avec l'opérateur 'use'.
		 */
    $this->location = new Point();
		$this->opacity  = 1;
		$this->rotation = 0;
	}

	/**
	 * Donne une couleur à la forme géométrique
	 *
	 * @param string $color La couleur, soit une valeur hexadécimale, soit un nom de couleur
	 * @return self
	 *
	 * @example $shape->setColor('#123456');
	 */
	public function fillWithColor(string $color) : self
	{
		/*
		 * Dans une vraie application le "setter" devrait vérifier que la valeur du paramètre
		 * est bien conforme à ce qu'on attend.
		 * (cf. ci-dessous : setOpacity)
		 */
		$this->color = $color;
		/*
		 * Retourner une valeur est toujours une bonne pratique pour une fonction.
		 * Ici retourner l'objet lui-même permet notamment de chaîner les appels de méthodes.
		 * (e.g. $shape->setcolor('#5A45AF')->setOpacity(0.5))
		 */
		return $this;
	}

	public function getFillColor()
	{
		return $this->color;
	}

	/**
	 * Spécifie les coordonnées du point d'origine de la forme géométrique
	 *
	 * @param int $x 	Valeur de l'abscisse
	 * @param int $y	Valeur de l'ordonnée
	 * @return self
	 *
	 * @example $shape->setLocation(10,20);
	 */
    public function setLocation(int $x, int $y) : self
    {
		/*
		 * 'moveTo' est donc une méthode de la classe Point, donc 'location' est une instance
		 */
        $this->location->moveTo($x, $y);
				return $this;
    }

		public function getLocation()
		{
			return $this->location;
		}

	/**
	 * Détermine la transparence de la couleur de la forme
	 *
	 * @param float $opacity	Valeur de transparence (comprise entre 0 et 1)
	 * @return self
	 *
	 * @example $shape->setOpacity(0.65);
	 */
	public function shade(float $opacity) : self
	{
		/*
		 * Que faire si une valeur n'est pas correcte ?
		 */
		if ($opacity < 0 || $opacity > 1) {
			/*
			 * Dans notre cas de figure, on souhaite déclencher une erreur, de manière
			 * à ce que le programme ne s'exécute pas silencieusement avec des rendus incorrects
			 * ou se plante sans que l'on sache précisément pourquoi.
			 * (c'est typiquement le cas des divisions par zéro).
			 * 'throw' permet d'interrompre le programme "proprement". Cette erreur (appelée 'exception')
			 * pourra être ensuite traitée par la structure de contrôle 'try { ... } catch { ... }'.
			 *
			 */
			throw new \RangeException('La valeur de l‘opacité ('.$opacity.') n‘est pas dans le domaine permis [0, 1]' );
		} else {
			$this->opacity = $opacity;
		}
		return $this;
	}

	public function getOpacity()
	{
		return $this->opacity;
	}

	public function rotate(float $angle) : self
	{
		$this->rotation = $angle;

		return $this;
	}

	public function getRotation()
	{
		return $this->rotation;
	}
}
