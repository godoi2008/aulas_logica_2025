//receber e armagena o texto em uma variavel
const prompt = require("prompt-sync")()
let curso = "desenvolvimento de sistema"
// #tipo nome receber valor na variavel

//exibir o valor armazenado
console.log("curso") //imprimo uma string(texto)
console.log("curso") //imprimI o valor que esta dentro da variavel
console.log("curso",curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 35 // valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome3 = "joao"

console.log("olá", nome3, "voce tem", idade2,
    "e hoje esta fazendo", temperatura, "°c")
//usando template string
console.log(`ola ${nome3}, voce tem ${idade2} 
    e hoje esta fazendo: ${temperatura}°c`)

let dia = true;
let chovendo = false;
//as constante nao podem ser reatribuidos novos valores 
const pI = 3.1415
console.log(pI)

//ultilizando prompt para receber dados
//ultilizando promt para receber dados
//entrada de dados 
//no promt sempre que recebemos uma  string
nome = prompt("qual é seu nome")
idade = prompt('qual sua idade')
peso = parseFloat(prompt(`qual seu peso ? `))
console.log(`seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade));
console.log(typeof(peso));
//aposca comversao dos valores é possivel realizar
//calculos matematicos)(￣y▽￣)╭ Ohohoho.....
