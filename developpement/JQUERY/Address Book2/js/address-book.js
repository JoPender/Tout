/*
 *Couche applicative.
 *
 * Ensemble des fonctions qui ont trait à l'application elle-même, et la manière
 * dont celle-ci manipule les données.
 * Dans notre cas, on a simplement besoin de quelques fonction assez simples qui
 * permettreont de structurer les données dans un format d'objet que nous choisissons,
 * de valider des données, de construire une prséentation (ou 'vue') popur l'utilisaateur.
 */

/*
 * constante représentant un objet 'contact' par défaut,avec toutes les valeurs vides
 */
const EMPTY_CONTACT = {title: '', firstName: '', lastName: '', phone:''};

/*
 * La liste des genres pour convertir la valeur du champ de formualire 'title'
 * qui vaut 1, 2 ou 3
 */
const GENRES = ['Mme', 'Mlle', 'M.'];

/**
 * Construit un objet représentant un contact à partir des données du formulaire
 *
 * @param  {Object} title     Le genre de la personne (1. 2 ou 3)
 * @param  {Object} firstName Le prénom de la personne
 * @param  {Object} lastName  Le nom de famille de la personne
 * @param  {Object} phone     Le numéro de téléphone
 * @return {Object}
 */
function createContact(title, firstName, lastName, phone)
{
    let contact;

    /*
     * Récupère l'objet JavaScript enveloppé dans l'objet jQuery
     * On remarque que, lorsque l'on inspecte l'objeet jQuery; il existe une propriété
     * de nom '0', qui contient l'objet JS.
     */
    let jsPhone = phone[0];

    /*
     * Le numéro de téléphone a-t-il un bon format ?
     *
     * 'validity' compare la veleur du champ au motif défini dans l'attribut 'pattern'
     * de l'élément HTMl (cf. 'address-bool.html' lignes 78, 82 & 113).
     * Grâce à cela, on peut savoir si les informations sont justes, auquel cas
     * la fonction renverra un objet.
     */
    let validPhone = jsPhone.validity.valid;

    if (validPhone) {
      contact           = {};
      contact.firstName = firstName.val();
      contact.lastName  = lastName.val().toUpperCase();
      contact.phone     = phone.val();
      // Le 'switch' n'est vraiment pas indispensable pour traiter le genre
      contact.title     = GENRES[title.val() - 1];

      return contact;
    } else {
      /*
       * Si les conditions de validité ne sont pas remplies (ici on a juste un numéro
       * de téléphone qui n'a pas le bon format), alors on lève un exception qui sera
       * interceptée et traitée par une des fonctions appelantes.
       */
      throw new Error("Certaines données de votre formulaire ne sont pas correctes");
    }
}

/**
 * Charge le carnet d'adresses depuis le localStorage en vérifiant que celui-ci
 *
 * @return {Array} [description]
 */
function loadAddressBook()
{
    let addressBook = loadData();
    /*
     * On demande à la couche d'accès aux données de nous fournir un jeu données.
     * C'est _maintenant_ l'application qui décide ce qui doit être fait en fonction
     * de la réponse. Dans le cas de l'exercice, on souhaite que le carnet d'adresses
     * soit créé sous la forme d'un tableau vide s'il n'existe pas auparavant.
     *
     * NOTE : Si cette condition suffit dans le cadre de l'exercice (et encore), on souhaiterait
     * sans doute avoir une contrainte plus forte et dire que si 'addressBook' n'estpas un tableau,
     * alors on a un cas d'erreur, à savoir que l'on cherche à lire quelque chose qui n'est pas un
     * carnet d'adresses ...
     */
    if(addressBook == null) {
        addressBook = [];
    } else if (!(addressBook instanceof Array)) {
      /*
       * ... par exemple, une exception est “levée”, qui pourrait être traitée ailleurs
       * dans l'application.
       */
      throw new Error('Les données ne sont pas sous forme de tableau');
    } else {

    }

    return addressBook;
}

/**
 * Enregistre le carnet d'adresse dans le localStorage
 *
 * @param  {Array} addressBook [description]
 * @return {boolean}
 */
function saveAddressBook(addressBook)
{
  /*
   * instanceof permet de testerle type d'une variable, ici on cherche à vérifier que
   * la valeur passée est bien un tableau, puisque c'est le format du carnet d'adresses.
   * Dans le cas inverse, on peu lever une exception qui sera traitée ailleurs dans l'application.
   */

  if (addressBook instanceof Array) {
    return saveData('carnet', addressBook);
  } else {
    throw new Error('Le carnet d‘adresses n‘a pas le format attendu (tableau)');
  }
}

/**
 * Rafraîchit la liste des contacts.
 *
 * @return {[type]} [description]
 */
function refreshContactList()
{
  /*
   * Exemple d'utilisation de la structure try { ...} catch { ... } pour traiter les erreurs
   * liées au format des données.
   */
  try {
    // On commence par effacer systématiquement le blocd'affichage des erreurs.
    $('.errors').empty();
    let addressBook = loadAddressBook();
    let displayNames = $("#address-book").empty();
    // let displayNames = document.querySelector("#address-book");
    // displayNames.innerHTML = "";
    // Version alternative pour vider la liste des contacts en Vanilla JavaScript
    // while (displayNames.firstChild) {
      //   displayNames.removeChild(displayNames.firstChild)
      // }
    let i = 0;
    for (contact of addressBook){
      line = $("<p class='contact'></p>");
      // line = document.createElement('p');
      // line.classList.add('contact');
      link = $(`<a href='#' data-index='${i++}'></a>`).html(`${contact.firstName} ${contact.lastName}`);
      // link = document.createElement('a');
      // link.href="#"; // Requis pour que l'élément ait l'apparence d'un lien hypertexte
      // link.dataset.index = i++;
      // link.innerHTML = `${contact.firstName} ${contact.lastName}`;
      line.append(link);
      // line.appendChild(link);
      displayNames.append(line);
      // displayNames.appendChild(line);
      refreshDetails('close');
    }
  } catch (error) {
    /*
    * S'il s'est produit une erreur (de lecture ici), j'affiche un message
    * dans un bloc 'div.errors' pour l'utilisateur.
    */
   displayError(error);
  }
}

/**
 * Fonction pour rafraîchir le formulaire avant le prochain usage.
 *
 * @param  {String} mode      Mode d‘affichage : rendre visible ('open') ou invisible ('close')
 * @param  {string} title     [description]
 * @param  {string} firstName [description]
 * @param  {string} lastName  [description]
 * @param  {string} phone     [description]
 * @return {void}
 *
 * Cette fonction est un exemple de “déstructuration d'objet”, une fonctionnalité
 * apparue avec ES6 (ou ECMAScript 6). Cette syntaxe offre plusieurs aspects très positifs
 * (elle existait déjà dan des langages comme Python ou Ruby). Le principe de son
 * fonctionnement est que l'on passe à la fonction un objet, ayant une certaine structure
 * (ici l'objet doit avoir quatre propriétés), et la fonctio va décomposer automatiquement l'objet
 * pour en tirer les difféentes parties. Vous pouvez voir son utilisation dans le fichier 'events.js'
 * notamment aux lignes 34 et 104.
 *
 * Pour faire bonne mesure, j'ajoute ici l'indication d'une valeur par défaut qui permet à cette fonction
 * de présenter un formulaire vide si aucune valeur ne lui est passée (typiquement cf. 'events.js' ligne 104)
 */
function refreshForm (mode = 'open', {title, firstName, lastName, phone} = EMPTY_CONTACT)
{
  console.log('Option #title : ' + title + ' ' + GENRES.indexOf(title));
  $('#title').val(GENRES.indexOf(title) + 1);
  // document.querySelector('#title').value,
  $('#firstName').val(firstName);
  // document.querySelector('#firstName').value,
  $('#lastName').val(lastName);
  // document.querySelector('#lastName').value,
  $('#phone').val(phone);
  // document.querySelector('#phone').value
  if (mode === 'open') {
    $('#contact-form').removeClass('hide');
    // document.querySelector('#contact-form').classList.remove('hide')
  } else {
    $('#contact-form').addClass('hide');
    // document.querySelector('#contact-form').classList.add('hide')
  }
}

/**
 * Rafraîchit l'affichage de la fiche personnelle ddes contacts
 *
 * @param  {String} mode          Mode d‘affichage : rendre visible ('open') ou invisible ('close')
 * @param  {String} title         [description]
 * @param  {String} firstName     [description]
 * @param  {String} lastName      [description]
 * @param  {String} phone         [description]
 * @param  {String} index         L'indice du contact à afficher (vide si aucun)
 * @return {void}
 */
function refreshDetails (mode = 'open', {title, firstName, lastName, phone} = EMPTY_CONTACT, index = "")
{
  $('#contact-details h3').text($.trim(`${title} ${firstName} ${lastName.toUpperCase()}`));
  // let nameElement = document.querySelector('#contact-details h3');
  // nameElement.innerHTML = `${contact.firstName} ${contact.lastName.toUpperCase()}`
  $('#contact-details p').text(phone);
  // let phoneElement = document.querySelector('#contact-details p');
  // phoneElement.innerHTML = contact.phone;
  $('#contact-details a').data('index', index);
  // let buttonElement = document.querySelector('#contact-details a');
  // buttonElement.dataset.index = event.target.dataset.index;
  if (mode === 'open') {
    $('#contact-details').removeClass('hide');
    // document.querySelector('#contact-details').classList.remove('hide');
  } else {
    $('#contact-details').addClass('hide');
    // document.querySelector('#contact-details').classList.add('hide');
  }
}
