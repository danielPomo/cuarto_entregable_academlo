const {Router} = require('express')
const router = Router()
const {createChatTypeValidator} = require('../validators/chatTypes.validator')
const {getAllChatTypes, createChatType} = require('../controllers/chatTypes.controllers')

router.post('/chats/types',createChatTypeValidator, createChatType)
router.get('/chats/types', getAllChatTypes)

module.exports = router