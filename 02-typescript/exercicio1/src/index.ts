let minhaString: string = "Olá exercícios"
let meuNumero: number = 23

enum CORES {
    MAGENTA = "magenta",
    VERMELHO = "vermelho",
    AMARELO = "amarelo",
    AZUL = "azul",
    VERDE = "verde",
    ROXO = "roxo",
    VIOLETA = "violeta",
    LARANJA = "laranja",
    PRETO = "preto",
    BRANCO = "branco"
}
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES,
}

const paula: pessoa = {
    nome: "Paula",
    idade: 28,
    corFavorita: CORES.MAGENTA
}

const joao: pessoa = {
    nome: "João",
    idade: 25,
    corFavorita: CORES.VERDE
}

const flavia: pessoa = {
    nome: "Flávia",
    idade: 35,
    corFavorita: CORES.AMARELO
}

const turma: pessoa[] = []
turma.push(paula)
turma.push(joao)
turma.push(flavia)

console.log("Turma", turma)