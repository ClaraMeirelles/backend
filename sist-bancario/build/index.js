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
app.get("/usuario", (req, res) => {
    res.send(data_1.users);
});
app.get("/conta", (req, res) => {
    res.send(data_1.contas);
});
app.get("/conta/:cpf/:nome", (req, res) => {
    try {
        const cpf = req.params.cpf;
        const nome = req.params.nome;
        data_1.users.forEach((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                return user;
            }
            else if (user.nome === nome) {
                res.statusCode = 400;
                throw new Error("CPF incorreto! favor verificar!");
            }
            else if (user.cpf === cpf) {
                res.statusCode = 400;
                throw new Error("Nome incorreto! favor verificar!");
            }
        });
        const conta = data_1.contas.filter((conta) => {
            if (conta.cpf === cpf) {
                return conta;
            }
        });
        if (!conta) {
            res.statusCode = 404;
            throw new Error("Conta não encontrada! Verifique os dados!");
        }
        res.send(conta);
    }
    catch (err) {
        res.send(err.message);
    }
});
app.post("/usuario", (req, res) => {
    try {
        const { nome, cpf, nascimento } = req.body;
        if (!nome || !cpf || !nascimento) {
            res.statusCode = 400;
            throw new Error("Dados incompletos!");
        }
        data_1.users.filter((user) => {
            if (user.cpf === cpf) {
                res.statusCode = 400;
                throw new Error("CPF já cadastrado!");
            }
        });
        const novoUsuario = {
            nome,
            cpf,
            nascimento
        };
        const novaConta = {
            cpf,
            saldo: 0,
            extrato: []
        };
        data_1.users.push(novoUsuario);
        data_1.contas.push(novaConta);
        res.send("Conta Criada!");
    }
    catch (err) {
        res.send(err.message);
    }
});
app.put("/conta/transferir/:cpf/:nome", (req, res) => {
    try {
        const { valor, contaReceber } = req.body;
        let data = req.body.data;
        const { cpfRecebedor, nomeRecebedor } = contaReceber;
        const { cpf, nome } = req.params;
        const dataAtual = new Date();
        if (!cpf || !nome) {
            res.statusCode = 400;
            throw new Error("Dados faltantes do pagador!");
        }
        if (!cpfRecebedor || !nomeRecebedor) {
            res.statusCode = 400;
            throw new Error("Dados faltantes do recebedor!");
        }
        if (!valor) {
            res.statusCode = 400;
            throw new Error("Por favor, insira o valor da transferência!");
        }
        if (!data) {
            data = dataAtual.toLocaleDateString();
        }
        else if (data < dataAtual.toLocaleDateString()) {
            res.statusCode = 400;
            throw new Error("Não é possível fazer a transferência numa data anterior à atual!");
        }
        const novaTransacao = {
            valor: (valor * -1),
            data
        };
        let pagador;
        let recebedor;
        data_1.users.filter((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                pagador = user;
            }
            else if ((user.nome === nome && user.cpf !== cpf) || (user.cpf === cpf && user.nome !== nome)) {
                res.statusCode = 400;
                throw new Error("Nome ou CPF do pagador incorretos!");
            }
            else if (user.nome === nomeRecebedor && user.cpf === cpfRecebedor) {
                recebedor = user;
            }
            else if ((user.nome === nomeRecebedor && user.cpf !== cpfRecebedor) || (user.cpf === cpfRecebedor && user.nome !== nomeRecebedor)) {
                res.statusCode = 400;
                throw new Error("Nome ou CPF do recebedor incorretos!");
            }
        });
        if (!pagador) {
            res.statusCode = 400;
            throw new Error("Verifique seus dados!");
        }
        else {
            if (!recebedor) {
                res.statusCode = 400;
                throw new Error("Verifique os dados do recebedor!");
            }
            else {
                data_1.contas.filter((conta) => {
                    if (conta.cpf === cpf) {
                        conta.saldo -= valor;
                        conta.extrato.push(novaTransacao);
                    }
                    if (conta.cpf === cpfRecebedor) {
                        conta.saldo += valor;
                        conta.extrato.push({ valor, data });
                    }
                });
            }
        }
        res.send(`Valor ${valor} transferido da conta de ${nome} para a conta de ${nomeRecebedor} em ${data}`);
    }
    catch (err) {
        res.send(err.message);
    }
});
app.put("/conta/:cpf/:nome", (req, res) => {
    try {
        const { cpf, nome } = req.params;
        const { valor, data } = req.body;
        const novaTransacao = {
            valor,
            data
        };
        data_1.users.filter((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                return user;
            }
            else if ((user.nome === nome && user.cpf !== cpf) || (user.cpf === cpf && user.nome !== nome)) {
                res.statusCode = 404;
                throw new Error("Nome ou CPF incorretos!");
            }
        });
        if (valor && data) {
            data_1.contas.filter((conta) => {
                if (conta.cpf === cpf) {
                    conta.extrato.push(novaTransacao);
                    conta.saldo += valor;
                    if (valor > 0) {
                        res.send(`Foi depositado o valor ${valor} na conta de ${nome}. Saldo atual: ${conta.saldo}`);
                    }
                    else {
                        res.send(`Foi descontado o valor ${valor} na conta de ${nome}. Saldo atual: ${conta.saldo}`);
                    }
                }
            });
        }
    }
    catch (err) {
        res.send(err.message);
    }
});
app.listen(3003, () => {
    console.log("server rodando na porta 3003");
});
//# sourceMappingURL=index.js.map