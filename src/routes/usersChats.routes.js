const {Router} = require('express')
const router = Router()
const {getAllChatsByUserId} = require('../controllers/usersChats.controllers')

router.get('/users/:id/chats', getAllChatsByUserId)

module.exports = router