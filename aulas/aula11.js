//crie um jogo de adivinhação de numeros,
//computador precisa sortear um numero,
//enquanto ele nao acertar continua pedind um novo numero


console.log("#################################");
console.log("🤔 jogo da adivinhação 🤔");
console.log("#################################");

let nrsorteado = //gera um numero aleatorio
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