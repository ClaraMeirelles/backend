// Para realizar este exercício, você vai ter que utilizar o exercício com o código do cálculo do fatorial. Então tenha certeza de que ele esteja funcionando corretamente! Uma aplicação interessante dele é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra mesa são: ames, maes, meas, emsa, smea e muitos outros. 

//  a) A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para mesa, a quantidade é 4! = 24. Escreva uma função que receba uma palavra e devolva a quantidade de anagramas que ela possui.

const palavra = process.argv[2]
const tamanhoPalavra: number = palavra.length
function calculaFatorial(tamanhoPalavra: number): any {
  let fatorial: number = tamanhoPalavra
  for (let i = tamanhoPalavra-1; i> 0; i--){
    fatorial *= i
  }
  if (tamanhoPalavra === 1 || tamanhoPalavra === 0) {
    fatorial = 1
    return 1
  }
  console.log(fatorial)
  return tamanhoPalavra * calculaFatorial(tamanhoPalavra - 1)
}

calculaFatorial(tamanhoPalavra)