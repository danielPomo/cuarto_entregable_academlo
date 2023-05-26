require('dotenv').config()
const express = require('express')
const db = require('./utils/database')
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('GET  a la raiz')
})

// db.authenticate()
// .then( () => {console.log("La base de datos se ha conectado de modo exitoso")})
// .catch( (err) => {console.log(err)} )



app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
