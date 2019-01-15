
/**
 * Constructeur de cercles
 *
 * @param  {int} long longueur
 * @param  {int} larg largeur
 * @param  {string} c couleur
 * @param  {Object} p position
 *
 * @example new Rect()
 *
 */
let Rectangle = function (long = 50, larg = 50,c = 'black', p = {x: 0, y: 0}, context)
{
  this.longueur = long;
  this.largeur = larg;
  this.position = p;
  this.context = context;
}

/**
 * Accesseur pour la propriété 'longueur'
 * @return {int} [description]
 */
Rectangle.prototype.getlongueur = function ()
{
  return this.longueur;
}

/**
 * Mutateur pour la propriété 'longueur'
 * @param  {int} larg [description]
 * @return {Object}   [description]
 */
Rectangle.prototype.setlongueur = function (long)
{
  this.longueur = long;

  return this;
}

/**
 * Accesseur pour la propriété 'longueur'
 * @return {int} [description]
 */
Rectangle.prototype.getlargeur = function ()
{
  return this.largeur;
}

/**
 * Mutateur pour la propriété 'longueur'
 * @param  {int} larg [description]
 * @return {Object}   [description]
 */
Rectangle.prototype.setlargeur = function (larg)
{
  this.largeur = larg;

  return this;
}
/**
 * Accesseur de la propriété 'color'
 * @type {[type]}
 */
Rectangle.prototype.getColor = function()
{
  return this.color;
}

/**
 * Changement de la couleur du cercle
 *
 * @return {[type]} [description]
 */
Rectangle.prototype.setColor = function()
{
  this.color = getRandomColor();

  return this;
}

/**
 * Lecture de la position où dessiner le cercle
 * @return {[type]} [description]
 */
Rectangle.prototype.getPosition = function()
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
Rectangle.prototype.setPosition = function(x, y)
{
  this.position = {x: x, y: y};

  return this;
}

/**
 * Lecture du contexte de canvas associé au cercle
 * @return {[type]} [description]
 */
Rectangle.prototype.getContext = function()
{
  return this.context;
}

/**
 * Injection du contexte du canvas pour déssiner le cercle
 *
 * @param  {[type]} context [description]
 * @return {[type]}         [description]
 */
Rectangle.prototype.setContext = function(context)
{
  this.context = context;

  return this;
}

/**
 * Méthode pour dessiner un cercle
 */
Rectangle.prototype.draw = function()
{
  // var context = event.target.getContext('2d');
  this.context.fillStyle = this.color;
  this.context.beginPath();
  this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
  this.context.fillRect(this.position.x, this.position.y, this.longueur, this.largeur);
  this.context.fill();
}
