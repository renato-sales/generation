const input = require("readline-sync");

const A = input.questionInt("Digite o numero 1: ");
const B = input.questionInt("Digite o numero 2: ");
const C = input.questionInt("Digite o numero 3: ");

const somaAB = A + B;

if (somaAB > C) {
  console.log(`A Soma de A + B é Maior do que C`);
} else if (somaAB < C) {
  console.log(`A Soma de A + B é Menor do que C`);
} else {
  console.log(`A Soma de A + B é igual a C`);
}
