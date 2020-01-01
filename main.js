var quoteContainer = document.getElementById("quotes");






//Récupere les infos de l'API+++++++++++++++++++++
const xhr = new XMLHttpRequest();


xhr.onload = function(){
  if (this.status ===200){
    try {
      const resObj = JSON.parse(this.responseText);
      quoteContainer.insertAdjacentHTML('beforeend',resObj.value);
    }catch(e){
      console.warn('There was an error in the JSON. Could not parse!')
    }
}else{
  console.warn('Did not receive 200 OK from response!')
  }
};

xhr.open('get','https://api.tronalddump.io/random/quote');
xhr.send();



//Ajoute un element html pour afficher la citations



// Code pour afficher comme un machine à écrire la citation
/*
// set up text to print, each item in array is new line
var aText = new Array(
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
*/
