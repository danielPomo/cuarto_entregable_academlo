const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createChat, createGroupChat, getUsersAndMessagesByChatId, deleteChat} = require('../controllers/chats.controllers')

router.post('/chats', authenticate, createChat)
router.post('/chats/groups', authenticate, createGroupChat)
router.get('/chats/:id/users/messages', authenticate, getUsersAndMessagesByChatId)
router.delete('/chats/:chatId', authenticate, deleteChat)

module.exports = router