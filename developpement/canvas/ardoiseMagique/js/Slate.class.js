

let  Slate = function(id, pen)
{
  //Apparition de l'ardoise
  let dashboard = document.querySelector('#dashboard');
  this.canvas = document.createElement('canvas');
  this.canvas.id = ("slate");
  this.canvas.setAttribute('class','slate');

  this.canvas.setAttribute('width','640px');
  this.canvas.setAttribute('height','480px');

  dashboard.appendChild(this.canvas);

  //Apparition de la gomme
  let tools = document.querySelector('.tools');
  let err = document.createElement('button');
  err.textContent = 'Effacer';

  tools.appendChild(err);

  this.pen = pen;

  this.offset = this.canvas.getBoundingClientRect();



  this.ctx = this.canvas.getContext('2d');
  this.isMouseDown = false;
  this.position = [];

  this.canvas.addEventListener('mousedown',this.onMouseDown.bind(this));
  this.canvas.addEventListener('mousemove',this.onMouseMove.bind(this));
  this.canvas.addEventListener('mouseup',this.onMouseUp.bind(this));


}

// GET MOUSE POSITION



// ON MOUSE DOWN
Slate.prototype.onMouseDown = function(event)
{
  let mouseX = event.clientX - this.offset.left;
  let mouseY = event.clientY - this.offset.top;
  this.position = [mouseX, mouseY];
  console.log(this.position);
  this.ctx.strokeStyle = this.pen.color;
  this.ctx.lineWidth = this.pen.thickness;
  this.isMouseDown = true;
}


// ON MOUSE MOVE
Slate.prototype.onMouseMove = function(event)
{
  let mouseX = event.clientX - this.offset.left;
  let mouseY = event.clientY - this.offset.top;
  if(this.isMouseDown){
    this.ctx.beginPath();
    this.ctx.moveTo(this.position[0], this.position[1]);
    this.ctx.lineTo(mouseX , mouseY);
    this.ctx.stroke();

    this.position = [mouseX , mouseY];
  }
}


// ON MOUSE UP
Slate.prototype.onMouseUp = function()
{
  this.isMouseDown = false;
}
