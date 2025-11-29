const input = require("readline-sync");

const number01 = input.questionFloat("Digite o numero 1: ");

const number02 = input.questionFloat("Digite o numero 2: ");

const number03 = input.questionFloat("Digite o numero 3: ");

const number04 = input.questionFloat("Digite o numero 4: ");

const result = number01 * number02 - number03 * number04;

console.log("Diferença: %f", result);
