var quoteContainer = document.getElementById("quotes");
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var yes=document.getElementById('yes0');
var no=document.getElementById('no1');
var nextButton=document.getElementById('nextButton');
var ans;                                                   //ans qui contient la valeur 0 ou 1 en fonction de si la sitation est de Donald Trump ou pas

//JEU: DEVINER SI LA CITATION EST DE TRUMP OU NON++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Structure de base du jeu__________________________________________________________________________________________________________________________________________________________
     var game={
               options:['Yes','No'],                       //Tableau ave le text à afficher dans les boutons
               load:function(){
                       start();                            //Lance l'affichage de la citation à mettre dans la tele en fonction d'un nombre aléatoire
                       yes.innerHTML=this.options[0];      //Affichage du text dans les bouttons
                       no.innerHTML=this.options[1];
               },
               check:function(ele){

                        var id=ele.id.split('');           //Id prend pour valeur le dernier caractère des id des element passeés en paramètre,
                                                           //qui seront 0 ou 1 car j'ai donné comme id les valeurs yes0 et no1
                        if(id[id.length-1]==ans){          //On compare la valeur stockée precedement dans id à la valeur prise par "ans" qui vos 0 si la reponse est yes et 1 sinon
                          ele.className="correct";         //Si la reponse et oui on remplace le text "Yes" par "Correct" dans le bouton
                          ele.innerHTML="Correct";
                          quoteContainer.insertAdjacentHTML('beforeend','<p>GOOD JOB!</p>' ); //On ajoute le text "Good job" dans la tele
                        }
                        else{
                          ele.className="wrong";  //Si la reponse est non, on remplace le text "No" par "Wrong" dans le bouton
                          ele.innerHTML="Wrong";
                          quoteContainer.insertAdjacentHTML('beforeend','<p>WRONG</p>' );//On ajoute un message dans la tele
                        }
               },
               notClickAble:function(){                                   //Cette fonction permet de faire en sort que l'utilisateur ne puisse plus cliquer sur les boutons
                                                                          //tant qu'il n'a pas appuyé sur "start again"
                      for(let i=0;i<ul.children.length;i++){             //Boucle sur chaque bouton
                           ul.children[i].style.pointerEvents="none";
                      }
               },
               clickAble:function(){                                      //Cette fonction rend les boutons cliquables
                      for(let i=0;i<ul.children.length;i++){              //Boucle sur chaque bouton
                           ul.children[i].style.pointerEvents="auto";
                           ul.children[i].className=''

                      }
               },


          }


          window.onload=game.load();   //Quand la page est chargée, l'objet "game" est chargé

          function button(ele){        //Fonction au clique sur un bouton
                game.check(ele);       //On verifie si la reponse est juste ou non et on replace le text des boutons en fonction
                game.notClickAble();   //Les boutons ne sont plus cliquables
                quoteContainer.removeChild(quoteContainer.firstChild);  //On retir la citation de la tele
                nextButton.insertAdjacentHTML('beforeend','<button type="button" onclick="next()" id="button1">Start again!</button>' ); //On ajout le bouton start again lié à la fonciton next
          }

          function  next(){      //Au clique sur "start again"
             quoteContainer.removeChild(quoteContainer.firstChild);  //On retir le message de réussite ou d'echec de la télé
             nextButton.removeChild(nextButton.firstChild);          //On retir le bouton "sart again"
             window.onload=game.load();                              //Le "game" est rechargé
             game.clickAble();                                       //Les boutons sont de nouveau cliquables

          }

//Génération aléatoire d'une citation______________________________________________________________________________________________________________________________________________________________

//Fonction qui renvoie un nombre aléatoire.....................................................
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//.............................................................................................


function start() {
  var i;

  if (localStorage.length == 0) { //On vérifie d'abord si le stoquage local est nul ou non
     i = getRandomInt(2);
  }else {
     i = getRandomInt(3);//Un nombre est tiré au hasard parmi 0, 1 et 2
  }
  console.log(i);
///////////////////////////////////////////////////////////////////////////////////////
  if (i==0){              //Si ce nombre vos 0
    ans = 0;              //La variable qui stocke la réponse prend la valeur 0 (yes)
    //Et on fait appel à une API qui génére àléatoirement une citation de Donald Trump
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
    if (this.status ===200){
      try {
        const resObj = JSON.parse(this.responseText);                //Et on fait appel à une API qui génére àléatoirement une citation de Donald Trump               //"Traduit" le JSON
        quoteContainer.insertAdjacentHTML('beforeend',"<p>"+ resObj.value+"</p>" ); //Ajoute l'élément html quote
      }catch(e){
        console.warn('There was an error in the JSON. Could not parse!')            //En cas d'erreur dans le JSON
      }
    }else{
      console.warn('Did not receive 200 OK from response!')                         //En cas d'erreur de chargement
    }
  };
   xhr.open('get','https://api.tronalddump.io/random/quote');
   xhr.send();
/////////////////////////////////////////////////////////////////////////////////////////
  }if (i==1){              //Si ce nombre vos 1
    ans = 1;               //La variable qui stoque la réponse prend la valeur 1 (no)
    //Et on fait appel à une API qui génére àléatoirement une citation quelquonque
    const xhr1 = new XMLHttpRequest();
    xhr1.onload = function(){
      if (this.status ===200){
        try {
          const resObj1 = JSON.parse(this.responseText);
          console.log(resObj1);
          quoteContainer.insertAdjacentHTML('beforeend',"<p>"+resObj1.quoteText+"</p>"); //Ajoute l'élément html quote
        }catch(e){
          console.warn('There was an error in the JSON. Could not parse!')
        }
      }else{
        console.warn('Did not receive 200 OK from response!')
      }
    };
    xhr1.open('get','https://quote-garden.herokuapp.com/quotes/random');
    xhr1.send();
////////////////////////////////////////////////////////////////////////////////////////////
}if(i==2 )  {             //Si ce nombre vos 2 et qu'il y a des citation dans le stoquage local
    ans = 1;                //La variable qui stoque la réponse prend la valeur 1 (no)
    var number =getRandomInt(localStorage.length);                                 //On génère un entier aléatoire inférieur ou égale au nombre d'éléments stoqués dans le stoquage local
    var userquote = localStorage.getItem ('quote'+number);                         //On récupère la citation entrée par l'utilisateur correspondant à ce numéro
    quoteContainer.insertAdjacentHTML('beforeend',"<p>"+userquote+"</p>");         //Et on ajoute cette citation sur la tele
  }
}



// Formulaire d'entrée de ciations par l'utilisateur________________________________________________________________________________________________________________________________

function validate(){                                 //Fonction qui véifie que l'utilisateur entre bien une citation de longeur suffisante
  var quote = document.getElementById("quote").value;
  var error_message = document.getElementById("error_message");
  error_message.style.padding = "10px";
  var text;
  if(quote.length < 5){
    text = "Please Enter valid quote";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

const addUserQuotes = (ev)=>{
    localStorage.setItem("quote"+localStorage.length, JSON.stringify(quote.value) ); //Ajoute la citation entrée dans le formulaire au stoquage local
    document.forms[0].reset();                                                       // Vide le formulaire
    }

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', addUserQuotes);      //Appel la fonction qui ajoute la citation au stoquage local
  });
//Fin code de base du jeu+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Code pour afficher comme un machine à écrire la citation+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// set up text to print, each item in array is new line
var aText = new Array(
"DID DONALD TRUMP REALLY SAY THAT??"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(){
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
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
