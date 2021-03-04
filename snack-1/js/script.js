/*
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
*/

// 1. ciclo for

var somma = 0;

for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  if (!(isNaN(numero))) {
    somma += numero;
  } else {
    var numero = parseInt(prompt("Deve essere un numero! inserisci un numero"));
  }
}

console.log(somma);


// 2. ciclo while

// var somma = 0;
// var i = 0;
//
// while (i < 5) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   if (!(isNaN(numero))) {
//     somma += numero;
//   } else {
//     var numero = parseInt(prompt("Deve essere un numero! inserisci un numero"));
//   }
//   i++;
// }
//
// console.log(somma);


// 3. ciclo do-while

// var somma = 0;
// var i = 0;
//
// while (i < 5) {
//   do {
//     var numero = parseInt(prompt("inserisci un numero"));
//   } while (isNaN(numero));
//   somma += numero;
//   i++;
// }
//
// console.log(somma);
