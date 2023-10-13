let budget=100;
// let budget=prompt("wat is het saldo","");

 let productprijce=60;
// let productprijce=prompt("wat is de prijs van het product?","");

let saldo=document.getElementById("resultaat");

if( budget=> productprijce){
    let over =budget-productprijce;
    saldo.innerHTML="u heeft geen geld!"+ over +"is er over van:"+ budget+"euro";
    saldo.style.color="green";
}

else {
    salso.innerHTML="Helaas, u hebt weinig geld!";
    saldo.style.color="red";
}