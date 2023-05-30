require('dotenv').config()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
const apiRoutes = require('./routes/index')
const errorRoutes = require('./routes/errors.routes')

app.use(cors())
const app = express()
app.use(express.json())

apiRoutes(app)

errorRoutes(app)

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
