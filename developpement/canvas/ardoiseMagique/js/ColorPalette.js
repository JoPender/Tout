
let  ColorPalette = function()
{
  /*****Création l'élément Canva pour la pipette*****/

  this.canvaPalette = document.createElement('canvas');
  this.canvaPalette.id = ("color-palette");
  this.canvaPalette.setAttribute('class','color-palette hide');
  //this.canvaPalette.classList.add('.color-palette hide');
  this.canvaPalette.setAttribute('width','256px');
  this.canvaPalette.setAttribute('height','256px');

  //Insertion de l'elt Canva dans le block dashboard
  let dashboard = document.querySelector('#dashboard');
  dashboard.appendChild(this.canvaPalette);


  /*****Création de l'élément boutton pipette pour la pipette*****/

  this.buttonPipette = document.createElement('button');
  this.buttonPipette.textContent = 'Pipette';

  //Insertion de l'elt boutton dans le block tools
  let tools = document.querySelector('.tools');
  tools.appendChild(this.buttonPipette);

  /**
   * Déclaration de l'evenement : au click sur le boutton (this.buttonPipette) :
   * le canva (this.canvaPalette) est caché
   */
   this.buttonPipette.addEventListener('click',this.onClickTogglePalette.bind(this));
}

ColorPalette.prototype.onClickTogglePalette = function()
{
  //console.log(this);
  this.canvaPalette.classList.toggle('hide');
}
