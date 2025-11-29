const input = require("readline-sync");

const salary = input.questionFloat("Digite o valor do salario: ");
const allowance = input.questionFloat("Digite o valor do abono: ");
const newSalary = salario + abono;

console.log("O valor do novo salário é: %f", newSalary);
