const {Router} = require('express')
const router = Router()
const {createUser, logUser, getAllUsers} = require('../controllers/users.controllers')
const {createUserValidator, logUserValidator} = require('../validators/users.validator')

router.post('/users',createUserValidator, createUser)
router.post('/users/login', logUserValidator, logUser)
router.get('/users', getAllUsers)

module.exports = router