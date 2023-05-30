require('dotenv').config()
const PORT = process.env.PORT || 8000

const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
const chatTypesRoutes = require('./routes/chatTypes.routes')
const usersRoutes = require('./routes/users.routes')
const chatsRoutes = require('./routes/chats.routes')
const usersChatsRoutes = require('./routes/usersChats.routes')
const messagesRoutes = require('./routes/messages.routes')
const logError = require('./middlewares/logError.middleware')
const ormErrorHandler = require('./middlewares/ormErrorHandler.middleware')
const errorHandler = require('./middlewares/errorHandler.middleware')



const app = express()

db.sync()
.then( () => console.log('Base de datos sincronizada') )
.catch( (err) => console.log(err) )


app.use(express.json())
app.use(chatTypesRoutes)
app.use(usersRoutes)
app.use(chatsRoutes)
app.use(usersChatsRoutes)
app.use(messagesRoutes)

app.use(logError, ormErrorHandler, errorHandler)

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'La ruta de la petición no ha sido encontrada'
    })
})



app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
