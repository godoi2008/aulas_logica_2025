const prompt = require('prompt-sync')();
let altura = Number(prompt('Digite sua altura: '));
let peso = Number(prompt('Digite seu peso: '));

let imc = peso / (altura ** 2);
console.log(imc)
if(imc < 18.5){
    console.log('Abaixo do peso Ideal');
}
else if(imc >= 18.5 && imc < 25){
    console.log('Peso Ideal');
}
else if(imc >= 25 && imc < 30){
    //      p           q          p e q
    console.log('Sobrepeso');
}
else{
    console.log('Obesidade');
}

//Verificar se o triangulo é equilatero ou escaleno
// receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1: '))
let lado2 = Number(prompt('Digite o valor do lado 2: '))
let lado3 = Number(prompt('Digite o valor do lado 3: '))

// verificar se o triangulo é equilatero caso tenha todos os 
//lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo Equilatero ?', eq, 'Triangulo Escaleno', es);

// Validando se é um triangulo equilatero, escaleno ou isoceles.
let lado4 = Number(prompt('Digite o valor do lado 1: '))
let lado5 = Number(prompt('Digite o valor do lado 2: '))
let lado6 = Number(prompt('Digite o valor do lado 3: '))

if((lado4 == lado5) && (lado5 == lado6)){
    console.log('Triangulo Equilatero ?')
}
else if((lado4 != lado5) && (lado5 != lado6) && (lado4 != lado6)){
    console.log('Triangulo Escaleno');
}
else{
    console.log('Triangulo Isosceles');
}

//	Crie um algoritmo que receba o valor das vendas de um vendedor 
// e a quantidade de horas semanais trabalhadas, 
// e verifique se ele tem direito ao bônus da empresa 
// considerando que ela concede para os vendedores que vendem mais de 5000
//  ou trabalham mais que 40 horas semanais

// descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('Total de horas trabalhadas: '))
let vendas =  Number(prompt('Total de Vendas: '))

// validar se uma das condições foi atendida 
// (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if(vendas > 5000 || horas > 40){
    console.log("Tem direito ao bonus")
}
else{
    console.log("Não tem direito ao bonus")
}

// Crie um algoritmo que receba um caractere e verifique se ele é
//uma vogal ou uma consoante
let letra = prompt('Digite uma letra: ');
// sinal lógico do "OU" = ||
// sinal lógico do "E"  = &&

if(letra == "a" || letra ==  "e" || letra ==  "i" || letra ==  "o" | letra == "u")
{
    console.log(`A letra ${letra} é uma Vogal`);
}
else{
    console.log(`A letra ${letra} é uma Consoante`);
}