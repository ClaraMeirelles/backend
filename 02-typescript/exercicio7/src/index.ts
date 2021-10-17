// "verão" || "inverno"||"banho"||"íntima"
const { red } = require("chalk")

type produto = {
  nome: string,
  tipo: string,
  valor: number
  desconto: number
}

const bikini: produto = {
  nome: "bikini",
  tipo: "verao",
  valor: 60,
  desconto: 5
}
const cueca: produto = {
  nome: "cueca",
  tipo: "íntima",
  valor: 15,
  desconto: 7
}
const abrigo: produto = {
  nome: "abrigo",
  tipo: "inverno",
  valor: 150,
  desconto: 10
}
const toalha: produto = {
  nome: "toalha",
  tipo: "banho",
  valor: 30,
  desconto: 4
}

const produtos = [bikini, cueca, abrigo, toalha]
const produtosBlackFriday: any = []
function calculaBlackFriday(produtos: Array<produto>) {
  produtos.map((produto) => {
    const produtoBlack = {
      ...produto,
      valorComDesconto: (produto.valor * ((100 - produto.desconto) / 100)).toFixed(2)
    }
    produtosBlackFriday.push(produtoBlack)
  }
  )

}

calculaBlackFriday(produtos)
console.table(produtosBlackFriday)

// falta imprimir o valor do desconto em vermelho, eu acho