const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const createChatValidator = [
    check('title', 'Error en el campo title')
        .isString().withMessage('El tipo de dato del campo title debe ser una cadena de texto').optional()
        .isLength({max: 35}).withMessage('El campo title debe tener como máximo 35 caracteres'),
    check('createdBy', 'Error en el campo createdBy')
        .exists().withMessage('Para crear chat se debe enviar obligatoriamente la propiedad createdBy')
        .notEmpty().withMessage('El campo createdBy no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo createdBy debe ser un número entero'),
    check('receiverId', 'Error en el campo receiverId')
        .exists().withMessage('Para crear un chat se debe enviar obligatoriamente la propiedad receiverId')
        .notEmpty().withMessage('El campo receiverId no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo receiverId debe ser un número entero'),
    validateResult
]

const createGroupChatValidator = [
    check('title', 'Error en el campo title')
        .isString().withMessage('El tipo de dato del campo title debe ser una cadena de texto').optional()
        .isLength({max: 35}).withMessage('El campo title debe tener como máximo 35 caracteres'),
    check('chatTypeId', 'Error en el campo chatTypeId')
        .exists().withMessage('Para crear un chat se debe enviar obligatoriamente la propiedad chatTypeId')
        .notEmpty().withMessage('El campo chatTypeId no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo chatTypeId debe ser un número entero'),
    check('createdBy', 'Error en el campo createdBy')
        .exists().withMessage('Para crear un chat se debe enviar obligatoriamente la propiedad createdBy')
        .notEmpty().withMessage('El campo createdBy no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo createdBy debe ser un número entero'),
    validateResult
]

const getUsersAndMessagesByChatIdValidator = [
    check('id', 'Error en el campo id')
        .exists().withMessage('Para crear un chat se debe enviar obligatoriamente la propiedad id')
        .notEmpty().withMessage('El campo id no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo id debe ser un número entero'),
    validateResult
]

const deleteChatValidator = [
    check('chatId', 'Error en el campo chatId')
        .exists().withMessage('Para crear un chat se debe enviar obligatoriamente la propiedad chatId')
        .notEmpty().withMessage('El campo chatId no debe estar vacío')
        .isInt().withMessage('El tipo de dato del campo chatId debe ser un número entero'),
    validateResult
]

module.exports = {createChatValidator, createGroupChatValidator, getUsersAndMessagesByChatIdValidator, deleteChatValidator}