'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

/**
 * game : Les paramètres globaux du jeu
 * @type {Object}
 */
var game = {
  level: null,  // Le niveau de difficulté
  history: [],  // La trace des tours joués pendant la partie
  winner: null, // Le vainqueur, sous forme d'objet
  round: 0      // Le tour en cours
};

/**
 * luke : Le chevalier
 * @type {Object}
 */
var luke = {
  name: 'Luke',    // Le nom du chevalier
  health: null,    // Le nombre de points de vie (restants) du chevalier
  sword: null,     // L'arme du chevalier, un objet de la liste SWORDS
  armor: null,     // L'armure du chevalier, un objet de la liste ARMORS
  attackPower: []  // L'intervalle de puissance des attaques en fonction de la diificulté du jeu
};

/**
 * Javawan : Le dragon
 * @type {Object}
 */
var javawan = {
  name: 'Javawan', // Le nom du dragon
  health: null,    // Le nombre de poins de vie (restants) du dragon
  attackPower: []  // L'intervalle de puissance des attaques en fonction de la diificulté du jeu

};

/**
 * Leia : La princesse
 * @type {Object}
 */
var leia = {
  name: 'Leia',    // Le nom de la princesse
  healPower: 20,   // La puissance de guérison de la princesse
  dexterity: 0.5,  // Probabilité de succès
  alert: 20        // Seuil de déclenchement de l'intervention de la princesse
};

/**
 * LEVELS : Liste des paramètres de jeu dépendant de la difficulté
 * Pour chaque niveau, les paramètres du chevalier et du dragon varient.
 * ---
 * initialHealth : nombre de points de vie initial
 * power : puissance des coups d'attaque
 * ---
 * @type {Array}
 */
const LEVELS = [
  {
    type: 'Facile',
    dragon: {
      initialHealth: [150,200],
      power: [15,20]
    },
    knight: {
      initialHealth: [200,250],
      power: [25,30]
    }
  },
  {
    type: 'Moyen',
    dragon: {
      initialHealth: [200,250],
      power: [30,40]
    },
    knight: {
      initialHealth: [200,250],
      power: [15,20]
    }
  },
  {
    type: 'Difficile',
    dragon: {
      initialHealth: [200,250],
      power: [30,40]
    },
    knight: {
      initialHealth: [150,200],
      power: [5,10]
    }
  }
];

/**
 * SWORDS : Liste des armures
 * ---
 * ratio : coefficient multiplicateur de puissance
 * ---
 * @type {Array}
 */
const SWORDS = [
  {
    type: 'Bois',
    ratio: 0.5
  },
  {
    type: 'Acier',
    ratio: 1
  },
  {
    type: 'Excalibur',
    ratio: 1.5
  }
];

/**
 * ARMORS : Liste des armures
 * ---
 * ratio : coefficient d'atténuation des coups du dragon
 * ---
 * @type {Array}
 */
const ARMORS = [
  {
    type: 'Cuivre',
    ratio: 1
  },
  {
    type: 'Fer',
    ratio: 1.5
  },
  {
    type: 'Magique',
    ratio: 2
  }
];

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

/*
* NOTE : Les fonctions de ce corrigé recçoivent systématiquement des paramètres
* (contrairement à la version officielle) ce qui est une manière de les rendre _pures_,
* c'est-à-dire indépendantes du contexte global du programme (hors constantes).
*
* N.B. : on doit éviter dans la mesure du possible le recours à des variables globales.
* La syntaxe est un peu plus lourd mais la “sémantique” des fonctions est elle aussi bien meilleure.
*/

/**
* Calcule les dommages infligés par le dragon
*
* @param  {object} dragon :  Le dragon
* @param  {int} armorRatio le coefficient de défese du chevalier
*
* @return {int} le nombre de points de vie perdus par le chevalier
*/
function computeDragonDamagePoint(dragon, armorRatio)
{
  let damageRange = dragon.attackPower;
  return Math.round(getRandomInteger(damageRange[0], damageRange[1]) / armorRatio);
}

/**
* Calcule les dommages infligés par le chevalier
*
* @param  {object} knight : Le chevalier
*
* @return {int} le nombre de poiintsde vie perdus par le dragon
*/
function computePlayerDamagePoint(knight)
{
  let damageRange = knight.attackPower;
  return Math.round(getRandomInteger(damageRange[0], damageRange[1]) * knight.sword.ratio);
}

/**
 * Attaque du dragon
 *
 * @param  {Object} game Le jeu
 * @param  {Object} dragon Le dragon
 * @param  {Object} knight Le chevalier
 * @return {String} Un message à afficher dans la console
 */
function dragonAttack(game, dragon, knight)
{
  // Diminution des points de vie du joueur.
  let damagePoints = computeDragonDamagePoint(dragon, knight.armor.ratio);
  // Identique à game.hpKnight = game.hpKnight - damagePoint;
  knight.health -= damagePoints;
  // Mémorisation dans l'historique du jeu (cf. Array > push)
  game.history.push({attack : dragon, damage: damagePoints});

  return `Le dragon est plus rapide et vous brûle, il vous enlève ${damagePoints} points de vie`;

}

/**
 * Attaque du dragon
 *
 * @param  {Object} game Le jeu
 * @param  {Object} dragon Le dragon
 * @param  {Object} knight Le chevalier
 * @return {String} Un message à afficher dans la console
 */
function knightAttack(game, dragon, knight)
{
  // Diminution des points de vie du joueur.
  let damagePoints = computePlayerDamagePoint(knight);
  // Identique à game.hpKnight = game.hpKnight - damagePoint;
  dragon.health -= damagePoints;
  // Mémorisation dans l'historique du jeu (cf. Array > push)
  game.history.push({attack : knight, damage: damagePoints});

  return `Vous êtes plus rapide et frappez le dragon, vous lui enlevez ${damagePoints} points de vie`;

}

/**
 * Intervention de la princesse qui essaie de soigner le Chevalier
 * Le succès de l'opération est aléatoire... et plus on y a recours, moins elle est efficace
 *
 * @param  {Object} game Le jeu
 * @param  {Object} knight Le chevalier
 * @param  {Object} princess La princesse
 * @return {String} Un message à afficher dans la console
 */
function princessHelp(game, knight, princess)
{
  let message;
  // Calcul du nombre de points de vie sauvés par la princesse
  let healPoints = Math.round(getRandomInteger(0, princess.healPower));
  // Calcul des chances de succès : plus `desxterity`est faible, moins il y a de chances de succès
  let success = Math.random() < princess.dexterity;

  if (success) {
    knight.health += healPoints;
    message = `Le sort à réussi, la princesse vous rend ${healPoints} points de vie`;
  } else {
    message = `Le sort à échoué, la princesse vous enlève ${healPoints} points de vie`;
    knight.health -= healPoints;
  }
  // La desxtérité diminue à chaque intervention
  princess.dexterity -= 0.05;
  // L(intervention de la princesse est consignée dans l'historique)
  game.history.push({healer: leia, healPoints: healPoints});
  return message;
}

/**
* Boucle principale du jeu
*
* @param  {Object} game Le jeu
* @param  {Object} dragon Le dragon
* @param  {Object} knight Le chevalier
* @param  {Object} princess La princesse
* @return {Object} La fonction retourne le vainqueur du jeu
*/
function play(game, dragon, knight, princess)
{
  let dragonSpeed;
  let playerSpeed;
  /*
  * Je propose ici une variante plus élégante (mais équivalente) de la boucle 'while'
  * avec une transformation de la fonction play en _fonction récursive_.
  * Une fonction est dite résursive si elle comprend quelque part un appel à elle-même.
  * Il faut donc définir :
  * 1) Un cas terminal (qui arrête les appels) ici les lignes 202 - 205
  * 2) Le cas général, qui prolonge les appels récursifs
  */
  if (dragon.health <= 0) {
    return knight; // Le chevalier est vainqueur si le dragon n'a plus de points de vie
  } else if (knight.health <= 0) {
    return dragon; // Le dragon est vainqueur si le chevalier n'a plus de points de vie
  } else {
    // Détermination de la vitesse du dragon et du joueur.
    dragonSpeed = getRandomInteger(10, 20);
    playerSpeed = getRandomInteger(10, 20);

    // Est-ce que le dragon est plus rapide que le joueur ?
    if(dragonSpeed > playerSpeed) {
      console.log(dragonAttack(game, dragon, knight));
    } else {
      console.log(knightAttack(game, dragon, knight))
    }

    /*
     * Autre syntaxe de la conditionnelle ci-dessus, utilisant l'opérateur ternaire :
     * (condition) ? resultat-si-vrai : resultat-si-faux
     * L'opérateur ternaire est souvent une meilleure syntaxe que `if` car c'est une _expression_
     * Et toute expression dans un langage de programmation est _évaluée_, c'est-à-dire a une _valeur_
     */
    // console.log((dragonSpeed > playerSpeed) ? dragonAttack(game, dragon, knight) : knightAttack(game, dragon, knight));
    /*
     * Exemple : let x = ((y != 0) ? (x / y) : undefined)
     * Si y n'est pas égal à zéro x <-- x / y, sinon c'est `undifined`
     */

    if (dragon.health > knight.health + princess.alert) {
      let help = requestInteger('Voulez-vous l‘aide de la princesse ? 1. Oui - 2. Non', 1, 2);
      if (help === 1) {
        console.log(princessHelp(game, knight, princess));
      }
    }

    // On passe au tour suivant.
    showGameState(++game.round, dragon.health, knight.health);

    // La fonction s'appelle récursivement tant que la condition terminale n'est pas vérifiée
    // La valeur de l'appel terminal est 'remontée' par la l'oprateur 'return'
    return play(game, dragon, knight, princess);
  }
}

/**
* initialisation du jeu
*
* @param  {Object} game
* @param  {Object} dragon Le dragon
* @param  {Object} knight Le chevalier
* @return {Object}
*/
function initializeGame(game, knight, dragon)
{
  /*
  * En écrivant les fonctions de amnière adéquate, on évite ici le recours à
  * des variables intermédiaires (voire globales) et l'on privilégie la
  * composition de fonctions qui est une bien meilleure solution
  */
  setArmor(setSword(setDifficulty(game, knight, dragon)));

  return game;
}

/**
* Initialise le nombre de points de vie initial des joueurs
*
* @param  {Object} game Le jeu
* @param  {Object} dragon Le dragon
* @param  {Object} knight Le chevalier
* @return {Object} L'objet 'knight' est retourné pour pouvoir composer les fonctions de configuration
*/
function setDifficulty (game, dragon, knight) {

  let choices = 'Niveau de difficulté : ';
  for (let i = 0; i < LEVELS.length; i++) {
    choices += `${i + 1}. ${LEVELS[i].type} - `;
  }
  game.difficulty = requestInteger(choices, 1 ,3) - 1;
  dragon.attackPower = LEVELS[game.difficulty].dragon.power;
  knight.attackPower = LEVELS[game.difficulty].knight.power;

  /**
  * On utilise ici une fonction avancée de ES6, l'opérateur 'spread' noté '...'
  * qui permet (entre autres) de transformer un tabelau en une liste de paramètres
  * @example : getRandomInteger(...[100,200]) est équivalent à getRandomInteger(100,200)
  */
  dragon.health = getRandomInteger(...LEVELS[game.difficulty].dragon.initialHealth)
  console.log(`Le dragon part avec ${dragon.health} points de vie`);
  knight.health = getRandomInteger(...LEVELS[game.difficulty].knight.initialHealth);
  console.log(`Le chevalier part avec ${knight.health} points de vie`);
  console.log('----------------------------------');

  return knight;
}

/**
* Initialise l'armure du chevalier
*
* @param {Object} knight Le chavalier
* @return {Object}
*/
function setArmor (knight)
{
  /*
  * NOTE : On pourra remarquer que le programme n'esst pas optimal car la Liste
  * des choix ne vérifie pa qu'il y a bien correspondance avec les armures contenues
  * dans l'objet ARMORS. C'est donc potentiellement (et donc assurément selon la looi de Murphy :)
  * une faille et une source d'erreurs
  */
  let choices = 'Armure : ';
  for (let i = 0; i < ARMORS.length; i++) {
    choices += `${i + 1}. ${ARMORS[i].type} - `;
  }
  let choice = requestInteger(choices, 1 ,3);
  knight.armor = ARMORS[choice - 1];

  return knight;
}

/**
* Initialise le sabre du chevalier
*
* @param {Object} knight Le chevalier
* @return {Object}
*/
function setSword(knight)
{
  let choices = 'Epée : ';
  for (let i = 0; i < SWORDS.length; i++) {
    choices += `${i + 1}. ${SWORDS[i].type} - `;
  }
  let choice = requestInteger(choices, 1 ,3);
  knight.sword = SWORDS[choice - 1];

  return knight;
}


/**
* Affiche l'état du jeu après chaque tour
*
* @param  {int} round : Le nombre de tours déjà joués
* @param  {int} hpDragon : Nombre de points de vie du dragon
* @param  {int} hpKnight : Nombre de points de vie du chevalier
* @return void
*/
function showGameState(round, hpDragon, hpKnight)
{
  console.log(
    `Tour n° ${round} \n` +
    `Dragon : ${hpDragon} PV \n` +
    `Chevalier : ${hpKnight}  PV \n` +
    '--------------------------------------'
  );
}

/**
* Affiche l'état final du jeu et le nom du vainqueur
*
* @param  {Object} winner L'objet représentant le vainqueuer du duel
* @return void
*/
function showGameWinner(winner)
{
  if(winner.name === 'Luke')
  {
    showImage('images/knight.jpg');
    console.log("Vous avez gagné, vous êtes vraiment fort !");
  }  else { //  if(game.knight.hpKnight <= 0)
    showImage('images/dragon.jpg');
    console.log("Le dragon a gagné, vous avez été carbonisé !");
  }
  console.log(`Il restait ${winner.health} points de vie au vainqueur`);
}

/**
* Processus général du jeu
*
* @param  {Object} game   Le contexte du jeu
* @param  {Object} dragon Le dragon
* @param  {Object} knight Le chevalier
* @param  {Object} princess La princesse
* @return void
*/
function startGame(game, dragon, knight, princess)
{
  // La consoledu navigateur est nettoyée pur un nouveau jeu
  console.clear();

  // Le joueur choisit les paramètres du chevalier
  game = initializeGame(game, dragon, knight);
  // Exécution du jeu.
  console.log('Points de vie de départ :');
  showGameState(game.round, dragon.health, knight.health);

  // Comme la fonction gameLoop retourne maintenant un objet (preprésentant le vainqueur),
  // il est possible de composer cette fonction avec 'showGameWinner'
  showGameWinner(play(game, dragon, knight, princess));
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*
* Les variables sont passées en paramètres des fonctions de manière à ne pas recourir
* à des _variables globales_ ce qui conduirait à des _effets de bords_ fortemnent
* indésirables.
* En revanche, les constantes (qui ne peuvent être modifiées) peuvent être globales.
*/
startGame(game, javawan, luke, leia);
