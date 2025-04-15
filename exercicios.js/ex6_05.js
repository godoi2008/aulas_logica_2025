//receba 5 numero e verifique a soma e a
//quantidade de todas os pares e impares digitado
const prompt = require('prompt-sync')()

somar = 0;
somarimpar = 0;
qtdpar = 0;
qtdimpar = 0;
let entrada = 0;
for(let i = 0; i <=5; i++){
    entrada = console.log(Number(prompt("digite um numero: ")))
if(entrada % 2 == 0){
    somapar += entrada;
    newFunction();
}
else{
    somai += entrada
    qtdi++
   }
}

console.log(`a soma de ${qtdpar} é ${somapar}`)
console.log(`a soma de ${qtdimpar} é ${somaimpar}`)

function newFunction() {
    qtdpar++;
}
