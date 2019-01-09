/*
 * Couche d'accès aux données.
 *
 * Les fonctions ont pour seul but d'écrire et de lire les données du programme
 * sur ou depuis un support 'physique'.
 * Eventuellement, des erreurs d'entées/sorties pourraient être détectées.
 * Lacouche d'accès aux données ne doit rien faire de plus que  ça.
 */

const STORAGE = 'carnet';

/**
 * Lit une clef du localStorage et retourne un objet JavaScript
 *
 * @param  {string} name La clef à lire
 * @return {Object}      Une collection de contacts
 *
 * @example loadData('carnet');
 * @example loadData();
 *
 * NOTE : On utilise ici une notation permise par ES6 (la nouvelle norme JavaScript)
 * qui permet de donner des valeurs par défaut aux paramètres des fonctions si ces valeurs
 * ne sont pas fournies lors de l'appel de la fonction (cf. exemple ligne 10, dans ce cas
 * la valeur du pramètre 'name' est égale à la constante STORAGE ==> 'carnet')
 */
function loadData(name = STORAGE)
{
    return JSON.parse(window.localStorage.getItem(name));
}

/**
 * Sauvegarde une collection de contacts, donnée sous forme de tableau
 *
 * @param  {string} name La clef associée au carnet d'adresses
 * @param  {Array} data  Le carnet d'adresses
 * @return {undefined}
 *
 * @example saveData('carnet', [{title: 'M.', firstName: 'Luc', lastName: 'Skywoker', phone:'01234567890'}])
 * @example saveData();
 */
function saveData(name = STORAGE, data = [])
{
   return window.localStorage.setItem(name, JSON.stringify(data));
}
