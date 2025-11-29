const input = require("readline-sync");

const note01 = input.questionFloat("Digite a nota 1: ");
const note02 = input.questionFloat("Digite a nota 2: ");
const note03 = input.questionFloat("Digite a nota 3: ");
const note04 = input.questionFloat("Digite a nota 4: ");

const average = (note01 + note02 + note03 + note04) / 4;

console.log("Média final: %f", average);
