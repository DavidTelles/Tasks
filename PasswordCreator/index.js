const prompt = require('prompt-sync')();

const caracteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var senha = ""

function gerarSenha(tamanho){
    for(var i = 1; i <= tamanho; i++) {
        senha += caracteres[Math.floor(Math.random() * caracteres.length)]
    }
    console.log(senha)
}

const input = Number(prompt("Digite o tamanho da senha que deseja -> "))
gerarSenha(input)