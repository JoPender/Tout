<?php

/*
 * Script permettant d'ajouter un modèle de maquette dans la base de données.
 */

/*
 * Import de la bibliothèque de fonctions gérant les requêtes SQL
 */
include "repository.php";

/*
 * Connexion à la base de données
 */
$db = openDatabase('classicmodels','root','troiswa');

/*
 * Cette fonction n'est accessible qu'au travers d'une requête GET (cf. 'index.phtml' ligne 54)
 * On n'a pas implémenté une option qui permettrait par exemple de cocher des cases dans une liste
 * et de faire une suppression groupée.
 *
 * (Au passage, on utilise ici une quête GET alors que la sémantique de HTTP voudrait
 * que nous utilisions une requête DELETE mais cette dernière n'est pas implémentée par Apache)
 *
 * Le lien intègre un paramètre permettant d'identifier l'enregistrement à modifier.
 * Exemple : delete.php?id=S18_1097

 */
if (!empty($_GET)) {
  /*
   * On recherche le modèle à supprimer pour pouvoir récupérer sa catégorie et son année
   * afin de pouvoir paramétrer la redirection HTTP vers la liste des maquettes 'similaires' (cf. ligne 38)
   */
  $model = findOneModel($db, $_GET['id']);

  /*
   * Effacement de l'enregistrement dont le 'productCode' correspond à l'id transmis dans l'URL
   */
  $err = deleteModel($db, $_GET['id']);
  /*
   * On redirige l'utilisateur vers la première page pour faire une  nouvelle recherche.
   * La fonction 'header', qui envoie au navigateur l'entête HTTP 'Location' (dans notre cas),
   * force le navigateur à recharger la page 'index.php'.
   *
   * On prendra comme convention que l'on souhaite afficher à l'utilisateur la liste des
   * maquettes semblables répondant aux mêmes critères que celle supprimée, ce qui devrait
   * au passage nous permettre de vérifier que cette dernière est bien effacée.
   *
   * La redirection HTTP envoie donc une requête GET avec les paramètres à la fin de l'URL.
   * Pour avoir la liste des maquettes 'similaires', il faut faire la requête en cherchant
   * les modèles qui ont la même 'productLine' et la même 'year' (4 premiers caractères de 'productName')
   * Exemple : index.php?productLine=Planes&modelYear=1982
   */
  header('Location: index.php?productLine=' . $model['productLine'] . '&modelYear=' . substr($model['productName'], 0, 4));
} else {
  // Traiter l'erreur
}


?>
