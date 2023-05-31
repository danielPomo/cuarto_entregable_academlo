const {Router} = require('express')
const router = Router()
const {createChatTypeValidator} = require('../validators/chatTypes.validator')
const {getAllChatTypes, createChatType} = require('../controllers/chatTypes.controllers')
const authenticate = require('../middlewares/authentication.middleware')

router.post('/chats/types', authenticate, createChatTypeValidator, createChatType)
router.get('/chats/types', getAllChatTypes)

module.exports = router