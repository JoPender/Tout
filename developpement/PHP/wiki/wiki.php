<?php




$json=file_get_contents("chat.json");
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

/*"http://fr.wikipedia.org/w/api.php?
action = parse &
page = chat &
prop = langlinks &
format = json"*/

//Ouverture du canal de communication
$channel = curl_init();

//Réglage de l'URL
curl_setopt($channel,CURLOPT_URL,"https://fr.wikipedia.org/w/api.php?action=parse&format=json&page=chat&prop=langlinks");

//Retourner le transfert en chaîne
curl_setopt($channel,CURLOPT_RETURNTRANSFER,1);

curl_setopt($channel,CURLOPT_TIMEOUT,4);

$result = curl_exec($channel);

curl_close($channel);

?>
