import * as utilities from "./utilities.js";
import {Circle} from "./Circle.js";

/**
 * dessine un cercle lorsqu'un 'click' se produit à l'intérieur du Canvas
 *
 * @param  {MouseEvent} event [description]
 */
export function onClickDrawCircle(event)
{
  /*
   * 'getBoundingClientRect' permet de récupérer les coordonnées de l'espace occupé
   * par le Canvas dans la page.
   */
  var offset = event.target.getBoundingClientRect();

  let c1 = new Circle();

  /*
   * Les appels au méthodes de l'objet 'c1' son chaînés grâche au fait que chaque
   * méthode set<Prop> retourne l'objet 'c1'
   */
  c1.setRadius(utilities.getRandomInteger(5,200))
    .setColor(utilities.getRandomColor())
    .setPosition(event.clientX - offset.left, event.clientY - offset.top)
    .setContext(event.target.getContext('2d'));

  c1.draw();
}
