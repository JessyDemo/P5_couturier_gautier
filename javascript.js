function imgTeddies()
{
  let number = document.getElementById('modele-choice').value;

  document.getElementById('product-img').value=number;
  document.getElementById('product-img').src="images/teddy_"+number+".jpg";
}