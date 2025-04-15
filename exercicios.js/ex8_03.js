//Crie uma lista com os meses e imprima apenas os meses que começam com "J".
let meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' 
];
letra = 'j'

for(let mes of meses){
    if(mes.includes(letra)){
        console.log(mes)
    }
}