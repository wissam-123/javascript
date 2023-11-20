const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
//  const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "drop"];

// Opdracht 1 te de eigenschap length horeveel producten er in variabel winkelmandje.
// zit en toon dit op het scherm met innertext
var Aantal=winkelmandje.length;
document.getElementById('opdracht1').innerHTML="Aantal producten in de winkelmandje: "+ Aantal;

//  pdracht 2 toon alle producten op het scherm 
document.getElementById('opdracht2').innerHTML= "Je producten zijn : " + winkelmandje.join('<br>');

// opdracht3  toom het vierde product van arry winkelmandje

document.getElementById('opdracht3').innerHTML= winkelmandje[3] + " ,staat op de vierde plek in uw winkelmand";

// opdracht4 verander Whiskey naar Bier zonder de originele array aan te passen.
 winkelmandje[1] = 'bier';
 document.getElementById("opdracht4").innerHTML = "Whiskey is vervangen door Bier : " + winkelmandje.join(',');

// opdracht5 function op een  product toe te voegen 

function addproduct(){
    const nieuwproduct = prompt('Voer het nieuwe product in :');
    winkelmandje.push(nieuwproduct);
    document.getElementById('opdracht5').innerHTML=winkelmandje;
}

// opdracht6
if(winkelmandje.length > 1){
document.getElementById('opdracht6').innerHTML="U heeft genoeg producten om te tonen : "+ winkelmandje.join('<br>');
}
else{
    document.getElementById('opdracht6').innerHTML= "U heeft niet genoeg producten om te tonen.";
}

// opdacht7
if(winkelmandje[4]=="drop"){
    document.getElementById("opdracht7").innerHTML="you heeft drop ";
} else{
    document.getElementById("opdracht7").innerHTML="you heeft geen drop";
}

// opdrcht8  zet een spatie tussen elke product
document.getElementById('opdracht8').innerHTML= "Producten met spatie "+winkelmandje.join(' ');

// opdracht9 verwijder met de splice product 1.2 uit winkelmandje
document.getElementById('opdracht9').innerHTML="Oude winkelmand : "+winkelmandje.join(',');

 winkelmandje.splice(0,2);
document.getElementById('nieuwwinkelmand').innerHTML="Nieuwe winkelmand : "+winkelmandje.join(',');

// opdracht10 sorteet de producten op alfabetiche volgede

const winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById('opdracht10').innerHTML ="Gesorteerde arry : " + winkelmand.join(',');

