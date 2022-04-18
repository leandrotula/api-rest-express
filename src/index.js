const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

const usuario = {
    name: "Juan",
    apellido: "Perez"
}

app.get('/usuarios', (req, res) => {
    res.send(usuario);
})

app.listen(port, () => {
  console.log(`Servidor proveedor de datos corriendo en puerto ${port}`)
})