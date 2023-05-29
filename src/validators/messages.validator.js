const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const createANewMessageValidator = [
    check('content', 'Error en el campo content')
        .exists().withMessage('Debe especificarse el campo content')
        .notEmpty().withMessage('El campo content no puede estar vacío')
        .isString().withMessage('El tipo de dato del campo content debe ser una cadena de texto')
        .isLength({min: 1}).withMessage('El campo content debe tener como máximo 35 caracteres'),
    check('createdBy', 'Error en el campo createdBy')
        .exists().withMessage('Para crear mensaje se debe enviar obligatoriamente la propiedad createdBy')
        .notEmpty().withMessage('El campo createdBy no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo createdBy debe ser un número entero'),
    check('chatId', 'Error en el campo chatId')
        .exists().withMessage('Para crear un mensaje se debe enviar obligatoriamente la propiedad chatId')
        .notEmpty().withMessage('El campo chatId no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo chatId debe ser un número entero'),
    validateResult
]

module.exports = {createANewMessageValidator}