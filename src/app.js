require('dotenv').config()
const PORT = process.env.PORT || 8000

const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
initModels()
const chatTypesRoutes = require('./routes/chatTypes.routes')
const usersRoutes = require('./routes/users.routes')
const chatsRoutes = require('./routes/chats.routes')



const app = express()

db.sync()
.then( () => console.log('Base de datos sincronizada') )
.catch( (err) => console.log(err) )


app.use(express.json())
app.use(chatTypesRoutes)
app.use(usersRoutes)
app.use(chatsRoutes)



app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
