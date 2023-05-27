const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createChat, createGroupChat} = require('../controllers/chats.controllers')

router.post('/chats', authenticate, createChat)
router.post('/chats/groups', authenticate, createGroupChat)

module.exports = router