import express from 'express'
import bancoDeDados from './repository/index.js'

//server ou app
// app.get("/api/v1/somar", (req, res) => {
//     console.log(req.query)
//     const num1 = Number(req.query.num1)
//     const num2 = Number(req.query.num2)
//     const resultado = num1 + num2
    
//     res.send({resultado})
// })
const app = express()
//configura uma rota para o metado HTTP GET na raiz ("/") do aplicativo.
app.get("/", (req, res) => {
    res.send({message: "Hello World"})
})
/////////////////////////////////////////
app.get("/api/pessoal/:id", (req, res) => {
    const id = req.params.id

    const pessoa = bancoDeDados.find(it => it.id == id)

    res.send({ pessoa })
})
app.get("/api/pessoa", (req, res) => {
const { id, name } = req.query

        bancoDeDados.push({id, name})
        console.log(bancoDeDados)

        res.send({ message : "pessoa criada com sucesso"})
})


app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})