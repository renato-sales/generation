const input = require("readline-sync");

let continuar = true;
let somatorio = 0;

do {
  let numero = input.questionInt("Digite um numero: ");

  if (numero > 0) {
    somatorio += numero;
  }

  if (numero == 0) {
    continuar = false;
  }
} while (continuar);

console.log(`A soma dos números positivos é: ${somatorio}`);
