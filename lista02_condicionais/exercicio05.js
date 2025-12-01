const input = require("readline-sync");

const codigoProduto = input.questionInt("Digite o codigo do produto: ");
let precoUnitario;
let nomeProduto;

switch (codigoProduto) {
  case 1:
    nomeProduto = "Cachorro Quente";
    precoUnitario = 10;
    break;

  case 2:
    nomeProduto = "X-Salada";
    precoUnitario = 15;
    break;

  case 3:
    nomeProduto = "X-Bacon";
    precoUnitario = 18;
    break;

  case 4:
    nomeProduto = "Bauru";
    precoUnitario = 12;
    break;

  case 5:
    nomeProduto = "Refrigerante";
    precoUnitario = 8;
    break;

  case 6:
    nomeProduto = "Suco de laranja";
    precoUnitario = 13;
    break;

  default:
    console.log("Digite uma opção válida: 1 - 6");
    break;
}
const quantidade = input.questionInt("Digite  quantidade do produto: ");
const total = quantidade * precoUnitario;

console.log(`Produto: ${nomeProduto}`);
console.log(`Valor total: R$ ${total}`);
