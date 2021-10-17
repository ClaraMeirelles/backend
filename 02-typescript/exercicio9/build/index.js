"use strict";
const dna = "ATTGCTGCGCATTAACGACGCGTA";
let rna = "";
const comparar = "UAACGACGCGUAAUUGCUGCGCAU";
function transcricaoRna(dna) {
    for (let caractere of dna) {
        if (caractere === "A") {
            rna += "U";
        }
        else if (caractere === "T") {
            rna += "A";
        }
        else if (caractere === "C") {
            rna += "G";
        }
        else if (caractere === "G") {
            rna += "C";
        }
    }
    console.log(rna === comparar);
    console.log("RNA: ", rna);
}
transcricaoRna(dna);
//# sourceMappingURL=index.js.map