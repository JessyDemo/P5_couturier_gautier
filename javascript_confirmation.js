let infos = JSON.parse(window.localStorage.getItem('informations'));
let total = JSON.parse(window.localStorage.getItem('total'));
let cart = JSON.parse(window.localStorage.getItem('panier'));

function confirmation (info, index){
    const section = document.getElementById('infoRecap');
    const pdtContainer = document.createElement('article');
    pdtContainer.id = "infoBulle";
    section.appendChild(pdtContainer);

    //affichage du N° commande
    

    //affichage du total de la commande
    const cartTotal = document.createElement('p');
    cartTotal.textContent = "Récapitulatif du total de votre commande : " + total + " €";
    pdtContainer.appendChild(cartTotal);

    //affichage de remerciement de commande
    const thanks = document.createElement('p');
    thanks.textContent = infos.lastName + " " + infos.firstName + " merci de votre commande.";
    pdtContainer.appendChild(thanks);

    const mailConfirm = document.createElement('p');
    mailConfirm.textContent = "Vous recevrez la confirmation de commande sur votre adresse mail : " + infos.mail;
    pdtContainer.appendChild(mailConfirm);

    const addressConfirm = document.createElement('p');
    addressConfirm.textContent = "Votre commande sera livré a l'adresse suivante : " + infos.address +" "+ infos.codeP+" "+ infos.town;
    pdtContainer.appendChild(addressConfirm);

}
confirmation();