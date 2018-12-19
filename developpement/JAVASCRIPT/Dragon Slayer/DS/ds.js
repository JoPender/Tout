/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/



/*1 Bien poser ses objets / il faut les caractériser pour donner de bons points de repère. */

var knight = {
	pointsDeVie:null,
	sword:null,
	armor:null,
	agilite:[1]  //coeffiscient attribué au coup en fonction du niveau de jeu choisi) 1 car par défaut : ni bonus ni malus
	//picture:"knight.png"
}



var dragon = {
	pointsDeVie:null,
	//picture: "dragon.png"
}

var game = {
	winner:null,
	turn:0,
	history: [],
	attacker:null,
	level: 0,
}

const KNIGHT_POINTS = [
	[200,250],  //0 : facile
	[150,200],  //1 : moyen 
	[100,150], //2 : difficile
]

const DRAGON_POINTS = [
	[200,250],  //0 : facile
	[150,200],  //1 : moyen 
	[100,150], //2 : difficile
]


const KNIGHT_ATTACK = [
	[10,20],
	[20,30],
	[30,40]
]

const DRAGON_ATTACK = [
	[10,20],
	[15,20],
	[25,30],
]


const ATTACK_BONUS = [
	[0.5,1,1.5]
]

const DEFENCE_BONUS = [
	[1,0.75,0.5]
]

const SWORD = ["WOOD", "ACIER", "EXCALIBUR"];

const ARMOR = ["CUIVRE", "FER", "MAGIQUE"];


/* Regroupement de données : 

const WEAPONS = [
{
	name:"WOOD",
	coeff:0.5,
},
{
	name:"",
	coeff:
}
]
*/

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

//Méthode descendante 

	//1- Création de la fonction principale de lancement: la fonction startGame()


function startGame()
{
	init();     
	play();
	showWinner();
	document.write(showWinner());
}


function init()    //phase d'initiatialisation
{
	initLevel (game);
	initSword();
	initArmor();
}


	
function getRandomInteger(min,max)
{
	let nombre = Math.random();
		nombre = parseInt(nombre*(max-min));
		nombre += min;
		return nombre;
}


function showWinner()
{
	let w = game.winner;

	return `<img src='${w.picture} 'alt='''`
}


function turn()
{
	let knightVelocity = getRandomInteger (0,100);
	let dragonVelocity = getRandomInteger (0,100)
	if (dragonVelocity > knightVelocity){
		dragonAttack();
	} else {
		knightAttack();
	}
}

function dragonAttack() //dépendra du lancé de dé, de la difficulté et de l'armure
{
	let l = game.level;
	let min = DRAGON_ATTACK[l][0];
	let max = DRAGON_ATTACK[l][1];
	let dice = getRandomInteger(min,max);
		dice *= DEFENCE_BONUS[knight.armor];
		knight.pointsDeVie -= dice
}

function knightAttack() //dépendra du lancé de dé, de la difficulté et de l'épée
{
	let l = game.level;
	let min = KNIGHT_ATTACK[l][0];
	let max = KNIGHT_ATTACK[l][1];
	let dice = getRandomInteger(min,max);
		dice *= ATTACK_BONUS[knight.sword];
		dragon.pointsDeVie -= dice
}

function initLevel(game)
{
	do{
		game.level = prompt("Choisis un niveau : 0(facile) - 1(moyen) - 2(difficile)");
	}while (![0,1,2].includes(game.level)); //permet de savoir si la valeur saisie est un élément de ce tableau --> Regarder objet ARRAY dans MDN


	return game
}

function initSword()
{
	do{
		knight.sword = prompt("Choisis-tu l'épée en bois (0), en acier (1) ou EXCALIBUR (2) ?");
		}while (![0,1,2].includes(knight.sword));

		knight.agilite = ATTACK_BONUS[game.level];

	return knight;
}

function play() 
{
	do{
		turn();
		}while(knight.pointsDeVie > 0 && dragon.pointsDeVie > 0);  // idem à : (!(knight.pv <= 0 || dragon.pv <= 0))

}











/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


startGame();

