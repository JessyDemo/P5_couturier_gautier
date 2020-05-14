
    fetch("http://localhost:3000/api/teddies") // Appel API
    .then(function(response){ // Transformation reponse en Json
    return response.json();
    })

  .then(function(myJson){     
      let imgElt = document.createElement("img"); // Création d'un élément img
      imgElt.Class = "teddiesPhoto"; // Définition de son identifiant
      imgElt.src = myJson[0].imageUrl; // Chercher l'info voulu
      document.getElementById("product").appendChild(imgElt); // Insertion du nouvel élément

  })

  function imgTeddies()
      {
        let number = document.getElementById('modele-choice').value;
      
        document.getElementById('modele-choice').value=number;
        document.getElementById('modele-choice').src= myJson[number].imageUrl;
      }