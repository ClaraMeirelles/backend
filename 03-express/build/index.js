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
app.get('/paises/busca', (req, res) => {
    const nome = req.query.nome;
    const capital = req.query.capital;
    const continente = req.query.continente;
    console.log(nome);
    console.log(capital);
    console.log(continente);
    let filtroPaises = data_1.countries;
    try {
        if (nome) {
            console.log("entrou Nome");
            filtroPaises = filtroPaises.filter((pais) => pais.name.toLowerCase().includes(String(nome).toLowerCase()));
        }
        if (capital) {
            console.log("entrou Capital");
            filtroPaises = filtroPaises.filter((pais) => pais.capital.toLowerCase().includes(String(capital).toLowerCase()));
        }
        if (continente) {
            console.log("entrou continente");
            filtroPaises = filtroPaises.filter((pais) => pais.continent.toLowerCase().includes(String(continente).toLowerCase()));
        }
        res.status(200).send(filtroPaises);
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
app.put("/paises/:id", (req, res) => {
    const id = Number(req.params.id);
    const nome = String(req.body.nome);
    const capital = String(req.body.capital);
    console.log(nome);
    console.log(capital);
    let paisModificado;
    try {
        data_1.countries.map((pais) => {
            if (pais.id === id) {
                if (nome) {
                    pais.name = nome;
                }
                if (capital) {
                    pais.capital = capital;
                }
            }
            paisModificado = pais;
            res.send(paisModificado);
        });
        if (!nome || !capital) {
            res.status(400).send("Envie os parâmetros a serem modificados");
        }
    }
    catch (err) {
        res.send(err);
    }
});
//# sourceMappingURL=index.js.map