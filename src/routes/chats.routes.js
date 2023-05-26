const {Router} = require('express')
const router = Router()
const authenticate = require('../middlewares/authentication.middleware')
const {createChat} = require('../controllers/chats.controllers')

router.post('/chats', authenticate, createChat)

module.exports = router