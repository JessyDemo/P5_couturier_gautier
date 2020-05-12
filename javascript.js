function teddiesImg(number){
    fetch("http://localhost:3000/api/teddies") // Appel API
    .then(function(response){ // Transformation reponse en Json
    return response.json();
    })

  .then(function(myJson){     
      let imgElt = document.createElement("img"); // Création d'un élément img
      imgElt.Class = "teddiesPhoto"; // Définition de son identifiant
      imgElt.src = myJson[number].imageUrl; // Chercher l'info voulu
      document.getElementById("teddiesImg").appendChild(imgElt); // Insertion du nouvel élément
  })
}

for (let i = 0; i < 5; i++) { // Boucle pour afficher toutes les photo du tableau
  teddiesImg(i);
}

function teddiesName(number){
  fetch("http://localhost:3000/api/teddies") // Appel API
  .then(function(response){ // Transformation reponse en Json
  return response.json();
  })

.then(function(myJson){     
    let nameElt = document.createElement("h3"); // Création d'un élément p
    let desElt = document.createElement("p");
    nameElt.Class = "teddiesName"; // Définition de son identifiant
    desElt.Class = "teddiesDes";
    nameElt.textContent = myJson[number].name + " " + myJson[number].price + "€"; // Chercher l'info voulu
    desElt.textContent = myJson[number].description;
    document.getElementById("teddiesNamePrice").appendChild(nameElt); // Insertion du nouvel élément
    document.getElementById("teddiesNamePrice").appendChild(desElt);
  })
}

for (let i = 0; i < 5; i++) { // Boucle pour afficher toutes les photo du tableau
  teddiesName(i);
}


