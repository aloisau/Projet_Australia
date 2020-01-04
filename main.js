var quoteContainer = document.getElementById("quotes");

//GENERATION ALEATOIRE D'UNE CITATION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fonction qui renvoie un nombre aléatoire, que je stocke dans i ..............................
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var i = getRandomInt(2);
console.log(i);
//.............................................................................................

if (i==0){
  var ans = 0;
//Récupere les infos de l'API+++++++++++++++++++++
const xhr = new XMLHttpRequest();

xhr.onload = function(){
  if (this.status ===200){
    try {
      const resObj = JSON.parse(this.responseText);
      quoteContainer.insertAdjacentHTML('beforeend',resObj.value); //Ajoute l'élément html quote
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
  var ans = 1;
const xhr1 = new XMLHttpRequest();

xhr1.onload = function(){
  if (this.status ===200){
    try {
      const resObj1 = JSON.parse(this.responseText);
      console.log(resObj1);
      quoteContainer.insertAdjacentHTML('beforeend',resObj1.quoteText); //Ajoute l'élément html quote
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







  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
 var yes=document.getElementById('yes0');
 var no=document.getElementById('no1');


     var app={
               question:{options:['Yes','No'],answer:ans}
              ,
               load:function(){
                       yes.innerHTML=this.question.options[0];
                       no.innerHTML=this.question.options[1];
               },
                next:function(){
                   //document.reload(forcedReload);
                   console.log('Yes');
                   document.location.reload(true);
                },
               check:function(ele){

                        var id=ele.id.split('');

                        if(id[id.length-1]==this.question.answer){
                         ele.className="correct";
                         ele.innerHTML="Correct";
                        }
                        else{
                         ele.className="wrong";
                         ele.innerHTML="Wrong";
                        }
               },
               notClickAble:function(){
                      for(let i=0;i<ul.children.length;i++){
                           ul.children[i].style.pointerEvents="none";
                      }
               },

               clickAble:function(){
                      for(let i=0;i<ul.children.length;i++){
                           ul.children[i].style.pointerEvents="auto";
                           ul.children[i].className=''

                      }
               },


          }


          window.onload=app.load();

          function button(ele){
                app.check(ele);
                app.notClickAble();
          }

        function  next(){
             app.next();
             app.clickAble();
        }

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
