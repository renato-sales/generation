const input = require("readline-sync");

const n1 = input.questionInt("Digite o primeiro numero do intervalo: ");
const n2 = input.questionInt("Digite o segundo numero do intervalo: ");

if (n1 < n2) {
  for (let index = n1; index <= n2; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log(`${index} é múltiplo de 3 e 5`);
    }
  }
} else {
  console.log("Intervalo inválido!");
}
