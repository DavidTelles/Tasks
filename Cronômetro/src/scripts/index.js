let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

hours.value = "00"
minutes.value = "00"
seconds.value = "00"

var condicao = 0

async function start() {
    condicao = 0
        if (hours.value <= 0 && minutes.value <= 0 && seconds.value <= 0) {
        console.log('O tempo cabou, reseta!')
    } else {
        while(condicao < 1) {
        seconds.value--
        if(seconds.value <= 0) {
            if(minutes.value > 0) {
                minutes.value--
                seconds.value = 59
            } else if(minutes.value <= 0) {
                if(hours.value > 0) {
                    hours.value--
                    minutes.value = 59
                    seconds.value = 59
                }
            }
        }
        if (seconds.value <= 0 && minutes.value <= 0 && hours.value <= 0) {
            console.log('O tempo acabou!')
            hours.value = "00"
            minutes.value = "00"
            seconds.value = "00"
            break
        }
        await sleep(1000)
    }
    }
}

function pause() {
    condicao = 1
}

function reset() {
    hours.value = "00"
    minutes.value = "00"
    seconds.value = "00"
    condicao = 1
}