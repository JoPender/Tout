document.addEventListener('DOMContentLoaded',function (){


let bt_addContact = document.querySelector('#addContact');
addContact.addEventListener('click',onClickAddContact);

let bt_deleteContact = document.querySelector('#deleteContact');
deleteContact.addEventListener('click',onClickDeleteContact);

let bt_saveContact = document.querySelector('#saveContact');
saveContact.addEventListener('click',onClickSaveForm);

let bt_EditContact = document.querySelector('#bt_EditContact');
bt_EditContact.addEventListener('click', onClickEditContact);

$('#detailContact').on('click','a',onClickDisplayDetails);
display();
})
