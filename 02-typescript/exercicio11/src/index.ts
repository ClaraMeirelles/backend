const numero: number = Number(process.argv[2])

function calculaFatorial(numero: number): any {
  // let fatorial: number = numero
  // for (let i = numero-1; i> 0; i--){
  //   fatorial *= i
  // }
  if (numero === 1 || numero === 0) {
    // fatorial = 1
    return 1
  }
  // console.log(fatorial)
  return numero * calculaFatorial(numero - 1)
}

calculaFatorial(numero)