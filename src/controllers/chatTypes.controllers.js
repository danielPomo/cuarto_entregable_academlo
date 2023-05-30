const ChatTypes = require('../models/chatTypes.model')

const createChatType = async ( req, res, next ) => {
    try {
        const {chatType} = req.body
        await ChatTypes.create({
            chatType: chatType
        })
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

const getAllChatTypes = async ( req, res, next ) => {
    try {
        const chatTypes = await ChatTypes.findAll()
        res.json(chatTypes)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllChatTypes, createChatType}