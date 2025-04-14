const prompt = require('prompt-sync')()

//operação com variaveis
let nr1 = Number(prompt("digite um numero"));
let nr2 = Number(prompt("digite um numero"));
let soma = nr1 + nr2;
console.log(`a soma entre ${nr1} + ${nr2} é igual ${soma}`)

let subtracao = nr1n - nr2;
console.log(`a subtracao entre ${nr1} - ${nr2} é igual: ${subtracao}`)
console.log(`a subtracao entre ${nr1} - ${nr2} é igual: ${nr1 - nr2}`)

//calculando valor do celular com desconto
let valor = Number(prompt(`digite o preç do celular:`));
let desconto = Number(prompt('digite o preç do desconto:'));
valor = valor - desconto;
console.log(`o valor do celular com desconto`)

//para descobrir quantas horas de trabalho vamos usar no projeto
let horas_por_dia = 8;
let dias_totais = 15;
let horas_trabalho = horas_por_dia * dias_totais;
let custo_hora = 100;
let custo_total = horas_trabalho * custo