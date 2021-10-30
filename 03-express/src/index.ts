import cors from 'cors'
import express, { query } from 'express'
import { countries } from './data'
import { country } from './types'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("server rodando na porta 3003")
})

// Endpoint 1 - Buscar todos os países
app.get('/paises', (req, res) => {
    if (countries) {
        res.status(200).send(countries)
    } else {
        res.status(400).send("Ocorreu um erro")
    }
})

// Endpoint 3 - Busca com filtros

app.get('/paises/busca', (req, res) => {
    const nome = req.query.nome
    const capital = req.query.capital
    const continente = req.query.continente
    // não rolou
    // repensar esse
    console.log(nome)
    console.log(capital)
    console.log(continente)
    let filtroPaises: country[] = countries
    try {
        if (nome) {
            console.log("entrou Nome")
            filtroPaises = filtroPaises.filter((pais) => pais.name.toLowerCase().includes(String(nome).toLowerCase()))
        }
        if (capital) {
            console.log("entrou Capital")
            filtroPaises = filtroPaises.filter((pais) => pais.capital.toLowerCase().includes(String(capital).toLowerCase()))
        }

        if (continente) {
            console.log("entrou continente")
            filtroPaises = filtroPaises.filter((pais) => pais.continent.toLowerCase().includes(String(continente).toLowerCase()))
        }
        res.status(200).send(filtroPaises)
    } catch (err: any) {
        res.send(err.message)
    }
})

// Endpoint 2 - Buscar país por id

app.get('/paises/:id', (req, res) => {
    try {
        if (!Number(req.params.id)) {
            res.statusCode = 400
            throw new Error("Insira um id válido")
        }
        const resposta: country | undefined = countries.find((country) => country.id === Number(req.params.id))
        if (resposta) {
            res.status(200).send(resposta)
        } else {
            res.statusCode = 404
            throw new Error("país não encontrado!")
        }
    } catch (err: any) {
        res.send(err.message)
    }
})

app.put("/paises/:id", (req, res) => {
    const id = Number(req.params.id)
    const nome = req.body.nome
    const capital = req.body.capital
    const auth = req.headers.authorization as string
    try {
        if (auth && auth.length >= 10) {
            countries.forEach((pais) => {
                
                if (pais.id === id) {
                    if (nome) { pais.name = nome }
                    if (capital) { pais.capital = capital }
                }
            })
            if (!nome || !capital) {
                res.status(400).send("Envie os parâmetros a serem modificados")
            } else {
                res.send("país modificado")
            }
        } else {
            res.statusCode = 401
            throw new Error("Autorização necessária!");
        }
    } catch (err: any) {
        res.send(err)
    }
})

// Endpoint 5 delete

app.delete("/paises/:id", (req, res) => {
    const id = Number(req.params.id)
    const auth = req.headers.authorization as string
    let deletar: number | boolean = false
    try {
        if (auth.length >= 10) {
            countries.map((pais) => {
                if (pais.id === id) {
                    deletar = countries.indexOf(pais)
                    countries.splice(deletar, 1)
                }

            })
            if (!deletar) {
                throw new Error("País não encontrado")
            }
            const paisRemovido = countries[id].name

            res.send(`${paisRemovido} foi removido`)
        }
    } catch (err: any) {
        res.send(err)
    }
})

app.post("/paises/", (req, res) => {
    const nome = req.body.name
    const capital = req.body.capital
    const continente = req.body.continent
    const auth = req.headers.authorization as string
    try {
        if (auth && auth.length >= 10) {
            countries.map((pais) => {
                if (pais.name === nome) {
                    res.statusCode = 400
                    throw new Error(`Já existe um país na lista com este nome! ID: ${pais.id}, ${pais.name}`);
                }
            })
            if (nome && capital && continente) {
                let novoPais: country = {
                    id: Date.now(),
                    name: nome,
                    capital: capital,
                    continent: continente
                }
                countries.push(novoPais)
            } else {
                res.statusCode = 400
                throw new Error("Parâmetros incompletos!");
            }
            res.send(`Pais adicionado!`)
        } else {
            res.statusCode = 401
            throw new Error("Autorização necessária");
        }
    } catch (err: any) {
        res.send(err.message)
    }
})