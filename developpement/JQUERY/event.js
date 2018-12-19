
function onClickAddContact()
{
  let form = document.querySelector('.contactForm');

  form.classList.toggle('hide');

}

function onClickDisplayDetails()
{

}

function onClickEditContact()
{

}



function onClickDeleteContact()
{

}






function onClickSaveForm(event)
{
  event.preventDefault();
  let nom = document.querySelector('#lastname').value;
  let prenom = document.querySelector('#firstname').value;
  let tel = document.querySelector('#tel').value;
  let genre = document.querySelector('#genre').value;

  let form = {
    'last_Name' : nom,
    'first_Name': prenom,
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
// document.querySelector('#genre').value;



 }
