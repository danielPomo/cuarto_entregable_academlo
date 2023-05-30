const Chats = require('../models/chats.model')
const Users = require('../models/users.model')


const getAllChatsByUserId = async ( req, res, next ) => {
    try {
        const {id} = req.params
        const chatsByUserId = await Users.findByPk(id, {
            attributes: {
                exclude: ['password']
            },
            include: {
                model: Chats,
                through: {
                    attributes: []
                }
            }
        })
        res.json(chatsByUserId)
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllChatsByUserId}