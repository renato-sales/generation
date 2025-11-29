const input = require("readline-sync");

const grossSalary = input.questionFloat("Digite o valor do salario bruto: ");

const additionalNight = input.questionFloat(
  "Digite o valor do adicional noturno: "
);

const overTime = input.questionFloat("Digite o valor das horas extras: ");

const discount = input.questionFloat("Digite o valor dos descontos: ");

const finalSalary = grossSalary + additionalNight - discount + overTime * 5;

console.log("Salário líquido: %f", finalSalary);
