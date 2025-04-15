// const prompt= require('prompt-sync')
// //criando nossa primeira funçao
// function cabecalho(){
//     console.log('------------------------------')
//     console.log('         sesi senai           ')
//     console.log('------------------------------')
// }

// //criando outra funcao, funçao de saudaçao
// function saudaçao(){
//     let nome = prompt('digite seu nome: ')
//     console.log(`${nome} tenha um bom dia.`)
// }
// //chamando a funçao
// //passado o parametro junto com a funçao
// cabecalho('sesi/senai')
// //posso declarar uma variavel e passa-la com paramentro para funçao
// let ecola= 'sesi 025'
// cabecalho(escola)
// saudaçao()

// //crie a funçao soma que ira receber dois valores como parametro 
// //a partir desses valores, realiz o cauculo e mostrara o resultado
// function soma(n1, n2){
//     let resultado = n1 + n2 
//     console.log(resultado)
// }
// soma(5,6)
// soma(8, 9)
// soma(8, 18)

const prompt = require('prompt-sync')()

function parimpar(tipo){
    tipo = number(prompt(tipo))
    if(tipo%2==0){
        console.log('seu numero é par');

    }else{
        console.log('seu numero é impar');
        
    }
}
parimpar('digite um numero')
//funçao com retorno do resultado o caculo é retornada para as funçao
function média(n1, n2){
    let resultado= (n1 + n2) / 2;
    return(resultado)
}

console.log(medi(6,8))
//armazenei o retorno da funçao em uma variavel
let valor = média(9,7);
//utilizei o retorno da funçao para escrever na tela
console.log(valor)
//utilizei a variavel que recebeu o retor da funçao para
parimpar(valor)