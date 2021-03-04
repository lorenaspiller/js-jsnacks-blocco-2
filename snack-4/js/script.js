/*
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari.
*/

// 1. Creo un array di numeri interi

var numeri = ["1", "10", "45", "67", "119", "7850", "74", "6", "23"];

// 2. sommo tutti gli elementi in posizione dispari all'interno dell'array

var i = 0;
var dispari = false;
var somma = 0;

while (i < numeri.length) {

  if (i % 2 == 1 ) {
    dispari = true;
    somma += parseInt(numeri[i]);
  }
  ++i;
}
console.log(somma);
