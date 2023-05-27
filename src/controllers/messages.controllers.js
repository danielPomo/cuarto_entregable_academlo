const Messages = require('../models/messages.model')

const createANewMessage = async (req, res) => {
  try {
    const {chatId} = req.params
    const {content, createdBy} = req.body
    await Messages.create({
        content, chatId, createdBy
    })
    res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {createANewMessage}