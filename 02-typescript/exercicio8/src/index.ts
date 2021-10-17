const { red, green } = require('chalk')

// Um parente seu decidiu abrir um restaurante; e, recentemente, ele descobriu que você está fazendo um curso de programação. Além de pedir para você arrumar alguns computadores antigos dele, configurar a internet e outros pedidos clássicos, ele prometeu te pagar caso você implementasse um sistema para o restaurante. Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

// c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

const prato = process.argv[2]
const cliente = process.argv[3]

type pedido = {
  prato: string,
  cliente: string
}
const listaDePedidos: Array<pedido> = []
function cadastrarPedido(prato: string, cliente: string) {
  const novoPedido: pedido = {
    prato: prato,
    cliente: cliente
  }
  listaDePedidos.push(novoPedido)
  console.log("Pedidos: ", listaDePedidos)
}
cadastrarPedido(prato, cliente)

//a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
const produtoAdicionar = process.argv[4]
const valor = Number(process.argv[5])

type produto = {
  nome: string,
  valor: number
}
const listaDeProdutos: Array<produto> = [
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
]
function cadastrarProduto(produto: string, valor: number) {
  const novoProduto: produto = {
    nome: produto,
    valor: valor
  }
  listaDeProdutos.push(novoProduto)
  console.log("Produtos:", listaDeProdutos)
}
cadastrarProduto(produtoAdicionar, valor)

// b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
const buscarProduto = process.argv[6]

function valorProduto(produto: string) {
  let valor: number = 0
  for (let prato of listaDeProdutos) {
    if (prato.nome.includes(produto)) {
      valor = prato.valor
    }
  }
  console.log("Valor do produto buscado: ", valor ? valor : "produto não encontrado")
}
valorProduto(buscarProduto)

// d) Escreva uma função que determine o lucro do restaurante. 
const gastos = Number(process.argv[7])
const vendas = Number(process.argv[8])
function calcularLucro(gastosRestaurante: number, valorDasVendas: number) {
  const lucro:number = Number((valorDasVendas - gastosRestaurante).toFixed(2))
  if (lucro <= 0) {
    console.log(`O lucro deste período foi de R$ ${red(lucro)}`)
  } else {
    console.log(`O lucro deste período foi de R$ ${green(lucro)}`)
  }
}
calcularLucro(gastos, vendas)