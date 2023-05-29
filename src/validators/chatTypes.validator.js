const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const createChatTypeValidator = [
    check('chatType', 'Error en el campo chatType')
        .exists().withMessage('Para crear un usuario se debe enviar obligatoriamente la propiedad chatType')
        .notEmpty().withMessage('El campo chatType no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo chatType debe ser un número entero'),
    validateResult
]

module.exports = {createChatTypeValidator}