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
let erreur = ['nom','prenom','tel','mail','address','codep','ville'];
let erreurMaj = ['Nom','Prenom','Tel','Mail','Address','Codep','Ville'];
let formValid = document.getElementById('boutonEnvoi');
for ( i of erreur)
{
    let nom = document.getElementById([i]);
    let erreurMaj = ['Nom','Prenom','Tel','Mail','Address','Codep','Ville'];

    for (i of erreurMaj)
    {
        let missNom = document.getElementById('miss'+ [i])
        formValid.addEventListener('click', validation);

        function validation(event){
        //si le champ est vide
        if (nom.validity.valueMissing){
            event.preventDefault();
            missNom.textContent ="Veuillez remplir cet information avant de commander";
            missNom.style.color = 'red'
        }
    }
}}