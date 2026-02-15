const prompt = require ('prompt-sync')();

function girar() {
    const simbolos = ['7', '%', '#', '$', '#', '@']
    let res = []

    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * simbolos.length)
        res.push(simbolos[index])
    }

    return res
}

function verficar(res) {
    if(res[0] === res[1] && res[0] === res[2]){
        return '🎉 JACKPOT!!'
    } else {
        return 'Lost!'
    }
}

function game() {
    const res = girar()
    console.log(res.join('|'))
    console.log(verficar(res))
}

while(true) {
    const start = prompt(`'y' Para Jogar, 'n' Para Sair -> `).toLowerCase()
    if(start == 'y') {
        game()
    } else {
        break;
    }
}