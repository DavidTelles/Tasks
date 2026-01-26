const prompt = require('prompt-sync')();

var i = 0
const opcoes = ["pedra", "papel", "tesoura"]
var resultado = ""

const opcaoPc = opcoes[Math.floor(Math.random() * 3)]
while (i == 0) {
    var opcaoPlayer = prompt('Pedra, Papel ou Tesoura? -> ').toLowerCase()

if(!opcoes.includes(opcaoPlayer)) {
    console.log("Escolha Inválida!")
} else {
    i++
}
}

    if(opcaoPlayer === opcaoPc) {
        resultado = 'Empate!'
    } else if (
        opcaoPlayer == "pedra" && opcaoPc == "tesoura" ||
        opcaoPlayer == "papel" && opcaoPc == "pedra" ||
        opcaoPlayer == "tesoura" && opcaoPc == "papel"
    ) {
        resultado = "Ganhou!"
    } else {
        resultado = "Perdeu..."
    }

console.log(`
    Você escolheu: ${opcaoPlayer},
    A maquina escolheu: ${opcaoPc}
    ${resultado}`)