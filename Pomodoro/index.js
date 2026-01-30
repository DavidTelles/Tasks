const prompt = require('prompt-sync')();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pomodoro(time) {
    const min = time * 60000
    console.log(`Pomodoro iniciado! Estude por ${time} minutos...`);
    await sleep(time)
    console.log("O tempo acabou! vá para o seu descanço!")
}

let tempo = Number(prompt('Digite o tempo que deseja estudar (em minutos) -> '))

pomodoro(tempo)
