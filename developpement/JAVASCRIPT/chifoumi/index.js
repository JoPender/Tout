const CHIFOUMI = ["pierre", "feuille", "ciseau"];
let joueur;
let robot;
let resultat;

//choix joueur
joueur = prompt('Choisis ton objet').toLowerCase();


//choix aléatoire robot
robot = CHIFOUMI[Math.floor(Math.random()*3)];

//S'assurer que le joueur a indiqué une donnée valable
if (joueur == "pierre" || joueur == "feuille" || joueur == "ciseau")
{

//conditions solution
    if (joueur == robot){
      resultat = "Egalité";
    }
    else if ((joueur == "pierre" && robot == "ciseau") ||
              (joueur == "feuille" && robot == "pierre")||
              (joueur == "ciseau" && robot == "feuille")
            ){
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
    // affichage résultat
    document.write(`joueur : ${joueur} </br>VS </br> robot : ${robot} </br> ${resultat}`);
    if (resultat == "Gagné"){
      document.write('<img src = "https://t3.ftcdn.net/jpg/01/00/80/40/240_F_100804097_rvwkTPJPLNAQ4kHFAogvoqfdny1gC3Ut.jpg"/>');

    }
    else if (resultat == "Perdu"){
      document.write('<img src = "https://giphy.com/gifs/funny-cartoon-crying-119ATh2xm9OqS4"/>');
      }
    else {

    }
}

else
{
    document.write('<p>Choisissez pierre feuille ou ciseau</p>');
}
