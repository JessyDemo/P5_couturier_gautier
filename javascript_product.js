function teddy_1(){
  fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
  .then(function(response){
    return response.json();
  })

  .then(function (teddy)
  {
      //creation container article
      const section = document.getElementById('product');
      const pdtContainer = document.createElement('article');
      section.appendChild(pdtContainer);

      //affichage name
      const teddyName = document.createElement('h3');
      teddyName.textContent = teddy.name;
      pdtContainer.appendChild(teddyName);

      //affichage img
      const teddyImg = document.createElement('img');
      teddyImg.src = teddy.imageUrl;
      pdtContainer.appendChild(teddyImg);

      //affichage description
      const teddyDesc = document.createElement('p');
      teddyDesc.textContent = teddy.description;
      pdtContainer.appendChild(teddyDesc);

      //affichage prix
      const teddyPrice = document.createElement('h4');
      teddyPrice.textContent = teddy.price/100 + " €";
      pdtContainer.appendChild(teddyPrice);

      //affichage couleur via select
    
      const myDiv = document.getElementById("myDiv");
      const selectList = document.createElement("select");
      selectList.setAttribute("id", "mySelect");
      myDiv.appendChild(selectList);

      for (let i= 0; i < teddy.colors.length; i++){
        let option = document.createElement("option");
        option.setAttribute("value", teddy.colors[i]);
        option.textContent = teddy.colors[i];
        selectList.appendChild(option);
      }
  }
  )
}
teddy_1();