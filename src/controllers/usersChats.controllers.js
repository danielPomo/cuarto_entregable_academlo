const Chats = require('../models/chats.model')
const Users = require('../models/users.model')


const getAllChatsByUserId = async ( req, res ) => {
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
        res.status(400).json(error)
    }
}

module.exports = {getAllChatsByUserId}