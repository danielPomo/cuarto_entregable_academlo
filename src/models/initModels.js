const Users = require('./users.model.js')
const Messages = require('./messages.model.js')
const ChatTypes = require('./chatTypes.model.js')
const Chats = require('./chats.model.js')
const UsersChats = require('./usersChats.model.js')

const initModels = () => {
    Chats.belongsTo(ChatTypes, {foreignKey: 'type'})
    ChatTypes.hasMany(Chats, {foreignKey: 'type'})

    Chats.belongsTo(Users, {foreignKey: 'createdBy'})
    Users.hasMany(Chats, {foreignKey: 'createdBy'})

    Messages.belongsTo(Users, {foreignKey: 'createdBy'})
    Users.hasMany(Messages, {foreignKey: 'createdBy'})

    Messages.belongsTo(Chats, {foreignKey: 'chatId'})
    Chats.hasMany(Messages, {foreignKey: 'chatId'})

    Chats.belongsToMany(Users, {through: UsersChats})
    Users.belongsToMany(Chats, {through: UsersChats})

}

module.exports = initModels