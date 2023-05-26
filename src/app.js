const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('GET  a la raiz')
})

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
