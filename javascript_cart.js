let basket = JSON.parse(window.localStorage.getItem('panier'));

//Affichage des produits dans le panier
basket.forEach(function(item, index){
    const section = document.getElementById('recap');
    const pdtContainer = document.createElement('article');
    section.appendChild(pdtContainer);

    // affichage nom   
    const itemName = document.createElement('h3');
    itemName.textContent = basket[index].name;
    pdtContainer.appendChild(itemName); 

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


//FORMULAIRE
//FORMULAIRE

//validation formulaire via bouton valider
function Verification() {
    let Nom = document.getElementById('idNom').value;
    let Email = document.getElementById('idEmail').value;
    let mailFormat = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");
    let testEmail =regEmail.test(email.value);
    
    
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
}