const input = require("readline-sync");

let vetorNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let controle = false;

let numero = input.questionInt("Digite um numero: ");

for (let index = 0; index < vetorNumeros.length; index++) {
  if (numero == vetorNumeros[index]) {
    let posicao = vetorNumeros.indexOf(numero);
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
    controle = true;
    break;
  }
}

if (controle == false) {
  console.log(`O número ${numero} não foi encontrado!`);
}
