const {Router} = require('express')
const router = Router()
const {createANewMessageValidator} = require('../validators/messages.validator')
const authenticate = require('../middlewares/authentication.middleware')
const {createANewMessage} = require('../controllers/messages.controllers')

router.post('/chats/:chatId/messages', createANewMessageValidator, authenticate, createANewMessage)

module.exports = router