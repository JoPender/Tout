
let  Pen = function()
{

  /*******EPAISSEUR********/
  this.thickness = '1px';
  this.mode = [
    {largeur : 'fin', thick : '2'},
    {largeur : 'moyen', thick : '5'},
    {largeur : 'épais', thick : '10'},
  ];
  //this.thickness_button = [];

  let thickness = document.querySelector('.thickness');

  for (m of this.mode){
    let element = document.createElement('button');
    element.addEventListener('click', this.takeThickness.bind(this));
    thickness.appendChild(element);
    element.dataset.thick = m.thick;
    element.innerHTML = m.largeur;
  }

  /*******COULEURS********/
  //récupération du parent 'colors'
  let pastille = document.querySelector('.colors')


  this.color = '#000';
  this.pins = [
    {classe : 'black', color : '#000'},
    {classe : 'maroon', color : '#5C2121'},
    {classe : 'red', color : '#B9121B'},
    {classe : 'yellow', color : '#FFBD07'},
    {classe : 'green', color : '#13B813'},
    {classe : 'seagreen', color : '#029E9A'},
    {classe : 'blue', color : '#0378A6'},
    {classe : 'maroon', color : '#5C2121'},
  ]
  //this.icons = [];

  for (p of this.pins){
    let element = document.createElement('div');
    element.addEventListener('click', this.takeColor.bind(this));
    pastille.appendChild(element);
    //this.icons.push(element);
    element.classList.add("pen-color",p.classe);
    element.dataset.color = p.color; //
  }
}


Pen.prototype.takeColor = function(event)
{
  console.log(event.target.dataset.color);
  this.color = event.target.dataset.color;
  console.log(this);
};


Pen.prototype.takeThickness = function(event)
{
  console.log(event.target.dataset.thick);
  this.thickness = event.target.dataset.thick;
  console.log(this);
}






/*******EPAISSEURS********/
/*récupération du parent 'thickness'
let thickness = document.querySelector('.thickness');

//bouton fin
let fin = document.createElement('button');
fin.textContent = 'fin';
thickness.appendChild(fin);

//bouton moyen
let moyen = document.createElement('button');
moyen.textContent = 'moyen';
thickness.appendChild(moyen);

//bouton épais
let epais = document.createElement('button');
epais.textContent = 'épais';
thickness.appendChild(epais);
*/















  /*Couleur black
  this.black = document.createElement('div');
  this.black.setAttribute("class","pen-color black");
  this.black.dataset.color = 'black';
  colors.appendChild(this.black);

  //Couleur maroon
  this.maroon = document.createElement('div');
  this.maroon.setAttribute("class","pen-color maroon");
  this.maroon.dataset.color = 'black';
  colors.appendChild(this.maroon);

  //Couleur red
  this.red = document.createElement('div');
  this.red.setAttribute("class","pen-color red");
  colors.appendChild(this.red);

  //Couleur yellow
  this.yellow = document.createElement('div');
  this.yellow.setAttribute("class","pen-color yellow");
  colors.appendChild(this.yellow);

  //Couleur green
  this.green = document.createElement('div');
  this.green.setAttribute("class","pen-color green");
  colors.appendChild(this.green);

  //Couleur seagreen
  this.seagreen = document.createElement('div');
  this.seagreen.setAttribute("class","pen-color seagreen");
  colors.appendChild(this.seagreen);

  //Couleur blue
  this.blue = document.createElement('div');
  this.blue.setAttribute("class","pen-color blue");
  colors.appendChild(blue);
  */
