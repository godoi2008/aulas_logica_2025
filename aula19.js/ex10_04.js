//Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
//depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
//saldo. Crie um menu interativo com while para navegar entre as funções:
//[1] //Depositar
//[4] //Parar programa
//[2] //Sacar
//[3] //Consultar saldo

//criar a função depositar
function Depositar(valorDepositivo){
    saldo -= valorsaque
}
//funçao morstrar saldo 
function mostrarsaldo(){

}
//menu interativo
function caixaEletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0;
    while(opcao != 4 ){
        console.log('=== caixa eletronico ===');
        console.log('[1] - depositar');
        console.log('[2] - sacar');
        console.log('[3] - mostrar saldo');
        console.log('[4] - sair');
        opcao = Number(prompt("escolha uma opcao:"))

        switch(opcao){
            case 1:
                let valorDepositado = Number(prompt("digite o valor depositado: "))
                Depositar(valorDepositado)
                break;
                case 2: 
                let valorsaque = Number(prompt("digite o valor para sacar:"))
                sacar(valorsaque)
                case 3:
                    mostrarsaldo()
                    break;
                    case 4:
                        console.log("obrigado por usar o banco barreto")
                        break;
                        default:
                            console.log('opção invalido')
        }
    }
}