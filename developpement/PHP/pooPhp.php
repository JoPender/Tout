
<?php



class Point {
  protected $abscisse = 0;
  protected $ordonnee = 0;
  public function __construct(int $x, int $y)
  {
    $this->abscisse = $x;
    $this->ordonne = $y;
  }
}



interface planarFigureInterace {
  public function perimeter();
  public function surface();
}


abstract class Shape implements planarFigureInterace {
  use planarOperationsTrait;
    abstract public function move(int $x, int $y);
}

class Rectangle extends Shape {

  protected $length;
  protected $width;
  public function __construct($l, $w)
  {
    $this->length = $l;
    $this->width = $w;
  }
}

final class Square extends Rectangle {
  public function __construct($c)
  {
    $this->length = $c;
    $this->width = $c;
  }
}


trait planarOperationsTrait {
  public function perimeter ()
  {
    return 2 * ($this->length + $this->width);
  }
  public function surface ()
  {
    return $this->length * $this->width;
  }
}


$c1 = new Square(50);
echo $c1->perimeter();
?>





















/* NOTES
class Point

{
    protected $abscisse=100;
    protected $ordonnee=100;


    public function getOrdonnee()
    {
        return $this -> ordonnee;
    }

      public function getAbscisse()
    {
        return $this -> abscisse;
    }

     public function setOrdonnee($x)
    {
        if($x<2000)
        {
            $this -> ordonnee = $x;
        }
    }

    function __construct($x, $y)
    {
        $this -> abscisse = $x;
        $this -> ordonnee = $y;
    }
};


class Point3D extends Point
{
    public $profondeur;

    function __construct($x, $y, $z)
    {
        $this -> abscisse = $x;
        $this -> ordonnee = $y;
        $this -> profondeur = $z;
    }
}
$p = new Point(150, 600);
//$p -> setOrdonnee(1500);

$p3 = new Point3D(10,50,-35);
//var_dump ('abs : ' .$p->abscisse);
//var_dump ($p -> ordonnee);
var_dump ($p3 -> getOrdonnee());
var_dump ($p3 -> profondeur);

//var_dump ($p -> setOrdonnee());
//$p1 = new Point();
//var_dump ($p1);

*/
