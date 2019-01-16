/**
 * Retourne un nombre entier aléatoirment entre deux bornes, minimale et maximale.
 *
 * @param  {int} min valeur minimalale
 * @param  {int} max valeur maximale
 * @return {int}
 *
 * @example getRandomInteger(10, 100)
 */
export function getRandomInteger(min, max)
{
  return Math.floor(Math.random() * (max - min) + min);

}

/**
 * Retourne une teinte RGB + une valeur de transparence.
 *
 * @return {string} une couleur au format CSS rgba()
 */
export function getRandomColor()
{
  const R = getRandomInteger(0, 255);
  const G = getRandomInteger(0, 255);
  const B = getRandomInteger(0, 255);
  const A = Math.random();
  return `rgba(${R}, ${G}, ${B}, ${A})`;
}
