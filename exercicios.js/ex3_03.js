//Pede ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele pertence 
//considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto, acima de 60 idoso)

const prompt = require("prompt-sync")

let anoatual = parseint(prompt("em que ano estamos ? "))
let anonascimento = parseint(prompt('digite o ano de nascimento'))
let idade = anoatual - anonascimento

switch(true)
{
     case idade <10:
    console.log("faixa estaria: criança");
    break;

     case idade < 11 && idade <= 17:
       console.log("faixa estaria: criança");
     break;

     case idade < 18 && idade <= 59:
     console.log("faixa estaria: criança");

     break;
     case idade < 60:
     console.log("faixa estaria: criança");
     break;        
  
}

