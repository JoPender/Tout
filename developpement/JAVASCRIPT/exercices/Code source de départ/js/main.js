let image = document.querySelectorAll('#photo-list img');
console.log(image);

for (let i of image){
  i.addEventListener("click",bgForestgreen);
  i.addEventListener("mouseover",bgSilver);
  i.addEventListener("mouseout",bgSilver);
  console.log(i);
}

function bgForestgreen()
{
  this.classList.toggle("bgForestgreen");
  let totalImages = document.querySelector('#total');
  let totalImgSelected = document.querySelectorAll('.bgForestgreen');
  totalImages.innerHTML = `<em>${totalImgSelected.length}</em>`;
}

function bgSilver(){
  this.classList.toggle("bgSilver");
}







/*totalImages.innerHTML = `<em>${totalImgSelected.length}</em>`;















/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
