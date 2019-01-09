/*    Fonction Code Touche Clavier     */

document.addEventListener('keydown', uniKeyCode);
function uniKeyCode(event) {
    var key = event.keyCode;
    console.log(key);
}

/* Fonction Inverse Element d'un objet */
function inverse(obj = [])
{
  let t = {};
  for (let o in obj) {
    t[obj[o]] = o;
  }
  return t;
}

/* Fonction n'autorise que la saisie de chiffre au clavier */
function allowNumbersOnly(e) {
    let code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}

/* Fonction qui dessine un rectangle et le remplit d'une couleur */
function drawRectFill(rec, a, b, c, d, e)
{
  rec.beginPath();
  rec.rect(a, b, c, d);
  rec.fillStyle = e;
  rec.fill();
  rec.closePath();
}

/* Fonction qui dessine un rectangle et colorit le bord d'une couleur */
function drawRectStroke(rec, a, b, c, d, e)
{
  rec.beginPath();
  rec.rect(a, b, c, d);
  rec.strokeStyle = e;
  rec.stroke();
  rec.closePath();
}

/* Fonction qui dessine un cercle et le remplit d'une couleur */
function drawCircle(circle, a, b, c, d, e, f, g)
{
  circle.beginPath();
  circle.arc(a, b, c, d, e, f);
  circle.fillStyle = g;
  circle.fill();
  circle.closePath();
}

/* Fonction qui nettoie la zone du canvas */
function clearCanv(a, b, c, d)
{
  a.clearRect(c, d, b.width, b.height);
}

//  Create element JQ, add style plus width, height, prependTo functions
/*$('div').css({
  'background-color':'#FFF',
  'filter':'blur(10px)',
  'position':'absolute',
  'z-index':'0'}).height($('#header').height()).width($('#header').width()).prependTo($('#header'));
*/

/*  Ajax */
function getData(link, func)
{
  $.get(link)
  .done(func);
}

function insertHtml(response)
{
  $(<elt>).<area>(response);
}

function displayDetails(event)
{
  let pAll = document.querySelectorAll('#details p');
  for (let p of pAll){
    if (this.dataset.index == p.dataset.index){
      p.classList.toggle('selected');
    } else {
      p.classList.add('selected');
    }
  }
}

$( "body" ).click(function( event ) {
  console.log(event.target.id )});
