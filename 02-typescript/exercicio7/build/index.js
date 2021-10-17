"use strict";
const { red } = require("chalk");
const bikini = {
    nome: "bikini",
    tipo: "verao",
    valor: 60,
    desconto: 5
};
const cueca = {
    nome: "cueca",
    tipo: "íntima",
    valor: 15,
    desconto: 7
};
const abrigo = {
    nome: "abrigo",
    tipo: "inverno",
    valor: 150,
    desconto: 10
};
const toalha = {
    nome: "toalha",
    tipo: "banho",
    valor: 30,
    desconto: 4
};
const produtos = [bikini, cueca, abrigo, toalha];
const produtosBlackFriday = [];
function calculaBlackFriday(produtos) {
    produtos.map((produto) => {
        const produtoBlack = Object.assign(Object.assign({}, produto), { valorComDesconto: (produto.valor * ((100 - produto.desconto) / 100)).toFixed(2) });
        produtosBlackFriday.push(produtoBlack);
    });
}
calculaBlackFriday(produtos);
console.table(produtosBlackFriday);
//# sourceMappingURL=index.js.map