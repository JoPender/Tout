let  valeur; 
valeur = window.prompt('Etre la taille de la table de multiplication');

/*
let i = 2
let j = 4
document.write(`<td>${i*j}</td>`)
*/

document.write("<table border='1px'>");
for(let j=1; j<=valeur; j++){
	document.write(`<tr>`);
		for (let i=1; i<=valeur; i++){
			document.write(`<td>`);
			document.write(`<td>${i*j}</td>`);
		}
	document.write(`</tr>`);
}
document.write("</table border='1px'>");








