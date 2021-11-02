import cors from 'cors'
import express, { Request, Response } from 'express'
import { contas, users } from './data'
import { conta, transacao, user } from './types'

const app = express()
app.use(express.json())
app.use(cors())

// apagar======
app.get("/usuario", (req, res) => {
    res.send(users)
})
app.get("/conta", (req, res) => {
    res.send(contas)
})
// =====apagar

// verificar conta: saldo/extrato
app.get("/conta/:cpf/:nome", (req: Request, res: Response) => {
    try {
        const cpf = req.params.cpf as string
        const nome = req.params.nome as string
        users.forEach((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                return user
            } else if (user.nome === nome) {
                res.statusCode = 400
                throw new Error("CPF incorreto! favor verificar!")
            } else if (user.cpf === cpf) {
                res.statusCode = 400
                throw new Error("Nome incorreto! favor verificar!")
            }
        })
        const conta = contas.filter((conta) => {
            if (conta.cpf === cpf) {
                return conta
            }
        })

        if (!conta) {
            res.statusCode = 404
            throw new Error("Conta não encontrada! Verifique os dados!")
        }
        res.send(conta)

    } catch (err: any) {
        res.send(err.message)
    }
})

// criar novo usuário e conta
app.post("/usuario", (req: Request, res: Response) => {
    try {
        const { nome, cpf, nascimento } = req.body
        if (!nome || !cpf || !nascimento) {
            res.statusCode = 400
            throw new Error("Dados incompletos!")
        }
        users.filter((user) => {
            if (user.cpf === cpf) {
                res.statusCode = 400
                throw new Error("CPF já cadastrado!")
            }
        })
        const novoUsuario: user = {
            nome,
            cpf,
            nascimento
        }
        const novaConta: conta = {
            cpf,
            saldo: 0,
            extrato: []
        }
        users.push(novoUsuario)
        contas.push(novaConta)
        res.send("Conta Criada!")
    } catch (err: any) {
        res.send(err.message)
    }
})

// transferência entre contas
app.put("/conta/transferir/:cpf/:nome", (req: Request, res: Response) => {
    try {
        const { valor, contaReceber } = req.body
        let data: string = req.body.data
        const { cpfRecebedor, nomeRecebedor } = contaReceber
        const { cpf, nome } = req.params
        const dataAtual = new Date()
        if (!cpf || !nome) {
            res.statusCode = 400
            throw new Error("Dados faltantes do pagador!")
        }
        if (!cpfRecebedor || !nomeRecebedor) {
            res.statusCode = 400
            throw new Error("Dados faltantes do recebedor!")
        }
        if (!valor) {
            res.statusCode = 400
            throw new Error("Por favor, insira o valor da transferência!")
        }
        if (!data) {
            data = dataAtual.toLocaleDateString()
        } else if (data < dataAtual.toLocaleDateString()) {
            res.statusCode = 400
            throw new Error("Não é possível fazer a transferência numa data anterior à atual!")
        }
        const novaTransacao: transacao = {
            valor: (valor * -1),
            data
        }
        let pagador: user | undefined
        let recebedor: user | undefined
        users.filter((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                pagador = user
            } else if ((user.nome === nome && user.cpf !== cpf) || (user.cpf === cpf && user.nome !== nome)) {
                res.statusCode = 400
                throw new Error("Nome ou CPF do pagador incorretos!")
            } else if (user.nome === nomeRecebedor && user.cpf === cpfRecebedor) {
                recebedor = user
            } else if ((user.nome === nomeRecebedor && user.cpf !== cpfRecebedor) || (user.cpf === cpfRecebedor && user.nome !== nomeRecebedor)) {
                res.statusCode = 400
                throw new Error("Nome ou CPF do recebedor incorretos!")
            }
        })
        if (!pagador) {
            res.statusCode = 400
            throw new Error("Verifique seus dados!")
        } else {
            if (!recebedor) {
                res.statusCode = 400
                throw new Error("Verifique os dados do recebedor!")
            } else {
                contas.filter((conta) => {
                    if (conta.cpf === cpf) {
                        conta.saldo -= valor
                        conta.extrato.push(novaTransacao)
                    }
                    if (conta.cpf === cpfRecebedor) {
                        conta.saldo += valor
                        conta.extrato.push({ valor, data })
                    }
                })
            }
        }
        res.send(`Valor ${valor} transferido da conta de ${nome} para a conta de ${nomeRecebedor} em ${data}`)
    } catch (err: any) {
        res.send(err.message)
    }
})

// transações: pgto de conta/saque/depósito
app.put("/conta/:cpf/:nome", (req: Request, res: Response) => {
    try {
        const { cpf, nome } = req.params
        const { valor, data } = req.body
        const novaTransacao: transacao = {
            valor,
            data
        }
        users.filter((user) => {
            if (user.nome === nome && user.cpf === cpf) {
                return user
            } else if ((user.nome === nome && user.cpf !== cpf) || (user.cpf === cpf && user.nome !== nome)) {
                res.statusCode = 404
                throw new Error("Nome ou CPF incorretos!")
            }
        })
        if (valor && data) {
            contas.filter((conta) => {
                if (conta.cpf === cpf) {
                    conta.extrato.push(novaTransacao)
                    conta.saldo += valor
                    if (valor > 0) {
                        res.send(`Foi depositado o valor ${valor} na conta de ${nome}. Saldo atual: ${conta.saldo}`)
                    } else {
                        res.send(`Foi descontado o valor ${valor} na conta de ${nome}. Saldo atual: ${conta.saldo}`)
                    }
                }
            })
        }
    } catch (err: any) {
        res.send(err.message)
    }
})

app.listen(3003, () => {
    console.log("server rodando na porta 3003")
})
