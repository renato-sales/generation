const input = require("readline-sync");

let continuar = true;
let contadorIdadeMenor = 0;
let contadorIdadeMaior = 0;

while (continuar) {
  let idade = input.questionInt("Digite uma idade: ");

  idade > 0 && idade < 21 && contadorIdadeMenor++;
  idade > 50 && contadorIdadeMaior++;

  if (idade < 0) {
    continuar = false;
  }
}

console.log(`Total de pessoas menores de 21 anos: ${contadorIdadeMenor}`);
console.log(`Total de pessoas menores de 50 anos: ${contadorIdadeMaior}`);
