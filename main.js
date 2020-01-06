var quoteContainer = document.getElementById("quotes");
var ans;
//GENERATION ALEATOIRE D'UNE CITATION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fonction qui renvoie un nombre aléatoire..............................
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//.............................................................................................


function start() {
  var i = getRandomInt(2);
  console.log(i);


  if (i==0){
    ans = 0;
//Récupere les infos de l'API+++++++++++++++++++++
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
    if (this.status ===200){
      try {
        const resObj = JSON.parse(this.responseText);
        quoteContainer.insertAdjacentHTML('beforeend',"<p>"+ resObj.value+"</p>" ); //Ajoute l'élément html quote
      }catch(e){
        console.warn('There was an error in the JSON. Could not parse!')
      }
    }else{
      console.warn('Did not receive 200 OK from response!')
    }
  };

    xhr.open('get','https://api.tronalddump.io/random/quote');
    xhr.send();
//----------------------------------------------------
  }
  else{
    ans = 1;
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
  }
}






var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var yes=document.getElementById('yes0');
var no=document.getElementById('no1');
var nextButton=document.getElementById('nextButton');

     var game={
               load:function(){
                       start();
                       ul.insertAdjacentHTML('beforeend','<li id="yes0" onclick="button(this)">Yes</li>' );
                       ul.insertAdjacentHTML('beforeend','<li id="no1" onclick="button(this)">No</li>' );
               },
               next:function(){
                  this.load();
               },
               check:function(ele){

                        var id=ele.id.split('');

                        if(id[id.length-1]==ans){

                        }
                        else{

                        }
               },
               clickAble:function(){
                      for(let i=0;i<ul.children.length;i++){
                           ul.children[i].style.pointerEvents="auto";
                           ul.children[i].className=''

                      }
               },


          }


          window.onload=game.load();

          function button(ele){
                game.check(ele);
                while (ul.firstChild) {
                   ul.removeChild(ul.firstChild);
                }
                quoteContainer.removeChild(quoteContainer.firstChild);
                nextButton.insertAdjacentHTML('beforeend','<button type="button" onclick="next()" id="button1">Start again!</button>' );
                nextButton.children[0].style.pointerEvents="auto";
          }

          function  next(){
             nextButton.removeChild(nextButton.firstChild);
             window.onload=game.load();
             game.clickAble();
          }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Formulaire

function validate(){
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
            ev.preventDefault();  //to stop the form submitting
            localStorage.setItem("quote"+localStorage.length, JSON.stringify(quote.value) );
            document.forms[0].reset(); // to clear the form for the next entries
            //saving to localStorage
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('button').addEventListener('click', addUserQuotes);
        });

var number = 0;
var userquote = localStorage.getItem ('quote'+number);

console.log(userquote)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







// Code pour afficher comme un machine à écrire la citation

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
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
