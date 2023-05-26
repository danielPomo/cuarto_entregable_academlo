const ChatTypes = require('../models/chatTypes.model')

const createChatType = async ( req, res ) => {
    try {
        const {chatType} = req.body
        await ChatTypes.create({
            chatType: chatType
        })
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllChatTypes = async ( req, res ) => {
    try {
        const chatTypes = await ChatTypes.findAll()
        res.json(chatTypes)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {getAllChatTypes, createChatType}