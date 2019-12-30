// inspiration : effet texte citation par gavra // pour afficher citations
var aText = new Array (quotes); // noter citations entre parenthèse
var iSpeed = 100; // délai d'impression
var iIndex = 0; // position de départ
var iArrLength = aText[0].length; // longueur du tableau de texte
var iScrollAt = 20; // Commencement défilement

var iTextPos = 0; // initialisation de la position du texte
var sContents = ''; // initialisation de la variable
var iRow; // initialiser la ligne

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 400);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
/*
// requette https// Création d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers le fichier langages.txt publié localement
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null);
// Affiche la réponse reçue pour la requête
console.log(req.responseText);

var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
*/

// API --> Ça ne fonctionne pas !

fetch('https://api.tronalddump.io/random/quote')
        .then(response => {
          response.json().then((quotes)=>{
            console.log(quotes);
          })
        })

  async function quotes(){
    /*const response = await fetch('https://planets-api-webimac2019.now.sh/');
    const myJson = await response.json();
    console.log(response, myJson);*/
    fetch('https://api.tronalddump.io/random/quote')
            .then(response => {
              response.json().then((quotes)=>{
                console.log(quotes);
              })
            })



          myJson.quotes.forEach(function(e){
            var quotes = document.getElementById('quotes');
            var trackName = e.name;
            var size = e.size;
            var title = document.createElement("div");
            title.innerHTML = name;
            if (e.img){
              title.style.background = `no-repeat url(${e.img}) center/100%`
            }
            title.classList.add(size);
            quotes.appendChild(title);
            console.log(e.name);
          });
        }




        quotes();

/*
async function test(){
  const response = await fetch('https://api.tronalddump.io/random/quote');
  const myJson = await response.json();
  console.log(response, myJson);

  myJson.quotes.forEach(function(e){
    var quotes = document.getElementById('quotes');
    var trackName = e.name;
    var size = e.size;
    var title = document.createElement("div");
    title.innerHTML = name;
    if (e.img){
      title.style.background = `no-repeat url(${e.img}) center/100%`
    }
    title.classList.add(size);
    quotes.appendChild(title);
    console.log(e.name);
  });
}




test();


request.open('GET', 'https://api.tronalddump.io/random/quote',true);
request.send();
ajaxGet("https://api.tronalddump.io/random/quote", function (reponse) {
    console.log(reponse);
});

var citationsElt = document.getElementById("quotess");
ajaxGet("https://api.tronalddump.io/random/quote", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var quotes = JSON.parse(reponse);
    quotes.forEach(function (quote) {
        // Ajout contenu de chaque citation
        var contenuElt = document.createElement("p");
        contenuElt.textContent = quotes.contenu;
        quotesElt.appendChild(contenuElt);
    });
});*/
