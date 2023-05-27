const Users = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async ( req, res ) => {
    try {
        const {username, email, password, firstname} = req.body
        const hashed = await bcrypt.hash(password, 10)
        await Users.create({
            username, email, password: hashed, firstname
        })
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const logUser = async ( req, res ) => {
    try {
        const {email, password} = req.body
        const user = await Users.findOne({
            where: {
                email: email
            }
        }) 

        if (!user) {
            return res.status(400).json({
                error: 'Invalid email.',
                message: 'There is no user registered with this email.'
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400).json({
                error: 'Invalid password.',
                message: 'The password is not correct.'
            })
        }

        const {id, username, firstname, lastname} = user
        const userJustCreated = {id, username, firstname, lastname, email}

        const token = jwt.sign(userJustCreated, "HaveANiceDay", {
            algorithm: 'HS512',
            expiresIn: '12h'
        })
        userJustCreated.token = token
        res.json(userJustCreated)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllUsers = async ( req, res ) => {
    try {
        const allUsers = await Users.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        res.json(allUsers)
    } catch (error) {
        res.status(400).json(error)
    }
} 

module.exports = {createUser, logUser, getAllUsers}