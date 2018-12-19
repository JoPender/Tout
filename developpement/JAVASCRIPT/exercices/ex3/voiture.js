let voiture = {
  marque : 'Toyota',
  annee_fabrication :1986,
  date_achat : 2010,
  passagers : [
        {
          nom:'tom'
        },
        {
          nom:'Jeanette'
        },
        ]
}

document.write("<p>Marque de la voiture : "   + voiture.marque + "</p>");
document.write("<p>Année de fabrication : "   + voiture.annee_fabrication + "</p>");
document.write("<p>Date d'achat : " + voiture.date_achat + "</p>");
document.write("<ul><li>" + voiture.passagers[0].nom + "</li>"+"<li>" + voiture.passagers[1].nom + "</li></ul>");

/* VERSION CONCATENISATION:

if(voiture.date_achat < 2000){
  classe="rouge";
  document.write("<p class='"+classe+"'>Date d'achat :" + voiture.date_achat + "</p>");
}
else{
  classe="bleu";
  document.write("<p class='"+classe+"'>Date d'achat :" + voiture.date_achat + "</p>");
}

*/
if(voiture.date_achat < 2000){
  classe="rouge";
}
else{
  classe="bleu";
}
document.write(`<p class="${classe}">${voiture.marque}</p>`);
