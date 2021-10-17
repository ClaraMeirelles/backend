const num1:number = Number(process.argv[2])
const num2:number = Number(process.argv[3])

const operacaoNumeros = (num1:number, num2: number): void =>{
  console.log(num1+num2)
  console.log(num1-num2)
  console.log(num1*num2)
  let maior:number
  if (num1>num2){
    maior = num1
  } else{
    maior = num2
  }
  console.log(`O numero mais alto é ${maior}`)
}

operacaoNumeros(num1, num2)