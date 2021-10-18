import cors from 'cors'
import express from 'express'
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

// Endpoint 2 - Buscar país por id

app.get('/paises/:id', (req, res) => {
    try {
        if (!Number(req.params.id)) {
            res.statusCode = 400
            throw new Error("Insira um id válido")
        }
        const resposta: country | undefined = countries.find((country) => country.id === Number(req.params.id))
        if (resposta){
            res.status(200).send(resposta)
        } else {
            res.statusCode = 404
            throw new Error("país não encontrado!")
        }
    } catch(err: any) {
        res.send(err.message)
    }
})