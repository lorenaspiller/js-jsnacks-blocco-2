/*
Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/

// 1. Inserisci un numero
do {
  var numero = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numero));


if (numero % 2 == 0) {
  console.log(numero);
} else if (numero % 2 == 1) {
  console.log(numero + 1);
}
