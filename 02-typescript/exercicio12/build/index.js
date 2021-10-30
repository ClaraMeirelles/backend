"use strict";
const palavra = process.argv[2];
const tamanhoPalavra = palavra.length;
function calculaFatorial(tamanhoPalavra) {
    let fatorial = tamanhoPalavra;
    for (let i = tamanhoPalavra - 1; i > 0; i--) {
        fatorial *= i;
    }
    if (tamanhoPalavra === 1 || tamanhoPalavra === 0) {
        fatorial = 1;
        return 1;
    }
    console.log(fatorial);
    return tamanhoPalavra * calculaFatorial(tamanhoPalavra - 1);
}
calculaFatorial(tamanhoPalavra);
//# sourceMappingURL=index.js.map