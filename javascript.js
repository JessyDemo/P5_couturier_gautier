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


      //affichage bouton
      const btn = document.createElement("button");
      btn.setAttribute('class', 'btn');
      btn.setAttribute('data-id', teddy._id);
      btn.textContent = "Voir l'article";
      pdtContainer.appendChild(btn);
    }
    //recuperations des boutons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        let id = btn.getAttribute('data-id');
        let page = window.open("product.html?id=" + id);
      })
    })
  }) 
}
teddiesArticle();
