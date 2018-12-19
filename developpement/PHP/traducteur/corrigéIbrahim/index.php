<?php


/*  On vérifie si le champ de saisi du mot a traduire contient une information
    avec la fonction isset(), si le champ contient un mot, on l'assigne à la
    variable $word. Sinon on assigne un texte vide "" à la variable $word. */
if (isset($_POST['word'])) {
  /* On transforme la saisie en minuscule avec la fonction strtolower() */
  $word = strtolower($_POST['word']);
}
else {
  $word = "";
}

/*  On définit la fonction qui renvoie le mot traduit lorsqu'on click
    sur le boutton 'Traduire' .*/
function translate()
{
  /*  On rend la variable $word globale pour pouvoir modifier et
      utiliser son contenu */
  global $word;
  /*  On définit un tableau qui contient notre dictionnaire avec en index
      les mots en francais et en valeur leur traduction en anglais. */
  $dict_frEng = [''=>'','nom'=>'name','prenom'=>'firstname','ecole'=>'school'];
  /* On définit une variable $intoLang qui contiendra la langue choisit */
  $intoLang;

  /*  On vérifie si l'option de langue séléctionné a été selectionné avec la fonction
      isset(), si le champ contient une option, on l'assigne à la variable $intoLang.
      Sinon on assigne un texte vide "" à la variable $intoLang. */
  if (isset($_POST['traduction'])) {
    $intoLang = $_POST['traduction'];
  }
  else {
    $intoLang = "";
  }

  /*  On vérifie si le mot saisi existe dans le dictionnaire avec la fonction
      array_key_exists(), qui prend le mot saisi($word) et le dictionnaire($dict_frEng)
      en parametres. */
  if (array_key_exists($word, $dict_frEng))  {
    /*  On vérifie la langue séléctionné, si c'est le francais, on renvoi un message d'erreur,
        sinon on renvoi le mot traduit. */
    if ($intoLang == "toFrench") {
      return "Veuillez saisir un mot.";
    }
    else {
      /* On retourne le mot traduit en anglais. */
      return $dict_frEng[$word];
    }
  }
  /* On vérifie dans ce cas si le mot saisi existe dans le dictionnaire inversé avec la fonction array_flip()
   on vérifie si la langue séléctionnée est maintenant le francais. */
  elseif (array_key_exists($word, array_flip($dict_frEng))) {
    /*  On vérifie la langue séléctionné, si c'est l'anglais, on renvoi un message d'erreur,
        sinon on renvoi le mot traduit. */
    if ($intoLang == "toEnglish") {
      return "Veuillez saisir un mot.";
    }
    else {
    /* On retourne le mot traduit en francais. */
    return array_flip($dict_frEng)[$word];
    }
  }
  /*  Si le mot n'existe ni en francais, ni en anglais, on renvoie un message d'erreur. */
  else {
    if (!array_key_exists($word, array_flip($dict_frEng)) && !array_key_exists($word, $dict_frEng))
      return "Veuillez saisir un mot.";
    }
}

include "translate.html" ?>
