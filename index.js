import express from 'express'

const app = express()

//somar
app.get("/api/v1/somar", (req, res) => {
   //const num1 = req.query.num1
   //const num2 = req.query.num2
    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({ message: resultado})
        //res.send({ message: resultado})
})
//subtrair
app.get("/api/v1/sub", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) - Number(num2)

    res.status(200).send({ message: resultado })
})

//mult
app.get("/api/v1/mult", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)

    res.status(200).send({ message: resultado})
})
//div
app.get("/api/v1/div", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({ message: resultado})
    
})
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
 })