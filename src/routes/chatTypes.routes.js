const {Router} = require('express')
const router = Router()
const {getAllChatTypes, createChatType} = require('../controllers/chatTypes.controllers')

router.post('/chats/types', createChatType)
router.get('/chats/types', getAllChatTypes)

module.exports = router