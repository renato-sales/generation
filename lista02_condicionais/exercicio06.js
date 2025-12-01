const input = require("readline-sync");

const nomeColaborador = input.question("Digite o nome do colaborador: ");
const codigoCargo = input.questionInt("Digite o codigo do cargo: ");
let percentualReajuste;
let nomeCargo;

switch (codigoCargo) {
  case 1:
    nomeCargo = "Gerente";
    percentualReajuste = 10;
    break;

  case 2:
    nomeCargo = "Vendedor";
    percentualReajuste = 7;
    break;

  case 3:
    nomeCargo = "Supervisor";
    percentualReajuste = 9;
    break;

  case 4:
    nomeCargo = "Motorista";
    percentualReajuste = 6;
    break;

  case 5:
    nomeCargo = "Estoquista";
    percentualReajuste = 5;
    break;

  case 6:
    nomeCargo = "Técnico de TI";
    percentualReajuste = 8;
    break;

  default:
    console.log("Digite uma opção válida: 1 - 6");
    break;
}
const salario = input.questionFloat("Digite o salario: ");
const novoSalario = salario + percentualReajuste * salario;

console.log(`Nome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${nomeCargo}`);
console.log(`Salário: R$ ${novoSalario}`);
