
/* Au click sur le logo + : Affichage - disparition du formulaire*/
function onClickAddContact()
{
  //let form = document.querySelector('.contactForm');
  document.querySelector('#contactForm').classList.toggle('hide');
  document.querySelector('#contactForm form').dataset.mode = 'insert';
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
  description.dataset.index = event.target.dataset.index;

  document.querySelector('#contactForm form').dataset.index = event.target.dataset.index;

  description.innerHTML = "";


  let bt_EditContact = document.querySelector('#section_edit');
  document.querySelector('#bt_EditContact').classList.add('display');


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
  let carnet = JSON.parse(localStorage.getItem('carnet'));
  if(document.querySelector('#contactForm form').dataset.mode == 'insert'){

      event.preventDefault();

      let nom = document.querySelector('#lastname').value;
      let prenom = document.querySelector('#firstname').value;
      let tel = document.querySelector('#tel').value;
      let genre = document.querySelector('#genre').value;

      let form = {
        'nom' : nom,
        'prenom': prenom,
        'tel': tel,
        'genre': genre
      };
      console.log(form);

    //let carnet = JSON.parse(localStorage.getItem('carnet'));

        if (carnet == null){
          carnet = [];
        }

    carnet.push(form);

    localStorage.setItem('carnet',JSON.stringify(carnet));

    //document.querySelector('#lastname').value = "";
    //document.querySelector('#firstname').value = "";
    //document.querySelector('#tel').value = "";


    }else{
      //let carnet = JSON.parse(localStorage.getItem('carnet'));
      let table = [];
      for(let contact of carnet){
        if(contact == document.querySelector('#contactForm form').dataset.index){
          let nom2 = document.querySelector('#lastname').value;
          let prenom2 = document.querySelector('#firstname').value;
          let tel2 = document.querySelector('#tel').value;
          let genre2 = document.querySelector('#genre').value;

          let form2 = {
            'nom' : nom2,
            'prenom': prenom2,
            'tel': tel2,
            'genre': genre2
          };
          table.push(form2);


          //document.querySelector('#lastname').value = "";
          //document.querySelector('#firstname').value = "";
          //document.querySelector('#tel').value = "";

        } else {
          table.push(carnet[contact]);
        }
      }
      localStorage.setItem('carnet',JSON.stringify(table));
      //onClickAddContact();

        }
      }


function display(){
  let carnet = JSON.parse(localStorage.getItem('carnet'));
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
function onClickEditContact()
{
  let carnet = JSON.parse(localStorage.getItem('carnet'));
  let description = document.querySelector('#description').dataset.index;

  document.querySelector('#contactForm form').dataset.mode = 'update';
  document.querySelector('#contactForm').classList.toggle('hide');
  document.querySelector('#lastname').value = carnet[description].nom;
  document.querySelector('#firstname').value = carnet[description].prenom;
  document.querySelector('#tel').value = carnet[description].tel;
  document.querySelector('#genre').value = carnet[description].genre;

  //document.querySelector('.contactForm form').dataset.index = 'update';

}
