/**
 * Fonction de validation du champ fournissant le numéro de téléphone
 * Affiche un message d'erreur dans un cartouche personnalisé si la valeur donnée
 * pour le numéro de téléphone n'estpas vaide.
 *
 * @param  {Event} event [description]
 * @return {void}
 */
function onInvalidPhoneNumber (event) {
  // On doit désactiver le message par défaut
  event.preventDefault();
  // Si la velur du champ n'est pas valide...
  if (!event.target.validity.valid ) {
    errorBlock = $(this).parent().siblings('#phoneError');
    errorBlock.text('Un numéro de téléphone valide pour la France : a) se compose de 10 chiffres OU b) commence par le code international (+33), l’indicatif de la région + 8 chiffres');
    errorBlock.toggleClass('error-block hidden-error');
    $(this).toggleClass('invalidField');
  }
}

function onPhoneTyping (event) {
  errorBlock = $(this).parent().siblings('#phoneError').first();
  if (errorBlock.hasClass('errorBlock')) {
    errorBlock.toggleClass('error-block hidden-error');
    $(this).toggleClass('invalidField');
  }
  errorBlock.text("");
}

/**
 * Affiche dans un bloc spécial les messages d'erreurs liés à des exceptions.
 * Ceux-ci sont normalement affichés dans la console.
 *
 * @param  {Error} error
 * @return {void}
 */
function displayError (error) {
  console.log('Erreur : ' + error.message);
  errorBlock = $("<p class='error-message'></p>").text(error.message);
  $('div.errors').empty().append(errorBlock);
}
