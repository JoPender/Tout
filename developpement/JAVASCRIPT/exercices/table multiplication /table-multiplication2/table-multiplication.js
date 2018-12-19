let  max = prompt('taille de la table de multiplication');
/*
let i = 2
let j = 4
document.write(`<td>${i*j}</td>`)
*/
/*
document.write("<table border='1px'>");
for(let j=1; j<=valeur; j++){
	document.write(`<tr>`);
		for (let i=1; i<=valeur; i++){
			document.write(`<td>${i*j}</td>`);
		}
	document.write(`</tr>`);
}
document.write("</table border='1px'>");
*/


function mult(x,y)
{
	return x*y;
}

function displayCell(x,y)
{
		let background =""
		if(x == y){
		background = "red"
	}
	else{
		background = ""
	}

	return `<td class=${background}>${mult(x,y)}</td>`;
}



function displayLine(x,max)
{
	let htmlTr = "<tr>";
	for (let y = 1; y <= max; y++){
		htmlTr += displayCell(x,y);
	}
	return htmlTr + "</tr>";
}

function displayTable(max)
{
	let htmlTable = "<table>";
	for (let x = 1; x <= max; x++) {
		htmlTable += displayLine(x,max);
	}
	return htmlTable + "</table>";
}



