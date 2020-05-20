function teddiesArticle(){
  fetch("http://localhost:3000/api/teddies")
  .then(function(response){
    return response.json();
  })

  .then(function (products)
  {
    for (const teddy of products)
    {
      //creation container article
      const section = document.getElementById('all-products');
      const pdtContainer = document.createElement('article');
      section.appendChild(pdtContainer);

      //affichage img
      const img = document.createElement('img');
      img.src = teddy.imageUrl;
      pdtContainer.appendChild(img);

      //affichage name
      const name = document.createElement('h3');
      name.textContent = teddy.name;
      pdtContainer.appendChild(name);

      //affichage price
      const price = document.createElement('p');
      price.textContent = teddy.price/100 +" €";
      pdtContainer.appendChild(price);
    }
  })
}

teddiesArticle();

function teddyNumber(number){
  fetch("http://localhost:3000/api/teddies")
  .then(function(response){ 
  return response.json();
  })

.then(function(linkNumber)
  {  
    const section = document.getElementById('all-products');
    const pdtContainer = document.createElement('article');
    section.appendChild(pdtContainer);

    const link = document.createElement("a");
    const linkUrl = 'teddy_' + [number] + '.html';
    link.setAttribute('href', linkUrl);
    link.textContent = "Voir l'article";
    pdtContainer.appendChild(link);   
  })
}
for (let i = 0 ; i < 5; i++){
  teddyNumber(i);
}