
// Déclaration des variables
var nombre1;
var nombre2;
var operateur;
var result;

//Déclaration des nombres et opérateurs
nombre1 = parseFloat(prompt("Saisissez votre premier nombre"));
nombre2 = parseFloat(prompt("Saisissez votre second nombre"));
operateur = prompt("Quelle operateur souhaitez-vous ?");


switch (operateur) {
  case '+' :
    result = nombre1 + nombre2;
    break;
  case '-':
    result = nombre1 - nombre2;
    break;
  case '*':
    result = nombre1 * nombre2;
      break;
  case '/':
    result = nombre1 / nombre2;
      break;
  case '^':
    result = nombre1 ^ nombre2;
      break;
  default: ("opération inconnue"+operateur)
}
document.write(`${nombre1} + ${nombre2} = ${result}`);
