<?php

include "Tools/SimpleSvgRenderer.class.php";

include "Shapes/ShapeInterface.php";
include "Shapes/Shape.class.php";
include "Shapes/Rectangle.class.php";
include "Shapes/Square.class.php";

include "Shapes/Ellipse.class.php";
include "Shapes/Circle.class.php";

include "Shapes/Triangle.class.php";


include "Shapes/Point.class.php";

/*
 * Programme principal
 */

$renderer = new SimpleSvgRenderer();


//Rectangle
$rectangle = (new Rectangle($renderer))->setSize(200,150)->fillWithColor('blue')->shade(0.7)->rotate(15);
$rectangle->getLocation()->moveTo(50,50);

$rectangle->draw('rect1');


//Carré
$square = (new Square($renderer))->setSize(200)->fillWithColor('red')->shade(0.7);
$square->getLocation()->moveTo(150,150);

$square->draw('square1');


//Ellipse
$ellipse = (new Ellipse($renderer))->setSize(100,50)->fillWithColor('pink')->rotate(60);
$ellipse->getLocation()->moveTo(350,400);

$ellipse->draw('ell1');


//Circle
$circle = (new Circle($renderer))->setSize(50)->fillWithColor('purple')->shade(0.8);
$circle->getLocation()->moveTo(300,300);

$circle->draw('cir1');


/*Polygone
$ellipse = (new Polygone($renderer))->setPoints(50,100 55,180 65,205)->fillWithColor('pink');
$ellipse->getLocation()->moveTo(350,300);

$ellipse->draw('ell1');*/


//Triangle
$triangle = (new Triangle($renderer))->setPoints([100,50],[50,200],[200,200])->fillWithColor('yellow')->shade(0.5);
//$triangle->getLocation()->moveTo(300,600);

$triangle->draw('tri1');

$svg = $renderer->display();

/*
 * Affichage
 */

include "Templates/index.phtml";
