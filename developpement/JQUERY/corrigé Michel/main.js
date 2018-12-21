/*
 * Script s'exécutant dès que le chargement de la page est terminé
 */

document.addEventListener('(DOMContentLoaded)', function () {
  document.querySelector('#add-contact').addEventListener('click', onClickAddContact);
  document.querySelector('#contact-details a').addEventListener('click', onClickEditContact);
  document.querySelector('#clear-address-book').addEventListener('click', onClickADeleteAddressBook);
  document.querySelector('#address-book').addEventListener('click', onClickDisplayContact);
  document.querySelector('#save-contact').addEventListener('click', onClickSaveContact);
});


// $ === jQuery

$(document).ready(function () {
  $('#add-contact').on('click', onClickAddContact);
  $('#contact-details a').on('click', onClickEditContact);
  $('#clear-address-book').on('click', onClickADeleteAddressBook);
  $('#address-book').on('click', onClickDisplayContact);
  $('#save-contact').on('click', onClickSaveContact);
});
