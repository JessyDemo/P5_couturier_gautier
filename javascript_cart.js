let basket = JSON.parse(window.localStorage.getItem('panier'));

for ( i=0; i <basket.length; i++)
{
    //creation container
    const section = document.getElementById('recap');
    const pdtContainer = document.createElement('article');
    section.appendChild(pdtContainer);

    // affichage nom   
    const itemName = document.createElement('h3');
    itemName.textContent = basket[i].name;
    pdtContainer.appendChild(itemName); 

    //affichage prix
    const itemPrice = document.createElement('p');
    itemPrice.textContent = basket[i].price + " €";
    pdtContainer.appendChild(itemPrice);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    pdtContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', e =>{
        e.preventDefault();
        
        //Etape 1 : supprimer du localStorage
            //supprimer de basket[]
            //Réenregistrer localStorage avec basket[]
        //Etape 2 : supprimer <article> du front 
        //Etape3 : Recalculer le total panier
        
    })
}
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


//FORMULAIRE
//FORMULAIRE

//validation formulaire via bouton valider
function Verification() {
    let Nom = document.getElementById('idNom').value;
    let Email = document.getElementById('idEmail').value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Contrôle sur le nom
    if(Nom==''){
    alert('Vous devez compléter votre nom !');
    document.getElementById('idNom').style.backgroundColor="red";
    document.getElementById('idNom').style.color="#FFF";
    return false;
    }
    else{
    document.getElementById('idNom').style.backgroundColor="#9C6";
    }
    
    // Contrôle sur l'email
    if(Email=='') {
        alert('Vous devez compléter votre adresse email');
        document.getElementById('idEmail').style.backgroundColor="red";
        document.getElementById('idEmail').style.color="#FFF";
        return false;
    }

    else if (Email != mailFormat)
    {
        alert('Adresse mail incorrect');
        document.getElementById('idEmail').style.backgroundColor="red";
        document.getElementById('idEmail').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idEmail').style.backgroundColor="#9C6";
    }
//REPRENDRE LA VERIFICATION DES CHAMPS    
    // 1- Création nouvel objet regex new RegExp
    //2 - Tester la valeur de l'input regex.test(valeurAtester)=> RENVOIE BOOL
}
