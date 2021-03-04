/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/

var nomi = ["Mario", "Carla", "Giovanna", "Tiberio"];

var cognomi = ["Rossi", "Bianchi", "Fumagalli", "Brambilla"];

var falsaLista = [];

var randomNome = 0;

for (var j = 0; j < 3; j++) {
  randomNome = Math.floor(Math.random() * nomi.length);
  randomCognome = Math.floor(Math.random() * cognomi.length);
  var nuovoNome = nomi[randomNome] + " " + cognomi[randomCognome];
  falsaLista.push(nuovoNome);
}

console.log(falsaLista);
