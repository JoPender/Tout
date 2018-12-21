const STORAGE = 'carnet';

/**
 * Lit une clef du localStorage et retourne un objet JavaScript
 *
 * @param  {string} name La clef à lire
 * @return {Object}      Une collection de contacts
 *
 * @example loadData('carnet');
 * @example loadData();
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
 * @return {boolean}
 *
 * @example saveData('carnet', [{title: 'M.', firstName: 'Luc', lastName: 'Skywoker', phone:'01234567890'}])
 * @example saveData();
 */
function saveData(name = STORAGE, data = [])
{
  if (data typeof Array) {
    window.localStorage.setItem(name, JSON.stringify(data));
    return true;
  } else {
    console.log("Le carnet d'adresses n'a pas le format attendu");
    return false;
  }
}
