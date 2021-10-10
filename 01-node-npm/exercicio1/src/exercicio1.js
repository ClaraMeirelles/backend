const {green, yellow, red, blue} = require("chalk")

//  Exercício 1
// a) acessamos os parâmetros através do process.argv, passando o índice do argumento.
// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2]
const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const idadeEmSeteAnos = Number(idade) + 7
if (!nome || !idade) {
    console.log(red("Insira seu nome como primeiro argumento e sua idade como segundo argumento"))
} else if (isNaN(idade)) {
    console.log(yellow("Insira sua idade com caracteres numéricos"))
} else {
    console.log(blue(`Olá, ${green(nome)}! Você tem ${green(idade)} anos. Em 7 anos você terá ${green(idadeEmSeteAnos)}`))
}