//declare um novo vetor
//reconheço que é um pelo uso dos colchetes
let listavazia = [];

//declarando uma lista de numeros
let numeros = [1,2,3,4,5,6];
console.log(numeros);

//declaraçao de uma lista de strings
let nomes = ["ana", "joao", "maria"];
console.log(nomes);

//declaraçao de uma lista mista
let listamista = [1, "dois", true, 2.5]
console.log(listamista);

let listaComLista = [
    ["coca-cola", "cachorro-quente"],
    [5.0, 10.0]
] 
console.log(listaComLista)

//alterando valores da lista
let fruta = ['maça', 'pera', 'uva', 'abacaxi']
console.log(frutas);
//a funçao push adiciona um novo elemento no vetor
frutas.push('laranja')
console.log(frutas);
//o spread adiciona um novo elemento no vetor
fruta = [...frutas, 'banana']
console.log(frutas);

//a funçao splice adiciona um novo item em
//uma posiçao especifica
frutas.splice(2, 0, 'morango')
console.log(frutas);

//excluindo item na lista
frutas.splice(3,1)
console.log(frutas)
frutas.shift()// excluindo primeiro item da lista
frutas.pop()//excluir ultimo item da lista
console.log(frutas)

//acessar os itens da lista 
console.log(frutas[3]); //acesso a parti uma posiçao especifica
console.log(frutas.splice[0,4])//posiçao 0 ate 4
console.log(frutas.splice[1])//a partir da posi 1
console.log(frutas.splice[-1])//mostra os itens do fim para inicio
console.log(frutas.length);//total de itens na lista

//ordenar itens da lista
console.log(frutas)
frutas.sort()//ordenar a lista de forma crescente
console.log(frutas)
frutas.reverse()//ordenado de forma decresente
console.log(frutas);