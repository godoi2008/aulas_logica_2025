//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']

let palavra = prompt('digite uma palavra: ')
let qtdvogais = 0 
for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdvogais++
    }
}   