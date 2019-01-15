function getRandomInt(min, max) {
  let nombre = Math.random();
    nombre = parseInt(nombre*(max-min));
    nombre += min;
    return nombre;
}

function getRandomColor() {
    let chars = '0123456789ABCDEF'.split('');
    let hex = '#';
    for (var i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
 }



/*function onClickDrawRect(e){
  let ctx = canvas.getContext("2d");

  x = e.pageX-canvas.offsetLeft;
  y = e.pageY-canvas.offsetTop;
  ctx.fillRect(x, y, 50, 50);
}*/

function onClickDrawRect(event)
{
  var offset = event.target.getBoundingClientRect();

  let r1 = new Rectangle();

  r1.setlongueur(getRandomInt(5,200))
    .setlargeur(getRandomInt(5,200))
    .setColor(getRandomColor())
    .setPosition(event.clientX - offset.left, event.clientY - offset.top)
    .setContext(event.target.getContext('2d'));

  // console.log(c1.getRadius());

  r1.draw();
}
/*function onClickDrawCircle(e){
  let ctx = e.target.getContext("2d");

  ctx.fillStyle =   getRandomColor();

  x = e.pageX-canvas.offsetLeft;
  y = e.pageY-canvas.offsetTop;

  let size = getRandomInt(10,100);

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI*2);
  ctx.fill();
}*/


function onClickDrawCircle(event)
{
  var offset = event.target.getBoundingClientRect();

  let c1 = new Circle();

  c1.setRadius(getRandomInt(5,200))
    .setColor(getRandomColor())
    .setPosition(event.clientX - offset.left, event.clientY - offset.top)
    .setContext(event.target.getContext('2d'));

  // console.log(c1.getRadius());

  c1.draw();
}





  /*function onClickDrawCircle2(event)
  {
    var context = event.target.getContext('2d');

    var abscisse = event.clientX;
    var ordonnee = event.clientY;
    var offset = event.target.getBoundingClientRect();


    var offsetX = offset.left;
    var offsetY = offset.top;

    context.beginPath();
    context.arc(abscisse - offsetX, ordonnee - offsetY, 100, 0, 2 * Math.PI);
    context.fill();
  }*/

  /* A function to return random number from min to max */
