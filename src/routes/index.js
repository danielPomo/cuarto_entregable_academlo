const chatTypesRoutes = require('../routes/chatTypes.routes')
const usersRoutes = require('../routes/users.routes')
const chatsRoutes = require('../routes/chats.routes')
const usersChatsRoutes = require('../routes/usersChats.routes')
const messagesRoutes = require('../routes/messages.routes')


const apiRoutes = (app) => {
    app.use(chatTypesRoutes)
    app.use(usersRoutes)
    app.use(chatsRoutes)
    app.use(usersChatsRoutes)
    app.use(messagesRoutes)
}

module.exports = apiRoutes