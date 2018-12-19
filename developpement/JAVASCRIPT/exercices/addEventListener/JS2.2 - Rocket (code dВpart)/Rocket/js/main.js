'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let firingButton = document.querySelector('#firingButton'); // variable d'appel du boutton firingButton

let billboard = document.querySelector('#billboard span'); // variable d'appel du span dans lequel sera afficher le décompte dans le billboard

let rocket = document.querySelector('#rocket'); // variable d'appel de la rocket

let moonButton = document.querySelector('#moonButton'); // variable d'appel de la lune

let timer = 10; // création de la variable temps -- démarrera à 10

let countdown // création de la variable pour l'interval

let reset // réinitialiser le compteur

firingButton.addEventListener("click",start) //Au click sur firingButton , la fontion start s'exécute
function start()
{
  rocket.src = "images/rocket2.gif";  // Apparition du GIF "prêt au décollage"
  countdown = setInterval(count,1000);      // Démarrage du décompte : exécution de la fonction count tte les 100mls
  if (rocket.src == "images/rocket2.gif")
  {
    clearInterval(countdown);
  }
}

function count()
{
  if (timer != 0){ //quand timer n'est pas égal à 0 :
  timer--          // le timer décrémente de 1
  }
  else {           //autrement c-a-d quand timer arrive à 0 :
  rocket.src = "images/rocket3.gif"; //Apparition du GIF "décollage"
  rocket.classList.add("tookOff"); // appel de la class CSS qui fait décoler la rocket
  clearInterval(countdown); // arrêt du décompte
  }
  console.log(timer);
  billboard.innerHTML=timer  // On affiche dans html, la variable timer c-a-d le décompte
}



moonButton.addEventListener("click",freeze)
function freeze()
{
  if (timer > 0){
    clearInterval(countdown);
  }else{
    timer=10;
    billboard.innerHTML=timer;
    rocket.classList.remove("tookOff");
  }
}
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

/*CORRIGE

let count =10;
let timerA, timerB;
let rocket = document.querySelector("#rocket")
let start = document.querySelector("firingButton");
start.addEventListener('click';startCountDown);

function startCountDown(){
  rocket.src=images/rocket2.gif;
  timerA=window.setInterval('clock',1000);
  timerB=window.setTimeout('takeOff',count*1000);
  start.removeEventListener('click',startCountDown);
  start.addEventListener('click',stopCountDown);
}

function takeOff(){
  rocket.classList.add('tookOff');
}

function clock(){
  if(count >= 0){
    billboard.innerHTML= --count;
  }else{
    window.clearInterval(timerA);
  }
}
 function stopCountDown(){
   rocket.src='images/rocket1.png';
   window.clearInterval(timerA);
   window.clearTimeout(timerB);
   count=10;                   // start.removeEventListener('click', stopCountDown);
   billboard.innerHTML="";     // start.addEventListener('click', startCountDown);
 }
