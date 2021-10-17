"use strict";
const num1 = process.argv[2];
const num2 = process.argv[3];
const operacaoNumeros = (num1, num2) => {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    let maior;
    if (num1 > num2) {
        maior = num1;
    }
    else {
        maior = num2;
    }
    console.log(`O numero mais alto é ${maior}`);
};
operacaoNumeros(num1, num2);
//# sourceMappingURL=index.js.map