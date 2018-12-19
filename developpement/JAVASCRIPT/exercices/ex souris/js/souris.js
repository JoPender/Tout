let button = document.querySelector('#toggle-rectangle');
let rectangle = document.querySelector('.rectangle');

button.addEventListener("click", hideDelay);

function hideRectangle()
{
  rectangle.classList.toggle('hide');
}
//DELAI DE 1 SECONDE AVANT DISPARITION / APPARITION
function hideDelay()
{
  let action = setTimeout(hideRectangle,10);
}

rectangle.addEventListener("mouseover",limeGreen);
rectangle.addEventListener("mouseout",limeGreen);
function limeGreen()
{
  rectangle.classList.toggle('good');
}

rectangle.addEventListener("dblclick",fireBrick);
function fireBrick()
{
  rectangle.classList.toggle('important');
}
