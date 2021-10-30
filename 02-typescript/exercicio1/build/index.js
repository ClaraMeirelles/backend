"use strict";
let minhaString = "Olá exercícios";
let meuNumero = 23;
var CORES;
(function (CORES) {
    CORES["MAGENTA"] = "magenta";
    CORES["VERMELHO"] = "vermelho";
    CORES["AMARELO"] = "amarelo";
    CORES["AZUL"] = "azul";
    CORES["VERDE"] = "verde";
    CORES["ROXO"] = "roxo";
    CORES["VIOLETA"] = "violeta";
    CORES["LARANJA"] = "laranja";
    CORES["PRETO"] = "preto";
    CORES["BRANCO"] = "branco";
})(CORES || (CORES = {}));
const paula = {
    nome: "Paula",
    idade: 28,
    corFavorita: CORES.MAGENTA
};
const joao = {
    nome: "João",
    idade: 25,
    corFavorita: CORES.VERDE
};
const flavia = {
    nome: "Flávia",
    idade: 35,
    corFavorita: CORES.AMARELO
};
const turma = [];
turma.push(paula);
turma.push(joao);
turma.push(flavia);
console.log("Turma", turma);
//# sourceMappingURL=index.js.map