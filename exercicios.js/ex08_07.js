//Nessa string ‘Gol;Corsa;Palio;Monza;Fusca;’, faça a separação desses itens para
//uma lista e exiba o item e a posição que ele está.

let carros = "Gol;Corsa;Palio;Monza;Fusca;"
let listacarros = carros.split(';')

for(let[posiçao, carro] of listacarros.entries()){
    console.log(`posiçao ${posiçao}: ${carro}`)
}