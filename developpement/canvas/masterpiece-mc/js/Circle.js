import * as utilities from "./utilities.js";

/**
 * Constructeur de cercles
 *
 * @param  {int} r rayon
 * @param  {string} c couleur
 * @param  {Object} p position
 *
 * @example new Circle()
 * @example new Circle(100)
 */
export let Circle = function (r = 50, c = 'black', p = {x: 0, y: 0}, context)
{
  this.radius = r;
  this.color = c;
  this.position = p;
  this.context = context;
}

/**
 * Accesseur pour la propriété 'radius'
 * @return {int} [description]
 */
Circle.prototype.getRadius = function ()
{
  return this.radius;
}

/**
 * Mutateur pour la propriété 'radius'
 * @param  {int} r [description]
 * @return {Object}   [description]
 */
Circle.prototype.setRadius = function (r)
{
  this.radius = r;

  return this;
}

/**
 * Accesseur de la propriété 'color'
 * @type {[type]}
 */
Circle.prototype.getColor = function()
{
  return this.color;
}

/**
 * Changement de la couleur du cercle
 *
 * @return {[type]} [description]
 */
Circle.prototype.setColor = function()
{
  this.color = utilities.getRandomColor();

  return this;
}

/**
 * Lecture de la position où dessiner le cercle
 * @return {[type]} [description]
 */
Circle.prototype.getPosition = function()
{
  return this.position;
}

/**
 * Définition d'une position où dessiner le cercle
 *
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
Circle.prototype.setPosition = function(x, y)
{
  this.position = {x: x, y: y};

  return this;
}

/**
 * Lecture du contexte de canvas associé au cercle
 * @return {[type]} [description]
 */
Circle.prototype.getContext = function()
{
  return this.context;
}

/**
 * Injection du contexte du canvas pour déssiner le cercle
 *
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Circle.prototype.setContext = function(context)
{
  this.context = context;

  return this;
}

/**
 * Méthode pour dessiner un cercle
 */
Circle.prototype.draw = function()
{
  // var context = event.target.getContext('2d');
  this.context.fillStyle = this.color;
  this.context.beginPath();
  this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
  this.context.fill();
}
