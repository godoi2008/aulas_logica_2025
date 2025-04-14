//crie um programa de que recebe do usuario atraves
//do prompt 6
//comidas e refaça todos os itens do exercicio 1
const prompt = require('prompt-sync')()
let comidas = [];

for(let i = 0; i < 6; i++){
    let comida = prompt(`digite o nome da comida ${i + 1}`)
    comidas.push(comida)
}
console.log(comidas);
//exiba a primeira comida
console.log(comidas[0]);