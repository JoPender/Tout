# Comparaison JavaScript / jQuery

## -- Trouver un élément
JavaScript
```javascript
document.querySelector('selecteurCSS')
document.querySelectorAll('selecteurCSS')
document.getElementById('selecteurCSS')
```
### jQuery
```javascript
$('selecteurCSS')
```

## -- Ecouteurs d'événements
### JavaScript
```javascript
document.addEventListener('eventName', function () {})
```
### jQuery
```javascript
$(element).on('eventName', function () {})
```

## -- DOMContentLoaded
### JavaScript
```javascript
document.addEventListener('DOMContentLoaded', function () {})
```
### jQuery
```javascript
$(document).ready(function () {})
```
ou
```javascript
$(function () {})
```
## -- Classes CSS
### JavaScript
```javascript
document.querySelector('selecteurCSS').classList.add('selecteurCSS')
document.querySelector('selecteurCSS').classList.remove('selecteurCSS')
document.querySelector('selecteurCSS').classList.toggle('selecteurCSS')
```
### jQuery
```javascript
$('selecteurCSS').addClass('selecteurCSS')
$('selecteurCSS').removeClass('selecteurCSS')
$('selecteurCSS').toggleClass('selecteurCSS')
```

## -- Valeurs de champs de formulaire
### JavaScript
```javascript
document.querySelector('selecteurCSS').value
document.querySelector('selecteurCSS').value = valeur
```
### jQuery
```javascript
$('selecteurCSS').val()
$('selecteurCSS').val(valeur)
```

## -- Attributs HTML personnalisés
### JavaScript
```javascript
document.querySelector('selecteurCSS').dataset.nom
document.querySelector('selecteurCSS').dataset.nom = valeur
```
### jQuery
```javascript
$('selecteurCSS').data('nom')
$('selecteurCSS').data('nom', 'valeur')
```

## -- Contenu HTML d'un élément
### JavaScript
```javascript
document.querySelector('selecteurCSS').innerHTML
document.querySelector('selecteurCSS').innerHTML = valeur
document.querySelector('selecteurCSS').appendChild(elementHTML)
document.querySelector('selecteurCSS').insertBefore(elementHTML)
```
### jQuery
```javascript
$('selecteurCSS').text(['texte']) //remplit un élément avec du texte
$('selecteurCSS').html(['texte']) // insère du code HTML arbitraire à l'intérieur d'un élément
$('selecteurCSS').append(elementHTML) // ajoute un élément HTML dans un autre élément (à la fin)
$('selecteurCSS').prepend(elementHTML)// ajoute un élément HTML dans un autre élément (au début)
$('selecteurCSS').before(elementHTML) // ajoute un élément HTML juste avant un autre élément
$('selecteurCSS').after(elementHTML) // ajoute un élément HTML juste après un autre élément
```
non implémenté en JavaScript
```javascript
$('selecteurCSS').wrap(['texte']) // Entoure un élément avec des balises HTML
```

## -- Création d'un élément HTML
### JavaScript
```javascript
document.createElement('div', [options]) //Crée un élément 'div', éventuellement avec des options
```
### jQuery
```javascript
$('<div>') // Crée un élément 'div' (fonctionne avec tout code HTML valide)
```

## -- Navigation dans le DOM
### JavaScript
```javascript
document.querySelector('selecteurCSS').parentNode // L'élément parent
cocument.querySelector('selecteurCSS').childNodes // Les éléments enfants
cocument.querySelector('selecteurCSS').nextSibling // Les éléments enfants
cocument.querySelector('selecteurCSS').previousSibling // Les éléments enfants
```
### jQuery
```javascript
$('selecteurCSS').parent() // L'élément parent
$('selecteurCSS').parents() // La liste de tous les ancêtres
$('selecteurCSS').closest('selecteurCSS') // L'ancêtre le plus proche satisfaisant une condition
$('selecteurCSS').children() // La liste de tous les enfants
$('selecteurCSS').siblings() // La liste de tous les voisins
```

## -- Difficile à faire en javascript
```javascript
$('selecteurCSS').find() // Trouve des éléments selon un critère
$('selecteurCSS').filter() // Filtre un ensemble d'éléments selon une condition
$('selecteurCSS').empty() // Vide le contenu d'un élément HTML
```
```javascript
$('selecteurCSS').show() // Montre un élément
$('selecteurCSS').hide() // Masque un élément
$('selecteurCSS').fadeIn() // Apparition progressive
$('selecteurCSS').fadeOut() // Disparition progressive
```


## Annexes

https://gist.github.com/joyrexus/7307312

https://putaindecode.io/fr/articles/js/de-jquery-a-vanillajs/

http://youmightnotneedjquery.com/
