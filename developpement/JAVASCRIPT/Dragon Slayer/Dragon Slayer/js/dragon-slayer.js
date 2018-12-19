
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/


const SWORD = ["BOIS", "ACIER", "EXCALIBUR"];
let choixSword;

const ARMOR = ["CUIVRE", "FER", "MAGIQUE"];
let choixArmor;


//Variable POINTS DE VIE
const PV_KNIGHT = {
	EASY:[200,250],
	MEDIUM:[200,250],
	DIFFICULT:[150,200],
}

const PV_DRAGON = {
	EASY:[150,200],
	MEDIUM:[200,250],
	DIFFICULT:[200,250],
}

const LEVEL = {
	EASY:0,
	MEDIUM:1,
	DIFFICULT:2,
}

//DONNEES CHEVALIER
let knight ={
	pv:[0],
	armor:"",
	level:"",
	sword: null,
	agility:"",
}

//DONNEES DRAGON
let dragon ={
	pv:[0],
	pointsDommageInfligé :"",
}

//DONNEES ATTAQUES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const ATTAQUE_KNIGHT = {
	EASY:[25,30],
	MEDIUM:[15,20],
	DIFFICULT:[5,10],
}

let attaqueKnight;

const ATTAQUE_DRAGON = {
	EASY:[10,20],
	MEDIUM:[20,30],
	DIFFICULT:[20,30],
}
let attaqueDragon;

let ptDmg;

//Dictionnaire de tous les mots
let game ={
	difficulty : "",
	history : [],
	turn :0,
}



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/


//Attribution des points de vie au début du jeu

function getRandomInteger(min,max)
{
	let nombre = Math.random();
		nombre = parseInt(nombre*(max-min));
		nombre += min;
		return nombre;
}

function initGame()
{
	[knight.pv, dragon.pv] = initDifficulty();
	chooseSword();
	chooseArmor();
	document.write(`<p>Tu as choisi l'épée en ${knight.sword} et l'armure en ${knight.armor}.</p>`);
}

function initDifficulty() {
	do {
		let choixLevelKnight = prompt("Choisis un niveau : 0(facile) - 1(moyen) - 2(difficile)");
	} while ([0,1,2].includes(choixLevelKnight));

	if (choixLevelKnight == 0){
		let pvKnight = getRandomInteger(PV_KNIGHT.EASY[0],PV_KNIGHT.EASY[1]);
		let pvDragon = getRandomInteger(PV_DRAGON.EASY[0],PV_DRAGON.EASY[1]);
		document.write(`<p>Tu commences la partie avec ${knight.pv} points de vie et
						le dragon commence avec ${dragon.pv} points de vie.</p>`);
	}
	else if (choixLevelKnight == 1){
		let pvKnight = getRandomInteger(PV_KNIGHT.MEDIUM[0],PV_KNIGHT.MEDIUM[1]);
		let pvDragon = getRandomInteger(PV_DRAGON.MEDIUM[0],PV_DRAGON.MEDIUM[1]);
		document.write(`<p>Tu commences la partie avec ${knight.pv} points de vie et
						le dragon commence avec ${dragon.pv} points de vie.</p>`);
	}
	else if (choixLevelKnight == 2) {
		let pvKnight = getRandomInteger(PV_KNIGHT.DIFFICULT[0],PV_KNIGHT.DIFFICULT[1]);
		let pvDragon = getRandomInteger(PV_DRAGON.DIFFICULT[0],PV_DRAGON.DIFFICULT[1]);
		document.write(`<p>Tu commences la partie avec ${knight.pv} points de vie et
						le dragon commence avec ${dragon.pv} points de vie.</p>`);
	}

	return [pvKnight, pvDragon];
}





//Choix de l'arme et de l'armure

function chooseSword(){
	do{
		let choixSword = prompt("Choisis-tu l'épée en bois (0), en acier (1) ou EXCALIBUR (2) ?");
	} while ([0,1,2].includes(choixSword));

	return [choixSword];
}

function chooseArmor(){
	do{
		let choixArmor = prompt("Choisis-tu l'épée en bois (0), en acier (1) ou EXCALIBUR (2) ?");
	} while ([0,1,2].includes(choixSword));

	return [choixArmor];
}





initGame()


//Tirage au sort du joueur qui commence
const JOUEURS = ["le chevalier.", "le dragon."];
let premierAttaquant;
premierAttaquant = JOUEURS[Math.floor(Math.random()*2)];
document.write(`<p>Le premier attaquant est : ${premierAttaquant}</p>`);




//Les ATTAQUES!!!!!!!!!!!!!!!!!!!!!!!!

//Calcul aléatoire des pertes de points de dommage infligés par Dragon en fonction du niveau choisi
let attaqueDragonEasy = getRandomInteger(ATTAQUE_DRAGON.EASY[0],ATTAQUE_DRAGON.EASY[1]);

let attaqueDragonMediumDiff = getRandomInteger(ATTAQUE_DRAGON.MEDIUM[0],ATTAQUE_DRAGON.MEDIUM[1]);

//Calcul aléatoire des pertes de points de dommage infligés par chevalier en fonction du niveau choisi
let attaqueKnightEasy = getRandomInteger(ATTAQUE_KNIGHT.EASY[0],ATTAQUE_KNIGHT.EASY[1]);

let attaqueKnightMedium = getRandomInteger(ATTAQUE_KNIGHT.MEDIUM[0],ATTAQUE_KNIGHT.MEDIUM[1]);

let attaqueKnightDiff = getRandomInteger(ATTAQUE_KNIGHT.MEDIUM[0],ATTAQUE_KNIGHT.MEDIUM[1]);



/*
//Conditions des pertes de points en  fonction des paramètres armure et épée choisis par le chevalier

	if (premierAttaquant = "le dragon."){
		if (choixLevelKnight == 0){
			switch (choixArmor) {
				case 0 :
					(ptDmg = attaqueDragonEasy);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
				case 1:
					(ptDmg = attaqueDragonEasy * 0.25);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
				case 2:
					(ptDmg = attaqueDragonEasy * 0.5);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
				}
			}
		else {
			switch (choixArmor) {
				case 0 :
					(ptDmg = attaqueDragonMediumDiff);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
				case 1 :
					(ptDmg = attaqueDragonMediumDiff * 0.25);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
				case 2 :
					(ptDmg = attaqueDragonMediumDiff * 0.5);
					document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
				break;
			}
		}
	}
	else {
				if (choixLevelKnight == 0){
					switch (choixSword) {
						case 0 :
							(ptDmg = attaqueKnightEasy * -0.5);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 1:
							(ptDmg = attaqueKnightEasy);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 2:
							(ptDmg = attaqueKnightEasy * 0.5);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						}
					}
				else if (choixLevelKnight == 1){
					switch (choixSword) {
						case 0 :
							(ptDmg = attaqueKnightMedium* -0.25);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 1 :
							(ptDmg = attaqueKnightMedium);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 2 :
							(ptDmg = attaqueKnightMedium * 0.5);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						}
				}
				else {
					switch (choixSword) {
						case 0 :
							(ptDmg = attaqueKnightDiff * -0.25);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 1 :
							(ptDmg = attaqueKnightDiff);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						case 2 :
							(ptDmg = attaqueKnightDiff * 0.5);
							document.write(`Tu infliges ${ptDmg} points de dommage au dagon et il te reste ${dragon.pv - ptDmg} points de vie`);
						break;
						}
				}
	}





/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*if (choixLevelKnight == 0){
	(ptDmg = attaqueDragonEasy)
	document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
}
else{
	(ptDmg = attaqueDragonMediumDiff)
	document.write(`Le dragon t'inflige ${ptDmg} points de dommage et il te reste ${knight.pv - ptDmg} points de vie`);
}*/
