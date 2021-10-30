"use strict";
const { red, green } = require('chalk');
const prato = process.argv[2];
const cliente = process.argv[3];
const listaDePedidos = [];
function cadastrarPedido(prato, cliente) {
    const novoPedido = {
        prato: prato,
        cliente: cliente
    };
    listaDePedidos.push(novoPedido);
    console.log("Pedidos: ", listaDePedidos);
}
cadastrarPedido(prato, cliente);
const produtoAdicionar = process.argv[4];
const valor = Number(process.argv[5]);
const listaDeProdutos = [
    {
        nome: "macarronada",
        valor: 80
    },
    {
        nome: "pudim",
        valor: 15
    },
    {
        nome: "entrada",
        valor: 25
    },
    {
        nome: "pizza",
        valor: 60
    }
];
function cadastrarProduto(produto, valor) {
    const novoProduto = {
        nome: produto,
        valor: valor
    };
    listaDeProdutos.push(novoProduto);
    console.log("Produtos:", listaDeProdutos);
}
cadastrarProduto(produtoAdicionar, valor);
const buscarProduto = process.argv[6];
function valorProduto(produto) {
    let valor = 0;
    for (let prato of listaDeProdutos) {
        if (prato.nome.includes(produto)) {
            valor = prato.valor;
        }
    }
    console.log("Valor do produto buscado: ", valor ? valor : "produto não encontrado");
}
valorProduto(buscarProduto);
const gastos = Number(process.argv[7]);
const vendas = Number(process.argv[8]);
function calcularLucro(gastosRestaurante, valorDasVendas) {
    const lucro = Number((valorDasVendas - gastosRestaurante).toFixed(2));
    if (lucro <= 0) {
        console.log(`O lucro deste período foi de R$ ${red(lucro)}`);
    }
    else {
        console.log(`O lucro deste período foi de R$ ${green(lucro)}`);
    }
}
calcularLucro(gastos, vendas);
//# sourceMappingURL=index.js.map