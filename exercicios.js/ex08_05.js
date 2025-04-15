//Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.

let numeros = [];

for(let i =0; i< 5; i++){
    let numerosaleatorio = Math.floor(Math.random() * 100) + 1
    numeros.push(numerosaleatorio)
    console.log(`o dobro de ${numeros[i]} : ${numeros[i] * 2}`)
}