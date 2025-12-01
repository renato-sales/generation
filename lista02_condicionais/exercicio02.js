const input = require("readline-sync");

const numero = input.questionInt("Digite um numero: ");

numero % 2 == 0
  ? console.log(`O Número ${numero} é par e positivo!`)
  : console.log(`O Número ${numero} é ímpar e negativo!`);
