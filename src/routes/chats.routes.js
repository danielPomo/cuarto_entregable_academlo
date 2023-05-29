const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createChatValidator, createGroupChatValidator, getUsersAndMessagesByChatIdValidator, deleteChatValidator} = require('../validators/chats.validator')
const {createChat, createGroupChat, getUsersAndMessagesByChatId, deleteChat} = require('../controllers/chats.controllers')


router.post('/chats', createChatValidator, authenticate, createChat)
router.post('/chats/groups',createGroupChatValidator, authenticate, createGroupChat)
router.get('/chats/:id/users/messages', getUsersAndMessagesByChatIdValidator, authenticate, getUsersAndMessagesByChatId)
router.delete('/chats/:chatId', deleteChatValidator, authenticate, deleteChat)

module.exports = router