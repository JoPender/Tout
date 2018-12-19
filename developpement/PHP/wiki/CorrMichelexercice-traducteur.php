<?php    // Le dictionnaire du traducteur.

const DICTIONARY =
[
  'cat'    => 'chat',
  'dog'    => 'chien',
  'monkey' => 'singe',
  'sea'    => 'mer',
  'sun'    => 'soleil'
];

/**
* Inverse le dictionnaire de référence
*
* @param  array  $dictionary [description]
* @return array             [description]
*/
function inverse(array $dictionary) : array
{
  return array_flip($dictionary);
}

/**
* Recherche la traduction dans un dictionnaire
*
* @param  string $key       [description]
* @param  array  $dictionary     [description]
* @return string             La traduction du mot
*
* @example extractTranslation('chat', ['chat' => 'cat'])
*
*/
function extractTranslation(string $key, array $dictionary) : string
{
  if(array_key_exists($key, $dictionary) /* === true */)
  {
    // Oui, récupération de la valeur, de la traduction en français.
    $translatedWord = $dictionary[$key];
    return $translatedWord;
  }
  else
  {
    // 1) Non, cet indice n'existe pas.
    // 2) return false;
    /* 'throw' (lancer) avertit PHP qu'une chose anormale vient de se passer.
    * Ici, le mot cherché n'a pas été trouvé dans le dictionnaire.
    *
    * Lancer (ou lever) une exception ne préjuge pas de la manière dont celle-ci
    * sera traitée plus tard par le programme. C'est juste un signal.
    * Ce sera au 'catch' de décider sie le programme peut continuer ou quelle
    * alternative il faut adopter.
    *
    * 'throw' pemet également de n'avoir qu'un seul return et un seul type de sortie.
    */
    /* 3) */ throw new \Exception("Le mot n'a pas été trouvé dans le dictionnaire", 1001);

  }
}

// Le code principal de l'application se trouve dans une fonction.
function translate($word, $direction)
{
  // Traduction du mot en -> fr ou fr -> en.
  switch($direction) {
    case 'toFrench':
    return extractTranslation($word, DICTIONARY);

    case 'toEnglish':
    return extractTranslation($word, inverse(DICTIONARY));

    default:
    throw new \Exception("Vous n'avez le choix qu'entre le français et l'anglais.", 1002);
  }
}

/**
* Valide le champ du formulaire représentant le mot à traduire
* Si le champ n'est pas valide (ici en l'occurrence, on vérifie seulement
* qu'il n'est pas vide ou omis), cela déclenche une erreur.
*
* @param  array $formData un alias de $_POST
* @return string
*/
function validateWord (array $formData) : string
{
  if(array_key_exists('word', $formData)) {
    return strtolower($formData['word']);
  } else {
    throw new \Exception("Aucun mot n'a été fourni par l'utilisateur.", 1003);
  }
}

/**
 * Valide le champ de formulaire contenant la langue cible dans laquelle traduire le mot.
 * Si cette langue n'a pas été indiquée (si le champ est vide) alors la fonction
 * déclence une erreur.
 *
 * @param  [type] $formData [description]
 * @return string           [description]
 */
function validateLanguage($formData) : string
{
  if(array_key_exists('direction', $formData)) {
    return $formData['direction'];
  } else {
    throw new \Exception("Aucun langue cible n'a été fournie pour la traduction.", 1004);
  }
}

/*
 * Une petite technique souvent employée :
 * Comme on veur souvent appeler la page PHP (qui importe le squelette PHTML)
 * on regarde si le tableau $_POST est vide ou non.
 * 1) Si $_POST est vide, cela veut dire que c'est une requête GET qui doit juste
 * afficher le formulaire -> aller diretement à la ligne 145
 * 2) Si $_POST n'est pas vide,cela veut dire que l'utilisateur à envoyé un formulaire rempli,
 * et alors il faut le traiter.
 */
if (!empty($_POST)) {
  /*
  * La structure try {...} catch (Exception $e) {...}
  * permet d'intercepter les erreurs d'exécution et d'emp^cher le programme
  * de s'interrompre brutalement.
  * Le programme essaie (try) d'exécuter une séquence d'instructions et dès qu'une
  * exception est “levée” (throw) le programme bascule dans la branche 'catch'.
  * En général, on met un try à un niveau assez global du programme.
  */
  try {
    $result = translate(validateWord($_POST), validateLanguage($_POST));
    $message = "Votre traduction : ";
    $squelette = '05-exercice-traducteur.phtml';
    /*
    * Dans la branche 'catch', on récupère juste le message d'erreur pour l'afficher dans la page HTML.
    * Onpourrait également récupérer le code (1001, etc.) pour affiner le traitement des erreurs.
    */
  } catch (\Exception $e) {
    $message = $e->getMessage();
    /*
    * Dans la branche 'catch', on peut en profiter pour envoyer l'utilisateur sur
    * une page spéciale d'erreur (comme les fameuses pages 404, par exemple)
    */
    $squelette = '05-exercice-error.phtml';
  }
} else {
  $result = null;
  $squelette = '05-exercice-traducteur.phtml' ;
}

include $squelette;
