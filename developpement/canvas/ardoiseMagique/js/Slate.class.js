

let  Slate = function()
{
  //Apparition de l'ardoise
  let dashboard = document.querySelector('#dashboard');
  this.canvas = document.createElement('canvas');
  this.canvas.id = ("slate");
  this.canvas.setAttribute('class','slate');

  this.canvas.setAttribute('width','640px');
  this.canvas.setAttribute('height','480px');

  dashboard.prepend(this.canvas);

  //Apparition de la gomme
  let tools = document.querySelector('.tools');
  let err = document.createElement('button');
  err.textContent = 'Effacer';

  tools.appendChild(err);

}
