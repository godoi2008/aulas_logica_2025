//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas.
let n1 = 0
function global(){
    n1 += 1 
    console.log(n1);
    
}
global()
global()
global()
global()