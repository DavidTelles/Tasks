const prompt = require('prompt-sync')();

function validador(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

var input = prompt('Digite o seu email -> ')
if(validador(input)) {
    console.log('E-mail válido!')
} else {
    console.log('E-mail não válido!')
}