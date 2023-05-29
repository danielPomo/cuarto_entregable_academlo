const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const getAllChatsByUserIdValidator = [
    check('id', 'Error en el campo id')
    .exists().withMessage('Se debe enviar obligatoriamente la propiedad id')
    .notEmpty().withMessage('El campo id no debe estar vacío')
    .isInt().withMessage('El tipo de dato del campo id debe ser un número entero'),
validateResult
]

module.exports = {getAllChatsByUserIdValidator}