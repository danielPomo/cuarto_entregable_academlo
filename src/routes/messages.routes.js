const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createANewMessage} = require('../controllers/messages.controllers')

router.post('/chats/:chatId/messages', authenticate, createANewMessage)

module.exports = router