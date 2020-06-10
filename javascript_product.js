//recuperation de l'id de l'url
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
        pdtContainer.id = "teddy";
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

        //Selection de la couleur
        const selection = document.createElement('select');
        selection.id = "mySelect";
        pdtContainer.appendChild(selection);
        for (let i=0; i < product.colors.length; i++){
            let option = document.createElement("option")
            option.setAttribute("value", product.colors[i]);
            option.text =product.colors[i];
            selection.appendChild(option)
        }
        

        //affichage bouton "ajouter au panier"
        const btn = document.createElement("button");
        btn.setAttribute('class', 'btn');
        btn.setAttribute('data-url', url);
        btn.textContent = "Ajouter au panier";
        pdtContainer.appendChild(btn);

        //au clic du bouton "ajouter au panier"
        btn.addEventListener('click', e =>{
            e.preventDefault();
            if (localStorage.getItem('panier')){
                let test = (localStorage.getItem('panier'));
                test = JSON.parse(test);
                const object = {
                    name : product.name,
                    price : product.price/100,
                    idTeddy : id,
                    couleur : product.colors[0],
                }
                test.push(object);
                localStorage.setItem('panier', JSON.stringify(test));
            }
            

                //IL n'y a rien dans le panier
            else {
                let panier = new Array();
                const object = {
                    name : product.name,
                    price : product.price/100,
                    idTeddy : id,
                    couleur : product.colors[0],
                }
                panier.push(object);
                localStorage.setItem('panier',JSON.stringify(panier));
            }
            //localStorage.clear();
        })
    })
}
teddyDisplay();