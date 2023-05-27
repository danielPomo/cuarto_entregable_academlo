const {check} = require('express-validator')
const validateResult = require('../utils/validationResult')

const createUserValidator = [
    check('username', 'Error en el campo username')
        .exists().withMessage('Para crear un usuario se debe enviar obligatoriamente la propiedad username')
        .notEmpty().withMessage('El campo username no debe estar vacío')
        .isString().withMessage('El tipo de dato del campo username debe ser una cadena de texto')
        .isLength({min: 6, max: 15}).withMessage('El campo username debe tener como mínimo 6 caracteres y como máximo 15'),
    check('email', 'Error en el campo email')
        .exists().withMessage('Para crear un usuario se debe enviar obligatoriamente la propiedad email')
        .notEmpty().withMessage('El campo email no debe estar vacío')
        .isEmail().withMessage('El tipo de dato del campo email debe ser una cadena de texto que coincida con el formato de una dirección de email')
        .isLength({min: 7, max: 50}).withMessage('El campo username debe tener como mínimo 6 caracteres y como máximo 15'),
    check('password', 'Error en el campo password')
        .exists().withMessage('El campo password es obligatorio')
        .notEmpty().withMessage('El campo password no puede estar vacío')
        .isString().withMessage('El campo password debe ser una cadena de texto')
        .isLength({min: 8, max: 20}).withMessage('El campo password debe tener entre 8 y 20 caracteres'),
    check('firstname', 'Error en el campo firstname')
        .exists().withMessage('Para crear un usuario se debe enviar obligatoriamente la propiedad firstname')
        .notEmpty().withMessage('El campo firstname no debe estar vacío')
        .isString().withMessage('El tipo de dato del campo firstname debe ser una cadena de texto')
        .isLength({min: 1, max: 30}).withMessage('El campo firstname debe tener como mínimo 6 caracteres y como máximo 15'),
    validateResult
]

const logUserValidator = [
    check('email', 'Error en el campo email')
        .exists().withMessage('Para crear un usuario se debe enviar obligatoriamente la propiedad email')
        .notEmpty().withMessage('El campo email no debe estar vacío')
        .isEmail().withMessage('El tipo de dato del campo email debe ser una cadena de texto que coincida con el formato de una dirección de email')
        .isLength({min: 7, max: 50}).withMessage('El campo username debe tener como mínimo 6 caracteres y como máximo 15'),
    check('password', 'Error en el campo password')
        .exists().withMessage('El campo password es obligatorio')
        .notEmpty().withMessage('El campo password no puede estar vacío')
        .isString().withMessage('El campo password debe ser una cadena de texto')
        .isLength({min: 8, max: 20}).withMessage('El campo password debe tener entre 8 y 20 caracteres'),
    validateResult
]

module.exports = {createUserValidator, logUserValidator}