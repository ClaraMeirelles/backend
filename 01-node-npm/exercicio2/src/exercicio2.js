const { red, green } = require("chalk")

// EXERCÍCIO 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const numero1 = Number(process.argv[2])
const operacaoInput = process.argv[3]
const numero2 = Number(process.argv[4])
let resultado
console.log(operacaoInput)
if (operacaoInput === "+" || operacaoInput === "add") {
    resultado = numero1 + numero2
} else if (operacaoInput === "-" || operacaoInput === "sub") {
    resultado = numero1 - numero2
} else if (operacaoInput === "*" || operacaoInput === "mult") {
    resultado = numero1 * numero2
} else if (operacaoInput === ":" || operacaoInput === "div") {
    resultado = (numero1 / numero2)
}
if (isNaN(resultado)) {
    resultado = red("digite apenas números ou operadores válidos (+, -, *, :)")
} else {
    console.log("O resultado é", green(resultado))
}
