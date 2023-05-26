const {Router} = require('express')
const router = Router()
const {createUser, logUser, getAllUsers} = require('../controllers/users.controllers')

router.post('/users', createUser)
router.post('/users/login', logUser)
router.get('/users', getAllUsers)

module.exports = router