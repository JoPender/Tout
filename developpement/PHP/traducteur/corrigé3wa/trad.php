<?php
$json=file_get_contents("chat.json");
var_dump($json);
$json=json_decode($json,true);

function translate($lang, $traduction)
{
  for ($i=0 ; $i<count($traduction['parse']['langlinks']) ; $i++)
  {
    if ($traduction['parse']['langlinks'][$i]['lang']==$lang){
    return $traduction['parse']['langlinks'][$i]['*'];
    }
  }
}
echo translate ('als',$json);
?>
