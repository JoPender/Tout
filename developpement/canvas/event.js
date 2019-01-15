document.addEventListener('DOMContentLoaded', ()=>{


/*
  let croix1 = document.getElementById("canvas");
  let ctx_croix1 = croix1.getContext("2d");
  ctx_croix1.beginPath();
  ctx_croix1.moveTo(50,50);
  ctx_croix1.lineTo(200,200);
  ctx_croix1.moveTo(200,50);
  ctx_croix1.lineTo(50,200);
  ctx_croix1.closePath();
  ctx_croix1.stroke();
*/

  //rectangle
  let cadre = document.getElementById("canvas");
  let ctx_cadre = cadre.getContext("2d");
  ctx_cadre.lineWidth = 20;
  ctx_cadre.strokeStyle = "#ffd700";
  ctx_cadre.fillStyle = "#FFD700";
  ctx_cadre.strokeRect(0,0,800,600);


  /*Cercle
function drawCircle(){
  let cercle1 = document.getElementById( "canvas" );
  let ctx_cercle1 = cercle1.getContext("2d");
  ctx_cercle1.lineWidth = 5;

  ctx_cercle1.beginPath();
  ctx_cercle1.arc(150,150,20,0,Math.PI*2);
  ctx_cercle1.strokeStyle = "red";
  ctx_cercle1.stroke();
}
*/



  let canvas = document.querySelector( "#canvas");
  canvas.addEventListener('click',onClickDrawCircle);
  canvas.addEventListener('mouseover',onClickDrawRect);

})
