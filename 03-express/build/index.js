"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("server rodando na porta 3003");
});
app.get('/paises', (req, res) => {
    if (data_1.countries) {
        res.status(200).send(data_1.countries);
    }
    else {
        res.status(400).send("Ocorreu um erro");
    }
});
app.get('/paises/busca/', (req, res) => {
    const nome = String(req.query.pais);
    const capital = String(req.query.capital);
    const continente = String(req.query.continente);
    const filtroPaises = [];
    try {
        if (nome) {
            const filtroPaises = data_1.countries.filter((pais) => pais.name.toLowerCase().includes(nome.toLowerCase()));
            if (filtroPaises) {
                res.status(200).send(filtroPaises);
            }
            else {
                res.statusCode = 404;
                throw new Error("País não encontrado");
            }
        }
        if (capital) {
            const filtroPaises = data_1.countries.filter((pais) => pais.capital.toLowerCase().includes(capital.toLowerCase()));
            if (filtroPaises) {
                res.status(200).send(filtroPaises);
            }
            else {
                res.statusCode = 404;
                throw new Error("País não encontrado");
            }
        }
        if (continente) {
            const filtroPaises = data_1.countries.filter((pais) => pais.continent.toLowerCase().includes(continente.toLowerCase()));
            if (filtroPaises) {
                res.status(200).send(filtroPaises);
            }
            else {
                res.statusCode = 404;
                throw new Error("País não encontrado");
            }
        }
    }
    catch (err) {
        res.send(err.message);
    }
});
app.get('/paises/:id', (req, res) => {
    try {
        if (!Number(req.params.id)) {
            res.statusCode = 400;
            throw new Error("Insira um id válido");
        }
        const resposta = data_1.countries.find((country) => country.id === Number(req.params.id));
        if (resposta) {
            res.status(200).send(resposta);
        }
        else {
            res.statusCode = 404;
            throw new Error("país não encontrado!");
        }
    }
    catch (err) {
        res.send(err.message);
    }
});
//# sourceMappingURL=index.js.map