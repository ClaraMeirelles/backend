"use strict";
const string = process.argv[2];
function reverteString(string) {
    let stringRevertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringRevertida += string[i];
    }
    console.log("String revertida: ", stringRevertida);
}
reverteString(string);
//# sourceMappingURL=index.js.map