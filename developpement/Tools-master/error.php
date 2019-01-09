<?php

function division($x, $y)
{
    if($y != 0) {
        return $x/$y;
    }
    else {
        throw new \Exception("Erreur division", 1);
    }
}

try{
    echo division(4, 0);
} catch (\Exception $e) {
    //var_dump($e);
    echo $e->getMessage();
}

?>
