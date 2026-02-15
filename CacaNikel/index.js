const prompt = require ('prompt-sync')();

let saldo = Number(prompt('Digite seu Saldo -> '))

function girar() {
    const simbolos = ['7', '%', '#', '$', '@']
    let res = []

    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * simbolos.length)
        res.push(simbolos[index])
    }

    return res
}

function verficar(res, aposta) {
    if(res[0] === res[1] && res[0] === res[2]){
        if(res[0] == '7') {return aposta * 10}
        else if(res[0] == '$') {return aposta * 7}
        else {return aposta * 5}
    }

    return 0
}

function game() {
    let apostado = Number(prompt('Quanto quer apostar? -> '))

    if(apostado > saldo){
        console.log('Aposta invalida!! X')
        return;
    }

    saldo -= apostado

    const res = girar()
    console.log('\n Girando...')
    console.log(res.join('|'))
    const ganho = verficar(res, apostado)

    if(ganho > 0) {
        console.log(`JAKEPOT! Você ganhou: ${ganho}`)
        saldo += ganho;
    } else {
        console.log('Perdeu...')
    }

    if (saldo <= 0) {
        console.log('\n Você faliu no cassino!')
        process.exit()
    }
}

while(true) {
    const start = prompt(`'y' Para Jogar, 'n' Para Sair -> `).toLowerCase()
    if(start == 'y') {
        game()
    } else {
        break;
    }
}