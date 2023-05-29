const {Router} = require('express')
const router = Router()
const {getAllChatsByUserIdValidator} = require('../validators/usersChatsValidator')
const {getAllChatsByUserId} = require('../controllers/usersChats.controllers')

router.get('/users/:id/chats',getAllChatsByUserIdValidator, getAllChatsByUserId)

module.exports = router