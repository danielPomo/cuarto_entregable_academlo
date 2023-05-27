const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createChatValidator, createGroupChatValidator} = require('../validators/chats.validator')
const {createChat, createGroupChat, getUsersAndMessagesByChatId, deleteChat} = require('../controllers/chats.controllers')


router.post('/chats', createChatValidator, authenticate, createChat)
router.post('/chats/groups',createGroupChatValidator, authenticate, createGroupChat)
router.get('/chats/:id/users/messages', authenticate, getUsersAndMessagesByChatId)
router.delete('/chats/:chatId', authenticate, deleteChat)

module.exports = router