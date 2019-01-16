// **********************************************************************************
// ********************************* Code Principal *********************************
// **********************************************************************************

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne directement à jQuery.
 */
// $(document).ready(function)
$(function()
{
    var magicalSlate;

    // La créatino de l'objet Program configure et lance l'application
    magicalSlate = new Program();

    //magicalSlate.start(); Appel devenu inutile
});
