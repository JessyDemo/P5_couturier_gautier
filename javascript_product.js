let url = new URL(document.URL);
let search_param = url.searchParams;
let id = search_param.get('id');

function teddyDisplay(){
    fetch("http://localhost:3000/api/teddies/" + id)
    .then(function(response){
        return response.json();
    })

    .then(function(product)
    {
        //creation container article
        const section = document.getElementById('product');
        const pdtContainer = document.createElement('article');
        section.appendChild(pdtContainer);

        //creation img
        const img = document.createElement('img');
        img.src = product.imageUrl;
        pdtContainer.appendChild(img);

        //affichage name
        const name = document.createElement('h3');
        name.textContent = product.name;
        pdtContainer.appendChild(name);

        //affichage description
        const desc = document.createElement('p');
        desc.textContent = product.description;
        pdtContainer.appendChild(desc);

        //affichage price
        const price = document.createElement('p');
        price.textContent = product.price/100 +" €";
        pdtContainer.appendChild(price);

    })
}
teddyDisplay();