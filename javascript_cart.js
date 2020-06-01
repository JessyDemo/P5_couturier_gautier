let basket = JSON.parse(window.localStorage.getItem('panier'));

console.log(basket);
for ( i=0; i <basket.length; i++)
{
    const section = document.getElementById('recap');
    const pdtContainer = document.createElement('article');
    section.appendChild(pdtContainer);
    
    const itemName = document.createElement('h3');
    itemName.textContent = basket[i].name;
    pdtContainer.appendChild(itemName); 

    const itemPrice = document.createElement('p');
    itemPrice.textContent = basket[i].price + " €";
    pdtContainer.appendChild(itemPrice);
}