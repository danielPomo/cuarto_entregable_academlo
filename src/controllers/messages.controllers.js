const Messages = require('../models/messages.model')

const createANewMessage = async (req, res, next) => {
  try {
    const {chatId} = req.params
    const {content, createdBy} = req.body
    await Messages.create({
        content, chatId, createdBy
    })
    res.status(201).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {createANewMessage}