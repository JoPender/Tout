
/*
 * Fonctions de rappel (ou callbacks) qui s'exécutent en réaction à des événements
 * qui se produisent dans la page.
 */

/**
 * Click sur le bouton '#add-contact'
 * Affiche le formulaire pour ajouter un nouveau contact au carnet d'Adresses
 *
 */
function onClickAddContact ()
{
  document.querySelector('#title').value = "0";
  document.querySelector('#firstName').value = "";
  document.querySelector('#lastName').value = "";
  document.querySelector('#phone').value = "0";
  document.querySelector('#contact-form').classList.toggle('hidden');
}

/**
 * Click sur le lien 'a' dans '#contact-details'
 * Affiche le formulaire pré-rempli pour modifier les données de la personne
 */
function onClickEditContact ()
{
}

/**
 * Click sur le bouton '#clear-address-book'
 * Vide le carnet d'adresses
 */
function onClickDeleteAddressBook ()
{
  saveData('carnet', []);
}

/**
 * Click sur un des noms de la liste du carnet d'adresses ('#address-book')
 * Affiche les détails dans la carte.
 */
function onClickDisplayContact ()
{

}

/**
 * Fonction de rappel
 * Est exécutée lors d'un 'click' le bouton 'submit' du formulaire.
 * Sauvegarde le contact (nouveau ou modifié) dans le carnet d'adresses
 *
 * @param  {Event} event L'événement 'click'
 * @return {void}
 */
function onClickSaveContact (event)
{
  let addressBook;
  let contact;
  let index;

  event.preventDefault();
  contact = createContact
  (
      document.querySelector('select[name=title]').value,
      document.querySelector('input[name=firstName]').value,
      document.querySelector('input[name=lastName]').value,
      document.querySelector('input[name=phone]').value
  );

  addressBook = loadAddressBook();

  addressBook.push(contact);

  saveAddressBook(addressBook);

  // Mise à jour de l'affichage.
  document.querySelector('#contact-form').classList.toggle('hidden');
}
