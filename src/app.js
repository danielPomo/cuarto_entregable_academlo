require('dotenv').config()
const express = require('express')
// const Users = require('./models/users.model.js')
// const Messages = require('./models/messages.model.js')
// const ChatTypes = require('./models/chatTypes.model.js')
// const Chats = require('./models/chats.model.js')
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('GET  a la raiz')
})

db.sync()
.then( () => console.log('Base de datos sincronizada') )
.catch( (err) => console.log(err) )



app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
