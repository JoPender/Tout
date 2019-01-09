
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
  /*
   * L'« hydratation » du formulaire est déportée dans une fonction ad hoc, qui
   * gère à la fois le remplissage des champs et elur remise à zéro
   */
  refreshForm();
  /*
   * Lorsque l'on clique sur le bouton '+', il faut signaler au formulaire que
   * l'on veut ajouter un contact. En effet, on utilise _le même formulaire_ pour
   * l'ajout et la modification.
   */
  $('#contact-form').data('mode', 'insert')
  // document.querySelector('#contact-form').dataset.mode = 'insert';
}

/**
 * Click sur le lien 'a' dans '#contact-details'
 * Affiche le formulaire pré-rempli pour modifier les données de la personne
 */
function onClickEditContact ()
{
  console.log($(this));
  addressBook = loadAddressBook();
  contact = addressBook[$(this).data('index')];
  console.log(contact);
  refreshForm('open', contact);
  $('#contact-form').data('mode', 'update');
  $('#contact-form').data('index', $(this).data('index'));
}

/**
 * Click sur le bouton '#clear-address-book'
 * Vide le carnet d'adresses
 */
function onClickDeleteAddressBook ()
{
  saveData(); // équivaut à saveData('carnet', []);
  /*
   * Après avoir vidé le contenu du localStorage, on vide le formulaire, au cas où
   * il resterait des valeurs dans les champs, idem pour la fiche personnelle et,
   * bien entendu, on refraîchit la liste des contacts qui devrait maintenant ne plus rien afficher.
   */
  refreshForm('close');
  refreshDetails('close');
  refreshContactList();
}

/**
 * Click sur un des noms de la liste du carnet d'adresses ('#address-book')
 * Affiche les détails dans la carte.
 */
function onClickDisplayContact ()
/*
 * Si l'on utilise un syntaxe JavaScript pure, il fautdra modifier légèrement
 * la déclaration de la fonction en introduisant un paramètre représentant l'événement :
 *
 * function onClickDisplayContact (event)
 *
 * Ceci est indispensable pour le bon fonctionnement de la « délégation d'événement ».
 * Si l'élément '#address-book' délègue à tous les liens qu'il contient le soin de
 * traiter l'événement, il deveint nécessaire de repérer exactement le '<a ...>'
 * sur lequel le click s'est produit et l'information est contenue dans la variable
 * 'event.target'. Il faut donc que l'on connaisse 'event' :o)
 *
 * Le paramètre 'event' dans la signature est donné par JavaScript. Nul besoin de le
 * définir.
 */
{
  selectedPerson = $(this);
  console.log(selectedPerson);
  // console.log(event.target);
  addressBook = loadAddressBook();
  contact = addressBook[selectedPerson.data('index')];

  refreshDetails('open', contact, selectedPerson.data('index'));
  refreshForm('close');
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
  let form;

  event.preventDefault();

  /*
   * Maintenant on veut s'assurer que tous les champs ont bien de bonnes informations
   * avant de sauvegarder un contact dansl carnet d'adresses.
   *
   * (pour la démonstration, on ne considère que le numéro de téléphone.)
   *
   * On encapsule le traitement dans un try {...} catch {...} de manière à pouvoir
   * intercepter une erreur éventuelle. En particulier, si les données du formulaire
   * ne sont pas valides, la fonction 'createContact' lèvera une exception
   */
  try {
    contact = createContact(
      $('select[name=title]'),
      //     document.querySelector('select[name=title]'),
      $('input[name=firstName]'),
      //     document.querySelector('input[name=firstName]'),
      $('input[name=lastName]'),
      //     document.querySelector('input[name=lastName]'),
      $('input[name=phone]')
      //     document.querySelector('input[name=phone]')
    );

    addressBook = loadAddressBook();

    /*
    * On va devoir remonter dans l'arbre du DOM depuis le nud du bouton 'submit'
    * jusqu'au nud 'form'. La manière la plus simple est de demander trois fois le
    * parent (donc l'« arrière-grand-parent ») du bouton : input[type='submit'] > li > ul > form
    * Il existe plusieurs autres méthodes pour trouver le second à partir du premier,
    * dont la syntaxe utilisée ci-dessous.
    *
    * Une forme encore plus simple, mais moins élégante serait de faire référence directement
    * à $('#contact-form')
    */
    form = $(this).parentsUntil('form').last().parent();
    // form = event.target.parentNode.parentNode.parentNode;
    console.log($(this));
    console.log(form);

    if (form.data('mode') == 'insert') {
      // if (form.dataset.mode == 'insert') {
      addressBook.push(contact);
    } else {
      addressBook[form.data('index')] = contact;
      // addressBook[form.dataset.index] = contact;
    }

    saveAddressBook(addressBook);

    /*
    * Mise à jour de l'affichage. Cf. commentaire ligne 51
    */

    refreshForm('close');
    refreshContactList();
  } catch (error) {
    displayError(error);
  }
}
