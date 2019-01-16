import {onClickDrawCircle} from "./events.js";

/*
 * Lorsque la page est chargée, la fonction anonyme configure un écouteur d'événement
 * sur le 'canvas#masterpiece' qui exécute la fonction 'onClickDrawCircle' lorsqu'un
 * click se produit.
 */
document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.querySelector("#masterpiece");
  canvas.addEventListener('click', onClickDrawCircle);
})
