
/* Au click sur le logo + : Affichage - disparition du formulaire*/
function onClickAddContact()
{
  let form = document.querySelector('.contactForm');
  form.classList.toggle('hide');
}

function onClickEditContact()
{


}

/* Au click sur le contact : affichage du détail du contact dans
la section #description*/
function  onClickDisplayDetails(event)
{
  event.preventDefault();
  //let target = event.target;
  //console.log(event.target);
  let carnet = JSON.parse(localStorage.getItem('carnet'));
  let contact = carnet[event.target.dataset.index];
  let description = document.querySelector('#description');
  description.innerHTML = "";

  //let bt_EditContact = document.querySelector('#bt_EditContact');
  //document.querySelector('#bt_EditContact').classList.toggle('hide');


  let disp_detail_contact = document.createElement('h3');
  description.appendChild(disp_detail_contact);
  disp_detail_contact.innerHTML = contact.genre + '<br>' + 'Nom : ' + contact.nom  + '<br>' + 'Prénom : ' + contact.prenom
                                    + '<br>' +  'Tel : ' + contact.tel;



}



function onClickDeleteContact()
{
localStorage.clear();
let ul = document.querySelector('#detailContact');
ul.innerHTML = "";
}






function onClickSaveForm(event)
{
  event.preventDefault();
  let nom = document.querySelector('#lastname').value;
  let prenom = document.querySelector('#firstname').value;
  let tel = document.querySelector('#tel').value;
  let genre = document.querySelector('#genre').value;

  let form = {
    'nom' : nom,
    'prenom': prenom,
    'tel_Contact': tel,
    'gen_re': genre
  };
  console.log(form);

let carnet = JSON.parse(localStorage.getItem('carnet'));

    if (carnet == null){
      carnet = [];
    }

carnet.push(form);

localStorage.setItem('carnet',JSON.stringify(carnet));

document.querySelector('#lastname').value = "";
document.querySelector('#firstname').value = "";
document.querySelector('#tel').value = "";

//onClickAddContact();
let i = 0;
let ul = document.querySelector('#detailContact');
ul.innerHTML = "";
// for (let child of ul.childNodes) {
//   ul.removeChild(child);
// }
for(let contact of carnet){
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.href = '#';
  a.dataset.index = i++;
  a.innerHTML += contact.nom + ' ' + contact.prenom;
  ul.appendChild(li);
  li.appendChild(a);
  }
}
