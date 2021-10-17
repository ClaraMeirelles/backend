
const dna: string = process.argv[2]
let rna: string = ""

function transcricaoRna(dna: string) {
  for (let caractere of dna) {
    if (caractere === "A") {
      rna += "U"
    } else if (caractere === "T") {
      rna += "A"
    } else if (caractere === "C") {
      rna += "G"
    } else if (caractere === "G") {
      rna += "C"
    }
  }
  console.log("RNA transcrito: ",rna)
}

transcricaoRna(dna)