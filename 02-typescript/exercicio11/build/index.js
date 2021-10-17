"use strict";
const numero = Number(process.argv[2]);
function calculaFatorial(numero) {
    if (numero === 1 || numero === 0) {
        return 1;
    }
    return numero * calculaFatorial(numero - 1);
}
calculaFatorial(numero);
//# sourceMappingURL=index.js.map