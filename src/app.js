require('dotenv').config()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
const apiRoutes = require('./routes/index')
const errorRoutes = require('./routes/errors.routes')

const app = express()
app.use(cors())
app.use(express.json())

db.sync()
    .then( () => console.log("Base de datos sincronizada") )
    .catch( (error) => console.log(error) )


apiRoutes(app)

errorRoutes(app)

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
