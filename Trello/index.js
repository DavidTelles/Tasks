const prompt = require('prompt-sync')();

var task = []

while(true) {
    let main = Number(prompt(`
        1 - Ver Tasks
        2 - Adicionar Tasks
        3 - Deletar Task
        
        0 - Sair`))

    if (main == 1) {
        console.clear()
        console.log(task)
    } else if (main == 2) {
        console.clear()
        let add = prompt('Digite o nome da tarefa -> ')
        task.push(add)
        console.clear()
        console.log(`A tarefa ${add} foi adicionada com sucesso!`)
    } else if (main == 3) {
        console.clear()
        console.log(task)
        let remove = Number(prompt('Digite a posição da tarefa que deseja remover -> '))
        console.clear()
        if(remove == parseFloat) {
            console.log('Digite um número inteiro')
        } else { {
            task.splice(remove - 1, 1)
            console.log('Tarefa removida com sucesso!')
        }
        }
    } else if (main == 0) {
        break;
    } else {
        console.clear()
        console.log('Digite um número de 0 a 3')
    }
}