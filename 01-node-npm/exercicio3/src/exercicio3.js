const fs = require("fs")

// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const tarefa = process.argv[2]
const listaTarefasDoc = fs.readFileSync("lista-de-tarefas.txt")
const listaTarefas = JSON.parse(listaTarefasDoc)

listaTarefas.push(tarefa)
const listaString = JSON.stringify(listaTarefas)
fs.writeFileSync('lista-de-tarefas.txt', listaString, function (err) {
    if (err) {
        console.log("deu ruim")
        console.log(err)
    }
})

console.log(listaTarefas)