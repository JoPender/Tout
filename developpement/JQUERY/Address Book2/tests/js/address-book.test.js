/*
 * Module 2 : Gestion du carnet d'adresses
 */
QUnit.module("Test de la couche applicative.");

// 1. Sauvegarde du carnet d'adresses
QUnit.test("Ecrire un carnet d'adresses : saveAddressBook", function( assert ) {
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  localStorage.removeItem(STORAGE);
  assert.throws(
    function () { try { saveAddressBook(); } catch (error) {throw error} },
    new Error('Le carnet d‘adresses n‘a pas le format attendu (tableau)'),
    'N’accepte pas de valeur par défaut'
  );
  // Utilisation de 'loadData' pour lire un crnet vide
  assert.throws(
    function () { try { saveAddressBook("fgdfhgfhdfghfh"); } catch (error) {throw error} },
    new Error('Le carnet d‘adresses n‘a pas le format attendu (tableau)'),
    "La valeur attendue doit être un tableau"
  );
  // Utilisation de 'loadData' pour lire un crnet vide
  localStorage.removeItem(STORAGE);
  saveAddressBook([]);
  assert.equal(
    localStorage.getItem(STORAGE),
    "[]",
    "Sauvegarde d'un carnet vide"
  );
  // Utilisation de 'loadData' pour lire un carnet contenant des données structurées
  saveAddressBook(STORAGE, '[{"title": "1", "prenom": "Marie", "nom": "Curie", "phone": "0123456789"}]');
  assert.equal(
    localStorage.getItem(STORAGE),
    '[{title:"1",prenom:"Marie",nom:"Curie",phone:"0123456789"}]',
    "Le carnet contient des données au format JSON"
  );
  // Utilisation de 'loadData' pour lire un carnet contenant des données quelconques
  localStorage.setItem(STORAGE, '[Une chaîne quelconque]');
  assert.equal(
    localStorage.getItem(STORAGE),
    '[Une chaîne quelconque]',
    "Un tableau contenant une valeur quelconque est sauvegardé"
  );
});

// Lecture du carnet d'adresses
QUnit.test("Lire un carnet d'adresses : loadAddressBook", function( assert ) {
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  localStorage.removeItem(STORAGE);
  assert.deepEqual(
    loadAddressBook(),
    [],
    'Un carnet inexistant rend un tableau vide'
  );
  // Utilisation de 'loadData' pour lire un crnet vide
  localStorage.setItem(STORAGE, 'Une chaîne quelconque');
  assert.throws(
    function () { try { loadAddressBook(); } catch (error) { throw error; } },
    new Error('Les données ne sont pas sous forme de tableau'),
    "Le carnet n'est pas un tableau"
  );
  // Utilisation de 'loadData' pour lire un crnet vide
  localStorage.setItem(STORAGE, '[Un tableau {contenant: du JSON} mal formé]');
  assert.throws(
    function () { try { loadAddressBook(); } catch (error) { throw error; } },
    new Error('Les données ne sont pas dans un bon format'),
    "Le carnet est bien un tableau mais pas au format JSON"
  );
  // Utilisation de 'loadData' pour lire un carnet contenant des données structurées
  localStorage.setItem(STORAGE, '[{"title":"1","prenom":"Marie","nom":"Curie","phone":"0123456789"}]');
  assert.deepEqual(loadAddressBook(), [{title: "1", prenom: "Marie", nom: "Curie", phone: "0123456789"}], "Le carnet contient des données au format JSON");
});

// Lecture du carnet d'adresses
QUnit.test("Afficher les données personnelles d'un contact : refreshDetails", function( assert ) {
  // Contexte général des Tests
  let contact = {title: "Mme", firstName: "Marie", lastName: "Curie", phone: "0123456789"};
  let card = $('<aside id="contact-details" class="hide"><h3></h3><p></p><a href ="#"></a></aside>');
  $('body').append(card);
  refreshDetails('open', contact, 1);
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  assert.equal(
    $('#contact-details h3').text(),
    'Mme Marie CURIE',
    'Le titre (h3) de la fiche affiche le nom complet de la personne'
  );
  assert.equal(
    $('#contact-details p').text(),
    '0123456789',
    'Le paragraphe (p) de la fiche affiche le numéro de téléphone de la personne'
  );
  assert.equal(
    $('#contact-details a').data("index"),
    '1',
    'Le lien (a) possède bien un attribut \'data-index\' dont la valeur est 1'
  );
  assert.notOk(
    $('#contact-details').hasClass('hide'),
    'La carte est bien en mode "visible", la classe CSS "hide" est absente'
  );
  $("#contact-details").detach();
});

// Lecture du carnet d'adresses
QUnit.test("Masquer la carte contact : refreshDetails", function( assert ) {
  // Contexte général des Tests
  let card = $('<aside id="contact-details"><h3></h3><p></p><a href ="#"></a></aside>');
  $('body').append(card);
  refreshDetails('close');
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  assert.equal(
    $('#contact-details h3').text(),
    '',
    'Le titre (h3) de la fiche affiche le nom complet de la personne'
  );
  assert.equal(
    $('#contact-details p').text(),
    '',
    'Le paragraphe (p) de la fiche affiche le numéro de téléphone de la personne'
  );
  assert.equal(
    $('#contact-details a').data("index"),
    '',
    'Le lien (a) possède bien un attribut \'data-index\' dont la valeur est 1'
  );
  assert.ok(
    $('#contact-details').hasClass('hide'),
    'La carte est en mode "invisible", la classe CSS "hide" est présente'
  );
  $("#contact-details").detach();
});

// Afficher un formulaire vide
QUnit.test("Afficher un formulaire vide : refreshForm", function( assert ) {
  // Contexte général des Tests
  let form =$(`<form id="contact-form" class="hide standard-form" data-mode data-index>
    <ul>
      <li><label for="title">Civilité :</label><select id="title" name="title"><option value="0">...</option><option value="1">Madame</option><option value="3">Monsieur</option></select></li>
      <li><label for="lastName">Nom :</label><input id="lastName" type="text" name="lastName" pattern="([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[\s\-']?)+" /></li>
      <li><label for="firstName">Prénom :</label><input id="firstName" type="text" name="firstName" pattern="([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+-?)+" /></li>
      <li><label for="phone">Téléphone :</label><input id="phone" type="text" name="phone" pattern="(\(\+33\)|0)[1-5]([\s\.]?\d{2}){4}" /></li>
      <li id="phoneError" class="hiddenError"></li>
      <li><input type="button" id="save-contact" value="Enregistrer"></li>
    </ul>
  </form>`);
  $('body').append(form);
  refreshForm('open');
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  assert.equal(
    $('#title').val(),
    '0',
    'Aucun genre n’est sélectionné par défaut'
  );
  assert.equal(
    $('#firstName').val(),
    '',
    'Le champ “prénom” (firstName) est vide'
  );
  assert.equal(
    $('#lastName').val(),
    '',
    'Le champ “nom” (lastName) est vide'
  );
  assert.equal(
    $('#phone').val(),
    '',
    'Le champ “téléphone” (phone) est vide'
  );
  assert.notOk(
    $('#contact-form').hasClass('hide'),
    'Le formulaire est en mode "visible", la classe CSS "hide" est présente'
  );
  $("#contact-form").detach();
});

// Afficher un formulaire pré-rempli
QUnit.test("Afficher un formulaire pré-rempli : refreshForm", function( assert ) {
  // Contexte général des Tests
  let contact = {title: "Mme", firstName: "Marie", lastName: "Curie", phone: "0123456789"};
  let form =$(`<form id="contact-form" class="hide standard-form" data-mode data-index>
    <ul>
      <li><label for="title">Civilité :</label><select id="title" name="title"><option value="0">...</option><option value="1">Madame</option><option value="3">Monsieur</option></select></li>
      <li><label for="lastName">Nom :</label><input id="lastName" type="text" name="lastName" pattern="([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[\s\-']?)+" /></li>
      <li><label for="firstName">Prénom :</label><input id="firstName" type="text" name="firstName" pattern="([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+-?)+" /></li>
      <li><label for="phone">Téléphone :</label><input id="phone" type="text" name="phone" pattern="(\(\+33\)|0)[1-5]([\s\.]?\d{2}){4}" /></li>
      <li id="phoneError" class="hiddenError"></li>
      <li><input type="button" id="save-contact" value="Enregistrer"></li>
    </ul>
  </form>`);
  $('body').append(form);
  refreshForm('open', contact);
  // Utilisation de 'loadAddressBook' sur un carnet inexistant
  assert.equal(
    $('#title').val(),
    '1',
    'Le genre (Mme) est sélectionné par défaut : 1 == Mme'
  );
  assert.equal(
    $('#firstName').val(),
    'Marie',
    'Le champ “prénom” (firstName) contient le prénom de la personne : Marie'
  );
  assert.equal(
    $('#lastName').val(),
    'Curie',
    'Le champ “nom” (lastName) contient le nom de la personne : Curie'
  );
  assert.equal(
    $('#phone').val(),
    '0123456789',
    'Le champ “téléphone” (phone) conteint le numéro de téléphone de la personne'
  );
  assert.notOk(
    $('#contact-form').hasClass('hide'),
    'Le formulaire est en mode "visible", la classe CSS "hide" est présente'
  );
  $("#contact-form").detach();
});
