const ano: number = Number(process.argv[2])
const periodo: string = process.argv[3]

function verificaPeriodoHistorico(ano: number, periodo: string): void {
  if (periodo && periodo.toLowerCase() === "ac") {
    if (ano > 4000) {
      console.log("Pré história escrita")
    } else {
      console.log("Idade Antiga")
    }
  } else if (periodo && periodo.toLowerCase() === "dc" || ano && !periodo) {
    if (ano < 476) {
      console.log("Idade Antiga")
    } else if (ano >= 476 && ano < 1453) {
      console.log("Idade Média")
    } else if (ano >= 1453 && ano < 1789) {
      console.log("Idade Moderna")
    } else if (ano >= 1789) {
      console.log("Idade Contemporânea")
    }
  } else {
    console.log("Um ou mais parâmetros são inválidos")
  }
}

verificaPeriodoHistorico(ano, periodo)