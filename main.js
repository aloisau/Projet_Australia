// inspiration : effet texte citation par gavra
var aText = new Array(
'"Donald Trump super citation !"'
);
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
