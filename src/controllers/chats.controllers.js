const Chats = require('../models/chats.model')
const Users = require('../models/users.model')
const Messages = require('../models/messages.model')
const UsersChats = require('../models/usersChats.model') 

const createChat = async ( req, res, next ) => {
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
        next(error)
    }
}

const createGroupChat = async ( req, res, next ) => {
    try {
        const {title, chatTypeId, createdBy} = req.body
        const newGroupChat = await Chats.create({
            title, chatTypeId, createdBy
        })
        await UsersChats.create({
            userId: createdBy, chatId: newGroupChat.id
        })
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

const getUsersAndMessagesByChatId = async ( req, res, next ) => {
    try {
        const {id} = req.params
        const chatById = await Chats.findByPk(id, {
            include: {
                model: Messages,
                include: {
                    model: Users
                }
            }
        }
        )
        res.json(chatById)
    } catch (error) {
        next(error)
    }
}

const deleteChat = async ( req, res, next ) => {
    try {
        const {chatId} = req.params
        await Messages.destroy({
            where: {
                chatId
            }
        })
        await UsersChats.destroy({
            where: {
                chatId
            }
        })
        await Chats.destroy({
            where: {
                id: chatId
            }
        })
        res.status(204).send()
    } catch (error) {
        rnext(error)
    }
}

module.exports = {createChat, createGroupChat, getUsersAndMessagesByChatId, deleteChat}