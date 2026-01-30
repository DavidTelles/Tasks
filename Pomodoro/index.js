const prompt = require('prompt-sync')();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pomodoro(time) {
    time = time * 60000
    await sleep(time)
    console.log("O tempo acabou! vá para o seu descanço!")
}

let tempo = Number(prompt('Digite o tempo que deseja estudar (em minutos) -> '))

pomodoro(tempo)
