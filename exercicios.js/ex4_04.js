//TRABALHANDO COM LAÇO DE REPETIÇAO
// excultar o laço x vezes


let contador = 1;
//ira repetir enquanto a condiçao for verdadeira
//ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <= 5)
console.log(`´o contador e ${contador}`)


//incrementaçao a variavel ou seja adicionado valor a ela
//para que continue o processo ate que a conduçao seja antingada
//contador = contador++;
contador = contador +1;

console.log("fim")

let senha_senai = '12345'

while(true){
let senha =  prompt("digite a senha")
if(senha_senai == senha){
    console.log('voce hackeou a senha');
    break;
}else if(senha =='desisto'){}
}



//escreva um programa que fique recebendo o valor de varios produto
//que eu escreva sub-total, e exiba no final a soma da minha compra
//e a quantidade de produtos lidos 


let soma = 0;
let qtd = 0; 

while(true){
    let valor =Number (prompt('digite o valor do produto (0 para encerrar):'));
    if(valor ==0){
        break;
    }
    else{
        soma = soma + valor;
        qtd++;
    }
}

console.log(`forao informados ${qtd}`)
//tofixed para colocar somente dois digitos apos a virgula
console.log(`valor total dos produtos ${soma. tofixed(2)}`);


//escreva um programa que fique recebendo o valor de varios produto
//que eu escreva sub-total, e exiba no final a soma da minha compra
//e a quantidade de produtos lidos 


let soma2 = 0;
let qtd2 = 0; 
let encerrar =""
while(encerrar != "SUB-TOTAL")
while(true){
    let valor =Number(prompt('digite o valor do produto:'));
    spma2 = soma + valor;
    qtd2++;
    encerrar = prompt("deseja continuar: (digite sub-total) ")
    }
    soma2 = soma + valor;
        soma = soma + valor;
        qtd++;
    


console.log(`forao informados ${qtd}`)
//tofixed para colocar somente dois digitos apos a virgula
console.log(`valor total dos produtos ${soma. tofixed(2)}`);


//crie um jogo de adivinhação de numeros,
//computador precisa sortear um numero,
//enquanto ele nao acertar continua pedind um novo numero


console.log("#################################");
console.log("🤔 jogo da adivinhação 🤔");
console.log("#################################");

let nrsorteado = Math.random() * 100 + 1 //gera um numero aleatorio
console.log(nrsorteado);
while(!acertou){
    const chute = parseint(prompt('🤔 digite um numero entre 1 e para adivinha'))

    if(chute > nrsorteado){
    console.log(`voce chutou ${chute}, tente um numero👇!`);
    }
    else if(chute < nrsorteado){
        console.log(`voce chutou ${chute}, tente um numero!👆!`);
    }
    else if(chute == nrsorteado){
        console.log(`voce chutou ${chute}, 🎉 parbéns você acertou!`);
        acertou = true;
    }
}