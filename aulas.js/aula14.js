let frutas = ['maça', 'banana', 'uva', 'abacaxi']
//a variavel serve para iterar os valores ate o limite da lista
//o nome não é obrigatoriamente ser o nome i, x ou contador 
//pode se qualquer nome de variavel
    for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`a fruta é ${frutas[x]}`)

    }
    let listanomes = ['bill gates', 'rafinha', 'raul seixas', 'esteves', 'vieira']
    //para cada nome da lista le escreva um nome

    //verifica se é uma consoante lista de vogais
    const prompt = require('prompt-sync')()
    let vogais = ['a', 'e', 'i', 'o', 'u']

    let letra = prompt('digite uma letra: ')
    //se letra estiver incluso na lista de vogais, identifico que
    //é uma vogal
    if(vogais.includes(letra.toLowerCase())){
        console.log('é uma vogal')
    }

    //obtendo a posição do item
    for(let[pos,frutas]of frutas.entries()){
        //entries retorna o par de cada elemento do vetor ou seja a posiçao e a fruta
        console.log(`posição${pos} e fruta ${fruta}`)
    }

    //separando os items em uma lista
    let produtos = 'celular, notebook, tv, tablet, headset'
    //o split divide a string e forma uma lista a parti do limitador no caso abaixo uma virgula
    let listadeprodutos = produtos.split(',')
    for(let produto of listaprodutos){
        console.log(produto)
    }

    //percorrendo uma string como uma lista(lista de caracteres)
    let palavra = 'SENAI'
    for(let letra of palavra){
        console.log(letra)
    }