// Criando uma lista vazia

const listaComidas = [];

// Laço de repetição sem um número de execução definido

while (true) {

// Recebendo informação do usuário e armazenando em variável

const comida = prompt('Digite uma comida que você mais gosta:');

// Inserindo o valor da variável no final da nossa lista

listaComidas.push(comida);

// Obtendo resposta do usuário se deseja continuar

const resp = prompt('Deseja continuar? [S/N]');

// Verificando condição da resposta dele, se for N ou n, sai do laço

if (resp.toLowerCase() === 'n') {

// Parando o laço while

break;

}

}

// Fora do while - após executá-lo

// Laço de repetição para exibir os itens da lista e suas posições

for (const [pos, comida] of listaComidas.entries()) {

// Exibindo variável de cada item da lista

console.log(`${pos + 1}º - ${comida}`)
}