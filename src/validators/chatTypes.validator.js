const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const createChatTypeValidator = [
    check('chatType', 'Error en el campo chatType')
        .exists().withMessage('Para crear un tipo de conversacion se debe enviar obligatoriamente la propiedad chatType')
        .notEmpty().withMessage('El campo chatType no debe estar vacío')
        .isString().withMessage('El tipo de dato del campo chatType debe ser una cadena de texto, y puede tomar dos valores: Pareja o Grupo')
        .isLength({min: 5, max: 6}),
        validateResult
]

module.exports = {createChatTypeValidator}