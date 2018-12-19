//Déclaration de la constante tva
const TAUX_DE_TVA=19.6;

// Déclaration des variables
var montantHT;
var montantTTC;
var montantTVA;

//demander à l'utilisateur de rentrer le montant HT
montantHT = prompt("Quel est le montant HT de votre produit?")

montantHT = parseFloat(montantHT);


//Opérations arithmétiques 
montantTVA = montantHT + (TAUX_DE_TVA / 100);
montantTTC = montantHT + montantTVA;

//Affichage de la variable montantTC
document.write('<p> Si votre produit à une valeur de ' + montantHT + ' euros , Le montant TTC de votre produit est de ' + montantTTC + ' euros puisque la TVA sera de ' + montantTVA +' euros</p>');

