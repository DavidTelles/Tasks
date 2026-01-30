let tempo = document.getElementById('itempo')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pomodoro(time) {
    const min = time * 60000
    document.body.innerHTML = "<h2>Tempo de estudo iniciado!</h2>";
    await sleep(min)
    document.body.innerHTML = "<h2>Tempo de estudo encerrado! Hora de fazer uma pausa.</h2>";
    await sleep(5000)
    window.location.href = 'index.html';
}

function startPomodoro() {
    pomodoro(parseInt(tempo.value));
}