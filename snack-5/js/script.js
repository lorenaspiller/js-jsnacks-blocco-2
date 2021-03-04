/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,

fino a quando ne avrà tanti quanti l’altro.
*/

// 1. Creo due array che hanno un numero di elementi diversi.

var array1 = ["1", "10", "45", "67", "119", "7850", "74", "6", "23"];
console.log(array1);

var array2 = ["8", "33", "988", "98", "96325"];
console.log(array2);


// 2. Aggiungi elementi casuali all’array che ha meno elementi
var i = array2.length;

while (i < array1.length) {
  var elemCasuale = Math.floor(Math.random() * 100);
  array2.push(elemCasuale);
  ++i;
}

console.log(array2);
