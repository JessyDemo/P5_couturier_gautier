let basket = JSON.parse(window.localStorage.getItem('panier'));

//Affichage des produits dans le panier
basket.forEach(function(item, index){
    const section = document.getElementById('recap');
    const pdtContainer = document.createElement('article');
    pdtContainer.id = "itemCase";
    section.appendChild(pdtContainer);

    // affichage nom   
    const itemName = document.createElement('h3');
    itemName.textContent = basket[index].name;
    pdtContainer.appendChild(itemName); 

    //affichage couleur
    function checkSpecification(){
        const color = basket[index].couleur;
        const lense = basket[index].lenses;
        const furniture = basket[index].varnish;

        if (color){
            const itemColor = document.createElement('p');
            itemColor.textContent = basket[index].couleur;
            pdtContainer.appendChild(itemColor);
        }
        else if (lense){
            const itemLenses = document.createElement('p');
            itemLenses.textContent = basket[index].lenses;
            pdtContainer.appendChild(itemLenses);
        }
        else if (furniture){
            const itemVarnish = document.createElement('p');
            itemVarnish.textContent = basket[index].varnish;
            pdtContainer.appendChild(itemVarnish);
        }
    }
    checkSpecification();
    

    //affichage prix
    const itemPrice = document.createElement('p');
    itemPrice.textContent = basket[index].price + " €";
    pdtContainer.appendChild(itemPrice);

    //bouton supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    pdtContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', e =>{
        e.preventDefault();
        //suppression affichage du produit
        document.getElementById("itemCase").remove();
        //suppression dans le localstorage
        const item = JSON.parse(localStorage.getItem('panier'));
        item.splice([index],1);
        localStorage.setItem('panier', JSON.stringify(item));
        window.location.reload();       
    })
});

//calcul total
let total = 0;
for(let i in basket)
{
    total += basket[i].price;
}
//affichage total
const section = document.getElementById('recap');
const pdtContainer = document.createElement('article');
section.appendChild(pdtContainer);
const totalBasket = document.createElement('h3');
totalBasket.textContent = "Votre total : " + total + " €";
pdtContainer.appendChild(totalBasket);

//Bouton supprimer le panier
const deleteAll = document.createElement("button");
deleteAll.textContent = "Vider le panier";
pdtContainer.appendChild(deleteAll);

deleteAll.addEventListener('click', e =>{
    e.preventDefault();
    //suppression affichage du produit
    localStorage.clear();
    window.location.reload();       
})


//FORMULAIRE
//FORMULAIRE

function Verification() {

    // Contrôle sur le nom
    let Nom = document.getElementById('idNom').value;
    let nameFormat = new RegExp(/^[a-zA-Z ,.'-]+$/);
    let testNameFormat = nameFormat.test(Nom);
    if(testNameFormat === false){
        alert('Vous devez compléter votre nom !');
        document.getElementById('idNom').style.backgroundColor="red";
        document.getElementById('idNom').style.color="#FFF";
        return false;
    }
    else
    {
        document.getElementById('idNom').style.backgroundColor="#9C6";
    }

    // Contrôle sur le prenom
    let Prenom = document.getElementById('idPrenom').value;
    let testPrenomFormat = nameFormat.test(Prenom);
    if(testPrenomFormat === false){
        alert('Vous devez compléter votre Prenom !');
        document.getElementById('idPrenom').style.backgroundColor="red";
        document.getElementById('idPrenom').style.color="#FFF";
        return false;
    }
    else
    {
        document.getElementById('idPrenom').style.backgroundColor="#9C6";
    }

    //Contrôle sur l'adresse
    let Adresse = document.getElementById('idAdresse').value;
    let adresseFormat = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/);
    let testAdresseFormat = adresseFormat.test(Adresse);
    if(testAdresseFormat === false){
        alert('Vous devez compléter votre adresse !');
        document.getElementById('idAdresse').style.backgroundColor="red";
        document.getElementById('idAdresse').style.color="#FFF";
        return false;
    }
    else
    {
        document.getElementById('idAdresse').style.backgroundColor="#9C6";
    }

    //Contrôle sur la ville
    let Ville = document.getElementById('idVille').value;
    let testVilleFormat = nameFormat.test(Ville);
    if(testVilleFormat === false){
        alert('Vous devez compléter votre Ville!');
        document.getElementById('idVille').style.backgroundColor="red";
        document.getElementById('idVille').style.color="#FFF";
        return false;
    }
    else
    {
        document.getElementById('idVille').style.backgroundColor="#9C6";
    }

    // Contrôle sur l'email
    let Email = document.getElementById('idEmail').value;
    let mailFormat = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let testFormat = mailFormat.test(Email);

    if(testFormat === false) {
        alert('Vous devez compléter votre adresse email correctement');
        document.getElementById('idEmail').style.backgroundColor="red";
        document.getElementById('idEmail').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idEmail').style.backgroundColor="#9C6";
    }


    //RECUPERATION DONNEES FORMULAIRE
    const contact = {
        lastName : document.getElementById('idNom').value,
        firstName : document.getElementById('idPrenom').value,
        address : document.getElementById('idAdresse').value,
        city : document.getElementById('idVille').value,
        email : document.getElementById('idEmail').value
    };
    let infosJson = JSON.stringify(contact);
    localStorage.setItem('contact', infosJson);

    //RECUPERER TOTAL COMMANDE
    let totalJson = JSON.stringify(total);
    localStorage.setItem('total', totalJson);

    //ENVOYER COMMANDE AU SERVEUR


    //OUVRIR PAGE CONFIRMATION SI FORMULAIRE OK
    // let openPage = window.open("confirmation.html");
    
}


let bouton = document.getElementById('boutonEnvoi');
bouton.addEventListener('click',(event) => {
    event.preventDefault();

    const contact = {
        firstName: 'Dupont',
        lastName : 'jean',
        address : 'rue une',
        city : 'lyon',
        email : 'email@test.com',
      }
      const products = [
        "5be9c8541c9d440000665243",
      ]
      const commande = {
        contact,
        products
      }
      console.log(commande);
        const options = {
            method : 'POST',
            body : JSON.stringify(commande),
            headers : {
                'Content-Type' : 'application/json'
            }
    
        }
        fetch ("http://localhost:3000/api/teddies/order", options)
        .then(function(response){
            return response.json(); //IL TE MANQUAIT SEULEMENT LE MOT CLE return afin de retourner une valeur!!
        })
        .then(function(response){
            console.log(response);
        })
    })
