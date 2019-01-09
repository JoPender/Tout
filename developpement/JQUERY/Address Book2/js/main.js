/*
 * Script s'exécutant dès que le chargement de la page est terminé
 */

// $ === jQuery

$(document).ready(function () {
// document.addEventListener('DOMContentLoaded', function () {
  $('#add-contact').on('click', onClickAddContact);
  //   document.querySelector('#add-contact').addEventListener('click', onClickAddContact);
  $('#contact-details a').on('click', onClickEditContact);
  //   document.querySelector('#contact-details a').addEventListener('click', onClickEditContact);
  $('#clear-address-book').on('click', onClickDeleteAddressBook);
  //   document.querySelector('#clear-address-book').addEventListener('click', onClickADeleteAddressBook);
  /*
   *
   */
  $('#address-book').on('click', 'a', onClickDisplayContact);
  //   document.querySelector('#address-book').addEventListener('click', onClickDisplayContact);
  $('#save-contact').on('click', onClickSaveContact);
  //   document.querySelector('#save-contact').addEventListener('click', onClickSaveContact);

  /*
   * Evénement permettant de traiter les erreurs sur le numéro de téléphone.
   * On suppose pour l'exercice que l'on n'a des nes numéros français.
   * L'événement 'focus' se produit lorsque le champ devient actif (typiquement, le curseur est positionné dessus)
   * L'évnéement 'blur' se produit lorsque le champ devient inactif
   * En quittant le champ, onlance la validation de la valeur, qui doit correspondre à un numéro de téléphone
   * français valide (sur 10 chiffres ou au format international)
   * cf. 'address-book.html' ligne 72 sq.
   */
  $('#phone').on('blur', onInvalidPhoneNumber);
  $('#phone').on('focus', onPhoneTyping);

  refreshContactList();
});
