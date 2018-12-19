
<?php

const DICTIONARY =
[
 'bonjour'=>'hello',
 'bonsoir'=>'goodnight',
 'bonne journee'=>'have a nice day'
];

function translate($word = null, $direction = 'en')
{

 switch($direction)
 {
   case 'fr':
   $inverse = array_flip(DICTIONARY);
   if(array_key_exists($word, $inverse)) {
     $message = "Le mot'$word'se traduit par'".$inverse[$word]."'.";
   }
   else
   {
     $message = "saisir à nouveau '$word'.";
   }
   break;

   case 'en':
   if(array_key_exists($word, DICTIONARY)) {
     $message = "Le mot'$word'se traduit par'".DICTIONARY[$word]."'.";
   }
   else
   {
     $message = "Je ne sais traduire qu'en français et en anglais !";
   }
 }

 return $message;
}

// $direction ='toFrench';

if(array_key_exists('langue', $_POST) == true)
{
 $direction = $_POST['langue'];
}

if(array_key_exists('nom', $_POST) == true)
{
 $word = strtolower($_POST['nom']);
}

$result = translate($word, $direction);

include 'translate.phtml';
