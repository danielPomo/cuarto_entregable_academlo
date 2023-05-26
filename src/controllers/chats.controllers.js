const Chats = require('../models/chats.model')
const UsersChats = require('../models/usersChats.model') 

const createChat = async ( req, res ) => {
    try {
        const {title, createdBy, receiverId} = req.body
        const newChat = await Chats.create({
            title, createdBy
        })
        await UsersChats.create({
            userId: createdBy, chatId: newChat.id
        })
        await UsersChats.create({
            userId: receiverId, chatId: newChat.id
        })
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {createChat}