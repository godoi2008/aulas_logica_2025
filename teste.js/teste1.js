const prompt = require('prompt-sync')();
console.log("bem-vindo ao curso de javascript")
console.log("estou aprendendo a usar o console.log!")

console.log(15+25);
console.log(100-45);
console.log(12*7);
console.log(144/12);
console.log(20%3);
console.log(2**5);      

//exercicio de variaveis
let idade

//1 -criar 3 variaveis nomealuno, altura, escola, ano 
let nomealuno = "joao"
let altura = 1.75;
let escola = 'sesi andradina';
let ano = '2° medio'

//reatribuindo de valores as nossa as nossa variaveis.
nomealuno = prompt('digite o nome do aluno?');
altura = parseFloat(prompt('digite a altura?'))
escola = prompt(('digite o nome da escola?'))
ano = parseint(prompt('gidite o ano da turma?'))
console.log('a aluna ${nomealuno} tem ${altura}, estuda na escola');

